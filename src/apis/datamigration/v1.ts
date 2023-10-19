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

export namespace datamigration_v1 {
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
   * Database Migration API
   *
   * Manage Cloud Database Migration Service resources on Google Cloud Platform.
   *
   * @example
   * ```js
   * const {google} = require('googleapis');
   * const datamigration = google.datamigration('v1');
   * ```
   */
  export class Datamigration {
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
   * Specifies required connection parameters, and the parameters required to create an AlloyDB destination cluster.
   */
  export interface Schema$AlloyDbConnectionProfile {
    /**
     * Required. The AlloyDB cluster ID that this connection profile is associated with.
     */
    clusterId?: string | null;
    /**
     * Immutable. Metadata used to create the destination AlloyDB cluster.
     */
    settings?: Schema$AlloyDbSettings;
  }
  /**
   * Settings for creating an AlloyDB cluster.
   */
  export interface Schema$AlloyDbSettings {
    /**
     * Optional. The encryption config can be specified to encrypt the data disks and other persistent data resources of a cluster with a customer-managed encryption key (CMEK). When this field is not specified, the cluster will then use default encryption scheme to protect the user data.
     */
    encryptionConfig?: Schema$EncryptionConfig;
    /**
     * Required. Input only. Initial user to setup during cluster creation. Required.
     */
    initialUser?: Schema$UserPassword;
    /**
     * Labels for the AlloyDB cluster created by DMS. An object containing a list of 'key', 'value' pairs.
     */
    labels?: {[key: string]: string} | null;
    primaryInstanceSettings?: Schema$PrimaryInstanceSettings;
    /**
     * Required. The resource link for the VPC network in which cluster resources are created and from which they are accessible via Private IP. The network must belong to the same project as the cluster. It is specified in the form: "projects/{project_number\}/global/networks/{network_id\}". This is required to create a cluster.
     */
    vpcNetwork?: string | null;
  }
  /**
   * Request message for 'ApplyConversionWorkspace' request.
   */
  export interface Schema$ApplyConversionWorkspaceRequest {
    /**
     * Optional. Specifies whether the conversion workspace is to be committed automatically after the apply.
     */
    autoCommit?: boolean | null;
    /**
     * Optional. Fully qualified (Uri) name of the destination connection profile.
     */
    connectionProfile?: string | null;
    /**
     * Optional. Only validates the apply process, but doesn't change the destination database. Only works for PostgreSQL destination connection profile.
     */
    dryRun?: boolean | null;
    /**
     * Filter which entities to apply. Leaving this field empty will apply all of the entities. Supports Google AIP 160 based filtering.
     */
    filter?: string | null;
  }
  /**
   * Apply a hash function on the value.
   */
  export interface Schema$ApplyHash {
    /**
     * Optional. Generate UUID from the data's byte array
     */
    uuidFromBytes?: Schema$Empty;
  }
  /**
   * Details regarding an Apply background job.
   */
  export interface Schema$ApplyJobDetails {
    /**
     * Output only. The connection profile which was used for the apply job.
     */
    connectionProfile?: string | null;
    /**
     * Output only. AIP-160 based filter used to specify the entities to apply
     */
    filter?: string | null;
  }
  /**
   * Set to a specific value (value is converted to fit the target data type)
   */
  export interface Schema$AssignSpecificValue {
    /**
     * Required. Specific value to be assigned
     */
    value?: string | null;
  }
  /**
   * Specifies the audit configuration for a service. The configuration determines which permission types are logged, and what identities, if any, are exempted from logging. An AuditConfig must have one or more AuditLogConfigs. If there are AuditConfigs for both `allServices` and a specific service, the union of the two AuditConfigs is used for that service: the log_types specified in each AuditConfig are enabled, and the exempted_members in each AuditLogConfig are exempted. Example Policy with multiple AuditConfigs: { "audit_configs": [ { "service": "allServices", "audit_log_configs": [ { "log_type": "DATA_READ", "exempted_members": [ "user:jose@example.com" ] \}, { "log_type": "DATA_WRITE" \}, { "log_type": "ADMIN_READ" \} ] \}, { "service": "sampleservice.googleapis.com", "audit_log_configs": [ { "log_type": "DATA_READ" \}, { "log_type": "DATA_WRITE", "exempted_members": [ "user:aliya@example.com" ] \} ] \} ] \} For sampleservice, this policy enables DATA_READ, DATA_WRITE and ADMIN_READ logging. It also exempts `jose@example.com` from DATA_READ logging, and `aliya@example.com` from DATA_WRITE logging.
   */
  export interface Schema$AuditConfig {
    /**
     * The configuration for logging of each type of permission.
     */
    auditLogConfigs?: Schema$AuditLogConfig[];
    /**
     * Specifies a service that will be enabled for audit logging. For example, `storage.googleapis.com`, `cloudsql.googleapis.com`. `allServices` is a special value that covers all services.
     */
    service?: string | null;
  }
  /**
   * Provides the configuration for logging a type of permissions. Example: { "audit_log_configs": [ { "log_type": "DATA_READ", "exempted_members": [ "user:jose@example.com" ] \}, { "log_type": "DATA_WRITE" \} ] \} This enables 'DATA_READ' and 'DATA_WRITE' logging, while exempting jose@example.com from DATA_READ logging.
   */
  export interface Schema$AuditLogConfig {
    /**
     * Specifies the identities that do not cause logging for this type of permission. Follows the same format of Binding.members.
     */
    exemptedMembers?: string[] | null;
    /**
     * The log type that this config enables.
     */
    logType?: string | null;
  }
  /**
   * Execution log of a background job.
   */
  export interface Schema$BackgroundJobLogEntry {
    /**
     * Output only. Apply job details.
     */
    applyJobDetails?: Schema$ApplyJobDetails;
    /**
     * Output only. Job completion comment, such as how many entities were seeded, how many warnings were found during conversion, and similar information.
     */
    completionComment?: string | null;
    /**
     * Output only. Job completion state, i.e. the final state after the job completed.
     */
    completionState?: string | null;
    /**
     * Output only. Convert job details.
     */
    convertJobDetails?: Schema$ConvertJobDetails;
    /**
     * The timestamp when the background job was finished.
     */
    finishTime?: string | null;
    /**
     * The background job log entry ID.
     */
    id?: string | null;
    /**
     * Output only. Import rules job details.
     */
    importRulesJobDetails?: Schema$ImportRulesJobDetails;
    /**
     * The type of job that was executed.
     */
    jobType?: string | null;
    /**
     * Output only. Whether the client requested the conversion workspace to be committed after a successful completion of the job.
     */
    requestAutocommit?: boolean | null;
    /**
     * Output only. Seed job details.
     */
    seedJobDetails?: Schema$SeedJobDetails;
    /**
     * The timestamp when the background job was started.
     */
    startTime?: string | null;
  }
  /**
   * Associates `members`, or principals, with a `role`.
   */
  export interface Schema$Binding {
    /**
     * The condition that is associated with this binding. If the condition evaluates to `true`, then this binding applies to the current request. If the condition evaluates to `false`, then this binding does not apply to the current request. However, a different role binding might grant the same role to one or more of the principals in this binding. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies).
     */
    condition?: Schema$Expr;
    /**
     * Specifies the principals requesting access for a Google Cloud resource. `members` can have the following values: * `allUsers`: A special identifier that represents anyone who is on the internet; with or without a Google account. * `allAuthenticatedUsers`: A special identifier that represents anyone who is authenticated with a Google account or a service account. Does not include identities that come from external identity providers (IdPs) through identity federation. * `user:{emailid\}`: An email address that represents a specific Google account. For example, `alice@example.com` . * `serviceAccount:{emailid\}`: An email address that represents a Google service account. For example, `my-other-app@appspot.gserviceaccount.com`. * `serviceAccount:{projectid\}.svc.id.goog[{namespace\}/{kubernetes-sa\}]`: An identifier for a [Kubernetes service account](https://cloud.google.com/kubernetes-engine/docs/how-to/kubernetes-service-accounts). For example, `my-project.svc.id.goog[my-namespace/my-kubernetes-sa]`. * `group:{emailid\}`: An email address that represents a Google group. For example, `admins@example.com`. * `domain:{domain\}`: The G Suite domain (primary) that represents all the users of that domain. For example, `google.com` or `example.com`. * `deleted:user:{emailid\}?uid={uniqueid\}`: An email address (plus unique identifier) representing a user that has been recently deleted. For example, `alice@example.com?uid=123456789012345678901`. If the user is recovered, this value reverts to `user:{emailid\}` and the recovered user retains the role in the binding. * `deleted:serviceAccount:{emailid\}?uid={uniqueid\}`: An email address (plus unique identifier) representing a service account that has been recently deleted. For example, `my-other-app@appspot.gserviceaccount.com?uid=123456789012345678901`. If the service account is undeleted, this value reverts to `serviceAccount:{emailid\}` and the undeleted service account retains the role in the binding. * `deleted:group:{emailid\}?uid={uniqueid\}`: An email address (plus unique identifier) representing a Google group that has been recently deleted. For example, `admins@example.com?uid=123456789012345678901`. If the group is recovered, this value reverts to `group:{emailid\}` and the recovered group retains the role in the binding.
     */
    members?: string[] | null;
    /**
     * Role that is assigned to the list of `members`, or principals. For example, `roles/viewer`, `roles/editor`, or `roles/owner`.
     */
    role?: string | null;
  }
  /**
   * The request message for Operations.CancelOperation.
   */
  export interface Schema$CancelOperationRequest {}
  /**
   * Specifies required connection parameters, and, optionally, the parameters required to create a Cloud SQL destination database instance.
   */
  export interface Schema$CloudSqlConnectionProfile {
    /**
     * Output only. The Cloud SQL database instance's additional (outgoing) public IP. Used when the Cloud SQL database availability type is REGIONAL (i.e. multiple zones / highly available).
     */
    additionalPublicIp?: string | null;
    /**
     * Output only. The Cloud SQL instance ID that this connection profile is associated with.
     */
    cloudSqlId?: string | null;
    /**
     * Output only. The Cloud SQL database instance's private IP.
     */
    privateIp?: string | null;
    /**
     * Output only. The Cloud SQL database instance's public IP.
     */
    publicIp?: string | null;
    /**
     * Immutable. Metadata used to create the destination Cloud SQL database.
     */
    settings?: Schema$CloudSqlSettings;
  }
  /**
   * Settings for creating a Cloud SQL database instance.
   */
  export interface Schema$CloudSqlSettings {
    /**
     * The activation policy specifies when the instance is activated; it is applicable only when the instance state is 'RUNNABLE'. Valid values: 'ALWAYS': The instance is on, and remains so even in the absence of connection requests. `NEVER`: The instance is off; it is not activated, even if a connection request arrives.
     */
    activationPolicy?: string | null;
    /**
     * [default: ON] If you enable this setting, Cloud SQL checks your available storage every 30 seconds. If the available storage falls below a threshold size, Cloud SQL automatically adds additional storage capacity. If the available storage repeatedly falls below the threshold size, Cloud SQL continues to add storage until it reaches the maximum of 30 TB.
     */
    autoStorageIncrease?: boolean | null;
    /**
     * Optional. Availability type. Potential values: * `ZONAL`: The instance serves data from only one zone. Outages in that zone affect data availability. * `REGIONAL`: The instance can serve data from more than one zone in a region (it is highly available).
     */
    availabilityType?: string | null;
    /**
     * The KMS key name used for the csql instance.
     */
    cmekKeyName?: string | null;
    /**
     * The Cloud SQL default instance level collation.
     */
    collation?: string | null;
    /**
     * The database flags passed to the Cloud SQL instance at startup. An object containing a list of "key": value pairs. Example: { "name": "wrench", "mass": "1.3kg", "count": "3" \}.
     */
    databaseFlags?: {[key: string]: string} | null;
    /**
     * The database engine type and version.
     */
    databaseVersion?: string | null;
    /**
     * Optional. Data cache is an optional feature available for Cloud SQL for MySQL Enterprise Plus edition only. For more information on data cache, see [Data cache overview](https://cloud.google.com/sql/help/mysql-data-cache) in Cloud SQL documentation.
     */
    dataCacheConfig?: Schema$DataCacheConfig;
    /**
     * The storage capacity available to the database, in GB. The minimum (and default) size is 10GB.
     */
    dataDiskSizeGb?: string | null;
    /**
     * The type of storage: `PD_SSD` (default) or `PD_HDD`.
     */
    dataDiskType?: string | null;
    /**
     * Optional. The edition of the given Cloud SQL instance.
     */
    edition?: string | null;
    /**
     * The settings for IP Management. This allows to enable or disable the instance IP and manage which external networks can connect to the instance. The IPv4 address cannot be disabled.
     */
    ipConfig?: Schema$SqlIpConfig;
    /**
     * Input only. Initial root password.
     */
    rootPassword?: string | null;
    /**
     * Output only. Indicates If this connection profile root password is stored.
     */
    rootPasswordSet?: boolean | null;
    /**
     * Optional. The Google Cloud Platform zone where the failover Cloud SQL database instance is located. Used when the Cloud SQL database availability type is REGIONAL (i.e. multiple zones / highly available).
     */
    secondaryZone?: string | null;
    /**
     * The Database Migration Service source connection profile ID, in the format: `projects/my_project_name/locations/us-central1/connectionProfiles/connection_profile_ID`
     */
    sourceId?: string | null;
    /**
     * The maximum size to which storage capacity can be automatically increased. The default value is 0, which specifies that there is no limit.
     */
    storageAutoResizeLimit?: string | null;
    /**
     * The tier (or machine type) for this instance, for example: `db-n1-standard-1` (MySQL instances) or `db-custom-1-3840` (PostgreSQL instances). For more information, see [Cloud SQL Instance Settings](https://cloud.google.com/sql/docs/mysql/instance-settings).
     */
    tier?: string | null;
    /**
     * The resource labels for a Cloud SQL instance to use to annotate any related underlying resources such as Compute Engine VMs. An object containing a list of "key": "value" pairs. Example: `{ "name": "wrench", "mass": "18kg", "count": "3" \}`.
     */
    userLabels?: {[key: string]: string} | null;
    /**
     * The Google Cloud Platform zone where your Cloud SQL database instance is located.
     */
    zone?: string | null;
  }
  /**
   * Column is not used as an independent entity, it is retrieved as part of a Table entity.
   */
  export interface Schema$ColumnEntity {
    /**
     * Is the column of array type.
     */
    array?: boolean | null;
    /**
     * If the column is array, of which length.
     */
    arrayLength?: number | null;
    /**
     * Is the column auto-generated/identity.
     */
    autoGenerated?: boolean | null;
    /**
     * Charset override - instead of table level charset.
     */
    charset?: string | null;
    /**
     * Collation override - instead of table level collation.
     */
    collation?: string | null;
    /**
     * Comment associated with the column.
     */
    comment?: string | null;
    /**
     * Custom engine specific features.
     */
    customFeatures?: {[key: string]: any} | null;
    /**
     * Column data type.
     */
    dataType?: string | null;
    /**
     * Default value of the column.
     */
    defaultValue?: string | null;
    /**
     * Column fractional second precision - used for timestamp based datatypes.
     */
    fractionalSecondsPrecision?: number | null;
    /**
     * Column length - e.g. varchar (50).
     */
    length?: string | null;
    /**
     * Column name.
     */
    name?: string | null;
    /**
     * Is the column nullable.
     */
    nullable?: boolean | null;
    /**
     * Column order in the table.
     */
    ordinalPosition?: number | null;
    /**
     * Column precision - when relevant.
     */
    precision?: number | null;
    /**
     * Column scale - when relevant.
     */
    scale?: number | null;
    /**
     * Specifies the list of values allowed in the column. Only used for set data type.
     */
    setValues?: string[] | null;
    /**
     * Is the column a UDT.
     */
    udt?: boolean | null;
  }
  /**
   * Request message for 'CommitConversionWorkspace' request.
   */
  export interface Schema$CommitConversionWorkspaceRequest {
    /**
     * Optional. Optional name of the commit.
     */
    commitName?: string | null;
  }
  /**
   * Options to configure rule type ConditionalColumnSetValue. The rule is used to transform the data which is being replicated/migrated. The rule filter field can refer to one or more entities. The rule scope can be one of: Column.
   */
  export interface Schema$ConditionalColumnSetValue {
    /**
     * Optional. Custom engine specific features.
     */
    customFeatures?: {[key: string]: any} | null;
    /**
     * Optional. Optional filter on source column precision and scale. Used for fixed point numbers such as NUMERIC/NUMBER data types.
     */
    sourceNumericFilter?: Schema$SourceNumericFilter;
    /**
     * Optional. Optional filter on source column length. Used for text based data types like varchar.
     */
    sourceTextFilter?: Schema$SourceTextFilter;
    /**
     * Required. Description of data transformation during migration.
     */
    valueTransformation?: Schema$ValueTransformation;
  }
  /**
   * A connection profile definition.
   */
  export interface Schema$ConnectionProfile {
    /**
     * An AlloyDB cluster connection profile.
     */
    alloydb?: Schema$AlloyDbConnectionProfile;
    /**
     * A CloudSQL database connection profile.
     */
    cloudsql?: Schema$CloudSqlConnectionProfile;
    /**
     * Output only. The timestamp when the resource was created. A timestamp in RFC3339 UTC "Zulu" format, accurate to nanoseconds. Example: "2014-10-02T15:01:23.045123456Z".
     */
    createTime?: string | null;
    /**
     * The connection profile display name.
     */
    displayName?: string | null;
    /**
     * Output only. The error details in case of state FAILED.
     */
    error?: Schema$Status;
    /**
     * The resource labels for connection profile to use to annotate any related underlying resources such as Compute Engine VMs. An object containing a list of "key": "value" pairs. Example: `{ "name": "wrench", "mass": "1.3kg", "count": "3" \}`.
     */
    labels?: {[key: string]: string} | null;
    /**
     * A MySQL database connection profile.
     */
    mysql?: Schema$MySqlConnectionProfile;
    /**
     * The name of this connection profile resource in the form of projects/{project\}/locations/{location\}/connectionProfiles/{connectionProfile\}.
     */
    name?: string | null;
    /**
     * An Oracle database connection profile.
     */
    oracle?: Schema$OracleConnectionProfile;
    /**
     * A PostgreSQL database connection profile.
     */
    postgresql?: Schema$PostgreSqlConnectionProfile;
    /**
     * The database provider.
     */
    provider?: string | null;
    /**
     * The current connection profile state (e.g. DRAFT, READY, or FAILED).
     */
    state?: string | null;
    /**
     * Output only. The timestamp when the resource was last updated. A timestamp in RFC3339 UTC "Zulu" format, accurate to nanoseconds. Example: "2014-10-02T15:01:23.045123456Z".
     */
    updateTime?: string | null;
  }
  /**
   * Constraint is not used as an independent entity, it is retrieved as part of another entity such as Table or View.
   */
  export interface Schema$ConstraintEntity {
    /**
     * Custom engine specific features.
     */
    customFeatures?: {[key: string]: any} | null;
    /**
     * The name of the table constraint.
     */
    name?: string | null;
    /**
     * Reference columns which may be associated with the constraint. For example, if the constraint is a FOREIGN_KEY, this represents the list of full names of referenced columns by the foreign key.
     */
    referenceColumns?: string[] | null;
    /**
     * Reference table which may be associated with the constraint. For example, if the constraint is a FOREIGN_KEY, this represents the list of full name of the referenced table by the foreign key.
     */
    referenceTable?: string | null;
    /**
     * Table columns used as part of the Constraint, for example primary key constraint should list the columns which constitutes the key.
     */
    tableColumns?: string[] | null;
    /**
     * Table which is associated with the constraint. In case the constraint is defined on a table, this field is left empty as this information is stored in parent_name. However, if constraint is defined on a view, this field stores the table name on which the view is defined.
     */
    tableName?: string | null;
    /**
     * Type of constraint, for example unique, primary key, foreign key (currently only primary key is supported).
     */
    type?: string | null;
  }
  /**
   * The main conversion workspace resource entity.
   */
  export interface Schema$ConversionWorkspace {
    /**
     * Output only. The timestamp when the workspace resource was created.
     */
    createTime?: string | null;
    /**
     * Required. The destination engine details.
     */
    destination?: Schema$DatabaseEngineInfo;
    /**
     * Optional. The display name for the workspace.
     */
    displayName?: string | null;
    /**
     * Optional. A generic list of settings for the workspace. The settings are database pair dependant and can indicate default behavior for the mapping rules engine or turn on or off specific features. Such examples can be: convert_foreign_key_to_interleave=true, skip_triggers=false, ignore_non_table_synonyms=true
     */
    globalSettings?: {[key: string]: string} | null;
    /**
     * Output only. Whether the workspace has uncommitted changes (changes which were made after the workspace was committed).
     */
    hasUncommittedChanges?: boolean | null;
    /**
     * Output only. The latest commit ID.
     */
    latestCommitId?: string | null;
    /**
     * Output only. The timestamp when the workspace was committed.
     */
    latestCommitTime?: string | null;
    /**
     * Full name of the workspace resource, in the form of: projects/{project\}/locations/{location\}/conversionWorkspaces/{conversion_workspace\}.
     */
    name?: string | null;
    /**
     * Required. The source engine details.
     */
    source?: Schema$DatabaseEngineInfo;
    /**
     * Output only. The timestamp when the workspace resource was last updated.
     */
    updateTime?: string | null;
  }
  /**
   * A conversion workspace's version.
   */
  export interface Schema$ConversionWorkspaceInfo {
    /**
     * The commit ID of the conversion workspace.
     */
    commitId?: string | null;
    /**
     * The resource name (URI) of the conversion workspace.
     */
    name?: string | null;
  }
  /**
   * Request message for 'ConvertConversionWorkspace' request.
   */
  export interface Schema$ConvertConversionWorkspaceRequest {
    /**
     * Optional. Specifies whether the conversion workspace is to be committed automatically after the conversion.
     */
    autoCommit?: boolean | null;
    /**
     * Optional. Automatically convert the full entity path for each entity specified by the filter. For example, if the filter specifies a table, that table schema (and database if there is one) will also be converted.
     */
    convertFullPath?: boolean | null;
    /**
     * Optional. Filter the entities to convert. Leaving this field empty will convert all of the entities. Supports Google AIP-160 style filtering.
     */
    filter?: string | null;
  }
  /**
   * Details regarding a Convert background job.
   */
  export interface Schema$ConvertJobDetails {
    /**
     * Output only. AIP-160 based filter used to specify the entities to convert
     */
    filter?: string | null;
  }
  /**
   * Options to configure rule type ConvertROWIDToColumn. The rule is used to add column rowid to destination tables based on an Oracle rowid function/property. The rule filter field can refer to one or more entities. The rule scope can be one of: Table. This rule requires additional filter to be specified beyond the basic rule filter field, which is whether or not to work on tables which already have a primary key defined.
   */
  export interface Schema$ConvertRowIdToColumn {
    /**
     * Required. Only work on tables without primary key defined
     */
    onlyIfNoPrimaryKey?: boolean | null;
  }
  /**
   * The type and version of a source or destination database.
   */
  export interface Schema$DatabaseEngineInfo {
    /**
     * Required. Engine type.
     */
    engine?: string | null;
    /**
     * Required. Engine version, for example "12.c.1".
     */
    version?: string | null;
  }
  /**
   * The base entity type for all the database related entities. The message contains the entity name, the name of its parent, the entity type, and the specific details per entity type.
   */
  export interface Schema$DatabaseEntity {
    /**
     * Database.
     */
    database?: Schema$DatabaseInstanceEntity;
    /**
     * Function.
     */
    databaseFunction?: Schema$FunctionEntity;
    /**
     * Package.
     */
    databasePackage?: Schema$PackageEntity;
    /**
     * Details about the entity DDL script. Multiple DDL scripts are provided for child entities such as a table entity will have one DDL for the table with additional DDLs for each index, constraint and such.
     */
    entityDdl?: Schema$EntityDdl[];
    /**
     * The type of the database entity (table, view, index, ...).
     */
    entityType?: string | null;
    /**
     * Details about the various issues found for the entity.
     */
    issues?: Schema$EntityIssue[];
    /**
     * Details about entity mappings. For source tree entities, this holds the draft entities which were generated by the mapping rules. For draft tree entities, this holds the source entities which were converted to form the draft entity. Destination entities will have no mapping details.
     */
    mappings?: Schema$EntityMapping[];
    /**
     * Materialized view.
     */
    materializedView?: Schema$MaterializedViewEntity;
    /**
     * The full name of the parent entity (e.g. schema name).
     */
    parentEntity?: string | null;
    /**
     * Schema.
     */
    schema?: Schema$SchemaEntity;
    /**
     * Sequence.
     */
    sequence?: Schema$SequenceEntity;
    /**
     * The short name (e.g. table name) of the entity.
     */
    shortName?: string | null;
    /**
     * Stored procedure.
     */
    storedProcedure?: Schema$StoredProcedureEntity;
    /**
     * Synonym.
     */
    synonym?: Schema$SynonymEntity;
    /**
     * Table.
     */
    table?: Schema$TableEntity;
    /**
     * The type of tree the entity belongs to.
     */
    tree?: string | null;
    /**
     * UDT.
     */
    udt?: Schema$UDTEntity;
    /**
     * View.
     */
    view?: Schema$ViewEntity;
  }
  /**
   * DatabaseInstance acts as a parent entity to other database entities.
   */
  export interface Schema$DatabaseInstanceEntity {
    /**
     * Custom engine specific features.
     */
    customFeatures?: {[key: string]: any} | null;
  }
  /**
   * A message defining the database engine and provider.
   */
  export interface Schema$DatabaseType {
    /**
     * The database engine.
     */
    engine?: string | null;
    /**
     * The database provider.
     */
    provider?: string | null;
  }
  /**
   * Data cache is an optional feature available for Cloud SQL for MySQL Enterprise Plus edition only. For more information on data cache, see [Data cache overview](https://cloud.google.com/sql/help/mysql-data-cache) in Cloud SQL documentation.
   */
  export interface Schema$DataCacheConfig {
    /**
     * Optional. Whether data cache is enabled for the instance.
     */
    dataCacheEnabled?: boolean | null;
  }
  /**
   * Response message for 'DescribeConversionWorkspaceRevisions' request.
   */
  export interface Schema$DescribeConversionWorkspaceRevisionsResponse {
    /**
     * The list of conversion workspace revisions.
     */
    revisions?: Schema$ConversionWorkspace[];
  }
  /**
   * Response message for 'DescribeDatabaseEntities' request.
   */
  export interface Schema$DescribeDatabaseEntitiesResponse {
    /**
     * The list of database entities for the conversion workspace.
     */
    databaseEntities?: Schema$DatabaseEntity[];
    /**
     * A token which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages.
     */
    nextPageToken?: string | null;
  }
  /**
   * Filter based on relation between source value and compare value of type double in ConditionalColumnSetValue
   */
  export interface Schema$DoubleComparisonFilter {
    /**
     * Required. Double compare value to be used
     */
    value?: number | null;
    /**
     * Required. Relation between source value and compare value
     */
    valueComparison?: string | null;
  }
  /**
   * Dump flag definition.
   */
  export interface Schema$DumpFlag {
    /**
     * The name of the flag
     */
    name?: string | null;
    /**
     * The value of the flag.
     */
    value?: string | null;
  }
  /**
   * Dump flags definition.
   */
  export interface Schema$DumpFlags {
    /**
     * The flags for the initial dump.
     */
    dumpFlags?: Schema$DumpFlag[];
  }
  /**
   * A generic empty message that you can re-use to avoid defining duplicated empty messages in your APIs. A typical example is to use it as the request or the response type of an API method. For instance: service Foo { rpc Bar(google.protobuf.Empty) returns (google.protobuf.Empty); \}
   */
  export interface Schema$Empty {}
  /**
   * EncryptionConfig describes the encryption config of a cluster that is encrypted with a CMEK (customer-managed encryption key).
   */
  export interface Schema$EncryptionConfig {
    /**
     * The fully-qualified resource name of the KMS key. Each Cloud KMS key is regionalized and has the following format: projects/[PROJECT]/locations/[REGION]/keyRings/[RING]/cryptoKeys/[KEY_NAME]
     */
    kmsKeyName?: string | null;
  }
  /**
   * A single DDL statement for a specific entity
   */
  export interface Schema$EntityDdl {
    /**
     * The actual ddl code.
     */
    ddl?: string | null;
    /**
     * Type of DDL (Create, Alter).
     */
    ddlType?: string | null;
    /**
     * The name of the database entity the ddl refers to.
     */
    entity?: string | null;
    /**
     * The entity type (if the DDL is for a sub entity).
     */
    entityType?: string | null;
    /**
     * EntityIssues found for this ddl.
     */
    issueId?: string[] | null;
  }
  /**
   * Issue related to the entity.
   */
  export interface Schema$EntityIssue {
    /**
     * Error/Warning code
     */
    code?: string | null;
    /**
     * The ddl which caused the issue, if relevant.
     */
    ddl?: string | null;
    /**
     * The entity type (if the DDL is for a sub entity).
     */
    entityType?: string | null;
    /**
     * Unique Issue ID.
     */
    id?: string | null;
    /**
     * Issue detailed message
     */
    message?: string | null;
    /**
     * The position of the issue found, if relevant.
     */
    position?: Schema$Position;
    /**
     * Severity of the issue
     */
    severity?: string | null;
    /**
     * The type of the issue.
     */
    type?: string | null;
  }
  /**
   * Details of the mappings of a database entity.
   */
  export interface Schema$EntityMapping {
    /**
     * Target entity full name. The draft entity can also include a column, index or constraint using the same naming notation schema.table.column.
     */
    draftEntity?: string | null;
    /**
     * Type of draft entity.
     */
    draftType?: string | null;
    /**
     * Entity mapping log entries. Multiple rules can be effective and contribute changes to a converted entity, such as a rule can handle the entity name, another rule can handle an entity type. In addition, rules which did not change the entity are also logged along with the reason preventing them to do so.
     */
    mappingLog?: Schema$EntityMappingLogEntry[];
    /**
     * Source entity full name. The source entity can also be a column, index or constraint using the same naming notation schema.table.column.
     */
    sourceEntity?: string | null;
    /**
     * Type of source entity.
     */
    sourceType?: string | null;
  }
  /**
   * A single record of a rule which was used for a mapping.
   */
  export interface Schema$EntityMappingLogEntry {
    /**
     * Comment.
     */
    mappingComment?: string | null;
    /**
     * Which rule caused this log entry.
     */
    ruleId?: string | null;
    /**
     * Rule revision ID.
     */
    ruleRevisionId?: string | null;
  }
  /**
   * Options to configure rule type EntityMove. The rule is used to move an entity to a new schema. The rule filter field can refer to one or more entities. The rule scope can be one of: Table, Column, Constraint, Index, View, Function, Stored Procedure, Materialized View, Sequence, UDT
   */
  export interface Schema$EntityMove {
    /**
     * Required. The new schema
     */
    newSchema?: string | null;
  }
  /**
   * Represents a textual expression in the Common Expression Language (CEL) syntax. CEL is a C-like expression language. The syntax and semantics of CEL are documented at https://github.com/google/cel-spec. Example (Comparison): title: "Summary size limit" description: "Determines if a summary is less than 100 chars" expression: "document.summary.size() < 100" Example (Equality): title: "Requestor is owner" description: "Determines if requestor is the document owner" expression: "document.owner == request.auth.claims.email" Example (Logic): title: "Public documents" description: "Determine whether the document should be publicly visible" expression: "document.type != 'private' && document.type != 'internal'" Example (Data Manipulation): title: "Notification string" description: "Create a notification string with a timestamp." expression: "'New message received at ' + string(document.create_time)" The exact variables and functions that may be referenced within an expression are determined by the service that evaluates it. See the service documentation for additional information.
   */
  export interface Schema$Expr {
    /**
     * Optional. Description of the expression. This is a longer text which describes the expression, e.g. when hovered over it in a UI.
     */
    description?: string | null;
    /**
     * Textual representation of an expression in Common Expression Language syntax.
     */
    expression?: string | null;
    /**
     * Optional. String indicating the location of the expression for error reporting, e.g. a file name and a position in the file.
     */
    location?: string | null;
    /**
     * Optional. Title for the expression, i.e. a short string describing its purpose. This can be used e.g. in UIs which allow to enter the expression.
     */
    title?: string | null;
  }
  /**
   * Response message for a 'FetchStaticIps' request.
   */
  export interface Schema$FetchStaticIpsResponse {
    /**
     * A token that can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages.
     */
    nextPageToken?: string | null;
    /**
     * List of static IPs.
     */
    staticIps?: string[] | null;
  }
  /**
   * Options to configure rule type FilterTableColumns. The rule is used to filter the list of columns to include or exclude from a table. The rule filter field can refer to one entity. The rule scope can be: Table Only one of the two lists can be specified for the rule.
   */
  export interface Schema$FilterTableColumns {
    /**
     * Optional. List of columns to be excluded for a particular table.
     */
    excludeColumns?: string[] | null;
    /**
     * Optional. List of columns to be included for a particular table.
     */
    includeColumns?: string[] | null;
  }
  /**
   * Forward SSH Tunnel connectivity.
   */
  export interface Schema$ForwardSshTunnelConnectivity {
    /**
     * Required. Hostname for the SSH tunnel.
     */
    hostname?: string | null;
    /**
     * Input only. SSH password.
     */
    password?: string | null;
    /**
     * Port for the SSH tunnel, default value is 22.
     */
    port?: number | null;
    /**
     * Input only. SSH private key.
     */
    privateKey?: string | null;
    /**
     * Required. Username for the SSH tunnel.
     */
    username?: string | null;
  }
  /**
   * Function's parent is a schema.
   */
  export interface Schema$FunctionEntity {
    /**
     * Custom engine specific features.
     */
    customFeatures?: {[key: string]: any} | null;
    /**
     * The SQL code which creates the function.
     */
    sqlCode?: string | null;
  }
  /**
   * Request message for 'GenerateSshScript' request.
   */
  export interface Schema$GenerateSshScriptRequest {
    /**
     * Required. Bastion VM Instance name to use or to create.
     */
    vm?: string | null;
    /**
     * The VM creation configuration
     */
    vmCreationConfig?: Schema$VmCreationConfig;
    /**
     * The port that will be open on the bastion host.
     */
    vmPort?: number | null;
    /**
     * The VM selection configuration
     */
    vmSelectionConfig?: Schema$VmSelectionConfig;
  }
  /**
   * Request message for 'GenerateTcpProxyScript' request.
   */
  export interface Schema$GenerateTcpProxyScriptRequest {
    /**
     * Required. The type of the Compute instance that will host the proxy.
     */
    vmMachineType?: string | null;
    /**
     * Required. The name of the Compute instance that will host the proxy.
     */
    vmName?: string | null;
    /**
     * Required. The name of the subnet the Compute instance will use for private connectivity. Must be supplied in the form of projects/{project\}/regions/{region\}/subnetworks/{subnetwork\}. Note: the region for the subnet must match the Compute instance region.
     */
    vmSubnet?: string | null;
    /**
     * Optional. The Google Cloud Platform zone to create the VM in. The fully qualified name of the zone must be specified, including the region name, for example "us-central1-b". If not specified, uses the "-b" zone of the destination Connection Profile's region.
     */
    vmZone?: string | null;
  }
  /**
   * Represents the metadata of the long-running operation.
   */
  export interface Schema$GoogleCloudClouddmsV1OperationMetadata {
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
     * Output only. Identifies whether the user has requested cancellation of the operation. Operations that have successfully been cancelled have Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.
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
   * Request message for 'ImportMappingRules' request.
   */
  export interface Schema$ImportMappingRulesRequest {
    /**
     * Required. Should the conversion workspace be committed automatically after the import operation.
     */
    autoCommit?: boolean | null;
    /**
     * Required. One or more rules files.
     */
    rulesFiles?: Schema$RulesFile[];
    /**
     * Required. The format of the rules content file.
     */
    rulesFormat?: string | null;
  }
  /**
   * Details regarding an Import Rules background job.
   */
  export interface Schema$ImportRulesJobDetails {
    /**
     * Output only. The requested file format.
     */
    fileFormat?: string | null;
    /**
     * Output only. File names used for the import rules job.
     */
    files?: string[] | null;
  }
  /**
   * Index is not used as an independent entity, it is retrieved as part of a Table entity.
   */
  export interface Schema$IndexEntity {
    /**
     * Custom engine specific features.
     */
    customFeatures?: {[key: string]: any} | null;
    /**
     * The name of the index.
     */
    name?: string | null;
    /**
     * Table columns used as part of the Index, for example B-TREE index should list the columns which constitutes the index.
     */
    tableColumns?: string[] | null;
    /**
     * Type of index, for example B-TREE.
     */
    type?: string | null;
    /**
     * Boolean value indicating whether the index is unique.
     */
    unique?: boolean | null;
  }
  /**
   * Filter based on relation between source value and compare value of type integer in ConditionalColumnSetValue
   */
  export interface Schema$IntComparisonFilter {
    /**
     * Required. Integer compare value to be used
     */
    value?: string | null;
    /**
     * Required. Relation between source value and compare value
     */
    valueComparison?: string | null;
  }
  /**
   * Response message for 'ListConnectionProfiles' request.
   */
  export interface Schema$ListConnectionProfilesResponse {
    /**
     * The response list of connection profiles.
     */
    connectionProfiles?: Schema$ConnectionProfile[];
    /**
     * A token which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages.
     */
    nextPageToken?: string | null;
    /**
     * Locations that could not be reached.
     */
    unreachable?: string[] | null;
  }
  /**
   * Response message for 'ListConversionWorkspaces' request.
   */
  export interface Schema$ListConversionWorkspacesResponse {
    /**
     * The list of conversion workspace objects.
     */
    conversionWorkspaces?: Schema$ConversionWorkspace[];
    /**
     * A token which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages.
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
   * Response message for 'ListMappingRulesRequest' request.
   */
  export interface Schema$ListMappingRulesResponse {
    /**
     * The list of conversion workspace mapping rules.
     */
    mappingRules?: Schema$MappingRule[];
    /**
     * A token which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages.
     */
    nextPageToken?: string | null;
  }
  /**
   * Response message for 'ListMigrationJobs' request.
   */
  export interface Schema$ListMigrationJobsResponse {
    /**
     * The list of migration jobs objects.
     */
    migrationJobs?: Schema$MigrationJob[];
    /**
     * A token which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages.
     */
    nextPageToken?: string | null;
    /**
     * Locations that could not be reached.
     */
    unreachable?: string[] | null;
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
  }
  /**
   * Response message for 'ListPrivateConnections' request.
   */
  export interface Schema$ListPrivateConnectionsResponse {
    /**
     * A token which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages.
     */
    nextPageToken?: string | null;
    /**
     * List of private connections.
     */
    privateConnections?: Schema$PrivateConnection[];
    /**
     * Locations that could not be reached.
     */
    unreachable?: string[] | null;
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
   * MachineConfig describes the configuration of a machine.
   */
  export interface Schema$MachineConfig {
    /**
     * The number of CPU's in the VM instance.
     */
    cpuCount?: number | null;
  }
  /**
   * Definition of a transformation that is to be applied to a group of entities in the source schema. Several such transformations can be applied to an entity sequentially to define the corresponding entity in the target schema.
   */
  export interface Schema$MappingRule {
    /**
     * Optional. Rule to specify how the data contained in a column should be transformed (such as trimmed, rounded, etc) provided that the data meets certain criteria.
     */
    conditionalColumnSetValue?: Schema$ConditionalColumnSetValue;
    /**
     * Optional. Rule to specify how multiple tables should be converted with an additional rowid column.
     */
    convertRowidColumn?: Schema$ConvertRowIdToColumn;
    /**
     * Optional. A human readable name
     */
    displayName?: string | null;
    /**
     * Optional. Rule to specify how multiple entities should be relocated into a different schema.
     */
    entityMove?: Schema$EntityMove;
    /**
     * Required. The rule filter
     */
    filter?: Schema$MappingRuleFilter;
    /**
     * Optional. Rule to specify the list of columns to include or exclude from a table.
     */
    filterTableColumns?: Schema$FilterTableColumns;
    /**
     * Optional. Rule to specify how multiple columns should be converted to a different data type.
     */
    multiColumnDataTypeChange?: Schema$MultiColumnDatatypeChange;
    /**
     * Optional. Rule to specify how multiple entities should be renamed.
     */
    multiEntityRename?: Schema$MultiEntityRename;
    /**
     * Full name of the mapping rule resource, in the form of: projects/{project\}/locations/{location\}/conversionWorkspaces/{set\}/mappingRule/{rule\}.
     */
    name?: string | null;
    /**
     * Output only. The timestamp that the revision was created.
     */
    revisionCreateTime?: string | null;
    /**
     * Output only. The revision ID of the mapping rule. A new revision is committed whenever the mapping rule is changed in any way. The format is an 8-character hexadecimal string.
     */
    revisionId?: string | null;
    /**
     * Required. The order in which the rule is applied. Lower order rules are applied before higher value rules so they may end up being overridden.
     */
    ruleOrder?: string | null;
    /**
     * Required. The rule scope
     */
    ruleScope?: string | null;
    /**
     * Optional. Rule to specify the primary key for a table
     */
    setTablePrimaryKey?: Schema$SetTablePrimaryKey;
    /**
     * Optional. Rule to specify how a single column is converted.
     */
    singleColumnChange?: Schema$SingleColumnChange;
    /**
     * Optional. Rule to specify how a single entity should be renamed.
     */
    singleEntityRename?: Schema$SingleEntityRename;
    /**
     * Optional. Rule to specify how a single package is converted.
     */
    singlePackageChange?: Schema$SinglePackageChange;
    /**
     * Optional. Rule to change the sql code for an entity, for example, function, procedure.
     */
    sourceSqlChange?: Schema$SourceSqlChange;
    /**
     * Optional. The mapping rule state
     */
    state?: string | null;
  }
  /**
   * A filter defining the entities that a mapping rule should be applied to. When more than one field is specified, the rule is applied only to entities which match all the fields.
   */
  export interface Schema$MappingRuleFilter {
    /**
     * Optional. The rule should be applied to specific entities defined by their fully qualified names.
     */
    entities?: string[] | null;
    /**
     * Optional. The rule should be applied to entities whose non-qualified name contains the given string.
     */
    entityNameContains?: string | null;
    /**
     * Optional. The rule should be applied to entities whose non-qualified name starts with the given prefix.
     */
    entityNamePrefix?: string | null;
    /**
     * Optional. The rule should be applied to entities whose non-qualified name ends with the given suffix.
     */
    entityNameSuffix?: string | null;
    /**
     * Optional. The rule should be applied to entities whose parent entity (fully qualified name) matches the given value. For example, if the rule applies to a table entity, the expected value should be a schema (schema). If the rule applies to a column or index entity, the expected value can be either a schema (schema) or a table (schema.table)
     */
    parentEntity?: string | null;
  }
  /**
   * MaterializedView's parent is a schema.
   */
  export interface Schema$MaterializedViewEntity {
    /**
     * Custom engine specific features.
     */
    customFeatures?: {[key: string]: any} | null;
    /**
     * The SQL code which creates the view.
     */
    sqlCode?: string | null;
  }
  /**
   * Represents a Database Migration Service migration job object.
   */
  export interface Schema$MigrationJob {
    /**
     * The CMEK (customer-managed encryption key) fully qualified key name used for the migration job. This field supports all migration jobs types except for: * Mysql to Mysql (use the cmek field in the cloudsql connection profile instead). * PostrgeSQL to PostgreSQL (use the cmek field in the cloudsql connection profile instead). * PostgreSQL to AlloyDB (use the kms_key_name field in the alloydb connection profile instead). Each Cloud CMEK key has the following format: projects/[PROJECT]/locations/[REGION]/keyRings/[RING]/cryptoKeys/[KEY_NAME]
     */
    cmekKeyName?: string | null;
    /**
     * The conversion workspace used by the migration.
     */
    conversionWorkspace?: Schema$ConversionWorkspaceInfo;
    /**
     * Output only. The timestamp when the migration job resource was created. A timestamp in RFC3339 UTC "Zulu" format, accurate to nanoseconds. Example: "2014-10-02T15:01:23.045123456Z".
     */
    createTime?: string | null;
    /**
     * Required. The resource name (URI) of the destination connection profile.
     */
    destination?: string | null;
    /**
     * The database engine type and provider of the destination.
     */
    destinationDatabase?: Schema$DatabaseType;
    /**
     * The migration job display name.
     */
    displayName?: string | null;
    /**
     * The initial dump flags. This field and the "dump_path" field are mutually exclusive.
     */
    dumpFlags?: Schema$DumpFlags;
    /**
     * The path to the dump file in Google Cloud Storage, in the format: (gs://[BUCKET_NAME]/[OBJECT_NAME]). This field and the "dump_flags" field are mutually exclusive.
     */
    dumpPath?: string | null;
    /**
     * Output only. The duration of the migration job (in seconds). A duration in seconds with up to nine fractional digits, terminated by 's'. Example: "3.5s".
     */
    duration?: string | null;
    /**
     * Output only. If the migration job is completed, the time when it was completed.
     */
    endTime?: string | null;
    /**
     * Output only. The error details in case of state FAILED.
     */
    error?: Schema$Status;
    /**
     * This field can be used to select the entities to migrate as part of the migration job. It uses AIP-160 notation to select a subset of the entities configured on the associated conversion-workspace. This field should not be set on migration-jobs that are not associated with a conversion workspace.
     */
    filter?: string | null;
    /**
     * The resource labels for migration job to use to annotate any related underlying resources such as Compute Engine VMs. An object containing a list of "key": "value" pairs. Example: `{ "name": "wrench", "mass": "1.3kg", "count": "3" \}`.
     */
    labels?: {[key: string]: string} | null;
    /**
     * The name (URI) of this migration job resource, in the form of: projects/{project\}/locations/{location\}/migrationJobs/{migrationJob\}.
     */
    name?: string | null;
    /**
     * Optional. Data dump parallelism settings used by the migration. Currently applicable only for MySQL to Cloud SQL for MySQL migrations only.
     */
    performanceConfig?: Schema$PerformanceConfig;
    /**
     * Output only. The current migration job phase.
     */
    phase?: string | null;
    /**
     * The details needed to communicate to the source over Reverse SSH tunnel connectivity.
     */
    reverseSshConnectivity?: Schema$ReverseSshConnectivity;
    /**
     * Required. The resource name (URI) of the source connection profile.
     */
    source?: string | null;
    /**
     * The database engine type and provider of the source.
     */
    sourceDatabase?: Schema$DatabaseType;
    /**
     * The current migration job state.
     */
    state?: string | null;
    /**
     * static ip connectivity data (default, no additional details needed).
     */
    staticIpConnectivity?: Schema$StaticIpConnectivity;
    /**
     * Required. The migration job type.
     */
    type?: string | null;
    /**
     * Output only. The timestamp when the migration job resource was last updated. A timestamp in RFC3339 UTC "Zulu" format, accurate to nanoseconds. Example: "2014-10-02T15:01:23.045123456Z".
     */
    updateTime?: string | null;
    /**
     * The details of the VPC network that the source database is located in.
     */
    vpcPeeringConnectivity?: Schema$VpcPeeringConnectivity;
  }
  /**
   * Error message of a verification Migration job.
   */
  export interface Schema$MigrationJobVerificationError {
    /**
     * Output only. An instance of ErrorCode specifying the error that occurred.
     */
    errorCode?: string | null;
    /**
     * Output only. A specific detailed error message, if supplied by the engine.
     */
    errorDetailMessage?: string | null;
    /**
     * Output only. A formatted message with further details about the error and a CTA.
     */
    errorMessage?: string | null;
  }
  /**
   * Options to configure rule type MultiColumnDatatypeChange. The rule is used to change the data type and associated properties of multiple columns at once. The rule filter field can refer to one or more entities. The rule scope can be one of:Column. This rule requires additional filters to be specified beyond the basic rule filter field, which is the source data type, but the rule supports additional filtering capabilities such as the minimum and maximum field length. All additional filters which are specified are required to be met in order for the rule to be applied (logical AND between the fields).
   */
  export interface Schema$MultiColumnDatatypeChange {
    /**
     * Optional. Custom engine specific features.
     */
    customFeatures?: {[key: string]: any} | null;
    /**
     * Required. New data type.
     */
    newDataType?: string | null;
    /**
     * Optional. Column fractional seconds precision - used only for timestamp based datatypes - if not specified and relevant uses the source column fractional seconds precision.
     */
    overrideFractionalSecondsPrecision?: number | null;
    /**
     * Optional. Column length - e.g. varchar (50) - if not specified and relevant uses the source column length.
     */
    overrideLength?: string | null;
    /**
     * Optional. Column precision - when relevant - if not specified and relevant uses the source column precision.
     */
    overridePrecision?: number | null;
    /**
     * Optional. Column scale - when relevant - if not specified and relevant uses the source column scale.
     */
    overrideScale?: number | null;
    /**
     * Required. Filter on source data type.
     */
    sourceDataTypeFilter?: string | null;
    /**
     * Optional. Filter for fixed point number data types such as NUMERIC/NUMBER.
     */
    sourceNumericFilter?: Schema$SourceNumericFilter;
    /**
     * Optional. Filter for text-based data types like varchar.
     */
    sourceTextFilter?: Schema$SourceTextFilter;
  }
  /**
   * Options to configure rule type MultiEntityRename. The rule is used to rename multiple entities. The rule filter field can refer to one or more entities. The rule scope can be one of: Database, Schema, Table, Column, Constraint, Index, View, Function, Stored Procedure, Materialized View, Sequence, UDT
   */
  export interface Schema$MultiEntityRename {
    /**
     * Optional. The pattern used to generate the new entity's name. This pattern must include the characters '{name\}', which will be replaced with the name of the original entity. For example, the pattern 't_{name\}' for an entity name jobs would be converted to 't_jobs'. If unspecified, the default value for this field is '{name\}'
     */
    newNamePattern?: string | null;
    /**
     * Optional. Additional transformation that can be done on the source entity name before it is being used by the new_name_pattern, for example lower case. If no transformation is desired, use NO_TRANSFORMATION
     */
    sourceNameTransformation?: string | null;
  }
  /**
   * Specifies connection parameters required specifically for MySQL databases.
   */
  export interface Schema$MySqlConnectionProfile {
    /**
     * If the source is a Cloud SQL database, use this field to provide the Cloud SQL instance ID of the source.
     */
    cloudSqlId?: string | null;
    /**
     * Required. The IP or hostname of the source MySQL database.
     */
    host?: string | null;
    /**
     * Required. Input only. The password for the user that Database Migration Service will be using to connect to the database. This field is not returned on request, and the value is encrypted when stored in Database Migration Service.
     */
    password?: string | null;
    /**
     * Output only. Indicates If this connection profile password is stored.
     */
    passwordSet?: boolean | null;
    /**
     * Required. The network port of the source MySQL database.
     */
    port?: number | null;
    /**
     * SSL configuration for the destination to connect to the source database.
     */
    ssl?: Schema$SslConfig;
    /**
     * Required. The username that Database Migration Service will use to connect to the database. The value is encrypted when stored in Database Migration Service.
     */
    username?: string | null;
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
   * Specifies connection parameters required specifically for Oracle databases.
   */
  export interface Schema$OracleConnectionProfile {
    /**
     * Required. Database service for the Oracle connection.
     */
    databaseService?: string | null;
    /**
     * Forward SSH tunnel connectivity.
     */
    forwardSshConnectivity?: Schema$ForwardSshTunnelConnectivity;
    /**
     * Required. The IP or hostname of the source Oracle database.
     */
    host?: string | null;
    /**
     * Required. Input only. The password for the user that Database Migration Service will be using to connect to the database. This field is not returned on request, and the value is encrypted when stored in Database Migration Service.
     */
    password?: string | null;
    /**
     * Output only. Indicates whether a new password is included in the request.
     */
    passwordSet?: boolean | null;
    /**
     * Required. The network port of the source Oracle database.
     */
    port?: number | null;
    /**
     * Private connectivity.
     */
    privateConnectivity?: Schema$PrivateConnectivity;
    /**
     * SSL configuration for the connection to the source Oracle database. * Only `SERVER_ONLY` configuration is supported for Oracle SSL. * SSL is supported for Oracle versions 12 and above.
     */
    ssl?: Schema$SslConfig;
    /**
     * Static Service IP connectivity.
     */
    staticServiceIpConnectivity?: Schema$StaticServiceIpConnectivity;
    /**
     * Required. The username that Database Migration Service will use to connect to the database. The value is encrypted when stored in Database Migration Service.
     */
    username?: string | null;
  }
  /**
   * Package's parent is a schema.
   */
  export interface Schema$PackageEntity {
    /**
     * Custom engine specific features.
     */
    customFeatures?: {[key: string]: any} | null;
    /**
     * The SQL code which creates the package body. If the package specification has cursors or subprograms, then the package body is mandatory.
     */
    packageBody?: string | null;
    /**
     * The SQL code which creates the package.
     */
    packageSqlCode?: string | null;
  }
  /**
   * Performance configuration definition.
   */
  export interface Schema$PerformanceConfig {
    /**
     * Initial dump parallelism level.
     */
    dumpParallelLevel?: string | null;
  }
  /**
   * An Identity and Access Management (IAM) policy, which specifies access controls for Google Cloud resources. A `Policy` is a collection of `bindings`. A `binding` binds one or more `members`, or principals, to a single `role`. Principals can be user accounts, service accounts, Google groups, and domains (such as G Suite). A `role` is a named list of permissions; each `role` can be an IAM predefined role or a user-created custom role. For some types of Google Cloud resources, a `binding` can also specify a `condition`, which is a logical expression that allows access to a resource only if the expression evaluates to `true`. A condition can add constraints based on attributes of the request, the resource, or both. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies). **JSON example:** ``` { "bindings": [ { "role": "roles/resourcemanager.organizationAdmin", "members": [ "user:mike@example.com", "group:admins@example.com", "domain:google.com", "serviceAccount:my-project-id@appspot.gserviceaccount.com" ] \}, { "role": "roles/resourcemanager.organizationViewer", "members": [ "user:eve@example.com" ], "condition": { "title": "expirable access", "description": "Does not grant access after Sep 2020", "expression": "request.time < timestamp('2020-10-01T00:00:00.000Z')", \} \} ], "etag": "BwWWja0YfJA=", "version": 3 \} ``` **YAML example:** ``` bindings: - members: - user:mike@example.com - group:admins@example.com - domain:google.com - serviceAccount:my-project-id@appspot.gserviceaccount.com role: roles/resourcemanager.organizationAdmin - members: - user:eve@example.com role: roles/resourcemanager.organizationViewer condition: title: expirable access description: Does not grant access after Sep 2020 expression: request.time < timestamp('2020-10-01T00:00:00.000Z') etag: BwWWja0YfJA= version: 3 ``` For a description of IAM and its features, see the [IAM documentation](https://cloud.google.com/iam/docs/).
   */
  export interface Schema$Policy {
    /**
     * Specifies cloud audit logging configuration for this policy.
     */
    auditConfigs?: Schema$AuditConfig[];
    /**
     * Associates a list of `members`, or principals, with a `role`. Optionally, may specify a `condition` that determines how and when the `bindings` are applied. Each of the `bindings` must contain at least one principal. The `bindings` in a `Policy` can refer to up to 1,500 principals; up to 250 of these principals can be Google groups. Each occurrence of a principal counts towards these limits. For example, if the `bindings` grant 50 different roles to `user:alice@example.com`, and not to any other principal, then you can add another 1,450 principals to the `bindings` in the `Policy`.
     */
    bindings?: Schema$Binding[];
    /**
     * `etag` is used for optimistic concurrency control as a way to help prevent simultaneous updates of a policy from overwriting each other. It is strongly suggested that systems make use of the `etag` in the read-modify-write cycle to perform policy updates in order to avoid race conditions: An `etag` is returned in the response to `getIamPolicy`, and systems are expected to put that etag in the request to `setIamPolicy` to ensure that their change will be applied to the same version of the policy. **Important:** If you use IAM Conditions, you must include the `etag` field whenever you call `setIamPolicy`. If you omit this field, then IAM allows you to overwrite a version `3` policy with a version `1` policy, and all of the conditions in the version `3` policy are lost.
     */
    etag?: string | null;
    /**
     * Specifies the format of the policy. Valid values are `0`, `1`, and `3`. Requests that specify an invalid value are rejected. Any operation that affects conditional role bindings must specify version `3`. This requirement applies to the following operations: * Getting a policy that includes a conditional role binding * Adding a conditional role binding to a policy * Changing a conditional role binding in a policy * Removing any role binding, with or without a condition, from a policy that includes conditions **Important:** If you use IAM Conditions, you must include the `etag` field whenever you call `setIamPolicy`. If you omit this field, then IAM allows you to overwrite a version `3` policy with a version `1` policy, and all of the conditions in the version `3` policy are lost. If a policy does not include any conditions, operations on that policy may specify any valid version or leave the field unset. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies).
     */
    version?: number | null;
  }
  /**
   * Issue position.
   */
  export interface Schema$Position {
    /**
     * Issue column number
     */
    column?: number | null;
    /**
     * Issue length
     */
    length?: number | null;
    /**
     * Issue line number
     */
    line?: number | null;
    /**
     * Issue offset
     */
    offset?: number | null;
  }
  /**
   * Specifies connection parameters required specifically for PostgreSQL databases.
   */
  export interface Schema$PostgreSqlConnectionProfile {
    /**
     * If the source is a Cloud SQL database, use this field to provide the Cloud SQL instance ID of the source.
     */
    cloudSqlId?: string | null;
    /**
     * Required. The IP or hostname of the source PostgreSQL database.
     */
    host?: string | null;
    /**
     * Output only. If the source is a Cloud SQL database, this field indicates the network architecture it's associated with.
     */
    networkArchitecture?: string | null;
    /**
     * Required. Input only. The password for the user that Database Migration Service will be using to connect to the database. This field is not returned on request, and the value is encrypted when stored in Database Migration Service.
     */
    password?: string | null;
    /**
     * Output only. Indicates If this connection profile password is stored.
     */
    passwordSet?: boolean | null;
    /**
     * Required. The network port of the source PostgreSQL database.
     */
    port?: number | null;
    /**
     * Private service connect connectivity.
     */
    privateServiceConnectConnectivity?: Schema$PrivateServiceConnectConnectivity;
    /**
     * SSL configuration for the destination to connect to the source database.
     */
    ssl?: Schema$SslConfig;
    /**
     * Static ip connectivity data (default, no additional details needed).
     */
    staticIpConnectivity?: Schema$StaticIpConnectivity;
    /**
     * Required. The username that Database Migration Service will use to connect to the database. The value is encrypted when stored in Database Migration Service.
     */
    username?: string | null;
  }
  /**
   * Settings for the cluster's primary instance
   */
  export interface Schema$PrimaryInstanceSettings {
    /**
     * Database flags to pass to AlloyDB when DMS is creating the AlloyDB cluster and instances. See the AlloyDB documentation for how these can be used.
     */
    databaseFlags?: {[key: string]: string} | null;
    /**
     * Required. The ID of the AlloyDB primary instance. The ID must satisfy the regex expression "[a-z0-9-]+".
     */
    id?: string | null;
    /**
     * Labels for the AlloyDB primary instance created by DMS. An object containing a list of 'key', 'value' pairs.
     */
    labels?: {[key: string]: string} | null;
    /**
     * Configuration for the machines that host the underlying database engine.
     */
    machineConfig?: Schema$MachineConfig;
    /**
     * Output only. The private IP address for the Instance. This is the connection endpoint for an end-user application.
     */
    privateIp?: string | null;
  }
  /**
   * The PrivateConnection resource is used to establish private connectivity with the customer's network.
   */
  export interface Schema$PrivateConnection {
    /**
     * Output only. The create time of the resource.
     */
    createTime?: string | null;
    /**
     * The private connection display name.
     */
    displayName?: string | null;
    /**
     * Output only. The error details in case of state FAILED.
     */
    error?: Schema$Status;
    /**
     * The resource labels for private connections to use to annotate any related underlying resources such as Compute Engine VMs. An object containing a list of "key": "value" pairs. Example: `{ "name": "wrench", "mass": "1.3kg", "count": "3" \}`.
     */
    labels?: {[key: string]: string} | null;
    /**
     * The name of the resource.
     */
    name?: string | null;
    /**
     * Output only. The state of the private connection.
     */
    state?: string | null;
    /**
     * Output only. The last update time of the resource.
     */
    updateTime?: string | null;
    /**
     * VPC peering configuration.
     */
    vpcPeeringConfig?: Schema$VpcPeeringConfig;
  }
  /**
   * Private Connectivity.
   */
  export interface Schema$PrivateConnectivity {
    /**
     * Required. The resource name (URI) of the private connection.
     */
    privateConnection?: string | null;
  }
  /**
   * [Private Service Connect connectivity](https://cloud.google.com/vpc/docs/private-service-connect#service-attachments)
   */
  export interface Schema$PrivateServiceConnectConnectivity {
    /**
     * Required. A service attachment that exposes a database, and has the following format: projects/{project\}/regions/{region\}/serviceAttachments/{service_attachment_name\}
     */
    serviceAttachment?: string | null;
  }
  /**
   * Request message for 'PromoteMigrationJob' request.
   */
  export interface Schema$PromoteMigrationJobRequest {}
  /**
   * Request message for 'RestartMigrationJob' request.
   */
  export interface Schema$RestartMigrationJobRequest {
    /**
     * Optional. Restart the migration job without running prior configuration verification. Defaults to `false`.
     */
    skipValidation?: boolean | null;
  }
  /**
   * Request message for 'ResumeMigrationJob' request.
   */
  export interface Schema$ResumeMigrationJobRequest {}
  /**
   * The details needed to configure a reverse SSH tunnel between the source and destination databases. These details will be used when calling the generateSshScript method (see https://cloud.google.com/database-migration/docs/reference/rest/v1/projects.locations.migrationJobs/generateSshScript) to produce the script that will help set up the reverse SSH tunnel, and to set up the VPC peering between the Cloud SQL private network and the VPC.
   */
  export interface Schema$ReverseSshConnectivity {
    /**
     * The name of the virtual machine (Compute Engine) used as the bastion server for the SSH tunnel.
     */
    vm?: string | null;
    /**
     * Required. The IP of the virtual machine (Compute Engine) used as the bastion server for the SSH tunnel.
     */
    vmIp?: string | null;
    /**
     * Required. The forwarding port of the virtual machine (Compute Engine) used as the bastion server for the SSH tunnel.
     */
    vmPort?: number | null;
    /**
     * The name of the VPC to peer with the Cloud SQL private network.
     */
    vpc?: string | null;
  }
  /**
   * Request message for 'RollbackConversionWorkspace' request.
   */
  export interface Schema$RollbackConversionWorkspaceRequest {}
  /**
   * This allows the data to change scale, for example if the source is 2 digits after the decimal point, specify round to scale value = 2. If for example the value needs to be converted to an integer, use round to scale value = 0.
   */
  export interface Schema$RoundToScale {
    /**
     * Required. Scale value to be used
     */
    scale?: number | null;
  }
  /**
   * Details of a single rules file.
   */
  export interface Schema$RulesFile {
    /**
     * Required. The text content of the rules that needs to be converted.
     */
    rulesContent?: string | null;
    /**
     * Required. The filename of the rules that needs to be converted. The filename is used mainly so that future logs of the import rules job contain it, and can therefore be searched by it.
     */
    rulesSourceFilename?: string | null;
  }
  /**
   * Schema typically has no parent entity, but can have a parent entity DatabaseInstance (for database engines which support it). For some database engines, the terms schema and user can be used interchangeably when they refer to a namespace or a collection of other database entities. Can store additional information which is schema specific.
   */
  export interface Schema$SchemaEntity {
    /**
     * Custom engine specific features.
     */
    customFeatures?: {[key: string]: any} | null;
  }
  /**
   * Response message for 'SearchBackgroundJobs' request.
   */
  export interface Schema$SearchBackgroundJobsResponse {
    /**
     * The list of conversion workspace mapping rules.
     */
    jobs?: Schema$BackgroundJobLogEntry[];
  }
  /**
   * Request message for 'SeedConversionWorkspace' request.
   */
  export interface Schema$SeedConversionWorkspaceRequest {
    /**
     * Should the conversion workspace be committed automatically after the seed operation.
     */
    autoCommit?: boolean | null;
    /**
     * Optional. Fully qualified (Uri) name of the destination connection profile.
     */
    destinationConnectionProfile?: string | null;
    /**
     * Optional. Fully qualified (Uri) name of the source connection profile.
     */
    sourceConnectionProfile?: string | null;
  }
  /**
   * Details regarding a Seed background job.
   */
  export interface Schema$SeedJobDetails {
    /**
     * Output only. The connection profile which was used for the seed job.
     */
    connectionProfile?: string | null;
  }
  /**
   * Sequence's parent is a schema.
   */
  export interface Schema$SequenceEntity {
    /**
     * Indicates number of entries to cache / precreate.
     */
    cache?: string | null;
    /**
     * Custom engine specific features.
     */
    customFeatures?: {[key: string]: any} | null;
    /**
     * Indicates whether the sequence value should cycle through.
     */
    cycle?: boolean | null;
    /**
     * Increment value for the sequence.
     */
    increment?: string | null;
    /**
     * Maximum number for the sequence represented as bytes to accommodate large. numbers
     */
    maxValue?: string | null;
    /**
     * Minimum number for the sequence represented as bytes to accommodate large. numbers
     */
    minValue?: string | null;
    /**
     * Start number for the sequence represented as bytes to accommodate large. numbers
     */
    startValue?: string | null;
  }
  /**
   * Request message for `SetIamPolicy` method.
   */
  export interface Schema$SetIamPolicyRequest {
    /**
     * REQUIRED: The complete policy to be applied to the `resource`. The size of the policy is limited to a few 10s of KB. An empty policy is a valid policy but certain Google Cloud services (such as Projects) might reject them.
     */
    policy?: Schema$Policy;
    /**
     * OPTIONAL: A FieldMask specifying which fields of the policy to modify. Only the fields in the mask will be modified. If no mask is provided, the following default mask is used: `paths: "bindings, etag"`
     */
    updateMask?: string | null;
  }
  /**
   * Options to configure rule type SetTablePrimaryKey. The rule is used to specify the columns and name to configure/alter the primary key of a table. The rule filter field can refer to one entity. The rule scope can be one of: Table.
   */
  export interface Schema$SetTablePrimaryKey {
    /**
     * Optional. Name for the primary key
     */
    primaryKey?: string | null;
    /**
     * Required. List of column names for the primary key
     */
    primaryKeyColumns?: string[] | null;
  }
  /**
   * Options to configure rule type SingleColumnChange. The rule is used to change the properties of a column. The rule filter field can refer to one entity. The rule scope can be one of: Column. When using this rule, if a field is not specified than the destination column's configuration will be the same as the one in the source column..
   */
  export interface Schema$SingleColumnChange {
    /**
     * Optional. Is the column of array type.
     */
    array?: boolean | null;
    /**
     * Optional. The length of the array, only relevant if the column type is an array.
     */
    arrayLength?: number | null;
    /**
     * Optional. Is the column auto-generated/identity.
     */
    autoGenerated?: boolean | null;
    /**
     * Optional. Charset override - instead of table level charset.
     */
    charset?: string | null;
    /**
     * Optional. Collation override - instead of table level collation.
     */
    collation?: string | null;
    /**
     * Optional. Comment associated with the column.
     */
    comment?: string | null;
    /**
     * Optional. Custom engine specific features.
     */
    customFeatures?: {[key: string]: any} | null;
    /**
     * Optional. Column data type name.
     */
    dataType?: string | null;
    /**
     * Optional. Column fractional seconds precision - e.g. 2 as in timestamp (2) - when relevant.
     */
    fractionalSecondsPrecision?: number | null;
    /**
     * Optional. Column length - e.g. 50 as in varchar (50) - when relevant.
     */
    length?: string | null;
    /**
     * Optional. Is the column nullable.
     */
    nullable?: boolean | null;
    /**
     * Optional. Column precision - e.g. 8 as in double (8,2) - when relevant.
     */
    precision?: number | null;
    /**
     * Optional. Column scale - e.g. 2 as in double (8,2) - when relevant.
     */
    scale?: number | null;
    /**
     * Optional. Specifies the list of values allowed in the column.
     */
    setValues?: string[] | null;
    /**
     * Optional. Is the column a UDT (User-defined Type).
     */
    udt?: boolean | null;
  }
  /**
   * Options to configure rule type SingleEntityRename. The rule is used to rename an entity. The rule filter field can refer to only one entity. The rule scope can be one of: Database, Schema, Table, Column, Constraint, Index, View, Function, Stored Procedure, Materialized View, Sequence, UDT, Synonym
   */
  export interface Schema$SingleEntityRename {
    /**
     * Required. The new name of the destination entity
     */
    newName?: string | null;
  }
  /**
   * Options to configure rule type SinglePackageChange. The rule is used to alter the sql code for a package entities. The rule filter field can refer to one entity. The rule scope can be: Package
   */
  export interface Schema$SinglePackageChange {
    /**
     * Optional. Sql code for package body
     */
    packageBody?: string | null;
    /**
     * Optional. Sql code for package description
     */
    packageDescription?: string | null;
  }
  /**
   * Filter for fixed point number data types such as NUMERIC/NUMBER
   */
  export interface Schema$SourceNumericFilter {
    /**
     * Required. Enum to set the option defining the datatypes numeric filter has to be applied to
     */
    numericFilterOption?: string | null;
    /**
     * Optional. The filter will match columns with precision smaller than or equal to this number.
     */
    sourceMaxPrecisionFilter?: number | null;
    /**
     * Optional. The filter will match columns with scale smaller than or equal to this number.
     */
    sourceMaxScaleFilter?: number | null;
    /**
     * Optional. The filter will match columns with precision greater than or equal to this number.
     */
    sourceMinPrecisionFilter?: number | null;
    /**
     * Optional. The filter will match columns with scale greater than or equal to this number.
     */
    sourceMinScaleFilter?: number | null;
  }
  /**
   * Options to configure rule type SourceSqlChange. The rule is used to alter the sql code for database entities. The rule filter field can refer to one entity. The rule scope can be: StoredProcedure, Function, Trigger, View
   */
  export interface Schema$SourceSqlChange {
    /**
     * Required. Sql code for source (stored procedure, function, trigger or view)
     */
    sqlCode?: string | null;
  }
  /**
   * Filter for text-based data types like varchar.
   */
  export interface Schema$SourceTextFilter {
    /**
     * Optional. The filter will match columns with length smaller than or equal to this number.
     */
    sourceMaxLengthFilter?: string | null;
    /**
     * Optional. The filter will match columns with length greater than or equal to this number.
     */
    sourceMinLengthFilter?: string | null;
  }
  /**
   * An entry for an Access Control list.
   */
  export interface Schema$SqlAclEntry {
    /**
     * The time when this access control entry expires in [RFC 3339](https://tools.ietf.org/html/rfc3339) format, for example: `2012-11-15T16:19:00.094Z`.
     */
    expireTime?: string | null;
    /**
     * A label to identify this entry.
     */
    label?: string | null;
    /**
     * Input only. The time-to-leave of this access control entry.
     */
    ttl?: string | null;
    /**
     * The allowlisted value for the access control list.
     */
    value?: string | null;
  }
  /**
   * IP Management configuration.
   */
  export interface Schema$SqlIpConfig {
    /**
     * Optional. The name of the allocated IP address range for the private IP Cloud SQL instance. This name refers to an already allocated IP range address. If set, the instance IP address will be created in the allocated range. Note that this IP address range can't be modified after the instance is created. If you change the VPC when configuring connectivity settings for the migration job, this field is not relevant.
     */
    allocatedIpRange?: string | null;
    /**
     * The list of external networks that are allowed to connect to the instance using the IP. See https://en.wikipedia.org/wiki/CIDR_notation#CIDR_notation, also known as 'slash' notation (e.g. `192.168.100.0/24`).
     */
    authorizedNetworks?: Schema$SqlAclEntry[];
    /**
     * Whether the instance should be assigned an IPv4 address or not.
     */
    enableIpv4?: boolean | null;
    /**
     * The resource link for the VPC network from which the Cloud SQL instance is accessible for private IP. For example, `projects/myProject/global/networks/default`. This setting can be updated, but it cannot be removed after it is set.
     */
    privateNetwork?: string | null;
    /**
     * Whether SSL connections over IP should be enforced or not.
     */
    requireSsl?: boolean | null;
  }
  /**
   * Response message for 'GenerateSshScript' request.
   */
  export interface Schema$SshScript {
    /**
     * The ssh configuration script.
     */
    script?: string | null;
  }
  /**
   * SSL configuration information.
   */
  export interface Schema$SslConfig {
    /**
     * Required. Input only. The x509 PEM-encoded certificate of the CA that signed the source database server's certificate. The replica will use this certificate to verify it's connecting to the right host.
     */
    caCertificate?: string | null;
    /**
     * Input only. The x509 PEM-encoded certificate that will be used by the replica to authenticate against the source database server.If this field is used then the 'client_key' field is mandatory.
     */
    clientCertificate?: string | null;
    /**
     * Input only. The unencrypted PKCS#1 or PKCS#8 PEM-encoded private key associated with the Client Certificate. If this field is used then the 'client_certificate' field is mandatory.
     */
    clientKey?: string | null;
    /**
     * Output only. The ssl config type according to 'client_key', 'client_certificate' and 'ca_certificate'.
     */
    type?: string | null;
  }
  /**
   * Request message for 'StartMigrationJob' request.
   */
  export interface Schema$StartMigrationJobRequest {
    /**
     * Optional. Start the migration job without running prior configuration verification. Defaults to `false`.
     */
    skipValidation?: boolean | null;
  }
  /**
   * The source database will allow incoming connections from the public IP of the destination database. You can retrieve the public IP of the Cloud SQL instance from the Cloud SQL console or using Cloud SQL APIs. No additional configuration is required.
   */
  export interface Schema$StaticIpConnectivity {}
  /**
   * Static IP address connectivity configured on service project.
   */
  export interface Schema$StaticServiceIpConnectivity {}
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
   * Request message for 'StopMigrationJob' request.
   */
  export interface Schema$StopMigrationJobRequest {}
  /**
   * Stored procedure's parent is a schema.
   */
  export interface Schema$StoredProcedureEntity {
    /**
     * Custom engine specific features.
     */
    customFeatures?: {[key: string]: any} | null;
    /**
     * The SQL code which creates the stored procedure.
     */
    sqlCode?: string | null;
  }
  /**
   * Synonym's parent is a schema.
   */
  export interface Schema$SynonymEntity {
    /**
     * Custom engine specific features.
     */
    customFeatures?: {[key: string]: any} | null;
    /**
     * The name of the entity for which the synonym is being created (the source).
     */
    sourceEntity?: string | null;
    /**
     * The type of the entity for which the synonym is being created (usually a table or a sequence).
     */
    sourceType?: string | null;
  }
  /**
   * Table's parent is a schema.
   */
  export interface Schema$TableEntity {
    /**
     * Table columns.
     */
    columns?: Schema$ColumnEntity[];
    /**
     * Comment associated with the table.
     */
    comment?: string | null;
    /**
     * Table constraints.
     */
    constraints?: Schema$ConstraintEntity[];
    /**
     * Custom engine specific features.
     */
    customFeatures?: {[key: string]: any} | null;
    /**
     * Table indices.
     */
    indices?: Schema$IndexEntity[];
    /**
     * Table triggers.
     */
    triggers?: Schema$TriggerEntity[];
  }
  /**
   * Response message for 'GenerateTcpProxyScript' request.
   */
  export interface Schema$TcpProxyScript {
    /**
     * The TCP Proxy configuration script.
     */
    script?: string | null;
  }
  /**
   * Request message for `TestIamPermissions` method.
   */
  export interface Schema$TestIamPermissionsRequest {
    /**
     * The set of permissions to check for the `resource`. Permissions with wildcards (such as `*` or `storage.*`) are not allowed. For more information see [IAM Overview](https://cloud.google.com/iam/docs/overview#permissions).
     */
    permissions?: string[] | null;
  }
  /**
   * Response message for `TestIamPermissions` method.
   */
  export interface Schema$TestIamPermissionsResponse {
    /**
     * A subset of `TestPermissionsRequest.permissions` that the caller is allowed.
     */
    permissions?: string[] | null;
  }
  /**
   * Trigger is not used as an independent entity, it is retrieved as part of a Table entity.
   */
  export interface Schema$TriggerEntity {
    /**
     * Custom engine specific features.
     */
    customFeatures?: {[key: string]: any} | null;
    /**
     * The name of the trigger.
     */
    name?: string | null;
    /**
     * The SQL code which creates the trigger.
     */
    sqlCode?: string | null;
    /**
     * The DML, DDL, or database events that fire the trigger, for example INSERT, UPDATE.
     */
    triggeringEvents?: string[] | null;
    /**
     * Indicates when the trigger fires, for example BEFORE STATEMENT, AFTER EACH ROW.
     */
    triggerType?: string | null;
  }
  /**
   * UDT's parent is a schema.
   */
  export interface Schema$UDTEntity {
    /**
     * Custom engine specific features.
     */
    customFeatures?: {[key: string]: any} | null;
    /**
     * The SQL code which creates the udt body.
     */
    udtBody?: string | null;
    /**
     * The SQL code which creates the udt.
     */
    udtSqlCode?: string | null;
  }
  /**
   * The username/password for a database user. Used for specifying initial users at cluster creation time.
   */
  export interface Schema$UserPassword {
    /**
     * The initial password for the user.
     */
    password?: string | null;
    /**
     * Output only. Indicates if the initial_user.password field has been set.
     */
    passwordSet?: boolean | null;
    /**
     * The database username.
     */
    user?: string | null;
  }
  /**
   * A list of values to filter by in ConditionalColumnSetValue
   */
  export interface Schema$ValueListFilter {
    /**
     * Required. Whether to ignore case when filtering by values. Defaults to false
     */
    ignoreCase?: boolean | null;
    /**
     * Required. Indicates whether the filter matches rows with values that are present in the list or those with values not present in it.
     */
    valuePresentList?: string | null;
    /**
     * Required. The list to be used to filter by
     */
    values?: string[] | null;
  }
  /**
   * Description of data transformation during migration as part of the ConditionalColumnSetValue.
   */
  export interface Schema$ValueTransformation {
    /**
     * Optional. Applies a hash function on the data
     */
    applyHash?: Schema$ApplyHash;
    /**
     * Optional. Set to max_value - if integer or numeric, will use int.maxvalue, etc
     */
    assignMaxValue?: Schema$Empty;
    /**
     * Optional. Set to min_value - if integer or numeric, will use int.minvalue, etc
     */
    assignMinValue?: Schema$Empty;
    /**
     * Optional. Set to null
     */
    assignNull?: Schema$Empty;
    /**
     * Optional. Set to a specific value (value is converted to fit the target data type)
     */
    assignSpecificValue?: Schema$AssignSpecificValue;
    /**
     * Optional. Filter on relation between source value and compare value of type double.
     */
    doubleComparison?: Schema$DoubleComparisonFilter;
    /**
     * Optional. Filter on relation between source value and compare value of type integer.
     */
    intComparison?: Schema$IntComparisonFilter;
    /**
     * Optional. Value is null
     */
    isNull?: Schema$Empty;
    /**
     * Optional. Allows the data to change scale
     */
    roundScale?: Schema$RoundToScale;
    /**
     * Optional. Value is found in the specified list.
     */
    valueList?: Schema$ValueListFilter;
  }
  /**
   * Request message for 'VerifyMigrationJob' request.
   */
  export interface Schema$VerifyMigrationJobRequest {
    /**
     * Optional. The changed migration job parameters to verify. It will not update the migration job.
     */
    migrationJob?: Schema$MigrationJob;
    /**
     * Optional. Field mask is used to specify the changed fields to be verified. It will not update the migration job.
     */
    updateMask?: string | null;
  }
  /**
   * View's parent is a schema.
   */
  export interface Schema$ViewEntity {
    /**
     * View constraints.
     */
    constraints?: Schema$ConstraintEntity[];
    /**
     * Custom engine specific features.
     */
    customFeatures?: {[key: string]: any} | null;
    /**
     * The SQL code which creates the view.
     */
    sqlCode?: string | null;
  }
  /**
   * VM creation configuration message
   */
  export interface Schema$VmCreationConfig {
    /**
     * The subnet name the vm needs to be created in.
     */
    subnet?: string | null;
    /**
     * Required. VM instance machine type to create.
     */
    vmMachineType?: string | null;
    /**
     * The Google Cloud Platform zone to create the VM in.
     */
    vmZone?: string | null;
  }
  /**
   * VM selection configuration message
   */
  export interface Schema$VmSelectionConfig {
    /**
     * Required. The Google Cloud Platform zone the VM is located.
     */
    vmZone?: string | null;
  }
  /**
   * The VPC peering configuration is used to create VPC peering with the consumer's VPC.
   */
  export interface Schema$VpcPeeringConfig {
    /**
     * Required. A free subnet for peering. (CIDR of /29)
     */
    subnet?: string | null;
    /**
     * Required. Fully qualified name of the VPC that Database Migration Service will peer to.
     */
    vpcName?: string | null;
  }
  /**
   * The details of the VPC where the source database is located in Google Cloud. We will use this information to set up the VPC peering connection between Cloud SQL and this VPC.
   */
  export interface Schema$VpcPeeringConnectivity {
    /**
     * The name of the VPC network to peer with the Cloud SQL private network.
     */
    vpc?: string | null;
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
    connectionProfiles: Resource$Projects$Locations$Connectionprofiles;
    conversionWorkspaces: Resource$Projects$Locations$Conversionworkspaces;
    migrationJobs: Resource$Projects$Locations$Migrationjobs;
    operations: Resource$Projects$Locations$Operations;
    privateConnections: Resource$Projects$Locations$Privateconnections;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.connectionProfiles =
        new Resource$Projects$Locations$Connectionprofiles(this.context);
      this.conversionWorkspaces =
        new Resource$Projects$Locations$Conversionworkspaces(this.context);
      this.migrationJobs = new Resource$Projects$Locations$Migrationjobs(
        this.context
      );
      this.operations = new Resource$Projects$Locations$Operations(
        this.context
      );
      this.privateConnections =
        new Resource$Projects$Locations$Privateconnections(this.context);
    }

    /**
     * Fetches a set of static IP addresses that need to be allowlisted by the customer when using the static-IP connectivity method.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    fetchStaticIps(
      params: Params$Resource$Projects$Locations$Fetchstaticips,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    fetchStaticIps(
      params?: Params$Resource$Projects$Locations$Fetchstaticips,
      options?: MethodOptions
    ): GaxiosPromise<Schema$FetchStaticIpsResponse>;
    fetchStaticIps(
      params: Params$Resource$Projects$Locations$Fetchstaticips,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    fetchStaticIps(
      params: Params$Resource$Projects$Locations$Fetchstaticips,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$FetchStaticIpsResponse>,
      callback: BodyResponseCallback<Schema$FetchStaticIpsResponse>
    ): void;
    fetchStaticIps(
      params: Params$Resource$Projects$Locations$Fetchstaticips,
      callback: BodyResponseCallback<Schema$FetchStaticIpsResponse>
    ): void;
    fetchStaticIps(
      callback: BodyResponseCallback<Schema$FetchStaticIpsResponse>
    ): void;
    fetchStaticIps(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Fetchstaticips
        | BodyResponseCallback<Schema$FetchStaticIpsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$FetchStaticIpsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$FetchStaticIpsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$FetchStaticIpsResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Fetchstaticips;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Fetchstaticips;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://datamigration.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}:fetchStaticIps').replace(
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
        createAPIRequest<Schema$FetchStaticIpsResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$FetchStaticIpsResponse>(parameters);
      }
    }

    /**
     * Gets information about a location.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    get(
      params: Params$Resource$Projects$Locations$Get,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    get(
      params?: Params$Resource$Projects$Locations$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Location>;
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
    ): void | GaxiosPromise<Schema$Location> | GaxiosPromise<Readable> {
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
        options.rootUrl || 'https://datamigration.googleapis.com/';
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
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    list(
      params: Params$Resource$Projects$Locations$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Projects$Locations$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ListLocationsResponse>;
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
      | GaxiosPromise<Schema$ListLocationsResponse>
      | GaxiosPromise<Readable> {
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
        options.rootUrl || 'https://datamigration.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}/locations').replace(
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
        createAPIRequest<Schema$ListLocationsResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ListLocationsResponse>(parameters);
      }
    }
  }

  export interface Params$Resource$Projects$Locations$Fetchstaticips
    extends StandardParameters {
    /**
     * Required. The resource name for the location for which static IPs should be returned. Must be in the format `projects/x/locations/x`.
     */
    name?: string;
    /**
     * Maximum number of IPs to return.
     */
    pageSize?: number;
    /**
     * A page token, received from a previous `FetchStaticIps` call.
     */
    pageToken?: string;
  }
  export interface Params$Resource$Projects$Locations$Get
    extends StandardParameters {
    /**
     * Resource name for the location.
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Locations$List
    extends StandardParameters {
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

  export class Resource$Projects$Locations$Connectionprofiles {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Creates a new connection profile in a given project and location.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    create(
      params: Params$Resource$Projects$Locations$Connectionprofiles$Create,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    create(
      params?: Params$Resource$Projects$Locations$Connectionprofiles$Create,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Operation>;
    create(
      params: Params$Resource$Projects$Locations$Connectionprofiles$Create,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    create(
      params: Params$Resource$Projects$Locations$Connectionprofiles$Create,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    create(
      params: Params$Resource$Projects$Locations$Connectionprofiles$Create,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    create(callback: BodyResponseCallback<Schema$Operation>): void;
    create(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Connectionprofiles$Create
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
        {}) as Params$Resource$Projects$Locations$Connectionprofiles$Create;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Connectionprofiles$Create;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://datamigration.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}/connectionProfiles').replace(
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
     * Deletes a single Database Migration Service connection profile. A connection profile can only be deleted if it is not in use by any active migration jobs.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    delete(
      params: Params$Resource$Projects$Locations$Connectionprofiles$Delete,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    delete(
      params?: Params$Resource$Projects$Locations$Connectionprofiles$Delete,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Operation>;
    delete(
      params: Params$Resource$Projects$Locations$Connectionprofiles$Delete,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    delete(
      params: Params$Resource$Projects$Locations$Connectionprofiles$Delete,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    delete(
      params: Params$Resource$Projects$Locations$Connectionprofiles$Delete,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    delete(callback: BodyResponseCallback<Schema$Operation>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Connectionprofiles$Delete
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
        {}) as Params$Resource$Projects$Locations$Connectionprofiles$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Connectionprofiles$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://datamigration.googleapis.com/';
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
     * Gets details of a single connection profile.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    get(
      params: Params$Resource$Projects$Locations$Connectionprofiles$Get,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    get(
      params?: Params$Resource$Projects$Locations$Connectionprofiles$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ConnectionProfile>;
    get(
      params: Params$Resource$Projects$Locations$Connectionprofiles$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Connectionprofiles$Get,
      options: MethodOptions | BodyResponseCallback<Schema$ConnectionProfile>,
      callback: BodyResponseCallback<Schema$ConnectionProfile>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Connectionprofiles$Get,
      callback: BodyResponseCallback<Schema$ConnectionProfile>
    ): void;
    get(callback: BodyResponseCallback<Schema$ConnectionProfile>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Connectionprofiles$Get
        | BodyResponseCallback<Schema$ConnectionProfile>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ConnectionProfile>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ConnectionProfile>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$ConnectionProfile>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Connectionprofiles$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Connectionprofiles$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://datamigration.googleapis.com/';
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
        createAPIRequest<Schema$ConnectionProfile>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ConnectionProfile>(parameters);
      }
    }

    /**
     * Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    getIamPolicy(
      params: Params$Resource$Projects$Locations$Connectionprofiles$Getiampolicy,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    getIamPolicy(
      params?: Params$Resource$Projects$Locations$Connectionprofiles$Getiampolicy,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Policy>;
    getIamPolicy(
      params: Params$Resource$Projects$Locations$Connectionprofiles$Getiampolicy,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    getIamPolicy(
      params: Params$Resource$Projects$Locations$Connectionprofiles$Getiampolicy,
      options: MethodOptions | BodyResponseCallback<Schema$Policy>,
      callback: BodyResponseCallback<Schema$Policy>
    ): void;
    getIamPolicy(
      params: Params$Resource$Projects$Locations$Connectionprofiles$Getiampolicy,
      callback: BodyResponseCallback<Schema$Policy>
    ): void;
    getIamPolicy(callback: BodyResponseCallback<Schema$Policy>): void;
    getIamPolicy(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Connectionprofiles$Getiampolicy
        | BodyResponseCallback<Schema$Policy>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Policy>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Policy>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$Policy> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Connectionprofiles$Getiampolicy;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Connectionprofiles$Getiampolicy;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://datamigration.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+resource}:getIamPolicy').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'GET',
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
     * Retrieves a list of all connection profiles in a given project and location.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    list(
      params: Params$Resource$Projects$Locations$Connectionprofiles$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Projects$Locations$Connectionprofiles$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ListConnectionProfilesResponse>;
    list(
      params: Params$Resource$Projects$Locations$Connectionprofiles$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Connectionprofiles$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ListConnectionProfilesResponse>,
      callback: BodyResponseCallback<Schema$ListConnectionProfilesResponse>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Connectionprofiles$List,
      callback: BodyResponseCallback<Schema$ListConnectionProfilesResponse>
    ): void;
    list(
      callback: BodyResponseCallback<Schema$ListConnectionProfilesResponse>
    ): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Connectionprofiles$List
        | BodyResponseCallback<Schema$ListConnectionProfilesResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ListConnectionProfilesResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ListConnectionProfilesResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$ListConnectionProfilesResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Connectionprofiles$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Connectionprofiles$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://datamigration.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}/connectionProfiles').replace(
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
        createAPIRequest<Schema$ListConnectionProfilesResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ListConnectionProfilesResponse>(
          parameters
        );
      }
    }

    /**
     * Update the configuration of a single connection profile.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    patch(
      params: Params$Resource$Projects$Locations$Connectionprofiles$Patch,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    patch(
      params?: Params$Resource$Projects$Locations$Connectionprofiles$Patch,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Operation>;
    patch(
      params: Params$Resource$Projects$Locations$Connectionprofiles$Patch,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    patch(
      params: Params$Resource$Projects$Locations$Connectionprofiles$Patch,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    patch(
      params: Params$Resource$Projects$Locations$Connectionprofiles$Patch,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    patch(callback: BodyResponseCallback<Schema$Operation>): void;
    patch(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Connectionprofiles$Patch
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
        {}) as Params$Resource$Projects$Locations$Connectionprofiles$Patch;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Connectionprofiles$Patch;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://datamigration.googleapis.com/';
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

    /**
     * Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    setIamPolicy(
      params: Params$Resource$Projects$Locations$Connectionprofiles$Setiampolicy,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    setIamPolicy(
      params?: Params$Resource$Projects$Locations$Connectionprofiles$Setiampolicy,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Policy>;
    setIamPolicy(
      params: Params$Resource$Projects$Locations$Connectionprofiles$Setiampolicy,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    setIamPolicy(
      params: Params$Resource$Projects$Locations$Connectionprofiles$Setiampolicy,
      options: MethodOptions | BodyResponseCallback<Schema$Policy>,
      callback: BodyResponseCallback<Schema$Policy>
    ): void;
    setIamPolicy(
      params: Params$Resource$Projects$Locations$Connectionprofiles$Setiampolicy,
      callback: BodyResponseCallback<Schema$Policy>
    ): void;
    setIamPolicy(callback: BodyResponseCallback<Schema$Policy>): void;
    setIamPolicy(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Connectionprofiles$Setiampolicy
        | BodyResponseCallback<Schema$Policy>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Policy>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Policy>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$Policy> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Connectionprofiles$Setiampolicy;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Connectionprofiles$Setiampolicy;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://datamigration.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+resource}:setIamPolicy').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
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
     * Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    testIamPermissions(
      params: Params$Resource$Projects$Locations$Connectionprofiles$Testiampermissions,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    testIamPermissions(
      params?: Params$Resource$Projects$Locations$Connectionprofiles$Testiampermissions,
      options?: MethodOptions
    ): GaxiosPromise<Schema$TestIamPermissionsResponse>;
    testIamPermissions(
      params: Params$Resource$Projects$Locations$Connectionprofiles$Testiampermissions,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    testIamPermissions(
      params: Params$Resource$Projects$Locations$Connectionprofiles$Testiampermissions,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$TestIamPermissionsResponse>,
      callback: BodyResponseCallback<Schema$TestIamPermissionsResponse>
    ): void;
    testIamPermissions(
      params: Params$Resource$Projects$Locations$Connectionprofiles$Testiampermissions,
      callback: BodyResponseCallback<Schema$TestIamPermissionsResponse>
    ): void;
    testIamPermissions(
      callback: BodyResponseCallback<Schema$TestIamPermissionsResponse>
    ): void;
    testIamPermissions(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Connectionprofiles$Testiampermissions
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
      | GaxiosPromise<Schema$TestIamPermissionsResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Connectionprofiles$Testiampermissions;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Connectionprofiles$Testiampermissions;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://datamigration.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+resource}:testIamPermissions').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
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

  export interface Params$Resource$Projects$Locations$Connectionprofiles$Create
    extends StandardParameters {
    /**
     * Required. The connection profile identifier.
     */
    connectionProfileId?: string;
    /**
     * Required. The parent which owns this collection of connection profiles.
     */
    parent?: string;
    /**
     * Optional. A unique ID used to identify the request. If the server receives two requests with the same ID, then the second request is ignored. It is recommended to always set this value to a UUID. The ID must contain only letters (a-z, A-Z), numbers (0-9), underscores (_), and hyphens (-). The maximum length is 40 characters.
     */
    requestId?: string;
    /**
     * Optional. Create the connection profile without validating it. The default is false. Only supported for Oracle connection profiles.
     */
    skipValidation?: boolean;
    /**
     * Optional. Only validate the connection profile, but don't create any resources. The default is false. Only supported for Oracle connection profiles.
     */
    validateOnly?: boolean;

    /**
     * Request body metadata
     */
    requestBody?: Schema$ConnectionProfile;
  }
  export interface Params$Resource$Projects$Locations$Connectionprofiles$Delete
    extends StandardParameters {
    /**
     * In case of force delete, the CloudSQL replica database is also deleted (only for CloudSQL connection profile).
     */
    force?: boolean;
    /**
     * Required. Name of the connection profile resource to delete.
     */
    name?: string;
    /**
     * A unique ID used to identify the request. If the server receives two requests with the same ID, then the second request is ignored. It is recommended to always set this value to a UUID. The ID must contain only letters (a-z, A-Z), numbers (0-9), underscores (_), and hyphens (-). The maximum length is 40 characters.
     */
    requestId?: string;
  }
  export interface Params$Resource$Projects$Locations$Connectionprofiles$Get
    extends StandardParameters {
    /**
     * Required. Name of the connection profile resource to get.
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Locations$Connectionprofiles$Getiampolicy
    extends StandardParameters {
    /**
     * Optional. The maximum policy version that will be used to format the policy. Valid values are 0, 1, and 3. Requests specifying an invalid value will be rejected. Requests for policies with any conditional role bindings must specify version 3. Policies with no conditional role bindings may specify any valid value or leave the field unset. The policy in the response might use the policy version that you specified, or it might use a lower policy version. For example, if you specify version 3, but the policy has no conditional role bindings, the response uses version 1. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies).
     */
    'options.requestedPolicyVersion'?: number;
    /**
     * REQUIRED: The resource for which the policy is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     */
    resource?: string;
  }
  export interface Params$Resource$Projects$Locations$Connectionprofiles$List
    extends StandardParameters {
    /**
     * A filter expression that filters connection profiles listed in the response. The expression must specify the field name, a comparison operator, and the value that you want to use for filtering. The value must be a string, a number, or a boolean. The comparison operator must be either =, !=, \>, or <. For example, list connection profiles created this year by specifying **createTime %gt; 2020-01-01T00:00:00.000000000Z**. You can also filter nested fields. For example, you could specify **mySql.username = %lt;my_username%gt;** to list all connection profiles configured to connect with a specific username.
     */
    filter?: string;
    /**
     * A comma-separated list of fields to order results according to.
     */
    orderBy?: string;
    /**
     * The maximum number of connection profiles to return. The service may return fewer than this value. If unspecified, at most 50 connection profiles will be returned. The maximum value is 1000; values above 1000 are coerced to 1000.
     */
    pageSize?: number;
    /**
     * A page token, received from a previous `ListConnectionProfiles` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListConnectionProfiles` must match the call that provided the page token.
     */
    pageToken?: string;
    /**
     * Required. The parent which owns this collection of connection profiles.
     */
    parent?: string;
  }
  export interface Params$Resource$Projects$Locations$Connectionprofiles$Patch
    extends StandardParameters {
    /**
     * The name of this connection profile resource in the form of projects/{project\}/locations/{location\}/connectionProfiles/{connectionProfile\}.
     */
    name?: string;
    /**
     * Optional. A unique ID used to identify the request. If the server receives two requests with the same ID, then the second request is ignored. It is recommended to always set this value to a UUID. The ID must contain only letters (a-z, A-Z), numbers (0-9), underscores (_), and hyphens (-). The maximum length is 40 characters.
     */
    requestId?: string;
    /**
     * Optional. Update the connection profile without validating it. The default is false. Only supported for Oracle connection profiles.
     */
    skipValidation?: boolean;
    /**
     * Required. Field mask is used to specify the fields to be overwritten by the update in the conversion workspace resource.
     */
    updateMask?: string;
    /**
     * Optional. Only validate the connection profile, but don't update any resources. The default is false. Only supported for Oracle connection profiles.
     */
    validateOnly?: boolean;

    /**
     * Request body metadata
     */
    requestBody?: Schema$ConnectionProfile;
  }
  export interface Params$Resource$Projects$Locations$Connectionprofiles$Setiampolicy
    extends StandardParameters {
    /**
     * REQUIRED: The resource for which the policy is being specified. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     */
    resource?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$SetIamPolicyRequest;
  }
  export interface Params$Resource$Projects$Locations$Connectionprofiles$Testiampermissions
    extends StandardParameters {
    /**
     * REQUIRED: The resource for which the policy detail is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     */
    resource?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$TestIamPermissionsRequest;
  }

  export class Resource$Projects$Locations$Conversionworkspaces {
    context: APIRequestContext;
    mappingRules: Resource$Projects$Locations$Conversionworkspaces$Mappingrules;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.mappingRules =
        new Resource$Projects$Locations$Conversionworkspaces$Mappingrules(
          this.context
        );
    }

    /**
     * Applies draft tree onto a specific destination database.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    apply(
      params: Params$Resource$Projects$Locations$Conversionworkspaces$Apply,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    apply(
      params?: Params$Resource$Projects$Locations$Conversionworkspaces$Apply,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Operation>;
    apply(
      params: Params$Resource$Projects$Locations$Conversionworkspaces$Apply,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    apply(
      params: Params$Resource$Projects$Locations$Conversionworkspaces$Apply,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    apply(
      params: Params$Resource$Projects$Locations$Conversionworkspaces$Apply,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    apply(callback: BodyResponseCallback<Schema$Operation>): void;
    apply(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Conversionworkspaces$Apply
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
        {}) as Params$Resource$Projects$Locations$Conversionworkspaces$Apply;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Conversionworkspaces$Apply;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://datamigration.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}:apply').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$Operation>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Operation>(parameters);
      }
    }

    /**
     * Marks all the data in the conversion workspace as committed.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    commit(
      params: Params$Resource$Projects$Locations$Conversionworkspaces$Commit,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    commit(
      params?: Params$Resource$Projects$Locations$Conversionworkspaces$Commit,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Operation>;
    commit(
      params: Params$Resource$Projects$Locations$Conversionworkspaces$Commit,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    commit(
      params: Params$Resource$Projects$Locations$Conversionworkspaces$Commit,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    commit(
      params: Params$Resource$Projects$Locations$Conversionworkspaces$Commit,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    commit(callback: BodyResponseCallback<Schema$Operation>): void;
    commit(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Conversionworkspaces$Commit
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
        {}) as Params$Resource$Projects$Locations$Conversionworkspaces$Commit;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Conversionworkspaces$Commit;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://datamigration.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}:commit').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$Operation>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Operation>(parameters);
      }
    }

    /**
     * Creates a draft tree schema for the destination database.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    convert(
      params: Params$Resource$Projects$Locations$Conversionworkspaces$Convert,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    convert(
      params?: Params$Resource$Projects$Locations$Conversionworkspaces$Convert,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Operation>;
    convert(
      params: Params$Resource$Projects$Locations$Conversionworkspaces$Convert,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    convert(
      params: Params$Resource$Projects$Locations$Conversionworkspaces$Convert,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    convert(
      params: Params$Resource$Projects$Locations$Conversionworkspaces$Convert,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    convert(callback: BodyResponseCallback<Schema$Operation>): void;
    convert(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Conversionworkspaces$Convert
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
        {}) as Params$Resource$Projects$Locations$Conversionworkspaces$Convert;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Conversionworkspaces$Convert;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://datamigration.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}:convert').replace(
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
        createAPIRequest<Schema$Operation>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Operation>(parameters);
      }
    }

    /**
     * Creates a new conversion workspace in a given project and location.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    create(
      params: Params$Resource$Projects$Locations$Conversionworkspaces$Create,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    create(
      params?: Params$Resource$Projects$Locations$Conversionworkspaces$Create,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Operation>;
    create(
      params: Params$Resource$Projects$Locations$Conversionworkspaces$Create,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    create(
      params: Params$Resource$Projects$Locations$Conversionworkspaces$Create,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    create(
      params: Params$Resource$Projects$Locations$Conversionworkspaces$Create,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    create(callback: BodyResponseCallback<Schema$Operation>): void;
    create(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Conversionworkspaces$Create
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
        {}) as Params$Resource$Projects$Locations$Conversionworkspaces$Create;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Conversionworkspaces$Create;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://datamigration.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}/conversionWorkspaces').replace(
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
     * Deletes a single conversion workspace.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    delete(
      params: Params$Resource$Projects$Locations$Conversionworkspaces$Delete,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    delete(
      params?: Params$Resource$Projects$Locations$Conversionworkspaces$Delete,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Operation>;
    delete(
      params: Params$Resource$Projects$Locations$Conversionworkspaces$Delete,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    delete(
      params: Params$Resource$Projects$Locations$Conversionworkspaces$Delete,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    delete(
      params: Params$Resource$Projects$Locations$Conversionworkspaces$Delete,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    delete(callback: BodyResponseCallback<Schema$Operation>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Conversionworkspaces$Delete
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
        {}) as Params$Resource$Projects$Locations$Conversionworkspaces$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Conversionworkspaces$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://datamigration.googleapis.com/';
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
     * Retrieves a list of committed revisions of a specific conversion workspace.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    describeConversionWorkspaceRevisions(
      params: Params$Resource$Projects$Locations$Conversionworkspaces$Describeconversionworkspacerevisions,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    describeConversionWorkspaceRevisions(
      params?: Params$Resource$Projects$Locations$Conversionworkspaces$Describeconversionworkspacerevisions,
      options?: MethodOptions
    ): GaxiosPromise<Schema$DescribeConversionWorkspaceRevisionsResponse>;
    describeConversionWorkspaceRevisions(
      params: Params$Resource$Projects$Locations$Conversionworkspaces$Describeconversionworkspacerevisions,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    describeConversionWorkspaceRevisions(
      params: Params$Resource$Projects$Locations$Conversionworkspaces$Describeconversionworkspacerevisions,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$DescribeConversionWorkspaceRevisionsResponse>,
      callback: BodyResponseCallback<Schema$DescribeConversionWorkspaceRevisionsResponse>
    ): void;
    describeConversionWorkspaceRevisions(
      params: Params$Resource$Projects$Locations$Conversionworkspaces$Describeconversionworkspacerevisions,
      callback: BodyResponseCallback<Schema$DescribeConversionWorkspaceRevisionsResponse>
    ): void;
    describeConversionWorkspaceRevisions(
      callback: BodyResponseCallback<Schema$DescribeConversionWorkspaceRevisionsResponse>
    ): void;
    describeConversionWorkspaceRevisions(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Conversionworkspaces$Describeconversionworkspacerevisions
        | BodyResponseCallback<Schema$DescribeConversionWorkspaceRevisionsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$DescribeConversionWorkspaceRevisionsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$DescribeConversionWorkspaceRevisionsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$DescribeConversionWorkspaceRevisionsResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Conversionworkspaces$Describeconversionworkspacerevisions;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Conversionworkspaces$Describeconversionworkspacerevisions;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://datamigration.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/v1/{+conversionWorkspace}:describeConversionWorkspaceRevisions'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['conversionWorkspace'],
        pathParams: ['conversionWorkspace'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$DescribeConversionWorkspaceRevisionsResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$DescribeConversionWorkspaceRevisionsResponse>(
          parameters
        );
      }
    }

    /**
     * Describes the database entities tree for a specific conversion workspace and a specific tree type. Database entities are not resources like conversion workspaces or mapping rules, and they can't be created, updated or deleted. Instead, they are simple data objects describing the structure of the client database.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    describeDatabaseEntities(
      params: Params$Resource$Projects$Locations$Conversionworkspaces$Describedatabaseentities,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    describeDatabaseEntities(
      params?: Params$Resource$Projects$Locations$Conversionworkspaces$Describedatabaseentities,
      options?: MethodOptions
    ): GaxiosPromise<Schema$DescribeDatabaseEntitiesResponse>;
    describeDatabaseEntities(
      params: Params$Resource$Projects$Locations$Conversionworkspaces$Describedatabaseentities,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    describeDatabaseEntities(
      params: Params$Resource$Projects$Locations$Conversionworkspaces$Describedatabaseentities,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$DescribeDatabaseEntitiesResponse>,
      callback: BodyResponseCallback<Schema$DescribeDatabaseEntitiesResponse>
    ): void;
    describeDatabaseEntities(
      params: Params$Resource$Projects$Locations$Conversionworkspaces$Describedatabaseentities,
      callback: BodyResponseCallback<Schema$DescribeDatabaseEntitiesResponse>
    ): void;
    describeDatabaseEntities(
      callback: BodyResponseCallback<Schema$DescribeDatabaseEntitiesResponse>
    ): void;
    describeDatabaseEntities(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Conversionworkspaces$Describedatabaseentities
        | BodyResponseCallback<Schema$DescribeDatabaseEntitiesResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$DescribeDatabaseEntitiesResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$DescribeDatabaseEntitiesResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$DescribeDatabaseEntitiesResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Conversionworkspaces$Describedatabaseentities;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Conversionworkspaces$Describedatabaseentities;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://datamigration.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl + '/v1/{+conversionWorkspace}:describeDatabaseEntities'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['conversionWorkspace'],
        pathParams: ['conversionWorkspace'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$DescribeDatabaseEntitiesResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$DescribeDatabaseEntitiesResponse>(
          parameters
        );
      }
    }

    /**
     * Gets details of a single conversion workspace.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    get(
      params: Params$Resource$Projects$Locations$Conversionworkspaces$Get,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    get(
      params?: Params$Resource$Projects$Locations$Conversionworkspaces$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ConversionWorkspace>;
    get(
      params: Params$Resource$Projects$Locations$Conversionworkspaces$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Conversionworkspaces$Get,
      options: MethodOptions | BodyResponseCallback<Schema$ConversionWorkspace>,
      callback: BodyResponseCallback<Schema$ConversionWorkspace>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Conversionworkspaces$Get,
      callback: BodyResponseCallback<Schema$ConversionWorkspace>
    ): void;
    get(callback: BodyResponseCallback<Schema$ConversionWorkspace>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Conversionworkspaces$Get
        | BodyResponseCallback<Schema$ConversionWorkspace>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ConversionWorkspace>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ConversionWorkspace>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$ConversionWorkspace>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Conversionworkspaces$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Conversionworkspaces$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://datamigration.googleapis.com/';
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
        createAPIRequest<Schema$ConversionWorkspace>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ConversionWorkspace>(parameters);
      }
    }

    /**
     * Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    getIamPolicy(
      params: Params$Resource$Projects$Locations$Conversionworkspaces$Getiampolicy,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    getIamPolicy(
      params?: Params$Resource$Projects$Locations$Conversionworkspaces$Getiampolicy,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Policy>;
    getIamPolicy(
      params: Params$Resource$Projects$Locations$Conversionworkspaces$Getiampolicy,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    getIamPolicy(
      params: Params$Resource$Projects$Locations$Conversionworkspaces$Getiampolicy,
      options: MethodOptions | BodyResponseCallback<Schema$Policy>,
      callback: BodyResponseCallback<Schema$Policy>
    ): void;
    getIamPolicy(
      params: Params$Resource$Projects$Locations$Conversionworkspaces$Getiampolicy,
      callback: BodyResponseCallback<Schema$Policy>
    ): void;
    getIamPolicy(callback: BodyResponseCallback<Schema$Policy>): void;
    getIamPolicy(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Conversionworkspaces$Getiampolicy
        | BodyResponseCallback<Schema$Policy>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Policy>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Policy>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$Policy> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Conversionworkspaces$Getiampolicy;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Conversionworkspaces$Getiampolicy;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://datamigration.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+resource}:getIamPolicy').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'GET',
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
     * Lists conversion workspaces in a given project and location.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    list(
      params: Params$Resource$Projects$Locations$Conversionworkspaces$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Projects$Locations$Conversionworkspaces$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ListConversionWorkspacesResponse>;
    list(
      params: Params$Resource$Projects$Locations$Conversionworkspaces$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Conversionworkspaces$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ListConversionWorkspacesResponse>,
      callback: BodyResponseCallback<Schema$ListConversionWorkspacesResponse>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Conversionworkspaces$List,
      callback: BodyResponseCallback<Schema$ListConversionWorkspacesResponse>
    ): void;
    list(
      callback: BodyResponseCallback<Schema$ListConversionWorkspacesResponse>
    ): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Conversionworkspaces$List
        | BodyResponseCallback<Schema$ListConversionWorkspacesResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ListConversionWorkspacesResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ListConversionWorkspacesResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$ListConversionWorkspacesResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Conversionworkspaces$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Conversionworkspaces$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://datamigration.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}/conversionWorkspaces').replace(
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
        createAPIRequest<Schema$ListConversionWorkspacesResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ListConversionWorkspacesResponse>(
          parameters
        );
      }
    }

    /**
     * Updates the parameters of a single conversion workspace.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    patch(
      params: Params$Resource$Projects$Locations$Conversionworkspaces$Patch,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    patch(
      params?: Params$Resource$Projects$Locations$Conversionworkspaces$Patch,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Operation>;
    patch(
      params: Params$Resource$Projects$Locations$Conversionworkspaces$Patch,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    patch(
      params: Params$Resource$Projects$Locations$Conversionworkspaces$Patch,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    patch(
      params: Params$Resource$Projects$Locations$Conversionworkspaces$Patch,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    patch(callback: BodyResponseCallback<Schema$Operation>): void;
    patch(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Conversionworkspaces$Patch
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
        {}) as Params$Resource$Projects$Locations$Conversionworkspaces$Patch;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Conversionworkspaces$Patch;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://datamigration.googleapis.com/';
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

    /**
     * Rolls back a conversion workspace to the last committed snapshot.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    rollback(
      params: Params$Resource$Projects$Locations$Conversionworkspaces$Rollback,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    rollback(
      params?: Params$Resource$Projects$Locations$Conversionworkspaces$Rollback,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Operation>;
    rollback(
      params: Params$Resource$Projects$Locations$Conversionworkspaces$Rollback,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    rollback(
      params: Params$Resource$Projects$Locations$Conversionworkspaces$Rollback,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    rollback(
      params: Params$Resource$Projects$Locations$Conversionworkspaces$Rollback,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    rollback(callback: BodyResponseCallback<Schema$Operation>): void;
    rollback(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Conversionworkspaces$Rollback
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
        {}) as Params$Resource$Projects$Locations$Conversionworkspaces$Rollback;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Conversionworkspaces$Rollback;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://datamigration.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}:rollback').replace(
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
        createAPIRequest<Schema$Operation>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Operation>(parameters);
      }
    }

    /**
     * Searches/lists the background jobs for a specific conversion workspace. The background jobs are not resources like conversion workspaces or mapping rules, and they can't be created, updated or deleted. Instead, they are a way to expose the data plane jobs log.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    searchBackgroundJobs(
      params: Params$Resource$Projects$Locations$Conversionworkspaces$Searchbackgroundjobs,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    searchBackgroundJobs(
      params?: Params$Resource$Projects$Locations$Conversionworkspaces$Searchbackgroundjobs,
      options?: MethodOptions
    ): GaxiosPromise<Schema$SearchBackgroundJobsResponse>;
    searchBackgroundJobs(
      params: Params$Resource$Projects$Locations$Conversionworkspaces$Searchbackgroundjobs,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    searchBackgroundJobs(
      params: Params$Resource$Projects$Locations$Conversionworkspaces$Searchbackgroundjobs,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$SearchBackgroundJobsResponse>,
      callback: BodyResponseCallback<Schema$SearchBackgroundJobsResponse>
    ): void;
    searchBackgroundJobs(
      params: Params$Resource$Projects$Locations$Conversionworkspaces$Searchbackgroundjobs,
      callback: BodyResponseCallback<Schema$SearchBackgroundJobsResponse>
    ): void;
    searchBackgroundJobs(
      callback: BodyResponseCallback<Schema$SearchBackgroundJobsResponse>
    ): void;
    searchBackgroundJobs(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Conversionworkspaces$Searchbackgroundjobs
        | BodyResponseCallback<Schema$SearchBackgroundJobsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$SearchBackgroundJobsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$SearchBackgroundJobsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$SearchBackgroundJobsResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Conversionworkspaces$Searchbackgroundjobs;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Conversionworkspaces$Searchbackgroundjobs;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://datamigration.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl + '/v1/{+conversionWorkspace}:searchBackgroundJobs'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['conversionWorkspace'],
        pathParams: ['conversionWorkspace'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$SearchBackgroundJobsResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$SearchBackgroundJobsResponse>(
          parameters
        );
      }
    }

    /**
     * Imports a snapshot of the source database into the conversion workspace.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    seed(
      params: Params$Resource$Projects$Locations$Conversionworkspaces$Seed,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    seed(
      params?: Params$Resource$Projects$Locations$Conversionworkspaces$Seed,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Operation>;
    seed(
      params: Params$Resource$Projects$Locations$Conversionworkspaces$Seed,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    seed(
      params: Params$Resource$Projects$Locations$Conversionworkspaces$Seed,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    seed(
      params: Params$Resource$Projects$Locations$Conversionworkspaces$Seed,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    seed(callback: BodyResponseCallback<Schema$Operation>): void;
    seed(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Conversionworkspaces$Seed
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
        {}) as Params$Resource$Projects$Locations$Conversionworkspaces$Seed;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Conversionworkspaces$Seed;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://datamigration.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}:seed').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$Operation>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Operation>(parameters);
      }
    }

    /**
     * Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    setIamPolicy(
      params: Params$Resource$Projects$Locations$Conversionworkspaces$Setiampolicy,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    setIamPolicy(
      params?: Params$Resource$Projects$Locations$Conversionworkspaces$Setiampolicy,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Policy>;
    setIamPolicy(
      params: Params$Resource$Projects$Locations$Conversionworkspaces$Setiampolicy,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    setIamPolicy(
      params: Params$Resource$Projects$Locations$Conversionworkspaces$Setiampolicy,
      options: MethodOptions | BodyResponseCallback<Schema$Policy>,
      callback: BodyResponseCallback<Schema$Policy>
    ): void;
    setIamPolicy(
      params: Params$Resource$Projects$Locations$Conversionworkspaces$Setiampolicy,
      callback: BodyResponseCallback<Schema$Policy>
    ): void;
    setIamPolicy(callback: BodyResponseCallback<Schema$Policy>): void;
    setIamPolicy(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Conversionworkspaces$Setiampolicy
        | BodyResponseCallback<Schema$Policy>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Policy>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Policy>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$Policy> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Conversionworkspaces$Setiampolicy;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Conversionworkspaces$Setiampolicy;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://datamigration.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+resource}:setIamPolicy').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
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
     * Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    testIamPermissions(
      params: Params$Resource$Projects$Locations$Conversionworkspaces$Testiampermissions,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    testIamPermissions(
      params?: Params$Resource$Projects$Locations$Conversionworkspaces$Testiampermissions,
      options?: MethodOptions
    ): GaxiosPromise<Schema$TestIamPermissionsResponse>;
    testIamPermissions(
      params: Params$Resource$Projects$Locations$Conversionworkspaces$Testiampermissions,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    testIamPermissions(
      params: Params$Resource$Projects$Locations$Conversionworkspaces$Testiampermissions,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$TestIamPermissionsResponse>,
      callback: BodyResponseCallback<Schema$TestIamPermissionsResponse>
    ): void;
    testIamPermissions(
      params: Params$Resource$Projects$Locations$Conversionworkspaces$Testiampermissions,
      callback: BodyResponseCallback<Schema$TestIamPermissionsResponse>
    ): void;
    testIamPermissions(
      callback: BodyResponseCallback<Schema$TestIamPermissionsResponse>
    ): void;
    testIamPermissions(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Conversionworkspaces$Testiampermissions
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
      | GaxiosPromise<Schema$TestIamPermissionsResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Conversionworkspaces$Testiampermissions;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Conversionworkspaces$Testiampermissions;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://datamigration.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+resource}:testIamPermissions').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
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

  export interface Params$Resource$Projects$Locations$Conversionworkspaces$Apply
    extends StandardParameters {
    /**
     * Required. The name of the conversion workspace resource for which to apply the draft tree. Must be in the form of: projects/{project\}/locations/{location\}/conversionWorkspaces/{conversion_workspace\}.
     */
    name?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$ApplyConversionWorkspaceRequest;
  }
  export interface Params$Resource$Projects$Locations$Conversionworkspaces$Commit
    extends StandardParameters {
    /**
     * Required. Name of the conversion workspace resource to commit.
     */
    name?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$CommitConversionWorkspaceRequest;
  }
  export interface Params$Resource$Projects$Locations$Conversionworkspaces$Convert
    extends StandardParameters {
    /**
     * Name of the conversion workspace resource to convert in the form of: projects/{project\}/locations/{location\}/conversionWorkspaces/{conversion_workspace\}.
     */
    name?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$ConvertConversionWorkspaceRequest;
  }
  export interface Params$Resource$Projects$Locations$Conversionworkspaces$Create
    extends StandardParameters {
    /**
     * Required. The ID of the conversion workspace to create.
     */
    conversionWorkspaceId?: string;
    /**
     * Required. The parent which owns this collection of conversion workspaces.
     */
    parent?: string;
    /**
     * A unique ID used to identify the request. If the server receives two requests with the same ID, then the second request is ignored. It is recommended to always set this value to a UUID. The ID must contain only letters (a-z, A-Z), numbers (0-9), underscores (_), and hyphens (-). The maximum length is 40 characters.
     */
    requestId?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$ConversionWorkspace;
  }
  export interface Params$Resource$Projects$Locations$Conversionworkspaces$Delete
    extends StandardParameters {
    /**
     * Force delete the conversion workspace, even if there's a running migration that is using the workspace.
     */
    force?: boolean;
    /**
     * Required. Name of the conversion workspace resource to delete.
     */
    name?: string;
    /**
     * A unique ID used to identify the request. If the server receives two requests with the same ID, then the second request is ignored. It is recommended to always set this value to a UUID. The ID must contain only letters (a-z, A-Z), numbers (0-9), underscores (_), and hyphens (-). The maximum length is 40 characters.
     */
    requestId?: string;
  }
  export interface Params$Resource$Projects$Locations$Conversionworkspaces$Describeconversionworkspacerevisions
    extends StandardParameters {
    /**
     * Optional. Optional filter to request a specific commit ID.
     */
    commitId?: string;
    /**
     * Required. Name of the conversion workspace resource whose revisions are listed. Must be in the form of: projects/{project\}/locations/{location\}/conversionWorkspaces/{conversion_workspace\}.
     */
    conversionWorkspace?: string;
  }
  export interface Params$Resource$Projects$Locations$Conversionworkspaces$Describedatabaseentities
    extends StandardParameters {
    /**
     * Optional. Request a specific commit ID. If not specified, the entities from the latest commit are returned.
     */
    commitId?: string;
    /**
     * Required. Name of the conversion workspace resource whose database entities are described. Must be in the form of: projects/{project\}/locations/{location\}/conversionWorkspaces/{conversion_workspace\}.
     */
    conversionWorkspace?: string;
    /**
     * Optional. Filter the returned entities based on AIP-160 standard.
     */
    filter?: string;
    /**
     * Optional. The maximum number of entities to return. The service may return fewer entities than the value specifies.
     */
    pageSize?: number;
    /**
     * Optional. The nextPageToken value received in the previous call to conversionWorkspace.describeDatabaseEntities, used in the subsequent request to retrieve the next page of results. On first call this should be left blank. When paginating, all other parameters provided to conversionWorkspace.describeDatabaseEntities must match the call that provided the page token.
     */
    pageToken?: string;
    /**
     * Required. The tree to fetch.
     */
    tree?: string;
    /**
     * Optional. Whether to retrieve the latest committed version of the entities or the latest version. This field is ignored if a specific commit_id is specified.
     */
    uncommitted?: boolean;
    /**
     * Optional. Results view based on AIP-157
     */
    view?: string;
  }
  export interface Params$Resource$Projects$Locations$Conversionworkspaces$Get
    extends StandardParameters {
    /**
     * Required. Name of the conversion workspace resource to get.
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Locations$Conversionworkspaces$Getiampolicy
    extends StandardParameters {
    /**
     * Optional. The maximum policy version that will be used to format the policy. Valid values are 0, 1, and 3. Requests specifying an invalid value will be rejected. Requests for policies with any conditional role bindings must specify version 3. Policies with no conditional role bindings may specify any valid value or leave the field unset. The policy in the response might use the policy version that you specified, or it might use a lower policy version. For example, if you specify version 3, but the policy has no conditional role bindings, the response uses version 1. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies).
     */
    'options.requestedPolicyVersion'?: number;
    /**
     * REQUIRED: The resource for which the policy is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     */
    resource?: string;
  }
  export interface Params$Resource$Projects$Locations$Conversionworkspaces$List
    extends StandardParameters {
    /**
     * A filter expression that filters conversion workspaces listed in the response. The expression must specify the field name, a comparison operator, and the value that you want to use for filtering. The value must be a string, a number, or a boolean. The comparison operator must be either =, !=, \>, or <. For example, list conversion workspaces created this year by specifying **createTime %gt; 2020-01-01T00:00:00.000000000Z.** You can also filter nested fields. For example, you could specify **source.version = "12.c.1"** to select all conversion workspaces with source database version equal to 12.c.1.
     */
    filter?: string;
    /**
     * The maximum number of conversion workspaces to return. The service may return fewer than this value. If unspecified, at most 50 sets are returned.
     */
    pageSize?: number;
    /**
     * The nextPageToken value received in the previous call to conversionWorkspaces.list, used in the subsequent request to retrieve the next page of results. On first call this should be left blank. When paginating, all other parameters provided to conversionWorkspaces.list must match the call that provided the page token.
     */
    pageToken?: string;
    /**
     * Required. The parent which owns this collection of conversion workspaces.
     */
    parent?: string;
  }
  export interface Params$Resource$Projects$Locations$Conversionworkspaces$Patch
    extends StandardParameters {
    /**
     * Full name of the workspace resource, in the form of: projects/{project\}/locations/{location\}/conversionWorkspaces/{conversion_workspace\}.
     */
    name?: string;
    /**
     * A unique ID used to identify the request. If the server receives two requests with the same ID, then the second request is ignored. It is recommended to always set this value to a UUID. The ID must contain only letters (a-z, A-Z), numbers (0-9), underscores (_), and hyphens (-). The maximum length is 40 characters.
     */
    requestId?: string;
    /**
     * Required. Field mask is used to specify the fields to be overwritten by the update in the conversion workspace resource.
     */
    updateMask?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$ConversionWorkspace;
  }
  export interface Params$Resource$Projects$Locations$Conversionworkspaces$Rollback
    extends StandardParameters {
    /**
     * Required. Name of the conversion workspace resource to roll back to.
     */
    name?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$RollbackConversionWorkspaceRequest;
  }
  export interface Params$Resource$Projects$Locations$Conversionworkspaces$Searchbackgroundjobs
    extends StandardParameters {
    /**
     * Optional. If provided, only returns jobs that completed until (not including) the given timestamp.
     */
    completedUntilTime?: string;
    /**
     * Required. Name of the conversion workspace resource whose jobs are listed, in the form of: projects/{project\}/locations/{location\}/conversionWorkspaces/{conversion_workspace\}.
     */
    conversionWorkspace?: string;
    /**
     * Optional. The maximum number of jobs to return. The service may return fewer than this value. If unspecified, at most 100 jobs are returned. The maximum value is 100; values above 100 are coerced to 100.
     */
    maxSize?: number;
    /**
     * Optional. Whether or not to return just the most recent job per job type,
     */
    returnMostRecentPerJobType?: boolean;
  }
  export interface Params$Resource$Projects$Locations$Conversionworkspaces$Seed
    extends StandardParameters {
    /**
     * Name of the conversion workspace resource to seed with new database structure, in the form of: projects/{project\}/locations/{location\}/conversionWorkspaces/{conversion_workspace\}.
     */
    name?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$SeedConversionWorkspaceRequest;
  }
  export interface Params$Resource$Projects$Locations$Conversionworkspaces$Setiampolicy
    extends StandardParameters {
    /**
     * REQUIRED: The resource for which the policy is being specified. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     */
    resource?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$SetIamPolicyRequest;
  }
  export interface Params$Resource$Projects$Locations$Conversionworkspaces$Testiampermissions
    extends StandardParameters {
    /**
     * REQUIRED: The resource for which the policy detail is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     */
    resource?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$TestIamPermissionsRequest;
  }

  export class Resource$Projects$Locations$Conversionworkspaces$Mappingrules {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Creates a new mapping rule for a given conversion workspace.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    create(
      params: Params$Resource$Projects$Locations$Conversionworkspaces$Mappingrules$Create,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    create(
      params?: Params$Resource$Projects$Locations$Conversionworkspaces$Mappingrules$Create,
      options?: MethodOptions
    ): GaxiosPromise<Schema$MappingRule>;
    create(
      params: Params$Resource$Projects$Locations$Conversionworkspaces$Mappingrules$Create,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    create(
      params: Params$Resource$Projects$Locations$Conversionworkspaces$Mappingrules$Create,
      options: MethodOptions | BodyResponseCallback<Schema$MappingRule>,
      callback: BodyResponseCallback<Schema$MappingRule>
    ): void;
    create(
      params: Params$Resource$Projects$Locations$Conversionworkspaces$Mappingrules$Create,
      callback: BodyResponseCallback<Schema$MappingRule>
    ): void;
    create(callback: BodyResponseCallback<Schema$MappingRule>): void;
    create(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Conversionworkspaces$Mappingrules$Create
        | BodyResponseCallback<Schema$MappingRule>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$MappingRule>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$MappingRule>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$MappingRule> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Conversionworkspaces$Mappingrules$Create;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Conversionworkspaces$Mappingrules$Create;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://datamigration.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}/mappingRules').replace(
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
        createAPIRequest<Schema$MappingRule>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$MappingRule>(parameters);
      }
    }

    /**
     * Deletes a single mapping rule.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    delete(
      params: Params$Resource$Projects$Locations$Conversionworkspaces$Mappingrules$Delete,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    delete(
      params?: Params$Resource$Projects$Locations$Conversionworkspaces$Mappingrules$Delete,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Empty>;
    delete(
      params: Params$Resource$Projects$Locations$Conversionworkspaces$Mappingrules$Delete,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    delete(
      params: Params$Resource$Projects$Locations$Conversionworkspaces$Mappingrules$Delete,
      options: MethodOptions | BodyResponseCallback<Schema$Empty>,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    delete(
      params: Params$Resource$Projects$Locations$Conversionworkspaces$Mappingrules$Delete,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    delete(callback: BodyResponseCallback<Schema$Empty>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Conversionworkspaces$Mappingrules$Delete
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
        {}) as Params$Resource$Projects$Locations$Conversionworkspaces$Mappingrules$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Conversionworkspaces$Mappingrules$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://datamigration.googleapis.com/';
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
     * Gets the details of a mapping rule.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    get(
      params: Params$Resource$Projects$Locations$Conversionworkspaces$Mappingrules$Get,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    get(
      params?: Params$Resource$Projects$Locations$Conversionworkspaces$Mappingrules$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$MappingRule>;
    get(
      params: Params$Resource$Projects$Locations$Conversionworkspaces$Mappingrules$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Conversionworkspaces$Mappingrules$Get,
      options: MethodOptions | BodyResponseCallback<Schema$MappingRule>,
      callback: BodyResponseCallback<Schema$MappingRule>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Conversionworkspaces$Mappingrules$Get,
      callback: BodyResponseCallback<Schema$MappingRule>
    ): void;
    get(callback: BodyResponseCallback<Schema$MappingRule>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Conversionworkspaces$Mappingrules$Get
        | BodyResponseCallback<Schema$MappingRule>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$MappingRule>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$MappingRule>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$MappingRule> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Conversionworkspaces$Mappingrules$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Conversionworkspaces$Mappingrules$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://datamigration.googleapis.com/';
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
        createAPIRequest<Schema$MappingRule>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$MappingRule>(parameters);
      }
    }

    /**
     * Imports the mapping rules for a given conversion workspace. Supports various formats of external rules files.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    import(
      params: Params$Resource$Projects$Locations$Conversionworkspaces$Mappingrules$Import,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    import(
      params?: Params$Resource$Projects$Locations$Conversionworkspaces$Mappingrules$Import,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Operation>;
    import(
      params: Params$Resource$Projects$Locations$Conversionworkspaces$Mappingrules$Import,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    import(
      params: Params$Resource$Projects$Locations$Conversionworkspaces$Mappingrules$Import,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    import(
      params: Params$Resource$Projects$Locations$Conversionworkspaces$Mappingrules$Import,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    import(callback: BodyResponseCallback<Schema$Operation>): void;
    import(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Conversionworkspaces$Mappingrules$Import
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
        {}) as Params$Resource$Projects$Locations$Conversionworkspaces$Mappingrules$Import;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Conversionworkspaces$Mappingrules$Import;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://datamigration.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}/mappingRules:import').replace(
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
     * Lists the mapping rules for a specific conversion workspace.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    list(
      params: Params$Resource$Projects$Locations$Conversionworkspaces$Mappingrules$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Projects$Locations$Conversionworkspaces$Mappingrules$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ListMappingRulesResponse>;
    list(
      params: Params$Resource$Projects$Locations$Conversionworkspaces$Mappingrules$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Conversionworkspaces$Mappingrules$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ListMappingRulesResponse>,
      callback: BodyResponseCallback<Schema$ListMappingRulesResponse>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Conversionworkspaces$Mappingrules$List,
      callback: BodyResponseCallback<Schema$ListMappingRulesResponse>
    ): void;
    list(callback: BodyResponseCallback<Schema$ListMappingRulesResponse>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Conversionworkspaces$Mappingrules$List
        | BodyResponseCallback<Schema$ListMappingRulesResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ListMappingRulesResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ListMappingRulesResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$ListMappingRulesResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Conversionworkspaces$Mappingrules$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Conversionworkspaces$Mappingrules$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://datamigration.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}/mappingRules').replace(
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
        createAPIRequest<Schema$ListMappingRulesResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ListMappingRulesResponse>(parameters);
      }
    }
  }

  export interface Params$Resource$Projects$Locations$Conversionworkspaces$Mappingrules$Create
    extends StandardParameters {
    /**
     * Required. The ID of the rule to create.
     */
    mappingRuleId?: string;
    /**
     * Required. The parent which owns this collection of mapping rules.
     */
    parent?: string;
    /**
     * A unique ID used to identify the request. If the server receives two requests with the same ID, then the second request is ignored. It is recommended to always set this value to a UUID. The ID must contain only letters (a-z, A-Z), numbers (0-9), underscores (_), and hyphens (-). The maximum length is 40 characters.
     */
    requestId?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$MappingRule;
  }
  export interface Params$Resource$Projects$Locations$Conversionworkspaces$Mappingrules$Delete
    extends StandardParameters {
    /**
     * Required. Name of the mapping rule resource to delete.
     */
    name?: string;
    /**
     * Optional. A unique ID used to identify the request. If the server receives two requests with the same ID, then the second request is ignored. It is recommended to always set this value to a UUID. The ID must contain only letters (a-z, A-Z), numbers (0-9), underscores (_), and hyphens (-). The maximum length is 40 characters.
     */
    requestId?: string;
  }
  export interface Params$Resource$Projects$Locations$Conversionworkspaces$Mappingrules$Get
    extends StandardParameters {
    /**
     * Required. Name of the mapping rule resource to get. Example: conversionWorkspaces/123/mappingRules/rule123 In order to retrieve a previous revision of the mapping rule, also provide the revision ID. Example: conversionWorkspace/123/mappingRules/rule123@c7cfa2a8c7cfa2a8c7cfa2a8c7cfa2a8
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Locations$Conversionworkspaces$Mappingrules$Import
    extends StandardParameters {
    /**
     * Required. Name of the conversion workspace resource to import the rules to in the form of: projects/{project\}/locations/{location\}/conversionWorkspaces/{conversion_workspace\}.
     */
    parent?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$ImportMappingRulesRequest;
  }
  export interface Params$Resource$Projects$Locations$Conversionworkspaces$Mappingrules$List
    extends StandardParameters {
    /**
     * The maximum number of rules to return. The service may return fewer than this value.
     */
    pageSize?: number;
    /**
     * The nextPageToken value received in the previous call to mappingRules.list, used in the subsequent request to retrieve the next page of results. On first call this should be left blank. When paginating, all other parameters provided to mappingRules.list must match the call that provided the page token.
     */
    pageToken?: string;
    /**
     * Required. Name of the conversion workspace resource whose mapping rules are listed in the form of: projects/{project\}/locations/{location\}/conversionWorkspaces/{conversion_workspace\}.
     */
    parent?: string;
  }

  export class Resource$Projects$Locations$Migrationjobs {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Creates a new migration job in a given project and location.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    create(
      params: Params$Resource$Projects$Locations$Migrationjobs$Create,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    create(
      params?: Params$Resource$Projects$Locations$Migrationjobs$Create,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Operation>;
    create(
      params: Params$Resource$Projects$Locations$Migrationjobs$Create,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    create(
      params: Params$Resource$Projects$Locations$Migrationjobs$Create,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    create(
      params: Params$Resource$Projects$Locations$Migrationjobs$Create,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    create(callback: BodyResponseCallback<Schema$Operation>): void;
    create(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Migrationjobs$Create
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
        {}) as Params$Resource$Projects$Locations$Migrationjobs$Create;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Migrationjobs$Create;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://datamigration.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}/migrationJobs').replace(
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
     * Deletes a single migration job.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    delete(
      params: Params$Resource$Projects$Locations$Migrationjobs$Delete,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    delete(
      params?: Params$Resource$Projects$Locations$Migrationjobs$Delete,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Operation>;
    delete(
      params: Params$Resource$Projects$Locations$Migrationjobs$Delete,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    delete(
      params: Params$Resource$Projects$Locations$Migrationjobs$Delete,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    delete(
      params: Params$Resource$Projects$Locations$Migrationjobs$Delete,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    delete(callback: BodyResponseCallback<Schema$Operation>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Migrationjobs$Delete
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
        {}) as Params$Resource$Projects$Locations$Migrationjobs$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Migrationjobs$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://datamigration.googleapis.com/';
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
     * Generate a SSH configuration script to configure the reverse SSH connectivity.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    generateSshScript(
      params: Params$Resource$Projects$Locations$Migrationjobs$Generatesshscript,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    generateSshScript(
      params?: Params$Resource$Projects$Locations$Migrationjobs$Generatesshscript,
      options?: MethodOptions
    ): GaxiosPromise<Schema$SshScript>;
    generateSshScript(
      params: Params$Resource$Projects$Locations$Migrationjobs$Generatesshscript,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    generateSshScript(
      params: Params$Resource$Projects$Locations$Migrationjobs$Generatesshscript,
      options: MethodOptions | BodyResponseCallback<Schema$SshScript>,
      callback: BodyResponseCallback<Schema$SshScript>
    ): void;
    generateSshScript(
      params: Params$Resource$Projects$Locations$Migrationjobs$Generatesshscript,
      callback: BodyResponseCallback<Schema$SshScript>
    ): void;
    generateSshScript(callback: BodyResponseCallback<Schema$SshScript>): void;
    generateSshScript(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Migrationjobs$Generatesshscript
        | BodyResponseCallback<Schema$SshScript>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$SshScript>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$SshScript>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$SshScript> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Migrationjobs$Generatesshscript;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Migrationjobs$Generatesshscript;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://datamigration.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+migrationJob}:generateSshScript').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['migrationJob'],
        pathParams: ['migrationJob'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$SshScript>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$SshScript>(parameters);
      }
    }

    /**
     * Generate a TCP Proxy configuration script to configure a cloud-hosted VM running a TCP Proxy.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    generateTcpProxyScript(
      params: Params$Resource$Projects$Locations$Migrationjobs$Generatetcpproxyscript,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    generateTcpProxyScript(
      params?: Params$Resource$Projects$Locations$Migrationjobs$Generatetcpproxyscript,
      options?: MethodOptions
    ): GaxiosPromise<Schema$TcpProxyScript>;
    generateTcpProxyScript(
      params: Params$Resource$Projects$Locations$Migrationjobs$Generatetcpproxyscript,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    generateTcpProxyScript(
      params: Params$Resource$Projects$Locations$Migrationjobs$Generatetcpproxyscript,
      options: MethodOptions | BodyResponseCallback<Schema$TcpProxyScript>,
      callback: BodyResponseCallback<Schema$TcpProxyScript>
    ): void;
    generateTcpProxyScript(
      params: Params$Resource$Projects$Locations$Migrationjobs$Generatetcpproxyscript,
      callback: BodyResponseCallback<Schema$TcpProxyScript>
    ): void;
    generateTcpProxyScript(
      callback: BodyResponseCallback<Schema$TcpProxyScript>
    ): void;
    generateTcpProxyScript(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Migrationjobs$Generatetcpproxyscript
        | BodyResponseCallback<Schema$TcpProxyScript>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$TcpProxyScript>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$TcpProxyScript>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$TcpProxyScript> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Migrationjobs$Generatetcpproxyscript;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Migrationjobs$Generatetcpproxyscript;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://datamigration.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl + '/v1/{+migrationJob}:generateTcpProxyScript'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['migrationJob'],
        pathParams: ['migrationJob'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$TcpProxyScript>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$TcpProxyScript>(parameters);
      }
    }

    /**
     * Gets details of a single migration job.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    get(
      params: Params$Resource$Projects$Locations$Migrationjobs$Get,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    get(
      params?: Params$Resource$Projects$Locations$Migrationjobs$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$MigrationJob>;
    get(
      params: Params$Resource$Projects$Locations$Migrationjobs$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Migrationjobs$Get,
      options: MethodOptions | BodyResponseCallback<Schema$MigrationJob>,
      callback: BodyResponseCallback<Schema$MigrationJob>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Migrationjobs$Get,
      callback: BodyResponseCallback<Schema$MigrationJob>
    ): void;
    get(callback: BodyResponseCallback<Schema$MigrationJob>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Migrationjobs$Get
        | BodyResponseCallback<Schema$MigrationJob>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$MigrationJob>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$MigrationJob>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$MigrationJob> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Migrationjobs$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Migrationjobs$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://datamigration.googleapis.com/';
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
        createAPIRequest<Schema$MigrationJob>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$MigrationJob>(parameters);
      }
    }

    /**
     * Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    getIamPolicy(
      params: Params$Resource$Projects$Locations$Migrationjobs$Getiampolicy,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    getIamPolicy(
      params?: Params$Resource$Projects$Locations$Migrationjobs$Getiampolicy,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Policy>;
    getIamPolicy(
      params: Params$Resource$Projects$Locations$Migrationjobs$Getiampolicy,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    getIamPolicy(
      params: Params$Resource$Projects$Locations$Migrationjobs$Getiampolicy,
      options: MethodOptions | BodyResponseCallback<Schema$Policy>,
      callback: BodyResponseCallback<Schema$Policy>
    ): void;
    getIamPolicy(
      params: Params$Resource$Projects$Locations$Migrationjobs$Getiampolicy,
      callback: BodyResponseCallback<Schema$Policy>
    ): void;
    getIamPolicy(callback: BodyResponseCallback<Schema$Policy>): void;
    getIamPolicy(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Migrationjobs$Getiampolicy
        | BodyResponseCallback<Schema$Policy>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Policy>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Policy>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$Policy> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Migrationjobs$Getiampolicy;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Migrationjobs$Getiampolicy;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://datamigration.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+resource}:getIamPolicy').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'GET',
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
     * Lists migration jobs in a given project and location.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    list(
      params: Params$Resource$Projects$Locations$Migrationjobs$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Projects$Locations$Migrationjobs$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ListMigrationJobsResponse>;
    list(
      params: Params$Resource$Projects$Locations$Migrationjobs$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Migrationjobs$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ListMigrationJobsResponse>,
      callback: BodyResponseCallback<Schema$ListMigrationJobsResponse>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Migrationjobs$List,
      callback: BodyResponseCallback<Schema$ListMigrationJobsResponse>
    ): void;
    list(
      callback: BodyResponseCallback<Schema$ListMigrationJobsResponse>
    ): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Migrationjobs$List
        | BodyResponseCallback<Schema$ListMigrationJobsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ListMigrationJobsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ListMigrationJobsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$ListMigrationJobsResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Migrationjobs$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Migrationjobs$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://datamigration.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}/migrationJobs').replace(
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
        createAPIRequest<Schema$ListMigrationJobsResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ListMigrationJobsResponse>(parameters);
      }
    }

    /**
     * Updates the parameters of a single migration job.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    patch(
      params: Params$Resource$Projects$Locations$Migrationjobs$Patch,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    patch(
      params?: Params$Resource$Projects$Locations$Migrationjobs$Patch,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Operation>;
    patch(
      params: Params$Resource$Projects$Locations$Migrationjobs$Patch,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    patch(
      params: Params$Resource$Projects$Locations$Migrationjobs$Patch,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    patch(
      params: Params$Resource$Projects$Locations$Migrationjobs$Patch,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    patch(callback: BodyResponseCallback<Schema$Operation>): void;
    patch(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Migrationjobs$Patch
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
        {}) as Params$Resource$Projects$Locations$Migrationjobs$Patch;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Migrationjobs$Patch;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://datamigration.googleapis.com/';
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

    /**
     * Promote a migration job, stopping replication to the destination and promoting the destination to be a standalone database.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    promote(
      params: Params$Resource$Projects$Locations$Migrationjobs$Promote,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    promote(
      params?: Params$Resource$Projects$Locations$Migrationjobs$Promote,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Operation>;
    promote(
      params: Params$Resource$Projects$Locations$Migrationjobs$Promote,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    promote(
      params: Params$Resource$Projects$Locations$Migrationjobs$Promote,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    promote(
      params: Params$Resource$Projects$Locations$Migrationjobs$Promote,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    promote(callback: BodyResponseCallback<Schema$Operation>): void;
    promote(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Migrationjobs$Promote
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
        {}) as Params$Resource$Projects$Locations$Migrationjobs$Promote;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Migrationjobs$Promote;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://datamigration.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}:promote').replace(
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
        createAPIRequest<Schema$Operation>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Operation>(parameters);
      }
    }

    /**
     * Restart a stopped or failed migration job, resetting the destination instance to its original state and starting the migration process from scratch.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    restart(
      params: Params$Resource$Projects$Locations$Migrationjobs$Restart,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    restart(
      params?: Params$Resource$Projects$Locations$Migrationjobs$Restart,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Operation>;
    restart(
      params: Params$Resource$Projects$Locations$Migrationjobs$Restart,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    restart(
      params: Params$Resource$Projects$Locations$Migrationjobs$Restart,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    restart(
      params: Params$Resource$Projects$Locations$Migrationjobs$Restart,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    restart(callback: BodyResponseCallback<Schema$Operation>): void;
    restart(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Migrationjobs$Restart
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
        {}) as Params$Resource$Projects$Locations$Migrationjobs$Restart;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Migrationjobs$Restart;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://datamigration.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}:restart').replace(
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
        createAPIRequest<Schema$Operation>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Operation>(parameters);
      }
    }

    /**
     * Resume a migration job that is currently stopped and is resumable (was stopped during CDC phase).
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    resume(
      params: Params$Resource$Projects$Locations$Migrationjobs$Resume,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    resume(
      params?: Params$Resource$Projects$Locations$Migrationjobs$Resume,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Operation>;
    resume(
      params: Params$Resource$Projects$Locations$Migrationjobs$Resume,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    resume(
      params: Params$Resource$Projects$Locations$Migrationjobs$Resume,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    resume(
      params: Params$Resource$Projects$Locations$Migrationjobs$Resume,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    resume(callback: BodyResponseCallback<Schema$Operation>): void;
    resume(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Migrationjobs$Resume
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
        {}) as Params$Resource$Projects$Locations$Migrationjobs$Resume;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Migrationjobs$Resume;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://datamigration.googleapis.com/';
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
        createAPIRequest<Schema$Operation>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Operation>(parameters);
      }
    }

    /**
     * Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    setIamPolicy(
      params: Params$Resource$Projects$Locations$Migrationjobs$Setiampolicy,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    setIamPolicy(
      params?: Params$Resource$Projects$Locations$Migrationjobs$Setiampolicy,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Policy>;
    setIamPolicy(
      params: Params$Resource$Projects$Locations$Migrationjobs$Setiampolicy,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    setIamPolicy(
      params: Params$Resource$Projects$Locations$Migrationjobs$Setiampolicy,
      options: MethodOptions | BodyResponseCallback<Schema$Policy>,
      callback: BodyResponseCallback<Schema$Policy>
    ): void;
    setIamPolicy(
      params: Params$Resource$Projects$Locations$Migrationjobs$Setiampolicy,
      callback: BodyResponseCallback<Schema$Policy>
    ): void;
    setIamPolicy(callback: BodyResponseCallback<Schema$Policy>): void;
    setIamPolicy(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Migrationjobs$Setiampolicy
        | BodyResponseCallback<Schema$Policy>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Policy>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Policy>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$Policy> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Migrationjobs$Setiampolicy;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Migrationjobs$Setiampolicy;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://datamigration.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+resource}:setIamPolicy').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
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
     * Start an already created migration job.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    start(
      params: Params$Resource$Projects$Locations$Migrationjobs$Start,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    start(
      params?: Params$Resource$Projects$Locations$Migrationjobs$Start,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Operation>;
    start(
      params: Params$Resource$Projects$Locations$Migrationjobs$Start,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    start(
      params: Params$Resource$Projects$Locations$Migrationjobs$Start,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    start(
      params: Params$Resource$Projects$Locations$Migrationjobs$Start,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    start(callback: BodyResponseCallback<Schema$Operation>): void;
    start(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Migrationjobs$Start
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
        {}) as Params$Resource$Projects$Locations$Migrationjobs$Start;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Migrationjobs$Start;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://datamigration.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}:start').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$Operation>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Operation>(parameters);
      }
    }

    /**
     * Stops a running migration job.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    stop(
      params: Params$Resource$Projects$Locations$Migrationjobs$Stop,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    stop(
      params?: Params$Resource$Projects$Locations$Migrationjobs$Stop,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Operation>;
    stop(
      params: Params$Resource$Projects$Locations$Migrationjobs$Stop,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    stop(
      params: Params$Resource$Projects$Locations$Migrationjobs$Stop,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    stop(
      params: Params$Resource$Projects$Locations$Migrationjobs$Stop,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    stop(callback: BodyResponseCallback<Schema$Operation>): void;
    stop(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Migrationjobs$Stop
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
        {}) as Params$Resource$Projects$Locations$Migrationjobs$Stop;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Migrationjobs$Stop;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://datamigration.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}:stop').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$Operation>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Operation>(parameters);
      }
    }

    /**
     * Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    testIamPermissions(
      params: Params$Resource$Projects$Locations$Migrationjobs$Testiampermissions,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    testIamPermissions(
      params?: Params$Resource$Projects$Locations$Migrationjobs$Testiampermissions,
      options?: MethodOptions
    ): GaxiosPromise<Schema$TestIamPermissionsResponse>;
    testIamPermissions(
      params: Params$Resource$Projects$Locations$Migrationjobs$Testiampermissions,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    testIamPermissions(
      params: Params$Resource$Projects$Locations$Migrationjobs$Testiampermissions,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$TestIamPermissionsResponse>,
      callback: BodyResponseCallback<Schema$TestIamPermissionsResponse>
    ): void;
    testIamPermissions(
      params: Params$Resource$Projects$Locations$Migrationjobs$Testiampermissions,
      callback: BodyResponseCallback<Schema$TestIamPermissionsResponse>
    ): void;
    testIamPermissions(
      callback: BodyResponseCallback<Schema$TestIamPermissionsResponse>
    ): void;
    testIamPermissions(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Migrationjobs$Testiampermissions
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
      | GaxiosPromise<Schema$TestIamPermissionsResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Migrationjobs$Testiampermissions;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Migrationjobs$Testiampermissions;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://datamigration.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+resource}:testIamPermissions').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
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

    /**
     * Verify a migration job, making sure the destination can reach the source and that all configuration and prerequisites are met.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    verify(
      params: Params$Resource$Projects$Locations$Migrationjobs$Verify,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    verify(
      params?: Params$Resource$Projects$Locations$Migrationjobs$Verify,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Operation>;
    verify(
      params: Params$Resource$Projects$Locations$Migrationjobs$Verify,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    verify(
      params: Params$Resource$Projects$Locations$Migrationjobs$Verify,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    verify(
      params: Params$Resource$Projects$Locations$Migrationjobs$Verify,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    verify(callback: BodyResponseCallback<Schema$Operation>): void;
    verify(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Migrationjobs$Verify
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
        {}) as Params$Resource$Projects$Locations$Migrationjobs$Verify;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Migrationjobs$Verify;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://datamigration.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}:verify').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$Operation>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Operation>(parameters);
      }
    }
  }

  export interface Params$Resource$Projects$Locations$Migrationjobs$Create
    extends StandardParameters {
    /**
     * Required. The ID of the instance to create.
     */
    migrationJobId?: string;
    /**
     * Required. The parent which owns this collection of migration jobs.
     */
    parent?: string;
    /**
     * Optional. A unique ID used to identify the request. If the server receives two requests with the same ID, then the second request is ignored. It is recommended to always set this value to a UUID. The ID must contain only letters (a-z, A-Z), numbers (0-9), underscores (_), and hyphens (-). The maximum length is 40 characters.
     */
    requestId?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$MigrationJob;
  }
  export interface Params$Resource$Projects$Locations$Migrationjobs$Delete
    extends StandardParameters {
    /**
     * The destination CloudSQL connection profile is always deleted with the migration job. In case of force delete, the destination CloudSQL replica database is also deleted.
     */
    force?: boolean;
    /**
     * Required. Name of the migration job resource to delete.
     */
    name?: string;
    /**
     * A unique ID used to identify the request. If the server receives two requests with the same ID, then the second request is ignored. It is recommended to always set this value to a UUID. The ID must contain only letters (a-z, A-Z), numbers (0-9), underscores (_), and hyphens (-). The maximum length is 40 characters.
     */
    requestId?: string;
  }
  export interface Params$Resource$Projects$Locations$Migrationjobs$Generatesshscript
    extends StandardParameters {
    /**
     * Name of the migration job resource to generate the SSH script.
     */
    migrationJob?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GenerateSshScriptRequest;
  }
  export interface Params$Resource$Projects$Locations$Migrationjobs$Generatetcpproxyscript
    extends StandardParameters {
    /**
     * Name of the migration job resource to generate the TCP Proxy script.
     */
    migrationJob?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GenerateTcpProxyScriptRequest;
  }
  export interface Params$Resource$Projects$Locations$Migrationjobs$Get
    extends StandardParameters {
    /**
     * Required. Name of the migration job resource to get.
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Locations$Migrationjobs$Getiampolicy
    extends StandardParameters {
    /**
     * Optional. The maximum policy version that will be used to format the policy. Valid values are 0, 1, and 3. Requests specifying an invalid value will be rejected. Requests for policies with any conditional role bindings must specify version 3. Policies with no conditional role bindings may specify any valid value or leave the field unset. The policy in the response might use the policy version that you specified, or it might use a lower policy version. For example, if you specify version 3, but the policy has no conditional role bindings, the response uses version 1. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies).
     */
    'options.requestedPolicyVersion'?: number;
    /**
     * REQUIRED: The resource for which the policy is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     */
    resource?: string;
  }
  export interface Params$Resource$Projects$Locations$Migrationjobs$List
    extends StandardParameters {
    /**
     * A filter expression that filters migration jobs listed in the response. The expression must specify the field name, a comparison operator, and the value that you want to use for filtering. The value must be a string, a number, or a boolean. The comparison operator must be either =, !=, \>, or <. For example, list migration jobs created this year by specifying **createTime %gt; 2020-01-01T00:00:00.000000000Z.** You can also filter nested fields. For example, you could specify **reverseSshConnectivity.vmIp = "1.2.3.4"** to select all migration jobs connecting through the specific SSH tunnel bastion.
     */
    filter?: string;
    /**
     * Sort the results based on the migration job name. Valid values are: "name", "name asc", and "name desc".
     */
    orderBy?: string;
    /**
     * The maximum number of migration jobs to return. The service may return fewer than this value. If unspecified, at most 50 migration jobs will be returned. The maximum value is 1000; values above 1000 are coerced to 1000.
     */
    pageSize?: number;
    /**
     * The nextPageToken value received in the previous call to migrationJobs.list, used in the subsequent request to retrieve the next page of results. On first call this should be left blank. When paginating, all other parameters provided to migrationJobs.list must match the call that provided the page token.
     */
    pageToken?: string;
    /**
     * Required. The parent which owns this collection of migrationJobs.
     */
    parent?: string;
  }
  export interface Params$Resource$Projects$Locations$Migrationjobs$Patch
    extends StandardParameters {
    /**
     * The name (URI) of this migration job resource, in the form of: projects/{project\}/locations/{location\}/migrationJobs/{migrationJob\}.
     */
    name?: string;
    /**
     * A unique ID used to identify the request. If the server receives two requests with the same ID, then the second request is ignored. It is recommended to always set this value to a UUID. The ID must contain only letters (a-z, A-Z), numbers (0-9), underscores (_), and hyphens (-). The maximum length is 40 characters.
     */
    requestId?: string;
    /**
     * Required. Field mask is used to specify the fields to be overwritten by the update in the conversion workspace resource.
     */
    updateMask?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$MigrationJob;
  }
  export interface Params$Resource$Projects$Locations$Migrationjobs$Promote
    extends StandardParameters {
    /**
     * Name of the migration job resource to promote.
     */
    name?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$PromoteMigrationJobRequest;
  }
  export interface Params$Resource$Projects$Locations$Migrationjobs$Restart
    extends StandardParameters {
    /**
     * Name of the migration job resource to restart.
     */
    name?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$RestartMigrationJobRequest;
  }
  export interface Params$Resource$Projects$Locations$Migrationjobs$Resume
    extends StandardParameters {
    /**
     * Name of the migration job resource to resume.
     */
    name?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$ResumeMigrationJobRequest;
  }
  export interface Params$Resource$Projects$Locations$Migrationjobs$Setiampolicy
    extends StandardParameters {
    /**
     * REQUIRED: The resource for which the policy is being specified. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     */
    resource?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$SetIamPolicyRequest;
  }
  export interface Params$Resource$Projects$Locations$Migrationjobs$Start
    extends StandardParameters {
    /**
     * Name of the migration job resource to start.
     */
    name?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$StartMigrationJobRequest;
  }
  export interface Params$Resource$Projects$Locations$Migrationjobs$Stop
    extends StandardParameters {
    /**
     * Name of the migration job resource to stop.
     */
    name?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$StopMigrationJobRequest;
  }
  export interface Params$Resource$Projects$Locations$Migrationjobs$Testiampermissions
    extends StandardParameters {
    /**
     * REQUIRED: The resource for which the policy detail is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     */
    resource?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$TestIamPermissionsRequest;
  }
  export interface Params$Resource$Projects$Locations$Migrationjobs$Verify
    extends StandardParameters {
    /**
     * Name of the migration job resource to verify.
     */
    name?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$VerifyMigrationJobRequest;
  }

  export class Resource$Projects$Locations$Operations {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    cancel(
      params: Params$Resource$Projects$Locations$Operations$Cancel,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    cancel(
      params?: Params$Resource$Projects$Locations$Operations$Cancel,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Empty>;
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
    ): void | GaxiosPromise<Schema$Empty> | GaxiosPromise<Readable> {
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
        options.rootUrl || 'https://datamigration.googleapis.com/';
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
     * Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    delete(
      params: Params$Resource$Projects$Locations$Operations$Delete,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    delete(
      params?: Params$Resource$Projects$Locations$Operations$Delete,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Empty>;
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
    ): void | GaxiosPromise<Schema$Empty> | GaxiosPromise<Readable> {
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
        options.rootUrl || 'https://datamigration.googleapis.com/';
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
     * Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    get(
      params: Params$Resource$Projects$Locations$Operations$Get,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    get(
      params?: Params$Resource$Projects$Locations$Operations$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Operation>;
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
    ): void | GaxiosPromise<Schema$Operation> | GaxiosPromise<Readable> {
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
        options.rootUrl || 'https://datamigration.googleapis.com/';
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

    /**
     * Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    list(
      params: Params$Resource$Projects$Locations$Operations$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Projects$Locations$Operations$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ListOperationsResponse>;
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
      | GaxiosPromise<Schema$ListOperationsResponse>
      | GaxiosPromise<Readable> {
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
        options.rootUrl || 'https://datamigration.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}/operations').replace(
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
        createAPIRequest<Schema$ListOperationsResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ListOperationsResponse>(parameters);
      }
    }
  }

  export interface Params$Resource$Projects$Locations$Operations$Cancel
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
  export interface Params$Resource$Projects$Locations$Operations$Delete
    extends StandardParameters {
    /**
     * The name of the operation resource to be deleted.
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Locations$Operations$Get
    extends StandardParameters {
    /**
     * The name of the operation resource.
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Locations$Operations$List
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

  export class Resource$Projects$Locations$Privateconnections {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Creates a new private connection in a given project and location.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    create(
      params: Params$Resource$Projects$Locations$Privateconnections$Create,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    create(
      params?: Params$Resource$Projects$Locations$Privateconnections$Create,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Operation>;
    create(
      params: Params$Resource$Projects$Locations$Privateconnections$Create,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    create(
      params: Params$Resource$Projects$Locations$Privateconnections$Create,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    create(
      params: Params$Resource$Projects$Locations$Privateconnections$Create,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    create(callback: BodyResponseCallback<Schema$Operation>): void;
    create(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Privateconnections$Create
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
        {}) as Params$Resource$Projects$Locations$Privateconnections$Create;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Privateconnections$Create;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://datamigration.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}/privateConnections').replace(
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
     * Deletes a single Database Migration Service private connection.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    delete(
      params: Params$Resource$Projects$Locations$Privateconnections$Delete,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    delete(
      params?: Params$Resource$Projects$Locations$Privateconnections$Delete,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Operation>;
    delete(
      params: Params$Resource$Projects$Locations$Privateconnections$Delete,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    delete(
      params: Params$Resource$Projects$Locations$Privateconnections$Delete,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    delete(
      params: Params$Resource$Projects$Locations$Privateconnections$Delete,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    delete(callback: BodyResponseCallback<Schema$Operation>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Privateconnections$Delete
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
        {}) as Params$Resource$Projects$Locations$Privateconnections$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Privateconnections$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://datamigration.googleapis.com/';
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
     * Gets details of a single private connection.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    get(
      params: Params$Resource$Projects$Locations$Privateconnections$Get,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    get(
      params?: Params$Resource$Projects$Locations$Privateconnections$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$PrivateConnection>;
    get(
      params: Params$Resource$Projects$Locations$Privateconnections$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Privateconnections$Get,
      options: MethodOptions | BodyResponseCallback<Schema$PrivateConnection>,
      callback: BodyResponseCallback<Schema$PrivateConnection>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Privateconnections$Get,
      callback: BodyResponseCallback<Schema$PrivateConnection>
    ): void;
    get(callback: BodyResponseCallback<Schema$PrivateConnection>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Privateconnections$Get
        | BodyResponseCallback<Schema$PrivateConnection>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$PrivateConnection>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$PrivateConnection>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$PrivateConnection>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Privateconnections$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Privateconnections$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://datamigration.googleapis.com/';
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
        createAPIRequest<Schema$PrivateConnection>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$PrivateConnection>(parameters);
      }
    }

    /**
     * Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    getIamPolicy(
      params: Params$Resource$Projects$Locations$Privateconnections$Getiampolicy,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    getIamPolicy(
      params?: Params$Resource$Projects$Locations$Privateconnections$Getiampolicy,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Policy>;
    getIamPolicy(
      params: Params$Resource$Projects$Locations$Privateconnections$Getiampolicy,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    getIamPolicy(
      params: Params$Resource$Projects$Locations$Privateconnections$Getiampolicy,
      options: MethodOptions | BodyResponseCallback<Schema$Policy>,
      callback: BodyResponseCallback<Schema$Policy>
    ): void;
    getIamPolicy(
      params: Params$Resource$Projects$Locations$Privateconnections$Getiampolicy,
      callback: BodyResponseCallback<Schema$Policy>
    ): void;
    getIamPolicy(callback: BodyResponseCallback<Schema$Policy>): void;
    getIamPolicy(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Privateconnections$Getiampolicy
        | BodyResponseCallback<Schema$Policy>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Policy>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Policy>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$Policy> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Privateconnections$Getiampolicy;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Privateconnections$Getiampolicy;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://datamigration.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+resource}:getIamPolicy').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'GET',
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
     * Retrieves a list of private connections in a given project and location.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    list(
      params: Params$Resource$Projects$Locations$Privateconnections$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Projects$Locations$Privateconnections$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ListPrivateConnectionsResponse>;
    list(
      params: Params$Resource$Projects$Locations$Privateconnections$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Privateconnections$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ListPrivateConnectionsResponse>,
      callback: BodyResponseCallback<Schema$ListPrivateConnectionsResponse>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Privateconnections$List,
      callback: BodyResponseCallback<Schema$ListPrivateConnectionsResponse>
    ): void;
    list(
      callback: BodyResponseCallback<Schema$ListPrivateConnectionsResponse>
    ): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Privateconnections$List
        | BodyResponseCallback<Schema$ListPrivateConnectionsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ListPrivateConnectionsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ListPrivateConnectionsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$ListPrivateConnectionsResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Privateconnections$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Privateconnections$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://datamigration.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}/privateConnections').replace(
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
        createAPIRequest<Schema$ListPrivateConnectionsResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ListPrivateConnectionsResponse>(
          parameters
        );
      }
    }

    /**
     * Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    setIamPolicy(
      params: Params$Resource$Projects$Locations$Privateconnections$Setiampolicy,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    setIamPolicy(
      params?: Params$Resource$Projects$Locations$Privateconnections$Setiampolicy,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Policy>;
    setIamPolicy(
      params: Params$Resource$Projects$Locations$Privateconnections$Setiampolicy,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    setIamPolicy(
      params: Params$Resource$Projects$Locations$Privateconnections$Setiampolicy,
      options: MethodOptions | BodyResponseCallback<Schema$Policy>,
      callback: BodyResponseCallback<Schema$Policy>
    ): void;
    setIamPolicy(
      params: Params$Resource$Projects$Locations$Privateconnections$Setiampolicy,
      callback: BodyResponseCallback<Schema$Policy>
    ): void;
    setIamPolicy(callback: BodyResponseCallback<Schema$Policy>): void;
    setIamPolicy(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Privateconnections$Setiampolicy
        | BodyResponseCallback<Schema$Policy>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Policy>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Policy>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$Policy> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Privateconnections$Setiampolicy;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Privateconnections$Setiampolicy;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://datamigration.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+resource}:setIamPolicy').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
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
     * Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    testIamPermissions(
      params: Params$Resource$Projects$Locations$Privateconnections$Testiampermissions,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    testIamPermissions(
      params?: Params$Resource$Projects$Locations$Privateconnections$Testiampermissions,
      options?: MethodOptions
    ): GaxiosPromise<Schema$TestIamPermissionsResponse>;
    testIamPermissions(
      params: Params$Resource$Projects$Locations$Privateconnections$Testiampermissions,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    testIamPermissions(
      params: Params$Resource$Projects$Locations$Privateconnections$Testiampermissions,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$TestIamPermissionsResponse>,
      callback: BodyResponseCallback<Schema$TestIamPermissionsResponse>
    ): void;
    testIamPermissions(
      params: Params$Resource$Projects$Locations$Privateconnections$Testiampermissions,
      callback: BodyResponseCallback<Schema$TestIamPermissionsResponse>
    ): void;
    testIamPermissions(
      callback: BodyResponseCallback<Schema$TestIamPermissionsResponse>
    ): void;
    testIamPermissions(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Privateconnections$Testiampermissions
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
      | GaxiosPromise<Schema$TestIamPermissionsResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Privateconnections$Testiampermissions;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Privateconnections$Testiampermissions;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://datamigration.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+resource}:testIamPermissions').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
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

  export interface Params$Resource$Projects$Locations$Privateconnections$Create
    extends StandardParameters {
    /**
     * Required. The parent that owns the collection of PrivateConnections.
     */
    parent?: string;
    /**
     * Required. The private connection identifier.
     */
    privateConnectionId?: string;
    /**
     * Optional. A unique ID used to identify the request. If the server receives two requests with the same ID, then the second request is ignored. It is recommended to always set this value to a UUID. The ID must contain only letters (a-z, A-Z), numbers (0-9), underscores (_), and hyphens (-). The maximum length is 40 characters.
     */
    requestId?: string;
    /**
     * Optional. If set to true, will skip validations.
     */
    skipValidation?: boolean;

    /**
     * Request body metadata
     */
    requestBody?: Schema$PrivateConnection;
  }
  export interface Params$Resource$Projects$Locations$Privateconnections$Delete
    extends StandardParameters {
    /**
     * Required. The name of the private connection to delete.
     */
    name?: string;
    /**
     * Optional. A unique ID used to identify the request. If the server receives two requests with the same ID, then the second request is ignored. It is recommended to always set this value to a UUID. The ID must contain only letters (a-z, A-Z), numbers (0-9), underscores (_), and hyphens (-). The maximum length is 40 characters.
     */
    requestId?: string;
  }
  export interface Params$Resource$Projects$Locations$Privateconnections$Get
    extends StandardParameters {
    /**
     * Required. The name of the private connection to get.
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Locations$Privateconnections$Getiampolicy
    extends StandardParameters {
    /**
     * Optional. The maximum policy version that will be used to format the policy. Valid values are 0, 1, and 3. Requests specifying an invalid value will be rejected. Requests for policies with any conditional role bindings must specify version 3. Policies with no conditional role bindings may specify any valid value or leave the field unset. The policy in the response might use the policy version that you specified, or it might use a lower policy version. For example, if you specify version 3, but the policy has no conditional role bindings, the response uses version 1. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies).
     */
    'options.requestedPolicyVersion'?: number;
    /**
     * REQUIRED: The resource for which the policy is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     */
    resource?: string;
  }
  export interface Params$Resource$Projects$Locations$Privateconnections$List
    extends StandardParameters {
    /**
     * A filter expression that filters private connections listed in the response. The expression must specify the field name, a comparison operator, and the value that you want to use for filtering. The value must be a string, a number, or a boolean. The comparison operator must be either =, !=, \>, or <. For example, list private connections created this year by specifying **createTime %gt; 2021-01-01T00:00:00.000000000Z**.
     */
    filter?: string;
    /**
     * Order by fields for the result.
     */
    orderBy?: string;
    /**
     * Maximum number of private connections to return. If unspecified, at most 50 private connections that are returned. The maximum value is 1000; values above 1000 are coerced to 1000.
     */
    pageSize?: number;
    /**
     * Page token received from a previous `ListPrivateConnections` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListPrivateConnections` must match the call that provided the page token.
     */
    pageToken?: string;
    /**
     * Required. The parent that owns the collection of private connections.
     */
    parent?: string;
  }
  export interface Params$Resource$Projects$Locations$Privateconnections$Setiampolicy
    extends StandardParameters {
    /**
     * REQUIRED: The resource for which the policy is being specified. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     */
    resource?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$SetIamPolicyRequest;
  }
  export interface Params$Resource$Projects$Locations$Privateconnections$Testiampermissions
    extends StandardParameters {
    /**
     * REQUIRED: The resource for which the policy detail is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     */
    resource?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$TestIamPermissionsRequest;
  }
}
