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

/**
 * Stackdriver Logging API
 *
 * Writes log entries and manages your Stackdriver Logging configuration.
 *
 * @example
 * const google = require('googleapis');
 * const logging = google.logging('v2beta1');
 *
 * @namespace logging
 * @type {Function}
 * @version v2beta1
 * @variation v2beta1
 * @param {object=} options Options for Logging
 */
export class Logging {
  _options: GlobalOptions;
  google: GoogleApis;
  root = this;

  billingAccounts: Resource$Billingaccounts;
  entries: Resource$Entries;
  monitoredResourceDescriptors: Resource$Monitoredresourcedescriptors;
  organizations: Resource$Organizations;
  projects: Resource$Projects;

  constructor(options: GlobalOptions, google: GoogleApis) {
    this._options = options || {};
    this.google = google;
    this.getRoot.bind(this);

    this.billingAccounts = new Resource$Billingaccounts(this);
    this.entries = new Resource$Entries(this);
    this.monitoredResourceDescriptors =
        new Resource$Monitoredresourcedescriptors(this);
    this.organizations = new Resource$Organizations(this);
    this.projects = new Resource$Projects(this);
  }

  getRoot() {
    return this.root;
  }
}

/**
 * BucketOptions describes the bucket boundaries used to create a histogram for
 * the distribution. The buckets can be in a linear sequence, an exponential
 * sequence, or each bucket can be specified explicitly. BucketOptions does not
 * include the number of values in each bucket.A bucket has an inclusive lower
 * bound and exclusive upper bound for the values that are counted for that
 * bucket. The upper bound of a bucket must be strictly greater than the lower
 * bound. The sequence of N buckets for a distribution consists of an underflow
 * bucket (number 0), zero or more finite buckets (number 1 through N - 2) and
 * an overflow bucket (number N - 1). The buckets are contiguous: the lower
 * bound of bucket i (i &gt; 0) is the same as the upper bound of bucket i - 1.
 * The buckets span the whole range of finite values: lower bound of the
 * underflow bucket is -infinity and the upper bound of the overflow bucket is
 * +infinity. The finite buckets are so-called because both bounds are finite.
 */
export interface Schema$BucketOptions {
  /**
   * The explicit buckets.
   */
  explicitBuckets: Schema$Explicit;
  /**
   * The exponential buckets.
   */
  exponentialBuckets: Schema$Exponential;
  /**
   * The linear bucket.
   */
  linearBuckets: Schema$Linear;
}
/**
 * A generic empty message that you can re-use to avoid defining duplicated
 * empty messages in your APIs. A typical example is to use it as the request or
 * the response type of an API method. For instance: service Foo {   rpc
 * Bar(google.protobuf.Empty) returns (google.protobuf.Empty); } The JSON
 * representation for Empty is empty JSON object {}.
 */
export interface Schema$Empty {}
/**
 * Specifies a set of buckets with arbitrary widths.There are size(bounds) + 1
 * (= N) buckets. Bucket i has the following boundaries:Upper bound (0 &lt;= i
 * &lt; N-1): boundsi  Lower bound (1 &lt;= i &lt; N); boundsi - 1The bounds
 * field must contain at least one element. If bounds has only one element, then
 * there are no finite buckets, and that single element is the common boundary
 * of the overflow and underflow buckets.
 */
export interface Schema$Explicit {
  /**
   * The values must be monotonically increasing.
   */
  bounds: number[];
}
/**
 * Specifies an exponential sequence of buckets that have a width that is
 * proportional to the value of the lower bound. Each bucket represents a
 * constant relative uncertainty on a specific value in the bucket.There are
 * num_finite_buckets + 2 (= N) buckets. Bucket i has the following
 * boundaries:Upper bound (0 &lt;= i &lt; N-1): scale * (growth_factor ^ i).
 * Lower bound (1 &lt;= i &lt; N): scale * (growth_factor ^ (i - 1)).
 */
export interface Schema$Exponential {
  /**
   * Must be greater than 1.
   */
  growthFactor: number;
  /**
   * Must be greater than 0.
   */
  numFiniteBuckets: number;
  /**
   * Must be greater than 0.
   */
  scale: number;
}
/**
 * A common proto for logging HTTP requests. Only contains semantics defined by
 * the HTTP specification. Product-specific logging information MUST be defined
 * in a separate message.
 */
export interface Schema$HttpRequest {
  /**
   * The number of HTTP response bytes inserted into cache. Set only when a
   * cache fill was attempted.
   */
  cacheFillBytes: string;
  /**
   * Whether or not an entity was served from cache (with or without
   * validation).
   */
  cacheHit: boolean;
  /**
   * Whether or not a cache lookup was attempted.
   */
  cacheLookup: boolean;
  /**
   * Whether or not the response was validated with the origin server before
   * being served from cache. This field is only meaningful if cache_hit is
   * True.
   */
  cacheValidatedWithOriginServer: boolean;
  /**
   * The request processing latency on the server, from the time the request was
   * received until the response was sent.
   */
  latency: string;
  /**
   * Protocol used for the request. Examples: &quot;HTTP/1.1&quot;,
   * &quot;HTTP/2&quot;, &quot;websocket&quot;
   */
  protocol: string;
  /**
   * The referer URL of the request, as defined in HTTP/1.1 Header Field
   * Definitions (http://www.w3.org/Protocols/rfc2616/rfc2616-sec14.html).
   */
  referer: string;
  /**
   * The IP address (IPv4 or IPv6) of the client that issued the HTTP request.
   * Examples: &quot;192.168.1.1&quot;, &quot;FE80::0202:B3FF:FE1E:8329&quot;.
   */
  remoteIp: string;
  /**
   * The request method. Examples: &quot;GET&quot;, &quot;HEAD&quot;,
   * &quot;PUT&quot;, &quot;POST&quot;.
   */
  requestMethod: string;
  /**
   * The size of the HTTP request message in bytes, including the request
   * headers and the request body.
   */
  requestSize: string;
  /**
   * The scheme (http, https), the host name, the path and the query portion of
   * the URL that was requested. Example:
   * &quot;http://example.com/some/info?color=red&quot;.
   */
  requestUrl: string;
  /**
   * The size of the HTTP response message sent back to the client, in bytes,
   * including the response headers and the response body.
   */
  responseSize: string;
  /**
   * The IP address (IPv4 or IPv6) of the origin server that the request was
   * sent to.
   */
  serverIp: string;
  /**
   * The response code indicating the status of response. Examples: 200, 404.
   */
  status: number;
  /**
   * The user agent sent by the client. Example: &quot;Mozilla/4.0 (compatible;
   * MSIE 6.0; Windows 98; Q312461; .NET CLR 1.0.3705)&quot;.
   */
  userAgent: string;
}
/**
 * A description of a label.
 */
export interface Schema$LabelDescriptor {
  /**
   * A human-readable description for the label.
   */
  description: string;
  /**
   * The label key.
   */
  key: string;
  /**
   * The type of data that can be assigned to the label.
   */
  valueType: string;
}
/**
 * Specifies a linear sequence of buckets that all have the same width (except
 * overflow and underflow). Each bucket represents a constant absolute
 * uncertainty on the specific value in the bucket.There are num_finite_buckets
 * + 2 (= N) buckets. Bucket i has the following boundaries:Upper bound (0 &lt;=
 * i &lt; N-1): offset + (width * i).  Lower bound (1 &lt;= i &lt; N): offset +
 * (width * (i - 1)).
 */
export interface Schema$Linear {
  /**
   * Must be greater than 0.
   */
  numFiniteBuckets: number;
  /**
   * Lower bound of the first bucket.
   */
  offset: number;
  /**
   * Must be greater than 0.
   */
  width: number;
}
/**
 * The parameters to ListLogEntries.
 */
export interface Schema$ListLogEntriesRequest {
  /**
   * Optional. A filter that chooses which log entries to return. See Advanced
   * Logs Filters. Only log entries that match the filter are returned. An empty
   * filter matches all log entries in the resources listed in resource_names.
   * Referencing a parent resource that is not listed in resource_names will
   * cause the filter to return no results. The maximum length of the filter is
   * 20000 characters.
   */
  filter: string;
  /**
   * Optional. How the results should be sorted. Presently, the only permitted
   * values are &quot;timestamp asc&quot; (default) and &quot;timestamp
   * desc&quot;. The first option returns entries in order of increasing values
   * of LogEntry.timestamp (oldest first), and the second option returns entries
   * in order of decreasing timestamps (newest first). Entries with equal
   * timestamps are returned in order of their insert_id values.
   */
  orderBy: string;
  /**
   * Optional. The maximum number of results to return from this request.
   * Non-positive values are ignored. The presence of next_page_token in the
   * response indicates that more results might be available.
   */
  pageSize: number;
  /**
   * Optional. If present, then retrieve the next batch of results from the
   * preceding call to this method. page_token must be the value of
   * next_page_token from the previous response. The values of other method
   * parameters should be identical to those in the previous call.
   */
  pageToken: string;
  /**
   * Deprecated. Use resource_names instead. One or more project identifiers or
   * project numbers from which to retrieve log entries. Example:
   * &quot;my-project-1A&quot;. If present, these project identifiers are
   * converted to resource name format and added to the list of resources in
   * resource_names.
   */
  projectIds: string[];
  /**
   * Required. Names of one or more parent resources from which to retrieve log
   * entries: &quot;projects/[PROJECT_ID]&quot;
   * &quot;organizations/[ORGANIZATION_ID]&quot;
   * &quot;billingAccounts/[BILLING_ACCOUNT_ID]&quot;
   * &quot;folders/[FOLDER_ID]&quot; Projects listed in the project_ids field
   * are added to this list.
   */
  resourceNames: string[];
}
/**
 * Result returned from ListLogEntries.
 */
export interface Schema$ListLogEntriesResponse {
  /**
   * A list of log entries. If entries is empty, nextPageToken may still be
   * returned, indicating that more entries may exist. See nextPageToken for
   * more information.
   */
  entries: Schema$LogEntry[];
  /**
   * If there might be more results than those appearing in this response, then
   * nextPageToken is included. To get the next set of results, call this method
   * again using the value of nextPageToken as pageToken.If a value for
   * next_page_token appears and the entries field is empty, it means that the
   * search found no log entries so far but it did not have time to search all
   * the possible log entries. Retry the method with this value for page_token
   * to continue the search. Alternatively, consider speeding up the search by
   * changing your filter to specify a single log name or resource type, or to
   * narrow the time range of the search.
   */
  nextPageToken: string;
}
/**
 * Result returned from ListLogMetrics.
 */
export interface Schema$ListLogMetricsResponse {
  /**
   * A list of logs-based metrics.
   */
  metrics: Schema$LogMetric[];
  /**
   * If there might be more results than appear in this response, then
   * nextPageToken is included. To get the next set of results, call this method
   * again using the value of nextPageToken as pageToken.
   */
  nextPageToken: string;
}
/**
 * Result returned from ListLogs.
 */
export interface Schema$ListLogsResponse {
  /**
   * A list of log names. For example, &quot;projects/my-project/syslog&quot; or
   * &quot;organizations/123/cloudresourcemanager.googleapis.com%2Factivity&quot;.
   */
  logNames: string[];
  /**
   * If there might be more results than those appearing in this response, then
   * nextPageToken is included. To get the next set of results, call this method
   * again using the value of nextPageToken as pageToken.
   */
  nextPageToken: string;
}
/**
 * Result returned from ListMonitoredResourceDescriptors.
 */
export interface Schema$ListMonitoredResourceDescriptorsResponse {
  /**
   * If there might be more results than those appearing in this response, then
   * nextPageToken is included. To get the next set of results, call this method
   * again using the value of nextPageToken as pageToken.
   */
  nextPageToken: string;
  /**
   * A list of resource descriptors.
   */
  resourceDescriptors: Schema$MonitoredResourceDescriptor[];
}
/**
 * Result returned from ListSinks.
 */
export interface Schema$ListSinksResponse {
  /**
   * If there might be more results than appear in this response, then
   * nextPageToken is included. To get the next set of results, call the same
   * method again using the value of nextPageToken as pageToken.
   */
  nextPageToken: string;
  /**
   * A list of sinks.
   */
  sinks: Schema$LogSink[];
}
/**
 * An individual entry in a log.
 */
export interface Schema$LogEntry {
  /**
   * Optional. Information about the HTTP request associated with this log
   * entry, if applicable.
   */
  httpRequest: Schema$HttpRequest;
  /**
   * Optional. A unique identifier for the log entry. If you provide a value,
   * then Stackdriver Logging considers other log entries in the same project,
   * with the same timestamp, and with the same insert_id to be duplicates which
   * can be removed. If omitted in new log entries, then Stackdriver Logging
   * assigns its own unique identifier. The insert_id is also used to order log
   * entries that have the same timestamp value.
   */
  insertId: string;
  /**
   * The log entry payload, represented as a structure that is expressed as a
   * JSON object.
   */
  jsonPayload: any;
  /**
   * Optional. A set of user-defined (key, value) data that provides additional
   * information about the log entry.
   */
  labels: any;
  /**
   * Required. The resource name of the log to which this log entry belongs:
   * &quot;projects/[PROJECT_ID]/logs/[LOG_ID]&quot;
   * &quot;organizations/[ORGANIZATION_ID]/logs/[LOG_ID]&quot;
   * &quot;billingAccounts/[BILLING_ACCOUNT_ID]/logs/[LOG_ID]&quot;
   * &quot;folders/[FOLDER_ID]/logs/[LOG_ID]&quot; A project number may
   * optionally be used in place of PROJECT_ID. The  project number is
   * translated to its corresponding PROJECT_ID internally  and the log_name
   * field will contain PROJECT_ID in queries and exports.[LOG_ID] must be
   * URL-encoded within log_name. Example:
   * &quot;organizations/1234567890/logs/cloudresourcemanager.googleapis.com%2Factivity&quot;.
   * [LOG_ID] must be less than 512 characters long and can only include the
   * following characters: upper and lower case alphanumeric characters,
   * forward-slash, underscore, hyphen, and period.For backward compatibility,
   * if log_name begins with a forward-slash, such as /projects/..., then the
   * log entry is ingested as usual but the forward-slash is removed. Listing
   * the log entry will not show the leading slash and filtering for a log name
   * with a leading slash will never return any results.
   */
  logName: string;
  /**
   * Optional. Information about an operation associated with the log entry, if
   * applicable.
   */
  operation: Schema$LogEntryOperation;
  /**
   * The log entry payload, represented as a protocol buffer. Some Google Cloud
   * Platform services use this field for their log entry payloads.
   */
  protoPayload: any;
  /**
   * Output only. The time the log entry was received by Stackdriver Logging.
   */
  receiveTimestamp: string;
  /**
   * Required. The primary monitored resource associated with this log entry.
   * Example: a log entry that reports a database error would be associated with
   * the monitored resource designating the particular database that reported
   * the error.
   */
  resource: Schema$MonitoredResource;
  /**
   * Optional. The severity of the log entry. The default value is
   * LogSeverity.DEFAULT.
   */
  severity: string;
  /**
   * Optional. Source code location information associated with the log entry,
   * if any.
   */
  sourceLocation: Schema$LogEntrySourceLocation;
  /**
   * Optional. The span ID within the trace associated with the log entry. For
   * Stackdriver Trace spans, this is the same format that the Stackdriver Trace
   * API v2 uses: a 16-character hexadecimal encoding of an 8-byte array, such
   * as &lt;code&gt;&quot;000000000000004a&quot;&lt;/code&gt;.
   */
  spanId: string;
  /**
   * The log entry payload, represented as a Unicode string (UTF-8).
   */
  textPayload: string;
  /**
   * Optional. The time the event described by the log entry occurred. This time
   * is used to compute the log entry&#39;s age and to enforce the logs
   * retention period. If this field is omitted in a new log entry, then
   * Stackdriver Logging assigns it the current time.Incoming log entries should
   * have timestamps that are no more than the logs retention period in the
   * past, and no more than 24 hours in the future. Log entries outside those
   * time boundaries will not be available when calling entries.list, but those
   * log entries can still be exported with LogSinks.
   */
  timestamp: string;
  /**
   * Optional. Resource name of the trace associated with the log entry, if any.
   * If it contains a relative resource name, the name is assumed to be relative
   * to //tracing.googleapis.com. Example:
   * projects/my-projectid/traces/06796866738c859f2f19b7cfb3214824
   */
  trace: string;
}
/**
 * Additional information about a potentially long-running operation with which
 * a log entry is associated.
 */
export interface Schema$LogEntryOperation {
  /**
   * Optional. Set this to True if this is the first log entry in the operation.
   */
  first: boolean;
  /**
   * Optional. An arbitrary operation identifier. Log entries with the same
   * identifier are assumed to be part of the same operation.
   */
  id: string;
  /**
   * Optional. Set this to True if this is the last log entry in the operation.
   */
  last: boolean;
  /**
   * Optional. An arbitrary producer identifier. The combination of id and
   * producer must be globally unique. Examples for producer:
   * &quot;MyDivision.MyBigCompany.com&quot;,
   * &quot;github.com/MyProject/MyApplication&quot;.
   */
  producer: string;
}
/**
 * Additional information about the source code location that produced the log
 * entry.
 */
export interface Schema$LogEntrySourceLocation {
  /**
   * Optional. Source file name. Depending on the runtime environment, this
   * might be a simple name or a fully-qualified name.
   */
  file: string;
  /**
   * Optional. Human-readable name of the function or method being invoked, with
   * optional context such as the class or package name. This information may be
   * used in contexts such as the logs viewer, where a file and line number are
   * less meaningful. The format can vary by language. For example:
   * qual.if.ied.Class.method (Java), dir/package.func (Go), function (Python).
   */
  function: string;
  /**
   * Optional. Line within the source file. 1-based; 0 indicates no line number
   * available.
   */
  line: string;
}
/**
 * Application log line emitted while processing a request.
 */
export interface Schema$LogLine {
  /**
   * App-provided log message.
   */
  logMessage: string;
  /**
   * Severity of this log entry.
   */
  severity: string;
  /**
   * Where in the source code this log message was written.
   */
  sourceLocation: Schema$SourceLocation;
  /**
   * Approximate time when this log entry was made.
   */
  time: string;
}
/**
 * Describes a logs-based metric. The value of the metric is the number of log
 * entries that match a logs filter in a given time interval.Logs-based metric
 * can also be used to extract values from logs and create a a distribution of
 * the values. The distribution records the statistics of the extracted values
 * along with an optional histogram of the values as specified by the bucket
 * options.
 */
export interface Schema$LogMetric {
  /**
   * Optional. The bucket_options are required when the logs-based metric is
   * using a DISTRIBUTION value type and it describes the bucket boundaries used
   * to create a histogram of the extracted values.
   */
  bucketOptions: Schema$BucketOptions;
  /**
   * Optional. A description of this metric, which is used in documentation.
   */
  description: string;
  /**
   * Required. An advanced logs filter which is used to match log entries.
   * Example: &quot;resource.type=gae_app AND severity&gt;=ERROR&quot; The
   * maximum length of the filter is 20000 characters.
   */
  filter: string;
  /**
   * Optional. A map from a label key string to an extractor expression which is
   * used to extract data from a log entry field and assign as the label value.
   * Each label key specified in the LabelDescriptor must have an associated
   * extractor expression in this map. The syntax of the extractor expression is
   * the same as for the value_extractor field.The extracted value is converted
   * to the type defined in the label descriptor. If the either the extraction
   * or the type conversion fails, the label will have a default value. The
   * default value for a string label is an empty string, for an integer label
   * its 0, and for a boolean label its false.Note that there are upper bounds
   * on the maximum number of labels and the number of active time series that
   * are allowed in a project.
   */
  labelExtractors: any;
  /**
   * Optional. The metric descriptor associated with the logs-based metric. If
   * unspecified, it uses a default metric descriptor with a DELTA metric kind,
   * INT64 value type, with no labels and a unit of &quot;1&quot;. Such a metric
   * counts the number of log entries matching the filter expression.The name,
   * type, and description fields in the metric_descriptor are output only, and
   * is constructed using the name and description field in the LogMetric.To
   * create a logs-based metric that records a distribution of log values, a
   * DELTA metric kind with a DISTRIBUTION value type must be used along with a
   * value_extractor expression in the LogMetric.Each label in the metric
   * descriptor must have a matching label name as the key and an extractor
   * expression as the value in the label_extractors map.The metric_kind and
   * value_type fields in the metric_descriptor cannot be updated once initially
   * configured. New labels can be added in the metric_descriptor, but existing
   * labels cannot be modified except for their description.
   */
  metricDescriptor: Schema$MetricDescriptor;
  /**
   * Required. The client-assigned metric identifier. Examples:
   * &quot;error_count&quot;, &quot;nginx/requests&quot;.Metric identifiers are
   * limited to 100 characters and can include only the following characters:
   * A-Z, a-z, 0-9, and the special characters _-.,+!*&#39;,()%/. The
   * forward-slash character (/) denotes a hierarchy of name pieces, and it
   * cannot be the first character of the name.The metric identifier in this
   * field must not be URL-encoded
   * (https://en.wikipedia.org/wiki/Percent-encoding). However, when the metric
   * identifier appears as the [METRIC_ID] part of a metric_name API parameter,
   * then the metric identifier must be URL-encoded. Example:
   * &quot;projects/my-project/metrics/nginx%2Frequests&quot;.
   */
  name: string;
  /**
   * Optional. A value_extractor is required when using a distribution
   * logs-based metric to extract the values to record from a log entry. Two
   * functions are supported for value extraction: EXTRACT(field) or
   * REGEXP_EXTRACT(field, regex). The argument are:  1. field: The name of the
   * log entry field from which the value is to be  extracted.  2. regex: A
   * regular expression using the Google RE2 syntax
   * (https://github.com/google/re2/wiki/Syntax) with a single capture  group to
   * extract data from the specified log entry field. The value  of the field is
   * converted to a string before applying the regex.  It is an error to specify
   * a regex that does not include exactly one  capture group.The result of the
   * extraction must be convertible to a double type, as the distribution always
   * records double values. If either the extraction or the conversion to double
   * fails, then those values are not recorded in the distribution.Example:
   * REGEXP_EXTRACT(jsonPayload.request, &quot;.*quantity=(\d+).*&quot;)
   */
  valueExtractor: string;
  /**
   * Deprecated. The API version that created or updated this metric. The v2
   * format is used by default and cannot be changed.
   */
  version: string;
}
/**
 * Describes a sink used to export log entries to one of the following
 * destinations in any project: a Cloud Storage bucket, a BigQuery dataset, or a
 * Cloud Pub/Sub topic. A logs filter controls which log entries are exported.
 * The sink must be created within a project, organization, billing account, or
 * folder.
 */
export interface Schema$LogSink {
  /**
   * Required. The export destination:
   * &quot;storage.googleapis.com/[GCS_BUCKET]&quot;
   * &quot;bigquery.googleapis.com/projects/[PROJECT_ID]/datasets/[DATASET]&quot;
   * &quot;pubsub.googleapis.com/projects/[PROJECT_ID]/topics/[TOPIC_ID]&quot;
   * The sink&#39;s writer_identity, set when the sink is created, must have
   * permission to write to the destination or else the log entries are not
   * exported. For more information, see Exporting Logs With Sinks.
   */
  destination: string;
  /**
   * Deprecated. This field is ignored when creating or updating sinks.
   */
  endTime: string;
  /**
   * Optional. An advanced logs filter. The only exported log entries are those
   * that are in the resource owning the sink and that match the filter. For
   * example: logName=&quot;projects/[PROJECT_ID]/logs/[LOG_ID]&quot; AND
   * severity&gt;=ERROR
   */
  filter: string;
  /**
   * Optional. This field applies only to sinks owned by organizations and
   * folders. If the field is false, the default, only the logs owned by the
   * sink&#39;s parent resource are available for export. If the field is true,
   * then logs from all the projects, folders, and billing accounts contained in
   * the sink&#39;s parent resource are also available for export. Whether a
   * particular log entry from the children is exported depends on the
   * sink&#39;s filter expression. For example, if this field is true, then the
   * filter resource.type=gce_instance would export all Compute Engine VM
   * instance log entries from all projects in the sink&#39;s parent. To only
   * export entries from certain child projects, filter on the project part of
   * the log name: logName:(&quot;projects/test-project1/&quot; OR
   * &quot;projects/test-project2/&quot;) AND resource.type=gce_instance
   */
  includeChildren: boolean;
  /**
   * Required. The client-assigned sink identifier, unique within the project.
   * Example: &quot;my-syslog-errors-to-pubsub&quot;. Sink identifiers are
   * limited to 100 characters and can include only the following characters:
   * upper and lower-case alphanumeric characters, underscores, hyphens, and
   * periods.
   */
  name: string;
  /**
   * Deprecated. The log entry format to use for this sink&#39;s exported log
   * entries. The v2 format is used by default and cannot be changed.
   */
  outputVersionFormat: string;
  /**
   * Deprecated. This field is ignored when creating or updating sinks.
   */
  startTime: string;
  /**
   * Output only. An IAM identity&amp;mdash;a service account or
   * group&amp;mdash;under which Stackdriver Logging writes the exported log
   * entries to the sink&#39;s destination. This field is set by sinks.create
   * and sinks.update, based on the setting of unique_writer_identity in those
   * methods.Until you grant this identity write-access to the destination, log
   * entry exports from this sink will fail. For more information, see Granting
   * access for a resource. Consult the destination service&#39;s documentation
   * to determine the appropriate IAM roles to assign to the identity.
   */
  writerIdentity: string;
}
/**
 * Defines a metric type and its schema. Once a metric descriptor is created,
 * deleting or altering it stops data collection and makes the metric type&#39;s
 * existing data unusable.
 */
export interface Schema$MetricDescriptor {
  /**
   * A detailed description of the metric, which can be used in documentation.
   */
  description: string;
  /**
   * A concise name for the metric, which can be displayed in user interfaces.
   * Use sentence case without an ending period, for example &quot;Request
   * count&quot;. This field is optional but it is recommended to be set for any
   * metrics associated with user-visible concepts, such as Quota.
   */
  displayName: string;
  /**
   * The set of labels that can be used to describe a specific instance of this
   * metric type. For example, the
   * appengine.googleapis.com/http/server/response_latencies metric type has a
   * label for the HTTP response code, response_code, so you can look at
   * latencies for successful responses or just for responses that failed.
   */
  labels: Schema$LabelDescriptor[];
  /**
   * Whether the metric records instantaneous values, changes to a value, etc.
   * Some combinations of metric_kind and value_type might not be supported.
   */
  metricKind: string;
  /**
   * The resource name of the metric descriptor.
   */
  name: string;
  /**
   * The metric type, including its DNS name prefix. The type is not
   * URL-encoded. All user-defined custom metric types have the DNS name
   * custom.googleapis.com. Metric types should use a natural hierarchical
   * grouping. For example:
   * &quot;custom.googleapis.com/invoice/paid/amount&quot;
   * &quot;appengine.googleapis.com/http/server/response_latencies&quot;
   */
  type: string;
  /**
   * The unit in which the metric value is reported. It is only applicable if
   * the value_type is INT64, DOUBLE, or DISTRIBUTION. The supported units are a
   * subset of The Unified Code for Units of Measure
   * (http://unitsofmeasure.org/ucum.html) standard:Basic units (UNIT) bit bit
   * By byte s second min minute h hour d dayPrefixes (PREFIX) k kilo (10**3) M
   * mega (10**6) G giga (10**9) T tera (10**12) P peta (10**15) E exa (10**18)
   * Z zetta (10**21) Y yotta (10**24) m milli (10**-3) u micro (10**-6) n nano
   * (10**-9) p pico (10**-12) f femto (10**-15) a atto (10**-18) z zepto
   * (10**-21) y yocto (10**-24) Ki kibi (2**10) Mi mebi (2**20) Gi gibi (2**30)
   * Ti tebi (2**40)GrammarThe grammar also includes these connectors: /
   * division (as an infix operator, e.g. 1/s). . multiplication (as an infix
   * operator, e.g. GBy.d)The grammar for a unit is as follows: Expression =
   * Component { &quot;.&quot; Component } { &quot;/&quot; Component } ;
   * Component = ( [ PREFIX ] UNIT | &quot;%&quot; ) [ Annotation ]           |
   * Annotation           | &quot;1&quot;           ;  Annotation =
   * &quot;{&quot; NAME &quot;}&quot; ; Notes: Annotation is just a comment if
   * it follows a UNIT and is  equivalent to 1 if it is used alone. For
   * examples,  {requests}/s == 1/s, By{transmitted}/s == By/s. NAME is a
   * sequence of non-blank printable ASCII characters not  containing
   * &#39;{&#39; or &#39;}&#39;. 1 represents dimensionless value 1, such as in
   * 1/s. % represents dimensionless value 1/100, and annotates values giving  a
   * percentage.
   */
  unit: string;
  /**
   * Whether the measurement is an integer, a floating-point number, etc. Some
   * combinations of metric_kind and value_type might not be supported.
   */
  valueType: string;
}
/**
 * An object representing a resource that can be used for monitoring, logging,
 * billing, or other purposes. Examples include virtual machine instances,
 * databases, and storage devices such as disks. The type field identifies a
 * MonitoredResourceDescriptor object that describes the resource&#39;s schema.
 * Information in the labels field identifies the actual resource and its
 * attributes according to the schema. For example, a particular Compute Engine
 * VM instance could be represented by the following object, because the
 * MonitoredResourceDescriptor for &quot;gce_instance&quot; has labels
 * &quot;instance_id&quot; and &quot;zone&quot;: { &quot;type&quot;:
 * &quot;gce_instance&quot;,   &quot;labels&quot;: { &quot;instance_id&quot;:
 * &quot;12345678901234&quot;,               &quot;zone&quot;:
 * &quot;us-central1-a&quot; }}
 */
export interface Schema$MonitoredResource {
  /**
   * Required. Values for all of the labels listed in the associated monitored
   * resource descriptor. For example, Compute Engine VM instances use the
   * labels &quot;project_id&quot;, &quot;instance_id&quot;, and
   * &quot;zone&quot;.
   */
  labels: any;
  /**
   * Required. The monitored resource type. This field must match the type field
   * of a MonitoredResourceDescriptor object. For example, the type of a Compute
   * Engine VM instance is gce_instance.
   */
  type: string;
}
/**
 * An object that describes the schema of a MonitoredResource object using a
 * type name and a set of labels. For example, the monitored resource descriptor
 * for Google Compute Engine VM instances has a type of &quot;gce_instance&quot;
 * and specifies the use of the labels &quot;instance_id&quot; and
 * &quot;zone&quot; to identify particular VM instances.Different APIs can
 * support different monitored resource types. APIs generally provide a list
 * method that returns the monitored resource descriptors used by the API.
 */
export interface Schema$MonitoredResourceDescriptor {
  /**
   * Optional. A detailed description of the monitored resource type that might
   * be used in documentation.
   */
  description: string;
  /**
   * Optional. A concise name for the monitored resource type that might be
   * displayed in user interfaces. It should be a Title Cased Noun Phrase,
   * without any article or other determiners. For example, &quot;Google Cloud
   * SQL Database&quot;.
   */
  displayName: string;
  /**
   * Required. A set of labels used to describe instances of this monitored
   * resource type. For example, an individual Google Cloud SQL database is
   * identified by values for the labels &quot;database_id&quot; and
   * &quot;zone&quot;.
   */
  labels: Schema$LabelDescriptor[];
  /**
   * Optional. The resource name of the monitored resource descriptor:
   * &quot;projects/{project_id}/monitoredResourceDescriptors/{type}&quot; where
   * {type} is the value of the type field in this object and {project_id} is a
   * project ID that provides API-specific context for accessing the type. APIs
   * that do not use project information can use the resource name format
   * &quot;monitoredResourceDescriptors/{type}&quot;.
   */
  name: string;
  /**
   * Required. The monitored resource type. For example, the type
   * &quot;cloudsql_database&quot; represents databases in Google Cloud SQL. The
   * maximum length of this value is 256 characters.
   */
  type: string;
}
/**
 * Complete log information about a single HTTP request to an App Engine
 * application.
 */
export interface Schema$RequestLog {
  /**
   * App Engine release version.
   */
  appEngineRelease: string;
  /**
   * Application that handled this request.
   */
  appId: string;
  /**
   * An indication of the relative cost of serving this request.
   */
  cost: number;
  /**
   * Time when the request finished.
   */
  endTime: string;
  /**
   * Whether this request is finished or active.
   */
  finished: boolean;
  /**
   * Whether this is the first RequestLog entry for this request. If an active
   * request has several RequestLog entries written to Stackdriver Logging, then
   * this field will be set for one of them.
   */
  first: boolean;
  /**
   * Internet host and port number of the resource being requested.
   */
  host: string;
  /**
   * HTTP version of request. Example: &quot;HTTP/1.1&quot;.
   */
  httpVersion: string;
  /**
   * An identifier for the instance that handled the request.
   */
  instanceId: string;
  /**
   * If the instance processing this request belongs to a manually scaled
   * module, then this is the 0-based index of the instance. Otherwise, this
   * value is -1.
   */
  instanceIndex: number;
  /**
   * Origin IP address.
   */
  ip: string;
  /**
   * Latency of the request.
   */
  latency: string;
  /**
   * A list of log lines emitted by the application while serving this request.
   */
  line: Schema$LogLine[];
  /**
   * Number of CPU megacycles used to process request.
   */
  megaCycles: string;
  /**
   * Request method. Example: &quot;GET&quot;, &quot;HEAD&quot;,
   * &quot;PUT&quot;, &quot;POST&quot;, &quot;DELETE&quot;.
   */
  method: string;
  /**
   * Module of the application that handled this request.
   */
  moduleId: string;
  /**
   * The logged-in user who made the request.Most likely, this is the part of
   * the user&#39;s email before the @ sign. The field value is the same for
   * different requests from the same user, but different users can have similar
   * names. This information is also available to the application via the App
   * Engine Users API.This field will be populated starting with App
   * Engine 1.9.21.
   */
  nickname: string;
  /**
   * Time this request spent in the pending request queue.
   */
  pendingTime: string;
  /**
   * Referrer URL of request.
   */
  referrer: string;
  /**
   * Globally unique identifier for a request, which is based on the request
   * start time. Request IDs for requests which started later will compare
   * greater as strings than those for requests which started earlier.
   */
  requestId: string;
  /**
   * Contains the path and query portion of the URL that was requested. For
   * example, if the URL was &quot;http://example.com/app?name=val&quot;, the
   * resource would be &quot;/app?name=val&quot;. The fragment identifier, which
   * is identified by the # character, is not included.
   */
  resource: string;
  /**
   * Size in bytes sent back to client by request.
   */
  responseSize: string;
  /**
   * Source code for the application that handled this request. There can be
   * more than one source reference per deployed application if source code is
   * distributed among multiple repositories.
   */
  sourceReference: Schema$SourceReference[];
  /**
   * Time when the request started.
   */
  startTime: string;
  /**
   * HTTP response status code. Example: 200, 404.
   */
  status: number;
  /**
   * Task name of the request, in the case of an offline request.
   */
  taskName: string;
  /**
   * Queue name of the request, in the case of an offline request.
   */
  taskQueueName: string;
  /**
   * Stackdriver Trace identifier for this request.
   */
  traceId: string;
  /**
   * File or class that handled the request.
   */
  urlMapEntry: string;
  /**
   * User agent that made the request.
   */
  userAgent: string;
  /**
   * Version of the application that handled this request.
   */
  versionId: string;
  /**
   * Whether this was a loading request for the instance.
   */
  wasLoadingRequest: boolean;
}
/**
 * Specifies a location in a source code file.
 */
export interface Schema$SourceLocation {
  /**
   * Source file name. Depending on the runtime environment, this might be a
   * simple name or a fully-qualified name.
   */
  file: string;
  /**
   * Human-readable name of the function or method being invoked, with optional
   * context such as the class or package name. This information is used in
   * contexts such as the logs viewer, where a file and line number are less
   * meaningful. The format can vary by language. For example:
   * qual.if.ied.Class.method (Java), dir/package.func (Go), function (Python).
   */
  functionName: string;
  /**
   * Line within the source file.
   */
  line: string;
}
/**
 * A reference to a particular snapshot of the source tree used to build and
 * deploy an application.
 */
export interface Schema$SourceReference {
  /**
   * Optional. A URI string identifying the repository. Example:
   * &quot;https://github.com/GoogleCloudPlatform/kubernetes.git&quot;
   */
  repository: string;
  /**
   * The canonical and persistent identifier of the deployed revision. Example
   * (git): &quot;0035781c50ec7aa23385dc841529ce8a4b70db1b&quot;
   */
  revisionId: string;
}
/**
 * The parameters to WriteLogEntries.
 */
export interface Schema$WriteLogEntriesRequest {
  /**
   * Optional. If true, the request should expect normal response, but the
   * entries won&#39;t be persisted nor exported. Useful for checking whether
   * the logging API endpoints are working properly before sending valuable
   * data.
   */
  dryRun: boolean;
  /**
   * Required. The log entries to send to Stackdriver Logging. The order of log
   * entries in this list does not matter. Values supplied in this method&#39;s
   * log_name, resource, and labels fields are copied into those log entries in
   * this list that do not include values for their corresponding fields. For
   * more information, see the LogEntry type.If the timestamp or insert_id
   * fields are missing in log entries, then this method supplies the current
   * time or a unique identifier, respectively. The supplied values are chosen
   * so that, among the log entries that did not supply their own values, the
   * entries earlier in the list will sort before the entries later in the list.
   * See the entries.list method.Log entries with timestamps that are more than
   * the logs retention period in the past or more than 24 hours in the future
   * will not be available when calling entries.list. However, those log entries
   * can still be exported with LogSinks.To improve throughput and to avoid
   * exceeding the quota limit for calls to entries.write, you should try to
   * include several log entries in this list, rather than calling this method
   * for each individual log entry.
   */
  entries: Schema$LogEntry[];
  /**
   * Optional. Default labels that are added to the labels field of all log
   * entries in entries. If a log entry already has a label with the same key as
   * a label in this parameter, then the log entry&#39;s label is not changed.
   * See LogEntry.
   */
  labels: any;
  /**
   * Optional. A default log resource name that is assigned to all log entries
   * in entries that do not specify a value for log_name:
   * &quot;projects/[PROJECT_ID]/logs/[LOG_ID]&quot;
   * &quot;organizations/[ORGANIZATION_ID]/logs/[LOG_ID]&quot;
   * &quot;billingAccounts/[BILLING_ACCOUNT_ID]/logs/[LOG_ID]&quot;
   * &quot;folders/[FOLDER_ID]/logs/[LOG_ID]&quot; [LOG_ID] must be URL-encoded.
   * For example, &quot;projects/my-project-id/logs/syslog&quot; or
   * &quot;organizations/1234567890/logs/cloudresourcemanager.googleapis.com%2Factivity&quot;.
   * For more information about log names, see LogEntry.
   */
  logName: string;
  /**
   * Optional. Whether valid entries should be written even if some other
   * entries fail due to INVALID_ARGUMENT or PERMISSION_DENIED errors. If any
   * entry is not written, then the response status is the error associated with
   * one of the failed entries and the response includes error details keyed by
   * the entries&#39; zero-based index in the entries.write method.
   */
  partialSuccess: boolean;
  /**
   * Optional. A default monitored resource object that is assigned to all log
   * entries in entries that do not specify a value for resource. Example: {
   * &quot;type&quot;: &quot;gce_instance&quot;,   &quot;labels&quot;: {
   * &quot;zone&quot;: &quot;us-central1-a&quot;, &quot;instance_id&quot;:
   * &quot;00000000000000000000&quot; }} See LogEntry.
   */
  resource: Schema$MonitoredResource;
}
/**
 * Result returned from WriteLogEntries. empty
 */
export interface Schema$WriteLogEntriesResponse {}

export class Resource$Billingaccounts {
  root: Logging;
  logs: Resource$Billingaccounts$Logs;
  constructor(root: Logging) {
    this.root = root;
    this.getRoot.bind(this);
    this.logs = new Resource$Billingaccounts$Logs(root);
  }

  getRoot() {
    return this.root;
  }
}
export class Resource$Billingaccounts$Logs {
  root: Logging;
  constructor(root: Logging) {
    this.root = root;
    this.getRoot.bind(this);
  }

  getRoot() {
    return this.root;
  }


  /**
   * logging.billingAccounts.logs.delete
   * @desc Deletes all the log entries in a log. The log reappears if it
   * receives new entries. Log entries written shortly before the delete
   * operation might not be deleted.
   * @example
   * * // BEFORE RUNNING:
   * // ---------------
   * // 1. If not already done, enable the Stackdriver Logging API
   * //    and check the quota for your project at
   * //    https://console.developers.google.com/apis/api/logging
   * // 2. This sample uses Application Default Credentials for authentication.
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
   * var logging = google.logging('v2beta1');
   *
   * authorize(function(authClient) {
   *   var request = {
   *     // Required. The resource name of the log to delete:
   *     // "projects/[PROJECT_ID]/logs/[LOG_ID]"
   *     // "organizations/[ORGANIZATION_ID]/logs/[LOG_ID]"
   *     // "billingAccounts/[BILLING_ACCOUNT_ID]/logs/[LOG_ID]"
   *     // "folders/[FOLDER_ID]/logs/[LOG_ID]"
   *     // [LOG_ID] must be URL-encoded. For example,
   * "projects/my-project-id/logs/syslog",
   *     //
   * "organizations/1234567890/logs/cloudresourcemanager.googleapis.com%2Factivity".
   * For more
   *     // information about log names, see LogEntry.
   *     logName: 'billingAccounts/my-billing-account/logs/my-log',  // TODO:
   * Update placeholder value.
   *
   *     auth: authClient,
   *   };
   *
   *   logging.billingAccounts.logs.delete(request, function(err) {
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
   * @alias logging.billingAccounts.logs.delete
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.logName Required. The resource name of the log to delete: "projects/[PROJECT_ID]/logs/[LOG_ID]" "organizations/[ORGANIZATION_ID]/logs/[LOG_ID]" "billingAccounts/[BILLING_ACCOUNT_ID]/logs/[LOG_ID]" "folders/[FOLDER_ID]/logs/[LOG_ID]" [LOG_ID] must be URL-encoded. For example, "projects/my-project-id/logs/syslog", "organizations/1234567890/logs/cloudresourcemanager.googleapis.com%2Factivity". For more information about log names, see LogEntry.
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  delete(params?: any, options?: MethodOptions): AxiosPromise<Schema$Empty>;
  delete(
      params?: any, options?: MethodOptions|BodyResponseCallback<Schema$Empty>,
      callback?: BodyResponseCallback<Schema$Empty>): void;
  delete(
      params?: any, options?: MethodOptions|BodyResponseCallback<Schema$Empty>,
      callback?: BodyResponseCallback<Schema$Empty>):
      void|AxiosPromise<Schema$Empty> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://logging.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url:
                (rootUrl + '/v2beta1/{+logName}').replace(/([^:]\/)\/+/g, '$1'),
            method: 'DELETE'
          },
          options),
      params,
      requiredParams: ['logName'],
      pathParams: ['logName'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$Empty>(parameters, callback);
    } else {
      return createAPIRequest<Schema$Empty>(parameters);
    }
  }


  /**
   * logging.billingAccounts.logs.list
   * @desc Lists the logs in projects, organizations, folders, or billing
   * accounts. Only logs that have entries are listed.
   * @example
   * * // BEFORE RUNNING:
   * // ---------------
   * // 1. If not already done, enable the Stackdriver Logging API
   * //    and check the quota for your project at
   * //    https://console.developers.google.com/apis/api/logging
   * // 2. This sample uses Application Default Credentials for authentication.
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
   * var logging = google.logging('v2beta1');
   *
   * authorize(function(authClient) {
   *   var request = {
   *     // Required. The resource name that owns the logs:
   *     // "projects/[PROJECT_ID]"
   *     // "organizations/[ORGANIZATION_ID]"
   *     // "billingAccounts/[BILLING_ACCOUNT_ID]"
   *     // "folders/[FOLDER_ID]"
   *     parent: 'billingAccounts/my-billing-account',  // TODO: Update
   * placeholder value.
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
   *     var logNamesPage = response['logNames'];
   *     if (!logNamesPage) {
   *       return;
   *     }
   *     for (var i = 0; i < logNamesPage.length; i++) {
   *       // TODO: Change code below to process each resource in
   * `logNamesPage`: console.log(JSON.stringify(logNamesPage[i], null, 2));
   *     }
   *
   *     if (response.nextPageToken) {
   *       request.pageToken = response.nextPageToken;
   *       logging.billingAccounts.logs.list(request, handlePage);
   *     }
   *   };
   *
   *   logging.billingAccounts.logs.list(request, handlePage);
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
  list(params?: any, options?: MethodOptions):
      AxiosPromise<Schema$ListLogsResponse>;
  list(
      params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$ListLogsResponse>,
      callback?: BodyResponseCallback<Schema$ListLogsResponse>): void;
  list(
      params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$ListLogsResponse>,
      callback?: BodyResponseCallback<Schema$ListLogsResponse>):
      void|AxiosPromise<Schema$ListLogsResponse> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://logging.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url: (rootUrl + '/v2beta1/{+parent}/logs')
                     .replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET'
          },
          options),
      params,
      requiredParams: ['parent'],
      pathParams: ['parent'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$ListLogsResponse>(parameters, callback);
    } else {
      return createAPIRequest<Schema$ListLogsResponse>(parameters);
    }
  }
}


export class Resource$Entries {
  root: Logging;
  constructor(root: Logging) {
    this.root = root;
    this.getRoot.bind(this);
  }

  getRoot() {
    return this.root;
  }


  /**
   * logging.entries.list
   * @desc Lists log entries. Use this method to retrieve log entries from
   * Stackdriver Logging. For ways to export log entries, see Exporting Logs.
   * @example
   * * // BEFORE RUNNING:
   * // ---------------
   * // 1. If not already done, enable the Stackdriver Logging API
   * //    and check the quota for your project at
   * //    https://console.developers.google.com/apis/api/logging
   * // 2. This sample uses Application Default Credentials for authentication.
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
   * var logging = google.logging('v2beta1');
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
   *   var handlePage = function(err, response) {
   *     if (err) {
   *       console.error(err);
   *       return;
   *     }
   *
   *     var entriesPage = response['entries'];
   *     if (!entriesPage) {
   *       return;
   *     }
   *     for (var i = 0; i < entriesPage.length; i++) {
   *       // TODO: Change code below to process each resource in `entriesPage`:
   *       console.log(JSON.stringify(entriesPage[i], null, 2));
   *     }
   *
   *     if (response.nextPageToken) {
   *       request.resource.pageToken = response.nextPageToken;
   *       logging.entries.list(request, handlePage);
   *     }
   *   };
   *
   *   logging.entries.list(request, handlePage);
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
   * @alias logging.entries.list
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {().ListLogEntriesRequest} params.resource Request body data
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  list(params?: any, options?: MethodOptions):
      AxiosPromise<Schema$ListLogEntriesResponse>;
  list(
      params?: any,
      options?: MethodOptions|
      BodyResponseCallback<Schema$ListLogEntriesResponse>,
      callback?: BodyResponseCallback<Schema$ListLogEntriesResponse>): void;
  list(
      params?: any,
      options?: MethodOptions|
      BodyResponseCallback<Schema$ListLogEntriesResponse>,
      callback?: BodyResponseCallback<Schema$ListLogEntriesResponse>):
      void|AxiosPromise<Schema$ListLogEntriesResponse> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://logging.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url: (rootUrl + '/v2beta1/entries:list')
                     .replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST'
          },
          options),
      params,
      requiredParams: [],
      pathParams: [],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$ListLogEntriesResponse>(parameters, callback);
    } else {
      return createAPIRequest<Schema$ListLogEntriesResponse>(parameters);
    }
  }


  /**
   * logging.entries.write
   * @desc Log entry resourcesWrites log entries to Stackdriver Logging. This
   * API method is the only way to send log entries to Stackdriver Logging. This
   * method is used, directly or indirectly, by the Stackdriver Logging agent
   * (fluentd) and all logging libraries configured to use Stackdriver Logging.
   * @example
   * * // BEFORE RUNNING:
   * // ---------------
   * // 1. If not already done, enable the Stackdriver Logging API
   * //    and check the quota for your project at
   * //    https://console.developers.google.com/apis/api/logging
   * // 2. This sample uses Application Default Credentials for authentication.
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
   * var logging = google.logging('v2beta1');
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
   *   logging.entries.write(request, function(err, response) {
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
   * @alias logging.entries.write
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {().WriteLogEntriesRequest} params.resource Request body data
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  write(params?: any, options?: MethodOptions):
      AxiosPromise<Schema$WriteLogEntriesResponse>;
  write(
      params?: any,
      options?: MethodOptions|
      BodyResponseCallback<Schema$WriteLogEntriesResponse>,
      callback?: BodyResponseCallback<Schema$WriteLogEntriesResponse>): void;
  write(
      params?: any,
      options?: MethodOptions|
      BodyResponseCallback<Schema$WriteLogEntriesResponse>,
      callback?: BodyResponseCallback<Schema$WriteLogEntriesResponse>):
      void|AxiosPromise<Schema$WriteLogEntriesResponse> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://logging.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url: (rootUrl + '/v2beta1/entries:write')
                     .replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST'
          },
          options),
      params,
      requiredParams: [],
      pathParams: [],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$WriteLogEntriesResponse>(parameters, callback);
    } else {
      return createAPIRequest<Schema$WriteLogEntriesResponse>(parameters);
    }
  }
}

export class Resource$Monitoredresourcedescriptors {
  root: Logging;
  constructor(root: Logging) {
    this.root = root;
    this.getRoot.bind(this);
  }

  getRoot() {
    return this.root;
  }


  /**
   * logging.monitoredResourceDescriptors.list
   * @desc Lists the descriptors for monitored resource types used by
   * Stackdriver Logging.
   * @example
   * * // BEFORE RUNNING:
   * // ---------------
   * // 1. If not already done, enable the Stackdriver Logging API
   * //    and check the quota for your project at
   * //    https://console.developers.google.com/apis/api/logging
   * // 2. This sample uses Application Default Credentials for authentication.
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
   * var logging = google.logging('v2beta1');
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
   *     var resourceDescriptorsPage = response['resourceDescriptors'];
   *     if (!resourceDescriptorsPage) {
   *       return;
   *     }
   *     for (var i = 0; i < resourceDescriptorsPage.length; i++) {
   *       // TODO: Change code below to process each resource in
   * `resourceDescriptorsPage`:
   *       console.log(JSON.stringify(resourceDescriptorsPage[i], null, 2));
   *     }
   *
   *     if (response.nextPageToken) {
   *       request.pageToken = response.nextPageToken;
   *       logging.monitoredResourceDescriptors.list(request, handlePage);
   *     }
   *   };
   *
   *   logging.monitoredResourceDescriptors.list(request, handlePage);
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
  list(params?: any, options?: MethodOptions):
      AxiosPromise<Schema$ListMonitoredResourceDescriptorsResponse>;
  list(
      params?: any,
      options?: MethodOptions|
      BodyResponseCallback<Schema$ListMonitoredResourceDescriptorsResponse>,
      callback?: BodyResponseCallback<
          Schema$ListMonitoredResourceDescriptorsResponse>): void;
  list(
      params?: any,
      options?: MethodOptions|
      BodyResponseCallback<Schema$ListMonitoredResourceDescriptorsResponse>,
      callback?: BodyResponseCallback<
          Schema$ListMonitoredResourceDescriptorsResponse>):
      void|AxiosPromise<Schema$ListMonitoredResourceDescriptorsResponse> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://logging.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url: (rootUrl + '/v2beta1/monitoredResourceDescriptors')
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
      createAPIRequest<Schema$ListMonitoredResourceDescriptorsResponse>(
          parameters, callback);
    } else {
      return createAPIRequest<Schema$ListMonitoredResourceDescriptorsResponse>(
          parameters);
    }
  }
}

export class Resource$Organizations {
  root: Logging;
  logs: Resource$Organizations$Logs;
  constructor(root: Logging) {
    this.root = root;
    this.getRoot.bind(this);
    this.logs = new Resource$Organizations$Logs(root);
  }

  getRoot() {
    return this.root;
  }
}
export class Resource$Organizations$Logs {
  root: Logging;
  constructor(root: Logging) {
    this.root = root;
    this.getRoot.bind(this);
  }

  getRoot() {
    return this.root;
  }


  /**
   * logging.organizations.logs.delete
   * @desc Deletes all the log entries in a log. The log reappears if it
   * receives new entries. Log entries written shortly before the delete
   * operation might not be deleted.
   * @example
   * * // BEFORE RUNNING:
   * // ---------------
   * // 1. If not already done, enable the Stackdriver Logging API
   * //    and check the quota for your project at
   * //    https://console.developers.google.com/apis/api/logging
   * // 2. This sample uses Application Default Credentials for authentication.
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
   * var logging = google.logging('v2beta1');
   *
   * authorize(function(authClient) {
   *   var request = {
   *     // Required. The resource name of the log to delete:
   *     // "projects/[PROJECT_ID]/logs/[LOG_ID]"
   *     // "organizations/[ORGANIZATION_ID]/logs/[LOG_ID]"
   *     // "billingAccounts/[BILLING_ACCOUNT_ID]/logs/[LOG_ID]"
   *     // "folders/[FOLDER_ID]/logs/[LOG_ID]"
   *     // [LOG_ID] must be URL-encoded. For example,
   * "projects/my-project-id/logs/syslog",
   *     //
   * "organizations/1234567890/logs/cloudresourcemanager.googleapis.com%2Factivity".
   * For more
   *     // information about log names, see LogEntry.
   *     logName: 'organizations/my-organization/logs/my-log',  // TODO: Update
   * placeholder value.
   *
   *     auth: authClient,
   *   };
   *
   *   logging.organizations.logs.delete(request, function(err) {
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
   * @alias logging.organizations.logs.delete
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.logName Required. The resource name of the log to delete: "projects/[PROJECT_ID]/logs/[LOG_ID]" "organizations/[ORGANIZATION_ID]/logs/[LOG_ID]" "billingAccounts/[BILLING_ACCOUNT_ID]/logs/[LOG_ID]" "folders/[FOLDER_ID]/logs/[LOG_ID]" [LOG_ID] must be URL-encoded. For example, "projects/my-project-id/logs/syslog", "organizations/1234567890/logs/cloudresourcemanager.googleapis.com%2Factivity". For more information about log names, see LogEntry.
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  delete(params?: any, options?: MethodOptions): AxiosPromise<Schema$Empty>;
  delete(
      params?: any, options?: MethodOptions|BodyResponseCallback<Schema$Empty>,
      callback?: BodyResponseCallback<Schema$Empty>): void;
  delete(
      params?: any, options?: MethodOptions|BodyResponseCallback<Schema$Empty>,
      callback?: BodyResponseCallback<Schema$Empty>):
      void|AxiosPromise<Schema$Empty> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://logging.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url:
                (rootUrl + '/v2beta1/{+logName}').replace(/([^:]\/)\/+/g, '$1'),
            method: 'DELETE'
          },
          options),
      params,
      requiredParams: ['logName'],
      pathParams: ['logName'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$Empty>(parameters, callback);
    } else {
      return createAPIRequest<Schema$Empty>(parameters);
    }
  }


  /**
   * logging.organizations.logs.list
   * @desc Lists the logs in projects, organizations, folders, or billing
   * accounts. Only logs that have entries are listed.
   * @example
   * * // BEFORE RUNNING:
   * // ---------------
   * // 1. If not already done, enable the Stackdriver Logging API
   * //    and check the quota for your project at
   * //    https://console.developers.google.com/apis/api/logging
   * // 2. This sample uses Application Default Credentials for authentication.
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
   * var logging = google.logging('v2beta1');
   *
   * authorize(function(authClient) {
   *   var request = {
   *     // Required. The resource name that owns the logs:
   *     // "projects/[PROJECT_ID]"
   *     // "organizations/[ORGANIZATION_ID]"
   *     // "billingAccounts/[BILLING_ACCOUNT_ID]"
   *     // "folders/[FOLDER_ID]"
   *     parent: 'organizations/my-organization',  // TODO: Update placeholder
   * value.
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
   *     var logNamesPage = response['logNames'];
   *     if (!logNamesPage) {
   *       return;
   *     }
   *     for (var i = 0; i < logNamesPage.length; i++) {
   *       // TODO: Change code below to process each resource in
   * `logNamesPage`: console.log(JSON.stringify(logNamesPage[i], null, 2));
   *     }
   *
   *     if (response.nextPageToken) {
   *       request.pageToken = response.nextPageToken;
   *       logging.organizations.logs.list(request, handlePage);
   *     }
   *   };
   *
   *   logging.organizations.logs.list(request, handlePage);
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
  list(params?: any, options?: MethodOptions):
      AxiosPromise<Schema$ListLogsResponse>;
  list(
      params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$ListLogsResponse>,
      callback?: BodyResponseCallback<Schema$ListLogsResponse>): void;
  list(
      params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$ListLogsResponse>,
      callback?: BodyResponseCallback<Schema$ListLogsResponse>):
      void|AxiosPromise<Schema$ListLogsResponse> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://logging.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url: (rootUrl + '/v2beta1/{+parent}/logs')
                     .replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET'
          },
          options),
      params,
      requiredParams: ['parent'],
      pathParams: ['parent'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$ListLogsResponse>(parameters, callback);
    } else {
      return createAPIRequest<Schema$ListLogsResponse>(parameters);
    }
  }
}


export class Resource$Projects {
  root: Logging;
  logs: Resource$Projects$Logs;
  metrics: Resource$Projects$Metrics;
  sinks: Resource$Projects$Sinks;
  constructor(root: Logging) {
    this.root = root;
    this.getRoot.bind(this);
    this.logs = new Resource$Projects$Logs(root);
    this.metrics = new Resource$Projects$Metrics(root);
    this.sinks = new Resource$Projects$Sinks(root);
  }

  getRoot() {
    return this.root;
  }
}
export class Resource$Projects$Logs {
  root: Logging;
  constructor(root: Logging) {
    this.root = root;
    this.getRoot.bind(this);
  }

  getRoot() {
    return this.root;
  }


  /**
   * logging.projects.logs.delete
   * @desc Deletes all the log entries in a log. The log reappears if it
   * receives new entries. Log entries written shortly before the delete
   * operation might not be deleted.
   * @example
   * * // BEFORE RUNNING:
   * // ---------------
   * // 1. If not already done, enable the Stackdriver Logging API
   * //    and check the quota for your project at
   * //    https://console.developers.google.com/apis/api/logging
   * // 2. This sample uses Application Default Credentials for authentication.
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
   * var logging = google.logging('v2beta1');
   *
   * authorize(function(authClient) {
   *   var request = {
   *     // Required. The resource name of the log to delete:
   *     // "projects/[PROJECT_ID]/logs/[LOG_ID]"
   *     // "organizations/[ORGANIZATION_ID]/logs/[LOG_ID]"
   *     // "billingAccounts/[BILLING_ACCOUNT_ID]/logs/[LOG_ID]"
   *     // "folders/[FOLDER_ID]/logs/[LOG_ID]"
   *     // [LOG_ID] must be URL-encoded. For example,
   * "projects/my-project-id/logs/syslog",
   *     //
   * "organizations/1234567890/logs/cloudresourcemanager.googleapis.com%2Factivity".
   * For more
   *     // information about log names, see LogEntry.
   *     logName: 'projects/my-project/logs/my-log',  // TODO: Update
   * placeholder value.
   *
   *     auth: authClient,
   *   };
   *
   *   logging.projects.logs.delete(request, function(err) {
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
   * @alias logging.projects.logs.delete
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.logName Required. The resource name of the log to delete: "projects/[PROJECT_ID]/logs/[LOG_ID]" "organizations/[ORGANIZATION_ID]/logs/[LOG_ID]" "billingAccounts/[BILLING_ACCOUNT_ID]/logs/[LOG_ID]" "folders/[FOLDER_ID]/logs/[LOG_ID]" [LOG_ID] must be URL-encoded. For example, "projects/my-project-id/logs/syslog", "organizations/1234567890/logs/cloudresourcemanager.googleapis.com%2Factivity". For more information about log names, see LogEntry.
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  delete(params?: any, options?: MethodOptions): AxiosPromise<Schema$Empty>;
  delete(
      params?: any, options?: MethodOptions|BodyResponseCallback<Schema$Empty>,
      callback?: BodyResponseCallback<Schema$Empty>): void;
  delete(
      params?: any, options?: MethodOptions|BodyResponseCallback<Schema$Empty>,
      callback?: BodyResponseCallback<Schema$Empty>):
      void|AxiosPromise<Schema$Empty> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://logging.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url:
                (rootUrl + '/v2beta1/{+logName}').replace(/([^:]\/)\/+/g, '$1'),
            method: 'DELETE'
          },
          options),
      params,
      requiredParams: ['logName'],
      pathParams: ['logName'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$Empty>(parameters, callback);
    } else {
      return createAPIRequest<Schema$Empty>(parameters);
    }
  }


  /**
   * logging.projects.logs.list
   * @desc Lists the logs in projects, organizations, folders, or billing
   * accounts. Only logs that have entries are listed.
   * @example
   * * // BEFORE RUNNING:
   * // ---------------
   * // 1. If not already done, enable the Stackdriver Logging API
   * //    and check the quota for your project at
   * //    https://console.developers.google.com/apis/api/logging
   * // 2. This sample uses Application Default Credentials for authentication.
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
   * var logging = google.logging('v2beta1');
   *
   * authorize(function(authClient) {
   *   var request = {
   *     // Required. The resource name that owns the logs:
   *     // "projects/[PROJECT_ID]"
   *     // "organizations/[ORGANIZATION_ID]"
   *     // "billingAccounts/[BILLING_ACCOUNT_ID]"
   *     // "folders/[FOLDER_ID]"
   *     parent: 'projects/my-project',  // TODO: Update placeholder value.
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
   *     var logNamesPage = response['logNames'];
   *     if (!logNamesPage) {
   *       return;
   *     }
   *     for (var i = 0; i < logNamesPage.length; i++) {
   *       // TODO: Change code below to process each resource in
   * `logNamesPage`: console.log(JSON.stringify(logNamesPage[i], null, 2));
   *     }
   *
   *     if (response.nextPageToken) {
   *       request.pageToken = response.nextPageToken;
   *       logging.projects.logs.list(request, handlePage);
   *     }
   *   };
   *
   *   logging.projects.logs.list(request, handlePage);
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
  list(params?: any, options?: MethodOptions):
      AxiosPromise<Schema$ListLogsResponse>;
  list(
      params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$ListLogsResponse>,
      callback?: BodyResponseCallback<Schema$ListLogsResponse>): void;
  list(
      params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$ListLogsResponse>,
      callback?: BodyResponseCallback<Schema$ListLogsResponse>):
      void|AxiosPromise<Schema$ListLogsResponse> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://logging.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url: (rootUrl + '/v2beta1/{+parent}/logs')
                     .replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET'
          },
          options),
      params,
      requiredParams: ['parent'],
      pathParams: ['parent'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$ListLogsResponse>(parameters, callback);
    } else {
      return createAPIRequest<Schema$ListLogsResponse>(parameters);
    }
  }
}

export class Resource$Projects$Metrics {
  root: Logging;
  constructor(root: Logging) {
    this.root = root;
    this.getRoot.bind(this);
  }

  getRoot() {
    return this.root;
  }


  /**
   * logging.projects.metrics.create
   * @desc Creates a logs-based metric.
   * @example
   * * // BEFORE RUNNING:
   * // ---------------
   * // 1. If not already done, enable the Stackdriver Logging API
   * //    and check the quota for your project at
   * //    https://console.developers.google.com/apis/api/logging
   * // 2. This sample uses Application Default Credentials for authentication.
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
   * var logging = google.logging('v2beta1');
   *
   * authorize(function(authClient) {
   *   var request = {
   *     // The resource name of the project in which to create the metric:
   *     // "projects/[PROJECT_ID]"
   *     // The new metric must be provided in the request.
   *     parent: 'projects/my-project',  // TODO: Update placeholder value.
   *
   *     resource: {
   *       // TODO: Add desired properties to the request body.
   *     },
   *
   *     auth: authClient,
   *   };
   *
   *   logging.projects.metrics.create(request, function(err, response) {
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
  create(params?: any, options?: MethodOptions): AxiosPromise<Schema$LogMetric>;
  create(
      params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$LogMetric>,
      callback?: BodyResponseCallback<Schema$LogMetric>): void;
  create(
      params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$LogMetric>,
      callback?: BodyResponseCallback<Schema$LogMetric>):
      void|AxiosPromise<Schema$LogMetric> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://logging.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url: (rootUrl + '/v2beta1/{+parent}/metrics')
                     .replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST'
          },
          options),
      params,
      requiredParams: ['parent'],
      pathParams: ['parent'],
      context: this.getRoot()
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
   * @example
   * * // BEFORE RUNNING:
   * // ---------------
   * // 1. If not already done, enable the Stackdriver Logging API
   * //    and check the quota for your project at
   * //    https://console.developers.google.com/apis/api/logging
   * // 2. This sample uses Application Default Credentials for authentication.
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
   * var logging = google.logging('v2beta1');
   *
   * authorize(function(authClient) {
   *   var request = {
   *     // The resource name of the metric to delete:
   *     // "projects/[PROJECT_ID]/metrics/[METRIC_ID]"
   *     metricName: 'projects/my-project/metrics/my-metric',  // TODO: Update
   * placeholder value.
   *
   *     auth: authClient,
   *   };
   *
   *   logging.projects.metrics.delete(request, function(err) {
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
   * @alias logging.projects.metrics.delete
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.metricName The resource name of the metric to delete: "projects/[PROJECT_ID]/metrics/[METRIC_ID]"
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  delete(params?: any, options?: MethodOptions): AxiosPromise<Schema$Empty>;
  delete(
      params?: any, options?: MethodOptions|BodyResponseCallback<Schema$Empty>,
      callback?: BodyResponseCallback<Schema$Empty>): void;
  delete(
      params?: any, options?: MethodOptions|BodyResponseCallback<Schema$Empty>,
      callback?: BodyResponseCallback<Schema$Empty>):
      void|AxiosPromise<Schema$Empty> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://logging.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url: (rootUrl + '/v2beta1/{+metricName}')
                     .replace(/([^:]\/)\/+/g, '$1'),
            method: 'DELETE'
          },
          options),
      params,
      requiredParams: ['metricName'],
      pathParams: ['metricName'],
      context: this.getRoot()
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
   * @example
   * * // BEFORE RUNNING:
   * // ---------------
   * // 1. If not already done, enable the Stackdriver Logging API
   * //    and check the quota for your project at
   * //    https://console.developers.google.com/apis/api/logging
   * // 2. This sample uses Application Default Credentials for authentication.
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
   * var logging = google.logging('v2beta1');
   *
   * authorize(function(authClient) {
   *   var request = {
   *     // The resource name of the desired metric:
   *     // "projects/[PROJECT_ID]/metrics/[METRIC_ID]"
   *     metricName: 'projects/my-project/metrics/my-metric',  // TODO: Update
   * placeholder value.
   *
   *     auth: authClient,
   *   };
   *
   *   logging.projects.metrics.get(request, function(err, response) {
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
   * @alias logging.projects.metrics.get
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.metricName The resource name of the desired metric: "projects/[PROJECT_ID]/metrics/[METRIC_ID]"
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  get(params?: any, options?: MethodOptions): AxiosPromise<Schema$LogMetric>;
  get(params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$LogMetric>,
      callback?: BodyResponseCallback<Schema$LogMetric>): void;
  get(params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$LogMetric>,
      callback?: BodyResponseCallback<Schema$LogMetric>):
      void|AxiosPromise<Schema$LogMetric> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://logging.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url: (rootUrl + '/v2beta1/{+metricName}')
                     .replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET'
          },
          options),
      params,
      requiredParams: ['metricName'],
      pathParams: ['metricName'],
      context: this.getRoot()
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
   * @example
   * * // BEFORE RUNNING:
   * // ---------------
   * // 1. If not already done, enable the Stackdriver Logging API
   * //    and check the quota for your project at
   * //    https://console.developers.google.com/apis/api/logging
   * // 2. This sample uses Application Default Credentials for authentication.
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
   * var logging = google.logging('v2beta1');
   *
   * authorize(function(authClient) {
   *   var request = {
   *     // Required. The name of the project containing the metrics:
   *     // "projects/[PROJECT_ID]"
   *     parent: 'projects/my-project',  // TODO: Update placeholder value.
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
   *     var metricsPage = response['metrics'];
   *     if (!metricsPage) {
   *       return;
   *     }
   *     for (var i = 0; i < metricsPage.length; i++) {
   *       // TODO: Change code below to process each resource in `metricsPage`:
   *       console.log(JSON.stringify(metricsPage[i], null, 2));
   *     }
   *
   *     if (response.nextPageToken) {
   *       request.pageToken = response.nextPageToken;
   *       logging.projects.metrics.list(request, handlePage);
   *     }
   *   };
   *
   *   logging.projects.metrics.list(request, handlePage);
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
  list(params?: any, options?: MethodOptions):
      AxiosPromise<Schema$ListLogMetricsResponse>;
  list(
      params?: any,
      options?: MethodOptions|
      BodyResponseCallback<Schema$ListLogMetricsResponse>,
      callback?: BodyResponseCallback<Schema$ListLogMetricsResponse>): void;
  list(
      params?: any,
      options?: MethodOptions|
      BodyResponseCallback<Schema$ListLogMetricsResponse>,
      callback?: BodyResponseCallback<Schema$ListLogMetricsResponse>):
      void|AxiosPromise<Schema$ListLogMetricsResponse> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://logging.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url: (rootUrl + '/v2beta1/{+parent}/metrics')
                     .replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET'
          },
          options),
      params,
      requiredParams: ['parent'],
      pathParams: ['parent'],
      context: this.getRoot()
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
   * @example
   * * // BEFORE RUNNING:
   * // ---------------
   * // 1. If not already done, enable the Stackdriver Logging API
   * //    and check the quota for your project at
   * //    https://console.developers.google.com/apis/api/logging
   * // 2. This sample uses Application Default Credentials for authentication.
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
   * var logging = google.logging('v2beta1');
   *
   * authorize(function(authClient) {
   *   var request = {
   *     // The resource name of the metric to update:
   *     // "projects/[PROJECT_ID]/metrics/[METRIC_ID]"
   *     // The updated metric must be provided in the request and it's name
   * field must be the same as
   *     // [METRIC_ID] If the metric does not exist in [PROJECT_ID], then a new
   * metric is created. metricName: 'projects/my-project/metrics/my-metric',  //
   * TODO: Update placeholder value.
   *
   *     resource: {
   *       // TODO: Add desired properties to the request body. All existing
   * properties
   *       // will be replaced.
   *     },
   *
   *     auth: authClient,
   *   };
   *
   *   logging.projects.metrics.update(request, function(err, response) {
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
  update(params?: any, options?: MethodOptions): AxiosPromise<Schema$LogMetric>;
  update(
      params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$LogMetric>,
      callback?: BodyResponseCallback<Schema$LogMetric>): void;
  update(
      params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$LogMetric>,
      callback?: BodyResponseCallback<Schema$LogMetric>):
      void|AxiosPromise<Schema$LogMetric> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://logging.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url: (rootUrl + '/v2beta1/{+metricName}')
                     .replace(/([^:]\/)\/+/g, '$1'),
            method: 'PUT'
          },
          options),
      params,
      requiredParams: ['metricName'],
      pathParams: ['metricName'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$LogMetric>(parameters, callback);
    } else {
      return createAPIRequest<Schema$LogMetric>(parameters);
    }
  }
}

export class Resource$Projects$Sinks {
  root: Logging;
  constructor(root: Logging) {
    this.root = root;
    this.getRoot.bind(this);
  }

  getRoot() {
    return this.root;
  }


  /**
   * logging.projects.sinks.create
   * @desc Creates a sink that exports specified log entries to a destination.
   * The export of newly-ingested log entries begins immediately, unless the
   * sink's writer_identity is not permitted to write to the destination. A sink
   * can export log entries only from the resource owning the sink.
   * @example
   * * // BEFORE RUNNING:
   * // ---------------
   * // 1. If not already done, enable the Stackdriver Logging API
   * //    and check the quota for your project at
   * //    https://console.developers.google.com/apis/api/logging
   * // 2. This sample uses Application Default Credentials for authentication.
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
   * var logging = google.logging('v2beta1');
   *
   * authorize(function(authClient) {
   *   var request = {
   *     // Required. The resource in which to create the sink:
   *     // "projects/[PROJECT_ID]"
   *     // "organizations/[ORGANIZATION_ID]"
   *     // "billingAccounts/[BILLING_ACCOUNT_ID]"
   *     // "folders/[FOLDER_ID]"
   *     // Examples: "projects/my-logging-project", "organizations/123456789".
   *     parent: 'projects/my-project',  // TODO: Update placeholder value.
   *
   *     resource: {
   *       // TODO: Add desired properties to the request body.
   *     },
   *
   *     auth: authClient,
   *   };
   *
   *   logging.projects.sinks.create(request, function(err, response) {
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
   * @alias logging.projects.sinks.create
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.parent Required. The resource in which to create the sink: "projects/[PROJECT_ID]" "organizations/[ORGANIZATION_ID]" "billingAccounts/[BILLING_ACCOUNT_ID]" "folders/[FOLDER_ID]" Examples: "projects/my-logging-project", "organizations/123456789".
   * @param {boolean=} params.uniqueWriterIdentity Optional. Determines the kind of IAM identity returned as writer_identity in the new sink. If this value is omitted or set to false, and if the sink's parent is a project, then the value returned as writer_identity is the same group or service account used by Stackdriver Logging before the addition of writer identities to this API. The sink's destination must be in the same project as the sink itself.If this field is set to true, or if the sink is owned by a non-project resource such as an organization, then the value of writer_identity will be a unique service account used only for exports from the new sink. For more information, see writer_identity in LogSink.
   * @param {().LogSink} params.resource Request body data
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  create(params?: any, options?: MethodOptions): AxiosPromise<Schema$LogSink>;
  create(
      params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$LogSink>,
      callback?: BodyResponseCallback<Schema$LogSink>): void;
  create(
      params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$LogSink>,
      callback?: BodyResponseCallback<Schema$LogSink>):
      void|AxiosPromise<Schema$LogSink> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://logging.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url: (rootUrl + '/v2beta1/{+parent}/sinks')
                     .replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST'
          },
          options),
      params,
      requiredParams: ['parent'],
      pathParams: ['parent'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$LogSink>(parameters, callback);
    } else {
      return createAPIRequest<Schema$LogSink>(parameters);
    }
  }


  /**
   * logging.projects.sinks.delete
   * @desc Deletes a sink. If the sink has a unique writer_identity, then that
   * service account is also deleted.
   * @example
   * * // BEFORE RUNNING:
   * // ---------------
   * // 1. If not already done, enable the Stackdriver Logging API
   * //    and check the quota for your project at
   * //    https://console.developers.google.com/apis/api/logging
   * // 2. This sample uses Application Default Credentials for authentication.
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
   * var logging = google.logging('v2beta1');
   *
   * authorize(function(authClient) {
   *   var request = {
   *     // Required. The full resource name of the sink to delete, including
   * the parent resource and the sink
   *     // identifier:
   *     // "projects/[PROJECT_ID]/sinks/[SINK_ID]"
   *     // "organizations/[ORGANIZATION_ID]/sinks/[SINK_ID]"
   *     // "billingAccounts/[BILLING_ACCOUNT_ID]/sinks/[SINK_ID]"
   *     // "folders/[FOLDER_ID]/sinks/[SINK_ID]"
   *     // Example: "projects/my-project-id/sinks/my-sink-id".
   *     sinkName: 'projects/my-project/sinks/my-sink',  // TODO: Update
   * placeholder value.
   *
   *     auth: authClient,
   *   };
   *
   *   logging.projects.sinks.delete(request, function(err) {
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
   * @alias logging.projects.sinks.delete
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.sinkName Required. The full resource name of the sink to delete, including the parent resource and the sink identifier: "projects/[PROJECT_ID]/sinks/[SINK_ID]" "organizations/[ORGANIZATION_ID]/sinks/[SINK_ID]" "billingAccounts/[BILLING_ACCOUNT_ID]/sinks/[SINK_ID]" "folders/[FOLDER_ID]/sinks/[SINK_ID]" Example: "projects/my-project-id/sinks/my-sink-id".
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  delete(params?: any, options?: MethodOptions): AxiosPromise<Schema$Empty>;
  delete(
      params?: any, options?: MethodOptions|BodyResponseCallback<Schema$Empty>,
      callback?: BodyResponseCallback<Schema$Empty>): void;
  delete(
      params?: any, options?: MethodOptions|BodyResponseCallback<Schema$Empty>,
      callback?: BodyResponseCallback<Schema$Empty>):
      void|AxiosPromise<Schema$Empty> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://logging.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url: (rootUrl + '/v2beta1/{+sinkName}')
                     .replace(/([^:]\/)\/+/g, '$1'),
            method: 'DELETE'
          },
          options),
      params,
      requiredParams: ['sinkName'],
      pathParams: ['sinkName'],
      context: this.getRoot()
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
   * @example
   * * // BEFORE RUNNING:
   * // ---------------
   * // 1. If not already done, enable the Stackdriver Logging API
   * //    and check the quota for your project at
   * //    https://console.developers.google.com/apis/api/logging
   * // 2. This sample uses Application Default Credentials for authentication.
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
   * var logging = google.logging('v2beta1');
   *
   * authorize(function(authClient) {
   *   var request = {
   *     // Required. The resource name of the sink:
   *     // "projects/[PROJECT_ID]/sinks/[SINK_ID]"
   *     // "organizations/[ORGANIZATION_ID]/sinks/[SINK_ID]"
   *     // "billingAccounts/[BILLING_ACCOUNT_ID]/sinks/[SINK_ID]"
   *     // "folders/[FOLDER_ID]/sinks/[SINK_ID]"
   *     // Example: "projects/my-project-id/sinks/my-sink-id".
   *     sinkName: 'projects/my-project/sinks/my-sink',  // TODO: Update
   * placeholder value.
   *
   *     auth: authClient,
   *   };
   *
   *   logging.projects.sinks.get(request, function(err, response) {
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
   * @alias logging.projects.sinks.get
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.sinkName Required. The resource name of the sink: "projects/[PROJECT_ID]/sinks/[SINK_ID]" "organizations/[ORGANIZATION_ID]/sinks/[SINK_ID]" "billingAccounts/[BILLING_ACCOUNT_ID]/sinks/[SINK_ID]" "folders/[FOLDER_ID]/sinks/[SINK_ID]" Example: "projects/my-project-id/sinks/my-sink-id".
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  get(params?: any, options?: MethodOptions): AxiosPromise<Schema$LogSink>;
  get(params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$LogSink>,
      callback?: BodyResponseCallback<Schema$LogSink>): void;
  get(params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$LogSink>,
      callback?: BodyResponseCallback<Schema$LogSink>):
      void|AxiosPromise<Schema$LogSink> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://logging.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url: (rootUrl + '/v2beta1/{+sinkName}')
                     .replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET'
          },
          options),
      params,
      requiredParams: ['sinkName'],
      pathParams: ['sinkName'],
      context: this.getRoot()
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
   * @example
   * * // BEFORE RUNNING:
   * // ---------------
   * // 1. If not already done, enable the Stackdriver Logging API
   * //    and check the quota for your project at
   * //    https://console.developers.google.com/apis/api/logging
   * // 2. This sample uses Application Default Credentials for authentication.
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
   * var logging = google.logging('v2beta1');
   *
   * authorize(function(authClient) {
   *   var request = {
   *     // Required. The parent resource whose sinks are to be listed:
   *     // "projects/[PROJECT_ID]"
   *     // "organizations/[ORGANIZATION_ID]"
   *     // "billingAccounts/[BILLING_ACCOUNT_ID]"
   *     // "folders/[FOLDER_ID]"
   *     parent: 'projects/my-project',  // TODO: Update placeholder value.
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
   *     var sinksPage = response['sinks'];
   *     if (!sinksPage) {
   *       return;
   *     }
   *     for (var i = 0; i < sinksPage.length; i++) {
   *       // TODO: Change code below to process each resource in `sinksPage`:
   *       console.log(JSON.stringify(sinksPage[i], null, 2));
   *     }
   *
   *     if (response.nextPageToken) {
   *       request.pageToken = response.nextPageToken;
   *       logging.projects.sinks.list(request, handlePage);
   *     }
   *   };
   *
   *   logging.projects.sinks.list(request, handlePage);
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
  list(params?: any, options?: MethodOptions):
      AxiosPromise<Schema$ListSinksResponse>;
  list(
      params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$ListSinksResponse>,
      callback?: BodyResponseCallback<Schema$ListSinksResponse>): void;
  list(
      params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$ListSinksResponse>,
      callback?: BodyResponseCallback<Schema$ListSinksResponse>):
      void|AxiosPromise<Schema$ListSinksResponse> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://logging.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url: (rootUrl + '/v2beta1/{+parent}/sinks')
                     .replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET'
          },
          options),
      params,
      requiredParams: ['parent'],
      pathParams: ['parent'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$ListSinksResponse>(parameters, callback);
    } else {
      return createAPIRequest<Schema$ListSinksResponse>(parameters);
    }
  }


  /**
   * logging.projects.sinks.update
   * @desc Updates a sink. This method replaces the following fields in the
   * existing sink with values from the new sink: destination, and filter. The
   * updated sink might also have a new writer_identity; see the
   * unique_writer_identity field.
   * @example
   * * // BEFORE RUNNING:
   * // ---------------
   * // 1. If not already done, enable the Stackdriver Logging API
   * //    and check the quota for your project at
   * //    https://console.developers.google.com/apis/api/logging
   * // 2. This sample uses Application Default Credentials for authentication.
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
   * var logging = google.logging('v2beta1');
   *
   * authorize(function(authClient) {
   *   var request = {
   *     // Required. The full resource name of the sink to update, including
   * the parent resource and the sink
   *     // identifier:
   *     // "projects/[PROJECT_ID]/sinks/[SINK_ID]"
   *     // "organizations/[ORGANIZATION_ID]/sinks/[SINK_ID]"
   *     // "billingAccounts/[BILLING_ACCOUNT_ID]/sinks/[SINK_ID]"
   *     // "folders/[FOLDER_ID]/sinks/[SINK_ID]"
   *     // Example: "projects/my-project-id/sinks/my-sink-id".
   *     sinkName: 'projects/my-project/sinks/my-sink',  // TODO: Update
   * placeholder value.
   *
   *     resource: {
   *       // TODO: Add desired properties to the request body. All existing
   * properties
   *       // will be replaced.
   *     },
   *
   *     auth: authClient,
   *   };
   *
   *   logging.projects.sinks.update(request, function(err, response) {
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
   * @alias logging.projects.sinks.update
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.sinkName Required. The full resource name of the sink to update, including the parent resource and the sink identifier: "projects/[PROJECT_ID]/sinks/[SINK_ID]" "organizations/[ORGANIZATION_ID]/sinks/[SINK_ID]" "billingAccounts/[BILLING_ACCOUNT_ID]/sinks/[SINK_ID]" "folders/[FOLDER_ID]/sinks/[SINK_ID]" Example: "projects/my-project-id/sinks/my-sink-id".
   * @param {boolean=} params.uniqueWriterIdentity Optional. See sinks.create for a description of this field. When updating a sink, the effect of this field on the value of writer_identity in the updated sink depends on both the old and new values of this field: If the old and new values of this field are both false or both true, then there is no change to the sink's writer_identity. If the old value is false and the new value is true, then writer_identity is changed to a unique service account. It is an error if the old value is true and the new value is set to false or defaulted to false.
   * @param {string=} params.updateMask Optional. Field mask that specifies the fields in sink that need an update. A sink field will be overwritten if, and only if, it is in the update mask. name and output only fields cannot be updated.An empty updateMask is temporarily treated as using the following mask for backwards compatibility purposes:  destination,filter,includeChildren At some point in the future, behavior will be removed and specifying an empty updateMask will be an error.For a detailed FieldMask definition, see https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#fieldmaskExample: updateMask=filter.
   * @param {().LogSink} params.resource Request body data
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  update(params?: any, options?: MethodOptions): AxiosPromise<Schema$LogSink>;
  update(
      params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$LogSink>,
      callback?: BodyResponseCallback<Schema$LogSink>): void;
  update(
      params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$LogSink>,
      callback?: BodyResponseCallback<Schema$LogSink>):
      void|AxiosPromise<Schema$LogSink> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://logging.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url: (rootUrl + '/v2beta1/{+sinkName}')
                     .replace(/([^:]\/)\/+/g, '$1'),
            method: 'PUT'
          },
          options),
      params,
      requiredParams: ['sinkName'],
      pathParams: ['sinkName'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$LogSink>(parameters, callback);
    } else {
      return createAPIRequest<Schema$LogSink>(parameters);
    }
  }
}
