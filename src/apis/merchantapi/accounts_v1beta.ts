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

export namespace merchantapi_accounts_v1beta {
  export interface Options extends GlobalOptions {
    version: 'accounts_v1beta';
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
   * const merchantapi = google.merchantapi('accounts_v1beta');
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
   * Describes the accepted terms of service.
   */
  export interface Schema$Accepted {
    /**
     * The account where the acceptance was recorded. This can be the account itself or, in the case of subaccounts, the MCA account.
     */
    acceptedBy?: string | null;
    /**
     * The accepted [termsOfService](google.shopping.merchant.accounts.v1main.TermsOfService).
     */
    termsOfService?: string | null;
    /**
     * When set, it states that the accepted [TermsOfService](google.shopping.merchant.accounts.v1main.TermsOfService) is only valid until the end of this date (in UTC). A new one must be accepted before then. The information of the required [TermsOfService](google.shopping.merchant.accounts.v1main.TermsOfService) is found in the [Required](Required) message.
     */
    validUntil?: Schema$Date;
  }
  /**
   * An account.
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
     * Whether this account contains adult content.
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
     * Required. The time zone of the account. On writes, `time_zone` sets both the `reporting_time_zone` and the `display_time_zone`. For reads, `time_zone` always returns the `display_time_zone`. If `display_time_zone` doesn't exist for your account, `time_zone` is empty.
     */
    timeZone?: Schema$TimeZone;
  }
  /**
   * `AccountAggregation` payload.
   */
  export interface Schema$AccountAggregation {}
  /**
   * An [`AccountIssue`](https://support.google.com/merchants/answer/12153802?sjid=17798438912526418908-EU#account).
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
     * Identifier. The resource name of the account issue. Format: `accounts/{account\}/issues/{id\}`
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
   * Additional instructions to add account services during creation of the account.
   */
  export interface Schema$AddAccountService {
    /**
     * The provider is an [aggregator](https://support.google.com/merchants/answer/188487) for the account. Payload for service type Account Aggregation.
     */
    accountAggregation?: Schema$AccountAggregation;
    /**
     * Optional. The provider of the service. Format: `accounts/{account\}`
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
   * Collection of information related to the [autofeed](https://support.google.com/merchants/answer/7538732) settings.
   */
  export interface Schema$AutofeedSettings {
    /**
     * Output only. Determines whether merchant is eligible for being enrolled into an autofeed.
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
     * Optional. Specifies whether the business identifies itself as being black-owned. This optional field will only be available for merchants with a business country set to `US`. It is also not applicable for marketplaces or marketplace sellers.
     */
    blackOwned?: Schema$IdentityAttribute;
    /**
     * Optional. Specifies whether the business identifies itself as being latino-owned. This optional field will only be available for merchants with a business country set to `US`. It is also not applicable for marketplaces or marketplace sellers.
     */
    latinoOwned?: Schema$IdentityAttribute;
    /**
     * Identifier. The resource name of the business identity. Format: `accounts/{account\}/businessIdentity`
     */
    name?: string | null;
    /**
     * Optional. Whether the identity attributes may be used for promotions.
     */
    promotionsConsent?: string | null;
    /**
     * Optional. Specifies whether the business identifies itself as a small business. This optional field will only be available for merchants with a business country set to `US`. It is also not applicable for marketplaces.
     */
    smallBusiness?: Schema$IdentityAttribute;
    /**
     * Optional. Specifies whether the business identifies itself as being veteran-owned. This optional field will only be available for merchants with a business country set to `US`. It is also not applicable for marketplaces or marketplace sellers.
     */
    veteranOwned?: Schema$IdentityAttribute;
    /**
     * Optional. Specifies whether the business identifies itself as being women-owned. This optional field will only be available for merchants with a business country set to `US`. It is also not applicable for marketplaces or marketplace sellers.
     */
    womenOwned?: Schema$IdentityAttribute;
  }
  /**
   * Collection of information related to a business.
   */
  export interface Schema$BusinessInfo {
    /**
     * Optional. The address of the business.
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
   * A list of carrier rates that can be referred to by `main_table` or `single_value`.
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
   * Request message for the `ClaimHomepage` method.
   */
  export interface Schema$ClaimHomepageRequest {}
  /**
   * Request message for the `CreateAndConfigureAccount` method.
   */
  export interface Schema$CreateAndConfigureAccountRequest {
    /**
     * Required. The account to be created.
     */
    account?: Schema$Account;
    /**
     * Required. An account service between the account to be created and the provider account is initialized as part of the creation. At least one such service needs to be provided. Currently exactly one of these needs to be `account_aggregation`, which means you can only create sub accounts, not standalone account through this method. Additional `account_management` or `product_management` services may be provided.
     */
    service?: Schema$AddAccountService[];
    /**
     * Optional. Users to be added to the account.
     */
    users?: Schema$CreateUserRequest[];
  }
  /**
   * Request message for the `CreateUser` method.
   */
  export interface Schema$CreateUserRequest {
    /**
     * Required. The resource name of the account for which a user will be created. Format: `accounts/{account\}`
     */
    parent?: string | null;
    /**
     * Required. The user to create.
     */
    user?: Schema$User;
    /**
     * Required. The email address of the user (for example, `john.doe@gmail.com`).
     */
    userId?: string | null;
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
     * Merchants can opt-out of showing n+1 day local delivery when they have a shipping service configured to n day local delivery. For example, if the shipping service defines same-day delivery, and it's past the cut-off, setting this field to `true` results in the calculated shipping service rate returning `NO_DELIVERY_POST_CUTOFF`. In the same example, setting this field to `false` results in the calculated shipping time being one day. This is only for local delivery.
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
   * A list of geotargets that defines the region area.
   */
  export interface Schema$GeoTargetArea {
    /**
     * Required. A non-empty list of [location IDs](https://developers.google.com/adwords/api/docs/appendix/geotargeting). They must all be of the same location type (for example, state).
     */
    geotargetCriteriaIds?: string[] | null;
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
   * A store's homepage.
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
   * Response message for the `ListAccounts` method.
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
     * The regions from the specified merchant.
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
   * A list of location ID sets. Must be non-empty. Can only be set if all other fields are not set.
   */
  export interface Schema$LocationIdSet {
    /**
     * Required. A non-empty list of [location IDs](https://developers.google.com/adwords/api/docs/appendix/geotargeting). They must all be of the same location type (For example, state).
     */
    locationIds?: string[] | null;
  }
  /**
   * [Loyalty program](https://support.google.com/merchants/answer/12922446) provided by a merchant.
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
   * Subset of a merchants loyalty program.
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
   * [Online return policy](https://support.google.com/merchants/answer/10220642) object. This is currently used to represent return policies for ads and free listings programs.
   */
  export interface Schema$OnlineReturnPolicy {
    /**
     * This field specifies if merchant only accepts defective products for returns, and this field is required.
     */
    acceptDefectiveOnly?: boolean | null;
    /**
     * This field specifies if merchant allows customers to exchange products, this field is required.
     */
    acceptExchange?: boolean | null;
    /**
     * The countries of sale where the return policy applies. The values must be a valid 2 letter ISO 3166 code.
     */
    countries?: string[] | null;
    /**
     * The item conditions accepted for returns must not be empty unless the type of return policy is 'noReturns'.
     */
    itemConditions?: string[] | null;
    /**
     * This field represents the unique user-defined label of the return policy. It is important to note that the same label cannot be used in different return policies for the same country. Unless a product specifies a specific label attribute, policies will be automatically labeled as 'default'. To assign a custom return policy to certain product groups, follow the instructions provided in the [Return policy label] (https://support.google.com/merchants/answer/9445425). The label can contain up to 50 characters.
     */
    label?: string | null;
    /**
     * Identifier. The name of the `OnlineReturnPolicy` resource. Format: `accounts/{account\}/onlineReturnPolicies/{return_policy\}`
     */
    name?: string | null;
    /**
     * The return policy.
     */
    policy?: Schema$Policy;
    /**
     * The field specifies the number of days it takes for merchants to process refunds, field is optional.
     */
    processRefundDays?: number | null;
    /**
     * The restocking fee that applies to all return reason categories. This would be treated as a free restocking fee if the value is not set.
     */
    restockingFee?: Schema$RestockingFee;
    /**
     * The return methods of how customers can return an item. This value is required to not be empty unless the type of return policy is noReturns.
     */
    returnMethods?: string[] | null;
    /**
     * Output only. Return policy ID generated by Google.
     */
    returnPolicyId?: string | null;
    /**
     * The return policy uri. This can used by Google to do a sanity check for the policy. It must be a valid URL.
     */
    returnPolicyUri?: string | null;
    /**
     * The return shipping fee. Should be set only when customer need to download and print the return label.
     */
    returnShippingFee?: Schema$ReturnShippingFee;
  }
  /**
   * An object representing a phone number, suitable as an API wire format. This representation: - should not be used for locale-specific formatting of a phone number, such as "+1 (650) 253-0000 ext. 123" - is not designed for efficient storage - may not be suitable for dialing - specialized libraries (see references) should be used to parse the number for that purpose To do something meaningful with this number, such as format it for various use-cases, convert it to an `i18n.phonenumbers.PhoneNumber` object first. For instance, in Java this would be: com.google.type.PhoneNumber wireProto = com.google.type.PhoneNumber.newBuilder().build(); com.google.i18n.phonenumbers.Phonenumber.PhoneNumber phoneNumber = PhoneNumberUtil.getInstance().parse(wireProto.getE164Number(), "ZZ"); if (!wireProto.getExtension().isEmpty()) { phoneNumber.setExtension(wireProto.getExtension()); \} Reference(s): - https://github.com/google/libphonenumber
   */
  export interface Schema$PhoneNumber {
    /**
     * The phone number, represented as a leading plus sign ('+'), followed by a phone number that uses a relaxed ITU E.164 format consisting of the country calling code (1 to 3 digits) and the subscriber number, with no additional spaces or formatting, e.g.: - correct: "+15552220123" - incorrect: "+1 (555) 222-01234 x123". The ITU E.164 format limits the latter to 12 digits, but in practice not all countries respect that, so we relax that restriction here. National-only numbers are not allowed. References: - https://www.itu.int/rec/T-REC-E.164-201011-I - https://en.wikipedia.org/wiki/E.164. - https://en.wikipedia.org/wiki/List_of_country_calling_codes
     */
    e164Number?: string | null;
    /**
     * The phone number's extension. The extension is not standardized in ITU recommendations, except for being defined as a series of numbers with a maximum length of 40 digits. Other than digits, some other dialing characters such as ',' (indicating a wait) or '#' may be stored here. Note that no regions currently use extensions with short codes, so this field is normally only set in conjunction with an E.164 number. It is held separately from the E.164 number to allow for short code extensions in the future.
     */
    extension?: string | null;
    /**
     * A short code. Reference(s): - https://en.wikipedia.org/wiki/Short_code
     */
    shortCode?: Schema$ShortCode;
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
   * Represents a postal address, e.g. for postal delivery or payments addresses. Given a postal address, a postal service can deliver items to a premise, P.O. Box or similar. It is not intended to model geographical locations (roads, towns, mountains). In typical usage an address would be created via user input or from importing existing data, depending on the type of process. Advice on address input / editing: - Use an internationalization-ready address widget such as https://github.com/google/libaddressinput) - Users should not be presented with UI elements for input or editing of fields outside countries where that field is used. For more guidance on how to use this schema, please see: https://support.google.com/business/answer/6397478
   */
  export interface Schema$PostalAddress {
    /**
     * Unstructured address lines describing the lower levels of an address. Because values in address_lines do not have type information and may sometimes contain multiple values in a single field (e.g. "Austin, TX"), it is important that the line order is clear. The order of address lines should be "envelope order" for the country/region of the address. In places where this can vary (e.g. Japan), address_language is used to make it explicit (e.g. "ja" for large-to-small ordering and "ja-Latn" or "en" for small-to-large). This way, the most specific line of an address can be selected based on the language. The minimum permitted structural representation of an address consists of a region_code with all remaining information placed in the address_lines. It would be possible to format such an address very approximately without geocoding, but no semantic reasoning could be made about any of the address components until it was at least partially resolved. Creating an address only containing a region_code and address_lines, and then geocoding is the recommended way to handle completely unstructured addresses (as opposed to guessing which parts of the address should be localities or administrative areas).
     */
    addressLines?: string[] | null;
    /**
     * Optional. Highest administrative subdivision which is used for postal addresses of a country or region. For example, this can be a state, a province, an oblast, or a prefecture. Specifically, for Spain this is the province and not the autonomous community (e.g. "Barcelona" and not "Catalonia"). Many countries don't use an administrative area in postal addresses. E.g. in Switzerland this should be left unpopulated.
     */
    administrativeArea?: string | null;
    /**
     * Optional. BCP-47 language code of the contents of this address (if known). This is often the UI language of the input form or is expected to match one of the languages used in the address' country/region, or their transliterated equivalents. This can affect formatting in certain countries, but is not critical to the correctness of the data and will never affect any validation or other non-formatting related operations. If this value is not known, it should be omitted (rather than specifying a possibly incorrect default). Examples: "zh-Hant", "ja", "ja-Latn", "en".
     */
    languageCode?: string | null;
    /**
     * Optional. Generally refers to the city/town portion of the address. Examples: US city, IT comune, UK post town. In regions of the world where localities are not well defined or do not fit into this structure well, leave locality empty and use address_lines.
     */
    locality?: string | null;
    /**
     * Optional. The name of the organization at the address.
     */
    organization?: string | null;
    /**
     * Optional. Postal code of the address. Not all countries use or require postal codes to be present, but where they are used, they may trigger additional validation with other parts of the address (e.g. state/zip validation in the U.S.A.).
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
     * Optional. Additional, country-specific, sorting code. This is not used in most regions. Where it is used, the value is either a string like "CEDEX", optionally followed by a number (e.g. "CEDEX 7"), or just a number alone, representing the "sector code" (Jamaica), "delivery area indicator" (Malawi) or "post office indicator" (e.g. Côte d'Ivoire).
     */
    sortingCode?: string | null;
    /**
     * Optional. Sublocality of the address. For example, this can be neighborhoods, boroughs, districts.
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
     * The new value of the changed resource or attribute.
     */
    newValue?: string | null;
    /**
     * The old value of the changed resource or attribute.
     */
    oldValue?: string | null;
    /**
     * Countries that have the change (if applicable)
     */
    regionCode?: string | null;
    /**
     * Reporting contexts that have the change (if applicable)
     */
    reportingContext?: string | null;
  }
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
     * The account that manages the merchant's account. can be the same as merchant id if it is standalone account. Format : `accounts/{service_provider_id\}`
     */
    managingAccount?: string | null;
    /**
     * The product name. Format: `{product.name=accounts/{account\}/products/{product\}\}`
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
   * Defines participation in a given program for the specified account. Programs provide a mechanism for adding functionality to merchant accounts. A typical example of this is the [Free product listings](https://support.google.com/merchants/topic/9240261?ref_topic=7257954,7259405,&sjid=796648681813264022-EU) program, which enables products from a merchant's store to be shown across Google for free.
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
   * Describes the terms of service which are required to be accepted.
   */
  export interface Schema$Required {
    /**
     * The [termsOfService](google.shopping.merchant.accounts.v1main.TermsOfService) that need to be accepted.
     */
    termsOfService?: string | null;
    /**
     * Full URL to the terms of service file. This field is the same as [TermsOfService.file_uri](TermsOfService.file_uri), it is added here for convenience only.
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
     * Type of return shipping fee.
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
  /**
   * Shipping service.
   */
  export interface Schema$Service {
    /**
     * Required. A boolean exposing the active status of the shipping service.
     */
    active?: boolean | null;
    /**
     * The CLDR code of the currency to which this service applies. Must match that of the prices in rate groups.
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
     * Minimum order value for this service. If set, indicates that customers will have to spend at least this amount. All prices within a service must have the same currency. Cannot be set together with minimum_order_value_table.
     */
    minimumOrderValue?: Schema$Price;
    /**
     * Table of per store minimum order values for the pickup fulfillment type. Cannot be set together with minimum_order_value.
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
     * Type of locations this service ships orders to.
     */
    shipmentType?: string | null;
    /**
     * A list of stores your products are delivered from. This is only valid for the local delivery shipment type.
     */
    storeConfig?: Schema$StoreConfig;
  }
  /**
   * The merchant account's [shipping setting](https://support.google.com/merchants/answer/6069284).
   */
  export interface Schema$ShippingSettings {
    /**
     * Required. This field is used for avoid async issue. Make sure shipping setting data didn't change between get call and insert call. The user should do following steps： 1. Set etag field as empty string for initial shipping setting creation. 2. After initial creation, call get method to obtain an etag and current shipping setting data before call insert. 3. Modify to wanted shipping setting information. 4. Call insert method with the wanted shipping setting information with the etag obtained from step 2. 5. If shipping setting data changed between step 2 and step 4. Insert request will fail because the etag changes every time the shipping setting data changes. User should repeate step 2-4 with the new etag.
     */
    etag?: string | null;
    /**
     * Identifier. The resource name of the shipping setting. Format: `accounts/{account\}/shippingSetting`
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
   * An object representing a short code, which is a phone number that is typically much shorter than regular phone numbers and can be used to address messages in MMS and SMS systems, as well as for abbreviated dialing (e.g. "Text 611 to see how many minutes you have remaining on your plan."). Short codes are restricted to a region and are not internationally dialable, which means the same short code can exist in different regions, with different usage and pricing, even if those regions share the same country calling code (e.g. US and CA).
   */
  export interface Schema$ShortCode {
    /**
     * Required. The short code digits, without a leading plus ('+') or country calling code, e.g. "611".
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
     * Indicates whether all stores, or selected stores, listed by this merchant provide local delivery.
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
   * A `TermsOfService`.
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
   * This resource represents the agreement state for a given account and terms of service kind. The state is as follows: * If the merchant has accepted a terms of service: [accepted](TermsOfServiceAggrementState.accepted) will be populated, otherwise it will be empty * If the merchant must sign a terms of service: [required](TermsOfServiceAggrementState.required) will be populated, otherwise it will be empty. Note that both [required](TermsOfServiceAggrementState.required) and [accepted](TermsOfServiceAggrementState.accepted) can be present. In this case the `accepted` terms of services will have an expiration date set in the [valid_until](Accepted.valid_until) field. The `required` terms of services need to be accepted before `valid_until` in order for the account to continue having a valid agreement. When accepting new terms of services we expect 3Ps to display the text associated with the given terms of service agreement (the url to the file containing the text is added in the Required message below as [tos_file_uri](Accepted.tos_file_uri). The actual acceptance of the terms of service is done by calling accept on the [TermsOfService](TermsOfService) resource.
   */
  export interface Schema$TermsOfServiceAgreementState {
    /**
     * The accepted terms of service of this kind and for the associated region_code
     */
    accepted?: Schema$Accepted;
    /**
     * Identifier. The resource name of the terms of service version. Format: `accounts/{account\}/termsOfServiceAgreementState/{identifier\}` The identifier format is: `{TermsOfServiceKind\}-{country\}` For example, an identifier could be: `MERCHANT_CENTER-US`
     */
    name?: string | null;
    /**
     * Region code as defined by https://cldr.unicode.org/. This is the country the current state applies to.
     */
    regionCode?: string | null;
    /**
     * The required terms of service
     */
    required?: Schema$Required;
    /**
     * Terms of Service kind associated with the particular version.
     */
    termsOfServiceKind?: string | null;
  }
  /**
   * Represents a time zone from the [IANA Time Zone Database](https://www.iana.org/time-zones).
   */
  export interface Schema$TimeZone {
    /**
     * IANA Time Zone Database time zone, e.g. "America/New_York".
     */
    id?: string | null;
    /**
     * Optional. IANA Time Zone Database version number, e.g. "2019a".
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
   * A [user](https://support.google.com/merchants/answer/12160472).
   */
  export interface Schema$User {
    /**
     * Optional. The [access rights](https://support.google.com/merchants/answer/12160472?sjid=6789834943175119429-EU#accesstypes) the user has.
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
   * A fulfillment warehouse, which stores and handles inventory. Next tag: 7
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
     * Required. Carrier, such as `"UPS"` or `"Fedex"`.
     */
    carrier?: string | null;
    /**
     * Required. Carrier service, such as `"ground"` or `"2 days"`. The name of the service must be in the eddSupportedServices list.
     */
    carrierService?: string | null;
    /**
     * Required. Warehouse name. This should match warehouse
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
    businessIdentity: Resource$Accounts$Businessidentity;
    businessInfo: Resource$Accounts$Businessinfo;
    emailPreferences: Resource$Accounts$Emailpreferences;
    homepage: Resource$Accounts$Homepage;
    issues: Resource$Accounts$Issues;
    onlineReturnPolicies: Resource$Accounts$Onlinereturnpolicies;
    programs: Resource$Accounts$Programs;
    regions: Resource$Accounts$Regions;
    shippingSettings: Resource$Accounts$Shippingsettings;
    termsOfServiceAgreementStates: Resource$Accounts$Termsofserviceagreementstates;
    users: Resource$Accounts$Users;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.autofeedSettings = new Resource$Accounts$Autofeedsettings(
        this.context
      );
      this.businessIdentity = new Resource$Accounts$Businessidentity(
        this.context
      );
      this.businessInfo = new Resource$Accounts$Businessinfo(this.context);
      this.emailPreferences = new Resource$Accounts$Emailpreferences(
        this.context
      );
      this.homepage = new Resource$Accounts$Homepage(this.context);
      this.issues = new Resource$Accounts$Issues(this.context);
      this.onlineReturnPolicies = new Resource$Accounts$Onlinereturnpolicies(
        this.context
      );
      this.programs = new Resource$Accounts$Programs(this.context);
      this.regions = new Resource$Accounts$Regions(this.context);
      this.shippingSettings = new Resource$Accounts$Shippingsettings(
        this.context
      );
      this.termsOfServiceAgreementStates =
        new Resource$Accounts$Termsofserviceagreementstates(this.context);
      this.users = new Resource$Accounts$Users(this.context);
    }

    /**
     * Creates a standalone Merchant Center account with additional configuration. Adds the user that makes the request as an admin for the new account.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    createAndConfigure(
      params: Params$Resource$Accounts$Createandconfigure,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    createAndConfigure(
      params?: Params$Resource$Accounts$Createandconfigure,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Account>;
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
    ): void | GaxiosPromise<Schema$Account> | GaxiosPromise<Readable> {
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
            url: (
              rootUrl + '/accounts/v1beta/accounts:createAndConfigure'
            ).replace(/([^:]\/)\/+/g, '$1'),
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
     * Deletes the specified account regardless of its type: standalone, MCA or sub-account. Deleting an MCA leads to the deletion of all of its sub-accounts. Executing this method requires admin access. The deletion succeeds only if the account does not provide services to any other account and has no processed offers. You can use the `force` parameter to override this.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    delete(
      params: Params$Resource$Accounts$Delete,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    delete(
      params?: Params$Resource$Accounts$Delete,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Empty>;
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
    ): void | GaxiosPromise<Schema$Empty> | GaxiosPromise<Readable> {
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
            url: (rootUrl + '/accounts/v1beta/{+name}').replace(
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
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    get(
      params: Params$Resource$Accounts$Get,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    get(
      params?: Params$Resource$Accounts$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Account>;
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
    ): void | GaxiosPromise<Schema$Account> | GaxiosPromise<Readable> {
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
            url: (rootUrl + '/accounts/v1beta/{+name}').replace(
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
     * Lists accounts accessible to the calling user and matching the constraints of the request such as page size or filters. This is not just listing the sub-accounts of an MCA, but all accounts the calling user has access to including other MCAs, linked accounts, standalone accounts and so on. If no filter is provided, then it returns accounts the user is directly added to.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    list(
      params: Params$Resource$Accounts$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Accounts$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ListAccountsResponse>;
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
      | GaxiosPromise<Schema$ListAccountsResponse>
      | GaxiosPromise<Readable> {
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
            url: (rootUrl + '/accounts/v1beta/accounts').replace(
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
     * List all sub-accounts for a given multi client account. This is a convenience wrapper for the more powerful `ListAccounts` method. This method will produce the same results as calling `ListsAccounts` with the following filter: `relationship(providerId={parent\} AND service(type="ACCOUNT_AGGREGATION"))`
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    listSubaccounts(
      params: Params$Resource$Accounts$Listsubaccounts,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    listSubaccounts(
      params?: Params$Resource$Accounts$Listsubaccounts,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ListSubAccountsResponse>;
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
      | GaxiosPromise<Schema$ListSubAccountsResponse>
      | GaxiosPromise<Readable> {
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
            url: (
              rootUrl + '/accounts/v1beta/{+provider}:listSubaccounts'
            ).replace(/([^:]\/)\/+/g, '$1'),
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
     * Updates an account regardless of its type: standalone, MCA or sub-account. Executing this method requires admin access.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    patch(
      params: Params$Resource$Accounts$Patch,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    patch(
      params?: Params$Resource$Accounts$Patch,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Account>;
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
    ): void | GaxiosPromise<Schema$Account> | GaxiosPromise<Readable> {
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
            url: (rootUrl + '/accounts/v1beta/{+name}').replace(
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
     * Optional. Returns only accounts that match the [filter](/merchant/api/guides/accounts/filter). For more details, see the [filter syntax reference](/merchant/api/guides/accounts/filter-syntax).
     */
    filter?: string;
    /**
     * Optional. The maximum number of accounts to return. The service may return fewer than this value. If unspecified, at most 250 accounts are returned. The maximum value is 500; values above 500 are coerced to 500.
     */
    pageSize?: number;
    /**
     * Optional. A page token, received from a previous `ListAccounts` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListAccounts` must match the call that provided the page token.
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
     * Optional. A page token, received from a previous `ListAccounts` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListAccounts` must match the call that provided the page token.
     */
    pageToken?: string;
    /**
     * Required. The parent account. Format: `accounts/{account\}`
     */
    provider?: string;
  }
  export interface Params$Resource$Accounts$Patch extends StandardParameters {
    /**
     * Identifier. The resource name of the account. Format: `accounts/{account\}`
     */
    name?: string;
    /**
     * Required. List of fields being updated.
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
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    getAutofeedSettings(
      params: Params$Resource$Accounts$Autofeedsettings$Getautofeedsettings,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    getAutofeedSettings(
      params?: Params$Resource$Accounts$Autofeedsettings$Getautofeedsettings,
      options?: MethodOptions
    ): GaxiosPromise<Schema$AutofeedSettings>;
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
    ): void | GaxiosPromise<Schema$AutofeedSettings> | GaxiosPromise<Readable> {
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
            url: (rootUrl + '/accounts/v1beta/{+name}').replace(
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
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    updateAutofeedSettings(
      params: Params$Resource$Accounts$Autofeedsettings$Updateautofeedsettings,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    updateAutofeedSettings(
      params?: Params$Resource$Accounts$Autofeedsettings$Updateautofeedsettings,
      options?: MethodOptions
    ): GaxiosPromise<Schema$AutofeedSettings>;
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
    ): void | GaxiosPromise<Schema$AutofeedSettings> | GaxiosPromise<Readable> {
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
            url: (rootUrl + '/accounts/v1beta/{+name}').replace(
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

  export class Resource$Accounts$Businessidentity {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Retrieves the business identity of an account.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    getBusinessIdentity(
      params: Params$Resource$Accounts$Businessidentity$Getbusinessidentity,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    getBusinessIdentity(
      params?: Params$Resource$Accounts$Businessidentity$Getbusinessidentity,
      options?: MethodOptions
    ): GaxiosPromise<Schema$BusinessIdentity>;
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
    ): void | GaxiosPromise<Schema$BusinessIdentity> | GaxiosPromise<Readable> {
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
            url: (rootUrl + '/accounts/v1beta/{+name}').replace(
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
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    updateBusinessIdentity(
      params: Params$Resource$Accounts$Businessidentity$Updatebusinessidentity,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    updateBusinessIdentity(
      params?: Params$Resource$Accounts$Businessidentity$Updatebusinessidentity,
      options?: MethodOptions
    ): GaxiosPromise<Schema$BusinessIdentity>;
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
    ): void | GaxiosPromise<Schema$BusinessIdentity> | GaxiosPromise<Readable> {
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
            url: (rootUrl + '/accounts/v1beta/{+name}').replace(
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
     * Required. The resource name of the business identity. Format: `accounts/{account\}/businessIdentity`
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
     * Required. List of fields being updated.
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
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    getBusinessInfo(
      params: Params$Resource$Accounts$Businessinfo$Getbusinessinfo,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    getBusinessInfo(
      params?: Params$Resource$Accounts$Businessinfo$Getbusinessinfo,
      options?: MethodOptions
    ): GaxiosPromise<Schema$BusinessInfo>;
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
    ): void | GaxiosPromise<Schema$BusinessInfo> | GaxiosPromise<Readable> {
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
            url: (rootUrl + '/accounts/v1beta/{+name}').replace(
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
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    updateBusinessInfo(
      params: Params$Resource$Accounts$Businessinfo$Updatebusinessinfo,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    updateBusinessInfo(
      params?: Params$Resource$Accounts$Businessinfo$Updatebusinessinfo,
      options?: MethodOptions
    ): GaxiosPromise<Schema$BusinessInfo>;
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
    ): void | GaxiosPromise<Schema$BusinessInfo> | GaxiosPromise<Readable> {
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
            url: (rootUrl + '/accounts/v1beta/{+name}').replace(
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
     * Required. The resource name of the business info. Format: `accounts/{account\}/businessInfo`
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
     * Required. List of fields being updated.
     */
    updateMask?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$BusinessInfo;
  }

  export class Resource$Accounts$Emailpreferences {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Returns the email preferences for a Merchant Center account user. Use the name=accounts/x/users/me/emailPreferences alias to get preferences for the authenticated user.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    getEmailPreferences(
      params: Params$Resource$Accounts$Emailpreferences$Getemailpreferences,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    getEmailPreferences(
      params?: Params$Resource$Accounts$Emailpreferences$Getemailpreferences,
      options?: MethodOptions
    ): GaxiosPromise<Schema$EmailPreferences>;
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
    ): void | GaxiosPromise<Schema$EmailPreferences> | GaxiosPromise<Readable> {
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
            url: (rootUrl + '/accounts/v1beta/{+name}').replace(
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
     * Updates the email preferences for a Merchant Center account user. MCA users should specify the MCA account rather than a sub-account of the MCA. Preferences which are not explicitly selected in the update mask will not be updated. It is invalid for updates to specify an UNCONFIRMED opt-in status value. Use the name=accounts/x/users/me/emailPreferences alias to update preferences for the authenticated user.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    updateEmailPreferences(
      params: Params$Resource$Accounts$Emailpreferences$Updateemailpreferences,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    updateEmailPreferences(
      params?: Params$Resource$Accounts$Emailpreferences$Updateemailpreferences,
      options?: MethodOptions
    ): GaxiosPromise<Schema$EmailPreferences>;
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
    ): void | GaxiosPromise<Schema$EmailPreferences> | GaxiosPromise<Readable> {
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
            url: (rootUrl + '/accounts/v1beta/{+name}').replace(
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
     * Required. List of fields being updated.
     */
    updateMask?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$EmailPreferences;
  }

  export class Resource$Accounts$Homepage {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Claims a store's homepage. Executing this method requires admin access. If the homepage is already claimed, this will recheck the verification (unless the merchant is exempted from claiming, which also exempts from verification) and return a successful response. If ownership can no longer be verified, it will return an error, but it won't clear the claim. In case of failure, a canonical error message will be returned: * PERMISSION_DENIED: user doesn't have the necessary permissions on this MC account; * FAILED_PRECONDITION: - The account is not a Merchant Center account; - MC account doesn't have a homepage; - claiming failed (in this case the error message will contain more details).
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    claim(
      params: Params$Resource$Accounts$Homepage$Claim,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    claim(
      params?: Params$Resource$Accounts$Homepage$Claim,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Homepage>;
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
    ): void | GaxiosPromise<Schema$Homepage> | GaxiosPromise<Readable> {
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
            url: (rootUrl + '/accounts/v1beta/{+name}:claim').replace(
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
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    getHomepage(
      params: Params$Resource$Accounts$Homepage$Gethomepage,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    getHomepage(
      params?: Params$Resource$Accounts$Homepage$Gethomepage,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Homepage>;
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
    ): void | GaxiosPromise<Schema$Homepage> | GaxiosPromise<Readable> {
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
            url: (rootUrl + '/accounts/v1beta/{+name}').replace(
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
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    unclaim(
      params: Params$Resource$Accounts$Homepage$Unclaim,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    unclaim(
      params?: Params$Resource$Accounts$Homepage$Unclaim,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Homepage>;
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
    ): void | GaxiosPromise<Schema$Homepage> | GaxiosPromise<Readable> {
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
            url: (rootUrl + '/accounts/v1beta/{+name}:unclaim').replace(
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
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    updateHomepage(
      params: Params$Resource$Accounts$Homepage$Updatehomepage,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    updateHomepage(
      params?: Params$Resource$Accounts$Homepage$Updatehomepage,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Homepage>;
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
    ): void | GaxiosPromise<Schema$Homepage> | GaxiosPromise<Readable> {
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
            url: (rootUrl + '/accounts/v1beta/{+name}').replace(
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
     * Required. List of fields being updated.
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
     * Lists all account issues of a Merchant Center account.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    list(
      params: Params$Resource$Accounts$Issues$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Accounts$Issues$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ListAccountIssuesResponse>;
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
      | GaxiosPromise<Schema$ListAccountIssuesResponse>
      | GaxiosPromise<Readable> {
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
            url: (rootUrl + '/accounts/v1beta/{+parent}/issues').replace(
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
     * Optional. The maximum number of issues to return. The service may return fewer than this value. If unspecified, at most 50 users will be returned. The maximum value is 100; values above 100 will be coerced to 100
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

  export class Resource$Accounts$Onlinereturnpolicies {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Gets an existing return policy.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    get(
      params: Params$Resource$Accounts$Onlinereturnpolicies$Get,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    get(
      params?: Params$Resource$Accounts$Onlinereturnpolicies$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$OnlineReturnPolicy>;
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
      | GaxiosPromise<Schema$OnlineReturnPolicy>
      | GaxiosPromise<Readable> {
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
            url: (rootUrl + '/accounts/v1beta/{+name}').replace(
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
     * Lists all existing return policies.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    list(
      params: Params$Resource$Accounts$Onlinereturnpolicies$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Accounts$Onlinereturnpolicies$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ListOnlineReturnPoliciesResponse>;
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
      | GaxiosPromise<Schema$ListOnlineReturnPoliciesResponse>
      | GaxiosPromise<Readable> {
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
              rootUrl + '/accounts/v1beta/{+parent}/onlineReturnPolicies'
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
     * Optional. The maximum number of `OnlineReturnPolicy` resources to return. The service returns fewer than this value if the number of return policies for the given merchant is less that than the `pageSize`. The default value is 10. The maximum value is 100; If a value higher than the maximum is specified, then the `pageSize` will default to the maximum
     */
    pageSize?: number;
    /**
     * Optional. A page token, received from a previous `ListOnlineReturnPolicies` call. Provide the page token to retrieve the subsequent page. When paginating, all other parameters provided to `ListOnlineReturnPolicies` must match the call that provided the page token. The token returned as nextPageToken in the response to the previous request.
     */
    pageToken?: string;
    /**
     * Required. The merchant account for which to list return policies. Format: `accounts/{account\}`
     */
    parent?: string;
  }

  export class Resource$Accounts$Programs {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Disable participation in the specified program for the account. Executing this method requires admin access.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    disable(
      params: Params$Resource$Accounts$Programs$Disable,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    disable(
      params?: Params$Resource$Accounts$Programs$Disable,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Program>;
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
    ): void | GaxiosPromise<Schema$Program> | GaxiosPromise<Readable> {
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
            url: (rootUrl + '/accounts/v1beta/{+name}:disable').replace(
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
     * Enable participation in the specified program for the account. Executing this method requires admin access.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    enable(
      params: Params$Resource$Accounts$Programs$Enable,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    enable(
      params?: Params$Resource$Accounts$Programs$Enable,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Program>;
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
    ): void | GaxiosPromise<Schema$Program> | GaxiosPromise<Readable> {
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
            url: (rootUrl + '/accounts/v1beta/{+name}:enable').replace(
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
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    get(
      params: Params$Resource$Accounts$Programs$Get,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    get(
      params?: Params$Resource$Accounts$Programs$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Program>;
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
    ): void | GaxiosPromise<Schema$Program> | GaxiosPromise<Readable> {
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
            url: (rootUrl + '/accounts/v1beta/{+name}').replace(
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
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    list(
      params: Params$Resource$Accounts$Programs$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Accounts$Programs$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ListProgramsResponse>;
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
      | GaxiosPromise<Schema$ListProgramsResponse>
      | GaxiosPromise<Readable> {
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
            url: (rootUrl + '/accounts/v1beta/{+parent}/programs').replace(
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
     * Required. The name of the program for which to disable participation for the given account. Format: `accounts/{account\}/programs/{program\}`
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
     * Required. The name of the program for which to enable participation for the given account. Format: `accounts/{account\}/programs/{program\}`
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
     * Required. The name of the program to retrieve. Format: `accounts/{account\}/programs/{program\}`
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

  export class Resource$Accounts$Regions {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Creates a region definition in your Merchant Center account. Executing this method requires admin access.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    create(
      params: Params$Resource$Accounts$Regions$Create,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    create(
      params?: Params$Resource$Accounts$Regions$Create,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Region>;
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
    ): void | GaxiosPromise<Schema$Region> | GaxiosPromise<Readable> {
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
            url: (rootUrl + '/accounts/v1beta/{+parent}/regions').replace(
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
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    delete(
      params: Params$Resource$Accounts$Regions$Delete,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    delete(
      params?: Params$Resource$Accounts$Regions$Delete,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Empty>;
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
    ): void | GaxiosPromise<Schema$Empty> | GaxiosPromise<Readable> {
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
            url: (rootUrl + '/accounts/v1beta/{+name}').replace(
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
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    get(
      params: Params$Resource$Accounts$Regions$Get,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    get(
      params?: Params$Resource$Accounts$Regions$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Region>;
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
    ): void | GaxiosPromise<Schema$Region> | GaxiosPromise<Readable> {
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
            url: (rootUrl + '/accounts/v1beta/{+name}').replace(
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
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    list(
      params: Params$Resource$Accounts$Regions$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Accounts$Regions$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ListRegionsResponse>;
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
      | GaxiosPromise<Schema$ListRegionsResponse>
      | GaxiosPromise<Readable> {
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
            url: (rootUrl + '/accounts/v1beta/{+parent}/regions').replace(
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
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    patch(
      params: Params$Resource$Accounts$Regions$Patch,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    patch(
      params?: Params$Resource$Accounts$Regions$Patch,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Region>;
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
    ): void | GaxiosPromise<Schema$Region> | GaxiosPromise<Readable> {
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
            url: (rootUrl + '/accounts/v1beta/{+name}').replace(
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

  export class Resource$Accounts$Shippingsettings {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Retrieve shipping setting information.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    getShippingSettings(
      params: Params$Resource$Accounts$Shippingsettings$Getshippingsettings,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    getShippingSettings(
      params?: Params$Resource$Accounts$Shippingsettings$Getshippingsettings,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ShippingSettings>;
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
    ): void | GaxiosPromise<Schema$ShippingSettings> | GaxiosPromise<Readable> {
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
            url: (rootUrl + '/accounts/v1beta/{+name}').replace(
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
     * Replace the shipping setting of a merchant with the request shipping setting. Executing this method requires admin access.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    insert(
      params: Params$Resource$Accounts$Shippingsettings$Insert,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    insert(
      params?: Params$Resource$Accounts$Shippingsettings$Insert,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ShippingSettings>;
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
    ): void | GaxiosPromise<Schema$ShippingSettings> | GaxiosPromise<Readable> {
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
              rootUrl + '/accounts/v1beta/{+parent}/shippingSettings:insert'
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
     * Required. The name of the shipping setting to retrieve. Format: `accounts/{account\}/shippingsetting`
     */
    name?: string;
  }
  export interface Params$Resource$Accounts$Shippingsettings$Insert
    extends StandardParameters {
    /**
     * Required. The account where this product will be inserted. Format: accounts/{account\}
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
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    get(
      params: Params$Resource$Accounts$Termsofserviceagreementstates$Get,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    get(
      params?: Params$Resource$Accounts$Termsofserviceagreementstates$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$TermsOfServiceAgreementState>;
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
      | GaxiosPromise<Schema$TermsOfServiceAgreementState>
      | GaxiosPromise<Readable> {
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
            url: (rootUrl + '/accounts/v1beta/{+name}').replace(
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
     * Retrieves the state of the agreement for the application terms of service.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    retrieveForApplication(
      params: Params$Resource$Accounts$Termsofserviceagreementstates$Retrieveforapplication,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    retrieveForApplication(
      params?: Params$Resource$Accounts$Termsofserviceagreementstates$Retrieveforapplication,
      options?: MethodOptions
    ): GaxiosPromise<Schema$TermsOfServiceAgreementState>;
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
      | GaxiosPromise<Schema$TermsOfServiceAgreementState>
      | GaxiosPromise<Readable> {
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
              '/accounts/v1beta/{+parent}/termsOfServiceAgreementStates:retrieveForApplication'
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
     * Required. The resource name of the terms of service version. Format: `accounts/{account\}/termsOfServiceAgreementState/{identifier\}` The identifier format is: `{TermsOfServiceKind\}-{country\}`
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
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    create(
      params: Params$Resource$Accounts$Users$Create,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    create(
      params?: Params$Resource$Accounts$Users$Create,
      options?: MethodOptions
    ): GaxiosPromise<Schema$User>;
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
    ): void | GaxiosPromise<Schema$User> | GaxiosPromise<Readable> {
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
            url: (rootUrl + '/accounts/v1beta/{+parent}/users').replace(
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
     * Deletes a Merchant Center account user. Executing this method requires admin access.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    delete(
      params: Params$Resource$Accounts$Users$Delete,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    delete(
      params?: Params$Resource$Accounts$Users$Delete,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Empty>;
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
    ): void | GaxiosPromise<Schema$Empty> | GaxiosPromise<Readable> {
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
            url: (rootUrl + '/accounts/v1beta/{+name}').replace(
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
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    get(
      params: Params$Resource$Accounts$Users$Get,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    get(
      params?: Params$Resource$Accounts$Users$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$User>;
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
    ): void | GaxiosPromise<Schema$User> | GaxiosPromise<Readable> {
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
            url: (rootUrl + '/accounts/v1beta/{+name}').replace(
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
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    list(
      params: Params$Resource$Accounts$Users$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Accounts$Users$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ListUsersResponse>;
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
      | GaxiosPromise<Schema$ListUsersResponse>
      | GaxiosPromise<Readable> {
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
            url: (rootUrl + '/accounts/v1beta/{+parent}/users').replace(
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
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    patch(
      params: Params$Resource$Accounts$Users$Patch,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    patch(
      params?: Params$Resource$Accounts$Users$Patch,
      options?: MethodOptions
    ): GaxiosPromise<Schema$User>;
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
    ): void | GaxiosPromise<Schema$User> | GaxiosPromise<Readable> {
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
            url: (rootUrl + '/accounts/v1beta/{+name}').replace(
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
     * Required. List of fields being updated.
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
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    accept(
      params: Params$Resource$Termsofservice$Accept,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    accept(
      params?: Params$Resource$Termsofservice$Accept,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Empty>;
    accept(
      params: Params$Resource$Termsofservice$Accept,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    accept(
      params: Params$Resource$Termsofservice$Accept,
      options: MethodOptions | BodyResponseCallback<Schema$Empty>,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    accept(
      params: Params$Resource$Termsofservice$Accept,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    accept(callback: BodyResponseCallback<Schema$Empty>): void;
    accept(
      paramsOrCallback?:
        | Params$Resource$Termsofservice$Accept
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
            url: (rootUrl + '/accounts/v1beta/{+name}:accept').replace(
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
        createAPIRequest<Schema$Empty>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Empty>(parameters);
      }
    }

    /**
     * Retrieves the `TermsOfService` associated with the provided version.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    get(
      params: Params$Resource$Termsofservice$Get,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    get(
      params?: Params$Resource$Termsofservice$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$TermsOfService>;
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
    ): void | GaxiosPromise<Schema$TermsOfService> | GaxiosPromise<Readable> {
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
            url: (rootUrl + '/accounts/v1beta/{+name}').replace(
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
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    retrieveLatest(
      params: Params$Resource$Termsofservice$Retrievelatest,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    retrieveLatest(
      params?: Params$Resource$Termsofservice$Retrievelatest,
      options?: MethodOptions
    ): GaxiosPromise<Schema$TermsOfService>;
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
    ): void | GaxiosPromise<Schema$TermsOfService> | GaxiosPromise<Readable> {
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
              rootUrl + '/accounts/v1beta/termsOfService:retrieveLatest'
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
     * Required. The account for which to accept the ToS.
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
