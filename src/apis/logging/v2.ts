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

import {
  OAuth2Client,
  JWT,
  Compute,
  UserRefreshClient,
} from 'google-auth-library';
import {
  GoogleConfigurable,
  createAPIRequest,
  MethodOptions,
  GlobalOptions,
  BodyResponseCallback,
  APIRequestContext,
} from 'googleapis-common';
import {GaxiosPromise} from 'gaxios';

// tslint:disable: no-any
// tslint:disable: class-name
// tslint:disable: variable-name
// tslint:disable: jsdoc-format
// tslint:disable: no-namespace

export namespace logging_v2 {
  export interface Options extends GlobalOptions {
    version: 'v2';
  }

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
   * Stackdriver Logging API
   *
   * Writes log entries and manages your Stackdriver Logging configuration. The table entries below are presented in alphabetical order, not in order of common use. For explanations of the concepts found in the table entries, read the Stackdriver Logging documentation.
   *
   * @example
   * const {google} = require('googleapis');
   * const logging = google.logging('v2');
   *
   * @namespace logging
   * @type {Function}
   * @version v2
   * @variation v2
   * @param {object=} options Options for Logging
   */
  export class Logging {
    context: APIRequestContext;
    billingAccounts: Resource$Billingaccounts;
    entries: Resource$Entries;
    exclusions: Resource$Exclusions;
    folders: Resource$Folders;
    logs: Resource$Logs;
    monitoredResourceDescriptors: Resource$Monitoredresourcedescriptors;
    organizations: Resource$Organizations;
    projects: Resource$Projects;
    sinks: Resource$Sinks;

    constructor(options: GlobalOptions, google?: GoogleConfigurable) {
      this.context = {
        _options: options || {},
        google,
      };

      this.billingAccounts = new Resource$Billingaccounts(this.context);
      this.entries = new Resource$Entries(this.context);
      this.exclusions = new Resource$Exclusions(this.context);
      this.folders = new Resource$Folders(this.context);
      this.logs = new Resource$Logs(this.context);
      this.monitoredResourceDescriptors = new Resource$Monitoredresourcedescriptors(
        this.context
      );
      this.organizations = new Resource$Organizations(this.context);
      this.projects = new Resource$Projects(this.context);
      this.sinks = new Resource$Sinks(this.context);
    }
  }

  /**
   * Options that change functionality of a sink exporting data to BigQuery.
   */
  export interface Schema$BigQueryOptions {
    /**
     * Optional. Whether to use BigQuery&#39;s partition tables. By default, Logging creates dated tables based on the log entries&#39; timestamps, e.g. syslog_20170523. With partitioned tables the date suffix is no longer present and special query syntax has to be used instead. In both cases, tables are sharded based on UTC timezone.
     */
    usePartitionedTables?: boolean | null;
  }
  /**
   * BucketOptions describes the bucket boundaries used to create a histogram for the distribution. The buckets can be in a linear sequence, an exponential sequence, or each bucket can be specified explicitly. BucketOptions does not include the number of values in each bucket.A bucket has an inclusive lower bound and exclusive upper bound for the values that are counted for that bucket. The upper bound of a bucket must be strictly greater than the lower bound. The sequence of N buckets for a distribution consists of an underflow bucket (number 0), zero or more finite buckets (number 1 through N - 2) and an overflow bucket (number N - 1). The buckets are contiguous: the lower bound of bucket i (i &gt; 0) is the same as the upper bound of bucket i - 1. The buckets span the whole range of finite values: lower bound of the underflow bucket is -infinity and the upper bound of the overflow bucket is +infinity. The finite buckets are so-called because both bounds are finite.
   */
  export interface Schema$BucketOptions {
    /**
     * The explicit buckets.
     */
    explicitBuckets?: Schema$Explicit;
    /**
     * The exponential buckets.
     */
    exponentialBuckets?: Schema$Exponential;
    /**
     * The linear bucket.
     */
    linearBuckets?: Schema$Linear;
  }
  /**
   * A generic empty message that you can re-use to avoid defining duplicated empty messages in your APIs. A typical example is to use it as the request or the response type of an API method. For instance: service Foo {   rpc Bar(google.protobuf.Empty) returns (google.protobuf.Empty); } The JSON representation for Empty is empty JSON object {}.
   */
  export interface Schema$Empty {}
  /**
   * Specifies a set of buckets with arbitrary widths.There are size(bounds) + 1 (= N) buckets. Bucket i has the following boundaries:Upper bound (0 &lt;= i &lt; N-1): boundsi  Lower bound (1 &lt;= i &lt; N); boundsi - 1The bounds field must contain at least one element. If bounds has only one element, then there are no finite buckets, and that single element is the common boundary of the overflow and underflow buckets.
   */
  export interface Schema$Explicit {
    /**
     * The values must be monotonically increasing.
     */
    bounds?: number[] | null;
  }
  /**
   * Specifies an exponential sequence of buckets that have a width that is proportional to the value of the lower bound. Each bucket represents a constant relative uncertainty on a specific value in the bucket.There are num_finite_buckets + 2 (= N) buckets. Bucket i has the following boundaries:Upper bound (0 &lt;= i &lt; N-1): scale * (growth_factor ^ i).  Lower bound (1 &lt;= i &lt; N): scale * (growth_factor ^ (i - 1)).
   */
  export interface Schema$Exponential {
    /**
     * Must be greater than 1.
     */
    growthFactor?: number | null;
    /**
     * Must be greater than 0.
     */
    numFiniteBuckets?: number | null;
    /**
     * Must be greater than 0.
     */
    scale?: number | null;
  }
  /**
   * A common proto for logging HTTP requests. Only contains semantics defined by the HTTP specification. Product-specific logging information MUST be defined in a separate message.
   */
  export interface Schema$HttpRequest {
    /**
     * The number of HTTP response bytes inserted into cache. Set only when a cache fill was attempted.
     */
    cacheFillBytes?: string | null;
    /**
     * Whether or not an entity was served from cache (with or without validation).
     */
    cacheHit?: boolean | null;
    /**
     * Whether or not a cache lookup was attempted.
     */
    cacheLookup?: boolean | null;
    /**
     * Whether or not the response was validated with the origin server before being served from cache. This field is only meaningful if cache_hit is True.
     */
    cacheValidatedWithOriginServer?: boolean | null;
    /**
     * The request processing latency on the server, from the time the request was received until the response was sent.
     */
    latency?: string | null;
    /**
     * Protocol used for the request. Examples: &quot;HTTP/1.1&quot;, &quot;HTTP/2&quot;, &quot;websocket&quot;
     */
    protocol?: string | null;
    /**
     * The referer URL of the request, as defined in HTTP/1.1 Header Field Definitions (http://www.w3.org/Protocols/rfc2616/rfc2616-sec14.html).
     */
    referer?: string | null;
    /**
     * The IP address (IPv4 or IPv6) of the client that issued the HTTP request. Examples: &quot;192.168.1.1&quot;, &quot;FE80::0202:B3FF:FE1E:8329&quot;.
     */
    remoteIp?: string | null;
    /**
     * The request method. Examples: &quot;GET&quot;, &quot;HEAD&quot;, &quot;PUT&quot;, &quot;POST&quot;.
     */
    requestMethod?: string | null;
    /**
     * The size of the HTTP request message in bytes, including the request headers and the request body.
     */
    requestSize?: string | null;
    /**
     * The scheme (http, https), the host name, the path and the query portion of the URL that was requested. Example: &quot;http://example.com/some/info?color=red&quot;.
     */
    requestUrl?: string | null;
    /**
     * The size of the HTTP response message sent back to the client, in bytes, including the response headers and the response body.
     */
    responseSize?: string | null;
    /**
     * The IP address (IPv4 or IPv6) of the origin server that the request was sent to.
     */
    serverIp?: string | null;
    /**
     * The response code indicating the status of response. Examples: 200, 404.
     */
    status?: number | null;
    /**
     * The user agent sent by the client. Example: &quot;Mozilla/4.0 (compatible; MSIE 6.0; Windows 98; Q312461; .NET CLR 1.0.3705)&quot;.
     */
    userAgent?: string | null;
  }
  /**
   * A description of a label.
   */
  export interface Schema$LabelDescriptor {
    /**
     * A human-readable description for the label.
     */
    description?: string | null;
    /**
     * The label key.
     */
    key?: string | null;
    /**
     * The type of data that can be assigned to the label.
     */
    valueType?: string | null;
  }
  /**
   * Specifies a linear sequence of buckets that all have the same width (except overflow and underflow). Each bucket represents a constant absolute uncertainty on the specific value in the bucket.There are num_finite_buckets + 2 (= N) buckets. Bucket i has the following boundaries:Upper bound (0 &lt;= i &lt; N-1): offset + (width * i).  Lower bound (1 &lt;= i &lt; N): offset + (width * (i - 1)).
   */
  export interface Schema$Linear {
    /**
     * Must be greater than 0.
     */
    numFiniteBuckets?: number | null;
    /**
     * Lower bound of the first bucket.
     */
    offset?: number | null;
    /**
     * Must be greater than 0.
     */
    width?: number | null;
  }
  /**
   * Result returned from ListExclusions.
   */
  export interface Schema$ListExclusionsResponse {
    /**
     * A list of exclusions.
     */
    exclusions?: Schema$LogExclusion[];
    /**
     * If there might be more results than appear in this response, then nextPageToken is included. To get the next set of results, call the same method again using the value of nextPageToken as pageToken.
     */
    nextPageToken?: string | null;
  }
  /**
   * The parameters to ListLogEntries.
   */
  export interface Schema$ListLogEntriesRequest {
    /**
     * Optional. A filter that chooses which log entries to return. See Advanced Logs Filters. Only log entries that match the filter are returned. An empty filter matches all log entries in the resources listed in resource_names. Referencing a parent resource that is not listed in resource_names will cause the filter to return no results. The maximum length of the filter is 20000 characters.
     */
    filter?: string | null;
    /**
     * Optional. How the results should be sorted. Presently, the only permitted values are &quot;timestamp asc&quot; (default) and &quot;timestamp desc&quot;. The first option returns entries in order of increasing values of LogEntry.timestamp (oldest first), and the second option returns entries in order of decreasing timestamps (newest first). Entries with equal timestamps are returned in order of their insert_id values.
     */
    orderBy?: string | null;
    /**
     * Optional. The maximum number of results to return from this request. Non-positive values are ignored. The presence of next_page_token in the response indicates that more results might be available.
     */
    pageSize?: number | null;
    /**
     * Optional. If present, then retrieve the next batch of results from the preceding call to this method. page_token must be the value of next_page_token from the previous response. The values of other method parameters should be identical to those in the previous call.
     */
    pageToken?: string | null;
    /**
     * Deprecated. Use resource_names instead. One or more project identifiers or project numbers from which to retrieve log entries. Example: &quot;my-project-1A&quot;.
     */
    projectIds?: string[] | null;
    /**
     * Required. Names of one or more parent resources from which to retrieve log entries: &quot;projects/[PROJECT_ID]&quot; &quot;organizations/[ORGANIZATION_ID]&quot; &quot;billingAccounts/[BILLING_ACCOUNT_ID]&quot; &quot;folders/[FOLDER_ID]&quot; Projects listed in the project_ids field are added to this list.
     */
    resourceNames?: string[] | null;
  }
  /**
   * Result returned from ListLogEntries.
   */
  export interface Schema$ListLogEntriesResponse {
    /**
     * A list of log entries. If entries is empty, nextPageToken may still be returned, indicating that more entries may exist. See nextPageToken for more information.
     */
    entries?: Schema$LogEntry[];
    /**
     * If there might be more results than those appearing in this response, then nextPageToken is included. To get the next set of results, call this method again using the value of nextPageToken as pageToken.If a value for next_page_token appears and the entries field is empty, it means that the search found no log entries so far but it did not have time to search all the possible log entries. Retry the method with this value for page_token to continue the search. Alternatively, consider speeding up the search by changing your filter to specify a single log name or resource type, or to narrow the time range of the search.
     */
    nextPageToken?: string | null;
  }
  /**
   * Result returned from ListLogMetrics.
   */
  export interface Schema$ListLogMetricsResponse {
    /**
     * A list of logs-based metrics.
     */
    metrics?: Schema$LogMetric[];
    /**
     * If there might be more results than appear in this response, then nextPageToken is included. To get the next set of results, call this method again using the value of nextPageToken as pageToken.
     */
    nextPageToken?: string | null;
  }
  /**
   * Result returned from ListLogs.
   */
  export interface Schema$ListLogsResponse {
    /**
     * A list of log names. For example, &quot;projects/my-project/logs/syslog&quot; or &quot;organizations/123/logs/cloudresourcemanager.googleapis.com%2Factivity&quot;.
     */
    logNames?: string[] | null;
    /**
     * If there might be more results than those appearing in this response, then nextPageToken is included. To get the next set of results, call this method again using the value of nextPageToken as pageToken.
     */
    nextPageToken?: string | null;
  }
  /**
   * Result returned from ListMonitoredResourceDescriptors.
   */
  export interface Schema$ListMonitoredResourceDescriptorsResponse {
    /**
     * If there might be more results than those appearing in this response, then nextPageToken is included. To get the next set of results, call this method again using the value of nextPageToken as pageToken.
     */
    nextPageToken?: string | null;
    /**
     * A list of resource descriptors.
     */
    resourceDescriptors?: Schema$MonitoredResourceDescriptor[];
  }
  /**
   * Result returned from ListSinks.
   */
  export interface Schema$ListSinksResponse {
    /**
     * If there might be more results than appear in this response, then nextPageToken is included. To get the next set of results, call the same method again using the value of nextPageToken as pageToken.
     */
    nextPageToken?: string | null;
    /**
     * A list of sinks.
     */
    sinks?: Schema$LogSink[];
  }
  /**
   * An individual entry in a log.
   */
  export interface Schema$LogEntry {
    /**
     * Optional. Information about the HTTP request associated with this log entry, if applicable.
     */
    httpRequest?: Schema$HttpRequest;
    /**
     * Optional. A unique identifier for the log entry. If you provide a value, then Logging considers other log entries in the same project, with the same timestamp, and with the same insert_id to be duplicates which can be removed. If omitted in new log entries, then Logging assigns its own unique identifier. The insert_id is also used to order log entries that have the same timestamp value.
     */
    insertId?: string | null;
    /**
     * The log entry payload, represented as a structure that is expressed as a JSON object.
     */
    jsonPayload?: {[key: string]: any} | null;
    /**
     * Optional. A set of user-defined (key, value) data that provides additional information about the log entry.
     */
    labels?: {[key: string]: string} | null;
    /**
     * Required. The resource name of the log to which this log entry belongs: &quot;projects/[PROJECT_ID]/logs/[LOG_ID]&quot; &quot;organizations/[ORGANIZATION_ID]/logs/[LOG_ID]&quot; &quot;billingAccounts/[BILLING_ACCOUNT_ID]/logs/[LOG_ID]&quot; &quot;folders/[FOLDER_ID]/logs/[LOG_ID]&quot; A project number may optionally be used in place of PROJECT_ID. The project number is translated to its corresponding PROJECT_ID internally and the log_name field will contain PROJECT_ID in queries and exports.[LOG_ID] must be URL-encoded within log_name. Example: &quot;organizations/1234567890/logs/cloudresourcemanager.googleapis.com%2Factivity&quot;. [LOG_ID] must be less than 512 characters long and can only include the following characters: upper and lower case alphanumeric characters, forward-slash, underscore, hyphen, and period.For backward compatibility, if log_name begins with a forward-slash, such as /projects/..., then the log entry is ingested as usual but the forward-slash is removed. Listing the log entry will not show the leading slash and filtering for a log name with a leading slash will never return any results.
     */
    logName?: string | null;
    /**
     * Deprecated. Output only. Additional metadata about the monitored resource.Only k8s_container, k8s_pod, and k8s_node MonitoredResources have this field populated for GKE versions older than 1.12.6. For GKE versions 1.12.6 and above, the metadata field has been deprecated. The Kubernetes pod labels that used to be in metadata.userLabels will now be present in the labels field with a key prefix of k8s-pod/. The Stackdriver system labels that were present in the metadata.systemLabels field will no longer be available in the LogEntry.
     */
    metadata?: Schema$MonitoredResourceMetadata;
    /**
     * Optional. Information about an operation associated with the log entry, if applicable.
     */
    operation?: Schema$LogEntryOperation;
    /**
     * The log entry payload, represented as a protocol buffer. Some Google Cloud Platform services use this field for their log entry payloads.The following protocol buffer types are supported; user-defined types are not supported:&quot;type.googleapis.com/google.cloud.audit.AuditLog&quot;  &quot;type.googleapis.com/google.appengine.logging.v1.RequestLog&quot;
     */
    protoPayload?: {[key: string]: any} | null;
    /**
     * Output only. The time the log entry was received by Logging.
     */
    receiveTimestamp?: string | null;
    /**
     * Required. The monitored resource that produced this log entry.Example: a log entry that reports a database error would be associated with the monitored resource designating the particular database that reported the error.
     */
    resource?: Schema$MonitoredResource;
    /**
     * Optional. The severity of the log entry. The default value is LogSeverity.DEFAULT.
     */
    severity?: string | null;
    /**
     * Optional. Source code location information associated with the log entry, if any.
     */
    sourceLocation?: Schema$LogEntrySourceLocation;
    /**
     * Optional. The span ID within the trace associated with the log entry.For Trace spans, this is the same format that the Trace API v2 uses: a 16-character hexadecimal encoding of an 8-byte array, such as &lt;code&gt;&quot;000000000000004a&quot;&lt;/code&gt;.
     */
    spanId?: string | null;
    /**
     * The log entry payload, represented as a Unicode string (UTF-8).
     */
    textPayload?: string | null;
    /**
     * Optional. The time the event described by the log entry occurred. This time is used to compute the log entry&#39;s age and to enforce the logs retention period. If this field is omitted in a new log entry, then Logging assigns it the current time. Timestamps have nanosecond accuracy, but trailing zeros in the fractional seconds might be omitted when the timestamp is displayed.Incoming log entries should have timestamps that are no more than the logs retention period in the past, and no more than 24 hours in the future. Log entries outside those time boundaries will not be available when calling entries.list, but those log entries can still be exported with LogSinks.
     */
    timestamp?: string | null;
    /**
     * Optional. Resource name of the trace associated with the log entry, if any. If it contains a relative resource name, the name is assumed to be relative to //tracing.googleapis.com. Example: projects/my-projectid/traces/06796866738c859f2f19b7cfb3214824
     */
    trace?: string | null;
    /**
     * Optional. The sampling decision of the trace associated with the log entry.True means that the trace resource name in the trace field was sampled for storage in a trace backend. False means that the trace was not sampled for storage when this log entry was written, or the sampling decision was unknown at the time. A non-sampled trace value is still useful as a request correlation identifier. The default is False.
     */
    traceSampled?: boolean | null;
  }
  /**
   * Additional information about a potentially long-running operation with which a log entry is associated.
   */
  export interface Schema$LogEntryOperation {
    /**
     * Optional. Set this to True if this is the first log entry in the operation.
     */
    first?: boolean | null;
    /**
     * Optional. An arbitrary operation identifier. Log entries with the same identifier are assumed to be part of the same operation.
     */
    id?: string | null;
    /**
     * Optional. Set this to True if this is the last log entry in the operation.
     */
    last?: boolean | null;
    /**
     * Optional. An arbitrary producer identifier. The combination of id and producer must be globally unique. Examples for producer: &quot;MyDivision.MyBigCompany.com&quot;, &quot;github.com/MyProject/MyApplication&quot;.
     */
    producer?: string | null;
  }
  /**
   * Additional information about the source code location that produced the log entry.
   */
  export interface Schema$LogEntrySourceLocation {
    /**
     * Optional. Source file name. Depending on the runtime environment, this might be a simple name or a fully-qualified name.
     */
    file?: string | null;
    /**
     * Optional. Human-readable name of the function or method being invoked, with optional context such as the class or package name. This information may be used in contexts such as the logs viewer, where a file and line number are less meaningful. The format can vary by language. For example: qual.if.ied.Class.method (Java), dir/package.func (Go), function (Python).
     */
    function?: string | null;
    /**
     * Optional. Line within the source file. 1-based; 0 indicates no line number available.
     */
    line?: string | null;
  }
  /**
   * Specifies a set of log entries that are not to be stored in Logging. If your GCP resource receives a large volume of logs, you can use exclusions to reduce your chargeable logs. Exclusions are processed after log sinks, so you can export log entries before they are excluded. Note that organization-level and folder-level exclusions don&#39;t apply to child resources, and that you can&#39;t exclude audit log entries.
   */
  export interface Schema$LogExclusion {
    /**
     * Output only. The creation timestamp of the exclusion.This field may not be present for older exclusions.
     */
    createTime?: string | null;
    /**
     * Optional. A description of this exclusion.
     */
    description?: string | null;
    /**
     * Optional. If set to True, then this exclusion is disabled and it does not exclude any log entries. You can update an exclusion to change the value of this field.
     */
    disabled?: boolean | null;
    /**
     * Required. An advanced logs filter that matches the log entries to be excluded. By using the sample function, you can exclude less than 100% of the matching log entries. For example, the following query matches 99% of low-severity log entries from Google Cloud Storage buckets:&quot;resource.type=gcs_bucket severity&lt;ERROR sample(insertId, 0.99)&quot;
     */
    filter?: string | null;
    /**
     * Required. A client-assigned identifier, such as &quot;load-balancer-exclusion&quot;. Identifiers are limited to 100 characters and can include only letters, digits, underscores, hyphens, and periods.
     */
    name?: string | null;
    /**
     * Output only. The last update timestamp of the exclusion.This field may not be present for older exclusions.
     */
    updateTime?: string | null;
  }
  /**
   * Application log line emitted while processing a request.
   */
  export interface Schema$LogLine {
    /**
     * App-provided log message.
     */
    logMessage?: string | null;
    /**
     * Severity of this log entry.
     */
    severity?: string | null;
    /**
     * Where in the source code this log message was written.
     */
    sourceLocation?: Schema$SourceLocation;
    /**
     * Approximate time when this log entry was made.
     */
    time?: string | null;
  }
  /**
   * Describes a logs-based metric. The value of the metric is the number of log entries that match a logs filter in a given time interval.Logs-based metric can also be used to extract values from logs and create a a distribution of the values. The distribution records the statistics of the extracted values along with an optional histogram of the values as specified by the bucket options.
   */
  export interface Schema$LogMetric {
    /**
     * Optional. The bucket_options are required when the logs-based metric is using a DISTRIBUTION value type and it describes the bucket boundaries used to create a histogram of the extracted values.
     */
    bucketOptions?: Schema$BucketOptions;
    /**
     * Output only. The creation timestamp of the metric.This field may not be present for older metrics.
     */
    createTime?: string | null;
    /**
     * Optional. A description of this metric, which is used in documentation. The maximum length of the description is 8000 characters.
     */
    description?: string | null;
    /**
     * Required. An advanced logs filter which is used to match log entries. Example: &quot;resource.type=gae_app AND severity&gt;=ERROR&quot; The maximum length of the filter is 20000 characters.
     */
    filter?: string | null;
    /**
     * Optional. A map from a label key string to an extractor expression which is used to extract data from a log entry field and assign as the label value. Each label key specified in the LabelDescriptor must have an associated extractor expression in this map. The syntax of the extractor expression is the same as for the value_extractor field.The extracted value is converted to the type defined in the label descriptor. If the either the extraction or the type conversion fails, the label will have a default value. The default value for a string label is an empty string, for an integer label its 0, and for a boolean label its false.Note that there are upper bounds on the maximum number of labels and the number of active time series that are allowed in a project.
     */
    labelExtractors?: {[key: string]: string} | null;
    /**
     * Optional. The metric descriptor associated with the logs-based metric. If unspecified, it uses a default metric descriptor with a DELTA metric kind, INT64 value type, with no labels and a unit of &quot;1&quot;. Such a metric counts the number of log entries matching the filter expression.The name, type, and description fields in the metric_descriptor are output only, and is constructed using the name and description field in the LogMetric.To create a logs-based metric that records a distribution of log values, a DELTA metric kind with a DISTRIBUTION value type must be used along with a value_extractor expression in the LogMetric.Each label in the metric descriptor must have a matching label name as the key and an extractor expression as the value in the label_extractors map.The metric_kind and value_type fields in the metric_descriptor cannot be updated once initially configured. New labels can be added in the metric_descriptor, but existing labels cannot be modified except for their description.
     */
    metricDescriptor?: Schema$MetricDescriptor;
    /**
     * Required. The client-assigned metric identifier. Examples: &quot;error_count&quot;, &quot;nginx/requests&quot;.Metric identifiers are limited to 100 characters and can include only the following characters: A-Z, a-z, 0-9, and the special characters _-.,+!*&#39;,()%/. The forward-slash character (/) denotes a hierarchy of name pieces, and it cannot be the first character of the name.The metric identifier in this field must not be URL-encoded (https://en.wikipedia.org/wiki/Percent-encoding). However, when the metric identifier appears as the [METRIC_ID] part of a metric_name API parameter, then the metric identifier must be URL-encoded. Example: &quot;projects/my-project/metrics/nginx%2Frequests&quot;.
     */
    name?: string | null;
    /**
     * Output only. The last update timestamp of the metric.This field may not be present for older metrics.
     */
    updateTime?: string | null;
    /**
     * Optional. A value_extractor is required when using a distribution logs-based metric to extract the values to record from a log entry. Two functions are supported for value extraction: EXTRACT(field) or REGEXP_EXTRACT(field, regex). The argument are:  1. field: The name of the log entry field from which the value is to be  extracted.  2. regex: A regular expression using the Google RE2 syntax  (https://github.com/google/re2/wiki/Syntax) with a single capture  group to extract data from the specified log entry field. The value  of the field is converted to a string before applying the regex.  It is an error to specify a regex that does not include exactly one  capture group.The result of the extraction must be convertible to a double type, as the distribution always records double values. If either the extraction or the conversion to double fails, then those values are not recorded in the distribution.Example: REGEXP_EXTRACT(jsonPayload.request, &quot;.*quantity=(\d+).*&quot;)
     */
    valueExtractor?: string | null;
    /**
     * Deprecated. The API version that created or updated this metric. The v2 format is used by default and cannot be changed.
     */
    version?: string | null;
  }
  /**
   * Describes a sink used to export log entries to one of the following destinations in any project: a Cloud Storage bucket, a BigQuery dataset, or a Cloud Pub/Sub topic. A logs filter controls which log entries are exported. The sink must be created within a project, organization, billing account, or folder.
   */
  export interface Schema$LogSink {
    /**
     * Optional. Options that affect sinks exporting data to BigQuery.
     */
    bigqueryOptions?: Schema$BigQueryOptions;
    /**
     * Output only. The creation timestamp of the sink.This field may not be present for older sinks.
     */
    createTime?: string | null;
    /**
     * Required. The export destination: &quot;storage.googleapis.com/[GCS_BUCKET]&quot; &quot;bigquery.googleapis.com/projects/[PROJECT_ID]/datasets/[DATASET]&quot; &quot;pubsub.googleapis.com/projects/[PROJECT_ID]/topics/[TOPIC_ID]&quot; The sink&#39;s writer_identity, set when the sink is created, must have permission to write to the destination or else the log entries are not exported. For more information, see Exporting Logs with Sinks.
     */
    destination?: string | null;
    /**
     * Optional. An advanced logs filter. The only exported log entries are those that are in the resource owning the sink and that match the filter. For example: logName=&quot;projects/[PROJECT_ID]/logs/[LOG_ID]&quot; AND severity&gt;=ERROR
     */
    filter?: string | null;
    /**
     * Optional. This field applies only to sinks owned by organizations and folders. If the field is false, the default, only the logs owned by the sink&#39;s parent resource are available for export. If the field is true, then logs from all the projects, folders, and billing accounts contained in the sink&#39;s parent resource are also available for export. Whether a particular log entry from the children is exported depends on the sink&#39;s filter expression. For example, if this field is true, then the filter resource.type=gce_instance would export all Compute Engine VM instance log entries from all projects in the sink&#39;s parent. To only export entries from certain child projects, filter on the project part of the log name: logName:(&quot;projects/test-project1/&quot; OR &quot;projects/test-project2/&quot;) AND resource.type=gce_instance
     */
    includeChildren?: boolean | null;
    /**
     * Required. The client-assigned sink identifier, unique within the project. Example: &quot;my-syslog-errors-to-pubsub&quot;. Sink identifiers are limited to 100 characters and can include only the following characters: upper and lower-case alphanumeric characters, underscores, hyphens, and periods.
     */
    name?: string | null;
    /**
     * Deprecated. The log entry format to use for this sink&#39;s exported log entries. The v2 format is used by default and cannot be changed.
     */
    outputVersionFormat?: string | null;
    /**
     * Output only. The last update timestamp of the sink.This field may not be present for older sinks.
     */
    updateTime?: string | null;
    /**
     * Output only. An IAM identity&amp;mdash;a service account or group&amp;mdash;under which Logging writes the exported log entries to the sink&#39;s destination. This field is set by sinks.create and sinks.update based on the value of unique_writer_identity in those methods.Until you grant this identity write-access to the destination, log entry exports from this sink will fail. For more information, see Granting Access for a Resource. Consult the destination service&#39;s documentation to determine the appropriate IAM roles to assign to the identity.
     */
    writerIdentity?: string | null;
  }
  /**
   * Defines a metric type and its schema. Once a metric descriptor is created, deleting or altering it stops data collection and makes the metric type&#39;s existing data unusable.
   */
  export interface Schema$MetricDescriptor {
    /**
     * A detailed description of the metric, which can be used in documentation.
     */
    description?: string | null;
    /**
     * A concise name for the metric, which can be displayed in user interfaces. Use sentence case without an ending period, for example &quot;Request count&quot;. This field is optional but it is recommended to be set for any metrics associated with user-visible concepts, such as Quota.
     */
    displayName?: string | null;
    /**
     * The set of labels that can be used to describe a specific instance of this metric type. For example, the appengine.googleapis.com/http/server/response_latencies metric type has a label for the HTTP response code, response_code, so you can look at latencies for successful responses or just for responses that failed.
     */
    labels?: Schema$LabelDescriptor[];
    /**
     * Optional. The launch stage of the metric definition.
     */
    launchStage?: string | null;
    /**
     * Optional. Metadata which can be used to guide usage of the metric.
     */
    metadata?: Schema$MetricDescriptorMetadata;
    /**
     * Whether the metric records instantaneous values, changes to a value, etc. Some combinations of metric_kind and value_type might not be supported.
     */
    metricKind?: string | null;
    /**
     * The resource name of the metric descriptor.
     */
    name?: string | null;
    /**
     * The metric type, including its DNS name prefix. The type is not URL-encoded. All user-defined metric types have the DNS name custom.googleapis.com or external.googleapis.com. Metric types should use a natural hierarchical grouping. For example: &quot;custom.googleapis.com/invoice/paid/amount&quot; &quot;external.googleapis.com/prometheus/up&quot; &quot;appengine.googleapis.com/http/server/response_latencies&quot;
     */
    type?: string | null;
    /**
     * The unit in which the metric value is reported. It is only applicable if the value_type is INT64, DOUBLE, or DISTRIBUTION. The supported units are a subset of The Unified Code for Units of Measure (http://unitsofmeasure.org/ucum.html) standard:Basic units (UNIT) bit bit By byte s second min minute h hour d dayPrefixes (PREFIX) k kilo (10**3) M mega (10**6) G giga (10**9) T tera (10**12) P peta (10**15) E exa (10**18) Z zetta (10**21) Y yotta (10**24) m milli (10**-3) u micro (10**-6) n nano (10**-9) p pico (10**-12) f femto (10**-15) a atto (10**-18) z zepto (10**-21) y yocto (10**-24) Ki kibi (2**10) Mi mebi (2**20) Gi gibi (2**30) Ti tebi (2**40)GrammarThe grammar also includes these connectors: / division (as an infix operator, e.g. 1/s). . multiplication (as an infix operator, e.g. GBy.d)The grammar for a unit is as follows: Expression = Component { &quot;.&quot; Component } { &quot;/&quot; Component } ;  Component = ( [ PREFIX ] UNIT | &quot;%&quot; ) [ Annotation ]           | Annotation           | &quot;1&quot;           ;  Annotation = &quot;{&quot; NAME &quot;}&quot; ; Notes: Annotation is just a comment if it follows a UNIT and is  equivalent to 1 if it is used alone. For examples,  {requests}/s == 1/s, By{transmitted}/s == By/s. NAME is a sequence of non-blank printable ASCII characters not  containing &#39;{&#39; or &#39;}&#39;. 1 represents dimensionless value 1, such as in 1/s. % represents dimensionless value 1/100, and annotates values giving  a percentage.
     */
    unit?: string | null;
    /**
     * Whether the measurement is an integer, a floating-point number, etc. Some combinations of metric_kind and value_type might not be supported.
     */
    valueType?: string | null;
  }
  /**
   * Additional annotations that can be used to guide the usage of a metric.
   */
  export interface Schema$MetricDescriptorMetadata {
    /**
     * The delay of data points caused by ingestion. Data points older than this age are guaranteed to be ingested and available to be read, excluding data loss due to errors.
     */
    ingestDelay?: string | null;
    /**
     * Deprecated. Please use the MetricDescriptor.launch_stage instead. The launch stage of the metric definition.
     */
    launchStage?: string | null;
    /**
     * The sampling period of metric data points. For metrics which are written periodically, consecutive data points are stored at this time interval, excluding data loss due to errors. Metrics with a higher granularity have a smaller sampling period.
     */
    samplePeriod?: string | null;
  }
  /**
   * An object representing a resource that can be used for monitoring, logging, billing, or other purposes. Examples include virtual machine instances, databases, and storage devices such as disks. The type field identifies a MonitoredResourceDescriptor object that describes the resource&#39;s schema. Information in the labels field identifies the actual resource and its attributes according to the schema. For example, a particular Compute Engine VM instance could be represented by the following object, because the MonitoredResourceDescriptor for &quot;gce_instance&quot; has labels &quot;instance_id&quot; and &quot;zone&quot;: { &quot;type&quot;: &quot;gce_instance&quot;,   &quot;labels&quot;: { &quot;instance_id&quot;: &quot;12345678901234&quot;,               &quot;zone&quot;: &quot;us-central1-a&quot; }}
   */
  export interface Schema$MonitoredResource {
    /**
     * Required. Values for all of the labels listed in the associated monitored resource descriptor. For example, Compute Engine VM instances use the labels &quot;project_id&quot;, &quot;instance_id&quot;, and &quot;zone&quot;.
     */
    labels?: {[key: string]: string} | null;
    /**
     * Required. The monitored resource type. This field must match the type field of a MonitoredResourceDescriptor object. For example, the type of a Compute Engine VM instance is gce_instance.
     */
    type?: string | null;
  }
  /**
   * An object that describes the schema of a MonitoredResource object using a type name and a set of labels. For example, the monitored resource descriptor for Google Compute Engine VM instances has a type of &quot;gce_instance&quot; and specifies the use of the labels &quot;instance_id&quot; and &quot;zone&quot; to identify particular VM instances.Different APIs can support different monitored resource types. APIs generally provide a list method that returns the monitored resource descriptors used by the API.
   */
  export interface Schema$MonitoredResourceDescriptor {
    /**
     * Optional. A detailed description of the monitored resource type that might be used in documentation.
     */
    description?: string | null;
    /**
     * Optional. A concise name for the monitored resource type that might be displayed in user interfaces. It should be a Title Cased Noun Phrase, without any article or other determiners. For example, &quot;Google Cloud SQL Database&quot;.
     */
    displayName?: string | null;
    /**
     * Required. A set of labels used to describe instances of this monitored resource type. For example, an individual Google Cloud SQL database is identified by values for the labels &quot;database_id&quot; and &quot;zone&quot;.
     */
    labels?: Schema$LabelDescriptor[];
    /**
     * Optional. The launch stage of the monitored resource definition.
     */
    launchStage?: string | null;
    /**
     * Optional. The resource name of the monitored resource descriptor: &quot;projects/{project_id}/monitoredResourceDescriptors/{type}&quot; where {type} is the value of the type field in this object and {project_id} is a project ID that provides API-specific context for accessing the type. APIs that do not use project information can use the resource name format &quot;monitoredResourceDescriptors/{type}&quot;.
     */
    name?: string | null;
    /**
     * Required. The monitored resource type. For example, the type &quot;cloudsql_database&quot; represents databases in Google Cloud SQL. The maximum length of this value is 256 characters.
     */
    type?: string | null;
  }
  /**
   * Auxiliary metadata for a MonitoredResource object. MonitoredResource objects contain the minimum set of information to uniquely identify a monitored resource instance. There is some other useful auxiliary metadata. Monitoring and Logging use an ingestion pipeline to extract metadata for cloud resources of all types, and store the metadata in this message.
   */
  export interface Schema$MonitoredResourceMetadata {
    /**
     * Output only. Values for predefined system metadata labels. System labels are a kind of metadata extracted by Google, including &quot;machine_image&quot;, &quot;vpc&quot;, &quot;subnet_id&quot;, &quot;security_group&quot;, &quot;name&quot;, etc. System label values can be only strings, Boolean values, or a list of strings. For example: { &quot;name&quot;: &quot;my-test-instance&quot;,   &quot;security_group&quot;: [&quot;a&quot;, &quot;b&quot;, &quot;c&quot;],   &quot;spot_instance&quot;: false }
     */
    systemLabels?: {[key: string]: any} | null;
    /**
     * Output only. A map of user-defined metadata labels.
     */
    userLabels?: {[key: string]: string} | null;
  }
  /**
   * Complete log information about a single HTTP request to an App Engine application.
   */
  export interface Schema$RequestLog {
    /**
     * App Engine release version.
     */
    appEngineRelease?: string | null;
    /**
     * Application that handled this request.
     */
    appId?: string | null;
    /**
     * An indication of the relative cost of serving this request.
     */
    cost?: number | null;
    /**
     * Time when the request finished.
     */
    endTime?: string | null;
    /**
     * Whether this request is finished or active.
     */
    finished?: boolean | null;
    /**
     * Whether this is the first RequestLog entry for this request. If an active request has several RequestLog entries written to Stackdriver Logging, then this field will be set for one of them.
     */
    first?: boolean | null;
    /**
     * Internet host and port number of the resource being requested.
     */
    host?: string | null;
    /**
     * HTTP version of request. Example: &quot;HTTP/1.1&quot;.
     */
    httpVersion?: string | null;
    /**
     * An identifier for the instance that handled the request.
     */
    instanceId?: string | null;
    /**
     * If the instance processing this request belongs to a manually scaled module, then this is the 0-based index of the instance. Otherwise, this value is -1.
     */
    instanceIndex?: number | null;
    /**
     * Origin IP address.
     */
    ip?: string | null;
    /**
     * Latency of the request.
     */
    latency?: string | null;
    /**
     * A list of log lines emitted by the application while serving this request.
     */
    line?: Schema$LogLine[];
    /**
     * Number of CPU megacycles used to process request.
     */
    megaCycles?: string | null;
    /**
     * Request method. Example: &quot;GET&quot;, &quot;HEAD&quot;, &quot;PUT&quot;, &quot;POST&quot;, &quot;DELETE&quot;.
     */
    method?: string | null;
    /**
     * Module of the application that handled this request.
     */
    moduleId?: string | null;
    /**
     * The logged-in user who made the request.Most likely, this is the part of the user&#39;s email before the @ sign. The field value is the same for different requests from the same user, but different users can have similar names. This information is also available to the application via the App Engine Users API.This field will be populated starting with App Engine 1.9.21.
     */
    nickname?: string | null;
    /**
     * Time this request spent in the pending request queue.
     */
    pendingTime?: string | null;
    /**
     * Referrer URL of request.
     */
    referrer?: string | null;
    /**
     * Globally unique identifier for a request, which is based on the request start time. Request IDs for requests which started later will compare greater as strings than those for requests which started earlier.
     */
    requestId?: string | null;
    /**
     * Contains the path and query portion of the URL that was requested. For example, if the URL was &quot;http://example.com/app?name=val&quot;, the resource would be &quot;/app?name=val&quot;. The fragment identifier, which is identified by the # character, is not included.
     */
    resource?: string | null;
    /**
     * Size in bytes sent back to client by request.
     */
    responseSize?: string | null;
    /**
     * Source code for the application that handled this request. There can be more than one source reference per deployed application if source code is distributed among multiple repositories.
     */
    sourceReference?: Schema$SourceReference[];
    /**
     * Time when the request started.
     */
    startTime?: string | null;
    /**
     * HTTP response status code. Example: 200, 404.
     */
    status?: number | null;
    /**
     * Task name of the request, in the case of an offline request.
     */
    taskName?: string | null;
    /**
     * Queue name of the request, in the case of an offline request.
     */
    taskQueueName?: string | null;
    /**
     * Stackdriver Trace identifier for this request.
     */
    traceId?: string | null;
    /**
     * If true, the value in the &#39;trace_id&#39; field was sampled for storage in a trace backend.
     */
    traceSampled?: boolean | null;
    /**
     * File or class that handled the request.
     */
    urlMapEntry?: string | null;
    /**
     * User agent that made the request.
     */
    userAgent?: string | null;
    /**
     * Version of the application that handled this request.
     */
    versionId?: string | null;
    /**
     * Whether this was a loading request for the instance.
     */
    wasLoadingRequest?: boolean | null;
  }
  /**
   * Specifies a location in a source code file.
   */
  export interface Schema$SourceLocation {
    /**
     * Source file name. Depending on the runtime environment, this might be a simple name or a fully-qualified name.
     */
    file?: string | null;
    /**
     * Human-readable name of the function or method being invoked, with optional context such as the class or package name. This information is used in contexts such as the logs viewer, where a file and line number are less meaningful. The format can vary by language. For example: qual.if.ied.Class.method (Java), dir/package.func (Go), function (Python).
     */
    functionName?: string | null;
    /**
     * Line within the source file.
     */
    line?: string | null;
  }
  /**
   * A reference to a particular snapshot of the source tree used to build and deploy an application.
   */
  export interface Schema$SourceReference {
    /**
     * Optional. A URI string identifying the repository. Example: &quot;https://github.com/GoogleCloudPlatform/kubernetes.git&quot;
     */
    repository?: string | null;
    /**
     * The canonical and persistent identifier of the deployed revision. Example (git): &quot;0035781c50ec7aa23385dc841529ce8a4b70db1b&quot;
     */
    revisionId?: string | null;
  }
  /**
   * The parameters to WriteLogEntries.
   */
  export interface Schema$WriteLogEntriesRequest {
    /**
     * Optional. If true, the request should expect normal response, but the entries won&#39;t be persisted nor exported. Useful for checking whether the logging API endpoints are working properly before sending valuable data.
     */
    dryRun?: boolean | null;
    /**
     * Required. The log entries to send to Logging. The order of log entries in this list does not matter. Values supplied in this method&#39;s log_name, resource, and labels fields are copied into those log entries in this list that do not include values for their corresponding fields. For more information, see the LogEntry type.If the timestamp or insert_id fields are missing in log entries, then this method supplies the current time or a unique identifier, respectively. The supplied values are chosen so that, among the log entries that did not supply their own values, the entries earlier in the list will sort before the entries later in the list. See the entries.list method.Log entries with timestamps that are more than the logs retention period in the past or more than 24 hours in the future will not be available when calling entries.list. However, those log entries can still be exported with LogSinks.To improve throughput and to avoid exceeding the quota limit for calls to entries.write, you should try to include several log entries in this list, rather than calling this method for each individual log entry.
     */
    entries?: Schema$LogEntry[];
    /**
     * Optional. Default labels that are added to the labels field of all log entries in entries. If a log entry already has a label with the same key as a label in this parameter, then the log entry&#39;s label is not changed. See LogEntry.
     */
    labels?: {[key: string]: string} | null;
    /**
     * Optional. A default log resource name that is assigned to all log entries in entries that do not specify a value for log_name: &quot;projects/[PROJECT_ID]/logs/[LOG_ID]&quot; &quot;organizations/[ORGANIZATION_ID]/logs/[LOG_ID]&quot; &quot;billingAccounts/[BILLING_ACCOUNT_ID]/logs/[LOG_ID]&quot; &quot;folders/[FOLDER_ID]/logs/[LOG_ID]&quot; [LOG_ID] must be URL-encoded. For example: &quot;projects/my-project-id/logs/syslog&quot; &quot;organizations/1234567890/logs/cloudresourcemanager.googleapis.com%2Factivity&quot; The permission &lt;code&gt;logging.logEntries.create&lt;/code&gt; is needed on each project, organization, billing account, or folder that is receiving new log entries, whether the resource is specified in &lt;code&gt;logName&lt;/code&gt; or in an individual log entry.
     */
    logName?: string | null;
    /**
     * Optional. Whether valid entries should be written even if some other entries fail due to INVALID_ARGUMENT or PERMISSION_DENIED errors. If any entry is not written, then the response status is the error associated with one of the failed entries and the response includes error details keyed by the entries&#39; zero-based index in the entries.write method.
     */
    partialSuccess?: boolean | null;
    /**
     * Optional. A default monitored resource object that is assigned to all log entries in entries that do not specify a value for resource. Example: { &quot;type&quot;: &quot;gce_instance&quot;,   &quot;labels&quot;: {     &quot;zone&quot;: &quot;us-central1-a&quot;, &quot;instance_id&quot;: &quot;00000000000000000000&quot; }} See LogEntry.
     */
    resource?: Schema$MonitoredResource;
  }
  /**
   * Result returned from WriteLogEntries. empty
   */
  export interface Schema$WriteLogEntriesResponse {}

  export class Resource$Billingaccounts {
    context: APIRequestContext;
    exclusions: Resource$Billingaccounts$Exclusions;
    logs: Resource$Billingaccounts$Logs;
    sinks: Resource$Billingaccounts$Sinks;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.exclusions = new Resource$Billingaccounts$Exclusions(this.context);
      this.logs = new Resource$Billingaccounts$Logs(this.context);
      this.sinks = new Resource$Billingaccounts$Sinks(this.context);
    }
  }

  export class Resource$Billingaccounts$Exclusions {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * logging.billingAccounts.exclusions.create
     * @desc Creates a new exclusion in a specified parent resource. Only log entries belonging to that resource can be excluded. You can have up to 10 exclusions in a resource.
     * @alias logging.billingAccounts.exclusions.create
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.parent Required. The parent resource in which to create the exclusion: "projects/[PROJECT_ID]" "organizations/[ORGANIZATION_ID]" "billingAccounts/[BILLING_ACCOUNT_ID]" "folders/[FOLDER_ID]" Examples: "projects/my-logging-project", "organizations/123456789".
     * @param {().LogExclusion} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    create(
      params?: Params$Resource$Billingaccounts$Exclusions$Create,
      options?: MethodOptions
    ): GaxiosPromise<Schema$LogExclusion>;
    create(
      params: Params$Resource$Billingaccounts$Exclusions$Create,
      options: MethodOptions | BodyResponseCallback<Schema$LogExclusion>,
      callback: BodyResponseCallback<Schema$LogExclusion>
    ): void;
    create(
      params: Params$Resource$Billingaccounts$Exclusions$Create,
      callback: BodyResponseCallback<Schema$LogExclusion>
    ): void;
    create(callback: BodyResponseCallback<Schema$LogExclusion>): void;
    create(
      paramsOrCallback?:
        | Params$Resource$Billingaccounts$Exclusions$Create
        | BodyResponseCallback<Schema$LogExclusion>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$LogExclusion>,
      callback?: BodyResponseCallback<Schema$LogExclusion>
    ): void | GaxiosPromise<Schema$LogExclusion> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Billingaccounts$Exclusions$Create;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Billingaccounts$Exclusions$Create;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://logging.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v2/{+parent}/exclusions').replace(
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
        createAPIRequest<Schema$LogExclusion>(parameters, callback);
      } else {
        return createAPIRequest<Schema$LogExclusion>(parameters);
      }
    }

    /**
     * logging.billingAccounts.exclusions.delete
     * @desc Deletes an exclusion.
     * @alias logging.billingAccounts.exclusions.delete
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.name Required. The resource name of an existing exclusion to delete: "projects/[PROJECT_ID]/exclusions/[EXCLUSION_ID]" "organizations/[ORGANIZATION_ID]/exclusions/[EXCLUSION_ID]" "billingAccounts/[BILLING_ACCOUNT_ID]/exclusions/[EXCLUSION_ID]" "folders/[FOLDER_ID]/exclusions/[EXCLUSION_ID]" Example: "projects/my-project-id/exclusions/my-exclusion-id".
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    delete(
      params?: Params$Resource$Billingaccounts$Exclusions$Delete,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Empty>;
    delete(
      params: Params$Resource$Billingaccounts$Exclusions$Delete,
      options: MethodOptions | BodyResponseCallback<Schema$Empty>,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    delete(
      params: Params$Resource$Billingaccounts$Exclusions$Delete,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    delete(callback: BodyResponseCallback<Schema$Empty>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Billingaccounts$Exclusions$Delete
        | BodyResponseCallback<Schema$Empty>,
      optionsOrCallback?: MethodOptions | BodyResponseCallback<Schema$Empty>,
      callback?: BodyResponseCallback<Schema$Empty>
    ): void | GaxiosPromise<Schema$Empty> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Billingaccounts$Exclusions$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Billingaccounts$Exclusions$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://logging.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v2/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$Empty>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Empty>(parameters);
      }
    }

    /**
     * logging.billingAccounts.exclusions.get
     * @desc Gets the description of an exclusion.
     * @alias logging.billingAccounts.exclusions.get
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.name Required. The resource name of an existing exclusion: "projects/[PROJECT_ID]/exclusions/[EXCLUSION_ID]" "organizations/[ORGANIZATION_ID]/exclusions/[EXCLUSION_ID]" "billingAccounts/[BILLING_ACCOUNT_ID]/exclusions/[EXCLUSION_ID]" "folders/[FOLDER_ID]/exclusions/[EXCLUSION_ID]" Example: "projects/my-project-id/exclusions/my-exclusion-id".
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    get(
      params?: Params$Resource$Billingaccounts$Exclusions$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$LogExclusion>;
    get(
      params: Params$Resource$Billingaccounts$Exclusions$Get,
      options: MethodOptions | BodyResponseCallback<Schema$LogExclusion>,
      callback: BodyResponseCallback<Schema$LogExclusion>
    ): void;
    get(
      params: Params$Resource$Billingaccounts$Exclusions$Get,
      callback: BodyResponseCallback<Schema$LogExclusion>
    ): void;
    get(callback: BodyResponseCallback<Schema$LogExclusion>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Billingaccounts$Exclusions$Get
        | BodyResponseCallback<Schema$LogExclusion>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$LogExclusion>,
      callback?: BodyResponseCallback<Schema$LogExclusion>
    ): void | GaxiosPromise<Schema$LogExclusion> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Billingaccounts$Exclusions$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Billingaccounts$Exclusions$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://logging.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v2/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$LogExclusion>(parameters, callback);
      } else {
        return createAPIRequest<Schema$LogExclusion>(parameters);
      }
    }

    /**
     * logging.billingAccounts.exclusions.list
     * @desc Lists all the exclusions in a parent resource.
     * @alias logging.billingAccounts.exclusions.list
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {integer=} params.pageSize Optional. The maximum number of results to return from this request. Non-positive values are ignored. The presence of nextPageToken in the response indicates that more results might be available.
     * @param {string=} params.pageToken Optional. If present, then retrieve the next batch of results from the preceding call to this method. pageToken must be the value of nextPageToken from the previous response. The values of other method parameters should be identical to those in the previous call.
     * @param {string} params.parent Required. The parent resource whose exclusions are to be listed. "projects/[PROJECT_ID]" "organizations/[ORGANIZATION_ID]" "billingAccounts/[BILLING_ACCOUNT_ID]" "folders/[FOLDER_ID]"
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list(
      params?: Params$Resource$Billingaccounts$Exclusions$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ListExclusionsResponse>;
    list(
      params: Params$Resource$Billingaccounts$Exclusions$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ListExclusionsResponse>,
      callback: BodyResponseCallback<Schema$ListExclusionsResponse>
    ): void;
    list(
      params: Params$Resource$Billingaccounts$Exclusions$List,
      callback: BodyResponseCallback<Schema$ListExclusionsResponse>
    ): void;
    list(callback: BodyResponseCallback<Schema$ListExclusionsResponse>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Billingaccounts$Exclusions$List
        | BodyResponseCallback<Schema$ListExclusionsResponse>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$ListExclusionsResponse>,
      callback?: BodyResponseCallback<Schema$ListExclusionsResponse>
    ): void | GaxiosPromise<Schema$ListExclusionsResponse> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Billingaccounts$Exclusions$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Billingaccounts$Exclusions$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://logging.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v2/{+parent}/exclusions').replace(
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
        createAPIRequest<Schema$ListExclusionsResponse>(parameters, callback);
      } else {
        return createAPIRequest<Schema$ListExclusionsResponse>(parameters);
      }
    }

    /**
     * logging.billingAccounts.exclusions.patch
     * @desc Changes one or more properties of an existing exclusion.
     * @alias logging.billingAccounts.exclusions.patch
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.name Required. The resource name of the exclusion to update: "projects/[PROJECT_ID]/exclusions/[EXCLUSION_ID]" "organizations/[ORGANIZATION_ID]/exclusions/[EXCLUSION_ID]" "billingAccounts/[BILLING_ACCOUNT_ID]/exclusions/[EXCLUSION_ID]" "folders/[FOLDER_ID]/exclusions/[EXCLUSION_ID]" Example: "projects/my-project-id/exclusions/my-exclusion-id".
     * @param {string=} params.updateMask Required. A non-empty list of fields to change in the existing exclusion. New values for the fields are taken from the corresponding fields in the LogExclusion included in this request. Fields not mentioned in update_mask are not changed and are ignored in the request.For example, to change the filter and description of an exclusion, specify an update_mask of "filter,description".
     * @param {().LogExclusion} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    patch(
      params?: Params$Resource$Billingaccounts$Exclusions$Patch,
      options?: MethodOptions
    ): GaxiosPromise<Schema$LogExclusion>;
    patch(
      params: Params$Resource$Billingaccounts$Exclusions$Patch,
      options: MethodOptions | BodyResponseCallback<Schema$LogExclusion>,
      callback: BodyResponseCallback<Schema$LogExclusion>
    ): void;
    patch(
      params: Params$Resource$Billingaccounts$Exclusions$Patch,
      callback: BodyResponseCallback<Schema$LogExclusion>
    ): void;
    patch(callback: BodyResponseCallback<Schema$LogExclusion>): void;
    patch(
      paramsOrCallback?:
        | Params$Resource$Billingaccounts$Exclusions$Patch
        | BodyResponseCallback<Schema$LogExclusion>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$LogExclusion>,
      callback?: BodyResponseCallback<Schema$LogExclusion>
    ): void | GaxiosPromise<Schema$LogExclusion> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Billingaccounts$Exclusions$Patch;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Billingaccounts$Exclusions$Patch;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://logging.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v2/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$LogExclusion>(parameters, callback);
      } else {
        return createAPIRequest<Schema$LogExclusion>(parameters);
      }
    }
  }

  export interface Params$Resource$Billingaccounts$Exclusions$Create
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Required. The parent resource in which to create the exclusion: "projects/[PROJECT_ID]" "organizations/[ORGANIZATION_ID]" "billingAccounts/[BILLING_ACCOUNT_ID]" "folders/[FOLDER_ID]" Examples: "projects/my-logging-project", "organizations/123456789".
     */
    parent?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$LogExclusion;
  }
  export interface Params$Resource$Billingaccounts$Exclusions$Delete
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Required. The resource name of an existing exclusion to delete: "projects/[PROJECT_ID]/exclusions/[EXCLUSION_ID]" "organizations/[ORGANIZATION_ID]/exclusions/[EXCLUSION_ID]" "billingAccounts/[BILLING_ACCOUNT_ID]/exclusions/[EXCLUSION_ID]" "folders/[FOLDER_ID]/exclusions/[EXCLUSION_ID]" Example: "projects/my-project-id/exclusions/my-exclusion-id".
     */
    name?: string;
  }
  export interface Params$Resource$Billingaccounts$Exclusions$Get
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Required. The resource name of an existing exclusion: "projects/[PROJECT_ID]/exclusions/[EXCLUSION_ID]" "organizations/[ORGANIZATION_ID]/exclusions/[EXCLUSION_ID]" "billingAccounts/[BILLING_ACCOUNT_ID]/exclusions/[EXCLUSION_ID]" "folders/[FOLDER_ID]/exclusions/[EXCLUSION_ID]" Example: "projects/my-project-id/exclusions/my-exclusion-id".
     */
    name?: string;
  }
  export interface Params$Resource$Billingaccounts$Exclusions$List
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Optional. The maximum number of results to return from this request. Non-positive values are ignored. The presence of nextPageToken in the response indicates that more results might be available.
     */
    pageSize?: number;
    /**
     * Optional. If present, then retrieve the next batch of results from the preceding call to this method. pageToken must be the value of nextPageToken from the previous response. The values of other method parameters should be identical to those in the previous call.
     */
    pageToken?: string;
    /**
     * Required. The parent resource whose exclusions are to be listed. "projects/[PROJECT_ID]" "organizations/[ORGANIZATION_ID]" "billingAccounts/[BILLING_ACCOUNT_ID]" "folders/[FOLDER_ID]"
     */
    parent?: string;
  }
  export interface Params$Resource$Billingaccounts$Exclusions$Patch
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Required. The resource name of the exclusion to update: "projects/[PROJECT_ID]/exclusions/[EXCLUSION_ID]" "organizations/[ORGANIZATION_ID]/exclusions/[EXCLUSION_ID]" "billingAccounts/[BILLING_ACCOUNT_ID]/exclusions/[EXCLUSION_ID]" "folders/[FOLDER_ID]/exclusions/[EXCLUSION_ID]" Example: "projects/my-project-id/exclusions/my-exclusion-id".
     */
    name?: string;
    /**
     * Required. A non-empty list of fields to change in the existing exclusion. New values for the fields are taken from the corresponding fields in the LogExclusion included in this request. Fields not mentioned in update_mask are not changed and are ignored in the request.For example, to change the filter and description of an exclusion, specify an update_mask of "filter,description".
     */
    updateMask?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$LogExclusion;
  }

  export class Resource$Billingaccounts$Logs {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * logging.billingAccounts.logs.delete
     * @desc Deletes all the log entries in a log. The log reappears if it receives new entries. Log entries written shortly before the delete operation might not be deleted.
     * @alias logging.billingAccounts.logs.delete
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.logName Required. The resource name of the log to delete: "projects/[PROJECT_ID]/logs/[LOG_ID]" "organizations/[ORGANIZATION_ID]/logs/[LOG_ID]" "billingAccounts/[BILLING_ACCOUNT_ID]/logs/[LOG_ID]" "folders/[FOLDER_ID]/logs/[LOG_ID]" [LOG_ID] must be URL-encoded. For example, "projects/my-project-id/logs/syslog", "organizations/1234567890/logs/cloudresourcemanager.googleapis.com%2Factivity". For more information about log names, see LogEntry.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    delete(
      params?: Params$Resource$Billingaccounts$Logs$Delete,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Empty>;
    delete(
      params: Params$Resource$Billingaccounts$Logs$Delete,
      options: MethodOptions | BodyResponseCallback<Schema$Empty>,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    delete(
      params: Params$Resource$Billingaccounts$Logs$Delete,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    delete(callback: BodyResponseCallback<Schema$Empty>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Billingaccounts$Logs$Delete
        | BodyResponseCallback<Schema$Empty>,
      optionsOrCallback?: MethodOptions | BodyResponseCallback<Schema$Empty>,
      callback?: BodyResponseCallback<Schema$Empty>
    ): void | GaxiosPromise<Schema$Empty> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Billingaccounts$Logs$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Billingaccounts$Logs$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://logging.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v2/{+logName}').replace(/([^:]\/)\/+/g, '$1'),
            method: 'DELETE',
          },
          options
        ),
        params,
        requiredParams: ['logName'],
        pathParams: ['logName'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Empty>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Empty>(parameters);
      }
    }

    /**
     * logging.billingAccounts.logs.list
     * @desc Lists the logs in projects, organizations, folders, or billing accounts. Only logs that have entries are listed.
     * @alias logging.billingAccounts.logs.list
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {integer=} params.pageSize Optional. The maximum number of results to return from this request. Non-positive values are ignored. The presence of nextPageToken in the response indicates that more results might be available.
     * @param {string=} params.pageToken Optional. If present, then retrieve the next batch of results from the preceding call to this method. pageToken must be the value of nextPageToken from the previous response. The values of other method parameters should be identical to those in the previous call.
     * @param {string} params.parent Required. The resource name that owns the logs: "projects/[PROJECT_ID]" "organizations/[ORGANIZATION_ID]" "billingAccounts/[BILLING_ACCOUNT_ID]" "folders/[FOLDER_ID]"
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list(
      params?: Params$Resource$Billingaccounts$Logs$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ListLogsResponse>;
    list(
      params: Params$Resource$Billingaccounts$Logs$List,
      options: MethodOptions | BodyResponseCallback<Schema$ListLogsResponse>,
      callback: BodyResponseCallback<Schema$ListLogsResponse>
    ): void;
    list(
      params: Params$Resource$Billingaccounts$Logs$List,
      callback: BodyResponseCallback<Schema$ListLogsResponse>
    ): void;
    list(callback: BodyResponseCallback<Schema$ListLogsResponse>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Billingaccounts$Logs$List
        | BodyResponseCallback<Schema$ListLogsResponse>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$ListLogsResponse>,
      callback?: BodyResponseCallback<Schema$ListLogsResponse>
    ): void | GaxiosPromise<Schema$ListLogsResponse> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Billingaccounts$Logs$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Billingaccounts$Logs$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://logging.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v2/{+parent}/logs').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$ListLogsResponse>(parameters, callback);
      } else {
        return createAPIRequest<Schema$ListLogsResponse>(parameters);
      }
    }
  }

  export interface Params$Resource$Billingaccounts$Logs$Delete
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Required. The resource name of the log to delete: "projects/[PROJECT_ID]/logs/[LOG_ID]" "organizations/[ORGANIZATION_ID]/logs/[LOG_ID]" "billingAccounts/[BILLING_ACCOUNT_ID]/logs/[LOG_ID]" "folders/[FOLDER_ID]/logs/[LOG_ID]" [LOG_ID] must be URL-encoded. For example, "projects/my-project-id/logs/syslog", "organizations/1234567890/logs/cloudresourcemanager.googleapis.com%2Factivity". For more information about log names, see LogEntry.
     */
    logName?: string;
  }
  export interface Params$Resource$Billingaccounts$Logs$List
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Optional. The maximum number of results to return from this request. Non-positive values are ignored. The presence of nextPageToken in the response indicates that more results might be available.
     */
    pageSize?: number;
    /**
     * Optional. If present, then retrieve the next batch of results from the preceding call to this method. pageToken must be the value of nextPageToken from the previous response. The values of other method parameters should be identical to those in the previous call.
     */
    pageToken?: string;
    /**
     * Required. The resource name that owns the logs: "projects/[PROJECT_ID]" "organizations/[ORGANIZATION_ID]" "billingAccounts/[BILLING_ACCOUNT_ID]" "folders/[FOLDER_ID]"
     */
    parent?: string;
  }

  export class Resource$Billingaccounts$Sinks {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * logging.billingAccounts.sinks.create
     * @desc Creates a sink that exports specified log entries to a destination. The export of newly-ingested log entries begins immediately, unless the sink's writer_identity is not permitted to write to the destination. A sink can export log entries only from the resource owning the sink.
     * @alias logging.billingAccounts.sinks.create
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.parent Required. The resource in which to create the sink: "projects/[PROJECT_ID]" "organizations/[ORGANIZATION_ID]" "billingAccounts/[BILLING_ACCOUNT_ID]" "folders/[FOLDER_ID]" Examples: "projects/my-logging-project", "organizations/123456789".
     * @param {boolean=} params.uniqueWriterIdentity Optional. Determines the kind of IAM identity returned as writer_identity in the new sink. If this value is omitted or set to false, and if the sink's parent is a project, then the value returned as writer_identity is the same group or service account used by Logging before the addition of writer identities to this API. The sink's destination must be in the same project as the sink itself.If this field is set to true, or if the sink is owned by a non-project resource such as an organization, then the value of writer_identity will be a unique service account used only for exports from the new sink. For more information, see writer_identity in LogSink.
     * @param {().LogSink} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    create(
      params?: Params$Resource$Billingaccounts$Sinks$Create,
      options?: MethodOptions
    ): GaxiosPromise<Schema$LogSink>;
    create(
      params: Params$Resource$Billingaccounts$Sinks$Create,
      options: MethodOptions | BodyResponseCallback<Schema$LogSink>,
      callback: BodyResponseCallback<Schema$LogSink>
    ): void;
    create(
      params: Params$Resource$Billingaccounts$Sinks$Create,
      callback: BodyResponseCallback<Schema$LogSink>
    ): void;
    create(callback: BodyResponseCallback<Schema$LogSink>): void;
    create(
      paramsOrCallback?:
        | Params$Resource$Billingaccounts$Sinks$Create
        | BodyResponseCallback<Schema$LogSink>,
      optionsOrCallback?: MethodOptions | BodyResponseCallback<Schema$LogSink>,
      callback?: BodyResponseCallback<Schema$LogSink>
    ): void | GaxiosPromise<Schema$LogSink> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Billingaccounts$Sinks$Create;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Billingaccounts$Sinks$Create;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://logging.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v2/{+parent}/sinks').replace(
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
        createAPIRequest<Schema$LogSink>(parameters, callback);
      } else {
        return createAPIRequest<Schema$LogSink>(parameters);
      }
    }

    /**
     * logging.billingAccounts.sinks.delete
     * @desc Deletes a sink. If the sink has a unique writer_identity, then that service account is also deleted.
     * @alias logging.billingAccounts.sinks.delete
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.sinkName Required. The full resource name of the sink to delete, including the parent resource and the sink identifier: "projects/[PROJECT_ID]/sinks/[SINK_ID]" "organizations/[ORGANIZATION_ID]/sinks/[SINK_ID]" "billingAccounts/[BILLING_ACCOUNT_ID]/sinks/[SINK_ID]" "folders/[FOLDER_ID]/sinks/[SINK_ID]" Example: "projects/my-project-id/sinks/my-sink-id".
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    delete(
      params?: Params$Resource$Billingaccounts$Sinks$Delete,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Empty>;
    delete(
      params: Params$Resource$Billingaccounts$Sinks$Delete,
      options: MethodOptions | BodyResponseCallback<Schema$Empty>,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    delete(
      params: Params$Resource$Billingaccounts$Sinks$Delete,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    delete(callback: BodyResponseCallback<Schema$Empty>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Billingaccounts$Sinks$Delete
        | BodyResponseCallback<Schema$Empty>,
      optionsOrCallback?: MethodOptions | BodyResponseCallback<Schema$Empty>,
      callback?: BodyResponseCallback<Schema$Empty>
    ): void | GaxiosPromise<Schema$Empty> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Billingaccounts$Sinks$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Billingaccounts$Sinks$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://logging.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v2/{+sinkName}').replace(/([^:]\/)\/+/g, '$1'),
            method: 'DELETE',
          },
          options
        ),
        params,
        requiredParams: ['sinkName'],
        pathParams: ['sinkName'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Empty>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Empty>(parameters);
      }
    }

    /**
     * logging.billingAccounts.sinks.get
     * @desc Gets a sink.
     * @alias logging.billingAccounts.sinks.get
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.sinkName Required. The resource name of the sink: "projects/[PROJECT_ID]/sinks/[SINK_ID]" "organizations/[ORGANIZATION_ID]/sinks/[SINK_ID]" "billingAccounts/[BILLING_ACCOUNT_ID]/sinks/[SINK_ID]" "folders/[FOLDER_ID]/sinks/[SINK_ID]" Example: "projects/my-project-id/sinks/my-sink-id".
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    get(
      params?: Params$Resource$Billingaccounts$Sinks$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$LogSink>;
    get(
      params: Params$Resource$Billingaccounts$Sinks$Get,
      options: MethodOptions | BodyResponseCallback<Schema$LogSink>,
      callback: BodyResponseCallback<Schema$LogSink>
    ): void;
    get(
      params: Params$Resource$Billingaccounts$Sinks$Get,
      callback: BodyResponseCallback<Schema$LogSink>
    ): void;
    get(callback: BodyResponseCallback<Schema$LogSink>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Billingaccounts$Sinks$Get
        | BodyResponseCallback<Schema$LogSink>,
      optionsOrCallback?: MethodOptions | BodyResponseCallback<Schema$LogSink>,
      callback?: BodyResponseCallback<Schema$LogSink>
    ): void | GaxiosPromise<Schema$LogSink> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Billingaccounts$Sinks$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Billingaccounts$Sinks$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://logging.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v2/{+sinkName}').replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['sinkName'],
        pathParams: ['sinkName'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$LogSink>(parameters, callback);
      } else {
        return createAPIRequest<Schema$LogSink>(parameters);
      }
    }

    /**
     * logging.billingAccounts.sinks.list
     * @desc Lists sinks.
     * @alias logging.billingAccounts.sinks.list
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {integer=} params.pageSize Optional. The maximum number of results to return from this request. Non-positive values are ignored. The presence of nextPageToken in the response indicates that more results might be available.
     * @param {string=} params.pageToken Optional. If present, then retrieve the next batch of results from the preceding call to this method. pageToken must be the value of nextPageToken from the previous response. The values of other method parameters should be identical to those in the previous call.
     * @param {string} params.parent Required. The parent resource whose sinks are to be listed: "projects/[PROJECT_ID]" "organizations/[ORGANIZATION_ID]" "billingAccounts/[BILLING_ACCOUNT_ID]" "folders/[FOLDER_ID]"
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list(
      params?: Params$Resource$Billingaccounts$Sinks$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ListSinksResponse>;
    list(
      params: Params$Resource$Billingaccounts$Sinks$List,
      options: MethodOptions | BodyResponseCallback<Schema$ListSinksResponse>,
      callback: BodyResponseCallback<Schema$ListSinksResponse>
    ): void;
    list(
      params: Params$Resource$Billingaccounts$Sinks$List,
      callback: BodyResponseCallback<Schema$ListSinksResponse>
    ): void;
    list(callback: BodyResponseCallback<Schema$ListSinksResponse>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Billingaccounts$Sinks$List
        | BodyResponseCallback<Schema$ListSinksResponse>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$ListSinksResponse>,
      callback?: BodyResponseCallback<Schema$ListSinksResponse>
    ): void | GaxiosPromise<Schema$ListSinksResponse> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Billingaccounts$Sinks$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Billingaccounts$Sinks$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://logging.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v2/{+parent}/sinks').replace(
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
        createAPIRequest<Schema$ListSinksResponse>(parameters, callback);
      } else {
        return createAPIRequest<Schema$ListSinksResponse>(parameters);
      }
    }

    /**
     * logging.billingAccounts.sinks.patch
     * @desc Updates a sink. This method replaces the following fields in the existing sink with values from the new sink: destination, and filter.The updated sink might also have a new writer_identity; see the unique_writer_identity field.
     * @alias logging.billingAccounts.sinks.patch
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.sinkName Required. The full resource name of the sink to update, including the parent resource and the sink identifier: "projects/[PROJECT_ID]/sinks/[SINK_ID]" "organizations/[ORGANIZATION_ID]/sinks/[SINK_ID]" "billingAccounts/[BILLING_ACCOUNT_ID]/sinks/[SINK_ID]" "folders/[FOLDER_ID]/sinks/[SINK_ID]" Example: "projects/my-project-id/sinks/my-sink-id".
     * @param {boolean=} params.uniqueWriterIdentity Optional. See sinks.create for a description of this field. When updating a sink, the effect of this field on the value of writer_identity in the updated sink depends on both the old and new values of this field: If the old and new values of this field are both false or both true, then there is no change to the sink's writer_identity. If the old value is false and the new value is true, then writer_identity is changed to a unique service account. It is an error if the old value is true and the new value is set to false or defaulted to false.
     * @param {string=} params.updateMask Optional. Field mask that specifies the fields in sink that need an update. A sink field will be overwritten if, and only if, it is in the update mask. name and output only fields cannot be updated.An empty updateMask is temporarily treated as using the following mask for backwards compatibility purposes:  destination,filter,includeChildren At some point in the future, behavior will be removed and specifying an empty updateMask will be an error.For a detailed FieldMask definition, see https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#google.protobuf.FieldMaskExample: updateMask=filter.
     * @param {().LogSink} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    patch(
      params?: Params$Resource$Billingaccounts$Sinks$Patch,
      options?: MethodOptions
    ): GaxiosPromise<Schema$LogSink>;
    patch(
      params: Params$Resource$Billingaccounts$Sinks$Patch,
      options: MethodOptions | BodyResponseCallback<Schema$LogSink>,
      callback: BodyResponseCallback<Schema$LogSink>
    ): void;
    patch(
      params: Params$Resource$Billingaccounts$Sinks$Patch,
      callback: BodyResponseCallback<Schema$LogSink>
    ): void;
    patch(callback: BodyResponseCallback<Schema$LogSink>): void;
    patch(
      paramsOrCallback?:
        | Params$Resource$Billingaccounts$Sinks$Patch
        | BodyResponseCallback<Schema$LogSink>,
      optionsOrCallback?: MethodOptions | BodyResponseCallback<Schema$LogSink>,
      callback?: BodyResponseCallback<Schema$LogSink>
    ): void | GaxiosPromise<Schema$LogSink> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Billingaccounts$Sinks$Patch;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Billingaccounts$Sinks$Patch;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://logging.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v2/{+sinkName}').replace(/([^:]\/)\/+/g, '$1'),
            method: 'PATCH',
          },
          options
        ),
        params,
        requiredParams: ['sinkName'],
        pathParams: ['sinkName'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$LogSink>(parameters, callback);
      } else {
        return createAPIRequest<Schema$LogSink>(parameters);
      }
    }

    /**
     * logging.billingAccounts.sinks.update
     * @desc Updates a sink. This method replaces the following fields in the existing sink with values from the new sink: destination, and filter.The updated sink might also have a new writer_identity; see the unique_writer_identity field.
     * @alias logging.billingAccounts.sinks.update
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.sinkName Required. The full resource name of the sink to update, including the parent resource and the sink identifier: "projects/[PROJECT_ID]/sinks/[SINK_ID]" "organizations/[ORGANIZATION_ID]/sinks/[SINK_ID]" "billingAccounts/[BILLING_ACCOUNT_ID]/sinks/[SINK_ID]" "folders/[FOLDER_ID]/sinks/[SINK_ID]" Example: "projects/my-project-id/sinks/my-sink-id".
     * @param {boolean=} params.uniqueWriterIdentity Optional. See sinks.create for a description of this field. When updating a sink, the effect of this field on the value of writer_identity in the updated sink depends on both the old and new values of this field: If the old and new values of this field are both false or both true, then there is no change to the sink's writer_identity. If the old value is false and the new value is true, then writer_identity is changed to a unique service account. It is an error if the old value is true and the new value is set to false or defaulted to false.
     * @param {string=} params.updateMask Optional. Field mask that specifies the fields in sink that need an update. A sink field will be overwritten if, and only if, it is in the update mask. name and output only fields cannot be updated.An empty updateMask is temporarily treated as using the following mask for backwards compatibility purposes:  destination,filter,includeChildren At some point in the future, behavior will be removed and specifying an empty updateMask will be an error.For a detailed FieldMask definition, see https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#google.protobuf.FieldMaskExample: updateMask=filter.
     * @param {().LogSink} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    update(
      params?: Params$Resource$Billingaccounts$Sinks$Update,
      options?: MethodOptions
    ): GaxiosPromise<Schema$LogSink>;
    update(
      params: Params$Resource$Billingaccounts$Sinks$Update,
      options: MethodOptions | BodyResponseCallback<Schema$LogSink>,
      callback: BodyResponseCallback<Schema$LogSink>
    ): void;
    update(
      params: Params$Resource$Billingaccounts$Sinks$Update,
      callback: BodyResponseCallback<Schema$LogSink>
    ): void;
    update(callback: BodyResponseCallback<Schema$LogSink>): void;
    update(
      paramsOrCallback?:
        | Params$Resource$Billingaccounts$Sinks$Update
        | BodyResponseCallback<Schema$LogSink>,
      optionsOrCallback?: MethodOptions | BodyResponseCallback<Schema$LogSink>,
      callback?: BodyResponseCallback<Schema$LogSink>
    ): void | GaxiosPromise<Schema$LogSink> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Billingaccounts$Sinks$Update;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Billingaccounts$Sinks$Update;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://logging.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v2/{+sinkName}').replace(/([^:]\/)\/+/g, '$1'),
            method: 'PUT',
          },
          options
        ),
        params,
        requiredParams: ['sinkName'],
        pathParams: ['sinkName'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$LogSink>(parameters, callback);
      } else {
        return createAPIRequest<Schema$LogSink>(parameters);
      }
    }
  }

  export interface Params$Resource$Billingaccounts$Sinks$Create
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Required. The resource in which to create the sink: "projects/[PROJECT_ID]" "organizations/[ORGANIZATION_ID]" "billingAccounts/[BILLING_ACCOUNT_ID]" "folders/[FOLDER_ID]" Examples: "projects/my-logging-project", "organizations/123456789".
     */
    parent?: string;
    /**
     * Optional. Determines the kind of IAM identity returned as writer_identity in the new sink. If this value is omitted or set to false, and if the sink's parent is a project, then the value returned as writer_identity is the same group or service account used by Logging before the addition of writer identities to this API. The sink's destination must be in the same project as the sink itself.If this field is set to true, or if the sink is owned by a non-project resource such as an organization, then the value of writer_identity will be a unique service account used only for exports from the new sink. For more information, see writer_identity in LogSink.
     */
    uniqueWriterIdentity?: boolean;

    /**
     * Request body metadata
     */
    requestBody?: Schema$LogSink;
  }
  export interface Params$Resource$Billingaccounts$Sinks$Delete
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Required. The full resource name of the sink to delete, including the parent resource and the sink identifier: "projects/[PROJECT_ID]/sinks/[SINK_ID]" "organizations/[ORGANIZATION_ID]/sinks/[SINK_ID]" "billingAccounts/[BILLING_ACCOUNT_ID]/sinks/[SINK_ID]" "folders/[FOLDER_ID]/sinks/[SINK_ID]" Example: "projects/my-project-id/sinks/my-sink-id".
     */
    sinkName?: string;
  }
  export interface Params$Resource$Billingaccounts$Sinks$Get
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Required. The resource name of the sink: "projects/[PROJECT_ID]/sinks/[SINK_ID]" "organizations/[ORGANIZATION_ID]/sinks/[SINK_ID]" "billingAccounts/[BILLING_ACCOUNT_ID]/sinks/[SINK_ID]" "folders/[FOLDER_ID]/sinks/[SINK_ID]" Example: "projects/my-project-id/sinks/my-sink-id".
     */
    sinkName?: string;
  }
  export interface Params$Resource$Billingaccounts$Sinks$List
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Optional. The maximum number of results to return from this request. Non-positive values are ignored. The presence of nextPageToken in the response indicates that more results might be available.
     */
    pageSize?: number;
    /**
     * Optional. If present, then retrieve the next batch of results from the preceding call to this method. pageToken must be the value of nextPageToken from the previous response. The values of other method parameters should be identical to those in the previous call.
     */
    pageToken?: string;
    /**
     * Required. The parent resource whose sinks are to be listed: "projects/[PROJECT_ID]" "organizations/[ORGANIZATION_ID]" "billingAccounts/[BILLING_ACCOUNT_ID]" "folders/[FOLDER_ID]"
     */
    parent?: string;
  }
  export interface Params$Resource$Billingaccounts$Sinks$Patch
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Required. The full resource name of the sink to update, including the parent resource and the sink identifier: "projects/[PROJECT_ID]/sinks/[SINK_ID]" "organizations/[ORGANIZATION_ID]/sinks/[SINK_ID]" "billingAccounts/[BILLING_ACCOUNT_ID]/sinks/[SINK_ID]" "folders/[FOLDER_ID]/sinks/[SINK_ID]" Example: "projects/my-project-id/sinks/my-sink-id".
     */
    sinkName?: string;
    /**
     * Optional. See sinks.create for a description of this field. When updating a sink, the effect of this field on the value of writer_identity in the updated sink depends on both the old and new values of this field: If the old and new values of this field are both false or both true, then there is no change to the sink's writer_identity. If the old value is false and the new value is true, then writer_identity is changed to a unique service account. It is an error if the old value is true and the new value is set to false or defaulted to false.
     */
    uniqueWriterIdentity?: boolean;
    /**
     * Optional. Field mask that specifies the fields in sink that need an update. A sink field will be overwritten if, and only if, it is in the update mask. name and output only fields cannot be updated.An empty updateMask is temporarily treated as using the following mask for backwards compatibility purposes:  destination,filter,includeChildren At some point in the future, behavior will be removed and specifying an empty updateMask will be an error.For a detailed FieldMask definition, see https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#google.protobuf.FieldMaskExample: updateMask=filter.
     */
    updateMask?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$LogSink;
  }
  export interface Params$Resource$Billingaccounts$Sinks$Update
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Required. The full resource name of the sink to update, including the parent resource and the sink identifier: "projects/[PROJECT_ID]/sinks/[SINK_ID]" "organizations/[ORGANIZATION_ID]/sinks/[SINK_ID]" "billingAccounts/[BILLING_ACCOUNT_ID]/sinks/[SINK_ID]" "folders/[FOLDER_ID]/sinks/[SINK_ID]" Example: "projects/my-project-id/sinks/my-sink-id".
     */
    sinkName?: string;
    /**
     * Optional. See sinks.create for a description of this field. When updating a sink, the effect of this field on the value of writer_identity in the updated sink depends on both the old and new values of this field: If the old and new values of this field are both false or both true, then there is no change to the sink's writer_identity. If the old value is false and the new value is true, then writer_identity is changed to a unique service account. It is an error if the old value is true and the new value is set to false or defaulted to false.
     */
    uniqueWriterIdentity?: boolean;
    /**
     * Optional. Field mask that specifies the fields in sink that need an update. A sink field will be overwritten if, and only if, it is in the update mask. name and output only fields cannot be updated.An empty updateMask is temporarily treated as using the following mask for backwards compatibility purposes:  destination,filter,includeChildren At some point in the future, behavior will be removed and specifying an empty updateMask will be an error.For a detailed FieldMask definition, see https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#google.protobuf.FieldMaskExample: updateMask=filter.
     */
    updateMask?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$LogSink;
  }

  export class Resource$Entries {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * logging.entries.list
     * @desc Lists log entries. Use this method to retrieve log entries that originated from a project/folder/organization/billing account. For ways to export log entries, see Exporting Logs.
     * @alias logging.entries.list
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {().ListLogEntriesRequest} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list(
      params?: Params$Resource$Entries$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ListLogEntriesResponse>;
    list(
      params: Params$Resource$Entries$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ListLogEntriesResponse>,
      callback: BodyResponseCallback<Schema$ListLogEntriesResponse>
    ): void;
    list(
      params: Params$Resource$Entries$List,
      callback: BodyResponseCallback<Schema$ListLogEntriesResponse>
    ): void;
    list(callback: BodyResponseCallback<Schema$ListLogEntriesResponse>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Entries$List
        | BodyResponseCallback<Schema$ListLogEntriesResponse>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$ListLogEntriesResponse>,
      callback?: BodyResponseCallback<Schema$ListLogEntriesResponse>
    ): void | GaxiosPromise<Schema$ListLogEntriesResponse> {
      let params = (paramsOrCallback || {}) as Params$Resource$Entries$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Entries$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://logging.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v2/entries:list').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$ListLogEntriesResponse>(parameters, callback);
      } else {
        return createAPIRequest<Schema$ListLogEntriesResponse>(parameters);
      }
    }

    /**
     * logging.entries.write
     * @desc Writes log entries to Logging. This API method is the only way to send log entries to Logging. This method is used, directly or indirectly, by the Logging agent (fluentd) and all logging libraries configured to use Logging. A single request may contain log entries for a maximum of 1000 different resources (projects, organizations, billing accounts or folders)
     * @alias logging.entries.write
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {().WriteLogEntriesRequest} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    write(
      params?: Params$Resource$Entries$Write,
      options?: MethodOptions
    ): GaxiosPromise<Schema$WriteLogEntriesResponse>;
    write(
      params: Params$Resource$Entries$Write,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$WriteLogEntriesResponse>,
      callback: BodyResponseCallback<Schema$WriteLogEntriesResponse>
    ): void;
    write(
      params: Params$Resource$Entries$Write,
      callback: BodyResponseCallback<Schema$WriteLogEntriesResponse>
    ): void;
    write(callback: BodyResponseCallback<Schema$WriteLogEntriesResponse>): void;
    write(
      paramsOrCallback?:
        | Params$Resource$Entries$Write
        | BodyResponseCallback<Schema$WriteLogEntriesResponse>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$WriteLogEntriesResponse>,
      callback?: BodyResponseCallback<Schema$WriteLogEntriesResponse>
    ): void | GaxiosPromise<Schema$WriteLogEntriesResponse> {
      let params = (paramsOrCallback || {}) as Params$Resource$Entries$Write;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Entries$Write;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://logging.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v2/entries:write').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$WriteLogEntriesResponse>(parameters, callback);
      } else {
        return createAPIRequest<Schema$WriteLogEntriesResponse>(parameters);
      }
    }
  }

  export interface Params$Resource$Entries$List extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Request body metadata
     */
    requestBody?: Schema$ListLogEntriesRequest;
  }
  export interface Params$Resource$Entries$Write extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Request body metadata
     */
    requestBody?: Schema$WriteLogEntriesRequest;
  }

  export class Resource$Exclusions {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * logging.exclusions.create
     * @desc Creates a new exclusion in a specified parent resource. Only log entries belonging to that resource can be excluded. You can have up to 10 exclusions in a resource.
     * @alias logging.exclusions.create
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.parent Required. The parent resource in which to create the exclusion: "projects/[PROJECT_ID]" "organizations/[ORGANIZATION_ID]" "billingAccounts/[BILLING_ACCOUNT_ID]" "folders/[FOLDER_ID]" Examples: "projects/my-logging-project", "organizations/123456789".
     * @param {().LogExclusion} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    create(
      params?: Params$Resource$Exclusions$Create,
      options?: MethodOptions
    ): GaxiosPromise<Schema$LogExclusion>;
    create(
      params: Params$Resource$Exclusions$Create,
      options: MethodOptions | BodyResponseCallback<Schema$LogExclusion>,
      callback: BodyResponseCallback<Schema$LogExclusion>
    ): void;
    create(
      params: Params$Resource$Exclusions$Create,
      callback: BodyResponseCallback<Schema$LogExclusion>
    ): void;
    create(callback: BodyResponseCallback<Schema$LogExclusion>): void;
    create(
      paramsOrCallback?:
        | Params$Resource$Exclusions$Create
        | BodyResponseCallback<Schema$LogExclusion>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$LogExclusion>,
      callback?: BodyResponseCallback<Schema$LogExclusion>
    ): void | GaxiosPromise<Schema$LogExclusion> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Exclusions$Create;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Exclusions$Create;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://logging.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v2/{+parent}/exclusions').replace(
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
        createAPIRequest<Schema$LogExclusion>(parameters, callback);
      } else {
        return createAPIRequest<Schema$LogExclusion>(parameters);
      }
    }

    /**
     * logging.exclusions.delete
     * @desc Deletes an exclusion.
     * @alias logging.exclusions.delete
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.name Required. The resource name of an existing exclusion to delete: "projects/[PROJECT_ID]/exclusions/[EXCLUSION_ID]" "organizations/[ORGANIZATION_ID]/exclusions/[EXCLUSION_ID]" "billingAccounts/[BILLING_ACCOUNT_ID]/exclusions/[EXCLUSION_ID]" "folders/[FOLDER_ID]/exclusions/[EXCLUSION_ID]" Example: "projects/my-project-id/exclusions/my-exclusion-id".
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    delete(
      params?: Params$Resource$Exclusions$Delete,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Empty>;
    delete(
      params: Params$Resource$Exclusions$Delete,
      options: MethodOptions | BodyResponseCallback<Schema$Empty>,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    delete(
      params: Params$Resource$Exclusions$Delete,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    delete(callback: BodyResponseCallback<Schema$Empty>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Exclusions$Delete
        | BodyResponseCallback<Schema$Empty>,
      optionsOrCallback?: MethodOptions | BodyResponseCallback<Schema$Empty>,
      callback?: BodyResponseCallback<Schema$Empty>
    ): void | GaxiosPromise<Schema$Empty> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Exclusions$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Exclusions$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://logging.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v2/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$Empty>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Empty>(parameters);
      }
    }

    /**
     * logging.exclusions.get
     * @desc Gets the description of an exclusion.
     * @alias logging.exclusions.get
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.name Required. The resource name of an existing exclusion: "projects/[PROJECT_ID]/exclusions/[EXCLUSION_ID]" "organizations/[ORGANIZATION_ID]/exclusions/[EXCLUSION_ID]" "billingAccounts/[BILLING_ACCOUNT_ID]/exclusions/[EXCLUSION_ID]" "folders/[FOLDER_ID]/exclusions/[EXCLUSION_ID]" Example: "projects/my-project-id/exclusions/my-exclusion-id".
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    get(
      params?: Params$Resource$Exclusions$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$LogExclusion>;
    get(
      params: Params$Resource$Exclusions$Get,
      options: MethodOptions | BodyResponseCallback<Schema$LogExclusion>,
      callback: BodyResponseCallback<Schema$LogExclusion>
    ): void;
    get(
      params: Params$Resource$Exclusions$Get,
      callback: BodyResponseCallback<Schema$LogExclusion>
    ): void;
    get(callback: BodyResponseCallback<Schema$LogExclusion>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Exclusions$Get
        | BodyResponseCallback<Schema$LogExclusion>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$LogExclusion>,
      callback?: BodyResponseCallback<Schema$LogExclusion>
    ): void | GaxiosPromise<Schema$LogExclusion> {
      let params = (paramsOrCallback || {}) as Params$Resource$Exclusions$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Exclusions$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://logging.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v2/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$LogExclusion>(parameters, callback);
      } else {
        return createAPIRequest<Schema$LogExclusion>(parameters);
      }
    }

    /**
     * logging.exclusions.list
     * @desc Lists all the exclusions in a parent resource.
     * @alias logging.exclusions.list
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {integer=} params.pageSize Optional. The maximum number of results to return from this request. Non-positive values are ignored. The presence of nextPageToken in the response indicates that more results might be available.
     * @param {string=} params.pageToken Optional. If present, then retrieve the next batch of results from the preceding call to this method. pageToken must be the value of nextPageToken from the previous response. The values of other method parameters should be identical to those in the previous call.
     * @param {string} params.parent Required. The parent resource whose exclusions are to be listed. "projects/[PROJECT_ID]" "organizations/[ORGANIZATION_ID]" "billingAccounts/[BILLING_ACCOUNT_ID]" "folders/[FOLDER_ID]"
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list(
      params?: Params$Resource$Exclusions$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ListExclusionsResponse>;
    list(
      params: Params$Resource$Exclusions$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ListExclusionsResponse>,
      callback: BodyResponseCallback<Schema$ListExclusionsResponse>
    ): void;
    list(
      params: Params$Resource$Exclusions$List,
      callback: BodyResponseCallback<Schema$ListExclusionsResponse>
    ): void;
    list(callback: BodyResponseCallback<Schema$ListExclusionsResponse>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Exclusions$List
        | BodyResponseCallback<Schema$ListExclusionsResponse>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$ListExclusionsResponse>,
      callback?: BodyResponseCallback<Schema$ListExclusionsResponse>
    ): void | GaxiosPromise<Schema$ListExclusionsResponse> {
      let params = (paramsOrCallback || {}) as Params$Resource$Exclusions$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Exclusions$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://logging.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v2/{+parent}/exclusions').replace(
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
        createAPIRequest<Schema$ListExclusionsResponse>(parameters, callback);
      } else {
        return createAPIRequest<Schema$ListExclusionsResponse>(parameters);
      }
    }

    /**
     * logging.exclusions.patch
     * @desc Changes one or more properties of an existing exclusion.
     * @alias logging.exclusions.patch
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.name Required. The resource name of the exclusion to update: "projects/[PROJECT_ID]/exclusions/[EXCLUSION_ID]" "organizations/[ORGANIZATION_ID]/exclusions/[EXCLUSION_ID]" "billingAccounts/[BILLING_ACCOUNT_ID]/exclusions/[EXCLUSION_ID]" "folders/[FOLDER_ID]/exclusions/[EXCLUSION_ID]" Example: "projects/my-project-id/exclusions/my-exclusion-id".
     * @param {string=} params.updateMask Required. A non-empty list of fields to change in the existing exclusion. New values for the fields are taken from the corresponding fields in the LogExclusion included in this request. Fields not mentioned in update_mask are not changed and are ignored in the request.For example, to change the filter and description of an exclusion, specify an update_mask of "filter,description".
     * @param {().LogExclusion} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    patch(
      params?: Params$Resource$Exclusions$Patch,
      options?: MethodOptions
    ): GaxiosPromise<Schema$LogExclusion>;
    patch(
      params: Params$Resource$Exclusions$Patch,
      options: MethodOptions | BodyResponseCallback<Schema$LogExclusion>,
      callback: BodyResponseCallback<Schema$LogExclusion>
    ): void;
    patch(
      params: Params$Resource$Exclusions$Patch,
      callback: BodyResponseCallback<Schema$LogExclusion>
    ): void;
    patch(callback: BodyResponseCallback<Schema$LogExclusion>): void;
    patch(
      paramsOrCallback?:
        | Params$Resource$Exclusions$Patch
        | BodyResponseCallback<Schema$LogExclusion>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$LogExclusion>,
      callback?: BodyResponseCallback<Schema$LogExclusion>
    ): void | GaxiosPromise<Schema$LogExclusion> {
      let params = (paramsOrCallback || {}) as Params$Resource$Exclusions$Patch;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Exclusions$Patch;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://logging.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v2/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$LogExclusion>(parameters, callback);
      } else {
        return createAPIRequest<Schema$LogExclusion>(parameters);
      }
    }
  }

  export interface Params$Resource$Exclusions$Create
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Required. The parent resource in which to create the exclusion: "projects/[PROJECT_ID]" "organizations/[ORGANIZATION_ID]" "billingAccounts/[BILLING_ACCOUNT_ID]" "folders/[FOLDER_ID]" Examples: "projects/my-logging-project", "organizations/123456789".
     */
    parent?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$LogExclusion;
  }
  export interface Params$Resource$Exclusions$Delete
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Required. The resource name of an existing exclusion to delete: "projects/[PROJECT_ID]/exclusions/[EXCLUSION_ID]" "organizations/[ORGANIZATION_ID]/exclusions/[EXCLUSION_ID]" "billingAccounts/[BILLING_ACCOUNT_ID]/exclusions/[EXCLUSION_ID]" "folders/[FOLDER_ID]/exclusions/[EXCLUSION_ID]" Example: "projects/my-project-id/exclusions/my-exclusion-id".
     */
    name?: string;
  }
  export interface Params$Resource$Exclusions$Get extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Required. The resource name of an existing exclusion: "projects/[PROJECT_ID]/exclusions/[EXCLUSION_ID]" "organizations/[ORGANIZATION_ID]/exclusions/[EXCLUSION_ID]" "billingAccounts/[BILLING_ACCOUNT_ID]/exclusions/[EXCLUSION_ID]" "folders/[FOLDER_ID]/exclusions/[EXCLUSION_ID]" Example: "projects/my-project-id/exclusions/my-exclusion-id".
     */
    name?: string;
  }
  export interface Params$Resource$Exclusions$List extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Optional. The maximum number of results to return from this request. Non-positive values are ignored. The presence of nextPageToken in the response indicates that more results might be available.
     */
    pageSize?: number;
    /**
     * Optional. If present, then retrieve the next batch of results from the preceding call to this method. pageToken must be the value of nextPageToken from the previous response. The values of other method parameters should be identical to those in the previous call.
     */
    pageToken?: string;
    /**
     * Required. The parent resource whose exclusions are to be listed. "projects/[PROJECT_ID]" "organizations/[ORGANIZATION_ID]" "billingAccounts/[BILLING_ACCOUNT_ID]" "folders/[FOLDER_ID]"
     */
    parent?: string;
  }
  export interface Params$Resource$Exclusions$Patch extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Required. The resource name of the exclusion to update: "projects/[PROJECT_ID]/exclusions/[EXCLUSION_ID]" "organizations/[ORGANIZATION_ID]/exclusions/[EXCLUSION_ID]" "billingAccounts/[BILLING_ACCOUNT_ID]/exclusions/[EXCLUSION_ID]" "folders/[FOLDER_ID]/exclusions/[EXCLUSION_ID]" Example: "projects/my-project-id/exclusions/my-exclusion-id".
     */
    name?: string;
    /**
     * Required. A non-empty list of fields to change in the existing exclusion. New values for the fields are taken from the corresponding fields in the LogExclusion included in this request. Fields not mentioned in update_mask are not changed and are ignored in the request.For example, to change the filter and description of an exclusion, specify an update_mask of "filter,description".
     */
    updateMask?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$LogExclusion;
  }

  export class Resource$Folders {
    context: APIRequestContext;
    exclusions: Resource$Folders$Exclusions;
    logs: Resource$Folders$Logs;
    sinks: Resource$Folders$Sinks;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.exclusions = new Resource$Folders$Exclusions(this.context);
      this.logs = new Resource$Folders$Logs(this.context);
      this.sinks = new Resource$Folders$Sinks(this.context);
    }
  }

  export class Resource$Folders$Exclusions {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * logging.folders.exclusions.create
     * @desc Creates a new exclusion in a specified parent resource. Only log entries belonging to that resource can be excluded. You can have up to 10 exclusions in a resource.
     * @alias logging.folders.exclusions.create
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.parent Required. The parent resource in which to create the exclusion: "projects/[PROJECT_ID]" "organizations/[ORGANIZATION_ID]" "billingAccounts/[BILLING_ACCOUNT_ID]" "folders/[FOLDER_ID]" Examples: "projects/my-logging-project", "organizations/123456789".
     * @param {().LogExclusion} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    create(
      params?: Params$Resource$Folders$Exclusions$Create,
      options?: MethodOptions
    ): GaxiosPromise<Schema$LogExclusion>;
    create(
      params: Params$Resource$Folders$Exclusions$Create,
      options: MethodOptions | BodyResponseCallback<Schema$LogExclusion>,
      callback: BodyResponseCallback<Schema$LogExclusion>
    ): void;
    create(
      params: Params$Resource$Folders$Exclusions$Create,
      callback: BodyResponseCallback<Schema$LogExclusion>
    ): void;
    create(callback: BodyResponseCallback<Schema$LogExclusion>): void;
    create(
      paramsOrCallback?:
        | Params$Resource$Folders$Exclusions$Create
        | BodyResponseCallback<Schema$LogExclusion>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$LogExclusion>,
      callback?: BodyResponseCallback<Schema$LogExclusion>
    ): void | GaxiosPromise<Schema$LogExclusion> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Folders$Exclusions$Create;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Folders$Exclusions$Create;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://logging.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v2/{+parent}/exclusions').replace(
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
        createAPIRequest<Schema$LogExclusion>(parameters, callback);
      } else {
        return createAPIRequest<Schema$LogExclusion>(parameters);
      }
    }

    /**
     * logging.folders.exclusions.delete
     * @desc Deletes an exclusion.
     * @alias logging.folders.exclusions.delete
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.name Required. The resource name of an existing exclusion to delete: "projects/[PROJECT_ID]/exclusions/[EXCLUSION_ID]" "organizations/[ORGANIZATION_ID]/exclusions/[EXCLUSION_ID]" "billingAccounts/[BILLING_ACCOUNT_ID]/exclusions/[EXCLUSION_ID]" "folders/[FOLDER_ID]/exclusions/[EXCLUSION_ID]" Example: "projects/my-project-id/exclusions/my-exclusion-id".
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    delete(
      params?: Params$Resource$Folders$Exclusions$Delete,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Empty>;
    delete(
      params: Params$Resource$Folders$Exclusions$Delete,
      options: MethodOptions | BodyResponseCallback<Schema$Empty>,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    delete(
      params: Params$Resource$Folders$Exclusions$Delete,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    delete(callback: BodyResponseCallback<Schema$Empty>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Folders$Exclusions$Delete
        | BodyResponseCallback<Schema$Empty>,
      optionsOrCallback?: MethodOptions | BodyResponseCallback<Schema$Empty>,
      callback?: BodyResponseCallback<Schema$Empty>
    ): void | GaxiosPromise<Schema$Empty> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Folders$Exclusions$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Folders$Exclusions$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://logging.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v2/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$Empty>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Empty>(parameters);
      }
    }

    /**
     * logging.folders.exclusions.get
     * @desc Gets the description of an exclusion.
     * @alias logging.folders.exclusions.get
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.name Required. The resource name of an existing exclusion: "projects/[PROJECT_ID]/exclusions/[EXCLUSION_ID]" "organizations/[ORGANIZATION_ID]/exclusions/[EXCLUSION_ID]" "billingAccounts/[BILLING_ACCOUNT_ID]/exclusions/[EXCLUSION_ID]" "folders/[FOLDER_ID]/exclusions/[EXCLUSION_ID]" Example: "projects/my-project-id/exclusions/my-exclusion-id".
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    get(
      params?: Params$Resource$Folders$Exclusions$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$LogExclusion>;
    get(
      params: Params$Resource$Folders$Exclusions$Get,
      options: MethodOptions | BodyResponseCallback<Schema$LogExclusion>,
      callback: BodyResponseCallback<Schema$LogExclusion>
    ): void;
    get(
      params: Params$Resource$Folders$Exclusions$Get,
      callback: BodyResponseCallback<Schema$LogExclusion>
    ): void;
    get(callback: BodyResponseCallback<Schema$LogExclusion>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Folders$Exclusions$Get
        | BodyResponseCallback<Schema$LogExclusion>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$LogExclusion>,
      callback?: BodyResponseCallback<Schema$LogExclusion>
    ): void | GaxiosPromise<Schema$LogExclusion> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Folders$Exclusions$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Folders$Exclusions$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://logging.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v2/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$LogExclusion>(parameters, callback);
      } else {
        return createAPIRequest<Schema$LogExclusion>(parameters);
      }
    }

    /**
     * logging.folders.exclusions.list
     * @desc Lists all the exclusions in a parent resource.
     * @alias logging.folders.exclusions.list
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {integer=} params.pageSize Optional. The maximum number of results to return from this request. Non-positive values are ignored. The presence of nextPageToken in the response indicates that more results might be available.
     * @param {string=} params.pageToken Optional. If present, then retrieve the next batch of results from the preceding call to this method. pageToken must be the value of nextPageToken from the previous response. The values of other method parameters should be identical to those in the previous call.
     * @param {string} params.parent Required. The parent resource whose exclusions are to be listed. "projects/[PROJECT_ID]" "organizations/[ORGANIZATION_ID]" "billingAccounts/[BILLING_ACCOUNT_ID]" "folders/[FOLDER_ID]"
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list(
      params?: Params$Resource$Folders$Exclusions$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ListExclusionsResponse>;
    list(
      params: Params$Resource$Folders$Exclusions$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ListExclusionsResponse>,
      callback: BodyResponseCallback<Schema$ListExclusionsResponse>
    ): void;
    list(
      params: Params$Resource$Folders$Exclusions$List,
      callback: BodyResponseCallback<Schema$ListExclusionsResponse>
    ): void;
    list(callback: BodyResponseCallback<Schema$ListExclusionsResponse>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Folders$Exclusions$List
        | BodyResponseCallback<Schema$ListExclusionsResponse>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$ListExclusionsResponse>,
      callback?: BodyResponseCallback<Schema$ListExclusionsResponse>
    ): void | GaxiosPromise<Schema$ListExclusionsResponse> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Folders$Exclusions$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Folders$Exclusions$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://logging.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v2/{+parent}/exclusions').replace(
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
        createAPIRequest<Schema$ListExclusionsResponse>(parameters, callback);
      } else {
        return createAPIRequest<Schema$ListExclusionsResponse>(parameters);
      }
    }

    /**
     * logging.folders.exclusions.patch
     * @desc Changes one or more properties of an existing exclusion.
     * @alias logging.folders.exclusions.patch
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.name Required. The resource name of the exclusion to update: "projects/[PROJECT_ID]/exclusions/[EXCLUSION_ID]" "organizations/[ORGANIZATION_ID]/exclusions/[EXCLUSION_ID]" "billingAccounts/[BILLING_ACCOUNT_ID]/exclusions/[EXCLUSION_ID]" "folders/[FOLDER_ID]/exclusions/[EXCLUSION_ID]" Example: "projects/my-project-id/exclusions/my-exclusion-id".
     * @param {string=} params.updateMask Required. A non-empty list of fields to change in the existing exclusion. New values for the fields are taken from the corresponding fields in the LogExclusion included in this request. Fields not mentioned in update_mask are not changed and are ignored in the request.For example, to change the filter and description of an exclusion, specify an update_mask of "filter,description".
     * @param {().LogExclusion} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    patch(
      params?: Params$Resource$Folders$Exclusions$Patch,
      options?: MethodOptions
    ): GaxiosPromise<Schema$LogExclusion>;
    patch(
      params: Params$Resource$Folders$Exclusions$Patch,
      options: MethodOptions | BodyResponseCallback<Schema$LogExclusion>,
      callback: BodyResponseCallback<Schema$LogExclusion>
    ): void;
    patch(
      params: Params$Resource$Folders$Exclusions$Patch,
      callback: BodyResponseCallback<Schema$LogExclusion>
    ): void;
    patch(callback: BodyResponseCallback<Schema$LogExclusion>): void;
    patch(
      paramsOrCallback?:
        | Params$Resource$Folders$Exclusions$Patch
        | BodyResponseCallback<Schema$LogExclusion>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$LogExclusion>,
      callback?: BodyResponseCallback<Schema$LogExclusion>
    ): void | GaxiosPromise<Schema$LogExclusion> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Folders$Exclusions$Patch;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Folders$Exclusions$Patch;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://logging.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v2/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$LogExclusion>(parameters, callback);
      } else {
        return createAPIRequest<Schema$LogExclusion>(parameters);
      }
    }
  }

  export interface Params$Resource$Folders$Exclusions$Create
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Required. The parent resource in which to create the exclusion: "projects/[PROJECT_ID]" "organizations/[ORGANIZATION_ID]" "billingAccounts/[BILLING_ACCOUNT_ID]" "folders/[FOLDER_ID]" Examples: "projects/my-logging-project", "organizations/123456789".
     */
    parent?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$LogExclusion;
  }
  export interface Params$Resource$Folders$Exclusions$Delete
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Required. The resource name of an existing exclusion to delete: "projects/[PROJECT_ID]/exclusions/[EXCLUSION_ID]" "organizations/[ORGANIZATION_ID]/exclusions/[EXCLUSION_ID]" "billingAccounts/[BILLING_ACCOUNT_ID]/exclusions/[EXCLUSION_ID]" "folders/[FOLDER_ID]/exclusions/[EXCLUSION_ID]" Example: "projects/my-project-id/exclusions/my-exclusion-id".
     */
    name?: string;
  }
  export interface Params$Resource$Folders$Exclusions$Get
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Required. The resource name of an existing exclusion: "projects/[PROJECT_ID]/exclusions/[EXCLUSION_ID]" "organizations/[ORGANIZATION_ID]/exclusions/[EXCLUSION_ID]" "billingAccounts/[BILLING_ACCOUNT_ID]/exclusions/[EXCLUSION_ID]" "folders/[FOLDER_ID]/exclusions/[EXCLUSION_ID]" Example: "projects/my-project-id/exclusions/my-exclusion-id".
     */
    name?: string;
  }
  export interface Params$Resource$Folders$Exclusions$List
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Optional. The maximum number of results to return from this request. Non-positive values are ignored. The presence of nextPageToken in the response indicates that more results might be available.
     */
    pageSize?: number;
    /**
     * Optional. If present, then retrieve the next batch of results from the preceding call to this method. pageToken must be the value of nextPageToken from the previous response. The values of other method parameters should be identical to those in the previous call.
     */
    pageToken?: string;
    /**
     * Required. The parent resource whose exclusions are to be listed. "projects/[PROJECT_ID]" "organizations/[ORGANIZATION_ID]" "billingAccounts/[BILLING_ACCOUNT_ID]" "folders/[FOLDER_ID]"
     */
    parent?: string;
  }
  export interface Params$Resource$Folders$Exclusions$Patch
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Required. The resource name of the exclusion to update: "projects/[PROJECT_ID]/exclusions/[EXCLUSION_ID]" "organizations/[ORGANIZATION_ID]/exclusions/[EXCLUSION_ID]" "billingAccounts/[BILLING_ACCOUNT_ID]/exclusions/[EXCLUSION_ID]" "folders/[FOLDER_ID]/exclusions/[EXCLUSION_ID]" Example: "projects/my-project-id/exclusions/my-exclusion-id".
     */
    name?: string;
    /**
     * Required. A non-empty list of fields to change in the existing exclusion. New values for the fields are taken from the corresponding fields in the LogExclusion included in this request. Fields not mentioned in update_mask are not changed and are ignored in the request.For example, to change the filter and description of an exclusion, specify an update_mask of "filter,description".
     */
    updateMask?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$LogExclusion;
  }

  export class Resource$Folders$Logs {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * logging.folders.logs.delete
     * @desc Deletes all the log entries in a log. The log reappears if it receives new entries. Log entries written shortly before the delete operation might not be deleted.
     * @alias logging.folders.logs.delete
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.logName Required. The resource name of the log to delete: "projects/[PROJECT_ID]/logs/[LOG_ID]" "organizations/[ORGANIZATION_ID]/logs/[LOG_ID]" "billingAccounts/[BILLING_ACCOUNT_ID]/logs/[LOG_ID]" "folders/[FOLDER_ID]/logs/[LOG_ID]" [LOG_ID] must be URL-encoded. For example, "projects/my-project-id/logs/syslog", "organizations/1234567890/logs/cloudresourcemanager.googleapis.com%2Factivity". For more information about log names, see LogEntry.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    delete(
      params?: Params$Resource$Folders$Logs$Delete,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Empty>;
    delete(
      params: Params$Resource$Folders$Logs$Delete,
      options: MethodOptions | BodyResponseCallback<Schema$Empty>,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    delete(
      params: Params$Resource$Folders$Logs$Delete,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    delete(callback: BodyResponseCallback<Schema$Empty>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Folders$Logs$Delete
        | BodyResponseCallback<Schema$Empty>,
      optionsOrCallback?: MethodOptions | BodyResponseCallback<Schema$Empty>,
      callback?: BodyResponseCallback<Schema$Empty>
    ): void | GaxiosPromise<Schema$Empty> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Folders$Logs$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Folders$Logs$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://logging.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v2/{+logName}').replace(/([^:]\/)\/+/g, '$1'),
            method: 'DELETE',
          },
          options
        ),
        params,
        requiredParams: ['logName'],
        pathParams: ['logName'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Empty>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Empty>(parameters);
      }
    }

    /**
     * logging.folders.logs.list
     * @desc Lists the logs in projects, organizations, folders, or billing accounts. Only logs that have entries are listed.
     * @alias logging.folders.logs.list
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {integer=} params.pageSize Optional. The maximum number of results to return from this request. Non-positive values are ignored. The presence of nextPageToken in the response indicates that more results might be available.
     * @param {string=} params.pageToken Optional. If present, then retrieve the next batch of results from the preceding call to this method. pageToken must be the value of nextPageToken from the previous response. The values of other method parameters should be identical to those in the previous call.
     * @param {string} params.parent Required. The resource name that owns the logs: "projects/[PROJECT_ID]" "organizations/[ORGANIZATION_ID]" "billingAccounts/[BILLING_ACCOUNT_ID]" "folders/[FOLDER_ID]"
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list(
      params?: Params$Resource$Folders$Logs$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ListLogsResponse>;
    list(
      params: Params$Resource$Folders$Logs$List,
      options: MethodOptions | BodyResponseCallback<Schema$ListLogsResponse>,
      callback: BodyResponseCallback<Schema$ListLogsResponse>
    ): void;
    list(
      params: Params$Resource$Folders$Logs$List,
      callback: BodyResponseCallback<Schema$ListLogsResponse>
    ): void;
    list(callback: BodyResponseCallback<Schema$ListLogsResponse>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Folders$Logs$List
        | BodyResponseCallback<Schema$ListLogsResponse>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$ListLogsResponse>,
      callback?: BodyResponseCallback<Schema$ListLogsResponse>
    ): void | GaxiosPromise<Schema$ListLogsResponse> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Folders$Logs$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Folders$Logs$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://logging.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v2/{+parent}/logs').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$ListLogsResponse>(parameters, callback);
      } else {
        return createAPIRequest<Schema$ListLogsResponse>(parameters);
      }
    }
  }

  export interface Params$Resource$Folders$Logs$Delete
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Required. The resource name of the log to delete: "projects/[PROJECT_ID]/logs/[LOG_ID]" "organizations/[ORGANIZATION_ID]/logs/[LOG_ID]" "billingAccounts/[BILLING_ACCOUNT_ID]/logs/[LOG_ID]" "folders/[FOLDER_ID]/logs/[LOG_ID]" [LOG_ID] must be URL-encoded. For example, "projects/my-project-id/logs/syslog", "organizations/1234567890/logs/cloudresourcemanager.googleapis.com%2Factivity". For more information about log names, see LogEntry.
     */
    logName?: string;
  }
  export interface Params$Resource$Folders$Logs$List
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Optional. The maximum number of results to return from this request. Non-positive values are ignored. The presence of nextPageToken in the response indicates that more results might be available.
     */
    pageSize?: number;
    /**
     * Optional. If present, then retrieve the next batch of results from the preceding call to this method. pageToken must be the value of nextPageToken from the previous response. The values of other method parameters should be identical to those in the previous call.
     */
    pageToken?: string;
    /**
     * Required. The resource name that owns the logs: "projects/[PROJECT_ID]" "organizations/[ORGANIZATION_ID]" "billingAccounts/[BILLING_ACCOUNT_ID]" "folders/[FOLDER_ID]"
     */
    parent?: string;
  }

  export class Resource$Folders$Sinks {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * logging.folders.sinks.create
     * @desc Creates a sink that exports specified log entries to a destination. The export of newly-ingested log entries begins immediately, unless the sink's writer_identity is not permitted to write to the destination. A sink can export log entries only from the resource owning the sink.
     * @alias logging.folders.sinks.create
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.parent Required. The resource in which to create the sink: "projects/[PROJECT_ID]" "organizations/[ORGANIZATION_ID]" "billingAccounts/[BILLING_ACCOUNT_ID]" "folders/[FOLDER_ID]" Examples: "projects/my-logging-project", "organizations/123456789".
     * @param {boolean=} params.uniqueWriterIdentity Optional. Determines the kind of IAM identity returned as writer_identity in the new sink. If this value is omitted or set to false, and if the sink's parent is a project, then the value returned as writer_identity is the same group or service account used by Logging before the addition of writer identities to this API. The sink's destination must be in the same project as the sink itself.If this field is set to true, or if the sink is owned by a non-project resource such as an organization, then the value of writer_identity will be a unique service account used only for exports from the new sink. For more information, see writer_identity in LogSink.
     * @param {().LogSink} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    create(
      params?: Params$Resource$Folders$Sinks$Create,
      options?: MethodOptions
    ): GaxiosPromise<Schema$LogSink>;
    create(
      params: Params$Resource$Folders$Sinks$Create,
      options: MethodOptions | BodyResponseCallback<Schema$LogSink>,
      callback: BodyResponseCallback<Schema$LogSink>
    ): void;
    create(
      params: Params$Resource$Folders$Sinks$Create,
      callback: BodyResponseCallback<Schema$LogSink>
    ): void;
    create(callback: BodyResponseCallback<Schema$LogSink>): void;
    create(
      paramsOrCallback?:
        | Params$Resource$Folders$Sinks$Create
        | BodyResponseCallback<Schema$LogSink>,
      optionsOrCallback?: MethodOptions | BodyResponseCallback<Schema$LogSink>,
      callback?: BodyResponseCallback<Schema$LogSink>
    ): void | GaxiosPromise<Schema$LogSink> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Folders$Sinks$Create;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Folders$Sinks$Create;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://logging.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v2/{+parent}/sinks').replace(
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
        createAPIRequest<Schema$LogSink>(parameters, callback);
      } else {
        return createAPIRequest<Schema$LogSink>(parameters);
      }
    }

    /**
     * logging.folders.sinks.delete
     * @desc Deletes a sink. If the sink has a unique writer_identity, then that service account is also deleted.
     * @alias logging.folders.sinks.delete
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.sinkName Required. The full resource name of the sink to delete, including the parent resource and the sink identifier: "projects/[PROJECT_ID]/sinks/[SINK_ID]" "organizations/[ORGANIZATION_ID]/sinks/[SINK_ID]" "billingAccounts/[BILLING_ACCOUNT_ID]/sinks/[SINK_ID]" "folders/[FOLDER_ID]/sinks/[SINK_ID]" Example: "projects/my-project-id/sinks/my-sink-id".
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    delete(
      params?: Params$Resource$Folders$Sinks$Delete,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Empty>;
    delete(
      params: Params$Resource$Folders$Sinks$Delete,
      options: MethodOptions | BodyResponseCallback<Schema$Empty>,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    delete(
      params: Params$Resource$Folders$Sinks$Delete,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    delete(callback: BodyResponseCallback<Schema$Empty>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Folders$Sinks$Delete
        | BodyResponseCallback<Schema$Empty>,
      optionsOrCallback?: MethodOptions | BodyResponseCallback<Schema$Empty>,
      callback?: BodyResponseCallback<Schema$Empty>
    ): void | GaxiosPromise<Schema$Empty> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Folders$Sinks$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Folders$Sinks$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://logging.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v2/{+sinkName}').replace(/([^:]\/)\/+/g, '$1'),
            method: 'DELETE',
          },
          options
        ),
        params,
        requiredParams: ['sinkName'],
        pathParams: ['sinkName'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Empty>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Empty>(parameters);
      }
    }

    /**
     * logging.folders.sinks.get
     * @desc Gets a sink.
     * @alias logging.folders.sinks.get
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.sinkName Required. The resource name of the sink: "projects/[PROJECT_ID]/sinks/[SINK_ID]" "organizations/[ORGANIZATION_ID]/sinks/[SINK_ID]" "billingAccounts/[BILLING_ACCOUNT_ID]/sinks/[SINK_ID]" "folders/[FOLDER_ID]/sinks/[SINK_ID]" Example: "projects/my-project-id/sinks/my-sink-id".
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    get(
      params?: Params$Resource$Folders$Sinks$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$LogSink>;
    get(
      params: Params$Resource$Folders$Sinks$Get,
      options: MethodOptions | BodyResponseCallback<Schema$LogSink>,
      callback: BodyResponseCallback<Schema$LogSink>
    ): void;
    get(
      params: Params$Resource$Folders$Sinks$Get,
      callback: BodyResponseCallback<Schema$LogSink>
    ): void;
    get(callback: BodyResponseCallback<Schema$LogSink>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Folders$Sinks$Get
        | BodyResponseCallback<Schema$LogSink>,
      optionsOrCallback?: MethodOptions | BodyResponseCallback<Schema$LogSink>,
      callback?: BodyResponseCallback<Schema$LogSink>
    ): void | GaxiosPromise<Schema$LogSink> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Folders$Sinks$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Folders$Sinks$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://logging.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v2/{+sinkName}').replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['sinkName'],
        pathParams: ['sinkName'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$LogSink>(parameters, callback);
      } else {
        return createAPIRequest<Schema$LogSink>(parameters);
      }
    }

    /**
     * logging.folders.sinks.list
     * @desc Lists sinks.
     * @alias logging.folders.sinks.list
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {integer=} params.pageSize Optional. The maximum number of results to return from this request. Non-positive values are ignored. The presence of nextPageToken in the response indicates that more results might be available.
     * @param {string=} params.pageToken Optional. If present, then retrieve the next batch of results from the preceding call to this method. pageToken must be the value of nextPageToken from the previous response. The values of other method parameters should be identical to those in the previous call.
     * @param {string} params.parent Required. The parent resource whose sinks are to be listed: "projects/[PROJECT_ID]" "organizations/[ORGANIZATION_ID]" "billingAccounts/[BILLING_ACCOUNT_ID]" "folders/[FOLDER_ID]"
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list(
      params?: Params$Resource$Folders$Sinks$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ListSinksResponse>;
    list(
      params: Params$Resource$Folders$Sinks$List,
      options: MethodOptions | BodyResponseCallback<Schema$ListSinksResponse>,
      callback: BodyResponseCallback<Schema$ListSinksResponse>
    ): void;
    list(
      params: Params$Resource$Folders$Sinks$List,
      callback: BodyResponseCallback<Schema$ListSinksResponse>
    ): void;
    list(callback: BodyResponseCallback<Schema$ListSinksResponse>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Folders$Sinks$List
        | BodyResponseCallback<Schema$ListSinksResponse>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$ListSinksResponse>,
      callback?: BodyResponseCallback<Schema$ListSinksResponse>
    ): void | GaxiosPromise<Schema$ListSinksResponse> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Folders$Sinks$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Folders$Sinks$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://logging.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v2/{+parent}/sinks').replace(
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
        createAPIRequest<Schema$ListSinksResponse>(parameters, callback);
      } else {
        return createAPIRequest<Schema$ListSinksResponse>(parameters);
      }
    }

    /**
     * logging.folders.sinks.patch
     * @desc Updates a sink. This method replaces the following fields in the existing sink with values from the new sink: destination, and filter.The updated sink might also have a new writer_identity; see the unique_writer_identity field.
     * @alias logging.folders.sinks.patch
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.sinkName Required. The full resource name of the sink to update, including the parent resource and the sink identifier: "projects/[PROJECT_ID]/sinks/[SINK_ID]" "organizations/[ORGANIZATION_ID]/sinks/[SINK_ID]" "billingAccounts/[BILLING_ACCOUNT_ID]/sinks/[SINK_ID]" "folders/[FOLDER_ID]/sinks/[SINK_ID]" Example: "projects/my-project-id/sinks/my-sink-id".
     * @param {boolean=} params.uniqueWriterIdentity Optional. See sinks.create for a description of this field. When updating a sink, the effect of this field on the value of writer_identity in the updated sink depends on both the old and new values of this field: If the old and new values of this field are both false or both true, then there is no change to the sink's writer_identity. If the old value is false and the new value is true, then writer_identity is changed to a unique service account. It is an error if the old value is true and the new value is set to false or defaulted to false.
     * @param {string=} params.updateMask Optional. Field mask that specifies the fields in sink that need an update. A sink field will be overwritten if, and only if, it is in the update mask. name and output only fields cannot be updated.An empty updateMask is temporarily treated as using the following mask for backwards compatibility purposes:  destination,filter,includeChildren At some point in the future, behavior will be removed and specifying an empty updateMask will be an error.For a detailed FieldMask definition, see https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#google.protobuf.FieldMaskExample: updateMask=filter.
     * @param {().LogSink} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    patch(
      params?: Params$Resource$Folders$Sinks$Patch,
      options?: MethodOptions
    ): GaxiosPromise<Schema$LogSink>;
    patch(
      params: Params$Resource$Folders$Sinks$Patch,
      options: MethodOptions | BodyResponseCallback<Schema$LogSink>,
      callback: BodyResponseCallback<Schema$LogSink>
    ): void;
    patch(
      params: Params$Resource$Folders$Sinks$Patch,
      callback: BodyResponseCallback<Schema$LogSink>
    ): void;
    patch(callback: BodyResponseCallback<Schema$LogSink>): void;
    patch(
      paramsOrCallback?:
        | Params$Resource$Folders$Sinks$Patch
        | BodyResponseCallback<Schema$LogSink>,
      optionsOrCallback?: MethodOptions | BodyResponseCallback<Schema$LogSink>,
      callback?: BodyResponseCallback<Schema$LogSink>
    ): void | GaxiosPromise<Schema$LogSink> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Folders$Sinks$Patch;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Folders$Sinks$Patch;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://logging.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v2/{+sinkName}').replace(/([^:]\/)\/+/g, '$1'),
            method: 'PATCH',
          },
          options
        ),
        params,
        requiredParams: ['sinkName'],
        pathParams: ['sinkName'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$LogSink>(parameters, callback);
      } else {
        return createAPIRequest<Schema$LogSink>(parameters);
      }
    }

    /**
     * logging.folders.sinks.update
     * @desc Updates a sink. This method replaces the following fields in the existing sink with values from the new sink: destination, and filter.The updated sink might also have a new writer_identity; see the unique_writer_identity field.
     * @alias logging.folders.sinks.update
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.sinkName Required. The full resource name of the sink to update, including the parent resource and the sink identifier: "projects/[PROJECT_ID]/sinks/[SINK_ID]" "organizations/[ORGANIZATION_ID]/sinks/[SINK_ID]" "billingAccounts/[BILLING_ACCOUNT_ID]/sinks/[SINK_ID]" "folders/[FOLDER_ID]/sinks/[SINK_ID]" Example: "projects/my-project-id/sinks/my-sink-id".
     * @param {boolean=} params.uniqueWriterIdentity Optional. See sinks.create for a description of this field. When updating a sink, the effect of this field on the value of writer_identity in the updated sink depends on both the old and new values of this field: If the old and new values of this field are both false or both true, then there is no change to the sink's writer_identity. If the old value is false and the new value is true, then writer_identity is changed to a unique service account. It is an error if the old value is true and the new value is set to false or defaulted to false.
     * @param {string=} params.updateMask Optional. Field mask that specifies the fields in sink that need an update. A sink field will be overwritten if, and only if, it is in the update mask. name and output only fields cannot be updated.An empty updateMask is temporarily treated as using the following mask for backwards compatibility purposes:  destination,filter,includeChildren At some point in the future, behavior will be removed and specifying an empty updateMask will be an error.For a detailed FieldMask definition, see https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#google.protobuf.FieldMaskExample: updateMask=filter.
     * @param {().LogSink} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    update(
      params?: Params$Resource$Folders$Sinks$Update,
      options?: MethodOptions
    ): GaxiosPromise<Schema$LogSink>;
    update(
      params: Params$Resource$Folders$Sinks$Update,
      options: MethodOptions | BodyResponseCallback<Schema$LogSink>,
      callback: BodyResponseCallback<Schema$LogSink>
    ): void;
    update(
      params: Params$Resource$Folders$Sinks$Update,
      callback: BodyResponseCallback<Schema$LogSink>
    ): void;
    update(callback: BodyResponseCallback<Schema$LogSink>): void;
    update(
      paramsOrCallback?:
        | Params$Resource$Folders$Sinks$Update
        | BodyResponseCallback<Schema$LogSink>,
      optionsOrCallback?: MethodOptions | BodyResponseCallback<Schema$LogSink>,
      callback?: BodyResponseCallback<Schema$LogSink>
    ): void | GaxiosPromise<Schema$LogSink> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Folders$Sinks$Update;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Folders$Sinks$Update;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://logging.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v2/{+sinkName}').replace(/([^:]\/)\/+/g, '$1'),
            method: 'PUT',
          },
          options
        ),
        params,
        requiredParams: ['sinkName'],
        pathParams: ['sinkName'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$LogSink>(parameters, callback);
      } else {
        return createAPIRequest<Schema$LogSink>(parameters);
      }
    }
  }

  export interface Params$Resource$Folders$Sinks$Create
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Required. The resource in which to create the sink: "projects/[PROJECT_ID]" "organizations/[ORGANIZATION_ID]" "billingAccounts/[BILLING_ACCOUNT_ID]" "folders/[FOLDER_ID]" Examples: "projects/my-logging-project", "organizations/123456789".
     */
    parent?: string;
    /**
     * Optional. Determines the kind of IAM identity returned as writer_identity in the new sink. If this value is omitted or set to false, and if the sink's parent is a project, then the value returned as writer_identity is the same group or service account used by Logging before the addition of writer identities to this API. The sink's destination must be in the same project as the sink itself.If this field is set to true, or if the sink is owned by a non-project resource such as an organization, then the value of writer_identity will be a unique service account used only for exports from the new sink. For more information, see writer_identity in LogSink.
     */
    uniqueWriterIdentity?: boolean;

    /**
     * Request body metadata
     */
    requestBody?: Schema$LogSink;
  }
  export interface Params$Resource$Folders$Sinks$Delete
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Required. The full resource name of the sink to delete, including the parent resource and the sink identifier: "projects/[PROJECT_ID]/sinks/[SINK_ID]" "organizations/[ORGANIZATION_ID]/sinks/[SINK_ID]" "billingAccounts/[BILLING_ACCOUNT_ID]/sinks/[SINK_ID]" "folders/[FOLDER_ID]/sinks/[SINK_ID]" Example: "projects/my-project-id/sinks/my-sink-id".
     */
    sinkName?: string;
  }
  export interface Params$Resource$Folders$Sinks$Get
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Required. The resource name of the sink: "projects/[PROJECT_ID]/sinks/[SINK_ID]" "organizations/[ORGANIZATION_ID]/sinks/[SINK_ID]" "billingAccounts/[BILLING_ACCOUNT_ID]/sinks/[SINK_ID]" "folders/[FOLDER_ID]/sinks/[SINK_ID]" Example: "projects/my-project-id/sinks/my-sink-id".
     */
    sinkName?: string;
  }
  export interface Params$Resource$Folders$Sinks$List
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Optional. The maximum number of results to return from this request. Non-positive values are ignored. The presence of nextPageToken in the response indicates that more results might be available.
     */
    pageSize?: number;
    /**
     * Optional. If present, then retrieve the next batch of results from the preceding call to this method. pageToken must be the value of nextPageToken from the previous response. The values of other method parameters should be identical to those in the previous call.
     */
    pageToken?: string;
    /**
     * Required. The parent resource whose sinks are to be listed: "projects/[PROJECT_ID]" "organizations/[ORGANIZATION_ID]" "billingAccounts/[BILLING_ACCOUNT_ID]" "folders/[FOLDER_ID]"
     */
    parent?: string;
  }
  export interface Params$Resource$Folders$Sinks$Patch
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Required. The full resource name of the sink to update, including the parent resource and the sink identifier: "projects/[PROJECT_ID]/sinks/[SINK_ID]" "organizations/[ORGANIZATION_ID]/sinks/[SINK_ID]" "billingAccounts/[BILLING_ACCOUNT_ID]/sinks/[SINK_ID]" "folders/[FOLDER_ID]/sinks/[SINK_ID]" Example: "projects/my-project-id/sinks/my-sink-id".
     */
    sinkName?: string;
    /**
     * Optional. See sinks.create for a description of this field. When updating a sink, the effect of this field on the value of writer_identity in the updated sink depends on both the old and new values of this field: If the old and new values of this field are both false or both true, then there is no change to the sink's writer_identity. If the old value is false and the new value is true, then writer_identity is changed to a unique service account. It is an error if the old value is true and the new value is set to false or defaulted to false.
     */
    uniqueWriterIdentity?: boolean;
    /**
     * Optional. Field mask that specifies the fields in sink that need an update. A sink field will be overwritten if, and only if, it is in the update mask. name and output only fields cannot be updated.An empty updateMask is temporarily treated as using the following mask for backwards compatibility purposes:  destination,filter,includeChildren At some point in the future, behavior will be removed and specifying an empty updateMask will be an error.For a detailed FieldMask definition, see https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#google.protobuf.FieldMaskExample: updateMask=filter.
     */
    updateMask?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$LogSink;
  }
  export interface Params$Resource$Folders$Sinks$Update
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Required. The full resource name of the sink to update, including the parent resource and the sink identifier: "projects/[PROJECT_ID]/sinks/[SINK_ID]" "organizations/[ORGANIZATION_ID]/sinks/[SINK_ID]" "billingAccounts/[BILLING_ACCOUNT_ID]/sinks/[SINK_ID]" "folders/[FOLDER_ID]/sinks/[SINK_ID]" Example: "projects/my-project-id/sinks/my-sink-id".
     */
    sinkName?: string;
    /**
     * Optional. See sinks.create for a description of this field. When updating a sink, the effect of this field on the value of writer_identity in the updated sink depends on both the old and new values of this field: If the old and new values of this field are both false or both true, then there is no change to the sink's writer_identity. If the old value is false and the new value is true, then writer_identity is changed to a unique service account. It is an error if the old value is true and the new value is set to false or defaulted to false.
     */
    uniqueWriterIdentity?: boolean;
    /**
     * Optional. Field mask that specifies the fields in sink that need an update. A sink field will be overwritten if, and only if, it is in the update mask. name and output only fields cannot be updated.An empty updateMask is temporarily treated as using the following mask for backwards compatibility purposes:  destination,filter,includeChildren At some point in the future, behavior will be removed and specifying an empty updateMask will be an error.For a detailed FieldMask definition, see https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#google.protobuf.FieldMaskExample: updateMask=filter.
     */
    updateMask?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$LogSink;
  }

  export class Resource$Logs {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * logging.logs.delete
     * @desc Deletes all the log entries in a log. The log reappears if it receives new entries. Log entries written shortly before the delete operation might not be deleted.
     * @alias logging.logs.delete
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.logName Required. The resource name of the log to delete: "projects/[PROJECT_ID]/logs/[LOG_ID]" "organizations/[ORGANIZATION_ID]/logs/[LOG_ID]" "billingAccounts/[BILLING_ACCOUNT_ID]/logs/[LOG_ID]" "folders/[FOLDER_ID]/logs/[LOG_ID]" [LOG_ID] must be URL-encoded. For example, "projects/my-project-id/logs/syslog", "organizations/1234567890/logs/cloudresourcemanager.googleapis.com%2Factivity". For more information about log names, see LogEntry.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    delete(
      params?: Params$Resource$Logs$Delete,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Empty>;
    delete(
      params: Params$Resource$Logs$Delete,
      options: MethodOptions | BodyResponseCallback<Schema$Empty>,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    delete(
      params: Params$Resource$Logs$Delete,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    delete(callback: BodyResponseCallback<Schema$Empty>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Logs$Delete
        | BodyResponseCallback<Schema$Empty>,
      optionsOrCallback?: MethodOptions | BodyResponseCallback<Schema$Empty>,
      callback?: BodyResponseCallback<Schema$Empty>
    ): void | GaxiosPromise<Schema$Empty> {
      let params = (paramsOrCallback || {}) as Params$Resource$Logs$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Logs$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://logging.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v2/{+logName}').replace(/([^:]\/)\/+/g, '$1'),
            method: 'DELETE',
          },
          options
        ),
        params,
        requiredParams: ['logName'],
        pathParams: ['logName'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Empty>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Empty>(parameters);
      }
    }

    /**
     * logging.logs.list
     * @desc Lists the logs in projects, organizations, folders, or billing accounts. Only logs that have entries are listed.
     * @alias logging.logs.list
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {integer=} params.pageSize Optional. The maximum number of results to return from this request. Non-positive values are ignored. The presence of nextPageToken in the response indicates that more results might be available.
     * @param {string=} params.pageToken Optional. If present, then retrieve the next batch of results from the preceding call to this method. pageToken must be the value of nextPageToken from the previous response. The values of other method parameters should be identical to those in the previous call.
     * @param {string} params.parent Required. The resource name that owns the logs: "projects/[PROJECT_ID]" "organizations/[ORGANIZATION_ID]" "billingAccounts/[BILLING_ACCOUNT_ID]" "folders/[FOLDER_ID]"
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list(
      params?: Params$Resource$Logs$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ListLogsResponse>;
    list(
      params: Params$Resource$Logs$List,
      options: MethodOptions | BodyResponseCallback<Schema$ListLogsResponse>,
      callback: BodyResponseCallback<Schema$ListLogsResponse>
    ): void;
    list(
      params: Params$Resource$Logs$List,
      callback: BodyResponseCallback<Schema$ListLogsResponse>
    ): void;
    list(callback: BodyResponseCallback<Schema$ListLogsResponse>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Logs$List
        | BodyResponseCallback<Schema$ListLogsResponse>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$ListLogsResponse>,
      callback?: BodyResponseCallback<Schema$ListLogsResponse>
    ): void | GaxiosPromise<Schema$ListLogsResponse> {
      let params = (paramsOrCallback || {}) as Params$Resource$Logs$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Logs$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://logging.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v2/{+parent}/logs').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$ListLogsResponse>(parameters, callback);
      } else {
        return createAPIRequest<Schema$ListLogsResponse>(parameters);
      }
    }
  }

  export interface Params$Resource$Logs$Delete extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Required. The resource name of the log to delete: "projects/[PROJECT_ID]/logs/[LOG_ID]" "organizations/[ORGANIZATION_ID]/logs/[LOG_ID]" "billingAccounts/[BILLING_ACCOUNT_ID]/logs/[LOG_ID]" "folders/[FOLDER_ID]/logs/[LOG_ID]" [LOG_ID] must be URL-encoded. For example, "projects/my-project-id/logs/syslog", "organizations/1234567890/logs/cloudresourcemanager.googleapis.com%2Factivity". For more information about log names, see LogEntry.
     */
    logName?: string;
  }
  export interface Params$Resource$Logs$List extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Optional. The maximum number of results to return from this request. Non-positive values are ignored. The presence of nextPageToken in the response indicates that more results might be available.
     */
    pageSize?: number;
    /**
     * Optional. If present, then retrieve the next batch of results from the preceding call to this method. pageToken must be the value of nextPageToken from the previous response. The values of other method parameters should be identical to those in the previous call.
     */
    pageToken?: string;
    /**
     * Required. The resource name that owns the logs: "projects/[PROJECT_ID]" "organizations/[ORGANIZATION_ID]" "billingAccounts/[BILLING_ACCOUNT_ID]" "folders/[FOLDER_ID]"
     */
    parent?: string;
  }

  export class Resource$Monitoredresourcedescriptors {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * logging.monitoredResourceDescriptors.list
     * @desc Lists the descriptors for monitored resource types used by Logging.
     * @alias logging.monitoredResourceDescriptors.list
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {integer=} params.pageSize Optional. The maximum number of results to return from this request. Non-positive values are ignored. The presence of nextPageToken in the response indicates that more results might be available.
     * @param {string=} params.pageToken Optional. If present, then retrieve the next batch of results from the preceding call to this method. pageToken must be the value of nextPageToken from the previous response. The values of other method parameters should be identical to those in the previous call.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list(
      params?: Params$Resource$Monitoredresourcedescriptors$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ListMonitoredResourceDescriptorsResponse>;
    list(
      params: Params$Resource$Monitoredresourcedescriptors$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ListMonitoredResourceDescriptorsResponse>,
      callback: BodyResponseCallback<
        Schema$ListMonitoredResourceDescriptorsResponse
      >
    ): void;
    list(
      params: Params$Resource$Monitoredresourcedescriptors$List,
      callback: BodyResponseCallback<
        Schema$ListMonitoredResourceDescriptorsResponse
      >
    ): void;
    list(
      callback: BodyResponseCallback<
        Schema$ListMonitoredResourceDescriptorsResponse
      >
    ): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Monitoredresourcedescriptors$List
        | BodyResponseCallback<Schema$ListMonitoredResourceDescriptorsResponse>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$ListMonitoredResourceDescriptorsResponse>,
      callback?: BodyResponseCallback<
        Schema$ListMonitoredResourceDescriptorsResponse
      >
    ): void | GaxiosPromise<Schema$ListMonitoredResourceDescriptorsResponse> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Monitoredresourcedescriptors$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Monitoredresourcedescriptors$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://logging.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v2/monitoredResourceDescriptors').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: [],
        pathParams: [],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$ListMonitoredResourceDescriptorsResponse>(
          parameters,
          callback
        );
      } else {
        return createAPIRequest<
          Schema$ListMonitoredResourceDescriptorsResponse
        >(parameters);
      }
    }
  }

  export interface Params$Resource$Monitoredresourcedescriptors$List
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Optional. The maximum number of results to return from this request. Non-positive values are ignored. The presence of nextPageToken in the response indicates that more results might be available.
     */
    pageSize?: number;
    /**
     * Optional. If present, then retrieve the next batch of results from the preceding call to this method. pageToken must be the value of nextPageToken from the previous response. The values of other method parameters should be identical to those in the previous call.
     */
    pageToken?: string;
  }

  export class Resource$Organizations {
    context: APIRequestContext;
    exclusions: Resource$Organizations$Exclusions;
    logs: Resource$Organizations$Logs;
    sinks: Resource$Organizations$Sinks;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.exclusions = new Resource$Organizations$Exclusions(this.context);
      this.logs = new Resource$Organizations$Logs(this.context);
      this.sinks = new Resource$Organizations$Sinks(this.context);
    }
  }

  export class Resource$Organizations$Exclusions {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * logging.organizations.exclusions.create
     * @desc Creates a new exclusion in a specified parent resource. Only log entries belonging to that resource can be excluded. You can have up to 10 exclusions in a resource.
     * @alias logging.organizations.exclusions.create
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.parent Required. The parent resource in which to create the exclusion: "projects/[PROJECT_ID]" "organizations/[ORGANIZATION_ID]" "billingAccounts/[BILLING_ACCOUNT_ID]" "folders/[FOLDER_ID]" Examples: "projects/my-logging-project", "organizations/123456789".
     * @param {().LogExclusion} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    create(
      params?: Params$Resource$Organizations$Exclusions$Create,
      options?: MethodOptions
    ): GaxiosPromise<Schema$LogExclusion>;
    create(
      params: Params$Resource$Organizations$Exclusions$Create,
      options: MethodOptions | BodyResponseCallback<Schema$LogExclusion>,
      callback: BodyResponseCallback<Schema$LogExclusion>
    ): void;
    create(
      params: Params$Resource$Organizations$Exclusions$Create,
      callback: BodyResponseCallback<Schema$LogExclusion>
    ): void;
    create(callback: BodyResponseCallback<Schema$LogExclusion>): void;
    create(
      paramsOrCallback?:
        | Params$Resource$Organizations$Exclusions$Create
        | BodyResponseCallback<Schema$LogExclusion>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$LogExclusion>,
      callback?: BodyResponseCallback<Schema$LogExclusion>
    ): void | GaxiosPromise<Schema$LogExclusion> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Organizations$Exclusions$Create;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Organizations$Exclusions$Create;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://logging.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v2/{+parent}/exclusions').replace(
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
        createAPIRequest<Schema$LogExclusion>(parameters, callback);
      } else {
        return createAPIRequest<Schema$LogExclusion>(parameters);
      }
    }

    /**
     * logging.organizations.exclusions.delete
     * @desc Deletes an exclusion.
     * @alias logging.organizations.exclusions.delete
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.name Required. The resource name of an existing exclusion to delete: "projects/[PROJECT_ID]/exclusions/[EXCLUSION_ID]" "organizations/[ORGANIZATION_ID]/exclusions/[EXCLUSION_ID]" "billingAccounts/[BILLING_ACCOUNT_ID]/exclusions/[EXCLUSION_ID]" "folders/[FOLDER_ID]/exclusions/[EXCLUSION_ID]" Example: "projects/my-project-id/exclusions/my-exclusion-id".
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    delete(
      params?: Params$Resource$Organizations$Exclusions$Delete,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Empty>;
    delete(
      params: Params$Resource$Organizations$Exclusions$Delete,
      options: MethodOptions | BodyResponseCallback<Schema$Empty>,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    delete(
      params: Params$Resource$Organizations$Exclusions$Delete,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    delete(callback: BodyResponseCallback<Schema$Empty>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Organizations$Exclusions$Delete
        | BodyResponseCallback<Schema$Empty>,
      optionsOrCallback?: MethodOptions | BodyResponseCallback<Schema$Empty>,
      callback?: BodyResponseCallback<Schema$Empty>
    ): void | GaxiosPromise<Schema$Empty> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Organizations$Exclusions$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Organizations$Exclusions$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://logging.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v2/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$Empty>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Empty>(parameters);
      }
    }

    /**
     * logging.organizations.exclusions.get
     * @desc Gets the description of an exclusion.
     * @alias logging.organizations.exclusions.get
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.name Required. The resource name of an existing exclusion: "projects/[PROJECT_ID]/exclusions/[EXCLUSION_ID]" "organizations/[ORGANIZATION_ID]/exclusions/[EXCLUSION_ID]" "billingAccounts/[BILLING_ACCOUNT_ID]/exclusions/[EXCLUSION_ID]" "folders/[FOLDER_ID]/exclusions/[EXCLUSION_ID]" Example: "projects/my-project-id/exclusions/my-exclusion-id".
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    get(
      params?: Params$Resource$Organizations$Exclusions$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$LogExclusion>;
    get(
      params: Params$Resource$Organizations$Exclusions$Get,
      options: MethodOptions | BodyResponseCallback<Schema$LogExclusion>,
      callback: BodyResponseCallback<Schema$LogExclusion>
    ): void;
    get(
      params: Params$Resource$Organizations$Exclusions$Get,
      callback: BodyResponseCallback<Schema$LogExclusion>
    ): void;
    get(callback: BodyResponseCallback<Schema$LogExclusion>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Organizations$Exclusions$Get
        | BodyResponseCallback<Schema$LogExclusion>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$LogExclusion>,
      callback?: BodyResponseCallback<Schema$LogExclusion>
    ): void | GaxiosPromise<Schema$LogExclusion> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Organizations$Exclusions$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Organizations$Exclusions$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://logging.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v2/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$LogExclusion>(parameters, callback);
      } else {
        return createAPIRequest<Schema$LogExclusion>(parameters);
      }
    }

    /**
     * logging.organizations.exclusions.list
     * @desc Lists all the exclusions in a parent resource.
     * @alias logging.organizations.exclusions.list
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {integer=} params.pageSize Optional. The maximum number of results to return from this request. Non-positive values are ignored. The presence of nextPageToken in the response indicates that more results might be available.
     * @param {string=} params.pageToken Optional. If present, then retrieve the next batch of results from the preceding call to this method. pageToken must be the value of nextPageToken from the previous response. The values of other method parameters should be identical to those in the previous call.
     * @param {string} params.parent Required. The parent resource whose exclusions are to be listed. "projects/[PROJECT_ID]" "organizations/[ORGANIZATION_ID]" "billingAccounts/[BILLING_ACCOUNT_ID]" "folders/[FOLDER_ID]"
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list(
      params?: Params$Resource$Organizations$Exclusions$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ListExclusionsResponse>;
    list(
      params: Params$Resource$Organizations$Exclusions$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ListExclusionsResponse>,
      callback: BodyResponseCallback<Schema$ListExclusionsResponse>
    ): void;
    list(
      params: Params$Resource$Organizations$Exclusions$List,
      callback: BodyResponseCallback<Schema$ListExclusionsResponse>
    ): void;
    list(callback: BodyResponseCallback<Schema$ListExclusionsResponse>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Organizations$Exclusions$List
        | BodyResponseCallback<Schema$ListExclusionsResponse>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$ListExclusionsResponse>,
      callback?: BodyResponseCallback<Schema$ListExclusionsResponse>
    ): void | GaxiosPromise<Schema$ListExclusionsResponse> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Organizations$Exclusions$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Organizations$Exclusions$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://logging.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v2/{+parent}/exclusions').replace(
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
        createAPIRequest<Schema$ListExclusionsResponse>(parameters, callback);
      } else {
        return createAPIRequest<Schema$ListExclusionsResponse>(parameters);
      }
    }

    /**
     * logging.organizations.exclusions.patch
     * @desc Changes one or more properties of an existing exclusion.
     * @alias logging.organizations.exclusions.patch
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.name Required. The resource name of the exclusion to update: "projects/[PROJECT_ID]/exclusions/[EXCLUSION_ID]" "organizations/[ORGANIZATION_ID]/exclusions/[EXCLUSION_ID]" "billingAccounts/[BILLING_ACCOUNT_ID]/exclusions/[EXCLUSION_ID]" "folders/[FOLDER_ID]/exclusions/[EXCLUSION_ID]" Example: "projects/my-project-id/exclusions/my-exclusion-id".
     * @param {string=} params.updateMask Required. A non-empty list of fields to change in the existing exclusion. New values for the fields are taken from the corresponding fields in the LogExclusion included in this request. Fields not mentioned in update_mask are not changed and are ignored in the request.For example, to change the filter and description of an exclusion, specify an update_mask of "filter,description".
     * @param {().LogExclusion} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    patch(
      params?: Params$Resource$Organizations$Exclusions$Patch,
      options?: MethodOptions
    ): GaxiosPromise<Schema$LogExclusion>;
    patch(
      params: Params$Resource$Organizations$Exclusions$Patch,
      options: MethodOptions | BodyResponseCallback<Schema$LogExclusion>,
      callback: BodyResponseCallback<Schema$LogExclusion>
    ): void;
    patch(
      params: Params$Resource$Organizations$Exclusions$Patch,
      callback: BodyResponseCallback<Schema$LogExclusion>
    ): void;
    patch(callback: BodyResponseCallback<Schema$LogExclusion>): void;
    patch(
      paramsOrCallback?:
        | Params$Resource$Organizations$Exclusions$Patch
        | BodyResponseCallback<Schema$LogExclusion>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$LogExclusion>,
      callback?: BodyResponseCallback<Schema$LogExclusion>
    ): void | GaxiosPromise<Schema$LogExclusion> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Organizations$Exclusions$Patch;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Organizations$Exclusions$Patch;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://logging.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v2/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$LogExclusion>(parameters, callback);
      } else {
        return createAPIRequest<Schema$LogExclusion>(parameters);
      }
    }
  }

  export interface Params$Resource$Organizations$Exclusions$Create
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Required. The parent resource in which to create the exclusion: "projects/[PROJECT_ID]" "organizations/[ORGANIZATION_ID]" "billingAccounts/[BILLING_ACCOUNT_ID]" "folders/[FOLDER_ID]" Examples: "projects/my-logging-project", "organizations/123456789".
     */
    parent?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$LogExclusion;
  }
  export interface Params$Resource$Organizations$Exclusions$Delete
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Required. The resource name of an existing exclusion to delete: "projects/[PROJECT_ID]/exclusions/[EXCLUSION_ID]" "organizations/[ORGANIZATION_ID]/exclusions/[EXCLUSION_ID]" "billingAccounts/[BILLING_ACCOUNT_ID]/exclusions/[EXCLUSION_ID]" "folders/[FOLDER_ID]/exclusions/[EXCLUSION_ID]" Example: "projects/my-project-id/exclusions/my-exclusion-id".
     */
    name?: string;
  }
  export interface Params$Resource$Organizations$Exclusions$Get
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Required. The resource name of an existing exclusion: "projects/[PROJECT_ID]/exclusions/[EXCLUSION_ID]" "organizations/[ORGANIZATION_ID]/exclusions/[EXCLUSION_ID]" "billingAccounts/[BILLING_ACCOUNT_ID]/exclusions/[EXCLUSION_ID]" "folders/[FOLDER_ID]/exclusions/[EXCLUSION_ID]" Example: "projects/my-project-id/exclusions/my-exclusion-id".
     */
    name?: string;
  }
  export interface Params$Resource$Organizations$Exclusions$List
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Optional. The maximum number of results to return from this request. Non-positive values are ignored. The presence of nextPageToken in the response indicates that more results might be available.
     */
    pageSize?: number;
    /**
     * Optional. If present, then retrieve the next batch of results from the preceding call to this method. pageToken must be the value of nextPageToken from the previous response. The values of other method parameters should be identical to those in the previous call.
     */
    pageToken?: string;
    /**
     * Required. The parent resource whose exclusions are to be listed. "projects/[PROJECT_ID]" "organizations/[ORGANIZATION_ID]" "billingAccounts/[BILLING_ACCOUNT_ID]" "folders/[FOLDER_ID]"
     */
    parent?: string;
  }
  export interface Params$Resource$Organizations$Exclusions$Patch
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Required. The resource name of the exclusion to update: "projects/[PROJECT_ID]/exclusions/[EXCLUSION_ID]" "organizations/[ORGANIZATION_ID]/exclusions/[EXCLUSION_ID]" "billingAccounts/[BILLING_ACCOUNT_ID]/exclusions/[EXCLUSION_ID]" "folders/[FOLDER_ID]/exclusions/[EXCLUSION_ID]" Example: "projects/my-project-id/exclusions/my-exclusion-id".
     */
    name?: string;
    /**
     * Required. A non-empty list of fields to change in the existing exclusion. New values for the fields are taken from the corresponding fields in the LogExclusion included in this request. Fields not mentioned in update_mask are not changed and are ignored in the request.For example, to change the filter and description of an exclusion, specify an update_mask of "filter,description".
     */
    updateMask?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$LogExclusion;
  }

  export class Resource$Organizations$Logs {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * logging.organizations.logs.delete
     * @desc Deletes all the log entries in a log. The log reappears if it receives new entries. Log entries written shortly before the delete operation might not be deleted.
     * @alias logging.organizations.logs.delete
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.logName Required. The resource name of the log to delete: "projects/[PROJECT_ID]/logs/[LOG_ID]" "organizations/[ORGANIZATION_ID]/logs/[LOG_ID]" "billingAccounts/[BILLING_ACCOUNT_ID]/logs/[LOG_ID]" "folders/[FOLDER_ID]/logs/[LOG_ID]" [LOG_ID] must be URL-encoded. For example, "projects/my-project-id/logs/syslog", "organizations/1234567890/logs/cloudresourcemanager.googleapis.com%2Factivity". For more information about log names, see LogEntry.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    delete(
      params?: Params$Resource$Organizations$Logs$Delete,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Empty>;
    delete(
      params: Params$Resource$Organizations$Logs$Delete,
      options: MethodOptions | BodyResponseCallback<Schema$Empty>,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    delete(
      params: Params$Resource$Organizations$Logs$Delete,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    delete(callback: BodyResponseCallback<Schema$Empty>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Organizations$Logs$Delete
        | BodyResponseCallback<Schema$Empty>,
      optionsOrCallback?: MethodOptions | BodyResponseCallback<Schema$Empty>,
      callback?: BodyResponseCallback<Schema$Empty>
    ): void | GaxiosPromise<Schema$Empty> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Organizations$Logs$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Organizations$Logs$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://logging.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v2/{+logName}').replace(/([^:]\/)\/+/g, '$1'),
            method: 'DELETE',
          },
          options
        ),
        params,
        requiredParams: ['logName'],
        pathParams: ['logName'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Empty>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Empty>(parameters);
      }
    }

    /**
     * logging.organizations.logs.list
     * @desc Lists the logs in projects, organizations, folders, or billing accounts. Only logs that have entries are listed.
     * @alias logging.organizations.logs.list
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {integer=} params.pageSize Optional. The maximum number of results to return from this request. Non-positive values are ignored. The presence of nextPageToken in the response indicates that more results might be available.
     * @param {string=} params.pageToken Optional. If present, then retrieve the next batch of results from the preceding call to this method. pageToken must be the value of nextPageToken from the previous response. The values of other method parameters should be identical to those in the previous call.
     * @param {string} params.parent Required. The resource name that owns the logs: "projects/[PROJECT_ID]" "organizations/[ORGANIZATION_ID]" "billingAccounts/[BILLING_ACCOUNT_ID]" "folders/[FOLDER_ID]"
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list(
      params?: Params$Resource$Organizations$Logs$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ListLogsResponse>;
    list(
      params: Params$Resource$Organizations$Logs$List,
      options: MethodOptions | BodyResponseCallback<Schema$ListLogsResponse>,
      callback: BodyResponseCallback<Schema$ListLogsResponse>
    ): void;
    list(
      params: Params$Resource$Organizations$Logs$List,
      callback: BodyResponseCallback<Schema$ListLogsResponse>
    ): void;
    list(callback: BodyResponseCallback<Schema$ListLogsResponse>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Organizations$Logs$List
        | BodyResponseCallback<Schema$ListLogsResponse>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$ListLogsResponse>,
      callback?: BodyResponseCallback<Schema$ListLogsResponse>
    ): void | GaxiosPromise<Schema$ListLogsResponse> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Organizations$Logs$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Organizations$Logs$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://logging.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v2/{+parent}/logs').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$ListLogsResponse>(parameters, callback);
      } else {
        return createAPIRequest<Schema$ListLogsResponse>(parameters);
      }
    }
  }

  export interface Params$Resource$Organizations$Logs$Delete
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Required. The resource name of the log to delete: "projects/[PROJECT_ID]/logs/[LOG_ID]" "organizations/[ORGANIZATION_ID]/logs/[LOG_ID]" "billingAccounts/[BILLING_ACCOUNT_ID]/logs/[LOG_ID]" "folders/[FOLDER_ID]/logs/[LOG_ID]" [LOG_ID] must be URL-encoded. For example, "projects/my-project-id/logs/syslog", "organizations/1234567890/logs/cloudresourcemanager.googleapis.com%2Factivity". For more information about log names, see LogEntry.
     */
    logName?: string;
  }
  export interface Params$Resource$Organizations$Logs$List
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Optional. The maximum number of results to return from this request. Non-positive values are ignored. The presence of nextPageToken in the response indicates that more results might be available.
     */
    pageSize?: number;
    /**
     * Optional. If present, then retrieve the next batch of results from the preceding call to this method. pageToken must be the value of nextPageToken from the previous response. The values of other method parameters should be identical to those in the previous call.
     */
    pageToken?: string;
    /**
     * Required. The resource name that owns the logs: "projects/[PROJECT_ID]" "organizations/[ORGANIZATION_ID]" "billingAccounts/[BILLING_ACCOUNT_ID]" "folders/[FOLDER_ID]"
     */
    parent?: string;
  }

  export class Resource$Organizations$Sinks {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * logging.organizations.sinks.create
     * @desc Creates a sink that exports specified log entries to a destination. The export of newly-ingested log entries begins immediately, unless the sink's writer_identity is not permitted to write to the destination. A sink can export log entries only from the resource owning the sink.
     * @alias logging.organizations.sinks.create
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.parent Required. The resource in which to create the sink: "projects/[PROJECT_ID]" "organizations/[ORGANIZATION_ID]" "billingAccounts/[BILLING_ACCOUNT_ID]" "folders/[FOLDER_ID]" Examples: "projects/my-logging-project", "organizations/123456789".
     * @param {boolean=} params.uniqueWriterIdentity Optional. Determines the kind of IAM identity returned as writer_identity in the new sink. If this value is omitted or set to false, and if the sink's parent is a project, then the value returned as writer_identity is the same group or service account used by Logging before the addition of writer identities to this API. The sink's destination must be in the same project as the sink itself.If this field is set to true, or if the sink is owned by a non-project resource such as an organization, then the value of writer_identity will be a unique service account used only for exports from the new sink. For more information, see writer_identity in LogSink.
     * @param {().LogSink} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    create(
      params?: Params$Resource$Organizations$Sinks$Create,
      options?: MethodOptions
    ): GaxiosPromise<Schema$LogSink>;
    create(
      params: Params$Resource$Organizations$Sinks$Create,
      options: MethodOptions | BodyResponseCallback<Schema$LogSink>,
      callback: BodyResponseCallback<Schema$LogSink>
    ): void;
    create(
      params: Params$Resource$Organizations$Sinks$Create,
      callback: BodyResponseCallback<Schema$LogSink>
    ): void;
    create(callback: BodyResponseCallback<Schema$LogSink>): void;
    create(
      paramsOrCallback?:
        | Params$Resource$Organizations$Sinks$Create
        | BodyResponseCallback<Schema$LogSink>,
      optionsOrCallback?: MethodOptions | BodyResponseCallback<Schema$LogSink>,
      callback?: BodyResponseCallback<Schema$LogSink>
    ): void | GaxiosPromise<Schema$LogSink> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Organizations$Sinks$Create;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Organizations$Sinks$Create;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://logging.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v2/{+parent}/sinks').replace(
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
        createAPIRequest<Schema$LogSink>(parameters, callback);
      } else {
        return createAPIRequest<Schema$LogSink>(parameters);
      }
    }

    /**
     * logging.organizations.sinks.delete
     * @desc Deletes a sink. If the sink has a unique writer_identity, then that service account is also deleted.
     * @alias logging.organizations.sinks.delete
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.sinkName Required. The full resource name of the sink to delete, including the parent resource and the sink identifier: "projects/[PROJECT_ID]/sinks/[SINK_ID]" "organizations/[ORGANIZATION_ID]/sinks/[SINK_ID]" "billingAccounts/[BILLING_ACCOUNT_ID]/sinks/[SINK_ID]" "folders/[FOLDER_ID]/sinks/[SINK_ID]" Example: "projects/my-project-id/sinks/my-sink-id".
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    delete(
      params?: Params$Resource$Organizations$Sinks$Delete,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Empty>;
    delete(
      params: Params$Resource$Organizations$Sinks$Delete,
      options: MethodOptions | BodyResponseCallback<Schema$Empty>,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    delete(
      params: Params$Resource$Organizations$Sinks$Delete,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    delete(callback: BodyResponseCallback<Schema$Empty>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Organizations$Sinks$Delete
        | BodyResponseCallback<Schema$Empty>,
      optionsOrCallback?: MethodOptions | BodyResponseCallback<Schema$Empty>,
      callback?: BodyResponseCallback<Schema$Empty>
    ): void | GaxiosPromise<Schema$Empty> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Organizations$Sinks$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Organizations$Sinks$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://logging.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v2/{+sinkName}').replace(/([^:]\/)\/+/g, '$1'),
            method: 'DELETE',
          },
          options
        ),
        params,
        requiredParams: ['sinkName'],
        pathParams: ['sinkName'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Empty>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Empty>(parameters);
      }
    }

    /**
     * logging.organizations.sinks.get
     * @desc Gets a sink.
     * @alias logging.organizations.sinks.get
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.sinkName Required. The resource name of the sink: "projects/[PROJECT_ID]/sinks/[SINK_ID]" "organizations/[ORGANIZATION_ID]/sinks/[SINK_ID]" "billingAccounts/[BILLING_ACCOUNT_ID]/sinks/[SINK_ID]" "folders/[FOLDER_ID]/sinks/[SINK_ID]" Example: "projects/my-project-id/sinks/my-sink-id".
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    get(
      params?: Params$Resource$Organizations$Sinks$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$LogSink>;
    get(
      params: Params$Resource$Organizations$Sinks$Get,
      options: MethodOptions | BodyResponseCallback<Schema$LogSink>,
      callback: BodyResponseCallback<Schema$LogSink>
    ): void;
    get(
      params: Params$Resource$Organizations$Sinks$Get,
      callback: BodyResponseCallback<Schema$LogSink>
    ): void;
    get(callback: BodyResponseCallback<Schema$LogSink>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Organizations$Sinks$Get
        | BodyResponseCallback<Schema$LogSink>,
      optionsOrCallback?: MethodOptions | BodyResponseCallback<Schema$LogSink>,
      callback?: BodyResponseCallback<Schema$LogSink>
    ): void | GaxiosPromise<Schema$LogSink> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Organizations$Sinks$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Organizations$Sinks$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://logging.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v2/{+sinkName}').replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['sinkName'],
        pathParams: ['sinkName'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$LogSink>(parameters, callback);
      } else {
        return createAPIRequest<Schema$LogSink>(parameters);
      }
    }

    /**
     * logging.organizations.sinks.list
     * @desc Lists sinks.
     * @alias logging.organizations.sinks.list
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {integer=} params.pageSize Optional. The maximum number of results to return from this request. Non-positive values are ignored. The presence of nextPageToken in the response indicates that more results might be available.
     * @param {string=} params.pageToken Optional. If present, then retrieve the next batch of results from the preceding call to this method. pageToken must be the value of nextPageToken from the previous response. The values of other method parameters should be identical to those in the previous call.
     * @param {string} params.parent Required. The parent resource whose sinks are to be listed: "projects/[PROJECT_ID]" "organizations/[ORGANIZATION_ID]" "billingAccounts/[BILLING_ACCOUNT_ID]" "folders/[FOLDER_ID]"
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list(
      params?: Params$Resource$Organizations$Sinks$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ListSinksResponse>;
    list(
      params: Params$Resource$Organizations$Sinks$List,
      options: MethodOptions | BodyResponseCallback<Schema$ListSinksResponse>,
      callback: BodyResponseCallback<Schema$ListSinksResponse>
    ): void;
    list(
      params: Params$Resource$Organizations$Sinks$List,
      callback: BodyResponseCallback<Schema$ListSinksResponse>
    ): void;
    list(callback: BodyResponseCallback<Schema$ListSinksResponse>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Organizations$Sinks$List
        | BodyResponseCallback<Schema$ListSinksResponse>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$ListSinksResponse>,
      callback?: BodyResponseCallback<Schema$ListSinksResponse>
    ): void | GaxiosPromise<Schema$ListSinksResponse> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Organizations$Sinks$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Organizations$Sinks$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://logging.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v2/{+parent}/sinks').replace(
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
        createAPIRequest<Schema$ListSinksResponse>(parameters, callback);
      } else {
        return createAPIRequest<Schema$ListSinksResponse>(parameters);
      }
    }

    /**
     * logging.organizations.sinks.patch
     * @desc Updates a sink. This method replaces the following fields in the existing sink with values from the new sink: destination, and filter.The updated sink might also have a new writer_identity; see the unique_writer_identity field.
     * @alias logging.organizations.sinks.patch
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.sinkName Required. The full resource name of the sink to update, including the parent resource and the sink identifier: "projects/[PROJECT_ID]/sinks/[SINK_ID]" "organizations/[ORGANIZATION_ID]/sinks/[SINK_ID]" "billingAccounts/[BILLING_ACCOUNT_ID]/sinks/[SINK_ID]" "folders/[FOLDER_ID]/sinks/[SINK_ID]" Example: "projects/my-project-id/sinks/my-sink-id".
     * @param {boolean=} params.uniqueWriterIdentity Optional. See sinks.create for a description of this field. When updating a sink, the effect of this field on the value of writer_identity in the updated sink depends on both the old and new values of this field: If the old and new values of this field are both false or both true, then there is no change to the sink's writer_identity. If the old value is false and the new value is true, then writer_identity is changed to a unique service account. It is an error if the old value is true and the new value is set to false or defaulted to false.
     * @param {string=} params.updateMask Optional. Field mask that specifies the fields in sink that need an update. A sink field will be overwritten if, and only if, it is in the update mask. name and output only fields cannot be updated.An empty updateMask is temporarily treated as using the following mask for backwards compatibility purposes:  destination,filter,includeChildren At some point in the future, behavior will be removed and specifying an empty updateMask will be an error.For a detailed FieldMask definition, see https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#google.protobuf.FieldMaskExample: updateMask=filter.
     * @param {().LogSink} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    patch(
      params?: Params$Resource$Organizations$Sinks$Patch,
      options?: MethodOptions
    ): GaxiosPromise<Schema$LogSink>;
    patch(
      params: Params$Resource$Organizations$Sinks$Patch,
      options: MethodOptions | BodyResponseCallback<Schema$LogSink>,
      callback: BodyResponseCallback<Schema$LogSink>
    ): void;
    patch(
      params: Params$Resource$Organizations$Sinks$Patch,
      callback: BodyResponseCallback<Schema$LogSink>
    ): void;
    patch(callback: BodyResponseCallback<Schema$LogSink>): void;
    patch(
      paramsOrCallback?:
        | Params$Resource$Organizations$Sinks$Patch
        | BodyResponseCallback<Schema$LogSink>,
      optionsOrCallback?: MethodOptions | BodyResponseCallback<Schema$LogSink>,
      callback?: BodyResponseCallback<Schema$LogSink>
    ): void | GaxiosPromise<Schema$LogSink> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Organizations$Sinks$Patch;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Organizations$Sinks$Patch;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://logging.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v2/{+sinkName}').replace(/([^:]\/)\/+/g, '$1'),
            method: 'PATCH',
          },
          options
        ),
        params,
        requiredParams: ['sinkName'],
        pathParams: ['sinkName'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$LogSink>(parameters, callback);
      } else {
        return createAPIRequest<Schema$LogSink>(parameters);
      }
    }

    /**
     * logging.organizations.sinks.update
     * @desc Updates a sink. This method replaces the following fields in the existing sink with values from the new sink: destination, and filter.The updated sink might also have a new writer_identity; see the unique_writer_identity field.
     * @alias logging.organizations.sinks.update
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.sinkName Required. The full resource name of the sink to update, including the parent resource and the sink identifier: "projects/[PROJECT_ID]/sinks/[SINK_ID]" "organizations/[ORGANIZATION_ID]/sinks/[SINK_ID]" "billingAccounts/[BILLING_ACCOUNT_ID]/sinks/[SINK_ID]" "folders/[FOLDER_ID]/sinks/[SINK_ID]" Example: "projects/my-project-id/sinks/my-sink-id".
     * @param {boolean=} params.uniqueWriterIdentity Optional. See sinks.create for a description of this field. When updating a sink, the effect of this field on the value of writer_identity in the updated sink depends on both the old and new values of this field: If the old and new values of this field are both false or both true, then there is no change to the sink's writer_identity. If the old value is false and the new value is true, then writer_identity is changed to a unique service account. It is an error if the old value is true and the new value is set to false or defaulted to false.
     * @param {string=} params.updateMask Optional. Field mask that specifies the fields in sink that need an update. A sink field will be overwritten if, and only if, it is in the update mask. name and output only fields cannot be updated.An empty updateMask is temporarily treated as using the following mask for backwards compatibility purposes:  destination,filter,includeChildren At some point in the future, behavior will be removed and specifying an empty updateMask will be an error.For a detailed FieldMask definition, see https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#google.protobuf.FieldMaskExample: updateMask=filter.
     * @param {().LogSink} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    update(
      params?: Params$Resource$Organizations$Sinks$Update,
      options?: MethodOptions
    ): GaxiosPromise<Schema$LogSink>;
    update(
      params: Params$Resource$Organizations$Sinks$Update,
      options: MethodOptions | BodyResponseCallback<Schema$LogSink>,
      callback: BodyResponseCallback<Schema$LogSink>
    ): void;
    update(
      params: Params$Resource$Organizations$Sinks$Update,
      callback: BodyResponseCallback<Schema$LogSink>
    ): void;
    update(callback: BodyResponseCallback<Schema$LogSink>): void;
    update(
      paramsOrCallback?:
        | Params$Resource$Organizations$Sinks$Update
        | BodyResponseCallback<Schema$LogSink>,
      optionsOrCallback?: MethodOptions | BodyResponseCallback<Schema$LogSink>,
      callback?: BodyResponseCallback<Schema$LogSink>
    ): void | GaxiosPromise<Schema$LogSink> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Organizations$Sinks$Update;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Organizations$Sinks$Update;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://logging.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v2/{+sinkName}').replace(/([^:]\/)\/+/g, '$1'),
            method: 'PUT',
          },
          options
        ),
        params,
        requiredParams: ['sinkName'],
        pathParams: ['sinkName'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$LogSink>(parameters, callback);
      } else {
        return createAPIRequest<Schema$LogSink>(parameters);
      }
    }
  }

  export interface Params$Resource$Organizations$Sinks$Create
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Required. The resource in which to create the sink: "projects/[PROJECT_ID]" "organizations/[ORGANIZATION_ID]" "billingAccounts/[BILLING_ACCOUNT_ID]" "folders/[FOLDER_ID]" Examples: "projects/my-logging-project", "organizations/123456789".
     */
    parent?: string;
    /**
     * Optional. Determines the kind of IAM identity returned as writer_identity in the new sink. If this value is omitted or set to false, and if the sink's parent is a project, then the value returned as writer_identity is the same group or service account used by Logging before the addition of writer identities to this API. The sink's destination must be in the same project as the sink itself.If this field is set to true, or if the sink is owned by a non-project resource such as an organization, then the value of writer_identity will be a unique service account used only for exports from the new sink. For more information, see writer_identity in LogSink.
     */
    uniqueWriterIdentity?: boolean;

    /**
     * Request body metadata
     */
    requestBody?: Schema$LogSink;
  }
  export interface Params$Resource$Organizations$Sinks$Delete
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Required. The full resource name of the sink to delete, including the parent resource and the sink identifier: "projects/[PROJECT_ID]/sinks/[SINK_ID]" "organizations/[ORGANIZATION_ID]/sinks/[SINK_ID]" "billingAccounts/[BILLING_ACCOUNT_ID]/sinks/[SINK_ID]" "folders/[FOLDER_ID]/sinks/[SINK_ID]" Example: "projects/my-project-id/sinks/my-sink-id".
     */
    sinkName?: string;
  }
  export interface Params$Resource$Organizations$Sinks$Get
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Required. The resource name of the sink: "projects/[PROJECT_ID]/sinks/[SINK_ID]" "organizations/[ORGANIZATION_ID]/sinks/[SINK_ID]" "billingAccounts/[BILLING_ACCOUNT_ID]/sinks/[SINK_ID]" "folders/[FOLDER_ID]/sinks/[SINK_ID]" Example: "projects/my-project-id/sinks/my-sink-id".
     */
    sinkName?: string;
  }
  export interface Params$Resource$Organizations$Sinks$List
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Optional. The maximum number of results to return from this request. Non-positive values are ignored. The presence of nextPageToken in the response indicates that more results might be available.
     */
    pageSize?: number;
    /**
     * Optional. If present, then retrieve the next batch of results from the preceding call to this method. pageToken must be the value of nextPageToken from the previous response. The values of other method parameters should be identical to those in the previous call.
     */
    pageToken?: string;
    /**
     * Required. The parent resource whose sinks are to be listed: "projects/[PROJECT_ID]" "organizations/[ORGANIZATION_ID]" "billingAccounts/[BILLING_ACCOUNT_ID]" "folders/[FOLDER_ID]"
     */
    parent?: string;
  }
  export interface Params$Resource$Organizations$Sinks$Patch
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Required. The full resource name of the sink to update, including the parent resource and the sink identifier: "projects/[PROJECT_ID]/sinks/[SINK_ID]" "organizations/[ORGANIZATION_ID]/sinks/[SINK_ID]" "billingAccounts/[BILLING_ACCOUNT_ID]/sinks/[SINK_ID]" "folders/[FOLDER_ID]/sinks/[SINK_ID]" Example: "projects/my-project-id/sinks/my-sink-id".
     */
    sinkName?: string;
    /**
     * Optional. See sinks.create for a description of this field. When updating a sink, the effect of this field on the value of writer_identity in the updated sink depends on both the old and new values of this field: If the old and new values of this field are both false or both true, then there is no change to the sink's writer_identity. If the old value is false and the new value is true, then writer_identity is changed to a unique service account. It is an error if the old value is true and the new value is set to false or defaulted to false.
     */
    uniqueWriterIdentity?: boolean;
    /**
     * Optional. Field mask that specifies the fields in sink that need an update. A sink field will be overwritten if, and only if, it is in the update mask. name and output only fields cannot be updated.An empty updateMask is temporarily treated as using the following mask for backwards compatibility purposes:  destination,filter,includeChildren At some point in the future, behavior will be removed and specifying an empty updateMask will be an error.For a detailed FieldMask definition, see https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#google.protobuf.FieldMaskExample: updateMask=filter.
     */
    updateMask?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$LogSink;
  }
  export interface Params$Resource$Organizations$Sinks$Update
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Required. The full resource name of the sink to update, including the parent resource and the sink identifier: "projects/[PROJECT_ID]/sinks/[SINK_ID]" "organizations/[ORGANIZATION_ID]/sinks/[SINK_ID]" "billingAccounts/[BILLING_ACCOUNT_ID]/sinks/[SINK_ID]" "folders/[FOLDER_ID]/sinks/[SINK_ID]" Example: "projects/my-project-id/sinks/my-sink-id".
     */
    sinkName?: string;
    /**
     * Optional. See sinks.create for a description of this field. When updating a sink, the effect of this field on the value of writer_identity in the updated sink depends on both the old and new values of this field: If the old and new values of this field are both false or both true, then there is no change to the sink's writer_identity. If the old value is false and the new value is true, then writer_identity is changed to a unique service account. It is an error if the old value is true and the new value is set to false or defaulted to false.
     */
    uniqueWriterIdentity?: boolean;
    /**
     * Optional. Field mask that specifies the fields in sink that need an update. A sink field will be overwritten if, and only if, it is in the update mask. name and output only fields cannot be updated.An empty updateMask is temporarily treated as using the following mask for backwards compatibility purposes:  destination,filter,includeChildren At some point in the future, behavior will be removed and specifying an empty updateMask will be an error.For a detailed FieldMask definition, see https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#google.protobuf.FieldMaskExample: updateMask=filter.
     */
    updateMask?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$LogSink;
  }

  export class Resource$Projects {
    context: APIRequestContext;
    exclusions: Resource$Projects$Exclusions;
    logs: Resource$Projects$Logs;
    metrics: Resource$Projects$Metrics;
    sinks: Resource$Projects$Sinks;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.exclusions = new Resource$Projects$Exclusions(this.context);
      this.logs = new Resource$Projects$Logs(this.context);
      this.metrics = new Resource$Projects$Metrics(this.context);
      this.sinks = new Resource$Projects$Sinks(this.context);
    }
  }

  export class Resource$Projects$Exclusions {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * logging.projects.exclusions.create
     * @desc Creates a new exclusion in a specified parent resource. Only log entries belonging to that resource can be excluded. You can have up to 10 exclusions in a resource.
     * @alias logging.projects.exclusions.create
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.parent Required. The parent resource in which to create the exclusion: "projects/[PROJECT_ID]" "organizations/[ORGANIZATION_ID]" "billingAccounts/[BILLING_ACCOUNT_ID]" "folders/[FOLDER_ID]" Examples: "projects/my-logging-project", "organizations/123456789".
     * @param {().LogExclusion} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    create(
      params?: Params$Resource$Projects$Exclusions$Create,
      options?: MethodOptions
    ): GaxiosPromise<Schema$LogExclusion>;
    create(
      params: Params$Resource$Projects$Exclusions$Create,
      options: MethodOptions | BodyResponseCallback<Schema$LogExclusion>,
      callback: BodyResponseCallback<Schema$LogExclusion>
    ): void;
    create(
      params: Params$Resource$Projects$Exclusions$Create,
      callback: BodyResponseCallback<Schema$LogExclusion>
    ): void;
    create(callback: BodyResponseCallback<Schema$LogExclusion>): void;
    create(
      paramsOrCallback?:
        | Params$Resource$Projects$Exclusions$Create
        | BodyResponseCallback<Schema$LogExclusion>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$LogExclusion>,
      callback?: BodyResponseCallback<Schema$LogExclusion>
    ): void | GaxiosPromise<Schema$LogExclusion> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Exclusions$Create;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Exclusions$Create;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://logging.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v2/{+parent}/exclusions').replace(
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
        createAPIRequest<Schema$LogExclusion>(parameters, callback);
      } else {
        return createAPIRequest<Schema$LogExclusion>(parameters);
      }
    }

    /**
     * logging.projects.exclusions.delete
     * @desc Deletes an exclusion.
     * @alias logging.projects.exclusions.delete
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.name Required. The resource name of an existing exclusion to delete: "projects/[PROJECT_ID]/exclusions/[EXCLUSION_ID]" "organizations/[ORGANIZATION_ID]/exclusions/[EXCLUSION_ID]" "billingAccounts/[BILLING_ACCOUNT_ID]/exclusions/[EXCLUSION_ID]" "folders/[FOLDER_ID]/exclusions/[EXCLUSION_ID]" Example: "projects/my-project-id/exclusions/my-exclusion-id".
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    delete(
      params?: Params$Resource$Projects$Exclusions$Delete,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Empty>;
    delete(
      params: Params$Resource$Projects$Exclusions$Delete,
      options: MethodOptions | BodyResponseCallback<Schema$Empty>,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    delete(
      params: Params$Resource$Projects$Exclusions$Delete,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    delete(callback: BodyResponseCallback<Schema$Empty>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Projects$Exclusions$Delete
        | BodyResponseCallback<Schema$Empty>,
      optionsOrCallback?: MethodOptions | BodyResponseCallback<Schema$Empty>,
      callback?: BodyResponseCallback<Schema$Empty>
    ): void | GaxiosPromise<Schema$Empty> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Exclusions$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Exclusions$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://logging.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v2/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$Empty>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Empty>(parameters);
      }
    }

    /**
     * logging.projects.exclusions.get
     * @desc Gets the description of an exclusion.
     * @alias logging.projects.exclusions.get
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.name Required. The resource name of an existing exclusion: "projects/[PROJECT_ID]/exclusions/[EXCLUSION_ID]" "organizations/[ORGANIZATION_ID]/exclusions/[EXCLUSION_ID]" "billingAccounts/[BILLING_ACCOUNT_ID]/exclusions/[EXCLUSION_ID]" "folders/[FOLDER_ID]/exclusions/[EXCLUSION_ID]" Example: "projects/my-project-id/exclusions/my-exclusion-id".
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    get(
      params?: Params$Resource$Projects$Exclusions$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$LogExclusion>;
    get(
      params: Params$Resource$Projects$Exclusions$Get,
      options: MethodOptions | BodyResponseCallback<Schema$LogExclusion>,
      callback: BodyResponseCallback<Schema$LogExclusion>
    ): void;
    get(
      params: Params$Resource$Projects$Exclusions$Get,
      callback: BodyResponseCallback<Schema$LogExclusion>
    ): void;
    get(callback: BodyResponseCallback<Schema$LogExclusion>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Projects$Exclusions$Get
        | BodyResponseCallback<Schema$LogExclusion>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$LogExclusion>,
      callback?: BodyResponseCallback<Schema$LogExclusion>
    ): void | GaxiosPromise<Schema$LogExclusion> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Exclusions$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Exclusions$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://logging.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v2/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$LogExclusion>(parameters, callback);
      } else {
        return createAPIRequest<Schema$LogExclusion>(parameters);
      }
    }

    /**
     * logging.projects.exclusions.list
     * @desc Lists all the exclusions in a parent resource.
     * @alias logging.projects.exclusions.list
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {integer=} params.pageSize Optional. The maximum number of results to return from this request. Non-positive values are ignored. The presence of nextPageToken in the response indicates that more results might be available.
     * @param {string=} params.pageToken Optional. If present, then retrieve the next batch of results from the preceding call to this method. pageToken must be the value of nextPageToken from the previous response. The values of other method parameters should be identical to those in the previous call.
     * @param {string} params.parent Required. The parent resource whose exclusions are to be listed. "projects/[PROJECT_ID]" "organizations/[ORGANIZATION_ID]" "billingAccounts/[BILLING_ACCOUNT_ID]" "folders/[FOLDER_ID]"
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list(
      params?: Params$Resource$Projects$Exclusions$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ListExclusionsResponse>;
    list(
      params: Params$Resource$Projects$Exclusions$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ListExclusionsResponse>,
      callback: BodyResponseCallback<Schema$ListExclusionsResponse>
    ): void;
    list(
      params: Params$Resource$Projects$Exclusions$List,
      callback: BodyResponseCallback<Schema$ListExclusionsResponse>
    ): void;
    list(callback: BodyResponseCallback<Schema$ListExclusionsResponse>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Projects$Exclusions$List
        | BodyResponseCallback<Schema$ListExclusionsResponse>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$ListExclusionsResponse>,
      callback?: BodyResponseCallback<Schema$ListExclusionsResponse>
    ): void | GaxiosPromise<Schema$ListExclusionsResponse> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Exclusions$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Exclusions$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://logging.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v2/{+parent}/exclusions').replace(
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
        createAPIRequest<Schema$ListExclusionsResponse>(parameters, callback);
      } else {
        return createAPIRequest<Schema$ListExclusionsResponse>(parameters);
      }
    }

    /**
     * logging.projects.exclusions.patch
     * @desc Changes one or more properties of an existing exclusion.
     * @alias logging.projects.exclusions.patch
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.name Required. The resource name of the exclusion to update: "projects/[PROJECT_ID]/exclusions/[EXCLUSION_ID]" "organizations/[ORGANIZATION_ID]/exclusions/[EXCLUSION_ID]" "billingAccounts/[BILLING_ACCOUNT_ID]/exclusions/[EXCLUSION_ID]" "folders/[FOLDER_ID]/exclusions/[EXCLUSION_ID]" Example: "projects/my-project-id/exclusions/my-exclusion-id".
     * @param {string=} params.updateMask Required. A non-empty list of fields to change in the existing exclusion. New values for the fields are taken from the corresponding fields in the LogExclusion included in this request. Fields not mentioned in update_mask are not changed and are ignored in the request.For example, to change the filter and description of an exclusion, specify an update_mask of "filter,description".
     * @param {().LogExclusion} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    patch(
      params?: Params$Resource$Projects$Exclusions$Patch,
      options?: MethodOptions
    ): GaxiosPromise<Schema$LogExclusion>;
    patch(
      params: Params$Resource$Projects$Exclusions$Patch,
      options: MethodOptions | BodyResponseCallback<Schema$LogExclusion>,
      callback: BodyResponseCallback<Schema$LogExclusion>
    ): void;
    patch(
      params: Params$Resource$Projects$Exclusions$Patch,
      callback: BodyResponseCallback<Schema$LogExclusion>
    ): void;
    patch(callback: BodyResponseCallback<Schema$LogExclusion>): void;
    patch(
      paramsOrCallback?:
        | Params$Resource$Projects$Exclusions$Patch
        | BodyResponseCallback<Schema$LogExclusion>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$LogExclusion>,
      callback?: BodyResponseCallback<Schema$LogExclusion>
    ): void | GaxiosPromise<Schema$LogExclusion> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Exclusions$Patch;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Exclusions$Patch;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://logging.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v2/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$LogExclusion>(parameters, callback);
      } else {
        return createAPIRequest<Schema$LogExclusion>(parameters);
      }
    }
  }

  export interface Params$Resource$Projects$Exclusions$Create
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Required. The parent resource in which to create the exclusion: "projects/[PROJECT_ID]" "organizations/[ORGANIZATION_ID]" "billingAccounts/[BILLING_ACCOUNT_ID]" "folders/[FOLDER_ID]" Examples: "projects/my-logging-project", "organizations/123456789".
     */
    parent?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$LogExclusion;
  }
  export interface Params$Resource$Projects$Exclusions$Delete
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Required. The resource name of an existing exclusion to delete: "projects/[PROJECT_ID]/exclusions/[EXCLUSION_ID]" "organizations/[ORGANIZATION_ID]/exclusions/[EXCLUSION_ID]" "billingAccounts/[BILLING_ACCOUNT_ID]/exclusions/[EXCLUSION_ID]" "folders/[FOLDER_ID]/exclusions/[EXCLUSION_ID]" Example: "projects/my-project-id/exclusions/my-exclusion-id".
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Exclusions$Get
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Required. The resource name of an existing exclusion: "projects/[PROJECT_ID]/exclusions/[EXCLUSION_ID]" "organizations/[ORGANIZATION_ID]/exclusions/[EXCLUSION_ID]" "billingAccounts/[BILLING_ACCOUNT_ID]/exclusions/[EXCLUSION_ID]" "folders/[FOLDER_ID]/exclusions/[EXCLUSION_ID]" Example: "projects/my-project-id/exclusions/my-exclusion-id".
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Exclusions$List
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Optional. The maximum number of results to return from this request. Non-positive values are ignored. The presence of nextPageToken in the response indicates that more results might be available.
     */
    pageSize?: number;
    /**
     * Optional. If present, then retrieve the next batch of results from the preceding call to this method. pageToken must be the value of nextPageToken from the previous response. The values of other method parameters should be identical to those in the previous call.
     */
    pageToken?: string;
    /**
     * Required. The parent resource whose exclusions are to be listed. "projects/[PROJECT_ID]" "organizations/[ORGANIZATION_ID]" "billingAccounts/[BILLING_ACCOUNT_ID]" "folders/[FOLDER_ID]"
     */
    parent?: string;
  }
  export interface Params$Resource$Projects$Exclusions$Patch
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Required. The resource name of the exclusion to update: "projects/[PROJECT_ID]/exclusions/[EXCLUSION_ID]" "organizations/[ORGANIZATION_ID]/exclusions/[EXCLUSION_ID]" "billingAccounts/[BILLING_ACCOUNT_ID]/exclusions/[EXCLUSION_ID]" "folders/[FOLDER_ID]/exclusions/[EXCLUSION_ID]" Example: "projects/my-project-id/exclusions/my-exclusion-id".
     */
    name?: string;
    /**
     * Required. A non-empty list of fields to change in the existing exclusion. New values for the fields are taken from the corresponding fields in the LogExclusion included in this request. Fields not mentioned in update_mask are not changed and are ignored in the request.For example, to change the filter and description of an exclusion, specify an update_mask of "filter,description".
     */
    updateMask?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$LogExclusion;
  }

  export class Resource$Projects$Logs {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * logging.projects.logs.delete
     * @desc Deletes all the log entries in a log. The log reappears if it receives new entries. Log entries written shortly before the delete operation might not be deleted.
     * @alias logging.projects.logs.delete
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.logName Required. The resource name of the log to delete: "projects/[PROJECT_ID]/logs/[LOG_ID]" "organizations/[ORGANIZATION_ID]/logs/[LOG_ID]" "billingAccounts/[BILLING_ACCOUNT_ID]/logs/[LOG_ID]" "folders/[FOLDER_ID]/logs/[LOG_ID]" [LOG_ID] must be URL-encoded. For example, "projects/my-project-id/logs/syslog", "organizations/1234567890/logs/cloudresourcemanager.googleapis.com%2Factivity". For more information about log names, see LogEntry.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    delete(
      params?: Params$Resource$Projects$Logs$Delete,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Empty>;
    delete(
      params: Params$Resource$Projects$Logs$Delete,
      options: MethodOptions | BodyResponseCallback<Schema$Empty>,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    delete(
      params: Params$Resource$Projects$Logs$Delete,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    delete(callback: BodyResponseCallback<Schema$Empty>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Projects$Logs$Delete
        | BodyResponseCallback<Schema$Empty>,
      optionsOrCallback?: MethodOptions | BodyResponseCallback<Schema$Empty>,
      callback?: BodyResponseCallback<Schema$Empty>
    ): void | GaxiosPromise<Schema$Empty> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Logs$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Logs$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://logging.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v2/{+logName}').replace(/([^:]\/)\/+/g, '$1'),
            method: 'DELETE',
          },
          options
        ),
        params,
        requiredParams: ['logName'],
        pathParams: ['logName'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Empty>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Empty>(parameters);
      }
    }

    /**
     * logging.projects.logs.list
     * @desc Lists the logs in projects, organizations, folders, or billing accounts. Only logs that have entries are listed.
     * @alias logging.projects.logs.list
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {integer=} params.pageSize Optional. The maximum number of results to return from this request. Non-positive values are ignored. The presence of nextPageToken in the response indicates that more results might be available.
     * @param {string=} params.pageToken Optional. If present, then retrieve the next batch of results from the preceding call to this method. pageToken must be the value of nextPageToken from the previous response. The values of other method parameters should be identical to those in the previous call.
     * @param {string} params.parent Required. The resource name that owns the logs: "projects/[PROJECT_ID]" "organizations/[ORGANIZATION_ID]" "billingAccounts/[BILLING_ACCOUNT_ID]" "folders/[FOLDER_ID]"
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list(
      params?: Params$Resource$Projects$Logs$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ListLogsResponse>;
    list(
      params: Params$Resource$Projects$Logs$List,
      options: MethodOptions | BodyResponseCallback<Schema$ListLogsResponse>,
      callback: BodyResponseCallback<Schema$ListLogsResponse>
    ): void;
    list(
      params: Params$Resource$Projects$Logs$List,
      callback: BodyResponseCallback<Schema$ListLogsResponse>
    ): void;
    list(callback: BodyResponseCallback<Schema$ListLogsResponse>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Projects$Logs$List
        | BodyResponseCallback<Schema$ListLogsResponse>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$ListLogsResponse>,
      callback?: BodyResponseCallback<Schema$ListLogsResponse>
    ): void | GaxiosPromise<Schema$ListLogsResponse> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Logs$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Logs$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://logging.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v2/{+parent}/logs').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$ListLogsResponse>(parameters, callback);
      } else {
        return createAPIRequest<Schema$ListLogsResponse>(parameters);
      }
    }
  }

  export interface Params$Resource$Projects$Logs$Delete
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Required. The resource name of the log to delete: "projects/[PROJECT_ID]/logs/[LOG_ID]" "organizations/[ORGANIZATION_ID]/logs/[LOG_ID]" "billingAccounts/[BILLING_ACCOUNT_ID]/logs/[LOG_ID]" "folders/[FOLDER_ID]/logs/[LOG_ID]" [LOG_ID] must be URL-encoded. For example, "projects/my-project-id/logs/syslog", "organizations/1234567890/logs/cloudresourcemanager.googleapis.com%2Factivity". For more information about log names, see LogEntry.
     */
    logName?: string;
  }
  export interface Params$Resource$Projects$Logs$List
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Optional. The maximum number of results to return from this request. Non-positive values are ignored. The presence of nextPageToken in the response indicates that more results might be available.
     */
    pageSize?: number;
    /**
     * Optional. If present, then retrieve the next batch of results from the preceding call to this method. pageToken must be the value of nextPageToken from the previous response. The values of other method parameters should be identical to those in the previous call.
     */
    pageToken?: string;
    /**
     * Required. The resource name that owns the logs: "projects/[PROJECT_ID]" "organizations/[ORGANIZATION_ID]" "billingAccounts/[BILLING_ACCOUNT_ID]" "folders/[FOLDER_ID]"
     */
    parent?: string;
  }

  export class Resource$Projects$Metrics {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * logging.projects.metrics.create
     * @desc Creates a logs-based metric.
     * @alias logging.projects.metrics.create
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.parent The resource name of the project in which to create the metric: "projects/[PROJECT_ID]" The new metric must be provided in the request.
     * @param {().LogMetric} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    create(
      params?: Params$Resource$Projects$Metrics$Create,
      options?: MethodOptions
    ): GaxiosPromise<Schema$LogMetric>;
    create(
      params: Params$Resource$Projects$Metrics$Create,
      options: MethodOptions | BodyResponseCallback<Schema$LogMetric>,
      callback: BodyResponseCallback<Schema$LogMetric>
    ): void;
    create(
      params: Params$Resource$Projects$Metrics$Create,
      callback: BodyResponseCallback<Schema$LogMetric>
    ): void;
    create(callback: BodyResponseCallback<Schema$LogMetric>): void;
    create(
      paramsOrCallback?:
        | Params$Resource$Projects$Metrics$Create
        | BodyResponseCallback<Schema$LogMetric>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$LogMetric>,
      callback?: BodyResponseCallback<Schema$LogMetric>
    ): void | GaxiosPromise<Schema$LogMetric> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Metrics$Create;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Metrics$Create;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://logging.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v2/{+parent}/metrics').replace(
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
        createAPIRequest<Schema$LogMetric>(parameters, callback);
      } else {
        return createAPIRequest<Schema$LogMetric>(parameters);
      }
    }

    /**
     * logging.projects.metrics.delete
     * @desc Deletes a logs-based metric.
     * @alias logging.projects.metrics.delete
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.metricName The resource name of the metric to delete: "projects/[PROJECT_ID]/metrics/[METRIC_ID]"
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    delete(
      params?: Params$Resource$Projects$Metrics$Delete,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Empty>;
    delete(
      params: Params$Resource$Projects$Metrics$Delete,
      options: MethodOptions | BodyResponseCallback<Schema$Empty>,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    delete(
      params: Params$Resource$Projects$Metrics$Delete,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    delete(callback: BodyResponseCallback<Schema$Empty>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Projects$Metrics$Delete
        | BodyResponseCallback<Schema$Empty>,
      optionsOrCallback?: MethodOptions | BodyResponseCallback<Schema$Empty>,
      callback?: BodyResponseCallback<Schema$Empty>
    ): void | GaxiosPromise<Schema$Empty> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Metrics$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Metrics$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://logging.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v2/{+metricName}').replace(/([^:]\/)\/+/g, '$1'),
            method: 'DELETE',
          },
          options
        ),
        params,
        requiredParams: ['metricName'],
        pathParams: ['metricName'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Empty>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Empty>(parameters);
      }
    }

    /**
     * logging.projects.metrics.get
     * @desc Gets a logs-based metric.
     * @alias logging.projects.metrics.get
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.metricName The resource name of the desired metric: "projects/[PROJECT_ID]/metrics/[METRIC_ID]"
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    get(
      params?: Params$Resource$Projects$Metrics$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$LogMetric>;
    get(
      params: Params$Resource$Projects$Metrics$Get,
      options: MethodOptions | BodyResponseCallback<Schema$LogMetric>,
      callback: BodyResponseCallback<Schema$LogMetric>
    ): void;
    get(
      params: Params$Resource$Projects$Metrics$Get,
      callback: BodyResponseCallback<Schema$LogMetric>
    ): void;
    get(callback: BodyResponseCallback<Schema$LogMetric>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Projects$Metrics$Get
        | BodyResponseCallback<Schema$LogMetric>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$LogMetric>,
      callback?: BodyResponseCallback<Schema$LogMetric>
    ): void | GaxiosPromise<Schema$LogMetric> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Metrics$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Metrics$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://logging.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v2/{+metricName}').replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['metricName'],
        pathParams: ['metricName'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$LogMetric>(parameters, callback);
      } else {
        return createAPIRequest<Schema$LogMetric>(parameters);
      }
    }

    /**
     * logging.projects.metrics.list
     * @desc Lists logs-based metrics.
     * @alias logging.projects.metrics.list
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {integer=} params.pageSize Optional. The maximum number of results to return from this request. Non-positive values are ignored. The presence of nextPageToken in the response indicates that more results might be available.
     * @param {string=} params.pageToken Optional. If present, then retrieve the next batch of results from the preceding call to this method. pageToken must be the value of nextPageToken from the previous response. The values of other method parameters should be identical to those in the previous call.
     * @param {string} params.parent Required. The name of the project containing the metrics: "projects/[PROJECT_ID]"
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list(
      params?: Params$Resource$Projects$Metrics$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ListLogMetricsResponse>;
    list(
      params: Params$Resource$Projects$Metrics$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ListLogMetricsResponse>,
      callback: BodyResponseCallback<Schema$ListLogMetricsResponse>
    ): void;
    list(
      params: Params$Resource$Projects$Metrics$List,
      callback: BodyResponseCallback<Schema$ListLogMetricsResponse>
    ): void;
    list(callback: BodyResponseCallback<Schema$ListLogMetricsResponse>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Projects$Metrics$List
        | BodyResponseCallback<Schema$ListLogMetricsResponse>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$ListLogMetricsResponse>,
      callback?: BodyResponseCallback<Schema$ListLogMetricsResponse>
    ): void | GaxiosPromise<Schema$ListLogMetricsResponse> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Metrics$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Metrics$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://logging.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v2/{+parent}/metrics').replace(
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
        createAPIRequest<Schema$ListLogMetricsResponse>(parameters, callback);
      } else {
        return createAPIRequest<Schema$ListLogMetricsResponse>(parameters);
      }
    }

    /**
     * logging.projects.metrics.update
     * @desc Creates or updates a logs-based metric.
     * @alias logging.projects.metrics.update
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.metricName The resource name of the metric to update: "projects/[PROJECT_ID]/metrics/[METRIC_ID]" The updated metric must be provided in the request and it's name field must be the same as [METRIC_ID] If the metric does not exist in [PROJECT_ID], then a new metric is created.
     * @param {().LogMetric} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    update(
      params?: Params$Resource$Projects$Metrics$Update,
      options?: MethodOptions
    ): GaxiosPromise<Schema$LogMetric>;
    update(
      params: Params$Resource$Projects$Metrics$Update,
      options: MethodOptions | BodyResponseCallback<Schema$LogMetric>,
      callback: BodyResponseCallback<Schema$LogMetric>
    ): void;
    update(
      params: Params$Resource$Projects$Metrics$Update,
      callback: BodyResponseCallback<Schema$LogMetric>
    ): void;
    update(callback: BodyResponseCallback<Schema$LogMetric>): void;
    update(
      paramsOrCallback?:
        | Params$Resource$Projects$Metrics$Update
        | BodyResponseCallback<Schema$LogMetric>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$LogMetric>,
      callback?: BodyResponseCallback<Schema$LogMetric>
    ): void | GaxiosPromise<Schema$LogMetric> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Metrics$Update;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Metrics$Update;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://logging.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v2/{+metricName}').replace(/([^:]\/)\/+/g, '$1'),
            method: 'PUT',
          },
          options
        ),
        params,
        requiredParams: ['metricName'],
        pathParams: ['metricName'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$LogMetric>(parameters, callback);
      } else {
        return createAPIRequest<Schema$LogMetric>(parameters);
      }
    }
  }

  export interface Params$Resource$Projects$Metrics$Create
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * The resource name of the project in which to create the metric: "projects/[PROJECT_ID]" The new metric must be provided in the request.
     */
    parent?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$LogMetric;
  }
  export interface Params$Resource$Projects$Metrics$Delete
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * The resource name of the metric to delete: "projects/[PROJECT_ID]/metrics/[METRIC_ID]"
     */
    metricName?: string;
  }
  export interface Params$Resource$Projects$Metrics$Get
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * The resource name of the desired metric: "projects/[PROJECT_ID]/metrics/[METRIC_ID]"
     */
    metricName?: string;
  }
  export interface Params$Resource$Projects$Metrics$List
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Optional. The maximum number of results to return from this request. Non-positive values are ignored. The presence of nextPageToken in the response indicates that more results might be available.
     */
    pageSize?: number;
    /**
     * Optional. If present, then retrieve the next batch of results from the preceding call to this method. pageToken must be the value of nextPageToken from the previous response. The values of other method parameters should be identical to those in the previous call.
     */
    pageToken?: string;
    /**
     * Required. The name of the project containing the metrics: "projects/[PROJECT_ID]"
     */
    parent?: string;
  }
  export interface Params$Resource$Projects$Metrics$Update
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * The resource name of the metric to update: "projects/[PROJECT_ID]/metrics/[METRIC_ID]" The updated metric must be provided in the request and it's name field must be the same as [METRIC_ID] If the metric does not exist in [PROJECT_ID], then a new metric is created.
     */
    metricName?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$LogMetric;
  }

  export class Resource$Projects$Sinks {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * logging.projects.sinks.create
     * @desc Creates a sink that exports specified log entries to a destination. The export of newly-ingested log entries begins immediately, unless the sink's writer_identity is not permitted to write to the destination. A sink can export log entries only from the resource owning the sink.
     * @alias logging.projects.sinks.create
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.parent Required. The resource in which to create the sink: "projects/[PROJECT_ID]" "organizations/[ORGANIZATION_ID]" "billingAccounts/[BILLING_ACCOUNT_ID]" "folders/[FOLDER_ID]" Examples: "projects/my-logging-project", "organizations/123456789".
     * @param {boolean=} params.uniqueWriterIdentity Optional. Determines the kind of IAM identity returned as writer_identity in the new sink. If this value is omitted or set to false, and if the sink's parent is a project, then the value returned as writer_identity is the same group or service account used by Logging before the addition of writer identities to this API. The sink's destination must be in the same project as the sink itself.If this field is set to true, or if the sink is owned by a non-project resource such as an organization, then the value of writer_identity will be a unique service account used only for exports from the new sink. For more information, see writer_identity in LogSink.
     * @param {().LogSink} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    create(
      params?: Params$Resource$Projects$Sinks$Create,
      options?: MethodOptions
    ): GaxiosPromise<Schema$LogSink>;
    create(
      params: Params$Resource$Projects$Sinks$Create,
      options: MethodOptions | BodyResponseCallback<Schema$LogSink>,
      callback: BodyResponseCallback<Schema$LogSink>
    ): void;
    create(
      params: Params$Resource$Projects$Sinks$Create,
      callback: BodyResponseCallback<Schema$LogSink>
    ): void;
    create(callback: BodyResponseCallback<Schema$LogSink>): void;
    create(
      paramsOrCallback?:
        | Params$Resource$Projects$Sinks$Create
        | BodyResponseCallback<Schema$LogSink>,
      optionsOrCallback?: MethodOptions | BodyResponseCallback<Schema$LogSink>,
      callback?: BodyResponseCallback<Schema$LogSink>
    ): void | GaxiosPromise<Schema$LogSink> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Sinks$Create;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Sinks$Create;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://logging.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v2/{+parent}/sinks').replace(
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
        createAPIRequest<Schema$LogSink>(parameters, callback);
      } else {
        return createAPIRequest<Schema$LogSink>(parameters);
      }
    }

    /**
     * logging.projects.sinks.delete
     * @desc Deletes a sink. If the sink has a unique writer_identity, then that service account is also deleted.
     * @alias logging.projects.sinks.delete
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.sinkName Required. The full resource name of the sink to delete, including the parent resource and the sink identifier: "projects/[PROJECT_ID]/sinks/[SINK_ID]" "organizations/[ORGANIZATION_ID]/sinks/[SINK_ID]" "billingAccounts/[BILLING_ACCOUNT_ID]/sinks/[SINK_ID]" "folders/[FOLDER_ID]/sinks/[SINK_ID]" Example: "projects/my-project-id/sinks/my-sink-id".
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    delete(
      params?: Params$Resource$Projects$Sinks$Delete,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Empty>;
    delete(
      params: Params$Resource$Projects$Sinks$Delete,
      options: MethodOptions | BodyResponseCallback<Schema$Empty>,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    delete(
      params: Params$Resource$Projects$Sinks$Delete,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    delete(callback: BodyResponseCallback<Schema$Empty>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Projects$Sinks$Delete
        | BodyResponseCallback<Schema$Empty>,
      optionsOrCallback?: MethodOptions | BodyResponseCallback<Schema$Empty>,
      callback?: BodyResponseCallback<Schema$Empty>
    ): void | GaxiosPromise<Schema$Empty> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Sinks$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Sinks$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://logging.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v2/{+sinkName}').replace(/([^:]\/)\/+/g, '$1'),
            method: 'DELETE',
          },
          options
        ),
        params,
        requiredParams: ['sinkName'],
        pathParams: ['sinkName'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Empty>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Empty>(parameters);
      }
    }

    /**
     * logging.projects.sinks.get
     * @desc Gets a sink.
     * @alias logging.projects.sinks.get
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.sinkName Required. The resource name of the sink: "projects/[PROJECT_ID]/sinks/[SINK_ID]" "organizations/[ORGANIZATION_ID]/sinks/[SINK_ID]" "billingAccounts/[BILLING_ACCOUNT_ID]/sinks/[SINK_ID]" "folders/[FOLDER_ID]/sinks/[SINK_ID]" Example: "projects/my-project-id/sinks/my-sink-id".
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    get(
      params?: Params$Resource$Projects$Sinks$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$LogSink>;
    get(
      params: Params$Resource$Projects$Sinks$Get,
      options: MethodOptions | BodyResponseCallback<Schema$LogSink>,
      callback: BodyResponseCallback<Schema$LogSink>
    ): void;
    get(
      params: Params$Resource$Projects$Sinks$Get,
      callback: BodyResponseCallback<Schema$LogSink>
    ): void;
    get(callback: BodyResponseCallback<Schema$LogSink>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Projects$Sinks$Get
        | BodyResponseCallback<Schema$LogSink>,
      optionsOrCallback?: MethodOptions | BodyResponseCallback<Schema$LogSink>,
      callback?: BodyResponseCallback<Schema$LogSink>
    ): void | GaxiosPromise<Schema$LogSink> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Sinks$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Sinks$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://logging.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v2/{+sinkName}').replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['sinkName'],
        pathParams: ['sinkName'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$LogSink>(parameters, callback);
      } else {
        return createAPIRequest<Schema$LogSink>(parameters);
      }
    }

    /**
     * logging.projects.sinks.list
     * @desc Lists sinks.
     * @alias logging.projects.sinks.list
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {integer=} params.pageSize Optional. The maximum number of results to return from this request. Non-positive values are ignored. The presence of nextPageToken in the response indicates that more results might be available.
     * @param {string=} params.pageToken Optional. If present, then retrieve the next batch of results from the preceding call to this method. pageToken must be the value of nextPageToken from the previous response. The values of other method parameters should be identical to those in the previous call.
     * @param {string} params.parent Required. The parent resource whose sinks are to be listed: "projects/[PROJECT_ID]" "organizations/[ORGANIZATION_ID]" "billingAccounts/[BILLING_ACCOUNT_ID]" "folders/[FOLDER_ID]"
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list(
      params?: Params$Resource$Projects$Sinks$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ListSinksResponse>;
    list(
      params: Params$Resource$Projects$Sinks$List,
      options: MethodOptions | BodyResponseCallback<Schema$ListSinksResponse>,
      callback: BodyResponseCallback<Schema$ListSinksResponse>
    ): void;
    list(
      params: Params$Resource$Projects$Sinks$List,
      callback: BodyResponseCallback<Schema$ListSinksResponse>
    ): void;
    list(callback: BodyResponseCallback<Schema$ListSinksResponse>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Projects$Sinks$List
        | BodyResponseCallback<Schema$ListSinksResponse>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$ListSinksResponse>,
      callback?: BodyResponseCallback<Schema$ListSinksResponse>
    ): void | GaxiosPromise<Schema$ListSinksResponse> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Sinks$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Sinks$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://logging.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v2/{+parent}/sinks').replace(
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
        createAPIRequest<Schema$ListSinksResponse>(parameters, callback);
      } else {
        return createAPIRequest<Schema$ListSinksResponse>(parameters);
      }
    }

    /**
     * logging.projects.sinks.patch
     * @desc Updates a sink. This method replaces the following fields in the existing sink with values from the new sink: destination, and filter.The updated sink might also have a new writer_identity; see the unique_writer_identity field.
     * @alias logging.projects.sinks.patch
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.sinkName Required. The full resource name of the sink to update, including the parent resource and the sink identifier: "projects/[PROJECT_ID]/sinks/[SINK_ID]" "organizations/[ORGANIZATION_ID]/sinks/[SINK_ID]" "billingAccounts/[BILLING_ACCOUNT_ID]/sinks/[SINK_ID]" "folders/[FOLDER_ID]/sinks/[SINK_ID]" Example: "projects/my-project-id/sinks/my-sink-id".
     * @param {boolean=} params.uniqueWriterIdentity Optional. See sinks.create for a description of this field. When updating a sink, the effect of this field on the value of writer_identity in the updated sink depends on both the old and new values of this field: If the old and new values of this field are both false or both true, then there is no change to the sink's writer_identity. If the old value is false and the new value is true, then writer_identity is changed to a unique service account. It is an error if the old value is true and the new value is set to false or defaulted to false.
     * @param {string=} params.updateMask Optional. Field mask that specifies the fields in sink that need an update. A sink field will be overwritten if, and only if, it is in the update mask. name and output only fields cannot be updated.An empty updateMask is temporarily treated as using the following mask for backwards compatibility purposes:  destination,filter,includeChildren At some point in the future, behavior will be removed and specifying an empty updateMask will be an error.For a detailed FieldMask definition, see https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#google.protobuf.FieldMaskExample: updateMask=filter.
     * @param {().LogSink} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    patch(
      params?: Params$Resource$Projects$Sinks$Patch,
      options?: MethodOptions
    ): GaxiosPromise<Schema$LogSink>;
    patch(
      params: Params$Resource$Projects$Sinks$Patch,
      options: MethodOptions | BodyResponseCallback<Schema$LogSink>,
      callback: BodyResponseCallback<Schema$LogSink>
    ): void;
    patch(
      params: Params$Resource$Projects$Sinks$Patch,
      callback: BodyResponseCallback<Schema$LogSink>
    ): void;
    patch(callback: BodyResponseCallback<Schema$LogSink>): void;
    patch(
      paramsOrCallback?:
        | Params$Resource$Projects$Sinks$Patch
        | BodyResponseCallback<Schema$LogSink>,
      optionsOrCallback?: MethodOptions | BodyResponseCallback<Schema$LogSink>,
      callback?: BodyResponseCallback<Schema$LogSink>
    ): void | GaxiosPromise<Schema$LogSink> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Sinks$Patch;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Sinks$Patch;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://logging.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v2/{+sinkName}').replace(/([^:]\/)\/+/g, '$1'),
            method: 'PATCH',
          },
          options
        ),
        params,
        requiredParams: ['sinkName'],
        pathParams: ['sinkName'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$LogSink>(parameters, callback);
      } else {
        return createAPIRequest<Schema$LogSink>(parameters);
      }
    }

    /**
     * logging.projects.sinks.update
     * @desc Updates a sink. This method replaces the following fields in the existing sink with values from the new sink: destination, and filter.The updated sink might also have a new writer_identity; see the unique_writer_identity field.
     * @alias logging.projects.sinks.update
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.sinkName Required. The full resource name of the sink to update, including the parent resource and the sink identifier: "projects/[PROJECT_ID]/sinks/[SINK_ID]" "organizations/[ORGANIZATION_ID]/sinks/[SINK_ID]" "billingAccounts/[BILLING_ACCOUNT_ID]/sinks/[SINK_ID]" "folders/[FOLDER_ID]/sinks/[SINK_ID]" Example: "projects/my-project-id/sinks/my-sink-id".
     * @param {boolean=} params.uniqueWriterIdentity Optional. See sinks.create for a description of this field. When updating a sink, the effect of this field on the value of writer_identity in the updated sink depends on both the old and new values of this field: If the old and new values of this field are both false or both true, then there is no change to the sink's writer_identity. If the old value is false and the new value is true, then writer_identity is changed to a unique service account. It is an error if the old value is true and the new value is set to false or defaulted to false.
     * @param {string=} params.updateMask Optional. Field mask that specifies the fields in sink that need an update. A sink field will be overwritten if, and only if, it is in the update mask. name and output only fields cannot be updated.An empty updateMask is temporarily treated as using the following mask for backwards compatibility purposes:  destination,filter,includeChildren At some point in the future, behavior will be removed and specifying an empty updateMask will be an error.For a detailed FieldMask definition, see https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#google.protobuf.FieldMaskExample: updateMask=filter.
     * @param {().LogSink} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    update(
      params?: Params$Resource$Projects$Sinks$Update,
      options?: MethodOptions
    ): GaxiosPromise<Schema$LogSink>;
    update(
      params: Params$Resource$Projects$Sinks$Update,
      options: MethodOptions | BodyResponseCallback<Schema$LogSink>,
      callback: BodyResponseCallback<Schema$LogSink>
    ): void;
    update(
      params: Params$Resource$Projects$Sinks$Update,
      callback: BodyResponseCallback<Schema$LogSink>
    ): void;
    update(callback: BodyResponseCallback<Schema$LogSink>): void;
    update(
      paramsOrCallback?:
        | Params$Resource$Projects$Sinks$Update
        | BodyResponseCallback<Schema$LogSink>,
      optionsOrCallback?: MethodOptions | BodyResponseCallback<Schema$LogSink>,
      callback?: BodyResponseCallback<Schema$LogSink>
    ): void | GaxiosPromise<Schema$LogSink> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Sinks$Update;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Sinks$Update;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://logging.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v2/{+sinkName}').replace(/([^:]\/)\/+/g, '$1'),
            method: 'PUT',
          },
          options
        ),
        params,
        requiredParams: ['sinkName'],
        pathParams: ['sinkName'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$LogSink>(parameters, callback);
      } else {
        return createAPIRequest<Schema$LogSink>(parameters);
      }
    }
  }

  export interface Params$Resource$Projects$Sinks$Create
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Required. The resource in which to create the sink: "projects/[PROJECT_ID]" "organizations/[ORGANIZATION_ID]" "billingAccounts/[BILLING_ACCOUNT_ID]" "folders/[FOLDER_ID]" Examples: "projects/my-logging-project", "organizations/123456789".
     */
    parent?: string;
    /**
     * Optional. Determines the kind of IAM identity returned as writer_identity in the new sink. If this value is omitted or set to false, and if the sink's parent is a project, then the value returned as writer_identity is the same group or service account used by Logging before the addition of writer identities to this API. The sink's destination must be in the same project as the sink itself.If this field is set to true, or if the sink is owned by a non-project resource such as an organization, then the value of writer_identity will be a unique service account used only for exports from the new sink. For more information, see writer_identity in LogSink.
     */
    uniqueWriterIdentity?: boolean;

    /**
     * Request body metadata
     */
    requestBody?: Schema$LogSink;
  }
  export interface Params$Resource$Projects$Sinks$Delete
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Required. The full resource name of the sink to delete, including the parent resource and the sink identifier: "projects/[PROJECT_ID]/sinks/[SINK_ID]" "organizations/[ORGANIZATION_ID]/sinks/[SINK_ID]" "billingAccounts/[BILLING_ACCOUNT_ID]/sinks/[SINK_ID]" "folders/[FOLDER_ID]/sinks/[SINK_ID]" Example: "projects/my-project-id/sinks/my-sink-id".
     */
    sinkName?: string;
  }
  export interface Params$Resource$Projects$Sinks$Get
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Required. The resource name of the sink: "projects/[PROJECT_ID]/sinks/[SINK_ID]" "organizations/[ORGANIZATION_ID]/sinks/[SINK_ID]" "billingAccounts/[BILLING_ACCOUNT_ID]/sinks/[SINK_ID]" "folders/[FOLDER_ID]/sinks/[SINK_ID]" Example: "projects/my-project-id/sinks/my-sink-id".
     */
    sinkName?: string;
  }
  export interface Params$Resource$Projects$Sinks$List
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Optional. The maximum number of results to return from this request. Non-positive values are ignored. The presence of nextPageToken in the response indicates that more results might be available.
     */
    pageSize?: number;
    /**
     * Optional. If present, then retrieve the next batch of results from the preceding call to this method. pageToken must be the value of nextPageToken from the previous response. The values of other method parameters should be identical to those in the previous call.
     */
    pageToken?: string;
    /**
     * Required. The parent resource whose sinks are to be listed: "projects/[PROJECT_ID]" "organizations/[ORGANIZATION_ID]" "billingAccounts/[BILLING_ACCOUNT_ID]" "folders/[FOLDER_ID]"
     */
    parent?: string;
  }
  export interface Params$Resource$Projects$Sinks$Patch
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Required. The full resource name of the sink to update, including the parent resource and the sink identifier: "projects/[PROJECT_ID]/sinks/[SINK_ID]" "organizations/[ORGANIZATION_ID]/sinks/[SINK_ID]" "billingAccounts/[BILLING_ACCOUNT_ID]/sinks/[SINK_ID]" "folders/[FOLDER_ID]/sinks/[SINK_ID]" Example: "projects/my-project-id/sinks/my-sink-id".
     */
    sinkName?: string;
    /**
     * Optional. See sinks.create for a description of this field. When updating a sink, the effect of this field on the value of writer_identity in the updated sink depends on both the old and new values of this field: If the old and new values of this field are both false or both true, then there is no change to the sink's writer_identity. If the old value is false and the new value is true, then writer_identity is changed to a unique service account. It is an error if the old value is true and the new value is set to false or defaulted to false.
     */
    uniqueWriterIdentity?: boolean;
    /**
     * Optional. Field mask that specifies the fields in sink that need an update. A sink field will be overwritten if, and only if, it is in the update mask. name and output only fields cannot be updated.An empty updateMask is temporarily treated as using the following mask for backwards compatibility purposes:  destination,filter,includeChildren At some point in the future, behavior will be removed and specifying an empty updateMask will be an error.For a detailed FieldMask definition, see https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#google.protobuf.FieldMaskExample: updateMask=filter.
     */
    updateMask?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$LogSink;
  }
  export interface Params$Resource$Projects$Sinks$Update
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Required. The full resource name of the sink to update, including the parent resource and the sink identifier: "projects/[PROJECT_ID]/sinks/[SINK_ID]" "organizations/[ORGANIZATION_ID]/sinks/[SINK_ID]" "billingAccounts/[BILLING_ACCOUNT_ID]/sinks/[SINK_ID]" "folders/[FOLDER_ID]/sinks/[SINK_ID]" Example: "projects/my-project-id/sinks/my-sink-id".
     */
    sinkName?: string;
    /**
     * Optional. See sinks.create for a description of this field. When updating a sink, the effect of this field on the value of writer_identity in the updated sink depends on both the old and new values of this field: If the old and new values of this field are both false or both true, then there is no change to the sink's writer_identity. If the old value is false and the new value is true, then writer_identity is changed to a unique service account. It is an error if the old value is true and the new value is set to false or defaulted to false.
     */
    uniqueWriterIdentity?: boolean;
    /**
     * Optional. Field mask that specifies the fields in sink that need an update. A sink field will be overwritten if, and only if, it is in the update mask. name and output only fields cannot be updated.An empty updateMask is temporarily treated as using the following mask for backwards compatibility purposes:  destination,filter,includeChildren At some point in the future, behavior will be removed and specifying an empty updateMask will be an error.For a detailed FieldMask definition, see https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#google.protobuf.FieldMaskExample: updateMask=filter.
     */
    updateMask?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$LogSink;
  }

  export class Resource$Sinks {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * logging.sinks.create
     * @desc Creates a sink that exports specified log entries to a destination. The export of newly-ingested log entries begins immediately, unless the sink's writer_identity is not permitted to write to the destination. A sink can export log entries only from the resource owning the sink.
     * @alias logging.sinks.create
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.parent Required. The resource in which to create the sink: "projects/[PROJECT_ID]" "organizations/[ORGANIZATION_ID]" "billingAccounts/[BILLING_ACCOUNT_ID]" "folders/[FOLDER_ID]" Examples: "projects/my-logging-project", "organizations/123456789".
     * @param {boolean=} params.uniqueWriterIdentity Optional. Determines the kind of IAM identity returned as writer_identity in the new sink. If this value is omitted or set to false, and if the sink's parent is a project, then the value returned as writer_identity is the same group or service account used by Logging before the addition of writer identities to this API. The sink's destination must be in the same project as the sink itself.If this field is set to true, or if the sink is owned by a non-project resource such as an organization, then the value of writer_identity will be a unique service account used only for exports from the new sink. For more information, see writer_identity in LogSink.
     * @param {().LogSink} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    create(
      params?: Params$Resource$Sinks$Create,
      options?: MethodOptions
    ): GaxiosPromise<Schema$LogSink>;
    create(
      params: Params$Resource$Sinks$Create,
      options: MethodOptions | BodyResponseCallback<Schema$LogSink>,
      callback: BodyResponseCallback<Schema$LogSink>
    ): void;
    create(
      params: Params$Resource$Sinks$Create,
      callback: BodyResponseCallback<Schema$LogSink>
    ): void;
    create(callback: BodyResponseCallback<Schema$LogSink>): void;
    create(
      paramsOrCallback?:
        | Params$Resource$Sinks$Create
        | BodyResponseCallback<Schema$LogSink>,
      optionsOrCallback?: MethodOptions | BodyResponseCallback<Schema$LogSink>,
      callback?: BodyResponseCallback<Schema$LogSink>
    ): void | GaxiosPromise<Schema$LogSink> {
      let params = (paramsOrCallback || {}) as Params$Resource$Sinks$Create;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Sinks$Create;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://logging.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v2/{+parent}/sinks').replace(
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
        createAPIRequest<Schema$LogSink>(parameters, callback);
      } else {
        return createAPIRequest<Schema$LogSink>(parameters);
      }
    }

    /**
     * logging.sinks.delete
     * @desc Deletes a sink. If the sink has a unique writer_identity, then that service account is also deleted.
     * @alias logging.sinks.delete
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.sinkName Required. The full resource name of the sink to delete, including the parent resource and the sink identifier: "projects/[PROJECT_ID]/sinks/[SINK_ID]" "organizations/[ORGANIZATION_ID]/sinks/[SINK_ID]" "billingAccounts/[BILLING_ACCOUNT_ID]/sinks/[SINK_ID]" "folders/[FOLDER_ID]/sinks/[SINK_ID]" Example: "projects/my-project-id/sinks/my-sink-id".
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    delete(
      params?: Params$Resource$Sinks$Delete,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Empty>;
    delete(
      params: Params$Resource$Sinks$Delete,
      options: MethodOptions | BodyResponseCallback<Schema$Empty>,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    delete(
      params: Params$Resource$Sinks$Delete,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    delete(callback: BodyResponseCallback<Schema$Empty>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Sinks$Delete
        | BodyResponseCallback<Schema$Empty>,
      optionsOrCallback?: MethodOptions | BodyResponseCallback<Schema$Empty>,
      callback?: BodyResponseCallback<Schema$Empty>
    ): void | GaxiosPromise<Schema$Empty> {
      let params = (paramsOrCallback || {}) as Params$Resource$Sinks$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Sinks$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://logging.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v2/{+sinkName}').replace(/([^:]\/)\/+/g, '$1'),
            method: 'DELETE',
          },
          options
        ),
        params,
        requiredParams: ['sinkName'],
        pathParams: ['sinkName'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Empty>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Empty>(parameters);
      }
    }

    /**
     * logging.sinks.get
     * @desc Gets a sink.
     * @alias logging.sinks.get
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.sinkName Required. The resource name of the sink: "projects/[PROJECT_ID]/sinks/[SINK_ID]" "organizations/[ORGANIZATION_ID]/sinks/[SINK_ID]" "billingAccounts/[BILLING_ACCOUNT_ID]/sinks/[SINK_ID]" "folders/[FOLDER_ID]/sinks/[SINK_ID]" Example: "projects/my-project-id/sinks/my-sink-id".
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    get(
      params?: Params$Resource$Sinks$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$LogSink>;
    get(
      params: Params$Resource$Sinks$Get,
      options: MethodOptions | BodyResponseCallback<Schema$LogSink>,
      callback: BodyResponseCallback<Schema$LogSink>
    ): void;
    get(
      params: Params$Resource$Sinks$Get,
      callback: BodyResponseCallback<Schema$LogSink>
    ): void;
    get(callback: BodyResponseCallback<Schema$LogSink>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Sinks$Get
        | BodyResponseCallback<Schema$LogSink>,
      optionsOrCallback?: MethodOptions | BodyResponseCallback<Schema$LogSink>,
      callback?: BodyResponseCallback<Schema$LogSink>
    ): void | GaxiosPromise<Schema$LogSink> {
      let params = (paramsOrCallback || {}) as Params$Resource$Sinks$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Sinks$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://logging.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v2/{+sinkName}').replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['sinkName'],
        pathParams: ['sinkName'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$LogSink>(parameters, callback);
      } else {
        return createAPIRequest<Schema$LogSink>(parameters);
      }
    }

    /**
     * logging.sinks.list
     * @desc Lists sinks.
     * @alias logging.sinks.list
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {integer=} params.pageSize Optional. The maximum number of results to return from this request. Non-positive values are ignored. The presence of nextPageToken in the response indicates that more results might be available.
     * @param {string=} params.pageToken Optional. If present, then retrieve the next batch of results from the preceding call to this method. pageToken must be the value of nextPageToken from the previous response. The values of other method parameters should be identical to those in the previous call.
     * @param {string} params.parent Required. The parent resource whose sinks are to be listed: "projects/[PROJECT_ID]" "organizations/[ORGANIZATION_ID]" "billingAccounts/[BILLING_ACCOUNT_ID]" "folders/[FOLDER_ID]"
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list(
      params?: Params$Resource$Sinks$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ListSinksResponse>;
    list(
      params: Params$Resource$Sinks$List,
      options: MethodOptions | BodyResponseCallback<Schema$ListSinksResponse>,
      callback: BodyResponseCallback<Schema$ListSinksResponse>
    ): void;
    list(
      params: Params$Resource$Sinks$List,
      callback: BodyResponseCallback<Schema$ListSinksResponse>
    ): void;
    list(callback: BodyResponseCallback<Schema$ListSinksResponse>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Sinks$List
        | BodyResponseCallback<Schema$ListSinksResponse>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$ListSinksResponse>,
      callback?: BodyResponseCallback<Schema$ListSinksResponse>
    ): void | GaxiosPromise<Schema$ListSinksResponse> {
      let params = (paramsOrCallback || {}) as Params$Resource$Sinks$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Sinks$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://logging.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v2/{+parent}/sinks').replace(
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
        createAPIRequest<Schema$ListSinksResponse>(parameters, callback);
      } else {
        return createAPIRequest<Schema$ListSinksResponse>(parameters);
      }
    }

    /**
     * logging.sinks.update
     * @desc Updates a sink. This method replaces the following fields in the existing sink with values from the new sink: destination, and filter.The updated sink might also have a new writer_identity; see the unique_writer_identity field.
     * @alias logging.sinks.update
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.sinkName Required. The full resource name of the sink to update, including the parent resource and the sink identifier: "projects/[PROJECT_ID]/sinks/[SINK_ID]" "organizations/[ORGANIZATION_ID]/sinks/[SINK_ID]" "billingAccounts/[BILLING_ACCOUNT_ID]/sinks/[SINK_ID]" "folders/[FOLDER_ID]/sinks/[SINK_ID]" Example: "projects/my-project-id/sinks/my-sink-id".
     * @param {boolean=} params.uniqueWriterIdentity Optional. See sinks.create for a description of this field. When updating a sink, the effect of this field on the value of writer_identity in the updated sink depends on both the old and new values of this field: If the old and new values of this field are both false or both true, then there is no change to the sink's writer_identity. If the old value is false and the new value is true, then writer_identity is changed to a unique service account. It is an error if the old value is true and the new value is set to false or defaulted to false.
     * @param {string=} params.updateMask Optional. Field mask that specifies the fields in sink that need an update. A sink field will be overwritten if, and only if, it is in the update mask. name and output only fields cannot be updated.An empty updateMask is temporarily treated as using the following mask for backwards compatibility purposes:  destination,filter,includeChildren At some point in the future, behavior will be removed and specifying an empty updateMask will be an error.For a detailed FieldMask definition, see https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#google.protobuf.FieldMaskExample: updateMask=filter.
     * @param {().LogSink} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    update(
      params?: Params$Resource$Sinks$Update,
      options?: MethodOptions
    ): GaxiosPromise<Schema$LogSink>;
    update(
      params: Params$Resource$Sinks$Update,
      options: MethodOptions | BodyResponseCallback<Schema$LogSink>,
      callback: BodyResponseCallback<Schema$LogSink>
    ): void;
    update(
      params: Params$Resource$Sinks$Update,
      callback: BodyResponseCallback<Schema$LogSink>
    ): void;
    update(callback: BodyResponseCallback<Schema$LogSink>): void;
    update(
      paramsOrCallback?:
        | Params$Resource$Sinks$Update
        | BodyResponseCallback<Schema$LogSink>,
      optionsOrCallback?: MethodOptions | BodyResponseCallback<Schema$LogSink>,
      callback?: BodyResponseCallback<Schema$LogSink>
    ): void | GaxiosPromise<Schema$LogSink> {
      let params = (paramsOrCallback || {}) as Params$Resource$Sinks$Update;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Sinks$Update;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://logging.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v2/{+sinkName}').replace(/([^:]\/)\/+/g, '$1'),
            method: 'PUT',
          },
          options
        ),
        params,
        requiredParams: ['sinkName'],
        pathParams: ['sinkName'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$LogSink>(parameters, callback);
      } else {
        return createAPIRequest<Schema$LogSink>(parameters);
      }
    }
  }

  export interface Params$Resource$Sinks$Create extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Required. The resource in which to create the sink: "projects/[PROJECT_ID]" "organizations/[ORGANIZATION_ID]" "billingAccounts/[BILLING_ACCOUNT_ID]" "folders/[FOLDER_ID]" Examples: "projects/my-logging-project", "organizations/123456789".
     */
    parent?: string;
    /**
     * Optional. Determines the kind of IAM identity returned as writer_identity in the new sink. If this value is omitted or set to false, and if the sink's parent is a project, then the value returned as writer_identity is the same group or service account used by Logging before the addition of writer identities to this API. The sink's destination must be in the same project as the sink itself.If this field is set to true, or if the sink is owned by a non-project resource such as an organization, then the value of writer_identity will be a unique service account used only for exports from the new sink. For more information, see writer_identity in LogSink.
     */
    uniqueWriterIdentity?: boolean;

    /**
     * Request body metadata
     */
    requestBody?: Schema$LogSink;
  }
  export interface Params$Resource$Sinks$Delete extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Required. The full resource name of the sink to delete, including the parent resource and the sink identifier: "projects/[PROJECT_ID]/sinks/[SINK_ID]" "organizations/[ORGANIZATION_ID]/sinks/[SINK_ID]" "billingAccounts/[BILLING_ACCOUNT_ID]/sinks/[SINK_ID]" "folders/[FOLDER_ID]/sinks/[SINK_ID]" Example: "projects/my-project-id/sinks/my-sink-id".
     */
    sinkName?: string;
  }
  export interface Params$Resource$Sinks$Get extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Required. The resource name of the sink: "projects/[PROJECT_ID]/sinks/[SINK_ID]" "organizations/[ORGANIZATION_ID]/sinks/[SINK_ID]" "billingAccounts/[BILLING_ACCOUNT_ID]/sinks/[SINK_ID]" "folders/[FOLDER_ID]/sinks/[SINK_ID]" Example: "projects/my-project-id/sinks/my-sink-id".
     */
    sinkName?: string;
  }
  export interface Params$Resource$Sinks$List extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Optional. The maximum number of results to return from this request. Non-positive values are ignored. The presence of nextPageToken in the response indicates that more results might be available.
     */
    pageSize?: number;
    /**
     * Optional. If present, then retrieve the next batch of results from the preceding call to this method. pageToken must be the value of nextPageToken from the previous response. The values of other method parameters should be identical to those in the previous call.
     */
    pageToken?: string;
    /**
     * Required. The parent resource whose sinks are to be listed: "projects/[PROJECT_ID]" "organizations/[ORGANIZATION_ID]" "billingAccounts/[BILLING_ACCOUNT_ID]" "folders/[FOLDER_ID]"
     */
    parent?: string;
  }
  export interface Params$Resource$Sinks$Update extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Required. The full resource name of the sink to update, including the parent resource and the sink identifier: "projects/[PROJECT_ID]/sinks/[SINK_ID]" "organizations/[ORGANIZATION_ID]/sinks/[SINK_ID]" "billingAccounts/[BILLING_ACCOUNT_ID]/sinks/[SINK_ID]" "folders/[FOLDER_ID]/sinks/[SINK_ID]" Example: "projects/my-project-id/sinks/my-sink-id".
     */
    sinkName?: string;
    /**
     * Optional. See sinks.create for a description of this field. When updating a sink, the effect of this field on the value of writer_identity in the updated sink depends on both the old and new values of this field: If the old and new values of this field are both false or both true, then there is no change to the sink's writer_identity. If the old value is false and the new value is true, then writer_identity is changed to a unique service account. It is an error if the old value is true and the new value is set to false or defaulted to false.
     */
    uniqueWriterIdentity?: boolean;
    /**
     * Optional. Field mask that specifies the fields in sink that need an update. A sink field will be overwritten if, and only if, it is in the update mask. name and output only fields cannot be updated.An empty updateMask is temporarily treated as using the following mask for backwards compatibility purposes:  destination,filter,includeChildren At some point in the future, behavior will be removed and specifying an empty updateMask will be an error.For a detailed FieldMask definition, see https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#google.protobuf.FieldMaskExample: updateMask=filter.
     */
    updateMask?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$LogSink;
  }
}
