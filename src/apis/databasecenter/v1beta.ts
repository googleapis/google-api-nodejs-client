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

export namespace databasecenter_v1beta {
  export interface Options extends GlobalOptions {
    version: 'v1beta';
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
   * Database Center API
   *
   * Database Center offers a comprehensive, organization-wide platform for monitoring database fleet health across various products. It simplifies management and reduces risk by automatically aggregating and summarizing key health signals, removing the need for custom dashboards. The platform provides a unified view through its dashboard and API, enabling teams focused on reliability, compliance, security, cost, and administration to quickly identify and address relevant issues within their database fleets.
   *
   * @example
   * ```js
   * const {google} = require('googleapis');
   * const databasecenter = google.databasecenter('v1beta');
   * ```
   */
  export class Databasecenter {
    context: APIRequestContext;
    folders: Resource$Folders;
    organizations: Resource$Organizations;
    projects: Resource$Projects;
    v1beta: Resource$V1beta;

    constructor(options: GlobalOptions, google?: GoogleConfigurable) {
      this.context = {
        _options: options || {},
        google,
      };

      this.folders = new Resource$Folders(this.context);
      this.organizations = new Resource$Organizations(this.context);
      this.projects = new Resource$Projects(this.context);
      this.v1beta = new Resource$V1beta(this.context);
    }
  }

  /**
   * Details related to signal.
   */
  export interface Schema$AdditionalDetail {
    /**
     * Automated backup policy information applies to signals with type SIGNAL_TYPE_NO_AUTOMATED_BACKUP_POLICY.
     */
    automatedBackupPolicyInfo?: Schema$AutomatedBackupPolicyInfo;
    /**
     * Backup run information applies to signals with types SIGNAL_TYPE_LAST_BACKUP_FAILED and SIGNAL_TYPE_LAST_BACKUP_OLD.
     */
    backupRunInfo?: Schema$BackupRunInfo;
    /**
     * Deletion protection information applies to signals with type SIGNAL_TYPE_NO_DELETION_PROTECTION
     */
    deletionProtectionInfo?: Schema$DeletionProtectionInfo;
    /**
     * Inefficient query information applies to signals with type SIGNAL_TYPE_INEFFICIENT_QUERY.
     */
    inefficientQueryInfo?: Schema$InefficientQueryInfo;
    /**
     * Maintenance recommendation information applies to signals with type SIGNAL_TYPE_RECOMMENDED_MAINTENANCE_POLICIES.
     */
    maintenanceRecommendationInfo?: Schema$MaintenanceRecommendationInfo;
    /**
     * Outdated minor version information applies to signals with type SIGNAL_TYPE_OUTDATED_MINOR_VERSION.
     */
    outdatedMinorVersionInfo?: Schema$OutdatedMinorVersionInfo;
    /**
     * Recommendation information applies to recommendations.
     */
    recommendationInfo?: Schema$RecommendationInfo;
    /**
     * Resource suspension information applies to signals with type SIGNAL_TYPE_RESOURCE_SUSPENDED.
     */
    resourceSuspensionInfo?: Schema$ResourceSuspensionInfo;
    /**
     * SCC information applies to SCC signals.
     */
    sccInfo?: Schema$SCCInfo;
    /**
     * Short backup retention information applies to signals with type SIGNAL_TYPE_SHORT_BACKUP_RETENTION.
     */
    shortBackupRetentionInfo?: Schema$RetentionSettingsInfo;
    /**
     * Event time when signal was recorded by source service.
     */
    signalEventTime?: string | null;
    /**
     * Where the signal is coming from.
     */
    signalSource?: string | null;
    /**
     * Type of the signal.
     */
    signalType?: string | null;
  }
  /**
   * Affiliation information of a resource
   */
  export interface Schema$Affiliation {
    /**
     * Optional. Full resource name
     */
    fullResourceName?: string | null;
    /**
     * Optional. Multiple lineages can be created from a resource. For example, a resource can be replicated to multiple target resources. In this case, there will be multiple lineages for the resource, one for each target resource.
     */
    lineages?: Schema$Lineage[];
    /**
     * Optional. resource id of affiliated resource
     */
    resourceId?: string | null;
  }
  /**
   * The response message to aggregate a fleet by some group by fields.
   */
  export interface Schema$AggregateFleetResponse {
    /**
     * A token that can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages.
     */
    nextPageToken?: string | null;
    /**
     * Count of all resource groups in the fleet. This includes counts from all pages.
     */
    resourceGroupsTotalCount?: number | null;
    /**
     * Count of all resources in the fleet. This includes counts from all pages.
     */
    resourceTotalCount?: number | null;
    /**
     * Represents a row grouped by the fields in the input.
     */
    rows?: Schema$AggregateFleetRow[];
    /**
     * Output only. The total number of rows in the entire list.
     */
    totalSize?: string | null;
    /**
     * Unordered list. List of unreachable regions from where data could not be retrieved.
     */
    unreachable?: string[] | null;
  }
  /**
   * Individual row grouped by a particular dimension.
   */
  export interface Schema$AggregateFleetRow {
    /**
     * Optional. Delta counts and details of resources which were added to/deleted from fleet.
     */
    deltaDetails?: Schema$DeltaDetails;
    /**
     * Group by dimension.
     */
    dimension?: Schema$Dimension[];
    /**
     * Number of resource groups that have a particular dimension.
     */
    resourceGroupsCount?: number | null;
    /**
     * Number of resources that have a particular dimension.
     */
    resourcesCount?: number | null;
  }
  /**
   * AggregateIssueStatsRequest represents the input to the AggregateIssueStats method.
   */
  export interface Schema$AggregateIssueStatsRequest {
    /**
     * Optional. The baseline date w.r.t. which the delta counts are calculated. If not set, delta counts are not included in the response and the response indicates the current state of the fleet.
     */
    baselineDate?: Schema$Date;
    /**
     * Optional. The expression to filter resources. Supported fields are: `full_resource_name`, `resource_type`, `container`, `product.type`, `product.engine`, `product.version`, `location`, `labels`, `issues`, fields of availability_info, data_protection_info,'resource_name', etc. The expression is a list of zero or more restrictions combined via logical operators `AND` and `OR`. When `AND` and `OR` are both used in the expression, parentheses must be appropriately used to group the combinations. Example: `location="us-east1"` Example: `container="projects/123" OR container="projects/456"` Example: `(container="projects/123" OR container="projects/456") AND location="us-east1"`
     */
    filter?: string | null;
    /**
     * Required. Parent can be a project, a folder, or an organization. The search is limited to the resources within the `scope`. The allowed values are: * projects/{PROJECT_ID\} (e.g., "projects/foo-bar") * projects/{PROJECT_NUMBER\} (e.g., "projects/12345678") * folders/{FOLDER_NUMBER\} (e.g., "folders/1234567") * organizations/{ORGANIZATION_NUMBER\} (e.g., "organizations/123456")
     */
    parent?: string | null;
    /**
     * Optional. Lists of signal types that are issues.
     */
    signalTypeGroups?: Schema$SignalTypeGroup[];
  }
  /**
   * The response message containing one of more group of relevant health issues for database resources.
   */
  export interface Schema$AggregateIssueStatsResponse {
    /**
     * List of issue group stats where each group contains stats for resources having a particular combination of relevant issues.
     */
    issueGroupStats?: Schema$IssueGroupStats[];
    /**
     * Total count of the resource filtered in based on the user given filter.
     */
    totalResourceGroupsCount?: number | null;
    /**
     * Total count of the resources filtered in based on the user given filter.
     */
    totalResourcesCount?: number | null;
    /**
     * Unordered list. List of unreachable regions from where data could not be retrieved.
     */
    unreachable?: string[] | null;
  }
  /**
   * AggregateQueryStatsRequest represents the input to the AggregateQueryStats method.
   */
  export interface Schema$AggregateQueryStatsRequest {
    /**
     * Optional. The expression to filter resources. Supported fields are: `full_resource_name`, `resource_type`, `container`, `product.type`, `product.engine`, `product.version`, `location`, `labels`, `issues`, fields of availability_info, data_protection_info,'resource_name', etc. The expression is a list of zero or more restrictions combined via logical operators `AND` and `OR`. When `AND` and `OR` are both used in the expression, parentheses must be appropriately used to group the combinations. Example: `location="us-east1"` Example: `container="projects/123" OR container="projects/456"` Example: `(container="projects/123" OR container="projects/456") AND location="us-east1"` Additional specific fields for query stats are: `metric_window`, `query_hash`, `normalized_query`. Example: `metric_window="LAST_ONE_DAY"` (Possible values for `metric_window` are: `LAST_ONE_DAY`, `LAST_ONE_WEEK`, `LAST_TWO_WEEKS`) Example: `query_hash="12345678"` Example: `normalized_query="SELECT * FROM table"`
     */
    filter?: string | null;
    /**
     * Optional. The expression to order the results by. Example: `order_by="execution_count"` Example: `order_by="execution_count desc"` Supported order by fields are `execution_count`, `rows_processed`, `total_cpu_time`, `avg_cpu_time`.
     */
    orderBy?: string | null;
    /**
     * Optional. If unspecified, at most 100 query stats will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000.
     */
    pageSize?: number | null;
    /**
     * Optional. A page token, received from a previous `AggregateQueryStatsRequest` call. Provide this to retrieve the subsequent page. All parameters except page_token should match the parameters in the call that provided the page token.
     */
    pageToken?: string | null;
  }
  /**
   * The response message containing relevant query stats for database resources.
   */
  export interface Schema$AggregateQueryStatsResponse {
    /**
     * A token that can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages.
     */
    nextPageToken?: string | null;
    /**
     * List of query stats where each group contains stats for resources having a particular combination of relevant query stats.
     */
    queryStats?: Schema$QueryStatsInfo[];
    /**
     * Unordered list. List of unreachable regions from where data could not be retrieved.
     */
    unreachable?: string[] | null;
  }
  /**
   * Automated backup policy signal info
   */
  export interface Schema$AutomatedBackupPolicyInfo {
    /**
     * Is automated policy enabled.
     */
    isEnabled?: boolean | null;
    /**
     * Optional. Sub resource details associated with the signal.
     */
    subResource?: Schema$SubResource;
  }
  /**
   * BackupDRConfig to capture the backup and disaster recovery details of database resource.
   */
  export interface Schema$BackupDRConfig {
    /**
     * Indicates if the resource is managed by BackupDR.
     */
    backupdrManaged?: boolean | null;
  }
  /**
   * Metadata about latest backup run state for a database resource.
   */
  export interface Schema$BackupRunInfo {
    /**
     * The time the backup operation completed.
     */
    endTime?: string | null;
    /**
     * Additional information about the error encountered.
     */
    errorMessage?: string | null;
    /**
     * Optional. OperationErrorType to expose specific error when backup operation of database resource failed, that is state is FAILED.
     */
    operationErrorType?: string | null;
    /**
     * The time the backup operation started.
     */
    startTime?: string | null;
    /**
     * Output only. The state of this run.
     */
    state?: string | null;
    /**
     * Optional. Sub resource details associated with the backup run.
     */
    subResource?: Schema$SubResource;
  }
  /**
   * DatabaseResource represents every individually configured database unit representing compute and/or storage.
   */
  export interface Schema$DatabaseResource {
    /**
     * Optional. Affiliation details of the resource.
     */
    affiliations?: Schema$Affiliation[];
    /**
     * Optional. Backup and disaster recovery details for the resource.
     */
    backupdrConfig?: Schema$BackupDRConfig;
    /**
     * List of children associated with a database group.
     */
    childResources?: Schema$DatabaseResource[];
    /**
     * Specifies where the resource is created. For Google Cloud resources, it is the full name of the project.
     */
    container?: string | null;
    /**
     * The edition of the resource.
     */
    edition?: string | null;
    /**
     * The full resource name, based on CAIS resource name format https://cloud.google.com/asset-inventory/docs/resource-name-format Example: `//cloudsql.googleapis.com/projects/project-number/instances/mysql-1` `//cloudsql.googleapis.com/projects/project-number/instances/postgres-1` `//spanner.googleapis.com/projects/project-number/instances/spanner-instance-1` `//alloydb.googleapis.com/projects/project-number/locations/us-central1/clusters/c1` `//alloydb.googleapis.com/projects/project-number/locations/us-central1/clusters/c1/instances/i1`
     */
    fullResourceName?: string | null;
    /**
     * Labels applied on the resource. The requirements for labels assigned to Google Cloud resources may be found at https://cloud.google.com/resource-manager/docs/labels-overview#requirements
     */
    labels?: Schema$Label[];
    /**
     * The location of the resources. It supports returning only regional locations in Google Cloud. These are of the form: "us-central1", "us-east1", etc. See https://cloud.google.com/about/locations for a list of such regions.
     */
    location?: string | null;
    /**
     * Machine configuration like CPU, memory, etc for the resource.
     */
    machineConfig?: Schema$MachineConfig;
    /**
     * Optional. The maintenance information of the resource.
     */
    maintenanceInfo?: Schema$MaintenanceInfo;
    /**
     * Observable metrics for the resource e.g. CPU utilization, memory utilization, etc.
     */
    metrics?: Schema$Metrics;
    /**
     * The product this resource represents.
     */
    product?: Schema$Product;
    /**
     * The category of the resource.
     */
    resourceCategory?: string | null;
    /**
     * The name of the resource(The last part of the full resource name). Example: For full resource name - `//cloudsql.googleapis.com/projects/project-number/instances/mysql-1`, resource name - `mysql-1` For full resource name - `//cloudsql.googleapis.com/projects/project-number/instances/postgres-1` , resource name - `postgres-1` Note: In some cases, there might be more than one resource with the same resource name.
     */
    resourceName?: string | null;
    /**
     * The type of resource defined according to the pattern: {Service Name\}/{Type\}. Ex: sqladmin.googleapis.com/Instance alloydb.googleapis.com/Cluster alloydb.googleapis.com/Instance spanner.googleapis.com/Instance
     */
    resourceType?: string | null;
    /**
     * The list of signal groups and count of issues related to the resource. Only those signals which have been requested would be included.
     */
    signalGroups?: Schema$SignalGroup[];
    /**
     * Subtype of the resource specified at creation time.
     */
    subResourceType?: string | null;
    /**
     * Tags applied on the resource. The requirements for tags assigned to Google Cloud resources may be found at https://cloud.google.com/resource-manager/docs/tags/tags-overview
     */
    tags?: Schema$Tag[];
  }
  /**
   * DatabaseResourceGroup represents all resources that serve a common data set. It is considered notionally as a single entity, powered by any number of units of compute and storage.
   */
  export interface Schema$DatabaseResourceGroup {
    /**
     * A database resource that serves as a root of the group of database resources. It is repeated just in case we have the concept of multiple roots in the future, however, it will only be populated with a single value for now.
     */
    rootResources?: Schema$DatabaseResource[];
    /**
     * The filtered signal groups and the count of issues associated with the resources that have been filtered in.
     */
    signalGroups?: Schema$IssueCount[];
  }
  /**
   * DatabaseResource and Issue associated with it.
   */
  export interface Schema$DatabaseResourceIssue {
    /**
     * Resource associated with the issue.
     */
    resource?: Schema$DatabaseResource;
    /**
     * Signal associated with the issue.
     */
    signal?: Schema$Signal;
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
   * Deletion protection signal info for a database resource.
   */
  export interface Schema$DeletionProtectionInfo {
    /**
     * Is deletion protection enabled.
     */
    deletionProtectionEnabled?: boolean | null;
    /**
     * Optional. Sub resource details associated with the signal.
     */
    subResource?: Schema$SubResource;
  }
  /**
   * Captures the details of items that have increased or decreased in some bucket when compared to some point in history. It is currently used to capture the delta of resources that have been added or removed in the fleet as well as to capture the resources that have a change in Issue/Signal status.
   */
  export interface Schema$DeltaDetails {
    /**
     * Details of resources that have decreased.
     */
    decreasedResources?: Schema$ResourceDetails[];
    /**
     * Details of resources that have increased.
     */
    increasedResources?: Schema$ResourceDetails[];
  }
  /**
   * Dimension used to aggregate the fleet.
   */
  export interface Schema$Dimension {
    /**
     * Specifies where the resource is created. For Google Cloud resources, it is the full name of the project.
     */
    container?: string | null;
    /**
     * The edition of the resource.
     */
    edition?: string | null;
    /**
     * Whether the resource has deny maintenance schedules.
     */
    hasDenyMaintenanceSchedules?: boolean | null;
    /**
     * Whether the resource has a maintenance schedule.
     */
    hasMaintenanceSchedule?: boolean | null;
    /**
     * Label key of the resource.
     */
    labelKey?: string | null;
    /**
     * Label source of the resource.
     */
    labelSource?: string | null;
    /**
     * Label value of the resource.
     */
    labelValue?: string | null;
    /**
     * The location of the resources. It supports returning only regional locations in Google Cloud.
     */
    location?: string | null;
    /**
     * The management type of the resource.
     */
    managementType?: string | null;
    /**
     * Engine refers to underlying database binary running in an instance.
     */
    productEngine?: string | null;
    /**
     * Type to identify a product
     */
    productType?: string | null;
    /**
     * Version of the underlying database engine
     */
    productVersion?: string | null;
    /**
     * The category of the resource.
     */
    resourceCategory?: string | null;
    /**
     * The type of resource defined according to the pattern: {Service Name\}/{Type\}. Ex: sqladmin.googleapis.com/Instance alloydb.googleapis.com/Cluster alloydb.googleapis.com/Instance spanner.googleapis.com/Instance
     */
    resourceType?: string | null;
    /**
     * Subtype of the resource specified at creation time.
     */
    subResourceType?: string | null;
    /**
     * Tag inheritance value of the resource.
     */
    tagInherited?: boolean | null;
    /**
     * Tag key of the resource.
     */
    tagKey?: string | null;
    /**
     * Tag source of the resource.
     */
    tagSource?: string | null;
    /**
     * Tag value of the resource.
     */
    tagValue?: string | null;
  }
  /**
   * Metadata about inefficient query signal info for a database resource.
   */
  export interface Schema$InefficientQueryInfo {
    /**
     * Name of the database where index is required. For example, "db1", which is the name of the database present in the instance.
     */
    database?: string | null;
    /**
     * Count of queries to be impacted if index is applied
     */
    impactedQueriesCount?: string | null;
    /**
     * SQL statement of the index. Based on the ddl type, this will be either CREATE INDEX or DROP INDEX.
     */
    sqlIndexStatement?: string | null;
    /**
     * Cost of additional disk usage in bytes
     */
    storageCostBytes?: string | null;
    /**
     * Name of the table where index is required
     */
    table?: string | null;
  }
  /**
   * Count of issues for a group of signals.
   */
  export interface Schema$IssueCount {
    /**
     * Title of a signal group corresponding to the request.
     */
    displayName?: string | null;
    /**
     * The count of the number of issues associated with those resources that are explicitly filtered in by the filters present in the request. A signal is an issue when its SignalStatus field is set to SIGNAL_STATUS_ISSUE.
     */
    issueCount?: number | null;
  }
  /**
   * IssueGroupStats refers to stats for a particulare combination of relevant health issues of database resources.
   */
  export interface Schema$IssueGroupStats {
    /**
     * Database resource level health card name. This will corresponds to one of the requested input group names.
     */
    displayName?: string | null;
    /**
     * The number of resource groups from the total groups as defined above that are healthy with respect to all of the specified issues.
     */
    healthyResourceGroupsCount?: number | null;
    /**
     * The number of resources from the total defined above in field total_resources_count that are healthy with respect to all of the specified issues.
     */
    healthyResourcesCount?: number | null;
    /**
     * List of issues stats containing count of resources having particular issue category.
     */
    issueStats?: Schema$IssueStats[];
    /**
     * Total count of the groups of resources returned by the filter that also have one or more resources for which any of the specified issues are applicable.
     */
    resourceGroupsCount?: number | null;
    /**
     * Total count of resources returned by the filter for which any of the specified issues are applicable.
     */
    resourcesCount?: number | null;
  }
  /**
   * IssueStats holds stats for a particular signal category.
   */
  export interface Schema$IssueStats {
    /**
     * Optional. Delta counts and details of resources for which issue was raised or fixed.
     */
    deltaDetails?: Schema$DeltaDetails;
    /**
     * Severity of the issue.
     */
    issueSeverity?: string | null;
    /**
     * Number of resources having issues of a given type.
     */
    resourceCount?: number | null;
    /**
     * Type of signal which is an issue.
     */
    signalType?: string | null;
  }
  /**
   * Label is a key value pair applied to a resource.
   */
  export interface Schema$Label {
    /**
     * The key part of the label.
     */
    key?: string | null;
    /**
     * The source of the Label. Source is empty if the label is directly attached to the resource and not inherited.
     */
    source?: string | null;
    /**
     * The value part of the label.
     */
    value?: string | null;
  }
  /**
   * lineage information of the affiliated resources This captures source, target and process which created the lineage.
   */
  export interface Schema$Lineage {
    /**
     * Optional. FQN of process which created the lineage i.e. dataplex, datastream etc.
     */
    processFqn?: string | null;
    /**
     * Optional. Type of process which created the lineage.
     */
    processType?: string | null;
    /**
     * Optional. FQN of source table / column
     */
    sourceFqn?: string | null;
    /**
     * Optional. FQN of target table / column
     */
    targetFqn?: string | null;
  }
  /**
   * MachineConfig describes the configuration of a machine specific to a Database Resource.
   */
  export interface Schema$MachineConfig {
    /**
     * Optional. Baseline slots for BigQuery Reservations. Baseline slots are in increments of 50.
     */
    baselineSlotCount?: string | null;
    /**
     * Optional. Max slots for BigQuery Reservations. Max slots are in increments of 50.
     */
    maxReservationSlotCount?: string | null;
    /**
     * Memory size in bytes.
     */
    memorySizeBytes?: string | null;
    /**
     * Optional. The number of Shards (if applicable).
     */
    shardCount?: number | null;
    /**
     * Optional. The number of vCPUs (if applicable).
     */
    vcpuCount?: number | null;
  }
  /**
   * MaintenanceInfo to capture the maintenance details of database resource.
   */
  export interface Schema$MaintenanceInfo {
    /**
     * Output only. The date when the maintenance version was released.
     */
    currentVersionReleaseDate?: Schema$Date;
    /**
     * Optional. List of Deny maintenance period for the database resource.
     */
    denyMaintenanceSchedules?: Schema$ResourceMaintenanceDenySchedule[];
    /**
     * Optional. Maintenance window for the database resource.
     */
    maintenanceSchedule?: Schema$ResourceMaintenanceSchedule;
    /**
     * Output only. Current Maintenance version of the database resource. Example: "MYSQL_8_0_41.R20250531.01_15"
     */
    maintenanceVersion?: string | null;
    /**
     * Output only. List of possible reasons why the maintenance is not completed. This is an optional field and is only populated if there are any reasons for failures recorded for the maintenance by DB Center. FAILURE maintenance status may not always have a failure reason.
     */
    possibleFailureReasons?: string[] | null;
    /**
     * Output only. Previous maintenance version of the database resource. Example: "MYSQL_8_0_41.R20250531.01_15". This is available once a minor version maintenance is complete on a database resource.
     */
    previousMaintenanceVersion?: string | null;
    /**
     * Output only. Resource maintenance state. This is to capture the current state of the maintenance.
     */
    state?: string | null;
    /**
     * Output only. Upcoming maintenance window for the database resource. This is only populated for an engine, if upcoming maintenance is scheduled for the resource. This schedule is generated per engine and engine version, and there is only one upcoming maintenance window at any given time. In case of upcoming maintenance, the maintenance_state will be set to SCHEDULED first, and then IN_PROGRESS when the maintenance window starts.
     */
    upcomingMaintenance?: Schema$UpcomingMaintenance;
  }
  /**
   * Info associated with maintenance recommendation.
   */
  export interface Schema$MaintenanceRecommendationInfo {
    /**
     * Optional. List of recommended maintenance schedules for the database resource.
     */
    resourceMaintenanceSchedules?: Schema$ResourceMaintenanceSchedule[];
  }
  /**
   * MetricData represents the metric data for a database resource.
   */
  export interface Schema$MetricData {
    /**
     * The time the metric was observed in the metric source service.
     */
    observationTime?: string | null;
    /**
     * The value associated with the metric.
     */
    value?: Schema$TypedValue;
  }
  /**
   * Metrics represents the metrics for a database resource.
   */
  export interface Schema$Metrics {
    /**
     * Current memory used by the resource in bytes.
     */
    currentMemoryUsedBytes?: Schema$MetricData;
    /**
     * Current storage used by the resource in bytes.
     */
    currentStorageUsedBytes?: Schema$MetricData;
    /**
     * Number of nodes in instance for spanner or bigtable.
     */
    nodeCount?: Schema$MetricData;
    /**
     * P95 CPU utilization observed for the resource. The value is a fraction between 0.0 and 1.0 (may momentarily exceed 1.0 in some cases).
     */
    p95CpuUtilization?: Schema$MetricData;
    /**
     * P99 CPU utilization observed for the resource. The value is a fraction between 0.0 and 1.0 (may momentarily exceed 1.0 in some cases).
     */
    p99CpuUtilization?: Schema$MetricData;
    /**
     * Peak memory utilization observed for the resource. The value is a fraction between 0.0 and 1.0 (may momentarily exceed 1.0 in some cases).
     */
    peakMemoryUtilization?: Schema$MetricData;
    /**
     * Peak number of connections observed for the resource. The value is a positive integer.
     */
    peakNumberConnections?: Schema$MetricData;
    /**
     * Peak storage utilization observed for the resource. The value is a fraction between 0.0 and 1.0 (may momentarily exceed 1.0 in some cases).
     */
    peakStorageUtilization?: Schema$MetricData;
    /**
     * Number of processing units in spanner.
     */
    processingUnitCount?: Schema$MetricData;
  }
  /**
   * Info associated with outdated minor version.
   */
  export interface Schema$OutdatedMinorVersionInfo {
    /**
     * Recommended minor version of the underlying database engine. Example values: For MySQL, it could be "8.0.35", "5.7.25" etc. For PostgreSQL, it could be "14.4", "15.5" etc.
     */
    recommendedMinorVersion?: string | null;
  }
  /**
   * Product specification for databasecenter resources.
   */
  export interface Schema$Product {
    /**
     * Optional. The specific engine that the underlying database is running.
     */
    engine?: string | null;
    /**
     * Optional. Minor version of the underlying database engine. Example values: For MySQL, it could be "8.0.35", "5.7.25" etc. For PostgreSQL, it could be "14.4", "15.5" etc.
     */
    minorVersion?: string | null;
    /**
     * Optional. Type of specific database product. It could be CloudSQL, AlloyDB etc..
     */
    type?: string | null;
    /**
     * Optional. Version of the underlying database engine. Example values: For MySQL, it could be "8.0", "5.7" etc. For Postgres, it could be "14", "15" etc.
     */
    version?: string | null;
  }
  /**
   * QueryDatabaseResourceGroupsRequest is the request to get a list of database groups.
   */
  export interface Schema$QueryDatabaseResourceGroupsRequest {
    /**
     * Optional. The expression to filter resources. The following fields are filterable: * full_resource_name * resource_type * container * product.type * product.engine * product.version * location * labels * resource_category * machine_config.cpu_count * machine_config.memory_size_bytes * machine_config.shard_count * resource_name * tags * backupdr_config.backupdr_managed * edition The expression is a list of zero or more restrictions combined via logical operators `AND` and `OR`. When `AND` and `OR` are both used in the expression, parentheses must be appropriately used to group the combinations. Example: `location="us-east1"` Example: `container="projects/123" OR container="projects/456"` Example: `(container="projects/123" OR container="projects/456") AND location="us-east1"` Example: `full_resource_name=~"test"` Example: `full_resource_name=~"test.*master"`
     */
    filter?: string | null;
    /**
     * Optional. A field that specifies the sort order of the results. The following fields are sortable: * full_resource_name * product.type * product.engine * product.version * container * issue_count * machine_config.vcpu_count * machine_config.memory_size_bytes * machine_config.shard_count * resource_name * issue_severity * signal_type * location * resource_type * instance_type * edition * metrics.p99_cpu_utilization * metrics.p95_cpu_utilization * metrics.current_storage_used_bytes * metrics.node_count * metrics.processing_unit_count * metrics.current_memory_used_bytes * metrics.peak_storage_utilization * metrics.peak_number_connections * metrics.peak_memory_utilization The default order is ascending. Add "DESC" after the field name to indicate descending order. Add "ASC" after the field name to indicate ascending order. It only supports a single field at a time. For example: `order_by = "full_resource_name"` sorts response in ascending order `order_by = "full_resource_name DESC"` sorts response in descending order `order_by = "issue_count DESC"` sorts response in descending order of count of all issues associated with a resource. More explicitly, `order_by = "full_resource_name, product"` is not supported.
     */
    orderBy?: string | null;
    /**
     * Optional. If unspecified, at most 50 resource groups will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000.
     */
    pageSize?: number | null;
    /**
     * Optional. A page token, received from a previous `QueryDatabaseResourceGroupsRequest` call. Provide this to retrieve the subsequent page. All parameters except page_token should match the parameters in the call that provided the page page token.
     */
    pageToken?: string | null;
    /**
     * Required. Parent can be a project, a folder, or an organization. The search is limited to the resources within the `scope`. The allowed values are: * projects/{PROJECT_ID\} (e.g., "projects/foo-bar") * projects/{PROJECT_NUMBER\} (e.g., "projects/12345678") * folders/{FOLDER_NUMBER\} (e.g., "folders/1234567") * organizations/{ORGANIZATION_NUMBER\} (e.g., "organizations/123456")
     */
    parent?: string | null;
    /**
     * Optional. Filters based on signals. The list will be ORed together and then ANDed with the `filters` field above.
     */
    signalFilters?: Schema$SignalFilter[];
    /**
     * Optional. Filters based on signal and product. The filter list will be ORed across pairs and ANDed within a signal and products pair.
     */
    signalProductsFilters?: Schema$SignalProductsFilters[];
    /**
     * Optional. Groups of signal types that are requested.
     */
    signalTypeGroups?: Schema$SignalTypeGroup[];
  }
  /**
   * QueryDatabaseResourceGroupsResponse represents the response message containing a list of resource groups.
   */
  export interface Schema$QueryDatabaseResourceGroupsResponse {
    /**
     * A token that can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages.
     */
    nextPageToken?: string | null;
    /**
     * List of database resource groups that pass the filter.
     */
    resourceGroups?: Schema$DatabaseResourceGroup[];
    /**
     * Output only. The total number of resource groups in the entire list.
     */
    totalSize?: string | null;
    /**
     * Unordered list. List of unreachable regions from where data could not be retrieved.
     */
    unreachable?: string[] | null;
  }
  /**
   * QueryIssuesRequest is the request to get a list of issues.
   */
  export interface Schema$QueryIssuesRequest {
    /**
     * Optional. Supported fields are: 'product', `location`, `issue_severity`, 'tags', 'labels',
     */
    filter?: string | null;
    /**
     * Optional. Following fields are sortable: SignalType Product Location IssueSeverity The default order is ascending. Add "DESC" after the field name to indicate descending order. Add "ASC" after the field name to indicate ascending order. It only supports a single field at a time.
     */
    orderBy?: string | null;
    /**
     * Optional. If unspecified, at most 50 issues will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000.
     */
    pageSize?: number | null;
    /**
     * Optional. A page token, received from a previous `QueryIssues` call. Provide this to retrieve the subsequent page. All parameters except page size should match the parameters used in the call that provided the page token.
     */
    pageToken?: string | null;
    /**
     * Required. Parent can be a project, a folder, or an organization. The list is limited to the one attached to resources within the `scope` that a user has access to. The allowed values are: * projects/{PROJECT_ID\} (e.g., "projects/foo-bar") * projects/{PROJECT_NUMBER\} (e.g., "projects/12345678") * folders/{FOLDER_NUMBER\} (e.g., "folders/1234567") * organizations/{ORGANIZATION_NUMBER\} (e.g., "organizations/123456")
     */
    parent?: string | null;
    /**
     * Optional. Filters based on signal and product. The filter list will be ORed across pairs and ANDed within a signal and products pair.
     */
    signalProductsFilters?: Schema$SignalProductsFilters[];
  }
  /**
   * QueryIssuesResponse is the response containing a list of issues.
   */
  export interface Schema$QueryIssuesResponse {
    /**
     * A token that can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages.
     */
    nextPageToken?: string | null;
    /**
     * List of issues and resource details.
     */
    resourceIssues?: Schema$DatabaseResourceIssue[];
    /**
     * Unordered list. List of unreachable regions from where data could not be retrieved.
     */
    unreachable?: string[] | null;
  }
  /**
   * QueryMetrics contains the metrics related to the query execution.
   */
  export interface Schema$QueryMetrics {
    /**
     * The average execution period of the query across all runs.
     */
    avgCpuTime?: string | null;
    /**
     * The number of times the query was executed.
     */
    executionCount?: string | null;
    /**
     * The window over which the metrics are aggregated.
     */
    metricsWindow?: string | null;
    /**
     * The average number of rows processed by the query across all runs.
     */
    rowsProcessed?: string | null;
    /**
     * The total CPU time consumed by the query across all runs.
     */
    totalCpuTime?: string | null;
  }
  /**
   * QueryProductsResponse represents the response containing a list of products.
   */
  export interface Schema$QueryProductsResponse {
    /**
     * A token that can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages
     */
    nextPageToken?: string | null;
    /**
     * List of database products returned.
     */
    products?: Schema$Product[];
    /**
     * Unordered list. List of unreachable regions from where data could not be retrieved.
     */
    unreachable?: string[] | null;
  }
  /**
   * QueryStats contains the stats for a particular combination of query_hash, query_string and resource_type.
   */
  export interface Schema$QueryStats {
    /**
     * Information about inefficient query.
     */
    inefficientQueryInfo?: Schema$InefficientQueryInfo;
    /**
     * The query string is normalized query without any PII data.
     */
    normalizedQuery?: string | null;
    /**
     * The query hash of the query.
     */
    queryHash?: string | null;
    /**
     * Metrics related to the query performance.
     */
    queryMetrics?: Schema$QueryMetrics;
    /**
     * The resource ids for which the query stats are collected.
     */
    resourceIds?: Schema$ResourceId[];
    /**
     * The type of the resource. sqladmin.googleapis.com/Instance alloydb.googleapis.com/Cluster alloydb.googleapis.com/Instance
     */
    resourceType?: string | null;
  }
  /**
   * QueryStatsInfo contains the aggregated and detailed query stats for a particular combination of relevant query stats for queries having same normalized query.
   */
  export interface Schema$QueryStatsInfo {
    /**
     * Aggregated query stats for the resources for same normalized query.
     */
    aggregatedQueryStats?: Schema$QueryStats;
    /**
     * List of query stats for the resources in the group. This stats is stats at resource level for the resources having same normalized query.
     */
    queryStats?: Schema$QueryStats[];
  }
  /**
   * Info associated with recommendation.
   */
  export interface Schema$RecommendationInfo {
    /**
     * Name of recommendation. Examples: organizations/1234/locations/us-central1/recommenders/google.cloudsql.instance.PerformanceRecommender/recommendations/9876
     */
    recommender?: string | null;
    /**
     * ID of recommender. Examples: "google.cloudsql.instance.PerformanceRecommender"
     */
    recommenderId?: string | null;
    /**
     * Contains an identifier for a subtype of recommendations produced for the same recommender. Subtype is a function of content and impact, meaning a new subtype might be added when significant changes to `content` or `primary_impact.category` are introduced. See the Recommenders section to see a list of subtypes for a given Recommender. Examples: For recommender = "google.cloudsql.instance.PerformanceRecommender", recommender_subtype can be "MYSQL_HIGH_NUMBER_OF_OPEN_TABLES_BEST_PRACTICE"/"POSTGRES_HIGH_TRANSACTION_ID_UTILIZATION_BEST_PRACTICE"
     */
    recommenderSubtype?: string | null;
  }
  /**
   * Compliances associated with signals.
   */
  export interface Schema$RegulatoryStandard {
    /**
     * Name of industry compliance standards, such as such as CIS, PCI, and OWASP.
     */
    standard?: string | null;
    /**
     * Version of the standard or benchmark, for example, 1.1.
     */
    version?: string | null;
  }
  /**
   * Capture the resource details for resources that are included in the delta counts.
   */
  export interface Schema$ResourceDetails {
    /**
     * Specifies where the resource is created. For Google Cloud resources, it is the full name of the project.
     */
    container?: string | null;
    /**
     * Full resource name of the resource.
     */
    fullResourceName?: string | null;
    /**
     * Location of the resource.
     */
    location?: string | null;
    /**
     * Product type of the resource.
     */
    product?: Schema$Product;
  }
  /**
   * ResourceId contains the identifier for a database resource, including the full resource name, resource type, and product.
   */
  export interface Schema$ResourceId {
    /**
     * The full resource name of the resource.
     */
    fullResourceName?: string | null;
    /**
     * The product of the resource, including the type, engine, and version.
     */
    product?: Schema$Product;
    /**
     * The type of the resource. sqladmin.googleapis.com/Instance alloydb.googleapis.com/Cluster alloydb.googleapis.com/Instance
     */
    resourceType?: string | null;
  }
  /**
   * Deny maintenance period for the database resource. It specifies the time range during which the maintenance cannot start. This is configured by the customer.
   */
  export interface Schema$ResourceMaintenanceDenySchedule {
    /**
     * Optional. Deny period end date.
     */
    endDate?: Schema$Date;
    /**
     * Optional. The start date of the deny maintenance period.
     */
    startDate?: Schema$Date;
    /**
     * Optional. Time in UTC when the deny period starts on start_date and ends on end_date.
     */
    time?: Schema$TimeOfDay;
  }
  /**
   * Maintenance window for the database resource. It specifies preferred time and day of the week and phase in some cases, when the maintenance can start.
   */
  export interface Schema$ResourceMaintenanceSchedule {
    /**
     * Optional. Preferred day of the week for maintenance, e.g. MONDAY, TUESDAY, etc.
     */
    day?: string | null;
    /**
     * Optional. Phase of the maintenance window. This is to capture order of maintenance. For example, for Cloud SQL resources, this can be used to capture if the maintenance window is in Week1, Week2, Week5, etc. Non production resources are usually part of early phase. For more details, refer to Cloud SQL resources - https://cloud.google.com/sql/docs/mysql/maintenance
     */
    phase?: string | null;
    /**
     * Optional. Preferred time to start the maintenance operation on the specified day.
     */
    startTime?: Schema$TimeOfDay;
  }
  /**
   * Resource suspension info for a database resource.
   */
  export interface Schema$ResourceSuspensionInfo {
    /**
     * Is resource suspended.
     */
    resourceSuspended?: boolean | null;
    /**
     * Suspension reason for the resource.
     */
    suspensionReason?: string | null;
  }
  /**
   * Metadata about backup retention settings for a database resource.
   */
  export interface Schema$RetentionSettingsInfo {
    /**
     * Duration based retention period i.e. 172800 seconds (2 days)
     */
    durationBasedRetention?: string | null;
    /**
     * Number of backups that will be retained.
     */
    quantityBasedRetention?: number | null;
    /**
     * Optional. Sub resource details associated with the backup configuration.
     */
    subResource?: Schema$SubResource;
    /**
     * Timestamp based retention period i.e. till 2024-05-01T00:00:00Z
     */
    timestampBasedRetentionTime?: string | null;
  }
  /**
   * Info associated with SCC signals.
   */
  export interface Schema$SCCInfo {
    /**
     * Name by which SCC calls this signal.
     */
    category?: string | null;
    /**
     * External URI which points to a SCC page associated with the signal.
     */
    externalUri?: string | null;
    /**
     * Compliances that are associated with the signal.
     */
    regulatoryStandards?: Schema$RegulatoryStandard[];
    /**
     * Name of the signal.
     */
    signal?: string | null;
  }
  /**
   * Represents a signal.
   */
  export interface Schema$Signal {
    /**
     * Additional information related to the signal. In the case of composite signals, this field encapsulates details associated with granular signals, having a signal status of "ISSUE"; signals with a status of "OK" are not included. For granular signals, it encompasses information relevant to the signal, regardless of the signal status.
     */
    additionalDetails?: Schema$AdditionalDetail[];
    /**
     * Timestamp when the issue was created (when signal status is ISSUE).
     */
    issueCreateTime?: string | null;
    /**
     * Severity of the issue.
     */
    issueSeverity?: string | null;
    /**
     * Status of the signal.
     */
    signalStatus?: string | null;
    /**
     * Type of the signal.
     */
    signalType?: string | null;
  }
  /**
   * A filter for Signals. If signal_type is left unset, all signals should be returned. For example, the following filter returns all issues. signal_filter: { signal_status: SIGNAL_STATUS_ISSUE; \} Another example, the following filter returns issues of the given type: signal_filter: { type: SIGNAL_TYPE_NO_PROMOTABLE_REPLICA signal_status: ISSUE \} If signal_status is left unset or set to SIGNAL_STATE_UNSPECIFIED, an error should be returned.
   */
  export interface Schema$SignalFilter {
    /**
     * Optional. Represents the status of the Signal for which the filter is for.
     */
    signalStatus?: string | null;
    /**
     * Optional. Represents the type of the Signal for which the filter is for.
     */
    signalType?: string | null;
  }
  /**
   * A group of signals and their counts.
   */
  export interface Schema$SignalGroup {
    /**
     * Title of a signal group corresponding to the request.
     */
    displayName?: string | null;
    /**
     * When applied to a DatabaseResource represents count of issues associated with the resource. A signal is an issue when its SignalStatus field is set to SIGNAL_STATUS_ISSUE.
     */
    issueCount?: number | null;
    /**
     * List of signals present in the group and associated with the resource. Only applies to a DatabaseResource.
     */
    signals?: Schema$Signal[];
  }
  /**
   * SignalProductsFilters represents a signal and list of supported products.
   */
  export interface Schema$SignalProductsFilters {
    /**
     * Optional. Product type of the resource. The version of the product will be ignored in filtering.
     */
    products?: Schema$Product[];
    /**
     * Optional. The type of signal.
     */
    signalType?: string | null;
  }
  /**
   * A group of signal types that specifies what the user is interested in. Used by QueryDatabaseResourceGroups API. Example: signal_type_group { name = "AVAILABILITY" types = [SIGNAL_TYPE_NO_PROMOTABLE_REPLICA] \}
   */
  export interface Schema$SignalTypeGroup {
    /**
     * Required. The display name of a signal group.
     */
    displayName?: string | null;
    /**
     * Optional. List of signal types present in the group.
     */
    signalTypes?: string[] | null;
  }
  /**
   * Sub resource details For Spanner/Bigtable instance certain data protection settings are at sub resource level like database/table. This message is used to capture such sub resource details.
   */
  export interface Schema$SubResource {
    /**
     * Specifies where the resource is created. For Google Cloud resources, it is the full name of the project.
     */
    container?: string | null;
    /**
     * Optional. Resource name associated with the sub resource where backup settings are configured. E.g."//spanner.googleapis.com/projects/project1/instances/inst1/databases/db1" for Spanner where backup retention is configured on database within an instance OPTIONAL
     */
    fullResourceName?: string | null;
    /**
     * Optional. Product information associated with the sub resource where backup retention settings are configured. e.g. ``` product: { type : PRODUCT_TYPE_SPANNER engine : ENGINE_CLOUD_SPANNER_WITH_POSTGRES_DIALECT \} ``` for Spanner where backup is configured on database within an instance OPTIONAL
     */
    product?: Schema$Product;
    /**
     * Optional. Resource type associated with the sub resource where backup settings are configured. E.g. "spanner.googleapis.com/Database" for Spanner where backup retention is configured on database within an instance OPTIONAL
     */
    resourceType?: string | null;
  }
  /**
   * Tag is a key value pair attached to a resource.
   */
  export interface Schema$Tag {
    /**
     * Indicates the inheritance status of a tag value attached to the given resource. If the tag value is inherited from one of the resource's ancestors, inherited will be true. If false, then the tag value is directly attached to the resource.
     */
    inherited?: boolean | null;
    key?: string | null;
    /**
     * The source of the tag. According to https://cloud.google.com/resource-manager/docs/tags/tags-overview#tags_and_labels, tags can be created only at the project or organization level. Tags can be inherited from different project as well not just the current project where the database resource is present. Format: "projects/{PROJECT_ID\}", "projects/{PROJECT_NUMBER\}", "organizations/{ORGANIZATION_ID\}"
     */
    source?: string | null;
    /**
     * The value part of the tag.
     */
    value?: string | null;
  }
  /**
   * Represents a time of day. The date and time zone are either not significant or are specified elsewhere. An API may choose to allow leap seconds. Related types are google.type.Date and `google.protobuf.Timestamp`.
   */
  export interface Schema$TimeOfDay {
    /**
     * Hours of a day in 24 hour format. Must be greater than or equal to 0 and typically must be less than or equal to 23. An API may choose to allow the value "24:00:00" for scenarios like business closing time.
     */
    hours?: number | null;
    /**
     * Minutes of an hour. Must be greater than or equal to 0 and less than or equal to 59.
     */
    minutes?: number | null;
    /**
     * Fractions of seconds, in nanoseconds. Must be greater than or equal to 0 and less than or equal to 999,999,999.
     */
    nanos?: number | null;
    /**
     * Seconds of a minute. Must be greater than or equal to 0 and typically must be less than or equal to 59. An API may allow the value 60 if it allows leap-seconds.
     */
    seconds?: number | null;
  }
  /**
   * TypedValue represents the value of the metric based on data type.
   */
  export interface Schema$TypedValue {
    /**
     * The value of the metric as double.
     */
    doubleValue?: number | null;
    /**
     * The value of the metric as int.
     */
    int64Value?: string | null;
  }
  /**
   * Upcoming maintenance window for the database resource.
   */
  export interface Schema$UpcomingMaintenance {
    /**
     * Output only. End time of the upcoming maintenance. This is only populated for an engine, if end time is public for the engine.
     */
    endTime?: string | null;
    /**
     * Output only. Start time of the upcoming maintenance. Start time is always populated when an upcoming maintenance is scheduled.
     */
    startTime?: string | null;
  }

  export class Resource$Folders {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * AggregateQueryStats provides database resource query execution statistics.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/databasecenter.googleapis.com
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
     * const databasecenter = google.databasecenter('v1beta');
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
     *   const res = await databasecenter.folders.aggregateQueryStats({
     *     // Required. Parent can be a project, a folder, or an organization. The search is limited to the resources within the `parent`. The allowed values are: * projects/{PROJECT_ID\} (e.g., "projects/foo-bar") * projects/{PROJECT_NUMBER\} (e.g., "projects/12345678") * folders/{FOLDER_NUMBER\} (e.g., "folders/1234567") * organizations/{ORGANIZATION_NUMBER\} (e.g., "organizations/123456")
     *     parent: 'folders/my-folder',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "filter": "my_filter",
     *       //   "orderBy": "my_orderBy",
     *       //   "pageSize": 0,
     *       //   "pageToken": "my_pageToken"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "nextPageToken": "my_nextPageToken",
     *   //   "queryStats": [],
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
    aggregateQueryStats(
      params: Params$Resource$Folders$Aggregatequerystats,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    aggregateQueryStats(
      params?: Params$Resource$Folders$Aggregatequerystats,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$AggregateQueryStatsResponse>>;
    aggregateQueryStats(
      params: Params$Resource$Folders$Aggregatequerystats,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    aggregateQueryStats(
      params: Params$Resource$Folders$Aggregatequerystats,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$AggregateQueryStatsResponse>,
      callback: BodyResponseCallback<Schema$AggregateQueryStatsResponse>
    ): void;
    aggregateQueryStats(
      params: Params$Resource$Folders$Aggregatequerystats,
      callback: BodyResponseCallback<Schema$AggregateQueryStatsResponse>
    ): void;
    aggregateQueryStats(
      callback: BodyResponseCallback<Schema$AggregateQueryStatsResponse>
    ): void;
    aggregateQueryStats(
      paramsOrCallback?:
        | Params$Resource$Folders$Aggregatequerystats
        | BodyResponseCallback<Schema$AggregateQueryStatsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$AggregateQueryStatsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$AggregateQueryStatsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$AggregateQueryStatsResponse>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Folders$Aggregatequerystats;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Folders$Aggregatequerystats;
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
        options.rootUrl || 'https://databasecenter.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta/{+parent}:aggregateQueryStats')
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
        createAPIRequest<Schema$AggregateQueryStatsResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$AggregateQueryStatsResponse>(parameters);
      }
    }
  }

  export interface Params$Resource$Folders$Aggregatequerystats extends StandardParameters {
    /**
     * Required. Parent can be a project, a folder, or an organization. The search is limited to the resources within the `parent`. The allowed values are: * projects/{PROJECT_ID\} (e.g., "projects/foo-bar") * projects/{PROJECT_NUMBER\} (e.g., "projects/12345678") * folders/{FOLDER_NUMBER\} (e.g., "folders/1234567") * organizations/{ORGANIZATION_NUMBER\} (e.g., "organizations/123456")
     */
    parent?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$AggregateQueryStatsRequest;
  }

  export class Resource$Organizations {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * AggregateQueryStats provides database resource query execution statistics.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/databasecenter.googleapis.com
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
     * const databasecenter = google.databasecenter('v1beta');
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
     *   const res = await databasecenter.organizations.aggregateQueryStats({
     *     // Required. Parent can be a project, a folder, or an organization. The search is limited to the resources within the `parent`. The allowed values are: * projects/{PROJECT_ID\} (e.g., "projects/foo-bar") * projects/{PROJECT_NUMBER\} (e.g., "projects/12345678") * folders/{FOLDER_NUMBER\} (e.g., "folders/1234567") * organizations/{ORGANIZATION_NUMBER\} (e.g., "organizations/123456")
     *     parent: 'organizations/my-organization',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "filter": "my_filter",
     *       //   "orderBy": "my_orderBy",
     *       //   "pageSize": 0,
     *       //   "pageToken": "my_pageToken"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "nextPageToken": "my_nextPageToken",
     *   //   "queryStats": [],
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
    aggregateQueryStats(
      params: Params$Resource$Organizations$Aggregatequerystats,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    aggregateQueryStats(
      params?: Params$Resource$Organizations$Aggregatequerystats,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$AggregateQueryStatsResponse>>;
    aggregateQueryStats(
      params: Params$Resource$Organizations$Aggregatequerystats,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    aggregateQueryStats(
      params: Params$Resource$Organizations$Aggregatequerystats,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$AggregateQueryStatsResponse>,
      callback: BodyResponseCallback<Schema$AggregateQueryStatsResponse>
    ): void;
    aggregateQueryStats(
      params: Params$Resource$Organizations$Aggregatequerystats,
      callback: BodyResponseCallback<Schema$AggregateQueryStatsResponse>
    ): void;
    aggregateQueryStats(
      callback: BodyResponseCallback<Schema$AggregateQueryStatsResponse>
    ): void;
    aggregateQueryStats(
      paramsOrCallback?:
        | Params$Resource$Organizations$Aggregatequerystats
        | BodyResponseCallback<Schema$AggregateQueryStatsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$AggregateQueryStatsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$AggregateQueryStatsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$AggregateQueryStatsResponse>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Organizations$Aggregatequerystats;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Organizations$Aggregatequerystats;
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
        options.rootUrl || 'https://databasecenter.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta/{+parent}:aggregateQueryStats')
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
        createAPIRequest<Schema$AggregateQueryStatsResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$AggregateQueryStatsResponse>(parameters);
      }
    }
  }

  export interface Params$Resource$Organizations$Aggregatequerystats extends StandardParameters {
    /**
     * Required. Parent can be a project, a folder, or an organization. The search is limited to the resources within the `parent`. The allowed values are: * projects/{PROJECT_ID\} (e.g., "projects/foo-bar") * projects/{PROJECT_NUMBER\} (e.g., "projects/12345678") * folders/{FOLDER_NUMBER\} (e.g., "folders/1234567") * organizations/{ORGANIZATION_NUMBER\} (e.g., "organizations/123456")
     */
    parent?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$AggregateQueryStatsRequest;
  }

  export class Resource$Projects {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * AggregateQueryStats provides database resource query execution statistics.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/databasecenter.googleapis.com
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
     * const databasecenter = google.databasecenter('v1beta');
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
     *   const res = await databasecenter.projects.aggregateQueryStats({
     *     // Required. Parent can be a project, a folder, or an organization. The search is limited to the resources within the `parent`. The allowed values are: * projects/{PROJECT_ID\} (e.g., "projects/foo-bar") * projects/{PROJECT_NUMBER\} (e.g., "projects/12345678") * folders/{FOLDER_NUMBER\} (e.g., "folders/1234567") * organizations/{ORGANIZATION_NUMBER\} (e.g., "organizations/123456")
     *     parent: 'projects/my-project',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "filter": "my_filter",
     *       //   "orderBy": "my_orderBy",
     *       //   "pageSize": 0,
     *       //   "pageToken": "my_pageToken"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "nextPageToken": "my_nextPageToken",
     *   //   "queryStats": [],
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
    aggregateQueryStats(
      params: Params$Resource$Projects$Aggregatequerystats,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    aggregateQueryStats(
      params?: Params$Resource$Projects$Aggregatequerystats,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$AggregateQueryStatsResponse>>;
    aggregateQueryStats(
      params: Params$Resource$Projects$Aggregatequerystats,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    aggregateQueryStats(
      params: Params$Resource$Projects$Aggregatequerystats,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$AggregateQueryStatsResponse>,
      callback: BodyResponseCallback<Schema$AggregateQueryStatsResponse>
    ): void;
    aggregateQueryStats(
      params: Params$Resource$Projects$Aggregatequerystats,
      callback: BodyResponseCallback<Schema$AggregateQueryStatsResponse>
    ): void;
    aggregateQueryStats(
      callback: BodyResponseCallback<Schema$AggregateQueryStatsResponse>
    ): void;
    aggregateQueryStats(
      paramsOrCallback?:
        | Params$Resource$Projects$Aggregatequerystats
        | BodyResponseCallback<Schema$AggregateQueryStatsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$AggregateQueryStatsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$AggregateQueryStatsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$AggregateQueryStatsResponse>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Aggregatequerystats;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Aggregatequerystats;
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
        options.rootUrl || 'https://databasecenter.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta/{+parent}:aggregateQueryStats')
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
        createAPIRequest<Schema$AggregateQueryStatsResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$AggregateQueryStatsResponse>(parameters);
      }
    }
  }

  export interface Params$Resource$Projects$Aggregatequerystats extends StandardParameters {
    /**
     * Required. Parent can be a project, a folder, or an organization. The search is limited to the resources within the `parent`. The allowed values are: * projects/{PROJECT_ID\} (e.g., "projects/foo-bar") * projects/{PROJECT_NUMBER\} (e.g., "projects/12345678") * folders/{FOLDER_NUMBER\} (e.g., "folders/1234567") * organizations/{ORGANIZATION_NUMBER\} (e.g., "organizations/123456")
     */
    parent?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$AggregateQueryStatsRequest;
  }

  export class Resource$V1beta {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * AggregateFleet provides statistics about the fleet grouped by various fields.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/databasecenter.googleapis.com
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
     * const databasecenter = google.databasecenter('v1beta');
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
     *   const res = await databasecenter.aggregateFleet({
     *     // Day of a month. Must be from 1 to 31 and valid for the year and month, or 0 to specify a year by itself or a year and month where the day isn't significant.
     *     'baselineDate.day': 'placeholder-value',
     *     // Month of a year. Must be from 1 to 12, or 0 to specify a year without a month and day.
     *     'baselineDate.month': 'placeholder-value',
     *     // Year of the date. Must be from 1 to 9999, or 0 to specify a date without a year.
     *     'baselineDate.year': 'placeholder-value',
     *     // Optional. The expression to filter resources. Supported fields are: `full_resource_name`, `resource_type`, `container`, `product.type`, `product.engine`, `product.version`, `location`, `labels`, `issues`, fields of availability_info, data_protection_info, 'resource_name', etc. The expression is a list of zero or more restrictions combined via logical operators `AND` and `OR`. When `AND` and `OR` are both used in the expression, parentheses must be appropriately used to group the combinations. Example: `location="us-east1"` Example: `container="projects/123" OR container="projects/456"` Example: `(container="projects/123" OR container="projects/456") AND location="us-east1"`
     *     filter: 'placeholder-value',
     *     // Optional. A field that statistics are grouped by. Valid values are any combination of the following: * container * product.type * product.engine * product.version * location * sub_resource_type * management_type * tag.key * tag.value * tag.source * tag.inherited * label.key * label.value * label.source * has_maintenance_schedule * has_deny_maintenance_schedules Comma separated list.
     *     groupBy: 'placeholder-value',
     *     // Optional. Valid values to order by are: * resource_groups_count * resources_count * and all fields supported by `group_by` The default order is ascending. Add "DESC" after the field name to indicate descending order. Add "ASC" after the field name to indicate ascending order. It supports ordering using multiple fields. For example: `order_by = "resource_groups_count"` sorts response in ascending order `order_by = "resource_groups_count DESC"` sorts response in descending order `order_by = "product.type, product.version DESC, location"` orders by type in ascending order, version in descending order and location in ascending order
     *     orderBy: 'placeholder-value',
     *     // Optional. If unspecified, at most 50 items will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000.
     *     pageSize: 'placeholder-value',
     *     // Optional. A page token, received from a previous `AggregateFleet` call. Provide this to retrieve the subsequent page. All other parameters should match the parameters in the call that provided the page token except for page_size which can be different.
     *     pageToken: 'placeholder-value',
     *     // Required. Parent can be a project, a folder, or an organization. The search is limited to the resources within the `scope`. The allowed values are: * projects/{PROJECT_ID\} (e.g., "projects/foo-bar") * projects/{PROJECT_NUMBER\} (e.g., "projects/12345678") * folders/{FOLDER_NUMBER\} (e.g., "folders/1234567") * organizations/{ORGANIZATION_NUMBER\} (e.g., "organizations/123456")
     *     parent: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "nextPageToken": "my_nextPageToken",
     *   //   "resourceGroupsTotalCount": 0,
     *   //   "resourceTotalCount": 0,
     *   //   "rows": [],
     *   //   "totalSize": "my_totalSize",
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
    aggregateFleet(
      params: Params$Resource$V1beta$Aggregatefleet,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    aggregateFleet(
      params?: Params$Resource$V1beta$Aggregatefleet,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$AggregateFleetResponse>>;
    aggregateFleet(
      params: Params$Resource$V1beta$Aggregatefleet,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    aggregateFleet(
      params: Params$Resource$V1beta$Aggregatefleet,
      options:
        MethodOptions | BodyResponseCallback<Schema$AggregateFleetResponse>,
      callback: BodyResponseCallback<Schema$AggregateFleetResponse>
    ): void;
    aggregateFleet(
      params: Params$Resource$V1beta$Aggregatefleet,
      callback: BodyResponseCallback<Schema$AggregateFleetResponse>
    ): void;
    aggregateFleet(
      callback: BodyResponseCallback<Schema$AggregateFleetResponse>
    ): void;
    aggregateFleet(
      paramsOrCallback?:
        | Params$Resource$V1beta$Aggregatefleet
        | BodyResponseCallback<Schema$AggregateFleetResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$AggregateFleetResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$AggregateFleetResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$AggregateFleetResponse>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$V1beta$Aggregatefleet;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$V1beta$Aggregatefleet;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://databasecenter.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta:aggregateFleet')
              .replace(/([^:]\/)\/+/g, '$1')
              .replace(/\{([^+:][^}]*)\}/g, '{+$1}'),
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
        createAPIRequest<Schema$AggregateFleetResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$AggregateFleetResponse>(parameters);
      }
    }

    /**
     * AggregateIssueStats provides database resource issues statistics.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/databasecenter.googleapis.com
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
     * const databasecenter = google.databasecenter('v1beta');
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
     *   const res = await databasecenter.aggregateIssueStats({
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "baselineDate": {},
     *       //   "filter": "my_filter",
     *       //   "parent": "my_parent",
     *       //   "signalTypeGroups": []
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "issueGroupStats": [],
     *   //   "totalResourceGroupsCount": 0,
     *   //   "totalResourcesCount": 0,
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
    aggregateIssueStats(
      params: Params$Resource$V1beta$Aggregateissuestats,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    aggregateIssueStats(
      params?: Params$Resource$V1beta$Aggregateissuestats,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$AggregateIssueStatsResponse>>;
    aggregateIssueStats(
      params: Params$Resource$V1beta$Aggregateissuestats,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    aggregateIssueStats(
      params: Params$Resource$V1beta$Aggregateissuestats,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$AggregateIssueStatsResponse>,
      callback: BodyResponseCallback<Schema$AggregateIssueStatsResponse>
    ): void;
    aggregateIssueStats(
      params: Params$Resource$V1beta$Aggregateissuestats,
      callback: BodyResponseCallback<Schema$AggregateIssueStatsResponse>
    ): void;
    aggregateIssueStats(
      callback: BodyResponseCallback<Schema$AggregateIssueStatsResponse>
    ): void;
    aggregateIssueStats(
      paramsOrCallback?:
        | Params$Resource$V1beta$Aggregateissuestats
        | BodyResponseCallback<Schema$AggregateIssueStatsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$AggregateIssueStatsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$AggregateIssueStatsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$AggregateIssueStatsResponse>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$V1beta$Aggregateissuestats;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$V1beta$Aggregateissuestats;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://databasecenter.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta:aggregateIssueStats')
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
        createAPIRequest<Schema$AggregateIssueStatsResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$AggregateIssueStatsResponse>(parameters);
      }
    }

    /**
     * QueryDatabaseResourceGroups returns paginated results of database groups.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/databasecenter.googleapis.com
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
     * const databasecenter = google.databasecenter('v1beta');
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
     *   const res = await databasecenter.queryDatabaseResourceGroups({
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "filter": "my_filter",
     *       //   "orderBy": "my_orderBy",
     *       //   "pageSize": 0,
     *       //   "pageToken": "my_pageToken",
     *       //   "parent": "my_parent",
     *       //   "signalFilters": [],
     *       //   "signalProductsFilters": [],
     *       //   "signalTypeGroups": []
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "nextPageToken": "my_nextPageToken",
     *   //   "resourceGroups": [],
     *   //   "totalSize": "my_totalSize",
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
    queryDatabaseResourceGroups(
      params: Params$Resource$V1beta$Querydatabaseresourcegroups,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    queryDatabaseResourceGroups(
      params?: Params$Resource$V1beta$Querydatabaseresourcegroups,
      options?: MethodOptions
    ): Promise<
      GaxiosResponseWithHTTP2<Schema$QueryDatabaseResourceGroupsResponse>
    >;
    queryDatabaseResourceGroups(
      params: Params$Resource$V1beta$Querydatabaseresourcegroups,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    queryDatabaseResourceGroups(
      params: Params$Resource$V1beta$Querydatabaseresourcegroups,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$QueryDatabaseResourceGroupsResponse>,
      callback: BodyResponseCallback<Schema$QueryDatabaseResourceGroupsResponse>
    ): void;
    queryDatabaseResourceGroups(
      params: Params$Resource$V1beta$Querydatabaseresourcegroups,
      callback: BodyResponseCallback<Schema$QueryDatabaseResourceGroupsResponse>
    ): void;
    queryDatabaseResourceGroups(
      callback: BodyResponseCallback<Schema$QueryDatabaseResourceGroupsResponse>
    ): void;
    queryDatabaseResourceGroups(
      paramsOrCallback?:
        | Params$Resource$V1beta$Querydatabaseresourcegroups
        | BodyResponseCallback<Schema$QueryDatabaseResourceGroupsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$QueryDatabaseResourceGroupsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$QueryDatabaseResourceGroupsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<
          GaxiosResponseWithHTTP2<Schema$QueryDatabaseResourceGroupsResponse>
        >
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$V1beta$Querydatabaseresourcegroups;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$V1beta$Querydatabaseresourcegroups;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://databasecenter.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta:queryDatabaseResourceGroups')
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
        createAPIRequest<Schema$QueryDatabaseResourceGroupsResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$QueryDatabaseResourceGroupsResponse>(
          parameters
        );
      }
    }

    /**
     * QueryIssues provides a list of issues and recommendations that a user has access to and that are within the requested scope.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/databasecenter.googleapis.com
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
     * const databasecenter = google.databasecenter('v1beta');
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
     *   const res = await databasecenter.queryIssues({
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "filter": "my_filter",
     *       //   "orderBy": "my_orderBy",
     *       //   "pageSize": 0,
     *       //   "pageToken": "my_pageToken",
     *       //   "parent": "my_parent",
     *       //   "signalProductsFilters": []
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "nextPageToken": "my_nextPageToken",
     *   //   "resourceIssues": [],
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
    queryIssues(
      params: Params$Resource$V1beta$Queryissues,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    queryIssues(
      params?: Params$Resource$V1beta$Queryissues,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$QueryIssuesResponse>>;
    queryIssues(
      params: Params$Resource$V1beta$Queryissues,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    queryIssues(
      params: Params$Resource$V1beta$Queryissues,
      options: MethodOptions | BodyResponseCallback<Schema$QueryIssuesResponse>,
      callback: BodyResponseCallback<Schema$QueryIssuesResponse>
    ): void;
    queryIssues(
      params: Params$Resource$V1beta$Queryissues,
      callback: BodyResponseCallback<Schema$QueryIssuesResponse>
    ): void;
    queryIssues(
      callback: BodyResponseCallback<Schema$QueryIssuesResponse>
    ): void;
    queryIssues(
      paramsOrCallback?:
        | Params$Resource$V1beta$Queryissues
        | BodyResponseCallback<Schema$QueryIssuesResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$QueryIssuesResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$QueryIssuesResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$QueryIssuesResponse>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$V1beta$Queryissues;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$V1beta$Queryissues;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://databasecenter.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta:queryIssues')
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
        createAPIRequest<Schema$QueryIssuesResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$QueryIssuesResponse>(parameters);
      }
    }

    /**
     * QueryProducts provides a list of all possible products which can be used to filter database resources.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/databasecenter.googleapis.com
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
     * const databasecenter = google.databasecenter('v1beta');
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
     *   const res = await databasecenter.queryProducts({
     *     // Optional. If unspecified, at most 50 products will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000.
     *     pageSize: 'placeholder-value',
     *     // Optional. A page token, received from a previous `ListLocations` call. Provide this to retrieve the subsequent page. All other parameters except page size should match the call that provided the page page token.
     *     pageToken: 'placeholder-value',
     *     // Required. Parent can be a project, a folder, or an organization. The allowed values are: * projects/{PROJECT_ID\}/locations/{LOCATION\} (e.g.,"projects/foo-bar/locations/us-central1") * projects/{PROJECT_NUMBER\}/locations/{LOCATION\} (e.g.,"projects/12345678/locations/us-central1") * folders/{FOLDER_NUMBER\}/locations/{LOCATION\} (e.g.,"folders/1234567/locations/us-central1") * organizations/{ORGANIZATION_NUMBER\}/locations/{LOCATION\} (e.g.,"organizations/123456/locations/us-central1") * projects/{PROJECT_ID\} (e.g., "projects/foo-bar") * projects/{PROJECT_NUMBER\} (e.g., "projects/12345678") * folders/{FOLDER_NUMBER\} (e.g., "folders/1234567") * organizations/{ORGANIZATION_NUMBER\} (e.g., "organizations/123456")
     *     parent: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "nextPageToken": "my_nextPageToken",
     *   //   "products": [],
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
    queryProducts(
      params: Params$Resource$V1beta$Queryproducts,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    queryProducts(
      params?: Params$Resource$V1beta$Queryproducts,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$QueryProductsResponse>>;
    queryProducts(
      params: Params$Resource$V1beta$Queryproducts,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    queryProducts(
      params: Params$Resource$V1beta$Queryproducts,
      options:
        MethodOptions | BodyResponseCallback<Schema$QueryProductsResponse>,
      callback: BodyResponseCallback<Schema$QueryProductsResponse>
    ): void;
    queryProducts(
      params: Params$Resource$V1beta$Queryproducts,
      callback: BodyResponseCallback<Schema$QueryProductsResponse>
    ): void;
    queryProducts(
      callback: BodyResponseCallback<Schema$QueryProductsResponse>
    ): void;
    queryProducts(
      paramsOrCallback?:
        | Params$Resource$V1beta$Queryproducts
        | BodyResponseCallback<Schema$QueryProductsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$QueryProductsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$QueryProductsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$QueryProductsResponse>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$V1beta$Queryproducts;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$V1beta$Queryproducts;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://databasecenter.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta:queryProducts')
              .replace(/([^:]\/)\/+/g, '$1')
              .replace(/\{([^+:][^}]*)\}/g, '{+$1}'),
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
        createAPIRequest<Schema$QueryProductsResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$QueryProductsResponse>(parameters);
      }
    }
  }

  export interface Params$Resource$V1beta$Aggregatefleet extends StandardParameters {
    /**
     * Day of a month. Must be from 1 to 31 and valid for the year and month, or 0 to specify a year by itself or a year and month where the day isn't significant.
     */
    'baselineDate.day'?: number;
    /**
     * Month of a year. Must be from 1 to 12, or 0 to specify a year without a month and day.
     */
    'baselineDate.month'?: number;
    /**
     * Year of the date. Must be from 1 to 9999, or 0 to specify a date without a year.
     */
    'baselineDate.year'?: number;
    /**
     * Optional. The expression to filter resources. Supported fields are: `full_resource_name`, `resource_type`, `container`, `product.type`, `product.engine`, `product.version`, `location`, `labels`, `issues`, fields of availability_info, data_protection_info, 'resource_name', etc. The expression is a list of zero or more restrictions combined via logical operators `AND` and `OR`. When `AND` and `OR` are both used in the expression, parentheses must be appropriately used to group the combinations. Example: `location="us-east1"` Example: `container="projects/123" OR container="projects/456"` Example: `(container="projects/123" OR container="projects/456") AND location="us-east1"`
     */
    filter?: string;
    /**
     * Optional. A field that statistics are grouped by. Valid values are any combination of the following: * container * product.type * product.engine * product.version * location * sub_resource_type * management_type * tag.key * tag.value * tag.source * tag.inherited * label.key * label.value * label.source * has_maintenance_schedule * has_deny_maintenance_schedules Comma separated list.
     */
    groupBy?: string;
    /**
     * Optional. Valid values to order by are: * resource_groups_count * resources_count * and all fields supported by `group_by` The default order is ascending. Add "DESC" after the field name to indicate descending order. Add "ASC" after the field name to indicate ascending order. It supports ordering using multiple fields. For example: `order_by = "resource_groups_count"` sorts response in ascending order `order_by = "resource_groups_count DESC"` sorts response in descending order `order_by = "product.type, product.version DESC, location"` orders by type in ascending order, version in descending order and location in ascending order
     */
    orderBy?: string;
    /**
     * Optional. If unspecified, at most 50 items will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000.
     */
    pageSize?: number;
    /**
     * Optional. A page token, received from a previous `AggregateFleet` call. Provide this to retrieve the subsequent page. All other parameters should match the parameters in the call that provided the page token except for page_size which can be different.
     */
    pageToken?: string;
    /**
     * Required. Parent can be a project, a folder, or an organization. The search is limited to the resources within the `scope`. The allowed values are: * projects/{PROJECT_ID\} (e.g., "projects/foo-bar") * projects/{PROJECT_NUMBER\} (e.g., "projects/12345678") * folders/{FOLDER_NUMBER\} (e.g., "folders/1234567") * organizations/{ORGANIZATION_NUMBER\} (e.g., "organizations/123456")
     */
    parent?: string;
  }
  export interface Params$Resource$V1beta$Aggregateissuestats extends StandardParameters {
    /**
     * Request body metadata
     */
    requestBody?: Schema$AggregateIssueStatsRequest;
  }
  export interface Params$Resource$V1beta$Querydatabaseresourcegroups extends StandardParameters {
    /**
     * Request body metadata
     */
    requestBody?: Schema$QueryDatabaseResourceGroupsRequest;
  }
  export interface Params$Resource$V1beta$Queryissues extends StandardParameters {
    /**
     * Request body metadata
     */
    requestBody?: Schema$QueryIssuesRequest;
  }
  export interface Params$Resource$V1beta$Queryproducts extends StandardParameters {
    /**
     * Optional. If unspecified, at most 50 products will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000.
     */
    pageSize?: number;
    /**
     * Optional. A page token, received from a previous `ListLocations` call. Provide this to retrieve the subsequent page. All other parameters except page size should match the call that provided the page page token.
     */
    pageToken?: string;
    /**
     * Required. Parent can be a project, a folder, or an organization. The allowed values are: * projects/{PROJECT_ID\}/locations/{LOCATION\} (e.g.,"projects/foo-bar/locations/us-central1") * projects/{PROJECT_NUMBER\}/locations/{LOCATION\} (e.g.,"projects/12345678/locations/us-central1") * folders/{FOLDER_NUMBER\}/locations/{LOCATION\} (e.g.,"folders/1234567/locations/us-central1") * organizations/{ORGANIZATION_NUMBER\}/locations/{LOCATION\} (e.g.,"organizations/123456/locations/us-central1") * projects/{PROJECT_ID\} (e.g., "projects/foo-bar") * projects/{PROJECT_NUMBER\} (e.g., "projects/12345678") * folders/{FOLDER_NUMBER\} (e.g., "folders/1234567") * organizations/{ORGANIZATION_NUMBER\} (e.g., "organizations/123456")
     */
    parent?: string;
  }
}
