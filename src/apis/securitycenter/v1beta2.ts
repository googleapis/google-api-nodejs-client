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
     * The additional taxonomy group within findings from a given source. This field is immutable after creation time. Example: "XSS_FLASH_INJECTION"
     */
    category?: string | null;
    /**
     * The time at which the finding was created in Security Command Center.
     */
    createTime?: string | null;
    /**
     * The time at which the event took place, or when an update to the finding occurred. For example, if the finding represents an open firewall it would capture the time the detector believes the firewall became open. The accuracy is determined by the detector. If the finding were to be resolved afterward, this time would reflect when the finding was resolved.
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
    securityMarks?: Schema$SecurityMarks;
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
     * The additional taxonomy group within findings from a given source. This field is immutable after creation time. Example: "XSS_FLASH_INJECTION"
     */
    category?: string | null;
    /**
     * The time at which the finding was created in Security Command Center.
     */
    createTime?: string | null;
    /**
     * The time at which the event took place, or when an update to the finding occurred. For example, if the finding represents an open firewall it would capture the time the detector believes the firewall became open. The accuracy is determined by the detector. If the finding were to be resolved afterward, this time would reflect when the finding was resolved.
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
    webSecurityScannerSettings: Resource$Folders$Websecurityscannersettings;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.containerThreatDetectionSettings = new Resource$Folders$Containerthreatdetectionsettings(
        this.context
      );
      this.eventThreatDetectionSettings = new Resource$Folders$Eventthreatdetectionsettings(
        this.context
      );
      this.securityHealthAnalyticsSettings = new Resource$Folders$Securityhealthanalyticssettings(
        this.context
      );
      this.webSecurityScannerSettings = new Resource$Folders$Websecurityscannersettings(
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
        params = {} as Params$Resource$Folders$Getcontainerthreatdetectionsettings;
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
        params = {} as Params$Resource$Folders$Getsecurityhealthanalyticssettings;
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
     *   const res = await securitycenter.folders.updateContainerThreatDetectionSettings(
     *     {
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
        params = {} as Params$Resource$Folders$Updatecontainerthreatdetectionsettings;
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
        params = {} as Params$Resource$Folders$Updateeventthreatdetectionsettings;
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
     *   const res = await securitycenter.folders.updateSecurityHealthAnalyticsSettings(
     *     {
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
        params = {} as Params$Resource$Folders$Updatesecurityhealthanalyticssettings;
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
     *   const res = await securitycenter.folders.containerThreatDetectionSettings.calculate(
     *     {
     *       // Required. The name of the ContainerThreatDetectionSettings to calculate. Formats: * organizations/{organization\}/containerThreatDetectionSettings * folders/{folder\}/containerThreatDetectionSettings * projects/{project\}/containerThreatDetectionSettings * projects/{project\}/locations/{location\}/clusters/{cluster\}/containerThreatDetectionSettings
     *       name: 'folders/my-folder/containerThreatDetectionSettings',
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
        params = {} as Params$Resource$Folders$Containerthreatdetectionsettings$Calculate;
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
     *   const res = await securitycenter.folders.eventThreatDetectionSettings.calculate(
     *     {
     *       // Required. The name of the EventThreatDetectionSettings to calculate. Formats: * organizations/{organization\}/eventThreatDetectionSettings * folders/{folder\}/eventThreatDetectionSettings * projects/{project\}/eventThreatDetectionSettings
     *       name: 'folders/my-folder/eventThreatDetectionSettings',
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
        params = {} as Params$Resource$Folders$Eventthreatdetectionsettings$Calculate;
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
     *   const res = await securitycenter.folders.securityHealthAnalyticsSettings.calculate(
     *     {
     *       // Required. The name of the SecurityHealthAnalyticsSettings to calculate. Formats: * organizations/{organization\}/securityHealthAnalyticsSettings * folders/{folder\}/securityHealthAnalyticsSettings * projects/{project\}/securityHealthAnalyticsSettings
     *       name: 'folders/my-folder/securityHealthAnalyticsSettings',
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
        params = {} as Params$Resource$Folders$Securityhealthanalyticssettings$Calculate;
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
        params = {} as Params$Resource$Folders$Websecurityscannersettings$Calculate;
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
    webSecurityScannerSettings: Resource$Organizations$Websecurityscannersettings;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.containerThreatDetectionSettings = new Resource$Organizations$Containerthreatdetectionsettings(
        this.context
      );
      this.eventThreatDetectionSettings = new Resource$Organizations$Eventthreatdetectionsettings(
        this.context
      );
      this.securityHealthAnalyticsSettings = new Resource$Organizations$Securityhealthanalyticssettings(
        this.context
      );
      this.webSecurityScannerSettings = new Resource$Organizations$Websecurityscannersettings(
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
     *   const res = await securitycenter.organizations.getContainerThreatDetectionSettings(
     *     {
     *       // Required. The name of the ContainerThreatDetectionSettings to retrieve. Formats: * organizations/{organization\}/containerThreatDetectionSettings * folders/{folder\}/containerThreatDetectionSettings * projects/{project\}/containerThreatDetectionSettings * projects/{project\}/locations/{location\}/clusters/{cluster\}/containerThreatDetectionSettings
     *       name: 'organizations/my-organization/containerThreatDetectionSettings',
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
        params = {} as Params$Resource$Organizations$Getcontainerthreatdetectionsettings;
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
     *   const res = await securitycenter.organizations.getEventThreatDetectionSettings(
     *     {
     *       // Required. The name of the EventThreatDetectionSettings to retrieve. Formats: * organizations/{organization\}/eventThreatDetectionSettings * folders/{folder\}/eventThreatDetectionSettings * projects/{project\}/eventThreatDetectionSettings
     *       name: 'organizations/my-organization/eventThreatDetectionSettings',
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
        params = {} as Params$Resource$Organizations$Geteventthreatdetectionsettings;
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
     *   const res = await securitycenter.organizations.getSecurityHealthAnalyticsSettings(
     *     {
     *       // Required. The name of the SecurityHealthAnalyticsSettings to retrieve. Formats: * organizations/{organization\}/securityHealthAnalyticsSettings * folders/{folder\}/securityHealthAnalyticsSettings * projects/{project\}/securityHealthAnalyticsSettings
     *       name: 'organizations/my-organization/securityHealthAnalyticsSettings',
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
        params = {} as Params$Resource$Organizations$Getsecurityhealthanalyticssettings;
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
        params = {} as Params$Resource$Organizations$Getwebsecurityscannersettings;
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
     *   const res = await securitycenter.organizations.updateContainerThreatDetectionSettings(
     *     {
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
        params = {} as Params$Resource$Organizations$Updatecontainerthreatdetectionsettings;
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
     *   const res = await securitycenter.organizations.updateEventThreatDetectionSettings(
     *     {
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
        params = {} as Params$Resource$Organizations$Updateeventthreatdetectionsettings;
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
     *   const res = await securitycenter.organizations.updateSecurityHealthAnalyticsSettings(
     *     {
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
        params = {} as Params$Resource$Organizations$Updatesecurityhealthanalyticssettings;
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
     *   const res = await securitycenter.organizations.updateWebSecurityScannerSettings(
     *     {
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
        params = {} as Params$Resource$Organizations$Updatewebsecurityscannersettings;
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
     *   const res = await securitycenter.organizations.containerThreatDetectionSettings.calculate(
     *     {
     *       // Required. The name of the ContainerThreatDetectionSettings to calculate. Formats: * organizations/{organization\}/containerThreatDetectionSettings * folders/{folder\}/containerThreatDetectionSettings * projects/{project\}/containerThreatDetectionSettings * projects/{project\}/locations/{location\}/clusters/{cluster\}/containerThreatDetectionSettings
     *       name: 'organizations/my-organization/containerThreatDetectionSettings',
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
        params = {} as Params$Resource$Organizations$Containerthreatdetectionsettings$Calculate;
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
     *   const res = await securitycenter.organizations.eventThreatDetectionSettings.calculate(
     *     {
     *       // Required. The name of the EventThreatDetectionSettings to calculate. Formats: * organizations/{organization\}/eventThreatDetectionSettings * folders/{folder\}/eventThreatDetectionSettings * projects/{project\}/eventThreatDetectionSettings
     *       name: 'organizations/my-organization/eventThreatDetectionSettings',
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
        params = {} as Params$Resource$Organizations$Eventthreatdetectionsettings$Calculate;
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
     *   const res = await securitycenter.organizations.securityHealthAnalyticsSettings.calculate(
     *     {
     *       // Required. The name of the SecurityHealthAnalyticsSettings to calculate. Formats: * organizations/{organization\}/securityHealthAnalyticsSettings * folders/{folder\}/securityHealthAnalyticsSettings * projects/{project\}/securityHealthAnalyticsSettings
     *       name: 'organizations/my-organization/securityHealthAnalyticsSettings',
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
        params = {} as Params$Resource$Organizations$Securityhealthanalyticssettings$Calculate;
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
     *   const res = await securitycenter.organizations.webSecurityScannerSettings.calculate(
     *     {
     *       // Required. The name of the WebSecurityScannerSettings to calculate. Formats: * organizations/{organization\}/webSecurityScannerSettings * folders/{folder\}/webSecurityScannerSettings * projects/{project\}/webSecurityScannerSettings
     *       name: 'organizations/my-organization/webSecurityScannerSettings',
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
        params = {} as Params$Resource$Organizations$Websecurityscannersettings$Calculate;
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
    webSecurityScannerSettings: Resource$Projects$Websecurityscannersettings;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.containerThreatDetectionSettings = new Resource$Projects$Containerthreatdetectionsettings(
        this.context
      );
      this.eventThreatDetectionSettings = new Resource$Projects$Eventthreatdetectionsettings(
        this.context
      );
      this.locations = new Resource$Projects$Locations(this.context);
      this.securityHealthAnalyticsSettings = new Resource$Projects$Securityhealthanalyticssettings(
        this.context
      );
      this.webSecurityScannerSettings = new Resource$Projects$Websecurityscannersettings(
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
        params = {} as Params$Resource$Projects$Getcontainerthreatdetectionsettings;
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
        params = {} as Params$Resource$Projects$Getsecurityhealthanalyticssettings;
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
     *   const res = await securitycenter.projects.updateContainerThreatDetectionSettings(
     *     {
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
        params = {} as Params$Resource$Projects$Updatecontainerthreatdetectionsettings;
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
        params = {} as Params$Resource$Projects$Updateeventthreatdetectionsettings;
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
     *   const res = await securitycenter.projects.updateSecurityHealthAnalyticsSettings(
     *     {
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
        params = {} as Params$Resource$Projects$Updatesecurityhealthanalyticssettings;
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
        params = {} as Params$Resource$Projects$Updatewebsecurityscannersettings;
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
     *   const res = await securitycenter.projects.containerThreatDetectionSettings.calculate(
     *     {
     *       // Required. The name of the ContainerThreatDetectionSettings to calculate. Formats: * organizations/{organization\}/containerThreatDetectionSettings * folders/{folder\}/containerThreatDetectionSettings * projects/{project\}/containerThreatDetectionSettings * projects/{project\}/locations/{location\}/clusters/{cluster\}/containerThreatDetectionSettings
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
        params = {} as Params$Resource$Projects$Containerthreatdetectionsettings$Calculate;
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
     *   const res = await securitycenter.projects.eventThreatDetectionSettings.calculate(
     *     {
     *       // Required. The name of the EventThreatDetectionSettings to calculate. Formats: * organizations/{organization\}/eventThreatDetectionSettings * folders/{folder\}/eventThreatDetectionSettings * projects/{project\}/eventThreatDetectionSettings
     *       name: 'projects/my-project/eventThreatDetectionSettings',
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
        params = {} as Params$Resource$Projects$Eventthreatdetectionsettings$Calculate;
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
      this.containerThreatDetectionSettings = new Resource$Projects$Locations$Clusters$Containerthreatdetectionsettings(
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
     *   const res = await securitycenter.projects.locations.clusters.getContainerThreatDetectionSettings(
     *     {
     *       // Required. The name of the ContainerThreatDetectionSettings to retrieve. Formats: * organizations/{organization\}/containerThreatDetectionSettings * folders/{folder\}/containerThreatDetectionSettings * projects/{project\}/containerThreatDetectionSettings * projects/{project\}/locations/{location\}/clusters/{cluster\}/containerThreatDetectionSettings
     *       name:
     *         'projects/my-project/locations/my-location/clusters/my-cluster/containerThreatDetectionSettings',
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
        params = {} as Params$Resource$Projects$Locations$Clusters$Getcontainerthreatdetectionsettings;
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
     *   const res = await securitycenter.projects.locations.clusters.updateContainerThreatDetectionSettings(
     *     {
     *       // The resource name of the ContainerThreatDetectionSettings. Formats: * organizations/{organization\}/containerThreatDetectionSettings * folders/{folder\}/containerThreatDetectionSettings * projects/{project\}/containerThreatDetectionSettings * projects/{project\}/locations/{location\}/clusters/{cluster\}/containerThreatDetectionSettings
     *       name:
     *         'projects/my-project/locations/my-location/clusters/my-cluster/containerThreatDetectionSettings',
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
        params = {} as Params$Resource$Projects$Locations$Clusters$Updatecontainerthreatdetectionsettings;
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
     *   const res = await securitycenter.projects.locations.clusters.containerThreatDetectionSettings.calculate(
     *     {
     *       // Required. The name of the ContainerThreatDetectionSettings to calculate. Formats: * organizations/{organization\}/containerThreatDetectionSettings * folders/{folder\}/containerThreatDetectionSettings * projects/{project\}/containerThreatDetectionSettings * projects/{project\}/locations/{location\}/clusters/{cluster\}/containerThreatDetectionSettings
     *       name:
     *         'projects/my-project/locations/my-location/clusters/my-cluster/containerThreatDetectionSettings',
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
        params = {} as Params$Resource$Projects$Locations$Clusters$Containerthreatdetectionsettings$Calculate;
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
     *   const res = await securitycenter.projects.securityHealthAnalyticsSettings.calculate(
     *     {
     *       // Required. The name of the SecurityHealthAnalyticsSettings to calculate. Formats: * organizations/{organization\}/securityHealthAnalyticsSettings * folders/{folder\}/securityHealthAnalyticsSettings * projects/{project\}/securityHealthAnalyticsSettings
     *       name: 'projects/my-project/securityHealthAnalyticsSettings',
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
        params = {} as Params$Resource$Projects$Securityhealthanalyticssettings$Calculate;
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
     *   const res = await securitycenter.projects.webSecurityScannerSettings.calculate(
     *     {
     *       // Required. The name of the WebSecurityScannerSettings to calculate. Formats: * organizations/{organization\}/webSecurityScannerSettings * folders/{folder\}/webSecurityScannerSettings * projects/{project\}/webSecurityScannerSettings
     *       name: 'projects/my-project/webSecurityScannerSettings',
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
        params = {} as Params$Resource$Projects$Websecurityscannersettings$Calculate;
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
