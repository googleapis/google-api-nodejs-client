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
    adEvents: Resource$Adevents;
    audienceMembers: Resource$Audiencemembers;
    events: Resource$Events;
    requestStatus: Resource$Requeststatus;

    constructor(options: GlobalOptions, google?: GoogleConfigurable) {
      this.context = {
        _options: options || {},
        google,
      };

      this.accountTypes = new Resource$Accounttypes(this.context);
      this.adEvents = new Resource$Adevents(this.context);
      this.audienceMembers = new Resource$Audiencemembers(this.context);
      this.events = new Resource$Events(this.context);
      this.requestStatus = new Resource$Requeststatus(this.context);
    }
  }

  export interface Schema$AddressInfo {
    addressLine?: string | null;
    administrativeArea?: string | null;
    city?: string | null;
    familyName?: string | null;
    givenName?: string | null;
    postalCode?: string | null;
    regionCode?: string | null;
  }
  export interface Schema$AdEvent {
    adFormat?: string | null;
    adFormatString?: string | null;
    adGroupId?: string | null;
    adHeight?: number | null;
    adId?: string | null;
    adPlacement?: string | null;
    adPlacementString?: string | null;
    adType?: string | null;
    adTypeString?: string | null;
    advertiserId?: string | null;
    adWidth?: number | null;
    attributionHint?: string | null;
    campaignId?: string | null;
    campaignName?: string | null;
    deviceInfo?: Schema$DeviceInfo;
    eventId?: string | null;
    eventSubtype?: string | null;
    eventSubtypeString?: string | null;
    eventType?: string | null;
    ipAddress?: string | null;
    measurementAllowed?: boolean | null;
    medium?: string | null;
    mobileDeviceId?: string | null;
    platform?: string | null;
    platformString?: string | null;
    platformType?: string | null;
    platformTypeString?: string | null;
    regionCode?: string | null;
    source?: string | null;
    targetingType?: string | null;
    targetingTypeString?: string | null;
    timestamp?: string | null;
    userData?: Schema$UserData;
    viewabilityInfo?: Schema$ViewabilityInfo;
  }
  export interface Schema$AdIdentifiers {
    dclid?: string | null;
    encryptedUserIds?: Schema$EncryptedUserId[];
    gbraid?: string | null;
    gclid?: string | null;
    impressionId?: string | null;
    landingPageDeviceInfo?: Schema$DeviceInfo;
    matchId?: string | null;
    mobileDeviceId?: string | null;
    ppid?: string | null;
    sessionAttributes?: string | null;
    visitorPpid?: string | null;
    wbraid?: string | null;
  }
  export interface Schema$AudienceMember {
    compositeData?: Schema$CompositeData;
    consent?: Schema$Consent;
    destinationReferences?: string[] | null;
    googleUserIdData?: Schema$GoogleUserIdData;
    mobileData?: Schema$MobileData;
    pairData?: Schema$PairData;
    partnerProvidedIdData?: Schema$PartnerProvidedIdData;
    ppidData?: Schema$PpidData;
    userData?: Schema$UserData;
    userIdData?: Schema$UserIdData;
  }
  export interface Schema$AwsWrappedKeyInfo {
    encryptedDek?: string | null;
    kekUri?: string | null;
    keyType?: string | null;
    roleArn?: string | null;
  }
  export interface Schema$Baseline {
    baselineLocation?: Schema$Location;
    locationAutoDetectionEnabled?: boolean | null;
  }
  export interface Schema$CartData {
    couponCodes?: string[] | null;
    items?: Schema$Item[];
    merchantFeedLabel?: string | null;
    merchantFeedLanguageCode?: string | null;
    merchantId?: string | null;
    transactionDiscount?: number | null;
  }
  export interface Schema$CompositeData {
    ipData?: Schema$IpData[];
    userData?: Schema$UserData;
  }
  export interface Schema$Consent {
    adPersonalization?: string | null;
    adUserData?: string | null;
  }
  export interface Schema$ContactIdInfo {
    dataSourceType?: string | null;
    matchRatePercentage?: number | null;
  }
  export interface Schema$CoordinatorKeyInfo {
    keyId?: string | null;
  }
  export interface Schema$CustomVariable {
    destinationReferences?: string[] | null;
    value?: string | null;
    variable?: string | null;
  }
  export interface Schema$DataTypeCount {
    count?: string | null;
    type?: string | null;
  }
  export interface Schema$Destination {
    linkedAccount?: Schema$ProductAccount;
    loginAccount?: Schema$ProductAccount;
    operatingAccount?: Schema$ProductAccount;
    productDestinationId?: string | null;
    reference?: string | null;
  }
  export interface Schema$DeviceInfo {
    brand?: string | null;
    browser?: string | null;
    browserVersion?: string | null;
    category?: string | null;
    ipAddress?: string | null;
    languageCode?: string | null;
    model?: string | null;
    operatingSystem?: string | null;
    operatingSystemVersion?: string | null;
    screenHeight?: number | null;
    screenWidth?: number | null;
    userAgent?: string | null;
  }
  export interface Schema$Empty {}
  export interface Schema$EncryptedUserId {
    encryptedId?: string | null;
    entityId?: string | null;
    entityType?: string | null;
    source?: string | null;
  }
  export interface Schema$EncryptionInfo {
    awsWrappedKeyInfo?: Schema$AwsWrappedKeyInfo;
    coordinatorKeyInfo?: Schema$CoordinatorKeyInfo;
    gcpWrappedKeyInfo?: Schema$GcpWrappedKeyInfo;
  }
  export interface Schema$ErrorCount {
    reason?: string | null;
    recordCount?: string | null;
  }
  export interface Schema$ErrorInfo {
    errorCounts?: Schema$ErrorCount[];
  }
  export interface Schema$Event {
    additionalEventParameters?: Schema$EventParameter[];
    adIdentifiers?: Schema$AdIdentifiers;
    appInstanceId?: string | null;
    cartData?: Schema$CartData;
    clientId?: string | null;
    consent?: Schema$Consent;
    conversionCount?: number | null;
    conversionValue?: number | null;
    currency?: string | null;
    customVariables?: Schema$CustomVariable[];
    destinationReferences?: string[] | null;
    eventDeviceInfo?: Schema$DeviceInfo;
    eventLocation?: Schema$EventLocation;
    eventName?: string | null;
    eventSource?: string | null;
    eventTimestamp?: string | null;
    experimentalFields?: Schema$ExperimentalField[];
    lastUpdatedTimestamp?: string | null;
    thirdPartyUserData?: Schema$UserData;
    transactionId?: string | null;
    userData?: Schema$UserData;
    userId?: string | null;
    userProperties?: Schema$UserProperties;
  }
  export interface Schema$EventLocation {
    city?: string | null;
    continentCode?: string | null;
    regionCode?: string | null;
    storeId?: string | null;
    subcontinentCode?: string | null;
    subdivisionCode?: string | null;
  }
  export interface Schema$EventParameter {
    parameterName?: string | null;
    value?: string | null;
  }
  export interface Schema$ExperimentalField {
    field?: string | null;
    value?: string | null;
  }
  export interface Schema$FieldWarning {
    description?: string | null;
    field?: string | null;
    reason?: string | null;
  }
  export interface Schema$GcpWrappedKeyInfo {
    encryptedDek?: string | null;
    kekUri?: string | null;
    keyType?: string | null;
    wipProvider?: string | null;
  }
  export interface Schema$GoogleUserIdData {
    googleUserIds?: string[] | null;
  }
  export interface Schema$IngestAdEventsRequest {
    adEvents?: Schema$AdEvent[];
    encryptionInfo?: Schema$EncryptionInfo;
    validateOnly?: boolean | null;
  }
  export interface Schema$IngestAdEventsResponse {}
  export interface Schema$IngestAudienceMembersRequest {
    audienceMembers?: Schema$AudienceMember[];
    consent?: Schema$Consent;
    destinations?: Schema$Destination[];
    encoding?: string | null;
    encryptionInfo?: Schema$EncryptionInfo;
    termsOfService?: Schema$TermsOfService;
    validateOnly?: boolean | null;
  }
  export interface Schema$IngestAudienceMembersResponse {
    fieldWarnings?: Schema$FieldWarning[];
    requestId?: string | null;
  }
  export interface Schema$IngestAudienceMembersStatus {
    compositeDataIngestionStatus?: Schema$IngestCompositeDataStatus;
    googleUserIdDataIngestionStatus?: Schema$IngestGoogleUserIdDataStatus;
    mobileDataIngestionStatus?: Schema$IngestMobileDataStatus;
    pairDataIngestionStatus?: Schema$IngestPairDataStatus;
    partnerProvidedIdDataIngestionStatus?: Schema$IngestPartnerProvidedIdDataStatus;
    ppidDataIngestionStatus?: Schema$IngestPpidDataStatus;
    userDataIngestionStatus?: Schema$IngestUserDataStatus;
    userIdDataIngestionStatus?: Schema$IngestUserIdDataStatus;
  }
  export interface Schema$IngestCompositeDataStatus {
    dataTypeCounts?: Schema$DataTypeCount[];
    recordCount?: string | null;
    uploadMatchRateRange?: string | null;
  }
  export interface Schema$IngestedUserListInfo {
    contactIdInfo?: Schema$ContactIdInfo;
    mobileIdInfo?: Schema$MobileIdInfo;
    pairIdInfo?: Schema$PairIdInfo;
    partnerAudienceInfo?: Schema$PartnerAudienceInfo;
    pseudonymousIdInfo?: Schema$PseudonymousIdInfo;
    uploadKeyTypes?: string[] | null;
    userIdInfo?: Schema$UserIdInfo;
  }
  export interface Schema$IngestEventsRequest {
    consent?: Schema$Consent;
    destinations?: Schema$Destination[];
    encoding?: string | null;
    encryptionInfo?: Schema$EncryptionInfo;
    events?: Schema$Event[];
    validateOnly?: boolean | null;
  }
  export interface Schema$IngestEventsResponse {
    fieldWarnings?: Schema$FieldWarning[];
    requestId?: string | null;
  }
  export interface Schema$IngestEventsStatus {
    recordCount?: string | null;
  }
  export interface Schema$IngestGoogleUserIdDataStatus {
    googleUserIdCount?: string | null;
    recordCount?: string | null;
  }
  export interface Schema$IngestMobileDataStatus {
    mobileIdCount?: string | null;
    recordCount?: string | null;
  }
  export interface Schema$IngestPairDataStatus {
    pairIdCount?: string | null;
    recordCount?: string | null;
  }
  export interface Schema$IngestPartnerProvidedIdDataStatus {
    partnerProvidedIdCount?: string | null;
    recordCount?: string | null;
  }
  export interface Schema$IngestPpidDataStatus {
    ppidCount?: string | null;
    recordCount?: string | null;
  }
  export interface Schema$IngestUserDataStatus {
    recordCount?: string | null;
    uploadMatchRateRange?: string | null;
    userIdentifierCount?: string | null;
  }
  export interface Schema$IngestUserIdDataStatus {
    recordCount?: string | null;
    userIdCount?: string | null;
  }
  export interface Schema$IpData {
    ipAddress?: string | null;
    observeEndTime?: string | null;
    observeStartTime?: string | null;
  }
  export interface Schema$Item {
    additionalItemParameters?: Schema$ItemParameter[];
    conversionValue?: number | null;
    customVariables?: Schema$ItemCustomVariable[];
    itemId?: string | null;
    merchantFeedLabel?: string | null;
    merchantFeedLanguageCode?: string | null;
    merchantId?: string | null;
    merchantProductId?: string | null;
    quantity?: string | null;
    unitPrice?: number | null;
  }
  export interface Schema$ItemCustomVariable {
    destinationReferences?: string[] | null;
    value?: string | null;
    variable?: string | null;
  }
  export interface Schema$ItemParameter {
    parameterName?: string | null;
    value?: string | null;
  }
  export interface Schema$ListUserListDirectLicensesResponse {
    nextPageToken?: string | null;
    userListDirectLicenses?: Schema$UserListDirectLicense[];
  }
  export interface Schema$ListUserListGlobalLicenseCustomerInfosResponse {
    nextPageToken?: string | null;
    userListGlobalLicenseCustomerInfos?: Schema$UserListGlobalLicenseCustomerInfo[];
  }
  export interface Schema$ListUserListGlobalLicensesResponse {
    nextPageToken?: string | null;
    userListGlobalLicenses?: Schema$UserListGlobalLicense[];
  }
  export interface Schema$ListUserListsResponse {
    nextPageToken?: string | null;
    userLists?: Schema$UserList[];
  }
  export interface Schema$Location {
    regionCodes?: string[] | null;
  }
  export interface Schema$MarketingDataInsight {
    attributes?: Schema$MarketingDataInsightsAttribute[];
    dimension?: string | null;
  }
  export interface Schema$MarketingDataInsightsAttribute {
    ageRange?: string | null;
    gender?: string | null;
    lift?: number | null;
    userInterestId?: string | null;
  }
  export interface Schema$MobileData {
    mobileIds?: string[] | null;
  }
  export interface Schema$MobileIdInfo {
    appId?: string | null;
    dataSourceType?: string | null;
    keySpace?: string | null;
  }
  export interface Schema$PairData {
    pairIds?: string[] | null;
  }
  export interface Schema$PairIdInfo {
    advertiserIdentifierCount?: string | null;
    cleanRoomIdentifier?: string | null;
    matchRatePercentage?: number | null;
    publisherId?: string | null;
    publisherName?: string | null;
  }
  export interface Schema$PartnerAudienceInfo {
    commercePartner?: string | null;
    partnerAudienceSource?: string | null;
  }
  export interface Schema$PartnerCustomerAccount {
    accountId?: string | null;
    accountName?: string | null;
    accountType?: string | null;
  }
  export interface Schema$PartnerLink {
    featureSet?: string | null;
    name?: string | null;
    owningAccount?: Schema$ProductAccount;
    partnerAccount?: Schema$ProductAccount;
    partnerCustomerAccount?: Schema$PartnerCustomerAccount;
    partnerLinkId?: string | null;
    partnerLinkMetadata?: Schema$PartnerLinkMetadata;
  }
  export interface Schema$PartnerLinkMetadata {
    implicitAccounts?: Schema$PartnerCustomerAccount[];
  }
  export interface Schema$PartnerProvidedIdData {
    partnerProvidedIds?: string[] | null;
  }
  export interface Schema$PpidData {
    ppids?: string[] | null;
  }
  export interface Schema$ProductAccount {
    accountId?: string | null;
    accountType?: string | null;
    product?: string | null;
  }
  export interface Schema$PseudonymousIdInfo {
    billableRecordCount?: string | null;
    syncStatus?: string | null;
  }
  export interface Schema$RemoveAllAudienceMembersRequest {
    destinations?: Schema$Destination[];
    removeAsOfTime?: string | null;
    validateOnly?: boolean | null;
  }
  export interface Schema$RemoveAllAudienceMembersResponse {
    requestId?: string | null;
  }
  export interface Schema$RemoveAllAudienceMembersStatus {}
  export interface Schema$RemoveAudienceMembersRequest {
    audienceMembers?: Schema$AudienceMember[];
    destinations?: Schema$Destination[];
    encoding?: string | null;
    encryptionInfo?: Schema$EncryptionInfo;
    validateOnly?: boolean | null;
  }
  export interface Schema$RemoveAudienceMembersResponse {
    requestId?: string | null;
  }
  export interface Schema$RemoveAudienceMembersStatus {
    compositeDataRemovalStatus?: Schema$RemoveCompositeDataStatus;
    googleUserIdDataRemovalStatus?: Schema$RemoveGoogleUserIdDataStatus;
    mobileDataRemovalStatus?: Schema$RemoveMobileDataStatus;
    pairDataRemovalStatus?: Schema$RemovePairDataStatus;
    partnerProvidedIdDataRemovalStatus?: Schema$RemovePartnerProvidedIdDataStatus;
    ppidDataRemovalStatus?: Schema$RemovePpidDataStatus;
    userDataRemovalStatus?: Schema$RemoveUserDataStatus;
    userIdDataRemovalStatus?: Schema$RemoveUserIdDataStatus;
  }
  export interface Schema$RemoveCompositeDataStatus {
    dataTypeCounts?: Schema$DataTypeCount[];
    recordCount?: string | null;
  }
  export interface Schema$RemoveGoogleUserIdDataStatus {
    googleUserIdCount?: string | null;
    recordCount?: string | null;
  }
  export interface Schema$RemoveMobileDataStatus {
    mobileIdCount?: string | null;
    recordCount?: string | null;
  }
  export interface Schema$RemovePairDataStatus {
    pairIdCount?: string | null;
    recordCount?: string | null;
  }
  export interface Schema$RemovePartnerProvidedIdDataStatus {
    partnerProvidedIdCount?: string | null;
    recordCount?: string | null;
  }
  export interface Schema$RemovePpidDataStatus {
    ppidCount?: string | null;
    recordCount?: string | null;
  }
  export interface Schema$RemoveUserDataStatus {
    recordCount?: string | null;
    userIdentifierCount?: string | null;
  }
  export interface Schema$RemoveUserIdDataStatus {
    recordCount?: string | null;
    userIdCount?: string | null;
  }
  export interface Schema$RequestStatusPerDestination {
    audienceMembersIngestionStatus?: Schema$IngestAudienceMembersStatus;
    audienceMembersRemovalStatus?: Schema$RemoveAudienceMembersStatus;
    destination?: Schema$Destination;
    errorInfo?: Schema$ErrorInfo;
    eventsIngestionStatus?: Schema$IngestEventsStatus;
    removeAllAudienceMembersStatus?: Schema$RemoveAllAudienceMembersStatus;
    requestStatus?: string | null;
    warningInfo?: Schema$WarningInfo;
  }
  export interface Schema$RetrieveInsightsRequest {
    baseline?: Schema$Baseline;
    userListId?: string | null;
  }
  export interface Schema$RetrieveInsightsResponse {
    marketingDataInsights?: Schema$MarketingDataInsight[];
  }
  export interface Schema$RetrieveRequestStatusResponse {
    requestStatusPerDestination?: Schema$RequestStatusPerDestination[];
  }
  export interface Schema$SearchPartnerLinksResponse {
    nextPageToken?: string | null;
    partnerLinks?: Schema$PartnerLink[];
  }
  export interface Schema$SizeInfo {
    displayNetworkMembersCount?: string | null;
    gmailMembersCount?: string | null;
    searchNetworkMembersCount?: string | null;
    youtubeMembersCount?: string | null;
  }
  export interface Schema$Status {
    code?: number | null;
    details?: Array<{[key: string]: any}> | null;
    message?: string | null;
  }
  export interface Schema$TargetNetworkInfo {
    eligibleForDisplay?: boolean | null;
    eligibleForSearch?: boolean | null;
  }
  export interface Schema$TermsOfService {
    customerMatchTermsOfServiceStatus?: string | null;
  }
  export interface Schema$UserData {
    userIdentifiers?: Schema$UserIdentifier[];
  }
  export interface Schema$UserIdData {
    userId?: string | null;
  }
  export interface Schema$UserIdentifier {
    address?: Schema$AddressInfo;
    emailAddress?: string | null;
    phoneNumber?: string | null;
  }
  export interface Schema$UserIdInfo {
    dataSourceType?: string | null;
  }
  export interface Schema$UserList {
    accessReason?: string | null;
    accountAccessStatus?: string | null;
    closingReason?: string | null;
    description?: string | null;
    displayName?: string | null;
    id?: string | null;
    ingestedUserListInfo?: Schema$IngestedUserListInfo;
    integrationCode?: string | null;
    membershipDuration?: string | null;
    membershipStatus?: string | null;
    name?: string | null;
    readOnly?: boolean | null;
    sizeInfo?: Schema$SizeInfo;
    targetNetworkInfo?: Schema$TargetNetworkInfo;
  }
  export interface Schema$UserListDirectLicense {
    clientAccountDisplayName?: string | null;
    clientAccountId?: string | null;
    clientAccountType?: string | null;
    historicalPricings?: Schema$UserListLicensePricing[];
    metrics?: Schema$UserListLicenseMetrics;
    name?: string | null;
    pricing?: Schema$UserListLicensePricing;
    status?: string | null;
    userListDisplayName?: string | null;
    userListId?: string | null;
  }
  export interface Schema$UserListGlobalLicense {
    historicalPricings?: Schema$UserListLicensePricing[];
    licenseType?: string | null;
    metrics?: Schema$UserListLicenseMetrics;
    name?: string | null;
    pricing?: Schema$UserListLicensePricing;
    status?: string | null;
    userListDisplayName?: string | null;
    userListId?: string | null;
  }
  export interface Schema$UserListGlobalLicenseCustomerInfo {
    clientAccountDisplayName?: string | null;
    clientAccountId?: string | null;
    clientAccountType?: string | null;
    historicalPricings?: Schema$UserListLicensePricing[];
    licenseType?: string | null;
    metrics?: Schema$UserListLicenseMetrics;
    name?: string | null;
    pricing?: Schema$UserListLicensePricing;
    status?: string | null;
    userListDisplayName?: string | null;
    userListId?: string | null;
  }
  export interface Schema$UserListLicenseMetrics {
    clickCount?: string | null;
    endDate?: string | null;
    impressionCount?: string | null;
    revenueUsdMicros?: string | null;
    startDate?: string | null;
  }
  export interface Schema$UserListLicensePricing {
    buyerApprovalState?: string | null;
    costMicros?: string | null;
    costType?: string | null;
    currencyCode?: string | null;
    endTime?: string | null;
    maxCostMicros?: string | null;
    pricingActive?: boolean | null;
    pricingId?: string | null;
    startTime?: string | null;
  }
  export interface Schema$UserProperties {
    additionalUserProperties?: Schema$UserProperty[];
    customerType?: string | null;
    customerValueBucket?: string | null;
  }
  export interface Schema$UserProperty {
    propertyName?: string | null;
    value?: string | null;
  }
  export interface Schema$ViewabilityInfo {
    mediaDuration?: string | null;
    mediaQuartile?: string | null;
    mediaSkippable?: boolean | null;
    mediaVolumePercent?: number | null;
    playbackDuration?: string | null;
    viewableDuration?: string | null;
    viewablePercent?: number | null;
    viewType?: string | null;
  }
  export interface Schema$WarningCount {
    reason?: string | null;
    recordCount?: string | null;
  }
  export interface Schema$WarningInfo {
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
        MethodOptions | BodyResponseCallback<Schema$RetrieveInsightsResponse>,
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
     *
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
     *     scopes: [
     *       'https://www.googleapis.com/auth/datamanager',
     *       'https://www.googleapis.com/auth/datamanager.partnerlink',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await datamanager.accountTypes.accounts.partnerLinks.create({
     *     parent: 'accountTypes/my-accountType/accounts/my-account',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "featureSet": "my_featureSet",
     *       //   "name": "my_name",
     *       //   "owningAccount": {},
     *       //   "partnerAccount": {},
     *       //   "partnerCustomerAccount": {},
     *       //   "partnerLinkId": "my_partnerLinkId",
     *       //   "partnerLinkMetadata": {}
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "featureSet": "my_featureSet",
     *   //   "name": "my_name",
     *   //   "owningAccount": {},
     *   //   "partnerAccount": {},
     *   //   "partnerCustomerAccount": {},
     *   //   "partnerLinkId": "my_partnerLinkId",
     *   //   "partnerLinkMetadata": {}
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
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
     *     scopes: [
     *       'https://www.googleapis.com/auth/datamanager',
     *       'https://www.googleapis.com/auth/datamanager.partnerlink',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await datamanager.accountTypes.accounts.partnerLinks.delete({
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
        BodyResponseCallback<Schema$Empty> | BodyResponseCallback<Readable>
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
     *     scopes: [
     *       'https://www.googleapis.com/auth/datamanager',
     *       'https://www.googleapis.com/auth/datamanager.partnerlink',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await datamanager.accountTypes.accounts.partnerLinks.search({
     *     filter: 'placeholder-value',
     *
     *     pageSize: 'placeholder-value',
     *
     *     pageToken: 'placeholder-value',
     *
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
        MethodOptions | BodyResponseCallback<Schema$SearchPartnerLinksResponse>,
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
     *
     */
    parent?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$PartnerLink;
  }
  export interface Params$Resource$Accounttypes$Accounts$Partnerlinks$Delete extends StandardParameters {
    /**
     *
     */
    name?: string;
  }
  export interface Params$Resource$Accounttypes$Accounts$Partnerlinks$Search extends StandardParameters {
    /**
     *
     */
    filter?: string;
    /**
     *
     */
    pageSize?: number;
    /**
     *
     */
    pageToken?: string;
    /**
     *
     */
    parent?: string;
  }

  export class Resource$Accounttypes$Accounts$Userlistdirectlicenses {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
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
        MethodOptions | BodyResponseCallback<Schema$UserListDirectLicense>,
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
        MethodOptions | BodyResponseCallback<Schema$UserListDirectLicense>,
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
     *       filter: 'placeholder-value',
     *
     *       pageSize: 'placeholder-value',
     *
     *       pageToken: 'placeholder-value',
     *
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
     *       name: 'accountTypes/my-accountType/accounts/my-account/userListDirectLicenses/my-userListDirectLicense',
     *
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
        MethodOptions | BodyResponseCallback<Schema$UserListDirectLicense>,
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
     *
     */
    parent?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$UserListDirectLicense;
  }
  export interface Params$Resource$Accounttypes$Accounts$Userlistdirectlicenses$Get extends StandardParameters {
    /**
     *
     */
    name?: string;
  }
  export interface Params$Resource$Accounttypes$Accounts$Userlistdirectlicenses$List extends StandardParameters {
    /**
     *
     */
    filter?: string;
    /**
     *
     */
    pageSize?: number;
    /**
     *
     */
    pageToken?: string;
    /**
     *
     */
    parent?: string;
  }
  export interface Params$Resource$Accounttypes$Accounts$Userlistdirectlicenses$Patch extends StandardParameters {
    /**
     *
     */
    name?: string;
    /**
     *
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
        MethodOptions | BodyResponseCallback<Schema$UserListGlobalLicense>,
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
        MethodOptions | BodyResponseCallback<Schema$UserListGlobalLicense>,
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
     *       filter: 'placeholder-value',
     *
     *       pageSize: 'placeholder-value',
     *
     *       pageToken: 'placeholder-value',
     *
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
     *       name: 'accountTypes/my-accountType/accounts/my-account/userListGlobalLicenses/my-userListGlobalLicense',
     *
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
        MethodOptions | BodyResponseCallback<Schema$UserListGlobalLicense>,
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
     *
     */
    parent?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$UserListGlobalLicense;
  }
  export interface Params$Resource$Accounttypes$Accounts$Userlistgloballicenses$Get extends StandardParameters {
    /**
     *
     */
    name?: string;
  }
  export interface Params$Resource$Accounttypes$Accounts$Userlistgloballicenses$List extends StandardParameters {
    /**
     *
     */
    filter?: string;
    /**
     *
     */
    pageSize?: number;
    /**
     *
     */
    pageToken?: string;
    /**
     *
     */
    parent?: string;
  }
  export interface Params$Resource$Accounttypes$Accounts$Userlistgloballicenses$Patch extends StandardParameters {
    /**
     *
     */
    name?: string;
    /**
     *
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
     *         filter: 'placeholder-value',
     *
     *         pageSize: 'placeholder-value',
     *
     *         pageToken: 'placeholder-value',
     *
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
     *
     */
    filter?: string;
    /**
     *
     */
    pageSize?: number;
    /**
     *
     */
    pageToken?: string;
    /**
     *
     */
    parent?: string;
  }

  export class Resource$Accounttypes$Accounts$Userlists {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
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
     *     parent: 'accountTypes/my-accountType/accounts/my-account',
     *
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
        BodyResponseCallback<Schema$UserList> | BodyResponseCallback<Readable>
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
     *     name: 'accountTypes/my-accountType/accounts/my-account/userLists/my-userList',
     *
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
        BodyResponseCallback<Schema$Empty> | BodyResponseCallback<Readable>
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
        BodyResponseCallback<Schema$UserList> | BodyResponseCallback<Readable>
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
     *     filter: 'placeholder-value',
     *
     *     pageSize: 'placeholder-value',
     *
     *     pageToken: 'placeholder-value',
     *
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
        MethodOptions | BodyResponseCallback<Schema$ListUserListsResponse>,
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
     *     name: 'accountTypes/my-accountType/accounts/my-account/userLists/my-userList',
     *
     *     updateMask: 'placeholder-value',
     *
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
        BodyResponseCallback<Schema$UserList> | BodyResponseCallback<Readable>
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
     *
     */
    parent?: string;
    /**
     *
     */
    validateOnly?: boolean;

    /**
     * Request body metadata
     */
    requestBody?: Schema$UserList;
  }
  export interface Params$Resource$Accounttypes$Accounts$Userlists$Delete extends StandardParameters {
    /**
     *
     */
    name?: string;
    /**
     *
     */
    validateOnly?: boolean;
  }
  export interface Params$Resource$Accounttypes$Accounts$Userlists$Get extends StandardParameters {
    /**
     *
     */
    name?: string;
  }
  export interface Params$Resource$Accounttypes$Accounts$Userlists$List extends StandardParameters {
    /**
     *
     */
    filter?: string;
    /**
     *
     */
    pageSize?: number;
    /**
     *
     */
    pageToken?: string;
    /**
     *
     */
    parent?: string;
  }
  export interface Params$Resource$Accounttypes$Accounts$Userlists$Patch extends StandardParameters {
    /**
     *
     */
    name?: string;
    /**
     *
     */
    updateMask?: string;
    /**
     *
     */
    validateOnly?: boolean;

    /**
     * Request body metadata
     */
    requestBody?: Schema$UserList;
  }

  export class Resource$Adevents {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
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
     *   const res = await datamanager.adEvents.ingest({
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "adEvents": [],
     *       //   "encryptionInfo": {},
     *       //   "validateOnly": false
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
    ingest(
      params: Params$Resource$Adevents$Ingest,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    ingest(
      params?: Params$Resource$Adevents$Ingest,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$IngestAdEventsResponse>>;
    ingest(
      params: Params$Resource$Adevents$Ingest,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    ingest(
      params: Params$Resource$Adevents$Ingest,
      options:
        MethodOptions | BodyResponseCallback<Schema$IngestAdEventsResponse>,
      callback: BodyResponseCallback<Schema$IngestAdEventsResponse>
    ): void;
    ingest(
      params: Params$Resource$Adevents$Ingest,
      callback: BodyResponseCallback<Schema$IngestAdEventsResponse>
    ): void;
    ingest(callback: BodyResponseCallback<Schema$IngestAdEventsResponse>): void;
    ingest(
      paramsOrCallback?:
        | Params$Resource$Adevents$Ingest
        | BodyResponseCallback<Schema$IngestAdEventsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$IngestAdEventsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$IngestAdEventsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$IngestAdEventsResponse>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback || {}) as Params$Resource$Adevents$Ingest;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Adevents$Ingest;
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
            url: (rootUrl + '/v1/adEvents:ingest').replace(
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
        createAPIRequest<Schema$IngestAdEventsResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$IngestAdEventsResponse>(parameters);
      }
    }
  }

  export interface Params$Resource$Adevents$Ingest extends StandardParameters {
    /**
     * Request body metadata
     */
    requestBody?: Schema$IngestAdEventsRequest;
  }

  export class Resource$Audiencemembers {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
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
     *   //   "fieldWarnings": [],
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

    /**
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
     *   const res = await datamanager.audienceMembers.removeAll({
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "destinations": [],
     *       //   "removeAsOfTime": "my_removeAsOfTime",
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
    removeAll(
      params: Params$Resource$Audiencemembers$Removeall,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    removeAll(
      params?: Params$Resource$Audiencemembers$Removeall,
      options?: MethodOptions
    ): Promise<
      GaxiosResponseWithHTTP2<Schema$RemoveAllAudienceMembersResponse>
    >;
    removeAll(
      params: Params$Resource$Audiencemembers$Removeall,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    removeAll(
      params: Params$Resource$Audiencemembers$Removeall,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$RemoveAllAudienceMembersResponse>,
      callback: BodyResponseCallback<Schema$RemoveAllAudienceMembersResponse>
    ): void;
    removeAll(
      params: Params$Resource$Audiencemembers$Removeall,
      callback: BodyResponseCallback<Schema$RemoveAllAudienceMembersResponse>
    ): void;
    removeAll(
      callback: BodyResponseCallback<Schema$RemoveAllAudienceMembersResponse>
    ): void;
    removeAll(
      paramsOrCallback?:
        | Params$Resource$Audiencemembers$Removeall
        | BodyResponseCallback<Schema$RemoveAllAudienceMembersResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$RemoveAllAudienceMembersResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$RemoveAllAudienceMembersResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<
          GaxiosResponseWithHTTP2<Schema$RemoveAllAudienceMembersResponse>
        >
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Audiencemembers$Removeall;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Audiencemembers$Removeall;
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
            url: (rootUrl + '/v1/audienceMembers:removeAll').replace(
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
        createAPIRequest<Schema$RemoveAllAudienceMembersResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$RemoveAllAudienceMembersResponse>(
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
  export interface Params$Resource$Audiencemembers$Removeall extends StandardParameters {
    /**
     * Request body metadata
     */
    requestBody?: Schema$RemoveAllAudienceMembersRequest;
  }

  export class Resource$Events {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
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
     *   //   "fieldWarnings": [],
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
        MethodOptions | BodyResponseCallback<Schema$IngestEventsResponse>,
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
     *
     */
    requestId?: string;
  }
}
