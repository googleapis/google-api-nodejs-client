/**
 * Copyright 2015 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import {AxiosPromise} from 'axios';

import {GoogleApis} from '../..';
import {BodyResponseCallback, GlobalOptions, MethodOptions} from '../../lib/api';
import {createAPIRequest} from '../../lib/apirequest';

// TODO: We will eventually get the `any` in here cleared out, but in the
// interim we want to turn on no-implicit-any.

// tslint:disable: no-any
// tslint:disable: class-name
// tslint:disable: variable-name
// tslint:disable: jsdoc-format
// tslint:disable: no-namespace

export namespace sqladmin_v1beta4 {
  /**
   * Cloud SQL Administration API
   *
   * Creates and configures Cloud SQL instances, which provide fully-managed
   * MySQL databases.
   *
   * @example
   * const google = require('googleapis');
   * const sqladmin = google.sqladmin('v1beta4');
   *
   * @namespace sqladmin
   * @type {Function}
   * @version v1beta4
   * @variation v1beta4
   * @param {object=} options Options for Sqladmin
   */
  export class Sqladmin {
    _options: GlobalOptions;
    google: GoogleApis;
    root = this;

    backupRuns: Resource$Backupruns;
    databases: Resource$Databases;
    flags: Resource$Flags;
    instances: Resource$Instances;
    operations: Resource$Operations;
    sslCerts: Resource$Sslcerts;
    tiers: Resource$Tiers;
    users: Resource$Users;

    constructor(options: GlobalOptions, google: GoogleApis) {
      this._options = options || {};
      this.google = google;
      this.getRoot.bind(this);

      this.backupRuns = new Resource$Backupruns(this);
      this.databases = new Resource$Databases(this);
      this.flags = new Resource$Flags(this);
      this.instances = new Resource$Instances(this);
      this.operations = new Resource$Operations(this);
      this.sslCerts = new Resource$Sslcerts(this);
      this.tiers = new Resource$Tiers(this);
      this.users = new Resource$Users(this);
    }

    getRoot() {
      return this.root;
    }
  }

  /**
   * An entry for an Access Control list.
   */
  export interface Schema$AclEntry {
    /**
     * The time when this access control entry expires in RFC 3339 format, for
     * example 2012-11-15T16:19:00.094Z.
     */
    expirationTime: string;
    /**
     * This is always sql#aclEntry.
     */
    kind: string;
    /**
     * An optional label to identify this entry.
     */
    name: string;
    /**
     * The whitelisted value for the access control list.
     */
    value: string;
  }
  /**
   * Database instance backup configuration.
   */
  export interface Schema$BackupConfiguration {
    /**
     * Whether binary log is enabled. If backup configuration is disabled,
     * binary log must be disabled as well.
     */
    binaryLogEnabled: boolean;
    /**
     * Whether this configuration is enabled.
     */
    enabled: boolean;
    /**
     * This is always sql#backupConfiguration.
     */
    kind: string;
    /**
     * Reserved for future use.
     */
    replicationLogArchivingEnabled: boolean;
    /**
     * Start time for the daily backup configuration in UTC timezone in the 24
     * hour format - HH:MM.
     */
    startTime: string;
  }
  /**
   * A database instance backup run resource.
   */
  export interface Schema$BackupRun {
    /**
     * The description of this run, only applicable to on-demand backups.
     */
    description: string;
    /**
     * The time the backup operation completed in UTC timezone in RFC 3339
     * format, for example 2012-11-15T16:19:00.094Z.
     */
    endTime: string;
    /**
     * The time the run was enqueued in UTC timezone in RFC 3339 format, for
     * example 2012-11-15T16:19:00.094Z.
     */
    enqueuedTime: string;
    /**
     * Information about why the backup operation failed. This is only present
     * if the run has the FAILED status.
     */
    error: Schema$OperationError;
    /**
     * A unique identifier for this backup run. Note that this is unique only
     * within the scope of a particular Cloud SQL instance.
     */
    id: string;
    /**
     * Name of the database instance.
     */
    instance: string;
    /**
     * This is always sql#backupRun.
     */
    kind: string;
    /**
     * The URI of this resource.
     */
    selfLink: string;
    /**
     * The time the backup operation actually started in UTC timezone in RFC
     * 3339 format, for example 2012-11-15T16:19:00.094Z.
     */
    startTime: string;
    /**
     * The status of this run.
     */
    status: string;
    /**
     * The type of this run; can be either &quot;AUTOMATED&quot; or
     * &quot;ON_DEMAND&quot;.
     */
    type: string;
    /**
     * The start time of the backup window during which this the backup was
     * attempted in RFC 3339 format, for example 2012-11-15T16:19:00.094Z.
     */
    windowStartTime: string;
  }
  /**
   * Backup run list results.
   */
  export interface Schema$BackupRunsListResponse {
    /**
     * A list of backup runs in reverse chronological order of the enqueued
     * time.
     */
    items: Schema$BackupRun[];
    /**
     * This is always sql#backupRunsList.
     */
    kind: string;
    /**
     * The continuation token, used to page through large result sets. Provide
     * this value in a subsequent request to return the next page of results.
     */
    nextPageToken: string;
  }
  /**
   * Binary log coordinates.
   */
  export interface Schema$BinLogCoordinates {
    /**
     * Name of the binary log file for a Cloud SQL instance.
     */
    binLogFileName: string;
    /**
     * Position (offset) within the binary log file.
     */
    binLogPosition: string;
    /**
     * This is always sql#binLogCoordinates.
     */
    kind: string;
  }
  /**
   * Database instance clone context.
   */
  export interface Schema$CloneContext {
    /**
     * Binary log coordinates, if specified, indentify the the position up to
     * which the source instance should be cloned. If not specified, the source
     * instance is cloned up to the most recent binary log coordintes.
     */
    binLogCoordinates: Schema$BinLogCoordinates;
    /**
     * Name of the Cloud SQL instance to be created as a clone.
     */
    destinationInstanceName: string;
    /**
     * This is always sql#cloneContext.
     */
    kind: string;
    /**
     * Reserved for future use.
     */
    pitrTimestampMs: string;
  }
  /**
   * A database resource inside a Cloud SQL instance.
   */
  export interface Schema$Database {
    /**
     * The MySQL charset value.
     */
    charset: string;
    /**
     * The MySQL collation value.
     */
    collation: string;
    /**
     * HTTP 1.1 Entity tag for the resource.
     */
    etag: string;
    /**
     * The name of the Cloud SQL instance. This does not include the project ID.
     */
    instance: string;
    /**
     * This is always sql#database.
     */
    kind: string;
    /**
     * The name of the database in the Cloud SQL instance. This does not include
     * the project ID or instance name.
     */
    name: string;
    /**
     * The project ID of the project containing the Cloud SQL database. The
     * Google apps domain is prefixed if applicable.
     */
    project: string;
    /**
     * The URI of this resource.
     */
    selfLink: string;
  }
  /**
   * MySQL flags for Cloud SQL instances.
   */
  export interface Schema$DatabaseFlags {
    /**
     * The name of the flag. These flags are passed at instance startup, so
     * include both MySQL server options and MySQL system variables. Flags
     * should be specified with underscores, not hyphens. For more information,
     * see Configuring MySQL Flags in the Google Cloud SQL documentation, as
     * well as the official MySQL documentation for server options and system
     * variables.
     */
    name: string;
    /**
     * The value of the flag. Booleans should be set to on for true and off for
     * false. This field must be omitted if the flag doesn&#39;t take a value.
     */
    value: string;
  }
  /**
   * A Cloud SQL instance resource.
   */
  export interface Schema$DatabaseInstance {
    /**
     * FIRST_GEN: Basic Cloud SQL instance that runs in a Google-managed
     * container. SECOND_GEN: A newer Cloud SQL backend that runs in a Compute
     * Engine VM. EXTERNAL: A MySQL server that is not managed by Google.
     */
    backendType: string;
    /**
     * Connection name of the Cloud SQL instance used in connection strings.
     */
    connectionName: string;
    /**
     * The current disk usage of the instance in bytes. This property has been
     * deprecated. Users should use the
     * &quot;cloudsql.googleapis.com/database/disk/bytes_used&quot; metric in
     * Cloud Monitoring API instead. Please see
     * https://groups.google.com/d/msg/google-cloud-sql-announce/I_7-F9EBhT0/BtvFtdFeAgAJ
     * for details.
     */
    currentDiskSize: string;
    /**
     * The database engine type and version. The databaseVersion field can not
     * be changed after instance creation. MySQL Second Generation instances:
     * MYSQL_5_7 (default) or MYSQL_5_6. PostgreSQL instances: POSTGRES_9_6
     * MySQL First Generation instances: MYSQL_5_6 (default) or MYSQL_5_5
     */
    databaseVersion: string;
    /**
     * HTTP 1.1 Entity tag for the resource.
     */
    etag: string;
    /**
     * The name and status of the failover replica. This property is applicable
     * only to Second Generation instances.
     */
    failoverReplica: any;
    /**
     * The Compute Engine zone that the instance is currently serving from. This
     * value could be different from the zone that was specified when the
     * instance was created if the instance has failed over to its secondary
     * zone.
     */
    gceZone: string;
    /**
     * The instance type. This can be one of the following. CLOUD_SQL_INSTANCE:
     * A Cloud SQL instance that is not replicating from a master.
     * ON_PREMISES_INSTANCE: An instance running on the customer&#39;s premises.
     * READ_REPLICA_INSTANCE: A Cloud SQL instance configured as a read-replica.
     */
    instanceType: string;
    /**
     * The assigned IP addresses for the instance.
     */
    ipAddresses: Schema$IpMapping[];
    /**
     * The IPv6 address assigned to the instance. This property is applicable
     * only to First Generation instances.
     */
    ipv6Address: string;
    /**
     * This is always sql#instance.
     */
    kind: string;
    /**
     * The name of the instance which will act as master in the replication
     * setup.
     */
    masterInstanceName: string;
    /**
     * The maximum disk size of the instance in bytes.
     */
    maxDiskSize: string;
    /**
     * Name of the Cloud SQL instance. This does not include the project ID.
     */
    name: string;
    /**
     * Configuration specific to on-premises instances.
     */
    onPremisesConfiguration: Schema$OnPremisesConfiguration;
    /**
     * The project ID of the project containing the Cloud SQL instance. The
     * Google apps domain is prefixed if applicable.
     */
    project: string;
    /**
     * The geographical region. Can be us-central (FIRST_GEN instances only),
     * us-central1 (SECOND_GEN instances only), asia-east1 or europe-west1.
     * Defaults to us-central or us-central1 depending on the instance type
     * (First Generation or Second Generation). The region can not be changed
     * after instance creation.
     */
    region: string;
    /**
     * Configuration specific to read-replicas replicating from on-premises
     * masters.
     */
    replicaConfiguration: Schema$ReplicaConfiguration;
    /**
     * The replicas of the instance.
     */
    replicaNames: string[];
    /**
     * The URI of this resource.
     */
    selfLink: string;
    /**
     * SSL configuration.
     */
    serverCaCert: Schema$SslCert;
    /**
     * The service account email address assigned to the instance. This property
     * is applicable only to Second Generation instances.
     */
    serviceAccountEmailAddress: string;
    /**
     * The user settings.
     */
    settings: Schema$Settings;
    /**
     * The current serving state of the Cloud SQL instance. This can be one of
     * the following. RUNNABLE: The instance is running, or is ready to run when
     * accessed. SUSPENDED: The instance is not available, for example due to
     * problems with billing. PENDING_CREATE: The instance is being created.
     * MAINTENANCE: The instance is down for maintenance. FAILED: The instance
     * creation failed. UNKNOWN_STATE: The state of the instance is unknown.
     */
    state: string;
    /**
     * If the instance state is SUSPENDED, the reason for the suspension.
     */
    suspensionReason: string[];
  }
  /**
   * Database list response.
   */
  export interface Schema$DatabasesListResponse {
    /**
     * List of database resources in the instance.
     */
    items: Schema$Database[];
    /**
     * This is always sql#databasesList.
     */
    kind: string;
  }
  /**
   * Read-replica configuration for connecting to the on-premises master.
   */
  export interface Schema$DemoteMasterConfiguration {
    /**
     * This is always sql#demoteMasterConfiguration.
     */
    kind: string;
    /**
     * MySQL specific configuration when replicating from a MySQL on-premises
     * master. Replication configuration information such as the username,
     * password, certificates, and keys are not stored in the instance metadata.
     * The configuration information is used only to set up the replication
     * connection and is stored by MySQL in a file named master.info in the data
     * directory.
     */
    mysqlReplicaConfiguration: Schema$DemoteMasterMySqlReplicaConfiguration;
  }
  /**
   * Database instance demote master context.
   */
  export interface Schema$DemoteMasterContext {
    /**
     * This is always sql#demoteMasterContext.
     */
    kind: string;
    /**
     * The name of the instance which will act as on-premises master in the
     * replication setup.
     */
    masterInstanceName: string;
    /**
     * Configuration specific to read-replicas replicating from the on-premises
     * master.
     */
    replicaConfiguration: Schema$DemoteMasterConfiguration;
    /**
     * Verify GTID consistency for demote operation. Default value: True. Second
     * Generation instances only. Setting this flag to false enables you to
     * bypass GTID consistency check between on-premises master and Cloud SQL
     * instance during the demotion operation but also exposes you to the risk
     * of future replication failures. Change the value only if you know the
     * reason for the GTID divergence and are confident that doing so will not
     * cause any replication issues.
     */
    verifyGtidConsistency: boolean;
  }
  /**
   * Read-replica configuration specific to MySQL databases.
   */
  export interface Schema$DemoteMasterMySqlReplicaConfiguration {
    /**
     * PEM representation of the trusted CA&#39;s x509 certificate.
     */
    caCertificate: string;
    /**
     * PEM representation of the slave&#39;s x509 certificate.
     */
    clientCertificate: string;
    /**
     * PEM representation of the slave&#39;s private key. The corresponsing
     * public key is encoded in the client&#39;s certificate. The format of the
     * slave&#39;s private key can be either PKCS #1 or PKCS #8.
     */
    clientKey: string;
    /**
     * This is always sql#demoteMasterMysqlReplicaConfiguration.
     */
    kind: string;
    /**
     * The password for the replication connection.
     */
    password: string;
    /**
     * The username for the replication connection.
     */
    username: string;
  }
  /**
   * Database instance export context.
   */
  export interface Schema$ExportContext {
    /**
     * Options for exporting data as CSV.
     */
    csvExportOptions: any;
    /**
     * Databases (for example, guestbook) from which the export is made. If
     * fileType is SQL and no database is specified, all databases are exported.
     * If fileType is CSV, you can optionally specify at most one database to
     * export. If csvExportOptions.selectQuery also specifies the database, this
     * field will be ignored.
     */
    databases: string[];
    /**
     * The file type for the specified uri. SQL: The file contains SQL
     * statements. CSV: The file contains CSV data.
     */
    fileType: string;
    /**
     * This is always sql#exportContext.
     */
    kind: string;
    /**
     * Options for exporting data as SQL statements.
     */
    sqlExportOptions: any;
    /**
     * The path to the file in Google Cloud Storage where the export will be
     * stored. The URI is in the form gs://bucketName/fileName. If the file
     * already exists, the requests succeeds, but the operation fails. If
     * fileType is SQL and the filename ends with .gz, the contents are
     * compressed.
     */
    uri: string;
  }
  /**
   * Database instance failover context.
   */
  export interface Schema$FailoverContext {
    /**
     * This is always sql#failoverContext.
     */
    kind: string;
    /**
     * The current settings version of this instance. Request will be rejected
     * if this version doesn&#39;t match the current settings version.
     */
    settingsVersion: string;
  }
  /**
   * A Google Cloud SQL service flag resource.
   */
  export interface Schema$Flag {
    /**
     * For STRING flags, a list of strings that the value can be set to.
     */
    allowedStringValues: string[];
    /**
     * The database version this flag applies to. Can be MYSQL_5_5, MYSQL_5_6,
     * or MYSQL_5_7. MYSQL_5_7 is applicable only to Second Generation
     * instances.
     */
    appliesTo: string[];
    /**
     * This is always sql#flag.
     */
    kind: string;
    /**
     * For INTEGER flags, the maximum allowed value.
     */
    maxValue: string;
    /**
     * For INTEGER flags, the minimum allowed value.
     */
    minValue: string;
    /**
     * This is the name of the flag. Flag names always use underscores, not
     * hyphens, e.g. max_allowed_packet
     */
    name: string;
    /**
     * Indicates whether changing this flag will trigger a database restart.
     * Only applicable to Second Generation instances.
     */
    requiresRestart: boolean;
    /**
     * The type of the flag. Flags are typed to being BOOLEAN, STRING, INTEGER
     * or NONE. NONE is used for flags which do not take a value, such as
     * skip_grant_tables.
     */
    type: string;
  }
  /**
   * Flags list response.
   */
  export interface Schema$FlagsListResponse {
    /**
     * List of flags.
     */
    items: Schema$Flag[];
    /**
     * This is always sql#flagsList.
     */
    kind: string;
  }
  /**
   * Database instance import context.
   */
  export interface Schema$ImportContext {
    /**
     * Options for importing data as CSV.
     */
    csvImportOptions: any;
    /**
     * The database (for example, guestbook) to which the import is made. If
     * fileType is SQL and no database is specified, it is assumed that the
     * database is specified in the file to be imported. If fileType is CSV, it
     * must be specified.
     */
    database: string;
    /**
     * The file type for the specified uri. SQL: The file contains SQL
     * statements. CSV: The file contains CSV data.
     */
    fileType: string;
    /**
     * The PostgreSQL user for this import operation. Defaults to
     * cloudsqlsuperuser. Used only for PostgreSQL instances.
     */
    importUser: string;
    /**
     * This is always sql#importContext.
     */
    kind: string;
    /**
     * A path to the file in Google Cloud Storage from which the import is made.
     * The URI is in the form gs://bucketName/fileName. Compressed gzip files
     * (.gz) are supported when fileType is SQL.
     */
    uri: string;
  }
  /**
   * Database instance clone request.
   */
  export interface Schema$InstancesCloneRequest {
    /**
     * Contains details about the clone operation.
     */
    cloneContext: Schema$CloneContext;
  }
  /**
   * Database demote master request.
   */
  export interface Schema$InstancesDemoteMasterRequest {
    /**
     * Contains details about the demoteMaster operation.
     */
    demoteMasterContext: Schema$DemoteMasterContext;
  }
  /**
   * Database instance export request.
   */
  export interface Schema$InstancesExportRequest {
    /**
     * Contains details about the export operation.
     */
    exportContext: Schema$ExportContext;
  }
  /**
   * Instance failover request.
   */
  export interface Schema$InstancesFailoverRequest {
    /**
     * Failover Context.
     */
    failoverContext: Schema$FailoverContext;
  }
  /**
   * Database instance import request.
   */
  export interface Schema$InstancesImportRequest {
    /**
     * Contains details about the import operation.
     */
    importContext: Schema$ImportContext;
  }
  /**
   * Database instances list response.
   */
  export interface Schema$InstancesListResponse {
    /**
     * List of database instance resources.
     */
    items: Schema$DatabaseInstance[];
    /**
     * This is always sql#instancesList.
     */
    kind: string;
    /**
     * The continuation token, used to page through large result sets. Provide
     * this value in a subsequent request to return the next page of results.
     */
    nextPageToken: string;
  }
  /**
   * Database instance restore backup request.
   */
  export interface Schema$InstancesRestoreBackupRequest {
    /**
     * Parameters required to perform the restore backup operation.
     */
    restoreBackupContext: Schema$RestoreBackupContext;
  }
  /**
   * Instance truncate log request.
   */
  export interface Schema$InstancesTruncateLogRequest {
    /**
     * Contains details about the truncate log operation.
     */
    truncateLogContext: Schema$TruncateLogContext;
  }
  /**
   * IP Management configuration.
   */
  export interface Schema$IpConfiguration {
    /**
     * The list of external networks that are allowed to connect to the instance
     * using the IP. In CIDR notation, also known as &#39;slash&#39; notation
     * (e.g. 192.168.100.0/24).
     */
    authorizedNetworks: Schema$AclEntry[];
    /**
     * Whether the instance should be assigned an IP address or not.
     */
    ipv4Enabled: boolean;
    /**
     * Whether SSL connections over IP should be enforced or not.
     */
    requireSsl: boolean;
  }
  /**
   * Database instance IP Mapping.
   */
  export interface Schema$IpMapping {
    /**
     * The IP address assigned.
     */
    ipAddress: string;
    /**
     * The due time for this IP to be retired in RFC 3339 format, for example
     * 2012-11-15T16:19:00.094Z. This field is only available when the IP is
     * scheduled to be retired.
     */
    timeToRetire: string;
    /**
     * The type of this IP address. A PRIMARY address is an address that can
     * accept incoming connections. An OUTGOING address is the source address of
     * connections originating from the instance, if supported.
     */
    type: string;
  }
  /**
   * Preferred location. This specifies where a Cloud SQL instance should
   * preferably be located, either in a specific Compute Engine zone, or
   * co-located with an App Engine application. Note that if the preferred
   * location is not available, the instance will be located as close as
   * possible within the region. Only one location may be specified.
   */
  export interface Schema$LocationPreference {
    /**
     * The AppEngine application to follow, it must be in the same region as the
     * Cloud SQL instance.
     */
    followGaeApplication: string;
    /**
     * This is always sql#locationPreference.
     */
    kind: string;
    /**
     * The preferred Compute Engine zone (e.g. us-centra1-a, us-central1-b,
     * etc.).
     */
    zone: string;
  }
  /**
   * Maintenance window. This specifies when a v2 Cloud SQL instance should
   * preferably be restarted for system maintenance puruposes.
   */
  export interface Schema$MaintenanceWindow {
    /**
     * day of week (1-7), starting on Monday.
     */
    day: number;
    /**
     * hour of day - 0 to 23.
     */
    hour: number;
    /**
     * This is always sql#maintenanceWindow.
     */
    kind: string;
    /**
     * Maintenance timing setting: canary (Earlier) or stable (Later).  Learn
     * more.
     */
    updateTrack: string;
  }
  /**
   * Read-replica configuration specific to MySQL databases.
   */
  export interface Schema$MySqlReplicaConfiguration {
    /**
     * PEM representation of the trusted CA&#39;s x509 certificate.
     */
    caCertificate: string;
    /**
     * PEM representation of the slave&#39;s x509 certificate.
     */
    clientCertificate: string;
    /**
     * PEM representation of the slave&#39;s private key. The corresponsing
     * public key is encoded in the client&#39;s certificate.
     */
    clientKey: string;
    /**
     * Seconds to wait between connect retries. MySQL&#39;s default is 60
     * seconds.
     */
    connectRetryInterval: number;
    /**
     * Path to a SQL dump file in Google Cloud Storage from which the slave
     * instance is to be created. The URI is in the form
     * gs://bucketName/fileName. Compressed gzip files (.gz) are also supported.
     * Dumps should have the binlog co-ordinates from which replication should
     * begin. This can be accomplished by setting --master-data to 1 when using
     * mysqldump.
     */
    dumpFilePath: string;
    /**
     * This is always sql#mysqlReplicaConfiguration.
     */
    kind: string;
    /**
     * Interval in milliseconds between replication heartbeats.
     */
    masterHeartbeatPeriod: string;
    /**
     * The password for the replication connection.
     */
    password: string;
    /**
     * A list of permissible ciphers to use for SSL encryption.
     */
    sslCipher: string;
    /**
     * The username for the replication connection.
     */
    username: string;
    /**
     * Whether or not to check the master&#39;s Common Name value in the
     * certificate that it sends during the SSL handshake.
     */
    verifyServerCertificate: boolean;
  }
  /**
   * On-premises instance configuration.
   */
  export interface Schema$OnPremisesConfiguration {
    /**
     * The host and port of the on-premises instance in host:port format
     */
    hostPort: string;
    /**
     * This is always sql#onPremisesConfiguration.
     */
    kind: string;
  }
  /**
   * An Operations resource contains information about database instance
   * operations such as create, delete, and restart. Operations resources are
   * created in response to operations that were initiated; you never create
   * them directly.
   */
  export interface Schema$Operation {
    /**
     * The time this operation finished in UTC timezone in RFC 3339 format, for
     * example 2012-11-15T16:19:00.094Z.
     */
    endTime: string;
    /**
     * If errors occurred during processing of this operation, this field will
     * be populated.
     */
    error: Schema$OperationErrors;
    /**
     * The context for export operation, if applicable.
     */
    exportContext: Schema$ExportContext;
    /**
     * The context for import operation, if applicable.
     */
    importContext: Schema$ImportContext;
    /**
     * The time this operation was enqueued in UTC timezone in RFC 3339 format,
     * for example 2012-11-15T16:19:00.094Z.
     */
    insertTime: string;
    /**
     * This is always sql#operation.
     */
    kind: string;
    /**
     * An identifier that uniquely identifies the operation. You can use this
     * identifier to retrieve the Operations resource that has information about
     * the operation.
     */
    name: string;
    /**
     * The type of the operation. Valid values are CREATE, DELETE, UPDATE,
     * RESTART, IMPORT, EXPORT, BACKUP_VOLUME, RESTORE_VOLUME, CREATE_USER,
     * DELETE_USER, CREATE_DATABASE, DELETE_DATABASE .
     */
    operationType: string;
    /**
     * The URI of this resource.
     */
    selfLink: string;
    /**
     * The time this operation actually started in UTC timezone in RFC 3339
     * format, for example 2012-11-15T16:19:00.094Z.
     */
    startTime: string;
    /**
     * The status of an operation. Valid values are PENDING, RUNNING, DONE,
     * UNKNOWN.
     */
    status: string;
    /**
     * Name of the database instance related to this operation.
     */
    targetId: string;
    targetLink: string;
    /**
     * The project ID of the target instance related to this operation.
     */
    targetProject: string;
    /**
     * The email address of the user who initiated this operation.
     */
    user: string;
  }
  /**
   * Database instance operation error.
   */
  export interface Schema$OperationError {
    /**
     * Identifies the specific error that occurred.
     */
    code: string;
    /**
     * This is always sql#operationError.
     */
    kind: string;
    /**
     * Additional information about the error encountered.
     */
    message: string;
  }
  /**
   * Database instance operation errors list wrapper.
   */
  export interface Schema$OperationErrors {
    /**
     * The list of errors encountered while processing this operation.
     */
    errors: Schema$OperationError[];
    /**
     * This is always sql#operationErrors.
     */
    kind: string;
  }
  /**
   * Database instance list operations response.
   */
  export interface Schema$OperationsListResponse {
    /**
     * List of operation resources.
     */
    items: Schema$Operation[];
    /**
     * This is always sql#operationsList.
     */
    kind: string;
    /**
     * The continuation token, used to page through large result sets. Provide
     * this value in a subsequent request to return the next page of results.
     */
    nextPageToken: string;
  }
  /**
   * Read-replica configuration for connecting to the master.
   */
  export interface Schema$ReplicaConfiguration {
    /**
     * Specifies if the replica is the failover target. If the field is set to
     * true the replica will be designated as a failover replica. In case the
     * master instance fails, the replica instance will be promoted as the new
     * master instance. Only one replica can be specified as failover target,
     * and the replica has to be in different zone with the master instance.
     */
    failoverTarget: boolean;
    /**
     * This is always sql#replicaConfiguration.
     */
    kind: string;
    /**
     * MySQL specific configuration when replicating from a MySQL on-premises
     * master. Replication configuration information such as the username,
     * password, certificates, and keys are not stored in the instance metadata.
     * The configuration information is used only to set up the replication
     * connection and is stored by MySQL in a file named master.info in the data
     * directory.
     */
    mysqlReplicaConfiguration: Schema$MySqlReplicaConfiguration;
  }
  /**
   * Database instance restore from backup context.
   */
  export interface Schema$RestoreBackupContext {
    /**
     * The ID of the backup run to restore from.
     */
    backupRunId: string;
    /**
     * The ID of the instance that the backup was taken from.
     */
    instanceId: string;
    /**
     * This is always sql#restoreBackupContext.
     */
    kind: string;
  }
  /**
   * Database instance settings.
   */
  export interface Schema$Settings {
    /**
     * The activation policy specifies when the instance is activated; it is
     * applicable only when the instance state is RUNNABLE. Valid values:
     * ALWAYS: The instance is on, and remains so even in the absence of
     * connection requests. NEVER: The instance is off; it is not activated,
     * even if a connection request arrives. ON_DEMAND: First Generation
     * instances only. The instance responds to incoming requests, and turns
     * itself off when not in use. Instances with PER_USE pricing turn off after
     * 15 minutes of inactivity. Instances with PER_PACKAGE pricing turn off
     * after 12 hours of inactivity.
     */
    activationPolicy: string;
    /**
     * The App Engine app IDs that can access this instance. This property is
     * only applicable to First Generation instances.
     */
    authorizedGaeApplications: string[];
    /**
     * Availability type (PostgreSQL instances only). Potential values: ZONAL:
     * The instance serves data from only one zone. Outages in that zone affect
     * data accessibility. REGIONAL: The instance can serve data from more than
     * one zone in a region (it is highly available). For more information, see
     * Overview of the High Availability Configuration.
     */
    availabilityType: string;
    /**
     * The daily backup configuration for the instance.
     */
    backupConfiguration: Schema$BackupConfiguration;
    /**
     * Configuration specific to read replica instances. Indicates whether
     * database flags for crash-safe replication are enabled. This property is
     * only applicable to First Generation instances.
     */
    crashSafeReplicationEnabled: boolean;
    /**
     * The database flags passed to the instance at startup.
     */
    databaseFlags: Schema$DatabaseFlags[];
    /**
     * Configuration specific to read replica instances. Indicates whether
     * replication is enabled or not.
     */
    databaseReplicationEnabled: boolean;
    /**
     * The size of data disk, in GB. The data disk size minimum is 10GB. Applies
     * only to Second Generation instances.
     */
    dataDiskSizeGb: string;
    /**
     * The type of data disk. Only supported for Second Generation instances.
     * The default type is PD_SSD. Applies only to Second Generation instances.
     */
    dataDiskType: string;
    /**
     * The settings for IP Management. This allows to enable or disable the
     * instance IP and manage which external networks can connect to the
     * instance. The IPv4 address cannot be disabled for Second Generation
     * instances.
     */
    ipConfiguration: Schema$IpConfiguration;
    /**
     * This is always sql#settings.
     */
    kind: string;
    /**
     * The location preference settings. This allows the instance to be located
     * as near as possible to either an App Engine app or Compute Engine zone
     * for better performance. App Engine co-location is only applicable to
     * First Generation instances.
     */
    locationPreference: Schema$LocationPreference;
    /**
     * The maintenance window for this instance. This specifies when the
     * instance may be restarted for maintenance purposes. Applies only to
     * Second Generation instances.
     */
    maintenanceWindow: Schema$MaintenanceWindow;
    /**
     * The pricing plan for this instance. This can be either PER_USE or
     * PACKAGE. Only PER_USE is supported for Second Generation instances.
     */
    pricingPlan: string;
    /**
     * The type of replication this instance uses. This can be either
     * ASYNCHRONOUS or SYNCHRONOUS. This property is only applicable to First
     * Generation instances.
     */
    replicationType: string;
    /**
     * The version of instance settings. This is a required field for update
     * method to make sure concurrent updates are handled properly. During
     * update, use the most recent settingsVersion value for this instance and
     * do not try to update this value.
     */
    settingsVersion: string;
    /**
     * Configuration to increase storage size automatically. The default value
     * is true. Applies only to Second Generation instances.
     */
    storageAutoResize: boolean;
    /**
     * The maximum size to which storage capacity can be automatically
     * increased. The default value is 0, which specifies that there is no
     * limit. Applies only to Second Generation instances.
     */
    storageAutoResizeLimit: string;
    /**
     * The tier of service for this instance, for example D1, D2. For more
     * information, see pricing.
     */
    tier: string;
    /**
     * User-provided labels, represented as a dictionary where each label is a
     * single key value pair.
     */
    userLabels: any;
  }
  /**
   * SslCerts Resource
   */
  export interface Schema$SslCert {
    /**
     * PEM representation.
     */
    cert: string;
    /**
     * Serial number, as extracted from the certificate.
     */
    certSerialNumber: string;
    /**
     * User supplied name. Constrained to [a-zA-Z.-_ ]+.
     */
    commonName: string;
    /**
     * The time when the certificate was created in RFC 3339 format, for example
     * 2012-11-15T16:19:00.094Z
     */
    createTime: string;
    /**
     * The time when the certificate expires in RFC 3339 format, for example
     * 2012-11-15T16:19:00.094Z.
     */
    expirationTime: string;
    /**
     * Name of the database instance.
     */
    instance: string;
    /**
     * This is always sql#sslCert.
     */
    kind: string;
    /**
     * The URI of this resource.
     */
    selfLink: string;
    /**
     * Sha1 Fingerprint.
     */
    sha1Fingerprint: string;
  }
  /**
   * SslCertDetail.
   */
  export interface Schema$SslCertDetail {
    /**
     * The public information about the cert.
     */
    certInfo: Schema$SslCert;
    /**
     * The private key for the client cert, in pem format. Keep private in order
     * to protect your security.
     */
    certPrivateKey: string;
  }
  /**
   * SslCerts create ephemeral certificate request.
   */
  export interface Schema$SslCertsCreateEphemeralRequest {
    /**
     * PEM encoded public key to include in the signed certificate.
     */
    public_key: string;
  }
  /**
   * SslCerts insert request.
   */
  export interface Schema$SslCertsInsertRequest {
    /**
     * User supplied name. Must be a distinct name from the other certificates
     * for this instance. New certificates will not be usable until the instance
     * is restarted.
     */
    commonName: string;
  }
  /**
   * SslCert insert response.
   */
  export interface Schema$SslCertsInsertResponse {
    /**
     * The new client certificate and private key. For First Generation
     * instances, the new certificate does not take effect until the instance is
     * restarted.
     */
    clientCert: Schema$SslCertDetail;
    /**
     * This is always sql#sslCertsInsert.
     */
    kind: string;
    /**
     * The operation to track the ssl certs insert request.
     */
    operation: Schema$Operation;
    /**
     * The server Certificate Authority&#39;s certificate. If this is missing
     * you can force a new one to be generated by calling resetSslConfig method
     * on instances resource.
     */
    serverCaCert: Schema$SslCert;
  }
  /**
   * SslCerts list response.
   */
  export interface Schema$SslCertsListResponse {
    /**
     * List of client certificates for the instance.
     */
    items: Schema$SslCert[];
    /**
     * This is always sql#sslCertsList.
     */
    kind: string;
  }
  /**
   * A Google Cloud SQL service tier resource.
   */
  export interface Schema$Tier {
    /**
     * The maximum disk size of this tier in bytes.
     */
    DiskQuota: string;
    /**
     * This is always sql#tier.
     */
    kind: string;
    /**
     * The maximum RAM usage of this tier in bytes.
     */
    RAM: string;
    /**
     * The applicable regions for this tier.
     */
    region: string[];
    /**
     * An identifier for the service tier, for example D1, D2 etc. For related
     * information, see Pricing.
     */
    tier: string;
  }
  /**
   * Tiers list response.
   */
  export interface Schema$TiersListResponse {
    /**
     * List of tiers.
     */
    items: Schema$Tier[];
    /**
     * This is always sql#tiersList.
     */
    kind: string;
  }
  /**
   * Database Instance truncate log context.
   */
  export interface Schema$TruncateLogContext {
    /**
     * This is always sql#truncateLogContext.
     */
    kind: string;
    /**
     * The type of log to truncate. Valid values are MYSQL_GENERAL_TABLE and
     * MYSQL_SLOW_TABLE.
     */
    logType: string;
  }
  /**
   * A Cloud SQL user resource.
   */
  export interface Schema$User {
    /**
     * HTTP 1.1 Entity tag for the resource.
     */
    etag: string;
    /**
     * The host name from which the user can connect. For insert operations,
     * host defaults to an empty string. For update operations, host is
     * specified as part of the request URL. The host name cannot be updated
     * after insertion.
     */
    host: string;
    /**
     * The name of the Cloud SQL instance. This does not include the project ID.
     * Can be omitted for update since it is already specified on the URL.
     */
    instance: string;
    /**
     * This is always sql#user.
     */
    kind: string;
    /**
     * The name of the user in the Cloud SQL instance. Can be omitted for update
     * since it is already specified on the URL.
     */
    name: string;
    /**
     * The password for the user.
     */
    password: string;
    /**
     * The project ID of the project containing the Cloud SQL database. The
     * Google apps domain is prefixed if applicable. Can be omitted for update
     * since it is already specified on the URL.
     */
    project: string;
  }
  /**
   * User list response.
   */
  export interface Schema$UsersListResponse {
    /**
     * List of user resources in the instance.
     */
    items: Schema$User[];
    /**
     * This is always sql#usersList.
     */
    kind: string;
    /**
     * An identifier that uniquely identifies the operation. You can use this
     * identifier to retrieve the Operations resource that has information about
     * the operation.
     */
    nextPageToken: string;
  }

  export class Resource$Backupruns {
    root: Sqladmin;
    constructor(root: Sqladmin) {
      this.root = root;
      this.getRoot.bind(this);
    }

    getRoot() {
      return this.root;
    }


    /**
     * sql.backupRuns.delete
     * @desc Deletes the backup taken by a backup run.
     * @alias sql.backupRuns.delete
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.id The ID of the Backup Run to delete. To find a Backup Run ID, use the list method.
     * @param {string} params.instance Cloud SQL instance ID. This does not include the project ID.
     * @param {string} params.project Project ID of the project that contains the instance.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    delete(params?: any, options?: MethodOptions):
        AxiosPromise<Schema$Operation>;
    delete(
        params?: any,
        options?: MethodOptions|BodyResponseCallback<Schema$Operation>,
        callback?: BodyResponseCallback<Schema$Operation>): void;
    delete(
        params?: any,
        options?: MethodOptions|BodyResponseCallback<Schema$Operation>,
        callback?: BodyResponseCallback<Schema$Operation>):
        void|AxiosPromise<Schema$Operation> {
      if (typeof options === 'function') {
        callback = options;
        options = {};
      }
      if (typeof params === 'function') {
        callback = params;
        params = {};
      }
      options = options || {};
      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url:
                  (rootUrl +
                   '/sql/v1beta4/projects/{project}/instances/{instance}/backupRuns/{id}')
                      .replace(/([^:]\/)\/+/g, '$1'),
              method: 'DELETE'
            },
            options),
        params,
        requiredParams: ['project', 'instance', 'id'],
        pathParams: ['id', 'instance', 'project'],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<Schema$Operation>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Operation>(parameters);
      }
    }


    /**
     * sql.backupRuns.get
     * @desc Retrieves a resource containing information about a backup run.
     * @alias sql.backupRuns.get
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.id The ID of this Backup Run.
     * @param {string} params.instance Cloud SQL instance ID. This does not include the project ID.
     * @param {string} params.project Project ID of the project that contains the instance.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    get(params?: any, options?: MethodOptions): AxiosPromise<Schema$BackupRun>;
    get(params?: any,
        options?: MethodOptions|BodyResponseCallback<Schema$BackupRun>,
        callback?: BodyResponseCallback<Schema$BackupRun>): void;
    get(params?: any,
        options?: MethodOptions|BodyResponseCallback<Schema$BackupRun>,
        callback?: BodyResponseCallback<Schema$BackupRun>):
        void|AxiosPromise<Schema$BackupRun> {
      if (typeof options === 'function') {
        callback = options;
        options = {};
      }
      if (typeof params === 'function') {
        callback = params;
        params = {};
      }
      options = options || {};
      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url:
                  (rootUrl +
                   '/sql/v1beta4/projects/{project}/instances/{instance}/backupRuns/{id}')
                      .replace(/([^:]\/)\/+/g, '$1'),
              method: 'GET'
            },
            options),
        params,
        requiredParams: ['project', 'instance', 'id'],
        pathParams: ['id', 'instance', 'project'],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<Schema$BackupRun>(parameters, callback);
      } else {
        return createAPIRequest<Schema$BackupRun>(parameters);
      }
    }


    /**
     * sql.backupRuns.insert
     * @desc Creates a new backup run on demand. This method is applicable only
     * to Second Generation instances.
     * @alias sql.backupRuns.insert
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.instance Cloud SQL instance ID. This does not include the project ID.
     * @param {string} params.project Project ID of the project that contains the instance.
     * @param {().BackupRun} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    insert(params?: any, options?: MethodOptions):
        AxiosPromise<Schema$Operation>;
    insert(
        params?: any,
        options?: MethodOptions|BodyResponseCallback<Schema$Operation>,
        callback?: BodyResponseCallback<Schema$Operation>): void;
    insert(
        params?: any,
        options?: MethodOptions|BodyResponseCallback<Schema$Operation>,
        callback?: BodyResponseCallback<Schema$Operation>):
        void|AxiosPromise<Schema$Operation> {
      if (typeof options === 'function') {
        callback = options;
        options = {};
      }
      if (typeof params === 'function') {
        callback = params;
        params = {};
      }
      options = options || {};
      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url:
                  (rootUrl +
                   '/sql/v1beta4/projects/{project}/instances/{instance}/backupRuns')
                      .replace(/([^:]\/)\/+/g, '$1'),
              method: 'POST'
            },
            options),
        params,
        requiredParams: ['project', 'instance'],
        pathParams: ['instance', 'project'],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<Schema$Operation>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Operation>(parameters);
      }
    }


    /**
     * sql.backupRuns.list
     * @desc Lists all backup runs associated with a given instance and
     * configuration in the reverse chronological order of the enqueued time.
     * @alias sql.backupRuns.list
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.instance Cloud SQL instance ID. This does not include the project ID.
     * @param {integer=} params.maxResults Maximum number of backup runs per response.
     * @param {string=} params.pageToken A previously-returned page token representing part of the larger set of results to view.
     * @param {string} params.project Project ID of the project that contains the instance.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list(params?: any, options?: MethodOptions):
        AxiosPromise<Schema$BackupRunsListResponse>;
    list(
        params?: any,
        options?: MethodOptions|
        BodyResponseCallback<Schema$BackupRunsListResponse>,
        callback?: BodyResponseCallback<Schema$BackupRunsListResponse>): void;
    list(
        params?: any,
        options?: MethodOptions|
        BodyResponseCallback<Schema$BackupRunsListResponse>,
        callback?: BodyResponseCallback<Schema$BackupRunsListResponse>):
        void|AxiosPromise<Schema$BackupRunsListResponse> {
      if (typeof options === 'function') {
        callback = options;
        options = {};
      }
      if (typeof params === 'function') {
        callback = params;
        params = {};
      }
      options = options || {};
      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url:
                  (rootUrl +
                   '/sql/v1beta4/projects/{project}/instances/{instance}/backupRuns')
                      .replace(/([^:]\/)\/+/g, '$1'),
              method: 'GET'
            },
            options),
        params,
        requiredParams: ['project', 'instance'],
        pathParams: ['instance', 'project'],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<Schema$BackupRunsListResponse>(parameters, callback);
      } else {
        return createAPIRequest<Schema$BackupRunsListResponse>(parameters);
      }
    }
  }

  export class Resource$Databases {
    root: Sqladmin;
    constructor(root: Sqladmin) {
      this.root = root;
      this.getRoot.bind(this);
    }

    getRoot() {
      return this.root;
    }


    /**
     * sql.databases.delete
     * @desc Deletes a database from a Cloud SQL instance.
     * @alias sql.databases.delete
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.database Name of the database to be deleted in the instance.
     * @param {string} params.instance Database instance ID. This does not include the project ID.
     * @param {string} params.project Project ID of the project that contains the instance.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    delete(params?: any, options?: MethodOptions):
        AxiosPromise<Schema$Operation>;
    delete(
        params?: any,
        options?: MethodOptions|BodyResponseCallback<Schema$Operation>,
        callback?: BodyResponseCallback<Schema$Operation>): void;
    delete(
        params?: any,
        options?: MethodOptions|BodyResponseCallback<Schema$Operation>,
        callback?: BodyResponseCallback<Schema$Operation>):
        void|AxiosPromise<Schema$Operation> {
      if (typeof options === 'function') {
        callback = options;
        options = {};
      }
      if (typeof params === 'function') {
        callback = params;
        params = {};
      }
      options = options || {};
      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url:
                  (rootUrl +
                   '/sql/v1beta4/projects/{project}/instances/{instance}/databases/{database}')
                      .replace(/([^:]\/)\/+/g, '$1'),
              method: 'DELETE'
            },
            options),
        params,
        requiredParams: ['project', 'instance', 'database'],
        pathParams: ['database', 'instance', 'project'],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<Schema$Operation>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Operation>(parameters);
      }
    }


    /**
     * sql.databases.get
     * @desc Retrieves a resource containing information about a database inside
     * a Cloud SQL instance.
     * @alias sql.databases.get
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.database Name of the database in the instance.
     * @param {string} params.instance Database instance ID. This does not include the project ID.
     * @param {string} params.project Project ID of the project that contains the instance.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    get(params?: any, options?: MethodOptions): AxiosPromise<Schema$Database>;
    get(params?: any,
        options?: MethodOptions|BodyResponseCallback<Schema$Database>,
        callback?: BodyResponseCallback<Schema$Database>): void;
    get(params?: any,
        options?: MethodOptions|BodyResponseCallback<Schema$Database>,
        callback?: BodyResponseCallback<Schema$Database>):
        void|AxiosPromise<Schema$Database> {
      if (typeof options === 'function') {
        callback = options;
        options = {};
      }
      if (typeof params === 'function') {
        callback = params;
        params = {};
      }
      options = options || {};
      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url:
                  (rootUrl +
                   '/sql/v1beta4/projects/{project}/instances/{instance}/databases/{database}')
                      .replace(/([^:]\/)\/+/g, '$1'),
              method: 'GET'
            },
            options),
        params,
        requiredParams: ['project', 'instance', 'database'],
        pathParams: ['database', 'instance', 'project'],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<Schema$Database>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Database>(parameters);
      }
    }


    /**
     * sql.databases.insert
     * @desc Inserts a resource containing information about a database inside a
     * Cloud SQL instance.
     * @alias sql.databases.insert
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.instance Database instance ID. This does not include the project ID.
     * @param {string} params.project Project ID of the project that contains the instance.
     * @param {().Database} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    insert(params?: any, options?: MethodOptions):
        AxiosPromise<Schema$Operation>;
    insert(
        params?: any,
        options?: MethodOptions|BodyResponseCallback<Schema$Operation>,
        callback?: BodyResponseCallback<Schema$Operation>): void;
    insert(
        params?: any,
        options?: MethodOptions|BodyResponseCallback<Schema$Operation>,
        callback?: BodyResponseCallback<Schema$Operation>):
        void|AxiosPromise<Schema$Operation> {
      if (typeof options === 'function') {
        callback = options;
        options = {};
      }
      if (typeof params === 'function') {
        callback = params;
        params = {};
      }
      options = options || {};
      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url:
                  (rootUrl +
                   '/sql/v1beta4/projects/{project}/instances/{instance}/databases')
                      .replace(/([^:]\/)\/+/g, '$1'),
              method: 'POST'
            },
            options),
        params,
        requiredParams: ['project', 'instance'],
        pathParams: ['instance', 'project'],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<Schema$Operation>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Operation>(parameters);
      }
    }


    /**
     * sql.databases.list
     * @desc Lists databases in the specified Cloud SQL instance.
     * @alias sql.databases.list
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.instance Cloud SQL instance ID. This does not include the project ID.
     * @param {string} params.project Project ID of the project for which to list Cloud SQL instances.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list(params?: any, options?: MethodOptions):
        AxiosPromise<Schema$DatabasesListResponse>;
    list(
        params?: any,
        options?: MethodOptions|
        BodyResponseCallback<Schema$DatabasesListResponse>,
        callback?: BodyResponseCallback<Schema$DatabasesListResponse>): void;
    list(
        params?: any,
        options?: MethodOptions|
        BodyResponseCallback<Schema$DatabasesListResponse>,
        callback?: BodyResponseCallback<Schema$DatabasesListResponse>):
        void|AxiosPromise<Schema$DatabasesListResponse> {
      if (typeof options === 'function') {
        callback = options;
        options = {};
      }
      if (typeof params === 'function') {
        callback = params;
        params = {};
      }
      options = options || {};
      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url:
                  (rootUrl +
                   '/sql/v1beta4/projects/{project}/instances/{instance}/databases')
                      .replace(/([^:]\/)\/+/g, '$1'),
              method: 'GET'
            },
            options),
        params,
        requiredParams: ['project', 'instance'],
        pathParams: ['instance', 'project'],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<Schema$DatabasesListResponse>(parameters, callback);
      } else {
        return createAPIRequest<Schema$DatabasesListResponse>(parameters);
      }
    }


    /**
     * sql.databases.patch
     * @desc Updates a resource containing information about a database inside a
     * Cloud SQL instance. This method supports patch semantics.
     * @alias sql.databases.patch
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.database Name of the database to be updated in the instance.
     * @param {string} params.instance Database instance ID. This does not include the project ID.
     * @param {string} params.project Project ID of the project that contains the instance.
     * @param {().Database} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    patch(params?: any, options?: MethodOptions):
        AxiosPromise<Schema$Operation>;
    patch(
        params?: any,
        options?: MethodOptions|BodyResponseCallback<Schema$Operation>,
        callback?: BodyResponseCallback<Schema$Operation>): void;
    patch(
        params?: any,
        options?: MethodOptions|BodyResponseCallback<Schema$Operation>,
        callback?: BodyResponseCallback<Schema$Operation>):
        void|AxiosPromise<Schema$Operation> {
      if (typeof options === 'function') {
        callback = options;
        options = {};
      }
      if (typeof params === 'function') {
        callback = params;
        params = {};
      }
      options = options || {};
      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url:
                  (rootUrl +
                   '/sql/v1beta4/projects/{project}/instances/{instance}/databases/{database}')
                      .replace(/([^:]\/)\/+/g, '$1'),
              method: 'PATCH'
            },
            options),
        params,
        requiredParams: ['project', 'instance', 'database'],
        pathParams: ['database', 'instance', 'project'],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<Schema$Operation>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Operation>(parameters);
      }
    }


    /**
     * sql.databases.update
     * @desc Updates a resource containing information about a database inside a
     * Cloud SQL instance.
     * @alias sql.databases.update
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.database Name of the database to be updated in the instance.
     * @param {string} params.instance Database instance ID. This does not include the project ID.
     * @param {string} params.project Project ID of the project that contains the instance.
     * @param {().Database} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    update(params?: any, options?: MethodOptions):
        AxiosPromise<Schema$Operation>;
    update(
        params?: any,
        options?: MethodOptions|BodyResponseCallback<Schema$Operation>,
        callback?: BodyResponseCallback<Schema$Operation>): void;
    update(
        params?: any,
        options?: MethodOptions|BodyResponseCallback<Schema$Operation>,
        callback?: BodyResponseCallback<Schema$Operation>):
        void|AxiosPromise<Schema$Operation> {
      if (typeof options === 'function') {
        callback = options;
        options = {};
      }
      if (typeof params === 'function') {
        callback = params;
        params = {};
      }
      options = options || {};
      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url:
                  (rootUrl +
                   '/sql/v1beta4/projects/{project}/instances/{instance}/databases/{database}')
                      .replace(/([^:]\/)\/+/g, '$1'),
              method: 'PUT'
            },
            options),
        params,
        requiredParams: ['project', 'instance', 'database'],
        pathParams: ['database', 'instance', 'project'],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<Schema$Operation>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Operation>(parameters);
      }
    }
  }

  export class Resource$Flags {
    root: Sqladmin;
    constructor(root: Sqladmin) {
      this.root = root;
      this.getRoot.bind(this);
    }

    getRoot() {
      return this.root;
    }


    /**
     * sql.flags.list
     * @desc List all available database flags for Google Cloud SQL instances.
     * @alias sql.flags.list
     * @memberOf! ()
     *
     * @param {object=} params Parameters for request
     * @param {string=} params.databaseVersion Database version for flag retrieval. Flags are specific to the database version.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list(params?: any, options?: MethodOptions):
        AxiosPromise<Schema$FlagsListResponse>;
    list(
        params?: any,
        options?: MethodOptions|BodyResponseCallback<Schema$FlagsListResponse>,
        callback?: BodyResponseCallback<Schema$FlagsListResponse>): void;
    list(
        params?: any,
        options?: MethodOptions|BodyResponseCallback<Schema$FlagsListResponse>,
        callback?: BodyResponseCallback<Schema$FlagsListResponse>):
        void|AxiosPromise<Schema$FlagsListResponse> {
      if (typeof options === 'function') {
        callback = options;
        options = {};
      }
      if (typeof params === 'function') {
        callback = params;
        params = {};
      }
      options = options || {};
      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl + '/sql/v1beta4/flags')
                       .replace(/([^:]\/)\/+/g, '$1'),
              method: 'GET'
            },
            options),
        params,
        requiredParams: [],
        pathParams: [],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<Schema$FlagsListResponse>(parameters, callback);
      } else {
        return createAPIRequest<Schema$FlagsListResponse>(parameters);
      }
    }
  }

  export class Resource$Instances {
    root: Sqladmin;
    constructor(root: Sqladmin) {
      this.root = root;
      this.getRoot.bind(this);
    }

    getRoot() {
      return this.root;
    }


    /**
     * sql.instances.clone
     * @desc Creates a Cloud SQL instance as a clone of the source instance. The
     * API is not ready for Second Generation instances yet.
     * @alias sql.instances.clone
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.instance The ID of the Cloud SQL instance to be cloned (source). This does not include the project ID.
     * @param {string} params.project Project ID of the source as well as the clone Cloud SQL instance.
     * @param {().InstancesCloneRequest} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    clone(params?: any, options?: MethodOptions):
        AxiosPromise<Schema$Operation>;
    clone(
        params?: any,
        options?: MethodOptions|BodyResponseCallback<Schema$Operation>,
        callback?: BodyResponseCallback<Schema$Operation>): void;
    clone(
        params?: any,
        options?: MethodOptions|BodyResponseCallback<Schema$Operation>,
        callback?: BodyResponseCallback<Schema$Operation>):
        void|AxiosPromise<Schema$Operation> {
      if (typeof options === 'function') {
        callback = options;
        options = {};
      }
      if (typeof params === 'function') {
        callback = params;
        params = {};
      }
      options = options || {};
      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url:
                  (rootUrl +
                   '/sql/v1beta4/projects/{project}/instances/{instance}/clone')
                      .replace(/([^:]\/)\/+/g, '$1'),
              method: 'POST'
            },
            options),
        params,
        requiredParams: ['project', 'instance'],
        pathParams: ['instance', 'project'],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<Schema$Operation>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Operation>(parameters);
      }
    }


    /**
     * sql.instances.delete
     * @desc Deletes a Cloud SQL instance.
     * @alias sql.instances.delete
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.instance Cloud SQL instance ID. This does not include the project ID.
     * @param {string} params.project Project ID of the project that contains the instance to be deleted.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    delete(params?: any, options?: MethodOptions):
        AxiosPromise<Schema$Operation>;
    delete(
        params?: any,
        options?: MethodOptions|BodyResponseCallback<Schema$Operation>,
        callback?: BodyResponseCallback<Schema$Operation>): void;
    delete(
        params?: any,
        options?: MethodOptions|BodyResponseCallback<Schema$Operation>,
        callback?: BodyResponseCallback<Schema$Operation>):
        void|AxiosPromise<Schema$Operation> {
      if (typeof options === 'function') {
        callback = options;
        options = {};
      }
      if (typeof params === 'function') {
        callback = params;
        params = {};
      }
      options = options || {};
      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl +
                    '/sql/v1beta4/projects/{project}/instances/{instance}')
                       .replace(/([^:]\/)\/+/g, '$1'),
              method: 'DELETE'
            },
            options),
        params,
        requiredParams: ['project', 'instance'],
        pathParams: ['instance', 'project'],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<Schema$Operation>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Operation>(parameters);
      }
    }


    /**
     * sql.instances.demoteMaster
     * @desc Reserved for future use.
     * @alias sql.instances.demoteMaster
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.instance Cloud SQL instance name.
     * @param {string} params.project ID of the project that contains the instance.
     * @param {().InstancesDemoteMasterRequest} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    demoteMaster(params?: any, options?: MethodOptions):
        AxiosPromise<Schema$Operation>;
    demoteMaster(
        params?: any,
        options?: MethodOptions|BodyResponseCallback<Schema$Operation>,
        callback?: BodyResponseCallback<Schema$Operation>): void;
    demoteMaster(
        params?: any,
        options?: MethodOptions|BodyResponseCallback<Schema$Operation>,
        callback?: BodyResponseCallback<Schema$Operation>):
        void|AxiosPromise<Schema$Operation> {
      if (typeof options === 'function') {
        callback = options;
        options = {};
      }
      if (typeof params === 'function') {
        callback = params;
        params = {};
      }
      options = options || {};
      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url:
                  (rootUrl +
                   '/sql/v1beta4/projects/{project}/instances/{instance}/demoteMaster')
                      .replace(/([^:]\/)\/+/g, '$1'),
              method: 'POST'
            },
            options),
        params,
        requiredParams: ['project', 'instance'],
        pathParams: ['instance', 'project'],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<Schema$Operation>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Operation>(parameters);
      }
    }


    /**
     * sql.instances.export
     * @desc Exports data from a Cloud SQL instance to a Google Cloud Storage
     * bucket as a MySQL dump file.
     * @alias sql.instances.export
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.instance Cloud SQL instance ID. This does not include the project ID.
     * @param {string} params.project Project ID of the project that contains the instance to be exported.
     * @param {().InstancesExportRequest} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    export(params?: any, options?: MethodOptions):
        AxiosPromise<Schema$Operation>;
    export(
        params?: any,
        options?: MethodOptions|BodyResponseCallback<Schema$Operation>,
        callback?: BodyResponseCallback<Schema$Operation>): void;
    export(
        params?: any,
        options?: MethodOptions|BodyResponseCallback<Schema$Operation>,
        callback?: BodyResponseCallback<Schema$Operation>):
        void|AxiosPromise<Schema$Operation> {
      if (typeof options === 'function') {
        callback = options;
        options = {};
      }
      if (typeof params === 'function') {
        callback = params;
        params = {};
      }
      options = options || {};
      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url:
                  (rootUrl +
                   '/sql/v1beta4/projects/{project}/instances/{instance}/export')
                      .replace(/([^:]\/)\/+/g, '$1'),
              method: 'POST'
            },
            options),
        params,
        requiredParams: ['project', 'instance'],
        pathParams: ['instance', 'project'],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<Schema$Operation>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Operation>(parameters);
      }
    }


    /**
     * sql.instances.failover
     * @desc Failover the instance to its failover replica instance.
     * @alias sql.instances.failover
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.instance Cloud SQL instance ID. This does not include the project ID.
     * @param {string} params.project ID of the project that contains the read replica.
     * @param {().InstancesFailoverRequest} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    failover(params?: any, options?: MethodOptions):
        AxiosPromise<Schema$Operation>;
    failover(
        params?: any,
        options?: MethodOptions|BodyResponseCallback<Schema$Operation>,
        callback?: BodyResponseCallback<Schema$Operation>): void;
    failover(
        params?: any,
        options?: MethodOptions|BodyResponseCallback<Schema$Operation>,
        callback?: BodyResponseCallback<Schema$Operation>):
        void|AxiosPromise<Schema$Operation> {
      if (typeof options === 'function') {
        callback = options;
        options = {};
      }
      if (typeof params === 'function') {
        callback = params;
        params = {};
      }
      options = options || {};
      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url:
                  (rootUrl +
                   '/sql/v1beta4/projects/{project}/instances/{instance}/failover')
                      .replace(/([^:]\/)\/+/g, '$1'),
              method: 'POST'
            },
            options),
        params,
        requiredParams: ['project', 'instance'],
        pathParams: ['instance', 'project'],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<Schema$Operation>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Operation>(parameters);
      }
    }


    /**
     * sql.instances.get
     * @desc Retrieves a resource containing information about a Cloud SQL
     * instance.
     * @alias sql.instances.get
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.instance Database instance ID. This does not include the project ID.
     * @param {string} params.project Project ID of the project that contains the instance.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    get(params?: any,
        options?: MethodOptions): AxiosPromise<Schema$DatabaseInstance>;
    get(params?: any,
        options?: MethodOptions|BodyResponseCallback<Schema$DatabaseInstance>,
        callback?: BodyResponseCallback<Schema$DatabaseInstance>): void;
    get(params?: any,
        options?: MethodOptions|BodyResponseCallback<Schema$DatabaseInstance>,
        callback?: BodyResponseCallback<Schema$DatabaseInstance>):
        void|AxiosPromise<Schema$DatabaseInstance> {
      if (typeof options === 'function') {
        callback = options;
        options = {};
      }
      if (typeof params === 'function') {
        callback = params;
        params = {};
      }
      options = options || {};
      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl +
                    '/sql/v1beta4/projects/{project}/instances/{instance}')
                       .replace(/([^:]\/)\/+/g, '$1'),
              method: 'GET'
            },
            options),
        params,
        requiredParams: ['project', 'instance'],
        pathParams: ['instance', 'project'],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<Schema$DatabaseInstance>(parameters, callback);
      } else {
        return createAPIRequest<Schema$DatabaseInstance>(parameters);
      }
    }


    /**
     * sql.instances.import
     * @desc Imports data into a Cloud SQL instance from a MySQL dump file in
     * Google Cloud Storage.
     * @alias sql.instances.import
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.instance Cloud SQL instance ID. This does not include the project ID.
     * @param {string} params.project Project ID of the project that contains the instance.
     * @param {().InstancesImportRequest} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
import(params?: any, options?: MethodOptions): AxiosPromise<Schema$Operation>;
import(params?: any, options?: MethodOptions|BodyResponseCallback<Schema$Operation>, callback?: BodyResponseCallback<Schema$Operation>): void;
import(params?: any, options?: MethodOptions|BodyResponseCallback<Schema$Operation>, callback?: BodyResponseCallback<Schema$Operation>): void|AxiosPromise<Schema$Operation> {if(typeof options === 'function') {
    callback = options;
    options = {};
    } if(typeof params === 'function') {
    callback = params;
    params = {};
    } options = options || {}; const rootUrl = options.rootUrl || 'https://www.googleapis.com/'; const parameters = {options: Object.assign({url: (rootUrl + '/sql/v1beta4/projects/{project}/instances/{instance}/import').replace(/([^:]\/)\/+/g, '$1'), method: 'POST'}, options), params, requiredParams: ['project', 'instance'], pathParams: ['instance', 'project'], context: this.getRoot()}; if(callback) {
    createAPIRequest<Schema$Operation>(parameters, callback);
    } else { return createAPIRequest<Schema$Operation>(parameters);
    }}


    /**
 * sql.instances.insert
 * @desc Creates a new Cloud SQL instance.
 * @alias sql.instances.insert
 * @memberOf! ()
 *
 * @param {object} params Parameters for request
 * @param {string} params.project Project ID of the project to which the newly created Cloud SQL instances should belong.
 * @param {().DatabaseInstance} params.resource Request body data
 * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
 * @param {callback} callback The callback that handles the response.
 * @return {object} Request object
 */
    insert(params?: any, options?: MethodOptions): AxiosPromise<Schema$Operation>;
    insert(
        params?: any,
        options?: MethodOptions|BodyResponseCallback<Schema$Operation>,
        callback?: BodyResponseCallback<Schema$Operation>): void;
    insert(
        params?: any,
        options?: MethodOptions|BodyResponseCallback<Schema$Operation>,
        callback?: BodyResponseCallback<Schema$Operation>):
        void|AxiosPromise<Schema$Operation> {
      if (typeof options === 'function') {
        callback = options;
        options = {};
      }
      if (typeof params === 'function') {
        callback = params;
        params = {};
      }
      options = options || {};
      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl + '/sql/v1beta4/projects/{project}/instances')
                       .replace(/([^:]\/)\/+/g, '$1'),
              method: 'POST'
            },
            options),
        params,
        requiredParams: ['project'],
        pathParams: ['project'],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<Schema$Operation>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Operation>(parameters);
      }
    }


    /**
     * sql.instances.list
     * @desc Lists instances under a given project in the alphabetical order of
     * the instance name.
     * @alias sql.instances.list
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string=} params.filter An expression for filtering the results of the request, such as by name or label.
     * @param {integer=} params.maxResults The maximum number of results to return per response.
     * @param {string=} params.pageToken A previously-returned page token representing part of the larger set of results to view.
     * @param {string} params.project Project ID of the project for which to list Cloud SQL instances.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list(params?: any, options?: MethodOptions):
        AxiosPromise<Schema$InstancesListResponse>;
    list(
        params?: any,
        options?: MethodOptions|
        BodyResponseCallback<Schema$InstancesListResponse>,
        callback?: BodyResponseCallback<Schema$InstancesListResponse>): void;
    list(
        params?: any,
        options?: MethodOptions|
        BodyResponseCallback<Schema$InstancesListResponse>,
        callback?: BodyResponseCallback<Schema$InstancesListResponse>):
        void|AxiosPromise<Schema$InstancesListResponse> {
      if (typeof options === 'function') {
        callback = options;
        options = {};
      }
      if (typeof params === 'function') {
        callback = params;
        params = {};
      }
      options = options || {};
      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl + '/sql/v1beta4/projects/{project}/instances')
                       .replace(/([^:]\/)\/+/g, '$1'),
              method: 'GET'
            },
            options),
        params,
        requiredParams: ['project'],
        pathParams: ['project'],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<Schema$InstancesListResponse>(parameters, callback);
      } else {
        return createAPIRequest<Schema$InstancesListResponse>(parameters);
      }
    }


    /**
     * sql.instances.patch
     * @desc Updates settings of a Cloud SQL instance. Caution: This is not a
     * partial update, so you must include values for all the settings that you
     * want to retain. For partial updates, use patch.. This method supports
     * patch semantics.
     * @alias sql.instances.patch
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.instance Cloud SQL instance ID. This does not include the project ID.
     * @param {string} params.project Project ID of the project that contains the instance.
     * @param {().DatabaseInstance} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    patch(params?: any, options?: MethodOptions):
        AxiosPromise<Schema$Operation>;
    patch(
        params?: any,
        options?: MethodOptions|BodyResponseCallback<Schema$Operation>,
        callback?: BodyResponseCallback<Schema$Operation>): void;
    patch(
        params?: any,
        options?: MethodOptions|BodyResponseCallback<Schema$Operation>,
        callback?: BodyResponseCallback<Schema$Operation>):
        void|AxiosPromise<Schema$Operation> {
      if (typeof options === 'function') {
        callback = options;
        options = {};
      }
      if (typeof params === 'function') {
        callback = params;
        params = {};
      }
      options = options || {};
      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl +
                    '/sql/v1beta4/projects/{project}/instances/{instance}')
                       .replace(/([^:]\/)\/+/g, '$1'),
              method: 'PATCH'
            },
            options),
        params,
        requiredParams: ['project', 'instance'],
        pathParams: ['instance', 'project'],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<Schema$Operation>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Operation>(parameters);
      }
    }


    /**
     * sql.instances.promoteReplica
     * @desc Promotes the read replica instance to be a stand-alone Cloud SQL
     * instance.
     * @alias sql.instances.promoteReplica
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.instance Cloud SQL read replica instance name.
     * @param {string} params.project ID of the project that contains the read replica.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    promoteReplica(params?: any, options?: MethodOptions):
        AxiosPromise<Schema$Operation>;
    promoteReplica(
        params?: any,
        options?: MethodOptions|BodyResponseCallback<Schema$Operation>,
        callback?: BodyResponseCallback<Schema$Operation>): void;
    promoteReplica(
        params?: any,
        options?: MethodOptions|BodyResponseCallback<Schema$Operation>,
        callback?: BodyResponseCallback<Schema$Operation>):
        void|AxiosPromise<Schema$Operation> {
      if (typeof options === 'function') {
        callback = options;
        options = {};
      }
      if (typeof params === 'function') {
        callback = params;
        params = {};
      }
      options = options || {};
      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url:
                  (rootUrl +
                   '/sql/v1beta4/projects/{project}/instances/{instance}/promoteReplica')
                      .replace(/([^:]\/)\/+/g, '$1'),
              method: 'POST'
            },
            options),
        params,
        requiredParams: ['project', 'instance'],
        pathParams: ['instance', 'project'],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<Schema$Operation>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Operation>(parameters);
      }
    }


    /**
     * sql.instances.resetSslConfig
     * @desc Deletes all client certificates and generates a new server SSL
     * certificate for the instance. The changes will not take effect until the
     * instance is restarted. Existing instances without a server certificate
     * will need to call this once to set a server certificate.
     * @alias sql.instances.resetSslConfig
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.instance Cloud SQL instance ID. This does not include the project ID.
     * @param {string} params.project Project ID of the project that contains the instance.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    resetSslConfig(params?: any, options?: MethodOptions):
        AxiosPromise<Schema$Operation>;
    resetSslConfig(
        params?: any,
        options?: MethodOptions|BodyResponseCallback<Schema$Operation>,
        callback?: BodyResponseCallback<Schema$Operation>): void;
    resetSslConfig(
        params?: any,
        options?: MethodOptions|BodyResponseCallback<Schema$Operation>,
        callback?: BodyResponseCallback<Schema$Operation>):
        void|AxiosPromise<Schema$Operation> {
      if (typeof options === 'function') {
        callback = options;
        options = {};
      }
      if (typeof params === 'function') {
        callback = params;
        params = {};
      }
      options = options || {};
      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url:
                  (rootUrl +
                   '/sql/v1beta4/projects/{project}/instances/{instance}/resetSslConfig')
                      .replace(/([^:]\/)\/+/g, '$1'),
              method: 'POST'
            },
            options),
        params,
        requiredParams: ['project', 'instance'],
        pathParams: ['instance', 'project'],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<Schema$Operation>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Operation>(parameters);
      }
    }


    /**
     * sql.instances.restart
     * @desc Restarts a Cloud SQL instance.
     * @alias sql.instances.restart
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.instance Cloud SQL instance ID. This does not include the project ID.
     * @param {string} params.project Project ID of the project that contains the instance to be restarted.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    restart(params?: any, options?: MethodOptions):
        AxiosPromise<Schema$Operation>;
    restart(
        params?: any,
        options?: MethodOptions|BodyResponseCallback<Schema$Operation>,
        callback?: BodyResponseCallback<Schema$Operation>): void;
    restart(
        params?: any,
        options?: MethodOptions|BodyResponseCallback<Schema$Operation>,
        callback?: BodyResponseCallback<Schema$Operation>):
        void|AxiosPromise<Schema$Operation> {
      if (typeof options === 'function') {
        callback = options;
        options = {};
      }
      if (typeof params === 'function') {
        callback = params;
        params = {};
      }
      options = options || {};
      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url:
                  (rootUrl +
                   '/sql/v1beta4/projects/{project}/instances/{instance}/restart')
                      .replace(/([^:]\/)\/+/g, '$1'),
              method: 'POST'
            },
            options),
        params,
        requiredParams: ['project', 'instance'],
        pathParams: ['instance', 'project'],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<Schema$Operation>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Operation>(parameters);
      }
    }


    /**
     * sql.instances.restoreBackup
     * @desc Restores a backup of a Cloud SQL instance.
     * @alias sql.instances.restoreBackup
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.instance Cloud SQL instance ID. This does not include the project ID.
     * @param {string} params.project Project ID of the project that contains the instance.
     * @param {().InstancesRestoreBackupRequest} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    restoreBackup(params?: any, options?: MethodOptions):
        AxiosPromise<Schema$Operation>;
    restoreBackup(
        params?: any,
        options?: MethodOptions|BodyResponseCallback<Schema$Operation>,
        callback?: BodyResponseCallback<Schema$Operation>): void;
    restoreBackup(
        params?: any,
        options?: MethodOptions|BodyResponseCallback<Schema$Operation>,
        callback?: BodyResponseCallback<Schema$Operation>):
        void|AxiosPromise<Schema$Operation> {
      if (typeof options === 'function') {
        callback = options;
        options = {};
      }
      if (typeof params === 'function') {
        callback = params;
        params = {};
      }
      options = options || {};
      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url:
                  (rootUrl +
                   '/sql/v1beta4/projects/{project}/instances/{instance}/restoreBackup')
                      .replace(/([^:]\/)\/+/g, '$1'),
              method: 'POST'
            },
            options),
        params,
        requiredParams: ['project', 'instance'],
        pathParams: ['instance', 'project'],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<Schema$Operation>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Operation>(parameters);
      }
    }


    /**
     * sql.instances.startReplica
     * @desc Starts the replication in the read replica instance.
     * @alias sql.instances.startReplica
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.instance Cloud SQL read replica instance name.
     * @param {string} params.project ID of the project that contains the read replica.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    startReplica(params?: any, options?: MethodOptions):
        AxiosPromise<Schema$Operation>;
    startReplica(
        params?: any,
        options?: MethodOptions|BodyResponseCallback<Schema$Operation>,
        callback?: BodyResponseCallback<Schema$Operation>): void;
    startReplica(
        params?: any,
        options?: MethodOptions|BodyResponseCallback<Schema$Operation>,
        callback?: BodyResponseCallback<Schema$Operation>):
        void|AxiosPromise<Schema$Operation> {
      if (typeof options === 'function') {
        callback = options;
        options = {};
      }
      if (typeof params === 'function') {
        callback = params;
        params = {};
      }
      options = options || {};
      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url:
                  (rootUrl +
                   '/sql/v1beta4/projects/{project}/instances/{instance}/startReplica')
                      .replace(/([^:]\/)\/+/g, '$1'),
              method: 'POST'
            },
            options),
        params,
        requiredParams: ['project', 'instance'],
        pathParams: ['instance', 'project'],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<Schema$Operation>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Operation>(parameters);
      }
    }


    /**
     * sql.instances.stopReplica
     * @desc Stops the replication in the read replica instance.
     * @alias sql.instances.stopReplica
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.instance Cloud SQL read replica instance name.
     * @param {string} params.project ID of the project that contains the read replica.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    stopReplica(params?: any, options?: MethodOptions):
        AxiosPromise<Schema$Operation>;
    stopReplica(
        params?: any,
        options?: MethodOptions|BodyResponseCallback<Schema$Operation>,
        callback?: BodyResponseCallback<Schema$Operation>): void;
    stopReplica(
        params?: any,
        options?: MethodOptions|BodyResponseCallback<Schema$Operation>,
        callback?: BodyResponseCallback<Schema$Operation>):
        void|AxiosPromise<Schema$Operation> {
      if (typeof options === 'function') {
        callback = options;
        options = {};
      }
      if (typeof params === 'function') {
        callback = params;
        params = {};
      }
      options = options || {};
      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url:
                  (rootUrl +
                   '/sql/v1beta4/projects/{project}/instances/{instance}/stopReplica')
                      .replace(/([^:]\/)\/+/g, '$1'),
              method: 'POST'
            },
            options),
        params,
        requiredParams: ['project', 'instance'],
        pathParams: ['instance', 'project'],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<Schema$Operation>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Operation>(parameters);
      }
    }


    /**
     * sql.instances.truncateLog
     * @desc Truncate MySQL general and slow query log tables
     * @alias sql.instances.truncateLog
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.instance Cloud SQL instance ID. This does not include the project ID.
     * @param {string} params.project Project ID of the Cloud SQL project.
     * @param {().InstancesTruncateLogRequest} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    truncateLog(params?: any, options?: MethodOptions):
        AxiosPromise<Schema$Operation>;
    truncateLog(
        params?: any,
        options?: MethodOptions|BodyResponseCallback<Schema$Operation>,
        callback?: BodyResponseCallback<Schema$Operation>): void;
    truncateLog(
        params?: any,
        options?: MethodOptions|BodyResponseCallback<Schema$Operation>,
        callback?: BodyResponseCallback<Schema$Operation>):
        void|AxiosPromise<Schema$Operation> {
      if (typeof options === 'function') {
        callback = options;
        options = {};
      }
      if (typeof params === 'function') {
        callback = params;
        params = {};
      }
      options = options || {};
      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url:
                  (rootUrl +
                   '/sql/v1beta4/projects/{project}/instances/{instance}/truncateLog')
                      .replace(/([^:]\/)\/+/g, '$1'),
              method: 'POST'
            },
            options),
        params,
        requiredParams: ['project', 'instance'],
        pathParams: ['instance', 'project'],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<Schema$Operation>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Operation>(parameters);
      }
    }


    /**
     * sql.instances.update
     * @desc Updates settings of a Cloud SQL instance. Caution: This is not a
     * partial update, so you must include values for all the settings that you
     * want to retain. For partial updates, use patch.
     * @alias sql.instances.update
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.instance Cloud SQL instance ID. This does not include the project ID.
     * @param {string} params.project Project ID of the project that contains the instance.
     * @param {().DatabaseInstance} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    update(params?: any, options?: MethodOptions):
        AxiosPromise<Schema$Operation>;
    update(
        params?: any,
        options?: MethodOptions|BodyResponseCallback<Schema$Operation>,
        callback?: BodyResponseCallback<Schema$Operation>): void;
    update(
        params?: any,
        options?: MethodOptions|BodyResponseCallback<Schema$Operation>,
        callback?: BodyResponseCallback<Schema$Operation>):
        void|AxiosPromise<Schema$Operation> {
      if (typeof options === 'function') {
        callback = options;
        options = {};
      }
      if (typeof params === 'function') {
        callback = params;
        params = {};
      }
      options = options || {};
      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl +
                    '/sql/v1beta4/projects/{project}/instances/{instance}')
                       .replace(/([^:]\/)\/+/g, '$1'),
              method: 'PUT'
            },
            options),
        params,
        requiredParams: ['project', 'instance'],
        pathParams: ['instance', 'project'],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<Schema$Operation>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Operation>(parameters);
      }
    }
  }

  export class Resource$Operations {
    root: Sqladmin;
    constructor(root: Sqladmin) {
      this.root = root;
      this.getRoot.bind(this);
    }

    getRoot() {
      return this.root;
    }


    /**
     * sql.operations.get
     * @desc Retrieves an instance operation that has been performed on an
     * instance.
     * @alias sql.operations.get
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.operation Instance operation ID.
     * @param {string} params.project Project ID of the project that contains the instance.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    get(params?: any, options?: MethodOptions): AxiosPromise<Schema$Operation>;
    get(params?: any,
        options?: MethodOptions|BodyResponseCallback<Schema$Operation>,
        callback?: BodyResponseCallback<Schema$Operation>): void;
    get(params?: any,
        options?: MethodOptions|BodyResponseCallback<Schema$Operation>,
        callback?: BodyResponseCallback<Schema$Operation>):
        void|AxiosPromise<Schema$Operation> {
      if (typeof options === 'function') {
        callback = options;
        options = {};
      }
      if (typeof params === 'function') {
        callback = params;
        params = {};
      }
      options = options || {};
      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl +
                    '/sql/v1beta4/projects/{project}/operations/{operation}')
                       .replace(/([^:]\/)\/+/g, '$1'),
              method: 'GET'
            },
            options),
        params,
        requiredParams: ['project', 'operation'],
        pathParams: ['operation', 'project'],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<Schema$Operation>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Operation>(parameters);
      }
    }


    /**
     * sql.operations.list
     * @desc Lists all instance operations that have been performed on the given
     * Cloud SQL instance in the reverse chronological order of the start time.
     * @alias sql.operations.list
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.instance Cloud SQL instance ID. This does not include the project ID.
     * @param {integer=} params.maxResults Maximum number of operations per response.
     * @param {string=} params.pageToken A previously-returned page token representing part of the larger set of results to view.
     * @param {string} params.project Project ID of the project that contains the instance.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list(params?: any, options?: MethodOptions):
        AxiosPromise<Schema$OperationsListResponse>;
    list(
        params?: any,
        options?: MethodOptions|
        BodyResponseCallback<Schema$OperationsListResponse>,
        callback?: BodyResponseCallback<Schema$OperationsListResponse>): void;
    list(
        params?: any,
        options?: MethodOptions|
        BodyResponseCallback<Schema$OperationsListResponse>,
        callback?: BodyResponseCallback<Schema$OperationsListResponse>):
        void|AxiosPromise<Schema$OperationsListResponse> {
      if (typeof options === 'function') {
        callback = options;
        options = {};
      }
      if (typeof params === 'function') {
        callback = params;
        params = {};
      }
      options = options || {};
      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl + '/sql/v1beta4/projects/{project}/operations')
                       .replace(/([^:]\/)\/+/g, '$1'),
              method: 'GET'
            },
            options),
        params,
        requiredParams: ['project', 'instance'],
        pathParams: ['project'],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<Schema$OperationsListResponse>(parameters, callback);
      } else {
        return createAPIRequest<Schema$OperationsListResponse>(parameters);
      }
    }
  }

  export class Resource$Sslcerts {
    root: Sqladmin;
    constructor(root: Sqladmin) {
      this.root = root;
      this.getRoot.bind(this);
    }

    getRoot() {
      return this.root;
    }


    /**
     * sql.sslCerts.createEphemeral
     * @desc Generates a short-lived X509 certificate containing the provided
     * public key and signed by a private key specific to the target instance.
     * Users may use the certificate to authenticate as themselves when
     * connecting to the database.
     * @alias sql.sslCerts.createEphemeral
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.instance Cloud SQL instance ID. This does not include the project ID.
     * @param {string} params.project Project ID of the Cloud SQL project.
     * @param {().SslCertsCreateEphemeralRequest} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    createEphemeral(params?: any, options?: MethodOptions):
        AxiosPromise<Schema$SslCert>;
    createEphemeral(
        params?: any,
        options?: MethodOptions|BodyResponseCallback<Schema$SslCert>,
        callback?: BodyResponseCallback<Schema$SslCert>): void;
    createEphemeral(
        params?: any,
        options?: MethodOptions|BodyResponseCallback<Schema$SslCert>,
        callback?: BodyResponseCallback<Schema$SslCert>):
        void|AxiosPromise<Schema$SslCert> {
      if (typeof options === 'function') {
        callback = options;
        options = {};
      }
      if (typeof params === 'function') {
        callback = params;
        params = {};
      }
      options = options || {};
      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url:
                  (rootUrl +
                   '/sql/v1beta4/projects/{project}/instances/{instance}/createEphemeral')
                      .replace(/([^:]\/)\/+/g, '$1'),
              method: 'POST'
            },
            options),
        params,
        requiredParams: ['project', 'instance'],
        pathParams: ['instance', 'project'],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<Schema$SslCert>(parameters, callback);
      } else {
        return createAPIRequest<Schema$SslCert>(parameters);
      }
    }


    /**
     * sql.sslCerts.delete
     * @desc Deletes the SSL certificate. The change will not take effect until
     * the instance is restarted.
     * @alias sql.sslCerts.delete
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.instance Cloud SQL instance ID. This does not include the project ID.
     * @param {string} params.project Project ID of the project that contains the instance to be deleted.
     * @param {string} params.sha1Fingerprint Sha1 FingerPrint.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    delete(params?: any, options?: MethodOptions):
        AxiosPromise<Schema$Operation>;
    delete(
        params?: any,
        options?: MethodOptions|BodyResponseCallback<Schema$Operation>,
        callback?: BodyResponseCallback<Schema$Operation>): void;
    delete(
        params?: any,
        options?: MethodOptions|BodyResponseCallback<Schema$Operation>,
        callback?: BodyResponseCallback<Schema$Operation>):
        void|AxiosPromise<Schema$Operation> {
      if (typeof options === 'function') {
        callback = options;
        options = {};
      }
      if (typeof params === 'function') {
        callback = params;
        params = {};
      }
      options = options || {};
      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url:
                  (rootUrl +
                   '/sql/v1beta4/projects/{project}/instances/{instance}/sslCerts/{sha1Fingerprint}')
                      .replace(/([^:]\/)\/+/g, '$1'),
              method: 'DELETE'
            },
            options),
        params,
        requiredParams: ['project', 'instance', 'sha1Fingerprint'],
        pathParams: ['instance', 'project', 'sha1Fingerprint'],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<Schema$Operation>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Operation>(parameters);
      }
    }


    /**
     * sql.sslCerts.get
     * @desc Retrieves a particular SSL certificate. Does not include the
     * private key (required for usage). The private key must be saved from the
     * response to initial creation.
     * @alias sql.sslCerts.get
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.instance Cloud SQL instance ID. This does not include the project ID.
     * @param {string} params.project Project ID of the project that contains the instance.
     * @param {string} params.sha1Fingerprint Sha1 FingerPrint.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    get(params?: any, options?: MethodOptions): AxiosPromise<Schema$SslCert>;
    get(params?: any,
        options?: MethodOptions|BodyResponseCallback<Schema$SslCert>,
        callback?: BodyResponseCallback<Schema$SslCert>): void;
    get(params?: any,
        options?: MethodOptions|BodyResponseCallback<Schema$SslCert>,
        callback?: BodyResponseCallback<Schema$SslCert>):
        void|AxiosPromise<Schema$SslCert> {
      if (typeof options === 'function') {
        callback = options;
        options = {};
      }
      if (typeof params === 'function') {
        callback = params;
        params = {};
      }
      options = options || {};
      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url:
                  (rootUrl +
                   '/sql/v1beta4/projects/{project}/instances/{instance}/sslCerts/{sha1Fingerprint}')
                      .replace(/([^:]\/)\/+/g, '$1'),
              method: 'GET'
            },
            options),
        params,
        requiredParams: ['project', 'instance', 'sha1Fingerprint'],
        pathParams: ['instance', 'project', 'sha1Fingerprint'],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<Schema$SslCert>(parameters, callback);
      } else {
        return createAPIRequest<Schema$SslCert>(parameters);
      }
    }


    /**
     * sql.sslCerts.insert
     * @desc Creates an SSL certificate and returns it along with the private
     * key and server certificate authority. The new certificate will not be
     * usable until the instance is restarted.
     * @alias sql.sslCerts.insert
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.instance Cloud SQL instance ID. This does not include the project ID.
     * @param {string} params.project Project ID of the project to which the newly created Cloud SQL instances should belong.
     * @param {().SslCertsInsertRequest} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    insert(params?: any, options?: MethodOptions):
        AxiosPromise<Schema$SslCertsInsertResponse>;
    insert(
        params?: any,
        options?: MethodOptions|
        BodyResponseCallback<Schema$SslCertsInsertResponse>,
        callback?: BodyResponseCallback<Schema$SslCertsInsertResponse>): void;
    insert(
        params?: any,
        options?: MethodOptions|
        BodyResponseCallback<Schema$SslCertsInsertResponse>,
        callback?: BodyResponseCallback<Schema$SslCertsInsertResponse>):
        void|AxiosPromise<Schema$SslCertsInsertResponse> {
      if (typeof options === 'function') {
        callback = options;
        options = {};
      }
      if (typeof params === 'function') {
        callback = params;
        params = {};
      }
      options = options || {};
      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url:
                  (rootUrl +
                   '/sql/v1beta4/projects/{project}/instances/{instance}/sslCerts')
                      .replace(/([^:]\/)\/+/g, '$1'),
              method: 'POST'
            },
            options),
        params,
        requiredParams: ['project', 'instance'],
        pathParams: ['instance', 'project'],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<Schema$SslCertsInsertResponse>(parameters, callback);
      } else {
        return createAPIRequest<Schema$SslCertsInsertResponse>(parameters);
      }
    }


    /**
     * sql.sslCerts.list
     * @desc Lists all of the current SSL certificates for the instance.
     * @alias sql.sslCerts.list
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.instance Cloud SQL instance ID. This does not include the project ID.
     * @param {string} params.project Project ID of the project for which to list Cloud SQL instances.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list(params?: any, options?: MethodOptions):
        AxiosPromise<Schema$SslCertsListResponse>;
    list(
        params?: any,
        options?: MethodOptions|
        BodyResponseCallback<Schema$SslCertsListResponse>,
        callback?: BodyResponseCallback<Schema$SslCertsListResponse>): void;
    list(
        params?: any,
        options?: MethodOptions|
        BodyResponseCallback<Schema$SslCertsListResponse>,
        callback?: BodyResponseCallback<Schema$SslCertsListResponse>):
        void|AxiosPromise<Schema$SslCertsListResponse> {
      if (typeof options === 'function') {
        callback = options;
        options = {};
      }
      if (typeof params === 'function') {
        callback = params;
        params = {};
      }
      options = options || {};
      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url:
                  (rootUrl +
                   '/sql/v1beta4/projects/{project}/instances/{instance}/sslCerts')
                      .replace(/([^:]\/)\/+/g, '$1'),
              method: 'GET'
            },
            options),
        params,
        requiredParams: ['project', 'instance'],
        pathParams: ['instance', 'project'],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<Schema$SslCertsListResponse>(parameters, callback);
      } else {
        return createAPIRequest<Schema$SslCertsListResponse>(parameters);
      }
    }
  }

  export class Resource$Tiers {
    root: Sqladmin;
    constructor(root: Sqladmin) {
      this.root = root;
      this.getRoot.bind(this);
    }

    getRoot() {
      return this.root;
    }


    /**
     * sql.tiers.list
     * @desc Lists all available service tiers for Google Cloud SQL, for example
     * D1, D2. For related information, see Pricing.
     * @alias sql.tiers.list
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.project Project ID of the project for which to list tiers.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list(params?: any, options?: MethodOptions):
        AxiosPromise<Schema$TiersListResponse>;
    list(
        params?: any,
        options?: MethodOptions|BodyResponseCallback<Schema$TiersListResponse>,
        callback?: BodyResponseCallback<Schema$TiersListResponse>): void;
    list(
        params?: any,
        options?: MethodOptions|BodyResponseCallback<Schema$TiersListResponse>,
        callback?: BodyResponseCallback<Schema$TiersListResponse>):
        void|AxiosPromise<Schema$TiersListResponse> {
      if (typeof options === 'function') {
        callback = options;
        options = {};
      }
      if (typeof params === 'function') {
        callback = params;
        params = {};
      }
      options = options || {};
      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl + '/sql/v1beta4/projects/{project}/tiers')
                       .replace(/([^:]\/)\/+/g, '$1'),
              method: 'GET'
            },
            options),
        params,
        requiredParams: ['project'],
        pathParams: ['project'],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<Schema$TiersListResponse>(parameters, callback);
      } else {
        return createAPIRequest<Schema$TiersListResponse>(parameters);
      }
    }
  }

  export class Resource$Users {
    root: Sqladmin;
    constructor(root: Sqladmin) {
      this.root = root;
      this.getRoot.bind(this);
    }

    getRoot() {
      return this.root;
    }


    /**
     * sql.users.delete
     * @desc Deletes a user from a Cloud SQL instance.
     * @alias sql.users.delete
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.host Host of the user in the instance.
     * @param {string} params.instance Database instance ID. This does not include the project ID.
     * @param {string} params.name Name of the user in the instance.
     * @param {string} params.project Project ID of the project that contains the instance.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    delete(params?: any, options?: MethodOptions):
        AxiosPromise<Schema$Operation>;
    delete(
        params?: any,
        options?: MethodOptions|BodyResponseCallback<Schema$Operation>,
        callback?: BodyResponseCallback<Schema$Operation>): void;
    delete(
        params?: any,
        options?: MethodOptions|BodyResponseCallback<Schema$Operation>,
        callback?: BodyResponseCallback<Schema$Operation>):
        void|AxiosPromise<Schema$Operation> {
      if (typeof options === 'function') {
        callback = options;
        options = {};
      }
      if (typeof params === 'function') {
        callback = params;
        params = {};
      }
      options = options || {};
      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url:
                  (rootUrl +
                   '/sql/v1beta4/projects/{project}/instances/{instance}/users')
                      .replace(/([^:]\/)\/+/g, '$1'),
              method: 'DELETE'
            },
            options),
        params,
        requiredParams: ['project', 'instance', 'host', 'name'],
        pathParams: ['instance', 'project'],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<Schema$Operation>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Operation>(parameters);
      }
    }


    /**
     * sql.users.insert
     * @desc Creates a new user in a Cloud SQL instance.
     * @alias sql.users.insert
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.instance Database instance ID. This does not include the project ID.
     * @param {string} params.project Project ID of the project that contains the instance.
     * @param {().User} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    insert(params?: any, options?: MethodOptions):
        AxiosPromise<Schema$Operation>;
    insert(
        params?: any,
        options?: MethodOptions|BodyResponseCallback<Schema$Operation>,
        callback?: BodyResponseCallback<Schema$Operation>): void;
    insert(
        params?: any,
        options?: MethodOptions|BodyResponseCallback<Schema$Operation>,
        callback?: BodyResponseCallback<Schema$Operation>):
        void|AxiosPromise<Schema$Operation> {
      if (typeof options === 'function') {
        callback = options;
        options = {};
      }
      if (typeof params === 'function') {
        callback = params;
        params = {};
      }
      options = options || {};
      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url:
                  (rootUrl +
                   '/sql/v1beta4/projects/{project}/instances/{instance}/users')
                      .replace(/([^:]\/)\/+/g, '$1'),
              method: 'POST'
            },
            options),
        params,
        requiredParams: ['project', 'instance'],
        pathParams: ['instance', 'project'],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<Schema$Operation>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Operation>(parameters);
      }
    }


    /**
     * sql.users.list
     * @desc Lists users in the specified Cloud SQL instance.
     * @alias sql.users.list
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.instance Database instance ID. This does not include the project ID.
     * @param {string} params.project Project ID of the project that contains the instance.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list(params?: any, options?: MethodOptions):
        AxiosPromise<Schema$UsersListResponse>;
    list(
        params?: any,
        options?: MethodOptions|BodyResponseCallback<Schema$UsersListResponse>,
        callback?: BodyResponseCallback<Schema$UsersListResponse>): void;
    list(
        params?: any,
        options?: MethodOptions|BodyResponseCallback<Schema$UsersListResponse>,
        callback?: BodyResponseCallback<Schema$UsersListResponse>):
        void|AxiosPromise<Schema$UsersListResponse> {
      if (typeof options === 'function') {
        callback = options;
        options = {};
      }
      if (typeof params === 'function') {
        callback = params;
        params = {};
      }
      options = options || {};
      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url:
                  (rootUrl +
                   '/sql/v1beta4/projects/{project}/instances/{instance}/users')
                      .replace(/([^:]\/)\/+/g, '$1'),
              method: 'GET'
            },
            options),
        params,
        requiredParams: ['project', 'instance'],
        pathParams: ['instance', 'project'],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<Schema$UsersListResponse>(parameters, callback);
      } else {
        return createAPIRequest<Schema$UsersListResponse>(parameters);
      }
    }


    /**
     * sql.users.update
     * @desc Updates an existing user in a Cloud SQL instance.
     * @alias sql.users.update
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.host Host of the user in the instance.
     * @param {string} params.instance Database instance ID. This does not include the project ID.
     * @param {string} params.name Name of the user in the instance.
     * @param {string} params.project Project ID of the project that contains the instance.
     * @param {().User} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    update(params?: any, options?: MethodOptions):
        AxiosPromise<Schema$Operation>;
    update(
        params?: any,
        options?: MethodOptions|BodyResponseCallback<Schema$Operation>,
        callback?: BodyResponseCallback<Schema$Operation>): void;
    update(
        params?: any,
        options?: MethodOptions|BodyResponseCallback<Schema$Operation>,
        callback?: BodyResponseCallback<Schema$Operation>):
        void|AxiosPromise<Schema$Operation> {
      if (typeof options === 'function') {
        callback = options;
        options = {};
      }
      if (typeof params === 'function') {
        callback = params;
        params = {};
      }
      options = options || {};
      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url:
                  (rootUrl +
                   '/sql/v1beta4/projects/{project}/instances/{instance}/users')
                      .replace(/([^:]\/)\/+/g, '$1'),
              method: 'PUT'
            },
            options),
        params,
        requiredParams: ['project', 'instance', 'host', 'name'],
        pathParams: ['instance', 'project'],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<Schema$Operation>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Operation>(parameters);
      }
    }
  }
}
