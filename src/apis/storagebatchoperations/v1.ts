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

export namespace storagebatchoperations_v1 {
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
   * Storage Batch Operations API
   *
   *
   *
   * @example
   * ```js
   * const {google} = require('googleapis');
   * const storagebatchoperations = google.storagebatchoperations('v1');
   * ```
   */
  export class Storagebatchoperations {
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
   * Represents updates to existing access-control entries on an object.
   */
  export interface Schema$AccessControlsUpdates {
    /**
     * Optional. Grants to add or update. If a grant for same entity exists, its role is updated.
     */
    grants?: Schema$ObjectAccessControl[];
    /**
     * Optional. Entities for which all grants should be removed. An entity can't be in both `grants` and `remove_entities`.
     */
    removeEntities?: string[] | null;
  }
  /**
   * Describes configuration of a single bucket and its objects to be transformed.
   */
  export interface Schema$Bucket {
    /**
     * Required. Bucket name for the objects to be transformed.
     */
    bucket?: string | null;
    /**
     * Specifies objects in a manifest file.
     */
    manifest?: Schema$Manifest;
    /**
     * Specifies objects matching a prefix set.
     */
    prefixList?: Schema$PrefixList;
  }
  /**
   * Describes list of buckets and their objects to be transformed.
   */
  export interface Schema$BucketList {
    /**
     * Required. List of buckets and their objects to be transformed. You can specify only one bucket per job. If multiple buckets are specified, an error occurs.
     */
    buckets?: Schema$Bucket[];
  }
  /**
   * BucketOperation represents a bucket-level breakdown of a Job.
   */
  export interface Schema$BucketOperation {
    /**
     * The bucket name of the objects to be transformed in the BucketOperation.
     */
    bucketName?: string | null;
    /**
     * Output only. The time that the BucketOperation was completed.
     */
    completeTime?: string | null;
    /**
     * Output only. Information about the progress of the bucket operation.
     */
    counters?: Schema$Counters;
    /**
     * Output only. The time that the BucketOperation was created.
     */
    createTime?: string | null;
    /**
     * Delete objects.
     */
    deleteObject?: Schema$DeleteObject;
    /**
     * Output only. Summarizes errors encountered with sample error log entries.
     */
    errorSummaries?: Schema$ErrorSummary[];
    /**
     * Specifies objects in a manifest file.
     */
    manifest?: Schema$Manifest;
    /**
     * Identifier. The resource name of the BucketOperation. This is defined by the service. Format: `projects/{project_id\}/locations/global/jobs/{job_id\}/bucketOperations/{bucket_operation\}`.
     */
    name?: string | null;
    /**
     * Specifies objects matching a prefix set.
     */
    prefixList?: Schema$PrefixList;
    /**
     * Specifies objects matching the object filters in a project source.
     */
    projectSource?: Schema$ProjectSource;
    /**
     * Updates object metadata. Allows updating fixed-key and custom metadata and fixed-key metadata i.e. Cache-Control, Content-Disposition, Content-Encoding, Content-Language, Content-Type, Custom-Time.
     */
    putMetadata?: Schema$PutMetadata;
    /**
     * Changes object hold status.
     */
    putObjectHold?: Schema$PutObjectHold;
    /**
     * Rewrite the object and updates metadata like KMS key.
     */
    rewriteObject?: Schema$RewriteObject;
    /**
     * Updates object ACLs.
     */
    setObjectAcls?: Schema$SetObjectAcls;
    /**
     * Output only. The time that the BucketOperation was started.
     */
    startTime?: string | null;
    /**
     * Output only. State of the BucketOperation.
     */
    state?: string | null;
    /**
     * Update object custom context.
     */
    updateObjectCustomContext?: Schema$UpdateObjectCustomContext;
  }
  /**
   * Message for Job to Cancel
   */
  export interface Schema$CancelJobRequest {
    /**
     * Optional. An optional request ID to identify requests. Specify a unique request ID in case you need to retry your request. Requests with same `request_id` are ignored for at least 60 minutes since the first request. The request ID must be a valid UUID with the exception that zero UUID isn't supported (00000000-0000-0000-0000-000000000000).
     */
    requestId?: string | null;
  }
  /**
   * Message for response to cancel Job.
   */
  export interface Schema$CancelJobResponse {}
  /**
   * The request message for Operations.CancelOperation.
   */
  export interface Schema$CancelOperationRequest {}
  /**
   * Describes details about the progress of the job.
   */
  export interface Schema$Counters {
    /**
     * Output only. The number of objects that failed due to user errors or service errors.
     */
    failedObjectCount?: string | null;
    /**
     * Output only. Number of object custom contexts created. This field is only populated for jobs with the UpdateObjectCustomContext transformation.
     */
    objectCustomContextsCreated?: string | null;
    /**
     * Output only. Number of object custom contexts deleted. This field is only populated for jobs with the UpdateObjectCustomContext transformation.
     */
    objectCustomContextsDeleted?: string | null;
    /**
     * Output only. Number of object custom contexts updated. This counter tracks custom contexts where the key already existed, but the payload was modified. This field is only populated for jobs with the UpdateObjectCustomContext transformation.
     */
    objectCustomContextsUpdated?: string | null;
    /**
     * Output only. Number of objects completed.
     */
    succeededObjectCount?: string | null;
    /**
     * Output only. Number of bytes found from source. This field is only populated for jobs with a prefix list object configuration.
     */
    totalBytesFound?: string | null;
    /**
     * Output only. The total number of bytes affected by the transformation. For example, this counts bytes deleted for `DeleteObject` operations and bytes rewritten for `RewriteObject` operations.
     */
    totalBytesTransformed?: string | null;
    /**
     * Output only. Number of objects listed.
     */
    totalObjectCount?: string | null;
  }
  /**
   * Describes a collection of updates to apply to custom contexts identified by key.
   */
  export interface Schema$CustomContextUpdates {
    /**
     * Optional. Custom contexts to clear by key. A key can't be present in both `updates` and `keys_to_clear`.
     */
    keysToClear?: string[] | null;
    /**
     * Optional. Insert or update the existing custom contexts.
     */
    updates?: {[key: string]: Schema$ObjectCustomContextPayload} | null;
  }
  /**
   * Describes options to delete an object.
   */
  export interface Schema$DeleteObject {
    /**
     * Required. Controls deletion behavior when versioning is enabled for the object's bucket. If true, both live and noncurrent objects will be permanently deleted. Otherwise live objects in versioned buckets will become noncurrent and objects that were already noncurrent will be skipped. This setting doesn't have any impact on the Soft Delete feature. All objects deleted by this service can be be restored for the duration of the Soft Delete retention duration if enabled. If enabled and the manifest doesn't specify an object's generation, a `GetObjectMetadata` call is made to determine the live object generation.
     */
    permanentObjectDeletionEnabled?: boolean | null;
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
     * Optional. Output only. At most 5 error log entries are recorded for a given error code for a job.
     */
    errorDetails?: string[] | null;
    /**
     * Required. Output only. Object URL. e.g. gs://my_bucket/object.txt
     */
    objectUri?: string | null;
  }
  /**
   * A summary of errors by error code, plus a count and sample error log entries.
   */
  export interface Schema$ErrorSummary {
    /**
     * Required. The canonical error code.
     */
    errorCode?: string | null;
    /**
     * Required. Number of errors encountered per `error_code`.
     */
    errorCount?: string | null;
    /**
     * Required. Sample error logs.
     */
    errorLogEntries?: Schema$ErrorLogEntry[];
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
   * The storage batch operations job description.
   */
  export interface Schema$Job {
    /**
     * Specifies a list of buckets and their objects to be transformed.
     */
    bucketList?: Schema$BucketList;
    /**
     * Output only. The time that the job was completed.
     */
    completeTime?: string | null;
    /**
     * Output only. Information about the progress of the job.
     */
    counters?: Schema$Counters;
    /**
     * Output only. The time that the job was created.
     */
    createTime?: string | null;
    /**
     * Delete objects.
     */
    deleteObject?: Schema$DeleteObject;
    /**
     * Optional. A user-provided description for the job. Maximum length: 1024 bytes when unicode-encoded.
     */
    description?: string | null;
    /**
     * Optional. If true, the job runs in dry run mode, returning the total object count and, if the object configuration is a prefix list, the bytes found from source. No transformations are performed.
     */
    dryRun?: boolean | null;
    /**
     * Output only. Summarizes errors encountered with sample error log entries.
     */
    errorSummaries?: Schema$ErrorSummary[];
    /**
     * Output only. If true, this job operates on multiple buckets. Multi-bucket jobs are subject to different quota limits than single-bucket jobs.
     */
    isMultiBucketJob?: boolean | null;
    /**
     * Optional. Logging configuration.
     */
    loggingConfig?: Schema$LoggingConfig;
    /**
     * Identifier. The resource name of the job. Format: `projects/{project_id\}/locations/global/jobs/{job_id\}`. For example: `projects/123456/locations/global/jobs/job01`. `job_id` is unique in a given project.
     */
    name?: string | null;
    /**
     * Specifies a project source and filters to identify objects to be transformed.
     */
    projectSource?: Schema$ProjectSource;
    /**
     * Updates object metadata. Allows updating fixed-key and custom metadata. For example, `Cache-Control`, `Content-Disposition`, `Content-Encoding`, `Content-Language`, `Content-Type`, `Custom-Time`, and `Retention configuration`.
     */
    putMetadata?: Schema$PutMetadata;
    /**
     * Changes object hold status.
     */
    putObjectHold?: Schema$PutObjectHold;
    /**
     * Rewrite the object and updates metadata like KMS key.
     */
    rewriteObject?: Schema$RewriteObject;
    /**
     * Output only. The time that the job was scheduled.
     */
    scheduleTime?: string | null;
    /**
     * Updates object ACLs.
     */
    setObjectAcls?: Schema$SetObjectAcls;
    /**
     * Output only. State of the job.
     */
    state?: string | null;
    /**
     * Update object custom context.
     */
    updateObjectCustomContext?: Schema$UpdateObjectCustomContext;
  }
  /**
   * Message for response to listing BucketOperations
   */
  export interface Schema$ListBucketOperationsResponse {
    /**
     * A list of storage batch bucket operations.
     */
    bucketOperations?: Schema$BucketOperation[];
    /**
     * A token identifying a page of results.
     */
    nextPageToken?: string | null;
    /**
     * Locations that could not be reached.
     */
    unreachable?: string[] | null;
  }
  /**
   * Message for response to listing Jobs
   */
  export interface Schema$ListJobsResponse {
    /**
     * A list of storage batch jobs.
     */
    jobs?: Schema$Job[];
    /**
     * A token identifying a page of results.
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
   * Specifies the Cloud Logging behavior.
   */
  export interface Schema$LoggingConfig {
    /**
     * Required. Specifies the actions to be logged.
     */
    logActions?: string[] | null;
    /**
     * Required. States in which Action are logged.If empty, no logs are generated.
     */
    logActionStates?: string[] | null;
  }
  /**
   * Describes list of objects to be transformed.
   */
  export interface Schema$Manifest {
    /**
     * Required. Specify the manifest file location. The format of manifest location can be an absolute path to the object in the format of `gs://bucket_name/path/object_name`. For example, `gs://bucket_name/path/object_name.csv`. Alternatively, you can specify an absolute path with a single wildcard character in the file name, for example `gs://bucket_name/path/file_name*.csv`. If the manifest location is specified with a wildcard, objects in all manifest files matching the pattern will be acted upon. The manifest is a CSV file, uploaded to Cloud Storage, that contains one object or a list of objects that you want to process. Each row in the manifest must include the `bucket` and `name` of the object. You can optionally specify the `generation` of the object. If you don't specify the `generation`, the current version of the object is used. You can optionally include a header row with the following format: `bucket,name,generation`. For example, bucket,name,generation bucket_1,object_1,generation_1 bucket_1,object_2,generation_2 bucket_1,object_3,generation_3 Note: The manifest file must specify only objects within the bucket provided to the job. Rows referencing objects in other buckets are ignored.
     */
    manifestLocation?: string | null;
  }
  /**
   * Represents an access control entry on an object.
   */
  export interface Schema$ObjectAccessControl {
    /**
     * Required. The entity holding the permission, in one of the following forms: * `allUsers` * `allAuthenticatedUsers`
     */
    entity?: string | null;
    /**
     * Required. The role to grant. Acceptable values are: * `READER` - gives read access to the object. * `OWNER` - gives owner access to the object.
     */
    role?: string | null;
  }
  /**
   * Describes the payload of a user-defined object custom context.
   */
  export interface Schema$ObjectCustomContextPayload {
    /**
     * The value of the object custom context. If set, `value` can't be an empty string because it is a required field in custom context. If unset, `value` is ignored and no changes are made to the `value` field of the custom context payload.
     */
    value?: string | null;
  }
  /**
   * Describes options for object retention update.
   */
  export interface Schema$ObjectRetention {
    /**
     * Required. The object's retention expiration time, during which, the object is protected from being deleted or overwritten. The time must be specified in RFC 3339 format, for example `YYYY-MM-DD'T'HH:MM:SS'Z'` or `YYYY-MM-DD'T'HH:MM:SS.SS'Z'`. To clear an object's retention, both `retentionMode` and `retainUntilTime` must be left unset (omitted). Setting `retentionMode` to `RETENTION_MODE_UNSPECIFIED` is treated as a no-op. Unlike an unset field, it doesn't modify or clear the retention settings.
     */
    retainUntilTime?: string | null;
    /**
     * Required. The retention mode.
     */
    retentionMode?: string | null;
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
     * Output only. The Job associated with the operation.
     */
    job?: Schema$Job;
    /**
     * Output only. The unique operation resource name. Format: projects/{project_id\}/locations/global/operations/{operation\}.
     */
    operation?: string | null;
    /**
     * Output only. Identifies whether the user has requested cancellation of the operation. Operations that have been cancelled successfully have google.longrunning.Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.
     */
    requestedCancellation?: boolean | null;
  }
  /**
   * Describes prefixes of objects to be transformed.
   */
  export interface Schema$PrefixList {
    /**
     * Optional. Specify one or more object prefixes. For example: * To match one object, use a single prefix, `prefix1`. * To match multiple objects, use comma-separated prefixes, `prefix1, prefix2`. * To match all objects, use an empty prefix, `''`
     */
    includedObjectPrefixes?: string[] | null;
  }
  /**
   * Describes the project source where the objects satisfying the filters will be transformed.
   */
  export interface Schema$ProjectSource {
    /**
     * Optional. Filters expressed in Common Expression Language (CEL) to apply to buckets to identify buckets with objects to be transformed.
     */
    bucketFilters?: Schema$Expr;
    /**
     * Optional. The unique identifier of a dry run job to use as the baseline for the current job. Specifying this ID ensures the job is executed against the same set of objects validated during the dry run. The value corresponds to the {job_id\} segment of the resource name: `projects/{project_id\}/locations/{location\}/jobs/{job_id\}`.
     */
    dryRunJobId?: string | null;
    /**
     * Required. The resource identifier of the Storage Insights dataset configuration. Storage batch operations uses the latest snapshot from this dataset as the source to list and filter target objects. Format: `projects/{project_id\}/locations/{location\}/datasetConfigs/{dataset_config\}`.
     */
    insightsDatasetConfig?: string | null;
    /**
     * Optional. Filters expressed in Common Expression Language (CEL) to apply to objects to identify objects to be transformed.
     */
    objectFilters?: Schema$Expr;
    /**
     * Required. Project name of the objects to be transformed. e.g. projects/my-project or projects/123456.
     */
    project?: string | null;
    /**
     * Output only. The snapshot time used by the job to read the Storage Insights dataset for bucket and object discovery. This field is populated by the service and reflects the exact timestamp of the dataset snapshot used.
     */
    snapshotTime?: string | null;
    /**
     * Optional. Specifies the Cloud Storage locations to include in the job. If provided, only buckets and objects within these locations will be discovered from the Storage Insights dataset as configured in the `insights_dataset_config`. If omitted, the job will discover buckets and objects from all locations configured in the `insights_dataset_config`.
     */
    targetLocations?: Schema$TargetLocations;
  }
  /**
   * Describes options for object metadata update.
   */
  export interface Schema$PutMetadata {
    /**
     * Optional. Updates the objects `Cache-Control` fixed metadata. Unset values in the request are ignored. To clear the metadata, set an empty value. Additionally, the value for `Custom-Time` can't decrease. For details, see [Cache-Control](https://cloud.google.com/storage/docs/metadata#caching_data).
     */
    cacheControl?: string | null;
    /**
     * Optional. Updates objects `Content-Disposition` fixed metadata. Unset values in the request are ignored. To clear the metadata, set an empty value. For details, see [Content-Disposition](https://cloud.google.com/storage/docs/metadata#content-disposition).
     */
    contentDisposition?: string | null;
    /**
     * Optional. Updates the objects `Content-Encoding` fixed metadata. Unset values in the request are ignored. To clear the metadata, set an empty value. For details, see [Content-Encoding](https://cloud.google.com/storage/docs/metadata#content-encoding).
     */
    contentEncoding?: string | null;
    /**
     * Optional. Updates the objects `Content-Language` fixed metadata. Metadata values must use ISO 639-1 language codes. The maximum length for metadata values is 100 characters. Unset values in the request are ignored. To clear the metadata, set an empty value. For details, see [Content-Language](https://cloud.google.com/storage/docs/metadata#content-language).
     */
    contentLanguage?: string | null;
    /**
     * Optional. Updates objects `Content-Type` fixed metadata. Unset values in the request are ignored. To clear the metadata, set an empty value. For details, see [Content-Type](https://cloud.google.com/storage/docs/metadata#content-type).
     */
    contentType?: string | null;
    /**
     * Optional. Updates the object's custom metadata. This operation adds or sets individual custom metadata key-value pairs. Keys specified with empty values have their values cleared. Existing custom metadata keys not included in the request remain unchanged. For details, see [Custom metadata](https://cloud.google.com/storage/docs/metadata#custom-metadata).
     */
    customMetadata?: {[key: string]: string} | null;
    /**
     * Optional. Updates the objects `Custom-Time` fixed metadata. Unset values in the request are ignored. To clear the metadata, set an empty value. The time must be specified in RFC 3339 format, for example `YYYY-MM-DD'T'HH:MM:SS'Z'` or `YYYY-MM-DD'T'HH:MM:SS.SS'Z'`. For details, see [Custom-Time](https://cloud.google.com/storage/docs/metadata#custom-time).
     */
    customTime?: string | null;
    /**
     * Optional. Updates an object's retention configuration. To clear an object's retention, both `retentionMode` and `retainUntilTime` must be left unset (omitted). Setting `retentionMode` to `RETENTION_MODE_UNSPECIFIED` is treated as a no-op. Unlike an unset field, it doesn't modify or clear the retention settings. An object with `LOCKED` retention mode can't have its retention cleared or its `retainUntilTime` reduced. For more information, see [Object retention](https://cloud.google.com/storage/docs/batch-operations/create-manage-batch-operation-jobs#retain-until-time).
     */
    objectRetention?: Schema$ObjectRetention;
  }
  /**
   * Describes options to update object hold.
   */
  export interface Schema$PutObjectHold {
    /**
     * Required. Updates object event based holds state. When object event based hold is set, object can't be deleted or replaced. Resets object's time in the bucket for the purposes of the retention period.
     */
    eventBasedHold?: string | null;
    /**
     * Required. Updates object temporary holds state. When object temporary hold is set, object can't be deleted or replaced.
     */
    temporaryHold?: string | null;
  }
  /**
   * Describes options for object rewrite.
   */
  export interface Schema$RewriteObject {
    /**
     * Optional. Resource name of the Cloud KMS key that is used to encrypt the object. The Cloud KMS key must be located in same location as the object. For details, see https://cloud.google.com/storage/docs/encryption/using-customer-managed-keys#add-object-key Format: `projects/{project_id\}/locations/{location\}/keyRings/{keyring\}/cryptoKeys/{key\}` For example: `projects/123456/locations/us-central1/keyRings/my-keyring/cryptoKeys/my-key`. The object will be rewritten and set with the specified KMS key.
     */
    kmsKey?: string | null;
    /**
     * Optional. Rewrites the object to the specified storage class. Setting this field will perform a full byte copy of the object if the storage class is different from the object's current storage class. If Autoclass is enabled on the bucket, storage class changes are ignored by Cloud Storage.
     */
    storageClass?: string | null;
  }
  /**
   * Describes options for setting object ACLs.
   */
  export interface Schema$SetObjectAcls {
    /**
     * Required. Add, update, or remove grants from the object's existing ACLs.
     */
    accessControlsUpdates?: Schema$AccessControlsUpdates;
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
   * Describes the Cloud Storage locations to include in a ProjectSource job.
   */
  export interface Schema$TargetLocations {
    /**
     * Required. REQUIRED. A list of Cloud Storage locations (e.g., `us-central1`) to include in the job. If `snapshot_time` is omitted, the job automatically defaults to the most recent snapshot timestamp that is successfully populated in BOTH the `object_attributes_view` and `bucket_attributes_view` across ALL specified locations. For details on Storage Insights dataset snapshots and views, see: https://docs.cloud.google.com/storage/docs/insights/dataset-tables-and-schemas#schema
     */
    locations?: string[] | null;
    /**
     * Optional. OPTIONAL. The exact Storage Insights snapshot timestamp to use for the job compatible with the RFC 3339 format (e.g., `2024-01-02T03:04:05Z`). If specified, this exact snapshot must exist in BOTH the `object_attributes_view` and `bucket_attributes_view` for every location listed in `locations`. If the snapshot is missing from either view in any of the locations, the job fails.
     */
    snapshotTime?: string | null;
  }
  /**
   * Describes options to update object custom contexts.
   */
  export interface Schema$UpdateObjectCustomContext {
    /**
     * If set, must be set to true and all existing object custom contexts are deleted.
     */
    clearAll?: boolean | null;
    /**
     * A collection of updates to apply to specific custom contexts. Use this to add, update or delete individual contexts by key.
     */
    customContextUpdates?: Schema$CustomContextUpdates;
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
    jobs: Resource$Projects$Locations$Jobs;
    operations: Resource$Projects$Locations$Operations;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.jobs = new Resource$Projects$Locations$Jobs(this.context);
      this.operations = new Resource$Projects$Locations$Operations(
        this.context
      );
    }

    /**
     * Gets information about a location.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/storagebatchoperations.googleapis.com
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
     * const storagebatchoperations = google.storagebatchoperations('v1');
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
     *   const res = await storagebatchoperations.projects.locations.get({
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
        options.rootUrl || 'https://storagebatchoperations.googleapis.com/';
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
     * Lists information about the supported locations for this service. This method lists locations based on the resource scope provided in the ListLocationsRequest.name field: * **Global locations**: If `name` is empty, the method lists the public locations available to all projects. * **Project-specific locations**: If `name` follows the format `projects/{project\}`, the method lists locations visible to that specific project. This includes public, private, or other project-specific locations enabled for the project. For gRPC and client library implementations, the resource name is passed as the `name` field. For direct service calls, the resource name is incorporated into the request path based on the specific service implementation and version.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/storagebatchoperations.googleapis.com
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
     * const storagebatchoperations = google.storagebatchoperations('v1');
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
     *   const res = await storagebatchoperations.projects.locations.list({
     *     // Optional. Do not use this field unless explicitly documented otherwise. This is primarily for internal usage.
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
        options.rootUrl || 'https://storagebatchoperations.googleapis.com/';
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
     * Optional. Do not use this field unless explicitly documented otherwise. This is primarily for internal usage.
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

  export class Resource$Projects$Locations$Jobs {
    context: APIRequestContext;
    bucketOperations: Resource$Projects$Locations$Jobs$Bucketoperations;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.bucketOperations =
        new Resource$Projects$Locations$Jobs$Bucketoperations(this.context);
    }

    /**
     * Cancels a batch job.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/storagebatchoperations.googleapis.com
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
     * const storagebatchoperations = google.storagebatchoperations('v1');
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
     *   const res = await storagebatchoperations.projects.locations.jobs.cancel({
     *     // Required. The `name` of the job to cancel. Format: `projects/{project_id\}/locations/global/jobs/{job_id\}`.
     *     name: 'projects/my-project/locations/my-location/jobs/my-job',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
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
    cancel(
      params: Params$Resource$Projects$Locations$Jobs$Cancel,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    cancel(
      params?: Params$Resource$Projects$Locations$Jobs$Cancel,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$CancelJobResponse>>;
    cancel(
      params: Params$Resource$Projects$Locations$Jobs$Cancel,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    cancel(
      params: Params$Resource$Projects$Locations$Jobs$Cancel,
      options: MethodOptions | BodyResponseCallback<Schema$CancelJobResponse>,
      callback: BodyResponseCallback<Schema$CancelJobResponse>
    ): void;
    cancel(
      params: Params$Resource$Projects$Locations$Jobs$Cancel,
      callback: BodyResponseCallback<Schema$CancelJobResponse>
    ): void;
    cancel(callback: BodyResponseCallback<Schema$CancelJobResponse>): void;
    cancel(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Jobs$Cancel
        | BodyResponseCallback<Schema$CancelJobResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$CancelJobResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$CancelJobResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$CancelJobResponse>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Jobs$Cancel;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Jobs$Cancel;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://storagebatchoperations.googleapis.com/';
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
        createAPIRequest<Schema$CancelJobResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$CancelJobResponse>(parameters);
      }
    }

    /**
     * Creates a batch job.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/storagebatchoperations.googleapis.com
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
     * const storagebatchoperations = google.storagebatchoperations('v1');
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
     *   const res = await storagebatchoperations.projects.locations.jobs.create({
     *     // Required. A unique identifier for the job. `job_id` must be up to 128 characters and must include only characters available in DNS names, as defined by RFC-1123.
     *     jobId: 'placeholder-value',
     *     // Required. The value for parent.
     *     parent: 'projects/my-project/locations/my-location',
     *     // Optional. An optional request ID to identify requests. Specify a unique request ID in case you need to retry your request. Requests with same `request_id` are ignored for at least 60 minutes since the first request. The request ID must be a valid UUID with the exception that zero UUID isn't supported (00000000-0000-0000-0000-000000000000).
     *     requestId: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "bucketList": {},
     *       //   "completeTime": "my_completeTime",
     *       //   "counters": {},
     *       //   "createTime": "my_createTime",
     *       //   "deleteObject": {},
     *       //   "description": "my_description",
     *       //   "dryRun": false,
     *       //   "errorSummaries": [],
     *       //   "isMultiBucketJob": false,
     *       //   "loggingConfig": {},
     *       //   "name": "my_name",
     *       //   "projectSource": {},
     *       //   "putMetadata": {},
     *       //   "putObjectHold": {},
     *       //   "rewriteObject": {},
     *       //   "scheduleTime": "my_scheduleTime",
     *       //   "setObjectAcls": {},
     *       //   "state": "my_state",
     *       //   "updateObjectCustomContext": {}
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
      params: Params$Resource$Projects$Locations$Jobs$Create,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    create(
      params?: Params$Resource$Projects$Locations$Jobs$Create,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Operation>>;
    create(
      params: Params$Resource$Projects$Locations$Jobs$Create,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    create(
      params: Params$Resource$Projects$Locations$Jobs$Create,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    create(
      params: Params$Resource$Projects$Locations$Jobs$Create,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    create(callback: BodyResponseCallback<Schema$Operation>): void;
    create(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Jobs$Create
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
        {}) as Params$Resource$Projects$Locations$Jobs$Create;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Jobs$Create;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://storagebatchoperations.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}/jobs').replace(/([^:]\/)\/+/g, '$1'),
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
     * Deletes a batch job.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/storagebatchoperations.googleapis.com
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
     * const storagebatchoperations = google.storagebatchoperations('v1');
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
     *   const res = await storagebatchoperations.projects.locations.jobs.delete({
     *     // Optional. If set to true, any child bucket operations of the job are deleted. We recommend setting this to `true`. You can't mutate bucket operations directly, so only the `jobs.delete` permission is required to delete a job (and its child bucket operations).
     *     force: 'placeholder-value',
     *     // Required. The `name` of the job to delete. Format: `projects/{project_id\}/locations/global/jobs/{job_id\}`.
     *     name: 'projects/my-project/locations/my-location/jobs/my-job',
     *     // Optional. An optional request ID to identify requests. Specify a unique request ID in case you need to retry your request. Requests with same `request_id` are ignored for at least 60 minutes since the first request. The request ID must be a valid UUID with the exception that zero UUID isn't supported (00000000-0000-0000-0000-000000000000).
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
      params: Params$Resource$Projects$Locations$Jobs$Delete,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    delete(
      params?: Params$Resource$Projects$Locations$Jobs$Delete,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Empty>>;
    delete(
      params: Params$Resource$Projects$Locations$Jobs$Delete,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    delete(
      params: Params$Resource$Projects$Locations$Jobs$Delete,
      options: MethodOptions | BodyResponseCallback<Schema$Empty>,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    delete(
      params: Params$Resource$Projects$Locations$Jobs$Delete,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    delete(callback: BodyResponseCallback<Schema$Empty>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Jobs$Delete
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
        {}) as Params$Resource$Projects$Locations$Jobs$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Jobs$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://storagebatchoperations.googleapis.com/';
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
     * Gets a batch job.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/storagebatchoperations.googleapis.com
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
     * const storagebatchoperations = google.storagebatchoperations('v1');
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
     *   const res = await storagebatchoperations.projects.locations.jobs.get({
     *     // Required. The `name` of the job to retrieve. Format: `projects/{project_id\}/locations/global/jobs/{job_id\}`.
     *     name: 'projects/my-project/locations/my-location/jobs/my-job',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "bucketList": {},
     *   //   "completeTime": "my_completeTime",
     *   //   "counters": {},
     *   //   "createTime": "my_createTime",
     *   //   "deleteObject": {},
     *   //   "description": "my_description",
     *   //   "dryRun": false,
     *   //   "errorSummaries": [],
     *   //   "isMultiBucketJob": false,
     *   //   "loggingConfig": {},
     *   //   "name": "my_name",
     *   //   "projectSource": {},
     *   //   "putMetadata": {},
     *   //   "putObjectHold": {},
     *   //   "rewriteObject": {},
     *   //   "scheduleTime": "my_scheduleTime",
     *   //   "setObjectAcls": {},
     *   //   "state": "my_state",
     *   //   "updateObjectCustomContext": {}
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
      params: Params$Resource$Projects$Locations$Jobs$Get,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    get(
      params?: Params$Resource$Projects$Locations$Jobs$Get,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Job>>;
    get(
      params: Params$Resource$Projects$Locations$Jobs$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Jobs$Get,
      options: MethodOptions | BodyResponseCallback<Schema$Job>,
      callback: BodyResponseCallback<Schema$Job>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Jobs$Get,
      callback: BodyResponseCallback<Schema$Job>
    ): void;
    get(callback: BodyResponseCallback<Schema$Job>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Jobs$Get
        | BodyResponseCallback<Schema$Job>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Job>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Job>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$Job>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Jobs$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Jobs$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://storagebatchoperations.googleapis.com/';
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
        createAPIRequest<Schema$Job>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Job>(parameters);
      }
    }

    /**
     * Lists Jobs in a given project.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/storagebatchoperations.googleapis.com
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
     * const storagebatchoperations = google.storagebatchoperations('v1');
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
     *   const res = await storagebatchoperations.projects.locations.jobs.list({
     *     // Optional. Filters results as defined by https://google.aip.dev/160.
     *     filter: 'placeholder-value',
     *     // Optional. Field to sort by. Supported fields are `name` and `create_time`.
     *     orderBy: 'placeholder-value',
     *     // Optional. The list page size. The default page size is 100.
     *     pageSize: 'placeholder-value',
     *     // Optional. The list page token.
     *     pageToken: 'placeholder-value',
     *     // Required. Format: projects/{project_id\}/locations/global.
     *     parent: 'projects/my-project/locations/my-location',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "jobs": [],
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
      params: Params$Resource$Projects$Locations$Jobs$List,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    list(
      params?: Params$Resource$Projects$Locations$Jobs$List,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$ListJobsResponse>>;
    list(
      params: Params$Resource$Projects$Locations$Jobs$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Jobs$List,
      options: MethodOptions | BodyResponseCallback<Schema$ListJobsResponse>,
      callback: BodyResponseCallback<Schema$ListJobsResponse>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Jobs$List,
      callback: BodyResponseCallback<Schema$ListJobsResponse>
    ): void;
    list(callback: BodyResponseCallback<Schema$ListJobsResponse>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Jobs$List
        | BodyResponseCallback<Schema$ListJobsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ListJobsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ListJobsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$ListJobsResponse>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Jobs$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Jobs$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://storagebatchoperations.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}/jobs').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$ListJobsResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ListJobsResponse>(parameters);
      }
    }
  }

  export interface Params$Resource$Projects$Locations$Jobs$Cancel extends StandardParameters {
    /**
     * Required. The `name` of the job to cancel. Format: `projects/{project_id\}/locations/global/jobs/{job_id\}`.
     */
    name?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$CancelJobRequest;
  }
  export interface Params$Resource$Projects$Locations$Jobs$Create extends StandardParameters {
    /**
     * Required. A unique identifier for the job. `job_id` must be up to 128 characters and must include only characters available in DNS names, as defined by RFC-1123.
     */
    jobId?: string;
    /**
     * Required. The value for parent.
     */
    parent?: string;
    /**
     * Optional. An optional request ID to identify requests. Specify a unique request ID in case you need to retry your request. Requests with same `request_id` are ignored for at least 60 minutes since the first request. The request ID must be a valid UUID with the exception that zero UUID isn't supported (00000000-0000-0000-0000-000000000000).
     */
    requestId?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$Job;
  }
  export interface Params$Resource$Projects$Locations$Jobs$Delete extends StandardParameters {
    /**
     * Optional. If set to true, any child bucket operations of the job are deleted. We recommend setting this to `true`. You can't mutate bucket operations directly, so only the `jobs.delete` permission is required to delete a job (and its child bucket operations).
     */
    force?: boolean;
    /**
     * Required. The `name` of the job to delete. Format: `projects/{project_id\}/locations/global/jobs/{job_id\}`.
     */
    name?: string;
    /**
     * Optional. An optional request ID to identify requests. Specify a unique request ID in case you need to retry your request. Requests with same `request_id` are ignored for at least 60 minutes since the first request. The request ID must be a valid UUID with the exception that zero UUID isn't supported (00000000-0000-0000-0000-000000000000).
     */
    requestId?: string;
  }
  export interface Params$Resource$Projects$Locations$Jobs$Get extends StandardParameters {
    /**
     * Required. The `name` of the job to retrieve. Format: `projects/{project_id\}/locations/global/jobs/{job_id\}`.
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Locations$Jobs$List extends StandardParameters {
    /**
     * Optional. Filters results as defined by https://google.aip.dev/160.
     */
    filter?: string;
    /**
     * Optional. Field to sort by. Supported fields are `name` and `create_time`.
     */
    orderBy?: string;
    /**
     * Optional. The list page size. The default page size is 100.
     */
    pageSize?: number;
    /**
     * Optional. The list page token.
     */
    pageToken?: string;
    /**
     * Required. Format: projects/{project_id\}/locations/global.
     */
    parent?: string;
  }

  export class Resource$Projects$Locations$Jobs$Bucketoperations {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Gets a BucketOperation.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/storagebatchoperations.googleapis.com
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
     * const storagebatchoperations = google.storagebatchoperations('v1');
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
     *     await storagebatchoperations.projects.locations.jobs.bucketOperations.get({
     *       // Required. The `name` of the bucket operation to retrieve. Format: `projects/{project_id\}/locations/global/jobs/{job_id\}/bucketOperations/{bucket_operation_id\}`.
     *       name: 'projects/my-project/locations/my-location/jobs/my-job/bucketOperations/my-bucketOperation',
     *     });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "bucketName": "my_bucketName",
     *   //   "completeTime": "my_completeTime",
     *   //   "counters": {},
     *   //   "createTime": "my_createTime",
     *   //   "deleteObject": {},
     *   //   "errorSummaries": [],
     *   //   "manifest": {},
     *   //   "name": "my_name",
     *   //   "prefixList": {},
     *   //   "projectSource": {},
     *   //   "putMetadata": {},
     *   //   "putObjectHold": {},
     *   //   "rewriteObject": {},
     *   //   "setObjectAcls": {},
     *   //   "startTime": "my_startTime",
     *   //   "state": "my_state",
     *   //   "updateObjectCustomContext": {}
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
      params: Params$Resource$Projects$Locations$Jobs$Bucketoperations$Get,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    get(
      params?: Params$Resource$Projects$Locations$Jobs$Bucketoperations$Get,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$BucketOperation>>;
    get(
      params: Params$Resource$Projects$Locations$Jobs$Bucketoperations$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Jobs$Bucketoperations$Get,
      options: MethodOptions | BodyResponseCallback<Schema$BucketOperation>,
      callback: BodyResponseCallback<Schema$BucketOperation>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Jobs$Bucketoperations$Get,
      callback: BodyResponseCallback<Schema$BucketOperation>
    ): void;
    get(callback: BodyResponseCallback<Schema$BucketOperation>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Jobs$Bucketoperations$Get
        | BodyResponseCallback<Schema$BucketOperation>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$BucketOperation>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$BucketOperation>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$BucketOperation>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Jobs$Bucketoperations$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Jobs$Bucketoperations$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://storagebatchoperations.googleapis.com/';
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
        createAPIRequest<Schema$BucketOperation>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$BucketOperation>(parameters);
      }
    }

    /**
     * Lists BucketOperations in a given project and job.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/storagebatchoperations.googleapis.com
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
     * const storagebatchoperations = google.storagebatchoperations('v1');
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
     *     await storagebatchoperations.projects.locations.jobs.bucketOperations.list({
     *       // Optional. Filters results as defined by https://google.aip.dev/160.
     *       filter: 'placeholder-value',
     *       // Optional. Field to sort by. Supported fields are `name` and `create_time`.
     *       orderBy: 'placeholder-value',
     *       // Optional. The list page size. Default page size is 100.
     *       pageSize: 'placeholder-value',
     *       // Optional. The list page token.
     *       pageToken: 'placeholder-value',
     *       // Required. Format: `projects/{project_id\}/locations/global/jobs/{job_id\}`.
     *       parent: 'projects/my-project/locations/my-location/jobs/my-job',
     *     });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "bucketOperations": [],
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
      params: Params$Resource$Projects$Locations$Jobs$Bucketoperations$List,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    list(
      params?: Params$Resource$Projects$Locations$Jobs$Bucketoperations$List,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$ListBucketOperationsResponse>>;
    list(
      params: Params$Resource$Projects$Locations$Jobs$Bucketoperations$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Jobs$Bucketoperations$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ListBucketOperationsResponse>,
      callback: BodyResponseCallback<Schema$ListBucketOperationsResponse>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Jobs$Bucketoperations$List,
      callback: BodyResponseCallback<Schema$ListBucketOperationsResponse>
    ): void;
    list(
      callback: BodyResponseCallback<Schema$ListBucketOperationsResponse>
    ): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Jobs$Bucketoperations$List
        | BodyResponseCallback<Schema$ListBucketOperationsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ListBucketOperationsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ListBucketOperationsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$ListBucketOperationsResponse>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Jobs$Bucketoperations$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Jobs$Bucketoperations$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://storagebatchoperations.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}/bucketOperations').replace(
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
        createAPIRequest<Schema$ListBucketOperationsResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ListBucketOperationsResponse>(
          parameters
        );
      }
    }
  }

  export interface Params$Resource$Projects$Locations$Jobs$Bucketoperations$Get extends StandardParameters {
    /**
     * Required. The `name` of the bucket operation to retrieve. Format: `projects/{project_id\}/locations/global/jobs/{job_id\}/bucketOperations/{bucket_operation_id\}`.
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Locations$Jobs$Bucketoperations$List extends StandardParameters {
    /**
     * Optional. Filters results as defined by https://google.aip.dev/160.
     */
    filter?: string;
    /**
     * Optional. Field to sort by. Supported fields are `name` and `create_time`.
     */
    orderBy?: string;
    /**
     * Optional. The list page size. Default page size is 100.
     */
    pageSize?: number;
    /**
     * Optional. The list page token.
     */
    pageToken?: string;
    /**
     * Required. Format: `projects/{project_id\}/locations/global/jobs/{job_id\}`.
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
     * //   https://console.developers.google.com/apis/api/storagebatchoperations.googleapis.com
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
     * const storagebatchoperations = google.storagebatchoperations('v1');
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
     *   const res = await storagebatchoperations.projects.locations.operations.cancel(
     *     {
     *       // The name of the operation resource to be cancelled.
     *       name: 'projects/my-project/locations/my-location/operations/my-operation',
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
        options.rootUrl || 'https://storagebatchoperations.googleapis.com/';
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
     * //   https://console.developers.google.com/apis/api/storagebatchoperations.googleapis.com
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
     * const storagebatchoperations = google.storagebatchoperations('v1');
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
     *   const res = await storagebatchoperations.projects.locations.operations.delete(
     *     {
     *       // The name of the operation resource to be deleted.
     *       name: 'projects/my-project/locations/my-location/operations/my-operation',
     *     },
     *   );
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
        options.rootUrl || 'https://storagebatchoperations.googleapis.com/';
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
     * //   https://console.developers.google.com/apis/api/storagebatchoperations.googleapis.com
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
     * const storagebatchoperations = google.storagebatchoperations('v1');
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
     *   const res = await storagebatchoperations.projects.locations.operations.get({
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
        options.rootUrl || 'https://storagebatchoperations.googleapis.com/';
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
     * //   https://console.developers.google.com/apis/api/storagebatchoperations.googleapis.com
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
     * const storagebatchoperations = google.storagebatchoperations('v1');
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
     *   const res = await storagebatchoperations.projects.locations.operations.list({
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
        options.rootUrl || 'https://storagebatchoperations.googleapis.com/';
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
}
