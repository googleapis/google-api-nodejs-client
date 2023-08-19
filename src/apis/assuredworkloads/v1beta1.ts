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

export namespace assuredworkloads_v1beta1 {
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
   * Assured Workloads API
   *
   *
   *
   * @example
   * ```js
   * const {google} = require('googleapis');
   * const assuredworkloads = google.assuredworkloads('v1beta1');
   * ```
   */
  export class Assuredworkloads {
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

  /**
   * Request for acknowledging the violation Next Id: 5
   */
  export interface Schema$GoogleCloudAssuredworkloadsV1beta1AcknowledgeViolationRequest {
    /**
     * Optional. Acknowledge type of specified violation.
     */
    acknowledgeType?: string | null;
    /**
     * Required. Business justification explaining the need for violation acknowledgement
     */
    comment?: string | null;
    /**
     * Optional. This field is deprecated and will be removed in future version of the API. Name of the OrgPolicy which was modified with non-compliant change and resulted in this violation. Format: projects/{project_number\}/policies/{constraint_name\} folders/{folder_id\}/policies/{constraint_name\} organizations/{organization_id\}/policies/{constraint_name\}
     */
    nonCompliantOrgPolicy?: string | null;
  }
  /**
   * Response for violation acknowledgement
   */
  export interface Schema$GoogleCloudAssuredworkloadsV1beta1AcknowledgeViolationResponse {}
  /**
   * Response containing the analysis results for the hypothetical resource move.
   */
  export interface Schema$GoogleCloudAssuredworkloadsV1beta1AnalyzeWorkloadMoveResponse {
    /**
     * List of analysis results for each asset in scope.
     */
    assetMoveAnalyses?: Schema$GoogleCloudAssuredworkloadsV1beta1AssetMoveAnalysis[];
    /**
     * A list of blockers that should be addressed before moving the source project or project-based workload to the destination folder-based workload. This field is now deprecated.
     */
    blockers?: string[] | null;
    /**
     * The next page token. Is empty if the last page is reached.
     */
    nextPageToken?: string | null;
  }
  /**
   * Represents move analysis results for an asset.
   */
  export interface Schema$GoogleCloudAssuredworkloadsV1beta1AssetMoveAnalysis {
    /**
     * List of eligible analyses performed for the asset.
     */
    analysisGroups?: Schema$GoogleCloudAssuredworkloadsV1beta1MoveAnalysisGroup[];
    /**
     * The full resource name of the asset being analyzed. Example: //compute.googleapis.com/projects/my_project_123/zones/zone1/instances/instance1
     */
    asset?: string | null;
    /**
     * Type of the asset being analyzed. Possible values will be among the ones listed [here](https://cloud.google.com/asset-inventory/docs/supported-asset-types#searchable_asset_types).
     */
    assetType?: string | null;
  }
  /**
   * Operation metadata to give request details of CreateWorkload.
   */
  export interface Schema$GoogleCloudAssuredworkloadsV1beta1CreateWorkloadOperationMetadata {
    /**
     * Optional. Compliance controls that should be applied to the resources managed by the workload.
     */
    complianceRegime?: string | null;
    /**
     * Optional. Time when the operation was created.
     */
    createTime?: string | null;
    /**
     * Optional. The display name of the workload.
     */
    displayName?: string | null;
    /**
     * Optional. The parent of the workload.
     */
    parent?: string | null;
    /**
     * Optional. Resource properties in the input that are used for creating/customizing workload resources.
     */
    resourceSettings?: Schema$GoogleCloudAssuredworkloadsV1beta1WorkloadResourceSettings[];
  }
  /**
   * Response for EnableResourceMonitoring endpoint.
   */
  export interface Schema$GoogleCloudAssuredworkloadsV1beta1EnableResourceMonitoringResponse {}
  /**
   * Response of ListViolations endpoint.
   */
  export interface Schema$GoogleCloudAssuredworkloadsV1beta1ListViolationsResponse {
    /**
     * The next page token. Returns empty if reached the last page.
     */
    nextPageToken?: string | null;
    /**
     * List of Violations under a Workload.
     */
    violations?: Schema$GoogleCloudAssuredworkloadsV1beta1Violation[];
  }
  /**
   * Response of ListWorkloads endpoint.
   */
  export interface Schema$GoogleCloudAssuredworkloadsV1beta1ListWorkloadsResponse {
    /**
     * The next page token. Return empty if reached the last page.
     */
    nextPageToken?: string | null;
    /**
     * List of Workloads under a given parent.
     */
    workloads?: Schema$GoogleCloudAssuredworkloadsV1beta1Workload[];
  }
  /**
   * Represents a logical group of checks performed for an asset. If successful, the group contains the analysis result, otherwise it contains an error with the failure reason.
   */
  export interface Schema$GoogleCloudAssuredworkloadsV1beta1MoveAnalysisGroup {
    /**
     * Result of a successful analysis.
     */
    analysisResult?: Schema$GoogleCloudAssuredworkloadsV1beta1MoveAnalysisResult;
    /**
     * Name of the analysis group.
     */
    displayName?: string | null;
    /**
     * Error details for a failed analysis.
     */
    error?: Schema$GoogleRpcStatus;
  }
  /**
   * Represents the successful move analysis results for a group.
   */
  export interface Schema$GoogleCloudAssuredworkloadsV1beta1MoveAnalysisResult {
    /**
     * List of blockers. If not resolved, these will result in compliance violations in the target.
     */
    blockers?: Schema$GoogleCloudAssuredworkloadsV1beta1MoveImpact[];
    /**
     * List of warnings. These are risks that may or may not result in compliance violations.
     */
    warnings?: Schema$GoogleCloudAssuredworkloadsV1beta1MoveImpact[];
  }
  /**
   * Represents the impact of moving the asset to the target.
   */
  export interface Schema$GoogleCloudAssuredworkloadsV1beta1MoveImpact {
    /**
     * Explanation of the impact.
     */
    detail?: string | null;
  }
  /**
   * Request for restricting list of available resources in Workload environment.
   */
  export interface Schema$GoogleCloudAssuredworkloadsV1beta1RestrictAllowedResourcesRequest {
    /**
     * Required. The type of restriction for using gcp products in the Workload environment.
     */
    restrictionType?: string | null;
  }
  /**
   * Response for restricting the list of allowed resources.
   */
  export interface Schema$GoogleCloudAssuredworkloadsV1beta1RestrictAllowedResourcesResponse {}
  /**
   * Workload monitoring Violation. Next Id: 28
   */
  export interface Schema$GoogleCloudAssuredworkloadsV1beta1Violation {
    /**
     * A boolean that indicates if the violation is acknowledged
     */
    acknowledged?: boolean | null;
    /**
     * Optional. Timestamp when this violation was acknowledged first. Check exception_contexts to find the last time the violation was acknowledged when there are more than one violations. This field will be absent when acknowledged field is marked as false.
     */
    acknowledgementTime?: string | null;
    /**
     * Optional. Output only. Violation Id of the org-policy violation due to which the resource violation is caused. Empty for org-policy violations.
     */
    associatedOrgPolicyViolationId?: string | null;
    /**
     * Output only. Immutable. Audit Log Link for violated resource Format: https://console.cloud.google.com/logs/query;query={logName\}{protoPayload.resourceName\}{timeRange\}{folder\}
     */
    auditLogLink?: string | null;
    /**
     * Output only. Time of the event which triggered the Violation.
     */
    beginTime?: string | null;
    /**
     * Output only. Category under which this violation is mapped. e.g. Location, Service Usage, Access, Encryption, etc.
     */
    category?: string | null;
    /**
     * Output only. Description for the Violation. e.g. OrgPolicy gcp.resourceLocations has non compliant value.
     */
    description?: string | null;
    /**
     * Output only. Immutable. Audit Log link to find business justification provided for violation exception. Format: https://console.cloud.google.com/logs/query;query={logName\}{protoPayload.resourceName\}{protoPayload.methodName\}{timeRange\}{organization\}
     */
    exceptionAuditLogLink?: string | null;
    /**
     * Output only. List of all the exception detail added for the violation.
     */
    exceptionContexts?: Schema$GoogleCloudAssuredworkloadsV1beta1ViolationExceptionContext[];
    /**
     * Output only. Immutable. Name of the Violation. Format: organizations/{organization\}/locations/{location\}/workloads/{workload_id\}/violations/{violations_id\}
     */
    name?: string | null;
    /**
     * Output only. Immutable. Name of the OrgPolicy which was modified with non-compliant change and resulted this violation. Format: projects/{project_number\}/policies/{constraint_name\} folders/{folder_id\}/policies/{constraint_name\} organizations/{organization_id\}/policies/{constraint_name\}
     */
    nonCompliantOrgPolicy?: string | null;
    /**
     * Output only. Immutable. The org-policy-constraint that was incorrectly changed, which resulted in this violation.
     */
    orgPolicyConstraint?: string | null;
    /**
     * Optional. Output only. Parent project number where resource is present. Empty for org-policy violations.
     */
    parentProjectNumber?: string | null;
    /**
     * Output only. Compliance violation remediation
     */
    remediation?: Schema$GoogleCloudAssuredworkloadsV1beta1ViolationRemediation;
    /**
     * Output only. Time of the event which fixed the Violation. If the violation is ACTIVE this will be empty.
     */
    resolveTime?: string | null;
    /**
     * Optional. Output only. Name of the resource like //storage.googleapis.com/myprojectxyz-testbucket. Empty for org-policy violations.
     */
    resourceName?: string | null;
    /**
     * Optional. Output only. Type of the resource like compute.googleapis.com/Disk, etc. Empty for org-policy violations.
     */
    resourceType?: string | null;
    /**
     * Output only. State of the violation
     */
    state?: string | null;
    /**
     * Output only. The last time when the Violation record was updated.
     */
    updateTime?: string | null;
    /**
     * Output only. Type of the violation
     */
    violationType?: string | null;
  }
  /**
   * Violation exception detail. Next Id: 6
   */
  export interface Schema$GoogleCloudAssuredworkloadsV1beta1ViolationExceptionContext {
    /**
     * Timestamp when the violation was acknowledged.
     */
    acknowledgementTime?: string | null;
    /**
     * Business justification provided towards the acknowledgement of the violation.
     */
    comment?: string | null;
    /**
     * Name of the user (or service account) who acknowledged the violation.
     */
    userName?: string | null;
  }
  /**
   * Represents remediation guidance to resolve compliance violation for AssuredWorkload
   */
  export interface Schema$GoogleCloudAssuredworkloadsV1beta1ViolationRemediation {
    /**
     * Values that can resolve the violation For example: for list org policy violations, this will either be the list of allowed or denied values
     */
    compliantValues?: string[] | null;
    /**
     * Required. Remediation instructions to resolve violations
     */
    instructions?: Schema$GoogleCloudAssuredworkloadsV1beta1ViolationRemediationInstructions;
    /**
     * Output only. Reemediation type based on the type of org policy values violated
     */
    remediationType?: string | null;
  }
  /**
   * Instructions to remediate violation
   */
  export interface Schema$GoogleCloudAssuredworkloadsV1beta1ViolationRemediationInstructions {
    /**
     * Remediation instructions to resolve violation via cloud console
     */
    consoleInstructions?: Schema$GoogleCloudAssuredworkloadsV1beta1ViolationRemediationInstructionsConsole;
    /**
     * Remediation instructions to resolve violation via gcloud cli
     */
    gcloudInstructions?: Schema$GoogleCloudAssuredworkloadsV1beta1ViolationRemediationInstructionsGcloud;
  }
  /**
   * Remediation instructions to resolve violation via cloud console
   */
  export interface Schema$GoogleCloudAssuredworkloadsV1beta1ViolationRemediationInstructionsConsole {
    /**
     * Additional urls for more information about steps
     */
    additionalLinks?: string[] | null;
    /**
     * Link to console page where violations can be resolved
     */
    consoleUris?: string[] | null;
    /**
     * Steps to resolve violation via cloud console
     */
    steps?: string[] | null;
  }
  /**
   * Remediation instructions to resolve violation via gcloud cli
   */
  export interface Schema$GoogleCloudAssuredworkloadsV1beta1ViolationRemediationInstructionsGcloud {
    /**
     * Additional urls for more information about steps
     */
    additionalLinks?: string[] | null;
    /**
     * Gcloud command to resolve violation
     */
    gcloudCommands?: string[] | null;
    /**
     * Steps to resolve violation via gcloud cli
     */
    steps?: string[] | null;
  }
  /**
   * A Workload object for managing highly regulated workloads of cloud customers.
   */
  export interface Schema$GoogleCloudAssuredworkloadsV1beta1Workload {
    /**
     * Optional. The billing account used for the resources which are direct children of workload. This billing account is initially associated with the resources created as part of Workload creation. After the initial creation of these resources, the customer can change the assigned billing account. The resource name has the form `billingAccounts/{billing_account_id\}`. For example, `billingAccounts/012345-567890-ABCDEF`.
     */
    billingAccount?: string | null;
    /**
     * Input only. Immutable. Settings specific to resources needed for CJIS.
     */
    cjisSettings?: Schema$GoogleCloudAssuredworkloadsV1beta1WorkloadCJISSettings;
    /**
     * Required. Immutable. Compliance Regime associated with this workload.
     */
    complianceRegime?: string | null;
    /**
     * Output only. Count of active Violations in the Workload.
     */
    complianceStatus?: Schema$GoogleCloudAssuredworkloadsV1beta1WorkloadComplianceStatus;
    /**
     * Output only. Urls for services which are compliant for this Assured Workload, but which are currently disallowed by the ResourceUsageRestriction org policy. Invoke RestrictAllowedResources endpoint to allow your project developers to use these services in their environment."
     */
    compliantButDisallowedServices?: string[] | null;
    /**
     * Output only. Immutable. The Workload creation timestamp.
     */
    createTime?: string | null;
    /**
     * Required. The user-assigned display name of the Workload. When present it must be between 4 to 30 characters. Allowed characters are: lowercase and uppercase letters, numbers, hyphen, and spaces. Example: My Workload
     */
    displayName?: string | null;
    /**
     * Optional. Represents the Ekm Provisioning State of the given workload.
     */
    ekmProvisioningResponse?: Schema$GoogleCloudAssuredworkloadsV1beta1WorkloadEkmProvisioningResponse;
    /**
     * Optional. Indicates the sovereignty status of the given workload. Currently meant to be used by Europe/Canada customers.
     */
    enableSovereignControls?: boolean | null;
    /**
     * Optional. ETag of the workload, it is calculated on the basis of the Workload contents. It will be used in Update & Delete operations.
     */
    etag?: string | null;
    /**
     * Input only. Immutable. Settings specific to resources needed for FedRAMP High.
     */
    fedrampHighSettings?: Schema$GoogleCloudAssuredworkloadsV1beta1WorkloadFedrampHighSettings;
    /**
     * Input only. Immutable. Settings specific to resources needed for FedRAMP Moderate.
     */
    fedrampModerateSettings?: Schema$GoogleCloudAssuredworkloadsV1beta1WorkloadFedrampModerateSettings;
    /**
     * Input only. Immutable. Settings specific to resources needed for IL4.
     */
    il4Settings?: Schema$GoogleCloudAssuredworkloadsV1beta1WorkloadIL4Settings;
    /**
     * Output only. Represents the KAJ enrollment state of the given workload.
     */
    kajEnrollmentState?: string | null;
    /**
     * Input only. Settings used to create a CMEK crypto key. When set, a project with a KMS CMEK key is provisioned. This field is deprecated as of Feb 28, 2022. In order to create a Keyring, callers should specify, ENCRYPTION_KEYS_PROJECT or KEYRING in ResourceSettings.resource_type field.
     */
    kmsSettings?: Schema$GoogleCloudAssuredworkloadsV1beta1WorkloadKMSSettings;
    /**
     * Optional. Labels applied to the workload.
     */
    labels?: {[key: string]: string} | null;
    /**
     * Optional. The resource name of the workload. Format: organizations/{organization\}/locations/{location\}/workloads/{workload\} Read-only.
     */
    name?: string | null;
    /**
     * Optional. Partner regime associated with this workload.
     */
    partner?: string | null;
    /**
     * Optional. Permissions granted to the AW Partner SA account for the customer workload
     */
    partnerPermissions?: Schema$GoogleCloudAssuredworkloadsV1beta1WorkloadPartnerPermissions;
    /**
     * Input only. The parent resource for the resources managed by this Assured Workload. May be either empty or a folder resource which is a child of the Workload parent. If not specified all resources are created under the parent organization. Format: folders/{folder_id\}
     */
    provisionedResourcesParent?: string | null;
    /**
     * Output only. Indicates whether resource monitoring is enabled for workload or not. It is true when Resource feed is subscribed to AWM topic and AWM Service Agent Role is binded to AW Service Account for resource Assured workload.
     */
    resourceMonitoringEnabled?: boolean | null;
    /**
     * Output only. The resources associated with this workload. These resources will be created when creating the workload. If any of the projects already exist, the workload creation will fail. Always read only.
     */
    resources?: Schema$GoogleCloudAssuredworkloadsV1beta1WorkloadResourceInfo[];
    /**
     * Input only. Resource properties that are used to customize workload resources. These properties (such as custom project id) will be used to create workload resources if possible. This field is optional.
     */
    resourceSettings?: Schema$GoogleCloudAssuredworkloadsV1beta1WorkloadResourceSettings[];
    /**
     * Output only. Represents the SAA enrollment response of the given workload. SAA enrollment response is queried during GetWorkload call. In failure cases, user friendly error message is shown in SAA details page.
     */
    saaEnrollmentResponse?: Schema$GoogleCloudAssuredworkloadsV1beta1WorkloadSaaEnrollmentResponse;
    /**
     * Optional. Indicates whether the e-mail notification for a violation is enabled for a workload. This value will be by default True, and if not present will be considered as true. This should only be updated via updateWorkload call. Any Changes to this field during the createWorkload call will not be honored. This will always be true while creating the workload.
     */
    violationNotificationsEnabled?: boolean | null;
  }
  /**
   * Settings specific to resources needed for CJIS.
   */
  export interface Schema$GoogleCloudAssuredworkloadsV1beta1WorkloadCJISSettings {
    /**
     * Input only. Immutable. Settings used to create a CMEK crypto key.
     */
    kmsSettings?: Schema$GoogleCloudAssuredworkloadsV1beta1WorkloadKMSSettings;
  }
  /**
   * Represents the Compliance Status of this workload
   */
  export interface Schema$GoogleCloudAssuredworkloadsV1beta1WorkloadComplianceStatus {
    /**
     * Number of current resource violations which are not acknowledged.
     */
    acknowledgedResourceViolationCount?: number | null;
    /**
     * Number of current orgPolicy violations which are acknowledged.
     */
    acknowledgedViolationCount?: number | null;
    /**
     * Number of current resource violations which are acknowledged.
     */
    activeResourceViolationCount?: number | null;
    /**
     * Number of current orgPolicy violations which are not acknowledged.
     */
    activeViolationCount?: number | null;
  }
  /**
   * External key management systems(EKM) Provisioning response
   */
  export interface Schema$GoogleCloudAssuredworkloadsV1beta1WorkloadEkmProvisioningResponse {
    /**
     * Indicates Ekm provisioning error if any.
     */
    ekmProvisioningErrorDomain?: string | null;
    /**
     * Detailed error message if Ekm provisioning fails
     */
    ekmProvisioningErrorMapping?: string | null;
    /**
     * Indicates Ekm enrollment Provisioning of a given workload.
     */
    ekmProvisioningState?: string | null;
  }
  /**
   * Settings specific to resources needed for FedRAMP High.
   */
  export interface Schema$GoogleCloudAssuredworkloadsV1beta1WorkloadFedrampHighSettings {
    /**
     * Input only. Immutable. Settings used to create a CMEK crypto key.
     */
    kmsSettings?: Schema$GoogleCloudAssuredworkloadsV1beta1WorkloadKMSSettings;
  }
  /**
   * Settings specific to resources needed for FedRAMP Moderate.
   */
  export interface Schema$GoogleCloudAssuredworkloadsV1beta1WorkloadFedrampModerateSettings {
    /**
     * Input only. Immutable. Settings used to create a CMEK crypto key.
     */
    kmsSettings?: Schema$GoogleCloudAssuredworkloadsV1beta1WorkloadKMSSettings;
  }
  /**
   * Settings specific to resources needed for IL4.
   */
  export interface Schema$GoogleCloudAssuredworkloadsV1beta1WorkloadIL4Settings {
    /**
     * Input only. Immutable. Settings used to create a CMEK crypto key.
     */
    kmsSettings?: Schema$GoogleCloudAssuredworkloadsV1beta1WorkloadKMSSettings;
  }
  /**
   * Settings specific to the Key Management Service.
   */
  export interface Schema$GoogleCloudAssuredworkloadsV1beta1WorkloadKMSSettings {
    /**
     * Required. Input only. Immutable. The time at which the Key Management Service will automatically create a new version of the crypto key and mark it as the primary.
     */
    nextRotationTime?: string | null;
    /**
     * Required. Input only. Immutable. [next_rotation_time] will be advanced by this period when the Key Management Service automatically rotates a key. Must be at least 24 hours and at most 876,000 hours.
     */
    rotationPeriod?: string | null;
  }
  /**
   * Permissions granted to the AW Partner SA account for the customer workload
   */
  export interface Schema$GoogleCloudAssuredworkloadsV1beta1WorkloadPartnerPermissions {
    /**
     * Optional. Allow partner to view violation alerts.
     */
    assuredWorkloadsMonitoring?: boolean | null;
    /**
     * Allow the partner to view inspectability logs and monitoring violations.
     */
    dataLogsViewer?: boolean | null;
    /**
     * Optional. Allow partner to view access approval logs.
     */
    serviceAccessApprover?: boolean | null;
  }
  /**
   * Represent the resources that are children of this Workload.
   */
  export interface Schema$GoogleCloudAssuredworkloadsV1beta1WorkloadResourceInfo {
    /**
     * Resource identifier. For a project this represents project_number.
     */
    resourceId?: string | null;
    /**
     * Indicates the type of resource.
     */
    resourceType?: string | null;
  }
  /**
   * Represent the custom settings for the resources to be created.
   */
  export interface Schema$GoogleCloudAssuredworkloadsV1beta1WorkloadResourceSettings {
    /**
     * User-assigned resource display name. If not empty it will be used to create a resource with the specified name.
     */
    displayName?: string | null;
    /**
     * Resource identifier. For a project this represents project_id. If the project is already taken, the workload creation will fail. For KeyRing, this represents the keyring_id. For a folder, don't set this value as folder_id is assigned by Google.
     */
    resourceId?: string | null;
    /**
     * Indicates the type of resource. This field should be specified to correspond the id to the right project type (CONSUMER_PROJECT or ENCRYPTION_KEYS_PROJECT)
     */
    resourceType?: string | null;
  }
  /**
   * Signed Access Approvals (SAA) enrollment response.
   */
  export interface Schema$GoogleCloudAssuredworkloadsV1beta1WorkloadSaaEnrollmentResponse {
    /**
     * Indicates SAA enrollment setup error if any.
     */
    setupErrors?: string[] | null;
    /**
     * Indicates SAA enrollment status of a given workload.
     */
    setupStatus?: string | null;
  }
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
     * The normal, successful response of the operation. If the original method returns no data on success, such as `Delete`, the response is `google.protobuf.Empty`. If the original method is standard `Get`/`Create`/`Update`, the response should be the resource. For other methods, the response should have the type `XxxResponse`, where `Xxx` is the original method name. For example, if the original method name is `TakeSnapshot()`, the inferred response type is `TakeSnapshotResponse`.
     */
    response?: {[key: string]: any} | null;
  }
  /**
   * A generic empty message that you can re-use to avoid defining duplicated empty messages in your APIs. A typical example is to use it as the request or the response type of an API method. For instance: service Foo { rpc Bar(google.protobuf.Empty) returns (google.protobuf.Empty); \}
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

  export class Resource$Organizations {
    context: APIRequestContext;
    locations: Resource$Organizations$Locations;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.locations = new Resource$Organizations$Locations(this.context);
    }
  }

  export class Resource$Organizations$Locations {
    context: APIRequestContext;
    operations: Resource$Organizations$Locations$Operations;
    workloads: Resource$Organizations$Locations$Workloads;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.operations = new Resource$Organizations$Locations$Operations(
        this.context
      );
      this.workloads = new Resource$Organizations$Locations$Workloads(
        this.context
      );
    }
  }

  export class Resource$Organizations$Locations$Operations {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    get(
      params: Params$Resource$Organizations$Locations$Operations$Get,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    get(
      params?: Params$Resource$Organizations$Locations$Operations$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleLongrunningOperation>;
    get(
      params: Params$Resource$Organizations$Locations$Operations$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Organizations$Locations$Operations$Get,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>,
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    get(
      params: Params$Resource$Organizations$Locations$Operations$Get,
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    get(
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Organizations$Locations$Operations$Get
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
        {}) as Params$Resource$Organizations$Locations$Operations$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Organizations$Locations$Operations$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://assuredworkloads.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
     * Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    list(
      params: Params$Resource$Organizations$Locations$Operations$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Organizations$Locations$Operations$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleLongrunningListOperationsResponse>;
    list(
      params: Params$Resource$Organizations$Locations$Operations$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Organizations$Locations$Operations$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleLongrunningListOperationsResponse>,
      callback: BodyResponseCallback<Schema$GoogleLongrunningListOperationsResponse>
    ): void;
    list(
      params: Params$Resource$Organizations$Locations$Operations$List,
      callback: BodyResponseCallback<Schema$GoogleLongrunningListOperationsResponse>
    ): void;
    list(
      callback: BodyResponseCallback<Schema$GoogleLongrunningListOperationsResponse>
    ): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Organizations$Locations$Operations$List
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
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Organizations$Locations$Operations$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Organizations$Locations$Operations$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://assuredworkloads.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta1/{+name}/operations').replace(
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

  export interface Params$Resource$Organizations$Locations$Operations$Get
    extends StandardParameters {
    /**
     * The name of the operation resource.
     */
    name?: string;
  }
  export interface Params$Resource$Organizations$Locations$Operations$List
    extends StandardParameters {
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

  export class Resource$Organizations$Locations$Workloads {
    context: APIRequestContext;
    violations: Resource$Organizations$Locations$Workloads$Violations;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.violations =
        new Resource$Organizations$Locations$Workloads$Violations(this.context);
    }

    /**
     * Analyzes a hypothetical move of a source resource to a target(destination) folder-based workload to surface compliance risks.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    analyzeWorkloadMove(
      params: Params$Resource$Organizations$Locations$Workloads$Analyzeworkloadmove,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    analyzeWorkloadMove(
      params?: Params$Resource$Organizations$Locations$Workloads$Analyzeworkloadmove,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleCloudAssuredworkloadsV1beta1AnalyzeWorkloadMoveResponse>;
    analyzeWorkloadMove(
      params: Params$Resource$Organizations$Locations$Workloads$Analyzeworkloadmove,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    analyzeWorkloadMove(
      params: Params$Resource$Organizations$Locations$Workloads$Analyzeworkloadmove,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleCloudAssuredworkloadsV1beta1AnalyzeWorkloadMoveResponse>,
      callback: BodyResponseCallback<Schema$GoogleCloudAssuredworkloadsV1beta1AnalyzeWorkloadMoveResponse>
    ): void;
    analyzeWorkloadMove(
      params: Params$Resource$Organizations$Locations$Workloads$Analyzeworkloadmove,
      callback: BodyResponseCallback<Schema$GoogleCloudAssuredworkloadsV1beta1AnalyzeWorkloadMoveResponse>
    ): void;
    analyzeWorkloadMove(
      callback: BodyResponseCallback<Schema$GoogleCloudAssuredworkloadsV1beta1AnalyzeWorkloadMoveResponse>
    ): void;
    analyzeWorkloadMove(
      paramsOrCallback?:
        | Params$Resource$Organizations$Locations$Workloads$Analyzeworkloadmove
        | BodyResponseCallback<Schema$GoogleCloudAssuredworkloadsV1beta1AnalyzeWorkloadMoveResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleCloudAssuredworkloadsV1beta1AnalyzeWorkloadMoveResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleCloudAssuredworkloadsV1beta1AnalyzeWorkloadMoveResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleCloudAssuredworkloadsV1beta1AnalyzeWorkloadMoveResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Organizations$Locations$Workloads$Analyzeworkloadmove;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Organizations$Locations$Workloads$Analyzeworkloadmove;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://assuredworkloads.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta1/{+target}:analyzeWorkloadMove').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['target'],
        pathParams: ['target'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$GoogleCloudAssuredworkloadsV1beta1AnalyzeWorkloadMoveResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleCloudAssuredworkloadsV1beta1AnalyzeWorkloadMoveResponse>(
          parameters
        );
      }
    }

    /**
     * Creates Assured Workload.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    create(
      params: Params$Resource$Organizations$Locations$Workloads$Create,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    create(
      params?: Params$Resource$Organizations$Locations$Workloads$Create,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleLongrunningOperation>;
    create(
      params: Params$Resource$Organizations$Locations$Workloads$Create,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    create(
      params: Params$Resource$Organizations$Locations$Workloads$Create,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>,
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    create(
      params: Params$Resource$Organizations$Locations$Workloads$Create,
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    create(
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    create(
      paramsOrCallback?:
        | Params$Resource$Organizations$Locations$Workloads$Create
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
        {}) as Params$Resource$Organizations$Locations$Workloads$Create;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Organizations$Locations$Workloads$Create;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://assuredworkloads.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta1/{+parent}/workloads').replace(
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
     * Deletes the workload. Make sure that workload's direct children are already in a deleted state, otherwise the request will fail with a FAILED_PRECONDITION error. In addition to assuredworkloads.workload.delete permission, the user should also have orgpolicy.policy.set permission on the deleted folder to remove Assured Workloads OrgPolicies.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    delete(
      params: Params$Resource$Organizations$Locations$Workloads$Delete,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    delete(
      params?: Params$Resource$Organizations$Locations$Workloads$Delete,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleProtobufEmpty>;
    delete(
      params: Params$Resource$Organizations$Locations$Workloads$Delete,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    delete(
      params: Params$Resource$Organizations$Locations$Workloads$Delete,
      options: MethodOptions | BodyResponseCallback<Schema$GoogleProtobufEmpty>,
      callback: BodyResponseCallback<Schema$GoogleProtobufEmpty>
    ): void;
    delete(
      params: Params$Resource$Organizations$Locations$Workloads$Delete,
      callback: BodyResponseCallback<Schema$GoogleProtobufEmpty>
    ): void;
    delete(callback: BodyResponseCallback<Schema$GoogleProtobufEmpty>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Organizations$Locations$Workloads$Delete
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
        {}) as Params$Resource$Organizations$Locations$Workloads$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Organizations$Locations$Workloads$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://assuredworkloads.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
     * Enable resource violation monitoring for a workload.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    enableResourceMonitoring(
      params: Params$Resource$Organizations$Locations$Workloads$Enableresourcemonitoring,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    enableResourceMonitoring(
      params?: Params$Resource$Organizations$Locations$Workloads$Enableresourcemonitoring,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleCloudAssuredworkloadsV1beta1EnableResourceMonitoringResponse>;
    enableResourceMonitoring(
      params: Params$Resource$Organizations$Locations$Workloads$Enableresourcemonitoring,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    enableResourceMonitoring(
      params: Params$Resource$Organizations$Locations$Workloads$Enableresourcemonitoring,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleCloudAssuredworkloadsV1beta1EnableResourceMonitoringResponse>,
      callback: BodyResponseCallback<Schema$GoogleCloudAssuredworkloadsV1beta1EnableResourceMonitoringResponse>
    ): void;
    enableResourceMonitoring(
      params: Params$Resource$Organizations$Locations$Workloads$Enableresourcemonitoring,
      callback: BodyResponseCallback<Schema$GoogleCloudAssuredworkloadsV1beta1EnableResourceMonitoringResponse>
    ): void;
    enableResourceMonitoring(
      callback: BodyResponseCallback<Schema$GoogleCloudAssuredworkloadsV1beta1EnableResourceMonitoringResponse>
    ): void;
    enableResourceMonitoring(
      paramsOrCallback?:
        | Params$Resource$Organizations$Locations$Workloads$Enableresourcemonitoring
        | BodyResponseCallback<Schema$GoogleCloudAssuredworkloadsV1beta1EnableResourceMonitoringResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleCloudAssuredworkloadsV1beta1EnableResourceMonitoringResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleCloudAssuredworkloadsV1beta1EnableResourceMonitoringResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleCloudAssuredworkloadsV1beta1EnableResourceMonitoringResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Organizations$Locations$Workloads$Enableresourcemonitoring;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Organizations$Locations$Workloads$Enableresourcemonitoring;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://assuredworkloads.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl + '/v1beta1/{+name}:enableResourceMonitoring'
            ).replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$GoogleCloudAssuredworkloadsV1beta1EnableResourceMonitoringResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleCloudAssuredworkloadsV1beta1EnableResourceMonitoringResponse>(
          parameters
        );
      }
    }

    /**
     * Gets Assured Workload associated with a CRM Node
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    get(
      params: Params$Resource$Organizations$Locations$Workloads$Get,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    get(
      params?: Params$Resource$Organizations$Locations$Workloads$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleCloudAssuredworkloadsV1beta1Workload>;
    get(
      params: Params$Resource$Organizations$Locations$Workloads$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Organizations$Locations$Workloads$Get,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleCloudAssuredworkloadsV1beta1Workload>,
      callback: BodyResponseCallback<Schema$GoogleCloudAssuredworkloadsV1beta1Workload>
    ): void;
    get(
      params: Params$Resource$Organizations$Locations$Workloads$Get,
      callback: BodyResponseCallback<Schema$GoogleCloudAssuredworkloadsV1beta1Workload>
    ): void;
    get(
      callback: BodyResponseCallback<Schema$GoogleCloudAssuredworkloadsV1beta1Workload>
    ): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Organizations$Locations$Workloads$Get
        | BodyResponseCallback<Schema$GoogleCloudAssuredworkloadsV1beta1Workload>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleCloudAssuredworkloadsV1beta1Workload>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleCloudAssuredworkloadsV1beta1Workload>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleCloudAssuredworkloadsV1beta1Workload>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Organizations$Locations$Workloads$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Organizations$Locations$Workloads$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://assuredworkloads.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$GoogleCloudAssuredworkloadsV1beta1Workload>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleCloudAssuredworkloadsV1beta1Workload>(
          parameters
        );
      }
    }

    /**
     * Lists Assured Workloads under a CRM Node.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    list(
      params: Params$Resource$Organizations$Locations$Workloads$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Organizations$Locations$Workloads$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleCloudAssuredworkloadsV1beta1ListWorkloadsResponse>;
    list(
      params: Params$Resource$Organizations$Locations$Workloads$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Organizations$Locations$Workloads$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleCloudAssuredworkloadsV1beta1ListWorkloadsResponse>,
      callback: BodyResponseCallback<Schema$GoogleCloudAssuredworkloadsV1beta1ListWorkloadsResponse>
    ): void;
    list(
      params: Params$Resource$Organizations$Locations$Workloads$List,
      callback: BodyResponseCallback<Schema$GoogleCloudAssuredworkloadsV1beta1ListWorkloadsResponse>
    ): void;
    list(
      callback: BodyResponseCallback<Schema$GoogleCloudAssuredworkloadsV1beta1ListWorkloadsResponse>
    ): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Organizations$Locations$Workloads$List
        | BodyResponseCallback<Schema$GoogleCloudAssuredworkloadsV1beta1ListWorkloadsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleCloudAssuredworkloadsV1beta1ListWorkloadsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleCloudAssuredworkloadsV1beta1ListWorkloadsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleCloudAssuredworkloadsV1beta1ListWorkloadsResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Organizations$Locations$Workloads$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Organizations$Locations$Workloads$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://assuredworkloads.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta1/{+parent}/workloads').replace(
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
        createAPIRequest<Schema$GoogleCloudAssuredworkloadsV1beta1ListWorkloadsResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleCloudAssuredworkloadsV1beta1ListWorkloadsResponse>(
          parameters
        );
      }
    }

    /**
     * Updates an existing workload. Currently allows updating of workload display_name and labels. For force updates don't set etag field in the Workload. Only one update operation per workload can be in progress.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    patch(
      params: Params$Resource$Organizations$Locations$Workloads$Patch,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    patch(
      params?: Params$Resource$Organizations$Locations$Workloads$Patch,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleCloudAssuredworkloadsV1beta1Workload>;
    patch(
      params: Params$Resource$Organizations$Locations$Workloads$Patch,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    patch(
      params: Params$Resource$Organizations$Locations$Workloads$Patch,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleCloudAssuredworkloadsV1beta1Workload>,
      callback: BodyResponseCallback<Schema$GoogleCloudAssuredworkloadsV1beta1Workload>
    ): void;
    patch(
      params: Params$Resource$Organizations$Locations$Workloads$Patch,
      callback: BodyResponseCallback<Schema$GoogleCloudAssuredworkloadsV1beta1Workload>
    ): void;
    patch(
      callback: BodyResponseCallback<Schema$GoogleCloudAssuredworkloadsV1beta1Workload>
    ): void;
    patch(
      paramsOrCallback?:
        | Params$Resource$Organizations$Locations$Workloads$Patch
        | BodyResponseCallback<Schema$GoogleCloudAssuredworkloadsV1beta1Workload>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleCloudAssuredworkloadsV1beta1Workload>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleCloudAssuredworkloadsV1beta1Workload>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleCloudAssuredworkloadsV1beta1Workload>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Organizations$Locations$Workloads$Patch;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Organizations$Locations$Workloads$Patch;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://assuredworkloads.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$GoogleCloudAssuredworkloadsV1beta1Workload>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleCloudAssuredworkloadsV1beta1Workload>(
          parameters
        );
      }
    }

    /**
     * Restrict the list of resources allowed in the Workload environment. The current list of allowed products can be found at https://cloud.google.com/assured-workloads/docs/supported-products In addition to assuredworkloads.workload.update permission, the user should also have orgpolicy.policy.set permission on the folder resource to use this functionality.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    restrictAllowedResources(
      params: Params$Resource$Organizations$Locations$Workloads$Restrictallowedresources,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    restrictAllowedResources(
      params?: Params$Resource$Organizations$Locations$Workloads$Restrictallowedresources,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleCloudAssuredworkloadsV1beta1RestrictAllowedResourcesResponse>;
    restrictAllowedResources(
      params: Params$Resource$Organizations$Locations$Workloads$Restrictallowedresources,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    restrictAllowedResources(
      params: Params$Resource$Organizations$Locations$Workloads$Restrictallowedresources,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleCloudAssuredworkloadsV1beta1RestrictAllowedResourcesResponse>,
      callback: BodyResponseCallback<Schema$GoogleCloudAssuredworkloadsV1beta1RestrictAllowedResourcesResponse>
    ): void;
    restrictAllowedResources(
      params: Params$Resource$Organizations$Locations$Workloads$Restrictallowedresources,
      callback: BodyResponseCallback<Schema$GoogleCloudAssuredworkloadsV1beta1RestrictAllowedResourcesResponse>
    ): void;
    restrictAllowedResources(
      callback: BodyResponseCallback<Schema$GoogleCloudAssuredworkloadsV1beta1RestrictAllowedResourcesResponse>
    ): void;
    restrictAllowedResources(
      paramsOrCallback?:
        | Params$Resource$Organizations$Locations$Workloads$Restrictallowedresources
        | BodyResponseCallback<Schema$GoogleCloudAssuredworkloadsV1beta1RestrictAllowedResourcesResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleCloudAssuredworkloadsV1beta1RestrictAllowedResourcesResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleCloudAssuredworkloadsV1beta1RestrictAllowedResourcesResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleCloudAssuredworkloadsV1beta1RestrictAllowedResourcesResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Organizations$Locations$Workloads$Restrictallowedresources;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Organizations$Locations$Workloads$Restrictallowedresources;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://assuredworkloads.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl + '/v1beta1/{+name}:restrictAllowedResources'
            ).replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$GoogleCloudAssuredworkloadsV1beta1RestrictAllowedResourcesResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleCloudAssuredworkloadsV1beta1RestrictAllowedResourcesResponse>(
          parameters
        );
      }
    }
  }

  export interface Params$Resource$Organizations$Locations$Workloads$Analyzeworkloadmove
    extends StandardParameters {
    /**
     * Optional. Indicates if all child assets of the source resource should also be analyzed in addition to the source.
     */
    analyzeChildAssets?: boolean;
    /**
     * Optional. Page size. If a value is not specified, the default value of 10 is used.
     */
    pageSize?: number;
    /**
     * Optional. The page token from the previous response. It needs to be passed in the second and following requests.
     */
    pageToken?: string;
    /**
     * The source type is a project. Specify the project's relative resource name, formatted as either a project number or a project ID: "projects/{PROJECT_NUMBER\}" or "projects/{PROJECT_ID\}" For example: "projects/951040570662" when specifying a project number, or "projects/my-project-123" when specifying a project ID.
     */
    project?: string;
    /**
     * The source type is a project-based workload. Specify the workloads's relative resource name, formatted as: "organizations/{ORGANIZATION_ID\}/locations/{LOCATION_ID\}/workloads/{WORKLOAD_ID\}" For example: "organizations/123/locations/us-east1/workloads/assured-workload-1" This option is now deprecated.
     */
    source?: string;
    /**
     * Required. The resource ID of the folder-based destination workload. This workload is where the source resource will hypothetically be moved to. Specify the workload's relative resource name, formatted as: "organizations/{ORGANIZATION_ID\}/locations/{LOCATION_ID\}/workloads/{WORKLOAD_ID\}" For example: "organizations/123/locations/us-east1/workloads/assured-workload-2"
     */
    target?: string;
  }
  export interface Params$Resource$Organizations$Locations$Workloads$Create
    extends StandardParameters {
    /**
     * Optional. A identifier associated with the workload and underlying projects which allows for the break down of billing costs for a workload. The value provided for the identifier will add a label to the workload and contained projects with the identifier as the value.
     */
    externalId?: string;
    /**
     * Required. The resource name of the new Workload's parent. Must be of the form `organizations/{org_id\}/locations/{location_id\}`.
     */
    parent?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleCloudAssuredworkloadsV1beta1Workload;
  }
  export interface Params$Resource$Organizations$Locations$Workloads$Delete
    extends StandardParameters {
    /**
     * Optional. The etag of the workload. If this is provided, it must match the server's etag.
     */
    etag?: string;
    /**
     * Required. The `name` field is used to identify the workload. Format: organizations/{org_id\}/locations/{location_id\}/workloads/{workload_id\}
     */
    name?: string;
  }
  export interface Params$Resource$Organizations$Locations$Workloads$Enableresourcemonitoring
    extends StandardParameters {
    /**
     * Required. The `name` field is used to identify the workload. Format: organizations/{org_id\}/locations/{location_id\}/workloads/{workload_id\}
     */
    name?: string;
  }
  export interface Params$Resource$Organizations$Locations$Workloads$Get
    extends StandardParameters {
    /**
     * Required. The resource name of the Workload to fetch. This is the workloads's relative path in the API, formatted as "organizations/{organization_id\}/locations/{location_id\}/workloads/{workload_id\}". For example, "organizations/123/locations/us-east1/workloads/assured-workload-1".
     */
    name?: string;
  }
  export interface Params$Resource$Organizations$Locations$Workloads$List
    extends StandardParameters {
    /**
     * A custom filter for filtering by properties of a workload. At this time, only filtering by labels is supported.
     */
    filter?: string;
    /**
     * Page size.
     */
    pageSize?: number;
    /**
     * Page token returned from previous request. Page token contains context from previous request. Page token needs to be passed in the second and following requests.
     */
    pageToken?: string;
    /**
     * Required. Parent Resource to list workloads from. Must be of the form `organizations/{org_id\}/locations/{location\}`.
     */
    parent?: string;
  }
  export interface Params$Resource$Organizations$Locations$Workloads$Patch
    extends StandardParameters {
    /**
     * Optional. The resource name of the workload. Format: organizations/{organization\}/locations/{location\}/workloads/{workload\} Read-only.
     */
    name?: string;
    /**
     * Required. The list of fields to be updated.
     */
    updateMask?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleCloudAssuredworkloadsV1beta1Workload;
  }
  export interface Params$Resource$Organizations$Locations$Workloads$Restrictallowedresources
    extends StandardParameters {
    /**
     * Required. The resource name of the Workload. This is the workloads's relative path in the API, formatted as "organizations/{organization_id\}/locations/{location_id\}/workloads/{workload_id\}". For example, "organizations/123/locations/us-east1/workloads/assured-workload-1".
     */
    name?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleCloudAssuredworkloadsV1beta1RestrictAllowedResourcesRequest;
  }

  export class Resource$Organizations$Locations$Workloads$Violations {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Acknowledges an existing violation. By acknowledging a violation, users acknowledge the existence of a compliance violation in their workload and decide to ignore it due to a valid business justification. Acknowledgement is a permanent operation and it cannot be reverted.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    acknowledge(
      params: Params$Resource$Organizations$Locations$Workloads$Violations$Acknowledge,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    acknowledge(
      params?: Params$Resource$Organizations$Locations$Workloads$Violations$Acknowledge,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleCloudAssuredworkloadsV1beta1AcknowledgeViolationResponse>;
    acknowledge(
      params: Params$Resource$Organizations$Locations$Workloads$Violations$Acknowledge,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    acknowledge(
      params: Params$Resource$Organizations$Locations$Workloads$Violations$Acknowledge,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleCloudAssuredworkloadsV1beta1AcknowledgeViolationResponse>,
      callback: BodyResponseCallback<Schema$GoogleCloudAssuredworkloadsV1beta1AcknowledgeViolationResponse>
    ): void;
    acknowledge(
      params: Params$Resource$Organizations$Locations$Workloads$Violations$Acknowledge,
      callback: BodyResponseCallback<Schema$GoogleCloudAssuredworkloadsV1beta1AcknowledgeViolationResponse>
    ): void;
    acknowledge(
      callback: BodyResponseCallback<Schema$GoogleCloudAssuredworkloadsV1beta1AcknowledgeViolationResponse>
    ): void;
    acknowledge(
      paramsOrCallback?:
        | Params$Resource$Organizations$Locations$Workloads$Violations$Acknowledge
        | BodyResponseCallback<Schema$GoogleCloudAssuredworkloadsV1beta1AcknowledgeViolationResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleCloudAssuredworkloadsV1beta1AcknowledgeViolationResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleCloudAssuredworkloadsV1beta1AcknowledgeViolationResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleCloudAssuredworkloadsV1beta1AcknowledgeViolationResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Organizations$Locations$Workloads$Violations$Acknowledge;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Organizations$Locations$Workloads$Violations$Acknowledge;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://assuredworkloads.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta1/{+name}:acknowledge').replace(
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
        createAPIRequest<Schema$GoogleCloudAssuredworkloadsV1beta1AcknowledgeViolationResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleCloudAssuredworkloadsV1beta1AcknowledgeViolationResponse>(
          parameters
        );
      }
    }

    /**
     * Retrieves Assured Workload Violation based on ID.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    get(
      params: Params$Resource$Organizations$Locations$Workloads$Violations$Get,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    get(
      params?: Params$Resource$Organizations$Locations$Workloads$Violations$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleCloudAssuredworkloadsV1beta1Violation>;
    get(
      params: Params$Resource$Organizations$Locations$Workloads$Violations$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Organizations$Locations$Workloads$Violations$Get,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleCloudAssuredworkloadsV1beta1Violation>,
      callback: BodyResponseCallback<Schema$GoogleCloudAssuredworkloadsV1beta1Violation>
    ): void;
    get(
      params: Params$Resource$Organizations$Locations$Workloads$Violations$Get,
      callback: BodyResponseCallback<Schema$GoogleCloudAssuredworkloadsV1beta1Violation>
    ): void;
    get(
      callback: BodyResponseCallback<Schema$GoogleCloudAssuredworkloadsV1beta1Violation>
    ): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Organizations$Locations$Workloads$Violations$Get
        | BodyResponseCallback<Schema$GoogleCloudAssuredworkloadsV1beta1Violation>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleCloudAssuredworkloadsV1beta1Violation>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleCloudAssuredworkloadsV1beta1Violation>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleCloudAssuredworkloadsV1beta1Violation>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Organizations$Locations$Workloads$Violations$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Organizations$Locations$Workloads$Violations$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://assuredworkloads.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$GoogleCloudAssuredworkloadsV1beta1Violation>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleCloudAssuredworkloadsV1beta1Violation>(
          parameters
        );
      }
    }

    /**
     * Lists the Violations in the AssuredWorkload Environment. Callers may also choose to read across multiple Workloads as per [AIP-159](https://google.aip.dev/159) by using '-' (the hyphen or dash character) as a wildcard character instead of workload-id in the parent. Format `organizations/{org_id\}/locations/{location\}/workloads/-`
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    list(
      params: Params$Resource$Organizations$Locations$Workloads$Violations$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Organizations$Locations$Workloads$Violations$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleCloudAssuredworkloadsV1beta1ListViolationsResponse>;
    list(
      params: Params$Resource$Organizations$Locations$Workloads$Violations$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Organizations$Locations$Workloads$Violations$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleCloudAssuredworkloadsV1beta1ListViolationsResponse>,
      callback: BodyResponseCallback<Schema$GoogleCloudAssuredworkloadsV1beta1ListViolationsResponse>
    ): void;
    list(
      params: Params$Resource$Organizations$Locations$Workloads$Violations$List,
      callback: BodyResponseCallback<Schema$GoogleCloudAssuredworkloadsV1beta1ListViolationsResponse>
    ): void;
    list(
      callback: BodyResponseCallback<Schema$GoogleCloudAssuredworkloadsV1beta1ListViolationsResponse>
    ): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Organizations$Locations$Workloads$Violations$List
        | BodyResponseCallback<Schema$GoogleCloudAssuredworkloadsV1beta1ListViolationsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleCloudAssuredworkloadsV1beta1ListViolationsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleCloudAssuredworkloadsV1beta1ListViolationsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleCloudAssuredworkloadsV1beta1ListViolationsResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Organizations$Locations$Workloads$Violations$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Organizations$Locations$Workloads$Violations$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://assuredworkloads.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta1/{+parent}/violations').replace(
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
        createAPIRequest<Schema$GoogleCloudAssuredworkloadsV1beta1ListViolationsResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleCloudAssuredworkloadsV1beta1ListViolationsResponse>(
          parameters
        );
      }
    }
  }

  export interface Params$Resource$Organizations$Locations$Workloads$Violations$Acknowledge
    extends StandardParameters {
    /**
     * Required. The resource name of the Violation to acknowledge. Format: organizations/{organization\}/locations/{location\}/workloads/{workload\}/violations/{violation\}
     */
    name?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleCloudAssuredworkloadsV1beta1AcknowledgeViolationRequest;
  }
  export interface Params$Resource$Organizations$Locations$Workloads$Violations$Get
    extends StandardParameters {
    /**
     * Required. The resource name of the Violation to fetch (ie. Violation.name). Format: organizations/{organization\}/locations/{location\}/workloads/{workload\}/violations/{violation\}
     */
    name?: string;
  }
  export interface Params$Resource$Organizations$Locations$Workloads$Violations$List
    extends StandardParameters {
    /**
     * Optional. A custom filter for filtering by the Violations properties.
     */
    filter?: string;
    /**
     * The end of the time window.
     */
    'interval.endTime'?: string;
    /**
     * The start of the time window.
     */
    'interval.startTime'?: string;
    /**
     * Optional. Page size.
     */
    pageSize?: number;
    /**
     * Optional. Page token returned from previous request.
     */
    pageToken?: string;
    /**
     * Required. The Workload name. Format `organizations/{org_id\}/locations/{location\}/workloads/{workload\}`.
     */
    parent?: string;
  }
}
