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

export namespace oracledatabase_v1 {
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
   * Oracle Database@Google Cloud API
   *
   * The Oracle Database@Google Cloud API provides a set of APIs to manage Oracle database services, such as Exadata and Autonomous Databases.
   *
   * @example
   * ```js
   * const {google} = require('googleapis');
   * const oracledatabase = google.oracledatabase('v1');
   * ```
   */
  export class Oracledatabase {
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
   * A list of all connection strings that can be used to connect to the Autonomous Database.
   */
  export interface Schema$AllConnectionStrings {
    /**
     * Output only. The database service provides the highest level of resources to each SQL statement.
     */
    high?: string | null;
    /**
     * Output only. The database service provides the least level of resources to each SQL statement.
     */
    low?: string | null;
    /**
     * Output only. The database service provides a lower level of resources to each SQL statement.
     */
    medium?: string | null;
  }
  /**
   * Details of the Autonomous Database resource. https://docs.oracle.com/en-us/iaas/api/#/en/database/20160918/AutonomousDatabase/
   */
  export interface Schema$AutonomousDatabase {
    /**
     * Optional. The password for the default ADMIN user.
     */
    adminPassword?: string | null;
    /**
     * Optional. The subnet CIDR range for the Autonomous Database.
     */
    cidr?: string | null;
    /**
     * Output only. The date and time that the Autonomous Database was created.
     */
    createTime?: string | null;
    /**
     * Optional. The name of the Autonomous Database. The database name must be unique in the project. The name must begin with a letter and can contain a maximum of 30 alphanumeric characters.
     */
    database?: string | null;
    /**
     * Output only. List of supported GCP region to clone the Autonomous Database for disaster recovery. Format: `project/{project\}/locations/{location\}`.
     */
    disasterRecoverySupportedLocations?: string[] | null;
    /**
     * Optional. The display name for the Autonomous Database. The name does not have to be unique within your project.
     */
    displayName?: string | null;
    /**
     * Output only. The ID of the subscription entitlement associated with the Autonomous Database.
     */
    entitlementId?: string | null;
    /**
     * Optional. The labels or tags associated with the Autonomous Database.
     */
    labels?: {[key: string]: string} | null;
    /**
     * Identifier. The name of the Autonomous Database resource in the following format: projects/{project\}/locations/{region\}/autonomousDatabases/{autonomous_database\}
     */
    name?: string | null;
    /**
     * Optional. The name of the VPC network used by the Autonomous Database in the following format: projects/{project\}/global/networks/{network\}
     */
    network?: string | null;
    /**
     * Optional. The name of the OdbNetwork associated with the Autonomous Database. Format: projects/{project\}/locations/{location\}/odbNetworks/{odb_network\} It is optional but if specified, this should match the parent ODBNetwork of the OdbSubnet.
     */
    odbNetwork?: string | null;
    /**
     * Optional. The name of the OdbSubnet associated with the Autonomous Database. Format: projects/{project\}/locations/{location\}/odbNetworks/{odb_network\}/odbSubnets/{odb_subnet\}
     */
    odbSubnet?: string | null;
    /**
     * Output only. The peer Autonomous Database names of the given Autonomous Database.
     */
    peerAutonomousDatabases?: string[] | null;
    /**
     * Optional. The properties of the Autonomous Database.
     */
    properties?: Schema$AutonomousDatabaseProperties;
    /**
     * Optional. The source Autonomous Database configuration for the standby Autonomous Database. The source Autonomous Database is configured while creating the Peer Autonomous Database and can't be updated after creation.
     */
    sourceConfig?: Schema$SourceConfig;
  }
  /**
   * Oracle APEX Application Development. https://docs.oracle.com/en-us/iaas/api/#/en/database/20160918/datatypes/AutonomousDatabaseApex
   */
  export interface Schema$AutonomousDatabaseApex {
    /**
     * Output only. The Oracle APEX Application Development version.
     */
    apexVersion?: string | null;
    /**
     * Output only. The Oracle REST Data Services (ORDS) version.
     */
    ordsVersion?: string | null;
  }
  /**
   * Details of the Autonomous Database Backup resource. https://docs.oracle.com/en-us/iaas/api/#/en/database/20160918/AutonomousDatabaseBackup/
   */
  export interface Schema$AutonomousDatabaseBackup {
    /**
     * Required. The name of the Autonomous Database resource for which the backup is being created. Format: projects/{project\}/locations/{region\}/autonomousDatabases/{autonomous_database\}
     */
    autonomousDatabase?: string | null;
    /**
     * Optional. User friendly name for the Backup. The name does not have to be unique.
     */
    displayName?: string | null;
    /**
     * Optional. labels or tags associated with the resource.
     */
    labels?: {[key: string]: string} | null;
    /**
     * Identifier. The name of the Autonomous Database Backup resource with the format: projects/{project\}/locations/{region\}/autonomousDatabaseBackups/{autonomous_database_backup\}
     */
    name?: string | null;
    /**
     * Optional. Various properties of the backup.
     */
    properties?: Schema$AutonomousDatabaseBackupProperties;
  }
  /**
   * Properties of the Autonomous Database Backup resource.
   */
  export interface Schema$AutonomousDatabaseBackupProperties {
    /**
     * Output only. Timestamp until when the backup will be available.
     */
    availableTillTime?: string | null;
    /**
     * Output only. The OCID of the compartment.
     */
    compartmentId?: string | null;
    /**
     * Output only. The quantity of data in the database, in terabytes.
     */
    databaseSizeTb?: number | null;
    /**
     * Output only. A valid Oracle Database version for Autonomous Database.
     */
    dbVersion?: string | null;
    /**
     * Output only. The date and time the backup completed.
     */
    endTime?: string | null;
    /**
     * Output only. Indicates if the backup is automatic or user initiated.
     */
    isAutomaticBackup?: boolean | null;
    /**
     * Output only. Indicates if the backup is long term backup.
     */
    isLongTermBackup?: boolean | null;
    /**
     * Output only. Indicates if the backup can be used to restore the Autonomous Database.
     */
    isRestorable?: boolean | null;
    /**
     * Optional. The OCID of the key store of Oracle Vault.
     */
    keyStoreId?: string | null;
    /**
     * Optional. The wallet name for Oracle Key Vault.
     */
    keyStoreWallet?: string | null;
    /**
     * Optional. The OCID of the key container that is used as the master encryption key in database transparent data encryption (TDE) operations.
     */
    kmsKeyId?: string | null;
    /**
     * Optional. The OCID of the key container version that is used in database transparent data encryption (TDE) operations KMS Key can have multiple key versions. If none is specified, the current key version (latest) of the Key Id is used for the operation. Autonomous Database Serverless does not use key versions, hence is not applicable for Autonomous Database Serverless instances.
     */
    kmsKeyVersionId?: string | null;
    /**
     * Output only. Additional information about the current lifecycle state.
     */
    lifecycleDetails?: string | null;
    /**
     * Output only. The lifecycle state of the backup.
     */
    lifecycleState?: string | null;
    /**
     * Output only. OCID of the Autonomous Database backup. https://docs.oracle.com/en-us/iaas/Content/General/Concepts/identifiers.htm#Oracle
     */
    ocid?: string | null;
    /**
     * Optional. Retention period in days for the backup.
     */
    retentionPeriodDays?: number | null;
    /**
     * Output only. The backup size in terabytes.
     */
    sizeTb?: number | null;
    /**
     * Output only. The date and time the backup started.
     */
    startTime?: string | null;
    /**
     * Output only. The type of the backup.
     */
    type?: string | null;
    /**
     * Optional. The OCID of the vault.
     */
    vaultId?: string | null;
  }
  /**
   * Details of the Autonomous Database character set resource. https://docs.oracle.com/en-us/iaas/api/#/en/database/20160918/AutonomousDatabaseCharacterSets/
   */
  export interface Schema$AutonomousDatabaseCharacterSet {
    /**
     * Output only. The character set name for the Autonomous Database which is the ID in the resource name.
     */
    characterSet?: string | null;
    /**
     * Output only. The character set type for the Autonomous Database.
     */
    characterSetType?: string | null;
    /**
     * Identifier. The name of the Autonomous Database Character Set resource in the following format: projects/{project\}/locations/{region\}/autonomousDatabaseCharacterSets/{autonomous_database_character_set\}
     */
    name?: string | null;
  }
  /**
   * The connection string used to connect to the Autonomous Database. https://docs.oracle.com/en-us/iaas/api/#/en/database/20160918/datatypes/AutonomousDatabaseConnectionStrings
   */
  export interface Schema$AutonomousDatabaseConnectionStrings {
    /**
     * Output only. Returns all connection strings that can be used to connect to the Autonomous Database.
     */
    allConnectionStrings?: Schema$AllConnectionStrings;
    /**
     * Output only. The database service provides the least level of resources to each SQL statement, but supports the most number of concurrent SQL statements.
     */
    dedicated?: string | null;
    /**
     * Output only. The database service provides the highest level of resources to each SQL statement.
     */
    high?: string | null;
    /**
     * Output only. The database service provides the least level of resources to each SQL statement.
     */
    low?: string | null;
    /**
     * Output only. The database service provides a lower level of resources to each SQL statement.
     */
    medium?: string | null;
    /**
     * Output only. A list of connection string profiles to allow clients to group, filter, and select values based on the structured metadata.
     */
    profiles?: Schema$DatabaseConnectionStringProfile[];
  }
  /**
   * The URLs for accessing Oracle Application Express (APEX) and SQL Developer Web with a browser from a Compute instance. https://docs.oracle.com/en-us/iaas/api/#/en/database/20160918/datatypes/AutonomousDatabaseConnectionUrls
   */
  export interface Schema$AutonomousDatabaseConnectionUrls {
    /**
     * Output only. Oracle Application Express (APEX) URL.
     */
    apexUri?: string | null;
    /**
     * Output only. The URL of the Database Transforms for the Autonomous Database.
     */
    databaseTransformsUri?: string | null;
    /**
     * Output only. The URL of the Graph Studio for the Autonomous Database.
     */
    graphStudioUri?: string | null;
    /**
     * Output only. The URL of the Oracle Machine Learning (OML) Notebook for the Autonomous Database.
     */
    machineLearningNotebookUri?: string | null;
    /**
     * Output only. The URL of Machine Learning user management the Autonomous Database.
     */
    machineLearningUserManagementUri?: string | null;
    /**
     * Output only. The URL of the MongoDB API for the Autonomous Database.
     */
    mongoDbUri?: string | null;
    /**
     * Output only. The Oracle REST Data Services (ORDS) URL of the Web Access for the Autonomous Database.
     */
    ordsUri?: string | null;
    /**
     * Output only. The URL of the Oracle SQL Developer Web for the Autonomous Database.
     */
    sqlDevWebUri?: string | null;
  }
  /**
   * The properties of an Autonomous Database.
   */
  export interface Schema$AutonomousDatabaseProperties {
    /**
     * Output only. The amount of storage currently being used for user and system data, in terabytes.
     */
    actualUsedDataStorageSizeTb?: number | null;
    /**
     * Output only. The amount of storage currently allocated for the database tables and billed for, rounded up in terabytes.
     */
    allocatedStorageSizeTb?: number | null;
    /**
     * Optional. The list of allowlisted IP addresses for the Autonomous Database.
     */
    allowlistedIps?: string[] | null;
    /**
     * Output only. The details for the Oracle APEX Application Development.
     */
    apexDetails?: Schema$AutonomousDatabaseApex;
    /**
     * Output only. This field indicates the status of Data Guard and Access control for the Autonomous Database. The field's value is null if Data Guard is disabled or Access Control is disabled. The field's value is TRUE if both Data Guard and Access Control are enabled, and the Autonomous Database is using primary IP access control list (ACL) for standby. The field's value is FALSE if both Data Guard and Access Control are enabled, and the Autonomous Database is using a different IP access control list (ACL) for standby compared to primary.
     */
    arePrimaryAllowlistedIpsUsed?: boolean | null;
    /**
     * Output only. The Autonomous Container Database OCID.
     */
    autonomousContainerDatabaseId?: string | null;
    /**
     * Output only. The list of available Oracle Database upgrade versions for an Autonomous Database.
     */
    availableUpgradeVersions?: string[] | null;
    /**
     * Optional. The retention period for the Autonomous Database. This field is specified in days, can range from 1 day to 60 days, and has a default value of 60 days.
     */
    backupRetentionPeriodDays?: number | null;
    /**
     * Optional. The character set for the Autonomous Database. The default is AL32UTF8.
     */
    characterSet?: string | null;
    /**
     * Optional. The number of compute servers for the Autonomous Database.
     */
    computeCount?: number | null;
    /**
     * Output only. The connection strings used to connect to an Autonomous Database.
     */
    connectionStrings?: Schema$AutonomousDatabaseConnectionStrings;
    /**
     * Output only. The Oracle Connection URLs for an Autonomous Database.
     */
    connectionUrls?: Schema$AutonomousDatabaseConnectionUrls;
    /**
     * Optional. The number of CPU cores to be made available to the database.
     */
    cpuCoreCount?: number | null;
    /**
     * Optional. The list of customer contacts.
     */
    customerContacts?: Schema$CustomerContact[];
    /**
     * Output only. The current state of database management for the Autonomous Database.
     */
    databaseManagementState?: string | null;
    /**
     * Output only. The date and time the Autonomous Data Guard role was changed for the standby Autonomous Database.
     */
    dataGuardRoleChangedTime?: string | null;
    /**
     * Output only. The current state of the Data Safe registration for the Autonomous Database.
     */
    dataSafeState?: string | null;
    /**
     * Optional. The size of the data stored in the database, in gigabytes.
     */
    dataStorageSizeGb?: number | null;
    /**
     * Optional. The size of the data stored in the database, in terabytes.
     */
    dataStorageSizeTb?: number | null;
    /**
     * Optional. The edition of the Autonomous Databases.
     */
    dbEdition?: string | null;
    /**
     * Optional. The Oracle Database version for the Autonomous Database.
     */
    dbVersion?: string | null;
    /**
     * Required. The workload type of the Autonomous Database.
     */
    dbWorkload?: string | null;
    /**
     * Output only. The date and time the Disaster Recovery role was changed for the standby Autonomous Database.
     */
    disasterRecoveryRoleChangedTime?: string | null;
    /**
     * Optional. The encryption key used to encrypt the Autonomous Database. Updating this field will add a new entry in the `encryption_key_history_entries` field with the former version.
     */
    encryptionKey?: Schema$EncryptionKey;
    /**
     * Output only. The history of the encryption keys used to encrypt the Autonomous Database.
     */
    encryptionKeyHistoryEntries?: Schema$EncryptionKeyHistoryEntry[];
    /**
     * Output only. This field indicates the number of seconds of data loss during a Data Guard failover.
     */
    failedDataRecoveryDuration?: string | null;
    /**
     * Optional. This field indicates if auto scaling is enabled for the Autonomous Database CPU core count.
     */
    isAutoScalingEnabled?: boolean | null;
    /**
     * Output only. This field indicates whether the Autonomous Database has local (in-region) Data Guard enabled.
     */
    isLocalDataGuardEnabled?: boolean | null;
    /**
     * Optional. This field indicates if auto scaling is enabled for the Autonomous Database storage.
     */
    isStorageAutoScalingEnabled?: boolean | null;
    /**
     * Required. The license type used for the Autonomous Database.
     */
    licenseType?: string | null;
    /**
     * Output only. The details of the current lifestyle state of the Autonomous Database.
     */
    lifecycleDetails?: string | null;
    /**
     * Output only. This field indicates the maximum data loss limit for an Autonomous Database, in seconds.
     */
    localAdgAutoFailoverMaxDataLossLimit?: number | null;
    /**
     * Output only. This field indicates the local disaster recovery (DR) type of an Autonomous Database.
     */
    localDisasterRecoveryType?: string | null;
    /**
     * Output only. The details of the Autonomous Data Guard standby database.
     */
    localStandbyDb?: Schema$AutonomousDatabaseStandbySummary;
    /**
     * Output only. The date and time when maintenance will begin.
     */
    maintenanceBeginTime?: string | null;
    /**
     * Output only. The date and time when maintenance will end.
     */
    maintenanceEndTime?: string | null;
    /**
     * Optional. The maintenance schedule of the Autonomous Database.
     */
    maintenanceScheduleType?: string | null;
    /**
     * Output only. The amount of memory enabled per ECPU, in gigabytes.
     */
    memoryPerOracleComputeUnitGbs?: number | null;
    /**
     * Output only. The memory assigned to in-memory tables in an Autonomous Database.
     */
    memoryTableGbs?: number | null;
    /**
     * Optional. This field specifies if the Autonomous Database requires mTLS connections.
     */
    mtlsConnectionRequired?: boolean | null;
    /**
     * Optional. The national character set for the Autonomous Database. The default is AL16UTF16.
     */
    nCharacterSet?: string | null;
    /**
     * Output only. The long term backup schedule of the Autonomous Database.
     */
    nextLongTermBackupTime?: string | null;
    /**
     * Output only. OCID of the Autonomous Database. https://docs.oracle.com/en-us/iaas/Content/General/Concepts/identifiers.htm#Oracle
     */
    ocid?: string | null;
    /**
     * Output only. The Oracle Cloud Infrastructure link for the Autonomous Database.
     */
    ociUrl?: string | null;
    /**
     * Output only. This field indicates the current mode of the Autonomous Database.
     */
    openMode?: string | null;
    /**
     * Output only. This field indicates the state of Operations Insights for the Autonomous Database.
     */
    operationsInsightsState?: string | null;
    /**
     * Output only. The list of OCIDs of standby databases located in Autonomous Data Guard remote regions that are associated with the source database.
     */
    peerDbIds?: string[] | null;
    /**
     * Output only. The permission level of the Autonomous Database.
     */
    permissionLevel?: string | null;
    /**
     * Output only. The private endpoint for the Autonomous Database.
     */
    privateEndpoint?: string | null;
    /**
     * Optional. The private endpoint IP address for the Autonomous Database.
     */
    privateEndpointIp?: string | null;
    /**
     * Optional. The private endpoint label for the Autonomous Database.
     */
    privateEndpointLabel?: string | null;
    /**
     * Output only. The refresh mode of the cloned Autonomous Database.
     */
    refreshableMode?: string | null;
    /**
     * Output only. The refresh State of the clone.
     */
    refreshableState?: string | null;
    /**
     * Output only. The Data Guard role of the Autonomous Database.
     */
    role?: string | null;
    /**
     * Output only. The list and details of the scheduled operations of the Autonomous Database.
     */
    scheduledOperationDetails?: Schema$ScheduledOperationDetails[];
    /**
     * Optional. The ID of the Oracle Cloud Infrastructure vault secret.
     */
    secretId?: string | null;
    /**
     * Output only. An Oracle-managed Google Cloud service account on which customers can grant roles to access resources in the customer project.
     */
    serviceAgentEmail?: string | null;
    /**
     * Output only. The SQL Web Developer URL for the Autonomous Database.
     */
    sqlWebDeveloperUrl?: string | null;
    /**
     * Output only. The current lifecycle state of the Autonomous Database.
     */
    state?: string | null;
    /**
     * Output only. The list of available regions that can be used to create a clone for the Autonomous Database.
     */
    supportedCloneRegions?: string[] | null;
    /**
     * Output only. The storage space used by automatic backups of Autonomous Database, in gigabytes.
     */
    totalAutoBackupStorageSizeGbs?: number | null;
    /**
     * Output only. The storage space used by Autonomous Database, in gigabytes.
     */
    usedDataStorageSizeTbs?: number | null;
    /**
     * Optional. The ID of the Oracle Cloud Infrastructure vault.
     */
    vaultId?: string | null;
  }
  /**
   * Autonomous Data Guard standby database details. https://docs.oracle.com/en-us/iaas/api/#/en/database/20160918/datatypes/AutonomousDatabaseStandbySummary
   */
  export interface Schema$AutonomousDatabaseStandbySummary {
    /**
     * Output only. The date and time the Autonomous Data Guard role was switched for the standby Autonomous Database.
     */
    dataGuardRoleChangedTime?: string | null;
    /**
     * Output only. The date and time the Disaster Recovery role was switched for the standby Autonomous Database.
     */
    disasterRecoveryRoleChangedTime?: string | null;
    /**
     * Output only. The amount of time, in seconds, that the data of the standby database lags in comparison to the data of the primary database.
     */
    lagTimeDuration?: string | null;
    /**
     * Output only. The additional details about the current lifecycle state of the Autonomous Database.
     */
    lifecycleDetails?: string | null;
    /**
     * Output only. The current lifecycle state of the Autonomous Database.
     */
    state?: string | null;
  }
  /**
   * Details of the Autonomous Database version. https://docs.oracle.com/en-us/iaas/api/#/en/database/20160918/AutonomousDbVersionSummary/
   */
  export interface Schema$AutonomousDbVersion {
    /**
     * Output only. The Autonomous Database workload type.
     */
    dbWorkload?: string | null;
    /**
     * Identifier. The name of the Autonomous Database Version resource with the format: projects/{project\}/locations/{region\}/autonomousDbVersions/{autonomous_db_version\}
     */
    name?: string | null;
    /**
     * Output only. An Oracle Database version for Autonomous Database.
     */
    version?: string | null;
    /**
     * Output only. A URL that points to a detailed description of the Autonomous Database version.
     */
    workloadUri?: string | null;
  }
  /**
   * The details of the database backup destination.
   */
  export interface Schema$BackupDestinationDetails {
    /**
     * Optional. The type of the database backup destination.
     */
    type?: string | null;
  }
  /**
   * The request message for Operations.CancelOperation.
   */
  export interface Schema$CancelOperationRequest {}
  /**
   * Details of the OCI Cloud Account.
   */
  export interface Schema$CloudAccountDetails {
    /**
     * Output only. URL to create a new account and link.
     */
    accountCreationUri?: string | null;
    /**
     * Output only. OCI account name.
     */
    cloudAccount?: string | null;
    /**
     * Output only. OCI account home region.
     */
    cloudAccountHomeRegion?: string | null;
    /**
     * Output only. URL to link an existing account.
     */
    linkExistingAccountUri?: string | null;
  }
  /**
   * Represents CloudExadataInfrastructure resource. https://docs.oracle.com/en-us/iaas/api/#/en/database/20160918/CloudExadataInfrastructure/
   */
  export interface Schema$CloudExadataInfrastructure {
    /**
     * Output only. The date and time that the Exadata Infrastructure was created.
     */
    createTime?: string | null;
    /**
     * Optional. User friendly name for this resource.
     */
    displayName?: string | null;
    /**
     * Output only. Entitlement ID of the private offer against which this infrastructure resource is provisioned.
     */
    entitlementId?: string | null;
    /**
     * Optional. The GCP Oracle zone where Oracle Exadata Infrastructure is hosted. Example: us-east4-b-r2. If not specified, the system will pick a zone based on availability.
     */
    gcpOracleZone?: string | null;
    /**
     * Optional. Labels or tags associated with the resource.
     */
    labels?: {[key: string]: string} | null;
    /**
     * Identifier. The name of the Exadata Infrastructure resource with the format: projects/{project\}/locations/{region\}/cloudExadataInfrastructures/{cloud_exadata_infrastructure\}
     */
    name?: string | null;
    /**
     * Optional. Various properties of the infra.
     */
    properties?: Schema$CloudExadataInfrastructureProperties;
  }
  /**
   * Various properties of Exadata Infrastructure.
   */
  export interface Schema$CloudExadataInfrastructureProperties {
    /**
     * Output only. The requested number of additional storage servers activated for the Exadata Infrastructure.
     */
    activatedStorageCount?: number | null;
    /**
     * Output only. The requested number of additional storage servers for the Exadata Infrastructure.
     */
    additionalStorageCount?: number | null;
    /**
     * Output only. The available storage can be allocated to the Exadata Infrastructure resource, in gigabytes (GB).
     */
    availableStorageSizeGb?: number | null;
    /**
     * Optional. The number of compute servers for the Exadata Infrastructure.
     */
    computeCount?: number | null;
    /**
     * Output only. The compute model of the Exadata Infrastructure.
     */
    computeModel?: string | null;
    /**
     * Output only. The number of enabled CPU cores.
     */
    cpuCount?: number | null;
    /**
     * Optional. The list of customer contacts.
     */
    customerContacts?: Schema$CustomerContact[];
    /**
     * Output only. The database server type of the Exadata Infrastructure.
     */
    databaseServerType?: string | null;
    /**
     * Output only. Size, in terabytes, of the DATA disk group.
     */
    dataStorageSizeTb?: number | null;
    /**
     * Output only. The local node storage allocated in GBs.
     */
    dbNodeStorageSizeGb?: number | null;
    /**
     * Output only. The software version of the database servers (dom0) in the Exadata Infrastructure.
     */
    dbServerVersion?: string | null;
    /**
     * Optional. Maintenance window for repair.
     */
    maintenanceWindow?: Schema$MaintenanceWindow;
    /**
     * Output only. The total number of CPU cores available.
     */
    maxCpuCount?: number | null;
    /**
     * Output only. The total available DATA disk group size.
     */
    maxDataStorageTb?: number | null;
    /**
     * Output only. The total local node storage available in GBs.
     */
    maxDbNodeStorageSizeGb?: number | null;
    /**
     * Output only. The total memory available in GBs.
     */
    maxMemoryGb?: number | null;
    /**
     * Output only. The memory allocated in GBs.
     */
    memorySizeGb?: number | null;
    /**
     * Output only. The monthly software version of the database servers (dom0) in the Exadata Infrastructure. Example: 20.1.15
     */
    monthlyDbServerVersion?: string | null;
    /**
     * Output only. The monthly software version of the storage servers (cells) in the Exadata Infrastructure. Example: 20.1.15
     */
    monthlyStorageServerVersion?: string | null;
    /**
     * Output only. The OCID of the next maintenance run.
     */
    nextMaintenanceRunId?: string | null;
    /**
     * Output only. The time when the next maintenance run will occur.
     */
    nextMaintenanceRunTime?: string | null;
    /**
     * Output only. The time when the next security maintenance run will occur.
     */
    nextSecurityMaintenanceRunTime?: string | null;
    /**
     * Output only. OCID of created infra. https://docs.oracle.com/en-us/iaas/Content/General/Concepts/identifiers.htm#Oracle
     */
    ocid?: string | null;
    /**
     * Output only. Deep link to the OCI console to view this resource.
     */
    ociUrl?: string | null;
    /**
     * Required. The shape of the Exadata Infrastructure. The shape determines the amount of CPU, storage, and memory resources allocated to the instance.
     */
    shape?: string | null;
    /**
     * Output only. The current lifecycle state of the Exadata Infrastructure.
     */
    state?: string | null;
    /**
     * Optional. The number of Cloud Exadata storage servers for the Exadata Infrastructure.
     */
    storageCount?: number | null;
    /**
     * Output only. The storage server type of the Exadata Infrastructure.
     */
    storageServerType?: string | null;
    /**
     * Output only. The software version of the storage servers (cells) in the Exadata Infrastructure.
     */
    storageServerVersion?: string | null;
    /**
     * Optional. The total storage allocated to the Exadata Infrastructure resource, in gigabytes (GB).
     */
    totalStorageSizeGb?: number | null;
  }
  /**
   * Details of the Cloud VM Cluster resource. https://docs.oracle.com/en-us/iaas/api/#/en/database/20160918/CloudVmCluster/
   */
  export interface Schema$CloudVmCluster {
    /**
     * Optional. The name of the backup OdbSubnet associated with the VM Cluster. Format: projects/{project\}/locations/{location\}/odbNetworks/{odb_network\}/odbSubnets/{odb_subnet\}
     */
    backupOdbSubnet?: string | null;
    /**
     * Optional. CIDR range of the backup subnet.
     */
    backupSubnetCidr?: string | null;
    /**
     * Optional. Network settings. CIDR to use for cluster IP allocation.
     */
    cidr?: string | null;
    /**
     * Output only. The date and time that the VM cluster was created.
     */
    createTime?: string | null;
    /**
     * Optional. User friendly name for this resource.
     */
    displayName?: string | null;
    /**
     * Required. The name of the Exadata Infrastructure resource on which VM cluster resource is created, in the following format: projects/{project\}/locations/{region\}/cloudExadataInfrastuctures/{cloud_extradata_infrastructure\}
     */
    exadataInfrastructure?: string | null;
    /**
     * Output only. The GCP Oracle zone where Oracle CloudVmCluster is hosted. This will be the same as the gcp_oracle_zone of the CloudExadataInfrastructure. Example: us-east4-b-r2.
     */
    gcpOracleZone?: string | null;
    /**
     * Output only. The identity connector details which will allow OCI to securely access the resources in the customer project.
     */
    identityConnector?: Schema$IdentityConnector;
    /**
     * Optional. Labels or tags associated with the VM Cluster.
     */
    labels?: {[key: string]: string} | null;
    /**
     * Identifier. The name of the VM Cluster resource with the format: projects/{project\}/locations/{region\}/cloudVmClusters/{cloud_vm_cluster\}
     */
    name?: string | null;
    /**
     * Optional. The name of the VPC network. Format: projects/{project\}/global/networks/{network\}
     */
    network?: string | null;
    /**
     * Optional. The name of the OdbNetwork associated with the VM Cluster. Format: projects/{project\}/locations/{location\}/odbNetworks/{odb_network\} It is optional but if specified, this should match the parent ODBNetwork of the odb_subnet and backup_odb_subnet.
     */
    odbNetwork?: string | null;
    /**
     * Optional. The name of the OdbSubnet associated with the VM Cluster for IP allocation. Format: projects/{project\}/locations/{location\}/odbNetworks/{odb_network\}/odbSubnets/{odb_subnet\}
     */
    odbSubnet?: string | null;
    /**
     * Optional. Various properties of the VM Cluster.
     */
    properties?: Schema$CloudVmClusterProperties;
  }
  /**
   * Various properties and settings associated with Exadata VM cluster.
   */
  export interface Schema$CloudVmClusterProperties {
    /**
     * Optional. OCI Cluster name.
     */
    clusterName?: string | null;
    /**
     * Output only. Compartment ID of cluster.
     */
    compartmentId?: string | null;
    /**
     * Output only. The compute model of the VM Cluster.
     */
    computeModel?: string | null;
    /**
     * Required. Number of enabled CPU cores.
     */
    cpuCoreCount?: number | null;
    /**
     * Optional. The data disk group size to be allocated in TBs.
     */
    dataStorageSizeTb?: number | null;
    /**
     * Optional. Local storage per VM.
     */
    dbNodeStorageSizeGb?: number | null;
    /**
     * Optional. OCID of database servers.
     */
    dbServerOcids?: string[] | null;
    /**
     * Optional. Data collection options for diagnostics.
     */
    diagnosticsDataCollectionOptions?: Schema$DataCollectionOptions;
    /**
     * Optional. The type of redundancy.
     */
    diskRedundancy?: string | null;
    /**
     * Output only. DNS listener IP.
     */
    dnsListenerIp?: string | null;
    /**
     * Output only. Parent DNS domain where SCAN DNS and hosts names are qualified. ex: ocispdelegated.ocisp10jvnet.oraclevcn.com
     */
    domain?: string | null;
    /**
     * Optional. Grid Infrastructure Version.
     */
    giVersion?: string | null;
    /**
     * Output only. host name without domain. format: "-" with some suffix. ex: sp2-yi0xq where "sp2" is the hostname_prefix.
     */
    hostname?: string | null;
    /**
     * Optional. Prefix for VM cluster host names.
     */
    hostnamePrefix?: string | null;
    /**
     * Required. License type of VM Cluster.
     */
    licenseType?: string | null;
    /**
     * Optional. Use local backup.
     */
    localBackupEnabled?: boolean | null;
    /**
     * Optional. Memory allocated in GBs.
     */
    memorySizeGb?: number | null;
    /**
     * Optional. Number of database servers.
     */
    nodeCount?: number | null;
    /**
     * Output only. Oracle Cloud Infrastructure ID of VM Cluster.
     */
    ocid?: string | null;
    /**
     * Output only. Deep link to the OCI console to view this resource.
     */
    ociUrl?: string | null;
    /**
     * Optional. OCPU count per VM. Minimum is 0.1.
     */
    ocpuCount?: number | null;
    /**
     * Output only. SCAN DNS name. ex: sp2-yi0xq-scan.ocispdelegated.ocisp10jvnet.oraclevcn.com
     */
    scanDns?: string | null;
    /**
     * Output only. OCID of scan DNS record.
     */
    scanDnsRecordId?: string | null;
    /**
     * Output only. OCIDs of scan IPs.
     */
    scanIpIds?: string[] | null;
    /**
     * Output only. SCAN listener port - TCP
     */
    scanListenerPortTcp?: number | null;
    /**
     * Output only. SCAN listener port - TLS
     */
    scanListenerPortTcpSsl?: number | null;
    /**
     * Output only. Shape of VM Cluster.
     */
    shape?: string | null;
    /**
     * Optional. Use exadata sparse snapshots.
     */
    sparseDiskgroupEnabled?: boolean | null;
    /**
     * Optional. SSH public keys to be stored with cluster.
     */
    sshPublicKeys?: string[] | null;
    /**
     * Output only. State of the cluster.
     */
    state?: string | null;
    /**
     * Output only. The storage allocation for the disk group, in gigabytes (GB).
     */
    storageSizeGb?: number | null;
    /**
     * Optional. Operating system version of the image.
     */
    systemVersion?: string | null;
    /**
     * Optional. Time zone of VM Cluster to set. Defaults to UTC if not specified.
     */
    timeZone?: Schema$TimeZone;
  }
  /**
   * The CustomerContact reference as defined by Oracle. https://docs.oracle.com/en-us/iaas/api/#/en/database/20160918/datatypes/CustomerContact
   */
  export interface Schema$CustomerContact {
    /**
     * Required. The email address used by Oracle to send notifications regarding databases and infrastructure.
     */
    email?: string | null;
  }
  /**
   * Details of the Database resource. https://docs.oracle.com/en-us/iaas/api/#/en/database/20160918/Database/
   */
  export interface Schema$Database {
    /**
     * Required. The password for the default ADMIN user.
     */
    adminPassword?: string | null;
    /**
     * Optional. The character set for the database. The default is AL32UTF8.
     */
    characterSet?: string | null;
    /**
     * Output only. The date and time that the Database was created.
     */
    createTime?: string | null;
    /**
     * Optional. The database ID of the Database.
     */
    databaseId?: string | null;
    /**
     * Optional. The name of the DbHome resource associated with the Database.
     */
    dbHomeName?: string | null;
    /**
     * Optional. The database name. The name must begin with an alphabetic character and can contain a maximum of eight alphanumeric characters. Special characters are not permitted.
     */
    dbName?: string | null;
    /**
     * Optional. The DB_UNIQUE_NAME of the Oracle Database being backed up.
     */
    dbUniqueName?: string | null;
    /**
     * Output only. The GCP Oracle zone where the Database is created.
     */
    gcpOracleZone?: string | null;
    /**
     * Identifier. The name of the Database resource in the following format: projects/{project\}/locations/{region\}/databases/{database\}
     */
    name?: string | null;
    /**
     * Optional. The national character set for the database. The default is AL16UTF16.
     */
    ncharacterSet?: string | null;
    /**
     * Output only. HTTPS link to OCI resources exposed to Customer via UI Interface.
     */
    ociUrl?: string | null;
    /**
     * Output only. The Status of Operations Insights for this Database.
     */
    opsInsightsStatus?: string | null;
    /**
     * Optional. The properties of the Database.
     */
    properties?: Schema$DatabaseProperties;
    /**
     * Optional. The TDE wallet password for the database.
     */
    tdeWalletPassword?: string | null;
  }
  /**
   * Details of the Database character set resource.
   */
  export interface Schema$DatabaseCharacterSet {
    /**
     * Output only. The character set name for the Database which is the ID in the resource name.
     */
    characterSet?: string | null;
    /**
     * Output only. The character set type for the Database.
     */
    characterSetType?: string | null;
    /**
     * Identifier. The name of the Database Character Set resource in the following format: projects/{project\}/locations/{region\}/databaseCharacterSets/{database_character_set\}
     */
    name?: string | null;
  }
  /**
   * The connection string profile to allow clients to group. https://docs.oracle.com/en-us/iaas/api/#/en/database/20160918/datatypes/DatabaseConnectionStringProfile
   */
  export interface Schema$DatabaseConnectionStringProfile {
    /**
     * Output only. The current consumer group being used by the connection.
     */
    consumerGroup?: string | null;
    /**
     * Output only. The display name for the database connection.
     */
    displayName?: string | null;
    /**
     * Output only. The host name format being currently used in connection string.
     */
    hostFormat?: string | null;
    /**
     * Output only. This field indicates if the connection string is regional and is only applicable for cross-region Data Guard.
     */
    isRegional?: boolean | null;
    /**
     * Output only. The protocol being used by the connection.
     */
    protocol?: string | null;
    /**
     * Output only. The current session mode of the connection.
     */
    sessionMode?: string | null;
    /**
     * Output only. The syntax of the connection string.
     */
    syntaxFormat?: string | null;
    /**
     * Output only. This field indicates the TLS authentication type of the connection.
     */
    tlsAuthentication?: string | null;
    /**
     * Output only. The value of the connection string.
     */
    value?: string | null;
  }
  /**
   * The configuration of the Database Management service.
   */
  export interface Schema$DatabaseManagementConfig {
    /**
     * Output only. The status of the Database Management service.
     */
    managementState?: string | null;
    /**
     * Output only. The Database Management type.
     */
    managementType?: string | null;
  }
  /**
   * The properties of a Database.
   */
  export interface Schema$DatabaseProperties {
    /**
     * Output only. The Database Management config.
     */
    databaseManagementConfig?: Schema$DatabaseManagementConfig;
    /**
     * Optional. Backup options for the Database.
     */
    dbBackupConfig?: Schema$DbBackupConfig;
    /**
     * Required. The Oracle Database version.
     */
    dbVersion?: string | null;
    /**
     * Output only. State of the Database.
     */
    state?: string | null;
  }
  /**
   * Data collection options for diagnostics.
   */
  export interface Schema$DataCollectionOptions {
    /**
     * Optional. Indicates whether diagnostic collection is enabled for the VM cluster
     */
    diagnosticsEventsEnabled?: boolean | null;
    /**
     * Optional. Indicates whether health monitoring is enabled for the VM cluster
     */
    healthMonitoringEnabled?: boolean | null;
    /**
     * Optional. Indicates whether incident logs and trace collection are enabled for the VM cluster
     */
    incidentLogsEnabled?: boolean | null;
  }
  /**
   * Data collection options for diagnostics. https://docs.oracle.com/en-us/iaas/api/#/en/database/20160918/datatypes/DataCollectionOptions
   */
  export interface Schema$DataCollectionOptionsCommon {
    /**
     * Optional. Indicates whether to enable data collection for diagnostics.
     */
    isDiagnosticsEventsEnabled?: boolean | null;
    /**
     * Optional. Indicates whether to enable health monitoring.
     */
    isHealthMonitoringEnabled?: boolean | null;
    /**
     * Optional. Indicates whether to enable incident logs and trace collection.
     */
    isIncidentLogsEnabled?: boolean | null;
  }
  /**
   * Data collection options for DbSystem.
   */
  export interface Schema$DataCollectionOptionsDbSystem {
    /**
     * Optional. Indicates whether to enable data collection for diagnostics.
     */
    isDiagnosticsEventsEnabled?: boolean | null;
    /**
     * Optional. Indicates whether to enable incident logs and trace collection.
     */
    isIncidentLogsEnabled?: boolean | null;
  }
  /**
   * Backup Options for the Database.
   */
  export interface Schema$DbBackupConfig {
    /**
     * Optional. If set to true, enables automatic backups on the database.
     */
    autoBackupEnabled?: boolean | null;
    /**
     * Optional. The day of the week on which the full backup should be performed on the database. If no value is provided, it will default to Sunday.
     */
    autoFullBackupDay?: string | null;
    /**
     * Optional. The window in which the full backup should be performed on the database. If no value is provided, the default is anytime.
     */
    autoFullBackupWindow?: string | null;
    /**
     * Optional. The window in which the incremental backup should be performed on the database. If no value is provided, the default is anytime except the auto full backup day.
     */
    autoIncrementalBackupWindow?: string | null;
    /**
     * Optional. This defines when the backups will be deleted after Database termination.
     */
    backupDeletionPolicy?: string | null;
    /**
     * Optional. Details of the database backup destinations.
     */
    backupDestinationDetails?: Schema$BackupDestinationDetails[];
    /**
     * Optional. The number of days an automatic backup is retained before being automatically deleted. This value determines the earliest point in time to which a database can be restored. Min: 1, Max: 60.
     */
    retentionPeriodDays?: number | null;
  }
  /**
   * Details of the Database Home resource.
   */
  export interface Schema$DbHome {
    /**
     * Required. The Database resource.
     */
    database?: Schema$Database;
    /**
     * Required. A valid Oracle Database version. For a list of supported versions, use the ListDbVersions operation.
     */
    dbVersion?: string | null;
    /**
     * Optional. The display name for the Database Home. The name does not have to be unique within your project.
     */
    displayName?: string | null;
    /**
     * Optional. Whether unified auditing is enabled for the Database Home.
     */
    isUnifiedAuditingEnabled?: boolean | null;
  }
  /**
   * Details of the database node resource. https://docs.oracle.com/en-us/iaas/api/#/en/database/20160918/DbNode/
   */
  export interface Schema$DbNode {
    /**
     * Identifier. The name of the database node resource in the following format: projects/{project\}/locations/{location\}/cloudVmClusters/{cloud_vm_cluster\}/dbNodes/{db_node\}
     */
    name?: string | null;
    /**
     * Optional. Various properties of the database node.
     */
    properties?: Schema$DbNodeProperties;
  }
  /**
   * Various properties and settings associated with Db node.
   */
  export interface Schema$DbNodeProperties {
    /**
     * Output only. The date and time that the database node was created.
     */
    createTime?: string | null;
    /**
     * Optional. Local storage per database node.
     */
    dbNodeStorageSizeGb?: number | null;
    /**
     * Optional. Database server OCID.
     */
    dbServerOcid?: string | null;
    /**
     * Optional. DNS
     */
    hostname?: string | null;
    /**
     * Memory allocated in GBs.
     */
    memorySizeGb?: number | null;
    /**
     * Output only. OCID of database node.
     */
    ocid?: string | null;
    /**
     * Optional. OCPU count per database node.
     */
    ocpuCount?: number | null;
    /**
     * Output only. State of the database node.
     */
    state?: string | null;
    /**
     * Total CPU core count of the database node.
     */
    totalCpuCoreCount?: number | null;
  }
  /**
   * Details of the database server resource. https://docs.oracle.com/en-us/iaas/api/#/en/database/20160918/DbServer/
   */
  export interface Schema$DbServer {
    /**
     * Optional. User friendly name for this resource.
     */
    displayName?: string | null;
    /**
     * Identifier. The name of the database server resource with the format: projects/{project\}/locations/{location\}/cloudExadataInfrastructures/{cloud_exadata_infrastructure\}/dbServers/{db_server\}
     */
    name?: string | null;
    /**
     * Optional. Various properties of the database server.
     */
    properties?: Schema$DbServerProperties;
  }
  /**
   * Various properties and settings associated with Exadata database server.
   */
  export interface Schema$DbServerProperties {
    /**
     * Output only. OCID of database nodes associated with the database server.
     */
    dbNodeIds?: string[] | null;
    /**
     * Optional. Local storage per VM.
     */
    dbNodeStorageSizeGb?: number | null;
    /**
     * Optional. Maximum local storage per VM.
     */
    maxDbNodeStorageSizeGb?: number | null;
    /**
     * Optional. Maximum memory allocated in GBs.
     */
    maxMemorySizeGb?: number | null;
    /**
     * Optional. Maximum OCPU count per database.
     */
    maxOcpuCount?: number | null;
    /**
     * Optional. Memory allocated in GBs.
     */
    memorySizeGb?: number | null;
    /**
     * Output only. OCID of database server.
     */
    ocid?: string | null;
    /**
     * Optional. OCPU count per database.
     */
    ocpuCount?: number | null;
    /**
     * Output only. State of the database server.
     */
    state?: string | null;
    /**
     * Optional. Vm count per database.
     */
    vmCount?: number | null;
  }
  /**
   * Details of the DbSystem (BaseDB) resource. https://docs.oracle.com/en-us/iaas/api/#/en/database/20160918/DbSystem/
   */
  export interface Schema$DbSystem {
    /**
     * Output only. The date and time that the DbSystem was created.
     */
    createTime?: string | null;
    /**
     * Required. The display name for the System db. The name does not have to be unique within your project.
     */
    displayName?: string | null;
    /**
     * Output only. The ID of the subscription entitlement associated with the DbSystem
     */
    entitlementId?: string | null;
    /**
     * Optional. The GCP Oracle zone where Oracle DbSystem is hosted. Example: us-east4-b-r2. If not specified, the system will pick a zone based on availability.
     */
    gcpOracleZone?: string | null;
    /**
     * Optional. The labels or tags associated with the DbSystem.
     */
    labels?: {[key: string]: string} | null;
    /**
     * Identifier. The name of the DbSystem resource in the following format: projects/{project\}/locations/{region\}/dbSystems/{db_system\}
     */
    name?: string | null;
    /**
     * Output only. HTTPS link to OCI resources exposed to Customer via UI Interface.
     */
    ociUrl?: string | null;
    /**
     * Optional. The name of the OdbNetwork associated with the DbSystem. Format: projects/{project\}/locations/{location\}/odbNetworks/{odb_network\} It is optional but if specified, this should match the parent ODBNetwork of the OdbSubnet.
     */
    odbNetwork?: string | null;
    /**
     * Required. The name of the OdbSubnet associated with the DbSystem for IP allocation. Format: projects/{project\}/locations/{location\}/odbNetworks/{odb_network\}/odbSubnets/{odb_subnet\}
     */
    odbSubnet?: string | null;
    /**
     * Optional. The properties of the DbSystem.
     */
    properties?: Schema$DbSystemProperties;
  }
  /**
   * Summary of the DbSystem initial storage size.
   */
  export interface Schema$DbSystemInitialStorageSize {
    /**
     * Output only. The name of the resource.
     */
    name?: string | null;
    /**
     * Output only. The properties of the DbSystem initial storage size summary.
     */
    properties?: Schema$DbSystemInitialStorageSizeProperties;
  }
  /**
   * The properties of a DbSystem initial storage size summary.
   */
  export interface Schema$DbSystemInitialStorageSizeProperties {
    /**
     * Output only. List of storage disk details available for launches from backup.
     */
    launchFromBackupStorageSizeDetails?: Schema$StorageSizeDetails[];
    /**
     * Output only. VM shape platform type
     */
    shapeType?: string | null;
    /**
     * Output only. The storage option used in DB system.
     */
    storageManagement?: string | null;
    /**
     * Output only. List of storage disk details.
     */
    storageSizeDetails?: Schema$StorageSizeDetails[];
  }
  /**
   * Details of the DbSystem Options.
   */
  export interface Schema$DbSystemOptions {
    /**
     * Optional. The storage option used in DB system.
     */
    storageManagement?: string | null;
  }
  /**
   * The properties of a DbSystem.
   */
  export interface Schema$DbSystemProperties {
    /**
     * Required. The number of CPU cores to enable for the DbSystem.
     */
    computeCount?: number | null;
    /**
     * Optional. The compute model of the DbSystem.
     */
    computeModel?: string | null;
    /**
     * Required. The database edition of the DbSystem.
     */
    databaseEdition?: string | null;
    /**
     * Optional. Data collection options for diagnostics.
     */
    dataCollectionOptions?: Schema$DataCollectionOptionsDbSystem;
    /**
     * Optional. The data storage size in GB that is currently available to DbSystems.
     */
    dataStorageSizeGb?: number | null;
    /**
     * Optional. Details for creating a Database Home.
     */
    dbHome?: Schema$DbHome;
    /**
     * Optional. The options for the DbSystem.
     */
    dbSystemOptions?: Schema$DbSystemOptions;
    /**
     * Optional. The host domain name of the DbSystem.
     */
    domain?: string | null;
    /**
     * Output only. The hostname of the DbSystem.
     */
    hostname?: string | null;
    /**
     * Optional. Prefix for DB System host names.
     */
    hostnamePrefix?: string | null;
    /**
     * Required. The initial data storage size in GB.
     */
    initialDataStorageSizeGb?: number | null;
    /**
     * Required. The license model of the DbSystem.
     */
    licenseModel?: string | null;
    /**
     * Output only. State of the DbSystem.
     */
    lifecycleState?: string | null;
    /**
     * Optional. The memory size in GB.
     */
    memorySizeGb?: number | null;
    /**
     * Optional. The number of nodes in the DbSystem.
     */
    nodeCount?: number | null;
    /**
     * Output only. OCID of the DbSystem.
     */
    ocid?: string | null;
    /**
     * Optional. The private IP address of the DbSystem.
     */
    privateIp?: string | null;
    /**
     * Optional. The reco/redo storage size in GB.
     */
    recoStorageSizeGb?: number | null;
    /**
     * Required. Shape of DB System.
     */
    shape?: string | null;
    /**
     * Required. SSH public keys to be stored with the DbSystem.
     */
    sshPublicKeys?: string[] | null;
    /**
     * Optional. Time zone of the DbSystem.
     */
    timeZone?: Schema$TimeZone;
  }
  /**
   * Details of the Database System Shapes resource. https://docs.oracle.com/en-us/iaas/api/#/en/database/20160918/DbSystemShapeSummary/
   */
  export interface Schema$DbSystemShape {
    /**
     * Optional. Number of cores per node.
     */
    availableCoreCountPerNode?: number | null;
    /**
     * Optional. Storage per storage server in terabytes.
     */
    availableDataStorageTb?: number | null;
    /**
     * Optional. Memory per database server node in gigabytes.
     */
    availableMemoryPerNodeGb?: number | null;
    /**
     * Optional. Maximum number of database servers.
     */
    maxNodeCount?: number | null;
    /**
     * Optional. Maximum number of storage servers.
     */
    maxStorageCount?: number | null;
    /**
     * Optional. Minimum core count per node.
     */
    minCoreCountPerNode?: number | null;
    /**
     * Optional. Minimum node storage per database server in gigabytes.
     */
    minDbNodeStoragePerNodeGb?: number | null;
    /**
     * Optional. Minimum memory per node in gigabytes.
     */
    minMemoryPerNodeGb?: number | null;
    /**
     * Optional. Minimum number of database servers.
     */
    minNodeCount?: number | null;
    /**
     * Optional. Minimum number of storage servers.
     */
    minStorageCount?: number | null;
    /**
     * Identifier. The name of the Database System Shape resource with the format: projects/{project\}/locations/{region\}/dbSystemShapes/{db_system_shape\}
     */
    name?: string | null;
    /**
     * Optional. shape
     */
    shape?: string | null;
  }
  /**
   * A valid Oracle Database version.
   */
  export interface Schema$DbVersion {
    /**
     * Output only. The name of the DbVersion resource in the following format: projects/{project\}/locations/{region\}/dbVersions/{db_version\}
     */
    name?: string | null;
    /**
     * Output only. The properties of the DbVersion.
     */
    properties?: Schema$DbVersionProperties;
  }
  /**
   * The properties of a DbVersion.
   */
  export interface Schema$DbVersionProperties {
    /**
     * Output only. True if this version of the Oracle Database software is the latest version for a release.
     */
    isLatestForMajorVersion?: boolean | null;
    /**
     * Output only. True if this version of the Oracle Database software is the preview version.
     */
    isPreviewDbVersion?: boolean | null;
    /**
     * Output only. True if this version of the Oracle Database software is supported for Upgrade.
     */
    isUpgradeSupported?: boolean | null;
    /**
     * Output only. True if this version of the Oracle Database software supports pluggable databases.
     */
    supportsPdb?: boolean | null;
    /**
     * Output only. A valid Oracle Database version.
     */
    version?: string | null;
  }
  /**
   * Wrapper message for the value of a defined tag.
   */
  export interface Schema$DefinedTagValue {
    /**
     * The tags within the namespace.
     */
    tags?: {[key: string]: string} | null;
  }
  /**
   * A generic empty message that you can re-use to avoid defining duplicated empty messages in your APIs. A typical example is to use it as the request or the response type of an API method. For instance: service Foo { rpc Bar(google.protobuf.Empty) returns (google.protobuf.Empty); \}
   */
  export interface Schema$Empty {}
  /**
   * The encryption key used to encrypt the Autonomous Database.
   */
  export interface Schema$EncryptionKey {
    /**
     * Optional. The KMS key used to encrypt the Autonomous Database. This field is required if the provider is GOOGLE_MANAGED. The name of the KMS key resource in the following format: `projects/{project\}/locations/{location\}/keyRings/{key_ring\}/cryptoKeys/{crypto_key\}`.
     */
    kmsKey?: string | null;
    /**
     * Optional. The provider of the encryption key.
     */
    provider?: string | null;
  }
  /**
   * The history of the encryption keys used to encrypt the Autonomous Database.
   */
  export interface Schema$EncryptionKeyHistoryEntry {
    /**
     * Output only. The date and time when the encryption key was activated on the Autonomous Database..
     */
    activationTime?: string | null;
    /**
     * Output only. The encryption key used to encrypt the Autonomous Database.
     */
    encryptionKey?: Schema$EncryptionKey;
  }
  /**
   * Details of the Entitlement resource.
   */
  export interface Schema$Entitlement {
    /**
     * Details of the OCI Cloud Account.
     */
    cloudAccountDetails?: Schema$CloudAccountDetails;
    /**
     * Output only. Google Cloud Marketplace order ID (aka entitlement ID)
     */
    entitlementId?: string | null;
    /**
     * Identifier. The name of the Entitlement resource with the format: projects/{project\}/locations/{region\}/entitlements/{entitlement\}
     */
    name?: string | null;
    /**
     * Output only. Entitlement State.
     */
    state?: string | null;
  }
  /**
   * ExadbVmCluster represents a cluster of VMs that are used to run Exadata workloads. https://docs.oracle.com/en-us/iaas/api/#/en/database/20160918/ExadbVmCluster/
   */
  export interface Schema$ExadbVmCluster {
    /**
     * Required. Immutable. The name of the backup OdbSubnet associated with the ExadbVmCluster. Format: projects/{project\}/locations/{location\}/odbNetworks/{odb_network\}/odbSubnets/{odb_subnet\}
     */
    backupOdbSubnet?: string | null;
    /**
     * Output only. The date and time that the ExadbVmCluster was created.
     */
    createTime?: string | null;
    /**
     * Required. Immutable. The display name for the ExadbVmCluster. The name does not have to be unique within your project. The name must be 1-255 characters long and can only contain alphanumeric characters.
     */
    displayName?: string | null;
    /**
     * Output only. The ID of the subscription entitlement associated with the ExadbVmCluster.
     */
    entitlementId?: string | null;
    /**
     * Output only. Immutable. The GCP Oracle zone where Oracle ExadbVmCluster is hosted. Example: us-east4-b-r2. During creation, the system will pick the zone assigned to the ExascaleDbStorageVault.
     */
    gcpOracleZone?: string | null;
    /**
     * Optional. The labels or tags associated with the ExadbVmCluster.
     */
    labels?: {[key: string]: string} | null;
    /**
     * Identifier. The name of the ExadbVmCluster resource in the following format: projects/{project\}/locations/{region\}/exadbVmClusters/{exadb_vm_cluster\}
     */
    name?: string | null;
    /**
     * Optional. Immutable. The name of the OdbNetwork associated with the ExadbVmCluster. Format: projects/{project\}/locations/{location\}/odbNetworks/{odb_network\} It is optional but if specified, this should match the parent ODBNetwork of the OdbSubnet.
     */
    odbNetwork?: string | null;
    /**
     * Required. Immutable. The name of the OdbSubnet associated with the ExadbVmCluster for IP allocation. Format: projects/{project\}/locations/{location\}/odbNetworks/{odb_network\}/odbSubnets/{odb_subnet\}
     */
    odbSubnet?: string | null;
    /**
     * Required. The properties of the ExadbVmCluster.
     */
    properties?: Schema$ExadbVmClusterProperties;
  }
  /**
   * The properties of an ExadbVmCluster.
   */
  export interface Schema$ExadbVmClusterProperties {
    /**
     * Optional. Immutable. The number of additional ECPUs per node for an Exadata VM cluster on exascale infrastructure.
     */
    additionalEcpuCountPerNode?: number | null;
    /**
     * Optional. Immutable. The cluster name for Exascale vm cluster. The cluster name must begin with an alphabetic character and may contain hyphens(-) but can not contain underscores(_). It should be not more than 11 characters and is not case sensitive. OCI Cluster name.
     */
    clusterName?: string | null;
    /**
     * Optional. Immutable. Indicates user preference for data collection options.
     */
    dataCollectionOptions?: Schema$DataCollectionOptionsCommon;
    /**
     * Required. Immutable. The number of ECPUs enabled per node for an exadata vm cluster on exascale infrastructure.
     */
    enabledEcpuCountPerNode?: number | null;
    /**
     * Required. Immutable. The name of ExascaleDbStorageVault associated with the ExadbVmCluster. It can refer to an existing ExascaleDbStorageVault. Or a new one can be created during the ExadbVmCluster creation (requires storage_vault_properties to be set). Format: projects/{project\}/locations/{location\}/exascaleDbStorageVaults/{exascale_db_storage_vault\}
     */
    exascaleDbStorageVault?: string | null;
    /**
     * Output only. The Oracle Grid Infrastructure (GI) software version.
     */
    giVersion?: string | null;
    /**
     * Required. Immutable. Grid Infrastructure Version.
     */
    gridImageId?: string | null;
    /**
     * Output only. The hostname of the ExadbVmCluster.
     */
    hostname?: string | null;
    /**
     * Required. Immutable. Prefix for VM cluster host names.
     */
    hostnamePrefix?: string | null;
    /**
     * Optional. Immutable. The license type of the ExadbVmCluster.
     */
    licenseModel?: string | null;
    /**
     * Output only. State of the cluster.
     */
    lifecycleState?: string | null;
    /**
     * Output only. Memory per VM (GB) (Read-only): Shows the amount of memory allocated to each VM. Memory is calculated based on 2.75 GB per Total ECPUs.
     */
    memorySizeGb?: number | null;
    /**
     * Required. The number of nodes/VMs in the ExadbVmCluster.
     */
    nodeCount?: number | null;
    /**
     * Output only. Deep link to the OCI console to view this resource.
     */
    ociUri?: string | null;
    /**
     * Optional. Immutable. SCAN listener port - TCP
     */
    scanListenerPortTcp?: number | null;
    /**
     * Required. Immutable. The shape attribute of the VM cluster. The type of Exascale storage used for Exadata VM cluster. The default is SMART_STORAGE which supports Oracle Database 23ai and later
     */
    shapeAttribute?: string | null;
    /**
     * Required. Immutable. The SSH public keys for the ExadbVmCluster.
     */
    sshPublicKeys?: string[] | null;
    /**
     * Optional. Immutable. The time zone of the ExadbVmCluster.
     */
    timeZone?: Schema$TimeZone;
    /**
     * Required. Immutable. Total storage details for the ExadbVmCluster.
     */
    vmFileSystemStorage?: Schema$ExadbVmClusterStorageDetails;
  }
  /**
   * The storage allocation for the exadbvmcluster, in gigabytes (GB).
   */
  export interface Schema$ExadbVmClusterStorageDetails {
    /**
     * Required. The storage allocation for the exadbvmcluster per node, in gigabytes (GB). This field is used to calculate the total storage allocation for the exadbvmcluster.
     */
    sizeInGbsPerNode?: number | null;
  }
  /**
   * The storage details of the ExascaleDbStorageVault.
   */
  export interface Schema$ExascaleDbStorageDetails {
    /**
     * Output only. The available storage capacity for the ExascaleDbStorageVault, in gigabytes (GB).
     */
    availableSizeGbs?: number | null;
    /**
     * Required. The total storage allocation for the ExascaleDbStorageVault, in gigabytes (GB).
     */
    totalSizeGbs?: number | null;
  }
  /**
   * ExascaleDbStorageVault represents a storage vault exadb vm cluster resource. https://docs.oracle.com/en-us/iaas/api/#/en/database/20160918/ExascaleDbStorageVault/
   */
  export interface Schema$ExascaleDbStorageVault {
    /**
     * Output only. The date and time when the ExascaleDbStorageVault was created.
     */
    createTime?: string | null;
    /**
     * Required. The display name for the ExascaleDbStorageVault. The name does not have to be unique within your project. The name must be 1-255 characters long and can only contain alphanumeric characters.
     */
    displayName?: string | null;
    /**
     * Output only. The ID of the subscription entitlement associated with the ExascaleDbStorageVault.
     */
    entitlementId?: string | null;
    /**
     * Optional. The GCP Oracle zone where Oracle ExascaleDbStorageVault is hosted. Example: us-east4-b-r2. If not specified, the system will pick a zone based on availability.
     */
    gcpOracleZone?: string | null;
    /**
     * Optional. The labels or tags associated with the ExascaleDbStorageVault.
     */
    labels?: {[key: string]: string} | null;
    /**
     * Identifier. The resource name of the ExascaleDbStorageVault. Format: projects/{project\}/locations/{location\}/exascaleDbStorageVaults/{exascale_db_storage_vault\}
     */
    name?: string | null;
    /**
     * Required. The properties of the ExascaleDbStorageVault.
     */
    properties?: Schema$ExascaleDbStorageVaultProperties;
  }
  /**
   * The properties of the ExascaleDbStorageVault. next ID: 12
   */
  export interface Schema$ExascaleDbStorageVaultProperties {
    /**
     * Optional. The size of additional flash cache in percentage of high capacity database storage.
     */
    additionalFlashCachePercent?: number | null;
    /**
     * Output only. The shape attributes of the VM clusters attached to the ExascaleDbStorageVault.
     */
    attachedShapeAttributes?: string[] | null;
    /**
     * Output only. The shape attributes available for the VM clusters to be attached to the ExascaleDbStorageVault.
     */
    availableShapeAttributes?: string[] | null;
    /**
     * Optional. The description of the ExascaleDbStorageVault.
     */
    description?: string | null;
    /**
     * Required. The storage details of the ExascaleDbStorageVault.
     */
    exascaleDbStorageDetails?: Schema$ExascaleDbStorageDetails;
    /**
     * Output only. The OCID for the ExascaleDbStorageVault.
     */
    ocid?: string | null;
    /**
     * Output only. Deep link to the OCI console to view this resource.
     */
    ociUri?: string | null;
    /**
     * Output only. The state of the ExascaleDbStorageVault.
     */
    state?: string | null;
    /**
     * Output only. The time zone of the ExascaleDbStorageVault.
     */
    timeZone?: Schema$TimeZone;
    /**
     * Output only. The number of VM clusters associated with the ExascaleDbStorageVault.
     */
    vmClusterCount?: number | null;
    /**
     * Output only. The list of VM cluster OCIDs associated with the ExascaleDbStorageVault.
     */
    vmClusterIds?: string[] | null;
  }
  /**
   * The request for `OracleDatabase.FailoverAutonomousDatabase`.
   */
  export interface Schema$FailoverAutonomousDatabaseRequest {
    /**
     * Required. The peer database name to fail over to.
     */
    peerAutonomousDatabase?: string | null;
  }
  /**
   * The request for `AutonomousDatabase.GenerateWallet`.
   */
  export interface Schema$GenerateAutonomousDatabaseWalletRequest {
    /**
     * Optional. True when requesting regional connection strings in PDB connect info, applicable to cross-region Data Guard only.
     */
    isRegional?: boolean | null;
    /**
     * Required. The password used to encrypt the keys inside the wallet. The password must be a minimum of 8 characters.
     */
    password?: string | null;
    /**
     * Optional. The type of wallet generation for the Autonomous Database. The default value is SINGLE.
     */
    type?: string | null;
  }
  /**
   * The response for `AutonomousDatabase.GenerateWallet`.
   */
  export interface Schema$GenerateAutonomousDatabaseWalletResponse {
    /**
     * Output only. The base64 encoded wallet files.
     */
    archiveContent?: string | null;
  }
  /**
   * Details of the Oracle Grid Infrastructure (GI) version resource. https://docs.oracle.com/en-us/iaas/api/#/en/database/20160918/GiVersionSummary/
   */
  export interface Schema$GiVersion {
    /**
     * Identifier. The name of the Oracle Grid Infrastructure (GI) version resource with the format: projects/{project\}/locations/{region\}/giVersions/{gi_versions\}
     */
    name?: string | null;
    /**
     * Optional. version
     */
    version?: string | null;
  }
  /**
   * The identity connector details which will allow OCI to securely access the resources in the customer project.
   */
  export interface Schema$IdentityConnector {
    /**
     * Output only. The connection state of the identity connector.
     */
    connectionState?: string | null;
    /**
     * Output only. A google managed service account on which customers can grant roles to access resources in the customer project. Example: `p176944527254-55-75119d87fd8f@gcp-sa-oci.iam.gserviceaccount.com`
     */
    serviceAgentEmail?: string | null;
  }
  /**
   * The response for `AutonomousDatabaseBackup.List`.
   */
  export interface Schema$ListAutonomousDatabaseBackupsResponse {
    /**
     * The list of Autonomous Database Backups.
     */
    autonomousDatabaseBackups?: Schema$AutonomousDatabaseBackup[];
    /**
     * A token identifying a page of results the server should return.
     */
    nextPageToken?: string | null;
  }
  /**
   * The response for `AutonomousDatabaseCharacterSet.List`.
   */
  export interface Schema$ListAutonomousDatabaseCharacterSetsResponse {
    /**
     * The list of Autonomous Database Character Sets.
     */
    autonomousDatabaseCharacterSets?: Schema$AutonomousDatabaseCharacterSet[];
    /**
     * A token identifying a page of results the server should return.
     */
    nextPageToken?: string | null;
  }
  /**
   * The response for `AutonomousDatabase.List`.
   */
  export interface Schema$ListAutonomousDatabasesResponse {
    /**
     * The list of Autonomous Databases.
     */
    autonomousDatabases?: Schema$AutonomousDatabase[];
    /**
     * A token identifying a page of results the server should return.
     */
    nextPageToken?: string | null;
  }
  /**
   * The response for `AutonomousDbVersion.List`.
   */
  export interface Schema$ListAutonomousDbVersionsResponse {
    /**
     * The list of Autonomous Database versions.
     */
    autonomousDbVersions?: Schema$AutonomousDbVersion[];
    /**
     * A token identifying a page of results the server should return.
     */
    nextPageToken?: string | null;
  }
  /**
   * The response for `CloudExadataInfrastructures.list`.
   */
  export interface Schema$ListCloudExadataInfrastructuresResponse {
    /**
     * The list of Exadata Infrastructures.
     */
    cloudExadataInfrastructures?: Schema$CloudExadataInfrastructure[];
    /**
     * A token for fetching next page of response.
     */
    nextPageToken?: string | null;
  }
  /**
   * The response for `CloudVmCluster.List`.
   */
  export interface Schema$ListCloudVmClustersResponse {
    /**
     * The list of VM Clusters.
     */
    cloudVmClusters?: Schema$CloudVmCluster[];
    /**
     * A token to fetch the next page of results.
     */
    nextPageToken?: string | null;
  }
  /**
   * The response for `DatabaseCharacterSet.List`.
   */
  export interface Schema$ListDatabaseCharacterSetsResponse {
    /**
     * The list of DatabaseCharacterSets.
     */
    databaseCharacterSets?: Schema$DatabaseCharacterSet[];
    /**
     * A token identifying a page of results the server should return.
     */
    nextPageToken?: string | null;
  }
  /**
   * The response for `Database.List`.
   */
  export interface Schema$ListDatabasesResponse {
    /**
     * The list of Databases.
     */
    databases?: Schema$Database[];
    /**
     * A token identifying a page of results the server should return.
     */
    nextPageToken?: string | null;
  }
  /**
   * The response for `DbNode.List`.
   */
  export interface Schema$ListDbNodesResponse {
    /**
     * The list of DB Nodes
     */
    dbNodes?: Schema$DbNode[];
    /**
     * A token identifying a page of results the node should return.
     */
    nextPageToken?: string | null;
  }
  /**
   * The response for `DbServer.List`.
   */
  export interface Schema$ListDbServersResponse {
    /**
     * The list of database servers.
     */
    dbServers?: Schema$DbServer[];
    /**
     * A token identifying a page of results the server should return.
     */
    nextPageToken?: string | null;
  }
  /**
   * The response for `DbSystemInitialStorageSizes.List`.
   */
  export interface Schema$ListDbSystemInitialStorageSizesResponse {
    /**
     * The list of DbSystemInitialStorageSizes.
     */
    dbSystemInitialStorageSizes?: Schema$DbSystemInitialStorageSize[];
    /**
     * A token identifying a page of results the server should return.
     */
    nextPageToken?: string | null;
  }
  /**
   * The response for `DbSystemShape.List`.
   */
  export interface Schema$ListDbSystemShapesResponse {
    /**
     * The list of Database System shapes.
     */
    dbSystemShapes?: Schema$DbSystemShape[];
    /**
     * A token identifying a page of results the server should return.
     */
    nextPageToken?: string | null;
  }
  /**
   * The response for `DbSystem.List`.
   */
  export interface Schema$ListDbSystemsResponse {
    /**
     * The list of DbSystems.
     */
    dbSystems?: Schema$DbSystem[];
    /**
     * A token identifying a page of results the server should return.
     */
    nextPageToken?: string | null;
  }
  /**
   * The response for `DbVersions.List`.
   */
  export interface Schema$ListDbVersionsResponse {
    /**
     * The list of DbVersions.
     */
    dbVersions?: Schema$DbVersion[];
    /**
     * A token identifying a page of results the server should return.
     */
    nextPageToken?: string | null;
  }
  /**
   * The response for `Entitlement.List`.
   */
  export interface Schema$ListEntitlementsResponse {
    /**
     * The list of Entitlements
     */
    entitlements?: Schema$Entitlement[];
    /**
     * A token identifying a page of results the server should return.
     */
    nextPageToken?: string | null;
  }
  /**
   * The response for `ExadbVmCluster.List`.
   */
  export interface Schema$ListExadbVmClustersResponse {
    /**
     * The list of ExadbVmClusters.
     */
    exadbVmClusters?: Schema$ExadbVmCluster[];
    /**
     * A token identifying a page of results the server should return.
     */
    nextPageToken?: string | null;
  }
  /**
   * The response for `ExascaleDbStorageVault.List`.
   */
  export interface Schema$ListExascaleDbStorageVaultsResponse {
    /**
     * The ExascaleDbStorageVaults.
     */
    exascaleDbStorageVaults?: Schema$ExascaleDbStorageVault[];
    /**
     * A token identifying a page of results the server should return. If present, the next page token can be provided to a subsequent ListExascaleDbStorageVaults call to list the next page. If empty, there are no more pages.
     */
    nextPageToken?: string | null;
  }
  /**
   * The response for `GiVersion.List`.
   */
  export interface Schema$ListGiVersionsResponse {
    /**
     * The list of Oracle Grid Infrastructure (GI) versions.
     */
    giVersions?: Schema$GiVersion[];
    /**
     * A token identifying a page of results the server should return.
     */
    nextPageToken?: string | null;
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
   * The response for `MinorVersion.List`.
   */
  export interface Schema$ListMinorVersionsResponse {
    /**
     * The list of MinorVersions.
     */
    minorVersions?: Schema$MinorVersion[];
    /**
     * A token identifying a page of results the server should return.
     */
    nextPageToken?: string | null;
  }
  /**
   * The response for `OdbNetwork.List`.
   */
  export interface Schema$ListOdbNetworksResponse {
    /**
     * A token identifying a page of results the server should return.
     */
    nextPageToken?: string | null;
    /**
     * The list of ODB Networks.
     */
    odbNetworks?: Schema$OdbNetwork[];
    /**
     * Unreachable locations when listing resources across all locations using wildcard location '-'.
     */
    unreachable?: string[] | null;
  }
  /**
   * The response for `OdbSubnet.List`.
   */
  export interface Schema$ListOdbSubnetsResponse {
    /**
     * A token identifying a page of results the server should return.
     */
    nextPageToken?: string | null;
    /**
     * The list of ODB Subnets.
     */
    odbSubnets?: Schema$OdbSubnet[];
    /**
     * Unreachable locations when listing resources across all locations using wildcard location '-'.
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
    /**
     * Unordered list. Unreachable resources. Populated when the request sets `ListOperationsRequest.return_partial_success` and reads across collections e.g. when attempting to list all resources across all supported locations.
     */
    unreachable?: string[] | null;
  }
  /**
   * The response for `PluggableDatabase.List`.
   */
  export interface Schema$ListPluggableDatabasesResponse {
    /**
     * A token identifying a page of results the server should return.
     */
    nextPageToken?: string | null;
    /**
     * The list of PluggableDatabases.
     */
    pluggableDatabases?: Schema$PluggableDatabase[];
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
   * Metadata for a given Location.
   */
  export interface Schema$LocationMetadata {
    /**
     * Output only. Google Cloud Platform Oracle zones in a location.
     */
    gcpOracleZones?: string[] | null;
  }
  /**
   * Maintenance window as defined by Oracle. https://docs.oracle.com/en-us/iaas/api/#/en/database/20160918/datatypes/MaintenanceWindow
   */
  export interface Schema$MaintenanceWindow {
    /**
     * Optional. Determines the amount of time the system will wait before the start of each database server patching operation. Custom action timeout is in minutes and valid value is between 15 to 120 (inclusive).
     */
    customActionTimeoutMins?: number | null;
    /**
     * Optional. Days during the week when maintenance should be performed.
     */
    daysOfWeek?: string[] | null;
    /**
     * Optional. The window of hours during the day when maintenance should be performed. The window is a 4 hour slot. Valid values are: 0 - represents time slot 0:00 - 3:59 UTC 4 - represents time slot 4:00 - 7:59 UTC 8 - represents time slot 8:00 - 11:59 UTC 12 - represents time slot 12:00 - 15:59 UTC 16 - represents time slot 16:00 - 19:59 UTC 20 - represents time slot 20:00 - 23:59 UTC
     */
    hoursOfDay?: number[] | null;
    /**
     * Optional. If true, enables the configuration of a custom action timeout (waiting period) between database server patching operations.
     */
    isCustomActionTimeoutEnabled?: boolean | null;
    /**
     * Optional. Lead time window allows user to set a lead time to prepare for a down time. The lead time is in weeks and valid value is between 1 to 4.
     */
    leadTimeWeek?: number | null;
    /**
     * Optional. Months during the year when maintenance should be performed.
     */
    months?: string[] | null;
    /**
     * Optional. Cloud CloudExadataInfrastructure node patching method, either "ROLLING" or "NONROLLING". Default value is ROLLING.
     */
    patchingMode?: string | null;
    /**
     * Optional. The maintenance window scheduling preference.
     */
    preference?: string | null;
    /**
     * Optional. Weeks during the month when maintenance should be performed. Weeks start on the 1st, 8th, 15th, and 22nd days of the month, and have a duration of 7 days. Weeks start and end based on calendar dates, not days of the week.
     */
    weeksOfMonth?: number[] | null;
  }
  /**
   * MinorVersion represents a minor version of a GI. https://docs.oracle.com/en-us/iaas/api/#/en/database/20160918/GiMinorVersionSummary/
   */
  export interface Schema$MinorVersion {
    /**
     * Optional. The ID of the Grid Image.
     */
    gridImageId?: string | null;
    /**
     * Identifier. The name of the MinorVersion resource with the format: projects/{project\}/locations/{region\}/giVersions/{gi_version\}/minorVersions/{minor_version\}
     */
    name?: string | null;
    /**
     * Optional. The valid Oracle grid infrastructure software version.
     */
    version?: string | null;
  }
  /**
   * Represents OdbNetwork resource.
   */
  export interface Schema$OdbNetwork {
    /**
     * Output only. The date and time that the OdbNetwork was created.
     */
    createTime?: string | null;
    /**
     * Output only. The ID of the subscription entitlement associated with the OdbNetwork.
     */
    entitlementId?: string | null;
    /**
     * Optional. The GCP Oracle zone where OdbNetwork is hosted. Example: us-east4-b-r2. If not specified, the system will pick a zone based on availability.
     */
    gcpOracleZone?: string | null;
    /**
     * Optional. Labels or tags associated with the resource.
     */
    labels?: {[key: string]: string} | null;
    /**
     * Identifier. The name of the OdbNetwork resource in the following format: projects/{project\}/locations/{region\}/odbNetworks/{odb_network\}
     */
    name?: string | null;
    /**
     * Required. The name of the VPC network in the following format: projects/{project\}/global/networks/{network\}
     */
    network?: string | null;
    /**
     * Output only. State of the ODB Network.
     */
    state?: string | null;
  }
  /**
   * Represents OdbSubnet resource.
   */
  export interface Schema$OdbSubnet {
    /**
     * Required. The CIDR range of the subnet.
     */
    cidrRange?: string | null;
    /**
     * Output only. The date and time that the OdbNetwork was created.
     */
    createTime?: string | null;
    /**
     * Optional. Labels or tags associated with the resource.
     */
    labels?: {[key: string]: string} | null;
    /**
     * Identifier. The name of the OdbSubnet resource in the following format: projects/{project\}/locations/{location\}/odbNetworks/{odb_network\}/odbSubnets/{odb_subnet\}
     */
    name?: string | null;
    /**
     * Required. Purpose of the subnet.
     */
    purpose?: string | null;
    /**
     * Output only. State of the ODB Subnet.
     */
    state?: string | null;
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
     * Output only. An estimated percentage of the operation that has been completed at a given moment of time, between 0 and 100.
     */
    percentComplete?: number | null;
    /**
     * Output only. Identifies whether the user has requested cancellation of the operation. Operations that have been cancelled successfully have Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.
     */
    requestedCancellation?: boolean | null;
    /**
     * Output only. The status of the operation.
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
   * The PluggableDatabase resource. https://docs.oracle.com/en-us/iaas/api/#/en/database/20160918/PluggableDatabase/
   */
  export interface Schema$PluggableDatabase {
    /**
     * Output only. The date and time that the PluggableDatabase was created.
     */
    createTime?: string | null;
    /**
     * Identifier. The name of the PluggableDatabase resource in the following format: projects/{project\}/locations/{region\}/pluggableDatabases/{pluggable_database\}
     */
    name?: string | null;
    /**
     * Output only. HTTPS link to OCI resources exposed to Customer via UI Interface.
     */
    ociUrl?: string | null;
    /**
     * Optional. The properties of the PluggableDatabase.
     */
    properties?: Schema$PluggableDatabaseProperties;
  }
  /**
   * The connection strings used to connect to the Oracle Database.
   */
  export interface Schema$PluggableDatabaseConnectionStrings {
    /**
     * Optional. All connection strings to use to connect to the pluggable database.
     */
    allConnectionStrings?: {[key: string]: string} | null;
    /**
     * Optional. The default connection string to use to connect to the pluggable database.
     */
    pdbDefault?: string | null;
    /**
     * Optional. The default connection string to use to connect to the pluggable database using IP.
     */
    pdbIpDefault?: string | null;
  }
  /**
   * The Pluggable Database Node Level Details.
   */
  export interface Schema$PluggableDatabaseNodeLevelDetails {
    /**
     * Required. The Node name of the Database home.
     */
    nodeName?: string | null;
    /**
     * Required. The mode that the pluggable database is in to open it.
     */
    openMode?: string | null;
    /**
     * Required. The OCID of the Pluggable Database.
     */
    pluggableDatabaseId?: string | null;
  }
  /**
   * The properties of a PluggableDatabase.
   */
  export interface Schema$PluggableDatabaseProperties {
    /**
     * Required. The OCID of the compartment.
     */
    compartmentId?: string | null;
    /**
     * Optional. The Connection strings used to connect to the Oracle Database.
     */
    connectionStrings?: Schema$PluggableDatabaseConnectionStrings;
    /**
     * Required. The OCID of the CDB.
     */
    containerDatabaseOcid?: string | null;
    /**
     * Output only. The configuration of the Database Management service.
     */
    databaseManagementConfig?: Schema$DatabaseManagementConfig;
    /**
     * Optional. Defined tags for this resource. Each key is predefined and scoped to a namespace.
     */
    definedTags?: {[key: string]: Schema$DefinedTagValue} | null;
    /**
     * Optional. Free-form tags for this resource. Each tag is a simple key-value pair with no predefined name, type, or namespace.
     */
    freeformTags?: {[key: string]: string} | null;
    /**
     * Optional. The restricted mode of the pluggable database. If a pluggable database is opened in restricted mode, the user needs both create a session and have restricted session privileges to connect to it.
     */
    isRestricted?: boolean | null;
    /**
     * Output only. Additional information about the current lifecycle state.
     */
    lifecycleDetails?: string | null;
    /**
     * Output only. The current state of the pluggable database.
     */
    lifecycleState?: string | null;
    /**
     * Output only. The OCID of the pluggable database.
     */
    ocid?: string | null;
    /**
     * Output only. The status of Operations Insights for this Database.
     */
    operationsInsightsState?: string | null;
    /**
     * Required. The database name.
     */
    pdbName?: string | null;
    /**
     * Optional. Pluggable Database Node Level Details
     */
    pdbNodeLevelDetails?: Schema$PluggableDatabaseNodeLevelDetails[];
  }
  /**
   * The request for `ExadbVmCluster.RemoveVirtualMachine`.
   */
  export interface Schema$RemoveVirtualMachineExadbVmClusterRequest {
    /**
     * Required. The list of host names of db nodes to be removed from the ExadbVmCluster.
     */
    hostnames?: string[] | null;
    /**
     * Optional. An optional ID to identify the request. This value is used to identify duplicate requests. If you make a request with the same request ID and the original request is still in progress or completed, the server ignores the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
     */
    requestId?: string | null;
  }
  /**
   * The request for `AutonomousDatabase.Restart`.
   */
  export interface Schema$RestartAutonomousDatabaseRequest {}
  /**
   * The request for `AutonomousDatabase.Restore`.
   */
  export interface Schema$RestoreAutonomousDatabaseRequest {
    /**
     * Required. The time and date to restore the database to.
     */
    restoreTime?: string | null;
  }
  /**
   * Details of scheduled operation. https://docs.oracle.com/en-us/iaas/api/#/en/database/20160918/datatypes/ScheduledOperationDetails
   */
  export interface Schema$ScheduledOperationDetails {
    /**
     * Output only. Day of week.
     */
    dayOfWeek?: string | null;
    /**
     * Output only. Auto start time.
     */
    startTime?: Schema$TimeOfDay;
    /**
     * Output only. Auto stop time.
     */
    stopTime?: Schema$TimeOfDay;
  }
  /**
   * The source configuration for the standby Autonomous Database.
   */
  export interface Schema$SourceConfig {
    /**
     * Optional. This field specifies if the replication of automatic backups is enabled when creating a Data Guard.
     */
    automaticBackupsReplicationEnabled?: boolean | null;
    /**
     * Optional. The name of the primary Autonomous Database that is used to create a Peer Autonomous Database from a source.
     */
    autonomousDatabase?: string | null;
  }
  /**
   * The request for `AutonomousDatabase.Start`.
   */
  export interface Schema$StartAutonomousDatabaseRequest {}
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
   * The request for `AutonomousDatabase.Stop`.
   */
  export interface Schema$StopAutonomousDatabaseRequest {}
  /**
   * The initial storage size, in gigabytes, that is applicable for virtual machine DBSystem.
   */
  export interface Schema$StorageSizeDetails {
    /**
     * Output only. The data storage size, in gigabytes, that is applicable for virtual machine DBSystem.
     */
    dataStorageSizeInGbs?: number | null;
    /**
     * Output only. The RECO/REDO storage size, in gigabytes, that is applicable for virtual machine DBSystem.
     */
    recoStorageSizeInGbs?: number | null;
  }
  /**
   * The request for `OracleDatabase.SwitchoverAutonomousDatabase`.
   */
  export interface Schema$SwitchoverAutonomousDatabaseRequest {
    /**
     * Required. The peer database name to switch over to.
     */
    peerAutonomousDatabase?: string | null;
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
   * Represents a time zone from the [IANA Time Zone Database](https://www.iana.org/time-zones).
   */
  export interface Schema$TimeZone {
    /**
     * IANA Time Zone Database time zone. For example "America/New_York".
     */
    id?: string | null;
    /**
     * Optional. IANA Time Zone Database version number. For example "2019a".
     */
    version?: string | null;
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
    autonomousDatabaseBackups: Resource$Projects$Locations$Autonomousdatabasebackups;
    autonomousDatabaseCharacterSets: Resource$Projects$Locations$Autonomousdatabasecharactersets;
    autonomousDatabases: Resource$Projects$Locations$Autonomousdatabases;
    autonomousDbVersions: Resource$Projects$Locations$Autonomousdbversions;
    cloudExadataInfrastructures: Resource$Projects$Locations$Cloudexadatainfrastructures;
    cloudVmClusters: Resource$Projects$Locations$Cloudvmclusters;
    databaseCharacterSets: Resource$Projects$Locations$Databasecharactersets;
    databases: Resource$Projects$Locations$Databases;
    dbSystemInitialStorageSizes: Resource$Projects$Locations$Dbsysteminitialstoragesizes;
    dbSystems: Resource$Projects$Locations$Dbsystems;
    dbSystemShapes: Resource$Projects$Locations$Dbsystemshapes;
    dbVersions: Resource$Projects$Locations$Dbversions;
    entitlements: Resource$Projects$Locations$Entitlements;
    exadbVmClusters: Resource$Projects$Locations$Exadbvmclusters;
    exascaleDbStorageVaults: Resource$Projects$Locations$Exascaledbstoragevaults;
    giVersions: Resource$Projects$Locations$Giversions;
    odbNetworks: Resource$Projects$Locations$Odbnetworks;
    operations: Resource$Projects$Locations$Operations;
    pluggableDatabases: Resource$Projects$Locations$Pluggabledatabases;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.autonomousDatabaseBackups =
        new Resource$Projects$Locations$Autonomousdatabasebackups(this.context);
      this.autonomousDatabaseCharacterSets =
        new Resource$Projects$Locations$Autonomousdatabasecharactersets(
          this.context
        );
      this.autonomousDatabases =
        new Resource$Projects$Locations$Autonomousdatabases(this.context);
      this.autonomousDbVersions =
        new Resource$Projects$Locations$Autonomousdbversions(this.context);
      this.cloudExadataInfrastructures =
        new Resource$Projects$Locations$Cloudexadatainfrastructures(
          this.context
        );
      this.cloudVmClusters = new Resource$Projects$Locations$Cloudvmclusters(
        this.context
      );
      this.databaseCharacterSets =
        new Resource$Projects$Locations$Databasecharactersets(this.context);
      this.databases = new Resource$Projects$Locations$Databases(this.context);
      this.dbSystemInitialStorageSizes =
        new Resource$Projects$Locations$Dbsysteminitialstoragesizes(
          this.context
        );
      this.dbSystems = new Resource$Projects$Locations$Dbsystems(this.context);
      this.dbSystemShapes = new Resource$Projects$Locations$Dbsystemshapes(
        this.context
      );
      this.dbVersions = new Resource$Projects$Locations$Dbversions(
        this.context
      );
      this.entitlements = new Resource$Projects$Locations$Entitlements(
        this.context
      );
      this.exadbVmClusters = new Resource$Projects$Locations$Exadbvmclusters(
        this.context
      );
      this.exascaleDbStorageVaults =
        new Resource$Projects$Locations$Exascaledbstoragevaults(this.context);
      this.giVersions = new Resource$Projects$Locations$Giversions(
        this.context
      );
      this.odbNetworks = new Resource$Projects$Locations$Odbnetworks(
        this.context
      );
      this.operations = new Resource$Projects$Locations$Operations(
        this.context
      );
      this.pluggableDatabases =
        new Resource$Projects$Locations$Pluggabledatabases(this.context);
    }

    /**
     * Gets information about a location.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/oracledatabase.googleapis.com
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
     * const oracledatabase = google.oracledatabase('v1');
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
     *   const res = await oracledatabase.projects.locations.get({
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
        options.rootUrl || 'https://oracledatabase.googleapis.com/';
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
     * //   https://console.developers.google.com/apis/api/oracledatabase.googleapis.com
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
     * const oracledatabase = google.oracledatabase('v1');
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
     *   const res = await oracledatabase.projects.locations.list({
     *     // Optional. Unless explicitly documented otherwise, don't use this unsupported field which is primarily intended for internal usage.
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
        options.rootUrl || 'https://oracledatabase.googleapis.com/';
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
     * Optional. Unless explicitly documented otherwise, don't use this unsupported field which is primarily intended for internal usage.
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

  export class Resource$Projects$Locations$Autonomousdatabasebackups {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Lists the long-term and automatic backups of an Autonomous Database.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/oracledatabase.googleapis.com
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
     * const oracledatabase = google.oracledatabase('v1');
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
     *     await oracledatabase.projects.locations.autonomousDatabaseBackups.list({
     *       // Optional. An expression for filtering the results of the request. Only the **autonomous_database_id** field is supported in the following format: `autonomous_database_id="{autonomous_database_id\}"`. The accepted values must be a valid Autonomous Database ID, limited to the naming restrictions of the ID: ^[a-z]([a-z0-9-]{0,61\}[a-z0-9])?$). The ID must start with a letter, end with a letter or a number, and be a maximum of 63 characters.
     *       filter: 'placeholder-value',
     *       // Optional. The maximum number of items to return. If unspecified, at most 50 Autonomous DB Backups will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000.
     *       pageSize: 'placeholder-value',
     *       // Optional. A token identifying a page of results the server should return.
     *       pageToken: 'placeholder-value',
     *       // Required. The parent value for ListAutonomousDatabaseBackups in the following format: projects/{project\}/locations/{location\}.
     *       parent: 'projects/my-project/locations/my-location',
     *     });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "autonomousDatabaseBackups": [],
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
      params: Params$Resource$Projects$Locations$Autonomousdatabasebackups$List,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    list(
      params?: Params$Resource$Projects$Locations$Autonomousdatabasebackups$List,
      options?: MethodOptions
    ): Promise<
      GaxiosResponseWithHTTP2<Schema$ListAutonomousDatabaseBackupsResponse>
    >;
    list(
      params: Params$Resource$Projects$Locations$Autonomousdatabasebackups$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Autonomousdatabasebackups$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ListAutonomousDatabaseBackupsResponse>,
      callback: BodyResponseCallback<Schema$ListAutonomousDatabaseBackupsResponse>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Autonomousdatabasebackups$List,
      callback: BodyResponseCallback<Schema$ListAutonomousDatabaseBackupsResponse>
    ): void;
    list(
      callback: BodyResponseCallback<Schema$ListAutonomousDatabaseBackupsResponse>
    ): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Autonomousdatabasebackups$List
        | BodyResponseCallback<Schema$ListAutonomousDatabaseBackupsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ListAutonomousDatabaseBackupsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ListAutonomousDatabaseBackupsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<
          GaxiosResponseWithHTTP2<Schema$ListAutonomousDatabaseBackupsResponse>
        >
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Autonomousdatabasebackups$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Autonomousdatabasebackups$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://oracledatabase.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}/autonomousDatabaseBackups').replace(
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
        createAPIRequest<Schema$ListAutonomousDatabaseBackupsResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ListAutonomousDatabaseBackupsResponse>(
          parameters
        );
      }
    }
  }

  export interface Params$Resource$Projects$Locations$Autonomousdatabasebackups$List
    extends StandardParameters {
    /**
     * Optional. An expression for filtering the results of the request. Only the **autonomous_database_id** field is supported in the following format: `autonomous_database_id="{autonomous_database_id\}"`. The accepted values must be a valid Autonomous Database ID, limited to the naming restrictions of the ID: ^[a-z]([a-z0-9-]{0,61\}[a-z0-9])?$). The ID must start with a letter, end with a letter or a number, and be a maximum of 63 characters.
     */
    filter?: string;
    /**
     * Optional. The maximum number of items to return. If unspecified, at most 50 Autonomous DB Backups will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000.
     */
    pageSize?: number;
    /**
     * Optional. A token identifying a page of results the server should return.
     */
    pageToken?: string;
    /**
     * Required. The parent value for ListAutonomousDatabaseBackups in the following format: projects/{project\}/locations/{location\}.
     */
    parent?: string;
  }

  export class Resource$Projects$Locations$Autonomousdatabasecharactersets {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Lists Autonomous Database Character Sets in a given project and location.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/oracledatabase.googleapis.com
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
     * const oracledatabase = google.oracledatabase('v1');
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
     *     await oracledatabase.projects.locations.autonomousDatabaseCharacterSets.list(
     *       {
     *         // Optional. An expression for filtering the results of the request. Only the **character_set_type** field is supported in the following format: `character_set_type="{characterSetType\}"`. Accepted values include `DATABASE` and `NATIONAL`.
     *         filter: 'placeholder-value',
     *         // Optional. The maximum number of items to return. If unspecified, at most 50 Autonomous DB Character Sets will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000.
     *         pageSize: 'placeholder-value',
     *         // Optional. A token identifying a page of results the server should return.
     *         pageToken: 'placeholder-value',
     *         // Required. The parent value for the Autonomous Database in the following format: projects/{project\}/locations/{location\}.
     *         parent: 'projects/my-project/locations/my-location',
     *       },
     *     );
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "autonomousDatabaseCharacterSets": [],
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
      params: Params$Resource$Projects$Locations$Autonomousdatabasecharactersets$List,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    list(
      params?: Params$Resource$Projects$Locations$Autonomousdatabasecharactersets$List,
      options?: MethodOptions
    ): Promise<
      GaxiosResponseWithHTTP2<Schema$ListAutonomousDatabaseCharacterSetsResponse>
    >;
    list(
      params: Params$Resource$Projects$Locations$Autonomousdatabasecharactersets$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Autonomousdatabasecharactersets$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ListAutonomousDatabaseCharacterSetsResponse>,
      callback: BodyResponseCallback<Schema$ListAutonomousDatabaseCharacterSetsResponse>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Autonomousdatabasecharactersets$List,
      callback: BodyResponseCallback<Schema$ListAutonomousDatabaseCharacterSetsResponse>
    ): void;
    list(
      callback: BodyResponseCallback<Schema$ListAutonomousDatabaseCharacterSetsResponse>
    ): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Autonomousdatabasecharactersets$List
        | BodyResponseCallback<Schema$ListAutonomousDatabaseCharacterSetsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ListAutonomousDatabaseCharacterSetsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ListAutonomousDatabaseCharacterSetsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<
          GaxiosResponseWithHTTP2<Schema$ListAutonomousDatabaseCharacterSetsResponse>
        >
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Autonomousdatabasecharactersets$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Autonomousdatabasecharactersets$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://oracledatabase.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl + '/v1/{+parent}/autonomousDatabaseCharacterSets'
            ).replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$ListAutonomousDatabaseCharacterSetsResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ListAutonomousDatabaseCharacterSetsResponse>(
          parameters
        );
      }
    }
  }

  export interface Params$Resource$Projects$Locations$Autonomousdatabasecharactersets$List
    extends StandardParameters {
    /**
     * Optional. An expression for filtering the results of the request. Only the **character_set_type** field is supported in the following format: `character_set_type="{characterSetType\}"`. Accepted values include `DATABASE` and `NATIONAL`.
     */
    filter?: string;
    /**
     * Optional. The maximum number of items to return. If unspecified, at most 50 Autonomous DB Character Sets will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000.
     */
    pageSize?: number;
    /**
     * Optional. A token identifying a page of results the server should return.
     */
    pageToken?: string;
    /**
     * Required. The parent value for the Autonomous Database in the following format: projects/{project\}/locations/{location\}.
     */
    parent?: string;
  }

  export class Resource$Projects$Locations$Autonomousdatabases {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Creates a new Autonomous Database in a given project and location.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/oracledatabase.googleapis.com
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
     * const oracledatabase = google.oracledatabase('v1');
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
     *     await oracledatabase.projects.locations.autonomousDatabases.create({
     *       // Required. The ID of the Autonomous Database to create. This value is restricted to (^[a-z]([a-z0-9-]{0,61\}[a-z0-9])?$) and must be a maximum of 63 characters in length. The value must start with a letter and end with a letter or a number.
     *       autonomousDatabaseId: 'placeholder-value',
     *       // Required. The name of the parent in the following format: projects/{project\}/locations/{location\}.
     *       parent: 'projects/my-project/locations/my-location',
     *       // Optional. An optional ID to identify the request. This value is used to identify duplicate requests. If you make a request with the same request ID and the original request is still in progress or completed, the server ignores the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
     *       requestId: 'placeholder-value',
     *
     *       // Request body metadata
     *       requestBody: {
     *         // request body parameters
     *         // {
     *         //   "adminPassword": "my_adminPassword",
     *         //   "cidr": "my_cidr",
     *         //   "createTime": "my_createTime",
     *         //   "database": "my_database",
     *         //   "disasterRecoverySupportedLocations": [],
     *         //   "displayName": "my_displayName",
     *         //   "entitlementId": "my_entitlementId",
     *         //   "labels": {},
     *         //   "name": "my_name",
     *         //   "network": "my_network",
     *         //   "odbNetwork": "my_odbNetwork",
     *         //   "odbSubnet": "my_odbSubnet",
     *         //   "peerAutonomousDatabases": [],
     *         //   "properties": {},
     *         //   "sourceConfig": {}
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
    create(
      params: Params$Resource$Projects$Locations$Autonomousdatabases$Create,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    create(
      params?: Params$Resource$Projects$Locations$Autonomousdatabases$Create,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Operation>>;
    create(
      params: Params$Resource$Projects$Locations$Autonomousdatabases$Create,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    create(
      params: Params$Resource$Projects$Locations$Autonomousdatabases$Create,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    create(
      params: Params$Resource$Projects$Locations$Autonomousdatabases$Create,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    create(callback: BodyResponseCallback<Schema$Operation>): void;
    create(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Autonomousdatabases$Create
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
        {}) as Params$Resource$Projects$Locations$Autonomousdatabases$Create;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Autonomousdatabases$Create;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://oracledatabase.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}/autonomousDatabases').replace(
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
     * Deletes a single Autonomous Database.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/oracledatabase.googleapis.com
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
     * const oracledatabase = google.oracledatabase('v1');
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
     *     await oracledatabase.projects.locations.autonomousDatabases.delete({
     *       // Required. The name of the resource in the following format: projects/{project\}/locations/{location\}/autonomousDatabases/{autonomous_database\}.
     *       name: 'projects/my-project/locations/my-location/autonomousDatabases/my-autonomousDatabase',
     *       // Optional. An optional ID to identify the request. This value is used to identify duplicate requests. If you make a request with the same request ID and the original request is still in progress or completed, the server ignores the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
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
      params: Params$Resource$Projects$Locations$Autonomousdatabases$Delete,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    delete(
      params?: Params$Resource$Projects$Locations$Autonomousdatabases$Delete,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Operation>>;
    delete(
      params: Params$Resource$Projects$Locations$Autonomousdatabases$Delete,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    delete(
      params: Params$Resource$Projects$Locations$Autonomousdatabases$Delete,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    delete(
      params: Params$Resource$Projects$Locations$Autonomousdatabases$Delete,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    delete(callback: BodyResponseCallback<Schema$Operation>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Autonomousdatabases$Delete
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
        {}) as Params$Resource$Projects$Locations$Autonomousdatabases$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Autonomousdatabases$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://oracledatabase.googleapis.com/';
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
     * Initiates a failover to target autonomous database from the associated primary database.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/oracledatabase.googleapis.com
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
     * const oracledatabase = google.oracledatabase('v1');
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
     *     await oracledatabase.projects.locations.autonomousDatabases.failover({
     *       // Required. The name of the Autonomous Database in the following format: projects/{project\}/locations/{location\}/autonomousDatabases/{autonomous_database\}.
     *       name: 'projects/my-project/locations/my-location/autonomousDatabases/my-autonomousDatabase',
     *
     *       // Request body metadata
     *       requestBody: {
     *         // request body parameters
     *         // {
     *         //   "peerAutonomousDatabase": "my_peerAutonomousDatabase"
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
    failover(
      params: Params$Resource$Projects$Locations$Autonomousdatabases$Failover,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    failover(
      params?: Params$Resource$Projects$Locations$Autonomousdatabases$Failover,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Operation>>;
    failover(
      params: Params$Resource$Projects$Locations$Autonomousdatabases$Failover,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    failover(
      params: Params$Resource$Projects$Locations$Autonomousdatabases$Failover,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    failover(
      params: Params$Resource$Projects$Locations$Autonomousdatabases$Failover,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    failover(callback: BodyResponseCallback<Schema$Operation>): void;
    failover(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Autonomousdatabases$Failover
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
        {}) as Params$Resource$Projects$Locations$Autonomousdatabases$Failover;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Autonomousdatabases$Failover;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://oracledatabase.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}:failover').replace(
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

    /**
     * Generates a wallet for an Autonomous Database.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/oracledatabase.googleapis.com
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
     * const oracledatabase = google.oracledatabase('v1');
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
     *     await oracledatabase.projects.locations.autonomousDatabases.generateWallet({
     *       // Required. The name of the Autonomous Database in the following format: projects/{project\}/locations/{location\}/autonomousDatabases/{autonomous_database\}.
     *       name: 'projects/my-project/locations/my-location/autonomousDatabases/my-autonomousDatabase',
     *
     *       // Request body metadata
     *       requestBody: {
     *         // request body parameters
     *         // {
     *         //   "isRegional": false,
     *         //   "password": "my_password",
     *         //   "type": "my_type"
     *         // }
     *       },
     *     });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "archiveContent": "my_archiveContent"
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
    generateWallet(
      params: Params$Resource$Projects$Locations$Autonomousdatabases$Generatewallet,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    generateWallet(
      params?: Params$Resource$Projects$Locations$Autonomousdatabases$Generatewallet,
      options?: MethodOptions
    ): Promise<
      GaxiosResponseWithHTTP2<Schema$GenerateAutonomousDatabaseWalletResponse>
    >;
    generateWallet(
      params: Params$Resource$Projects$Locations$Autonomousdatabases$Generatewallet,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    generateWallet(
      params: Params$Resource$Projects$Locations$Autonomousdatabases$Generatewallet,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GenerateAutonomousDatabaseWalletResponse>,
      callback: BodyResponseCallback<Schema$GenerateAutonomousDatabaseWalletResponse>
    ): void;
    generateWallet(
      params: Params$Resource$Projects$Locations$Autonomousdatabases$Generatewallet,
      callback: BodyResponseCallback<Schema$GenerateAutonomousDatabaseWalletResponse>
    ): void;
    generateWallet(
      callback: BodyResponseCallback<Schema$GenerateAutonomousDatabaseWalletResponse>
    ): void;
    generateWallet(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Autonomousdatabases$Generatewallet
        | BodyResponseCallback<Schema$GenerateAutonomousDatabaseWalletResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GenerateAutonomousDatabaseWalletResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GenerateAutonomousDatabaseWalletResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<
          GaxiosResponseWithHTTP2<Schema$GenerateAutonomousDatabaseWalletResponse>
        >
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Autonomousdatabases$Generatewallet;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Autonomousdatabases$Generatewallet;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://oracledatabase.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}:generateWallet').replace(
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
        createAPIRequest<Schema$GenerateAutonomousDatabaseWalletResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GenerateAutonomousDatabaseWalletResponse>(
          parameters
        );
      }
    }

    /**
     * Gets the details of a single Autonomous Database.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/oracledatabase.googleapis.com
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
     * const oracledatabase = google.oracledatabase('v1');
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
     *   const res = await oracledatabase.projects.locations.autonomousDatabases.get({
     *     // Required. The name of the Autonomous Database in the following format: projects/{project\}/locations/{location\}/autonomousDatabases/{autonomous_database\}.
     *     name: 'projects/my-project/locations/my-location/autonomousDatabases/my-autonomousDatabase',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "adminPassword": "my_adminPassword",
     *   //   "cidr": "my_cidr",
     *   //   "createTime": "my_createTime",
     *   //   "database": "my_database",
     *   //   "disasterRecoverySupportedLocations": [],
     *   //   "displayName": "my_displayName",
     *   //   "entitlementId": "my_entitlementId",
     *   //   "labels": {},
     *   //   "name": "my_name",
     *   //   "network": "my_network",
     *   //   "odbNetwork": "my_odbNetwork",
     *   //   "odbSubnet": "my_odbSubnet",
     *   //   "peerAutonomousDatabases": [],
     *   //   "properties": {},
     *   //   "sourceConfig": {}
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
      params: Params$Resource$Projects$Locations$Autonomousdatabases$Get,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    get(
      params?: Params$Resource$Projects$Locations$Autonomousdatabases$Get,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$AutonomousDatabase>>;
    get(
      params: Params$Resource$Projects$Locations$Autonomousdatabases$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Autonomousdatabases$Get,
      options: MethodOptions | BodyResponseCallback<Schema$AutonomousDatabase>,
      callback: BodyResponseCallback<Schema$AutonomousDatabase>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Autonomousdatabases$Get,
      callback: BodyResponseCallback<Schema$AutonomousDatabase>
    ): void;
    get(callback: BodyResponseCallback<Schema$AutonomousDatabase>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Autonomousdatabases$Get
        | BodyResponseCallback<Schema$AutonomousDatabase>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$AutonomousDatabase>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$AutonomousDatabase>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$AutonomousDatabase>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Autonomousdatabases$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Autonomousdatabases$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://oracledatabase.googleapis.com/';
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
        createAPIRequest<Schema$AutonomousDatabase>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$AutonomousDatabase>(parameters);
      }
    }

    /**
     * Lists the Autonomous Databases in a given project and location.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/oracledatabase.googleapis.com
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
     * const oracledatabase = google.oracledatabase('v1');
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
     *   const res = await oracledatabase.projects.locations.autonomousDatabases.list({
     *     // Optional. An expression for filtering the results of the request.
     *     filter: 'placeholder-value',
     *     // Optional. An expression for ordering the results of the request.
     *     orderBy: 'placeholder-value',
     *     // Optional. The maximum number of items to return. If unspecified, at most 50 Autonomous Database will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000.
     *     pageSize: 'placeholder-value',
     *     // Optional. A token identifying a page of results the server should return.
     *     pageToken: 'placeholder-value',
     *     // Required. The parent value for the Autonomous Database in the following format: projects/{project\}/locations/{location\}.
     *     parent: 'projects/my-project/locations/my-location',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "autonomousDatabases": [],
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
      params: Params$Resource$Projects$Locations$Autonomousdatabases$List,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    list(
      params?: Params$Resource$Projects$Locations$Autonomousdatabases$List,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$ListAutonomousDatabasesResponse>>;
    list(
      params: Params$Resource$Projects$Locations$Autonomousdatabases$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Autonomousdatabases$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ListAutonomousDatabasesResponse>,
      callback: BodyResponseCallback<Schema$ListAutonomousDatabasesResponse>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Autonomousdatabases$List,
      callback: BodyResponseCallback<Schema$ListAutonomousDatabasesResponse>
    ): void;
    list(
      callback: BodyResponseCallback<Schema$ListAutonomousDatabasesResponse>
    ): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Autonomousdatabases$List
        | BodyResponseCallback<Schema$ListAutonomousDatabasesResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ListAutonomousDatabasesResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ListAutonomousDatabasesResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$ListAutonomousDatabasesResponse>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Autonomousdatabases$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Autonomousdatabases$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://oracledatabase.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}/autonomousDatabases').replace(
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
        createAPIRequest<Schema$ListAutonomousDatabasesResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ListAutonomousDatabasesResponse>(
          parameters
        );
      }
    }

    /**
     * Updates the parameters of a single Autonomous Database.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/oracledatabase.googleapis.com
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
     * const oracledatabase = google.oracledatabase('v1');
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
     *   const res = await oracledatabase.projects.locations.autonomousDatabases.patch(
     *     {
     *       // Identifier. The name of the Autonomous Database resource in the following format: projects/{project\}/locations/{region\}/autonomousDatabases/{autonomous_database\}
     *       name: 'projects/my-project/locations/my-location/autonomousDatabases/my-autonomousDatabase',
     *       // Optional. An optional ID to identify the request. This value is used to identify duplicate requests. If you make a request with the same request ID and the original request is still in progress or completed, the server ignores the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
     *       requestId: 'placeholder-value',
     *       // Optional. Field mask is used to specify the fields to be overwritten in the Exadata resource by the update. The fields specified in the update_mask are relative to the resource, not the full request. A field will be overwritten if it is in the mask. If the user does not provide a mask then all fields will be overwritten.
     *       updateMask: 'placeholder-value',
     *
     *       // Request body metadata
     *       requestBody: {
     *         // request body parameters
     *         // {
     *         //   "adminPassword": "my_adminPassword",
     *         //   "cidr": "my_cidr",
     *         //   "createTime": "my_createTime",
     *         //   "database": "my_database",
     *         //   "disasterRecoverySupportedLocations": [],
     *         //   "displayName": "my_displayName",
     *         //   "entitlementId": "my_entitlementId",
     *         //   "labels": {},
     *         //   "name": "my_name",
     *         //   "network": "my_network",
     *         //   "odbNetwork": "my_odbNetwork",
     *         //   "odbSubnet": "my_odbSubnet",
     *         //   "peerAutonomousDatabases": [],
     *         //   "properties": {},
     *         //   "sourceConfig": {}
     *         // }
     *       },
     *     },
     *   );
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
      params: Params$Resource$Projects$Locations$Autonomousdatabases$Patch,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    patch(
      params?: Params$Resource$Projects$Locations$Autonomousdatabases$Patch,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Operation>>;
    patch(
      params: Params$Resource$Projects$Locations$Autonomousdatabases$Patch,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    patch(
      params: Params$Resource$Projects$Locations$Autonomousdatabases$Patch,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    patch(
      params: Params$Resource$Projects$Locations$Autonomousdatabases$Patch,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    patch(callback: BodyResponseCallback<Schema$Operation>): void;
    patch(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Autonomousdatabases$Patch
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
        {}) as Params$Resource$Projects$Locations$Autonomousdatabases$Patch;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Autonomousdatabases$Patch;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://oracledatabase.googleapis.com/';
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

    /**
     * Restarts an Autonomous Database.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/oracledatabase.googleapis.com
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
     * const oracledatabase = google.oracledatabase('v1');
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
     *     await oracledatabase.projects.locations.autonomousDatabases.restart({
     *       // Required. The name of the Autonomous Database in the following format: projects/{project\}/locations/{location\}/autonomousDatabases/{autonomous_database\}.
     *       name: 'projects/my-project/locations/my-location/autonomousDatabases/my-autonomousDatabase',
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
    restart(
      params: Params$Resource$Projects$Locations$Autonomousdatabases$Restart,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    restart(
      params?: Params$Resource$Projects$Locations$Autonomousdatabases$Restart,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Operation>>;
    restart(
      params: Params$Resource$Projects$Locations$Autonomousdatabases$Restart,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    restart(
      params: Params$Resource$Projects$Locations$Autonomousdatabases$Restart,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    restart(
      params: Params$Resource$Projects$Locations$Autonomousdatabases$Restart,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    restart(callback: BodyResponseCallback<Schema$Operation>): void;
    restart(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Autonomousdatabases$Restart
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
        {}) as Params$Resource$Projects$Locations$Autonomousdatabases$Restart;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Autonomousdatabases$Restart;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://oracledatabase.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}:restart').replace(
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

    /**
     * Restores a single Autonomous Database.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/oracledatabase.googleapis.com
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
     * const oracledatabase = google.oracledatabase('v1');
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
     *     await oracledatabase.projects.locations.autonomousDatabases.restore({
     *       // Required. The name of the Autonomous Database in the following format: projects/{project\}/locations/{location\}/autonomousDatabases/{autonomous_database\}.
     *       name: 'projects/my-project/locations/my-location/autonomousDatabases/my-autonomousDatabase',
     *
     *       // Request body metadata
     *       requestBody: {
     *         // request body parameters
     *         // {
     *         //   "restoreTime": "my_restoreTime"
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
    restore(
      params: Params$Resource$Projects$Locations$Autonomousdatabases$Restore,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    restore(
      params?: Params$Resource$Projects$Locations$Autonomousdatabases$Restore,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Operation>>;
    restore(
      params: Params$Resource$Projects$Locations$Autonomousdatabases$Restore,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    restore(
      params: Params$Resource$Projects$Locations$Autonomousdatabases$Restore,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    restore(
      params: Params$Resource$Projects$Locations$Autonomousdatabases$Restore,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    restore(callback: BodyResponseCallback<Schema$Operation>): void;
    restore(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Autonomousdatabases$Restore
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
        {}) as Params$Resource$Projects$Locations$Autonomousdatabases$Restore;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Autonomousdatabases$Restore;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://oracledatabase.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}:restore').replace(
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

    /**
     * Starts an Autonomous Database.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/oracledatabase.googleapis.com
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
     * const oracledatabase = google.oracledatabase('v1');
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
     *   const res = await oracledatabase.projects.locations.autonomousDatabases.start(
     *     {
     *       // Required. The name of the Autonomous Database in the following format: projects/{project\}/locations/{location\}/autonomousDatabases/{autonomous_database\}.
     *       name: 'projects/my-project/locations/my-location/autonomousDatabases/my-autonomousDatabase',
     *
     *       // Request body metadata
     *       requestBody: {
     *         // request body parameters
     *         // {}
     *       },
     *     },
     *   );
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
    start(
      params: Params$Resource$Projects$Locations$Autonomousdatabases$Start,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    start(
      params?: Params$Resource$Projects$Locations$Autonomousdatabases$Start,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Operation>>;
    start(
      params: Params$Resource$Projects$Locations$Autonomousdatabases$Start,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    start(
      params: Params$Resource$Projects$Locations$Autonomousdatabases$Start,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    start(
      params: Params$Resource$Projects$Locations$Autonomousdatabases$Start,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    start(callback: BodyResponseCallback<Schema$Operation>): void;
    start(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Autonomousdatabases$Start
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
        {}) as Params$Resource$Projects$Locations$Autonomousdatabases$Start;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Autonomousdatabases$Start;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://oracledatabase.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}:start').replace(/([^:]\/)\/+/g, '$1'),
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

    /**
     * Stops an Autonomous Database.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/oracledatabase.googleapis.com
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
     * const oracledatabase = google.oracledatabase('v1');
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
     *   const res = await oracledatabase.projects.locations.autonomousDatabases.stop({
     *     // Required. The name of the Autonomous Database in the following format: projects/{project\}/locations/{location\}/autonomousDatabases/{autonomous_database\}.
     *     name: 'projects/my-project/locations/my-location/autonomousDatabases/my-autonomousDatabase',
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
    stop(
      params: Params$Resource$Projects$Locations$Autonomousdatabases$Stop,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    stop(
      params?: Params$Resource$Projects$Locations$Autonomousdatabases$Stop,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Operation>>;
    stop(
      params: Params$Resource$Projects$Locations$Autonomousdatabases$Stop,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    stop(
      params: Params$Resource$Projects$Locations$Autonomousdatabases$Stop,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    stop(
      params: Params$Resource$Projects$Locations$Autonomousdatabases$Stop,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    stop(callback: BodyResponseCallback<Schema$Operation>): void;
    stop(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Autonomousdatabases$Stop
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
        {}) as Params$Resource$Projects$Locations$Autonomousdatabases$Stop;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Autonomousdatabases$Stop;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://oracledatabase.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}:stop').replace(/([^:]\/)\/+/g, '$1'),
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

    /**
     * Initiates a switchover of specified autonomous database to the associated peer database.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/oracledatabase.googleapis.com
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
     * const oracledatabase = google.oracledatabase('v1');
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
     *     await oracledatabase.projects.locations.autonomousDatabases.switchover({
     *       // Required. The name of the Autonomous Database in the following format: projects/{project\}/locations/{location\}/autonomousDatabases/{autonomous_database\}.
     *       name: 'projects/my-project/locations/my-location/autonomousDatabases/my-autonomousDatabase',
     *
     *       // Request body metadata
     *       requestBody: {
     *         // request body parameters
     *         // {
     *         //   "peerAutonomousDatabase": "my_peerAutonomousDatabase"
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
    switchover(
      params: Params$Resource$Projects$Locations$Autonomousdatabases$Switchover,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    switchover(
      params?: Params$Resource$Projects$Locations$Autonomousdatabases$Switchover,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Operation>>;
    switchover(
      params: Params$Resource$Projects$Locations$Autonomousdatabases$Switchover,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    switchover(
      params: Params$Resource$Projects$Locations$Autonomousdatabases$Switchover,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    switchover(
      params: Params$Resource$Projects$Locations$Autonomousdatabases$Switchover,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    switchover(callback: BodyResponseCallback<Schema$Operation>): void;
    switchover(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Autonomousdatabases$Switchover
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
        {}) as Params$Resource$Projects$Locations$Autonomousdatabases$Switchover;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Autonomousdatabases$Switchover;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://oracledatabase.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}:switchover').replace(
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

  export interface Params$Resource$Projects$Locations$Autonomousdatabases$Create
    extends StandardParameters {
    /**
     * Required. The ID of the Autonomous Database to create. This value is restricted to (^[a-z]([a-z0-9-]{0,61\}[a-z0-9])?$) and must be a maximum of 63 characters in length. The value must start with a letter and end with a letter or a number.
     */
    autonomousDatabaseId?: string;
    /**
     * Required. The name of the parent in the following format: projects/{project\}/locations/{location\}.
     */
    parent?: string;
    /**
     * Optional. An optional ID to identify the request. This value is used to identify duplicate requests. If you make a request with the same request ID and the original request is still in progress or completed, the server ignores the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
     */
    requestId?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$AutonomousDatabase;
  }
  export interface Params$Resource$Projects$Locations$Autonomousdatabases$Delete
    extends StandardParameters {
    /**
     * Required. The name of the resource in the following format: projects/{project\}/locations/{location\}/autonomousDatabases/{autonomous_database\}.
     */
    name?: string;
    /**
     * Optional. An optional ID to identify the request. This value is used to identify duplicate requests. If you make a request with the same request ID and the original request is still in progress or completed, the server ignores the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
     */
    requestId?: string;
  }
  export interface Params$Resource$Projects$Locations$Autonomousdatabases$Failover
    extends StandardParameters {
    /**
     * Required. The name of the Autonomous Database in the following format: projects/{project\}/locations/{location\}/autonomousDatabases/{autonomous_database\}.
     */
    name?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$FailoverAutonomousDatabaseRequest;
  }
  export interface Params$Resource$Projects$Locations$Autonomousdatabases$Generatewallet
    extends StandardParameters {
    /**
     * Required. The name of the Autonomous Database in the following format: projects/{project\}/locations/{location\}/autonomousDatabases/{autonomous_database\}.
     */
    name?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GenerateAutonomousDatabaseWalletRequest;
  }
  export interface Params$Resource$Projects$Locations$Autonomousdatabases$Get
    extends StandardParameters {
    /**
     * Required. The name of the Autonomous Database in the following format: projects/{project\}/locations/{location\}/autonomousDatabases/{autonomous_database\}.
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Locations$Autonomousdatabases$List
    extends StandardParameters {
    /**
     * Optional. An expression for filtering the results of the request.
     */
    filter?: string;
    /**
     * Optional. An expression for ordering the results of the request.
     */
    orderBy?: string;
    /**
     * Optional. The maximum number of items to return. If unspecified, at most 50 Autonomous Database will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000.
     */
    pageSize?: number;
    /**
     * Optional. A token identifying a page of results the server should return.
     */
    pageToken?: string;
    /**
     * Required. The parent value for the Autonomous Database in the following format: projects/{project\}/locations/{location\}.
     */
    parent?: string;
  }
  export interface Params$Resource$Projects$Locations$Autonomousdatabases$Patch
    extends StandardParameters {
    /**
     * Identifier. The name of the Autonomous Database resource in the following format: projects/{project\}/locations/{region\}/autonomousDatabases/{autonomous_database\}
     */
    name?: string;
    /**
     * Optional. An optional ID to identify the request. This value is used to identify duplicate requests. If you make a request with the same request ID and the original request is still in progress or completed, the server ignores the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
     */
    requestId?: string;
    /**
     * Optional. Field mask is used to specify the fields to be overwritten in the Exadata resource by the update. The fields specified in the update_mask are relative to the resource, not the full request. A field will be overwritten if it is in the mask. If the user does not provide a mask then all fields will be overwritten.
     */
    updateMask?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$AutonomousDatabase;
  }
  export interface Params$Resource$Projects$Locations$Autonomousdatabases$Restart
    extends StandardParameters {
    /**
     * Required. The name of the Autonomous Database in the following format: projects/{project\}/locations/{location\}/autonomousDatabases/{autonomous_database\}.
     */
    name?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$RestartAutonomousDatabaseRequest;
  }
  export interface Params$Resource$Projects$Locations$Autonomousdatabases$Restore
    extends StandardParameters {
    /**
     * Required. The name of the Autonomous Database in the following format: projects/{project\}/locations/{location\}/autonomousDatabases/{autonomous_database\}.
     */
    name?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$RestoreAutonomousDatabaseRequest;
  }
  export interface Params$Resource$Projects$Locations$Autonomousdatabases$Start
    extends StandardParameters {
    /**
     * Required. The name of the Autonomous Database in the following format: projects/{project\}/locations/{location\}/autonomousDatabases/{autonomous_database\}.
     */
    name?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$StartAutonomousDatabaseRequest;
  }
  export interface Params$Resource$Projects$Locations$Autonomousdatabases$Stop
    extends StandardParameters {
    /**
     * Required. The name of the Autonomous Database in the following format: projects/{project\}/locations/{location\}/autonomousDatabases/{autonomous_database\}.
     */
    name?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$StopAutonomousDatabaseRequest;
  }
  export interface Params$Resource$Projects$Locations$Autonomousdatabases$Switchover
    extends StandardParameters {
    /**
     * Required. The name of the Autonomous Database in the following format: projects/{project\}/locations/{location\}/autonomousDatabases/{autonomous_database\}.
     */
    name?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$SwitchoverAutonomousDatabaseRequest;
  }

  export class Resource$Projects$Locations$Autonomousdbversions {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Lists all the available Autonomous Database versions for a project and location.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/oracledatabase.googleapis.com
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
     * const oracledatabase = google.oracledatabase('v1');
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
     *   const res = await oracledatabase.projects.locations.autonomousDbVersions.list(
     *     {
     *       // Optional. The maximum number of items to return. If unspecified, at most 50 Autonomous DB Versions will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000.
     *       pageSize: 'placeholder-value',
     *       // Optional. A token identifying a page of results the server should return.
     *       pageToken: 'placeholder-value',
     *       // Required. The parent value for the Autonomous Database in the following format: projects/{project\}/locations/{location\}.
     *       parent: 'projects/my-project/locations/my-location',
     *     },
     *   );
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "autonomousDbVersions": [],
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
      params: Params$Resource$Projects$Locations$Autonomousdbversions$List,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    list(
      params?: Params$Resource$Projects$Locations$Autonomousdbversions$List,
      options?: MethodOptions
    ): Promise<
      GaxiosResponseWithHTTP2<Schema$ListAutonomousDbVersionsResponse>
    >;
    list(
      params: Params$Resource$Projects$Locations$Autonomousdbversions$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Autonomousdbversions$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ListAutonomousDbVersionsResponse>,
      callback: BodyResponseCallback<Schema$ListAutonomousDbVersionsResponse>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Autonomousdbversions$List,
      callback: BodyResponseCallback<Schema$ListAutonomousDbVersionsResponse>
    ): void;
    list(
      callback: BodyResponseCallback<Schema$ListAutonomousDbVersionsResponse>
    ): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Autonomousdbversions$List
        | BodyResponseCallback<Schema$ListAutonomousDbVersionsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ListAutonomousDbVersionsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ListAutonomousDbVersionsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<
          GaxiosResponseWithHTTP2<Schema$ListAutonomousDbVersionsResponse>
        >
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Autonomousdbversions$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Autonomousdbversions$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://oracledatabase.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}/autonomousDbVersions').replace(
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
        createAPIRequest<Schema$ListAutonomousDbVersionsResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ListAutonomousDbVersionsResponse>(
          parameters
        );
      }
    }
  }

  export interface Params$Resource$Projects$Locations$Autonomousdbversions$List
    extends StandardParameters {
    /**
     * Optional. The maximum number of items to return. If unspecified, at most 50 Autonomous DB Versions will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000.
     */
    pageSize?: number;
    /**
     * Optional. A token identifying a page of results the server should return.
     */
    pageToken?: string;
    /**
     * Required. The parent value for the Autonomous Database in the following format: projects/{project\}/locations/{location\}.
     */
    parent?: string;
  }

  export class Resource$Projects$Locations$Cloudexadatainfrastructures {
    context: APIRequestContext;
    dbServers: Resource$Projects$Locations$Cloudexadatainfrastructures$Dbservers;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.dbServers =
        new Resource$Projects$Locations$Cloudexadatainfrastructures$Dbservers(
          this.context
        );
    }

    /**
     * Creates a new Exadata Infrastructure in a given project and location.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/oracledatabase.googleapis.com
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
     * const oracledatabase = google.oracledatabase('v1');
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
     *     await oracledatabase.projects.locations.cloudExadataInfrastructures.create({
     *       // Required. The ID of the Exadata Infrastructure to create. This value is restricted to (^[a-z]([a-z0-9-]{0,61\}[a-z0-9])?$) and must be a maximum of 63 characters in length. The value must start with a letter and end with a letter or a number.
     *       cloudExadataInfrastructureId: 'placeholder-value',
     *       // Required. The parent value for CloudExadataInfrastructure in the following format: projects/{project\}/locations/{location\}.
     *       parent: 'projects/my-project/locations/my-location',
     *       // Optional. An optional ID to identify the request. This value is used to identify duplicate requests. If you make a request with the same request ID and the original request is still in progress or completed, the server ignores the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
     *       requestId: 'placeholder-value',
     *
     *       // Request body metadata
     *       requestBody: {
     *         // request body parameters
     *         // {
     *         //   "createTime": "my_createTime",
     *         //   "displayName": "my_displayName",
     *         //   "entitlementId": "my_entitlementId",
     *         //   "gcpOracleZone": "my_gcpOracleZone",
     *         //   "labels": {},
     *         //   "name": "my_name",
     *         //   "properties": {}
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
    create(
      params: Params$Resource$Projects$Locations$Cloudexadatainfrastructures$Create,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    create(
      params?: Params$Resource$Projects$Locations$Cloudexadatainfrastructures$Create,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Operation>>;
    create(
      params: Params$Resource$Projects$Locations$Cloudexadatainfrastructures$Create,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    create(
      params: Params$Resource$Projects$Locations$Cloudexadatainfrastructures$Create,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    create(
      params: Params$Resource$Projects$Locations$Cloudexadatainfrastructures$Create,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    create(callback: BodyResponseCallback<Schema$Operation>): void;
    create(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Cloudexadatainfrastructures$Create
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
        {}) as Params$Resource$Projects$Locations$Cloudexadatainfrastructures$Create;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Cloudexadatainfrastructures$Create;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://oracledatabase.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl + '/v1/{+parent}/cloudExadataInfrastructures'
            ).replace(/([^:]\/)\/+/g, '$1'),
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
     * Deletes a single Exadata Infrastructure.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/oracledatabase.googleapis.com
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
     * const oracledatabase = google.oracledatabase('v1');
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
     *     await oracledatabase.projects.locations.cloudExadataInfrastructures.delete({
     *       // Optional. If set to true, all VM clusters for this Exadata Infrastructure will be deleted. An Exadata Infrastructure can only be deleted once all its VM clusters have been deleted.
     *       force: 'placeholder-value',
     *       // Required. The name of the Cloud Exadata Infrastructure in the following format: projects/{project\}/locations/{location\}/cloudExadataInfrastructures/{cloud_exadata_infrastructure\}.
     *       name: 'projects/my-project/locations/my-location/cloudExadataInfrastructures/my-cloudExadataInfrastructure',
     *       // Optional. An optional ID to identify the request. This value is used to identify duplicate requests. If you make a request with the same request ID and the original request is still in progress or completed, the server ignores the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
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
      params: Params$Resource$Projects$Locations$Cloudexadatainfrastructures$Delete,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    delete(
      params?: Params$Resource$Projects$Locations$Cloudexadatainfrastructures$Delete,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Operation>>;
    delete(
      params: Params$Resource$Projects$Locations$Cloudexadatainfrastructures$Delete,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    delete(
      params: Params$Resource$Projects$Locations$Cloudexadatainfrastructures$Delete,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    delete(
      params: Params$Resource$Projects$Locations$Cloudexadatainfrastructures$Delete,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    delete(callback: BodyResponseCallback<Schema$Operation>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Cloudexadatainfrastructures$Delete
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
        {}) as Params$Resource$Projects$Locations$Cloudexadatainfrastructures$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Cloudexadatainfrastructures$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://oracledatabase.googleapis.com/';
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
     * Gets details of a single Exadata Infrastructure.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/oracledatabase.googleapis.com
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
     * const oracledatabase = google.oracledatabase('v1');
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
     *     await oracledatabase.projects.locations.cloudExadataInfrastructures.get({
     *       // Required. The name of the Cloud Exadata Infrastructure in the following format: projects/{project\}/locations/{location\}/cloudExadataInfrastructures/{cloud_exadata_infrastructure\}.
     *       name: 'projects/my-project/locations/my-location/cloudExadataInfrastructures/my-cloudExadataInfrastructure',
     *     });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "createTime": "my_createTime",
     *   //   "displayName": "my_displayName",
     *   //   "entitlementId": "my_entitlementId",
     *   //   "gcpOracleZone": "my_gcpOracleZone",
     *   //   "labels": {},
     *   //   "name": "my_name",
     *   //   "properties": {}
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
      params: Params$Resource$Projects$Locations$Cloudexadatainfrastructures$Get,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    get(
      params?: Params$Resource$Projects$Locations$Cloudexadatainfrastructures$Get,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$CloudExadataInfrastructure>>;
    get(
      params: Params$Resource$Projects$Locations$Cloudexadatainfrastructures$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Cloudexadatainfrastructures$Get,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$CloudExadataInfrastructure>,
      callback: BodyResponseCallback<Schema$CloudExadataInfrastructure>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Cloudexadatainfrastructures$Get,
      callback: BodyResponseCallback<Schema$CloudExadataInfrastructure>
    ): void;
    get(
      callback: BodyResponseCallback<Schema$CloudExadataInfrastructure>
    ): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Cloudexadatainfrastructures$Get
        | BodyResponseCallback<Schema$CloudExadataInfrastructure>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$CloudExadataInfrastructure>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$CloudExadataInfrastructure>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$CloudExadataInfrastructure>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Cloudexadatainfrastructures$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Cloudexadatainfrastructures$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://oracledatabase.googleapis.com/';
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
        createAPIRequest<Schema$CloudExadataInfrastructure>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$CloudExadataInfrastructure>(parameters);
      }
    }

    /**
     * Lists Exadata Infrastructures in a given project and location.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/oracledatabase.googleapis.com
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
     * const oracledatabase = google.oracledatabase('v1');
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
     *     await oracledatabase.projects.locations.cloudExadataInfrastructures.list({
     *       // Optional. An expression for filtering the results of the request.
     *       filter: 'placeholder-value',
     *       // Optional. An expression for ordering the results of the request.
     *       orderBy: 'placeholder-value',
     *       // Optional. The maximum number of items to return. If unspecified, at most 50 Exadata infrastructures will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000.
     *       pageSize: 'placeholder-value',
     *       // Optional. A token identifying a page of results the server should return.
     *       pageToken: 'placeholder-value',
     *       // Required. The parent value for CloudExadataInfrastructure in the following format: projects/{project\}/locations/{location\}.
     *       parent: 'projects/my-project/locations/my-location',
     *     });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "cloudExadataInfrastructures": [],
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
      params: Params$Resource$Projects$Locations$Cloudexadatainfrastructures$List,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    list(
      params?: Params$Resource$Projects$Locations$Cloudexadatainfrastructures$List,
      options?: MethodOptions
    ): Promise<
      GaxiosResponseWithHTTP2<Schema$ListCloudExadataInfrastructuresResponse>
    >;
    list(
      params: Params$Resource$Projects$Locations$Cloudexadatainfrastructures$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Cloudexadatainfrastructures$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ListCloudExadataInfrastructuresResponse>,
      callback: BodyResponseCallback<Schema$ListCloudExadataInfrastructuresResponse>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Cloudexadatainfrastructures$List,
      callback: BodyResponseCallback<Schema$ListCloudExadataInfrastructuresResponse>
    ): void;
    list(
      callback: BodyResponseCallback<Schema$ListCloudExadataInfrastructuresResponse>
    ): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Cloudexadatainfrastructures$List
        | BodyResponseCallback<Schema$ListCloudExadataInfrastructuresResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ListCloudExadataInfrastructuresResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ListCloudExadataInfrastructuresResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<
          GaxiosResponseWithHTTP2<Schema$ListCloudExadataInfrastructuresResponse>
        >
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Cloudexadatainfrastructures$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Cloudexadatainfrastructures$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://oracledatabase.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl + '/v1/{+parent}/cloudExadataInfrastructures'
            ).replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$ListCloudExadataInfrastructuresResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ListCloudExadataInfrastructuresResponse>(
          parameters
        );
      }
    }
  }

  export interface Params$Resource$Projects$Locations$Cloudexadatainfrastructures$Create
    extends StandardParameters {
    /**
     * Required. The ID of the Exadata Infrastructure to create. This value is restricted to (^[a-z]([a-z0-9-]{0,61\}[a-z0-9])?$) and must be a maximum of 63 characters in length. The value must start with a letter and end with a letter or a number.
     */
    cloudExadataInfrastructureId?: string;
    /**
     * Required. The parent value for CloudExadataInfrastructure in the following format: projects/{project\}/locations/{location\}.
     */
    parent?: string;
    /**
     * Optional. An optional ID to identify the request. This value is used to identify duplicate requests. If you make a request with the same request ID and the original request is still in progress or completed, the server ignores the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
     */
    requestId?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$CloudExadataInfrastructure;
  }
  export interface Params$Resource$Projects$Locations$Cloudexadatainfrastructures$Delete
    extends StandardParameters {
    /**
     * Optional. If set to true, all VM clusters for this Exadata Infrastructure will be deleted. An Exadata Infrastructure can only be deleted once all its VM clusters have been deleted.
     */
    force?: boolean;
    /**
     * Required. The name of the Cloud Exadata Infrastructure in the following format: projects/{project\}/locations/{location\}/cloudExadataInfrastructures/{cloud_exadata_infrastructure\}.
     */
    name?: string;
    /**
     * Optional. An optional ID to identify the request. This value is used to identify duplicate requests. If you make a request with the same request ID and the original request is still in progress or completed, the server ignores the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
     */
    requestId?: string;
  }
  export interface Params$Resource$Projects$Locations$Cloudexadatainfrastructures$Get
    extends StandardParameters {
    /**
     * Required. The name of the Cloud Exadata Infrastructure in the following format: projects/{project\}/locations/{location\}/cloudExadataInfrastructures/{cloud_exadata_infrastructure\}.
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Locations$Cloudexadatainfrastructures$List
    extends StandardParameters {
    /**
     * Optional. An expression for filtering the results of the request.
     */
    filter?: string;
    /**
     * Optional. An expression for ordering the results of the request.
     */
    orderBy?: string;
    /**
     * Optional. The maximum number of items to return. If unspecified, at most 50 Exadata infrastructures will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000.
     */
    pageSize?: number;
    /**
     * Optional. A token identifying a page of results the server should return.
     */
    pageToken?: string;
    /**
     * Required. The parent value for CloudExadataInfrastructure in the following format: projects/{project\}/locations/{location\}.
     */
    parent?: string;
  }

  export class Resource$Projects$Locations$Cloudexadatainfrastructures$Dbservers {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Lists the database servers of an Exadata Infrastructure instance.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/oracledatabase.googleapis.com
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
     * const oracledatabase = google.oracledatabase('v1');
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
     *     await oracledatabase.projects.locations.cloudExadataInfrastructures.dbServers.list(
     *       {
     *         // Optional. The maximum number of items to return. If unspecified, a maximum of 50 db servers will be returned. The maximum value is 1000; values above 1000 will be reset to 1000.
     *         pageSize: 'placeholder-value',
     *         // Optional. A token identifying a page of results the server should return.
     *         pageToken: 'placeholder-value',
     *         // Required. The parent value for database server in the following format: projects/{project\}/locations/{location\}/cloudExadataInfrastructures/{cloudExadataInfrastructure\}.
     *         parent:
     *           'projects/my-project/locations/my-location/cloudExadataInfrastructures/my-cloudExadataInfrastructure',
     *       },
     *     );
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "dbServers": [],
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
      params: Params$Resource$Projects$Locations$Cloudexadatainfrastructures$Dbservers$List,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    list(
      params?: Params$Resource$Projects$Locations$Cloudexadatainfrastructures$Dbservers$List,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$ListDbServersResponse>>;
    list(
      params: Params$Resource$Projects$Locations$Cloudexadatainfrastructures$Dbservers$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Cloudexadatainfrastructures$Dbservers$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ListDbServersResponse>,
      callback: BodyResponseCallback<Schema$ListDbServersResponse>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Cloudexadatainfrastructures$Dbservers$List,
      callback: BodyResponseCallback<Schema$ListDbServersResponse>
    ): void;
    list(callback: BodyResponseCallback<Schema$ListDbServersResponse>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Cloudexadatainfrastructures$Dbservers$List
        | BodyResponseCallback<Schema$ListDbServersResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ListDbServersResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ListDbServersResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$ListDbServersResponse>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Cloudexadatainfrastructures$Dbservers$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Cloudexadatainfrastructures$Dbservers$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://oracledatabase.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}/dbServers').replace(
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
        createAPIRequest<Schema$ListDbServersResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ListDbServersResponse>(parameters);
      }
    }
  }

  export interface Params$Resource$Projects$Locations$Cloudexadatainfrastructures$Dbservers$List
    extends StandardParameters {
    /**
     * Optional. The maximum number of items to return. If unspecified, a maximum of 50 db servers will be returned. The maximum value is 1000; values above 1000 will be reset to 1000.
     */
    pageSize?: number;
    /**
     * Optional. A token identifying a page of results the server should return.
     */
    pageToken?: string;
    /**
     * Required. The parent value for database server in the following format: projects/{project\}/locations/{location\}/cloudExadataInfrastructures/{cloudExadataInfrastructure\}.
     */
    parent?: string;
  }

  export class Resource$Projects$Locations$Cloudvmclusters {
    context: APIRequestContext;
    dbNodes: Resource$Projects$Locations$Cloudvmclusters$Dbnodes;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.dbNodes = new Resource$Projects$Locations$Cloudvmclusters$Dbnodes(
        this.context
      );
    }

    /**
     * Creates a new VM Cluster in a given project and location.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/oracledatabase.googleapis.com
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
     * const oracledatabase = google.oracledatabase('v1');
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
     *   const res = await oracledatabase.projects.locations.cloudVmClusters.create({
     *     // Required. The ID of the VM Cluster to create. This value is restricted to (^[a-z]([a-z0-9-]{0,61\}[a-z0-9])?$) and must be a maximum of 63 characters in length. The value must start with a letter and end with a letter or a number.
     *     cloudVmClusterId: 'placeholder-value',
     *     // Required. The name of the parent in the following format: projects/{project\}/locations/{location\}.
     *     parent: 'projects/my-project/locations/my-location',
     *     // Optional. An optional ID to identify the request. This value is used to identify duplicate requests. If you make a request with the same request ID and the original request is still in progress or completed, the server ignores the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
     *     requestId: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "backupOdbSubnet": "my_backupOdbSubnet",
     *       //   "backupSubnetCidr": "my_backupSubnetCidr",
     *       //   "cidr": "my_cidr",
     *       //   "createTime": "my_createTime",
     *       //   "displayName": "my_displayName",
     *       //   "exadataInfrastructure": "my_exadataInfrastructure",
     *       //   "gcpOracleZone": "my_gcpOracleZone",
     *       //   "identityConnector": {},
     *       //   "labels": {},
     *       //   "name": "my_name",
     *       //   "network": "my_network",
     *       //   "odbNetwork": "my_odbNetwork",
     *       //   "odbSubnet": "my_odbSubnet",
     *       //   "properties": {}
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
      params: Params$Resource$Projects$Locations$Cloudvmclusters$Create,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    create(
      params?: Params$Resource$Projects$Locations$Cloudvmclusters$Create,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Operation>>;
    create(
      params: Params$Resource$Projects$Locations$Cloudvmclusters$Create,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    create(
      params: Params$Resource$Projects$Locations$Cloudvmclusters$Create,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    create(
      params: Params$Resource$Projects$Locations$Cloudvmclusters$Create,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    create(callback: BodyResponseCallback<Schema$Operation>): void;
    create(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Cloudvmclusters$Create
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
        {}) as Params$Resource$Projects$Locations$Cloudvmclusters$Create;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Cloudvmclusters$Create;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://oracledatabase.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}/cloudVmClusters').replace(
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
     * Deletes a single VM Cluster.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/oracledatabase.googleapis.com
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
     * const oracledatabase = google.oracledatabase('v1');
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
     *   const res = await oracledatabase.projects.locations.cloudVmClusters.delete({
     *     // Optional. If set to true, all child resources for the VM Cluster will be deleted. A VM Cluster can only be deleted once all its child resources have been deleted.
     *     force: 'placeholder-value',
     *     // Required. The name of the Cloud VM Cluster in the following format: projects/{project\}/locations/{location\}/cloudVmClusters/{cloud_vm_cluster\}.
     *     name: 'projects/my-project/locations/my-location/cloudVmClusters/my-cloudVmCluster',
     *     // Optional. An optional ID to identify the request. This value is used to identify duplicate requests. If you make a request with the same request ID and the original request is still in progress or completed, the server ignores the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
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
      params: Params$Resource$Projects$Locations$Cloudvmclusters$Delete,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    delete(
      params?: Params$Resource$Projects$Locations$Cloudvmclusters$Delete,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Operation>>;
    delete(
      params: Params$Resource$Projects$Locations$Cloudvmclusters$Delete,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    delete(
      params: Params$Resource$Projects$Locations$Cloudvmclusters$Delete,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    delete(
      params: Params$Resource$Projects$Locations$Cloudvmclusters$Delete,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    delete(callback: BodyResponseCallback<Schema$Operation>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Cloudvmclusters$Delete
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
        {}) as Params$Resource$Projects$Locations$Cloudvmclusters$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Cloudvmclusters$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://oracledatabase.googleapis.com/';
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
     * Gets details of a single VM Cluster.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/oracledatabase.googleapis.com
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
     * const oracledatabase = google.oracledatabase('v1');
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
     *   const res = await oracledatabase.projects.locations.cloudVmClusters.get({
     *     // Required. The name of the Cloud VM Cluster in the following format: projects/{project\}/locations/{location\}/cloudVmClusters/{cloud_vm_cluster\}.
     *     name: 'projects/my-project/locations/my-location/cloudVmClusters/my-cloudVmCluster',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "backupOdbSubnet": "my_backupOdbSubnet",
     *   //   "backupSubnetCidr": "my_backupSubnetCidr",
     *   //   "cidr": "my_cidr",
     *   //   "createTime": "my_createTime",
     *   //   "displayName": "my_displayName",
     *   //   "exadataInfrastructure": "my_exadataInfrastructure",
     *   //   "gcpOracleZone": "my_gcpOracleZone",
     *   //   "identityConnector": {},
     *   //   "labels": {},
     *   //   "name": "my_name",
     *   //   "network": "my_network",
     *   //   "odbNetwork": "my_odbNetwork",
     *   //   "odbSubnet": "my_odbSubnet",
     *   //   "properties": {}
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
      params: Params$Resource$Projects$Locations$Cloudvmclusters$Get,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    get(
      params?: Params$Resource$Projects$Locations$Cloudvmclusters$Get,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$CloudVmCluster>>;
    get(
      params: Params$Resource$Projects$Locations$Cloudvmclusters$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Cloudvmclusters$Get,
      options: MethodOptions | BodyResponseCallback<Schema$CloudVmCluster>,
      callback: BodyResponseCallback<Schema$CloudVmCluster>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Cloudvmclusters$Get,
      callback: BodyResponseCallback<Schema$CloudVmCluster>
    ): void;
    get(callback: BodyResponseCallback<Schema$CloudVmCluster>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Cloudvmclusters$Get
        | BodyResponseCallback<Schema$CloudVmCluster>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$CloudVmCluster>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$CloudVmCluster>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$CloudVmCluster>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Cloudvmclusters$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Cloudvmclusters$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://oracledatabase.googleapis.com/';
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
        createAPIRequest<Schema$CloudVmCluster>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$CloudVmCluster>(parameters);
      }
    }

    /**
     * Lists the VM Clusters in a given project and location.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/oracledatabase.googleapis.com
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
     * const oracledatabase = google.oracledatabase('v1');
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
     *   const res = await oracledatabase.projects.locations.cloudVmClusters.list({
     *     // Optional. An expression for filtering the results of the request.
     *     filter: 'placeholder-value',
     *     // Optional. The number of VM clusters to return. If unspecified, at most 50 VM clusters will be returned. The maximum value is 1,000.
     *     pageSize: 'placeholder-value',
     *     // Optional. A token identifying the page of results the server returns.
     *     pageToken: 'placeholder-value',
     *     // Required. The name of the parent in the following format: projects/{project\}/locations/{location\}.
     *     parent: 'projects/my-project/locations/my-location',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "cloudVmClusters": [],
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
      params: Params$Resource$Projects$Locations$Cloudvmclusters$List,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    list(
      params?: Params$Resource$Projects$Locations$Cloudvmclusters$List,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$ListCloudVmClustersResponse>>;
    list(
      params: Params$Resource$Projects$Locations$Cloudvmclusters$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Cloudvmclusters$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ListCloudVmClustersResponse>,
      callback: BodyResponseCallback<Schema$ListCloudVmClustersResponse>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Cloudvmclusters$List,
      callback: BodyResponseCallback<Schema$ListCloudVmClustersResponse>
    ): void;
    list(
      callback: BodyResponseCallback<Schema$ListCloudVmClustersResponse>
    ): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Cloudvmclusters$List
        | BodyResponseCallback<Schema$ListCloudVmClustersResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ListCloudVmClustersResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ListCloudVmClustersResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$ListCloudVmClustersResponse>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Cloudvmclusters$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Cloudvmclusters$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://oracledatabase.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}/cloudVmClusters').replace(
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
        createAPIRequest<Schema$ListCloudVmClustersResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ListCloudVmClustersResponse>(parameters);
      }
    }
  }

  export interface Params$Resource$Projects$Locations$Cloudvmclusters$Create
    extends StandardParameters {
    /**
     * Required. The ID of the VM Cluster to create. This value is restricted to (^[a-z]([a-z0-9-]{0,61\}[a-z0-9])?$) and must be a maximum of 63 characters in length. The value must start with a letter and end with a letter or a number.
     */
    cloudVmClusterId?: string;
    /**
     * Required. The name of the parent in the following format: projects/{project\}/locations/{location\}.
     */
    parent?: string;
    /**
     * Optional. An optional ID to identify the request. This value is used to identify duplicate requests. If you make a request with the same request ID and the original request is still in progress or completed, the server ignores the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
     */
    requestId?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$CloudVmCluster;
  }
  export interface Params$Resource$Projects$Locations$Cloudvmclusters$Delete
    extends StandardParameters {
    /**
     * Optional. If set to true, all child resources for the VM Cluster will be deleted. A VM Cluster can only be deleted once all its child resources have been deleted.
     */
    force?: boolean;
    /**
     * Required. The name of the Cloud VM Cluster in the following format: projects/{project\}/locations/{location\}/cloudVmClusters/{cloud_vm_cluster\}.
     */
    name?: string;
    /**
     * Optional. An optional ID to identify the request. This value is used to identify duplicate requests. If you make a request with the same request ID and the original request is still in progress or completed, the server ignores the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
     */
    requestId?: string;
  }
  export interface Params$Resource$Projects$Locations$Cloudvmclusters$Get
    extends StandardParameters {
    /**
     * Required. The name of the Cloud VM Cluster in the following format: projects/{project\}/locations/{location\}/cloudVmClusters/{cloud_vm_cluster\}.
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Locations$Cloudvmclusters$List
    extends StandardParameters {
    /**
     * Optional. An expression for filtering the results of the request.
     */
    filter?: string;
    /**
     * Optional. The number of VM clusters to return. If unspecified, at most 50 VM clusters will be returned. The maximum value is 1,000.
     */
    pageSize?: number;
    /**
     * Optional. A token identifying the page of results the server returns.
     */
    pageToken?: string;
    /**
     * Required. The name of the parent in the following format: projects/{project\}/locations/{location\}.
     */
    parent?: string;
  }

  export class Resource$Projects$Locations$Cloudvmclusters$Dbnodes {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Lists the database nodes of a VM Cluster.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/oracledatabase.googleapis.com
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
     * const oracledatabase = google.oracledatabase('v1');
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
     *     await oracledatabase.projects.locations.cloudVmClusters.dbNodes.list({
     *       // Optional. The maximum number of items to return. If unspecified, at most 50 db nodes will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000.
     *       pageSize: 'placeholder-value',
     *       // Optional. A token identifying a page of results the node should return.
     *       pageToken: 'placeholder-value',
     *       // Required. The parent value for database node in the following format: projects/{project\}/locations/{location\}/cloudVmClusters/{cloudVmCluster\}. .
     *       parent:
     *         'projects/my-project/locations/my-location/cloudVmClusters/my-cloudVmCluster',
     *     });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "dbNodes": [],
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
      params: Params$Resource$Projects$Locations$Cloudvmclusters$Dbnodes$List,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    list(
      params?: Params$Resource$Projects$Locations$Cloudvmclusters$Dbnodes$List,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$ListDbNodesResponse>>;
    list(
      params: Params$Resource$Projects$Locations$Cloudvmclusters$Dbnodes$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Cloudvmclusters$Dbnodes$List,
      options: MethodOptions | BodyResponseCallback<Schema$ListDbNodesResponse>,
      callback: BodyResponseCallback<Schema$ListDbNodesResponse>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Cloudvmclusters$Dbnodes$List,
      callback: BodyResponseCallback<Schema$ListDbNodesResponse>
    ): void;
    list(callback: BodyResponseCallback<Schema$ListDbNodesResponse>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Cloudvmclusters$Dbnodes$List
        | BodyResponseCallback<Schema$ListDbNodesResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ListDbNodesResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ListDbNodesResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$ListDbNodesResponse>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Cloudvmclusters$Dbnodes$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Cloudvmclusters$Dbnodes$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://oracledatabase.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}/dbNodes').replace(
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
        createAPIRequest<Schema$ListDbNodesResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ListDbNodesResponse>(parameters);
      }
    }
  }

  export interface Params$Resource$Projects$Locations$Cloudvmclusters$Dbnodes$List
    extends StandardParameters {
    /**
     * Optional. The maximum number of items to return. If unspecified, at most 50 db nodes will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000.
     */
    pageSize?: number;
    /**
     * Optional. A token identifying a page of results the node should return.
     */
    pageToken?: string;
    /**
     * Required. The parent value for database node in the following format: projects/{project\}/locations/{location\}/cloudVmClusters/{cloudVmCluster\}. .
     */
    parent?: string;
  }

  export class Resource$Projects$Locations$Databasecharactersets {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * List DatabaseCharacterSets for the given project and location.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/oracledatabase.googleapis.com
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
     * const oracledatabase = google.oracledatabase('v1');
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
     *     await oracledatabase.projects.locations.databaseCharacterSets.list({
     *       // Optional. An expression for filtering the results of the request. Only the **character_set_type** field is supported in the following format: `character_set_type="{characterSetType\}"`. Accepted values include `DATABASE` and `NATIONAL`.
     *       filter: 'placeholder-value',
     *       // Optional. The maximum number of DatabaseCharacterSets to return. The service may return fewer than this value. If unspecified, at most 50 DatabaseCharacterSets will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000.
     *       pageSize: 'placeholder-value',
     *       // Optional. A page token, received from a previous `ListDatabaseCharacterSets` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListDatabaseCharacterSets` must match the call that provided the page token.
     *       pageToken: 'placeholder-value',
     *       // Required. The parent value for DatabaseCharacterSets in the following format: projects/{project\}/locations/{location\}.
     *       parent: 'projects/my-project/locations/my-location',
     *     });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "databaseCharacterSets": [],
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
      params: Params$Resource$Projects$Locations$Databasecharactersets$List,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    list(
      params?: Params$Resource$Projects$Locations$Databasecharactersets$List,
      options?: MethodOptions
    ): Promise<
      GaxiosResponseWithHTTP2<Schema$ListDatabaseCharacterSetsResponse>
    >;
    list(
      params: Params$Resource$Projects$Locations$Databasecharactersets$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Databasecharactersets$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ListDatabaseCharacterSetsResponse>,
      callback: BodyResponseCallback<Schema$ListDatabaseCharacterSetsResponse>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Databasecharactersets$List,
      callback: BodyResponseCallback<Schema$ListDatabaseCharacterSetsResponse>
    ): void;
    list(
      callback: BodyResponseCallback<Schema$ListDatabaseCharacterSetsResponse>
    ): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Databasecharactersets$List
        | BodyResponseCallback<Schema$ListDatabaseCharacterSetsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ListDatabaseCharacterSetsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ListDatabaseCharacterSetsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<
          GaxiosResponseWithHTTP2<Schema$ListDatabaseCharacterSetsResponse>
        >
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Databasecharactersets$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Databasecharactersets$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://oracledatabase.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}/databaseCharacterSets').replace(
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
        createAPIRequest<Schema$ListDatabaseCharacterSetsResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ListDatabaseCharacterSetsResponse>(
          parameters
        );
      }
    }
  }

  export interface Params$Resource$Projects$Locations$Databasecharactersets$List
    extends StandardParameters {
    /**
     * Optional. An expression for filtering the results of the request. Only the **character_set_type** field is supported in the following format: `character_set_type="{characterSetType\}"`. Accepted values include `DATABASE` and `NATIONAL`.
     */
    filter?: string;
    /**
     * Optional. The maximum number of DatabaseCharacterSets to return. The service may return fewer than this value. If unspecified, at most 50 DatabaseCharacterSets will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000.
     */
    pageSize?: number;
    /**
     * Optional. A page token, received from a previous `ListDatabaseCharacterSets` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListDatabaseCharacterSets` must match the call that provided the page token.
     */
    pageToken?: string;
    /**
     * Required. The parent value for DatabaseCharacterSets in the following format: projects/{project\}/locations/{location\}.
     */
    parent?: string;
  }

  export class Resource$Projects$Locations$Databases {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Gets details of a single Database.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/oracledatabase.googleapis.com
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
     * const oracledatabase = google.oracledatabase('v1');
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
     *   const res = await oracledatabase.projects.locations.databases.get({
     *     // Required. The name of the Database resource in the following format: projects/{project\}/locations/{region\}/databases/{database\}
     *     name: 'projects/my-project/locations/my-location/databases/my-database',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "adminPassword": "my_adminPassword",
     *   //   "characterSet": "my_characterSet",
     *   //   "createTime": "my_createTime",
     *   //   "databaseId": "my_databaseId",
     *   //   "dbHomeName": "my_dbHomeName",
     *   //   "dbName": "my_dbName",
     *   //   "dbUniqueName": "my_dbUniqueName",
     *   //   "gcpOracleZone": "my_gcpOracleZone",
     *   //   "name": "my_name",
     *   //   "ncharacterSet": "my_ncharacterSet",
     *   //   "ociUrl": "my_ociUrl",
     *   //   "opsInsightsStatus": "my_opsInsightsStatus",
     *   //   "properties": {},
     *   //   "tdeWalletPassword": "my_tdeWalletPassword"
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
      params: Params$Resource$Projects$Locations$Databases$Get,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    get(
      params?: Params$Resource$Projects$Locations$Databases$Get,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Database>>;
    get(
      params: Params$Resource$Projects$Locations$Databases$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Databases$Get,
      options: MethodOptions | BodyResponseCallback<Schema$Database>,
      callback: BodyResponseCallback<Schema$Database>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Databases$Get,
      callback: BodyResponseCallback<Schema$Database>
    ): void;
    get(callback: BodyResponseCallback<Schema$Database>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Databases$Get
        | BodyResponseCallback<Schema$Database>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Database>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Database>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$Database>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Databases$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Databases$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://oracledatabase.googleapis.com/';
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
        createAPIRequest<Schema$Database>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Database>(parameters);
      }
    }

    /**
     * Lists all the Databases for the given project, location and DbSystem.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/oracledatabase.googleapis.com
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
     * const oracledatabase = google.oracledatabase('v1');
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
     *   const res = await oracledatabase.projects.locations.databases.list({
     *     // Optional. An expression for filtering the results of the request. list for container databases is supported only with a valid dbSystem (full resource name) filter in this format: `dbSystem="projects/{project\}/locations/{location\}/dbSystems/{dbSystemId\}"`
     *     filter: 'placeholder-value',
     *     // Optional. The maximum number of items to return. If unspecified, a maximum of 50 Databases will be returned. The maximum value is 1000; values above 1000 will be reset to 1000.
     *     pageSize: 'placeholder-value',
     *     // Optional. A token identifying the requested page of results to return. All fields except the filter should remain the same as in the request that provided this page token.
     *     pageToken: 'placeholder-value',
     *     // Required. The parent resource name in the following format: projects/{project\}/locations/{region\}
     *     parent: 'projects/my-project/locations/my-location',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "databases": [],
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
      params: Params$Resource$Projects$Locations$Databases$List,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    list(
      params?: Params$Resource$Projects$Locations$Databases$List,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$ListDatabasesResponse>>;
    list(
      params: Params$Resource$Projects$Locations$Databases$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Databases$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ListDatabasesResponse>,
      callback: BodyResponseCallback<Schema$ListDatabasesResponse>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Databases$List,
      callback: BodyResponseCallback<Schema$ListDatabasesResponse>
    ): void;
    list(callback: BodyResponseCallback<Schema$ListDatabasesResponse>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Databases$List
        | BodyResponseCallback<Schema$ListDatabasesResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ListDatabasesResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ListDatabasesResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$ListDatabasesResponse>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Databases$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Databases$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://oracledatabase.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}/databases').replace(
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
        createAPIRequest<Schema$ListDatabasesResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ListDatabasesResponse>(parameters);
      }
    }
  }

  export interface Params$Resource$Projects$Locations$Databases$Get
    extends StandardParameters {
    /**
     * Required. The name of the Database resource in the following format: projects/{project\}/locations/{region\}/databases/{database\}
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Locations$Databases$List
    extends StandardParameters {
    /**
     * Optional. An expression for filtering the results of the request. list for container databases is supported only with a valid dbSystem (full resource name) filter in this format: `dbSystem="projects/{project\}/locations/{location\}/dbSystems/{dbSystemId\}"`
     */
    filter?: string;
    /**
     * Optional. The maximum number of items to return. If unspecified, a maximum of 50 Databases will be returned. The maximum value is 1000; values above 1000 will be reset to 1000.
     */
    pageSize?: number;
    /**
     * Optional. A token identifying the requested page of results to return. All fields except the filter should remain the same as in the request that provided this page token.
     */
    pageToken?: string;
    /**
     * Required. The parent resource name in the following format: projects/{project\}/locations/{region\}
     */
    parent?: string;
  }

  export class Resource$Projects$Locations$Dbsysteminitialstoragesizes {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Lists all the DbSystemInitialStorageSizes for the given project and location.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/oracledatabase.googleapis.com
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
     * const oracledatabase = google.oracledatabase('v1');
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
     *     await oracledatabase.projects.locations.dbSystemInitialStorageSizes.list({
     *       // Optional. The maximum number of items to return. If unspecified, a maximum of 50 DbSystemInitialStorageSizes will be returned. The maximum value is 1000; values above 1000 will be reset to 1000.
     *       pageSize: 'placeholder-value',
     *       // Optional. A token identifying the requested page of results to return. All fields except the filter should remain the same as in the request that provided this page token.
     *       pageToken: 'placeholder-value',
     *       // Required. The parent value for the DbSystemInitialStorageSize resource with the format: projects/{project\}/locations/{location\}
     *       parent: 'projects/my-project/locations/my-location',
     *     });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "dbSystemInitialStorageSizes": [],
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
      params: Params$Resource$Projects$Locations$Dbsysteminitialstoragesizes$List,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    list(
      params?: Params$Resource$Projects$Locations$Dbsysteminitialstoragesizes$List,
      options?: MethodOptions
    ): Promise<
      GaxiosResponseWithHTTP2<Schema$ListDbSystemInitialStorageSizesResponse>
    >;
    list(
      params: Params$Resource$Projects$Locations$Dbsysteminitialstoragesizes$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Dbsysteminitialstoragesizes$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ListDbSystemInitialStorageSizesResponse>,
      callback: BodyResponseCallback<Schema$ListDbSystemInitialStorageSizesResponse>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Dbsysteminitialstoragesizes$List,
      callback: BodyResponseCallback<Schema$ListDbSystemInitialStorageSizesResponse>
    ): void;
    list(
      callback: BodyResponseCallback<Schema$ListDbSystemInitialStorageSizesResponse>
    ): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Dbsysteminitialstoragesizes$List
        | BodyResponseCallback<Schema$ListDbSystemInitialStorageSizesResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ListDbSystemInitialStorageSizesResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ListDbSystemInitialStorageSizesResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<
          GaxiosResponseWithHTTP2<Schema$ListDbSystemInitialStorageSizesResponse>
        >
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Dbsysteminitialstoragesizes$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Dbsysteminitialstoragesizes$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://oracledatabase.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl + '/v1/{+parent}/dbSystemInitialStorageSizes'
            ).replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$ListDbSystemInitialStorageSizesResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ListDbSystemInitialStorageSizesResponse>(
          parameters
        );
      }
    }
  }

  export interface Params$Resource$Projects$Locations$Dbsysteminitialstoragesizes$List
    extends StandardParameters {
    /**
     * Optional. The maximum number of items to return. If unspecified, a maximum of 50 DbSystemInitialStorageSizes will be returned. The maximum value is 1000; values above 1000 will be reset to 1000.
     */
    pageSize?: number;
    /**
     * Optional. A token identifying the requested page of results to return. All fields except the filter should remain the same as in the request that provided this page token.
     */
    pageToken?: string;
    /**
     * Required. The parent value for the DbSystemInitialStorageSize resource with the format: projects/{project\}/locations/{location\}
     */
    parent?: string;
  }

  export class Resource$Projects$Locations$Dbsystems {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Creates a new DbSystem in a given project and location.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/oracledatabase.googleapis.com
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
     * const oracledatabase = google.oracledatabase('v1');
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
     *   const res = await oracledatabase.projects.locations.dbSystems.create({
     *     // Required. The ID of the DbSystem to create. This value is restricted to (^[a-z]([a-z0-9-]{0,61\}[a-z0-9])?$) and must be a maximum of 63 characters in length. The value must start with a letter and end with a letter or a number.
     *     dbSystemId: 'placeholder-value',
     *     // Required. The value for parent of the DbSystem in the following format: projects/{project\}/locations/{location\}.
     *     parent: 'projects/my-project/locations/my-location',
     *     // Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
     *     requestId: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "createTime": "my_createTime",
     *       //   "displayName": "my_displayName",
     *       //   "entitlementId": "my_entitlementId",
     *       //   "gcpOracleZone": "my_gcpOracleZone",
     *       //   "labels": {},
     *       //   "name": "my_name",
     *       //   "ociUrl": "my_ociUrl",
     *       //   "odbNetwork": "my_odbNetwork",
     *       //   "odbSubnet": "my_odbSubnet",
     *       //   "properties": {}
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
      params: Params$Resource$Projects$Locations$Dbsystems$Create,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    create(
      params?: Params$Resource$Projects$Locations$Dbsystems$Create,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Operation>>;
    create(
      params: Params$Resource$Projects$Locations$Dbsystems$Create,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    create(
      params: Params$Resource$Projects$Locations$Dbsystems$Create,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    create(
      params: Params$Resource$Projects$Locations$Dbsystems$Create,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    create(callback: BodyResponseCallback<Schema$Operation>): void;
    create(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Dbsystems$Create
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
        {}) as Params$Resource$Projects$Locations$Dbsystems$Create;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Dbsystems$Create;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://oracledatabase.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}/dbSystems').replace(
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
     * Deletes a single DbSystem.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/oracledatabase.googleapis.com
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
     * const oracledatabase = google.oracledatabase('v1');
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
     *   const res = await oracledatabase.projects.locations.dbSystems.delete({
     *     // Required. The name of the DbSystem in the following format: projects/{project\}/locations/{location\}/dbSystems/{db_system\}.
     *     name: 'projects/my-project/locations/my-location/dbSystems/my-dbSystem',
     *     // Optional. An optional ID to identify the request. This value is used to identify duplicate requests. If you make a request with the same request ID and the original request is still in progress or completed, the server ignores the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
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
      params: Params$Resource$Projects$Locations$Dbsystems$Delete,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    delete(
      params?: Params$Resource$Projects$Locations$Dbsystems$Delete,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Operation>>;
    delete(
      params: Params$Resource$Projects$Locations$Dbsystems$Delete,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    delete(
      params: Params$Resource$Projects$Locations$Dbsystems$Delete,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    delete(
      params: Params$Resource$Projects$Locations$Dbsystems$Delete,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    delete(callback: BodyResponseCallback<Schema$Operation>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Dbsystems$Delete
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
        {}) as Params$Resource$Projects$Locations$Dbsystems$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Dbsystems$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://oracledatabase.googleapis.com/';
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
     * Gets details of a single DbSystem.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/oracledatabase.googleapis.com
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
     * const oracledatabase = google.oracledatabase('v1');
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
     *   const res = await oracledatabase.projects.locations.dbSystems.get({
     *     // Required. The name of the DbSystem in the following format: projects/{project\}/locations/{location\}/dbSystems/{db_system\}.
     *     name: 'projects/my-project/locations/my-location/dbSystems/my-dbSystem',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "createTime": "my_createTime",
     *   //   "displayName": "my_displayName",
     *   //   "entitlementId": "my_entitlementId",
     *   //   "gcpOracleZone": "my_gcpOracleZone",
     *   //   "labels": {},
     *   //   "name": "my_name",
     *   //   "ociUrl": "my_ociUrl",
     *   //   "odbNetwork": "my_odbNetwork",
     *   //   "odbSubnet": "my_odbSubnet",
     *   //   "properties": {}
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
      params: Params$Resource$Projects$Locations$Dbsystems$Get,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    get(
      params?: Params$Resource$Projects$Locations$Dbsystems$Get,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$DbSystem>>;
    get(
      params: Params$Resource$Projects$Locations$Dbsystems$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Dbsystems$Get,
      options: MethodOptions | BodyResponseCallback<Schema$DbSystem>,
      callback: BodyResponseCallback<Schema$DbSystem>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Dbsystems$Get,
      callback: BodyResponseCallback<Schema$DbSystem>
    ): void;
    get(callback: BodyResponseCallback<Schema$DbSystem>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Dbsystems$Get
        | BodyResponseCallback<Schema$DbSystem>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$DbSystem>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$DbSystem>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$DbSystem>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Dbsystems$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Dbsystems$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://oracledatabase.googleapis.com/';
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
        createAPIRequest<Schema$DbSystem>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$DbSystem>(parameters);
      }
    }

    /**
     * Lists all the DbSystems for the given project and location.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/oracledatabase.googleapis.com
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
     * const oracledatabase = google.oracledatabase('v1');
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
     *   const res = await oracledatabase.projects.locations.dbSystems.list({
     *     // Optional. An expression for filtering the results of the request.
     *     filter: 'placeholder-value',
     *     // Optional. An expression for ordering the results of the request.
     *     orderBy: 'placeholder-value',
     *     // Optional. The maximum number of items to return. If unspecified, at most 50 DbSystems will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000.
     *     pageSize: 'placeholder-value',
     *     // Optional. A token identifying a page of results the server should return.
     *     pageToken: 'placeholder-value',
     *     // Required. The parent value for DbSystems in the following format: projects/{project\}/locations/{location\}.
     *     parent: 'projects/my-project/locations/my-location',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "dbSystems": [],
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
      params: Params$Resource$Projects$Locations$Dbsystems$List,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    list(
      params?: Params$Resource$Projects$Locations$Dbsystems$List,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$ListDbSystemsResponse>>;
    list(
      params: Params$Resource$Projects$Locations$Dbsystems$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Dbsystems$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ListDbSystemsResponse>,
      callback: BodyResponseCallback<Schema$ListDbSystemsResponse>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Dbsystems$List,
      callback: BodyResponseCallback<Schema$ListDbSystemsResponse>
    ): void;
    list(callback: BodyResponseCallback<Schema$ListDbSystemsResponse>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Dbsystems$List
        | BodyResponseCallback<Schema$ListDbSystemsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ListDbSystemsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ListDbSystemsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$ListDbSystemsResponse>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Dbsystems$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Dbsystems$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://oracledatabase.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}/dbSystems').replace(
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
        createAPIRequest<Schema$ListDbSystemsResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ListDbSystemsResponse>(parameters);
      }
    }
  }

  export interface Params$Resource$Projects$Locations$Dbsystems$Create
    extends StandardParameters {
    /**
     * Required. The ID of the DbSystem to create. This value is restricted to (^[a-z]([a-z0-9-]{0,61\}[a-z0-9])?$) and must be a maximum of 63 characters in length. The value must start with a letter and end with a letter or a number.
     */
    dbSystemId?: string;
    /**
     * Required. The value for parent of the DbSystem in the following format: projects/{project\}/locations/{location\}.
     */
    parent?: string;
    /**
     * Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
     */
    requestId?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$DbSystem;
  }
  export interface Params$Resource$Projects$Locations$Dbsystems$Delete
    extends StandardParameters {
    /**
     * Required. The name of the DbSystem in the following format: projects/{project\}/locations/{location\}/dbSystems/{db_system\}.
     */
    name?: string;
    /**
     * Optional. An optional ID to identify the request. This value is used to identify duplicate requests. If you make a request with the same request ID and the original request is still in progress or completed, the server ignores the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
     */
    requestId?: string;
  }
  export interface Params$Resource$Projects$Locations$Dbsystems$Get
    extends StandardParameters {
    /**
     * Required. The name of the DbSystem in the following format: projects/{project\}/locations/{location\}/dbSystems/{db_system\}.
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Locations$Dbsystems$List
    extends StandardParameters {
    /**
     * Optional. An expression for filtering the results of the request.
     */
    filter?: string;
    /**
     * Optional. An expression for ordering the results of the request.
     */
    orderBy?: string;
    /**
     * Optional. The maximum number of items to return. If unspecified, at most 50 DbSystems will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000.
     */
    pageSize?: number;
    /**
     * Optional. A token identifying a page of results the server should return.
     */
    pageToken?: string;
    /**
     * Required. The parent value for DbSystems in the following format: projects/{project\}/locations/{location\}.
     */
    parent?: string;
  }

  export class Resource$Projects$Locations$Dbsystemshapes {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Lists the database system shapes available for the project and location.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/oracledatabase.googleapis.com
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
     * const oracledatabase = google.oracledatabase('v1');
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
     *   const res = await oracledatabase.projects.locations.dbSystemShapes.list({
     *     // Optional. An expression for filtering the results of the request. Only the gcp_oracle_zone_id field is supported in this format: `gcp_oracle_zone_id="{gcp_oracle_zone_id\}"`.
     *     filter: 'placeholder-value',
     *     // Optional. The maximum number of items to return. If unspecified, at most 50 database system shapes will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000.
     *     pageSize: 'placeholder-value',
     *     // Optional. A token identifying a page of results the server should return.
     *     pageToken: 'placeholder-value',
     *     // Required. The parent value for Database System Shapes in the following format: projects/{project\}/locations/{location\}.
     *     parent: 'projects/my-project/locations/my-location',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "dbSystemShapes": [],
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
      params: Params$Resource$Projects$Locations$Dbsystemshapes$List,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    list(
      params?: Params$Resource$Projects$Locations$Dbsystemshapes$List,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$ListDbSystemShapesResponse>>;
    list(
      params: Params$Resource$Projects$Locations$Dbsystemshapes$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Dbsystemshapes$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ListDbSystemShapesResponse>,
      callback: BodyResponseCallback<Schema$ListDbSystemShapesResponse>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Dbsystemshapes$List,
      callback: BodyResponseCallback<Schema$ListDbSystemShapesResponse>
    ): void;
    list(
      callback: BodyResponseCallback<Schema$ListDbSystemShapesResponse>
    ): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Dbsystemshapes$List
        | BodyResponseCallback<Schema$ListDbSystemShapesResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ListDbSystemShapesResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ListDbSystemShapesResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$ListDbSystemShapesResponse>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Dbsystemshapes$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Dbsystemshapes$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://oracledatabase.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}/dbSystemShapes').replace(
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
        createAPIRequest<Schema$ListDbSystemShapesResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ListDbSystemShapesResponse>(parameters);
      }
    }
  }

  export interface Params$Resource$Projects$Locations$Dbsystemshapes$List
    extends StandardParameters {
    /**
     * Optional. An expression for filtering the results of the request. Only the gcp_oracle_zone_id field is supported in this format: `gcp_oracle_zone_id="{gcp_oracle_zone_id\}"`.
     */
    filter?: string;
    /**
     * Optional. The maximum number of items to return. If unspecified, at most 50 database system shapes will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000.
     */
    pageSize?: number;
    /**
     * Optional. A token identifying a page of results the server should return.
     */
    pageToken?: string;
    /**
     * Required. The parent value for Database System Shapes in the following format: projects/{project\}/locations/{location\}.
     */
    parent?: string;
  }

  export class Resource$Projects$Locations$Dbversions {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * List DbVersions for the given project and location.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/oracledatabase.googleapis.com
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
     * const oracledatabase = google.oracledatabase('v1');
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
     *   const res = await oracledatabase.projects.locations.dbVersions.list({
     *     // Optional. Filter expression that matches a subset of the DbVersions to show. The supported filter for dbSystem creation is `db_system_shape = {db_system_shape\} AND storage_management = {storage_management\}`. If no filter is provided, all DbVersions will be returned.
     *     filter: 'placeholder-value',
     *     // Optional. The maximum number of items to return. If unspecified, a maximum of 50 DbVersions will be returned. The maximum value is 1000; values above 1000 will be reset to 1000.
     *     pageSize: 'placeholder-value',
     *     // Optional. A token identifying the requested page of results to return. All fields except the filter should remain the same as in the request that provided this page token.
     *     pageToken: 'placeholder-value',
     *     // Required. The parent value for the DbVersion resource with the format: projects/{project\}/locations/{location\}
     *     parent: 'projects/my-project/locations/my-location',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "dbVersions": [],
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
      params: Params$Resource$Projects$Locations$Dbversions$List,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    list(
      params?: Params$Resource$Projects$Locations$Dbversions$List,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$ListDbVersionsResponse>>;
    list(
      params: Params$Resource$Projects$Locations$Dbversions$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Dbversions$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ListDbVersionsResponse>,
      callback: BodyResponseCallback<Schema$ListDbVersionsResponse>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Dbversions$List,
      callback: BodyResponseCallback<Schema$ListDbVersionsResponse>
    ): void;
    list(callback: BodyResponseCallback<Schema$ListDbVersionsResponse>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Dbversions$List
        | BodyResponseCallback<Schema$ListDbVersionsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ListDbVersionsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ListDbVersionsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$ListDbVersionsResponse>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Dbversions$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Dbversions$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://oracledatabase.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}/dbVersions').replace(
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
        createAPIRequest<Schema$ListDbVersionsResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ListDbVersionsResponse>(parameters);
      }
    }
  }

  export interface Params$Resource$Projects$Locations$Dbversions$List
    extends StandardParameters {
    /**
     * Optional. Filter expression that matches a subset of the DbVersions to show. The supported filter for dbSystem creation is `db_system_shape = {db_system_shape\} AND storage_management = {storage_management\}`. If no filter is provided, all DbVersions will be returned.
     */
    filter?: string;
    /**
     * Optional. The maximum number of items to return. If unspecified, a maximum of 50 DbVersions will be returned. The maximum value is 1000; values above 1000 will be reset to 1000.
     */
    pageSize?: number;
    /**
     * Optional. A token identifying the requested page of results to return. All fields except the filter should remain the same as in the request that provided this page token.
     */
    pageToken?: string;
    /**
     * Required. The parent value for the DbVersion resource with the format: projects/{project\}/locations/{location\}
     */
    parent?: string;
  }

  export class Resource$Projects$Locations$Entitlements {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Lists the entitlements in a given project.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/oracledatabase.googleapis.com
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
     * const oracledatabase = google.oracledatabase('v1');
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
     *   const res = await oracledatabase.projects.locations.entitlements.list({
     *     // Optional. The maximum number of items to return. If unspecified, a maximum of 50 entitlements will be returned. The maximum value is 1000.
     *     pageSize: 'placeholder-value',
     *     // Optional. A token identifying a page of results the server should return.
     *     pageToken: 'placeholder-value',
     *     // Required. The parent value for the entitlement in the following format: projects/{project\}/locations/{location\}.
     *     parent: 'projects/my-project/locations/my-location',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "entitlements": [],
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
      params: Params$Resource$Projects$Locations$Entitlements$List,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    list(
      params?: Params$Resource$Projects$Locations$Entitlements$List,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$ListEntitlementsResponse>>;
    list(
      params: Params$Resource$Projects$Locations$Entitlements$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Entitlements$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ListEntitlementsResponse>,
      callback: BodyResponseCallback<Schema$ListEntitlementsResponse>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Entitlements$List,
      callback: BodyResponseCallback<Schema$ListEntitlementsResponse>
    ): void;
    list(callback: BodyResponseCallback<Schema$ListEntitlementsResponse>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Entitlements$List
        | BodyResponseCallback<Schema$ListEntitlementsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ListEntitlementsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ListEntitlementsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$ListEntitlementsResponse>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Entitlements$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Entitlements$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://oracledatabase.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}/entitlements').replace(
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
        createAPIRequest<Schema$ListEntitlementsResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ListEntitlementsResponse>(parameters);
      }
    }
  }

  export interface Params$Resource$Projects$Locations$Entitlements$List
    extends StandardParameters {
    /**
     * Optional. The maximum number of items to return. If unspecified, a maximum of 50 entitlements will be returned. The maximum value is 1000.
     */
    pageSize?: number;
    /**
     * Optional. A token identifying a page of results the server should return.
     */
    pageToken?: string;
    /**
     * Required. The parent value for the entitlement in the following format: projects/{project\}/locations/{location\}.
     */
    parent?: string;
  }

  export class Resource$Projects$Locations$Exadbvmclusters {
    context: APIRequestContext;
    dbNodes: Resource$Projects$Locations$Exadbvmclusters$Dbnodes;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.dbNodes = new Resource$Projects$Locations$Exadbvmclusters$Dbnodes(
        this.context
      );
    }

    /**
     * Creates a new Exadb (Exascale) VM Cluster resource.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/oracledatabase.googleapis.com
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
     * const oracledatabase = google.oracledatabase('v1');
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
     *   const res = await oracledatabase.projects.locations.exadbVmClusters.create({
     *     // Required. The ID of the ExadbVmCluster to create. This value is restricted to (^[a-z]([a-z0-9-]{0,61\}[a-z0-9])?$) and must be a maximum of 63 characters in length. The value must start with a letter and end with a letter or a number.
     *     exadbVmClusterId: 'placeholder-value',
     *     // Required. The value for parent of the ExadbVmCluster in the following format: projects/{project\}/locations/{location\}.
     *     parent: 'projects/my-project/locations/my-location',
     *     // Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
     *     requestId: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "backupOdbSubnet": "my_backupOdbSubnet",
     *       //   "createTime": "my_createTime",
     *       //   "displayName": "my_displayName",
     *       //   "entitlementId": "my_entitlementId",
     *       //   "gcpOracleZone": "my_gcpOracleZone",
     *       //   "labels": {},
     *       //   "name": "my_name",
     *       //   "odbNetwork": "my_odbNetwork",
     *       //   "odbSubnet": "my_odbSubnet",
     *       //   "properties": {}
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
      params: Params$Resource$Projects$Locations$Exadbvmclusters$Create,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    create(
      params?: Params$Resource$Projects$Locations$Exadbvmclusters$Create,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Operation>>;
    create(
      params: Params$Resource$Projects$Locations$Exadbvmclusters$Create,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    create(
      params: Params$Resource$Projects$Locations$Exadbvmclusters$Create,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    create(
      params: Params$Resource$Projects$Locations$Exadbvmclusters$Create,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    create(callback: BodyResponseCallback<Schema$Operation>): void;
    create(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Exadbvmclusters$Create
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
        {}) as Params$Resource$Projects$Locations$Exadbvmclusters$Create;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Exadbvmclusters$Create;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://oracledatabase.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}/exadbVmClusters').replace(
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
     * Deletes a single Exadb (Exascale) VM Cluster.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/oracledatabase.googleapis.com
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
     * const oracledatabase = google.oracledatabase('v1');
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
     *   const res = await oracledatabase.projects.locations.exadbVmClusters.delete({
     *     // Required. The name of the ExadbVmCluster in the following format: projects/{project\}/locations/{location\}/exadbVmClusters/{exadb_vm_cluster\}.
     *     name: 'projects/my-project/locations/my-location/exadbVmClusters/my-exadbVmCluster',
     *     // Optional. An optional ID to identify the request. This value is used to identify duplicate requests. If you make a request with the same request ID and the original request is still in progress or completed, the server ignores the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
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
      params: Params$Resource$Projects$Locations$Exadbvmclusters$Delete,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    delete(
      params?: Params$Resource$Projects$Locations$Exadbvmclusters$Delete,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Operation>>;
    delete(
      params: Params$Resource$Projects$Locations$Exadbvmclusters$Delete,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    delete(
      params: Params$Resource$Projects$Locations$Exadbvmclusters$Delete,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    delete(
      params: Params$Resource$Projects$Locations$Exadbvmclusters$Delete,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    delete(callback: BodyResponseCallback<Schema$Operation>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Exadbvmclusters$Delete
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
        {}) as Params$Resource$Projects$Locations$Exadbvmclusters$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Exadbvmclusters$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://oracledatabase.googleapis.com/';
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
     * Gets details of a single Exadb (Exascale) VM Cluster.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/oracledatabase.googleapis.com
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
     * const oracledatabase = google.oracledatabase('v1');
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
     *   const res = await oracledatabase.projects.locations.exadbVmClusters.get({
     *     // Required. The name of the ExadbVmCluster in the following format: projects/{project\}/locations/{location\}/exadbVmClusters/{exadb_vm_cluster\}.
     *     name: 'projects/my-project/locations/my-location/exadbVmClusters/my-exadbVmCluster',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "backupOdbSubnet": "my_backupOdbSubnet",
     *   //   "createTime": "my_createTime",
     *   //   "displayName": "my_displayName",
     *   //   "entitlementId": "my_entitlementId",
     *   //   "gcpOracleZone": "my_gcpOracleZone",
     *   //   "labels": {},
     *   //   "name": "my_name",
     *   //   "odbNetwork": "my_odbNetwork",
     *   //   "odbSubnet": "my_odbSubnet",
     *   //   "properties": {}
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
      params: Params$Resource$Projects$Locations$Exadbvmclusters$Get,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    get(
      params?: Params$Resource$Projects$Locations$Exadbvmclusters$Get,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$ExadbVmCluster>>;
    get(
      params: Params$Resource$Projects$Locations$Exadbvmclusters$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Exadbvmclusters$Get,
      options: MethodOptions | BodyResponseCallback<Schema$ExadbVmCluster>,
      callback: BodyResponseCallback<Schema$ExadbVmCluster>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Exadbvmclusters$Get,
      callback: BodyResponseCallback<Schema$ExadbVmCluster>
    ): void;
    get(callback: BodyResponseCallback<Schema$ExadbVmCluster>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Exadbvmclusters$Get
        | BodyResponseCallback<Schema$ExadbVmCluster>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ExadbVmCluster>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ExadbVmCluster>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$ExadbVmCluster>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Exadbvmclusters$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Exadbvmclusters$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://oracledatabase.googleapis.com/';
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
        createAPIRequest<Schema$ExadbVmCluster>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ExadbVmCluster>(parameters);
      }
    }

    /**
     * Lists all the Exadb (Exascale) VM Clusters for the given project and location.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/oracledatabase.googleapis.com
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
     * const oracledatabase = google.oracledatabase('v1');
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
     *   const res = await oracledatabase.projects.locations.exadbVmClusters.list({
     *     // Optional. An expression for filtering the results of the request.
     *     filter: 'placeholder-value',
     *     // Optional. An expression for ordering the results of the request.
     *     orderBy: 'placeholder-value',
     *     // Optional. The maximum number of items to return. If unspecified, at most 50 ExadbVmClusters will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000.
     *     pageSize: 'placeholder-value',
     *     // Optional. A token identifying a page of results the server should return.
     *     pageToken: 'placeholder-value',
     *     // Required. The parent value for ExadbVmClusters in the following format: projects/{project\}/locations/{location\}.
     *     parent: 'projects/my-project/locations/my-location',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "exadbVmClusters": [],
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
      params: Params$Resource$Projects$Locations$Exadbvmclusters$List,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    list(
      params?: Params$Resource$Projects$Locations$Exadbvmclusters$List,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$ListExadbVmClustersResponse>>;
    list(
      params: Params$Resource$Projects$Locations$Exadbvmclusters$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Exadbvmclusters$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ListExadbVmClustersResponse>,
      callback: BodyResponseCallback<Schema$ListExadbVmClustersResponse>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Exadbvmclusters$List,
      callback: BodyResponseCallback<Schema$ListExadbVmClustersResponse>
    ): void;
    list(
      callback: BodyResponseCallback<Schema$ListExadbVmClustersResponse>
    ): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Exadbvmclusters$List
        | BodyResponseCallback<Schema$ListExadbVmClustersResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ListExadbVmClustersResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ListExadbVmClustersResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$ListExadbVmClustersResponse>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Exadbvmclusters$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Exadbvmclusters$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://oracledatabase.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}/exadbVmClusters').replace(
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
        createAPIRequest<Schema$ListExadbVmClustersResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ListExadbVmClustersResponse>(parameters);
      }
    }

    /**
     * Updates a single Exadb (Exascale) VM Cluster. To add virtual machines to existing exadb vm cluster, only pass the node count.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/oracledatabase.googleapis.com
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
     * const oracledatabase = google.oracledatabase('v1');
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
     *   const res = await oracledatabase.projects.locations.exadbVmClusters.patch({
     *     // Identifier. The name of the ExadbVmCluster resource in the following format: projects/{project\}/locations/{region\}/exadbVmClusters/{exadb_vm_cluster\}
     *     name: 'projects/my-project/locations/my-location/exadbVmClusters/my-exadbVmCluster',
     *     // Optional. An optional ID to identify the request. This value is used to identify duplicate requests. If you make a request with the same request ID and the original request is still in progress or completed, the server ignores the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
     *     requestId: 'placeholder-value',
     *     // Optional. A mask specifying which fields in th VM Cluster should be updated. A field specified in the mask is overwritten. If a mask isn't provided then all the fields in the VM Cluster are overwritten.
     *     updateMask: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "backupOdbSubnet": "my_backupOdbSubnet",
     *       //   "createTime": "my_createTime",
     *       //   "displayName": "my_displayName",
     *       //   "entitlementId": "my_entitlementId",
     *       //   "gcpOracleZone": "my_gcpOracleZone",
     *       //   "labels": {},
     *       //   "name": "my_name",
     *       //   "odbNetwork": "my_odbNetwork",
     *       //   "odbSubnet": "my_odbSubnet",
     *       //   "properties": {}
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
      params: Params$Resource$Projects$Locations$Exadbvmclusters$Patch,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    patch(
      params?: Params$Resource$Projects$Locations$Exadbvmclusters$Patch,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Operation>>;
    patch(
      params: Params$Resource$Projects$Locations$Exadbvmclusters$Patch,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    patch(
      params: Params$Resource$Projects$Locations$Exadbvmclusters$Patch,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    patch(
      params: Params$Resource$Projects$Locations$Exadbvmclusters$Patch,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    patch(callback: BodyResponseCallback<Schema$Operation>): void;
    patch(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Exadbvmclusters$Patch
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
        {}) as Params$Resource$Projects$Locations$Exadbvmclusters$Patch;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Exadbvmclusters$Patch;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://oracledatabase.googleapis.com/';
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

    /**
     * Removes virtual machines from an existing exadb vm cluster.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/oracledatabase.googleapis.com
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
     * const oracledatabase = google.oracledatabase('v1');
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
     *     await oracledatabase.projects.locations.exadbVmClusters.removeVirtualMachine(
     *       {
     *         // Required. The name of the ExadbVmCluster in the following format: projects/{project\}/locations/{location\}/exadbVmClusters/{exadb_vm_cluster\}.
     *         name: 'projects/my-project/locations/my-location/exadbVmClusters/my-exadbVmCluster',
     *
     *         // Request body metadata
     *         requestBody: {
     *           // request body parameters
     *           // {
     *           //   "hostnames": [],
     *           //   "requestId": "my_requestId"
     *           // }
     *         },
     *       },
     *     );
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
    removeVirtualMachine(
      params: Params$Resource$Projects$Locations$Exadbvmclusters$Removevirtualmachine,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    removeVirtualMachine(
      params?: Params$Resource$Projects$Locations$Exadbvmclusters$Removevirtualmachine,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Operation>>;
    removeVirtualMachine(
      params: Params$Resource$Projects$Locations$Exadbvmclusters$Removevirtualmachine,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    removeVirtualMachine(
      params: Params$Resource$Projects$Locations$Exadbvmclusters$Removevirtualmachine,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    removeVirtualMachine(
      params: Params$Resource$Projects$Locations$Exadbvmclusters$Removevirtualmachine,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    removeVirtualMachine(
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    removeVirtualMachine(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Exadbvmclusters$Removevirtualmachine
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
        {}) as Params$Resource$Projects$Locations$Exadbvmclusters$Removevirtualmachine;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Exadbvmclusters$Removevirtualmachine;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://oracledatabase.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}:removeVirtualMachine').replace(
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

  export interface Params$Resource$Projects$Locations$Exadbvmclusters$Create
    extends StandardParameters {
    /**
     * Required. The ID of the ExadbVmCluster to create. This value is restricted to (^[a-z]([a-z0-9-]{0,61\}[a-z0-9])?$) and must be a maximum of 63 characters in length. The value must start with a letter and end with a letter or a number.
     */
    exadbVmClusterId?: string;
    /**
     * Required. The value for parent of the ExadbVmCluster in the following format: projects/{project\}/locations/{location\}.
     */
    parent?: string;
    /**
     * Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
     */
    requestId?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$ExadbVmCluster;
  }
  export interface Params$Resource$Projects$Locations$Exadbvmclusters$Delete
    extends StandardParameters {
    /**
     * Required. The name of the ExadbVmCluster in the following format: projects/{project\}/locations/{location\}/exadbVmClusters/{exadb_vm_cluster\}.
     */
    name?: string;
    /**
     * Optional. An optional ID to identify the request. This value is used to identify duplicate requests. If you make a request with the same request ID and the original request is still in progress or completed, the server ignores the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
     */
    requestId?: string;
  }
  export interface Params$Resource$Projects$Locations$Exadbvmclusters$Get
    extends StandardParameters {
    /**
     * Required. The name of the ExadbVmCluster in the following format: projects/{project\}/locations/{location\}/exadbVmClusters/{exadb_vm_cluster\}.
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Locations$Exadbvmclusters$List
    extends StandardParameters {
    /**
     * Optional. An expression for filtering the results of the request.
     */
    filter?: string;
    /**
     * Optional. An expression for ordering the results of the request.
     */
    orderBy?: string;
    /**
     * Optional. The maximum number of items to return. If unspecified, at most 50 ExadbVmClusters will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000.
     */
    pageSize?: number;
    /**
     * Optional. A token identifying a page of results the server should return.
     */
    pageToken?: string;
    /**
     * Required. The parent value for ExadbVmClusters in the following format: projects/{project\}/locations/{location\}.
     */
    parent?: string;
  }
  export interface Params$Resource$Projects$Locations$Exadbvmclusters$Patch
    extends StandardParameters {
    /**
     * Identifier. The name of the ExadbVmCluster resource in the following format: projects/{project\}/locations/{region\}/exadbVmClusters/{exadb_vm_cluster\}
     */
    name?: string;
    /**
     * Optional. An optional ID to identify the request. This value is used to identify duplicate requests. If you make a request with the same request ID and the original request is still in progress or completed, the server ignores the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
     */
    requestId?: string;
    /**
     * Optional. A mask specifying which fields in th VM Cluster should be updated. A field specified in the mask is overwritten. If a mask isn't provided then all the fields in the VM Cluster are overwritten.
     */
    updateMask?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$ExadbVmCluster;
  }
  export interface Params$Resource$Projects$Locations$Exadbvmclusters$Removevirtualmachine
    extends StandardParameters {
    /**
     * Required. The name of the ExadbVmCluster in the following format: projects/{project\}/locations/{location\}/exadbVmClusters/{exadb_vm_cluster\}.
     */
    name?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$RemoveVirtualMachineExadbVmClusterRequest;
  }

  export class Resource$Projects$Locations$Exadbvmclusters$Dbnodes {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Lists the database nodes of a VM Cluster.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/oracledatabase.googleapis.com
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
     * const oracledatabase = google.oracledatabase('v1');
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
     *     await oracledatabase.projects.locations.exadbVmClusters.dbNodes.list({
     *       // Optional. The maximum number of items to return. If unspecified, at most 50 db nodes will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000.
     *       pageSize: 'placeholder-value',
     *       // Optional. A token identifying a page of results the node should return.
     *       pageToken: 'placeholder-value',
     *       // Required. The parent value for database node in the following format: projects/{project\}/locations/{location\}/cloudVmClusters/{cloudVmCluster\}. .
     *       parent:
     *         'projects/my-project/locations/my-location/exadbVmClusters/my-exadbVmCluster',
     *     });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "dbNodes": [],
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
      params: Params$Resource$Projects$Locations$Exadbvmclusters$Dbnodes$List,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    list(
      params?: Params$Resource$Projects$Locations$Exadbvmclusters$Dbnodes$List,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$ListDbNodesResponse>>;
    list(
      params: Params$Resource$Projects$Locations$Exadbvmclusters$Dbnodes$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Exadbvmclusters$Dbnodes$List,
      options: MethodOptions | BodyResponseCallback<Schema$ListDbNodesResponse>,
      callback: BodyResponseCallback<Schema$ListDbNodesResponse>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Exadbvmclusters$Dbnodes$List,
      callback: BodyResponseCallback<Schema$ListDbNodesResponse>
    ): void;
    list(callback: BodyResponseCallback<Schema$ListDbNodesResponse>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Exadbvmclusters$Dbnodes$List
        | BodyResponseCallback<Schema$ListDbNodesResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ListDbNodesResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ListDbNodesResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$ListDbNodesResponse>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Exadbvmclusters$Dbnodes$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Exadbvmclusters$Dbnodes$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://oracledatabase.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}/dbNodes').replace(
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
        createAPIRequest<Schema$ListDbNodesResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ListDbNodesResponse>(parameters);
      }
    }
  }

  export interface Params$Resource$Projects$Locations$Exadbvmclusters$Dbnodes$List
    extends StandardParameters {
    /**
     * Optional. The maximum number of items to return. If unspecified, at most 50 db nodes will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000.
     */
    pageSize?: number;
    /**
     * Optional. A token identifying a page of results the node should return.
     */
    pageToken?: string;
    /**
     * Required. The parent value for database node in the following format: projects/{project\}/locations/{location\}/cloudVmClusters/{cloudVmCluster\}. .
     */
    parent?: string;
  }

  export class Resource$Projects$Locations$Exascaledbstoragevaults {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Creates a new ExascaleDB Storage Vault resource.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/oracledatabase.googleapis.com
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
     * const oracledatabase = google.oracledatabase('v1');
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
     *     await oracledatabase.projects.locations.exascaleDbStorageVaults.create({
     *       // Required. The ID of the ExascaleDbStorageVault to create. This value is restricted to (^[a-z]([a-z0-9-]{0,61\}[a-z0-9])?$) and must be a maximum of 63 characters in length. The value must start with a letter and end with a letter or a number.
     *       exascaleDbStorageVaultId: 'placeholder-value',
     *       // Required. The value for parent of the ExascaleDbStorageVault in the following format: projects/{project\}/locations/{location\}.
     *       parent: 'projects/my-project/locations/my-location',
     *       // Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
     *       requestId: 'placeholder-value',
     *
     *       // Request body metadata
     *       requestBody: {
     *         // request body parameters
     *         // {
     *         //   "createTime": "my_createTime",
     *         //   "displayName": "my_displayName",
     *         //   "entitlementId": "my_entitlementId",
     *         //   "gcpOracleZone": "my_gcpOracleZone",
     *         //   "labels": {},
     *         //   "name": "my_name",
     *         //   "properties": {}
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
    create(
      params: Params$Resource$Projects$Locations$Exascaledbstoragevaults$Create,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    create(
      params?: Params$Resource$Projects$Locations$Exascaledbstoragevaults$Create,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Operation>>;
    create(
      params: Params$Resource$Projects$Locations$Exascaledbstoragevaults$Create,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    create(
      params: Params$Resource$Projects$Locations$Exascaledbstoragevaults$Create,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    create(
      params: Params$Resource$Projects$Locations$Exascaledbstoragevaults$Create,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    create(callback: BodyResponseCallback<Schema$Operation>): void;
    create(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Exascaledbstoragevaults$Create
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
        {}) as Params$Resource$Projects$Locations$Exascaledbstoragevaults$Create;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Exascaledbstoragevaults$Create;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://oracledatabase.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}/exascaleDbStorageVaults').replace(
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
     * Deletes a single ExascaleDB Storage Vault.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/oracledatabase.googleapis.com
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
     * const oracledatabase = google.oracledatabase('v1');
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
     *     await oracledatabase.projects.locations.exascaleDbStorageVaults.delete({
     *       // Required. The name of the ExascaleDbStorageVault in the following format: projects/{project\}/locations/{location\}/exascaleDbStorageVaults/{exascale_db_storage_vault\}.
     *       name: 'projects/my-project/locations/my-location/exascaleDbStorageVaults/my-exascaleDbStorageVault',
     *       // Optional. An optional ID to identify the request. This value is used to identify duplicate requests. If you make a request with the same request ID and the original request is still in progress or completed, the server ignores the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
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
      params: Params$Resource$Projects$Locations$Exascaledbstoragevaults$Delete,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    delete(
      params?: Params$Resource$Projects$Locations$Exascaledbstoragevaults$Delete,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Operation>>;
    delete(
      params: Params$Resource$Projects$Locations$Exascaledbstoragevaults$Delete,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    delete(
      params: Params$Resource$Projects$Locations$Exascaledbstoragevaults$Delete,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    delete(
      params: Params$Resource$Projects$Locations$Exascaledbstoragevaults$Delete,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    delete(callback: BodyResponseCallback<Schema$Operation>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Exascaledbstoragevaults$Delete
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
        {}) as Params$Resource$Projects$Locations$Exascaledbstoragevaults$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Exascaledbstoragevaults$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://oracledatabase.googleapis.com/';
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
     * Gets details of a single ExascaleDB Storage Vault.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/oracledatabase.googleapis.com
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
     * const oracledatabase = google.oracledatabase('v1');
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
     *     await oracledatabase.projects.locations.exascaleDbStorageVaults.get({
     *       // Required. The name of the ExascaleDbStorageVault in the following format: projects/{project\}/locations/{location\}/exascaleDbStorageVaults/{exascale_db_storage_vault\}.
     *       name: 'projects/my-project/locations/my-location/exascaleDbStorageVaults/my-exascaleDbStorageVault',
     *     });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "createTime": "my_createTime",
     *   //   "displayName": "my_displayName",
     *   //   "entitlementId": "my_entitlementId",
     *   //   "gcpOracleZone": "my_gcpOracleZone",
     *   //   "labels": {},
     *   //   "name": "my_name",
     *   //   "properties": {}
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
      params: Params$Resource$Projects$Locations$Exascaledbstoragevaults$Get,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    get(
      params?: Params$Resource$Projects$Locations$Exascaledbstoragevaults$Get,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$ExascaleDbStorageVault>>;
    get(
      params: Params$Resource$Projects$Locations$Exascaledbstoragevaults$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Exascaledbstoragevaults$Get,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ExascaleDbStorageVault>,
      callback: BodyResponseCallback<Schema$ExascaleDbStorageVault>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Exascaledbstoragevaults$Get,
      callback: BodyResponseCallback<Schema$ExascaleDbStorageVault>
    ): void;
    get(callback: BodyResponseCallback<Schema$ExascaleDbStorageVault>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Exascaledbstoragevaults$Get
        | BodyResponseCallback<Schema$ExascaleDbStorageVault>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ExascaleDbStorageVault>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ExascaleDbStorageVault>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$ExascaleDbStorageVault>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Exascaledbstoragevaults$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Exascaledbstoragevaults$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://oracledatabase.googleapis.com/';
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
        createAPIRequest<Schema$ExascaleDbStorageVault>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ExascaleDbStorageVault>(parameters);
      }
    }

    /**
     * Lists all the ExascaleDB Storage Vaults for the given project and location.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/oracledatabase.googleapis.com
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
     * const oracledatabase = google.oracledatabase('v1');
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
     *     await oracledatabase.projects.locations.exascaleDbStorageVaults.list({
     *       // Optional. An expression for filtering the results of the request. Filter the list as specified in https://google.aip.dev/160.
     *       filter: 'placeholder-value',
     *       // Optional. An expression for ordering the results of the request. Order results as specified in https://google.aip.dev/132.
     *       orderBy: 'placeholder-value',
     *       // Optional. The maximum number of items to return. If unspecified, at most 50 ExascaleDbStorageVaults will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000.
     *       pageSize: 'placeholder-value',
     *       // Optional. A token identifying a page of results the server should return.
     *       pageToken: 'placeholder-value',
     *       // Required. The parent value for ExascaleDbStorageVault in the following format: projects/{project\}/locations/{location\}.
     *       parent: 'projects/my-project/locations/my-location',
     *     });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "exascaleDbStorageVaults": [],
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
      params: Params$Resource$Projects$Locations$Exascaledbstoragevaults$List,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    list(
      params?: Params$Resource$Projects$Locations$Exascaledbstoragevaults$List,
      options?: MethodOptions
    ): Promise<
      GaxiosResponseWithHTTP2<Schema$ListExascaleDbStorageVaultsResponse>
    >;
    list(
      params: Params$Resource$Projects$Locations$Exascaledbstoragevaults$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Exascaledbstoragevaults$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ListExascaleDbStorageVaultsResponse>,
      callback: BodyResponseCallback<Schema$ListExascaleDbStorageVaultsResponse>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Exascaledbstoragevaults$List,
      callback: BodyResponseCallback<Schema$ListExascaleDbStorageVaultsResponse>
    ): void;
    list(
      callback: BodyResponseCallback<Schema$ListExascaleDbStorageVaultsResponse>
    ): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Exascaledbstoragevaults$List
        | BodyResponseCallback<Schema$ListExascaleDbStorageVaultsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ListExascaleDbStorageVaultsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ListExascaleDbStorageVaultsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<
          GaxiosResponseWithHTTP2<Schema$ListExascaleDbStorageVaultsResponse>
        >
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Exascaledbstoragevaults$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Exascaledbstoragevaults$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://oracledatabase.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}/exascaleDbStorageVaults').replace(
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
        createAPIRequest<Schema$ListExascaleDbStorageVaultsResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ListExascaleDbStorageVaultsResponse>(
          parameters
        );
      }
    }
  }

  export interface Params$Resource$Projects$Locations$Exascaledbstoragevaults$Create
    extends StandardParameters {
    /**
     * Required. The ID of the ExascaleDbStorageVault to create. This value is restricted to (^[a-z]([a-z0-9-]{0,61\}[a-z0-9])?$) and must be a maximum of 63 characters in length. The value must start with a letter and end with a letter or a number.
     */
    exascaleDbStorageVaultId?: string;
    /**
     * Required. The value for parent of the ExascaleDbStorageVault in the following format: projects/{project\}/locations/{location\}.
     */
    parent?: string;
    /**
     * Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
     */
    requestId?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$ExascaleDbStorageVault;
  }
  export interface Params$Resource$Projects$Locations$Exascaledbstoragevaults$Delete
    extends StandardParameters {
    /**
     * Required. The name of the ExascaleDbStorageVault in the following format: projects/{project\}/locations/{location\}/exascaleDbStorageVaults/{exascale_db_storage_vault\}.
     */
    name?: string;
    /**
     * Optional. An optional ID to identify the request. This value is used to identify duplicate requests. If you make a request with the same request ID and the original request is still in progress or completed, the server ignores the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
     */
    requestId?: string;
  }
  export interface Params$Resource$Projects$Locations$Exascaledbstoragevaults$Get
    extends StandardParameters {
    /**
     * Required. The name of the ExascaleDbStorageVault in the following format: projects/{project\}/locations/{location\}/exascaleDbStorageVaults/{exascale_db_storage_vault\}.
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Locations$Exascaledbstoragevaults$List
    extends StandardParameters {
    /**
     * Optional. An expression for filtering the results of the request. Filter the list as specified in https://google.aip.dev/160.
     */
    filter?: string;
    /**
     * Optional. An expression for ordering the results of the request. Order results as specified in https://google.aip.dev/132.
     */
    orderBy?: string;
    /**
     * Optional. The maximum number of items to return. If unspecified, at most 50 ExascaleDbStorageVaults will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000.
     */
    pageSize?: number;
    /**
     * Optional. A token identifying a page of results the server should return.
     */
    pageToken?: string;
    /**
     * Required. The parent value for ExascaleDbStorageVault in the following format: projects/{project\}/locations/{location\}.
     */
    parent?: string;
  }

  export class Resource$Projects$Locations$Giversions {
    context: APIRequestContext;
    minorVersions: Resource$Projects$Locations$Giversions$Minorversions;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.minorVersions =
        new Resource$Projects$Locations$Giversions$Minorversions(this.context);
    }

    /**
     * Lists all the valid Oracle Grid Infrastructure (GI) versions for the given project and location.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/oracledatabase.googleapis.com
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
     * const oracledatabase = google.oracledatabase('v1');
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
     *   const res = await oracledatabase.projects.locations.giVersions.list({
     *     // Optional. An expression for filtering the results of the request. Only the shape, gcp_oracle_zone and gi_version fields are supported in this format: `shape="{shape\}"`.
     *     filter: 'placeholder-value',
     *     // Optional. The maximum number of items to return. If unspecified, a maximum of 50 Oracle Grid Infrastructure (GI) versions will be returned. The maximum value is 1000; values above 1000 will be reset to 1000.
     *     pageSize: 'placeholder-value',
     *     // Optional. A token identifying a page of results the server should return.
     *     pageToken: 'placeholder-value',
     *     // Required. The parent value for Grid Infrastructure Version in the following format: Format: projects/{project\}/locations/{location\}.
     *     parent: 'projects/my-project/locations/my-location',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "giVersions": [],
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
      params: Params$Resource$Projects$Locations$Giversions$List,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    list(
      params?: Params$Resource$Projects$Locations$Giversions$List,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$ListGiVersionsResponse>>;
    list(
      params: Params$Resource$Projects$Locations$Giversions$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Giversions$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ListGiVersionsResponse>,
      callback: BodyResponseCallback<Schema$ListGiVersionsResponse>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Giversions$List,
      callback: BodyResponseCallback<Schema$ListGiVersionsResponse>
    ): void;
    list(callback: BodyResponseCallback<Schema$ListGiVersionsResponse>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Giversions$List
        | BodyResponseCallback<Schema$ListGiVersionsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ListGiVersionsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ListGiVersionsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$ListGiVersionsResponse>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Giversions$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Giversions$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://oracledatabase.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}/giVersions').replace(
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
        createAPIRequest<Schema$ListGiVersionsResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ListGiVersionsResponse>(parameters);
      }
    }
  }

  export interface Params$Resource$Projects$Locations$Giversions$List
    extends StandardParameters {
    /**
     * Optional. An expression for filtering the results of the request. Only the shape, gcp_oracle_zone and gi_version fields are supported in this format: `shape="{shape\}"`.
     */
    filter?: string;
    /**
     * Optional. The maximum number of items to return. If unspecified, a maximum of 50 Oracle Grid Infrastructure (GI) versions will be returned. The maximum value is 1000; values above 1000 will be reset to 1000.
     */
    pageSize?: number;
    /**
     * Optional. A token identifying a page of results the server should return.
     */
    pageToken?: string;
    /**
     * Required. The parent value for Grid Infrastructure Version in the following format: Format: projects/{project\}/locations/{location\}.
     */
    parent?: string;
  }

  export class Resource$Projects$Locations$Giversions$Minorversions {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Lists all the valid minor versions for the given project, location, gi version and shape family.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/oracledatabase.googleapis.com
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
     * const oracledatabase = google.oracledatabase('v1');
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
     *     await oracledatabase.projects.locations.giVersions.minorVersions.list({
     *       // Optional. An expression for filtering the results of the request. Only shapeFamily and gcp_oracle_zone_id are supported in this format: `shape_family="{shapeFamily\}" AND gcp_oracle_zone_id="{gcp_oracle_zone_id\}"`.
     *       filter: 'placeholder-value',
     *       // Optional. The maximum number of items to return. If unspecified, a maximum of 50 System Versions will be returned. The maximum value is 1000; values above 1000 will be reset to 1000.
     *       pageSize: 'placeholder-value',
     *       // Optional. A token identifying the requested page of results to return. All fields except the filter should remain the same as in the request that provided this page token.
     *       pageToken: 'placeholder-value',
     *       // Required. The parent value for the MinorVersion resource with the format: projects/{project\}/locations/{location\}/giVersions/{gi_version\}
     *       parent:
     *         'projects/my-project/locations/my-location/giVersions/my-giVersion',
     *     });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "minorVersions": [],
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
      params: Params$Resource$Projects$Locations$Giversions$Minorversions$List,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    list(
      params?: Params$Resource$Projects$Locations$Giversions$Minorversions$List,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$ListMinorVersionsResponse>>;
    list(
      params: Params$Resource$Projects$Locations$Giversions$Minorversions$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Giversions$Minorversions$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ListMinorVersionsResponse>,
      callback: BodyResponseCallback<Schema$ListMinorVersionsResponse>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Giversions$Minorversions$List,
      callback: BodyResponseCallback<Schema$ListMinorVersionsResponse>
    ): void;
    list(
      callback: BodyResponseCallback<Schema$ListMinorVersionsResponse>
    ): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Giversions$Minorversions$List
        | BodyResponseCallback<Schema$ListMinorVersionsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ListMinorVersionsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ListMinorVersionsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$ListMinorVersionsResponse>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Giversions$Minorversions$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Giversions$Minorversions$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://oracledatabase.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}/minorVersions').replace(
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
        createAPIRequest<Schema$ListMinorVersionsResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ListMinorVersionsResponse>(parameters);
      }
    }
  }

  export interface Params$Resource$Projects$Locations$Giversions$Minorversions$List
    extends StandardParameters {
    /**
     * Optional. An expression for filtering the results of the request. Only shapeFamily and gcp_oracle_zone_id are supported in this format: `shape_family="{shapeFamily\}" AND gcp_oracle_zone_id="{gcp_oracle_zone_id\}"`.
     */
    filter?: string;
    /**
     * Optional. The maximum number of items to return. If unspecified, a maximum of 50 System Versions will be returned. The maximum value is 1000; values above 1000 will be reset to 1000.
     */
    pageSize?: number;
    /**
     * Optional. A token identifying the requested page of results to return. All fields except the filter should remain the same as in the request that provided this page token.
     */
    pageToken?: string;
    /**
     * Required. The parent value for the MinorVersion resource with the format: projects/{project\}/locations/{location\}/giVersions/{gi_version\}
     */
    parent?: string;
  }

  export class Resource$Projects$Locations$Odbnetworks {
    context: APIRequestContext;
    odbSubnets: Resource$Projects$Locations$Odbnetworks$Odbsubnets;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.odbSubnets = new Resource$Projects$Locations$Odbnetworks$Odbsubnets(
        this.context
      );
    }

    /**
     * Creates a new ODB Network in a given project and location.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/oracledatabase.googleapis.com
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
     * const oracledatabase = google.oracledatabase('v1');
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
     *   const res = await oracledatabase.projects.locations.odbNetworks.create({
     *     // Required. The ID of the OdbNetwork to create. This value is restricted to (^[a-z]([a-z0-9-]{0,61\}[a-z0-9])?$) and must be a maximum of 63 characters in length. The value must start with a letter and end with a letter or a number.
     *     odbNetworkId: 'placeholder-value',
     *     // Required. The parent value for the OdbNetwork in the following format: projects/{project\}/locations/{location\}.
     *     parent: 'projects/my-project/locations/my-location',
     *     // Optional. An optional ID to identify the request. This value is used to identify duplicate requests. If you make a request with the same request ID and the original request is still in progress or completed, the server ignores the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
     *     requestId: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "createTime": "my_createTime",
     *       //   "entitlementId": "my_entitlementId",
     *       //   "gcpOracleZone": "my_gcpOracleZone",
     *       //   "labels": {},
     *       //   "name": "my_name",
     *       //   "network": "my_network",
     *       //   "state": "my_state"
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
      params: Params$Resource$Projects$Locations$Odbnetworks$Create,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    create(
      params?: Params$Resource$Projects$Locations$Odbnetworks$Create,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Operation>>;
    create(
      params: Params$Resource$Projects$Locations$Odbnetworks$Create,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    create(
      params: Params$Resource$Projects$Locations$Odbnetworks$Create,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    create(
      params: Params$Resource$Projects$Locations$Odbnetworks$Create,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    create(callback: BodyResponseCallback<Schema$Operation>): void;
    create(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Odbnetworks$Create
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
        {}) as Params$Resource$Projects$Locations$Odbnetworks$Create;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Odbnetworks$Create;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://oracledatabase.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}/odbNetworks').replace(
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
     * Deletes a single ODB Network.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/oracledatabase.googleapis.com
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
     * const oracledatabase = google.oracledatabase('v1');
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
     *   const res = await oracledatabase.projects.locations.odbNetworks.delete({
     *     // Required. The name of the resource in the following format: projects/{project\}/locations/{location\}/odbNetworks/{odb_network\}.
     *     name: 'projects/my-project/locations/my-location/odbNetworks/my-odbNetwork',
     *     // Optional. An optional ID to identify the request. This value is used to identify duplicate requests. If you make a request with the same request ID and the original request is still in progress or completed, the server ignores the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
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
      params: Params$Resource$Projects$Locations$Odbnetworks$Delete,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    delete(
      params?: Params$Resource$Projects$Locations$Odbnetworks$Delete,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Operation>>;
    delete(
      params: Params$Resource$Projects$Locations$Odbnetworks$Delete,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    delete(
      params: Params$Resource$Projects$Locations$Odbnetworks$Delete,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    delete(
      params: Params$Resource$Projects$Locations$Odbnetworks$Delete,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    delete(callback: BodyResponseCallback<Schema$Operation>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Odbnetworks$Delete
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
        {}) as Params$Resource$Projects$Locations$Odbnetworks$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Odbnetworks$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://oracledatabase.googleapis.com/';
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
     * Gets details of a single ODB Network.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/oracledatabase.googleapis.com
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
     * const oracledatabase = google.oracledatabase('v1');
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
     *   const res = await oracledatabase.projects.locations.odbNetworks.get({
     *     // Required. The name of the OdbNetwork in the following format: projects/{project\}/locations/{location\}/odbNetworks/{odb_network\}.
     *     name: 'projects/my-project/locations/my-location/odbNetworks/my-odbNetwork',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "createTime": "my_createTime",
     *   //   "entitlementId": "my_entitlementId",
     *   //   "gcpOracleZone": "my_gcpOracleZone",
     *   //   "labels": {},
     *   //   "name": "my_name",
     *   //   "network": "my_network",
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
      params: Params$Resource$Projects$Locations$Odbnetworks$Get,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    get(
      params?: Params$Resource$Projects$Locations$Odbnetworks$Get,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$OdbNetwork>>;
    get(
      params: Params$Resource$Projects$Locations$Odbnetworks$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Odbnetworks$Get,
      options: MethodOptions | BodyResponseCallback<Schema$OdbNetwork>,
      callback: BodyResponseCallback<Schema$OdbNetwork>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Odbnetworks$Get,
      callback: BodyResponseCallback<Schema$OdbNetwork>
    ): void;
    get(callback: BodyResponseCallback<Schema$OdbNetwork>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Odbnetworks$Get
        | BodyResponseCallback<Schema$OdbNetwork>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$OdbNetwork>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$OdbNetwork>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$OdbNetwork>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Odbnetworks$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Odbnetworks$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://oracledatabase.googleapis.com/';
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
        createAPIRequest<Schema$OdbNetwork>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$OdbNetwork>(parameters);
      }
    }

    /**
     * Lists the ODB Networks in a given project and location.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/oracledatabase.googleapis.com
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
     * const oracledatabase = google.oracledatabase('v1');
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
     *   const res = await oracledatabase.projects.locations.odbNetworks.list({
     *     // Optional. An expression for filtering the results of the request.
     *     filter: 'placeholder-value',
     *     // Optional. An expression for ordering the results of the request.
     *     orderBy: 'placeholder-value',
     *     // Optional. The maximum number of items to return. If unspecified, at most 50 ODB Networks will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000.
     *     pageSize: 'placeholder-value',
     *     // Optional. A token identifying a page of results the server should return.
     *     pageToken: 'placeholder-value',
     *     // Required. The parent value for the ODB Network in the following format: projects/{project\}/locations/{location\}.
     *     parent: 'projects/my-project/locations/my-location',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "nextPageToken": "my_nextPageToken",
     *   //   "odbNetworks": [],
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
      params: Params$Resource$Projects$Locations$Odbnetworks$List,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    list(
      params?: Params$Resource$Projects$Locations$Odbnetworks$List,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$ListOdbNetworksResponse>>;
    list(
      params: Params$Resource$Projects$Locations$Odbnetworks$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Odbnetworks$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ListOdbNetworksResponse>,
      callback: BodyResponseCallback<Schema$ListOdbNetworksResponse>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Odbnetworks$List,
      callback: BodyResponseCallback<Schema$ListOdbNetworksResponse>
    ): void;
    list(callback: BodyResponseCallback<Schema$ListOdbNetworksResponse>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Odbnetworks$List
        | BodyResponseCallback<Schema$ListOdbNetworksResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ListOdbNetworksResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ListOdbNetworksResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$ListOdbNetworksResponse>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Odbnetworks$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Odbnetworks$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://oracledatabase.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}/odbNetworks').replace(
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
        createAPIRequest<Schema$ListOdbNetworksResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ListOdbNetworksResponse>(parameters);
      }
    }
  }

  export interface Params$Resource$Projects$Locations$Odbnetworks$Create
    extends StandardParameters {
    /**
     * Required. The ID of the OdbNetwork to create. This value is restricted to (^[a-z]([a-z0-9-]{0,61\}[a-z0-9])?$) and must be a maximum of 63 characters in length. The value must start with a letter and end with a letter or a number.
     */
    odbNetworkId?: string;
    /**
     * Required. The parent value for the OdbNetwork in the following format: projects/{project\}/locations/{location\}.
     */
    parent?: string;
    /**
     * Optional. An optional ID to identify the request. This value is used to identify duplicate requests. If you make a request with the same request ID and the original request is still in progress or completed, the server ignores the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
     */
    requestId?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$OdbNetwork;
  }
  export interface Params$Resource$Projects$Locations$Odbnetworks$Delete
    extends StandardParameters {
    /**
     * Required. The name of the resource in the following format: projects/{project\}/locations/{location\}/odbNetworks/{odb_network\}.
     */
    name?: string;
    /**
     * Optional. An optional ID to identify the request. This value is used to identify duplicate requests. If you make a request with the same request ID and the original request is still in progress or completed, the server ignores the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
     */
    requestId?: string;
  }
  export interface Params$Resource$Projects$Locations$Odbnetworks$Get
    extends StandardParameters {
    /**
     * Required. The name of the OdbNetwork in the following format: projects/{project\}/locations/{location\}/odbNetworks/{odb_network\}.
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Locations$Odbnetworks$List
    extends StandardParameters {
    /**
     * Optional. An expression for filtering the results of the request.
     */
    filter?: string;
    /**
     * Optional. An expression for ordering the results of the request.
     */
    orderBy?: string;
    /**
     * Optional. The maximum number of items to return. If unspecified, at most 50 ODB Networks will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000.
     */
    pageSize?: number;
    /**
     * Optional. A token identifying a page of results the server should return.
     */
    pageToken?: string;
    /**
     * Required. The parent value for the ODB Network in the following format: projects/{project\}/locations/{location\}.
     */
    parent?: string;
  }

  export class Resource$Projects$Locations$Odbnetworks$Odbsubnets {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Creates a new ODB Subnet in a given ODB Network.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/oracledatabase.googleapis.com
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
     * const oracledatabase = google.oracledatabase('v1');
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
     *     await oracledatabase.projects.locations.odbNetworks.odbSubnets.create({
     *       // Required. The ID of the OdbSubnet to create. This value is restricted to (^[a-z]([a-z0-9-]{0,61\}[a-z0-9])?$) and must be a maximum of 63 characters in length. The value must start with a letter and end with a letter or a number.
     *       odbSubnetId: 'placeholder-value',
     *       // Required. The parent value for the OdbSubnet in the following format: projects/{project\}/locations/{location\}/odbNetworks/{odb_network\}.
     *       parent:
     *         'projects/my-project/locations/my-location/odbNetworks/my-odbNetwork',
     *       // Optional. An optional ID to identify the request. This value is used to identify duplicate requests. If you make a request with the same request ID and the original request is still in progress or completed, the server ignores the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
     *       requestId: 'placeholder-value',
     *
     *       // Request body metadata
     *       requestBody: {
     *         // request body parameters
     *         // {
     *         //   "cidrRange": "my_cidrRange",
     *         //   "createTime": "my_createTime",
     *         //   "labels": {},
     *         //   "name": "my_name",
     *         //   "purpose": "my_purpose",
     *         //   "state": "my_state"
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
    create(
      params: Params$Resource$Projects$Locations$Odbnetworks$Odbsubnets$Create,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    create(
      params?: Params$Resource$Projects$Locations$Odbnetworks$Odbsubnets$Create,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Operation>>;
    create(
      params: Params$Resource$Projects$Locations$Odbnetworks$Odbsubnets$Create,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    create(
      params: Params$Resource$Projects$Locations$Odbnetworks$Odbsubnets$Create,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    create(
      params: Params$Resource$Projects$Locations$Odbnetworks$Odbsubnets$Create,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    create(callback: BodyResponseCallback<Schema$Operation>): void;
    create(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Odbnetworks$Odbsubnets$Create
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
        {}) as Params$Resource$Projects$Locations$Odbnetworks$Odbsubnets$Create;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Odbnetworks$Odbsubnets$Create;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://oracledatabase.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}/odbSubnets').replace(
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
     * Deletes a single ODB Subnet.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/oracledatabase.googleapis.com
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
     * const oracledatabase = google.oracledatabase('v1');
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
     *     await oracledatabase.projects.locations.odbNetworks.odbSubnets.delete({
     *       // Required. The name of the resource in the following format: projects/{project\}/locations/{region\}/odbNetworks/{odb_network\}/odbSubnets/{odb_subnet\}.
     *       name: 'projects/my-project/locations/my-location/odbNetworks/my-odbNetwork/odbSubnets/my-odbSubnet',
     *       // Optional. An optional ID to identify the request. This value is used to identify duplicate requests. If you make a request with the same request ID and the original request is still in progress or completed, the server ignores the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
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
      params: Params$Resource$Projects$Locations$Odbnetworks$Odbsubnets$Delete,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    delete(
      params?: Params$Resource$Projects$Locations$Odbnetworks$Odbsubnets$Delete,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Operation>>;
    delete(
      params: Params$Resource$Projects$Locations$Odbnetworks$Odbsubnets$Delete,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    delete(
      params: Params$Resource$Projects$Locations$Odbnetworks$Odbsubnets$Delete,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    delete(
      params: Params$Resource$Projects$Locations$Odbnetworks$Odbsubnets$Delete,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    delete(callback: BodyResponseCallback<Schema$Operation>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Odbnetworks$Odbsubnets$Delete
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
        {}) as Params$Resource$Projects$Locations$Odbnetworks$Odbsubnets$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Odbnetworks$Odbsubnets$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://oracledatabase.googleapis.com/';
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
     * Gets details of a single ODB Subnet.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/oracledatabase.googleapis.com
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
     * const oracledatabase = google.oracledatabase('v1');
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
     *     await oracledatabase.projects.locations.odbNetworks.odbSubnets.get({
     *       // Required. The name of the OdbSubnet in the following format: projects/{project\}/locations/{location\}/odbNetworks/{odb_network\}/odbSubnets/{odb_subnet\}.
     *       name: 'projects/my-project/locations/my-location/odbNetworks/my-odbNetwork/odbSubnets/my-odbSubnet',
     *     });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "cidrRange": "my_cidrRange",
     *   //   "createTime": "my_createTime",
     *   //   "labels": {},
     *   //   "name": "my_name",
     *   //   "purpose": "my_purpose",
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
      params: Params$Resource$Projects$Locations$Odbnetworks$Odbsubnets$Get,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    get(
      params?: Params$Resource$Projects$Locations$Odbnetworks$Odbsubnets$Get,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$OdbSubnet>>;
    get(
      params: Params$Resource$Projects$Locations$Odbnetworks$Odbsubnets$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Odbnetworks$Odbsubnets$Get,
      options: MethodOptions | BodyResponseCallback<Schema$OdbSubnet>,
      callback: BodyResponseCallback<Schema$OdbSubnet>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Odbnetworks$Odbsubnets$Get,
      callback: BodyResponseCallback<Schema$OdbSubnet>
    ): void;
    get(callback: BodyResponseCallback<Schema$OdbSubnet>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Odbnetworks$Odbsubnets$Get
        | BodyResponseCallback<Schema$OdbSubnet>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$OdbSubnet>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$OdbSubnet>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$OdbSubnet>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Odbnetworks$Odbsubnets$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Odbnetworks$Odbsubnets$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://oracledatabase.googleapis.com/';
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
        createAPIRequest<Schema$OdbSubnet>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$OdbSubnet>(parameters);
      }
    }

    /**
     * Lists all the ODB Subnets in a given ODB Network.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/oracledatabase.googleapis.com
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
     * const oracledatabase = google.oracledatabase('v1');
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
     *     await oracledatabase.projects.locations.odbNetworks.odbSubnets.list({
     *       // Optional. An expression for filtering the results of the request.
     *       filter: 'placeholder-value',
     *       // Optional. An expression for ordering the results of the request.
     *       orderBy: 'placeholder-value',
     *       // Optional. The maximum number of items to return. If unspecified, at most 50 ODB Networks will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000.
     *       pageSize: 'placeholder-value',
     *       // Optional. A token identifying a page of results the server should return.
     *       pageToken: 'placeholder-value',
     *       // Required. The parent value for the OdbSubnet in the following format: projects/{project\}/locations/{location\}/odbNetworks/{odb_network\}.
     *       parent:
     *         'projects/my-project/locations/my-location/odbNetworks/my-odbNetwork',
     *     });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "nextPageToken": "my_nextPageToken",
     *   //   "odbSubnets": [],
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
      params: Params$Resource$Projects$Locations$Odbnetworks$Odbsubnets$List,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    list(
      params?: Params$Resource$Projects$Locations$Odbnetworks$Odbsubnets$List,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$ListOdbSubnetsResponse>>;
    list(
      params: Params$Resource$Projects$Locations$Odbnetworks$Odbsubnets$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Odbnetworks$Odbsubnets$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ListOdbSubnetsResponse>,
      callback: BodyResponseCallback<Schema$ListOdbSubnetsResponse>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Odbnetworks$Odbsubnets$List,
      callback: BodyResponseCallback<Schema$ListOdbSubnetsResponse>
    ): void;
    list(callback: BodyResponseCallback<Schema$ListOdbSubnetsResponse>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Odbnetworks$Odbsubnets$List
        | BodyResponseCallback<Schema$ListOdbSubnetsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ListOdbSubnetsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ListOdbSubnetsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$ListOdbSubnetsResponse>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Odbnetworks$Odbsubnets$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Odbnetworks$Odbsubnets$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://oracledatabase.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}/odbSubnets').replace(
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
        createAPIRequest<Schema$ListOdbSubnetsResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ListOdbSubnetsResponse>(parameters);
      }
    }
  }

  export interface Params$Resource$Projects$Locations$Odbnetworks$Odbsubnets$Create
    extends StandardParameters {
    /**
     * Required. The ID of the OdbSubnet to create. This value is restricted to (^[a-z]([a-z0-9-]{0,61\}[a-z0-9])?$) and must be a maximum of 63 characters in length. The value must start with a letter and end with a letter or a number.
     */
    odbSubnetId?: string;
    /**
     * Required. The parent value for the OdbSubnet in the following format: projects/{project\}/locations/{location\}/odbNetworks/{odb_network\}.
     */
    parent?: string;
    /**
     * Optional. An optional ID to identify the request. This value is used to identify duplicate requests. If you make a request with the same request ID and the original request is still in progress or completed, the server ignores the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
     */
    requestId?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$OdbSubnet;
  }
  export interface Params$Resource$Projects$Locations$Odbnetworks$Odbsubnets$Delete
    extends StandardParameters {
    /**
     * Required. The name of the resource in the following format: projects/{project\}/locations/{region\}/odbNetworks/{odb_network\}/odbSubnets/{odb_subnet\}.
     */
    name?: string;
    /**
     * Optional. An optional ID to identify the request. This value is used to identify duplicate requests. If you make a request with the same request ID and the original request is still in progress or completed, the server ignores the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
     */
    requestId?: string;
  }
  export interface Params$Resource$Projects$Locations$Odbnetworks$Odbsubnets$Get
    extends StandardParameters {
    /**
     * Required. The name of the OdbSubnet in the following format: projects/{project\}/locations/{location\}/odbNetworks/{odb_network\}/odbSubnets/{odb_subnet\}.
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Locations$Odbnetworks$Odbsubnets$List
    extends StandardParameters {
    /**
     * Optional. An expression for filtering the results of the request.
     */
    filter?: string;
    /**
     * Optional. An expression for ordering the results of the request.
     */
    orderBy?: string;
    /**
     * Optional. The maximum number of items to return. If unspecified, at most 50 ODB Networks will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000.
     */
    pageSize?: number;
    /**
     * Optional. A token identifying a page of results the server should return.
     */
    pageToken?: string;
    /**
     * Required. The parent value for the OdbSubnet in the following format: projects/{project\}/locations/{location\}/odbNetworks/{odb_network\}.
     */
    parent?: string;
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
     * //   https://console.developers.google.com/apis/api/oracledatabase.googleapis.com
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
     * const oracledatabase = google.oracledatabase('v1');
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
     *   const res = await oracledatabase.projects.locations.operations.cancel({
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
        options.rootUrl || 'https://oracledatabase.googleapis.com/';
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
     * //   https://console.developers.google.com/apis/api/oracledatabase.googleapis.com
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
     * const oracledatabase = google.oracledatabase('v1');
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
     *   const res = await oracledatabase.projects.locations.operations.delete({
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
        options.rootUrl || 'https://oracledatabase.googleapis.com/';
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
     * //   https://console.developers.google.com/apis/api/oracledatabase.googleapis.com
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
     * const oracledatabase = google.oracledatabase('v1');
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
     *   const res = await oracledatabase.projects.locations.operations.get({
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
        options.rootUrl || 'https://oracledatabase.googleapis.com/';
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
     * //   https://console.developers.google.com/apis/api/oracledatabase.googleapis.com
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
     * const oracledatabase = google.oracledatabase('v1');
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
     *   const res = await oracledatabase.projects.locations.operations.list({
     *     // The standard list filter.
     *     filter: 'placeholder-value',
     *     // The name of the operation's parent resource.
     *     name: 'projects/my-project/locations/my-location',
     *     // The standard list page size.
     *     pageSize: 'placeholder-value',
     *     // The standard list page token.
     *     pageToken: 'placeholder-value',
     *     // When set to `true`, operations that are reachable are returned as normal, and those that are unreachable are returned in the [ListOperationsResponse.unreachable] field. This can only be `true` when reading across collections e.g. when `parent` is set to `"projects/example/locations/-"`. This field is not by default supported and will result in an `UNIMPLEMENTED` error if set unless explicitly documented otherwise in service or product specific documentation.
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
        options.rootUrl || 'https://oracledatabase.googleapis.com/';
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
    /**
     * When set to `true`, operations that are reachable are returned as normal, and those that are unreachable are returned in the [ListOperationsResponse.unreachable] field. This can only be `true` when reading across collections e.g. when `parent` is set to `"projects/example/locations/-"`. This field is not by default supported and will result in an `UNIMPLEMENTED` error if set unless explicitly documented otherwise in service or product specific documentation.
     */
    returnPartialSuccess?: boolean;
  }

  export class Resource$Projects$Locations$Pluggabledatabases {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Gets details of a single PluggableDatabase.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/oracledatabase.googleapis.com
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
     * const oracledatabase = google.oracledatabase('v1');
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
     *   const res = await oracledatabase.projects.locations.pluggableDatabases.get({
     *     // Required. The name of the PluggableDatabase resource in the following format: projects/{project\}/locations/{region\}/pluggableDatabases/{pluggable_database\}
     *     name: 'projects/my-project/locations/my-location/pluggableDatabases/my-pluggableDatabase',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "createTime": "my_createTime",
     *   //   "name": "my_name",
     *   //   "ociUrl": "my_ociUrl",
     *   //   "properties": {}
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
      params: Params$Resource$Projects$Locations$Pluggabledatabases$Get,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    get(
      params?: Params$Resource$Projects$Locations$Pluggabledatabases$Get,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$PluggableDatabase>>;
    get(
      params: Params$Resource$Projects$Locations$Pluggabledatabases$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Pluggabledatabases$Get,
      options: MethodOptions | BodyResponseCallback<Schema$PluggableDatabase>,
      callback: BodyResponseCallback<Schema$PluggableDatabase>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Pluggabledatabases$Get,
      callback: BodyResponseCallback<Schema$PluggableDatabase>
    ): void;
    get(callback: BodyResponseCallback<Schema$PluggableDatabase>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Pluggabledatabases$Get
        | BodyResponseCallback<Schema$PluggableDatabase>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$PluggableDatabase>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$PluggableDatabase>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$PluggableDatabase>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Pluggabledatabases$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Pluggabledatabases$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://oracledatabase.googleapis.com/';
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
        createAPIRequest<Schema$PluggableDatabase>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$PluggableDatabase>(parameters);
      }
    }

    /**
     * Lists all the PluggableDatabases for the given project, location and Container Database.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/oracledatabase.googleapis.com
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
     * const oracledatabase = google.oracledatabase('v1');
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
     *   const res = await oracledatabase.projects.locations.pluggableDatabases.list({
     *     // Optional. An expression for filtering the results of the request. List for pluggable databases is supported only with a valid container database (full resource name) filter in this format: `database="projects/{project\}/locations/{location\}/databases/{database\}"`
     *     filter: 'placeholder-value',
     *     // Optional. The maximum number of PluggableDatabases to return. The service may return fewer than this value.
     *     pageSize: 'placeholder-value',
     *     // Optional. A page token, received from a previous `ListPluggableDatabases` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListPluggableDatabases` must match the call that provided the page token.
     *     pageToken: 'placeholder-value',
     *     // Required. The parent, which owns this collection of PluggableDatabases. Format: projects/{project\}/locations/{location\}
     *     parent: 'projects/my-project/locations/my-location',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "nextPageToken": "my_nextPageToken",
     *   //   "pluggableDatabases": []
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
      params: Params$Resource$Projects$Locations$Pluggabledatabases$List,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    list(
      params?: Params$Resource$Projects$Locations$Pluggabledatabases$List,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$ListPluggableDatabasesResponse>>;
    list(
      params: Params$Resource$Projects$Locations$Pluggabledatabases$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Pluggabledatabases$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ListPluggableDatabasesResponse>,
      callback: BodyResponseCallback<Schema$ListPluggableDatabasesResponse>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Pluggabledatabases$List,
      callback: BodyResponseCallback<Schema$ListPluggableDatabasesResponse>
    ): void;
    list(
      callback: BodyResponseCallback<Schema$ListPluggableDatabasesResponse>
    ): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Pluggabledatabases$List
        | BodyResponseCallback<Schema$ListPluggableDatabasesResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ListPluggableDatabasesResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ListPluggableDatabasesResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$ListPluggableDatabasesResponse>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Pluggabledatabases$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Pluggabledatabases$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://oracledatabase.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}/pluggableDatabases').replace(
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
        createAPIRequest<Schema$ListPluggableDatabasesResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ListPluggableDatabasesResponse>(
          parameters
        );
      }
    }
  }

  export interface Params$Resource$Projects$Locations$Pluggabledatabases$Get
    extends StandardParameters {
    /**
     * Required. The name of the PluggableDatabase resource in the following format: projects/{project\}/locations/{region\}/pluggableDatabases/{pluggable_database\}
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Locations$Pluggabledatabases$List
    extends StandardParameters {
    /**
     * Optional. An expression for filtering the results of the request. List for pluggable databases is supported only with a valid container database (full resource name) filter in this format: `database="projects/{project\}/locations/{location\}/databases/{database\}"`
     */
    filter?: string;
    /**
     * Optional. The maximum number of PluggableDatabases to return. The service may return fewer than this value.
     */
    pageSize?: number;
    /**
     * Optional. A page token, received from a previous `ListPluggableDatabases` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListPluggableDatabases` must match the call that provided the page token.
     */
    pageToken?: string;
    /**
     * Required. The parent, which owns this collection of PluggableDatabases. Format: projects/{project\}/locations/{location\}
     */
    parent?: string;
  }
}
