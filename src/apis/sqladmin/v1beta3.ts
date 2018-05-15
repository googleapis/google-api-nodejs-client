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
import {Compute, JWT, OAuth2Client, UserRefreshClient} from 'google-auth-library';

import {BodyResponseCallback, createAPIRequest, GlobalOptions, GoogleConfigurable, MethodOptions} from '../../shared/src';

// tslint:disable: no-any
// tslint:disable: class-name
// tslint:disable: variable-name
// tslint:disable: jsdoc-format
// tslint:disable: no-namespace

export namespace sqladmin_v1beta3 {
  export interface Options extends GlobalOptions {
    version: 'v1beta3';
  }

  /**
   * Cloud SQL Administration API
   *
   * Creates and configures Cloud SQL instances, which provide fully-managed
   * MySQL databases.
   *
   * @example
   * const {google} = require('googleapis');
   * const sqladmin = google.sqladmin('v1beta3');
   *
   * @namespace sqladmin
   * @type {Function}
   * @version v1beta3
   * @variation v1beta3
   * @param {object=} options Options for Sqladmin
   */
  export class Sqladmin {
    _options: GlobalOptions;
    google: GoogleConfigurable;
    root = this;

    backupRuns: Resource$Backupruns;
    flags: Resource$Flags;
    instances: Resource$Instances;
    operations: Resource$Operations;
    sslCerts: Resource$Sslcerts;
    tiers: Resource$Tiers;

    constructor(options: GlobalOptions, google: GoogleConfigurable) {
      this._options = options || {};
      this.google = google;
      this.getRoot.bind(this);

      this.backupRuns = new Resource$Backupruns(this);
      this.flags = new Resource$Flags(this);
      this.instances = new Resource$Instances(this);
      this.operations = new Resource$Operations(this);
      this.sslCerts = new Resource$Sslcerts(this);
      this.tiers = new Resource$Tiers(this);
    }

    getRoot() {
      return this.root;
    }
  }

  /**
   * Database instance backup configuration.
   */
  export interface Schema$BackupConfiguration {
    /**
     * Whether binary log is enabled. If backup configuration is disabled,
     * binary log must be disabled as well.
     */
    binaryLogEnabled?: boolean;
    /**
     * Whether this configuration is enabled.
     */
    enabled?: boolean;
    /**
     * Identifier for this configuration. This gets generated automatically when
     * a backup configuration is created.
     */
    id?: string;
    /**
     * This is always sql#backupConfiguration.
     */
    kind?: string;
    /**
     * Whether replication log archiving is enabled. Replication log archiving
     * is required for the point-in-time recovery (PITR) feature. PostgreSQL
     * instances only.
     */
    replicationLogArchivingEnabled?: boolean;
    /**
     * Start time for the daily backup configuration in UTC timezone in the 24
     * hour format - HH:MM.
     */
    startTime?: string;
  }
  /**
   * A database instance backup run resource.
   */
  export interface Schema$BackupRun {
    /**
     * Backup Configuration identifier.
     */
    backupConfiguration?: string;
    /**
     * The due time of this run in UTC timezone in RFC 3339 format, for example
     * 2012-11-15T16:19:00.094Z.
     */
    dueTime?: string;
    /**
     * The time the backup operation completed in UTC timezone in RFC 3339
     * format, for example 2012-11-15T16:19:00.094Z.
     */
    endTime?: string;
    /**
     * The time the run was enqueued in UTC timezone in RFC 3339 format, for
     * example 2012-11-15T16:19:00.094Z.
     */
    enqueuedTime?: string;
    /**
     * Information about why the backup operation failed. This is only present
     * if the run has the FAILED status.
     */
    error?: Schema$OperationError;
    /**
     * Name of the database instance.
     */
    instance?: string;
    /**
     * This is always sql#backupRun.
     */
    kind?: string;
    /**
     * The time the backup operation actually started in UTC timezone in RFC
     * 3339 format, for example 2012-11-15T16:19:00.094Z.
     */
    startTime?: string;
    /**
     * The status of this run.
     */
    status?: string;
  }
  /**
   * Backup run list results.
   */
  export interface Schema$BackupRunsListResponse {
    /**
     * A list of backup runs in reverse chronological order of the enqueued
     * time.
     */
    items?: Schema$BackupRun[];
    /**
     * This is always sql#backupRunsList.
     */
    kind?: string;
    /**
     * The continuation token, used to page through large result sets. Provide
     * this value in a subsequent request to return the next page of results.
     */
    nextPageToken?: string;
  }
  /**
   * Binary log coordinates.
   */
  export interface Schema$BinLogCoordinates {
    /**
     * Name of the binary log file for a Cloud SQL instance.
     */
    binLogFileName?: string;
    /**
     * Position (offset) within the binary log file.
     */
    binLogPosition?: string;
    /**
     * This is always sql#binLogCoordinates.
     */
    kind?: string;
  }
  /**
   * Database instance clone context.
   */
  export interface Schema$CloneContext {
    /**
     * Binary log coordinates, if specified, indentify the position up to which
     * the source instance should be cloned. If not specified, the source
     * instance is cloned up to the most recent binary log coordinates.
     */
    binLogCoordinates?: Schema$BinLogCoordinates;
    /**
     * Name of the Cloud SQL instance to be created as a clone.
     */
    destinationInstanceName?: string;
    /**
     * This is always sql#cloneContext.
     */
    kind?: string;
    /**
     * The epoch timestamp, in milliseconds, of the time to which a
     * point-in-time recovery (PITR) is performed. PostgreSQL instances only.
     * For MySQL instances, use the binLogCoordinates property.
     */
    pitrTimestampMs?: string;
    /**
     * Name of the Cloud SQL instance to be cloned.
     */
    sourceInstanceName?: string;
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
    name?: string;
    /**
     * The value of the flag. Booleans should be set to on for true and off for
     * false. This field must be omitted if the flag doesn&#39;t take a value.
     */
    value?: string;
  }
  /**
   * A Cloud SQL instance resource.
   */
  export interface Schema$DatabaseInstance {
    /**
     * Connection name of the Cloud SQL instance used in connection strings.
     */
    connectionName?: string;
    /**
     * The current disk usage of the instance in bytes.
     */
    currentDiskSize?: string;
    /**
     * The database engine type and version. Can be MYSQL_5_5 or MYSQL_5_6.
     * Defaults to MYSQL_5_5. The databaseVersion cannot be changed after
     * instance creation.
     */
    databaseVersion?: string;
    /**
     * HTTP 1.1 Entity tag for the resource.
     */
    etag?: string;
    /**
     * Name of the Cloud SQL instance. This does not include the project ID.
     */
    instance?: string;
    /**
     * The instance type. This can be one of the following. CLOUD_SQL_INSTANCE:
     * Regular Cloud SQL instance. READ_REPLICA_INSTANCE: Cloud SQL instance
     * acting as a read-replica.
     */
    instanceType?: string;
    /**
     * The assigned IP addresses for the instance.
     */
    ipAddresses?: Schema$IpMapping[];
    /**
     * The IPv6 address assigned to the instance.
     */
    ipv6Address?: string;
    /**
     * This is always sql#instance.
     */
    kind?: string;
    /**
     * The name of the instance which will act as master in the replication
     * setup.
     */
    masterInstanceName?: string;
    /**
     * The maximum disk size of the instance in bytes.
     */
    maxDiskSize?: string;
    /**
     * The project ID of the project containing the Cloud SQL instance. The
     * Google apps domain is prefixed if applicable.
     */
    project?: string;
    /**
     * The geographical region. Can be us-central, asia-east1 or europe-west1.
     * Defaults to us-central. The region can not be changed after instance
     * creation.
     */
    region?: string;
    /**
     * The replicas of the instance.
     */
    replicaNames?: string[];
    /**
     * SSL configuration.
     */
    serverCaCert?: Schema$SslCert;
    /**
     * The service account email address assigned to the instance.
     */
    serviceAccountEmailAddress?: string;
    /**
     * The user settings.
     */
    settings?: Schema$Settings;
    /**
     * The current serving state of the Cloud SQL instance. This can be one of
     * the following. RUNNABLE: The instance is running, or is ready to run when
     * accessed. SUSPENDED: The instance is not available, for example due to
     * problems with billing. PENDING_CREATE: The instance is being created.
     * MAINTENANCE: The instance is down for maintenance. UNKNOWN_STATE: The
     * state of the instance is unknown.
     */
    state?: string;
  }
  /**
   * Database instance export context.
   */
  export interface Schema$ExportContext {
    /**
     * Databases (for example, guestbook) from which the export is made. If
     * unspecified, all databases are exported.
     */
    database?: string[];
    /**
     * This is always sql#exportContext.
     */
    kind?: string;
    /**
     * Tables to export, or that were exported, from the specified database. If
     * you specify tables, specify one and only one database.
     */
    table?: string[];
    /**
     * The path to the file in Google Cloud Storage where the export will be
     * stored, or where it was already stored. The URI is in the form
     * gs://bucketName/fileName. If the file already exists, the operation
     * fails. If the filename ends with .gz, the contents are compressed.
     */
    uri?: string;
  }
  /**
   * A Google Cloud SQL service flag resource.
   */
  export interface Schema$Flag {
    /**
     * For STRING flags, a list of strings that the value can be set to.
     */
    allowedStringValues?: string[];
    /**
     * The database version this flag applies to. Currently this can only be
     * [MYSQL_5_5].
     */
    appliesTo?: string[];
    /**
     * This is always sql#flag.
     */
    kind?: string;
    /**
     * For INTEGER flags, the maximum allowed value.
     */
    maxValue?: string;
    /**
     * For INTEGER flags, the minimum allowed value.
     */
    minValue?: string;
    /**
     * This is the name of the flag. Flag names always use underscores, not
     * hyphens, e.g. max_allowed_packet
     */
    name?: string;
    /**
     * The type of the flag. Flags are typed to being BOOLEAN, STRING, INTEGER
     * or NONE. NONE is used for flags which do not take a value, such as
     * skip_grant_tables.
     */
    type?: string;
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
     * This is always sql#flagsList.
     */
    kind?: string;
  }
  /**
   * Database instance import context.
   */
  export interface Schema$ImportContext {
    /**
     * The database (for example, guestbook) to which the import is made. If not
     * set, it is assumed that the database is specified in the file to be
     * imported.
     */
    database?: string;
    /**
     * This is always sql#importContext.
     */
    kind?: string;
    /**
     * A path to the MySQL dump file in Google Cloud Storage from which the
     * import is made. The URI is in the form gs://bucketName/fileName.
     * Compressed gzip files (.gz) are also supported.
     */
    uri?: string[];
  }
  /**
   * An Operations resource contains information about database instance
   * operations such as create, delete, and restart. Operations resources are
   * created in response to operations that were initiated; you never create
   * them directly.
   */
  export interface Schema$InstanceOperation {
    /**
     * The time this operation finished in UTC timezone in RFC 3339 format, for
     * example 2012-11-15T16:19:00.094Z.
     */
    endTime?: string;
    /**
     * The time this operation was enqueued in UTC timezone in RFC 3339 format,
     * for example 2012-11-15T16:19:00.094Z.
     */
    enqueuedTime?: string;
    /**
     * The error(s) encountered by this operation. Only set if the operation
     * results in an error.
     */
    error?: Schema$OperationError[];
    /**
     * The context for export operation, if applicable.
     */
    exportContext?: Schema$ExportContext;
    /**
     * The context for import operation, if applicable.
     */
    importContext?: Schema$ImportContext;
    /**
     * Name of the database instance.
     */
    instance?: string;
    /**
     * This is always sql#instanceOperation.
     */
    kind?: string;
    /**
     * An identifier that uniquely identifies the operation. You can use this
     * identifier to retrieve the Operations resource that has information about
     * the operation.
     */
    operation?: string;
    /**
     * The type of the operation. Valid values are CREATE, DELETE, UPDATE,
     * RESTART, IMPORT, EXPORT, BACKUP_VOLUME, RESTORE_VOLUME.
     */
    operationType?: string;
    /**
     * The time this operation actually started in UTC timezone in RFC 3339
     * format, for example 2012-11-15T16:19:00.094Z.
     */
    startTime?: string;
    /**
     * The state of an operation. Valid values are PENDING, RUNNING, DONE,
     * UNKNOWN.
     */
    state?: string;
    /**
     * The email address of the user who initiated this operation.
     */
    userEmailAddress?: string;
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
   * Database instance clone response.
   */
  export interface Schema$InstancesCloneResponse {
    /**
     * This is always sql#instancesClone.
     */
    kind?: string;
    /**
     * An unique identifier for the operation associated with the cloned
     * instance. You can use this identifier to retrieve the Operations
     * resource, which has information about the operation.
     */
    operation?: string;
  }
  /**
   * Database instance delete response.
   */
  export interface Schema$InstancesDeleteResponse {
    /**
     * This is always sql#instancesDelete.
     */
    kind?: string;
    /**
     * An identifier that uniquely identifies the operation. You can use this
     * identifier to retrieve the Operations resource that has information about
     * the operation.
     */
    operation?: string;
  }
  /**
   * Database instance set root password request.
   */
  export interface Schema$InstanceSetRootPasswordRequest {
    /**
     * Set Root Password Context.
     */
    setRootPasswordContext?: Schema$SetRootPasswordContext;
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
   * Database instance export response.
   */
  export interface Schema$InstancesExportResponse {
    /**
     * This is always sql#instancesExport.
     */
    kind?: string;
    /**
     * An identifier that uniquely identifies the operation. You can use this
     * identifier to retrieve the Operations resource that has information about
     * the operation.
     */
    operation?: string;
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
   * Database instance import response.
   */
  export interface Schema$InstancesImportResponse {
    /**
     * This is always sql#instancesImport.
     */
    kind?: string;
    /**
     * An identifier that uniquely identifies the operation. You can use this
     * identifier to retrieve the Operations resource that has information about
     * the operation.
     */
    operation?: string;
  }
  /**
   * Database instance insert response.
   */
  export interface Schema$InstancesInsertResponse {
    /**
     * This is always sql#instancesInsert.
     */
    kind?: string;
    /**
     * An identifier that uniquely identifies the operation. You can use this
     * identifier to retrieve the Operations resource that has information about
     * the operation.
     */
    operation?: string;
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
     * This is always sql#instancesList.
     */
    kind?: string;
    /**
     * The continuation token, used to page through large result sets. Provide
     * this value in a subsequent request to return the next page of results.
     */
    nextPageToken?: string;
  }
  /**
   * Database promote read replica response.
   */
  export interface Schema$InstancesPromoteReplicaResponse {
    /**
     * This is always sql#instancesPromoteReplica.
     */
    kind?: string;
    /**
     * An identifier that uniquely identifies the operation. You can use this
     * identifier to retrieve the Operations resource that has information about
     * the operation.
     */
    operation?: string;
  }
  /**
   * Database instance resetSslConfig response.
   */
  export interface Schema$InstancesResetSslConfigResponse {
    /**
     * This is always sql#instancesResetSslConfig.
     */
    kind?: string;
    /**
     * An identifier that uniquely identifies the operation. You can use this
     * identifier to retrieve the Operations resource that has information about
     * the operation. All ssl client certificates will be deleted and a new
     * server certificate will be created. Does not take effect until the next
     * instance restart.
     */
    operation?: string;
  }
  /**
   * Database instance restart response.
   */
  export interface Schema$InstancesRestartResponse {
    /**
     * This is always sql#instancesRestart.
     */
    kind?: string;
    /**
     * An identifier that uniquely identifies the operation. You can use this
     * identifier to retrieve the Operations resource that has information about
     * the operation.
     */
    operation?: string;
  }
  /**
   * Database instance restore backup response.
   */
  export interface Schema$InstancesRestoreBackupResponse {
    /**
     * This is always sql#instancesRestoreBackup.
     */
    kind?: string;
    /**
     * An identifier that uniquely identifies the operation. You can use this
     * identifier to retrieve the Operations resource that has information about
     * the operation.
     */
    operation?: string;
  }
  /**
   * Database instance set root password response.
   */
  export interface Schema$InstancesSetRootPasswordResponse {
    /**
     * This is always sql#instancesSetRootPassword.
     */
    kind?: string;
    /**
     * An identifier that uniquely identifies the operation. You can use this
     * identifier to retrieve the Operations resource that has information about
     * the operation.
     */
    operation?: string;
  }
  /**
   * Database instance update response.
   */
  export interface Schema$InstancesUpdateResponse {
    /**
     * This is always sql#instancesUpdate.
     */
    kind?: string;
    /**
     * An identifier that uniquely identifies the operation. You can use this
     * identifier to retrieve information about the operation.
     */
    operation?: string;
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
    authorizedNetworks?: string[];
    /**
     * Whether the instance should be assigned an IP address or not.
     */
    enabled?: boolean;
    /**
     * This is always sql#ipConfiguration.
     */
    kind?: string;
    /**
     * Whether SSL connections over IP should be enforced or not.
     */
    requireSsl?: boolean;
  }
  /**
   * Database instance IP Mapping.
   */
  export interface Schema$IpMapping {
    /**
     * The IP address assigned.
     */
    ipAddress?: string;
    /**
     * The due time for this IP to be retired in RFC 3339 format, for example
     * 2012-11-15T16:19:00.094Z. This field is only available when the IP is
     * scheduled to be retired.
     */
    timeToRetire?: string;
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
     * The App Engine application to follow, it must be in the same region as
     * the Cloud SQL instance.
     */
    followGaeApplication?: string;
    /**
     * This is always sql#locationPreference.
     */
    kind?: string;
    /**
     * The preferred Compute Engine zone (e.g. us-centra1-a, us-central1-b,
     * etc.).
     */
    zone?: string;
  }
  /**
   * Database instance operation error.
   */
  export interface Schema$OperationError {
    /**
     * Identifies the specific error that occurred.
     */
    code?: string;
    /**
     * This is always sql#operationError.
     */
    kind?: string;
  }
  /**
   * Database instance list operations response.
   */
  export interface Schema$OperationsListResponse {
    /**
     * List of operation resources.
     */
    items?: Schema$InstanceOperation[];
    /**
     * This is always sql#operationsList.
     */
    kind?: string;
    /**
     * The continuation token, used to page through large result sets. Provide
     * this value in a subsequent request to return the next page of results.
     */
    nextPageToken?: string;
  }
  /**
   * Database instance set root password context.
   */
  export interface Schema$SetRootPasswordContext {
    /**
     * This is always sql#setRootUserContext.
     */
    kind?: string;
    /**
     * The password for the root user.
     */
    password?: string;
  }
  /**
   * Database instance settings.
   */
  export interface Schema$Settings {
    /**
     * The activation policy for this instance. This specifies when the instance
     * should be activated and is applicable only when the instance state is
     * RUNNABLE. This can be one of the following. ALWAYS: The instance should
     * always be active. NEVER: The instance should never be activated.
     * ON_DEMAND: The instance is activated upon receiving requests.
     */
    activationPolicy?: string;
    /**
     * The App Engine app IDs that can access this instance.
     */
    authorizedGaeApplications?: string[];
    /**
     * The daily backup configuration for the instance.
     */
    backupConfiguration?: Schema$BackupConfiguration[];
    /**
     * The database flags passed to the instance at startup.
     */
    databaseFlags?: Schema$DatabaseFlags[];
    /**
     * Configuration specific to read replica instance. Indicates whether
     * replication is enabled or not.
     */
    databaseReplicationEnabled?: boolean;
    /**
     * The settings for IP Management. This allows to enable or disable the
     * instance IP and manage which external networks can connect to the
     * instance.
     */
    ipConfiguration?: Schema$IpConfiguration;
    /**
     * This is always sql#settings.
     */
    kind?: string;
    /**
     * The location preference settings. This allows the instance to be located
     * as near as possible to either an App Engine app or GCE zone for better
     * performance.
     */
    locationPreference?: Schema$LocationPreference;
    /**
     * The pricing plan for this instance. This can be either PER_USE or
     * PACKAGE.
     */
    pricingPlan?: string;
    /**
     * The type of replication this instance uses. This can be either
     * ASYNCHRONOUS or SYNCHRONOUS.
     */
    replicationType?: string;
    /**
     * The version of instance settings. This is a required field for update
     * method to make sure concurrent updates are handled properly. During
     * update, use the most recent settingsVersion value for this instance and
     * do not try to update this value.
     */
    settingsVersion?: string;
    /**
     * The tier of service for this instance, for example D1, D2. For more
     * information, see pricing.
     */
    tier?: string;
  }
  /**
   * SslCerts Resource
   */
  export interface Schema$SslCert {
    /**
     * PEM representation.
     */
    cert?: string;
    /**
     * Serial number, as extracted from the certificate.
     */
    certSerialNumber?: string;
    /**
     * User supplied name. Constrained to [a-zA-Z.-_ ]+.
     */
    commonName?: string;
    /**
     * Time when the certificate was created.
     */
    createTime?: string;
    /**
     * Time when the certificate expires.
     */
    expirationTime?: string;
    /**
     * Name of the database instance.
     */
    instance?: string;
    /**
     * This is always sql#sslCert.
     */
    kind?: string;
    /**
     * Sha1 Fingerprint.
     */
    sha1Fingerprint?: string;
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
     * The private key for the client cert, in pem format. Keep private in order
     * to protect your security.
     */
    certPrivateKey?: string;
  }
  /**
   * SslCert delete response.
   */
  export interface Schema$SslCertsDeleteResponse {
    /**
     * This is always sql#sslCertsDelete.
     */
    kind?: string;
    /**
     * An identifier that uniquely identifies the operation. You can use this
     * identifier to retrieve the Operations resource that has information about
     * the operation.
     */
    operation?: string;
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
    commonName?: string;
  }
  /**
   * SslCert insert response.
   */
  export interface Schema$SslCertsInsertResponse {
    /**
     * The new client certificate and private key. The new certificate will not
     * work until the instance is restarted.
     */
    clientCert?: Schema$SslCertDetail;
    /**
     * This is always sql#sslCertsInsert.
     */
    kind?: string;
    /**
     * The server Certificate Authority&#39;s certificate. If this is missing
     * you can force a new one to be generated by calling resetSslConfig method
     * on instances resource..
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
     * This is always sql#sslCertsList.
     */
    kind?: string;
  }
  /**
   * A Google Cloud SQL service tier resource.
   */
  export interface Schema$Tier {
    /**
     * The maximum disk size of this tier in bytes.
     */
    DiskQuota?: string;
    /**
     * This is always sql#tier.
     */
    kind?: string;
    /**
     * The maximum RAM usage of this tier in bytes.
     */
    RAM?: string;
    /**
     * The applicable regions for this tier.
     */
    region?: string[];
    /**
     * An identifier for the service tier, for example D1, D2 etc. For related
     * information, see Pricing.
     */
    tier?: string;
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
     * This is always sql#tiersList.
     */
    kind?: string;
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
     * sql.backupRuns.get
     * @desc Retrieves information about a specified backup run for a Cloud SQL
     * instance.
     * @alias sql.backupRuns.get
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.backupConfiguration Identifier for the backup configuration. This gets generated automatically when a backup configuration is created.
     * @param {string} params.dueTime The start time of the four-hour backup window. The backup can occur any time in the window. The time is in RFC 3339 format, for example 2012-11-15T16:19:00.094Z.
     * @param {string} params.instance Cloud SQL instance ID. This does not include the project ID.
     * @param {string} params.project Project ID of the project that contains the instance.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    get(params?: Params$Resource$Backupruns$Get,
        options?: MethodOptions): AxiosPromise<Schema$BackupRun>;
    get(params: Params$Resource$Backupruns$Get,
        options: MethodOptions|BodyResponseCallback<Schema$BackupRun>,
        callback: BodyResponseCallback<Schema$BackupRun>): void;
    get(params: Params$Resource$Backupruns$Get,
        callback: BodyResponseCallback<Schema$BackupRun>): void;
    get(callback: BodyResponseCallback<Schema$BackupRun>): void;
    get(paramsOrCallback?: Params$Resource$Backupruns$Get|
        BodyResponseCallback<Schema$BackupRun>,
        optionsOrCallback?: MethodOptions|
        BodyResponseCallback<Schema$BackupRun>,
        callback?: BodyResponseCallback<Schema$BackupRun>):
        void|AxiosPromise<Schema$BackupRun> {
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

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url:
                  (rootUrl +
                   '/sql/v1beta3/projects/{project}/instances/{instance}/backupRuns/{backupConfiguration}')
                      .replace(/([^:]\/)\/+/g, '$1'),
              method: 'GET'
            },
            options),
        params,
        requiredParams:
            ['project', 'instance', 'backupConfiguration', 'dueTime'],
        pathParams: ['backupConfiguration', 'instance', 'project'],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<Schema$BackupRun>(parameters, callback);
      } else {
        return createAPIRequest<Schema$BackupRun>(parameters);
      }
    }


    /**
     * sql.backupRuns.list
     * @desc Lists all backup runs associated with a Cloud SQL instance.
     * @alias sql.backupRuns.list
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.backupConfiguration Identifier for the backup configuration. This gets generated automatically when a backup configuration is created.
     * @param {string} params.instance Cloud SQL instance ID. This does not include the project ID.
     * @param {integer=} params.maxResults Maximum number of backup runs per response.
     * @param {string=} params.pageToken A previously-returned page token representing part of the larger set of results to view.
     * @param {string} params.project Project ID of the project that contains the instance.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list(params?: Params$Resource$Backupruns$List, options?: MethodOptions):
        AxiosPromise<Schema$BackupRunsListResponse>;
    list(
        params: Params$Resource$Backupruns$List,
        options: MethodOptions|
        BodyResponseCallback<Schema$BackupRunsListResponse>,
        callback: BodyResponseCallback<Schema$BackupRunsListResponse>): void;
    list(
        params: Params$Resource$Backupruns$List,
        callback: BodyResponseCallback<Schema$BackupRunsListResponse>): void;
    list(callback: BodyResponseCallback<Schema$BackupRunsListResponse>): void;
    list(
        paramsOrCallback?: Params$Resource$Backupruns$List|
        BodyResponseCallback<Schema$BackupRunsListResponse>,
        optionsOrCallback?: MethodOptions|
        BodyResponseCallback<Schema$BackupRunsListResponse>,
        callback?: BodyResponseCallback<Schema$BackupRunsListResponse>):
        void|AxiosPromise<Schema$BackupRunsListResponse> {
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

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url:
                  (rootUrl +
                   '/sql/v1beta3/projects/{project}/instances/{instance}/backupRuns')
                      .replace(/([^:]\/)\/+/g, '$1'),
              method: 'GET'
            },
            options),
        params,
        requiredParams: ['project', 'instance', 'backupConfiguration'],
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

  export interface Params$Resource$Backupruns$Get {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * Identifier for the backup configuration. This gets generated
     * automatically when a backup configuration is created.
     */
    backupConfiguration?: string;
    /**
     * The start time of the four-hour backup window. The backup can occur any
     * time in the window. The time is in RFC 3339 format, for example
     * 2012-11-15T16:19:00.094Z.
     */
    dueTime?: string;
    /**
     * Cloud SQL instance ID. This does not include the project ID.
     */
    instance?: string;
    /**
     * Project ID of the project that contains the instance.
     */
    project?: string;
  }
  export interface Params$Resource$Backupruns$List {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * Identifier for the backup configuration. This gets generated
     * automatically when a backup configuration is created.
     */
    backupConfiguration?: string;
    /**
     * Cloud SQL instance ID. This does not include the project ID.
     */
    instance?: string;
    /**
     * Maximum number of backup runs per response.
     */
    maxResults?: number;
    /**
     * A previously-returned page token representing part of the larger set of
     * results to view.
     */
    pageToken?: string;
    /**
     * Project ID of the project that contains the instance.
     */
    project?: string;
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
     * @desc Lists all database flags that can be set for Google Cloud SQL
     * instances.
     * @alias sql.flags.list
     * @memberOf! ()
     *
     * @param {object=} params Parameters for request
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list(params?: Params$Resource$Flags$List, options?: MethodOptions):
        AxiosPromise<Schema$FlagsListResponse>;
    list(
        params: Params$Resource$Flags$List,
        options: MethodOptions|BodyResponseCallback<Schema$FlagsListResponse>,
        callback: BodyResponseCallback<Schema$FlagsListResponse>): void;
    list(
        params: Params$Resource$Flags$List,
        callback: BodyResponseCallback<Schema$FlagsListResponse>): void;
    list(callback: BodyResponseCallback<Schema$FlagsListResponse>): void;
    list(
        paramsOrCallback?: Params$Resource$Flags$List|
        BodyResponseCallback<Schema$FlagsListResponse>,
        optionsOrCallback?: MethodOptions|
        BodyResponseCallback<Schema$FlagsListResponse>,
        callback?: BodyResponseCallback<Schema$FlagsListResponse>):
        void|AxiosPromise<Schema$FlagsListResponse> {
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

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl + '/sql/v1beta3/flags')
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

  export interface Params$Resource$Flags$List {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;
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
     * @desc Creates a Cloud SQL instance as a clone of a source instance.
     * @alias sql.instances.clone
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.project Project ID of the source as well as the clone Cloud SQL instance.
     * @param {().InstancesCloneRequest} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    clone(params?: Params$Resource$Instances$Clone, options?: MethodOptions):
        AxiosPromise<Schema$InstancesCloneResponse>;
    clone(
        params: Params$Resource$Instances$Clone,
        options: MethodOptions|
        BodyResponseCallback<Schema$InstancesCloneResponse>,
        callback: BodyResponseCallback<Schema$InstancesCloneResponse>): void;
    clone(
        params: Params$Resource$Instances$Clone,
        callback: BodyResponseCallback<Schema$InstancesCloneResponse>): void;
    clone(callback: BodyResponseCallback<Schema$InstancesCloneResponse>): void;
    clone(
        paramsOrCallback?: Params$Resource$Instances$Clone|
        BodyResponseCallback<Schema$InstancesCloneResponse>,
        optionsOrCallback?: MethodOptions|
        BodyResponseCallback<Schema$InstancesCloneResponse>,
        callback?: BodyResponseCallback<Schema$InstancesCloneResponse>):
        void|AxiosPromise<Schema$InstancesCloneResponse> {
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

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl + '/sql/v1beta3/projects/{project}/instances/clone')
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
        createAPIRequest<Schema$InstancesCloneResponse>(parameters, callback);
      } else {
        return createAPIRequest<Schema$InstancesCloneResponse>(parameters);
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
    delete(params?: Params$Resource$Instances$Delete, options?: MethodOptions):
        AxiosPromise<Schema$InstancesDeleteResponse>;
    delete(
        params: Params$Resource$Instances$Delete,
        options: MethodOptions|
        BodyResponseCallback<Schema$InstancesDeleteResponse>,
        callback: BodyResponseCallback<Schema$InstancesDeleteResponse>): void;
    delete(
        params: Params$Resource$Instances$Delete,
        callback: BodyResponseCallback<Schema$InstancesDeleteResponse>): void;
    delete(callback: BodyResponseCallback<Schema$InstancesDeleteResponse>):
        void;
    delete(
        paramsOrCallback?: Params$Resource$Instances$Delete|
        BodyResponseCallback<Schema$InstancesDeleteResponse>,
        optionsOrCallback?: MethodOptions|
        BodyResponseCallback<Schema$InstancesDeleteResponse>,
        callback?: BodyResponseCallback<Schema$InstancesDeleteResponse>):
        void|AxiosPromise<Schema$InstancesDeleteResponse> {
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

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl +
                    '/sql/v1beta3/projects/{project}/instances/{instance}')
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
        createAPIRequest<Schema$InstancesDeleteResponse>(parameters, callback);
      } else {
        return createAPIRequest<Schema$InstancesDeleteResponse>(parameters);
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
    export(params?: Params$Resource$Instances$Export, options?: MethodOptions):
        AxiosPromise<Schema$InstancesExportResponse>;
    export(
        params: Params$Resource$Instances$Export,
        options: MethodOptions|
        BodyResponseCallback<Schema$InstancesExportResponse>,
        callback: BodyResponseCallback<Schema$InstancesExportResponse>): void;
    export(
        params: Params$Resource$Instances$Export,
        callback: BodyResponseCallback<Schema$InstancesExportResponse>): void;
    export(callback: BodyResponseCallback<Schema$InstancesExportResponse>):
        void;
    export(
        paramsOrCallback?: Params$Resource$Instances$Export|
        BodyResponseCallback<Schema$InstancesExportResponse>,
        optionsOrCallback?: MethodOptions|
        BodyResponseCallback<Schema$InstancesExportResponse>,
        callback?: BodyResponseCallback<Schema$InstancesExportResponse>):
        void|AxiosPromise<Schema$InstancesExportResponse> {
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

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url:
                  (rootUrl +
                   '/sql/v1beta3/projects/{project}/instances/{instance}/export')
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
        createAPIRequest<Schema$InstancesExportResponse>(parameters, callback);
      } else {
        return createAPIRequest<Schema$InstancesExportResponse>(parameters);
      }
    }


    /**
     * sql.instances.get
     * @desc Retrieves information about a Cloud SQL instance.
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
    get(params?: Params$Resource$Instances$Get,
        options?: MethodOptions): AxiosPromise<Schema$DatabaseInstance>;
    get(params: Params$Resource$Instances$Get,
        options: MethodOptions|BodyResponseCallback<Schema$DatabaseInstance>,
        callback: BodyResponseCallback<Schema$DatabaseInstance>): void;
    get(params: Params$Resource$Instances$Get,
        callback: BodyResponseCallback<Schema$DatabaseInstance>): void;
    get(callback: BodyResponseCallback<Schema$DatabaseInstance>): void;
    get(paramsOrCallback?: Params$Resource$Instances$Get|
        BodyResponseCallback<Schema$DatabaseInstance>,
        optionsOrCallback?: MethodOptions|
        BodyResponseCallback<Schema$DatabaseInstance>,
        callback?: BodyResponseCallback<Schema$DatabaseInstance>):
        void|AxiosPromise<Schema$DatabaseInstance> {
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

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl +
                    '/sql/v1beta3/projects/{project}/instances/{instance}')
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
 * @desc Imports data into a Cloud SQL instance from a MySQL dump file stored in
 * a Google Cloud Storage bucket.
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
import(params?: Params$Resource$Instances$Import, options?: MethodOptions): AxiosPromise<Schema$InstancesImportResponse>;
import(params: Params$Resource$Instances$Import, options: MethodOptions|BodyResponseCallback<Schema$InstancesImportResponse>, callback: BodyResponseCallback<Schema$InstancesImportResponse>): void;
import(params: Params$Resource$Instances$Import, callback: BodyResponseCallback<Schema$InstancesImportResponse>): void;
import(callback: BodyResponseCallback<Schema$InstancesImportResponse>): void;
import(paramsOrCallback?: Params$Resource$Instances$Import|BodyResponseCallback<Schema$InstancesImportResponse>, optionsOrCallback?: MethodOptions|BodyResponseCallback<Schema$InstancesImportResponse>, callback?: BodyResponseCallback<Schema$InstancesImportResponse>): void|AxiosPromise<Schema$InstancesImportResponse> {let params = (paramsOrCallback || {}) as Params$Resource$Instances$Import; let options = (optionsOrCallback || {}) as MethodOptions;

                                                                                                                                                                                                                                                                                                                                  if(typeof paramsOrCallback === 'function') {
    callback = paramsOrCallback;
    params = {} as Params$Resource$Instances$Import;
    options = {};
                                                                                                                                                                                                                                                                                                                                  }

                                                                                                                                                                                                                                                                                                                                  if(typeof optionsOrCallback === 'function') {
    callback = optionsOrCallback;
    options = {};
                                                                                                                                                                                                                                                                                                                                  }

                                                                                                                                                                                                                                                                                                                                  const rootUrl = options.rootUrl || 'https://www.googleapis.com/'; const parameters = {options: Object.assign({url: (rootUrl + '/sql/v1beta3/projects/{project}/instances/{instance}/import').replace(/([^:]\/)\/+/g, '$1'), method: 'POST'}, options), params, requiredParams: ['project', 'instance'], pathParams: ['instance', 'project'], context: this.getRoot()}; if(callback) {
    createAPIRequest<Schema$InstancesImportResponse>(parameters, callback);
                                                                                                                                                                                                                                                                                                                                  } else {
    return createAPIRequest<Schema$InstancesImportResponse>(parameters);
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
    insert(params?: Params$Resource$Instances$Insert, options?: MethodOptions): AxiosPromise<Schema$InstancesInsertResponse>;
    insert(
        params: Params$Resource$Instances$Insert,
        options: MethodOptions|
        BodyResponseCallback<Schema$InstancesInsertResponse>,
        callback: BodyResponseCallback<Schema$InstancesInsertResponse>): void;
    insert(
        params: Params$Resource$Instances$Insert,
        callback: BodyResponseCallback<Schema$InstancesInsertResponse>): void;
    insert(callback: BodyResponseCallback<Schema$InstancesInsertResponse>):
        void;
    insert(
        paramsOrCallback?: Params$Resource$Instances$Insert|
        BodyResponseCallback<Schema$InstancesInsertResponse>,
        optionsOrCallback?: MethodOptions|
        BodyResponseCallback<Schema$InstancesInsertResponse>,
        callback?: BodyResponseCallback<Schema$InstancesInsertResponse>):
        void|AxiosPromise<Schema$InstancesInsertResponse> {
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

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl + '/sql/v1beta3/projects/{project}/instances')
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
        createAPIRequest<Schema$InstancesInsertResponse>(parameters, callback);
      } else {
        return createAPIRequest<Schema$InstancesInsertResponse>(parameters);
      }
    }


    /**
     * sql.instances.list
     * @desc Lists instances for a given project, in alphabetical order by
     * instance name.
     * @alias sql.instances.list
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {integer=} params.maxResults The maximum number of results to return per response.
     * @param {string=} params.pageToken A previously-returned page token representing part of the larger set of results to view.
     * @param {string} params.project Project ID of the project for which to list Cloud SQL instances.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list(params?: Params$Resource$Instances$List, options?: MethodOptions):
        AxiosPromise<Schema$InstancesListResponse>;
    list(
        params: Params$Resource$Instances$List,
        options: MethodOptions|
        BodyResponseCallback<Schema$InstancesListResponse>,
        callback: BodyResponseCallback<Schema$InstancesListResponse>): void;
    list(
        params: Params$Resource$Instances$List,
        callback: BodyResponseCallback<Schema$InstancesListResponse>): void;
    list(callback: BodyResponseCallback<Schema$InstancesListResponse>): void;
    list(
        paramsOrCallback?: Params$Resource$Instances$List|
        BodyResponseCallback<Schema$InstancesListResponse>,
        optionsOrCallback?: MethodOptions|
        BodyResponseCallback<Schema$InstancesListResponse>,
        callback?: BodyResponseCallback<Schema$InstancesListResponse>):
        void|AxiosPromise<Schema$InstancesListResponse> {
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

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl + '/sql/v1beta3/projects/{project}/instances')
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
     * @desc Updates the settings of a Cloud SQL instance. This method supports
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
    patch(params?: Params$Resource$Instances$Patch, options?: MethodOptions):
        AxiosPromise<Schema$InstancesUpdateResponse>;
    patch(
        params: Params$Resource$Instances$Patch,
        options: MethodOptions|
        BodyResponseCallback<Schema$InstancesUpdateResponse>,
        callback: BodyResponseCallback<Schema$InstancesUpdateResponse>): void;
    patch(
        params: Params$Resource$Instances$Patch,
        callback: BodyResponseCallback<Schema$InstancesUpdateResponse>): void;
    patch(callback: BodyResponseCallback<Schema$InstancesUpdateResponse>): void;
    patch(
        paramsOrCallback?: Params$Resource$Instances$Patch|
        BodyResponseCallback<Schema$InstancesUpdateResponse>,
        optionsOrCallback?: MethodOptions|
        BodyResponseCallback<Schema$InstancesUpdateResponse>,
        callback?: BodyResponseCallback<Schema$InstancesUpdateResponse>):
        void|AxiosPromise<Schema$InstancesUpdateResponse> {
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

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl +
                    '/sql/v1beta3/projects/{project}/instances/{instance}')
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
        createAPIRequest<Schema$InstancesUpdateResponse>(parameters, callback);
      } else {
        return createAPIRequest<Schema$InstancesUpdateResponse>(parameters);
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
    promoteReplica(
        params?: Params$Resource$Instances$Promotereplica,
        options?: MethodOptions):
        AxiosPromise<Schema$InstancesPromoteReplicaResponse>;
    promoteReplica(
        params: Params$Resource$Instances$Promotereplica,
        options: MethodOptions|
        BodyResponseCallback<Schema$InstancesPromoteReplicaResponse>,
        callback: BodyResponseCallback<Schema$InstancesPromoteReplicaResponse>):
        void;
    promoteReplica(
        params: Params$Resource$Instances$Promotereplica,
        callback: BodyResponseCallback<Schema$InstancesPromoteReplicaResponse>):
        void;
    promoteReplica(
        callback: BodyResponseCallback<Schema$InstancesPromoteReplicaResponse>):
        void;
    promoteReplica(
        paramsOrCallback?: Params$Resource$Instances$Promotereplica|
        BodyResponseCallback<Schema$InstancesPromoteReplicaResponse>,
        optionsOrCallback?: MethodOptions|
        BodyResponseCallback<Schema$InstancesPromoteReplicaResponse>,
        callback?:
            BodyResponseCallback<Schema$InstancesPromoteReplicaResponse>):
        void|AxiosPromise<Schema$InstancesPromoteReplicaResponse> {
      let params =
          (paramsOrCallback || {}) as Params$Resource$Instances$Promotereplica;
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

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url:
                  (rootUrl +
                   '/sql/v1beta3/projects/{project}/instances/{instance}/promoteReplica')
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
        createAPIRequest<Schema$InstancesPromoteReplicaResponse>(
            parameters, callback);
      } else {
        return createAPIRequest<Schema$InstancesPromoteReplicaResponse>(
            parameters);
      }
    }


    /**
     * sql.instances.resetSslConfig
     * @desc Deletes all client certificates and generates a new server SSL
     * certificate for a Cloud SQL instance.
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
    resetSslConfig(
        params?: Params$Resource$Instances$Resetsslconfig,
        options?: MethodOptions):
        AxiosPromise<Schema$InstancesResetSslConfigResponse>;
    resetSslConfig(
        params: Params$Resource$Instances$Resetsslconfig,
        options: MethodOptions|
        BodyResponseCallback<Schema$InstancesResetSslConfigResponse>,
        callback: BodyResponseCallback<Schema$InstancesResetSslConfigResponse>):
        void;
    resetSslConfig(
        params: Params$Resource$Instances$Resetsslconfig,
        callback: BodyResponseCallback<Schema$InstancesResetSslConfigResponse>):
        void;
    resetSslConfig(
        callback: BodyResponseCallback<Schema$InstancesResetSslConfigResponse>):
        void;
    resetSslConfig(
        paramsOrCallback?: Params$Resource$Instances$Resetsslconfig|
        BodyResponseCallback<Schema$InstancesResetSslConfigResponse>,
        optionsOrCallback?: MethodOptions|
        BodyResponseCallback<Schema$InstancesResetSslConfigResponse>,
        callback?:
            BodyResponseCallback<Schema$InstancesResetSslConfigResponse>):
        void|AxiosPromise<Schema$InstancesResetSslConfigResponse> {
      let params =
          (paramsOrCallback || {}) as Params$Resource$Instances$Resetsslconfig;
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

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url:
                  (rootUrl +
                   '/sql/v1beta3/projects/{project}/instances/{instance}/resetSslConfig')
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
        createAPIRequest<Schema$InstancesResetSslConfigResponse>(
            parameters, callback);
      } else {
        return createAPIRequest<Schema$InstancesResetSslConfigResponse>(
            parameters);
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
    restart(
        params?: Params$Resource$Instances$Restart,
        options?: MethodOptions): AxiosPromise<Schema$InstancesRestartResponse>;
    restart(
        params: Params$Resource$Instances$Restart,
        options: MethodOptions|
        BodyResponseCallback<Schema$InstancesRestartResponse>,
        callback: BodyResponseCallback<Schema$InstancesRestartResponse>): void;
    restart(
        params: Params$Resource$Instances$Restart,
        callback: BodyResponseCallback<Schema$InstancesRestartResponse>): void;
    restart(callback: BodyResponseCallback<Schema$InstancesRestartResponse>):
        void;
    restart(
        paramsOrCallback?: Params$Resource$Instances$Restart|
        BodyResponseCallback<Schema$InstancesRestartResponse>,
        optionsOrCallback?: MethodOptions|
        BodyResponseCallback<Schema$InstancesRestartResponse>,
        callback?: BodyResponseCallback<Schema$InstancesRestartResponse>):
        void|AxiosPromise<Schema$InstancesRestartResponse> {
      let params =
          (paramsOrCallback || {}) as Params$Resource$Instances$Restart;
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

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url:
                  (rootUrl +
                   '/sql/v1beta3/projects/{project}/instances/{instance}/restart')
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
        createAPIRequest<Schema$InstancesRestartResponse>(parameters, callback);
      } else {
        return createAPIRequest<Schema$InstancesRestartResponse>(parameters);
      }
    }


    /**
     * sql.instances.restoreBackup
     * @desc Restores a backup of a Cloud SQL instance.
     * @alias sql.instances.restoreBackup
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.backupConfiguration The identifier of the backup configuration. This gets generated automatically when a backup configuration is created.
     * @param {string} params.dueTime The start time of the four-hour backup window. The backup can occur any time in the window. The time is in RFC 3339 format, for example 2012-11-15T16:19:00.094Z.
     * @param {string} params.instance Cloud SQL instance ID. This does not include the project ID.
     * @param {string} params.project Project ID of the project that contains the instance.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    restoreBackup(
        params?: Params$Resource$Instances$Restorebackup,
        options?: MethodOptions):
        AxiosPromise<Schema$InstancesRestoreBackupResponse>;
    restoreBackup(
        params: Params$Resource$Instances$Restorebackup,
        options: MethodOptions|
        BodyResponseCallback<Schema$InstancesRestoreBackupResponse>,
        callback: BodyResponseCallback<Schema$InstancesRestoreBackupResponse>):
        void;
    restoreBackup(
        params: Params$Resource$Instances$Restorebackup,
        callback: BodyResponseCallback<Schema$InstancesRestoreBackupResponse>):
        void;
    restoreBackup(
        callback: BodyResponseCallback<Schema$InstancesRestoreBackupResponse>):
        void;
    restoreBackup(
        paramsOrCallback?: Params$Resource$Instances$Restorebackup|
        BodyResponseCallback<Schema$InstancesRestoreBackupResponse>,
        optionsOrCallback?: MethodOptions|
        BodyResponseCallback<Schema$InstancesRestoreBackupResponse>,
        callback?: BodyResponseCallback<Schema$InstancesRestoreBackupResponse>):
        void|AxiosPromise<Schema$InstancesRestoreBackupResponse> {
      let params =
          (paramsOrCallback || {}) as Params$Resource$Instances$Restorebackup;
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

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url:
                  (rootUrl +
                   '/sql/v1beta3/projects/{project}/instances/{instance}/restoreBackup')
                      .replace(/([^:]\/)\/+/g, '$1'),
              method: 'POST'
            },
            options),
        params,
        requiredParams:
            ['project', 'instance', 'backupConfiguration', 'dueTime'],
        pathParams: ['instance', 'project'],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<Schema$InstancesRestoreBackupResponse>(
            parameters, callback);
      } else {
        return createAPIRequest<Schema$InstancesRestoreBackupResponse>(
            parameters);
      }
    }


    /**
     * sql.instances.setRootPassword
     * @desc Sets the password for the root user of the specified Cloud SQL
     * instance.
     * @alias sql.instances.setRootPassword
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.instance Cloud SQL instance ID. This does not include the project ID.
     * @param {string} params.project Project ID of the project that contains the instance.
     * @param {().InstanceSetRootPasswordRequest} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    setRootPassword(
        params?: Params$Resource$Instances$Setrootpassword,
        options?: MethodOptions):
        AxiosPromise<Schema$InstancesSetRootPasswordResponse>;
    setRootPassword(
        params: Params$Resource$Instances$Setrootpassword,
        options: MethodOptions|
        BodyResponseCallback<Schema$InstancesSetRootPasswordResponse>,
        callback:
            BodyResponseCallback<Schema$InstancesSetRootPasswordResponse>):
        void;
    setRootPassword(
        params: Params$Resource$Instances$Setrootpassword,
        callback:
            BodyResponseCallback<Schema$InstancesSetRootPasswordResponse>):
        void;
    setRootPassword(
        callback:
            BodyResponseCallback<Schema$InstancesSetRootPasswordResponse>):
        void;
    setRootPassword(
        paramsOrCallback?: Params$Resource$Instances$Setrootpassword|
        BodyResponseCallback<Schema$InstancesSetRootPasswordResponse>,
        optionsOrCallback?: MethodOptions|
        BodyResponseCallback<Schema$InstancesSetRootPasswordResponse>,
        callback?:
            BodyResponseCallback<Schema$InstancesSetRootPasswordResponse>):
        void|AxiosPromise<Schema$InstancesSetRootPasswordResponse> {
      let params =
          (paramsOrCallback || {}) as Params$Resource$Instances$Setrootpassword;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Instances$Setrootpassword;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url:
                  (rootUrl +
                   '/sql/v1beta3/projects/{project}/instances/{instance}/setRootPassword')
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
        createAPIRequest<Schema$InstancesSetRootPasswordResponse>(
            parameters, callback);
      } else {
        return createAPIRequest<Schema$InstancesSetRootPasswordResponse>(
            parameters);
      }
    }


    /**
     * sql.instances.update
     * @desc Updates the settings of a Cloud SQL instance.
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
    update(params?: Params$Resource$Instances$Update, options?: MethodOptions):
        AxiosPromise<Schema$InstancesUpdateResponse>;
    update(
        params: Params$Resource$Instances$Update,
        options: MethodOptions|
        BodyResponseCallback<Schema$InstancesUpdateResponse>,
        callback: BodyResponseCallback<Schema$InstancesUpdateResponse>): void;
    update(
        params: Params$Resource$Instances$Update,
        callback: BodyResponseCallback<Schema$InstancesUpdateResponse>): void;
    update(callback: BodyResponseCallback<Schema$InstancesUpdateResponse>):
        void;
    update(
        paramsOrCallback?: Params$Resource$Instances$Update|
        BodyResponseCallback<Schema$InstancesUpdateResponse>,
        optionsOrCallback?: MethodOptions|
        BodyResponseCallback<Schema$InstancesUpdateResponse>,
        callback?: BodyResponseCallback<Schema$InstancesUpdateResponse>):
        void|AxiosPromise<Schema$InstancesUpdateResponse> {
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

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl +
                    '/sql/v1beta3/projects/{project}/instances/{instance}')
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
        createAPIRequest<Schema$InstancesUpdateResponse>(parameters, callback);
      } else {
        return createAPIRequest<Schema$InstancesUpdateResponse>(parameters);
      }
    }
  }

  export interface Params$Resource$Instances$Clone {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * Project ID of the source as well as the clone Cloud SQL instance.
     */
    project?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$InstancesCloneRequest;
  }
  export interface Params$Resource$Instances$Delete {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * Cloud SQL instance ID. This does not include the project ID.
     */
    instance?: string;
    /**
     * Project ID of the project that contains the instance to be deleted.
     */
    project?: string;
  }
  export interface Params$Resource$Instances$Export {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * Cloud SQL instance ID. This does not include the project ID.
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
  export interface Params$Resource$Instances$Get {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * Database instance ID. This does not include the project ID.
     */
    instance?: string;
    /**
     * Project ID of the project that contains the instance.
     */
    project?: string;
  }
  export interface Params$Resource$Instances$Import {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

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
  export interface Params$Resource$Instances$Insert {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * Project ID of the project to which the newly created Cloud SQL instances
     * should belong.
     */
    project?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$DatabaseInstance;
  }
  export interface Params$Resource$Instances$List {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * The maximum number of results to return per response.
     */
    maxResults?: number;
    /**
     * A previously-returned page token representing part of the larger set of
     * results to view.
     */
    pageToken?: string;
    /**
     * Project ID of the project for which to list Cloud SQL instances.
     */
    project?: string;
  }
  export interface Params$Resource$Instances$Patch {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

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
  export interface Params$Resource$Instances$Promotereplica {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * Cloud SQL read replica instance name.
     */
    instance?: string;
    /**
     * ID of the project that contains the read replica.
     */
    project?: string;
  }
  export interface Params$Resource$Instances$Resetsslconfig {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * Cloud SQL instance ID. This does not include the project ID.
     */
    instance?: string;
    /**
     * Project ID of the project that contains the instance.
     */
    project?: string;
  }
  export interface Params$Resource$Instances$Restart {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * Cloud SQL instance ID. This does not include the project ID.
     */
    instance?: string;
    /**
     * Project ID of the project that contains the instance to be restarted.
     */
    project?: string;
  }
  export interface Params$Resource$Instances$Restorebackup {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * The identifier of the backup configuration. This gets generated
     * automatically when a backup configuration is created.
     */
    backupConfiguration?: string;
    /**
     * The start time of the four-hour backup window. The backup can occur any
     * time in the window. The time is in RFC 3339 format, for example
     * 2012-11-15T16:19:00.094Z.
     */
    dueTime?: string;
    /**
     * Cloud SQL instance ID. This does not include the project ID.
     */
    instance?: string;
    /**
     * Project ID of the project that contains the instance.
     */
    project?: string;
  }
  export interface Params$Resource$Instances$Setrootpassword {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

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
    requestBody?: Schema$InstanceSetRootPasswordRequest;
  }
  export interface Params$Resource$Instances$Update {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

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
     * @desc Retrieves information about a specific operation that was performed
     * on a Cloud SQL instance.
     * @alias sql.operations.get
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.instance Cloud SQL instance ID. This does not include the project ID.
     * @param {string} params.operation Instance operation ID.
     * @param {string} params.project Project ID of the project that contains the instance.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    get(params?: Params$Resource$Operations$Get,
        options?: MethodOptions): AxiosPromise<Schema$InstanceOperation>;
    get(params: Params$Resource$Operations$Get,
        options: MethodOptions|BodyResponseCallback<Schema$InstanceOperation>,
        callback: BodyResponseCallback<Schema$InstanceOperation>): void;
    get(params: Params$Resource$Operations$Get,
        callback: BodyResponseCallback<Schema$InstanceOperation>): void;
    get(callback: BodyResponseCallback<Schema$InstanceOperation>): void;
    get(paramsOrCallback?: Params$Resource$Operations$Get|
        BodyResponseCallback<Schema$InstanceOperation>,
        optionsOrCallback?: MethodOptions|
        BodyResponseCallback<Schema$InstanceOperation>,
        callback?: BodyResponseCallback<Schema$InstanceOperation>):
        void|AxiosPromise<Schema$InstanceOperation> {
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

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url:
                  (rootUrl +
                   '/sql/v1beta3/projects/{project}/instances/{instance}/operations/{operation}')
                      .replace(/([^:]\/)\/+/g, '$1'),
              method: 'GET'
            },
            options),
        params,
        requiredParams: ['project', 'instance', 'operation'],
        pathParams: ['instance', 'operation', 'project'],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<Schema$InstanceOperation>(parameters, callback);
      } else {
        return createAPIRequest<Schema$InstanceOperation>(parameters);
      }
    }


    /**
     * sql.operations.list
     * @desc Lists all operations that have been performed on a Cloud SQL
     * instance.
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
    list(params?: Params$Resource$Operations$List, options?: MethodOptions):
        AxiosPromise<Schema$OperationsListResponse>;
    list(
        params: Params$Resource$Operations$List,
        options: MethodOptions|
        BodyResponseCallback<Schema$OperationsListResponse>,
        callback: BodyResponseCallback<Schema$OperationsListResponse>): void;
    list(
        params: Params$Resource$Operations$List,
        callback: BodyResponseCallback<Schema$OperationsListResponse>): void;
    list(callback: BodyResponseCallback<Schema$OperationsListResponse>): void;
    list(
        paramsOrCallback?: Params$Resource$Operations$List|
        BodyResponseCallback<Schema$OperationsListResponse>,
        optionsOrCallback?: MethodOptions|
        BodyResponseCallback<Schema$OperationsListResponse>,
        callback?: BodyResponseCallback<Schema$OperationsListResponse>):
        void|AxiosPromise<Schema$OperationsListResponse> {
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

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url:
                  (rootUrl +
                   '/sql/v1beta3/projects/{project}/instances/{instance}/operations')
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
        createAPIRequest<Schema$OperationsListResponse>(parameters, callback);
      } else {
        return createAPIRequest<Schema$OperationsListResponse>(parameters);
      }
    }
  }

  export interface Params$Resource$Operations$Get {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * Cloud SQL instance ID. This does not include the project ID.
     */
    instance?: string;
    /**
     * Instance operation ID.
     */
    operation?: string;
    /**
     * Project ID of the project that contains the instance.
     */
    project?: string;
  }
  export interface Params$Resource$Operations$List {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * Cloud SQL instance ID. This does not include the project ID.
     */
    instance?: string;
    /**
     * Maximum number of operations per response.
     */
    maxResults?: number;
    /**
     * A previously-returned page token representing part of the larger set of
     * results to view.
     */
    pageToken?: string;
    /**
     * Project ID of the project that contains the instance.
     */
    project?: string;
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
     * sql.sslCerts.delete
     * @desc Deletes an SSL certificate from a Cloud SQL instance.
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
    delete(params?: Params$Resource$Sslcerts$Delete, options?: MethodOptions):
        AxiosPromise<Schema$SslCertsDeleteResponse>;
    delete(
        params: Params$Resource$Sslcerts$Delete,
        options: MethodOptions|
        BodyResponseCallback<Schema$SslCertsDeleteResponse>,
        callback: BodyResponseCallback<Schema$SslCertsDeleteResponse>): void;
    delete(
        params: Params$Resource$Sslcerts$Delete,
        callback: BodyResponseCallback<Schema$SslCertsDeleteResponse>): void;
    delete(callback: BodyResponseCallback<Schema$SslCertsDeleteResponse>): void;
    delete(
        paramsOrCallback?: Params$Resource$Sslcerts$Delete|
        BodyResponseCallback<Schema$SslCertsDeleteResponse>,
        optionsOrCallback?: MethodOptions|
        BodyResponseCallback<Schema$SslCertsDeleteResponse>,
        callback?: BodyResponseCallback<Schema$SslCertsDeleteResponse>):
        void|AxiosPromise<Schema$SslCertsDeleteResponse> {
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

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url:
                  (rootUrl +
                   '/sql/v1beta3/projects/{project}/instances/{instance}/sslCerts/{sha1Fingerprint}')
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
        createAPIRequest<Schema$SslCertsDeleteResponse>(parameters, callback);
      } else {
        return createAPIRequest<Schema$SslCertsDeleteResponse>(parameters);
      }
    }


    /**
     * sql.sslCerts.get
     * @desc Retrieves an SSL certificate as specified by its SHA-1 fingerprint.
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
    get(params?: Params$Resource$Sslcerts$Get,
        options?: MethodOptions): AxiosPromise<Schema$SslCert>;
    get(params: Params$Resource$Sslcerts$Get,
        options: MethodOptions|BodyResponseCallback<Schema$SslCert>,
        callback: BodyResponseCallback<Schema$SslCert>): void;
    get(params: Params$Resource$Sslcerts$Get,
        callback: BodyResponseCallback<Schema$SslCert>): void;
    get(callback: BodyResponseCallback<Schema$SslCert>): void;
    get(paramsOrCallback?: Params$Resource$Sslcerts$Get|
        BodyResponseCallback<Schema$SslCert>,
        optionsOrCallback?: MethodOptions|BodyResponseCallback<Schema$SslCert>,
        callback?: BodyResponseCallback<Schema$SslCert>):
        void|AxiosPromise<Schema$SslCert> {
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

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url:
                  (rootUrl +
                   '/sql/v1beta3/projects/{project}/instances/{instance}/sslCerts/{sha1Fingerprint}')
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
     * @desc Creates an SSL certificate and returns the certificate, the
     * associated private key, and the server certificate authority.
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
    insert(params?: Params$Resource$Sslcerts$Insert, options?: MethodOptions):
        AxiosPromise<Schema$SslCertsInsertResponse>;
    insert(
        params: Params$Resource$Sslcerts$Insert,
        options: MethodOptions|
        BodyResponseCallback<Schema$SslCertsInsertResponse>,
        callback: BodyResponseCallback<Schema$SslCertsInsertResponse>): void;
    insert(
        params: Params$Resource$Sslcerts$Insert,
        callback: BodyResponseCallback<Schema$SslCertsInsertResponse>): void;
    insert(callback: BodyResponseCallback<Schema$SslCertsInsertResponse>): void;
    insert(
        paramsOrCallback?: Params$Resource$Sslcerts$Insert|
        BodyResponseCallback<Schema$SslCertsInsertResponse>,
        optionsOrCallback?: MethodOptions|
        BodyResponseCallback<Schema$SslCertsInsertResponse>,
        callback?: BodyResponseCallback<Schema$SslCertsInsertResponse>):
        void|AxiosPromise<Schema$SslCertsInsertResponse> {
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

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url:
                  (rootUrl +
                   '/sql/v1beta3/projects/{project}/instances/{instance}/sslCerts')
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
     * @desc Lists all of the current SSL certificates defined for a Cloud SQL
     * instance.
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
    list(params?: Params$Resource$Sslcerts$List, options?: MethodOptions):
        AxiosPromise<Schema$SslCertsListResponse>;
    list(
        params: Params$Resource$Sslcerts$List,
        options: MethodOptions|
        BodyResponseCallback<Schema$SslCertsListResponse>,
        callback: BodyResponseCallback<Schema$SslCertsListResponse>): void;
    list(
        params: Params$Resource$Sslcerts$List,
        callback: BodyResponseCallback<Schema$SslCertsListResponse>): void;
    list(callback: BodyResponseCallback<Schema$SslCertsListResponse>): void;
    list(
        paramsOrCallback?: Params$Resource$Sslcerts$List|
        BodyResponseCallback<Schema$SslCertsListResponse>,
        optionsOrCallback?: MethodOptions|
        BodyResponseCallback<Schema$SslCertsListResponse>,
        callback?: BodyResponseCallback<Schema$SslCertsListResponse>):
        void|AxiosPromise<Schema$SslCertsListResponse> {
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

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url:
                  (rootUrl +
                   '/sql/v1beta3/projects/{project}/instances/{instance}/sslCerts')
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

  export interface Params$Resource$Sslcerts$Delete {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * Cloud SQL instance ID. This does not include the project ID.
     */
    instance?: string;
    /**
     * Project ID of the project that contains the instance to be deleted.
     */
    project?: string;
    /**
     * Sha1 FingerPrint.
     */
    sha1Fingerprint?: string;
  }
  export interface Params$Resource$Sslcerts$Get {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

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
  export interface Params$Resource$Sslcerts$Insert {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * Cloud SQL instance ID. This does not include the project ID.
     */
    instance?: string;
    /**
     * Project ID of the project to which the newly created Cloud SQL instances
     * should belong.
     */
    project?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$SslCertsInsertRequest;
  }
  export interface Params$Resource$Sslcerts$List {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * Cloud SQL instance ID. This does not include the project ID.
     */
    instance?: string;
    /**
     * Project ID of the project for which to list Cloud SQL instances.
     */
    project?: string;
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
     * @desc Lists service tiers that can be used to create Google Cloud SQL
     * instances.
     * @alias sql.tiers.list
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.project Project ID of the project for which to list tiers.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list(params?: Params$Resource$Tiers$List, options?: MethodOptions):
        AxiosPromise<Schema$TiersListResponse>;
    list(
        params: Params$Resource$Tiers$List,
        options: MethodOptions|BodyResponseCallback<Schema$TiersListResponse>,
        callback: BodyResponseCallback<Schema$TiersListResponse>): void;
    list(
        params: Params$Resource$Tiers$List,
        callback: BodyResponseCallback<Schema$TiersListResponse>): void;
    list(callback: BodyResponseCallback<Schema$TiersListResponse>): void;
    list(
        paramsOrCallback?: Params$Resource$Tiers$List|
        BodyResponseCallback<Schema$TiersListResponse>,
        optionsOrCallback?: MethodOptions|
        BodyResponseCallback<Schema$TiersListResponse>,
        callback?: BodyResponseCallback<Schema$TiersListResponse>):
        void|AxiosPromise<Schema$TiersListResponse> {
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

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl + '/sql/v1beta3/projects/{project}/tiers')
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

  export interface Params$Resource$Tiers$List {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * Project ID of the project for which to list tiers.
     */
    project?: string;
  }
}
