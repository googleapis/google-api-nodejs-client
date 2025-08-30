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

export namespace merchantapi_accounts_v1 {
  export interface Options extends GlobalOptions {
    version: 'accounts_v1';
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
   * const merchantapi = google.merchantapi('accounts_v1');
   * ```
   */
  export class Merchantapi {
    context: APIRequestContext;
    accounts: Resource$Accounts;
    termsOfService: Resource$Termsofservice;

    constructor(options: GlobalOptions, google?: GoogleConfigurable) {
      this.context = {
        _options: options || {},
        google,
      };

      this.accounts = new Resource$Accounts(this.context);
      this.termsOfService = new Resource$Termsofservice(this.context);
    }
  }

  /**
   * Collection of information related to the about page ([impressum](https://support.google.com/merchants/answer/14675634?ref_topic=15145634&sjid=6892280366904591178-NC)).
   */
  export interface Schema$About {
    /**
     * Output only. The state of the URI.
     */
    state?: string | null;
    /**
     * Required. The about page URI.
     */
    uri?: string | null;
  }
  /**
   * Describes the [accepted terms of service](https://developers.google.com/merchant/api/guides/accounts/create-and-configure#accept_the_merchant_center_terms_of_service).
   */
  export interface Schema$Accepted {
    /**
     * Required. The account where the acceptance was recorded. This can be the account itself or, in the case of subaccounts, the advanced account.
     */
    acceptedBy?: string | null;
    /**
     * Required. The accepted termsOfService.
     */
    termsOfService?: string | null;
    /**
     * Optional. When set, it states that the accepted `TermsOfService` is only valid until the end of this date (in UTC). A new one must be accepted before then. The information of the required `TermsOfService` is found in the `Required` message.
     */
    validUntil?: Schema$Date;
  }
  /**
   * Response message for the `AcceptTermsOfService` method.
   */
  export interface Schema$AcceptTermsOfServiceResponse {
    /**
     * The agreement state after accepting the ToS.
     */
    termsOfServiceAgreementState?: Schema$TermsOfServiceAgreementState;
  }
  /**
   * The `Account` message represents a business's account within Shopping Ads. It's the primary entity for managing product data, settings, and interactions with Google's services and external providers. Accounts can operate as standalone entities or be part of a advanced account structure. In an advanced account setup the parent account manages multiple sub-accounts. Establishing an account involves configuring attributes like the account name, time zone, and language preferences. The `Account` message is the parent entity for many other resources, for example, `AccountRelationship`, `Homepage`, `BusinessInfo` and so on.
   */
  export interface Schema$Account {
    /**
     * Output only. The ID of the account.
     */
    accountId?: string | null;
    /**
     * Required. A human-readable name of the account. See [store name](https://support.google.com/merchants/answer/160556) and [business name](https://support.google.com/merchants/answer/12159159) for more information.
     */
    accountName?: string | null;
    /**
     * Optional. Whether this account contains adult content.
     */
    adultContent?: boolean | null;
    /**
     * Required. The account's [BCP-47 language code](https://tools.ietf.org/html/bcp47), such as `en-US` or `sr-Latn`.
     */
    languageCode?: string | null;
    /**
     * Identifier. The resource name of the account. Format: `accounts/{account\}`
     */
    name?: string | null;
    /**
     * Output only. Whether this is a test account.
     */
    testAccount?: boolean | null;
    /**
     * Required. The time zone of the account. On writes, `time_zone` sets both the `reporting_time_zone` and the `display_time_zone`. For reads, `time_zone` always returns the `display_time_zone`. If `display_time_zone` doesn't exist for your account, `time_zone` is empty. The `version` field is not supported, won't be set in responses and will be silently ignored if specified in requests.
     */
    timeZone?: Schema$TimeZone;
  }
  /**
   * `AccountAggregation` payload.
   */
  export interface Schema$AccountAggregation {}
  /**
   * Issues with your Merchant Center account that can impact all your products. For more information, see [Account-level issues in Merchant Center](https://support.google.com/merchants/answer/12153802?sjid=17798438912526418908-EU#account).
   */
  export interface Schema$AccountIssue {
    /**
     * Further localized details about the issue.
     */
    detail?: string | null;
    /**
     * Link to Merchant Center Help Center providing further information about the issue and how to fix it.
     */
    documentationUri?: string | null;
    /**
     * The impact this issue has on various destinations.
     */
    impactedDestinations?: Schema$ImpactedDestination[];
    /**
     * Identifier. The resource name of the account issue. Format: `accounts/{account\}/issues/{id\}`. For example, `accounts/123456/issues/misrepresentation-of-self-or-products-unacceptable-business-practice-policy`.
     */
    name?: string | null;
    /**
     * The overall severity of the issue.
     */
    severity?: string | null;
    /**
     * The localized title of the issue.
     */
    title?: string | null;
  }
  /**
   * `AccountManagement` payload.
   */
  export interface Schema$AccountManagement {}
  /**
   * The `AccountRelationship` message defines a formal connection between a merchant's account and a service provider's account. This relationship enables the provider to offer specific services to the business, such as product management or campaign management. It specifies the access rights and permissions to the business's data relevant to those services. Establishing an account relationship involves linking the merchant's account with a provider's account. The provider could be another Google account (like Google Ads or Google My Business) or a third-party platform (such as Shopify or WooCommerce).
   */
  export interface Schema$AccountRelationship {
    /**
     * Optional. An optional alias you can assign to this account relationship. This alias acts as a convenient identifier for your own reference and management. It must be unique among all your account relationships with the same provider. For example, you might use `account_id_alias` to assign a friendly name to this relationship for easier identification in your systems.
     */
    accountIdAlias?: string | null;
    /**
     * Identifier. The resource name of the account relationship. Format: `accounts/{account\}/relationships/{relationship\}`. For example, `accounts/123456/relationships/567890`.
     */
    name?: string | null;
    /**
     * Immutable. The provider of the service. Either the reference to an account such as `providers/123` or a well-known service provider (one of `providers/GOOGLE_ADS` or `providers/GOOGLE_BUSINESS_PROFILE`).
     */
    provider?: string | null;
    /**
     * Output only. The human-readable display name of the provider account.
     */
    providerDisplayName?: string | null;
  }
  /**
   * The `AccountService` message represents a specific service that a provider account offers to a Merchant Center account. `AccountService` defines the permissions and capabilities granted to the provider, allowing for operations such as product management or campaign management. The lifecycle of an `AccountService` involves a proposal phase, where one party suggests the service, and an approval phase, where the other party accepts or rejects it. This handshake mechanism ensures mutual consent before any access is granted. This mechanism safeguards both parties by ensuring that access rights are granted appropriately and that both the business and provider are aware of the services enabled. In scenarios where a user is an admin of both accounts, the approval can happen automatically. The mutability of a service is also managed through `AccountService`. Some services might be immutable, for example, if they were established through other systems or APIs, and you cannot alter them through this API.
   */
  export interface Schema$AccountService {
    /**
     * Service type for account aggregation. This enables the provider, which is an advanced account, to manage multiple sub-accounts (client accounts). Through this service, the advanced account provider can perform administrative and operational tasks across all linked sub-accounts. This is useful for agencies, aggregators, or large retailers that need centralized control over many Merchant Center accounts.
     */
    accountAggregation?: Schema$AccountAggregation;
    /**
     * Service type for account management. Enables the provider to perform administrative actions on the business's account, such as configuring account settings, managing users, or updating business information.
     */
    accountManagement?: Schema$AccountManagement;
    /**
     * Service type for managing advertising campaigns. Grants the provider access to create and manage the business's ad campaigns, including setting up campaigns, adjusting bids, and optimizing performance.
     */
    campaignsManagement?: Schema$CampaignsManagement;
    /**
     * Immutable. An optional, immutable identifier that Google uses to refer to this account when communicating with the provider. This should be the unique account ID within the provider's system (for example, your shop ID in Shopify). If you have multiple accounts with the same provider - for instance, different accounts for various regions — the `external_account_id` differentiates between them, ensuring accurate linking and integration between Google and the provider.
     */
    externalAccountId?: string | null;
    /**
     * Output only. Information about the state of the service in terms of establishing it (e.g. is it pending approval or approved).
     */
    handshake?: Schema$Handshake;
    /**
     * Service type for local listings management. The business group associated with the external account id will be used to provide local inventory to this Merchant Center account.
     */
    localListingManagement?: Schema$LocalListingManagement;
    /**
     * Output only. Whether the service is mutable (e.g. through Approve / Reject RPCs). A service that was created through another system or API might be immutable.
     */
    mutability?: string | null;
    /**
     * Identifier. The resource name of the account service. Format: `accounts/{account\}/services/{service\}`
     */
    name?: string | null;
    /**
     * Service type for managing products. This allows the provider to handle product data on behalf of the business, including reading and writing product listings. It's commonly used when the provider offers inventory management or catalog synchronization services to keep the business's product information up-to-date across platforms.
     */
    productsManagement?: Schema$ProductsManagement;
    /**
     * Output only. The provider of the service. Either the reference to an account such as `providers/123` or a well-known service provider (one of `providers/GOOGLE_ADS` or `providers/GOOGLE_BUSINESS_PROFILE`).
     */
    provider?: string | null;
    /**
     * Output only. The human-readable display name of the provider account.
     */
    providerDisplayName?: string | null;
  }
  /**
   * Additional instructions to add account services during creation of the account.
   */
  export interface Schema$AddAccountService {
    /**
     * The provider is an [aggregator](https://support.google.com/merchants/answer/188487) for the account. Payload for service type Account Aggregation.
     */
    accountAggregation?: Schema$AccountAggregation;
    /**
     * Required. The provider of the service. Either the reference to an account such as `providers/123` or a well-known service provider (one of `providers/GOOGLE_ADS` or `providers/GOOGLE_BUSINESS_PROFILE`).
     */
    provider?: string | null;
  }
  /**
   * Shipping address of the warehouse.
   */
  export interface Schema$Address {
    /**
     * Required. Top-level administrative subdivision of the country. For example, a state like California ("CA") or a province like Quebec ("QC").
     */
    administrativeArea?: string | null;
    /**
     * Required. City, town or commune. May also include dependent localities or sublocalities (For example neighborhoods or suburbs).
     */
    city?: string | null;
    /**
     * Required. Postal code or ZIP (For example "94043").
     */
    postalCode?: string | null;
    /**
     * Required. [CLDR country code](http://www.unicode.org/repos/cldr/tags/latest/common/main/en.xml) (For example "US").
     */
    regionCode?: string | null;
    /**
     * Street-level part of the address. For example: `111w 31st Street`.
     */
    streetAddress?: string | null;
  }
  /**
   * Instruction for adding a user to the account during creation.
   */
  export interface Schema$AddUser {
    /**
     * Optional. Details about the user to be added. At the moment, only access rights may be specified.
     */
    user?: Schema$User;
    /**
     * Required. The email address of the user (for example, `john.doe@gmail.com`).
     */
    userId?: string | null;
  }
  /**
   * Request to approve an account service.
   */
  export interface Schema$ApproveAccountServiceRequest {}
  /**
   * Collection of information related to the [autofeed](https://support.google.com/merchants/answer/7538732) settings.
   */
  export interface Schema$AutofeedSettings {
    /**
     * Output only. Determines whether the business is eligible for being enrolled into an autofeed.
     */
    eligible?: boolean | null;
    /**
     * Required. Enables or disables product crawling through the autofeed for the given account. Autofeed accounts must meet [certain conditions](https://support.google.com/merchants/answer/7538732#Configure_automated_feeds_Standard_Experience), which can be checked through the `eligible` field. The account must **not** be a marketplace. When the autofeed is enabled for the first time, the products usually appear instantly. When re-enabling, it might take up to 24 hours for products to appear.
     */
    enableProducts?: boolean | null;
    /**
     * Identifier. The resource name of the autofeed settings. Format: `accounts/{account\}/autofeedSettings`.
     */
    name?: string | null;
  }
  /**
   * This improvement will attempt to automatically correct submitted images if they don't meet the [image requirements](https://support.google.com/merchants/answer/6324350), for example, removing overlays. If successful, the image will be replaced and approved. This improvement is only applied to images of disapproved offers. For more information see: [Automatic image improvements](https://support.google.com/merchants/answer/9242973)
   */
  export interface Schema$AutomaticImageImprovements {
    /**
     * Optional. Determines how the images should be automatically updated. If this field is not present and provided in the update mask, then the settings will be deleted. If there are no settings for subaccount, they are inherited from aggregator.
     */
    accountImageImprovementsSettings?: Schema$ImageImprovementsAccountLevelSettings;
    /**
     * Output only. The effective value of allow_automatic_image_improvements. If account_image_improvements_settings is present, then this value is the same. Otherwise, it represents the inherited value of the parent account. Read-only.
     */
    effectiveAllowAutomaticImageImprovements?: boolean | null;
  }
  /**
   * Collection of information related to the [automatic improvements](https://developers.google.com/shopping-content/guides/automatic-improvements) of an account.
   */
  export interface Schema$AutomaticImprovements {
    /**
     * This improvement will attempt to automatically correct submitted images if they don't meet the [image requirements](https://support.google.com/merchants/answer/6324350), for example, removing overlays. If successful, the image will be replaced and approved. This improvement is only applied to images of disapproved offers. For more information see: [Automatic image improvements](https://support.google.com/merchants/answer/9242973) This field is only updated (cleared) if provided in the update mask.
     */
    imageImprovements?: Schema$AutomaticImageImprovements;
    /**
     * Turning on [item updates](https://support.google.com/merchants/answer/3246284) allows Google to automatically update items for you. When item updates are on, Google uses the structured data markup on the website and advanced data extractors to update the price and availability of the items. When the item updates are off, items with mismatched data aren't shown. This field is only updated (cleared) if provided in the update mask.
     */
    itemUpdates?: Schema$AutomaticItemUpdates;
    /**
     * Identifier. The resource name of the automatic improvements. Format: `accounts/{account\}/automaticImprovements`.
     */
    name?: string | null;
    /**
     * Not available for [advanced accounts](https://support.google.com/merchants/answer/188487). By turning on [automatic shipping improvements](https://support.google.com/merchants/answer/10027038), you are allowing Google to improve the accuracy of your delivery times shown to shoppers using Google. More accurate delivery times, especially when faster, typically lead to better conversion rates. Google will improve your estimated delivery times based on various factors: * Delivery address of an order * Current handling time and shipping time settings * Estimated weekdays or business days * Parcel tracking data This field is only updated (cleared) if provided in the update mask.
     */
    shippingImprovements?: Schema$AutomaticShippingImprovements;
  }
  /**
   * Turning on [item updates](https://support.google.com/merchants/answer/3246284) allows Google to automatically update items for you. When item updates are on, Google uses the structured data markup on the website and advanced data extractors to update the price and availability of the items. When the item updates are off, items with mismatched data aren't shown.
   */
  export interface Schema$AutomaticItemUpdates {
    /**
     * Optional. Determines which attributes of the items should be automatically updated. If this field is not present and provided in the update mask, then the settings will be deleted. If there are no settings for subaccount, they are inherited from aggregator.
     */
    accountItemUpdatesSettings?: Schema$ItemUpdatesAccountLevelSettings;
    /**
     * Output only. The effective value of allow_availability_updates. If account_item_updates_settings is present, then this value is the same. Otherwise, it represents the inherited value of the parent account. The default value is true if no settings are present. Read-only.
     */
    effectiveAllowAvailabilityUpdates?: boolean | null;
    /**
     * Output only. The effective value of allow_condition_updates. If account_item_updates_settings is present, then this value is the same. Otherwise, it represents the inherited value of the parent account. The default value is true if no settings are present. Read-only.
     */
    effectiveAllowConditionUpdates?: boolean | null;
    /**
     * Output only. The effective value of allow_price_updates. If account_item_updates_settings is present, then this value is the same. Otherwise, it represents the inherited value of the parent account. The default value is true if no settings are present. Read-only.
     */
    effectiveAllowPriceUpdates?: boolean | null;
    /**
     * Output only. The effective value of allow_strict_availability_updates. If account_item_updates_settings is present, then this value is the same. Otherwise, it represents the inherited value of the parent account. The default value is true if no settings are present. Read-only.
     */
    effectiveAllowStrictAvailabilityUpdates?: boolean | null;
  }
  /**
   * Not available for [advanced accounts](https://support.google.com/merchants/answer/188487). By turning on [automatic shipping improvements](https://support.google.com/merchants/answer/10027038), you are allowing Google to improve the accuracy of your delivery times shown to shoppers using Google. More accurate delivery times, especially when faster, typically lead to better conversion rates. Google will improve your estimated delivery times based on various factors: * Delivery address of an order * Current handling time and shipping time settings * Estimated weekdays or business days * Parcel tracking data
   */
  export interface Schema$AutomaticShippingImprovements {
    /**
     * Enables automatic shipping improvements.
     */
    allowShippingImprovements?: boolean | null;
  }
  /**
   * Request message for the `BatchCreateRegions` method.
   */
  export interface Schema$BatchCreateRegionsRequest {
    /**
     * Required. The region(s) to create. The maximum number of regions that can be created in a batch is 100.
     */
    requests?: Schema$CreateRegionRequest[];
  }
  /**
   * Response message for the `BatchCreateRegions` method.
   */
  export interface Schema$BatchCreateRegionsResponse {
    /**
     * The created region(s).
     */
    regions?: Schema$Region[];
  }
  /**
   * Request message for the `BatchDeleteRegions` method.
   */
  export interface Schema$BatchDeleteRegionsRequest {
    /**
     * Required. The names of the regions to delete. A maximum of 1000 regions can be deleted in a batch.
     */
    requests?: Schema$DeleteRegionRequest[];
  }
  /**
   * Request message for the `BatchUpdateRegions` method.
   */
  export interface Schema$BatchUpdateRegionsRequest {
    /**
     * Required. The region(s) to update. The maximum number of regions that can be updated in a batch is 100.
     */
    requests?: Schema$UpdateRegionRequest[];
  }
  /**
   * Response message for the `BatchUpdateRegions` method.
   */
  export interface Schema$BatchUpdateRegionsResponse {
    /**
     * The updated region(s).
     */
    regions?: Schema$Region[];
  }
  /**
   * Business days of the warehouse.
   */
  export interface Schema$BusinessDayConfig {
    /**
     * Required. Regular business days. May not be empty.
     */
    businessDays?: string[] | null;
  }
  /**
   * Collection of information related to the [identity of a business](https://support.google.com/merchants/answer/12564247).
   */
  export interface Schema$BusinessIdentity {
    /**
     * Optional. Specifies whether the business identifies itself as being black-owned. This optional field will only be available for businesses with the business country set to `US`. It is also not applicable for marketplaces or marketplace sellers.
     */
    blackOwned?: Schema$IdentityAttribute;
    /**
     * Optional. Specifies whether the business identifies itself as being latino-owned. This optional field will only be available for businesses with the business country set to `US`. It is also not applicable for marketplaces or marketplace sellers.
     */
    latinoOwned?: Schema$IdentityAttribute;
    /**
     * Identifier. The resource name of the business identity. Format: `accounts/{account\}/businessIdentity`
     */
    name?: string | null;
    /**
     * Required. Whether the identity attributes may be used for promotions.
     */
    promotionsConsent?: string | null;
    /**
     * Optional. Specifies whether the business identifies itself as a small business. This optional field will only be available for businesses with a business country set to `US`. It is also not applicable for marketplaces.
     */
    smallBusiness?: Schema$IdentityAttribute;
    /**
     * Optional. Specifies whether the business identifies itself as being veteran-owned. This optional field will only be available for businesses with a business country set to `US`. It is also not applicable for marketplaces or marketplace sellers.
     */
    veteranOwned?: Schema$IdentityAttribute;
    /**
     * Optional. Specifies whether the business identifies itself as being women-owned. This optional field will only be available for businesses with a business country set to `US`. It is also not applicable for marketplaces or marketplace sellers.
     */
    womenOwned?: Schema$IdentityAttribute;
  }
  /**
   * The `BusinessInfo` message contains essential information about a business. This message captures key business details such as physical address, customer service contacts, and region-specific identifiers.
   */
  export interface Schema$BusinessInfo {
    /**
     * Optional. The address of the business. Only `region_code`, `address_lines`, `postal_code`, `administrative_area` and `locality` fields are supported. All other fields are ignored.
     */
    address?: Schema$PostalAddress;
    /**
     * Optional. The customer service of the business.
     */
    customerService?: Schema$CustomerService;
    /**
     * Optional. The 10-digit [Korean business registration number](https://support.google.com/merchants/answer/9037766) separated with dashes in the format: XXX-XX-XXXXX.
     */
    koreanBusinessRegistrationNumber?: string | null;
    /**
     * Identifier. The resource name of the business info. Format: `accounts/{account\}/businessInfo`
     */
    name?: string | null;
    /**
     * Output only. The phone number of the business.
     */
    phone?: Schema$PhoneNumber;
    /**
     * Output only. The phone verification state of the business.
     */
    phoneVerificationState?: string | null;
  }
  /**
   * `CampaignManagement` payload.
   */
  export interface Schema$CampaignsManagement {}
  /**
   * A list of carrier rates that can be referred to by `main_table` or `single_value`. Supported carrier services are defined in https://support.google.com/merchants/answer/12577710?ref_topic=12570808&sjid=10662598224319463032-NC#zippy=%2Cdelivery-cost-rate-type%2Ccarrier-rate-au-de-uk-and-us-only.
   */
  export interface Schema$CarrierRate {
    /**
     * Required. Carrier service, such as `"UPS"` or `"Fedex"`.
     */
    carrier?: string | null;
    /**
     * Required. Carrier service, such as `"ground"` or `"2 days"`.
     */
    carrierService?: string | null;
    /**
     * Optional. Additive shipping rate modifier. Can be negative. For example `{ "amount_micros": 1, "currency_code" : "USD" \}` adds $1 to the rate, `{ "amount_micros": -3, "currency_code" : "USD" \}` removes $3 from the rate.
     */
    flatAdjustment?: Schema$Price;
    /**
     * Required. Name of the carrier rate. Must be unique per rate group.
     */
    name?: string | null;
    /**
     * Required. Shipping origin for this carrier rate.
     */
    originPostalCode?: string | null;
    /**
     * Optional. Multiplicative shipping rate modifier as a number in decimal notation. Can be negative. For example `"5.4"` increases the rate by 5.4%, `"-3"` decreases the rate by 3%.
     */
    percentageAdjustment?: string | null;
  }
  /**
   * [CheckoutSettings](https://support.google.com/merchants/answer/13945960) for a specific merchant.
   */
  export interface Schema$CheckoutSettings {
    /**
     * Output only. The effective value of enrollment_state for a given merchant ID. If account level settings are present then this value will be a copy of the account level settings. Otherwise, it will have the value of the parent account (for only marketplace sellers).
     */
    effectiveEnrollmentState?: string | null;
    /**
     * Output only. The effective value of `review_state` for a given merchant ID. If account level settings are present then this value will be a copy of the account level settings. Otherwise, it will have the value of the parent account (for only marketplace sellers).
     */
    effectiveReviewState?: string | null;
    /**
     * Output only. The effective value of `uri_settings` for a given merchant. If account level settings are present then this value will be a copy of url settings. Otherwise, it will have the value of the parent account (for only marketplace sellers).
     */
    effectiveUriSettings?: Schema$UriSettings;
    /**
     * Optional. The destinations (also known as [Marketing methods](https://support.google.com/merchants/answer/15130232)) to which the checkout program applies, valid destination values are `SHOPPING_ADS`, `FREE_LISTINGS`
     */
    eligibleDestinations?: string[] | null;
    /**
     * Output only. Reflects the merchant enrollment state in `Checkout` program.
     */
    enrollmentState?: string | null;
    /**
     * Identifier. The resource name of the program configuration settings. Format: `accounts/{account\}/programs/{program\}/checkoutSettings`
     */
    name?: string | null;
    /**
     * Output only. Reflects the merchant review state in `Checkout` program. This is set based on the data quality reviews of the URL provided by the merchant. A merchant with enrollment state as `ENROLLED` can be in the following review states: `IN_REVIEW`, `APPROVED` or `DISAPPROVED`. A merchant must be in an `enrollment_state` of `ENROLLED` before a review can begin for the merchant.For more details, check the help center doc.
     */
    reviewState?: string | null;
    /**
     * URI settings for cart or checkout URL.
     */
    uriSettings?: Schema$UriSettings;
  }
  /**
   * Request message for the `ClaimHomepage` method.
   */
  export interface Schema$ClaimHomepageRequest {
    /**
     * Optional. When set to `true`, this option removes any existing claim on the requested website from any other account to the account making the request, effectively replacing the previous claim.
     */
    overwrite?: boolean | null;
  }
  /**
   * Request message for the `CreateAndConfigureAccount` method.
   */
  export interface Schema$CreateAndConfigureAccountRequest {
    /**
     * Required. The account to be created.
     */
    account?: Schema$Account;
    /**
     * Required. An account service between the account to be created and the provider account is initialized as part of the creation. At least one such service needs to be provided. Currently exactly one of these needs to be `account_aggregation` and `accounts.createAndConfigure` method can be used to create a sub-account under an existing advanced account through this method. Additional `account_management` or `product_management` services may be provided.
     */
    service?: Schema$AddAccountService[];
    /**
     * Optional. Users to be added to the account.
     */
    user?: Schema$AddUser[];
  }
  /**
   * Request message for the `CreateRegion` method.
   */
  export interface Schema$CreateRegionRequest {
    /**
     * Required. The account to create a region for. Format: `accounts/{account\}`
     */
    parent?: string | null;
    /**
     * Required. The region to create.
     */
    region?: Schema$Region;
    /**
     * Required. The identifier for the region, unique over all regions of the same account.
     */
    regionId?: string | null;
  }
  /**
   * Customer service information.
   */
  export interface Schema$CustomerService {
    /**
     * Optional. The email address where customer service may be reached.
     */
    email?: string | null;
    /**
     * Optional. The phone number where customer service may be called.
     */
    phone?: Schema$PhoneNumber;
    /**
     * Optional. The URI where customer service may be found.
     */
    uri?: string | null;
  }
  /**
   * Configs related to local delivery ends for the day.
   */
  export interface Schema$CutoffConfig {
    /**
     * Time that local delivery ends for the day.
     */
    localCutoffTime?: Schema$LocalCutoffTime;
    /**
     * Businesses can opt-out of showing n+1 day local delivery when they have a shipping service configured to n day local delivery. For example, if the shipping service defines same-day delivery, and it's past the cut-off, setting this field to `true` results in the calculated shipping service rate returning `NO_DELIVERY_POST_CUTOFF`. In the same example, setting this field to `false` results in the calculated shipping time being one day. This is only for local delivery.
     */
    noDeliveryPostCutoff?: boolean | null;
    /**
     * Only valid with local delivery fulfillment. Represents cutoff time as the number of hours before store closing. Mutually exclusive with `local_cutoff_time`.
     */
    storeCloseOffsetHours?: string | null;
  }
  /**
   * Business days cutoff time definition.
   */
  export interface Schema$CutoffTime {
    /**
     * Required. Hour of the cutoff time until which an order has to be placed to be processed in the same day.
     */
    hour?: number | null;
    /**
     * Required. Minute of the cutoff time until which an order has to be placed to be processed in the same day.
     */
    minute?: number | null;
    /**
     * Required. [Timezone identifier](https://developers.google.com/adwords/api/docs/appendix/codes-formats#timezone-ids) For example "Europe/Zurich".
     */
    timeZone?: string | null;
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
   * Request message for the `DeleteRegion` method.
   */
  export interface Schema$DeleteRegionRequest {
    /**
     * Required. The name of the region to delete. Format: `accounts/{account\}/regions/{region\}`
     */
    name?: string | null;
  }
  /**
   * Time spent in various aspects from order to the delivery of the product.
   */
  export interface Schema$DeliveryTime {
    /**
     * Business days cutoff time definition. If not configured the cutoff time will be defaulted to 8AM PST.
     */
    cutoffTime?: Schema$CutoffTime;
    /**
     * The business days during which orders can be handled. If not provided, Monday to Friday business days will be assumed.
     */
    handlingBusinessDayConfig?: Schema$BusinessDayConfig;
    /**
     * Maximum number of business days spent before an order is shipped. 0 means same day shipped, 1 means next day shipped. Must be greater than or equal to `min_handling_days`. 'min_handling_days' and 'max_handling_days' should be either set or not set at the same time.
     */
    maxHandlingDays?: number | null;
    /**
     * Maximum number of business days that is spent in transit. 0 means same day delivery, 1 means next day delivery. Must be greater than or equal to `min_transit_days`.
     */
    maxTransitDays?: number | null;
    /**
     * Minimum number of business days spent before an order is shipped. 0 means same day shipped, 1 means next day shipped. 'min_handling_days' and 'max_handling_days' should be either set or not set at the same time.
     */
    minHandlingDays?: number | null;
    /**
     * Minimum number of business days that is spent in transit. 0 means same day delivery, 1 means next day delivery. Either `min_transit_days`, `max_transit_days` or `transit_time_table` must be set, but not both.
     */
    minTransitDays?: number | null;
    /**
     * The business days during which orders can be in-transit. If not provided, Monday to Friday business days will be assumed.
     */
    transitBusinessDayConfig?: Schema$BusinessDayConfig;
    /**
     * Transit time table, number of business days spent in transit based on row and column dimensions. Either `min_transit_days`, `max_transit_days` or `transit_time_table` can be set, but not both.
     */
    transitTimeTable?: Schema$TransitTable;
    /**
     * Optional. Indicates that the delivery time should be calculated per warehouse (shipping origin location) based on the settings of the selected carrier. When set, no other transit time related field in delivery time should be set.
     */
    warehouseBasedDeliveryTimes?: Schema$WarehouseBasedDeliveryTime[];
  }
  /**
   * Represents a developer registration owned by a Merchant account.
   */
  export interface Schema$DeveloperRegistration {
    /**
     * Output only. The GCP ids attached to this developer registration
     */
    gcpIds?: string[] | null;
    /**
     * Identifier. The `name` (ID) of the developer registration. Generated by the Content API upon creation of a new `DeveloperRegistration`. The `account` represents the merchant ID of the merchant that owns the registration.
     */
    name?: string | null;
  }
  /**
   * Request message for the DisableProgram method.
   */
  export interface Schema$DisableProgramRequest {}
  /**
   * Maximum delivery radius. This is only required for the local delivery shipment type.
   */
  export interface Schema$Distance {
    /**
     * Unit can differ based on country, it is parameterized to include miles and kilometers.
     */
    unit?: string | null;
    /**
     * Integer value of distance.
     */
    value?: string | null;
  }
  /**
   * The categories of notifications the user opted into / opted out of. The email preferences do not include mandatory announcements as users can't opt out of them.
   */
  export interface Schema$EmailPreferences {
    /**
     * Identifier. The name of the EmailPreferences. The endpoint is only supported for the authenticated user.
     */
    name?: string | null;
    /**
     * Optional. Updates on new features, tips and best practices.
     */
    newsAndTips?: string | null;
  }
  /**
   * A generic empty message that you can re-use to avoid defining duplicated empty messages in your APIs. A typical example is to use it as the request or the response type of an API method. For instance: service Foo { rpc Bar(google.protobuf.Empty) returns (google.protobuf.Empty); \}
   */
  export interface Schema$Empty {}
  /**
   * Request message for the EnableProgram method.
   */
  export interface Schema$EnableProgramRequest {}
  /**
   * Response message for the FindLfpProviders method.
   */
  export interface Schema$FindLfpProvidersResponse {
    /**
     * The LFP providers from the specified merchant in the specified country.
     */
    lfpProviders?: Schema$LfpProvider[];
    /**
     * A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages.
     */
    nextPageToken?: string | null;
  }
  /**
   * Collection of information related to a Google Business Profile (GBP) account.
   */
  export interface Schema$GbpAccount {
    /**
     * The id of the GBP account.
     */
    gbpAccountId?: string | null;
    /**
     * The name of the Business Profile. For personal accounts: Email id of the owner. For Business accounts: Name of the Business Account.
     */
    gbpAccountName?: string | null;
    /**
     * Number of listings under this account.
     */
    listingCount?: string | null;
    /**
     * Identifier. The resource name of the GBP account. Format: `accounts/{account\}/gbpAccount/{gbp_account\}`
     */
    name?: string | null;
    /**
     * The type of the Business Profile.
     */
    type?: string | null;
  }
  /**
   * A list of geotargets that defines the region area.
   */
  export interface Schema$GeoTargetArea {
    /**
     * Required. A non-empty list of [location IDs](https://developers.google.com/adwords/api/docs/appendix/geotargeting). They must all be of the same location type (for example, state).
     */
    geotargetCriteriaIds?: string[] | null;
  }
  /**
   * The current status of establishing of the service. (for example, pending approval or approved).
   */
  export interface Schema$Handshake {
    /**
     * Output only. The most recent account to modify the account service's `approval_status`.
     */
    actor?: string | null;
    /**
     * Output only. The approval state of this handshake.
     */
    approvalState?: string | null;
  }
  /**
   * A non-empty list of row or column headers for a table. Exactly one of `prices`, `weights`, `num_items`, `postal_code_group_names`, or `location` must be set.
   */
  export interface Schema$Headers {
    /**
     * Required. A list of location ID sets. Must be non-empty. Can only be set if all other fields are not set.
     */
    locations?: Schema$LocationIdSet[];
    /**
     * Required. A list of inclusive number of items upper bounds. The last value can be `"infinity"`. For example `["10", "50", "infinity"]` represents the headers "<= 10 items", "<= 50 items", and "\> 50 items". Must be non-empty. Can only be set if all other fields are not set.
     */
    numberOfItems?: string[] | null;
    /**
     * Required. A list of postal group names. The last value can be `"all other locations"`. Example: `["zone 1", "zone 2", "all other locations"]`. The referred postal code groups must match the delivery country of the service. Must be non-empty. Can only be set if all other fields are not set.
     */
    postalCodeGroupNames?: string[] | null;
    /**
     * Required. A list of inclusive order price upper bounds. The last price's value can be infinity by setting price amount_micros = -1. For example `[{"amount_micros": 10000000, "currency_code": "USD"\}, {"amount_micros": 500000000, "currency_code": "USD"\}, {"amount_micros": -1, "currency_code": "USD"\}]` represents the headers "<= $10", "<= $500", and "\> $500". All prices within a service must have the same currency. Must be non-empty. Must be positive except -1. Can only be set if all other fields are not set.
     */
    prices?: Schema$Price[];
    /**
     * Required. A list of inclusive order weight upper bounds. The last weight's value can be infinity by setting price amount_micros = -1. For example `[{"amount_micros": 10000000, "unit": "kg"\}, {"amount_micros": 50000000, "unit": "kg"\}, {"amount_micros": -1, "unit": "kg"\}]` represents the headers "<= 10kg", "<= 50kg", and "\> 50kg". All weights within a service must have the same unit. Must be non-empty. Must be positive except -1. Can only be set if all other fields are not set.
     */
    weights?: Schema$Weight[];
  }
  /**
   * The `Homepage` message represents a business's store homepage within the system. A business's homepage is the primary domain where customers interact with their store. The homepage can be claimed and verified as a proof of ownership and allows the business to unlock features that require a verified website. For more information, see [Understanding online store URL verification](//support.google.com/merchants/answer/176793).
   */
  export interface Schema$Homepage {
    /**
     * Output only. Whether the homepage is claimed. See https://support.google.com/merchants/answer/176793.
     */
    claimed?: boolean | null;
    /**
     * Identifier. The resource name of the store's homepage. Format: `accounts/{account\}/homepage`
     */
    name?: string | null;
    /**
     * Required. The URI (typically a URL) of the store's homepage.
     */
    uri?: string | null;
  }
  /**
   * All information related to an identity attribute.
   */
  export interface Schema$IdentityAttribute {
    /**
     * Required. The declaration of identity for this attribute.
     */
    identityDeclaration?: string | null;
  }
  /**
   * Settings for the Automatic Image Improvements.
   */
  export interface Schema$ImageImprovementsAccountLevelSettings {
    /**
     * Enables automatic image improvements.
     */
    allowAutomaticImageImprovements?: boolean | null;
  }
  /**
   * The impact of the issue on a region.
   */
  export interface Schema$Impact {
    /**
     * The [CLDR region code](https://cldr.unicode.org/) where this issue applies.
     */
    regionCode?: string | null;
    /**
     * The severity of the issue on the destination and region.
     */
    severity?: string | null;
  }
  /**
   * The impact of the issue on a destination.
   */
  export interface Schema$ImpactedDestination {
    /**
     * The (negative) impact for various regions on the given destination.
     */
    impacts?: Schema$Impact[];
    /**
     * The impacted reporting context.
     */
    reportingContext?: string | null;
  }
  /**
   * Collection of information related to InStock.
   */
  export interface Schema$InStock {
    /**
     * Output only. The state of the in-stock serving.
     */
    state?: string | null;
    /**
     * Optional. Product landing page URI. It is only used for the review of MHLSF in-stock serving. This URI domain should match with the business's homepage. Required to be empty if the lsf_type is GHLSF, and required when the lsf_type is MHLSF_FULL or MHLSF_BASIC.
     */
    uri?: string | null;
  }
  /**
   * Collection of information related to [inventory verification](https://support.google.com/merchants/answer/14684499?ref_topic=15145634&sjid=6892280366904591178-NC).
   */
  export interface Schema$InventoryVerification {
    /**
     * Required. The name of the contact for the inventory verification process.
     */
    contact?: string | null;
    /**
     * Required. The email address of the contact for the inventory verification process.
     */
    contactEmail?: string | null;
    /**
     * Output only. The state of the contact verification.
     */
    contactState?: string | null;
    /**
     * Output only. The state of the inventory verification process.
     */
    state?: string | null;
  }
  /**
   * Settings for the Automatic Item Updates.
   */
  export interface Schema$ItemUpdatesAccountLevelSettings {
    /**
     * If availability updates are enabled, any previous availability values get overwritten if Google finds an out-of-stock annotation on the offer's page. If additionally `allow_strict_availability_updates` field is set to true, values get overwritten if Google finds an in-stock annotation on the offer’s page.
     */
    allowAvailabilityUpdates?: boolean | null;
    /**
     * If condition updates are enabled, Google always updates item condition with the condition detected from the details of your product.
     */
    allowConditionUpdates?: boolean | null;
    /**
     * If price updates are enabled, Google always updates the active price with the crawled information.
     */
    allowPriceUpdates?: boolean | null;
    /**
     * If `allow_availability_updates` is enabled, items are automatically updated in all your Shopping target countries. By default, availability updates will only be applied to items that are 'out of stock' on your website but 'in stock' on Shopping. Set this to true to also update items that are 'in stock' on your website, but 'out of stock' on Google Shopping. In order for this field to have an effect, you must also set `allow_availability_updates`.
     */
    allowStrictAvailabilityUpdates?: boolean | null;
  }
  /**
   * Collection of information related to the LFP link.
   */
  export interface Schema$LfpLink {
    /**
     * Required. The account ID by which this merchant is known to the LFP provider.
     */
    externalAccountId?: string | null;
    /**
     * Required. The resource name of the LFP provider. Format: `lfpProviders/{lfp_provider\}`
     */
    lfpProvider?: string | null;
    /**
     * Output only. The state of the LFP link.
     */
    state?: string | null;
  }
  /**
   * Collection of information related to a Local Feed Partnership (LFP) provider.
   */
  export interface Schema$LfpProvider {
    /**
     * The display name of the LFP provider.
     */
    displayName?: string | null;
    /**
     * Identifier. The resource name of the LFP provider. Format: `accounts/{account\}/omnichannelSettings/{omnichannel_setting\}/lfpProviders/{lfp_provider\}`
     */
    name?: string | null;
    /**
     * Output only. Region code defined by [CLDR](https://cldr.unicode.org/).
     */
    regionCode?: string | null;
  }
  /**
   * Request message for the LinkGbpAccount method.
   */
  export interface Schema$LinkGbpAccountRequest {
    /**
     * Required. The email address of the Business Profile account.
     */
    gbpEmail?: string | null;
  }
  /**
   * Response message for the LinkGbpAccount method.
   */
  export interface Schema$LinkGbpAccountResponse {
    /**
     * Empty response.
     */
    response?: Schema$Empty;
  }
  /**
   * Request message for the LinkLfpProvider method.
   */
  export interface Schema$LinkLfpProviderRequest {
    /**
     * Required. The external account ID by which this merchant is known to the LFP provider.
     */
    externalAccountId?: string | null;
  }
  /**
   * Response message for the LinkLfpProvider method.
   */
  export interface Schema$LinkLfpProviderResponse {
    /**
     * Empty response.
     */
    response?: Schema$Empty;
  }
  /**
   * Response message for the `ListAccountIssues` method.
   */
  export interface Schema$ListAccountIssuesResponse {
    /**
     * The issues from the specified account.
     */
    accountIssues?: Schema$AccountIssue[];
    /**
     * A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages.
     */
    nextPageToken?: string | null;
  }
  /**
   * Response after trying to list account relationships.
   */
  export interface Schema$ListAccountRelationshipsResponse {
    /**
     * The account relationships that match your filter.
     */
    accountRelationships?: Schema$AccountRelationship[];
    /**
     * A page token. You can send the `page_token` to get the next page. Only included in the `list` response if there are more pages.
     */
    nextPageToken?: string | null;
  }
  /**
   * Response after trying to list account services.
   */
  export interface Schema$ListAccountServicesResponse {
    /**
     * The account services that match your filter.
     */
    accountServices?: Schema$AccountService[];
    /**
     * A page token. You can send the `page_token` to get the next page. Only included in the `list` response if there are more pages.
     */
    nextPageToken?: string | null;
  }
  /**
   * Response message for the `accounts.list` method.
   */
  export interface Schema$ListAccountsResponse {
    /**
     * The accounts matching the `ListAccountsRequest`.
     */
    accounts?: Schema$Account[];
    /**
     * A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages.
     */
    nextPageToken?: string | null;
  }
  /**
   * Response message for the ListGbpAccounts method.
   */
  export interface Schema$ListGbpAccountsResponse {
    /**
     * The GBP accounts from the specified merchant in the specified country.
     */
    gbpAccounts?: Schema$GbpAccount[];
    /**
     * A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages.
     */
    nextPageToken?: string | null;
  }
  /**
   * Response message for the ListOmnichannelSettings method.
   */
  export interface Schema$ListOmnichannelSettingsResponse {
    /**
     * A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages.
     */
    nextPageToken?: string | null;
    /**
     * The omnichannel settings from the specified merchant.
     */
    omnichannelSettings?: Schema$OmnichannelSetting[];
  }
  /**
   * Response message for the `ListOnlineReturnPolicies` method.
   */
  export interface Schema$ListOnlineReturnPoliciesResponse {
    /**
     * A token, which can be sent as `pageToken` to retrieve the next page. If this field is omitted, there are no subsequent pages.
     */
    nextPageToken?: string | null;
    /**
     * The retrieved return policies.
     */
    onlineReturnPolicies?: Schema$OnlineReturnPolicy[];
  }
  /**
   * Response message for the ListPrograms method.
   */
  export interface Schema$ListProgramsResponse {
    /**
     * A token that can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages.
     */
    nextPageToken?: string | null;
    /**
     * The programs for the given account.
     */
    programs?: Schema$Program[];
  }
  /**
   * Response message for the `ListRegions` method.
   */
  export interface Schema$ListRegionsResponse {
    /**
     * A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages.
     */
    nextPageToken?: string | null;
    /**
     * The regions from the specified business.
     */
    regions?: Schema$Region[];
  }
  /**
   * Response message for the `ListSubAccounts` method.
   */
  export interface Schema$ListSubAccountsResponse {
    /**
     * The accounts for which the given parent account is an aggregator.
     */
    accounts?: Schema$Account[];
    /**
     * A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages.
     */
    nextPageToken?: string | null;
  }
  /**
   * Response message for the `ListUsers` method.
   */
  export interface Schema$ListUsersResponse {
    /**
     * A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages.
     */
    nextPageToken?: string | null;
    /**
     * The users from the specified account.
     */
    users?: Schema$User[];
  }
  /**
   * Time that local delivery ends for the day.
   */
  export interface Schema$LocalCutoffTime {
    /**
     * Hour local delivery orders must be placed by to process the same day.
     */
    hour?: string | null;
    /**
     * Minute local delivery orders must be placed by to process the same day.
     */
    minute?: string | null;
  }
  /**
   * `LocalListingManagement` payload.
   */
  export interface Schema$LocalListingManagement {}
  /**
   * A list of location ID sets. Must be non-empty. Can only be set if all other fields are not set.
   */
  export interface Schema$LocationIdSet {
    /**
     * Required. A non-empty list of [location IDs](https://developers.google.com/adwords/api/docs/appendix/geotargeting). They must all be of the same location type (For example, state).
     */
    locationIds?: string[] | null;
  }
  /**
   * [Loyalty program](https://support.google.com/merchants/answer/12922446) provided by a business.
   */
  export interface Schema$LoyaltyProgram {
    /**
     * Optional. Loyalty program tier of this shipping service.
     */
    loyaltyProgramTiers?: Schema$LoyaltyProgramTiers[];
    /**
     * This is the loyalty program label set in your loyalty program settings in Merchant Center. This sub-attribute allows Google to map your loyalty program to eligible offers.
     */
    programLabel?: string | null;
  }
  /**
   * Subset of a business's loyalty program.
   */
  export interface Schema$LoyaltyProgramTiers {
    /**
     * The tier label [tier_label] sub-attribute differentiates offer level benefits between each tier. This value is also set in your program settings in Merchant Center, and is required for data source changes even if your loyalty program only has 1 tier.
     */
    tierLabel?: string | null;
  }
  /**
   * Table of per store minimum order values for the pickup fulfillment type.
   */
  export interface Schema$MinimumOrderValueTable {
    /**
     * Required. A list of store code sets sharing the same minimum order value (MOV). At least two sets are required and the last one must be empty, which signifies 'MOV for all other stores'. Each store code can only appear once across all the sets. All prices within a service must have the same currency.
     */
    storeCodeSetWithMovs?: Schema$StoreCodeSetWithMov[];
  }
  /**
   * Collection of information related to the omnichannel settings of a merchant.
   */
  export interface Schema$OmnichannelSetting {
    /**
     * Optional. The about page URI and state for this country.
     */
    about?: Schema$About;
    /**
     * Optional. The InStock URI and state for this country.
     */
    inStock?: Schema$InStock;
    /**
     * Optional. The inventory verification contact and state for this country.
     */
    inventoryVerification?: Schema$InventoryVerification;
    /**
     * Output only. The established link to a LFP provider.
     */
    lfpLink?: Schema$LfpLink;
    /**
     * Required. The Local Store Front type for this country.
     */
    lsfType?: string | null;
    /**
     * Identifier. The resource name of the omnichannel setting. Format: `accounts/{account\}/omnichannelSettings/{omnichannel_setting\}`
     */
    name?: string | null;
    /**
     * Optional. The On Display to Order (ODO) policy URI and state for this country.
     */
    odo?: Schema$OnDisplayToOrder;
    /**
     * Optional. The Pickup URI and state for this country.
     */
    pickup?: Schema$Pickup;
    /**
     * Required. Immutable. Region code defined by [CLDR](https://cldr.unicode.org/). Must be provided in the Create method, and is immutable.
     */
    regionCode?: string | null;
  }
  /**
   * Collection of information related to the on display to order ([ODO](https://support.google.com/merchants/answer/14615056?ref_topic=15145747&sjid=6892280366904591178-NC)).
   */
  export interface Schema$OnDisplayToOrder {
    /**
     * Output only. The state of the URI.
     */
    state?: string | null;
    /**
     * Required. The on display to order (ODO) policy URI.
     */
    uri?: string | null;
  }
  /**
   * [Online return policy](https://support.google.com/merchants/answer/10220642) object. This is currently used to represent return policies for ads and free listings programs.
   */
  export interface Schema$OnlineReturnPolicy {
    /**
     * Optional. This field specifies if business only accepts defective products for returns.
     */
    acceptDefectiveOnly?: boolean | null;
    /**
     * Optional. This field specifies if business allows customers to exchange products.
     */
    acceptExchange?: boolean | null;
    /**
     * Required. Immutable. The countries of sale where the return policy applies. The values must be a valid 2 letter ISO 3166 code.
     */
    countries?: string[] | null;
    /**
     * Optional. The item conditions accepted for returns must not be empty unless the type of return policy is 'noReturns'.
     */
    itemConditions?: string[] | null;
    /**
     * Optional. Immutable. This field represents the unique user-defined label of the return policy for the given country. It is important to note that the same label cannot be used in different return policies for the same country. If not given, policies will be automatically treated as the 'default' for the country. When using label, you are creating an exception policy in that country to assign a custom return policy to certain product groups, follow the instructions provided in the [Return policy label] (https://support.google.com/merchants/answer/9445425). The label can contain up to 50 characters.
     */
    label?: string | null;
    /**
     * Identifier. The name of the `OnlineReturnPolicy` resource. Format: `accounts/{account\}/onlineReturnPolicies/{return_policy\}`
     */
    name?: string | null;
    /**
     * Optional. The return policy.
     */
    policy?: Schema$Policy;
    /**
     * Optional. The field specifies the number of days it takes for business to process refunds.
     */
    processRefundDays?: number | null;
    /**
     * Optional. The restocking fee that applies to all return reason categories. This would be treated as a free restocking fee if the value is not set.
     */
    restockingFee?: Schema$RestockingFee;
    /**
     * Optional. The field specifies the return label source.
     */
    returnLabelSource?: string | null;
    /**
     * Optional. The return methods of how customers can return an item. This value is required to not be empty unless the type of return policy is noReturns.
     */
    returnMethods?: string[] | null;
    /**
     * Output only. Return policy ID generated by Google.
     */
    returnPolicyId?: string | null;
    /**
     * Required. The return policy uri. This can used by Google to do a sanity check for the policy. It must be a valid URL.
     */
    returnPolicyUri?: string | null;
    /**
     * Optional. The return shipping fee. Should be set only when customer need to download and print the return label.
     */
    returnShippingFee?: Schema$ReturnShippingFee;
    /**
     * Optional. Overrides to the general policy for orders placed during a specific set of time intervals.
     */
    seasonalOverrides?: Schema$SeasonalOverride[];
  }
  /**
   * An object representing a phone number, suitable as an API wire format. This representation: - should not be used for locale-specific formatting of a phone number, such as "+1 (650) 253-0000 ext. 123" - is not designed for efficient storage - may not be suitable for dialing - specialized libraries (see references) should be used to parse the number for that purpose To do something meaningful with this number, such as format it for various use-cases, convert it to an `i18n.phonenumbers.PhoneNumber` object first. For instance, in Java this would be: com.google.type.PhoneNumber wireProto = com.google.type.PhoneNumber.newBuilder().build(); com.google.i18n.phonenumbers.Phonenumber.PhoneNumber phoneNumber = PhoneNumberUtil.getInstance().parse(wireProto.getE164Number(), "ZZ"); if (!wireProto.getExtension().isEmpty()) { phoneNumber.setExtension(wireProto.getExtension()); \} Reference(s): - https://github.com/google/libphonenumber
   */
  export interface Schema$PhoneNumber {
    /**
     * The phone number, represented as a leading plus sign ('+'), followed by a phone number that uses a relaxed ITU E.164 format consisting of the country calling code (1 to 3 digits) and the subscriber number, with no additional spaces or formatting. For example: - correct: "+15552220123" - incorrect: "+1 (555) 222-01234 x123" The ITU E.164 format limits the latter to 12 digits, but in practice not all countries respect that, so we relax that restriction here. National-only numbers are not allowed. References: - https://www.itu.int/rec/T-REC-E.164-201011-I - https://en.wikipedia.org/wiki/E.164. - https://en.wikipedia.org/wiki/List_of_country_calling_codes
     */
    e164Number?: string | null;
    /**
     * The phone number's extension. The extension is not standardized in ITU recommendations, except for being defined as a series of numbers with a maximum length of 40 digits. Other than digits, some other dialing characters such as ',' (indicating a wait) or '#' may be stored here. Note that no regions currently use extensions with short codes, so this field is normally only set in conjunction with an E.164 number. It is held separately from the E.164 number to allow for short code extensions in the future.
     */
    extension?: string | null;
    /**
     * A short code. Reference(s): - https://wikipedia.org/wiki/Short_code
     */
    shortCode?: Schema$ShortCode;
  }
  /**
   * Collection of information related to Pickup.
   */
  export interface Schema$Pickup {
    /**
     * Output only. The state of the pickup serving.
     */
    state?: string | null;
    /**
     * Required. Pickup product page URI. It is only used for the review of pickup serving. This URI domain should match with the business's homepage.
     */
    uri?: string | null;
  }
  /**
   * The available policies.
   */
  export interface Schema$Policy {
    /**
     * The number of days items can be returned after delivery, where one day is defined as 24 hours after the delivery timestamp. Required for `NUMBER_OF_DAYS_AFTER_DELIVERY` returns.
     */
    days?: string | null;
    /**
     * Policy type.
     */
    type?: string | null;
  }
  /**
   * Represents a postal address, such as for postal delivery or payments addresses. With a postal address, a postal service can deliver items to a premise, P.O. box, or similar. A postal address is not intended to model geographical locations like roads, towns, or mountains. In typical usage, an address would be created by user input or from importing existing data, depending on the type of process. Advice on address input or editing: - Use an internationalization-ready address widget such as https://github.com/google/libaddressinput. - Users should not be presented with UI elements for input or editing of fields outside countries where that field is used. For more guidance on how to use this schema, see: https://support.google.com/business/answer/6397478.
   */
  export interface Schema$PostalAddress {
    /**
     * Unstructured address lines describing the lower levels of an address. Because values in `address_lines` do not have type information and may sometimes contain multiple values in a single field (for example, "Austin, TX"), it is important that the line order is clear. The order of address lines should be "envelope order" for the country or region of the address. In places where this can vary (for example, Japan), `address_language` is used to make it explicit (for example, "ja" for large-to-small ordering and "ja-Latn" or "en" for small-to-large). In this way, the most specific line of an address can be selected based on the language. The minimum permitted structural representation of an address consists of a `region_code` with all remaining information placed in the `address_lines`. It would be possible to format such an address very approximately without geocoding, but no semantic reasoning could be made about any of the address components until it was at least partially resolved. Creating an address only containing a `region_code` and `address_lines` and then geocoding is the recommended way to handle completely unstructured addresses (as opposed to guessing which parts of the address should be localities or administrative areas).
     */
    addressLines?: string[] | null;
    /**
     * Optional. Highest administrative subdivision which is used for postal addresses of a country or region. For example, this can be a state, a province, an oblast, or a prefecture. For Spain, this is the province and not the autonomous community (for example, "Barcelona" and not "Catalonia"). Many countries don't use an administrative area in postal addresses. For example, in Switzerland, this should be left unpopulated.
     */
    administrativeArea?: string | null;
    /**
     * Optional. BCP-47 language code of the contents of this address (if known). This is often the UI language of the input form or is expected to match one of the languages used in the address' country/region, or their transliterated equivalents. This can affect formatting in certain countries, but is not critical to the correctness of the data and will never affect any validation or other non-formatting related operations. If this value is not known, it should be omitted (rather than specifying a possibly incorrect default). Examples: "zh-Hant", "ja", "ja-Latn", "en".
     */
    languageCode?: string | null;
    /**
     * Optional. Generally refers to the city or town portion of the address. Examples: US city, IT comune, UK post town. In regions of the world where localities are not well defined or do not fit into this structure well, leave `locality` empty and use `address_lines`.
     */
    locality?: string | null;
    /**
     * Optional. The name of the organization at the address.
     */
    organization?: string | null;
    /**
     * Optional. Postal code of the address. Not all countries use or require postal codes to be present, but where they are used, they may trigger additional validation with other parts of the address (for example, state or zip code validation in the United States).
     */
    postalCode?: string | null;
    /**
     * Optional. The recipient at the address. This field may, under certain circumstances, contain multiline information. For example, it might contain "care of" information.
     */
    recipients?: string[] | null;
    /**
     * Required. CLDR region code of the country/region of the address. This is never inferred and it is up to the user to ensure the value is correct. See https://cldr.unicode.org/ and https://www.unicode.org/cldr/charts/30/supplemental/territory_information.html for details. Example: "CH" for Switzerland.
     */
    regionCode?: string | null;
    /**
     * The schema revision of the `PostalAddress`. This must be set to 0, which is the latest revision. All new revisions **must** be backward compatible with old revisions.
     */
    revision?: number | null;
    /**
     * Optional. Additional, country-specific, sorting code. This is not used in most regions. Where it is used, the value is either a string like "CEDEX", optionally followed by a number (for example, "CEDEX 7"), or just a number alone, representing the "sector code" (Jamaica), "delivery area indicator" (Malawi) or "post office indicator" (Côte d'Ivoire).
     */
    sortingCode?: string | null;
    /**
     * Optional. Sublocality of the address. For example, this can be a neighborhood, borough, or district.
     */
    sublocality?: string | null;
  }
  /**
   * A list of postal codes that defines the region area. Note: All regions defined using postal codes are accessible through the account's `ShippingSettings.postalCodeGroups` resource.
   */
  export interface Schema$PostalCodeArea {
    /**
     * Required. A range of postal codes.
     */
    postalCodes?: Schema$PostalCodeRange[];
    /**
     * Required. [CLDR territory code](http://www.unicode.org/repos/cldr/tags/latest/common/main/en.xml) or the country the postal code group applies to.
     */
    regionCode?: string | null;
  }
  /**
   * A range of postal codes that defines the region area.
   */
  export interface Schema$PostalCodeRange {
    /**
     * Required. A postal code or a pattern of the form prefix* denoting the inclusive lower bound of the range defining the area. Examples values: `94108`, `9410*`, `9*`.
     */
    begin?: string | null;
    /**
     * Optional. A postal code or a pattern of the form `prefix*` denoting the inclusive upper bound of the range defining the area. It must have the same length as postalCodeRangeBegin: if postalCodeRangeBegin is a postal code then postalCodeRangeEnd must be a postal code too; if postalCodeRangeBegin is a pattern then postalCodeRangeEnd must be a pattern with the same prefix length. Optional: if not set, then the area is defined as being all the postal codes matching postalCodeRangeBegin.
     */
    end?: string | null;
  }
  /**
   * The price represented as a number and currency.
   */
  export interface Schema$Price {
    /**
     * The price represented as a number in micros (1 million micros is an equivalent to one's currency standard unit, for example, 1 USD = 1000000 micros).
     */
    amountMicros?: string | null;
    /**
     * The currency of the price using three-letter acronyms according to [ISO 4217](http://en.wikipedia.org/wiki/ISO_4217).
     */
    currencyCode?: string | null;
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
   * `ProductsManagement` payload.
   */
  export interface Schema$ProductsManagement {}
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
   * Defines participation in a given program for the specified account. Programs provide a mechanism for adding functionality to a Merchant Center accounts. A typical example of this is the [Free product listings](https://support.google.com/merchants/answer/13889434) program, which enables products from a business's store to be shown across Google for free. The following list is the available set of program resource IDs accessible through the API: * `free-listings` * `shopping-ads` * `youtube-shopping-checkout`
   */
  export interface Schema$Program {
    /**
     * Output only. The regions in which the account is actively participating in the program. Active regions are defined as those where all program requirements affecting the regions have been met. Region codes are defined by [CLDR](https://cldr.unicode.org/). This is either a country where the program applies specifically to that country or `001` when the program applies globally.
     */
    activeRegionCodes?: string[] | null;
    /**
     * Output only. The URL of a Merchant Center help page describing the program.
     */
    documentationUri?: string | null;
    /**
     * Identifier. The resource name of the program. Format: `accounts/{account\}/programs/{program\}`
     */
    name?: string | null;
    /**
     * Output only. The participation state of the account in the program.
     */
    state?: string | null;
    /**
     * Output only. The requirements that the account has not yet satisfied that are affecting participation in the program.
     */
    unmetRequirements?: Schema$Requirement[];
  }
  /**
   * Request to propose an account service.
   */
  export interface Schema$ProposeAccountServiceRequest {
    /**
     * Required. The account service to propose.
     */
    accountService?: Schema$AccountService;
    /**
     * Required. The provider of the service. Either the reference to an account such as `providers/123` or a well-known service provider (one of `providers/GOOGLE_ADS` or `providers/GOOGLE_BUSINESS_PROFILE`).
     */
    provider?: string | null;
  }
  /**
   * Shipping rate group definitions. Only the last one is allowed to have an empty `applicable_shipping_labels`, which means "everything else". The other `applicable_shipping_labels` must not overlap.
   */
  export interface Schema$RateGroup {
    /**
     * Required. A list of [shipping labels](https://support.google.com/merchants/answer/6324504) defining the products to which this rate group applies to. This is a disjunction: only one of the labels has to match for the rate group to apply. May only be empty for the last rate group of a service.
     */
    applicableShippingLabels?: string[] | null;
    /**
     * Optional. A list of carrier rates that can be referred to by `main_table` or `single_value`.
     */
    carrierRates?: Schema$CarrierRate[];
    /**
     * A table defining the rate group, when `single_value` is not expressive enough. Can only be set if `single_value` is not set.
     */
    mainTable?: Schema$Table;
    /**
     * Optional. Name of the rate group. If set has to be unique within shipping service.
     */
    name?: string | null;
    /**
     * The value of the rate group (For example flat rate $10). Can only be set if `main_table` and `subtables` are not set.
     */
    singleValue?: Schema$Value;
    /**
     * Optional. A list of subtables referred to by `main_table`. Can only be set if `main_table` is set.
     */
    subtables?: Schema$Table[];
  }
  /**
   * Represents a geographic region that you can use as a target with both the `RegionalInventory` and `ShippingSettings` services. You can define regions as collections of either postal codes or, in some countries, using predefined geotargets. For more information, see [Set up regions ](https://support.google.com/merchants/answer/7410946#zippy=%2Ccreate-a-new-region) for more information.
   */
  export interface Schema$Region {
    /**
     * Optional. The display name of the region.
     */
    displayName?: string | null;
    /**
     * Optional. A list of geotargets that defines the region area.
     */
    geotargetArea?: Schema$GeoTargetArea;
    /**
     * Identifier. The resource name of the region. Format: `accounts/{account\}/regions/{region\}`
     */
    name?: string | null;
    /**
     * Optional. A list of postal codes that defines the region area.
     */
    postalCodeArea?: Schema$PostalCodeArea;
    /**
     * Output only. Indicates if the region is eligible for use in the Regional Inventory configuration.
     */
    regionalInventoryEligible?: boolean | null;
    /**
     * Output only. Indicates if the region is eligible for use in the Shipping Services configuration.
     */
    shippingEligible?: boolean | null;
  }
  /**
   * Request message for the RegisterGCP method.
   */
  export interface Schema$RegisterGcpRequest {
    /**
     * Immutable. If the developer email provided is associated with a user in the merchant account provided, the user will be updated to have "API developer" access type and the email preference corresponding to that user will be updated to have the new "API notifications" preference. If the developer email provided is not associated with any user we will just add it as a contact. The email preference corresponding to that contact will have the new "API notifications" preference. Make sure the email used is associated with a Google Account (Google Workspace account or Gmail account) and is not a service account as service accounts can't receive emails.
     */
    developerEmail?: string | null;
  }
  /**
   * Request to reject an account service.
   */
  export interface Schema$RejectAccountServiceRequest {}
  /**
   * Request message for the RequestInventoryVerification method.
   */
  export interface Schema$RequestInventoryVerificationRequest {}
  /**
   * Response message for the RequestInventoryVerification method.
   */
  export interface Schema$RequestInventoryVerificationResponse {
    /**
     * The omnichannel setting that was updated.
     */
    omnichannelSetting?: Schema$OmnichannelSetting;
  }
  /**
   * Describes the terms of service which are required to be accepted.
   */
  export interface Schema$Required {
    /**
     * Required. The `TermsOfService` that need to be accepted.
     */
    termsOfService?: string | null;
    /**
     * Required. Full URL to the terms of service file. This field is the same as `TermsOfService.file_uri`, it is added here for convenience only.
     */
    tosFileUri?: string | null;
  }
  /**
   * Defines a requirement specified for participation in the program.
   */
  export interface Schema$Requirement {
    /**
     * Output only. The regions that are currently affected by this requirement not being met. Region codes are defined by [CLDR](https://cldr.unicode.org/). This is either a country where the program applies specifically to that country or `001` when the program applies globally.
     */
    affectedRegionCodes?: string[] | null;
    /**
     * Output only. The URL of a help page describing the requirement.
     */
    documentationUri?: string | null;
    /**
     * Output only. Name of the requirement.
     */
    title?: string | null;
  }
  /**
   * The restocking fee. This can be a flat fee or a micro percent.
   */
  export interface Schema$RestockingFee {
    /**
     * Fixed restocking fee.
     */
    fixedFee?: Schema$Price;
    /**
     * Percent of total price in micros. 15,000,000 means 15% of the total price would be charged.
     */
    microPercent?: number | null;
  }
  /**
   * The return shipping fee. This can either be a fixed fee or a boolean to indicate that the customer pays the actual shipping cost.
   */
  export interface Schema$ReturnShippingFee {
    /**
     * Fixed return shipping fee amount. This value is only applicable when type is `FIXED`. We will treat the return shipping fee as free if type is `FIXED` and this value is not set.
     */
    fixedFee?: Schema$Price;
    /**
     * Required. Type of return shipping fee.
     */
    type?: string | null;
  }
  /**
   * Include a list of cells.
   */
  export interface Schema$Row {
    /**
     * Required. The list of cells that constitute the row. Must have the same length as `columnHeaders` for two-dimensional tables, a length of 1 for one-dimensional tables.
     */
    cells?: Schema$Value[];
  }
  export interface Schema$SeasonalOverride {
    /**
     * Required. seasonal override end date (inclusive).
     */
    endDate?: Schema$Date;
    /**
     * Required. Display name of this seasonal override in Merchant Center.
     */
    label?: string | null;
    /**
     * Number of days (from the delivery date) that the product can be returned.
     */
    returnDays?: number | null;
    /**
     * Fixed end date until which the product can be returned.
     */
    returnUntilDate?: Schema$Date;
    /**
     * Required. Defines the date range when this seasonal override applies. Both start_date and end_date are inclusive. The dates of the seasonal overrides should not overlap.
     */
    startDate?: Schema$Date;
  }
  /**
   * Shipping service.
   */
  export interface Schema$Service {
    /**
     * Required. A boolean exposing the active status of the shipping service.
     */
    active?: boolean | null;
    /**
     * Required. The CLDR code of the currency to which this service applies. Must match that of the prices in rate groups.
     */
    currencyCode?: string | null;
    /**
     * Required. The CLDR territory code of the countries to which the service applies.
     */
    deliveryCountries?: string[] | null;
    /**
     * Required. Time spent in various aspects from order to the delivery of the product.
     */
    deliveryTime?: Schema$DeliveryTime;
    /**
     * Optional. Loyalty programs that this shipping service is limited to.
     */
    loyaltyPrograms?: Schema$LoyaltyProgram[];
    /**
     * Optional. Minimum order value for this service. If set, indicates that customers will have to spend at least this amount. All prices within a service must have the same currency. Cannot be set together with `minimum_order_value_table`.
     */
    minimumOrderValue?: Schema$Price;
    /**
     * Optional. Table of per store minimum order values for the pickup fulfillment type. Cannot be set together with `minimum_order_value`.
     */
    minimumOrderValueTable?: Schema$MinimumOrderValueTable;
    /**
     * Optional. Shipping rate group definitions. Only the last one is allowed to have an empty `applicable_shipping_labels`, which means "everything else". The other `applicable_shipping_labels` must not overlap.
     */
    rateGroups?: Schema$RateGroup[];
    /**
     * Required. Free-form name of the service. Must be unique within target account.
     */
    serviceName?: string | null;
    /**
     * Optional. Type of locations this service ships orders to.
     */
    shipmentType?: string | null;
    /**
     * A list of stores your products are delivered from. This is only valid for the local delivery shipment type.
     */
    storeConfig?: Schema$StoreConfig;
  }
  /**
   * The Merchant Center account's [shipping settings](https://support.google.com/merchants/answer/6069284). The `ShippingSettings` resource lets you retrieve and update the shipping settings of your advanced account and all its associated sub-accounts.
   */
  export interface Schema$ShippingSettings {
    /**
     * Required. This field helps avoid async issues. It ensures that the shipping setting data doesn't change between the `get` call and the `insert` call. The user should follow these steps: 1. Set the etag field as an empty string for the initial shipping setting creation. 2. After the initial creation, call the `get` method to obtain an etag and the current shipping setting data before calling `insert`. 3. Modify the shipping setting information. 4. Call the `insert` method with the shipping setting information and the etag obtained in step 2. 5. If the shipping setting data changes between step 2 and step 4, the insert request will fail because the etag changes every time the shipping setting data changes. In this case, the user should repeat steps 2-4 with the new etag.
     */
    etag?: string | null;
    /**
     * Identifier. The resource name of the shipping settings. Format: `accounts/{account\}/shippingSettings`. For example, `accounts/123456/shippingSettings`.
     */
    name?: string | null;
    /**
     * Optional. The target account's list of services.
     */
    services?: Schema$Service[];
    /**
     * Optional. A list of warehouses which can be referred to in `services`.
     */
    warehouses?: Schema$Warehouse[];
  }
  /**
   * An object representing a short code, which is a phone number that is typically much shorter than regular phone numbers and can be used to address messages in MMS and SMS systems, as well as for abbreviated dialing (For example "Text 611 to see how many minutes you have remaining on your plan."). Short codes are restricted to a region and are not internationally dialable, which means the same short code can exist in different regions, with different usage and pricing, even if those regions share the same country calling code (For example: US and CA).
   */
  export interface Schema$ShortCode {
    /**
     * Required. The short code digits, without a leading plus ('+') or country calling code. For example "611".
     */
    number?: string | null;
    /**
     * Required. The BCP-47 region code of the location where calls to this short code can be made, such as "US" and "BB". Reference(s): - http://www.unicode.org/reports/tr35/#unicode_region_subtag
     */
    regionCode?: string | null;
  }
  /**
   * A list of store code sets sharing the same minimum order value. At least two sets are required and the last one must be empty, which signifies 'MOV for all other stores'. Each store code can only appear once across all the sets. All prices within a service must have the same currency.
   */
  export interface Schema$StoreCodeSetWithMov {
    /**
     * Optional. A list of unique store codes or empty for the catch all.
     */
    storeCodes?: string[] | null;
    /**
     * The minimum order value for the given stores.
     */
    value?: Schema$Price;
  }
  /**
   * A list of stores your products are delivered from. This is only valid for the local delivery shipment type.
   */
  export interface Schema$StoreConfig {
    /**
     * Configs related to local delivery ends for the day.
     */
    cutoffConfig?: Schema$CutoffConfig;
    /**
     * Maximum delivery radius. This is only required for the local delivery shipment type.
     */
    serviceRadius?: Schema$Distance;
    /**
     * Optional. A list of store codes that provide local delivery. If empty, then `all_stores` must be true.
     */
    storeCodes?: string[] | null;
    /**
     * Indicates whether all stores, or selected stores, listed by this business provide local delivery.
     */
    storeServiceType?: string | null;
  }
  /**
   * A table defining the rate group, when `single_value` is not expressive enough.
   */
  export interface Schema$Table {
    /**
     * Headers of the table's columns. Optional: if not set then the table has only one dimension.
     */
    columnHeaders?: Schema$Headers;
    /**
     * Name of the table. Required for subtables, ignored for the main table.
     */
    name?: string | null;
    /**
     * Required. Headers of the table's rows.
     */
    rowHeaders?: Schema$Headers;
    /**
     * Required. The list of rows that constitute the table. Must have the same length as `row_headers`.
     */
    rows?: Schema$Row[];
  }
  /**
   * The `TermsOfService` message represents a specific version of the terms of service that merchants must accept to access certain features or services. For more information, see [Terms of Service](https://support.google.com/merchants/answer/160173). This message is important for the onboarding process, ensuring that merchants agree to the necessary legal agreements for using the service. Merchants can retrieve the latest terms of service for a given `kind` and `region` through `RetrieveLatestTermsOfService`, and accept them as required through `AcceptTermsOfService`.
   */
  export interface Schema$TermsOfService {
    /**
     * Whether this terms of service version is external. External terms of service versions can only be agreed through external processes and not directly by the merchant through UI or API.
     */
    external?: boolean | null;
    /**
     * URI for terms of service file that needs to be displayed to signing users.
     */
    fileUri?: string | null;
    /**
     * The Kind this terms of service version applies to.
     */
    kind?: string | null;
    /**
     * Identifier. The resource name of the terms of service version. Format: `termsOfService/{version\}`
     */
    name?: string | null;
    /**
     * Region code as defined by [CLDR](https://cldr.unicode.org/). This is either a country where the ToS applies specifically to that country or `001` when the same `TermsOfService` can be signed in any country. However note that when signing a ToS that applies globally we still expect that a specific country is provided (this should be merchant business country or program country of participation).
     */
    regionCode?: string | null;
  }
  /**
   * This resource represents the agreement state for a given account and terms of service kind. The state is as follows: * If the business has accepted a terms of service, `accepted` will be populated, otherwise it will be empty * If the business must sign a terms of service, `required` will be populated, otherwise it will be empty. Note that both `required` and `accepted` can be present. In this case the `accepted` terms of services will have an expiration date set in the `valid_until` field. The `required` terms of services need to be accepted before `valid_until` in order for the account to continue having a valid agreement. When accepting new terms of services we expect third-party providers to display the text associated with the given terms of service agreement (the url to the file containing the text is added in the Required message below as `tos_file_uri`). The actual acceptance of the terms of service is done by calling accept on the `TermsOfService` resource. `valid_until` field.
   */
  export interface Schema$TermsOfServiceAgreementState {
    /**
     * Optional. The accepted terms of service of this kind and for the associated region_code
     */
    accepted?: Schema$Accepted;
    /**
     * Identifier. The resource name of the terms of service version. Format: `accounts/{account\}/termsOfServiceAgreementState/{identifier\}` The identifier format is: `{TermsOfServiceKind\}-{country\}` For example, an identifier could be: `MERCHANT_CENTER-EU` or `MERCHANT_CENTER-US`.
     */
    name?: string | null;
    /**
     * Required. Region code as defined by https://cldr.unicode.org/. This is the country the current state applies to.
     */
    regionCode?: string | null;
    /**
     * Optional. The required terms of service
     */
    required?: Schema$Required;
    /**
     * Required. Terms of Service kind associated with the particular version.
     */
    termsOfServiceKind?: string | null;
  }
  /**
   * Represents a time zone from the [IANA Time Zone Database](https://www.iana.org/time-zones).
   */
  export interface Schema$TimeZone {
    /**
     * IANA Time Zone Database time zone. For example "America/New_York".
     */
    id?: string | null;
    /**
     * Optional. IANA Time Zone Database version number. For example "2019a".
     */
    version?: string | null;
  }
  /**
   * Transit time table, number of business days spent in transit based on row and column dimensions. Either `min_transit_days`, `max_transit_days` or `transit_time_table` can be set, but not both.
   */
  export interface Schema$TransitTable {
    /**
     * Required. A list of region names Region.name . The last value can be `"all other locations"`. Example: `["zone 1", "zone 2", "all other locations"]`. The referred postal code groups must match the delivery country of the service.
     */
    postalCodeGroupNames?: string[] | null;
    /**
     * Required. If there's only one dimension set of `postal_code_group_names` or `transit_time_labels`, there are multiple rows each with one value for that dimension. If there are two dimensions, each row corresponds to a `postal_code_group_names`, and columns (values) to a `transit_time_labels`.
     */
    rows?: Schema$TransitTimeRow[];
    /**
     * Required. A list of transit time labels. The last value can be `"all other labels"`. Example: `["food", "electronics", "all other labels"]`.
     */
    transitTimeLabels?: string[] | null;
  }
  /**
   * If there's only one dimension set of `postal_code_group_names` or `transit_time_labels`, there are multiple rows each with one value for that dimension. If there are two dimensions, each row corresponds to a `postal_code_group_names`, and columns (values) to a `transit_time_labels`.
   */
  export interface Schema$TransitTimeRow {
    /**
     * Required. Transit time range (min-max) in business days.
     */
    values?: Schema$TransitTimeValue[];
  }
  /**
   * Transit time range (min-max) in business days.
   */
  export interface Schema$TransitTimeValue {
    /**
     * Must be greater than or equal to `min_transit_days`.
     */
    maxTransitDays?: number | null;
    /**
     * Minimum transit time range in business days. 0 means same day delivery, 1 means next day delivery.
     */
    minTransitDays?: number | null;
  }
  /**
   * Request message for the `UnclaimHomepage` method.
   */
  export interface Schema$UnclaimHomepageRequest {}
  /**
   * Request message for the UnregisterGCP method.
   */
  export interface Schema$UnregisterGcpRequest {}
  /**
   * Request message for the `UpdateRegion` method.
   */
  export interface Schema$UpdateRegionRequest {
    /**
     * Required. The updated region.
     */
    region?: Schema$Region;
    /**
     * Optional. The comma-separated field mask indicating the fields to update. Example: `"displayName,postalCodeArea.regionCode"`.
     */
    updateMask?: string | null;
  }
  /**
   * URL settings for cart or checkout URL.
   */
  export interface Schema$UriSettings {
    /**
     * Cart URL template. When the placeholders are expanded will redirect the buyer to the cart page on the merchant website with the selected item in cart. For more details, check the [help center doc](https://support.google.com/merchants/answer/13945960#method1&zippy=%2Cproduct-level-url-formatting%2Caccount-level-url-formatting)
     */
    cartUriTemplate?: string | null;
    /**
     * Checkout URL template. When the placeholders are expanded will redirect the buyer to the merchant checkout page with the item in the cart. For more details, check the [help center doc](https://support.google.com/merchants/answer/13945960#method1&zippy=%2Cproduct-level-url-formatting%2Caccount-level-url-formatting)
     */
    checkoutUriTemplate?: string | null;
  }
  /**
   * The `User` message represents a user associated with a Merchant Center account. It is used to manage user permissions and access rights within the account. For more information, see [Frequently asked questions about people and access levels](//support.google.com/merchants/answer/12160472).
   */
  export interface Schema$User {
    /**
     * Required. The [access rights](https://support.google.com/merchants/answer/12160472?sjid=6789834943175119429-EU#accesstypes) the user has.
     */
    accessRights?: string[] | null;
    /**
     * Identifier. The resource name of the user. Format: `accounts/{account\}/user/{email\}` Use `me` to refer to your own email address, for example `accounts/{account\}/users/me`.
     */
    name?: string | null;
    /**
     * Output only. The state of the user.
     */
    state?: string | null;
  }
  /**
   * The single value of a rate group or the value of a rate group table's cell. Exactly one of `no_shipping`, `flat_rate`, `price_percentage`, `carrier_rateName`, `subtable_name` must be set.
   */
  export interface Schema$Value {
    /**
     * The name of a carrier rate referring to a carrier rate defined in the same rate group. Can only be set if all other fields are not set.
     */
    carrierRate?: string | null;
    /**
     * A flat rate. Can only be set if all other fields are not set.
     */
    flatRate?: Schema$Price;
    /**
     * If true, then the product can't be shipped. Must be true when set, can only be set if all other fields are not set.
     */
    noShipping?: boolean | null;
    /**
     * A percentage of the price represented as a number in decimal notation (For example, `"5.4"`). Can only be set if all other fields are not set.
     */
    pricePercentage?: string | null;
    /**
     * The name of a subtable. Can only be set in table cells (For example, not for single values), and only if all other fields are not set.
     */
    subtable?: string | null;
  }
  /**
   * A fulfillment warehouse, which stores and handles inventory.
   */
  export interface Schema$Warehouse {
    /**
     * Business days of the warehouse. If not set, will be Monday to Friday by default.
     */
    businessDayConfig?: Schema$BusinessDayConfig;
    /**
     * Required. The latest time of day that an order can be accepted and begin processing. Later orders will be processed in the next day. The time is based on the warehouse postal code.
     */
    cutoffTime?: Schema$WarehouseCutoffTime;
    /**
     * Required. The number of days it takes for this warehouse to pack up and ship an item. This is on the warehouse level, but can be overridden on the offer level based on the attributes of an item.
     */
    handlingDays?: string | null;
    /**
     * Required. The name of the warehouse. Must be unique within account.
     */
    name?: string | null;
    /**
     * Required. Shipping address of the warehouse.
     */
    shippingAddress?: Schema$Address;
  }
  /**
   * Indicates that the delivery time should be calculated per warehouse (shipping origin location) based on the settings of the selected carrier. When set, no other transit time related field in `delivery_time` should be set.
   */
  export interface Schema$WarehouseBasedDeliveryTime {
    /**
     * Required. Carrier, such as `"UPS"` or `"Fedex"`. [supported carriers](https://support.google.com/merchants/answer/7050921#zippy=%2Ccarrier-rates-au-de-uk-and-us-only)
     */
    carrier?: string | null;
    /**
     * Required. Carrier service, such as `"ground"` or `"2 days"`. The name of the service must be in the eddSupportedServices list.
     */
    carrierService?: string | null;
    /**
     * Required. Warehouse name. This should match warehouse.
     */
    warehouse?: string | null;
  }
  /**
   * The latest time of day that an order can be accepted and begin processing. Later orders will be processed in the next day. The time is based on the warehouse postal code.
   */
  export interface Schema$WarehouseCutoffTime {
    /**
     * Required. Hour of the cutoff time until which an order has to be placed to be processed in the same day by the warehouse. Hour is based on the timezone of warehouse.
     */
    hour?: number | null;
    /**
     * Required. Minute of the cutoff time until which an order has to be placed to be processed in the same day by the warehouse. Minute is based on the timezone of warehouse.
     */
    minute?: number | null;
  }
  /**
   * The weight represented as the value in string and the unit.
   */
  export interface Schema$Weight {
    /**
     * Required. The weight represented as a number in micros (1 million micros is an equivalent to one's currency standard unit, for example, 1 kg = 1000000 micros). This field can also be set as infinity by setting to -1. This field only support -1 and positive value.
     */
    amountMicros?: string | null;
    /**
     * Required. The weight unit. Acceptable values are: kg and lb
     */
    unit?: string | null;
  }

  export class Resource$Accounts {
    context: APIRequestContext;
    autofeedSettings: Resource$Accounts$Autofeedsettings;
    automaticImprovements: Resource$Accounts$Automaticimprovements;
    businessIdentity: Resource$Accounts$Businessidentity;
    businessInfo: Resource$Accounts$Businessinfo;
    developerRegistration: Resource$Accounts$Developerregistration;
    emailPreferences: Resource$Accounts$Emailpreferences;
    gbpAccounts: Resource$Accounts$Gbpaccounts;
    homepage: Resource$Accounts$Homepage;
    issues: Resource$Accounts$Issues;
    omnichannelSettings: Resource$Accounts$Omnichannelsettings;
    onlineReturnPolicies: Resource$Accounts$Onlinereturnpolicies;
    programs: Resource$Accounts$Programs;
    regions: Resource$Accounts$Regions;
    relationships: Resource$Accounts$Relationships;
    services: Resource$Accounts$Services;
    shippingSettings: Resource$Accounts$Shippingsettings;
    termsOfServiceAgreementStates: Resource$Accounts$Termsofserviceagreementstates;
    users: Resource$Accounts$Users;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.autofeedSettings = new Resource$Accounts$Autofeedsettings(
        this.context
      );
      this.automaticImprovements = new Resource$Accounts$Automaticimprovements(
        this.context
      );
      this.businessIdentity = new Resource$Accounts$Businessidentity(
        this.context
      );
      this.businessInfo = new Resource$Accounts$Businessinfo(this.context);
      this.developerRegistration = new Resource$Accounts$Developerregistration(
        this.context
      );
      this.emailPreferences = new Resource$Accounts$Emailpreferences(
        this.context
      );
      this.gbpAccounts = new Resource$Accounts$Gbpaccounts(this.context);
      this.homepage = new Resource$Accounts$Homepage(this.context);
      this.issues = new Resource$Accounts$Issues(this.context);
      this.omnichannelSettings = new Resource$Accounts$Omnichannelsettings(
        this.context
      );
      this.onlineReturnPolicies = new Resource$Accounts$Onlinereturnpolicies(
        this.context
      );
      this.programs = new Resource$Accounts$Programs(this.context);
      this.regions = new Resource$Accounts$Regions(this.context);
      this.relationships = new Resource$Accounts$Relationships(this.context);
      this.services = new Resource$Accounts$Services(this.context);
      this.shippingSettings = new Resource$Accounts$Shippingsettings(
        this.context
      );
      this.termsOfServiceAgreementStates =
        new Resource$Accounts$Termsofserviceagreementstates(this.context);
      this.users = new Resource$Accounts$Users(this.context);
    }

    /**
     * Creates a Merchant Center account with additional configuration. Adds the user that makes the request as an admin for the new account.
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
     * const merchantapi = google.merchantapi('accounts_v1');
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
     *   const res = await merchantapi.accounts.createAndConfigure({
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "account": {},
     *       //   "service": [],
     *       //   "user": []
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "accountId": "my_accountId",
     *   //   "accountName": "my_accountName",
     *   //   "adultContent": false,
     *   //   "languageCode": "my_languageCode",
     *   //   "name": "my_name",
     *   //   "testAccount": false,
     *   //   "timeZone": {}
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
    createAndConfigure(
      params: Params$Resource$Accounts$Createandconfigure,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    createAndConfigure(
      params?: Params$Resource$Accounts$Createandconfigure,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Account>>;
    createAndConfigure(
      params: Params$Resource$Accounts$Createandconfigure,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    createAndConfigure(
      params: Params$Resource$Accounts$Createandconfigure,
      options: MethodOptions | BodyResponseCallback<Schema$Account>,
      callback: BodyResponseCallback<Schema$Account>
    ): void;
    createAndConfigure(
      params: Params$Resource$Accounts$Createandconfigure,
      callback: BodyResponseCallback<Schema$Account>
    ): void;
    createAndConfigure(callback: BodyResponseCallback<Schema$Account>): void;
    createAndConfigure(
      paramsOrCallback?:
        | Params$Resource$Accounts$Createandconfigure
        | BodyResponseCallback<Schema$Account>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Account>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Account>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$Account>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Accounts$Createandconfigure;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Accounts$Createandconfigure;
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
            url: (rootUrl + '/accounts/v1/accounts:createAndConfigure').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
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
        createAPIRequest<Schema$Account>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Account>(parameters);
      }
    }

    /**
     * Deletes the specified account regardless of its type: standalone, advanced account or sub-account. Deleting an advanced account leads to the deletion of all of its sub-accounts. Executing this method requires admin access. The deletion succeeds only if the account does not provide services to any other account and has no processed offers. You can use the `force` parameter to override this.
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
     * const merchantapi = google.merchantapi('accounts_v1');
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
     *   const res = await merchantapi.accounts.delete({
     *     // Optional. If set to `true`, the account is deleted even if it provides services to other accounts or has processed offers.
     *     force: 'placeholder-value',
     *     // Required. The name of the account to delete. Format: `accounts/{account\}`
     *     name: 'accounts/my-account',
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
      params: Params$Resource$Accounts$Delete,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    delete(
      params?: Params$Resource$Accounts$Delete,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Empty>>;
    delete(
      params: Params$Resource$Accounts$Delete,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    delete(
      params: Params$Resource$Accounts$Delete,
      options: MethodOptions | BodyResponseCallback<Schema$Empty>,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    delete(
      params: Params$Resource$Accounts$Delete,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    delete(callback: BodyResponseCallback<Schema$Empty>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Accounts$Delete
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
      let params = (paramsOrCallback || {}) as Params$Resource$Accounts$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Accounts$Delete;
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
            url: (rootUrl + '/accounts/v1/{+name}').replace(
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
     * Retrieves an account from your Merchant Center account. After inserting, updating, or deleting an account, it may take several minutes before changes take effect.
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
     * const merchantapi = google.merchantapi('accounts_v1');
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
     *   const res = await merchantapi.accounts.get({
     *     // Required. The name of the account to retrieve. Format: `accounts/{account\}`
     *     name: 'accounts/my-account',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "accountId": "my_accountId",
     *   //   "accountName": "my_accountName",
     *   //   "adultContent": false,
     *   //   "languageCode": "my_languageCode",
     *   //   "name": "my_name",
     *   //   "testAccount": false,
     *   //   "timeZone": {}
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
      params: Params$Resource$Accounts$Get,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    get(
      params?: Params$Resource$Accounts$Get,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Account>>;
    get(
      params: Params$Resource$Accounts$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Accounts$Get,
      options: MethodOptions | BodyResponseCallback<Schema$Account>,
      callback: BodyResponseCallback<Schema$Account>
    ): void;
    get(
      params: Params$Resource$Accounts$Get,
      callback: BodyResponseCallback<Schema$Account>
    ): void;
    get(callback: BodyResponseCallback<Schema$Account>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Accounts$Get
        | BodyResponseCallback<Schema$Account>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Account>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Account>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$Account>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback || {}) as Params$Resource$Accounts$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Accounts$Get;
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
            url: (rootUrl + '/accounts/v1/{+name}').replace(
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
        createAPIRequest<Schema$Account>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Account>(parameters);
      }
    }

    /**
     * Note: For the `accounts.list` method, quota and limits usage are charged for each user, and not for the Merchant Center ID or the advanced account ID. To list several sub-accounts, you should use the `accounts.listSubaccounts` method, which is more suitable for advanced accounts use case.
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
     * const merchantapi = google.merchantapi('accounts_v1');
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
     *   const res = await merchantapi.accounts.list({
     *     // Optional. Returns only accounts that match the [filter](https://developers.google.com/merchant/api/guides/accounts/filter). For more details, see the [filter syntax reference](https://developers.google.com/merchant/api/guides/accounts/filter-syntax).
     *     filter: 'placeholder-value',
     *     // Optional. The maximum number of accounts to return. The service may return fewer than this value. If unspecified, at most 250 accounts are returned. The maximum value is 500; values above 500 are coerced to 500.
     *     pageSize: 'placeholder-value',
     *     // Optional. A page token, received from a previous `accounts.list` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided in the `accounts.list` request must match the call that provided the page token.
     *     pageToken: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "accounts": [],
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
      params: Params$Resource$Accounts$List,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    list(
      params?: Params$Resource$Accounts$List,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$ListAccountsResponse>>;
    list(
      params: Params$Resource$Accounts$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Accounts$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ListAccountsResponse>,
      callback: BodyResponseCallback<Schema$ListAccountsResponse>
    ): void;
    list(
      params: Params$Resource$Accounts$List,
      callback: BodyResponseCallback<Schema$ListAccountsResponse>
    ): void;
    list(callback: BodyResponseCallback<Schema$ListAccountsResponse>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Accounts$List
        | BodyResponseCallback<Schema$ListAccountsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ListAccountsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ListAccountsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$ListAccountsResponse>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback || {}) as Params$Resource$Accounts$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Accounts$List;
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
            url: (rootUrl + '/accounts/v1/accounts').replace(
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
        createAPIRequest<Schema$ListAccountsResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ListAccountsResponse>(parameters);
      }
    }

    /**
     * List all sub-accounts for a given advanced account. This is a convenience wrapper for the more powerful `accounts.list` method. This method will produce the same results as calling `ListsAccounts` with the following filter: `relationship(providerId={parent\} AND service(type="ACCOUNT_AGGREGATION"))`
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
     * const merchantapi = google.merchantapi('accounts_v1');
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
     *   const res = await merchantapi.accounts.listSubaccounts({
     *     // Optional. The maximum number of accounts to return. The service may return fewer than this value. If unspecified, at most 250 accounts are returned. The maximum value is 500; values above 500 are coerced to 500.
     *     pageSize: 'placeholder-value',
     *     // Optional. A page token, received from a previous `accounts.list` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided in the `accounts.list` request must match the call that provided the page token.
     *     pageToken: 'placeholder-value',
     *     // Required. The aggregation service provider. Format: `accounts/{accountId\}`
     *     provider: 'accounts/my-account',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "accounts": [],
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
    listSubaccounts(
      params: Params$Resource$Accounts$Listsubaccounts,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    listSubaccounts(
      params?: Params$Resource$Accounts$Listsubaccounts,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$ListSubAccountsResponse>>;
    listSubaccounts(
      params: Params$Resource$Accounts$Listsubaccounts,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    listSubaccounts(
      params: Params$Resource$Accounts$Listsubaccounts,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ListSubAccountsResponse>,
      callback: BodyResponseCallback<Schema$ListSubAccountsResponse>
    ): void;
    listSubaccounts(
      params: Params$Resource$Accounts$Listsubaccounts,
      callback: BodyResponseCallback<Schema$ListSubAccountsResponse>
    ): void;
    listSubaccounts(
      callback: BodyResponseCallback<Schema$ListSubAccountsResponse>
    ): void;
    listSubaccounts(
      paramsOrCallback?:
        | Params$Resource$Accounts$Listsubaccounts
        | BodyResponseCallback<Schema$ListSubAccountsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ListSubAccountsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ListSubAccountsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$ListSubAccountsResponse>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Accounts$Listsubaccounts;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Accounts$Listsubaccounts;
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
            url: (rootUrl + '/accounts/v1/{+provider}:listSubaccounts').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'GET',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['provider'],
        pathParams: ['provider'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$ListSubAccountsResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ListSubAccountsResponse>(parameters);
      }
    }

    /**
     * Updates an account regardless of its type: standalone, advanced account or sub-account. Executing this method requires admin access.
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
     * const merchantapi = google.merchantapi('accounts_v1');
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
     *   const res = await merchantapi.accounts.patch({
     *     // Identifier. The resource name of the account. Format: `accounts/{account\}`
     *     name: 'accounts/my-account',
     *     // Optional. List of fields being updated. The following fields are supported (in both `snake_case` and `lowerCamelCase`): - `account_name` - `adult_content` - `language_code` - `time_zone`
     *     updateMask: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "accountId": "my_accountId",
     *       //   "accountName": "my_accountName",
     *       //   "adultContent": false,
     *       //   "languageCode": "my_languageCode",
     *       //   "name": "my_name",
     *       //   "testAccount": false,
     *       //   "timeZone": {}
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "accountId": "my_accountId",
     *   //   "accountName": "my_accountName",
     *   //   "adultContent": false,
     *   //   "languageCode": "my_languageCode",
     *   //   "name": "my_name",
     *   //   "testAccount": false,
     *   //   "timeZone": {}
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
      params: Params$Resource$Accounts$Patch,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    patch(
      params?: Params$Resource$Accounts$Patch,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Account>>;
    patch(
      params: Params$Resource$Accounts$Patch,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    patch(
      params: Params$Resource$Accounts$Patch,
      options: MethodOptions | BodyResponseCallback<Schema$Account>,
      callback: BodyResponseCallback<Schema$Account>
    ): void;
    patch(
      params: Params$Resource$Accounts$Patch,
      callback: BodyResponseCallback<Schema$Account>
    ): void;
    patch(callback: BodyResponseCallback<Schema$Account>): void;
    patch(
      paramsOrCallback?:
        | Params$Resource$Accounts$Patch
        | BodyResponseCallback<Schema$Account>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Account>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Account>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$Account>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback || {}) as Params$Resource$Accounts$Patch;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Accounts$Patch;
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
            url: (rootUrl + '/accounts/v1/{+name}').replace(
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
        createAPIRequest<Schema$Account>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Account>(parameters);
      }
    }
  }

  export interface Params$Resource$Accounts$Createandconfigure
    extends StandardParameters {
    /**
     * Request body metadata
     */
    requestBody?: Schema$CreateAndConfigureAccountRequest;
  }
  export interface Params$Resource$Accounts$Delete extends StandardParameters {
    /**
     * Optional. If set to `true`, the account is deleted even if it provides services to other accounts or has processed offers.
     */
    force?: boolean;
    /**
     * Required. The name of the account to delete. Format: `accounts/{account\}`
     */
    name?: string;
  }
  export interface Params$Resource$Accounts$Get extends StandardParameters {
    /**
     * Required. The name of the account to retrieve. Format: `accounts/{account\}`
     */
    name?: string;
  }
  export interface Params$Resource$Accounts$List extends StandardParameters {
    /**
     * Optional. Returns only accounts that match the [filter](https://developers.google.com/merchant/api/guides/accounts/filter). For more details, see the [filter syntax reference](https://developers.google.com/merchant/api/guides/accounts/filter-syntax).
     */
    filter?: string;
    /**
     * Optional. The maximum number of accounts to return. The service may return fewer than this value. If unspecified, at most 250 accounts are returned. The maximum value is 500; values above 500 are coerced to 500.
     */
    pageSize?: number;
    /**
     * Optional. A page token, received from a previous `accounts.list` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided in the `accounts.list` request must match the call that provided the page token.
     */
    pageToken?: string;
  }
  export interface Params$Resource$Accounts$Listsubaccounts
    extends StandardParameters {
    /**
     * Optional. The maximum number of accounts to return. The service may return fewer than this value. If unspecified, at most 250 accounts are returned. The maximum value is 500; values above 500 are coerced to 500.
     */
    pageSize?: number;
    /**
     * Optional. A page token, received from a previous `accounts.list` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided in the `accounts.list` request must match the call that provided the page token.
     */
    pageToken?: string;
    /**
     * Required. The aggregation service provider. Format: `accounts/{accountId\}`
     */
    provider?: string;
  }
  export interface Params$Resource$Accounts$Patch extends StandardParameters {
    /**
     * Identifier. The resource name of the account. Format: `accounts/{account\}`
     */
    name?: string;
    /**
     * Optional. List of fields being updated. The following fields are supported (in both `snake_case` and `lowerCamelCase`): - `account_name` - `adult_content` - `language_code` - `time_zone`
     */
    updateMask?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$Account;
  }

  export class Resource$Accounts$Autofeedsettings {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Retrieves the autofeed settings of an account.
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
     * const merchantapi = google.merchantapi('accounts_v1');
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
     *   const res = await merchantapi.accounts.autofeedSettings.getAutofeedSettings({
     *     // Required. The resource name of the autofeed settings. Format: `accounts/{account\}/autofeedSettings`
     *     name: 'accounts/my-account/autofeedSettings',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "eligible": false,
     *   //   "enableProducts": false,
     *   //   "name": "my_name"
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
    getAutofeedSettings(
      params: Params$Resource$Accounts$Autofeedsettings$Getautofeedsettings,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    getAutofeedSettings(
      params?: Params$Resource$Accounts$Autofeedsettings$Getautofeedsettings,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$AutofeedSettings>>;
    getAutofeedSettings(
      params: Params$Resource$Accounts$Autofeedsettings$Getautofeedsettings,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    getAutofeedSettings(
      params: Params$Resource$Accounts$Autofeedsettings$Getautofeedsettings,
      options: MethodOptions | BodyResponseCallback<Schema$AutofeedSettings>,
      callback: BodyResponseCallback<Schema$AutofeedSettings>
    ): void;
    getAutofeedSettings(
      params: Params$Resource$Accounts$Autofeedsettings$Getautofeedsettings,
      callback: BodyResponseCallback<Schema$AutofeedSettings>
    ): void;
    getAutofeedSettings(
      callback: BodyResponseCallback<Schema$AutofeedSettings>
    ): void;
    getAutofeedSettings(
      paramsOrCallback?:
        | Params$Resource$Accounts$Autofeedsettings$Getautofeedsettings
        | BodyResponseCallback<Schema$AutofeedSettings>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$AutofeedSettings>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$AutofeedSettings>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$AutofeedSettings>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Accounts$Autofeedsettings$Getautofeedsettings;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Accounts$Autofeedsettings$Getautofeedsettings;
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
            url: (rootUrl + '/accounts/v1/{+name}').replace(
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
        createAPIRequest<Schema$AutofeedSettings>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$AutofeedSettings>(parameters);
      }
    }

    /**
     * Updates the autofeed settings of an account.
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
     * const merchantapi = google.merchantapi('accounts_v1');
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
     *   const res =
     *     await merchantapi.accounts.autofeedSettings.updateAutofeedSettings({
     *       // Identifier. The resource name of the autofeed settings. Format: `accounts/{account\}/autofeedSettings`.
     *       name: 'accounts/my-account/autofeedSettings',
     *       // Required. List of fields being updated.
     *       updateMask: 'placeholder-value',
     *
     *       // Request body metadata
     *       requestBody: {
     *         // request body parameters
     *         // {
     *         //   "eligible": false,
     *         //   "enableProducts": false,
     *         //   "name": "my_name"
     *         // }
     *       },
     *     });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "eligible": false,
     *   //   "enableProducts": false,
     *   //   "name": "my_name"
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
    updateAutofeedSettings(
      params: Params$Resource$Accounts$Autofeedsettings$Updateautofeedsettings,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    updateAutofeedSettings(
      params?: Params$Resource$Accounts$Autofeedsettings$Updateautofeedsettings,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$AutofeedSettings>>;
    updateAutofeedSettings(
      params: Params$Resource$Accounts$Autofeedsettings$Updateautofeedsettings,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    updateAutofeedSettings(
      params: Params$Resource$Accounts$Autofeedsettings$Updateautofeedsettings,
      options: MethodOptions | BodyResponseCallback<Schema$AutofeedSettings>,
      callback: BodyResponseCallback<Schema$AutofeedSettings>
    ): void;
    updateAutofeedSettings(
      params: Params$Resource$Accounts$Autofeedsettings$Updateautofeedsettings,
      callback: BodyResponseCallback<Schema$AutofeedSettings>
    ): void;
    updateAutofeedSettings(
      callback: BodyResponseCallback<Schema$AutofeedSettings>
    ): void;
    updateAutofeedSettings(
      paramsOrCallback?:
        | Params$Resource$Accounts$Autofeedsettings$Updateautofeedsettings
        | BodyResponseCallback<Schema$AutofeedSettings>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$AutofeedSettings>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$AutofeedSettings>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$AutofeedSettings>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Accounts$Autofeedsettings$Updateautofeedsettings;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Accounts$Autofeedsettings$Updateautofeedsettings;
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
            url: (rootUrl + '/accounts/v1/{+name}').replace(
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
        createAPIRequest<Schema$AutofeedSettings>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$AutofeedSettings>(parameters);
      }
    }
  }

  export interface Params$Resource$Accounts$Autofeedsettings$Getautofeedsettings
    extends StandardParameters {
    /**
     * Required. The resource name of the autofeed settings. Format: `accounts/{account\}/autofeedSettings`
     */
    name?: string;
  }
  export interface Params$Resource$Accounts$Autofeedsettings$Updateautofeedsettings
    extends StandardParameters {
    /**
     * Identifier. The resource name of the autofeed settings. Format: `accounts/{account\}/autofeedSettings`.
     */
    name?: string;
    /**
     * Required. List of fields being updated.
     */
    updateMask?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$AutofeedSettings;
  }

  export class Resource$Accounts$Automaticimprovements {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Retrieves the automatic improvements of an account.
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
     * const merchantapi = google.merchantapi('accounts_v1');
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
     *   const res =
     *     await merchantapi.accounts.automaticImprovements.getAutomaticImprovements({
     *       // Required. The resource name of the automatic improvements. Format: `accounts/{account\}/automaticImprovements`
     *       name: 'accounts/my-account/automaticImprovements',
     *     });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "imageImprovements": {},
     *   //   "itemUpdates": {},
     *   //   "name": "my_name",
     *   //   "shippingImprovements": {}
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
    getAutomaticImprovements(
      params: Params$Resource$Accounts$Automaticimprovements$Getautomaticimprovements,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    getAutomaticImprovements(
      params?: Params$Resource$Accounts$Automaticimprovements$Getautomaticimprovements,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$AutomaticImprovements>>;
    getAutomaticImprovements(
      params: Params$Resource$Accounts$Automaticimprovements$Getautomaticimprovements,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    getAutomaticImprovements(
      params: Params$Resource$Accounts$Automaticimprovements$Getautomaticimprovements,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$AutomaticImprovements>,
      callback: BodyResponseCallback<Schema$AutomaticImprovements>
    ): void;
    getAutomaticImprovements(
      params: Params$Resource$Accounts$Automaticimprovements$Getautomaticimprovements,
      callback: BodyResponseCallback<Schema$AutomaticImprovements>
    ): void;
    getAutomaticImprovements(
      callback: BodyResponseCallback<Schema$AutomaticImprovements>
    ): void;
    getAutomaticImprovements(
      paramsOrCallback?:
        | Params$Resource$Accounts$Automaticimprovements$Getautomaticimprovements
        | BodyResponseCallback<Schema$AutomaticImprovements>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$AutomaticImprovements>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$AutomaticImprovements>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$AutomaticImprovements>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Accounts$Automaticimprovements$Getautomaticimprovements;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Accounts$Automaticimprovements$Getautomaticimprovements;
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
            url: (rootUrl + '/accounts/v1/{+name}').replace(
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
        createAPIRequest<Schema$AutomaticImprovements>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$AutomaticImprovements>(parameters);
      }
    }

    /**
     * Updates the automatic improvements of an account.
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
     * const merchantapi = google.merchantapi('accounts_v1');
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
     *   const res =
     *     await merchantapi.accounts.automaticImprovements.updateAutomaticImprovements(
     *       {
     *         // Identifier. The resource name of the automatic improvements. Format: `accounts/{account\}/automaticImprovements`.
     *         name: 'accounts/my-account/automaticImprovements',
     *         // Required. List of fields being updated. The following fields are supported (in both `snake_case` and `lowerCamelCase`): - `item_updates` - `item_updates.account_level_settings` - `image_improvements` - `image_improvements.account_level_settings` - `shipping_improvements` - `shipping_improvements.allow_shipping_improvements`
     *         updateMask: 'placeholder-value',
     *
     *         // Request body metadata
     *         requestBody: {
     *           // request body parameters
     *           // {
     *           //   "imageImprovements": {},
     *           //   "itemUpdates": {},
     *           //   "name": "my_name",
     *           //   "shippingImprovements": {}
     *           // }
     *         },
     *       },
     *     );
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "imageImprovements": {},
     *   //   "itemUpdates": {},
     *   //   "name": "my_name",
     *   //   "shippingImprovements": {}
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
    updateAutomaticImprovements(
      params: Params$Resource$Accounts$Automaticimprovements$Updateautomaticimprovements,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    updateAutomaticImprovements(
      params?: Params$Resource$Accounts$Automaticimprovements$Updateautomaticimprovements,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$AutomaticImprovements>>;
    updateAutomaticImprovements(
      params: Params$Resource$Accounts$Automaticimprovements$Updateautomaticimprovements,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    updateAutomaticImprovements(
      params: Params$Resource$Accounts$Automaticimprovements$Updateautomaticimprovements,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$AutomaticImprovements>,
      callback: BodyResponseCallback<Schema$AutomaticImprovements>
    ): void;
    updateAutomaticImprovements(
      params: Params$Resource$Accounts$Automaticimprovements$Updateautomaticimprovements,
      callback: BodyResponseCallback<Schema$AutomaticImprovements>
    ): void;
    updateAutomaticImprovements(
      callback: BodyResponseCallback<Schema$AutomaticImprovements>
    ): void;
    updateAutomaticImprovements(
      paramsOrCallback?:
        | Params$Resource$Accounts$Automaticimprovements$Updateautomaticimprovements
        | BodyResponseCallback<Schema$AutomaticImprovements>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$AutomaticImprovements>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$AutomaticImprovements>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$AutomaticImprovements>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Accounts$Automaticimprovements$Updateautomaticimprovements;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Accounts$Automaticimprovements$Updateautomaticimprovements;
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
            url: (rootUrl + '/accounts/v1/{+name}').replace(
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
        createAPIRequest<Schema$AutomaticImprovements>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$AutomaticImprovements>(parameters);
      }
    }
  }

  export interface Params$Resource$Accounts$Automaticimprovements$Getautomaticimprovements
    extends StandardParameters {
    /**
     * Required. The resource name of the automatic improvements. Format: `accounts/{account\}/automaticImprovements`
     */
    name?: string;
  }
  export interface Params$Resource$Accounts$Automaticimprovements$Updateautomaticimprovements
    extends StandardParameters {
    /**
     * Identifier. The resource name of the automatic improvements. Format: `accounts/{account\}/automaticImprovements`.
     */
    name?: string;
    /**
     * Required. List of fields being updated. The following fields are supported (in both `snake_case` and `lowerCamelCase`): - `item_updates` - `item_updates.account_level_settings` - `image_improvements` - `image_improvements.account_level_settings` - `shipping_improvements` - `shipping_improvements.allow_shipping_improvements`
     */
    updateMask?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$AutomaticImprovements;
  }

  export class Resource$Accounts$Businessidentity {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Retrieves the business identity of an account.
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
     * const merchantapi = google.merchantapi('accounts_v1');
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
     *   const res = await merchantapi.accounts.businessIdentity.getBusinessIdentity({
     *     // Required. The resource name of the business identity. Format: `accounts/{account\}/businessIdentity`. For example, `accounts/123456/businessIdentity`.
     *     name: 'accounts/my-account/businessIdentity',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "blackOwned": {},
     *   //   "latinoOwned": {},
     *   //   "name": "my_name",
     *   //   "promotionsConsent": "my_promotionsConsent",
     *   //   "smallBusiness": {},
     *   //   "veteranOwned": {},
     *   //   "womenOwned": {}
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
    getBusinessIdentity(
      params: Params$Resource$Accounts$Businessidentity$Getbusinessidentity,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    getBusinessIdentity(
      params?: Params$Resource$Accounts$Businessidentity$Getbusinessidentity,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$BusinessIdentity>>;
    getBusinessIdentity(
      params: Params$Resource$Accounts$Businessidentity$Getbusinessidentity,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    getBusinessIdentity(
      params: Params$Resource$Accounts$Businessidentity$Getbusinessidentity,
      options: MethodOptions | BodyResponseCallback<Schema$BusinessIdentity>,
      callback: BodyResponseCallback<Schema$BusinessIdentity>
    ): void;
    getBusinessIdentity(
      params: Params$Resource$Accounts$Businessidentity$Getbusinessidentity,
      callback: BodyResponseCallback<Schema$BusinessIdentity>
    ): void;
    getBusinessIdentity(
      callback: BodyResponseCallback<Schema$BusinessIdentity>
    ): void;
    getBusinessIdentity(
      paramsOrCallback?:
        | Params$Resource$Accounts$Businessidentity$Getbusinessidentity
        | BodyResponseCallback<Schema$BusinessIdentity>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$BusinessIdentity>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$BusinessIdentity>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$BusinessIdentity>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Accounts$Businessidentity$Getbusinessidentity;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Accounts$Businessidentity$Getbusinessidentity;
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
            url: (rootUrl + '/accounts/v1/{+name}').replace(
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
        createAPIRequest<Schema$BusinessIdentity>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$BusinessIdentity>(parameters);
      }
    }

    /**
     * Updates the business identity of an account. Executing this method requires admin access.
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
     * const merchantapi = google.merchantapi('accounts_v1');
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
     *   const res =
     *     await merchantapi.accounts.businessIdentity.updateBusinessIdentity({
     *       // Identifier. The resource name of the business identity. Format: `accounts/{account\}/businessIdentity`
     *       name: 'accounts/my-account/businessIdentity',
     *       // Optional. List of fields being updated. The following fields are supported (in both `snake_case` and `lowerCamelCase`): - `black_owned` - `latino_owned` - `promotions_consent` - `small_business` - `veteran_owned` - `women_owned`
     *       updateMask: 'placeholder-value',
     *
     *       // Request body metadata
     *       requestBody: {
     *         // request body parameters
     *         // {
     *         //   "blackOwned": {},
     *         //   "latinoOwned": {},
     *         //   "name": "my_name",
     *         //   "promotionsConsent": "my_promotionsConsent",
     *         //   "smallBusiness": {},
     *         //   "veteranOwned": {},
     *         //   "womenOwned": {}
     *         // }
     *       },
     *     });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "blackOwned": {},
     *   //   "latinoOwned": {},
     *   //   "name": "my_name",
     *   //   "promotionsConsent": "my_promotionsConsent",
     *   //   "smallBusiness": {},
     *   //   "veteranOwned": {},
     *   //   "womenOwned": {}
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
    updateBusinessIdentity(
      params: Params$Resource$Accounts$Businessidentity$Updatebusinessidentity,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    updateBusinessIdentity(
      params?: Params$Resource$Accounts$Businessidentity$Updatebusinessidentity,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$BusinessIdentity>>;
    updateBusinessIdentity(
      params: Params$Resource$Accounts$Businessidentity$Updatebusinessidentity,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    updateBusinessIdentity(
      params: Params$Resource$Accounts$Businessidentity$Updatebusinessidentity,
      options: MethodOptions | BodyResponseCallback<Schema$BusinessIdentity>,
      callback: BodyResponseCallback<Schema$BusinessIdentity>
    ): void;
    updateBusinessIdentity(
      params: Params$Resource$Accounts$Businessidentity$Updatebusinessidentity,
      callback: BodyResponseCallback<Schema$BusinessIdentity>
    ): void;
    updateBusinessIdentity(
      callback: BodyResponseCallback<Schema$BusinessIdentity>
    ): void;
    updateBusinessIdentity(
      paramsOrCallback?:
        | Params$Resource$Accounts$Businessidentity$Updatebusinessidentity
        | BodyResponseCallback<Schema$BusinessIdentity>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$BusinessIdentity>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$BusinessIdentity>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$BusinessIdentity>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Accounts$Businessidentity$Updatebusinessidentity;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Accounts$Businessidentity$Updatebusinessidentity;
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
            url: (rootUrl + '/accounts/v1/{+name}').replace(
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
        createAPIRequest<Schema$BusinessIdentity>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$BusinessIdentity>(parameters);
      }
    }
  }

  export interface Params$Resource$Accounts$Businessidentity$Getbusinessidentity
    extends StandardParameters {
    /**
     * Required. The resource name of the business identity. Format: `accounts/{account\}/businessIdentity`. For example, `accounts/123456/businessIdentity`.
     */
    name?: string;
  }
  export interface Params$Resource$Accounts$Businessidentity$Updatebusinessidentity
    extends StandardParameters {
    /**
     * Identifier. The resource name of the business identity. Format: `accounts/{account\}/businessIdentity`
     */
    name?: string;
    /**
     * Optional. List of fields being updated. The following fields are supported (in both `snake_case` and `lowerCamelCase`): - `black_owned` - `latino_owned` - `promotions_consent` - `small_business` - `veteran_owned` - `women_owned`
     */
    updateMask?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$BusinessIdentity;
  }

  export class Resource$Accounts$Businessinfo {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Retrieves the business info of an account.
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
     * const merchantapi = google.merchantapi('accounts_v1');
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
     *   const res = await merchantapi.accounts.businessInfo.getBusinessInfo({
     *     // Required. The resource name of the business info. Format: `accounts/{account\}/businessInfo`. For example, `accounts/123456/businessInfo`.
     *     name: 'accounts/my-account/businessInfo',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "address": {},
     *   //   "customerService": {},
     *   //   "koreanBusinessRegistrationNumber": "my_koreanBusinessRegistrationNumber",
     *   //   "name": "my_name",
     *   //   "phone": {},
     *   //   "phoneVerificationState": "my_phoneVerificationState"
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
    getBusinessInfo(
      params: Params$Resource$Accounts$Businessinfo$Getbusinessinfo,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    getBusinessInfo(
      params?: Params$Resource$Accounts$Businessinfo$Getbusinessinfo,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$BusinessInfo>>;
    getBusinessInfo(
      params: Params$Resource$Accounts$Businessinfo$Getbusinessinfo,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    getBusinessInfo(
      params: Params$Resource$Accounts$Businessinfo$Getbusinessinfo,
      options: MethodOptions | BodyResponseCallback<Schema$BusinessInfo>,
      callback: BodyResponseCallback<Schema$BusinessInfo>
    ): void;
    getBusinessInfo(
      params: Params$Resource$Accounts$Businessinfo$Getbusinessinfo,
      callback: BodyResponseCallback<Schema$BusinessInfo>
    ): void;
    getBusinessInfo(callback: BodyResponseCallback<Schema$BusinessInfo>): void;
    getBusinessInfo(
      paramsOrCallback?:
        | Params$Resource$Accounts$Businessinfo$Getbusinessinfo
        | BodyResponseCallback<Schema$BusinessInfo>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$BusinessInfo>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$BusinessInfo>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$BusinessInfo>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Accounts$Businessinfo$Getbusinessinfo;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Accounts$Businessinfo$Getbusinessinfo;
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
            url: (rootUrl + '/accounts/v1/{+name}').replace(
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
        createAPIRequest<Schema$BusinessInfo>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$BusinessInfo>(parameters);
      }
    }

    /**
     * Updates the business info of an account. Executing this method requires admin access.
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
     * const merchantapi = google.merchantapi('accounts_v1');
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
     *   const res = await merchantapi.accounts.businessInfo.updateBusinessInfo({
     *     // Identifier. The resource name of the business info. Format: `accounts/{account\}/businessInfo`
     *     name: 'accounts/my-account/businessInfo',
     *     // Optional. List of fields being updated. The following fields are supported (in both `snake_case` and `lowerCamelCase`): - `address` - `customer_service` - `korean_business_registration_number`
     *     updateMask: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "address": {},
     *       //   "customerService": {},
     *       //   "koreanBusinessRegistrationNumber": "my_koreanBusinessRegistrationNumber",
     *       //   "name": "my_name",
     *       //   "phone": {},
     *       //   "phoneVerificationState": "my_phoneVerificationState"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "address": {},
     *   //   "customerService": {},
     *   //   "koreanBusinessRegistrationNumber": "my_koreanBusinessRegistrationNumber",
     *   //   "name": "my_name",
     *   //   "phone": {},
     *   //   "phoneVerificationState": "my_phoneVerificationState"
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
    updateBusinessInfo(
      params: Params$Resource$Accounts$Businessinfo$Updatebusinessinfo,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    updateBusinessInfo(
      params?: Params$Resource$Accounts$Businessinfo$Updatebusinessinfo,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$BusinessInfo>>;
    updateBusinessInfo(
      params: Params$Resource$Accounts$Businessinfo$Updatebusinessinfo,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    updateBusinessInfo(
      params: Params$Resource$Accounts$Businessinfo$Updatebusinessinfo,
      options: MethodOptions | BodyResponseCallback<Schema$BusinessInfo>,
      callback: BodyResponseCallback<Schema$BusinessInfo>
    ): void;
    updateBusinessInfo(
      params: Params$Resource$Accounts$Businessinfo$Updatebusinessinfo,
      callback: BodyResponseCallback<Schema$BusinessInfo>
    ): void;
    updateBusinessInfo(
      callback: BodyResponseCallback<Schema$BusinessInfo>
    ): void;
    updateBusinessInfo(
      paramsOrCallback?:
        | Params$Resource$Accounts$Businessinfo$Updatebusinessinfo
        | BodyResponseCallback<Schema$BusinessInfo>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$BusinessInfo>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$BusinessInfo>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$BusinessInfo>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Accounts$Businessinfo$Updatebusinessinfo;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Accounts$Businessinfo$Updatebusinessinfo;
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
            url: (rootUrl + '/accounts/v1/{+name}').replace(
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
        createAPIRequest<Schema$BusinessInfo>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$BusinessInfo>(parameters);
      }
    }
  }

  export interface Params$Resource$Accounts$Businessinfo$Getbusinessinfo
    extends StandardParameters {
    /**
     * Required. The resource name of the business info. Format: `accounts/{account\}/businessInfo`. For example, `accounts/123456/businessInfo`.
     */
    name?: string;
  }
  export interface Params$Resource$Accounts$Businessinfo$Updatebusinessinfo
    extends StandardParameters {
    /**
     * Identifier. The resource name of the business info. Format: `accounts/{account\}/businessInfo`
     */
    name?: string;
    /**
     * Optional. List of fields being updated. The following fields are supported (in both `snake_case` and `lowerCamelCase`): - `address` - `customer_service` - `korean_business_registration_number`
     */
    updateMask?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$BusinessInfo;
  }

  export class Resource$Accounts$Developerregistration {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Retrieves a developer registration for a merchant.
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
     * const merchantapi = google.merchantapi('accounts_v1');
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
     *   const res =
     *     await merchantapi.accounts.developerRegistration.getDeveloperRegistration({
     *       // Required. The `name` (ID) of the developer registration.
     *       name: 'accounts/my-account/developerRegistration',
     *     });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "gcpIds": [],
     *   //   "name": "my_name"
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
    getDeveloperRegistration(
      params: Params$Resource$Accounts$Developerregistration$Getdeveloperregistration,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    getDeveloperRegistration(
      params?: Params$Resource$Accounts$Developerregistration$Getdeveloperregistration,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$DeveloperRegistration>>;
    getDeveloperRegistration(
      params: Params$Resource$Accounts$Developerregistration$Getdeveloperregistration,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    getDeveloperRegistration(
      params: Params$Resource$Accounts$Developerregistration$Getdeveloperregistration,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$DeveloperRegistration>,
      callback: BodyResponseCallback<Schema$DeveloperRegistration>
    ): void;
    getDeveloperRegistration(
      params: Params$Resource$Accounts$Developerregistration$Getdeveloperregistration,
      callback: BodyResponseCallback<Schema$DeveloperRegistration>
    ): void;
    getDeveloperRegistration(
      callback: BodyResponseCallback<Schema$DeveloperRegistration>
    ): void;
    getDeveloperRegistration(
      paramsOrCallback?:
        | Params$Resource$Accounts$Developerregistration$Getdeveloperregistration
        | BodyResponseCallback<Schema$DeveloperRegistration>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$DeveloperRegistration>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$DeveloperRegistration>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$DeveloperRegistration>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Accounts$Developerregistration$Getdeveloperregistration;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Accounts$Developerregistration$Getdeveloperregistration;
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
            url: (rootUrl + '/accounts/v1/{+name}').replace(
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
        createAPIRequest<Schema$DeveloperRegistration>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$DeveloperRegistration>(parameters);
      }
    }

    /**
     * Registers the GCP used for the API call to the shopping account passed in the request. Will create a user with an "API developer" and add the "developer_email" as a contact with "API notifications" email preference on.
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
     * const merchantapi = google.merchantapi('accounts_v1');
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
     *   const res = await merchantapi.accounts.developerRegistration.registerGcp({
     *     // Required. The name of the developer registration to be created for the merchant account that the GCP will be registered with. Format: `accounts/{account\}/developerRegistration`
     *     name: 'accounts/my-account/developerRegistration',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "developerEmail": "my_developerEmail"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "gcpIds": [],
     *   //   "name": "my_name"
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
    registerGcp(
      params: Params$Resource$Accounts$Developerregistration$Registergcp,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    registerGcp(
      params?: Params$Resource$Accounts$Developerregistration$Registergcp,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$DeveloperRegistration>>;
    registerGcp(
      params: Params$Resource$Accounts$Developerregistration$Registergcp,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    registerGcp(
      params: Params$Resource$Accounts$Developerregistration$Registergcp,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$DeveloperRegistration>,
      callback: BodyResponseCallback<Schema$DeveloperRegistration>
    ): void;
    registerGcp(
      params: Params$Resource$Accounts$Developerregistration$Registergcp,
      callback: BodyResponseCallback<Schema$DeveloperRegistration>
    ): void;
    registerGcp(
      callback: BodyResponseCallback<Schema$DeveloperRegistration>
    ): void;
    registerGcp(
      paramsOrCallback?:
        | Params$Resource$Accounts$Developerregistration$Registergcp
        | BodyResponseCallback<Schema$DeveloperRegistration>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$DeveloperRegistration>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$DeveloperRegistration>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$DeveloperRegistration>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Accounts$Developerregistration$Registergcp;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Accounts$Developerregistration$Registergcp;
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
            url: (rootUrl + '/accounts/v1/{+name}:registerGcp').replace(
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
        createAPIRequest<Schema$DeveloperRegistration>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$DeveloperRegistration>(parameters);
      }
    }

    /**
     * Unregister the calling GCP from the calling shopping account. Note that the GCP will still be able to access the API for at most 1 day from the unregister succussful call.
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
     * const merchantapi = google.merchantapi('accounts_v1');
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
     *   const res = await merchantapi.accounts.developerRegistration.unregisterGcp({
     *     // Required. The name of the developer registration to be created for the merchant account that the GCP will be registered with. Format: `accounts/{account\}/developerRegistration`
     *     name: 'accounts/my-account/developerRegistration',
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
    unregisterGcp(
      params: Params$Resource$Accounts$Developerregistration$Unregistergcp,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    unregisterGcp(
      params?: Params$Resource$Accounts$Developerregistration$Unregistergcp,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Empty>>;
    unregisterGcp(
      params: Params$Resource$Accounts$Developerregistration$Unregistergcp,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    unregisterGcp(
      params: Params$Resource$Accounts$Developerregistration$Unregistergcp,
      options: MethodOptions | BodyResponseCallback<Schema$Empty>,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    unregisterGcp(
      params: Params$Resource$Accounts$Developerregistration$Unregistergcp,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    unregisterGcp(callback: BodyResponseCallback<Schema$Empty>): void;
    unregisterGcp(
      paramsOrCallback?:
        | Params$Resource$Accounts$Developerregistration$Unregistergcp
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
        {}) as Params$Resource$Accounts$Developerregistration$Unregistergcp;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Accounts$Developerregistration$Unregistergcp;
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
            url: (rootUrl + '/accounts/v1/{+name}:unregisterGcp').replace(
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
  }

  export interface Params$Resource$Accounts$Developerregistration$Getdeveloperregistration
    extends StandardParameters {
    /**
     * Required. The `name` (ID) of the developer registration.
     */
    name?: string;
  }
  export interface Params$Resource$Accounts$Developerregistration$Registergcp
    extends StandardParameters {
    /**
     * Required. The name of the developer registration to be created for the merchant account that the GCP will be registered with. Format: `accounts/{account\}/developerRegistration`
     */
    name?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$RegisterGcpRequest;
  }
  export interface Params$Resource$Accounts$Developerregistration$Unregistergcp
    extends StandardParameters {
    /**
     * Required. The name of the developer registration to be created for the merchant account that the GCP will be registered with. Format: `accounts/{account\}/developerRegistration`
     */
    name?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$UnregisterGcpRequest;
  }

  export class Resource$Accounts$Emailpreferences {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Returns the email preferences for a Merchant Center account user. This service only permits retrieving and updating email preferences for the authenticated user. Use the name=accounts/x/users/me/emailPreferences alias to get preferences for the authenticated user.
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
     * const merchantapi = google.merchantapi('accounts_v1');
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
     *   const res = await merchantapi.accounts.emailPreferences.getEmailPreferences({
     *     // Required. The name of the `EmailPreferences` resource. Format: `accounts/{account\}/users/{email\}/emailPreferences`
     *     name: 'accounts/my-account/users/my-user/emailPreferences',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "name": "my_name",
     *   //   "newsAndTips": "my_newsAndTips"
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
    getEmailPreferences(
      params: Params$Resource$Accounts$Emailpreferences$Getemailpreferences,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    getEmailPreferences(
      params?: Params$Resource$Accounts$Emailpreferences$Getemailpreferences,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$EmailPreferences>>;
    getEmailPreferences(
      params: Params$Resource$Accounts$Emailpreferences$Getemailpreferences,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    getEmailPreferences(
      params: Params$Resource$Accounts$Emailpreferences$Getemailpreferences,
      options: MethodOptions | BodyResponseCallback<Schema$EmailPreferences>,
      callback: BodyResponseCallback<Schema$EmailPreferences>
    ): void;
    getEmailPreferences(
      params: Params$Resource$Accounts$Emailpreferences$Getemailpreferences,
      callback: BodyResponseCallback<Schema$EmailPreferences>
    ): void;
    getEmailPreferences(
      callback: BodyResponseCallback<Schema$EmailPreferences>
    ): void;
    getEmailPreferences(
      paramsOrCallback?:
        | Params$Resource$Accounts$Emailpreferences$Getemailpreferences
        | BodyResponseCallback<Schema$EmailPreferences>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$EmailPreferences>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$EmailPreferences>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$EmailPreferences>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Accounts$Emailpreferences$Getemailpreferences;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Accounts$Emailpreferences$Getemailpreferences;
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
            url: (rootUrl + '/accounts/v1/{+name}').replace(
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
        createAPIRequest<Schema$EmailPreferences>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$EmailPreferences>(parameters);
      }
    }

    /**
     * Updates the email preferences for a Merchant Center account user. Advanced account users should specify the advanced account rather than a sub-account of the advanced account. Preferences which are not explicitly selected in the update mask will not be updated. It is invalid for updates to specify an UNCONFIRMED opt-in status value. Use the name=accounts/x/users/me/emailPreferences alias to update preferences for the authenticated user.
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
     * const merchantapi = google.merchantapi('accounts_v1');
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
     *   const res =
     *     await merchantapi.accounts.emailPreferences.updateEmailPreferences({
     *       // Identifier. The name of the EmailPreferences. The endpoint is only supported for the authenticated user.
     *       name: 'accounts/my-account/users/my-user/emailPreferences',
     *       // Required. List of fields being updated. The following fields are supported (in both `snake_case` and `lowerCamelCase`): - `news_and_tips`
     *       updateMask: 'placeholder-value',
     *
     *       // Request body metadata
     *       requestBody: {
     *         // request body parameters
     *         // {
     *         //   "name": "my_name",
     *         //   "newsAndTips": "my_newsAndTips"
     *         // }
     *       },
     *     });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "name": "my_name",
     *   //   "newsAndTips": "my_newsAndTips"
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
    updateEmailPreferences(
      params: Params$Resource$Accounts$Emailpreferences$Updateemailpreferences,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    updateEmailPreferences(
      params?: Params$Resource$Accounts$Emailpreferences$Updateemailpreferences,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$EmailPreferences>>;
    updateEmailPreferences(
      params: Params$Resource$Accounts$Emailpreferences$Updateemailpreferences,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    updateEmailPreferences(
      params: Params$Resource$Accounts$Emailpreferences$Updateemailpreferences,
      options: MethodOptions | BodyResponseCallback<Schema$EmailPreferences>,
      callback: BodyResponseCallback<Schema$EmailPreferences>
    ): void;
    updateEmailPreferences(
      params: Params$Resource$Accounts$Emailpreferences$Updateemailpreferences,
      callback: BodyResponseCallback<Schema$EmailPreferences>
    ): void;
    updateEmailPreferences(
      callback: BodyResponseCallback<Schema$EmailPreferences>
    ): void;
    updateEmailPreferences(
      paramsOrCallback?:
        | Params$Resource$Accounts$Emailpreferences$Updateemailpreferences
        | BodyResponseCallback<Schema$EmailPreferences>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$EmailPreferences>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$EmailPreferences>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$EmailPreferences>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Accounts$Emailpreferences$Updateemailpreferences;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Accounts$Emailpreferences$Updateemailpreferences;
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
            url: (rootUrl + '/accounts/v1/{+name}').replace(
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
        createAPIRequest<Schema$EmailPreferences>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$EmailPreferences>(parameters);
      }
    }
  }

  export interface Params$Resource$Accounts$Emailpreferences$Getemailpreferences
    extends StandardParameters {
    /**
     * Required. The name of the `EmailPreferences` resource. Format: `accounts/{account\}/users/{email\}/emailPreferences`
     */
    name?: string;
  }
  export interface Params$Resource$Accounts$Emailpreferences$Updateemailpreferences
    extends StandardParameters {
    /**
     * Identifier. The name of the EmailPreferences. The endpoint is only supported for the authenticated user.
     */
    name?: string;
    /**
     * Required. List of fields being updated. The following fields are supported (in both `snake_case` and `lowerCamelCase`): - `news_and_tips`
     */
    updateMask?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$EmailPreferences;
  }

  export class Resource$Accounts$Gbpaccounts {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Link the specified merchant to a GBP account for all countries. To run this method, you must have admin access to the Merchant Center account. If you don't have admin access, the request fails with the error message `User is not an administrator of account {ACCOUNT_ID\}`.
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
     * const merchantapi = google.merchantapi('accounts_v1');
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
     *   const res = await merchantapi.accounts.gbpAccounts.linkGbpAccount({
     *     // Required. The name of the parent resource to which the GBP account is linked. Format: `accounts/{account\}`.
     *     parent: 'accounts/my-account',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "gbpEmail": "my_gbpEmail"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "response": {}
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
    linkGbpAccount(
      params: Params$Resource$Accounts$Gbpaccounts$Linkgbpaccount,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    linkGbpAccount(
      params?: Params$Resource$Accounts$Gbpaccounts$Linkgbpaccount,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$LinkGbpAccountResponse>>;
    linkGbpAccount(
      params: Params$Resource$Accounts$Gbpaccounts$Linkgbpaccount,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    linkGbpAccount(
      params: Params$Resource$Accounts$Gbpaccounts$Linkgbpaccount,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$LinkGbpAccountResponse>,
      callback: BodyResponseCallback<Schema$LinkGbpAccountResponse>
    ): void;
    linkGbpAccount(
      params: Params$Resource$Accounts$Gbpaccounts$Linkgbpaccount,
      callback: BodyResponseCallback<Schema$LinkGbpAccountResponse>
    ): void;
    linkGbpAccount(
      callback: BodyResponseCallback<Schema$LinkGbpAccountResponse>
    ): void;
    linkGbpAccount(
      paramsOrCallback?:
        | Params$Resource$Accounts$Gbpaccounts$Linkgbpaccount
        | BodyResponseCallback<Schema$LinkGbpAccountResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$LinkGbpAccountResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$LinkGbpAccountResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$LinkGbpAccountResponse>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Accounts$Gbpaccounts$Linkgbpaccount;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Accounts$Gbpaccounts$Linkgbpaccount;
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
            url: (
              rootUrl + '/accounts/v1/{+parent}/gbpAccounts:linkGbpAccount'
            ).replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$LinkGbpAccountResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$LinkGbpAccountResponse>(parameters);
      }
    }

    /**
     * List the GBP accounts for a given merchant.
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
     * const merchantapi = google.merchantapi('accounts_v1');
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
     *   const res = await merchantapi.accounts.gbpAccounts.list({
     *     // Optional. The maximum number of `GbpAccount` resources to return. The service returns fewer than this value if the number of gbp accounts is less that than the `pageSize`. The default value is 50. The maximum value is 1000; If a value higher than the maximum is specified, then the `pageSize` will default to the maximum.
     *     pageSize: 'placeholder-value',
     *     // Optional. A page token, received from a previous `ListGbpAccounts` call. Provide the page token to retrieve the subsequent page. When paginating, all other parameters provided to `ListGbpAccounts` must match the call that provided the page token.
     *     pageToken: 'placeholder-value',
     *     // Required. The name of the parent resource under which the GBP accounts are listed. Format: `accounts/{account\}`.
     *     parent: 'accounts/my-account',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "gbpAccounts": [],
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
      params: Params$Resource$Accounts$Gbpaccounts$List,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    list(
      params?: Params$Resource$Accounts$Gbpaccounts$List,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$ListGbpAccountsResponse>>;
    list(
      params: Params$Resource$Accounts$Gbpaccounts$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Accounts$Gbpaccounts$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ListGbpAccountsResponse>,
      callback: BodyResponseCallback<Schema$ListGbpAccountsResponse>
    ): void;
    list(
      params: Params$Resource$Accounts$Gbpaccounts$List,
      callback: BodyResponseCallback<Schema$ListGbpAccountsResponse>
    ): void;
    list(callback: BodyResponseCallback<Schema$ListGbpAccountsResponse>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Accounts$Gbpaccounts$List
        | BodyResponseCallback<Schema$ListGbpAccountsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ListGbpAccountsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ListGbpAccountsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$ListGbpAccountsResponse>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Accounts$Gbpaccounts$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Accounts$Gbpaccounts$List;
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
            url: (rootUrl + '/accounts/v1/{+parent}/gbpAccounts').replace(
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
        createAPIRequest<Schema$ListGbpAccountsResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ListGbpAccountsResponse>(parameters);
      }
    }
  }

  export interface Params$Resource$Accounts$Gbpaccounts$Linkgbpaccount
    extends StandardParameters {
    /**
     * Required. The name of the parent resource to which the GBP account is linked. Format: `accounts/{account\}`.
     */
    parent?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$LinkGbpAccountRequest;
  }
  export interface Params$Resource$Accounts$Gbpaccounts$List
    extends StandardParameters {
    /**
     * Optional. The maximum number of `GbpAccount` resources to return. The service returns fewer than this value if the number of gbp accounts is less that than the `pageSize`. The default value is 50. The maximum value is 1000; If a value higher than the maximum is specified, then the `pageSize` will default to the maximum.
     */
    pageSize?: number;
    /**
     * Optional. A page token, received from a previous `ListGbpAccounts` call. Provide the page token to retrieve the subsequent page. When paginating, all other parameters provided to `ListGbpAccounts` must match the call that provided the page token.
     */
    pageToken?: string;
    /**
     * Required. The name of the parent resource under which the GBP accounts are listed. Format: `accounts/{account\}`.
     */
    parent?: string;
  }

  export class Resource$Accounts$Homepage {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Claims a store's homepage. Executing this method requires admin access. If the homepage is already claimed, this will recheck the verification (unless the business is exempted from claiming, which also exempts from verification) and return a successful response. If ownership can no longer be verified, it will return an error, but it won't clear the claim. In case of failure, a canonical error message is returned: * PERMISSION_DENIED: User doesn't have the necessary permissions on this Merchant Center account. * FAILED_PRECONDITION: - The account is not a Merchant Center account. - Merchant Center account doesn't have a homepage. - Claiming failed (in this case the error message contains more details).
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
     * const merchantapi = google.merchantapi('accounts_v1');
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
     *   const res = await merchantapi.accounts.homepage.claim({
     *     // Required. The name of the homepage to claim. Format: `accounts/{account\}/homepage`
     *     name: 'accounts/my-account/homepage',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "overwrite": false
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "claimed": false,
     *   //   "name": "my_name",
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
    claim(
      params: Params$Resource$Accounts$Homepage$Claim,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    claim(
      params?: Params$Resource$Accounts$Homepage$Claim,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Homepage>>;
    claim(
      params: Params$Resource$Accounts$Homepage$Claim,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    claim(
      params: Params$Resource$Accounts$Homepage$Claim,
      options: MethodOptions | BodyResponseCallback<Schema$Homepage>,
      callback: BodyResponseCallback<Schema$Homepage>
    ): void;
    claim(
      params: Params$Resource$Accounts$Homepage$Claim,
      callback: BodyResponseCallback<Schema$Homepage>
    ): void;
    claim(callback: BodyResponseCallback<Schema$Homepage>): void;
    claim(
      paramsOrCallback?:
        | Params$Resource$Accounts$Homepage$Claim
        | BodyResponseCallback<Schema$Homepage>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Homepage>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Homepage>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$Homepage>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Accounts$Homepage$Claim;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Accounts$Homepage$Claim;
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
            url: (rootUrl + '/accounts/v1/{+name}:claim').replace(
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
        createAPIRequest<Schema$Homepage>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Homepage>(parameters);
      }
    }

    /**
     * Retrieves a store's homepage.
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
     * const merchantapi = google.merchantapi('accounts_v1');
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
     *   const res = await merchantapi.accounts.homepage.getHomepage({
     *     // Required. The name of the homepage to retrieve. Format: `accounts/{account\}/homepage`
     *     name: 'accounts/my-account/homepage',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "claimed": false,
     *   //   "name": "my_name",
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
    getHomepage(
      params: Params$Resource$Accounts$Homepage$Gethomepage,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    getHomepage(
      params?: Params$Resource$Accounts$Homepage$Gethomepage,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Homepage>>;
    getHomepage(
      params: Params$Resource$Accounts$Homepage$Gethomepage,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    getHomepage(
      params: Params$Resource$Accounts$Homepage$Gethomepage,
      options: MethodOptions | BodyResponseCallback<Schema$Homepage>,
      callback: BodyResponseCallback<Schema$Homepage>
    ): void;
    getHomepage(
      params: Params$Resource$Accounts$Homepage$Gethomepage,
      callback: BodyResponseCallback<Schema$Homepage>
    ): void;
    getHomepage(callback: BodyResponseCallback<Schema$Homepage>): void;
    getHomepage(
      paramsOrCallback?:
        | Params$Resource$Accounts$Homepage$Gethomepage
        | BodyResponseCallback<Schema$Homepage>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Homepage>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Homepage>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$Homepage>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Accounts$Homepage$Gethomepage;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Accounts$Homepage$Gethomepage;
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
            url: (rootUrl + '/accounts/v1/{+name}').replace(
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
        createAPIRequest<Schema$Homepage>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Homepage>(parameters);
      }
    }

    /**
     * Unclaims a store's homepage. Executing this method requires admin access.
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
     * const merchantapi = google.merchantapi('accounts_v1');
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
     *   const res = await merchantapi.accounts.homepage.unclaim({
     *     // Required. The name of the homepage to unclaim. Format: `accounts/{account\}/homepage`
     *     name: 'accounts/my-account/homepage',
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
     *   //   "claimed": false,
     *   //   "name": "my_name",
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
    unclaim(
      params: Params$Resource$Accounts$Homepage$Unclaim,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    unclaim(
      params?: Params$Resource$Accounts$Homepage$Unclaim,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Homepage>>;
    unclaim(
      params: Params$Resource$Accounts$Homepage$Unclaim,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    unclaim(
      params: Params$Resource$Accounts$Homepage$Unclaim,
      options: MethodOptions | BodyResponseCallback<Schema$Homepage>,
      callback: BodyResponseCallback<Schema$Homepage>
    ): void;
    unclaim(
      params: Params$Resource$Accounts$Homepage$Unclaim,
      callback: BodyResponseCallback<Schema$Homepage>
    ): void;
    unclaim(callback: BodyResponseCallback<Schema$Homepage>): void;
    unclaim(
      paramsOrCallback?:
        | Params$Resource$Accounts$Homepage$Unclaim
        | BodyResponseCallback<Schema$Homepage>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Homepage>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Homepage>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$Homepage>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Accounts$Homepage$Unclaim;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Accounts$Homepage$Unclaim;
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
            url: (rootUrl + '/accounts/v1/{+name}:unclaim').replace(
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
        createAPIRequest<Schema$Homepage>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Homepage>(parameters);
      }
    }

    /**
     * Updates a store's homepage. Executing this method requires admin access.
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
     * const merchantapi = google.merchantapi('accounts_v1');
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
     *   const res = await merchantapi.accounts.homepage.updateHomepage({
     *     // Identifier. The resource name of the store's homepage. Format: `accounts/{account\}/homepage`
     *     name: 'accounts/my-account/homepage',
     *     // Optional. List of fields being updated. The following fields are supported (in both `snake_case` and `lowerCamelCase`): - `uri`
     *     updateMask: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "claimed": false,
     *       //   "name": "my_name",
     *       //   "uri": "my_uri"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "claimed": false,
     *   //   "name": "my_name",
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
    updateHomepage(
      params: Params$Resource$Accounts$Homepage$Updatehomepage,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    updateHomepage(
      params?: Params$Resource$Accounts$Homepage$Updatehomepage,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Homepage>>;
    updateHomepage(
      params: Params$Resource$Accounts$Homepage$Updatehomepage,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    updateHomepage(
      params: Params$Resource$Accounts$Homepage$Updatehomepage,
      options: MethodOptions | BodyResponseCallback<Schema$Homepage>,
      callback: BodyResponseCallback<Schema$Homepage>
    ): void;
    updateHomepage(
      params: Params$Resource$Accounts$Homepage$Updatehomepage,
      callback: BodyResponseCallback<Schema$Homepage>
    ): void;
    updateHomepage(callback: BodyResponseCallback<Schema$Homepage>): void;
    updateHomepage(
      paramsOrCallback?:
        | Params$Resource$Accounts$Homepage$Updatehomepage
        | BodyResponseCallback<Schema$Homepage>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Homepage>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Homepage>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$Homepage>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Accounts$Homepage$Updatehomepage;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Accounts$Homepage$Updatehomepage;
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
            url: (rootUrl + '/accounts/v1/{+name}').replace(
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
        createAPIRequest<Schema$Homepage>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Homepage>(parameters);
      }
    }
  }

  export interface Params$Resource$Accounts$Homepage$Claim
    extends StandardParameters {
    /**
     * Required. The name of the homepage to claim. Format: `accounts/{account\}/homepage`
     */
    name?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$ClaimHomepageRequest;
  }
  export interface Params$Resource$Accounts$Homepage$Gethomepage
    extends StandardParameters {
    /**
     * Required. The name of the homepage to retrieve. Format: `accounts/{account\}/homepage`
     */
    name?: string;
  }
  export interface Params$Resource$Accounts$Homepage$Unclaim
    extends StandardParameters {
    /**
     * Required. The name of the homepage to unclaim. Format: `accounts/{account\}/homepage`
     */
    name?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$UnclaimHomepageRequest;
  }
  export interface Params$Resource$Accounts$Homepage$Updatehomepage
    extends StandardParameters {
    /**
     * Identifier. The resource name of the store's homepage. Format: `accounts/{account\}/homepage`
     */
    name?: string;
    /**
     * Optional. List of fields being updated. The following fields are supported (in both `snake_case` and `lowerCamelCase`): - `uri`
     */
    updateMask?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$Homepage;
  }

  export class Resource$Accounts$Issues {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Lists all account issues of a Merchant Center account. When called on a multi-client account, this method only returns issues belonging to that account, not its sub-accounts. To retrieve issues for sub-accounts, you must first call the accounts.listSubaccounts method to obtain a list of sub-accounts, and then call `accounts.issues.list` for each sub-account individually.
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
     * const merchantapi = google.merchantapi('accounts_v1');
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
     *   const res = await merchantapi.accounts.issues.list({
     *     // Optional. The issues in the response will have human-readable fields in the given language. The format is [BCP-47](https://tools.ietf.org/html/bcp47), such as `en-US` or `sr-Latn`. If not value is provided, `en-US` will be used.
     *     languageCode: 'placeholder-value',
     *     // Optional. The maximum number of issues to return. The service may return fewer than this value. If unspecified, at most 50 issues will be returned. The maximum value is 100; values above 100 will be coerced to 100
     *     pageSize: 'placeholder-value',
     *     // Optional. A page token, received from a previous `ListAccountIssues` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListAccountIssues` must match the call that provided the page token.
     *     pageToken: 'placeholder-value',
     *     // Required. The parent, which owns this collection of issues. Format: `accounts/{account\}`
     *     parent: 'accounts/my-account',
     *     // Optional. The [IANA](https://www.iana.org/time-zones) timezone used to localize times in human-readable fields. For example 'America/Los_Angeles'. If not set, 'America/Los_Angeles' will be used.
     *     timeZone: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "accountIssues": [],
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
      params: Params$Resource$Accounts$Issues$List,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    list(
      params?: Params$Resource$Accounts$Issues$List,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$ListAccountIssuesResponse>>;
    list(
      params: Params$Resource$Accounts$Issues$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Accounts$Issues$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ListAccountIssuesResponse>,
      callback: BodyResponseCallback<Schema$ListAccountIssuesResponse>
    ): void;
    list(
      params: Params$Resource$Accounts$Issues$List,
      callback: BodyResponseCallback<Schema$ListAccountIssuesResponse>
    ): void;
    list(
      callback: BodyResponseCallback<Schema$ListAccountIssuesResponse>
    ): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Accounts$Issues$List
        | BodyResponseCallback<Schema$ListAccountIssuesResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ListAccountIssuesResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ListAccountIssuesResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$ListAccountIssuesResponse>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Accounts$Issues$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Accounts$Issues$List;
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
            url: (rootUrl + '/accounts/v1/{+parent}/issues').replace(
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
        createAPIRequest<Schema$ListAccountIssuesResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ListAccountIssuesResponse>(parameters);
      }
    }
  }

  export interface Params$Resource$Accounts$Issues$List
    extends StandardParameters {
    /**
     * Optional. The issues in the response will have human-readable fields in the given language. The format is [BCP-47](https://tools.ietf.org/html/bcp47), such as `en-US` or `sr-Latn`. If not value is provided, `en-US` will be used.
     */
    languageCode?: string;
    /**
     * Optional. The maximum number of issues to return. The service may return fewer than this value. If unspecified, at most 50 issues will be returned. The maximum value is 100; values above 100 will be coerced to 100
     */
    pageSize?: number;
    /**
     * Optional. A page token, received from a previous `ListAccountIssues` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListAccountIssues` must match the call that provided the page token.
     */
    pageToken?: string;
    /**
     * Required. The parent, which owns this collection of issues. Format: `accounts/{account\}`
     */
    parent?: string;
    /**
     * Optional. The [IANA](https://www.iana.org/time-zones) timezone used to localize times in human-readable fields. For example 'America/Los_Angeles'. If not set, 'America/Los_Angeles' will be used.
     */
    timeZone?: string;
  }

  export class Resource$Accounts$Omnichannelsettings {
    context: APIRequestContext;
    lfpProviders: Resource$Accounts$Omnichannelsettings$Lfpproviders;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.lfpProviders =
        new Resource$Accounts$Omnichannelsettings$Lfpproviders(this.context);
    }

    /**
     * Create the omnichannel settings for a given merchant.
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
     * const merchantapi = google.merchantapi('accounts_v1');
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
     *   const res = await merchantapi.accounts.omnichannelSettings.create({
     *     // Required. The parent resource where this omnichannel setting will be created. Format: `accounts/{account\}`
     *     parent: 'accounts/my-account',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "about": {},
     *       //   "inStock": {},
     *       //   "inventoryVerification": {},
     *       //   "lfpLink": {},
     *       //   "lsfType": "my_lsfType",
     *       //   "name": "my_name",
     *       //   "odo": {},
     *       //   "pickup": {},
     *       //   "regionCode": "my_regionCode"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "about": {},
     *   //   "inStock": {},
     *   //   "inventoryVerification": {},
     *   //   "lfpLink": {},
     *   //   "lsfType": "my_lsfType",
     *   //   "name": "my_name",
     *   //   "odo": {},
     *   //   "pickup": {},
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
    create(
      params: Params$Resource$Accounts$Omnichannelsettings$Create,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    create(
      params?: Params$Resource$Accounts$Omnichannelsettings$Create,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$OmnichannelSetting>>;
    create(
      params: Params$Resource$Accounts$Omnichannelsettings$Create,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    create(
      params: Params$Resource$Accounts$Omnichannelsettings$Create,
      options: MethodOptions | BodyResponseCallback<Schema$OmnichannelSetting>,
      callback: BodyResponseCallback<Schema$OmnichannelSetting>
    ): void;
    create(
      params: Params$Resource$Accounts$Omnichannelsettings$Create,
      callback: BodyResponseCallback<Schema$OmnichannelSetting>
    ): void;
    create(callback: BodyResponseCallback<Schema$OmnichannelSetting>): void;
    create(
      paramsOrCallback?:
        | Params$Resource$Accounts$Omnichannelsettings$Create
        | BodyResponseCallback<Schema$OmnichannelSetting>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$OmnichannelSetting>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$OmnichannelSetting>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$OmnichannelSetting>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Accounts$Omnichannelsettings$Create;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Accounts$Omnichannelsettings$Create;
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
            url: (
              rootUrl + '/accounts/v1/{+parent}/omnichannelSettings'
            ).replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$OmnichannelSetting>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$OmnichannelSetting>(parameters);
      }
    }

    /**
     * Get the omnichannel settings for a given merchant.
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
     * const merchantapi = google.merchantapi('accounts_v1');
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
     *   const res = await merchantapi.accounts.omnichannelSettings.get({
     *     // Required. The name of the omnichannel setting to retrieve. Format: `accounts/{account\}/omnichannelSettings/{omnichannel_setting\}`
     *     name: 'accounts/my-account/omnichannelSettings/my-omnichannelSetting',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "about": {},
     *   //   "inStock": {},
     *   //   "inventoryVerification": {},
     *   //   "lfpLink": {},
     *   //   "lsfType": "my_lsfType",
     *   //   "name": "my_name",
     *   //   "odo": {},
     *   //   "pickup": {},
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
      params: Params$Resource$Accounts$Omnichannelsettings$Get,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    get(
      params?: Params$Resource$Accounts$Omnichannelsettings$Get,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$OmnichannelSetting>>;
    get(
      params: Params$Resource$Accounts$Omnichannelsettings$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Accounts$Omnichannelsettings$Get,
      options: MethodOptions | BodyResponseCallback<Schema$OmnichannelSetting>,
      callback: BodyResponseCallback<Schema$OmnichannelSetting>
    ): void;
    get(
      params: Params$Resource$Accounts$Omnichannelsettings$Get,
      callback: BodyResponseCallback<Schema$OmnichannelSetting>
    ): void;
    get(callback: BodyResponseCallback<Schema$OmnichannelSetting>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Accounts$Omnichannelsettings$Get
        | BodyResponseCallback<Schema$OmnichannelSetting>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$OmnichannelSetting>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$OmnichannelSetting>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$OmnichannelSetting>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Accounts$Omnichannelsettings$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Accounts$Omnichannelsettings$Get;
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
            url: (rootUrl + '/accounts/v1/{+name}').replace(
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
        createAPIRequest<Schema$OmnichannelSetting>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$OmnichannelSetting>(parameters);
      }
    }

    /**
     * List all the omnichannel settings for a given merchant.
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
     * const merchantapi = google.merchantapi('accounts_v1');
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
     *   const res = await merchantapi.accounts.omnichannelSettings.list({
     *     // Optional. The maximum number of omnichannel settings to return. The service may return fewer than this value. If unspecified, at most 50 omnichannel settings will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000.
     *     pageSize: 'placeholder-value',
     *     // Optional. A page token, received from a previous `ListOmnichannelSettings` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListOmnichannelSettings` must match the call that provided the page token.
     *     pageToken: 'placeholder-value',
     *     // Required. The parent, which owns this collection of omnichannel settings. Format: `accounts/{account\}`
     *     parent: 'accounts/my-account',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "nextPageToken": "my_nextPageToken",
     *   //   "omnichannelSettings": []
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
      params: Params$Resource$Accounts$Omnichannelsettings$List,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    list(
      params?: Params$Resource$Accounts$Omnichannelsettings$List,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$ListOmnichannelSettingsResponse>>;
    list(
      params: Params$Resource$Accounts$Omnichannelsettings$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Accounts$Omnichannelsettings$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ListOmnichannelSettingsResponse>,
      callback: BodyResponseCallback<Schema$ListOmnichannelSettingsResponse>
    ): void;
    list(
      params: Params$Resource$Accounts$Omnichannelsettings$List,
      callback: BodyResponseCallback<Schema$ListOmnichannelSettingsResponse>
    ): void;
    list(
      callback: BodyResponseCallback<Schema$ListOmnichannelSettingsResponse>
    ): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Accounts$Omnichannelsettings$List
        | BodyResponseCallback<Schema$ListOmnichannelSettingsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ListOmnichannelSettingsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ListOmnichannelSettingsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$ListOmnichannelSettingsResponse>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Accounts$Omnichannelsettings$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Accounts$Omnichannelsettings$List;
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
            url: (
              rootUrl + '/accounts/v1/{+parent}/omnichannelSettings'
            ).replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$ListOmnichannelSettingsResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ListOmnichannelSettingsResponse>(
          parameters
        );
      }
    }

    /**
     * Update the omnichannel setting for a given merchant in a given country.
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
     * const merchantapi = google.merchantapi('accounts_v1');
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
     *   const res = await merchantapi.accounts.omnichannelSettings.patch({
     *     // Identifier. The resource name of the omnichannel setting. Format: `accounts/{account\}/omnichannelSettings/{omnichannel_setting\}`
     *     name: 'accounts/my-account/omnichannelSettings/my-omnichannelSetting',
     *     // Required. The list of fields to be updated. The following fields are supported in snake_case only: - `lsf_type` - `in_stock` - `pickup` - `odo` - `about` - `inventory_verification` Full replacement with wildcard `*`is supported, while empty/implied update mask is not.
     *     updateMask: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "about": {},
     *       //   "inStock": {},
     *       //   "inventoryVerification": {},
     *       //   "lfpLink": {},
     *       //   "lsfType": "my_lsfType",
     *       //   "name": "my_name",
     *       //   "odo": {},
     *       //   "pickup": {},
     *       //   "regionCode": "my_regionCode"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "about": {},
     *   //   "inStock": {},
     *   //   "inventoryVerification": {},
     *   //   "lfpLink": {},
     *   //   "lsfType": "my_lsfType",
     *   //   "name": "my_name",
     *   //   "odo": {},
     *   //   "pickup": {},
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
    patch(
      params: Params$Resource$Accounts$Omnichannelsettings$Patch,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    patch(
      params?: Params$Resource$Accounts$Omnichannelsettings$Patch,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$OmnichannelSetting>>;
    patch(
      params: Params$Resource$Accounts$Omnichannelsettings$Patch,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    patch(
      params: Params$Resource$Accounts$Omnichannelsettings$Patch,
      options: MethodOptions | BodyResponseCallback<Schema$OmnichannelSetting>,
      callback: BodyResponseCallback<Schema$OmnichannelSetting>
    ): void;
    patch(
      params: Params$Resource$Accounts$Omnichannelsettings$Patch,
      callback: BodyResponseCallback<Schema$OmnichannelSetting>
    ): void;
    patch(callback: BodyResponseCallback<Schema$OmnichannelSetting>): void;
    patch(
      paramsOrCallback?:
        | Params$Resource$Accounts$Omnichannelsettings$Patch
        | BodyResponseCallback<Schema$OmnichannelSetting>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$OmnichannelSetting>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$OmnichannelSetting>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$OmnichannelSetting>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Accounts$Omnichannelsettings$Patch;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Accounts$Omnichannelsettings$Patch;
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
            url: (rootUrl + '/accounts/v1/{+name}').replace(
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
        createAPIRequest<Schema$OmnichannelSetting>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$OmnichannelSetting>(parameters);
      }
    }

    /**
     * Requests inventory verification for a given merchant in a given country.
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
     * const merchantapi = google.merchantapi('accounts_v1');
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
     *   const res =
     *     await merchantapi.accounts.omnichannelSettings.requestInventoryVerification(
     *       {
     *         // Required. The name of the omnichannel setting to request inventory verification. Format: `accounts/{account\}/omnichannelSettings/{omnichannel_setting\}`
     *         name: 'accounts/my-account/omnichannelSettings/my-omnichannelSetting',
     *
     *         // Request body metadata
     *         requestBody: {
     *           // request body parameters
     *           // {}
     *         },
     *       },
     *     );
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "omnichannelSetting": {}
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
    requestInventoryVerification(
      params: Params$Resource$Accounts$Omnichannelsettings$Requestinventoryverification,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    requestInventoryVerification(
      params?: Params$Resource$Accounts$Omnichannelsettings$Requestinventoryverification,
      options?: MethodOptions
    ): Promise<
      GaxiosResponseWithHTTP2<Schema$RequestInventoryVerificationResponse>
    >;
    requestInventoryVerification(
      params: Params$Resource$Accounts$Omnichannelsettings$Requestinventoryverification,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    requestInventoryVerification(
      params: Params$Resource$Accounts$Omnichannelsettings$Requestinventoryverification,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$RequestInventoryVerificationResponse>,
      callback: BodyResponseCallback<Schema$RequestInventoryVerificationResponse>
    ): void;
    requestInventoryVerification(
      params: Params$Resource$Accounts$Omnichannelsettings$Requestinventoryverification,
      callback: BodyResponseCallback<Schema$RequestInventoryVerificationResponse>
    ): void;
    requestInventoryVerification(
      callback: BodyResponseCallback<Schema$RequestInventoryVerificationResponse>
    ): void;
    requestInventoryVerification(
      paramsOrCallback?:
        | Params$Resource$Accounts$Omnichannelsettings$Requestinventoryverification
        | BodyResponseCallback<Schema$RequestInventoryVerificationResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$RequestInventoryVerificationResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$RequestInventoryVerificationResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<
          GaxiosResponseWithHTTP2<Schema$RequestInventoryVerificationResponse>
        >
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Accounts$Omnichannelsettings$Requestinventoryverification;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Accounts$Omnichannelsettings$Requestinventoryverification;
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
            url: (
              rootUrl + '/accounts/v1/{+name}:requestInventoryVerification'
            ).replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$RequestInventoryVerificationResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$RequestInventoryVerificationResponse>(
          parameters
        );
      }
    }
  }

  export interface Params$Resource$Accounts$Omnichannelsettings$Create
    extends StandardParameters {
    /**
     * Required. The parent resource where this omnichannel setting will be created. Format: `accounts/{account\}`
     */
    parent?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$OmnichannelSetting;
  }
  export interface Params$Resource$Accounts$Omnichannelsettings$Get
    extends StandardParameters {
    /**
     * Required. The name of the omnichannel setting to retrieve. Format: `accounts/{account\}/omnichannelSettings/{omnichannel_setting\}`
     */
    name?: string;
  }
  export interface Params$Resource$Accounts$Omnichannelsettings$List
    extends StandardParameters {
    /**
     * Optional. The maximum number of omnichannel settings to return. The service may return fewer than this value. If unspecified, at most 50 omnichannel settings will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000.
     */
    pageSize?: number;
    /**
     * Optional. A page token, received from a previous `ListOmnichannelSettings` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListOmnichannelSettings` must match the call that provided the page token.
     */
    pageToken?: string;
    /**
     * Required. The parent, which owns this collection of omnichannel settings. Format: `accounts/{account\}`
     */
    parent?: string;
  }
  export interface Params$Resource$Accounts$Omnichannelsettings$Patch
    extends StandardParameters {
    /**
     * Identifier. The resource name of the omnichannel setting. Format: `accounts/{account\}/omnichannelSettings/{omnichannel_setting\}`
     */
    name?: string;
    /**
     * Required. The list of fields to be updated. The following fields are supported in snake_case only: - `lsf_type` - `in_stock` - `pickup` - `odo` - `about` - `inventory_verification` Full replacement with wildcard `*`is supported, while empty/implied update mask is not.
     */
    updateMask?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$OmnichannelSetting;
  }
  export interface Params$Resource$Accounts$Omnichannelsettings$Requestinventoryverification
    extends StandardParameters {
    /**
     * Required. The name of the omnichannel setting to request inventory verification. Format: `accounts/{account\}/omnichannelSettings/{omnichannel_setting\}`
     */
    name?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$RequestInventoryVerificationRequest;
  }

  export class Resource$Accounts$Omnichannelsettings$Lfpproviders {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Find the LFP provider candidates in a given country.
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
     * const merchantapi = google.merchantapi('accounts_v1');
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
     *   const res = await merchantapi.accounts.omnichannelSettings.lfpProviders.find({
     *     // Optional. The maximum number of `LfpProvider` resources to return. The service returns fewer than this value if the number of lfp providers is less that than the `pageSize`. The default value is 50. The maximum value is 1000; If a value higher than the maximum is specified, then the `pageSize` will default to the maximum.
     *     pageSize: 'placeholder-value',
     *     // Optional. A page token, received from a previous `FindLfpProviders` call. Provide the page token to retrieve the subsequent page. When paginating, all other parameters provided to `FindLfpProviders` must match the call that provided the page token.
     *     pageToken: 'placeholder-value',
     *     // Required. The name of the parent resource under which the LFP providers are found. Format: `accounts/{account\}/omnichannelSettings/{omnichannel_setting\}`.
     *     parent: 'accounts/my-account/omnichannelSettings/my-omnichannelSetting',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "lfpProviders": [],
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
    find(
      params: Params$Resource$Accounts$Omnichannelsettings$Lfpproviders$Find,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    find(
      params?: Params$Resource$Accounts$Omnichannelsettings$Lfpproviders$Find,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$FindLfpProvidersResponse>>;
    find(
      params: Params$Resource$Accounts$Omnichannelsettings$Lfpproviders$Find,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    find(
      params: Params$Resource$Accounts$Omnichannelsettings$Lfpproviders$Find,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$FindLfpProvidersResponse>,
      callback: BodyResponseCallback<Schema$FindLfpProvidersResponse>
    ): void;
    find(
      params: Params$Resource$Accounts$Omnichannelsettings$Lfpproviders$Find,
      callback: BodyResponseCallback<Schema$FindLfpProvidersResponse>
    ): void;
    find(callback: BodyResponseCallback<Schema$FindLfpProvidersResponse>): void;
    find(
      paramsOrCallback?:
        | Params$Resource$Accounts$Omnichannelsettings$Lfpproviders$Find
        | BodyResponseCallback<Schema$FindLfpProvidersResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$FindLfpProvidersResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$FindLfpProvidersResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$FindLfpProvidersResponse>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Accounts$Omnichannelsettings$Lfpproviders$Find;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Accounts$Omnichannelsettings$Lfpproviders$Find;
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
            url: (rootUrl + '/accounts/v1/{+parent}/lfpProviders:find').replace(
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
        createAPIRequest<Schema$FindLfpProvidersResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$FindLfpProvidersResponse>(parameters);
      }
    }

    /**
     * Link the specified merchant to a LFP provider for the specified country.
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
     * const merchantapi = google.merchantapi('accounts_v1');
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
     *   const res =
     *     await merchantapi.accounts.omnichannelSettings.lfpProviders.linkLfpProvider(
     *       {
     *         // Required. The name of the LFP provider resource to link. Format: `accounts/{account\}/omnichannelSettings/{omnichannel_setting\}/lfpProviders/{lfp_provider\}`. The `lfp_provider` is the LFP provider ID.
     *         name: 'accounts/my-account/omnichannelSettings/my-omnichannelSetting/lfpProviders/my-lfpProvider',
     *
     *         // Request body metadata
     *         requestBody: {
     *           // request body parameters
     *           // {
     *           //   "externalAccountId": "my_externalAccountId"
     *           // }
     *         },
     *       },
     *     );
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "response": {}
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
    linkLfpProvider(
      params: Params$Resource$Accounts$Omnichannelsettings$Lfpproviders$Linklfpprovider,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    linkLfpProvider(
      params?: Params$Resource$Accounts$Omnichannelsettings$Lfpproviders$Linklfpprovider,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$LinkLfpProviderResponse>>;
    linkLfpProvider(
      params: Params$Resource$Accounts$Omnichannelsettings$Lfpproviders$Linklfpprovider,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    linkLfpProvider(
      params: Params$Resource$Accounts$Omnichannelsettings$Lfpproviders$Linklfpprovider,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$LinkLfpProviderResponse>,
      callback: BodyResponseCallback<Schema$LinkLfpProviderResponse>
    ): void;
    linkLfpProvider(
      params: Params$Resource$Accounts$Omnichannelsettings$Lfpproviders$Linklfpprovider,
      callback: BodyResponseCallback<Schema$LinkLfpProviderResponse>
    ): void;
    linkLfpProvider(
      callback: BodyResponseCallback<Schema$LinkLfpProviderResponse>
    ): void;
    linkLfpProvider(
      paramsOrCallback?:
        | Params$Resource$Accounts$Omnichannelsettings$Lfpproviders$Linklfpprovider
        | BodyResponseCallback<Schema$LinkLfpProviderResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$LinkLfpProviderResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$LinkLfpProviderResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$LinkLfpProviderResponse>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Accounts$Omnichannelsettings$Lfpproviders$Linklfpprovider;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Accounts$Omnichannelsettings$Lfpproviders$Linklfpprovider;
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
            url: (rootUrl + '/accounts/v1/{+name}:linkLfpProvider').replace(
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
        createAPIRequest<Schema$LinkLfpProviderResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$LinkLfpProviderResponse>(parameters);
      }
    }
  }

  export interface Params$Resource$Accounts$Omnichannelsettings$Lfpproviders$Find
    extends StandardParameters {
    /**
     * Optional. The maximum number of `LfpProvider` resources to return. The service returns fewer than this value if the number of lfp providers is less that than the `pageSize`. The default value is 50. The maximum value is 1000; If a value higher than the maximum is specified, then the `pageSize` will default to the maximum.
     */
    pageSize?: number;
    /**
     * Optional. A page token, received from a previous `FindLfpProviders` call. Provide the page token to retrieve the subsequent page. When paginating, all other parameters provided to `FindLfpProviders` must match the call that provided the page token.
     */
    pageToken?: string;
    /**
     * Required. The name of the parent resource under which the LFP providers are found. Format: `accounts/{account\}/omnichannelSettings/{omnichannel_setting\}`.
     */
    parent?: string;
  }
  export interface Params$Resource$Accounts$Omnichannelsettings$Lfpproviders$Linklfpprovider
    extends StandardParameters {
    /**
     * Required. The name of the LFP provider resource to link. Format: `accounts/{account\}/omnichannelSettings/{omnichannel_setting\}/lfpProviders/{lfp_provider\}`. The `lfp_provider` is the LFP provider ID.
     */
    name?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$LinkLfpProviderRequest;
  }

  export class Resource$Accounts$Onlinereturnpolicies {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Creates a new return policy for a given business.
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
     * const merchantapi = google.merchantapi('accounts_v1');
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
     *   const res = await merchantapi.accounts.onlineReturnPolicies.create({
     *     // Required. The Merchant Center account for which the return policy will be created. Format: `accounts/{account\}`
     *     parent: 'accounts/my-account',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "acceptDefectiveOnly": false,
     *       //   "acceptExchange": false,
     *       //   "countries": [],
     *       //   "itemConditions": [],
     *       //   "label": "my_label",
     *       //   "name": "my_name",
     *       //   "policy": {},
     *       //   "processRefundDays": 0,
     *       //   "restockingFee": {},
     *       //   "returnLabelSource": "my_returnLabelSource",
     *       //   "returnMethods": [],
     *       //   "returnPolicyId": "my_returnPolicyId",
     *       //   "returnPolicyUri": "my_returnPolicyUri",
     *       //   "returnShippingFee": {},
     *       //   "seasonalOverrides": []
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "acceptDefectiveOnly": false,
     *   //   "acceptExchange": false,
     *   //   "countries": [],
     *   //   "itemConditions": [],
     *   //   "label": "my_label",
     *   //   "name": "my_name",
     *   //   "policy": {},
     *   //   "processRefundDays": 0,
     *   //   "restockingFee": {},
     *   //   "returnLabelSource": "my_returnLabelSource",
     *   //   "returnMethods": [],
     *   //   "returnPolicyId": "my_returnPolicyId",
     *   //   "returnPolicyUri": "my_returnPolicyUri",
     *   //   "returnShippingFee": {},
     *   //   "seasonalOverrides": []
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
      params: Params$Resource$Accounts$Onlinereturnpolicies$Create,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    create(
      params?: Params$Resource$Accounts$Onlinereturnpolicies$Create,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$OnlineReturnPolicy>>;
    create(
      params: Params$Resource$Accounts$Onlinereturnpolicies$Create,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    create(
      params: Params$Resource$Accounts$Onlinereturnpolicies$Create,
      options: MethodOptions | BodyResponseCallback<Schema$OnlineReturnPolicy>,
      callback: BodyResponseCallback<Schema$OnlineReturnPolicy>
    ): void;
    create(
      params: Params$Resource$Accounts$Onlinereturnpolicies$Create,
      callback: BodyResponseCallback<Schema$OnlineReturnPolicy>
    ): void;
    create(callback: BodyResponseCallback<Schema$OnlineReturnPolicy>): void;
    create(
      paramsOrCallback?:
        | Params$Resource$Accounts$Onlinereturnpolicies$Create
        | BodyResponseCallback<Schema$OnlineReturnPolicy>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$OnlineReturnPolicy>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$OnlineReturnPolicy>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$OnlineReturnPolicy>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Accounts$Onlinereturnpolicies$Create;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Accounts$Onlinereturnpolicies$Create;
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
            url: (
              rootUrl + '/accounts/v1/{+parent}/onlineReturnPolicies'
            ).replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$OnlineReturnPolicy>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$OnlineReturnPolicy>(parameters);
      }
    }

    /**
     * Deletes an existing return policy.
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
     * const merchantapi = google.merchantapi('accounts_v1');
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
     *   const res = await merchantapi.accounts.onlineReturnPolicies.delete({
     *     // Required. The name of the return policy to delete. Format: `accounts/{account\}/onlineReturnPolicies/{return_policy\}`
     *     name: 'accounts/my-account/onlineReturnPolicies/my-onlineReturnPolicie',
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
      params: Params$Resource$Accounts$Onlinereturnpolicies$Delete,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    delete(
      params?: Params$Resource$Accounts$Onlinereturnpolicies$Delete,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Empty>>;
    delete(
      params: Params$Resource$Accounts$Onlinereturnpolicies$Delete,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    delete(
      params: Params$Resource$Accounts$Onlinereturnpolicies$Delete,
      options: MethodOptions | BodyResponseCallback<Schema$Empty>,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    delete(
      params: Params$Resource$Accounts$Onlinereturnpolicies$Delete,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    delete(callback: BodyResponseCallback<Schema$Empty>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Accounts$Onlinereturnpolicies$Delete
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
        {}) as Params$Resource$Accounts$Onlinereturnpolicies$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Accounts$Onlinereturnpolicies$Delete;
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
            url: (rootUrl + '/accounts/v1/{+name}').replace(
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
     * Gets an existing return policy for a given business.
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
     * const merchantapi = google.merchantapi('accounts_v1');
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
     *   const res = await merchantapi.accounts.onlineReturnPolicies.get({
     *     // Required. The name of the return policy to retrieve. Format: `accounts/{account\}/onlineReturnPolicies/{return_policy\}`
     *     name: 'accounts/my-account/onlineReturnPolicies/my-onlineReturnPolicie',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "acceptDefectiveOnly": false,
     *   //   "acceptExchange": false,
     *   //   "countries": [],
     *   //   "itemConditions": [],
     *   //   "label": "my_label",
     *   //   "name": "my_name",
     *   //   "policy": {},
     *   //   "processRefundDays": 0,
     *   //   "restockingFee": {},
     *   //   "returnLabelSource": "my_returnLabelSource",
     *   //   "returnMethods": [],
     *   //   "returnPolicyId": "my_returnPolicyId",
     *   //   "returnPolicyUri": "my_returnPolicyUri",
     *   //   "returnShippingFee": {},
     *   //   "seasonalOverrides": []
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
      params: Params$Resource$Accounts$Onlinereturnpolicies$Get,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    get(
      params?: Params$Resource$Accounts$Onlinereturnpolicies$Get,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$OnlineReturnPolicy>>;
    get(
      params: Params$Resource$Accounts$Onlinereturnpolicies$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Accounts$Onlinereturnpolicies$Get,
      options: MethodOptions | BodyResponseCallback<Schema$OnlineReturnPolicy>,
      callback: BodyResponseCallback<Schema$OnlineReturnPolicy>
    ): void;
    get(
      params: Params$Resource$Accounts$Onlinereturnpolicies$Get,
      callback: BodyResponseCallback<Schema$OnlineReturnPolicy>
    ): void;
    get(callback: BodyResponseCallback<Schema$OnlineReturnPolicy>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Accounts$Onlinereturnpolicies$Get
        | BodyResponseCallback<Schema$OnlineReturnPolicy>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$OnlineReturnPolicy>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$OnlineReturnPolicy>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$OnlineReturnPolicy>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Accounts$Onlinereturnpolicies$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Accounts$Onlinereturnpolicies$Get;
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
            url: (rootUrl + '/accounts/v1/{+name}').replace(
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
        createAPIRequest<Schema$OnlineReturnPolicy>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$OnlineReturnPolicy>(parameters);
      }
    }

    /**
     * Lists all existing return policies for a given business.
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
     * const merchantapi = google.merchantapi('accounts_v1');
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
     *   const res = await merchantapi.accounts.onlineReturnPolicies.list({
     *     // Optional. The maximum number of `OnlineReturnPolicy` resources to return. The service returns fewer than this value if the number of return policies for the given business is less that than the `pageSize`. The default value is 10. The maximum value is 100; If a value higher than the maximum is specified, then the `pageSize` will default to the maximum
     *     pageSize: 'placeholder-value',
     *     // Optional. A page token, received from a previous `ListOnlineReturnPolicies` call. Provide the page token to retrieve the subsequent page. When paginating, all other parameters provided to `ListOnlineReturnPolicies` must match the call that provided the page token. The token returned as nextPageToken in the response to the previous request.
     *     pageToken: 'placeholder-value',
     *     // Required. The Merchant Center account for which to list return policies. Format: `accounts/{account\}`
     *     parent: 'accounts/my-account',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "nextPageToken": "my_nextPageToken",
     *   //   "onlineReturnPolicies": []
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
      params: Params$Resource$Accounts$Onlinereturnpolicies$List,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    list(
      params?: Params$Resource$Accounts$Onlinereturnpolicies$List,
      options?: MethodOptions
    ): Promise<
      GaxiosResponseWithHTTP2<Schema$ListOnlineReturnPoliciesResponse>
    >;
    list(
      params: Params$Resource$Accounts$Onlinereturnpolicies$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Accounts$Onlinereturnpolicies$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ListOnlineReturnPoliciesResponse>,
      callback: BodyResponseCallback<Schema$ListOnlineReturnPoliciesResponse>
    ): void;
    list(
      params: Params$Resource$Accounts$Onlinereturnpolicies$List,
      callback: BodyResponseCallback<Schema$ListOnlineReturnPoliciesResponse>
    ): void;
    list(
      callback: BodyResponseCallback<Schema$ListOnlineReturnPoliciesResponse>
    ): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Accounts$Onlinereturnpolicies$List
        | BodyResponseCallback<Schema$ListOnlineReturnPoliciesResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ListOnlineReturnPoliciesResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ListOnlineReturnPoliciesResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<
          GaxiosResponseWithHTTP2<Schema$ListOnlineReturnPoliciesResponse>
        >
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Accounts$Onlinereturnpolicies$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Accounts$Onlinereturnpolicies$List;
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
            url: (
              rootUrl + '/accounts/v1/{+parent}/onlineReturnPolicies'
            ).replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$ListOnlineReturnPoliciesResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ListOnlineReturnPoliciesResponse>(
          parameters
        );
      }
    }
  }

  export interface Params$Resource$Accounts$Onlinereturnpolicies$Create
    extends StandardParameters {
    /**
     * Required. The Merchant Center account for which the return policy will be created. Format: `accounts/{account\}`
     */
    parent?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$OnlineReturnPolicy;
  }
  export interface Params$Resource$Accounts$Onlinereturnpolicies$Delete
    extends StandardParameters {
    /**
     * Required. The name of the return policy to delete. Format: `accounts/{account\}/onlineReturnPolicies/{return_policy\}`
     */
    name?: string;
  }
  export interface Params$Resource$Accounts$Onlinereturnpolicies$Get
    extends StandardParameters {
    /**
     * Required. The name of the return policy to retrieve. Format: `accounts/{account\}/onlineReturnPolicies/{return_policy\}`
     */
    name?: string;
  }
  export interface Params$Resource$Accounts$Onlinereturnpolicies$List
    extends StandardParameters {
    /**
     * Optional. The maximum number of `OnlineReturnPolicy` resources to return. The service returns fewer than this value if the number of return policies for the given business is less that than the `pageSize`. The default value is 10. The maximum value is 100; If a value higher than the maximum is specified, then the `pageSize` will default to the maximum
     */
    pageSize?: number;
    /**
     * Optional. A page token, received from a previous `ListOnlineReturnPolicies` call. Provide the page token to retrieve the subsequent page. When paginating, all other parameters provided to `ListOnlineReturnPolicies` must match the call that provided the page token. The token returned as nextPageToken in the response to the previous request.
     */
    pageToken?: string;
    /**
     * Required. The Merchant Center account for which to list return policies. Format: `accounts/{account\}`
     */
    parent?: string;
  }

  export class Resource$Accounts$Programs {
    context: APIRequestContext;
    checkoutSettings: Resource$Accounts$Programs$Checkoutsettings;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.checkoutSettings = new Resource$Accounts$Programs$Checkoutsettings(
        this.context
      );
    }

    /**
     * Disable participation in the specified program for the account.
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
     * const merchantapi = google.merchantapi('accounts_v1');
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
     *   const res = await merchantapi.accounts.programs.disable({
     *     // Required. The name of the program for which to disable participation for the given account. Format: `accounts/{account\}/programs/{program\}`. For example, `accounts/123456/programs/free-listings`.
     *     name: 'accounts/my-account/programs/my-program',
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
     *   //   "activeRegionCodes": [],
     *   //   "documentationUri": "my_documentationUri",
     *   //   "name": "my_name",
     *   //   "state": "my_state",
     *   //   "unmetRequirements": []
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
    disable(
      params: Params$Resource$Accounts$Programs$Disable,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    disable(
      params?: Params$Resource$Accounts$Programs$Disable,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Program>>;
    disable(
      params: Params$Resource$Accounts$Programs$Disable,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    disable(
      params: Params$Resource$Accounts$Programs$Disable,
      options: MethodOptions | BodyResponseCallback<Schema$Program>,
      callback: BodyResponseCallback<Schema$Program>
    ): void;
    disable(
      params: Params$Resource$Accounts$Programs$Disable,
      callback: BodyResponseCallback<Schema$Program>
    ): void;
    disable(callback: BodyResponseCallback<Schema$Program>): void;
    disable(
      paramsOrCallback?:
        | Params$Resource$Accounts$Programs$Disable
        | BodyResponseCallback<Schema$Program>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Program>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Program>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$Program>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Accounts$Programs$Disable;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Accounts$Programs$Disable;
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
            url: (rootUrl + '/accounts/v1/{+name}:disable').replace(
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
        createAPIRequest<Schema$Program>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Program>(parameters);
      }
    }

    /**
     * Enable participation in the specified program for the account.
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
     * const merchantapi = google.merchantapi('accounts_v1');
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
     *   const res = await merchantapi.accounts.programs.enable({
     *     // Required. The name of the program for which to enable participation for the given account. Format: `accounts/{account\}/programs/{program\}`. For example, `accounts/123456/programs/free-listings`.
     *     name: 'accounts/my-account/programs/my-program',
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
     *   //   "activeRegionCodes": [],
     *   //   "documentationUri": "my_documentationUri",
     *   //   "name": "my_name",
     *   //   "state": "my_state",
     *   //   "unmetRequirements": []
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
    enable(
      params: Params$Resource$Accounts$Programs$Enable,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    enable(
      params?: Params$Resource$Accounts$Programs$Enable,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Program>>;
    enable(
      params: Params$Resource$Accounts$Programs$Enable,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    enable(
      params: Params$Resource$Accounts$Programs$Enable,
      options: MethodOptions | BodyResponseCallback<Schema$Program>,
      callback: BodyResponseCallback<Schema$Program>
    ): void;
    enable(
      params: Params$Resource$Accounts$Programs$Enable,
      callback: BodyResponseCallback<Schema$Program>
    ): void;
    enable(callback: BodyResponseCallback<Schema$Program>): void;
    enable(
      paramsOrCallback?:
        | Params$Resource$Accounts$Programs$Enable
        | BodyResponseCallback<Schema$Program>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Program>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Program>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$Program>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Accounts$Programs$Enable;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Accounts$Programs$Enable;
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
            url: (rootUrl + '/accounts/v1/{+name}:enable').replace(
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
        createAPIRequest<Schema$Program>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Program>(parameters);
      }
    }

    /**
     * Retrieves the specified program for the account.
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
     * const merchantapi = google.merchantapi('accounts_v1');
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
     *   const res = await merchantapi.accounts.programs.get({
     *     // Required. The name of the program to retrieve. Format: `accounts/{account\}/programs/{program\}`. For example, `accounts/123456/programs/free-listings`.
     *     name: 'accounts/my-account/programs/my-program',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "activeRegionCodes": [],
     *   //   "documentationUri": "my_documentationUri",
     *   //   "name": "my_name",
     *   //   "state": "my_state",
     *   //   "unmetRequirements": []
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
      params: Params$Resource$Accounts$Programs$Get,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    get(
      params?: Params$Resource$Accounts$Programs$Get,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Program>>;
    get(
      params: Params$Resource$Accounts$Programs$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Accounts$Programs$Get,
      options: MethodOptions | BodyResponseCallback<Schema$Program>,
      callback: BodyResponseCallback<Schema$Program>
    ): void;
    get(
      params: Params$Resource$Accounts$Programs$Get,
      callback: BodyResponseCallback<Schema$Program>
    ): void;
    get(callback: BodyResponseCallback<Schema$Program>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Accounts$Programs$Get
        | BodyResponseCallback<Schema$Program>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Program>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Program>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$Program>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Accounts$Programs$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Accounts$Programs$Get;
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
            url: (rootUrl + '/accounts/v1/{+name}').replace(
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
        createAPIRequest<Schema$Program>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Program>(parameters);
      }
    }

    /**
     * Retrieves all programs for the account.
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
     * const merchantapi = google.merchantapi('accounts_v1');
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
     *   const res = await merchantapi.accounts.programs.list({
     *     // Optional. The maximum number of programs to return in a single response. If unspecified (or 0), a default size of 1000 is used. The maximum value is 1000; values above 1000 will be coerced to 1000.
     *     pageSize: 'placeholder-value',
     *     // Optional. A continuation token, received from a previous `ListPrograms` call. Provide this to retrieve the next page.
     *     pageToken: 'placeholder-value',
     *     // Required. The name of the account for which to retrieve all programs. Format: `accounts/{account\}`
     *     parent: 'accounts/my-account',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "nextPageToken": "my_nextPageToken",
     *   //   "programs": []
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
      params: Params$Resource$Accounts$Programs$List,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    list(
      params?: Params$Resource$Accounts$Programs$List,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$ListProgramsResponse>>;
    list(
      params: Params$Resource$Accounts$Programs$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Accounts$Programs$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ListProgramsResponse>,
      callback: BodyResponseCallback<Schema$ListProgramsResponse>
    ): void;
    list(
      params: Params$Resource$Accounts$Programs$List,
      callback: BodyResponseCallback<Schema$ListProgramsResponse>
    ): void;
    list(callback: BodyResponseCallback<Schema$ListProgramsResponse>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Accounts$Programs$List
        | BodyResponseCallback<Schema$ListProgramsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ListProgramsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ListProgramsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$ListProgramsResponse>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Accounts$Programs$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Accounts$Programs$List;
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
            url: (rootUrl + '/accounts/v1/{+parent}/programs').replace(
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
        createAPIRequest<Schema$ListProgramsResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ListProgramsResponse>(parameters);
      }
    }
  }

  export interface Params$Resource$Accounts$Programs$Disable
    extends StandardParameters {
    /**
     * Required. The name of the program for which to disable participation for the given account. Format: `accounts/{account\}/programs/{program\}`. For example, `accounts/123456/programs/free-listings`.
     */
    name?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$DisableProgramRequest;
  }
  export interface Params$Resource$Accounts$Programs$Enable
    extends StandardParameters {
    /**
     * Required. The name of the program for which to enable participation for the given account. Format: `accounts/{account\}/programs/{program\}`. For example, `accounts/123456/programs/free-listings`.
     */
    name?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$EnableProgramRequest;
  }
  export interface Params$Resource$Accounts$Programs$Get
    extends StandardParameters {
    /**
     * Required. The name of the program to retrieve. Format: `accounts/{account\}/programs/{program\}`. For example, `accounts/123456/programs/free-listings`.
     */
    name?: string;
  }
  export interface Params$Resource$Accounts$Programs$List
    extends StandardParameters {
    /**
     * Optional. The maximum number of programs to return in a single response. If unspecified (or 0), a default size of 1000 is used. The maximum value is 1000; values above 1000 will be coerced to 1000.
     */
    pageSize?: number;
    /**
     * Optional. A continuation token, received from a previous `ListPrograms` call. Provide this to retrieve the next page.
     */
    pageToken?: string;
    /**
     * Required. The name of the account for which to retrieve all programs. Format: `accounts/{account\}`
     */
    parent?: string;
  }

  export class Resource$Accounts$Programs$Checkoutsettings {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Creates `CheckoutSettings` for the given merchant.
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
     * const merchantapi = google.merchantapi('accounts_v1');
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
     *   const res = await merchantapi.accounts.programs.checkoutSettings.create({
     *     // Required. The merchant account for which the `CheckoutSettings` will be created.
     *     parent: 'accounts/my-account/programs/my-program',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "effectiveEnrollmentState": "my_effectiveEnrollmentState",
     *       //   "effectiveReviewState": "my_effectiveReviewState",
     *       //   "effectiveUriSettings": {},
     *       //   "eligibleDestinations": [],
     *       //   "enrollmentState": "my_enrollmentState",
     *       //   "name": "my_name",
     *       //   "reviewState": "my_reviewState",
     *       //   "uriSettings": {}
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "effectiveEnrollmentState": "my_effectiveEnrollmentState",
     *   //   "effectiveReviewState": "my_effectiveReviewState",
     *   //   "effectiveUriSettings": {},
     *   //   "eligibleDestinations": [],
     *   //   "enrollmentState": "my_enrollmentState",
     *   //   "name": "my_name",
     *   //   "reviewState": "my_reviewState",
     *   //   "uriSettings": {}
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
      params: Params$Resource$Accounts$Programs$Checkoutsettings$Create,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    create(
      params?: Params$Resource$Accounts$Programs$Checkoutsettings$Create,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$CheckoutSettings>>;
    create(
      params: Params$Resource$Accounts$Programs$Checkoutsettings$Create,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    create(
      params: Params$Resource$Accounts$Programs$Checkoutsettings$Create,
      options: MethodOptions | BodyResponseCallback<Schema$CheckoutSettings>,
      callback: BodyResponseCallback<Schema$CheckoutSettings>
    ): void;
    create(
      params: Params$Resource$Accounts$Programs$Checkoutsettings$Create,
      callback: BodyResponseCallback<Schema$CheckoutSettings>
    ): void;
    create(callback: BodyResponseCallback<Schema$CheckoutSettings>): void;
    create(
      paramsOrCallback?:
        | Params$Resource$Accounts$Programs$Checkoutsettings$Create
        | BodyResponseCallback<Schema$CheckoutSettings>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$CheckoutSettings>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$CheckoutSettings>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$CheckoutSettings>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Accounts$Programs$Checkoutsettings$Create;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Accounts$Programs$Checkoutsettings$Create;
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
            url: (rootUrl + '/accounts/v1/{+parent}/checkoutSettings').replace(
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
        createAPIRequest<Schema$CheckoutSettings>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$CheckoutSettings>(parameters);
      }
    }

    /**
     * Deletes `CheckoutSettings` and unenrolls merchant from `Checkout` program.
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
     * const merchantapi = google.merchantapi('accounts_v1');
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
     *   const res =
     *     await merchantapi.accounts.programs.checkoutSettings.deleteCheckoutSettings(
     *       {
     *         // Required. The name/identifier of the merchant account. Format: `accounts/{account\}/programs/{program\}/checkoutSettings`
     *         name: 'accounts/my-account/programs/my-program/checkoutSettings',
     *       },
     *     );
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
    deleteCheckoutSettings(
      params: Params$Resource$Accounts$Programs$Checkoutsettings$Deletecheckoutsettings,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    deleteCheckoutSettings(
      params?: Params$Resource$Accounts$Programs$Checkoutsettings$Deletecheckoutsettings,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Empty>>;
    deleteCheckoutSettings(
      params: Params$Resource$Accounts$Programs$Checkoutsettings$Deletecheckoutsettings,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    deleteCheckoutSettings(
      params: Params$Resource$Accounts$Programs$Checkoutsettings$Deletecheckoutsettings,
      options: MethodOptions | BodyResponseCallback<Schema$Empty>,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    deleteCheckoutSettings(
      params: Params$Resource$Accounts$Programs$Checkoutsettings$Deletecheckoutsettings,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    deleteCheckoutSettings(callback: BodyResponseCallback<Schema$Empty>): void;
    deleteCheckoutSettings(
      paramsOrCallback?:
        | Params$Resource$Accounts$Programs$Checkoutsettings$Deletecheckoutsettings
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
        {}) as Params$Resource$Accounts$Programs$Checkoutsettings$Deletecheckoutsettings;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Accounts$Programs$Checkoutsettings$Deletecheckoutsettings;
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
            url: (rootUrl + '/accounts/v1/{+name}').replace(
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
     * Gets `CheckoutSettings` for the given merchant. This includes information about review state, enrollment state and URL settings.
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
     * const merchantapi = google.merchantapi('accounts_v1');
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
     *   const res =
     *     await merchantapi.accounts.programs.checkoutSettings.getCheckoutSettings({
     *       // Required. The name/identifier of the merchant account. Format: `accounts/{account\}/programs/{program\}/checkoutSettings`
     *       name: 'accounts/my-account/programs/my-program/checkoutSettings',
     *     });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "effectiveEnrollmentState": "my_effectiveEnrollmentState",
     *   //   "effectiveReviewState": "my_effectiveReviewState",
     *   //   "effectiveUriSettings": {},
     *   //   "eligibleDestinations": [],
     *   //   "enrollmentState": "my_enrollmentState",
     *   //   "name": "my_name",
     *   //   "reviewState": "my_reviewState",
     *   //   "uriSettings": {}
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
    getCheckoutSettings(
      params: Params$Resource$Accounts$Programs$Checkoutsettings$Getcheckoutsettings,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    getCheckoutSettings(
      params?: Params$Resource$Accounts$Programs$Checkoutsettings$Getcheckoutsettings,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$CheckoutSettings>>;
    getCheckoutSettings(
      params: Params$Resource$Accounts$Programs$Checkoutsettings$Getcheckoutsettings,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    getCheckoutSettings(
      params: Params$Resource$Accounts$Programs$Checkoutsettings$Getcheckoutsettings,
      options: MethodOptions | BodyResponseCallback<Schema$CheckoutSettings>,
      callback: BodyResponseCallback<Schema$CheckoutSettings>
    ): void;
    getCheckoutSettings(
      params: Params$Resource$Accounts$Programs$Checkoutsettings$Getcheckoutsettings,
      callback: BodyResponseCallback<Schema$CheckoutSettings>
    ): void;
    getCheckoutSettings(
      callback: BodyResponseCallback<Schema$CheckoutSettings>
    ): void;
    getCheckoutSettings(
      paramsOrCallback?:
        | Params$Resource$Accounts$Programs$Checkoutsettings$Getcheckoutsettings
        | BodyResponseCallback<Schema$CheckoutSettings>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$CheckoutSettings>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$CheckoutSettings>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$CheckoutSettings>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Accounts$Programs$Checkoutsettings$Getcheckoutsettings;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Accounts$Programs$Checkoutsettings$Getcheckoutsettings;
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
            url: (rootUrl + '/accounts/v1/{+name}').replace(
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
        createAPIRequest<Schema$CheckoutSettings>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$CheckoutSettings>(parameters);
      }
    }

    /**
     * Updates `CheckoutSettings` for the given merchant.
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
     * const merchantapi = google.merchantapi('accounts_v1');
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
     *   const res =
     *     await merchantapi.accounts.programs.checkoutSettings.updateCheckoutSettings(
     *       {
     *         // Identifier. The resource name of the program configuration settings. Format: `accounts/{account\}/programs/{program\}/checkoutSettings`
     *         name: 'accounts/my-account/programs/my-program/checkoutSettings',
     *         // Required. List of fields being updated. The following fields are supported (in both `snake_case` and `lowerCamelCase`): - `eligible_destinations` - `uri_settings`
     *         updateMask: 'placeholder-value',
     *
     *         // Request body metadata
     *         requestBody: {
     *           // request body parameters
     *           // {
     *           //   "effectiveEnrollmentState": "my_effectiveEnrollmentState",
     *           //   "effectiveReviewState": "my_effectiveReviewState",
     *           //   "effectiveUriSettings": {},
     *           //   "eligibleDestinations": [],
     *           //   "enrollmentState": "my_enrollmentState",
     *           //   "name": "my_name",
     *           //   "reviewState": "my_reviewState",
     *           //   "uriSettings": {}
     *           // }
     *         },
     *       },
     *     );
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "effectiveEnrollmentState": "my_effectiveEnrollmentState",
     *   //   "effectiveReviewState": "my_effectiveReviewState",
     *   //   "effectiveUriSettings": {},
     *   //   "eligibleDestinations": [],
     *   //   "enrollmentState": "my_enrollmentState",
     *   //   "name": "my_name",
     *   //   "reviewState": "my_reviewState",
     *   //   "uriSettings": {}
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
    updateCheckoutSettings(
      params: Params$Resource$Accounts$Programs$Checkoutsettings$Updatecheckoutsettings,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    updateCheckoutSettings(
      params?: Params$Resource$Accounts$Programs$Checkoutsettings$Updatecheckoutsettings,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$CheckoutSettings>>;
    updateCheckoutSettings(
      params: Params$Resource$Accounts$Programs$Checkoutsettings$Updatecheckoutsettings,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    updateCheckoutSettings(
      params: Params$Resource$Accounts$Programs$Checkoutsettings$Updatecheckoutsettings,
      options: MethodOptions | BodyResponseCallback<Schema$CheckoutSettings>,
      callback: BodyResponseCallback<Schema$CheckoutSettings>
    ): void;
    updateCheckoutSettings(
      params: Params$Resource$Accounts$Programs$Checkoutsettings$Updatecheckoutsettings,
      callback: BodyResponseCallback<Schema$CheckoutSettings>
    ): void;
    updateCheckoutSettings(
      callback: BodyResponseCallback<Schema$CheckoutSettings>
    ): void;
    updateCheckoutSettings(
      paramsOrCallback?:
        | Params$Resource$Accounts$Programs$Checkoutsettings$Updatecheckoutsettings
        | BodyResponseCallback<Schema$CheckoutSettings>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$CheckoutSettings>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$CheckoutSettings>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$CheckoutSettings>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Accounts$Programs$Checkoutsettings$Updatecheckoutsettings;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Accounts$Programs$Checkoutsettings$Updatecheckoutsettings;
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
            url: (rootUrl + '/accounts/v1/{+name}').replace(
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
        createAPIRequest<Schema$CheckoutSettings>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$CheckoutSettings>(parameters);
      }
    }
  }

  export interface Params$Resource$Accounts$Programs$Checkoutsettings$Create
    extends StandardParameters {
    /**
     * Required. The merchant account for which the `CheckoutSettings` will be created.
     */
    parent?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$CheckoutSettings;
  }
  export interface Params$Resource$Accounts$Programs$Checkoutsettings$Deletecheckoutsettings
    extends StandardParameters {
    /**
     * Required. The name/identifier of the merchant account. Format: `accounts/{account\}/programs/{program\}/checkoutSettings`
     */
    name?: string;
  }
  export interface Params$Resource$Accounts$Programs$Checkoutsettings$Getcheckoutsettings
    extends StandardParameters {
    /**
     * Required. The name/identifier of the merchant account. Format: `accounts/{account\}/programs/{program\}/checkoutSettings`
     */
    name?: string;
  }
  export interface Params$Resource$Accounts$Programs$Checkoutsettings$Updatecheckoutsettings
    extends StandardParameters {
    /**
     * Identifier. The resource name of the program configuration settings. Format: `accounts/{account\}/programs/{program\}/checkoutSettings`
     */
    name?: string;
    /**
     * Required. List of fields being updated. The following fields are supported (in both `snake_case` and `lowerCamelCase`): - `eligible_destinations` - `uri_settings`
     */
    updateMask?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$CheckoutSettings;
  }

  export class Resource$Accounts$Regions {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Creates one or more regions in your Merchant Center account. Executing this method requires admin access.
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
     * const merchantapi = google.merchantapi('accounts_v1');
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
     *   const res = await merchantapi.accounts.regions.batchCreate({
     *     // Required. The account to create one or more regions for. Format: `accounts/{account\}`
     *     parent: 'accounts/my-account',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "requests": []
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "regions": []
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
    batchCreate(
      params: Params$Resource$Accounts$Regions$Batchcreate,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    batchCreate(
      params?: Params$Resource$Accounts$Regions$Batchcreate,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$BatchCreateRegionsResponse>>;
    batchCreate(
      params: Params$Resource$Accounts$Regions$Batchcreate,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    batchCreate(
      params: Params$Resource$Accounts$Regions$Batchcreate,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$BatchCreateRegionsResponse>,
      callback: BodyResponseCallback<Schema$BatchCreateRegionsResponse>
    ): void;
    batchCreate(
      params: Params$Resource$Accounts$Regions$Batchcreate,
      callback: BodyResponseCallback<Schema$BatchCreateRegionsResponse>
    ): void;
    batchCreate(
      callback: BodyResponseCallback<Schema$BatchCreateRegionsResponse>
    ): void;
    batchCreate(
      paramsOrCallback?:
        | Params$Resource$Accounts$Regions$Batchcreate
        | BodyResponseCallback<Schema$BatchCreateRegionsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$BatchCreateRegionsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$BatchCreateRegionsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$BatchCreateRegionsResponse>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Accounts$Regions$Batchcreate;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Accounts$Regions$Batchcreate;
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
            url: (
              rootUrl + '/accounts/v1/{+parent}/regions:batchCreate'
            ).replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$BatchCreateRegionsResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$BatchCreateRegionsResponse>(parameters);
      }
    }

    /**
     * Deletes multiple regions by name from your Merchant Center account. Executing this method requires admin access.
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
     * const merchantapi = google.merchantapi('accounts_v1');
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
     *   const res = await merchantapi.accounts.regions.batchDelete({
     *     // Required. The account to create a region for. Format: `accounts/{account\}`
     *     parent: 'accounts/my-account',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "requests": []
     *       // }
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
    batchDelete(
      params: Params$Resource$Accounts$Regions$Batchdelete,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    batchDelete(
      params?: Params$Resource$Accounts$Regions$Batchdelete,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Empty>>;
    batchDelete(
      params: Params$Resource$Accounts$Regions$Batchdelete,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    batchDelete(
      params: Params$Resource$Accounts$Regions$Batchdelete,
      options: MethodOptions | BodyResponseCallback<Schema$Empty>,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    batchDelete(
      params: Params$Resource$Accounts$Regions$Batchdelete,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    batchDelete(callback: BodyResponseCallback<Schema$Empty>): void;
    batchDelete(
      paramsOrCallback?:
        | Params$Resource$Accounts$Regions$Batchdelete
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
        {}) as Params$Resource$Accounts$Regions$Batchdelete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Accounts$Regions$Batchdelete;
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
            url: (
              rootUrl + '/accounts/v1/{+parent}/regions:batchDelete'
            ).replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$Empty>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Empty>(parameters);
      }
    }

    /**
     * Updates one or more regions in your Merchant Center account. Executing this method requires admin access.
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
     * const merchantapi = google.merchantapi('accounts_v1');
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
     *   const res = await merchantapi.accounts.regions.batchUpdate({
     *     // Required. The account to update one or more regions for. Format: `accounts/{account\}`
     *     parent: 'accounts/my-account',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "requests": []
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "regions": []
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
    batchUpdate(
      params: Params$Resource$Accounts$Regions$Batchupdate,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    batchUpdate(
      params?: Params$Resource$Accounts$Regions$Batchupdate,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$BatchUpdateRegionsResponse>>;
    batchUpdate(
      params: Params$Resource$Accounts$Regions$Batchupdate,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    batchUpdate(
      params: Params$Resource$Accounts$Regions$Batchupdate,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$BatchUpdateRegionsResponse>,
      callback: BodyResponseCallback<Schema$BatchUpdateRegionsResponse>
    ): void;
    batchUpdate(
      params: Params$Resource$Accounts$Regions$Batchupdate,
      callback: BodyResponseCallback<Schema$BatchUpdateRegionsResponse>
    ): void;
    batchUpdate(
      callback: BodyResponseCallback<Schema$BatchUpdateRegionsResponse>
    ): void;
    batchUpdate(
      paramsOrCallback?:
        | Params$Resource$Accounts$Regions$Batchupdate
        | BodyResponseCallback<Schema$BatchUpdateRegionsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$BatchUpdateRegionsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$BatchUpdateRegionsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$BatchUpdateRegionsResponse>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Accounts$Regions$Batchupdate;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Accounts$Regions$Batchupdate;
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
            url: (
              rootUrl + '/accounts/v1/{+parent}/regions:batchUpdate'
            ).replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$BatchUpdateRegionsResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$BatchUpdateRegionsResponse>(parameters);
      }
    }

    /**
     * Creates a region definition in your Merchant Center account. Executing this method requires admin access.
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
     * const merchantapi = google.merchantapi('accounts_v1');
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
     *   const res = await merchantapi.accounts.regions.create({
     *     // Required. The account to create a region for. Format: `accounts/{account\}`
     *     parent: 'accounts/my-account',
     *     // Required. The identifier for the region, unique over all regions of the same account.
     *     regionId: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "displayName": "my_displayName",
     *       //   "geotargetArea": {},
     *       //   "name": "my_name",
     *       //   "postalCodeArea": {},
     *       //   "regionalInventoryEligible": false,
     *       //   "shippingEligible": false
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "displayName": "my_displayName",
     *   //   "geotargetArea": {},
     *   //   "name": "my_name",
     *   //   "postalCodeArea": {},
     *   //   "regionalInventoryEligible": false,
     *   //   "shippingEligible": false
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
      params: Params$Resource$Accounts$Regions$Create,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    create(
      params?: Params$Resource$Accounts$Regions$Create,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Region>>;
    create(
      params: Params$Resource$Accounts$Regions$Create,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    create(
      params: Params$Resource$Accounts$Regions$Create,
      options: MethodOptions | BodyResponseCallback<Schema$Region>,
      callback: BodyResponseCallback<Schema$Region>
    ): void;
    create(
      params: Params$Resource$Accounts$Regions$Create,
      callback: BodyResponseCallback<Schema$Region>
    ): void;
    create(callback: BodyResponseCallback<Schema$Region>): void;
    create(
      paramsOrCallback?:
        | Params$Resource$Accounts$Regions$Create
        | BodyResponseCallback<Schema$Region>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Region>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Region>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$Region>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Accounts$Regions$Create;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Accounts$Regions$Create;
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
            url: (rootUrl + '/accounts/v1/{+parent}/regions').replace(
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
        createAPIRequest<Schema$Region>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Region>(parameters);
      }
    }

    /**
     * Deletes a region definition from your Merchant Center account. Executing this method requires admin access.
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
     * const merchantapi = google.merchantapi('accounts_v1');
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
     *   const res = await merchantapi.accounts.regions.delete({
     *     // Required. The name of the region to delete. Format: `accounts/{account\}/regions/{region\}`
     *     name: 'accounts/my-account/regions/my-region',
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
      params: Params$Resource$Accounts$Regions$Delete,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    delete(
      params?: Params$Resource$Accounts$Regions$Delete,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Empty>>;
    delete(
      params: Params$Resource$Accounts$Regions$Delete,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    delete(
      params: Params$Resource$Accounts$Regions$Delete,
      options: MethodOptions | BodyResponseCallback<Schema$Empty>,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    delete(
      params: Params$Resource$Accounts$Regions$Delete,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    delete(callback: BodyResponseCallback<Schema$Empty>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Accounts$Regions$Delete
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
        {}) as Params$Resource$Accounts$Regions$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Accounts$Regions$Delete;
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
            url: (rootUrl + '/accounts/v1/{+name}').replace(
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
     * Retrieves a region defined in your Merchant Center account.
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
     * const merchantapi = google.merchantapi('accounts_v1');
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
     *   const res = await merchantapi.accounts.regions.get({
     *     // Required. The name of the region to retrieve. Format: `accounts/{account\}/regions/{region\}`
     *     name: 'accounts/my-account/regions/my-region',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "displayName": "my_displayName",
     *   //   "geotargetArea": {},
     *   //   "name": "my_name",
     *   //   "postalCodeArea": {},
     *   //   "regionalInventoryEligible": false,
     *   //   "shippingEligible": false
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
      params: Params$Resource$Accounts$Regions$Get,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    get(
      params?: Params$Resource$Accounts$Regions$Get,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Region>>;
    get(
      params: Params$Resource$Accounts$Regions$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Accounts$Regions$Get,
      options: MethodOptions | BodyResponseCallback<Schema$Region>,
      callback: BodyResponseCallback<Schema$Region>
    ): void;
    get(
      params: Params$Resource$Accounts$Regions$Get,
      callback: BodyResponseCallback<Schema$Region>
    ): void;
    get(callback: BodyResponseCallback<Schema$Region>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Accounts$Regions$Get
        | BodyResponseCallback<Schema$Region>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Region>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Region>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$Region>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Accounts$Regions$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Accounts$Regions$Get;
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
            url: (rootUrl + '/accounts/v1/{+name}').replace(
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
        createAPIRequest<Schema$Region>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Region>(parameters);
      }
    }

    /**
     * Lists the regions in your Merchant Center account.
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
     * const merchantapi = google.merchantapi('accounts_v1');
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
     *   const res = await merchantapi.accounts.regions.list({
     *     // Optional. The maximum number of regions to return. The service may return fewer than this value. If unspecified, at most 50 regions will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000.
     *     pageSize: 'placeholder-value',
     *     // Optional. A page token, received from a previous `ListRegions` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListRegions` must match the call that provided the page token.
     *     pageToken: 'placeholder-value',
     *     // Required. The account to list regions for. Format: `accounts/{account\}`
     *     parent: 'accounts/my-account',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "nextPageToken": "my_nextPageToken",
     *   //   "regions": []
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
      params: Params$Resource$Accounts$Regions$List,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    list(
      params?: Params$Resource$Accounts$Regions$List,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$ListRegionsResponse>>;
    list(
      params: Params$Resource$Accounts$Regions$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Accounts$Regions$List,
      options: MethodOptions | BodyResponseCallback<Schema$ListRegionsResponse>,
      callback: BodyResponseCallback<Schema$ListRegionsResponse>
    ): void;
    list(
      params: Params$Resource$Accounts$Regions$List,
      callback: BodyResponseCallback<Schema$ListRegionsResponse>
    ): void;
    list(callback: BodyResponseCallback<Schema$ListRegionsResponse>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Accounts$Regions$List
        | BodyResponseCallback<Schema$ListRegionsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ListRegionsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ListRegionsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$ListRegionsResponse>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Accounts$Regions$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Accounts$Regions$List;
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
            url: (rootUrl + '/accounts/v1/{+parent}/regions').replace(
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
        createAPIRequest<Schema$ListRegionsResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ListRegionsResponse>(parameters);
      }
    }

    /**
     * Updates a region definition in your Merchant Center account. Executing this method requires admin access.
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
     * const merchantapi = google.merchantapi('accounts_v1');
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
     *   const res = await merchantapi.accounts.regions.patch({
     *     // Identifier. The resource name of the region. Format: `accounts/{account\}/regions/{region\}`
     *     name: 'accounts/my-account/regions/my-region',
     *     // Optional. The comma-separated field mask indicating the fields to update. Example: `"displayName,postalCodeArea.regionCode"`.
     *     updateMask: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "displayName": "my_displayName",
     *       //   "geotargetArea": {},
     *       //   "name": "my_name",
     *       //   "postalCodeArea": {},
     *       //   "regionalInventoryEligible": false,
     *       //   "shippingEligible": false
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "displayName": "my_displayName",
     *   //   "geotargetArea": {},
     *   //   "name": "my_name",
     *   //   "postalCodeArea": {},
     *   //   "regionalInventoryEligible": false,
     *   //   "shippingEligible": false
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
      params: Params$Resource$Accounts$Regions$Patch,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    patch(
      params?: Params$Resource$Accounts$Regions$Patch,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Region>>;
    patch(
      params: Params$Resource$Accounts$Regions$Patch,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    patch(
      params: Params$Resource$Accounts$Regions$Patch,
      options: MethodOptions | BodyResponseCallback<Schema$Region>,
      callback: BodyResponseCallback<Schema$Region>
    ): void;
    patch(
      params: Params$Resource$Accounts$Regions$Patch,
      callback: BodyResponseCallback<Schema$Region>
    ): void;
    patch(callback: BodyResponseCallback<Schema$Region>): void;
    patch(
      paramsOrCallback?:
        | Params$Resource$Accounts$Regions$Patch
        | BodyResponseCallback<Schema$Region>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Region>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Region>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$Region>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Accounts$Regions$Patch;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Accounts$Regions$Patch;
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
            url: (rootUrl + '/accounts/v1/{+name}').replace(
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
        createAPIRequest<Schema$Region>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Region>(parameters);
      }
    }
  }

  export interface Params$Resource$Accounts$Regions$Batchcreate
    extends StandardParameters {
    /**
     * Required. The account to create one or more regions for. Format: `accounts/{account\}`
     */
    parent?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$BatchCreateRegionsRequest;
  }
  export interface Params$Resource$Accounts$Regions$Batchdelete
    extends StandardParameters {
    /**
     * Required. The account to create a region for. Format: `accounts/{account\}`
     */
    parent?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$BatchDeleteRegionsRequest;
  }
  export interface Params$Resource$Accounts$Regions$Batchupdate
    extends StandardParameters {
    /**
     * Required. The account to update one or more regions for. Format: `accounts/{account\}`
     */
    parent?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$BatchUpdateRegionsRequest;
  }
  export interface Params$Resource$Accounts$Regions$Create
    extends StandardParameters {
    /**
     * Required. The account to create a region for. Format: `accounts/{account\}`
     */
    parent?: string;
    /**
     * Required. The identifier for the region, unique over all regions of the same account.
     */
    regionId?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$Region;
  }
  export interface Params$Resource$Accounts$Regions$Delete
    extends StandardParameters {
    /**
     * Required. The name of the region to delete. Format: `accounts/{account\}/regions/{region\}`
     */
    name?: string;
  }
  export interface Params$Resource$Accounts$Regions$Get
    extends StandardParameters {
    /**
     * Required. The name of the region to retrieve. Format: `accounts/{account\}/regions/{region\}`
     */
    name?: string;
  }
  export interface Params$Resource$Accounts$Regions$List
    extends StandardParameters {
    /**
     * Optional. The maximum number of regions to return. The service may return fewer than this value. If unspecified, at most 50 regions will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000.
     */
    pageSize?: number;
    /**
     * Optional. A page token, received from a previous `ListRegions` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListRegions` must match the call that provided the page token.
     */
    pageToken?: string;
    /**
     * Required. The account to list regions for. Format: `accounts/{account\}`
     */
    parent?: string;
  }
  export interface Params$Resource$Accounts$Regions$Patch
    extends StandardParameters {
    /**
     * Identifier. The resource name of the region. Format: `accounts/{account\}/regions/{region\}`
     */
    name?: string;
    /**
     * Optional. The comma-separated field mask indicating the fields to update. Example: `"displayName,postalCodeArea.regionCode"`.
     */
    updateMask?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$Region;
  }

  export class Resource$Accounts$Relationships {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Retrieve an account relationship.
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
     * const merchantapi = google.merchantapi('accounts_v1');
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
     *   const res = await merchantapi.accounts.relationships.get({
     *     // Required. The resource name of the account relationship to get. Format: `accounts/{account\}/relationships/{relationship\}`. For example, `accounts/123456/relationships/567890`.
     *     name: 'accounts/my-account/relationships/my-relationship',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "accountIdAlias": "my_accountIdAlias",
     *   //   "name": "my_name",
     *   //   "provider": "my_provider",
     *   //   "providerDisplayName": "my_providerDisplayName"
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
      params: Params$Resource$Accounts$Relationships$Get,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    get(
      params?: Params$Resource$Accounts$Relationships$Get,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$AccountRelationship>>;
    get(
      params: Params$Resource$Accounts$Relationships$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Accounts$Relationships$Get,
      options: MethodOptions | BodyResponseCallback<Schema$AccountRelationship>,
      callback: BodyResponseCallback<Schema$AccountRelationship>
    ): void;
    get(
      params: Params$Resource$Accounts$Relationships$Get,
      callback: BodyResponseCallback<Schema$AccountRelationship>
    ): void;
    get(callback: BodyResponseCallback<Schema$AccountRelationship>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Accounts$Relationships$Get
        | BodyResponseCallback<Schema$AccountRelationship>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$AccountRelationship>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$AccountRelationship>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$AccountRelationship>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Accounts$Relationships$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Accounts$Relationships$Get;
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
            url: (rootUrl + '/accounts/v1/{+name}').replace(
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
        createAPIRequest<Schema$AccountRelationship>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$AccountRelationship>(parameters);
      }
    }

    /**
     * List account relationships for the specified account.
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
     * const merchantapi = google.merchantapi('accounts_v1');
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
     *   const res = await merchantapi.accounts.relationships.list({
     *     // Optional. The maximum number of elements to return in the response. Use for paging. If no `page_size` is specified, `100` is used as the default value. The maximum allowed value is `1000`.
     *     pageSize: 'placeholder-value',
     *     // Optional. The token returned by the previous `list` request.
     *     pageToken: 'placeholder-value',
     *     // Required. The parent account of the account relationship to filter by. Format: `accounts/{account\}`
     *     parent: 'accounts/my-account',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "accountRelationships": [],
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
      params: Params$Resource$Accounts$Relationships$List,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    list(
      params?: Params$Resource$Accounts$Relationships$List,
      options?: MethodOptions
    ): Promise<
      GaxiosResponseWithHTTP2<Schema$ListAccountRelationshipsResponse>
    >;
    list(
      params: Params$Resource$Accounts$Relationships$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Accounts$Relationships$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ListAccountRelationshipsResponse>,
      callback: BodyResponseCallback<Schema$ListAccountRelationshipsResponse>
    ): void;
    list(
      params: Params$Resource$Accounts$Relationships$List,
      callback: BodyResponseCallback<Schema$ListAccountRelationshipsResponse>
    ): void;
    list(
      callback: BodyResponseCallback<Schema$ListAccountRelationshipsResponse>
    ): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Accounts$Relationships$List
        | BodyResponseCallback<Schema$ListAccountRelationshipsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ListAccountRelationshipsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ListAccountRelationshipsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<
          GaxiosResponseWithHTTP2<Schema$ListAccountRelationshipsResponse>
        >
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Accounts$Relationships$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Accounts$Relationships$List;
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
            url: (rootUrl + '/accounts/v1/{+parent}/relationships').replace(
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
        createAPIRequest<Schema$ListAccountRelationshipsResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ListAccountRelationshipsResponse>(
          parameters
        );
      }
    }

    /**
     * Updates the account relationship. Executing this method requires admin access.
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
     * const merchantapi = google.merchantapi('accounts_v1');
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
     *   const res = await merchantapi.accounts.relationships.patch({
     *     // Identifier. The resource name of the account relationship. Format: `accounts/{account\}/relationships/{relationship\}`. For example, `accounts/123456/relationships/567890`.
     *     name: 'accounts/my-account/relationships/my-relationship',
     *     // Optional. List of fields being updated. The following fields are supported (in both `snake_case` and `lowerCamelCase`): - `account_id_alias`
     *     updateMask: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "accountIdAlias": "my_accountIdAlias",
     *       //   "name": "my_name",
     *       //   "provider": "my_provider",
     *       //   "providerDisplayName": "my_providerDisplayName"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "accountIdAlias": "my_accountIdAlias",
     *   //   "name": "my_name",
     *   //   "provider": "my_provider",
     *   //   "providerDisplayName": "my_providerDisplayName"
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
      params: Params$Resource$Accounts$Relationships$Patch,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    patch(
      params?: Params$Resource$Accounts$Relationships$Patch,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$AccountRelationship>>;
    patch(
      params: Params$Resource$Accounts$Relationships$Patch,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    patch(
      params: Params$Resource$Accounts$Relationships$Patch,
      options: MethodOptions | BodyResponseCallback<Schema$AccountRelationship>,
      callback: BodyResponseCallback<Schema$AccountRelationship>
    ): void;
    patch(
      params: Params$Resource$Accounts$Relationships$Patch,
      callback: BodyResponseCallback<Schema$AccountRelationship>
    ): void;
    patch(callback: BodyResponseCallback<Schema$AccountRelationship>): void;
    patch(
      paramsOrCallback?:
        | Params$Resource$Accounts$Relationships$Patch
        | BodyResponseCallback<Schema$AccountRelationship>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$AccountRelationship>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$AccountRelationship>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$AccountRelationship>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Accounts$Relationships$Patch;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Accounts$Relationships$Patch;
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
            url: (rootUrl + '/accounts/v1/{+name}').replace(
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
        createAPIRequest<Schema$AccountRelationship>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$AccountRelationship>(parameters);
      }
    }
  }

  export interface Params$Resource$Accounts$Relationships$Get
    extends StandardParameters {
    /**
     * Required. The resource name of the account relationship to get. Format: `accounts/{account\}/relationships/{relationship\}`. For example, `accounts/123456/relationships/567890`.
     */
    name?: string;
  }
  export interface Params$Resource$Accounts$Relationships$List
    extends StandardParameters {
    /**
     * Optional. The maximum number of elements to return in the response. Use for paging. If no `page_size` is specified, `100` is used as the default value. The maximum allowed value is `1000`.
     */
    pageSize?: number;
    /**
     * Optional. The token returned by the previous `list` request.
     */
    pageToken?: string;
    /**
     * Required. The parent account of the account relationship to filter by. Format: `accounts/{account\}`
     */
    parent?: string;
  }
  export interface Params$Resource$Accounts$Relationships$Patch
    extends StandardParameters {
    /**
     * Identifier. The resource name of the account relationship. Format: `accounts/{account\}/relationships/{relationship\}`. For example, `accounts/123456/relationships/567890`.
     */
    name?: string;
    /**
     * Optional. List of fields being updated. The following fields are supported (in both `snake_case` and `lowerCamelCase`): - `account_id_alias`
     */
    updateMask?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$AccountRelationship;
  }

  export class Resource$Accounts$Services {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Approve an account service proposal.
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
     * const merchantapi = google.merchantapi('accounts_v1');
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
     *   const res = await merchantapi.accounts.services.approve({
     *     // Required. The resource name of the account service to approve. Format: `accounts/{account\}/services/{service\}`
     *     name: 'accounts/my-account/services/my-service',
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
     *   //   "accountAggregation": {},
     *   //   "accountManagement": {},
     *   //   "campaignsManagement": {},
     *   //   "externalAccountId": "my_externalAccountId",
     *   //   "handshake": {},
     *   //   "localListingManagement": {},
     *   //   "mutability": "my_mutability",
     *   //   "name": "my_name",
     *   //   "productsManagement": {},
     *   //   "provider": "my_provider",
     *   //   "providerDisplayName": "my_providerDisplayName"
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
    approve(
      params: Params$Resource$Accounts$Services$Approve,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    approve(
      params?: Params$Resource$Accounts$Services$Approve,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$AccountService>>;
    approve(
      params: Params$Resource$Accounts$Services$Approve,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    approve(
      params: Params$Resource$Accounts$Services$Approve,
      options: MethodOptions | BodyResponseCallback<Schema$AccountService>,
      callback: BodyResponseCallback<Schema$AccountService>
    ): void;
    approve(
      params: Params$Resource$Accounts$Services$Approve,
      callback: BodyResponseCallback<Schema$AccountService>
    ): void;
    approve(callback: BodyResponseCallback<Schema$AccountService>): void;
    approve(
      paramsOrCallback?:
        | Params$Resource$Accounts$Services$Approve
        | BodyResponseCallback<Schema$AccountService>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$AccountService>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$AccountService>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$AccountService>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Accounts$Services$Approve;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Accounts$Services$Approve;
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
            url: (rootUrl + '/accounts/v1/{+name}:approve').replace(
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
        createAPIRequest<Schema$AccountService>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$AccountService>(parameters);
      }
    }

    /**
     * Retrieve an account service.
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
     * const merchantapi = google.merchantapi('accounts_v1');
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
     *   const res = await merchantapi.accounts.services.get({
     *     // Required. The resource name of the account service to get. Format: `accounts/{account\}/services/{service\}`
     *     name: 'accounts/my-account/services/my-service',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "accountAggregation": {},
     *   //   "accountManagement": {},
     *   //   "campaignsManagement": {},
     *   //   "externalAccountId": "my_externalAccountId",
     *   //   "handshake": {},
     *   //   "localListingManagement": {},
     *   //   "mutability": "my_mutability",
     *   //   "name": "my_name",
     *   //   "productsManagement": {},
     *   //   "provider": "my_provider",
     *   //   "providerDisplayName": "my_providerDisplayName"
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
      params: Params$Resource$Accounts$Services$Get,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    get(
      params?: Params$Resource$Accounts$Services$Get,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$AccountService>>;
    get(
      params: Params$Resource$Accounts$Services$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Accounts$Services$Get,
      options: MethodOptions | BodyResponseCallback<Schema$AccountService>,
      callback: BodyResponseCallback<Schema$AccountService>
    ): void;
    get(
      params: Params$Resource$Accounts$Services$Get,
      callback: BodyResponseCallback<Schema$AccountService>
    ): void;
    get(callback: BodyResponseCallback<Schema$AccountService>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Accounts$Services$Get
        | BodyResponseCallback<Schema$AccountService>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$AccountService>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$AccountService>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$AccountService>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Accounts$Services$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Accounts$Services$Get;
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
            url: (rootUrl + '/accounts/v1/{+name}').replace(
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
        createAPIRequest<Schema$AccountService>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$AccountService>(parameters);
      }
    }

    /**
     * List account services for the specified accounts. Supports filtering.
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
     * const merchantapi = google.merchantapi('accounts_v1');
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
     *   const res = await merchantapi.accounts.services.list({
     *     // Optional. The maximum number of elements to return in the response. Use for paging. If no `page_size` is specified, `100` is used as the default value. The maximum allowed value is `1000`.
     *     pageSize: 'placeholder-value',
     *     // Optional. The token returned by the previous `list` request.
     *     pageToken: 'placeholder-value',
     *     // Required. The parent account of the account service to filter by. Format: `accounts/{account\}`
     *     parent: 'accounts/my-account',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "accountServices": [],
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
      params: Params$Resource$Accounts$Services$List,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    list(
      params?: Params$Resource$Accounts$Services$List,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$ListAccountServicesResponse>>;
    list(
      params: Params$Resource$Accounts$Services$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Accounts$Services$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ListAccountServicesResponse>,
      callback: BodyResponseCallback<Schema$ListAccountServicesResponse>
    ): void;
    list(
      params: Params$Resource$Accounts$Services$List,
      callback: BodyResponseCallback<Schema$ListAccountServicesResponse>
    ): void;
    list(
      callback: BodyResponseCallback<Schema$ListAccountServicesResponse>
    ): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Accounts$Services$List
        | BodyResponseCallback<Schema$ListAccountServicesResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ListAccountServicesResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ListAccountServicesResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$ListAccountServicesResponse>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Accounts$Services$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Accounts$Services$List;
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
            url: (rootUrl + '/accounts/v1/{+parent}/services').replace(
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
        createAPIRequest<Schema$ListAccountServicesResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ListAccountServicesResponse>(parameters);
      }
    }

    /**
     * Propose an account service.
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
     * const merchantapi = google.merchantapi('accounts_v1');
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
     *   const res = await merchantapi.accounts.services.propose({
     *     // Required. The resource name of the parent account for the service. Format: `accounts/{account\}`
     *     parent: 'accounts/my-account',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "accountService": {},
     *       //   "provider": "my_provider"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "accountAggregation": {},
     *   //   "accountManagement": {},
     *   //   "campaignsManagement": {},
     *   //   "externalAccountId": "my_externalAccountId",
     *   //   "handshake": {},
     *   //   "localListingManagement": {},
     *   //   "mutability": "my_mutability",
     *   //   "name": "my_name",
     *   //   "productsManagement": {},
     *   //   "provider": "my_provider",
     *   //   "providerDisplayName": "my_providerDisplayName"
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
    propose(
      params: Params$Resource$Accounts$Services$Propose,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    propose(
      params?: Params$Resource$Accounts$Services$Propose,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$AccountService>>;
    propose(
      params: Params$Resource$Accounts$Services$Propose,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    propose(
      params: Params$Resource$Accounts$Services$Propose,
      options: MethodOptions | BodyResponseCallback<Schema$AccountService>,
      callback: BodyResponseCallback<Schema$AccountService>
    ): void;
    propose(
      params: Params$Resource$Accounts$Services$Propose,
      callback: BodyResponseCallback<Schema$AccountService>
    ): void;
    propose(callback: BodyResponseCallback<Schema$AccountService>): void;
    propose(
      paramsOrCallback?:
        | Params$Resource$Accounts$Services$Propose
        | BodyResponseCallback<Schema$AccountService>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$AccountService>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$AccountService>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$AccountService>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Accounts$Services$Propose;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Accounts$Services$Propose;
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
            url: (rootUrl + '/accounts/v1/{+parent}/services:propose').replace(
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
        createAPIRequest<Schema$AccountService>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$AccountService>(parameters);
      }
    }

    /**
     * Reject an account service (both proposed and approve services can be rejected).
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
     * const merchantapi = google.merchantapi('accounts_v1');
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
     *   const res = await merchantapi.accounts.services.reject({
     *     // Required. The resource name of the account service to reject. Format: `accounts/{account\}/services/{service\}`
     *     name: 'accounts/my-account/services/my-service',
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
    reject(
      params: Params$Resource$Accounts$Services$Reject,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    reject(
      params?: Params$Resource$Accounts$Services$Reject,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Empty>>;
    reject(
      params: Params$Resource$Accounts$Services$Reject,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    reject(
      params: Params$Resource$Accounts$Services$Reject,
      options: MethodOptions | BodyResponseCallback<Schema$Empty>,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    reject(
      params: Params$Resource$Accounts$Services$Reject,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    reject(callback: BodyResponseCallback<Schema$Empty>): void;
    reject(
      paramsOrCallback?:
        | Params$Resource$Accounts$Services$Reject
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
        {}) as Params$Resource$Accounts$Services$Reject;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Accounts$Services$Reject;
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
            url: (rootUrl + '/accounts/v1/{+name}:reject').replace(
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
  }

  export interface Params$Resource$Accounts$Services$Approve
    extends StandardParameters {
    /**
     * Required. The resource name of the account service to approve. Format: `accounts/{account\}/services/{service\}`
     */
    name?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$ApproveAccountServiceRequest;
  }
  export interface Params$Resource$Accounts$Services$Get
    extends StandardParameters {
    /**
     * Required. The resource name of the account service to get. Format: `accounts/{account\}/services/{service\}`
     */
    name?: string;
  }
  export interface Params$Resource$Accounts$Services$List
    extends StandardParameters {
    /**
     * Optional. The maximum number of elements to return in the response. Use for paging. If no `page_size` is specified, `100` is used as the default value. The maximum allowed value is `1000`.
     */
    pageSize?: number;
    /**
     * Optional. The token returned by the previous `list` request.
     */
    pageToken?: string;
    /**
     * Required. The parent account of the account service to filter by. Format: `accounts/{account\}`
     */
    parent?: string;
  }
  export interface Params$Resource$Accounts$Services$Propose
    extends StandardParameters {
    /**
     * Required. The resource name of the parent account for the service. Format: `accounts/{account\}`
     */
    parent?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$ProposeAccountServiceRequest;
  }
  export interface Params$Resource$Accounts$Services$Reject
    extends StandardParameters {
    /**
     * Required. The resource name of the account service to reject. Format: `accounts/{account\}/services/{service\}`
     */
    name?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$RejectAccountServiceRequest;
  }

  export class Resource$Accounts$Shippingsettings {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Retrieve shipping setting information.
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
     * const merchantapi = google.merchantapi('accounts_v1');
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
     *   const res = await merchantapi.accounts.shippingSettings.getShippingSettings({
     *     // Required. The name of the shipping setting to retrieve. Format: `accounts/{account\}/shippingsettings`
     *     name: 'accounts/my-account/shippingSettings',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "etag": "my_etag",
     *   //   "name": "my_name",
     *   //   "services": [],
     *   //   "warehouses": []
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
    getShippingSettings(
      params: Params$Resource$Accounts$Shippingsettings$Getshippingsettings,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    getShippingSettings(
      params?: Params$Resource$Accounts$Shippingsettings$Getshippingsettings,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$ShippingSettings>>;
    getShippingSettings(
      params: Params$Resource$Accounts$Shippingsettings$Getshippingsettings,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    getShippingSettings(
      params: Params$Resource$Accounts$Shippingsettings$Getshippingsettings,
      options: MethodOptions | BodyResponseCallback<Schema$ShippingSettings>,
      callback: BodyResponseCallback<Schema$ShippingSettings>
    ): void;
    getShippingSettings(
      params: Params$Resource$Accounts$Shippingsettings$Getshippingsettings,
      callback: BodyResponseCallback<Schema$ShippingSettings>
    ): void;
    getShippingSettings(
      callback: BodyResponseCallback<Schema$ShippingSettings>
    ): void;
    getShippingSettings(
      paramsOrCallback?:
        | Params$Resource$Accounts$Shippingsettings$Getshippingsettings
        | BodyResponseCallback<Schema$ShippingSettings>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ShippingSettings>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ShippingSettings>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$ShippingSettings>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Accounts$Shippingsettings$Getshippingsettings;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Accounts$Shippingsettings$Getshippingsettings;
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
            url: (rootUrl + '/accounts/v1/{+name}').replace(
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
        createAPIRequest<Schema$ShippingSettings>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ShippingSettings>(parameters);
      }
    }

    /**
     * Replace the shipping setting of a business with the request shipping setting. Executing this method requires admin access.
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
     * const merchantapi = google.merchantapi('accounts_v1');
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
     *   const res = await merchantapi.accounts.shippingSettings.insert({
     *     // Required. The account for which this shipping setting will be inserted. If you are using an advanced account, you must specify the unique identifier of the sub-account for which you want to insert the shipping setting. Format: `accounts/{ACCOUNT_ID\}`
     *     parent: 'accounts/my-account',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "etag": "my_etag",
     *       //   "name": "my_name",
     *       //   "services": [],
     *       //   "warehouses": []
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "etag": "my_etag",
     *   //   "name": "my_name",
     *   //   "services": [],
     *   //   "warehouses": []
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
      params: Params$Resource$Accounts$Shippingsettings$Insert,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    insert(
      params?: Params$Resource$Accounts$Shippingsettings$Insert,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$ShippingSettings>>;
    insert(
      params: Params$Resource$Accounts$Shippingsettings$Insert,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    insert(
      params: Params$Resource$Accounts$Shippingsettings$Insert,
      options: MethodOptions | BodyResponseCallback<Schema$ShippingSettings>,
      callback: BodyResponseCallback<Schema$ShippingSettings>
    ): void;
    insert(
      params: Params$Resource$Accounts$Shippingsettings$Insert,
      callback: BodyResponseCallback<Schema$ShippingSettings>
    ): void;
    insert(callback: BodyResponseCallback<Schema$ShippingSettings>): void;
    insert(
      paramsOrCallback?:
        | Params$Resource$Accounts$Shippingsettings$Insert
        | BodyResponseCallback<Schema$ShippingSettings>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ShippingSettings>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ShippingSettings>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$ShippingSettings>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Accounts$Shippingsettings$Insert;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Accounts$Shippingsettings$Insert;
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
            url: (
              rootUrl + '/accounts/v1/{+parent}/shippingSettings:insert'
            ).replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$ShippingSettings>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ShippingSettings>(parameters);
      }
    }
  }

  export interface Params$Resource$Accounts$Shippingsettings$Getshippingsettings
    extends StandardParameters {
    /**
     * Required. The name of the shipping setting to retrieve. Format: `accounts/{account\}/shippingsettings`
     */
    name?: string;
  }
  export interface Params$Resource$Accounts$Shippingsettings$Insert
    extends StandardParameters {
    /**
     * Required. The account for which this shipping setting will be inserted. If you are using an advanced account, you must specify the unique identifier of the sub-account for which you want to insert the shipping setting. Format: `accounts/{ACCOUNT_ID\}`
     */
    parent?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$ShippingSettings;
  }

  export class Resource$Accounts$Termsofserviceagreementstates {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Returns the state of a terms of service agreement.
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
     * const merchantapi = google.merchantapi('accounts_v1');
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
     *   const res = await merchantapi.accounts.termsOfServiceAgreementStates.get({
     *     // Required. The resource name of the terms of service version. Format: `accounts/{account\}/termsOfServiceAgreementStates/{identifier\}` The identifier format is: `{TermsOfServiceKind\}-{country\}`
     *     name: 'accounts/my-account/termsOfServiceAgreementStates/my-termsOfServiceAgreementState',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "accepted": {},
     *   //   "name": "my_name",
     *   //   "regionCode": "my_regionCode",
     *   //   "required": {},
     *   //   "termsOfServiceKind": "my_termsOfServiceKind"
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
      params: Params$Resource$Accounts$Termsofserviceagreementstates$Get,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    get(
      params?: Params$Resource$Accounts$Termsofserviceagreementstates$Get,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$TermsOfServiceAgreementState>>;
    get(
      params: Params$Resource$Accounts$Termsofserviceagreementstates$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Accounts$Termsofserviceagreementstates$Get,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$TermsOfServiceAgreementState>,
      callback: BodyResponseCallback<Schema$TermsOfServiceAgreementState>
    ): void;
    get(
      params: Params$Resource$Accounts$Termsofserviceagreementstates$Get,
      callback: BodyResponseCallback<Schema$TermsOfServiceAgreementState>
    ): void;
    get(
      callback: BodyResponseCallback<Schema$TermsOfServiceAgreementState>
    ): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Accounts$Termsofserviceagreementstates$Get
        | BodyResponseCallback<Schema$TermsOfServiceAgreementState>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$TermsOfServiceAgreementState>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$TermsOfServiceAgreementState>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$TermsOfServiceAgreementState>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Accounts$Termsofserviceagreementstates$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Accounts$Termsofserviceagreementstates$Get;
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
            url: (rootUrl + '/accounts/v1/{+name}').replace(
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
        createAPIRequest<Schema$TermsOfServiceAgreementState>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$TermsOfServiceAgreementState>(
          parameters
        );
      }
    }

    /**
     * Retrieves the state of the agreement for the application terms of service. Application terms of service covers permissions related to the usage of data provided through Merchant Center, CSS Center, Manufacturer Center, and more.
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
     * const merchantapi = google.merchantapi('accounts_v1');
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
     *   const res =
     *     await merchantapi.accounts.termsOfServiceAgreementStates.retrieveForApplication(
     *       {
     *         // Required. The account for which to get a TermsOfServiceAgreementState Format: `accounts/{account\}`
     *         parent: 'accounts/my-account',
     *       },
     *     );
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "accepted": {},
     *   //   "name": "my_name",
     *   //   "regionCode": "my_regionCode",
     *   //   "required": {},
     *   //   "termsOfServiceKind": "my_termsOfServiceKind"
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
    retrieveForApplication(
      params: Params$Resource$Accounts$Termsofserviceagreementstates$Retrieveforapplication,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    retrieveForApplication(
      params?: Params$Resource$Accounts$Termsofserviceagreementstates$Retrieveforapplication,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$TermsOfServiceAgreementState>>;
    retrieveForApplication(
      params: Params$Resource$Accounts$Termsofserviceagreementstates$Retrieveforapplication,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    retrieveForApplication(
      params: Params$Resource$Accounts$Termsofserviceagreementstates$Retrieveforapplication,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$TermsOfServiceAgreementState>,
      callback: BodyResponseCallback<Schema$TermsOfServiceAgreementState>
    ): void;
    retrieveForApplication(
      params: Params$Resource$Accounts$Termsofserviceagreementstates$Retrieveforapplication,
      callback: BodyResponseCallback<Schema$TermsOfServiceAgreementState>
    ): void;
    retrieveForApplication(
      callback: BodyResponseCallback<Schema$TermsOfServiceAgreementState>
    ): void;
    retrieveForApplication(
      paramsOrCallback?:
        | Params$Resource$Accounts$Termsofserviceagreementstates$Retrieveforapplication
        | BodyResponseCallback<Schema$TermsOfServiceAgreementState>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$TermsOfServiceAgreementState>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$TermsOfServiceAgreementState>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$TermsOfServiceAgreementState>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Accounts$Termsofserviceagreementstates$Retrieveforapplication;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Accounts$Termsofserviceagreementstates$Retrieveforapplication;
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
            url: (
              rootUrl +
              '/accounts/v1/{+parent}/termsOfServiceAgreementStates:retrieveForApplication'
            ).replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$TermsOfServiceAgreementState>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$TermsOfServiceAgreementState>(
          parameters
        );
      }
    }
  }

  export interface Params$Resource$Accounts$Termsofserviceagreementstates$Get
    extends StandardParameters {
    /**
     * Required. The resource name of the terms of service version. Format: `accounts/{account\}/termsOfServiceAgreementStates/{identifier\}` The identifier format is: `{TermsOfServiceKind\}-{country\}`
     */
    name?: string;
  }
  export interface Params$Resource$Accounts$Termsofserviceagreementstates$Retrieveforapplication
    extends StandardParameters {
    /**
     * Required. The account for which to get a TermsOfServiceAgreementState Format: `accounts/{account\}`
     */
    parent?: string;
  }

  export class Resource$Accounts$Users {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Creates a Merchant Center account user. Executing this method requires admin access.
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
     * const merchantapi = google.merchantapi('accounts_v1');
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
     *   const res = await merchantapi.accounts.users.create({
     *     // Required. The resource name of the account for which a user will be created. Format: `accounts/{account\}`
     *     parent: 'accounts/my-account',
     *     // Required. The email address of the user (for example, `john.doe@gmail.com`).
     *     userId: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "accessRights": [],
     *       //   "name": "my_name",
     *       //   "state": "my_state"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "accessRights": [],
     *   //   "name": "my_name",
     *   //   "state": "my_state"
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
      params: Params$Resource$Accounts$Users$Create,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    create(
      params?: Params$Resource$Accounts$Users$Create,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$User>>;
    create(
      params: Params$Resource$Accounts$Users$Create,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    create(
      params: Params$Resource$Accounts$Users$Create,
      options: MethodOptions | BodyResponseCallback<Schema$User>,
      callback: BodyResponseCallback<Schema$User>
    ): void;
    create(
      params: Params$Resource$Accounts$Users$Create,
      callback: BodyResponseCallback<Schema$User>
    ): void;
    create(callback: BodyResponseCallback<Schema$User>): void;
    create(
      paramsOrCallback?:
        | Params$Resource$Accounts$Users$Create
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
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$User>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Accounts$Users$Create;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Accounts$Users$Create;
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
            url: (rootUrl + '/accounts/v1/{+parent}/users').replace(
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
        createAPIRequest<Schema$User>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$User>(parameters);
      }
    }

    /**
     * Deletes a Merchant Center account user. Executing this method requires admin access. The user to be deleted can't be the last admin user of that account. Also a user is protected from deletion if it is managed by Business Manager"
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
     * const merchantapi = google.merchantapi('accounts_v1');
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
     *   const res = await merchantapi.accounts.users.delete({
     *     // Required. The name of the user to delete. Format: `accounts/{account\}/users/{email\}` It is also possible to delete the user corresponding to the caller by using `me` rather than an email address as in `accounts/{account\}/users/me`.
     *     name: 'accounts/my-account/users/my-user',
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
      params: Params$Resource$Accounts$Users$Delete,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    delete(
      params?: Params$Resource$Accounts$Users$Delete,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Empty>>;
    delete(
      params: Params$Resource$Accounts$Users$Delete,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    delete(
      params: Params$Resource$Accounts$Users$Delete,
      options: MethodOptions | BodyResponseCallback<Schema$Empty>,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    delete(
      params: Params$Resource$Accounts$Users$Delete,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    delete(callback: BodyResponseCallback<Schema$Empty>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Accounts$Users$Delete
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
        {}) as Params$Resource$Accounts$Users$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Accounts$Users$Delete;
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
            url: (rootUrl + '/accounts/v1/{+name}').replace(
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
     * Retrieves a Merchant Center account user.
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
     * const merchantapi = google.merchantapi('accounts_v1');
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
     *   const res = await merchantapi.accounts.users.get({
     *     // Required. The name of the user to retrieve. Format: `accounts/{account\}/users/{email\}` It is also possible to retrieve the user corresponding to the caller by using `me` rather than an email address as in `accounts/{account\}/users/me`.
     *     name: 'accounts/my-account/users/my-user',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "accessRights": [],
     *   //   "name": "my_name",
     *   //   "state": "my_state"
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
      params: Params$Resource$Accounts$Users$Get,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    get(
      params?: Params$Resource$Accounts$Users$Get,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$User>>;
    get(
      params: Params$Resource$Accounts$Users$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Accounts$Users$Get,
      options: MethodOptions | BodyResponseCallback<Schema$User>,
      callback: BodyResponseCallback<Schema$User>
    ): void;
    get(
      params: Params$Resource$Accounts$Users$Get,
      callback: BodyResponseCallback<Schema$User>
    ): void;
    get(callback: BodyResponseCallback<Schema$User>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Accounts$Users$Get
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
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$User>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Accounts$Users$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Accounts$Users$Get;
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
            url: (rootUrl + '/accounts/v1/{+name}').replace(
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
        createAPIRequest<Schema$User>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$User>(parameters);
      }
    }

    /**
     * Lists all users of a Merchant Center account.
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
     * const merchantapi = google.merchantapi('accounts_v1');
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
     *   const res = await merchantapi.accounts.users.list({
     *     // Optional. The maximum number of users to return. The service may return fewer than this value. If unspecified, at most 50 users will be returned. The maximum value is 100; values above 100 will be coerced to 100
     *     pageSize: 'placeholder-value',
     *     // Optional. A page token, received from a previous `ListUsers` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListUsers` must match the call that provided the page token.
     *     pageToken: 'placeholder-value',
     *     // Required. The parent, which owns this collection of users. Format: `accounts/{account\}`
     *     parent: 'accounts/my-account',
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
      params: Params$Resource$Accounts$Users$List,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    list(
      params?: Params$Resource$Accounts$Users$List,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$ListUsersResponse>>;
    list(
      params: Params$Resource$Accounts$Users$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Accounts$Users$List,
      options: MethodOptions | BodyResponseCallback<Schema$ListUsersResponse>,
      callback: BodyResponseCallback<Schema$ListUsersResponse>
    ): void;
    list(
      params: Params$Resource$Accounts$Users$List,
      callback: BodyResponseCallback<Schema$ListUsersResponse>
    ): void;
    list(callback: BodyResponseCallback<Schema$ListUsersResponse>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Accounts$Users$List
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
      | Promise<GaxiosResponseWithHTTP2<Schema$ListUsersResponse>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Accounts$Users$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Accounts$Users$List;
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
            url: (rootUrl + '/accounts/v1/{+parent}/users').replace(
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
        createAPIRequest<Schema$ListUsersResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ListUsersResponse>(parameters);
      }
    }

    /**
     * Updates a Merchant Center account user. Executing this method requires admin access.
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
     * const merchantapi = google.merchantapi('accounts_v1');
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
     *   const res = await merchantapi.accounts.users.patch({
     *     // Identifier. The resource name of the user. Format: `accounts/{account\}/user/{email\}` Use `me` to refer to your own email address, for example `accounts/{account\}/users/me`.
     *     name: 'accounts/my-account/users/my-user',
     *     // Optional. List of fields being updated. The following fields are supported (in both `snake_case` and `lowerCamelCase`): - `access_rights`
     *     updateMask: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "accessRights": [],
     *       //   "name": "my_name",
     *       //   "state": "my_state"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "accessRights": [],
     *   //   "name": "my_name",
     *   //   "state": "my_state"
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
      params: Params$Resource$Accounts$Users$Patch,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    patch(
      params?: Params$Resource$Accounts$Users$Patch,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$User>>;
    patch(
      params: Params$Resource$Accounts$Users$Patch,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    patch(
      params: Params$Resource$Accounts$Users$Patch,
      options: MethodOptions | BodyResponseCallback<Schema$User>,
      callback: BodyResponseCallback<Schema$User>
    ): void;
    patch(
      params: Params$Resource$Accounts$Users$Patch,
      callback: BodyResponseCallback<Schema$User>
    ): void;
    patch(callback: BodyResponseCallback<Schema$User>): void;
    patch(
      paramsOrCallback?:
        | Params$Resource$Accounts$Users$Patch
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
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$User>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Accounts$Users$Patch;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Accounts$Users$Patch;
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
            url: (rootUrl + '/accounts/v1/{+name}').replace(
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
        createAPIRequest<Schema$User>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$User>(parameters);
      }
    }
  }

  export interface Params$Resource$Accounts$Users$Create
    extends StandardParameters {
    /**
     * Required. The resource name of the account for which a user will be created. Format: `accounts/{account\}`
     */
    parent?: string;
    /**
     * Required. The email address of the user (for example, `john.doe@gmail.com`).
     */
    userId?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$User;
  }
  export interface Params$Resource$Accounts$Users$Delete
    extends StandardParameters {
    /**
     * Required. The name of the user to delete. Format: `accounts/{account\}/users/{email\}` It is also possible to delete the user corresponding to the caller by using `me` rather than an email address as in `accounts/{account\}/users/me`.
     */
    name?: string;
  }
  export interface Params$Resource$Accounts$Users$Get
    extends StandardParameters {
    /**
     * Required. The name of the user to retrieve. Format: `accounts/{account\}/users/{email\}` It is also possible to retrieve the user corresponding to the caller by using `me` rather than an email address as in `accounts/{account\}/users/me`.
     */
    name?: string;
  }
  export interface Params$Resource$Accounts$Users$List
    extends StandardParameters {
    /**
     * Optional. The maximum number of users to return. The service may return fewer than this value. If unspecified, at most 50 users will be returned. The maximum value is 100; values above 100 will be coerced to 100
     */
    pageSize?: number;
    /**
     * Optional. A page token, received from a previous `ListUsers` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListUsers` must match the call that provided the page token.
     */
    pageToken?: string;
    /**
     * Required. The parent, which owns this collection of users. Format: `accounts/{account\}`
     */
    parent?: string;
  }
  export interface Params$Resource$Accounts$Users$Patch
    extends StandardParameters {
    /**
     * Identifier. The resource name of the user. Format: `accounts/{account\}/user/{email\}` Use `me` to refer to your own email address, for example `accounts/{account\}/users/me`.
     */
    name?: string;
    /**
     * Optional. List of fields being updated. The following fields are supported (in both `snake_case` and `lowerCamelCase`): - `access_rights`
     */
    updateMask?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$User;
  }

  export class Resource$Termsofservice {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Accepts a `TermsOfService`. Executing this method requires admin access.
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
     * const merchantapi = google.merchantapi('accounts_v1');
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
     *   const res = await merchantapi.termsOfService.accept({
     *     // Required. The account for which to accept the ToS. Format: `accounts/{account\}`
     *     account: 'placeholder-value',
     *     // Required. The resource name of the terms of service version. Format: `termsOfService/{version\}`
     *     name: 'termsOfService/[^/]+',
     *     // Required. Region code as defined by [CLDR](https://cldr.unicode.org/). This is either a country when the ToS applies specifically to that country or 001 when it applies globally.
     *     regionCode: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "termsOfServiceAgreementState": {}
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
    accept(
      params: Params$Resource$Termsofservice$Accept,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    accept(
      params?: Params$Resource$Termsofservice$Accept,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$AcceptTermsOfServiceResponse>>;
    accept(
      params: Params$Resource$Termsofservice$Accept,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    accept(
      params: Params$Resource$Termsofservice$Accept,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$AcceptTermsOfServiceResponse>,
      callback: BodyResponseCallback<Schema$AcceptTermsOfServiceResponse>
    ): void;
    accept(
      params: Params$Resource$Termsofservice$Accept,
      callback: BodyResponseCallback<Schema$AcceptTermsOfServiceResponse>
    ): void;
    accept(
      callback: BodyResponseCallback<Schema$AcceptTermsOfServiceResponse>
    ): void;
    accept(
      paramsOrCallback?:
        | Params$Resource$Termsofservice$Accept
        | BodyResponseCallback<Schema$AcceptTermsOfServiceResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$AcceptTermsOfServiceResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$AcceptTermsOfServiceResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$AcceptTermsOfServiceResponse>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Termsofservice$Accept;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Termsofservice$Accept;
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
            url: (rootUrl + '/accounts/v1/{+name}:accept').replace(
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
        createAPIRequest<Schema$AcceptTermsOfServiceResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$AcceptTermsOfServiceResponse>(
          parameters
        );
      }
    }

    /**
     * Retrieves the `TermsOfService` associated with the provided version.
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
     * const merchantapi = google.merchantapi('accounts_v1');
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
     *   const res = await merchantapi.termsOfService.get({
     *     // Required. The resource name of the terms of service version. Format: `termsOfService/{version\}`
     *     name: 'termsOfService/[^/]+',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "external": false,
     *   //   "fileUri": "my_fileUri",
     *   //   "kind": "my_kind",
     *   //   "name": "my_name",
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
      params: Params$Resource$Termsofservice$Get,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    get(
      params?: Params$Resource$Termsofservice$Get,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$TermsOfService>>;
    get(
      params: Params$Resource$Termsofservice$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Termsofservice$Get,
      options: MethodOptions | BodyResponseCallback<Schema$TermsOfService>,
      callback: BodyResponseCallback<Schema$TermsOfService>
    ): void;
    get(
      params: Params$Resource$Termsofservice$Get,
      callback: BodyResponseCallback<Schema$TermsOfService>
    ): void;
    get(callback: BodyResponseCallback<Schema$TermsOfService>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Termsofservice$Get
        | BodyResponseCallback<Schema$TermsOfService>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$TermsOfService>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$TermsOfService>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$TermsOfService>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Termsofservice$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Termsofservice$Get;
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
            url: (rootUrl + '/accounts/v1/{+name}').replace(
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
        createAPIRequest<Schema$TermsOfService>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$TermsOfService>(parameters);
      }
    }

    /**
     * Retrieves the latest version of the `TermsOfService` for a given `kind` and `region_code`.
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
     * const merchantapi = google.merchantapi('accounts_v1');
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
     *   const res = await merchantapi.termsOfService.retrieveLatest({
     *     // Required. The Kind this terms of service version applies to.
     *     kind: 'placeholder-value',
     *     // Required. Region code as defined by [CLDR](https://cldr.unicode.org/). This is either a country when the ToS applies specifically to that country or 001 when it applies globally.
     *     regionCode: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "external": false,
     *   //   "fileUri": "my_fileUri",
     *   //   "kind": "my_kind",
     *   //   "name": "my_name",
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
    retrieveLatest(
      params: Params$Resource$Termsofservice$Retrievelatest,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    retrieveLatest(
      params?: Params$Resource$Termsofservice$Retrievelatest,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$TermsOfService>>;
    retrieveLatest(
      params: Params$Resource$Termsofservice$Retrievelatest,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    retrieveLatest(
      params: Params$Resource$Termsofservice$Retrievelatest,
      options: MethodOptions | BodyResponseCallback<Schema$TermsOfService>,
      callback: BodyResponseCallback<Schema$TermsOfService>
    ): void;
    retrieveLatest(
      params: Params$Resource$Termsofservice$Retrievelatest,
      callback: BodyResponseCallback<Schema$TermsOfService>
    ): void;
    retrieveLatest(callback: BodyResponseCallback<Schema$TermsOfService>): void;
    retrieveLatest(
      paramsOrCallback?:
        | Params$Resource$Termsofservice$Retrievelatest
        | BodyResponseCallback<Schema$TermsOfService>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$TermsOfService>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$TermsOfService>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$TermsOfService>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Termsofservice$Retrievelatest;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Termsofservice$Retrievelatest;
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
            url: (
              rootUrl + '/accounts/v1/termsOfService:retrieveLatest'
            ).replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$TermsOfService>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$TermsOfService>(parameters);
      }
    }
  }

  export interface Params$Resource$Termsofservice$Accept
    extends StandardParameters {
    /**
     * Required. The account for which to accept the ToS. Format: `accounts/{account\}`
     */
    account?: string;
    /**
     * Required. The resource name of the terms of service version. Format: `termsOfService/{version\}`
     */
    name?: string;
    /**
     * Required. Region code as defined by [CLDR](https://cldr.unicode.org/). This is either a country when the ToS applies specifically to that country or 001 when it applies globally.
     */
    regionCode?: string;
  }
  export interface Params$Resource$Termsofservice$Get
    extends StandardParameters {
    /**
     * Required. The resource name of the terms of service version. Format: `termsOfService/{version\}`
     */
    name?: string;
  }
  export interface Params$Resource$Termsofservice$Retrievelatest
    extends StandardParameters {
    /**
     * Required. The Kind this terms of service version applies to.
     */
    kind?: string;
    /**
     * Required. Region code as defined by [CLDR](https://cldr.unicode.org/). This is either a country when the ToS applies specifically to that country or 001 when it applies globally.
     */
    regionCode?: string;
  }
}
