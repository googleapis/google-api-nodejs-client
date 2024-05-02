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

export namespace sqladmin_v1beta4 {
  export interface Options extends GlobalOptions {
    version: 'v1beta4';
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
   * Cloud SQL Admin API
   *
   * API for Cloud SQL database instance management
   *
   * @example
   * ```js
   * const {google} = require('googleapis');
   * const sqladmin = google.sqladmin('v1beta4');
   * ```
   */
  export class Sqladmin {
    context: APIRequestContext;
    backupRuns: Resource$Backupruns;
    connect: Resource$Connect;
    databases: Resource$Databases;
    flags: Resource$Flags;
    instances: Resource$Instances;
    operations: Resource$Operations;
    projects: Resource$Projects;
    sslCerts: Resource$Sslcerts;
    tiers: Resource$Tiers;
    users: Resource$Users;

    constructor(options: GlobalOptions, google?: GoogleConfigurable) {
      this.context = {
        _options: options || {},
        google,
      };

      this.backupRuns = new Resource$Backupruns(this.context);
      this.connect = new Resource$Connect(this.context);
      this.databases = new Resource$Databases(this.context);
      this.flags = new Resource$Flags(this.context);
      this.instances = new Resource$Instances(this.context);
      this.operations = new Resource$Operations(this.context);
      this.projects = new Resource$Projects(this.context);
      this.sslCerts = new Resource$Sslcerts(this.context);
      this.tiers = new Resource$Tiers(this.context);
      this.users = new Resource$Users(this.context);
    }
  }

  /**
   * An entry for an Access Control list.
   */
  export interface Schema$AclEntry {
    /**
     * The time when this access control entry expires in [RFC 3339](https://tools.ietf.org/html/rfc3339) format, for example `2012-11-15T16:19:00.094Z`.
     */
    expirationTime?: string | null;
    /**
     * This is always `sql#aclEntry`.
     */
    kind?: string | null;
    /**
     * Optional. A label to identify this entry.
     */
    name?: string | null;
    /**
     * The allowlisted value for the access control list.
     */
    value?: string | null;
  }
  /**
   * Acquire SSRS lease context.
   */
  export interface Schema$AcquireSsrsLeaseContext {
    /**
     * Lease duration needed for the SSRS setup.
     */
    duration?: string | null;
    /**
     * The report database to be used for the SSRS setup.
     */
    reportDatabase?: string | null;
    /**
     * The username to be used as the service login to connect to the report database for SSRS setup.
     */
    serviceLogin?: string | null;
    /**
     * The username to be used as the setup login to connect to the database server for SSRS setup.
     */
    setupLogin?: string | null;
  }
  /**
   * Specifies options for controlling advanced machine features.
   */
  export interface Schema$AdvancedMachineFeatures {
    /**
     * The number of threads per physical core.
     */
    threadsPerCore?: number | null;
  }
  /**
   * An Admin API warning message.
   */
  export interface Schema$ApiWarning {
    /**
     * Code to uniquely identify the warning type.
     */
    code?: string | null;
    /**
     * The warning message.
     */
    message?: string | null;
    /**
     * The region name for REGION_UNREACHABLE warning.
     */
    region?: string | null;
  }
  /**
   * Database instance backup configuration.
   */
  export interface Schema$BackupConfiguration {
    /**
     * Backup retention settings.
     */
    backupRetentionSettings?: Schema$BackupRetentionSettings;
    /**
     * (MySQL only) Whether binary log is enabled. If backup configuration is disabled, binarylog must be disabled as well.
     */
    binaryLogEnabled?: boolean | null;
    /**
     * Whether this configuration is enabled.
     */
    enabled?: boolean | null;
    /**
     * This is always `sql#backupConfiguration`.
     */
    kind?: string | null;
    /**
     * Location of the backup
     */
    location?: string | null;
    /**
     * Whether point in time recovery is enabled.
     */
    pointInTimeRecoveryEnabled?: boolean | null;
    /**
     * Reserved for future use.
     */
    replicationLogArchivingEnabled?: boolean | null;
    /**
     * Start time for the daily backup configuration in UTC timezone in the 24 hour format - `HH:MM`.
     */
    startTime?: string | null;
    /**
     * Output only. This value contains the storage location of transactional logs for the database for point-in-time recovery.
     */
    transactionalLogStorageState?: string | null;
    /**
     * The number of days of transaction logs we retain for point in time restore, from 1-7.
     */
    transactionLogRetentionDays?: number | null;
  }
  /**
   * Backup context.
   */
  export interface Schema$BackupContext {
    /**
     * The identifier of the backup.
     */
    backupId?: string | null;
    /**
     * This is always `sql#backupContext`.
     */
    kind?: string | null;
  }
  /**
   * Backup Reencryption Config
   */
  export interface Schema$BackupReencryptionConfig {
    /**
     * Backup re-encryption limit
     */
    backupLimit?: number | null;
    /**
     * Type of backups users want to re-encrypt.
     */
    backupType?: string | null;
  }
  /**
   * We currently only support backup retention by specifying the number of backups we will retain.
   */
  export interface Schema$BackupRetentionSettings {
    /**
     * Depending on the value of retention_unit, this is used to determine if a backup needs to be deleted. If retention_unit is 'COUNT', we will retain this many backups.
     */
    retainedBackups?: number | null;
    /**
     * The unit that 'retained_backups' represents.
     */
    retentionUnit?: string | null;
  }
  /**
   * A BackupRun resource.
   */
  export interface Schema$BackupRun {
    /**
     * Specifies the kind of backup, PHYSICAL or DEFAULT_SNAPSHOT.
     */
    backupKind?: string | null;
    /**
     * The description of this run, only applicable to on-demand backups.
     */
    description?: string | null;
    /**
     * Encryption configuration specific to a backup.
     */
    diskEncryptionConfiguration?: Schema$DiskEncryptionConfiguration;
    /**
     * Encryption status specific to a backup.
     */
    diskEncryptionStatus?: Schema$DiskEncryptionStatus;
    /**
     * The time the backup operation completed in UTC timezone in [RFC 3339](https://tools.ietf.org/html/rfc3339) format, for example `2012-11-15T16:19:00.094Z`.
     */
    endTime?: string | null;
    /**
     * The time the run was enqueued in UTC timezone in [RFC 3339](https://tools.ietf.org/html/rfc3339) format, for example `2012-11-15T16:19:00.094Z`.
     */
    enqueuedTime?: string | null;
    /**
     * Information about why the backup operation failed. This is only present if the run has the FAILED status.
     */
    error?: Schema$OperationError;
    /**
     * The identifier for this backup run. Unique only for a specific Cloud SQL instance.
     */
    id?: string | null;
    /**
     * Name of the database instance.
     */
    instance?: string | null;
    /**
     * This is always `sql#backupRun`.
     */
    kind?: string | null;
    /**
     * Location of the backups.
     */
    location?: string | null;
    /**
     * The URI of this resource.
     */
    selfLink?: string | null;
    /**
     * The time the backup operation actually started in UTC timezone in [RFC 3339](https://tools.ietf.org/html/rfc3339) format, for example `2012-11-15T16:19:00.094Z`.
     */
    startTime?: string | null;
    /**
     * The status of this run.
     */
    status?: string | null;
    /**
     * Backup time zone to prevent restores to an instance with a different time zone. Now relevant only for SQL Server.
     */
    timeZone?: string | null;
    /**
     * The type of this run; can be either "AUTOMATED" or "ON_DEMAND" or "FINAL". This field defaults to "ON_DEMAND" and is ignored, when specified for insert requests.
     */
    type?: string | null;
    /**
     * The start time of the backup window during which this the backup was attempted in [RFC 3339](https://tools.ietf.org/html/rfc3339) format, for example `2012-11-15T16:19:00.094Z`.
     */
    windowStartTime?: string | null;
  }
  /**
   * Backup run list results.
   */
  export interface Schema$BackupRunsListResponse {
    /**
     * A list of backup runs in reverse chronological order of the enqueued time.
     */
    items?: Schema$BackupRun[];
    /**
     * This is always `sql#backupRunsList`.
     */
    kind?: string | null;
    /**
     * The continuation token, used to page through large result sets. Provide this value in a subsequent request to return the next page of results.
     */
    nextPageToken?: string | null;
  }
  /**
   * Binary log coordinates.
   */
  export interface Schema$BinLogCoordinates {
    /**
     * Name of the binary log file for a Cloud SQL instance.
     */
    binLogFileName?: string | null;
    /**
     * Position (offset) within the binary log file.
     */
    binLogPosition?: string | null;
    /**
     * This is always `sql#binLogCoordinates`.
     */
    kind?: string | null;
  }
  /**
   * Database instance clone context.
   */
  export interface Schema$CloneContext {
    /**
     * The name of the allocated ip range for the private ip Cloud SQL instance. For example: "google-managed-services-default". If set, the cloned instance ip will be created in the allocated range. The range name must comply with [RFC 1035](https://tools.ietf.org/html/rfc1035). Specifically, the name must be 1-63 characters long and match the regular expression [a-z]([-a-z0-9]*[a-z0-9])?. Reserved for future use.
     */
    allocatedIpRange?: string | null;
    /**
     * Binary log coordinates, if specified, identify the position up to which the source instance is cloned. If not specified, the source instance is cloned up to the most recent binary log coordinates.
     */
    binLogCoordinates?: Schema$BinLogCoordinates;
    /**
     * (SQL Server only) Clone only the specified databases from the source instance. Clone all databases if empty.
     */
    databaseNames?: string[] | null;
    /**
     * Name of the Cloud SQL instance to be created as a clone.
     */
    destinationInstanceName?: string | null;
    /**
     * This is always `sql#cloneContext`.
     */
    kind?: string | null;
    /**
     * Reserved for future use.
     */
    pitrTimestampMs?: string | null;
    /**
     * Timestamp, if specified, identifies the time to which the source instance is cloned.
     */
    pointInTime?: string | null;
    /**
     * Optional. (Point-in-time recovery for PostgreSQL only) Clone to an instance in the specified zone. If no zone is specified, clone to the same zone as the source instance.
     */
    preferredZone?: string | null;
  }
  /**
   * Connect settings retrieval response.
   */
  export interface Schema$ConnectSettings {
    /**
     * `SECOND_GEN`: Cloud SQL database instance. `EXTERNAL`: A database server that is not managed by Google. This property is read-only; use the `tier` property in the `settings` object to determine the database type.
     */
    backendType?: string | null;
    /**
     * The database engine type and version. The `databaseVersion` field cannot be changed after instance creation. MySQL instances: `MYSQL_8_0`, `MYSQL_5_7` (default), or `MYSQL_5_6`. PostgreSQL instances: `POSTGRES_9_6`, `POSTGRES_10`, `POSTGRES_11` or `POSTGRES_12` (default), `POSTGRES_13`, or `POSTGRES_14`. SQL Server instances: `SQLSERVER_2017_STANDARD` (default), `SQLSERVER_2017_ENTERPRISE`, `SQLSERVER_2017_EXPRESS`, `SQLSERVER_2017_WEB`, `SQLSERVER_2019_STANDARD`, `SQLSERVER_2019_ENTERPRISE`, `SQLSERVER_2019_EXPRESS`, or `SQLSERVER_2019_WEB`.
     */
    databaseVersion?: string | null;
    /**
     * The dns name of the instance.
     */
    dnsName?: string | null;
    /**
     * The assigned IP addresses for the instance.
     */
    ipAddresses?: Schema$IpMapping[];
    /**
     * This is always `sql#connectSettings`.
     */
    kind?: string | null;
    /**
     * Whether PSC connectivity is enabled for this instance.
     */
    pscEnabled?: boolean | null;
    /**
     * The cloud region for the instance. e.g. `us-central1`, `europe-west1`. The region cannot be changed after instance creation.
     */
    region?: string | null;
    /**
     * SSL configuration.
     */
    serverCaCert?: Schema$SslCert;
  }
  /**
   * Represents a SQL database on the Cloud SQL instance.
   */
  export interface Schema$Database {
    /**
     * The Cloud SQL charset value.
     */
    charset?: string | null;
    /**
     * The Cloud SQL collation value.
     */
    collation?: string | null;
    /**
     * This field is deprecated and will be removed from a future version of the API.
     */
    etag?: string | null;
    /**
     * The name of the Cloud SQL instance. This does not include the project ID.
     */
    instance?: string | null;
    /**
     * This is always `sql#database`.
     */
    kind?: string | null;
    /**
     * The name of the database in the Cloud SQL instance. This does not include the project ID or instance name.
     */
    name?: string | null;
    /**
     * The project ID of the project containing the Cloud SQL database. The Google apps domain is prefixed if applicable.
     */
    project?: string | null;
    /**
     * The URI of this resource.
     */
    selfLink?: string | null;
    sqlserverDatabaseDetails?: Schema$SqlServerDatabaseDetails;
  }
  /**
   * Database flags for Cloud SQL instances.
   */
  export interface Schema$DatabaseFlags {
    /**
     * The name of the flag. These flags are passed at instance startup, so include both server options and system variables. Flags are specified with underscores, not hyphens. For more information, see [Configuring Database Flags](https://cloud.google.com/sql/docs/mysql/flags) in the Cloud SQL documentation.
     */
    name?: string | null;
    /**
     * The value of the flag. Boolean flags are set to `on` for true and `off` for false. This field must be omitted if the flag doesn't take a value.
     */
    value?: string | null;
  }
  /**
   * A Cloud SQL instance resource.
   */
  export interface Schema$DatabaseInstance {
    /**
     * Output only. List all maintenance versions applicable on the instance
     */
    availableMaintenanceVersions?: string[] | null;
    /**
     * The backend type. `SECOND_GEN`: Cloud SQL database instance. `EXTERNAL`: A database server that is not managed by Google. This property is read-only; use the `tier` property in the `settings` object to determine the database type.
     */
    backendType?: string | null;
    /**
     * Connection name of the Cloud SQL instance used in connection strings.
     */
    connectionName?: string | null;
    /**
     * Output only. The time when the instance was created in [RFC 3339](https://tools.ietf.org/html/rfc3339) format, for example `2012-11-15T16:19:00.094Z`.
     */
    createTime?: string | null;
    /**
     * The current disk usage of the instance in bytes. This property has been deprecated. Use the "cloudsql.googleapis.com/database/disk/bytes_used" metric in Cloud Monitoring API instead. Please see [this announcement](https://groups.google.com/d/msg/google-cloud-sql-announce/I_7-F9EBhT0/BtvFtdFeAgAJ) for details.
     */
    currentDiskSize?: string | null;
    /**
     * Output only. Stores the current database version running on the instance including minor version such as `MYSQL_8_0_18`.
     */
    databaseInstalledVersion?: string | null;
    /**
     * The database engine type and version. The `databaseVersion` field cannot be changed after instance creation.
     */
    databaseVersion?: string | null;
    /**
     * Disk encryption configuration specific to an instance.
     */
    diskEncryptionConfiguration?: Schema$DiskEncryptionConfiguration;
    /**
     * Disk encryption status specific to an instance.
     */
    diskEncryptionStatus?: Schema$DiskEncryptionStatus;
    /**
     * Output only. The dns name of the instance.
     */
    dnsName?: string | null;
    /**
     * This field is deprecated and will be removed from a future version of the API. Use the `settings.settingsVersion` field instead.
     */
    etag?: string | null;
    /**
     * The name and status of the failover replica.
     */
    failoverReplica?: {available?: boolean; name?: string} | null;
    /**
     * The Compute Engine zone that the instance is currently serving from. This value could be different from the zone that was specified when the instance was created if the instance has failed over to its secondary zone. WARNING: Changing this might restart the instance.
     */
    gceZone?: string | null;
    /**
     * Gemini instance configuration.
     */
    geminiConfig?: Schema$GeminiInstanceConfig;
    /**
     * The instance type.
     */
    instanceType?: string | null;
    /**
     * The assigned IP addresses for the instance.
     */
    ipAddresses?: Schema$IpMapping[];
    /**
     * The IPv6 address assigned to the instance. (Deprecated) This property was applicable only to First Generation instances.
     */
    ipv6Address?: string | null;
    /**
     * This is always `sql#instance`.
     */
    kind?: string | null;
    /**
     * The current software version on the instance.
     */
    maintenanceVersion?: string | null;
    /**
     * The name of the instance which will act as primary in the replication setup.
     */
    masterInstanceName?: string | null;
    /**
     * The maximum disk size of the instance in bytes.
     */
    maxDiskSize?: string | null;
    /**
     * Name of the Cloud SQL instance. This does not include the project ID.
     */
    name?: string | null;
    /**
     * Configuration specific to on-premises instances.
     */
    onPremisesConfiguration?: Schema$OnPremisesConfiguration;
    /**
     * This field represents the report generated by the proactive database wellness job for OutOfDisk issues. * Writers: * the proactive database wellness job for OOD. * Readers: * the proactive database wellness job
     */
    outOfDiskReport?: Schema$SqlOutOfDiskReport;
    /**
     * Output only. DEPRECATED: please use write_endpoint instead.
     */
    primaryDnsName?: string | null;
    /**
     * The project ID of the project containing the Cloud SQL instance. The Google apps domain is prefixed if applicable.
     */
    project?: string | null;
    /**
     * Output only. The link to service attachment of PSC instance.
     */
    pscServiceAttachmentLink?: string | null;
    /**
     * The geographical region of the Cloud SQL instance. It can be one of the [regions](https://cloud.google.com/sql/docs/mysql/locations#location-r) where Cloud SQL operates: For example, `asia-east1`, `europe-west1`, and `us-central1`. The default value is `us-central1`.
     */
    region?: string | null;
    /**
     * Configuration specific to failover replicas and read replicas.
     */
    replicaConfiguration?: Schema$ReplicaConfiguration;
    /**
     * The replicas of the instance.
     */
    replicaNames?: string[] | null;
    /**
     * The pair of a primary instance and disaster recovery (DR) replica. A DR replica is a cross-region replica that you designate for failover in the event that the primary instance has regional failure.
     */
    replicationCluster?: Schema$ReplicationCluster;
    /**
     * Initial root password. Use only on creation. You must set root passwords before you can connect to PostgreSQL instances.
     */
    rootPassword?: string | null;
    /**
     * The status indicating if instance satisfiesPzs. Reserved for future use.
     */
    satisfiesPzs?: boolean | null;
    /**
     * The start time of any upcoming scheduled maintenance for this instance.
     */
    scheduledMaintenance?: Schema$SqlScheduledMaintenance;
    /**
     * The Compute Engine zone that the failover instance is currently serving from for a regional instance. This value could be different from the zone that was specified when the instance was created if the instance has failed over to its secondary/failover zone.
     */
    secondaryGceZone?: string | null;
    /**
     * The URI of this resource.
     */
    selfLink?: string | null;
    /**
     * SSL configuration.
     */
    serverCaCert?: Schema$SslCert;
    /**
     * The service account email address assigned to the instance. \This property is read-only.
     */
    serviceAccountEmailAddress?: string | null;
    /**
     * The user settings.
     */
    settings?: Schema$Settings;
    /**
     * The SQL network architecture for the instance.
     */
    sqlNetworkArchitecture?: string | null;
    /**
     * The current serving state of the Cloud SQL instance.
     */
    state?: string | null;
    /**
     * If the instance state is SUSPENDED, the reason for the suspension.
     */
    suspensionReason?: string[] | null;
    /**
     * Output only. The dns name of the primary instance in a replication group.
     */
    writeEndpoint?: string | null;
  }
  /**
   * Database list response.
   */
  export interface Schema$DatabasesListResponse {
    /**
     * List of database resources in the instance.
     */
    items?: Schema$Database[];
    /**
     * This is always `sql#databasesList`.
     */
    kind?: string | null;
  }
  /**
   * Data cache configurations.
   */
  export interface Schema$DataCacheConfig {
    /**
     * Whether data cache is enabled for the instance.
     */
    dataCacheEnabled?: boolean | null;
  }
  /**
   * This context is used to demote an existing standalone instance to be a Cloud SQL read replica for an external database server.
   */
  export interface Schema$DemoteContext {
    /**
     * This is always `sql#demoteContext`.
     */
    kind?: string | null;
    /**
     * Required. The name of the instance which acts as an on-premises primary instance in the replication setup.
     */
    sourceRepresentativeInstanceName?: string | null;
  }
  /**
   * Read-replica configuration for connecting to the on-premises primary instance.
   */
  export interface Schema$DemoteMasterConfiguration {
    /**
     * This is always `sql#demoteMasterConfiguration`.
     */
    kind?: string | null;
    /**
     * MySQL specific configuration when replicating from a MySQL on-premises primary instance. Replication configuration information such as the username, password, certificates, and keys are not stored in the instance metadata. The configuration information is used only to set up the replication connection and is stored by MySQL in a file named `master.info` in the data directory.
     */
    mysqlReplicaConfiguration?: Schema$DemoteMasterMySqlReplicaConfiguration;
  }
  /**
   * Database instance demote primary instance context.
   */
  export interface Schema$DemoteMasterContext {
    /**
     * This is always `sql#demoteMasterContext`.
     */
    kind?: string | null;
    /**
     * The name of the instance which will act as on-premises primary instance in the replication setup.
     */
    masterInstanceName?: string | null;
    /**
     * Configuration specific to read-replicas replicating from the on-premises primary instance.
     */
    replicaConfiguration?: Schema$DemoteMasterConfiguration;
    /**
     * Flag to skip replication setup on the instance.
     */
    skipReplicationSetup?: boolean | null;
    /**
     * Verify the GTID consistency for demote operation. Default value: `True`. Setting this flag to `false` enables you to bypass the GTID consistency check between on-premises primary instance and Cloud SQL instance during the demotion operation but also exposes you to the risk of future replication failures. Change the value only if you know the reason for the GTID divergence and are confident that doing so will not cause any replication issues.
     */
    verifyGtidConsistency?: boolean | null;
  }
  /**
   * Read-replica configuration specific to MySQL databases.
   */
  export interface Schema$DemoteMasterMySqlReplicaConfiguration {
    /**
     * PEM representation of the trusted CA's x509 certificate.
     */
    caCertificate?: string | null;
    /**
     * PEM representation of the replica's x509 certificate.
     */
    clientCertificate?: string | null;
    /**
     * PEM representation of the replica's private key. The corresponsing public key is encoded in the client's certificate. The format of the replica's private key can be either PKCS #1 or PKCS #8.
     */
    clientKey?: string | null;
    /**
     * This is always `sql#demoteMasterMysqlReplicaConfiguration`.
     */
    kind?: string | null;
    /**
     * The password for the replication connection.
     */
    password?: string | null;
    /**
     * The username for the replication connection.
     */
    username?: string | null;
  }
  /**
   * Deny Maintenance Periods. This specifies a date range during when all CSA rollout will be denied.
   */
  export interface Schema$DenyMaintenancePeriod {
    /**
     * "deny maintenance period" end date. If the year of the end date is empty, the year of the start date also must be empty. In this case, it means the deny maintenance period recurs every year. The date is in format yyyy-mm-dd i.e., 2020-11-01, or mm-dd, i.e., 11-01
     */
    endDate?: string | null;
    /**
     * "deny maintenance period" start date. If the year of the start date is empty, the year of the end date also must be empty. In this case, it means the deny maintenance period recurs every year. The date is in format yyyy-mm-dd i.e., 2020-11-01, or mm-dd, i.e., 11-01
     */
    startDate?: string | null;
    /**
     * Time in UTC when the "deny maintenance period" starts on start_date and ends on end_date. The time is in format: HH:mm:SS, i.e., 00:00:00
     */
    time?: string | null;
  }
  /**
   * Disk encryption configuration for an instance.
   */
  export interface Schema$DiskEncryptionConfiguration {
    /**
     * This is always `sql#diskEncryptionConfiguration`.
     */
    kind?: string | null;
    /**
     * Resource name of KMS key for disk encryption
     */
    kmsKeyName?: string | null;
  }
  /**
   * Disk encryption status for an instance.
   */
  export interface Schema$DiskEncryptionStatus {
    /**
     * This is always `sql#diskEncryptionStatus`.
     */
    kind?: string | null;
    /**
     * KMS key version used to encrypt the Cloud SQL instance resource
     */
    kmsKeyVersionName?: string | null;
  }
  /**
   * A generic empty message that you can re-use to avoid defining duplicated empty messages in your APIs. A typical example is to use it as the request or the response type of an API method. For instance: service Foo { rpc Bar(google.protobuf.Empty) returns (google.protobuf.Empty); \}
   */
  export interface Schema$Empty {}
  /**
   * Database instance export context.
   */
  export interface Schema$ExportContext {
    /**
     * Options for exporting BAK files (SQL Server-only)
     */
    bakExportOptions?: {
      bakType?: string;
      copyOnly?: boolean;
      differentialBase?: boolean;
      stripeCount?: number;
      striped?: boolean;
    } | null;
    /**
     * Options for exporting data as CSV. `MySQL` and `PostgreSQL` instances only.
     */
    csvExportOptions?: {
      escapeCharacter?: string;
      fieldsTerminatedBy?: string;
      linesTerminatedBy?: string;
      quoteCharacter?: string;
      selectQuery?: string;
    } | null;
    /**
     * Databases to be exported. `MySQL instances:` If `fileType` is `SQL` and no database is specified, all databases are exported, except for the `mysql` system database. If `fileType` is `CSV`, you can specify one database, either by using this property or by using the `csvExportOptions.selectQuery` property, which takes precedence over this property. `PostgreSQL instances:` You must specify one database to be exported. If `fileType` is `CSV`, this database must match the one specified in the `csvExportOptions.selectQuery` property. `SQL Server instances:` You must specify one database to be exported, and the `fileType` must be `BAK`.
     */
    databases?: string[] | null;
    /**
     * The file type for the specified uri.
     */
    fileType?: string | null;
    /**
     * This is always `sql#exportContext`.
     */
    kind?: string | null;
    /**
     * Option for export offload.
     */
    offload?: boolean | null;
    /**
     * Options for exporting data as SQL statements.
     */
    sqlExportOptions?: {
      mysqlExportOptions?: {masterData?: number};
      parallel?: boolean;
      schemaOnly?: boolean;
      tables?: string[];
      threads?: number;
    } | null;
    /**
     * The path to the file in Google Cloud Storage where the export will be stored. The URI is in the form `gs://bucketName/fileName`. If the file already exists, the request succeeds, but the operation fails. If `fileType` is `SQL` and the filename ends with .gz, the contents are compressed.
     */
    uri?: string | null;
  }
  /**
   * Database instance failover context.
   */
  export interface Schema$FailoverContext {
    /**
     * This is always `sql#failoverContext`.
     */
    kind?: string | null;
    /**
     * The current settings version of this instance. Request will be rejected if this version doesn't match the current settings version.
     */
    settingsVersion?: string | null;
  }
  /**
   * A flag resource.
   */
  export interface Schema$Flag {
    /**
     * Use this field if only certain integers are accepted. Can be combined with min_value and max_value to add additional values.
     */
    allowedIntValues?: string[] | null;
    /**
     * For `STRING` flags, a list of strings that the value can be set to.
     */
    allowedStringValues?: string[] | null;
    /**
     * The database version this flag applies to. Can be MySQL instances: `MYSQL_8_0`, `MYSQL_8_0_18`, `MYSQL_8_0_26`, `MYSQL_5_7`, or `MYSQL_5_6`. PostgreSQL instances: `POSTGRES_9_6`, `POSTGRES_10`, `POSTGRES_11` or `POSTGRES_12`. SQL Server instances: `SQLSERVER_2017_STANDARD`, `SQLSERVER_2017_ENTERPRISE`, `SQLSERVER_2017_EXPRESS`, `SQLSERVER_2017_WEB`, `SQLSERVER_2019_STANDARD`, `SQLSERVER_2019_ENTERPRISE`, `SQLSERVER_2019_EXPRESS`, or `SQLSERVER_2019_WEB`. See [the complete list](/sql/docs/mysql/admin-api/rest/v1/SqlDatabaseVersion).
     */
    appliesTo?: string[] | null;
    /**
     * Whether or not the flag is considered in beta.
     */
    inBeta?: boolean | null;
    /**
     * This is always `sql#flag`.
     */
    kind?: string | null;
    /**
     * For `INTEGER` flags, the maximum allowed value.
     */
    maxValue?: string | null;
    /**
     * For `INTEGER` flags, the minimum allowed value.
     */
    minValue?: string | null;
    /**
     * This is the name of the flag. Flag names always use underscores, not hyphens, for example: `max_allowed_packet`
     */
    name?: string | null;
    /**
     * Indicates whether changing this flag will trigger a database restart. Only applicable to Second Generation instances.
     */
    requiresRestart?: boolean | null;
    /**
     * The type of the flag. Flags are typed to being `BOOLEAN`, `STRING`, `INTEGER` or `NONE`. `NONE` is used for flags which do not take a value, such as `skip_grant_tables`.
     */
    type?: string | null;
  }
  /**
   * Flags list response.
   */
  export interface Schema$FlagsListResponse {
    /**
     * List of flags.
     */
    items?: Schema$Flag[];
    /**
     * This is always `sql#flagsList`.
     */
    kind?: string | null;
  }
  /**
   * Gemini configuration.
   */
  export interface Schema$GeminiInstanceConfig {
    /**
     * Output only. Whether active query is enabled.
     */
    activeQueryEnabled?: boolean | null;
    /**
     * Output only. Whether Gemini is enabled.
     */
    entitled?: boolean | null;
    /**
     * Output only. Whether flag recommender is enabled.
     */
    flagRecommenderEnabled?: boolean | null;
    /**
     * Output only. Whether vacuum management is enabled.
     */
    googleVacuumMgmtEnabled?: boolean | null;
    /**
     * Output only. Whether index advisor is enabled.
     */
    indexAdvisorEnabled?: boolean | null;
    /**
     * Output only. Whether oom session cancel is enabled.
     */
    oomSessionCancelEnabled?: boolean | null;
  }
  /**
   * Ephemeral certificate creation request.
   */
  export interface Schema$GenerateEphemeralCertRequest {
    /**
     * Optional. Access token to include in the signed certificate.
     */
    access_token?: string | null;
    /**
     * PEM encoded public key to include in the signed certificate.
     */
    public_key?: string | null;
    /**
     * Optional. Optional snapshot read timestamp to trade freshness for performance.
     */
    readTime?: string | null;
    /**
     * Optional. If set, it will contain the cert valid duration.
     */
    validDuration?: string | null;
  }
  /**
   * Ephemeral certificate creation request.
   */
  export interface Schema$GenerateEphemeralCertResponse {
    /**
     * Generated cert
     */
    ephemeralCert?: Schema$SslCert;
  }
  /**
   * Database instance import context.
   */
  export interface Schema$ImportContext {
    /**
     * Import parameters specific to SQL Server .BAK files
     */
    bakImportOptions?: {
      bakType?: string;
      encryptionOptions?: {
        certPath?: string;
        pvkPassword?: string;
        pvkPath?: string;
      };
      noRecovery?: boolean;
      recoveryOnly?: boolean;
      stopAt?: string;
      stopAtMark?: string;
      striped?: boolean;
    } | null;
    /**
     * Options for importing data as CSV.
     */
    csvImportOptions?: {
      columns?: string[];
      escapeCharacter?: string;
      fieldsTerminatedBy?: string;
      linesTerminatedBy?: string;
      quoteCharacter?: string;
      table?: string;
    } | null;
    /**
     * The target database for the import. If `fileType` is `SQL`, this field is required only if the import file does not specify a database, and is overridden by any database specification in the import file. If `fileType` is `CSV`, one database must be specified.
     */
    database?: string | null;
    /**
     * The file type for the specified uri. * `SQL`: The file contains SQL statements. * `CSV`: The file contains CSV data. * `BAK`: The file contains backup data for a SQL Server instance.
     */
    fileType?: string | null;
    /**
     * The PostgreSQL user for this import operation. PostgreSQL instances only.
     */
    importUser?: string | null;
    /**
     * This is always `sql#importContext`.
     */
    kind?: string | null;
    /**
     * Optional. Options for importing data from SQL statements.
     */
    sqlImportOptions?: {parallel?: boolean; threads?: number} | null;
    /**
     * Path to the import file in Cloud Storage, in the form `gs://bucketName/fileName`. Compressed gzip files (.gz) are supported when `fileType` is `SQL`. The instance must have write permissions to the bucket and read access to the file.
     */
    uri?: string | null;
  }
  /**
   * Insights configuration. This specifies when Cloud SQL Insights feature is enabled and optional configuration.
   */
  export interface Schema$InsightsConfig {
    /**
     * Whether Query Insights feature is enabled.
     */
    queryInsightsEnabled?: boolean | null;
    /**
     * Number of query execution plans captured by Insights per minute for all queries combined. Default is 5.
     */
    queryPlansPerMinute?: number | null;
    /**
     * Maximum query length stored in bytes. Default value: 1024 bytes. Range: 256-4500 bytes. Query length more than this field value will be truncated to this value. When unset, query length will be the default value. Changing query length will restart the database.
     */
    queryStringLength?: number | null;
    /**
     * Whether Query Insights will record application tags from query when enabled.
     */
    recordApplicationTags?: boolean | null;
    /**
     * Whether Query Insights will record client address when enabled.
     */
    recordClientAddress?: boolean | null;
  }
  /**
   * Reference to another Cloud SQL instance.
   */
  export interface Schema$InstanceReference {
    /**
     * The name of the Cloud SQL instance being referenced. This does not include the project ID.
     */
    name?: string | null;
    /**
     * The project ID of the Cloud SQL instance being referenced. The default is the same project ID as the instance references it.
     */
    project?: string | null;
    /**
     * The region of the Cloud SQL instance being referenced.
     */
    region?: string | null;
  }
  /**
   * Request to acquire an SSRS lease for an instance.
   */
  export interface Schema$InstancesAcquireSsrsLeaseRequest {
    /**
     * Contains details about the acquire SSRS lease operation.
     */
    acquireSsrsLeaseContext?: Schema$AcquireSsrsLeaseContext;
  }
  /**
   * Database instance clone request.
   */
  export interface Schema$InstancesCloneRequest {
    /**
     * Contains details about the clone operation.
     */
    cloneContext?: Schema$CloneContext;
  }
  /**
   * Database demote primary instance request.
   */
  export interface Schema$InstancesDemoteMasterRequest {
    /**
     * Contains details about the demoteMaster operation.
     */
    demoteMasterContext?: Schema$DemoteMasterContext;
  }
  /**
   * This request is used to demote an existing standalone instance to be a Cloud SQL read replica for an external database server.
   */
  export interface Schema$InstancesDemoteRequest {
    /**
     * Required. This context is used to demote an existing standalone instance to be a Cloud SQL read replica for an external database server.
     */
    demoteContext?: Schema$DemoteContext;
  }
  /**
   * Database instance export request.
   */
  export interface Schema$InstancesExportRequest {
    /**
     * Contains details about the export operation.
     */
    exportContext?: Schema$ExportContext;
  }
  /**
   * Instance failover request.
   */
  export interface Schema$InstancesFailoverRequest {
    /**
     * Failover Context.
     */
    failoverContext?: Schema$FailoverContext;
  }
  /**
   * Database instance import request.
   */
  export interface Schema$InstancesImportRequest {
    /**
     * Contains details about the import operation.
     */
    importContext?: Schema$ImportContext;
  }
  /**
   * Database instances list response.
   */
  export interface Schema$InstancesListResponse {
    /**
     * List of database instance resources.
     */
    items?: Schema$DatabaseInstance[];
    /**
     * This is always `sql#instancesList`.
     */
    kind?: string | null;
    /**
     * The continuation token, used to page through large result sets. Provide this value in a subsequent request to return the next page of results.
     */
    nextPageToken?: string | null;
    /**
     * List of warnings that occurred while handling the request.
     */
    warnings?: Schema$ApiWarning[];
  }
  /**
   * Instances ListServerCas response.
   */
  export interface Schema$InstancesListServerCasResponse {
    activeVersion?: string | null;
    /**
     * List of server CA certificates for the instance.
     */
    certs?: Schema$SslCert[];
    /**
     * This is always `sql#instancesListServerCas`.
     */
    kind?: string | null;
  }
  /**
   * Database Instance reencrypt request.
   */
  export interface Schema$InstancesReencryptRequest {
    /**
     * Configuration specific to backup re-encryption
     */
    backupReencryptionConfig?: Schema$BackupReencryptionConfig;
  }
  /**
   * Database instance restore backup request.
   */
  export interface Schema$InstancesRestoreBackupRequest {
    /**
     * Parameters required to perform the restore backup operation.
     */
    restoreBackupContext?: Schema$RestoreBackupContext;
  }
  /**
   * Rotate Server CA request.
   */
  export interface Schema$InstancesRotateServerCaRequest {
    /**
     * Contains details about the rotate server CA operation.
     */
    rotateServerCaContext?: Schema$RotateServerCaContext;
  }
  /**
   * Instance truncate log request.
   */
  export interface Schema$InstancesTruncateLogRequest {
    /**
     * Contains details about the truncate log operation.
     */
    truncateLogContext?: Schema$TruncateLogContext;
  }
  /**
   * IP Management configuration.
   */
  export interface Schema$IpConfiguration {
    /**
     * The name of the allocated ip range for the private ip Cloud SQL instance. For example: "google-managed-services-default". If set, the instance ip will be created in the allocated range. The range name must comply with [RFC 1035](https://tools.ietf.org/html/rfc1035). Specifically, the name must be 1-63 characters long and match the regular expression `[a-z]([-a-z0-9]*[a-z0-9])?.`
     */
    allocatedIpRange?: string | null;
    /**
     * The list of external networks that are allowed to connect to the instance using the IP. In 'CIDR' notation, also known as 'slash' notation (for example: `157.197.200.0/24`).
     */
    authorizedNetworks?: Schema$AclEntry[];
    /**
     * Controls connectivity to private IP instances from Google services, such as BigQuery.
     */
    enablePrivatePathForGoogleCloudServices?: boolean | null;
    /**
     * Whether the instance is assigned a public IP address or not.
     */
    ipv4Enabled?: boolean | null;
    /**
     * The resource link for the VPC network from which the Cloud SQL instance is accessible for private IP. For example, `/projects/myProject/global/networks/default`. This setting can be updated, but it cannot be removed after it is set.
     */
    privateNetwork?: string | null;
    /**
     * PSC settings for this instance.
     */
    pscConfig?: Schema$PscConfig;
    /**
     * Use `ssl_mode` instead. Whether SSL/TLS connections over IP are enforced. If set to false, then allow both non-SSL/non-TLS and SSL/TLS connections. For SSL/TLS connections, the client certificate won't be verified. If set to true, then only allow connections encrypted with SSL/TLS and with valid client certificates. If you want to enforce SSL/TLS without enforcing the requirement for valid client certificates, then use the `ssl_mode` flag instead of the legacy `require_ssl` flag.
     */
    requireSsl?: boolean | null;
    /**
     * Specify how SSL/TLS is enforced in database connections. If you must use the `require_ssl` flag for backward compatibility, then only the following value pairs are valid: For PostgreSQL and MySQL: * `ssl_mode=ALLOW_UNENCRYPTED_AND_ENCRYPTED` and `require_ssl=false` * `ssl_mode=ENCRYPTED_ONLY` and `require_ssl=false` * `ssl_mode=TRUSTED_CLIENT_CERTIFICATE_REQUIRED` and `require_ssl=true` For SQL Server: * `ssl_mode=ALLOW_UNENCRYPTED_AND_ENCRYPTED` and `require_ssl=false` * `ssl_mode=ENCRYPTED_ONLY` and `require_ssl=true` The value of `ssl_mode` gets priority over the value of `require_ssl`. For example, for the pair `ssl_mode=ENCRYPTED_ONLY` and `require_ssl=false`, the `ssl_mode=ENCRYPTED_ONLY` means only accept SSL connections, while the `require_ssl=false` means accept both non-SSL and SSL connections. MySQL and PostgreSQL databases respect `ssl_mode` in this case and accept only SSL connections.
     */
    sslMode?: string | null;
  }
  /**
   * Database instance IP mapping
   */
  export interface Schema$IpMapping {
    /**
     * The IP address assigned.
     */
    ipAddress?: string | null;
    /**
     * The due time for this IP to be retired in [RFC 3339](https://tools.ietf.org/html/rfc3339) format, for example `2012-11-15T16:19:00.094Z`. This field is only available when the IP is scheduled to be retired.
     */
    timeToRetire?: string | null;
    /**
     * The type of this IP address. A `PRIMARY` address is a public address that can accept incoming connections. A `PRIVATE` address is a private address that can accept incoming connections. An `OUTGOING` address is the source address of connections originating from the instance, if supported.
     */
    type?: string | null;
  }
  /**
   * Preferred location. This specifies where a Cloud SQL instance is located. Note that if the preferred location is not available, the instance will be located as close as possible within the region. Only one location may be specified.
   */
  export interface Schema$LocationPreference {
    /**
     * The App Engine application to follow, it must be in the same region as the Cloud SQL instance. WARNING: Changing this might restart the instance.
     */
    followGaeApplication?: string | null;
    /**
     * This is always `sql#locationPreference`.
     */
    kind?: string | null;
    /**
     * The preferred Compute Engine zone for the secondary/failover (for example: us-central1-a, us-central1-b, etc.). To disable this field, set it to 'no_secondary_zone'.
     */
    secondaryZone?: string | null;
    /**
     * The preferred Compute Engine zone (for example: us-central1-a, us-central1-b, etc.). WARNING: Changing this might restart the instance.
     */
    zone?: string | null;
  }
  /**
   * Maintenance window. This specifies when a Cloud SQL instance is restarted for system maintenance purposes.
   */
  export interface Schema$MaintenanceWindow {
    /**
     * day of week (1-7), starting on Monday.
     */
    day?: number | null;
    /**
     * hour of day - 0 to 23.
     */
    hour?: number | null;
    /**
     * This is always `sql#maintenanceWindow`.
     */
    kind?: string | null;
    /**
     * Maintenance timing setting: `canary` (Earlier) or `stable` (Later). [Learn more](https://cloud.google.com/sql/docs/mysql/instance-settings#maintenance-timing-2ndgen).
     */
    updateTrack?: string | null;
  }
  /**
   * Read-replica configuration specific to MySQL databases.
   */
  export interface Schema$MySqlReplicaConfiguration {
    /**
     * PEM representation of the trusted CA's x509 certificate.
     */
    caCertificate?: string | null;
    /**
     * PEM representation of the replica's x509 certificate.
     */
    clientCertificate?: string | null;
    /**
     * PEM representation of the replica's private key. The corresponsing public key is encoded in the client's certificate.
     */
    clientKey?: string | null;
    /**
     * Seconds to wait between connect retries. MySQL's default is 60 seconds.
     */
    connectRetryInterval?: number | null;
    /**
     * Path to a SQL dump file in Google Cloud Storage from which the replica instance is to be created. The URI is in the form gs://bucketName/fileName. Compressed gzip files (.gz) are also supported. Dumps have the binlog co-ordinates from which replication begins. This can be accomplished by setting --master-data to 1 when using mysqldump.
     */
    dumpFilePath?: string | null;
    /**
     * This is always `sql#mysqlReplicaConfiguration`.
     */
    kind?: string | null;
    /**
     * Interval in milliseconds between replication heartbeats.
     */
    masterHeartbeatPeriod?: string | null;
    /**
     * The password for the replication connection.
     */
    password?: string | null;
    /**
     * A list of permissible ciphers to use for SSL encryption.
     */
    sslCipher?: string | null;
    /**
     * The username for the replication connection.
     */
    username?: string | null;
    /**
     * Whether or not to check the primary instance's Common Name value in the certificate that it sends during the SSL handshake.
     */
    verifyServerCertificate?: boolean | null;
  }
  /**
   * MySQL-specific external server sync settings.
   */
  export interface Schema$MySqlSyncConfig {
    /**
     * Flags to use for the initial dump.
     */
    initialSyncFlags?: Schema$SyncFlags[];
  }
  /**
   * On-premises instance configuration.
   */
  export interface Schema$OnPremisesConfiguration {
    /**
     * PEM representation of the trusted CA's x509 certificate.
     */
    caCertificate?: string | null;
    /**
     * PEM representation of the replica's x509 certificate.
     */
    clientCertificate?: string | null;
    /**
     * PEM representation of the replica's private key. The corresponsing public key is encoded in the client's certificate.
     */
    clientKey?: string | null;
    /**
     * The dump file to create the Cloud SQL replica.
     */
    dumpFilePath?: string | null;
    /**
     * The host and port of the on-premises instance in host:port format
     */
    hostPort?: string | null;
    /**
     * This is always `sql#onPremisesConfiguration`.
     */
    kind?: string | null;
    /**
     * The password for connecting to on-premises instance.
     */
    password?: string | null;
    /**
     * The reference to Cloud SQL instance if the source is Cloud SQL.
     */
    sourceInstance?: Schema$InstanceReference;
    /**
     * The username for connecting to on-premises instance.
     */
    username?: string | null;
  }
  /**
   * An Operation resource. For successful operations that return an Operation resource, only the fields relevant to the operation are populated in the resource.
   */
  export interface Schema$Operation {
    /**
     * The context for acquire SSRS lease operation, if applicable.
     */
    acquireSsrsLeaseContext?: Schema$AcquireSsrsLeaseContext;
    /**
     * An Admin API warning message.
     */
    apiWarning?: Schema$ApiWarning;
    /**
     * The context for backup operation, if applicable.
     */
    backupContext?: Schema$BackupContext;
    /**
     * The time this operation finished in UTC timezone in [RFC 3339](https://tools.ietf.org/html/rfc3339) format, for example `2012-11-15T16:19:00.094Z`.
     */
    endTime?: string | null;
    /**
     * If errors occurred during processing of this operation, this field will be populated.
     */
    error?: Schema$OperationErrors;
    /**
     * The context for export operation, if applicable.
     */
    exportContext?: Schema$ExportContext;
    /**
     * The context for import operation, if applicable.
     */
    importContext?: Schema$ImportContext;
    /**
     * The time this operation was enqueued in UTC timezone in [RFC 3339](https://tools.ietf.org/html/rfc3339) format, for example `2012-11-15T16:19:00.094Z`.
     */
    insertTime?: string | null;
    /**
     * This is always `sql#operation`.
     */
    kind?: string | null;
    /**
     * An identifier that uniquely identifies the operation. You can use this identifier to retrieve the Operations resource that has information about the operation.
     */
    name?: string | null;
    /**
     * The type of the operation. Valid values are: * `CREATE` * `DELETE` * `UPDATE` * `RESTART` * `IMPORT` * `EXPORT` * `BACKUP_VOLUME` * `RESTORE_VOLUME` * `CREATE_USER` * `DELETE_USER` * `CREATE_DATABASE` * `DELETE_DATABASE`
     */
    operationType?: string | null;
    /**
     * The URI of this resource.
     */
    selfLink?: string | null;
    /**
     * The time this operation actually started in UTC timezone in [RFC 3339](https://tools.ietf.org/html/rfc3339) format, for example `2012-11-15T16:19:00.094Z`.
     */
    startTime?: string | null;
    /**
     * The status of an operation.
     */
    status?: string | null;
    /**
     * Name of the database instance related to this operation.
     */
    targetId?: string | null;
    targetLink?: string | null;
    /**
     * The project ID of the target instance related to this operation.
     */
    targetProject?: string | null;
    /**
     * The email address of the user who initiated this operation.
     */
    user?: string | null;
  }
  /**
   * Database instance operation error.
   */
  export interface Schema$OperationError {
    /**
     * Identifies the specific error that occurred.
     */
    code?: string | null;
    /**
     * This is always `sql#operationError`.
     */
    kind?: string | null;
    /**
     * Additional information about the error encountered.
     */
    message?: string | null;
  }
  /**
   * Database instance operation errors list wrapper.
   */
  export interface Schema$OperationErrors {
    /**
     * The list of errors encountered while processing this operation.
     */
    errors?: Schema$OperationError[];
    /**
     * This is always `sql#operationErrors`.
     */
    kind?: string | null;
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
     * Output only. Identifies whether the user has requested cancellation of the operation. Operations that have been cancelled successfully have Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.
     */
    cancelRequested?: boolean | null;
    /**
     * Output only. The time the operation was created.
     */
    createTime?: string | null;
    /**
     * Output only. The time the operation finished running.
     */
    endTime?: string | null;
    /**
     * Output only. Human-readable status of the operation, if any.
     */
    statusDetail?: string | null;
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
   * Operations list response.
   */
  export interface Schema$OperationsListResponse {
    /**
     * List of operation resources.
     */
    items?: Schema$Operation[];
    /**
     * This is always `sql#operationsList`.
     */
    kind?: string | null;
    /**
     * The continuation token, used to page through large result sets. Provide this value in a subsequent request to return the next page of results.
     */
    nextPageToken?: string | null;
  }
  /**
   * Read-only password status.
   */
  export interface Schema$PasswordStatus {
    /**
     * If true, user does not have login privileges.
     */
    locked?: boolean | null;
    /**
     * The expiration time of the current password.
     */
    passwordExpirationTime?: string | null;
  }
  /**
   * Database instance local user password validation policy
   */
  export interface Schema$PasswordValidationPolicy {
    /**
     * The complexity of the password.
     */
    complexity?: string | null;
    /**
     * This field is deprecated and will be removed in a future version of the API.
     */
    disallowCompromisedCredentials?: boolean | null;
    /**
     * Disallow username as a part of the password.
     */
    disallowUsernameSubstring?: boolean | null;
    /**
     * Whether the password policy is enabled or not.
     */
    enablePasswordPolicy?: boolean | null;
    /**
     * Minimum number of characters allowed.
     */
    minLength?: number | null;
    /**
     * Minimum interval after which the password can be changed. This flag is only supported for PostgreSQL.
     */
    passwordChangeInterval?: string | null;
    /**
     * Number of previous passwords that cannot be reused.
     */
    reuseInterval?: number | null;
  }
  /**
   * Perform disk shrink context.
   */
  export interface Schema$PerformDiskShrinkContext {
    /**
     * The target disk shrink size in GigaBytes.
     */
    targetSizeGb?: string | null;
  }
  /**
   * PSC settings for a Cloud SQL instance.
   */
  export interface Schema$PscConfig {
    /**
     * Optional. The list of consumer projects that are allow-listed for PSC connections to this instance. This instance can be connected to with PSC from any network in these projects. Each consumer project in this list may be represented by a project number (numeric) or by a project id (alphanumeric).
     */
    allowedConsumerProjects?: string[] | null;
    /**
     * Whether PSC connectivity is enabled for this instance.
     */
    pscEnabled?: boolean | null;
  }
  /**
   * Read-replica configuration for connecting to the primary instance.
   */
  export interface Schema$ReplicaConfiguration {
    /**
     * Optional. Specifies if a SQL Server replica is a cascadable replica. A cascadable replica is a SQL Server cross region replica that supports replica(s) under it.
     */
    cascadableReplica?: boolean | null;
    /**
     * Specifies if the replica is the failover target. If the field is set to `true` the replica will be designated as a failover replica. In case the primary instance fails, the replica instance will be promoted as the new primary instance. Only one replica can be specified as failover target, and the replica has to be in different zone with the primary instance.
     */
    failoverTarget?: boolean | null;
    /**
     * This is always `sql#replicaConfiguration`.
     */
    kind?: string | null;
    /**
     * MySQL specific configuration when replicating from a MySQL on-premises primary instance. Replication configuration information such as the username, password, certificates, and keys are not stored in the instance metadata. The configuration information is used only to set up the replication connection and is stored by MySQL in a file named `master.info` in the data directory.
     */
    mysqlReplicaConfiguration?: Schema$MySqlReplicaConfiguration;
  }
  /**
   * Primary-DR replica pair
   */
  export interface Schema$ReplicationCluster {
    /**
     * Output only. read-only field that indicates if the replica is a dr_replica; not set for a primary.
     */
    drReplica?: boolean | null;
    /**
     * Optional. If the instance is a primary instance, then this field identifies the disaster recovery (DR) replica. A DR replica is an optional configuration for Enterprise Plus edition instances. If the instance is a read replica, then the field is not set. Users can set this field to set a designated DR replica for a primary. Removing this field removes the DR replica.
     */
    failoverDrReplicaName?: string | null;
  }
  export interface Schema$Reschedule {
    /**
     * Required. The type of the reschedule.
     */
    rescheduleType?: string | null;
    /**
     * Optional. Timestamp when the maintenance shall be rescheduled to if reschedule_type=SPECIFIC_TIME, in [RFC 3339](https://tools.ietf.org/html/rfc3339) format, for example `2012-11-15T16:19:00.094Z`.
     */
    scheduleTime?: string | null;
  }
  /**
   * Database instance restore from backup context. Backup context contains source instance id and project id.
   */
  export interface Schema$RestoreBackupContext {
    /**
     * The ID of the backup run to restore from.
     */
    backupRunId?: string | null;
    /**
     * The ID of the instance that the backup was taken from.
     */
    instanceId?: string | null;
    /**
     * This is always `sql#restoreBackupContext`.
     */
    kind?: string | null;
    /**
     * The full project ID of the source instance.
     */
    project?: string | null;
  }
  /**
   * Instance rotate server CA context.
   */
  export interface Schema$RotateServerCaContext {
    /**
     * This is always `sql#rotateServerCaContext`.
     */
    kind?: string | null;
    /**
     * The fingerprint of the next version to be rotated to. If left unspecified, will be rotated to the most recently added server CA version.
     */
    nextVersion?: string | null;
  }
  /**
   * Database instance settings.
   */
  export interface Schema$Settings {
    /**
     * The activation policy specifies when the instance is activated; it is applicable only when the instance state is RUNNABLE. Valid values: * `ALWAYS`: The instance is on, and remains so even in the absence of connection requests. * `NEVER`: The instance is off; it is not activated, even if a connection request arrives.
     */
    activationPolicy?: string | null;
    /**
     * Active Directory configuration, relevant only for Cloud SQL for SQL Server.
     */
    activeDirectoryConfig?: Schema$SqlActiveDirectoryConfig;
    /**
     * Specifies advance machine configuration for the instance relevant only for SQL Server.
     */
    advancedMachineFeatures?: Schema$AdvancedMachineFeatures;
    /**
     * The App Engine app IDs that can access this instance. (Deprecated) Applied to First Generation instances only.
     */
    authorizedGaeApplications?: string[] | null;
    /**
     * Availability type. Potential values: * `ZONAL`: The instance serves data from only one zone. Outages in that zone affect data accessibility. * `REGIONAL`: The instance can serve data from more than one zone in a region (it is highly available)./ For more information, see [Overview of the High Availability Configuration](https://cloud.google.com/sql/docs/mysql/high-availability).
     */
    availabilityType?: string | null;
    /**
     * The daily backup configuration for the instance.
     */
    backupConfiguration?: Schema$BackupConfiguration;
    /**
     * The name of server Instance collation.
     */
    collation?: string | null;
    /**
     * Specifies if connections must use Cloud SQL connectors. Option values include the following: `NOT_REQUIRED` (Cloud SQL instances can be connected without Cloud SQL Connectors) and `REQUIRED` (Only allow connections that use Cloud SQL Connectors) Note that using REQUIRED disables all existing authorized networks. If this field is not specified when creating a new instance, NOT_REQUIRED is used. If this field is not specified when patching or updating an existing instance, it is left unchanged in the instance.
     */
    connectorEnforcement?: string | null;
    /**
     * Configuration specific to read replica instances. Indicates whether database flags for crash-safe replication are enabled. This property was only applicable to First Generation instances.
     */
    crashSafeReplicationEnabled?: boolean | null;
    /**
     * The database flags passed to the instance at startup.
     */
    databaseFlags?: Schema$DatabaseFlags[];
    /**
     * Configuration specific to read replica instances. Indicates whether replication is enabled or not. WARNING: Changing this restarts the instance.
     */
    databaseReplicationEnabled?: boolean | null;
    /**
     * Configuration for data cache.
     */
    dataCacheConfig?: Schema$DataCacheConfig;
    /**
     * The size of data disk, in GB. The data disk size minimum is 10GB.
     */
    dataDiskSizeGb?: string | null;
    /**
     * The type of data disk: `PD_SSD` (default) or `PD_HDD`. Not used for First Generation instances.
     */
    dataDiskType?: string | null;
    /**
     * Configuration to protect against accidental instance deletion.
     */
    deletionProtectionEnabled?: boolean | null;
    /**
     * Deny maintenance periods
     */
    denyMaintenancePeriods?: Schema$DenyMaintenancePeriod[];
    /**
     * Optional. The edition of the instance.
     */
    edition?: string | null;
    /**
     * Optional. When this parameter is set to true, Cloud SQL instances can connect to Vertex AI to pass requests for real-time predictions and insights to the AI. The default value is false. This applies only to Cloud SQL for PostgreSQL instances.
     */
    enableGoogleMlIntegration?: boolean | null;
    /**
     * Insights configuration, for now relevant only for Postgres.
     */
    insightsConfig?: Schema$InsightsConfig;
    /**
     * The settings for IP Management. This allows to enable or disable the instance IP and manage which external networks can connect to the instance. The IPv4 address cannot be disabled for Second Generation instances.
     */
    ipConfiguration?: Schema$IpConfiguration;
    /**
     * This is always `sql#settings`.
     */
    kind?: string | null;
    /**
     * The location preference settings. This allows the instance to be located as near as possible to either an App Engine app or Compute Engine zone for better performance. App Engine co-location was only applicable to First Generation instances.
     */
    locationPreference?: Schema$LocationPreference;
    /**
     * The maintenance window for this instance. This specifies when the instance can be restarted for maintenance purposes.
     */
    maintenanceWindow?: Schema$MaintenanceWindow;
    /**
     * The local user password validation policy of the instance.
     */
    passwordValidationPolicy?: Schema$PasswordValidationPolicy;
    /**
     * The pricing plan for this instance. This can be either `PER_USE` or `PACKAGE`. Only `PER_USE` is supported for Second Generation instances.
     */
    pricingPlan?: string | null;
    /**
     * The type of replication this instance uses. This can be either `ASYNCHRONOUS` or `SYNCHRONOUS`. (Deprecated) This property was only applicable to First Generation instances.
     */
    replicationType?: string | null;
    /**
     * The version of instance settings. This is a required field for update method to make sure concurrent updates are handled properly. During update, use the most recent settingsVersion value for this instance and do not try to update this value.
     */
    settingsVersion?: string | null;
    /**
     * SQL Server specific audit configuration.
     */
    sqlServerAuditConfig?: Schema$SqlServerAuditConfig;
    /**
     * Configuration to increase storage size automatically. The default value is true.
     */
    storageAutoResize?: boolean | null;
    /**
     * The maximum size to which storage capacity can be automatically increased. The default value is 0, which specifies that there is no limit.
     */
    storageAutoResizeLimit?: string | null;
    /**
     * The tier (or machine type) for this instance, for example `db-custom-1-3840`. WARNING: Changing this restarts the instance.
     */
    tier?: string | null;
    /**
     * Server timezone, relevant only for Cloud SQL for SQL Server.
     */
    timeZone?: string | null;
    /**
     * User-provided labels, represented as a dictionary where each label is a single key value pair.
     */
    userLabels?: {[key: string]: string} | null;
  }
  /**
   * Active Directory configuration, relevant only for Cloud SQL for SQL Server.
   */
  export interface Schema$SqlActiveDirectoryConfig {
    /**
     * The name of the domain (e.g., mydomain.com).
     */
    domain?: string | null;
    /**
     * This is always sql#activeDirectoryConfig.
     */
    kind?: string | null;
  }
  /**
   * External primary instance migration setting error/warning.
   */
  export interface Schema$SqlExternalSyncSettingError {
    /**
     * Additional information about the error encountered.
     */
    detail?: string | null;
    /**
     * Can be `sql#externalSyncSettingError` or `sql#externalSyncSettingWarning`.
     */
    kind?: string | null;
    /**
     * Identifies the specific error that occurred.
     */
    type?: string | null;
  }
  /**
   * Acquire SSRS lease response.
   */
  export interface Schema$SqlInstancesAcquireSsrsLeaseResponse {
    /**
     * The unique identifier for this operation.
     */
    operationId?: string | null;
  }
  /**
   * Instance get disk shrink config response.
   */
  export interface Schema$SqlInstancesGetDiskShrinkConfigResponse {
    /**
     * This is always `sql#getDiskShrinkConfig`.
     */
    kind?: string | null;
    /**
     * Additional message to customers.
     */
    message?: string | null;
    /**
     * The minimum size to which a disk can be shrunk in GigaBytes.
     */
    minimalTargetSizeGb?: string | null;
  }
  /**
   * Instance get latest recovery time response.
   */
  export interface Schema$SqlInstancesGetLatestRecoveryTimeResponse {
    /**
     * This is always `sql#getLatestRecoveryTime`.
     */
    kind?: string | null;
    /**
     * Timestamp, identifies the latest recovery time of the source instance.
     */
    latestRecoveryTime?: string | null;
  }
  /**
   * The response for the release of the SSRS lease.
   */
  export interface Schema$SqlInstancesReleaseSsrsLeaseResponse {
    /**
     * The operation ID.
     */
    operationId?: string | null;
  }
  /**
   * Reschedule options for maintenance windows.
   */
  export interface Schema$SqlInstancesRescheduleMaintenanceRequestBody {
    /**
     * Required. The type of the reschedule the user wants.
     */
    reschedule?: Schema$Reschedule;
  }
  /**
   * Instance reset replica size request.
   */
  export interface Schema$SqlInstancesResetReplicaSizeRequest {}
  export interface Schema$SqlInstancesStartExternalSyncRequest {
    /**
     * Optional. MigrationType decides if the migration is a physical file based migration or logical migration.
     */
    migrationType?: string | null;
    /**
     * MySQL-specific settings for start external sync.
     */
    mysqlSyncConfig?: Schema$MySqlSyncConfig;
    /**
     * Whether to skip the verification step (VESS).
     */
    skipVerification?: boolean | null;
    /**
     * External sync mode.
     */
    syncMode?: string | null;
    /**
     * Optional. Parallel level for initial data sync. Currently only applicable for MySQL.
     */
    syncParallelLevel?: string | null;
  }
  export interface Schema$SqlInstancesVerifyExternalSyncSettingsRequest {
    /**
     * Optional. MigrationType field decides if the migration is a physical file based migration or logical migration
     */
    migrationType?: string | null;
    /**
     * Optional. MySQL-specific settings for start external sync.
     */
    mysqlSyncConfig?: Schema$MySqlSyncConfig;
    /**
     * External sync mode
     */
    syncMode?: string | null;
    /**
     * Optional. Parallel level for initial data sync. Currently only applicable for PostgreSQL.
     */
    syncParallelLevel?: string | null;
    /**
     * Flag to enable verifying connection only
     */
    verifyConnectionOnly?: boolean | null;
    /**
     * Optional. Flag to verify settings required by replication setup only
     */
    verifyReplicationOnly?: boolean | null;
  }
  /**
   * Instance verify external sync settings response.
   */
  export interface Schema$SqlInstancesVerifyExternalSyncSettingsResponse {
    /**
     * List of migration violations.
     */
    errors?: Schema$SqlExternalSyncSettingError[];
    /**
     * This is always `sql#migrationSettingErrorList`.
     */
    kind?: string | null;
    /**
     * List of migration warnings.
     */
    warnings?: Schema$SqlExternalSyncSettingError[];
  }
  /**
   * This message wraps up the information written by out-of-disk detection job.
   */
  export interface Schema$SqlOutOfDiskReport {
    /**
     * The minimum recommended increase size in GigaBytes This field is consumed by the frontend * Writers: * the proactive database wellness job for OOD. * Readers:
     */
    sqlMinRecommendedIncreaseSizeGb?: number | null;
    /**
     * This field represents the state generated by the proactive database wellness job for OutOfDisk issues. * Writers: * the proactive database wellness job for OOD. * Readers: * the proactive database wellness job
     */
    sqlOutOfDiskState?: string | null;
  }
  /**
   * Any scheduled maintenance for this instance.
   */
  export interface Schema$SqlScheduledMaintenance {
    canDefer?: boolean | null;
    /**
     * If the scheduled maintenance can be rescheduled.
     */
    canReschedule?: boolean | null;
    /**
     * Maintenance cannot be rescheduled to start beyond this deadline.
     */
    scheduleDeadlineTime?: string | null;
    /**
     * The start time of any upcoming scheduled maintenance for this instance.
     */
    startTime?: string | null;
  }
  /**
   * SQL Server specific audit configuration.
   */
  export interface Schema$SqlServerAuditConfig {
    /**
     * The name of the destination bucket (e.g., gs://mybucket).
     */
    bucket?: string | null;
    /**
     * This is always sql#sqlServerAuditConfig
     */
    kind?: string | null;
    /**
     * How long to keep generated audit files.
     */
    retentionInterval?: string | null;
    /**
     * How often to upload generated audit files.
     */
    uploadInterval?: string | null;
  }
  /**
   * Represents a Sql Server database on the Cloud SQL instance.
   */
  export interface Schema$SqlServerDatabaseDetails {
    /**
     * The version of SQL Server with which the database is to be made compatible
     */
    compatibilityLevel?: number | null;
    /**
     * The recovery model of a SQL Server database
     */
    recoveryModel?: string | null;
  }
  /**
   * Represents a Sql Server user on the Cloud SQL instance.
   */
  export interface Schema$SqlServerUserDetails {
    /**
     * If the user has been disabled
     */
    disabled?: boolean | null;
    /**
     * The server roles for this user
     */
    serverRoles?: string[] | null;
  }
  /**
   * SslCerts Resource
   */
  export interface Schema$SslCert {
    /**
     * PEM representation.
     */
    cert?: string | null;
    /**
     * Serial number, as extracted from the certificate.
     */
    certSerialNumber?: string | null;
    /**
     * User supplied name. Constrained to [a-zA-Z.-_ ]+.
     */
    commonName?: string | null;
    /**
     * The time when the certificate was created in [RFC 3339](https://tools.ietf.org/html/rfc3339) format, for example `2012-11-15T16:19:00.094Z`.
     */
    createTime?: string | null;
    /**
     * The time when the certificate expires in [RFC 3339](https://tools.ietf.org/html/rfc3339) format, for example `2012-11-15T16:19:00.094Z`.
     */
    expirationTime?: string | null;
    /**
     * Name of the database instance.
     */
    instance?: string | null;
    /**
     * This is always `sql#sslCert`.
     */
    kind?: string | null;
    /**
     * The URI of this resource.
     */
    selfLink?: string | null;
    /**
     * Sha1 Fingerprint.
     */
    sha1Fingerprint?: string | null;
  }
  /**
   * SslCertDetail.
   */
  export interface Schema$SslCertDetail {
    /**
     * The public information about the cert.
     */
    certInfo?: Schema$SslCert;
    /**
     * The private key for the client cert, in pem format. Keep private in order to protect your security.
     */
    certPrivateKey?: string | null;
  }
  /**
   * SslCerts create ephemeral certificate request.
   */
  export interface Schema$SslCertsCreateEphemeralRequest {
    /**
     * Access token to include in the signed certificate.
     */
    access_token?: string | null;
    /**
     * PEM encoded public key to include in the signed certificate.
     */
    public_key?: string | null;
  }
  /**
   * SslCerts insert request.
   */
  export interface Schema$SslCertsInsertRequest {
    /**
     * User supplied name. Must be a distinct name from the other certificates for this instance.
     */
    commonName?: string | null;
  }
  /**
   * SslCert insert response.
   */
  export interface Schema$SslCertsInsertResponse {
    /**
     * The new client certificate and private key.
     */
    clientCert?: Schema$SslCertDetail;
    /**
     * This is always `sql#sslCertsInsert`.
     */
    kind?: string | null;
    /**
     * The operation to track the ssl certs insert request.
     */
    operation?: Schema$Operation;
    /**
     * The server Certificate Authority's certificate. If this is missing you can force a new one to be generated by calling resetSslConfig method on instances resource.
     */
    serverCaCert?: Schema$SslCert;
  }
  /**
   * SslCerts list response.
   */
  export interface Schema$SslCertsListResponse {
    /**
     * List of client certificates for the instance.
     */
    items?: Schema$SslCert[];
    /**
     * This is always `sql#sslCertsList`.
     */
    kind?: string | null;
  }
  /**
   * Initial sync flags for certain Cloud SQL APIs. Currently used for the MySQL external server initial dump.
   */
  export interface Schema$SyncFlags {
    /**
     * The name of the flag.
     */
    name?: string | null;
    /**
     * The value of the flag. This field must be omitted if the flag doesn't take a value.
     */
    value?: string | null;
  }
  /**
   * A Google Cloud SQL service tier resource.
   */
  export interface Schema$Tier {
    /**
     * The maximum disk size of this tier in bytes.
     */
    DiskQuota?: string | null;
    /**
     * This is always `sql#tier`.
     */
    kind?: string | null;
    /**
     * The maximum RAM usage of this tier in bytes.
     */
    RAM?: string | null;
    /**
     * The applicable regions for this tier.
     */
    region?: string[] | null;
    /**
     * An identifier for the machine type, for example, `db-custom-1-3840`. For related information, see [Pricing](/sql/pricing).
     */
    tier?: string | null;
  }
  /**
   * Tiers list response.
   */
  export interface Schema$TiersListResponse {
    /**
     * List of tiers.
     */
    items?: Schema$Tier[];
    /**
     * This is always `sql#tiersList`.
     */
    kind?: string | null;
  }
  /**
   * Database Instance truncate log context.
   */
  export interface Schema$TruncateLogContext {
    /**
     * This is always `sql#truncateLogContext`.
     */
    kind?: string | null;
    /**
     * The type of log to truncate. Valid values are `MYSQL_GENERAL_TABLE` and `MYSQL_SLOW_TABLE`.
     */
    logType?: string | null;
  }
  /**
   * A Cloud SQL user resource.
   */
  export interface Schema$User {
    /**
     * Dual password status for the user.
     */
    dualPasswordType?: string | null;
    /**
     * This field is deprecated and will be removed from a future version of the API.
     */
    etag?: string | null;
    /**
     * Optional. The host from which the user can connect. For `insert` operations, host defaults to an empty string. For `update` operations, host is specified as part of the request URL. The host name cannot be updated after insertion. For a MySQL instance, it's required; for a PostgreSQL or SQL Server instance, it's optional.
     */
    host?: string | null;
    /**
     * The name of the Cloud SQL instance. This does not include the project ID. Can be omitted for *update* because it is already specified on the URL.
     */
    instance?: string | null;
    /**
     * This is always `sql#user`.
     */
    kind?: string | null;
    /**
     * The name of the user in the Cloud SQL instance. Can be omitted for `update` because it is already specified in the URL.
     */
    name?: string | null;
    /**
     * The password for the user.
     */
    password?: string | null;
    /**
     * User level password validation policy.
     */
    passwordPolicy?: Schema$UserPasswordValidationPolicy;
    /**
     * The project ID of the project containing the Cloud SQL database. The Google apps domain is prefixed if applicable. Can be omitted for *update* because it is already specified on the URL.
     */
    project?: string | null;
    sqlserverUserDetails?: Schema$SqlServerUserDetails;
    /**
     * The user type. It determines the method to authenticate the user during login. The default is the database's built-in user type.
     */
    type?: string | null;
  }
  /**
   * User level password validation policy.
   */
  export interface Schema$UserPasswordValidationPolicy {
    /**
     * Number of failed login attempts allowed before user get locked.
     */
    allowedFailedAttempts?: number | null;
    /**
     * If true, failed login attempts check will be enabled.
     */
    enableFailedAttemptsCheck?: boolean | null;
    /**
     * If true, the user must specify the current password before changing the password. This flag is supported only for MySQL.
     */
    enablePasswordVerification?: boolean | null;
    /**
     * Expiration duration after password is updated.
     */
    passwordExpirationDuration?: string | null;
    /**
     * Output only. Read-only password status.
     */
    status?: Schema$PasswordStatus;
  }
  /**
   * User list response.
   */
  export interface Schema$UsersListResponse {
    /**
     * List of user resources in the instance.
     */
    items?: Schema$User[];
    /**
     * This is always *sql#usersList*.
     */
    kind?: string | null;
    /**
     * Unused.
     */
    nextPageToken?: string | null;
  }

  export class Resource$Backupruns {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Deletes the backup taken by a backup run.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    delete(
      params: Params$Resource$Backupruns$Delete,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    delete(
      params?: Params$Resource$Backupruns$Delete,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Operation>;
    delete(
      params: Params$Resource$Backupruns$Delete,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    delete(
      params: Params$Resource$Backupruns$Delete,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    delete(
      params: Params$Resource$Backupruns$Delete,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    delete(callback: BodyResponseCallback<Schema$Operation>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Backupruns$Delete
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
        {}) as Params$Resource$Backupruns$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Backupruns$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://sqladmin.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/sql/v1beta4/projects/{project}/instances/{instance}/backupRuns/{id}'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'DELETE',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['project', 'instance', 'id'],
        pathParams: ['id', 'instance', 'project'],
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
     * Retrieves a resource containing information about a backup run.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    get(
      params: Params$Resource$Backupruns$Get,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    get(
      params?: Params$Resource$Backupruns$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$BackupRun>;
    get(
      params: Params$Resource$Backupruns$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Backupruns$Get,
      options: MethodOptions | BodyResponseCallback<Schema$BackupRun>,
      callback: BodyResponseCallback<Schema$BackupRun>
    ): void;
    get(
      params: Params$Resource$Backupruns$Get,
      callback: BodyResponseCallback<Schema$BackupRun>
    ): void;
    get(callback: BodyResponseCallback<Schema$BackupRun>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Backupruns$Get
        | BodyResponseCallback<Schema$BackupRun>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$BackupRun>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$BackupRun>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$BackupRun> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback || {}) as Params$Resource$Backupruns$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Backupruns$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://sqladmin.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/sql/v1beta4/projects/{project}/instances/{instance}/backupRuns/{id}'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['project', 'instance', 'id'],
        pathParams: ['id', 'instance', 'project'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$BackupRun>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$BackupRun>(parameters);
      }
    }

    /**
     * Creates a new backup run on demand.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    insert(
      params: Params$Resource$Backupruns$Insert,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    insert(
      params?: Params$Resource$Backupruns$Insert,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Operation>;
    insert(
      params: Params$Resource$Backupruns$Insert,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    insert(
      params: Params$Resource$Backupruns$Insert,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    insert(
      params: Params$Resource$Backupruns$Insert,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    insert(callback: BodyResponseCallback<Schema$Operation>): void;
    insert(
      paramsOrCallback?:
        | Params$Resource$Backupruns$Insert
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
        {}) as Params$Resource$Backupruns$Insert;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Backupruns$Insert;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://sqladmin.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/sql/v1beta4/projects/{project}/instances/{instance}/backupRuns'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['project', 'instance'],
        pathParams: ['instance', 'project'],
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
     * Lists all backup runs associated with the project or a given instance and configuration in the reverse chronological order of the backup initiation time.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    list(
      params: Params$Resource$Backupruns$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Backupruns$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$BackupRunsListResponse>;
    list(
      params: Params$Resource$Backupruns$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Backupruns$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$BackupRunsListResponse>,
      callback: BodyResponseCallback<Schema$BackupRunsListResponse>
    ): void;
    list(
      params: Params$Resource$Backupruns$List,
      callback: BodyResponseCallback<Schema$BackupRunsListResponse>
    ): void;
    list(callback: BodyResponseCallback<Schema$BackupRunsListResponse>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Backupruns$List
        | BodyResponseCallback<Schema$BackupRunsListResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$BackupRunsListResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$BackupRunsListResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$BackupRunsListResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback || {}) as Params$Resource$Backupruns$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Backupruns$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://sqladmin.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/sql/v1beta4/projects/{project}/instances/{instance}/backupRuns'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['project', 'instance'],
        pathParams: ['instance', 'project'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$BackupRunsListResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$BackupRunsListResponse>(parameters);
      }
    }
  }

  export interface Params$Resource$Backupruns$Delete
    extends StandardParameters {
    /**
     * The ID of the backup run to delete. To find a backup run ID, use the [list](https://cloud.google.com/sql/docs/mysql/admin-api/rest/v1beta4/backupRuns/list) method.
     */
    id?: string;
    /**
     * Cloud SQL instance ID. This does not include the project ID.
     */
    instance?: string;
    /**
     * Project ID of the project that contains the instance.
     */
    project?: string;
  }
  export interface Params$Resource$Backupruns$Get extends StandardParameters {
    /**
     * The ID of this backup run.
     */
    id?: string;
    /**
     * Cloud SQL instance ID. This does not include the project ID.
     */
    instance?: string;
    /**
     * Project ID of the project that contains the instance.
     */
    project?: string;
  }
  export interface Params$Resource$Backupruns$Insert
    extends StandardParameters {
    /**
     * Cloud SQL instance ID. This does not include the project ID.
     */
    instance?: string;
    /**
     * Project ID of the project that contains the instance.
     */
    project?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$BackupRun;
  }
  export interface Params$Resource$Backupruns$List extends StandardParameters {
    /**
     * Cloud SQL instance ID, or "-" for all instances. This does not include the project ID.
     */
    instance?: string;
    /**
     * Maximum number of backup runs per response.
     */
    maxResults?: number;
    /**
     * A previously-returned page token representing part of the larger set of results to view.
     */
    pageToken?: string;
    /**
     * Project ID of the project that contains the instance.
     */
    project?: string;
  }

  export class Resource$Connect {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Generates a short-lived X509 certificate containing the provided public key and signed by a private key specific to the target instance. Users may use the certificate to authenticate as themselves when connecting to the database.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    generateEphemeralCert(
      params: Params$Resource$Connect$Generateephemeralcert,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    generateEphemeralCert(
      params?: Params$Resource$Connect$Generateephemeralcert,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GenerateEphemeralCertResponse>;
    generateEphemeralCert(
      params: Params$Resource$Connect$Generateephemeralcert,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    generateEphemeralCert(
      params: Params$Resource$Connect$Generateephemeralcert,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GenerateEphemeralCertResponse>,
      callback: BodyResponseCallback<Schema$GenerateEphemeralCertResponse>
    ): void;
    generateEphemeralCert(
      params: Params$Resource$Connect$Generateephemeralcert,
      callback: BodyResponseCallback<Schema$GenerateEphemeralCertResponse>
    ): void;
    generateEphemeralCert(
      callback: BodyResponseCallback<Schema$GenerateEphemeralCertResponse>
    ): void;
    generateEphemeralCert(
      paramsOrCallback?:
        | Params$Resource$Connect$Generateephemeralcert
        | BodyResponseCallback<Schema$GenerateEphemeralCertResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GenerateEphemeralCertResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GenerateEphemeralCertResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GenerateEphemeralCertResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Connect$Generateephemeralcert;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Connect$Generateephemeralcert;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://sqladmin.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/sql/v1beta4/projects/{project}/instances/{instance}:generateEphemeralCert'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['project', 'instance'],
        pathParams: ['instance', 'project'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$GenerateEphemeralCertResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GenerateEphemeralCertResponse>(
          parameters
        );
      }
    }

    /**
     * Retrieves connect settings about a Cloud SQL instance.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    get(
      params: Params$Resource$Connect$Get,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    get(
      params?: Params$Resource$Connect$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ConnectSettings>;
    get(
      params: Params$Resource$Connect$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Connect$Get,
      options: MethodOptions | BodyResponseCallback<Schema$ConnectSettings>,
      callback: BodyResponseCallback<Schema$ConnectSettings>
    ): void;
    get(
      params: Params$Resource$Connect$Get,
      callback: BodyResponseCallback<Schema$ConnectSettings>
    ): void;
    get(callback: BodyResponseCallback<Schema$ConnectSettings>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Connect$Get
        | BodyResponseCallback<Schema$ConnectSettings>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ConnectSettings>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ConnectSettings>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$ConnectSettings> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback || {}) as Params$Resource$Connect$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Connect$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://sqladmin.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/sql/v1beta4/projects/{project}/instances/{instance}/connectSettings'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['project', 'instance'],
        pathParams: ['instance', 'project'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$ConnectSettings>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ConnectSettings>(parameters);
      }
    }
  }

  export interface Params$Resource$Connect$Generateephemeralcert
    extends StandardParameters {
    /**
     * Cloud SQL instance ID. This does not include the project ID.
     */
    instance?: string;
    /**
     * Project ID of the project that contains the instance.
     */
    project?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GenerateEphemeralCertRequest;
  }
  export interface Params$Resource$Connect$Get extends StandardParameters {
    /**
     * Cloud SQL instance ID. This does not include the project ID.
     */
    instance?: string;
    /**
     * Project ID of the project that contains the instance.
     */
    project?: string;
    /**
     * Optional. Optional snapshot read timestamp to trade freshness for performance.
     */
    readTime?: string;
  }

  export class Resource$Databases {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Deletes a database from a Cloud SQL instance.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    delete(
      params: Params$Resource$Databases$Delete,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    delete(
      params?: Params$Resource$Databases$Delete,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Operation>;
    delete(
      params: Params$Resource$Databases$Delete,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    delete(
      params: Params$Resource$Databases$Delete,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    delete(
      params: Params$Resource$Databases$Delete,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    delete(callback: BodyResponseCallback<Schema$Operation>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Databases$Delete
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
      let params = (paramsOrCallback || {}) as Params$Resource$Databases$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Databases$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://sqladmin.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/sql/v1beta4/projects/{project}/instances/{instance}/databases/{database}'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'DELETE',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['project', 'instance', 'database'],
        pathParams: ['database', 'instance', 'project'],
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
     * Retrieves a resource containing information about a database inside a Cloud SQL instance.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    get(
      params: Params$Resource$Databases$Get,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    get(
      params?: Params$Resource$Databases$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Database>;
    get(
      params: Params$Resource$Databases$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Databases$Get,
      options: MethodOptions | BodyResponseCallback<Schema$Database>,
      callback: BodyResponseCallback<Schema$Database>
    ): void;
    get(
      params: Params$Resource$Databases$Get,
      callback: BodyResponseCallback<Schema$Database>
    ): void;
    get(callback: BodyResponseCallback<Schema$Database>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Databases$Get
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
    ): void | GaxiosPromise<Schema$Database> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback || {}) as Params$Resource$Databases$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Databases$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://sqladmin.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/sql/v1beta4/projects/{project}/instances/{instance}/databases/{database}'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['project', 'instance', 'database'],
        pathParams: ['database', 'instance', 'project'],
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
     * Inserts a resource containing information about a database inside a Cloud SQL instance. **Note:** You can't modify the default character set and collation.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    insert(
      params: Params$Resource$Databases$Insert,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    insert(
      params?: Params$Resource$Databases$Insert,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Operation>;
    insert(
      params: Params$Resource$Databases$Insert,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    insert(
      params: Params$Resource$Databases$Insert,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    insert(
      params: Params$Resource$Databases$Insert,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    insert(callback: BodyResponseCallback<Schema$Operation>): void;
    insert(
      paramsOrCallback?:
        | Params$Resource$Databases$Insert
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
      let params = (paramsOrCallback || {}) as Params$Resource$Databases$Insert;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Databases$Insert;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://sqladmin.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/sql/v1beta4/projects/{project}/instances/{instance}/databases'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['project', 'instance'],
        pathParams: ['instance', 'project'],
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
     * Lists databases in the specified Cloud SQL instance.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    list(
      params: Params$Resource$Databases$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Databases$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$DatabasesListResponse>;
    list(
      params: Params$Resource$Databases$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Databases$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$DatabasesListResponse>,
      callback: BodyResponseCallback<Schema$DatabasesListResponse>
    ): void;
    list(
      params: Params$Resource$Databases$List,
      callback: BodyResponseCallback<Schema$DatabasesListResponse>
    ): void;
    list(callback: BodyResponseCallback<Schema$DatabasesListResponse>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Databases$List
        | BodyResponseCallback<Schema$DatabasesListResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$DatabasesListResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$DatabasesListResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$DatabasesListResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback || {}) as Params$Resource$Databases$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Databases$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://sqladmin.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/sql/v1beta4/projects/{project}/instances/{instance}/databases'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['project', 'instance'],
        pathParams: ['instance', 'project'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$DatabasesListResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$DatabasesListResponse>(parameters);
      }
    }

    /**
     * Partially updates a resource containing information about a database inside a Cloud SQL instance. This method supports patch semantics.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    patch(
      params: Params$Resource$Databases$Patch,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    patch(
      params?: Params$Resource$Databases$Patch,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Operation>;
    patch(
      params: Params$Resource$Databases$Patch,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    patch(
      params: Params$Resource$Databases$Patch,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    patch(
      params: Params$Resource$Databases$Patch,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    patch(callback: BodyResponseCallback<Schema$Operation>): void;
    patch(
      paramsOrCallback?:
        | Params$Resource$Databases$Patch
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
      let params = (paramsOrCallback || {}) as Params$Resource$Databases$Patch;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Databases$Patch;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://sqladmin.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/sql/v1beta4/projects/{project}/instances/{instance}/databases/{database}'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'PATCH',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['project', 'instance', 'database'],
        pathParams: ['database', 'instance', 'project'],
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
     * Updates a resource containing information about a database inside a Cloud SQL instance.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    update(
      params: Params$Resource$Databases$Update,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    update(
      params?: Params$Resource$Databases$Update,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Operation>;
    update(
      params: Params$Resource$Databases$Update,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    update(
      params: Params$Resource$Databases$Update,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    update(
      params: Params$Resource$Databases$Update,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    update(callback: BodyResponseCallback<Schema$Operation>): void;
    update(
      paramsOrCallback?:
        | Params$Resource$Databases$Update
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
      let params = (paramsOrCallback || {}) as Params$Resource$Databases$Update;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Databases$Update;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://sqladmin.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/sql/v1beta4/projects/{project}/instances/{instance}/databases/{database}'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'PUT',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['project', 'instance', 'database'],
        pathParams: ['database', 'instance', 'project'],
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

  export interface Params$Resource$Databases$Delete extends StandardParameters {
    /**
     * Name of the database to be deleted in the instance.
     */
    database?: string;
    /**
     * Database instance ID. This does not include the project ID.
     */
    instance?: string;
    /**
     * Project ID of the project that contains the instance.
     */
    project?: string;
  }
  export interface Params$Resource$Databases$Get extends StandardParameters {
    /**
     * Name of the database in the instance.
     */
    database?: string;
    /**
     * Database instance ID. This does not include the project ID.
     */
    instance?: string;
    /**
     * Project ID of the project that contains the instance.
     */
    project?: string;
  }
  export interface Params$Resource$Databases$Insert extends StandardParameters {
    /**
     * Database instance ID. This does not include the project ID.
     */
    instance?: string;
    /**
     * Project ID of the project that contains the instance.
     */
    project?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$Database;
  }
  export interface Params$Resource$Databases$List extends StandardParameters {
    /**
     * Cloud SQL instance ID. This does not include the project ID.
     */
    instance?: string;
    /**
     * Project ID of the project that contains the instance.
     */
    project?: string;
  }
  export interface Params$Resource$Databases$Patch extends StandardParameters {
    /**
     * Name of the database to be updated in the instance.
     */
    database?: string;
    /**
     * Database instance ID. This does not include the project ID.
     */
    instance?: string;
    /**
     * Project ID of the project that contains the instance.
     */
    project?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$Database;
  }
  export interface Params$Resource$Databases$Update extends StandardParameters {
    /**
     * Name of the database to be updated in the instance.
     */
    database?: string;
    /**
     * Database instance ID. This does not include the project ID.
     */
    instance?: string;
    /**
     * Project ID of the project that contains the instance.
     */
    project?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$Database;
  }

  export class Resource$Flags {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Lists all available database flags for Cloud SQL instances.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    list(
      params: Params$Resource$Flags$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Flags$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$FlagsListResponse>;
    list(
      params: Params$Resource$Flags$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Flags$List,
      options: MethodOptions | BodyResponseCallback<Schema$FlagsListResponse>,
      callback: BodyResponseCallback<Schema$FlagsListResponse>
    ): void;
    list(
      params: Params$Resource$Flags$List,
      callback: BodyResponseCallback<Schema$FlagsListResponse>
    ): void;
    list(callback: BodyResponseCallback<Schema$FlagsListResponse>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Flags$List
        | BodyResponseCallback<Schema$FlagsListResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$FlagsListResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$FlagsListResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$FlagsListResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback || {}) as Params$Resource$Flags$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Flags$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://sqladmin.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/sql/v1beta4/flags').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$FlagsListResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$FlagsListResponse>(parameters);
      }
    }
  }

  export interface Params$Resource$Flags$List extends StandardParameters {
    /**
     * Database type and version you want to retrieve flags for. By default, this method returns flags for all database types and versions.
     */
    databaseVersion?: string;
  }

  export class Resource$Instances {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Acquire a lease for the setup of SQL Server Reporting Services (SSRS).
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    acquireSsrsLease(
      params: Params$Resource$Instances$Acquiressrslease,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    acquireSsrsLease(
      params?: Params$Resource$Instances$Acquiressrslease,
      options?: MethodOptions
    ): GaxiosPromise<Schema$SqlInstancesAcquireSsrsLeaseResponse>;
    acquireSsrsLease(
      params: Params$Resource$Instances$Acquiressrslease,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    acquireSsrsLease(
      params: Params$Resource$Instances$Acquiressrslease,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$SqlInstancesAcquireSsrsLeaseResponse>,
      callback: BodyResponseCallback<Schema$SqlInstancesAcquireSsrsLeaseResponse>
    ): void;
    acquireSsrsLease(
      params: Params$Resource$Instances$Acquiressrslease,
      callback: BodyResponseCallback<Schema$SqlInstancesAcquireSsrsLeaseResponse>
    ): void;
    acquireSsrsLease(
      callback: BodyResponseCallback<Schema$SqlInstancesAcquireSsrsLeaseResponse>
    ): void;
    acquireSsrsLease(
      paramsOrCallback?:
        | Params$Resource$Instances$Acquiressrslease
        | BodyResponseCallback<Schema$SqlInstancesAcquireSsrsLeaseResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$SqlInstancesAcquireSsrsLeaseResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$SqlInstancesAcquireSsrsLeaseResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$SqlInstancesAcquireSsrsLeaseResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Instances$Acquiressrslease;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Instances$Acquiressrslease;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://sqladmin.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/sql/v1beta4/projects/{project}/instances/{instance}/acquireSsrsLease'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['project', 'instance'],
        pathParams: ['instance', 'project'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$SqlInstancesAcquireSsrsLeaseResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$SqlInstancesAcquireSsrsLeaseResponse>(
          parameters
        );
      }
    }

    /**
     * Add a new trusted Certificate Authority (CA) version for the specified instance. Required to prepare for a certificate rotation. If a CA version was previously added but never used in a certificate rotation, this operation replaces that version. There cannot be more than one CA version waiting to be rotated in.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    addServerCa(
      params: Params$Resource$Instances$Addserverca,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    addServerCa(
      params?: Params$Resource$Instances$Addserverca,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Operation>;
    addServerCa(
      params: Params$Resource$Instances$Addserverca,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    addServerCa(
      params: Params$Resource$Instances$Addserverca,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    addServerCa(
      params: Params$Resource$Instances$Addserverca,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    addServerCa(callback: BodyResponseCallback<Schema$Operation>): void;
    addServerCa(
      paramsOrCallback?:
        | Params$Resource$Instances$Addserverca
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
        {}) as Params$Resource$Instances$Addserverca;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Instances$Addserverca;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://sqladmin.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/sql/v1beta4/projects/{project}/instances/{instance}/addServerCa'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['project', 'instance'],
        pathParams: ['instance', 'project'],
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
     * Creates a Cloud SQL instance as a clone of the source instance. Using this operation might cause your instance to restart.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    clone(
      params: Params$Resource$Instances$Clone,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    clone(
      params?: Params$Resource$Instances$Clone,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Operation>;
    clone(
      params: Params$Resource$Instances$Clone,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    clone(
      params: Params$Resource$Instances$Clone,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    clone(
      params: Params$Resource$Instances$Clone,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    clone(callback: BodyResponseCallback<Schema$Operation>): void;
    clone(
      paramsOrCallback?:
        | Params$Resource$Instances$Clone
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
      let params = (paramsOrCallback || {}) as Params$Resource$Instances$Clone;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Instances$Clone;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://sqladmin.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/sql/v1beta4/projects/{project}/instances/{instance}/clone'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['project', 'instance'],
        pathParams: ['instance', 'project'],
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
     * Deletes a Cloud SQL instance.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    delete(
      params: Params$Resource$Instances$Delete,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    delete(
      params?: Params$Resource$Instances$Delete,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Operation>;
    delete(
      params: Params$Resource$Instances$Delete,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    delete(
      params: Params$Resource$Instances$Delete,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    delete(
      params: Params$Resource$Instances$Delete,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    delete(callback: BodyResponseCallback<Schema$Operation>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Instances$Delete
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
      let params = (paramsOrCallback || {}) as Params$Resource$Instances$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Instances$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://sqladmin.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl + '/sql/v1beta4/projects/{project}/instances/{instance}'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'DELETE',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['project', 'instance'],
        pathParams: ['instance', 'project'],
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
     * Demotes an existing standalone instance to be a Cloud SQL read replica for an external database server.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    demote(
      params: Params$Resource$Instances$Demote,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    demote(
      params?: Params$Resource$Instances$Demote,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Operation>;
    demote(
      params: Params$Resource$Instances$Demote,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    demote(
      params: Params$Resource$Instances$Demote,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    demote(
      params: Params$Resource$Instances$Demote,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    demote(callback: BodyResponseCallback<Schema$Operation>): void;
    demote(
      paramsOrCallback?:
        | Params$Resource$Instances$Demote
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
      let params = (paramsOrCallback || {}) as Params$Resource$Instances$Demote;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Instances$Demote;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://sqladmin.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/sql/v1beta4/projects/{project}/instances/{instance}/demote'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['project', 'instance'],
        pathParams: ['instance', 'project'],
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
     * Demotes the stand-alone instance to be a Cloud SQL read replica for an external database server.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    demoteMaster(
      params: Params$Resource$Instances$Demotemaster,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    demoteMaster(
      params?: Params$Resource$Instances$Demotemaster,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Operation>;
    demoteMaster(
      params: Params$Resource$Instances$Demotemaster,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    demoteMaster(
      params: Params$Resource$Instances$Demotemaster,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    demoteMaster(
      params: Params$Resource$Instances$Demotemaster,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    demoteMaster(callback: BodyResponseCallback<Schema$Operation>): void;
    demoteMaster(
      paramsOrCallback?:
        | Params$Resource$Instances$Demotemaster
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
        {}) as Params$Resource$Instances$Demotemaster;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Instances$Demotemaster;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://sqladmin.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/sql/v1beta4/projects/{project}/instances/{instance}/demoteMaster'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['project', 'instance'],
        pathParams: ['instance', 'project'],
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
     * Exports data from a Cloud SQL instance to a Cloud Storage bucket as a SQL dump or CSV file.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    export(
      params: Params$Resource$Instances$Export,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    export(
      params?: Params$Resource$Instances$Export,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Operation>;
    export(
      params: Params$Resource$Instances$Export,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    export(
      params: Params$Resource$Instances$Export,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    export(
      params: Params$Resource$Instances$Export,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    export(callback: BodyResponseCallback<Schema$Operation>): void;
    export(
      paramsOrCallback?:
        | Params$Resource$Instances$Export
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
      let params = (paramsOrCallback || {}) as Params$Resource$Instances$Export;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Instances$Export;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://sqladmin.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/sql/v1beta4/projects/{project}/instances/{instance}/export'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['project', 'instance'],
        pathParams: ['instance', 'project'],
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
     * Initiates a manual failover of a high availability (HA) primary instance to a standby instance, which becomes the primary instance. Users are then rerouted to the new primary. For more information, see the [Overview of high availability](https://cloud.google.com/sql/docs/mysql/high-availability) page in the Cloud SQL documentation. If using Legacy HA (MySQL only), this causes the instance to failover to its failover replica instance.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    failover(
      params: Params$Resource$Instances$Failover,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    failover(
      params?: Params$Resource$Instances$Failover,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Operation>;
    failover(
      params: Params$Resource$Instances$Failover,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    failover(
      params: Params$Resource$Instances$Failover,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    failover(
      params: Params$Resource$Instances$Failover,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    failover(callback: BodyResponseCallback<Schema$Operation>): void;
    failover(
      paramsOrCallback?:
        | Params$Resource$Instances$Failover
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
        {}) as Params$Resource$Instances$Failover;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Instances$Failover;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://sqladmin.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/sql/v1beta4/projects/{project}/instances/{instance}/failover'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['project', 'instance'],
        pathParams: ['instance', 'project'],
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
     * Retrieves a resource containing information about a Cloud SQL instance.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    get(
      params: Params$Resource$Instances$Get,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    get(
      params?: Params$Resource$Instances$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$DatabaseInstance>;
    get(
      params: Params$Resource$Instances$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Instances$Get,
      options: MethodOptions | BodyResponseCallback<Schema$DatabaseInstance>,
      callback: BodyResponseCallback<Schema$DatabaseInstance>
    ): void;
    get(
      params: Params$Resource$Instances$Get,
      callback: BodyResponseCallback<Schema$DatabaseInstance>
    ): void;
    get(callback: BodyResponseCallback<Schema$DatabaseInstance>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Instances$Get
        | BodyResponseCallback<Schema$DatabaseInstance>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$DatabaseInstance>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$DatabaseInstance>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$DatabaseInstance> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback || {}) as Params$Resource$Instances$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Instances$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://sqladmin.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl + '/sql/v1beta4/projects/{project}/instances/{instance}'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['project', 'instance'],
        pathParams: ['instance', 'project'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$DatabaseInstance>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$DatabaseInstance>(parameters);
      }
    }

    /**
     * Imports data into a Cloud SQL instance from a SQL dump or CSV file in Cloud Storage.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    import(
      params: Params$Resource$Instances$Import,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    import(
      params?: Params$Resource$Instances$Import,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Operation>;
    import(
      params: Params$Resource$Instances$Import,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    import(
      params: Params$Resource$Instances$Import,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    import(
      params: Params$Resource$Instances$Import,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    import(callback: BodyResponseCallback<Schema$Operation>): void;
    import(
      paramsOrCallback?:
        | Params$Resource$Instances$Import
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
      let params = (paramsOrCallback || {}) as Params$Resource$Instances$Import;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Instances$Import;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://sqladmin.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/sql/v1beta4/projects/{project}/instances/{instance}/import'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['project', 'instance'],
        pathParams: ['instance', 'project'],
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
     * Creates a new Cloud SQL instance.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    insert(
      params: Params$Resource$Instances$Insert,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    insert(
      params?: Params$Resource$Instances$Insert,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Operation>;
    insert(
      params: Params$Resource$Instances$Insert,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    insert(
      params: Params$Resource$Instances$Insert,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    insert(
      params: Params$Resource$Instances$Insert,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    insert(callback: BodyResponseCallback<Schema$Operation>): void;
    insert(
      paramsOrCallback?:
        | Params$Resource$Instances$Insert
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
      let params = (paramsOrCallback || {}) as Params$Resource$Instances$Insert;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Instances$Insert;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://sqladmin.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl + '/sql/v1beta4/projects/{project}/instances'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['project'],
        pathParams: ['project'],
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
     * Lists instances under a given project.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    list(
      params: Params$Resource$Instances$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Instances$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$InstancesListResponse>;
    list(
      params: Params$Resource$Instances$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Instances$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$InstancesListResponse>,
      callback: BodyResponseCallback<Schema$InstancesListResponse>
    ): void;
    list(
      params: Params$Resource$Instances$List,
      callback: BodyResponseCallback<Schema$InstancesListResponse>
    ): void;
    list(callback: BodyResponseCallback<Schema$InstancesListResponse>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Instances$List
        | BodyResponseCallback<Schema$InstancesListResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$InstancesListResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$InstancesListResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$InstancesListResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback || {}) as Params$Resource$Instances$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Instances$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://sqladmin.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl + '/sql/v1beta4/projects/{project}/instances'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['project'],
        pathParams: ['project'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$InstancesListResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$InstancesListResponse>(parameters);
      }
    }

    /**
     * Lists all of the trusted Certificate Authorities (CAs) for the specified instance. There can be up to three CAs listed: the CA that was used to sign the certificate that is currently in use, a CA that has been added but not yet used to sign a certificate, and a CA used to sign a certificate that has previously rotated out.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    listServerCas(
      params: Params$Resource$Instances$Listservercas,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    listServerCas(
      params?: Params$Resource$Instances$Listservercas,
      options?: MethodOptions
    ): GaxiosPromise<Schema$InstancesListServerCasResponse>;
    listServerCas(
      params: Params$Resource$Instances$Listservercas,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    listServerCas(
      params: Params$Resource$Instances$Listservercas,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$InstancesListServerCasResponse>,
      callback: BodyResponseCallback<Schema$InstancesListServerCasResponse>
    ): void;
    listServerCas(
      params: Params$Resource$Instances$Listservercas,
      callback: BodyResponseCallback<Schema$InstancesListServerCasResponse>
    ): void;
    listServerCas(
      callback: BodyResponseCallback<Schema$InstancesListServerCasResponse>
    ): void;
    listServerCas(
      paramsOrCallback?:
        | Params$Resource$Instances$Listservercas
        | BodyResponseCallback<Schema$InstancesListServerCasResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$InstancesListServerCasResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$InstancesListServerCasResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$InstancesListServerCasResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Instances$Listservercas;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Instances$Listservercas;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://sqladmin.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/sql/v1beta4/projects/{project}/instances/{instance}/listServerCas'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['project', 'instance'],
        pathParams: ['instance', 'project'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$InstancesListServerCasResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$InstancesListServerCasResponse>(
          parameters
        );
      }
    }

    /**
     * Partially updates settings of a Cloud SQL instance by merging the request with the current configuration. This method supports patch semantics.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    patch(
      params: Params$Resource$Instances$Patch,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    patch(
      params?: Params$Resource$Instances$Patch,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Operation>;
    patch(
      params: Params$Resource$Instances$Patch,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    patch(
      params: Params$Resource$Instances$Patch,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    patch(
      params: Params$Resource$Instances$Patch,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    patch(callback: BodyResponseCallback<Schema$Operation>): void;
    patch(
      paramsOrCallback?:
        | Params$Resource$Instances$Patch
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
      let params = (paramsOrCallback || {}) as Params$Resource$Instances$Patch;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Instances$Patch;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://sqladmin.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl + '/sql/v1beta4/projects/{project}/instances/{instance}'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'PATCH',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['project', 'instance'],
        pathParams: ['instance', 'project'],
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
     * Promotes the read replica instance to be a stand-alone Cloud SQL instance. Using this operation might cause your instance to restart.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    promoteReplica(
      params: Params$Resource$Instances$Promotereplica,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    promoteReplica(
      params?: Params$Resource$Instances$Promotereplica,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Operation>;
    promoteReplica(
      params: Params$Resource$Instances$Promotereplica,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    promoteReplica(
      params: Params$Resource$Instances$Promotereplica,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    promoteReplica(
      params: Params$Resource$Instances$Promotereplica,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    promoteReplica(callback: BodyResponseCallback<Schema$Operation>): void;
    promoteReplica(
      paramsOrCallback?:
        | Params$Resource$Instances$Promotereplica
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
        {}) as Params$Resource$Instances$Promotereplica;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Instances$Promotereplica;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://sqladmin.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/sql/v1beta4/projects/{project}/instances/{instance}/promoteReplica'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['project', 'instance'],
        pathParams: ['instance', 'project'],
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
     * Reencrypt CMEK instance with latest key version.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    reencrypt(
      params: Params$Resource$Instances$Reencrypt,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    reencrypt(
      params?: Params$Resource$Instances$Reencrypt,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Operation>;
    reencrypt(
      params: Params$Resource$Instances$Reencrypt,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    reencrypt(
      params: Params$Resource$Instances$Reencrypt,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    reencrypt(
      params: Params$Resource$Instances$Reencrypt,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    reencrypt(callback: BodyResponseCallback<Schema$Operation>): void;
    reencrypt(
      paramsOrCallback?:
        | Params$Resource$Instances$Reencrypt
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
        {}) as Params$Resource$Instances$Reencrypt;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Instances$Reencrypt;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://sqladmin.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/sql/v1beta4/projects/{project}/instances/{instance}/reencrypt'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['project', 'instance'],
        pathParams: ['instance', 'project'],
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
     * Release a lease for the setup of SQL Server Reporting Services (SSRS).
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    releaseSsrsLease(
      params: Params$Resource$Instances$Releasessrslease,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    releaseSsrsLease(
      params?: Params$Resource$Instances$Releasessrslease,
      options?: MethodOptions
    ): GaxiosPromise<Schema$SqlInstancesReleaseSsrsLeaseResponse>;
    releaseSsrsLease(
      params: Params$Resource$Instances$Releasessrslease,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    releaseSsrsLease(
      params: Params$Resource$Instances$Releasessrslease,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$SqlInstancesReleaseSsrsLeaseResponse>,
      callback: BodyResponseCallback<Schema$SqlInstancesReleaseSsrsLeaseResponse>
    ): void;
    releaseSsrsLease(
      params: Params$Resource$Instances$Releasessrslease,
      callback: BodyResponseCallback<Schema$SqlInstancesReleaseSsrsLeaseResponse>
    ): void;
    releaseSsrsLease(
      callback: BodyResponseCallback<Schema$SqlInstancesReleaseSsrsLeaseResponse>
    ): void;
    releaseSsrsLease(
      paramsOrCallback?:
        | Params$Resource$Instances$Releasessrslease
        | BodyResponseCallback<Schema$SqlInstancesReleaseSsrsLeaseResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$SqlInstancesReleaseSsrsLeaseResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$SqlInstancesReleaseSsrsLeaseResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$SqlInstancesReleaseSsrsLeaseResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Instances$Releasessrslease;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Instances$Releasessrslease;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://sqladmin.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/sql/v1beta4/projects/{project}/instances/{instance}/releaseSsrsLease'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['project', 'instance'],
        pathParams: ['instance', 'project'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$SqlInstancesReleaseSsrsLeaseResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$SqlInstancesReleaseSsrsLeaseResponse>(
          parameters
        );
      }
    }

    /**
     * Deletes all client certificates and generates a new server SSL certificate for the instance.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    resetSslConfig(
      params: Params$Resource$Instances$Resetsslconfig,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    resetSslConfig(
      params?: Params$Resource$Instances$Resetsslconfig,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Operation>;
    resetSslConfig(
      params: Params$Resource$Instances$Resetsslconfig,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    resetSslConfig(
      params: Params$Resource$Instances$Resetsslconfig,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    resetSslConfig(
      params: Params$Resource$Instances$Resetsslconfig,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    resetSslConfig(callback: BodyResponseCallback<Schema$Operation>): void;
    resetSslConfig(
      paramsOrCallback?:
        | Params$Resource$Instances$Resetsslconfig
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
        {}) as Params$Resource$Instances$Resetsslconfig;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Instances$Resetsslconfig;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://sqladmin.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/sql/v1beta4/projects/{project}/instances/{instance}/resetSslConfig'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['project', 'instance'],
        pathParams: ['instance', 'project'],
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
     * Restarts a Cloud SQL instance.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    restart(
      params: Params$Resource$Instances$Restart,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    restart(
      params?: Params$Resource$Instances$Restart,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Operation>;
    restart(
      params: Params$Resource$Instances$Restart,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    restart(
      params: Params$Resource$Instances$Restart,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    restart(
      params: Params$Resource$Instances$Restart,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    restart(callback: BodyResponseCallback<Schema$Operation>): void;
    restart(
      paramsOrCallback?:
        | Params$Resource$Instances$Restart
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
        {}) as Params$Resource$Instances$Restart;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Instances$Restart;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://sqladmin.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/sql/v1beta4/projects/{project}/instances/{instance}/restart'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['project', 'instance'],
        pathParams: ['instance', 'project'],
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
     * Restores a backup of a Cloud SQL instance. Using this operation might cause your instance to restart.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    restoreBackup(
      params: Params$Resource$Instances$Restorebackup,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    restoreBackup(
      params?: Params$Resource$Instances$Restorebackup,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Operation>;
    restoreBackup(
      params: Params$Resource$Instances$Restorebackup,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    restoreBackup(
      params: Params$Resource$Instances$Restorebackup,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    restoreBackup(
      params: Params$Resource$Instances$Restorebackup,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    restoreBackup(callback: BodyResponseCallback<Schema$Operation>): void;
    restoreBackup(
      paramsOrCallback?:
        | Params$Resource$Instances$Restorebackup
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
        {}) as Params$Resource$Instances$Restorebackup;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Instances$Restorebackup;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://sqladmin.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/sql/v1beta4/projects/{project}/instances/{instance}/restoreBackup'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['project', 'instance'],
        pathParams: ['instance', 'project'],
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
     * Rotates the server certificate to one signed by the Certificate Authority (CA) version previously added with the addServerCA method.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    rotateServerCa(
      params: Params$Resource$Instances$Rotateserverca,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    rotateServerCa(
      params?: Params$Resource$Instances$Rotateserverca,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Operation>;
    rotateServerCa(
      params: Params$Resource$Instances$Rotateserverca,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    rotateServerCa(
      params: Params$Resource$Instances$Rotateserverca,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    rotateServerCa(
      params: Params$Resource$Instances$Rotateserverca,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    rotateServerCa(callback: BodyResponseCallback<Schema$Operation>): void;
    rotateServerCa(
      paramsOrCallback?:
        | Params$Resource$Instances$Rotateserverca
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
        {}) as Params$Resource$Instances$Rotateserverca;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Instances$Rotateserverca;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://sqladmin.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/sql/v1beta4/projects/{project}/instances/{instance}/rotateServerCa'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['project', 'instance'],
        pathParams: ['instance', 'project'],
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
     * Starts the replication in the read replica instance.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    startReplica(
      params: Params$Resource$Instances$Startreplica,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    startReplica(
      params?: Params$Resource$Instances$Startreplica,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Operation>;
    startReplica(
      params: Params$Resource$Instances$Startreplica,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    startReplica(
      params: Params$Resource$Instances$Startreplica,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    startReplica(
      params: Params$Resource$Instances$Startreplica,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    startReplica(callback: BodyResponseCallback<Schema$Operation>): void;
    startReplica(
      paramsOrCallback?:
        | Params$Resource$Instances$Startreplica
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
        {}) as Params$Resource$Instances$Startreplica;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Instances$Startreplica;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://sqladmin.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/sql/v1beta4/projects/{project}/instances/{instance}/startReplica'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['project', 'instance'],
        pathParams: ['instance', 'project'],
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
     * Stops the replication in the read replica instance.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    stopReplica(
      params: Params$Resource$Instances$Stopreplica,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    stopReplica(
      params?: Params$Resource$Instances$Stopreplica,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Operation>;
    stopReplica(
      params: Params$Resource$Instances$Stopreplica,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    stopReplica(
      params: Params$Resource$Instances$Stopreplica,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    stopReplica(
      params: Params$Resource$Instances$Stopreplica,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    stopReplica(callback: BodyResponseCallback<Schema$Operation>): void;
    stopReplica(
      paramsOrCallback?:
        | Params$Resource$Instances$Stopreplica
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
        {}) as Params$Resource$Instances$Stopreplica;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Instances$Stopreplica;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://sqladmin.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/sql/v1beta4/projects/{project}/instances/{instance}/stopReplica'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['project', 'instance'],
        pathParams: ['instance', 'project'],
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
     * Switches over from the primary instance to a replica instance.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    switchover(
      params: Params$Resource$Instances$Switchover,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    switchover(
      params?: Params$Resource$Instances$Switchover,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Operation>;
    switchover(
      params: Params$Resource$Instances$Switchover,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    switchover(
      params: Params$Resource$Instances$Switchover,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    switchover(
      params: Params$Resource$Instances$Switchover,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    switchover(callback: BodyResponseCallback<Schema$Operation>): void;
    switchover(
      paramsOrCallback?:
        | Params$Resource$Instances$Switchover
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
        {}) as Params$Resource$Instances$Switchover;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Instances$Switchover;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://sqladmin.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/sql/v1beta4/projects/{project}/instances/{instance}/switchover'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['project', 'instance'],
        pathParams: ['instance', 'project'],
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
     * Truncate MySQL general and slow query log tables MySQL only.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    truncateLog(
      params: Params$Resource$Instances$Truncatelog,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    truncateLog(
      params?: Params$Resource$Instances$Truncatelog,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Operation>;
    truncateLog(
      params: Params$Resource$Instances$Truncatelog,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    truncateLog(
      params: Params$Resource$Instances$Truncatelog,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    truncateLog(
      params: Params$Resource$Instances$Truncatelog,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    truncateLog(callback: BodyResponseCallback<Schema$Operation>): void;
    truncateLog(
      paramsOrCallback?:
        | Params$Resource$Instances$Truncatelog
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
        {}) as Params$Resource$Instances$Truncatelog;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Instances$Truncatelog;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://sqladmin.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/sql/v1beta4/projects/{project}/instances/{instance}/truncateLog'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['project', 'instance'],
        pathParams: ['instance', 'project'],
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
     * Updates settings of a Cloud SQL instance. Using this operation might cause your instance to restart.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    update(
      params: Params$Resource$Instances$Update,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    update(
      params?: Params$Resource$Instances$Update,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Operation>;
    update(
      params: Params$Resource$Instances$Update,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    update(
      params: Params$Resource$Instances$Update,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    update(
      params: Params$Resource$Instances$Update,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    update(callback: BodyResponseCallback<Schema$Operation>): void;
    update(
      paramsOrCallback?:
        | Params$Resource$Instances$Update
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
      let params = (paramsOrCallback || {}) as Params$Resource$Instances$Update;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Instances$Update;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://sqladmin.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl + '/sql/v1beta4/projects/{project}/instances/{instance}'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'PUT',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['project', 'instance'],
        pathParams: ['instance', 'project'],
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

  export interface Params$Resource$Instances$Acquiressrslease
    extends StandardParameters {
    /**
     * Required. Cloud SQL instance ID. This doesn't include the project ID. It's composed of lowercase letters, numbers, and hyphens, and it must start with a letter. The total length must be 98 characters or less (Example: instance-id).
     */
    instance?: string;
    /**
     * Required. ID of the project that contains the instance (Example: project-id).
     */
    project?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$InstancesAcquireSsrsLeaseRequest;
  }
  export interface Params$Resource$Instances$Addserverca
    extends StandardParameters {
    /**
     * Cloud SQL instance ID. This does not include the project ID.
     */
    instance?: string;
    /**
     * Project ID of the project that contains the instance.
     */
    project?: string;
  }
  export interface Params$Resource$Instances$Clone extends StandardParameters {
    /**
     * The ID of the Cloud SQL instance to be cloned (source). This does not include the project ID.
     */
    instance?: string;
    /**
     * Project ID of the source as well as the clone Cloud SQL instance.
     */
    project?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$InstancesCloneRequest;
  }
  export interface Params$Resource$Instances$Delete extends StandardParameters {
    /**
     * Cloud SQL instance ID. This does not include the project ID.
     */
    instance?: string;
    /**
     * Project ID of the project that contains the instance to be deleted.
     */
    project?: string;
  }
  export interface Params$Resource$Instances$Demote extends StandardParameters {
    /**
     * Required. The name of the Cloud SQL instance.
     */
    instance?: string;
    /**
     * Required. The project ID of the project that contains the instance.
     */
    project?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$InstancesDemoteRequest;
  }
  export interface Params$Resource$Instances$Demotemaster
    extends StandardParameters {
    /**
     * Cloud SQL instance name.
     */
    instance?: string;
    /**
     * ID of the project that contains the instance.
     */
    project?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$InstancesDemoteMasterRequest;
  }
  export interface Params$Resource$Instances$Export extends StandardParameters {
    /**
     * The Cloud SQL instance ID. This doesn't include the project ID.
     */
    instance?: string;
    /**
     * Project ID of the project that contains the instance to be exported.
     */
    project?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$InstancesExportRequest;
  }
  export interface Params$Resource$Instances$Failover
    extends StandardParameters {
    /**
     * Cloud SQL instance ID. This does not include the project ID.
     */
    instance?: string;
    /**
     * ID of the project that contains the read replica.
     */
    project?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$InstancesFailoverRequest;
  }
  export interface Params$Resource$Instances$Get extends StandardParameters {
    /**
     * Database instance ID. This does not include the project ID.
     */
    instance?: string;
    /**
     * Project ID of the project that contains the instance.
     */
    project?: string;
  }
  export interface Params$Resource$Instances$Import extends StandardParameters {
    /**
     * Cloud SQL instance ID. This does not include the project ID.
     */
    instance?: string;
    /**
     * Project ID of the project that contains the instance.
     */
    project?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$InstancesImportRequest;
  }
  export interface Params$Resource$Instances$Insert extends StandardParameters {
    /**
     * Project ID of the project to which the newly created Cloud SQL instances should belong.
     */
    project?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$DatabaseInstance;
  }
  export interface Params$Resource$Instances$List extends StandardParameters {
    /**
     * A filter expression that filters resources listed in the response. The expression is in the form of field:value. For example, 'instanceType:CLOUD_SQL_INSTANCE'. Fields can be nested as needed as per their JSON representation, such as 'settings.userLabels.auto_start:true'. Multiple filter queries are space-separated. For example. 'state:RUNNABLE instanceType:CLOUD_SQL_INSTANCE'. By default, each expression is an AND expression. However, you can include AND and OR expressions explicitly.
     */
    filter?: string;
    /**
     * The maximum number of instances to return. The service may return fewer than this value. If unspecified, at most 500 instances are returned. The maximum value is 1000; values above 1000 are coerced to 1000.
     */
    maxResults?: number;
    /**
     * A previously-returned page token representing part of the larger set of results to view.
     */
    pageToken?: string;
    /**
     * Project ID of the project for which to list Cloud SQL instances.
     */
    project?: string;
  }
  export interface Params$Resource$Instances$Listservercas
    extends StandardParameters {
    /**
     * Cloud SQL instance ID. This does not include the project ID.
     */
    instance?: string;
    /**
     * Project ID of the project that contains the instance.
     */
    project?: string;
  }
  export interface Params$Resource$Instances$Patch extends StandardParameters {
    /**
     * Cloud SQL instance ID. This does not include the project ID.
     */
    instance?: string;
    /**
     * Project ID of the project that contains the instance.
     */
    project?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$DatabaseInstance;
  }
  export interface Params$Resource$Instances$Promotereplica
    extends StandardParameters {
    /**
     * Set to true if the promote operation should attempt to re-add the original primary as a replica when it comes back online. Otherwise, if this value is false or not set, the original primary will be a standalone instance.
     */
    failover?: boolean;
    /**
     * Cloud SQL read replica instance name.
     */
    instance?: string;
    /**
     * ID of the project that contains the read replica.
     */
    project?: string;
  }
  export interface Params$Resource$Instances$Reencrypt
    extends StandardParameters {
    /**
     * Cloud SQL instance ID. This does not include the project ID.
     */
    instance?: string;
    /**
     * ID of the project that contains the instance.
     */
    project?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$InstancesReencryptRequest;
  }
  export interface Params$Resource$Instances$Releasessrslease
    extends StandardParameters {
    /**
     * Required. The Cloud SQL instance ID. This doesn't include the project ID. It's composed of lowercase letters, numbers, and hyphens, and it must start with a letter. The total length must be 98 characters or less (Example: instance-id).
     */
    instance?: string;
    /**
     * Required. The ID of the project that contains the instance (Example: project-id).
     */
    project?: string;
  }
  export interface Params$Resource$Instances$Resetsslconfig
    extends StandardParameters {
    /**
     * Cloud SQL instance ID. This does not include the project ID.
     */
    instance?: string;
    /**
     * Project ID of the project that contains the instance.
     */
    project?: string;
  }
  export interface Params$Resource$Instances$Restart
    extends StandardParameters {
    /**
     * Cloud SQL instance ID. This does not include the project ID.
     */
    instance?: string;
    /**
     * Project ID of the project that contains the instance to be restarted.
     */
    project?: string;
  }
  export interface Params$Resource$Instances$Restorebackup
    extends StandardParameters {
    /**
     * Cloud SQL instance ID. This does not include the project ID.
     */
    instance?: string;
    /**
     * Project ID of the project that contains the instance.
     */
    project?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$InstancesRestoreBackupRequest;
  }
  export interface Params$Resource$Instances$Rotateserverca
    extends StandardParameters {
    /**
     * Cloud SQL instance ID. This does not include the project ID.
     */
    instance?: string;
    /**
     * Project ID of the project that contains the instance.
     */
    project?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$InstancesRotateServerCaRequest;
  }
  export interface Params$Resource$Instances$Startreplica
    extends StandardParameters {
    /**
     * Cloud SQL read replica instance name.
     */
    instance?: string;
    /**
     * ID of the project that contains the read replica.
     */
    project?: string;
  }
  export interface Params$Resource$Instances$Stopreplica
    extends StandardParameters {
    /**
     * Cloud SQL read replica instance name.
     */
    instance?: string;
    /**
     * ID of the project that contains the read replica.
     */
    project?: string;
  }
  export interface Params$Resource$Instances$Switchover
    extends StandardParameters {
    /**
     * Optional. (MySQL only) Cloud SQL instance operations timeout, which is a sum of all database operations. Default value is 10 minutes and can be modified to a maximum value of 24 hours.
     */
    dbTimeout?: string;
    /**
     * Cloud SQL read replica instance name.
     */
    instance?: string;
    /**
     * ID of the project that contains the replica.
     */
    project?: string;
  }
  export interface Params$Resource$Instances$Truncatelog
    extends StandardParameters {
    /**
     * Cloud SQL instance ID. This does not include the project ID.
     */
    instance?: string;
    /**
     * Project ID of the Cloud SQL project.
     */
    project?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$InstancesTruncateLogRequest;
  }
  export interface Params$Resource$Instances$Update extends StandardParameters {
    /**
     * Cloud SQL instance ID. This does not include the project ID.
     */
    instance?: string;
    /**
     * Project ID of the project that contains the instance.
     */
    project?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$DatabaseInstance;
  }

  export class Resource$Operations {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Cancels an instance operation that has been performed on an instance.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    cancel(
      params: Params$Resource$Operations$Cancel,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    cancel(
      params?: Params$Resource$Operations$Cancel,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Empty>;
    cancel(
      params: Params$Resource$Operations$Cancel,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    cancel(
      params: Params$Resource$Operations$Cancel,
      options: MethodOptions | BodyResponseCallback<Schema$Empty>,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    cancel(
      params: Params$Resource$Operations$Cancel,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    cancel(callback: BodyResponseCallback<Schema$Empty>): void;
    cancel(
      paramsOrCallback?:
        | Params$Resource$Operations$Cancel
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
        {}) as Params$Resource$Operations$Cancel;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Operations$Cancel;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://sqladmin.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/sql/v1beta4/projects/{project}/operations/{operation}/cancel'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['project', 'operation'],
        pathParams: ['operation', 'project'],
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
     * Retrieves an instance operation that has been performed on an instance.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    get(
      params: Params$Resource$Operations$Get,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    get(
      params?: Params$Resource$Operations$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Operation>;
    get(
      params: Params$Resource$Operations$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Operations$Get,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    get(
      params: Params$Resource$Operations$Get,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    get(callback: BodyResponseCallback<Schema$Operation>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Operations$Get
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
      let params = (paramsOrCallback || {}) as Params$Resource$Operations$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Operations$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://sqladmin.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl + '/sql/v1beta4/projects/{project}/operations/{operation}'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['project', 'operation'],
        pathParams: ['operation', 'project'],
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
     * Lists all instance operations that have been performed on the given Cloud SQL instance in the reverse chronological order of the start time.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    list(
      params: Params$Resource$Operations$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Operations$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$OperationsListResponse>;
    list(
      params: Params$Resource$Operations$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Operations$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$OperationsListResponse>,
      callback: BodyResponseCallback<Schema$OperationsListResponse>
    ): void;
    list(
      params: Params$Resource$Operations$List,
      callback: BodyResponseCallback<Schema$OperationsListResponse>
    ): void;
    list(callback: BodyResponseCallback<Schema$OperationsListResponse>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Operations$List
        | BodyResponseCallback<Schema$OperationsListResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$OperationsListResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$OperationsListResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$OperationsListResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback || {}) as Params$Resource$Operations$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Operations$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://sqladmin.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl + '/sql/v1beta4/projects/{project}/operations'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['project'],
        pathParams: ['project'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$OperationsListResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$OperationsListResponse>(parameters);
      }
    }
  }

  export interface Params$Resource$Operations$Cancel
    extends StandardParameters {
    /**
     * Instance operation ID.
     */
    operation?: string;
    /**
     * Project ID of the project that contains the instance.
     */
    project?: string;
  }
  export interface Params$Resource$Operations$Get extends StandardParameters {
    /**
     * Instance operation ID.
     */
    operation?: string;
    /**
     * Project ID of the project that contains the instance.
     */
    project?: string;
  }
  export interface Params$Resource$Operations$List extends StandardParameters {
    /**
     * Cloud SQL instance ID. This does not include the project ID.
     */
    instance?: string;
    /**
     * Maximum number of operations per response.
     */
    maxResults?: number;
    /**
     * A previously-returned page token representing part of the larger set of results to view.
     */
    pageToken?: string;
    /**
     * Project ID of the project that contains the instance.
     */
    project?: string;
  }

  export class Resource$Projects {
    context: APIRequestContext;
    instances: Resource$Projects$Instances;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.instances = new Resource$Projects$Instances(this.context);
    }
  }

  export class Resource$Projects$Instances {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Get Disk Shrink Config for a given instance.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    getDiskShrinkConfig(
      params: Params$Resource$Projects$Instances$Getdiskshrinkconfig,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    getDiskShrinkConfig(
      params?: Params$Resource$Projects$Instances$Getdiskshrinkconfig,
      options?: MethodOptions
    ): GaxiosPromise<Schema$SqlInstancesGetDiskShrinkConfigResponse>;
    getDiskShrinkConfig(
      params: Params$Resource$Projects$Instances$Getdiskshrinkconfig,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    getDiskShrinkConfig(
      params: Params$Resource$Projects$Instances$Getdiskshrinkconfig,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$SqlInstancesGetDiskShrinkConfigResponse>,
      callback: BodyResponseCallback<Schema$SqlInstancesGetDiskShrinkConfigResponse>
    ): void;
    getDiskShrinkConfig(
      params: Params$Resource$Projects$Instances$Getdiskshrinkconfig,
      callback: BodyResponseCallback<Schema$SqlInstancesGetDiskShrinkConfigResponse>
    ): void;
    getDiskShrinkConfig(
      callback: BodyResponseCallback<Schema$SqlInstancesGetDiskShrinkConfigResponse>
    ): void;
    getDiskShrinkConfig(
      paramsOrCallback?:
        | Params$Resource$Projects$Instances$Getdiskshrinkconfig
        | BodyResponseCallback<Schema$SqlInstancesGetDiskShrinkConfigResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$SqlInstancesGetDiskShrinkConfigResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$SqlInstancesGetDiskShrinkConfigResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$SqlInstancesGetDiskShrinkConfigResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Instances$Getdiskshrinkconfig;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Instances$Getdiskshrinkconfig;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://sqladmin.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/sql/v1beta4/projects/{project}/instances/{instance}/getDiskShrinkConfig'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['project', 'instance'],
        pathParams: ['instance', 'project'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$SqlInstancesGetDiskShrinkConfigResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$SqlInstancesGetDiskShrinkConfigResponse>(
          parameters
        );
      }
    }

    /**
     * Get Latest Recovery Time for a given instance.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    getLatestRecoveryTime(
      params: Params$Resource$Projects$Instances$Getlatestrecoverytime,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    getLatestRecoveryTime(
      params?: Params$Resource$Projects$Instances$Getlatestrecoverytime,
      options?: MethodOptions
    ): GaxiosPromise<Schema$SqlInstancesGetLatestRecoveryTimeResponse>;
    getLatestRecoveryTime(
      params: Params$Resource$Projects$Instances$Getlatestrecoverytime,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    getLatestRecoveryTime(
      params: Params$Resource$Projects$Instances$Getlatestrecoverytime,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$SqlInstancesGetLatestRecoveryTimeResponse>,
      callback: BodyResponseCallback<Schema$SqlInstancesGetLatestRecoveryTimeResponse>
    ): void;
    getLatestRecoveryTime(
      params: Params$Resource$Projects$Instances$Getlatestrecoverytime,
      callback: BodyResponseCallback<Schema$SqlInstancesGetLatestRecoveryTimeResponse>
    ): void;
    getLatestRecoveryTime(
      callback: BodyResponseCallback<Schema$SqlInstancesGetLatestRecoveryTimeResponse>
    ): void;
    getLatestRecoveryTime(
      paramsOrCallback?:
        | Params$Resource$Projects$Instances$Getlatestrecoverytime
        | BodyResponseCallback<Schema$SqlInstancesGetLatestRecoveryTimeResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$SqlInstancesGetLatestRecoveryTimeResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$SqlInstancesGetLatestRecoveryTimeResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$SqlInstancesGetLatestRecoveryTimeResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Instances$Getlatestrecoverytime;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Instances$Getlatestrecoverytime;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://sqladmin.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/sql/v1beta4/projects/{project}/instances/{instance}/getLatestRecoveryTime'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['project', 'instance'],
        pathParams: ['instance', 'project'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$SqlInstancesGetLatestRecoveryTimeResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$SqlInstancesGetLatestRecoveryTimeResponse>(
          parameters
        );
      }
    }

    /**
     * Perform Disk Shrink on primary instance.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    performDiskShrink(
      params: Params$Resource$Projects$Instances$Performdiskshrink,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    performDiskShrink(
      params?: Params$Resource$Projects$Instances$Performdiskshrink,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Operation>;
    performDiskShrink(
      params: Params$Resource$Projects$Instances$Performdiskshrink,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    performDiskShrink(
      params: Params$Resource$Projects$Instances$Performdiskshrink,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    performDiskShrink(
      params: Params$Resource$Projects$Instances$Performdiskshrink,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    performDiskShrink(callback: BodyResponseCallback<Schema$Operation>): void;
    performDiskShrink(
      paramsOrCallback?:
        | Params$Resource$Projects$Instances$Performdiskshrink
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
        {}) as Params$Resource$Projects$Instances$Performdiskshrink;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Instances$Performdiskshrink;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://sqladmin.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/sql/v1beta4/projects/{project}/instances/{instance}/performDiskShrink'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['project', 'instance'],
        pathParams: ['instance', 'project'],
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
     * Reschedules the maintenance on the given instance.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    rescheduleMaintenance(
      params: Params$Resource$Projects$Instances$Reschedulemaintenance,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    rescheduleMaintenance(
      params?: Params$Resource$Projects$Instances$Reschedulemaintenance,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Operation>;
    rescheduleMaintenance(
      params: Params$Resource$Projects$Instances$Reschedulemaintenance,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    rescheduleMaintenance(
      params: Params$Resource$Projects$Instances$Reschedulemaintenance,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    rescheduleMaintenance(
      params: Params$Resource$Projects$Instances$Reschedulemaintenance,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    rescheduleMaintenance(
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    rescheduleMaintenance(
      paramsOrCallback?:
        | Params$Resource$Projects$Instances$Reschedulemaintenance
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
        {}) as Params$Resource$Projects$Instances$Reschedulemaintenance;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Instances$Reschedulemaintenance;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://sqladmin.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/sql/v1beta4/projects/{project}/instances/{instance}/rescheduleMaintenance'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['project', 'instance'],
        pathParams: ['instance', 'project'],
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
     * Reset Replica Size to primary instance disk size.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    resetReplicaSize(
      params: Params$Resource$Projects$Instances$Resetreplicasize,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    resetReplicaSize(
      params?: Params$Resource$Projects$Instances$Resetreplicasize,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Operation>;
    resetReplicaSize(
      params: Params$Resource$Projects$Instances$Resetreplicasize,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    resetReplicaSize(
      params: Params$Resource$Projects$Instances$Resetreplicasize,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    resetReplicaSize(
      params: Params$Resource$Projects$Instances$Resetreplicasize,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    resetReplicaSize(callback: BodyResponseCallback<Schema$Operation>): void;
    resetReplicaSize(
      paramsOrCallback?:
        | Params$Resource$Projects$Instances$Resetreplicasize
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
        {}) as Params$Resource$Projects$Instances$Resetreplicasize;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Instances$Resetreplicasize;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://sqladmin.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/sql/v1beta4/projects/{project}/instances/{instance}/resetReplicaSize'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['project', 'instance'],
        pathParams: ['instance', 'project'],
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
     * Start External primary instance migration.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    startExternalSync(
      params: Params$Resource$Projects$Instances$Startexternalsync,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    startExternalSync(
      params?: Params$Resource$Projects$Instances$Startexternalsync,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Operation>;
    startExternalSync(
      params: Params$Resource$Projects$Instances$Startexternalsync,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    startExternalSync(
      params: Params$Resource$Projects$Instances$Startexternalsync,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    startExternalSync(
      params: Params$Resource$Projects$Instances$Startexternalsync,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    startExternalSync(callback: BodyResponseCallback<Schema$Operation>): void;
    startExternalSync(
      paramsOrCallback?:
        | Params$Resource$Projects$Instances$Startexternalsync
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
        {}) as Params$Resource$Projects$Instances$Startexternalsync;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Instances$Startexternalsync;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://sqladmin.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/sql/v1beta4/projects/{project}/instances/{instance}/startExternalSync'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['project', 'instance'],
        pathParams: ['instance', 'project'],
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
     * Verify External primary instance external sync settings.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    verifyExternalSyncSettings(
      params: Params$Resource$Projects$Instances$Verifyexternalsyncsettings,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    verifyExternalSyncSettings(
      params?: Params$Resource$Projects$Instances$Verifyexternalsyncsettings,
      options?: MethodOptions
    ): GaxiosPromise<Schema$SqlInstancesVerifyExternalSyncSettingsResponse>;
    verifyExternalSyncSettings(
      params: Params$Resource$Projects$Instances$Verifyexternalsyncsettings,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    verifyExternalSyncSettings(
      params: Params$Resource$Projects$Instances$Verifyexternalsyncsettings,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$SqlInstancesVerifyExternalSyncSettingsResponse>,
      callback: BodyResponseCallback<Schema$SqlInstancesVerifyExternalSyncSettingsResponse>
    ): void;
    verifyExternalSyncSettings(
      params: Params$Resource$Projects$Instances$Verifyexternalsyncsettings,
      callback: BodyResponseCallback<Schema$SqlInstancesVerifyExternalSyncSettingsResponse>
    ): void;
    verifyExternalSyncSettings(
      callback: BodyResponseCallback<Schema$SqlInstancesVerifyExternalSyncSettingsResponse>
    ): void;
    verifyExternalSyncSettings(
      paramsOrCallback?:
        | Params$Resource$Projects$Instances$Verifyexternalsyncsettings
        | BodyResponseCallback<Schema$SqlInstancesVerifyExternalSyncSettingsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$SqlInstancesVerifyExternalSyncSettingsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$SqlInstancesVerifyExternalSyncSettingsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$SqlInstancesVerifyExternalSyncSettingsResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Instances$Verifyexternalsyncsettings;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Instances$Verifyexternalsyncsettings;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://sqladmin.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/sql/v1beta4/projects/{project}/instances/{instance}/verifyExternalSyncSettings'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['project', 'instance'],
        pathParams: ['instance', 'project'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$SqlInstancesVerifyExternalSyncSettingsResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$SqlInstancesVerifyExternalSyncSettingsResponse>(
          parameters
        );
      }
    }
  }

  export interface Params$Resource$Projects$Instances$Getdiskshrinkconfig
    extends StandardParameters {
    /**
     * Cloud SQL instance ID. This does not include the project ID.
     */
    instance?: string;
    /**
     * Project ID of the project that contains the instance.
     */
    project?: string;
  }
  export interface Params$Resource$Projects$Instances$Getlatestrecoverytime
    extends StandardParameters {
    /**
     * Cloud SQL instance ID. This does not include the project ID.
     */
    instance?: string;
    /**
     * Project ID of the project that contains the instance.
     */
    project?: string;
  }
  export interface Params$Resource$Projects$Instances$Performdiskshrink
    extends StandardParameters {
    /**
     * Cloud SQL instance ID. This does not include the project ID.
     */
    instance?: string;
    /**
     * Project ID of the project that contains the instance.
     */
    project?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$PerformDiskShrinkContext;
  }
  export interface Params$Resource$Projects$Instances$Reschedulemaintenance
    extends StandardParameters {
    /**
     * Cloud SQL instance ID. This does not include the project ID.
     */
    instance?: string;
    /**
     * ID of the project that contains the instance.
     */
    project?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$SqlInstancesRescheduleMaintenanceRequestBody;
  }
  export interface Params$Resource$Projects$Instances$Resetreplicasize
    extends StandardParameters {
    /**
     * Cloud SQL read replica instance name.
     */
    instance?: string;
    /**
     * ID of the project that contains the read replica.
     */
    project?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$SqlInstancesResetReplicaSizeRequest;
  }
  export interface Params$Resource$Projects$Instances$Startexternalsync
    extends StandardParameters {
    /**
     * Cloud SQL instance ID. This does not include the project ID.
     */
    instance?: string;
    /**
     * ID of the project that contains the instance.
     */
    project?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$SqlInstancesStartExternalSyncRequest;
  }
  export interface Params$Resource$Projects$Instances$Verifyexternalsyncsettings
    extends StandardParameters {
    /**
     * Cloud SQL instance ID. This does not include the project ID.
     */
    instance?: string;
    /**
     * Project ID of the project that contains the instance.
     */
    project?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$SqlInstancesVerifyExternalSyncSettingsRequest;
  }

  export class Resource$Sslcerts {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Generates a short-lived X509 certificate containing the provided public key and signed by a private key specific to the target instance. Users may use the certificate to authenticate as themselves when connecting to the database.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    createEphemeral(
      params: Params$Resource$Sslcerts$Createephemeral,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    createEphemeral(
      params?: Params$Resource$Sslcerts$Createephemeral,
      options?: MethodOptions
    ): GaxiosPromise<Schema$SslCert>;
    createEphemeral(
      params: Params$Resource$Sslcerts$Createephemeral,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    createEphemeral(
      params: Params$Resource$Sslcerts$Createephemeral,
      options: MethodOptions | BodyResponseCallback<Schema$SslCert>,
      callback: BodyResponseCallback<Schema$SslCert>
    ): void;
    createEphemeral(
      params: Params$Resource$Sslcerts$Createephemeral,
      callback: BodyResponseCallback<Schema$SslCert>
    ): void;
    createEphemeral(callback: BodyResponseCallback<Schema$SslCert>): void;
    createEphemeral(
      paramsOrCallback?:
        | Params$Resource$Sslcerts$Createephemeral
        | BodyResponseCallback<Schema$SslCert>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$SslCert>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$SslCert>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$SslCert> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Sslcerts$Createephemeral;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Sslcerts$Createephemeral;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://sqladmin.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/sql/v1beta4/projects/{project}/instances/{instance}/createEphemeral'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['project', 'instance'],
        pathParams: ['instance', 'project'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$SslCert>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$SslCert>(parameters);
      }
    }

    /**
     * Deletes the SSL certificate. For First Generation instances, the certificate remains valid until the instance is restarted.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    delete(
      params: Params$Resource$Sslcerts$Delete,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    delete(
      params?: Params$Resource$Sslcerts$Delete,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Operation>;
    delete(
      params: Params$Resource$Sslcerts$Delete,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    delete(
      params: Params$Resource$Sslcerts$Delete,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    delete(
      params: Params$Resource$Sslcerts$Delete,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    delete(callback: BodyResponseCallback<Schema$Operation>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Sslcerts$Delete
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
      let params = (paramsOrCallback || {}) as Params$Resource$Sslcerts$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Sslcerts$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://sqladmin.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/sql/v1beta4/projects/{project}/instances/{instance}/sslCerts/{sha1Fingerprint}'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'DELETE',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['project', 'instance', 'sha1Fingerprint'],
        pathParams: ['instance', 'project', 'sha1Fingerprint'],
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
     * Retrieves a particular SSL certificate. Does not include the private key (required for usage). The private key must be saved from the response to initial creation.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    get(
      params: Params$Resource$Sslcerts$Get,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    get(
      params?: Params$Resource$Sslcerts$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$SslCert>;
    get(
      params: Params$Resource$Sslcerts$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Sslcerts$Get,
      options: MethodOptions | BodyResponseCallback<Schema$SslCert>,
      callback: BodyResponseCallback<Schema$SslCert>
    ): void;
    get(
      params: Params$Resource$Sslcerts$Get,
      callback: BodyResponseCallback<Schema$SslCert>
    ): void;
    get(callback: BodyResponseCallback<Schema$SslCert>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Sslcerts$Get
        | BodyResponseCallback<Schema$SslCert>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$SslCert>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$SslCert>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$SslCert> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback || {}) as Params$Resource$Sslcerts$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Sslcerts$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://sqladmin.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/sql/v1beta4/projects/{project}/instances/{instance}/sslCerts/{sha1Fingerprint}'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['project', 'instance', 'sha1Fingerprint'],
        pathParams: ['instance', 'project', 'sha1Fingerprint'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$SslCert>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$SslCert>(parameters);
      }
    }

    /**
     * Creates an SSL certificate and returns it along with the private key and server certificate authority. The new certificate will not be usable until the instance is restarted.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    insert(
      params: Params$Resource$Sslcerts$Insert,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    insert(
      params?: Params$Resource$Sslcerts$Insert,
      options?: MethodOptions
    ): GaxiosPromise<Schema$SslCertsInsertResponse>;
    insert(
      params: Params$Resource$Sslcerts$Insert,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    insert(
      params: Params$Resource$Sslcerts$Insert,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$SslCertsInsertResponse>,
      callback: BodyResponseCallback<Schema$SslCertsInsertResponse>
    ): void;
    insert(
      params: Params$Resource$Sslcerts$Insert,
      callback: BodyResponseCallback<Schema$SslCertsInsertResponse>
    ): void;
    insert(callback: BodyResponseCallback<Schema$SslCertsInsertResponse>): void;
    insert(
      paramsOrCallback?:
        | Params$Resource$Sslcerts$Insert
        | BodyResponseCallback<Schema$SslCertsInsertResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$SslCertsInsertResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$SslCertsInsertResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$SslCertsInsertResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback || {}) as Params$Resource$Sslcerts$Insert;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Sslcerts$Insert;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://sqladmin.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/sql/v1beta4/projects/{project}/instances/{instance}/sslCerts'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['project', 'instance'],
        pathParams: ['instance', 'project'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$SslCertsInsertResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$SslCertsInsertResponse>(parameters);
      }
    }

    /**
     * Lists all of the current SSL certificates for the instance.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    list(
      params: Params$Resource$Sslcerts$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Sslcerts$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$SslCertsListResponse>;
    list(
      params: Params$Resource$Sslcerts$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Sslcerts$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$SslCertsListResponse>,
      callback: BodyResponseCallback<Schema$SslCertsListResponse>
    ): void;
    list(
      params: Params$Resource$Sslcerts$List,
      callback: BodyResponseCallback<Schema$SslCertsListResponse>
    ): void;
    list(callback: BodyResponseCallback<Schema$SslCertsListResponse>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Sslcerts$List
        | BodyResponseCallback<Schema$SslCertsListResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$SslCertsListResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$SslCertsListResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$SslCertsListResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback || {}) as Params$Resource$Sslcerts$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Sslcerts$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://sqladmin.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/sql/v1beta4/projects/{project}/instances/{instance}/sslCerts'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['project', 'instance'],
        pathParams: ['instance', 'project'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$SslCertsListResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$SslCertsListResponse>(parameters);
      }
    }
  }

  export interface Params$Resource$Sslcerts$Createephemeral
    extends StandardParameters {
    /**
     * Cloud SQL instance ID. This does not include the project ID.
     */
    instance?: string;
    /**
     * Project ID of the Cloud SQL project.
     */
    project?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$SslCertsCreateEphemeralRequest;
  }
  export interface Params$Resource$Sslcerts$Delete extends StandardParameters {
    /**
     * Cloud SQL instance ID. This does not include the project ID.
     */
    instance?: string;
    /**
     * Project ID of the project that contains the instance.
     */
    project?: string;
    /**
     * Sha1 FingerPrint.
     */
    sha1Fingerprint?: string;
  }
  export interface Params$Resource$Sslcerts$Get extends StandardParameters {
    /**
     * Cloud SQL instance ID. This does not include the project ID.
     */
    instance?: string;
    /**
     * Project ID of the project that contains the instance.
     */
    project?: string;
    /**
     * Sha1 FingerPrint.
     */
    sha1Fingerprint?: string;
  }
  export interface Params$Resource$Sslcerts$Insert extends StandardParameters {
    /**
     * Cloud SQL instance ID. This does not include the project ID.
     */
    instance?: string;
    /**
     * Project ID of the project that contains the instance.
     */
    project?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$SslCertsInsertRequest;
  }
  export interface Params$Resource$Sslcerts$List extends StandardParameters {
    /**
     * Cloud SQL instance ID. This does not include the project ID.
     */
    instance?: string;
    /**
     * Project ID of the project that contains the instance.
     */
    project?: string;
  }

  export class Resource$Tiers {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Lists all available machine types (tiers) for Cloud SQL, for example, `db-custom-1-3840`. For related information, see [Pricing](/sql/pricing).
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    list(
      params: Params$Resource$Tiers$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Tiers$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$TiersListResponse>;
    list(
      params: Params$Resource$Tiers$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Tiers$List,
      options: MethodOptions | BodyResponseCallback<Schema$TiersListResponse>,
      callback: BodyResponseCallback<Schema$TiersListResponse>
    ): void;
    list(
      params: Params$Resource$Tiers$List,
      callback: BodyResponseCallback<Schema$TiersListResponse>
    ): void;
    list(callback: BodyResponseCallback<Schema$TiersListResponse>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Tiers$List
        | BodyResponseCallback<Schema$TiersListResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$TiersListResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$TiersListResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$TiersListResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback || {}) as Params$Resource$Tiers$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Tiers$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://sqladmin.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/sql/v1beta4/projects/{project}/tiers').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'GET',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['project'],
        pathParams: ['project'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$TiersListResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$TiersListResponse>(parameters);
      }
    }
  }

  export interface Params$Resource$Tiers$List extends StandardParameters {
    /**
     * Project ID of the project for which to list tiers.
     */
    project?: string;
  }

  export class Resource$Users {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Deletes a user from a Cloud SQL instance.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    delete(
      params: Params$Resource$Users$Delete,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    delete(
      params?: Params$Resource$Users$Delete,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Operation>;
    delete(
      params: Params$Resource$Users$Delete,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    delete(
      params: Params$Resource$Users$Delete,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    delete(
      params: Params$Resource$Users$Delete,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    delete(callback: BodyResponseCallback<Schema$Operation>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Users$Delete
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
      let params = (paramsOrCallback || {}) as Params$Resource$Users$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Users$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://sqladmin.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/sql/v1beta4/projects/{project}/instances/{instance}/users'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'DELETE',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['project', 'instance'],
        pathParams: ['instance', 'project'],
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
     * Retrieves a resource containing information about a user.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    get(
      params: Params$Resource$Users$Get,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    get(
      params?: Params$Resource$Users$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$User>;
    get(
      params: Params$Resource$Users$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Users$Get,
      options: MethodOptions | BodyResponseCallback<Schema$User>,
      callback: BodyResponseCallback<Schema$User>
    ): void;
    get(
      params: Params$Resource$Users$Get,
      callback: BodyResponseCallback<Schema$User>
    ): void;
    get(callback: BodyResponseCallback<Schema$User>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Users$Get
        | BodyResponseCallback<Schema$User>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$User>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$User>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$User> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback || {}) as Params$Resource$Users$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Users$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://sqladmin.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/sql/v1beta4/projects/{project}/instances/{instance}/users/{name}'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['project', 'instance', 'name'],
        pathParams: ['instance', 'name', 'project'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$User>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$User>(parameters);
      }
    }

    /**
     * Creates a new user in a Cloud SQL instance.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    insert(
      params: Params$Resource$Users$Insert,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    insert(
      params?: Params$Resource$Users$Insert,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Operation>;
    insert(
      params: Params$Resource$Users$Insert,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    insert(
      params: Params$Resource$Users$Insert,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    insert(
      params: Params$Resource$Users$Insert,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    insert(callback: BodyResponseCallback<Schema$Operation>): void;
    insert(
      paramsOrCallback?:
        | Params$Resource$Users$Insert
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
      let params = (paramsOrCallback || {}) as Params$Resource$Users$Insert;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Users$Insert;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://sqladmin.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/sql/v1beta4/projects/{project}/instances/{instance}/users'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['project', 'instance'],
        pathParams: ['instance', 'project'],
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
     * Lists users in the specified Cloud SQL instance.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    list(
      params: Params$Resource$Users$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Users$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$UsersListResponse>;
    list(
      params: Params$Resource$Users$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Users$List,
      options: MethodOptions | BodyResponseCallback<Schema$UsersListResponse>,
      callback: BodyResponseCallback<Schema$UsersListResponse>
    ): void;
    list(
      params: Params$Resource$Users$List,
      callback: BodyResponseCallback<Schema$UsersListResponse>
    ): void;
    list(callback: BodyResponseCallback<Schema$UsersListResponse>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Users$List
        | BodyResponseCallback<Schema$UsersListResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$UsersListResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$UsersListResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$UsersListResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback || {}) as Params$Resource$Users$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Users$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://sqladmin.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/sql/v1beta4/projects/{project}/instances/{instance}/users'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['project', 'instance'],
        pathParams: ['instance', 'project'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$UsersListResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$UsersListResponse>(parameters);
      }
    }

    /**
     * Updates an existing user in a Cloud SQL instance.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    update(
      params: Params$Resource$Users$Update,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    update(
      params?: Params$Resource$Users$Update,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Operation>;
    update(
      params: Params$Resource$Users$Update,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    update(
      params: Params$Resource$Users$Update,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    update(
      params: Params$Resource$Users$Update,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    update(callback: BodyResponseCallback<Schema$Operation>): void;
    update(
      paramsOrCallback?:
        | Params$Resource$Users$Update
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
      let params = (paramsOrCallback || {}) as Params$Resource$Users$Update;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Users$Update;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://sqladmin.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/sql/v1beta4/projects/{project}/instances/{instance}/users'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'PUT',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['project', 'instance'],
        pathParams: ['instance', 'project'],
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

  export interface Params$Resource$Users$Delete extends StandardParameters {
    /**
     * Host of the user in the instance.
     */
    host?: string;
    /**
     * Database instance ID. This does not include the project ID.
     */
    instance?: string;
    /**
     * Name of the user in the instance.
     */
    name?: string;
    /**
     * Project ID of the project that contains the instance.
     */
    project?: string;
  }
  export interface Params$Resource$Users$Get extends StandardParameters {
    /**
     * Host of a user of the instance.
     */
    host?: string;
    /**
     * Database instance ID. This does not include the project ID.
     */
    instance?: string;
    /**
     * User of the instance.
     */
    name?: string;
    /**
     * Project ID of the project that contains the instance.
     */
    project?: string;
  }
  export interface Params$Resource$Users$Insert extends StandardParameters {
    /**
     * Database instance ID. This does not include the project ID.
     */
    instance?: string;
    /**
     * Project ID of the project that contains the instance.
     */
    project?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$User;
  }
  export interface Params$Resource$Users$List extends StandardParameters {
    /**
     * Database instance ID. This does not include the project ID.
     */
    instance?: string;
    /**
     * Project ID of the project that contains the instance.
     */
    project?: string;
  }
  export interface Params$Resource$Users$Update extends StandardParameters {
    /**
     * Optional. Host of the user in the instance.
     */
    host?: string;
    /**
     * Database instance ID. This does not include the project ID.
     */
    instance?: string;
    /**
     * Name of the user in the instance.
     */
    name?: string;
    /**
     * Project ID of the project that contains the instance.
     */
    project?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$User;
  }
}
