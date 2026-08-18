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
import {
  validateSingleSegment,
  validateMultiSegment,
  encodeWithSlashes,
  encodeWithoutSlashes,
} from '../../transcoding';

export namespace securitycenter_v1beta1 {
  export interface Options extends GlobalOptions {
    version: 'v1beta1';
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
   * Security Command Center API
   *
   * Security Command Center API provides access to temporal views of assets and findings within an organization.
   *
   * @example
   * ```js
   * const {google} = require('googleapis');
   * const securitycenter = google.securitycenter('v1beta1');
   * ```
   */
  export class Securitycenter {
    context: APIRequestContext;
    organizations: Resource$Organizations;

    constructor(options: GlobalOptions, google?: GoogleConfigurable) {
      this.context = {
        _options: options || {},
        google,
      };

      this.organizations = new Resource$Organizations(this.context);
    }
  }

  export interface Schema$Access {
    callerIp?: string | null;
    callerIpGeo?: Schema$Geolocation;
    methodName?: string | null;
    principalEmail?: string | null;
    principalSubject?: string | null;
    serviceAccountDelegationInfo?: Schema$ServiceAccountDelegationInfo[];
    serviceAccountKeyName?: string | null;
    serviceName?: string | null;
    userAgent?: string | null;
    userAgentFamily?: string | null;
    userName?: string | null;
  }
  export interface Schema$AccessReview {
    group?: string | null;
    name?: string | null;
    ns?: string | null;
    resource?: string | null;
    subresource?: string | null;
    verb?: string | null;
    version?: string | null;
  }
  export interface Schema$AdaptiveProtection {
    confidence?: number | null;
  }
  export interface Schema$AdcApplication {
    attributes?: Schema$GoogleCloudSecuritycenterV1ResourceApplicationAttributes;
    name?: string | null;
  }
  export interface Schema$AdcApplicationTemplateRevision {
    name?: string | null;
  }
  export interface Schema$AdcSharedTemplateRevision {
    name?: string | null;
  }
  export interface Schema$AffectedResources {
    count?: string | null;
  }
  export interface Schema$Agent {
    displayName?: string | null;
    id?: string | null;
  }
  export interface Schema$AgentAnomaly {
    confidenceScore?: number | null;
    detectorReferences?: Schema$DetectorReference[];
    invocationReferences?: Schema$InvocationReference[];
  }
  export interface Schema$AgentDataAccessEvent {
    eventId?: string | null;
    eventTime?: string | null;
    operation?: string | null;
    principalSubject?: string | null;
  }
  export interface Schema$AgentSession {
    sessionId?: string | null;
  }
  export interface Schema$AiModel {
    deploymentPlatform?: string | null;
    displayName?: string | null;
    domain?: string | null;
    library?: string | null;
    location?: string | null;
    name?: string | null;
    publisher?: string | null;
    usageCategory?: string | null;
  }
  export interface Schema$Allowed {
    ipRules?: Schema$IpRule[];
  }
  export interface Schema$Application {
    baseUri?: string | null;
    fullUri?: string | null;
  }
  export interface Schema$ArtifactGuardPolicies {
    failingPolicies?: Schema$ArtifactGuardPolicy[];
    resourceId?: string | null;
  }
  export interface Schema$ArtifactGuardPolicy {
    failureReason?: string | null;
    policyId?: string | null;
    type?: string | null;
  }
  export interface Schema$Asset {
    createTime?: string | null;
    name?: string | null;
    resourceProperties?: {[key: string]: any} | null;
    securityCenterProperties?: Schema$SecurityCenterProperties;
    securityMarks?: Schema$GoogleCloudSecuritycenterV1beta1SecurityMarks;
    updateTime?: string | null;
  }
  export interface Schema$AssetDiscoveryConfig {
    inclusionMode?: string | null;
    projectIds?: string[] | null;
  }
  export interface Schema$Attack {
    classification?: string | null;
    volumeBps?: number | null;
    volumeBpsLong?: string | null;
    volumePps?: number | null;
    volumePpsLong?: string | null;
  }
  export interface Schema$AttackExposure {
    attackExposureResult?: string | null;
    exposedHighValueResourcesCount?: number | null;
    exposedLowValueResourcesCount?: number | null;
    exposedMediumValueResourcesCount?: number | null;
    latestCalculationTime?: string | null;
    score?: number | null;
    state?: string | null;
  }
  export interface Schema$AuditConfig {
    auditLogConfigs?: Schema$AuditLogConfig[];
    service?: string | null;
  }
  export interface Schema$AuditLogConfig {
    exemptedMembers?: string[] | null;
    logType?: string | null;
  }
  export interface Schema$AwsAccount {
    id?: string | null;
    name?: string | null;
  }
  export interface Schema$AwsMetadata {
    account?: Schema$AwsAccount;
    organization?: Schema$AwsOrganization;
    organizationalUnits?: Schema$AwsOrganizationalUnit[];
  }
  export interface Schema$AwsOrganization {
    id?: string | null;
  }
  export interface Schema$AwsOrganizationalUnit {
    id?: string | null;
    name?: string | null;
  }
  export interface Schema$AzureManagementGroup {
    displayName?: string | null;
    id?: string | null;
  }
  export interface Schema$AzureMetadata {
    managementGroups?: Schema$AzureManagementGroup[];
    resourceGroup?: Schema$AzureResourceGroup;
    subscription?: Schema$AzureSubscription;
    tenant?: Schema$AzureTenant;
  }
  export interface Schema$AzureResourceGroup {
    id?: string | null;
    name?: string | null;
  }
  export interface Schema$AzureSubscription {
    displayName?: string | null;
    id?: string | null;
  }
  export interface Schema$AzureTenant {
    displayName?: string | null;
    id?: string | null;
  }
  export interface Schema$BackupDisasterRecovery {
    appliance?: string | null;
    applications?: string[] | null;
    backupCreateTime?: string | null;
    backupTemplate?: string | null;
    backupType?: string | null;
    host?: string | null;
    policies?: string[] | null;
    policyOptions?: string[] | null;
    profile?: string | null;
    storagePool?: string | null;
  }
  export interface Schema$BigQueryDestination {
    dataset?: string | null;
  }
  export interface Schema$Binding {
    condition?: Schema$Expr;
    members?: string[] | null;
    role?: string | null;
  }
  export interface Schema$CancelOperationRequest {}
  export interface Schema$Chokepoint {
    relatedFindings?: string[] | null;
  }
  export interface Schema$CloudArmor {
    adaptiveProtection?: Schema$AdaptiveProtection;
    attack?: Schema$Attack;
    duration?: string | null;
    requests?: Schema$Requests;
    securityPolicy?: Schema$SecurityPolicy;
    threatVector?: string | null;
  }
  export interface Schema$CloudControl {
    cloudControlName?: string | null;
    policyType?: string | null;
    type?: string | null;
    version?: number | null;
  }
  export interface Schema$CloudDlpDataProfile {
    dataProfile?: string | null;
    infoTypes?: Schema$InfoType[];
    parentType?: string | null;
  }
  export interface Schema$CloudDlpInspection {
    fullScan?: boolean | null;
    infoType?: string | null;
    infoTypeCount?: string | null;
    inspectJob?: string | null;
  }
  export interface Schema$CloudLoggingEntry {
    insertId?: string | null;
    logId?: string | null;
    resourceContainer?: string | null;
    timestamp?: string | null;
  }
  export interface Schema$Compliance {
    ids?: string[] | null;
    standard?: string | null;
    version?: string | null;
  }
  export interface Schema$ComplianceDetails {
    cloudControl?: Schema$CloudControl;
    cloudControlDeploymentNames?: string[] | null;
    frameworks?: Schema$Framework[];
  }
  export interface Schema$Connection {
    destinationIp?: string | null;
    destinationPort?: number | null;
    protocol?: string | null;
    sourceIp?: string | null;
    sourcePort?: number | null;
  }
  export interface Schema$Contact {
    email?: string | null;
  }
  export interface Schema$ContactDetails {
    contacts?: Schema$Contact[];
  }
  export interface Schema$Container {
    createTime?: string | null;
    imageId?: string | null;
    labels?: Schema$Label[];
    name?: string | null;
    uri?: string | null;
  }
  export interface Schema$Control {
    controlName?: string | null;
    displayName?: string | null;
  }
  export interface Schema$Cve {
    cvssv3?: Schema$Cvssv3;
    exploitationActivity?: string | null;
    exploitReleaseDate?: string | null;
    firstExploitationDate?: string | null;
    id?: string | null;
    impact?: string | null;
    observedInTheWild?: boolean | null;
    references?: Schema$Reference[];
    upstreamFixAvailable?: boolean | null;
    zeroDay?: boolean | null;
  }
  export interface Schema$Cvssv3 {
    attackComplexity?: string | null;
    attackVector?: string | null;
    availabilityImpact?: string | null;
    baseScore?: number | null;
    confidentialityImpact?: string | null;
    integrityImpact?: string | null;
    privilegesRequired?: string | null;
    scope?: string | null;
    userInteraction?: string | null;
  }
  export interface Schema$Cwe {
    id?: string | null;
    references?: Schema$Reference[];
  }
  export interface Schema$DataAccessEvent {
    eventId?: string | null;
    eventTime?: string | null;
    operation?: string | null;
    principalEmail?: string | null;
  }
  export interface Schema$Database {
    displayName?: string | null;
    grantees?: string[] | null;
    name?: string | null;
    query?: string | null;
    userName?: string | null;
    version?: string | null;
  }
  export interface Schema$DataFlowEvent {
    eventId?: string | null;
    eventTime?: string | null;
    operation?: string | null;
    principalEmail?: string | null;
    violatedLocation?: string | null;
  }
  export interface Schema$DataRetentionDeletionEvent {
    dataObjectCount?: string | null;
    eventDetectionTime?: string | null;
    eventType?: string | null;
    maxRetentionAllowed?: string | null;
    minRetentionAllowed?: string | null;
  }
  export interface Schema$Dataset {
    displayName?: string | null;
    name?: string | null;
    source?: string | null;
  }
  export interface Schema$Denied {
    ipRules?: Schema$IpRule[];
  }
  export interface Schema$Detection {
    binary?: string | null;
    percentPagesMatched?: number | null;
  }
  export interface Schema$DetectorReference {
    detectorId?: string | null;
    displayName?: string | null;
    explanation?: string | null;
    recommendation?: string | null;
    severity?: string | null;
  }
  export interface Schema$DiscoveredWorkload {
    confidence?: string | null;
    detectedRelevantHardware?: boolean | null;
    detectedRelevantKeywords?: boolean | null;
    detectedRelevantPackages?: boolean | null;
    workloadType?: string | null;
  }
  export interface Schema$Disk {
    name?: string | null;
  }
  export interface Schema$DiskPath {
    partitionUuid?: string | null;
    relativePath?: string | null;
  }
  export interface Schema$DynamicMuteRecord {
    matchTime?: string | null;
    muteConfig?: string | null;
  }
  export interface Schema$Empty {}
  export interface Schema$EnvironmentVariable {
    name?: string | null;
    val?: string | null;
  }
  export interface Schema$ExfilResource {
    components?: string[] | null;
    name?: string | null;
  }
  export interface Schema$Exfiltration {
    sources?: Schema$ExfilResource[];
    targets?: Schema$ExfilResource[];
    totalExfiltratedBytes?: string | null;
  }
  export interface Schema$ExportFindingsMetadata {
    bigQueryDestination?: Schema$BigQueryDestination;
    exportStartTime?: string | null;
  }
  export interface Schema$ExportFindingsResponse {}
  export interface Schema$Expr {
    description?: string | null;
    expression?: string | null;
    location?: string | null;
    title?: string | null;
  }
  export interface Schema$ExternalExposure {
    backendBucket?: string | null;
    backendService?: string | null;
    exposedApplication?: string | null;
    exposedEndpoint?: string | null;
    exposedService?: string | null;
    forwardingRule?: string | null;
    hostnameUri?: string | null;
    httpResponse?: Schema$HttpResponse[];
    instanceGroup?: string | null;
    internalBackendService?: string | null;
    loadBalancerFirewallPolicy?: string | null;
    networkEndpointGroup?: string | null;
    networkIngressFirewallPolicy?: string | null;
    networkPathInsightsGenerationTime?: string | null;
    privateIpAddress?: string | null;
    privatePort?: string | null;
    pscNetworkAttachment?: string | null;
    pscServiceAttachment?: string | null;
    publicIpAddress?: string | null;
    publicPort?: string | null;
    serviceFirewallPolicy?: string | null;
  }
  export interface Schema$File {
    contents?: string | null;
    diskPath?: Schema$DiskPath;
    fileLoadState?: string | null;
    hashedSize?: string | null;
    operations?: Schema$FileOperation[];
    partiallyHashed?: boolean | null;
    path?: string | null;
    sha256?: string | null;
    size?: string | null;
  }
  export interface Schema$FileOperation {
    type?: string | null;
  }
  export interface Schema$Finding {
    access?: Schema$Access;
    affectedResources?: Schema$AffectedResources;
    agent?: Schema$Agent;
    agentAnomaly?: Schema$AgentAnomaly;
    agentDataAccessEvents?: Schema$AgentDataAccessEvent[];
    agentSessions?: Schema$AgentSession[];
    aiModel?: Schema$AiModel;
    application?: Schema$Application;
    artifactGuardPolicies?: Schema$ArtifactGuardPolicies;
    attackExposure?: Schema$AttackExposure;
    backupDisasterRecovery?: Schema$BackupDisasterRecovery;
    canonicalName?: string | null;
    category?: string | null;
    chokepoint?: Schema$Chokepoint;
    cloudArmor?: Schema$CloudArmor;
    cloudDlpDataProfile?: Schema$CloudDlpDataProfile;
    cloudDlpInspection?: Schema$CloudDlpInspection;
    complianceDetails?: Schema$ComplianceDetails;
    compliances?: Schema$Compliance[];
    connections?: Schema$Connection[];
    contacts?: {[key: string]: Schema$ContactDetails} | null;
    containers?: Schema$Container[];
    createTime?: string | null;
    dataAccessEvents?: Schema$DataAccessEvent[];
    database?: Schema$Database;
    dataFlowEvents?: Schema$DataFlowEvent[];
    dataRetentionDeletionEvents?: Schema$DataRetentionDeletionEvent[];
    description?: string | null;
    discoveredWorkload?: Schema$DiscoveredWorkload;
    disk?: Schema$Disk;
    eventTime?: string | null;
    exfiltration?: Schema$Exfiltration;
    externalExposure?: Schema$ExternalExposure;
    externalSystems?: {
      [key: string]: Schema$GoogleCloudSecuritycenterV1ExternalSystem;
    } | null;
    externalUri?: string | null;
    files?: Schema$File[];
    findingClass?: string | null;
    groupMemberships?: Schema$GroupMembership[];
    iamBindings?: Schema$IamBinding[];
    iamDetails?: Schema$GoogleCloudSecuritycenterV1IamDetails;
    indicator?: Schema$Indicator;
    ipRules?: Schema$IpRules;
    job?: Schema$Job;
    kernelRootkit?: Schema$KernelRootkit;
    kubernetes?: Schema$Kubernetes;
    loadBalancers?: Schema$LoadBalancer[];
    logEntries?: Schema$LogEntry[];
    mitreAttack?: Schema$MitreAttack;
    moduleName?: string | null;
    mute?: string | null;
    muteInfo?: Schema$MuteInfo;
    muteInitiator?: string | null;
    muteUpdateTime?: string | null;
    name?: string | null;
    networks?: Schema$Network[];
    nextSteps?: string | null;
    notebook?: Schema$Notebook;
    orgPolicies?: Schema$OrgPolicy[];
    parent?: string | null;
    parentDisplayName?: string | null;
    policyViolationSummary?: Schema$PolicyViolationSummary;
    processes?: Schema$Process[];
    resourceName?: string | null;
    secret?: Schema$Secret;
    securityMarks?: Schema$SecurityMarks;
    securityPosture?: Schema$SecurityPosture;
    severity?: string | null;
    sourceProperties?: {[key: string]: any} | null;
    state?: string | null;
    toxicCombination?: Schema$ToxicCombination;
    vertexAi?: Schema$VertexAi;
    vulnerability?: Schema$Vulnerability;
  }
  export interface Schema$Folder {
    resourceFolder?: string | null;
    resourceFolderDisplayName?: string | null;
  }
  export interface Schema$Framework {
    category?: string[] | null;
    controls?: Schema$Control[];
    displayName?: string | null;
    name?: string | null;
    type?: string | null;
  }
  export interface Schema$GcpMetadata {
    folders?: Schema$GoogleCloudSecuritycenterV2Folder[];
    organization?: string | null;
    parent?: string | null;
    parentDisplayName?: string | null;
    project?: string | null;
    projectDisplayName?: string | null;
  }
  export interface Schema$Geolocation {
    regionCode?: string | null;
  }
  export interface Schema$GetIamPolicyRequest {
    options?: Schema$GetPolicyOptions;
  }
  export interface Schema$GetPolicyOptions {
    requestedPolicyVersion?: number | null;
  }
  export interface Schema$GoogleCloudSecuritycenterV1beta1Finding {
    category?: string | null;
    createTime?: string | null;
    eventTime?: string | null;
    externalUri?: string | null;
    name?: string | null;
    parent?: string | null;
    resourceName?: string | null;
    securityMarks?: Schema$GoogleCloudSecuritycenterV1beta1SecurityMarks;
    sourceProperties?: {[key: string]: any} | null;
    state?: string | null;
  }
  export interface Schema$GoogleCloudSecuritycenterV1beta1RunAssetDiscoveryResponse {
    duration?: string | null;
    state?: string | null;
  }
  export interface Schema$GoogleCloudSecuritycenterV1beta1SecurityMarks {
    marks?: {[key: string]: string} | null;
    name?: string | null;
  }
  export interface Schema$GoogleCloudSecuritycenterV1BigQueryExport {
    createTime?: string | null;
    dataset?: string | null;
    description?: string | null;
    filter?: string | null;
    mostRecentEditor?: string | null;
    name?: string | null;
    principal?: string | null;
    updateTime?: string | null;
  }
  export interface Schema$GoogleCloudSecuritycenterV1Binding {
    name?: string | null;
    ns?: string | null;
    role?: Schema$Role;
    subjects?: Schema$Subject[];
  }
  export interface Schema$GoogleCloudSecuritycenterV1BulkMuteFindingsResponse {}
  export interface Schema$GoogleCloudSecuritycenterV1CustomConfig {
    customOutput?: Schema$GoogleCloudSecuritycenterV1CustomOutputSpec;
    description?: string | null;
    predicate?: Schema$Expr;
    recommendation?: string | null;
    resourceSelector?: Schema$GoogleCloudSecuritycenterV1ResourceSelector;
    severity?: string | null;
  }
  export interface Schema$GoogleCloudSecuritycenterV1CustomOutputSpec {
    properties?: Schema$GoogleCloudSecuritycenterV1Property[];
  }
  export interface Schema$GoogleCloudSecuritycenterV1EffectiveSecurityHealthAnalyticsCustomModule {
    cloudProvider?: string | null;
    customConfig?: Schema$GoogleCloudSecuritycenterV1CustomConfig;
    displayName?: string | null;
    enablementState?: string | null;
    name?: string | null;
  }
  export interface Schema$GoogleCloudSecuritycenterV1ExternalSystem {
    assignees?: string[] | null;
    caseCloseTime?: string | null;
    caseCreateTime?: string | null;
    casePriority?: string | null;
    caseSla?: string | null;
    caseUri?: string | null;
    externalSystemUpdateTime?: string | null;
    externalUid?: string | null;
    name?: string | null;
    status?: string | null;
    ticketInfo?: Schema$TicketInfo;
  }
  export interface Schema$GoogleCloudSecuritycenterV1IamDetails {
    iamRolePermissions?: Schema$GoogleCloudSecuritycenterV1IamRolePermission[];
  }
  export interface Schema$GoogleCloudSecuritycenterV1IamRolePermission {
    name?: string | null;
    role?: string | null;
  }
  export interface Schema$GoogleCloudSecuritycenterV1MuteConfig {
    createTime?: string | null;
    description?: string | null;
    displayName?: string | null;
    expiryTime?: string | null;
    filter?: string | null;
    mostRecentEditor?: string | null;
    name?: string | null;
    type?: string | null;
    updateTime?: string | null;
  }
  export interface Schema$GoogleCloudSecuritycenterV1NotificationMessage {
    finding?: Schema$Finding;
    notificationConfigName?: string | null;
    resource?: Schema$GoogleCloudSecuritycenterV1Resource;
  }
  export interface Schema$GoogleCloudSecuritycenterV1p1beta1Finding {
    canonicalName?: string | null;
    category?: string | null;
    createTime?: string | null;
    eventTime?: string | null;
    externalUri?: string | null;
    name?: string | null;
    parent?: string | null;
    resourceName?: string | null;
    securityMarks?: Schema$GoogleCloudSecuritycenterV1p1beta1SecurityMarks;
    severity?: string | null;
    sourceProperties?: {[key: string]: any} | null;
    state?: string | null;
  }
  export interface Schema$GoogleCloudSecuritycenterV1p1beta1Folder {
    resourceFolder?: string | null;
    resourceFolderDisplayName?: string | null;
  }
  export interface Schema$GoogleCloudSecuritycenterV1p1beta1NotificationMessage {
    finding?: Schema$GoogleCloudSecuritycenterV1p1beta1Finding;
    notificationConfigName?: string | null;
    resource?: Schema$GoogleCloudSecuritycenterV1p1beta1Resource;
  }
  export interface Schema$GoogleCloudSecuritycenterV1p1beta1Resource {
    folders?: Schema$GoogleCloudSecuritycenterV1p1beta1Folder[];
    name?: string | null;
    parent?: string | null;
    parentDisplayName?: string | null;
    project?: string | null;
    projectDisplayName?: string | null;
  }
  export interface Schema$GoogleCloudSecuritycenterV1p1beta1RunAssetDiscoveryResponse {
    duration?: string | null;
    state?: string | null;
  }
  export interface Schema$GoogleCloudSecuritycenterV1p1beta1SecurityMarks {
    canonicalName?: string | null;
    marks?: {[key: string]: string} | null;
    name?: string | null;
  }
  export interface Schema$GoogleCloudSecuritycenterV1Property {
    name?: string | null;
    valueExpression?: Schema$Expr;
  }
  export interface Schema$GoogleCloudSecuritycenterV1Resource {
    adcApplication?: Schema$AdcApplication;
    adcApplicationTemplate?: Schema$AdcApplicationTemplateRevision;
    adcSharedTemplate?: Schema$AdcSharedTemplateRevision;
    application?: Schema$GoogleCloudSecuritycenterV1ResourceApplication;
    awsMetadata?: Schema$AwsMetadata;
    azureMetadata?: Schema$AzureMetadata;
    cloudProvider?: string | null;
    displayName?: string | null;
    folders?: Schema$Folder[];
    location?: string | null;
    name?: string | null;
    organization?: string | null;
    parent?: string | null;
    parentDisplayName?: string | null;
    project?: string | null;
    projectDisplayName?: string | null;
    resourcePath?: Schema$ResourcePath;
    resourcePathString?: string | null;
    service?: string | null;
    type?: string | null;
  }
  export interface Schema$GoogleCloudSecuritycenterV1ResourceApplication {
    attributes?: Schema$GoogleCloudSecuritycenterV1ResourceApplicationAttributes;
    name?: string | null;
  }
  export interface Schema$GoogleCloudSecuritycenterV1ResourceApplicationAttributes {
    businessOwners?: Schema$GoogleCloudSecuritycenterV1ResourceApplicationAttributesContactInfo[];
    criticality?: Schema$GoogleCloudSecuritycenterV1ResourceApplicationAttributesCriticality;
    developerOwners?: Schema$GoogleCloudSecuritycenterV1ResourceApplicationAttributesContactInfo[];
    environment?: Schema$GoogleCloudSecuritycenterV1ResourceApplicationAttributesEnvironment;
    operatorOwners?: Schema$GoogleCloudSecuritycenterV1ResourceApplicationAttributesContactInfo[];
  }
  export interface Schema$GoogleCloudSecuritycenterV1ResourceApplicationAttributesContactInfo {
    email?: string | null;
  }
  export interface Schema$GoogleCloudSecuritycenterV1ResourceApplicationAttributesCriticality {
    type?: string | null;
  }
  export interface Schema$GoogleCloudSecuritycenterV1ResourceApplicationAttributesEnvironment {
    type?: string | null;
  }
  export interface Schema$GoogleCloudSecuritycenterV1ResourceSelector {
    resourceTypes?: string[] | null;
  }
  export interface Schema$GoogleCloudSecuritycenterV1ResourceValueConfig {
    cloudProvider?: string | null;
    createTime?: string | null;
    description?: string | null;
    name?: string | null;
    resourceLabelsSelector?: {[key: string]: string} | null;
    resourceType?: string | null;
    resourceValue?: string | null;
    scope?: string | null;
    sensitiveDataProtectionMapping?: Schema$GoogleCloudSecuritycenterV1SensitiveDataProtectionMapping;
    tagValues?: string[] | null;
    updateTime?: string | null;
  }
  export interface Schema$GoogleCloudSecuritycenterV1RunAssetDiscoveryResponse {
    duration?: string | null;
    state?: string | null;
  }
  export interface Schema$GoogleCloudSecuritycenterV1SecurityHealthAnalyticsCustomModule {
    ancestorModule?: string | null;
    cloudProvider?: string | null;
    customConfig?: Schema$GoogleCloudSecuritycenterV1CustomConfig;
    displayName?: string | null;
    enablementState?: string | null;
    lastEditor?: string | null;
    name?: string | null;
    updateTime?: string | null;
  }
  export interface Schema$GoogleCloudSecuritycenterV1SensitiveDataProtectionMapping {
    highSensitivityMapping?: string | null;
    mediumSensitivityMapping?: string | null;
  }
  export interface Schema$GoogleCloudSecuritycenterV2Access {
    callerIp?: string | null;
    callerIpGeo?: Schema$GoogleCloudSecuritycenterV2Geolocation;
    methodName?: string | null;
    principalEmail?: string | null;
    principalSubject?: string | null;
    serviceAccountDelegationInfo?: Schema$GoogleCloudSecuritycenterV2ServiceAccountDelegationInfo[];
    serviceAccountKeyName?: string | null;
    serviceName?: string | null;
    userAgent?: string | null;
    userAgentFamily?: string | null;
    userName?: string | null;
  }
  export interface Schema$GoogleCloudSecuritycenterV2AccessReview {
    group?: string | null;
    name?: string | null;
    ns?: string | null;
    resource?: string | null;
    subresource?: string | null;
    verb?: string | null;
    version?: string | null;
  }
  export interface Schema$GoogleCloudSecuritycenterV2AdaptiveProtection {
    confidence?: number | null;
  }
  export interface Schema$GoogleCloudSecuritycenterV2AdcApplication {
    attributes?: Schema$GoogleCloudSecuritycenterV2ResourceApplicationAttributes;
    name?: string | null;
  }
  export interface Schema$GoogleCloudSecuritycenterV2AdcApplicationTemplateRevision {
    name?: string | null;
  }
  export interface Schema$GoogleCloudSecuritycenterV2AdcSharedTemplateRevision {
    name?: string | null;
  }
  export interface Schema$GoogleCloudSecuritycenterV2AffectedResources {
    count?: string | null;
  }
  export interface Schema$GoogleCloudSecuritycenterV2Agent {
    displayName?: string | null;
    id?: string | null;
  }
  export interface Schema$GoogleCloudSecuritycenterV2AgentAnomaly {
    confidenceScore?: number | null;
    detectorReferences?: Schema$GoogleCloudSecuritycenterV2DetectorReference[];
    invocationReferences?: Schema$GoogleCloudSecuritycenterV2InvocationReference[];
  }
  export interface Schema$GoogleCloudSecuritycenterV2AgentDataAccessEvent {
    eventId?: string | null;
    eventTime?: string | null;
    operation?: string | null;
    principalSubject?: string | null;
  }
  export interface Schema$GoogleCloudSecuritycenterV2AgentSession {
    sessionId?: string | null;
  }
  export interface Schema$GoogleCloudSecuritycenterV2AiModel {
    deploymentPlatform?: string | null;
    displayName?: string | null;
    domain?: string | null;
    library?: string | null;
    location?: string | null;
    name?: string | null;
    publisher?: string | null;
    usageCategory?: string | null;
  }
  export interface Schema$GoogleCloudSecuritycenterV2Allowed {
    ipRules?: Schema$GoogleCloudSecuritycenterV2IpRule[];
  }
  export interface Schema$GoogleCloudSecuritycenterV2Application {
    baseUri?: string | null;
    fullUri?: string | null;
  }
  export interface Schema$GoogleCloudSecuritycenterV2ArtifactGuardPolicies {
    failingPolicies?: Schema$GoogleCloudSecuritycenterV2ArtifactGuardPolicy[];
    resourceId?: string | null;
  }
  export interface Schema$GoogleCloudSecuritycenterV2ArtifactGuardPolicy {
    failureReason?: string | null;
    policyId?: string | null;
    type?: string | null;
  }
  export interface Schema$GoogleCloudSecuritycenterV2Attack {
    classification?: string | null;
    volumeBps?: number | null;
    volumeBpsLong?: string | null;
    volumePps?: number | null;
    volumePpsLong?: string | null;
  }
  export interface Schema$GoogleCloudSecuritycenterV2AttackExposure {
    attackExposureResult?: string | null;
    exposedHighValueResourcesCount?: number | null;
    exposedLowValueResourcesCount?: number | null;
    exposedMediumValueResourcesCount?: number | null;
    latestCalculationTime?: string | null;
    score?: number | null;
    state?: string | null;
  }
  export interface Schema$GoogleCloudSecuritycenterV2AwsAccount {
    id?: string | null;
    name?: string | null;
  }
  export interface Schema$GoogleCloudSecuritycenterV2AwsMetadata {
    account?: Schema$GoogleCloudSecuritycenterV2AwsAccount;
    organization?: Schema$GoogleCloudSecuritycenterV2AwsOrganization;
    organizationalUnits?: Schema$GoogleCloudSecuritycenterV2AwsOrganizationalUnit[];
  }
  export interface Schema$GoogleCloudSecuritycenterV2AwsOrganization {
    id?: string | null;
  }
  export interface Schema$GoogleCloudSecuritycenterV2AwsOrganizationalUnit {
    id?: string | null;
    name?: string | null;
  }
  export interface Schema$GoogleCloudSecuritycenterV2AzureManagementGroup {
    displayName?: string | null;
    id?: string | null;
  }
  export interface Schema$GoogleCloudSecuritycenterV2AzureMetadata {
    managementGroups?: Schema$GoogleCloudSecuritycenterV2AzureManagementGroup[];
    resourceGroup?: Schema$GoogleCloudSecuritycenterV2AzureResourceGroup;
    subscription?: Schema$GoogleCloudSecuritycenterV2AzureSubscription;
    tenant?: Schema$GoogleCloudSecuritycenterV2AzureTenant;
  }
  export interface Schema$GoogleCloudSecuritycenterV2AzureResourceGroup {
    id?: string | null;
    name?: string | null;
  }
  export interface Schema$GoogleCloudSecuritycenterV2AzureSubscription {
    displayName?: string | null;
    id?: string | null;
  }
  export interface Schema$GoogleCloudSecuritycenterV2AzureTenant {
    displayName?: string | null;
    id?: string | null;
  }
  export interface Schema$GoogleCloudSecuritycenterV2BackupDisasterRecovery {
    appliance?: string | null;
    applications?: string[] | null;
    backupCreateTime?: string | null;
    backupTemplate?: string | null;
    backupType?: string | null;
    host?: string | null;
    policies?: string[] | null;
    policyOptions?: string[] | null;
    profile?: string | null;
    storagePool?: string | null;
  }
  export interface Schema$GoogleCloudSecuritycenterV2BigQueryExport {
    createTime?: string | null;
    cryptoKeyName?: string | null;
    dataset?: string | null;
    description?: string | null;
    filter?: string | null;
    mostRecentEditor?: string | null;
    name?: string | null;
    principal?: string | null;
    updateTime?: string | null;
  }
  export interface Schema$GoogleCloudSecuritycenterV2Binding {
    name?: string | null;
    ns?: string | null;
    role?: Schema$GoogleCloudSecuritycenterV2Role;
    subjects?: Schema$GoogleCloudSecuritycenterV2Subject[];
  }
  export interface Schema$GoogleCloudSecuritycenterV2BulkMuteFindingsResponse {}
  export interface Schema$GoogleCloudSecuritycenterV2Chokepoint {
    relatedFindings?: string[] | null;
  }
  export interface Schema$GoogleCloudSecuritycenterV2CloudArmor {
    adaptiveProtection?: Schema$GoogleCloudSecuritycenterV2AdaptiveProtection;
    attack?: Schema$GoogleCloudSecuritycenterV2Attack;
    duration?: string | null;
    requests?: Schema$GoogleCloudSecuritycenterV2Requests;
    securityPolicy?: Schema$GoogleCloudSecuritycenterV2SecurityPolicy;
    threatVector?: string | null;
  }
  export interface Schema$GoogleCloudSecuritycenterV2CloudControl {
    cloudControlName?: string | null;
    policyType?: string | null;
    type?: string | null;
    version?: number | null;
  }
  export interface Schema$GoogleCloudSecuritycenterV2CloudDlpDataProfile {
    dataProfile?: string | null;
    infoTypes?: Schema$GoogleCloudSecuritycenterV2InfoType[];
    parentType?: string | null;
  }
  export interface Schema$GoogleCloudSecuritycenterV2CloudDlpInspection {
    fullScan?: boolean | null;
    infoType?: string | null;
    infoTypeCount?: string | null;
    inspectJob?: string | null;
  }
  export interface Schema$GoogleCloudSecuritycenterV2CloudLoggingEntry {
    insertId?: string | null;
    logId?: string | null;
    resourceContainer?: string | null;
    timestamp?: string | null;
  }
  export interface Schema$GoogleCloudSecuritycenterV2Compliance {
    ids?: string[] | null;
    standard?: string | null;
    version?: string | null;
  }
  export interface Schema$GoogleCloudSecuritycenterV2ComplianceDetails {
    cloudControl?: Schema$GoogleCloudSecuritycenterV2CloudControl;
    cloudControlDeploymentNames?: string[] | null;
    frameworks?: Schema$GoogleCloudSecuritycenterV2Framework[];
  }
  export interface Schema$GoogleCloudSecuritycenterV2Connection {
    destinationIp?: string | null;
    destinationPort?: number | null;
    protocol?: string | null;
    sourceIp?: string | null;
    sourcePort?: number | null;
  }
  export interface Schema$GoogleCloudSecuritycenterV2Contact {
    email?: string | null;
  }
  export interface Schema$GoogleCloudSecuritycenterV2ContactDetails {
    contacts?: Schema$GoogleCloudSecuritycenterV2Contact[];
  }
  export interface Schema$GoogleCloudSecuritycenterV2Container {
    createTime?: string | null;
    imageId?: string | null;
    labels?: Schema$GoogleCloudSecuritycenterV2Label[];
    name?: string | null;
    uri?: string | null;
  }
  export interface Schema$GoogleCloudSecuritycenterV2Control {
    controlName?: string | null;
    displayName?: string | null;
  }
  export interface Schema$GoogleCloudSecuritycenterV2Cve {
    cvssv3?: Schema$GoogleCloudSecuritycenterV2Cvssv3;
    exploitationActivity?: string | null;
    exploitReleaseDate?: string | null;
    firstExploitationDate?: string | null;
    id?: string | null;
    impact?: string | null;
    observedInTheWild?: boolean | null;
    references?: Schema$GoogleCloudSecuritycenterV2Reference[];
    upstreamFixAvailable?: boolean | null;
    zeroDay?: boolean | null;
  }
  export interface Schema$GoogleCloudSecuritycenterV2Cvssv3 {
    attackComplexity?: string | null;
    attackVector?: string | null;
    availabilityImpact?: string | null;
    baseScore?: number | null;
    confidentialityImpact?: string | null;
    integrityImpact?: string | null;
    privilegesRequired?: string | null;
    scope?: string | null;
    userInteraction?: string | null;
  }
  export interface Schema$GoogleCloudSecuritycenterV2Cwe {
    id?: string | null;
    references?: Schema$GoogleCloudSecuritycenterV2Reference[];
  }
  export interface Schema$GoogleCloudSecuritycenterV2DataAccessEvent {
    eventId?: string | null;
    eventTime?: string | null;
    operation?: string | null;
    principalEmail?: string | null;
  }
  export interface Schema$GoogleCloudSecuritycenterV2Database {
    displayName?: string | null;
    grantees?: string[] | null;
    name?: string | null;
    query?: string | null;
    userName?: string | null;
    version?: string | null;
  }
  export interface Schema$GoogleCloudSecuritycenterV2DataFlowEvent {
    eventId?: string | null;
    eventTime?: string | null;
    operation?: string | null;
    principalEmail?: string | null;
    violatedLocation?: string | null;
  }
  export interface Schema$GoogleCloudSecuritycenterV2DataRetentionDeletionEvent {
    dataObjectCount?: string | null;
    eventDetectionTime?: string | null;
    eventType?: string | null;
    maxRetentionAllowed?: string | null;
    minRetentionAllowed?: string | null;
  }
  export interface Schema$GoogleCloudSecuritycenterV2Dataset {
    displayName?: string | null;
    name?: string | null;
    source?: string | null;
  }
  export interface Schema$GoogleCloudSecuritycenterV2Denied {
    ipRules?: Schema$GoogleCloudSecuritycenterV2IpRule[];
  }
  export interface Schema$GoogleCloudSecuritycenterV2Detection {
    binary?: string | null;
    percentPagesMatched?: number | null;
  }
  export interface Schema$GoogleCloudSecuritycenterV2DetectorReference {
    detectorId?: string | null;
    displayName?: string | null;
    explanation?: string | null;
    recommendation?: string | null;
    severity?: string | null;
  }
  export interface Schema$GoogleCloudSecuritycenterV2DiscoveredWorkload {
    confidence?: string | null;
    detectedRelevantHardware?: boolean | null;
    detectedRelevantKeywords?: boolean | null;
    detectedRelevantPackages?: boolean | null;
    workloadType?: string | null;
  }
  export interface Schema$GoogleCloudSecuritycenterV2Disk {
    name?: string | null;
  }
  export interface Schema$GoogleCloudSecuritycenterV2DiskPath {
    partitionUuid?: string | null;
    relativePath?: string | null;
  }
  export interface Schema$GoogleCloudSecuritycenterV2DynamicMuteRecord {
    matchTime?: string | null;
    muteConfig?: string | null;
  }
  export interface Schema$GoogleCloudSecuritycenterV2EnvironmentVariable {
    name?: string | null;
    val?: string | null;
  }
  export interface Schema$GoogleCloudSecuritycenterV2ExfilResource {
    components?: string[] | null;
    name?: string | null;
  }
  export interface Schema$GoogleCloudSecuritycenterV2Exfiltration {
    sources?: Schema$GoogleCloudSecuritycenterV2ExfilResource[];
    targets?: Schema$GoogleCloudSecuritycenterV2ExfilResource[];
    totalExfiltratedBytes?: string | null;
  }
  export interface Schema$GoogleCloudSecuritycenterV2ExternalExposure {
    backendBucket?: string | null;
    backendService?: string | null;
    exposedApplication?: string | null;
    exposedEndpoint?: string | null;
    exposedService?: string | null;
    forwardingRule?: string | null;
    hostnameUri?: string | null;
    httpResponse?: Schema$GoogleCloudSecuritycenterV2HttpResponse[];
    instanceGroup?: string | null;
    internalBackendService?: string | null;
    loadBalancerFirewallPolicy?: string | null;
    networkEndpointGroup?: string | null;
    networkIngressFirewallPolicy?: string | null;
    networkPathInsightsGenerationTime?: string | null;
    privateIpAddress?: string | null;
    privatePort?: string | null;
    pscNetworkAttachment?: string | null;
    pscServiceAttachment?: string | null;
    publicIpAddress?: string | null;
    publicPort?: string | null;
    serviceFirewallPolicy?: string | null;
  }
  export interface Schema$GoogleCloudSecuritycenterV2ExternalSystem {
    assignees?: string[] | null;
    caseCloseTime?: string | null;
    caseCreateTime?: string | null;
    casePriority?: string | null;
    caseSla?: string | null;
    caseUri?: string | null;
    externalSystemUpdateTime?: string | null;
    externalUid?: string | null;
    name?: string | null;
    status?: string | null;
    ticketInfo?: Schema$GoogleCloudSecuritycenterV2TicketInfo;
  }
  export interface Schema$GoogleCloudSecuritycenterV2File {
    contents?: string | null;
    diskPath?: Schema$GoogleCloudSecuritycenterV2DiskPath;
    fileLoadState?: string | null;
    hashedSize?: string | null;
    operations?: Schema$GoogleCloudSecuritycenterV2FileOperation[];
    partiallyHashed?: boolean | null;
    path?: string | null;
    sha256?: string | null;
    size?: string | null;
  }
  export interface Schema$GoogleCloudSecuritycenterV2FileOperation {
    type?: string | null;
  }
  export interface Schema$GoogleCloudSecuritycenterV2Finding {
    access?: Schema$GoogleCloudSecuritycenterV2Access;
    affectedResources?: Schema$GoogleCloudSecuritycenterV2AffectedResources;
    agent?: Schema$GoogleCloudSecuritycenterV2Agent;
    agentAnomaly?: Schema$GoogleCloudSecuritycenterV2AgentAnomaly;
    agentDataAccessEvents?: Schema$GoogleCloudSecuritycenterV2AgentDataAccessEvent[];
    agentSessions?: Schema$GoogleCloudSecuritycenterV2AgentSession[];
    aiModel?: Schema$GoogleCloudSecuritycenterV2AiModel;
    application?: Schema$GoogleCloudSecuritycenterV2Application;
    artifactGuardPolicies?: Schema$GoogleCloudSecuritycenterV2ArtifactGuardPolicies;
    attackExposure?: Schema$GoogleCloudSecuritycenterV2AttackExposure;
    backupDisasterRecovery?: Schema$GoogleCloudSecuritycenterV2BackupDisasterRecovery;
    canonicalName?: string | null;
    category?: string | null;
    chokepoint?: Schema$GoogleCloudSecuritycenterV2Chokepoint;
    cloudArmor?: Schema$GoogleCloudSecuritycenterV2CloudArmor;
    cloudDlpDataProfile?: Schema$GoogleCloudSecuritycenterV2CloudDlpDataProfile;
    cloudDlpInspection?: Schema$GoogleCloudSecuritycenterV2CloudDlpInspection;
    complianceDetails?: Schema$GoogleCloudSecuritycenterV2ComplianceDetails;
    compliances?: Schema$GoogleCloudSecuritycenterV2Compliance[];
    connections?: Schema$GoogleCloudSecuritycenterV2Connection[];
    contacts?: {
      [key: string]: Schema$GoogleCloudSecuritycenterV2ContactDetails;
    } | null;
    containers?: Schema$GoogleCloudSecuritycenterV2Container[];
    createTime?: string | null;
    cryptoKeyName?: string | null;
    dataAccessEvents?: Schema$GoogleCloudSecuritycenterV2DataAccessEvent[];
    database?: Schema$GoogleCloudSecuritycenterV2Database;
    dataFlowEvents?: Schema$GoogleCloudSecuritycenterV2DataFlowEvent[];
    dataRetentionDeletionEvents?: Schema$GoogleCloudSecuritycenterV2DataRetentionDeletionEvent[];
    description?: string | null;
    discoveredWorkload?: Schema$GoogleCloudSecuritycenterV2DiscoveredWorkload;
    disk?: Schema$GoogleCloudSecuritycenterV2Disk;
    eventTime?: string | null;
    exfiltration?: Schema$GoogleCloudSecuritycenterV2Exfiltration;
    externalExposure?: Schema$GoogleCloudSecuritycenterV2ExternalExposure;
    externalSystems?: {
      [key: string]: Schema$GoogleCloudSecuritycenterV2ExternalSystem;
    } | null;
    externalUri?: string | null;
    files?: Schema$GoogleCloudSecuritycenterV2File[];
    findingClass?: string | null;
    groupMemberships?: Schema$GoogleCloudSecuritycenterV2GroupMembership[];
    iamBindings?: Schema$GoogleCloudSecuritycenterV2IamBinding[];
    iamDetails?: Schema$GoogleCloudSecuritycenterV2IamDetails;
    indicator?: Schema$GoogleCloudSecuritycenterV2Indicator;
    ipRules?: Schema$GoogleCloudSecuritycenterV2IpRules;
    job?: Schema$GoogleCloudSecuritycenterV2Job;
    kernelRootkit?: Schema$GoogleCloudSecuritycenterV2KernelRootkit;
    kubernetes?: Schema$GoogleCloudSecuritycenterV2Kubernetes;
    loadBalancers?: Schema$GoogleCloudSecuritycenterV2LoadBalancer[];
    logEntries?: Schema$GoogleCloudSecuritycenterV2LogEntry[];
    mitreAttack?: Schema$GoogleCloudSecuritycenterV2MitreAttack;
    moduleName?: string | null;
    mute?: string | null;
    muteInfo?: Schema$GoogleCloudSecuritycenterV2MuteInfo;
    muteInitiator?: string | null;
    muteUpdateTime?: string | null;
    name?: string | null;
    networks?: Schema$GoogleCloudSecuritycenterV2Network[];
    nextSteps?: string | null;
    notebook?: Schema$GoogleCloudSecuritycenterV2Notebook;
    orgPolicies?: Schema$GoogleCloudSecuritycenterV2OrgPolicy[];
    parent?: string | null;
    parentDisplayName?: string | null;
    policyViolationSummary?: Schema$GoogleCloudSecuritycenterV2PolicyViolationSummary;
    processes?: Schema$GoogleCloudSecuritycenterV2Process[];
    resourceName?: string | null;
    secret?: Schema$GoogleCloudSecuritycenterV2Secret;
    securityMarks?: Schema$GoogleCloudSecuritycenterV2SecurityMarks;
    securityPosture?: Schema$GoogleCloudSecuritycenterV2SecurityPosture;
    severity?: string | null;
    sourceProperties?: {[key: string]: any} | null;
    state?: string | null;
    toxicCombination?: Schema$GoogleCloudSecuritycenterV2ToxicCombination;
    vertexAi?: Schema$GoogleCloudSecuritycenterV2VertexAi;
    vulnerability?: Schema$GoogleCloudSecuritycenterV2Vulnerability;
  }
  export interface Schema$GoogleCloudSecuritycenterV2Folder {
    resourceFolder?: string | null;
    resourceFolderDisplayName?: string | null;
  }
  export interface Schema$GoogleCloudSecuritycenterV2Framework {
    category?: string[] | null;
    controls?: Schema$GoogleCloudSecuritycenterV2Control[];
    displayName?: string | null;
    name?: string | null;
    type?: string | null;
  }
  export interface Schema$GoogleCloudSecuritycenterV2Geolocation {
    regionCode?: string | null;
  }
  export interface Schema$GoogleCloudSecuritycenterV2GroupMembership {
    groupId?: string | null;
    groupType?: string | null;
  }
  export interface Schema$GoogleCloudSecuritycenterV2HttpResponse {
    path?: string | null;
    statusCode?: string | null;
  }
  export interface Schema$GoogleCloudSecuritycenterV2IamBinding {
    action?: string | null;
    member?: string | null;
    role?: string | null;
  }
  export interface Schema$GoogleCloudSecuritycenterV2IamDetails {
    iamRolePermissions?: Schema$GoogleCloudSecuritycenterV2IamRolePermission[];
  }
  export interface Schema$GoogleCloudSecuritycenterV2IamRolePermission {
    name?: string | null;
    role?: string | null;
  }
  export interface Schema$GoogleCloudSecuritycenterV2Indicator {
    domains?: string[] | null;
    ipAddresses?: string[] | null;
    signatures?: Schema$GoogleCloudSecuritycenterV2ProcessSignature[];
    uris?: string[] | null;
  }
  export interface Schema$GoogleCloudSecuritycenterV2InfoType {
    name?: string | null;
    sensitivityScore?: Schema$GoogleCloudSecuritycenterV2SensitivityScore;
    version?: string | null;
  }
  export interface Schema$GoogleCloudSecuritycenterV2InvocationReference {
    invocationId?: string | null;
  }
  export interface Schema$GoogleCloudSecuritycenterV2IpRule {
    portRanges?: Schema$GoogleCloudSecuritycenterV2PortRange[];
    protocol?: string | null;
  }
  export interface Schema$GoogleCloudSecuritycenterV2IpRules {
    allowed?: Schema$GoogleCloudSecuritycenterV2Allowed;
    denied?: Schema$GoogleCloudSecuritycenterV2Denied;
    destinationIpRanges?: string[] | null;
    direction?: string | null;
    exposedServices?: string[] | null;
    sourceIpRanges?: string[] | null;
  }
  export interface Schema$GoogleCloudSecuritycenterV2Issue {
    createTime?: string | null;
    description?: string | null;
    detection?: string | null;
    domains?: Schema$GoogleCloudSecuritycenterV2IssueDomain[];
    exposureScore?: number | null;
    issueType?: string | null;
    lastObservationTime?: string | null;
    mute?: Schema$GoogleCloudSecuritycenterV2IssueMute;
    name?: string | null;
    primaryResource?: Schema$GoogleCloudSecuritycenterV2IssueResource;
    relatedFindings?: Schema$GoogleCloudSecuritycenterV2IssueFinding[];
    remediations?: string[] | null;
    secondaryResources?: Schema$GoogleCloudSecuritycenterV2IssueResource[];
    securityContexts?: Schema$GoogleCloudSecuritycenterV2IssueSecurityContext[];
    severity?: string | null;
    state?: string | null;
    updateTime?: string | null;
  }
  export interface Schema$GoogleCloudSecuritycenterV2IssueDomain {
    domainCategory?: string | null;
  }
  export interface Schema$GoogleCloudSecuritycenterV2IssueFinding {
    cve?: Schema$GoogleCloudSecuritycenterV2IssueFindingCve;
    name?: string | null;
    securityBulletin?: Schema$GoogleCloudSecuritycenterV2IssueFindingSecurityBulletin;
  }
  export interface Schema$GoogleCloudSecuritycenterV2IssueFindingCve {
    name?: string | null;
  }
  export interface Schema$GoogleCloudSecuritycenterV2IssueFindingSecurityBulletin {
    name?: string | null;
  }
  export interface Schema$GoogleCloudSecuritycenterV2IssueMute {
    muteInitiator?: string | null;
    muteReason?: string | null;
    muteState?: string | null;
    muteUpdateTime?: string | null;
  }
  export interface Schema$GoogleCloudSecuritycenterV2IssueResource {
    adcApplication?: Schema$GoogleCloudSecuritycenterV2IssueResourceAdcApplication;
    adcApplicationTemplate?: Schema$GoogleCloudSecuritycenterV2IssueResourceAdcApplicationTemplateRevision;
    adcSharedTemplate?: Schema$GoogleCloudSecuritycenterV2IssueResourceAdcSharedTemplateRevision;
    application?: Schema$GoogleCloudSecuritycenterV2IssueResourceApplication;
    awsMetadata?: Schema$GoogleCloudSecuritycenterV2IssueResourceAwsMetadata;
    azureMetadata?: Schema$GoogleCloudSecuritycenterV2IssueResourceAzureMetadata;
    cloudProvider?: string | null;
    displayName?: string | null;
    googleCloudMetadata?: Schema$GoogleCloudSecuritycenterV2IssueResourceGoogleCloudMetadata;
    name?: string | null;
    type?: string | null;
  }
  export interface Schema$GoogleCloudSecuritycenterV2IssueResourceAdcApplication {
    attributes?: Schema$GoogleCloudSecuritycenterV2IssueResourceApplicationAttributes;
    name?: string | null;
  }
  export interface Schema$GoogleCloudSecuritycenterV2IssueResourceAdcApplicationTemplateRevision {
    name?: string | null;
  }
  export interface Schema$GoogleCloudSecuritycenterV2IssueResourceAdcSharedTemplateRevision {
    name?: string | null;
  }
  export interface Schema$GoogleCloudSecuritycenterV2IssueResourceApplication {
    attributes?: Schema$GoogleCloudSecuritycenterV2IssueResourceApplicationAttributes;
    name?: string | null;
  }
  export interface Schema$GoogleCloudSecuritycenterV2IssueResourceApplicationAttributes {
    businessOwners?: Schema$GoogleCloudSecuritycenterV2IssueResourceApplicationAttributesContactInfo[];
    criticality?: Schema$GoogleCloudSecuritycenterV2IssueResourceApplicationAttributesCriticality;
    developerOwners?: Schema$GoogleCloudSecuritycenterV2IssueResourceApplicationAttributesContactInfo[];
    environment?: Schema$GoogleCloudSecuritycenterV2IssueResourceApplicationAttributesEnvironment;
    operatorOwners?: Schema$GoogleCloudSecuritycenterV2IssueResourceApplicationAttributesContactInfo[];
  }
  export interface Schema$GoogleCloudSecuritycenterV2IssueResourceApplicationAttributesContactInfo {
    email?: string | null;
  }
  export interface Schema$GoogleCloudSecuritycenterV2IssueResourceApplicationAttributesCriticality {
    type?: string | null;
  }
  export interface Schema$GoogleCloudSecuritycenterV2IssueResourceApplicationAttributesEnvironment {
    type?: string | null;
  }
  export interface Schema$GoogleCloudSecuritycenterV2IssueResourceAwsMetadata {
    account?: Schema$GoogleCloudSecuritycenterV2IssueResourceAwsMetadataAwsAccount;
  }
  export interface Schema$GoogleCloudSecuritycenterV2IssueResourceAwsMetadataAwsAccount {
    id?: string | null;
    name?: string | null;
  }
  export interface Schema$GoogleCloudSecuritycenterV2IssueResourceAzureMetadata {
    subscription?: Schema$GoogleCloudSecuritycenterV2IssueResourceAzureMetadataAzureSubscription;
  }
  export interface Schema$GoogleCloudSecuritycenterV2IssueResourceAzureMetadataAzureSubscription {
    displayName?: string | null;
    id?: string | null;
  }
  export interface Schema$GoogleCloudSecuritycenterV2IssueResourceGoogleCloudMetadata {
    projectId?: string | null;
  }
  export interface Schema$GoogleCloudSecuritycenterV2IssueSecurityContext {
    aggregatedCount?: Schema$GoogleCloudSecuritycenterV2IssueSecurityContextAggregatedCount;
    context?: Schema$GoogleCloudSecuritycenterV2IssueSecurityContextContext;
  }
  export interface Schema$GoogleCloudSecuritycenterV2IssueSecurityContextAggregatedCount {
    key?: string | null;
    value?: number | null;
  }
  export interface Schema$GoogleCloudSecuritycenterV2IssueSecurityContextContext {
    type?: string | null;
    values?: string[] | null;
  }
  export interface Schema$GoogleCloudSecuritycenterV2Job {
    errorCode?: number | null;
    location?: string | null;
    name?: string | null;
    state?: string | null;
  }
  export interface Schema$GoogleCloudSecuritycenterV2KernelRootkit {
    name?: string | null;
    unexpectedCodeModification?: boolean | null;
    unexpectedFtraceHandler?: boolean | null;
    unexpectedInterruptHandler?: boolean | null;
    unexpectedKernelCodePages?: boolean | null;
    unexpectedKprobeHandler?: boolean | null;
    unexpectedProcessesInRunqueue?: boolean | null;
    unexpectedReadOnlyDataModification?: boolean | null;
    unexpectedSystemCallHandler?: boolean | null;
  }
  export interface Schema$GoogleCloudSecuritycenterV2Kubernetes {
    accessReviews?: Schema$GoogleCloudSecuritycenterV2AccessReview[];
    bindings?: Schema$GoogleCloudSecuritycenterV2Binding[];
    nodePools?: Schema$GoogleCloudSecuritycenterV2NodePool[];
    nodes?: Schema$GoogleCloudSecuritycenterV2Node[];
    objects?: Schema$GoogleCloudSecuritycenterV2Object[];
    pods?: Schema$GoogleCloudSecuritycenterV2Pod[];
    roles?: Schema$GoogleCloudSecuritycenterV2Role[];
  }
  export interface Schema$GoogleCloudSecuritycenterV2Label {
    name?: string | null;
    value?: string | null;
  }
  export interface Schema$GoogleCloudSecuritycenterV2LoadBalancer {
    name?: string | null;
  }
  export interface Schema$GoogleCloudSecuritycenterV2LogEntry {
    cloudLoggingEntry?: Schema$GoogleCloudSecuritycenterV2CloudLoggingEntry;
  }
  export interface Schema$GoogleCloudSecuritycenterV2MemoryHashSignature {
    binaryFamily?: string | null;
    detections?: Schema$GoogleCloudSecuritycenterV2Detection[];
  }
  export interface Schema$GoogleCloudSecuritycenterV2MitreAttack {
    additionalTactics?: string[] | null;
    additionalTechniques?: string[] | null;
    primaryTactic?: string | null;
    primaryTechniques?: string[] | null;
    version?: string | null;
  }
  export interface Schema$GoogleCloudSecuritycenterV2MuteConfig {
    createTime?: string | null;
    cryptoKeyName?: string | null;
    description?: string | null;
    expiryTime?: string | null;
    filter?: string | null;
    mostRecentEditor?: string | null;
    name?: string | null;
    type?: string | null;
    updateTime?: string | null;
  }
  export interface Schema$GoogleCloudSecuritycenterV2MuteInfo {
    dynamicMuteRecords?: Schema$GoogleCloudSecuritycenterV2DynamicMuteRecord[];
    staticMute?: Schema$GoogleCloudSecuritycenterV2StaticMute;
  }
  export interface Schema$GoogleCloudSecuritycenterV2Network {
    name?: string | null;
  }
  export interface Schema$GoogleCloudSecuritycenterV2Node {
    name?: string | null;
  }
  export interface Schema$GoogleCloudSecuritycenterV2NodePool {
    name?: string | null;
    nodes?: Schema$GoogleCloudSecuritycenterV2Node[];
  }
  export interface Schema$GoogleCloudSecuritycenterV2Notebook {
    lastAuthor?: string | null;
    name?: string | null;
    notebookUpdateTime?: string | null;
    service?: string | null;
  }
  export interface Schema$GoogleCloudSecuritycenterV2NotificationMessage {
    finding?: Schema$GoogleCloudSecuritycenterV2Finding;
    notificationConfigName?: string | null;
    resource?: Schema$GoogleCloudSecuritycenterV2Resource;
  }
  export interface Schema$GoogleCloudSecuritycenterV2Object {
    containers?: Schema$GoogleCloudSecuritycenterV2Container[];
    group?: string | null;
    kind?: string | null;
    name?: string | null;
    ns?: string | null;
  }
  export interface Schema$GoogleCloudSecuritycenterV2OrgPolicy {
    name?: string | null;
  }
  export interface Schema$GoogleCloudSecuritycenterV2Package {
    cpeUri?: string | null;
    packageName?: string | null;
    packageType?: string | null;
    packageVersion?: string | null;
  }
  export interface Schema$GoogleCloudSecuritycenterV2Pipeline {
    displayName?: string | null;
    name?: string | null;
  }
  export interface Schema$GoogleCloudSecuritycenterV2Pod {
    containers?: Schema$GoogleCloudSecuritycenterV2Container[];
    labels?: Schema$GoogleCloudSecuritycenterV2Label[];
    name?: string | null;
    ns?: string | null;
  }
  export interface Schema$GoogleCloudSecuritycenterV2PolicyDriftDetails {
    detectedValue?: string | null;
    expectedValue?: string | null;
    field?: string | null;
  }
  export interface Schema$GoogleCloudSecuritycenterV2PolicyViolationSummary {
    conformantResourcesCount?: string | null;
    evaluationErrorsCount?: string | null;
    outOfScopeResourcesCount?: string | null;
    policyViolationsCount?: string | null;
  }
  export interface Schema$GoogleCloudSecuritycenterV2PortRange {
    max?: string | null;
    min?: string | null;
  }
  export interface Schema$GoogleCloudSecuritycenterV2Process {
    args?: string[] | null;
    argumentsTruncated?: boolean | null;
    binary?: Schema$GoogleCloudSecuritycenterV2File;
    envVariables?: Schema$GoogleCloudSecuritycenterV2EnvironmentVariable[];
    envVariablesTruncated?: boolean | null;
    libraries?: Schema$GoogleCloudSecuritycenterV2File[];
    name?: string | null;
    parentPid?: string | null;
    pid?: string | null;
    script?: Schema$GoogleCloudSecuritycenterV2File;
    userId?: string | null;
  }
  export interface Schema$GoogleCloudSecuritycenterV2ProcessSignature {
    memoryHashSignature?: Schema$GoogleCloudSecuritycenterV2MemoryHashSignature;
    signatureType?: string | null;
    yaraRuleSignature?: Schema$GoogleCloudSecuritycenterV2YaraRuleSignature;
  }
  export interface Schema$GoogleCloudSecuritycenterV2Reference {
    source?: string | null;
    uri?: string | null;
  }
  export interface Schema$GoogleCloudSecuritycenterV2Requests {
    longTermAllowed?: number | null;
    longTermDenied?: number | null;
    ratio?: number | null;
    shortTermAllowed?: number | null;
  }
  export interface Schema$GoogleCloudSecuritycenterV2Resource {
    adcApplication?: Schema$GoogleCloudSecuritycenterV2AdcApplication;
    adcApplicationTemplate?: Schema$GoogleCloudSecuritycenterV2AdcApplicationTemplateRevision;
    adcSharedTemplate?: Schema$GoogleCloudSecuritycenterV2AdcSharedTemplateRevision;
    application?: Schema$GoogleCloudSecuritycenterV2ResourceApplication;
    awsMetadata?: Schema$GoogleCloudSecuritycenterV2AwsMetadata;
    azureMetadata?: Schema$GoogleCloudSecuritycenterV2AzureMetadata;
    cloudProvider?: string | null;
    displayName?: string | null;
    gcpMetadata?: Schema$GcpMetadata;
    location?: string | null;
    name?: string | null;
    resourcePath?: Schema$GoogleCloudSecuritycenterV2ResourcePath;
    resourcePathString?: string | null;
    service?: string | null;
    type?: string | null;
  }
  export interface Schema$GoogleCloudSecuritycenterV2ResourceApplication {
    attributes?: Schema$GoogleCloudSecuritycenterV2ResourceApplicationAttributes;
    name?: string | null;
  }
  export interface Schema$GoogleCloudSecuritycenterV2ResourceApplicationAttributes {
    businessOwners?: Schema$GoogleCloudSecuritycenterV2ResourceApplicationAttributesContactInfo[];
    criticality?: Schema$GoogleCloudSecuritycenterV2ResourceApplicationAttributesCriticality;
    developerOwners?: Schema$GoogleCloudSecuritycenterV2ResourceApplicationAttributesContactInfo[];
    environment?: Schema$GoogleCloudSecuritycenterV2ResourceApplicationAttributesEnvironment;
    operatorOwners?: Schema$GoogleCloudSecuritycenterV2ResourceApplicationAttributesContactInfo[];
  }
  export interface Schema$GoogleCloudSecuritycenterV2ResourceApplicationAttributesContactInfo {
    email?: string | null;
  }
  export interface Schema$GoogleCloudSecuritycenterV2ResourceApplicationAttributesCriticality {
    type?: string | null;
  }
  export interface Schema$GoogleCloudSecuritycenterV2ResourceApplicationAttributesEnvironment {
    type?: string | null;
  }
  export interface Schema$GoogleCloudSecuritycenterV2ResourcePath {
    nodes?: Schema$GoogleCloudSecuritycenterV2ResourcePathNode[];
  }
  export interface Schema$GoogleCloudSecuritycenterV2ResourcePathNode {
    displayName?: string | null;
    id?: string | null;
    nodeType?: string | null;
  }
  export interface Schema$GoogleCloudSecuritycenterV2ResourceValueConfig {
    cloudProvider?: string | null;
    createTime?: string | null;
    description?: string | null;
    name?: string | null;
    resourceLabelsSelector?: {[key: string]: string} | null;
    resourceType?: string | null;
    resourceValue?: string | null;
    scope?: string | null;
    sensitiveDataProtectionMapping?: Schema$GoogleCloudSecuritycenterV2SensitiveDataProtectionMapping;
    tagValues?: string[] | null;
    updateTime?: string | null;
  }
  export interface Schema$GoogleCloudSecuritycenterV2Role {
    kind?: string | null;
    name?: string | null;
    ns?: string | null;
  }
  export interface Schema$GoogleCloudSecuritycenterV2Secret {
    environmentVariable?: Schema$GoogleCloudSecuritycenterV2SecretEnvironmentVariable;
    filePath?: Schema$GoogleCloudSecuritycenterV2SecretFilePath;
    status?: Schema$GoogleCloudSecuritycenterV2SecretStatus;
    type?: string | null;
  }
  export interface Schema$GoogleCloudSecuritycenterV2SecretEnvironmentVariable {
    key?: string | null;
  }
  export interface Schema$GoogleCloudSecuritycenterV2SecretFilePath {
    path?: string | null;
  }
  export interface Schema$GoogleCloudSecuritycenterV2SecretStatus {
    lastUpdatedTime?: string | null;
    validity?: string | null;
  }
  export interface Schema$GoogleCloudSecuritycenterV2SecurityBulletin {
    bulletinId?: string | null;
    submissionTime?: string | null;
    suggestedUpgradeVersion?: string | null;
  }
  export interface Schema$GoogleCloudSecuritycenterV2SecurityMarks {
    canonicalName?: string | null;
    marks?: {[key: string]: string} | null;
    name?: string | null;
  }
  export interface Schema$GoogleCloudSecuritycenterV2SecurityPolicy {
    name?: string | null;
    preview?: boolean | null;
    type?: string | null;
  }
  export interface Schema$GoogleCloudSecuritycenterV2SecurityPosture {
    changedPolicy?: string | null;
    name?: string | null;
    policy?: string | null;
    policyDriftDetails?: Schema$GoogleCloudSecuritycenterV2PolicyDriftDetails[];
    policySet?: string | null;
    postureDeployment?: string | null;
    postureDeploymentResource?: string | null;
    revisionId?: string | null;
  }
  export interface Schema$GoogleCloudSecuritycenterV2SensitiveDataProtectionMapping {
    highSensitivityMapping?: string | null;
    mediumSensitivityMapping?: string | null;
  }
  export interface Schema$GoogleCloudSecuritycenterV2SensitivityScore {
    score?: string | null;
  }
  export interface Schema$GoogleCloudSecuritycenterV2ServiceAccountDelegationInfo {
    principalEmail?: string | null;
    principalSubject?: string | null;
  }
  export interface Schema$GoogleCloudSecuritycenterV2StaticMute {
    applyTime?: string | null;
    state?: string | null;
  }
  export interface Schema$GoogleCloudSecuritycenterV2Subject {
    kind?: string | null;
    name?: string | null;
    ns?: string | null;
  }
  export interface Schema$GoogleCloudSecuritycenterV2TicketInfo {
    assignee?: string | null;
    description?: string | null;
    id?: string | null;
    status?: string | null;
    updateTime?: string | null;
    uri?: string | null;
  }
  export interface Schema$GoogleCloudSecuritycenterV2ToxicCombination {
    attackExposureScore?: number | null;
    relatedFindings?: string[] | null;
  }
  export interface Schema$GoogleCloudSecuritycenterV2VertexAi {
    datasets?: Schema$GoogleCloudSecuritycenterV2Dataset[];
    pipelines?: Schema$GoogleCloudSecuritycenterV2Pipeline[];
  }
  export interface Schema$GoogleCloudSecuritycenterV2Vulnerability {
    cve?: Schema$GoogleCloudSecuritycenterV2Cve;
    cwes?: Schema$GoogleCloudSecuritycenterV2Cwe[];
    fixedPackage?: Schema$GoogleCloudSecuritycenterV2Package;
    offendingPackage?: Schema$GoogleCloudSecuritycenterV2Package;
    providerRiskScore?: string | null;
    reachable?: boolean | null;
    securityBulletin?: Schema$GoogleCloudSecuritycenterV2SecurityBulletin;
  }
  export interface Schema$GoogleCloudSecuritycenterV2YaraRuleSignature {
    yaraRule?: string | null;
  }
  export interface Schema$GroupAssetsRequest {
    compareDuration?: string | null;
    filter?: string | null;
    groupBy?: string | null;
    pageSize?: number | null;
    pageToken?: string | null;
    readTime?: string | null;
  }
  export interface Schema$GroupAssetsResponse {
    groupByResults?: Schema$GroupResult[];
    nextPageToken?: string | null;
    readTime?: string | null;
  }
  export interface Schema$GroupFindingsRequest {
    filter?: string | null;
    groupBy?: string | null;
    pageSize?: number | null;
    pageToken?: string | null;
    readTime?: string | null;
  }
  export interface Schema$GroupFindingsResponse {
    groupByResults?: Schema$GroupResult[];
    nextPageToken?: string | null;
    readTime?: string | null;
  }
  export interface Schema$GroupMembership {
    groupId?: string | null;
    groupType?: string | null;
  }
  export interface Schema$GroupResult {
    count?: string | null;
    properties?: {[key: string]: any} | null;
  }
  export interface Schema$HttpResponse {
    path?: string | null;
    statusCode?: string | null;
  }
  export interface Schema$IamBinding {
    action?: string | null;
    member?: string | null;
    role?: string | null;
  }
  export interface Schema$Indicator {
    domains?: string[] | null;
    ipAddresses?: string[] | null;
    signatures?: Schema$ProcessSignature[];
    uris?: string[] | null;
  }
  export interface Schema$InfoType {
    name?: string | null;
    sensitivityScore?: Schema$SensitivityScore;
    version?: string | null;
  }
  export interface Schema$InvocationReference {
    invocationId?: string | null;
  }
  export interface Schema$IpRule {
    portRanges?: Schema$PortRange[];
    protocol?: string | null;
  }
  export interface Schema$IpRules {
    allowed?: Schema$Allowed;
    denied?: Schema$Denied;
    destinationIpRanges?: string[] | null;
    direction?: string | null;
    exposedServices?: string[] | null;
    sourceIpRanges?: string[] | null;
  }
  export interface Schema$Job {
    errorCode?: number | null;
    location?: string | null;
    name?: string | null;
    state?: string | null;
  }
  export interface Schema$KernelRootkit {
    name?: string | null;
    unexpectedCodeModification?: boolean | null;
    unexpectedFtraceHandler?: boolean | null;
    unexpectedInterruptHandler?: boolean | null;
    unexpectedKernelCodePages?: boolean | null;
    unexpectedKprobeHandler?: boolean | null;
    unexpectedProcessesInRunqueue?: boolean | null;
    unexpectedReadOnlyDataModification?: boolean | null;
    unexpectedSystemCallHandler?: boolean | null;
  }
  export interface Schema$Kubernetes {
    accessReviews?: Schema$AccessReview[];
    bindings?: Schema$GoogleCloudSecuritycenterV1Binding[];
    nodePools?: Schema$NodePool[];
    nodes?: Schema$Node[];
    objects?: Schema$Object[];
    pods?: Schema$Pod[];
    roles?: Schema$Role[];
  }
  export interface Schema$Label {
    name?: string | null;
    value?: string | null;
  }
  export interface Schema$ListAssetsResponse {
    listAssetsResults?: Schema$ListAssetsResult[];
    nextPageToken?: string | null;
    readTime?: string | null;
    totalSize?: number | null;
  }
  export interface Schema$ListAssetsResult {
    asset?: Schema$Asset;
    state?: string | null;
  }
  export interface Schema$ListFindingsResponse {
    findings?: Schema$GoogleCloudSecuritycenterV1beta1Finding[];
    nextPageToken?: string | null;
    readTime?: string | null;
    totalSize?: number | null;
  }
  export interface Schema$ListOperationsResponse {
    nextPageToken?: string | null;
    operations?: Schema$Operation[];
    unreachable?: string[] | null;
  }
  export interface Schema$ListSourcesResponse {
    nextPageToken?: string | null;
    sources?: Schema$Source[];
  }
  export interface Schema$LoadBalancer {
    name?: string | null;
  }
  export interface Schema$LogEntry {
    cloudLoggingEntry?: Schema$CloudLoggingEntry;
  }
  export interface Schema$MemoryHashSignature {
    binaryFamily?: string | null;
    detections?: Schema$Detection[];
  }
  export interface Schema$MitreAttack {
    additionalTactics?: string[] | null;
    additionalTechniques?: string[] | null;
    primaryTactic?: string | null;
    primaryTechniques?: string[] | null;
    version?: string | null;
  }
  export interface Schema$MuteInfo {
    dynamicMuteRecords?: Schema$DynamicMuteRecord[];
    staticMute?: Schema$StaticMute;
  }
  export interface Schema$Network {
    name?: string | null;
  }
  export interface Schema$Node {
    name?: string | null;
  }
  export interface Schema$NodePool {
    name?: string | null;
    nodes?: Schema$Node[];
  }
  export interface Schema$Notebook {
    lastAuthor?: string | null;
    name?: string | null;
    notebookUpdateTime?: string | null;
    service?: string | null;
  }
  export interface Schema$Object {
    containers?: Schema$Container[];
    group?: string | null;
    kind?: string | null;
    name?: string | null;
    ns?: string | null;
  }
  export interface Schema$Operation {
    done?: boolean | null;
    error?: Schema$Status;
    metadata?: {[key: string]: any} | null;
    name?: string | null;
    response?: {[key: string]: any} | null;
  }
  export interface Schema$OrganizationSettings {
    assetDiscoveryConfig?: Schema$AssetDiscoveryConfig;
    enableAssetDiscovery?: boolean | null;
    name?: string | null;
  }
  export interface Schema$OrgPolicy {
    name?: string | null;
  }
  export interface Schema$Package {
    cpeUri?: string | null;
    packageName?: string | null;
    packageType?: string | null;
    packageVersion?: string | null;
  }
  export interface Schema$Pipeline {
    displayName?: string | null;
    name?: string | null;
  }
  export interface Schema$Pod {
    containers?: Schema$Container[];
    labels?: Schema$Label[];
    name?: string | null;
    ns?: string | null;
  }
  export interface Schema$Policy {
    auditConfigs?: Schema$AuditConfig[];
    bindings?: Schema$Binding[];
    etag?: string | null;
    version?: number | null;
  }
  export interface Schema$PolicyDriftDetails {
    detectedValue?: string | null;
    expectedValue?: string | null;
    field?: string | null;
  }
  export interface Schema$PolicyViolationSummary {
    conformantResourcesCount?: string | null;
    evaluationErrorsCount?: string | null;
    outOfScopeResourcesCount?: string | null;
    policyViolationsCount?: string | null;
  }
  export interface Schema$PortRange {
    max?: string | null;
    min?: string | null;
  }
  export interface Schema$Process {
    args?: string[] | null;
    argumentsTruncated?: boolean | null;
    binary?: Schema$File;
    envVariables?: Schema$EnvironmentVariable[];
    envVariablesTruncated?: boolean | null;
    libraries?: Schema$File[];
    name?: string | null;
    parentPid?: string | null;
    pid?: string | null;
    script?: Schema$File;
    userId?: string | null;
  }
  export interface Schema$ProcessSignature {
    memoryHashSignature?: Schema$MemoryHashSignature;
    signatureType?: string | null;
    yaraRuleSignature?: Schema$YaraRuleSignature;
  }
  export interface Schema$Reference {
    source?: string | null;
    uri?: string | null;
  }
  export interface Schema$Requests {
    longTermAllowed?: number | null;
    longTermDenied?: number | null;
    ratio?: number | null;
    shortTermAllowed?: number | null;
  }
  export interface Schema$ResourcePath {
    nodes?: Schema$ResourcePathNode[];
  }
  export interface Schema$ResourcePathNode {
    displayName?: string | null;
    id?: string | null;
    nodeType?: string | null;
  }
  export interface Schema$Role {
    kind?: string | null;
    name?: string | null;
    ns?: string | null;
  }
  export interface Schema$RunAssetDiscoveryRequest {}
  export interface Schema$Secret {
    environmentVariable?: Schema$SecretEnvironmentVariable;
    filePath?: Schema$SecretFilePath;
    status?: Schema$SecretStatus;
    type?: string | null;
  }
  export interface Schema$SecretEnvironmentVariable {
    key?: string | null;
  }
  export interface Schema$SecretFilePath {
    path?: string | null;
  }
  export interface Schema$SecretStatus {
    lastUpdatedTime?: string | null;
    validity?: string | null;
  }
  export interface Schema$SecurityBulletin {
    bulletinId?: string | null;
    submissionTime?: string | null;
    suggestedUpgradeVersion?: string | null;
  }
  export interface Schema$SecurityCenterProperties {
    resourceName?: string | null;
    resourceOwners?: string[] | null;
    resourceParent?: string | null;
    resourceProject?: string | null;
    resourceType?: string | null;
  }
  export interface Schema$SecurityMarks {
    canonicalName?: string | null;
    marks?: {[key: string]: string} | null;
    name?: string | null;
  }
  export interface Schema$SecurityPolicy {
    name?: string | null;
    preview?: boolean | null;
    type?: string | null;
  }
  export interface Schema$SecurityPosture {
    changedPolicy?: string | null;
    name?: string | null;
    policy?: string | null;
    policyDriftDetails?: Schema$PolicyDriftDetails[];
    policySet?: string | null;
    postureDeployment?: string | null;
    postureDeploymentResource?: string | null;
    revisionId?: string | null;
  }
  export interface Schema$SensitivityScore {
    score?: string | null;
  }
  export interface Schema$ServiceAccountDelegationInfo {
    principalEmail?: string | null;
    principalSubject?: string | null;
  }
  export interface Schema$SetFindingStateRequest {
    startTime?: string | null;
    state?: string | null;
  }
  export interface Schema$SetIamPolicyRequest {
    policy?: Schema$Policy;
    updateMask?: string | null;
  }
  export interface Schema$Source {
    description?: string | null;
    displayName?: string | null;
    name?: string | null;
  }
  export interface Schema$StaticMute {
    applyTime?: string | null;
    state?: string | null;
  }
  export interface Schema$Status {
    code?: number | null;
    details?: Array<{[key: string]: any}> | null;
    message?: string | null;
  }
  export interface Schema$Subject {
    kind?: string | null;
    name?: string | null;
    ns?: string | null;
  }
  export interface Schema$TestIamPermissionsRequest {
    permissions?: string[] | null;
  }
  export interface Schema$TestIamPermissionsResponse {
    permissions?: string[] | null;
  }
  export interface Schema$TicketInfo {
    assignee?: string | null;
    description?: string | null;
    id?: string | null;
    status?: string | null;
    updateTime?: string | null;
    uri?: string | null;
  }
  export interface Schema$ToxicCombination {
    attackExposureScore?: number | null;
    relatedFindings?: string[] | null;
  }
  export interface Schema$VertexAi {
    datasets?: Schema$Dataset[];
    pipelines?: Schema$Pipeline[];
  }
  export interface Schema$Vulnerability {
    cve?: Schema$Cve;
    cwes?: Schema$Cwe[];
    fixedPackage?: Schema$Package;
    offendingPackage?: Schema$Package;
    providerRiskScore?: string | null;
    reachable?: boolean | null;
    securityBulletin?: Schema$SecurityBulletin;
  }
  export interface Schema$VulnerabilityCountBySeverity {
    severityToFindingCount?: {[key: string]: string} | null;
  }
  export interface Schema$VulnerabilitySnapshot {
    cloudProvider?: string | null;
    findingCount?: Schema$VulnerabilityCountBySeverity;
    name?: string | null;
    snapshotTime?: string | null;
  }
  export interface Schema$YaraRuleSignature {
    yaraRule?: string | null;
  }

  export class Resource$Organizations {
    context: APIRequestContext;
    assets: Resource$Organizations$Assets;
    operations: Resource$Organizations$Operations;
    sources: Resource$Organizations$Sources;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.assets = new Resource$Organizations$Assets(this.context);
      this.operations = new Resource$Organizations$Operations(this.context);
      this.sources = new Resource$Organizations$Sources(this.context);
    }

    /**
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/securitycenter.googleapis.com
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
     * const securitycenter = google.securitycenter('v1beta1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/cloud-platform',
     *       'https://www.googleapis.com/auth/securitycenter',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await securitycenter.organizations.getOrganizationSettings({
     *     name: 'organizations/my-organization/organizationSettings',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "assetDiscoveryConfig": {},
     *   //   "enableAssetDiscovery": false,
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
    getOrganizationSettings(
      params: Params$Resource$Organizations$Getorganizationsettings,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    getOrganizationSettings(
      params?: Params$Resource$Organizations$Getorganizationsettings,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$OrganizationSettings>>;
    getOrganizationSettings(
      params: Params$Resource$Organizations$Getorganizationsettings,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    getOrganizationSettings(
      params: Params$Resource$Organizations$Getorganizationsettings,
      options:
        MethodOptions | BodyResponseCallback<Schema$OrganizationSettings>,
      callback: BodyResponseCallback<Schema$OrganizationSettings>
    ): void;
    getOrganizationSettings(
      params: Params$Resource$Organizations$Getorganizationsettings,
      callback: BodyResponseCallback<Schema$OrganizationSettings>
    ): void;
    getOrganizationSettings(
      callback: BodyResponseCallback<Schema$OrganizationSettings>
    ): void;
    getOrganizationSettings(
      paramsOrCallback?:
        | Params$Resource$Organizations$Getorganizationsettings
        | BodyResponseCallback<Schema$OrganizationSettings>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$OrganizationSettings>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$OrganizationSettings>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$OrganizationSettings>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Organizations$Getorganizationsettings;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Organizations$Getorganizationsettings;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      if (params.name !== undefined && params.name !== null) {
        validateMultiSegment('name', String(params.name));
        params.name = encodeWithoutSlashes(String(params.name));
      }

      const rootUrl =
        options.rootUrl || 'https://securitycenter.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta1/{+name}')
              .replace(/([^:]\/)\/+/g, '$1')
              .replace(/\{([^+:][^}]*)\}/g, '{+$1}'),
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
        createAPIRequest<Schema$OrganizationSettings>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$OrganizationSettings>(parameters);
      }
    }

    /**
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/securitycenter.googleapis.com
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
     * const securitycenter = google.securitycenter('v1beta1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/cloud-platform',
     *       'https://www.googleapis.com/auth/securitycenter',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await securitycenter.organizations.updateOrganizationSettings({
     *     name: 'organizations/my-organization/organizationSettings',
     *
     *     updateMask: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "assetDiscoveryConfig": {},
     *       //   "enableAssetDiscovery": false,
     *       //   "name": "my_name"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "assetDiscoveryConfig": {},
     *   //   "enableAssetDiscovery": false,
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
    updateOrganizationSettings(
      params: Params$Resource$Organizations$Updateorganizationsettings,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    updateOrganizationSettings(
      params?: Params$Resource$Organizations$Updateorganizationsettings,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$OrganizationSettings>>;
    updateOrganizationSettings(
      params: Params$Resource$Organizations$Updateorganizationsettings,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    updateOrganizationSettings(
      params: Params$Resource$Organizations$Updateorganizationsettings,
      options:
        MethodOptions | BodyResponseCallback<Schema$OrganizationSettings>,
      callback: BodyResponseCallback<Schema$OrganizationSettings>
    ): void;
    updateOrganizationSettings(
      params: Params$Resource$Organizations$Updateorganizationsettings,
      callback: BodyResponseCallback<Schema$OrganizationSettings>
    ): void;
    updateOrganizationSettings(
      callback: BodyResponseCallback<Schema$OrganizationSettings>
    ): void;
    updateOrganizationSettings(
      paramsOrCallback?:
        | Params$Resource$Organizations$Updateorganizationsettings
        | BodyResponseCallback<Schema$OrganizationSettings>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$OrganizationSettings>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$OrganizationSettings>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$OrganizationSettings>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Organizations$Updateorganizationsettings;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Organizations$Updateorganizationsettings;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      if (params.name !== undefined && params.name !== null) {
        validateMultiSegment('name', String(params.name));
        params.name = encodeWithoutSlashes(String(params.name));
      }

      const rootUrl =
        options.rootUrl || 'https://securitycenter.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta1/{+name}')
              .replace(/([^:]\/)\/+/g, '$1')
              .replace(/\{([^+:][^}]*)\}/g, '{+$1}'),
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
        createAPIRequest<Schema$OrganizationSettings>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$OrganizationSettings>(parameters);
      }
    }
  }

  export interface Params$Resource$Organizations$Getorganizationsettings extends StandardParameters {
    /**
     *
     */
    name?: string;
  }
  export interface Params$Resource$Organizations$Updateorganizationsettings extends StandardParameters {
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
    requestBody?: Schema$OrganizationSettings;
  }

  export class Resource$Organizations$Assets {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/securitycenter.googleapis.com
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
     * const securitycenter = google.securitycenter('v1beta1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/cloud-platform',
     *       'https://www.googleapis.com/auth/securitycenter',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await securitycenter.organizations.assets.group({
     *     parent: 'organizations/my-organization',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "compareDuration": "my_compareDuration",
     *       //   "filter": "my_filter",
     *       //   "groupBy": "my_groupBy",
     *       //   "pageSize": 0,
     *       //   "pageToken": "my_pageToken",
     *       //   "readTime": "my_readTime"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "groupByResults": [],
     *   //   "nextPageToken": "my_nextPageToken",
     *   //   "readTime": "my_readTime"
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
    group(
      params: Params$Resource$Organizations$Assets$Group,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    group(
      params?: Params$Resource$Organizations$Assets$Group,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$GroupAssetsResponse>>;
    group(
      params: Params$Resource$Organizations$Assets$Group,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    group(
      params: Params$Resource$Organizations$Assets$Group,
      options: MethodOptions | BodyResponseCallback<Schema$GroupAssetsResponse>,
      callback: BodyResponseCallback<Schema$GroupAssetsResponse>
    ): void;
    group(
      params: Params$Resource$Organizations$Assets$Group,
      callback: BodyResponseCallback<Schema$GroupAssetsResponse>
    ): void;
    group(callback: BodyResponseCallback<Schema$GroupAssetsResponse>): void;
    group(
      paramsOrCallback?:
        | Params$Resource$Organizations$Assets$Group
        | BodyResponseCallback<Schema$GroupAssetsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GroupAssetsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GroupAssetsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$GroupAssetsResponse>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Organizations$Assets$Group;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Organizations$Assets$Group;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      if (params.parent !== undefined && params.parent !== null) {
        validateMultiSegment('parent', String(params.parent));
        params.parent = encodeWithoutSlashes(String(params.parent));
      }

      const rootUrl =
        options.rootUrl || 'https://securitycenter.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta1/{+parent}/assets:group')
              .replace(/([^:]\/)\/+/g, '$1')
              .replace(/\{([^+:][^}]*)\}/g, '{+$1}'),
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
        createAPIRequest<Schema$GroupAssetsResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GroupAssetsResponse>(parameters);
      }
    }

    /**
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/securitycenter.googleapis.com
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
     * const securitycenter = google.securitycenter('v1beta1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/cloud-platform',
     *       'https://www.googleapis.com/auth/securitycenter',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await securitycenter.organizations.assets.list({
     *     compareDuration: 'placeholder-value',
     *
     *     fieldMask: 'placeholder-value',
     *
     *     filter: 'placeholder-value',
     *
     *     orderBy: 'placeholder-value',
     *
     *     pageSize: 'placeholder-value',
     *
     *     pageToken: 'placeholder-value',
     *
     *     parent: 'organizations/my-organization',
     *
     *     readTime: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "listAssetsResults": [],
     *   //   "nextPageToken": "my_nextPageToken",
     *   //   "readTime": "my_readTime",
     *   //   "totalSize": 0
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
      params: Params$Resource$Organizations$Assets$List,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    list(
      params?: Params$Resource$Organizations$Assets$List,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$ListAssetsResponse>>;
    list(
      params: Params$Resource$Organizations$Assets$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Organizations$Assets$List,
      options: MethodOptions | BodyResponseCallback<Schema$ListAssetsResponse>,
      callback: BodyResponseCallback<Schema$ListAssetsResponse>
    ): void;
    list(
      params: Params$Resource$Organizations$Assets$List,
      callback: BodyResponseCallback<Schema$ListAssetsResponse>
    ): void;
    list(callback: BodyResponseCallback<Schema$ListAssetsResponse>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Organizations$Assets$List
        | BodyResponseCallback<Schema$ListAssetsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ListAssetsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ListAssetsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$ListAssetsResponse>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Organizations$Assets$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Organizations$Assets$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      if (params.parent !== undefined && params.parent !== null) {
        validateMultiSegment('parent', String(params.parent));
        params.parent = encodeWithoutSlashes(String(params.parent));
      }

      const rootUrl =
        options.rootUrl || 'https://securitycenter.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta1/{+parent}/assets')
              .replace(/([^:]\/)\/+/g, '$1')
              .replace(/\{([^+:][^}]*)\}/g, '{+$1}'),
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
        createAPIRequest<Schema$ListAssetsResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ListAssetsResponse>(parameters);
      }
    }

    /**
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/securitycenter.googleapis.com
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
     * const securitycenter = google.securitycenter('v1beta1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/cloud-platform',
     *       'https://www.googleapis.com/auth/securitycenter',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await securitycenter.organizations.assets.runDiscovery({
     *     parent: 'organizations/my-organization',
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
    runDiscovery(
      params: Params$Resource$Organizations$Assets$Rundiscovery,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    runDiscovery(
      params?: Params$Resource$Organizations$Assets$Rundiscovery,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Operation>>;
    runDiscovery(
      params: Params$Resource$Organizations$Assets$Rundiscovery,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    runDiscovery(
      params: Params$Resource$Organizations$Assets$Rundiscovery,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    runDiscovery(
      params: Params$Resource$Organizations$Assets$Rundiscovery,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    runDiscovery(callback: BodyResponseCallback<Schema$Operation>): void;
    runDiscovery(
      paramsOrCallback?:
        | Params$Resource$Organizations$Assets$Rundiscovery
        | BodyResponseCallback<Schema$Operation>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Operation>
        | BodyResponseCallback<Readable>,
      callback?:
        BodyResponseCallback<Schema$Operation> | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$Operation>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Organizations$Assets$Rundiscovery;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Organizations$Assets$Rundiscovery;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      if (params.parent !== undefined && params.parent !== null) {
        validateMultiSegment('parent', String(params.parent));
        params.parent = encodeWithoutSlashes(String(params.parent));
      }

      const rootUrl =
        options.rootUrl || 'https://securitycenter.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta1/{+parent}/assets:runDiscovery')
              .replace(/([^:]\/)\/+/g, '$1')
              .replace(/\{([^+:][^}]*)\}/g, '{+$1}'),
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
        createAPIRequest<Schema$Operation>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Operation>(parameters);
      }
    }

    /**
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/securitycenter.googleapis.com
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
     * const securitycenter = google.securitycenter('v1beta1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/cloud-platform',
     *       'https://www.googleapis.com/auth/securitycenter',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await securitycenter.organizations.assets.updateSecurityMarks({
     *     name: 'organizations/my-organization/assets/my-asset/securityMarks',
     *
     *     startTime: 'placeholder-value',
     *
     *     updateMask: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "marks": {},
     *       //   "name": "my_name"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "marks": {},
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
    updateSecurityMarks(
      params: Params$Resource$Organizations$Assets$Updatesecuritymarks,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    updateSecurityMarks(
      params?: Params$Resource$Organizations$Assets$Updatesecuritymarks,
      options?: MethodOptions
    ): Promise<
      GaxiosResponseWithHTTP2<Schema$GoogleCloudSecuritycenterV1beta1SecurityMarks>
    >;
    updateSecurityMarks(
      params: Params$Resource$Organizations$Assets$Updatesecuritymarks,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    updateSecurityMarks(
      params: Params$Resource$Organizations$Assets$Updatesecuritymarks,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleCloudSecuritycenterV1beta1SecurityMarks>,
      callback: BodyResponseCallback<Schema$GoogleCloudSecuritycenterV1beta1SecurityMarks>
    ): void;
    updateSecurityMarks(
      params: Params$Resource$Organizations$Assets$Updatesecuritymarks,
      callback: BodyResponseCallback<Schema$GoogleCloudSecuritycenterV1beta1SecurityMarks>
    ): void;
    updateSecurityMarks(
      callback: BodyResponseCallback<Schema$GoogleCloudSecuritycenterV1beta1SecurityMarks>
    ): void;
    updateSecurityMarks(
      paramsOrCallback?:
        | Params$Resource$Organizations$Assets$Updatesecuritymarks
        | BodyResponseCallback<Schema$GoogleCloudSecuritycenterV1beta1SecurityMarks>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleCloudSecuritycenterV1beta1SecurityMarks>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleCloudSecuritycenterV1beta1SecurityMarks>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<
          GaxiosResponseWithHTTP2<Schema$GoogleCloudSecuritycenterV1beta1SecurityMarks>
        >
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Organizations$Assets$Updatesecuritymarks;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Organizations$Assets$Updatesecuritymarks;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      if (params.name !== undefined && params.name !== null) {
        validateMultiSegment('name', String(params.name));
        params.name = encodeWithoutSlashes(String(params.name));
      }

      const rootUrl =
        options.rootUrl || 'https://securitycenter.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta1/{+name}')
              .replace(/([^:]\/)\/+/g, '$1')
              .replace(/\{([^+:][^}]*)\}/g, '{+$1}'),
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
        createAPIRequest<Schema$GoogleCloudSecuritycenterV1beta1SecurityMarks>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleCloudSecuritycenterV1beta1SecurityMarks>(
          parameters
        );
      }
    }
  }

  export interface Params$Resource$Organizations$Assets$Group extends StandardParameters {
    /**
     *
     */
    parent?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GroupAssetsRequest;
  }
  export interface Params$Resource$Organizations$Assets$List extends StandardParameters {
    /**
     *
     */
    compareDuration?: string;
    /**
     *
     */
    fieldMask?: string;
    /**
     *
     */
    filter?: string;
    /**
     *
     */
    orderBy?: string;
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
    /**
     *
     */
    readTime?: string;
  }
  export interface Params$Resource$Organizations$Assets$Rundiscovery extends StandardParameters {
    /**
     *
     */
    parent?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$RunAssetDiscoveryRequest;
  }
  export interface Params$Resource$Organizations$Assets$Updatesecuritymarks extends StandardParameters {
    /**
     *
     */
    name?: string;
    /**
     *
     */
    startTime?: string;
    /**
     *
     */
    updateMask?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleCloudSecuritycenterV1beta1SecurityMarks;
  }

  export class Resource$Organizations$Operations {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/securitycenter.googleapis.com
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
     * const securitycenter = google.securitycenter('v1beta1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/cloud-platform',
     *       'https://www.googleapis.com/auth/securitycenter',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await securitycenter.organizations.operations.cancel({
     *     name: 'organizations/my-organization/operations/my-operation',
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
      params: Params$Resource$Organizations$Operations$Cancel,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    cancel(
      params?: Params$Resource$Organizations$Operations$Cancel,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Empty>>;
    cancel(
      params: Params$Resource$Organizations$Operations$Cancel,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    cancel(
      params: Params$Resource$Organizations$Operations$Cancel,
      options: MethodOptions | BodyResponseCallback<Schema$Empty>,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    cancel(
      params: Params$Resource$Organizations$Operations$Cancel,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    cancel(callback: BodyResponseCallback<Schema$Empty>): void;
    cancel(
      paramsOrCallback?:
        | Params$Resource$Organizations$Operations$Cancel
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
        {}) as Params$Resource$Organizations$Operations$Cancel;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Organizations$Operations$Cancel;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      if (params.name !== undefined && params.name !== null) {
        validateMultiSegment('name', String(params.name));
        params.name = encodeWithoutSlashes(String(params.name));
      }

      const rootUrl =
        options.rootUrl || 'https://securitycenter.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta1/{+name}:cancel')
              .replace(/([^:]\/)\/+/g, '$1')
              .replace(/\{([^+:][^}]*)\}/g, '{+$1}'),
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

    /**
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/securitycenter.googleapis.com
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
     * const securitycenter = google.securitycenter('v1beta1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/cloud-platform',
     *       'https://www.googleapis.com/auth/securitycenter',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await securitycenter.organizations.operations.delete({
     *     name: 'organizations/my-organization/operations/my-operation',
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
      params: Params$Resource$Organizations$Operations$Delete,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    delete(
      params?: Params$Resource$Organizations$Operations$Delete,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Empty>>;
    delete(
      params: Params$Resource$Organizations$Operations$Delete,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    delete(
      params: Params$Resource$Organizations$Operations$Delete,
      options: MethodOptions | BodyResponseCallback<Schema$Empty>,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    delete(
      params: Params$Resource$Organizations$Operations$Delete,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    delete(callback: BodyResponseCallback<Schema$Empty>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Organizations$Operations$Delete
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
        {}) as Params$Resource$Organizations$Operations$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Organizations$Operations$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      if (params.name !== undefined && params.name !== null) {
        validateMultiSegment('name', String(params.name));
        params.name = encodeWithoutSlashes(String(params.name));
      }

      const rootUrl =
        options.rootUrl || 'https://securitycenter.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta1/{+name}')
              .replace(/([^:]\/)\/+/g, '$1')
              .replace(/\{([^+:][^}]*)\}/g, '{+$1}'),
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
     * //   https://console.developers.google.com/apis/api/securitycenter.googleapis.com
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
     * const securitycenter = google.securitycenter('v1beta1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/cloud-platform',
     *       'https://www.googleapis.com/auth/securitycenter',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await securitycenter.organizations.operations.get({
     *     name: 'organizations/my-organization/operations/my-operation',
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
      params: Params$Resource$Organizations$Operations$Get,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    get(
      params?: Params$Resource$Organizations$Operations$Get,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Operation>>;
    get(
      params: Params$Resource$Organizations$Operations$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Organizations$Operations$Get,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    get(
      params: Params$Resource$Organizations$Operations$Get,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    get(callback: BodyResponseCallback<Schema$Operation>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Organizations$Operations$Get
        | BodyResponseCallback<Schema$Operation>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Operation>
        | BodyResponseCallback<Readable>,
      callback?:
        BodyResponseCallback<Schema$Operation> | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$Operation>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Organizations$Operations$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Organizations$Operations$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      if (params.name !== undefined && params.name !== null) {
        validateMultiSegment('name', String(params.name));
        params.name = encodeWithoutSlashes(String(params.name));
      }

      const rootUrl =
        options.rootUrl || 'https://securitycenter.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta1/{+name}')
              .replace(/([^:]\/)\/+/g, '$1')
              .replace(/\{([^+:][^}]*)\}/g, '{+$1}'),
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
        createAPIRequest<Schema$Operation>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Operation>(parameters);
      }
    }

    /**
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/securitycenter.googleapis.com
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
     * const securitycenter = google.securitycenter('v1beta1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/cloud-platform',
     *       'https://www.googleapis.com/auth/securitycenter',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await securitycenter.organizations.operations.list({
     *     filter: 'placeholder-value',
     *
     *     name: 'organizations/my-organization/operations',
     *
     *     pageSize: 'placeholder-value',
     *
     *     pageToken: 'placeholder-value',
     *
     *     returnPartialSuccess: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "nextPageToken": "my_nextPageToken",
     *   //   "operations": [],
     *   //   "unreachable": []
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
      params: Params$Resource$Organizations$Operations$List,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    list(
      params?: Params$Resource$Organizations$Operations$List,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$ListOperationsResponse>>;
    list(
      params: Params$Resource$Organizations$Operations$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Organizations$Operations$List,
      options:
        MethodOptions | BodyResponseCallback<Schema$ListOperationsResponse>,
      callback: BodyResponseCallback<Schema$ListOperationsResponse>
    ): void;
    list(
      params: Params$Resource$Organizations$Operations$List,
      callback: BodyResponseCallback<Schema$ListOperationsResponse>
    ): void;
    list(callback: BodyResponseCallback<Schema$ListOperationsResponse>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Organizations$Operations$List
        | BodyResponseCallback<Schema$ListOperationsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ListOperationsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ListOperationsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$ListOperationsResponse>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Organizations$Operations$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Organizations$Operations$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      if (params.name !== undefined && params.name !== null) {
        validateMultiSegment('name', String(params.name));
        params.name = encodeWithoutSlashes(String(params.name));
      }

      const rootUrl =
        options.rootUrl || 'https://securitycenter.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta1/{+name}')
              .replace(/([^:]\/)\/+/g, '$1')
              .replace(/\{([^+:][^}]*)\}/g, '{+$1}'),
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
        createAPIRequest<Schema$ListOperationsResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ListOperationsResponse>(parameters);
      }
    }
  }

  export interface Params$Resource$Organizations$Operations$Cancel extends StandardParameters {
    /**
     *
     */
    name?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$CancelOperationRequest;
  }
  export interface Params$Resource$Organizations$Operations$Delete extends StandardParameters {
    /**
     *
     */
    name?: string;
  }
  export interface Params$Resource$Organizations$Operations$Get extends StandardParameters {
    /**
     *
     */
    name?: string;
  }
  export interface Params$Resource$Organizations$Operations$List extends StandardParameters {
    /**
     *
     */
    filter?: string;
    /**
     *
     */
    name?: string;
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
    returnPartialSuccess?: boolean;
  }

  export class Resource$Organizations$Sources {
    context: APIRequestContext;
    findings: Resource$Organizations$Sources$Findings;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.findings = new Resource$Organizations$Sources$Findings(this.context);
    }

    /**
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/securitycenter.googleapis.com
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
     * const securitycenter = google.securitycenter('v1beta1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/cloud-platform',
     *       'https://www.googleapis.com/auth/securitycenter',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await securitycenter.organizations.sources.create({
     *     parent: 'organizations/my-organization',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "description": "my_description",
     *       //   "displayName": "my_displayName",
     *       //   "name": "my_name"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "description": "my_description",
     *   //   "displayName": "my_displayName",
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
    create(
      params: Params$Resource$Organizations$Sources$Create,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    create(
      params?: Params$Resource$Organizations$Sources$Create,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Source>>;
    create(
      params: Params$Resource$Organizations$Sources$Create,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    create(
      params: Params$Resource$Organizations$Sources$Create,
      options: MethodOptions | BodyResponseCallback<Schema$Source>,
      callback: BodyResponseCallback<Schema$Source>
    ): void;
    create(
      params: Params$Resource$Organizations$Sources$Create,
      callback: BodyResponseCallback<Schema$Source>
    ): void;
    create(callback: BodyResponseCallback<Schema$Source>): void;
    create(
      paramsOrCallback?:
        | Params$Resource$Organizations$Sources$Create
        | BodyResponseCallback<Schema$Source>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Source>
        | BodyResponseCallback<Readable>,
      callback?:
        BodyResponseCallback<Schema$Source> | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$Source>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Organizations$Sources$Create;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Organizations$Sources$Create;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      if (params.parent !== undefined && params.parent !== null) {
        validateMultiSegment('parent', String(params.parent));
        params.parent = encodeWithoutSlashes(String(params.parent));
      }

      const rootUrl =
        options.rootUrl || 'https://securitycenter.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta1/{+parent}/sources')
              .replace(/([^:]\/)\/+/g, '$1')
              .replace(/\{([^+:][^}]*)\}/g, '{+$1}'),
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
        createAPIRequest<Schema$Source>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Source>(parameters);
      }
    }

    /**
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/securitycenter.googleapis.com
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
     * const securitycenter = google.securitycenter('v1beta1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/cloud-platform',
     *       'https://www.googleapis.com/auth/securitycenter',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await securitycenter.organizations.sources.get({
     *     name: 'organizations/my-organization/sources/my-source',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "description": "my_description",
     *   //   "displayName": "my_displayName",
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
    get(
      params: Params$Resource$Organizations$Sources$Get,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    get(
      params?: Params$Resource$Organizations$Sources$Get,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Source>>;
    get(
      params: Params$Resource$Organizations$Sources$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Organizations$Sources$Get,
      options: MethodOptions | BodyResponseCallback<Schema$Source>,
      callback: BodyResponseCallback<Schema$Source>
    ): void;
    get(
      params: Params$Resource$Organizations$Sources$Get,
      callback: BodyResponseCallback<Schema$Source>
    ): void;
    get(callback: BodyResponseCallback<Schema$Source>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Organizations$Sources$Get
        | BodyResponseCallback<Schema$Source>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Source>
        | BodyResponseCallback<Readable>,
      callback?:
        BodyResponseCallback<Schema$Source> | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$Source>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Organizations$Sources$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Organizations$Sources$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      if (params.name !== undefined && params.name !== null) {
        validateMultiSegment('name', String(params.name));
        params.name = encodeWithoutSlashes(String(params.name));
      }

      const rootUrl =
        options.rootUrl || 'https://securitycenter.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta1/{+name}')
              .replace(/([^:]\/)\/+/g, '$1')
              .replace(/\{([^+:][^}]*)\}/g, '{+$1}'),
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
        createAPIRequest<Schema$Source>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Source>(parameters);
      }
    }

    /**
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/securitycenter.googleapis.com
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
     * const securitycenter = google.securitycenter('v1beta1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/cloud-platform',
     *       'https://www.googleapis.com/auth/securitycenter',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await securitycenter.organizations.sources.getIamPolicy({
     *     resource: 'organizations/my-organization/sources/my-source',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "options": {}
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "auditConfigs": [],
     *   //   "bindings": [],
     *   //   "etag": "my_etag",
     *   //   "version": 0
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
    getIamPolicy(
      params: Params$Resource$Organizations$Sources$Getiampolicy,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    getIamPolicy(
      params?: Params$Resource$Organizations$Sources$Getiampolicy,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Policy>>;
    getIamPolicy(
      params: Params$Resource$Organizations$Sources$Getiampolicy,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    getIamPolicy(
      params: Params$Resource$Organizations$Sources$Getiampolicy,
      options: MethodOptions | BodyResponseCallback<Schema$Policy>,
      callback: BodyResponseCallback<Schema$Policy>
    ): void;
    getIamPolicy(
      params: Params$Resource$Organizations$Sources$Getiampolicy,
      callback: BodyResponseCallback<Schema$Policy>
    ): void;
    getIamPolicy(callback: BodyResponseCallback<Schema$Policy>): void;
    getIamPolicy(
      paramsOrCallback?:
        | Params$Resource$Organizations$Sources$Getiampolicy
        | BodyResponseCallback<Schema$Policy>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Policy>
        | BodyResponseCallback<Readable>,
      callback?:
        BodyResponseCallback<Schema$Policy> | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$Policy>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Organizations$Sources$Getiampolicy;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Organizations$Sources$Getiampolicy;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      if (params.resource_ !== undefined && params.resource_ !== null) {
        validateMultiSegment('resource', String(params.resource_));
        params.resource_ = encodeWithoutSlashes(String(params.resource_));
      }

      const rootUrl =
        options.rootUrl || 'https://securitycenter.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta1/{+resource}:getIamPolicy')
              .replace(/([^:]\/)\/+/g, '$1')
              .replace(/\{([^+:][^}]*)\}/g, '{+$1}'),
            method: 'POST',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['resource'],
        pathParams: ['resource'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Policy>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Policy>(parameters);
      }
    }

    /**
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/securitycenter.googleapis.com
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
     * const securitycenter = google.securitycenter('v1beta1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/cloud-platform',
     *       'https://www.googleapis.com/auth/securitycenter',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await securitycenter.organizations.sources.list({
     *     pageSize: 'placeholder-value',
     *
     *     pageToken: 'placeholder-value',
     *
     *     parent: 'organizations/my-organization',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "nextPageToken": "my_nextPageToken",
     *   //   "sources": []
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
      params: Params$Resource$Organizations$Sources$List,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    list(
      params?: Params$Resource$Organizations$Sources$List,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$ListSourcesResponse>>;
    list(
      params: Params$Resource$Organizations$Sources$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Organizations$Sources$List,
      options: MethodOptions | BodyResponseCallback<Schema$ListSourcesResponse>,
      callback: BodyResponseCallback<Schema$ListSourcesResponse>
    ): void;
    list(
      params: Params$Resource$Organizations$Sources$List,
      callback: BodyResponseCallback<Schema$ListSourcesResponse>
    ): void;
    list(callback: BodyResponseCallback<Schema$ListSourcesResponse>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Organizations$Sources$List
        | BodyResponseCallback<Schema$ListSourcesResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ListSourcesResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ListSourcesResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$ListSourcesResponse>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Organizations$Sources$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Organizations$Sources$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      if (params.parent !== undefined && params.parent !== null) {
        validateMultiSegment('parent', String(params.parent));
        params.parent = encodeWithoutSlashes(String(params.parent));
      }

      const rootUrl =
        options.rootUrl || 'https://securitycenter.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta1/{+parent}/sources')
              .replace(/([^:]\/)\/+/g, '$1')
              .replace(/\{([^+:][^}]*)\}/g, '{+$1}'),
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
        createAPIRequest<Schema$ListSourcesResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ListSourcesResponse>(parameters);
      }
    }

    /**
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/securitycenter.googleapis.com
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
     * const securitycenter = google.securitycenter('v1beta1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/cloud-platform',
     *       'https://www.googleapis.com/auth/securitycenter',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await securitycenter.organizations.sources.patch({
     *     name: 'organizations/my-organization/sources/my-source',
     *
     *     updateMask: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "description": "my_description",
     *       //   "displayName": "my_displayName",
     *       //   "name": "my_name"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "description": "my_description",
     *   //   "displayName": "my_displayName",
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
    patch(
      params: Params$Resource$Organizations$Sources$Patch,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    patch(
      params?: Params$Resource$Organizations$Sources$Patch,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Source>>;
    patch(
      params: Params$Resource$Organizations$Sources$Patch,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    patch(
      params: Params$Resource$Organizations$Sources$Patch,
      options: MethodOptions | BodyResponseCallback<Schema$Source>,
      callback: BodyResponseCallback<Schema$Source>
    ): void;
    patch(
      params: Params$Resource$Organizations$Sources$Patch,
      callback: BodyResponseCallback<Schema$Source>
    ): void;
    patch(callback: BodyResponseCallback<Schema$Source>): void;
    patch(
      paramsOrCallback?:
        | Params$Resource$Organizations$Sources$Patch
        | BodyResponseCallback<Schema$Source>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Source>
        | BodyResponseCallback<Readable>,
      callback?:
        BodyResponseCallback<Schema$Source> | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$Source>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Organizations$Sources$Patch;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Organizations$Sources$Patch;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      if (params.name !== undefined && params.name !== null) {
        validateMultiSegment('name', String(params.name));
        params.name = encodeWithoutSlashes(String(params.name));
      }

      const rootUrl =
        options.rootUrl || 'https://securitycenter.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta1/{+name}')
              .replace(/([^:]\/)\/+/g, '$1')
              .replace(/\{([^+:][^}]*)\}/g, '{+$1}'),
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
        createAPIRequest<Schema$Source>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Source>(parameters);
      }
    }

    /**
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/securitycenter.googleapis.com
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
     * const securitycenter = google.securitycenter('v1beta1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/cloud-platform',
     *       'https://www.googleapis.com/auth/securitycenter',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await securitycenter.organizations.sources.setIamPolicy({
     *     resource: 'organizations/my-organization/sources/my-source',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "policy": {},
     *       //   "updateMask": "my_updateMask"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "auditConfigs": [],
     *   //   "bindings": [],
     *   //   "etag": "my_etag",
     *   //   "version": 0
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
    setIamPolicy(
      params: Params$Resource$Organizations$Sources$Setiampolicy,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    setIamPolicy(
      params?: Params$Resource$Organizations$Sources$Setiampolicy,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Policy>>;
    setIamPolicy(
      params: Params$Resource$Organizations$Sources$Setiampolicy,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    setIamPolicy(
      params: Params$Resource$Organizations$Sources$Setiampolicy,
      options: MethodOptions | BodyResponseCallback<Schema$Policy>,
      callback: BodyResponseCallback<Schema$Policy>
    ): void;
    setIamPolicy(
      params: Params$Resource$Organizations$Sources$Setiampolicy,
      callback: BodyResponseCallback<Schema$Policy>
    ): void;
    setIamPolicy(callback: BodyResponseCallback<Schema$Policy>): void;
    setIamPolicy(
      paramsOrCallback?:
        | Params$Resource$Organizations$Sources$Setiampolicy
        | BodyResponseCallback<Schema$Policy>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Policy>
        | BodyResponseCallback<Readable>,
      callback?:
        BodyResponseCallback<Schema$Policy> | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$Policy>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Organizations$Sources$Setiampolicy;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Organizations$Sources$Setiampolicy;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      if (params.resource_ !== undefined && params.resource_ !== null) {
        validateMultiSegment('resource', String(params.resource_));
        params.resource_ = encodeWithoutSlashes(String(params.resource_));
      }

      const rootUrl =
        options.rootUrl || 'https://securitycenter.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta1/{+resource}:setIamPolicy')
              .replace(/([^:]\/)\/+/g, '$1')
              .replace(/\{([^+:][^}]*)\}/g, '{+$1}'),
            method: 'POST',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['resource'],
        pathParams: ['resource'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Policy>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Policy>(parameters);
      }
    }

    /**
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/securitycenter.googleapis.com
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
     * const securitycenter = google.securitycenter('v1beta1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/cloud-platform',
     *       'https://www.googleapis.com/auth/securitycenter',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await securitycenter.organizations.sources.testIamPermissions({
     *     resource: 'organizations/my-organization/sources/my-source',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "permissions": []
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "permissions": []
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
    testIamPermissions(
      params: Params$Resource$Organizations$Sources$Testiampermissions,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    testIamPermissions(
      params?: Params$Resource$Organizations$Sources$Testiampermissions,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$TestIamPermissionsResponse>>;
    testIamPermissions(
      params: Params$Resource$Organizations$Sources$Testiampermissions,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    testIamPermissions(
      params: Params$Resource$Organizations$Sources$Testiampermissions,
      options:
        MethodOptions | BodyResponseCallback<Schema$TestIamPermissionsResponse>,
      callback: BodyResponseCallback<Schema$TestIamPermissionsResponse>
    ): void;
    testIamPermissions(
      params: Params$Resource$Organizations$Sources$Testiampermissions,
      callback: BodyResponseCallback<Schema$TestIamPermissionsResponse>
    ): void;
    testIamPermissions(
      callback: BodyResponseCallback<Schema$TestIamPermissionsResponse>
    ): void;
    testIamPermissions(
      paramsOrCallback?:
        | Params$Resource$Organizations$Sources$Testiampermissions
        | BodyResponseCallback<Schema$TestIamPermissionsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$TestIamPermissionsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$TestIamPermissionsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$TestIamPermissionsResponse>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Organizations$Sources$Testiampermissions;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Organizations$Sources$Testiampermissions;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      if (params.resource_ !== undefined && params.resource_ !== null) {
        validateMultiSegment('resource', String(params.resource_));
        params.resource_ = encodeWithoutSlashes(String(params.resource_));
      }

      const rootUrl =
        options.rootUrl || 'https://securitycenter.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta1/{+resource}:testIamPermissions')
              .replace(/([^:]\/)\/+/g, '$1')
              .replace(/\{([^+:][^}]*)\}/g, '{+$1}'),
            method: 'POST',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['resource'],
        pathParams: ['resource'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$TestIamPermissionsResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$TestIamPermissionsResponse>(parameters);
      }
    }
  }

  export interface Params$Resource$Organizations$Sources$Create extends StandardParameters {
    /**
     *
     */
    parent?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$Source;
  }
  export interface Params$Resource$Organizations$Sources$Get extends StandardParameters {
    /**
     *
     */
    name?: string;
  }
  export interface Params$Resource$Organizations$Sources$Getiampolicy extends StandardParameters {
    /**
     *
     */
    resource?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GetIamPolicyRequest;
  }
  export interface Params$Resource$Organizations$Sources$List extends StandardParameters {
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
  export interface Params$Resource$Organizations$Sources$Patch extends StandardParameters {
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
    requestBody?: Schema$Source;
  }
  export interface Params$Resource$Organizations$Sources$Setiampolicy extends StandardParameters {
    /**
     *
     */
    resource?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$SetIamPolicyRequest;
  }
  export interface Params$Resource$Organizations$Sources$Testiampermissions extends StandardParameters {
    /**
     *
     */
    resource?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$TestIamPermissionsRequest;
  }

  export class Resource$Organizations$Sources$Findings {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/securitycenter.googleapis.com
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
     * const securitycenter = google.securitycenter('v1beta1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/cloud-platform',
     *       'https://www.googleapis.com/auth/securitycenter',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await securitycenter.organizations.sources.findings.create({
     *     findingId: 'placeholder-value',
     *
     *     parent: 'organizations/my-organization/sources/my-source',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "category": "my_category",
     *       //   "createTime": "my_createTime",
     *       //   "eventTime": "my_eventTime",
     *       //   "externalUri": "my_externalUri",
     *       //   "name": "my_name",
     *       //   "parent": "my_parent",
     *       //   "resourceName": "my_resourceName",
     *       //   "securityMarks": {},
     *       //   "sourceProperties": {},
     *       //   "state": "my_state"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "category": "my_category",
     *   //   "createTime": "my_createTime",
     *   //   "eventTime": "my_eventTime",
     *   //   "externalUri": "my_externalUri",
     *   //   "name": "my_name",
     *   //   "parent": "my_parent",
     *   //   "resourceName": "my_resourceName",
     *   //   "securityMarks": {},
     *   //   "sourceProperties": {},
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
      params: Params$Resource$Organizations$Sources$Findings$Create,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    create(
      params?: Params$Resource$Organizations$Sources$Findings$Create,
      options?: MethodOptions
    ): Promise<
      GaxiosResponseWithHTTP2<Schema$GoogleCloudSecuritycenterV1beta1Finding>
    >;
    create(
      params: Params$Resource$Organizations$Sources$Findings$Create,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    create(
      params: Params$Resource$Organizations$Sources$Findings$Create,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleCloudSecuritycenterV1beta1Finding>,
      callback: BodyResponseCallback<Schema$GoogleCloudSecuritycenterV1beta1Finding>
    ): void;
    create(
      params: Params$Resource$Organizations$Sources$Findings$Create,
      callback: BodyResponseCallback<Schema$GoogleCloudSecuritycenterV1beta1Finding>
    ): void;
    create(
      callback: BodyResponseCallback<Schema$GoogleCloudSecuritycenterV1beta1Finding>
    ): void;
    create(
      paramsOrCallback?:
        | Params$Resource$Organizations$Sources$Findings$Create
        | BodyResponseCallback<Schema$GoogleCloudSecuritycenterV1beta1Finding>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleCloudSecuritycenterV1beta1Finding>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleCloudSecuritycenterV1beta1Finding>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<
          GaxiosResponseWithHTTP2<Schema$GoogleCloudSecuritycenterV1beta1Finding>
        >
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Organizations$Sources$Findings$Create;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Organizations$Sources$Findings$Create;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      if (params.parent !== undefined && params.parent !== null) {
        validateMultiSegment('parent', String(params.parent));
        params.parent = encodeWithoutSlashes(String(params.parent));
      }

      const rootUrl =
        options.rootUrl || 'https://securitycenter.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta1/{+parent}/findings')
              .replace(/([^:]\/)\/+/g, '$1')
              .replace(/\{([^+:][^}]*)\}/g, '{+$1}'),
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
        createAPIRequest<Schema$GoogleCloudSecuritycenterV1beta1Finding>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleCloudSecuritycenterV1beta1Finding>(
          parameters
        );
      }
    }

    /**
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/securitycenter.googleapis.com
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
     * const securitycenter = google.securitycenter('v1beta1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/cloud-platform',
     *       'https://www.googleapis.com/auth/securitycenter',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await securitycenter.organizations.sources.findings.group({
     *     parent: 'organizations/my-organization/sources/my-source',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "filter": "my_filter",
     *       //   "groupBy": "my_groupBy",
     *       //   "pageSize": 0,
     *       //   "pageToken": "my_pageToken",
     *       //   "readTime": "my_readTime"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "groupByResults": [],
     *   //   "nextPageToken": "my_nextPageToken",
     *   //   "readTime": "my_readTime"
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
    group(
      params: Params$Resource$Organizations$Sources$Findings$Group,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    group(
      params?: Params$Resource$Organizations$Sources$Findings$Group,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$GroupFindingsResponse>>;
    group(
      params: Params$Resource$Organizations$Sources$Findings$Group,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    group(
      params: Params$Resource$Organizations$Sources$Findings$Group,
      options:
        MethodOptions | BodyResponseCallback<Schema$GroupFindingsResponse>,
      callback: BodyResponseCallback<Schema$GroupFindingsResponse>
    ): void;
    group(
      params: Params$Resource$Organizations$Sources$Findings$Group,
      callback: BodyResponseCallback<Schema$GroupFindingsResponse>
    ): void;
    group(callback: BodyResponseCallback<Schema$GroupFindingsResponse>): void;
    group(
      paramsOrCallback?:
        | Params$Resource$Organizations$Sources$Findings$Group
        | BodyResponseCallback<Schema$GroupFindingsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GroupFindingsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GroupFindingsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$GroupFindingsResponse>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Organizations$Sources$Findings$Group;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Organizations$Sources$Findings$Group;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      if (params.parent !== undefined && params.parent !== null) {
        validateMultiSegment('parent', String(params.parent));
        params.parent = encodeWithoutSlashes(String(params.parent));
      }

      const rootUrl =
        options.rootUrl || 'https://securitycenter.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta1/{+parent}/findings:group')
              .replace(/([^:]\/)\/+/g, '$1')
              .replace(/\{([^+:][^}]*)\}/g, '{+$1}'),
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
        createAPIRequest<Schema$GroupFindingsResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GroupFindingsResponse>(parameters);
      }
    }

    /**
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/securitycenter.googleapis.com
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
     * const securitycenter = google.securitycenter('v1beta1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/cloud-platform',
     *       'https://www.googleapis.com/auth/securitycenter',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await securitycenter.organizations.sources.findings.list({
     *     fieldMask: 'placeholder-value',
     *
     *     filter: 'placeholder-value',
     *
     *     orderBy: 'placeholder-value',
     *
     *     pageSize: 'placeholder-value',
     *
     *     pageToken: 'placeholder-value',
     *
     *     parent: 'organizations/my-organization/sources/my-source',
     *
     *     readTime: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "findings": [],
     *   //   "nextPageToken": "my_nextPageToken",
     *   //   "readTime": "my_readTime",
     *   //   "totalSize": 0
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
      params: Params$Resource$Organizations$Sources$Findings$List,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    list(
      params?: Params$Resource$Organizations$Sources$Findings$List,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$ListFindingsResponse>>;
    list(
      params: Params$Resource$Organizations$Sources$Findings$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Organizations$Sources$Findings$List,
      options:
        MethodOptions | BodyResponseCallback<Schema$ListFindingsResponse>,
      callback: BodyResponseCallback<Schema$ListFindingsResponse>
    ): void;
    list(
      params: Params$Resource$Organizations$Sources$Findings$List,
      callback: BodyResponseCallback<Schema$ListFindingsResponse>
    ): void;
    list(callback: BodyResponseCallback<Schema$ListFindingsResponse>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Organizations$Sources$Findings$List
        | BodyResponseCallback<Schema$ListFindingsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ListFindingsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ListFindingsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$ListFindingsResponse>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Organizations$Sources$Findings$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Organizations$Sources$Findings$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      if (params.parent !== undefined && params.parent !== null) {
        validateMultiSegment('parent', String(params.parent));
        params.parent = encodeWithoutSlashes(String(params.parent));
      }

      const rootUrl =
        options.rootUrl || 'https://securitycenter.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta1/{+parent}/findings')
              .replace(/([^:]\/)\/+/g, '$1')
              .replace(/\{([^+:][^}]*)\}/g, '{+$1}'),
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
        createAPIRequest<Schema$ListFindingsResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ListFindingsResponse>(parameters);
      }
    }

    /**
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/securitycenter.googleapis.com
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
     * const securitycenter = google.securitycenter('v1beta1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/cloud-platform',
     *       'https://www.googleapis.com/auth/securitycenter',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await securitycenter.organizations.sources.findings.patch({
     *     name: 'organizations/my-organization/sources/my-source/findings/my-finding',
     *
     *     updateMask: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "category": "my_category",
     *       //   "createTime": "my_createTime",
     *       //   "eventTime": "my_eventTime",
     *       //   "externalUri": "my_externalUri",
     *       //   "name": "my_name",
     *       //   "parent": "my_parent",
     *       //   "resourceName": "my_resourceName",
     *       //   "securityMarks": {},
     *       //   "sourceProperties": {},
     *       //   "state": "my_state"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "category": "my_category",
     *   //   "createTime": "my_createTime",
     *   //   "eventTime": "my_eventTime",
     *   //   "externalUri": "my_externalUri",
     *   //   "name": "my_name",
     *   //   "parent": "my_parent",
     *   //   "resourceName": "my_resourceName",
     *   //   "securityMarks": {},
     *   //   "sourceProperties": {},
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
      params: Params$Resource$Organizations$Sources$Findings$Patch,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    patch(
      params?: Params$Resource$Organizations$Sources$Findings$Patch,
      options?: MethodOptions
    ): Promise<
      GaxiosResponseWithHTTP2<Schema$GoogleCloudSecuritycenterV1beta1Finding>
    >;
    patch(
      params: Params$Resource$Organizations$Sources$Findings$Patch,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    patch(
      params: Params$Resource$Organizations$Sources$Findings$Patch,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleCloudSecuritycenterV1beta1Finding>,
      callback: BodyResponseCallback<Schema$GoogleCloudSecuritycenterV1beta1Finding>
    ): void;
    patch(
      params: Params$Resource$Organizations$Sources$Findings$Patch,
      callback: BodyResponseCallback<Schema$GoogleCloudSecuritycenterV1beta1Finding>
    ): void;
    patch(
      callback: BodyResponseCallback<Schema$GoogleCloudSecuritycenterV1beta1Finding>
    ): void;
    patch(
      paramsOrCallback?:
        | Params$Resource$Organizations$Sources$Findings$Patch
        | BodyResponseCallback<Schema$GoogleCloudSecuritycenterV1beta1Finding>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleCloudSecuritycenterV1beta1Finding>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleCloudSecuritycenterV1beta1Finding>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<
          GaxiosResponseWithHTTP2<Schema$GoogleCloudSecuritycenterV1beta1Finding>
        >
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Organizations$Sources$Findings$Patch;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Organizations$Sources$Findings$Patch;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      if (params.name !== undefined && params.name !== null) {
        validateMultiSegment('name', String(params.name));
        params.name = encodeWithoutSlashes(String(params.name));
      }

      const rootUrl =
        options.rootUrl || 'https://securitycenter.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta1/{+name}')
              .replace(/([^:]\/)\/+/g, '$1')
              .replace(/\{([^+:][^}]*)\}/g, '{+$1}'),
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
        createAPIRequest<Schema$GoogleCloudSecuritycenterV1beta1Finding>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleCloudSecuritycenterV1beta1Finding>(
          parameters
        );
      }
    }

    /**
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/securitycenter.googleapis.com
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
     * const securitycenter = google.securitycenter('v1beta1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/cloud-platform',
     *       'https://www.googleapis.com/auth/securitycenter',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await securitycenter.organizations.sources.findings.setState({
     *     name: 'organizations/my-organization/sources/my-source/findings/my-finding',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "startTime": "my_startTime",
     *       //   "state": "my_state"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "category": "my_category",
     *   //   "createTime": "my_createTime",
     *   //   "eventTime": "my_eventTime",
     *   //   "externalUri": "my_externalUri",
     *   //   "name": "my_name",
     *   //   "parent": "my_parent",
     *   //   "resourceName": "my_resourceName",
     *   //   "securityMarks": {},
     *   //   "sourceProperties": {},
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
    setState(
      params: Params$Resource$Organizations$Sources$Findings$Setstate,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    setState(
      params?: Params$Resource$Organizations$Sources$Findings$Setstate,
      options?: MethodOptions
    ): Promise<
      GaxiosResponseWithHTTP2<Schema$GoogleCloudSecuritycenterV1beta1Finding>
    >;
    setState(
      params: Params$Resource$Organizations$Sources$Findings$Setstate,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    setState(
      params: Params$Resource$Organizations$Sources$Findings$Setstate,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleCloudSecuritycenterV1beta1Finding>,
      callback: BodyResponseCallback<Schema$GoogleCloudSecuritycenterV1beta1Finding>
    ): void;
    setState(
      params: Params$Resource$Organizations$Sources$Findings$Setstate,
      callback: BodyResponseCallback<Schema$GoogleCloudSecuritycenterV1beta1Finding>
    ): void;
    setState(
      callback: BodyResponseCallback<Schema$GoogleCloudSecuritycenterV1beta1Finding>
    ): void;
    setState(
      paramsOrCallback?:
        | Params$Resource$Organizations$Sources$Findings$Setstate
        | BodyResponseCallback<Schema$GoogleCloudSecuritycenterV1beta1Finding>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleCloudSecuritycenterV1beta1Finding>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleCloudSecuritycenterV1beta1Finding>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<
          GaxiosResponseWithHTTP2<Schema$GoogleCloudSecuritycenterV1beta1Finding>
        >
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Organizations$Sources$Findings$Setstate;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Organizations$Sources$Findings$Setstate;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      if (params.name !== undefined && params.name !== null) {
        validateMultiSegment('name', String(params.name));
        params.name = encodeWithoutSlashes(String(params.name));
      }

      const rootUrl =
        options.rootUrl || 'https://securitycenter.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta1/{+name}:setState')
              .replace(/([^:]\/)\/+/g, '$1')
              .replace(/\{([^+:][^}]*)\}/g, '{+$1}'),
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
        createAPIRequest<Schema$GoogleCloudSecuritycenterV1beta1Finding>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleCloudSecuritycenterV1beta1Finding>(
          parameters
        );
      }
    }

    /**
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/securitycenter.googleapis.com
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
     * const securitycenter = google.securitycenter('v1beta1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/cloud-platform',
     *       'https://www.googleapis.com/auth/securitycenter',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res =
     *     await securitycenter.organizations.sources.findings.updateSecurityMarks({
     *       name: 'organizations/my-organization/sources/my-source/findings/my-finding/securityMarks',
     *
     *       startTime: 'placeholder-value',
     *
     *       updateMask: 'placeholder-value',
     *
     *       // Request body metadata
     *       requestBody: {
     *         // request body parameters
     *         // {
     *         //   "marks": {},
     *         //   "name": "my_name"
     *         // }
     *       },
     *     });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "marks": {},
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
    updateSecurityMarks(
      params: Params$Resource$Organizations$Sources$Findings$Updatesecuritymarks,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    updateSecurityMarks(
      params?: Params$Resource$Organizations$Sources$Findings$Updatesecuritymarks,
      options?: MethodOptions
    ): Promise<
      GaxiosResponseWithHTTP2<Schema$GoogleCloudSecuritycenterV1beta1SecurityMarks>
    >;
    updateSecurityMarks(
      params: Params$Resource$Organizations$Sources$Findings$Updatesecuritymarks,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    updateSecurityMarks(
      params: Params$Resource$Organizations$Sources$Findings$Updatesecuritymarks,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleCloudSecuritycenterV1beta1SecurityMarks>,
      callback: BodyResponseCallback<Schema$GoogleCloudSecuritycenterV1beta1SecurityMarks>
    ): void;
    updateSecurityMarks(
      params: Params$Resource$Organizations$Sources$Findings$Updatesecuritymarks,
      callback: BodyResponseCallback<Schema$GoogleCloudSecuritycenterV1beta1SecurityMarks>
    ): void;
    updateSecurityMarks(
      callback: BodyResponseCallback<Schema$GoogleCloudSecuritycenterV1beta1SecurityMarks>
    ): void;
    updateSecurityMarks(
      paramsOrCallback?:
        | Params$Resource$Organizations$Sources$Findings$Updatesecuritymarks
        | BodyResponseCallback<Schema$GoogleCloudSecuritycenterV1beta1SecurityMarks>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleCloudSecuritycenterV1beta1SecurityMarks>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleCloudSecuritycenterV1beta1SecurityMarks>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<
          GaxiosResponseWithHTTP2<Schema$GoogleCloudSecuritycenterV1beta1SecurityMarks>
        >
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Organizations$Sources$Findings$Updatesecuritymarks;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Organizations$Sources$Findings$Updatesecuritymarks;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      if (params.name !== undefined && params.name !== null) {
        validateMultiSegment('name', String(params.name));
        params.name = encodeWithoutSlashes(String(params.name));
      }

      const rootUrl =
        options.rootUrl || 'https://securitycenter.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta1/{+name}')
              .replace(/([^:]\/)\/+/g, '$1')
              .replace(/\{([^+:][^}]*)\}/g, '{+$1}'),
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
        createAPIRequest<Schema$GoogleCloudSecuritycenterV1beta1SecurityMarks>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleCloudSecuritycenterV1beta1SecurityMarks>(
          parameters
        );
      }
    }
  }

  export interface Params$Resource$Organizations$Sources$Findings$Create extends StandardParameters {
    /**
     *
     */
    findingId?: string;
    /**
     *
     */
    parent?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleCloudSecuritycenterV1beta1Finding;
  }
  export interface Params$Resource$Organizations$Sources$Findings$Group extends StandardParameters {
    /**
     *
     */
    parent?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GroupFindingsRequest;
  }
  export interface Params$Resource$Organizations$Sources$Findings$List extends StandardParameters {
    /**
     *
     */
    fieldMask?: string;
    /**
     *
     */
    filter?: string;
    /**
     *
     */
    orderBy?: string;
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
    /**
     *
     */
    readTime?: string;
  }
  export interface Params$Resource$Organizations$Sources$Findings$Patch extends StandardParameters {
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
    requestBody?: Schema$GoogleCloudSecuritycenterV1beta1Finding;
  }
  export interface Params$Resource$Organizations$Sources$Findings$Setstate extends StandardParameters {
    /**
     *
     */
    name?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$SetFindingStateRequest;
  }
  export interface Params$Resource$Organizations$Sources$Findings$Updatesecuritymarks extends StandardParameters {
    /**
     *
     */
    name?: string;
    /**
     *
     */
    startTime?: string;
    /**
     *
     */
    updateMask?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleCloudSecuritycenterV1beta1SecurityMarks;
  }
}
