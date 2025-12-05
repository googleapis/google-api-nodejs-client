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
    audienceMembers: Resource$Audiencemembers;
    events: Resource$Events;
    requestStatus: Resource$Requeststatus;

    constructor(options: GlobalOptions, google?: GoogleConfigurable) {
      this.context = {
        _options: options || {},
        google,
      };

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
     * [Publisher Advertiser Identity Reconciliation (PAIR) IDs](//support.google.com/admanager/answer/15067908).
     */
    pairData?: Schema$PairData;
    /**
     * User-provided data that identifies the user.
     */
    userData?: Schema$UserData;
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
     * The status of the user data ingestion to the destination.
     */
    userDataIngestionStatus?: Schema$IngestUserDataStatus;
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
   * Mobile IDs for the audience. At least one mobile ID is required.
   */
  export interface Schema$MobileData {
    /**
     * Required. The list of mobile device IDs (advertising ID/IDFA). At most 10 `mobileIds` can be provided in a single AudienceMember.
     */
    mobileIds?: string[] | null;
  }
  /**
   * [PAIR](//support.google.com/admanager/answer/15067908) IDs for the audience. At least one PAIR ID is required.
   */
  export interface Schema$PairData {
    /**
     * Required. Cleanroom-provided PII data, hashed with SHA256, and encrypted with an EC commutative cipher using publisher key for the [PAIR]((//support.google.com/admanager/answer/15067908)) user list. At most 10 `pairIds` can be provided in a single AudienceMember.
     */
    pairIds?: string[] | null;
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
     * The status of the user data removal from the destination.
     */
    userDataRemovalStatus?: Schema$RemoveUserDataStatus;
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
   * Response from the RetrieveRequestStatusRequest.
   */
  export interface Schema$RetrieveRequestStatusResponse {
    /**
     * A list of request statuses per destination. The order of the statuses matches the order of the destinations in the original request.
     */
    requestStatusPerDestination?: Schema$RequestStatusPerDestination[];
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
