/**
 * Copyright 2019 Google LLC
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

import {GaxiosPromise} from 'gaxios';
import {Compute, JWT, OAuth2Client, UserRefreshClient} from 'google-auth-library';
import {APIRequestContext, BodyResponseCallback, createAPIRequest, GlobalOptions, GoogleConfigurable, MethodOptions} from 'googleapis-common';

// tslint:disable: no-any
// tslint:disable: class-name
// tslint:disable: variable-name
// tslint:disable: jsdoc-format
// tslint:disable: no-namespace

export namespace storagetransfer_v1 {
  export interface Options extends GlobalOptions {
    version: 'v1';
  }

  let context: APIRequestContext;

  interface StandardParameters {
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
     * API key. Your API key identifies your project and provides you with API
     * access, quota, and reports. Required unless you provide an OAuth 2.0
     * token.
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
     * Available to use for quota purposes for server-side applications. Can be
     * any arbitrary string assigned to a user, but should not exceed 40
     * characters.
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
   * Transfers data from external data sources to a Google Cloud Storage bucket
   * or between Google Cloud Storage buckets.
   *
   * @example
   * const {google} = require('googleapis');
   * const storagetransfer = google.storagetransfer('v1');
   *
   * @namespace storagetransfer
   * @type {Function}
   * @version v1
   * @variation v1
   * @param {object=} options Options for Storagetransfer
   */
  export class Storagetransfer {
    googleServiceAccounts: Resource$Googleserviceaccounts;
    transferJobs: Resource$Transferjobs;
    transferOperations: Resource$Transferoperations;

    constructor(options: GlobalOptions, google?: GoogleConfigurable) {
      context = {_options: options || {}, google};

      this.googleServiceAccounts = new Resource$Googleserviceaccounts();
      this.transferJobs = new Resource$Transferjobs();
      this.transferOperations = new Resource$Transferoperations();
    }
  }

  /**
   * AWS access key (see [AWS Security
   * Credentials](http://docs.aws.amazon.com/general/latest/gr/aws-security-credentials.html)).
   */
  export interface Schema$AwsAccessKey {
    /**
     * AWS access key ID. Required.
     */
    accessKeyId?: string;
    /**
     * AWS secret access key. This field is not returned in RPC responses.
     * Required.
     */
    secretAccessKey?: string;
  }
  /**
   * An AwsS3Data resource can be a data source, but not a data sink. In an
   * AwsS3Data resource, an object&#39;s name is the S3 object&#39;s key name.
   */
  export interface Schema$AwsS3Data {
    /**
     * AWS access key used to sign the API requests to the AWS S3 bucket.
     * Permissions on the bucket must be granted to the access ID of the AWS
     * access key. Required.
     */
    awsAccessKey?: Schema$AwsAccessKey;
    /**
     * S3 Bucket name (see [Creating a
     * bucket](http://docs.aws.amazon.com/AmazonS3/latest/dev/create-bucket-get-location-example.html)).
     * Required.
     */
    bucketName?: string;
  }
  /**
   * Represents a whole or partial calendar date, e.g. a birthday. The time of
   * day and time zone are either specified elsewhere or are not significant.
   * The date is relative to the Proleptic Gregorian Calendar. This can
   * represent:  * A full date, with non-zero year, month and day values * A
   * month and day value, with a zero year, e.g. an anniversary * A year on its
   * own, with zero month and day values * A year and month value, with a zero
   * day, e.g. a credit card expiration date  Related types are
   * google.type.TimeOfDay and `google.protobuf.Timestamp`.
   */
  export interface Schema$Date {
    /**
     * Day of month. Must be from 1 to 31 and valid for the year and month, or 0
     * if specifying a year by itself or a year and month where the day is not
     * significant.
     */
    day?: number;
    /**
     * Month of year. Must be from 1 to 12, or 0 if specifying a year without a
     * month and day.
     */
    month?: number;
    /**
     * Year of date. Must be from 1 to 9999, or 0 if specifying a date without a
     * year.
     */
    year?: number;
  }
  /**
   * A generic empty message that you can re-use to avoid defining duplicated
   * empty messages in your APIs. A typical example is to use it as the request
   * or the response type of an API method. For instance:      service Foo { rpc
   * Bar(google.protobuf.Empty) returns (google.protobuf.Empty);     }  The JSON
   * representation for `Empty` is empty JSON object `{}`.
   */
  export interface Schema$Empty {}
  /**
   * An entry describing an error that has occurred.
   */
  export interface Schema$ErrorLogEntry {
    /**
     * A list of messages that carry the error details.
     */
    errorDetails?: string[];
    /**
     * A URL that refers to the target (a data source, a data sink, or an
     * object) with which the error is associated. Required.
     */
    url?: string;
  }
  /**
   * A summary of errors by error code, plus a count and sample error log
   * entries.
   */
  export interface Schema$ErrorSummary {
    /**
     * Required.
     */
    errorCode?: string;
    /**
     * Count of this type of error. Required.
     */
    errorCount?: string;
    /**
     * Error samples.
     */
    errorLogEntries?: Schema$ErrorLogEntry[];
  }
  /**
   * In a GcsData resource, an object&#39;s name is the Google Cloud Storage
   * object&#39;s name and its `lastModificationTime` refers to the object&#39;s
   * updated time, which changes when the content or the metadata of the object
   * is updated.
   */
  export interface Schema$GcsData {
    /**
     * Google Cloud Storage bucket name (see [Bucket Name
     * Requirements](https://cloud.google.com/storage/docs/naming#requirements)).
     * Required.
     */
    bucketName?: string;
  }
  /**
   * Google service account
   */
  export interface Schema$GoogleServiceAccount {
    /**
     * Required.
     */
    accountEmail?: string;
  }
  /**
   * An HttpData resource specifies a list of objects on the web to be
   * transferred over HTTP.  The information of the objects to be transferred is
   * contained in a file referenced by a URL. The first line in the file must be
   * &quot;TsvHttpData-1.0&quot;, which specifies the format of the file.
   * Subsequent lines specify the information of the list of objects, one object
   * per list entry. Each entry has the following tab-delimited fields:  * HTTP
   * URL - The location of the object.  * Length - The size of the object in
   * bytes.  * MD5 - The base64-encoded MD5 hash of the object.  For an example
   * of a valid TSV file, see [Transferring data from
   * URLs](https://cloud.google.com/storage/transfer/create-url-list).  When
   * transferring data based on a URL list, keep the following in mind:  * When
   * an object located at `http(s)://hostname:port/&lt;URL-path&gt;` is
   * transferred to a data sink, the name of the object at the data sink is
   * `&lt;hostname&gt;/&lt;URL-path&gt;`.  * If the specified size of an object
   * does not match the actual size of the object fetched, the object will not
   * be transferred.  * If the specified MD5 does not match the MD5 computed
   * from the transferred bytes, the object transfer will fail. For more
   * information, see [Generating MD5
   * hashes](https://cloud.google.com/storage/transfer/#md5)  * Ensure that each
   * URL you specify is publicly accessible. For example, in Google Cloud
   * Storage you can [share an object publicly]
   * (https://cloud.google.com/storage/docs/cloud-console#_sharingdata) and get
   * a link to it.  * Storage Transfer Service obeys `robots.txt` rules and
   * requires the source HTTP server to support `Range` requests and to return a
   * `Content-Length` header in each response.  *
   * [ObjectConditions](#ObjectConditions) have no effect when filtering objects
   * to transfer.
   */
  export interface Schema$HttpData {
    /**
     * The URL that points to the file that stores the object list entries. This
     * file must allow public access.  Currently, only URLs with HTTP and HTTPS
     * schemes are supported. Required.
     */
    listUrl?: string;
  }
  /**
   * The response message for Operations.ListOperations.
   */
  export interface Schema$ListOperationsResponse {
    /**
     * The standard List next-page token.
     */
    nextPageToken?: string;
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
    nextPageToken?: string;
    /**
     * A list of transfer jobs.
     */
    transferJobs?: Schema$TransferJob[];
  }
  /**
   * Conditions that determine which objects will be transferred.
   */
  export interface Schema$ObjectConditions {
    /**
     * `excludePrefixes` must follow the requirements described for
     * `includePrefixes`.  The max size of `excludePrefixes` is 1000.
     */
    excludePrefixes?: string[];
    /**
     * If `includePrefixes` is specified, objects that satisfy the object
     * conditions must have names that start with one of the `includePrefixes`
     * and that do not start with any of the `excludePrefixes`. If
     * `includePrefixes` is not specified, all objects except those that have
     * names starting with one of the `excludePrefixes` must satisfy the object
     * conditions.  Requirements:    * Each include-prefix and exclude-prefix
     * can contain any sequence of     Unicode characters, of max length 1024
     * bytes when UTF8-encoded, and     must not contain Carriage Return or Line
     * Feed characters.  Wildcard     matching and regular expression matching
     * are not supported.    * Each include-prefix and exclude-prefix must omit
     * the leading slash.     For example, to include the `requests.gz` object
     * in a transfer from     `s3://my-aws-bucket/logs/y=2015/requests.gz`,
     * specify the include     prefix as `logs/y=2015/requests.gz`.    * None of
     * the include-prefix or the exclude-prefix values can be empty,     if
     * specified.    * Each include-prefix must include a distinct portion of
     * the object     namespace, i.e., no include-prefix may be a prefix of
     * another     include-prefix.    * Each exclude-prefix must exclude a
     * distinct portion of the object     namespace, i.e., no exclude-prefix may
     * be a prefix of another     exclude-prefix.    * If `includePrefixes` is
     * specified, then each exclude-prefix must start     with the value of a
     * path explicitly included by `includePrefixes`.  The max size of
     * `includePrefixes` is 1000.
     */
    includePrefixes?: string[];
    /**
     * `maxTimeElapsedSinceLastModification` is the complement to
     * `minTimeElapsedSinceLastModification`.
     */
    maxTimeElapsedSinceLastModification?: string;
    /**
     * If unspecified, `minTimeElapsedSinceLastModification` takes a zero value
     * and `maxTimeElapsedSinceLastModification` takes the maximum possible
     * value of Duration. Objects that satisfy the object conditions must either
     * have a `lastModificationTime` greater or equal to `NOW` -
     * `maxTimeElapsedSinceLastModification` and less than `NOW` -
     * `minTimeElapsedSinceLastModification`, or not have a
     * `lastModificationTime`.
     */
    minTimeElapsedSinceLastModification?: string;
  }
  /**
   * This resource represents a long-running operation that is the result of a
   * network API call.
   */
  export interface Schema$Operation {
    /**
     * If the value is `false`, it means the operation is still in progress. If
     * `true`, the operation is completed, and either `error` or `response` is
     * available.
     */
    done?: boolean;
    /**
     * The error result of the operation in case of failure or cancellation.
     */
    error?: Schema$Status;
    /**
     * Represents the transfer operation object.
     */
    metadata?: {[key: string]: any;};
    /**
     * The server-assigned name, which is only unique within the same service
     * that originally returns it. If you use the default HTTP mapping, the
     * `name` should have the format of `transferOperations/some/unique/name`.
     */
    name?: string;
    /**
     * The normal response of the operation in case of success.  If the original
     * method returns no data on success, such as `Delete`, the response is
     * `google.protobuf.Empty`.  If the original method is standard
     * `Get`/`Create`/`Update`, the response should be the resource.  For other
     * methods, the response should have the type `XxxResponse`, where `Xxx` is
     * the original method name.  For example, if the original method name is
     * `TakeSnapshot()`, the inferred response type is `TakeSnapshotResponse`.
     */
    response?: {[key: string]: any;};
  }
  /**
   * Request passed to PauseTransferOperation.
   */
  export interface Schema$PauseTransferOperationRequest {}
  /**
   * Request passed to ResumeTransferOperation.
   */
  export interface Schema$ResumeTransferOperationRequest {}
  /**
   * Transfers can be scheduled to recur or to run just once.
   */
  export interface Schema$Schedule {
    /**
     * The last day the recurring transfer will be run. If `scheduleEndDate` is
     * the same as `scheduleStartDate`, the transfer will be executed only once.
     */
    scheduleEndDate?: Schema$Date;
    /**
     * The first day the recurring transfer is scheduled to run. If
     * `scheduleStartDate` is in the past, the transfer will run for the first
     * time on the following day. Required.
     */
    scheduleStartDate?: Schema$Date;
    /**
     * The time in UTC at which the transfer will be scheduled to start in a
     * day. Transfers may start later than this time. If not specified,
     * recurring and one-time transfers that are scheduled to run today will run
     * immediately; recurring transfers that are scheduled to run on a future
     * date will start at approximately midnight UTC on that date. Note that
     * when configuring a transfer with the Cloud Platform Console, the
     * transfer&#39;s start time in a day is specified in your local timezone.
     */
    startTimeOfDay?: Schema$TimeOfDay;
  }
  /**
   * The `Status` type defines a logical error model that is suitable for
   * different programming environments, including REST APIs and RPC APIs. It is
   * used by [gRPC](https://github.com/grpc). The error model is designed to be:
   * - Simple to use and understand for most users - Flexible enough to meet
   * unexpected needs  # Overview  The `Status` message contains three pieces of
   * data: error code, error message, and error details. The error code should
   * be an enum value of google.rpc.Code, but it may accept additional error
   * codes if needed.  The error message should be a developer-facing English
   * message that helps developers *understand* and *resolve* the error. If a
   * localized user-facing error message is needed, put the localized message in
   * the error details or localize it in the client. The optional error details
   * may contain arbitrary information about the error. There is a predefined
   * set of error detail types in the package `google.rpc` that can be used for
   * common error conditions.  # Language mapping  The `Status` message is the
   * logical representation of the error model, but it is not necessarily the
   * actual wire format. When the `Status` message is exposed in different
   * client libraries and different wire protocols, it can be mapped
   * differently. For example, it will likely be mapped to some exceptions in
   * Java, but more likely mapped to some error codes in C.  # Other uses  The
   * error model and the `Status` message can be used in a variety of
   * environments, either with or without APIs, to provide a consistent
   * developer experience across different environments.  Example uses of this
   * error model include:  - Partial errors. If a service needs to return
   * partial errors to the client,     it may embed the `Status` in the normal
   * response to indicate the partial     errors.  - Workflow errors. A typical
   * workflow has multiple steps. Each step may     have a `Status` message for
   * error reporting.  - Batch operations. If a client uses batch request and
   * batch response, the     `Status` message should be used directly inside
   * batch response, one for     each error sub-response.  - Asynchronous
   * operations. If an API call embeds asynchronous operation     results in its
   * response, the status of those operations should be     represented directly
   * using the `Status` message.  - Logging. If some API errors are stored in
   * logs, the message `Status` could     be used directly after any stripping
   * needed for security/privacy reasons.
   */
  export interface Schema$Status {
    /**
     * The status code, which should be an enum value of google.rpc.Code.
     */
    code?: number;
    /**
     * A list of messages that carry the error details.  There is a common set
     * of message types for APIs to use.
     */
    details?: Array<{[key: string]: any;}>;
    /**
     * A developer-facing error message, which should be in English. Any
     * user-facing error message should be localized and sent in the
     * google.rpc.Status.details field, or localized by the client.
     */
    message?: string;
  }
  /**
   * Represents a time of day. The date and time zone are either not significant
   * or are specified elsewhere. An API may choose to allow leap seconds.
   * Related types are google.type.Date and `google.protobuf.Timestamp`.
   */
  export interface Schema$TimeOfDay {
    /**
     * Hours of day in 24 hour format. Should be from 0 to 23. An API may choose
     * to allow the value &quot;24:00:00&quot; for scenarios like business
     * closing time.
     */
    hours?: number;
    /**
     * Minutes of hour of day. Must be from 0 to 59.
     */
    minutes?: number;
    /**
     * Fractions of seconds in nanoseconds. Must be from 0 to 999,999,999.
     */
    nanos?: number;
    /**
     * Seconds of minutes of the time. Must normally be from 0 to 59. An API may
     * allow the value 60 if it allows leap-seconds.
     */
    seconds?: number;
  }
  /**
   * A collection of counters that report the progress of a transfer operation.
   */
  export interface Schema$TransferCounters {
    /**
     * Bytes that are copied to the data sink.
     */
    bytesCopiedToSink?: string;
    /**
     * Bytes that are deleted from the data sink.
     */
    bytesDeletedFromSink?: string;
    /**
     * Bytes that are deleted from the data source.
     */
    bytesDeletedFromSource?: string;
    /**
     * Bytes that failed to be deleted from the data sink.
     */
    bytesFailedToDeleteFromSink?: string;
    /**
     * Bytes found in the data source that are scheduled to be transferred,
     * excluding any that are filtered based on object conditions or skipped due
     * to sync.
     */
    bytesFoundFromSource?: string;
    /**
     * Bytes found only in the data sink that are scheduled to be deleted.
     */
    bytesFoundOnlyFromSink?: string;
    /**
     * Bytes in the data source that failed to be transferred or that failed to
     * be deleted after being transferred.
     */
    bytesFromSourceFailed?: string;
    /**
     * Bytes in the data source that are not transferred because they already
     * exist in the data sink.
     */
    bytesFromSourceSkippedBySync?: string;
    /**
     * Objects that are copied to the data sink.
     */
    objectsCopiedToSink?: string;
    /**
     * Objects that are deleted from the data sink.
     */
    objectsDeletedFromSink?: string;
    /**
     * Objects that are deleted from the data source.
     */
    objectsDeletedFromSource?: string;
    /**
     * Objects that failed to be deleted from the data sink.
     */
    objectsFailedToDeleteFromSink?: string;
    /**
     * Objects found in the data source that are scheduled to be transferred,
     * excluding any that are filtered based on object conditions or skipped due
     * to sync.
     */
    objectsFoundFromSource?: string;
    /**
     * Objects found only in the data sink that are scheduled to be deleted.
     */
    objectsFoundOnlyFromSink?: string;
    /**
     * Objects in the data source that failed to be transferred or that failed
     * to be deleted after being transferred.
     */
    objectsFromSourceFailed?: string;
    /**
     * Objects in the data source that are not transferred because they already
     * exist in the data sink.
     */
    objectsFromSourceSkippedBySync?: string;
  }
  /**
   * This resource represents the configuration of a transfer job that runs
   * periodically.
   */
  export interface Schema$TransferJob {
    /**
     * This field cannot be changed by user requests.
     */
    creationTime?: string;
    /**
     * This field cannot be changed by user requests.
     */
    deletionTime?: string;
    /**
     * A description provided by the user for the job. Its max length is 1024
     * bytes when Unicode-encoded.
     */
    description?: string;
    /**
     * This field cannot be changed by user requests.
     */
    lastModificationTime?: string;
    /**
     * A globally unique name assigned by Storage Transfer Service when the job
     * is created. This field should be left empty in requests to create a new
     * transfer job; otherwise, the requests result in an `INVALID_ARGUMENT`
     * error.
     */
    name?: string;
    /**
     * The ID of the Google Cloud Platform Console project that owns the job.
     */
    projectId?: string;
    /**
     * Schedule specification.
     */
    schedule?: Schema$Schedule;
    /**
     * Status of the job. This value MUST be specified for
     * `CreateTransferJobRequests`.  NOTE: The effect of the new job status
     * takes place during a subsequent job run. For example, if you change the
     * job status from `ENABLED` to `DISABLED`, and an operation spawned by the
     * transfer is running, the status change would not affect the current
     * operation.
     */
    status?: string;
    /**
     * Transfer specification.
     */
    transferSpec?: Schema$TransferSpec;
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
    endTime?: string;
    /**
     * Summarizes errors encountered with sample error log entries.
     */
    errorBreakdowns?: Schema$ErrorSummary[];
    /**
     * A globally unique ID assigned by the system.
     */
    name?: string;
    /**
     * The ID of the Google Cloud Platform Console project that owns the
     * operation. Required.
     */
    projectId?: string;
    /**
     * Start time of this transfer execution.
     */
    startTime?: string;
    /**
     * Status of the transfer operation.
     */
    status?: string;
    /**
     * The name of the transfer job that triggers this transfer operation.
     */
    transferJobName?: string;
    /**
     * Transfer specification. Required.
     */
    transferSpec?: Schema$TransferSpec;
  }
  /**
   * TransferOptions uses three boolean parameters to define the actions to be
   * performed on objects in a transfer.
   */
  export interface Schema$TransferOptions {
    /**
     * Whether objects should be deleted from the source after they are
     * transferred to the sink.  Note that this option and
     * `deleteObjectsUniqueInSink` are mutually exclusive.
     */
    deleteObjectsFromSourceAfterTransfer?: boolean;
    /**
     * Whether objects that exist only in the sink should be deleted.  Note that
     * this option and `deleteObjectsFromSourceAfterTransfer` are mutually
     * exclusive.
     */
    deleteObjectsUniqueInSink?: boolean;
    /**
     * Whether overwriting objects that already exist in the sink is allowed.
     */
    overwriteObjectsAlreadyExistingInSink?: boolean;
  }
  /**
   * Configuration for running a transfer.
   */
  export interface Schema$TransferSpec {
    /**
     * An AWS S3 data source.
     */
    awsS3DataSource?: Schema$AwsS3Data;
    /**
     * A Google Cloud Storage data sink.
     */
    gcsDataSink?: Schema$GcsData;
    /**
     * A Google Cloud Storage data source.
     */
    gcsDataSource?: Schema$GcsData;
    /**
     * An HTTP URL data source.
     */
    httpDataSource?: Schema$HttpData;
    /**
     * Only objects that satisfy these object conditions are included in the set
     * of data source and data sink objects.  Object conditions based on
     * objects&#39; `lastModificationTime` do not exclude objects in a data
     * sink.
     */
    objectConditions?: Schema$ObjectConditions;
    /**
     * If the option `deleteObjectsUniqueInSink` is `true`, object conditions
     * based on objects&#39; `lastModificationTime` are ignored and do not
     * exclude objects in a data source or a data sink.
     */
    transferOptions?: Schema$TransferOptions;
  }
  /**
   * Request passed to UpdateTransferJob.
   */
  export interface Schema$UpdateTransferJobRequest {
    /**
     * The ID of the Google Cloud Platform Console project that owns the job.
     * Required.
     */
    projectId?: string;
    /**
     * The job to update. `transferJob` is expected to specify only three
     * fields: `description`, `transferSpec`, and `status`.  An
     * UpdateTransferJobRequest that specifies other fields will be rejected
     * with an error `INVALID_ARGUMENT`. Required.
     */
    transferJob?: Schema$TransferJob;
    /**
     * The field mask of the fields in `transferJob` that are to be updated in
     * this request.  Fields in `transferJob` that can be updated are:
     * `description`, `transferSpec`, and `status`.  To update the
     * `transferSpec` of the job, a complete transfer specification has to be
     * provided. An incomplete specification which misses any required fields
     * will be rejected with the error `INVALID_ARGUMENT`.
     */
    updateTransferJobFieldMask?: string;
  }


  export class Resource$Googleserviceaccounts {
    constructor() {}


    /**
     * storagetransfer.googleServiceAccounts.get
     * @desc Returns the Google service account that is used by Storage Transfer
     * Service to access buckets in the project where transfers run or in other
     * projects. Each Google service account is associated with one Google Cloud
     * Platform Console project. Users should add this service account to the
     * Google Cloud Storage bucket ACLs to grant access to Storage Transfer
     * Service. This service account is created and owned by Storage Transfer
     * Service and can only be used by Storage Transfer Service.
     * @example
     * * // BEFORE RUNNING:
     * // ---------------
     * // 1. If not already done, enable the Google Storage Transfer API
     * //    and check the quota for your project at
     * //    https://console.developers.google.com/apis/api/storagetransfer
     * // 2. This sample uses Application Default Credentials for
     * authentication.
     * //    If not already done, install the gcloud CLI from
     * //    https://cloud.google.com/sdk and run
     * //    `gcloud beta auth application-default login`.
     * //    For more information, see
     * //
     * https://developers.google.com/identity/protocols/application-default-credentials
     * // 3. Install the Node.js client library by running
     * //    `npm install googleapis --save`
     *
     * var google = require('googleapis');
     * var storagetransfer = google.storagetransfer('v1');
     *
     * authorize(function(authClient) {
     *   var request = {
     *     // The ID of the Google Cloud Platform Console project that the
     * Google service
     *     // account is associated with.
     *     // Required.
     *     projectId: 'my-project-id',  // TODO: Update placeholder value.
     *
     *     auth: authClient,
     *   };
     *
     *   storagetransfer.googleServiceAccounts.get(request, function(err,
     * response) { if (err) { console.error(err); return;
     *     }
     *
     *     // TODO: Change code below to process the `response` object:
     *     console.log(JSON.stringify(response, null, 2));
     *   });
     * });
     *
     * function authorize(callback) {
     *   google.auth.getApplicationDefault(function(err, authClient) {
     *     if (err) {
     *       console.error('authentication failed: ', err);
     *       return;
     *     }
     *     if (authClient.createScopedRequired &&
     * authClient.createScopedRequired()) { var scopes =
     * ['https://www.googleapis.com/auth/cloud-platform']; authClient =
     * authClient.createScoped(scopes);
     *     }
     *     callback(authClient);
     *   });
     * }
     * @alias storagetransfer.googleServiceAccounts.get
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.projectId The ID of the Google Cloud Platform Console project that the Google service account is associated with. Required.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    get(params?: Params$Resource$Googleserviceaccounts$Get,
        options?: MethodOptions): GaxiosPromise<Schema$GoogleServiceAccount>;
    get(params: Params$Resource$Googleserviceaccounts$Get,
        options: MethodOptions|
        BodyResponseCallback<Schema$GoogleServiceAccount>,
        callback: BodyResponseCallback<Schema$GoogleServiceAccount>): void;
    get(params: Params$Resource$Googleserviceaccounts$Get,
        callback: BodyResponseCallback<Schema$GoogleServiceAccount>): void;
    get(callback: BodyResponseCallback<Schema$GoogleServiceAccount>): void;
    get(paramsOrCallback?: Params$Resource$Googleserviceaccounts$Get|
        BodyResponseCallback<Schema$GoogleServiceAccount>,
        optionsOrCallback?: MethodOptions|
        BodyResponseCallback<Schema$GoogleServiceAccount>,
        callback?: BodyResponseCallback<Schema$GoogleServiceAccount>):
        void|GaxiosPromise<Schema$GoogleServiceAccount> {
      let params =
          (paramsOrCallback || {}) as Params$Resource$Googleserviceaccounts$Get;
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
              url: (rootUrl + '/v1/googleServiceAccounts/{projectId}')
                       .replace(/([^:]\/)\/+/g, '$1'),
              method: 'GET'
            },
            options),
        params,
        requiredParams: ['projectId'],
        pathParams: ['projectId'],
        context
      };
      if (callback) {
        createAPIRequest<Schema$GoogleServiceAccount>(parameters, callback);
      } else {
        return createAPIRequest<Schema$GoogleServiceAccount>(parameters);
      }
    }
  }

  export interface Params$Resource$Googleserviceaccounts$Get extends
      StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * The ID of the Google Cloud Platform Console project that the Google
     * service account is associated with. Required.
     */
    projectId?: string;
  }


  export class Resource$Transferjobs {
    constructor() {}


    /**
     * storagetransfer.transferJobs.create
     * @desc Creates a transfer job that runs periodically.
     * @example
     * * // BEFORE RUNNING:
     * // ---------------
     * // 1. If not already done, enable the Google Storage Transfer API
     * //    and check the quota for your project at
     * //    https://console.developers.google.com/apis/api/storagetransfer
     * // 2. This sample uses Application Default Credentials for
     * authentication.
     * //    If not already done, install the gcloud CLI from
     * //    https://cloud.google.com/sdk and run
     * //    `gcloud beta auth application-default login`.
     * //    For more information, see
     * //
     * https://developers.google.com/identity/protocols/application-default-credentials
     * // 3. Install the Node.js client library by running
     * //    `npm install googleapis --save`
     *
     * var google = require('googleapis');
     * var storagetransfer = google.storagetransfer('v1');
     *
     * authorize(function(authClient) {
     *   var request = {
     *     resource: {
     *       // TODO: Add desired properties to the request body.
     *     },
     *
     *     auth: authClient,
     *   };
     *
     *   storagetransfer.transferJobs.create(request, function(err, response) {
     *     if (err) {
     *       console.error(err);
     *       return;
     *     }
     *
     *     // TODO: Change code below to process the `response` object:
     *     console.log(JSON.stringify(response, null, 2));
     *   });
     * });
     *
     * function authorize(callback) {
     *   google.auth.getApplicationDefault(function(err, authClient) {
     *     if (err) {
     *       console.error('authentication failed: ', err);
     *       return;
     *     }
     *     if (authClient.createScopedRequired &&
     * authClient.createScopedRequired()) { var scopes =
     * ['https://www.googleapis.com/auth/cloud-platform']; authClient =
     * authClient.createScoped(scopes);
     *     }
     *     callback(authClient);
     *   });
     * }
     * @alias storagetransfer.transferJobs.create
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {().TransferJob} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    create(
        params?: Params$Resource$Transferjobs$Create,
        options?: MethodOptions): GaxiosPromise<Schema$TransferJob>;
    create(
        params: Params$Resource$Transferjobs$Create,
        options: MethodOptions|BodyResponseCallback<Schema$TransferJob>,
        callback: BodyResponseCallback<Schema$TransferJob>): void;
    create(
        params: Params$Resource$Transferjobs$Create,
        callback: BodyResponseCallback<Schema$TransferJob>): void;
    create(callback: BodyResponseCallback<Schema$TransferJob>): void;
    create(
        paramsOrCallback?: Params$Resource$Transferjobs$Create|
        BodyResponseCallback<Schema$TransferJob>,
        optionsOrCallback?: MethodOptions|
        BodyResponseCallback<Schema$TransferJob>,
        callback?: BodyResponseCallback<Schema$TransferJob>):
        void|GaxiosPromise<Schema$TransferJob> {
      let params =
          (paramsOrCallback || {}) as Params$Resource$Transferjobs$Create;
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
              method: 'POST'
            },
            options),
        params,
        requiredParams: [],
        pathParams: [],
        context
      };
      if (callback) {
        createAPIRequest<Schema$TransferJob>(parameters, callback);
      } else {
        return createAPIRequest<Schema$TransferJob>(parameters);
      }
    }


    /**
     * storagetransfer.transferJobs.get
     * @desc Gets a transfer job.
     * @example
     * * // BEFORE RUNNING:
     * // ---------------
     * // 1. If not already done, enable the Google Storage Transfer API
     * //    and check the quota for your project at
     * //    https://console.developers.google.com/apis/api/storagetransfer
     * // 2. This sample uses Application Default Credentials for
     * authentication.
     * //    If not already done, install the gcloud CLI from
     * //    https://cloud.google.com/sdk and run
     * //    `gcloud beta auth application-default login`.
     * //    For more information, see
     * //
     * https://developers.google.com/identity/protocols/application-default-credentials
     * // 3. Install the Node.js client library by running
     * //    `npm install googleapis --save`
     *
     * var google = require('googleapis');
     * var storagetransfer = google.storagetransfer('v1');
     *
     * authorize(function(authClient) {
     *   var request = {
     *     // The job to get.
     *     // Required.
     *     jobName: 'transferJobs/my-transfer-job',  // TODO: Update placeholder
     * value.
     *
     *     auth: authClient,
     *   };
     *
     *   storagetransfer.transferJobs.get(request, function(err, response) {
     *     if (err) {
     *       console.error(err);
     *       return;
     *     }
     *
     *     // TODO: Change code below to process the `response` object:
     *     console.log(JSON.stringify(response, null, 2));
     *   });
     * });
     *
     * function authorize(callback) {
     *   google.auth.getApplicationDefault(function(err, authClient) {
     *     if (err) {
     *       console.error('authentication failed: ', err);
     *       return;
     *     }
     *     if (authClient.createScopedRequired &&
     * authClient.createScopedRequired()) { var scopes =
     * ['https://www.googleapis.com/auth/cloud-platform']; authClient =
     * authClient.createScoped(scopes);
     *     }
     *     callback(authClient);
     *   });
     * }
     * @alias storagetransfer.transferJobs.get
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.jobName The job to get. Required.
     * @param {string=} params.projectId The ID of the Google Cloud Platform Console project that owns the job. Required.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    get(params?: Params$Resource$Transferjobs$Get,
        options?: MethodOptions): GaxiosPromise<Schema$TransferJob>;
    get(params: Params$Resource$Transferjobs$Get,
        options: MethodOptions|BodyResponseCallback<Schema$TransferJob>,
        callback: BodyResponseCallback<Schema$TransferJob>): void;
    get(params: Params$Resource$Transferjobs$Get,
        callback: BodyResponseCallback<Schema$TransferJob>): void;
    get(callback: BodyResponseCallback<Schema$TransferJob>): void;
    get(paramsOrCallback?: Params$Resource$Transferjobs$Get|
        BodyResponseCallback<Schema$TransferJob>,
        optionsOrCallback?: MethodOptions|
        BodyResponseCallback<Schema$TransferJob>,
        callback?: BodyResponseCallback<Schema$TransferJob>):
        void|GaxiosPromise<Schema$TransferJob> {
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
              method: 'GET'
            },
            options),
        params,
        requiredParams: ['jobName'],
        pathParams: ['jobName'],
        context
      };
      if (callback) {
        createAPIRequest<Schema$TransferJob>(parameters, callback);
      } else {
        return createAPIRequest<Schema$TransferJob>(parameters);
      }
    }


    /**
     * storagetransfer.transferJobs.list
     * @desc Lists transfer jobs.
     * @example
     * * // BEFORE RUNNING:
     * // ---------------
     * // 1. If not already done, enable the Google Storage Transfer API
     * //    and check the quota for your project at
     * //    https://console.developers.google.com/apis/api/storagetransfer
     * // 2. This sample uses Application Default Credentials for
     * authentication.
     * //    If not already done, install the gcloud CLI from
     * //    https://cloud.google.com/sdk and run
     * //    `gcloud beta auth application-default login`.
     * //    For more information, see
     * //
     * https://developers.google.com/identity/protocols/application-default-credentials
     * // 3. Install the Node.js client library by running
     * //    `npm install googleapis --save`
     *
     * var google = require('googleapis');
     * var storagetransfer = google.storagetransfer('v1');
     *
     * authorize(function(authClient) {
     *   var request = {
     *     auth: authClient,
     *   };
     *
     *   var handlePage = function(err, response) {
     *     if (err) {
     *       console.error(err);
     *       return;
     *     }
     *
     *     var transferJobsPage = response['transferJobs'];
     *     if (!transferJobsPage) {
     *       return;
     *     }
     *     for (var i = 0; i < transferJobsPage.length; i++) {
     *       // TODO: Change code below to process each resource in
     * `transferJobsPage`: console.log(JSON.stringify(transferJobsPage[i], null,
     * 2));
     *     }
     *
     *     if (response.nextPageToken) {
     *       request.pageToken = response.nextPageToken;
     *       storagetransfer.transferJobs.list(request, handlePage);
     *     }
     *   };
     *
     *   storagetransfer.transferJobs.list(request, handlePage);
     * });
     *
     * function authorize(callback) {
     *   google.auth.getApplicationDefault(function(err, authClient) {
     *     if (err) {
     *       console.error('authentication failed: ', err);
     *       return;
     *     }
     *     if (authClient.createScopedRequired &&
     * authClient.createScopedRequired()) { var scopes =
     * ['https://www.googleapis.com/auth/cloud-platform']; authClient =
     * authClient.createScoped(scopes);
     *     }
     *     callback(authClient);
     *   });
     * }
     * @alias storagetransfer.transferJobs.list
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string=} params.filter A list of query parameters specified as JSON text in the form of {"project_id":"my_project_id", "job_names":["jobid1","jobid2",...], "job_statuses":["status1","status2",...]}. Since `job_names` and `job_statuses` support multiple values, their values must be specified with array notation. `project_id` is required. `job_names` and `job_statuses` are optional.  The valid values for `job_statuses` are case-insensitive: `ENABLED`, `DISABLED`, and `DELETED`.
     * @param {integer=} params.pageSize The list page size. The max allowed value is 256.
     * @param {string=} params.pageToken The list page token.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list(params?: Params$Resource$Transferjobs$List, options?: MethodOptions):
        GaxiosPromise<Schema$ListTransferJobsResponse>;
    list(
        params: Params$Resource$Transferjobs$List,
        options: MethodOptions|
        BodyResponseCallback<Schema$ListTransferJobsResponse>,
        callback: BodyResponseCallback<Schema$ListTransferJobsResponse>): void;
    list(
        params: Params$Resource$Transferjobs$List,
        callback: BodyResponseCallback<Schema$ListTransferJobsResponse>): void;
    list(callback: BodyResponseCallback<Schema$ListTransferJobsResponse>): void;
    list(
        paramsOrCallback?: Params$Resource$Transferjobs$List|
        BodyResponseCallback<Schema$ListTransferJobsResponse>,
        optionsOrCallback?: MethodOptions|
        BodyResponseCallback<Schema$ListTransferJobsResponse>,
        callback?: BodyResponseCallback<Schema$ListTransferJobsResponse>):
        void|GaxiosPromise<Schema$ListTransferJobsResponse> {
      let params =
          (paramsOrCallback || {}) as Params$Resource$Transferjobs$List;
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
              method: 'GET'
            },
            options),
        params,
        requiredParams: [],
        pathParams: [],
        context
      };
      if (callback) {
        createAPIRequest<Schema$ListTransferJobsResponse>(parameters, callback);
      } else {
        return createAPIRequest<Schema$ListTransferJobsResponse>(parameters);
      }
    }


    /**
     * storagetransfer.transferJobs.patch
     * @desc Updates a transfer job. Updating a job's transfer spec does not
     * affect transfer operations that are running already. Updating the
     * scheduling of a job is not allowed.
     * @example
     * * // BEFORE RUNNING:
     * // ---------------
     * // 1. If not already done, enable the Google Storage Transfer API
     * //    and check the quota for your project at
     * //    https://console.developers.google.com/apis/api/storagetransfer
     * // 2. This sample uses Application Default Credentials for
     * authentication.
     * //    If not already done, install the gcloud CLI from
     * //    https://cloud.google.com/sdk and run
     * //    `gcloud beta auth application-default login`.
     * //    For more information, see
     * //
     * https://developers.google.com/identity/protocols/application-default-credentials
     * // 3. Install the Node.js client library by running
     * //    `npm install googleapis --save`
     *
     * var google = require('googleapis');
     * var storagetransfer = google.storagetransfer('v1');
     *
     * authorize(function(authClient) {
     *   var request = {
     *     // The name of job to update.
     *     // Required.
     *     jobName: 'transferJobs/my-transfer-job',  // TODO: Update placeholder
     * value.
     *
     *     resource: {
     *       // TODO: Add desired properties to the request body. Only these
     * properties
     *       // will be changed.
     *     },
     *
     *     auth: authClient,
     *   };
     *
     *   storagetransfer.transferJobs.patch(request, function(err, response) {
     *     if (err) {
     *       console.error(err);
     *       return;
     *     }
     *
     *     // TODO: Change code below to process the `response` object:
     *     console.log(JSON.stringify(response, null, 2));
     *   });
     * });
     *
     * function authorize(callback) {
     *   google.auth.getApplicationDefault(function(err, authClient) {
     *     if (err) {
     *       console.error('authentication failed: ', err);
     *       return;
     *     }
     *     if (authClient.createScopedRequired &&
     * authClient.createScopedRequired()) { var scopes =
     * ['https://www.googleapis.com/auth/cloud-platform']; authClient =
     * authClient.createScoped(scopes);
     *     }
     *     callback(authClient);
     *   });
     * }
     * @alias storagetransfer.transferJobs.patch
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.jobName The name of job to update. Required.
     * @param {().UpdateTransferJobRequest} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    patch(params?: Params$Resource$Transferjobs$Patch, options?: MethodOptions):
        GaxiosPromise<Schema$TransferJob>;
    patch(
        params: Params$Resource$Transferjobs$Patch,
        options: MethodOptions|BodyResponseCallback<Schema$TransferJob>,
        callback: BodyResponseCallback<Schema$TransferJob>): void;
    patch(
        params: Params$Resource$Transferjobs$Patch,
        callback: BodyResponseCallback<Schema$TransferJob>): void;
    patch(callback: BodyResponseCallback<Schema$TransferJob>): void;
    patch(
        paramsOrCallback?: Params$Resource$Transferjobs$Patch|
        BodyResponseCallback<Schema$TransferJob>,
        optionsOrCallback?: MethodOptions|
        BodyResponseCallback<Schema$TransferJob>,
        callback?: BodyResponseCallback<Schema$TransferJob>):
        void|GaxiosPromise<Schema$TransferJob> {
      let params =
          (paramsOrCallback || {}) as Params$Resource$Transferjobs$Patch;
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
              method: 'PATCH'
            },
            options),
        params,
        requiredParams: ['jobName'],
        pathParams: ['jobName'],
        context
      };
      if (callback) {
        createAPIRequest<Schema$TransferJob>(parameters, callback);
      } else {
        return createAPIRequest<Schema$TransferJob>(parameters);
      }
    }
  }

  export interface Params$Resource$Transferjobs$Create extends
      StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;


    /**
     * Request body metadata
     */
    requestBody?: Schema$TransferJob;
  }
  export interface Params$Resource$Transferjobs$Get extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * The job to get. Required.
     */
    jobName?: string;
    /**
     * The ID of the Google Cloud Platform Console project that owns the job.
     * Required.
     */
    projectId?: string;
  }
  export interface Params$Resource$Transferjobs$List extends
      StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * A list of query parameters specified as JSON text in the form of
     * {"project_id":"my_project_id", "job_names":["jobid1","jobid2",...],
     * "job_statuses":["status1","status2",...]}. Since `job_names` and
     * `job_statuses` support multiple values, their values must be specified
     * with array notation. `project_id` is required. `job_names` and
     * `job_statuses` are optional.  The valid values for `job_statuses` are
     * case-insensitive: `ENABLED`, `DISABLED`, and `DELETED`.
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
  export interface Params$Resource$Transferjobs$Patch extends
      StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * The name of job to update. Required.
     */
    jobName?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$UpdateTransferJobRequest;
  }


  export class Resource$Transferoperations {
    constructor() {}


    /**
     * storagetransfer.transferOperations.cancel
     * @desc Cancels a transfer. Use the get method to check whether the
     * cancellation succeeded or whether the operation completed despite
     * cancellation.
     * @example
     * * // BEFORE RUNNING:
     * // ---------------
     * // 1. If not already done, enable the Google Storage Transfer API
     * //    and check the quota for your project at
     * //    https://console.developers.google.com/apis/api/storagetransfer
     * // 2. This sample uses Application Default Credentials for
     * authentication.
     * //    If not already done, install the gcloud CLI from
     * //    https://cloud.google.com/sdk and run
     * //    `gcloud beta auth application-default login`.
     * //    For more information, see
     * //
     * https://developers.google.com/identity/protocols/application-default-credentials
     * // 3. Install the Node.js client library by running
     * //    `npm install googleapis --save`
     *
     * var google = require('googleapis');
     * var storagetransfer = google.storagetransfer('v1');
     *
     * authorize(function(authClient) {
     *   var request = {
     *     // The name of the operation resource to be cancelled.
     *     name: 'transferOperations/my-transfer-operation',  // TODO: Update
     * placeholder value.
     *
     *     auth: authClient,
     *   };
     *
     *   storagetransfer.transferOperations.cancel(request, function(err) {
     *     if (err) {
     *       console.error(err);
     *       return;
     *     }
     *   });
     * });
     *
     * function authorize(callback) {
     *   google.auth.getApplicationDefault(function(err, authClient) {
     *     if (err) {
     *       console.error('authentication failed: ', err);
     *       return;
     *     }
     *     if (authClient.createScopedRequired &&
     * authClient.createScopedRequired()) { var scopes =
     * ['https://www.googleapis.com/auth/cloud-platform']; authClient =
     * authClient.createScoped(scopes);
     *     }
     *     callback(authClient);
     *   });
     * }
     * @alias storagetransfer.transferOperations.cancel
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.name The name of the operation resource to be cancelled.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    cancel(
        params?: Params$Resource$Transferoperations$Cancel,
        options?: MethodOptions): GaxiosPromise<Schema$Empty>;
    cancel(
        params: Params$Resource$Transferoperations$Cancel,
        options: MethodOptions|BodyResponseCallback<Schema$Empty>,
        callback: BodyResponseCallback<Schema$Empty>): void;
    cancel(
        params: Params$Resource$Transferoperations$Cancel,
        callback: BodyResponseCallback<Schema$Empty>): void;
    cancel(callback: BodyResponseCallback<Schema$Empty>): void;
    cancel(
        paramsOrCallback?: Params$Resource$Transferoperations$Cancel|
        BodyResponseCallback<Schema$Empty>,
        optionsOrCallback?: MethodOptions|BodyResponseCallback<Schema$Empty>,
        callback?: BodyResponseCallback<Schema$Empty>):
        void|GaxiosPromise<Schema$Empty> {
      let params =
          (paramsOrCallback || {}) as Params$Resource$Transferoperations$Cancel;
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
              url: (rootUrl + '/v1/{+name}:cancel')
                       .replace(/([^:]\/)\/+/g, '$1'),
              method: 'POST'
            },
            options),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context
      };
      if (callback) {
        createAPIRequest<Schema$Empty>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Empty>(parameters);
      }
    }


    /**
     * storagetransfer.transferOperations.delete
     * @desc This method is not supported and the server returns
     * `UNIMPLEMENTED`.
     * @example
     * * // BEFORE RUNNING:
     * // ---------------
     * // 1. If not already done, enable the Google Storage Transfer API
     * //    and check the quota for your project at
     * //    https://console.developers.google.com/apis/api/storagetransfer
     * // 2. This sample uses Application Default Credentials for
     * authentication.
     * //    If not already done, install the gcloud CLI from
     * //    https://cloud.google.com/sdk and run
     * //    `gcloud beta auth application-default login`.
     * //    For more information, see
     * //
     * https://developers.google.com/identity/protocols/application-default-credentials
     * // 3. Install the Node.js client library by running
     * //    `npm install googleapis --save`
     *
     * var google = require('googleapis');
     * var storagetransfer = google.storagetransfer('v1');
     *
     * authorize(function(authClient) {
     *   var request = {
     *     // The name of the operation resource to be deleted.
     *     name: 'transferOperations/my-transfer-operation',  // TODO: Update
     * placeholder value.
     *
     *     auth: authClient,
     *   };
     *
     *   storagetransfer.transferOperations.delete(request, function(err) {
     *     if (err) {
     *       console.error(err);
     *       return;
     *     }
     *   });
     * });
     *
     * function authorize(callback) {
     *   google.auth.getApplicationDefault(function(err, authClient) {
     *     if (err) {
     *       console.error('authentication failed: ', err);
     *       return;
     *     }
     *     if (authClient.createScopedRequired &&
     * authClient.createScopedRequired()) { var scopes =
     * ['https://www.googleapis.com/auth/cloud-platform']; authClient =
     * authClient.createScoped(scopes);
     *     }
     *     callback(authClient);
     *   });
     * }
     * @alias storagetransfer.transferOperations.delete
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.name The name of the operation resource to be deleted.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    delete(
        params?: Params$Resource$Transferoperations$Delete,
        options?: MethodOptions): GaxiosPromise<Schema$Empty>;
    delete(
        params: Params$Resource$Transferoperations$Delete,
        options: MethodOptions|BodyResponseCallback<Schema$Empty>,
        callback: BodyResponseCallback<Schema$Empty>): void;
    delete(
        params: Params$Resource$Transferoperations$Delete,
        callback: BodyResponseCallback<Schema$Empty>): void;
    delete(callback: BodyResponseCallback<Schema$Empty>): void;
    delete(
        paramsOrCallback?: Params$Resource$Transferoperations$Delete|
        BodyResponseCallback<Schema$Empty>,
        optionsOrCallback?: MethodOptions|BodyResponseCallback<Schema$Empty>,
        callback?: BodyResponseCallback<Schema$Empty>):
        void|GaxiosPromise<Schema$Empty> {
      let params =
          (paramsOrCallback || {}) as Params$Resource$Transferoperations$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Transferoperations$Delete;
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
              method: 'DELETE'
            },
            options),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context
      };
      if (callback) {
        createAPIRequest<Schema$Empty>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Empty>(parameters);
      }
    }


    /**
     * storagetransfer.transferOperations.get
     * @desc Gets the latest state of a long-running operation.  Clients can use
     * this method to poll the operation result at intervals as recommended by
     * the API service.
     * @example
     * * // BEFORE RUNNING:
     * // ---------------
     * // 1. If not already done, enable the Google Storage Transfer API
     * //    and check the quota for your project at
     * //    https://console.developers.google.com/apis/api/storagetransfer
     * // 2. This sample uses Application Default Credentials for
     * authentication.
     * //    If not already done, install the gcloud CLI from
     * //    https://cloud.google.com/sdk and run
     * //    `gcloud beta auth application-default login`.
     * //    For more information, see
     * //
     * https://developers.google.com/identity/protocols/application-default-credentials
     * // 3. Install the Node.js client library by running
     * //    `npm install googleapis --save`
     *
     * var google = require('googleapis');
     * var storagetransfer = google.storagetransfer('v1');
     *
     * authorize(function(authClient) {
     *   var request = {
     *     // The name of the operation resource.
     *     name: 'transferOperations/my-transfer-operation',  // TODO: Update
     * placeholder value.
     *
     *     auth: authClient,
     *   };
     *
     *   storagetransfer.transferOperations.get(request, function(err, response)
     * { if (err) { console.error(err); return;
     *     }
     *
     *     // TODO: Change code below to process the `response` object:
     *     console.log(JSON.stringify(response, null, 2));
     *   });
     * });
     *
     * function authorize(callback) {
     *   google.auth.getApplicationDefault(function(err, authClient) {
     *     if (err) {
     *       console.error('authentication failed: ', err);
     *       return;
     *     }
     *     if (authClient.createScopedRequired &&
     * authClient.createScopedRequired()) { var scopes =
     * ['https://www.googleapis.com/auth/cloud-platform']; authClient =
     * authClient.createScoped(scopes);
     *     }
     *     callback(authClient);
     *   });
     * }
     * @alias storagetransfer.transferOperations.get
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.name The name of the operation resource.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    get(params?: Params$Resource$Transferoperations$Get,
        options?: MethodOptions): GaxiosPromise<Schema$Operation>;
    get(params: Params$Resource$Transferoperations$Get,
        options: MethodOptions|BodyResponseCallback<Schema$Operation>,
        callback: BodyResponseCallback<Schema$Operation>): void;
    get(params: Params$Resource$Transferoperations$Get,
        callback: BodyResponseCallback<Schema$Operation>): void;
    get(callback: BodyResponseCallback<Schema$Operation>): void;
    get(paramsOrCallback?: Params$Resource$Transferoperations$Get|
        BodyResponseCallback<Schema$Operation>,
        optionsOrCallback?: MethodOptions|
        BodyResponseCallback<Schema$Operation>,
        callback?: BodyResponseCallback<Schema$Operation>):
        void|GaxiosPromise<Schema$Operation> {
      let params =
          (paramsOrCallback || {}) as Params$Resource$Transferoperations$Get;
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
              method: 'GET'
            },
            options),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context
      };
      if (callback) {
        createAPIRequest<Schema$Operation>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Operation>(parameters);
      }
    }


    /**
     * storagetransfer.transferOperations.list
     * @desc Lists operations that match the specified filter in the request. If
     * the server doesn't support this method, it returns `UNIMPLEMENTED`. NOTE:
     * the `name` binding allows API services to override the binding to use
     * different resource name schemes, such as `users/x/operations`. To
     * override the binding, API services can add a binding such as
     * `"/v1/{name=users/x}/operations"` to their service configuration. For
     * backwards compatibility, the default name includes the operations
     * collection id, however overriding users must ensure the name binding is
     * the parent resource, without the operations collection id.
     * @example
     * * // BEFORE RUNNING:
     * // ---------------
     * // 1. If not already done, enable the Google Storage Transfer API
     * //    and check the quota for your project at
     * //    https://console.developers.google.com/apis/api/storagetransfer
     * // 2. This sample uses Application Default Credentials for
     * authentication.
     * //    If not already done, install the gcloud CLI from
     * //    https://cloud.google.com/sdk and run
     * //    `gcloud beta auth application-default login`.
     * //    For more information, see
     * //
     * https://developers.google.com/identity/protocols/application-default-credentials
     * // 3. Install the Node.js client library by running
     * //    `npm install googleapis --save`
     *
     * var google = require('googleapis');
     * var storagetransfer = google.storagetransfer('v1');
     *
     * authorize(function(authClient) {
     *   var request = {
     *     // The value `transferOperations`.
     *     name: 'transferOperations',  // TODO: Update placeholder value.
     *
     *     auth: authClient,
     *   };
     *
     *   var handlePage = function(err, response) {
     *     if (err) {
     *       console.error(err);
     *       return;
     *     }
     *
     *     var operationsPage = response['operations'];
     *     if (!operationsPage) {
     *       return;
     *     }
     *     for (var i = 0; i < operationsPage.length; i++) {
     *       // TODO: Change code below to process each resource in
     * `operationsPage`: console.log(JSON.stringify(operationsPage[i], null,
     * 2));
     *     }
     *
     *     if (response.nextPageToken) {
     *       request.pageToken = response.nextPageToken;
     *       storagetransfer.transferOperations.list(request, handlePage);
     *     }
     *   };
     *
     *   storagetransfer.transferOperations.list(request, handlePage);
     * });
     *
     * function authorize(callback) {
     *   google.auth.getApplicationDefault(function(err, authClient) {
     *     if (err) {
     *       console.error('authentication failed: ', err);
     *       return;
     *     }
     *     if (authClient.createScopedRequired &&
     * authClient.createScopedRequired()) { var scopes =
     * ['https://www.googleapis.com/auth/cloud-platform']; authClient =
     * authClient.createScoped(scopes);
     *     }
     *     callback(authClient);
     *   });
     * }
     * @alias storagetransfer.transferOperations.list
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string=} params.filter A list of query parameters specified as JSON text in the form of {\"project_id\" : \"my_project_id\", \"job_names\" : [\"jobid1\", \"jobid2\",...], \"operation_names\" : [\"opid1\", \"opid2\",...], \"transfer_statuses\":[\"status1\", \"status2\",...]}. Since `job_names`, `operation_names`, and `transfer_statuses` support multiple values, they must be specified with array notation. `job_names`, `operation_names`, and `transfer_statuses` are optional.
     * @param {string} params.name The value `transferOperations`.
     * @param {integer=} params.pageSize The list page size. The max allowed value is 256.
     * @param {string=} params.pageToken The list page token.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list(
        params?: Params$Resource$Transferoperations$List,
        options?: MethodOptions): GaxiosPromise<Schema$ListOperationsResponse>;
    list(
        params: Params$Resource$Transferoperations$List,
        options: MethodOptions|
        BodyResponseCallback<Schema$ListOperationsResponse>,
        callback: BodyResponseCallback<Schema$ListOperationsResponse>): void;
    list(
        params: Params$Resource$Transferoperations$List,
        callback: BodyResponseCallback<Schema$ListOperationsResponse>): void;
    list(callback: BodyResponseCallback<Schema$ListOperationsResponse>): void;
    list(
        paramsOrCallback?: Params$Resource$Transferoperations$List|
        BodyResponseCallback<Schema$ListOperationsResponse>,
        optionsOrCallback?: MethodOptions|
        BodyResponseCallback<Schema$ListOperationsResponse>,
        callback?: BodyResponseCallback<Schema$ListOperationsResponse>):
        void|GaxiosPromise<Schema$ListOperationsResponse> {
      let params =
          (paramsOrCallback || {}) as Params$Resource$Transferoperations$List;
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
              method: 'GET'
            },
            options),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context
      };
      if (callback) {
        createAPIRequest<Schema$ListOperationsResponse>(parameters, callback);
      } else {
        return createAPIRequest<Schema$ListOperationsResponse>(parameters);
      }
    }


    /**
     * storagetransfer.transferOperations.pause
     * @desc Pauses a transfer operation.
     * @example
     * * // BEFORE RUNNING:
     * // ---------------
     * // 1. If not already done, enable the Google Storage Transfer API
     * //    and check the quota for your project at
     * //    https://console.developers.google.com/apis/api/storagetransfer
     * // 2. This sample uses Application Default Credentials for
     * authentication.
     * //    If not already done, install the gcloud CLI from
     * //    https://cloud.google.com/sdk and run
     * //    `gcloud beta auth application-default login`.
     * //    For more information, see
     * //
     * https://developers.google.com/identity/protocols/application-default-credentials
     * // 3. Install the Node.js client library by running
     * //    `npm install googleapis --save`
     *
     * var google = require('googleapis');
     * var storagetransfer = google.storagetransfer('v1');
     *
     * authorize(function(authClient) {
     *   var request = {
     *     // The name of the transfer operation.
     *     // Required.
     *     name: 'transferOperations/my-transfer-operation',  // TODO: Update
     * placeholder value.
     *
     *     resource: {
     *       // TODO: Add desired properties to the request body.
     *     },
     *
     *     auth: authClient,
     *   };
     *
     *   storagetransfer.transferOperations.pause(request, function(err) {
     *     if (err) {
     *       console.error(err);
     *       return;
     *     }
     *   });
     * });
     *
     * function authorize(callback) {
     *   google.auth.getApplicationDefault(function(err, authClient) {
     *     if (err) {
     *       console.error('authentication failed: ', err);
     *       return;
     *     }
     *     if (authClient.createScopedRequired &&
     * authClient.createScopedRequired()) { var scopes =
     * ['https://www.googleapis.com/auth/cloud-platform']; authClient =
     * authClient.createScoped(scopes);
     *     }
     *     callback(authClient);
     *   });
     * }
     * @alias storagetransfer.transferOperations.pause
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.name The name of the transfer operation. Required.
     * @param {().PauseTransferOperationRequest} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    pause(
        params?: Params$Resource$Transferoperations$Pause,
        options?: MethodOptions): GaxiosPromise<Schema$Empty>;
    pause(
        params: Params$Resource$Transferoperations$Pause,
        options: MethodOptions|BodyResponseCallback<Schema$Empty>,
        callback: BodyResponseCallback<Schema$Empty>): void;
    pause(
        params: Params$Resource$Transferoperations$Pause,
        callback: BodyResponseCallback<Schema$Empty>): void;
    pause(callback: BodyResponseCallback<Schema$Empty>): void;
    pause(
        paramsOrCallback?: Params$Resource$Transferoperations$Pause|
        BodyResponseCallback<Schema$Empty>,
        optionsOrCallback?: MethodOptions|BodyResponseCallback<Schema$Empty>,
        callback?: BodyResponseCallback<Schema$Empty>):
        void|GaxiosPromise<Schema$Empty> {
      let params =
          (paramsOrCallback || {}) as Params$Resource$Transferoperations$Pause;
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
              url:
                  (rootUrl + '/v1/{+name}:pause').replace(/([^:]\/)\/+/g, '$1'),
              method: 'POST'
            },
            options),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context
      };
      if (callback) {
        createAPIRequest<Schema$Empty>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Empty>(parameters);
      }
    }


    /**
     * storagetransfer.transferOperations.resume
     * @desc Resumes a transfer operation that is paused.
     * @example
     * * // BEFORE RUNNING:
     * // ---------------
     * // 1. If not already done, enable the Google Storage Transfer API
     * //    and check the quota for your project at
     * //    https://console.developers.google.com/apis/api/storagetransfer
     * // 2. This sample uses Application Default Credentials for
     * authentication.
     * //    If not already done, install the gcloud CLI from
     * //    https://cloud.google.com/sdk and run
     * //    `gcloud beta auth application-default login`.
     * //    For more information, see
     * //
     * https://developers.google.com/identity/protocols/application-default-credentials
     * // 3. Install the Node.js client library by running
     * //    `npm install googleapis --save`
     *
     * var google = require('googleapis');
     * var storagetransfer = google.storagetransfer('v1');
     *
     * authorize(function(authClient) {
     *   var request = {
     *     // The name of the transfer operation.
     *     // Required.
     *     name: 'transferOperations/my-transfer-operation',  // TODO: Update
     * placeholder value.
     *
     *     resource: {
     *       // TODO: Add desired properties to the request body.
     *     },
     *
     *     auth: authClient,
     *   };
     *
     *   storagetransfer.transferOperations.resume(request, function(err) {
     *     if (err) {
     *       console.error(err);
     *       return;
     *     }
     *   });
     * });
     *
     * function authorize(callback) {
     *   google.auth.getApplicationDefault(function(err, authClient) {
     *     if (err) {
     *       console.error('authentication failed: ', err);
     *       return;
     *     }
     *     if (authClient.createScopedRequired &&
     * authClient.createScopedRequired()) { var scopes =
     * ['https://www.googleapis.com/auth/cloud-platform']; authClient =
     * authClient.createScoped(scopes);
     *     }
     *     callback(authClient);
     *   });
     * }
     * @alias storagetransfer.transferOperations.resume
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.name The name of the transfer operation. Required.
     * @param {().ResumeTransferOperationRequest} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    resume(
        params?: Params$Resource$Transferoperations$Resume,
        options?: MethodOptions): GaxiosPromise<Schema$Empty>;
    resume(
        params: Params$Resource$Transferoperations$Resume,
        options: MethodOptions|BodyResponseCallback<Schema$Empty>,
        callback: BodyResponseCallback<Schema$Empty>): void;
    resume(
        params: Params$Resource$Transferoperations$Resume,
        callback: BodyResponseCallback<Schema$Empty>): void;
    resume(callback: BodyResponseCallback<Schema$Empty>): void;
    resume(
        paramsOrCallback?: Params$Resource$Transferoperations$Resume|
        BodyResponseCallback<Schema$Empty>,
        optionsOrCallback?: MethodOptions|BodyResponseCallback<Schema$Empty>,
        callback?: BodyResponseCallback<Schema$Empty>):
        void|GaxiosPromise<Schema$Empty> {
      let params =
          (paramsOrCallback || {}) as Params$Resource$Transferoperations$Resume;
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
              url: (rootUrl + '/v1/{+name}:resume')
                       .replace(/([^:]\/)\/+/g, '$1'),
              method: 'POST'
            },
            options),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context
      };
      if (callback) {
        createAPIRequest<Schema$Empty>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Empty>(parameters);
      }
    }
  }

  export interface Params$Resource$Transferoperations$Cancel extends
      StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * The name of the operation resource to be cancelled.
     */
    name?: string;
  }
  export interface Params$Resource$Transferoperations$Delete extends
      StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * The name of the operation resource to be deleted.
     */
    name?: string;
  }
  export interface Params$Resource$Transferoperations$Get extends
      StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * The name of the operation resource.
     */
    name?: string;
  }
  export interface Params$Resource$Transferoperations$List extends
      StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * A list of query parameters specified as JSON text in the form of
     * {\"project_id\" : \"my_project_id\", \"job_names\" : [\"jobid1\",
     * \"jobid2\",...], \"operation_names\" : [\"opid1\", \"opid2\",...],
     * \"transfer_statuses\":[\"status1\", \"status2\",...]}. Since `job_names`,
     * `operation_names`, and `transfer_statuses` support multiple values, they
     * must be specified with array notation. `job_names`, `operation_names`,
     * and `transfer_statuses` are optional.
     */
    filter?: string;
    /**
     * The value `transferOperations`.
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
  export interface Params$Resource$Transferoperations$Pause extends
      StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * The name of the transfer operation. Required.
     */
    name?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$PauseTransferOperationRequest;
  }
  export interface Params$Resource$Transferoperations$Resume extends
      StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * The name of the transfer operation. Required.
     */
    name?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$ResumeTransferOperationRequest;
  }
}
