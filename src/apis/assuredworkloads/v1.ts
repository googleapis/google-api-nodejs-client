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

export namespace assuredworkloads_v1 {
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
   * Assured Workloads API
   *
   *
   *
   * @example
   * ```js
   * const {google} = require('googleapis');
   * const assuredworkloads = google.assuredworkloads('v1');
   * ```
   */
  export class Assuredworkloads {
    context: APIRequestContext;
    assuredworkloads: Resource$Assuredworkloads;
    folders: Resource$Folders;
    organizations: Resource$Organizations;
    projects: Resource$Projects;

    constructor(options: GlobalOptions, google?: GoogleConfigurable) {
      this.context = {
        _options: options || {},
        google,
      };

      this.assuredworkloads = new Resource$Assuredworkloads(this.context);
      this.folders = new Resource$Folders(this.context);
      this.organizations = new Resource$Organizations(this.context);
      this.projects = new Resource$Projects(this.context);
    }
  }

  /**
   * Request for acknowledging the violation
   */
  export interface Schema$GoogleCloudAssuredworkloadsV1AcknowledgeViolationRequest {
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
  export interface Schema$GoogleCloudAssuredworkloadsV1AcknowledgeViolationResponse {}
  /**
   * The response message for AggregateDbFrameworkComplianceReport.
   */
  export interface Schema$GoogleCloudAssuredworkloadsV1AggregateDbFrameworkComplianceReportResponse {
    /**
     * The list of aggregated compliance reports.
     */
    aggregatedComplianceReports?: Schema$GoogleCloudAssuredworkloadsV1AggregatedComplianceReport[];
  }
  /**
   * The aggregated compliance report.
   */
  export interface Schema$GoogleCloudAssuredworkloadsV1AggregatedComplianceReport {
    /**
     * The control assessment details of the framework.
     */
    controlAssessmentDetails?: Schema$GoogleCloudAssuredworkloadsV1ControlAssessmentDetails;
    /**
     * The report time of the aggregated compliance report.
     */
    reportTime?: string | null;
  }
  /**
   * Response containing the analysis results for the hypothetical resource move.
   */
  export interface Schema$GoogleCloudAssuredworkloadsV1AnalyzeWorkloadMoveResponse {
    /**
     * List of analysis results for each asset in scope.
     */
    assetMoveAnalyses?: Schema$GoogleCloudAssuredworkloadsV1AssetMoveAnalysis[];
    /**
     * The next page token. Is empty if the last page is reached.
     */
    nextPageToken?: string | null;
  }
  /**
   * Operation metadata to give request details of ApplyWorkloadUpdate.
   */
  export interface Schema$GoogleCloudAssuredworkloadsV1ApplyWorkloadUpdateOperationMetadata {
    /**
     * Optional. The time the operation was created.
     */
    action?: string | null;
    /**
     * Optional. Output only. The time the operation was created.
     */
    createTime?: string | null;
    /**
     * Required. The resource name of the update
     */
    updateName?: string | null;
  }
  /**
   * Request to apply update to a workload.
   */
  export interface Schema$GoogleCloudAssuredworkloadsV1ApplyWorkloadUpdateRequest {
    /**
     * The action to be performed on the update.
     */
    action?: string | null;
  }
  /**
   * Response for ApplyWorkloadUpdate endpoint.
   */
  export interface Schema$GoogleCloudAssuredworkloadsV1ApplyWorkloadUpdateResponse {
    /**
     * The update that was applied.
     */
    appliedUpdate?: Schema$GoogleCloudAssuredworkloadsV1WorkloadUpdate;
  }
  /**
   * Request for archiving resource events.
   */
  export interface Schema$GoogleCloudAssuredworkloadsV1ArchiveResourceEventsRequest {
    /**
     * Optional. Time to set as ArchiveTime in the archive table. If not provided, the current time is used.
     */
    archiveTime?: string | null;
    /**
     * Required. The number of events to process in a single transaction batch.
     */
    batchSize?: number | null;
    /**
     * Required. Only events with EventTime earlier than this cutoff will be archived.
     */
    eventCutoffTime?: string | null;
    /**
     * Required. The maximum total number of events to move in this request.
     */
    maxEventsMove?: number | null;
    /**
     * Required. The organization ID for which to archive events.
     */
    organizationId?: string | null;
    /**
     * Required. The region of the workload(s) whose events should be archived. This is used to filter workloads based on AssurantWorkloadData.region.
     */
    region?: string | null;
  }
  /**
   * Response for archiving resource events.
   */
  export interface Schema$GoogleCloudAssuredworkloadsV1ArchiveResourceEventsResponse {
    /**
     * The total number of events successfully moved to the archive table.
     */
    movedEventsCount?: number | null;
  }
  /**
   * Represents move analysis results for an asset.
   */
  export interface Schema$GoogleCloudAssuredworkloadsV1AssetMoveAnalysis {
    /**
     * List of eligible analyses performed for the asset.
     */
    analysisGroups?: Schema$GoogleCloudAssuredworkloadsV1MoveAnalysisGroup[];
    /**
     * The full resource name of the asset being analyzed. Example: //compute.googleapis.com/projects/my_project_123/zones/zone1/instances/instance1
     */
    asset?: string | null;
    /**
     * Type of the asset being analyzed. Possible values will be among the ones listed [here](https://cloud.google.com/asset-inventory/docs/supported-asset-types).
     */
    assetType?: string | null;
  }
  /**
   * Request for acknowledging the violations in a batch
   */
  export interface Schema$GoogleCloudAssuredworkloadsV1BatchAcknowledgeViolationsRequest {
    /**
     * Optional. Acknowledge type of specified violations.
     */
    acknowledgeType?: string | null;
    /**
     * Required. Business justification explaining the need for violations acknowledgement
     */
    comment?: string | null;
    /**
     * Required. The resource names of the Violations to acknowledge. Format for each name: organizations/{organization\}/locations/{location\}/workloads/{workload\}/violations/{violation\}
     */
    names?: string[] | null;
  }
  /**
   * Response for batch violation acknowledgement
   */
  export interface Schema$GoogleCloudAssuredworkloadsV1BatchAcknowledgeViolationsResponse {
    /**
     * Count of acknowledged violations.
     */
    acknowledgedViolationsCount?: number | null;
  }
  /**
   * A Common Expression Language (CEL) expression that's used to create a rule.
   */
  export interface Schema$GoogleCloudAssuredworkloadsV1CELExpression {
    /**
     * Required. The logical expression in CEL. The maximum length of the condition is 1000 characters. For more information, see [CEL expression](https://cloud.google.com/security-command-center/docs/compliance-manager-write-cel-expressions).
     */
    expression?: string | null;
    /**
     * The resource instance types on which this expression is defined. The format is `/`. For example: `compute.googleapis.com/Instance`
     */
    resourceTypesValues?: Schema$GoogleCloudAssuredworkloadsV1StringList;
  }
  /**
   * The cloud control assessment details for non-manual cloud controls.
   */
  export interface Schema$GoogleCloudAssuredworkloadsV1CloudControlAssessmentDetails {
    /**
     * Output only. The evaluation status of the cloud control.
     */
    evaluationState?: string | null;
    /**
     * The number of findings for the cloud control.
     */
    findingsCount?: number | null;
  }
  /**
   * The cloud control report.
   */
  export interface Schema$GoogleCloudAssuredworkloadsV1CloudControlReport {
    /**
     * The list of categories for the cloud control.
     */
    categories?: string[] | null;
    /**
     * The name of the cloud control.
     */
    cloudControl?: string | null;
    /**
     * The details of a cloud control assessment.
     */
    cloudControlAssessmentDetails?: Schema$GoogleCloudAssuredworkloadsV1CloudControlAssessmentDetails;
    /**
     * The name of the cloud control deployment.
     */
    cloudControlDeployment?: string | null;
    /**
     * The type of the cloud control.
     */
    cloudControlType?: string | null;
    /**
     * The description of the cloud control.
     */
    description?: string | null;
    /**
     * The display name of the cloud control.
     */
    displayName?: string | null;
    /**
     * The enforcement mode of the cloud control.
     */
    enforcementMode?: string | null;
    /**
     * The category of the finding.
     */
    findingCategory?: string | null;
    /**
     * The severity of the finding.
     */
    findingSeverity?: string | null;
    /**
     * The major revision IDs of the frameworks that the cloud control belongs to.
     */
    frameworkMajorRevisionIds?: string[] | null;
    /**
     * The major revision ID of the cloud control.
     */
    majorRevisionId?: string | null;
    /**
     * The details of a manual cloud control assessment.
     */
    manualCloudControlAssessmentDetails?: Schema$GoogleCloudAssuredworkloadsV1ManualCloudControlAssessmentDetails;
    /**
     * The minor revision ID of the cloud control.
     */
    minorRevisionId?: string | null;
    /**
     * The list of rules that correspond to the cloud control.
     */
    rules?: Schema$GoogleCloudAssuredworkloadsV1Rule[];
    /**
     * The list of similar controls.
     */
    similarControls?: Schema$GoogleCloudAssuredworkloadsV1SimilarControls[];
  }
  /**
   * The details for a control assessment.
   */
  export interface Schema$GoogleCloudAssuredworkloadsV1ControlAssessmentDetails {
    /**
     * The list of controls that were assessed and are passing.
     */
    assessedPassingControlIds?: string[] | null;
    /**
     * The number of controls that were assessed and are passing.
     */
    assessedPassingControls?: number | null;
    /**
     * The list of controls that are failing.
     */
    failingControlIds?: string[] | null;
    /**
     * The number of controls that are failing.
     */
    failingControls?: number | null;
    /**
     * The list of controls that aren't assessed because they require manual review.
     */
    notAssessedControlIds?: string[] | null;
    /**
     * The number of controls that aren't assessed because they require manual review.
     */
    notAssessedControls?: number | null;
    /**
     * The list of controls that are passing or not assessed.
     */
    passingControlIds?: string[] | null;
    /**
     * The number of controls that are passing or not assessed.
     */
    passingControls?: number | null;
  }
  /**
   * Operation metadata to give request details of CreateWorkload.
   */
  export interface Schema$GoogleCloudAssuredworkloadsV1CreateWorkloadOperationMetadata {
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
  }
  /**
   * The details for control compliance.
   */
  export interface Schema$GoogleCloudAssuredworkloadsV1DbControlComplianceSummary {
    /**
     * The list of cloud control reports.
     */
    cloudControlReports?: Schema$GoogleCloudAssuredworkloadsV1CloudControlReport[];
    /**
     * The list of compliance frameworks that the control belongs to.
     */
    complianceFrameworks?: string[] | null;
    /**
     * The name of the control.
     */
    control?: string | null;
    /**
     * The responsibility type for the control.
     */
    controlResponsibilityType?: string | null;
    /**
     * The description of the control.
     */
    description?: string | null;
    /**
     * The display name of the control.
     */
    displayName?: string | null;
    /**
     * Whether the control is a fake control. Fake controls are created and mapped to cloud controls that don't belong to a control group.
     */
    isFakeControl?: boolean | null;
    /**
     * Identifier. The name of the control compliance summary.
     */
    name?: string | null;
    /**
     * Output only. The overall evaluation status of the control.
     */
    overallEvaluationState?: string | null;
    /**
     * The list of similar controls.
     */
    similarControls?: Schema$GoogleCloudAssuredworkloadsV1SimilarControls[];
    /**
     * The total number of findings for the control.
     */
    totalFindingsCount?: number | null;
  }
  /**
   * The details for a finding.
   */
  export interface Schema$GoogleCloudAssuredworkloadsV1DbFindingSummary {
    /**
     * Output only. The category of the finding.
     */
    findingCategory?: string | null;
    /**
     * Output only. The class of the finding.
     */
    findingClass?: string | null;
    /**
     * Output only. The count of the finding.
     */
    findingCount?: string | null;
    /**
     * Identifier. The name of the finding summary.
     */
    name?: string | null;
    /**
     * Optional. The list of compliance frameworks that the finding belongs to.
     */
    relatedFrameworks?: string[] | null;
    /**
     * Output only. The severity of the finding.
     */
    severity?: string | null;
    /**
     * Output only. The last updated time of the finding.
     */
    updateTime?: string | null;
  }
  /**
   * The details for a framework compliance summary.
   */
  export interface Schema$GoogleCloudAssuredworkloadsV1DbFrameworkComplianceSummary {
    /**
     * The control assessment details of the framework.
     */
    controlAssessmentDetails?: Schema$GoogleCloudAssuredworkloadsV1ControlAssessmentDetails;
    /**
     * Output only. The trend of controls that are passing for the given duration.
     */
    controlsPassingTrend?: Schema$GoogleCloudAssuredworkloadsV1Trend;
    /**
     * Output only. The count of the findings generated against the framework.
     */
    findingCount?: string | null;
    /**
     * The name of the framework.
     */
    framework?: string | null;
    /**
     * The list of framework categories supported by the framework.
     */
    frameworkCategories?: string[] | null;
    /**
     * Optional. The display name for the framework.
     */
    frameworkDisplayName?: string | null;
    /**
     * The type of framework.
     */
    frameworkType?: string | null;
    /**
     * The major revision ID of the framework.
     */
    majorRevisionId?: string | null;
    /**
     * The minor revision ID of the framework.
     */
    minorRevisionId?: string | null;
    /**
     * Identifier. The name of the framework compliance summary.
     */
    name?: string | null;
    /**
     * The list of cloud providers supported by the framework.
     */
    supportedCloudProviders?: string[] | null;
    /**
     * The target resource details for the framework.
     */
    targetResourceDetails?: Schema$GoogleCloudAssuredworkloadsV1TargetResourceDetails[];
  }
  /**
   * Response for EnableComplianceUpdates endpoint.
   */
  export interface Schema$GoogleCloudAssuredworkloadsV1EnableComplianceUpdatesResponse {}
  /**
   * Response for EnableResourceMonitoring endpoint.
   */
  export interface Schema$GoogleCloudAssuredworkloadsV1EnableResourceMonitoringResponse {}
  /**
   * The response message for FetchDbFrameworkComplianceReport.
   */
  export interface Schema$GoogleCloudAssuredworkloadsV1FetchDbFrameworkComplianceReportResponse {
    /**
     * The control assessment details of the framework.
     */
    controlAssessmentDetails?: Schema$GoogleCloudAssuredworkloadsV1ControlAssessmentDetails;
    /**
     * The name of the framework.
     */
    framework?: string | null;
    /**
     * The list of framework categories supported.
     */
    frameworkCategories?: string[] | null;
    /**
     * The description of the framework.
     */
    frameworkDescription?: string | null;
    /**
     * Optional. The display name for the framework.
     */
    frameworkDisplayName?: string | null;
    /**
     * The type of the framework.
     */
    frameworkType?: string | null;
    /**
     * The latest major revision ID of the framework.
     */
    majorRevisionId?: string | null;
    /**
     * The latest minor revision ID of the latest major revision of the framework.
     */
    minorRevisionId?: string | null;
    /**
     * The name of the framework compliance report.
     */
    name?: string | null;
    /**
     * The list of cloud providers that are supported by the framework.
     */
    supportedCloudProviders?: string[] | null;
    /**
     * The target resource details of the framework.
     */
    targetResourceDetails?: Schema$GoogleCloudAssuredworkloadsV1TargetResourceDetails[];
    /**
     * Output only. The last updated time of the report.
     */
    updateTime?: string | null;
  }
  /**
   * The response message for ListDBControlComplianceSummaries.
   */
  export interface Schema$GoogleCloudAssuredworkloadsV1ListDbControlComplianceSummariesResponse {
    /**
     * The list of control compliance details.
     */
    dbControlComplianceSummaries?: Schema$GoogleCloudAssuredworkloadsV1DbControlComplianceSummary[];
    /**
     * Output only. The token to retrieve the next page of results.
     */
    nextPageToken?: string | null;
  }
  /**
   * The response message for ListDbFindingSummaries.
   */
  export interface Schema$GoogleCloudAssuredworkloadsV1ListDbFindingSummariesResponse {
    /**
     * List of finding summary by category.
     */
    dbFindingSummaries?: Schema$GoogleCloudAssuredworkloadsV1DbFindingSummary[];
    /**
     * Output only. The token to retrieve the next page of results.
     */
    nextPageToken?: string | null;
  }
  /**
   * The response message for ListDbFrameworkComplianceSummariesResponse.
   */
  export interface Schema$GoogleCloudAssuredworkloadsV1ListDbFrameworkComplianceSummariesResponse {
    /**
     * The list of framework compliance summaries.
     */
    dbFrameworkComplianceSummaries?: Schema$GoogleCloudAssuredworkloadsV1DbFrameworkComplianceSummary[];
    /**
     * Output only. The token to retrieve the next page of results.
     */
    nextPageToken?: string | null;
  }
  /**
   * Response of ListViolations endpoint.
   */
  export interface Schema$GoogleCloudAssuredworkloadsV1ListViolationsResponse {
    /**
     * The next page token. Returns empty if reached the last page.
     */
    nextPageToken?: string | null;
    /**
     * The total number of violations.
     */
    totalSize?: number | null;
    /**
     * List of Violations under a Workload.
     */
    violations?: Schema$GoogleCloudAssuredworkloadsV1Violation[];
  }
  /**
   * Response of ListWorkloads endpoint.
   */
  export interface Schema$GoogleCloudAssuredworkloadsV1ListWorkloadsResponse {
    /**
     * The next page token. Return empty if reached the last page.
     */
    nextPageToken?: string | null;
    /**
     * List of Workloads under a given parent.
     */
    workloads?: Schema$GoogleCloudAssuredworkloadsV1Workload[];
  }
  /**
   * Response of listing the compliance updates per workload with pagination.
   */
  export interface Schema$GoogleCloudAssuredworkloadsV1ListWorkloadUpdatesResponse {
    /**
     * The next page token. Return empty if reached the last page.
     */
    nextPageToken?: string | null;
    /**
     * The list of workload updates for a given workload.
     */
    workloadUpdates?: Schema$GoogleCloudAssuredworkloadsV1WorkloadUpdate[];
  }
  /**
   * The details for a manual cloud control assessment.
   */
  export interface Schema$GoogleCloudAssuredworkloadsV1ManualCloudControlAssessmentDetails {
    /**
     * The guide for assessing a cloud control manually.
     */
    manualCloudControlGuide?: string[] | null;
  }
  /**
   * Represents a logical group of checks performed for an asset. If successful, the group contains the analysis result, otherwise it contains an error with the failure reason.
   */
  export interface Schema$GoogleCloudAssuredworkloadsV1MoveAnalysisGroup {
    /**
     * Result of a successful analysis.
     */
    analysisResult?: Schema$GoogleCloudAssuredworkloadsV1MoveAnalysisResult;
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
  export interface Schema$GoogleCloudAssuredworkloadsV1MoveAnalysisResult {
    /**
     * List of blockers. If not resolved, these will result in compliance violations in the target.
     */
    blockers?: Schema$GoogleCloudAssuredworkloadsV1MoveImpact[];
    /**
     * List of warnings. These are risks that may or may not result in compliance violations.
     */
    warnings?: Schema$GoogleCloudAssuredworkloadsV1MoveImpact[];
  }
  /**
   * Represents the impact of moving the asset to the target.
   */
  export interface Schema$GoogleCloudAssuredworkloadsV1MoveImpact {
    /**
     * Explanation of the impact.
     */
    detail?: string | null;
  }
  /**
   * Request for updating permission settings for a partner workload.
   */
  export interface Schema$GoogleCloudAssuredworkloadsV1MutatePartnerPermissionsRequest {
    /**
     * Optional. The etag of the workload. If this is provided, it must match the server's etag.
     */
    etag?: string | null;
    /**
     * Required. The partner permissions to be updated.
     */
    partnerPermissions?: Schema$GoogleCloudAssuredworkloadsV1WorkloadPartnerPermissions;
    /**
     * Required. The list of fields to be updated. E.g. update_mask { paths: "partner_permissions.data_logs_viewer"\}
     */
    updateMask?: string | null;
  }
  /**
   * This assured workload service object is used to represent the org policy attached to a resource. It servces the same purpose as the orgpolicy.v2.Policy object but with functionality that is limited to what is supported by Assured Workloads(e.g. only one rule under one OrgPolicy object, no conditions, etc).
   */
  export interface Schema$GoogleCloudAssuredworkloadsV1OrgPolicy {
    /**
     * The constraint name of the OrgPolicy. e.g. "constraints/gcp.resourceLocations".
     */
    constraint?: string | null;
    /**
     * If `inherit` is true, policy rules of the lowest ancestor in the resource hierarchy chain are inherited. If it is false, policy rules are not inherited.
     */
    inherit?: boolean | null;
    /**
     * Ignores policies set above this resource and restores to the `constraint_default` value. `reset` can only be true when `rules` is empty and `inherit` is false.
     */
    reset?: boolean | null;
    /**
     * Resource that the OrgPolicy attaches to. Format: folders/123" projects/123".
     */
    resource?: string | null;
    /**
     * The rule of the OrgPolicy.
     */
    rule?: Schema$GoogleCloudAssuredworkloadsV1OrgPolicyPolicyRule;
  }
  /**
   * A rule used to express this policy.
   */
  export interface Schema$GoogleCloudAssuredworkloadsV1OrgPolicyPolicyRule {
    /**
     * ListPolicy only when all values are allowed.
     */
    allowAll?: boolean | null;
    /**
     * ListPolicy only when all values are denied.
     */
    denyAll?: boolean | null;
    /**
     * BooleanPolicy only.
     */
    enforce?: boolean | null;
    /**
     * ListPolicy only when custom values are specified.
     */
    values?: Schema$GoogleCloudAssuredworkloadsV1OrgPolicyPolicyRuleStringValues;
  }
  /**
   * The values allowed for a ListPolicy.
   */
  export interface Schema$GoogleCloudAssuredworkloadsV1OrgPolicyPolicyRuleStringValues {
    /**
     * List of values allowed at this resource.
     */
    allowedValues?: string[] | null;
    /**
     * List of values denied at this resource.
     */
    deniedValues?: string[] | null;
  }
  /**
   * Represents an update for an org policy control applied on an Assured Workload resource. The inherited org policy is not considered.
   */
  export interface Schema$GoogleCloudAssuredworkloadsV1OrgPolicyUpdate {
    /**
     * The org policy currently applied on the assured workload resource.
     */
    appliedPolicy?: Schema$GoogleCloudAssuredworkloadsV1OrgPolicy;
    /**
     * The suggested org policy that replaces the applied policy.
     */
    suggestedPolicy?: Schema$GoogleCloudAssuredworkloadsV1OrgPolicy;
  }
  /**
   * Request for restricting list of available resources in Workload environment.
   */
  export interface Schema$GoogleCloudAssuredworkloadsV1RestrictAllowedResourcesRequest {
    /**
     * Required. The type of restriction for using gcp products in the Workload environment.
     */
    restrictionType?: string | null;
  }
  /**
   * Response for restricting the list of allowed resources.
   */
  export interface Schema$GoogleCloudAssuredworkloadsV1RestrictAllowedResourcesResponse {}
  /**
   * Request for reverting archived resource events.
   */
  export interface Schema$GoogleCloudAssuredworkloadsV1RevertArchivedResourceEventsRequest {
    /**
     * Required. Only events within this time range will be reverted. This helps prevent reverting everything when something goes wrong.
     */
    archiveEndTime?: string | null;
    /**
     * Required. Only events within this time range will be reverted. This helps prevent reverting everything when something goes wrong.
     */
    archiveStartTime?: string | null;
    /**
     * Required. The number of events to process in a single transaction batch.
     */
    batchSize?: number | null;
    /**
     * Required. The maximum total number of events to move in this request.
     */
    maxEventsMove?: number | null;
    /**
     * Required. The organization ID for which to revert events.
     */
    organizationId?: string | null;
    /**
     * Required. The region of the workload(s) whose events should be reverted. This is used to filter workloads based on AssurantWorkloadData.region.
     */
    region?: string | null;
  }
  /**
   * Response for reverting archived resource events.
   */
  export interface Schema$GoogleCloudAssuredworkloadsV1RevertArchivedResourceEventsResponse {
    /**
     * The total number of events successfully moved to the original table.
     */
    movedEventsCount?: number | null;
  }
  /**
   * A rule in the cloud control.
   */
  export interface Schema$GoogleCloudAssuredworkloadsV1Rule {
    /**
     * The rule's logic expression in Common Expression Language (CEL).
     */
    celExpression?: Schema$GoogleCloudAssuredworkloadsV1CELExpression;
    /**
     * Optional. The rule description. The maximum length is 2000 characters.
     */
    description?: string | null;
    /**
     * Required. The functionality that's enabled by the rule.
     */
    ruleActionTypes?: string[] | null;
  }
  /**
   * The similar controls.
   */
  export interface Schema$GoogleCloudAssuredworkloadsV1SimilarControls {
    /**
     * The ID of the control.
     */
    controlId?: string | null;
    /**
     * The name of the framework.
     */
    framework?: string | null;
  }
  /**
   * A list of strings for the parameter value.
   */
  export interface Schema$GoogleCloudAssuredworkloadsV1StringList {
    /**
     * Required. The strings in the list.
     */
    values?: string[] | null;
  }
  /**
   * The details for a target resource.
   */
  export interface Schema$GoogleCloudAssuredworkloadsV1TargetResourceDetails {
    /**
     * The create time of the target resource.
     */
    createTime?: string | null;
    /**
     * The framework deployment name for the target resource. For example, `organizations/{organization_id\}/locations/{location\}/frameworkDeployments/{framework_deployment_id\}`
     */
    frameworkDeployment?: string | null;
    /**
     * The major revision ID of the framework for the target resource.
     */
    majorRevisionId?: string | null;
    /**
     * The minor revision ID of the framework for the target resource.
     */
    minorRevisionId?: string | null;
    /**
     * The target resource. For example, `organizations/1234567890`, `projects/1234567890`, or `folders/1234567890`.
     */
    targetResource?: string | null;
    /**
     * The display name of the target resource. For example, `google.com`, `staging-project`, or `development-folder`.
     */
    targetResourceDisplayName?: string | null;
    /**
     * The update time of the target resource.
     */
    updateTime?: string | null;
  }
  /**
   * The trend of a compliance metric.
   */
  export interface Schema$GoogleCloudAssuredworkloadsV1Trend {
    /**
     * Output only. The duration for the trend.
     */
    duration?: string | null;
    /**
     * Output only. The trend value as a percentage. The value can be positive or negative.
     */
    valuePercent?: number | null;
  }
  /**
   * The details of the update.
   */
  export interface Schema$GoogleCloudAssuredworkloadsV1UpdateDetails {
    /**
     * Update to one org policy, e.g. gcp.resourceLocation.
     */
    orgPolicyUpdate?: Schema$GoogleCloudAssuredworkloadsV1OrgPolicyUpdate;
  }
  /**
   * Workload monitoring Violation.
   */
  export interface Schema$GoogleCloudAssuredworkloadsV1Violation {
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
    exceptionContexts?: Schema$GoogleCloudAssuredworkloadsV1ViolationExceptionContext[];
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
    remediation?: Schema$GoogleCloudAssuredworkloadsV1ViolationRemediation;
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
   * Violation exception detail.
   */
  export interface Schema$GoogleCloudAssuredworkloadsV1ViolationExceptionContext {
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
  export interface Schema$GoogleCloudAssuredworkloadsV1ViolationRemediation {
    /**
     * Values that can resolve the violation For example: for list org policy violations, this will either be the list of allowed or denied values
     */
    compliantValues?: string[] | null;
    /**
     * Required. Remediation instructions to resolve violations
     */
    instructions?: Schema$GoogleCloudAssuredworkloadsV1ViolationRemediationInstructions;
    /**
     * Output only. Reemediation type based on the type of org policy values violated
     */
    remediationType?: string | null;
  }
  /**
   * Instructions to remediate violation
   */
  export interface Schema$GoogleCloudAssuredworkloadsV1ViolationRemediationInstructions {
    /**
     * Remediation instructions to resolve violation via cloud console
     */
    consoleInstructions?: Schema$GoogleCloudAssuredworkloadsV1ViolationRemediationInstructionsConsole;
    /**
     * Remediation instructions to resolve violation via gcloud cli
     */
    gcloudInstructions?: Schema$GoogleCloudAssuredworkloadsV1ViolationRemediationInstructionsGcloud;
  }
  /**
   * Remediation instructions to resolve violation via cloud console
   */
  export interface Schema$GoogleCloudAssuredworkloadsV1ViolationRemediationInstructionsConsole {
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
  export interface Schema$GoogleCloudAssuredworkloadsV1ViolationRemediationInstructionsGcloud {
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
  export interface Schema$GoogleCloudAssuredworkloadsV1Workload {
    /**
     * Optional. The billing account used for the resources which are direct children of workload. This billing account is initially associated with the resources created as part of Workload creation. After the initial creation of these resources, the customer can change the assigned billing account. The resource name has the form `billingAccounts/{billing_account_id\}`. For example, `billingAccounts/012345-567890-ABCDEF`.
     */
    billingAccount?: string | null;
    /**
     * Required. Immutable. Compliance Regime associated with this workload.
     */
    complianceRegime?: string | null;
    /**
     * Output only. Count of active Violations in the Workload.
     */
    complianceStatus?: Schema$GoogleCloudAssuredworkloadsV1WorkloadComplianceStatus;
    /**
     * Output only. Urls for services which are compliant for this Assured Workload, but which are currently disallowed by the ResourceUsageRestriction org policy. Invoke RestrictAllowedResources endpoint to allow your project developers to use these services in their environment.
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
     * Output only. Represents the Ekm Provisioning State of the given workload.
     */
    ekmProvisioningResponse?: Schema$GoogleCloudAssuredworkloadsV1WorkloadEkmProvisioningResponse;
    /**
     * Optional. Indicates the sovereignty status of the given workload. Currently meant to be used by Europe/Canada customers.
     */
    enableSovereignControls?: boolean | null;
    /**
     * Optional. ETag of the workload, it is calculated on the basis of the Workload contents. It will be used in Update & Delete operations.
     */
    etag?: string | null;
    /**
     * Output only. Represents the KAJ enrollment state of the given workload.
     */
    kajEnrollmentState?: string | null;
    /**
     * Input only. Settings used to create a CMEK crypto key. When set, a project with a KMS CMEK key is provisioned. This field is deprecated as of Feb 28, 2022. In order to create a Keyring, callers should specify, ENCRYPTION_KEYS_PROJECT or KEYRING in ResourceSettings.resource_type field.
     */
    kmsSettings?: Schema$GoogleCloudAssuredworkloadsV1WorkloadKMSSettings;
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
    partnerPermissions?: Schema$GoogleCloudAssuredworkloadsV1WorkloadPartnerPermissions;
    /**
     * Optional. Billing account necessary for purchasing services from Sovereign Partners. This field is required for creating SIA/PSN/CNTXT/Telefonica partner workloads. The caller should have 'billing.resourceAssociations.create' IAM permission on this billing-account. The format of this string is billingAccounts/AAAAAA-BBBBBB-CCCCCC
     */
    partnerServicesBillingAccount?: string | null;
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
    resources?: Schema$GoogleCloudAssuredworkloadsV1WorkloadResourceInfo[];
    /**
     * Input only. Resource properties that are used to customize workload resources. These properties (such as custom project id) will be used to create workload resources if possible. This field is optional.
     */
    resourceSettings?: Schema$GoogleCloudAssuredworkloadsV1WorkloadResourceSettings[];
    /**
     * Output only. Represents the SAA enrollment response of the given workload. SAA enrollment response is queried during GetWorkload call. In failure cases, user friendly error message is shown in SAA details page.
     */
    saaEnrollmentResponse?: Schema$GoogleCloudAssuredworkloadsV1WorkloadSaaEnrollmentResponse;
    /**
     * Optional. Indicates whether the e-mail notification for a violation is enabled for a workload. This value will be by default True, and if not present will be considered as true. This should only be updated via updateWorkload call. Any Changes to this field during the createWorkload call will not be honored. This will always be true while creating the workload.
     */
    violationNotificationsEnabled?: boolean | null;
    /**
     * Optional. Options to be set for the given created workload.
     */
    workloadOptions?: Schema$GoogleCloudAssuredworkloadsV1WorkloadWorkloadOptions;
  }
  /**
   * Represents the Compliance Status of this workload
   */
  export interface Schema$GoogleCloudAssuredworkloadsV1WorkloadComplianceStatus {
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
  export interface Schema$GoogleCloudAssuredworkloadsV1WorkloadEkmProvisioningResponse {
    /**
     * Indicates Ekm provisioning error if any.
     */
    ekmProvisioningErrorDomain?: string | null;
    /**
     * Detailed error message if Ekm provisioning fails
     */
    ekmProvisioningErrorMapping?: string | null;
    /**
     * Output only. Indicates Ekm enrollment Provisioning of a given workload.
     */
    ekmProvisioningState?: string | null;
  }
  /**
   * Settings specific to the Key Management Service.
   */
  export interface Schema$GoogleCloudAssuredworkloadsV1WorkloadKMSSettings {
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
  export interface Schema$GoogleCloudAssuredworkloadsV1WorkloadPartnerPermissions {
    /**
     * Optional. Allow partner to view support case details for an AXT log
     */
    accessTransparencyLogsSupportCaseViewer?: boolean | null;
    /**
     * Optional. Allow partner to view violation alerts.
     */
    assuredWorkloadsMonitoring?: boolean | null;
    /**
     * Optional. Allow the partner to view inspectability logs and monitoring violations.
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
  export interface Schema$GoogleCloudAssuredworkloadsV1WorkloadResourceInfo {
    /**
     * Output only. Resource identifier. For a project this represents project_number.
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
  export interface Schema$GoogleCloudAssuredworkloadsV1WorkloadResourceSettings {
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
  export interface Schema$GoogleCloudAssuredworkloadsV1WorkloadSaaEnrollmentResponse {
    /**
     * Indicates SAA enrollment setup error if any.
     */
    setupErrors?: string[] | null;
    /**
     * Output only. Indicates SAA enrollment status of a given workload.
     */
    setupStatus?: string | null;
  }
  /**
   * A workload update is a change to the workload's compliance configuration.
   */
  export interface Schema$GoogleCloudAssuredworkloadsV1WorkloadUpdate {
    /**
     * The time the update was created.
     */
    createTime?: string | null;
    /**
     * The details of the update.
     */
    details?: Schema$GoogleCloudAssuredworkloadsV1UpdateDetails;
    /**
     * Output only. Immutable. Identifier. Resource name of the WorkloadUpdate. Format: organizations/{organization\}/locations/{location\}/workloads/{workload\}/updates/{update\}
     */
    name?: string | null;
    /**
     * Output only. The state of the update.
     */
    state?: string | null;
    /**
     * The time the update was last updated.
     */
    updateTime?: string | null;
  }
  /**
   * Options to be set for the given created workload.
   */
  export interface Schema$GoogleCloudAssuredworkloadsV1WorkloadWorkloadOptions {
    /**
     * Optional. Specifies type of KAJ Enrollment if provided.
     */
    kajEnrollmentType?: string | null;
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
    /**
     * Unordered list. Unreachable resources. Populated when the request sets `ListOperationsRequest.return_partial_success` and reads across collections. For example, when attempting to list all resources across all supported locations.
     */
    unreachable?: string[] | null;
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

  export class Resource$Assuredworkloads {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Finds orphan ResourceEvents matching the criteria and moves them to the ArchivedResourceEvents table.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/assuredworkloads.googleapis.com
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
     * const assuredworkloads = google.assuredworkloads('v1');
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
     *   const res = await assuredworkloads.assuredworkloads.archiveResourceEvents({
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "archiveTime": "my_archiveTime",
     *       //   "batchSize": 0,
     *       //   "eventCutoffTime": "my_eventCutoffTime",
     *       //   "maxEventsMove": 0,
     *       //   "organizationId": "my_organizationId",
     *       //   "region": "my_region"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "movedEventsCount": 0
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * ```
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    archiveResourceEvents(
      params: Params$Resource$Assuredworkloads$Archiveresourceevents,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    archiveResourceEvents(
      params?: Params$Resource$Assuredworkloads$Archiveresourceevents,
      options?: MethodOptions
    ): Promise<
      GaxiosResponseWithHTTP2<Schema$GoogleCloudAssuredworkloadsV1ArchiveResourceEventsResponse>
    >;
    archiveResourceEvents(
      params: Params$Resource$Assuredworkloads$Archiveresourceevents,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    archiveResourceEvents(
      params: Params$Resource$Assuredworkloads$Archiveresourceevents,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleCloudAssuredworkloadsV1ArchiveResourceEventsResponse>,
      callback: BodyResponseCallback<Schema$GoogleCloudAssuredworkloadsV1ArchiveResourceEventsResponse>
    ): void;
    archiveResourceEvents(
      params: Params$Resource$Assuredworkloads$Archiveresourceevents,
      callback: BodyResponseCallback<Schema$GoogleCloudAssuredworkloadsV1ArchiveResourceEventsResponse>
    ): void;
    archiveResourceEvents(
      callback: BodyResponseCallback<Schema$GoogleCloudAssuredworkloadsV1ArchiveResourceEventsResponse>
    ): void;
    archiveResourceEvents(
      paramsOrCallback?:
        | Params$Resource$Assuredworkloads$Archiveresourceevents
        | BodyResponseCallback<Schema$GoogleCloudAssuredworkloadsV1ArchiveResourceEventsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleCloudAssuredworkloadsV1ArchiveResourceEventsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleCloudAssuredworkloadsV1ArchiveResourceEventsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<
          GaxiosResponseWithHTTP2<Schema$GoogleCloudAssuredworkloadsV1ArchiveResourceEventsResponse>
        >
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Assuredworkloads$Archiveresourceevents;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Assuredworkloads$Archiveresourceevents;
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
            url: (rootUrl + '/v1/assuredworkloads:archiveResourceEvents')
              .replace(/([^:]\/)\/+/g, '$1')
              .replace(/\{([^+:][^}]*)\}/g, '{+$1}'),
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
        createAPIRequest<Schema$GoogleCloudAssuredworkloadsV1ArchiveResourceEventsResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleCloudAssuredworkloadsV1ArchiveResourceEventsResponse>(
          parameters
        );
      }
    }

    /**
     * Finds matching ArchivedResourceEvents and moves them back to the ResourceEvents table.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/assuredworkloads.googleapis.com
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
     * const assuredworkloads = google.assuredworkloads('v1');
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
     *     await assuredworkloads.assuredworkloads.revertArchivedResourceEvents({
     *       // Request body metadata
     *       requestBody: {
     *         // request body parameters
     *         // {
     *         //   "archiveEndTime": "my_archiveEndTime",
     *         //   "archiveStartTime": "my_archiveStartTime",
     *         //   "batchSize": 0,
     *         //   "maxEventsMove": 0,
     *         //   "organizationId": "my_organizationId",
     *         //   "region": "my_region"
     *         // }
     *       },
     *     });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "movedEventsCount": 0
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * ```
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    revertArchivedResourceEvents(
      params: Params$Resource$Assuredworkloads$Revertarchivedresourceevents,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    revertArchivedResourceEvents(
      params?: Params$Resource$Assuredworkloads$Revertarchivedresourceevents,
      options?: MethodOptions
    ): Promise<
      GaxiosResponseWithHTTP2<Schema$GoogleCloudAssuredworkloadsV1RevertArchivedResourceEventsResponse>
    >;
    revertArchivedResourceEvents(
      params: Params$Resource$Assuredworkloads$Revertarchivedresourceevents,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    revertArchivedResourceEvents(
      params: Params$Resource$Assuredworkloads$Revertarchivedresourceevents,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleCloudAssuredworkloadsV1RevertArchivedResourceEventsResponse>,
      callback: BodyResponseCallback<Schema$GoogleCloudAssuredworkloadsV1RevertArchivedResourceEventsResponse>
    ): void;
    revertArchivedResourceEvents(
      params: Params$Resource$Assuredworkloads$Revertarchivedresourceevents,
      callback: BodyResponseCallback<Schema$GoogleCloudAssuredworkloadsV1RevertArchivedResourceEventsResponse>
    ): void;
    revertArchivedResourceEvents(
      callback: BodyResponseCallback<Schema$GoogleCloudAssuredworkloadsV1RevertArchivedResourceEventsResponse>
    ): void;
    revertArchivedResourceEvents(
      paramsOrCallback?:
        | Params$Resource$Assuredworkloads$Revertarchivedresourceevents
        | BodyResponseCallback<Schema$GoogleCloudAssuredworkloadsV1RevertArchivedResourceEventsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleCloudAssuredworkloadsV1RevertArchivedResourceEventsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleCloudAssuredworkloadsV1RevertArchivedResourceEventsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<
          GaxiosResponseWithHTTP2<Schema$GoogleCloudAssuredworkloadsV1RevertArchivedResourceEventsResponse>
        >
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Assuredworkloads$Revertarchivedresourceevents;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Assuredworkloads$Revertarchivedresourceevents;
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
            url: (rootUrl + '/v1/assuredworkloads:revertArchivedResourceEvents')
              .replace(/([^:]\/)\/+/g, '$1')
              .replace(/\{([^+:][^}]*)\}/g, '{+$1}'),
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
        createAPIRequest<Schema$GoogleCloudAssuredworkloadsV1RevertArchivedResourceEventsResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleCloudAssuredworkloadsV1RevertArchivedResourceEventsResponse>(
          parameters
        );
      }
    }
  }

  export interface Params$Resource$Assuredworkloads$Archiveresourceevents extends StandardParameters {
    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleCloudAssuredworkloadsV1ArchiveResourceEventsRequest;
  }
  export interface Params$Resource$Assuredworkloads$Revertarchivedresourceevents extends StandardParameters {
    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleCloudAssuredworkloadsV1RevertArchivedResourceEventsRequest;
  }

  export class Resource$Folders {
    context: APIRequestContext;
    locations: Resource$Folders$Locations;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.locations = new Resource$Folders$Locations(this.context);
    }
  }

  export class Resource$Folders$Locations {
    context: APIRequestContext;
    dbFindingSummaries: Resource$Folders$Locations$Dbfindingsummaries;
    dbFrameworkComplianceReports: Resource$Folders$Locations$Dbframeworkcompliancereports;
    dbFrameworkComplianceSummaries: Resource$Folders$Locations$Dbframeworkcompliancesummaries;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.dbFindingSummaries =
        new Resource$Folders$Locations$Dbfindingsummaries(this.context);
      this.dbFrameworkComplianceReports =
        new Resource$Folders$Locations$Dbframeworkcompliancereports(
          this.context
        );
      this.dbFrameworkComplianceSummaries =
        new Resource$Folders$Locations$Dbframeworkcompliancesummaries(
          this.context
        );
    }
  }

  export class Resource$Folders$Locations$Dbfindingsummaries {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Lists the finding summary by category for a given scope.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/assuredworkloads.googleapis.com
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
     * const assuredworkloads = google.assuredworkloads('v1');
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
     *   const res = await assuredworkloads.folders.locations.dbFindingSummaries.list({
     *     // Optional. The filtering results.
     *     filter: 'placeholder-value',
     *     // Optional. The requested page size. The server might return fewer items than requested. If unspecified, the server picks an appropriate default.
     *     pageSize: 'placeholder-value',
     *     // Optional. A token that identifies the page of results that the server should return.
     *     pageToken: 'placeholder-value',
     *     // Required. The parent scope for the framework overview page. Formats: - projects/{project\}/locations/{location\} - folders/{folder\}/locations/{location\} - organizations/{organization\}/locations/{location\}
     *     parent: 'folders/my-folder/locations/my-location',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "dbFindingSummaries": [],
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
      params: Params$Resource$Folders$Locations$Dbfindingsummaries$List,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    list(
      params?: Params$Resource$Folders$Locations$Dbfindingsummaries$List,
      options?: MethodOptions
    ): Promise<
      GaxiosResponseWithHTTP2<Schema$GoogleCloudAssuredworkloadsV1ListDbFindingSummariesResponse>
    >;
    list(
      params: Params$Resource$Folders$Locations$Dbfindingsummaries$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Folders$Locations$Dbfindingsummaries$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleCloudAssuredworkloadsV1ListDbFindingSummariesResponse>,
      callback: BodyResponseCallback<Schema$GoogleCloudAssuredworkloadsV1ListDbFindingSummariesResponse>
    ): void;
    list(
      params: Params$Resource$Folders$Locations$Dbfindingsummaries$List,
      callback: BodyResponseCallback<Schema$GoogleCloudAssuredworkloadsV1ListDbFindingSummariesResponse>
    ): void;
    list(
      callback: BodyResponseCallback<Schema$GoogleCloudAssuredworkloadsV1ListDbFindingSummariesResponse>
    ): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Folders$Locations$Dbfindingsummaries$List
        | BodyResponseCallback<Schema$GoogleCloudAssuredworkloadsV1ListDbFindingSummariesResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleCloudAssuredworkloadsV1ListDbFindingSummariesResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleCloudAssuredworkloadsV1ListDbFindingSummariesResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<
          GaxiosResponseWithHTTP2<Schema$GoogleCloudAssuredworkloadsV1ListDbFindingSummariesResponse>
        >
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Folders$Locations$Dbfindingsummaries$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Folders$Locations$Dbfindingsummaries$List;
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
        options.rootUrl || 'https://assuredworkloads.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}/dbFindingSummaries')
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
        createAPIRequest<Schema$GoogleCloudAssuredworkloadsV1ListDbFindingSummariesResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleCloudAssuredworkloadsV1ListDbFindingSummariesResponse>(
          parameters
        );
      }
    }
  }

  export interface Params$Resource$Folders$Locations$Dbfindingsummaries$List extends StandardParameters {
    /**
     * Optional. The filtering results.
     */
    filter?: string;
    /**
     * Optional. The requested page size. The server might return fewer items than requested. If unspecified, the server picks an appropriate default.
     */
    pageSize?: number;
    /**
     * Optional. A token that identifies the page of results that the server should return.
     */
    pageToken?: string;
    /**
     * Required. The parent scope for the framework overview page. Formats: - projects/{project\}/locations/{location\} - folders/{folder\}/locations/{location\} - organizations/{organization\}/locations/{location\}
     */
    parent?: string;
  }

  export class Resource$Folders$Locations$Dbframeworkcompliancereports {
    context: APIRequestContext;
    dbControlComplianceSummaries: Resource$Folders$Locations$Dbframeworkcompliancereports$Dbcontrolcompliancesummaries;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.dbControlComplianceSummaries =
        new Resource$Folders$Locations$Dbframeworkcompliancereports$Dbcontrolcompliancesummaries(
          this.context
        );
    }

    /**
     * Gets the aggregated compliance report over time for a given scope.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/assuredworkloads.googleapis.com
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
     * const assuredworkloads = google.assuredworkloads('v1');
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
     *     await assuredworkloads.folders.locations.dbFrameworkComplianceReports.aggregate(
     *       {
     *         // Optional. The filtering results.
     *         filter: 'placeholder-value',
     *         // Optional. Exclusive end of the interval. If specified, a Timestamp matching this interval will have to be before the end.
     *         'interval.endTime': 'placeholder-value',
     *         // Optional. Inclusive start of the interval. If specified, a Timestamp matching this interval will have to be the same or after the start.
     *         'interval.startTime': 'placeholder-value',
     *         // Required. The name of the aggregated compliance report over time to retrieve. Format: `organizations/{organization_id\}/locations/{location\}/dbFrameworkComplianceReports/{db_framework_compliance_report\}`
     *         name: 'folders/my-folder/locations/my-location/dbFrameworkComplianceReports/my-dbFrameworkComplianceReport',
     *       },
     *     );
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "aggregatedComplianceReports": []
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * ```
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    aggregate(
      params: Params$Resource$Folders$Locations$Dbframeworkcompliancereports$Aggregate,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    aggregate(
      params?: Params$Resource$Folders$Locations$Dbframeworkcompliancereports$Aggregate,
      options?: MethodOptions
    ): Promise<
      GaxiosResponseWithHTTP2<Schema$GoogleCloudAssuredworkloadsV1AggregateDbFrameworkComplianceReportResponse>
    >;
    aggregate(
      params: Params$Resource$Folders$Locations$Dbframeworkcompliancereports$Aggregate,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    aggregate(
      params: Params$Resource$Folders$Locations$Dbframeworkcompliancereports$Aggregate,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleCloudAssuredworkloadsV1AggregateDbFrameworkComplianceReportResponse>,
      callback: BodyResponseCallback<Schema$GoogleCloudAssuredworkloadsV1AggregateDbFrameworkComplianceReportResponse>
    ): void;
    aggregate(
      params: Params$Resource$Folders$Locations$Dbframeworkcompliancereports$Aggregate,
      callback: BodyResponseCallback<Schema$GoogleCloudAssuredworkloadsV1AggregateDbFrameworkComplianceReportResponse>
    ): void;
    aggregate(
      callback: BodyResponseCallback<Schema$GoogleCloudAssuredworkloadsV1AggregateDbFrameworkComplianceReportResponse>
    ): void;
    aggregate(
      paramsOrCallback?:
        | Params$Resource$Folders$Locations$Dbframeworkcompliancereports$Aggregate
        | BodyResponseCallback<Schema$GoogleCloudAssuredworkloadsV1AggregateDbFrameworkComplianceReportResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleCloudAssuredworkloadsV1AggregateDbFrameworkComplianceReportResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleCloudAssuredworkloadsV1AggregateDbFrameworkComplianceReportResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<
          GaxiosResponseWithHTTP2<Schema$GoogleCloudAssuredworkloadsV1AggregateDbFrameworkComplianceReportResponse>
        >
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Folders$Locations$Dbframeworkcompliancereports$Aggregate;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Folders$Locations$Dbframeworkcompliancereports$Aggregate;
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
        options.rootUrl || 'https://assuredworkloads.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}:aggregate')
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
        createAPIRequest<Schema$GoogleCloudAssuredworkloadsV1AggregateDbFrameworkComplianceReportResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleCloudAssuredworkloadsV1AggregateDbFrameworkComplianceReportResponse>(
          parameters
        );
      }
    }

    /**
     * Fetches the framework compliance report for a given scope.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/assuredworkloads.googleapis.com
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
     * const assuredworkloads = google.assuredworkloads('v1');
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
     *     await assuredworkloads.folders.locations.dbFrameworkComplianceReports.fetch(
     *       {
     *         // Optional. The end time of the report.
     *         endTime: 'placeholder-value',
     *         // Optional. The filtering results.
     *         filter: 'placeholder-value',
     *         // Required. The name of the framework compliance report to retrieve.
     *         name: 'folders/my-folder/locations/my-location/dbFrameworkComplianceReports/my-dbFrameworkComplianceReport',
     *       },
     *     );
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "controlAssessmentDetails": {},
     *   //   "framework": "my_framework",
     *   //   "frameworkCategories": [],
     *   //   "frameworkDescription": "my_frameworkDescription",
     *   //   "frameworkDisplayName": "my_frameworkDisplayName",
     *   //   "frameworkType": "my_frameworkType",
     *   //   "majorRevisionId": "my_majorRevisionId",
     *   //   "minorRevisionId": "my_minorRevisionId",
     *   //   "name": "my_name",
     *   //   "supportedCloudProviders": [],
     *   //   "targetResourceDetails": [],
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
    fetch(
      params: Params$Resource$Folders$Locations$Dbframeworkcompliancereports$Fetch,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    fetch(
      params?: Params$Resource$Folders$Locations$Dbframeworkcompliancereports$Fetch,
      options?: MethodOptions
    ): Promise<
      GaxiosResponseWithHTTP2<Schema$GoogleCloudAssuredworkloadsV1FetchDbFrameworkComplianceReportResponse>
    >;
    fetch(
      params: Params$Resource$Folders$Locations$Dbframeworkcompliancereports$Fetch,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    fetch(
      params: Params$Resource$Folders$Locations$Dbframeworkcompliancereports$Fetch,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleCloudAssuredworkloadsV1FetchDbFrameworkComplianceReportResponse>,
      callback: BodyResponseCallback<Schema$GoogleCloudAssuredworkloadsV1FetchDbFrameworkComplianceReportResponse>
    ): void;
    fetch(
      params: Params$Resource$Folders$Locations$Dbframeworkcompliancereports$Fetch,
      callback: BodyResponseCallback<Schema$GoogleCloudAssuredworkloadsV1FetchDbFrameworkComplianceReportResponse>
    ): void;
    fetch(
      callback: BodyResponseCallback<Schema$GoogleCloudAssuredworkloadsV1FetchDbFrameworkComplianceReportResponse>
    ): void;
    fetch(
      paramsOrCallback?:
        | Params$Resource$Folders$Locations$Dbframeworkcompliancereports$Fetch
        | BodyResponseCallback<Schema$GoogleCloudAssuredworkloadsV1FetchDbFrameworkComplianceReportResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleCloudAssuredworkloadsV1FetchDbFrameworkComplianceReportResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleCloudAssuredworkloadsV1FetchDbFrameworkComplianceReportResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<
          GaxiosResponseWithHTTP2<Schema$GoogleCloudAssuredworkloadsV1FetchDbFrameworkComplianceReportResponse>
        >
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Folders$Locations$Dbframeworkcompliancereports$Fetch;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Folders$Locations$Dbframeworkcompliancereports$Fetch;
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
        options.rootUrl || 'https://assuredworkloads.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}:fetch')
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
        createAPIRequest<Schema$GoogleCloudAssuredworkloadsV1FetchDbFrameworkComplianceReportResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleCloudAssuredworkloadsV1FetchDbFrameworkComplianceReportResponse>(
          parameters
        );
      }
    }
  }

  export interface Params$Resource$Folders$Locations$Dbframeworkcompliancereports$Aggregate extends StandardParameters {
    /**
     * Optional. The filtering results.
     */
    filter?: string;
    /**
     * Optional. Exclusive end of the interval. If specified, a Timestamp matching this interval will have to be before the end.
     */
    'interval.endTime'?: string;
    /**
     * Optional. Inclusive start of the interval. If specified, a Timestamp matching this interval will have to be the same or after the start.
     */
    'interval.startTime'?: string;
    /**
     * Required. The name of the aggregated compliance report over time to retrieve. Format: `organizations/{organization_id\}/locations/{location\}/dbFrameworkComplianceReports/{db_framework_compliance_report\}`
     */
    name?: string;
  }
  export interface Params$Resource$Folders$Locations$Dbframeworkcompliancereports$Fetch extends StandardParameters {
    /**
     * Optional. The end time of the report.
     */
    endTime?: string;
    /**
     * Optional. The filtering results.
     */
    filter?: string;
    /**
     * Required. The name of the framework compliance report to retrieve.
     */
    name?: string;
  }

  export class Resource$Folders$Locations$Dbframeworkcompliancereports$Dbcontrolcompliancesummaries {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Lists the control compliance summary for a given scope.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/assuredworkloads.googleapis.com
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
     * const assuredworkloads = google.assuredworkloads('v1');
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
     *     await assuredworkloads.folders.locations.dbFrameworkComplianceReports.dbControlComplianceSummaries.list(
     *       {
     *         // Optional. The filtering results.
     *         filter: 'placeholder-value',
     *         // Optional. The requested page size. The server might return fewer items than requested. If unspecified, the default page size is 50. The maximum value is 1000.
     *         pageSize: 'placeholder-value',
     *         // Optional. A token that identifies the page of results that the server should return.
     *         pageToken: 'placeholder-value',
     *         // Required. The parent scope for the framework overview page. Format: organizations/{organization\}/locations/{location\}/dbFrameworkComplianceReports/{db_framework_compliance_report\} folders/{folder\}/locations/{location\}/dbFrameworkComplianceReports/{db_framework_compliance_report\} projects/{project\}/locations/{location\}/dbFrameworkComplianceReports/{db_framework_compliance_report\}
     *         parent:
     *           'folders/my-folder/locations/my-location/dbFrameworkComplianceReports/my-dbFrameworkComplianceReport',
     *       },
     *     );
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "dbControlComplianceSummaries": [],
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
      params: Params$Resource$Folders$Locations$Dbframeworkcompliancereports$Dbcontrolcompliancesummaries$List,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    list(
      params?: Params$Resource$Folders$Locations$Dbframeworkcompliancereports$Dbcontrolcompliancesummaries$List,
      options?: MethodOptions
    ): Promise<
      GaxiosResponseWithHTTP2<Schema$GoogleCloudAssuredworkloadsV1ListDbControlComplianceSummariesResponse>
    >;
    list(
      params: Params$Resource$Folders$Locations$Dbframeworkcompliancereports$Dbcontrolcompliancesummaries$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Folders$Locations$Dbframeworkcompliancereports$Dbcontrolcompliancesummaries$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleCloudAssuredworkloadsV1ListDbControlComplianceSummariesResponse>,
      callback: BodyResponseCallback<Schema$GoogleCloudAssuredworkloadsV1ListDbControlComplianceSummariesResponse>
    ): void;
    list(
      params: Params$Resource$Folders$Locations$Dbframeworkcompliancereports$Dbcontrolcompliancesummaries$List,
      callback: BodyResponseCallback<Schema$GoogleCloudAssuredworkloadsV1ListDbControlComplianceSummariesResponse>
    ): void;
    list(
      callback: BodyResponseCallback<Schema$GoogleCloudAssuredworkloadsV1ListDbControlComplianceSummariesResponse>
    ): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Folders$Locations$Dbframeworkcompliancereports$Dbcontrolcompliancesummaries$List
        | BodyResponseCallback<Schema$GoogleCloudAssuredworkloadsV1ListDbControlComplianceSummariesResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleCloudAssuredworkloadsV1ListDbControlComplianceSummariesResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleCloudAssuredworkloadsV1ListDbControlComplianceSummariesResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<
          GaxiosResponseWithHTTP2<Schema$GoogleCloudAssuredworkloadsV1ListDbControlComplianceSummariesResponse>
        >
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Folders$Locations$Dbframeworkcompliancereports$Dbcontrolcompliancesummaries$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Folders$Locations$Dbframeworkcompliancereports$Dbcontrolcompliancesummaries$List;
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
        options.rootUrl || 'https://assuredworkloads.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}/dbControlComplianceSummaries')
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
        createAPIRequest<Schema$GoogleCloudAssuredworkloadsV1ListDbControlComplianceSummariesResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleCloudAssuredworkloadsV1ListDbControlComplianceSummariesResponse>(
          parameters
        );
      }
    }
  }

  export interface Params$Resource$Folders$Locations$Dbframeworkcompliancereports$Dbcontrolcompliancesummaries$List extends StandardParameters {
    /**
     * Optional. The filtering results.
     */
    filter?: string;
    /**
     * Optional. The requested page size. The server might return fewer items than requested. If unspecified, the default page size is 50. The maximum value is 1000.
     */
    pageSize?: number;
    /**
     * Optional. A token that identifies the page of results that the server should return.
     */
    pageToken?: string;
    /**
     * Required. The parent scope for the framework overview page. Format: organizations/{organization\}/locations/{location\}/dbFrameworkComplianceReports/{db_framework_compliance_report\} folders/{folder\}/locations/{location\}/dbFrameworkComplianceReports/{db_framework_compliance_report\} projects/{project\}/locations/{location\}/dbFrameworkComplianceReports/{db_framework_compliance_report\}
     */
    parent?: string;
  }

  export class Resource$Folders$Locations$Dbframeworkcompliancesummaries {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Lists the framework compliance summary for a given scope.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/assuredworkloads.googleapis.com
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
     * const assuredworkloads = google.assuredworkloads('v1');
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
     *     await assuredworkloads.folders.locations.dbFrameworkComplianceSummaries.list(
     *       {
     *         // Optional. The filtering results.
     *         filter: 'placeholder-value',
     *         // Optional. The requested page size. The server might return fewer items than requested. If unspecified, the default page size is 50. The maximum value is 1000.
     *         pageSize: 'placeholder-value',
     *         // Optional. A token that identifies the page of results that the server should return. Pass the next_page_token value from a previous result.
     *         pageToken: 'placeholder-value',
     *         // Required. The parent scope for the framework compliance summary. Format: organizations/{organization\}/locations/{location\} folders/{folder\}/locations/{location\} projects/{project\}/locations/{location\}
     *         parent: 'folders/my-folder/locations/my-location',
     *         // Optional. Specifies the level of detail to return in the response.
     *         view: 'placeholder-value',
     *       },
     *     );
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "dbFrameworkComplianceSummaries": [],
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
      params: Params$Resource$Folders$Locations$Dbframeworkcompliancesummaries$List,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    list(
      params?: Params$Resource$Folders$Locations$Dbframeworkcompliancesummaries$List,
      options?: MethodOptions
    ): Promise<
      GaxiosResponseWithHTTP2<Schema$GoogleCloudAssuredworkloadsV1ListDbFrameworkComplianceSummariesResponse>
    >;
    list(
      params: Params$Resource$Folders$Locations$Dbframeworkcompliancesummaries$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Folders$Locations$Dbframeworkcompliancesummaries$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleCloudAssuredworkloadsV1ListDbFrameworkComplianceSummariesResponse>,
      callback: BodyResponseCallback<Schema$GoogleCloudAssuredworkloadsV1ListDbFrameworkComplianceSummariesResponse>
    ): void;
    list(
      params: Params$Resource$Folders$Locations$Dbframeworkcompliancesummaries$List,
      callback: BodyResponseCallback<Schema$GoogleCloudAssuredworkloadsV1ListDbFrameworkComplianceSummariesResponse>
    ): void;
    list(
      callback: BodyResponseCallback<Schema$GoogleCloudAssuredworkloadsV1ListDbFrameworkComplianceSummariesResponse>
    ): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Folders$Locations$Dbframeworkcompliancesummaries$List
        | BodyResponseCallback<Schema$GoogleCloudAssuredworkloadsV1ListDbFrameworkComplianceSummariesResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleCloudAssuredworkloadsV1ListDbFrameworkComplianceSummariesResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleCloudAssuredworkloadsV1ListDbFrameworkComplianceSummariesResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<
          GaxiosResponseWithHTTP2<Schema$GoogleCloudAssuredworkloadsV1ListDbFrameworkComplianceSummariesResponse>
        >
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Folders$Locations$Dbframeworkcompliancesummaries$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Folders$Locations$Dbframeworkcompliancesummaries$List;
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
        options.rootUrl || 'https://assuredworkloads.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}/dbFrameworkComplianceSummaries')
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
        createAPIRequest<Schema$GoogleCloudAssuredworkloadsV1ListDbFrameworkComplianceSummariesResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleCloudAssuredworkloadsV1ListDbFrameworkComplianceSummariesResponse>(
          parameters
        );
      }
    }
  }

  export interface Params$Resource$Folders$Locations$Dbframeworkcompliancesummaries$List extends StandardParameters {
    /**
     * Optional. The filtering results.
     */
    filter?: string;
    /**
     * Optional. The requested page size. The server might return fewer items than requested. If unspecified, the default page size is 50. The maximum value is 1000.
     */
    pageSize?: number;
    /**
     * Optional. A token that identifies the page of results that the server should return. Pass the next_page_token value from a previous result.
     */
    pageToken?: string;
    /**
     * Required. The parent scope for the framework compliance summary. Format: organizations/{organization\}/locations/{location\} folders/{folder\}/locations/{location\} projects/{project\}/locations/{location\}
     */
    parent?: string;
    /**
     * Optional. Specifies the level of detail to return in the response.
     */
    view?: string;
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
    dbFindingSummaries: Resource$Organizations$Locations$Dbfindingsummaries;
    dbFrameworkComplianceReports: Resource$Organizations$Locations$Dbframeworkcompliancereports;
    dbFrameworkComplianceSummaries: Resource$Organizations$Locations$Dbframeworkcompliancesummaries;
    operations: Resource$Organizations$Locations$Operations;
    workloads: Resource$Organizations$Locations$Workloads;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.dbFindingSummaries =
        new Resource$Organizations$Locations$Dbfindingsummaries(this.context);
      this.dbFrameworkComplianceReports =
        new Resource$Organizations$Locations$Dbframeworkcompliancereports(
          this.context
        );
      this.dbFrameworkComplianceSummaries =
        new Resource$Organizations$Locations$Dbframeworkcompliancesummaries(
          this.context
        );
      this.operations = new Resource$Organizations$Locations$Operations(
        this.context
      );
      this.workloads = new Resource$Organizations$Locations$Workloads(
        this.context
      );
    }
  }

  export class Resource$Organizations$Locations$Dbfindingsummaries {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Lists the finding summary by category for a given scope.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/assuredworkloads.googleapis.com
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
     * const assuredworkloads = google.assuredworkloads('v1');
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
     *     await assuredworkloads.organizations.locations.dbFindingSummaries.list({
     *       // Optional. The filtering results.
     *       filter: 'placeholder-value',
     *       // Optional. The requested page size. The server might return fewer items than requested. If unspecified, the server picks an appropriate default.
     *       pageSize: 'placeholder-value',
     *       // Optional. A token that identifies the page of results that the server should return.
     *       pageToken: 'placeholder-value',
     *       // Required. The parent scope for the framework overview page. Formats: - projects/{project\}/locations/{location\} - folders/{folder\}/locations/{location\} - organizations/{organization\}/locations/{location\}
     *       parent: 'organizations/my-organization/locations/my-location',
     *     });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "dbFindingSummaries": [],
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
      params: Params$Resource$Organizations$Locations$Dbfindingsummaries$List,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    list(
      params?: Params$Resource$Organizations$Locations$Dbfindingsummaries$List,
      options?: MethodOptions
    ): Promise<
      GaxiosResponseWithHTTP2<Schema$GoogleCloudAssuredworkloadsV1ListDbFindingSummariesResponse>
    >;
    list(
      params: Params$Resource$Organizations$Locations$Dbfindingsummaries$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Organizations$Locations$Dbfindingsummaries$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleCloudAssuredworkloadsV1ListDbFindingSummariesResponse>,
      callback: BodyResponseCallback<Schema$GoogleCloudAssuredworkloadsV1ListDbFindingSummariesResponse>
    ): void;
    list(
      params: Params$Resource$Organizations$Locations$Dbfindingsummaries$List,
      callback: BodyResponseCallback<Schema$GoogleCloudAssuredworkloadsV1ListDbFindingSummariesResponse>
    ): void;
    list(
      callback: BodyResponseCallback<Schema$GoogleCloudAssuredworkloadsV1ListDbFindingSummariesResponse>
    ): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Organizations$Locations$Dbfindingsummaries$List
        | BodyResponseCallback<Schema$GoogleCloudAssuredworkloadsV1ListDbFindingSummariesResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleCloudAssuredworkloadsV1ListDbFindingSummariesResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleCloudAssuredworkloadsV1ListDbFindingSummariesResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<
          GaxiosResponseWithHTTP2<Schema$GoogleCloudAssuredworkloadsV1ListDbFindingSummariesResponse>
        >
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Organizations$Locations$Dbfindingsummaries$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Organizations$Locations$Dbfindingsummaries$List;
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
        options.rootUrl || 'https://assuredworkloads.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}/dbFindingSummaries')
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
        createAPIRequest<Schema$GoogleCloudAssuredworkloadsV1ListDbFindingSummariesResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleCloudAssuredworkloadsV1ListDbFindingSummariesResponse>(
          parameters
        );
      }
    }
  }

  export interface Params$Resource$Organizations$Locations$Dbfindingsummaries$List extends StandardParameters {
    /**
     * Optional. The filtering results.
     */
    filter?: string;
    /**
     * Optional. The requested page size. The server might return fewer items than requested. If unspecified, the server picks an appropriate default.
     */
    pageSize?: number;
    /**
     * Optional. A token that identifies the page of results that the server should return.
     */
    pageToken?: string;
    /**
     * Required. The parent scope for the framework overview page. Formats: - projects/{project\}/locations/{location\} - folders/{folder\}/locations/{location\} - organizations/{organization\}/locations/{location\}
     */
    parent?: string;
  }

  export class Resource$Organizations$Locations$Dbframeworkcompliancereports {
    context: APIRequestContext;
    dbControlComplianceSummaries: Resource$Organizations$Locations$Dbframeworkcompliancereports$Dbcontrolcompliancesummaries;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.dbControlComplianceSummaries =
        new Resource$Organizations$Locations$Dbframeworkcompliancereports$Dbcontrolcompliancesummaries(
          this.context
        );
    }

    /**
     * Gets the aggregated compliance report over time for a given scope.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/assuredworkloads.googleapis.com
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
     * const assuredworkloads = google.assuredworkloads('v1');
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
     *     await assuredworkloads.organizations.locations.dbFrameworkComplianceReports.aggregate(
     *       {
     *         // Optional. The filtering results.
     *         filter: 'placeholder-value',
     *         // Optional. Exclusive end of the interval. If specified, a Timestamp matching this interval will have to be before the end.
     *         'interval.endTime': 'placeholder-value',
     *         // Optional. Inclusive start of the interval. If specified, a Timestamp matching this interval will have to be the same or after the start.
     *         'interval.startTime': 'placeholder-value',
     *         // Required. The name of the aggregated compliance report over time to retrieve. Format: `organizations/{organization_id\}/locations/{location\}/dbFrameworkComplianceReports/{db_framework_compliance_report\}`
     *         name: 'organizations/my-organization/locations/my-location/dbFrameworkComplianceReports/my-dbFrameworkComplianceReport',
     *       },
     *     );
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "aggregatedComplianceReports": []
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * ```
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    aggregate(
      params: Params$Resource$Organizations$Locations$Dbframeworkcompliancereports$Aggregate,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    aggregate(
      params?: Params$Resource$Organizations$Locations$Dbframeworkcompliancereports$Aggregate,
      options?: MethodOptions
    ): Promise<
      GaxiosResponseWithHTTP2<Schema$GoogleCloudAssuredworkloadsV1AggregateDbFrameworkComplianceReportResponse>
    >;
    aggregate(
      params: Params$Resource$Organizations$Locations$Dbframeworkcompliancereports$Aggregate,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    aggregate(
      params: Params$Resource$Organizations$Locations$Dbframeworkcompliancereports$Aggregate,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleCloudAssuredworkloadsV1AggregateDbFrameworkComplianceReportResponse>,
      callback: BodyResponseCallback<Schema$GoogleCloudAssuredworkloadsV1AggregateDbFrameworkComplianceReportResponse>
    ): void;
    aggregate(
      params: Params$Resource$Organizations$Locations$Dbframeworkcompliancereports$Aggregate,
      callback: BodyResponseCallback<Schema$GoogleCloudAssuredworkloadsV1AggregateDbFrameworkComplianceReportResponse>
    ): void;
    aggregate(
      callback: BodyResponseCallback<Schema$GoogleCloudAssuredworkloadsV1AggregateDbFrameworkComplianceReportResponse>
    ): void;
    aggregate(
      paramsOrCallback?:
        | Params$Resource$Organizations$Locations$Dbframeworkcompliancereports$Aggregate
        | BodyResponseCallback<Schema$GoogleCloudAssuredworkloadsV1AggregateDbFrameworkComplianceReportResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleCloudAssuredworkloadsV1AggregateDbFrameworkComplianceReportResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleCloudAssuredworkloadsV1AggregateDbFrameworkComplianceReportResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<
          GaxiosResponseWithHTTP2<Schema$GoogleCloudAssuredworkloadsV1AggregateDbFrameworkComplianceReportResponse>
        >
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Organizations$Locations$Dbframeworkcompliancereports$Aggregate;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Organizations$Locations$Dbframeworkcompliancereports$Aggregate;
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
        options.rootUrl || 'https://assuredworkloads.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}:aggregate')
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
        createAPIRequest<Schema$GoogleCloudAssuredworkloadsV1AggregateDbFrameworkComplianceReportResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleCloudAssuredworkloadsV1AggregateDbFrameworkComplianceReportResponse>(
          parameters
        );
      }
    }

    /**
     * Fetches the framework compliance report for a given scope.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/assuredworkloads.googleapis.com
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
     * const assuredworkloads = google.assuredworkloads('v1');
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
     *     await assuredworkloads.organizations.locations.dbFrameworkComplianceReports.fetch(
     *       {
     *         // Optional. The end time of the report.
     *         endTime: 'placeholder-value',
     *         // Optional. The filtering results.
     *         filter: 'placeholder-value',
     *         // Required. The name of the framework compliance report to retrieve.
     *         name: 'organizations/my-organization/locations/my-location/dbFrameworkComplianceReports/my-dbFrameworkComplianceReport',
     *       },
     *     );
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "controlAssessmentDetails": {},
     *   //   "framework": "my_framework",
     *   //   "frameworkCategories": [],
     *   //   "frameworkDescription": "my_frameworkDescription",
     *   //   "frameworkDisplayName": "my_frameworkDisplayName",
     *   //   "frameworkType": "my_frameworkType",
     *   //   "majorRevisionId": "my_majorRevisionId",
     *   //   "minorRevisionId": "my_minorRevisionId",
     *   //   "name": "my_name",
     *   //   "supportedCloudProviders": [],
     *   //   "targetResourceDetails": [],
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
    fetch(
      params: Params$Resource$Organizations$Locations$Dbframeworkcompliancereports$Fetch,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    fetch(
      params?: Params$Resource$Organizations$Locations$Dbframeworkcompliancereports$Fetch,
      options?: MethodOptions
    ): Promise<
      GaxiosResponseWithHTTP2<Schema$GoogleCloudAssuredworkloadsV1FetchDbFrameworkComplianceReportResponse>
    >;
    fetch(
      params: Params$Resource$Organizations$Locations$Dbframeworkcompliancereports$Fetch,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    fetch(
      params: Params$Resource$Organizations$Locations$Dbframeworkcompliancereports$Fetch,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleCloudAssuredworkloadsV1FetchDbFrameworkComplianceReportResponse>,
      callback: BodyResponseCallback<Schema$GoogleCloudAssuredworkloadsV1FetchDbFrameworkComplianceReportResponse>
    ): void;
    fetch(
      params: Params$Resource$Organizations$Locations$Dbframeworkcompliancereports$Fetch,
      callback: BodyResponseCallback<Schema$GoogleCloudAssuredworkloadsV1FetchDbFrameworkComplianceReportResponse>
    ): void;
    fetch(
      callback: BodyResponseCallback<Schema$GoogleCloudAssuredworkloadsV1FetchDbFrameworkComplianceReportResponse>
    ): void;
    fetch(
      paramsOrCallback?:
        | Params$Resource$Organizations$Locations$Dbframeworkcompliancereports$Fetch
        | BodyResponseCallback<Schema$GoogleCloudAssuredworkloadsV1FetchDbFrameworkComplianceReportResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleCloudAssuredworkloadsV1FetchDbFrameworkComplianceReportResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleCloudAssuredworkloadsV1FetchDbFrameworkComplianceReportResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<
          GaxiosResponseWithHTTP2<Schema$GoogleCloudAssuredworkloadsV1FetchDbFrameworkComplianceReportResponse>
        >
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Organizations$Locations$Dbframeworkcompliancereports$Fetch;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Organizations$Locations$Dbframeworkcompliancereports$Fetch;
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
        options.rootUrl || 'https://assuredworkloads.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}:fetch')
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
        createAPIRequest<Schema$GoogleCloudAssuredworkloadsV1FetchDbFrameworkComplianceReportResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleCloudAssuredworkloadsV1FetchDbFrameworkComplianceReportResponse>(
          parameters
        );
      }
    }
  }

  export interface Params$Resource$Organizations$Locations$Dbframeworkcompliancereports$Aggregate extends StandardParameters {
    /**
     * Optional. The filtering results.
     */
    filter?: string;
    /**
     * Optional. Exclusive end of the interval. If specified, a Timestamp matching this interval will have to be before the end.
     */
    'interval.endTime'?: string;
    /**
     * Optional. Inclusive start of the interval. If specified, a Timestamp matching this interval will have to be the same or after the start.
     */
    'interval.startTime'?: string;
    /**
     * Required. The name of the aggregated compliance report over time to retrieve. Format: `organizations/{organization_id\}/locations/{location\}/dbFrameworkComplianceReports/{db_framework_compliance_report\}`
     */
    name?: string;
  }
  export interface Params$Resource$Organizations$Locations$Dbframeworkcompliancereports$Fetch extends StandardParameters {
    /**
     * Optional. The end time of the report.
     */
    endTime?: string;
    /**
     * Optional. The filtering results.
     */
    filter?: string;
    /**
     * Required. The name of the framework compliance report to retrieve.
     */
    name?: string;
  }

  export class Resource$Organizations$Locations$Dbframeworkcompliancereports$Dbcontrolcompliancesummaries {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Lists the control compliance summary for a given scope.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/assuredworkloads.googleapis.com
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
     * const assuredworkloads = google.assuredworkloads('v1');
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
     *     await assuredworkloads.organizations.locations.dbFrameworkComplianceReports.dbControlComplianceSummaries.list(
     *       {
     *         // Optional. The filtering results.
     *         filter: 'placeholder-value',
     *         // Optional. The requested page size. The server might return fewer items than requested. If unspecified, the default page size is 50. The maximum value is 1000.
     *         pageSize: 'placeholder-value',
     *         // Optional. A token that identifies the page of results that the server should return.
     *         pageToken: 'placeholder-value',
     *         // Required. The parent scope for the framework overview page. Format: organizations/{organization\}/locations/{location\}/dbFrameworkComplianceReports/{db_framework_compliance_report\} folders/{folder\}/locations/{location\}/dbFrameworkComplianceReports/{db_framework_compliance_report\} projects/{project\}/locations/{location\}/dbFrameworkComplianceReports/{db_framework_compliance_report\}
     *         parent:
     *           'organizations/my-organization/locations/my-location/dbFrameworkComplianceReports/my-dbFrameworkComplianceReport',
     *       },
     *     );
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "dbControlComplianceSummaries": [],
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
      params: Params$Resource$Organizations$Locations$Dbframeworkcompliancereports$Dbcontrolcompliancesummaries$List,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    list(
      params?: Params$Resource$Organizations$Locations$Dbframeworkcompliancereports$Dbcontrolcompliancesummaries$List,
      options?: MethodOptions
    ): Promise<
      GaxiosResponseWithHTTP2<Schema$GoogleCloudAssuredworkloadsV1ListDbControlComplianceSummariesResponse>
    >;
    list(
      params: Params$Resource$Organizations$Locations$Dbframeworkcompliancereports$Dbcontrolcompliancesummaries$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Organizations$Locations$Dbframeworkcompliancereports$Dbcontrolcompliancesummaries$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleCloudAssuredworkloadsV1ListDbControlComplianceSummariesResponse>,
      callback: BodyResponseCallback<Schema$GoogleCloudAssuredworkloadsV1ListDbControlComplianceSummariesResponse>
    ): void;
    list(
      params: Params$Resource$Organizations$Locations$Dbframeworkcompliancereports$Dbcontrolcompliancesummaries$List,
      callback: BodyResponseCallback<Schema$GoogleCloudAssuredworkloadsV1ListDbControlComplianceSummariesResponse>
    ): void;
    list(
      callback: BodyResponseCallback<Schema$GoogleCloudAssuredworkloadsV1ListDbControlComplianceSummariesResponse>
    ): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Organizations$Locations$Dbframeworkcompliancereports$Dbcontrolcompliancesummaries$List
        | BodyResponseCallback<Schema$GoogleCloudAssuredworkloadsV1ListDbControlComplianceSummariesResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleCloudAssuredworkloadsV1ListDbControlComplianceSummariesResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleCloudAssuredworkloadsV1ListDbControlComplianceSummariesResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<
          GaxiosResponseWithHTTP2<Schema$GoogleCloudAssuredworkloadsV1ListDbControlComplianceSummariesResponse>
        >
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Organizations$Locations$Dbframeworkcompliancereports$Dbcontrolcompliancesummaries$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Organizations$Locations$Dbframeworkcompliancereports$Dbcontrolcompliancesummaries$List;
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
        options.rootUrl || 'https://assuredworkloads.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}/dbControlComplianceSummaries')
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
        createAPIRequest<Schema$GoogleCloudAssuredworkloadsV1ListDbControlComplianceSummariesResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleCloudAssuredworkloadsV1ListDbControlComplianceSummariesResponse>(
          parameters
        );
      }
    }
  }

  export interface Params$Resource$Organizations$Locations$Dbframeworkcompliancereports$Dbcontrolcompliancesummaries$List extends StandardParameters {
    /**
     * Optional. The filtering results.
     */
    filter?: string;
    /**
     * Optional. The requested page size. The server might return fewer items than requested. If unspecified, the default page size is 50. The maximum value is 1000.
     */
    pageSize?: number;
    /**
     * Optional. A token that identifies the page of results that the server should return.
     */
    pageToken?: string;
    /**
     * Required. The parent scope for the framework overview page. Format: organizations/{organization\}/locations/{location\}/dbFrameworkComplianceReports/{db_framework_compliance_report\} folders/{folder\}/locations/{location\}/dbFrameworkComplianceReports/{db_framework_compliance_report\} projects/{project\}/locations/{location\}/dbFrameworkComplianceReports/{db_framework_compliance_report\}
     */
    parent?: string;
  }

  export class Resource$Organizations$Locations$Dbframeworkcompliancesummaries {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Lists the framework compliance summary for a given scope.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/assuredworkloads.googleapis.com
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
     * const assuredworkloads = google.assuredworkloads('v1');
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
     *     await assuredworkloads.organizations.locations.dbFrameworkComplianceSummaries.list(
     *       {
     *         // Optional. The filtering results.
     *         filter: 'placeholder-value',
     *         // Optional. The requested page size. The server might return fewer items than requested. If unspecified, the default page size is 50. The maximum value is 1000.
     *         pageSize: 'placeholder-value',
     *         // Optional. A token that identifies the page of results that the server should return. Pass the next_page_token value from a previous result.
     *         pageToken: 'placeholder-value',
     *         // Required. The parent scope for the framework compliance summary. Format: organizations/{organization\}/locations/{location\} folders/{folder\}/locations/{location\} projects/{project\}/locations/{location\}
     *         parent: 'organizations/my-organization/locations/my-location',
     *         // Optional. Specifies the level of detail to return in the response.
     *         view: 'placeholder-value',
     *       },
     *     );
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "dbFrameworkComplianceSummaries": [],
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
      params: Params$Resource$Organizations$Locations$Dbframeworkcompliancesummaries$List,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    list(
      params?: Params$Resource$Organizations$Locations$Dbframeworkcompliancesummaries$List,
      options?: MethodOptions
    ): Promise<
      GaxiosResponseWithHTTP2<Schema$GoogleCloudAssuredworkloadsV1ListDbFrameworkComplianceSummariesResponse>
    >;
    list(
      params: Params$Resource$Organizations$Locations$Dbframeworkcompliancesummaries$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Organizations$Locations$Dbframeworkcompliancesummaries$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleCloudAssuredworkloadsV1ListDbFrameworkComplianceSummariesResponse>,
      callback: BodyResponseCallback<Schema$GoogleCloudAssuredworkloadsV1ListDbFrameworkComplianceSummariesResponse>
    ): void;
    list(
      params: Params$Resource$Organizations$Locations$Dbframeworkcompliancesummaries$List,
      callback: BodyResponseCallback<Schema$GoogleCloudAssuredworkloadsV1ListDbFrameworkComplianceSummariesResponse>
    ): void;
    list(
      callback: BodyResponseCallback<Schema$GoogleCloudAssuredworkloadsV1ListDbFrameworkComplianceSummariesResponse>
    ): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Organizations$Locations$Dbframeworkcompliancesummaries$List
        | BodyResponseCallback<Schema$GoogleCloudAssuredworkloadsV1ListDbFrameworkComplianceSummariesResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleCloudAssuredworkloadsV1ListDbFrameworkComplianceSummariesResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleCloudAssuredworkloadsV1ListDbFrameworkComplianceSummariesResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<
          GaxiosResponseWithHTTP2<Schema$GoogleCloudAssuredworkloadsV1ListDbFrameworkComplianceSummariesResponse>
        >
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Organizations$Locations$Dbframeworkcompliancesummaries$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Organizations$Locations$Dbframeworkcompliancesummaries$List;
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
        options.rootUrl || 'https://assuredworkloads.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}/dbFrameworkComplianceSummaries')
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
        createAPIRequest<Schema$GoogleCloudAssuredworkloadsV1ListDbFrameworkComplianceSummariesResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleCloudAssuredworkloadsV1ListDbFrameworkComplianceSummariesResponse>(
          parameters
        );
      }
    }
  }

  export interface Params$Resource$Organizations$Locations$Dbframeworkcompliancesummaries$List extends StandardParameters {
    /**
     * Optional. The filtering results.
     */
    filter?: string;
    /**
     * Optional. The requested page size. The server might return fewer items than requested. If unspecified, the default page size is 50. The maximum value is 1000.
     */
    pageSize?: number;
    /**
     * Optional. A token that identifies the page of results that the server should return. Pass the next_page_token value from a previous result.
     */
    pageToken?: string;
    /**
     * Required. The parent scope for the framework compliance summary. Format: organizations/{organization\}/locations/{location\} folders/{folder\}/locations/{location\} projects/{project\}/locations/{location\}
     */
    parent?: string;
    /**
     * Optional. Specifies the level of detail to return in the response.
     */
    view?: string;
  }

  export class Resource$Organizations$Locations$Operations {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/assuredworkloads.googleapis.com
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
     * const assuredworkloads = google.assuredworkloads('v1');
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
     *   const res = await assuredworkloads.organizations.locations.operations.get({
     *     // The name of the operation resource.
     *     name: 'organizations/my-organization/locations/my-location/operations/my-operation',
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
      params: Params$Resource$Organizations$Locations$Operations$Get,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    get(
      params?: Params$Resource$Organizations$Locations$Operations$Get,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$GoogleLongrunningOperation>>;
    get(
      params: Params$Resource$Organizations$Locations$Operations$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Organizations$Locations$Operations$Get,
      options:
        MethodOptions | BodyResponseCallback<Schema$GoogleLongrunningOperation>,
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
      | Promise<GaxiosResponseWithHTTP2<Schema$GoogleLongrunningOperation>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
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

      if (params.name !== undefined && params.name !== null) {
        validateMultiSegment('name', String(params.name));
        params.name = encodeWithoutSlashes(String(params.name));
      }

      const rootUrl =
        options.rootUrl || 'https://assuredworkloads.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}')
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
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/assuredworkloads.googleapis.com
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
     * const assuredworkloads = google.assuredworkloads('v1');
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
     *   const res = await assuredworkloads.organizations.locations.operations.list({
     *     // The standard list filter.
     *     filter: 'placeholder-value',
     *     // The name of the operation's parent resource.
     *     name: 'organizations/my-organization/locations/my-location',
     *     // The standard list page size.
     *     pageSize: 'placeholder-value',
     *     // The standard list page token.
     *     pageToken: 'placeholder-value',
     *     // When set to `true`, operations that are reachable are returned as normal, and those that are unreachable are returned in the ListOperationsResponse.unreachable field. This can only be `true` when reading across collections. For example, when `parent` is set to `"projects/example/locations/-"`. This field is not supported by default and will result in an `UNIMPLEMENTED` error if set unless explicitly documented otherwise in service or product specific documentation.
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
      params: Params$Resource$Organizations$Locations$Operations$List,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    list(
      params?: Params$Resource$Organizations$Locations$Operations$List,
      options?: MethodOptions
    ): Promise<
      GaxiosResponseWithHTTP2<Schema$GoogleLongrunningListOperationsResponse>
    >;
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
      | Promise<
          GaxiosResponseWithHTTP2<Schema$GoogleLongrunningListOperationsResponse>
        >
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
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

      if (params.name !== undefined && params.name !== null) {
        validateMultiSegment('name', String(params.name));
        params.name = encodeWithoutSlashes(String(params.name));
      }

      const rootUrl =
        options.rootUrl || 'https://assuredworkloads.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}/operations')
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

  export interface Params$Resource$Organizations$Locations$Operations$Get extends StandardParameters {
    /**
     * The name of the operation resource.
     */
    name?: string;
  }
  export interface Params$Resource$Organizations$Locations$Operations$List extends StandardParameters {
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
    /**
     * When set to `true`, operations that are reachable are returned as normal, and those that are unreachable are returned in the ListOperationsResponse.unreachable field. This can only be `true` when reading across collections. For example, when `parent` is set to `"projects/example/locations/-"`. This field is not supported by default and will result in an `UNIMPLEMENTED` error if set unless explicitly documented otherwise in service or product specific documentation.
     */
    returnPartialSuccess?: boolean;
  }

  export class Resource$Organizations$Locations$Workloads {
    context: APIRequestContext;
    updates: Resource$Organizations$Locations$Workloads$Updates;
    violations: Resource$Organizations$Locations$Workloads$Violations;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.updates = new Resource$Organizations$Locations$Workloads$Updates(
        this.context
      );
      this.violations =
        new Resource$Organizations$Locations$Workloads$Violations(this.context);
    }

    /**
     * Analyzes a hypothetical move of a source resource to a target workload to surface compliance risks. The analysis is best effort and is not guaranteed to be exhaustive.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/assuredworkloads.googleapis.com
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
     * const assuredworkloads = google.assuredworkloads('v1');
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
     *     await assuredworkloads.organizations.locations.workloads.analyzeWorkloadMove(
     *       {
     *         // Optional. List of asset types to be analyzed, including and under the source resource. If empty, all assets are analyzed. The complete list of asset types is available [here](https://cloud.google.com/asset-inventory/docs/supported-asset-types).
     *         assetTypes: 'placeholder-value',
     *         // Optional. Page size. If a value is not specified, the default value of 10 is used. The maximum value is 50.
     *         pageSize: 'placeholder-value',
     *         // Optional. The page token from the previous response. It needs to be passed in the second and following requests.
     *         pageToken: 'placeholder-value',
     *         // The source type is a project. Specify the project's relative resource name, formatted as either a project number or a project ID: "projects/{PROJECT_NUMBER\}" or "projects/{PROJECT_ID\}" For example: "projects/951040570662" when specifying a project number, or "projects/my-project-123" when specifying a project ID.
     *         project: 'placeholder-value',
     *         // Required. The resource ID of the folder-based destination workload. This workload is where the source resource will hypothetically be moved to. Specify the workload's relative resource name, formatted as: "organizations/{ORGANIZATION_ID\}/locations/{LOCATION_ID\}/workloads/{WORKLOAD_ID\}" For example: "organizations/123/locations/us-east1/workloads/assured-workload-2"
     *         target:
     *           'organizations/my-organization/locations/my-location/workloads/my-workload',
     *       },
     *     );
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "assetMoveAnalyses": [],
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
    analyzeWorkloadMove(
      params: Params$Resource$Organizations$Locations$Workloads$Analyzeworkloadmove,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    analyzeWorkloadMove(
      params?: Params$Resource$Organizations$Locations$Workloads$Analyzeworkloadmove,
      options?: MethodOptions
    ): Promise<
      GaxiosResponseWithHTTP2<Schema$GoogleCloudAssuredworkloadsV1AnalyzeWorkloadMoveResponse>
    >;
    analyzeWorkloadMove(
      params: Params$Resource$Organizations$Locations$Workloads$Analyzeworkloadmove,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    analyzeWorkloadMove(
      params: Params$Resource$Organizations$Locations$Workloads$Analyzeworkloadmove,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleCloudAssuredworkloadsV1AnalyzeWorkloadMoveResponse>,
      callback: BodyResponseCallback<Schema$GoogleCloudAssuredworkloadsV1AnalyzeWorkloadMoveResponse>
    ): void;
    analyzeWorkloadMove(
      params: Params$Resource$Organizations$Locations$Workloads$Analyzeworkloadmove,
      callback: BodyResponseCallback<Schema$GoogleCloudAssuredworkloadsV1AnalyzeWorkloadMoveResponse>
    ): void;
    analyzeWorkloadMove(
      callback: BodyResponseCallback<Schema$GoogleCloudAssuredworkloadsV1AnalyzeWorkloadMoveResponse>
    ): void;
    analyzeWorkloadMove(
      paramsOrCallback?:
        | Params$Resource$Organizations$Locations$Workloads$Analyzeworkloadmove
        | BodyResponseCallback<Schema$GoogleCloudAssuredworkloadsV1AnalyzeWorkloadMoveResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleCloudAssuredworkloadsV1AnalyzeWorkloadMoveResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleCloudAssuredworkloadsV1AnalyzeWorkloadMoveResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<
          GaxiosResponseWithHTTP2<Schema$GoogleCloudAssuredworkloadsV1AnalyzeWorkloadMoveResponse>
        >
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
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

      if (params.target !== undefined && params.target !== null) {
        validateMultiSegment('target', String(params.target));
        params.target = encodeWithoutSlashes(String(params.target));
      }

      const rootUrl =
        options.rootUrl || 'https://assuredworkloads.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+target}:analyzeWorkloadMove')
              .replace(/([^:]\/)\/+/g, '$1')
              .replace(/\{([^+:][^}]*)\}/g, '{+$1}'),
            method: 'GET',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['target'],
        pathParams: ['target'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$GoogleCloudAssuredworkloadsV1AnalyzeWorkloadMoveResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleCloudAssuredworkloadsV1AnalyzeWorkloadMoveResponse>(
          parameters
        );
      }
    }

    /**
     * Creates Assured Workload.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/assuredworkloads.googleapis.com
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
     * const assuredworkloads = google.assuredworkloads('v1');
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
     *   const res = await assuredworkloads.organizations.locations.workloads.create({
     *     // Optional. A identifier associated with the workload and underlying projects which allows for the break down of billing costs for a workload. The value provided for the identifier will add a label to the workload and contained projects with the identifier as the value.
     *     externalId: 'placeholder-value',
     *     // Required. The resource name of the new Workload's parent. Must be of the form `organizations/{org_id\}/locations/{location_id\}`.
     *     parent: 'organizations/my-organization/locations/my-location',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "billingAccount": "my_billingAccount",
     *       //   "complianceRegime": "my_complianceRegime",
     *       //   "complianceStatus": {},
     *       //   "compliantButDisallowedServices": [],
     *       //   "createTime": "my_createTime",
     *       //   "displayName": "my_displayName",
     *       //   "ekmProvisioningResponse": {},
     *       //   "enableSovereignControls": false,
     *       //   "etag": "my_etag",
     *       //   "kajEnrollmentState": "my_kajEnrollmentState",
     *       //   "kmsSettings": {},
     *       //   "labels": {},
     *       //   "name": "my_name",
     *       //   "partner": "my_partner",
     *       //   "partnerPermissions": {},
     *       //   "partnerServicesBillingAccount": "my_partnerServicesBillingAccount",
     *       //   "provisionedResourcesParent": "my_provisionedResourcesParent",
     *       //   "resourceMonitoringEnabled": false,
     *       //   "resourceSettings": [],
     *       //   "resources": [],
     *       //   "saaEnrollmentResponse": {},
     *       //   "violationNotificationsEnabled": false,
     *       //   "workloadOptions": {}
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
      params: Params$Resource$Organizations$Locations$Workloads$Create,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    create(
      params?: Params$Resource$Organizations$Locations$Workloads$Create,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$GoogleLongrunningOperation>>;
    create(
      params: Params$Resource$Organizations$Locations$Workloads$Create,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    create(
      params: Params$Resource$Organizations$Locations$Workloads$Create,
      options:
        MethodOptions | BodyResponseCallback<Schema$GoogleLongrunningOperation>,
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
      | Promise<GaxiosResponseWithHTTP2<Schema$GoogleLongrunningOperation>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
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

      if (params.parent !== undefined && params.parent !== null) {
        validateMultiSegment('parent', String(params.parent));
        params.parent = encodeWithoutSlashes(String(params.parent));
      }

      const rootUrl =
        options.rootUrl || 'https://assuredworkloads.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}/workloads')
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
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/assuredworkloads.googleapis.com
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
     * const assuredworkloads = google.assuredworkloads('v1');
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
     *   const res = await assuredworkloads.organizations.locations.workloads.delete({
     *     // Optional. The etag of the workload. If this is provided, it must match the server's etag.
     *     etag: 'placeholder-value',
     *     // Required. The `name` field is used to identify the workload. Format: organizations/{org_id\}/locations/{location_id\}/workloads/{workload_id\}
     *     name: 'organizations/my-organization/locations/my-location/workloads/my-workload',
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
      params: Params$Resource$Organizations$Locations$Workloads$Delete,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    delete(
      params?: Params$Resource$Organizations$Locations$Workloads$Delete,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$GoogleProtobufEmpty>>;
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
      | Promise<GaxiosResponseWithHTTP2<Schema$GoogleProtobufEmpty>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
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

      if (params.name !== undefined && params.name !== null) {
        validateMultiSegment('name', String(params.name));
        params.name = encodeWithoutSlashes(String(params.name));
      }

      const rootUrl =
        options.rootUrl || 'https://assuredworkloads.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}')
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
        createAPIRequest<Schema$GoogleProtobufEmpty>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleProtobufEmpty>(parameters);
      }
    }

    /**
     * This endpoint enables Assured Workloads service to offer compliance updates for the folder based assured workload. It sets up an Assured Workloads Service Agent, having permissions to read compliance controls (for example: Org Policies) applied on the workload. The caller must have `resourcemanager.folders.getIamPolicy` and `resourcemanager.folders.setIamPolicy` permissions on the assured workload folder.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/assuredworkloads.googleapis.com
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
     * const assuredworkloads = google.assuredworkloads('v1');
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
     *     await assuredworkloads.organizations.locations.workloads.enableComplianceUpdates(
     *       {
     *         // Required. The `name` field is used to identify the workload. Format: organizations/{org_id\}/locations/{location_id\}/workloads/{workload_id\}
     *         name: 'organizations/my-organization/locations/my-location/workloads/my-workload',
     *       },
     *     );
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
    enableComplianceUpdates(
      params: Params$Resource$Organizations$Locations$Workloads$Enablecomplianceupdates,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    enableComplianceUpdates(
      params?: Params$Resource$Organizations$Locations$Workloads$Enablecomplianceupdates,
      options?: MethodOptions
    ): Promise<
      GaxiosResponseWithHTTP2<Schema$GoogleCloudAssuredworkloadsV1EnableComplianceUpdatesResponse>
    >;
    enableComplianceUpdates(
      params: Params$Resource$Organizations$Locations$Workloads$Enablecomplianceupdates,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    enableComplianceUpdates(
      params: Params$Resource$Organizations$Locations$Workloads$Enablecomplianceupdates,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleCloudAssuredworkloadsV1EnableComplianceUpdatesResponse>,
      callback: BodyResponseCallback<Schema$GoogleCloudAssuredworkloadsV1EnableComplianceUpdatesResponse>
    ): void;
    enableComplianceUpdates(
      params: Params$Resource$Organizations$Locations$Workloads$Enablecomplianceupdates,
      callback: BodyResponseCallback<Schema$GoogleCloudAssuredworkloadsV1EnableComplianceUpdatesResponse>
    ): void;
    enableComplianceUpdates(
      callback: BodyResponseCallback<Schema$GoogleCloudAssuredworkloadsV1EnableComplianceUpdatesResponse>
    ): void;
    enableComplianceUpdates(
      paramsOrCallback?:
        | Params$Resource$Organizations$Locations$Workloads$Enablecomplianceupdates
        | BodyResponseCallback<Schema$GoogleCloudAssuredworkloadsV1EnableComplianceUpdatesResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleCloudAssuredworkloadsV1EnableComplianceUpdatesResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleCloudAssuredworkloadsV1EnableComplianceUpdatesResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<
          GaxiosResponseWithHTTP2<Schema$GoogleCloudAssuredworkloadsV1EnableComplianceUpdatesResponse>
        >
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Organizations$Locations$Workloads$Enablecomplianceupdates;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Organizations$Locations$Workloads$Enablecomplianceupdates;
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
        options.rootUrl || 'https://assuredworkloads.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}:enableComplianceUpdates')
              .replace(/([^:]\/)\/+/g, '$1')
              .replace(/\{([^+:][^}]*)\}/g, '{+$1}'),
            method: 'PUT',
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
        createAPIRequest<Schema$GoogleCloudAssuredworkloadsV1EnableComplianceUpdatesResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleCloudAssuredworkloadsV1EnableComplianceUpdatesResponse>(
          parameters
        );
      }
    }

    /**
     * Enable resource violation monitoring for a workload.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/assuredworkloads.googleapis.com
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
     * const assuredworkloads = google.assuredworkloads('v1');
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
     *     await assuredworkloads.organizations.locations.workloads.enableResourceMonitoring(
     *       {
     *         // Required. The `name` field is used to identify the workload. Format: organizations/{org_id\}/locations/{location_id\}/workloads/{workload_id\}
     *         name: 'organizations/my-organization/locations/my-location/workloads/my-workload',
     *       },
     *     );
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
    enableResourceMonitoring(
      params: Params$Resource$Organizations$Locations$Workloads$Enableresourcemonitoring,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    enableResourceMonitoring(
      params?: Params$Resource$Organizations$Locations$Workloads$Enableresourcemonitoring,
      options?: MethodOptions
    ): Promise<
      GaxiosResponseWithHTTP2<Schema$GoogleCloudAssuredworkloadsV1EnableResourceMonitoringResponse>
    >;
    enableResourceMonitoring(
      params: Params$Resource$Organizations$Locations$Workloads$Enableresourcemonitoring,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    enableResourceMonitoring(
      params: Params$Resource$Organizations$Locations$Workloads$Enableresourcemonitoring,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleCloudAssuredworkloadsV1EnableResourceMonitoringResponse>,
      callback: BodyResponseCallback<Schema$GoogleCloudAssuredworkloadsV1EnableResourceMonitoringResponse>
    ): void;
    enableResourceMonitoring(
      params: Params$Resource$Organizations$Locations$Workloads$Enableresourcemonitoring,
      callback: BodyResponseCallback<Schema$GoogleCloudAssuredworkloadsV1EnableResourceMonitoringResponse>
    ): void;
    enableResourceMonitoring(
      callback: BodyResponseCallback<Schema$GoogleCloudAssuredworkloadsV1EnableResourceMonitoringResponse>
    ): void;
    enableResourceMonitoring(
      paramsOrCallback?:
        | Params$Resource$Organizations$Locations$Workloads$Enableresourcemonitoring
        | BodyResponseCallback<Schema$GoogleCloudAssuredworkloadsV1EnableResourceMonitoringResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleCloudAssuredworkloadsV1EnableResourceMonitoringResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleCloudAssuredworkloadsV1EnableResourceMonitoringResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<
          GaxiosResponseWithHTTP2<Schema$GoogleCloudAssuredworkloadsV1EnableResourceMonitoringResponse>
        >
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
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

      if (params.name !== undefined && params.name !== null) {
        validateMultiSegment('name', String(params.name));
        params.name = encodeWithoutSlashes(String(params.name));
      }

      const rootUrl =
        options.rootUrl || 'https://assuredworkloads.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}:enableResourceMonitoring')
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
        createAPIRequest<Schema$GoogleCloudAssuredworkloadsV1EnableResourceMonitoringResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleCloudAssuredworkloadsV1EnableResourceMonitoringResponse>(
          parameters
        );
      }
    }

    /**
     * Gets Assured Workload associated with a CRM Node
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/assuredworkloads.googleapis.com
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
     * const assuredworkloads = google.assuredworkloads('v1');
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
     *   const res = await assuredworkloads.organizations.locations.workloads.get({
     *     // Required. The resource name of the Workload to fetch. This is the workloads's relative path in the API, formatted as "organizations/{organization_id\}/locations/{location_id\}/workloads/{workload_id\}". For example, "organizations/123/locations/us-east1/workloads/assured-workload-1".
     *     name: 'organizations/my-organization/locations/my-location/workloads/my-workload',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "billingAccount": "my_billingAccount",
     *   //   "complianceRegime": "my_complianceRegime",
     *   //   "complianceStatus": {},
     *   //   "compliantButDisallowedServices": [],
     *   //   "createTime": "my_createTime",
     *   //   "displayName": "my_displayName",
     *   //   "ekmProvisioningResponse": {},
     *   //   "enableSovereignControls": false,
     *   //   "etag": "my_etag",
     *   //   "kajEnrollmentState": "my_kajEnrollmentState",
     *   //   "kmsSettings": {},
     *   //   "labels": {},
     *   //   "name": "my_name",
     *   //   "partner": "my_partner",
     *   //   "partnerPermissions": {},
     *   //   "partnerServicesBillingAccount": "my_partnerServicesBillingAccount",
     *   //   "provisionedResourcesParent": "my_provisionedResourcesParent",
     *   //   "resourceMonitoringEnabled": false,
     *   //   "resourceSettings": [],
     *   //   "resources": [],
     *   //   "saaEnrollmentResponse": {},
     *   //   "violationNotificationsEnabled": false,
     *   //   "workloadOptions": {}
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
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
      params: Params$Resource$Organizations$Locations$Workloads$Get,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    get(
      params?: Params$Resource$Organizations$Locations$Workloads$Get,
      options?: MethodOptions
    ): Promise<
      GaxiosResponseWithHTTP2<Schema$GoogleCloudAssuredworkloadsV1Workload>
    >;
    get(
      params: Params$Resource$Organizations$Locations$Workloads$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Organizations$Locations$Workloads$Get,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleCloudAssuredworkloadsV1Workload>,
      callback: BodyResponseCallback<Schema$GoogleCloudAssuredworkloadsV1Workload>
    ): void;
    get(
      params: Params$Resource$Organizations$Locations$Workloads$Get,
      callback: BodyResponseCallback<Schema$GoogleCloudAssuredworkloadsV1Workload>
    ): void;
    get(
      callback: BodyResponseCallback<Schema$GoogleCloudAssuredworkloadsV1Workload>
    ): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Organizations$Locations$Workloads$Get
        | BodyResponseCallback<Schema$GoogleCloudAssuredworkloadsV1Workload>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleCloudAssuredworkloadsV1Workload>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleCloudAssuredworkloadsV1Workload>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<
          GaxiosResponseWithHTTP2<Schema$GoogleCloudAssuredworkloadsV1Workload>
        >
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
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

      if (params.name !== undefined && params.name !== null) {
        validateMultiSegment('name', String(params.name));
        params.name = encodeWithoutSlashes(String(params.name));
      }

      const rootUrl =
        options.rootUrl || 'https://assuredworkloads.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}')
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
        createAPIRequest<Schema$GoogleCloudAssuredworkloadsV1Workload>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleCloudAssuredworkloadsV1Workload>(
          parameters
        );
      }
    }

    /**
     * Lists Assured Workloads under a CRM Node.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/assuredworkloads.googleapis.com
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
     * const assuredworkloads = google.assuredworkloads('v1');
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
     *   const res = await assuredworkloads.organizations.locations.workloads.list({
     *     // A custom filter for filtering by properties of a workload. At this time, only filtering by labels is supported.
     *     filter: 'placeholder-value',
     *     // Page size.
     *     pageSize: 'placeholder-value',
     *     // Page token returned from previous request. Page token contains context from previous request. Page token needs to be passed in the second and following requests.
     *     pageToken: 'placeholder-value',
     *     // Required. Parent Resource to list workloads from. Must be of the form `organizations/{org_id\}/locations/{location\}`.
     *     parent: 'organizations/my-organization/locations/my-location',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "nextPageToken": "my_nextPageToken",
     *   //   "workloads": []
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
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
      params: Params$Resource$Organizations$Locations$Workloads$List,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    list(
      params?: Params$Resource$Organizations$Locations$Workloads$List,
      options?: MethodOptions
    ): Promise<
      GaxiosResponseWithHTTP2<Schema$GoogleCloudAssuredworkloadsV1ListWorkloadsResponse>
    >;
    list(
      params: Params$Resource$Organizations$Locations$Workloads$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Organizations$Locations$Workloads$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleCloudAssuredworkloadsV1ListWorkloadsResponse>,
      callback: BodyResponseCallback<Schema$GoogleCloudAssuredworkloadsV1ListWorkloadsResponse>
    ): void;
    list(
      params: Params$Resource$Organizations$Locations$Workloads$List,
      callback: BodyResponseCallback<Schema$GoogleCloudAssuredworkloadsV1ListWorkloadsResponse>
    ): void;
    list(
      callback: BodyResponseCallback<Schema$GoogleCloudAssuredworkloadsV1ListWorkloadsResponse>
    ): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Organizations$Locations$Workloads$List
        | BodyResponseCallback<Schema$GoogleCloudAssuredworkloadsV1ListWorkloadsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleCloudAssuredworkloadsV1ListWorkloadsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleCloudAssuredworkloadsV1ListWorkloadsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<
          GaxiosResponseWithHTTP2<Schema$GoogleCloudAssuredworkloadsV1ListWorkloadsResponse>
        >
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
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

      if (params.parent !== undefined && params.parent !== null) {
        validateMultiSegment('parent', String(params.parent));
        params.parent = encodeWithoutSlashes(String(params.parent));
      }

      const rootUrl =
        options.rootUrl || 'https://assuredworkloads.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}/workloads')
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
        createAPIRequest<Schema$GoogleCloudAssuredworkloadsV1ListWorkloadsResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleCloudAssuredworkloadsV1ListWorkloadsResponse>(
          parameters
        );
      }
    }

    /**
     * Update the permissions settings for an existing partner workload. For force updates don't set etag field in the Workload. Only one update operation per workload can be in progress.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/assuredworkloads.googleapis.com
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
     * const assuredworkloads = google.assuredworkloads('v1');
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
     *     await assuredworkloads.organizations.locations.workloads.mutatePartnerPermissions(
     *       {
     *         // Required. The `name` field is used to identify the workload. Format: organizations/{org_id\}/locations/{location_id\}/workloads/{workload_id\}
     *         name: 'organizations/my-organization/locations/my-location/workloads/my-workload',
     *
     *         // Request body metadata
     *         requestBody: {
     *           // request body parameters
     *           // {
     *           //   "etag": "my_etag",
     *           //   "partnerPermissions": {},
     *           //   "updateMask": "my_updateMask"
     *           // }
     *         },
     *       },
     *     );
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "billingAccount": "my_billingAccount",
     *   //   "complianceRegime": "my_complianceRegime",
     *   //   "complianceStatus": {},
     *   //   "compliantButDisallowedServices": [],
     *   //   "createTime": "my_createTime",
     *   //   "displayName": "my_displayName",
     *   //   "ekmProvisioningResponse": {},
     *   //   "enableSovereignControls": false,
     *   //   "etag": "my_etag",
     *   //   "kajEnrollmentState": "my_kajEnrollmentState",
     *   //   "kmsSettings": {},
     *   //   "labels": {},
     *   //   "name": "my_name",
     *   //   "partner": "my_partner",
     *   //   "partnerPermissions": {},
     *   //   "partnerServicesBillingAccount": "my_partnerServicesBillingAccount",
     *   //   "provisionedResourcesParent": "my_provisionedResourcesParent",
     *   //   "resourceMonitoringEnabled": false,
     *   //   "resourceSettings": [],
     *   //   "resources": [],
     *   //   "saaEnrollmentResponse": {},
     *   //   "violationNotificationsEnabled": false,
     *   //   "workloadOptions": {}
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * ```
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    mutatePartnerPermissions(
      params: Params$Resource$Organizations$Locations$Workloads$Mutatepartnerpermissions,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    mutatePartnerPermissions(
      params?: Params$Resource$Organizations$Locations$Workloads$Mutatepartnerpermissions,
      options?: MethodOptions
    ): Promise<
      GaxiosResponseWithHTTP2<Schema$GoogleCloudAssuredworkloadsV1Workload>
    >;
    mutatePartnerPermissions(
      params: Params$Resource$Organizations$Locations$Workloads$Mutatepartnerpermissions,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    mutatePartnerPermissions(
      params: Params$Resource$Organizations$Locations$Workloads$Mutatepartnerpermissions,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleCloudAssuredworkloadsV1Workload>,
      callback: BodyResponseCallback<Schema$GoogleCloudAssuredworkloadsV1Workload>
    ): void;
    mutatePartnerPermissions(
      params: Params$Resource$Organizations$Locations$Workloads$Mutatepartnerpermissions,
      callback: BodyResponseCallback<Schema$GoogleCloudAssuredworkloadsV1Workload>
    ): void;
    mutatePartnerPermissions(
      callback: BodyResponseCallback<Schema$GoogleCloudAssuredworkloadsV1Workload>
    ): void;
    mutatePartnerPermissions(
      paramsOrCallback?:
        | Params$Resource$Organizations$Locations$Workloads$Mutatepartnerpermissions
        | BodyResponseCallback<Schema$GoogleCloudAssuredworkloadsV1Workload>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleCloudAssuredworkloadsV1Workload>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleCloudAssuredworkloadsV1Workload>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<
          GaxiosResponseWithHTTP2<Schema$GoogleCloudAssuredworkloadsV1Workload>
        >
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Organizations$Locations$Workloads$Mutatepartnerpermissions;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Organizations$Locations$Workloads$Mutatepartnerpermissions;
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
        options.rootUrl || 'https://assuredworkloads.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}:mutatePartnerPermissions')
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
        createAPIRequest<Schema$GoogleCloudAssuredworkloadsV1Workload>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleCloudAssuredworkloadsV1Workload>(
          parameters
        );
      }
    }

    /**
     * Updates an existing workload. Currently allows updating of workload display_name and labels. For force updates don't set etag field in the Workload. Only one update operation per workload can be in progress.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/assuredworkloads.googleapis.com
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
     * const assuredworkloads = google.assuredworkloads('v1');
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
     *   const res = await assuredworkloads.organizations.locations.workloads.patch({
     *     // Optional. The resource name of the workload. Format: organizations/{organization\}/locations/{location\}/workloads/{workload\} Read-only.
     *     name: 'organizations/my-organization/locations/my-location/workloads/my-workload',
     *     // Required. The list of fields to be updated.
     *     updateMask: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "billingAccount": "my_billingAccount",
     *       //   "complianceRegime": "my_complianceRegime",
     *       //   "complianceStatus": {},
     *       //   "compliantButDisallowedServices": [],
     *       //   "createTime": "my_createTime",
     *       //   "displayName": "my_displayName",
     *       //   "ekmProvisioningResponse": {},
     *       //   "enableSovereignControls": false,
     *       //   "etag": "my_etag",
     *       //   "kajEnrollmentState": "my_kajEnrollmentState",
     *       //   "kmsSettings": {},
     *       //   "labels": {},
     *       //   "name": "my_name",
     *       //   "partner": "my_partner",
     *       //   "partnerPermissions": {},
     *       //   "partnerServicesBillingAccount": "my_partnerServicesBillingAccount",
     *       //   "provisionedResourcesParent": "my_provisionedResourcesParent",
     *       //   "resourceMonitoringEnabled": false,
     *       //   "resourceSettings": [],
     *       //   "resources": [],
     *       //   "saaEnrollmentResponse": {},
     *       //   "violationNotificationsEnabled": false,
     *       //   "workloadOptions": {}
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "billingAccount": "my_billingAccount",
     *   //   "complianceRegime": "my_complianceRegime",
     *   //   "complianceStatus": {},
     *   //   "compliantButDisallowedServices": [],
     *   //   "createTime": "my_createTime",
     *   //   "displayName": "my_displayName",
     *   //   "ekmProvisioningResponse": {},
     *   //   "enableSovereignControls": false,
     *   //   "etag": "my_etag",
     *   //   "kajEnrollmentState": "my_kajEnrollmentState",
     *   //   "kmsSettings": {},
     *   //   "labels": {},
     *   //   "name": "my_name",
     *   //   "partner": "my_partner",
     *   //   "partnerPermissions": {},
     *   //   "partnerServicesBillingAccount": "my_partnerServicesBillingAccount",
     *   //   "provisionedResourcesParent": "my_provisionedResourcesParent",
     *   //   "resourceMonitoringEnabled": false,
     *   //   "resourceSettings": [],
     *   //   "resources": [],
     *   //   "saaEnrollmentResponse": {},
     *   //   "violationNotificationsEnabled": false,
     *   //   "workloadOptions": {}
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
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
      params: Params$Resource$Organizations$Locations$Workloads$Patch,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    patch(
      params?: Params$Resource$Organizations$Locations$Workloads$Patch,
      options?: MethodOptions
    ): Promise<
      GaxiosResponseWithHTTP2<Schema$GoogleCloudAssuredworkloadsV1Workload>
    >;
    patch(
      params: Params$Resource$Organizations$Locations$Workloads$Patch,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    patch(
      params: Params$Resource$Organizations$Locations$Workloads$Patch,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleCloudAssuredworkloadsV1Workload>,
      callback: BodyResponseCallback<Schema$GoogleCloudAssuredworkloadsV1Workload>
    ): void;
    patch(
      params: Params$Resource$Organizations$Locations$Workloads$Patch,
      callback: BodyResponseCallback<Schema$GoogleCloudAssuredworkloadsV1Workload>
    ): void;
    patch(
      callback: BodyResponseCallback<Schema$GoogleCloudAssuredworkloadsV1Workload>
    ): void;
    patch(
      paramsOrCallback?:
        | Params$Resource$Organizations$Locations$Workloads$Patch
        | BodyResponseCallback<Schema$GoogleCloudAssuredworkloadsV1Workload>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleCloudAssuredworkloadsV1Workload>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleCloudAssuredworkloadsV1Workload>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<
          GaxiosResponseWithHTTP2<Schema$GoogleCloudAssuredworkloadsV1Workload>
        >
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
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

      if (params.name !== undefined && params.name !== null) {
        validateMultiSegment('name', String(params.name));
        params.name = encodeWithoutSlashes(String(params.name));
      }

      const rootUrl =
        options.rootUrl || 'https://assuredworkloads.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}')
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
        createAPIRequest<Schema$GoogleCloudAssuredworkloadsV1Workload>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleCloudAssuredworkloadsV1Workload>(
          parameters
        );
      }
    }

    /**
     * Restrict the list of resources allowed in the Workload environment. The current list of allowed products can be found at https://cloud.google.com/assured-workloads/docs/supported-products In addition to assuredworkloads.workload.update permission, the user should also have orgpolicy.policy.set permission on the folder resource to use this functionality.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/assuredworkloads.googleapis.com
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
     * const assuredworkloads = google.assuredworkloads('v1');
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
     *     await assuredworkloads.organizations.locations.workloads.restrictAllowedResources(
     *       {
     *         // Required. The resource name of the Workload. This is the workloads's relative path in the API, formatted as "organizations/{organization_id\}/locations/{location_id\}/workloads/{workload_id\}". For example, "organizations/123/locations/us-east1/workloads/assured-workload-1".
     *         name: 'organizations/my-organization/locations/my-location/workloads/my-workload',
     *
     *         // Request body metadata
     *         requestBody: {
     *           // request body parameters
     *           // {
     *           //   "restrictionType": "my_restrictionType"
     *           // }
     *         },
     *       },
     *     );
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
    restrictAllowedResources(
      params: Params$Resource$Organizations$Locations$Workloads$Restrictallowedresources,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    restrictAllowedResources(
      params?: Params$Resource$Organizations$Locations$Workloads$Restrictallowedresources,
      options?: MethodOptions
    ): Promise<
      GaxiosResponseWithHTTP2<Schema$GoogleCloudAssuredworkloadsV1RestrictAllowedResourcesResponse>
    >;
    restrictAllowedResources(
      params: Params$Resource$Organizations$Locations$Workloads$Restrictallowedresources,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    restrictAllowedResources(
      params: Params$Resource$Organizations$Locations$Workloads$Restrictallowedresources,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleCloudAssuredworkloadsV1RestrictAllowedResourcesResponse>,
      callback: BodyResponseCallback<Schema$GoogleCloudAssuredworkloadsV1RestrictAllowedResourcesResponse>
    ): void;
    restrictAllowedResources(
      params: Params$Resource$Organizations$Locations$Workloads$Restrictallowedresources,
      callback: BodyResponseCallback<Schema$GoogleCloudAssuredworkloadsV1RestrictAllowedResourcesResponse>
    ): void;
    restrictAllowedResources(
      callback: BodyResponseCallback<Schema$GoogleCloudAssuredworkloadsV1RestrictAllowedResourcesResponse>
    ): void;
    restrictAllowedResources(
      paramsOrCallback?:
        | Params$Resource$Organizations$Locations$Workloads$Restrictallowedresources
        | BodyResponseCallback<Schema$GoogleCloudAssuredworkloadsV1RestrictAllowedResourcesResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleCloudAssuredworkloadsV1RestrictAllowedResourcesResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleCloudAssuredworkloadsV1RestrictAllowedResourcesResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<
          GaxiosResponseWithHTTP2<Schema$GoogleCloudAssuredworkloadsV1RestrictAllowedResourcesResponse>
        >
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
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

      if (params.name !== undefined && params.name !== null) {
        validateMultiSegment('name', String(params.name));
        params.name = encodeWithoutSlashes(String(params.name));
      }

      const rootUrl =
        options.rootUrl || 'https://assuredworkloads.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}:restrictAllowedResources')
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
        createAPIRequest<Schema$GoogleCloudAssuredworkloadsV1RestrictAllowedResourcesResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleCloudAssuredworkloadsV1RestrictAllowedResourcesResponse>(
          parameters
        );
      }
    }
  }

  export interface Params$Resource$Organizations$Locations$Workloads$Analyzeworkloadmove extends StandardParameters {
    /**
     * Optional. List of asset types to be analyzed, including and under the source resource. If empty, all assets are analyzed. The complete list of asset types is available [here](https://cloud.google.com/asset-inventory/docs/supported-asset-types).
     */
    assetTypes?: string[];
    /**
     * Optional. Page size. If a value is not specified, the default value of 10 is used. The maximum value is 50.
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
     * Required. The resource ID of the folder-based destination workload. This workload is where the source resource will hypothetically be moved to. Specify the workload's relative resource name, formatted as: "organizations/{ORGANIZATION_ID\}/locations/{LOCATION_ID\}/workloads/{WORKLOAD_ID\}" For example: "organizations/123/locations/us-east1/workloads/assured-workload-2"
     */
    target?: string;
  }
  export interface Params$Resource$Organizations$Locations$Workloads$Create extends StandardParameters {
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
    requestBody?: Schema$GoogleCloudAssuredworkloadsV1Workload;
  }
  export interface Params$Resource$Organizations$Locations$Workloads$Delete extends StandardParameters {
    /**
     * Optional. The etag of the workload. If this is provided, it must match the server's etag.
     */
    etag?: string;
    /**
     * Required. The `name` field is used to identify the workload. Format: organizations/{org_id\}/locations/{location_id\}/workloads/{workload_id\}
     */
    name?: string;
  }
  export interface Params$Resource$Organizations$Locations$Workloads$Enablecomplianceupdates extends StandardParameters {
    /**
     * Required. The `name` field is used to identify the workload. Format: organizations/{org_id\}/locations/{location_id\}/workloads/{workload_id\}
     */
    name?: string;
  }
  export interface Params$Resource$Organizations$Locations$Workloads$Enableresourcemonitoring extends StandardParameters {
    /**
     * Required. The `name` field is used to identify the workload. Format: organizations/{org_id\}/locations/{location_id\}/workloads/{workload_id\}
     */
    name?: string;
  }
  export interface Params$Resource$Organizations$Locations$Workloads$Get extends StandardParameters {
    /**
     * Required. The resource name of the Workload to fetch. This is the workloads's relative path in the API, formatted as "organizations/{organization_id\}/locations/{location_id\}/workloads/{workload_id\}". For example, "organizations/123/locations/us-east1/workloads/assured-workload-1".
     */
    name?: string;
  }
  export interface Params$Resource$Organizations$Locations$Workloads$List extends StandardParameters {
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
  export interface Params$Resource$Organizations$Locations$Workloads$Mutatepartnerpermissions extends StandardParameters {
    /**
     * Required. The `name` field is used to identify the workload. Format: organizations/{org_id\}/locations/{location_id\}/workloads/{workload_id\}
     */
    name?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleCloudAssuredworkloadsV1MutatePartnerPermissionsRequest;
  }
  export interface Params$Resource$Organizations$Locations$Workloads$Patch extends StandardParameters {
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
    requestBody?: Schema$GoogleCloudAssuredworkloadsV1Workload;
  }
  export interface Params$Resource$Organizations$Locations$Workloads$Restrictallowedresources extends StandardParameters {
    /**
     * Required. The resource name of the Workload. This is the workloads's relative path in the API, formatted as "organizations/{organization_id\}/locations/{location_id\}/workloads/{workload_id\}". For example, "organizations/123/locations/us-east1/workloads/assured-workload-1".
     */
    name?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleCloudAssuredworkloadsV1RestrictAllowedResourcesRequest;
  }

  export class Resource$Organizations$Locations$Workloads$Updates {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * This endpoint creates a new operation to apply the given update.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/assuredworkloads.googleapis.com
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
     * const assuredworkloads = google.assuredworkloads('v1');
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
     *     await assuredworkloads.organizations.locations.workloads.updates.apply({
     *       // Required. The resource name of the update. Format: organizations/{org_id\}/locations/{location_id\}/workloads/{workload_id\}/updates/{update_id\}
     *       name: 'organizations/my-organization/locations/my-location/workloads/my-workload/updates/my-update',
     *
     *       // Request body metadata
     *       requestBody: {
     *         // request body parameters
     *         // {
     *         //   "action": "my_action"
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
    apply(
      params: Params$Resource$Organizations$Locations$Workloads$Updates$Apply,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    apply(
      params?: Params$Resource$Organizations$Locations$Workloads$Updates$Apply,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$GoogleLongrunningOperation>>;
    apply(
      params: Params$Resource$Organizations$Locations$Workloads$Updates$Apply,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    apply(
      params: Params$Resource$Organizations$Locations$Workloads$Updates$Apply,
      options:
        MethodOptions | BodyResponseCallback<Schema$GoogleLongrunningOperation>,
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    apply(
      params: Params$Resource$Organizations$Locations$Workloads$Updates$Apply,
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    apply(
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    apply(
      paramsOrCallback?:
        | Params$Resource$Organizations$Locations$Workloads$Updates$Apply
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
      | Promise<GaxiosResponseWithHTTP2<Schema$GoogleLongrunningOperation>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Organizations$Locations$Workloads$Updates$Apply;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Organizations$Locations$Workloads$Updates$Apply;
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
        options.rootUrl || 'https://assuredworkloads.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}:apply')
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
        createAPIRequest<Schema$GoogleLongrunningOperation>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleLongrunningOperation>(parameters);
      }
    }

    /**
     * This endpoint lists all updates for the given workload.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/assuredworkloads.googleapis.com
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
     * const assuredworkloads = google.assuredworkloads('v1');
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
     *     await assuredworkloads.organizations.locations.workloads.updates.list({
     *       // Page size. The default value is 20 and the max allowed value is 100.
     *       pageSize: 'placeholder-value',
     *       // Page token returned from previous request.
     *       pageToken: 'placeholder-value',
     *       // Required. organizations/{org_id\}/locations/{location_id\}/workloads/{workload_id\}
     *       parent:
     *         'organizations/my-organization/locations/my-location/workloads/my-workload',
     *     });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "nextPageToken": "my_nextPageToken",
     *   //   "workloadUpdates": []
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
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
      params: Params$Resource$Organizations$Locations$Workloads$Updates$List,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    list(
      params?: Params$Resource$Organizations$Locations$Workloads$Updates$List,
      options?: MethodOptions
    ): Promise<
      GaxiosResponseWithHTTP2<Schema$GoogleCloudAssuredworkloadsV1ListWorkloadUpdatesResponse>
    >;
    list(
      params: Params$Resource$Organizations$Locations$Workloads$Updates$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Organizations$Locations$Workloads$Updates$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleCloudAssuredworkloadsV1ListWorkloadUpdatesResponse>,
      callback: BodyResponseCallback<Schema$GoogleCloudAssuredworkloadsV1ListWorkloadUpdatesResponse>
    ): void;
    list(
      params: Params$Resource$Organizations$Locations$Workloads$Updates$List,
      callback: BodyResponseCallback<Schema$GoogleCloudAssuredworkloadsV1ListWorkloadUpdatesResponse>
    ): void;
    list(
      callback: BodyResponseCallback<Schema$GoogleCloudAssuredworkloadsV1ListWorkloadUpdatesResponse>
    ): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Organizations$Locations$Workloads$Updates$List
        | BodyResponseCallback<Schema$GoogleCloudAssuredworkloadsV1ListWorkloadUpdatesResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleCloudAssuredworkloadsV1ListWorkloadUpdatesResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleCloudAssuredworkloadsV1ListWorkloadUpdatesResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<
          GaxiosResponseWithHTTP2<Schema$GoogleCloudAssuredworkloadsV1ListWorkloadUpdatesResponse>
        >
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Organizations$Locations$Workloads$Updates$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Organizations$Locations$Workloads$Updates$List;
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
        options.rootUrl || 'https://assuredworkloads.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}/updates')
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
        createAPIRequest<Schema$GoogleCloudAssuredworkloadsV1ListWorkloadUpdatesResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleCloudAssuredworkloadsV1ListWorkloadUpdatesResponse>(
          parameters
        );
      }
    }
  }

  export interface Params$Resource$Organizations$Locations$Workloads$Updates$Apply extends StandardParameters {
    /**
     * Required. The resource name of the update. Format: organizations/{org_id\}/locations/{location_id\}/workloads/{workload_id\}/updates/{update_id\}
     */
    name?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleCloudAssuredworkloadsV1ApplyWorkloadUpdateRequest;
  }
  export interface Params$Resource$Organizations$Locations$Workloads$Updates$List extends StandardParameters {
    /**
     * Page size. The default value is 20 and the max allowed value is 100.
     */
    pageSize?: number;
    /**
     * Page token returned from previous request.
     */
    pageToken?: string;
    /**
     * Required. organizations/{org_id\}/locations/{location_id\}/workloads/{workload_id\}
     */
    parent?: string;
  }

  export class Resource$Organizations$Locations$Workloads$Violations {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Acknowledges an existing violation. By acknowledging a violation, users acknowledge the existence of a compliance violation in their workload and decide to ignore it due to a valid business justification. Acknowledgement is a permanent operation and it cannot be reverted.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/assuredworkloads.googleapis.com
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
     * const assuredworkloads = google.assuredworkloads('v1');
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
     *     await assuredworkloads.organizations.locations.workloads.violations.acknowledge(
     *       {
     *         // Required. The resource name of the Violation to acknowledge. Format: organizations/{organization\}/locations/{location\}/workloads/{workload\}/violations/{violation\}
     *         name: 'organizations/my-organization/locations/my-location/workloads/my-workload/violations/my-violation',
     *
     *         // Request body metadata
     *         requestBody: {
     *           // request body parameters
     *           // {
     *           //   "acknowledgeType": "my_acknowledgeType",
     *           //   "comment": "my_comment",
     *           //   "nonCompliantOrgPolicy": "my_nonCompliantOrgPolicy"
     *           // }
     *         },
     *       },
     *     );
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
    acknowledge(
      params: Params$Resource$Organizations$Locations$Workloads$Violations$Acknowledge,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    acknowledge(
      params?: Params$Resource$Organizations$Locations$Workloads$Violations$Acknowledge,
      options?: MethodOptions
    ): Promise<
      GaxiosResponseWithHTTP2<Schema$GoogleCloudAssuredworkloadsV1AcknowledgeViolationResponse>
    >;
    acknowledge(
      params: Params$Resource$Organizations$Locations$Workloads$Violations$Acknowledge,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    acknowledge(
      params: Params$Resource$Organizations$Locations$Workloads$Violations$Acknowledge,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleCloudAssuredworkloadsV1AcknowledgeViolationResponse>,
      callback: BodyResponseCallback<Schema$GoogleCloudAssuredworkloadsV1AcknowledgeViolationResponse>
    ): void;
    acknowledge(
      params: Params$Resource$Organizations$Locations$Workloads$Violations$Acknowledge,
      callback: BodyResponseCallback<Schema$GoogleCloudAssuredworkloadsV1AcknowledgeViolationResponse>
    ): void;
    acknowledge(
      callback: BodyResponseCallback<Schema$GoogleCloudAssuredworkloadsV1AcknowledgeViolationResponse>
    ): void;
    acknowledge(
      paramsOrCallback?:
        | Params$Resource$Organizations$Locations$Workloads$Violations$Acknowledge
        | BodyResponseCallback<Schema$GoogleCloudAssuredworkloadsV1AcknowledgeViolationResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleCloudAssuredworkloadsV1AcknowledgeViolationResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleCloudAssuredworkloadsV1AcknowledgeViolationResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<
          GaxiosResponseWithHTTP2<Schema$GoogleCloudAssuredworkloadsV1AcknowledgeViolationResponse>
        >
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
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

      if (params.name !== undefined && params.name !== null) {
        validateMultiSegment('name', String(params.name));
        params.name = encodeWithoutSlashes(String(params.name));
      }

      const rootUrl =
        options.rootUrl || 'https://assuredworkloads.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}:acknowledge')
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
        createAPIRequest<Schema$GoogleCloudAssuredworkloadsV1AcknowledgeViolationResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleCloudAssuredworkloadsV1AcknowledgeViolationResponse>(
          parameters
        );
      }
    }

    /**
     * Acknowledges multiple existing violations. By acknowledging violations, users acknowledge the existence of compliance violations in their workload and decide to ignore them due to a valid business justification. Acknowledgement is a permanent operation and it cannot be reverted. This is a batch version of AcknowledgeViolation.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/assuredworkloads.googleapis.com
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
     * const assuredworkloads = google.assuredworkloads('v1');
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
     *     await assuredworkloads.organizations.locations.workloads.violations.batchAcknowledgeViolations(
     *       {
     *         // Optional. The parent resource shared by all violations being acknowledged. Format: organizations/{organization\}/locations/{location\}/workloads/{workload\}
     *         parent:
     *           'organizations/my-organization/locations/my-location/workloads/my-workload',
     *
     *         // Request body metadata
     *         requestBody: {
     *           // request body parameters
     *           // {
     *           //   "acknowledgeType": "my_acknowledgeType",
     *           //   "comment": "my_comment",
     *           //   "names": []
     *           // }
     *         },
     *       },
     *     );
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "acknowledgedViolationsCount": 0
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * ```
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    batchAcknowledgeViolations(
      params: Params$Resource$Organizations$Locations$Workloads$Violations$Batchacknowledgeviolations,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    batchAcknowledgeViolations(
      params?: Params$Resource$Organizations$Locations$Workloads$Violations$Batchacknowledgeviolations,
      options?: MethodOptions
    ): Promise<
      GaxiosResponseWithHTTP2<Schema$GoogleCloudAssuredworkloadsV1BatchAcknowledgeViolationsResponse>
    >;
    batchAcknowledgeViolations(
      params: Params$Resource$Organizations$Locations$Workloads$Violations$Batchacknowledgeviolations,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    batchAcknowledgeViolations(
      params: Params$Resource$Organizations$Locations$Workloads$Violations$Batchacknowledgeviolations,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleCloudAssuredworkloadsV1BatchAcknowledgeViolationsResponse>,
      callback: BodyResponseCallback<Schema$GoogleCloudAssuredworkloadsV1BatchAcknowledgeViolationsResponse>
    ): void;
    batchAcknowledgeViolations(
      params: Params$Resource$Organizations$Locations$Workloads$Violations$Batchacknowledgeviolations,
      callback: BodyResponseCallback<Schema$GoogleCloudAssuredworkloadsV1BatchAcknowledgeViolationsResponse>
    ): void;
    batchAcknowledgeViolations(
      callback: BodyResponseCallback<Schema$GoogleCloudAssuredworkloadsV1BatchAcknowledgeViolationsResponse>
    ): void;
    batchAcknowledgeViolations(
      paramsOrCallback?:
        | Params$Resource$Organizations$Locations$Workloads$Violations$Batchacknowledgeviolations
        | BodyResponseCallback<Schema$GoogleCloudAssuredworkloadsV1BatchAcknowledgeViolationsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleCloudAssuredworkloadsV1BatchAcknowledgeViolationsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleCloudAssuredworkloadsV1BatchAcknowledgeViolationsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<
          GaxiosResponseWithHTTP2<Schema$GoogleCloudAssuredworkloadsV1BatchAcknowledgeViolationsResponse>
        >
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Organizations$Locations$Workloads$Violations$Batchacknowledgeviolations;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Organizations$Locations$Workloads$Violations$Batchacknowledgeviolations;
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
        options.rootUrl || 'https://assuredworkloads.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl + '/v1/{+parent}/violations:batchAcknowledgeViolations'
            )
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
        createAPIRequest<Schema$GoogleCloudAssuredworkloadsV1BatchAcknowledgeViolationsResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleCloudAssuredworkloadsV1BatchAcknowledgeViolationsResponse>(
          parameters
        );
      }
    }

    /**
     * Retrieves Assured Workload Violation based on ID.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/assuredworkloads.googleapis.com
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
     * const assuredworkloads = google.assuredworkloads('v1');
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
     *     await assuredworkloads.organizations.locations.workloads.violations.get({
     *       // Required. The resource name of the Violation to fetch (ie. Violation.name). Format: organizations/{organization\}/locations/{location\}/workloads/{workload\}/violations/{violation\}
     *       name: 'organizations/my-organization/locations/my-location/workloads/my-workload/violations/my-violation',
     *     });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "acknowledged": false,
     *   //   "acknowledgementTime": "my_acknowledgementTime",
     *   //   "associatedOrgPolicyViolationId": "my_associatedOrgPolicyViolationId",
     *   //   "auditLogLink": "my_auditLogLink",
     *   //   "beginTime": "my_beginTime",
     *   //   "category": "my_category",
     *   //   "description": "my_description",
     *   //   "exceptionAuditLogLink": "my_exceptionAuditLogLink",
     *   //   "exceptionContexts": [],
     *   //   "name": "my_name",
     *   //   "nonCompliantOrgPolicy": "my_nonCompliantOrgPolicy",
     *   //   "orgPolicyConstraint": "my_orgPolicyConstraint",
     *   //   "parentProjectNumber": "my_parentProjectNumber",
     *   //   "remediation": {},
     *   //   "resolveTime": "my_resolveTime",
     *   //   "resourceName": "my_resourceName",
     *   //   "resourceType": "my_resourceType",
     *   //   "state": "my_state",
     *   //   "updateTime": "my_updateTime",
     *   //   "violationType": "my_violationType"
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
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
      params: Params$Resource$Organizations$Locations$Workloads$Violations$Get,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    get(
      params?: Params$Resource$Organizations$Locations$Workloads$Violations$Get,
      options?: MethodOptions
    ): Promise<
      GaxiosResponseWithHTTP2<Schema$GoogleCloudAssuredworkloadsV1Violation>
    >;
    get(
      params: Params$Resource$Organizations$Locations$Workloads$Violations$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Organizations$Locations$Workloads$Violations$Get,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleCloudAssuredworkloadsV1Violation>,
      callback: BodyResponseCallback<Schema$GoogleCloudAssuredworkloadsV1Violation>
    ): void;
    get(
      params: Params$Resource$Organizations$Locations$Workloads$Violations$Get,
      callback: BodyResponseCallback<Schema$GoogleCloudAssuredworkloadsV1Violation>
    ): void;
    get(
      callback: BodyResponseCallback<Schema$GoogleCloudAssuredworkloadsV1Violation>
    ): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Organizations$Locations$Workloads$Violations$Get
        | BodyResponseCallback<Schema$GoogleCloudAssuredworkloadsV1Violation>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleCloudAssuredworkloadsV1Violation>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleCloudAssuredworkloadsV1Violation>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<
          GaxiosResponseWithHTTP2<Schema$GoogleCloudAssuredworkloadsV1Violation>
        >
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
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

      if (params.name !== undefined && params.name !== null) {
        validateMultiSegment('name', String(params.name));
        params.name = encodeWithoutSlashes(String(params.name));
      }

      const rootUrl =
        options.rootUrl || 'https://assuredworkloads.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}')
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
        createAPIRequest<Schema$GoogleCloudAssuredworkloadsV1Violation>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleCloudAssuredworkloadsV1Violation>(
          parameters
        );
      }
    }

    /**
     * Lists the Violations in the AssuredWorkload Environment. Callers may also choose to read across multiple Workloads as per [AIP-159](https://google.aip.dev/159) by using '-' (the hyphen or dash character) as a wildcard character instead of workload-id in the parent. Format `organizations/{org_id\}/locations/{location\}/workloads/-`
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/assuredworkloads.googleapis.com
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
     * const assuredworkloads = google.assuredworkloads('v1');
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
     *     await assuredworkloads.organizations.locations.workloads.violations.list({
     *       // Optional. A custom filter for filtering by the Violations properties.
     *       filter: 'placeholder-value',
     *       // The end of the time window.
     *       'interval.endTime': 'placeholder-value',
     *       // The start of the time window.
     *       'interval.startTime': 'placeholder-value',
     *       // Optional. Actionable sorting delegation.
     *       orderBy: 'placeholder-value',
     *       // Optional. Page size.
     *       pageSize: 'placeholder-value',
     *       // Optional. Page token returned from previous request.
     *       pageToken: 'placeholder-value',
     *       // Required. The Workload name. Format `organizations/{org_id\}/locations/{location\}/workloads/{workload\}`.
     *       parent:
     *         'organizations/my-organization/locations/my-location/workloads/my-workload',
     *     });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "nextPageToken": "my_nextPageToken",
     *   //   "totalSize": 0,
     *   //   "violations": []
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
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
      params: Params$Resource$Organizations$Locations$Workloads$Violations$List,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    list(
      params?: Params$Resource$Organizations$Locations$Workloads$Violations$List,
      options?: MethodOptions
    ): Promise<
      GaxiosResponseWithHTTP2<Schema$GoogleCloudAssuredworkloadsV1ListViolationsResponse>
    >;
    list(
      params: Params$Resource$Organizations$Locations$Workloads$Violations$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Organizations$Locations$Workloads$Violations$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleCloudAssuredworkloadsV1ListViolationsResponse>,
      callback: BodyResponseCallback<Schema$GoogleCloudAssuredworkloadsV1ListViolationsResponse>
    ): void;
    list(
      params: Params$Resource$Organizations$Locations$Workloads$Violations$List,
      callback: BodyResponseCallback<Schema$GoogleCloudAssuredworkloadsV1ListViolationsResponse>
    ): void;
    list(
      callback: BodyResponseCallback<Schema$GoogleCloudAssuredworkloadsV1ListViolationsResponse>
    ): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Organizations$Locations$Workloads$Violations$List
        | BodyResponseCallback<Schema$GoogleCloudAssuredworkloadsV1ListViolationsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleCloudAssuredworkloadsV1ListViolationsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleCloudAssuredworkloadsV1ListViolationsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<
          GaxiosResponseWithHTTP2<Schema$GoogleCloudAssuredworkloadsV1ListViolationsResponse>
        >
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
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

      if (params.parent !== undefined && params.parent !== null) {
        validateMultiSegment('parent', String(params.parent));
        params.parent = encodeWithoutSlashes(String(params.parent));
      }

      const rootUrl =
        options.rootUrl || 'https://assuredworkloads.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}/violations')
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
        createAPIRequest<Schema$GoogleCloudAssuredworkloadsV1ListViolationsResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleCloudAssuredworkloadsV1ListViolationsResponse>(
          parameters
        );
      }
    }
  }

  export interface Params$Resource$Organizations$Locations$Workloads$Violations$Acknowledge extends StandardParameters {
    /**
     * Required. The resource name of the Violation to acknowledge. Format: organizations/{organization\}/locations/{location\}/workloads/{workload\}/violations/{violation\}
     */
    name?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleCloudAssuredworkloadsV1AcknowledgeViolationRequest;
  }
  export interface Params$Resource$Organizations$Locations$Workloads$Violations$Batchacknowledgeviolations extends StandardParameters {
    /**
     * Optional. The parent resource shared by all violations being acknowledged. Format: organizations/{organization\}/locations/{location\}/workloads/{workload\}
     */
    parent?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleCloudAssuredworkloadsV1BatchAcknowledgeViolationsRequest;
  }
  export interface Params$Resource$Organizations$Locations$Workloads$Violations$Get extends StandardParameters {
    /**
     * Required. The resource name of the Violation to fetch (ie. Violation.name). Format: organizations/{organization\}/locations/{location\}/workloads/{workload\}/violations/{violation\}
     */
    name?: string;
  }
  export interface Params$Resource$Organizations$Locations$Workloads$Violations$List extends StandardParameters {
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
     * Optional. Actionable sorting delegation.
     */
    orderBy?: string;
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

  export class Resource$Projects {
    context: APIRequestContext;
    locations: Resource$Projects$Locations;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.locations = new Resource$Projects$Locations(this.context);
    }
  }

  export class Resource$Projects$Locations {
    context: APIRequestContext;
    dbFindingSummaries: Resource$Projects$Locations$Dbfindingsummaries;
    dbFrameworkComplianceReports: Resource$Projects$Locations$Dbframeworkcompliancereports;
    dbFrameworkComplianceSummaries: Resource$Projects$Locations$Dbframeworkcompliancesummaries;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.dbFindingSummaries =
        new Resource$Projects$Locations$Dbfindingsummaries(this.context);
      this.dbFrameworkComplianceReports =
        new Resource$Projects$Locations$Dbframeworkcompliancereports(
          this.context
        );
      this.dbFrameworkComplianceSummaries =
        new Resource$Projects$Locations$Dbframeworkcompliancesummaries(
          this.context
        );
    }
  }

  export class Resource$Projects$Locations$Dbfindingsummaries {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Lists the finding summary by category for a given scope.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/assuredworkloads.googleapis.com
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
     * const assuredworkloads = google.assuredworkloads('v1');
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
     *   const res = await assuredworkloads.projects.locations.dbFindingSummaries.list(
     *     {
     *       // Optional. The filtering results.
     *       filter: 'placeholder-value',
     *       // Optional. The requested page size. The server might return fewer items than requested. If unspecified, the server picks an appropriate default.
     *       pageSize: 'placeholder-value',
     *       // Optional. A token that identifies the page of results that the server should return.
     *       pageToken: 'placeholder-value',
     *       // Required. The parent scope for the framework overview page. Formats: - projects/{project\}/locations/{location\} - folders/{folder\}/locations/{location\} - organizations/{organization\}/locations/{location\}
     *       parent: 'projects/my-project/locations/my-location',
     *     },
     *   );
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "dbFindingSummaries": [],
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
      params: Params$Resource$Projects$Locations$Dbfindingsummaries$List,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    list(
      params?: Params$Resource$Projects$Locations$Dbfindingsummaries$List,
      options?: MethodOptions
    ): Promise<
      GaxiosResponseWithHTTP2<Schema$GoogleCloudAssuredworkloadsV1ListDbFindingSummariesResponse>
    >;
    list(
      params: Params$Resource$Projects$Locations$Dbfindingsummaries$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Dbfindingsummaries$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleCloudAssuredworkloadsV1ListDbFindingSummariesResponse>,
      callback: BodyResponseCallback<Schema$GoogleCloudAssuredworkloadsV1ListDbFindingSummariesResponse>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Dbfindingsummaries$List,
      callback: BodyResponseCallback<Schema$GoogleCloudAssuredworkloadsV1ListDbFindingSummariesResponse>
    ): void;
    list(
      callback: BodyResponseCallback<Schema$GoogleCloudAssuredworkloadsV1ListDbFindingSummariesResponse>
    ): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Dbfindingsummaries$List
        | BodyResponseCallback<Schema$GoogleCloudAssuredworkloadsV1ListDbFindingSummariesResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleCloudAssuredworkloadsV1ListDbFindingSummariesResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleCloudAssuredworkloadsV1ListDbFindingSummariesResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<
          GaxiosResponseWithHTTP2<Schema$GoogleCloudAssuredworkloadsV1ListDbFindingSummariesResponse>
        >
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Dbfindingsummaries$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Dbfindingsummaries$List;
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
        options.rootUrl || 'https://assuredworkloads.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}/dbFindingSummaries')
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
        createAPIRequest<Schema$GoogleCloudAssuredworkloadsV1ListDbFindingSummariesResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleCloudAssuredworkloadsV1ListDbFindingSummariesResponse>(
          parameters
        );
      }
    }
  }

  export interface Params$Resource$Projects$Locations$Dbfindingsummaries$List extends StandardParameters {
    /**
     * Optional. The filtering results.
     */
    filter?: string;
    /**
     * Optional. The requested page size. The server might return fewer items than requested. If unspecified, the server picks an appropriate default.
     */
    pageSize?: number;
    /**
     * Optional. A token that identifies the page of results that the server should return.
     */
    pageToken?: string;
    /**
     * Required. The parent scope for the framework overview page. Formats: - projects/{project\}/locations/{location\} - folders/{folder\}/locations/{location\} - organizations/{organization\}/locations/{location\}
     */
    parent?: string;
  }

  export class Resource$Projects$Locations$Dbframeworkcompliancereports {
    context: APIRequestContext;
    dbControlComplianceSummaries: Resource$Projects$Locations$Dbframeworkcompliancereports$Dbcontrolcompliancesummaries;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.dbControlComplianceSummaries =
        new Resource$Projects$Locations$Dbframeworkcompliancereports$Dbcontrolcompliancesummaries(
          this.context
        );
    }

    /**
     * Gets the aggregated compliance report over time for a given scope.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/assuredworkloads.googleapis.com
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
     * const assuredworkloads = google.assuredworkloads('v1');
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
     *     await assuredworkloads.projects.locations.dbFrameworkComplianceReports.aggregate(
     *       {
     *         // Optional. The filtering results.
     *         filter: 'placeholder-value',
     *         // Optional. Exclusive end of the interval. If specified, a Timestamp matching this interval will have to be before the end.
     *         'interval.endTime': 'placeholder-value',
     *         // Optional. Inclusive start of the interval. If specified, a Timestamp matching this interval will have to be the same or after the start.
     *         'interval.startTime': 'placeholder-value',
     *         // Required. The name of the aggregated compliance report over time to retrieve. Format: `organizations/{organization_id\}/locations/{location\}/dbFrameworkComplianceReports/{db_framework_compliance_report\}`
     *         name: 'projects/my-project/locations/my-location/dbFrameworkComplianceReports/my-dbFrameworkComplianceReport',
     *       },
     *     );
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "aggregatedComplianceReports": []
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * ```
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    aggregate(
      params: Params$Resource$Projects$Locations$Dbframeworkcompliancereports$Aggregate,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    aggregate(
      params?: Params$Resource$Projects$Locations$Dbframeworkcompliancereports$Aggregate,
      options?: MethodOptions
    ): Promise<
      GaxiosResponseWithHTTP2<Schema$GoogleCloudAssuredworkloadsV1AggregateDbFrameworkComplianceReportResponse>
    >;
    aggregate(
      params: Params$Resource$Projects$Locations$Dbframeworkcompliancereports$Aggregate,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    aggregate(
      params: Params$Resource$Projects$Locations$Dbframeworkcompliancereports$Aggregate,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleCloudAssuredworkloadsV1AggregateDbFrameworkComplianceReportResponse>,
      callback: BodyResponseCallback<Schema$GoogleCloudAssuredworkloadsV1AggregateDbFrameworkComplianceReportResponse>
    ): void;
    aggregate(
      params: Params$Resource$Projects$Locations$Dbframeworkcompliancereports$Aggregate,
      callback: BodyResponseCallback<Schema$GoogleCloudAssuredworkloadsV1AggregateDbFrameworkComplianceReportResponse>
    ): void;
    aggregate(
      callback: BodyResponseCallback<Schema$GoogleCloudAssuredworkloadsV1AggregateDbFrameworkComplianceReportResponse>
    ): void;
    aggregate(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Dbframeworkcompliancereports$Aggregate
        | BodyResponseCallback<Schema$GoogleCloudAssuredworkloadsV1AggregateDbFrameworkComplianceReportResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleCloudAssuredworkloadsV1AggregateDbFrameworkComplianceReportResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleCloudAssuredworkloadsV1AggregateDbFrameworkComplianceReportResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<
          GaxiosResponseWithHTTP2<Schema$GoogleCloudAssuredworkloadsV1AggregateDbFrameworkComplianceReportResponse>
        >
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Dbframeworkcompliancereports$Aggregate;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Dbframeworkcompliancereports$Aggregate;
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
        options.rootUrl || 'https://assuredworkloads.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}:aggregate')
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
        createAPIRequest<Schema$GoogleCloudAssuredworkloadsV1AggregateDbFrameworkComplianceReportResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleCloudAssuredworkloadsV1AggregateDbFrameworkComplianceReportResponse>(
          parameters
        );
      }
    }

    /**
     * Fetches the framework compliance report for a given scope.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/assuredworkloads.googleapis.com
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
     * const assuredworkloads = google.assuredworkloads('v1');
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
     *     await assuredworkloads.projects.locations.dbFrameworkComplianceReports.fetch(
     *       {
     *         // Optional. The end time of the report.
     *         endTime: 'placeholder-value',
     *         // Optional. The filtering results.
     *         filter: 'placeholder-value',
     *         // Required. The name of the framework compliance report to retrieve.
     *         name: 'projects/my-project/locations/my-location/dbFrameworkComplianceReports/my-dbFrameworkComplianceReport',
     *       },
     *     );
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "controlAssessmentDetails": {},
     *   //   "framework": "my_framework",
     *   //   "frameworkCategories": [],
     *   //   "frameworkDescription": "my_frameworkDescription",
     *   //   "frameworkDisplayName": "my_frameworkDisplayName",
     *   //   "frameworkType": "my_frameworkType",
     *   //   "majorRevisionId": "my_majorRevisionId",
     *   //   "minorRevisionId": "my_minorRevisionId",
     *   //   "name": "my_name",
     *   //   "supportedCloudProviders": [],
     *   //   "targetResourceDetails": [],
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
    fetch(
      params: Params$Resource$Projects$Locations$Dbframeworkcompliancereports$Fetch,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    fetch(
      params?: Params$Resource$Projects$Locations$Dbframeworkcompliancereports$Fetch,
      options?: MethodOptions
    ): Promise<
      GaxiosResponseWithHTTP2<Schema$GoogleCloudAssuredworkloadsV1FetchDbFrameworkComplianceReportResponse>
    >;
    fetch(
      params: Params$Resource$Projects$Locations$Dbframeworkcompliancereports$Fetch,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    fetch(
      params: Params$Resource$Projects$Locations$Dbframeworkcompliancereports$Fetch,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleCloudAssuredworkloadsV1FetchDbFrameworkComplianceReportResponse>,
      callback: BodyResponseCallback<Schema$GoogleCloudAssuredworkloadsV1FetchDbFrameworkComplianceReportResponse>
    ): void;
    fetch(
      params: Params$Resource$Projects$Locations$Dbframeworkcompliancereports$Fetch,
      callback: BodyResponseCallback<Schema$GoogleCloudAssuredworkloadsV1FetchDbFrameworkComplianceReportResponse>
    ): void;
    fetch(
      callback: BodyResponseCallback<Schema$GoogleCloudAssuredworkloadsV1FetchDbFrameworkComplianceReportResponse>
    ): void;
    fetch(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Dbframeworkcompliancereports$Fetch
        | BodyResponseCallback<Schema$GoogleCloudAssuredworkloadsV1FetchDbFrameworkComplianceReportResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleCloudAssuredworkloadsV1FetchDbFrameworkComplianceReportResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleCloudAssuredworkloadsV1FetchDbFrameworkComplianceReportResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<
          GaxiosResponseWithHTTP2<Schema$GoogleCloudAssuredworkloadsV1FetchDbFrameworkComplianceReportResponse>
        >
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Dbframeworkcompliancereports$Fetch;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Dbframeworkcompliancereports$Fetch;
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
        options.rootUrl || 'https://assuredworkloads.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}:fetch')
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
        createAPIRequest<Schema$GoogleCloudAssuredworkloadsV1FetchDbFrameworkComplianceReportResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleCloudAssuredworkloadsV1FetchDbFrameworkComplianceReportResponse>(
          parameters
        );
      }
    }
  }

  export interface Params$Resource$Projects$Locations$Dbframeworkcompliancereports$Aggregate extends StandardParameters {
    /**
     * Optional. The filtering results.
     */
    filter?: string;
    /**
     * Optional. Exclusive end of the interval. If specified, a Timestamp matching this interval will have to be before the end.
     */
    'interval.endTime'?: string;
    /**
     * Optional. Inclusive start of the interval. If specified, a Timestamp matching this interval will have to be the same or after the start.
     */
    'interval.startTime'?: string;
    /**
     * Required. The name of the aggregated compliance report over time to retrieve. Format: `organizations/{organization_id\}/locations/{location\}/dbFrameworkComplianceReports/{db_framework_compliance_report\}`
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Locations$Dbframeworkcompliancereports$Fetch extends StandardParameters {
    /**
     * Optional. The end time of the report.
     */
    endTime?: string;
    /**
     * Optional. The filtering results.
     */
    filter?: string;
    /**
     * Required. The name of the framework compliance report to retrieve.
     */
    name?: string;
  }

  export class Resource$Projects$Locations$Dbframeworkcompliancereports$Dbcontrolcompliancesummaries {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Lists the control compliance summary for a given scope.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/assuredworkloads.googleapis.com
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
     * const assuredworkloads = google.assuredworkloads('v1');
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
     *     await assuredworkloads.projects.locations.dbFrameworkComplianceReports.dbControlComplianceSummaries.list(
     *       {
     *         // Optional. The filtering results.
     *         filter: 'placeholder-value',
     *         // Optional. The requested page size. The server might return fewer items than requested. If unspecified, the default page size is 50. The maximum value is 1000.
     *         pageSize: 'placeholder-value',
     *         // Optional. A token that identifies the page of results that the server should return.
     *         pageToken: 'placeholder-value',
     *         // Required. The parent scope for the framework overview page. Format: organizations/{organization\}/locations/{location\}/dbFrameworkComplianceReports/{db_framework_compliance_report\} folders/{folder\}/locations/{location\}/dbFrameworkComplianceReports/{db_framework_compliance_report\} projects/{project\}/locations/{location\}/dbFrameworkComplianceReports/{db_framework_compliance_report\}
     *         parent:
     *           'projects/my-project/locations/my-location/dbFrameworkComplianceReports/my-dbFrameworkComplianceReport',
     *       },
     *     );
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "dbControlComplianceSummaries": [],
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
      params: Params$Resource$Projects$Locations$Dbframeworkcompliancereports$Dbcontrolcompliancesummaries$List,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    list(
      params?: Params$Resource$Projects$Locations$Dbframeworkcompliancereports$Dbcontrolcompliancesummaries$List,
      options?: MethodOptions
    ): Promise<
      GaxiosResponseWithHTTP2<Schema$GoogleCloudAssuredworkloadsV1ListDbControlComplianceSummariesResponse>
    >;
    list(
      params: Params$Resource$Projects$Locations$Dbframeworkcompliancereports$Dbcontrolcompliancesummaries$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Dbframeworkcompliancereports$Dbcontrolcompliancesummaries$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleCloudAssuredworkloadsV1ListDbControlComplianceSummariesResponse>,
      callback: BodyResponseCallback<Schema$GoogleCloudAssuredworkloadsV1ListDbControlComplianceSummariesResponse>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Dbframeworkcompliancereports$Dbcontrolcompliancesummaries$List,
      callback: BodyResponseCallback<Schema$GoogleCloudAssuredworkloadsV1ListDbControlComplianceSummariesResponse>
    ): void;
    list(
      callback: BodyResponseCallback<Schema$GoogleCloudAssuredworkloadsV1ListDbControlComplianceSummariesResponse>
    ): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Dbframeworkcompliancereports$Dbcontrolcompliancesummaries$List
        | BodyResponseCallback<Schema$GoogleCloudAssuredworkloadsV1ListDbControlComplianceSummariesResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleCloudAssuredworkloadsV1ListDbControlComplianceSummariesResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleCloudAssuredworkloadsV1ListDbControlComplianceSummariesResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<
          GaxiosResponseWithHTTP2<Schema$GoogleCloudAssuredworkloadsV1ListDbControlComplianceSummariesResponse>
        >
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Dbframeworkcompliancereports$Dbcontrolcompliancesummaries$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Dbframeworkcompliancereports$Dbcontrolcompliancesummaries$List;
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
        options.rootUrl || 'https://assuredworkloads.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}/dbControlComplianceSummaries')
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
        createAPIRequest<Schema$GoogleCloudAssuredworkloadsV1ListDbControlComplianceSummariesResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleCloudAssuredworkloadsV1ListDbControlComplianceSummariesResponse>(
          parameters
        );
      }
    }
  }

  export interface Params$Resource$Projects$Locations$Dbframeworkcompliancereports$Dbcontrolcompliancesummaries$List extends StandardParameters {
    /**
     * Optional. The filtering results.
     */
    filter?: string;
    /**
     * Optional. The requested page size. The server might return fewer items than requested. If unspecified, the default page size is 50. The maximum value is 1000.
     */
    pageSize?: number;
    /**
     * Optional. A token that identifies the page of results that the server should return.
     */
    pageToken?: string;
    /**
     * Required. The parent scope for the framework overview page. Format: organizations/{organization\}/locations/{location\}/dbFrameworkComplianceReports/{db_framework_compliance_report\} folders/{folder\}/locations/{location\}/dbFrameworkComplianceReports/{db_framework_compliance_report\} projects/{project\}/locations/{location\}/dbFrameworkComplianceReports/{db_framework_compliance_report\}
     */
    parent?: string;
  }

  export class Resource$Projects$Locations$Dbframeworkcompliancesummaries {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Lists the framework compliance summary for a given scope.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/assuredworkloads.googleapis.com
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
     * const assuredworkloads = google.assuredworkloads('v1');
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
     *     await assuredworkloads.projects.locations.dbFrameworkComplianceSummaries.list(
     *       {
     *         // Optional. The filtering results.
     *         filter: 'placeholder-value',
     *         // Optional. The requested page size. The server might return fewer items than requested. If unspecified, the default page size is 50. The maximum value is 1000.
     *         pageSize: 'placeholder-value',
     *         // Optional. A token that identifies the page of results that the server should return. Pass the next_page_token value from a previous result.
     *         pageToken: 'placeholder-value',
     *         // Required. The parent scope for the framework compliance summary. Format: organizations/{organization\}/locations/{location\} folders/{folder\}/locations/{location\} projects/{project\}/locations/{location\}
     *         parent: 'projects/my-project/locations/my-location',
     *         // Optional. Specifies the level of detail to return in the response.
     *         view: 'placeholder-value',
     *       },
     *     );
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "dbFrameworkComplianceSummaries": [],
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
      params: Params$Resource$Projects$Locations$Dbframeworkcompliancesummaries$List,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    list(
      params?: Params$Resource$Projects$Locations$Dbframeworkcompliancesummaries$List,
      options?: MethodOptions
    ): Promise<
      GaxiosResponseWithHTTP2<Schema$GoogleCloudAssuredworkloadsV1ListDbFrameworkComplianceSummariesResponse>
    >;
    list(
      params: Params$Resource$Projects$Locations$Dbframeworkcompliancesummaries$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Dbframeworkcompliancesummaries$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleCloudAssuredworkloadsV1ListDbFrameworkComplianceSummariesResponse>,
      callback: BodyResponseCallback<Schema$GoogleCloudAssuredworkloadsV1ListDbFrameworkComplianceSummariesResponse>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Dbframeworkcompliancesummaries$List,
      callback: BodyResponseCallback<Schema$GoogleCloudAssuredworkloadsV1ListDbFrameworkComplianceSummariesResponse>
    ): void;
    list(
      callback: BodyResponseCallback<Schema$GoogleCloudAssuredworkloadsV1ListDbFrameworkComplianceSummariesResponse>
    ): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Dbframeworkcompliancesummaries$List
        | BodyResponseCallback<Schema$GoogleCloudAssuredworkloadsV1ListDbFrameworkComplianceSummariesResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleCloudAssuredworkloadsV1ListDbFrameworkComplianceSummariesResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleCloudAssuredworkloadsV1ListDbFrameworkComplianceSummariesResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<
          GaxiosResponseWithHTTP2<Schema$GoogleCloudAssuredworkloadsV1ListDbFrameworkComplianceSummariesResponse>
        >
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Dbframeworkcompliancesummaries$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Dbframeworkcompliancesummaries$List;
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
        options.rootUrl || 'https://assuredworkloads.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}/dbFrameworkComplianceSummaries')
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
        createAPIRequest<Schema$GoogleCloudAssuredworkloadsV1ListDbFrameworkComplianceSummariesResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleCloudAssuredworkloadsV1ListDbFrameworkComplianceSummariesResponse>(
          parameters
        );
      }
    }
  }

  export interface Params$Resource$Projects$Locations$Dbframeworkcompliancesummaries$List extends StandardParameters {
    /**
     * Optional. The filtering results.
     */
    filter?: string;
    /**
     * Optional. The requested page size. The server might return fewer items than requested. If unspecified, the default page size is 50. The maximum value is 1000.
     */
    pageSize?: number;
    /**
     * Optional. A token that identifies the page of results that the server should return. Pass the next_page_token value from a previous result.
     */
    pageToken?: string;
    /**
     * Required. The parent scope for the framework compliance summary. Format: organizations/{organization\}/locations/{location\} folders/{folder\}/locations/{location\} projects/{project\}/locations/{location\}
     */
    parent?: string;
    /**
     * Optional. Specifies the level of detail to return in the response.
     */
    view?: string;
  }
}
