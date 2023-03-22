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

export namespace storagetransfer_v1 {
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
   * Storage Transfer API
   *
   * Transfers data from external data sources to a Google Cloud Storage bucket or between Google Cloud Storage buckets.
   *
   * @example
   * ```js
   * const {google} = require('googleapis');
   * const storagetransfer = google.storagetransfer('v1');
   * ```
   */
  export class Storagetransfer {
    context: APIRequestContext;
    googleServiceAccounts: Resource$Googleserviceaccounts;
    projects: Resource$Projects;
    transferJobs: Resource$Transferjobs;
    transferOperations: Resource$Transferoperations;

    constructor(options: GlobalOptions, google?: GoogleConfigurable) {
      this.context = {
        _options: options || {},
        google,
      };

      this.googleServiceAccounts = new Resource$Googleserviceaccounts(
        this.context
      );
      this.projects = new Resource$Projects(this.context);
      this.transferJobs = new Resource$Transferjobs(this.context);
      this.transferOperations = new Resource$Transferoperations(this.context);
    }
  }

  /**
   * Represents an On-Premises Agent pool.
   */
  export interface Schema$AgentPool {
    /**
     * Specifies the bandwidth limit details. If this field is unspecified, the default value is set as 'No Limit'.
     */
    bandwidthLimit?: Schema$BandwidthLimit;
    /**
     * Specifies the client-specified AgentPool description.
     */
    displayName?: string | null;
    /**
     * Required. Specifies a unique string that identifies the agent pool. Format: `projects/{project_id\}/agentPools/{agent_pool_id\}`
     */
    name?: string | null;
    /**
     * Output only. Specifies the state of the AgentPool.
     */
    state?: string | null;
  }
  /**
   * AWS access key (see [AWS Security Credentials](https://docs.aws.amazon.com/general/latest/gr/aws-security-credentials.html)). For information on our data retention policy for user credentials, see [User credentials](/storage-transfer/docs/data-retention#user-credentials).
   */
  export interface Schema$AwsAccessKey {
    /**
     * Required. AWS access key ID.
     */
    accessKeyId?: string | null;
    /**
     * Required. AWS secret access key. This field is not returned in RPC responses.
     */
    secretAccessKey?: string | null;
  }
  /**
   * An AwsS3CompatibleData resource.
   */
  export interface Schema$AwsS3CompatibleData {
    /**
     * Required. Specifies the name of the bucket.
     */
    bucketName?: string | null;
    /**
     * Required. Specifies the endpoint of the storage service.
     */
    endpoint?: string | null;
    /**
     * Specifies the root path to transfer objects. Must be an empty string or full path name that ends with a '/'. This field is treated as an object prefix. As such, it should generally not begin with a '/'.
     */
    path?: string | null;
    /**
     * Specifies the region to sign requests with. This can be left blank if requests should be signed with an empty region.
     */
    region?: string | null;
    /**
     * A S3 compatible metadata.
     */
    s3Metadata?: Schema$S3CompatibleMetadata;
  }
  /**
   * An AwsS3Data resource can be a data source, but not a data sink. In an AwsS3Data resource, an object's name is the S3 object's key name.
   */
  export interface Schema$AwsS3Data {
    /**
     * Input only. AWS access key used to sign the API requests to the AWS S3 bucket. Permissions on the bucket must be granted to the access ID of the AWS access key. For information on our data retention policy for user credentials, see [User credentials](/storage-transfer/docs/data-retention#user-credentials).
     */
    awsAccessKey?: Schema$AwsAccessKey;
    /**
     * Required. S3 Bucket name (see [Creating a bucket](https://docs.aws.amazon.com/AmazonS3/latest/dev/create-bucket-get-location-example.html)).
     */
    bucketName?: string | null;
    /**
     * Root path to transfer objects. Must be an empty string or full path name that ends with a '/'. This field is treated as an object prefix. As such, it should generally not begin with a '/'.
     */
    path?: string | null;
    /**
     * The Amazon Resource Name (ARN) of the role to support temporary credentials via `AssumeRoleWithWebIdentity`. For more information about ARNs, see [IAM ARNs](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_identifiers.html#identifiers-arns). When a role ARN is provided, Transfer Service fetches temporary credentials for the session using a `AssumeRoleWithWebIdentity` call for the provided role using the GoogleServiceAccount for this project.
     */
    roleArn?: string | null;
  }
  /**
   * An AzureBlobStorageData resource can be a data source, but not a data sink. An AzureBlobStorageData resource represents one Azure container. The storage account determines the [Azure endpoint](https://docs.microsoft.com/en-us/azure/storage/common/storage-create-storage-account#storage-account-endpoints). In an AzureBlobStorageData resource, a blobs's name is the [Azure Blob Storage blob's key name](https://docs.microsoft.com/en-us/rest/api/storageservices/naming-and-referencing-containers--blobs--and-metadata#blob-names).
   */
  export interface Schema$AzureBlobStorageData {
    /**
     * Required. Input only. Credentials used to authenticate API requests to Azure. For information on our data retention policy for user credentials, see [User credentials](/storage-transfer/docs/data-retention#user-credentials).
     */
    azureCredentials?: Schema$AzureCredentials;
    /**
     * Required. The container to transfer from the Azure Storage account.
     */
    container?: string | null;
    /**
     * Root path to transfer objects. Must be an empty string or full path name that ends with a '/'. This field is treated as an object prefix. As such, it should generally not begin with a '/'.
     */
    path?: string | null;
    /**
     * Required. The name of the Azure Storage account.
     */
    storageAccount?: string | null;
  }
  /**
   * Azure credentials For information on our data retention policy for user credentials, see [User credentials](/storage-transfer/docs/data-retention#user-credentials).
   */
  export interface Schema$AzureCredentials {
    /**
     * Required. Azure shared access signature (SAS). For more information about SAS, see [Grant limited access to Azure Storage resources using shared access signatures (SAS)](https://docs.microsoft.com/en-us/azure/storage/common/storage-sas-overview).
     */
    sasToken?: string | null;
  }
  /**
   * Specifies a bandwidth limit for an agent pool.
   */
  export interface Schema$BandwidthLimit {
    /**
     * Bandwidth rate in megabytes per second, distributed across all the agents in the pool.
     */
    limitMbps?: string | null;
  }
  /**
   * The request message for Operations.CancelOperation.
   */
  export interface Schema$CancelOperationRequest {}
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
   * A generic empty message that you can re-use to avoid defining duplicated empty messages in your APIs. A typical example is to use it as the request or the response type of an API method. For instance: service Foo { rpc Bar(google.protobuf.Empty) returns (google.protobuf.Empty); \}
   */
  export interface Schema$Empty {}
  /**
   * An entry describing an error that has occurred.
   */
  export interface Schema$ErrorLogEntry {
    /**
     * A list of messages that carry the error details.
     */
    errorDetails?: string[] | null;
    /**
     * Required. A URL that refers to the target (a data source, a data sink, or an object) with which the error is associated.
     */
    url?: string | null;
  }
  /**
   * A summary of errors by error code, plus a count and sample error log entries.
   */
  export interface Schema$ErrorSummary {
    /**
     * Required.
     */
    errorCode?: string | null;
    /**
     * Required. Count of this type of error.
     */
    errorCount?: string | null;
    /**
     * Error samples. At most 5 error log entries are recorded for a given error code for a single transfer operation.
     */
    errorLogEntries?: Schema$ErrorLogEntry[];
  }
  /**
   * Specifies the Event-driven transfer options. Event-driven transfers listen to an event stream to transfer updated files.
   */
  export interface Schema$EventStream {
    /**
     * Specifies the data and time at which Storage Transfer Service stops listening for events from this stream. After this time, any transfers in progress will complete, but no new transfers are initiated.
     */
    eventStreamExpirationTime?: string | null;
    /**
     * Specifies the date and time that Storage Transfer Service starts listening for events from this stream. If no start time is specified or start time is in the past, Storage Transfer Service starts listening immediately.
     */
    eventStreamStartTime?: string | null;
    /**
     * Required. Specifies a unique name of the resource such as AWS SQS ARN in the form 'arn:aws:sqs:region:account_id:queue_name', or Pub/Sub subscription resource name in the form 'projects/{project\}/subscriptions/{sub\}'.
     */
    name?: string | null;
  }
  /**
   * In a GcsData resource, an object's name is the Cloud Storage object's name and its "last modification time" refers to the object's `updated` property of Cloud Storage objects, which changes when the content or the metadata of the object is updated.
   */
  export interface Schema$GcsData {
    /**
     * Required. Cloud Storage bucket name. Must meet [Bucket Name Requirements](/storage/docs/naming#requirements).
     */
    bucketName?: string | null;
    /**
     * Root path to transfer objects. Must be an empty string or full path name that ends with a '/'. This field is treated as an object prefix. As such, it should generally not begin with a '/'. The root path value must meet [Object Name Requirements](/storage/docs/naming#objectnames).
     */
    path?: string | null;
  }
  /**
   * Google service account
   */
  export interface Schema$GoogleServiceAccount {
    /**
     * Email address of the service account.
     */
    accountEmail?: string | null;
    /**
     * Unique identifier for the service account.
     */
    subjectId?: string | null;
  }
  /**
   * An HttpData resource specifies a list of objects on the web to be transferred over HTTP. The information of the objects to be transferred is contained in a file referenced by a URL. The first line in the file must be `"TsvHttpData-1.0"`, which specifies the format of the file. Subsequent lines specify the information of the list of objects, one object per list entry. Each entry has the following tab-delimited fields: * **HTTP URL** — The location of the object. * **Length** — The size of the object in bytes. * **MD5** — The base64-encoded MD5 hash of the object. For an example of a valid TSV file, see [Transferring data from URLs](https://cloud.google.com/storage-transfer/docs/create-url-list). When transferring data based on a URL list, keep the following in mind: * When an object located at `http(s)://hostname:port/` is transferred to a data sink, the name of the object at the data sink is `/`. * If the specified size of an object does not match the actual size of the object fetched, the object is not transferred. * If the specified MD5 does not match the MD5 computed from the transferred bytes, the object transfer fails. * Ensure that each URL you specify is publicly accessible. For example, in Cloud Storage you can [share an object publicly] (/storage/docs/cloud-console#_sharingdata) and get a link to it. * Storage Transfer Service obeys `robots.txt` rules and requires the source HTTP server to support `Range` requests and to return a `Content-Length` header in each response. * ObjectConditions have no effect when filtering objects to transfer.
   */
  export interface Schema$HttpData {
    /**
     * Required. The URL that points to the file that stores the object list entries. This file must allow public access. Currently, only URLs with HTTP and HTTPS schemes are supported.
     */
    listUrl?: string | null;
  }
  /**
   * Response from ListAgentPools.
   */
  export interface Schema$ListAgentPoolsResponse {
    /**
     * A list of agent pools.
     */
    agentPools?: Schema$AgentPool[];
    /**
     * The list next page token.
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
  }
  /**
   * Response from ListTransferJobs.
   */
  export interface Schema$ListTransferJobsResponse {
    /**
     * The list next page token.
     */
    nextPageToken?: string | null;
    /**
     * A list of transfer jobs.
     */
    transferJobs?: Schema$TransferJob[];
  }
  /**
   * Specifies the logging behavior for transfer operations. For cloud-to-cloud transfers, logs are sent to Cloud Logging. See [Read transfer logs](https://cloud.google.com/storage-transfer/docs/read-transfer-logs) for details. For transfers to or from a POSIX file system, logs are stored in the Cloud Storage bucket that is the source or sink of the transfer. See [Managing Transfer for on-premises jobs] (https://cloud.google.com/storage-transfer/docs/managing-on-prem-jobs#viewing-logs) for details.
   */
  export interface Schema$LoggingConfig {
    /**
     * For transfers with a PosixFilesystem source, this option enables the Cloud Storage transfer logs for this transfer.
     */
    enableOnpremGcsTransferLogs?: boolean | null;
    /**
     * Specifies the actions to be logged. If empty, no logs are generated. Not supported for transfers with PosixFilesystem data sources; use enable_onprem_gcs_transfer_logs instead.
     */
    logActions?: string[] | null;
    /**
     * States in which `log_actions` are logged. If empty, no logs are generated. Not supported for transfers with PosixFilesystem data sources; use enable_onprem_gcs_transfer_logs instead.
     */
    logActionStates?: string[] | null;
  }
  /**
   * Specifies the metadata options for running a transfer.
   */
  export interface Schema$MetadataOptions {
    /**
     * Specifies how each object's ACLs should be preserved for transfers between Google Cloud Storage buckets. If unspecified, the default behavior is the same as ACL_DESTINATION_BUCKET_DEFAULT.
     */
    acl?: string | null;
    /**
     * Specifies how each file's POSIX group ID (GID) attribute should be handled by the transfer. By default, GID is not preserved. Only applicable to transfers involving POSIX file systems, and ignored for other transfers.
     */
    gid?: string | null;
    /**
     * Specifies how each object's Cloud KMS customer-managed encryption key (CMEK) is preserved for transfers between Google Cloud Storage buckets. If unspecified, the default behavior is the same as KMS_KEY_DESTINATION_BUCKET_DEFAULT.
     */
    kmsKey?: string | null;
    /**
     * Specifies how each file's mode attribute should be handled by the transfer. By default, mode is not preserved. Only applicable to transfers involving POSIX file systems, and ignored for other transfers.
     */
    mode?: string | null;
    /**
     * Specifies the storage class to set on objects being transferred to Google Cloud Storage buckets. If unspecified, the default behavior is the same as STORAGE_CLASS_DESTINATION_BUCKET_DEFAULT.
     */
    storageClass?: string | null;
    /**
     * Specifies how symlinks should be handled by the transfer. By default, symlinks are not preserved. Only applicable to transfers involving POSIX file systems, and ignored for other transfers.
     */
    symlink?: string | null;
    /**
     * Specifies how each object's temporary hold status should be preserved for transfers between Google Cloud Storage buckets. If unspecified, the default behavior is the same as TEMPORARY_HOLD_PRESERVE.
     */
    temporaryHold?: string | null;
    /**
     * Specifies how each object's `timeCreated` metadata is preserved for transfers between Google Cloud Storage buckets. If unspecified, the default behavior is the same as TIME_CREATED_SKIP.
     */
    timeCreated?: string | null;
    /**
     * Specifies how each file's POSIX user ID (UID) attribute should be handled by the transfer. By default, UID is not preserved. Only applicable to transfers involving POSIX file systems, and ignored for other transfers.
     */
    uid?: string | null;
  }
  /**
   * Specification to configure notifications published to Pub/Sub. Notifications are published to the customer-provided topic using the following `PubsubMessage.attributes`: * `"eventType"`: one of the EventType values * `"payloadFormat"`: one of the PayloadFormat values * `"projectId"`: the project_id of the `TransferOperation` * `"transferJobName"`: the transfer_job_name of the `TransferOperation` * `"transferOperationName"`: the name of the `TransferOperation` The `PubsubMessage.data` contains a TransferOperation resource formatted according to the specified `PayloadFormat`.
   */
  export interface Schema$NotificationConfig {
    /**
     * Event types for which a notification is desired. If empty, send notifications for all event types.
     */
    eventTypes?: string[] | null;
    /**
     * Required. The desired format of the notification message payloads.
     */
    payloadFormat?: string | null;
    /**
     * Required. The `Topic.name` of the Pub/Sub topic to which to publish notifications. Must be of the format: `projects/{project\}/topics/{topic\}`. Not matching this format results in an INVALID_ARGUMENT error.
     */
    pubsubTopic?: string | null;
  }
  /**
   * Conditions that determine which objects are transferred. Applies only to Cloud Data Sources such as S3, Azure, and Cloud Storage. The "last modification time" refers to the time of the last change to the object's content or metadata — specifically, this is the `updated` property of Cloud Storage objects, the `LastModified` field of S3 objects, and the `Last-Modified` header of Azure blobs. Transfers with a PosixFilesystem source or destination don't support `ObjectConditions`.
   */
  export interface Schema$ObjectConditions {
    /**
     * If you specify `exclude_prefixes`, Storage Transfer Service uses the items in the `exclude_prefixes` array to determine which objects to exclude from a transfer. Objects must not start with one of the matching `exclude_prefixes` for inclusion in a transfer. The following are requirements of `exclude_prefixes`: * Each exclude-prefix can contain any sequence of Unicode characters, to a max length of 1024 bytes when UTF8-encoded, and must not contain Carriage Return or Line Feed characters. Wildcard matching and regular expression matching are not supported. * Each exclude-prefix must omit the leading slash. For example, to exclude the object `s3://my-aws-bucket/logs/y=2015/requests.gz`, specify the exclude-prefix as `logs/y=2015/requests.gz`. * None of the exclude-prefix values can be empty, if specified. * Each exclude-prefix must exclude a distinct portion of the object namespace. No exclude-prefix may be a prefix of another exclude-prefix. * If include_prefixes is specified, then each exclude-prefix must start with the value of a path explicitly included by `include_prefixes`. The max size of `exclude_prefixes` is 1000. For more information, see [Filtering objects from transfers](/storage-transfer/docs/filtering-objects-from-transfers).
     */
    excludePrefixes?: string[] | null;
    /**
     * If you specify `include_prefixes`, Storage Transfer Service uses the items in the `include_prefixes` array to determine which objects to include in a transfer. Objects must start with one of the matching `include_prefixes` for inclusion in the transfer. If exclude_prefixes is specified, objects must not start with any of the `exclude_prefixes` specified for inclusion in the transfer. The following are requirements of `include_prefixes`: * Each include-prefix can contain any sequence of Unicode characters, to a max length of 1024 bytes when UTF8-encoded, and must not contain Carriage Return or Line Feed characters. Wildcard matching and regular expression matching are not supported. * Each include-prefix must omit the leading slash. For example, to include the object `s3://my-aws-bucket/logs/y=2015/requests.gz`, specify the include-prefix as `logs/y=2015/requests.gz`. * None of the include-prefix values can be empty, if specified. * Each include-prefix must include a distinct portion of the object namespace. No include-prefix may be a prefix of another include-prefix. The max size of `include_prefixes` is 1000. For more information, see [Filtering objects from transfers](/storage-transfer/docs/filtering-objects-from-transfers).
     */
    includePrefixes?: string[] | null;
    /**
     * If specified, only objects with a "last modification time" before this timestamp and objects that don't have a "last modification time" are transferred.
     */
    lastModifiedBefore?: string | null;
    /**
     * If specified, only objects with a "last modification time" on or after this timestamp and objects that don't have a "last modification time" are transferred. The `last_modified_since` and `last_modified_before` fields can be used together for chunked data processing. For example, consider a script that processes each day's worth of data at a time. For that you'd set each of the fields as follows: * `last_modified_since` to the start of the day * `last_modified_before` to the end of the day
     */
    lastModifiedSince?: string | null;
    /**
     * Ensures that objects are not transferred if a specific maximum time has elapsed since the "last modification time". When a TransferOperation begins, objects with a "last modification time" are transferred only if the elapsed time between the start_time of the `TransferOperation`and the "last modification time" of the object is less than the value of max_time_elapsed_since_last_modification`. Objects that do not have a "last modification time" are also transferred.
     */
    maxTimeElapsedSinceLastModification?: string | null;
    /**
     * Ensures that objects are not transferred until a specific minimum time has elapsed after the "last modification time". When a TransferOperation begins, objects with a "last modification time" are transferred only if the elapsed time between the start_time of the `TransferOperation` and the "last modification time" of the object is equal to or greater than the value of min_time_elapsed_since_last_modification`. Objects that do not have a "last modification time" are also transferred.
     */
    minTimeElapsedSinceLastModification?: string | null;
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
     * Represents the transfer operation object. To request a TransferOperation object, use transferOperations.get.
     */
    metadata?: {[key: string]: any} | null;
    /**
     * The server-assigned unique name. The format of `name` is `transferOperations/some/unique/name`.
     */
    name?: string | null;
    /**
     * The normal response of the operation in case of success. If the original method returns no data on success, such as `Delete`, the response is `google.protobuf.Empty`. If the original method is standard `Get`/`Create`/`Update`, the response should be the resource. For other methods, the response should have the type `XxxResponse`, where `Xxx` is the original method name. For example, if the original method name is `TakeSnapshot()`, the inferred response type is `TakeSnapshotResponse`.
     */
    response?: {[key: string]: any} | null;
  }
  /**
   * Request passed to PauseTransferOperation.
   */
  export interface Schema$PauseTransferOperationRequest {}
  /**
   * A POSIX filesystem resource.
   */
  export interface Schema$PosixFilesystem {
    /**
     * Root directory path to the filesystem.
     */
    rootDirectory?: string | null;
  }
  /**
   * Request passed to ResumeTransferOperation.
   */
  export interface Schema$ResumeTransferOperationRequest {}
  /**
   * Request passed to RunTransferJob.
   */
  export interface Schema$RunTransferJobRequest {
    /**
     * Required. The ID of the Google Cloud project that owns the transfer job.
     */
    projectId?: string | null;
  }
  /**
   * S3CompatibleMetadata contains the metadata fields that apply to the basic types of S3-compatible data providers.
   */
  export interface Schema$S3CompatibleMetadata {
    /**
     * Specifies the authentication and authorization method used by the storage service. When not specified, Transfer Service will attempt to determine right auth method to use.
     */
    authMethod?: string | null;
    /**
     * The Listing API to use for discovering objects. When not specified, Transfer Service will attempt to determine the right API to use.
     */
    listApi?: string | null;
    /**
     * Specifies the network protocol of the agent. When not specified, the default value of NetworkProtocol NETWORK_PROTOCOL_HTTPS is used.
     */
    protocol?: string | null;
    /**
     * Specifies the API request model used to call the storage service. When not specified, the default value of RequestModel REQUEST_MODEL_VIRTUAL_HOSTED_STYLE is used.
     */
    requestModel?: string | null;
  }
  /**
   * Transfers can be scheduled to recur or to run just once.
   */
  export interface Schema$Schedule {
    /**
     * The time in UTC that no further transfer operations are scheduled. Combined with schedule_end_date, `end_time_of_day` specifies the end date and time for starting new transfer operations. This field must be greater than or equal to the timestamp corresponding to the combintation of schedule_start_date and start_time_of_day, and is subject to the following: * If `end_time_of_day` is not set and `schedule_end_date` is set, then a default value of `23:59:59` is used for `end_time_of_day`. * If `end_time_of_day` is set and `schedule_end_date` is not set, then INVALID_ARGUMENT is returned.
     */
    endTimeOfDay?: Schema$TimeOfDay;
    /**
     * Interval between the start of each scheduled TransferOperation. If unspecified, the default value is 24 hours. This value may not be less than 1 hour.
     */
    repeatInterval?: string | null;
    /**
     * The last day a transfer runs. Date boundaries are determined relative to UTC time. A job runs once per 24 hours within the following guidelines: * If `schedule_end_date` and schedule_start_date are the same and in the future relative to UTC, the transfer is executed only one time. * If `schedule_end_date` is later than `schedule_start_date` and `schedule_end_date` is in the future relative to UTC, the job runs each day at start_time_of_day through `schedule_end_date`.
     */
    scheduleEndDate?: Schema$Date;
    /**
     * Required. The start date of a transfer. Date boundaries are determined relative to UTC time. If `schedule_start_date` and start_time_of_day are in the past relative to the job's creation time, the transfer starts the day after you schedule the transfer request. **Note:** When starting jobs at or near midnight UTC it is possible that a job starts later than expected. For example, if you send an outbound request on June 1 one millisecond prior to midnight UTC and the Storage Transfer Service server receives the request on June 2, then it creates a TransferJob with `schedule_start_date` set to June 2 and a `start_time_of_day` set to midnight UTC. The first scheduled TransferOperation takes place on June 3 at midnight UTC.
     */
    scheduleStartDate?: Schema$Date;
    /**
     * The time in UTC that a transfer job is scheduled to run. Transfers may start later than this time. If `start_time_of_day` is not specified: * One-time transfers run immediately. * Recurring transfers run immediately, and each day at midnight UTC, through schedule_end_date. If `start_time_of_day` is specified: * One-time transfers run at the specified time. * Recurring transfers run at the specified time each day, through `schedule_end_date`.
     */
    startTimeOfDay?: Schema$TimeOfDay;
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
   * Represents a time of day. The date and time zone are either not significant or are specified elsewhere. An API may choose to allow leap seconds. Related types are google.type.Date and `google.protobuf.Timestamp`.
   */
  export interface Schema$TimeOfDay {
    /**
     * Hours of day in 24 hour format. Should be from 0 to 23. An API may choose to allow the value "24:00:00" for scenarios like business closing time.
     */
    hours?: number | null;
    /**
     * Minutes of hour of day. Must be from 0 to 59.
     */
    minutes?: number | null;
    /**
     * Fractions of seconds in nanoseconds. Must be from 0 to 999,999,999.
     */
    nanos?: number | null;
    /**
     * Seconds of minutes of the time. Must normally be from 0 to 59. An API may allow the value 60 if it allows leap-seconds.
     */
    seconds?: number | null;
  }
  /**
   * A collection of counters that report the progress of a transfer operation.
   */
  export interface Schema$TransferCounters {
    /**
     * Bytes that are copied to the data sink.
     */
    bytesCopiedToSink?: string | null;
    /**
     * Bytes that are deleted from the data sink.
     */
    bytesDeletedFromSink?: string | null;
    /**
     * Bytes that are deleted from the data source.
     */
    bytesDeletedFromSource?: string | null;
    /**
     * Bytes that failed to be deleted from the data sink.
     */
    bytesFailedToDeleteFromSink?: string | null;
    /**
     * Bytes found in the data source that are scheduled to be transferred, excluding any that are filtered based on object conditions or skipped due to sync.
     */
    bytesFoundFromSource?: string | null;
    /**
     * Bytes found only in the data sink that are scheduled to be deleted.
     */
    bytesFoundOnlyFromSink?: string | null;
    /**
     * Bytes in the data source that failed to be transferred or that failed to be deleted after being transferred.
     */
    bytesFromSourceFailed?: string | null;
    /**
     * Bytes in the data source that are not transferred because they already exist in the data sink.
     */
    bytesFromSourceSkippedBySync?: string | null;
    /**
     * For transfers involving PosixFilesystem only. Number of listing failures for each directory found at the source. Potential failures when listing a directory include permission failure or block failure. If listing a directory fails, no files in the directory are transferred.
     */
    directoriesFailedToListFromSource?: string | null;
    /**
     * For transfers involving PosixFilesystem only. Number of directories found while listing. For example, if the root directory of the transfer is `base/` and there are two other directories, `a/` and `b/` under this directory, the count after listing `base/`, `base/a/` and `base/b/` is 3.
     */
    directoriesFoundFromSource?: string | null;
    /**
     * For transfers involving PosixFilesystem only. Number of successful listings for each directory found at the source.
     */
    directoriesSuccessfullyListedFromSource?: string | null;
    /**
     * Number of successfully cleaned up intermediate objects.
     */
    intermediateObjectsCleanedUp?: string | null;
    /**
     * Number of intermediate objects failed cleaned up.
     */
    intermediateObjectsFailedCleanedUp?: string | null;
    /**
     * Objects that are copied to the data sink.
     */
    objectsCopiedToSink?: string | null;
    /**
     * Objects that are deleted from the data sink.
     */
    objectsDeletedFromSink?: string | null;
    /**
     * Objects that are deleted from the data source.
     */
    objectsDeletedFromSource?: string | null;
    /**
     * Objects that failed to be deleted from the data sink.
     */
    objectsFailedToDeleteFromSink?: string | null;
    /**
     * Objects found in the data source that are scheduled to be transferred, excluding any that are filtered based on object conditions or skipped due to sync.
     */
    objectsFoundFromSource?: string | null;
    /**
     * Objects found only in the data sink that are scheduled to be deleted.
     */
    objectsFoundOnlyFromSink?: string | null;
    /**
     * Objects in the data source that failed to be transferred or that failed to be deleted after being transferred.
     */
    objectsFromSourceFailed?: string | null;
    /**
     * Objects in the data source that are not transferred because they already exist in the data sink.
     */
    objectsFromSourceSkippedBySync?: string | null;
  }
  /**
   * This resource represents the configuration of a transfer job that runs periodically.
   */
  export interface Schema$TransferJob {
    /**
     * Output only. The time that the transfer job was created.
     */
    creationTime?: string | null;
    /**
     * Output only. The time that the transfer job was deleted.
     */
    deletionTime?: string | null;
    /**
     * A description provided by the user for the job. Its max length is 1024 bytes when Unicode-encoded.
     */
    description?: string | null;
    /**
     * Specifies the event stream for the transfer job for event-driven transfers. When EventStream is specified, the Schedule fields are ignored.
     */
    eventStream?: Schema$EventStream;
    /**
     * Output only. The time that the transfer job was last modified.
     */
    lastModificationTime?: string | null;
    /**
     * The name of the most recently started TransferOperation of this JobConfig. Present if a TransferOperation has been created for this JobConfig.
     */
    latestOperationName?: string | null;
    /**
     * Logging configuration.
     */
    loggingConfig?: Schema$LoggingConfig;
    /**
     * A unique name (within the transfer project) assigned when the job is created. If this field is empty in a CreateTransferJobRequest, Storage Transfer Service assigns a unique name. Otherwise, the specified name is used as the unique name for this job. If the specified name is in use by a job, the creation request fails with an ALREADY_EXISTS error. This name must start with `"transferJobs/"` prefix and end with a letter or a number, and should be no more than 128 characters. For transfers involving PosixFilesystem, this name must start with `transferJobs/OPI` specifically. For all other transfer types, this name must not start with `transferJobs/OPI`. Non-PosixFilesystem example: `"transferJobs/^(?!OPI)[A-Za-z0-9-._~]*[A-Za-z0-9]$"` PosixFilesystem example: `"transferJobs/OPI^[A-Za-z0-9-._~]*[A-Za-z0-9]$"` Applications must not rely on the enforcement of naming requirements involving OPI. Invalid job names fail with an INVALID_ARGUMENT error.
     */
    name?: string | null;
    /**
     * Notification configuration. This is not supported for transfers involving PosixFilesystem.
     */
    notificationConfig?: Schema$NotificationConfig;
    /**
     * The ID of the Google Cloud project that owns the job.
     */
    projectId?: string | null;
    /**
     * Specifies schedule for the transfer job. This is an optional field. When the field is not set, the job never executes a transfer, unless you invoke RunTransferJob or update the job to have a non-empty schedule.
     */
    schedule?: Schema$Schedule;
    /**
     * Status of the job. This value MUST be specified for `CreateTransferJobRequests`. **Note:** The effect of the new job status takes place during a subsequent job run. For example, if you change the job status from ENABLED to DISABLED, and an operation spawned by the transfer is running, the status change would not affect the current operation.
     */
    status?: string | null;
    /**
     * Transfer specification.
     */
    transferSpec?: Schema$TransferSpec;
  }
  /**
   * Specifies where the manifest is located.
   */
  export interface Schema$TransferManifest {
    /**
     * Specifies the path to the manifest in Cloud Storage. The Google-managed service account for the transfer must have `storage.objects.get` permission for this object. An example path is `gs://bucket_name/path/manifest.csv`.
     */
    location?: string | null;
  }
  /**
   * A description of the execution of a transfer.
   */
  export interface Schema$TransferOperation {
    /**
     * Information about the progress of the transfer operation.
     */
    counters?: Schema$TransferCounters;
    /**
     * End time of this transfer execution.
     */
    endTime?: string | null;
    /**
     * Summarizes errors encountered with sample error log entries.
     */
    errorBreakdowns?: Schema$ErrorSummary[];
    /**
     * Cloud Logging configuration.
     */
    loggingConfig?: Schema$LoggingConfig;
    /**
     * A globally unique ID assigned by the system.
     */
    name?: string | null;
    /**
     * Notification configuration.
     */
    notificationConfig?: Schema$NotificationConfig;
    /**
     * The ID of the Google Cloud project that owns the operation.
     */
    projectId?: string | null;
    /**
     * Start time of this transfer execution.
     */
    startTime?: string | null;
    /**
     * Status of the transfer operation.
     */
    status?: string | null;
    /**
     * The name of the transfer job that triggers this transfer operation.
     */
    transferJobName?: string | null;
    /**
     * Transfer specification.
     */
    transferSpec?: Schema$TransferSpec;
  }
  /**
   * TransferOptions define the actions to be performed on objects in a transfer.
   */
  export interface Schema$TransferOptions {
    /**
     * Whether objects should be deleted from the source after they are transferred to the sink. **Note:** This option and delete_objects_unique_in_sink are mutually exclusive.
     */
    deleteObjectsFromSourceAfterTransfer?: boolean | null;
    /**
     * Whether objects that exist only in the sink should be deleted. **Note:** This option and delete_objects_from_source_after_transfer are mutually exclusive.
     */
    deleteObjectsUniqueInSink?: boolean | null;
    /**
     * Represents the selected metadata options for a transfer job.
     */
    metadataOptions?: Schema$MetadataOptions;
    /**
     * When to overwrite objects that already exist in the sink. The default is that only objects that are different from the source are ovewritten. If true, all objects in the sink whose name matches an object in the source are overwritten with the source object.
     */
    overwriteObjectsAlreadyExistingInSink?: boolean | null;
    /**
     * When to overwrite objects that already exist in the sink. If not set, overwrite behavior is determined by overwrite_objects_already_existing_in_sink.
     */
    overwriteWhen?: string | null;
  }
  /**
   * Configuration for running a transfer.
   */
  export interface Schema$TransferSpec {
    /**
     * An AWS S3 compatible data source.
     */
    awsS3CompatibleDataSource?: Schema$AwsS3CompatibleData;
    /**
     * An AWS S3 data source.
     */
    awsS3DataSource?: Schema$AwsS3Data;
    /**
     * An Azure Blob Storage data source.
     */
    azureBlobStorageDataSource?: Schema$AzureBlobStorageData;
    /**
     * A Cloud Storage data sink.
     */
    gcsDataSink?: Schema$GcsData;
    /**
     * A Cloud Storage data source.
     */
    gcsDataSource?: Schema$GcsData;
    /**
     * Cloud Storage intermediate data location.
     */
    gcsIntermediateDataLocation?: Schema$GcsData;
    /**
     * An HTTP URL data source.
     */
    httpDataSource?: Schema$HttpData;
    /**
     * Only objects that satisfy these object conditions are included in the set of data source and data sink objects. Object conditions based on objects' "last modification time" do not exclude objects in a data sink.
     */
    objectConditions?: Schema$ObjectConditions;
    /**
     * A POSIX Filesystem data sink.
     */
    posixDataSink?: Schema$PosixFilesystem;
    /**
     * A POSIX Filesystem data source.
     */
    posixDataSource?: Schema$PosixFilesystem;
    /**
     * Specifies the agent pool name associated with the posix data sink. When unspecified, the default name is used.
     */
    sinkAgentPoolName?: string | null;
    /**
     * Specifies the agent pool name associated with the posix data source. When unspecified, the default name is used.
     */
    sourceAgentPoolName?: string | null;
    /**
     * A manifest file provides a list of objects to be transferred from the data source. This field points to the location of the manifest file. Otherwise, the entire source bucket is used. ObjectConditions still apply.
     */
    transferManifest?: Schema$TransferManifest;
    /**
     * If the option delete_objects_unique_in_sink is `true` and time-based object conditions such as 'last modification time' are specified, the request fails with an INVALID_ARGUMENT error.
     */
    transferOptions?: Schema$TransferOptions;
  }
  /**
   * Request passed to UpdateTransferJob.
   */
  export interface Schema$UpdateTransferJobRequest {
    /**
     * Required. The ID of the Google Cloud project that owns the job.
     */
    projectId?: string | null;
    /**
     * Required. The job to update. `transferJob` is expected to specify one or more of five fields: description, transfer_spec, notification_config, logging_config, and status. An `UpdateTransferJobRequest` that specifies other fields are rejected with the error INVALID_ARGUMENT. Updating a job status to DELETED requires `storagetransfer.jobs.delete` permission.
     */
    transferJob?: Schema$TransferJob;
    /**
     * The field mask of the fields in `transferJob` that are to be updated in this request. Fields in `transferJob` that can be updated are: description, transfer_spec, notification_config, logging_config, and status. To update the `transfer_spec` of the job, a complete transfer specification must be provided. An incomplete specification missing any required fields is rejected with the error INVALID_ARGUMENT.
     */
    updateTransferJobFieldMask?: string | null;
  }

  export class Resource$Googleserviceaccounts {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Returns the Google service account that is used by Storage Transfer Service to access buckets in the project where transfers run or in other projects. Each Google service account is associated with one Google Cloud project. Users should add this service account to the Google Cloud Storage bucket ACLs to grant access to Storage Transfer Service. This service account is created and owned by Storage Transfer Service and can only be used by Storage Transfer Service.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/storagetransfer.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const storagetransfer = google.storagetransfer('v1');
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
     *   const res = await storagetransfer.googleServiceAccounts.get({
     *     // Required. The ID of the Google Cloud project that the Google service account is associated with.
     *     projectId: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "accountEmail": "my_accountEmail",
     *   //   "subjectId": "my_subjectId"
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
      params: Params$Resource$Googleserviceaccounts$Get,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    get(
      params?: Params$Resource$Googleserviceaccounts$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleServiceAccount>;
    get(
      params: Params$Resource$Googleserviceaccounts$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Googleserviceaccounts$Get,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleServiceAccount>,
      callback: BodyResponseCallback<Schema$GoogleServiceAccount>
    ): void;
    get(
      params: Params$Resource$Googleserviceaccounts$Get,
      callback: BodyResponseCallback<Schema$GoogleServiceAccount>
    ): void;
    get(callback: BodyResponseCallback<Schema$GoogleServiceAccount>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Googleserviceaccounts$Get
        | BodyResponseCallback<Schema$GoogleServiceAccount>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleServiceAccount>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleServiceAccount>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleServiceAccount>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Googleserviceaccounts$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Googleserviceaccounts$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://storagetransfer.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/googleServiceAccounts/{projectId}').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['projectId'],
        pathParams: ['projectId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$GoogleServiceAccount>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleServiceAccount>(parameters);
      }
    }
  }

  export interface Params$Resource$Googleserviceaccounts$Get
    extends StandardParameters {
    /**
     * Required. The ID of the Google Cloud project that the Google service account is associated with.
     */
    projectId?: string;
  }

  export class Resource$Projects {
    context: APIRequestContext;
    agentPools: Resource$Projects$Agentpools;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.agentPools = new Resource$Projects$Agentpools(this.context);
    }
  }

  export class Resource$Projects$Agentpools {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Creates an agent pool resource.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/storagetransfer.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const storagetransfer = google.storagetransfer('v1');
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
     *   const res = await storagetransfer.projects.agentPools.create({
     *     // Required. The ID of the agent pool to create. The `agent_pool_id` must meet the following requirements: * Length of 128 characters or less. * Not start with the string `goog`. * Start with a lowercase ASCII character, followed by: * Zero or more: lowercase Latin alphabet characters, numerals, hyphens (`-`), periods (`.`), underscores (`_`), or tildes (`~`). * One or more numerals or lowercase ASCII characters. As expressed by the regular expression: `^(?!goog)[a-z]([a-z0-9-._~]*[a-z0-9])?$`.
     *     agentPoolId: 'placeholder-value',
     *     // Required. The ID of the Google Cloud project that owns the agent pool.
     *     projectId: '[^/]+',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "bandwidthLimit": {},
     *       //   "displayName": "my_displayName",
     *       //   "name": "my_name",
     *       //   "state": "my_state"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "bandwidthLimit": {},
     *   //   "displayName": "my_displayName",
     *   //   "name": "my_name",
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
    create(
      params: Params$Resource$Projects$Agentpools$Create,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    create(
      params?: Params$Resource$Projects$Agentpools$Create,
      options?: MethodOptions
    ): GaxiosPromise<Schema$AgentPool>;
    create(
      params: Params$Resource$Projects$Agentpools$Create,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    create(
      params: Params$Resource$Projects$Agentpools$Create,
      options: MethodOptions | BodyResponseCallback<Schema$AgentPool>,
      callback: BodyResponseCallback<Schema$AgentPool>
    ): void;
    create(
      params: Params$Resource$Projects$Agentpools$Create,
      callback: BodyResponseCallback<Schema$AgentPool>
    ): void;
    create(callback: BodyResponseCallback<Schema$AgentPool>): void;
    create(
      paramsOrCallback?:
        | Params$Resource$Projects$Agentpools$Create
        | BodyResponseCallback<Schema$AgentPool>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$AgentPool>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$AgentPool>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$AgentPool> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Agentpools$Create;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Agentpools$Create;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://storagetransfer.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/projects/{+projectId}/agentPools').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['projectId'],
        pathParams: ['projectId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$AgentPool>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$AgentPool>(parameters);
      }
    }

    /**
     * Deletes an agent pool.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/storagetransfer.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const storagetransfer = google.storagetransfer('v1');
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
     *   const res = await storagetransfer.projects.agentPools.delete({
     *     // Required. The name of the agent pool to delete.
     *     name: 'projects/my-project/agentPools/my-agentPool',
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
      params: Params$Resource$Projects$Agentpools$Delete,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    delete(
      params?: Params$Resource$Projects$Agentpools$Delete,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Empty>;
    delete(
      params: Params$Resource$Projects$Agentpools$Delete,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    delete(
      params: Params$Resource$Projects$Agentpools$Delete,
      options: MethodOptions | BodyResponseCallback<Schema$Empty>,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    delete(
      params: Params$Resource$Projects$Agentpools$Delete,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    delete(callback: BodyResponseCallback<Schema$Empty>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Projects$Agentpools$Delete
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
        {}) as Params$Resource$Projects$Agentpools$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Agentpools$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://storagetransfer.googleapis.com/';
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
     * Gets an agent pool.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/storagetransfer.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const storagetransfer = google.storagetransfer('v1');
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
     *   const res = await storagetransfer.projects.agentPools.get({
     *     // Required. The name of the agent pool to get.
     *     name: 'projects/my-project/agentPools/my-agentPool',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "bandwidthLimit": {},
     *   //   "displayName": "my_displayName",
     *   //   "name": "my_name",
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
      params: Params$Resource$Projects$Agentpools$Get,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    get(
      params?: Params$Resource$Projects$Agentpools$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$AgentPool>;
    get(
      params: Params$Resource$Projects$Agentpools$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Projects$Agentpools$Get,
      options: MethodOptions | BodyResponseCallback<Schema$AgentPool>,
      callback: BodyResponseCallback<Schema$AgentPool>
    ): void;
    get(
      params: Params$Resource$Projects$Agentpools$Get,
      callback: BodyResponseCallback<Schema$AgentPool>
    ): void;
    get(callback: BodyResponseCallback<Schema$AgentPool>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Projects$Agentpools$Get
        | BodyResponseCallback<Schema$AgentPool>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$AgentPool>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$AgentPool>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$AgentPool> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Agentpools$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Agentpools$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://storagetransfer.googleapis.com/';
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
        createAPIRequest<Schema$AgentPool>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$AgentPool>(parameters);
      }
    }

    /**
     * Lists agent pools.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/storagetransfer.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const storagetransfer = google.storagetransfer('v1');
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
     *   const res = await storagetransfer.projects.agentPools.list({
     *     // An optional list of query parameters specified as JSON text in the form of: `{"agentPoolNames":["agentpool1","agentpool2",...]\}` Since `agentPoolNames` support multiple values, its values must be specified with array notation. When the filter is either empty or not provided, the list returns all agent pools for the project.
     *     filter: 'placeholder-value',
     *     // The list page size. The max allowed value is `256`.
     *     pageSize: 'placeholder-value',
     *     // The list page token.
     *     pageToken: 'placeholder-value',
     *     // Required. The ID of the Google Cloud project that owns the job.
     *     projectId: '[^/]+',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "agentPools": [],
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
      params: Params$Resource$Projects$Agentpools$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Projects$Agentpools$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ListAgentPoolsResponse>;
    list(
      params: Params$Resource$Projects$Agentpools$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Projects$Agentpools$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ListAgentPoolsResponse>,
      callback: BodyResponseCallback<Schema$ListAgentPoolsResponse>
    ): void;
    list(
      params: Params$Resource$Projects$Agentpools$List,
      callback: BodyResponseCallback<Schema$ListAgentPoolsResponse>
    ): void;
    list(callback: BodyResponseCallback<Schema$ListAgentPoolsResponse>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Projects$Agentpools$List
        | BodyResponseCallback<Schema$ListAgentPoolsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ListAgentPoolsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ListAgentPoolsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$ListAgentPoolsResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Agentpools$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Agentpools$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://storagetransfer.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/projects/{+projectId}/agentPools').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['projectId'],
        pathParams: ['projectId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$ListAgentPoolsResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ListAgentPoolsResponse>(parameters);
      }
    }

    /**
     * Updates an existing agent pool resource.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/storagetransfer.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const storagetransfer = google.storagetransfer('v1');
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
     *   const res = await storagetransfer.projects.agentPools.patch({
     *     // Required. Specifies a unique string that identifies the agent pool. Format: `projects/{project_id\}/agentPools/{agent_pool_id\}`
     *     name: 'projects/my-project/agentPools/my-agentPool',
     *     // The [field mask] (https://developers.google.com/protocol-buffers/docs/reference/google.protobuf) of the fields in `agentPool` to update in this request. The following `agentPool` fields can be updated: * display_name * bandwidth_limit
     *     updateMask: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "bandwidthLimit": {},
     *       //   "displayName": "my_displayName",
     *       //   "name": "my_name",
     *       //   "state": "my_state"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "bandwidthLimit": {},
     *   //   "displayName": "my_displayName",
     *   //   "name": "my_name",
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
    patch(
      params: Params$Resource$Projects$Agentpools$Patch,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    patch(
      params?: Params$Resource$Projects$Agentpools$Patch,
      options?: MethodOptions
    ): GaxiosPromise<Schema$AgentPool>;
    patch(
      params: Params$Resource$Projects$Agentpools$Patch,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    patch(
      params: Params$Resource$Projects$Agentpools$Patch,
      options: MethodOptions | BodyResponseCallback<Schema$AgentPool>,
      callback: BodyResponseCallback<Schema$AgentPool>
    ): void;
    patch(
      params: Params$Resource$Projects$Agentpools$Patch,
      callback: BodyResponseCallback<Schema$AgentPool>
    ): void;
    patch(callback: BodyResponseCallback<Schema$AgentPool>): void;
    patch(
      paramsOrCallback?:
        | Params$Resource$Projects$Agentpools$Patch
        | BodyResponseCallback<Schema$AgentPool>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$AgentPool>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$AgentPool>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$AgentPool> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Agentpools$Patch;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Agentpools$Patch;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://storagetransfer.googleapis.com/';
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
        createAPIRequest<Schema$AgentPool>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$AgentPool>(parameters);
      }
    }
  }

  export interface Params$Resource$Projects$Agentpools$Create
    extends StandardParameters {
    /**
     * Required. The ID of the agent pool to create. The `agent_pool_id` must meet the following requirements: * Length of 128 characters or less. * Not start with the string `goog`. * Start with a lowercase ASCII character, followed by: * Zero or more: lowercase Latin alphabet characters, numerals, hyphens (`-`), periods (`.`), underscores (`_`), or tildes (`~`). * One or more numerals or lowercase ASCII characters. As expressed by the regular expression: `^(?!goog)[a-z]([a-z0-9-._~]*[a-z0-9])?$`.
     */
    agentPoolId?: string;
    /**
     * Required. The ID of the Google Cloud project that owns the agent pool.
     */
    projectId?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$AgentPool;
  }
  export interface Params$Resource$Projects$Agentpools$Delete
    extends StandardParameters {
    /**
     * Required. The name of the agent pool to delete.
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Agentpools$Get
    extends StandardParameters {
    /**
     * Required. The name of the agent pool to get.
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Agentpools$List
    extends StandardParameters {
    /**
     * An optional list of query parameters specified as JSON text in the form of: `{"agentPoolNames":["agentpool1","agentpool2",...]\}` Since `agentPoolNames` support multiple values, its values must be specified with array notation. When the filter is either empty or not provided, the list returns all agent pools for the project.
     */
    filter?: string;
    /**
     * The list page size. The max allowed value is `256`.
     */
    pageSize?: number;
    /**
     * The list page token.
     */
    pageToken?: string;
    /**
     * Required. The ID of the Google Cloud project that owns the job.
     */
    projectId?: string;
  }
  export interface Params$Resource$Projects$Agentpools$Patch
    extends StandardParameters {
    /**
     * Required. Specifies a unique string that identifies the agent pool. Format: `projects/{project_id\}/agentPools/{agent_pool_id\}`
     */
    name?: string;
    /**
     * The [field mask] (https://developers.google.com/protocol-buffers/docs/reference/google.protobuf) of the fields in `agentPool` to update in this request. The following `agentPool` fields can be updated: * display_name * bandwidth_limit
     */
    updateMask?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$AgentPool;
  }

  export class Resource$Transferjobs {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Creates a transfer job that runs periodically.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/storagetransfer.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const storagetransfer = google.storagetransfer('v1');
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
     *   const res = await storagetransfer.transferJobs.create({
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "creationTime": "my_creationTime",
     *       //   "deletionTime": "my_deletionTime",
     *       //   "description": "my_description",
     *       //   "eventStream": {},
     *       //   "lastModificationTime": "my_lastModificationTime",
     *       //   "latestOperationName": "my_latestOperationName",
     *       //   "loggingConfig": {},
     *       //   "name": "my_name",
     *       //   "notificationConfig": {},
     *       //   "projectId": "my_projectId",
     *       //   "schedule": {},
     *       //   "status": "my_status",
     *       //   "transferSpec": {}
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "creationTime": "my_creationTime",
     *   //   "deletionTime": "my_deletionTime",
     *   //   "description": "my_description",
     *   //   "eventStream": {},
     *   //   "lastModificationTime": "my_lastModificationTime",
     *   //   "latestOperationName": "my_latestOperationName",
     *   //   "loggingConfig": {},
     *   //   "name": "my_name",
     *   //   "notificationConfig": {},
     *   //   "projectId": "my_projectId",
     *   //   "schedule": {},
     *   //   "status": "my_status",
     *   //   "transferSpec": {}
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
      params: Params$Resource$Transferjobs$Create,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    create(
      params?: Params$Resource$Transferjobs$Create,
      options?: MethodOptions
    ): GaxiosPromise<Schema$TransferJob>;
    create(
      params: Params$Resource$Transferjobs$Create,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    create(
      params: Params$Resource$Transferjobs$Create,
      options: MethodOptions | BodyResponseCallback<Schema$TransferJob>,
      callback: BodyResponseCallback<Schema$TransferJob>
    ): void;
    create(
      params: Params$Resource$Transferjobs$Create,
      callback: BodyResponseCallback<Schema$TransferJob>
    ): void;
    create(callback: BodyResponseCallback<Schema$TransferJob>): void;
    create(
      paramsOrCallback?:
        | Params$Resource$Transferjobs$Create
        | BodyResponseCallback<Schema$TransferJob>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$TransferJob>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$TransferJob>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$TransferJob> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Transferjobs$Create;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Transferjobs$Create;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://storagetransfer.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/transferJobs').replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: [],
        pathParams: [],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$TransferJob>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$TransferJob>(parameters);
      }
    }

    /**
     * Deletes a transfer job. Deleting a transfer job sets its status to DELETED.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/storagetransfer.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const storagetransfer = google.storagetransfer('v1');
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
     *   const res = await storagetransfer.transferJobs.delete({
     *     // Required. The job to delete.
     *     jobName: 'transferJobs/.*',
     *     // Required. The ID of the Google Cloud project that owns the job.
     *     projectId: 'placeholder-value',
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
      params: Params$Resource$Transferjobs$Delete,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    delete(
      params?: Params$Resource$Transferjobs$Delete,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Empty>;
    delete(
      params: Params$Resource$Transferjobs$Delete,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    delete(
      params: Params$Resource$Transferjobs$Delete,
      options: MethodOptions | BodyResponseCallback<Schema$Empty>,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    delete(
      params: Params$Resource$Transferjobs$Delete,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    delete(callback: BodyResponseCallback<Schema$Empty>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Transferjobs$Delete
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
        {}) as Params$Resource$Transferjobs$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Transferjobs$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://storagetransfer.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+jobName}').replace(/([^:]\/)\/+/g, '$1'),
            method: 'DELETE',
          },
          options
        ),
        params,
        requiredParams: ['jobName', 'projectId'],
        pathParams: ['jobName'],
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
     * Gets a transfer job.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/storagetransfer.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const storagetransfer = google.storagetransfer('v1');
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
     *   const res = await storagetransfer.transferJobs.get({
     *     // Required. The job to get.
     *     jobName: 'transferJobs/.*',
     *     // Required. The ID of the Google Cloud project that owns the job.
     *     projectId: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "creationTime": "my_creationTime",
     *   //   "deletionTime": "my_deletionTime",
     *   //   "description": "my_description",
     *   //   "eventStream": {},
     *   //   "lastModificationTime": "my_lastModificationTime",
     *   //   "latestOperationName": "my_latestOperationName",
     *   //   "loggingConfig": {},
     *   //   "name": "my_name",
     *   //   "notificationConfig": {},
     *   //   "projectId": "my_projectId",
     *   //   "schedule": {},
     *   //   "status": "my_status",
     *   //   "transferSpec": {}
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
      params: Params$Resource$Transferjobs$Get,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    get(
      params?: Params$Resource$Transferjobs$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$TransferJob>;
    get(
      params: Params$Resource$Transferjobs$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Transferjobs$Get,
      options: MethodOptions | BodyResponseCallback<Schema$TransferJob>,
      callback: BodyResponseCallback<Schema$TransferJob>
    ): void;
    get(
      params: Params$Resource$Transferjobs$Get,
      callback: BodyResponseCallback<Schema$TransferJob>
    ): void;
    get(callback: BodyResponseCallback<Schema$TransferJob>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Transferjobs$Get
        | BodyResponseCallback<Schema$TransferJob>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$TransferJob>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$TransferJob>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$TransferJob> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback || {}) as Params$Resource$Transferjobs$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Transferjobs$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://storagetransfer.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+jobName}').replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['jobName', 'projectId'],
        pathParams: ['jobName'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$TransferJob>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$TransferJob>(parameters);
      }
    }

    /**
     * Lists transfer jobs.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/storagetransfer.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const storagetransfer = google.storagetransfer('v1');
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
     *   const res = await storagetransfer.transferJobs.list({
     *     // Required. A list of query parameters specified as JSON text in the form of: `{"projectId":"my_project_id", "jobNames":["jobid1","jobid2",...], "jobStatuses":["status1","status2",...]\}` Since `jobNames` and `jobStatuses` support multiple values, their values must be specified with array notation. `projectId` is required. `jobNames` and `jobStatuses` are optional. The valid values for `jobStatuses` are case-insensitive: ENABLED, DISABLED, and DELETED.
     *     filter: 'placeholder-value',
     *     // The list page size. The max allowed value is 256.
     *     pageSize: 'placeholder-value',
     *     // The list page token.
     *     pageToken: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "nextPageToken": "my_nextPageToken",
     *   //   "transferJobs": []
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
      params: Params$Resource$Transferjobs$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Transferjobs$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ListTransferJobsResponse>;
    list(
      params: Params$Resource$Transferjobs$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Transferjobs$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ListTransferJobsResponse>,
      callback: BodyResponseCallback<Schema$ListTransferJobsResponse>
    ): void;
    list(
      params: Params$Resource$Transferjobs$List,
      callback: BodyResponseCallback<Schema$ListTransferJobsResponse>
    ): void;
    list(callback: BodyResponseCallback<Schema$ListTransferJobsResponse>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Transferjobs$List
        | BodyResponseCallback<Schema$ListTransferJobsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ListTransferJobsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ListTransferJobsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$ListTransferJobsResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Transferjobs$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Transferjobs$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://storagetransfer.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/transferJobs').replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['filter'],
        pathParams: [],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$ListTransferJobsResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ListTransferJobsResponse>(parameters);
      }
    }

    /**
     * Updates a transfer job. Updating a job's transfer spec does not affect transfer operations that are running already. **Note:** The job's status field can be modified using this RPC (for example, to set a job's status to DELETED, DISABLED, or ENABLED).
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/storagetransfer.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const storagetransfer = google.storagetransfer('v1');
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
     *   const res = await storagetransfer.transferJobs.patch({
     *     // Required. The name of job to update.
     *     jobName: 'transferJobs/.*',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "projectId": "my_projectId",
     *       //   "transferJob": {},
     *       //   "updateTransferJobFieldMask": "my_updateTransferJobFieldMask"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "creationTime": "my_creationTime",
     *   //   "deletionTime": "my_deletionTime",
     *   //   "description": "my_description",
     *   //   "eventStream": {},
     *   //   "lastModificationTime": "my_lastModificationTime",
     *   //   "latestOperationName": "my_latestOperationName",
     *   //   "loggingConfig": {},
     *   //   "name": "my_name",
     *   //   "notificationConfig": {},
     *   //   "projectId": "my_projectId",
     *   //   "schedule": {},
     *   //   "status": "my_status",
     *   //   "transferSpec": {}
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
      params: Params$Resource$Transferjobs$Patch,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    patch(
      params?: Params$Resource$Transferjobs$Patch,
      options?: MethodOptions
    ): GaxiosPromise<Schema$TransferJob>;
    patch(
      params: Params$Resource$Transferjobs$Patch,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    patch(
      params: Params$Resource$Transferjobs$Patch,
      options: MethodOptions | BodyResponseCallback<Schema$TransferJob>,
      callback: BodyResponseCallback<Schema$TransferJob>
    ): void;
    patch(
      params: Params$Resource$Transferjobs$Patch,
      callback: BodyResponseCallback<Schema$TransferJob>
    ): void;
    patch(callback: BodyResponseCallback<Schema$TransferJob>): void;
    patch(
      paramsOrCallback?:
        | Params$Resource$Transferjobs$Patch
        | BodyResponseCallback<Schema$TransferJob>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$TransferJob>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$TransferJob>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$TransferJob> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Transferjobs$Patch;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Transferjobs$Patch;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://storagetransfer.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+jobName}').replace(/([^:]\/)\/+/g, '$1'),
            method: 'PATCH',
          },
          options
        ),
        params,
        requiredParams: ['jobName'],
        pathParams: ['jobName'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$TransferJob>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$TransferJob>(parameters);
      }
    }

    /**
     * Starts a new operation for the specified transfer job. A `TransferJob` has a maximum of one active `TransferOperation`. If this method is called while a `TransferOperation` is active, an error is returned.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/storagetransfer.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const storagetransfer = google.storagetransfer('v1');
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
     *   const res = await storagetransfer.transferJobs.run({
     *     // Required. The name of the transfer job.
     *     jobName: 'transferJobs/.*',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "projectId": "my_projectId"
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
    run(
      params: Params$Resource$Transferjobs$Run,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    run(
      params?: Params$Resource$Transferjobs$Run,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Operation>;
    run(
      params: Params$Resource$Transferjobs$Run,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    run(
      params: Params$Resource$Transferjobs$Run,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    run(
      params: Params$Resource$Transferjobs$Run,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    run(callback: BodyResponseCallback<Schema$Operation>): void;
    run(
      paramsOrCallback?:
        | Params$Resource$Transferjobs$Run
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
      let params = (paramsOrCallback || {}) as Params$Resource$Transferjobs$Run;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Transferjobs$Run;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://storagetransfer.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+jobName}:run').replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['jobName'],
        pathParams: ['jobName'],
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

  export interface Params$Resource$Transferjobs$Create
    extends StandardParameters {
    /**
     * Request body metadata
     */
    requestBody?: Schema$TransferJob;
  }
  export interface Params$Resource$Transferjobs$Delete
    extends StandardParameters {
    /**
     * Required. The job to delete.
     */
    jobName?: string;
    /**
     * Required. The ID of the Google Cloud project that owns the job.
     */
    projectId?: string;
  }
  export interface Params$Resource$Transferjobs$Get extends StandardParameters {
    /**
     * Required. The job to get.
     */
    jobName?: string;
    /**
     * Required. The ID of the Google Cloud project that owns the job.
     */
    projectId?: string;
  }
  export interface Params$Resource$Transferjobs$List
    extends StandardParameters {
    /**
     * Required. A list of query parameters specified as JSON text in the form of: `{"projectId":"my_project_id", "jobNames":["jobid1","jobid2",...], "jobStatuses":["status1","status2",...]\}` Since `jobNames` and `jobStatuses` support multiple values, their values must be specified with array notation. `projectId` is required. `jobNames` and `jobStatuses` are optional. The valid values for `jobStatuses` are case-insensitive: ENABLED, DISABLED, and DELETED.
     */
    filter?: string;
    /**
     * The list page size. The max allowed value is 256.
     */
    pageSize?: number;
    /**
     * The list page token.
     */
    pageToken?: string;
  }
  export interface Params$Resource$Transferjobs$Patch
    extends StandardParameters {
    /**
     * Required. The name of job to update.
     */
    jobName?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$UpdateTransferJobRequest;
  }
  export interface Params$Resource$Transferjobs$Run extends StandardParameters {
    /**
     * Required. The name of the transfer job.
     */
    jobName?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$RunTransferJobRequest;
  }

  export class Resource$Transferoperations {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Cancels a transfer. Use the transferOperations.get method to check if the cancellation succeeded or if the operation completed despite the `cancel` request. When you cancel an operation, the currently running transfer is interrupted. For recurring transfer jobs, the next instance of the transfer job will still run. For example, if your job is configured to run every day at 1pm and you cancel Monday's operation at 1:05pm, Monday's transfer will stop. However, a transfer job will still be attempted on Tuesday. This applies only to currently running operations. If an operation is not currently running, `cancel` does nothing. *Caution:* Canceling a transfer job can leave your data in an unknown state. We recommend that you restore the state at both the destination and the source after the `cancel` request completes so that your data is in a consistent state. When you cancel a job, the next job computes a delta of files and may repair any inconsistent state. For instance, if you run a job every day, and today's job found 10 new files and transferred five files before you canceled the job, tomorrow's transfer operation will compute a new delta with the five files that were not copied today plus any new files discovered tomorrow.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/storagetransfer.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const storagetransfer = google.storagetransfer('v1');
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
     *   const res = await storagetransfer.transferOperations.cancel({
     *     // The name of the operation resource to be cancelled.
     *     name: 'transferOperations/.*',
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
      params: Params$Resource$Transferoperations$Cancel,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    cancel(
      params?: Params$Resource$Transferoperations$Cancel,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Empty>;
    cancel(
      params: Params$Resource$Transferoperations$Cancel,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    cancel(
      params: Params$Resource$Transferoperations$Cancel,
      options: MethodOptions | BodyResponseCallback<Schema$Empty>,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    cancel(
      params: Params$Resource$Transferoperations$Cancel,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    cancel(callback: BodyResponseCallback<Schema$Empty>): void;
    cancel(
      paramsOrCallback?:
        | Params$Resource$Transferoperations$Cancel
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
        {}) as Params$Resource$Transferoperations$Cancel;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Transferoperations$Cancel;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://storagetransfer.googleapis.com/';
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
     * Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/storagetransfer.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const storagetransfer = google.storagetransfer('v1');
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
     *   const res = await storagetransfer.transferOperations.get({
     *     // The name of the operation resource.
     *     name: 'transferOperations/.*',
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
      params: Params$Resource$Transferoperations$Get,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    get(
      params?: Params$Resource$Transferoperations$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Operation>;
    get(
      params: Params$Resource$Transferoperations$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Transferoperations$Get,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    get(
      params: Params$Resource$Transferoperations$Get,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    get(callback: BodyResponseCallback<Schema$Operation>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Transferoperations$Get
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
        {}) as Params$Resource$Transferoperations$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Transferoperations$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://storagetransfer.googleapis.com/';
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
     * Lists transfer operations. Operations are ordered by their creation time in reverse chronological order.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/storagetransfer.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const storagetransfer = google.storagetransfer('v1');
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
     *   const res = await storagetransfer.transferOperations.list({
     *     // Required. A list of query parameters specified as JSON text in the form of: `{"projectId":"my_project_id", "jobNames":["jobid1","jobid2",...], "operationNames":["opid1","opid2",...], "transferStatuses":["status1","status2",...]\}` Since `jobNames`, `operationNames`, and `transferStatuses` support multiple values, they must be specified with array notation. `projectId` is required. `jobNames`, `operationNames`, and `transferStatuses` are optional. The valid values for `transferStatuses` are case-insensitive: IN_PROGRESS, PAUSED, SUCCESS, FAILED, and ABORTED.
     *     filter: 'placeholder-value',
     *     // Required. The name of the type being listed; must be `transferOperations`.
     *     name: 'transferOperations',
     *     // The list page size. The max allowed value is 256.
     *     pageSize: 'placeholder-value',
     *     // The list page token.
     *     pageToken: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "nextPageToken": "my_nextPageToken",
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
    list(
      params: Params$Resource$Transferoperations$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Transferoperations$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ListOperationsResponse>;
    list(
      params: Params$Resource$Transferoperations$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Transferoperations$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ListOperationsResponse>,
      callback: BodyResponseCallback<Schema$ListOperationsResponse>
    ): void;
    list(
      params: Params$Resource$Transferoperations$List,
      callback: BodyResponseCallback<Schema$ListOperationsResponse>
    ): void;
    list(callback: BodyResponseCallback<Schema$ListOperationsResponse>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Transferoperations$List
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
        {}) as Params$Resource$Transferoperations$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Transferoperations$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://storagetransfer.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['name', 'filter'],
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

    /**
     * Pauses a transfer operation.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/storagetransfer.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const storagetransfer = google.storagetransfer('v1');
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
     *   const res = await storagetransfer.transferOperations.pause({
     *     // Required. The name of the transfer operation.
     *     name: 'transferOperations/.*',
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
    pause(
      params: Params$Resource$Transferoperations$Pause,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    pause(
      params?: Params$Resource$Transferoperations$Pause,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Empty>;
    pause(
      params: Params$Resource$Transferoperations$Pause,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    pause(
      params: Params$Resource$Transferoperations$Pause,
      options: MethodOptions | BodyResponseCallback<Schema$Empty>,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    pause(
      params: Params$Resource$Transferoperations$Pause,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    pause(callback: BodyResponseCallback<Schema$Empty>): void;
    pause(
      paramsOrCallback?:
        | Params$Resource$Transferoperations$Pause
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
        {}) as Params$Resource$Transferoperations$Pause;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Transferoperations$Pause;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://storagetransfer.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}:pause').replace(/([^:]\/)\/+/g, '$1'),
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
     * Resumes a transfer operation that is paused.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/storagetransfer.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const storagetransfer = google.storagetransfer('v1');
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
     *   const res = await storagetransfer.transferOperations.resume({
     *     // Required. The name of the transfer operation.
     *     name: 'transferOperations/.*',
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
    resume(
      params: Params$Resource$Transferoperations$Resume,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    resume(
      params?: Params$Resource$Transferoperations$Resume,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Empty>;
    resume(
      params: Params$Resource$Transferoperations$Resume,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    resume(
      params: Params$Resource$Transferoperations$Resume,
      options: MethodOptions | BodyResponseCallback<Schema$Empty>,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    resume(
      params: Params$Resource$Transferoperations$Resume,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    resume(callback: BodyResponseCallback<Schema$Empty>): void;
    resume(
      paramsOrCallback?:
        | Params$Resource$Transferoperations$Resume
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
        {}) as Params$Resource$Transferoperations$Resume;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Transferoperations$Resume;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://storagetransfer.googleapis.com/';
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
        createAPIRequest<Schema$Empty>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Empty>(parameters);
      }
    }
  }

  export interface Params$Resource$Transferoperations$Cancel
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
  export interface Params$Resource$Transferoperations$Get
    extends StandardParameters {
    /**
     * The name of the operation resource.
     */
    name?: string;
  }
  export interface Params$Resource$Transferoperations$List
    extends StandardParameters {
    /**
     * Required. A list of query parameters specified as JSON text in the form of: `{"projectId":"my_project_id", "jobNames":["jobid1","jobid2",...], "operationNames":["opid1","opid2",...], "transferStatuses":["status1","status2",...]\}` Since `jobNames`, `operationNames`, and `transferStatuses` support multiple values, they must be specified with array notation. `projectId` is required. `jobNames`, `operationNames`, and `transferStatuses` are optional. The valid values for `transferStatuses` are case-insensitive: IN_PROGRESS, PAUSED, SUCCESS, FAILED, and ABORTED.
     */
    filter?: string;
    /**
     * Required. The name of the type being listed; must be `transferOperations`.
     */
    name?: string;
    /**
     * The list page size. The max allowed value is 256.
     */
    pageSize?: number;
    /**
     * The list page token.
     */
    pageToken?: string;
  }
  export interface Params$Resource$Transferoperations$Pause
    extends StandardParameters {
    /**
     * Required. The name of the transfer operation.
     */
    name?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$PauseTransferOperationRequest;
  }
  export interface Params$Resource$Transferoperations$Resume
    extends StandardParameters {
    /**
     * Required. The name of the transfer operation.
     */
    name?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$ResumeTransferOperationRequest;
  }
}
