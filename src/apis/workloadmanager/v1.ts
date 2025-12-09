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

export namespace workloadmanager_v1 {
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
   * Workload Manager API
   *
   * Workload Manager is a service that provides tooling for enterprise workloads to automate the deployment and validation of your workloads against best practices and recommendations.
   *
   * @example
   * ```js
   * const {google} = require('googleapis');
   * const workloadmanager = google.workloadmanager('v1');
   * ```
   */
  export class Workloadmanager {
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
   * * An AgentCommand specifies a one-time executable program for the agent to run.
   */
  export interface Schema$AgentCommand {
    /**
     * command is the name of the agent one-time executable that will be invoked.
     */
    command?: string | null;
    /**
     * parameters is a map of key/value pairs that can be used to specify additional one-time executable settings.
     */
    parameters?: {[key: string]: string} | null;
  }
  /**
   * Agent status.
   */
  export interface Schema$AgentStates {
    /**
     * Optional. The available version of the agent in artifact registry.
     */
    availableVersion?: string | null;
    /**
     * Optional. HANA monitoring metrics of the agent.
     */
    hanaMonitoring?: Schema$ServiceStates;
    /**
     * Optional. The installed version of the agent on the host.
     */
    installedVersion?: string | null;
    /**
     * Optional. Whether the agent is fully enabled. If false, the agent is has some issues.
     */
    isFullyEnabled?: boolean | null;
    /**
     * Optional. The Process metrics of the agent.
     */
    processMetrics?: Schema$ServiceStates;
    /**
     * Optional. The System discovery metrics of the agent.
     */
    systemDiscovery?: Schema$ServiceStates;
  }
  /**
   * The schema of agent status data.
   */
  export interface Schema$AgentStatus {
    /**
     * Output only. The name of the agent.
     */
    agentName?: string | null;
    /**
     * Output only. The available version of the agent in artifact registry.
     */
    availableVersion?: string | null;
    /**
     * Output only. Whether the agent has full access to Cloud APIs.
     */
    cloudApiAccessFullScopesGranted?: string | null;
    /**
     * Output only. The error message for the agent configuration if invalid.
     */
    configurationErrorMessage?: string | null;
    /**
     * Output only. The path to the agent configuration file.
     */
    configurationFilePath?: string | null;
    /**
     * Output only. Whether the agent configuration is valid.
     */
    configurationValid?: string | null;
    /**
     * Output only. The installed version of the agent on the host.
     */
    installedVersion?: string | null;
    /**
     * Output only. The URI of the instance. Format: projects//zones//instances/
     */
    instanceUri?: string | null;
    /**
     * Output only. The kernel version of the system.
     */
    kernelVersion?: Schema$SapDiscoveryResourceInstancePropertiesKernelVersion;
    /**
     * Output only. Optional references to public documentation.
     */
    references?: Schema$AgentStatusReference[];
    /**
     * Output only. The services (process metrics, host metrics, etc.).
     */
    services?: Schema$AgentStatusServiceStatus[];
    /**
     * Output only. Whether the agent service is enabled in systemd.
     */
    systemdServiceEnabled?: string | null;
    /**
     * Output only. Whether the agent service is running in systemd.
     */
    systemdServiceRunning?: string | null;
  }
  /**
   * The configuration value.
   */
  export interface Schema$AgentStatusConfigValue {
    /**
     * Output only. Whether the configuration value is the default value or overridden.
     */
    isDefault?: boolean | null;
    /**
     * Output only. The name of the configuration value.
     */
    name?: string | null;
    /**
     * Output only. The value of the configuration value.
     */
    value?: string | null;
  }
  /**
   * The IAM permission status.
   */
  export interface Schema$AgentStatusIAMPermission {
    /**
     * Output only. Whether the permission is granted.
     */
    granted?: string | null;
    /**
     * Output only. The name of the permission.
     */
    name?: string | null;
  }
  /**
   * The reference to public documentation.
   */
  export interface Schema$AgentStatusReference {
    /**
     * Output only. The name of the reference.
     */
    name?: string | null;
    /**
     * Output only. The URL of the reference.
     */
    url?: string | null;
  }
  /**
   * The status of a service (process metrics, host metrics, etc.).
   */
  export interface Schema$AgentStatusServiceStatus {
    /**
     * Output only. The configuration values for the service.
     */
    configValues?: Schema$AgentStatusConfigValue[];
    /**
     * Output only. The error message for the service if it is not fully functional.
     */
    errorMessage?: string | null;
    /**
     * Output only. Whether the service is fully functional (all checks passed).
     */
    fullyFunctional?: string | null;
    /**
     * Output only. The permissions required for the service.
     */
    iamPermissions?: Schema$AgentStatusIAMPermission[];
    /**
     * Output only. The name of the service.
     */
    name?: string | null;
    /**
     * Output only. The state of the service (enabled or disabled in the configuration).
     */
    state?: string | null;
    /**
     * Output only. The message to display when the service state is unspecified.
     */
    unspecifiedStateMessage?: string | null;
  }
  /**
   * Backup properties.
   */
  export interface Schema$BackupProperties {
    /**
     * Output only. The state of the latest backup.
     */
    latestBackupStatus?: string | null;
    /**
     * The time when the latest backup was performed.
     */
    latestBackupTime?: string | null;
  }
  /**
   * Message describing big query destination
   */
  export interface Schema$BigQueryDestination {
    /**
     * Optional. determine if results will be saved in a new table
     */
    createNewResultsTable?: boolean | null;
    /**
     * Optional. destination dataset to save evaluation results
     */
    destinationDataset?: string | null;
  }
  /**
   * The request message for Operations.CancelOperation.
   */
  export interface Schema$CancelOperationRequest {}
  /**
   * The resource on GCP
   */
  export interface Schema$CloudResource {
    /**
     * Output only. All instance properties.
     */
    instanceProperties?: Schema$InstanceProperties;
    /**
     * Output only.
     */
    kind?: string | null;
    /**
     * Output only. resource name Example: compute.googleapis.com/projects/wlm-obs-dev/zones/us-central1-a/instances/sap-pri
     */
    name?: string | null;
  }
  /**
   * * Command specifies the type of command to execute.
   */
  export interface Schema$Command {
    /**
     * AgentCommand specifies a one-time executable program for the agent to run.
     */
    agentCommand?: Schema$AgentCommand;
    /**
     * ShellCommand is invoked via the agent's command line executor.
     */
    shellCommand?: Schema$ShellCommand;
  }
  /**
   * Database Properties.
   */
  export interface Schema$DatabaseProperties {
    /**
     * Output only. Backup properties.
     */
    backupProperties?: Schema$BackupProperties;
    /**
     * Output only. Type of the database. HANA, DB2, etc.
     */
    databaseType?: string | null;
  }
  /**
   * A generic empty message that you can re-use to avoid defining duplicated empty messages in your APIs. A typical example is to use it as the request or the response type of an API method. For instance: service Foo { rpc Bar(google.protobuf.Empty) returns (google.protobuf.Empty); \}
   */
  export interface Schema$Empty {}
  /**
   * Message describing Evaluation object
   */
  export interface Schema$Evaluation {
    /**
     * Optional. BigQuery destination
     */
    bigQueryDestination?: Schema$BigQueryDestination;
    /**
     * Output only. [Output only] Create time stamp
     */
    createTime?: string | null;
    /**
     * The Cloud Storage bucket name for custom rules.
     */
    customRulesBucket?: string | null;
    /**
     * Description of the Evaluation
     */
    description?: string | null;
    /**
     * Evaluation type
     */
    evaluationType?: string | null;
    /**
     * Optional. Immutable. Customer-managed encryption key name, in the format projects/x/locations/x/keyRings/x/cryptoKeys/x.
     */
    kmsKey?: string | null;
    /**
     * Labels as key value pairs
     */
    labels?: {[key: string]: string} | null;
    /**
     * name of resource names have the form 'projects/{project_id\}/locations/{location_id\}/evaluations/{evaluation_id\}'
     */
    name?: string | null;
    /**
     * annotations as key value pairs
     */
    resourceFilter?: Schema$ResourceFilter;
    /**
     * Output only. [Output only] The updated rule ids if exist.
     */
    resourceStatus?: Schema$ResourceStatus;
    /**
     * the name of the rule
     */
    ruleNames?: string[] | null;
    /**
     * Output only. [Output only] The updated rule ids if exist.
     */
    ruleVersions?: string[] | null;
    /**
     * crontab format schedule for scheduled evaluation, currently only support the following schedule: "0 x/1 * * *", "0 x/6 * * *", "0 x/12 * * *", "0 0 x/1 * *", "0 0 x/7 * *",
     */
    schedule?: string | null;
    /**
     * Output only. [Output only] Update time stamp
     */
    updateTime?: string | null;
  }
  /**
   * Message describing Execution object
   */
  export interface Schema$Execution {
    /**
     * Output only. [Output only] End time stamp
     */
    endTime?: string | null;
    /**
     * Optional. Engine
     */
    engine?: string | null;
    /**
     * Output only. [Output only] Evaluation ID
     */
    evaluationId?: string | null;
    /**
     * Optional. External data sources
     */
    externalDataSources?: Schema$ExternalDataSources[];
    /**
     * Output only. [Output only] Inventory time stamp
     */
    inventoryTime?: string | null;
    /**
     * Labels as key value pairs
     */
    labels?: {[key: string]: string} | null;
    /**
     * The name of execution resource. The format is projects/{project\}/locations/{location\}/evaluations/{evaluation\}/executions/{execution\}
     */
    name?: string | null;
    /**
     * Output only. Additional information generated by the execution
     */
    notices?: Schema$Notice[];
    /**
     * Output only. [Output only] Result summary for the execution
     */
    resultSummary?: Schema$Summary;
    /**
     * Output only. execution result summary per rule
     */
    ruleResults?: Schema$RuleExecutionResult[];
    /**
     * type represent whether the execution executed directly by user or scheduled according evaluation.schedule field.
     */
    runType?: string | null;
    /**
     * Output only. [Output only] Start time stamp
     */
    startTime?: string | null;
    /**
     * Output only. [Output only] State
     */
    state?: string | null;
  }
  /**
   * Message describing the result of an execution
   */
  export interface Schema$ExecutionResult {
    /**
     * The commands to remediate the violation.
     */
    commands?: Schema$Command[];
    /**
     * The URL for the documentation of the rule.
     */
    documentationUrl?: string | null;
    /**
     * The resource that violates the rule.
     */
    resource?: Schema$Resource;
    /**
     * The rule that is violated in an evaluation.
     */
    rule?: string | null;
    /**
     * The severity of violation.
     */
    severity?: string | null;
    /**
     * Execution result type of the scanned resource
     */
    type?: string | null;
    /**
     * The details of violation in an evaluation result.
     */
    violationDetails?: Schema$ViolationDetails;
    /**
     * The violation message of an execution.
     */
    violationMessage?: string | null;
  }
  /**
   * Message for external data sources
   */
  export interface Schema$ExternalDataSources {
    /**
     * Required. The asset type of the external data source this can be one of go/cai-asset-types to override the default asset type or it can be a custom type defined by the user custom type must match the asset type in the rule
     */
    assetType?: string | null;
    /**
     * Optional. Name of external data source. The name will be used inside the rego/sql to refer the external data
     */
    name?: string | null;
    /**
     * Required. Type of external data source
     */
    type?: string | null;
    /**
     * Required. URI of external data source. example of bq table {project_ID\}.{dataset_ID\}.{table_ID\}
     */
    uri?: string | null;
  }
  /**
   * Message describing compute engine instance filter
   */
  export interface Schema$GceInstanceFilter {
    /**
     * Service account of compute engine
     */
    serviceAccounts?: string[] | null;
  }
  /**
   * The IAM permission status.
   */
  export interface Schema$IAMPermission {
    /**
     * Output only. Whether the permission is granted.
     */
    granted?: boolean | null;
    /**
     * Output only. The name of the permission.
     */
    name?: string | null;
  }
  /**
   * A presentation of host resource usage where the workload runs.
   */
  export interface Schema$Insight {
    /**
     * The insights data for the agent status.
     */
    agentStatus?: Schema$AgentStatus;
    /**
     * Optional. The instance id where the insight is generated from
     */
    instanceId?: string | null;
    /**
     * The insights data for the OpenShift workload validation.
     */
    openShiftValidation?: Schema$OpenShiftValidation;
    /**
     * The insights data for SAP system discovery. This is a copy of SAP System proto and should get updated whenever that one changes.
     */
    sapDiscovery?: Schema$SapDiscovery;
    /**
     * The insights data for the SAP workload validation.
     */
    sapValidation?: Schema$SapValidation;
    /**
     * Output only. [Output only] Create time stamp
     */
    sentTime?: string | null;
    /**
     * The insights data for the sqlserver workload validation.
     */
    sqlserverValidation?: Schema$SqlserverValidation;
    /**
     * The insights data for workload validation of torso workloads.
     */
    torsoValidation?: Schema$TorsoValidation;
  }
  /**
   * Instance Properties.
   */
  export interface Schema$InstanceProperties {
    /**
     * Optional. Instance number.
     */
    instanceNumber?: string | null;
    /**
     * Optional. Instance machine type.
     */
    machineType?: string | null;
    /**
     * Optional. Instance roles.
     */
    roles?: string[] | null;
    /**
     * Optional. SAP Instance properties.
     */
    sapInstanceProperties?: Schema$SapInstanceProperties;
    /**
     * Optional. Instance status.
     */
    status?: string | null;
    /**
     * Optional. the next maintenance event on VM
     */
    upcomingMaintenanceEvent?: Schema$UpcomingMaintenanceEvent;
  }
  /**
   * Message represent an rule that failed to be validated.
   */
  export interface Schema$InvalidRule {
    /**
     * display name of the invalid rule
     */
    displayName?: string | null;
    /**
     * cloud storage destination of the invalid rule
     */
    gcsUri?: string | null;
    /**
     * name of the invalid rule
     */
    name?: string | null;
    /**
     * The error message of valdating rule formats.
     */
    valiadtionError?: string | null;
  }
  /**
   * Message wrappes a list of invalid rules.
   */
  export interface Schema$InvalidRulesWrapper {
    /**
     * The invalid rules that failed to be validated.
     */
    invalidRules?: Schema$InvalidRule[];
  }
  /**
   * List discovered profile Response returns discovered profiles from agents
   */
  export interface Schema$ListDiscoveredProfilesResponse {
    /**
     * Output only. A token identifying a page of results the server should return
     */
    nextPageToken?: string | null;
    /**
     * Locations that could not be reached.
     */
    unreachable?: string[] | null;
    /**
     * Output only. The list of workload profiles
     */
    workloadProfiles?: Schema$WorkloadProfile[];
  }
  /**
   * Message for response to listing Evaluations
   */
  export interface Schema$ListEvaluationsResponse {
    /**
     * The list of Evaluation
     */
    evaluations?: Schema$Evaluation[];
    /**
     * A token identifying a page of results the server should return.
     */
    nextPageToken?: string | null;
    /**
     * Locations that could not be reached.
     */
    unreachable?: string[] | null;
  }
  /**
   * Message for response of list execution results
   */
  export interface Schema$ListExecutionResultsResponse {
    /**
     * The versions from the specified publisher.
     */
    executionResults?: Schema$ExecutionResult[];
    /**
     * A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages.
     */
    nextPageToken?: string | null;
  }
  /**
   * Message for response to listing Executions
   */
  export interface Schema$ListExecutionsResponse {
    /**
     * The list of Execution
     */
    executions?: Schema$Execution[];
    /**
     * A token identifying a page of results the server should return.
     */
    nextPageToken?: string | null;
    /**
     * Locations that could not be reached.
     */
    unreachable?: string[] | null;
  }
  /**
   * The response message for Locations.ListLocations.
   */
  export interface Schema$ListLocationsResponse {
    /**
     * A list of locations that matches the specified filter in the request.
     */
    locations?: Schema$Location[];
    /**
     * The standard List next-page token.
     */
    nextPageToken?: string | null;
  }
  /**
   * The response message for Operations.ListOperations.
   */
  export interface Schema$ListOperationsResponse {
    /**
     * The standard List next-page token.
     */
    nextPageToken?: string | null;
    /**
     * A list of operations that matches the specified filter in the request.
     */
    operations?: Schema$Operation[];
    /**
     * Unordered list. Unreachable resources. Populated when the request sets `ListOperationsRequest.return_partial_success` and reads across collections. For example, when attempting to list all resources across all supported locations.
     */
    unreachable?: string[] | null;
  }
  /**
   * Mesesage of response of list rules
   */
  export interface Schema$ListRulesResponse {
    /**
     * A wrapper of the invalid rules that failed to be validated.
     */
    invalidRulesWrapper?: Schema$InvalidRulesWrapper;
    /**
     * all rules in response
     */
    rules?: Schema$Rule[];
  }
  /**
   * Message for response to list scanned resources
   */
  export interface Schema$ListScannedResourcesResponse {
    /**
     * A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages.
     */
    nextPageToken?: string | null;
    /**
     * All scanned resources in response
     */
    scannedResources?: Schema$ScannedResource[];
  }
  /**
   * A resource that represents a Google Cloud location.
   */
  export interface Schema$Location {
    /**
     * The friendly name for this location, typically a nearby city name. For example, "Tokyo".
     */
    displayName?: string | null;
    /**
     * Cross-service attributes for the location. For example {"cloud.googleapis.com/region": "us-east1"\}
     */
    labels?: {[key: string]: string} | null;
    /**
     * The canonical id for this location. For example: `"us-east1"`.
     */
    locationId?: string | null;
    /**
     * Service-specific metadata. For example the available capacity at the given location.
     */
    metadata?: {[key: string]: any} | null;
    /**
     * Resource name for the location, which may vary between implementations. For example: `"projects/example-project/locations/us-east1"`
     */
    name?: string | null;
  }
  /**
   * Message for additional information generated by the execution
   */
  export interface Schema$Notice {
    /**
     * Output only. Message of the notice
     */
    message?: string | null;
  }
  /**
   * A presentation of OpenShift workload insight. The schema of OpenShift workloads validation related data.
   */
  export interface Schema$OpenShiftValidation {
    /**
     * Required. The OpenShift cluster ID (e.g. 8371bb05-7cac-4d38-82c0-0f58c4f6f936).
     */
    clusterId?: string | null;
    /**
     * Required. The validation details of the OpenShift cluster in JSON format.
     */
    validationDetails?: {[key: string]: any} | null;
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
     * The normal, successful response of the operation. If the original method returns no data on success, such as `Delete`, the response is `google.protobuf.Empty`. If the original method is standard `Get`/`Create`/`Update`, the response should be the resource. For other methods, the response should have the type `XxxResponse`, where `Xxx` is the original method name. For example, if the original method name is `TakeSnapshot()`, the inferred response type is `TakeSnapshotResponse`.
     */
    response?: {[key: string]: any} | null;
  }
  /**
   * Represents the metadata of the long-running operation.
   */
  export interface Schema$OperationMetadata {
    /**
     * Output only. API version used to start the operation.
     */
    apiVersion?: string | null;
    /**
     * Output only. The time the operation was created.
     */
    createTime?: string | null;
    /**
     * Output only. The time the operation finished running.
     */
    endTime?: string | null;
    /**
     * Output only. Identifies whether the user has requested cancellation of the operation. Operations that have been cancelled successfully have Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.
     */
    requestedCancellation?: boolean | null;
    /**
     * Output only. Human-readable status of the operation, if any.
     */
    statusMessage?: string | null;
    /**
     * Output only. Server-defined resource path for the target of the operation.
     */
    target?: string | null;
    /**
     * Output only. Name of the verb executed by the operation.
     */
    verb?: string | null;
  }
  /**
   * Product contains the details of a product.
   */
  export interface Schema$Product {
    /**
     * Optional. Name of the product.
     */
    name?: string | null;
    /**
     * Optional. Version of the product.
     */
    version?: string | null;
  }
  /**
   * Message represent resource in execution result
   */
  export interface Schema$Resource {
    /**
     * The name of the resource.
     */
    name?: string | null;
    /**
     * The service account associated with the resource.
     */
    serviceAccount?: string | null;
    /**
     * The type of resource.
     */
    type?: string | null;
  }
  /**
   * Message describing resource filters
   */
  export interface Schema$ResourceFilter {
    /**
     * Filter compute engine resource
     */
    gceInstanceFilter?: Schema$GceInstanceFilter;
    /**
     * The label used for filter resource
     */
    inclusionLabels?: {[key: string]: string} | null;
    /**
     * The id pattern for filter resource
     */
    resourceIdPatterns?: string[] | null;
    /**
     * The scopes of evaluation resource
     */
    scopes?: string[] | null;
  }
  /**
   * Message describing resource status
   */
  export interface Schema$ResourceStatus {
    /**
     * Historical: Used before 2023-05-22 the new version of rule id if exists
     */
    rulesNewerVersions?: string[] | null;
    /**
     * State of the resource
     */
    state?: string | null;
  }
  /**
   * Message represent a rule
   */
  export interface Schema$Rule {
    /**
     * The CAI asset type of the rule is evaluating, for joined asset types, it will be the corresponding primary asset types.
     */
    assetType?: string | null;
    /**
     * descrite rule in plain language
     */
    description?: string | null;
    /**
     * the name display in UI
     */
    displayName?: string | null;
    /**
     * the message template for rule
     */
    errorMessage?: string | null;
    /**
     * rule name
     */
    name?: string | null;
    /**
     * the primary category
     */
    primaryCategory?: string | null;
    /**
     * the remediation for the rule
     */
    remediation?: string | null;
    /**
     * Output only. the version of the rule
     */
    revisionId?: string | null;
    /**
     * The type of the rule.
     */
    ruleType?: string | null;
    /**
     * the secondary category
     */
    secondaryCategory?: string | null;
    /**
     * the severity of the rule
     */
    severity?: string | null;
    /**
     * List of user-defined tags
     */
    tags?: string[] | null;
    /**
     * the docuement url for the rule
     */
    uri?: string | null;
  }
  /**
   * Message for execution result summary per rule
   */
  export interface Schema$RuleExecutionResult {
    /**
     * Execution message, if any
     */
    message?: string | null;
    /**
     * Number of violations
     */
    resultCount?: string | null;
    /**
     * rule name
     */
    rule?: string | null;
    /**
     * Number of total scanned resources
     */
    scannedResourceCount?: string | null;
    /**
     * Output only. The execution status
     */
    state?: string | null;
  }
  /**
   * Message for creating a Execution
   */
  export interface Schema$RunEvaluationRequest {
    /**
     * Required. The resource being created
     */
    execution?: Schema$Execution;
    /**
     * Required. Id of the requesting object If auto-generating Id server-side, remove this field and execution_id from the method_signature of Create RPC
     */
    executionId?: string | null;
    /**
     * Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
     */
    requestId?: string | null;
  }
  /**
   * The component of sap workload
   */
  export interface Schema$SapComponent {
    /**
     * Output only. All instance properties.
     */
    databaseProperties?: Schema$DatabaseProperties;
    /**
     * A list of host URIs that are part of the HA configuration if present. An empty list indicates the component is not configured for HA.
     */
    haHosts?: string[] | null;
    /**
     * Output only. resources in the component
     */
    resources?: Schema$CloudResource[];
    /**
     * Output only. sid is the sap component identificator
     */
    sid?: string | null;
    /**
     * The detected topology of the component.
     */
    topologyType?: string | null;
  }
  /**
   * The schema of SAP system discovery data.
   */
  export interface Schema$SapDiscovery {
    /**
     * Optional. An SAP system may run without an application layer.
     */
    applicationLayer?: Schema$SapDiscoveryComponent;
    /**
     * Required. An SAP System must have a database.
     */
    databaseLayer?: Schema$SapDiscoveryComponent;
    /**
     * Optional. The metadata for SAP system discovery data.
     */
    metadata?: Schema$SapDiscoveryMetadata;
    /**
     * Optional. The GCP project number that this SapSystem belongs to.
     */
    projectNumber?: string | null;
    /**
     * Output only. A combination of database SID, database instance URI and tenant DB name to make a unique identifier per-system.
     */
    systemId?: string | null;
    /**
     * Required. Unix timestamp this system has been updated last.
     */
    updateTime?: string | null;
    /**
     * Optional. Whether to use DR reconciliation or not.
     */
    useDrReconciliation?: boolean | null;
    /**
     * Optional. The properties of the workload.
     */
    workloadProperties?: Schema$SapDiscoveryWorkloadProperties;
  }
  /**
   * Message describing the system component.
   */
  export interface Schema$SapDiscoveryComponent {
    /**
     * Optional. The component is a SAP application.
     */
    applicationProperties?: Schema$SapDiscoveryComponentApplicationProperties;
    /**
     * Optional. The component is a SAP database.
     */
    databaseProperties?: Schema$SapDiscoveryComponentDatabaseProperties;
    /**
     * Optional. A list of host URIs that are part of the HA configuration if present. An empty list indicates the component is not configured for HA.
     */
    haHosts?: string[] | null;
    /**
     * Required. Pantheon Project in which the resources reside.
     */
    hostProject?: string | null;
    /**
     * Optional. The region this component's resources are primarily located in.
     */
    region?: string | null;
    /**
     * Optional. A list of replication sites used in Disaster Recovery (DR) configurations.
     */
    replicationSites?: Schema$SapDiscoveryComponentReplicationSite[];
    /**
     * Optional. The resources in a component.
     */
    resources?: Schema$SapDiscoveryResource[];
    /**
     * Optional. The SAP identifier, used by the SAP software and helps differentiate systems for customers.
     */
    sid?: string | null;
    /**
     * Optional. The detected topology of the component.
     */
    topologyType?: string | null;
  }
  /**
   * A set of properties describing an SAP Application layer.
   */
  export interface Schema$SapDiscoveryComponentApplicationProperties {
    /**
     * Optional. Deprecated: ApplicationType now tells you whether this is ABAP or Java.
     */
    abap?: boolean | null;
    /**
     * Optional. Instance number of the SAP application instance.
     */
    appInstanceNumber?: string | null;
    /**
     * Required. Type of the application. Netweaver, etc.
     */
    applicationType?: string | null;
    /**
     * Optional. Instance number of the ASCS instance.
     */
    ascsInstanceNumber?: string | null;
    /**
     * Optional. Resource URI of the recognized ASCS host of the application.
     */
    ascsUri?: string | null;
    /**
     * Optional. Instance number of the ERS instance.
     */
    ersInstanceNumber?: string | null;
    /**
     * Optional. Kernel version for Netweaver running in the system.
     */
    kernelVersion?: string | null;
    /**
     * Optional. Resource URI of the recognized shared NFS of the application. May be empty if the application server has only a single node.
     */
    nfsUri?: string | null;
  }
  /**
   * A set of properties describing an SAP Database layer.
   */
  export interface Schema$SapDiscoveryComponentDatabaseProperties {
    /**
     * Optional. SID of the system database.
     */
    databaseSid?: string | null;
    /**
     * Required. Type of the database. HANA, DB2, etc.
     */
    databaseType?: string | null;
    /**
     * Optional. The version of the database software running in the system.
     */
    databaseVersion?: string | null;
    /**
     * Optional. Instance number of the SAP instance.
     */
    instanceNumber?: string | null;
    /**
     * Optional. Landscape ID from the HANA nameserver.
     */
    landscapeId?: string | null;
    /**
     * Required. URI of the recognized primary instance of the database.
     */
    primaryInstanceUri?: string | null;
    /**
     * Optional. URI of the recognized shared NFS of the database. May be empty if the database has only a single node.
     */
    sharedNfsUri?: string | null;
  }
  /**
   * A replication site used in Disaster Recovery (DR) configurations.
   */
  export interface Schema$SapDiscoveryComponentReplicationSite {
    /**
     * Optional. The system component for the site.
     */
    component?: Schema$SapDiscoveryComponent;
    /**
     * Optional. The name of the source site from which this one replicates.
     */
    sourceSite?: string | null;
  }
  /**
   * Message describing SAP discovery system metadata
   */
  export interface Schema$SapDiscoveryMetadata {
    /**
     * Optional. Customer region string for customer's use. Does not represent GCP region.
     */
    customerRegion?: string | null;
    /**
     * Optional. Customer defined, something like "E-commerce pre prod"
     */
    definedSystem?: string | null;
    /**
     * Optional. Should be "prod", "QA", "dev", "staging", etc.
     */
    environmentType?: string | null;
    /**
     * Optional. This SAP product name
     */
    sapProduct?: string | null;
  }
  /**
   * Message describing a resource.
   */
  export interface Schema$SapDiscoveryResource {
    /**
     * Optional. A set of properties only applying to instance type resources.
     */
    instanceProperties?: Schema$SapDiscoveryResourceInstanceProperties;
    /**
     * Optional. A list of resource URIs related to this resource.
     */
    relatedResources?: string[] | null;
    /**
     * Required. ComputeInstance, ComputeDisk, VPC, Bare Metal server, etc.
     */
    resourceKind?: string | null;
    /**
     * Required. The type of this resource.
     */
    resourceType?: string | null;
    /**
     * Required. URI of the resource, includes project, location, and name.
     */
    resourceUri?: string | null;
    /**
     * Required. Unix timestamp of when this resource last had its discovery data updated.
     */
    updateTime?: string | null;
  }
  /**
   * A set of properties only present for an instance type resource
   */
  export interface Schema$SapDiscoveryResourceInstanceProperties {
    /**
     * Optional. App server instances on the host
     */
    appInstances?: Schema$SapDiscoveryResourceInstancePropertiesAppInstance[];
    /**
     * Optional. A list of instance URIs that are part of a cluster with this one.
     */
    clusterInstances?: string[] | null;
    /**
     * Optional. Disk mounts on the instance.
     */
    diskMounts?: Schema$SapDiscoveryResourceInstancePropertiesDiskMount[];
    /**
     * Optional. The VM's instance number.
     */
    instanceNumber?: string | null;
    /**
     * Optional. Bitmask of instance role, a resource may have multiple roles at once.
     */
    instanceRole?: string | null;
    /**
     * Optional. Instance is part of a DR site.
     */
    isDrSite?: boolean | null;
    /**
     * Optional. The kernel version of the instance.
     */
    osKernelVersion?: Schema$SapDiscoveryResourceInstancePropertiesKernelVersion;
    /**
     * Optional. A virtual hostname of the instance if it has one.
     */
    virtualHostname?: string | null;
  }
  /**
   * Fields to describe an SAP application server instance.
   */
  export interface Schema$SapDiscoveryResourceInstancePropertiesAppInstance {
    /**
     * Optional. Instance name of the SAP application instance.
     */
    name?: string | null;
    /**
     * Optional. Instance number of the SAP application instance.
     */
    number?: string | null;
  }
  /**
   * Disk mount on the instance.
   */
  export interface Schema$SapDiscoveryResourceInstancePropertiesDiskMount {
    /**
     * Optional. Names of the disks providing this mount point.
     */
    diskNames?: string[] | null;
    /**
     * Optional. Filesystem mount point.
     */
    mountPoint?: string | null;
    /**
     * Optional. Name of the disk.
     */
    name?: string | null;
  }
  /**
   * KernelVersion encapsulates the kernel version data for the system.
   */
  export interface Schema$SapDiscoveryResourceInstancePropertiesKernelVersion {
    /**
     * Optional. Captures the distro-specific kernel version, the portion of the string following the first dash.
     */
    distroKernel?: Schema$SapDiscoveryResourceInstancePropertiesKernelVersionVersion;
    /**
     * Optional. Captures the OS-specific kernel version, the portion of the string up to the first dash.
     */
    osKernel?: Schema$SapDiscoveryResourceInstancePropertiesKernelVersionVersion;
    /**
     * Optional. Raw string of the kernel version.
     */
    rawString?: string | null;
  }
  /**
   * Version is reported as Major.Minor.Build.Patch.
   */
  export interface Schema$SapDiscoveryResourceInstancePropertiesKernelVersionVersion {
    /**
     * Optional. The build version number.
     */
    build?: number | null;
    /**
     * Optional. The major version number.
     */
    major?: number | null;
    /**
     * Optional. The minor version number.
     */
    minor?: number | null;
    /**
     * Optional. The patch version number.
     */
    patch?: number | null;
    /**
     * Optional. A catch-all for any unparsed version components. This is in case the number of points in the version string exceeds the expected count of 4.
     */
    remainder?: string | null;
  }
  /**
   * A set of properties describing an SAP workload.
   */
  export interface Schema$SapDiscoveryWorkloadProperties {
    /**
     * Optional. List of SAP Products and their versions running on the system.
     */
    productVersions?: Schema$SapDiscoveryWorkloadPropertiesProductVersion[];
    /**
     * Optional. A list of SAP software components and their versions running on the system.
     */
    softwareComponentVersions?: Schema$SapDiscoveryWorkloadPropertiesSoftwareComponentProperties[];
  }
  /**
   * A product name and version.
   */
  export interface Schema$SapDiscoveryWorkloadPropertiesProductVersion {
    /**
     * Optional. Name of the product.
     */
    name?: string | null;
    /**
     * Optional. Version of the product.
     */
    version?: string | null;
  }
  /**
   * A SAP software component name, version, and type.
   */
  export interface Schema$SapDiscoveryWorkloadPropertiesSoftwareComponentProperties {
    /**
     * Optional. The component's minor version.
     */
    extVersion?: string | null;
    /**
     * Optional. Name of the component.
     */
    name?: string | null;
    /**
     * Optional. The component's type.
     */
    type?: string | null;
    /**
     * Optional. The component's major version.
     */
    version?: string | null;
  }
  /**
   * SAP instance properties.
   */
  export interface Schema$SapInstanceProperties {
    /**
     * Optional. Sap Instance Agent status.
     */
    agentStates?: Schema$AgentStates;
    /**
     * Optional. SAP Instance numbers. They are from '00' to '99'.
     */
    numbers?: string[] | null;
  }
  /**
   * A presentation of SAP workload insight. The schema of SAP workloads validation related data.
   */
  export interface Schema$SapValidation {
    /**
     * Required. The project_id of the cloud project that the Insight data comes from.
     */
    projectId?: string | null;
    /**
     * Optional. A list of SAP validation metrics data.
     */
    validationDetails?: Schema$SapValidationValidationDetail[];
    /**
     * Optional. The zone of the instance that the Insight data comes from.
     */
    zone?: string | null;
  }
  /**
   * Message describing the SAP validation metrics.
   */
  export interface Schema$SapValidationValidationDetail {
    /**
     * Optional. The pairs of metrics data: field name & field value.
     */
    details?: {[key: string]: string} | null;
    /**
     * Optional. Was there a SAP system detected for this validation type.
     */
    isPresent?: boolean | null;
    /**
     * Optional. The SAP system that the validation data is from.
     */
    sapValidationType?: string | null;
  }
  /**
   * The body of sap workload
   */
  export interface Schema$SapWorkload {
    /**
     * Output only. the acsc componment
     */
    application?: Schema$SapComponent;
    /**
     * Output only. the architecture
     */
    architecture?: string | null;
    /**
     * Output only. the database componment
     */
    database?: Schema$SapComponent;
    /**
     * Output only. The metadata for SAP workload.
     */
    metadata?: {[key: string]: string} | null;
    /**
     * Output only. the products on this workload.
     */
    products?: Schema$Product[];
  }
  /**
   * Message of scanned resource
   */
  export interface Schema$ScannedResource {
    /**
     * resource name
     */
    resource?: string | null;
    /**
     * resource type
     */
    type?: string | null;
  }
  /**
   * The state of the service.
   */
  export interface Schema$ServiceStates {
    /**
     * Optional. Output only. The IAM permissions for the service.
     */
    iamPermissions?: Schema$IAMPermission[];
    /**
     * Output only. The overall state of the service.
     */
    state?: string | null;
  }
  /**
   * * A ShellCommand is invoked via the agent's command line executor
   */
  export interface Schema$ShellCommand {
    /**
     * args is a string of arguments to be passed to the command.
     */
    args?: string | null;
    /**
     * command is the name of the command to be executed.
     */
    command?: string | null;
    /**
     * Optional. If not specified, the default timeout is 60 seconds.
     */
    timeoutSeconds?: number | null;
  }
  /**
   * A presentation of SQLServer workload insight. The schema of SqlServer workloads validation related data.
   */
  export interface Schema$SqlserverValidation {
    /**
     * Optional. The agent version collected this data point
     */
    agentVersion?: string | null;
    /**
     * Required. The instance_name of the instance that the Insight data comes from. According to https://linter.aip.dev/122/name-suffix: field names should not use the _name suffix unless the field would be ambiguous without it.
     */
    instance?: string | null;
    /**
     * Required. The project_id of the cloud project that the Insight data comes from.
     */
    projectId?: string | null;
    /**
     * Optional. A list of SqlServer validation metrics data.
     */
    validationDetails?: Schema$SqlserverValidationValidationDetail[];
  }
  /**
   * Message containing collected data names and values.
   */
  export interface Schema$SqlserverValidationDetails {
    /**
     * Required. Collected data is in format.
     */
    fields?: {[key: string]: string} | null;
  }
  /**
   * Message describing the Sqlserver validation metrics.
   */
  export interface Schema$SqlserverValidationValidationDetail {
    /**
     * Required. Details wraps map that represents collected data names and values.
     */
    details?: Schema$SqlserverValidationDetails[];
    /**
     * Optional. The Sqlserver system that the validation data is from.
     */
    type?: string | null;
  }
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
   * Message for execution summary
   */
  export interface Schema$Summary {
    /**
     * Output only. Number of failures
     */
    failures?: string | null;
    /**
     * Output only. Number of new failures compared to the previous execution
     */
    newFailures?: string | null;
    /**
     * Output only. Number of new fixes compared to the previous execution
     */
    newFixes?: string | null;
  }
  /**
   * The schema of torso workload validation data.
   */
  export interface Schema$TorsoValidation {
    /**
     * Required. agent_version lists the version of the agent that collected this data.
     */
    agentVersion?: string | null;
    /**
     * Optional. instance_name lists the human readable name of the instance that the data comes from.
     */
    instanceName?: string | null;
    /**
     * Required. project_id lists the human readable cloud project that the data comes from.
     */
    projectId?: string | null;
    /**
     * Required. validation_details contains the pairs of validation data: field name & field value.
     */
    validationDetails?: {[key: string]: string} | null;
    /**
     * Required. workload_type specifies the type of torso workload.
     */
    workloadType?: string | null;
  }
  /**
   * Maintenance Event
   */
  export interface Schema$UpcomingMaintenanceEvent {
    /**
     * Optional. End time
     */
    endTime?: string | null;
    /**
     * Optional. Maintenance status
     */
    maintenanceStatus?: string | null;
    /**
     * Optional. Instance maintenance behavior. Could be "MIGRATE" or "TERMINATE".
     */
    onHostMaintenance?: string | null;
    /**
     * Optional. Start time
     */
    startTime?: string | null;
    /**
     * Optional. Type
     */
    type?: string | null;
  }
  /**
   * Message describing the violation in an evaluation result.
   */
  export interface Schema$ViolationDetails {
    /**
     * The name of the asset.
     */
    asset?: string | null;
    /**
     * Details of the violation. TODO(b/452163887)
     */
    observed?: {[key: string]: string} | null;
    /**
     * The service account associated with the resource.
     */
    serviceAccount?: string | null;
  }
  /**
   * workload resource
   */
  export interface Schema$WorkloadProfile {
    /**
     * Optional. such as name, description, version. More example can be found in deployment
     */
    labels?: {[key: string]: string} | null;
    /**
     * Identifier. name of resource names have the form 'projects/{project_id\}/locations/{location\}/workloadProfiles/{workload_id\}'
     */
    name?: string | null;
    /**
     * Required. time when the workload data was refreshed
     */
    refreshedTime?: string | null;
    /**
     * The sap workload content
     */
    sapWorkload?: Schema$SapWorkload;
    /**
     * Required. The type of the workload
     */
    workloadType?: string | null;
  }
  /**
   * Request for sending the data insights.
   */
  export interface Schema$WriteInsightRequest {
    /**
     * Optional. The agent version collected this data point.
     */
    agentVersion?: string | null;
    /**
     * Required. The metrics data details.
     */
    insight?: Schema$Insight;
    /**
     * Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
     */
    requestId?: string | null;
  }
  /**
   * The response for write insights request.
   */
  export interface Schema$WriteInsightResponse {}

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
    discoveredprofiles: Resource$Projects$Locations$Discoveredprofiles;
    evaluations: Resource$Projects$Locations$Evaluations;
    insights: Resource$Projects$Locations$Insights;
    operations: Resource$Projects$Locations$Operations;
    rules: Resource$Projects$Locations$Rules;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.discoveredprofiles =
        new Resource$Projects$Locations$Discoveredprofiles(this.context);
      this.evaluations = new Resource$Projects$Locations$Evaluations(
        this.context
      );
      this.insights = new Resource$Projects$Locations$Insights(this.context);
      this.operations = new Resource$Projects$Locations$Operations(
        this.context
      );
      this.rules = new Resource$Projects$Locations$Rules(this.context);
    }

    /**
     * Gets information about a location.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/workloadmanager.googleapis.com
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
     * const workloadmanager = google.workloadmanager('v1');
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
     *   const res = await workloadmanager.projects.locations.get({
     *     // Resource name for the location.
     *     name: 'projects/my-project/locations/my-location',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "displayName": "my_displayName",
     *   //   "labels": {},
     *   //   "locationId": "my_locationId",
     *   //   "metadata": {},
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
      params: Params$Resource$Projects$Locations$Get,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    get(
      params?: Params$Resource$Projects$Locations$Get,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Location>>;
    get(
      params: Params$Resource$Projects$Locations$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Get,
      options: MethodOptions | BodyResponseCallback<Schema$Location>,
      callback: BodyResponseCallback<Schema$Location>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Get,
      callback: BodyResponseCallback<Schema$Location>
    ): void;
    get(callback: BodyResponseCallback<Schema$Location>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Get
        | BodyResponseCallback<Schema$Location>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Location>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Location>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$Location>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://workloadmanager.googleapis.com/';
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
        createAPIRequest<Schema$Location>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Location>(parameters);
      }
    }

    /**
     * Lists information about the supported locations for this service.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/workloadmanager.googleapis.com
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
     * const workloadmanager = google.workloadmanager('v1');
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
     *   const res = await workloadmanager.projects.locations.list({
     *     // Optional. Do not use this field. It is unsupported and is ignored unless explicitly documented otherwise. This is primarily for internal usage.
     *     extraLocationTypes: 'placeholder-value',
     *     // A filter to narrow down results to a preferred subset. The filtering language accepts strings like `"displayName=tokyo"`, and is documented in more detail in [AIP-160](https://google.aip.dev/160).
     *     filter: 'placeholder-value',
     *     // The resource that owns the locations collection, if applicable.
     *     name: 'projects/my-project',
     *     // The maximum number of results to return. If not set, the service selects a default.
     *     pageSize: 'placeholder-value',
     *     // A page token received from the `next_page_token` field in the response. Send that page token to receive the subsequent page.
     *     pageToken: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "locations": [],
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
      params: Params$Resource$Projects$Locations$List,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    list(
      params?: Params$Resource$Projects$Locations$List,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$ListLocationsResponse>>;
    list(
      params: Params$Resource$Projects$Locations$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ListLocationsResponse>,
      callback: BodyResponseCallback<Schema$ListLocationsResponse>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$List,
      callback: BodyResponseCallback<Schema$ListLocationsResponse>
    ): void;
    list(callback: BodyResponseCallback<Schema$ListLocationsResponse>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$List
        | BodyResponseCallback<Schema$ListLocationsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ListLocationsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ListLocationsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$ListLocationsResponse>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://workloadmanager.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}/locations').replace(
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
        createAPIRequest<Schema$ListLocationsResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ListLocationsResponse>(parameters);
      }
    }
  }

  export interface Params$Resource$Projects$Locations$Get extends StandardParameters {
    /**
     * Resource name for the location.
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Locations$List extends StandardParameters {
    /**
     * Optional. Do not use this field. It is unsupported and is ignored unless explicitly documented otherwise. This is primarily for internal usage.
     */
    extraLocationTypes?: string[];
    /**
     * A filter to narrow down results to a preferred subset. The filtering language accepts strings like `"displayName=tokyo"`, and is documented in more detail in [AIP-160](https://google.aip.dev/160).
     */
    filter?: string;
    /**
     * The resource that owns the locations collection, if applicable.
     */
    name?: string;
    /**
     * The maximum number of results to return. If not set, the service selects a default.
     */
    pageSize?: number;
    /**
     * A page token received from the `next_page_token` field in the response. Send that page token to receive the subsequent page.
     */
    pageToken?: string;
  }

  export class Resource$Projects$Locations$Discoveredprofiles {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * List discovered workload profiles
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/workloadmanager.googleapis.com
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
     * const workloadmanager = google.workloadmanager('v1');
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
     *   const res = await workloadmanager.projects.locations.discoveredprofiles.list({
     *     // Optional. Filtering results
     *     filter: 'placeholder-value',
     *     // Optional. Requested page size. Server may return fewer items than requested. If unspecified, server will pick an appropriate default.
     *     pageSize: 'placeholder-value',
     *     // Optional. A token identifying a page of results the server should return.
     *     pageToken: 'placeholder-value',
     *     // Required. Parent value for ListDiscoveredProfilesRequest
     *     parent: 'projects/my-project/locations/my-location',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "nextPageToken": "my_nextPageToken",
     *   //   "unreachable": [],
     *   //   "workloadProfiles": []
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
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
      params: Params$Resource$Projects$Locations$Discoveredprofiles$List,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    list(
      params?: Params$Resource$Projects$Locations$Discoveredprofiles$List,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$ListDiscoveredProfilesResponse>>;
    list(
      params: Params$Resource$Projects$Locations$Discoveredprofiles$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Discoveredprofiles$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ListDiscoveredProfilesResponse>,
      callback: BodyResponseCallback<Schema$ListDiscoveredProfilesResponse>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Discoveredprofiles$List,
      callback: BodyResponseCallback<Schema$ListDiscoveredProfilesResponse>
    ): void;
    list(
      callback: BodyResponseCallback<Schema$ListDiscoveredProfilesResponse>
    ): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Discoveredprofiles$List
        | BodyResponseCallback<Schema$ListDiscoveredProfilesResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ListDiscoveredProfilesResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ListDiscoveredProfilesResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$ListDiscoveredProfilesResponse>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Discoveredprofiles$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Discoveredprofiles$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://workloadmanager.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}/discoveredprofiles').replace(
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
        createAPIRequest<Schema$ListDiscoveredProfilesResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ListDiscoveredProfilesResponse>(
          parameters
        );
      }
    }
  }

  export interface Params$Resource$Projects$Locations$Discoveredprofiles$List extends StandardParameters {
    /**
     * Optional. Filtering results
     */
    filter?: string;
    /**
     * Optional. Requested page size. Server may return fewer items than requested. If unspecified, server will pick an appropriate default.
     */
    pageSize?: number;
    /**
     * Optional. A token identifying a page of results the server should return.
     */
    pageToken?: string;
    /**
     * Required. Parent value for ListDiscoveredProfilesRequest
     */
    parent?: string;
  }

  export class Resource$Projects$Locations$Evaluations {
    context: APIRequestContext;
    executions: Resource$Projects$Locations$Evaluations$Executions;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.executions = new Resource$Projects$Locations$Evaluations$Executions(
        this.context
      );
    }

    /**
     * Creates a new Evaluation in a given project and location.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/workloadmanager.googleapis.com
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
     * const workloadmanager = google.workloadmanager('v1');
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
     *   const res = await workloadmanager.projects.locations.evaluations.create({
     *     // Required. Id of the requesting object
     *     evaluationId: 'placeholder-value',
     *     // Required. The resource prefix of the evaluation location using the form: `projects/{project_id\}/locations/{location_id\}`
     *     parent: 'projects/my-project/locations/my-location',
     *     // Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
     *     requestId: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "bigQueryDestination": {},
     *       //   "createTime": "my_createTime",
     *       //   "customRulesBucket": "my_customRulesBucket",
     *       //   "description": "my_description",
     *       //   "evaluationType": "my_evaluationType",
     *       //   "kmsKey": "my_kmsKey",
     *       //   "labels": {},
     *       //   "name": "my_name",
     *       //   "resourceFilter": {},
     *       //   "resourceStatus": {},
     *       //   "ruleNames": [],
     *       //   "ruleVersions": [],
     *       //   "schedule": "my_schedule",
     *       //   "updateTime": "my_updateTime"
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
      params: Params$Resource$Projects$Locations$Evaluations$Create,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    create(
      params?: Params$Resource$Projects$Locations$Evaluations$Create,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Operation>>;
    create(
      params: Params$Resource$Projects$Locations$Evaluations$Create,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    create(
      params: Params$Resource$Projects$Locations$Evaluations$Create,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    create(
      params: Params$Resource$Projects$Locations$Evaluations$Create,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    create(callback: BodyResponseCallback<Schema$Operation>): void;
    create(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Evaluations$Create
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
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$Operation>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Evaluations$Create;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Evaluations$Create;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://workloadmanager.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}/evaluations').replace(
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
        createAPIRequest<Schema$Operation>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Operation>(parameters);
      }
    }

    /**
     * Deletes a single Evaluation.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/workloadmanager.googleapis.com
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
     * const workloadmanager = google.workloadmanager('v1');
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
     *   const res = await workloadmanager.projects.locations.evaluations.delete({
     *     // Optional. Followed the best practice from https://aip.dev/135#cascading-delete
     *     force: 'placeholder-value',
     *     // Required. Name of the resource
     *     name: 'projects/my-project/locations/my-location/evaluations/my-evaluation',
     *     // Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes after the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
     *     requestId: 'placeholder-value',
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
      params: Params$Resource$Projects$Locations$Evaluations$Delete,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    delete(
      params?: Params$Resource$Projects$Locations$Evaluations$Delete,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Operation>>;
    delete(
      params: Params$Resource$Projects$Locations$Evaluations$Delete,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    delete(
      params: Params$Resource$Projects$Locations$Evaluations$Delete,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    delete(
      params: Params$Resource$Projects$Locations$Evaluations$Delete,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    delete(callback: BodyResponseCallback<Schema$Operation>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Evaluations$Delete
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
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$Operation>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Evaluations$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Evaluations$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://workloadmanager.googleapis.com/';
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
        createAPIRequest<Schema$Operation>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Operation>(parameters);
      }
    }

    /**
     * Gets details of a single Evaluation.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/workloadmanager.googleapis.com
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
     * const workloadmanager = google.workloadmanager('v1');
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
     *   const res = await workloadmanager.projects.locations.evaluations.get({
     *     // Required. Name of the resource
     *     name: 'projects/my-project/locations/my-location/evaluations/my-evaluation',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "bigQueryDestination": {},
     *   //   "createTime": "my_createTime",
     *   //   "customRulesBucket": "my_customRulesBucket",
     *   //   "description": "my_description",
     *   //   "evaluationType": "my_evaluationType",
     *   //   "kmsKey": "my_kmsKey",
     *   //   "labels": {},
     *   //   "name": "my_name",
     *   //   "resourceFilter": {},
     *   //   "resourceStatus": {},
     *   //   "ruleNames": [],
     *   //   "ruleVersions": [],
     *   //   "schedule": "my_schedule",
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
      params: Params$Resource$Projects$Locations$Evaluations$Get,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    get(
      params?: Params$Resource$Projects$Locations$Evaluations$Get,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Evaluation>>;
    get(
      params: Params$Resource$Projects$Locations$Evaluations$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Evaluations$Get,
      options: MethodOptions | BodyResponseCallback<Schema$Evaluation>,
      callback: BodyResponseCallback<Schema$Evaluation>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Evaluations$Get,
      callback: BodyResponseCallback<Schema$Evaluation>
    ): void;
    get(callback: BodyResponseCallback<Schema$Evaluation>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Evaluations$Get
        | BodyResponseCallback<Schema$Evaluation>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Evaluation>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Evaluation>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$Evaluation>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Evaluations$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Evaluations$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://workloadmanager.googleapis.com/';
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
        createAPIRequest<Schema$Evaluation>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Evaluation>(parameters);
      }
    }

    /**
     * Lists Evaluations in a given project and location.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/workloadmanager.googleapis.com
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
     * const workloadmanager = google.workloadmanager('v1');
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
     *   const res = await workloadmanager.projects.locations.evaluations.list({
     *     // Filter to be applied when listing the evaluation results.
     *     filter: 'placeholder-value',
     *     // Hint for how to order the results
     *     orderBy: 'placeholder-value',
     *     // Requested page size. Server may return fewer items than requested. If unspecified, server will pick an appropriate default.
     *     pageSize: 'placeholder-value',
     *     // A token identifying a page of results the server should return.
     *     pageToken: 'placeholder-value',
     *     // Required. Parent value for ListEvaluationsRequest
     *     parent: 'projects/my-project/locations/my-location',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "evaluations": [],
     *   //   "nextPageToken": "my_nextPageToken",
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
      params: Params$Resource$Projects$Locations$Evaluations$List,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    list(
      params?: Params$Resource$Projects$Locations$Evaluations$List,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$ListEvaluationsResponse>>;
    list(
      params: Params$Resource$Projects$Locations$Evaluations$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Evaluations$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ListEvaluationsResponse>,
      callback: BodyResponseCallback<Schema$ListEvaluationsResponse>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Evaluations$List,
      callback: BodyResponseCallback<Schema$ListEvaluationsResponse>
    ): void;
    list(callback: BodyResponseCallback<Schema$ListEvaluationsResponse>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Evaluations$List
        | BodyResponseCallback<Schema$ListEvaluationsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ListEvaluationsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ListEvaluationsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$ListEvaluationsResponse>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Evaluations$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Evaluations$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://workloadmanager.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}/evaluations').replace(
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
        createAPIRequest<Schema$ListEvaluationsResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ListEvaluationsResponse>(parameters);
      }
    }

    /**
     * Updates the parameters of a single Evaluation.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/workloadmanager.googleapis.com
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
     * const workloadmanager = google.workloadmanager('v1');
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
     *   const res = await workloadmanager.projects.locations.evaluations.patch({
     *     // name of resource names have the form 'projects/{project_id\}/locations/{location_id\}/evaluations/{evaluation_id\}'
     *     name: 'projects/my-project/locations/my-location/evaluations/my-evaluation',
     *     // Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
     *     requestId: 'placeholder-value',
     *     // Required. Field mask is used to specify the fields to be overwritten in the Evaluation resource by the update. The fields specified in the update_mask are relative to the resource, not the full request. A field will be overwritten if it is in the mask.
     *     updateMask: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "bigQueryDestination": {},
     *       //   "createTime": "my_createTime",
     *       //   "customRulesBucket": "my_customRulesBucket",
     *       //   "description": "my_description",
     *       //   "evaluationType": "my_evaluationType",
     *       //   "kmsKey": "my_kmsKey",
     *       //   "labels": {},
     *       //   "name": "my_name",
     *       //   "resourceFilter": {},
     *       //   "resourceStatus": {},
     *       //   "ruleNames": [],
     *       //   "ruleVersions": [],
     *       //   "schedule": "my_schedule",
     *       //   "updateTime": "my_updateTime"
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
      params: Params$Resource$Projects$Locations$Evaluations$Patch,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    patch(
      params?: Params$Resource$Projects$Locations$Evaluations$Patch,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Operation>>;
    patch(
      params: Params$Resource$Projects$Locations$Evaluations$Patch,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    patch(
      params: Params$Resource$Projects$Locations$Evaluations$Patch,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    patch(
      params: Params$Resource$Projects$Locations$Evaluations$Patch,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    patch(callback: BodyResponseCallback<Schema$Operation>): void;
    patch(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Evaluations$Patch
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
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$Operation>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Evaluations$Patch;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Evaluations$Patch;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://workloadmanager.googleapis.com/';
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
        createAPIRequest<Schema$Operation>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Operation>(parameters);
      }
    }
  }

  export interface Params$Resource$Projects$Locations$Evaluations$Create extends StandardParameters {
    /**
     * Required. Id of the requesting object
     */
    evaluationId?: string;
    /**
     * Required. The resource prefix of the evaluation location using the form: `projects/{project_id\}/locations/{location_id\}`
     */
    parent?: string;
    /**
     * Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
     */
    requestId?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$Evaluation;
  }
  export interface Params$Resource$Projects$Locations$Evaluations$Delete extends StandardParameters {
    /**
     * Optional. Followed the best practice from https://aip.dev/135#cascading-delete
     */
    force?: boolean;
    /**
     * Required. Name of the resource
     */
    name?: string;
    /**
     * Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes after the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
     */
    requestId?: string;
  }
  export interface Params$Resource$Projects$Locations$Evaluations$Get extends StandardParameters {
    /**
     * Required. Name of the resource
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Locations$Evaluations$List extends StandardParameters {
    /**
     * Filter to be applied when listing the evaluation results.
     */
    filter?: string;
    /**
     * Hint for how to order the results
     */
    orderBy?: string;
    /**
     * Requested page size. Server may return fewer items than requested. If unspecified, server will pick an appropriate default.
     */
    pageSize?: number;
    /**
     * A token identifying a page of results the server should return.
     */
    pageToken?: string;
    /**
     * Required. Parent value for ListEvaluationsRequest
     */
    parent?: string;
  }
  export interface Params$Resource$Projects$Locations$Evaluations$Patch extends StandardParameters {
    /**
     * name of resource names have the form 'projects/{project_id\}/locations/{location_id\}/evaluations/{evaluation_id\}'
     */
    name?: string;
    /**
     * Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
     */
    requestId?: string;
    /**
     * Required. Field mask is used to specify the fields to be overwritten in the Evaluation resource by the update. The fields specified in the update_mask are relative to the resource, not the full request. A field will be overwritten if it is in the mask.
     */
    updateMask?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$Evaluation;
  }

  export class Resource$Projects$Locations$Evaluations$Executions {
    context: APIRequestContext;
    results: Resource$Projects$Locations$Evaluations$Executions$Results;
    scannedResources: Resource$Projects$Locations$Evaluations$Executions$Scannedresources;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.results =
        new Resource$Projects$Locations$Evaluations$Executions$Results(
          this.context
        );
      this.scannedResources =
        new Resource$Projects$Locations$Evaluations$Executions$Scannedresources(
          this.context
        );
    }

    /**
     * Deletes a single Execution.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/workloadmanager.googleapis.com
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
     * const workloadmanager = google.workloadmanager('v1');
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
     *     await workloadmanager.projects.locations.evaluations.executions.delete({
     *       // Required. Name of the resource
     *       name: 'projects/my-project/locations/my-location/evaluations/my-evaluation/executions/my-execution',
     *       // Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes after the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
     *       requestId: 'placeholder-value',
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
    delete(
      params: Params$Resource$Projects$Locations$Evaluations$Executions$Delete,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    delete(
      params?: Params$Resource$Projects$Locations$Evaluations$Executions$Delete,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Operation>>;
    delete(
      params: Params$Resource$Projects$Locations$Evaluations$Executions$Delete,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    delete(
      params: Params$Resource$Projects$Locations$Evaluations$Executions$Delete,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    delete(
      params: Params$Resource$Projects$Locations$Evaluations$Executions$Delete,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    delete(callback: BodyResponseCallback<Schema$Operation>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Evaluations$Executions$Delete
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
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$Operation>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Evaluations$Executions$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Evaluations$Executions$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://workloadmanager.googleapis.com/';
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
        createAPIRequest<Schema$Operation>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Operation>(parameters);
      }
    }

    /**
     * Gets details of a single Execution.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/workloadmanager.googleapis.com
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
     * const workloadmanager = google.workloadmanager('v1');
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
     *     await workloadmanager.projects.locations.evaluations.executions.get({
     *       // Required. Name of the resource
     *       name: 'projects/my-project/locations/my-location/evaluations/my-evaluation/executions/my-execution',
     *     });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "endTime": "my_endTime",
     *   //   "engine": "my_engine",
     *   //   "evaluationId": "my_evaluationId",
     *   //   "externalDataSources": [],
     *   //   "inventoryTime": "my_inventoryTime",
     *   //   "labels": {},
     *   //   "name": "my_name",
     *   //   "notices": [],
     *   //   "resultSummary": {},
     *   //   "ruleResults": [],
     *   //   "runType": "my_runType",
     *   //   "startTime": "my_startTime",
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
    get(
      params: Params$Resource$Projects$Locations$Evaluations$Executions$Get,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    get(
      params?: Params$Resource$Projects$Locations$Evaluations$Executions$Get,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Execution>>;
    get(
      params: Params$Resource$Projects$Locations$Evaluations$Executions$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Evaluations$Executions$Get,
      options: MethodOptions | BodyResponseCallback<Schema$Execution>,
      callback: BodyResponseCallback<Schema$Execution>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Evaluations$Executions$Get,
      callback: BodyResponseCallback<Schema$Execution>
    ): void;
    get(callback: BodyResponseCallback<Schema$Execution>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Evaluations$Executions$Get
        | BodyResponseCallback<Schema$Execution>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Execution>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Execution>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$Execution>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Evaluations$Executions$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Evaluations$Executions$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://workloadmanager.googleapis.com/';
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
        createAPIRequest<Schema$Execution>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Execution>(parameters);
      }
    }

    /**
     * Lists Executions in a given project and location.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/workloadmanager.googleapis.com
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
     * const workloadmanager = google.workloadmanager('v1');
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
     *     await workloadmanager.projects.locations.evaluations.executions.list({
     *       // Filtering results
     *       filter: 'placeholder-value',
     *       // Field to sort by. See https://google.aip.dev/132#ordering for more details.
     *       orderBy: 'placeholder-value',
     *       // Requested page size. Server may return fewer items than requested. If unspecified, server will pick an appropriate default.
     *       pageSize: 'placeholder-value',
     *       // A token identifying a page of results the server should return.
     *       pageToken: 'placeholder-value',
     *       // Required. The resource prefix of the Execution using the form: 'projects/{project\}/locations/{location\}/evaluations/{evaluation\}'
     *       parent:
     *         'projects/my-project/locations/my-location/evaluations/my-evaluation',
     *     });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "executions": [],
     *   //   "nextPageToken": "my_nextPageToken",
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
      params: Params$Resource$Projects$Locations$Evaluations$Executions$List,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    list(
      params?: Params$Resource$Projects$Locations$Evaluations$Executions$List,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$ListExecutionsResponse>>;
    list(
      params: Params$Resource$Projects$Locations$Evaluations$Executions$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Evaluations$Executions$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ListExecutionsResponse>,
      callback: BodyResponseCallback<Schema$ListExecutionsResponse>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Evaluations$Executions$List,
      callback: BodyResponseCallback<Schema$ListExecutionsResponse>
    ): void;
    list(callback: BodyResponseCallback<Schema$ListExecutionsResponse>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Evaluations$Executions$List
        | BodyResponseCallback<Schema$ListExecutionsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ListExecutionsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ListExecutionsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$ListExecutionsResponse>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Evaluations$Executions$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Evaluations$Executions$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://workloadmanager.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}/executions').replace(
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
        createAPIRequest<Schema$ListExecutionsResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ListExecutionsResponse>(parameters);
      }
    }

    /**
     * Creates a new Execution in a given project and location.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/workloadmanager.googleapis.com
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
     * const workloadmanager = google.workloadmanager('v1');
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
     *     await workloadmanager.projects.locations.evaluations.executions.run({
     *       // Required. The resource name of the Execution using the form: 'projects/{project\}/locations/{location\}/evaluations/{evaluation\}/executions/{execution\}'
     *       name: 'projects/my-project/locations/my-location/evaluations/my-evaluation',
     *
     *       // Request body metadata
     *       requestBody: {
     *         // request body parameters
     *         // {
     *         //   "execution": {},
     *         //   "executionId": "my_executionId",
     *         //   "requestId": "my_requestId"
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
    run(
      params: Params$Resource$Projects$Locations$Evaluations$Executions$Run,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    run(
      params?: Params$Resource$Projects$Locations$Evaluations$Executions$Run,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Operation>>;
    run(
      params: Params$Resource$Projects$Locations$Evaluations$Executions$Run,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    run(
      params: Params$Resource$Projects$Locations$Evaluations$Executions$Run,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    run(
      params: Params$Resource$Projects$Locations$Evaluations$Executions$Run,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    run(callback: BodyResponseCallback<Schema$Operation>): void;
    run(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Evaluations$Executions$Run
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
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$Operation>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Evaluations$Executions$Run;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Evaluations$Executions$Run;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://workloadmanager.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}/executions:run').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
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
        createAPIRequest<Schema$Operation>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Operation>(parameters);
      }
    }
  }

  export interface Params$Resource$Projects$Locations$Evaluations$Executions$Delete extends StandardParameters {
    /**
     * Required. Name of the resource
     */
    name?: string;
    /**
     * Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes after the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
     */
    requestId?: string;
  }
  export interface Params$Resource$Projects$Locations$Evaluations$Executions$Get extends StandardParameters {
    /**
     * Required. Name of the resource
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Locations$Evaluations$Executions$List extends StandardParameters {
    /**
     * Filtering results
     */
    filter?: string;
    /**
     * Field to sort by. See https://google.aip.dev/132#ordering for more details.
     */
    orderBy?: string;
    /**
     * Requested page size. Server may return fewer items than requested. If unspecified, server will pick an appropriate default.
     */
    pageSize?: number;
    /**
     * A token identifying a page of results the server should return.
     */
    pageToken?: string;
    /**
     * Required. The resource prefix of the Execution using the form: 'projects/{project\}/locations/{location\}/evaluations/{evaluation\}'
     */
    parent?: string;
  }
  export interface Params$Resource$Projects$Locations$Evaluations$Executions$Run extends StandardParameters {
    /**
     * Required. The resource name of the Execution using the form: 'projects/{project\}/locations/{location\}/evaluations/{evaluation\}/executions/{execution\}'
     */
    name?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$RunEvaluationRequest;
  }

  export class Resource$Projects$Locations$Evaluations$Executions$Results {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Lists the result of a single evaluation.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/workloadmanager.googleapis.com
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
     * const workloadmanager = google.workloadmanager('v1');
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
     *     await workloadmanager.projects.locations.evaluations.executions.results.list(
     *       {
     *         // Filtering results
     *         filter: 'placeholder-value',
     *         // Requested page size. Server may return fewer items than requested. If unspecified, server will pick an appropriate default.
     *         pageSize: 'placeholder-value',
     *         // A token identifying a page of results the server should return.
     *         pageToken: 'placeholder-value',
     *         // Required. The execution results. Format: {parent\}/evaluations/x/executions/x/results
     *         parent:
     *           'projects/my-project/locations/my-location/evaluations/my-evaluation/executions/my-execution',
     *       },
     *     );
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "executionResults": [],
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
      params: Params$Resource$Projects$Locations$Evaluations$Executions$Results$List,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    list(
      params?: Params$Resource$Projects$Locations$Evaluations$Executions$Results$List,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$ListExecutionResultsResponse>>;
    list(
      params: Params$Resource$Projects$Locations$Evaluations$Executions$Results$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Evaluations$Executions$Results$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ListExecutionResultsResponse>,
      callback: BodyResponseCallback<Schema$ListExecutionResultsResponse>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Evaluations$Executions$Results$List,
      callback: BodyResponseCallback<Schema$ListExecutionResultsResponse>
    ): void;
    list(
      callback: BodyResponseCallback<Schema$ListExecutionResultsResponse>
    ): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Evaluations$Executions$Results$List
        | BodyResponseCallback<Schema$ListExecutionResultsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ListExecutionResultsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ListExecutionResultsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$ListExecutionResultsResponse>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Evaluations$Executions$Results$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Evaluations$Executions$Results$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://workloadmanager.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}/results').replace(
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
        createAPIRequest<Schema$ListExecutionResultsResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ListExecutionResultsResponse>(
          parameters
        );
      }
    }
  }

  export interface Params$Resource$Projects$Locations$Evaluations$Executions$Results$List extends StandardParameters {
    /**
     * Filtering results
     */
    filter?: string;
    /**
     * Requested page size. Server may return fewer items than requested. If unspecified, server will pick an appropriate default.
     */
    pageSize?: number;
    /**
     * A token identifying a page of results the server should return.
     */
    pageToken?: string;
    /**
     * Required. The execution results. Format: {parent\}/evaluations/x/executions/x/results
     */
    parent?: string;
  }

  export class Resource$Projects$Locations$Evaluations$Executions$Scannedresources {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * List all scanned resources for a single Execution.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/workloadmanager.googleapis.com
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
     * const workloadmanager = google.workloadmanager('v1');
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
     *     await workloadmanager.projects.locations.evaluations.executions.scannedResources.list(
     *       {
     *         // Filtering results
     *         filter: 'placeholder-value',
     *         // Field to sort by. See https://google.aip.dev/132#ordering for more details.
     *         orderBy: 'placeholder-value',
     *         // Requested page size. Server may return fewer items than requested. If unspecified, server will pick an appropriate default.
     *         pageSize: 'placeholder-value',
     *         // A token identifying a page of results the server should return.
     *         pageToken: 'placeholder-value',
     *         // Required. parent for ListScannedResourcesRequest
     *         parent:
     *           'projects/my-project/locations/my-location/evaluations/my-evaluation/executions/my-execution',
     *         // rule name
     *         rule: 'placeholder-value',
     *       },
     *     );
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "nextPageToken": "my_nextPageToken",
     *   //   "scannedResources": []
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
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
      params: Params$Resource$Projects$Locations$Evaluations$Executions$Scannedresources$List,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    list(
      params?: Params$Resource$Projects$Locations$Evaluations$Executions$Scannedresources$List,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$ListScannedResourcesResponse>>;
    list(
      params: Params$Resource$Projects$Locations$Evaluations$Executions$Scannedresources$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Evaluations$Executions$Scannedresources$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ListScannedResourcesResponse>,
      callback: BodyResponseCallback<Schema$ListScannedResourcesResponse>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Evaluations$Executions$Scannedresources$List,
      callback: BodyResponseCallback<Schema$ListScannedResourcesResponse>
    ): void;
    list(
      callback: BodyResponseCallback<Schema$ListScannedResourcesResponse>
    ): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Evaluations$Executions$Scannedresources$List
        | BodyResponseCallback<Schema$ListScannedResourcesResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ListScannedResourcesResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ListScannedResourcesResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$ListScannedResourcesResponse>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Evaluations$Executions$Scannedresources$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Evaluations$Executions$Scannedresources$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://workloadmanager.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}/scannedResources').replace(
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
        createAPIRequest<Schema$ListScannedResourcesResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ListScannedResourcesResponse>(
          parameters
        );
      }
    }
  }

  export interface Params$Resource$Projects$Locations$Evaluations$Executions$Scannedresources$List extends StandardParameters {
    /**
     * Filtering results
     */
    filter?: string;
    /**
     * Field to sort by. See https://google.aip.dev/132#ordering for more details.
     */
    orderBy?: string;
    /**
     * Requested page size. Server may return fewer items than requested. If unspecified, server will pick an appropriate default.
     */
    pageSize?: number;
    /**
     * A token identifying a page of results the server should return.
     */
    pageToken?: string;
    /**
     * Required. parent for ListScannedResourcesRequest
     */
    parent?: string;
    /**
     * rule name
     */
    rule?: string;
  }

  export class Resource$Projects$Locations$Insights {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Delete the data insights from workload manager data warehouse.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/workloadmanager.googleapis.com
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
     * const workloadmanager = google.workloadmanager('v1');
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
     *   const res = await workloadmanager.projects.locations.insights.delete({
     *     // Required. The system id of the SAP system resource to delete. Formatted as projects/{project\}/locations/{location\}/sapSystems/{sap_system_id\}
     *     name: 'projects/my-project/locations/my-location/insights/my-insight',
     *     // Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
     *     requestId: 'placeholder-value',
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
      params: Params$Resource$Projects$Locations$Insights$Delete,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    delete(
      params?: Params$Resource$Projects$Locations$Insights$Delete,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Empty>>;
    delete(
      params: Params$Resource$Projects$Locations$Insights$Delete,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    delete(
      params: Params$Resource$Projects$Locations$Insights$Delete,
      options: MethodOptions | BodyResponseCallback<Schema$Empty>,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    delete(
      params: Params$Resource$Projects$Locations$Insights$Delete,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    delete(callback: BodyResponseCallback<Schema$Empty>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Insights$Delete
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
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$Empty>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Insights$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Insights$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://workloadmanager.googleapis.com/';
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
     * Write the data insights to workload manager data warehouse.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/workloadmanager.googleapis.com
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
     * const workloadmanager = google.workloadmanager('v1');
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
     *   const res = await workloadmanager.projects.locations.insights.writeInsight({
     *     // Required. The GCP location. The format is: projects/{project\}/locations/{location\}.
     *     location: 'projects/my-project/locations/my-location',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "agentVersion": "my_agentVersion",
     *       //   "insight": {},
     *       //   "requestId": "my_requestId"
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
    writeInsight(
      params: Params$Resource$Projects$Locations$Insights$Writeinsight,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    writeInsight(
      params?: Params$Resource$Projects$Locations$Insights$Writeinsight,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$WriteInsightResponse>>;
    writeInsight(
      params: Params$Resource$Projects$Locations$Insights$Writeinsight,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    writeInsight(
      params: Params$Resource$Projects$Locations$Insights$Writeinsight,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$WriteInsightResponse>,
      callback: BodyResponseCallback<Schema$WriteInsightResponse>
    ): void;
    writeInsight(
      params: Params$Resource$Projects$Locations$Insights$Writeinsight,
      callback: BodyResponseCallback<Schema$WriteInsightResponse>
    ): void;
    writeInsight(
      callback: BodyResponseCallback<Schema$WriteInsightResponse>
    ): void;
    writeInsight(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Insights$Writeinsight
        | BodyResponseCallback<Schema$WriteInsightResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$WriteInsightResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$WriteInsightResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$WriteInsightResponse>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Insights$Writeinsight;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Insights$Writeinsight;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://workloadmanager.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+location}/insights:writeInsight').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['location'],
        pathParams: ['location'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$WriteInsightResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$WriteInsightResponse>(parameters);
      }
    }
  }

  export interface Params$Resource$Projects$Locations$Insights$Delete extends StandardParameters {
    /**
     * Required. The system id of the SAP system resource to delete. Formatted as projects/{project\}/locations/{location\}/sapSystems/{sap_system_id\}
     */
    name?: string;
    /**
     * Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
     */
    requestId?: string;
  }
  export interface Params$Resource$Projects$Locations$Insights$Writeinsight extends StandardParameters {
    /**
     * Required. The GCP location. The format is: projects/{project\}/locations/{location\}.
     */
    location?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$WriteInsightRequest;
  }

  export class Resource$Projects$Locations$Operations {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of `1`, corresponding to `Code.CANCELLED`.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/workloadmanager.googleapis.com
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
     * const workloadmanager = google.workloadmanager('v1');
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
     *   const res = await workloadmanager.projects.locations.operations.cancel({
     *     // The name of the operation resource to be cancelled.
     *     name: 'projects/my-project/locations/my-location/operations/my-operation',
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
      params: Params$Resource$Projects$Locations$Operations$Cancel,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    cancel(
      params?: Params$Resource$Projects$Locations$Operations$Cancel,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Empty>>;
    cancel(
      params: Params$Resource$Projects$Locations$Operations$Cancel,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    cancel(
      params: Params$Resource$Projects$Locations$Operations$Cancel,
      options: MethodOptions | BodyResponseCallback<Schema$Empty>,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    cancel(
      params: Params$Resource$Projects$Locations$Operations$Cancel,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    cancel(callback: BodyResponseCallback<Schema$Empty>): void;
    cancel(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Operations$Cancel
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
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$Empty>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Operations$Cancel;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Operations$Cancel;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://workloadmanager.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}:cancel').replace(/([^:]\/)\/+/g, '$1'),
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
     * Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/workloadmanager.googleapis.com
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
     * const workloadmanager = google.workloadmanager('v1');
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
     *   const res = await workloadmanager.projects.locations.operations.delete({
     *     // The name of the operation resource to be deleted.
     *     name: 'projects/my-project/locations/my-location/operations/my-operation',
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
      params: Params$Resource$Projects$Locations$Operations$Delete,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    delete(
      params?: Params$Resource$Projects$Locations$Operations$Delete,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Empty>>;
    delete(
      params: Params$Resource$Projects$Locations$Operations$Delete,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    delete(
      params: Params$Resource$Projects$Locations$Operations$Delete,
      options: MethodOptions | BodyResponseCallback<Schema$Empty>,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    delete(
      params: Params$Resource$Projects$Locations$Operations$Delete,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    delete(callback: BodyResponseCallback<Schema$Empty>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Operations$Delete
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
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$Empty>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Operations$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Operations$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://workloadmanager.googleapis.com/';
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
     * Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/workloadmanager.googleapis.com
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
     * const workloadmanager = google.workloadmanager('v1');
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
     *   const res = await workloadmanager.projects.locations.operations.get({
     *     // The name of the operation resource.
     *     name: 'projects/my-project/locations/my-location/operations/my-operation',
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
      params: Params$Resource$Projects$Locations$Operations$Get,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    get(
      params?: Params$Resource$Projects$Locations$Operations$Get,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Operation>>;
    get(
      params: Params$Resource$Projects$Locations$Operations$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Operations$Get,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Operations$Get,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    get(callback: BodyResponseCallback<Schema$Operation>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Operations$Get
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
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$Operation>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Operations$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Operations$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://workloadmanager.googleapis.com/';
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
        createAPIRequest<Schema$Operation>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Operation>(parameters);
      }
    }

    /**
     * Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/workloadmanager.googleapis.com
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
     * const workloadmanager = google.workloadmanager('v1');
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
     *   const res = await workloadmanager.projects.locations.operations.list({
     *     // The standard list filter.
     *     filter: 'placeholder-value',
     *     // The name of the operation's parent resource.
     *     name: 'projects/my-project/locations/my-location',
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
      params: Params$Resource$Projects$Locations$Operations$List,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    list(
      params?: Params$Resource$Projects$Locations$Operations$List,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$ListOperationsResponse>>;
    list(
      params: Params$Resource$Projects$Locations$Operations$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Operations$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ListOperationsResponse>,
      callback: BodyResponseCallback<Schema$ListOperationsResponse>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Operations$List,
      callback: BodyResponseCallback<Schema$ListOperationsResponse>
    ): void;
    list(callback: BodyResponseCallback<Schema$ListOperationsResponse>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Operations$List
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
        {}) as Params$Resource$Projects$Locations$Operations$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Operations$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://workloadmanager.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}/operations').replace(
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
        createAPIRequest<Schema$ListOperationsResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ListOperationsResponse>(parameters);
      }
    }
  }

  export interface Params$Resource$Projects$Locations$Operations$Cancel extends StandardParameters {
    /**
     * The name of the operation resource to be cancelled.
     */
    name?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$CancelOperationRequest;
  }
  export interface Params$Resource$Projects$Locations$Operations$Delete extends StandardParameters {
    /**
     * The name of the operation resource to be deleted.
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Locations$Operations$Get extends StandardParameters {
    /**
     * The name of the operation resource.
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Locations$Operations$List extends StandardParameters {
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

  export class Resource$Projects$Locations$Rules {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Lists rules in a given project.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/workloadmanager.googleapis.com
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
     * const workloadmanager = google.workloadmanager('v1');
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
     *   const res = await workloadmanager.projects.locations.rules.list({
     *     // The Cloud Storage bucket name for custom rules.
     *     customRulesBucket: 'placeholder-value',
     *     // Optional. The evaluation type of the rules will be applied to. The Cloud Storage bucket name for custom rules.
     *     evaluationType: 'placeholder-value',
     *     // Filter based on primary_category, secondary_category
     *     filter: 'placeholder-value',
     *     // Requested page size. Server may return fewer items than requested. If unspecified, server will pick an appropriate default.
     *     pageSize: 'placeholder-value',
     *     // A token identifying a page of results the server should return.
     *     pageToken: 'placeholder-value',
     *     // Required. The [project] on which to execute the request. The format is: projects/{project_id\}/locations/{location\} Currently, the pre-defined rules are global available to all projects and all regions
     *     parent: 'projects/my-project/locations/my-location',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "invalidRulesWrapper": {},
     *   //   "rules": []
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
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
      params: Params$Resource$Projects$Locations$Rules$List,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    list(
      params?: Params$Resource$Projects$Locations$Rules$List,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$ListRulesResponse>>;
    list(
      params: Params$Resource$Projects$Locations$Rules$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Rules$List,
      options: MethodOptions | BodyResponseCallback<Schema$ListRulesResponse>,
      callback: BodyResponseCallback<Schema$ListRulesResponse>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Rules$List,
      callback: BodyResponseCallback<Schema$ListRulesResponse>
    ): void;
    list(callback: BodyResponseCallback<Schema$ListRulesResponse>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Rules$List
        | BodyResponseCallback<Schema$ListRulesResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ListRulesResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ListRulesResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$ListRulesResponse>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Rules$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Rules$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://workloadmanager.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}/rules').replace(
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
        createAPIRequest<Schema$ListRulesResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ListRulesResponse>(parameters);
      }
    }
  }

  export interface Params$Resource$Projects$Locations$Rules$List extends StandardParameters {
    /**
     * The Cloud Storage bucket name for custom rules.
     */
    customRulesBucket?: string;
    /**
     * Optional. The evaluation type of the rules will be applied to. The Cloud Storage bucket name for custom rules.
     */
    evaluationType?: string;
    /**
     * Filter based on primary_category, secondary_category
     */
    filter?: string;
    /**
     * Requested page size. Server may return fewer items than requested. If unspecified, server will pick an appropriate default.
     */
    pageSize?: number;
    /**
     * A token identifying a page of results the server should return.
     */
    pageToken?: string;
    /**
     * Required. The [project] on which to execute the request. The format is: projects/{project_id\}/locations/{location\} Currently, the pre-defined rules are global available to all projects and all regions
     */
    parent?: string;
  }
}
