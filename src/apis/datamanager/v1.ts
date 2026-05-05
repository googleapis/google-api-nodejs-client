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

export namespace datamanager_v1 {
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
   * Data Manager API
   *
   * A unified ingestion API for data partners, agencies and advertisers to connect first-party data across Google advertising products.
   *
   * @example
   * ```js
   * const {google} = require('googleapis');
   * const datamanager = google.datamanager('v1');
   * ```
   */
  export class Datamanager {
    context: APIRequestContext;
    accountTypes: Resource$Accounttypes;
    audienceMembers: Resource$Audiencemembers;
    events: Resource$Events;
    requestStatus: Resource$Requeststatus;

    constructor(options: GlobalOptions, google?: GoogleConfigurable) {
      this.context = {
        _options: options || {},
        google,
      };

      this.accountTypes = new Resource$Accounttypes(this.context);
      this.audienceMembers = new Resource$Audiencemembers(this.context);
      this.events = new Resource$Events(this.context);
      this.requestStatus = new Resource$Requeststatus(this.context);
    }
  }

  /**
   * Address information for the user.
   */
  export interface Schema$AddressInfo {
    /**
     * Required. Family (last) name of the user, all lowercase, with no punctuation, no leading or trailing whitespace, and hashed as SHA-256.
     */
    familyName?: string | null;
    /**
     * Required. Given (first) name of the user, all lowercase, with no punctuation, no leading or trailing whitespace, and hashed as SHA-256.
     */
    givenName?: string | null;
    /**
     * Required. The postal code of the user's address.
     */
    postalCode?: string | null;
    /**
     * Required. The 2-letter region code in ISO-3166-1 alpha-2 of the user's address.
     */
    regionCode?: string | null;
  }
  /**
   * Identifiers and other information used to match the conversion event with other online activity (such as ad clicks).
   */
  export interface Schema$AdIdentifiers {
    /**
     * Optional. The click identifier for clicks associated with app events and originating from iOS devices starting with iOS14.
     */
    gbraid?: string | null;
    /**
     * Optional. The Google click ID (gclid) associated with this event.
     */
    gclid?: string | null;
    /**
     * Optional. Information gathered about the device being used (if any) at the time of landing onto the advertiser’s site after interacting with the ad.
     */
    landingPageDeviceInfo?: Schema$DeviceInfo;
    /**
     * Optional. Session attributes for event attribution and modeling.
     */
    sessionAttributes?: string | null;
    /**
     * Optional. The click identifier for clicks associated with web events and originating from iOS devices starting with iOS14.
     */
    wbraid?: string | null;
  }
  /**
   * The audience member to be operated on.
   */
  export interface Schema$AudienceMember {
    /**
     * Optional. The consent setting for the user.
     */
    consent?: Schema$Consent;
    /**
     * Optional. Defines which Destination to send the audience member to.
     */
    destinationReferences?: string[] | null;
    /**
     * Data identifying the user's mobile devices.
     */
    mobileData?: Schema$MobileData;
    /**
     * [Publisher Advertiser Identity Reconciliation (PAIR) IDs](//support.google.com/admanager/answer/15067908). This feature is only available to data partners.
     */
    pairData?: Schema$PairData;
    /**
     * Data related to publisher provided identifiers. This feature is only available to data partners.
     */
    ppidData?: Schema$PpidData;
    /**
     * User-provided data that identifies the user.
     */
    userData?: Schema$UserData;
    /**
     * Data related to unique identifiers for a user, as defined by the advertiser.
     */
    userIdData?: Schema$UserIdData;
  }
  /**
   * A data encryption key wrapped by an AWS KMS key.
   */
  export interface Schema$AwsWrappedKeyInfo {
    /**
     * Required. The base64 encoded encrypted data encryption key.
     */
    encryptedDek?: string | null;
    /**
     * Required. The URI of the AWS KMS key used to decrypt the DEK. Should be in the format of `arn:{partition\}:kms:{region\}:{account_id\}:key/{key_id\}` or `aws-kms://arn:{partition\}:kms:{region\}:{account_id\}:key/{key_id\}`
     */
    kekUri?: string | null;
    /**
     * Required. The type of algorithm used to encrypt the data.
     */
    keyType?: string | null;
    /**
     * Required. The Amazon Resource Name of the IAM Role to assume for KMS decryption access. Should be in the format of `arn:{partition\}:iam::{account_id\}:role/{role_name\}`
     */
    roleArn?: string | null;
  }
  /**
   * Baseline criteria against which insights are compared.
   */
  export interface Schema$Baseline {
    /**
     * The baseline location of the request. Baseline location is an OR-list of the requested regions.
     */
    baselineLocation?: Schema$Location;
    /**
     * If set to true, the service will try to automatically detect the baseline location for insights.
     */
    locationAutoDetectionEnabled?: boolean | null;
  }
  /**
   * The cart data associated with the event.
   */
  export interface Schema$CartData {
    /**
     * Optional. The list of items associated with the event.
     */
    items?: Schema$Item[];
    /**
     * Optional. The Merchant Center feed label associated with the feed of the items.
     */
    merchantFeedLabel?: string | null;
    /**
     * Optional. The language code in ISO 639-1 associated with the Merchant Center feed of the items.where your items are uploaded.
     */
    merchantFeedLanguageCode?: string | null;
    /**
     * Optional. The Merchant Center ID associated with the items.
     */
    merchantId?: string | null;
    /**
     * Optional. The sum of all discounts associated with the transaction.
     */
    transactionDiscount?: number | null;
  }
  /**
   * [Digital Markets Act (DMA)](//digital-markets-act.ec.europa.eu/index_en) consent settings for the user.
   */
  export interface Schema$Consent {
    /**
     * Optional. Represents if the user consents to ad personalization.
     */
    adPersonalization?: string | null;
    /**
     * Optional. Represents if the user consents to ad user data.
     */
    adUserData?: string | null;
  }
  /**
   * Additional information when `CONTACT_ID` is one of the `upload_key_types`.
   */
  export interface Schema$ContactIdInfo {
    /**
     * Optional. Immutable. Source of the upload data
     */
    dataSourceType?: string | null;
    /**
     * Output only. Match rate for customer match user lists.
     */
    matchRatePercentage?: number | null;
  }
  /**
   * Custom variable for ads conversions.
   */
  export interface Schema$CustomVariable {
    /**
     * Optional. Reference string used to determine which of the Event.destination_references the custom variable should be sent to. If empty, the Event.destination_references will be used.
     */
    destinationReferences?: string[] | null;
    /**
     * Optional. The value to store for the custom variable.
     */
    value?: string | null;
    /**
     * Optional. The name of the custom variable to set. If the variable is not found for the given destination, it will be ignored.
     */
    variable?: string | null;
  }
  /**
   * The Google product you're sending data to. For example, a Google Ads account.
   */
  export interface Schema$Destination {
    /**
     * Optional. An account that the calling user's `login_account` has access to, through an established account link. For example, a data partner's `login_account` might have access to a client's `linked_account`. The partner might use this field to send data from the `linked_account` to another `operating_account`.
     */
    linkedAccount?: Schema$ProductAccount;
    /**
     * Optional. The account used to make this API call. To add or remove data from the `operating_account`, this `login_account` must have write access to the `operating_account`. For example, a manager account of the `operating_account`, or an account with an established link to the `operating_account`.
     */
    loginAccount?: Schema$ProductAccount;
    /**
     * Required. The account to send the data to or remove the data from.
     */
    operatingAccount?: Schema$ProductAccount;
    /**
     * Required. The object within the product account to ingest into. For example, a Google Ads audience ID, a Display & Video 360 audience ID or a Google Ads conversion action ID.
     */
    productDestinationId?: string | null;
    /**
     * Optional. ID for this `Destination` resource, unique within the request. Use to reference this `Destination` in the IngestEventsRequest and IngestAudienceMembersRequest.
     */
    reference?: string | null;
  }
  /**
   * Information about the device being used (if any) when the event happened.
   */
  export interface Schema$DeviceInfo {
    /**
     * Optional. The IP address of the device for the given context. **Note:** Google Ads does not support IP address matching for end users in the European Economic Area (EEA), United Kingdom (UK), or Switzerland (CH). Add logic to conditionally exclude sharing IP addresses from users from these regions and ensure that you provide users with clear and comprehensive information about the data you collect on your sites, apps, and other properties and get consent where required by law or any applicable Google policies. See the [About offline conversion imports](https://support.google.com/google-ads/answer/2998031) page for more details.
     */
    ipAddress?: string | null;
    /**
     * Optional. The user-agent string of the device for the given context.
     */
    userAgent?: string | null;
  }
  /**
   * A generic empty message that you can re-use to avoid defining duplicated empty messages in your APIs. A typical example is to use it as the request or the response type of an API method. For instance: service Foo { rpc Bar(google.protobuf.Empty) returns (google.protobuf.Empty); \}
   */
  export interface Schema$Empty {}
  /**
   * Encryption information for the data being ingested.
   */
  export interface Schema$EncryptionInfo {
    /**
     * Amazon Web Services wrapped key information.
     */
    awsWrappedKeyInfo?: Schema$AwsWrappedKeyInfo;
    /**
     * Google Cloud Platform wrapped key information.
     */
    gcpWrappedKeyInfo?: Schema$GcpWrappedKeyInfo;
  }
  /**
   * The error count for a given error reason.
   */
  export interface Schema$ErrorCount {
    /**
     * The error reason of the failed records.
     */
    reason?: string | null;
    /**
     * The count of records that failed to upload for a given reason.
     */
    recordCount?: string | null;
  }
  /**
   * Error counts for each type of error.
   */
  export interface Schema$ErrorInfo {
    /**
     * A list of errors and counts per error reason. May not be populated in all cases.
     */
    errorCounts?: Schema$ErrorCount[];
  }
  /**
   * An event representing a user interaction with an advertiser's website or app.
   */
  export interface Schema$Event {
    /**
     * Optional. A bucket of any [event parameters](https://developers.google.com/analytics/devguides/collection/protocol/ga4/reference/events) to be included within the event that were not already specified using other structured fields.
     */
    additionalEventParameters?: Schema$EventParameter[];
    /**
     * Optional. Identifiers and other information used to match the conversion event with other online activity (such as ad clicks).
     */
    adIdentifiers?: Schema$AdIdentifiers;
    /**
     * Optional. Information about the transaction and items associated with the event.
     */
    cartData?: Schema$CartData;
    /**
     * Optional. A unique identifier for the user instance of a web client for this GA4 web stream.
     */
    clientId?: string | null;
    /**
     * Optional. Information about whether the associated user has provided different types of consent.
     */
    consent?: Schema$Consent;
    /**
     * Optional. The conversion value associated with the event, for value-based conversions.
     */
    conversionValue?: number | null;
    /**
     * Optional. The currency code associated with all monetary values within this event.
     */
    currency?: string | null;
    /**
     * Optional. Additional key/value pair information to send to the conversion containers (conversion action or FL activity).
     */
    customVariables?: Schema$CustomVariable[];
    /**
     * Optional. Reference string used to determine the destination. If empty, the event will be sent to all destinations in the request.
     */
    destinationReferences?: string[] | null;
    /**
     * Optional. Information gathered about the device being used (if any) when the event happened.
     */
    eventDeviceInfo?: Schema$DeviceInfo;
    /**
     * Optional. The name of the event. Required for GA4 events.
     */
    eventName?: string | null;
    /**
     * Optional. Signal for where the event happened (web, app, in-store, etc.).
     */
    eventSource?: string | null;
    /**
     * Required. The time the event occurred.
     */
    eventTimestamp?: string | null;
    /**
     * Optional. A list of key/value pairs for experimental fields that may eventually be promoted to be part of the API.
     */
    experimentalFields?: Schema$ExperimentalField[];
    /**
     * Optional. The last time the event was updated.
     */
    lastUpdatedTimestamp?: string | null;
    /**
     * Optional. The unique identifier for this event. Required for conversions using multiple data sources.
     */
    transactionId?: string | null;
    /**
     * Optional. Pieces of user provided data, representing the user the event is associated with.
     */
    userData?: Schema$UserData;
    /**
     * Optional. A unique identifier for a user, as defined by the advertiser.
     */
    userId?: string | null;
    /**
     * Optional. Advertiser-assessed information about the user at the time that the event happened.
     */
    userProperties?: Schema$UserProperties;
  }
  /**
   * Event parameter for GA4 events.
   */
  export interface Schema$EventParameter {
    /**
     * Required. The name of the parameter to use.
     */
    parameterName?: string | null;
    /**
     * Required. The string representation of the value of the parameter to set.
     */
    value?: string | null;
  }
  /**
   * Experimental field representing unofficial fields.
   */
  export interface Schema$ExperimentalField {
    /**
     * Optional. The name of the field to use.
     */
    field?: string | null;
    /**
     * Optional. The value the field to set.
     */
    value?: string | null;
  }
  /**
   * Information about the Google Cloud Platform wrapped key.
   */
  export interface Schema$GcpWrappedKeyInfo {
    /**
     * Required. The base64 encoded encrypted data encryption key.
     */
    encryptedDek?: string | null;
    /**
     * Required. Google Cloud Platform [Cloud Key Management Service resource ID](//cloud.google.com/kms/docs/getting-resource-ids). Should be in the format of `projects/{project\}/locations/{location\}/keyRings/{key_ring\}/cryptoKeys/{key\}` or `gcp-kms://projects/{project\}/locations/{location\}/keyRings/{key_ring\}/cryptoKeys/{key\}`
     */
    kekUri?: string | null;
    /**
     * Required. The type of algorithm used to encrypt the data.
     */
    keyType?: string | null;
    /**
     * Required. The [Workload Identity](//cloud.google.com/iam/docs/workload-identity-federation) pool provider required to use KEK.
     */
    wipProvider?: string | null;
  }
  /**
   * Request to upload audience members to the provided destinations. Returns an IngestAudienceMembersResponse.
   */
  export interface Schema$IngestAudienceMembersRequest {
    /**
     * Required. The list of users to send to the specified destinations. At most 10000 AudienceMember resources can be sent in a single request.
     */
    audienceMembers?: Schema$AudienceMember[];
    /**
     * Optional. Request-level consent to apply to all users in the request. User-level consent overrides request-level consent, and can be specified in each AudienceMember.
     */
    consent?: Schema$Consent;
    /**
     * Required. The list of destinations to send the audience members to.
     */
    destinations?: Schema$Destination[];
    /**
     * Optional. Required for UserData uploads. The encoding type of the user identifiers. For hashed user identifiers, this is the encoding type of the hashed string. For encrypted hashed user identifiers, this is the encoding type of the outer encrypted string, but not necessarily the inner hashed string, meaning the inner hashed string could be encoded in a different way than the outer encrypted string. For non `UserData` uploads, this field is ignored.
     */
    encoding?: string | null;
    /**
     * Optional. Encryption information for UserData uploads. If not set, it's assumed that uploaded identifying information is hashed but not encrypted. For non `UserData` uploads, this field is ignored.
     */
    encryptionInfo?: Schema$EncryptionInfo;
    /**
     * Optional. The terms of service that the user has accepted/rejected.
     */
    termsOfService?: Schema$TermsOfService;
    /**
     * Optional. For testing purposes. If `true`, the request is validated but not executed. Only errors are returned, not results.
     */
    validateOnly?: boolean | null;
  }
  /**
   * Response from the IngestAudienceMembersRequest.
   */
  export interface Schema$IngestAudienceMembersResponse {
    /**
     * The auto-generated ID of the request.
     */
    requestId?: string | null;
  }
  /**
   * The status of the ingest audience members request.
   */
  export interface Schema$IngestAudienceMembersStatus {
    /**
     * The status of the mobile data ingestion to the destination.
     */
    mobileDataIngestionStatus?: Schema$IngestMobileDataStatus;
    /**
     * The status of the pair data ingestion to the destination.
     */
    pairDataIngestionStatus?: Schema$IngestPairDataStatus;
    /**
     * The status of the ppid data ingestion to the destination.
     */
    ppidDataIngestionStatus?: Schema$IngestPpidDataStatus;
    /**
     * The status of the user data ingestion to the destination.
     */
    userDataIngestionStatus?: Schema$IngestUserDataStatus;
    /**
     * The status of the user id data ingestion to the destination.
     */
    userIdDataIngestionStatus?: Schema$IngestUserIdDataStatus;
  }
  /**
   * Represents a user list that is populated by user provided data.
   */
  export interface Schema$IngestedUserListInfo {
    /**
     * Optional. Additional information when `CONTACT_ID` is one of the `upload_key_types`.
     */
    contactIdInfo?: Schema$ContactIdInfo;
    /**
     * Optional. Additional information when `MOBILE_ID` is one of the `upload_key_types`.
     */
    mobileIdInfo?: Schema$MobileIdInfo;
    /**
     * Optional. Additional information when `PAIR_ID` is one of the `upload_key_types`. This feature is only available to data partners.
     */
    pairIdInfo?: Schema$PairIdInfo;
    /**
     * Optional. Additional information for partner audiences. This feature is only available to data partners.
     */
    partnerAudienceInfo?: Schema$PartnerAudienceInfo;
    /**
     * Optional. Additional information for `PSEUDONYMOUS_ID` is one of the `upload_key_types`.
     */
    pseudonymousIdInfo?: Schema$PseudonymousIdInfo;
    /**
     * Required. Immutable. Upload key types of this user list.
     */
    uploadKeyTypes?: string[] | null;
    /**
     * Optional. Additional information when `USER_ID` is one of the `upload_key_types`.
     */
    userIdInfo?: Schema$UserIdInfo;
  }
  /**
   * Request to upload audience members to the provided destinations. Returns an IngestEventsResponse.
   */
  export interface Schema$IngestEventsRequest {
    /**
     * Optional. Request-level consent to apply to all users in the request. User-level consent overrides request-level consent, and can be specified in each Event.
     */
    consent?: Schema$Consent;
    /**
     * Required. The list of destinations to send the events to.
     */
    destinations?: Schema$Destination[];
    /**
     * Optional. Required for UserData uploads. The encoding type of the user identifiers. For hashed user identifiers, this is the encoding type of the hashed string. For encrypted hashed user identifiers, this is the encoding type of the outer encrypted string, but not necessarily the inner hashed string, meaning the inner hashed string could be encoded in a different way than the outer encrypted string. For non `UserData` uploads, this field is ignored.
     */
    encoding?: string | null;
    /**
     * Optional. Encryption information for UserData uploads. If not set, it's assumed that uploaded identifying information is hashed but not encrypted. For non `UserData` uploads, this field is ignored.
     */
    encryptionInfo?: Schema$EncryptionInfo;
    /**
     * Required. The list of events to send to the specified destinations. At most 2000 Event resources can be sent in a single request.
     */
    events?: Schema$Event[];
    /**
     * Optional. For testing purposes. If `true`, the request is validated but not executed. Only errors are returned, not results.
     */
    validateOnly?: boolean | null;
  }
  /**
   * Response from the IngestEventsRequest.
   */
  export interface Schema$IngestEventsResponse {
    /**
     * The auto-generated ID of the request.
     */
    requestId?: string | null;
  }
  /**
   * The status of the events ingestion to the destination.
   */
  export interface Schema$IngestEventsStatus {
    /**
     * The total count of events sent in the upload request. Includes all events in the request, regardless of whether they were successfully ingested or not.
     */
    recordCount?: string | null;
  }
  /**
   * The status of the mobile data ingestion to the destination containing stats related to the ingestion.
   */
  export interface Schema$IngestMobileDataStatus {
    /**
     * The total count of mobile ids sent in the upload request for the destination. Includes all mobile ids in the request, regardless of whether they were successfully ingested or not.
     */
    mobileIdCount?: string | null;
    /**
     * The total count of audience members sent in the upload request for the destination. Includes all audience members in the request, regardless of whether they were successfully ingested or not.
     */
    recordCount?: string | null;
  }
  /**
   * The status of the pair data ingestion to the destination containing stats related to the ingestion.
   */
  export interface Schema$IngestPairDataStatus {
    /**
     * The total count of pair ids sent in the upload request for the destination. Includes all pair ids in the request, regardless of whether they were successfully ingested or not.
     */
    pairIdCount?: string | null;
    /**
     * The total count of audience members sent in the upload request for the destination. Includes all audience members in the request, regardless of whether they were successfully ingested or not.
     */
    recordCount?: string | null;
  }
  /**
   * The status of the ppid data ingestion to the destination containing stats related to the ingestion.
   */
  export interface Schema$IngestPpidDataStatus {
    /**
     * The total count of ppids sent in the upload request for the destination. Includes all ppids in the request, regardless of whether they were successfully ingested or not.
     */
    ppidCount?: string | null;
    /**
     * The total count of audience members sent in the upload request for the destination. Includes all audience members in the request, regardless of whether they were successfully ingested or not.
     */
    recordCount?: string | null;
  }
  /**
   * The status of the user data ingestion to the destination containing stats related to the ingestion.
   */
  export interface Schema$IngestUserDataStatus {
    /**
     * The total count of audience members sent in the upload request for the destination. Includes all audience members in the request, regardless of whether they were successfully ingested or not.
     */
    recordCount?: string | null;
    /**
     * The match rate range of the upload.
     */
    uploadMatchRateRange?: string | null;
    /**
     * The total count of user identifiers sent in the upload request for the destination. Includes all user identifiers in the request, regardless of whether they were successfully ingested or not.
     */
    userIdentifierCount?: string | null;
  }
  /**
   * The status of the user id data ingestion to the destination containing stats related to the ingestion.
   */
  export interface Schema$IngestUserIdDataStatus {
    /**
     * The total count of audience members sent in the upload request for the destination. Includes all audience members in the request, regardless of whether they were successfully ingested or not.
     */
    recordCount?: string | null;
    /**
     * The total count of user ids sent in the upload request for the destination. Includes all user ids in the request, regardless of whether they were successfully ingested or not.
     */
    userIdCount?: string | null;
  }
  /**
   * Represents an item in the cart associated with the event.
   */
  export interface Schema$Item {
    /**
     * Optional. A bucket of any [event parameters related to an item](https://developers.google.com/analytics/devguides/collection/protocol/ga4/reference/events) to be included within the event that were not already specified using other structured fields.
     */
    additionalItemParameters?: Schema$ItemParameter[];
    /**
     * Optional. A unique identifier to reference the item.
     */
    itemId?: string | null;
    /**
     * Optional. The product ID within the Merchant Center account.
     */
    merchantProductId?: string | null;
    /**
     * Optional. The number of this item associated with the event.
     */
    quantity?: string | null;
    /**
     * Optional. The unit price excluding tax, shipping, and any transaction level discounts.
     */
    unitPrice?: number | null;
  }
  /**
   * A bucket of any [event parameters related to an item](https://developers.google.com/analytics/devguides/collection/protocol/ga4/reference/events) to be included within the event that were not already specified using other structured fields.
   */
  export interface Schema$ItemParameter {
    /**
     * Required. The name of the parameter to use.
     */
    parameterName?: string | null;
    /**
     * Required. The string representation of the value of the parameter to set.
     */
    value?: string | null;
  }
  /**
   * Response from the ListUserListDirectLicensesRequest.
   */
  export interface Schema$ListUserListDirectLicensesResponse {
    /**
     * A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages.
     */
    nextPageToken?: string | null;
    /**
     * The licenses for the given user list in the request.
     */
    userListDirectLicenses?: Schema$UserListDirectLicense[];
  }
  /**
   * Response from the ListUserListGlobalLicensesCustomerInfoRequest.
   */
  export interface Schema$ListUserListGlobalLicenseCustomerInfosResponse {
    /**
     * A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages.
     */
    nextPageToken?: string | null;
    /**
     * The customer information for the given license in the request.
     */
    userListGlobalLicenseCustomerInfos?: Schema$UserListGlobalLicenseCustomerInfo[];
  }
  /**
   * Response from the ListUserListGlobalLicensesRequest.
   */
  export interface Schema$ListUserListGlobalLicensesResponse {
    /**
     * A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages.
     */
    nextPageToken?: string | null;
    /**
     * The licenses for the given user list in the request.
     */
    userListGlobalLicenses?: Schema$UserListGlobalLicense[];
  }
  /**
   * Response message for ListUserLists.
   */
  export interface Schema$ListUserListsResponse {
    /**
     * A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages.
     */
    nextPageToken?: string | null;
    /**
     * The user lists from the specified account.
     */
    userLists?: Schema$UserList[];
  }
  /**
   * The baseline location of the request. Baseline location is on OR-list of ISO 3166-1 alpha-2 region codes of the requested regions.
   */
  export interface Schema$Location {
    /**
     * List of ISO 3166-1 alpha-2 region codes.
     */
    regionCodes?: string[] | null;
  }
  /**
   * Insights for marketing data. This feature is only available to data partners.
   */
  export interface Schema$MarketingDataInsight {
    /**
     * Insights for values of a given dimension.
     */
    attributes?: Schema$MarketingDataInsightsAttribute[];
    /**
     * The dimension to which the insight belongs.
     */
    dimension?: string | null;
  }
  /**
   * Insights for a collection of related attributes of the same dimension.
   */
  export interface Schema$MarketingDataInsightsAttribute {
    /**
     * Age range of the audience for which the lift is provided.
     */
    ageRange?: string | null;
    /**
     * Gender of the audience for which the lift is provided.
     */
    gender?: string | null;
    /**
     * Measure of lift that the audience has for the attribute value as compared to the baseline. Range [0-1].
     */
    lift?: number | null;
    /**
     * The user interest ID.
     */
    userInterestId?: string | null;
  }
  /**
   * Mobile IDs for the audience. At least one mobile ID is required.
   */
  export interface Schema$MobileData {
    /**
     * Required. The list of mobile device IDs (advertising ID/IDFA). At most 10 `mobileIds` can be provided in a single AudienceMember.
     */
    mobileIds?: string[] | null;
  }
  /**
   * Additional information when `MOBILE_ID` is one of the `upload_key_types`.
   */
  export interface Schema$MobileIdInfo {
    /**
     * Required. Immutable. A string that uniquely identifies a mobile application from which the data was collected.
     */
    appId?: string | null;
    /**
     * Optional. Immutable. Source of the upload data.
     */
    dataSourceType?: string | null;
    /**
     * Required. Immutable. The key space of mobile IDs.
     */
    keySpace?: string | null;
  }
  /**
   * [PAIR](//support.google.com/admanager/answer/15067908) IDs for the audience. At least one PAIR ID is required. This feature is only available to data partners.
   */
  export interface Schema$PairData {
    /**
     * Required. Cleanroom-provided PII data, hashed with SHA256, and encrypted with an EC commutative cipher using publisher key for the [PAIR]((//support.google.com/admanager/answer/15067908)) user list. At most 10 `pairIds` can be provided in a single AudienceMember.
     */
    pairIds?: string[] | null;
  }
  /**
   * Additional information when `PAIR_ID` is one of the `upload_key_types`. This feature is only available to data partners.
   */
  export interface Schema$PairIdInfo {
    /**
     * Optional. The count of the advertiser's first party data records that have been uploaded to a clean room provider. This does not signify the size of a PAIR user list.
     */
    advertiserIdentifierCount?: string | null;
    /**
     * Required. Immutable. Identifies a unique advertiser to publisher relationship with one clean room provider or across multiple clean room providers.
     */
    cleanRoomIdentifier?: string | null;
    /**
     * Optional. This field denotes the percentage of membership match of this user list with the corresponding publisher's first party data. Must be between 0 and 100 inclusive.
     */
    matchRatePercentage?: number | null;
    /**
     * Required. Immutable. Identifies the publisher that the Publisher Advertiser Identity Reconciliation user list is reconciled with. This field is provided by the cleanroom provider and is only unique in the scope of that cleanroom. This cannot be used as a global identifier across multiple cleanrooms.
     */
    publisherId?: string | null;
    /**
     * Required. Descriptive name of the publisher to be displayed in the UI for a better targeting experience.
     */
    publisherName?: string | null;
  }
  /**
   * Additional information for partner audiences. This feature is only available to data partners.
   */
  export interface Schema$PartnerAudienceInfo {
    /**
     * Optional. The commerce partner name. Only allowed if `partner_audience_source` is `COMMERCE_AUDIENCE`.
     */
    commercePartner?: string | null;
    /**
     * Required. Immutable. The source of the partner audience.
     */
    partnerAudienceSource?: string | null;
  }
  /**
   * A partner link between an owning account and a partner account.
   */
  export interface Schema$PartnerLink {
    /**
     * Identifier. The name of the partner link. Format: accountTypes/{account_type\}/accounts/{account\}/partnerLinks/{partner_link\}
     */
    name?: string | null;
    /**
     * Required. The owning account granting access to the partner account.
     */
    owningAccount?: Schema$ProductAccount;
    /**
     * Required. The partner account granted access by the owning account.
     */
    partnerAccount?: Schema$ProductAccount;
    /**
     * Output only. The partner link ID.
     */
    partnerLinkId?: string | null;
  }
  /**
   * Publisher provided identifiers data holding the ppids. At least one ppid is required. This feature is only available to data partners.
   */
  export interface Schema$PpidData {
    /**
     * Required. The list of publisher provided identifiers for a user.
     */
    ppids?: string[] | null;
  }
  /**
   * Represents a specific account.
   */
  export interface Schema$ProductAccount {
    /**
     * Required. The ID of the account. For example, your Google Ads account ID.
     */
    accountId?: string | null;
    /**
     * Optional. The type of the account. For example, `GOOGLE_ADS`. Either `account_type` or the deprecated `product` is required. If both are set, the values must match.
     */
    accountType?: string | null;
    /**
     * Deprecated. Use `account_type` instead.
     */
    product?: string | null;
  }
  /**
   * Additional information when `PSEUDONYMOUS_ID` is one of the `upload_key_types`.
   */
  export interface Schema$PseudonymousIdInfo {
    /**
     * Optional. Immutable. The number of billable records (e.g. uploaded or matched).
     */
    billableRecordCount?: string | null;
    /**
     * Output only. Sync status of the user list.
     */
    syncStatus?: string | null;
  }
  /**
   * Request to remove users from an audience in the provided destinations. Returns a RemoveAudienceMembersResponse.
   */
  export interface Schema$RemoveAudienceMembersRequest {
    /**
     * Required. The list of users to remove.
     */
    audienceMembers?: Schema$AudienceMember[];
    /**
     * Required. The list of destinations to remove the users from.
     */
    destinations?: Schema$Destination[];
    /**
     * Optional. Required for UserData uploads. The encoding type of the user identifiers. Applies to only the outer encoding for encrypted user identifiers. For non `UserData` uploads, this field is ignored.
     */
    encoding?: string | null;
    /**
     * Optional. Encryption information for UserData uploads. If not set, it's assumed that uploaded identifying information is hashed but not encrypted. For non `UserData` uploads, this field is ignored.
     */
    encryptionInfo?: Schema$EncryptionInfo;
    /**
     * Optional. For testing purposes. If `true`, the request is validated but not executed. Only errors are returned, not results.
     */
    validateOnly?: boolean | null;
  }
  /**
   * Response from the RemoveAudienceMembersRequest.
   */
  export interface Schema$RemoveAudienceMembersResponse {
    /**
     * The auto-generated ID of the request.
     */
    requestId?: string | null;
  }
  /**
   * The status of the remove audience members request.
   */
  export interface Schema$RemoveAudienceMembersStatus {
    /**
     * The status of the mobile data removal from the destination.
     */
    mobileDataRemovalStatus?: Schema$RemoveMobileDataStatus;
    /**
     * The status of the pair data removal from the destination.
     */
    pairDataRemovalStatus?: Schema$RemovePairDataStatus;
    /**
     * The status of the ppid data removal from the destination.
     */
    ppidDataRemovalStatus?: Schema$RemovePpidDataStatus;
    /**
     * The status of the user data removal from the destination.
     */
    userDataRemovalStatus?: Schema$RemoveUserDataStatus;
    /**
     * The status of the user id data removal from the destination.
     */
    userIdDataRemovalStatus?: Schema$RemoveUserIdDataStatus;
  }
  /**
   * The status of the mobile data removal from the destination.
   */
  export interface Schema$RemoveMobileDataStatus {
    /**
     * The total count of mobile Ids sent in the removal request. Includes all mobile ids in the request, regardless of whether they were successfully removed or not.
     */
    mobileIdCount?: string | null;
    /**
     * The total count of audience members sent in the removal request. Includes all audience members in the request, regardless of whether they were successfully removed or not.
     */
    recordCount?: string | null;
  }
  /**
   * The status of the pair data removal from the destination.
   */
  export interface Schema$RemovePairDataStatus {
    /**
     * The total count of pair ids sent in the removal request. Includes all pair ids in the request, regardless of whether they were successfully removed or not.
     */
    pairIdCount?: string | null;
    /**
     * The total count of audience members sent in the removal request. Includes all audience members in the request, regardless of whether they were successfully removed or not.
     */
    recordCount?: string | null;
  }
  /**
   * The status of the ppid data removal from the destination.
   */
  export interface Schema$RemovePpidDataStatus {
    /**
     * The total count of ppids sent in the removal request. Includes all ppids in the request, regardless of whether they were successfully removed or not.
     */
    ppidCount?: string | null;
    /**
     * The total count of audience members sent in the removal request. Includes all audience members in the request, regardless of whether they were successfully removed or not.
     */
    recordCount?: string | null;
  }
  /**
   * The status of the user data removal from the destination.
   */
  export interface Schema$RemoveUserDataStatus {
    /**
     * The total count of audience members sent in the removal request. Includes all audience members in the request, regardless of whether they were successfully removed or not.
     */
    recordCount?: string | null;
    /**
     * The total count of user identifiers sent in the removal request. Includes all user identifiers in the request, regardless of whether they were successfully removed or not.
     */
    userIdentifierCount?: string | null;
  }
  /**
   * The status of the user id data removal from the destination.
   */
  export interface Schema$RemoveUserIdDataStatus {
    /**
     * The total count of audience members sent in the removal request. Includes all audience members in the request, regardless of whether they were successfully removed or not.
     */
    recordCount?: string | null;
    /**
     * The total count of user ids sent in the removal request. Includes all user ids in the request, regardless of whether they were successfully removed or not.
     */
    userIdCount?: string | null;
  }
  /**
   * A request status per destination.
   */
  export interface Schema$RequestStatusPerDestination {
    /**
     * The status of the ingest audience members request.
     */
    audienceMembersIngestionStatus?: Schema$IngestAudienceMembersStatus;
    /**
     * The status of the remove audience members request.
     */
    audienceMembersRemovalStatus?: Schema$RemoveAudienceMembersStatus;
    /**
     * A destination within a DM API request.
     */
    destination?: Schema$Destination;
    /**
     * An error info error containing the error reason and error counts related to the upload.
     */
    errorInfo?: Schema$ErrorInfo;
    /**
     * The status of the ingest events request.
     */
    eventsIngestionStatus?: Schema$IngestEventsStatus;
    /**
     * The request status of the destination.
     */
    requestStatus?: string | null;
    /**
     * A warning info containing the warning reason and warning counts related to the upload.
     */
    warningInfo?: Schema$WarningInfo;
  }
  /**
   * Request message for DM API MarketingDataInsightsService.RetrieveInsights
   */
  export interface Schema$RetrieveInsightsRequest {
    /**
     * Required. Baseline for the insights requested.
     */
    baseline?: Schema$Baseline;
    /**
     * Required. The user list ID for which insights are requested.
     */
    userListId?: string | null;
  }
  /**
   * Response message for DM API MarketingDataInsightsService.RetrieveInsights
   */
  export interface Schema$RetrieveInsightsResponse {
    /**
     * Contains the insights for the marketing data.
     */
    marketingDataInsights?: Schema$MarketingDataInsight[];
  }
  /**
   * Response from the RetrieveRequestStatusRequest.
   */
  export interface Schema$RetrieveRequestStatusResponse {
    /**
     * A list of request statuses per destination. The order of the statuses matches the order of the destinations in the original request.
     */
    requestStatusPerDestination?: Schema$RequestStatusPerDestination[];
  }
  /**
   * Response from the SearchPartnerLinksRequest.
   */
  export interface Schema$SearchPartnerLinksResponse {
    /**
     * A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages.
     */
    nextPageToken?: string | null;
    /**
     * The partner links for the given account.
     */
    partnerLinks?: Schema$PartnerLink[];
  }
  /**
   * Estimated number of members in this user list in different target networks.
   */
  export interface Schema$SizeInfo {
    /**
     * Output only. Estimated number of members in this user list, on the Google Display Network.
     */
    displayNetworkMembersCount?: string | null;
    /**
     * Output only. Estimated number of members in this user list in the google.com domain. These are the members available for targeting in Search campaigns.
     */
    searchNetworkMembersCount?: string | null;
  }
  /**
   * The `Status` type defines a logical error model that is suitable for different programming environments, including REST APIs and RPC APIs. It is used by [gRPC](https://github.com/grpc). Each `Status` message contains three pieces of data: error code, error message, and error details. You can find out more about this error model and how to work with it in the [API Design Guide](https://cloud.google.com/apis/design/errors).
   */
  export interface Schema$Status {
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
   * Eligibility information for different target networks.
   */
  export interface Schema$TargetNetworkInfo {
    /**
     * Output only. Indicates this user list is eligible for Google Display Network.
     */
    eligibleForDisplay?: boolean | null;
    /**
     * Optional. Indicates if this user list is eligible for Google Search Network.
     */
    eligibleForSearch?: boolean | null;
  }
  /**
   * The terms of service that the user has accepted/rejected.
   */
  export interface Schema$TermsOfService {
    /**
     * Optional. The Customer Match terms of service: https://support.google.com/adspolicy/answer/6299717. This must be accepted when ingesting UserData or MobileData. This field is not required for Partner Match User list.
     */
    customerMatchTermsOfServiceStatus?: string | null;
  }
  /**
   * Data that identifies the user. At least one identifier is required.
   */
  export interface Schema$UserData {
    /**
     * Required. The identifiers for the user. It's possible to provide multiple instances of the same type of data (for example, multiple email addresses). To increase the likelihood of a match, provide as many identifiers as possible. At most 10 `userIdentifiers` can be provided in a single AudienceMember or Event.
     */
    userIdentifiers?: Schema$UserIdentifier[];
  }
  /**
   * User id data holding the user id.
   */
  export interface Schema$UserIdData {
    /**
     * Required. A unique identifier for a user, as defined by the advertiser.
     */
    userId?: string | null;
  }
  /**
   * A single identifier for the user.
   */
  export interface Schema$UserIdentifier {
    /**
     * The known components of a user's address. Holds a grouping of identifiers that are matched all at once.
     */
    address?: Schema$AddressInfo;
    /**
     * Hashed email address using SHA-256 hash function after normalization.
     */
    emailAddress?: string | null;
    /**
     * Hashed phone number using SHA-256 hash function after normalization (E164 standard).
     */
    phoneNumber?: string | null;
  }
  /**
   * Additional information when `USER_ID` is one of the `upload_key_types`.
   */
  export interface Schema$UserIdInfo {
    /**
     * Optional. Immutable. Source of the upload data.
     */
    dataSourceType?: string | null;
  }
  /**
   * A user list resource.
   */
  export interface Schema$UserList {
    /**
     * Output only. The reason this account has been granted access to the list.
     */
    accessReason?: string | null;
    /**
     * Optional. Indicates if this share is still enabled. When a user list is shared with the account this field is set to `ENABLED`. Later the user list owner can decide to revoke the share and make it `DISABLED`.
     */
    accountAccessStatus?: string | null;
    /**
     * Output only. The reason why this user list membership status is closed.
     */
    closingReason?: string | null;
    /**
     * Optional. A description of the user list.
     */
    description?: string | null;
    /**
     * Required. The display name of the user list.
     */
    displayName?: string | null;
    /**
     * Output only. The unique ID of the user list.
     */
    id?: string | null;
    /**
     * Optional. Represents a user list that is populated by user ingested data.
     */
    ingestedUserListInfo?: Schema$IngestedUserListInfo;
    /**
     * Optional. An ID from external system. It is used by user list sellers to correlate IDs on their systems.
     */
    integrationCode?: string | null;
    /**
     * Optional. The duration a user remains in the user list. Valid durations are exact multiples of 24 hours (86400 seconds). Providing a value that is not an exact multiple of 24 hours will result in an INVALID_ARGUMENT error.
     */
    membershipDuration?: string | null;
    /**
     * Optional. Membership status of this user list.
     */
    membershipStatus?: string | null;
    /**
     * Identifier. The resource name of the user list. Format: accountTypes/{account_type\}/accounts/{account\}/userLists/{user_list\}
     */
    name?: string | null;
    /**
     * Output only. An option that indicates if a user may edit a list.
     */
    readOnly?: boolean | null;
    /**
     * Output only. Estimated number of members in this user list in different target networks.
     */
    sizeInfo?: Schema$SizeInfo;
    /**
     * Optional. Eligibility information for different target networks.
     */
    targetNetworkInfo?: Schema$TargetNetworkInfo;
  }
  /**
   * A user list direct license. This feature is only available to data partners.
   */
  export interface Schema$UserListDirectLicense {
    /**
     * Output only. Name of client customer which the user list is being licensed to. This field is read-only.
     */
    clientAccountDisplayName?: string | null;
    /**
     * Immutable. ID of client customer which the user list is being licensed to.
     */
    clientAccountId?: string | null;
    /**
     * Immutable. Account type of client customer which the user list is being licensed to.
     */
    clientAccountType?: string | null;
    /**
     * Output only. Pricing history of this user list license. This field is read-only.
     */
    historicalPricings?: Schema$UserListLicensePricing[];
    /**
     * Output only. Metrics related to this license This field is read-only and only populated if the start and end dates are set in the ListUserListDirectLicenses call
     */
    metrics?: Schema$UserListLicenseMetrics;
    /**
     * Identifier. The resource name of the user list direct license.
     */
    name?: string | null;
    /**
     * Optional. UserListDirectLicense pricing.
     */
    pricing?: Schema$UserListLicensePricing;
    /**
     * Optional. Status of UserListDirectLicense - ENABLED or DISABLED.
     */
    status?: string | null;
    /**
     * Output only. Name of the user list being licensed. This field is read-only.
     */
    userListDisplayName?: string | null;
    /**
     * Immutable. ID of the user list being licensed.
     */
    userListId?: string | null;
  }
  /**
   * A user list global license. This feature is only available to data partners.
   */
  export interface Schema$UserListGlobalLicense {
    /**
     * Output only. Pricing history of this user list license. This field is read-only.
     */
    historicalPricings?: Schema$UserListLicensePricing[];
    /**
     * Immutable. Product type of client customer which the user list is being licensed to.
     */
    licenseType?: string | null;
    /**
     * Output only. Metrics related to this license This field is read-only and only populated if the start and end dates are set in the ListUserListGlobalLicenses call
     */
    metrics?: Schema$UserListLicenseMetrics;
    /**
     * Identifier. The resource name of the user list global license.
     */
    name?: string | null;
    /**
     * Optional. UserListGlobalLicense pricing.
     */
    pricing?: Schema$UserListLicensePricing;
    /**
     * Optional. Status of UserListGlobalLicense - ENABLED or DISABLED.
     */
    status?: string | null;
    /**
     * Output only. Name of the user list being licensed. This field is read-only.
     */
    userListDisplayName?: string | null;
    /**
     * Immutable. ID of the user list being licensed.
     */
    userListId?: string | null;
  }
  /**
   * Information about a customer of a user list global license. This will automatically be created by the system when a customer purchases a global license.
   */
  export interface Schema$UserListGlobalLicenseCustomerInfo {
    /**
     * Output only. Name of client customer which the user list is being licensed to.
     */
    clientAccountDisplayName?: string | null;
    /**
     * Output only. ID of client customer which the user list is being licensed to.
     */
    clientAccountId?: string | null;
    /**
     * Output only. Product type of client customer which the user list is being licensed to.
     */
    clientAccountType?: string | null;
    /**
     * Output only. Pricing history of this user list license.
     */
    historicalPricings?: Schema$UserListLicensePricing[];
    /**
     * Output only. Product type of client customer which the user list is being licensed to.
     */
    licenseType?: string | null;
    /**
     * Output only. Metrics related to this license This field is only populated if the start and end dates are set in the ListUserListGlobalLicenseCustomerInfos call.
     */
    metrics?: Schema$UserListLicenseMetrics;
    /**
     * Identifier. The resource name of the user list global license customer.
     */
    name?: string | null;
    /**
     * Output only. UserListDirectLicense pricing.
     */
    pricing?: Schema$UserListLicensePricing;
    /**
     * Output only. Status of UserListDirectLicense - ENABLED or DISABLED.
     */
    status?: string | null;
    /**
     * Output only. Name of the user list being licensed.
     */
    userListDisplayName?: string | null;
    /**
     * Output only. ID of the user list being licensed.
     */
    userListId?: string | null;
  }
  /**
   * Metrics related to a user list license.
   */
  export interface Schema$UserListLicenseMetrics {
    /**
     * Output only. The number of clicks for the user list license.
     */
    clickCount?: string | null;
    /**
     * Output only. The end date (inclusive) of the metrics in the format YYYYMMDD. For example, 20260102 represents January 2, 2026. If `start_date` is used in the filter, `end_date` is also required. If neither `start_date` nor `end_date` are included in the filter, the UserListLicenseMetrics fields will not be populated in the response.
     */
    endDate?: string | null;
    /**
     * Output only. The number of impressions for the user list license.
     */
    impressionCount?: string | null;
    /**
     * Output only. The revenue for the user list license in USD micros.
     */
    revenueUsdMicros?: string | null;
    /**
     * Output only. The start date (inclusive) of the metrics in the format YYYYMMDD. For example, 20260102 represents January 2, 2026. If `end_date` is used in the filter, `start_date` is also required. If neither `start_date` nor `end_date` are included in the filter, the UserListLicenseMetrics fields will not be populated in the response.
     */
    startDate?: string | null;
  }
  /**
   * A user list license pricing.
   */
  export interface Schema$UserListLicensePricing {
    /**
     * Output only. The buyer approval state of this pricing. This field is read-only.
     */
    buyerApprovalState?: string | null;
    /**
     * Optional. The cost associated with the model, in micro units (10^-6), in the currency specified by the currency_code field. For example, 2000000 means $2 if `currency_code` is `USD`.
     */
    costMicros?: string | null;
    /**
     * Immutable. The cost type of this pricing. Can be set only in the `create` operation. Can't be updated for an existing license.
     */
    costType?: string | null;
    /**
     * Optional. The currency in which cost and max_cost is specified. Must be a three-letter currency code defined in ISO 4217.
     */
    currencyCode?: string | null;
    /**
     * Optional. End time of the pricing.
     */
    endTime?: string | null;
    /**
     * Optional. The maximum CPM a commerce audience can be charged when the MEDIA_SHARE cost type is used. The value is in micro units (10^-6) and in the currency specified by the currency_code field. For example, 2000000 means $2 if `currency_code` is `USD`. This is only relevant when cost_type is MEDIA_SHARE. When cost_type is not MEDIA_SHARE, and this field is set, a MAX_COST_NOT_ALLOWED error will be returned. If not set or set to`0`, there is no cap.
     */
    maxCostMicros?: string | null;
    /**
     * Output only. Whether this pricing is active.
     */
    pricingActive?: boolean | null;
    /**
     * Output only. The ID of this pricing.
     */
    pricingId?: string | null;
    /**
     * Output only. Start time of the pricing.
     */
    startTime?: string | null;
  }
  /**
   * Advertiser-assessed information about the user at the time that the event happened. See https://support.google.com/google-ads/answer/14007601 for more details.
   */
  export interface Schema$UserProperties {
    /**
     * Optional. A bucket of any additional [user properties](https://developers.google.com/analytics/devguides/collection/protocol/ga4/user-properties) for the user associated with this event.
     */
    additionalUserProperties?: Schema$UserProperty[];
    /**
     * Optional. Type of the customer associated with the event.
     */
    customerType?: string | null;
    /**
     * Optional. The advertiser-assessed value of the customer.
     */
    customerValueBucket?: string | null;
  }
  /**
   * A bucket of any additional [user properties](https://developers.google.com/analytics/devguides/collection/protocol/ga4/user-properties) for the user associated with this event.
   */
  export interface Schema$UserProperty {
    /**
     * Required. The name of the user property to use.
     */
    propertyName?: string | null;
    /**
     * Required. The string representation of the value of the user property to use.
     */
    value?: string | null;
  }
  /**
   * The warning count for a given warning reason.
   */
  export interface Schema$WarningCount {
    /**
     * The warning reason.
     */
    reason?: string | null;
    /**
     * The count of records that have a warning.
     */
    recordCount?: string | null;
  }
  /**
   * Warning counts for each type of warning.
   */
  export interface Schema$WarningInfo {
    /**
     * A list of warnings and counts per warning reason.
     */
    warningCounts?: Schema$WarningCount[];
  }

  export class Resource$Accounttypes {
    context: APIRequestContext;
    accounts: Resource$Accounttypes$Accounts;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.accounts = new Resource$Accounttypes$Accounts(this.context);
    }
  }

  export class Resource$Accounttypes$Accounts {
    context: APIRequestContext;
    insights: Resource$Accounttypes$Accounts$Insights;
    partnerLinks: Resource$Accounttypes$Accounts$Partnerlinks;
    userListDirectLicenses: Resource$Accounttypes$Accounts$Userlistdirectlicenses;
    userListGlobalLicenses: Resource$Accounttypes$Accounts$Userlistgloballicenses;
    userLists: Resource$Accounttypes$Accounts$Userlists;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.insights = new Resource$Accounttypes$Accounts$Insights(this.context);
      this.partnerLinks = new Resource$Accounttypes$Accounts$Partnerlinks(
        this.context
      );
      this.userListDirectLicenses =
        new Resource$Accounttypes$Accounts$Userlistdirectlicenses(this.context);
      this.userListGlobalLicenses =
        new Resource$Accounttypes$Accounts$Userlistgloballicenses(this.context);
      this.userLists = new Resource$Accounttypes$Accounts$Userlists(
        this.context
      );
    }
  }

  export class Resource$Accounttypes$Accounts$Insights {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Retrieves marketing data insights for a given user list. This feature is only available to data partners. Authorization Headers: This method supports the following optional headers to define how the API authorizes access for the request: * `login-account`: (Optional) The resource name of the account where the Google Account of the credentials is a user. If not set, defaults to the account of the request. Format: `accountTypes/{loginAccountType\}/accounts/{loginAccountId\}` * `linked-account`: (Optional) The resource name of the account with an established product link to the `login-account`. Format: `accountTypes/{linkedAccountType\}/accounts/{linkedAccountId\}`
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/datamanager.googleapis.com
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
     * const datamanager = google.datamanager('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/datamanager'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await datamanager.accountTypes.accounts.insights.retrieve({
     *     // Required. The parent account that owns the user list. Format: `accountTypes/{account_type\}/accounts/{account\}`
     *     parent: 'accountTypes/my-accountType/accounts/my-account',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "baseline": {},
     *       //   "userListId": "my_userListId"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "marketingDataInsights": []
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
    retrieve(
      params: Params$Resource$Accounttypes$Accounts$Insights$Retrieve,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    retrieve(
      params?: Params$Resource$Accounttypes$Accounts$Insights$Retrieve,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$RetrieveInsightsResponse>>;
    retrieve(
      params: Params$Resource$Accounttypes$Accounts$Insights$Retrieve,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    retrieve(
      params: Params$Resource$Accounttypes$Accounts$Insights$Retrieve,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$RetrieveInsightsResponse>,
      callback: BodyResponseCallback<Schema$RetrieveInsightsResponse>
    ): void;
    retrieve(
      params: Params$Resource$Accounttypes$Accounts$Insights$Retrieve,
      callback: BodyResponseCallback<Schema$RetrieveInsightsResponse>
    ): void;
    retrieve(
      callback: BodyResponseCallback<Schema$RetrieveInsightsResponse>
    ): void;
    retrieve(
      paramsOrCallback?:
        | Params$Resource$Accounttypes$Accounts$Insights$Retrieve
        | BodyResponseCallback<Schema$RetrieveInsightsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$RetrieveInsightsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$RetrieveInsightsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$RetrieveInsightsResponse>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Accounttypes$Accounts$Insights$Retrieve;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Accounttypes$Accounts$Insights$Retrieve;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://datamanager.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}/insights:retrieve').replace(
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
        createAPIRequest<Schema$RetrieveInsightsResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$RetrieveInsightsResponse>(parameters);
      }
    }
  }

  export interface Params$Resource$Accounttypes$Accounts$Insights$Retrieve extends StandardParameters {
    /**
     * Required. The parent account that owns the user list. Format: `accountTypes/{account_type\}/accounts/{account\}`
     */
    parent?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$RetrieveInsightsRequest;
  }

  export class Resource$Accounttypes$Accounts$Partnerlinks {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Creates a partner link for the given account. Authorization Headers: This method supports the following optional headers to define how the API authorizes access for the request: * `login-account`: (Optional) The resource name of the account where the Google Account of the credentials is a user. If not set, defaults to the account of the request. Format: `accountTypes/{loginAccountType\}/accounts/{loginAccountId\}` * `linked-account`: (Optional) The resource name of the account with an established product link to the `login-account`. Format: `accountTypes/{linkedAccountType\}/accounts/{linkedAccountId\}`
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/datamanager.googleapis.com
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
     * const datamanager = google.datamanager('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/datamanager'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await datamanager.accountTypes.accounts.partnerLinks.create({
     *     // Required. The parent, which owns this collection of partner links. Format: accountTypes/{account_type\}/accounts/{account\}
     *     parent: 'accountTypes/my-accountType/accounts/my-account',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "name": "my_name",
     *       //   "owningAccount": {},
     *       //   "partnerAccount": {},
     *       //   "partnerLinkId": "my_partnerLinkId"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "name": "my_name",
     *   //   "owningAccount": {},
     *   //   "partnerAccount": {},
     *   //   "partnerLinkId": "my_partnerLinkId"
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
      params: Params$Resource$Accounttypes$Accounts$Partnerlinks$Create,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    create(
      params?: Params$Resource$Accounttypes$Accounts$Partnerlinks$Create,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$PartnerLink>>;
    create(
      params: Params$Resource$Accounttypes$Accounts$Partnerlinks$Create,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    create(
      params: Params$Resource$Accounttypes$Accounts$Partnerlinks$Create,
      options: MethodOptions | BodyResponseCallback<Schema$PartnerLink>,
      callback: BodyResponseCallback<Schema$PartnerLink>
    ): void;
    create(
      params: Params$Resource$Accounttypes$Accounts$Partnerlinks$Create,
      callback: BodyResponseCallback<Schema$PartnerLink>
    ): void;
    create(callback: BodyResponseCallback<Schema$PartnerLink>): void;
    create(
      paramsOrCallback?:
        | Params$Resource$Accounttypes$Accounts$Partnerlinks$Create
        | BodyResponseCallback<Schema$PartnerLink>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$PartnerLink>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$PartnerLink>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$PartnerLink>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Accounttypes$Accounts$Partnerlinks$Create;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Accounttypes$Accounts$Partnerlinks$Create;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://datamanager.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}/partnerLinks').replace(
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
        createAPIRequest<Schema$PartnerLink>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$PartnerLink>(parameters);
      }
    }

    /**
     * Deletes a partner link for the given account. Authorization Headers: This method supports the following optional headers to define how the API authorizes access for the request: * `login-account`: (Optional) The resource name of the account where the Google Account of the credentials is a user. If not set, defaults to the account of the request. Format: `accountTypes/{loginAccountType\}/accounts/{loginAccountId\}` * `linked-account`: (Optional) The resource name of the account with an established product link to the `login-account`. Format: `accountTypes/{linkedAccountType\}/accounts/{linkedAccountId\}`
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/datamanager.googleapis.com
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
     * const datamanager = google.datamanager('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/datamanager'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await datamanager.accountTypes.accounts.partnerLinks.delete({
     *     // Required. The resource name of the partner link to delete. Format: accountTypes/{account_type\}/accounts/{account\}/partnerLinks/{partner_link\}
     *     name: 'accountTypes/my-accountType/accounts/my-account/partnerLinks/my-partnerLink',
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
      params: Params$Resource$Accounttypes$Accounts$Partnerlinks$Delete,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    delete(
      params?: Params$Resource$Accounttypes$Accounts$Partnerlinks$Delete,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Empty>>;
    delete(
      params: Params$Resource$Accounttypes$Accounts$Partnerlinks$Delete,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    delete(
      params: Params$Resource$Accounttypes$Accounts$Partnerlinks$Delete,
      options: MethodOptions | BodyResponseCallback<Schema$Empty>,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    delete(
      params: Params$Resource$Accounttypes$Accounts$Partnerlinks$Delete,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    delete(callback: BodyResponseCallback<Schema$Empty>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Accounttypes$Accounts$Partnerlinks$Delete
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
        {}) as Params$Resource$Accounttypes$Accounts$Partnerlinks$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Accounttypes$Accounts$Partnerlinks$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://datamanager.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
     * Searches for all partner links to and from a given account. Authorization Headers: This method supports the following optional headers to define how the API authorizes access for the request: * `login-account`: (Optional) The resource name of the account where the Google Account of the credentials is a user. If not set, defaults to the account of the request. Format: `accountTypes/{loginAccountType\}/accounts/{loginAccountId\}` * `linked-account`: (Optional) The resource name of the account with an established product link to the `login-account`. Format: `accountTypes/{linkedAccountType\}/accounts/{linkedAccountId\}`
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/datamanager.googleapis.com
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
     * const datamanager = google.datamanager('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/datamanager'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await datamanager.accountTypes.accounts.partnerLinks.search({
     *     // Optional. A [filter string](//google.aip.dev/160). All fields need to be on the left hand side of each condition (for example: `partner_link_id = 123456789`). Supported operations: - `AND` - `=` - `!=` Supported fields: - `partner_link_id` - `owning_account.account_type` - `owning_account.account_id` - `partner_account.account_type` - `partner_account.account_id` Example: `owning_account.account_type = "GOOGLE_ADS" AND partner_account.account_id = 987654321`
     *     filter: 'placeholder-value',
     *     // The maximum number of partner links to return. The service may return fewer than this value. If unspecified, at most 10 partner links will be returned. The maximum value is 100; values above 100 will be coerced to 100.
     *     pageSize: 'placeholder-value',
     *     // A page token, received from a previous `SearchPartnerLinks` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `SearchPartnerLinks` must match the call that provided the page token.
     *     pageToken: 'placeholder-value',
     *     // Required. Account to search for partner links. If no `filter` is specified, all partner links where this account is either the `owning_account` or `partner_account` are returned. Format: `accountTypes/{account_type\}/accounts/{account\}`
     *     parent: 'accountTypes/my-accountType/accounts/my-account',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "nextPageToken": "my_nextPageToken",
     *   //   "partnerLinks": []
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
    search(
      params: Params$Resource$Accounttypes$Accounts$Partnerlinks$Search,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    search(
      params?: Params$Resource$Accounttypes$Accounts$Partnerlinks$Search,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$SearchPartnerLinksResponse>>;
    search(
      params: Params$Resource$Accounttypes$Accounts$Partnerlinks$Search,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    search(
      params: Params$Resource$Accounttypes$Accounts$Partnerlinks$Search,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$SearchPartnerLinksResponse>,
      callback: BodyResponseCallback<Schema$SearchPartnerLinksResponse>
    ): void;
    search(
      params: Params$Resource$Accounttypes$Accounts$Partnerlinks$Search,
      callback: BodyResponseCallback<Schema$SearchPartnerLinksResponse>
    ): void;
    search(
      callback: BodyResponseCallback<Schema$SearchPartnerLinksResponse>
    ): void;
    search(
      paramsOrCallback?:
        | Params$Resource$Accounttypes$Accounts$Partnerlinks$Search
        | BodyResponseCallback<Schema$SearchPartnerLinksResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$SearchPartnerLinksResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$SearchPartnerLinksResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$SearchPartnerLinksResponse>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Accounttypes$Accounts$Partnerlinks$Search;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Accounttypes$Accounts$Partnerlinks$Search;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://datamanager.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}/partnerLinks:search').replace(
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
        createAPIRequest<Schema$SearchPartnerLinksResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$SearchPartnerLinksResponse>(parameters);
      }
    }
  }

  export interface Params$Resource$Accounttypes$Accounts$Partnerlinks$Create extends StandardParameters {
    /**
     * Required. The parent, which owns this collection of partner links. Format: accountTypes/{account_type\}/accounts/{account\}
     */
    parent?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$PartnerLink;
  }
  export interface Params$Resource$Accounttypes$Accounts$Partnerlinks$Delete extends StandardParameters {
    /**
     * Required. The resource name of the partner link to delete. Format: accountTypes/{account_type\}/accounts/{account\}/partnerLinks/{partner_link\}
     */
    name?: string;
  }
  export interface Params$Resource$Accounttypes$Accounts$Partnerlinks$Search extends StandardParameters {
    /**
     * Optional. A [filter string](//google.aip.dev/160). All fields need to be on the left hand side of each condition (for example: `partner_link_id = 123456789`). Supported operations: - `AND` - `=` - `!=` Supported fields: - `partner_link_id` - `owning_account.account_type` - `owning_account.account_id` - `partner_account.account_type` - `partner_account.account_id` Example: `owning_account.account_type = "GOOGLE_ADS" AND partner_account.account_id = 987654321`
     */
    filter?: string;
    /**
     * The maximum number of partner links to return. The service may return fewer than this value. If unspecified, at most 10 partner links will be returned. The maximum value is 100; values above 100 will be coerced to 100.
     */
    pageSize?: number;
    /**
     * A page token, received from a previous `SearchPartnerLinks` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `SearchPartnerLinks` must match the call that provided the page token.
     */
    pageToken?: string;
    /**
     * Required. Account to search for partner links. If no `filter` is specified, all partner links where this account is either the `owning_account` or `partner_account` are returned. Format: `accountTypes/{account_type\}/accounts/{account\}`
     */
    parent?: string;
  }

  export class Resource$Accounttypes$Accounts$Userlistdirectlicenses {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Creates a user list direct license. This feature is only available to data partners.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/datamanager.googleapis.com
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
     * const datamanager = google.datamanager('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/datamanager'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res =
     *     await datamanager.accountTypes.accounts.userListDirectLicenses.create({
     *       // Required. The account that owns the user list being licensed. Should be in the format accountTypes/{ACCOUNT_TYPE\}/accounts/{ACCOUNT_ID\}
     *       parent: 'accountTypes/my-accountType/accounts/my-account',
     *
     *       // Request body metadata
     *       requestBody: {
     *         // request body parameters
     *         // {
     *         //   "clientAccountDisplayName": "my_clientAccountDisplayName",
     *         //   "clientAccountId": "my_clientAccountId",
     *         //   "clientAccountType": "my_clientAccountType",
     *         //   "historicalPricings": [],
     *         //   "metrics": {},
     *         //   "name": "my_name",
     *         //   "pricing": {},
     *         //   "status": "my_status",
     *         //   "userListDisplayName": "my_userListDisplayName",
     *         //   "userListId": "my_userListId"
     *         // }
     *       },
     *     });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "clientAccountDisplayName": "my_clientAccountDisplayName",
     *   //   "clientAccountId": "my_clientAccountId",
     *   //   "clientAccountType": "my_clientAccountType",
     *   //   "historicalPricings": [],
     *   //   "metrics": {},
     *   //   "name": "my_name",
     *   //   "pricing": {},
     *   //   "status": "my_status",
     *   //   "userListDisplayName": "my_userListDisplayName",
     *   //   "userListId": "my_userListId"
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
      params: Params$Resource$Accounttypes$Accounts$Userlistdirectlicenses$Create,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    create(
      params?: Params$Resource$Accounttypes$Accounts$Userlistdirectlicenses$Create,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$UserListDirectLicense>>;
    create(
      params: Params$Resource$Accounttypes$Accounts$Userlistdirectlicenses$Create,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    create(
      params: Params$Resource$Accounttypes$Accounts$Userlistdirectlicenses$Create,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$UserListDirectLicense>,
      callback: BodyResponseCallback<Schema$UserListDirectLicense>
    ): void;
    create(
      params: Params$Resource$Accounttypes$Accounts$Userlistdirectlicenses$Create,
      callback: BodyResponseCallback<Schema$UserListDirectLicense>
    ): void;
    create(callback: BodyResponseCallback<Schema$UserListDirectLicense>): void;
    create(
      paramsOrCallback?:
        | Params$Resource$Accounttypes$Accounts$Userlistdirectlicenses$Create
        | BodyResponseCallback<Schema$UserListDirectLicense>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$UserListDirectLicense>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$UserListDirectLicense>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$UserListDirectLicense>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Accounttypes$Accounts$Userlistdirectlicenses$Create;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Accounttypes$Accounts$Userlistdirectlicenses$Create;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://datamanager.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}/userListDirectLicenses').replace(
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
        createAPIRequest<Schema$UserListDirectLicense>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$UserListDirectLicense>(parameters);
      }
    }

    /**
     * Retrieves a user list direct license. This feature is only available to data partners.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/datamanager.googleapis.com
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
     * const datamanager = google.datamanager('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/datamanager'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res =
     *     await datamanager.accountTypes.accounts.userListDirectLicenses.get({
     *       // Required. The resource name of the user list direct license.
     *       name: 'accountTypes/my-accountType/accounts/my-account/userListDirectLicenses/my-userListDirectLicense',
     *     });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "clientAccountDisplayName": "my_clientAccountDisplayName",
     *   //   "clientAccountId": "my_clientAccountId",
     *   //   "clientAccountType": "my_clientAccountType",
     *   //   "historicalPricings": [],
     *   //   "metrics": {},
     *   //   "name": "my_name",
     *   //   "pricing": {},
     *   //   "status": "my_status",
     *   //   "userListDisplayName": "my_userListDisplayName",
     *   //   "userListId": "my_userListId"
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
      params: Params$Resource$Accounttypes$Accounts$Userlistdirectlicenses$Get,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    get(
      params?: Params$Resource$Accounttypes$Accounts$Userlistdirectlicenses$Get,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$UserListDirectLicense>>;
    get(
      params: Params$Resource$Accounttypes$Accounts$Userlistdirectlicenses$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Accounttypes$Accounts$Userlistdirectlicenses$Get,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$UserListDirectLicense>,
      callback: BodyResponseCallback<Schema$UserListDirectLicense>
    ): void;
    get(
      params: Params$Resource$Accounttypes$Accounts$Userlistdirectlicenses$Get,
      callback: BodyResponseCallback<Schema$UserListDirectLicense>
    ): void;
    get(callback: BodyResponseCallback<Schema$UserListDirectLicense>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Accounttypes$Accounts$Userlistdirectlicenses$Get
        | BodyResponseCallback<Schema$UserListDirectLicense>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$UserListDirectLicense>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$UserListDirectLicense>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$UserListDirectLicense>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Accounttypes$Accounts$Userlistdirectlicenses$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Accounttypes$Accounts$Userlistdirectlicenses$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://datamanager.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$UserListDirectLicense>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$UserListDirectLicense>(parameters);
      }
    }

    /**
     * Lists all user list direct licenses owned by the parent account. This feature is only available to data partners.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/datamanager.googleapis.com
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
     * const datamanager = google.datamanager('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/datamanager'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res =
     *     await datamanager.accountTypes.accounts.userListDirectLicenses.list({
     *       // Optional. Filters to apply to the list request. All fields need to be on the left hand side of each condition (for example: user_list_id = 123). **Supported Operations:** - `AND` - `=` - `!=` - `\>` - `\>=` - `<` - `<=` **Unsupported Fields:** - `name` (use get method instead) - `historical_pricings` and all its subfields - `pricing.start_time` - `pricing.end_time`
     *       filter: 'placeholder-value',
     *       // Optional. The maximum number of licenses to return per page. The service may return fewer than this value. If unspecified, at most 50 licenses will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000.
     *       pageSize: 'placeholder-value',
     *       // Optional. A page token, received from a previous `ListUserListDirectLicense` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListUserListDirectLicense` must match the call that provided the page token.
     *       pageToken: 'placeholder-value',
     *       // Required. The account whose licenses are being queried. Should be in the format accountTypes/{ACCOUNT_TYPE\}/accounts/{ACCOUNT_ID\}
     *       parent: 'accountTypes/my-accountType/accounts/my-account',
     *     });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "nextPageToken": "my_nextPageToken",
     *   //   "userListDirectLicenses": []
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
      params: Params$Resource$Accounttypes$Accounts$Userlistdirectlicenses$List,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    list(
      params?: Params$Resource$Accounttypes$Accounts$Userlistdirectlicenses$List,
      options?: MethodOptions
    ): Promise<
      GaxiosResponseWithHTTP2<Schema$ListUserListDirectLicensesResponse>
    >;
    list(
      params: Params$Resource$Accounttypes$Accounts$Userlistdirectlicenses$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Accounttypes$Accounts$Userlistdirectlicenses$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ListUserListDirectLicensesResponse>,
      callback: BodyResponseCallback<Schema$ListUserListDirectLicensesResponse>
    ): void;
    list(
      params: Params$Resource$Accounttypes$Accounts$Userlistdirectlicenses$List,
      callback: BodyResponseCallback<Schema$ListUserListDirectLicensesResponse>
    ): void;
    list(
      callback: BodyResponseCallback<Schema$ListUserListDirectLicensesResponse>
    ): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Accounttypes$Accounts$Userlistdirectlicenses$List
        | BodyResponseCallback<Schema$ListUserListDirectLicensesResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ListUserListDirectLicensesResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ListUserListDirectLicensesResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<
          GaxiosResponseWithHTTP2<Schema$ListUserListDirectLicensesResponse>
        >
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Accounttypes$Accounts$Userlistdirectlicenses$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Accounttypes$Accounts$Userlistdirectlicenses$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://datamanager.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}/userListDirectLicenses').replace(
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
        createAPIRequest<Schema$ListUserListDirectLicensesResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ListUserListDirectLicensesResponse>(
          parameters
        );
      }
    }

    /**
     * Updates a user list direct license. This feature is only available to data partners.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/datamanager.googleapis.com
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
     * const datamanager = google.datamanager('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/datamanager'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res =
     *     await datamanager.accountTypes.accounts.userListDirectLicenses.patch({
     *       // Identifier. The resource name of the user list direct license.
     *       name: 'accountTypes/my-accountType/accounts/my-account/userListDirectLicenses/my-userListDirectLicense',
     *       // Optional. The list of fields to update. The special character `*` is not supported and an `INVALID_UPDATE_MASK` error will be thrown if used.
     *       updateMask: 'placeholder-value',
     *
     *       // Request body metadata
     *       requestBody: {
     *         // request body parameters
     *         // {
     *         //   "clientAccountDisplayName": "my_clientAccountDisplayName",
     *         //   "clientAccountId": "my_clientAccountId",
     *         //   "clientAccountType": "my_clientAccountType",
     *         //   "historicalPricings": [],
     *         //   "metrics": {},
     *         //   "name": "my_name",
     *         //   "pricing": {},
     *         //   "status": "my_status",
     *         //   "userListDisplayName": "my_userListDisplayName",
     *         //   "userListId": "my_userListId"
     *         // }
     *       },
     *     });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "clientAccountDisplayName": "my_clientAccountDisplayName",
     *   //   "clientAccountId": "my_clientAccountId",
     *   //   "clientAccountType": "my_clientAccountType",
     *   //   "historicalPricings": [],
     *   //   "metrics": {},
     *   //   "name": "my_name",
     *   //   "pricing": {},
     *   //   "status": "my_status",
     *   //   "userListDisplayName": "my_userListDisplayName",
     *   //   "userListId": "my_userListId"
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
      params: Params$Resource$Accounttypes$Accounts$Userlistdirectlicenses$Patch,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    patch(
      params?: Params$Resource$Accounttypes$Accounts$Userlistdirectlicenses$Patch,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$UserListDirectLicense>>;
    patch(
      params: Params$Resource$Accounttypes$Accounts$Userlistdirectlicenses$Patch,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    patch(
      params: Params$Resource$Accounttypes$Accounts$Userlistdirectlicenses$Patch,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$UserListDirectLicense>,
      callback: BodyResponseCallback<Schema$UserListDirectLicense>
    ): void;
    patch(
      params: Params$Resource$Accounttypes$Accounts$Userlistdirectlicenses$Patch,
      callback: BodyResponseCallback<Schema$UserListDirectLicense>
    ): void;
    patch(callback: BodyResponseCallback<Schema$UserListDirectLicense>): void;
    patch(
      paramsOrCallback?:
        | Params$Resource$Accounttypes$Accounts$Userlistdirectlicenses$Patch
        | BodyResponseCallback<Schema$UserListDirectLicense>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$UserListDirectLicense>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$UserListDirectLicense>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$UserListDirectLicense>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Accounttypes$Accounts$Userlistdirectlicenses$Patch;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Accounttypes$Accounts$Userlistdirectlicenses$Patch;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://datamanager.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$UserListDirectLicense>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$UserListDirectLicense>(parameters);
      }
    }
  }

  export interface Params$Resource$Accounttypes$Accounts$Userlistdirectlicenses$Create extends StandardParameters {
    /**
     * Required. The account that owns the user list being licensed. Should be in the format accountTypes/{ACCOUNT_TYPE\}/accounts/{ACCOUNT_ID\}
     */
    parent?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$UserListDirectLicense;
  }
  export interface Params$Resource$Accounttypes$Accounts$Userlistdirectlicenses$Get extends StandardParameters {
    /**
     * Required. The resource name of the user list direct license.
     */
    name?: string;
  }
  export interface Params$Resource$Accounttypes$Accounts$Userlistdirectlicenses$List extends StandardParameters {
    /**
     * Optional. Filters to apply to the list request. All fields need to be on the left hand side of each condition (for example: user_list_id = 123). **Supported Operations:** - `AND` - `=` - `!=` - `\>` - `\>=` - `<` - `<=` **Unsupported Fields:** - `name` (use get method instead) - `historical_pricings` and all its subfields - `pricing.start_time` - `pricing.end_time`
     */
    filter?: string;
    /**
     * Optional. The maximum number of licenses to return per page. The service may return fewer than this value. If unspecified, at most 50 licenses will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000.
     */
    pageSize?: number;
    /**
     * Optional. A page token, received from a previous `ListUserListDirectLicense` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListUserListDirectLicense` must match the call that provided the page token.
     */
    pageToken?: string;
    /**
     * Required. The account whose licenses are being queried. Should be in the format accountTypes/{ACCOUNT_TYPE\}/accounts/{ACCOUNT_ID\}
     */
    parent?: string;
  }
  export interface Params$Resource$Accounttypes$Accounts$Userlistdirectlicenses$Patch extends StandardParameters {
    /**
     * Identifier. The resource name of the user list direct license.
     */
    name?: string;
    /**
     * Optional. The list of fields to update. The special character `*` is not supported and an `INVALID_UPDATE_MASK` error will be thrown if used.
     */
    updateMask?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$UserListDirectLicense;
  }

  export class Resource$Accounttypes$Accounts$Userlistgloballicenses {
    context: APIRequestContext;
    userListGlobalLicenseCustomerInfos: Resource$Accounttypes$Accounts$Userlistgloballicenses$Userlistgloballicensecustomerinfos;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.userListGlobalLicenseCustomerInfos =
        new Resource$Accounttypes$Accounts$Userlistgloballicenses$Userlistgloballicensecustomerinfos(
          this.context
        );
    }

    /**
     * Creates a user list global license. This feature is only available to data partners.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/datamanager.googleapis.com
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
     * const datamanager = google.datamanager('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/datamanager'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res =
     *     await datamanager.accountTypes.accounts.userListGlobalLicenses.create({
     *       // Required. The account that owns the user list being licensed. Should be in the format accountTypes/{ACCOUNT_TYPE\}/accounts/{ACCOUNT_ID\}
     *       parent: 'accountTypes/my-accountType/accounts/my-account',
     *
     *       // Request body metadata
     *       requestBody: {
     *         // request body parameters
     *         // {
     *         //   "historicalPricings": [],
     *         //   "licenseType": "my_licenseType",
     *         //   "metrics": {},
     *         //   "name": "my_name",
     *         //   "pricing": {},
     *         //   "status": "my_status",
     *         //   "userListDisplayName": "my_userListDisplayName",
     *         //   "userListId": "my_userListId"
     *         // }
     *       },
     *     });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "historicalPricings": [],
     *   //   "licenseType": "my_licenseType",
     *   //   "metrics": {},
     *   //   "name": "my_name",
     *   //   "pricing": {},
     *   //   "status": "my_status",
     *   //   "userListDisplayName": "my_userListDisplayName",
     *   //   "userListId": "my_userListId"
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
      params: Params$Resource$Accounttypes$Accounts$Userlistgloballicenses$Create,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    create(
      params?: Params$Resource$Accounttypes$Accounts$Userlistgloballicenses$Create,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$UserListGlobalLicense>>;
    create(
      params: Params$Resource$Accounttypes$Accounts$Userlistgloballicenses$Create,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    create(
      params: Params$Resource$Accounttypes$Accounts$Userlistgloballicenses$Create,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$UserListGlobalLicense>,
      callback: BodyResponseCallback<Schema$UserListGlobalLicense>
    ): void;
    create(
      params: Params$Resource$Accounttypes$Accounts$Userlistgloballicenses$Create,
      callback: BodyResponseCallback<Schema$UserListGlobalLicense>
    ): void;
    create(callback: BodyResponseCallback<Schema$UserListGlobalLicense>): void;
    create(
      paramsOrCallback?:
        | Params$Resource$Accounttypes$Accounts$Userlistgloballicenses$Create
        | BodyResponseCallback<Schema$UserListGlobalLicense>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$UserListGlobalLicense>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$UserListGlobalLicense>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$UserListGlobalLicense>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Accounttypes$Accounts$Userlistgloballicenses$Create;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Accounttypes$Accounts$Userlistgloballicenses$Create;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://datamanager.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}/userListGlobalLicenses').replace(
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
        createAPIRequest<Schema$UserListGlobalLicense>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$UserListGlobalLicense>(parameters);
      }
    }

    /**
     * Retrieves a user list global license. This feature is only available to data partners.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/datamanager.googleapis.com
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
     * const datamanager = google.datamanager('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/datamanager'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res =
     *     await datamanager.accountTypes.accounts.userListGlobalLicenses.get({
     *       // Required. The resource name of the user list global license.
     *       name: 'accountTypes/my-accountType/accounts/my-account/userListGlobalLicenses/my-userListGlobalLicense',
     *     });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "historicalPricings": [],
     *   //   "licenseType": "my_licenseType",
     *   //   "metrics": {},
     *   //   "name": "my_name",
     *   //   "pricing": {},
     *   //   "status": "my_status",
     *   //   "userListDisplayName": "my_userListDisplayName",
     *   //   "userListId": "my_userListId"
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
      params: Params$Resource$Accounttypes$Accounts$Userlistgloballicenses$Get,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    get(
      params?: Params$Resource$Accounttypes$Accounts$Userlistgloballicenses$Get,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$UserListGlobalLicense>>;
    get(
      params: Params$Resource$Accounttypes$Accounts$Userlistgloballicenses$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Accounttypes$Accounts$Userlistgloballicenses$Get,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$UserListGlobalLicense>,
      callback: BodyResponseCallback<Schema$UserListGlobalLicense>
    ): void;
    get(
      params: Params$Resource$Accounttypes$Accounts$Userlistgloballicenses$Get,
      callback: BodyResponseCallback<Schema$UserListGlobalLicense>
    ): void;
    get(callback: BodyResponseCallback<Schema$UserListGlobalLicense>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Accounttypes$Accounts$Userlistgloballicenses$Get
        | BodyResponseCallback<Schema$UserListGlobalLicense>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$UserListGlobalLicense>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$UserListGlobalLicense>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$UserListGlobalLicense>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Accounttypes$Accounts$Userlistgloballicenses$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Accounttypes$Accounts$Userlistgloballicenses$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://datamanager.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$UserListGlobalLicense>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$UserListGlobalLicense>(parameters);
      }
    }

    /**
     * Lists all user list global licenses owned by the parent account. This feature is only available to data partners.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/datamanager.googleapis.com
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
     * const datamanager = google.datamanager('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/datamanager'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res =
     *     await datamanager.accountTypes.accounts.userListGlobalLicenses.list({
     *       // Optional. Filters to apply to the list request. All fields need to be on the left hand side of each condition (for example: user_list_id = 123). **Supported Operations:** - `AND` - `=` - `!=` - `\>` - `\>=` - `<` - `<=` **Unsupported Fields:** - `name` (use get method instead) - `historical_pricings` and all its subfields - `pricing.start_time` - `pricing.end_time`
     *       filter: 'placeholder-value',
     *       // Optional. The maximum number of licenses to return. The service may return fewer than this value. If unspecified, at most 50 licenses will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000.
     *       pageSize: 'placeholder-value',
     *       // Optional. A page token, received from a previous `ListUserListGlobalLicense` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListUserListDirectLicense` must match the call that provided the page token.
     *       pageToken: 'placeholder-value',
     *       // Required. The account whose licenses are being queried. Should be in the format accountTypes/{ACCOUNT_TYPE\}/accounts/{ACCOUNT_ID\}
     *       parent: 'accountTypes/my-accountType/accounts/my-account',
     *     });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "nextPageToken": "my_nextPageToken",
     *   //   "userListGlobalLicenses": []
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
      params: Params$Resource$Accounttypes$Accounts$Userlistgloballicenses$List,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    list(
      params?: Params$Resource$Accounttypes$Accounts$Userlistgloballicenses$List,
      options?: MethodOptions
    ): Promise<
      GaxiosResponseWithHTTP2<Schema$ListUserListGlobalLicensesResponse>
    >;
    list(
      params: Params$Resource$Accounttypes$Accounts$Userlistgloballicenses$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Accounttypes$Accounts$Userlistgloballicenses$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ListUserListGlobalLicensesResponse>,
      callback: BodyResponseCallback<Schema$ListUserListGlobalLicensesResponse>
    ): void;
    list(
      params: Params$Resource$Accounttypes$Accounts$Userlistgloballicenses$List,
      callback: BodyResponseCallback<Schema$ListUserListGlobalLicensesResponse>
    ): void;
    list(
      callback: BodyResponseCallback<Schema$ListUserListGlobalLicensesResponse>
    ): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Accounttypes$Accounts$Userlistgloballicenses$List
        | BodyResponseCallback<Schema$ListUserListGlobalLicensesResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ListUserListGlobalLicensesResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ListUserListGlobalLicensesResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<
          GaxiosResponseWithHTTP2<Schema$ListUserListGlobalLicensesResponse>
        >
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Accounttypes$Accounts$Userlistgloballicenses$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Accounttypes$Accounts$Userlistgloballicenses$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://datamanager.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}/userListGlobalLicenses').replace(
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
        createAPIRequest<Schema$ListUserListGlobalLicensesResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ListUserListGlobalLicensesResponse>(
          parameters
        );
      }
    }

    /**
     * Updates a user list global license. This feature is only available to data partners.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/datamanager.googleapis.com
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
     * const datamanager = google.datamanager('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/datamanager'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res =
     *     await datamanager.accountTypes.accounts.userListGlobalLicenses.patch({
     *       // Identifier. The resource name of the user list global license.
     *       name: 'accountTypes/my-accountType/accounts/my-account/userListGlobalLicenses/my-userListGlobalLicense',
     *       // Optional. The list of fields to update. The special character `*` is not supported and an `INVALID_UPDATE_MASK` error will be thrown if used.
     *       updateMask: 'placeholder-value',
     *
     *       // Request body metadata
     *       requestBody: {
     *         // request body parameters
     *         // {
     *         //   "historicalPricings": [],
     *         //   "licenseType": "my_licenseType",
     *         //   "metrics": {},
     *         //   "name": "my_name",
     *         //   "pricing": {},
     *         //   "status": "my_status",
     *         //   "userListDisplayName": "my_userListDisplayName",
     *         //   "userListId": "my_userListId"
     *         // }
     *       },
     *     });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "historicalPricings": [],
     *   //   "licenseType": "my_licenseType",
     *   //   "metrics": {},
     *   //   "name": "my_name",
     *   //   "pricing": {},
     *   //   "status": "my_status",
     *   //   "userListDisplayName": "my_userListDisplayName",
     *   //   "userListId": "my_userListId"
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
      params: Params$Resource$Accounttypes$Accounts$Userlistgloballicenses$Patch,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    patch(
      params?: Params$Resource$Accounttypes$Accounts$Userlistgloballicenses$Patch,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$UserListGlobalLicense>>;
    patch(
      params: Params$Resource$Accounttypes$Accounts$Userlistgloballicenses$Patch,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    patch(
      params: Params$Resource$Accounttypes$Accounts$Userlistgloballicenses$Patch,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$UserListGlobalLicense>,
      callback: BodyResponseCallback<Schema$UserListGlobalLicense>
    ): void;
    patch(
      params: Params$Resource$Accounttypes$Accounts$Userlistgloballicenses$Patch,
      callback: BodyResponseCallback<Schema$UserListGlobalLicense>
    ): void;
    patch(callback: BodyResponseCallback<Schema$UserListGlobalLicense>): void;
    patch(
      paramsOrCallback?:
        | Params$Resource$Accounttypes$Accounts$Userlistgloballicenses$Patch
        | BodyResponseCallback<Schema$UserListGlobalLicense>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$UserListGlobalLicense>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$UserListGlobalLicense>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$UserListGlobalLicense>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Accounttypes$Accounts$Userlistgloballicenses$Patch;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Accounttypes$Accounts$Userlistgloballicenses$Patch;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://datamanager.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$UserListGlobalLicense>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$UserListGlobalLicense>(parameters);
      }
    }
  }

  export interface Params$Resource$Accounttypes$Accounts$Userlistgloballicenses$Create extends StandardParameters {
    /**
     * Required. The account that owns the user list being licensed. Should be in the format accountTypes/{ACCOUNT_TYPE\}/accounts/{ACCOUNT_ID\}
     */
    parent?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$UserListGlobalLicense;
  }
  export interface Params$Resource$Accounttypes$Accounts$Userlistgloballicenses$Get extends StandardParameters {
    /**
     * Required. The resource name of the user list global license.
     */
    name?: string;
  }
  export interface Params$Resource$Accounttypes$Accounts$Userlistgloballicenses$List extends StandardParameters {
    /**
     * Optional. Filters to apply to the list request. All fields need to be on the left hand side of each condition (for example: user_list_id = 123). **Supported Operations:** - `AND` - `=` - `!=` - `\>` - `\>=` - `<` - `<=` **Unsupported Fields:** - `name` (use get method instead) - `historical_pricings` and all its subfields - `pricing.start_time` - `pricing.end_time`
     */
    filter?: string;
    /**
     * Optional. The maximum number of licenses to return. The service may return fewer than this value. If unspecified, at most 50 licenses will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000.
     */
    pageSize?: number;
    /**
     * Optional. A page token, received from a previous `ListUserListGlobalLicense` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListUserListDirectLicense` must match the call that provided the page token.
     */
    pageToken?: string;
    /**
     * Required. The account whose licenses are being queried. Should be in the format accountTypes/{ACCOUNT_TYPE\}/accounts/{ACCOUNT_ID\}
     */
    parent?: string;
  }
  export interface Params$Resource$Accounttypes$Accounts$Userlistgloballicenses$Patch extends StandardParameters {
    /**
     * Identifier. The resource name of the user list global license.
     */
    name?: string;
    /**
     * Optional. The list of fields to update. The special character `*` is not supported and an `INVALID_UPDATE_MASK` error will be thrown if used.
     */
    updateMask?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$UserListGlobalLicense;
  }

  export class Resource$Accounttypes$Accounts$Userlistgloballicenses$Userlistgloballicensecustomerinfos {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Lists all customer info for a user list global license. This feature is only available to data partners.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/datamanager.googleapis.com
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
     * const datamanager = google.datamanager('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/datamanager'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res =
     *     await datamanager.accountTypes.accounts.userListGlobalLicenses.userListGlobalLicenseCustomerInfos.list(
     *       {
     *         // Optional. Filters to apply to the list request. All fields need to be on the left hand side of each condition (for example: user_list_id = 123). **Supported Operations:** - `AND` - `=` - `!=` - `\>` - `\>=` - `<` - `<=` **Unsupported Fields:** - `name` (use get method instead) - `historical_pricings` and all its subfields - `pricing.start_time` - `pricing.end_time`
     *         filter: 'placeholder-value',
     *         // Optional. The maximum number of licenses to return. The service may return fewer than this value. If unspecified, at most 50 licenses will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000.
     *         pageSize: 'placeholder-value',
     *         // Optional. A page token, received from a previous `ListUserListDirectLicense` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListUserListDirectLicense` must match the call that provided the page token.
     *         pageToken: 'placeholder-value',
     *         // Required. The global license whose customer info are being queried. Should be in the format `accountTypes/{ACCOUNT_TYPE\}/accounts/{ACCOUNT_ID\}/userListGlobalLicenses/{USER_LIST_GLOBAL_LICENSE_ID\}`. To list all global license customer info under an account, replace the user list global license id with a '-' (for example, `accountTypes/DATA_PARTNER/accounts/123/userListGlobalLicenses/-`)
     *         parent:
     *           'accountTypes/my-accountType/accounts/my-account/userListGlobalLicenses/my-userListGlobalLicense',
     *       },
     *     );
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "nextPageToken": "my_nextPageToken",
     *   //   "userListGlobalLicenseCustomerInfos": []
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
      params: Params$Resource$Accounttypes$Accounts$Userlistgloballicenses$Userlistgloballicensecustomerinfos$List,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    list(
      params?: Params$Resource$Accounttypes$Accounts$Userlistgloballicenses$Userlistgloballicensecustomerinfos$List,
      options?: MethodOptions
    ): Promise<
      GaxiosResponseWithHTTP2<Schema$ListUserListGlobalLicenseCustomerInfosResponse>
    >;
    list(
      params: Params$Resource$Accounttypes$Accounts$Userlistgloballicenses$Userlistgloballicensecustomerinfos$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Accounttypes$Accounts$Userlistgloballicenses$Userlistgloballicensecustomerinfos$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ListUserListGlobalLicenseCustomerInfosResponse>,
      callback: BodyResponseCallback<Schema$ListUserListGlobalLicenseCustomerInfosResponse>
    ): void;
    list(
      params: Params$Resource$Accounttypes$Accounts$Userlistgloballicenses$Userlistgloballicensecustomerinfos$List,
      callback: BodyResponseCallback<Schema$ListUserListGlobalLicenseCustomerInfosResponse>
    ): void;
    list(
      callback: BodyResponseCallback<Schema$ListUserListGlobalLicenseCustomerInfosResponse>
    ): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Accounttypes$Accounts$Userlistgloballicenses$Userlistgloballicensecustomerinfos$List
        | BodyResponseCallback<Schema$ListUserListGlobalLicenseCustomerInfosResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ListUserListGlobalLicenseCustomerInfosResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ListUserListGlobalLicenseCustomerInfosResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<
          GaxiosResponseWithHTTP2<Schema$ListUserListGlobalLicenseCustomerInfosResponse>
        >
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Accounttypes$Accounts$Userlistgloballicenses$Userlistgloballicensecustomerinfos$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Accounttypes$Accounts$Userlistgloballicenses$Userlistgloballicensecustomerinfos$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://datamanager.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl + '/v1/{+parent}/userListGlobalLicenseCustomerInfos'
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
        createAPIRequest<Schema$ListUserListGlobalLicenseCustomerInfosResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ListUserListGlobalLicenseCustomerInfosResponse>(
          parameters
        );
      }
    }
  }

  export interface Params$Resource$Accounttypes$Accounts$Userlistgloballicenses$Userlistgloballicensecustomerinfos$List extends StandardParameters {
    /**
     * Optional. Filters to apply to the list request. All fields need to be on the left hand side of each condition (for example: user_list_id = 123). **Supported Operations:** - `AND` - `=` - `!=` - `\>` - `\>=` - `<` - `<=` **Unsupported Fields:** - `name` (use get method instead) - `historical_pricings` and all its subfields - `pricing.start_time` - `pricing.end_time`
     */
    filter?: string;
    /**
     * Optional. The maximum number of licenses to return. The service may return fewer than this value. If unspecified, at most 50 licenses will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000.
     */
    pageSize?: number;
    /**
     * Optional. A page token, received from a previous `ListUserListDirectLicense` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListUserListDirectLicense` must match the call that provided the page token.
     */
    pageToken?: string;
    /**
     * Required. The global license whose customer info are being queried. Should be in the format `accountTypes/{ACCOUNT_TYPE\}/accounts/{ACCOUNT_ID\}/userListGlobalLicenses/{USER_LIST_GLOBAL_LICENSE_ID\}`. To list all global license customer info under an account, replace the user list global license id with a '-' (for example, `accountTypes/DATA_PARTNER/accounts/123/userListGlobalLicenses/-`)
     */
    parent?: string;
  }

  export class Resource$Accounttypes$Accounts$Userlists {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Creates a UserList. Authorization Headers: This method supports the following optional headers to define how the API authorizes access for the request: * `login-account`: (Optional) The resource name of the account where the Google Account of the credentials is a user. If not set, defaults to the account of the request. Format: `accountTypes/{loginAccountType\}/accounts/{loginAccountId\}` * `linked-account`: (Optional) The resource name of the account with an established product link to the `login-account`. Format: `accountTypes/{linkedAccountType\}/accounts/{linkedAccountId\}`
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/datamanager.googleapis.com
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
     * const datamanager = google.datamanager('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/datamanager'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await datamanager.accountTypes.accounts.userLists.create({
     *     // Required. The parent account where this user list will be created. Format: accountTypes/{account_type\}/accounts/{account\}
     *     parent: 'accountTypes/my-accountType/accounts/my-account',
     *     // Optional. If true, the request is validated but not executed.
     *     validateOnly: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "accessReason": "my_accessReason",
     *       //   "accountAccessStatus": "my_accountAccessStatus",
     *       //   "closingReason": "my_closingReason",
     *       //   "description": "my_description",
     *       //   "displayName": "my_displayName",
     *       //   "id": "my_id",
     *       //   "ingestedUserListInfo": {},
     *       //   "integrationCode": "my_integrationCode",
     *       //   "membershipDuration": "my_membershipDuration",
     *       //   "membershipStatus": "my_membershipStatus",
     *       //   "name": "my_name",
     *       //   "readOnly": false,
     *       //   "sizeInfo": {},
     *       //   "targetNetworkInfo": {}
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "accessReason": "my_accessReason",
     *   //   "accountAccessStatus": "my_accountAccessStatus",
     *   //   "closingReason": "my_closingReason",
     *   //   "description": "my_description",
     *   //   "displayName": "my_displayName",
     *   //   "id": "my_id",
     *   //   "ingestedUserListInfo": {},
     *   //   "integrationCode": "my_integrationCode",
     *   //   "membershipDuration": "my_membershipDuration",
     *   //   "membershipStatus": "my_membershipStatus",
     *   //   "name": "my_name",
     *   //   "readOnly": false,
     *   //   "sizeInfo": {},
     *   //   "targetNetworkInfo": {}
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
      params: Params$Resource$Accounttypes$Accounts$Userlists$Create,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    create(
      params?: Params$Resource$Accounttypes$Accounts$Userlists$Create,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$UserList>>;
    create(
      params: Params$Resource$Accounttypes$Accounts$Userlists$Create,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    create(
      params: Params$Resource$Accounttypes$Accounts$Userlists$Create,
      options: MethodOptions | BodyResponseCallback<Schema$UserList>,
      callback: BodyResponseCallback<Schema$UserList>
    ): void;
    create(
      params: Params$Resource$Accounttypes$Accounts$Userlists$Create,
      callback: BodyResponseCallback<Schema$UserList>
    ): void;
    create(callback: BodyResponseCallback<Schema$UserList>): void;
    create(
      paramsOrCallback?:
        | Params$Resource$Accounttypes$Accounts$Userlists$Create
        | BodyResponseCallback<Schema$UserList>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$UserList>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$UserList>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$UserList>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Accounttypes$Accounts$Userlists$Create;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Accounttypes$Accounts$Userlists$Create;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://datamanager.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}/userLists').replace(
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
        createAPIRequest<Schema$UserList>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$UserList>(parameters);
      }
    }

    /**
     * Deletes a UserList. Authorization Headers: This method supports the following optional headers to define how the API authorizes access for the request: * `login-account`: (Optional) The resource name of the account where the Google Account of the credentials is a user. If not set, defaults to the account of the request. Format: `accountTypes/{loginAccountType\}/accounts/{loginAccountId\}` * `linked-account`: (Optional) The resource name of the account with an established product link to the `login-account`. Format: `accountTypes/{linkedAccountType\}/accounts/{linkedAccountId\}`
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/datamanager.googleapis.com
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
     * const datamanager = google.datamanager('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/datamanager'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await datamanager.accountTypes.accounts.userLists.delete({
     *     // Required. The name of the user list to delete. Format: accountTypes/{account_type\}/accounts/{account\}/userLists/{user_list\}
     *     name: 'accountTypes/my-accountType/accounts/my-account/userLists/my-userList',
     *     // Optional. If true, the request is validated but not executed.
     *     validateOnly: 'placeholder-value',
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
      params: Params$Resource$Accounttypes$Accounts$Userlists$Delete,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    delete(
      params?: Params$Resource$Accounttypes$Accounts$Userlists$Delete,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Empty>>;
    delete(
      params: Params$Resource$Accounttypes$Accounts$Userlists$Delete,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    delete(
      params: Params$Resource$Accounttypes$Accounts$Userlists$Delete,
      options: MethodOptions | BodyResponseCallback<Schema$Empty>,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    delete(
      params: Params$Resource$Accounttypes$Accounts$Userlists$Delete,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    delete(callback: BodyResponseCallback<Schema$Empty>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Accounttypes$Accounts$Userlists$Delete
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
        {}) as Params$Resource$Accounttypes$Accounts$Userlists$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Accounttypes$Accounts$Userlists$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://datamanager.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
     * Gets a UserList. Authorization Headers: This method supports the following optional headers to define how the API authorizes access for the request: * `login-account`: (Optional) The resource name of the account where the Google Account of the credentials is a user. If not set, defaults to the account of the request. Format: `accountTypes/{loginAccountType\}/accounts/{loginAccountId\}` * `linked-account`: (Optional) The resource name of the account with an established product link to the `login-account`. Format: `accountTypes/{linkedAccountType\}/accounts/{linkedAccountId\}`
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/datamanager.googleapis.com
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
     * const datamanager = google.datamanager('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/datamanager'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await datamanager.accountTypes.accounts.userLists.get({
     *     // Required. The resource name of the UserList to retrieve. Format: accountTypes/{account_type\}/accounts/{account\}/userLists/{user_list\}
     *     name: 'accountTypes/my-accountType/accounts/my-account/userLists/my-userList',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "accessReason": "my_accessReason",
     *   //   "accountAccessStatus": "my_accountAccessStatus",
     *   //   "closingReason": "my_closingReason",
     *   //   "description": "my_description",
     *   //   "displayName": "my_displayName",
     *   //   "id": "my_id",
     *   //   "ingestedUserListInfo": {},
     *   //   "integrationCode": "my_integrationCode",
     *   //   "membershipDuration": "my_membershipDuration",
     *   //   "membershipStatus": "my_membershipStatus",
     *   //   "name": "my_name",
     *   //   "readOnly": false,
     *   //   "sizeInfo": {},
     *   //   "targetNetworkInfo": {}
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
      params: Params$Resource$Accounttypes$Accounts$Userlists$Get,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    get(
      params?: Params$Resource$Accounttypes$Accounts$Userlists$Get,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$UserList>>;
    get(
      params: Params$Resource$Accounttypes$Accounts$Userlists$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Accounttypes$Accounts$Userlists$Get,
      options: MethodOptions | BodyResponseCallback<Schema$UserList>,
      callback: BodyResponseCallback<Schema$UserList>
    ): void;
    get(
      params: Params$Resource$Accounttypes$Accounts$Userlists$Get,
      callback: BodyResponseCallback<Schema$UserList>
    ): void;
    get(callback: BodyResponseCallback<Schema$UserList>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Accounttypes$Accounts$Userlists$Get
        | BodyResponseCallback<Schema$UserList>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$UserList>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$UserList>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$UserList>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Accounttypes$Accounts$Userlists$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Accounttypes$Accounts$Userlists$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://datamanager.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$UserList>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$UserList>(parameters);
      }
    }

    /**
     * Lists UserLists. Authorization Headers: This method supports the following optional headers to define how the API authorizes access for the request: * `login-account`: (Optional) The resource name of the account where the Google Account of the credentials is a user. If not set, defaults to the account of the request. Format: `accountTypes/{loginAccountType\}/accounts/{loginAccountId\}` * `linked-account`: (Optional) The resource name of the account with an established product link to the `login-account`. Format: `accountTypes/{linkedAccountType\}/accounts/{linkedAccountId\}`
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/datamanager.googleapis.com
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
     * const datamanager = google.datamanager('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/datamanager'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await datamanager.accountTypes.accounts.userLists.list({
     *     // Optional. A [filter string](//google.aip.dev/160). All fields need to be on the left hand side of each condition (for example: `display_name = "list 1"`). Supported operations: - `AND` - `=` - `!=` - `\>` - `\>=` - `<` - `<=` - `:` (has) Supported fields: - `id` - `display_name` - `description` - `membership_status` - `integration_code` - `access_reason` - `ingested_user_list_info.upload_key_types`
     *     filter: 'placeholder-value',
     *     // Optional. The maximum number of user lists to return. The service may return fewer than this value. If unspecified, at most 50 user lists will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000.
     *     pageSize: 'placeholder-value',
     *     // Optional. A page token, received from a previous `ListUserLists` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListUserLists` must match the call that provided the page token.
     *     pageToken: 'placeholder-value',
     *     // Required. The parent account which owns this collection of user lists. Format: accountTypes/{account_type\}/accounts/{account\}
     *     parent: 'accountTypes/my-accountType/accounts/my-account',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "nextPageToken": "my_nextPageToken",
     *   //   "userLists": []
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
      params: Params$Resource$Accounttypes$Accounts$Userlists$List,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    list(
      params?: Params$Resource$Accounttypes$Accounts$Userlists$List,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$ListUserListsResponse>>;
    list(
      params: Params$Resource$Accounttypes$Accounts$Userlists$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Accounttypes$Accounts$Userlists$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ListUserListsResponse>,
      callback: BodyResponseCallback<Schema$ListUserListsResponse>
    ): void;
    list(
      params: Params$Resource$Accounttypes$Accounts$Userlists$List,
      callback: BodyResponseCallback<Schema$ListUserListsResponse>
    ): void;
    list(callback: BodyResponseCallback<Schema$ListUserListsResponse>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Accounttypes$Accounts$Userlists$List
        | BodyResponseCallback<Schema$ListUserListsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ListUserListsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ListUserListsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$ListUserListsResponse>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Accounttypes$Accounts$Userlists$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Accounttypes$Accounts$Userlists$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://datamanager.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}/userLists').replace(
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
        createAPIRequest<Schema$ListUserListsResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ListUserListsResponse>(parameters);
      }
    }

    /**
     * Updates a UserList. Authorization Headers: This method supports the following optional headers to define how the API authorizes access for the request: * `login-account`: (Optional) The resource name of the account where the Google Account of the credentials is a user. If not set, defaults to the account of the request. Format: `accountTypes/{loginAccountType\}/accounts/{loginAccountId\}` * `linked-account`: (Optional) The resource name of the account with an established product link to the `login-account`. Format: `accountTypes/{linkedAccountType\}/accounts/{linkedAccountId\}`
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/datamanager.googleapis.com
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
     * const datamanager = google.datamanager('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/datamanager'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await datamanager.accountTypes.accounts.userLists.patch({
     *     // Identifier. The resource name of the user list. Format: accountTypes/{account_type\}/accounts/{account\}/userLists/{user_list\}
     *     name: 'accountTypes/my-accountType/accounts/my-account/userLists/my-userList',
     *     // Optional. The list of fields to update.
     *     updateMask: 'placeholder-value',
     *     // Optional. If true, the request is validated but not executed.
     *     validateOnly: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "accessReason": "my_accessReason",
     *       //   "accountAccessStatus": "my_accountAccessStatus",
     *       //   "closingReason": "my_closingReason",
     *       //   "description": "my_description",
     *       //   "displayName": "my_displayName",
     *       //   "id": "my_id",
     *       //   "ingestedUserListInfo": {},
     *       //   "integrationCode": "my_integrationCode",
     *       //   "membershipDuration": "my_membershipDuration",
     *       //   "membershipStatus": "my_membershipStatus",
     *       //   "name": "my_name",
     *       //   "readOnly": false,
     *       //   "sizeInfo": {},
     *       //   "targetNetworkInfo": {}
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "accessReason": "my_accessReason",
     *   //   "accountAccessStatus": "my_accountAccessStatus",
     *   //   "closingReason": "my_closingReason",
     *   //   "description": "my_description",
     *   //   "displayName": "my_displayName",
     *   //   "id": "my_id",
     *   //   "ingestedUserListInfo": {},
     *   //   "integrationCode": "my_integrationCode",
     *   //   "membershipDuration": "my_membershipDuration",
     *   //   "membershipStatus": "my_membershipStatus",
     *   //   "name": "my_name",
     *   //   "readOnly": false,
     *   //   "sizeInfo": {},
     *   //   "targetNetworkInfo": {}
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
      params: Params$Resource$Accounttypes$Accounts$Userlists$Patch,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    patch(
      params?: Params$Resource$Accounttypes$Accounts$Userlists$Patch,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$UserList>>;
    patch(
      params: Params$Resource$Accounttypes$Accounts$Userlists$Patch,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    patch(
      params: Params$Resource$Accounttypes$Accounts$Userlists$Patch,
      options: MethodOptions | BodyResponseCallback<Schema$UserList>,
      callback: BodyResponseCallback<Schema$UserList>
    ): void;
    patch(
      params: Params$Resource$Accounttypes$Accounts$Userlists$Patch,
      callback: BodyResponseCallback<Schema$UserList>
    ): void;
    patch(callback: BodyResponseCallback<Schema$UserList>): void;
    patch(
      paramsOrCallback?:
        | Params$Resource$Accounttypes$Accounts$Userlists$Patch
        | BodyResponseCallback<Schema$UserList>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$UserList>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$UserList>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$UserList>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Accounttypes$Accounts$Userlists$Patch;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Accounttypes$Accounts$Userlists$Patch;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://datamanager.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$UserList>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$UserList>(parameters);
      }
    }
  }

  export interface Params$Resource$Accounttypes$Accounts$Userlists$Create extends StandardParameters {
    /**
     * Required. The parent account where this user list will be created. Format: accountTypes/{account_type\}/accounts/{account\}
     */
    parent?: string;
    /**
     * Optional. If true, the request is validated but not executed.
     */
    validateOnly?: boolean;

    /**
     * Request body metadata
     */
    requestBody?: Schema$UserList;
  }
  export interface Params$Resource$Accounttypes$Accounts$Userlists$Delete extends StandardParameters {
    /**
     * Required. The name of the user list to delete. Format: accountTypes/{account_type\}/accounts/{account\}/userLists/{user_list\}
     */
    name?: string;
    /**
     * Optional. If true, the request is validated but not executed.
     */
    validateOnly?: boolean;
  }
  export interface Params$Resource$Accounttypes$Accounts$Userlists$Get extends StandardParameters {
    /**
     * Required. The resource name of the UserList to retrieve. Format: accountTypes/{account_type\}/accounts/{account\}/userLists/{user_list\}
     */
    name?: string;
  }
  export interface Params$Resource$Accounttypes$Accounts$Userlists$List extends StandardParameters {
    /**
     * Optional. A [filter string](//google.aip.dev/160). All fields need to be on the left hand side of each condition (for example: `display_name = "list 1"`). Supported operations: - `AND` - `=` - `!=` - `\>` - `\>=` - `<` - `<=` - `:` (has) Supported fields: - `id` - `display_name` - `description` - `membership_status` - `integration_code` - `access_reason` - `ingested_user_list_info.upload_key_types`
     */
    filter?: string;
    /**
     * Optional. The maximum number of user lists to return. The service may return fewer than this value. If unspecified, at most 50 user lists will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000.
     */
    pageSize?: number;
    /**
     * Optional. A page token, received from a previous `ListUserLists` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListUserLists` must match the call that provided the page token.
     */
    pageToken?: string;
    /**
     * Required. The parent account which owns this collection of user lists. Format: accountTypes/{account_type\}/accounts/{account\}
     */
    parent?: string;
  }
  export interface Params$Resource$Accounttypes$Accounts$Userlists$Patch extends StandardParameters {
    /**
     * Identifier. The resource name of the user list. Format: accountTypes/{account_type\}/accounts/{account\}/userLists/{user_list\}
     */
    name?: string;
    /**
     * Optional. The list of fields to update.
     */
    updateMask?: string;
    /**
     * Optional. If true, the request is validated but not executed.
     */
    validateOnly?: boolean;

    /**
     * Request body metadata
     */
    requestBody?: Schema$UserList;
  }

  export class Resource$Audiencemembers {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Uploads a list of AudienceMember resources to the provided Destination.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/datamanager.googleapis.com
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
     * const datamanager = google.datamanager('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/datamanager'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await datamanager.audienceMembers.ingest({
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "audienceMembers": [],
     *       //   "consent": {},
     *       //   "destinations": [],
     *       //   "encoding": "my_encoding",
     *       //   "encryptionInfo": {},
     *       //   "termsOfService": {},
     *       //   "validateOnly": false
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "requestId": "my_requestId"
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
    ingest(
      params: Params$Resource$Audiencemembers$Ingest,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    ingest(
      params?: Params$Resource$Audiencemembers$Ingest,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$IngestAudienceMembersResponse>>;
    ingest(
      params: Params$Resource$Audiencemembers$Ingest,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    ingest(
      params: Params$Resource$Audiencemembers$Ingest,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$IngestAudienceMembersResponse>,
      callback: BodyResponseCallback<Schema$IngestAudienceMembersResponse>
    ): void;
    ingest(
      params: Params$Resource$Audiencemembers$Ingest,
      callback: BodyResponseCallback<Schema$IngestAudienceMembersResponse>
    ): void;
    ingest(
      callback: BodyResponseCallback<Schema$IngestAudienceMembersResponse>
    ): void;
    ingest(
      paramsOrCallback?:
        | Params$Resource$Audiencemembers$Ingest
        | BodyResponseCallback<Schema$IngestAudienceMembersResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$IngestAudienceMembersResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$IngestAudienceMembersResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$IngestAudienceMembersResponse>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Audiencemembers$Ingest;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Audiencemembers$Ingest;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://datamanager.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/audienceMembers:ingest').replace(
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
        createAPIRequest<Schema$IngestAudienceMembersResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$IngestAudienceMembersResponse>(
          parameters
        );
      }
    }

    /**
     * Removes a list of AudienceMember resources from the provided Destination.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/datamanager.googleapis.com
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
     * const datamanager = google.datamanager('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/datamanager'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await datamanager.audienceMembers.remove({
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "audienceMembers": [],
     *       //   "destinations": [],
     *       //   "encoding": "my_encoding",
     *       //   "encryptionInfo": {},
     *       //   "validateOnly": false
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "requestId": "my_requestId"
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
    remove(
      params: Params$Resource$Audiencemembers$Remove,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    remove(
      params?: Params$Resource$Audiencemembers$Remove,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$RemoveAudienceMembersResponse>>;
    remove(
      params: Params$Resource$Audiencemembers$Remove,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    remove(
      params: Params$Resource$Audiencemembers$Remove,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$RemoveAudienceMembersResponse>,
      callback: BodyResponseCallback<Schema$RemoveAudienceMembersResponse>
    ): void;
    remove(
      params: Params$Resource$Audiencemembers$Remove,
      callback: BodyResponseCallback<Schema$RemoveAudienceMembersResponse>
    ): void;
    remove(
      callback: BodyResponseCallback<Schema$RemoveAudienceMembersResponse>
    ): void;
    remove(
      paramsOrCallback?:
        | Params$Resource$Audiencemembers$Remove
        | BodyResponseCallback<Schema$RemoveAudienceMembersResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$RemoveAudienceMembersResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$RemoveAudienceMembersResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$RemoveAudienceMembersResponse>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Audiencemembers$Remove;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Audiencemembers$Remove;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://datamanager.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/audienceMembers:remove').replace(
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
        createAPIRequest<Schema$RemoveAudienceMembersResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$RemoveAudienceMembersResponse>(
          parameters
        );
      }
    }
  }

  export interface Params$Resource$Audiencemembers$Ingest extends StandardParameters {
    /**
     * Request body metadata
     */
    requestBody?: Schema$IngestAudienceMembersRequest;
  }
  export interface Params$Resource$Audiencemembers$Remove extends StandardParameters {
    /**
     * Request body metadata
     */
    requestBody?: Schema$RemoveAudienceMembersRequest;
  }

  export class Resource$Events {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Uploads a list of Event resources from the provided Destination.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/datamanager.googleapis.com
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
     * const datamanager = google.datamanager('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/datamanager'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await datamanager.events.ingest({
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "consent": {},
     *       //   "destinations": [],
     *       //   "encoding": "my_encoding",
     *       //   "encryptionInfo": {},
     *       //   "events": [],
     *       //   "validateOnly": false
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "requestId": "my_requestId"
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
    ingest(
      params: Params$Resource$Events$Ingest,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    ingest(
      params?: Params$Resource$Events$Ingest,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$IngestEventsResponse>>;
    ingest(
      params: Params$Resource$Events$Ingest,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    ingest(
      params: Params$Resource$Events$Ingest,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$IngestEventsResponse>,
      callback: BodyResponseCallback<Schema$IngestEventsResponse>
    ): void;
    ingest(
      params: Params$Resource$Events$Ingest,
      callback: BodyResponseCallback<Schema$IngestEventsResponse>
    ): void;
    ingest(callback: BodyResponseCallback<Schema$IngestEventsResponse>): void;
    ingest(
      paramsOrCallback?:
        | Params$Resource$Events$Ingest
        | BodyResponseCallback<Schema$IngestEventsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$IngestEventsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$IngestEventsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$IngestEventsResponse>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback || {}) as Params$Resource$Events$Ingest;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Events$Ingest;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://datamanager.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/events:ingest').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$IngestEventsResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$IngestEventsResponse>(parameters);
      }
    }
  }

  export interface Params$Resource$Events$Ingest extends StandardParameters {
    /**
     * Request body metadata
     */
    requestBody?: Schema$IngestEventsRequest;
  }

  export class Resource$Requeststatus {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Gets the status of a request given request id.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/datamanager.googleapis.com
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
     * const datamanager = google.datamanager('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/datamanager'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await datamanager.requestStatus.retrieve({
     *     // Required. Required. The request ID of the Data Manager API request.
     *     requestId: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "requestStatusPerDestination": []
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
    retrieve(
      params: Params$Resource$Requeststatus$Retrieve,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    retrieve(
      params?: Params$Resource$Requeststatus$Retrieve,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$RetrieveRequestStatusResponse>>;
    retrieve(
      params: Params$Resource$Requeststatus$Retrieve,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    retrieve(
      params: Params$Resource$Requeststatus$Retrieve,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$RetrieveRequestStatusResponse>,
      callback: BodyResponseCallback<Schema$RetrieveRequestStatusResponse>
    ): void;
    retrieve(
      params: Params$Resource$Requeststatus$Retrieve,
      callback: BodyResponseCallback<Schema$RetrieveRequestStatusResponse>
    ): void;
    retrieve(
      callback: BodyResponseCallback<Schema$RetrieveRequestStatusResponse>
    ): void;
    retrieve(
      paramsOrCallback?:
        | Params$Resource$Requeststatus$Retrieve
        | BodyResponseCallback<Schema$RetrieveRequestStatusResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$RetrieveRequestStatusResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$RetrieveRequestStatusResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$RetrieveRequestStatusResponse>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Requeststatus$Retrieve;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Requeststatus$Retrieve;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://datamanager.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/requestStatus:retrieve').replace(
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
        createAPIRequest<Schema$RetrieveRequestStatusResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$RetrieveRequestStatusResponse>(
          parameters
        );
      }
    }
  }

  export interface Params$Resource$Requeststatus$Retrieve extends StandardParameters {
    /**
     * Required. Required. The request ID of the Data Manager API request.
     */
    requestId?: string;
  }
}
