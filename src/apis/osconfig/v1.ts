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

export namespace osconfig_v1 {
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
   * OS Config API
   *
   * OS management tools that can be used for patch management, patch compliance, and configuration management on VM instances.
   *
   * @example
   * ```js
   * const {google} = require('googleapis');
   * const osconfig = google.osconfig('v1');
   * ```
   */
  export class Osconfig {
    context: APIRequestContext;
    projects: Resource$Projects;

    constructor(options: GlobalOptions, google?: GoogleConfigurable) {
      this.context = {
        _options: options || {},
        google,
      };

      this.projects = new Resource$Projects(this.context);
    }
  }

  /**
   * Apt patching is completed by executing `apt-get update && apt-get upgrade`. Additional options can be set to control how this is executed.
   */
  export interface Schema$AptSettings {
    /**
     * List of packages to exclude from update. These packages will be excluded
     */
    excludes?: string[] | null;
    /**
     * An exclusive list of packages to be updated. These are the only packages that will be updated. If these packages are not installed, they will be ignored. This field cannot be specified with any other patch configuration fields.
     */
    exclusivePackages?: string[] | null;
    /**
     * By changing the type to DIST, the patching is performed using `apt-get dist-upgrade` instead.
     */
    type?: string | null;
  }
  /**
   * The request message for Operations.CancelOperation.
   */
  export interface Schema$CancelOperationRequest {}
  /**
   * Message for canceling a patch job.
   */
  export interface Schema$CancelPatchJobRequest {}
  /**
   * Common Vulnerability Scoring System version 3. For details, see https://www.first.org/cvss/specification-document
   */
  export interface Schema$CVSSv3 {
    /**
     * This metric describes the conditions beyond the attacker's control that must exist in order to exploit the vulnerability.
     */
    attackComplexity?: string | null;
    /**
     * This metric reflects the context by which vulnerability exploitation is possible.
     */
    attackVector?: string | null;
    /**
     * This metric measures the impact to the availability of the impacted component resulting from a successfully exploited vulnerability.
     */
    availabilityImpact?: string | null;
    /**
     * The base score is a function of the base metric scores. https://www.first.org/cvss/specification-document#Base-Metrics
     */
    baseScore?: number | null;
    /**
     * This metric measures the impact to the confidentiality of the information resources managed by a software component due to a successfully exploited vulnerability.
     */
    confidentialityImpact?: string | null;
    /**
     * The Exploitability sub-score equation is derived from the Base Exploitability metrics. https://www.first.org/cvss/specification-document#2-1-Exploitability-Metrics
     */
    exploitabilityScore?: number | null;
    /**
     * The Impact sub-score equation is derived from the Base Impact metrics.
     */
    impactScore?: number | null;
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
   * A generic empty message that you can re-use to avoid defining duplicated empty messages in your APIs. A typical example is to use it as the request or the response type of an API method. For instance: service Foo { rpc Bar(google.protobuf.Empty) returns (google.protobuf.Empty); \}
   */
  export interface Schema$Empty {}
  /**
   * A step that runs an executable for a PatchJob.
   */
  export interface Schema$ExecStep {
    /**
     * The ExecStepConfig for all Linux VMs targeted by the PatchJob.
     */
    linuxExecStepConfig?: Schema$ExecStepConfig;
    /**
     * The ExecStepConfig for all Windows VMs targeted by the PatchJob.
     */
    windowsExecStepConfig?: Schema$ExecStepConfig;
  }
  /**
   * Common configurations for an ExecStep.
   */
  export interface Schema$ExecStepConfig {
    /**
     * Defaults to [0]. A list of possible return values that the execution can return to indicate a success.
     */
    allowedSuccessCodes?: number[] | null;
    /**
     * A Cloud Storage object containing the executable.
     */
    gcsObject?: Schema$GcsObject;
    /**
     * The script interpreter to use to run the script. If no interpreter is specified the script will be executed directly, which will likely only succeed for scripts with [shebang lines] (https://en.wikipedia.org/wiki/Shebang_\(Unix\)).
     */
    interpreter?: string | null;
    /**
     * An absolute path to the executable on the VM.
     */
    localPath?: string | null;
  }
  /**
   * A request message to initiate patching across Compute Engine instances.
   */
  export interface Schema$ExecutePatchJobRequest {
    /**
     * Description of the patch job. Length of the description is limited to 1024 characters.
     */
    description?: string | null;
    /**
     * Display name for this patch job. This does not have to be unique.
     */
    displayName?: string | null;
    /**
     * If this patch is a dry-run only, instances are contacted but will do nothing.
     */
    dryRun?: boolean | null;
    /**
     * Duration of the patch job. After the duration ends, the patch job times out.
     */
    duration?: string | null;
    /**
     * Required. Instances to patch, either explicitly or filtered by some criteria such as zone or labels.
     */
    instanceFilter?: Schema$PatchInstanceFilter;
    /**
     * Patch configuration being applied. If omitted, instances are patched using the default configurations.
     */
    patchConfig?: Schema$PatchConfig;
    /**
     * Rollout strategy of the patch job.
     */
    rollout?: Schema$PatchRollout;
  }
  /**
   * Message encapsulating a value that can be either absolute ("fixed") or relative ("percent") to a value.
   */
  export interface Schema$FixedOrPercent {
    /**
     * Specifies a fixed value.
     */
    fixed?: number | null;
    /**
     * Specifies the relative value defined as a percentage, which will be multiplied by a reference value.
     */
    percent?: number | null;
  }
  /**
   * Cloud Storage object representation.
   */
  export interface Schema$GcsObject {
    /**
     * Required. Bucket of the Cloud Storage object.
     */
    bucket?: string | null;
    /**
     * Required. Generation number of the Cloud Storage object. This is used to ensure that the ExecStep specified by this PatchJob does not change.
     */
    generationNumber?: string | null;
    /**
     * Required. Name of the Cloud Storage object.
     */
    object?: string | null;
  }
  /**
   * OS policy assignment operation metadata provided by OS policy assignment API methods that return long running operations.
   */
  export interface Schema$GoogleCloudOsconfigV1__OSPolicyAssignmentOperationMetadata {
    /**
     * The OS policy assignment API method.
     */
    apiMethod?: string | null;
    /**
     * Reference to the `OSPolicyAssignment` API resource. Format: `projects/{project_number\}/locations/{location\}/osPolicyAssignments/{os_policy_assignment_id@revision_id\}`
     */
    osPolicyAssignment?: string | null;
    /**
     * Rollout start time
     */
    rolloutStartTime?: string | null;
    /**
     * State of the rollout
     */
    rolloutState?: string | null;
    /**
     * Rollout update time
     */
    rolloutUpdateTime?: string | null;
  }
  /**
   * Googet patching is performed by running `googet update`.
   */
  export interface Schema$GooSettings {}
  /**
   * This API resource represents the available inventory data for a Compute Engine virtual machine (VM) instance at a given point in time. You can use this API resource to determine the inventory data of your VM. For more information, see [Information provided by OS inventory management](https://cloud.google.com/compute/docs/instances/os-inventory-management#data-collected).
   */
  export interface Schema$Inventory {
    /**
     * Inventory items related to the VM keyed by an opaque unique identifier for each inventory item. The identifier is unique to each distinct and addressable inventory item and will change, when there is a new package version.
     */
    items?: {[key: string]: Schema$InventoryItem} | null;
    /**
     * Output only. The `Inventory` API resource name. Format: `projects/{project_number\}/locations/{location\}/instances/{instance_id\}/inventory`
     */
    name?: string | null;
    /**
     * Base level operating system information for the VM.
     */
    osInfo?: Schema$InventoryOsInfo;
    /**
     * Output only. Timestamp of the last reported inventory for the VM.
     */
    updateTime?: string | null;
  }
  /**
   * A single piece of inventory on a VM.
   */
  export interface Schema$InventoryItem {
    /**
     * Software package available to be installed on the VM instance.
     */
    availablePackage?: Schema$InventorySoftwarePackage;
    /**
     * When this inventory item was first detected.
     */
    createTime?: string | null;
    /**
     * Identifier for this item, unique across items for this VM.
     */
    id?: string | null;
    /**
     * Software package present on the VM instance.
     */
    installedPackage?: Schema$InventorySoftwarePackage;
    /**
     * The origin of this inventory item.
     */
    originType?: string | null;
    /**
     * The specific type of inventory, correlating to its specific details.
     */
    type?: string | null;
    /**
     * When this inventory item was last modified.
     */
    updateTime?: string | null;
  }
  /**
   * Operating system information for the VM.
   */
  export interface Schema$InventoryOsInfo {
    /**
     * The system architecture of the operating system.
     */
    architecture?: string | null;
    /**
     * The VM hostname.
     */
    hostname?: string | null;
    /**
     * The kernel release of the operating system.
     */
    kernelRelease?: string | null;
    /**
     * The kernel version of the operating system.
     */
    kernelVersion?: string | null;
    /**
     * The operating system long name. For example 'Debian GNU/Linux 9' or 'Microsoft Window Server 2019 Datacenter'.
     */
    longName?: string | null;
    /**
     * The current version of the OS Config agent running on the VM.
     */
    osconfigAgentVersion?: string | null;
    /**
     * The operating system short name. For example, 'windows' or 'debian'.
     */
    shortName?: string | null;
    /**
     * The version of the operating system.
     */
    version?: string | null;
  }
  /**
   * Software package information of the operating system.
   */
  export interface Schema$InventorySoftwarePackage {
    /**
     * Details of an APT package. For details about the apt package manager, see https://wiki.debian.org/Apt.
     */
    aptPackage?: Schema$InventoryVersionedPackage;
    /**
     * Details of a COS package.
     */
    cosPackage?: Schema$InventoryVersionedPackage;
    /**
     * Details of a Googet package. For details about the googet package manager, see https://github.com/google/googet.
     */
    googetPackage?: Schema$InventoryVersionedPackage;
    /**
     * Details of a Windows Quick Fix engineering package. See https://docs.microsoft.com/en-us/windows/win32/cimwin32prov/win32-quickfixengineering for info in Windows Quick Fix Engineering.
     */
    qfePackage?: Schema$InventoryWindowsQuickFixEngineeringPackage;
    /**
     * Details of Windows Application.
     */
    windowsApplication?: Schema$InventoryWindowsApplication;
    /**
     * Details of a Windows Update package. See https://docs.microsoft.com/en-us/windows/win32/api/_wua/ for information about Windows Update.
     */
    wuaPackage?: Schema$InventoryWindowsUpdatePackage;
    /**
     * Yum package info. For details about the yum package manager, see https://access.redhat.com/documentation/en-us/red_hat_enterprise_linux/6/html/deployment_guide/ch-yum.
     */
    yumPackage?: Schema$InventoryVersionedPackage;
    /**
     * Details of a Zypper package. For details about the Zypper package manager, see https://en.opensuse.org/SDB:Zypper_manual.
     */
    zypperPackage?: Schema$InventoryVersionedPackage;
    /**
     * Details of a Zypper patch. For details about the Zypper package manager, see https://en.opensuse.org/SDB:Zypper_manual.
     */
    zypperPatch?: Schema$InventoryZypperPatch;
  }
  /**
   * Information related to the a standard versioned package. This includes package info for APT, Yum, Zypper, and Googet package managers.
   */
  export interface Schema$InventoryVersionedPackage {
    /**
     * The system architecture this package is intended for.
     */
    architecture?: string | null;
    /**
     * The name of the package.
     */
    packageName?: string | null;
    /**
     * The version of the package.
     */
    version?: string | null;
  }
  /**
   * Contains information about a Windows application that is retrieved from the Windows Registry. For more information about these fields, see: https://docs.microsoft.com/en-us/windows/win32/msi/uninstall-registry-key
   */
  export interface Schema$InventoryWindowsApplication {
    /**
     * The name of the application or product.
     */
    displayName?: string | null;
    /**
     * The version of the product or application in string format.
     */
    displayVersion?: string | null;
    /**
     * The internet address for technical support.
     */
    helpLink?: string | null;
    /**
     * The last time this product received service. The value of this property is replaced each time a patch is applied or removed from the product or the command-line option is used to repair the product.
     */
    installDate?: Schema$Date;
    /**
     * The name of the manufacturer for the product or application.
     */
    publisher?: string | null;
  }
  /**
   * Information related to a Quick Fix Engineering package. Fields are taken from Windows QuickFixEngineering Interface and match the source names: https://docs.microsoft.com/en-us/windows/win32/cimwin32prov/win32-quickfixengineering
   */
  export interface Schema$InventoryWindowsQuickFixEngineeringPackage {
    /**
     * A short textual description of the QFE update.
     */
    caption?: string | null;
    /**
     * A textual description of the QFE update.
     */
    description?: string | null;
    /**
     * Unique identifier associated with a particular QFE update.
     */
    hotFixId?: string | null;
    /**
     * Date that the QFE update was installed. Mapped from installed_on field.
     */
    installTime?: string | null;
  }
  /**
   * Details related to a Windows Update package. Field data and names are taken from Windows Update API IUpdate Interface: https://docs.microsoft.com/en-us/windows/win32/api/_wua/ Descriptive fields like title, and description are localized based on the locale of the VM being updated.
   */
  export interface Schema$InventoryWindowsUpdatePackage {
    /**
     * The categories that are associated with this update package.
     */
    categories?: Schema$InventoryWindowsUpdatePackageWindowsUpdateCategory[];
    /**
     * The localized description of the update package.
     */
    description?: string | null;
    /**
     * A collection of Microsoft Knowledge Base article IDs that are associated with the update package.
     */
    kbArticleIds?: string[] | null;
    /**
     * The last published date of the update, in (UTC) date and time.
     */
    lastDeploymentChangeTime?: string | null;
    /**
     * A collection of URLs that provide more information about the update package.
     */
    moreInfoUrls?: string[] | null;
    /**
     * The revision number of this update package.
     */
    revisionNumber?: number | null;
    /**
     * A hyperlink to the language-specific support information for the update.
     */
    supportUrl?: string | null;
    /**
     * The localized title of the update package.
     */
    title?: string | null;
    /**
     * Gets the identifier of an update package. Stays the same across revisions.
     */
    updateId?: string | null;
  }
  /**
   * Categories specified by the Windows Update.
   */
  export interface Schema$InventoryWindowsUpdatePackageWindowsUpdateCategory {
    /**
     * The identifier of the windows update category.
     */
    id?: string | null;
    /**
     * The name of the windows update category.
     */
    name?: string | null;
  }
  /**
   * Details related to a Zypper Patch.
   */
  export interface Schema$InventoryZypperPatch {
    /**
     * The category of the patch.
     */
    category?: string | null;
    /**
     * The name of the patch.
     */
    patchName?: string | null;
    /**
     * The severity specified for this patch
     */
    severity?: string | null;
    /**
     * Any summary information provided about this patch.
     */
    summary?: string | null;
  }
  /**
   * A response message for listing inventory data for all VMs in a specified location.
   */
  export interface Schema$ListInventoriesResponse {
    /**
     * List of inventory objects.
     */
    inventories?: Schema$Inventory[];
    /**
     * The pagination token to retrieve the next page of inventory objects.
     */
    nextPageToken?: string | null;
  }
  /**
   * A response message for listing OS Policy assignment reports including the page of results and page token.
   */
  export interface Schema$ListOSPolicyAssignmentReportsResponse {
    /**
     * The pagination token to retrieve the next page of OS policy assignment report objects.
     */
    nextPageToken?: string | null;
    /**
     * List of OS policy assignment reports.
     */
    osPolicyAssignmentReports?: Schema$OSPolicyAssignmentReport[];
  }
  /**
   * A response message for listing all revisions for a OS policy assignment.
   */
  export interface Schema$ListOSPolicyAssignmentRevisionsResponse {
    /**
     * The pagination token to retrieve the next page of OS policy assignment revisions.
     */
    nextPageToken?: string | null;
    /**
     * The OS policy assignment revisions
     */
    osPolicyAssignments?: Schema$OSPolicyAssignment[];
  }
  /**
   * A response message for listing all assignments under given parent.
   */
  export interface Schema$ListOSPolicyAssignmentsResponse {
    /**
     * The pagination token to retrieve the next page of OS policy assignments.
     */
    nextPageToken?: string | null;
    /**
     * The list of assignments
     */
    osPolicyAssignments?: Schema$OSPolicyAssignment[];
  }
  /**
   * A response message for listing patch deployments.
   */
  export interface Schema$ListPatchDeploymentsResponse {
    /**
     * A pagination token that can be used to get the next page of patch deployments.
     */
    nextPageToken?: string | null;
    /**
     * The list of patch deployments.
     */
    patchDeployments?: Schema$PatchDeployment[];
  }
  /**
   * A response message for listing the instances details for a patch job.
   */
  export interface Schema$ListPatchJobInstanceDetailsResponse {
    /**
     * A pagination token that can be used to get the next page of results.
     */
    nextPageToken?: string | null;
    /**
     * A list of instance status.
     */
    patchJobInstanceDetails?: Schema$PatchJobInstanceDetails[];
  }
  /**
   * A response message for listing patch jobs.
   */
  export interface Schema$ListPatchJobsResponse {
    /**
     * A pagination token that can be used to get the next page of results.
     */
    nextPageToken?: string | null;
    /**
     * The list of patch jobs.
     */
    patchJobs?: Schema$PatchJob[];
  }
  /**
   * A response message for listing vulnerability reports for all VM instances in the specified location.
   */
  export interface Schema$ListVulnerabilityReportsResponse {
    /**
     * The pagination token to retrieve the next page of vulnerabilityReports object.
     */
    nextPageToken?: string | null;
    /**
     * List of vulnerabilityReport objects.
     */
    vulnerabilityReports?: Schema$VulnerabilityReport[];
  }
  /**
   * Represents a monthly schedule. An example of a valid monthly schedule is "on the third Tuesday of the month" or "on the 15th of the month".
   */
  export interface Schema$MonthlySchedule {
    /**
     * Required. One day of the month. 1-31 indicates the 1st to the 31st day. -1 indicates the last day of the month. Months without the target day will be skipped. For example, a schedule to run "every month on the 31st" will not run in February, April, June, etc.
     */
    monthDay?: number | null;
    /**
     * Required. Week day in a month.
     */
    weekDayOfMonth?: Schema$WeekDayOfMonth;
  }
  /**
   * Sets the time for a one time patch deployment. Timestamp is in [RFC3339](https://www.ietf.org/rfc/rfc3339.txt) text format.
   */
  export interface Schema$OneTimeSchedule {
    /**
     * Required. The desired patch job execution time.
     */
    executeTime?: string | null;
  }
  /**
   * This resource represents a long-running operation that is the result of a network API call.
   */
  export interface Schema$Operation {
    /**
     * If the value is `false`, it means the operation is still in progress. If `true`, the operation is completed, and either `error` or `response` is available.
     */
    done?: boolean | null;
    /**
     * The error result of the operation in case of failure or cancellation.
     */
    error?: Schema$Status;
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
   * An OS policy defines the desired state configuration for a VM.
   */
  export interface Schema$OSPolicy {
    /**
     * This flag determines the OS policy compliance status when none of the resource groups within the policy are applicable for a VM. Set this value to `true` if the policy needs to be reported as compliant even if the policy has nothing to validate or enforce.
     */
    allowNoResourceGroupMatch?: boolean | null;
    /**
     * Policy description. Length of the description is limited to 1024 characters.
     */
    description?: string | null;
    /**
     * Required. The id of the OS policy with the following restrictions: * Must contain only lowercase letters, numbers, and hyphens. * Must start with a letter. * Must be between 1-63 characters. * Must end with a number or a letter. * Must be unique within the assignment.
     */
    id?: string | null;
    /**
     * Required. Policy mode
     */
    mode?: string | null;
    /**
     * Required. List of resource groups for the policy. For a particular VM, resource groups are evaluated in the order specified and the first resource group that is applicable is selected and the rest are ignored. If none of the resource groups are applicable for a VM, the VM is considered to be non-compliant w.r.t this policy. This behavior can be toggled by the flag `allow_no_resource_group_match`
     */
    resourceGroups?: Schema$OSPolicyResourceGroup[];
  }
  /**
   * OS policy assignment is an API resource that is used to apply a set of OS policies to a dynamically targeted group of Compute Engine VM instances. An OS policy is used to define the desired state configuration for a Compute Engine VM instance through a set of configuration resources that provide capabilities such as installing or removing software packages, or executing a script. For more information about the OS policy resource definitions and examples, see [OS policy and OS policy assignment](https://cloud.google.com/compute/docs/os-configuration-management/working-with-os-policies).
   */
  export interface Schema$OSPolicyAssignment {
    /**
     * Output only. Indicates that this revision has been successfully rolled out in this zone and new VMs will be assigned OS policies from this revision. For a given OS policy assignment, there is only one revision with a value of `true` for this field.
     */
    baseline?: boolean | null;
    /**
     * Output only. Indicates that this revision deletes the OS policy assignment.
     */
    deleted?: boolean | null;
    /**
     * OS policy assignment description. Length of the description is limited to 1024 characters.
     */
    description?: string | null;
    /**
     * The etag for this OS policy assignment. If this is provided on update, it must match the server's etag.
     */
    etag?: string | null;
    /**
     * Required. Filter to select VMs.
     */
    instanceFilter?: Schema$OSPolicyAssignmentInstanceFilter;
    /**
     * Resource name. Format: `projects/{project_number\}/locations/{location\}/osPolicyAssignments/{os_policy_assignment_id\}` This field is ignored when you create an OS policy assignment.
     */
    name?: string | null;
    /**
     * Required. List of OS policies to be applied to the VMs.
     */
    osPolicies?: Schema$OSPolicy[];
    /**
     * Output only. Indicates that reconciliation is in progress for the revision. This value is `true` when the `rollout_state` is one of: * IN_PROGRESS * CANCELLING
     */
    reconciling?: boolean | null;
    /**
     * Output only. The timestamp that the revision was created.
     */
    revisionCreateTime?: string | null;
    /**
     * Output only. The assignment revision ID A new revision is committed whenever a rollout is triggered for a OS policy assignment
     */
    revisionId?: string | null;
    /**
     * Required. Rollout to deploy the OS policy assignment. A rollout is triggered in the following situations: 1) OSPolicyAssignment is created. 2) OSPolicyAssignment is updated and the update contains changes to one of the following fields: - instance_filter - os_policies 3) OSPolicyAssignment is deleted.
     */
    rollout?: Schema$OSPolicyAssignmentRollout;
    /**
     * Output only. OS policy assignment rollout state
     */
    rolloutState?: string | null;
    /**
     * Output only. Server generated unique id for the OS policy assignment resource.
     */
    uid?: string | null;
  }
  /**
   * Filters to select target VMs for an assignment. If more than one filter criteria is specified below, a VM will be selected if and only if it satisfies all of them.
   */
  export interface Schema$OSPolicyAssignmentInstanceFilter {
    /**
     * Target all VMs in the project. If true, no other criteria is permitted.
     */
    all?: boolean | null;
    /**
     * List of label sets used for VM exclusion. If the list has more than one label set, the VM is excluded if any of the label sets are applicable for the VM.
     */
    exclusionLabels?: Schema$OSPolicyAssignmentLabelSet[];
    /**
     * List of label sets used for VM inclusion. If the list has more than one `LabelSet`, the VM is included if any of the label sets are applicable for the VM.
     */
    inclusionLabels?: Schema$OSPolicyAssignmentLabelSet[];
    /**
     * List of inventories to select VMs. A VM is selected if its inventory data matches at least one of the following inventories.
     */
    inventories?: Schema$OSPolicyAssignmentInstanceFilterInventory[];
  }
  /**
   * VM inventory details.
   */
  export interface Schema$OSPolicyAssignmentInstanceFilterInventory {
    /**
     * Required. The OS short name
     */
    osShortName?: string | null;
    /**
     * The OS version Prefix matches are supported if asterisk(*) is provided as the last character. For example, to match all versions with a major version of `7`, specify the following value for this field `7.*` An empty string matches all OS versions.
     */
    osVersion?: string | null;
  }
  /**
   * Message representing label set. * A label is a key value pair set for a VM. * A LabelSet is a set of labels. * Labels within a LabelSet are ANDed. In other words, a LabelSet is applicable for a VM only if it matches all the labels in the LabelSet. * Example: A LabelSet with 2 labels: `env=prod` and `type=webserver` will only be applicable for those VMs with both labels present.
   */
  export interface Schema$OSPolicyAssignmentLabelSet {
    /**
     * Labels are identified by key/value pairs in this map. A VM should contain all the key/value pairs specified in this map to be selected.
     */
    labels?: {[key: string]: string} | null;
  }
  /**
   * OS policy assignment operation metadata provided by OS policy assignment API methods that return long running operations.
   */
  export interface Schema$OSPolicyAssignmentOperationMetadata {
    /**
     * The OS policy assignment API method.
     */
    apiMethod?: string | null;
    /**
     * Reference to the `OSPolicyAssignment` API resource. Format: `projects/{project_number\}/locations/{location\}/osPolicyAssignments/{os_policy_assignment_id@revision_id\}`
     */
    osPolicyAssignment?: string | null;
    /**
     * Rollout start time
     */
    rolloutStartTime?: string | null;
    /**
     * State of the rollout
     */
    rolloutState?: string | null;
    /**
     * Rollout update time
     */
    rolloutUpdateTime?: string | null;
  }
  /**
   * A report of the OS policy assignment status for a given instance.
   */
  export interface Schema$OSPolicyAssignmentReport {
    /**
     * The Compute Engine VM instance name.
     */
    instance?: string | null;
    /**
     * Unique identifier of the last attempted run to apply the OS policies associated with this assignment on the VM. This ID is logged by the OS Config agent while applying the OS policies associated with this assignment on the VM. NOTE: If the service is unable to successfully connect to the agent for this run, then this id will not be available in the agent logs.
     */
    lastRunId?: string | null;
    /**
     * The `OSPolicyAssignmentReport` API resource name. Format: `projects/{project_number\}/locations/{location\}/instances/{instance_id\}/osPolicyAssignments/{os_policy_assignment_id\}/report`
     */
    name?: string | null;
    /**
     * Reference to the `OSPolicyAssignment` API resource that the `OSPolicy` belongs to. Format: `projects/{project_number\}/locations/{location\}/osPolicyAssignments/{os_policy_assignment_id@revision_id\}`
     */
    osPolicyAssignment?: string | null;
    /**
     * Compliance data for each `OSPolicy` that is applied to the VM.
     */
    osPolicyCompliances?: Schema$OSPolicyAssignmentReportOSPolicyCompliance[];
    /**
     * Timestamp for when the report was last generated.
     */
    updateTime?: string | null;
  }
  /**
   * Compliance data for an OS policy
   */
  export interface Schema$OSPolicyAssignmentReportOSPolicyCompliance {
    /**
     * The compliance state of the OS policy.
     */
    complianceState?: string | null;
    /**
     * The reason for the OS policy to be in an unknown compliance state. This field is always populated when `compliance_state` is `UNKNOWN`. If populated, the field can contain one of the following values: * `vm-not-running`: The VM was not running. * `os-policies-not-supported-by-agent`: The version of the OS Config agent running on the VM does not support running OS policies. * `no-agent-detected`: The OS Config agent is not detected for the VM. * `resource-execution-errors`: The OS Config agent encountered errors while executing one or more resources in the policy. See `os_policy_resource_compliances` for details. * `task-timeout`: The task sent to the agent to apply the policy timed out. * `unexpected-agent-state`: The OS Config agent did not report the final status of the task that attempted to apply the policy. Instead, the agent unexpectedly started working on a different task. This mostly happens when the agent or VM unexpectedly restarts while applying OS policies. * `internal-service-errors`: Internal service errors were encountered while attempting to apply the policy.
     */
    complianceStateReason?: string | null;
    /**
     * The OS policy id
     */
    osPolicyId?: string | null;
    /**
     * Compliance data for each resource within the policy that is applied to the VM.
     */
    osPolicyResourceCompliances?: Schema$OSPolicyAssignmentReportOSPolicyComplianceOSPolicyResourceCompliance[];
  }
  /**
   * Compliance data for an OS policy resource.
   */
  export interface Schema$OSPolicyAssignmentReportOSPolicyComplianceOSPolicyResourceCompliance {
    /**
     * The compliance state of the resource.
     */
    complianceState?: string | null;
    /**
     * A reason for the resource to be in the given compliance state. This field is always populated when `compliance_state` is `UNKNOWN`. The following values are supported when `compliance_state == UNKNOWN` * `execution-errors`: Errors were encountered by the agent while executing the resource and the compliance state couldn't be determined. * `execution-skipped-by-agent`: Resource execution was skipped by the agent because errors were encountered while executing prior resources in the OS policy. * `os-policy-execution-attempt-failed`: The execution of the OS policy containing this resource failed and the compliance state couldn't be determined.
     */
    complianceStateReason?: string | null;
    /**
     * Ordered list of configuration completed by the agent for the OS policy resource.
     */
    configSteps?: Schema$OSPolicyAssignmentReportOSPolicyComplianceOSPolicyResourceComplianceOSPolicyResourceConfigStep[];
    /**
     * ExecResource specific output.
     */
    execResourceOutput?: Schema$OSPolicyAssignmentReportOSPolicyComplianceOSPolicyResourceComplianceExecResourceOutput;
    /**
     * The ID of the OS policy resource.
     */
    osPolicyResourceId?: string | null;
  }
  /**
   * ExecResource specific output.
   */
  export interface Schema$OSPolicyAssignmentReportOSPolicyComplianceOSPolicyResourceComplianceExecResourceOutput {
    /**
     * Output from enforcement phase output file (if run). Output size is limited to 100K bytes.
     */
    enforcementOutput?: string | null;
  }
  /**
   * Step performed by the OS Config agent for configuring an `OSPolicy` resource to its desired state.
   */
  export interface Schema$OSPolicyAssignmentReportOSPolicyComplianceOSPolicyResourceComplianceOSPolicyResourceConfigStep {
    /**
     * An error message recorded during the execution of this step. Only populated if errors were encountered during this step execution.
     */
    errorMessage?: string | null;
    /**
     * Configuration step type.
     */
    type?: string | null;
  }
  /**
   * Message to configure the rollout at the zonal level for the OS policy assignment.
   */
  export interface Schema$OSPolicyAssignmentRollout {
    /**
     * Required. The maximum number (or percentage) of VMs per zone to disrupt at any given moment.
     */
    disruptionBudget?: Schema$FixedOrPercent;
    /**
     * Required. This determines the minimum duration of time to wait after the configuration changes are applied through the current rollout. A VM continues to count towards the `disruption_budget` at least until this duration of time has passed after configuration changes are applied.
     */
    minWaitDuration?: string | null;
  }
  /**
   * Filtering criteria to select VMs based on inventory details.
   */
  export interface Schema$OSPolicyInventoryFilter {
    /**
     * Required. The OS short name
     */
    osShortName?: string | null;
    /**
     * The OS version Prefix matches are supported if asterisk(*) is provided as the last character. For example, to match all versions with a major version of `7`, specify the following value for this field `7.*` An empty string matches all OS versions.
     */
    osVersion?: string | null;
  }
  /**
   * An OS policy resource is used to define the desired state configuration and provides a specific functionality like installing/removing packages, executing a script etc. The system ensures that resources are always in their desired state by taking necessary actions if they have drifted from their desired state.
   */
  export interface Schema$OSPolicyResource {
    /**
     * Exec resource
     */
    exec?: Schema$OSPolicyResourceExecResource;
    /**
     * File resource
     */
    file?: Schema$OSPolicyResourceFileResource;
    /**
     * Required. The id of the resource with the following restrictions: * Must contain only lowercase letters, numbers, and hyphens. * Must start with a letter. * Must be between 1-63 characters. * Must end with a number or a letter. * Must be unique within the OS policy.
     */
    id?: string | null;
    /**
     * Package resource
     */
    pkg?: Schema$OSPolicyResourcePackageResource;
    /**
     * Package repository resource
     */
    repository?: Schema$OSPolicyResourceRepositoryResource;
  }
  /**
   * A resource that allows executing scripts on the VM. The `ExecResource` has 2 stages: `validate` and `enforce` and both stages accept a script as an argument to execute. When the `ExecResource` is applied by the agent, it first executes the script in the `validate` stage. The `validate` stage can signal that the `ExecResource` is already in the desired state by returning an exit code of `100`. If the `ExecResource` is not in the desired state, it should return an exit code of `101`. Any other exit code returned by this stage is considered an error. If the `ExecResource` is not in the desired state based on the exit code from the `validate` stage, the agent proceeds to execute the script from the `enforce` stage. If the `ExecResource` is already in the desired state, the `enforce` stage will not be run. Similar to `validate` stage, the `enforce` stage should return an exit code of `100` to indicate that the resource in now in its desired state. Any other exit code is considered an error. NOTE: An exit code of `100` was chosen over `0` (and `101` vs `1`) to have an explicit indicator of `in desired state`, `not in desired state` and errors. Because, for example, Powershell will always return an exit code of `0` unless an `exit` statement is provided in the script. So, for reasons of consistency and being explicit, exit codes `100` and `101` were chosen.
   */
  export interface Schema$OSPolicyResourceExecResource {
    /**
     * What to run to bring this resource into the desired state. An exit code of 100 indicates "success", any other exit code indicates a failure running enforce.
     */
    enforce?: Schema$OSPolicyResourceExecResourceExec;
    /**
     * Required. What to run to validate this resource is in the desired state. An exit code of 100 indicates "in desired state", and exit code of 101 indicates "not in desired state". Any other exit code indicates a failure running validate.
     */
    validate?: Schema$OSPolicyResourceExecResourceExec;
  }
  /**
   * A file or script to execute.
   */
  export interface Schema$OSPolicyResourceExecResourceExec {
    /**
     * Optional arguments to pass to the source during execution.
     */
    args?: string[] | null;
    /**
     * A remote or local file.
     */
    file?: Schema$OSPolicyResourceFile;
    /**
     * Required. The script interpreter to use.
     */
    interpreter?: string | null;
    /**
     * Only recorded for enforce Exec. Path to an output file (that is created by this Exec) whose content will be recorded in OSPolicyResourceCompliance after a successful run. Absence or failure to read this file will result in this ExecResource being non-compliant. Output file size is limited to 100K bytes.
     */
    outputFilePath?: string | null;
    /**
     * An inline script. The size of the script is limited to 32KiB.
     */
    script?: string | null;
  }
  /**
   * A remote or local file.
   */
  export interface Schema$OSPolicyResourceFile {
    /**
     * Defaults to false. When false, files are subject to validations based on the file type: Remote: A checksum must be specified. Cloud Storage: An object generation number must be specified.
     */
    allowInsecure?: boolean | null;
    /**
     * A Cloud Storage object.
     */
    gcs?: Schema$OSPolicyResourceFileGcs;
    /**
     * A local path within the VM to use.
     */
    localPath?: string | null;
    /**
     * A generic remote file.
     */
    remote?: Schema$OSPolicyResourceFileRemote;
  }
  /**
   * Specifies a file available as a Cloud Storage Object.
   */
  export interface Schema$OSPolicyResourceFileGcs {
    /**
     * Required. Bucket of the Cloud Storage object.
     */
    bucket?: string | null;
    /**
     * Generation number of the Cloud Storage object.
     */
    generation?: string | null;
    /**
     * Required. Name of the Cloud Storage object.
     */
    object?: string | null;
  }
  /**
   * Specifies a file available via some URI.
   */
  export interface Schema$OSPolicyResourceFileRemote {
    /**
     * SHA256 checksum of the remote file.
     */
    sha256Checksum?: string | null;
    /**
     * Required. URI from which to fetch the object. It should contain both the protocol and path following the format `{protocol\}://{location\}`.
     */
    uri?: string | null;
  }
  /**
   * A resource that manages the state of a file.
   */
  export interface Schema$OSPolicyResourceFileResource {
    /**
     * A a file with this content. The size of the content is limited to 32KiB.
     */
    content?: string | null;
    /**
     * A remote or local source.
     */
    file?: Schema$OSPolicyResourceFile;
    /**
     * Required. The absolute path of the file within the VM.
     */
    path?: string | null;
    /**
     * Consists of three octal digits which represent, in order, the permissions of the owner, group, and other users for the file (similarly to the numeric mode used in the linux chmod utility). Each digit represents a three bit number with the 4 bit corresponding to the read permissions, the 2 bit corresponds to the write bit, and the one bit corresponds to the execute permission. Default behavior is 755. Below are some examples of permissions and their associated values: read, write, and execute: 7 read and execute: 5 read and write: 6 read only: 4
     */
    permissions?: string | null;
    /**
     * Required. Desired state of the file.
     */
    state?: string | null;
  }
  /**
   * Resource groups provide a mechanism to group OS policy resources. Resource groups enable OS policy authors to create a single OS policy to be applied to VMs running different operating Systems. When the OS policy is applied to a target VM, the appropriate resource group within the OS policy is selected based on the `OSFilter` specified within the resource group.
   */
  export interface Schema$OSPolicyResourceGroup {
    /**
     * List of inventory filters for the resource group. The resources in this resource group are applied to the target VM if it satisfies at least one of the following inventory filters. For example, to apply this resource group to VMs running either `RHEL` or `CentOS` operating systems, specify 2 items for the list with following values: inventory_filters[0].os_short_name='rhel' and inventory_filters[1].os_short_name='centos' If the list is empty, this resource group will be applied to the target VM unconditionally.
     */
    inventoryFilters?: Schema$OSPolicyInventoryFilter[];
    /**
     * Required. List of resources configured for this resource group. The resources are executed in the exact order specified here.
     */
    resources?: Schema$OSPolicyResource[];
  }
  /**
   * A resource that manages a system package.
   */
  export interface Schema$OSPolicyResourcePackageResource {
    /**
     * A package managed by Apt.
     */
    apt?: Schema$OSPolicyResourcePackageResourceAPT;
    /**
     * A deb package file.
     */
    deb?: Schema$OSPolicyResourcePackageResourceDeb;
    /**
     * Required. The desired state the agent should maintain for this package.
     */
    desiredState?: string | null;
    /**
     * A package managed by GooGet.
     */
    googet?: Schema$OSPolicyResourcePackageResourceGooGet;
    /**
     * An MSI package.
     */
    msi?: Schema$OSPolicyResourcePackageResourceMSI;
    /**
     * An rpm package file.
     */
    rpm?: Schema$OSPolicyResourcePackageResourceRPM;
    /**
     * A package managed by YUM.
     */
    yum?: Schema$OSPolicyResourcePackageResourceYUM;
    /**
     * A package managed by Zypper.
     */
    zypper?: Schema$OSPolicyResourcePackageResourceZypper;
  }
  /**
   * A package managed by APT. - install: `apt-get update && apt-get -y install [name]` - remove: `apt-get -y remove [name]`
   */
  export interface Schema$OSPolicyResourcePackageResourceAPT {
    /**
     * Required. Package name.
     */
    name?: string | null;
  }
  /**
   * A deb package file. dpkg packages only support INSTALLED state.
   */
  export interface Schema$OSPolicyResourcePackageResourceDeb {
    /**
     * Whether dependencies should also be installed. - install when false: `dpkg -i package` - install when true: `apt-get update && apt-get -y install package.deb`
     */
    pullDeps?: boolean | null;
    /**
     * Required. A deb package.
     */
    source?: Schema$OSPolicyResourceFile;
  }
  /**
   * A package managed by GooGet. - install: `googet -noconfirm install package` - remove: `googet -noconfirm remove package`
   */
  export interface Schema$OSPolicyResourcePackageResourceGooGet {
    /**
     * Required. Package name.
     */
    name?: string | null;
  }
  /**
   * An MSI package. MSI packages only support INSTALLED state.
   */
  export interface Schema$OSPolicyResourcePackageResourceMSI {
    /**
     * Additional properties to use during installation. This should be in the format of Property=Setting. Appended to the defaults of `ACTION=INSTALL REBOOT=ReallySuppress`.
     */
    properties?: string[] | null;
    /**
     * Required. The MSI package.
     */
    source?: Schema$OSPolicyResourceFile;
  }
  /**
   * An RPM package file. RPM packages only support INSTALLED state.
   */
  export interface Schema$OSPolicyResourcePackageResourceRPM {
    /**
     * Whether dependencies should also be installed. - install when false: `rpm --upgrade --replacepkgs package.rpm` - install when true: `yum -y install package.rpm` or `zypper -y install package.rpm`
     */
    pullDeps?: boolean | null;
    /**
     * Required. An rpm package.
     */
    source?: Schema$OSPolicyResourceFile;
  }
  /**
   * A package managed by YUM. - install: `yum -y install package` - remove: `yum -y remove package`
   */
  export interface Schema$OSPolicyResourcePackageResourceYUM {
    /**
     * Required. Package name.
     */
    name?: string | null;
  }
  /**
   * A package managed by Zypper. - install: `zypper -y install package` - remove: `zypper -y rm package`
   */
  export interface Schema$OSPolicyResourcePackageResourceZypper {
    /**
     * Required. Package name.
     */
    name?: string | null;
  }
  /**
   * A resource that manages a package repository.
   */
  export interface Schema$OSPolicyResourceRepositoryResource {
    /**
     * An Apt Repository.
     */
    apt?: Schema$OSPolicyResourceRepositoryResourceAptRepository;
    /**
     * A Goo Repository.
     */
    goo?: Schema$OSPolicyResourceRepositoryResourceGooRepository;
    /**
     * A Yum Repository.
     */
    yum?: Schema$OSPolicyResourceRepositoryResourceYumRepository;
    /**
     * A Zypper Repository.
     */
    zypper?: Schema$OSPolicyResourceRepositoryResourceZypperRepository;
  }
  /**
   * Represents a single apt package repository. These will be added to a repo file that will be managed at `/etc/apt/sources.list.d/google_osconfig.list`.
   */
  export interface Schema$OSPolicyResourceRepositoryResourceAptRepository {
    /**
     * Required. Type of archive files in this repository.
     */
    archiveType?: string | null;
    /**
     * Required. List of components for this repository. Must contain at least one item.
     */
    components?: string[] | null;
    /**
     * Required. Distribution of this repository.
     */
    distribution?: string | null;
    /**
     * URI of the key file for this repository. The agent maintains a keyring at `/etc/apt/trusted.gpg.d/osconfig_agent_managed.gpg`.
     */
    gpgKey?: string | null;
    /**
     * Required. URI for this repository.
     */
    uri?: string | null;
  }
  /**
   * Represents a Goo package repository. These are added to a repo file that is managed at `C:/ProgramData/GooGet/repos/google_osconfig.repo`.
   */
  export interface Schema$OSPolicyResourceRepositoryResourceGooRepository {
    /**
     * Required. The name of the repository.
     */
    name?: string | null;
    /**
     * Required. The url of the repository.
     */
    url?: string | null;
  }
  /**
   * Represents a single yum package repository. These are added to a repo file that is managed at `/etc/yum.repos.d/google_osconfig.repo`.
   */
  export interface Schema$OSPolicyResourceRepositoryResourceYumRepository {
    /**
     * Required. The location of the repository directory.
     */
    baseUrl?: string | null;
    /**
     * The display name of the repository.
     */
    displayName?: string | null;
    /**
     * URIs of GPG keys.
     */
    gpgKeys?: string[] | null;
    /**
     * Required. A one word, unique name for this repository. This is the `repo id` in the yum config file and also the `display_name` if `display_name` is omitted. This id is also used as the unique identifier when checking for resource conflicts.
     */
    id?: string | null;
  }
  /**
   * Represents a single zypper package repository. These are added to a repo file that is managed at `/etc/zypp/repos.d/google_osconfig.repo`.
   */
  export interface Schema$OSPolicyResourceRepositoryResourceZypperRepository {
    /**
     * Required. The location of the repository directory.
     */
    baseUrl?: string | null;
    /**
     * The display name of the repository.
     */
    displayName?: string | null;
    /**
     * URIs of GPG keys.
     */
    gpgKeys?: string[] | null;
    /**
     * Required. A one word, unique name for this repository. This is the `repo id` in the zypper config file and also the `display_name` if `display_name` is omitted. This id is also used as the unique identifier when checking for GuestPolicy conflicts.
     */
    id?: string | null;
  }
  /**
   * Patch configuration specifications. Contains details on how to apply the patch(es) to a VM instance.
   */
  export interface Schema$PatchConfig {
    /**
     * Apt update settings. Use this setting to override the default `apt` patch rules.
     */
    apt?: Schema$AptSettings;
    /**
     * Goo update settings. Use this setting to override the default `goo` patch rules.
     */
    goo?: Schema$GooSettings;
    /**
     * Allows the patch job to run on Managed instance groups (MIGs).
     */
    migInstancesAllowed?: boolean | null;
    /**
     * The `ExecStep` to run after the patch update.
     */
    postStep?: Schema$ExecStep;
    /**
     * The `ExecStep` to run before the patch update.
     */
    preStep?: Schema$ExecStep;
    /**
     * Post-patch reboot settings.
     */
    rebootConfig?: string | null;
    /**
     * Windows update settings. Use this override the default windows patch rules.
     */
    windowsUpdate?: Schema$WindowsUpdateSettings;
    /**
     * Yum update settings. Use this setting to override the default `yum` patch rules.
     */
    yum?: Schema$YumSettings;
    /**
     * Zypper update settings. Use this setting to override the default `zypper` patch rules.
     */
    zypper?: Schema$ZypperSettings;
  }
  /**
   * Patch deployments are configurations that individual patch jobs use to complete a patch. These configurations include instance filter, package repository settings, and a schedule. For more information about creating and managing patch deployments, see [Scheduling patch jobs](https://cloud.google.com/compute/docs/os-patch-management/schedule-patch-jobs).
   */
  export interface Schema$PatchDeployment {
    /**
     * Output only. Time the patch deployment was created. Timestamp is in [RFC3339](https://www.ietf.org/rfc/rfc3339.txt) text format.
     */
    createTime?: string | null;
    /**
     * Optional. Description of the patch deployment. Length of the description is limited to 1024 characters.
     */
    description?: string | null;
    /**
     * Optional. Duration of the patch. After the duration ends, the patch times out.
     */
    duration?: string | null;
    /**
     * Required. VM instances to patch.
     */
    instanceFilter?: Schema$PatchInstanceFilter;
    /**
     * Output only. The last time a patch job was started by this deployment. Timestamp is in [RFC3339](https://www.ietf.org/rfc/rfc3339.txt) text format.
     */
    lastExecuteTime?: string | null;
    /**
     * Unique name for the patch deployment resource in a project. The patch deployment name is in the form: `projects/{project_id\}/patchDeployments/{patch_deployment_id\}`. This field is ignored when you create a new patch deployment.
     */
    name?: string | null;
    /**
     * Required. Schedule a one-time execution.
     */
    oneTimeSchedule?: Schema$OneTimeSchedule;
    /**
     * Optional. Patch configuration that is applied.
     */
    patchConfig?: Schema$PatchConfig;
    /**
     * Required. Schedule recurring executions.
     */
    recurringSchedule?: Schema$RecurringSchedule;
    /**
     * Optional. Rollout strategy of the patch job.
     */
    rollout?: Schema$PatchRollout;
    /**
     * Output only. Current state of the patch deployment.
     */
    state?: string | null;
    /**
     * Output only. Time the patch deployment was last updated. Timestamp is in [RFC3339](https://www.ietf.org/rfc/rfc3339.txt) text format.
     */
    updateTime?: string | null;
  }
  /**
   * A filter to target VM instances for patching. The targeted VMs must meet all criteria specified. So if both labels and zones are specified, the patch job targets only VMs with those labels and in those zones.
   */
  export interface Schema$PatchInstanceFilter {
    /**
     * Target all VM instances in the project. If true, no other criteria is permitted.
     */
    all?: boolean | null;
    /**
     * Targets VM instances matching ANY of these GroupLabels. This allows targeting of disparate groups of VM instances.
     */
    groupLabels?: Schema$PatchInstanceFilterGroupLabel[];
    /**
     * Targets VMs whose name starts with one of these prefixes. Similar to labels, this is another way to group VMs when targeting configs, for example prefix="prod-".
     */
    instanceNamePrefixes?: string[] | null;
    /**
     * Targets any of the VM instances specified. Instances are specified by their URI in the form `zones/[ZONE]/instances/[INSTANCE_NAME]`, `projects/[PROJECT_ID]/zones/[ZONE]/instances/[INSTANCE_NAME]`, or `https://www.googleapis.com/compute/v1/projects/[PROJECT_ID]/zones/[ZONE]/instances/[INSTANCE_NAME]`
     */
    instances?: string[] | null;
    /**
     * Targets VM instances in ANY of these zones. Leave empty to target VM instances in any zone.
     */
    zones?: string[] | null;
  }
  /**
   * Targets a group of VM instances by using their [assigned labels](https://cloud.google.com/compute/docs/labeling-resources). Labels are key-value pairs. A `GroupLabel` is a combination of labels that is used to target VMs for a patch job. For example, a patch job can target VMs that have the following `GroupLabel`: `{"env":"test", "app":"web"\}`. This means that the patch job is applied to VMs that have both the labels `env=test` and `app=web`.
   */
  export interface Schema$PatchInstanceFilterGroupLabel {
    /**
     * Compute Engine instance labels that must be present for a VM instance to be targeted by this filter.
     */
    labels?: {[key: string]: string} | null;
  }
  /**
   * A high level representation of a patch job that is either in progress or has completed. Instance details are not included in the job. To paginate through instance details, use ListPatchJobInstanceDetails. For more information about patch jobs, see [Creating patch jobs](https://cloud.google.com/compute/docs/os-patch-management/create-patch-job).
   */
  export interface Schema$PatchJob {
    /**
     * Time this patch job was created.
     */
    createTime?: string | null;
    /**
     * Description of the patch job. Length of the description is limited to 1024 characters.
     */
    description?: string | null;
    /**
     * Display name for this patch job. This is not a unique identifier.
     */
    displayName?: string | null;
    /**
     * If this patch job is a dry run, the agent reports that it has finished without running any updates on the VM instance.
     */
    dryRun?: boolean | null;
    /**
     * Duration of the patch job. After the duration ends, the patch job times out.
     */
    duration?: string | null;
    /**
     * If this patch job failed, this message provides information about the failure.
     */
    errorMessage?: string | null;
    /**
     * Summary of instance details.
     */
    instanceDetailsSummary?: Schema$PatchJobInstanceDetailsSummary;
    /**
     * Instances to patch.
     */
    instanceFilter?: Schema$PatchInstanceFilter;
    /**
     * Unique identifier for this patch job in the form `projects/x/patchJobs/x`
     */
    name?: string | null;
    /**
     * Patch configuration being applied.
     */
    patchConfig?: Schema$PatchConfig;
    /**
     * Output only. Name of the patch deployment that created this patch job.
     */
    patchDeployment?: string | null;
    /**
     * Reflects the overall progress of the patch job in the range of 0.0 being no progress to 100.0 being complete.
     */
    percentComplete?: number | null;
    /**
     * Rollout strategy being applied.
     */
    rollout?: Schema$PatchRollout;
    /**
     * The current state of the PatchJob.
     */
    state?: string | null;
    /**
     * Last time this patch job was updated.
     */
    updateTime?: string | null;
  }
  /**
   * Patch details for a VM instance. For more information about reviewing VM instance details, see [Listing all VM instance details for a specific patch job](https://cloud.google.com/compute/docs/os-patch-management/manage-patch-jobs#list-instance-details).
   */
  export interface Schema$PatchJobInstanceDetails {
    /**
     * The number of times the agent that the agent attempts to apply the patch.
     */
    attemptCount?: string | null;
    /**
     * If the patch fails, this field provides the reason.
     */
    failureReason?: string | null;
    /**
     * The unique identifier for the instance. This identifier is defined by the server.
     */
    instanceSystemId?: string | null;
    /**
     * The instance name in the form `projects/x/zones/x/instances/x`
     */
    name?: string | null;
    /**
     * Current state of instance patch.
     */
    state?: string | null;
  }
  /**
   * A summary of the current patch state across all instances that this patch job affects. Contains counts of instances in different states. These states map to `InstancePatchState`. List patch job instance details to see the specific states of each instance.
   */
  export interface Schema$PatchJobInstanceDetailsSummary {
    /**
     * Number of instances that have acked and will start shortly.
     */
    ackedInstanceCount?: string | null;
    /**
     * Number of instances that are applying patches.
     */
    applyingPatchesInstanceCount?: string | null;
    /**
     * Number of instances that are downloading patches.
     */
    downloadingPatchesInstanceCount?: string | null;
    /**
     * Number of instances that failed.
     */
    failedInstanceCount?: string | null;
    /**
     * Number of instances that are inactive.
     */
    inactiveInstanceCount?: string | null;
    /**
     * Number of instances that do not appear to be running the agent. Check to ensure that the agent is installed, running, and able to communicate with the service.
     */
    noAgentDetectedInstanceCount?: string | null;
    /**
     * Number of instances notified about patch job.
     */
    notifiedInstanceCount?: string | null;
    /**
     * Number of instances pending patch job.
     */
    pendingInstanceCount?: string | null;
    /**
     * Number of instances that are running the post-patch step.
     */
    postPatchStepInstanceCount?: string | null;
    /**
     * Number of instances that are running the pre-patch step.
     */
    prePatchStepInstanceCount?: string | null;
    /**
     * Number of instances rebooting.
     */
    rebootingInstanceCount?: string | null;
    /**
     * Number of instances that have started.
     */
    startedInstanceCount?: string | null;
    /**
     * Number of instances that have completed successfully.
     */
    succeededInstanceCount?: string | null;
    /**
     * Number of instances that require reboot.
     */
    succeededRebootRequiredInstanceCount?: string | null;
    /**
     * Number of instances that exceeded the time out while applying the patch.
     */
    timedOutInstanceCount?: string | null;
  }
  /**
   * Patch rollout configuration specifications. Contains details on the concurrency control when applying patch(es) to all targeted VMs.
   */
  export interface Schema$PatchRollout {
    /**
     * The maximum number (or percentage) of VMs per zone to disrupt at any given moment. The number of VMs calculated from multiplying the percentage by the total number of VMs in a zone is rounded up. During patching, a VM is considered disrupted from the time the agent is notified to begin until patching has completed. This disruption time includes the time to complete reboot and any post-patch steps. A VM contributes to the disruption budget if its patching operation fails either when applying the patches, running pre or post patch steps, or if it fails to respond with a success notification before timing out. VMs that are not running or do not have an active agent do not count toward this disruption budget. For zone-by-zone rollouts, if the disruption budget in a zone is exceeded, the patch job stops, because continuing to the next zone requires completion of the patch process in the previous zone. For example, if the disruption budget has a fixed value of `10`, and 8 VMs fail to patch in the current zone, the patch job continues to patch 2 VMs at a time until the zone is completed. When that zone is completed successfully, patching begins with 10 VMs at a time in the next zone. If 10 VMs in the next zone fail to patch, the patch job stops.
     */
    disruptionBudget?: Schema$FixedOrPercent;
    /**
     * Mode of the patch rollout.
     */
    mode?: string | null;
  }
  /**
   * A request message for pausing a patch deployment.
   */
  export interface Schema$PausePatchDeploymentRequest {}
  /**
   * Sets the time for recurring patch deployments.
   */
  export interface Schema$RecurringSchedule {
    /**
     * Optional. The end time at which a recurring patch deployment schedule is no longer active.
     */
    endTime?: string | null;
    /**
     * Required. The frequency unit of this recurring schedule.
     */
    frequency?: string | null;
    /**
     * Output only. The time the last patch job ran successfully.
     */
    lastExecuteTime?: string | null;
    /**
     * Required. Schedule with monthly executions.
     */
    monthly?: Schema$MonthlySchedule;
    /**
     * Output only. The time the next patch job is scheduled to run.
     */
    nextExecuteTime?: string | null;
    /**
     * Optional. The time that the recurring schedule becomes effective. Defaults to `create_time` of the patch deployment.
     */
    startTime?: string | null;
    /**
     * Required. Time of the day to run a recurring deployment.
     */
    timeOfDay?: Schema$TimeOfDay;
    /**
     * Required. Defines the time zone that `time_of_day` is relative to. The rules for daylight saving time are determined by the chosen time zone.
     */
    timeZone?: Schema$TimeZone;
    /**
     * Required. Schedule with weekly executions.
     */
    weekly?: Schema$WeeklySchedule;
  }
  /**
   * A request message for resuming a patch deployment.
   */
  export interface Schema$ResumePatchDeploymentRequest {}
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
   * Represents a time of day. The date and time zone are either not significant or are specified elsewhere. An API may choose to allow leap seconds. Related types are google.type.Date and `google.protobuf.Timestamp`.
   */
  export interface Schema$TimeOfDay {
    /**
     * Hours of day in 24 hour format. Should be from 0 to 23. An API may choose to allow the value "24:00:00" for scenarios like business closing time.
     */
    hours?: number | null;
    /**
     * Minutes of hour of day. Must be from 0 to 59.
     */
    minutes?: number | null;
    /**
     * Fractions of seconds in nanoseconds. Must be from 0 to 999,999,999.
     */
    nanos?: number | null;
    /**
     * Seconds of minutes of the time. Must normally be from 0 to 59. An API may allow the value 60 if it allows leap-seconds.
     */
    seconds?: number | null;
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
   * This API resource represents the vulnerability report for a specified Compute Engine virtual machine (VM) instance at a given point in time. For more information, see [Vulnerability reports](https://cloud.google.com/compute/docs/instances/os-inventory-management#vulnerability-reports).
   */
  export interface Schema$VulnerabilityReport {
    /**
     * Output only. The `vulnerabilityReport` API resource name. Format: `projects/{project_number\}/locations/{location\}/instances/{instance_id\}/vulnerabilityReport`
     */
    name?: string | null;
    /**
     * Output only. The timestamp for when the last vulnerability report was generated for the VM.
     */
    updateTime?: string | null;
    /**
     * Output only. List of vulnerabilities affecting the VM.
     */
    vulnerabilities?: Schema$VulnerabilityReportVulnerability[];
  }
  /**
   * A vulnerability affecting the VM instance.
   */
  export interface Schema$VulnerabilityReportVulnerability {
    /**
     * Corresponds to the `AVAILABLE_PACKAGE` inventory item on the VM. If the vulnerability report was not updated after the VM inventory update, these values might not display in VM inventory. If there is no available fix, the field is empty. The `inventory_item` value specifies the latest `SoftwarePackage` available to the VM that fixes the vulnerability.
     */
    availableInventoryItemIds?: string[] | null;
    /**
     * The timestamp for when the vulnerability was first detected.
     */
    createTime?: string | null;
    /**
     * Contains metadata as per the upstream feed of the operating system and NVD.
     */
    details?: Schema$VulnerabilityReportVulnerabilityDetails;
    /**
     * Corresponds to the `INSTALLED_PACKAGE` inventory item on the VM. This field displays the inventory items affected by this vulnerability. If the vulnerability report was not updated after the VM inventory update, these values might not display in VM inventory. For some distros, this field may be empty.
     */
    installedInventoryItemIds?: string[] | null;
    /**
     * List of items affected by the vulnerability.
     */
    items?: Schema$VulnerabilityReportVulnerabilityItem[];
    /**
     * The timestamp for when the vulnerability was last modified.
     */
    updateTime?: string | null;
  }
  /**
   * Contains metadata information for the vulnerability. This information is collected from the upstream feed of the operating system.
   */
  export interface Schema$VulnerabilityReportVulnerabilityDetails {
    /**
     * The CVE of the vulnerability. CVE cannot be empty and the combination of should be unique across vulnerabilities for a VM.
     */
    cve?: string | null;
    /**
     * The CVSS V2 score of this vulnerability. CVSS V2 score is on a scale of 0 - 10 where 0 indicates low severity and 10 indicates high severity.
     */
    cvssV2Score?: number | null;
    /**
     * The full description of the CVSSv3 for this vulnerability from NVD.
     */
    cvssV3?: Schema$CVSSv3;
    /**
     * The note or description describing the vulnerability from the distro.
     */
    description?: string | null;
    /**
     * Corresponds to the references attached to the `VulnerabilityDetails`.
     */
    references?: Schema$VulnerabilityReportVulnerabilityDetailsReference[];
    /**
     * Assigned severity/impact ranking from the distro.
     */
    severity?: string | null;
  }
  /**
   * A reference for this vulnerability.
   */
  export interface Schema$VulnerabilityReportVulnerabilityDetailsReference {
    /**
     * The source of the reference e.g. NVD.
     */
    source?: string | null;
    /**
     * The url of the reference.
     */
    url?: string | null;
  }
  /**
   * OS inventory item that is affected by a vulnerability or fixed as a result of a vulnerability.
   */
  export interface Schema$VulnerabilityReportVulnerabilityItem {
    /**
     * Corresponds to the `AVAILABLE_PACKAGE` inventory item on the VM. If the vulnerability report was not updated after the VM inventory update, these values might not display in VM inventory. If there is no available fix, the field is empty. The `inventory_item` value specifies the latest `SoftwarePackage` available to the VM that fixes the vulnerability.
     */
    availableInventoryItemId?: string | null;
    /**
     * The recommended [CPE URI](https://cpe.mitre.org/specification/) update that contains a fix for this vulnerability.
     */
    fixedCpeUri?: string | null;
    /**
     * Corresponds to the `INSTALLED_PACKAGE` inventory item on the VM. This field displays the inventory items affected by this vulnerability. If the vulnerability report was not updated after the VM inventory update, these values might not display in VM inventory. For some operating systems, this field might be empty.
     */
    installedInventoryItemId?: string | null;
    /**
     * The upstream OS patch, packages or KB that fixes the vulnerability.
     */
    upstreamFix?: string | null;
  }
  /**
   * Represents one week day in a month. An example is "the 4th Sunday".
   */
  export interface Schema$WeekDayOfMonth {
    /**
     * Optional. Represents the number of days before or after the given week day of month that the patch deployment is scheduled for. For example if `week_ordinal` and `day_of_week` values point to the second day of the month and this `day_offset` value is set to `3`, the patch deployment takes place three days after the second Tuesday of the month. If this value is negative, for example -5, the patches are deployed five days before before the second Tuesday of the month. Allowed values are in range [-30, 30].
     */
    dayOffset?: number | null;
    /**
     * Required. A day of the week.
     */
    dayOfWeek?: string | null;
    /**
     * Required. Week number in a month. 1-4 indicates the 1st to 4th week of the month. -1 indicates the last week of the month.
     */
    weekOrdinal?: number | null;
  }
  /**
   * Represents a weekly schedule.
   */
  export interface Schema$WeeklySchedule {
    /**
     * Required. Day of the week.
     */
    dayOfWeek?: string | null;
  }
  /**
   * Windows patching is performed using the Windows Update Agent.
   */
  export interface Schema$WindowsUpdateSettings {
    /**
     * Only apply updates of these windows update classifications. If empty, all updates are applied.
     */
    classifications?: string[] | null;
    /**
     * List of KBs to exclude from update.
     */
    excludes?: string[] | null;
    /**
     * An exclusive list of kbs to be updated. These are the only patches that will be updated. This field must not be used with other patch configurations.
     */
    exclusivePatches?: string[] | null;
  }
  /**
   * Yum patching is performed by executing `yum update`. Additional options can be set to control how this is executed. Note that not all settings are supported on all platforms.
   */
  export interface Schema$YumSettings {
    /**
     * List of packages to exclude from update. These packages are excluded by using the yum `--exclude` flag.
     */
    excludes?: string[] | null;
    /**
     * An exclusive list of packages to be updated. These are the only packages that will be updated. If these packages are not installed, they will be ignored. This field must not be specified with any other patch configuration fields.
     */
    exclusivePackages?: string[] | null;
    /**
     * Will cause patch to run `yum update-minimal` instead.
     */
    minimal?: boolean | null;
    /**
     * Adds the `--security` flag to `yum update`. Not supported on all platforms.
     */
    security?: boolean | null;
  }
  /**
   * Zypper patching is performed by running `zypper patch`. See also https://en.opensuse.org/SDB:Zypper_manual.
   */
  export interface Schema$ZypperSettings {
    /**
     * Install only patches with these categories. Common categories include security, recommended, and feature.
     */
    categories?: string[] | null;
    /**
     * List of patches to exclude from update.
     */
    excludes?: string[] | null;
    /**
     * An exclusive list of patches to be updated. These are the only patches that will be installed using 'zypper patch patch:' command. This field must not be used with any other patch configuration fields.
     */
    exclusivePatches?: string[] | null;
    /**
     * Install only patches with these severities. Common severities include critical, important, moderate, and low.
     */
    severities?: string[] | null;
    /**
     * Adds the `--with-optional` flag to `zypper patch`.
     */
    withOptional?: boolean | null;
    /**
     * Adds the `--with-update` flag, to `zypper patch`.
     */
    withUpdate?: boolean | null;
  }

  export class Resource$Projects {
    context: APIRequestContext;
    locations: Resource$Projects$Locations;
    patchDeployments: Resource$Projects$Patchdeployments;
    patchJobs: Resource$Projects$Patchjobs;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.locations = new Resource$Projects$Locations(this.context);
      this.patchDeployments = new Resource$Projects$Patchdeployments(
        this.context
      );
      this.patchJobs = new Resource$Projects$Patchjobs(this.context);
    }
  }

  export class Resource$Projects$Locations {
    context: APIRequestContext;
    instances: Resource$Projects$Locations$Instances;
    osPolicyAssignments: Resource$Projects$Locations$Ospolicyassignments;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.instances = new Resource$Projects$Locations$Instances(this.context);
      this.osPolicyAssignments =
        new Resource$Projects$Locations$Ospolicyassignments(this.context);
    }
  }

  export class Resource$Projects$Locations$Instances {
    context: APIRequestContext;
    inventories: Resource$Projects$Locations$Instances$Inventories;
    osPolicyAssignments: Resource$Projects$Locations$Instances$Ospolicyassignments;
    vulnerabilityReports: Resource$Projects$Locations$Instances$Vulnerabilityreports;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.inventories = new Resource$Projects$Locations$Instances$Inventories(
        this.context
      );
      this.osPolicyAssignments =
        new Resource$Projects$Locations$Instances$Ospolicyassignments(
          this.context
        );
      this.vulnerabilityReports =
        new Resource$Projects$Locations$Instances$Vulnerabilityreports(
          this.context
        );
    }
  }

  export class Resource$Projects$Locations$Instances$Inventories {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Get inventory data for the specified VM instance. If the VM has no associated inventory, the message `NOT_FOUND` is returned.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/osconfig.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const osconfig = google.osconfig('v1');
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
     *   const res = await osconfig.projects.locations.instances.inventories.get({
     *     // Required. API resource name for inventory resource. Format: `projects/{project\}/locations/{location\}/instances/{instance\}/inventory` For `{project\}`, either `project-number` or `project-id` can be provided. For `{instance\}`, either Compute Engine `instance-id` or `instance-name` can be provided.
     *     name: 'projects/my-project/locations/my-location/instances/my-instance/inventory',
     *     // Inventory view indicating what information should be included in the inventory resource. If unspecified, the default view is BASIC.
     *     view: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "items": {},
     *   //   "name": "my_name",
     *   //   "osInfo": {},
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
      params: Params$Resource$Projects$Locations$Instances$Inventories$Get,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    get(
      params?: Params$Resource$Projects$Locations$Instances$Inventories$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Inventory>;
    get(
      params: Params$Resource$Projects$Locations$Instances$Inventories$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Instances$Inventories$Get,
      options: MethodOptions | BodyResponseCallback<Schema$Inventory>,
      callback: BodyResponseCallback<Schema$Inventory>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Instances$Inventories$Get,
      callback: BodyResponseCallback<Schema$Inventory>
    ): void;
    get(callback: BodyResponseCallback<Schema$Inventory>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Instances$Inventories$Get
        | BodyResponseCallback<Schema$Inventory>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Inventory>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Inventory>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$Inventory> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Instances$Inventories$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Instances$Inventories$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://osconfig.googleapis.com/';
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
        createAPIRequest<Schema$Inventory>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Inventory>(parameters);
      }
    }

    /**
     * List inventory data for all VM instances in the specified zone.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/osconfig.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const osconfig = google.osconfig('v1');
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
     *   const res = await osconfig.projects.locations.instances.inventories.list({
     *     // If provided, this field specifies the criteria that must be met by a `Inventory` API resource to be included in the response.
     *     filter: 'placeholder-value',
     *     // The maximum number of results to return.
     *     pageSize: 'placeholder-value',
     *     // A pagination token returned from a previous call to `ListInventories` that indicates where this listing should continue from.
     *     pageToken: 'placeholder-value',
     *     // Required. The parent resource name. Format: `projects/{project\}/locations/{location\}/instances/-` For `{project\}`, either `project-number` or `project-id` can be provided.
     *     parent: 'projects/my-project/locations/my-location/instances/my-instance',
     *     // Inventory view indicating what information should be included in the inventory resource. If unspecified, the default view is BASIC.
     *     view: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "inventories": [],
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
      params: Params$Resource$Projects$Locations$Instances$Inventories$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Projects$Locations$Instances$Inventories$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ListInventoriesResponse>;
    list(
      params: Params$Resource$Projects$Locations$Instances$Inventories$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Instances$Inventories$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ListInventoriesResponse>,
      callback: BodyResponseCallback<Schema$ListInventoriesResponse>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Instances$Inventories$List,
      callback: BodyResponseCallback<Schema$ListInventoriesResponse>
    ): void;
    list(callback: BodyResponseCallback<Schema$ListInventoriesResponse>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Instances$Inventories$List
        | BodyResponseCallback<Schema$ListInventoriesResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ListInventoriesResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ListInventoriesResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$ListInventoriesResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Instances$Inventories$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Instances$Inventories$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://osconfig.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}/inventories').replace(
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
        createAPIRequest<Schema$ListInventoriesResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ListInventoriesResponse>(parameters);
      }
    }
  }

  export interface Params$Resource$Projects$Locations$Instances$Inventories$Get
    extends StandardParameters {
    /**
     * Required. API resource name for inventory resource. Format: `projects/{project\}/locations/{location\}/instances/{instance\}/inventory` For `{project\}`, either `project-number` or `project-id` can be provided. For `{instance\}`, either Compute Engine `instance-id` or `instance-name` can be provided.
     */
    name?: string;
    /**
     * Inventory view indicating what information should be included in the inventory resource. If unspecified, the default view is BASIC.
     */
    view?: string;
  }
  export interface Params$Resource$Projects$Locations$Instances$Inventories$List
    extends StandardParameters {
    /**
     * If provided, this field specifies the criteria that must be met by a `Inventory` API resource to be included in the response.
     */
    filter?: string;
    /**
     * The maximum number of results to return.
     */
    pageSize?: number;
    /**
     * A pagination token returned from a previous call to `ListInventories` that indicates where this listing should continue from.
     */
    pageToken?: string;
    /**
     * Required. The parent resource name. Format: `projects/{project\}/locations/{location\}/instances/-` For `{project\}`, either `project-number` or `project-id` can be provided.
     */
    parent?: string;
    /**
     * Inventory view indicating what information should be included in the inventory resource. If unspecified, the default view is BASIC.
     */
    view?: string;
  }

  export class Resource$Projects$Locations$Instances$Ospolicyassignments {
    context: APIRequestContext;
    reports: Resource$Projects$Locations$Instances$Ospolicyassignments$Reports;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.reports =
        new Resource$Projects$Locations$Instances$Ospolicyassignments$Reports(
          this.context
        );
    }
  }

  export class Resource$Projects$Locations$Instances$Ospolicyassignments$Reports {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Get the OS policy asssignment report for the specified Compute Engine VM instance.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/osconfig.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const osconfig = google.osconfig('v1');
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
     *     await osconfig.projects.locations.instances.osPolicyAssignments.reports.get(
     *       {
     *         // Required. API resource name for OS policy assignment report. Format: `/projects/{project\}/locations/{location\}/instances/{instance\}/osPolicyAssignments/{assignment\}/report` For `{project\}`, either `project-number` or `project-id` can be provided. For `{instance_id\}`, either Compute Engine `instance-id` or `instance-name` can be provided. For `{assignment_id\}`, the OSPolicyAssignment id must be provided.
     *         name: 'projects/my-project/locations/my-location/instances/my-instance/osPolicyAssignments/my-osPolicyAssignment/report',
     *       }
     *     );
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "instance": "my_instance",
     *   //   "lastRunId": "my_lastRunId",
     *   //   "name": "my_name",
     *   //   "osPolicyAssignment": "my_osPolicyAssignment",
     *   //   "osPolicyCompliances": [],
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
      params: Params$Resource$Projects$Locations$Instances$Ospolicyassignments$Reports$Get,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    get(
      params?: Params$Resource$Projects$Locations$Instances$Ospolicyassignments$Reports$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$OSPolicyAssignmentReport>;
    get(
      params: Params$Resource$Projects$Locations$Instances$Ospolicyassignments$Reports$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Instances$Ospolicyassignments$Reports$Get,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$OSPolicyAssignmentReport>,
      callback: BodyResponseCallback<Schema$OSPolicyAssignmentReport>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Instances$Ospolicyassignments$Reports$Get,
      callback: BodyResponseCallback<Schema$OSPolicyAssignmentReport>
    ): void;
    get(callback: BodyResponseCallback<Schema$OSPolicyAssignmentReport>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Instances$Ospolicyassignments$Reports$Get
        | BodyResponseCallback<Schema$OSPolicyAssignmentReport>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$OSPolicyAssignmentReport>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$OSPolicyAssignmentReport>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$OSPolicyAssignmentReport>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Instances$Ospolicyassignments$Reports$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Instances$Ospolicyassignments$Reports$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://osconfig.googleapis.com/';
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
        createAPIRequest<Schema$OSPolicyAssignmentReport>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$OSPolicyAssignmentReport>(parameters);
      }
    }

    /**
     * List OS policy asssignment reports for all Compute Engine VM instances in the specified zone.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/osconfig.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const osconfig = google.osconfig('v1');
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
     *     await osconfig.projects.locations.instances.osPolicyAssignments.reports.list(
     *       {
     *         // If provided, this field specifies the criteria that must be met by the `OSPolicyAssignmentReport` API resource that is included in the response.
     *         filter: 'placeholder-value',
     *         // The maximum number of results to return.
     *         pageSize: 'placeholder-value',
     *         // A pagination token returned from a previous call to the `ListOSPolicyAssignmentReports` method that indicates where this listing should continue from.
     *         pageToken: 'placeholder-value',
     *         // Required. The parent resource name. Format: `projects/{project\}/locations/{location\}/instances/{instance\}/osPolicyAssignments/{assignment\}/reports` For `{project\}`, either `project-number` or `project-id` can be provided. For `{instance\}`, either `instance-name`, `instance-id`, or `-` can be provided. If '-' is provided, the response will include OSPolicyAssignmentReports for all instances in the project/location. For `{assignment\}`, either `assignment-id` or `-` can be provided. If '-' is provided, the response will include OSPolicyAssignmentReports for all OSPolicyAssignments in the project/location. Either {instance\} or {assignment\} must be `-`. For example: `projects/{project\}/locations/{location\}/instances/{instance\}/osPolicyAssignments/-/reports` returns all reports for the instance `projects/{project\}/locations/{location\}/instances/-/osPolicyAssignments/{assignment-id\}/reports` returns all the reports for the given assignment across all instances. `projects/{project\}/locations/{location\}/instances/-/osPolicyAssignments/-/reports` returns all the reports for all assignments across all instances.
     *         parent:
     *           'projects/my-project/locations/my-location/instances/my-instance/osPolicyAssignments/my-osPolicyAssignment',
     *       }
     *     );
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "nextPageToken": "my_nextPageToken",
     *   //   "osPolicyAssignmentReports": []
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
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
      params: Params$Resource$Projects$Locations$Instances$Ospolicyassignments$Reports$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Projects$Locations$Instances$Ospolicyassignments$Reports$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ListOSPolicyAssignmentReportsResponse>;
    list(
      params: Params$Resource$Projects$Locations$Instances$Ospolicyassignments$Reports$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Instances$Ospolicyassignments$Reports$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ListOSPolicyAssignmentReportsResponse>,
      callback: BodyResponseCallback<Schema$ListOSPolicyAssignmentReportsResponse>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Instances$Ospolicyassignments$Reports$List,
      callback: BodyResponseCallback<Schema$ListOSPolicyAssignmentReportsResponse>
    ): void;
    list(
      callback: BodyResponseCallback<Schema$ListOSPolicyAssignmentReportsResponse>
    ): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Instances$Ospolicyassignments$Reports$List
        | BodyResponseCallback<Schema$ListOSPolicyAssignmentReportsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ListOSPolicyAssignmentReportsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ListOSPolicyAssignmentReportsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$ListOSPolicyAssignmentReportsResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Instances$Ospolicyassignments$Reports$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Instances$Ospolicyassignments$Reports$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://osconfig.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}/reports').replace(
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
        createAPIRequest<Schema$ListOSPolicyAssignmentReportsResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ListOSPolicyAssignmentReportsResponse>(
          parameters
        );
      }
    }
  }

  export interface Params$Resource$Projects$Locations$Instances$Ospolicyassignments$Reports$Get
    extends StandardParameters {
    /**
     * Required. API resource name for OS policy assignment report. Format: `/projects/{project\}/locations/{location\}/instances/{instance\}/osPolicyAssignments/{assignment\}/report` For `{project\}`, either `project-number` or `project-id` can be provided. For `{instance_id\}`, either Compute Engine `instance-id` or `instance-name` can be provided. For `{assignment_id\}`, the OSPolicyAssignment id must be provided.
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Locations$Instances$Ospolicyassignments$Reports$List
    extends StandardParameters {
    /**
     * If provided, this field specifies the criteria that must be met by the `OSPolicyAssignmentReport` API resource that is included in the response.
     */
    filter?: string;
    /**
     * The maximum number of results to return.
     */
    pageSize?: number;
    /**
     * A pagination token returned from a previous call to the `ListOSPolicyAssignmentReports` method that indicates where this listing should continue from.
     */
    pageToken?: string;
    /**
     * Required. The parent resource name. Format: `projects/{project\}/locations/{location\}/instances/{instance\}/osPolicyAssignments/{assignment\}/reports` For `{project\}`, either `project-number` or `project-id` can be provided. For `{instance\}`, either `instance-name`, `instance-id`, or `-` can be provided. If '-' is provided, the response will include OSPolicyAssignmentReports for all instances in the project/location. For `{assignment\}`, either `assignment-id` or `-` can be provided. If '-' is provided, the response will include OSPolicyAssignmentReports for all OSPolicyAssignments in the project/location. Either {instance\} or {assignment\} must be `-`. For example: `projects/{project\}/locations/{location\}/instances/{instance\}/osPolicyAssignments/-/reports` returns all reports for the instance `projects/{project\}/locations/{location\}/instances/-/osPolicyAssignments/{assignment-id\}/reports` returns all the reports for the given assignment across all instances. `projects/{project\}/locations/{location\}/instances/-/osPolicyAssignments/-/reports` returns all the reports for all assignments across all instances.
     */
    parent?: string;
  }

  export class Resource$Projects$Locations$Instances$Vulnerabilityreports {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Gets the vulnerability report for the specified VM instance. Only VMs with inventory data have vulnerability reports associated with them.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/osconfig.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const osconfig = google.osconfig('v1');
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
     *     await osconfig.projects.locations.instances.vulnerabilityReports.get({
     *       // Required. API resource name for vulnerability resource. Format: `projects/{project\}/locations/{location\}/instances/{instance\}/vulnerabilityReport` For `{project\}`, either `project-number` or `project-id` can be provided. For `{instance\}`, either Compute Engine `instance-id` or `instance-name` can be provided.
     *       name: 'projects/my-project/locations/my-location/instances/my-instance/vulnerabilityReport',
     *     });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "name": "my_name",
     *   //   "updateTime": "my_updateTime",
     *   //   "vulnerabilities": []
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
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
      params: Params$Resource$Projects$Locations$Instances$Vulnerabilityreports$Get,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    get(
      params?: Params$Resource$Projects$Locations$Instances$Vulnerabilityreports$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$VulnerabilityReport>;
    get(
      params: Params$Resource$Projects$Locations$Instances$Vulnerabilityreports$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Instances$Vulnerabilityreports$Get,
      options: MethodOptions | BodyResponseCallback<Schema$VulnerabilityReport>,
      callback: BodyResponseCallback<Schema$VulnerabilityReport>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Instances$Vulnerabilityreports$Get,
      callback: BodyResponseCallback<Schema$VulnerabilityReport>
    ): void;
    get(callback: BodyResponseCallback<Schema$VulnerabilityReport>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Instances$Vulnerabilityreports$Get
        | BodyResponseCallback<Schema$VulnerabilityReport>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$VulnerabilityReport>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$VulnerabilityReport>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$VulnerabilityReport>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Instances$Vulnerabilityreports$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Instances$Vulnerabilityreports$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://osconfig.googleapis.com/';
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
        createAPIRequest<Schema$VulnerabilityReport>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$VulnerabilityReport>(parameters);
      }
    }

    /**
     * List vulnerability reports for all VM instances in the specified zone.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/osconfig.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const osconfig = google.osconfig('v1');
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
     *     await osconfig.projects.locations.instances.vulnerabilityReports.list({
     *       // This field supports filtering by the severity level for the vulnerability. For a list of severity levels, see [Severity levels for vulnerabilities](https://cloud.google.com/container-analysis/docs/container-scanning-overview#severity_levels_for_vulnerabilities). The filter field follows the rules described in the [AIP-160](https://google.aip.dev/160) guidelines as follows: + **Filter for a specific severity type**: you can list reports that contain vulnerabilities that are classified as medium by specifying `vulnerabilities.details.severity:MEDIUM`. + **Filter for a range of severities** : you can list reports that have vulnerabilities that are classified as critical or high by specifying `vulnerabilities.details.severity:HIGH OR vulnerabilities.details.severity:CRITICAL`
     *       filter: 'placeholder-value',
     *       // The maximum number of results to return.
     *       pageSize: 'placeholder-value',
     *       // A pagination token returned from a previous call to `ListVulnerabilityReports` that indicates where this listing should continue from.
     *       pageToken: 'placeholder-value',
     *       // Required. The parent resource name. Format: `projects/{project\}/locations/{location\}/instances/-` For `{project\}`, either `project-number` or `project-id` can be provided.
     *       parent: 'projects/my-project/locations/my-location/instances/my-instance',
     *     });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "nextPageToken": "my_nextPageToken",
     *   //   "vulnerabilityReports": []
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
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
      params: Params$Resource$Projects$Locations$Instances$Vulnerabilityreports$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Projects$Locations$Instances$Vulnerabilityreports$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ListVulnerabilityReportsResponse>;
    list(
      params: Params$Resource$Projects$Locations$Instances$Vulnerabilityreports$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Instances$Vulnerabilityreports$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ListVulnerabilityReportsResponse>,
      callback: BodyResponseCallback<Schema$ListVulnerabilityReportsResponse>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Instances$Vulnerabilityreports$List,
      callback: BodyResponseCallback<Schema$ListVulnerabilityReportsResponse>
    ): void;
    list(
      callback: BodyResponseCallback<Schema$ListVulnerabilityReportsResponse>
    ): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Instances$Vulnerabilityreports$List
        | BodyResponseCallback<Schema$ListVulnerabilityReportsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ListVulnerabilityReportsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ListVulnerabilityReportsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$ListVulnerabilityReportsResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Instances$Vulnerabilityreports$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Instances$Vulnerabilityreports$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://osconfig.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}/vulnerabilityReports').replace(
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
        createAPIRequest<Schema$ListVulnerabilityReportsResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ListVulnerabilityReportsResponse>(
          parameters
        );
      }
    }
  }

  export interface Params$Resource$Projects$Locations$Instances$Vulnerabilityreports$Get
    extends StandardParameters {
    /**
     * Required. API resource name for vulnerability resource. Format: `projects/{project\}/locations/{location\}/instances/{instance\}/vulnerabilityReport` For `{project\}`, either `project-number` or `project-id` can be provided. For `{instance\}`, either Compute Engine `instance-id` or `instance-name` can be provided.
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Locations$Instances$Vulnerabilityreports$List
    extends StandardParameters {
    /**
     * This field supports filtering by the severity level for the vulnerability. For a list of severity levels, see [Severity levels for vulnerabilities](https://cloud.google.com/container-analysis/docs/container-scanning-overview#severity_levels_for_vulnerabilities). The filter field follows the rules described in the [AIP-160](https://google.aip.dev/160) guidelines as follows: + **Filter for a specific severity type**: you can list reports that contain vulnerabilities that are classified as medium by specifying `vulnerabilities.details.severity:MEDIUM`. + **Filter for a range of severities** : you can list reports that have vulnerabilities that are classified as critical or high by specifying `vulnerabilities.details.severity:HIGH OR vulnerabilities.details.severity:CRITICAL`
     */
    filter?: string;
    /**
     * The maximum number of results to return.
     */
    pageSize?: number;
    /**
     * A pagination token returned from a previous call to `ListVulnerabilityReports` that indicates where this listing should continue from.
     */
    pageToken?: string;
    /**
     * Required. The parent resource name. Format: `projects/{project\}/locations/{location\}/instances/-` For `{project\}`, either `project-number` or `project-id` can be provided.
     */
    parent?: string;
  }

  export class Resource$Projects$Locations$Ospolicyassignments {
    context: APIRequestContext;
    operations: Resource$Projects$Locations$Ospolicyassignments$Operations;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.operations =
        new Resource$Projects$Locations$Ospolicyassignments$Operations(
          this.context
        );
    }

    /**
     * Create an OS policy assignment. This method also creates the first revision of the OS policy assignment. This method returns a long running operation (LRO) that contains the rollout details. The rollout can be cancelled by cancelling the LRO. For more information, see [Method: projects.locations.osPolicyAssignments.operations.cancel](https://cloud.google.com/compute/docs/osconfig/rest/v1/projects.locations.osPolicyAssignments.operations/cancel).
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/osconfig.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const osconfig = google.osconfig('v1');
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
     *   const res = await osconfig.projects.locations.osPolicyAssignments.create({
     *     // Required. The logical name of the OS policy assignment in the project with the following restrictions: * Must contain only lowercase letters, numbers, and hyphens. * Must start with a letter. * Must be between 1-63 characters. * Must end with a number or a letter. * Must be unique within the project.
     *     osPolicyAssignmentId: 'placeholder-value',
     *     // Required. The parent resource name in the form: projects/{project\}/locations/{location\}. Note: Specify the zone of your VMs as the location.
     *     parent: 'projects/my-project/locations/my-location',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "baseline": false,
     *       //   "deleted": false,
     *       //   "description": "my_description",
     *       //   "etag": "my_etag",
     *       //   "instanceFilter": {},
     *       //   "name": "my_name",
     *       //   "osPolicies": [],
     *       //   "reconciling": false,
     *       //   "revisionCreateTime": "my_revisionCreateTime",
     *       //   "revisionId": "my_revisionId",
     *       //   "rollout": {},
     *       //   "rolloutState": "my_rolloutState",
     *       //   "uid": "my_uid"
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
      params: Params$Resource$Projects$Locations$Ospolicyassignments$Create,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    create(
      params?: Params$Resource$Projects$Locations$Ospolicyassignments$Create,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Operation>;
    create(
      params: Params$Resource$Projects$Locations$Ospolicyassignments$Create,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    create(
      params: Params$Resource$Projects$Locations$Ospolicyassignments$Create,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    create(
      params: Params$Resource$Projects$Locations$Ospolicyassignments$Create,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    create(callback: BodyResponseCallback<Schema$Operation>): void;
    create(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Ospolicyassignments$Create
        | BodyResponseCallback<Schema$Operation>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Operation>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Operation>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$Operation> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Ospolicyassignments$Create;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Ospolicyassignments$Create;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://osconfig.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}/osPolicyAssignments').replace(
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
        createAPIRequest<Schema$Operation>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Operation>(parameters);
      }
    }

    /**
     * Delete the OS policy assignment. This method creates a new revision of the OS policy assignment. This method returns a long running operation (LRO) that contains the rollout details. The rollout can be cancelled by cancelling the LRO. If the LRO completes and is not cancelled, all revisions associated with the OS policy assignment are deleted. For more information, see [Method: projects.locations.osPolicyAssignments.operations.cancel](https://cloud.google.com/compute/docs/osconfig/rest/v1/projects.locations.osPolicyAssignments.operations/cancel).
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/osconfig.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const osconfig = google.osconfig('v1');
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
     *   const res = await osconfig.projects.locations.osPolicyAssignments.delete({
     *     // Required. The name of the OS policy assignment to be deleted
     *     name: 'projects/my-project/locations/my-location/osPolicyAssignments/my-osPolicyAssignment',
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
    delete(
      params: Params$Resource$Projects$Locations$Ospolicyassignments$Delete,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    delete(
      params?: Params$Resource$Projects$Locations$Ospolicyassignments$Delete,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Operation>;
    delete(
      params: Params$Resource$Projects$Locations$Ospolicyassignments$Delete,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    delete(
      params: Params$Resource$Projects$Locations$Ospolicyassignments$Delete,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    delete(
      params: Params$Resource$Projects$Locations$Ospolicyassignments$Delete,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    delete(callback: BodyResponseCallback<Schema$Operation>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Ospolicyassignments$Delete
        | BodyResponseCallback<Schema$Operation>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Operation>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Operation>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$Operation> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Ospolicyassignments$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Ospolicyassignments$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://osconfig.googleapis.com/';
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
        createAPIRequest<Schema$Operation>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Operation>(parameters);
      }
    }

    /**
     * Retrieve an existing OS policy assignment. This method always returns the latest revision. In order to retrieve a previous revision of the assignment, also provide the revision ID in the `name` parameter.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/osconfig.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const osconfig = google.osconfig('v1');
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
     *   const res = await osconfig.projects.locations.osPolicyAssignments.get({
     *     // Required. The resource name of OS policy assignment. Format: `projects/{project\}/locations/{location\}/osPolicyAssignments/{os_policy_assignment\}@{revisionId\}`
     *     name: 'projects/my-project/locations/my-location/osPolicyAssignments/my-osPolicyAssignment',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "baseline": false,
     *   //   "deleted": false,
     *   //   "description": "my_description",
     *   //   "etag": "my_etag",
     *   //   "instanceFilter": {},
     *   //   "name": "my_name",
     *   //   "osPolicies": [],
     *   //   "reconciling": false,
     *   //   "revisionCreateTime": "my_revisionCreateTime",
     *   //   "revisionId": "my_revisionId",
     *   //   "rollout": {},
     *   //   "rolloutState": "my_rolloutState",
     *   //   "uid": "my_uid"
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
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
      params: Params$Resource$Projects$Locations$Ospolicyassignments$Get,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    get(
      params?: Params$Resource$Projects$Locations$Ospolicyassignments$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$OSPolicyAssignment>;
    get(
      params: Params$Resource$Projects$Locations$Ospolicyassignments$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Ospolicyassignments$Get,
      options: MethodOptions | BodyResponseCallback<Schema$OSPolicyAssignment>,
      callback: BodyResponseCallback<Schema$OSPolicyAssignment>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Ospolicyassignments$Get,
      callback: BodyResponseCallback<Schema$OSPolicyAssignment>
    ): void;
    get(callback: BodyResponseCallback<Schema$OSPolicyAssignment>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Ospolicyassignments$Get
        | BodyResponseCallback<Schema$OSPolicyAssignment>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$OSPolicyAssignment>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$OSPolicyAssignment>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$OSPolicyAssignment>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Ospolicyassignments$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Ospolicyassignments$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://osconfig.googleapis.com/';
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
        createAPIRequest<Schema$OSPolicyAssignment>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$OSPolicyAssignment>(parameters);
      }
    }

    /**
     * List the OS policy assignments under the parent resource. For each OS policy assignment, the latest revision is returned.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/osconfig.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const osconfig = google.osconfig('v1');
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
     *   const res = await osconfig.projects.locations.osPolicyAssignments.list({
     *     // The maximum number of assignments to return.
     *     pageSize: 'placeholder-value',
     *     // A pagination token returned from a previous call to `ListOSPolicyAssignments` that indicates where this listing should continue from.
     *     pageToken: 'placeholder-value',
     *     // Required. The parent resource name.
     *     parent: 'projects/my-project/locations/my-location',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "nextPageToken": "my_nextPageToken",
     *   //   "osPolicyAssignments": []
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
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
      params: Params$Resource$Projects$Locations$Ospolicyassignments$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Projects$Locations$Ospolicyassignments$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ListOSPolicyAssignmentsResponse>;
    list(
      params: Params$Resource$Projects$Locations$Ospolicyassignments$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Ospolicyassignments$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ListOSPolicyAssignmentsResponse>,
      callback: BodyResponseCallback<Schema$ListOSPolicyAssignmentsResponse>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Ospolicyassignments$List,
      callback: BodyResponseCallback<Schema$ListOSPolicyAssignmentsResponse>
    ): void;
    list(
      callback: BodyResponseCallback<Schema$ListOSPolicyAssignmentsResponse>
    ): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Ospolicyassignments$List
        | BodyResponseCallback<Schema$ListOSPolicyAssignmentsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ListOSPolicyAssignmentsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ListOSPolicyAssignmentsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$ListOSPolicyAssignmentsResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Ospolicyassignments$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Ospolicyassignments$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://osconfig.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}/osPolicyAssignments').replace(
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
        createAPIRequest<Schema$ListOSPolicyAssignmentsResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ListOSPolicyAssignmentsResponse>(
          parameters
        );
      }
    }

    /**
     * List the OS policy assignment revisions for a given OS policy assignment.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/osconfig.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const osconfig = google.osconfig('v1');
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
     *     await osconfig.projects.locations.osPolicyAssignments.listRevisions({
     *       // Required. The name of the OS policy assignment to list revisions for.
     *       name: 'projects/my-project/locations/my-location/osPolicyAssignments/my-osPolicyAssignment',
     *       // The maximum number of revisions to return.
     *       pageSize: 'placeholder-value',
     *       // A pagination token returned from a previous call to `ListOSPolicyAssignmentRevisions` that indicates where this listing should continue from.
     *       pageToken: 'placeholder-value',
     *     });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "nextPageToken": "my_nextPageToken",
     *   //   "osPolicyAssignments": []
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * ```
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    listRevisions(
      params: Params$Resource$Projects$Locations$Ospolicyassignments$Listrevisions,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    listRevisions(
      params?: Params$Resource$Projects$Locations$Ospolicyassignments$Listrevisions,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ListOSPolicyAssignmentRevisionsResponse>;
    listRevisions(
      params: Params$Resource$Projects$Locations$Ospolicyassignments$Listrevisions,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    listRevisions(
      params: Params$Resource$Projects$Locations$Ospolicyassignments$Listrevisions,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ListOSPolicyAssignmentRevisionsResponse>,
      callback: BodyResponseCallback<Schema$ListOSPolicyAssignmentRevisionsResponse>
    ): void;
    listRevisions(
      params: Params$Resource$Projects$Locations$Ospolicyassignments$Listrevisions,
      callback: BodyResponseCallback<Schema$ListOSPolicyAssignmentRevisionsResponse>
    ): void;
    listRevisions(
      callback: BodyResponseCallback<Schema$ListOSPolicyAssignmentRevisionsResponse>
    ): void;
    listRevisions(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Ospolicyassignments$Listrevisions
        | BodyResponseCallback<Schema$ListOSPolicyAssignmentRevisionsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ListOSPolicyAssignmentRevisionsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ListOSPolicyAssignmentRevisionsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$ListOSPolicyAssignmentRevisionsResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Ospolicyassignments$Listrevisions;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Ospolicyassignments$Listrevisions;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://osconfig.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}:listRevisions').replace(
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
        createAPIRequest<Schema$ListOSPolicyAssignmentRevisionsResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ListOSPolicyAssignmentRevisionsResponse>(
          parameters
        );
      }
    }

    /**
     * Update an existing OS policy assignment. This method creates a new revision of the OS policy assignment. This method returns a long running operation (LRO) that contains the rollout details. The rollout can be cancelled by cancelling the LRO. For more information, see [Method: projects.locations.osPolicyAssignments.operations.cancel](https://cloud.google.com/compute/docs/osconfig/rest/v1/projects.locations.osPolicyAssignments.operations/cancel).
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/osconfig.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const osconfig = google.osconfig('v1');
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
     *   const res = await osconfig.projects.locations.osPolicyAssignments.patch({
     *     // Resource name. Format: `projects/{project_number\}/locations/{location\}/osPolicyAssignments/{os_policy_assignment_id\}` This field is ignored when you create an OS policy assignment.
     *     name: 'projects/my-project/locations/my-location/osPolicyAssignments/my-osPolicyAssignment',
     *     // Optional. Field mask that controls which fields of the assignment should be updated.
     *     updateMask: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "baseline": false,
     *       //   "deleted": false,
     *       //   "description": "my_description",
     *       //   "etag": "my_etag",
     *       //   "instanceFilter": {},
     *       //   "name": "my_name",
     *       //   "osPolicies": [],
     *       //   "reconciling": false,
     *       //   "revisionCreateTime": "my_revisionCreateTime",
     *       //   "revisionId": "my_revisionId",
     *       //   "rollout": {},
     *       //   "rolloutState": "my_rolloutState",
     *       //   "uid": "my_uid"
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
    patch(
      params: Params$Resource$Projects$Locations$Ospolicyassignments$Patch,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    patch(
      params?: Params$Resource$Projects$Locations$Ospolicyassignments$Patch,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Operation>;
    patch(
      params: Params$Resource$Projects$Locations$Ospolicyassignments$Patch,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    patch(
      params: Params$Resource$Projects$Locations$Ospolicyassignments$Patch,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    patch(
      params: Params$Resource$Projects$Locations$Ospolicyassignments$Patch,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    patch(callback: BodyResponseCallback<Schema$Operation>): void;
    patch(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Ospolicyassignments$Patch
        | BodyResponseCallback<Schema$Operation>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Operation>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Operation>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$Operation> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Ospolicyassignments$Patch;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Ospolicyassignments$Patch;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://osconfig.googleapis.com/';
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
        createAPIRequest<Schema$Operation>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Operation>(parameters);
      }
    }
  }

  export interface Params$Resource$Projects$Locations$Ospolicyassignments$Create
    extends StandardParameters {
    /**
     * Required. The logical name of the OS policy assignment in the project with the following restrictions: * Must contain only lowercase letters, numbers, and hyphens. * Must start with a letter. * Must be between 1-63 characters. * Must end with a number or a letter. * Must be unique within the project.
     */
    osPolicyAssignmentId?: string;
    /**
     * Required. The parent resource name in the form: projects/{project\}/locations/{location\}. Note: Specify the zone of your VMs as the location.
     */
    parent?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$OSPolicyAssignment;
  }
  export interface Params$Resource$Projects$Locations$Ospolicyassignments$Delete
    extends StandardParameters {
    /**
     * Required. The name of the OS policy assignment to be deleted
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Locations$Ospolicyassignments$Get
    extends StandardParameters {
    /**
     * Required. The resource name of OS policy assignment. Format: `projects/{project\}/locations/{location\}/osPolicyAssignments/{os_policy_assignment\}@{revisionId\}`
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Locations$Ospolicyassignments$List
    extends StandardParameters {
    /**
     * The maximum number of assignments to return.
     */
    pageSize?: number;
    /**
     * A pagination token returned from a previous call to `ListOSPolicyAssignments` that indicates where this listing should continue from.
     */
    pageToken?: string;
    /**
     * Required. The parent resource name.
     */
    parent?: string;
  }
  export interface Params$Resource$Projects$Locations$Ospolicyassignments$Listrevisions
    extends StandardParameters {
    /**
     * Required. The name of the OS policy assignment to list revisions for.
     */
    name?: string;
    /**
     * The maximum number of revisions to return.
     */
    pageSize?: number;
    /**
     * A pagination token returned from a previous call to `ListOSPolicyAssignmentRevisions` that indicates where this listing should continue from.
     */
    pageToken?: string;
  }
  export interface Params$Resource$Projects$Locations$Ospolicyassignments$Patch
    extends StandardParameters {
    /**
     * Resource name. Format: `projects/{project_number\}/locations/{location\}/osPolicyAssignments/{os_policy_assignment_id\}` This field is ignored when you create an OS policy assignment.
     */
    name?: string;
    /**
     * Optional. Field mask that controls which fields of the assignment should be updated.
     */
    updateMask?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$OSPolicyAssignment;
  }

  export class Resource$Projects$Locations$Ospolicyassignments$Operations {
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
     * //   https://console.developers.google.com/apis/api/osconfig.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const osconfig = google.osconfig('v1');
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
     *     await osconfig.projects.locations.osPolicyAssignments.operations.cancel({
     *       // The name of the operation resource to be cancelled.
     *       name: 'projects/my-project/locations/my-location/osPolicyAssignments/my-osPolicyAssignment/operations/my-operation',
     *
     *       // Request body metadata
     *       requestBody: {
     *         // request body parameters
     *         // {}
     *       },
     *     });
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
      params: Params$Resource$Projects$Locations$Ospolicyassignments$Operations$Cancel,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    cancel(
      params?: Params$Resource$Projects$Locations$Ospolicyassignments$Operations$Cancel,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Empty>;
    cancel(
      params: Params$Resource$Projects$Locations$Ospolicyassignments$Operations$Cancel,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    cancel(
      params: Params$Resource$Projects$Locations$Ospolicyassignments$Operations$Cancel,
      options: MethodOptions | BodyResponseCallback<Schema$Empty>,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    cancel(
      params: Params$Resource$Projects$Locations$Ospolicyassignments$Operations$Cancel,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    cancel(callback: BodyResponseCallback<Schema$Empty>): void;
    cancel(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Ospolicyassignments$Operations$Cancel
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
        {}) as Params$Resource$Projects$Locations$Ospolicyassignments$Operations$Cancel;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Ospolicyassignments$Operations$Cancel;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://osconfig.googleapis.com/';
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
        createAPIRequest<Schema$Empty>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Empty>(parameters);
      }
    }

    /**
     * Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/osconfig.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const osconfig = google.osconfig('v1');
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
     *     await osconfig.projects.locations.osPolicyAssignments.operations.get({
     *       // The name of the operation resource.
     *       name: 'projects/my-project/locations/my-location/osPolicyAssignments/my-osPolicyAssignment/operations/my-operation',
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
    get(
      params: Params$Resource$Projects$Locations$Ospolicyassignments$Operations$Get,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    get(
      params?: Params$Resource$Projects$Locations$Ospolicyassignments$Operations$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Operation>;
    get(
      params: Params$Resource$Projects$Locations$Ospolicyassignments$Operations$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Ospolicyassignments$Operations$Get,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Ospolicyassignments$Operations$Get,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    get(callback: BodyResponseCallback<Schema$Operation>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Ospolicyassignments$Operations$Get
        | BodyResponseCallback<Schema$Operation>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Operation>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Operation>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$Operation> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Ospolicyassignments$Operations$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Ospolicyassignments$Operations$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://osconfig.googleapis.com/';
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
        createAPIRequest<Schema$Operation>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Operation>(parameters);
      }
    }
  }

  export interface Params$Resource$Projects$Locations$Ospolicyassignments$Operations$Cancel
    extends StandardParameters {
    /**
     * The name of the operation resource to be cancelled.
     */
    name?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$CancelOperationRequest;
  }
  export interface Params$Resource$Projects$Locations$Ospolicyassignments$Operations$Get
    extends StandardParameters {
    /**
     * The name of the operation resource.
     */
    name?: string;
  }

  export class Resource$Projects$Patchdeployments {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Create an OS Config patch deployment.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/osconfig.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const osconfig = google.osconfig('v1');
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
     *   const res = await osconfig.projects.patchDeployments.create({
     *     // Required. The project to apply this patch deployment to in the form `projects/x`.
     *     parent: 'projects/my-project',
     *     // Required. A name for the patch deployment in the project. When creating a name the following rules apply: * Must contain only lowercase letters, numbers, and hyphens. * Must start with a letter. * Must be between 1-63 characters. * Must end with a number or a letter. * Must be unique within the project.
     *     patchDeploymentId: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "createTime": "my_createTime",
     *       //   "description": "my_description",
     *       //   "duration": "my_duration",
     *       //   "instanceFilter": {},
     *       //   "lastExecuteTime": "my_lastExecuteTime",
     *       //   "name": "my_name",
     *       //   "oneTimeSchedule": {},
     *       //   "patchConfig": {},
     *       //   "recurringSchedule": {},
     *       //   "rollout": {},
     *       //   "state": "my_state",
     *       //   "updateTime": "my_updateTime"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "createTime": "my_createTime",
     *   //   "description": "my_description",
     *   //   "duration": "my_duration",
     *   //   "instanceFilter": {},
     *   //   "lastExecuteTime": "my_lastExecuteTime",
     *   //   "name": "my_name",
     *   //   "oneTimeSchedule": {},
     *   //   "patchConfig": {},
     *   //   "recurringSchedule": {},
     *   //   "rollout": {},
     *   //   "state": "my_state",
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
      params: Params$Resource$Projects$Patchdeployments$Create,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    create(
      params?: Params$Resource$Projects$Patchdeployments$Create,
      options?: MethodOptions
    ): GaxiosPromise<Schema$PatchDeployment>;
    create(
      params: Params$Resource$Projects$Patchdeployments$Create,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    create(
      params: Params$Resource$Projects$Patchdeployments$Create,
      options: MethodOptions | BodyResponseCallback<Schema$PatchDeployment>,
      callback: BodyResponseCallback<Schema$PatchDeployment>
    ): void;
    create(
      params: Params$Resource$Projects$Patchdeployments$Create,
      callback: BodyResponseCallback<Schema$PatchDeployment>
    ): void;
    create(callback: BodyResponseCallback<Schema$PatchDeployment>): void;
    create(
      paramsOrCallback?:
        | Params$Resource$Projects$Patchdeployments$Create
        | BodyResponseCallback<Schema$PatchDeployment>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$PatchDeployment>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$PatchDeployment>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$PatchDeployment> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Patchdeployments$Create;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Patchdeployments$Create;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://osconfig.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}/patchDeployments').replace(
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
        createAPIRequest<Schema$PatchDeployment>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$PatchDeployment>(parameters);
      }
    }

    /**
     * Delete an OS Config patch deployment.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/osconfig.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const osconfig = google.osconfig('v1');
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
     *   const res = await osconfig.projects.patchDeployments.delete({
     *     // Required. The resource name of the patch deployment in the form `projects/x/patchDeployments/x`.
     *     name: 'projects/my-project/patchDeployments/my-patchDeployment',
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
      params: Params$Resource$Projects$Patchdeployments$Delete,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    delete(
      params?: Params$Resource$Projects$Patchdeployments$Delete,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Empty>;
    delete(
      params: Params$Resource$Projects$Patchdeployments$Delete,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    delete(
      params: Params$Resource$Projects$Patchdeployments$Delete,
      options: MethodOptions | BodyResponseCallback<Schema$Empty>,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    delete(
      params: Params$Resource$Projects$Patchdeployments$Delete,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    delete(callback: BodyResponseCallback<Schema$Empty>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Projects$Patchdeployments$Delete
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
        {}) as Params$Resource$Projects$Patchdeployments$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Patchdeployments$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://osconfig.googleapis.com/';
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
        createAPIRequest<Schema$Empty>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Empty>(parameters);
      }
    }

    /**
     * Get an OS Config patch deployment.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/osconfig.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const osconfig = google.osconfig('v1');
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
     *   const res = await osconfig.projects.patchDeployments.get({
     *     // Required. The resource name of the patch deployment in the form `projects/x/patchDeployments/x`.
     *     name: 'projects/my-project/patchDeployments/my-patchDeployment',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "createTime": "my_createTime",
     *   //   "description": "my_description",
     *   //   "duration": "my_duration",
     *   //   "instanceFilter": {},
     *   //   "lastExecuteTime": "my_lastExecuteTime",
     *   //   "name": "my_name",
     *   //   "oneTimeSchedule": {},
     *   //   "patchConfig": {},
     *   //   "recurringSchedule": {},
     *   //   "rollout": {},
     *   //   "state": "my_state",
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
      params: Params$Resource$Projects$Patchdeployments$Get,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    get(
      params?: Params$Resource$Projects$Patchdeployments$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$PatchDeployment>;
    get(
      params: Params$Resource$Projects$Patchdeployments$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Projects$Patchdeployments$Get,
      options: MethodOptions | BodyResponseCallback<Schema$PatchDeployment>,
      callback: BodyResponseCallback<Schema$PatchDeployment>
    ): void;
    get(
      params: Params$Resource$Projects$Patchdeployments$Get,
      callback: BodyResponseCallback<Schema$PatchDeployment>
    ): void;
    get(callback: BodyResponseCallback<Schema$PatchDeployment>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Projects$Patchdeployments$Get
        | BodyResponseCallback<Schema$PatchDeployment>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$PatchDeployment>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$PatchDeployment>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$PatchDeployment> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Patchdeployments$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Patchdeployments$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://osconfig.googleapis.com/';
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
        createAPIRequest<Schema$PatchDeployment>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$PatchDeployment>(parameters);
      }
    }

    /**
     * Get a page of OS Config patch deployments.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/osconfig.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const osconfig = google.osconfig('v1');
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
     *   const res = await osconfig.projects.patchDeployments.list({
     *     // Optional. The maximum number of patch deployments to return. Default is 100.
     *     pageSize: 'placeholder-value',
     *     // Optional. A pagination token returned from a previous call to ListPatchDeployments that indicates where this listing should continue from.
     *     pageToken: 'placeholder-value',
     *     // Required. The resource name of the parent in the form `projects/x`.
     *     parent: 'projects/my-project',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "nextPageToken": "my_nextPageToken",
     *   //   "patchDeployments": []
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
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
      params: Params$Resource$Projects$Patchdeployments$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Projects$Patchdeployments$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ListPatchDeploymentsResponse>;
    list(
      params: Params$Resource$Projects$Patchdeployments$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Projects$Patchdeployments$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ListPatchDeploymentsResponse>,
      callback: BodyResponseCallback<Schema$ListPatchDeploymentsResponse>
    ): void;
    list(
      params: Params$Resource$Projects$Patchdeployments$List,
      callback: BodyResponseCallback<Schema$ListPatchDeploymentsResponse>
    ): void;
    list(
      callback: BodyResponseCallback<Schema$ListPatchDeploymentsResponse>
    ): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Projects$Patchdeployments$List
        | BodyResponseCallback<Schema$ListPatchDeploymentsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ListPatchDeploymentsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ListPatchDeploymentsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$ListPatchDeploymentsResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Patchdeployments$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Patchdeployments$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://osconfig.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}/patchDeployments').replace(
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
        createAPIRequest<Schema$ListPatchDeploymentsResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ListPatchDeploymentsResponse>(
          parameters
        );
      }
    }

    /**
     * Update an OS Config patch deployment.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/osconfig.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const osconfig = google.osconfig('v1');
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
     *   const res = await osconfig.projects.patchDeployments.patch({
     *     // Unique name for the patch deployment resource in a project. The patch deployment name is in the form: `projects/{project_id\}/patchDeployments/{patch_deployment_id\}`. This field is ignored when you create a new patch deployment.
     *     name: 'projects/my-project/patchDeployments/my-patchDeployment',
     *     // Optional. Field mask that controls which fields of the patch deployment should be updated.
     *     updateMask: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "createTime": "my_createTime",
     *       //   "description": "my_description",
     *       //   "duration": "my_duration",
     *       //   "instanceFilter": {},
     *       //   "lastExecuteTime": "my_lastExecuteTime",
     *       //   "name": "my_name",
     *       //   "oneTimeSchedule": {},
     *       //   "patchConfig": {},
     *       //   "recurringSchedule": {},
     *       //   "rollout": {},
     *       //   "state": "my_state",
     *       //   "updateTime": "my_updateTime"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "createTime": "my_createTime",
     *   //   "description": "my_description",
     *   //   "duration": "my_duration",
     *   //   "instanceFilter": {},
     *   //   "lastExecuteTime": "my_lastExecuteTime",
     *   //   "name": "my_name",
     *   //   "oneTimeSchedule": {},
     *   //   "patchConfig": {},
     *   //   "recurringSchedule": {},
     *   //   "rollout": {},
     *   //   "state": "my_state",
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
      params: Params$Resource$Projects$Patchdeployments$Patch,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    patch(
      params?: Params$Resource$Projects$Patchdeployments$Patch,
      options?: MethodOptions
    ): GaxiosPromise<Schema$PatchDeployment>;
    patch(
      params: Params$Resource$Projects$Patchdeployments$Patch,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    patch(
      params: Params$Resource$Projects$Patchdeployments$Patch,
      options: MethodOptions | BodyResponseCallback<Schema$PatchDeployment>,
      callback: BodyResponseCallback<Schema$PatchDeployment>
    ): void;
    patch(
      params: Params$Resource$Projects$Patchdeployments$Patch,
      callback: BodyResponseCallback<Schema$PatchDeployment>
    ): void;
    patch(callback: BodyResponseCallback<Schema$PatchDeployment>): void;
    patch(
      paramsOrCallback?:
        | Params$Resource$Projects$Patchdeployments$Patch
        | BodyResponseCallback<Schema$PatchDeployment>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$PatchDeployment>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$PatchDeployment>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$PatchDeployment> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Patchdeployments$Patch;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Patchdeployments$Patch;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://osconfig.googleapis.com/';
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
        createAPIRequest<Schema$PatchDeployment>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$PatchDeployment>(parameters);
      }
    }

    /**
     * Change state of patch deployment to "PAUSED". Patch deployment in paused state doesn't generate patch jobs.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/osconfig.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const osconfig = google.osconfig('v1');
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
     *   const res = await osconfig.projects.patchDeployments.pause({
     *     // Required. The resource name of the patch deployment in the form `projects/x/patchDeployments/x`.
     *     name: 'projects/my-project/patchDeployments/my-patchDeployment',
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
     *   //   "createTime": "my_createTime",
     *   //   "description": "my_description",
     *   //   "duration": "my_duration",
     *   //   "instanceFilter": {},
     *   //   "lastExecuteTime": "my_lastExecuteTime",
     *   //   "name": "my_name",
     *   //   "oneTimeSchedule": {},
     *   //   "patchConfig": {},
     *   //   "recurringSchedule": {},
     *   //   "rollout": {},
     *   //   "state": "my_state",
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
    pause(
      params: Params$Resource$Projects$Patchdeployments$Pause,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    pause(
      params?: Params$Resource$Projects$Patchdeployments$Pause,
      options?: MethodOptions
    ): GaxiosPromise<Schema$PatchDeployment>;
    pause(
      params: Params$Resource$Projects$Patchdeployments$Pause,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    pause(
      params: Params$Resource$Projects$Patchdeployments$Pause,
      options: MethodOptions | BodyResponseCallback<Schema$PatchDeployment>,
      callback: BodyResponseCallback<Schema$PatchDeployment>
    ): void;
    pause(
      params: Params$Resource$Projects$Patchdeployments$Pause,
      callback: BodyResponseCallback<Schema$PatchDeployment>
    ): void;
    pause(callback: BodyResponseCallback<Schema$PatchDeployment>): void;
    pause(
      paramsOrCallback?:
        | Params$Resource$Projects$Patchdeployments$Pause
        | BodyResponseCallback<Schema$PatchDeployment>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$PatchDeployment>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$PatchDeployment>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$PatchDeployment> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Patchdeployments$Pause;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Patchdeployments$Pause;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://osconfig.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}:pause').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$PatchDeployment>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$PatchDeployment>(parameters);
      }
    }

    /**
     * Change state of patch deployment back to "ACTIVE". Patch deployment in active state continues to generate patch jobs.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/osconfig.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const osconfig = google.osconfig('v1');
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
     *   const res = await osconfig.projects.patchDeployments.resume({
     *     // Required. The resource name of the patch deployment in the form `projects/x/patchDeployments/x`.
     *     name: 'projects/my-project/patchDeployments/my-patchDeployment',
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
     *   //   "createTime": "my_createTime",
     *   //   "description": "my_description",
     *   //   "duration": "my_duration",
     *   //   "instanceFilter": {},
     *   //   "lastExecuteTime": "my_lastExecuteTime",
     *   //   "name": "my_name",
     *   //   "oneTimeSchedule": {},
     *   //   "patchConfig": {},
     *   //   "recurringSchedule": {},
     *   //   "rollout": {},
     *   //   "state": "my_state",
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
    resume(
      params: Params$Resource$Projects$Patchdeployments$Resume,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    resume(
      params?: Params$Resource$Projects$Patchdeployments$Resume,
      options?: MethodOptions
    ): GaxiosPromise<Schema$PatchDeployment>;
    resume(
      params: Params$Resource$Projects$Patchdeployments$Resume,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    resume(
      params: Params$Resource$Projects$Patchdeployments$Resume,
      options: MethodOptions | BodyResponseCallback<Schema$PatchDeployment>,
      callback: BodyResponseCallback<Schema$PatchDeployment>
    ): void;
    resume(
      params: Params$Resource$Projects$Patchdeployments$Resume,
      callback: BodyResponseCallback<Schema$PatchDeployment>
    ): void;
    resume(callback: BodyResponseCallback<Schema$PatchDeployment>): void;
    resume(
      paramsOrCallback?:
        | Params$Resource$Projects$Patchdeployments$Resume
        | BodyResponseCallback<Schema$PatchDeployment>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$PatchDeployment>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$PatchDeployment>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$PatchDeployment> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Patchdeployments$Resume;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Patchdeployments$Resume;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://osconfig.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}:resume').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$PatchDeployment>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$PatchDeployment>(parameters);
      }
    }
  }

  export interface Params$Resource$Projects$Patchdeployments$Create
    extends StandardParameters {
    /**
     * Required. The project to apply this patch deployment to in the form `projects/x`.
     */
    parent?: string;
    /**
     * Required. A name for the patch deployment in the project. When creating a name the following rules apply: * Must contain only lowercase letters, numbers, and hyphens. * Must start with a letter. * Must be between 1-63 characters. * Must end with a number or a letter. * Must be unique within the project.
     */
    patchDeploymentId?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$PatchDeployment;
  }
  export interface Params$Resource$Projects$Patchdeployments$Delete
    extends StandardParameters {
    /**
     * Required. The resource name of the patch deployment in the form `projects/x/patchDeployments/x`.
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Patchdeployments$Get
    extends StandardParameters {
    /**
     * Required. The resource name of the patch deployment in the form `projects/x/patchDeployments/x`.
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Patchdeployments$List
    extends StandardParameters {
    /**
     * Optional. The maximum number of patch deployments to return. Default is 100.
     */
    pageSize?: number;
    /**
     * Optional. A pagination token returned from a previous call to ListPatchDeployments that indicates where this listing should continue from.
     */
    pageToken?: string;
    /**
     * Required. The resource name of the parent in the form `projects/x`.
     */
    parent?: string;
  }
  export interface Params$Resource$Projects$Patchdeployments$Patch
    extends StandardParameters {
    /**
     * Unique name for the patch deployment resource in a project. The patch deployment name is in the form: `projects/{project_id\}/patchDeployments/{patch_deployment_id\}`. This field is ignored when you create a new patch deployment.
     */
    name?: string;
    /**
     * Optional. Field mask that controls which fields of the patch deployment should be updated.
     */
    updateMask?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$PatchDeployment;
  }
  export interface Params$Resource$Projects$Patchdeployments$Pause
    extends StandardParameters {
    /**
     * Required. The resource name of the patch deployment in the form `projects/x/patchDeployments/x`.
     */
    name?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$PausePatchDeploymentRequest;
  }
  export interface Params$Resource$Projects$Patchdeployments$Resume
    extends StandardParameters {
    /**
     * Required. The resource name of the patch deployment in the form `projects/x/patchDeployments/x`.
     */
    name?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$ResumePatchDeploymentRequest;
  }

  export class Resource$Projects$Patchjobs {
    context: APIRequestContext;
    instanceDetails: Resource$Projects$Patchjobs$Instancedetails;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.instanceDetails = new Resource$Projects$Patchjobs$Instancedetails(
        this.context
      );
    }

    /**
     * Cancel a patch job. The patch job must be active. Canceled patch jobs cannot be restarted.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/osconfig.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const osconfig = google.osconfig('v1');
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
     *   const res = await osconfig.projects.patchJobs.cancel({
     *     // Required. Name of the patch in the form `projects/x/patchJobs/x`
     *     name: 'projects/my-project/patchJobs/my-patchJob',
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
     *   //   "createTime": "my_createTime",
     *   //   "description": "my_description",
     *   //   "displayName": "my_displayName",
     *   //   "dryRun": false,
     *   //   "duration": "my_duration",
     *   //   "errorMessage": "my_errorMessage",
     *   //   "instanceDetailsSummary": {},
     *   //   "instanceFilter": {},
     *   //   "name": "my_name",
     *   //   "patchConfig": {},
     *   //   "patchDeployment": "my_patchDeployment",
     *   //   "percentComplete": {},
     *   //   "rollout": {},
     *   //   "state": "my_state",
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
    cancel(
      params: Params$Resource$Projects$Patchjobs$Cancel,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    cancel(
      params?: Params$Resource$Projects$Patchjobs$Cancel,
      options?: MethodOptions
    ): GaxiosPromise<Schema$PatchJob>;
    cancel(
      params: Params$Resource$Projects$Patchjobs$Cancel,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    cancel(
      params: Params$Resource$Projects$Patchjobs$Cancel,
      options: MethodOptions | BodyResponseCallback<Schema$PatchJob>,
      callback: BodyResponseCallback<Schema$PatchJob>
    ): void;
    cancel(
      params: Params$Resource$Projects$Patchjobs$Cancel,
      callback: BodyResponseCallback<Schema$PatchJob>
    ): void;
    cancel(callback: BodyResponseCallback<Schema$PatchJob>): void;
    cancel(
      paramsOrCallback?:
        | Params$Resource$Projects$Patchjobs$Cancel
        | BodyResponseCallback<Schema$PatchJob>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$PatchJob>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$PatchJob>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$PatchJob> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Patchjobs$Cancel;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Patchjobs$Cancel;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://osconfig.googleapis.com/';
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
        createAPIRequest<Schema$PatchJob>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$PatchJob>(parameters);
      }
    }

    /**
     * Patch VM instances by creating and running a patch job.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/osconfig.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const osconfig = google.osconfig('v1');
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
     *   const res = await osconfig.projects.patchJobs.execute({
     *     // Required. The project in which to run this patch in the form `projects/x`
     *     parent: 'projects/my-project',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "description": "my_description",
     *       //   "displayName": "my_displayName",
     *       //   "dryRun": false,
     *       //   "duration": "my_duration",
     *       //   "instanceFilter": {},
     *       //   "patchConfig": {},
     *       //   "rollout": {}
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "createTime": "my_createTime",
     *   //   "description": "my_description",
     *   //   "displayName": "my_displayName",
     *   //   "dryRun": false,
     *   //   "duration": "my_duration",
     *   //   "errorMessage": "my_errorMessage",
     *   //   "instanceDetailsSummary": {},
     *   //   "instanceFilter": {},
     *   //   "name": "my_name",
     *   //   "patchConfig": {},
     *   //   "patchDeployment": "my_patchDeployment",
     *   //   "percentComplete": {},
     *   //   "rollout": {},
     *   //   "state": "my_state",
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
    execute(
      params: Params$Resource$Projects$Patchjobs$Execute,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    execute(
      params?: Params$Resource$Projects$Patchjobs$Execute,
      options?: MethodOptions
    ): GaxiosPromise<Schema$PatchJob>;
    execute(
      params: Params$Resource$Projects$Patchjobs$Execute,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    execute(
      params: Params$Resource$Projects$Patchjobs$Execute,
      options: MethodOptions | BodyResponseCallback<Schema$PatchJob>,
      callback: BodyResponseCallback<Schema$PatchJob>
    ): void;
    execute(
      params: Params$Resource$Projects$Patchjobs$Execute,
      callback: BodyResponseCallback<Schema$PatchJob>
    ): void;
    execute(callback: BodyResponseCallback<Schema$PatchJob>): void;
    execute(
      paramsOrCallback?:
        | Params$Resource$Projects$Patchjobs$Execute
        | BodyResponseCallback<Schema$PatchJob>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$PatchJob>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$PatchJob>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$PatchJob> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Patchjobs$Execute;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Patchjobs$Execute;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://osconfig.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}/patchJobs:execute').replace(
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
        createAPIRequest<Schema$PatchJob>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$PatchJob>(parameters);
      }
    }

    /**
     * Get the patch job. This can be used to track the progress of an ongoing patch job or review the details of completed jobs.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/osconfig.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const osconfig = google.osconfig('v1');
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
     *   const res = await osconfig.projects.patchJobs.get({
     *     // Required. Name of the patch in the form `projects/x/patchJobs/x`
     *     name: 'projects/my-project/patchJobs/my-patchJob',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "createTime": "my_createTime",
     *   //   "description": "my_description",
     *   //   "displayName": "my_displayName",
     *   //   "dryRun": false,
     *   //   "duration": "my_duration",
     *   //   "errorMessage": "my_errorMessage",
     *   //   "instanceDetailsSummary": {},
     *   //   "instanceFilter": {},
     *   //   "name": "my_name",
     *   //   "patchConfig": {},
     *   //   "patchDeployment": "my_patchDeployment",
     *   //   "percentComplete": {},
     *   //   "rollout": {},
     *   //   "state": "my_state",
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
      params: Params$Resource$Projects$Patchjobs$Get,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    get(
      params?: Params$Resource$Projects$Patchjobs$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$PatchJob>;
    get(
      params: Params$Resource$Projects$Patchjobs$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Projects$Patchjobs$Get,
      options: MethodOptions | BodyResponseCallback<Schema$PatchJob>,
      callback: BodyResponseCallback<Schema$PatchJob>
    ): void;
    get(
      params: Params$Resource$Projects$Patchjobs$Get,
      callback: BodyResponseCallback<Schema$PatchJob>
    ): void;
    get(callback: BodyResponseCallback<Schema$PatchJob>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Projects$Patchjobs$Get
        | BodyResponseCallback<Schema$PatchJob>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$PatchJob>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$PatchJob>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$PatchJob> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Patchjobs$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Patchjobs$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://osconfig.googleapis.com/';
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
        createAPIRequest<Schema$PatchJob>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$PatchJob>(parameters);
      }
    }

    /**
     * Get a list of patch jobs.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/osconfig.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const osconfig = google.osconfig('v1');
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
     *   const res = await osconfig.projects.patchJobs.list({
     *     // If provided, this field specifies the criteria that must be met by patch jobs to be included in the response. Currently, filtering is only available on the patch_deployment field.
     *     filter: 'placeholder-value',
     *     // The maximum number of instance status to return.
     *     pageSize: 'placeholder-value',
     *     // A pagination token returned from a previous call that indicates where this listing should continue from.
     *     pageToken: 'placeholder-value',
     *     // Required. In the form of `projects/x`
     *     parent: 'projects/my-project',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "nextPageToken": "my_nextPageToken",
     *   //   "patchJobs": []
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
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
      params: Params$Resource$Projects$Patchjobs$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Projects$Patchjobs$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ListPatchJobsResponse>;
    list(
      params: Params$Resource$Projects$Patchjobs$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Projects$Patchjobs$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ListPatchJobsResponse>,
      callback: BodyResponseCallback<Schema$ListPatchJobsResponse>
    ): void;
    list(
      params: Params$Resource$Projects$Patchjobs$List,
      callback: BodyResponseCallback<Schema$ListPatchJobsResponse>
    ): void;
    list(callback: BodyResponseCallback<Schema$ListPatchJobsResponse>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Projects$Patchjobs$List
        | BodyResponseCallback<Schema$ListPatchJobsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ListPatchJobsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ListPatchJobsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$ListPatchJobsResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Patchjobs$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Patchjobs$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://osconfig.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}/patchJobs').replace(
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
        createAPIRequest<Schema$ListPatchJobsResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ListPatchJobsResponse>(parameters);
      }
    }
  }

  export interface Params$Resource$Projects$Patchjobs$Cancel
    extends StandardParameters {
    /**
     * Required. Name of the patch in the form `projects/x/patchJobs/x`
     */
    name?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$CancelPatchJobRequest;
  }
  export interface Params$Resource$Projects$Patchjobs$Execute
    extends StandardParameters {
    /**
     * Required. The project in which to run this patch in the form `projects/x`
     */
    parent?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$ExecutePatchJobRequest;
  }
  export interface Params$Resource$Projects$Patchjobs$Get
    extends StandardParameters {
    /**
     * Required. Name of the patch in the form `projects/x/patchJobs/x`
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Patchjobs$List
    extends StandardParameters {
    /**
     * If provided, this field specifies the criteria that must be met by patch jobs to be included in the response. Currently, filtering is only available on the patch_deployment field.
     */
    filter?: string;
    /**
     * The maximum number of instance status to return.
     */
    pageSize?: number;
    /**
     * A pagination token returned from a previous call that indicates where this listing should continue from.
     */
    pageToken?: string;
    /**
     * Required. In the form of `projects/x`
     */
    parent?: string;
  }

  export class Resource$Projects$Patchjobs$Instancedetails {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Get a list of instance details for a given patch job.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/osconfig.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const osconfig = google.osconfig('v1');
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
     *   const res = await osconfig.projects.patchJobs.instanceDetails.list({
     *     // A filter expression that filters results listed in the response. This field supports filtering results by instance zone, name, state, or `failure_reason`.
     *     filter: 'placeholder-value',
     *     // The maximum number of instance details records to return. Default is 100.
     *     pageSize: 'placeholder-value',
     *     // A pagination token returned from a previous call that indicates where this listing should continue from.
     *     pageToken: 'placeholder-value',
     *     // Required. The parent for the instances are in the form of `projects/x/patchJobs/x`.
     *     parent: 'projects/my-project/patchJobs/my-patchJob',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "nextPageToken": "my_nextPageToken",
     *   //   "patchJobInstanceDetails": []
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
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
      params: Params$Resource$Projects$Patchjobs$Instancedetails$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Projects$Patchjobs$Instancedetails$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ListPatchJobInstanceDetailsResponse>;
    list(
      params: Params$Resource$Projects$Patchjobs$Instancedetails$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Projects$Patchjobs$Instancedetails$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ListPatchJobInstanceDetailsResponse>,
      callback: BodyResponseCallback<Schema$ListPatchJobInstanceDetailsResponse>
    ): void;
    list(
      params: Params$Resource$Projects$Patchjobs$Instancedetails$List,
      callback: BodyResponseCallback<Schema$ListPatchJobInstanceDetailsResponse>
    ): void;
    list(
      callback: BodyResponseCallback<Schema$ListPatchJobInstanceDetailsResponse>
    ): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Projects$Patchjobs$Instancedetails$List
        | BodyResponseCallback<Schema$ListPatchJobInstanceDetailsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ListPatchJobInstanceDetailsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ListPatchJobInstanceDetailsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$ListPatchJobInstanceDetailsResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Patchjobs$Instancedetails$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Patchjobs$Instancedetails$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://osconfig.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}/instanceDetails').replace(
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
        createAPIRequest<Schema$ListPatchJobInstanceDetailsResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ListPatchJobInstanceDetailsResponse>(
          parameters
        );
      }
    }
  }

  export interface Params$Resource$Projects$Patchjobs$Instancedetails$List
    extends StandardParameters {
    /**
     * A filter expression that filters results listed in the response. This field supports filtering results by instance zone, name, state, or `failure_reason`.
     */
    filter?: string;
    /**
     * The maximum number of instance details records to return. Default is 100.
     */
    pageSize?: number;
    /**
     * A pagination token returned from a previous call that indicates where this listing should continue from.
     */
    pageToken?: string;
    /**
     * Required. The parent for the instances are in the form of `projects/x/patchJobs/x`.
     */
    parent?: string;
  }
}
