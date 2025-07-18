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

export namespace connectors_v2 {
  export interface Options extends GlobalOptions {
    version: 'v2';
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
   * Connectors API
   *
   * Enables users to create and manage connections to Google Cloud services and third-party business applications using the Connectors interface.
   *
   * @example
   * ```js
   * const {google} = require('googleapis');
   * const connectors = google.connectors('v2');
   * ```
   */
  export class Connectors {
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
   * AccessCredentials includes the OAuth access token, and the other fields returned along with it.
   */
  export interface Schema$AccessCredentials {
    /**
     * OAuth access token.
     */
    accessToken?: string | null;
    /**
     * Duration till the access token expires.
     */
    expiresIn?: string | null;
    /**
     * OAuth refresh token.
     */
    refreshToken?: string | null;
  }
  /**
   * Action message contains metadata information about a single action present in the external system.
   */
  export interface Schema$Action {
    /**
     * Brief Description of action
     */
    description?: string | null;
    /**
     * Display Name of action to be shown on client side
     */
    displayName?: string | null;
    /**
     * JsonSchema representation of this actions's input schema
     */
    inputJsonSchema?: Schema$JsonSchema;
    /**
     * List containing input parameter metadata.
     */
    inputParameters?: Schema$InputParameter[];
    /**
     * Name of the action.
     */
    name?: string | null;
    /**
     * JsonSchema representation of this actions's result schema
     */
    resultJsonSchema?: Schema$JsonSchema;
    /**
     * List containing the metadata of result fields.
     */
    resultMetadata?: Schema$ResultMetadata[];
  }
  /**
   * AuthCodeData contains the data the runtime plane will give the connector backend in exchange for access and refresh tokens.
   */
  export interface Schema$AuthCodeData {
    /**
     * OAuth authorization code.
     */
    authCode?: string | null;
    /**
     * OAuth PKCE verifier, needed if PKCE is enabled for this particular connection.
     */
    pkceVerifier?: string | null;
    /**
     * OAuth redirect URI passed in during the auth code flow, required by some OAuth backends.
     */
    redirectUri?: string | null;
    /**
     * Scopes the connection will request when the user performs the auth code flow.
     */
    scopes?: string[] | null;
  }
  /**
   * Response containing status of the connector for readiness prober.
   */
  export interface Schema$CheckReadinessResponse {
    status?: string | null;
  }
  /**
   * The status of the connector.
   */
  export interface Schema$CheckStatusResponse {
    /**
     * When the connector is not in ACTIVE state, the description must be populated to specify the reason why it's not in ACTIVE state.
     */
    description?: string | null;
    /**
     * State of the connector.
     */
    state?: string | null;
  }
  /**
   * Time window specified for daily operations.
   */
  export interface Schema$DailyCycle {
    /**
     * Output only. Duration of the time window, set by service producer.
     */
    duration?: string | null;
    /**
     * Time within the day to start the operations.
     */
    startTime?: Schema$TimeOfDay;
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
   * DenyMaintenancePeriod definition. Maintenance is forbidden within the deny period. The start_date must be less than the end_date.
   */
  export interface Schema$DenyMaintenancePeriod {
    /**
     * Deny period end date. This can be: * A full date, with non-zero year, month and day values. * A month and day value, with a zero year. Allows recurring deny periods each year. Date matching this period will have to be before the end.
     */
    endDate?: Schema$Date;
    /**
     * Deny period start date. This can be: * A full date, with non-zero year, month and day values. * A month and day value, with a zero year. Allows recurring deny periods each year. Date matching this period will have to be the same or after the start.
     */
    startDate?: Schema$Date;
    /**
     * Time in UTC when the Blackout period starts on start_date and ends on end_date. This can be: * Full time. * All zeros for 00:00:00 UTC
     */
    time?: Schema$TimeOfDay;
  }
  /**
   * A generic empty message that you can re-use to avoid defining duplicated empty messages in your APIs. A typical example is to use it as the request or the response type of an API method. For instance: service Foo { rpc Bar(google.protobuf.Empty) returns (google.protobuf.Empty); \}
   */
  export interface Schema$Empty {}
  /**
   * 'Entity row'/ 'Entity' refers to a single row of an entity type.
   */
  export interface Schema$Entity {
    /**
     * Fields of the entity. The key is name of the field and the value contains the applicable `google.protobuf.Value` entry for this field.
     */
    fields?: {[key: string]: any} | null;
    /**
     * Output only. Resource name of the Entity. Format: projects/{project\}/locations/{location\}/connections/{connection\}/entityTypes/{type\}/entities/{id\}
     */
    name?: string | null;
  }
  /**
   * EntityType message contains metadata information about a single entity type present in the external system.
   */
  export interface Schema$EntityType {
    /**
     * List containing metadata information about each field of the entity type.
     */
    fields?: Schema$Field[];
    /**
     * JsonSchema representation of this entity's schema
     */
    jsonSchema?: Schema$JsonSchema;
    /**
     * The name of the entity type.
     */
    name?: string | null;
    operations?: string[] | null;
  }
  /**
   * ExchangeAuthCodeRequest currently includes the auth code data.
   */
  export interface Schema$ExchangeAuthCodeRequest {
    /**
     * Optional. AuthCodeData contains the data the runtime requires to exchange for access and refresh tokens. If the data is not provided, the runtime will read the data from the secret manager.
     */
    authCodeData?: Schema$AuthCodeData;
  }
  /**
   * ExchangeAuthCodeResponse includes the returned access token and its associated credentials.
   */
  export interface Schema$ExchangeAuthCodeResponse {
    accessCredentials?: Schema$AccessCredentials;
  }
  /**
   * Request message for ActionService.ExecuteAction
   */
  export interface Schema$ExecuteActionRequest {
    /**
     * Parameters for executing the action. The parameters can be key/value pairs or nested structs.
     */
    parameters?: {[key: string]: any} | null;
  }
  /**
   * Response message for ActionService.ExecuteAction
   */
  export interface Schema$ExecuteActionResponse {
    /**
     * In the case of successful invocation of the specified action, the results Struct contains values based on the response of the action invoked. 1. If the action execution produces any entities as a result, they are returned as an array of Structs with the 'key' being the field name and the 'value' being the value of that field in each result row. { 'results': [{'key': 'value'\}, ...] \}
     */
    results?: Array<{[key: string]: any}> | null;
  }
  /**
   * An execute sql query request containing the query and the connection to execute it on.
   */
  export interface Schema$ExecuteSqlQueryRequest {
    /**
     * Required. SQL statement passed by clients like Integration Platform, the query is passed as-is to the driver used for interfacing with external systems.
     */
    query?: Schema$Query;
  }
  /**
   * A response returned by the connection after executing the sql query.
   */
  export interface Schema$ExecuteSqlQueryResponse {
    /**
     * In the case of successful execution of the query the response contains results returned by the external system. For example, the result rows of the query are contained in the 'results' Struct list - "results": [ { "field1": "val1", "field2": "val2",.. \},.. ] Each Struct row can contain fields any type of like nested Structs or lists.
     */
    results?: Array<{[key: string]: any}> | null;
  }
  /**
   * Message contains EntityType's Field metadata.
   */
  export interface Schema$Field {
    /**
     * The following map contains fields that are not explicitly mentioned above,this give connectors the flexibility to add new metadata fields.
     */
    additionalDetails?: {[key: string]: any} | null;
    /**
     * The data type of the Field.
     */
    dataType?: string | null;
    /**
     * The following field specifies the default value of the Field provided by the external system if a value is not provided.
     */
    defaultValue?: any | null;
    /**
     * A brief description of the Field.
     */
    description?: string | null;
    /**
     * JsonSchema of the field, applicable only if field is of type `STRUCT`
     */
    jsonSchema?: Schema$JsonSchema;
    /**
     * The following boolean field specifies if the current Field acts as a primary key or id if the parent is of type entity.
     */
    key?: boolean | null;
    /**
     * Name of the Field.
     */
    name?: string | null;
    /**
     * Specifies whether a null value is allowed.
     */
    nullable?: boolean | null;
    /**
     * Reference captures the association between two different entity types. Value links to the reference of another entity type.
     */
    reference?: Schema$Reference;
  }
  /**
   * Input Parameter message contains metadata about the parameters required for executing an Action.
   */
  export interface Schema$InputParameter {
    /**
     * The following map contains fields that are not explicitly mentioned above,this give connectors the flexibility to add new metadata fields.
     */
    additionalDetails?: {[key: string]: any} | null;
    /**
     * The data type of the Parameter
     */
    dataType?: string | null;
    /**
     * The following field specifies the default value of the Parameter provided by the external system if a value is not provided.
     */
    defaultValue?: any | null;
    /**
     * A brief description of the Parameter.
     */
    description?: string | null;
    /**
     * JsonSchema of the parameter, applicable only if parameter is of type `STRUCT`
     */
    jsonSchema?: Schema$JsonSchema;
    /**
     * Name of the Parameter.
     */
    name?: string | null;
    /**
     * Specifies whether a null value is allowed.
     */
    nullable?: boolean | null;
  }
  /**
   * Instance represents the interface for SLM services to actuate the state of control plane resources. Example Instance in JSON, where consumer-project-number=123456, producer-project-id=cloud-sql: ```json Instance: { "name": "projects/123456/locations/us-east1/instances/prod-instance", "create_time": { "seconds": 1526406431, \}, "labels": { "env": "prod", "foo": "bar" \}, "state": READY, "software_versions": { "software_update": "cloud-sql-09-28-2018", \}, "maintenance_policy_names": { "UpdatePolicy": "projects/123456/locations/us-east1/maintenancePolicies/prod-update-policy", \} "tenant_project_id": "cloud-sql-test-tenant", "producer_metadata": { "cloud-sql-tier": "basic", "cloud-sql-instance-size": "1G", \}, "provisioned_resources": [ { "resource-type": "compute-instance", "resource-url": "https://www.googleapis.com/compute/v1/projects/cloud-sql/zones/us-east1-b/instances/vm-1", \} ], "maintenance_schedules": { "csa_rollout": { "start_time": { "seconds": 1526406431, \}, "end_time": { "seconds": 1535406431, \}, \}, "ncsa_rollout": { "start_time": { "seconds": 1526406431, \}, "end_time": { "seconds": 1535406431, \}, \} \}, "consumer_defined_name": "my-sql-instance1", \} ``` LINT.IfChange
   */
  export interface Schema$Instance {
    /**
     * consumer_defined_name is the name of the instance set by the service consumers. Generally this is different from the `name` field which reperesents the system-assigned id of the instance which the service consumers do not recognize. This is a required field for tenants onboarding to Maintenance Window notifications (go/slm-rollout-maintenance-policies#prerequisites).
     */
    consumerDefinedName?: string | null;
    /**
     * Optional. The consumer_project_number associated with this Apigee instance. This field is added specifically to support Apigee integration with SLM Rollout and UMM. It represents the numerical project ID of the GCP project that consumes this Apigee instance. It is used for SLM rollout notifications and UMM integration, enabling proper mapping to customer projects and log delivery for Apigee instances. This field complements consumer_project_id and may be used for specific Apigee scenarios where the numerical ID is required.
     */
    consumerProjectNumber?: string | null;
    /**
     * Output only. Timestamp when the resource was created.
     */
    createTime?: string | null;
    /**
     * Optional. The instance_type of this instance of format: projects/{project_number\}/locations/{location_id\}/instanceTypes/{instance_type_id\}. Instance Type represents a high-level tier or SKU of the service that this instance belong to. When enabled(eg: Maintenance Rollout), Rollout uses 'instance_type' along with 'software_versions' to determine whether instance needs an update or not.
     */
    instanceType?: string | null;
    /**
     * Optional. Resource labels to represent user provided metadata. Each label is a key-value pair, where both the key and the value are arbitrary strings provided by the user.
     */
    labels?: {[key: string]: string} | null;
    /**
     * Optional. The MaintenancePolicies that have been attached to the instance. The key must be of the type name of the oneof policy name defined in MaintenancePolicy, and the referenced policy must define the same policy type. For details, please refer to go/mr-user-guide. Should not be set if maintenance_settings.maintenance_policies is set.
     */
    maintenancePolicyNames?: {[key: string]: string} | null;
    /**
     * The MaintenanceSchedule contains the scheduling information of published maintenance schedule with same key as software_versions.
     */
    maintenanceSchedules?: {[key: string]: Schema$MaintenanceSchedule} | null;
    /**
     * Optional. The MaintenanceSettings associated with instance.
     */
    maintenanceSettings?: Schema$MaintenanceSettings;
    /**
     * Unique name of the resource. It uses the form: `projects/{project_number\}/locations/{location_id\}/instances/{instance_id\}` Note: This name is passed, stored and logged across the rollout system. So use of consumer project_id or any other consumer PII in the name is strongly discouraged for wipeout (go/wipeout) compliance. See go/elysium/project_ids#storage-guidance for more details.
     */
    name?: string | null;
    /**
     * Optional. notification_parameter are information that service producers may like to include that is not relevant to Rollout. This parameter will only be passed to Gamma and Cloud Logging for notification/logging purpose.
     */
    notificationParameters?: {
      [key: string]: Schema$NotificationParameter;
    } | null;
    /**
     * Output only. Custom string attributes used primarily to expose producer-specific information in monitoring dashboards. See go/get-instance-metadata.
     */
    producerMetadata?: {[key: string]: string} | null;
    /**
     * Output only. The list of data plane resources provisioned for this instance, e.g. compute VMs. See go/get-instance-metadata.
     */
    provisionedResources?: Schema$ProvisionedResource[];
    /**
     * Link to the SLM instance template. Only populated when updating SLM instances via SSA's Actuation service adaptor. Service producers with custom control plane (e.g. Cloud SQL) doesn't need to populate this field. Instead they should use software_versions.
     */
    slmInstanceTemplate?: string | null;
    /**
     * Output only. SLO metadata for instance classification in the Standardized dataplane SLO platform. See go/cloud-ssa-standard-slo for feature description.
     */
    sloMetadata?: Schema$SloMetadata;
    /**
     * Software versions that are used to deploy this instance. This can be mutated by rollout services.
     */
    softwareVersions?: {[key: string]: string} | null;
    /**
     * Output only. Current lifecycle state of the resource (e.g. if it's being created or ready to use).
     */
    state?: string | null;
    /**
     * Output only. ID of the associated GCP tenant project. See go/get-instance-metadata.
     */
    tenantProjectId?: string | null;
    /**
     * Output only. Timestamp when the resource was last modified.
     */
    updateTime?: string | null;
  }
  /**
   * JsonSchema representation of schema metadata
   */
  export interface Schema$JsonSchema {
    /**
     * Additional details apart from standard json schema fields, this gives flexibility to store metadata about the schema
     */
    additionalDetails?: {[key: string]: any} | null;
    /**
     * The default value of the field or object described by this schema.
     */
    default?: any | null;
    /**
     * A description of this schema.
     */
    description?: string | null;
    /**
     * Possible values for an enumeration. This works in conjunction with `type` to represent types with a fixed set of legal values
     */
    enum?: any[] | null;
    /**
     * Format of the value as per https://json-schema.org/understanding-json-schema/reference/string.html#format
     */
    format?: string | null;
    /**
     * Schema that applies to array values, applicable only if this is of type `array`.
     */
    items?: Schema$JsonSchema;
    /**
     * JDBC datatype of the field.
     */
    jdbcType?: string | null;
    /**
     * The child schemas, applicable only if this is of type `object`. The key is the name of the property and the value is the json schema that describes that property
     */
    properties?: {[key: string]: Schema$JsonSchema} | null;
    /**
     * Whether this property is required.
     */
    required?: string[] | null;
    /**
     * JSON Schema Validation: A Vocabulary for Structural Validation of JSON
     */
    type?: string[] | null;
  }
  /**
   * Response message for ActionService.ListActions
   */
  export interface Schema$ListActionsResponse {
    /**
     * List of action metadata.
     */
    actions?: Schema$Action[];
    /**
     * Next page token if more actions available.
     */
    nextPageToken?: string | null;
    /**
     * List of actions which contain unsupported Datatypes. Check datatype.proto for more information.
     */
    unsupportedActionNames?: string[] | null;
  }
  /**
   * Response message for EntityService.ListEntities
   */
  export interface Schema$ListEntitiesResponse {
    /**
     * List containing entity rows.
     */
    entities?: Schema$Entity[];
    /**
     * Next page token if more records are available.
     */
    nextPageToken?: string | null;
  }
  /**
   * Response message for EntityService.ListEntityTypes
   */
  export interface Schema$ListEntityTypesResponse {
    /**
     * Next page token if more entity types available.
     */
    nextPageToken?: string | null;
    /**
     * List of metadata related to all entity types.
     */
    types?: Schema$EntityType[];
    /**
     * List of entity type names which contain unsupported Datatypes. Check datatype.proto for more information.
     */
    unsupportedTypeNames?: string[] | null;
  }
  /**
   * Defines policies to service maintenance events.
   */
  export interface Schema$MaintenancePolicy {
    /**
     * Output only. The time when the resource was created.
     */
    createTime?: string | null;
    /**
     * Optional. Description of what this policy is for. Create/Update methods return INVALID_ARGUMENT if the length is greater than 512.
     */
    description?: string | null;
    /**
     * Optional. Resource labels to represent user provided metadata. Each label is a key-value pair, where both the key and the value are arbitrary strings provided by the user.
     */
    labels?: {[key: string]: string} | null;
    /**
     * Required. MaintenancePolicy name using the form: `projects/{project_id\}/locations/{location_id\}/maintenancePolicies/{maintenance_policy_id\}` where {project_id\} refers to a GCP consumer project ID, {location_id\} refers to a GCP region/zone, {maintenance_policy_id\} must be 1-63 characters long and match the regular expression `[a-z0-9]([-a-z0-9]*[a-z0-9])?`.
     */
    name?: string | null;
    /**
     * Optional. The state of the policy.
     */
    state?: string | null;
    /**
     * Maintenance policy applicable to instance update.
     */
    updatePolicy?: Schema$UpdatePolicy;
    /**
     * Output only. The time when the resource was updated.
     */
    updateTime?: string | null;
  }
  /**
   * Maintenance schedule which is exposed to customer and potentially end user, indicating published upcoming future maintenance schedule
   */
  export interface Schema$MaintenanceSchedule {
    /**
     * This field is deprecated, and will be always set to true since reschedule can happen multiple times now. This field should not be removed until all service producers remove this for their customers.
     */
    canReschedule?: boolean | null;
    /**
     * The scheduled end time for the maintenance.
     */
    endTime?: string | null;
    /**
     * The rollout management policy this maintenance schedule is associated with. When doing reschedule update request, the reschedule should be against this given policy.
     */
    rolloutManagementPolicy?: string | null;
    /**
     * schedule_deadline_time is the time deadline any schedule start time cannot go beyond, including reschedule. It's normally the initial schedule start time plus maintenance window length (1 day or 1 week). Maintenance cannot be scheduled to start beyond this deadline.
     */
    scheduleDeadlineTime?: string | null;
    /**
     * The scheduled start time for the maintenance.
     */
    startTime?: string | null;
  }
  /**
   * Maintenance settings associated with instance. Allows service producers and end users to assign settings that controls maintenance on this instance.
   */
  export interface Schema$MaintenanceSettings {
    /**
     * Optional. Exclude instance from maintenance. When true, rollout service will not attempt maintenance on the instance. Rollout service will include the instance in reported rollout progress as not attempted.
     */
    exclude?: boolean | null;
    /**
     * Optional. If the update call is triggered from rollback, set the value as true.
     */
    isRollback?: boolean | null;
    /**
     * Optional. The MaintenancePolicies that have been attached to the instance. The key must be of the type name of the oneof policy name defined in MaintenancePolicy, and the embedded policy must define the same policy type. For details, please refer to go/mr-user-guide. Should not be set if maintenance_policy_names is set. If only the name is needed, then only populate MaintenancePolicy.name.
     */
    maintenancePolicies?: {[key: string]: Schema$MaintenancePolicy} | null;
  }
  /**
   * MaintenanceWindow definition.
   */
  export interface Schema$MaintenanceWindow {
    /**
     * Daily cycle.
     */
    dailyCycle?: Schema$DailyCycle;
    /**
     * Weekly cycle.
     */
    weeklyCycle?: Schema$WeeklyCycle;
  }
  /**
   * Node information for custom per-node SLO implementations. SSA does not support per-node SLO, but producers can populate per-node information in SloMetadata for custom precomputations. SSA Eligibility Exporter will emit per-node metric based on this information.
   */
  export interface Schema$NodeSloMetadata {
    /**
     * The location of the node, if different from instance location.
     */
    location?: string | null;
    /**
     * The id of the node. This should be equal to SaasInstanceNode.node_id.
     */
    nodeId?: string | null;
    /**
     * If present, this will override eligibility for the node coming from instance or exclusions for specified SLIs.
     */
    perSliEligibility?: Schema$PerSliSloEligibility;
  }
  /**
   * Contains notification related data.
   */
  export interface Schema$NotificationParameter {
    /**
     * Optional. Array of string values. e.g. instance's replica information.
     */
    values?: string[] | null;
  }
  /**
   * PerSliSloEligibility is a mapping from an SLI name to eligibility.
   */
  export interface Schema$PerSliSloEligibility {
    /**
     * An entry in the eligibilities map specifies an eligibility for a particular SLI for the given instance. The SLI key in the name must be a valid SLI name specified in the Eligibility Exporter binary flags otherwise an error will be emitted by Eligibility Exporter and the oncaller will be alerted. If an SLI has been defined in the binary flags but the eligibilities map does not contain it, the corresponding SLI time series will not be emitted by the Eligibility Exporter. This ensures a smooth rollout and compatibility between the data produced by different versions of the Eligibility Exporters. If eligibilities map contains a key for an SLI which has not been declared in the binary flags, there will be an error message emitted in the Eligibility Exporter log and the metric for the SLI in question will not be emitted.
     */
    eligibilities?: {[key: string]: Schema$SloEligibility} | null;
  }
  /**
   * Describes provisioned dataplane resources.
   */
  export interface Schema$ProvisionedResource {
    /**
     * Type of the resource. This can be either a GCP resource or a custom one (e.g. another cloud provider's VM). For GCP compute resources use singular form of the names listed in GCP compute API documentation (https://cloud.google.com/compute/docs/reference/rest/v1/), prefixed with 'compute-', for example: 'compute-instance', 'compute-disk', 'compute-autoscaler'.
     */
    resourceType?: string | null;
    /**
     * URL identifying the resource, e.g. "https://www.googleapis.com/compute/v1/projects/...)".
     */
    resourceUrl?: string | null;
  }
  /**
   * A wrapper around the SQL query statement. This is needed so that the JSON representation of ExecuteSqlQueryRequest has the following format: `{"query":"select *"\}`.
   */
  export interface Schema$Query {
    /**
     * Sets the limit for the maximum number of rows returned after the query execution.
     */
    maxRows?: string | null;
    /**
     * Required. Sql query to execute.
     */
    query?: string | null;
    /**
     * In the struct, the value corresponds to the value of query parameter and date type corresponds to the date type of the query parameter.
     */
    queryParameters?: Schema$QueryParameter[];
    /**
     * Sets the number of seconds the driver will wait for a query to execute.
     */
    timeout?: string | null;
  }
  /**
   * Query parameter definition
   */
  export interface Schema$QueryParameter {
    dataType?: string | null;
    value?: any | null;
  }
  export interface Schema$Reference {
    /**
     * Name of the reference field.
     */
    name?: string | null;
    /**
     * Name of reference entity type.
     */
    type?: string | null;
  }
  /**
   * RefreshAccessTokenRequest includes the refresh token.
   */
  export interface Schema$RefreshAccessTokenRequest {
    /**
     * Optional. Refresh Token String. If the Refresh Token is not provided, the runtime will read the data from the secret manager.
     */
    refreshToken?: string | null;
  }
  /**
   * RefreshAccessTokenResponse includes the returned access token and its associated credentials.
   */
  export interface Schema$RefreshAccessTokenResponse {
    accessCredentials?: Schema$AccessCredentials;
  }
  /**
   * Result Metadata message contains metadata about the result returned after executing an Action.
   */
  export interface Schema$ResultMetadata {
    /**
     * The data type of the metadata field
     */
    dataType?: string | null;
    /**
     * The following field specifies the default value of the Parameter provided by the external system if a value is not provided.
     */
    defaultValue?: any | null;
    /**
     * A brief description of the metadata field.
     */
    description?: string | null;
    /**
     * JsonSchema of the result, applicable only if parameter is of type `STRUCT`
     */
    jsonSchema?: Schema$JsonSchema;
    /**
     * Name of the metadata field.
     */
    name?: string | null;
    /**
     * Specifies whether a null value is allowed.
     */
    nullable?: boolean | null;
  }
  /**
   * Configure the schedule.
   */
  export interface Schema$Schedule {
    /**
     * Allows to define schedule that runs specified day of the week.
     */
    day?: string | null;
    /**
     * Output only. Duration of the time window, set by service producer.
     */
    duration?: string | null;
    /**
     * Time within the window to start the operations.
     */
    startTime?: Schema$TimeOfDay;
  }
  /**
   * SloEligibility is a tuple containing eligibility value: true if an instance is eligible for SLO calculation or false if it should be excluded from all SLO-related calculations along with a user-defined reason.
   */
  export interface Schema$SloEligibility {
    /**
     * Whether an instance is eligible or ineligible.
     */
    eligible?: boolean | null;
    /**
     * User-defined reason for the current value of instance eligibility. Usually, this can be directly mapped to the internal state. An empty reason is allowed.
     */
    reason?: string | null;
  }
  /**
   * SloMetadata contains resources required for proper SLO classification of the instance.
   */
  export interface Schema$SloMetadata {
    /**
     * Optional. List of nodes. Some producers need to use per-node metadata to calculate SLO. This field allows such producers to publish per-node SLO meta data, which will be consumed by SSA Eligibility Exporter and published in the form of per node metric to Monarch.
     */
    nodes?: Schema$NodeSloMetadata[];
    /**
     * Optional. Multiple per-instance SLI eligibilities which apply for individual SLIs.
     */
    perSliEligibility?: Schema$PerSliSloEligibility;
    /**
     * Name of the SLO tier the Instance belongs to. This name will be expected to match the tiers specified in the service SLO configuration. Field is mandatory and must not be empty.
     */
    tier?: string | null;
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
   * Response message for EntityService.UpdateEntitiesWithConditions
   */
  export interface Schema$UpdateEntitiesWithConditionsResponse {
    /**
     * Response returned by the external system.
     */
    response?: {[key: string]: any} | null;
  }
  /**
   * Maintenance policy applicable to instance updates.
   */
  export interface Schema$UpdatePolicy {
    /**
     * Optional. Relative scheduling channel applied to resource.
     */
    channel?: string | null;
    /**
     * Deny Maintenance Period that is applied to resource to indicate when maintenance is forbidden. The protocol supports zero-to-many such periods, but the current SLM Rollout implementation only supports zero-to-one.
     */
    denyMaintenancePeriods?: Schema$DenyMaintenancePeriod[];
    /**
     * Optional. Maintenance window that is applied to resources covered by this policy.
     */
    window?: Schema$MaintenanceWindow;
  }
  /**
   * Time window specified for weekly operations.
   */
  export interface Schema$WeeklyCycle {
    /**
     * User can specify multiple windows in a week. Minimum of 1 window.
     */
    schedule?: Schema$Schedule[];
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
    connections: Resource$Projects$Locations$Connections;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.connections = new Resource$Projects$Locations$Connections(
        this.context
      );
    }
  }

  export class Resource$Projects$Locations$Connections {
    context: APIRequestContext;
    actions: Resource$Projects$Locations$Connections$Actions;
    entityTypes: Resource$Projects$Locations$Connections$Entitytypes;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.actions = new Resource$Projects$Locations$Connections$Actions(
        this.context
      );
      this.entityTypes =
        new Resource$Projects$Locations$Connections$Entitytypes(this.context);
    }

    /**
     * Reports readiness status of the connector. Similar logic to GetStatus but modified for kubernetes health check to understand.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/connectors.googleapis.com
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
     * const connectors = google.connectors('v2');
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
     *   const res = await connectors.projects.locations.connections.checkReadiness({
     *     name: 'projects/my-project/locations/my-location/connections/my-connection',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "status": "my_status"
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * ```
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    checkReadiness(
      params: Params$Resource$Projects$Locations$Connections$Checkreadiness,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    checkReadiness(
      params?: Params$Resource$Projects$Locations$Connections$Checkreadiness,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$CheckReadinessResponse>>;
    checkReadiness(
      params: Params$Resource$Projects$Locations$Connections$Checkreadiness,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    checkReadiness(
      params: Params$Resource$Projects$Locations$Connections$Checkreadiness,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$CheckReadinessResponse>,
      callback: BodyResponseCallback<Schema$CheckReadinessResponse>
    ): void;
    checkReadiness(
      params: Params$Resource$Projects$Locations$Connections$Checkreadiness,
      callback: BodyResponseCallback<Schema$CheckReadinessResponse>
    ): void;
    checkReadiness(
      callback: BodyResponseCallback<Schema$CheckReadinessResponse>
    ): void;
    checkReadiness(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Connections$Checkreadiness
        | BodyResponseCallback<Schema$CheckReadinessResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$CheckReadinessResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$CheckReadinessResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$CheckReadinessResponse>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Connections$Checkreadiness;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Connections$Checkreadiness;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://connectors.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v2/{+name}:checkReadiness').replace(
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
        createAPIRequest<Schema$CheckReadinessResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$CheckReadinessResponse>(parameters);
      }
    }

    /**
     * Reports the status of the connection. Note that when the connection is in a state that is not ACTIVE, the implementation of this RPC method must return a Status with the corresponding State instead of returning a gRPC status code that is not "OK", which indicates that ConnectionStatus itself, not the connection, failed.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/connectors.googleapis.com
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
     * const connectors = google.connectors('v2');
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
     *   const res = await connectors.projects.locations.connections.checkStatus({
     *     name: 'projects/my-project/locations/my-location/connections/my-connection',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "description": "my_description",
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
    checkStatus(
      params: Params$Resource$Projects$Locations$Connections$Checkstatus,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    checkStatus(
      params?: Params$Resource$Projects$Locations$Connections$Checkstatus,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$CheckStatusResponse>>;
    checkStatus(
      params: Params$Resource$Projects$Locations$Connections$Checkstatus,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    checkStatus(
      params: Params$Resource$Projects$Locations$Connections$Checkstatus,
      options: MethodOptions | BodyResponseCallback<Schema$CheckStatusResponse>,
      callback: BodyResponseCallback<Schema$CheckStatusResponse>
    ): void;
    checkStatus(
      params: Params$Resource$Projects$Locations$Connections$Checkstatus,
      callback: BodyResponseCallback<Schema$CheckStatusResponse>
    ): void;
    checkStatus(
      callback: BodyResponseCallback<Schema$CheckStatusResponse>
    ): void;
    checkStatus(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Connections$Checkstatus
        | BodyResponseCallback<Schema$CheckStatusResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$CheckStatusResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$CheckStatusResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$CheckStatusResponse>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Connections$Checkstatus;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Connections$Checkstatus;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://connectors.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v2/{+name}:checkStatus').replace(
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
        createAPIRequest<Schema$CheckStatusResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$CheckStatusResponse>(parameters);
      }
    }

    /**
     * ExchangeAuthCode exchanges the OAuth authorization code (and other necessary data) for an access token (and associated credentials).
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/connectors.googleapis.com
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
     * const connectors = google.connectors('v2');
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
     *   const res = await connectors.projects.locations.connections.exchangeAuthCode({
     *     name: 'projects/my-project/locations/my-location/connections/my-connection',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "authCodeData": {}
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "accessCredentials": {}
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * ```
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    exchangeAuthCode(
      params: Params$Resource$Projects$Locations$Connections$Exchangeauthcode,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    exchangeAuthCode(
      params?: Params$Resource$Projects$Locations$Connections$Exchangeauthcode,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$ExchangeAuthCodeResponse>>;
    exchangeAuthCode(
      params: Params$Resource$Projects$Locations$Connections$Exchangeauthcode,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    exchangeAuthCode(
      params: Params$Resource$Projects$Locations$Connections$Exchangeauthcode,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ExchangeAuthCodeResponse>,
      callback: BodyResponseCallback<Schema$ExchangeAuthCodeResponse>
    ): void;
    exchangeAuthCode(
      params: Params$Resource$Projects$Locations$Connections$Exchangeauthcode,
      callback: BodyResponseCallback<Schema$ExchangeAuthCodeResponse>
    ): void;
    exchangeAuthCode(
      callback: BodyResponseCallback<Schema$ExchangeAuthCodeResponse>
    ): void;
    exchangeAuthCode(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Connections$Exchangeauthcode
        | BodyResponseCallback<Schema$ExchangeAuthCodeResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ExchangeAuthCodeResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ExchangeAuthCodeResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$ExchangeAuthCodeResponse>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Connections$Exchangeauthcode;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Connections$Exchangeauthcode;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://connectors.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v2/{+name}:exchangeAuthCode').replace(
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
        createAPIRequest<Schema$ExchangeAuthCodeResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ExchangeAuthCodeResponse>(parameters);
      }
    }

    /**
     * Executes a SQL statement specified in the body of the request. An example of this SQL statement in the case of Salesforce connector would be 'select * from Account a, Order o where a.Id = o.AccountId'.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/connectors.googleapis.com
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
     * const connectors = google.connectors('v2');
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
     *   const res = await connectors.projects.locations.connections.executeSqlQuery({
     *     // Required. Resource name of the Connection. Format: projects/{project\}/locations/{location\}/connections/{connection\}
     *     connection:
     *       'projects/my-project/locations/my-location/connections/my-connection',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "query": {}
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "results": []
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * ```
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    executeSqlQuery(
      params: Params$Resource$Projects$Locations$Connections$Executesqlquery,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    executeSqlQuery(
      params?: Params$Resource$Projects$Locations$Connections$Executesqlquery,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$ExecuteSqlQueryResponse>>;
    executeSqlQuery(
      params: Params$Resource$Projects$Locations$Connections$Executesqlquery,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    executeSqlQuery(
      params: Params$Resource$Projects$Locations$Connections$Executesqlquery,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ExecuteSqlQueryResponse>,
      callback: BodyResponseCallback<Schema$ExecuteSqlQueryResponse>
    ): void;
    executeSqlQuery(
      params: Params$Resource$Projects$Locations$Connections$Executesqlquery,
      callback: BodyResponseCallback<Schema$ExecuteSqlQueryResponse>
    ): void;
    executeSqlQuery(
      callback: BodyResponseCallback<Schema$ExecuteSqlQueryResponse>
    ): void;
    executeSqlQuery(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Connections$Executesqlquery
        | BodyResponseCallback<Schema$ExecuteSqlQueryResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ExecuteSqlQueryResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ExecuteSqlQueryResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$ExecuteSqlQueryResponse>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Connections$Executesqlquery;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Connections$Executesqlquery;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://connectors.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v2/{+connection}:executeSqlQuery').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['connection'],
        pathParams: ['connection'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$ExecuteSqlQueryResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ExecuteSqlQueryResponse>(parameters);
      }
    }

    /**
     * RefreshAccessToken exchanges the OAuth refresh token (and other necessary data) for a new access token (and new associated credentials).
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/connectors.googleapis.com
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
     * const connectors = google.connectors('v2');
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
     *     await connectors.projects.locations.connections.refreshAccessToken({
     *       name: 'projects/my-project/locations/my-location/connections/my-connection',
     *
     *       // Request body metadata
     *       requestBody: {
     *         // request body parameters
     *         // {
     *         //   "refreshToken": "my_refreshToken"
     *         // }
     *       },
     *     });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "accessCredentials": {}
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * ```
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    refreshAccessToken(
      params: Params$Resource$Projects$Locations$Connections$Refreshaccesstoken,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    refreshAccessToken(
      params?: Params$Resource$Projects$Locations$Connections$Refreshaccesstoken,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$RefreshAccessTokenResponse>>;
    refreshAccessToken(
      params: Params$Resource$Projects$Locations$Connections$Refreshaccesstoken,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    refreshAccessToken(
      params: Params$Resource$Projects$Locations$Connections$Refreshaccesstoken,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$RefreshAccessTokenResponse>,
      callback: BodyResponseCallback<Schema$RefreshAccessTokenResponse>
    ): void;
    refreshAccessToken(
      params: Params$Resource$Projects$Locations$Connections$Refreshaccesstoken,
      callback: BodyResponseCallback<Schema$RefreshAccessTokenResponse>
    ): void;
    refreshAccessToken(
      callback: BodyResponseCallback<Schema$RefreshAccessTokenResponse>
    ): void;
    refreshAccessToken(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Connections$Refreshaccesstoken
        | BodyResponseCallback<Schema$RefreshAccessTokenResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$RefreshAccessTokenResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$RefreshAccessTokenResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$RefreshAccessTokenResponse>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Connections$Refreshaccesstoken;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Connections$Refreshaccesstoken;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://connectors.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v2/{+name}:refreshAccessToken').replace(
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
        createAPIRequest<Schema$RefreshAccessTokenResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$RefreshAccessTokenResponse>(parameters);
      }
    }
  }

  export interface Params$Resource$Projects$Locations$Connections$Checkreadiness
    extends StandardParameters {
    /**
     *
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Locations$Connections$Checkstatus
    extends StandardParameters {
    /**
     *
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Locations$Connections$Exchangeauthcode
    extends StandardParameters {
    /**
     *
     */
    name?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$ExchangeAuthCodeRequest;
  }
  export interface Params$Resource$Projects$Locations$Connections$Executesqlquery
    extends StandardParameters {
    /**
     * Required. Resource name of the Connection. Format: projects/{project\}/locations/{location\}/connections/{connection\}
     */
    connection?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$ExecuteSqlQueryRequest;
  }
  export interface Params$Resource$Projects$Locations$Connections$Refreshaccesstoken
    extends StandardParameters {
    /**
     *
     */
    name?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$RefreshAccessTokenRequest;
  }

  export class Resource$Projects$Locations$Connections$Actions {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Executes an action with the name specified in the request. The input parameters for executing the action are passed through the body of the ExecuteAction request.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/connectors.googleapis.com
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
     * const connectors = google.connectors('v2');
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
     *   const res = await connectors.projects.locations.connections.actions.execute({
     *     // Required. Resource name of the Action. Format: projects/{project\}/locations/{location\}/connections/{connection\}/actions/{action\}
     *     name: 'projects/my-project/locations/my-location/connections/my-connection/actions/my-action',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "parameters": {}
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "results": []
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
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
      params: Params$Resource$Projects$Locations$Connections$Actions$Execute,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    execute(
      params?: Params$Resource$Projects$Locations$Connections$Actions$Execute,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$ExecuteActionResponse>>;
    execute(
      params: Params$Resource$Projects$Locations$Connections$Actions$Execute,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    execute(
      params: Params$Resource$Projects$Locations$Connections$Actions$Execute,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ExecuteActionResponse>,
      callback: BodyResponseCallback<Schema$ExecuteActionResponse>
    ): void;
    execute(
      params: Params$Resource$Projects$Locations$Connections$Actions$Execute,
      callback: BodyResponseCallback<Schema$ExecuteActionResponse>
    ): void;
    execute(callback: BodyResponseCallback<Schema$ExecuteActionResponse>): void;
    execute(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Connections$Actions$Execute
        | BodyResponseCallback<Schema$ExecuteActionResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ExecuteActionResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ExecuteActionResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$ExecuteActionResponse>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Connections$Actions$Execute;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Connections$Actions$Execute;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://connectors.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v2/{+name}:execute').replace(
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
        createAPIRequest<Schema$ExecuteActionResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ExecuteActionResponse>(parameters);
      }
    }

    /**
     * Gets the schema of the given action.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/connectors.googleapis.com
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
     * const connectors = google.connectors('v2');
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
     *   const res = await connectors.projects.locations.connections.actions.get({
     *     // Required. Resource name of the Action. Format: projects/{project\}/locations/{location\}/connections/{connection\}/actions/{action\}
     *     name: 'projects/my-project/locations/my-location/connections/my-connection/actions/my-action',
     *     // Specified view of the action schema.
     *     view: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "description": "my_description",
     *   //   "displayName": "my_displayName",
     *   //   "inputJsonSchema": {},
     *   //   "inputParameters": [],
     *   //   "name": "my_name",
     *   //   "resultJsonSchema": {},
     *   //   "resultMetadata": []
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
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
      params: Params$Resource$Projects$Locations$Connections$Actions$Get,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    get(
      params?: Params$Resource$Projects$Locations$Connections$Actions$Get,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Action>>;
    get(
      params: Params$Resource$Projects$Locations$Connections$Actions$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Connections$Actions$Get,
      options: MethodOptions | BodyResponseCallback<Schema$Action>,
      callback: BodyResponseCallback<Schema$Action>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Connections$Actions$Get,
      callback: BodyResponseCallback<Schema$Action>
    ): void;
    get(callback: BodyResponseCallback<Schema$Action>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Connections$Actions$Get
        | BodyResponseCallback<Schema$Action>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Action>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Action>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$Action>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Connections$Actions$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Connections$Actions$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://connectors.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v2/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$Action>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Action>(parameters);
      }
    }

    /**
     * Gets the schema of all the actions supported by the connector.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/connectors.googleapis.com
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
     * const connectors = google.connectors('v2');
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
     *   const res = await connectors.projects.locations.connections.actions.list({
     *     // Number of Actions to return. Defaults to 25.
     *     pageSize: 'placeholder-value',
     *     // Page token, return from a previous ListActions call, that can be used retrieve the next page of content. If unspecified, the request returns the first page of actions.
     *     pageToken: 'placeholder-value',
     *     // Required. Parent resource name of the Action. Format: projects/{project\}/locations/{location\}/connections/{connection\}
     *     parent:
     *       'projects/my-project/locations/my-location/connections/my-connection',
     *     // Specifies which fields of the Action are returned in the response.
     *     view: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "actions": [],
     *   //   "nextPageToken": "my_nextPageToken",
     *   //   "unsupportedActionNames": []
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
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
      params: Params$Resource$Projects$Locations$Connections$Actions$List,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    list(
      params?: Params$Resource$Projects$Locations$Connections$Actions$List,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$ListActionsResponse>>;
    list(
      params: Params$Resource$Projects$Locations$Connections$Actions$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Connections$Actions$List,
      options: MethodOptions | BodyResponseCallback<Schema$ListActionsResponse>,
      callback: BodyResponseCallback<Schema$ListActionsResponse>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Connections$Actions$List,
      callback: BodyResponseCallback<Schema$ListActionsResponse>
    ): void;
    list(callback: BodyResponseCallback<Schema$ListActionsResponse>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Connections$Actions$List
        | BodyResponseCallback<Schema$ListActionsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ListActionsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ListActionsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$ListActionsResponse>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Connections$Actions$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Connections$Actions$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://connectors.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v2/{+parent}/actions').replace(
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
        createAPIRequest<Schema$ListActionsResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ListActionsResponse>(parameters);
      }
    }
  }

  export interface Params$Resource$Projects$Locations$Connections$Actions$Execute
    extends StandardParameters {
    /**
     * Required. Resource name of the Action. Format: projects/{project\}/locations/{location\}/connections/{connection\}/actions/{action\}
     */
    name?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$ExecuteActionRequest;
  }
  export interface Params$Resource$Projects$Locations$Connections$Actions$Get
    extends StandardParameters {
    /**
     * Required. Resource name of the Action. Format: projects/{project\}/locations/{location\}/connections/{connection\}/actions/{action\}
     */
    name?: string;
    /**
     * Specified view of the action schema.
     */
    view?: string;
  }
  export interface Params$Resource$Projects$Locations$Connections$Actions$List
    extends StandardParameters {
    /**
     * Number of Actions to return. Defaults to 25.
     */
    pageSize?: number;
    /**
     * Page token, return from a previous ListActions call, that can be used retrieve the next page of content. If unspecified, the request returns the first page of actions.
     */
    pageToken?: string;
    /**
     * Required. Parent resource name of the Action. Format: projects/{project\}/locations/{location\}/connections/{connection\}
     */
    parent?: string;
    /**
     * Specifies which fields of the Action are returned in the response.
     */
    view?: string;
  }

  export class Resource$Projects$Locations$Connections$Entitytypes {
    context: APIRequestContext;
    entities: Resource$Projects$Locations$Connections$Entitytypes$Entities;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.entities =
        new Resource$Projects$Locations$Connections$Entitytypes$Entities(
          this.context
        );
    }

    /**
     * Gets metadata of given entity type
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/connectors.googleapis.com
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
     * const connectors = google.connectors('v2');
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
     *   const res = await connectors.projects.locations.connections.entityTypes.get({
     *     // Required. Resource name of the Entity Type. Format: projects/{project\}/locations/{location\}/connections/{connection\}/entityTypes/{entityType\}
     *     name: 'projects/my-project/locations/my-location/connections/my-connection/entityTypes/my-entityType',
     *     // Specifies view for entity type schema.
     *     view: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "fields": [],
     *   //   "jsonSchema": {},
     *   //   "name": "my_name",
     *   //   "operations": []
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
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
      params: Params$Resource$Projects$Locations$Connections$Entitytypes$Get,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    get(
      params?: Params$Resource$Projects$Locations$Connections$Entitytypes$Get,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$EntityType>>;
    get(
      params: Params$Resource$Projects$Locations$Connections$Entitytypes$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Connections$Entitytypes$Get,
      options: MethodOptions | BodyResponseCallback<Schema$EntityType>,
      callback: BodyResponseCallback<Schema$EntityType>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Connections$Entitytypes$Get,
      callback: BodyResponseCallback<Schema$EntityType>
    ): void;
    get(callback: BodyResponseCallback<Schema$EntityType>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Connections$Entitytypes$Get
        | BodyResponseCallback<Schema$EntityType>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$EntityType>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$EntityType>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$EntityType>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Connections$Entitytypes$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Connections$Entitytypes$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://connectors.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v2/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$EntityType>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$EntityType>(parameters);
      }
    }

    /**
     * Lists metadata related to all entity types present in the external system.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/connectors.googleapis.com
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
     * const connectors = google.connectors('v2');
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
     *   const res = await connectors.projects.locations.connections.entityTypes.list({
     *     // Number of entity types to return. Defaults to 25.
     *     pageSize: 'placeholder-value',
     *     // Page token, return from a previous ListEntityTypes call, that can be used retrieve the next page of content. If unspecified, the request returns the first page of entity types.
     *     pageToken: 'placeholder-value',
     *     // Required. Resource name of the Entity Type. Format: projects/{project\}/locations/{location\}/connections/{connection\}
     *     parent:
     *       'projects/my-project/locations/my-location/connections/my-connection',
     *     // Specifies which fields of the Entity Type are returned in the response.
     *     view: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "nextPageToken": "my_nextPageToken",
     *   //   "types": [],
     *   //   "unsupportedTypeNames": []
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
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
      params: Params$Resource$Projects$Locations$Connections$Entitytypes$List,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    list(
      params?: Params$Resource$Projects$Locations$Connections$Entitytypes$List,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$ListEntityTypesResponse>>;
    list(
      params: Params$Resource$Projects$Locations$Connections$Entitytypes$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Connections$Entitytypes$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ListEntityTypesResponse>,
      callback: BodyResponseCallback<Schema$ListEntityTypesResponse>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Connections$Entitytypes$List,
      callback: BodyResponseCallback<Schema$ListEntityTypesResponse>
    ): void;
    list(callback: BodyResponseCallback<Schema$ListEntityTypesResponse>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Connections$Entitytypes$List
        | BodyResponseCallback<Schema$ListEntityTypesResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ListEntityTypesResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ListEntityTypesResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$ListEntityTypesResponse>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Connections$Entitytypes$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Connections$Entitytypes$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://connectors.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v2/{+parent}/entityTypes').replace(
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
        createAPIRequest<Schema$ListEntityTypesResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ListEntityTypesResponse>(parameters);
      }
    }
  }

  export interface Params$Resource$Projects$Locations$Connections$Entitytypes$Get
    extends StandardParameters {
    /**
     * Required. Resource name of the Entity Type. Format: projects/{project\}/locations/{location\}/connections/{connection\}/entityTypes/{entityType\}
     */
    name?: string;
    /**
     * Specifies view for entity type schema.
     */
    view?: string;
  }
  export interface Params$Resource$Projects$Locations$Connections$Entitytypes$List
    extends StandardParameters {
    /**
     * Number of entity types to return. Defaults to 25.
     */
    pageSize?: number;
    /**
     * Page token, return from a previous ListEntityTypes call, that can be used retrieve the next page of content. If unspecified, the request returns the first page of entity types.
     */
    pageToken?: string;
    /**
     * Required. Resource name of the Entity Type. Format: projects/{project\}/locations/{location\}/connections/{connection\}
     */
    parent?: string;
    /**
     * Specifies which fields of the Entity Type are returned in the response.
     */
    view?: string;
  }

  export class Resource$Projects$Locations$Connections$Entitytypes$Entities {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Creates a new entity row of the specified entity type in the external system. The field values for creating the row are contained in the body of the request. The response message contains a `Entity` message object returned as a response by the external system.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/connectors.googleapis.com
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
     * const connectors = google.connectors('v2');
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
     *     await connectors.projects.locations.connections.entityTypes.entities.create(
     *       {
     *         // Required. Resource name of the Entity Type. Format: projects/{project\}/locations/{location\}/connections/{connection\}/entityTypes/{type\}
     *         parent:
     *           'projects/my-project/locations/my-location/connections/my-connection/entityTypes/my-entityType',
     *
     *         // Request body metadata
     *         requestBody: {
     *           // request body parameters
     *           // {
     *           //   "fields": {},
     *           //   "name": "my_name"
     *           // }
     *         },
     *       },
     *     );
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "fields": {},
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
      params: Params$Resource$Projects$Locations$Connections$Entitytypes$Entities$Create,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    create(
      params?: Params$Resource$Projects$Locations$Connections$Entitytypes$Entities$Create,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Entity>>;
    create(
      params: Params$Resource$Projects$Locations$Connections$Entitytypes$Entities$Create,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    create(
      params: Params$Resource$Projects$Locations$Connections$Entitytypes$Entities$Create,
      options: MethodOptions | BodyResponseCallback<Schema$Entity>,
      callback: BodyResponseCallback<Schema$Entity>
    ): void;
    create(
      params: Params$Resource$Projects$Locations$Connections$Entitytypes$Entities$Create,
      callback: BodyResponseCallback<Schema$Entity>
    ): void;
    create(callback: BodyResponseCallback<Schema$Entity>): void;
    create(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Connections$Entitytypes$Entities$Create
        | BodyResponseCallback<Schema$Entity>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Entity>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Entity>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$Entity>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Connections$Entitytypes$Entities$Create;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Connections$Entitytypes$Entities$Create;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://connectors.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v2/{+parent}/entities').replace(
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
        createAPIRequest<Schema$Entity>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Entity>(parameters);
      }
    }

    /**
     * Deletes an existing entity row matching the entity type and entity id specified in the request.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/connectors.googleapis.com
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
     * const connectors = google.connectors('v2');
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
     *     await connectors.projects.locations.connections.entityTypes.entities.delete(
     *       {
     *         // Required. Resource name of the Entity Type. Format: projects/{project\}/locations/{location\}/connections/{connection\}/entityTypes/{type\}/entities/{id\}
     *         name: 'projects/my-project/locations/my-location/connections/my-connection/entityTypes/my-entityType/entities/my-entitie',
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
    delete(
      params: Params$Resource$Projects$Locations$Connections$Entitytypes$Entities$Delete,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    delete(
      params?: Params$Resource$Projects$Locations$Connections$Entitytypes$Entities$Delete,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Empty>>;
    delete(
      params: Params$Resource$Projects$Locations$Connections$Entitytypes$Entities$Delete,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    delete(
      params: Params$Resource$Projects$Locations$Connections$Entitytypes$Entities$Delete,
      options: MethodOptions | BodyResponseCallback<Schema$Empty>,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    delete(
      params: Params$Resource$Projects$Locations$Connections$Entitytypes$Entities$Delete,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    delete(callback: BodyResponseCallback<Schema$Empty>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Connections$Entitytypes$Entities$Delete
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
        {}) as Params$Resource$Projects$Locations$Connections$Entitytypes$Entities$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Connections$Entitytypes$Entities$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://connectors.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v2/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
     * Deletes entities based on conditions specified in the request and not on entity id.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/connectors.googleapis.com
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
     * const connectors = google.connectors('v2');
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
     *     await connectors.projects.locations.connections.entityTypes.entities.deleteEntitiesWithConditions(
     *       {
     *         // Required. Conditions to be used when deleting entities. From a proto standpoint, There are no restrictions on what can be passed using this field. The connector documentation should have information about what format of filters/conditions are supported. Note: If this conditions field is left empty, an exception is thrown. We don't want to consider 'empty conditions' to be a match-all case. Connector developers can determine and document what a match-all case constraint would be.
     *         conditions: 'placeholder-value',
     *         // Required. Resource name of the Entity Type. Format: projects/{project\}/locations/{location\}/connections/{connection\}/entityTypes/{type\}
     *         entityType:
     *           'projects/my-project/locations/my-location/connections/my-connection/entityTypes/my-entityType',
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
    deleteEntitiesWithConditions(
      params: Params$Resource$Projects$Locations$Connections$Entitytypes$Entities$Deleteentitieswithconditions,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    deleteEntitiesWithConditions(
      params?: Params$Resource$Projects$Locations$Connections$Entitytypes$Entities$Deleteentitieswithconditions,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Empty>>;
    deleteEntitiesWithConditions(
      params: Params$Resource$Projects$Locations$Connections$Entitytypes$Entities$Deleteentitieswithconditions,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    deleteEntitiesWithConditions(
      params: Params$Resource$Projects$Locations$Connections$Entitytypes$Entities$Deleteentitieswithconditions,
      options: MethodOptions | BodyResponseCallback<Schema$Empty>,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    deleteEntitiesWithConditions(
      params: Params$Resource$Projects$Locations$Connections$Entitytypes$Entities$Deleteentitieswithconditions,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    deleteEntitiesWithConditions(
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    deleteEntitiesWithConditions(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Connections$Entitytypes$Entities$Deleteentitieswithconditions
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
        {}) as Params$Resource$Projects$Locations$Connections$Entitytypes$Entities$Deleteentitieswithconditions;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Connections$Entitytypes$Entities$Deleteentitieswithconditions;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://connectors.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/v2/{+entityType}/entities:deleteEntitiesWithConditions'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['entityType'],
        pathParams: ['entityType'],
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
     * Gets a single entity row matching the entity type and entity id specified in the request.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/connectors.googleapis.com
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
     * const connectors = google.connectors('v2');
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
     *     await connectors.projects.locations.connections.entityTypes.entities.get({
     *       // Required. Resource name of the Entity Type. Format: projects/{project\}/locations/{location\}/connections/{connection\}/entityTypes/{type\}/entities/{id\}
     *       name: 'projects/my-project/locations/my-location/connections/my-connection/entityTypes/my-entityType/entities/my-entitie',
     *     });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "fields": {},
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
      params: Params$Resource$Projects$Locations$Connections$Entitytypes$Entities$Get,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    get(
      params?: Params$Resource$Projects$Locations$Connections$Entitytypes$Entities$Get,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Entity>>;
    get(
      params: Params$Resource$Projects$Locations$Connections$Entitytypes$Entities$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Connections$Entitytypes$Entities$Get,
      options: MethodOptions | BodyResponseCallback<Schema$Entity>,
      callback: BodyResponseCallback<Schema$Entity>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Connections$Entitytypes$Entities$Get,
      callback: BodyResponseCallback<Schema$Entity>
    ): void;
    get(callback: BodyResponseCallback<Schema$Entity>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Connections$Entitytypes$Entities$Get
        | BodyResponseCallback<Schema$Entity>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Entity>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Entity>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$Entity>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Connections$Entitytypes$Entities$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Connections$Entitytypes$Entities$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://connectors.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v2/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$Entity>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Entity>(parameters);
      }
    }

    /**
     * Lists entity rows of a particular entity type contained in the request. Note: 1. Currently, only max of one 'sort_by' column is supported. 2. If no 'sort_by' column is provided, the primary key of the table is used. If zero or more than one primary key is available, we default to the unpaginated list entities logic which only returns the first page. 3. The values of the 'sort_by' columns must uniquely identify an entity row, otherwise undefined behaviors may be observed during pagination. 4. Since transactions are not supported, any updates, inserts or deletes during pagination can lead to stale data being returned or other unexpected behaviors.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/connectors.googleapis.com
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
     * const connectors = google.connectors('v2');
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
     *     await connectors.projects.locations.connections.entityTypes.entities.list({
     *       // Conditions to be used when listing entities. From a proto standpoint, There are no restrictions on what can be passed using this field. The connector documentation should have information about what format of filters/conditions are supported.
     *       conditions: 'placeholder-value',
     *       // Number of entity rows to return. Defaults page size = 25. Max page size = 200.
     *       pageSize: 'placeholder-value',
     *       // Page token value if available from a previous request.
     *       pageToken: 'placeholder-value',
     *       // Required. Resource name of the Entity Type. Format: projects/{project\}/locations/{location\}/connections/{connection\}/entityTypes/{type\}
     *       parent:
     *         'projects/my-project/locations/my-location/connections/my-connection/entityTypes/my-entityType',
     *       // List of 'sort_by' columns to use when returning the results.
     *       sortBy: 'placeholder-value',
     *       // List of 'sort_order' columns to use when returning the results.
     *       sortOrder: 'placeholder-value',
     *     });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "entities": [],
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
      params: Params$Resource$Projects$Locations$Connections$Entitytypes$Entities$List,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    list(
      params?: Params$Resource$Projects$Locations$Connections$Entitytypes$Entities$List,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$ListEntitiesResponse>>;
    list(
      params: Params$Resource$Projects$Locations$Connections$Entitytypes$Entities$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Connections$Entitytypes$Entities$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ListEntitiesResponse>,
      callback: BodyResponseCallback<Schema$ListEntitiesResponse>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Connections$Entitytypes$Entities$List,
      callback: BodyResponseCallback<Schema$ListEntitiesResponse>
    ): void;
    list(callback: BodyResponseCallback<Schema$ListEntitiesResponse>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Connections$Entitytypes$Entities$List
        | BodyResponseCallback<Schema$ListEntitiesResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ListEntitiesResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ListEntitiesResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$ListEntitiesResponse>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Connections$Entitytypes$Entities$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Connections$Entitytypes$Entities$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://connectors.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v2/{+parent}/entities').replace(
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
        createAPIRequest<Schema$ListEntitiesResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ListEntitiesResponse>(parameters);
      }
    }

    /**
     * Updates an existing entity row matching the entity type and entity id specified in the request. The fields in the entity row that need to be modified are contained in the body of the request. All unspecified fields are left unchanged. The response message contains a `Entity` message object returned as a response by the external system.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/connectors.googleapis.com
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
     * const connectors = google.connectors('v2');
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
     *     await connectors.projects.locations.connections.entityTypes.entities.patch({
     *       // Output only. Resource name of the Entity. Format: projects/{project\}/locations/{location\}/connections/{connection\}/entityTypes/{type\}/entities/{id\}
     *       name: 'projects/my-project/locations/my-location/connections/my-connection/entityTypes/my-entityType/entities/my-entitie',
     *
     *       // Request body metadata
     *       requestBody: {
     *         // request body parameters
     *         // {
     *         //   "fields": {},
     *         //   "name": "my_name"
     *         // }
     *       },
     *     });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "fields": {},
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
      params: Params$Resource$Projects$Locations$Connections$Entitytypes$Entities$Patch,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    patch(
      params?: Params$Resource$Projects$Locations$Connections$Entitytypes$Entities$Patch,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Entity>>;
    patch(
      params: Params$Resource$Projects$Locations$Connections$Entitytypes$Entities$Patch,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    patch(
      params: Params$Resource$Projects$Locations$Connections$Entitytypes$Entities$Patch,
      options: MethodOptions | BodyResponseCallback<Schema$Entity>,
      callback: BodyResponseCallback<Schema$Entity>
    ): void;
    patch(
      params: Params$Resource$Projects$Locations$Connections$Entitytypes$Entities$Patch,
      callback: BodyResponseCallback<Schema$Entity>
    ): void;
    patch(callback: BodyResponseCallback<Schema$Entity>): void;
    patch(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Connections$Entitytypes$Entities$Patch
        | BodyResponseCallback<Schema$Entity>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Entity>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Entity>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$Entity>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Connections$Entitytypes$Entities$Patch;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Connections$Entitytypes$Entities$Patch;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://connectors.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v2/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$Entity>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Entity>(parameters);
      }
    }

    /**
     * Updates entities based on conditions specified in the request and not on entity id.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/connectors.googleapis.com
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
     * const connectors = google.connectors('v2');
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
     *     await connectors.projects.locations.connections.entityTypes.entities.updateEntitiesWithConditions(
     *       {
     *         // Required. Conditions to be used when updating entities. From a proto standpoint, There are no restrictions on what can be passed using this field. The connector documentation should have information about what format of filters/conditions are supported. Note: If this conditions field is left empty, an exception is thrown. We don't want to consider 'empty conditions' to be a match-all case. Connector developers can determine and document what a match-all case constraint would be.
     *         conditions: 'placeholder-value',
     *         // Required. Resource name of the Entity Type. Format: projects/{project\}/locations/{location\}/connections/{connection\}/entityTypes/{type\}
     *         entityType:
     *           'projects/my-project/locations/my-location/connections/my-connection/entityTypes/my-entityType',
     *
     *         // Request body metadata
     *         requestBody: {
     *           // request body parameters
     *           // {
     *           //   "fields": {},
     *           //   "name": "my_name"
     *           // }
     *         },
     *       },
     *     );
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
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
    updateEntitiesWithConditions(
      params: Params$Resource$Projects$Locations$Connections$Entitytypes$Entities$Updateentitieswithconditions,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    updateEntitiesWithConditions(
      params?: Params$Resource$Projects$Locations$Connections$Entitytypes$Entities$Updateentitieswithconditions,
      options?: MethodOptions
    ): Promise<
      GaxiosResponseWithHTTP2<Schema$UpdateEntitiesWithConditionsResponse>
    >;
    updateEntitiesWithConditions(
      params: Params$Resource$Projects$Locations$Connections$Entitytypes$Entities$Updateentitieswithconditions,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    updateEntitiesWithConditions(
      params: Params$Resource$Projects$Locations$Connections$Entitytypes$Entities$Updateentitieswithconditions,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$UpdateEntitiesWithConditionsResponse>,
      callback: BodyResponseCallback<Schema$UpdateEntitiesWithConditionsResponse>
    ): void;
    updateEntitiesWithConditions(
      params: Params$Resource$Projects$Locations$Connections$Entitytypes$Entities$Updateentitieswithconditions,
      callback: BodyResponseCallback<Schema$UpdateEntitiesWithConditionsResponse>
    ): void;
    updateEntitiesWithConditions(
      callback: BodyResponseCallback<Schema$UpdateEntitiesWithConditionsResponse>
    ): void;
    updateEntitiesWithConditions(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Connections$Entitytypes$Entities$Updateentitieswithconditions
        | BodyResponseCallback<Schema$UpdateEntitiesWithConditionsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$UpdateEntitiesWithConditionsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$UpdateEntitiesWithConditionsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<
          GaxiosResponseWithHTTP2<Schema$UpdateEntitiesWithConditionsResponse>
        >
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Connections$Entitytypes$Entities$Updateentitieswithconditions;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Connections$Entitytypes$Entities$Updateentitieswithconditions;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://connectors.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/v2/{+entityType}/entities:updateEntitiesWithConditions'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['entityType'],
        pathParams: ['entityType'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$UpdateEntitiesWithConditionsResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$UpdateEntitiesWithConditionsResponse>(
          parameters
        );
      }
    }
  }

  export interface Params$Resource$Projects$Locations$Connections$Entitytypes$Entities$Create
    extends StandardParameters {
    /**
     * Required. Resource name of the Entity Type. Format: projects/{project\}/locations/{location\}/connections/{connection\}/entityTypes/{type\}
     */
    parent?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$Entity;
  }
  export interface Params$Resource$Projects$Locations$Connections$Entitytypes$Entities$Delete
    extends StandardParameters {
    /**
     * Required. Resource name of the Entity Type. Format: projects/{project\}/locations/{location\}/connections/{connection\}/entityTypes/{type\}/entities/{id\}
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Locations$Connections$Entitytypes$Entities$Deleteentitieswithconditions
    extends StandardParameters {
    /**
     * Required. Conditions to be used when deleting entities. From a proto standpoint, There are no restrictions on what can be passed using this field. The connector documentation should have information about what format of filters/conditions are supported. Note: If this conditions field is left empty, an exception is thrown. We don't want to consider 'empty conditions' to be a match-all case. Connector developers can determine and document what a match-all case constraint would be.
     */
    conditions?: string;
    /**
     * Required. Resource name of the Entity Type. Format: projects/{project\}/locations/{location\}/connections/{connection\}/entityTypes/{type\}
     */
    entityType?: string;
  }
  export interface Params$Resource$Projects$Locations$Connections$Entitytypes$Entities$Get
    extends StandardParameters {
    /**
     * Required. Resource name of the Entity Type. Format: projects/{project\}/locations/{location\}/connections/{connection\}/entityTypes/{type\}/entities/{id\}
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Locations$Connections$Entitytypes$Entities$List
    extends StandardParameters {
    /**
     * Conditions to be used when listing entities. From a proto standpoint, There are no restrictions on what can be passed using this field. The connector documentation should have information about what format of filters/conditions are supported.
     */
    conditions?: string;
    /**
     * Number of entity rows to return. Defaults page size = 25. Max page size = 200.
     */
    pageSize?: number;
    /**
     * Page token value if available from a previous request.
     */
    pageToken?: string;
    /**
     * Required. Resource name of the Entity Type. Format: projects/{project\}/locations/{location\}/connections/{connection\}/entityTypes/{type\}
     */
    parent?: string;
    /**
     * List of 'sort_by' columns to use when returning the results.
     */
    sortBy?: string[];
    /**
     * List of 'sort_order' columns to use when returning the results.
     */
    sortOrder?: string[];
  }
  export interface Params$Resource$Projects$Locations$Connections$Entitytypes$Entities$Patch
    extends StandardParameters {
    /**
     * Output only. Resource name of the Entity. Format: projects/{project\}/locations/{location\}/connections/{connection\}/entityTypes/{type\}/entities/{id\}
     */
    name?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$Entity;
  }
  export interface Params$Resource$Projects$Locations$Connections$Entitytypes$Entities$Updateentitieswithconditions
    extends StandardParameters {
    /**
     * Required. Conditions to be used when updating entities. From a proto standpoint, There are no restrictions on what can be passed using this field. The connector documentation should have information about what format of filters/conditions are supported. Note: If this conditions field is left empty, an exception is thrown. We don't want to consider 'empty conditions' to be a match-all case. Connector developers can determine and document what a match-all case constraint would be.
     */
    conditions?: string;
    /**
     * Required. Resource name of the Entity Type. Format: projects/{project\}/locations/{location\}/connections/{connection\}/entityTypes/{type\}
     */
    entityType?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$Entity;
  }
}
