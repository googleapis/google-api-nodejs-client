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
/* eslint-disable @typescript-eslint/class-name-casing */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-empty-interface */
/* eslint-disable @typescript-eslint/no-namespace */
/* eslint-disable no-irregular-whitespace */

import {
  OAuth2Client,
  JWT,
  Compute,
  UserRefreshClient,
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

export namespace bigtableadmin_v1 {
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
   * Cloud Bigtable Admin API
   *
   * Administer your Cloud Bigtable tables and instances.
   *
   * @example
   * ```js
   * const {google} = require('googleapis');
   * const bigtableadmin = google.bigtableadmin('v1');
   * ```
   */
  export class Bigtableadmin {
    context: APIRequestContext;

    constructor(options: GlobalOptions, google?: GoogleConfigurable) {
      this.context = {
        _options: options || {},
        google,
      };
    }
  }

  /**
   * A backup of a Cloud Bigtable table.
   */
  export interface Schema$Backup {
    /**
     * Output only. `end_time` is the time that the backup was finished. The row data in the backup will be no newer than this timestamp.
     */
    endTime?: string | null;
    /**
     * Required. The expiration time of the backup, with microseconds granularity that must be at least 6 hours and at most 30 days from the time the request is received. Once the `expire_time` has passed, Cloud Bigtable will delete the backup and free the resources used by the backup.
     */
    expireTime?: string | null;
    /**
     * A globally unique identifier for the backup which cannot be changed. Values are of the form `projects/{project\}/instances/{instance\}/clusters/{cluster\}/ backups/_a-zA-Z0-9*` The final segment of the name must be between 1 and 50 characters in length. The backup is stored in the cluster identified by the prefix of the backup name of the form `projects/{project\}/instances/{instance\}/clusters/{cluster\}`.
     */
    name?: string | null;
    /**
     * Output only. Size of the backup in bytes.
     */
    sizeBytes?: string | null;
    /**
     * Required. Immutable. Name of the table from which this backup was created. This needs to be in the same instance as the backup. Values are of the form `projects/{project\}/instances/{instance\}/tables/{source_table\}`.
     */
    sourceTable?: string | null;
    /**
     * Output only. `start_time` is the time that the backup was started (i.e. approximately the time the CreateBackup request is received). The row data in this backup will be no older than this timestamp.
     */
    startTime?: string | null;
    /**
     * Output only. The current state of the backup.
     */
    state?: string | null;
  }
  /**
   * Information about a backup.
   */
  export interface Schema$BackupInfo {
    /**
     * Output only. Name of the backup.
     */
    backup?: string | null;
    /**
     * Output only. This time that the backup was finished. Row data in the backup will be no newer than this timestamp.
     */
    endTime?: string | null;
    /**
     * Output only. Name of the table the backup was created from.
     */
    sourceTable?: string | null;
    /**
     * Output only. The time that the backup was started. Row data in the backup will be no older than this timestamp.
     */
    startTime?: string | null;
  }
  /**
   * A resizable group of nodes in a particular cloud location, capable of serving all Tables in the parent Instance.
   */
  export interface Schema$Cluster {
    /**
     * Immutable. The type of storage used by this cluster to serve its parent instance's tables, unless explicitly overridden.
     */
    defaultStorageType?: string | null;
    /**
     * Immutable. The location where this cluster's nodes and storage reside. For best performance, clients should be located as close as possible to this cluster. Currently only zones are supported, so values should be of the form `projects/{project\}/locations/{zone\}`.
     */
    location?: string | null;
    /**
     * The unique name of the cluster. Values are of the form `projects/{project\}/instances/{instance\}/clusters/a-z*`.
     */
    name?: string | null;
    /**
     * Required. The number of nodes allocated to this cluster. More nodes enable higher throughput and more consistent performance.
     */
    serveNodes?: number | null;
    /**
     * Output only. The current state of the cluster.
     */
    state?: string | null;
  }
  /**
   * Metadata type for the operation returned by CreateBackup.
   */
  export interface Schema$CreateBackupMetadata {
    /**
     * If set, the time at which this operation finished or was cancelled.
     */
    endTime?: string | null;
    /**
     * The name of the backup being created.
     */
    name?: string | null;
    /**
     * The name of the table the backup is created from.
     */
    sourceTable?: string | null;
    /**
     * The time at which this operation started.
     */
    startTime?: string | null;
  }
  /**
   * The metadata for the Operation returned by CreateCluster.
   */
  export interface Schema$CreateClusterMetadata {
    /**
     * The time at which the operation failed or was completed successfully.
     */
    finishTime?: string | null;
    /**
     * The request that prompted the initiation of this CreateCluster operation.
     */
    originalRequest?: Schema$CreateClusterRequest;
    /**
     * The time at which the original request was received.
     */
    requestTime?: string | null;
    /**
     * Keys: the full `name` of each table that existed in the instance when CreateCluster was first called, i.e. `projects//instances//tables/`. Any table added to the instance by a later API call will be created in the new cluster by that API call, not this one. Values: information on how much of a table's data has been copied to the newly-created cluster so far.
     */
    tables?: {[key: string]: Schema$TableProgress} | null;
  }
  /**
   * Request message for BigtableInstanceAdmin.CreateCluster.
   */
  export interface Schema$CreateClusterRequest {
    /**
     * Required. The cluster to be created. Fields marked `OutputOnly` must be left blank.
     */
    cluster?: Schema$Cluster;
    /**
     * Required. The ID to be used when referring to the new cluster within its instance, e.g., just `mycluster` rather than `projects/myproject/instances/myinstance/clusters/mycluster`.
     */
    clusterId?: string | null;
    /**
     * Required. The unique name of the instance in which to create the new cluster. Values are of the form `projects/{project\}/instances/{instance\}`.
     */
    parent?: string | null;
  }
  /**
   * The metadata for the Operation returned by CreateInstance.
   */
  export interface Schema$CreateInstanceMetadata {
    /**
     * The time at which the operation failed or was completed successfully.
     */
    finishTime?: string | null;
    /**
     * The request that prompted the initiation of this CreateInstance operation.
     */
    originalRequest?: Schema$CreateInstanceRequest;
    /**
     * The time at which the original request was received.
     */
    requestTime?: string | null;
  }
  /**
   * Request message for BigtableInstanceAdmin.CreateInstance.
   */
  export interface Schema$CreateInstanceRequest {
    /**
     * Required. The clusters to be created within the instance, mapped by desired cluster ID, e.g., just `mycluster` rather than `projects/myproject/instances/myinstance/clusters/mycluster`. Fields marked `OutputOnly` must be left blank. Currently, at most four clusters can be specified.
     */
    clusters?: {[key: string]: Schema$Cluster} | null;
    /**
     * Required. The instance to create. Fields marked `OutputOnly` must be left blank.
     */
    instance?: Schema$Instance;
    /**
     * Required. The ID to be used when referring to the new instance within its project, e.g., just `myinstance` rather than `projects/myproject/instances/myinstance`.
     */
    instanceId?: string | null;
    /**
     * Required. The unique name of the project in which to create the new instance. Values are of the form `projects/{project\}`.
     */
    parent?: string | null;
  }
  /**
   * Added to the error payload.
   */
  export interface Schema$FailureTrace {
    frames?: Schema$Frame[];
  }
  export interface Schema$Frame {
    targetName?: string | null;
    workflowGuid?: string | null;
    zoneId?: string | null;
  }
  /**
   * A collection of Bigtable Tables and the resources that serve them. All tables in an instance are served from all Clusters in the instance.
   */
  export interface Schema$Instance {
    /**
     * Required. The descriptive name for this instance as it appears in UIs. Can be changed at any time, but should be kept globally unique to avoid confusion.
     */
    displayName?: string | null;
    /**
     * Required. Labels are a flexible and lightweight mechanism for organizing cloud resources into groups that reflect a customer's organizational needs and deployment strategies. They can be used to filter resources and aggregate metrics. * Label keys must be between 1 and 63 characters long and must conform to the regular expression: `\p{Ll\}\p{Lo\}{0,62\}`. * Label values must be between 0 and 63 characters long and must conform to the regular expression: `[\p{Ll\}\p{Lo\}\p{N\}_-]{0,63\}`. * No more than 64 labels can be associated with a given resource. * Keys and values must both be under 128 bytes.
     */
    labels?: {[key: string]: string} | null;
    /**
     * The unique name of the instance. Values are of the form `projects/{project\}/instances/a-z+[a-z0-9]`.
     */
    name?: string | null;
    /**
     * Output only. The current state of the instance.
     */
    state?: string | null;
    /**
     * Required. The type of the instance. Defaults to `PRODUCTION`.
     */
    type?: string | null;
  }
  /**
   * Encapsulates progress related information for a Cloud Bigtable long running operation.
   */
  export interface Schema$OperationProgress {
    /**
     * If set, the time at which this operation failed or was completed successfully.
     */
    endTime?: string | null;
    /**
     * Percent completion of the operation. Values are between 0 and 100 inclusive.
     */
    progressPercent?: number | null;
    /**
     * Time the request was received.
     */
    startTime?: string | null;
  }
  /**
   * Metadata type for the long-running operation used to track the progress of optimizations performed on a newly restored table. This long-running operation is automatically created by the system after the successful completion of a table restore, and cannot be cancelled.
   */
  export interface Schema$OptimizeRestoredTableMetadata {
    /**
     * Name of the restored table being optimized.
     */
    name?: string | null;
    /**
     * The progress of the post-restore optimizations.
     */
    progress?: Schema$OperationProgress;
  }
  /**
   * Request message for BigtableInstanceAdmin.PartialUpdateInstance.
   */
  export interface Schema$PartialUpdateInstanceRequest {
    /**
     * Required. The Instance which will (partially) replace the current value.
     */
    instance?: Schema$Instance;
    /**
     * Required. The subset of Instance fields which should be replaced. Must be explicitly set.
     */
    updateMask?: string | null;
  }
  /**
   * Metadata type for the long-running operation returned by RestoreTable.
   */
  export interface Schema$RestoreTableMetadata {
    backupInfo?: Schema$BackupInfo;
    /**
     * Name of the table being created and restored to.
     */
    name?: string | null;
    /**
     * If exists, the name of the long-running operation that will be used to track the post-restore optimization process to optimize the performance of the restored table. The metadata type of the long-running operation is OptimizeRestoreTableMetadata. The response type is Empty. This long-running operation may be automatically created by the system if applicable after the RestoreTable long-running operation completes successfully. This operation may not be created if the table is already optimized or the restore was not successful.
     */
    optimizeTableOperationName?: string | null;
    /**
     * The progress of the RestoreTable operation.
     */
    progress?: Schema$OperationProgress;
    /**
     * The type of the restore source.
     */
    sourceType?: string | null;
  }
  /**
   * Progress info for copying a table's data to the new cluster.
   */
  export interface Schema$TableProgress {
    /**
     * Estimate of the number of bytes copied so far for this table. This will eventually reach 'estimated_size_bytes' unless the table copy is CANCELLED.
     */
    estimatedCopiedBytes?: string | null;
    /**
     * Estimate of the size of the table to be copied.
     */
    estimatedSizeBytes?: string | null;
    state?: string | null;
  }
  /**
   * The metadata for the Operation returned by UpdateAppProfile.
   */
  export interface Schema$UpdateAppProfileMetadata {}
  /**
   * The metadata for the Operation returned by UpdateCluster.
   */
  export interface Schema$UpdateClusterMetadata {
    /**
     * The time at which the operation failed or was completed successfully.
     */
    finishTime?: string | null;
    /**
     * The request that prompted the initiation of this UpdateCluster operation.
     */
    originalRequest?: Schema$Cluster;
    /**
     * The time at which the original request was received.
     */
    requestTime?: string | null;
  }
  /**
   * The metadata for the Operation returned by UpdateInstance.
   */
  export interface Schema$UpdateInstanceMetadata {
    /**
     * The time at which the operation failed or was completed successfully.
     */
    finishTime?: string | null;
    /**
     * The request that prompted the initiation of this UpdateInstance operation.
     */
    originalRequest?: Schema$PartialUpdateInstanceRequest;
    /**
     * The time at which the original request was received.
     */
    requestTime?: string | null;
  }
}
