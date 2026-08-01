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

export namespace securitycenter_v1beta2 {
  export interface Options extends GlobalOptions {
    version: 'v1beta2';
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
   * const securitycenter = google.securitycenter('v1beta2');
   * ```
   */
  export class Securitycenter {
    context: APIRequestContext;
    folders: Resource$Folders;
    organizations: Resource$Organizations;
    projects: Resource$Projects;

    constructor(options: GlobalOptions, google?: GoogleConfigurable) {
      this.context = {
        _options: options || {},
        google,
      };

      this.folders = new Resource$Folders(this.context);
      this.organizations = new Resource$Organizations(this.context);
      this.projects = new Resource$Projects(this.context);
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
  export interface Schema$Config {
    moduleEnablementState?: string | null;
    value?: {[key: string]: any} | null;
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
  export interface Schema$ContainerThreatDetectionSettings {
    modules?: {[key: string]: Schema$Config} | null;
    name?: string | null;
    serviceAccount?: string | null;
    serviceEnablementState?: string | null;
    updateTime?: string | null;
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
  export interface Schema$Details {
    endTime?: string | null;
    startTime?: string | null;
    type?: string | null;
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
  export interface Schema$EnvironmentVariable {
    name?: string | null;
    val?: string | null;
  }
  export interface Schema$EventThreatDetectionSettings {
    modules?: {[key: string]: Schema$Config} | null;
    name?: string | null;
    serviceEnablementState?: string | null;
    updateTime?: string | null;
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
  export interface Schema$GoogleCloudSecuritycenterV1beta1RunAssetDiscoveryResponse {
    duration?: string | null;
    state?: string | null;
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
  export interface Schema$GroupMembership {
    groupId?: string | null;
    groupType?: string | null;
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
  export interface Schema$RapidVulnerabilityDetectionSettings {
    modules?: {[key: string]: Schema$Config} | null;
    name?: string | null;
    serviceEnablementState?: string | null;
    updateTime?: string | null;
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
  export interface Schema$SecurityCenterSettings {
    cryptoKeyName?: string | null;
    logSinkProject?: string | null;
    name?: string | null;
    onboardingTime?: string | null;
    orgServiceAccount?: string | null;
  }
  export interface Schema$SecurityHealthAnalyticsSettings {
    modules?: {[key: string]: Schema$Config} | null;
    name?: string | null;
    serviceAccount?: string | null;
    serviceEnablementState?: string | null;
    updateTime?: string | null;
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
  export interface Schema$StaticMute {
    applyTime?: string | null;
    state?: string | null;
  }
  export interface Schema$Subject {
    kind?: string | null;
    name?: string | null;
    ns?: string | null;
  }
  export interface Schema$Subscription {
    details?: Schema$Details;
    name?: string | null;
    tier?: string | null;
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
  export interface Schema$VirtualMachineThreatDetectionSettings {
    modules?: {[key: string]: Schema$Config} | null;
    name?: string | null;
    serviceAccount?: string | null;
    serviceEnablementState?: string | null;
    updateTime?: string | null;
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
  export interface Schema$WebSecurityScannerSettings {
    modules?: {[key: string]: Schema$Config} | null;
    name?: string | null;
    serviceEnablementState?: string | null;
    updateTime?: string | null;
  }
  export interface Schema$YaraRuleSignature {
    yaraRule?: string | null;
  }

  export class Resource$Folders {
    context: APIRequestContext;
    containerThreatDetectionSettings: Resource$Folders$Containerthreatdetectionsettings;
    eventThreatDetectionSettings: Resource$Folders$Eventthreatdetectionsettings;
    rapidVulnerabilityDetectionSettings: Resource$Folders$Rapidvulnerabilitydetectionsettings;
    securityHealthAnalyticsSettings: Resource$Folders$Securityhealthanalyticssettings;
    virtualMachineThreatDetectionSettings: Resource$Folders$Virtualmachinethreatdetectionsettings;
    webSecurityScannerSettings: Resource$Folders$Websecurityscannersettings;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.containerThreatDetectionSettings =
        new Resource$Folders$Containerthreatdetectionsettings(this.context);
      this.eventThreatDetectionSettings =
        new Resource$Folders$Eventthreatdetectionsettings(this.context);
      this.rapidVulnerabilityDetectionSettings =
        new Resource$Folders$Rapidvulnerabilitydetectionsettings(this.context);
      this.securityHealthAnalyticsSettings =
        new Resource$Folders$Securityhealthanalyticssettings(this.context);
      this.virtualMachineThreatDetectionSettings =
        new Resource$Folders$Virtualmachinethreatdetectionsettings(
          this.context
        );
      this.webSecurityScannerSettings =
        new Resource$Folders$Websecurityscannersettings(this.context);
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
     * const securitycenter = google.securitycenter('v1beta2');
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
     *   const res = await securitycenter.folders.getContainerThreatDetectionSettings({
     *     name: 'folders/my-folder/containerThreatDetectionSettings',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "modules": {},
     *   //   "name": "my_name",
     *   //   "serviceAccount": "my_serviceAccount",
     *   //   "serviceEnablementState": "my_serviceEnablementState",
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
    getContainerThreatDetectionSettings(
      params: Params$Resource$Folders$Getcontainerthreatdetectionsettings,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    getContainerThreatDetectionSettings(
      params?: Params$Resource$Folders$Getcontainerthreatdetectionsettings,
      options?: MethodOptions
    ): Promise<
      GaxiosResponseWithHTTP2<Schema$ContainerThreatDetectionSettings>
    >;
    getContainerThreatDetectionSettings(
      params: Params$Resource$Folders$Getcontainerthreatdetectionsettings,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    getContainerThreatDetectionSettings(
      params: Params$Resource$Folders$Getcontainerthreatdetectionsettings,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ContainerThreatDetectionSettings>,
      callback: BodyResponseCallback<Schema$ContainerThreatDetectionSettings>
    ): void;
    getContainerThreatDetectionSettings(
      params: Params$Resource$Folders$Getcontainerthreatdetectionsettings,
      callback: BodyResponseCallback<Schema$ContainerThreatDetectionSettings>
    ): void;
    getContainerThreatDetectionSettings(
      callback: BodyResponseCallback<Schema$ContainerThreatDetectionSettings>
    ): void;
    getContainerThreatDetectionSettings(
      paramsOrCallback?:
        | Params$Resource$Folders$Getcontainerthreatdetectionsettings
        | BodyResponseCallback<Schema$ContainerThreatDetectionSettings>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ContainerThreatDetectionSettings>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ContainerThreatDetectionSettings>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<
          GaxiosResponseWithHTTP2<Schema$ContainerThreatDetectionSettings>
        >
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Folders$Getcontainerthreatdetectionsettings;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Folders$Getcontainerthreatdetectionsettings;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://securitycenter.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta2/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$ContainerThreatDetectionSettings>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ContainerThreatDetectionSettings>(
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
     * const securitycenter = google.securitycenter('v1beta2');
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
     *   const res = await securitycenter.folders.getEventThreatDetectionSettings({
     *     name: 'folders/my-folder/eventThreatDetectionSettings',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "modules": {},
     *   //   "name": "my_name",
     *   //   "serviceEnablementState": "my_serviceEnablementState",
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
    getEventThreatDetectionSettings(
      params: Params$Resource$Folders$Geteventthreatdetectionsettings,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    getEventThreatDetectionSettings(
      params?: Params$Resource$Folders$Geteventthreatdetectionsettings,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$EventThreatDetectionSettings>>;
    getEventThreatDetectionSettings(
      params: Params$Resource$Folders$Geteventthreatdetectionsettings,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    getEventThreatDetectionSettings(
      params: Params$Resource$Folders$Geteventthreatdetectionsettings,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$EventThreatDetectionSettings>,
      callback: BodyResponseCallback<Schema$EventThreatDetectionSettings>
    ): void;
    getEventThreatDetectionSettings(
      params: Params$Resource$Folders$Geteventthreatdetectionsettings,
      callback: BodyResponseCallback<Schema$EventThreatDetectionSettings>
    ): void;
    getEventThreatDetectionSettings(
      callback: BodyResponseCallback<Schema$EventThreatDetectionSettings>
    ): void;
    getEventThreatDetectionSettings(
      paramsOrCallback?:
        | Params$Resource$Folders$Geteventthreatdetectionsettings
        | BodyResponseCallback<Schema$EventThreatDetectionSettings>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$EventThreatDetectionSettings>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$EventThreatDetectionSettings>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$EventThreatDetectionSettings>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Folders$Geteventthreatdetectionsettings;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Folders$Geteventthreatdetectionsettings;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://securitycenter.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta2/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$EventThreatDetectionSettings>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$EventThreatDetectionSettings>(
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
     * const securitycenter = google.securitycenter('v1beta2');
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
     *     await securitycenter.folders.getRapidVulnerabilityDetectionSettings({
     *       name: 'folders/my-folder/rapidVulnerabilityDetectionSettings',
     *     });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "modules": {},
     *   //   "name": "my_name",
     *   //   "serviceEnablementState": "my_serviceEnablementState",
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
    getRapidVulnerabilityDetectionSettings(
      params: Params$Resource$Folders$Getrapidvulnerabilitydetectionsettings,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    getRapidVulnerabilityDetectionSettings(
      params?: Params$Resource$Folders$Getrapidvulnerabilitydetectionsettings,
      options?: MethodOptions
    ): Promise<
      GaxiosResponseWithHTTP2<Schema$RapidVulnerabilityDetectionSettings>
    >;
    getRapidVulnerabilityDetectionSettings(
      params: Params$Resource$Folders$Getrapidvulnerabilitydetectionsettings,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    getRapidVulnerabilityDetectionSettings(
      params: Params$Resource$Folders$Getrapidvulnerabilitydetectionsettings,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$RapidVulnerabilityDetectionSettings>,
      callback: BodyResponseCallback<Schema$RapidVulnerabilityDetectionSettings>
    ): void;
    getRapidVulnerabilityDetectionSettings(
      params: Params$Resource$Folders$Getrapidvulnerabilitydetectionsettings,
      callback: BodyResponseCallback<Schema$RapidVulnerabilityDetectionSettings>
    ): void;
    getRapidVulnerabilityDetectionSettings(
      callback: BodyResponseCallback<Schema$RapidVulnerabilityDetectionSettings>
    ): void;
    getRapidVulnerabilityDetectionSettings(
      paramsOrCallback?:
        | Params$Resource$Folders$Getrapidvulnerabilitydetectionsettings
        | BodyResponseCallback<Schema$RapidVulnerabilityDetectionSettings>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$RapidVulnerabilityDetectionSettings>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$RapidVulnerabilityDetectionSettings>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<
          GaxiosResponseWithHTTP2<Schema$RapidVulnerabilityDetectionSettings>
        >
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Folders$Getrapidvulnerabilitydetectionsettings;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Folders$Getrapidvulnerabilitydetectionsettings;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://securitycenter.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta2/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$RapidVulnerabilityDetectionSettings>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$RapidVulnerabilityDetectionSettings>(
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
     * const securitycenter = google.securitycenter('v1beta2');
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
     *   const res = await securitycenter.folders.getSecurityCenterSettings({
     *     name: 'folders/my-folder/securityCenterSettings',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "cryptoKeyName": "my_cryptoKeyName",
     *   //   "logSinkProject": "my_logSinkProject",
     *   //   "name": "my_name",
     *   //   "onboardingTime": "my_onboardingTime",
     *   //   "orgServiceAccount": "my_orgServiceAccount"
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
    getSecurityCenterSettings(
      params: Params$Resource$Folders$Getsecuritycentersettings,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    getSecurityCenterSettings(
      params?: Params$Resource$Folders$Getsecuritycentersettings,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$SecurityCenterSettings>>;
    getSecurityCenterSettings(
      params: Params$Resource$Folders$Getsecuritycentersettings,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    getSecurityCenterSettings(
      params: Params$Resource$Folders$Getsecuritycentersettings,
      options:
        MethodOptions | BodyResponseCallback<Schema$SecurityCenterSettings>,
      callback: BodyResponseCallback<Schema$SecurityCenterSettings>
    ): void;
    getSecurityCenterSettings(
      params: Params$Resource$Folders$Getsecuritycentersettings,
      callback: BodyResponseCallback<Schema$SecurityCenterSettings>
    ): void;
    getSecurityCenterSettings(
      callback: BodyResponseCallback<Schema$SecurityCenterSettings>
    ): void;
    getSecurityCenterSettings(
      paramsOrCallback?:
        | Params$Resource$Folders$Getsecuritycentersettings
        | BodyResponseCallback<Schema$SecurityCenterSettings>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$SecurityCenterSettings>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$SecurityCenterSettings>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$SecurityCenterSettings>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Folders$Getsecuritycentersettings;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Folders$Getsecuritycentersettings;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://securitycenter.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta2/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$SecurityCenterSettings>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$SecurityCenterSettings>(parameters);
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
     * const securitycenter = google.securitycenter('v1beta2');
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
     *   const res = await securitycenter.folders.getSecurityHealthAnalyticsSettings({
     *     name: 'folders/my-folder/securityHealthAnalyticsSettings',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "modules": {},
     *   //   "name": "my_name",
     *   //   "serviceAccount": "my_serviceAccount",
     *   //   "serviceEnablementState": "my_serviceEnablementState",
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
    getSecurityHealthAnalyticsSettings(
      params: Params$Resource$Folders$Getsecurityhealthanalyticssettings,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    getSecurityHealthAnalyticsSettings(
      params?: Params$Resource$Folders$Getsecurityhealthanalyticssettings,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$SecurityHealthAnalyticsSettings>>;
    getSecurityHealthAnalyticsSettings(
      params: Params$Resource$Folders$Getsecurityhealthanalyticssettings,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    getSecurityHealthAnalyticsSettings(
      params: Params$Resource$Folders$Getsecurityhealthanalyticssettings,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$SecurityHealthAnalyticsSettings>,
      callback: BodyResponseCallback<Schema$SecurityHealthAnalyticsSettings>
    ): void;
    getSecurityHealthAnalyticsSettings(
      params: Params$Resource$Folders$Getsecurityhealthanalyticssettings,
      callback: BodyResponseCallback<Schema$SecurityHealthAnalyticsSettings>
    ): void;
    getSecurityHealthAnalyticsSettings(
      callback: BodyResponseCallback<Schema$SecurityHealthAnalyticsSettings>
    ): void;
    getSecurityHealthAnalyticsSettings(
      paramsOrCallback?:
        | Params$Resource$Folders$Getsecurityhealthanalyticssettings
        | BodyResponseCallback<Schema$SecurityHealthAnalyticsSettings>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$SecurityHealthAnalyticsSettings>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$SecurityHealthAnalyticsSettings>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$SecurityHealthAnalyticsSettings>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Folders$Getsecurityhealthanalyticssettings;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Folders$Getsecurityhealthanalyticssettings;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://securitycenter.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta2/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$SecurityHealthAnalyticsSettings>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$SecurityHealthAnalyticsSettings>(
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
     * const securitycenter = google.securitycenter('v1beta2');
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
     *     await securitycenter.folders.getVirtualMachineThreatDetectionSettings({
     *       name: 'folders/my-folder/virtualMachineThreatDetectionSettings',
     *     });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "modules": {},
     *   //   "name": "my_name",
     *   //   "serviceAccount": "my_serviceAccount",
     *   //   "serviceEnablementState": "my_serviceEnablementState",
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
    getVirtualMachineThreatDetectionSettings(
      params: Params$Resource$Folders$Getvirtualmachinethreatdetectionsettings,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    getVirtualMachineThreatDetectionSettings(
      params?: Params$Resource$Folders$Getvirtualmachinethreatdetectionsettings,
      options?: MethodOptions
    ): Promise<
      GaxiosResponseWithHTTP2<Schema$VirtualMachineThreatDetectionSettings>
    >;
    getVirtualMachineThreatDetectionSettings(
      params: Params$Resource$Folders$Getvirtualmachinethreatdetectionsettings,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    getVirtualMachineThreatDetectionSettings(
      params: Params$Resource$Folders$Getvirtualmachinethreatdetectionsettings,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$VirtualMachineThreatDetectionSettings>,
      callback: BodyResponseCallback<Schema$VirtualMachineThreatDetectionSettings>
    ): void;
    getVirtualMachineThreatDetectionSettings(
      params: Params$Resource$Folders$Getvirtualmachinethreatdetectionsettings,
      callback: BodyResponseCallback<Schema$VirtualMachineThreatDetectionSettings>
    ): void;
    getVirtualMachineThreatDetectionSettings(
      callback: BodyResponseCallback<Schema$VirtualMachineThreatDetectionSettings>
    ): void;
    getVirtualMachineThreatDetectionSettings(
      paramsOrCallback?:
        | Params$Resource$Folders$Getvirtualmachinethreatdetectionsettings
        | BodyResponseCallback<Schema$VirtualMachineThreatDetectionSettings>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$VirtualMachineThreatDetectionSettings>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$VirtualMachineThreatDetectionSettings>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<
          GaxiosResponseWithHTTP2<Schema$VirtualMachineThreatDetectionSettings>
        >
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Folders$Getvirtualmachinethreatdetectionsettings;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Folders$Getvirtualmachinethreatdetectionsettings;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://securitycenter.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta2/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$VirtualMachineThreatDetectionSettings>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$VirtualMachineThreatDetectionSettings>(
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
     * const securitycenter = google.securitycenter('v1beta2');
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
     *   const res = await securitycenter.folders.getWebSecurityScannerSettings({
     *     name: 'folders/my-folder/webSecurityScannerSettings',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "modules": {},
     *   //   "name": "my_name",
     *   //   "serviceEnablementState": "my_serviceEnablementState",
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
    getWebSecurityScannerSettings(
      params: Params$Resource$Folders$Getwebsecurityscannersettings,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    getWebSecurityScannerSettings(
      params?: Params$Resource$Folders$Getwebsecurityscannersettings,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$WebSecurityScannerSettings>>;
    getWebSecurityScannerSettings(
      params: Params$Resource$Folders$Getwebsecurityscannersettings,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    getWebSecurityScannerSettings(
      params: Params$Resource$Folders$Getwebsecurityscannersettings,
      options:
        MethodOptions | BodyResponseCallback<Schema$WebSecurityScannerSettings>,
      callback: BodyResponseCallback<Schema$WebSecurityScannerSettings>
    ): void;
    getWebSecurityScannerSettings(
      params: Params$Resource$Folders$Getwebsecurityscannersettings,
      callback: BodyResponseCallback<Schema$WebSecurityScannerSettings>
    ): void;
    getWebSecurityScannerSettings(
      callback: BodyResponseCallback<Schema$WebSecurityScannerSettings>
    ): void;
    getWebSecurityScannerSettings(
      paramsOrCallback?:
        | Params$Resource$Folders$Getwebsecurityscannersettings
        | BodyResponseCallback<Schema$WebSecurityScannerSettings>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$WebSecurityScannerSettings>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$WebSecurityScannerSettings>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$WebSecurityScannerSettings>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Folders$Getwebsecurityscannersettings;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Folders$Getwebsecurityscannersettings;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://securitycenter.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta2/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$WebSecurityScannerSettings>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$WebSecurityScannerSettings>(parameters);
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
     * const securitycenter = google.securitycenter('v1beta2');
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
     *     await securitycenter.folders.updateContainerThreatDetectionSettings({
     *       name: 'folders/my-folder/containerThreatDetectionSettings',
     *
     *       updateMask: 'placeholder-value',
     *
     *       // Request body metadata
     *       requestBody: {
     *         // request body parameters
     *         // {
     *         //   "modules": {},
     *         //   "name": "my_name",
     *         //   "serviceAccount": "my_serviceAccount",
     *         //   "serviceEnablementState": "my_serviceEnablementState",
     *         //   "updateTime": "my_updateTime"
     *         // }
     *       },
     *     });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "modules": {},
     *   //   "name": "my_name",
     *   //   "serviceAccount": "my_serviceAccount",
     *   //   "serviceEnablementState": "my_serviceEnablementState",
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
    updateContainerThreatDetectionSettings(
      params: Params$Resource$Folders$Updatecontainerthreatdetectionsettings,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    updateContainerThreatDetectionSettings(
      params?: Params$Resource$Folders$Updatecontainerthreatdetectionsettings,
      options?: MethodOptions
    ): Promise<
      GaxiosResponseWithHTTP2<Schema$ContainerThreatDetectionSettings>
    >;
    updateContainerThreatDetectionSettings(
      params: Params$Resource$Folders$Updatecontainerthreatdetectionsettings,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    updateContainerThreatDetectionSettings(
      params: Params$Resource$Folders$Updatecontainerthreatdetectionsettings,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ContainerThreatDetectionSettings>,
      callback: BodyResponseCallback<Schema$ContainerThreatDetectionSettings>
    ): void;
    updateContainerThreatDetectionSettings(
      params: Params$Resource$Folders$Updatecontainerthreatdetectionsettings,
      callback: BodyResponseCallback<Schema$ContainerThreatDetectionSettings>
    ): void;
    updateContainerThreatDetectionSettings(
      callback: BodyResponseCallback<Schema$ContainerThreatDetectionSettings>
    ): void;
    updateContainerThreatDetectionSettings(
      paramsOrCallback?:
        | Params$Resource$Folders$Updatecontainerthreatdetectionsettings
        | BodyResponseCallback<Schema$ContainerThreatDetectionSettings>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ContainerThreatDetectionSettings>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ContainerThreatDetectionSettings>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<
          GaxiosResponseWithHTTP2<Schema$ContainerThreatDetectionSettings>
        >
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Folders$Updatecontainerthreatdetectionsettings;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Folders$Updatecontainerthreatdetectionsettings;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://securitycenter.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta2/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$ContainerThreatDetectionSettings>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ContainerThreatDetectionSettings>(
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
     * const securitycenter = google.securitycenter('v1beta2');
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
     *   const res = await securitycenter.folders.updateEventThreatDetectionSettings({
     *     name: 'folders/my-folder/eventThreatDetectionSettings',
     *
     *     updateMask: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "modules": {},
     *       //   "name": "my_name",
     *       //   "serviceEnablementState": "my_serviceEnablementState",
     *       //   "updateTime": "my_updateTime"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "modules": {},
     *   //   "name": "my_name",
     *   //   "serviceEnablementState": "my_serviceEnablementState",
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
    updateEventThreatDetectionSettings(
      params: Params$Resource$Folders$Updateeventthreatdetectionsettings,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    updateEventThreatDetectionSettings(
      params?: Params$Resource$Folders$Updateeventthreatdetectionsettings,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$EventThreatDetectionSettings>>;
    updateEventThreatDetectionSettings(
      params: Params$Resource$Folders$Updateeventthreatdetectionsettings,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    updateEventThreatDetectionSettings(
      params: Params$Resource$Folders$Updateeventthreatdetectionsettings,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$EventThreatDetectionSettings>,
      callback: BodyResponseCallback<Schema$EventThreatDetectionSettings>
    ): void;
    updateEventThreatDetectionSettings(
      params: Params$Resource$Folders$Updateeventthreatdetectionsettings,
      callback: BodyResponseCallback<Schema$EventThreatDetectionSettings>
    ): void;
    updateEventThreatDetectionSettings(
      callback: BodyResponseCallback<Schema$EventThreatDetectionSettings>
    ): void;
    updateEventThreatDetectionSettings(
      paramsOrCallback?:
        | Params$Resource$Folders$Updateeventthreatdetectionsettings
        | BodyResponseCallback<Schema$EventThreatDetectionSettings>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$EventThreatDetectionSettings>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$EventThreatDetectionSettings>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$EventThreatDetectionSettings>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Folders$Updateeventthreatdetectionsettings;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Folders$Updateeventthreatdetectionsettings;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://securitycenter.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta2/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$EventThreatDetectionSettings>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$EventThreatDetectionSettings>(
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
     * const securitycenter = google.securitycenter('v1beta2');
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
     *     await securitycenter.folders.updateRapidVulnerabilityDetectionSettings({
     *       name: 'folders/my-folder/rapidVulnerabilityDetectionSettings',
     *
     *       updateMask: 'placeholder-value',
     *
     *       // Request body metadata
     *       requestBody: {
     *         // request body parameters
     *         // {
     *         //   "modules": {},
     *         //   "name": "my_name",
     *         //   "serviceEnablementState": "my_serviceEnablementState",
     *         //   "updateTime": "my_updateTime"
     *         // }
     *       },
     *     });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "modules": {},
     *   //   "name": "my_name",
     *   //   "serviceEnablementState": "my_serviceEnablementState",
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
    updateRapidVulnerabilityDetectionSettings(
      params: Params$Resource$Folders$Updaterapidvulnerabilitydetectionsettings,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    updateRapidVulnerabilityDetectionSettings(
      params?: Params$Resource$Folders$Updaterapidvulnerabilitydetectionsettings,
      options?: MethodOptions
    ): Promise<
      GaxiosResponseWithHTTP2<Schema$RapidVulnerabilityDetectionSettings>
    >;
    updateRapidVulnerabilityDetectionSettings(
      params: Params$Resource$Folders$Updaterapidvulnerabilitydetectionsettings,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    updateRapidVulnerabilityDetectionSettings(
      params: Params$Resource$Folders$Updaterapidvulnerabilitydetectionsettings,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$RapidVulnerabilityDetectionSettings>,
      callback: BodyResponseCallback<Schema$RapidVulnerabilityDetectionSettings>
    ): void;
    updateRapidVulnerabilityDetectionSettings(
      params: Params$Resource$Folders$Updaterapidvulnerabilitydetectionsettings,
      callback: BodyResponseCallback<Schema$RapidVulnerabilityDetectionSettings>
    ): void;
    updateRapidVulnerabilityDetectionSettings(
      callback: BodyResponseCallback<Schema$RapidVulnerabilityDetectionSettings>
    ): void;
    updateRapidVulnerabilityDetectionSettings(
      paramsOrCallback?:
        | Params$Resource$Folders$Updaterapidvulnerabilitydetectionsettings
        | BodyResponseCallback<Schema$RapidVulnerabilityDetectionSettings>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$RapidVulnerabilityDetectionSettings>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$RapidVulnerabilityDetectionSettings>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<
          GaxiosResponseWithHTTP2<Schema$RapidVulnerabilityDetectionSettings>
        >
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Folders$Updaterapidvulnerabilitydetectionsettings;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Folders$Updaterapidvulnerabilitydetectionsettings;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://securitycenter.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta2/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$RapidVulnerabilityDetectionSettings>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$RapidVulnerabilityDetectionSettings>(
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
     * const securitycenter = google.securitycenter('v1beta2');
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
     *     await securitycenter.folders.updateSecurityHealthAnalyticsSettings({
     *       name: 'folders/my-folder/securityHealthAnalyticsSettings',
     *
     *       updateMask: 'placeholder-value',
     *
     *       // Request body metadata
     *       requestBody: {
     *         // request body parameters
     *         // {
     *         //   "modules": {},
     *         //   "name": "my_name",
     *         //   "serviceAccount": "my_serviceAccount",
     *         //   "serviceEnablementState": "my_serviceEnablementState",
     *         //   "updateTime": "my_updateTime"
     *         // }
     *       },
     *     });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "modules": {},
     *   //   "name": "my_name",
     *   //   "serviceAccount": "my_serviceAccount",
     *   //   "serviceEnablementState": "my_serviceEnablementState",
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
    updateSecurityHealthAnalyticsSettings(
      params: Params$Resource$Folders$Updatesecurityhealthanalyticssettings,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    updateSecurityHealthAnalyticsSettings(
      params?: Params$Resource$Folders$Updatesecurityhealthanalyticssettings,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$SecurityHealthAnalyticsSettings>>;
    updateSecurityHealthAnalyticsSettings(
      params: Params$Resource$Folders$Updatesecurityhealthanalyticssettings,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    updateSecurityHealthAnalyticsSettings(
      params: Params$Resource$Folders$Updatesecurityhealthanalyticssettings,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$SecurityHealthAnalyticsSettings>,
      callback: BodyResponseCallback<Schema$SecurityHealthAnalyticsSettings>
    ): void;
    updateSecurityHealthAnalyticsSettings(
      params: Params$Resource$Folders$Updatesecurityhealthanalyticssettings,
      callback: BodyResponseCallback<Schema$SecurityHealthAnalyticsSettings>
    ): void;
    updateSecurityHealthAnalyticsSettings(
      callback: BodyResponseCallback<Schema$SecurityHealthAnalyticsSettings>
    ): void;
    updateSecurityHealthAnalyticsSettings(
      paramsOrCallback?:
        | Params$Resource$Folders$Updatesecurityhealthanalyticssettings
        | BodyResponseCallback<Schema$SecurityHealthAnalyticsSettings>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$SecurityHealthAnalyticsSettings>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$SecurityHealthAnalyticsSettings>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$SecurityHealthAnalyticsSettings>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Folders$Updatesecurityhealthanalyticssettings;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Folders$Updatesecurityhealthanalyticssettings;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://securitycenter.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta2/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$SecurityHealthAnalyticsSettings>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$SecurityHealthAnalyticsSettings>(
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
     * const securitycenter = google.securitycenter('v1beta2');
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
     *     await securitycenter.folders.updateVirtualMachineThreatDetectionSettings({
     *       name: 'folders/my-folder/virtualMachineThreatDetectionSettings',
     *
     *       updateMask: 'placeholder-value',
     *
     *       // Request body metadata
     *       requestBody: {
     *         // request body parameters
     *         // {
     *         //   "modules": {},
     *         //   "name": "my_name",
     *         //   "serviceAccount": "my_serviceAccount",
     *         //   "serviceEnablementState": "my_serviceEnablementState",
     *         //   "updateTime": "my_updateTime"
     *         // }
     *       },
     *     });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "modules": {},
     *   //   "name": "my_name",
     *   //   "serviceAccount": "my_serviceAccount",
     *   //   "serviceEnablementState": "my_serviceEnablementState",
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
    updateVirtualMachineThreatDetectionSettings(
      params: Params$Resource$Folders$Updatevirtualmachinethreatdetectionsettings,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    updateVirtualMachineThreatDetectionSettings(
      params?: Params$Resource$Folders$Updatevirtualmachinethreatdetectionsettings,
      options?: MethodOptions
    ): Promise<
      GaxiosResponseWithHTTP2<Schema$VirtualMachineThreatDetectionSettings>
    >;
    updateVirtualMachineThreatDetectionSettings(
      params: Params$Resource$Folders$Updatevirtualmachinethreatdetectionsettings,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    updateVirtualMachineThreatDetectionSettings(
      params: Params$Resource$Folders$Updatevirtualmachinethreatdetectionsettings,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$VirtualMachineThreatDetectionSettings>,
      callback: BodyResponseCallback<Schema$VirtualMachineThreatDetectionSettings>
    ): void;
    updateVirtualMachineThreatDetectionSettings(
      params: Params$Resource$Folders$Updatevirtualmachinethreatdetectionsettings,
      callback: BodyResponseCallback<Schema$VirtualMachineThreatDetectionSettings>
    ): void;
    updateVirtualMachineThreatDetectionSettings(
      callback: BodyResponseCallback<Schema$VirtualMachineThreatDetectionSettings>
    ): void;
    updateVirtualMachineThreatDetectionSettings(
      paramsOrCallback?:
        | Params$Resource$Folders$Updatevirtualmachinethreatdetectionsettings
        | BodyResponseCallback<Schema$VirtualMachineThreatDetectionSettings>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$VirtualMachineThreatDetectionSettings>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$VirtualMachineThreatDetectionSettings>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<
          GaxiosResponseWithHTTP2<Schema$VirtualMachineThreatDetectionSettings>
        >
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Folders$Updatevirtualmachinethreatdetectionsettings;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Folders$Updatevirtualmachinethreatdetectionsettings;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://securitycenter.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta2/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$VirtualMachineThreatDetectionSettings>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$VirtualMachineThreatDetectionSettings>(
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
     * const securitycenter = google.securitycenter('v1beta2');
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
     *   const res = await securitycenter.folders.updateWebSecurityScannerSettings({
     *     name: 'folders/my-folder/webSecurityScannerSettings',
     *
     *     updateMask: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "modules": {},
     *       //   "name": "my_name",
     *       //   "serviceEnablementState": "my_serviceEnablementState",
     *       //   "updateTime": "my_updateTime"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "modules": {},
     *   //   "name": "my_name",
     *   //   "serviceEnablementState": "my_serviceEnablementState",
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
    updateWebSecurityScannerSettings(
      params: Params$Resource$Folders$Updatewebsecurityscannersettings,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    updateWebSecurityScannerSettings(
      params?: Params$Resource$Folders$Updatewebsecurityscannersettings,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$WebSecurityScannerSettings>>;
    updateWebSecurityScannerSettings(
      params: Params$Resource$Folders$Updatewebsecurityscannersettings,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    updateWebSecurityScannerSettings(
      params: Params$Resource$Folders$Updatewebsecurityscannersettings,
      options:
        MethodOptions | BodyResponseCallback<Schema$WebSecurityScannerSettings>,
      callback: BodyResponseCallback<Schema$WebSecurityScannerSettings>
    ): void;
    updateWebSecurityScannerSettings(
      params: Params$Resource$Folders$Updatewebsecurityscannersettings,
      callback: BodyResponseCallback<Schema$WebSecurityScannerSettings>
    ): void;
    updateWebSecurityScannerSettings(
      callback: BodyResponseCallback<Schema$WebSecurityScannerSettings>
    ): void;
    updateWebSecurityScannerSettings(
      paramsOrCallback?:
        | Params$Resource$Folders$Updatewebsecurityscannersettings
        | BodyResponseCallback<Schema$WebSecurityScannerSettings>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$WebSecurityScannerSettings>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$WebSecurityScannerSettings>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$WebSecurityScannerSettings>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Folders$Updatewebsecurityscannersettings;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Folders$Updatewebsecurityscannersettings;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://securitycenter.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta2/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$WebSecurityScannerSettings>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$WebSecurityScannerSettings>(parameters);
      }
    }
  }

  export interface Params$Resource$Folders$Getcontainerthreatdetectionsettings extends StandardParameters {
    /**
     *
     */
    name?: string;
  }
  export interface Params$Resource$Folders$Geteventthreatdetectionsettings extends StandardParameters {
    /**
     *
     */
    name?: string;
  }
  export interface Params$Resource$Folders$Getrapidvulnerabilitydetectionsettings extends StandardParameters {
    /**
     *
     */
    name?: string;
  }
  export interface Params$Resource$Folders$Getsecuritycentersettings extends StandardParameters {
    /**
     *
     */
    name?: string;
  }
  export interface Params$Resource$Folders$Getsecurityhealthanalyticssettings extends StandardParameters {
    /**
     *
     */
    name?: string;
  }
  export interface Params$Resource$Folders$Getvirtualmachinethreatdetectionsettings extends StandardParameters {
    /**
     *
     */
    name?: string;
  }
  export interface Params$Resource$Folders$Getwebsecurityscannersettings extends StandardParameters {
    /**
     *
     */
    name?: string;
  }
  export interface Params$Resource$Folders$Updatecontainerthreatdetectionsettings extends StandardParameters {
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
    requestBody?: Schema$ContainerThreatDetectionSettings;
  }
  export interface Params$Resource$Folders$Updateeventthreatdetectionsettings extends StandardParameters {
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
    requestBody?: Schema$EventThreatDetectionSettings;
  }
  export interface Params$Resource$Folders$Updaterapidvulnerabilitydetectionsettings extends StandardParameters {
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
    requestBody?: Schema$RapidVulnerabilityDetectionSettings;
  }
  export interface Params$Resource$Folders$Updatesecurityhealthanalyticssettings extends StandardParameters {
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
    requestBody?: Schema$SecurityHealthAnalyticsSettings;
  }
  export interface Params$Resource$Folders$Updatevirtualmachinethreatdetectionsettings extends StandardParameters {
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
    requestBody?: Schema$VirtualMachineThreatDetectionSettings;
  }
  export interface Params$Resource$Folders$Updatewebsecurityscannersettings extends StandardParameters {
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
    requestBody?: Schema$WebSecurityScannerSettings;
  }

  export class Resource$Folders$Containerthreatdetectionsettings {
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
     * const securitycenter = google.securitycenter('v1beta2');
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
     *     await securitycenter.folders.containerThreatDetectionSettings.calculate({
     *       name: 'folders/my-folder/containerThreatDetectionSettings',
     *
     *       showEligibleModulesOnly: 'placeholder-value',
     *     });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "modules": {},
     *   //   "name": "my_name",
     *   //   "serviceAccount": "my_serviceAccount",
     *   //   "serviceEnablementState": "my_serviceEnablementState",
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
    calculate(
      params: Params$Resource$Folders$Containerthreatdetectionsettings$Calculate,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    calculate(
      params?: Params$Resource$Folders$Containerthreatdetectionsettings$Calculate,
      options?: MethodOptions
    ): Promise<
      GaxiosResponseWithHTTP2<Schema$ContainerThreatDetectionSettings>
    >;
    calculate(
      params: Params$Resource$Folders$Containerthreatdetectionsettings$Calculate,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    calculate(
      params: Params$Resource$Folders$Containerthreatdetectionsettings$Calculate,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ContainerThreatDetectionSettings>,
      callback: BodyResponseCallback<Schema$ContainerThreatDetectionSettings>
    ): void;
    calculate(
      params: Params$Resource$Folders$Containerthreatdetectionsettings$Calculate,
      callback: BodyResponseCallback<Schema$ContainerThreatDetectionSettings>
    ): void;
    calculate(
      callback: BodyResponseCallback<Schema$ContainerThreatDetectionSettings>
    ): void;
    calculate(
      paramsOrCallback?:
        | Params$Resource$Folders$Containerthreatdetectionsettings$Calculate
        | BodyResponseCallback<Schema$ContainerThreatDetectionSettings>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ContainerThreatDetectionSettings>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ContainerThreatDetectionSettings>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<
          GaxiosResponseWithHTTP2<Schema$ContainerThreatDetectionSettings>
        >
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Folders$Containerthreatdetectionsettings$Calculate;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Folders$Containerthreatdetectionsettings$Calculate;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://securitycenter.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta2/{+name}:calculate').replace(
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
        createAPIRequest<Schema$ContainerThreatDetectionSettings>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ContainerThreatDetectionSettings>(
          parameters
        );
      }
    }
  }

  export interface Params$Resource$Folders$Containerthreatdetectionsettings$Calculate extends StandardParameters {
    /**
     *
     */
    name?: string;
    /**
     *
     */
    showEligibleModulesOnly?: boolean;
  }

  export class Resource$Folders$Eventthreatdetectionsettings {
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
     * const securitycenter = google.securitycenter('v1beta2');
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
     *     await securitycenter.folders.eventThreatDetectionSettings.calculate({
     *       name: 'folders/my-folder/eventThreatDetectionSettings',
     *
     *       showEligibleModulesOnly: 'placeholder-value',
     *     });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "modules": {},
     *   //   "name": "my_name",
     *   //   "serviceEnablementState": "my_serviceEnablementState",
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
    calculate(
      params: Params$Resource$Folders$Eventthreatdetectionsettings$Calculate,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    calculate(
      params?: Params$Resource$Folders$Eventthreatdetectionsettings$Calculate,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$EventThreatDetectionSettings>>;
    calculate(
      params: Params$Resource$Folders$Eventthreatdetectionsettings$Calculate,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    calculate(
      params: Params$Resource$Folders$Eventthreatdetectionsettings$Calculate,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$EventThreatDetectionSettings>,
      callback: BodyResponseCallback<Schema$EventThreatDetectionSettings>
    ): void;
    calculate(
      params: Params$Resource$Folders$Eventthreatdetectionsettings$Calculate,
      callback: BodyResponseCallback<Schema$EventThreatDetectionSettings>
    ): void;
    calculate(
      callback: BodyResponseCallback<Schema$EventThreatDetectionSettings>
    ): void;
    calculate(
      paramsOrCallback?:
        | Params$Resource$Folders$Eventthreatdetectionsettings$Calculate
        | BodyResponseCallback<Schema$EventThreatDetectionSettings>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$EventThreatDetectionSettings>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$EventThreatDetectionSettings>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$EventThreatDetectionSettings>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Folders$Eventthreatdetectionsettings$Calculate;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Folders$Eventthreatdetectionsettings$Calculate;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://securitycenter.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta2/{+name}:calculate').replace(
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
        createAPIRequest<Schema$EventThreatDetectionSettings>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$EventThreatDetectionSettings>(
          parameters
        );
      }
    }
  }

  export interface Params$Resource$Folders$Eventthreatdetectionsettings$Calculate extends StandardParameters {
    /**
     *
     */
    name?: string;
    /**
     *
     */
    showEligibleModulesOnly?: boolean;
  }

  export class Resource$Folders$Rapidvulnerabilitydetectionsettings {
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
     * const securitycenter = google.securitycenter('v1beta2');
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
     *     await securitycenter.folders.rapidVulnerabilityDetectionSettings.calculate({
     *       name: 'folders/my-folder/rapidVulnerabilityDetectionSettings',
     *     });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "modules": {},
     *   //   "name": "my_name",
     *   //   "serviceEnablementState": "my_serviceEnablementState",
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
    calculate(
      params: Params$Resource$Folders$Rapidvulnerabilitydetectionsettings$Calculate,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    calculate(
      params?: Params$Resource$Folders$Rapidvulnerabilitydetectionsettings$Calculate,
      options?: MethodOptions
    ): Promise<
      GaxiosResponseWithHTTP2<Schema$RapidVulnerabilityDetectionSettings>
    >;
    calculate(
      params: Params$Resource$Folders$Rapidvulnerabilitydetectionsettings$Calculate,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    calculate(
      params: Params$Resource$Folders$Rapidvulnerabilitydetectionsettings$Calculate,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$RapidVulnerabilityDetectionSettings>,
      callback: BodyResponseCallback<Schema$RapidVulnerabilityDetectionSettings>
    ): void;
    calculate(
      params: Params$Resource$Folders$Rapidvulnerabilitydetectionsettings$Calculate,
      callback: BodyResponseCallback<Schema$RapidVulnerabilityDetectionSettings>
    ): void;
    calculate(
      callback: BodyResponseCallback<Schema$RapidVulnerabilityDetectionSettings>
    ): void;
    calculate(
      paramsOrCallback?:
        | Params$Resource$Folders$Rapidvulnerabilitydetectionsettings$Calculate
        | BodyResponseCallback<Schema$RapidVulnerabilityDetectionSettings>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$RapidVulnerabilityDetectionSettings>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$RapidVulnerabilityDetectionSettings>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<
          GaxiosResponseWithHTTP2<Schema$RapidVulnerabilityDetectionSettings>
        >
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Folders$Rapidvulnerabilitydetectionsettings$Calculate;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Folders$Rapidvulnerabilitydetectionsettings$Calculate;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://securitycenter.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta2/{+name}:calculate').replace(
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
        createAPIRequest<Schema$RapidVulnerabilityDetectionSettings>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$RapidVulnerabilityDetectionSettings>(
          parameters
        );
      }
    }
  }

  export interface Params$Resource$Folders$Rapidvulnerabilitydetectionsettings$Calculate extends StandardParameters {
    /**
     *
     */
    name?: string;
  }

  export class Resource$Folders$Securityhealthanalyticssettings {
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
     * const securitycenter = google.securitycenter('v1beta2');
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
     *     await securitycenter.folders.securityHealthAnalyticsSettings.calculate({
     *       name: 'folders/my-folder/securityHealthAnalyticsSettings',
     *
     *       showEligibleModulesOnly: 'placeholder-value',
     *     });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "modules": {},
     *   //   "name": "my_name",
     *   //   "serviceAccount": "my_serviceAccount",
     *   //   "serviceEnablementState": "my_serviceEnablementState",
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
    calculate(
      params: Params$Resource$Folders$Securityhealthanalyticssettings$Calculate,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    calculate(
      params?: Params$Resource$Folders$Securityhealthanalyticssettings$Calculate,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$SecurityHealthAnalyticsSettings>>;
    calculate(
      params: Params$Resource$Folders$Securityhealthanalyticssettings$Calculate,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    calculate(
      params: Params$Resource$Folders$Securityhealthanalyticssettings$Calculate,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$SecurityHealthAnalyticsSettings>,
      callback: BodyResponseCallback<Schema$SecurityHealthAnalyticsSettings>
    ): void;
    calculate(
      params: Params$Resource$Folders$Securityhealthanalyticssettings$Calculate,
      callback: BodyResponseCallback<Schema$SecurityHealthAnalyticsSettings>
    ): void;
    calculate(
      callback: BodyResponseCallback<Schema$SecurityHealthAnalyticsSettings>
    ): void;
    calculate(
      paramsOrCallback?:
        | Params$Resource$Folders$Securityhealthanalyticssettings$Calculate
        | BodyResponseCallback<Schema$SecurityHealthAnalyticsSettings>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$SecurityHealthAnalyticsSettings>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$SecurityHealthAnalyticsSettings>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$SecurityHealthAnalyticsSettings>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Folders$Securityhealthanalyticssettings$Calculate;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Folders$Securityhealthanalyticssettings$Calculate;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://securitycenter.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta2/{+name}:calculate').replace(
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
        createAPIRequest<Schema$SecurityHealthAnalyticsSettings>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$SecurityHealthAnalyticsSettings>(
          parameters
        );
      }
    }
  }

  export interface Params$Resource$Folders$Securityhealthanalyticssettings$Calculate extends StandardParameters {
    /**
     *
     */
    name?: string;
    /**
     *
     */
    showEligibleModulesOnly?: boolean;
  }

  export class Resource$Folders$Virtualmachinethreatdetectionsettings {
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
     * const securitycenter = google.securitycenter('v1beta2');
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
     *     await securitycenter.folders.virtualMachineThreatDetectionSettings.calculate(
     *       {
     *         name: 'folders/my-folder/virtualMachineThreatDetectionSettings',
     *
     *         showEligibleModulesOnly: 'placeholder-value',
     *       },
     *     );
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "modules": {},
     *   //   "name": "my_name",
     *   //   "serviceAccount": "my_serviceAccount",
     *   //   "serviceEnablementState": "my_serviceEnablementState",
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
    calculate(
      params: Params$Resource$Folders$Virtualmachinethreatdetectionsettings$Calculate,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    calculate(
      params?: Params$Resource$Folders$Virtualmachinethreatdetectionsettings$Calculate,
      options?: MethodOptions
    ): Promise<
      GaxiosResponseWithHTTP2<Schema$VirtualMachineThreatDetectionSettings>
    >;
    calculate(
      params: Params$Resource$Folders$Virtualmachinethreatdetectionsettings$Calculate,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    calculate(
      params: Params$Resource$Folders$Virtualmachinethreatdetectionsettings$Calculate,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$VirtualMachineThreatDetectionSettings>,
      callback: BodyResponseCallback<Schema$VirtualMachineThreatDetectionSettings>
    ): void;
    calculate(
      params: Params$Resource$Folders$Virtualmachinethreatdetectionsettings$Calculate,
      callback: BodyResponseCallback<Schema$VirtualMachineThreatDetectionSettings>
    ): void;
    calculate(
      callback: BodyResponseCallback<Schema$VirtualMachineThreatDetectionSettings>
    ): void;
    calculate(
      paramsOrCallback?:
        | Params$Resource$Folders$Virtualmachinethreatdetectionsettings$Calculate
        | BodyResponseCallback<Schema$VirtualMachineThreatDetectionSettings>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$VirtualMachineThreatDetectionSettings>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$VirtualMachineThreatDetectionSettings>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<
          GaxiosResponseWithHTTP2<Schema$VirtualMachineThreatDetectionSettings>
        >
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Folders$Virtualmachinethreatdetectionsettings$Calculate;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Folders$Virtualmachinethreatdetectionsettings$Calculate;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://securitycenter.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta2/{+name}:calculate').replace(
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
        createAPIRequest<Schema$VirtualMachineThreatDetectionSettings>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$VirtualMachineThreatDetectionSettings>(
          parameters
        );
      }
    }
  }

  export interface Params$Resource$Folders$Virtualmachinethreatdetectionsettings$Calculate extends StandardParameters {
    /**
     *
     */
    name?: string;
    /**
     *
     */
    showEligibleModulesOnly?: boolean;
  }

  export class Resource$Folders$Websecurityscannersettings {
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
     * const securitycenter = google.securitycenter('v1beta2');
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
     *   const res = await securitycenter.folders.webSecurityScannerSettings.calculate(
     *     {
     *       name: 'folders/my-folder/webSecurityScannerSettings',
     *
     *       showEligibleModulesOnly: 'placeholder-value',
     *     },
     *   );
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "modules": {},
     *   //   "name": "my_name",
     *   //   "serviceEnablementState": "my_serviceEnablementState",
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
    calculate(
      params: Params$Resource$Folders$Websecurityscannersettings$Calculate,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    calculate(
      params?: Params$Resource$Folders$Websecurityscannersettings$Calculate,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$WebSecurityScannerSettings>>;
    calculate(
      params: Params$Resource$Folders$Websecurityscannersettings$Calculate,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    calculate(
      params: Params$Resource$Folders$Websecurityscannersettings$Calculate,
      options:
        MethodOptions | BodyResponseCallback<Schema$WebSecurityScannerSettings>,
      callback: BodyResponseCallback<Schema$WebSecurityScannerSettings>
    ): void;
    calculate(
      params: Params$Resource$Folders$Websecurityscannersettings$Calculate,
      callback: BodyResponseCallback<Schema$WebSecurityScannerSettings>
    ): void;
    calculate(
      callback: BodyResponseCallback<Schema$WebSecurityScannerSettings>
    ): void;
    calculate(
      paramsOrCallback?:
        | Params$Resource$Folders$Websecurityscannersettings$Calculate
        | BodyResponseCallback<Schema$WebSecurityScannerSettings>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$WebSecurityScannerSettings>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$WebSecurityScannerSettings>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$WebSecurityScannerSettings>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Folders$Websecurityscannersettings$Calculate;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Folders$Websecurityscannersettings$Calculate;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://securitycenter.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta2/{+name}:calculate').replace(
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
        createAPIRequest<Schema$WebSecurityScannerSettings>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$WebSecurityScannerSettings>(parameters);
      }
    }
  }

  export interface Params$Resource$Folders$Websecurityscannersettings$Calculate extends StandardParameters {
    /**
     *
     */
    name?: string;
    /**
     *
     */
    showEligibleModulesOnly?: boolean;
  }

  export class Resource$Organizations {
    context: APIRequestContext;
    containerThreatDetectionSettings: Resource$Organizations$Containerthreatdetectionsettings;
    eventThreatDetectionSettings: Resource$Organizations$Eventthreatdetectionsettings;
    rapidVulnerabilityDetectionSettings: Resource$Organizations$Rapidvulnerabilitydetectionsettings;
    securityHealthAnalyticsSettings: Resource$Organizations$Securityhealthanalyticssettings;
    virtualMachineThreatDetectionSettings: Resource$Organizations$Virtualmachinethreatdetectionsettings;
    webSecurityScannerSettings: Resource$Organizations$Websecurityscannersettings;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.containerThreatDetectionSettings =
        new Resource$Organizations$Containerthreatdetectionsettings(
          this.context
        );
      this.eventThreatDetectionSettings =
        new Resource$Organizations$Eventthreatdetectionsettings(this.context);
      this.rapidVulnerabilityDetectionSettings =
        new Resource$Organizations$Rapidvulnerabilitydetectionsettings(
          this.context
        );
      this.securityHealthAnalyticsSettings =
        new Resource$Organizations$Securityhealthanalyticssettings(
          this.context
        );
      this.virtualMachineThreatDetectionSettings =
        new Resource$Organizations$Virtualmachinethreatdetectionsettings(
          this.context
        );
      this.webSecurityScannerSettings =
        new Resource$Organizations$Websecurityscannersettings(this.context);
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
     * const securitycenter = google.securitycenter('v1beta2');
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
     *     await securitycenter.organizations.getContainerThreatDetectionSettings({
     *       name: 'organizations/my-organization/containerThreatDetectionSettings',
     *     });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "modules": {},
     *   //   "name": "my_name",
     *   //   "serviceAccount": "my_serviceAccount",
     *   //   "serviceEnablementState": "my_serviceEnablementState",
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
    getContainerThreatDetectionSettings(
      params: Params$Resource$Organizations$Getcontainerthreatdetectionsettings,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    getContainerThreatDetectionSettings(
      params?: Params$Resource$Organizations$Getcontainerthreatdetectionsettings,
      options?: MethodOptions
    ): Promise<
      GaxiosResponseWithHTTP2<Schema$ContainerThreatDetectionSettings>
    >;
    getContainerThreatDetectionSettings(
      params: Params$Resource$Organizations$Getcontainerthreatdetectionsettings,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    getContainerThreatDetectionSettings(
      params: Params$Resource$Organizations$Getcontainerthreatdetectionsettings,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ContainerThreatDetectionSettings>,
      callback: BodyResponseCallback<Schema$ContainerThreatDetectionSettings>
    ): void;
    getContainerThreatDetectionSettings(
      params: Params$Resource$Organizations$Getcontainerthreatdetectionsettings,
      callback: BodyResponseCallback<Schema$ContainerThreatDetectionSettings>
    ): void;
    getContainerThreatDetectionSettings(
      callback: BodyResponseCallback<Schema$ContainerThreatDetectionSettings>
    ): void;
    getContainerThreatDetectionSettings(
      paramsOrCallback?:
        | Params$Resource$Organizations$Getcontainerthreatdetectionsettings
        | BodyResponseCallback<Schema$ContainerThreatDetectionSettings>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ContainerThreatDetectionSettings>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ContainerThreatDetectionSettings>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<
          GaxiosResponseWithHTTP2<Schema$ContainerThreatDetectionSettings>
        >
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Organizations$Getcontainerthreatdetectionsettings;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Organizations$Getcontainerthreatdetectionsettings;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://securitycenter.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta2/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$ContainerThreatDetectionSettings>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ContainerThreatDetectionSettings>(
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
     * const securitycenter = google.securitycenter('v1beta2');
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
     *     await securitycenter.organizations.getEventThreatDetectionSettings({
     *       name: 'organizations/my-organization/eventThreatDetectionSettings',
     *     });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "modules": {},
     *   //   "name": "my_name",
     *   //   "serviceEnablementState": "my_serviceEnablementState",
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
    getEventThreatDetectionSettings(
      params: Params$Resource$Organizations$Geteventthreatdetectionsettings,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    getEventThreatDetectionSettings(
      params?: Params$Resource$Organizations$Geteventthreatdetectionsettings,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$EventThreatDetectionSettings>>;
    getEventThreatDetectionSettings(
      params: Params$Resource$Organizations$Geteventthreatdetectionsettings,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    getEventThreatDetectionSettings(
      params: Params$Resource$Organizations$Geteventthreatdetectionsettings,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$EventThreatDetectionSettings>,
      callback: BodyResponseCallback<Schema$EventThreatDetectionSettings>
    ): void;
    getEventThreatDetectionSettings(
      params: Params$Resource$Organizations$Geteventthreatdetectionsettings,
      callback: BodyResponseCallback<Schema$EventThreatDetectionSettings>
    ): void;
    getEventThreatDetectionSettings(
      callback: BodyResponseCallback<Schema$EventThreatDetectionSettings>
    ): void;
    getEventThreatDetectionSettings(
      paramsOrCallback?:
        | Params$Resource$Organizations$Geteventthreatdetectionsettings
        | BodyResponseCallback<Schema$EventThreatDetectionSettings>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$EventThreatDetectionSettings>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$EventThreatDetectionSettings>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$EventThreatDetectionSettings>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Organizations$Geteventthreatdetectionsettings;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Organizations$Geteventthreatdetectionsettings;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://securitycenter.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta2/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$EventThreatDetectionSettings>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$EventThreatDetectionSettings>(
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
     * const securitycenter = google.securitycenter('v1beta2');
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
     *     await securitycenter.organizations.getRapidVulnerabilityDetectionSettings({
     *       name: 'organizations/my-organization/rapidVulnerabilityDetectionSettings',
     *     });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "modules": {},
     *   //   "name": "my_name",
     *   //   "serviceEnablementState": "my_serviceEnablementState",
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
    getRapidVulnerabilityDetectionSettings(
      params: Params$Resource$Organizations$Getrapidvulnerabilitydetectionsettings,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    getRapidVulnerabilityDetectionSettings(
      params?: Params$Resource$Organizations$Getrapidvulnerabilitydetectionsettings,
      options?: MethodOptions
    ): Promise<
      GaxiosResponseWithHTTP2<Schema$RapidVulnerabilityDetectionSettings>
    >;
    getRapidVulnerabilityDetectionSettings(
      params: Params$Resource$Organizations$Getrapidvulnerabilitydetectionsettings,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    getRapidVulnerabilityDetectionSettings(
      params: Params$Resource$Organizations$Getrapidvulnerabilitydetectionsettings,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$RapidVulnerabilityDetectionSettings>,
      callback: BodyResponseCallback<Schema$RapidVulnerabilityDetectionSettings>
    ): void;
    getRapidVulnerabilityDetectionSettings(
      params: Params$Resource$Organizations$Getrapidvulnerabilitydetectionsettings,
      callback: BodyResponseCallback<Schema$RapidVulnerabilityDetectionSettings>
    ): void;
    getRapidVulnerabilityDetectionSettings(
      callback: BodyResponseCallback<Schema$RapidVulnerabilityDetectionSettings>
    ): void;
    getRapidVulnerabilityDetectionSettings(
      paramsOrCallback?:
        | Params$Resource$Organizations$Getrapidvulnerabilitydetectionsettings
        | BodyResponseCallback<Schema$RapidVulnerabilityDetectionSettings>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$RapidVulnerabilityDetectionSettings>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$RapidVulnerabilityDetectionSettings>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<
          GaxiosResponseWithHTTP2<Schema$RapidVulnerabilityDetectionSettings>
        >
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Organizations$Getrapidvulnerabilitydetectionsettings;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Organizations$Getrapidvulnerabilitydetectionsettings;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://securitycenter.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta2/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$RapidVulnerabilityDetectionSettings>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$RapidVulnerabilityDetectionSettings>(
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
     * const securitycenter = google.securitycenter('v1beta2');
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
     *   const res = await securitycenter.organizations.getSecurityCenterSettings({
     *     name: 'organizations/my-organization/securityCenterSettings',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "cryptoKeyName": "my_cryptoKeyName",
     *   //   "logSinkProject": "my_logSinkProject",
     *   //   "name": "my_name",
     *   //   "onboardingTime": "my_onboardingTime",
     *   //   "orgServiceAccount": "my_orgServiceAccount"
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
    getSecurityCenterSettings(
      params: Params$Resource$Organizations$Getsecuritycentersettings,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    getSecurityCenterSettings(
      params?: Params$Resource$Organizations$Getsecuritycentersettings,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$SecurityCenterSettings>>;
    getSecurityCenterSettings(
      params: Params$Resource$Organizations$Getsecuritycentersettings,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    getSecurityCenterSettings(
      params: Params$Resource$Organizations$Getsecuritycentersettings,
      options:
        MethodOptions | BodyResponseCallback<Schema$SecurityCenterSettings>,
      callback: BodyResponseCallback<Schema$SecurityCenterSettings>
    ): void;
    getSecurityCenterSettings(
      params: Params$Resource$Organizations$Getsecuritycentersettings,
      callback: BodyResponseCallback<Schema$SecurityCenterSettings>
    ): void;
    getSecurityCenterSettings(
      callback: BodyResponseCallback<Schema$SecurityCenterSettings>
    ): void;
    getSecurityCenterSettings(
      paramsOrCallback?:
        | Params$Resource$Organizations$Getsecuritycentersettings
        | BodyResponseCallback<Schema$SecurityCenterSettings>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$SecurityCenterSettings>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$SecurityCenterSettings>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$SecurityCenterSettings>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Organizations$Getsecuritycentersettings;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Organizations$Getsecuritycentersettings;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://securitycenter.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta2/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$SecurityCenterSettings>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$SecurityCenterSettings>(parameters);
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
     * const securitycenter = google.securitycenter('v1beta2');
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
     *     await securitycenter.organizations.getSecurityHealthAnalyticsSettings({
     *       name: 'organizations/my-organization/securityHealthAnalyticsSettings',
     *     });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "modules": {},
     *   //   "name": "my_name",
     *   //   "serviceAccount": "my_serviceAccount",
     *   //   "serviceEnablementState": "my_serviceEnablementState",
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
    getSecurityHealthAnalyticsSettings(
      params: Params$Resource$Organizations$Getsecurityhealthanalyticssettings,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    getSecurityHealthAnalyticsSettings(
      params?: Params$Resource$Organizations$Getsecurityhealthanalyticssettings,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$SecurityHealthAnalyticsSettings>>;
    getSecurityHealthAnalyticsSettings(
      params: Params$Resource$Organizations$Getsecurityhealthanalyticssettings,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    getSecurityHealthAnalyticsSettings(
      params: Params$Resource$Organizations$Getsecurityhealthanalyticssettings,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$SecurityHealthAnalyticsSettings>,
      callback: BodyResponseCallback<Schema$SecurityHealthAnalyticsSettings>
    ): void;
    getSecurityHealthAnalyticsSettings(
      params: Params$Resource$Organizations$Getsecurityhealthanalyticssettings,
      callback: BodyResponseCallback<Schema$SecurityHealthAnalyticsSettings>
    ): void;
    getSecurityHealthAnalyticsSettings(
      callback: BodyResponseCallback<Schema$SecurityHealthAnalyticsSettings>
    ): void;
    getSecurityHealthAnalyticsSettings(
      paramsOrCallback?:
        | Params$Resource$Organizations$Getsecurityhealthanalyticssettings
        | BodyResponseCallback<Schema$SecurityHealthAnalyticsSettings>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$SecurityHealthAnalyticsSettings>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$SecurityHealthAnalyticsSettings>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$SecurityHealthAnalyticsSettings>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Organizations$Getsecurityhealthanalyticssettings;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Organizations$Getsecurityhealthanalyticssettings;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://securitycenter.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta2/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$SecurityHealthAnalyticsSettings>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$SecurityHealthAnalyticsSettings>(
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
     * const securitycenter = google.securitycenter('v1beta2');
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
     *   const res = await securitycenter.organizations.getSubscription({
     *     name: 'organizations/my-organization/subscription',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "details": {},
     *   //   "name": "my_name",
     *   //   "tier": "my_tier"
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
    getSubscription(
      params: Params$Resource$Organizations$Getsubscription,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    getSubscription(
      params?: Params$Resource$Organizations$Getsubscription,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Subscription>>;
    getSubscription(
      params: Params$Resource$Organizations$Getsubscription,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    getSubscription(
      params: Params$Resource$Organizations$Getsubscription,
      options: MethodOptions | BodyResponseCallback<Schema$Subscription>,
      callback: BodyResponseCallback<Schema$Subscription>
    ): void;
    getSubscription(
      params: Params$Resource$Organizations$Getsubscription,
      callback: BodyResponseCallback<Schema$Subscription>
    ): void;
    getSubscription(callback: BodyResponseCallback<Schema$Subscription>): void;
    getSubscription(
      paramsOrCallback?:
        | Params$Resource$Organizations$Getsubscription
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
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$Subscription>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Organizations$Getsubscription;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Organizations$Getsubscription;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://securitycenter.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta2/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$Subscription>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Subscription>(parameters);
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
     * const securitycenter = google.securitycenter('v1beta2');
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
     *     await securitycenter.organizations.getVirtualMachineThreatDetectionSettings(
     *       {
     *         name: 'organizations/my-organization/virtualMachineThreatDetectionSettings',
     *       },
     *     );
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "modules": {},
     *   //   "name": "my_name",
     *   //   "serviceAccount": "my_serviceAccount",
     *   //   "serviceEnablementState": "my_serviceEnablementState",
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
    getVirtualMachineThreatDetectionSettings(
      params: Params$Resource$Organizations$Getvirtualmachinethreatdetectionsettings,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    getVirtualMachineThreatDetectionSettings(
      params?: Params$Resource$Organizations$Getvirtualmachinethreatdetectionsettings,
      options?: MethodOptions
    ): Promise<
      GaxiosResponseWithHTTP2<Schema$VirtualMachineThreatDetectionSettings>
    >;
    getVirtualMachineThreatDetectionSettings(
      params: Params$Resource$Organizations$Getvirtualmachinethreatdetectionsettings,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    getVirtualMachineThreatDetectionSettings(
      params: Params$Resource$Organizations$Getvirtualmachinethreatdetectionsettings,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$VirtualMachineThreatDetectionSettings>,
      callback: BodyResponseCallback<Schema$VirtualMachineThreatDetectionSettings>
    ): void;
    getVirtualMachineThreatDetectionSettings(
      params: Params$Resource$Organizations$Getvirtualmachinethreatdetectionsettings,
      callback: BodyResponseCallback<Schema$VirtualMachineThreatDetectionSettings>
    ): void;
    getVirtualMachineThreatDetectionSettings(
      callback: BodyResponseCallback<Schema$VirtualMachineThreatDetectionSettings>
    ): void;
    getVirtualMachineThreatDetectionSettings(
      paramsOrCallback?:
        | Params$Resource$Organizations$Getvirtualmachinethreatdetectionsettings
        | BodyResponseCallback<Schema$VirtualMachineThreatDetectionSettings>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$VirtualMachineThreatDetectionSettings>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$VirtualMachineThreatDetectionSettings>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<
          GaxiosResponseWithHTTP2<Schema$VirtualMachineThreatDetectionSettings>
        >
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Organizations$Getvirtualmachinethreatdetectionsettings;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Organizations$Getvirtualmachinethreatdetectionsettings;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://securitycenter.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta2/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$VirtualMachineThreatDetectionSettings>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$VirtualMachineThreatDetectionSettings>(
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
     * const securitycenter = google.securitycenter('v1beta2');
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
     *   const res = await securitycenter.organizations.getWebSecurityScannerSettings({
     *     name: 'organizations/my-organization/webSecurityScannerSettings',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "modules": {},
     *   //   "name": "my_name",
     *   //   "serviceEnablementState": "my_serviceEnablementState",
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
    getWebSecurityScannerSettings(
      params: Params$Resource$Organizations$Getwebsecurityscannersettings,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    getWebSecurityScannerSettings(
      params?: Params$Resource$Organizations$Getwebsecurityscannersettings,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$WebSecurityScannerSettings>>;
    getWebSecurityScannerSettings(
      params: Params$Resource$Organizations$Getwebsecurityscannersettings,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    getWebSecurityScannerSettings(
      params: Params$Resource$Organizations$Getwebsecurityscannersettings,
      options:
        MethodOptions | BodyResponseCallback<Schema$WebSecurityScannerSettings>,
      callback: BodyResponseCallback<Schema$WebSecurityScannerSettings>
    ): void;
    getWebSecurityScannerSettings(
      params: Params$Resource$Organizations$Getwebsecurityscannersettings,
      callback: BodyResponseCallback<Schema$WebSecurityScannerSettings>
    ): void;
    getWebSecurityScannerSettings(
      callback: BodyResponseCallback<Schema$WebSecurityScannerSettings>
    ): void;
    getWebSecurityScannerSettings(
      paramsOrCallback?:
        | Params$Resource$Organizations$Getwebsecurityscannersettings
        | BodyResponseCallback<Schema$WebSecurityScannerSettings>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$WebSecurityScannerSettings>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$WebSecurityScannerSettings>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$WebSecurityScannerSettings>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Organizations$Getwebsecurityscannersettings;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Organizations$Getwebsecurityscannersettings;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://securitycenter.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta2/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$WebSecurityScannerSettings>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$WebSecurityScannerSettings>(parameters);
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
     * const securitycenter = google.securitycenter('v1beta2');
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
     *     await securitycenter.organizations.updateContainerThreatDetectionSettings({
     *       name: 'organizations/my-organization/containerThreatDetectionSettings',
     *
     *       updateMask: 'placeholder-value',
     *
     *       // Request body metadata
     *       requestBody: {
     *         // request body parameters
     *         // {
     *         //   "modules": {},
     *         //   "name": "my_name",
     *         //   "serviceAccount": "my_serviceAccount",
     *         //   "serviceEnablementState": "my_serviceEnablementState",
     *         //   "updateTime": "my_updateTime"
     *         // }
     *       },
     *     });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "modules": {},
     *   //   "name": "my_name",
     *   //   "serviceAccount": "my_serviceAccount",
     *   //   "serviceEnablementState": "my_serviceEnablementState",
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
    updateContainerThreatDetectionSettings(
      params: Params$Resource$Organizations$Updatecontainerthreatdetectionsettings,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    updateContainerThreatDetectionSettings(
      params?: Params$Resource$Organizations$Updatecontainerthreatdetectionsettings,
      options?: MethodOptions
    ): Promise<
      GaxiosResponseWithHTTP2<Schema$ContainerThreatDetectionSettings>
    >;
    updateContainerThreatDetectionSettings(
      params: Params$Resource$Organizations$Updatecontainerthreatdetectionsettings,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    updateContainerThreatDetectionSettings(
      params: Params$Resource$Organizations$Updatecontainerthreatdetectionsettings,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ContainerThreatDetectionSettings>,
      callback: BodyResponseCallback<Schema$ContainerThreatDetectionSettings>
    ): void;
    updateContainerThreatDetectionSettings(
      params: Params$Resource$Organizations$Updatecontainerthreatdetectionsettings,
      callback: BodyResponseCallback<Schema$ContainerThreatDetectionSettings>
    ): void;
    updateContainerThreatDetectionSettings(
      callback: BodyResponseCallback<Schema$ContainerThreatDetectionSettings>
    ): void;
    updateContainerThreatDetectionSettings(
      paramsOrCallback?:
        | Params$Resource$Organizations$Updatecontainerthreatdetectionsettings
        | BodyResponseCallback<Schema$ContainerThreatDetectionSettings>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ContainerThreatDetectionSettings>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ContainerThreatDetectionSettings>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<
          GaxiosResponseWithHTTP2<Schema$ContainerThreatDetectionSettings>
        >
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Organizations$Updatecontainerthreatdetectionsettings;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Organizations$Updatecontainerthreatdetectionsettings;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://securitycenter.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta2/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$ContainerThreatDetectionSettings>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ContainerThreatDetectionSettings>(
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
     * const securitycenter = google.securitycenter('v1beta2');
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
     *     await securitycenter.organizations.updateEventThreatDetectionSettings({
     *       name: 'organizations/my-organization/eventThreatDetectionSettings',
     *
     *       updateMask: 'placeholder-value',
     *
     *       // Request body metadata
     *       requestBody: {
     *         // request body parameters
     *         // {
     *         //   "modules": {},
     *         //   "name": "my_name",
     *         //   "serviceEnablementState": "my_serviceEnablementState",
     *         //   "updateTime": "my_updateTime"
     *         // }
     *       },
     *     });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "modules": {},
     *   //   "name": "my_name",
     *   //   "serviceEnablementState": "my_serviceEnablementState",
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
    updateEventThreatDetectionSettings(
      params: Params$Resource$Organizations$Updateeventthreatdetectionsettings,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    updateEventThreatDetectionSettings(
      params?: Params$Resource$Organizations$Updateeventthreatdetectionsettings,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$EventThreatDetectionSettings>>;
    updateEventThreatDetectionSettings(
      params: Params$Resource$Organizations$Updateeventthreatdetectionsettings,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    updateEventThreatDetectionSettings(
      params: Params$Resource$Organizations$Updateeventthreatdetectionsettings,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$EventThreatDetectionSettings>,
      callback: BodyResponseCallback<Schema$EventThreatDetectionSettings>
    ): void;
    updateEventThreatDetectionSettings(
      params: Params$Resource$Organizations$Updateeventthreatdetectionsettings,
      callback: BodyResponseCallback<Schema$EventThreatDetectionSettings>
    ): void;
    updateEventThreatDetectionSettings(
      callback: BodyResponseCallback<Schema$EventThreatDetectionSettings>
    ): void;
    updateEventThreatDetectionSettings(
      paramsOrCallback?:
        | Params$Resource$Organizations$Updateeventthreatdetectionsettings
        | BodyResponseCallback<Schema$EventThreatDetectionSettings>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$EventThreatDetectionSettings>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$EventThreatDetectionSettings>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$EventThreatDetectionSettings>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Organizations$Updateeventthreatdetectionsettings;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Organizations$Updateeventthreatdetectionsettings;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://securitycenter.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta2/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$EventThreatDetectionSettings>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$EventThreatDetectionSettings>(
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
     * const securitycenter = google.securitycenter('v1beta2');
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
     *     await securitycenter.organizations.updateRapidVulnerabilityDetectionSettings(
     *       {
     *         name: 'organizations/my-organization/rapidVulnerabilityDetectionSettings',
     *
     *         updateMask: 'placeholder-value',
     *
     *         // Request body metadata
     *         requestBody: {
     *           // request body parameters
     *           // {
     *           //   "modules": {},
     *           //   "name": "my_name",
     *           //   "serviceEnablementState": "my_serviceEnablementState",
     *           //   "updateTime": "my_updateTime"
     *           // }
     *         },
     *       },
     *     );
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "modules": {},
     *   //   "name": "my_name",
     *   //   "serviceEnablementState": "my_serviceEnablementState",
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
    updateRapidVulnerabilityDetectionSettings(
      params: Params$Resource$Organizations$Updaterapidvulnerabilitydetectionsettings,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    updateRapidVulnerabilityDetectionSettings(
      params?: Params$Resource$Organizations$Updaterapidvulnerabilitydetectionsettings,
      options?: MethodOptions
    ): Promise<
      GaxiosResponseWithHTTP2<Schema$RapidVulnerabilityDetectionSettings>
    >;
    updateRapidVulnerabilityDetectionSettings(
      params: Params$Resource$Organizations$Updaterapidvulnerabilitydetectionsettings,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    updateRapidVulnerabilityDetectionSettings(
      params: Params$Resource$Organizations$Updaterapidvulnerabilitydetectionsettings,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$RapidVulnerabilityDetectionSettings>,
      callback: BodyResponseCallback<Schema$RapidVulnerabilityDetectionSettings>
    ): void;
    updateRapidVulnerabilityDetectionSettings(
      params: Params$Resource$Organizations$Updaterapidvulnerabilitydetectionsettings,
      callback: BodyResponseCallback<Schema$RapidVulnerabilityDetectionSettings>
    ): void;
    updateRapidVulnerabilityDetectionSettings(
      callback: BodyResponseCallback<Schema$RapidVulnerabilityDetectionSettings>
    ): void;
    updateRapidVulnerabilityDetectionSettings(
      paramsOrCallback?:
        | Params$Resource$Organizations$Updaterapidvulnerabilitydetectionsettings
        | BodyResponseCallback<Schema$RapidVulnerabilityDetectionSettings>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$RapidVulnerabilityDetectionSettings>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$RapidVulnerabilityDetectionSettings>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<
          GaxiosResponseWithHTTP2<Schema$RapidVulnerabilityDetectionSettings>
        >
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Organizations$Updaterapidvulnerabilitydetectionsettings;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Organizations$Updaterapidvulnerabilitydetectionsettings;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://securitycenter.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta2/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$RapidVulnerabilityDetectionSettings>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$RapidVulnerabilityDetectionSettings>(
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
     * const securitycenter = google.securitycenter('v1beta2');
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
     *     await securitycenter.organizations.updateSecurityHealthAnalyticsSettings({
     *       name: 'organizations/my-organization/securityHealthAnalyticsSettings',
     *
     *       updateMask: 'placeholder-value',
     *
     *       // Request body metadata
     *       requestBody: {
     *         // request body parameters
     *         // {
     *         //   "modules": {},
     *         //   "name": "my_name",
     *         //   "serviceAccount": "my_serviceAccount",
     *         //   "serviceEnablementState": "my_serviceEnablementState",
     *         //   "updateTime": "my_updateTime"
     *         // }
     *       },
     *     });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "modules": {},
     *   //   "name": "my_name",
     *   //   "serviceAccount": "my_serviceAccount",
     *   //   "serviceEnablementState": "my_serviceEnablementState",
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
    updateSecurityHealthAnalyticsSettings(
      params: Params$Resource$Organizations$Updatesecurityhealthanalyticssettings,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    updateSecurityHealthAnalyticsSettings(
      params?: Params$Resource$Organizations$Updatesecurityhealthanalyticssettings,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$SecurityHealthAnalyticsSettings>>;
    updateSecurityHealthAnalyticsSettings(
      params: Params$Resource$Organizations$Updatesecurityhealthanalyticssettings,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    updateSecurityHealthAnalyticsSettings(
      params: Params$Resource$Organizations$Updatesecurityhealthanalyticssettings,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$SecurityHealthAnalyticsSettings>,
      callback: BodyResponseCallback<Schema$SecurityHealthAnalyticsSettings>
    ): void;
    updateSecurityHealthAnalyticsSettings(
      params: Params$Resource$Organizations$Updatesecurityhealthanalyticssettings,
      callback: BodyResponseCallback<Schema$SecurityHealthAnalyticsSettings>
    ): void;
    updateSecurityHealthAnalyticsSettings(
      callback: BodyResponseCallback<Schema$SecurityHealthAnalyticsSettings>
    ): void;
    updateSecurityHealthAnalyticsSettings(
      paramsOrCallback?:
        | Params$Resource$Organizations$Updatesecurityhealthanalyticssettings
        | BodyResponseCallback<Schema$SecurityHealthAnalyticsSettings>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$SecurityHealthAnalyticsSettings>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$SecurityHealthAnalyticsSettings>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$SecurityHealthAnalyticsSettings>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Organizations$Updatesecurityhealthanalyticssettings;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Organizations$Updatesecurityhealthanalyticssettings;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://securitycenter.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta2/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$SecurityHealthAnalyticsSettings>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$SecurityHealthAnalyticsSettings>(
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
     * const securitycenter = google.securitycenter('v1beta2');
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
     *     await securitycenter.organizations.updateVirtualMachineThreatDetectionSettings(
     *       {
     *         name: 'organizations/my-organization/virtualMachineThreatDetectionSettings',
     *
     *         updateMask: 'placeholder-value',
     *
     *         // Request body metadata
     *         requestBody: {
     *           // request body parameters
     *           // {
     *           //   "modules": {},
     *           //   "name": "my_name",
     *           //   "serviceAccount": "my_serviceAccount",
     *           //   "serviceEnablementState": "my_serviceEnablementState",
     *           //   "updateTime": "my_updateTime"
     *           // }
     *         },
     *       },
     *     );
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "modules": {},
     *   //   "name": "my_name",
     *   //   "serviceAccount": "my_serviceAccount",
     *   //   "serviceEnablementState": "my_serviceEnablementState",
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
    updateVirtualMachineThreatDetectionSettings(
      params: Params$Resource$Organizations$Updatevirtualmachinethreatdetectionsettings,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    updateVirtualMachineThreatDetectionSettings(
      params?: Params$Resource$Organizations$Updatevirtualmachinethreatdetectionsettings,
      options?: MethodOptions
    ): Promise<
      GaxiosResponseWithHTTP2<Schema$VirtualMachineThreatDetectionSettings>
    >;
    updateVirtualMachineThreatDetectionSettings(
      params: Params$Resource$Organizations$Updatevirtualmachinethreatdetectionsettings,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    updateVirtualMachineThreatDetectionSettings(
      params: Params$Resource$Organizations$Updatevirtualmachinethreatdetectionsettings,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$VirtualMachineThreatDetectionSettings>,
      callback: BodyResponseCallback<Schema$VirtualMachineThreatDetectionSettings>
    ): void;
    updateVirtualMachineThreatDetectionSettings(
      params: Params$Resource$Organizations$Updatevirtualmachinethreatdetectionsettings,
      callback: BodyResponseCallback<Schema$VirtualMachineThreatDetectionSettings>
    ): void;
    updateVirtualMachineThreatDetectionSettings(
      callback: BodyResponseCallback<Schema$VirtualMachineThreatDetectionSettings>
    ): void;
    updateVirtualMachineThreatDetectionSettings(
      paramsOrCallback?:
        | Params$Resource$Organizations$Updatevirtualmachinethreatdetectionsettings
        | BodyResponseCallback<Schema$VirtualMachineThreatDetectionSettings>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$VirtualMachineThreatDetectionSettings>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$VirtualMachineThreatDetectionSettings>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<
          GaxiosResponseWithHTTP2<Schema$VirtualMachineThreatDetectionSettings>
        >
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Organizations$Updatevirtualmachinethreatdetectionsettings;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Organizations$Updatevirtualmachinethreatdetectionsettings;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://securitycenter.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta2/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$VirtualMachineThreatDetectionSettings>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$VirtualMachineThreatDetectionSettings>(
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
     * const securitycenter = google.securitycenter('v1beta2');
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
     *     await securitycenter.organizations.updateWebSecurityScannerSettings({
     *       name: 'organizations/my-organization/webSecurityScannerSettings',
     *
     *       updateMask: 'placeholder-value',
     *
     *       // Request body metadata
     *       requestBody: {
     *         // request body parameters
     *         // {
     *         //   "modules": {},
     *         //   "name": "my_name",
     *         //   "serviceEnablementState": "my_serviceEnablementState",
     *         //   "updateTime": "my_updateTime"
     *         // }
     *       },
     *     });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "modules": {},
     *   //   "name": "my_name",
     *   //   "serviceEnablementState": "my_serviceEnablementState",
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
    updateWebSecurityScannerSettings(
      params: Params$Resource$Organizations$Updatewebsecurityscannersettings,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    updateWebSecurityScannerSettings(
      params?: Params$Resource$Organizations$Updatewebsecurityscannersettings,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$WebSecurityScannerSettings>>;
    updateWebSecurityScannerSettings(
      params: Params$Resource$Organizations$Updatewebsecurityscannersettings,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    updateWebSecurityScannerSettings(
      params: Params$Resource$Organizations$Updatewebsecurityscannersettings,
      options:
        MethodOptions | BodyResponseCallback<Schema$WebSecurityScannerSettings>,
      callback: BodyResponseCallback<Schema$WebSecurityScannerSettings>
    ): void;
    updateWebSecurityScannerSettings(
      params: Params$Resource$Organizations$Updatewebsecurityscannersettings,
      callback: BodyResponseCallback<Schema$WebSecurityScannerSettings>
    ): void;
    updateWebSecurityScannerSettings(
      callback: BodyResponseCallback<Schema$WebSecurityScannerSettings>
    ): void;
    updateWebSecurityScannerSettings(
      paramsOrCallback?:
        | Params$Resource$Organizations$Updatewebsecurityscannersettings
        | BodyResponseCallback<Schema$WebSecurityScannerSettings>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$WebSecurityScannerSettings>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$WebSecurityScannerSettings>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$WebSecurityScannerSettings>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Organizations$Updatewebsecurityscannersettings;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Organizations$Updatewebsecurityscannersettings;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://securitycenter.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta2/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$WebSecurityScannerSettings>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$WebSecurityScannerSettings>(parameters);
      }
    }
  }

  export interface Params$Resource$Organizations$Getcontainerthreatdetectionsettings extends StandardParameters {
    /**
     *
     */
    name?: string;
  }
  export interface Params$Resource$Organizations$Geteventthreatdetectionsettings extends StandardParameters {
    /**
     *
     */
    name?: string;
  }
  export interface Params$Resource$Organizations$Getrapidvulnerabilitydetectionsettings extends StandardParameters {
    /**
     *
     */
    name?: string;
  }
  export interface Params$Resource$Organizations$Getsecuritycentersettings extends StandardParameters {
    /**
     *
     */
    name?: string;
  }
  export interface Params$Resource$Organizations$Getsecurityhealthanalyticssettings extends StandardParameters {
    /**
     *
     */
    name?: string;
  }
  export interface Params$Resource$Organizations$Getsubscription extends StandardParameters {
    /**
     *
     */
    name?: string;
  }
  export interface Params$Resource$Organizations$Getvirtualmachinethreatdetectionsettings extends StandardParameters {
    /**
     *
     */
    name?: string;
  }
  export interface Params$Resource$Organizations$Getwebsecurityscannersettings extends StandardParameters {
    /**
     *
     */
    name?: string;
  }
  export interface Params$Resource$Organizations$Updatecontainerthreatdetectionsettings extends StandardParameters {
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
    requestBody?: Schema$ContainerThreatDetectionSettings;
  }
  export interface Params$Resource$Organizations$Updateeventthreatdetectionsettings extends StandardParameters {
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
    requestBody?: Schema$EventThreatDetectionSettings;
  }
  export interface Params$Resource$Organizations$Updaterapidvulnerabilitydetectionsettings extends StandardParameters {
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
    requestBody?: Schema$RapidVulnerabilityDetectionSettings;
  }
  export interface Params$Resource$Organizations$Updatesecurityhealthanalyticssettings extends StandardParameters {
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
    requestBody?: Schema$SecurityHealthAnalyticsSettings;
  }
  export interface Params$Resource$Organizations$Updatevirtualmachinethreatdetectionsettings extends StandardParameters {
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
    requestBody?: Schema$VirtualMachineThreatDetectionSettings;
  }
  export interface Params$Resource$Organizations$Updatewebsecurityscannersettings extends StandardParameters {
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
    requestBody?: Schema$WebSecurityScannerSettings;
  }

  export class Resource$Organizations$Containerthreatdetectionsettings {
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
     * const securitycenter = google.securitycenter('v1beta2');
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
     *     await securitycenter.organizations.containerThreatDetectionSettings.calculate(
     *       {
     *         name: 'organizations/my-organization/containerThreatDetectionSettings',
     *
     *         showEligibleModulesOnly: 'placeholder-value',
     *       },
     *     );
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "modules": {},
     *   //   "name": "my_name",
     *   //   "serviceAccount": "my_serviceAccount",
     *   //   "serviceEnablementState": "my_serviceEnablementState",
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
    calculate(
      params: Params$Resource$Organizations$Containerthreatdetectionsettings$Calculate,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    calculate(
      params?: Params$Resource$Organizations$Containerthreatdetectionsettings$Calculate,
      options?: MethodOptions
    ): Promise<
      GaxiosResponseWithHTTP2<Schema$ContainerThreatDetectionSettings>
    >;
    calculate(
      params: Params$Resource$Organizations$Containerthreatdetectionsettings$Calculate,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    calculate(
      params: Params$Resource$Organizations$Containerthreatdetectionsettings$Calculate,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ContainerThreatDetectionSettings>,
      callback: BodyResponseCallback<Schema$ContainerThreatDetectionSettings>
    ): void;
    calculate(
      params: Params$Resource$Organizations$Containerthreatdetectionsettings$Calculate,
      callback: BodyResponseCallback<Schema$ContainerThreatDetectionSettings>
    ): void;
    calculate(
      callback: BodyResponseCallback<Schema$ContainerThreatDetectionSettings>
    ): void;
    calculate(
      paramsOrCallback?:
        | Params$Resource$Organizations$Containerthreatdetectionsettings$Calculate
        | BodyResponseCallback<Schema$ContainerThreatDetectionSettings>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ContainerThreatDetectionSettings>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ContainerThreatDetectionSettings>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<
          GaxiosResponseWithHTTP2<Schema$ContainerThreatDetectionSettings>
        >
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Organizations$Containerthreatdetectionsettings$Calculate;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Organizations$Containerthreatdetectionsettings$Calculate;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://securitycenter.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta2/{+name}:calculate').replace(
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
        createAPIRequest<Schema$ContainerThreatDetectionSettings>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ContainerThreatDetectionSettings>(
          parameters
        );
      }
    }
  }

  export interface Params$Resource$Organizations$Containerthreatdetectionsettings$Calculate extends StandardParameters {
    /**
     *
     */
    name?: string;
    /**
     *
     */
    showEligibleModulesOnly?: boolean;
  }

  export class Resource$Organizations$Eventthreatdetectionsettings {
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
     * const securitycenter = google.securitycenter('v1beta2');
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
     *     await securitycenter.organizations.eventThreatDetectionSettings.calculate({
     *       name: 'organizations/my-organization/eventThreatDetectionSettings',
     *
     *       showEligibleModulesOnly: 'placeholder-value',
     *     });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "modules": {},
     *   //   "name": "my_name",
     *   //   "serviceEnablementState": "my_serviceEnablementState",
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
    calculate(
      params: Params$Resource$Organizations$Eventthreatdetectionsettings$Calculate,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    calculate(
      params?: Params$Resource$Organizations$Eventthreatdetectionsettings$Calculate,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$EventThreatDetectionSettings>>;
    calculate(
      params: Params$Resource$Organizations$Eventthreatdetectionsettings$Calculate,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    calculate(
      params: Params$Resource$Organizations$Eventthreatdetectionsettings$Calculate,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$EventThreatDetectionSettings>,
      callback: BodyResponseCallback<Schema$EventThreatDetectionSettings>
    ): void;
    calculate(
      params: Params$Resource$Organizations$Eventthreatdetectionsettings$Calculate,
      callback: BodyResponseCallback<Schema$EventThreatDetectionSettings>
    ): void;
    calculate(
      callback: BodyResponseCallback<Schema$EventThreatDetectionSettings>
    ): void;
    calculate(
      paramsOrCallback?:
        | Params$Resource$Organizations$Eventthreatdetectionsettings$Calculate
        | BodyResponseCallback<Schema$EventThreatDetectionSettings>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$EventThreatDetectionSettings>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$EventThreatDetectionSettings>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$EventThreatDetectionSettings>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Organizations$Eventthreatdetectionsettings$Calculate;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Organizations$Eventthreatdetectionsettings$Calculate;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://securitycenter.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta2/{+name}:calculate').replace(
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
        createAPIRequest<Schema$EventThreatDetectionSettings>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$EventThreatDetectionSettings>(
          parameters
        );
      }
    }
  }

  export interface Params$Resource$Organizations$Eventthreatdetectionsettings$Calculate extends StandardParameters {
    /**
     *
     */
    name?: string;
    /**
     *
     */
    showEligibleModulesOnly?: boolean;
  }

  export class Resource$Organizations$Rapidvulnerabilitydetectionsettings {
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
     * const securitycenter = google.securitycenter('v1beta2');
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
     *     await securitycenter.organizations.rapidVulnerabilityDetectionSettings.calculate(
     *       {
     *         name: 'organizations/my-organization/rapidVulnerabilityDetectionSettings',
     *       },
     *     );
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "modules": {},
     *   //   "name": "my_name",
     *   //   "serviceEnablementState": "my_serviceEnablementState",
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
    calculate(
      params: Params$Resource$Organizations$Rapidvulnerabilitydetectionsettings$Calculate,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    calculate(
      params?: Params$Resource$Organizations$Rapidvulnerabilitydetectionsettings$Calculate,
      options?: MethodOptions
    ): Promise<
      GaxiosResponseWithHTTP2<Schema$RapidVulnerabilityDetectionSettings>
    >;
    calculate(
      params: Params$Resource$Organizations$Rapidvulnerabilitydetectionsettings$Calculate,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    calculate(
      params: Params$Resource$Organizations$Rapidvulnerabilitydetectionsettings$Calculate,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$RapidVulnerabilityDetectionSettings>,
      callback: BodyResponseCallback<Schema$RapidVulnerabilityDetectionSettings>
    ): void;
    calculate(
      params: Params$Resource$Organizations$Rapidvulnerabilitydetectionsettings$Calculate,
      callback: BodyResponseCallback<Schema$RapidVulnerabilityDetectionSettings>
    ): void;
    calculate(
      callback: BodyResponseCallback<Schema$RapidVulnerabilityDetectionSettings>
    ): void;
    calculate(
      paramsOrCallback?:
        | Params$Resource$Organizations$Rapidvulnerabilitydetectionsettings$Calculate
        | BodyResponseCallback<Schema$RapidVulnerabilityDetectionSettings>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$RapidVulnerabilityDetectionSettings>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$RapidVulnerabilityDetectionSettings>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<
          GaxiosResponseWithHTTP2<Schema$RapidVulnerabilityDetectionSettings>
        >
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Organizations$Rapidvulnerabilitydetectionsettings$Calculate;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Organizations$Rapidvulnerabilitydetectionsettings$Calculate;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://securitycenter.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta2/{+name}:calculate').replace(
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
        createAPIRequest<Schema$RapidVulnerabilityDetectionSettings>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$RapidVulnerabilityDetectionSettings>(
          parameters
        );
      }
    }
  }

  export interface Params$Resource$Organizations$Rapidvulnerabilitydetectionsettings$Calculate extends StandardParameters {
    /**
     *
     */
    name?: string;
  }

  export class Resource$Organizations$Securityhealthanalyticssettings {
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
     * const securitycenter = google.securitycenter('v1beta2');
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
     *     await securitycenter.organizations.securityHealthAnalyticsSettings.calculate(
     *       {
     *         name: 'organizations/my-organization/securityHealthAnalyticsSettings',
     *
     *         showEligibleModulesOnly: 'placeholder-value',
     *       },
     *     );
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "modules": {},
     *   //   "name": "my_name",
     *   //   "serviceAccount": "my_serviceAccount",
     *   //   "serviceEnablementState": "my_serviceEnablementState",
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
    calculate(
      params: Params$Resource$Organizations$Securityhealthanalyticssettings$Calculate,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    calculate(
      params?: Params$Resource$Organizations$Securityhealthanalyticssettings$Calculate,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$SecurityHealthAnalyticsSettings>>;
    calculate(
      params: Params$Resource$Organizations$Securityhealthanalyticssettings$Calculate,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    calculate(
      params: Params$Resource$Organizations$Securityhealthanalyticssettings$Calculate,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$SecurityHealthAnalyticsSettings>,
      callback: BodyResponseCallback<Schema$SecurityHealthAnalyticsSettings>
    ): void;
    calculate(
      params: Params$Resource$Organizations$Securityhealthanalyticssettings$Calculate,
      callback: BodyResponseCallback<Schema$SecurityHealthAnalyticsSettings>
    ): void;
    calculate(
      callback: BodyResponseCallback<Schema$SecurityHealthAnalyticsSettings>
    ): void;
    calculate(
      paramsOrCallback?:
        | Params$Resource$Organizations$Securityhealthanalyticssettings$Calculate
        | BodyResponseCallback<Schema$SecurityHealthAnalyticsSettings>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$SecurityHealthAnalyticsSettings>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$SecurityHealthAnalyticsSettings>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$SecurityHealthAnalyticsSettings>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Organizations$Securityhealthanalyticssettings$Calculate;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Organizations$Securityhealthanalyticssettings$Calculate;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://securitycenter.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta2/{+name}:calculate').replace(
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
        createAPIRequest<Schema$SecurityHealthAnalyticsSettings>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$SecurityHealthAnalyticsSettings>(
          parameters
        );
      }
    }
  }

  export interface Params$Resource$Organizations$Securityhealthanalyticssettings$Calculate extends StandardParameters {
    /**
     *
     */
    name?: string;
    /**
     *
     */
    showEligibleModulesOnly?: boolean;
  }

  export class Resource$Organizations$Virtualmachinethreatdetectionsettings {
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
     * const securitycenter = google.securitycenter('v1beta2');
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
     *     await securitycenter.organizations.virtualMachineThreatDetectionSettings.calculate(
     *       {
     *         name: 'organizations/my-organization/virtualMachineThreatDetectionSettings',
     *
     *         showEligibleModulesOnly: 'placeholder-value',
     *       },
     *     );
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "modules": {},
     *   //   "name": "my_name",
     *   //   "serviceAccount": "my_serviceAccount",
     *   //   "serviceEnablementState": "my_serviceEnablementState",
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
    calculate(
      params: Params$Resource$Organizations$Virtualmachinethreatdetectionsettings$Calculate,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    calculate(
      params?: Params$Resource$Organizations$Virtualmachinethreatdetectionsettings$Calculate,
      options?: MethodOptions
    ): Promise<
      GaxiosResponseWithHTTP2<Schema$VirtualMachineThreatDetectionSettings>
    >;
    calculate(
      params: Params$Resource$Organizations$Virtualmachinethreatdetectionsettings$Calculate,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    calculate(
      params: Params$Resource$Organizations$Virtualmachinethreatdetectionsettings$Calculate,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$VirtualMachineThreatDetectionSettings>,
      callback: BodyResponseCallback<Schema$VirtualMachineThreatDetectionSettings>
    ): void;
    calculate(
      params: Params$Resource$Organizations$Virtualmachinethreatdetectionsettings$Calculate,
      callback: BodyResponseCallback<Schema$VirtualMachineThreatDetectionSettings>
    ): void;
    calculate(
      callback: BodyResponseCallback<Schema$VirtualMachineThreatDetectionSettings>
    ): void;
    calculate(
      paramsOrCallback?:
        | Params$Resource$Organizations$Virtualmachinethreatdetectionsettings$Calculate
        | BodyResponseCallback<Schema$VirtualMachineThreatDetectionSettings>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$VirtualMachineThreatDetectionSettings>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$VirtualMachineThreatDetectionSettings>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<
          GaxiosResponseWithHTTP2<Schema$VirtualMachineThreatDetectionSettings>
        >
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Organizations$Virtualmachinethreatdetectionsettings$Calculate;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Organizations$Virtualmachinethreatdetectionsettings$Calculate;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://securitycenter.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta2/{+name}:calculate').replace(
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
        createAPIRequest<Schema$VirtualMachineThreatDetectionSettings>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$VirtualMachineThreatDetectionSettings>(
          parameters
        );
      }
    }
  }

  export interface Params$Resource$Organizations$Virtualmachinethreatdetectionsettings$Calculate extends StandardParameters {
    /**
     *
     */
    name?: string;
    /**
     *
     */
    showEligibleModulesOnly?: boolean;
  }

  export class Resource$Organizations$Websecurityscannersettings {
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
     * const securitycenter = google.securitycenter('v1beta2');
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
     *     await securitycenter.organizations.webSecurityScannerSettings.calculate({
     *       name: 'organizations/my-organization/webSecurityScannerSettings',
     *
     *       showEligibleModulesOnly: 'placeholder-value',
     *     });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "modules": {},
     *   //   "name": "my_name",
     *   //   "serviceEnablementState": "my_serviceEnablementState",
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
    calculate(
      params: Params$Resource$Organizations$Websecurityscannersettings$Calculate,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    calculate(
      params?: Params$Resource$Organizations$Websecurityscannersettings$Calculate,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$WebSecurityScannerSettings>>;
    calculate(
      params: Params$Resource$Organizations$Websecurityscannersettings$Calculate,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    calculate(
      params: Params$Resource$Organizations$Websecurityscannersettings$Calculate,
      options:
        MethodOptions | BodyResponseCallback<Schema$WebSecurityScannerSettings>,
      callback: BodyResponseCallback<Schema$WebSecurityScannerSettings>
    ): void;
    calculate(
      params: Params$Resource$Organizations$Websecurityscannersettings$Calculate,
      callback: BodyResponseCallback<Schema$WebSecurityScannerSettings>
    ): void;
    calculate(
      callback: BodyResponseCallback<Schema$WebSecurityScannerSettings>
    ): void;
    calculate(
      paramsOrCallback?:
        | Params$Resource$Organizations$Websecurityscannersettings$Calculate
        | BodyResponseCallback<Schema$WebSecurityScannerSettings>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$WebSecurityScannerSettings>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$WebSecurityScannerSettings>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$WebSecurityScannerSettings>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Organizations$Websecurityscannersettings$Calculate;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Organizations$Websecurityscannersettings$Calculate;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://securitycenter.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta2/{+name}:calculate').replace(
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
        createAPIRequest<Schema$WebSecurityScannerSettings>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$WebSecurityScannerSettings>(parameters);
      }
    }
  }

  export interface Params$Resource$Organizations$Websecurityscannersettings$Calculate extends StandardParameters {
    /**
     *
     */
    name?: string;
    /**
     *
     */
    showEligibleModulesOnly?: boolean;
  }

  export class Resource$Projects {
    context: APIRequestContext;
    containerThreatDetectionSettings: Resource$Projects$Containerthreatdetectionsettings;
    eventThreatDetectionSettings: Resource$Projects$Eventthreatdetectionsettings;
    locations: Resource$Projects$Locations;
    rapidVulnerabilityDetectionSettings: Resource$Projects$Rapidvulnerabilitydetectionsettings;
    securityHealthAnalyticsSettings: Resource$Projects$Securityhealthanalyticssettings;
    virtualMachineThreatDetectionSettings: Resource$Projects$Virtualmachinethreatdetectionsettings;
    webSecurityScannerSettings: Resource$Projects$Websecurityscannersettings;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.containerThreatDetectionSettings =
        new Resource$Projects$Containerthreatdetectionsettings(this.context);
      this.eventThreatDetectionSettings =
        new Resource$Projects$Eventthreatdetectionsettings(this.context);
      this.locations = new Resource$Projects$Locations(this.context);
      this.rapidVulnerabilityDetectionSettings =
        new Resource$Projects$Rapidvulnerabilitydetectionsettings(this.context);
      this.securityHealthAnalyticsSettings =
        new Resource$Projects$Securityhealthanalyticssettings(this.context);
      this.virtualMachineThreatDetectionSettings =
        new Resource$Projects$Virtualmachinethreatdetectionsettings(
          this.context
        );
      this.webSecurityScannerSettings =
        new Resource$Projects$Websecurityscannersettings(this.context);
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
     * const securitycenter = google.securitycenter('v1beta2');
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
     *   const res = await securitycenter.projects.getContainerThreatDetectionSettings(
     *     {
     *       name: 'projects/my-project/containerThreatDetectionSettings',
     *     },
     *   );
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "modules": {},
     *   //   "name": "my_name",
     *   //   "serviceAccount": "my_serviceAccount",
     *   //   "serviceEnablementState": "my_serviceEnablementState",
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
    getContainerThreatDetectionSettings(
      params: Params$Resource$Projects$Getcontainerthreatdetectionsettings,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    getContainerThreatDetectionSettings(
      params?: Params$Resource$Projects$Getcontainerthreatdetectionsettings,
      options?: MethodOptions
    ): Promise<
      GaxiosResponseWithHTTP2<Schema$ContainerThreatDetectionSettings>
    >;
    getContainerThreatDetectionSettings(
      params: Params$Resource$Projects$Getcontainerthreatdetectionsettings,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    getContainerThreatDetectionSettings(
      params: Params$Resource$Projects$Getcontainerthreatdetectionsettings,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ContainerThreatDetectionSettings>,
      callback: BodyResponseCallback<Schema$ContainerThreatDetectionSettings>
    ): void;
    getContainerThreatDetectionSettings(
      params: Params$Resource$Projects$Getcontainerthreatdetectionsettings,
      callback: BodyResponseCallback<Schema$ContainerThreatDetectionSettings>
    ): void;
    getContainerThreatDetectionSettings(
      callback: BodyResponseCallback<Schema$ContainerThreatDetectionSettings>
    ): void;
    getContainerThreatDetectionSettings(
      paramsOrCallback?:
        | Params$Resource$Projects$Getcontainerthreatdetectionsettings
        | BodyResponseCallback<Schema$ContainerThreatDetectionSettings>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ContainerThreatDetectionSettings>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ContainerThreatDetectionSettings>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<
          GaxiosResponseWithHTTP2<Schema$ContainerThreatDetectionSettings>
        >
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Getcontainerthreatdetectionsettings;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Getcontainerthreatdetectionsettings;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://securitycenter.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta2/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$ContainerThreatDetectionSettings>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ContainerThreatDetectionSettings>(
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
     * const securitycenter = google.securitycenter('v1beta2');
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
     *   const res = await securitycenter.projects.getEventThreatDetectionSettings({
     *     name: 'projects/my-project/eventThreatDetectionSettings',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "modules": {},
     *   //   "name": "my_name",
     *   //   "serviceEnablementState": "my_serviceEnablementState",
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
    getEventThreatDetectionSettings(
      params: Params$Resource$Projects$Geteventthreatdetectionsettings,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    getEventThreatDetectionSettings(
      params?: Params$Resource$Projects$Geteventthreatdetectionsettings,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$EventThreatDetectionSettings>>;
    getEventThreatDetectionSettings(
      params: Params$Resource$Projects$Geteventthreatdetectionsettings,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    getEventThreatDetectionSettings(
      params: Params$Resource$Projects$Geteventthreatdetectionsettings,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$EventThreatDetectionSettings>,
      callback: BodyResponseCallback<Schema$EventThreatDetectionSettings>
    ): void;
    getEventThreatDetectionSettings(
      params: Params$Resource$Projects$Geteventthreatdetectionsettings,
      callback: BodyResponseCallback<Schema$EventThreatDetectionSettings>
    ): void;
    getEventThreatDetectionSettings(
      callback: BodyResponseCallback<Schema$EventThreatDetectionSettings>
    ): void;
    getEventThreatDetectionSettings(
      paramsOrCallback?:
        | Params$Resource$Projects$Geteventthreatdetectionsettings
        | BodyResponseCallback<Schema$EventThreatDetectionSettings>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$EventThreatDetectionSettings>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$EventThreatDetectionSettings>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$EventThreatDetectionSettings>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Geteventthreatdetectionsettings;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Geteventthreatdetectionsettings;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://securitycenter.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta2/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$EventThreatDetectionSettings>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$EventThreatDetectionSettings>(
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
     * const securitycenter = google.securitycenter('v1beta2');
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
     *     await securitycenter.projects.getRapidVulnerabilityDetectionSettings({
     *       name: 'projects/my-project/rapidVulnerabilityDetectionSettings',
     *     });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "modules": {},
     *   //   "name": "my_name",
     *   //   "serviceEnablementState": "my_serviceEnablementState",
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
    getRapidVulnerabilityDetectionSettings(
      params: Params$Resource$Projects$Getrapidvulnerabilitydetectionsettings,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    getRapidVulnerabilityDetectionSettings(
      params?: Params$Resource$Projects$Getrapidvulnerabilitydetectionsettings,
      options?: MethodOptions
    ): Promise<
      GaxiosResponseWithHTTP2<Schema$RapidVulnerabilityDetectionSettings>
    >;
    getRapidVulnerabilityDetectionSettings(
      params: Params$Resource$Projects$Getrapidvulnerabilitydetectionsettings,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    getRapidVulnerabilityDetectionSettings(
      params: Params$Resource$Projects$Getrapidvulnerabilitydetectionsettings,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$RapidVulnerabilityDetectionSettings>,
      callback: BodyResponseCallback<Schema$RapidVulnerabilityDetectionSettings>
    ): void;
    getRapidVulnerabilityDetectionSettings(
      params: Params$Resource$Projects$Getrapidvulnerabilitydetectionsettings,
      callback: BodyResponseCallback<Schema$RapidVulnerabilityDetectionSettings>
    ): void;
    getRapidVulnerabilityDetectionSettings(
      callback: BodyResponseCallback<Schema$RapidVulnerabilityDetectionSettings>
    ): void;
    getRapidVulnerabilityDetectionSettings(
      paramsOrCallback?:
        | Params$Resource$Projects$Getrapidvulnerabilitydetectionsettings
        | BodyResponseCallback<Schema$RapidVulnerabilityDetectionSettings>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$RapidVulnerabilityDetectionSettings>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$RapidVulnerabilityDetectionSettings>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<
          GaxiosResponseWithHTTP2<Schema$RapidVulnerabilityDetectionSettings>
        >
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Getrapidvulnerabilitydetectionsettings;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Getrapidvulnerabilitydetectionsettings;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://securitycenter.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta2/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$RapidVulnerabilityDetectionSettings>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$RapidVulnerabilityDetectionSettings>(
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
     * const securitycenter = google.securitycenter('v1beta2');
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
     *   const res = await securitycenter.projects.getSecurityCenterSettings({
     *     name: 'projects/my-project/securityCenterSettings',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "cryptoKeyName": "my_cryptoKeyName",
     *   //   "logSinkProject": "my_logSinkProject",
     *   //   "name": "my_name",
     *   //   "onboardingTime": "my_onboardingTime",
     *   //   "orgServiceAccount": "my_orgServiceAccount"
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
    getSecurityCenterSettings(
      params: Params$Resource$Projects$Getsecuritycentersettings,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    getSecurityCenterSettings(
      params?: Params$Resource$Projects$Getsecuritycentersettings,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$SecurityCenterSettings>>;
    getSecurityCenterSettings(
      params: Params$Resource$Projects$Getsecuritycentersettings,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    getSecurityCenterSettings(
      params: Params$Resource$Projects$Getsecuritycentersettings,
      options:
        MethodOptions | BodyResponseCallback<Schema$SecurityCenterSettings>,
      callback: BodyResponseCallback<Schema$SecurityCenterSettings>
    ): void;
    getSecurityCenterSettings(
      params: Params$Resource$Projects$Getsecuritycentersettings,
      callback: BodyResponseCallback<Schema$SecurityCenterSettings>
    ): void;
    getSecurityCenterSettings(
      callback: BodyResponseCallback<Schema$SecurityCenterSettings>
    ): void;
    getSecurityCenterSettings(
      paramsOrCallback?:
        | Params$Resource$Projects$Getsecuritycentersettings
        | BodyResponseCallback<Schema$SecurityCenterSettings>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$SecurityCenterSettings>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$SecurityCenterSettings>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$SecurityCenterSettings>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Getsecuritycentersettings;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Getsecuritycentersettings;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://securitycenter.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta2/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$SecurityCenterSettings>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$SecurityCenterSettings>(parameters);
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
     * const securitycenter = google.securitycenter('v1beta2');
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
     *   const res = await securitycenter.projects.getSecurityHealthAnalyticsSettings({
     *     name: 'projects/my-project/securityHealthAnalyticsSettings',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "modules": {},
     *   //   "name": "my_name",
     *   //   "serviceAccount": "my_serviceAccount",
     *   //   "serviceEnablementState": "my_serviceEnablementState",
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
    getSecurityHealthAnalyticsSettings(
      params: Params$Resource$Projects$Getsecurityhealthanalyticssettings,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    getSecurityHealthAnalyticsSettings(
      params?: Params$Resource$Projects$Getsecurityhealthanalyticssettings,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$SecurityHealthAnalyticsSettings>>;
    getSecurityHealthAnalyticsSettings(
      params: Params$Resource$Projects$Getsecurityhealthanalyticssettings,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    getSecurityHealthAnalyticsSettings(
      params: Params$Resource$Projects$Getsecurityhealthanalyticssettings,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$SecurityHealthAnalyticsSettings>,
      callback: BodyResponseCallback<Schema$SecurityHealthAnalyticsSettings>
    ): void;
    getSecurityHealthAnalyticsSettings(
      params: Params$Resource$Projects$Getsecurityhealthanalyticssettings,
      callback: BodyResponseCallback<Schema$SecurityHealthAnalyticsSettings>
    ): void;
    getSecurityHealthAnalyticsSettings(
      callback: BodyResponseCallback<Schema$SecurityHealthAnalyticsSettings>
    ): void;
    getSecurityHealthAnalyticsSettings(
      paramsOrCallback?:
        | Params$Resource$Projects$Getsecurityhealthanalyticssettings
        | BodyResponseCallback<Schema$SecurityHealthAnalyticsSettings>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$SecurityHealthAnalyticsSettings>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$SecurityHealthAnalyticsSettings>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$SecurityHealthAnalyticsSettings>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Getsecurityhealthanalyticssettings;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Getsecurityhealthanalyticssettings;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://securitycenter.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta2/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$SecurityHealthAnalyticsSettings>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$SecurityHealthAnalyticsSettings>(
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
     * const securitycenter = google.securitycenter('v1beta2');
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
     *     await securitycenter.projects.getVirtualMachineThreatDetectionSettings({
     *       name: 'projects/my-project/virtualMachineThreatDetectionSettings',
     *     });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "modules": {},
     *   //   "name": "my_name",
     *   //   "serviceAccount": "my_serviceAccount",
     *   //   "serviceEnablementState": "my_serviceEnablementState",
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
    getVirtualMachineThreatDetectionSettings(
      params: Params$Resource$Projects$Getvirtualmachinethreatdetectionsettings,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    getVirtualMachineThreatDetectionSettings(
      params?: Params$Resource$Projects$Getvirtualmachinethreatdetectionsettings,
      options?: MethodOptions
    ): Promise<
      GaxiosResponseWithHTTP2<Schema$VirtualMachineThreatDetectionSettings>
    >;
    getVirtualMachineThreatDetectionSettings(
      params: Params$Resource$Projects$Getvirtualmachinethreatdetectionsettings,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    getVirtualMachineThreatDetectionSettings(
      params: Params$Resource$Projects$Getvirtualmachinethreatdetectionsettings,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$VirtualMachineThreatDetectionSettings>,
      callback: BodyResponseCallback<Schema$VirtualMachineThreatDetectionSettings>
    ): void;
    getVirtualMachineThreatDetectionSettings(
      params: Params$Resource$Projects$Getvirtualmachinethreatdetectionsettings,
      callback: BodyResponseCallback<Schema$VirtualMachineThreatDetectionSettings>
    ): void;
    getVirtualMachineThreatDetectionSettings(
      callback: BodyResponseCallback<Schema$VirtualMachineThreatDetectionSettings>
    ): void;
    getVirtualMachineThreatDetectionSettings(
      paramsOrCallback?:
        | Params$Resource$Projects$Getvirtualmachinethreatdetectionsettings
        | BodyResponseCallback<Schema$VirtualMachineThreatDetectionSettings>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$VirtualMachineThreatDetectionSettings>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$VirtualMachineThreatDetectionSettings>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<
          GaxiosResponseWithHTTP2<Schema$VirtualMachineThreatDetectionSettings>
        >
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Getvirtualmachinethreatdetectionsettings;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Getvirtualmachinethreatdetectionsettings;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://securitycenter.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta2/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$VirtualMachineThreatDetectionSettings>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$VirtualMachineThreatDetectionSettings>(
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
     * const securitycenter = google.securitycenter('v1beta2');
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
     *   const res = await securitycenter.projects.getWebSecurityScannerSettings({
     *     name: 'projects/my-project/webSecurityScannerSettings',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "modules": {},
     *   //   "name": "my_name",
     *   //   "serviceEnablementState": "my_serviceEnablementState",
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
    getWebSecurityScannerSettings(
      params: Params$Resource$Projects$Getwebsecurityscannersettings,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    getWebSecurityScannerSettings(
      params?: Params$Resource$Projects$Getwebsecurityscannersettings,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$WebSecurityScannerSettings>>;
    getWebSecurityScannerSettings(
      params: Params$Resource$Projects$Getwebsecurityscannersettings,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    getWebSecurityScannerSettings(
      params: Params$Resource$Projects$Getwebsecurityscannersettings,
      options:
        MethodOptions | BodyResponseCallback<Schema$WebSecurityScannerSettings>,
      callback: BodyResponseCallback<Schema$WebSecurityScannerSettings>
    ): void;
    getWebSecurityScannerSettings(
      params: Params$Resource$Projects$Getwebsecurityscannersettings,
      callback: BodyResponseCallback<Schema$WebSecurityScannerSettings>
    ): void;
    getWebSecurityScannerSettings(
      callback: BodyResponseCallback<Schema$WebSecurityScannerSettings>
    ): void;
    getWebSecurityScannerSettings(
      paramsOrCallback?:
        | Params$Resource$Projects$Getwebsecurityscannersettings
        | BodyResponseCallback<Schema$WebSecurityScannerSettings>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$WebSecurityScannerSettings>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$WebSecurityScannerSettings>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$WebSecurityScannerSettings>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Getwebsecurityscannersettings;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Getwebsecurityscannersettings;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://securitycenter.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta2/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$WebSecurityScannerSettings>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$WebSecurityScannerSettings>(parameters);
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
     * const securitycenter = google.securitycenter('v1beta2');
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
     *     await securitycenter.projects.updateContainerThreatDetectionSettings({
     *       name: 'projects/my-project/containerThreatDetectionSettings',
     *
     *       updateMask: 'placeholder-value',
     *
     *       // Request body metadata
     *       requestBody: {
     *         // request body parameters
     *         // {
     *         //   "modules": {},
     *         //   "name": "my_name",
     *         //   "serviceAccount": "my_serviceAccount",
     *         //   "serviceEnablementState": "my_serviceEnablementState",
     *         //   "updateTime": "my_updateTime"
     *         // }
     *       },
     *     });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "modules": {},
     *   //   "name": "my_name",
     *   //   "serviceAccount": "my_serviceAccount",
     *   //   "serviceEnablementState": "my_serviceEnablementState",
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
    updateContainerThreatDetectionSettings(
      params: Params$Resource$Projects$Updatecontainerthreatdetectionsettings,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    updateContainerThreatDetectionSettings(
      params?: Params$Resource$Projects$Updatecontainerthreatdetectionsettings,
      options?: MethodOptions
    ): Promise<
      GaxiosResponseWithHTTP2<Schema$ContainerThreatDetectionSettings>
    >;
    updateContainerThreatDetectionSettings(
      params: Params$Resource$Projects$Updatecontainerthreatdetectionsettings,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    updateContainerThreatDetectionSettings(
      params: Params$Resource$Projects$Updatecontainerthreatdetectionsettings,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ContainerThreatDetectionSettings>,
      callback: BodyResponseCallback<Schema$ContainerThreatDetectionSettings>
    ): void;
    updateContainerThreatDetectionSettings(
      params: Params$Resource$Projects$Updatecontainerthreatdetectionsettings,
      callback: BodyResponseCallback<Schema$ContainerThreatDetectionSettings>
    ): void;
    updateContainerThreatDetectionSettings(
      callback: BodyResponseCallback<Schema$ContainerThreatDetectionSettings>
    ): void;
    updateContainerThreatDetectionSettings(
      paramsOrCallback?:
        | Params$Resource$Projects$Updatecontainerthreatdetectionsettings
        | BodyResponseCallback<Schema$ContainerThreatDetectionSettings>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ContainerThreatDetectionSettings>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ContainerThreatDetectionSettings>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<
          GaxiosResponseWithHTTP2<Schema$ContainerThreatDetectionSettings>
        >
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Updatecontainerthreatdetectionsettings;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Updatecontainerthreatdetectionsettings;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://securitycenter.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta2/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$ContainerThreatDetectionSettings>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ContainerThreatDetectionSettings>(
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
     * const securitycenter = google.securitycenter('v1beta2');
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
     *   const res = await securitycenter.projects.updateEventThreatDetectionSettings({
     *     name: 'projects/my-project/eventThreatDetectionSettings',
     *
     *     updateMask: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "modules": {},
     *       //   "name": "my_name",
     *       //   "serviceEnablementState": "my_serviceEnablementState",
     *       //   "updateTime": "my_updateTime"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "modules": {},
     *   //   "name": "my_name",
     *   //   "serviceEnablementState": "my_serviceEnablementState",
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
    updateEventThreatDetectionSettings(
      params: Params$Resource$Projects$Updateeventthreatdetectionsettings,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    updateEventThreatDetectionSettings(
      params?: Params$Resource$Projects$Updateeventthreatdetectionsettings,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$EventThreatDetectionSettings>>;
    updateEventThreatDetectionSettings(
      params: Params$Resource$Projects$Updateeventthreatdetectionsettings,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    updateEventThreatDetectionSettings(
      params: Params$Resource$Projects$Updateeventthreatdetectionsettings,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$EventThreatDetectionSettings>,
      callback: BodyResponseCallback<Schema$EventThreatDetectionSettings>
    ): void;
    updateEventThreatDetectionSettings(
      params: Params$Resource$Projects$Updateeventthreatdetectionsettings,
      callback: BodyResponseCallback<Schema$EventThreatDetectionSettings>
    ): void;
    updateEventThreatDetectionSettings(
      callback: BodyResponseCallback<Schema$EventThreatDetectionSettings>
    ): void;
    updateEventThreatDetectionSettings(
      paramsOrCallback?:
        | Params$Resource$Projects$Updateeventthreatdetectionsettings
        | BodyResponseCallback<Schema$EventThreatDetectionSettings>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$EventThreatDetectionSettings>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$EventThreatDetectionSettings>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$EventThreatDetectionSettings>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Updateeventthreatdetectionsettings;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Updateeventthreatdetectionsettings;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://securitycenter.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta2/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$EventThreatDetectionSettings>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$EventThreatDetectionSettings>(
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
     * const securitycenter = google.securitycenter('v1beta2');
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
     *     await securitycenter.projects.updateRapidVulnerabilityDetectionSettings({
     *       name: 'projects/my-project/rapidVulnerabilityDetectionSettings',
     *
     *       updateMask: 'placeholder-value',
     *
     *       // Request body metadata
     *       requestBody: {
     *         // request body parameters
     *         // {
     *         //   "modules": {},
     *         //   "name": "my_name",
     *         //   "serviceEnablementState": "my_serviceEnablementState",
     *         //   "updateTime": "my_updateTime"
     *         // }
     *       },
     *     });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "modules": {},
     *   //   "name": "my_name",
     *   //   "serviceEnablementState": "my_serviceEnablementState",
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
    updateRapidVulnerabilityDetectionSettings(
      params: Params$Resource$Projects$Updaterapidvulnerabilitydetectionsettings,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    updateRapidVulnerabilityDetectionSettings(
      params?: Params$Resource$Projects$Updaterapidvulnerabilitydetectionsettings,
      options?: MethodOptions
    ): Promise<
      GaxiosResponseWithHTTP2<Schema$RapidVulnerabilityDetectionSettings>
    >;
    updateRapidVulnerabilityDetectionSettings(
      params: Params$Resource$Projects$Updaterapidvulnerabilitydetectionsettings,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    updateRapidVulnerabilityDetectionSettings(
      params: Params$Resource$Projects$Updaterapidvulnerabilitydetectionsettings,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$RapidVulnerabilityDetectionSettings>,
      callback: BodyResponseCallback<Schema$RapidVulnerabilityDetectionSettings>
    ): void;
    updateRapidVulnerabilityDetectionSettings(
      params: Params$Resource$Projects$Updaterapidvulnerabilitydetectionsettings,
      callback: BodyResponseCallback<Schema$RapidVulnerabilityDetectionSettings>
    ): void;
    updateRapidVulnerabilityDetectionSettings(
      callback: BodyResponseCallback<Schema$RapidVulnerabilityDetectionSettings>
    ): void;
    updateRapidVulnerabilityDetectionSettings(
      paramsOrCallback?:
        | Params$Resource$Projects$Updaterapidvulnerabilitydetectionsettings
        | BodyResponseCallback<Schema$RapidVulnerabilityDetectionSettings>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$RapidVulnerabilityDetectionSettings>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$RapidVulnerabilityDetectionSettings>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<
          GaxiosResponseWithHTTP2<Schema$RapidVulnerabilityDetectionSettings>
        >
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Updaterapidvulnerabilitydetectionsettings;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Updaterapidvulnerabilitydetectionsettings;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://securitycenter.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta2/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$RapidVulnerabilityDetectionSettings>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$RapidVulnerabilityDetectionSettings>(
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
     * const securitycenter = google.securitycenter('v1beta2');
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
     *     await securitycenter.projects.updateSecurityHealthAnalyticsSettings({
     *       name: 'projects/my-project/securityHealthAnalyticsSettings',
     *
     *       updateMask: 'placeholder-value',
     *
     *       // Request body metadata
     *       requestBody: {
     *         // request body parameters
     *         // {
     *         //   "modules": {},
     *         //   "name": "my_name",
     *         //   "serviceAccount": "my_serviceAccount",
     *         //   "serviceEnablementState": "my_serviceEnablementState",
     *         //   "updateTime": "my_updateTime"
     *         // }
     *       },
     *     });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "modules": {},
     *   //   "name": "my_name",
     *   //   "serviceAccount": "my_serviceAccount",
     *   //   "serviceEnablementState": "my_serviceEnablementState",
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
    updateSecurityHealthAnalyticsSettings(
      params: Params$Resource$Projects$Updatesecurityhealthanalyticssettings,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    updateSecurityHealthAnalyticsSettings(
      params?: Params$Resource$Projects$Updatesecurityhealthanalyticssettings,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$SecurityHealthAnalyticsSettings>>;
    updateSecurityHealthAnalyticsSettings(
      params: Params$Resource$Projects$Updatesecurityhealthanalyticssettings,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    updateSecurityHealthAnalyticsSettings(
      params: Params$Resource$Projects$Updatesecurityhealthanalyticssettings,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$SecurityHealthAnalyticsSettings>,
      callback: BodyResponseCallback<Schema$SecurityHealthAnalyticsSettings>
    ): void;
    updateSecurityHealthAnalyticsSettings(
      params: Params$Resource$Projects$Updatesecurityhealthanalyticssettings,
      callback: BodyResponseCallback<Schema$SecurityHealthAnalyticsSettings>
    ): void;
    updateSecurityHealthAnalyticsSettings(
      callback: BodyResponseCallback<Schema$SecurityHealthAnalyticsSettings>
    ): void;
    updateSecurityHealthAnalyticsSettings(
      paramsOrCallback?:
        | Params$Resource$Projects$Updatesecurityhealthanalyticssettings
        | BodyResponseCallback<Schema$SecurityHealthAnalyticsSettings>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$SecurityHealthAnalyticsSettings>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$SecurityHealthAnalyticsSettings>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$SecurityHealthAnalyticsSettings>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Updatesecurityhealthanalyticssettings;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Updatesecurityhealthanalyticssettings;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://securitycenter.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta2/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$SecurityHealthAnalyticsSettings>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$SecurityHealthAnalyticsSettings>(
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
     * const securitycenter = google.securitycenter('v1beta2');
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
     *     await securitycenter.projects.updateVirtualMachineThreatDetectionSettings({
     *       name: 'projects/my-project/virtualMachineThreatDetectionSettings',
     *
     *       updateMask: 'placeholder-value',
     *
     *       // Request body metadata
     *       requestBody: {
     *         // request body parameters
     *         // {
     *         //   "modules": {},
     *         //   "name": "my_name",
     *         //   "serviceAccount": "my_serviceAccount",
     *         //   "serviceEnablementState": "my_serviceEnablementState",
     *         //   "updateTime": "my_updateTime"
     *         // }
     *       },
     *     });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "modules": {},
     *   //   "name": "my_name",
     *   //   "serviceAccount": "my_serviceAccount",
     *   //   "serviceEnablementState": "my_serviceEnablementState",
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
    updateVirtualMachineThreatDetectionSettings(
      params: Params$Resource$Projects$Updatevirtualmachinethreatdetectionsettings,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    updateVirtualMachineThreatDetectionSettings(
      params?: Params$Resource$Projects$Updatevirtualmachinethreatdetectionsettings,
      options?: MethodOptions
    ): Promise<
      GaxiosResponseWithHTTP2<Schema$VirtualMachineThreatDetectionSettings>
    >;
    updateVirtualMachineThreatDetectionSettings(
      params: Params$Resource$Projects$Updatevirtualmachinethreatdetectionsettings,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    updateVirtualMachineThreatDetectionSettings(
      params: Params$Resource$Projects$Updatevirtualmachinethreatdetectionsettings,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$VirtualMachineThreatDetectionSettings>,
      callback: BodyResponseCallback<Schema$VirtualMachineThreatDetectionSettings>
    ): void;
    updateVirtualMachineThreatDetectionSettings(
      params: Params$Resource$Projects$Updatevirtualmachinethreatdetectionsettings,
      callback: BodyResponseCallback<Schema$VirtualMachineThreatDetectionSettings>
    ): void;
    updateVirtualMachineThreatDetectionSettings(
      callback: BodyResponseCallback<Schema$VirtualMachineThreatDetectionSettings>
    ): void;
    updateVirtualMachineThreatDetectionSettings(
      paramsOrCallback?:
        | Params$Resource$Projects$Updatevirtualmachinethreatdetectionsettings
        | BodyResponseCallback<Schema$VirtualMachineThreatDetectionSettings>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$VirtualMachineThreatDetectionSettings>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$VirtualMachineThreatDetectionSettings>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<
          GaxiosResponseWithHTTP2<Schema$VirtualMachineThreatDetectionSettings>
        >
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Updatevirtualmachinethreatdetectionsettings;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Updatevirtualmachinethreatdetectionsettings;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://securitycenter.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta2/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$VirtualMachineThreatDetectionSettings>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$VirtualMachineThreatDetectionSettings>(
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
     * const securitycenter = google.securitycenter('v1beta2');
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
     *   const res = await securitycenter.projects.updateWebSecurityScannerSettings({
     *     name: 'projects/my-project/webSecurityScannerSettings',
     *
     *     updateMask: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "modules": {},
     *       //   "name": "my_name",
     *       //   "serviceEnablementState": "my_serviceEnablementState",
     *       //   "updateTime": "my_updateTime"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "modules": {},
     *   //   "name": "my_name",
     *   //   "serviceEnablementState": "my_serviceEnablementState",
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
    updateWebSecurityScannerSettings(
      params: Params$Resource$Projects$Updatewebsecurityscannersettings,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    updateWebSecurityScannerSettings(
      params?: Params$Resource$Projects$Updatewebsecurityscannersettings,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$WebSecurityScannerSettings>>;
    updateWebSecurityScannerSettings(
      params: Params$Resource$Projects$Updatewebsecurityscannersettings,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    updateWebSecurityScannerSettings(
      params: Params$Resource$Projects$Updatewebsecurityscannersettings,
      options:
        MethodOptions | BodyResponseCallback<Schema$WebSecurityScannerSettings>,
      callback: BodyResponseCallback<Schema$WebSecurityScannerSettings>
    ): void;
    updateWebSecurityScannerSettings(
      params: Params$Resource$Projects$Updatewebsecurityscannersettings,
      callback: BodyResponseCallback<Schema$WebSecurityScannerSettings>
    ): void;
    updateWebSecurityScannerSettings(
      callback: BodyResponseCallback<Schema$WebSecurityScannerSettings>
    ): void;
    updateWebSecurityScannerSettings(
      paramsOrCallback?:
        | Params$Resource$Projects$Updatewebsecurityscannersettings
        | BodyResponseCallback<Schema$WebSecurityScannerSettings>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$WebSecurityScannerSettings>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$WebSecurityScannerSettings>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$WebSecurityScannerSettings>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Updatewebsecurityscannersettings;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Updatewebsecurityscannersettings;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://securitycenter.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta2/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$WebSecurityScannerSettings>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$WebSecurityScannerSettings>(parameters);
      }
    }
  }

  export interface Params$Resource$Projects$Getcontainerthreatdetectionsettings extends StandardParameters {
    /**
     *
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Geteventthreatdetectionsettings extends StandardParameters {
    /**
     *
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Getrapidvulnerabilitydetectionsettings extends StandardParameters {
    /**
     *
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Getsecuritycentersettings extends StandardParameters {
    /**
     *
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Getsecurityhealthanalyticssettings extends StandardParameters {
    /**
     *
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Getvirtualmachinethreatdetectionsettings extends StandardParameters {
    /**
     *
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Getwebsecurityscannersettings extends StandardParameters {
    /**
     *
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Updatecontainerthreatdetectionsettings extends StandardParameters {
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
    requestBody?: Schema$ContainerThreatDetectionSettings;
  }
  export interface Params$Resource$Projects$Updateeventthreatdetectionsettings extends StandardParameters {
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
    requestBody?: Schema$EventThreatDetectionSettings;
  }
  export interface Params$Resource$Projects$Updaterapidvulnerabilitydetectionsettings extends StandardParameters {
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
    requestBody?: Schema$RapidVulnerabilityDetectionSettings;
  }
  export interface Params$Resource$Projects$Updatesecurityhealthanalyticssettings extends StandardParameters {
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
    requestBody?: Schema$SecurityHealthAnalyticsSettings;
  }
  export interface Params$Resource$Projects$Updatevirtualmachinethreatdetectionsettings extends StandardParameters {
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
    requestBody?: Schema$VirtualMachineThreatDetectionSettings;
  }
  export interface Params$Resource$Projects$Updatewebsecurityscannersettings extends StandardParameters {
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
    requestBody?: Schema$WebSecurityScannerSettings;
  }

  export class Resource$Projects$Containerthreatdetectionsettings {
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
     * const securitycenter = google.securitycenter('v1beta2');
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
     *     await securitycenter.projects.containerThreatDetectionSettings.calculate({
     *       name: 'projects/my-project/containerThreatDetectionSettings',
     *
     *       showEligibleModulesOnly: 'placeholder-value',
     *     });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "modules": {},
     *   //   "name": "my_name",
     *   //   "serviceAccount": "my_serviceAccount",
     *   //   "serviceEnablementState": "my_serviceEnablementState",
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
    calculate(
      params: Params$Resource$Projects$Containerthreatdetectionsettings$Calculate,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    calculate(
      params?: Params$Resource$Projects$Containerthreatdetectionsettings$Calculate,
      options?: MethodOptions
    ): Promise<
      GaxiosResponseWithHTTP2<Schema$ContainerThreatDetectionSettings>
    >;
    calculate(
      params: Params$Resource$Projects$Containerthreatdetectionsettings$Calculate,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    calculate(
      params: Params$Resource$Projects$Containerthreatdetectionsettings$Calculate,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ContainerThreatDetectionSettings>,
      callback: BodyResponseCallback<Schema$ContainerThreatDetectionSettings>
    ): void;
    calculate(
      params: Params$Resource$Projects$Containerthreatdetectionsettings$Calculate,
      callback: BodyResponseCallback<Schema$ContainerThreatDetectionSettings>
    ): void;
    calculate(
      callback: BodyResponseCallback<Schema$ContainerThreatDetectionSettings>
    ): void;
    calculate(
      paramsOrCallback?:
        | Params$Resource$Projects$Containerthreatdetectionsettings$Calculate
        | BodyResponseCallback<Schema$ContainerThreatDetectionSettings>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ContainerThreatDetectionSettings>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ContainerThreatDetectionSettings>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<
          GaxiosResponseWithHTTP2<Schema$ContainerThreatDetectionSettings>
        >
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Containerthreatdetectionsettings$Calculate;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Containerthreatdetectionsettings$Calculate;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://securitycenter.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta2/{+name}:calculate').replace(
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
        createAPIRequest<Schema$ContainerThreatDetectionSettings>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ContainerThreatDetectionSettings>(
          parameters
        );
      }
    }
  }

  export interface Params$Resource$Projects$Containerthreatdetectionsettings$Calculate extends StandardParameters {
    /**
     *
     */
    name?: string;
    /**
     *
     */
    showEligibleModulesOnly?: boolean;
  }

  export class Resource$Projects$Eventthreatdetectionsettings {
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
     * const securitycenter = google.securitycenter('v1beta2');
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
     *     await securitycenter.projects.eventThreatDetectionSettings.calculate({
     *       name: 'projects/my-project/eventThreatDetectionSettings',
     *
     *       showEligibleModulesOnly: 'placeholder-value',
     *     });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "modules": {},
     *   //   "name": "my_name",
     *   //   "serviceEnablementState": "my_serviceEnablementState",
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
    calculate(
      params: Params$Resource$Projects$Eventthreatdetectionsettings$Calculate,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    calculate(
      params?: Params$Resource$Projects$Eventthreatdetectionsettings$Calculate,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$EventThreatDetectionSettings>>;
    calculate(
      params: Params$Resource$Projects$Eventthreatdetectionsettings$Calculate,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    calculate(
      params: Params$Resource$Projects$Eventthreatdetectionsettings$Calculate,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$EventThreatDetectionSettings>,
      callback: BodyResponseCallback<Schema$EventThreatDetectionSettings>
    ): void;
    calculate(
      params: Params$Resource$Projects$Eventthreatdetectionsettings$Calculate,
      callback: BodyResponseCallback<Schema$EventThreatDetectionSettings>
    ): void;
    calculate(
      callback: BodyResponseCallback<Schema$EventThreatDetectionSettings>
    ): void;
    calculate(
      paramsOrCallback?:
        | Params$Resource$Projects$Eventthreatdetectionsettings$Calculate
        | BodyResponseCallback<Schema$EventThreatDetectionSettings>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$EventThreatDetectionSettings>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$EventThreatDetectionSettings>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$EventThreatDetectionSettings>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Eventthreatdetectionsettings$Calculate;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Eventthreatdetectionsettings$Calculate;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://securitycenter.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta2/{+name}:calculate').replace(
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
        createAPIRequest<Schema$EventThreatDetectionSettings>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$EventThreatDetectionSettings>(
          parameters
        );
      }
    }
  }

  export interface Params$Resource$Projects$Eventthreatdetectionsettings$Calculate extends StandardParameters {
    /**
     *
     */
    name?: string;
    /**
     *
     */
    showEligibleModulesOnly?: boolean;
  }

  export class Resource$Projects$Locations {
    context: APIRequestContext;
    clusters: Resource$Projects$Locations$Clusters;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.clusters = new Resource$Projects$Locations$Clusters(this.context);
    }
  }

  export class Resource$Projects$Locations$Clusters {
    context: APIRequestContext;
    containerThreatDetectionSettings: Resource$Projects$Locations$Clusters$Containerthreatdetectionsettings;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.containerThreatDetectionSettings =
        new Resource$Projects$Locations$Clusters$Containerthreatdetectionsettings(
          this.context
        );
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
     * const securitycenter = google.securitycenter('v1beta2');
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
     *     await securitycenter.projects.locations.clusters.getContainerThreatDetectionSettings(
     *       {
     *         name: 'projects/my-project/locations/my-location/clusters/my-cluster/containerThreatDetectionSettings',
     *       },
     *     );
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "modules": {},
     *   //   "name": "my_name",
     *   //   "serviceAccount": "my_serviceAccount",
     *   //   "serviceEnablementState": "my_serviceEnablementState",
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
    getContainerThreatDetectionSettings(
      params: Params$Resource$Projects$Locations$Clusters$Getcontainerthreatdetectionsettings,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    getContainerThreatDetectionSettings(
      params?: Params$Resource$Projects$Locations$Clusters$Getcontainerthreatdetectionsettings,
      options?: MethodOptions
    ): Promise<
      GaxiosResponseWithHTTP2<Schema$ContainerThreatDetectionSettings>
    >;
    getContainerThreatDetectionSettings(
      params: Params$Resource$Projects$Locations$Clusters$Getcontainerthreatdetectionsettings,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    getContainerThreatDetectionSettings(
      params: Params$Resource$Projects$Locations$Clusters$Getcontainerthreatdetectionsettings,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ContainerThreatDetectionSettings>,
      callback: BodyResponseCallback<Schema$ContainerThreatDetectionSettings>
    ): void;
    getContainerThreatDetectionSettings(
      params: Params$Resource$Projects$Locations$Clusters$Getcontainerthreatdetectionsettings,
      callback: BodyResponseCallback<Schema$ContainerThreatDetectionSettings>
    ): void;
    getContainerThreatDetectionSettings(
      callback: BodyResponseCallback<Schema$ContainerThreatDetectionSettings>
    ): void;
    getContainerThreatDetectionSettings(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Clusters$Getcontainerthreatdetectionsettings
        | BodyResponseCallback<Schema$ContainerThreatDetectionSettings>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ContainerThreatDetectionSettings>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ContainerThreatDetectionSettings>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<
          GaxiosResponseWithHTTP2<Schema$ContainerThreatDetectionSettings>
        >
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Clusters$Getcontainerthreatdetectionsettings;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Clusters$Getcontainerthreatdetectionsettings;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://securitycenter.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta2/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$ContainerThreatDetectionSettings>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ContainerThreatDetectionSettings>(
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
     * const securitycenter = google.securitycenter('v1beta2');
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
     *     await securitycenter.projects.locations.clusters.updateContainerThreatDetectionSettings(
     *       {
     *         name: 'projects/my-project/locations/my-location/clusters/my-cluster/containerThreatDetectionSettings',
     *
     *         updateMask: 'placeholder-value',
     *
     *         // Request body metadata
     *         requestBody: {
     *           // request body parameters
     *           // {
     *           //   "modules": {},
     *           //   "name": "my_name",
     *           //   "serviceAccount": "my_serviceAccount",
     *           //   "serviceEnablementState": "my_serviceEnablementState",
     *           //   "updateTime": "my_updateTime"
     *           // }
     *         },
     *       },
     *     );
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "modules": {},
     *   //   "name": "my_name",
     *   //   "serviceAccount": "my_serviceAccount",
     *   //   "serviceEnablementState": "my_serviceEnablementState",
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
    updateContainerThreatDetectionSettings(
      params: Params$Resource$Projects$Locations$Clusters$Updatecontainerthreatdetectionsettings,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    updateContainerThreatDetectionSettings(
      params?: Params$Resource$Projects$Locations$Clusters$Updatecontainerthreatdetectionsettings,
      options?: MethodOptions
    ): Promise<
      GaxiosResponseWithHTTP2<Schema$ContainerThreatDetectionSettings>
    >;
    updateContainerThreatDetectionSettings(
      params: Params$Resource$Projects$Locations$Clusters$Updatecontainerthreatdetectionsettings,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    updateContainerThreatDetectionSettings(
      params: Params$Resource$Projects$Locations$Clusters$Updatecontainerthreatdetectionsettings,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ContainerThreatDetectionSettings>,
      callback: BodyResponseCallback<Schema$ContainerThreatDetectionSettings>
    ): void;
    updateContainerThreatDetectionSettings(
      params: Params$Resource$Projects$Locations$Clusters$Updatecontainerthreatdetectionsettings,
      callback: BodyResponseCallback<Schema$ContainerThreatDetectionSettings>
    ): void;
    updateContainerThreatDetectionSettings(
      callback: BodyResponseCallback<Schema$ContainerThreatDetectionSettings>
    ): void;
    updateContainerThreatDetectionSettings(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Clusters$Updatecontainerthreatdetectionsettings
        | BodyResponseCallback<Schema$ContainerThreatDetectionSettings>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ContainerThreatDetectionSettings>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ContainerThreatDetectionSettings>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<
          GaxiosResponseWithHTTP2<Schema$ContainerThreatDetectionSettings>
        >
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Clusters$Updatecontainerthreatdetectionsettings;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Clusters$Updatecontainerthreatdetectionsettings;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://securitycenter.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta2/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$ContainerThreatDetectionSettings>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ContainerThreatDetectionSettings>(
          parameters
        );
      }
    }
  }

  export interface Params$Resource$Projects$Locations$Clusters$Getcontainerthreatdetectionsettings extends StandardParameters {
    /**
     *
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Locations$Clusters$Updatecontainerthreatdetectionsettings extends StandardParameters {
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
    requestBody?: Schema$ContainerThreatDetectionSettings;
  }

  export class Resource$Projects$Locations$Clusters$Containerthreatdetectionsettings {
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
     * const securitycenter = google.securitycenter('v1beta2');
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
     *     await securitycenter.projects.locations.clusters.containerThreatDetectionSettings.calculate(
     *       {
     *         name: 'projects/my-project/locations/my-location/clusters/my-cluster/containerThreatDetectionSettings',
     *
     *         showEligibleModulesOnly: 'placeholder-value',
     *       },
     *     );
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "modules": {},
     *   //   "name": "my_name",
     *   //   "serviceAccount": "my_serviceAccount",
     *   //   "serviceEnablementState": "my_serviceEnablementState",
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
    calculate(
      params: Params$Resource$Projects$Locations$Clusters$Containerthreatdetectionsettings$Calculate,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    calculate(
      params?: Params$Resource$Projects$Locations$Clusters$Containerthreatdetectionsettings$Calculate,
      options?: MethodOptions
    ): Promise<
      GaxiosResponseWithHTTP2<Schema$ContainerThreatDetectionSettings>
    >;
    calculate(
      params: Params$Resource$Projects$Locations$Clusters$Containerthreatdetectionsettings$Calculate,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    calculate(
      params: Params$Resource$Projects$Locations$Clusters$Containerthreatdetectionsettings$Calculate,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ContainerThreatDetectionSettings>,
      callback: BodyResponseCallback<Schema$ContainerThreatDetectionSettings>
    ): void;
    calculate(
      params: Params$Resource$Projects$Locations$Clusters$Containerthreatdetectionsettings$Calculate,
      callback: BodyResponseCallback<Schema$ContainerThreatDetectionSettings>
    ): void;
    calculate(
      callback: BodyResponseCallback<Schema$ContainerThreatDetectionSettings>
    ): void;
    calculate(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Clusters$Containerthreatdetectionsettings$Calculate
        | BodyResponseCallback<Schema$ContainerThreatDetectionSettings>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ContainerThreatDetectionSettings>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ContainerThreatDetectionSettings>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<
          GaxiosResponseWithHTTP2<Schema$ContainerThreatDetectionSettings>
        >
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Clusters$Containerthreatdetectionsettings$Calculate;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Clusters$Containerthreatdetectionsettings$Calculate;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://securitycenter.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta2/{+name}:calculate').replace(
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
        createAPIRequest<Schema$ContainerThreatDetectionSettings>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ContainerThreatDetectionSettings>(
          parameters
        );
      }
    }
  }

  export interface Params$Resource$Projects$Locations$Clusters$Containerthreatdetectionsettings$Calculate extends StandardParameters {
    /**
     *
     */
    name?: string;
    /**
     *
     */
    showEligibleModulesOnly?: boolean;
  }

  export class Resource$Projects$Rapidvulnerabilitydetectionsettings {
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
     * const securitycenter = google.securitycenter('v1beta2');
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
     *     await securitycenter.projects.rapidVulnerabilityDetectionSettings.calculate(
     *       {
     *         name: 'projects/my-project/rapidVulnerabilityDetectionSettings',
     *       },
     *     );
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "modules": {},
     *   //   "name": "my_name",
     *   //   "serviceEnablementState": "my_serviceEnablementState",
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
    calculate(
      params: Params$Resource$Projects$Rapidvulnerabilitydetectionsettings$Calculate,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    calculate(
      params?: Params$Resource$Projects$Rapidvulnerabilitydetectionsettings$Calculate,
      options?: MethodOptions
    ): Promise<
      GaxiosResponseWithHTTP2<Schema$RapidVulnerabilityDetectionSettings>
    >;
    calculate(
      params: Params$Resource$Projects$Rapidvulnerabilitydetectionsettings$Calculate,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    calculate(
      params: Params$Resource$Projects$Rapidvulnerabilitydetectionsettings$Calculate,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$RapidVulnerabilityDetectionSettings>,
      callback: BodyResponseCallback<Schema$RapidVulnerabilityDetectionSettings>
    ): void;
    calculate(
      params: Params$Resource$Projects$Rapidvulnerabilitydetectionsettings$Calculate,
      callback: BodyResponseCallback<Schema$RapidVulnerabilityDetectionSettings>
    ): void;
    calculate(
      callback: BodyResponseCallback<Schema$RapidVulnerabilityDetectionSettings>
    ): void;
    calculate(
      paramsOrCallback?:
        | Params$Resource$Projects$Rapidvulnerabilitydetectionsettings$Calculate
        | BodyResponseCallback<Schema$RapidVulnerabilityDetectionSettings>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$RapidVulnerabilityDetectionSettings>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$RapidVulnerabilityDetectionSettings>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<
          GaxiosResponseWithHTTP2<Schema$RapidVulnerabilityDetectionSettings>
        >
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Rapidvulnerabilitydetectionsettings$Calculate;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Rapidvulnerabilitydetectionsettings$Calculate;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://securitycenter.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta2/{+name}:calculate').replace(
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
        createAPIRequest<Schema$RapidVulnerabilityDetectionSettings>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$RapidVulnerabilityDetectionSettings>(
          parameters
        );
      }
    }
  }

  export interface Params$Resource$Projects$Rapidvulnerabilitydetectionsettings$Calculate extends StandardParameters {
    /**
     *
     */
    name?: string;
  }

  export class Resource$Projects$Securityhealthanalyticssettings {
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
     * const securitycenter = google.securitycenter('v1beta2');
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
     *     await securitycenter.projects.securityHealthAnalyticsSettings.calculate({
     *       name: 'projects/my-project/securityHealthAnalyticsSettings',
     *
     *       showEligibleModulesOnly: 'placeholder-value',
     *     });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "modules": {},
     *   //   "name": "my_name",
     *   //   "serviceAccount": "my_serviceAccount",
     *   //   "serviceEnablementState": "my_serviceEnablementState",
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
    calculate(
      params: Params$Resource$Projects$Securityhealthanalyticssettings$Calculate,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    calculate(
      params?: Params$Resource$Projects$Securityhealthanalyticssettings$Calculate,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$SecurityHealthAnalyticsSettings>>;
    calculate(
      params: Params$Resource$Projects$Securityhealthanalyticssettings$Calculate,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    calculate(
      params: Params$Resource$Projects$Securityhealthanalyticssettings$Calculate,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$SecurityHealthAnalyticsSettings>,
      callback: BodyResponseCallback<Schema$SecurityHealthAnalyticsSettings>
    ): void;
    calculate(
      params: Params$Resource$Projects$Securityhealthanalyticssettings$Calculate,
      callback: BodyResponseCallback<Schema$SecurityHealthAnalyticsSettings>
    ): void;
    calculate(
      callback: BodyResponseCallback<Schema$SecurityHealthAnalyticsSettings>
    ): void;
    calculate(
      paramsOrCallback?:
        | Params$Resource$Projects$Securityhealthanalyticssettings$Calculate
        | BodyResponseCallback<Schema$SecurityHealthAnalyticsSettings>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$SecurityHealthAnalyticsSettings>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$SecurityHealthAnalyticsSettings>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$SecurityHealthAnalyticsSettings>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Securityhealthanalyticssettings$Calculate;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Securityhealthanalyticssettings$Calculate;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://securitycenter.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta2/{+name}:calculate').replace(
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
        createAPIRequest<Schema$SecurityHealthAnalyticsSettings>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$SecurityHealthAnalyticsSettings>(
          parameters
        );
      }
    }
  }

  export interface Params$Resource$Projects$Securityhealthanalyticssettings$Calculate extends StandardParameters {
    /**
     *
     */
    name?: string;
    /**
     *
     */
    showEligibleModulesOnly?: boolean;
  }

  export class Resource$Projects$Virtualmachinethreatdetectionsettings {
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
     * const securitycenter = google.securitycenter('v1beta2');
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
     *     await securitycenter.projects.virtualMachineThreatDetectionSettings.calculate(
     *       {
     *         name: 'projects/my-project/virtualMachineThreatDetectionSettings',
     *
     *         showEligibleModulesOnly: 'placeholder-value',
     *       },
     *     );
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "modules": {},
     *   //   "name": "my_name",
     *   //   "serviceAccount": "my_serviceAccount",
     *   //   "serviceEnablementState": "my_serviceEnablementState",
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
    calculate(
      params: Params$Resource$Projects$Virtualmachinethreatdetectionsettings$Calculate,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    calculate(
      params?: Params$Resource$Projects$Virtualmachinethreatdetectionsettings$Calculate,
      options?: MethodOptions
    ): Promise<
      GaxiosResponseWithHTTP2<Schema$VirtualMachineThreatDetectionSettings>
    >;
    calculate(
      params: Params$Resource$Projects$Virtualmachinethreatdetectionsettings$Calculate,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    calculate(
      params: Params$Resource$Projects$Virtualmachinethreatdetectionsettings$Calculate,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$VirtualMachineThreatDetectionSettings>,
      callback: BodyResponseCallback<Schema$VirtualMachineThreatDetectionSettings>
    ): void;
    calculate(
      params: Params$Resource$Projects$Virtualmachinethreatdetectionsettings$Calculate,
      callback: BodyResponseCallback<Schema$VirtualMachineThreatDetectionSettings>
    ): void;
    calculate(
      callback: BodyResponseCallback<Schema$VirtualMachineThreatDetectionSettings>
    ): void;
    calculate(
      paramsOrCallback?:
        | Params$Resource$Projects$Virtualmachinethreatdetectionsettings$Calculate
        | BodyResponseCallback<Schema$VirtualMachineThreatDetectionSettings>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$VirtualMachineThreatDetectionSettings>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$VirtualMachineThreatDetectionSettings>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<
          GaxiosResponseWithHTTP2<Schema$VirtualMachineThreatDetectionSettings>
        >
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Virtualmachinethreatdetectionsettings$Calculate;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Virtualmachinethreatdetectionsettings$Calculate;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://securitycenter.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta2/{+name}:calculate').replace(
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
        createAPIRequest<Schema$VirtualMachineThreatDetectionSettings>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$VirtualMachineThreatDetectionSettings>(
          parameters
        );
      }
    }
  }

  export interface Params$Resource$Projects$Virtualmachinethreatdetectionsettings$Calculate extends StandardParameters {
    /**
     *
     */
    name?: string;
    /**
     *
     */
    showEligibleModulesOnly?: boolean;
  }

  export class Resource$Projects$Websecurityscannersettings {
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
     * const securitycenter = google.securitycenter('v1beta2');
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
     *     await securitycenter.projects.webSecurityScannerSettings.calculate({
     *       name: 'projects/my-project/webSecurityScannerSettings',
     *
     *       showEligibleModulesOnly: 'placeholder-value',
     *     });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "modules": {},
     *   //   "name": "my_name",
     *   //   "serviceEnablementState": "my_serviceEnablementState",
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
    calculate(
      params: Params$Resource$Projects$Websecurityscannersettings$Calculate,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    calculate(
      params?: Params$Resource$Projects$Websecurityscannersettings$Calculate,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$WebSecurityScannerSettings>>;
    calculate(
      params: Params$Resource$Projects$Websecurityscannersettings$Calculate,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    calculate(
      params: Params$Resource$Projects$Websecurityscannersettings$Calculate,
      options:
        MethodOptions | BodyResponseCallback<Schema$WebSecurityScannerSettings>,
      callback: BodyResponseCallback<Schema$WebSecurityScannerSettings>
    ): void;
    calculate(
      params: Params$Resource$Projects$Websecurityscannersettings$Calculate,
      callback: BodyResponseCallback<Schema$WebSecurityScannerSettings>
    ): void;
    calculate(
      callback: BodyResponseCallback<Schema$WebSecurityScannerSettings>
    ): void;
    calculate(
      paramsOrCallback?:
        | Params$Resource$Projects$Websecurityscannersettings$Calculate
        | BodyResponseCallback<Schema$WebSecurityScannerSettings>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$WebSecurityScannerSettings>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$WebSecurityScannerSettings>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$WebSecurityScannerSettings>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Websecurityscannersettings$Calculate;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Websecurityscannersettings$Calculate;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://securitycenter.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta2/{+name}:calculate').replace(
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
        createAPIRequest<Schema$WebSecurityScannerSettings>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$WebSecurityScannerSettings>(parameters);
      }
    }
  }

  export interface Params$Resource$Projects$Websecurityscannersettings$Calculate extends StandardParameters {
    /**
     *
     */
    name?: string;
    /**
     *
     */
    showEligibleModulesOnly?: boolean;
  }
}
