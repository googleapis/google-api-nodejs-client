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

  /**
   * Represents an access event.
   */
  export interface Schema$Access {
    /**
     * Caller's IP address, such as "1.1.1.1".
     */
    callerIp?: string | null;
    /**
     * The caller IP's geolocation, which identifies where the call came from.
     */
    callerIpGeo?: Schema$Geolocation;
    /**
     * The method that the service account called, e.g. "SetIamPolicy".
     */
    methodName?: string | null;
    /**
     * Associated email, such as "foo@google.com".
     */
    principalEmail?: string | null;
    /**
     * This is the API service that the service account made a call to, e.g. "iam.googleapis.com"
     */
    serviceName?: string | null;
    /**
     * What kind of user agent is associated, e.g. operating system shells, embedded or stand-alone applications, etc.
     */
    userAgentFamily?: string | null;
  }
  /**
   * Configuration of a module.
   */
  export interface Schema$Config {
    /**
     * The state of enablement for the module at its level of the resource hierarchy.
     */
    moduleEnablementState?: string | null;
    /**
     * The configuration value for the module. The absence of this field implies its inheritance from the parent.
     */
    value?: {[key: string]: any} | null;
  }
  /**
   * Resource capturing the settings for the Container Threat Detection service.
   */
  export interface Schema$ContainerThreatDetectionSettings {
    /**
     * The configurations including the state of enablement for the service's different modules. The absence of a module in the map implies its configuration is inherited from its parent's.
     */
    modules?: {[key: string]: Schema$Config} | null;
    /**
     * The resource name of the ContainerThreatDetectionSettings. Formats: * organizations/{organization\}/containerThreatDetectionSettings * folders/{folder\}/containerThreatDetectionSettings * projects/{project\}/containerThreatDetectionSettings * projects/{project\}/locations/{location\}/clusters/{cluster\}/containerThreatDetectionSettings
     */
    name?: string | null;
    /**
     * Output only. The service account used by Container Threat Detection for scanning. Service accounts are scoped at the project level meaning this field will be empty at any level above a project.
     */
    serviceAccount?: string | null;
    /**
     * The state of enablement for the service at its level of the resource hierarchy. A DISABLED state will override all module enablement_states to DISABLED.
     */
    serviceEnablementState?: string | null;
    /**
     * Output only. The time the settings were last updated.
     */
    updateTime?: string | null;
  }
  /**
   * CVE stands for Common Vulnerabilities and Exposures. More information: https://cve.mitre.org
   */
  export interface Schema$Cve {
    /**
     * Describe Common Vulnerability Scoring System specified at https://www.first.org/cvss/v3.1/specification-document
     */
    cvssv3?: Schema$Cvssv3;
    /**
     * The unique identifier for the vulnerability. e.g. CVE-2021-34527
     */
    id?: string | null;
    /**
     * Additional information about the CVE. e.g. https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2021-34527
     */
    references?: Schema$Reference[];
  }
  /**
   * Common Vulnerability Scoring System version 3.
   */
  export interface Schema$Cvssv3 {
    /**
     * This metric describes the conditions beyond the attacker's control that must exist in order to exploit the vulnerability.
     */
    attackComplexity?: string | null;
    /**
     * Base Metrics Represents the intrinsic characteristics of a vulnerability that are constant over time and across user environments. This metric reflects the context by which vulnerability exploitation is possible.
     */
    attackVector?: string | null;
    /**
     * This metric measures the impact to the availability of the impacted component resulting from a successfully exploited vulnerability.
     */
    availabilityImpact?: string | null;
    /**
     * The base score is a function of the base metric scores.
     */
    baseScore?: number | null;
    /**
     * This metric measures the impact to the confidentiality of the information resources managed by a software component due to a successfully exploited vulnerability.
     */
    confidentialityImpact?: string | null;
    /**
     * This metric measures the impact to integrity of a successfully exploited vulnerability.
     */
    integrityImpact?: string | null;
    /**
     * This metric describes the level of privileges an attacker must possess before successfully exploiting the vulnerability.
     */
    privilegesRequired?: string | null;
    /**
     * The Scope metric captures whether a vulnerability in one vulnerable component impacts resources in components beyond its security scope.
     */
    scope?: string | null;
    /**
     * This metric captures the requirement for a human user, other than the attacker, to participate in the successful compromise of the vulnerable component.
     */
    userInteraction?: string | null;
  }
  /**
   * Details of a subscription.
   */
  export interface Schema$Details {
    /**
     * The time the subscription has or will end.
     */
    endTime?: string | null;
    /**
     * The time the subscription has or will start.
     */
    startTime?: string | null;
    /**
     * The type of subscription
     */
    type?: string | null;
  }
  /**
   * Resource capturing the settings for the Event Threat Detection service.
   */
  export interface Schema$EventThreatDetectionSettings {
    /**
     * The configurations including the state of enablement for the service's different modules. The absence of a module in the map implies its configuration is inherited from its parent's.
     */
    modules?: {[key: string]: Schema$Config} | null;
    /**
     * The resource name of the EventThreatDetectionSettings. Formats: * organizations/{organization\}/eventThreatDetectionSettings * folders/{folder\}/eventThreatDetectionSettings * projects/{project\}/eventThreatDetectionSettings
     */
    name?: string | null;
    /**
     * The state of enablement for the service at its level of the resource hierarchy. A DISABLED state will override all module enablement_states to DISABLED.
     */
    serviceEnablementState?: string | null;
    /**
     * Output only. The time the settings were last updated.
     */
    updateTime?: string | null;
  }
  /**
   * Security Command Center finding. A finding is a record of assessment data like security, risk, health, or privacy, that is ingested into Security Command Center for presentation, notification, analysis, policy testing, and enforcement. For example, a cross-site scripting (XSS) vulnerability in an App Engine application is a finding.
   */
  export interface Schema$Finding {
    /**
     * Access details associated to the Finding, such as more information on the caller, which method was accessed, from where, etc.
     */
    access?: Schema$Access;
    /**
     * The canonical name of the finding. It's either "organizations/{organization_id\}/sources/{source_id\}/findings/{finding_id\}", "folders/{folder_id\}/sources/{source_id\}/findings/{finding_id\}" or "projects/{project_number\}/sources/{source_id\}/findings/{finding_id\}", depending on the closest CRM ancestor of the resource associated with the finding.
     */
    canonicalName?: string | null;
    /**
     * The additional taxonomy group within findings from a given source. This field is immutable after creation time. Example: "XSS_FLASH_INJECTION"
     */
    category?: string | null;
    /**
     * The time at which the finding was created in Security Command Center.
     */
    createTime?: string | null;
    /**
     * The time at which the event took place, or when an update to the finding occurred. For example, if the finding represents an open firewall it would capture the time the detector believes the firewall became open. The accuracy is determined by the detector. If the finding were to be resolved afterward, this time would reflect when the finding was resolved. Must not be set to a value greater than the current timestamp.
     */
    eventTime?: string | null;
    /**
     * Output only. Third party SIEM/SOAR fields within SCC, contains external system information and external system finding fields.
     */
    externalSystems?: {
      [key: string]: Schema$GoogleCloudSecuritycenterV1ExternalSystem;
    } | null;
    /**
     * The URI that, if available, points to a web page outside of Security Command Center where additional information about the finding can be found. This field is guaranteed to be either empty or a well formed URL.
     */
    externalUri?: string | null;
    /**
     * The class of the finding.
     */
    findingClass?: string | null;
    /**
     * Represents what's commonly known as an Indicator of compromise (IoC) in computer forensics. This is an artifact observed on a network or in an operating system that, with high confidence, indicates a computer intrusion. Reference: https://en.wikipedia.org/wiki/Indicator_of_compromise
     */
    indicator?: Schema$Indicator;
    /**
     * MITRE ATT&CK tactics and techniques related to this finding. See: https://attack.mitre.org
     */
    mitreAttack?: Schema$MitreAttack;
    /**
     * Indicates the mute state of a finding (either unspecified, muted, unmuted or undefined).
     */
    mute?: string | null;
    /**
     * First known as mute_annotation. Records additional information about the mute operation e.g. mute config that muted the finding, user who muted the finding, etc.
     */
    muteInitiator?: string | null;
    /**
     * Output only. The most recent time this finding was muted or unmuted.
     */
    muteUpdateTime?: string | null;
    /**
     * The relative resource name of this finding. See: https://cloud.google.com/apis/design/resource_names#relative_resource_name Example: "organizations/{organization_id\}/sources/{source_id\}/findings/{finding_id\}"
     */
    name?: string | null;
    /**
     * The relative resource name of the source the finding belongs to. See: https://cloud.google.com/apis/design/resource_names#relative_resource_name This field is immutable after creation time. For example: "organizations/{organization_id\}/sources/{source_id\}"
     */
    parent?: string | null;
    /**
     * For findings on Google Cloud resources, the full resource name of the Google Cloud resource this finding is for. See: https://cloud.google.com/apis/design/resource_names#full_resource_name When the finding is for a non-Google Cloud resource, the resourceName can be a customer or partner defined string. This field is immutable after creation time.
     */
    resourceName?: string | null;
    /**
     * Output only. User specified security marks. These marks are entirely managed by the user and come from the SecurityMarks resource that belongs to the finding.
     */
    securityMarks?: Schema$SecurityMarks;
    /**
     * The severity of the finding. This field is managed by the source that writes the finding.
     */
    severity?: string | null;
    /**
     * Source specific properties. These properties are managed by the source that writes the finding. The key names in the source_properties map must be between 1 and 255 characters, and must start with a letter and contain alphanumeric characters or underscores only.
     */
    sourceProperties?: {[key: string]: any} | null;
    /**
     * The state of the finding.
     */
    state?: string | null;
    /**
     * Represents vulnerability specific fields like cve, cvss scores etc. CVE stands for Common Vulnerabilities and Exposures (https://cve.mitre.org/about/)
     */
    vulnerability?: Schema$Vulnerability;
  }
  /**
   * Message that contains the resource name and display name of a folder resource.
   */
  export interface Schema$Folder {
    /**
     * Full resource name of this folder. See: https://cloud.google.com/apis/design/resource_names#full_resource_name
     */
    resourceFolder?: string | null;
    /**
     * The user defined display name for this folder.
     */
    resourceFolderDisplayName?: string | null;
  }
  /**
   * Represents a geographical location for a given access.
   */
  export interface Schema$Geolocation {
    /**
     * A CLDR.
     */
    regionCode?: string | null;
  }
  /**
   * Response of asset discovery run
   */
  export interface Schema$GoogleCloudSecuritycenterV1beta1RunAssetDiscoveryResponse {
    /**
     * The duration between asset discovery run start and end
     */
    duration?: string | null;
    /**
     * The state of an asset discovery run.
     */
    state?: string | null;
  }
  /**
   * The response to a BulkMute request. Contains the LRO information.
   */
  export interface Schema$GoogleCloudSecuritycenterV1BulkMuteFindingsResponse {}
  /**
   * Representation of third party SIEM/SOAR fields within SCC.
   */
  export interface Schema$GoogleCloudSecuritycenterV1ExternalSystem {
    /**
     * References primary/secondary etc assignees in the external system.
     */
    assignees?: string[] | null;
    /**
     * The most recent time when the corresponding finding's ticket/tracker was updated in the external system.
     */
    externalSystemUpdateTime?: string | null;
    /**
     * Identifier that's used to track the given finding in the external system.
     */
    externalUid?: string | null;
    /**
     * External System Name e.g. jira, demisto, etc. e.g.: organizations/1234/sources/5678/findings/123456/externalSystems/jira folders/1234/sources/5678/findings/123456/externalSystems/jira projects/1234/sources/5678/findings/123456/externalSystems/jira
     */
    name?: string | null;
    /**
     * Most recent status of the corresponding finding's ticket/tracker in the external system.
     */
    status?: string | null;
  }
  /**
   * A mute config is a Cloud SCC resource that contains the configuration to mute create/update events of findings.
   */
  export interface Schema$GoogleCloudSecuritycenterV1MuteConfig {
    /**
     * Output only. The time at which the mute config was created. This field is set by the server and will be ignored if provided on config creation.
     */
    createTime?: string | null;
    /**
     * A description of the mute config.
     */
    description?: string | null;
    /**
     * The human readable name to be displayed for the mute config.
     */
    displayName?: string | null;
    /**
     * Required. An expression that defines the filter to apply across create/update events of findings. While creating a filter string, be mindful of the scope in which the mute configuration is being created. E.g., If a filter contains project = X but is created under the project = Y scope, it might not match any findings. The following field and operator combinations are supported: * severity: `=`, `:` * category: `=`, `:` * resource.name: `=`, `:` * resource.project_name: `=`, `:` * resource.project_display_name: `=`, `:` * resource.folders.resource_folder: `=`, `:` * resource.parent_name: `=`, `:` * resource.parent_display_name: `=`, `:` * resource.type: `=`, `:` * finding_class: `=`, `:` * indicator.ip_addresses: `=`, `:` * indicator.domains: `=`, `:`
     */
    filter?: string | null;
    /**
     * Output only. Email address of the user who last edited the mute config. This field is set by the server and will be ignored if provided on config creation or update.
     */
    mostRecentEditor?: string | null;
    /**
     * This field will be ignored if provided on config creation. Format "organizations/{organization\}/muteConfigs/{mute_config\}" "folders/{folder\}/muteConfigs/{mute_config\}" "projects/{project\}/muteConfigs/{mute_config\}"
     */
    name?: string | null;
    /**
     * Output only. The most recent time at which the mute config was updated. This field is set by the server and will be ignored if provided on config creation or update.
     */
    updateTime?: string | null;
  }
  /**
   * Cloud SCC's Notification
   */
  export interface Schema$GoogleCloudSecuritycenterV1NotificationMessage {
    /**
     * If it's a Finding based notification config, this field will be populated.
     */
    finding?: Schema$Finding;
    /**
     * Name of the notification config that generated current notification.
     */
    notificationConfigName?: string | null;
    /**
     * The Cloud resource tied to this notification's Finding.
     */
    resource?: Schema$GoogleCloudSecuritycenterV1Resource;
  }
  /**
   * Security Command Center finding. A finding is a record of assessment data (security, risk, health or privacy) ingested into Security Command Center for presentation, notification, analysis, policy testing, and enforcement. For example, an XSS vulnerability in an App Engine application is a finding.
   */
  export interface Schema$GoogleCloudSecuritycenterV1p1beta1Finding {
    /**
     * The canonical name of the finding. It's either "organizations/{organization_id\}/sources/{source_id\}/findings/{finding_id\}", "folders/{folder_id\}/sources/{source_id\}/findings/{finding_id\}" or "projects/{project_number\}/sources/{source_id\}/findings/{finding_id\}", depending on the closest CRM ancestor of the resource associated with the finding.
     */
    canonicalName?: string | null;
    /**
     * The additional taxonomy group within findings from a given source. This field is immutable after creation time. Example: "XSS_FLASH_INJECTION"
     */
    category?: string | null;
    /**
     * The time at which the finding was created in Security Command Center.
     */
    createTime?: string | null;
    /**
     * The time at which the event took place, or when an update to the finding occurred. For example, if the finding represents an open firewall it would capture the time the detector believes the firewall became open. The accuracy is determined by the detector. If the finding were to be resolved afterward, this time would reflect when the finding was resolved. Must not be set to a value greater than the current timestamp.
     */
    eventTime?: string | null;
    /**
     * The URI that, if available, points to a web page outside of Security Command Center where additional information about the finding can be found. This field is guaranteed to be either empty or a well formed URL.
     */
    externalUri?: string | null;
    /**
     * The relative resource name of this finding. See: https://cloud.google.com/apis/design/resource_names#relative_resource_name Example: "organizations/{organization_id\}/sources/{source_id\}/findings/{finding_id\}"
     */
    name?: string | null;
    /**
     * The relative resource name of the source the finding belongs to. See: https://cloud.google.com/apis/design/resource_names#relative_resource_name This field is immutable after creation time. For example: "organizations/{organization_id\}/sources/{source_id\}"
     */
    parent?: string | null;
    /**
     * For findings on Google Cloud resources, the full resource name of the Google Cloud resource this finding is for. See: https://cloud.google.com/apis/design/resource_names#full_resource_name When the finding is for a non-Google Cloud resource, the resourceName can be a customer or partner defined string. This field is immutable after creation time.
     */
    resourceName?: string | null;
    /**
     * Output only. User specified security marks. These marks are entirely managed by the user and come from the SecurityMarks resource that belongs to the finding.
     */
    securityMarks?: Schema$GoogleCloudSecuritycenterV1p1beta1SecurityMarks;
    /**
     * The severity of the finding. This field is managed by the source that writes the finding.
     */
    severity?: string | null;
    /**
     * Source specific properties. These properties are managed by the source that writes the finding. The key names in the source_properties map must be between 1 and 255 characters, and must start with a letter and contain alphanumeric characters or underscores only.
     */
    sourceProperties?: {[key: string]: any} | null;
    /**
     * The state of the finding.
     */
    state?: string | null;
  }
  /**
   * Message that contains the resource name and display name of a folder resource.
   */
  export interface Schema$GoogleCloudSecuritycenterV1p1beta1Folder {
    /**
     * Full resource name of this folder. See: https://cloud.google.com/apis/design/resource_names#full_resource_name
     */
    resourceFolder?: string | null;
    /**
     * The user defined display name for this folder.
     */
    resourceFolderDisplayName?: string | null;
  }
  /**
   * Security Command Center's Notification
   */
  export interface Schema$GoogleCloudSecuritycenterV1p1beta1NotificationMessage {
    /**
     * If it's a Finding based notification config, this field will be populated.
     */
    finding?: Schema$GoogleCloudSecuritycenterV1p1beta1Finding;
    /**
     * Name of the notification config that generated current notification.
     */
    notificationConfigName?: string | null;
    /**
     * The Cloud resource tied to the notification.
     */
    resource?: Schema$GoogleCloudSecuritycenterV1p1beta1Resource;
  }
  /**
   * Information related to the Google Cloud resource.
   */
  export interface Schema$GoogleCloudSecuritycenterV1p1beta1Resource {
    /**
     * Output only. Contains a Folder message for each folder in the assets ancestry. The first folder is the deepest nested folder, and the last folder is the folder directly under the Organization.
     */
    folders?: Schema$GoogleCloudSecuritycenterV1p1beta1Folder[];
    /**
     * The full resource name of the resource. See: https://cloud.google.com/apis/design/resource_names#full_resource_name
     */
    name?: string | null;
    /**
     * The full resource name of resource's parent.
     */
    parent?: string | null;
    /**
     * The human readable name of resource's parent.
     */
    parentDisplayName?: string | null;
    /**
     * The full resource name of project that the resource belongs to.
     */
    project?: string | null;
    /**
     * The human readable name of project that the resource belongs to.
     */
    projectDisplayName?: string | null;
  }
  /**
   * Response of asset discovery run
   */
  export interface Schema$GoogleCloudSecuritycenterV1p1beta1RunAssetDiscoveryResponse {
    /**
     * The duration between asset discovery run start and end
     */
    duration?: string | null;
    /**
     * The state of an asset discovery run.
     */
    state?: string | null;
  }
  /**
   * User specified security marks that are attached to the parent Security Command Center resource. Security marks are scoped within a Security Command Center organization -- they can be modified and viewed by all users who have proper permissions on the organization.
   */
  export interface Schema$GoogleCloudSecuritycenterV1p1beta1SecurityMarks {
    /**
     * The canonical name of the marks. Examples: "organizations/{organization_id\}/assets/{asset_id\}/securityMarks" "folders/{folder_id\}/assets/{asset_id\}/securityMarks" "projects/{project_number\}/assets/{asset_id\}/securityMarks" "organizations/{organization_id\}/sources/{source_id\}/findings/{finding_id\}/securityMarks" "folders/{folder_id\}/sources/{source_id\}/findings/{finding_id\}/securityMarks" "projects/{project_number\}/sources/{source_id\}/findings/{finding_id\}/securityMarks"
     */
    canonicalName?: string | null;
    /**
     * Mutable user specified security marks belonging to the parent resource. Constraints are as follows: * Keys and values are treated as case insensitive * Keys must be between 1 - 256 characters (inclusive) * Keys must be letters, numbers, underscores, or dashes * Values have leading and trailing whitespace trimmed, remaining characters must be between 1 - 4096 characters (inclusive)
     */
    marks?: {[key: string]: string} | null;
    /**
     * The relative resource name of the SecurityMarks. See: https://cloud.google.com/apis/design/resource_names#relative_resource_name Examples: "organizations/{organization_id\}/assets/{asset_id\}/securityMarks" "organizations/{organization_id\}/sources/{source_id\}/findings/{finding_id\}/securityMarks".
     */
    name?: string | null;
  }
  /**
   * Information related to the Google Cloud resource.
   */
  export interface Schema$GoogleCloudSecuritycenterV1Resource {
    /**
     * The human readable name of the resource.
     */
    displayName?: string | null;
    /**
     * Output only. Contains a Folder message for each folder in the assets ancestry. The first folder is the deepest nested folder, and the last folder is the folder directly under the Organization.
     */
    folders?: Schema$Folder[];
    /**
     * The full resource name of the resource. See: https://cloud.google.com/apis/design/resource_names#full_resource_name
     */
    name?: string | null;
    /**
     * The full resource name of resource's parent.
     */
    parent?: string | null;
    /**
     * The human readable name of resource's parent.
     */
    parentDisplayName?: string | null;
    /**
     * The full resource name of project that the resource belongs to.
     */
    project?: string | null;
    /**
     * The human readable name of project that the resource belongs to.
     */
    projectDisplayName?: string | null;
    /**
     * The full resource type of the resource.
     */
    type?: string | null;
  }
  /**
   * Response of asset discovery run
   */
  export interface Schema$GoogleCloudSecuritycenterV1RunAssetDiscoveryResponse {
    /**
     * The duration between asset discovery run start and end
     */
    duration?: string | null;
    /**
     * The state of an asset discovery run.
     */
    state?: string | null;
  }
  /**
   * Represents what's commonly known as an Indicator of compromise (IoC) in computer forensics. This is an artifact observed on a network or in an operating system that, with high confidence, indicates a computer intrusion. Reference: https://en.wikipedia.org/wiki/Indicator_of_compromise
   */
  export interface Schema$Indicator {
    /**
     * List of domains associated to the Finding.
     */
    domains?: string[] | null;
    /**
     * List of ip addresses associated to the Finding.
     */
    ipAddresses?: string[] | null;
  }
  /**
   * MITRE ATT&CK tactics and techniques related to this finding. See: https://attack.mitre.org
   */
  export interface Schema$MitreAttack {
    /**
     * Additional MITRE ATT&CK tactics related to this finding, if any.
     */
    additionalTactics?: string[] | null;
    /**
     * Additional MITRE ATT&CK techniques related to this finding, if any, along with any of their respective parent techniques.
     */
    additionalTechniques?: string[] | null;
    /**
     * The MITRE ATT&CK tactic most closely represented by this finding, if any.
     */
    primaryTactic?: string | null;
    /**
     * The MITRE ATT&CK technique most closely represented by this finding, if any. primary_techniques is a repeated field because there are multiple levels of MITRE ATT&CK techniques. If the technique most closely represented by this finding is a sub-technique (e.g. SCANNING_IP_BLOCKS), both the sub-technique and its parent technique(s) will be listed (e.g. SCANNING_IP_BLOCKS, ACTIVE_SCANNING).
     */
    primaryTechniques?: string[] | null;
    /**
     * The MITRE ATT&CK version referenced by the above fields. E.g. "8".
     */
    version?: string | null;
  }
  /**
   * Additional Links
   */
  export interface Schema$Reference {
    /**
     * Source of the reference e.g. NVD
     */
    source?: string | null;
    /**
     * Uri for the mentioned source e.g. https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2021-34527.
     */
    uri?: string | null;
  }
  /**
   * Resource capturing the settings for Security Center.
   */
  export interface Schema$SecurityCenterSettings {
    /**
     * The resource name of the project to send logs to. This project must be part of the organization this resource resides in. The format is `projects/{project_id\}`. An empty value disables logging. This value is only referenced by services that support log sink. Please refer to the documentation for an updated list of compatible services.
     */
    logSinkProject?: string | null;
    /**
     * The resource name of the SecurityCenterSettings. Format: organizations/{organization\}/securityCenterSettings
     */
    name?: string | null;
    /**
     * The organization level service account to be used for security center components.
     */
    orgServiceAccount?: string | null;
  }
  /**
   * Resource capturing the settings for the Security Health Analytics service.
   */
  export interface Schema$SecurityHealthAnalyticsSettings {
    /**
     * The configurations including the state of enablement for the service's different modules. The absence of a module in the map implies its configuration is inherited from its parent's.
     */
    modules?: {[key: string]: Schema$Config} | null;
    /**
     * The resource name of the SecurityHealthAnalyticsSettings. Formats: * organizations/{organization\}/securityHealthAnalyticsSettings * folders/{folder\}/securityHealthAnalyticsSettings * projects/{project\}/securityHealthAnalyticsSettings
     */
    name?: string | null;
    /**
     * Output only. The service account used by Security Health Analytics detectors.
     */
    serviceAccount?: string | null;
    /**
     * The state of enablement for the service at its level of the resource hierarchy. A DISABLED state will override all module enablement_states to DISABLED.
     */
    serviceEnablementState?: string | null;
    /**
     * Output only. The time the settings were last updated.
     */
    updateTime?: string | null;
  }
  /**
   * User specified security marks that are attached to the parent Security Command Center resource. Security marks are scoped within a Security Command Center organization -- they can be modified and viewed by all users who have proper permissions on the organization.
   */
  export interface Schema$SecurityMarks {
    /**
     * The canonical name of the marks. Examples: "organizations/{organization_id\}/assets/{asset_id\}/securityMarks" "folders/{folder_id\}/assets/{asset_id\}/securityMarks" "projects/{project_number\}/assets/{asset_id\}/securityMarks" "organizations/{organization_id\}/sources/{source_id\}/findings/{finding_id\}/securityMarks" "folders/{folder_id\}/sources/{source_id\}/findings/{finding_id\}/securityMarks" "projects/{project_number\}/sources/{source_id\}/findings/{finding_id\}/securityMarks"
     */
    canonicalName?: string | null;
    /**
     * Mutable user specified security marks belonging to the parent resource. Constraints are as follows: * Keys and values are treated as case insensitive * Keys must be between 1 - 256 characters (inclusive) * Keys must be letters, numbers, underscores, or dashes * Values have leading and trailing whitespace trimmed, remaining characters must be between 1 - 4096 characters (inclusive)
     */
    marks?: {[key: string]: string} | null;
    /**
     * The relative resource name of the SecurityMarks. See: https://cloud.google.com/apis/design/resource_names#relative_resource_name Examples: "organizations/{organization_id\}/assets/{asset_id\}/securityMarks" "organizations/{organization_id\}/sources/{source_id\}/findings/{finding_id\}/securityMarks".
     */
    name?: string | null;
  }
  /**
   * Resource capturing the state of an organization's subscription.
   */
  export interface Schema$Subscription {
    /**
     * The details of the most recent active subscription. If there has never been a subscription this will be empty.
     */
    details?: Schema$Details;
    /**
     * The resource name of the subscription. Format: organizations/{organization\}/subscription
     */
    name?: string | null;
    /**
     * The tier of SCC features this organization currently has access to.
     */
    tier?: string | null;
  }
  /**
   * Resource capturing the settings for the Virtual Machine Threat Detection service.
   */
  export interface Schema$VirtualMachineThreatDetectionSettings {
    /**
     * The configurations including the state of enablement for the service's different modules. The absence of a module in the map implies its configuration is inherited from its parent's.
     */
    modules?: {[key: string]: Schema$Config} | null;
    /**
     * The resource name of the VirtualMachineThreatDetectionSettings. Formats: * organizations/{organization\}/virtualMachineThreatDetectionSettings * folders/{folder\}/virtualMachineThreatDetectionSettings * projects/{project\}/virtualMachineThreatDetectionSettings
     */
    name?: string | null;
    /**
     * Output only. The service account used by Virtual Machine Threat Detection detectors.
     */
    serviceAccount?: string | null;
    /**
     * The state of enablement for the service at its level of the resource hierarchy. A DISABLED state will override all module enablement_states to DISABLED.
     */
    serviceEnablementState?: string | null;
    /**
     * Output only. The time the settings were last updated.
     */
    updateTime?: string | null;
  }
  /**
   * Refers to common vulnerability fields e.g. cve, cvss, cwe etc.
   */
  export interface Schema$Vulnerability {
    /**
     * CVE stands for Common Vulnerabilities and Exposures (https://cve.mitre.org/about/)
     */
    cve?: Schema$Cve;
  }
  /**
   * Resource capturing the settings for the Web Security Scanner service.
   */
  export interface Schema$WebSecurityScannerSettings {
    /**
     * The configurations including the state of enablement for the service's different modules. The absence of a module in the map implies its configuration is inherited from its parent's.
     */
    modules?: {[key: string]: Schema$Config} | null;
    /**
     * The resource name of the WebSecurityScannerSettings. Formats: * organizations/{organization\}/webSecurityScannerSettings * folders/{folder\}/webSecurityScannerSettings * projects/{project\}/webSecurityScannerSettings
     */
    name?: string | null;
    /**
     * The state of enablement for the service at its level of the resource hierarchy. A DISABLED state will override all module enablement_states to DISABLED.
     */
    serviceEnablementState?: string | null;
    /**
     * Output only. The time the settings were last updated.
     */
    updateTime?: string | null;
  }

  export class Resource$Folders {
    context: APIRequestContext;
    containerThreatDetectionSettings: Resource$Folders$Containerthreatdetectionsettings;
    eventThreatDetectionSettings: Resource$Folders$Eventthreatdetectionsettings;
    securityHealthAnalyticsSettings: Resource$Folders$Securityhealthanalyticssettings;
    virtualMachineThreatDetectionSettings: Resource$Folders$Virtualmachinethreatdetectionsettings;
    webSecurityScannerSettings: Resource$Folders$Websecurityscannersettings;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.containerThreatDetectionSettings =
        new Resource$Folders$Containerthreatdetectionsettings(this.context);
      this.eventThreatDetectionSettings =
        new Resource$Folders$Eventthreatdetectionsettings(this.context);
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
     * Get the ContainerThreatDetectionSettings resource.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/securitycenter.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const securitycenter = google.securitycenter('v1beta2');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await securitycenter.folders.getContainerThreatDetectionSettings({
     *     // Required. The name of the ContainerThreatDetectionSettings to retrieve. Formats: * organizations/{organization\}/containerThreatDetectionSettings * folders/{folder\}/containerThreatDetectionSettings * projects/{project\}/containerThreatDetectionSettings * projects/{project\}/locations/{location\}/clusters/{cluster\}/containerThreatDetectionSettings
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
    ): GaxiosPromise<Readable>;
    getContainerThreatDetectionSettings(
      params?: Params$Resource$Folders$Getcontainerthreatdetectionsettings,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ContainerThreatDetectionSettings>;
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
      | GaxiosPromise<Schema$ContainerThreatDetectionSettings>
      | GaxiosPromise<Readable> {
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
     * Get the EventThreatDetectionSettings resource.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/securitycenter.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const securitycenter = google.securitycenter('v1beta2');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await securitycenter.folders.getEventThreatDetectionSettings({
     *     // Required. The name of the EventThreatDetectionSettings to retrieve. Formats: * organizations/{organization\}/eventThreatDetectionSettings * folders/{folder\}/eventThreatDetectionSettings * projects/{project\}/eventThreatDetectionSettings
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
    ): GaxiosPromise<Readable>;
    getEventThreatDetectionSettings(
      params?: Params$Resource$Folders$Geteventthreatdetectionsettings,
      options?: MethodOptions
    ): GaxiosPromise<Schema$EventThreatDetectionSettings>;
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
      | GaxiosPromise<Schema$EventThreatDetectionSettings>
      | GaxiosPromise<Readable> {
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
     * Get the SecurityHealthAnalyticsSettings resource.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/securitycenter.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const securitycenter = google.securitycenter('v1beta2');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await securitycenter.folders.getSecurityHealthAnalyticsSettings({
     *     // Required. The name of the SecurityHealthAnalyticsSettings to retrieve. Formats: * organizations/{organization\}/securityHealthAnalyticsSettings * folders/{folder\}/securityHealthAnalyticsSettings * projects/{project\}/securityHealthAnalyticsSettings
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
    ): GaxiosPromise<Readable>;
    getSecurityHealthAnalyticsSettings(
      params?: Params$Resource$Folders$Getsecurityhealthanalyticssettings,
      options?: MethodOptions
    ): GaxiosPromise<Schema$SecurityHealthAnalyticsSettings>;
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
      | GaxiosPromise<Schema$SecurityHealthAnalyticsSettings>
      | GaxiosPromise<Readable> {
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
     * Get the VirtualMachineThreatDetectionSettings resource.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/securitycenter.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const securitycenter = google.securitycenter('v1beta2');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res =
     *     await securitycenter.folders.getVirtualMachineThreatDetectionSettings({
     *       // Required. The name of the VirtualMachineThreatDetectionSettings to retrieve. Formats: * organizations/{organization\}/virtualMachineThreatDetectionSettings * folders/{folder\}/virtualMachineThreatDetectionSettings * projects/{project\}/virtualMachineThreatDetectionSettings
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
    ): GaxiosPromise<Readable>;
    getVirtualMachineThreatDetectionSettings(
      params?: Params$Resource$Folders$Getvirtualmachinethreatdetectionsettings,
      options?: MethodOptions
    ): GaxiosPromise<Schema$VirtualMachineThreatDetectionSettings>;
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
      | GaxiosPromise<Schema$VirtualMachineThreatDetectionSettings>
      | GaxiosPromise<Readable> {
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
     * Get the WebSecurityScannerSettings resource.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/securitycenter.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const securitycenter = google.securitycenter('v1beta2');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await securitycenter.folders.getWebSecurityScannerSettings({
     *     // Required. The name of the WebSecurityScannerSettings to retrieve. Formats: * organizations/{organization\}/webSecurityScannerSettings * folders/{folder\}/webSecurityScannerSettings * projects/{project\}/webSecurityScannerSettings
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
    ): GaxiosPromise<Readable>;
    getWebSecurityScannerSettings(
      params?: Params$Resource$Folders$Getwebsecurityscannersettings,
      options?: MethodOptions
    ): GaxiosPromise<Schema$WebSecurityScannerSettings>;
    getWebSecurityScannerSettings(
      params: Params$Resource$Folders$Getwebsecurityscannersettings,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    getWebSecurityScannerSettings(
      params: Params$Resource$Folders$Getwebsecurityscannersettings,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$WebSecurityScannerSettings>,
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
      | GaxiosPromise<Schema$WebSecurityScannerSettings>
      | GaxiosPromise<Readable> {
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
     * Update the ContainerThreatDetectionSettings resource.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/securitycenter.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const securitycenter = google.securitycenter('v1beta2');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res =
     *     await securitycenter.folders.updateContainerThreatDetectionSettings({
     *       // The resource name of the ContainerThreatDetectionSettings. Formats: * organizations/{organization\}/containerThreatDetectionSettings * folders/{folder\}/containerThreatDetectionSettings * projects/{project\}/containerThreatDetectionSettings * projects/{project\}/locations/{location\}/clusters/{cluster\}/containerThreatDetectionSettings
     *       name: 'folders/my-folder/containerThreatDetectionSettings',
     *       // The list of fields to be updated.
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
    ): GaxiosPromise<Readable>;
    updateContainerThreatDetectionSettings(
      params?: Params$Resource$Folders$Updatecontainerthreatdetectionsettings,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ContainerThreatDetectionSettings>;
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
      | GaxiosPromise<Schema$ContainerThreatDetectionSettings>
      | GaxiosPromise<Readable> {
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
     * Update the EventThreatDetectionSettings resource.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/securitycenter.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const securitycenter = google.securitycenter('v1beta2');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await securitycenter.folders.updateEventThreatDetectionSettings({
     *     // The resource name of the EventThreatDetectionSettings. Formats: * organizations/{organization\}/eventThreatDetectionSettings * folders/{folder\}/eventThreatDetectionSettings * projects/{project\}/eventThreatDetectionSettings
     *     name: 'folders/my-folder/eventThreatDetectionSettings',
     *     // The list of fields to be updated.
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
    ): GaxiosPromise<Readable>;
    updateEventThreatDetectionSettings(
      params?: Params$Resource$Folders$Updateeventthreatdetectionsettings,
      options?: MethodOptions
    ): GaxiosPromise<Schema$EventThreatDetectionSettings>;
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
      | GaxiosPromise<Schema$EventThreatDetectionSettings>
      | GaxiosPromise<Readable> {
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
     * Update the SecurityHealthAnalyticsSettings resource.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/securitycenter.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const securitycenter = google.securitycenter('v1beta2');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res =
     *     await securitycenter.folders.updateSecurityHealthAnalyticsSettings({
     *       // The resource name of the SecurityHealthAnalyticsSettings. Formats: * organizations/{organization\}/securityHealthAnalyticsSettings * folders/{folder\}/securityHealthAnalyticsSettings * projects/{project\}/securityHealthAnalyticsSettings
     *       name: 'folders/my-folder/securityHealthAnalyticsSettings',
     *       // The list of fields to be updated.
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
    ): GaxiosPromise<Readable>;
    updateSecurityHealthAnalyticsSettings(
      params?: Params$Resource$Folders$Updatesecurityhealthanalyticssettings,
      options?: MethodOptions
    ): GaxiosPromise<Schema$SecurityHealthAnalyticsSettings>;
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
      | GaxiosPromise<Schema$SecurityHealthAnalyticsSettings>
      | GaxiosPromise<Readable> {
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
     * Update the VirtualMachineThreatDetectionSettings resource.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/securitycenter.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const securitycenter = google.securitycenter('v1beta2');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res =
     *     await securitycenter.folders.updateVirtualMachineThreatDetectionSettings({
     *       // The resource name of the VirtualMachineThreatDetectionSettings. Formats: * organizations/{organization\}/virtualMachineThreatDetectionSettings * folders/{folder\}/virtualMachineThreatDetectionSettings * projects/{project\}/virtualMachineThreatDetectionSettings
     *       name: 'folders/my-folder/virtualMachineThreatDetectionSettings',
     *       // The list of fields to be updated.
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
    ): GaxiosPromise<Readable>;
    updateVirtualMachineThreatDetectionSettings(
      params?: Params$Resource$Folders$Updatevirtualmachinethreatdetectionsettings,
      options?: MethodOptions
    ): GaxiosPromise<Schema$VirtualMachineThreatDetectionSettings>;
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
      | GaxiosPromise<Schema$VirtualMachineThreatDetectionSettings>
      | GaxiosPromise<Readable> {
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
     * Update the WebSecurityScannerSettings resource.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/securitycenter.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const securitycenter = google.securitycenter('v1beta2');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await securitycenter.folders.updateWebSecurityScannerSettings({
     *     // The resource name of the WebSecurityScannerSettings. Formats: * organizations/{organization\}/webSecurityScannerSettings * folders/{folder\}/webSecurityScannerSettings * projects/{project\}/webSecurityScannerSettings
     *     name: 'folders/my-folder/webSecurityScannerSettings',
     *     // The list of fields to be updated.
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
    ): GaxiosPromise<Readable>;
    updateWebSecurityScannerSettings(
      params?: Params$Resource$Folders$Updatewebsecurityscannersettings,
      options?: MethodOptions
    ): GaxiosPromise<Schema$WebSecurityScannerSettings>;
    updateWebSecurityScannerSettings(
      params: Params$Resource$Folders$Updatewebsecurityscannersettings,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    updateWebSecurityScannerSettings(
      params: Params$Resource$Folders$Updatewebsecurityscannersettings,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$WebSecurityScannerSettings>,
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
      | GaxiosPromise<Schema$WebSecurityScannerSettings>
      | GaxiosPromise<Readable> {
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

  export interface Params$Resource$Folders$Getcontainerthreatdetectionsettings
    extends StandardParameters {
    /**
     * Required. The name of the ContainerThreatDetectionSettings to retrieve. Formats: * organizations/{organization\}/containerThreatDetectionSettings * folders/{folder\}/containerThreatDetectionSettings * projects/{project\}/containerThreatDetectionSettings * projects/{project\}/locations/{location\}/clusters/{cluster\}/containerThreatDetectionSettings
     */
    name?: string;
  }
  export interface Params$Resource$Folders$Geteventthreatdetectionsettings
    extends StandardParameters {
    /**
     * Required. The name of the EventThreatDetectionSettings to retrieve. Formats: * organizations/{organization\}/eventThreatDetectionSettings * folders/{folder\}/eventThreatDetectionSettings * projects/{project\}/eventThreatDetectionSettings
     */
    name?: string;
  }
  export interface Params$Resource$Folders$Getsecurityhealthanalyticssettings
    extends StandardParameters {
    /**
     * Required. The name of the SecurityHealthAnalyticsSettings to retrieve. Formats: * organizations/{organization\}/securityHealthAnalyticsSettings * folders/{folder\}/securityHealthAnalyticsSettings * projects/{project\}/securityHealthAnalyticsSettings
     */
    name?: string;
  }
  export interface Params$Resource$Folders$Getvirtualmachinethreatdetectionsettings
    extends StandardParameters {
    /**
     * Required. The name of the VirtualMachineThreatDetectionSettings to retrieve. Formats: * organizations/{organization\}/virtualMachineThreatDetectionSettings * folders/{folder\}/virtualMachineThreatDetectionSettings * projects/{project\}/virtualMachineThreatDetectionSettings
     */
    name?: string;
  }
  export interface Params$Resource$Folders$Getwebsecurityscannersettings
    extends StandardParameters {
    /**
     * Required. The name of the WebSecurityScannerSettings to retrieve. Formats: * organizations/{organization\}/webSecurityScannerSettings * folders/{folder\}/webSecurityScannerSettings * projects/{project\}/webSecurityScannerSettings
     */
    name?: string;
  }
  export interface Params$Resource$Folders$Updatecontainerthreatdetectionsettings
    extends StandardParameters {
    /**
     * The resource name of the ContainerThreatDetectionSettings. Formats: * organizations/{organization\}/containerThreatDetectionSettings * folders/{folder\}/containerThreatDetectionSettings * projects/{project\}/containerThreatDetectionSettings * projects/{project\}/locations/{location\}/clusters/{cluster\}/containerThreatDetectionSettings
     */
    name?: string;
    /**
     * The list of fields to be updated.
     */
    updateMask?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$ContainerThreatDetectionSettings;
  }
  export interface Params$Resource$Folders$Updateeventthreatdetectionsettings
    extends StandardParameters {
    /**
     * The resource name of the EventThreatDetectionSettings. Formats: * organizations/{organization\}/eventThreatDetectionSettings * folders/{folder\}/eventThreatDetectionSettings * projects/{project\}/eventThreatDetectionSettings
     */
    name?: string;
    /**
     * The list of fields to be updated.
     */
    updateMask?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$EventThreatDetectionSettings;
  }
  export interface Params$Resource$Folders$Updatesecurityhealthanalyticssettings
    extends StandardParameters {
    /**
     * The resource name of the SecurityHealthAnalyticsSettings. Formats: * organizations/{organization\}/securityHealthAnalyticsSettings * folders/{folder\}/securityHealthAnalyticsSettings * projects/{project\}/securityHealthAnalyticsSettings
     */
    name?: string;
    /**
     * The list of fields to be updated.
     */
    updateMask?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$SecurityHealthAnalyticsSettings;
  }
  export interface Params$Resource$Folders$Updatevirtualmachinethreatdetectionsettings
    extends StandardParameters {
    /**
     * The resource name of the VirtualMachineThreatDetectionSettings. Formats: * organizations/{organization\}/virtualMachineThreatDetectionSettings * folders/{folder\}/virtualMachineThreatDetectionSettings * projects/{project\}/virtualMachineThreatDetectionSettings
     */
    name?: string;
    /**
     * The list of fields to be updated.
     */
    updateMask?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$VirtualMachineThreatDetectionSettings;
  }
  export interface Params$Resource$Folders$Updatewebsecurityscannersettings
    extends StandardParameters {
    /**
     * The resource name of the WebSecurityScannerSettings. Formats: * organizations/{organization\}/webSecurityScannerSettings * folders/{folder\}/webSecurityScannerSettings * projects/{project\}/webSecurityScannerSettings
     */
    name?: string;
    /**
     * The list of fields to be updated.
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
     * Calculates the effective ContainerThreatDetectionSettings based on its level in the resource hierarchy and its settings.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/securitycenter.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const securitycenter = google.securitycenter('v1beta2');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res =
     *     await securitycenter.folders.containerThreatDetectionSettings.calculate({
     *       // Required. The name of the ContainerThreatDetectionSettings to calculate. Formats: * organizations/{organization\}/containerThreatDetectionSettings * folders/{folder\}/containerThreatDetectionSettings * projects/{project\}/containerThreatDetectionSettings * projects/{project\}/locations/{location\}/clusters/{cluster\}/containerThreatDetectionSettings
     *       name: 'folders/my-folder/containerThreatDetectionSettings',
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
    ): GaxiosPromise<Readable>;
    calculate(
      params?: Params$Resource$Folders$Containerthreatdetectionsettings$Calculate,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ContainerThreatDetectionSettings>;
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
      | GaxiosPromise<Schema$ContainerThreatDetectionSettings>
      | GaxiosPromise<Readable> {
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

  export interface Params$Resource$Folders$Containerthreatdetectionsettings$Calculate
    extends StandardParameters {
    /**
     * Required. The name of the ContainerThreatDetectionSettings to calculate. Formats: * organizations/{organization\}/containerThreatDetectionSettings * folders/{folder\}/containerThreatDetectionSettings * projects/{project\}/containerThreatDetectionSettings * projects/{project\}/locations/{location\}/clusters/{cluster\}/containerThreatDetectionSettings
     */
    name?: string;
  }

  export class Resource$Folders$Eventthreatdetectionsettings {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Calculates the effective EventThreatDetectionSettings based on its level in the resource hierarchy and its settings.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/securitycenter.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const securitycenter = google.securitycenter('v1beta2');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res =
     *     await securitycenter.folders.eventThreatDetectionSettings.calculate({
     *       // Required. The name of the EventThreatDetectionSettings to calculate. Formats: * organizations/{organization\}/eventThreatDetectionSettings * folders/{folder\}/eventThreatDetectionSettings * projects/{project\}/eventThreatDetectionSettings
     *       name: 'folders/my-folder/eventThreatDetectionSettings',
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
    ): GaxiosPromise<Readable>;
    calculate(
      params?: Params$Resource$Folders$Eventthreatdetectionsettings$Calculate,
      options?: MethodOptions
    ): GaxiosPromise<Schema$EventThreatDetectionSettings>;
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
      | GaxiosPromise<Schema$EventThreatDetectionSettings>
      | GaxiosPromise<Readable> {
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

  export interface Params$Resource$Folders$Eventthreatdetectionsettings$Calculate
    extends StandardParameters {
    /**
     * Required. The name of the EventThreatDetectionSettings to calculate. Formats: * organizations/{organization\}/eventThreatDetectionSettings * folders/{folder\}/eventThreatDetectionSettings * projects/{project\}/eventThreatDetectionSettings
     */
    name?: string;
  }

  export class Resource$Folders$Securityhealthanalyticssettings {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Calculates the effective SecurityHealthAnalyticsSettings based on its level in the resource hierarchy and its settings.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/securitycenter.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const securitycenter = google.securitycenter('v1beta2');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res =
     *     await securitycenter.folders.securityHealthAnalyticsSettings.calculate({
     *       // Required. The name of the SecurityHealthAnalyticsSettings to calculate. Formats: * organizations/{organization\}/securityHealthAnalyticsSettings * folders/{folder\}/securityHealthAnalyticsSettings * projects/{project\}/securityHealthAnalyticsSettings
     *       name: 'folders/my-folder/securityHealthAnalyticsSettings',
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
    ): GaxiosPromise<Readable>;
    calculate(
      params?: Params$Resource$Folders$Securityhealthanalyticssettings$Calculate,
      options?: MethodOptions
    ): GaxiosPromise<Schema$SecurityHealthAnalyticsSettings>;
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
      | GaxiosPromise<Schema$SecurityHealthAnalyticsSettings>
      | GaxiosPromise<Readable> {
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

  export interface Params$Resource$Folders$Securityhealthanalyticssettings$Calculate
    extends StandardParameters {
    /**
     * Required. The name of the SecurityHealthAnalyticsSettings to calculate. Formats: * organizations/{organization\}/securityHealthAnalyticsSettings * folders/{folder\}/securityHealthAnalyticsSettings * projects/{project\}/securityHealthAnalyticsSettings
     */
    name?: string;
  }

  export class Resource$Folders$Virtualmachinethreatdetectionsettings {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Calculates the effective VirtualMachineThreatDetectionSettings based on its level in the resource hierarchy and its settings.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/securitycenter.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const securitycenter = google.securitycenter('v1beta2');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
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
     *         // Required. The name of the VirtualMachineThreatDetectionSettings to calculate. Formats: * organizations/{organization\}/virtualMachineThreatDetectionSettings * folders/{folder\}/virtualMachineThreatDetectionSettings * projects/{project\}/virtualMachineThreatDetectionSettings
     *         name: 'folders/my-folder/virtualMachineThreatDetectionSettings',
     *       }
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
    ): GaxiosPromise<Readable>;
    calculate(
      params?: Params$Resource$Folders$Virtualmachinethreatdetectionsettings$Calculate,
      options?: MethodOptions
    ): GaxiosPromise<Schema$VirtualMachineThreatDetectionSettings>;
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
      | GaxiosPromise<Schema$VirtualMachineThreatDetectionSettings>
      | GaxiosPromise<Readable> {
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

  export interface Params$Resource$Folders$Virtualmachinethreatdetectionsettings$Calculate
    extends StandardParameters {
    /**
     * Required. The name of the VirtualMachineThreatDetectionSettings to calculate. Formats: * organizations/{organization\}/virtualMachineThreatDetectionSettings * folders/{folder\}/virtualMachineThreatDetectionSettings * projects/{project\}/virtualMachineThreatDetectionSettings
     */
    name?: string;
  }

  export class Resource$Folders$Websecurityscannersettings {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Calculates the effective WebSecurityScannerSettings based on its level in the resource hierarchy and its settings.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/securitycenter.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const securitycenter = google.securitycenter('v1beta2');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await securitycenter.folders.webSecurityScannerSettings.calculate(
     *     {
     *       // Required. The name of the WebSecurityScannerSettings to calculate. Formats: * organizations/{organization\}/webSecurityScannerSettings * folders/{folder\}/webSecurityScannerSettings * projects/{project\}/webSecurityScannerSettings
     *       name: 'folders/my-folder/webSecurityScannerSettings',
     *     }
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
    ): GaxiosPromise<Readable>;
    calculate(
      params?: Params$Resource$Folders$Websecurityscannersettings$Calculate,
      options?: MethodOptions
    ): GaxiosPromise<Schema$WebSecurityScannerSettings>;
    calculate(
      params: Params$Resource$Folders$Websecurityscannersettings$Calculate,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    calculate(
      params: Params$Resource$Folders$Websecurityscannersettings$Calculate,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$WebSecurityScannerSettings>,
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
      | GaxiosPromise<Schema$WebSecurityScannerSettings>
      | GaxiosPromise<Readable> {
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

  export interface Params$Resource$Folders$Websecurityscannersettings$Calculate
    extends StandardParameters {
    /**
     * Required. The name of the WebSecurityScannerSettings to calculate. Formats: * organizations/{organization\}/webSecurityScannerSettings * folders/{folder\}/webSecurityScannerSettings * projects/{project\}/webSecurityScannerSettings
     */
    name?: string;
  }

  export class Resource$Organizations {
    context: APIRequestContext;
    containerThreatDetectionSettings: Resource$Organizations$Containerthreatdetectionsettings;
    eventThreatDetectionSettings: Resource$Organizations$Eventthreatdetectionsettings;
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
     * Get the ContainerThreatDetectionSettings resource.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/securitycenter.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const securitycenter = google.securitycenter('v1beta2');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res =
     *     await securitycenter.organizations.getContainerThreatDetectionSettings({
     *       // Required. The name of the ContainerThreatDetectionSettings to retrieve. Formats: * organizations/{organization\}/containerThreatDetectionSettings * folders/{folder\}/containerThreatDetectionSettings * projects/{project\}/containerThreatDetectionSettings * projects/{project\}/locations/{location\}/clusters/{cluster\}/containerThreatDetectionSettings
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
    ): GaxiosPromise<Readable>;
    getContainerThreatDetectionSettings(
      params?: Params$Resource$Organizations$Getcontainerthreatdetectionsettings,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ContainerThreatDetectionSettings>;
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
      | GaxiosPromise<Schema$ContainerThreatDetectionSettings>
      | GaxiosPromise<Readable> {
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
     * Get the EventThreatDetectionSettings resource.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/securitycenter.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const securitycenter = google.securitycenter('v1beta2');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res =
     *     await securitycenter.organizations.getEventThreatDetectionSettings({
     *       // Required. The name of the EventThreatDetectionSettings to retrieve. Formats: * organizations/{organization\}/eventThreatDetectionSettings * folders/{folder\}/eventThreatDetectionSettings * projects/{project\}/eventThreatDetectionSettings
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
    ): GaxiosPromise<Readable>;
    getEventThreatDetectionSettings(
      params?: Params$Resource$Organizations$Geteventthreatdetectionsettings,
      options?: MethodOptions
    ): GaxiosPromise<Schema$EventThreatDetectionSettings>;
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
      | GaxiosPromise<Schema$EventThreatDetectionSettings>
      | GaxiosPromise<Readable> {
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
     * Get the SecurityCenterSettings resource.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/securitycenter.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const securitycenter = google.securitycenter('v1beta2');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await securitycenter.organizations.getSecurityCenterSettings({
     *     // Required. The name of the SecurityCenterSettings to retrieve. Format: organizations/{organization\}/securityCenterSettings
     *     name: 'organizations/my-organization/securityCenterSettings',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "logSinkProject": "my_logSinkProject",
     *   //   "name": "my_name",
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
    ): GaxiosPromise<Readable>;
    getSecurityCenterSettings(
      params?: Params$Resource$Organizations$Getsecuritycentersettings,
      options?: MethodOptions
    ): GaxiosPromise<Schema$SecurityCenterSettings>;
    getSecurityCenterSettings(
      params: Params$Resource$Organizations$Getsecuritycentersettings,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    getSecurityCenterSettings(
      params: Params$Resource$Organizations$Getsecuritycentersettings,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$SecurityCenterSettings>,
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
      | GaxiosPromise<Schema$SecurityCenterSettings>
      | GaxiosPromise<Readable> {
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
     * Get the SecurityHealthAnalyticsSettings resource.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/securitycenter.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const securitycenter = google.securitycenter('v1beta2');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res =
     *     await securitycenter.organizations.getSecurityHealthAnalyticsSettings({
     *       // Required. The name of the SecurityHealthAnalyticsSettings to retrieve. Formats: * organizations/{organization\}/securityHealthAnalyticsSettings * folders/{folder\}/securityHealthAnalyticsSettings * projects/{project\}/securityHealthAnalyticsSettings
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
    ): GaxiosPromise<Readable>;
    getSecurityHealthAnalyticsSettings(
      params?: Params$Resource$Organizations$Getsecurityhealthanalyticssettings,
      options?: MethodOptions
    ): GaxiosPromise<Schema$SecurityHealthAnalyticsSettings>;
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
      | GaxiosPromise<Schema$SecurityHealthAnalyticsSettings>
      | GaxiosPromise<Readable> {
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
     * Get the Subscription resource.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/securitycenter.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const securitycenter = google.securitycenter('v1beta2');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await securitycenter.organizations.getSubscription({
     *     // Required. The name of the subscription to retrieve. Format: organizations/{organization\}/subscription
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
    ): GaxiosPromise<Readable>;
    getSubscription(
      params?: Params$Resource$Organizations$Getsubscription,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Subscription>;
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
    ): void | GaxiosPromise<Schema$Subscription> | GaxiosPromise<Readable> {
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
     * Get the VirtualMachineThreatDetectionSettings resource.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/securitycenter.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const securitycenter = google.securitycenter('v1beta2');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
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
     *         // Required. The name of the VirtualMachineThreatDetectionSettings to retrieve. Formats: * organizations/{organization\}/virtualMachineThreatDetectionSettings * folders/{folder\}/virtualMachineThreatDetectionSettings * projects/{project\}/virtualMachineThreatDetectionSettings
     *         name: 'organizations/my-organization/virtualMachineThreatDetectionSettings',
     *       }
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
    ): GaxiosPromise<Readable>;
    getVirtualMachineThreatDetectionSettings(
      params?: Params$Resource$Organizations$Getvirtualmachinethreatdetectionsettings,
      options?: MethodOptions
    ): GaxiosPromise<Schema$VirtualMachineThreatDetectionSettings>;
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
      | GaxiosPromise<Schema$VirtualMachineThreatDetectionSettings>
      | GaxiosPromise<Readable> {
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
     * Get the WebSecurityScannerSettings resource.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/securitycenter.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const securitycenter = google.securitycenter('v1beta2');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await securitycenter.organizations.getWebSecurityScannerSettings({
     *     // Required. The name of the WebSecurityScannerSettings to retrieve. Formats: * organizations/{organization\}/webSecurityScannerSettings * folders/{folder\}/webSecurityScannerSettings * projects/{project\}/webSecurityScannerSettings
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
    ): GaxiosPromise<Readable>;
    getWebSecurityScannerSettings(
      params?: Params$Resource$Organizations$Getwebsecurityscannersettings,
      options?: MethodOptions
    ): GaxiosPromise<Schema$WebSecurityScannerSettings>;
    getWebSecurityScannerSettings(
      params: Params$Resource$Organizations$Getwebsecurityscannersettings,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    getWebSecurityScannerSettings(
      params: Params$Resource$Organizations$Getwebsecurityscannersettings,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$WebSecurityScannerSettings>,
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
      | GaxiosPromise<Schema$WebSecurityScannerSettings>
      | GaxiosPromise<Readable> {
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
     * Update the ContainerThreatDetectionSettings resource.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/securitycenter.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const securitycenter = google.securitycenter('v1beta2');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res =
     *     await securitycenter.organizations.updateContainerThreatDetectionSettings({
     *       // The resource name of the ContainerThreatDetectionSettings. Formats: * organizations/{organization\}/containerThreatDetectionSettings * folders/{folder\}/containerThreatDetectionSettings * projects/{project\}/containerThreatDetectionSettings * projects/{project\}/locations/{location\}/clusters/{cluster\}/containerThreatDetectionSettings
     *       name: 'organizations/my-organization/containerThreatDetectionSettings',
     *       // The list of fields to be updated.
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
    ): GaxiosPromise<Readable>;
    updateContainerThreatDetectionSettings(
      params?: Params$Resource$Organizations$Updatecontainerthreatdetectionsettings,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ContainerThreatDetectionSettings>;
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
      | GaxiosPromise<Schema$ContainerThreatDetectionSettings>
      | GaxiosPromise<Readable> {
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
     * Update the EventThreatDetectionSettings resource.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/securitycenter.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const securitycenter = google.securitycenter('v1beta2');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res =
     *     await securitycenter.organizations.updateEventThreatDetectionSettings({
     *       // The resource name of the EventThreatDetectionSettings. Formats: * organizations/{organization\}/eventThreatDetectionSettings * folders/{folder\}/eventThreatDetectionSettings * projects/{project\}/eventThreatDetectionSettings
     *       name: 'organizations/my-organization/eventThreatDetectionSettings',
     *       // The list of fields to be updated.
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
    ): GaxiosPromise<Readable>;
    updateEventThreatDetectionSettings(
      params?: Params$Resource$Organizations$Updateeventthreatdetectionsettings,
      options?: MethodOptions
    ): GaxiosPromise<Schema$EventThreatDetectionSettings>;
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
      | GaxiosPromise<Schema$EventThreatDetectionSettings>
      | GaxiosPromise<Readable> {
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
     * Update the SecurityHealthAnalyticsSettings resource.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/securitycenter.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const securitycenter = google.securitycenter('v1beta2');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res =
     *     await securitycenter.organizations.updateSecurityHealthAnalyticsSettings({
     *       // The resource name of the SecurityHealthAnalyticsSettings. Formats: * organizations/{organization\}/securityHealthAnalyticsSettings * folders/{folder\}/securityHealthAnalyticsSettings * projects/{project\}/securityHealthAnalyticsSettings
     *       name: 'organizations/my-organization/securityHealthAnalyticsSettings',
     *       // The list of fields to be updated.
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
    ): GaxiosPromise<Readable>;
    updateSecurityHealthAnalyticsSettings(
      params?: Params$Resource$Organizations$Updatesecurityhealthanalyticssettings,
      options?: MethodOptions
    ): GaxiosPromise<Schema$SecurityHealthAnalyticsSettings>;
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
      | GaxiosPromise<Schema$SecurityHealthAnalyticsSettings>
      | GaxiosPromise<Readable> {
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
     * Update the VirtualMachineThreatDetectionSettings resource.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/securitycenter.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const securitycenter = google.securitycenter('v1beta2');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
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
     *         // The resource name of the VirtualMachineThreatDetectionSettings. Formats: * organizations/{organization\}/virtualMachineThreatDetectionSettings * folders/{folder\}/virtualMachineThreatDetectionSettings * projects/{project\}/virtualMachineThreatDetectionSettings
     *         name: 'organizations/my-organization/virtualMachineThreatDetectionSettings',
     *         // The list of fields to be updated.
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
     *       }
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
    ): GaxiosPromise<Readable>;
    updateVirtualMachineThreatDetectionSettings(
      params?: Params$Resource$Organizations$Updatevirtualmachinethreatdetectionsettings,
      options?: MethodOptions
    ): GaxiosPromise<Schema$VirtualMachineThreatDetectionSettings>;
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
      | GaxiosPromise<Schema$VirtualMachineThreatDetectionSettings>
      | GaxiosPromise<Readable> {
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
     * Update the WebSecurityScannerSettings resource.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/securitycenter.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const securitycenter = google.securitycenter('v1beta2');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res =
     *     await securitycenter.organizations.updateWebSecurityScannerSettings({
     *       // The resource name of the WebSecurityScannerSettings. Formats: * organizations/{organization\}/webSecurityScannerSettings * folders/{folder\}/webSecurityScannerSettings * projects/{project\}/webSecurityScannerSettings
     *       name: 'organizations/my-organization/webSecurityScannerSettings',
     *       // The list of fields to be updated.
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
    ): GaxiosPromise<Readable>;
    updateWebSecurityScannerSettings(
      params?: Params$Resource$Organizations$Updatewebsecurityscannersettings,
      options?: MethodOptions
    ): GaxiosPromise<Schema$WebSecurityScannerSettings>;
    updateWebSecurityScannerSettings(
      params: Params$Resource$Organizations$Updatewebsecurityscannersettings,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    updateWebSecurityScannerSettings(
      params: Params$Resource$Organizations$Updatewebsecurityscannersettings,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$WebSecurityScannerSettings>,
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
      | GaxiosPromise<Schema$WebSecurityScannerSettings>
      | GaxiosPromise<Readable> {
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

  export interface Params$Resource$Organizations$Getcontainerthreatdetectionsettings
    extends StandardParameters {
    /**
     * Required. The name of the ContainerThreatDetectionSettings to retrieve. Formats: * organizations/{organization\}/containerThreatDetectionSettings * folders/{folder\}/containerThreatDetectionSettings * projects/{project\}/containerThreatDetectionSettings * projects/{project\}/locations/{location\}/clusters/{cluster\}/containerThreatDetectionSettings
     */
    name?: string;
  }
  export interface Params$Resource$Organizations$Geteventthreatdetectionsettings
    extends StandardParameters {
    /**
     * Required. The name of the EventThreatDetectionSettings to retrieve. Formats: * organizations/{organization\}/eventThreatDetectionSettings * folders/{folder\}/eventThreatDetectionSettings * projects/{project\}/eventThreatDetectionSettings
     */
    name?: string;
  }
  export interface Params$Resource$Organizations$Getsecuritycentersettings
    extends StandardParameters {
    /**
     * Required. The name of the SecurityCenterSettings to retrieve. Format: organizations/{organization\}/securityCenterSettings
     */
    name?: string;
  }
  export interface Params$Resource$Organizations$Getsecurityhealthanalyticssettings
    extends StandardParameters {
    /**
     * Required. The name of the SecurityHealthAnalyticsSettings to retrieve. Formats: * organizations/{organization\}/securityHealthAnalyticsSettings * folders/{folder\}/securityHealthAnalyticsSettings * projects/{project\}/securityHealthAnalyticsSettings
     */
    name?: string;
  }
  export interface Params$Resource$Organizations$Getsubscription
    extends StandardParameters {
    /**
     * Required. The name of the subscription to retrieve. Format: organizations/{organization\}/subscription
     */
    name?: string;
  }
  export interface Params$Resource$Organizations$Getvirtualmachinethreatdetectionsettings
    extends StandardParameters {
    /**
     * Required. The name of the VirtualMachineThreatDetectionSettings to retrieve. Formats: * organizations/{organization\}/virtualMachineThreatDetectionSettings * folders/{folder\}/virtualMachineThreatDetectionSettings * projects/{project\}/virtualMachineThreatDetectionSettings
     */
    name?: string;
  }
  export interface Params$Resource$Organizations$Getwebsecurityscannersettings
    extends StandardParameters {
    /**
     * Required. The name of the WebSecurityScannerSettings to retrieve. Formats: * organizations/{organization\}/webSecurityScannerSettings * folders/{folder\}/webSecurityScannerSettings * projects/{project\}/webSecurityScannerSettings
     */
    name?: string;
  }
  export interface Params$Resource$Organizations$Updatecontainerthreatdetectionsettings
    extends StandardParameters {
    /**
     * The resource name of the ContainerThreatDetectionSettings. Formats: * organizations/{organization\}/containerThreatDetectionSettings * folders/{folder\}/containerThreatDetectionSettings * projects/{project\}/containerThreatDetectionSettings * projects/{project\}/locations/{location\}/clusters/{cluster\}/containerThreatDetectionSettings
     */
    name?: string;
    /**
     * The list of fields to be updated.
     */
    updateMask?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$ContainerThreatDetectionSettings;
  }
  export interface Params$Resource$Organizations$Updateeventthreatdetectionsettings
    extends StandardParameters {
    /**
     * The resource name of the EventThreatDetectionSettings. Formats: * organizations/{organization\}/eventThreatDetectionSettings * folders/{folder\}/eventThreatDetectionSettings * projects/{project\}/eventThreatDetectionSettings
     */
    name?: string;
    /**
     * The list of fields to be updated.
     */
    updateMask?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$EventThreatDetectionSettings;
  }
  export interface Params$Resource$Organizations$Updatesecurityhealthanalyticssettings
    extends StandardParameters {
    /**
     * The resource name of the SecurityHealthAnalyticsSettings. Formats: * organizations/{organization\}/securityHealthAnalyticsSettings * folders/{folder\}/securityHealthAnalyticsSettings * projects/{project\}/securityHealthAnalyticsSettings
     */
    name?: string;
    /**
     * The list of fields to be updated.
     */
    updateMask?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$SecurityHealthAnalyticsSettings;
  }
  export interface Params$Resource$Organizations$Updatevirtualmachinethreatdetectionsettings
    extends StandardParameters {
    /**
     * The resource name of the VirtualMachineThreatDetectionSettings. Formats: * organizations/{organization\}/virtualMachineThreatDetectionSettings * folders/{folder\}/virtualMachineThreatDetectionSettings * projects/{project\}/virtualMachineThreatDetectionSettings
     */
    name?: string;
    /**
     * The list of fields to be updated.
     */
    updateMask?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$VirtualMachineThreatDetectionSettings;
  }
  export interface Params$Resource$Organizations$Updatewebsecurityscannersettings
    extends StandardParameters {
    /**
     * The resource name of the WebSecurityScannerSettings. Formats: * organizations/{organization\}/webSecurityScannerSettings * folders/{folder\}/webSecurityScannerSettings * projects/{project\}/webSecurityScannerSettings
     */
    name?: string;
    /**
     * The list of fields to be updated.
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
     * Calculates the effective ContainerThreatDetectionSettings based on its level in the resource hierarchy and its settings.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/securitycenter.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const securitycenter = google.securitycenter('v1beta2');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
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
     *         // Required. The name of the ContainerThreatDetectionSettings to calculate. Formats: * organizations/{organization\}/containerThreatDetectionSettings * folders/{folder\}/containerThreatDetectionSettings * projects/{project\}/containerThreatDetectionSettings * projects/{project\}/locations/{location\}/clusters/{cluster\}/containerThreatDetectionSettings
     *         name: 'organizations/my-organization/containerThreatDetectionSettings',
     *       }
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
    ): GaxiosPromise<Readable>;
    calculate(
      params?: Params$Resource$Organizations$Containerthreatdetectionsettings$Calculate,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ContainerThreatDetectionSettings>;
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
      | GaxiosPromise<Schema$ContainerThreatDetectionSettings>
      | GaxiosPromise<Readable> {
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

  export interface Params$Resource$Organizations$Containerthreatdetectionsettings$Calculate
    extends StandardParameters {
    /**
     * Required. The name of the ContainerThreatDetectionSettings to calculate. Formats: * organizations/{organization\}/containerThreatDetectionSettings * folders/{folder\}/containerThreatDetectionSettings * projects/{project\}/containerThreatDetectionSettings * projects/{project\}/locations/{location\}/clusters/{cluster\}/containerThreatDetectionSettings
     */
    name?: string;
  }

  export class Resource$Organizations$Eventthreatdetectionsettings {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Calculates the effective EventThreatDetectionSettings based on its level in the resource hierarchy and its settings.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/securitycenter.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const securitycenter = google.securitycenter('v1beta2');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res =
     *     await securitycenter.organizations.eventThreatDetectionSettings.calculate({
     *       // Required. The name of the EventThreatDetectionSettings to calculate. Formats: * organizations/{organization\}/eventThreatDetectionSettings * folders/{folder\}/eventThreatDetectionSettings * projects/{project\}/eventThreatDetectionSettings
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
    calculate(
      params: Params$Resource$Organizations$Eventthreatdetectionsettings$Calculate,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    calculate(
      params?: Params$Resource$Organizations$Eventthreatdetectionsettings$Calculate,
      options?: MethodOptions
    ): GaxiosPromise<Schema$EventThreatDetectionSettings>;
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
      | GaxiosPromise<Schema$EventThreatDetectionSettings>
      | GaxiosPromise<Readable> {
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

  export interface Params$Resource$Organizations$Eventthreatdetectionsettings$Calculate
    extends StandardParameters {
    /**
     * Required. The name of the EventThreatDetectionSettings to calculate. Formats: * organizations/{organization\}/eventThreatDetectionSettings * folders/{folder\}/eventThreatDetectionSettings * projects/{project\}/eventThreatDetectionSettings
     */
    name?: string;
  }

  export class Resource$Organizations$Securityhealthanalyticssettings {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Calculates the effective SecurityHealthAnalyticsSettings based on its level in the resource hierarchy and its settings.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/securitycenter.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const securitycenter = google.securitycenter('v1beta2');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
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
     *         // Required. The name of the SecurityHealthAnalyticsSettings to calculate. Formats: * organizations/{organization\}/securityHealthAnalyticsSettings * folders/{folder\}/securityHealthAnalyticsSettings * projects/{project\}/securityHealthAnalyticsSettings
     *         name: 'organizations/my-organization/securityHealthAnalyticsSettings',
     *       }
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
    ): GaxiosPromise<Readable>;
    calculate(
      params?: Params$Resource$Organizations$Securityhealthanalyticssettings$Calculate,
      options?: MethodOptions
    ): GaxiosPromise<Schema$SecurityHealthAnalyticsSettings>;
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
      | GaxiosPromise<Schema$SecurityHealthAnalyticsSettings>
      | GaxiosPromise<Readable> {
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

  export interface Params$Resource$Organizations$Securityhealthanalyticssettings$Calculate
    extends StandardParameters {
    /**
     * Required. The name of the SecurityHealthAnalyticsSettings to calculate. Formats: * organizations/{organization\}/securityHealthAnalyticsSettings * folders/{folder\}/securityHealthAnalyticsSettings * projects/{project\}/securityHealthAnalyticsSettings
     */
    name?: string;
  }

  export class Resource$Organizations$Virtualmachinethreatdetectionsettings {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Calculates the effective VirtualMachineThreatDetectionSettings based on its level in the resource hierarchy and its settings.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/securitycenter.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const securitycenter = google.securitycenter('v1beta2');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
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
     *         // Required. The name of the VirtualMachineThreatDetectionSettings to calculate. Formats: * organizations/{organization\}/virtualMachineThreatDetectionSettings * folders/{folder\}/virtualMachineThreatDetectionSettings * projects/{project\}/virtualMachineThreatDetectionSettings
     *         name: 'organizations/my-organization/virtualMachineThreatDetectionSettings',
     *       }
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
    ): GaxiosPromise<Readable>;
    calculate(
      params?: Params$Resource$Organizations$Virtualmachinethreatdetectionsettings$Calculate,
      options?: MethodOptions
    ): GaxiosPromise<Schema$VirtualMachineThreatDetectionSettings>;
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
      | GaxiosPromise<Schema$VirtualMachineThreatDetectionSettings>
      | GaxiosPromise<Readable> {
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

  export interface Params$Resource$Organizations$Virtualmachinethreatdetectionsettings$Calculate
    extends StandardParameters {
    /**
     * Required. The name of the VirtualMachineThreatDetectionSettings to calculate. Formats: * organizations/{organization\}/virtualMachineThreatDetectionSettings * folders/{folder\}/virtualMachineThreatDetectionSettings * projects/{project\}/virtualMachineThreatDetectionSettings
     */
    name?: string;
  }

  export class Resource$Organizations$Websecurityscannersettings {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Calculates the effective WebSecurityScannerSettings based on its level in the resource hierarchy and its settings.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/securitycenter.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const securitycenter = google.securitycenter('v1beta2');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res =
     *     await securitycenter.organizations.webSecurityScannerSettings.calculate({
     *       // Required. The name of the WebSecurityScannerSettings to calculate. Formats: * organizations/{organization\}/webSecurityScannerSettings * folders/{folder\}/webSecurityScannerSettings * projects/{project\}/webSecurityScannerSettings
     *       name: 'organizations/my-organization/webSecurityScannerSettings',
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
    ): GaxiosPromise<Readable>;
    calculate(
      params?: Params$Resource$Organizations$Websecurityscannersettings$Calculate,
      options?: MethodOptions
    ): GaxiosPromise<Schema$WebSecurityScannerSettings>;
    calculate(
      params: Params$Resource$Organizations$Websecurityscannersettings$Calculate,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    calculate(
      params: Params$Resource$Organizations$Websecurityscannersettings$Calculate,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$WebSecurityScannerSettings>,
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
      | GaxiosPromise<Schema$WebSecurityScannerSettings>
      | GaxiosPromise<Readable> {
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

  export interface Params$Resource$Organizations$Websecurityscannersettings$Calculate
    extends StandardParameters {
    /**
     * Required. The name of the WebSecurityScannerSettings to calculate. Formats: * organizations/{organization\}/webSecurityScannerSettings * folders/{folder\}/webSecurityScannerSettings * projects/{project\}/webSecurityScannerSettings
     */
    name?: string;
  }

  export class Resource$Projects {
    context: APIRequestContext;
    containerThreatDetectionSettings: Resource$Projects$Containerthreatdetectionsettings;
    eventThreatDetectionSettings: Resource$Projects$Eventthreatdetectionsettings;
    locations: Resource$Projects$Locations;
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
     * Get the ContainerThreatDetectionSettings resource.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/securitycenter.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const securitycenter = google.securitycenter('v1beta2');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await securitycenter.projects.getContainerThreatDetectionSettings(
     *     {
     *       // Required. The name of the ContainerThreatDetectionSettings to retrieve. Formats: * organizations/{organization\}/containerThreatDetectionSettings * folders/{folder\}/containerThreatDetectionSettings * projects/{project\}/containerThreatDetectionSettings * projects/{project\}/locations/{location\}/clusters/{cluster\}/containerThreatDetectionSettings
     *       name: 'projects/my-project/containerThreatDetectionSettings',
     *     }
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
    ): GaxiosPromise<Readable>;
    getContainerThreatDetectionSettings(
      params?: Params$Resource$Projects$Getcontainerthreatdetectionsettings,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ContainerThreatDetectionSettings>;
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
      | GaxiosPromise<Schema$ContainerThreatDetectionSettings>
      | GaxiosPromise<Readable> {
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
     * Get the EventThreatDetectionSettings resource.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/securitycenter.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const securitycenter = google.securitycenter('v1beta2');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await securitycenter.projects.getEventThreatDetectionSettings({
     *     // Required. The name of the EventThreatDetectionSettings to retrieve. Formats: * organizations/{organization\}/eventThreatDetectionSettings * folders/{folder\}/eventThreatDetectionSettings * projects/{project\}/eventThreatDetectionSettings
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
    ): GaxiosPromise<Readable>;
    getEventThreatDetectionSettings(
      params?: Params$Resource$Projects$Geteventthreatdetectionsettings,
      options?: MethodOptions
    ): GaxiosPromise<Schema$EventThreatDetectionSettings>;
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
      | GaxiosPromise<Schema$EventThreatDetectionSettings>
      | GaxiosPromise<Readable> {
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
     * Get the SecurityHealthAnalyticsSettings resource.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/securitycenter.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const securitycenter = google.securitycenter('v1beta2');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await securitycenter.projects.getSecurityHealthAnalyticsSettings({
     *     // Required. The name of the SecurityHealthAnalyticsSettings to retrieve. Formats: * organizations/{organization\}/securityHealthAnalyticsSettings * folders/{folder\}/securityHealthAnalyticsSettings * projects/{project\}/securityHealthAnalyticsSettings
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
    ): GaxiosPromise<Readable>;
    getSecurityHealthAnalyticsSettings(
      params?: Params$Resource$Projects$Getsecurityhealthanalyticssettings,
      options?: MethodOptions
    ): GaxiosPromise<Schema$SecurityHealthAnalyticsSettings>;
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
      | GaxiosPromise<Schema$SecurityHealthAnalyticsSettings>
      | GaxiosPromise<Readable> {
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
     * Get the VirtualMachineThreatDetectionSettings resource.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/securitycenter.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const securitycenter = google.securitycenter('v1beta2');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res =
     *     await securitycenter.projects.getVirtualMachineThreatDetectionSettings({
     *       // Required. The name of the VirtualMachineThreatDetectionSettings to retrieve. Formats: * organizations/{organization\}/virtualMachineThreatDetectionSettings * folders/{folder\}/virtualMachineThreatDetectionSettings * projects/{project\}/virtualMachineThreatDetectionSettings
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
    ): GaxiosPromise<Readable>;
    getVirtualMachineThreatDetectionSettings(
      params?: Params$Resource$Projects$Getvirtualmachinethreatdetectionsettings,
      options?: MethodOptions
    ): GaxiosPromise<Schema$VirtualMachineThreatDetectionSettings>;
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
      | GaxiosPromise<Schema$VirtualMachineThreatDetectionSettings>
      | GaxiosPromise<Readable> {
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
     * Get the WebSecurityScannerSettings resource.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/securitycenter.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const securitycenter = google.securitycenter('v1beta2');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await securitycenter.projects.getWebSecurityScannerSettings({
     *     // Required. The name of the WebSecurityScannerSettings to retrieve. Formats: * organizations/{organization\}/webSecurityScannerSettings * folders/{folder\}/webSecurityScannerSettings * projects/{project\}/webSecurityScannerSettings
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
    ): GaxiosPromise<Readable>;
    getWebSecurityScannerSettings(
      params?: Params$Resource$Projects$Getwebsecurityscannersettings,
      options?: MethodOptions
    ): GaxiosPromise<Schema$WebSecurityScannerSettings>;
    getWebSecurityScannerSettings(
      params: Params$Resource$Projects$Getwebsecurityscannersettings,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    getWebSecurityScannerSettings(
      params: Params$Resource$Projects$Getwebsecurityscannersettings,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$WebSecurityScannerSettings>,
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
      | GaxiosPromise<Schema$WebSecurityScannerSettings>
      | GaxiosPromise<Readable> {
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
     * Update the ContainerThreatDetectionSettings resource.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/securitycenter.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const securitycenter = google.securitycenter('v1beta2');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res =
     *     await securitycenter.projects.updateContainerThreatDetectionSettings({
     *       // The resource name of the ContainerThreatDetectionSettings. Formats: * organizations/{organization\}/containerThreatDetectionSettings * folders/{folder\}/containerThreatDetectionSettings * projects/{project\}/containerThreatDetectionSettings * projects/{project\}/locations/{location\}/clusters/{cluster\}/containerThreatDetectionSettings
     *       name: 'projects/my-project/containerThreatDetectionSettings',
     *       // The list of fields to be updated.
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
    ): GaxiosPromise<Readable>;
    updateContainerThreatDetectionSettings(
      params?: Params$Resource$Projects$Updatecontainerthreatdetectionsettings,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ContainerThreatDetectionSettings>;
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
      | GaxiosPromise<Schema$ContainerThreatDetectionSettings>
      | GaxiosPromise<Readable> {
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
     * Update the EventThreatDetectionSettings resource.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/securitycenter.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const securitycenter = google.securitycenter('v1beta2');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await securitycenter.projects.updateEventThreatDetectionSettings({
     *     // The resource name of the EventThreatDetectionSettings. Formats: * organizations/{organization\}/eventThreatDetectionSettings * folders/{folder\}/eventThreatDetectionSettings * projects/{project\}/eventThreatDetectionSettings
     *     name: 'projects/my-project/eventThreatDetectionSettings',
     *     // The list of fields to be updated.
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
    ): GaxiosPromise<Readable>;
    updateEventThreatDetectionSettings(
      params?: Params$Resource$Projects$Updateeventthreatdetectionsettings,
      options?: MethodOptions
    ): GaxiosPromise<Schema$EventThreatDetectionSettings>;
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
      | GaxiosPromise<Schema$EventThreatDetectionSettings>
      | GaxiosPromise<Readable> {
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
     * Update the SecurityHealthAnalyticsSettings resource.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/securitycenter.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const securitycenter = google.securitycenter('v1beta2');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res =
     *     await securitycenter.projects.updateSecurityHealthAnalyticsSettings({
     *       // The resource name of the SecurityHealthAnalyticsSettings. Formats: * organizations/{organization\}/securityHealthAnalyticsSettings * folders/{folder\}/securityHealthAnalyticsSettings * projects/{project\}/securityHealthAnalyticsSettings
     *       name: 'projects/my-project/securityHealthAnalyticsSettings',
     *       // The list of fields to be updated.
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
    ): GaxiosPromise<Readable>;
    updateSecurityHealthAnalyticsSettings(
      params?: Params$Resource$Projects$Updatesecurityhealthanalyticssettings,
      options?: MethodOptions
    ): GaxiosPromise<Schema$SecurityHealthAnalyticsSettings>;
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
      | GaxiosPromise<Schema$SecurityHealthAnalyticsSettings>
      | GaxiosPromise<Readable> {
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
     * Update the VirtualMachineThreatDetectionSettings resource.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/securitycenter.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const securitycenter = google.securitycenter('v1beta2');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res =
     *     await securitycenter.projects.updateVirtualMachineThreatDetectionSettings({
     *       // The resource name of the VirtualMachineThreatDetectionSettings. Formats: * organizations/{organization\}/virtualMachineThreatDetectionSettings * folders/{folder\}/virtualMachineThreatDetectionSettings * projects/{project\}/virtualMachineThreatDetectionSettings
     *       name: 'projects/my-project/virtualMachineThreatDetectionSettings',
     *       // The list of fields to be updated.
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
    ): GaxiosPromise<Readable>;
    updateVirtualMachineThreatDetectionSettings(
      params?: Params$Resource$Projects$Updatevirtualmachinethreatdetectionsettings,
      options?: MethodOptions
    ): GaxiosPromise<Schema$VirtualMachineThreatDetectionSettings>;
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
      | GaxiosPromise<Schema$VirtualMachineThreatDetectionSettings>
      | GaxiosPromise<Readable> {
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
     * Update the WebSecurityScannerSettings resource.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/securitycenter.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const securitycenter = google.securitycenter('v1beta2');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await securitycenter.projects.updateWebSecurityScannerSettings({
     *     // The resource name of the WebSecurityScannerSettings. Formats: * organizations/{organization\}/webSecurityScannerSettings * folders/{folder\}/webSecurityScannerSettings * projects/{project\}/webSecurityScannerSettings
     *     name: 'projects/my-project/webSecurityScannerSettings',
     *     // The list of fields to be updated.
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
    ): GaxiosPromise<Readable>;
    updateWebSecurityScannerSettings(
      params?: Params$Resource$Projects$Updatewebsecurityscannersettings,
      options?: MethodOptions
    ): GaxiosPromise<Schema$WebSecurityScannerSettings>;
    updateWebSecurityScannerSettings(
      params: Params$Resource$Projects$Updatewebsecurityscannersettings,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    updateWebSecurityScannerSettings(
      params: Params$Resource$Projects$Updatewebsecurityscannersettings,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$WebSecurityScannerSettings>,
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
      | GaxiosPromise<Schema$WebSecurityScannerSettings>
      | GaxiosPromise<Readable> {
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

  export interface Params$Resource$Projects$Getcontainerthreatdetectionsettings
    extends StandardParameters {
    /**
     * Required. The name of the ContainerThreatDetectionSettings to retrieve. Formats: * organizations/{organization\}/containerThreatDetectionSettings * folders/{folder\}/containerThreatDetectionSettings * projects/{project\}/containerThreatDetectionSettings * projects/{project\}/locations/{location\}/clusters/{cluster\}/containerThreatDetectionSettings
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Geteventthreatdetectionsettings
    extends StandardParameters {
    /**
     * Required. The name of the EventThreatDetectionSettings to retrieve. Formats: * organizations/{organization\}/eventThreatDetectionSettings * folders/{folder\}/eventThreatDetectionSettings * projects/{project\}/eventThreatDetectionSettings
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Getsecurityhealthanalyticssettings
    extends StandardParameters {
    /**
     * Required. The name of the SecurityHealthAnalyticsSettings to retrieve. Formats: * organizations/{organization\}/securityHealthAnalyticsSettings * folders/{folder\}/securityHealthAnalyticsSettings * projects/{project\}/securityHealthAnalyticsSettings
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Getvirtualmachinethreatdetectionsettings
    extends StandardParameters {
    /**
     * Required. The name of the VirtualMachineThreatDetectionSettings to retrieve. Formats: * organizations/{organization\}/virtualMachineThreatDetectionSettings * folders/{folder\}/virtualMachineThreatDetectionSettings * projects/{project\}/virtualMachineThreatDetectionSettings
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Getwebsecurityscannersettings
    extends StandardParameters {
    /**
     * Required. The name of the WebSecurityScannerSettings to retrieve. Formats: * organizations/{organization\}/webSecurityScannerSettings * folders/{folder\}/webSecurityScannerSettings * projects/{project\}/webSecurityScannerSettings
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Updatecontainerthreatdetectionsettings
    extends StandardParameters {
    /**
     * The resource name of the ContainerThreatDetectionSettings. Formats: * organizations/{organization\}/containerThreatDetectionSettings * folders/{folder\}/containerThreatDetectionSettings * projects/{project\}/containerThreatDetectionSettings * projects/{project\}/locations/{location\}/clusters/{cluster\}/containerThreatDetectionSettings
     */
    name?: string;
    /**
     * The list of fields to be updated.
     */
    updateMask?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$ContainerThreatDetectionSettings;
  }
  export interface Params$Resource$Projects$Updateeventthreatdetectionsettings
    extends StandardParameters {
    /**
     * The resource name of the EventThreatDetectionSettings. Formats: * organizations/{organization\}/eventThreatDetectionSettings * folders/{folder\}/eventThreatDetectionSettings * projects/{project\}/eventThreatDetectionSettings
     */
    name?: string;
    /**
     * The list of fields to be updated.
     */
    updateMask?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$EventThreatDetectionSettings;
  }
  export interface Params$Resource$Projects$Updatesecurityhealthanalyticssettings
    extends StandardParameters {
    /**
     * The resource name of the SecurityHealthAnalyticsSettings. Formats: * organizations/{organization\}/securityHealthAnalyticsSettings * folders/{folder\}/securityHealthAnalyticsSettings * projects/{project\}/securityHealthAnalyticsSettings
     */
    name?: string;
    /**
     * The list of fields to be updated.
     */
    updateMask?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$SecurityHealthAnalyticsSettings;
  }
  export interface Params$Resource$Projects$Updatevirtualmachinethreatdetectionsettings
    extends StandardParameters {
    /**
     * The resource name of the VirtualMachineThreatDetectionSettings. Formats: * organizations/{organization\}/virtualMachineThreatDetectionSettings * folders/{folder\}/virtualMachineThreatDetectionSettings * projects/{project\}/virtualMachineThreatDetectionSettings
     */
    name?: string;
    /**
     * The list of fields to be updated.
     */
    updateMask?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$VirtualMachineThreatDetectionSettings;
  }
  export interface Params$Resource$Projects$Updatewebsecurityscannersettings
    extends StandardParameters {
    /**
     * The resource name of the WebSecurityScannerSettings. Formats: * organizations/{organization\}/webSecurityScannerSettings * folders/{folder\}/webSecurityScannerSettings * projects/{project\}/webSecurityScannerSettings
     */
    name?: string;
    /**
     * The list of fields to be updated.
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
     * Calculates the effective ContainerThreatDetectionSettings based on its level in the resource hierarchy and its settings.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/securitycenter.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const securitycenter = google.securitycenter('v1beta2');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res =
     *     await securitycenter.projects.containerThreatDetectionSettings.calculate({
     *       // Required. The name of the ContainerThreatDetectionSettings to calculate. Formats: * organizations/{organization\}/containerThreatDetectionSettings * folders/{folder\}/containerThreatDetectionSettings * projects/{project\}/containerThreatDetectionSettings * projects/{project\}/locations/{location\}/clusters/{cluster\}/containerThreatDetectionSettings
     *       name: 'projects/my-project/containerThreatDetectionSettings',
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
    ): GaxiosPromise<Readable>;
    calculate(
      params?: Params$Resource$Projects$Containerthreatdetectionsettings$Calculate,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ContainerThreatDetectionSettings>;
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
      | GaxiosPromise<Schema$ContainerThreatDetectionSettings>
      | GaxiosPromise<Readable> {
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

  export interface Params$Resource$Projects$Containerthreatdetectionsettings$Calculate
    extends StandardParameters {
    /**
     * Required. The name of the ContainerThreatDetectionSettings to calculate. Formats: * organizations/{organization\}/containerThreatDetectionSettings * folders/{folder\}/containerThreatDetectionSettings * projects/{project\}/containerThreatDetectionSettings * projects/{project\}/locations/{location\}/clusters/{cluster\}/containerThreatDetectionSettings
     */
    name?: string;
  }

  export class Resource$Projects$Eventthreatdetectionsettings {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Calculates the effective EventThreatDetectionSettings based on its level in the resource hierarchy and its settings.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/securitycenter.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const securitycenter = google.securitycenter('v1beta2');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res =
     *     await securitycenter.projects.eventThreatDetectionSettings.calculate({
     *       // Required. The name of the EventThreatDetectionSettings to calculate. Formats: * organizations/{organization\}/eventThreatDetectionSettings * folders/{folder\}/eventThreatDetectionSettings * projects/{project\}/eventThreatDetectionSettings
     *       name: 'projects/my-project/eventThreatDetectionSettings',
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
    ): GaxiosPromise<Readable>;
    calculate(
      params?: Params$Resource$Projects$Eventthreatdetectionsettings$Calculate,
      options?: MethodOptions
    ): GaxiosPromise<Schema$EventThreatDetectionSettings>;
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
      | GaxiosPromise<Schema$EventThreatDetectionSettings>
      | GaxiosPromise<Readable> {
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

  export interface Params$Resource$Projects$Eventthreatdetectionsettings$Calculate
    extends StandardParameters {
    /**
     * Required. The name of the EventThreatDetectionSettings to calculate. Formats: * organizations/{organization\}/eventThreatDetectionSettings * folders/{folder\}/eventThreatDetectionSettings * projects/{project\}/eventThreatDetectionSettings
     */
    name?: string;
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
     * Get the ContainerThreatDetectionSettings resource.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/securitycenter.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const securitycenter = google.securitycenter('v1beta2');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
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
     *         // Required. The name of the ContainerThreatDetectionSettings to retrieve. Formats: * organizations/{organization\}/containerThreatDetectionSettings * folders/{folder\}/containerThreatDetectionSettings * projects/{project\}/containerThreatDetectionSettings * projects/{project\}/locations/{location\}/clusters/{cluster\}/containerThreatDetectionSettings
     *         name: 'projects/my-project/locations/my-location/clusters/my-cluster/containerThreatDetectionSettings',
     *       }
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
    ): GaxiosPromise<Readable>;
    getContainerThreatDetectionSettings(
      params?: Params$Resource$Projects$Locations$Clusters$Getcontainerthreatdetectionsettings,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ContainerThreatDetectionSettings>;
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
      | GaxiosPromise<Schema$ContainerThreatDetectionSettings>
      | GaxiosPromise<Readable> {
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
     * Update the ContainerThreatDetectionSettings resource.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/securitycenter.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const securitycenter = google.securitycenter('v1beta2');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
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
     *         // The resource name of the ContainerThreatDetectionSettings. Formats: * organizations/{organization\}/containerThreatDetectionSettings * folders/{folder\}/containerThreatDetectionSettings * projects/{project\}/containerThreatDetectionSettings * projects/{project\}/locations/{location\}/clusters/{cluster\}/containerThreatDetectionSettings
     *         name: 'projects/my-project/locations/my-location/clusters/my-cluster/containerThreatDetectionSettings',
     *         // The list of fields to be updated.
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
     *       }
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
    ): GaxiosPromise<Readable>;
    updateContainerThreatDetectionSettings(
      params?: Params$Resource$Projects$Locations$Clusters$Updatecontainerthreatdetectionsettings,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ContainerThreatDetectionSettings>;
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
      | GaxiosPromise<Schema$ContainerThreatDetectionSettings>
      | GaxiosPromise<Readable> {
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

  export interface Params$Resource$Projects$Locations$Clusters$Getcontainerthreatdetectionsettings
    extends StandardParameters {
    /**
     * Required. The name of the ContainerThreatDetectionSettings to retrieve. Formats: * organizations/{organization\}/containerThreatDetectionSettings * folders/{folder\}/containerThreatDetectionSettings * projects/{project\}/containerThreatDetectionSettings * projects/{project\}/locations/{location\}/clusters/{cluster\}/containerThreatDetectionSettings
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Locations$Clusters$Updatecontainerthreatdetectionsettings
    extends StandardParameters {
    /**
     * The resource name of the ContainerThreatDetectionSettings. Formats: * organizations/{organization\}/containerThreatDetectionSettings * folders/{folder\}/containerThreatDetectionSettings * projects/{project\}/containerThreatDetectionSettings * projects/{project\}/locations/{location\}/clusters/{cluster\}/containerThreatDetectionSettings
     */
    name?: string;
    /**
     * The list of fields to be updated.
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
     * Calculates the effective ContainerThreatDetectionSettings based on its level in the resource hierarchy and its settings.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/securitycenter.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const securitycenter = google.securitycenter('v1beta2');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
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
     *         // Required. The name of the ContainerThreatDetectionSettings to calculate. Formats: * organizations/{organization\}/containerThreatDetectionSettings * folders/{folder\}/containerThreatDetectionSettings * projects/{project\}/containerThreatDetectionSettings * projects/{project\}/locations/{location\}/clusters/{cluster\}/containerThreatDetectionSettings
     *         name: 'projects/my-project/locations/my-location/clusters/my-cluster/containerThreatDetectionSettings',
     *       }
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
    ): GaxiosPromise<Readable>;
    calculate(
      params?: Params$Resource$Projects$Locations$Clusters$Containerthreatdetectionsettings$Calculate,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ContainerThreatDetectionSettings>;
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
      | GaxiosPromise<Schema$ContainerThreatDetectionSettings>
      | GaxiosPromise<Readable> {
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

  export interface Params$Resource$Projects$Locations$Clusters$Containerthreatdetectionsettings$Calculate
    extends StandardParameters {
    /**
     * Required. The name of the ContainerThreatDetectionSettings to calculate. Formats: * organizations/{organization\}/containerThreatDetectionSettings * folders/{folder\}/containerThreatDetectionSettings * projects/{project\}/containerThreatDetectionSettings * projects/{project\}/locations/{location\}/clusters/{cluster\}/containerThreatDetectionSettings
     */
    name?: string;
  }

  export class Resource$Projects$Securityhealthanalyticssettings {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Calculates the effective SecurityHealthAnalyticsSettings based on its level in the resource hierarchy and its settings.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/securitycenter.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const securitycenter = google.securitycenter('v1beta2');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res =
     *     await securitycenter.projects.securityHealthAnalyticsSettings.calculate({
     *       // Required. The name of the SecurityHealthAnalyticsSettings to calculate. Formats: * organizations/{organization\}/securityHealthAnalyticsSettings * folders/{folder\}/securityHealthAnalyticsSettings * projects/{project\}/securityHealthAnalyticsSettings
     *       name: 'projects/my-project/securityHealthAnalyticsSettings',
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
    ): GaxiosPromise<Readable>;
    calculate(
      params?: Params$Resource$Projects$Securityhealthanalyticssettings$Calculate,
      options?: MethodOptions
    ): GaxiosPromise<Schema$SecurityHealthAnalyticsSettings>;
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
      | GaxiosPromise<Schema$SecurityHealthAnalyticsSettings>
      | GaxiosPromise<Readable> {
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

  export interface Params$Resource$Projects$Securityhealthanalyticssettings$Calculate
    extends StandardParameters {
    /**
     * Required. The name of the SecurityHealthAnalyticsSettings to calculate. Formats: * organizations/{organization\}/securityHealthAnalyticsSettings * folders/{folder\}/securityHealthAnalyticsSettings * projects/{project\}/securityHealthAnalyticsSettings
     */
    name?: string;
  }

  export class Resource$Projects$Virtualmachinethreatdetectionsettings {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Calculates the effective VirtualMachineThreatDetectionSettings based on its level in the resource hierarchy and its settings.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/securitycenter.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const securitycenter = google.securitycenter('v1beta2');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
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
     *         // Required. The name of the VirtualMachineThreatDetectionSettings to calculate. Formats: * organizations/{organization\}/virtualMachineThreatDetectionSettings * folders/{folder\}/virtualMachineThreatDetectionSettings * projects/{project\}/virtualMachineThreatDetectionSettings
     *         name: 'projects/my-project/virtualMachineThreatDetectionSettings',
     *       }
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
    ): GaxiosPromise<Readable>;
    calculate(
      params?: Params$Resource$Projects$Virtualmachinethreatdetectionsettings$Calculate,
      options?: MethodOptions
    ): GaxiosPromise<Schema$VirtualMachineThreatDetectionSettings>;
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
      | GaxiosPromise<Schema$VirtualMachineThreatDetectionSettings>
      | GaxiosPromise<Readable> {
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

  export interface Params$Resource$Projects$Virtualmachinethreatdetectionsettings$Calculate
    extends StandardParameters {
    /**
     * Required. The name of the VirtualMachineThreatDetectionSettings to calculate. Formats: * organizations/{organization\}/virtualMachineThreatDetectionSettings * folders/{folder\}/virtualMachineThreatDetectionSettings * projects/{project\}/virtualMachineThreatDetectionSettings
     */
    name?: string;
  }

  export class Resource$Projects$Websecurityscannersettings {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Calculates the effective WebSecurityScannerSettings based on its level in the resource hierarchy and its settings.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/securitycenter.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const securitycenter = google.securitycenter('v1beta2');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res =
     *     await securitycenter.projects.webSecurityScannerSettings.calculate({
     *       // Required. The name of the WebSecurityScannerSettings to calculate. Formats: * organizations/{organization\}/webSecurityScannerSettings * folders/{folder\}/webSecurityScannerSettings * projects/{project\}/webSecurityScannerSettings
     *       name: 'projects/my-project/webSecurityScannerSettings',
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
    ): GaxiosPromise<Readable>;
    calculate(
      params?: Params$Resource$Projects$Websecurityscannersettings$Calculate,
      options?: MethodOptions
    ): GaxiosPromise<Schema$WebSecurityScannerSettings>;
    calculate(
      params: Params$Resource$Projects$Websecurityscannersettings$Calculate,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    calculate(
      params: Params$Resource$Projects$Websecurityscannersettings$Calculate,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$WebSecurityScannerSettings>,
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
      | GaxiosPromise<Schema$WebSecurityScannerSettings>
      | GaxiosPromise<Readable> {
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

  export interface Params$Resource$Projects$Websecurityscannersettings$Calculate
    extends StandardParameters {
    /**
     * Required. The name of the WebSecurityScannerSettings to calculate. Formats: * organizations/{organization\}/webSecurityScannerSettings * folders/{folder\}/webSecurityScannerSettings * projects/{project\}/webSecurityScannerSettings
     */
    name?: string;
  }
}
