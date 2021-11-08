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

export namespace cloudchannel_v1 {
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
   * Cloud Channel API
   *
   * The Cloud Channel API enables Google Cloud partners to have a single unified resale platform and APIs across all of Google Cloud including GCP, Workspace, Maps and Chrome.
   *
   * @example
   * ```js
   * const {google} = require('googleapis');
   * const cloudchannel = google.cloudchannel('v1');
   * ```
   */
  export class Cloudchannel {
    context: APIRequestContext;
    accounts: Resource$Accounts;
    operations: Resource$Operations;
    products: Resource$Products;

    constructor(options: GlobalOptions, google?: GoogleConfigurable) {
      this.context = {
        _options: options || {},
        google,
      };

      this.accounts = new Resource$Accounts(this.context);
      this.operations = new Resource$Operations(this.context);
      this.products = new Resource$Products(this.context);
    }
  }

  /**
   * Request message for CloudChannelService.ActivateEntitlement.
   */
  export interface Schema$GoogleCloudChannelV1ActivateEntitlementRequest {
    /**
     * Optional. You can specify an optional unique request ID, and if you need to retry your request, the server will know to ignore the request if it's complete. For example, you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if it received the original operation with the same request ID. If it did, it will ignore the second request. The request ID must be a valid [UUID](https://tools.ietf.org/html/rfc4122) with the exception that zero UUID is not supported (`00000000-0000-0000-0000-000000000000`).
     */
    requestId?: string | null;
  }
  /**
   * Information needed to create an Admin User for Google Workspace.
   */
  export interface Schema$GoogleCloudChannelV1AdminUser {
    /**
     * Primary email of the admin user.
     */
    email?: string | null;
    /**
     * Family name of the admin user.
     */
    familyName?: string | null;
    /**
     * Given name of the admin user.
     */
    givenName?: string | null;
  }
  /**
   * Association links that an entitlement has to other entitlements.
   */
  export interface Schema$GoogleCloudChannelV1alpha1AssociationInfo {
    /**
     * The name of the base entitlement, for which this entitlement is an add-on.
     */
    baseEntitlement?: string | null;
  }
  /**
   * Commitment settings for commitment-based offers.
   */
  export interface Schema$GoogleCloudChannelV1alpha1CommitmentSettings {
    /**
     * Output only. Commitment end timestamp.
     */
    endTime?: string | null;
    /**
     * Optional. Renewal settings applicable for a commitment-based Offer.
     */
    renewalSettings?: Schema$GoogleCloudChannelV1alpha1RenewalSettings;
    /**
     * Output only. Commitment start timestamp.
     */
    startTime?: string | null;
  }
  /**
   * Represents Pub/Sub message content describing customer update.
   */
  export interface Schema$GoogleCloudChannelV1alpha1CustomerEvent {
    /**
     * Resource name of the customer. Format: accounts/{account_id\}/customers/{customer_id\}
     */
    customer?: string | null;
    /**
     * Type of event which happened on the customer.
     */
    eventType?: string | null;
  }
  /**
   * An entitlement is a representation of a customer's ability to use a service.
   */
  export interface Schema$GoogleCloudChannelV1alpha1Entitlement {
    /**
     * The current number of users that are assigned a license for the product defined in provisioned_service.skuId. Read-only. Deprecated: Use `parameters` instead.
     */
    assignedUnits?: number | null;
    /**
     * Association information to other entitlements.
     */
    associationInfo?: Schema$GoogleCloudChannelV1alpha1AssociationInfo;
    /**
     * Cloud Identity ID of a channel partner who will be the direct reseller for the customer's order. This field is generally used in 2-tier ordering, where the order is placed by a top-level distributor on behalf of their channel partner or reseller. Required for distributors. Deprecated: `channel_partner_id` has been moved to the Customer.
     */
    channelPartnerId?: string | null;
    /**
     * Commitment settings for a commitment-based Offer. Required for commitment based offers.
     */
    commitmentSettings?: Schema$GoogleCloudChannelV1alpha1CommitmentSettings;
    /**
     * Output only. The time at which the entitlement is created.
     */
    createTime?: string | null;
    /**
     * Maximum number of units for a non commitment-based Offer, such as Flexible, Trial or Free entitlements. For commitment-based entitlements, this is a read-only field, which only the internal support team can update. Deprecated: Use `parameters` instead.
     */
    maxUnits?: number | null;
    /**
     * Output only. Resource name of an entitlement in the form: accounts/{account_id\}/customers/{customer_id\}/entitlements/{entitlement_id\}.
     */
    name?: string | null;
    /**
     * Number of units for a commitment-based Offer. For example, for seat-based Offers, this would be the number of seats; for license-based Offers, this would be the number of licenses. Required for creating commitment-based Offers. Deprecated: Use `parameters` instead.
     */
    numUnits?: number | null;
    /**
     * Required. The offer resource name for which the entitlement is to be created. Takes the form: accounts/{account_id\}/offers/{offer_id\}.
     */
    offer?: string | null;
    /**
     * Extended entitlement parameters. When creating an entitlement, valid parameter names and values are defined in the Offer.parameter_definitions. The response may include the following output-only Parameters: - assigned_units: The number of licenses assigned to users. - max_units: The maximum assignable units for a flexible offer. - num_units: The total commitment for commitment-based offers.
     */
    parameters?: Schema$GoogleCloudChannelV1alpha1Parameter[];
    /**
     * Output only. Service provisioning details for the entitlement.
     */
    provisionedService?: Schema$GoogleCloudChannelV1alpha1ProvisionedService;
    /**
     * Output only. Current provisioning state of the entitlement.
     */
    provisioningState?: string | null;
    /**
     * Optional. This purchase order (PO) information is for resellers to use for their company tracking usage. If a purchaseOrderId value is given, it appears in the API responses and shows up in the invoice. The property accepts up to 80 plain text characters.
     */
    purchaseOrderId?: string | null;
    /**
     * Output only. Enumerable of all current suspension reasons for an entitlement.
     */
    suspensionReasons?: string[] | null;
    /**
     * Output only. Settings for trial offers.
     */
    trialSettings?: Schema$GoogleCloudChannelV1alpha1TrialSettings;
    /**
     * Output only. The time at which the entitlement is updated.
     */
    updateTime?: string | null;
  }
  /**
   * Represents Pub/Sub message content describing entitlement update.
   */
  export interface Schema$GoogleCloudChannelV1alpha1EntitlementEvent {
    /**
     * Resource name of an entitlement of the form: accounts/{account_id\}/customers/{customer_id\}/entitlements/{entitlement_id\}
     */
    entitlement?: string | null;
    /**
     * Type of event which happened on the entitlement.
     */
    eventType?: string | null;
  }
  /**
   * Provides contextual information about a google.longrunning.Operation.
   */
  export interface Schema$GoogleCloudChannelV1alpha1OperationMetadata {
    /**
     * The RPC that initiated this Long Running Operation.
     */
    operationType?: string | null;
  }
  /**
   * Definition for extended entitlement parameters.
   */
  export interface Schema$GoogleCloudChannelV1alpha1Parameter {
    /**
     * Output only. Specifies whether this parameter is allowed to be changed. For example, for a Google Workspace Business Starter entitlement in commitment plan, num_units is editable when entitlement is active.
     */
    editable?: boolean | null;
    /**
     * Name of the parameter.
     */
    name?: string | null;
    /**
     * Value of the parameter.
     */
    value?: Schema$GoogleCloudChannelV1alpha1Value;
  }
  /**
   * Represents period in days/months/years.
   */
  export interface Schema$GoogleCloudChannelV1alpha1Period {
    /**
     * Total duration of Period Type defined.
     */
    duration?: number | null;
    /**
     * Period Type.
     */
    periodType?: string | null;
  }
  /**
   * Service provisioned for an entitlement.
   */
  export interface Schema$GoogleCloudChannelV1alpha1ProvisionedService {
    /**
     * Output only. The product pertaining to the provisioning resource as specified in the Offer.
     */
    productId?: string | null;
    /**
     * Output only. Provisioning ID of the entitlement. For Google Workspace, this would be the underlying Subscription ID.
     */
    provisioningId?: string | null;
    /**
     * Output only. The SKU pertaining to the provisioning resource as specified in the Offer.
     */
    skuId?: string | null;
  }
  /**
   * Renewal settings for renewable Offers.
   */
  export interface Schema$GoogleCloudChannelV1alpha1RenewalSettings {
    /**
     * If true, disables commitment-based offer on renewal and switches to flexible or pay as you go. Deprecated: Use `payment_plan` instead.
     */
    disableCommitment?: boolean | null;
    /**
     * If false, the plan will be completed at the end date.
     */
    enableRenewal?: boolean | null;
    /**
     * Describes how frequently the reseller will be billed, such as once per month.
     */
    paymentCycle?: Schema$GoogleCloudChannelV1alpha1Period;
    /**
     * Set if enable_renewal=true. Deprecated: Use `payment_cycle` instead.
     */
    paymentOption?: string | null;
    /**
     * Describes how a reseller will be billed.
     */
    paymentPlan?: string | null;
    /**
     * If true and enable_renewal = true, the unit (for example seats or licenses) will be set to the number of active units at renewal time.
     */
    resizeUnitCount?: boolean | null;
  }
  /**
   * Represents information which resellers will get as part of notification from Cloud Pub/Sub.
   */
  export interface Schema$GoogleCloudChannelV1alpha1SubscriberEvent {
    /**
     * Customer event send as part of Pub/Sub event to partners.
     */
    customerEvent?: Schema$GoogleCloudChannelV1alpha1CustomerEvent;
    /**
     * Entitlement event send as part of Pub/Sub event to partners.
     */
    entitlementEvent?: Schema$GoogleCloudChannelV1alpha1EntitlementEvent;
  }
  /**
   * Response message for CloudChannelService.TransferEntitlements. This is put in the response field of google.longrunning.Operation.
   */
  export interface Schema$GoogleCloudChannelV1alpha1TransferEntitlementsResponse {
    /**
     * The transferred entitlements.
     */
    entitlements?: Schema$GoogleCloudChannelV1alpha1Entitlement[];
  }
  /**
   * Settings for trial offers.
   */
  export interface Schema$GoogleCloudChannelV1alpha1TrialSettings {
    /**
     * Date when the trial ends. The value is in milliseconds using the UNIX Epoch format. See an example [Epoch converter](https://www.epochconverter.com).
     */
    endTime?: string | null;
    /**
     * Determines if the entitlement is in a trial or not: * `true` - The entitlement is in trial. * `false` - The entitlement is not in trial.
     */
    trial?: boolean | null;
  }
  /**
   * Data type and value of a parameter.
   */
  export interface Schema$GoogleCloudChannelV1alpha1Value {
    /**
     * Represents a boolean value.
     */
    boolValue?: boolean | null;
    /**
     * Represents a double value.
     */
    doubleValue?: number | null;
    /**
     * Represents an int64 value.
     */
    int64Value?: string | null;
    /**
     * Represents an 'Any' proto value.
     */
    protoValue?: {[key: string]: any} | null;
    /**
     * Represents a string value.
     */
    stringValue?: string | null;
  }
  /**
   * Association links that an entitlement has to other entitlements.
   */
  export interface Schema$GoogleCloudChannelV1AssociationInfo {
    /**
     * The name of the base entitlement, for which this entitlement is an add-on.
     */
    baseEntitlement?: string | null;
  }
  /**
   * Request message for CloudChannelService.CancelEntitlement.
   */
  export interface Schema$GoogleCloudChannelV1CancelEntitlementRequest {
    /**
     * Optional. You can specify an optional unique request ID, and if you need to retry your request, the server will know to ignore the request if it's complete. For example, you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if it received the original operation with the same request ID. If it did, it will ignore the second request. The request ID must be a valid [UUID](https://tools.ietf.org/html/rfc4122) with the exception that zero UUID is not supported (`00000000-0000-0000-0000-000000000000`).
     */
    requestId?: string | null;
  }
  /**
   * Request message for CloudChannelService.ChangeOffer.
   */
  export interface Schema$GoogleCloudChannelV1ChangeOfferRequest {
    /**
     * Required. New Offer. Format: accounts/{account_id\}/offers/{offer_id\}.
     */
    offer?: string | null;
    /**
     * Optional. Parameters needed to purchase the Offer. To view the available Parameters refer to the Offer.parameter_definitions from the desired offer.
     */
    parameters?: Schema$GoogleCloudChannelV1Parameter[];
    /**
     * Optional. Purchase order id provided by the reseller.
     */
    purchaseOrderId?: string | null;
    /**
     * Optional. You can specify an optional unique request ID, and if you need to retry your request, the server will know to ignore the request if it's complete. For example, you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if it received the original operation with the same request ID. If it did, it will ignore the second request. The request ID must be a valid [UUID](https://tools.ietf.org/html/rfc4122) with the exception that zero UUID is not supported (`00000000-0000-0000-0000-000000000000`).
     */
    requestId?: string | null;
  }
  /**
   * Request message for CloudChannelService.ChangeParametersRequest.
   */
  export interface Schema$GoogleCloudChannelV1ChangeParametersRequest {
    /**
     * Required. Entitlement parameters to update. You can only change editable parameters. To view the available Parameters for a request, refer to the Offer.parameter_definitions from the desired offer.
     */
    parameters?: Schema$GoogleCloudChannelV1Parameter[];
    /**
     * Optional. Purchase order ID provided by the reseller.
     */
    purchaseOrderId?: string | null;
    /**
     * Optional. You can specify an optional unique request ID, and if you need to retry your request, the server will know to ignore the request if it's complete. For example, you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if it received the original operation with the same request ID. If it did, it will ignore the second request. The request ID must be a valid [UUID](https://tools.ietf.org/html/rfc4122) with the exception that zero UUID is not supported (`00000000-0000-0000-0000-000000000000`).
     */
    requestId?: string | null;
  }
  /**
   * Request message for CloudChannelService.ChangeRenewalSettings.
   */
  export interface Schema$GoogleCloudChannelV1ChangeRenewalSettingsRequest {
    /**
     * Required. New renewal settings.
     */
    renewalSettings?: Schema$GoogleCloudChannelV1RenewalSettings;
    /**
     * Optional. You can specify an optional unique request ID, and if you need to retry your request, the server will know to ignore the request if it's complete. For example, you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if it received the original operation with the same request ID. If it did, it will ignore the second request. The request ID must be a valid [UUID](https://tools.ietf.org/html/rfc4122) with the exception that zero UUID is not supported (`00000000-0000-0000-0000-000000000000`).
     */
    requestId?: string | null;
  }
  /**
   * Entity representing a link between distributors and their indirect resellers in an n-tier resale channel.
   */
  export interface Schema$GoogleCloudChannelV1ChannelPartnerLink {
    /**
     * Output only. Cloud Identity info of the channel partner (IR).
     */
    channelPartnerCloudIdentityInfo?: Schema$GoogleCloudChannelV1CloudIdentityInfo;
    /**
     * Output only. Timestamp of when the channel partner link is created.
     */
    createTime?: string | null;
    /**
     * Output only. URI of the web page where partner accepts the link invitation.
     */
    inviteLinkUri?: string | null;
    /**
     * Required. State of the channel partner link.
     */
    linkState?: string | null;
    /**
     * Output only. Resource name for the channel partner link, in the format accounts/{account_id\}/channelPartnerLinks/{id\}.
     */
    name?: string | null;
    /**
     * Output only. Public identifier that a customer must use to generate a transfer token to move to this distributor-reseller combination.
     */
    publicId?: string | null;
    /**
     * Required. Cloud Identity ID of the linked reseller.
     */
    resellerCloudIdentityId?: string | null;
    /**
     * Output only. Timestamp of when the channel partner link is updated.
     */
    updateTime?: string | null;
  }
  /**
   * Request message for CloudChannelService.CheckCloudIdentityAccountsExist.
   */
  export interface Schema$GoogleCloudChannelV1CheckCloudIdentityAccountsExistRequest {
    /**
     * Required. Domain to fetch for Cloud Identity account customer.
     */
    domain?: string | null;
  }
  /**
   * Response message for CloudChannelService.CheckCloudIdentityAccountsExist.
   */
  export interface Schema$GoogleCloudChannelV1CheckCloudIdentityAccountsExistResponse {
    /**
     * The Cloud Identity accounts associated with the domain.
     */
    cloudIdentityAccounts?: Schema$GoogleCloudChannelV1CloudIdentityCustomerAccount[];
  }
  /**
   * Entity representing a Cloud Identity account that may be associated with a Channel Services API partner.
   */
  export interface Schema$GoogleCloudChannelV1CloudIdentityCustomerAccount {
    /**
     * If existing = true, the Cloud Identity ID of the customer.
     */
    customerCloudIdentityId?: string | null;
    /**
     * If owned = true, the name of the customer that owns the Cloud Identity account. Customer_name uses the format: accounts/{account_id\}/customers/{customer_id\}
     */
    customerName?: string | null;
    /**
     * Returns true if a Cloud Identity account exists for a specific domain.
     */
    existing?: boolean | null;
    /**
     * Returns true if the Cloud Identity account is associated with a customer of the Channel Services partner.
     */
    owned?: boolean | null;
  }
  /**
   * Cloud Identity information for the Cloud Channel Customer.
   */
  export interface Schema$GoogleCloudChannelV1CloudIdentityInfo {
    /**
     * Output only. URI of Customer's Admin console dashboard.
     */
    adminConsoleUri?: string | null;
    /**
     * The alternate email.
     */
    alternateEmail?: string | null;
    /**
     * CustomerType indicates verification type needed for using services.
     */
    customerType?: string | null;
    /**
     * Edu information about the customer.
     */
    eduData?: Schema$GoogleCloudChannelV1EduData;
    /**
     * Output only. Whether the domain is verified. This field is not returned for a Customer's cloud_identity_info resource. Partners can use the domains.get() method of the Workspace SDK's Directory API, or listen to the PRIMARY_DOMAIN_VERIFIED Pub/Sub event in to track domain verification of their resolve Workspace customers.
     */
    isDomainVerified?: boolean | null;
    /**
     * Language code.
     */
    languageCode?: string | null;
    /**
     * Phone number associated with the Cloud Identity.
     */
    phoneNumber?: string | null;
    /**
     * Output only. The primary domain name.
     */
    primaryDomain?: string | null;
  }
  /**
   * Commitment settings for commitment-based offers.
   */
  export interface Schema$GoogleCloudChannelV1CommitmentSettings {
    /**
     * Output only. Commitment end timestamp.
     */
    endTime?: string | null;
    /**
     * Optional. Renewal settings applicable for a commitment-based Offer.
     */
    renewalSettings?: Schema$GoogleCloudChannelV1RenewalSettings;
    /**
     * Output only. Commitment start timestamp.
     */
    startTime?: string | null;
  }
  /**
   * Represents the constraints for buying the Offer.
   */
  export interface Schema$GoogleCloudChannelV1Constraints {
    /**
     * Represents constraints required to purchase the Offer for a customer.
     */
    customerConstraints?: Schema$GoogleCloudChannelV1CustomerConstraints;
  }
  /**
   * Contact information for a customer account.
   */
  export interface Schema$GoogleCloudChannelV1ContactInfo {
    /**
     * Output only. The customer account contact's display name, formatted as a combination of the customer's first and last name.
     */
    displayName?: string | null;
    /**
     * The customer account's contact email. Required for entitlements that create admin.google.com accounts, and serves as the customer's username for those accounts. Use this email to invite Team customers.
     */
    email?: string | null;
    /**
     * The customer account contact's first name. Optional for Team customers.
     */
    firstName?: string | null;
    /**
     * The customer account contact's last name. Optional for Team customers.
     */
    lastName?: string | null;
    /**
     * The customer account's contact phone number.
     */
    phone?: string | null;
    /**
     * Optional. The customer account contact's job title.
     */
    title?: string | null;
  }
  /**
   * Request message for CloudChannelService.CreateEntitlement
   */
  export interface Schema$GoogleCloudChannelV1CreateEntitlementRequest {
    /**
     * Required. The entitlement to create.
     */
    entitlement?: Schema$GoogleCloudChannelV1Entitlement;
    /**
     * Optional. You can specify an optional unique request ID, and if you need to retry your request, the server will know to ignore the request if it's complete. For example, you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if it received the original operation with the same request ID. If it did, it will ignore the second request. The request ID must be a valid [UUID](https://tools.ietf.org/html/rfc4122) with the exception that zero UUID is not supported (`00000000-0000-0000-0000-000000000000`).
     */
    requestId?: string | null;
  }
  /**
   * Entity representing a customer of a reseller or distributor.
   */
  export interface Schema$GoogleCloudChannelV1Customer {
    /**
     * Secondary contact email. You need to provide an alternate email to create different domains if a primary contact email already exists. Users will receive a notification with credentials when you create an admin.google.com account. Secondary emails are also recovery email addresses. Alternate emails are optional when you create Team customers.
     */
    alternateEmail?: string | null;
    /**
     * Cloud Identity ID of the customer's channel partner. Populated only if a channel partner exists for this customer.
     */
    channelPartnerId?: string | null;
    /**
     * Output only. The customer's Cloud Identity ID if the customer has a Cloud Identity resource.
     */
    cloudIdentityId?: string | null;
    /**
     * Output only. Cloud Identity information for the customer. Populated only if a Cloud Identity account exists for this customer.
     */
    cloudIdentityInfo?: Schema$GoogleCloudChannelV1CloudIdentityInfo;
    /**
     * Output only. Time when the customer was created.
     */
    createTime?: string | null;
    /**
     * Required. The customer's primary domain. Must match the primary contact email's domain.
     */
    domain?: string | null;
    /**
     * Optional. The BCP-47 language code, such as "en-US" or "sr-Latn". For more information, see https://www.unicode.org/reports/tr35/#Unicode_locale_identifier.
     */
    languageCode?: string | null;
    /**
     * Output only. Resource name of the customer. Format: accounts/{account_id\}/customers/{customer_id\}
     */
    name?: string | null;
    /**
     * Required. Name of the organization that the customer entity represents.
     */
    orgDisplayName?: string | null;
    /**
     * Required. The organization address for the customer. To enforce US laws and embargoes, we require a region and zip code. You must provide valid addresses for every customer. To set the customer's language, use the Customer-level language code.
     */
    orgPostalAddress?: Schema$GoogleTypePostalAddress;
    /**
     * Primary contact info.
     */
    primaryContactInfo?: Schema$GoogleCloudChannelV1ContactInfo;
    /**
     * Output only. Time when the customer was updated.
     */
    updateTime?: string | null;
  }
  /**
   * Represents constraints required to purchase the Offer for a customer.
   */
  export interface Schema$GoogleCloudChannelV1CustomerConstraints {
    /**
     * Allowed Customer Type.
     */
    allowedCustomerTypes?: string[] | null;
    /**
     * Allowed geographical regions of the customer.
     */
    allowedRegions?: string[] | null;
    /**
     * Allowed Promotional Order Type. Present for Promotional offers.
     */
    promotionalOrderTypes?: string[] | null;
  }
  /**
   * Represents Pub/Sub message content describing customer update.
   */
  export interface Schema$GoogleCloudChannelV1CustomerEvent {
    /**
     * Resource name of the customer. Format: accounts/{account_id\}/customers/{customer_id\}
     */
    customer?: string | null;
    /**
     * Type of event which happened on the customer.
     */
    eventType?: string | null;
  }
  /**
   * Required Edu Attributes
   */
  export interface Schema$GoogleCloudChannelV1EduData {
    /**
     * Size of the institute.
     */
    instituteSize?: string | null;
    /**
     * Designated institute type of customer.
     */
    instituteType?: string | null;
    /**
     * Web address for the edu customer's institution.
     */
    website?: string | null;
  }
  /**
   * An entitlement is a representation of a customer's ability to use a service.
   */
  export interface Schema$GoogleCloudChannelV1Entitlement {
    /**
     * Association information to other entitlements.
     */
    associationInfo?: Schema$GoogleCloudChannelV1AssociationInfo;
    /**
     * Commitment settings for a commitment-based Offer. Required for commitment based offers.
     */
    commitmentSettings?: Schema$GoogleCloudChannelV1CommitmentSettings;
    /**
     * Output only. The time at which the entitlement is created.
     */
    createTime?: string | null;
    /**
     * Output only. Resource name of an entitlement in the form: accounts/{account_id\}/customers/{customer_id\}/entitlements/{entitlement_id\}.
     */
    name?: string | null;
    /**
     * Required. The offer resource name for which the entitlement is to be created. Takes the form: accounts/{account_id\}/offers/{offer_id\}.
     */
    offer?: string | null;
    /**
     * Extended entitlement parameters. When creating an entitlement, valid parameter names and values are defined in the Offer.parameter_definitions. The response may include the following output-only Parameters: - assigned_units: The number of licenses assigned to users. - max_units: The maximum assignable units for a flexible offer. - num_units: The total commitment for commitment-based offers.
     */
    parameters?: Schema$GoogleCloudChannelV1Parameter[];
    /**
     * Output only. Service provisioning details for the entitlement.
     */
    provisionedService?: Schema$GoogleCloudChannelV1ProvisionedService;
    /**
     * Output only. Current provisioning state of the entitlement.
     */
    provisioningState?: string | null;
    /**
     * Optional. This purchase order (PO) information is for resellers to use for their company tracking usage. If a purchaseOrderId value is given, it appears in the API responses and shows up in the invoice. The property accepts up to 80 plain text characters.
     */
    purchaseOrderId?: string | null;
    /**
     * Output only. Enumerable of all current suspension reasons for an entitlement.
     */
    suspensionReasons?: string[] | null;
    /**
     * Output only. Settings for trial offers.
     */
    trialSettings?: Schema$GoogleCloudChannelV1TrialSettings;
    /**
     * Output only. The time at which the entitlement is updated.
     */
    updateTime?: string | null;
  }
  /**
   * Represents Pub/Sub message content describing entitlement update.
   */
  export interface Schema$GoogleCloudChannelV1EntitlementEvent {
    /**
     * Resource name of an entitlement of the form: accounts/{account_id\}/customers/{customer_id\}/entitlements/{entitlement_id\}
     */
    entitlement?: string | null;
    /**
     * Type of event which happened on the entitlement.
     */
    eventType?: string | null;
  }
  /**
   * Request message for CloudChannelService.ImportCustomer
   */
  export interface Schema$GoogleCloudChannelV1ImportCustomerRequest {
    /**
     * Optional. The super admin of the resold customer generates this token to authorize a reseller to access their Cloud Identity and purchase entitlements on their behalf. You can omit this token after authorization. See https://support.google.com/a/answer/7643790 for more details.
     */
    authToken?: string | null;
    /**
     * Optional. Cloud Identity ID of a channel partner who will be the direct reseller for the customer's order. This field is required for 2-tier transfer scenarios and can be provided via the request Parent binding as well.
     */
    channelPartnerId?: string | null;
    /**
     * Required. Customer's Cloud Identity ID
     */
    cloudIdentityId?: string | null;
    /**
     * Optional. Specifies the customer that will receive imported Cloud Identity information. Format: accounts/{account_id\}/customers/{customer_id\}
     */
    customer?: string | null;
    /**
     * Required. Customer domain.
     */
    domain?: string | null;
    /**
     * Required. Choose to overwrite an existing customer if found. This must be set to true if there is an existing customer with a conflicting region code or domain.
     */
    overwriteIfExists?: boolean | null;
  }
  /**
   * Response message for CloudChannelService.ListChannelPartnerLinks.
   */
  export interface Schema$GoogleCloudChannelV1ListChannelPartnerLinksResponse {
    /**
     * The Channel partner links for a reseller.
     */
    channelPartnerLinks?: Schema$GoogleCloudChannelV1ChannelPartnerLink[];
    /**
     * A token to retrieve the next page of results. Pass to ListChannelPartnerLinksRequest.page_token to obtain that page.
     */
    nextPageToken?: string | null;
  }
  /**
   * Response message for CloudChannelService.ListCustomers.
   */
  export interface Schema$GoogleCloudChannelV1ListCustomersResponse {
    /**
     * The customers belonging to a reseller or distributor.
     */
    customers?: Schema$GoogleCloudChannelV1Customer[];
    /**
     * A token to retrieve the next page of results. Pass to ListCustomersRequest.page_token to obtain that page.
     */
    nextPageToken?: string | null;
  }
  /**
   * Response message for CloudChannelService.ListEntitlements.
   */
  export interface Schema$GoogleCloudChannelV1ListEntitlementsResponse {
    /**
     * The reseller customer's entitlements.
     */
    entitlements?: Schema$GoogleCloudChannelV1Entitlement[];
    /**
     * A token to list the next page of results. Pass to ListEntitlementsRequest.page_token to obtain that page.
     */
    nextPageToken?: string | null;
  }
  /**
   * Response message for ListOffers.
   */
  export interface Schema$GoogleCloudChannelV1ListOffersResponse {
    /**
     * A token to retrieve the next page of results.
     */
    nextPageToken?: string | null;
    /**
     * The list of Offers requested.
     */
    offers?: Schema$GoogleCloudChannelV1Offer[];
  }
  /**
   * Response message for ListProducts.
   */
  export interface Schema$GoogleCloudChannelV1ListProductsResponse {
    /**
     * A token to retrieve the next page of results.
     */
    nextPageToken?: string | null;
    /**
     * List of Products requested.
     */
    products?: Schema$GoogleCloudChannelV1Product[];
  }
  /**
   * Response message for ListPurchasableOffers.
   */
  export interface Schema$GoogleCloudChannelV1ListPurchasableOffersResponse {
    /**
     * A token to retrieve the next page of results.
     */
    nextPageToken?: string | null;
    /**
     * The list of Offers requested.
     */
    purchasableOffers?: Schema$GoogleCloudChannelV1PurchasableOffer[];
  }
  /**
   * Response message for ListPurchasableSkus.
   */
  export interface Schema$GoogleCloudChannelV1ListPurchasableSkusResponse {
    /**
     * A token to retrieve the next page of results.
     */
    nextPageToken?: string | null;
    /**
     * The list of SKUs requested.
     */
    purchasableSkus?: Schema$GoogleCloudChannelV1PurchasableSku[];
  }
  /**
   * Response message for ListSkus.
   */
  export interface Schema$GoogleCloudChannelV1ListSkusResponse {
    /**
     * A token to retrieve the next page of results.
     */
    nextPageToken?: string | null;
    /**
     * The list of SKUs requested.
     */
    skus?: Schema$GoogleCloudChannelV1Sku[];
  }
  /**
   * Response Message for ListSubscribers.
   */
  export interface Schema$GoogleCloudChannelV1ListSubscribersResponse {
    /**
     * A token that can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages.
     */
    nextPageToken?: string | null;
    /**
     * List of service accounts which have subscriber access to the topic.
     */
    serviceAccounts?: string[] | null;
    /**
     * Name of the topic registered with the reseller.
     */
    topic?: string | null;
  }
  /**
   * Request message for CloudChannelService.ListTransferableOffers
   */
  export interface Schema$GoogleCloudChannelV1ListTransferableOffersRequest {
    /**
     * Customer's Cloud Identity ID
     */
    cloudIdentityId?: string | null;
    /**
     * A reseller should create a customer and use the resource name of that customer here.
     */
    customerName?: string | null;
    /**
     * The BCP-47 language code. For example, "en-US". The response will localize in the corresponding language code, if specified. The default value is "en-US".
     */
    languageCode?: string | null;
    /**
     * Requested page size. Server might return fewer results than requested. If unspecified, returns at most 100 offers. The maximum value is 1000; the server will coerce values above 1000.
     */
    pageSize?: number | null;
    /**
     * A token for a page of results other than the first page. Obtained using ListTransferableOffersResponse.next_page_token of the previous CloudChannelService.ListTransferableOffers call.
     */
    pageToken?: string | null;
    /**
     * Required. The SKU to look up Offers for.
     */
    sku?: string | null;
  }
  /**
   * Response message for CloudChannelService.ListTransferableOffers.
   */
  export interface Schema$GoogleCloudChannelV1ListTransferableOffersResponse {
    /**
     * A token to retrieve the next page of results. Pass to ListTransferableOffersRequest.page_token to obtain that page.
     */
    nextPageToken?: string | null;
    /**
     * Information about Offers for a customer that can be used for transfer.
     */
    transferableOffers?: Schema$GoogleCloudChannelV1TransferableOffer[];
  }
  /**
   * Request message for CloudChannelService.ListTransferableSkus
   */
  export interface Schema$GoogleCloudChannelV1ListTransferableSkusRequest {
    /**
     * The super admin of the resold customer generates this token to authorize a reseller to access their Cloud Identity and purchase entitlements on their behalf. You can omit this token after authorization. See https://support.google.com/a/answer/7643790 for more details.
     */
    authToken?: string | null;
    /**
     * Customer's Cloud Identity ID
     */
    cloudIdentityId?: string | null;
    /**
     * A reseller is required to create a customer and use the resource name of the created customer here. Customer_name uses the format: accounts/{account_id\}/customers/{customer_id\}
     */
    customerName?: string | null;
    /**
     * The BCP-47 language code. For example, "en-US". The response will localize in the corresponding language code, if specified. The default value is "en-US". Optional.
     */
    languageCode?: string | null;
    /**
     * The requested page size. Server might return fewer results than requested. If unspecified, returns at most 100 SKUs. The maximum value is 1000; the server will coerce values above 1000. Optional.
     */
    pageSize?: number | null;
    /**
     * A token for a page of results other than the first page. Obtained using ListTransferableSkusResponse.next_page_token of the previous CloudChannelService.ListTransferableSkus call. Optional.
     */
    pageToken?: string | null;
  }
  /**
   * Response message for CloudChannelService.ListTransferableSkus.
   */
  export interface Schema$GoogleCloudChannelV1ListTransferableSkusResponse {
    /**
     * A token to retrieve the next page of results. Pass to ListTransferableSkusRequest.page_token to obtain that page.
     */
    nextPageToken?: string | null;
    /**
     * Information about existing SKUs for a customer that needs a transfer.
     */
    transferableSkus?: Schema$GoogleCloudChannelV1TransferableSku[];
  }
  /**
   * Represents the marketing information for a Product, SKU or Offer.
   */
  export interface Schema$GoogleCloudChannelV1MarketingInfo {
    /**
     * Default logo.
     */
    defaultLogo?: Schema$GoogleCloudChannelV1Media;
    /**
     * Human readable description. Description can contain HTML.
     */
    description?: string | null;
    /**
     * Human readable name.
     */
    displayName?: string | null;
  }
  /**
   * Represents media information.
   */
  export interface Schema$GoogleCloudChannelV1Media {
    /**
     * URL of the media.
     */
    content?: string | null;
    /**
     * Title of the media.
     */
    title?: string | null;
    /**
     * Type of the media.
     */
    type?: string | null;
  }
  /**
   * Represents an offer made to resellers for purchase. An offer is associated with a Sku, has a plan for payment, a price, and defines the constraints for buying.
   */
  export interface Schema$GoogleCloudChannelV1Offer {
    /**
     * Constraints on transacting the Offer.
     */
    constraints?: Schema$GoogleCloudChannelV1Constraints;
    /**
     * Output only. End of the Offer validity time.
     */
    endTime?: string | null;
    /**
     * Marketing information for the Offer.
     */
    marketingInfo?: Schema$GoogleCloudChannelV1MarketingInfo;
    /**
     * Resource Name of the Offer. Format: accounts/{account_id\}/offers/{offer_id\}
     */
    name?: string | null;
    /**
     * Parameters required to use current Offer to purchase.
     */
    parameterDefinitions?: Schema$GoogleCloudChannelV1ParameterDefinition[];
    /**
     * Describes the payment plan for the Offer.
     */
    plan?: Schema$GoogleCloudChannelV1Plan;
    /**
     * Price for each monetizable resource type.
     */
    priceByResources?: Schema$GoogleCloudChannelV1PriceByResource[];
    /**
     * SKU the offer is associated with.
     */
    sku?: Schema$GoogleCloudChannelV1Sku;
    /**
     * Start of the Offer validity time.
     */
    startTime?: string | null;
  }
  /**
   * Provides contextual information about a google.longrunning.Operation.
   */
  export interface Schema$GoogleCloudChannelV1OperationMetadata {
    /**
     * The RPC that initiated this Long Running Operation.
     */
    operationType?: string | null;
  }
  /**
   * Definition for extended entitlement parameters.
   */
  export interface Schema$GoogleCloudChannelV1Parameter {
    /**
     * Output only. Specifies whether this parameter is allowed to be changed. For example, for a Google Workspace Business Starter entitlement in commitment plan, num_units is editable when entitlement is active.
     */
    editable?: boolean | null;
    /**
     * Name of the parameter.
     */
    name?: string | null;
    /**
     * Value of the parameter.
     */
    value?: Schema$GoogleCloudChannelV1Value;
  }
  /**
   * Parameter's definition. Specifies what parameter is required to use the current Offer to purchase.
   */
  export interface Schema$GoogleCloudChannelV1ParameterDefinition {
    /**
     * If not empty, parameter values must be drawn from this list. For example, [us-west1, us-west2, ...] Applicable to STRING parameter type.
     */
    allowedValues?: Schema$GoogleCloudChannelV1Value[];
    /**
     * Maximum value of the parameter, if applicable. Inclusive. For example, maximum seats when purchasing Google Workspace Business Standard. Applicable to INT64 and DOUBLE parameter types.
     */
    maxValue?: Schema$GoogleCloudChannelV1Value;
    /**
     * Minimal value of the parameter, if applicable. Inclusive. For example, minimal commitment when purchasing Anthos is 0.01. Applicable to INT64 and DOUBLE parameter types.
     */
    minValue?: Schema$GoogleCloudChannelV1Value;
    /**
     * Name of the parameter.
     */
    name?: string | null;
    /**
     * If set to true, parameter is optional to purchase this Offer.
     */
    optional?: boolean | null;
    /**
     * Data type of the parameter. Minimal value, Maximum value and allowed values will use specified data type here.
     */
    parameterType?: string | null;
  }
  /**
   * Represents period in days/months/years.
   */
  export interface Schema$GoogleCloudChannelV1Period {
    /**
     * Total duration of Period Type defined.
     */
    duration?: number | null;
    /**
     * Period Type.
     */
    periodType?: string | null;
  }
  /**
   * The payment plan for the Offer. Describes how to make a payment.
   */
  export interface Schema$GoogleCloudChannelV1Plan {
    /**
     * Reseller Billing account to charge after an offer transaction. Only present for Google Cloud Platform offers.
     */
    billingAccount?: string | null;
    /**
     * Describes how frequently the reseller will be billed, such as once per month.
     */
    paymentCycle?: Schema$GoogleCloudChannelV1Period;
    /**
     * Describes how a reseller will be billed.
     */
    paymentPlan?: string | null;
    /**
     * Specifies when the payment needs to happen.
     */
    paymentType?: string | null;
    /**
     * Present for Offers with a trial period. For trial-only Offers, a paid service needs to start before the trial period ends for continued service. For Regular Offers with a trial period, the regular pricing goes into effect when trial period ends, or if paid service is started before the end of the trial period.
     */
    trialPeriod?: Schema$GoogleCloudChannelV1Period;
  }
  /**
   * Represents the price of the Offer.
   */
  export interface Schema$GoogleCloudChannelV1Price {
    /**
     * Base price.
     */
    basePrice?: Schema$GoogleTypeMoney;
    /**
     * Discount percentage, represented as decimal. For example, a 20% discount will be represent as 0.2.
     */
    discount?: number | null;
    /**
     * Effective Price after applying the discounts.
     */
    effectivePrice?: Schema$GoogleTypeMoney;
    /**
     * Link to external price list, such as link to Google Voice rate card.
     */
    externalPriceUri?: string | null;
  }
  /**
   * Represents price by resource type.
   */
  export interface Schema$GoogleCloudChannelV1PriceByResource {
    /**
     * Price of the Offer. Present if there are no price phases.
     */
    price?: Schema$GoogleCloudChannelV1Price;
    /**
     * Specifies the price by time range.
     */
    pricePhases?: Schema$GoogleCloudChannelV1PricePhase[];
    /**
     * Resource Type. Example: SEAT
     */
    resourceType?: string | null;
  }
  /**
   * Specifies the price by the duration of months. For example, a 20% discount for the first six months, then a 10% discount starting on the seventh month.
   */
  export interface Schema$GoogleCloudChannelV1PricePhase {
    /**
     * Defines first period for the phase.
     */
    firstPeriod?: number | null;
    /**
     * Defines first period for the phase.
     */
    lastPeriod?: number | null;
    /**
     * Defines the phase period type.
     */
    periodType?: string | null;
    /**
     * Price of the phase. Present if there are no price tiers.
     */
    price?: Schema$GoogleCloudChannelV1Price;
    /**
     * Price by the resource tiers.
     */
    priceTiers?: Schema$GoogleCloudChannelV1PriceTier[];
  }
  /**
   * Defines price at resource tier level. For example, an offer with following definition : * Tier 1: Provide 25% discount for all seats between 1 and 25. * Tier 2: Provide 10% discount for all seats between 26 and 100. * Tier 3: Provide flat 15% discount for all seats above 100. Each of these tiers is represented as a PriceTier.
   */
  export interface Schema$GoogleCloudChannelV1PriceTier {
    /**
     * First resource for which the tier price applies.
     */
    firstResource?: number | null;
    /**
     * Last resource for which the tier price applies.
     */
    lastResource?: number | null;
    /**
     * Price of the tier.
     */
    price?: Schema$GoogleCloudChannelV1Price;
  }
  /**
   * A Product is the entity a customer uses when placing an order. For example, Google Workspace, Google Voice, etc.
   */
  export interface Schema$GoogleCloudChannelV1Product {
    /**
     * Marketing information for the product.
     */
    marketingInfo?: Schema$GoogleCloudChannelV1MarketingInfo;
    /**
     * Resource Name of the Product. Format: products/{product_id\}
     */
    name?: string | null;
  }
  /**
   * Request message for CloudChannelService.ProvisionCloudIdentity
   */
  export interface Schema$GoogleCloudChannelV1ProvisionCloudIdentityRequest {
    /**
     * CloudIdentity-specific customer information.
     */
    cloudIdentityInfo?: Schema$GoogleCloudChannelV1CloudIdentityInfo;
    /**
     * Admin user information.
     */
    user?: Schema$GoogleCloudChannelV1AdminUser;
    /**
     * Validate the request and preview the review, but do not post it.
     */
    validateOnly?: boolean | null;
  }
  /**
   * Service provisioned for an entitlement.
   */
  export interface Schema$GoogleCloudChannelV1ProvisionedService {
    /**
     * Output only. The product pertaining to the provisioning resource as specified in the Offer.
     */
    productId?: string | null;
    /**
     * Output only. Provisioning ID of the entitlement. For Google Workspace, this would be the underlying Subscription ID.
     */
    provisioningId?: string | null;
    /**
     * Output only. The SKU pertaining to the provisioning resource as specified in the Offer.
     */
    skuId?: string | null;
  }
  /**
   * Offer that you can purchase for a customer. This is used in the ListPurchasableOffer API response.
   */
  export interface Schema$GoogleCloudChannelV1PurchasableOffer {
    /**
     * Offer.
     */
    offer?: Schema$GoogleCloudChannelV1Offer;
  }
  /**
   * SKU that you can purchase. This is used in ListPurchasableSku API response.
   */
  export interface Schema$GoogleCloudChannelV1PurchasableSku {
    /**
     * SKU
     */
    sku?: Schema$GoogleCloudChannelV1Sku;
  }
  /**
   * Request Message for RegisterSubscriber.
   */
  export interface Schema$GoogleCloudChannelV1RegisterSubscriberRequest {
    /**
     * Required. Service account that provides subscriber access to the registered topic.
     */
    serviceAccount?: string | null;
  }
  /**
   * Response Message for RegisterSubscriber.
   */
  export interface Schema$GoogleCloudChannelV1RegisterSubscriberResponse {
    /**
     * Name of the topic the subscriber will listen to.
     */
    topic?: string | null;
  }
  /**
   * Renewal settings for renewable Offers.
   */
  export interface Schema$GoogleCloudChannelV1RenewalSettings {
    /**
     * If false, the plan will be completed at the end date.
     */
    enableRenewal?: boolean | null;
    /**
     * Describes how frequently the reseller will be billed, such as once per month.
     */
    paymentCycle?: Schema$GoogleCloudChannelV1Period;
    /**
     * Describes how a reseller will be billed.
     */
    paymentPlan?: string | null;
    /**
     * If true and enable_renewal = true, the unit (for example seats or licenses) will be set to the number of active units at renewal time.
     */
    resizeUnitCount?: boolean | null;
  }
  /**
   * Represents a product's purchasable Stock Keeping Unit (SKU). SKUs represent the different variations of the product. For example, Google Workspace Business Standard and Google Workspace Business Plus are Google Workspace product SKUs.
   */
  export interface Schema$GoogleCloudChannelV1Sku {
    /**
     * Marketing information for the SKU.
     */
    marketingInfo?: Schema$GoogleCloudChannelV1MarketingInfo;
    /**
     * Resource Name of the SKU. Format: products/{product_id\}/skus/{sku_id\}
     */
    name?: string | null;
    /**
     * Product the SKU is associated with.
     */
    product?: Schema$GoogleCloudChannelV1Product;
  }
  /**
   * Request message for CloudChannelService.StartPaidService.
   */
  export interface Schema$GoogleCloudChannelV1StartPaidServiceRequest {
    /**
     * Optional. You can specify an optional unique request ID, and if you need to retry your request, the server will know to ignore the request if it's complete. For example, you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if it received the original operation with the same request ID. If it did, it will ignore the second request. The request ID must be a valid [UUID](https://tools.ietf.org/html/rfc4122) with the exception that zero UUID is not supported (`00000000-0000-0000-0000-000000000000`).
     */
    requestId?: string | null;
  }
  /**
   * Represents information which resellers will get as part of notification from Cloud Pub/Sub.
   */
  export interface Schema$GoogleCloudChannelV1SubscriberEvent {
    /**
     * Customer event send as part of Pub/Sub event to partners.
     */
    customerEvent?: Schema$GoogleCloudChannelV1CustomerEvent;
    /**
     * Entitlement event send as part of Pub/Sub event to partners.
     */
    entitlementEvent?: Schema$GoogleCloudChannelV1EntitlementEvent;
  }
  /**
   * Request message for CloudChannelService.SuspendEntitlement.
   */
  export interface Schema$GoogleCloudChannelV1SuspendEntitlementRequest {
    /**
     * Optional. You can specify an optional unique request ID, and if you need to retry your request, the server will know to ignore the request if it's complete. For example, you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if it received the original operation with the same request ID. If it did, it will ignore the second request. The request ID must be a valid [UUID](https://tools.ietf.org/html/rfc4122) with the exception that zero UUID is not supported (`00000000-0000-0000-0000-000000000000`).
     */
    requestId?: string | null;
  }
  /**
   * TransferableOffer represents an Offer that can be used in Transfer. Read-only.
   */
  export interface Schema$GoogleCloudChannelV1TransferableOffer {
    /**
     * Offer with parameter constraints updated to allow the Transfer.
     */
    offer?: Schema$GoogleCloudChannelV1Offer;
  }
  /**
   * TransferableSku represents information a reseller needs to view existing provisioned services for a customer that they do not own. Read-only.
   */
  export interface Schema$GoogleCloudChannelV1TransferableSku {
    /**
     * Optional. The customer to transfer has an entitlement with the populated legacy SKU.
     */
    legacySku?: Schema$GoogleCloudChannelV1Sku;
    /**
     * The SKU pertaining to the provisioning resource as specified in the Offer.
     */
    sku?: Schema$GoogleCloudChannelV1Sku;
    /**
     * Describes the transfer eligibility of a SKU.
     */
    transferEligibility?: Schema$GoogleCloudChannelV1TransferEligibility;
  }
  /**
   * Specifies transfer eligibility of a SKU.
   */
  export interface Schema$GoogleCloudChannelV1TransferEligibility {
    /**
     * Localized description if reseller is not eligible to transfer the SKU.
     */
    description?: string | null;
    /**
     * Specified the reason for ineligibility.
     */
    ineligibilityReason?: string | null;
    /**
     * Whether reseller is eligible to transfer the SKU.
     */
    isEligible?: boolean | null;
  }
  /**
   * Request message for CloudChannelService.TransferEntitlements.
   */
  export interface Schema$GoogleCloudChannelV1TransferEntitlementsRequest {
    /**
     * The super admin of the resold customer generates this token to authorize a reseller to access their Cloud Identity and purchase entitlements on their behalf. You can omit this token after authorization. See https://support.google.com/a/answer/7643790 for more details.
     */
    authToken?: string | null;
    /**
     * Required. The new entitlements to create or transfer.
     */
    entitlements?: Schema$GoogleCloudChannelV1Entitlement[];
    /**
     * Optional. You can specify an optional unique request ID, and if you need to retry your request, the server will know to ignore the request if it's complete. For example, you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if it received the original operation with the same request ID. If it did, it will ignore the second request. The request ID must be a valid [UUID](https://tools.ietf.org/html/rfc4122) with the exception that zero UUID is not supported (`00000000-0000-0000-0000-000000000000`).
     */
    requestId?: string | null;
  }
  /**
   * Response message for CloudChannelService.TransferEntitlements. This is put in the response field of google.longrunning.Operation.
   */
  export interface Schema$GoogleCloudChannelV1TransferEntitlementsResponse {
    /**
     * The transferred entitlements.
     */
    entitlements?: Schema$GoogleCloudChannelV1Entitlement[];
  }
  /**
   * Request message for CloudChannelService.TransferEntitlementsToGoogle.
   */
  export interface Schema$GoogleCloudChannelV1TransferEntitlementsToGoogleRequest {
    /**
     * Required. The entitlements to transfer to Google.
     */
    entitlements?: Schema$GoogleCloudChannelV1Entitlement[];
    /**
     * Optional. You can specify an optional unique request ID, and if you need to retry your request, the server will know to ignore the request if it's complete. For example, you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if it received the original operation with the same request ID. If it did, it will ignore the second request. The request ID must be a valid [UUID](https://tools.ietf.org/html/rfc4122) with the exception that zero UUID is not supported (`00000000-0000-0000-0000-000000000000`).
     */
    requestId?: string | null;
  }
  /**
   * Settings for trial offers.
   */
  export interface Schema$GoogleCloudChannelV1TrialSettings {
    /**
     * Date when the trial ends. The value is in milliseconds using the UNIX Epoch format. See an example [Epoch converter](https://www.epochconverter.com).
     */
    endTime?: string | null;
    /**
     * Determines if the entitlement is in a trial or not: * `true` - The entitlement is in trial. * `false` - The entitlement is not in trial.
     */
    trial?: boolean | null;
  }
  /**
   * Request Message for UnregisterSubscriber.
   */
  export interface Schema$GoogleCloudChannelV1UnregisterSubscriberRequest {
    /**
     * Required. Service account to unregister from subscriber access to the topic.
     */
    serviceAccount?: string | null;
  }
  /**
   * Response Message for UnregisterSubscriber.
   */
  export interface Schema$GoogleCloudChannelV1UnregisterSubscriberResponse {
    /**
     * Name of the topic the service account subscriber access was removed from.
     */
    topic?: string | null;
  }
  /**
   * Request message for CloudChannelService.UpdateChannelPartnerLink
   */
  export interface Schema$GoogleCloudChannelV1UpdateChannelPartnerLinkRequest {
    /**
     * Required. The channel partner link to update. Only channel_partner_link.link_state is allowed for updates.
     */
    channelPartnerLink?: Schema$GoogleCloudChannelV1ChannelPartnerLink;
    /**
     * Required. The update mask that applies to the resource. The only allowable value for an update mask is channel_partner_link.link_state.
     */
    updateMask?: string | null;
  }
  /**
   * Data type and value of a parameter.
   */
  export interface Schema$GoogleCloudChannelV1Value {
    /**
     * Represents a boolean value.
     */
    boolValue?: boolean | null;
    /**
     * Represents a double value.
     */
    doubleValue?: number | null;
    /**
     * Represents an int64 value.
     */
    int64Value?: string | null;
    /**
     * Represents an 'Any' proto value.
     */
    protoValue?: {[key: string]: any} | null;
    /**
     * Represents a string value.
     */
    stringValue?: string | null;
  }
  /**
   * The request message for Operations.CancelOperation.
   */
  export interface Schema$GoogleLongrunningCancelOperationRequest {}
  /**
   * The response message for Operations.ListOperations.
   */
  export interface Schema$GoogleLongrunningListOperationsResponse {
    /**
     * The standard List next-page token.
     */
    nextPageToken?: string | null;
    /**
     * A list of operations that matches the specified filter in the request.
     */
    operations?: Schema$GoogleLongrunningOperation[];
  }
  /**
   * This resource represents a long-running operation that is the result of a network API call.
   */
  export interface Schema$GoogleLongrunningOperation {
    /**
     * If the value is `false`, it means the operation is still in progress. If `true`, the operation is completed, and either `error` or `response` is available.
     */
    done?: boolean | null;
    /**
     * The error result of the operation in case of failure or cancellation.
     */
    error?: Schema$GoogleRpcStatus;
    /**
     * Service-specific metadata associated with the operation. It typically contains progress information and common metadata such as create time. Some services might not provide such metadata. Any method that returns a long-running operation should document the metadata type, if any.
     */
    metadata?: {[key: string]: any} | null;
    /**
     * The server-assigned name, which is only unique within the same service that originally returns it. If you use the default HTTP mapping, the `name` should be a resource name ending with `operations/{unique_id\}`.
     */
    name?: string | null;
    /**
     * The normal response of the operation in case of success. If the original method returns no data on success, such as `Delete`, the response is `google.protobuf.Empty`. If the original method is standard `Get`/`Create`/`Update`, the response should be the resource. For other methods, the response should have the type `XxxResponse`, where `Xxx` is the original method name. For example, if the original method name is `TakeSnapshot()`, the inferred response type is `TakeSnapshotResponse`.
     */
    response?: {[key: string]: any} | null;
  }
  /**
   * A generic empty message that you can re-use to avoid defining duplicated empty messages in your APIs. A typical example is to use it as the request or the response type of an API method. For instance: service Foo { rpc Bar(google.protobuf.Empty) returns (google.protobuf.Empty); \} The JSON representation for `Empty` is empty JSON object `{\}`.
   */
  export interface Schema$GoogleProtobufEmpty {}
  /**
   * The `Status` type defines a logical error model that is suitable for different programming environments, including REST APIs and RPC APIs. It is used by [gRPC](https://github.com/grpc). Each `Status` message contains three pieces of data: error code, error message, and error details. You can find out more about this error model and how to work with it in the [API Design Guide](https://cloud.google.com/apis/design/errors).
   */
  export interface Schema$GoogleRpcStatus {
    /**
     * The status code, which should be an enum value of google.rpc.Code.
     */
    code?: number | null;
    /**
     * A list of messages that carry the error details. There is a common set of message types for APIs to use.
     */
    details?: Array<{[key: string]: any}> | null;
    /**
     * A developer-facing error message, which should be in English. Any user-facing error message should be localized and sent in the google.rpc.Status.details field, or localized by the client.
     */
    message?: string | null;
  }
  /**
   * Represents an amount of money with its currency type.
   */
  export interface Schema$GoogleTypeMoney {
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
   * Represents a postal address, e.g. for postal delivery or payments addresses. Given a postal address, a postal service can deliver items to a premise, P.O. Box or similar. It is not intended to model geographical locations (roads, towns, mountains). In typical usage an address would be created via user input or from importing existing data, depending on the type of process. Advice on address input / editing: - Use an i18n-ready address widget such as https://github.com/google/libaddressinput) - Users should not be presented with UI elements for input or editing of fields outside countries where that field is used. For more guidance on how to use this schema, please see: https://support.google.com/business/answer/6397478
   */
  export interface Schema$GoogleTypePostalAddress {
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
     * Required. CLDR region code of the country/region of the address. This is never inferred and it is up to the user to ensure the value is correct. See http://cldr.unicode.org/ and http://www.unicode.org/cldr/charts/30/supplemental/territory_information.html for details. Example: "CH" for Switzerland.
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

  export class Resource$Accounts {
    context: APIRequestContext;
    channelPartnerLinks: Resource$Accounts$Channelpartnerlinks;
    customers: Resource$Accounts$Customers;
    offers: Resource$Accounts$Offers;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.channelPartnerLinks = new Resource$Accounts$Channelpartnerlinks(
        this.context
      );
      this.customers = new Resource$Accounts$Customers(this.context);
      this.offers = new Resource$Accounts$Offers(this.context);
    }

    /**
     * Confirms the existence of Cloud Identity accounts based on the domain and if the Cloud Identity accounts are owned by the reseller. Possible error codes: * PERMISSION_DENIED: The reseller account making the request is different from the reseller account in the API request. * INVALID_ARGUMENT: Required request parameters are missing or invalid. * INVALID_VALUE: Invalid domain value in the request. Return value: A list of CloudIdentityCustomerAccount resources for the domain (may be empty) Note: in the v1alpha1 version of the API, a NOT_FOUND error returns if no CloudIdentityCustomerAccount resources match the domain.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/cloudchannel.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const cloudchannel = google.cloudchannel('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/apps.order'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await cloudchannel.accounts.checkCloudIdentityAccountsExist({
     *     // Required. The reseller account's resource name. Parent uses the format: accounts/{account_id\}
     *     parent: 'accounts/my-account',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "domain": "my_domain"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "cloudIdentityAccounts": []
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
    checkCloudIdentityAccountsExist(
      params: Params$Resource$Accounts$Checkcloudidentityaccountsexist,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    checkCloudIdentityAccountsExist(
      params?: Params$Resource$Accounts$Checkcloudidentityaccountsexist,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleCloudChannelV1CheckCloudIdentityAccountsExistResponse>;
    checkCloudIdentityAccountsExist(
      params: Params$Resource$Accounts$Checkcloudidentityaccountsexist,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    checkCloudIdentityAccountsExist(
      params: Params$Resource$Accounts$Checkcloudidentityaccountsexist,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleCloudChannelV1CheckCloudIdentityAccountsExistResponse>,
      callback: BodyResponseCallback<Schema$GoogleCloudChannelV1CheckCloudIdentityAccountsExistResponse>
    ): void;
    checkCloudIdentityAccountsExist(
      params: Params$Resource$Accounts$Checkcloudidentityaccountsexist,
      callback: BodyResponseCallback<Schema$GoogleCloudChannelV1CheckCloudIdentityAccountsExistResponse>
    ): void;
    checkCloudIdentityAccountsExist(
      callback: BodyResponseCallback<Schema$GoogleCloudChannelV1CheckCloudIdentityAccountsExistResponse>
    ): void;
    checkCloudIdentityAccountsExist(
      paramsOrCallback?:
        | Params$Resource$Accounts$Checkcloudidentityaccountsexist
        | BodyResponseCallback<Schema$GoogleCloudChannelV1CheckCloudIdentityAccountsExistResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleCloudChannelV1CheckCloudIdentityAccountsExistResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleCloudChannelV1CheckCloudIdentityAccountsExistResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleCloudChannelV1CheckCloudIdentityAccountsExistResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Accounts$Checkcloudidentityaccountsexist;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Accounts$Checkcloudidentityaccountsexist;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://cloudchannel.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl + '/v1/{+parent}:checkCloudIdentityAccountsExist'
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
        createAPIRequest<Schema$GoogleCloudChannelV1CheckCloudIdentityAccountsExistResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleCloudChannelV1CheckCloudIdentityAccountsExistResponse>(
          parameters
        );
      }
    }

    /**
     * Lists service accounts with subscriber privileges on the Cloud Pub/Sub topic created for this Channel Services account. Possible error codes: * PERMISSION_DENIED: The reseller account making the request and the provided reseller account are different, or the impersonated user is not a super admin. * INVALID_ARGUMENT: Required request parameters are missing or invalid. * NOT_FOUND: The topic resource doesn't exist. * INTERNAL: Any non-user error related to a technical issue in the backend. Contact Cloud Channel support. * UNKNOWN: Any non-user error related to a technical issue in the backend. Contact Cloud Channel support. Return value: A list of service email addresses.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/cloudchannel.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const cloudchannel = google.cloudchannel('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/apps.order'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await cloudchannel.accounts.listSubscribers({
     *     // Required. Resource name of the account.
     *     account: 'accounts/my-account',
     *     // Optional. The maximum number of service accounts to return. The service may return fewer than this value. If unspecified, returns at most 100 service accounts. The maximum value is 1000; the server will coerce values above 1000.
     *     pageSize: 'placeholder-value',
     *     // Optional. A page token, received from a previous `ListSubscribers` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListSubscribers` must match the call that provided the page token.
     *     pageToken: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "nextPageToken": "my_nextPageToken",
     *   //   "serviceAccounts": [],
     *   //   "topic": "my_topic"
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
    listSubscribers(
      params: Params$Resource$Accounts$Listsubscribers,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    listSubscribers(
      params?: Params$Resource$Accounts$Listsubscribers,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleCloudChannelV1ListSubscribersResponse>;
    listSubscribers(
      params: Params$Resource$Accounts$Listsubscribers,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    listSubscribers(
      params: Params$Resource$Accounts$Listsubscribers,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleCloudChannelV1ListSubscribersResponse>,
      callback: BodyResponseCallback<Schema$GoogleCloudChannelV1ListSubscribersResponse>
    ): void;
    listSubscribers(
      params: Params$Resource$Accounts$Listsubscribers,
      callback: BodyResponseCallback<Schema$GoogleCloudChannelV1ListSubscribersResponse>
    ): void;
    listSubscribers(
      callback: BodyResponseCallback<Schema$GoogleCloudChannelV1ListSubscribersResponse>
    ): void;
    listSubscribers(
      paramsOrCallback?:
        | Params$Resource$Accounts$Listsubscribers
        | BodyResponseCallback<Schema$GoogleCloudChannelV1ListSubscribersResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleCloudChannelV1ListSubscribersResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleCloudChannelV1ListSubscribersResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleCloudChannelV1ListSubscribersResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Accounts$Listsubscribers;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Accounts$Listsubscribers;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://cloudchannel.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+account}:listSubscribers').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['account'],
        pathParams: ['account'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$GoogleCloudChannelV1ListSubscribersResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleCloudChannelV1ListSubscribersResponse>(
          parameters
        );
      }
    }

    /**
     * List TransferableOffers of a customer based on Cloud Identity ID or Customer Name in the request. Use this method when a reseller gets the entitlement information of an unowned customer. The reseller should provide the customer's Cloud Identity ID or Customer Name. Possible error codes: * PERMISSION_DENIED: * The customer doesn't belong to the reseller and has no auth token. * The supplied auth token is invalid. * The reseller account making the request is different from the reseller account in the query. * INVALID_ARGUMENT: Required request parameters are missing or invalid. Return value: List of TransferableOffer for the given customer and SKU.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/cloudchannel.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const cloudchannel = google.cloudchannel('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/apps.order'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await cloudchannel.accounts.listTransferableOffers({
     *     // Required. The resource name of the reseller's account.
     *     parent: 'accounts/my-account',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "cloudIdentityId": "my_cloudIdentityId",
     *       //   "customerName": "my_customerName",
     *       //   "languageCode": "my_languageCode",
     *       //   "pageSize": 0,
     *       //   "pageToken": "my_pageToken",
     *       //   "sku": "my_sku"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "nextPageToken": "my_nextPageToken",
     *   //   "transferableOffers": []
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
    listTransferableOffers(
      params: Params$Resource$Accounts$Listtransferableoffers,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    listTransferableOffers(
      params?: Params$Resource$Accounts$Listtransferableoffers,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleCloudChannelV1ListTransferableOffersResponse>;
    listTransferableOffers(
      params: Params$Resource$Accounts$Listtransferableoffers,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    listTransferableOffers(
      params: Params$Resource$Accounts$Listtransferableoffers,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleCloudChannelV1ListTransferableOffersResponse>,
      callback: BodyResponseCallback<Schema$GoogleCloudChannelV1ListTransferableOffersResponse>
    ): void;
    listTransferableOffers(
      params: Params$Resource$Accounts$Listtransferableoffers,
      callback: BodyResponseCallback<Schema$GoogleCloudChannelV1ListTransferableOffersResponse>
    ): void;
    listTransferableOffers(
      callback: BodyResponseCallback<Schema$GoogleCloudChannelV1ListTransferableOffersResponse>
    ): void;
    listTransferableOffers(
      paramsOrCallback?:
        | Params$Resource$Accounts$Listtransferableoffers
        | BodyResponseCallback<Schema$GoogleCloudChannelV1ListTransferableOffersResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleCloudChannelV1ListTransferableOffersResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleCloudChannelV1ListTransferableOffersResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleCloudChannelV1ListTransferableOffersResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Accounts$Listtransferableoffers;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Accounts$Listtransferableoffers;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://cloudchannel.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}:listTransferableOffers').replace(
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
        createAPIRequest<Schema$GoogleCloudChannelV1ListTransferableOffersResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleCloudChannelV1ListTransferableOffersResponse>(
          parameters
        );
      }
    }

    /**
     * List TransferableSkus of a customer based on the Cloud Identity ID or Customer Name in the request. Use this method to list the entitlements information of an unowned customer. You should provide the customer's Cloud Identity ID or Customer Name. Possible error codes: * PERMISSION_DENIED: * The customer doesn't belong to the reseller and has no auth token. * The supplied auth token is invalid. * The reseller account making the request is different from the reseller account in the query. * INVALID_ARGUMENT: Required request parameters are missing or invalid. Return value: A list of the customer's TransferableSku.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/cloudchannel.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const cloudchannel = google.cloudchannel('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/apps.order'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await cloudchannel.accounts.listTransferableSkus({
     *     // Required. The reseller account's resource name. Parent uses the format: accounts/{account_id\}
     *     parent: 'accounts/my-account',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "authToken": "my_authToken",
     *       //   "cloudIdentityId": "my_cloudIdentityId",
     *       //   "customerName": "my_customerName",
     *       //   "languageCode": "my_languageCode",
     *       //   "pageSize": 0,
     *       //   "pageToken": "my_pageToken"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "nextPageToken": "my_nextPageToken",
     *   //   "transferableSkus": []
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
    listTransferableSkus(
      params: Params$Resource$Accounts$Listtransferableskus,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    listTransferableSkus(
      params?: Params$Resource$Accounts$Listtransferableskus,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleCloudChannelV1ListTransferableSkusResponse>;
    listTransferableSkus(
      params: Params$Resource$Accounts$Listtransferableskus,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    listTransferableSkus(
      params: Params$Resource$Accounts$Listtransferableskus,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleCloudChannelV1ListTransferableSkusResponse>,
      callback: BodyResponseCallback<Schema$GoogleCloudChannelV1ListTransferableSkusResponse>
    ): void;
    listTransferableSkus(
      params: Params$Resource$Accounts$Listtransferableskus,
      callback: BodyResponseCallback<Schema$GoogleCloudChannelV1ListTransferableSkusResponse>
    ): void;
    listTransferableSkus(
      callback: BodyResponseCallback<Schema$GoogleCloudChannelV1ListTransferableSkusResponse>
    ): void;
    listTransferableSkus(
      paramsOrCallback?:
        | Params$Resource$Accounts$Listtransferableskus
        | BodyResponseCallback<Schema$GoogleCloudChannelV1ListTransferableSkusResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleCloudChannelV1ListTransferableSkusResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleCloudChannelV1ListTransferableSkusResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleCloudChannelV1ListTransferableSkusResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Accounts$Listtransferableskus;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Accounts$Listtransferableskus;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://cloudchannel.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}:listTransferableSkus').replace(
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
        createAPIRequest<Schema$GoogleCloudChannelV1ListTransferableSkusResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleCloudChannelV1ListTransferableSkusResponse>(
          parameters
        );
      }
    }

    /**
     * Registers a service account with subscriber privileges on the Cloud Pub/Sub topic for this Channel Services account. After you create a subscriber, you get the events through SubscriberEvent Possible error codes: * PERMISSION_DENIED: The reseller account making the request and the provided reseller account are different, or the impersonated user is not a super admin. * INVALID_ARGUMENT: Required request parameters are missing or invalid. * INTERNAL: Any non-user error related to a technical issue in the backend. Contact Cloud Channel support. * UNKNOWN: Any non-user error related to a technical issue in the backend. Contact Cloud Channel support. Return value: The topic name with the registered service email address.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/cloudchannel.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const cloudchannel = google.cloudchannel('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/apps.order'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await cloudchannel.accounts.register({
     *     // Required. Resource name of the account.
     *     account: 'accounts/my-account',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "serviceAccount": "my_serviceAccount"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "topic": "my_topic"
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
    register(
      params: Params$Resource$Accounts$Register,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    register(
      params?: Params$Resource$Accounts$Register,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleCloudChannelV1RegisterSubscriberResponse>;
    register(
      params: Params$Resource$Accounts$Register,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    register(
      params: Params$Resource$Accounts$Register,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleCloudChannelV1RegisterSubscriberResponse>,
      callback: BodyResponseCallback<Schema$GoogleCloudChannelV1RegisterSubscriberResponse>
    ): void;
    register(
      params: Params$Resource$Accounts$Register,
      callback: BodyResponseCallback<Schema$GoogleCloudChannelV1RegisterSubscriberResponse>
    ): void;
    register(
      callback: BodyResponseCallback<Schema$GoogleCloudChannelV1RegisterSubscriberResponse>
    ): void;
    register(
      paramsOrCallback?:
        | Params$Resource$Accounts$Register
        | BodyResponseCallback<Schema$GoogleCloudChannelV1RegisterSubscriberResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleCloudChannelV1RegisterSubscriberResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleCloudChannelV1RegisterSubscriberResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleCloudChannelV1RegisterSubscriberResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Accounts$Register;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Accounts$Register;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://cloudchannel.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+account}:register').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['account'],
        pathParams: ['account'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$GoogleCloudChannelV1RegisterSubscriberResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleCloudChannelV1RegisterSubscriberResponse>(
          parameters
        );
      }
    }

    /**
     * Unregisters a service account with subscriber privileges on the Cloud Pub/Sub topic created for this Channel Services account. If there are no service accounts left with subscriber privileges, this deletes the topic. You can call ListSubscribers to check for these accounts. Possible error codes: * PERMISSION_DENIED: The reseller account making the request and the provided reseller account are different, or the impersonated user is not a super admin. * INVALID_ARGUMENT: Required request parameters are missing or invalid. * NOT_FOUND: The topic resource doesn't exist. * INTERNAL: Any non-user error related to a technical issue in the backend. Contact Cloud Channel support. * UNKNOWN: Any non-user error related to a technical issue in the backend. Contact Cloud Channel support. Return value: The topic name that unregistered the service email address. Returns a success response if the service email address wasn't registered with the topic.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/cloudchannel.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const cloudchannel = google.cloudchannel('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/apps.order'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await cloudchannel.accounts.unregister({
     *     // Required. Resource name of the account.
     *     account: 'accounts/my-account',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "serviceAccount": "my_serviceAccount"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "topic": "my_topic"
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
    unregister(
      params: Params$Resource$Accounts$Unregister,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    unregister(
      params?: Params$Resource$Accounts$Unregister,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleCloudChannelV1UnregisterSubscriberResponse>;
    unregister(
      params: Params$Resource$Accounts$Unregister,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    unregister(
      params: Params$Resource$Accounts$Unregister,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleCloudChannelV1UnregisterSubscriberResponse>,
      callback: BodyResponseCallback<Schema$GoogleCloudChannelV1UnregisterSubscriberResponse>
    ): void;
    unregister(
      params: Params$Resource$Accounts$Unregister,
      callback: BodyResponseCallback<Schema$GoogleCloudChannelV1UnregisterSubscriberResponse>
    ): void;
    unregister(
      callback: BodyResponseCallback<Schema$GoogleCloudChannelV1UnregisterSubscriberResponse>
    ): void;
    unregister(
      paramsOrCallback?:
        | Params$Resource$Accounts$Unregister
        | BodyResponseCallback<Schema$GoogleCloudChannelV1UnregisterSubscriberResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleCloudChannelV1UnregisterSubscriberResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleCloudChannelV1UnregisterSubscriberResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleCloudChannelV1UnregisterSubscriberResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Accounts$Unregister;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Accounts$Unregister;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://cloudchannel.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+account}:unregister').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['account'],
        pathParams: ['account'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$GoogleCloudChannelV1UnregisterSubscriberResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleCloudChannelV1UnregisterSubscriberResponse>(
          parameters
        );
      }
    }
  }

  export interface Params$Resource$Accounts$Checkcloudidentityaccountsexist
    extends StandardParameters {
    /**
     * Required. The reseller account's resource name. Parent uses the format: accounts/{account_id\}
     */
    parent?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleCloudChannelV1CheckCloudIdentityAccountsExistRequest;
  }
  export interface Params$Resource$Accounts$Listsubscribers
    extends StandardParameters {
    /**
     * Required. Resource name of the account.
     */
    account?: string;
    /**
     * Optional. The maximum number of service accounts to return. The service may return fewer than this value. If unspecified, returns at most 100 service accounts. The maximum value is 1000; the server will coerce values above 1000.
     */
    pageSize?: number;
    /**
     * Optional. A page token, received from a previous `ListSubscribers` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListSubscribers` must match the call that provided the page token.
     */
    pageToken?: string;
  }
  export interface Params$Resource$Accounts$Listtransferableoffers
    extends StandardParameters {
    /**
     * Required. The resource name of the reseller's account.
     */
    parent?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleCloudChannelV1ListTransferableOffersRequest;
  }
  export interface Params$Resource$Accounts$Listtransferableskus
    extends StandardParameters {
    /**
     * Required. The reseller account's resource name. Parent uses the format: accounts/{account_id\}
     */
    parent?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleCloudChannelV1ListTransferableSkusRequest;
  }
  export interface Params$Resource$Accounts$Register
    extends StandardParameters {
    /**
     * Required. Resource name of the account.
     */
    account?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleCloudChannelV1RegisterSubscriberRequest;
  }
  export interface Params$Resource$Accounts$Unregister
    extends StandardParameters {
    /**
     * Required. Resource name of the account.
     */
    account?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleCloudChannelV1UnregisterSubscriberRequest;
  }

  export class Resource$Accounts$Channelpartnerlinks {
    context: APIRequestContext;
    customers: Resource$Accounts$Channelpartnerlinks$Customers;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.customers = new Resource$Accounts$Channelpartnerlinks$Customers(
        this.context
      );
    }

    /**
     * Initiates a channel partner link between a distributor and a reseller, or between resellers in an n-tier reseller channel. Invited partners need to follow the invite_link_uri provided in the response to accept. After accepting the invitation, a link is set up between the two parties. You must be a distributor to call this method. Possible error codes: * PERMISSION_DENIED: The reseller account making the request is different from the reseller account in the API request. * INVALID_ARGUMENT: Required request parameters are missing or invalid. * ALREADY_EXISTS: The ChannelPartnerLink sent in the request already exists. * NOT_FOUND: No Cloud Identity customer exists for provided domain. * INTERNAL: Any non-user error related to a technical issue in the backend. Contact Cloud Channel support. * UNKNOWN: Any non-user error related to a technical issue in the backend. Contact Cloud Channel support. Return value: The new ChannelPartnerLink resource.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/cloudchannel.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const cloudchannel = google.cloudchannel('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/apps.order'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await cloudchannel.accounts.channelPartnerLinks.create({
     *     // Required. Create a channel partner link for the provided reseller account's resource name. Parent uses the format: accounts/{account_id\}
     *     parent: 'accounts/my-account',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "channelPartnerCloudIdentityInfo": {},
     *       //   "createTime": "my_createTime",
     *       //   "inviteLinkUri": "my_inviteLinkUri",
     *       //   "linkState": "my_linkState",
     *       //   "name": "my_name",
     *       //   "publicId": "my_publicId",
     *       //   "resellerCloudIdentityId": "my_resellerCloudIdentityId",
     *       //   "updateTime": "my_updateTime"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "channelPartnerCloudIdentityInfo": {},
     *   //   "createTime": "my_createTime",
     *   //   "inviteLinkUri": "my_inviteLinkUri",
     *   //   "linkState": "my_linkState",
     *   //   "name": "my_name",
     *   //   "publicId": "my_publicId",
     *   //   "resellerCloudIdentityId": "my_resellerCloudIdentityId",
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
      params: Params$Resource$Accounts$Channelpartnerlinks$Create,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    create(
      params?: Params$Resource$Accounts$Channelpartnerlinks$Create,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleCloudChannelV1ChannelPartnerLink>;
    create(
      params: Params$Resource$Accounts$Channelpartnerlinks$Create,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    create(
      params: Params$Resource$Accounts$Channelpartnerlinks$Create,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleCloudChannelV1ChannelPartnerLink>,
      callback: BodyResponseCallback<Schema$GoogleCloudChannelV1ChannelPartnerLink>
    ): void;
    create(
      params: Params$Resource$Accounts$Channelpartnerlinks$Create,
      callback: BodyResponseCallback<Schema$GoogleCloudChannelV1ChannelPartnerLink>
    ): void;
    create(
      callback: BodyResponseCallback<Schema$GoogleCloudChannelV1ChannelPartnerLink>
    ): void;
    create(
      paramsOrCallback?:
        | Params$Resource$Accounts$Channelpartnerlinks$Create
        | BodyResponseCallback<Schema$GoogleCloudChannelV1ChannelPartnerLink>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleCloudChannelV1ChannelPartnerLink>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleCloudChannelV1ChannelPartnerLink>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleCloudChannelV1ChannelPartnerLink>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Accounts$Channelpartnerlinks$Create;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Accounts$Channelpartnerlinks$Create;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://cloudchannel.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}/channelPartnerLinks').replace(
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
        createAPIRequest<Schema$GoogleCloudChannelV1ChannelPartnerLink>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleCloudChannelV1ChannelPartnerLink>(
          parameters
        );
      }
    }

    /**
     * Returns the requested ChannelPartnerLink resource. You must be a distributor to call this method. Possible error codes: * PERMISSION_DENIED: The reseller account making the request is different from the reseller account in the API request. * INVALID_ARGUMENT: Required request parameters are missing or invalid. * NOT_FOUND: ChannelPartnerLink resource not found because of an invalid channel partner link name. Return value: The ChannelPartnerLink resource.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/cloudchannel.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const cloudchannel = google.cloudchannel('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/apps.order'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await cloudchannel.accounts.channelPartnerLinks.get({
     *     // Required. The resource name of the channel partner link to retrieve. Name uses the format: accounts/{account_id\}/channelPartnerLinks/{id\} where {id\} is the Cloud Identity ID of the partner.
     *     name: 'accounts/my-account/channelPartnerLinks/my-channelPartnerLink',
     *     // Optional. The level of granularity the ChannelPartnerLink will display.
     *     view: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "channelPartnerCloudIdentityInfo": {},
     *   //   "createTime": "my_createTime",
     *   //   "inviteLinkUri": "my_inviteLinkUri",
     *   //   "linkState": "my_linkState",
     *   //   "name": "my_name",
     *   //   "publicId": "my_publicId",
     *   //   "resellerCloudIdentityId": "my_resellerCloudIdentityId",
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
      params: Params$Resource$Accounts$Channelpartnerlinks$Get,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    get(
      params?: Params$Resource$Accounts$Channelpartnerlinks$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleCloudChannelV1ChannelPartnerLink>;
    get(
      params: Params$Resource$Accounts$Channelpartnerlinks$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Accounts$Channelpartnerlinks$Get,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleCloudChannelV1ChannelPartnerLink>,
      callback: BodyResponseCallback<Schema$GoogleCloudChannelV1ChannelPartnerLink>
    ): void;
    get(
      params: Params$Resource$Accounts$Channelpartnerlinks$Get,
      callback: BodyResponseCallback<Schema$GoogleCloudChannelV1ChannelPartnerLink>
    ): void;
    get(
      callback: BodyResponseCallback<Schema$GoogleCloudChannelV1ChannelPartnerLink>
    ): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Accounts$Channelpartnerlinks$Get
        | BodyResponseCallback<Schema$GoogleCloudChannelV1ChannelPartnerLink>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleCloudChannelV1ChannelPartnerLink>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleCloudChannelV1ChannelPartnerLink>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleCloudChannelV1ChannelPartnerLink>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Accounts$Channelpartnerlinks$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Accounts$Channelpartnerlinks$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://cloudchannel.googleapis.com/';
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
        createAPIRequest<Schema$GoogleCloudChannelV1ChannelPartnerLink>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleCloudChannelV1ChannelPartnerLink>(
          parameters
        );
      }
    }

    /**
     * List ChannelPartnerLinks belonging to a distributor. You must be a distributor to call this method. Possible error codes: * PERMISSION_DENIED: The reseller account making the request is different from the reseller account in the API request. * INVALID_ARGUMENT: Required request parameters are missing or invalid. Return value: The list of the distributor account's ChannelPartnerLink resources.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/cloudchannel.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const cloudchannel = google.cloudchannel('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/apps.order'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await cloudchannel.accounts.channelPartnerLinks.list({
     *     // Optional. Requested page size. Server might return fewer results than requested. If unspecified, server will pick a default size (25). The maximum value is 200; the server will coerce values above 200.
     *     pageSize: 'placeholder-value',
     *     // Optional. A token for a page of results other than the first page. Obtained using ListChannelPartnerLinksResponse.next_page_token of the previous CloudChannelService.ListChannelPartnerLinks call.
     *     pageToken: 'placeholder-value',
     *     // Required. The resource name of the reseller account for listing channel partner links. Parent uses the format: accounts/{account_id\}
     *     parent: 'accounts/my-account',
     *     // Optional. The level of granularity the ChannelPartnerLink will display.
     *     view: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "channelPartnerLinks": [],
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
      params: Params$Resource$Accounts$Channelpartnerlinks$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Accounts$Channelpartnerlinks$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleCloudChannelV1ListChannelPartnerLinksResponse>;
    list(
      params: Params$Resource$Accounts$Channelpartnerlinks$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Accounts$Channelpartnerlinks$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleCloudChannelV1ListChannelPartnerLinksResponse>,
      callback: BodyResponseCallback<Schema$GoogleCloudChannelV1ListChannelPartnerLinksResponse>
    ): void;
    list(
      params: Params$Resource$Accounts$Channelpartnerlinks$List,
      callback: BodyResponseCallback<Schema$GoogleCloudChannelV1ListChannelPartnerLinksResponse>
    ): void;
    list(
      callback: BodyResponseCallback<Schema$GoogleCloudChannelV1ListChannelPartnerLinksResponse>
    ): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Accounts$Channelpartnerlinks$List
        | BodyResponseCallback<Schema$GoogleCloudChannelV1ListChannelPartnerLinksResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleCloudChannelV1ListChannelPartnerLinksResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleCloudChannelV1ListChannelPartnerLinksResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleCloudChannelV1ListChannelPartnerLinksResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Accounts$Channelpartnerlinks$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Accounts$Channelpartnerlinks$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://cloudchannel.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}/channelPartnerLinks').replace(
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
        createAPIRequest<Schema$GoogleCloudChannelV1ListChannelPartnerLinksResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleCloudChannelV1ListChannelPartnerLinksResponse>(
          parameters
        );
      }
    }

    /**
     * Updates a channel partner link. Distributors call this method to change a link's status. For example, to suspend a partner link. You must be a distributor to call this method. Possible error codes: * PERMISSION_DENIED: The reseller account making the request is different from the reseller account in the API request. * INVALID_ARGUMENT: * Required request parameters are missing or invalid. * Link state cannot change from invited to active or suspended. * Cannot send reseller_cloud_identity_id, invite_url, or name in update mask. * NOT_FOUND: ChannelPartnerLink resource not found. * INTERNAL: Any non-user error related to a technical issue in the backend. Contact Cloud Channel support. * UNKNOWN: Any non-user error related to a technical issue in the backend. Contact Cloud Channel support. Return value: The updated ChannelPartnerLink resource.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/cloudchannel.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const cloudchannel = google.cloudchannel('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/apps.order'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await cloudchannel.accounts.channelPartnerLinks.patch({
     *     // Required. The resource name of the channel partner link to cancel. Name uses the format: accounts/{account_id\}/channelPartnerLinks/{id\} where {id\} is the Cloud Identity ID of the partner.
     *     name: 'accounts/my-account/channelPartnerLinks/my-channelPartnerLink',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "channelPartnerLink": {},
     *       //   "updateMask": "my_updateMask"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "channelPartnerCloudIdentityInfo": {},
     *   //   "createTime": "my_createTime",
     *   //   "inviteLinkUri": "my_inviteLinkUri",
     *   //   "linkState": "my_linkState",
     *   //   "name": "my_name",
     *   //   "publicId": "my_publicId",
     *   //   "resellerCloudIdentityId": "my_resellerCloudIdentityId",
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
      params: Params$Resource$Accounts$Channelpartnerlinks$Patch,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    patch(
      params?: Params$Resource$Accounts$Channelpartnerlinks$Patch,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleCloudChannelV1ChannelPartnerLink>;
    patch(
      params: Params$Resource$Accounts$Channelpartnerlinks$Patch,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    patch(
      params: Params$Resource$Accounts$Channelpartnerlinks$Patch,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleCloudChannelV1ChannelPartnerLink>,
      callback: BodyResponseCallback<Schema$GoogleCloudChannelV1ChannelPartnerLink>
    ): void;
    patch(
      params: Params$Resource$Accounts$Channelpartnerlinks$Patch,
      callback: BodyResponseCallback<Schema$GoogleCloudChannelV1ChannelPartnerLink>
    ): void;
    patch(
      callback: BodyResponseCallback<Schema$GoogleCloudChannelV1ChannelPartnerLink>
    ): void;
    patch(
      paramsOrCallback?:
        | Params$Resource$Accounts$Channelpartnerlinks$Patch
        | BodyResponseCallback<Schema$GoogleCloudChannelV1ChannelPartnerLink>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleCloudChannelV1ChannelPartnerLink>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleCloudChannelV1ChannelPartnerLink>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleCloudChannelV1ChannelPartnerLink>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Accounts$Channelpartnerlinks$Patch;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Accounts$Channelpartnerlinks$Patch;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://cloudchannel.googleapis.com/';
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
        createAPIRequest<Schema$GoogleCloudChannelV1ChannelPartnerLink>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleCloudChannelV1ChannelPartnerLink>(
          parameters
        );
      }
    }
  }

  export interface Params$Resource$Accounts$Channelpartnerlinks$Create
    extends StandardParameters {
    /**
     * Required. Create a channel partner link for the provided reseller account's resource name. Parent uses the format: accounts/{account_id\}
     */
    parent?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleCloudChannelV1ChannelPartnerLink;
  }
  export interface Params$Resource$Accounts$Channelpartnerlinks$Get
    extends StandardParameters {
    /**
     * Required. The resource name of the channel partner link to retrieve. Name uses the format: accounts/{account_id\}/channelPartnerLinks/{id\} where {id\} is the Cloud Identity ID of the partner.
     */
    name?: string;
    /**
     * Optional. The level of granularity the ChannelPartnerLink will display.
     */
    view?: string;
  }
  export interface Params$Resource$Accounts$Channelpartnerlinks$List
    extends StandardParameters {
    /**
     * Optional. Requested page size. Server might return fewer results than requested. If unspecified, server will pick a default size (25). The maximum value is 200; the server will coerce values above 200.
     */
    pageSize?: number;
    /**
     * Optional. A token for a page of results other than the first page. Obtained using ListChannelPartnerLinksResponse.next_page_token of the previous CloudChannelService.ListChannelPartnerLinks call.
     */
    pageToken?: string;
    /**
     * Required. The resource name of the reseller account for listing channel partner links. Parent uses the format: accounts/{account_id\}
     */
    parent?: string;
    /**
     * Optional. The level of granularity the ChannelPartnerLink will display.
     */
    view?: string;
  }
  export interface Params$Resource$Accounts$Channelpartnerlinks$Patch
    extends StandardParameters {
    /**
     * Required. The resource name of the channel partner link to cancel. Name uses the format: accounts/{account_id\}/channelPartnerLinks/{id\} where {id\} is the Cloud Identity ID of the partner.
     */
    name?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleCloudChannelV1UpdateChannelPartnerLinkRequest;
  }

  export class Resource$Accounts$Channelpartnerlinks$Customers {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Creates a new Customer resource under the reseller or distributor account. Possible error codes: * PERMISSION_DENIED: The reseller account making the request is different from the reseller account in the API request. * INVALID_ARGUMENT: * Required request parameters are missing or invalid. * Domain field value doesn't match the primary email domain. Return value: The newly created Customer resource.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/cloudchannel.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const cloudchannel = google.cloudchannel('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/apps.order'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await cloudchannel.accounts.channelPartnerLinks.customers.create({
     *     // Required. The resource name of reseller account in which to create the customer. Parent uses the format: accounts/{account_id\}
     *     parent: 'accounts/my-account/channelPartnerLinks/my-channelPartnerLink',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "alternateEmail": "my_alternateEmail",
     *       //   "channelPartnerId": "my_channelPartnerId",
     *       //   "cloudIdentityId": "my_cloudIdentityId",
     *       //   "cloudIdentityInfo": {},
     *       //   "createTime": "my_createTime",
     *       //   "domain": "my_domain",
     *       //   "languageCode": "my_languageCode",
     *       //   "name": "my_name",
     *       //   "orgDisplayName": "my_orgDisplayName",
     *       //   "orgPostalAddress": {},
     *       //   "primaryContactInfo": {},
     *       //   "updateTime": "my_updateTime"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "alternateEmail": "my_alternateEmail",
     *   //   "channelPartnerId": "my_channelPartnerId",
     *   //   "cloudIdentityId": "my_cloudIdentityId",
     *   //   "cloudIdentityInfo": {},
     *   //   "createTime": "my_createTime",
     *   //   "domain": "my_domain",
     *   //   "languageCode": "my_languageCode",
     *   //   "name": "my_name",
     *   //   "orgDisplayName": "my_orgDisplayName",
     *   //   "orgPostalAddress": {},
     *   //   "primaryContactInfo": {},
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
      params: Params$Resource$Accounts$Channelpartnerlinks$Customers$Create,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    create(
      params?: Params$Resource$Accounts$Channelpartnerlinks$Customers$Create,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleCloudChannelV1Customer>;
    create(
      params: Params$Resource$Accounts$Channelpartnerlinks$Customers$Create,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    create(
      params: Params$Resource$Accounts$Channelpartnerlinks$Customers$Create,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleCloudChannelV1Customer>,
      callback: BodyResponseCallback<Schema$GoogleCloudChannelV1Customer>
    ): void;
    create(
      params: Params$Resource$Accounts$Channelpartnerlinks$Customers$Create,
      callback: BodyResponseCallback<Schema$GoogleCloudChannelV1Customer>
    ): void;
    create(
      callback: BodyResponseCallback<Schema$GoogleCloudChannelV1Customer>
    ): void;
    create(
      paramsOrCallback?:
        | Params$Resource$Accounts$Channelpartnerlinks$Customers$Create
        | BodyResponseCallback<Schema$GoogleCloudChannelV1Customer>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleCloudChannelV1Customer>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleCloudChannelV1Customer>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleCloudChannelV1Customer>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Accounts$Channelpartnerlinks$Customers$Create;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Accounts$Channelpartnerlinks$Customers$Create;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://cloudchannel.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}/customers').replace(
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
        createAPIRequest<Schema$GoogleCloudChannelV1Customer>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleCloudChannelV1Customer>(
          parameters
        );
      }
    }

    /**
     * Deletes the given Customer permanently. Possible error codes: * PERMISSION_DENIED: The account making the request does not own this customer. * INVALID_ARGUMENT: Required request parameters are missing or invalid. * FAILED_PRECONDITION: The customer has existing entitlements. * NOT_FOUND: No Customer resource found for the name in the request.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/cloudchannel.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const cloudchannel = google.cloudchannel('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/apps.order'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await cloudchannel.accounts.channelPartnerLinks.customers.delete({
     *     // Required. The resource name of the customer to delete.
     *     name: 'accounts/my-account/channelPartnerLinks/my-channelPartnerLink/customers/my-customer',
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
      params: Params$Resource$Accounts$Channelpartnerlinks$Customers$Delete,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    delete(
      params?: Params$Resource$Accounts$Channelpartnerlinks$Customers$Delete,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleProtobufEmpty>;
    delete(
      params: Params$Resource$Accounts$Channelpartnerlinks$Customers$Delete,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    delete(
      params: Params$Resource$Accounts$Channelpartnerlinks$Customers$Delete,
      options: MethodOptions | BodyResponseCallback<Schema$GoogleProtobufEmpty>,
      callback: BodyResponseCallback<Schema$GoogleProtobufEmpty>
    ): void;
    delete(
      params: Params$Resource$Accounts$Channelpartnerlinks$Customers$Delete,
      callback: BodyResponseCallback<Schema$GoogleProtobufEmpty>
    ): void;
    delete(callback: BodyResponseCallback<Schema$GoogleProtobufEmpty>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Accounts$Channelpartnerlinks$Customers$Delete
        | BodyResponseCallback<Schema$GoogleProtobufEmpty>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleProtobufEmpty>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleProtobufEmpty>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleProtobufEmpty>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Accounts$Channelpartnerlinks$Customers$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Accounts$Channelpartnerlinks$Customers$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://cloudchannel.googleapis.com/';
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
        createAPIRequest<Schema$GoogleProtobufEmpty>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleProtobufEmpty>(parameters);
      }
    }

    /**
     * Returns the requested Customer resource. Possible error codes: * PERMISSION_DENIED: The reseller account making the request is different from the reseller account in the API request. * INVALID_ARGUMENT: Required request parameters are missing or invalid. * NOT_FOUND: The customer resource doesn't exist. Usually the result of an invalid name parameter. Return value: The Customer resource.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/cloudchannel.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const cloudchannel = google.cloudchannel('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/apps.order'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await cloudchannel.accounts.channelPartnerLinks.customers.get({
     *     // Required. The resource name of the customer to retrieve. Name uses the format: accounts/{account_id\}/customers/{customer_id\}
     *     name: 'accounts/my-account/channelPartnerLinks/my-channelPartnerLink/customers/my-customer',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "alternateEmail": "my_alternateEmail",
     *   //   "channelPartnerId": "my_channelPartnerId",
     *   //   "cloudIdentityId": "my_cloudIdentityId",
     *   //   "cloudIdentityInfo": {},
     *   //   "createTime": "my_createTime",
     *   //   "domain": "my_domain",
     *   //   "languageCode": "my_languageCode",
     *   //   "name": "my_name",
     *   //   "orgDisplayName": "my_orgDisplayName",
     *   //   "orgPostalAddress": {},
     *   //   "primaryContactInfo": {},
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
      params: Params$Resource$Accounts$Channelpartnerlinks$Customers$Get,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    get(
      params?: Params$Resource$Accounts$Channelpartnerlinks$Customers$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleCloudChannelV1Customer>;
    get(
      params: Params$Resource$Accounts$Channelpartnerlinks$Customers$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Accounts$Channelpartnerlinks$Customers$Get,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleCloudChannelV1Customer>,
      callback: BodyResponseCallback<Schema$GoogleCloudChannelV1Customer>
    ): void;
    get(
      params: Params$Resource$Accounts$Channelpartnerlinks$Customers$Get,
      callback: BodyResponseCallback<Schema$GoogleCloudChannelV1Customer>
    ): void;
    get(
      callback: BodyResponseCallback<Schema$GoogleCloudChannelV1Customer>
    ): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Accounts$Channelpartnerlinks$Customers$Get
        | BodyResponseCallback<Schema$GoogleCloudChannelV1Customer>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleCloudChannelV1Customer>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleCloudChannelV1Customer>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleCloudChannelV1Customer>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Accounts$Channelpartnerlinks$Customers$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Accounts$Channelpartnerlinks$Customers$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://cloudchannel.googleapis.com/';
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
        createAPIRequest<Schema$GoogleCloudChannelV1Customer>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleCloudChannelV1Customer>(
          parameters
        );
      }
    }

    /**
     * Imports a Customer from the Cloud Identity associated with the provided Cloud Identity ID or domain before a TransferEntitlements call. If a linked Customer already exists and overwrite_if_exists is true, it will update that Customer's data. Possible error codes: * PERMISSION_DENIED: The reseller account making the request is different from the reseller account in the API request. * NOT_FOUND: Cloud Identity doesn't exist or was deleted. * INVALID_ARGUMENT: Required parameters are missing, or the auth_token is expired or invalid. * ALREADY_EXISTS: A customer already exists and has conflicting critical fields. Requires an overwrite. Return value: The Customer.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/cloudchannel.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const cloudchannel = google.cloudchannel('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/apps.order'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await cloudchannel.accounts.channelPartnerLinks.customers.import({
     *     // Required. The resource name of the reseller's account. Parent takes the format: accounts/{account_id\} or accounts/{account_id\}/channelPartnerLinks/{channel_partner_id\}
     *     parent: 'accounts/my-account/channelPartnerLinks/my-channelPartnerLink',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "authToken": "my_authToken",
     *       //   "channelPartnerId": "my_channelPartnerId",
     *       //   "cloudIdentityId": "my_cloudIdentityId",
     *       //   "customer": "my_customer",
     *       //   "domain": "my_domain",
     *       //   "overwriteIfExists": false
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "alternateEmail": "my_alternateEmail",
     *   //   "channelPartnerId": "my_channelPartnerId",
     *   //   "cloudIdentityId": "my_cloudIdentityId",
     *   //   "cloudIdentityInfo": {},
     *   //   "createTime": "my_createTime",
     *   //   "domain": "my_domain",
     *   //   "languageCode": "my_languageCode",
     *   //   "name": "my_name",
     *   //   "orgDisplayName": "my_orgDisplayName",
     *   //   "orgPostalAddress": {},
     *   //   "primaryContactInfo": {},
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
    import(
      params: Params$Resource$Accounts$Channelpartnerlinks$Customers$Import,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    import(
      params?: Params$Resource$Accounts$Channelpartnerlinks$Customers$Import,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleCloudChannelV1Customer>;
    import(
      params: Params$Resource$Accounts$Channelpartnerlinks$Customers$Import,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    import(
      params: Params$Resource$Accounts$Channelpartnerlinks$Customers$Import,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleCloudChannelV1Customer>,
      callback: BodyResponseCallback<Schema$GoogleCloudChannelV1Customer>
    ): void;
    import(
      params: Params$Resource$Accounts$Channelpartnerlinks$Customers$Import,
      callback: BodyResponseCallback<Schema$GoogleCloudChannelV1Customer>
    ): void;
    import(
      callback: BodyResponseCallback<Schema$GoogleCloudChannelV1Customer>
    ): void;
    import(
      paramsOrCallback?:
        | Params$Resource$Accounts$Channelpartnerlinks$Customers$Import
        | BodyResponseCallback<Schema$GoogleCloudChannelV1Customer>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleCloudChannelV1Customer>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleCloudChannelV1Customer>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleCloudChannelV1Customer>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Accounts$Channelpartnerlinks$Customers$Import;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Accounts$Channelpartnerlinks$Customers$Import;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://cloudchannel.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}/customers:import').replace(
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
        createAPIRequest<Schema$GoogleCloudChannelV1Customer>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleCloudChannelV1Customer>(
          parameters
        );
      }
    }

    /**
     * List Customers. Possible error codes: * PERMISSION_DENIED: The reseller account making the request is different from the reseller account in the API request. * INVALID_ARGUMENT: Required request parameters are missing or invalid. Return value: List of Customers, or an empty list if there are no customers.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/cloudchannel.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const cloudchannel = google.cloudchannel('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/apps.order'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await cloudchannel.accounts.channelPartnerLinks.customers.list({
     *     // Optional. The maximum number of customers to return. The service may return fewer than this value. If unspecified, returns at most 10 customers. The maximum value is 50.
     *     pageSize: 'placeholder-value',
     *     // Optional. A token identifying a page of results other than the first page. Obtained through ListCustomersResponse.next_page_token of the previous CloudChannelService.ListCustomers call.
     *     pageToken: 'placeholder-value',
     *     // Required. The resource name of the reseller account to list customers from. Parent uses the format: accounts/{account_id\}.
     *     parent: 'accounts/my-account/channelPartnerLinks/my-channelPartnerLink',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "customers": [],
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
      params: Params$Resource$Accounts$Channelpartnerlinks$Customers$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Accounts$Channelpartnerlinks$Customers$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleCloudChannelV1ListCustomersResponse>;
    list(
      params: Params$Resource$Accounts$Channelpartnerlinks$Customers$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Accounts$Channelpartnerlinks$Customers$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleCloudChannelV1ListCustomersResponse>,
      callback: BodyResponseCallback<Schema$GoogleCloudChannelV1ListCustomersResponse>
    ): void;
    list(
      params: Params$Resource$Accounts$Channelpartnerlinks$Customers$List,
      callback: BodyResponseCallback<Schema$GoogleCloudChannelV1ListCustomersResponse>
    ): void;
    list(
      callback: BodyResponseCallback<Schema$GoogleCloudChannelV1ListCustomersResponse>
    ): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Accounts$Channelpartnerlinks$Customers$List
        | BodyResponseCallback<Schema$GoogleCloudChannelV1ListCustomersResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleCloudChannelV1ListCustomersResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleCloudChannelV1ListCustomersResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleCloudChannelV1ListCustomersResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Accounts$Channelpartnerlinks$Customers$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Accounts$Channelpartnerlinks$Customers$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://cloudchannel.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}/customers').replace(
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
        createAPIRequest<Schema$GoogleCloudChannelV1ListCustomersResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleCloudChannelV1ListCustomersResponse>(
          parameters
        );
      }
    }

    /**
     * Updates an existing Customer resource for the reseller or distributor. Possible error codes: * PERMISSION_DENIED: The reseller account making the request is different from the reseller account in the API request. * INVALID_ARGUMENT: Required request parameters are missing or invalid. * NOT_FOUND: No Customer resource found for the name in the request. Return value: The updated Customer resource.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/cloudchannel.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const cloudchannel = google.cloudchannel('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/apps.order'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await cloudchannel.accounts.channelPartnerLinks.customers.patch({
     *     // Output only. Resource name of the customer. Format: accounts/{account_id\}/customers/{customer_id\}
     *     name: 'accounts/my-account/channelPartnerLinks/my-channelPartnerLink/customers/my-customer',
     *     // The update mask that applies to the resource. Optional.
     *     updateMask: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "alternateEmail": "my_alternateEmail",
     *       //   "channelPartnerId": "my_channelPartnerId",
     *       //   "cloudIdentityId": "my_cloudIdentityId",
     *       //   "cloudIdentityInfo": {},
     *       //   "createTime": "my_createTime",
     *       //   "domain": "my_domain",
     *       //   "languageCode": "my_languageCode",
     *       //   "name": "my_name",
     *       //   "orgDisplayName": "my_orgDisplayName",
     *       //   "orgPostalAddress": {},
     *       //   "primaryContactInfo": {},
     *       //   "updateTime": "my_updateTime"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "alternateEmail": "my_alternateEmail",
     *   //   "channelPartnerId": "my_channelPartnerId",
     *   //   "cloudIdentityId": "my_cloudIdentityId",
     *   //   "cloudIdentityInfo": {},
     *   //   "createTime": "my_createTime",
     *   //   "domain": "my_domain",
     *   //   "languageCode": "my_languageCode",
     *   //   "name": "my_name",
     *   //   "orgDisplayName": "my_orgDisplayName",
     *   //   "orgPostalAddress": {},
     *   //   "primaryContactInfo": {},
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
      params: Params$Resource$Accounts$Channelpartnerlinks$Customers$Patch,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    patch(
      params?: Params$Resource$Accounts$Channelpartnerlinks$Customers$Patch,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleCloudChannelV1Customer>;
    patch(
      params: Params$Resource$Accounts$Channelpartnerlinks$Customers$Patch,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    patch(
      params: Params$Resource$Accounts$Channelpartnerlinks$Customers$Patch,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleCloudChannelV1Customer>,
      callback: BodyResponseCallback<Schema$GoogleCloudChannelV1Customer>
    ): void;
    patch(
      params: Params$Resource$Accounts$Channelpartnerlinks$Customers$Patch,
      callback: BodyResponseCallback<Schema$GoogleCloudChannelV1Customer>
    ): void;
    patch(
      callback: BodyResponseCallback<Schema$GoogleCloudChannelV1Customer>
    ): void;
    patch(
      paramsOrCallback?:
        | Params$Resource$Accounts$Channelpartnerlinks$Customers$Patch
        | BodyResponseCallback<Schema$GoogleCloudChannelV1Customer>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleCloudChannelV1Customer>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleCloudChannelV1Customer>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleCloudChannelV1Customer>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Accounts$Channelpartnerlinks$Customers$Patch;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Accounts$Channelpartnerlinks$Customers$Patch;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://cloudchannel.googleapis.com/';
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
        createAPIRequest<Schema$GoogleCloudChannelV1Customer>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleCloudChannelV1Customer>(
          parameters
        );
      }
    }
  }

  export interface Params$Resource$Accounts$Channelpartnerlinks$Customers$Create
    extends StandardParameters {
    /**
     * Required. The resource name of reseller account in which to create the customer. Parent uses the format: accounts/{account_id\}
     */
    parent?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleCloudChannelV1Customer;
  }
  export interface Params$Resource$Accounts$Channelpartnerlinks$Customers$Delete
    extends StandardParameters {
    /**
     * Required. The resource name of the customer to delete.
     */
    name?: string;
  }
  export interface Params$Resource$Accounts$Channelpartnerlinks$Customers$Get
    extends StandardParameters {
    /**
     * Required. The resource name of the customer to retrieve. Name uses the format: accounts/{account_id\}/customers/{customer_id\}
     */
    name?: string;
  }
  export interface Params$Resource$Accounts$Channelpartnerlinks$Customers$Import
    extends StandardParameters {
    /**
     * Required. The resource name of the reseller's account. Parent takes the format: accounts/{account_id\} or accounts/{account_id\}/channelPartnerLinks/{channel_partner_id\}
     */
    parent?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleCloudChannelV1ImportCustomerRequest;
  }
  export interface Params$Resource$Accounts$Channelpartnerlinks$Customers$List
    extends StandardParameters {
    /**
     * Optional. The maximum number of customers to return. The service may return fewer than this value. If unspecified, returns at most 10 customers. The maximum value is 50.
     */
    pageSize?: number;
    /**
     * Optional. A token identifying a page of results other than the first page. Obtained through ListCustomersResponse.next_page_token of the previous CloudChannelService.ListCustomers call.
     */
    pageToken?: string;
    /**
     * Required. The resource name of the reseller account to list customers from. Parent uses the format: accounts/{account_id\}.
     */
    parent?: string;
  }
  export interface Params$Resource$Accounts$Channelpartnerlinks$Customers$Patch
    extends StandardParameters {
    /**
     * Output only. Resource name of the customer. Format: accounts/{account_id\}/customers/{customer_id\}
     */
    name?: string;
    /**
     * The update mask that applies to the resource. Optional.
     */
    updateMask?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleCloudChannelV1Customer;
  }

  export class Resource$Accounts$Customers {
    context: APIRequestContext;
    entitlements: Resource$Accounts$Customers$Entitlements;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.entitlements = new Resource$Accounts$Customers$Entitlements(
        this.context
      );
    }

    /**
     * Creates a new Customer resource under the reseller or distributor account. Possible error codes: * PERMISSION_DENIED: The reseller account making the request is different from the reseller account in the API request. * INVALID_ARGUMENT: * Required request parameters are missing or invalid. * Domain field value doesn't match the primary email domain. Return value: The newly created Customer resource.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/cloudchannel.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const cloudchannel = google.cloudchannel('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/apps.order'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await cloudchannel.accounts.customers.create({
     *     // Required. The resource name of reseller account in which to create the customer. Parent uses the format: accounts/{account_id\}
     *     parent: 'accounts/my-account',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "alternateEmail": "my_alternateEmail",
     *       //   "channelPartnerId": "my_channelPartnerId",
     *       //   "cloudIdentityId": "my_cloudIdentityId",
     *       //   "cloudIdentityInfo": {},
     *       //   "createTime": "my_createTime",
     *       //   "domain": "my_domain",
     *       //   "languageCode": "my_languageCode",
     *       //   "name": "my_name",
     *       //   "orgDisplayName": "my_orgDisplayName",
     *       //   "orgPostalAddress": {},
     *       //   "primaryContactInfo": {},
     *       //   "updateTime": "my_updateTime"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "alternateEmail": "my_alternateEmail",
     *   //   "channelPartnerId": "my_channelPartnerId",
     *   //   "cloudIdentityId": "my_cloudIdentityId",
     *   //   "cloudIdentityInfo": {},
     *   //   "createTime": "my_createTime",
     *   //   "domain": "my_domain",
     *   //   "languageCode": "my_languageCode",
     *   //   "name": "my_name",
     *   //   "orgDisplayName": "my_orgDisplayName",
     *   //   "orgPostalAddress": {},
     *   //   "primaryContactInfo": {},
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
      params: Params$Resource$Accounts$Customers$Create,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    create(
      params?: Params$Resource$Accounts$Customers$Create,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleCloudChannelV1Customer>;
    create(
      params: Params$Resource$Accounts$Customers$Create,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    create(
      params: Params$Resource$Accounts$Customers$Create,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleCloudChannelV1Customer>,
      callback: BodyResponseCallback<Schema$GoogleCloudChannelV1Customer>
    ): void;
    create(
      params: Params$Resource$Accounts$Customers$Create,
      callback: BodyResponseCallback<Schema$GoogleCloudChannelV1Customer>
    ): void;
    create(
      callback: BodyResponseCallback<Schema$GoogleCloudChannelV1Customer>
    ): void;
    create(
      paramsOrCallback?:
        | Params$Resource$Accounts$Customers$Create
        | BodyResponseCallback<Schema$GoogleCloudChannelV1Customer>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleCloudChannelV1Customer>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleCloudChannelV1Customer>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleCloudChannelV1Customer>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Accounts$Customers$Create;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Accounts$Customers$Create;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://cloudchannel.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}/customers').replace(
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
        createAPIRequest<Schema$GoogleCloudChannelV1Customer>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleCloudChannelV1Customer>(
          parameters
        );
      }
    }

    /**
     * Deletes the given Customer permanently. Possible error codes: * PERMISSION_DENIED: The account making the request does not own this customer. * INVALID_ARGUMENT: Required request parameters are missing or invalid. * FAILED_PRECONDITION: The customer has existing entitlements. * NOT_FOUND: No Customer resource found for the name in the request.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/cloudchannel.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const cloudchannel = google.cloudchannel('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/apps.order'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await cloudchannel.accounts.customers.delete({
     *     // Required. The resource name of the customer to delete.
     *     name: 'accounts/my-account/customers/my-customer',
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
      params: Params$Resource$Accounts$Customers$Delete,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    delete(
      params?: Params$Resource$Accounts$Customers$Delete,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleProtobufEmpty>;
    delete(
      params: Params$Resource$Accounts$Customers$Delete,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    delete(
      params: Params$Resource$Accounts$Customers$Delete,
      options: MethodOptions | BodyResponseCallback<Schema$GoogleProtobufEmpty>,
      callback: BodyResponseCallback<Schema$GoogleProtobufEmpty>
    ): void;
    delete(
      params: Params$Resource$Accounts$Customers$Delete,
      callback: BodyResponseCallback<Schema$GoogleProtobufEmpty>
    ): void;
    delete(callback: BodyResponseCallback<Schema$GoogleProtobufEmpty>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Accounts$Customers$Delete
        | BodyResponseCallback<Schema$GoogleProtobufEmpty>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleProtobufEmpty>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleProtobufEmpty>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleProtobufEmpty>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Accounts$Customers$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Accounts$Customers$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://cloudchannel.googleapis.com/';
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
        createAPIRequest<Schema$GoogleProtobufEmpty>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleProtobufEmpty>(parameters);
      }
    }

    /**
     * Returns the requested Customer resource. Possible error codes: * PERMISSION_DENIED: The reseller account making the request is different from the reseller account in the API request. * INVALID_ARGUMENT: Required request parameters are missing or invalid. * NOT_FOUND: The customer resource doesn't exist. Usually the result of an invalid name parameter. Return value: The Customer resource.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/cloudchannel.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const cloudchannel = google.cloudchannel('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/apps.order'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await cloudchannel.accounts.customers.get({
     *     // Required. The resource name of the customer to retrieve. Name uses the format: accounts/{account_id\}/customers/{customer_id\}
     *     name: 'accounts/my-account/customers/my-customer',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "alternateEmail": "my_alternateEmail",
     *   //   "channelPartnerId": "my_channelPartnerId",
     *   //   "cloudIdentityId": "my_cloudIdentityId",
     *   //   "cloudIdentityInfo": {},
     *   //   "createTime": "my_createTime",
     *   //   "domain": "my_domain",
     *   //   "languageCode": "my_languageCode",
     *   //   "name": "my_name",
     *   //   "orgDisplayName": "my_orgDisplayName",
     *   //   "orgPostalAddress": {},
     *   //   "primaryContactInfo": {},
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
      params: Params$Resource$Accounts$Customers$Get,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    get(
      params?: Params$Resource$Accounts$Customers$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleCloudChannelV1Customer>;
    get(
      params: Params$Resource$Accounts$Customers$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Accounts$Customers$Get,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleCloudChannelV1Customer>,
      callback: BodyResponseCallback<Schema$GoogleCloudChannelV1Customer>
    ): void;
    get(
      params: Params$Resource$Accounts$Customers$Get,
      callback: BodyResponseCallback<Schema$GoogleCloudChannelV1Customer>
    ): void;
    get(
      callback: BodyResponseCallback<Schema$GoogleCloudChannelV1Customer>
    ): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Accounts$Customers$Get
        | BodyResponseCallback<Schema$GoogleCloudChannelV1Customer>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleCloudChannelV1Customer>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleCloudChannelV1Customer>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleCloudChannelV1Customer>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Accounts$Customers$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Accounts$Customers$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://cloudchannel.googleapis.com/';
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
        createAPIRequest<Schema$GoogleCloudChannelV1Customer>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleCloudChannelV1Customer>(
          parameters
        );
      }
    }

    /**
     * Imports a Customer from the Cloud Identity associated with the provided Cloud Identity ID or domain before a TransferEntitlements call. If a linked Customer already exists and overwrite_if_exists is true, it will update that Customer's data. Possible error codes: * PERMISSION_DENIED: The reseller account making the request is different from the reseller account in the API request. * NOT_FOUND: Cloud Identity doesn't exist or was deleted. * INVALID_ARGUMENT: Required parameters are missing, or the auth_token is expired or invalid. * ALREADY_EXISTS: A customer already exists and has conflicting critical fields. Requires an overwrite. Return value: The Customer.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/cloudchannel.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const cloudchannel = google.cloudchannel('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/apps.order'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await cloudchannel.accounts.customers.import({
     *     // Required. The resource name of the reseller's account. Parent takes the format: accounts/{account_id\} or accounts/{account_id\}/channelPartnerLinks/{channel_partner_id\}
     *     parent: 'accounts/my-account',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "authToken": "my_authToken",
     *       //   "channelPartnerId": "my_channelPartnerId",
     *       //   "cloudIdentityId": "my_cloudIdentityId",
     *       //   "customer": "my_customer",
     *       //   "domain": "my_domain",
     *       //   "overwriteIfExists": false
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "alternateEmail": "my_alternateEmail",
     *   //   "channelPartnerId": "my_channelPartnerId",
     *   //   "cloudIdentityId": "my_cloudIdentityId",
     *   //   "cloudIdentityInfo": {},
     *   //   "createTime": "my_createTime",
     *   //   "domain": "my_domain",
     *   //   "languageCode": "my_languageCode",
     *   //   "name": "my_name",
     *   //   "orgDisplayName": "my_orgDisplayName",
     *   //   "orgPostalAddress": {},
     *   //   "primaryContactInfo": {},
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
    import(
      params: Params$Resource$Accounts$Customers$Import,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    import(
      params?: Params$Resource$Accounts$Customers$Import,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleCloudChannelV1Customer>;
    import(
      params: Params$Resource$Accounts$Customers$Import,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    import(
      params: Params$Resource$Accounts$Customers$Import,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleCloudChannelV1Customer>,
      callback: BodyResponseCallback<Schema$GoogleCloudChannelV1Customer>
    ): void;
    import(
      params: Params$Resource$Accounts$Customers$Import,
      callback: BodyResponseCallback<Schema$GoogleCloudChannelV1Customer>
    ): void;
    import(
      callback: BodyResponseCallback<Schema$GoogleCloudChannelV1Customer>
    ): void;
    import(
      paramsOrCallback?:
        | Params$Resource$Accounts$Customers$Import
        | BodyResponseCallback<Schema$GoogleCloudChannelV1Customer>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleCloudChannelV1Customer>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleCloudChannelV1Customer>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleCloudChannelV1Customer>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Accounts$Customers$Import;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Accounts$Customers$Import;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://cloudchannel.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}/customers:import').replace(
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
        createAPIRequest<Schema$GoogleCloudChannelV1Customer>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleCloudChannelV1Customer>(
          parameters
        );
      }
    }

    /**
     * List Customers. Possible error codes: * PERMISSION_DENIED: The reseller account making the request is different from the reseller account in the API request. * INVALID_ARGUMENT: Required request parameters are missing or invalid. Return value: List of Customers, or an empty list if there are no customers.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/cloudchannel.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const cloudchannel = google.cloudchannel('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/apps.order'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await cloudchannel.accounts.customers.list({
     *     // Optional. The maximum number of customers to return. The service may return fewer than this value. If unspecified, returns at most 10 customers. The maximum value is 50.
     *     pageSize: 'placeholder-value',
     *     // Optional. A token identifying a page of results other than the first page. Obtained through ListCustomersResponse.next_page_token of the previous CloudChannelService.ListCustomers call.
     *     pageToken: 'placeholder-value',
     *     // Required. The resource name of the reseller account to list customers from. Parent uses the format: accounts/{account_id\}.
     *     parent: 'accounts/my-account',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "customers": [],
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
      params: Params$Resource$Accounts$Customers$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Accounts$Customers$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleCloudChannelV1ListCustomersResponse>;
    list(
      params: Params$Resource$Accounts$Customers$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Accounts$Customers$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleCloudChannelV1ListCustomersResponse>,
      callback: BodyResponseCallback<Schema$GoogleCloudChannelV1ListCustomersResponse>
    ): void;
    list(
      params: Params$Resource$Accounts$Customers$List,
      callback: BodyResponseCallback<Schema$GoogleCloudChannelV1ListCustomersResponse>
    ): void;
    list(
      callback: BodyResponseCallback<Schema$GoogleCloudChannelV1ListCustomersResponse>
    ): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Accounts$Customers$List
        | BodyResponseCallback<Schema$GoogleCloudChannelV1ListCustomersResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleCloudChannelV1ListCustomersResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleCloudChannelV1ListCustomersResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleCloudChannelV1ListCustomersResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Accounts$Customers$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Accounts$Customers$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://cloudchannel.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}/customers').replace(
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
        createAPIRequest<Schema$GoogleCloudChannelV1ListCustomersResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleCloudChannelV1ListCustomersResponse>(
          parameters
        );
      }
    }

    /**
     * Lists the following: * Offers that you can purchase for a customer. * Offers that you can change for an entitlement. Possible error codes: * PERMISSION_DENIED: The customer doesn't belong to the reseller * INVALID_ARGUMENT: Required request parameters are missing or invalid.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/cloudchannel.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const cloudchannel = google.cloudchannel('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/apps.order'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await cloudchannel.accounts.customers.listPurchasableOffers({
     *     // Required. Resource name of the entitlement. Format: accounts/{account_id\}/customers/{customer_id\}/entitlements/{entitlement_id\}
     *     'changeOfferPurchase.entitlement': 'placeholder-value',
     *     // Optional. Resource name of the new target SKU. Provide this SKU when upgrading or downgrading an entitlement. Format: products/{product_id\}/skus/{sku_id\}
     *     'changeOfferPurchase.newSku': 'placeholder-value',
     *     // Required. SKU that the result should be restricted to. Format: products/{product_id\}/skus/{sku_id\}.
     *     'createEntitlementPurchase.sku': 'placeholder-value',
     *     // Required. The resource name of the customer to list Offers for. Format: accounts/{account_id\}/customers/{customer_id\}.
     *     customer: 'accounts/my-account/customers/my-customer',
     *     // Optional. The BCP-47 language code. For example, "en-US". The response will localize in the corresponding language code, if specified. The default value is "en-US".
     *     languageCode: 'placeholder-value',
     *     // Optional. Requested page size. Server might return fewer results than requested. If unspecified, returns at most 100 Offers. The maximum value is 1000; the server will coerce values above 1000.
     *     pageSize: 'placeholder-value',
     *     // Optional. A token for a page of results other than the first page.
     *     pageToken: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "nextPageToken": "my_nextPageToken",
     *   //   "purchasableOffers": []
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
    listPurchasableOffers(
      params: Params$Resource$Accounts$Customers$Listpurchasableoffers,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    listPurchasableOffers(
      params?: Params$Resource$Accounts$Customers$Listpurchasableoffers,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleCloudChannelV1ListPurchasableOffersResponse>;
    listPurchasableOffers(
      params: Params$Resource$Accounts$Customers$Listpurchasableoffers,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    listPurchasableOffers(
      params: Params$Resource$Accounts$Customers$Listpurchasableoffers,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleCloudChannelV1ListPurchasableOffersResponse>,
      callback: BodyResponseCallback<Schema$GoogleCloudChannelV1ListPurchasableOffersResponse>
    ): void;
    listPurchasableOffers(
      params: Params$Resource$Accounts$Customers$Listpurchasableoffers,
      callback: BodyResponseCallback<Schema$GoogleCloudChannelV1ListPurchasableOffersResponse>
    ): void;
    listPurchasableOffers(
      callback: BodyResponseCallback<Schema$GoogleCloudChannelV1ListPurchasableOffersResponse>
    ): void;
    listPurchasableOffers(
      paramsOrCallback?:
        | Params$Resource$Accounts$Customers$Listpurchasableoffers
        | BodyResponseCallback<Schema$GoogleCloudChannelV1ListPurchasableOffersResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleCloudChannelV1ListPurchasableOffersResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleCloudChannelV1ListPurchasableOffersResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleCloudChannelV1ListPurchasableOffersResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Accounts$Customers$Listpurchasableoffers;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Accounts$Customers$Listpurchasableoffers;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://cloudchannel.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+customer}:listPurchasableOffers').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['customer'],
        pathParams: ['customer'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$GoogleCloudChannelV1ListPurchasableOffersResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleCloudChannelV1ListPurchasableOffersResponse>(
          parameters
        );
      }
    }

    /**
     * Lists the following: * SKUs that you can purchase for a customer * SKUs that you can upgrade or downgrade for an entitlement. Possible error codes: * PERMISSION_DENIED: The customer doesn't belong to the reseller. * INVALID_ARGUMENT: Required request parameters are missing or invalid.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/cloudchannel.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const cloudchannel = google.cloudchannel('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/apps.order'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await cloudchannel.accounts.customers.listPurchasableSkus({
     *     // Required. Change Type for the entitlement.
     *     'changeOfferPurchase.changeType': 'placeholder-value',
     *     // Required. Resource name of the entitlement. Format: accounts/{account_id\}/customers/{customer_id\}/entitlements/{entitlement_id\}
     *     'changeOfferPurchase.entitlement': 'placeholder-value',
     *     // Required. List SKUs belonging to this Product. Format: products/{product_id\}. Supports products/- to retrieve SKUs for all products.
     *     'createEntitlementPurchase.product': 'placeholder-value',
     *     // Required. The resource name of the customer to list SKUs for. Format: accounts/{account_id\}/customers/{customer_id\}.
     *     customer: 'accounts/my-account/customers/my-customer',
     *     // Optional. The BCP-47 language code. For example, "en-US". The response will localize in the corresponding language code, if specified. The default value is "en-US".
     *     languageCode: 'placeholder-value',
     *     // Optional. Requested page size. Server might return fewer results than requested. If unspecified, returns at most 100 SKUs. The maximum value is 1000; the server will coerce values above 1000.
     *     pageSize: 'placeholder-value',
     *     // Optional. A token for a page of results other than the first page.
     *     pageToken: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "nextPageToken": "my_nextPageToken",
     *   //   "purchasableSkus": []
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
    listPurchasableSkus(
      params: Params$Resource$Accounts$Customers$Listpurchasableskus,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    listPurchasableSkus(
      params?: Params$Resource$Accounts$Customers$Listpurchasableskus,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleCloudChannelV1ListPurchasableSkusResponse>;
    listPurchasableSkus(
      params: Params$Resource$Accounts$Customers$Listpurchasableskus,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    listPurchasableSkus(
      params: Params$Resource$Accounts$Customers$Listpurchasableskus,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleCloudChannelV1ListPurchasableSkusResponse>,
      callback: BodyResponseCallback<Schema$GoogleCloudChannelV1ListPurchasableSkusResponse>
    ): void;
    listPurchasableSkus(
      params: Params$Resource$Accounts$Customers$Listpurchasableskus,
      callback: BodyResponseCallback<Schema$GoogleCloudChannelV1ListPurchasableSkusResponse>
    ): void;
    listPurchasableSkus(
      callback: BodyResponseCallback<Schema$GoogleCloudChannelV1ListPurchasableSkusResponse>
    ): void;
    listPurchasableSkus(
      paramsOrCallback?:
        | Params$Resource$Accounts$Customers$Listpurchasableskus
        | BodyResponseCallback<Schema$GoogleCloudChannelV1ListPurchasableSkusResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleCloudChannelV1ListPurchasableSkusResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleCloudChannelV1ListPurchasableSkusResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleCloudChannelV1ListPurchasableSkusResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Accounts$Customers$Listpurchasableskus;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Accounts$Customers$Listpurchasableskus;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://cloudchannel.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+customer}:listPurchasableSkus').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['customer'],
        pathParams: ['customer'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$GoogleCloudChannelV1ListPurchasableSkusResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleCloudChannelV1ListPurchasableSkusResponse>(
          parameters
        );
      }
    }

    /**
     * Updates an existing Customer resource for the reseller or distributor. Possible error codes: * PERMISSION_DENIED: The reseller account making the request is different from the reseller account in the API request. * INVALID_ARGUMENT: Required request parameters are missing or invalid. * NOT_FOUND: No Customer resource found for the name in the request. Return value: The updated Customer resource.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/cloudchannel.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const cloudchannel = google.cloudchannel('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/apps.order'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await cloudchannel.accounts.customers.patch({
     *     // Output only. Resource name of the customer. Format: accounts/{account_id\}/customers/{customer_id\}
     *     name: 'accounts/my-account/customers/my-customer',
     *     // The update mask that applies to the resource. Optional.
     *     updateMask: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "alternateEmail": "my_alternateEmail",
     *       //   "channelPartnerId": "my_channelPartnerId",
     *       //   "cloudIdentityId": "my_cloudIdentityId",
     *       //   "cloudIdentityInfo": {},
     *       //   "createTime": "my_createTime",
     *       //   "domain": "my_domain",
     *       //   "languageCode": "my_languageCode",
     *       //   "name": "my_name",
     *       //   "orgDisplayName": "my_orgDisplayName",
     *       //   "orgPostalAddress": {},
     *       //   "primaryContactInfo": {},
     *       //   "updateTime": "my_updateTime"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "alternateEmail": "my_alternateEmail",
     *   //   "channelPartnerId": "my_channelPartnerId",
     *   //   "cloudIdentityId": "my_cloudIdentityId",
     *   //   "cloudIdentityInfo": {},
     *   //   "createTime": "my_createTime",
     *   //   "domain": "my_domain",
     *   //   "languageCode": "my_languageCode",
     *   //   "name": "my_name",
     *   //   "orgDisplayName": "my_orgDisplayName",
     *   //   "orgPostalAddress": {},
     *   //   "primaryContactInfo": {},
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
      params: Params$Resource$Accounts$Customers$Patch,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    patch(
      params?: Params$Resource$Accounts$Customers$Patch,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleCloudChannelV1Customer>;
    patch(
      params: Params$Resource$Accounts$Customers$Patch,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    patch(
      params: Params$Resource$Accounts$Customers$Patch,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleCloudChannelV1Customer>,
      callback: BodyResponseCallback<Schema$GoogleCloudChannelV1Customer>
    ): void;
    patch(
      params: Params$Resource$Accounts$Customers$Patch,
      callback: BodyResponseCallback<Schema$GoogleCloudChannelV1Customer>
    ): void;
    patch(
      callback: BodyResponseCallback<Schema$GoogleCloudChannelV1Customer>
    ): void;
    patch(
      paramsOrCallback?:
        | Params$Resource$Accounts$Customers$Patch
        | BodyResponseCallback<Schema$GoogleCloudChannelV1Customer>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleCloudChannelV1Customer>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleCloudChannelV1Customer>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleCloudChannelV1Customer>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Accounts$Customers$Patch;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Accounts$Customers$Patch;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://cloudchannel.googleapis.com/';
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
        createAPIRequest<Schema$GoogleCloudChannelV1Customer>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleCloudChannelV1Customer>(
          parameters
        );
      }
    }

    /**
     * Creates a Cloud Identity for the given customer using the customer's information, or the information provided here. Possible error codes: * PERMISSION_DENIED: The customer doesn't belong to the reseller. * INVALID_ARGUMENT: Required request parameters are missing or invalid. * NOT_FOUND: The customer was not found. * ALREADY_EXISTS: The customer's primary email already exists. Retry after changing the customer's primary contact email. * INTERNAL: Any non-user error related to a technical issue in the backend. Contact Cloud Channel support. * UNKNOWN: Any non-user error related to a technical issue in the backend. Contact Cloud Channel support. Return value: The ID of a long-running operation. To get the results of the operation, call the GetOperation method of CloudChannelOperationsService. The Operation metadata contains an instance of OperationMetadata.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/cloudchannel.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const cloudchannel = google.cloudchannel('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/apps.order'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await cloudchannel.accounts.customers.provisionCloudIdentity({
     *     // Required. Resource name of the customer. Format: accounts/{account_id\}/customers/{customer_id\}
     *     customer: 'accounts/my-account/customers/my-customer',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "cloudIdentityInfo": {},
     *       //   "user": {},
     *       //   "validateOnly": false
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "done": false,
     *   //   "error": {},
     *   //   "metadata": {},
     *   //   "name": "my_name",
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
    provisionCloudIdentity(
      params: Params$Resource$Accounts$Customers$Provisioncloudidentity,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    provisionCloudIdentity(
      params?: Params$Resource$Accounts$Customers$Provisioncloudidentity,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleLongrunningOperation>;
    provisionCloudIdentity(
      params: Params$Resource$Accounts$Customers$Provisioncloudidentity,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    provisionCloudIdentity(
      params: Params$Resource$Accounts$Customers$Provisioncloudidentity,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>,
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    provisionCloudIdentity(
      params: Params$Resource$Accounts$Customers$Provisioncloudidentity,
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    provisionCloudIdentity(
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    provisionCloudIdentity(
      paramsOrCallback?:
        | Params$Resource$Accounts$Customers$Provisioncloudidentity
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleLongrunningOperation>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Accounts$Customers$Provisioncloudidentity;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Accounts$Customers$Provisioncloudidentity;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://cloudchannel.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+customer}:provisionCloudIdentity').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['customer'],
        pathParams: ['customer'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$GoogleLongrunningOperation>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleLongrunningOperation>(parameters);
      }
    }

    /**
     * Transfers customer entitlements to new reseller. Possible error codes: * PERMISSION_DENIED: The customer doesn't belong to the reseller. * INVALID_ARGUMENT: Required request parameters are missing or invalid. * NOT_FOUND: The customer or offer resource was not found. * ALREADY_EXISTS: The SKU was already transferred for the customer. * CONDITION_NOT_MET or FAILED_PRECONDITION: * The SKU requires domain verification to transfer, but the domain is not verified. * An Add-On SKU (example, Vault or Drive) is missing the pre-requisite SKU (example, G Suite Basic). * (Developer accounts only) Reseller and resold domain must meet the following naming requirements: * Domain names must start with goog-test. * Domain names must include the reseller domain. * Specify all transferring entitlements. * INTERNAL: Any non-user error related to a technical issue in the backend. Contact Cloud Channel support. * UNKNOWN: Any non-user error related to a technical issue in the backend. Contact Cloud Channel support. Return value: The ID of a long-running operation. To get the results of the operation, call the GetOperation method of CloudChannelOperationsService. The Operation metadata will contain an instance of OperationMetadata.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/cloudchannel.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const cloudchannel = google.cloudchannel('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/apps.order'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await cloudchannel.accounts.customers.transferEntitlements({
     *     // Required. The resource name of the reseller's customer account that will receive transferred entitlements. Parent uses the format: accounts/{account_id\}/customers/{customer_id\}
     *     parent: 'accounts/my-account/customers/my-customer',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "authToken": "my_authToken",
     *       //   "entitlements": [],
     *       //   "requestId": "my_requestId"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "done": false,
     *   //   "error": {},
     *   //   "metadata": {},
     *   //   "name": "my_name",
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
    transferEntitlements(
      params: Params$Resource$Accounts$Customers$Transferentitlements,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    transferEntitlements(
      params?: Params$Resource$Accounts$Customers$Transferentitlements,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleLongrunningOperation>;
    transferEntitlements(
      params: Params$Resource$Accounts$Customers$Transferentitlements,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    transferEntitlements(
      params: Params$Resource$Accounts$Customers$Transferentitlements,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>,
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    transferEntitlements(
      params: Params$Resource$Accounts$Customers$Transferentitlements,
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    transferEntitlements(
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    transferEntitlements(
      paramsOrCallback?:
        | Params$Resource$Accounts$Customers$Transferentitlements
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleLongrunningOperation>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Accounts$Customers$Transferentitlements;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Accounts$Customers$Transferentitlements;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://cloudchannel.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}:transferEntitlements').replace(
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
        createAPIRequest<Schema$GoogleLongrunningOperation>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleLongrunningOperation>(parameters);
      }
    }

    /**
     * Transfers customer entitlements from their current reseller to Google. Possible error codes: * PERMISSION_DENIED: The customer doesn't belong to the reseller. * INVALID_ARGUMENT: Required request parameters are missing or invalid. * NOT_FOUND: The customer or offer resource was not found. * ALREADY_EXISTS: The SKU was already transferred for the customer. * CONDITION_NOT_MET or FAILED_PRECONDITION: * The SKU requires domain verification to transfer, but the domain is not verified. * An Add-On SKU (example, Vault or Drive) is missing the pre-requisite SKU (example, G Suite Basic). * (Developer accounts only) Reseller and resold domain must meet the following naming requirements: * Domain names must start with goog-test. * Domain names must include the reseller domain. * INTERNAL: Any non-user error related to a technical issue in the backend. Contact Cloud Channel support. * UNKNOWN: Any non-user error related to a technical issue in the backend. Contact Cloud Channel support. Return value: The ID of a long-running operation. To get the results of the operation, call the GetOperation method of CloudChannelOperationsService. The response will contain google.protobuf.Empty on success. The Operation metadata will contain an instance of OperationMetadata.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/cloudchannel.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const cloudchannel = google.cloudchannel('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/apps.order'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res =
     *     await cloudchannel.accounts.customers.transferEntitlementsToGoogle({
     *       // Required. The resource name of the reseller's customer account where the entitlements transfer from. Parent uses the format: accounts/{account_id\}/customers/{customer_id\}
     *       parent: 'accounts/my-account/customers/my-customer',
     *
     *       // Request body metadata
     *       requestBody: {
     *         // request body parameters
     *         // {
     *         //   "entitlements": [],
     *         //   "requestId": "my_requestId"
     *         // }
     *       },
     *     });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "done": false,
     *   //   "error": {},
     *   //   "metadata": {},
     *   //   "name": "my_name",
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
    transferEntitlementsToGoogle(
      params: Params$Resource$Accounts$Customers$Transferentitlementstogoogle,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    transferEntitlementsToGoogle(
      params?: Params$Resource$Accounts$Customers$Transferentitlementstogoogle,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleLongrunningOperation>;
    transferEntitlementsToGoogle(
      params: Params$Resource$Accounts$Customers$Transferentitlementstogoogle,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    transferEntitlementsToGoogle(
      params: Params$Resource$Accounts$Customers$Transferentitlementstogoogle,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>,
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    transferEntitlementsToGoogle(
      params: Params$Resource$Accounts$Customers$Transferentitlementstogoogle,
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    transferEntitlementsToGoogle(
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    transferEntitlementsToGoogle(
      paramsOrCallback?:
        | Params$Resource$Accounts$Customers$Transferentitlementstogoogle
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleLongrunningOperation>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Accounts$Customers$Transferentitlementstogoogle;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Accounts$Customers$Transferentitlementstogoogle;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://cloudchannel.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl + '/v1/{+parent}:transferEntitlementsToGoogle'
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
        createAPIRequest<Schema$GoogleLongrunningOperation>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleLongrunningOperation>(parameters);
      }
    }
  }

  export interface Params$Resource$Accounts$Customers$Create
    extends StandardParameters {
    /**
     * Required. The resource name of reseller account in which to create the customer. Parent uses the format: accounts/{account_id\}
     */
    parent?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleCloudChannelV1Customer;
  }
  export interface Params$Resource$Accounts$Customers$Delete
    extends StandardParameters {
    /**
     * Required. The resource name of the customer to delete.
     */
    name?: string;
  }
  export interface Params$Resource$Accounts$Customers$Get
    extends StandardParameters {
    /**
     * Required. The resource name of the customer to retrieve. Name uses the format: accounts/{account_id\}/customers/{customer_id\}
     */
    name?: string;
  }
  export interface Params$Resource$Accounts$Customers$Import
    extends StandardParameters {
    /**
     * Required. The resource name of the reseller's account. Parent takes the format: accounts/{account_id\} or accounts/{account_id\}/channelPartnerLinks/{channel_partner_id\}
     */
    parent?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleCloudChannelV1ImportCustomerRequest;
  }
  export interface Params$Resource$Accounts$Customers$List
    extends StandardParameters {
    /**
     * Optional. The maximum number of customers to return. The service may return fewer than this value. If unspecified, returns at most 10 customers. The maximum value is 50.
     */
    pageSize?: number;
    /**
     * Optional. A token identifying a page of results other than the first page. Obtained through ListCustomersResponse.next_page_token of the previous CloudChannelService.ListCustomers call.
     */
    pageToken?: string;
    /**
     * Required. The resource name of the reseller account to list customers from. Parent uses the format: accounts/{account_id\}.
     */
    parent?: string;
  }
  export interface Params$Resource$Accounts$Customers$Listpurchasableoffers
    extends StandardParameters {
    /**
     * Required. Resource name of the entitlement. Format: accounts/{account_id\}/customers/{customer_id\}/entitlements/{entitlement_id\}
     */
    'changeOfferPurchase.entitlement'?: string;
    /**
     * Optional. Resource name of the new target SKU. Provide this SKU when upgrading or downgrading an entitlement. Format: products/{product_id\}/skus/{sku_id\}
     */
    'changeOfferPurchase.newSku'?: string;
    /**
     * Required. SKU that the result should be restricted to. Format: products/{product_id\}/skus/{sku_id\}.
     */
    'createEntitlementPurchase.sku'?: string;
    /**
     * Required. The resource name of the customer to list Offers for. Format: accounts/{account_id\}/customers/{customer_id\}.
     */
    customer?: string;
    /**
     * Optional. The BCP-47 language code. For example, "en-US". The response will localize in the corresponding language code, if specified. The default value is "en-US".
     */
    languageCode?: string;
    /**
     * Optional. Requested page size. Server might return fewer results than requested. If unspecified, returns at most 100 Offers. The maximum value is 1000; the server will coerce values above 1000.
     */
    pageSize?: number;
    /**
     * Optional. A token for a page of results other than the first page.
     */
    pageToken?: string;
  }
  export interface Params$Resource$Accounts$Customers$Listpurchasableskus
    extends StandardParameters {
    /**
     * Required. Change Type for the entitlement.
     */
    'changeOfferPurchase.changeType'?: string;
    /**
     * Required. Resource name of the entitlement. Format: accounts/{account_id\}/customers/{customer_id\}/entitlements/{entitlement_id\}
     */
    'changeOfferPurchase.entitlement'?: string;
    /**
     * Required. List SKUs belonging to this Product. Format: products/{product_id\}. Supports products/- to retrieve SKUs for all products.
     */
    'createEntitlementPurchase.product'?: string;
    /**
     * Required. The resource name of the customer to list SKUs for. Format: accounts/{account_id\}/customers/{customer_id\}.
     */
    customer?: string;
    /**
     * Optional. The BCP-47 language code. For example, "en-US". The response will localize in the corresponding language code, if specified. The default value is "en-US".
     */
    languageCode?: string;
    /**
     * Optional. Requested page size. Server might return fewer results than requested. If unspecified, returns at most 100 SKUs. The maximum value is 1000; the server will coerce values above 1000.
     */
    pageSize?: number;
    /**
     * Optional. A token for a page of results other than the first page.
     */
    pageToken?: string;
  }
  export interface Params$Resource$Accounts$Customers$Patch
    extends StandardParameters {
    /**
     * Output only. Resource name of the customer. Format: accounts/{account_id\}/customers/{customer_id\}
     */
    name?: string;
    /**
     * The update mask that applies to the resource. Optional.
     */
    updateMask?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleCloudChannelV1Customer;
  }
  export interface Params$Resource$Accounts$Customers$Provisioncloudidentity
    extends StandardParameters {
    /**
     * Required. Resource name of the customer. Format: accounts/{account_id\}/customers/{customer_id\}
     */
    customer?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleCloudChannelV1ProvisionCloudIdentityRequest;
  }
  export interface Params$Resource$Accounts$Customers$Transferentitlements
    extends StandardParameters {
    /**
     * Required. The resource name of the reseller's customer account that will receive transferred entitlements. Parent uses the format: accounts/{account_id\}/customers/{customer_id\}
     */
    parent?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleCloudChannelV1TransferEntitlementsRequest;
  }
  export interface Params$Resource$Accounts$Customers$Transferentitlementstogoogle
    extends StandardParameters {
    /**
     * Required. The resource name of the reseller's customer account where the entitlements transfer from. Parent uses the format: accounts/{account_id\}/customers/{customer_id\}
     */
    parent?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleCloudChannelV1TransferEntitlementsToGoogleRequest;
  }

  export class Resource$Accounts$Customers$Entitlements {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Activates a previously suspended entitlement. Entitlements suspended for pending ToS acceptance can't be activated using this method. An entitlement activation is a long-running operation and it updates the state of the customer entitlement. Possible error codes: * PERMISSION_DENIED: The reseller account making the request is different from the reseller account in the API request. * INVALID_ARGUMENT: Required request parameters are missing or invalid. * NOT_FOUND: Entitlement resource not found. * SUSPENSION_NOT_RESELLER_INITIATED: Can only activate reseller-initiated suspensions and entitlements that have accepted the TOS. * NOT_SUSPENDED: Can only activate suspended entitlements not in an ACTIVE state. * INTERNAL: Any non-user error related to a technical issue in the backend. Contact Cloud Channel support. * UNKNOWN: Any non-user error related to a technical issue in the backend. Contact Cloud Channel support. Return value: The ID of a long-running operation. To get the results of the operation, call the GetOperation method of CloudChannelOperationsService. The Operation metadata will contain an instance of OperationMetadata.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/cloudchannel.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const cloudchannel = google.cloudchannel('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/apps.order'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await cloudchannel.accounts.customers.entitlements.activate({
     *     // Required. The resource name of the entitlement to activate. Name uses the format: accounts/{account_id\}/customers/{customer_id\}/entitlements/{entitlement_id\}
     *     name: 'accounts/my-account/customers/my-customer/entitlements/my-entitlement',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "requestId": "my_requestId"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "done": false,
     *   //   "error": {},
     *   //   "metadata": {},
     *   //   "name": "my_name",
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
    activate(
      params: Params$Resource$Accounts$Customers$Entitlements$Activate,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    activate(
      params?: Params$Resource$Accounts$Customers$Entitlements$Activate,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleLongrunningOperation>;
    activate(
      params: Params$Resource$Accounts$Customers$Entitlements$Activate,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    activate(
      params: Params$Resource$Accounts$Customers$Entitlements$Activate,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>,
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    activate(
      params: Params$Resource$Accounts$Customers$Entitlements$Activate,
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    activate(
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    activate(
      paramsOrCallback?:
        | Params$Resource$Accounts$Customers$Entitlements$Activate
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleLongrunningOperation>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Accounts$Customers$Entitlements$Activate;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Accounts$Customers$Entitlements$Activate;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://cloudchannel.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}:activate').replace(
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
        createAPIRequest<Schema$GoogleLongrunningOperation>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleLongrunningOperation>(parameters);
      }
    }

    /**
     * Cancels a previously fulfilled entitlement. An entitlement cancellation is a long-running operation. Possible error codes: * PERMISSION_DENIED: The reseller account making the request is different from the reseller account in the API request. * FAILED_PRECONDITION: There are Google Cloud projects linked to the Google Cloud entitlement's Cloud Billing subaccount. * INVALID_ARGUMENT: Required request parameters are missing or invalid. * NOT_FOUND: Entitlement resource not found. * DELETION_TYPE_NOT_ALLOWED: Cancel is only allowed for Google Workspace add-ons, or entitlements for Google Cloud's development platform. * INTERNAL: Any non-user error related to a technical issue in the backend. Contact Cloud Channel support. * UNKNOWN: Any non-user error related to a technical issue in the backend. Contact Cloud Channel support. Return value: The ID of a long-running operation. To get the results of the operation, call the GetOperation method of CloudChannelOperationsService. The response will contain google.protobuf.Empty on success. The Operation metadata will contain an instance of OperationMetadata.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/cloudchannel.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const cloudchannel = google.cloudchannel('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/apps.order'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await cloudchannel.accounts.customers.entitlements.cancel({
     *     // Required. The resource name of the entitlement to cancel. Name uses the format: accounts/{account_id\}/customers/{customer_id\}/entitlements/{entitlement_id\}
     *     name: 'accounts/my-account/customers/my-customer/entitlements/my-entitlement',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "requestId": "my_requestId"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "done": false,
     *   //   "error": {},
     *   //   "metadata": {},
     *   //   "name": "my_name",
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
    cancel(
      params: Params$Resource$Accounts$Customers$Entitlements$Cancel,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    cancel(
      params?: Params$Resource$Accounts$Customers$Entitlements$Cancel,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleLongrunningOperation>;
    cancel(
      params: Params$Resource$Accounts$Customers$Entitlements$Cancel,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    cancel(
      params: Params$Resource$Accounts$Customers$Entitlements$Cancel,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>,
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    cancel(
      params: Params$Resource$Accounts$Customers$Entitlements$Cancel,
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    cancel(
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    cancel(
      paramsOrCallback?:
        | Params$Resource$Accounts$Customers$Entitlements$Cancel
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleLongrunningOperation>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Accounts$Customers$Entitlements$Cancel;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Accounts$Customers$Entitlements$Cancel;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://cloudchannel.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}:cancel').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$GoogleLongrunningOperation>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleLongrunningOperation>(parameters);
      }
    }

    /**
     * Updates the Offer for an existing customer entitlement. An entitlement update is a long-running operation and it updates the entitlement as a result of fulfillment. Possible error codes: * PERMISSION_DENIED: The customer doesn't belong to the reseller. * INVALID_ARGUMENT: Required request parameters are missing or invalid. * NOT_FOUND: Offer or Entitlement resource not found. * INTERNAL: Any non-user error related to a technical issue in the backend. Contact Cloud Channel support. * UNKNOWN: Any non-user error related to a technical issue in the backend. Contact Cloud Channel support. Return value: The ID of a long-running operation. To get the results of the operation, call the GetOperation method of CloudChannelOperationsService. The Operation metadata will contain an instance of OperationMetadata.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/cloudchannel.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const cloudchannel = google.cloudchannel('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/apps.order'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await cloudchannel.accounts.customers.entitlements.changeOffer({
     *     // Required. The resource name of the entitlement to update. Name uses the format: accounts/{account_id\}/customers/{customer_id\}/entitlements/{entitlement_id\}
     *     name: 'accounts/my-account/customers/my-customer/entitlements/my-entitlement',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "offer": "my_offer",
     *       //   "parameters": [],
     *       //   "purchaseOrderId": "my_purchaseOrderId",
     *       //   "requestId": "my_requestId"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "done": false,
     *   //   "error": {},
     *   //   "metadata": {},
     *   //   "name": "my_name",
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
    changeOffer(
      params: Params$Resource$Accounts$Customers$Entitlements$Changeoffer,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    changeOffer(
      params?: Params$Resource$Accounts$Customers$Entitlements$Changeoffer,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleLongrunningOperation>;
    changeOffer(
      params: Params$Resource$Accounts$Customers$Entitlements$Changeoffer,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    changeOffer(
      params: Params$Resource$Accounts$Customers$Entitlements$Changeoffer,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>,
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    changeOffer(
      params: Params$Resource$Accounts$Customers$Entitlements$Changeoffer,
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    changeOffer(
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    changeOffer(
      paramsOrCallback?:
        | Params$Resource$Accounts$Customers$Entitlements$Changeoffer
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleLongrunningOperation>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Accounts$Customers$Entitlements$Changeoffer;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Accounts$Customers$Entitlements$Changeoffer;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://cloudchannel.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}:changeOffer').replace(
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
        createAPIRequest<Schema$GoogleLongrunningOperation>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleLongrunningOperation>(parameters);
      }
    }

    /**
     * Change parameters of the entitlement. An entitlement update is a long-running operation and it updates the entitlement as a result of fulfillment. Possible error codes: * PERMISSION_DENIED: The customer doesn't belong to the reseller. * INVALID_ARGUMENT: Required request parameters are missing or invalid. For example, the number of seats being changed is greater than the allowed number of max seats, or decreasing seats for a commitment based plan. * NOT_FOUND: Entitlement resource not found. * INTERNAL: Any non-user error related to a technical issue in the backend. Contact Cloud Channel support. * UNKNOWN: Any non-user error related to a technical issue in the backend. Contact Cloud Channel support. Return value: The ID of a long-running operation. To get the results of the operation, call the GetOperation method of CloudChannelOperationsService. The Operation metadata will contain an instance of OperationMetadata.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/cloudchannel.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const cloudchannel = google.cloudchannel('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/apps.order'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res =
     *     await cloudchannel.accounts.customers.entitlements.changeParameters({
     *       // Required. The name of the entitlement to update. Name uses the format: accounts/{account_id\}/customers/{customer_id\}/entitlements/{entitlement_id\}
     *       name: 'accounts/my-account/customers/my-customer/entitlements/my-entitlement',
     *
     *       // Request body metadata
     *       requestBody: {
     *         // request body parameters
     *         // {
     *         //   "parameters": [],
     *         //   "purchaseOrderId": "my_purchaseOrderId",
     *         //   "requestId": "my_requestId"
     *         // }
     *       },
     *     });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "done": false,
     *   //   "error": {},
     *   //   "metadata": {},
     *   //   "name": "my_name",
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
    changeParameters(
      params: Params$Resource$Accounts$Customers$Entitlements$Changeparameters,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    changeParameters(
      params?: Params$Resource$Accounts$Customers$Entitlements$Changeparameters,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleLongrunningOperation>;
    changeParameters(
      params: Params$Resource$Accounts$Customers$Entitlements$Changeparameters,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    changeParameters(
      params: Params$Resource$Accounts$Customers$Entitlements$Changeparameters,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>,
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    changeParameters(
      params: Params$Resource$Accounts$Customers$Entitlements$Changeparameters,
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    changeParameters(
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    changeParameters(
      paramsOrCallback?:
        | Params$Resource$Accounts$Customers$Entitlements$Changeparameters
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleLongrunningOperation>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Accounts$Customers$Entitlements$Changeparameters;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Accounts$Customers$Entitlements$Changeparameters;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://cloudchannel.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}:changeParameters').replace(
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
        createAPIRequest<Schema$GoogleLongrunningOperation>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleLongrunningOperation>(parameters);
      }
    }

    /**
     * Updates the renewal settings for an existing customer entitlement. An entitlement update is a long-running operation and it updates the entitlement as a result of fulfillment. Possible error codes: * PERMISSION_DENIED: The customer doesn't belong to the reseller. * INVALID_ARGUMENT: Required request parameters are missing or invalid. * NOT_FOUND: Entitlement resource not found. * NOT_COMMITMENT_PLAN: Renewal Settings are only applicable for a commitment plan. Can't enable or disable renewals for non-commitment plans. * INTERNAL: Any non-user error related to a technical issue in the backend. Contact Cloud Channel support. * UNKNOWN: Any non-user error related to a technical issue in the backend. Contact Cloud Channel support. Return value: The ID of a long-running operation. To get the results of the operation, call the GetOperation method of CloudChannelOperationsService. The Operation metadata will contain an instance of OperationMetadata.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/cloudchannel.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const cloudchannel = google.cloudchannel('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/apps.order'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res =
     *     await cloudchannel.accounts.customers.entitlements.changeRenewalSettings({
     *       // Required. The name of the entitlement to update. Name uses the format: accounts/{account_id\}/customers/{customer_id\}/entitlements/{entitlement_id\}
     *       name: 'accounts/my-account/customers/my-customer/entitlements/my-entitlement',
     *
     *       // Request body metadata
     *       requestBody: {
     *         // request body parameters
     *         // {
     *         //   "renewalSettings": {},
     *         //   "requestId": "my_requestId"
     *         // }
     *       },
     *     });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "done": false,
     *   //   "error": {},
     *   //   "metadata": {},
     *   //   "name": "my_name",
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
    changeRenewalSettings(
      params: Params$Resource$Accounts$Customers$Entitlements$Changerenewalsettings,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    changeRenewalSettings(
      params?: Params$Resource$Accounts$Customers$Entitlements$Changerenewalsettings,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleLongrunningOperation>;
    changeRenewalSettings(
      params: Params$Resource$Accounts$Customers$Entitlements$Changerenewalsettings,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    changeRenewalSettings(
      params: Params$Resource$Accounts$Customers$Entitlements$Changerenewalsettings,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>,
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    changeRenewalSettings(
      params: Params$Resource$Accounts$Customers$Entitlements$Changerenewalsettings,
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    changeRenewalSettings(
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    changeRenewalSettings(
      paramsOrCallback?:
        | Params$Resource$Accounts$Customers$Entitlements$Changerenewalsettings
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleLongrunningOperation>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Accounts$Customers$Entitlements$Changerenewalsettings;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Accounts$Customers$Entitlements$Changerenewalsettings;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://cloudchannel.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}:changeRenewalSettings').replace(
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
        createAPIRequest<Schema$GoogleLongrunningOperation>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleLongrunningOperation>(parameters);
      }
    }

    /**
     * Creates an entitlement for a customer. Possible error codes: * PERMISSION_DENIED: The customer doesn't belong to the reseller. * INVALID_ARGUMENT: * Required request parameters are missing or invalid. * There is already a customer entitlement for a SKU from the same product family. * INVALID_VALUE: Make sure the OfferId is valid. If it is, contact Google Channel support for further troubleshooting. * NOT_FOUND: The customer or offer resource was not found. * ALREADY_EXISTS: * The SKU was already purchased for the customer. * The customer's primary email already exists. Retry after changing the customer's primary contact email. * CONDITION_NOT_MET or FAILED_PRECONDITION: * The domain required for purchasing a SKU has not been verified. * A pre-requisite SKU required to purchase an Add-On SKU is missing. For example, Google Workspace Business Starter is required to purchase Vault or Drive. * (Developer accounts only) Reseller and resold domain must meet the following naming requirements: * Domain names must start with goog-test. * Domain names must include the reseller domain. * INTERNAL: Any non-user error related to a technical issue in the backend. Contact Cloud Channel support. * UNKNOWN: Any non-user error related to a technical issue in the backend. Contact Cloud Channel support. Return value: The ID of a long-running operation. To get the results of the operation, call the GetOperation method of CloudChannelOperationsService. The Operation metadata will contain an instance of OperationMetadata.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/cloudchannel.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const cloudchannel = google.cloudchannel('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/apps.order'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await cloudchannel.accounts.customers.entitlements.create({
     *     // Required. The resource name of the reseller's customer account in which to create the entitlement. Parent uses the format: accounts/{account_id\}/customers/{customer_id\}
     *     parent: 'accounts/my-account/customers/my-customer',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "entitlement": {},
     *       //   "requestId": "my_requestId"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "done": false,
     *   //   "error": {},
     *   //   "metadata": {},
     *   //   "name": "my_name",
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
    create(
      params: Params$Resource$Accounts$Customers$Entitlements$Create,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    create(
      params?: Params$Resource$Accounts$Customers$Entitlements$Create,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleLongrunningOperation>;
    create(
      params: Params$Resource$Accounts$Customers$Entitlements$Create,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    create(
      params: Params$Resource$Accounts$Customers$Entitlements$Create,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>,
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    create(
      params: Params$Resource$Accounts$Customers$Entitlements$Create,
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    create(
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    create(
      paramsOrCallback?:
        | Params$Resource$Accounts$Customers$Entitlements$Create
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleLongrunningOperation>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Accounts$Customers$Entitlements$Create;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Accounts$Customers$Entitlements$Create;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://cloudchannel.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}/entitlements').replace(
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
        createAPIRequest<Schema$GoogleLongrunningOperation>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleLongrunningOperation>(parameters);
      }
    }

    /**
     * Returns the requested Entitlement resource. Possible error codes: * PERMISSION_DENIED: The customer doesn't belong to the reseller. * INVALID_ARGUMENT: Required request parameters are missing or invalid. * NOT_FOUND: The customer entitlement was not found. Return value: The requested Entitlement resource.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/cloudchannel.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const cloudchannel = google.cloudchannel('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/apps.order'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await cloudchannel.accounts.customers.entitlements.get({
     *     // Required. The resource name of the entitlement to retrieve. Name uses the format: accounts/{account_id\}/customers/{customer_id\}/entitlements/{entitlement_id\}
     *     name: 'accounts/my-account/customers/my-customer/entitlements/my-entitlement',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "associationInfo": {},
     *   //   "commitmentSettings": {},
     *   //   "createTime": "my_createTime",
     *   //   "name": "my_name",
     *   //   "offer": "my_offer",
     *   //   "parameters": [],
     *   //   "provisionedService": {},
     *   //   "provisioningState": "my_provisioningState",
     *   //   "purchaseOrderId": "my_purchaseOrderId",
     *   //   "suspensionReasons": [],
     *   //   "trialSettings": {},
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
      params: Params$Resource$Accounts$Customers$Entitlements$Get,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    get(
      params?: Params$Resource$Accounts$Customers$Entitlements$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleCloudChannelV1Entitlement>;
    get(
      params: Params$Resource$Accounts$Customers$Entitlements$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Accounts$Customers$Entitlements$Get,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleCloudChannelV1Entitlement>,
      callback: BodyResponseCallback<Schema$GoogleCloudChannelV1Entitlement>
    ): void;
    get(
      params: Params$Resource$Accounts$Customers$Entitlements$Get,
      callback: BodyResponseCallback<Schema$GoogleCloudChannelV1Entitlement>
    ): void;
    get(
      callback: BodyResponseCallback<Schema$GoogleCloudChannelV1Entitlement>
    ): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Accounts$Customers$Entitlements$Get
        | BodyResponseCallback<Schema$GoogleCloudChannelV1Entitlement>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleCloudChannelV1Entitlement>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleCloudChannelV1Entitlement>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleCloudChannelV1Entitlement>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Accounts$Customers$Entitlements$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Accounts$Customers$Entitlements$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://cloudchannel.googleapis.com/';
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
        createAPIRequest<Schema$GoogleCloudChannelV1Entitlement>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleCloudChannelV1Entitlement>(
          parameters
        );
      }
    }

    /**
     * Lists Entitlements belonging to a customer. Possible error codes: * PERMISSION_DENIED: The customer doesn't belong to the reseller. * INVALID_ARGUMENT: Required request parameters are missing or invalid. Return value: A list of the customer's Entitlements.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/cloudchannel.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const cloudchannel = google.cloudchannel('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/apps.order'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await cloudchannel.accounts.customers.entitlements.list({
     *     // Optional. Requested page size. Server might return fewer results than requested. If unspecified, return at most 50 entitlements. The maximum value is 100; the server will coerce values above 100.
     *     pageSize: 'placeholder-value',
     *     // Optional. A token for a page of results other than the first page. Obtained using ListEntitlementsResponse.next_page_token of the previous CloudChannelService.ListEntitlements call.
     *     pageToken: 'placeholder-value',
     *     // Required. The resource name of the reseller's customer account to list entitlements for. Parent uses the format: accounts/{account_id\}/customers/{customer_id\}
     *     parent: 'accounts/my-account/customers/my-customer',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "entitlements": [],
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
      params: Params$Resource$Accounts$Customers$Entitlements$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Accounts$Customers$Entitlements$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleCloudChannelV1ListEntitlementsResponse>;
    list(
      params: Params$Resource$Accounts$Customers$Entitlements$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Accounts$Customers$Entitlements$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleCloudChannelV1ListEntitlementsResponse>,
      callback: BodyResponseCallback<Schema$GoogleCloudChannelV1ListEntitlementsResponse>
    ): void;
    list(
      params: Params$Resource$Accounts$Customers$Entitlements$List,
      callback: BodyResponseCallback<Schema$GoogleCloudChannelV1ListEntitlementsResponse>
    ): void;
    list(
      callback: BodyResponseCallback<Schema$GoogleCloudChannelV1ListEntitlementsResponse>
    ): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Accounts$Customers$Entitlements$List
        | BodyResponseCallback<Schema$GoogleCloudChannelV1ListEntitlementsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleCloudChannelV1ListEntitlementsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleCloudChannelV1ListEntitlementsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleCloudChannelV1ListEntitlementsResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Accounts$Customers$Entitlements$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Accounts$Customers$Entitlements$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://cloudchannel.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}/entitlements').replace(
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
        createAPIRequest<Schema$GoogleCloudChannelV1ListEntitlementsResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleCloudChannelV1ListEntitlementsResponse>(
          parameters
        );
      }
    }

    /**
     * Returns the requested Offer resource. Possible error codes: * PERMISSION_DENIED: The entitlement doesn't belong to the reseller. * INVALID_ARGUMENT: Required request parameters are missing or invalid. * NOT_FOUND: Entitlement or offer was not found. Return value: The Offer resource.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/cloudchannel.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const cloudchannel = google.cloudchannel('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/apps.order'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await cloudchannel.accounts.customers.entitlements.lookupOffer({
     *     // Required. The resource name of the entitlement to retrieve the Offer. Entitlement uses the format: accounts/{account_id\}/customers/{customer_id\}/entitlements/{entitlement_id\}
     *     entitlement:
     *       'accounts/my-account/customers/my-customer/entitlements/my-entitlement',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "constraints": {},
     *   //   "endTime": "my_endTime",
     *   //   "marketingInfo": {},
     *   //   "name": "my_name",
     *   //   "parameterDefinitions": [],
     *   //   "plan": {},
     *   //   "priceByResources": [],
     *   //   "sku": {},
     *   //   "startTime": "my_startTime"
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
    lookupOffer(
      params: Params$Resource$Accounts$Customers$Entitlements$Lookupoffer,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    lookupOffer(
      params?: Params$Resource$Accounts$Customers$Entitlements$Lookupoffer,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleCloudChannelV1Offer>;
    lookupOffer(
      params: Params$Resource$Accounts$Customers$Entitlements$Lookupoffer,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    lookupOffer(
      params: Params$Resource$Accounts$Customers$Entitlements$Lookupoffer,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleCloudChannelV1Offer>,
      callback: BodyResponseCallback<Schema$GoogleCloudChannelV1Offer>
    ): void;
    lookupOffer(
      params: Params$Resource$Accounts$Customers$Entitlements$Lookupoffer,
      callback: BodyResponseCallback<Schema$GoogleCloudChannelV1Offer>
    ): void;
    lookupOffer(
      callback: BodyResponseCallback<Schema$GoogleCloudChannelV1Offer>
    ): void;
    lookupOffer(
      paramsOrCallback?:
        | Params$Resource$Accounts$Customers$Entitlements$Lookupoffer
        | BodyResponseCallback<Schema$GoogleCloudChannelV1Offer>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleCloudChannelV1Offer>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleCloudChannelV1Offer>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleCloudChannelV1Offer>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Accounts$Customers$Entitlements$Lookupoffer;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Accounts$Customers$Entitlements$Lookupoffer;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://cloudchannel.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+entitlement}:lookupOffer').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['entitlement'],
        pathParams: ['entitlement'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$GoogleCloudChannelV1Offer>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleCloudChannelV1Offer>(parameters);
      }
    }

    /**
     * Starts paid service for a trial entitlement. Starts paid service for a trial entitlement immediately. This method is only applicable if a plan is set up for a trial entitlement but has some trial days remaining. Possible error codes: * PERMISSION_DENIED: The customer doesn't belong to the reseller. * INVALID_ARGUMENT: Required request parameters are missing or invalid. * NOT_FOUND: Entitlement resource not found. * FAILED_PRECONDITION/NOT_IN_TRIAL: This method only works for entitlement on trial plans. * INTERNAL: Any non-user error related to a technical issue in the backend. Contact Cloud Channel support. * UNKNOWN: Any non-user error related to a technical issue in the backend. Contact Cloud Channel support. Return value: The ID of a long-running operation. To get the results of the operation, call the GetOperation method of CloudChannelOperationsService. The Operation metadata will contain an instance of OperationMetadata.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/cloudchannel.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const cloudchannel = google.cloudchannel('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/apps.order'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res =
     *     await cloudchannel.accounts.customers.entitlements.startPaidService({
     *       // Required. The name of the entitlement to start a paid service for. Name uses the format: accounts/{account_id\}/customers/{customer_id\}/entitlements/{entitlement_id\}
     *       name: 'accounts/my-account/customers/my-customer/entitlements/my-entitlement',
     *
     *       // Request body metadata
     *       requestBody: {
     *         // request body parameters
     *         // {
     *         //   "requestId": "my_requestId"
     *         // }
     *       },
     *     });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "done": false,
     *   //   "error": {},
     *   //   "metadata": {},
     *   //   "name": "my_name",
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
    startPaidService(
      params: Params$Resource$Accounts$Customers$Entitlements$Startpaidservice,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    startPaidService(
      params?: Params$Resource$Accounts$Customers$Entitlements$Startpaidservice,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleLongrunningOperation>;
    startPaidService(
      params: Params$Resource$Accounts$Customers$Entitlements$Startpaidservice,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    startPaidService(
      params: Params$Resource$Accounts$Customers$Entitlements$Startpaidservice,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>,
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    startPaidService(
      params: Params$Resource$Accounts$Customers$Entitlements$Startpaidservice,
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    startPaidService(
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    startPaidService(
      paramsOrCallback?:
        | Params$Resource$Accounts$Customers$Entitlements$Startpaidservice
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleLongrunningOperation>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Accounts$Customers$Entitlements$Startpaidservice;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Accounts$Customers$Entitlements$Startpaidservice;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://cloudchannel.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}:startPaidService').replace(
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
        createAPIRequest<Schema$GoogleLongrunningOperation>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleLongrunningOperation>(parameters);
      }
    }

    /**
     * Suspends a previously fulfilled entitlement. An entitlement suspension is a long-running operation. Possible error codes: * PERMISSION_DENIED: The customer doesn't belong to the reseller. * INVALID_ARGUMENT: Required request parameters are missing or invalid. * NOT_FOUND: Entitlement resource not found. * NOT_ACTIVE: Entitlement is not active. * INTERNAL: Any non-user error related to a technical issue in the backend. Contact Cloud Channel support. * UNKNOWN: Any non-user error related to a technical issue in the backend. Contact Cloud Channel support. Return value: The ID of a long-running operation. To get the results of the operation, call the GetOperation method of CloudChannelOperationsService. The Operation metadata will contain an instance of OperationMetadata.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/cloudchannel.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const cloudchannel = google.cloudchannel('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/apps.order'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await cloudchannel.accounts.customers.entitlements.suspend({
     *     // Required. The resource name of the entitlement to suspend. Name uses the format: accounts/{account_id\}/customers/{customer_id\}/entitlements/{entitlement_id\}
     *     name: 'accounts/my-account/customers/my-customer/entitlements/my-entitlement',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "requestId": "my_requestId"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "done": false,
     *   //   "error": {},
     *   //   "metadata": {},
     *   //   "name": "my_name",
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
    suspend(
      params: Params$Resource$Accounts$Customers$Entitlements$Suspend,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    suspend(
      params?: Params$Resource$Accounts$Customers$Entitlements$Suspend,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleLongrunningOperation>;
    suspend(
      params: Params$Resource$Accounts$Customers$Entitlements$Suspend,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    suspend(
      params: Params$Resource$Accounts$Customers$Entitlements$Suspend,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>,
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    suspend(
      params: Params$Resource$Accounts$Customers$Entitlements$Suspend,
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    suspend(
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    suspend(
      paramsOrCallback?:
        | Params$Resource$Accounts$Customers$Entitlements$Suspend
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleLongrunningOperation>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Accounts$Customers$Entitlements$Suspend;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Accounts$Customers$Entitlements$Suspend;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://cloudchannel.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}:suspend').replace(
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
        createAPIRequest<Schema$GoogleLongrunningOperation>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleLongrunningOperation>(parameters);
      }
    }
  }

  export interface Params$Resource$Accounts$Customers$Entitlements$Activate
    extends StandardParameters {
    /**
     * Required. The resource name of the entitlement to activate. Name uses the format: accounts/{account_id\}/customers/{customer_id\}/entitlements/{entitlement_id\}
     */
    name?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleCloudChannelV1ActivateEntitlementRequest;
  }
  export interface Params$Resource$Accounts$Customers$Entitlements$Cancel
    extends StandardParameters {
    /**
     * Required. The resource name of the entitlement to cancel. Name uses the format: accounts/{account_id\}/customers/{customer_id\}/entitlements/{entitlement_id\}
     */
    name?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleCloudChannelV1CancelEntitlementRequest;
  }
  export interface Params$Resource$Accounts$Customers$Entitlements$Changeoffer
    extends StandardParameters {
    /**
     * Required. The resource name of the entitlement to update. Name uses the format: accounts/{account_id\}/customers/{customer_id\}/entitlements/{entitlement_id\}
     */
    name?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleCloudChannelV1ChangeOfferRequest;
  }
  export interface Params$Resource$Accounts$Customers$Entitlements$Changeparameters
    extends StandardParameters {
    /**
     * Required. The name of the entitlement to update. Name uses the format: accounts/{account_id\}/customers/{customer_id\}/entitlements/{entitlement_id\}
     */
    name?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleCloudChannelV1ChangeParametersRequest;
  }
  export interface Params$Resource$Accounts$Customers$Entitlements$Changerenewalsettings
    extends StandardParameters {
    /**
     * Required. The name of the entitlement to update. Name uses the format: accounts/{account_id\}/customers/{customer_id\}/entitlements/{entitlement_id\}
     */
    name?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleCloudChannelV1ChangeRenewalSettingsRequest;
  }
  export interface Params$Resource$Accounts$Customers$Entitlements$Create
    extends StandardParameters {
    /**
     * Required. The resource name of the reseller's customer account in which to create the entitlement. Parent uses the format: accounts/{account_id\}/customers/{customer_id\}
     */
    parent?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleCloudChannelV1CreateEntitlementRequest;
  }
  export interface Params$Resource$Accounts$Customers$Entitlements$Get
    extends StandardParameters {
    /**
     * Required. The resource name of the entitlement to retrieve. Name uses the format: accounts/{account_id\}/customers/{customer_id\}/entitlements/{entitlement_id\}
     */
    name?: string;
  }
  export interface Params$Resource$Accounts$Customers$Entitlements$List
    extends StandardParameters {
    /**
     * Optional. Requested page size. Server might return fewer results than requested. If unspecified, return at most 50 entitlements. The maximum value is 100; the server will coerce values above 100.
     */
    pageSize?: number;
    /**
     * Optional. A token for a page of results other than the first page. Obtained using ListEntitlementsResponse.next_page_token of the previous CloudChannelService.ListEntitlements call.
     */
    pageToken?: string;
    /**
     * Required. The resource name of the reseller's customer account to list entitlements for. Parent uses the format: accounts/{account_id\}/customers/{customer_id\}
     */
    parent?: string;
  }
  export interface Params$Resource$Accounts$Customers$Entitlements$Lookupoffer
    extends StandardParameters {
    /**
     * Required. The resource name of the entitlement to retrieve the Offer. Entitlement uses the format: accounts/{account_id\}/customers/{customer_id\}/entitlements/{entitlement_id\}
     */
    entitlement?: string;
  }
  export interface Params$Resource$Accounts$Customers$Entitlements$Startpaidservice
    extends StandardParameters {
    /**
     * Required. The name of the entitlement to start a paid service for. Name uses the format: accounts/{account_id\}/customers/{customer_id\}/entitlements/{entitlement_id\}
     */
    name?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleCloudChannelV1StartPaidServiceRequest;
  }
  export interface Params$Resource$Accounts$Customers$Entitlements$Suspend
    extends StandardParameters {
    /**
     * Required. The resource name of the entitlement to suspend. Name uses the format: accounts/{account_id\}/customers/{customer_id\}/entitlements/{entitlement_id\}
     */
    name?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleCloudChannelV1SuspendEntitlementRequest;
  }

  export class Resource$Accounts$Offers {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Lists the Offers the reseller can sell. Possible error codes: * INVALID_ARGUMENT: Required request parameters are missing or invalid.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/cloudchannel.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const cloudchannel = google.cloudchannel('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/apps.order'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await cloudchannel.accounts.offers.list({
     *     // Optional. The expression to filter results by name (name of the Offer), sku.name (name of the SKU), or sku.product.name (name of the Product). Example 1: sku.product.name=products/p1 AND sku.name!=products/p1/skus/s1 Example 2: name=accounts/a1/offers/o1
     *     filter: 'placeholder-value',
     *     // Optional. The BCP-47 language code. For example, "en-US". The response will localize in the corresponding language code, if specified. The default value is "en-US".
     *     languageCode: 'placeholder-value',
     *     // Optional. Requested page size. Server might return fewer results than requested. If unspecified, returns at most 500 Offers. The maximum value is 1000; the server will coerce values above 1000.
     *     pageSize: 'placeholder-value',
     *     // Optional. A token for a page of results other than the first page.
     *     pageToken: 'placeholder-value',
     *     // Required. The resource name of the reseller account from which to list Offers. Parent uses the format: accounts/{account_id\}.
     *     parent: 'accounts/my-account',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "nextPageToken": "my_nextPageToken",
     *   //   "offers": []
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
      params: Params$Resource$Accounts$Offers$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Accounts$Offers$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleCloudChannelV1ListOffersResponse>;
    list(
      params: Params$Resource$Accounts$Offers$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Accounts$Offers$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleCloudChannelV1ListOffersResponse>,
      callback: BodyResponseCallback<Schema$GoogleCloudChannelV1ListOffersResponse>
    ): void;
    list(
      params: Params$Resource$Accounts$Offers$List,
      callback: BodyResponseCallback<Schema$GoogleCloudChannelV1ListOffersResponse>
    ): void;
    list(
      callback: BodyResponseCallback<Schema$GoogleCloudChannelV1ListOffersResponse>
    ): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Accounts$Offers$List
        | BodyResponseCallback<Schema$GoogleCloudChannelV1ListOffersResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleCloudChannelV1ListOffersResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleCloudChannelV1ListOffersResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleCloudChannelV1ListOffersResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Accounts$Offers$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Accounts$Offers$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://cloudchannel.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}/offers').replace(
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
        createAPIRequest<Schema$GoogleCloudChannelV1ListOffersResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleCloudChannelV1ListOffersResponse>(
          parameters
        );
      }
    }
  }

  export interface Params$Resource$Accounts$Offers$List
    extends StandardParameters {
    /**
     * Optional. The expression to filter results by name (name of the Offer), sku.name (name of the SKU), or sku.product.name (name of the Product). Example 1: sku.product.name=products/p1 AND sku.name!=products/p1/skus/s1 Example 2: name=accounts/a1/offers/o1
     */
    filter?: string;
    /**
     * Optional. The BCP-47 language code. For example, "en-US". The response will localize in the corresponding language code, if specified. The default value is "en-US".
     */
    languageCode?: string;
    /**
     * Optional. Requested page size. Server might return fewer results than requested. If unspecified, returns at most 500 Offers. The maximum value is 1000; the server will coerce values above 1000.
     */
    pageSize?: number;
    /**
     * Optional. A token for a page of results other than the first page.
     */
    pageToken?: string;
    /**
     * Required. The resource name of the reseller account from which to list Offers. Parent uses the format: accounts/{account_id\}.
     */
    parent?: string;
  }

  export class Resource$Operations {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/cloudchannel.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const cloudchannel = google.cloudchannel('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/apps.order'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await cloudchannel.operations.cancel({
     *     // The name of the operation resource to be cancelled.
     *     name: 'operations/.*',
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
    cancel(
      params: Params$Resource$Operations$Cancel,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    cancel(
      params?: Params$Resource$Operations$Cancel,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleProtobufEmpty>;
    cancel(
      params: Params$Resource$Operations$Cancel,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    cancel(
      params: Params$Resource$Operations$Cancel,
      options: MethodOptions | BodyResponseCallback<Schema$GoogleProtobufEmpty>,
      callback: BodyResponseCallback<Schema$GoogleProtobufEmpty>
    ): void;
    cancel(
      params: Params$Resource$Operations$Cancel,
      callback: BodyResponseCallback<Schema$GoogleProtobufEmpty>
    ): void;
    cancel(callback: BodyResponseCallback<Schema$GoogleProtobufEmpty>): void;
    cancel(
      paramsOrCallback?:
        | Params$Resource$Operations$Cancel
        | BodyResponseCallback<Schema$GoogleProtobufEmpty>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleProtobufEmpty>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleProtobufEmpty>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleProtobufEmpty>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Operations$Cancel;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Operations$Cancel;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://cloudchannel.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}:cancel').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$GoogleProtobufEmpty>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleProtobufEmpty>(parameters);
      }
    }

    /**
     * Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/cloudchannel.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const cloudchannel = google.cloudchannel('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/apps.order'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await cloudchannel.operations.delete({
     *     // The name of the operation resource to be deleted.
     *     name: 'operations/.*',
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
      params: Params$Resource$Operations$Delete,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    delete(
      params?: Params$Resource$Operations$Delete,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleProtobufEmpty>;
    delete(
      params: Params$Resource$Operations$Delete,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    delete(
      params: Params$Resource$Operations$Delete,
      options: MethodOptions | BodyResponseCallback<Schema$GoogleProtobufEmpty>,
      callback: BodyResponseCallback<Schema$GoogleProtobufEmpty>
    ): void;
    delete(
      params: Params$Resource$Operations$Delete,
      callback: BodyResponseCallback<Schema$GoogleProtobufEmpty>
    ): void;
    delete(callback: BodyResponseCallback<Schema$GoogleProtobufEmpty>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Operations$Delete
        | BodyResponseCallback<Schema$GoogleProtobufEmpty>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleProtobufEmpty>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleProtobufEmpty>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleProtobufEmpty>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Operations$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Operations$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://cloudchannel.googleapis.com/';
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
        createAPIRequest<Schema$GoogleProtobufEmpty>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleProtobufEmpty>(parameters);
      }
    }

    /**
     * Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/cloudchannel.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const cloudchannel = google.cloudchannel('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/apps.order'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await cloudchannel.operations.get({
     *     // The name of the operation resource.
     *     name: 'operations/.*',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "done": false,
     *   //   "error": {},
     *   //   "metadata": {},
     *   //   "name": "my_name",
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
    get(
      params: Params$Resource$Operations$Get,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    get(
      params?: Params$Resource$Operations$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleLongrunningOperation>;
    get(
      params: Params$Resource$Operations$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Operations$Get,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>,
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    get(
      params: Params$Resource$Operations$Get,
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    get(
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Operations$Get
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleLongrunningOperation>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback || {}) as Params$Resource$Operations$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Operations$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://cloudchannel.googleapis.com/';
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
        createAPIRequest<Schema$GoogleLongrunningOperation>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleLongrunningOperation>(parameters);
      }
    }

    /**
     * Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`. NOTE: the `name` binding allows API services to override the binding to use different resource name schemes, such as `users/x/operations`. To override the binding, API services can add a binding such as `"/v1/{name=users/x\}/operations"` to their service configuration. For backwards compatibility, the default name includes the operations collection id, however overriding users must ensure the name binding is the parent resource, without the operations collection id.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/cloudchannel.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const cloudchannel = google.cloudchannel('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/apps.order'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await cloudchannel.operations.list({
     *     // The standard list filter.
     *     filter: 'placeholder-value',
     *     // The name of the operation's parent resource.
     *     name: 'operations',
     *     // The standard list page size.
     *     pageSize: 'placeholder-value',
     *     // The standard list page token.
     *     pageToken: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "nextPageToken": "my_nextPageToken",
     *   //   "operations": []
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
      params: Params$Resource$Operations$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Operations$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleLongrunningListOperationsResponse>;
    list(
      params: Params$Resource$Operations$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Operations$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleLongrunningListOperationsResponse>,
      callback: BodyResponseCallback<Schema$GoogleLongrunningListOperationsResponse>
    ): void;
    list(
      params: Params$Resource$Operations$List,
      callback: BodyResponseCallback<Schema$GoogleLongrunningListOperationsResponse>
    ): void;
    list(
      callback: BodyResponseCallback<Schema$GoogleLongrunningListOperationsResponse>
    ): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Operations$List
        | BodyResponseCallback<Schema$GoogleLongrunningListOperationsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleLongrunningListOperationsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleLongrunningListOperationsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleLongrunningListOperationsResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback || {}) as Params$Resource$Operations$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Operations$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://cloudchannel.googleapis.com/';
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
        createAPIRequest<Schema$GoogleLongrunningListOperationsResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleLongrunningListOperationsResponse>(
          parameters
        );
      }
    }
  }

  export interface Params$Resource$Operations$Cancel
    extends StandardParameters {
    /**
     * The name of the operation resource to be cancelled.
     */
    name?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleLongrunningCancelOperationRequest;
  }
  export interface Params$Resource$Operations$Delete
    extends StandardParameters {
    /**
     * The name of the operation resource to be deleted.
     */
    name?: string;
  }
  export interface Params$Resource$Operations$Get extends StandardParameters {
    /**
     * The name of the operation resource.
     */
    name?: string;
  }
  export interface Params$Resource$Operations$List extends StandardParameters {
    /**
     * The standard list filter.
     */
    filter?: string;
    /**
     * The name of the operation's parent resource.
     */
    name?: string;
    /**
     * The standard list page size.
     */
    pageSize?: number;
    /**
     * The standard list page token.
     */
    pageToken?: string;
  }

  export class Resource$Products {
    context: APIRequestContext;
    skus: Resource$Products$Skus;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.skus = new Resource$Products$Skus(this.context);
    }

    /**
     * Lists the Products the reseller is authorized to sell. Possible error codes: * INVALID_ARGUMENT: Required request parameters are missing or invalid.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/cloudchannel.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const cloudchannel = google.cloudchannel('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/apps.order'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await cloudchannel.products.list({
     *     // Required. The resource name of the reseller account. Format: accounts/{account_id\}.
     *     account: 'placeholder-value',
     *     // Optional. The BCP-47 language code. For example, "en-US". The response will localize in the corresponding language code, if specified. The default value is "en-US".
     *     languageCode: 'placeholder-value',
     *     // Optional. Requested page size. Server might return fewer results than requested. If unspecified, returns at most 100 Products. The maximum value is 1000; the server will coerce values above 1000.
     *     pageSize: 'placeholder-value',
     *     // Optional. A token for a page of results other than the first page.
     *     pageToken: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "nextPageToken": "my_nextPageToken",
     *   //   "products": []
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
      params: Params$Resource$Products$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Products$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleCloudChannelV1ListProductsResponse>;
    list(
      params: Params$Resource$Products$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Products$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleCloudChannelV1ListProductsResponse>,
      callback: BodyResponseCallback<Schema$GoogleCloudChannelV1ListProductsResponse>
    ): void;
    list(
      params: Params$Resource$Products$List,
      callback: BodyResponseCallback<Schema$GoogleCloudChannelV1ListProductsResponse>
    ): void;
    list(
      callback: BodyResponseCallback<Schema$GoogleCloudChannelV1ListProductsResponse>
    ): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Products$List
        | BodyResponseCallback<Schema$GoogleCloudChannelV1ListProductsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleCloudChannelV1ListProductsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleCloudChannelV1ListProductsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleCloudChannelV1ListProductsResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback || {}) as Params$Resource$Products$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Products$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://cloudchannel.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/products').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$GoogleCloudChannelV1ListProductsResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleCloudChannelV1ListProductsResponse>(
          parameters
        );
      }
    }
  }

  export interface Params$Resource$Products$List extends StandardParameters {
    /**
     * Required. The resource name of the reseller account. Format: accounts/{account_id\}.
     */
    account?: string;
    /**
     * Optional. The BCP-47 language code. For example, "en-US". The response will localize in the corresponding language code, if specified. The default value is "en-US".
     */
    languageCode?: string;
    /**
     * Optional. Requested page size. Server might return fewer results than requested. If unspecified, returns at most 100 Products. The maximum value is 1000; the server will coerce values above 1000.
     */
    pageSize?: number;
    /**
     * Optional. A token for a page of results other than the first page.
     */
    pageToken?: string;
  }

  export class Resource$Products$Skus {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Lists the SKUs for a product the reseller is authorized to sell. Possible error codes: * INVALID_ARGUMENT: Required request parameters are missing or invalid.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/cloudchannel.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const cloudchannel = google.cloudchannel('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/apps.order'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await cloudchannel.products.skus.list({
     *     // Required. Resource name of the reseller. Format: accounts/{account_id\}.
     *     account: 'placeholder-value',
     *     // Optional. The BCP-47 language code. For example, "en-US". The response will localize in the corresponding language code, if specified. The default value is "en-US".
     *     languageCode: 'placeholder-value',
     *     // Optional. Requested page size. Server might return fewer results than requested. If unspecified, returns at most 100 SKUs. The maximum value is 1000; the server will coerce values above 1000.
     *     pageSize: 'placeholder-value',
     *     // Optional. A token for a page of results other than the first page. Optional.
     *     pageToken: 'placeholder-value',
     *     // Required. The resource name of the Product to list SKUs for. Parent uses the format: products/{product_id\}. Supports products/- to retrieve SKUs for all products.
     *     parent: 'products/my-product',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "nextPageToken": "my_nextPageToken",
     *   //   "skus": []
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
      params: Params$Resource$Products$Skus$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Products$Skus$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleCloudChannelV1ListSkusResponse>;
    list(
      params: Params$Resource$Products$Skus$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Products$Skus$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleCloudChannelV1ListSkusResponse>,
      callback: BodyResponseCallback<Schema$GoogleCloudChannelV1ListSkusResponse>
    ): void;
    list(
      params: Params$Resource$Products$Skus$List,
      callback: BodyResponseCallback<Schema$GoogleCloudChannelV1ListSkusResponse>
    ): void;
    list(
      callback: BodyResponseCallback<Schema$GoogleCloudChannelV1ListSkusResponse>
    ): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Products$Skus$List
        | BodyResponseCallback<Schema$GoogleCloudChannelV1ListSkusResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleCloudChannelV1ListSkusResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleCloudChannelV1ListSkusResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleCloudChannelV1ListSkusResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Products$Skus$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Products$Skus$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://cloudchannel.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}/skus').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$GoogleCloudChannelV1ListSkusResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleCloudChannelV1ListSkusResponse>(
          parameters
        );
      }
    }
  }

  export interface Params$Resource$Products$Skus$List
    extends StandardParameters {
    /**
     * Required. Resource name of the reseller. Format: accounts/{account_id\}.
     */
    account?: string;
    /**
     * Optional. The BCP-47 language code. For example, "en-US". The response will localize in the corresponding language code, if specified. The default value is "en-US".
     */
    languageCode?: string;
    /**
     * Optional. Requested page size. Server might return fewer results than requested. If unspecified, returns at most 100 SKUs. The maximum value is 1000; the server will coerce values above 1000.
     */
    pageSize?: number;
    /**
     * Optional. A token for a page of results other than the first page. Optional.
     */
    pageToken?: string;
    /**
     * Required. The resource name of the Product to list SKUs for. Parent uses the format: products/{product_id\}. Supports products/- to retrieve SKUs for all products.
     */
    parent?: string;
  }
}
