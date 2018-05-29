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

export namespace monitoring_v3 {
  export interface Options extends GlobalOptions {
    version: 'v3';
  }

  /**
   * Stackdriver Monitoring API
   *
   * Manages your Stackdriver Monitoring data and configurations. Most projects
   * must be associated with a Stackdriver account, with a few exceptions as
   * noted on the individual method pages.
   *
   * @example
   * const {google} = require('googleapis');
   * const monitoring = google.monitoring('v3');
   *
   * @namespace monitoring
   * @type {Function}
   * @version v3
   * @variation v3
   * @param {object=} options Options for Monitoring
   */
  export class Monitoring {
    _options: GlobalOptions;
    google?: GoogleConfigurable;
    root = this;

    projects: Resource$Projects;
    uptimeCheckIps: Resource$Uptimecheckips;

    constructor(options: GlobalOptions, google?: GoogleConfigurable) {
      this._options = options || {};
      this.google = google;
      this.getRoot.bind(this);

      this.projects = new Resource$Projects(this);
      this.uptimeCheckIps = new Resource$Uptimecheckips(this);
    }

    getRoot() {
      return this.root;
    }
  }

  /**
   * Describes how to combine multiple time series to provide different views of
   * the data. Aggregation consists of an alignment step on individual time
   * series (alignment_period and per_series_aligner) followed by an optional
   * reduction step of the data across the aligned time series
   * (cross_series_reducer and group_by_fields). For more details, see
   * Aggregation.
   */
  export interface Schema$Aggregation {
    /**
     * The alignment period for per-time series alignment. If present,
     * alignmentPeriod must be at least 60 seconds. After per-time series
     * alignment, each time series will contain data points only on the period
     * boundaries. If perSeriesAligner is not specified or equals ALIGN_NONE,
     * then this field is ignored. If perSeriesAligner is specified and does not
     * equal ALIGN_NONE, then this field must be defined; otherwise an error is
     * returned.
     */
    alignmentPeriod?: string;
    /**
     * The approach to be used to combine time series. Not all reducer functions
     * may be applied to all time series, depending on the metric type and the
     * value type of the original time series. Reduction may change the metric
     * type of value type of the time series.Time series data must be aligned in
     * order to perform cross-time series reduction. If crossSeriesReducer is
     * specified, then perSeriesAligner must be specified and not equal
     * ALIGN_NONE and alignmentPeriod must be specified; otherwise, an error is
     * returned.
     */
    crossSeriesReducer?: string;
    /**
     * The set of fields to preserve when crossSeriesReducer is specified. The
     * groupByFields determine how the time series are partitioned into subsets
     * prior to applying the aggregation function. Each subset contains time
     * series that have the same value for each of the grouping fields. Each
     * individual time series is a member of exactly one subset. The
     * crossSeriesReducer is applied to each subset of time series. It is not
     * possible to reduce across different resource types, so this field
     * implicitly contains resource.type. Fields not specified in groupByFields
     * are aggregated away. If groupByFields is not specified and all the time
     * series have the same resource type, then the time series are aggregated
     * into a single output time series. If crossSeriesReducer is not defined,
     * this field is ignored.
     */
    groupByFields?: string[];
    /**
     * The approach to be used to align individual time series. Not all
     * alignment functions may be applied to all time series, depending on the
     * metric type and value type of the original time series. Alignment may
     * change the metric type or the value type of the time series.Time series
     * data must be aligned in order to perform cross-time series reduction. If
     * crossSeriesReducer is specified, then perSeriesAligner must be specified
     * and not equal ALIGN_NONE and alignmentPeriod must be specified;
     * otherwise, an error is returned.
     */
    perSeriesAligner?: string;
  }
  /**
   * A description of the conditions under which some aspect of your system is
   * considered to be &quot;unhealthy&quot; and the ways to notify people or
   * services about this state. For an overview of alert policies, see
   * Introduction to Alerting.
   */
  export interface Schema$AlertPolicy {
    /**
     * How to combine the results of multiple conditions to determine if an
     * incident should be opened.
     */
    combiner?: string;
    /**
     * A list of conditions for the policy. The conditions are combined by AND
     * or OR according to the combiner field. If the combined conditions
     * evaluate to true, then an incident is created. A policy can have from one
     * to six conditions.
     */
    conditions?: Schema$Condition[];
    /**
     * A read-only record of the creation of the alerting policy. If provided in
     * a call to create or update, this field will be ignored.
     */
    creationRecord?: Schema$MutationRecord;
    /**
     * A short name or phrase used to identify the policy in dashboards,
     * notifications, and incidents. To avoid confusion, don&#39;t use the same
     * display name for multiple policies in the same project. The name is
     * limited to 512 Unicode characters.
     */
    displayName?: string;
    /**
     * Documentation that is included with notifications and incidents related
     * to this policy. Best practice is for the documentation to include
     * information to help responders understand, mitigate, escalate, and
     * correct the underlying problems detected by the alerting policy.
     * Notification channels that have limited capacity might not show this
     * documentation.
     */
    documentation?: Schema$Documentation;
    /**
     * Whether or not the policy is enabled. On write, the default
     * interpretation if unset is that the policy is enabled. On read, clients
     * should not make any assumption about the state if it has not been
     * populated. The field should always be populated on List and Get
     * operations, unless a field projection has been specified that strips it
     * out.
     */
    enabled?: boolean;
    /**
     * A read-only record of the most recent change to the alerting policy. If
     * provided in a call to create or update, this field will be ignored.
     */
    mutationRecord?: Schema$MutationRecord;
    /**
     * Required if the policy exists. The resource name for this policy. The
     * syntax is: projects/[PROJECT_ID]/alertPolicies/[ALERT_POLICY_ID]
     * [ALERT_POLICY_ID] is assigned by Stackdriver Monitoring when the policy
     * is created. When calling the alertPolicies.create method, do not include
     * the name field in the alerting policy passed as part of the request.
     */
    name?: string;
    /**
     * Identifies the notification channels to which notifications should be
     * sent when incidents are opened or closed or when new violations occur on
     * an already opened incident. Each element of this array corresponds to the
     * name field in each of the NotificationChannel objects that are returned
     * from the ListNotificationChannels method. The syntax of the entries in
     * this field is: projects/[PROJECT_ID]/notificationChannels/[CHANNEL_ID]
     */
    notificationChannels?: string[];
    /**
     * User-supplied key/value data to be used for organizing and identifying
     * the AlertPolicy objects.The field can contain up to 64 entries. Each key
     * and value is limited to 63 Unicode characters or 128 bytes, whichever is
     * smaller. Labels and values can contain only lowercase letters, numerals,
     * underscores, and dashes. Keys must begin with a letter.
     */
    userLabels?: any;
  }
  /**
   * A type of authentication to perform against the specified resource or URL
   * that uses username and password. Currently, only Basic authentication is
   * supported in Uptime Monitoring.
   */
  export interface Schema$BasicAuthentication {
    /**
     * The password to authenticate.
     */
    password?: string;
    /**
     * The username to authenticate.
     */
    username?: string;
  }
  /**
   * BucketOptions describes the bucket boundaries used to create a histogram
   * for the distribution. The buckets can be in a linear sequence, an
   * exponential sequence, or each bucket can be specified explicitly.
   * BucketOptions does not include the number of values in each bucket.A bucket
   * has an inclusive lower bound and exclusive upper bound for the values that
   * are counted for that bucket. The upper bound of a bucket must be strictly
   * greater than the lower bound. The sequence of N buckets for a distribution
   * consists of an underflow bucket (number 0), zero or more finite buckets
   * (number 1 through N - 2) and an overflow bucket (number N - 1). The buckets
   * are contiguous: the lower bound of bucket i (i &gt; 0) is the same as the
   * upper bound of bucket i - 1. The buckets span the whole range of finite
   * values: lower bound of the underflow bucket is -infinity and the upper
   * bound of the overflow bucket is +infinity. The finite buckets are so-called
   * because both bounds are finite.
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
   * A collection of data points sent from a collectd-based plugin. See the
   * collectd documentation for more information.
   */
  export interface Schema$CollectdPayload {
    /**
     * The end time of the interval.
     */
    endTime?: string;
    /**
     * The measurement metadata. Example: &quot;process_id&quot; -&gt; 12345
     */
    metadata?: any;
    /**
     * The name of the plugin. Example: &quot;disk&quot;.
     */
    plugin?: string;
    /**
     * The instance name of the plugin Example: &quot;hdcl&quot;.
     */
    pluginInstance?: string;
    /**
     * The start time of the interval.
     */
    startTime?: string;
    /**
     * The measurement type. Example: &quot;memory&quot;.
     */
    type?: string;
    /**
     * The measurement type instance. Example: &quot;used&quot;.
     */
    typeInstance?: string;
    /**
     * The measured values during this time interval. Each value must have a
     * different dataSourceName.
     */
    values?: Schema$CollectdValue[];
  }
  /**
   * Describes the error status for payloads that were not written.
   */
  export interface Schema$CollectdPayloadError {
    /**
     * Records the error status for the payload. If this field is present, the
     * partial errors for nested values won&#39;t be populated.
     */
    error?: Schema$Status;
    /**
     * The zero-based index in
     * CreateCollectdTimeSeriesRequest.collectd_payloads.
     */
    index?: number;
    /**
     * Records the error status for values that were not written due to an
     * error.Failed payloads for which nothing is written will not include
     * partial value errors.
     */
    valueErrors?: Schema$CollectdValueError[];
  }
  /**
   * A single data point from a collectd-based plugin.
   */
  export interface Schema$CollectdValue {
    /**
     * The data source for the collectd value. For example there are two data
     * sources for network measurements: &quot;rx&quot; and &quot;tx&quot;.
     */
    dataSourceName?: string;
    /**
     * The type of measurement.
     */
    dataSourceType?: string;
    /**
     * The measurement value.
     */
    value?: Schema$TypedValue;
  }
  /**
   * Describes the error status for values that were not written.
   */
  export interface Schema$CollectdValueError {
    /**
     * Records the error status for the value.
     */
    error?: Schema$Status;
    /**
     * The zero-based index in CollectdPayload.values within the parent
     * CreateCollectdTimeSeriesRequest.collectd_payloads.
     */
    index?: number;
  }
  /**
   * A condition is a true/false test that determines when an alerting policy
   * should open an incident. If a condition evaluates to true, it signifies
   * that something is wrong.
   */
  export interface Schema$Condition {
    /**
     * A condition that checks that a time series continues to receive new data
     * points.
     */
    conditionAbsent?: Schema$MetricAbsence;
    /**
     * A condition that compares a time series against a threshold.
     */
    conditionThreshold?: Schema$MetricThreshold;
    /**
     * A short name or phrase used to identify the condition in dashboards,
     * notifications, and incidents. To avoid confusion, don&#39;t use the same
     * display name for multiple conditions in the same policy.
     */
    displayName?: string;
    /**
     * Required if the condition exists. The unique resource name for this
     * condition. Its syntax is:
     * projects/[PROJECT_ID]/alertPolicies/[POLICY_ID]/conditions/[CONDITION_ID]
     * [CONDITION_ID] is assigned by Stackdriver Monitoring when the condition
     * is created as part of a new or updated alerting policy.When calling the
     * alertPolicies.create method, do not include the name field in the
     * conditions of the requested alerting policy. Stackdriver Monitoring
     * creates the condition identifiers and includes them in the new
     * policy.When calling the alertPolicies.update method to update a policy,
     * including a condition name causes the existing condition to be updated.
     * Conditions without names are added to the updated policy. Existing
     * conditions are deleted if they are not updated.Best practice is to
     * preserve [CONDITION_ID] if you make only small changes, such as those to
     * condition thresholds, durations, or trigger values. Otherwise, treat the
     * change as a new condition and let the existing condition be deleted.
     */
    name?: string;
  }
  /**
   * Used to perform string matching. Currently, this matches on the exact
   * content. In the future, it can be expanded to allow for regular expressions
   * and more complex matching.
   */
  export interface Schema$ContentMatcher {
    /**
     * String content to match (max 1024 bytes)
     */
    content?: string;
  }
  /**
   * The CreateCollectdTimeSeries request.
   */
  export interface Schema$CreateCollectdTimeSeriesRequest {
    /**
     * The collectd payloads representing the time series data. You must not
     * include more than a single point for each time series, so no two payloads
     * can have the same values for all of the fields plugin, plugin_instance,
     * type, and type_instance.
     */
    collectdPayloads?: Schema$CollectdPayload[];
    /**
     * The version of collectd that collected the data. Example:
     * &quot;5.3.0-192.el6&quot;.
     */
    collectdVersion?: string;
    /**
     * The monitored resource associated with the time series.
     */
    resource?: Schema$MonitoredResource;
  }
  /**
   * The CreateCollectdTimeSeries response.
   */
  export interface Schema$CreateCollectdTimeSeriesResponse {
    /**
     * Records the error status for points that were not written due to an
     * error.Failed requests for which nothing is written will return an error
     * response instead.
     */
    payloadErrors?: Schema$CollectdPayloadError[];
  }
  /**
   * The CreateTimeSeries request.
   */
  export interface Schema$CreateTimeSeriesRequest {
    /**
     * The new data to be added to a list of time series. Adds at most one data
     * point to each of several time series. The new data point must be more
     * recent than any other point in its time series. Each TimeSeries value
     * must fully specify a unique time series by supplying all label values for
     * the metric and the monitored resource.
     */
    timeSeries?: Schema$TimeSeries[];
  }
  /**
   * Distribution contains summary statistics for a population of values. It
   * optionally contains a histogram representing the distribution of those
   * values across a set of buckets.The summary statistics are the count, mean,
   * sum of the squared deviation from the mean, the minimum, and the maximum of
   * the set of population of values. The histogram is based on a sequence of
   * buckets and gives a count of values that fall into each bucket. The
   * boundaries of the buckets are given either explicitly or by formulas for
   * buckets of fixed or exponentially increasing widths.Although it is not
   * forbidden, it is generally a bad idea to include non-finite values
   * (infinities or NaNs) in the population of values, as this will render the
   * mean and sum_of_squared_deviation fields meaningless.
   */
  export interface Schema$Distribution {
    /**
     * Required in the Stackdriver Monitoring API v3. The values for each bucket
     * specified in bucket_options. The sum of the values in bucketCounts must
     * equal the value in the count field of the Distribution object. The order
     * of the bucket counts follows the numbering schemes described for the
     * three bucket types. The underflow bucket has number 0; the finite
     * buckets, if any, have numbers 1 through N-2; and the overflow bucket has
     * number N-1. The size of bucket_counts must not be greater than N. If the
     * size is less than N, then the remaining buckets are assigned values of
     * zero.
     */
    bucketCounts?: string[];
    /**
     * Required in the Stackdriver Monitoring API v3. Defines the histogram
     * bucket boundaries.
     */
    bucketOptions?: Schema$BucketOptions;
    /**
     * The number of values in the population. Must be non-negative. This value
     * must equal the sum of the values in bucket_counts if a histogram is
     * provided.
     */
    count?: string;
    /**
     * Must be in increasing order of |value| field. The current requirement
     * enforced by the backend is that at most one Exemplar will fall into any
     * bucket.
     */
    exemplars?: Schema$Exemplar[];
    /**
     * The arithmetic mean of the values in the population. If count is zero
     * then this field must be zero.
     */
    mean?: number;
    /**
     * If specified, contains the range of the population values. The field must
     * not be present if the count is zero. This field is presently ignored by
     * the Stackdriver Monitoring API v3.
     */
    range?: Schema$Range;
    /**
     * The sum of squared deviations from the mean of the values in the
     * population. For values x_i this is: Sum[i=1..n]((x_i - mean)^2) Knuth,
     * &quot;The Art of Computer Programming&quot;, Vol. 2, page 323, 3rd
     * edition describes Welford&#39;s method for accumulating this sum in one
     * pass.If count is zero then this field must be zero.
     */
    sumOfSquaredDeviation?: number;
  }
  /**
   * A content string and a MIME type that describes the content string&#39;s
   * format.
   */
  export interface Schema$Documentation {
    /**
     * The text of the documentation, interpreted according to mime_type. The
     * content may not exceed 8,192 Unicode characters and may not exceed more
     * than 10,240 bytes when encoded in UTF-8 format, whichever is smaller.
     */
    content?: string;
    /**
     * The format of the content field. Presently, only the value
     * &quot;text/markdown&quot; is supported. See Markdown
     * (https://en.wikipedia.org/wiki/Markdown) for more information.
     */
    mimeType?: string;
  }
  /**
   * A generic empty message that you can re-use to avoid defining duplicated
   * empty messages in your APIs. A typical example is to use it as the request
   * or the response type of an API method. For instance: service Foo {   rpc
   * Bar(google.protobuf.Empty) returns (google.protobuf.Empty); } The JSON
   * representation for Empty is empty JSON object {}.
   */
  export interface Schema$Empty {}
  /**
   * Exemplars are example points that may be used to annotate aggregated
   * distribution values. They are metadata that gives information about a
   * particular value added to a Distribution bucket, such as a trace ID that
   * was active when a value was added. They may contain further information,
   * such as a example values and timestamps, origin, etc.
   */
  export interface Schema$Exemplar {
    /**
     * Contextual information about the example value. Examples are:Trace ID:
     * type.googleapis.com/google.devtools.cloudtrace.v1.TraceLiteral string:
     * type.googleapis.com/google.protobuf.StringValueLabels dropped during
     * aggregation:  type.googleapis.com/google.monitoring.v3.DroppedLabelsThere
     * may be only a single attachment of any given message type in a single
     * exemplar, and this is enforced by the system.
     */
    attachments?: any[];
    /**
     * The observation (sampling) time of the above value.
     */
    timestamp?: string;
    /**
     * Value of the exemplar point. This value determines to which bucket the
     * exemplar belongs.
     */
    value?: number;
  }
  /**
   * Specifies a set of buckets with arbitrary widths.There are size(bounds) + 1
   * (= N) buckets. Bucket i has the following boundaries:Upper bound (0 &lt;= i
   * &lt; N-1): boundsi  Lower bound (1 &lt;= i &lt; N); boundsi - 1The bounds
   * field must contain at least one element. If bounds has only one element,
   * then there are no finite buckets, and that single element is the common
   * boundary of the overflow and underflow buckets.
   */
  export interface Schema$Explicit {
    /**
     * The values must be monotonically increasing.
     */
    bounds?: number[];
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
    growthFactor?: number;
    /**
     * Must be greater than 0.
     */
    numFiniteBuckets?: number;
    /**
     * Must be greater than 0.
     */
    scale?: number;
  }
  /**
   * A single field of a message type.
   */
  export interface Schema$Field {
    /**
     * The field cardinality.
     */
    cardinality?: string;
    /**
     * The string value of the default value of this field. Proto2 syntax only.
     */
    defaultValue?: string;
    /**
     * The field JSON name.
     */
    jsonName?: string;
    /**
     * The field type.
     */
    kind?: string;
    /**
     * The field name.
     */
    name?: string;
    /**
     * The field number.
     */
    number?: number;
    /**
     * The index of the field type in Type.oneofs, for message or enumeration
     * types. The first type has index 1; zero means the type is not in the
     * list.
     */
    oneofIndex?: number;
    /**
     * The protocol buffer options.
     */
    options?: Schema$Option[];
    /**
     * Whether to use alternative packed wire representation.
     */
    packed?: boolean;
    /**
     * The field type URL, without the scheme, for message or enumeration types.
     * Example: &quot;type.googleapis.com/google.protobuf.Timestamp&quot;.
     */
    typeUrl?: string;
  }
  /**
   * The GetNotificationChannelVerificationCode request.
   */
  export interface Schema$GetNotificationChannelVerificationCodeRequest {
    /**
     * The desired expiration time. If specified, the API will guarantee that
     * the returned code will not be valid after the specified timestamp;
     * however, the API cannot guarantee that the returned code will be valid
     * for at least as long as the requested time (the API puts an upper bound
     * on the amount of time for which a code may be valid). If omitted, a
     * default expiration will be used, which may be less than the max
     * permissible expiration (so specifying an expiration may extend the
     * code&#39;s lifetime over omitting an expiration, even though the API does
     * impose an upper limit on the maximum expiration that is permitted).
     */
    expireTime?: string;
  }
  /**
   * The GetNotificationChannelVerificationCode request.
   */
  export interface Schema$GetNotificationChannelVerificationCodeResponse {
    /**
     * The verification code, which may be used to verify other channels that
     * have an equivalent identity (i.e. other channels of the same type with
     * the same fingerprint such as other email channels with the same email
     * address or other sms channels with the same number).
     */
    code?: string;
    /**
     * The expiration time associated with the code that was returned. If an
     * expiration was provided in the request, this is the minimum of the
     * requested expiration in the request and the max permitted expiration.
     */
    expireTime?: string;
  }
  /**
   * The description of a dynamic collection of monitored resources. Each group
   * has a filter that is matched against monitored resources and their
   * associated metadata. If a group&#39;s filter matches an available monitored
   * resource, then that resource is a member of that group. Groups can contain
   * any number of monitored resources, and each monitored resource can be a
   * member of any number of groups.Groups can be nested in parent-child
   * hierarchies. The parentName field identifies an optional parent for each
   * group. If a group has a parent, then the only monitored resources available
   * to be matched by the group&#39;s filter are the resources contained in the
   * parent group. In other words, a group contains the monitored resources that
   * match its filter and the filters of all the group&#39;s ancestors. A group
   * without a parent can contain any monitored resource.For example, consider
   * an infrastructure running a set of instances with two user-defined tags:
   * &quot;environment&quot; and &quot;role&quot;. A parent group has a filter,
   * environment=&quot;production&quot;. A child of that parent group has a
   * filter, role=&quot;transcoder&quot;. The parent group contains all
   * instances in the production environment, regardless of their roles. The
   * child group contains instances that have the transcoder role and are in the
   * production environment.The monitored resources contained in a group can
   * change at any moment, depending on what resources exist and what filters
   * are associated with the group and its ancestors.
   */
  export interface Schema$Group {
    /**
     * A user-assigned name for this group, used only for display purposes.
     */
    displayName?: string;
    /**
     * The filter used to determine which monitored resources belong to this
     * group.
     */
    filter?: string;
    /**
     * If true, the members of this group are considered to be a cluster. The
     * system can perform additional analysis on groups that are clusters.
     */
    isCluster?: boolean;
    /**
     * Output only. The name of this group. The format is
     * &quot;projects/{project_id_or_number}/groups/{group_id}&quot;. When
     * creating a group, this field is ignored and a new name is created
     * consisting of the project specified in the call to CreateGroup and a
     * unique {group_id} that is generated automatically.
     */
    name?: string;
    /**
     * The name of the group&#39;s parent, if it has one. The format is
     * &quot;projects/{project_id_or_number}/groups/{group_id}&quot;. For groups
     * with no parent, parentName is the empty string, &quot;&quot;.
     */
    parentName?: string;
  }
  /**
   * Information involved in an HTTP/HTTPS uptime check request.
   */
  export interface Schema$HttpCheck {
    /**
     * The authentication information. Optional when creating an HTTP check;
     * defaults to empty.
     */
    authInfo?: Schema$BasicAuthentication;
    /**
     * The list of headers to send as part of the uptime check request. If two
     * headers have the same key and different values, they should be entered as
     * a single header, with the value being a comma-separated list of all the
     * desired values as described at
     * https://www.w3.org/Protocols/rfc2616/rfc2616.txt (page 31). Entering two
     * separate headers with the same key in a Create call will cause the first
     * to be overwritten by the second. The maximum number of headers allowed is
     * 100.
     */
    headers?: any;
    /**
     * Boolean specifiying whether to encrypt the header information. Encryption
     * should be specified for any headers related to authentication that you do
     * not wish to be seen when retrieving the configuration. The server will be
     * responsible for encrypting the headers. On Get/List calls, if
     * mask_headers is set to True then the headers will be obscured with
     * ******.
     */
    maskHeaders?: boolean;
    /**
     * The path to the page to run the check against. Will be combined with the
     * host (specified within the MonitoredResource) and port to construct the
     * full URL. Optional (defaults to &quot;/&quot;).
     */
    path?: string;
    /**
     * The port to the page to run the check against. Will be combined with host
     * (specified within the MonitoredResource) and path to construct the full
     * URL. Optional (defaults to 80 without SSL, or 443 with SSL).
     */
    port?: number;
    /**
     * If true, use HTTPS instead of HTTP to run the check.
     */
    useSsl?: boolean;
  }
  /**
   * Nimbus InternalCheckers.
   */
  export interface Schema$InternalChecker {
    /**
     * The checker ID.
     */
    checkerId?: string;
    /**
     * The checker&#39;s human-readable name.
     */
    displayName?: string;
    /**
     * The GCP zone the uptime check should egress from. Only respected for
     * internal uptime checks, where internal_network is specified.
     */
    gcpZone?: string;
    /**
     * The internal network to perform this uptime check on.
     */
    network?: string;
    /**
     * The GCP project ID. Not necessarily the same as the project_id for the
     * config.
     */
    projectId?: string;
  }
  /**
   * A description of a label.
   */
  export interface Schema$LabelDescriptor {
    /**
     * A human-readable description for the label.
     */
    description?: string;
    /**
     * The label key.
     */
    key?: string;
    /**
     * The type of data that can be assigned to the label.
     */
    valueType?: string;
  }
  /**
   * Specifies a linear sequence of buckets that all have the same width (except
   * overflow and underflow). Each bucket represents a constant absolute
   * uncertainty on the specific value in the bucket.There are
   * num_finite_buckets + 2 (= N) buckets. Bucket i has the following
   * boundaries:Upper bound (0 &lt;= i &lt; N-1): offset + (width * i).  Lower
   * bound (1 &lt;= i &lt; N): offset + (width * (i - 1)).
   */
  export interface Schema$Linear {
    /**
     * Must be greater than 0.
     */
    numFiniteBuckets?: number;
    /**
     * Lower bound of the first bucket.
     */
    offset?: number;
    /**
     * Must be greater than 0.
     */
    width?: number;
  }
  /**
   * The protocol for the ListAlertPolicies response.
   */
  export interface Schema$ListAlertPoliciesResponse {
    /**
     * The returned alert policies.
     */
    alertPolicies?: Schema$AlertPolicy[];
    /**
     * If there might be more results than were returned, then this field is set
     * to a non-empty value. To see the additional results, use that value as
     * pageToken in the next call to this method.
     */
    nextPageToken?: string;
  }
  /**
   * The ListGroupMembers response.
   */
  export interface Schema$ListGroupMembersResponse {
    /**
     * A set of monitored resources in the group.
     */
    members?: Schema$MonitoredResource[];
    /**
     * If there are more results than have been returned, then this field is set
     * to a non-empty value. To see the additional results, use that value as
     * pageToken in the next call to this method.
     */
    nextPageToken?: string;
    /**
     * The total number of elements matching this request.
     */
    totalSize?: number;
  }
  /**
   * The ListGroups response.
   */
  export interface Schema$ListGroupsResponse {
    /**
     * The groups that match the specified filters.
     */
    group?: Schema$Group[];
    /**
     * If there are more results than have been returned, then this field is set
     * to a non-empty value. To see the additional results, use that value as
     * pageToken in the next call to this method.
     */
    nextPageToken?: string;
  }
  /**
   * The ListMetricDescriptors response.
   */
  export interface Schema$ListMetricDescriptorsResponse {
    /**
     * The metric descriptors that are available to the project and that match
     * the value of filter, if present.
     */
    metricDescriptors?: Schema$MetricDescriptor[];
    /**
     * If there are more results than have been returned, then this field is set
     * to a non-empty value. To see the additional results, use that value as
     * pageToken in the next call to this method.
     */
    nextPageToken?: string;
  }
  /**
   * The ListMonitoredResourceDescriptors response.
   */
  export interface Schema$ListMonitoredResourceDescriptorsResponse {
    /**
     * If there are more results than have been returned, then this field is set
     * to a non-empty value. To see the additional results, use that value as
     * pageToken in the next call to this method.
     */
    nextPageToken?: string;
    /**
     * The monitored resource descriptors that are available to this project and
     * that match filter, if present.
     */
    resourceDescriptors?: Schema$MonitoredResourceDescriptor[];
  }
  /**
   * The ListNotificationChannelDescriptors response.
   */
  export interface Schema$ListNotificationChannelDescriptorsResponse {
    /**
     * The monitored resource descriptors supported for the specified project,
     * optionally filtered.
     */
    channelDescriptors?: Schema$NotificationChannelDescriptor[];
    /**
     * If not empty, indicates that there may be more results that match the
     * request. Use the value in the page_token field in a subsequent request to
     * fetch the next set of results. If empty, all results have been returned.
     */
    nextPageToken?: string;
  }
  /**
   * The ListNotificationChannels response.
   */
  export interface Schema$ListNotificationChannelsResponse {
    /**
     * If not empty, indicates that there may be more results that match the
     * request. Use the value in the page_token field in a subsequent request to
     * fetch the next set of results. If empty, all results have been returned.
     */
    nextPageToken?: string;
    /**
     * The notification channels defined for the specified project.
     */
    notificationChannels?: Schema$NotificationChannel[];
  }
  /**
   * The ListTimeSeries response.
   */
  export interface Schema$ListTimeSeriesResponse {
    /**
     * If there are more results than have been returned, then this field is set
     * to a non-empty value. To see the additional results, use that value as
     * pageToken in the next call to this method.
     */
    nextPageToken?: string;
    /**
     * One or more time series that match the filter included in the request.
     */
    timeSeries?: Schema$TimeSeries[];
  }
  /**
   * The protocol for the ListUptimeCheckConfigs response.
   */
  export interface Schema$ListUptimeCheckConfigsResponse {
    /**
     * This field represents the pagination token to retrieve the next page of
     * results. If the value is empty, it means no further results for the
     * request. To retrieve the next page of results, the value of the
     * next_page_token is passed to the subsequent List method call (in the
     * request message&#39;s page_token field).
     */
    nextPageToken?: string;
    /**
     * The total number of uptime check configurations for the project,
     * irrespective of any pagination.
     */
    totalSize?: number;
    /**
     * The returned uptime check configurations.
     */
    uptimeCheckConfigs?: Schema$UptimeCheckConfig[];
  }
  /**
   * The protocol for the ListUptimeCheckIps response.
   */
  export interface Schema$ListUptimeCheckIpsResponse {
    /**
     * This field represents the pagination token to retrieve the next page of
     * results. If the value is empty, it means no further results for the
     * request. To retrieve the next page of results, the value of the
     * next_page_token is passed to the subsequent List method call (in the
     * request message&#39;s page_token field). NOTE: this field is not yet
     * implemented
     */
    nextPageToken?: string;
    /**
     * The returned list of IP addresses (including region and location) that
     * the checkers run from.
     */
    uptimeCheckIps?: Schema$UptimeCheckIp[];
  }
  /**
   * A specific metric, identified by specifying values for all of the labels of
   * a MetricDescriptor.
   */
  export interface Schema$Metric {
    /**
     * The set of label values that uniquely identify this metric. All labels
     * listed in the MetricDescriptor must be assigned values.
     */
    labels?: any;
    /**
     * An existing metric type, see google.api.MetricDescriptor. For example,
     * custom.googleapis.com/invoice/paid/amount.
     */
    type?: string;
  }
  /**
   * A condition type that checks that monitored resources are reporting data.
   * The configuration defines a metric and a set of monitored resources. The
   * predicate is considered in violation when a time series for the specified
   * metric of a monitored resource does not include any data in the specified
   * duration.
   */
  export interface Schema$MetricAbsence {
    /**
     * Specifies the alignment of data points in individual time series as well
     * as how to combine the retrieved time series together (such as when
     * aggregating multiple streams on each resource to a single stream for each
     * resource or when aggregating streams across all members of a group of
     * resrouces). Multiple aggregations are applied in the order specified.This
     * field is similar to the one in the MetricService.ListTimeSeries request.
     * It is advisable to use the ListTimeSeries method when debugging this
     * field.
     */
    aggregations?: Schema$Aggregation[];
    /**
     * The amount of time that a time series must fail to report new data to be
     * considered failing. Currently, only values that are a multiple of a
     * minute--e.g. 60, 120, or 300 seconds--are supported. If an invalid value
     * is given, an error will be returned. The Duration.nanos field is ignored.
     */
    duration?: string;
    /**
     * A filter that identifies which time series should be compared with the
     * threshold.The filter is similar to the one that is specified in the
     * MetricService.ListTimeSeries request (that call is useful to verify the
     * time series that will be retrieved / processed) and must specify the
     * metric type and optionally may contain restrictions on resource type,
     * resource labels, and metric labels. This field may not exceed 2048
     * Unicode characters in length.
     */
    filter?: string;
    /**
     * The number/percent of time series for which the comparison must hold in
     * order for the condition to trigger. If unspecified, then the condition
     * will trigger if the comparison is true for any of the time series that
     * have been identified by filter and aggregations.
     */
    trigger?: Schema$Trigger;
  }
  /**
   * Defines a metric type and its schema. Once a metric descriptor is created,
   * deleting or altering it stops data collection and makes the metric
   * type&#39;s existing data unusable.
   */
  export interface Schema$MetricDescriptor {
    /**
     * A detailed description of the metric, which can be used in documentation.
     */
    description?: string;
    /**
     * A concise name for the metric, which can be displayed in user interfaces.
     * Use sentence case without an ending period, for example &quot;Request
     * count&quot;. This field is optional but it is recommended to be set for
     * any metrics associated with user-visible concepts, such as Quota.
     */
    displayName?: string;
    /**
     * The set of labels that can be used to describe a specific instance of
     * this metric type. For example, the
     * appengine.googleapis.com/http/server/response_latencies metric type has a
     * label for the HTTP response code, response_code, so you can look at
     * latencies for successful responses or just for responses that failed.
     */
    labels?: Schema$LabelDescriptor[];
    /**
     * Whether the metric records instantaneous values, changes to a value, etc.
     * Some combinations of metric_kind and value_type might not be supported.
     */
    metricKind?: string;
    /**
     * The resource name of the metric descriptor.
     */
    name?: string;
    /**
     * The metric type, including its DNS name prefix. The type is not
     * URL-encoded. All user-defined custom metric types have the DNS name
     * custom.googleapis.com. Metric types should use a natural hierarchical
     * grouping. For example:
     * &quot;custom.googleapis.com/invoice/paid/amount&quot;
     * &quot;appengine.googleapis.com/http/server/response_latencies&quot;
     */
    type?: string;
    /**
     * Optional. The unit in which the metric value is reported. For example,
     * kBy/s means kilobytes/sec, and 1 is the dimensionless unit. The supported
     * units are a subset of The Unified Code for Units of Measure standard
     * (http://unitsofmeasure.org/ucum.html).&lt;br&gt;&lt;br&gt; This field is
     * part of the metric&#39;s documentation, but it is ignored by Stackdriver.
     */
    unit?: string;
    /**
     * Whether the measurement is an integer, a floating-point number, etc. Some
     * combinations of metric_kind and value_type might not be supported.
     */
    valueType?: string;
  }
  /**
   * A condition type that compares a collection of time series against a
   * threshold.
   */
  export interface Schema$MetricThreshold {
    /**
     * Specifies the alignment of data points in individual time series as well
     * as how to combine the retrieved time series together (such as when
     * aggregating multiple streams on each resource to a single stream for each
     * resource or when aggregating streams across all members of a group of
     * resrouces). Multiple aggregations are applied in the order specified.This
     * field is similar to the one in the MetricService.ListTimeSeries request.
     * It is advisable to use the ListTimeSeries method when debugging this
     * field.
     */
    aggregations?: Schema$Aggregation[];
    /**
     * The comparison to apply between the time series (indicated by filter and
     * aggregation) and the threshold (indicated by threshold_value). The
     * comparison is applied on each time series, with the time series on the
     * left-hand side and the threshold on the right-hand side.Only
     * COMPARISON_LT and COMPARISON_GT are supported currently.
     */
    comparison?: string;
    /**
     * Specifies the alignment of data points in individual time series selected
     * by denominatorFilter as well as how to combine the retrieved time series
     * together (such as when aggregating multiple streams on each resource to a
     * single stream for each resource or when aggregating streams across all
     * members of a group of resources).When computing ratios, the aggregations
     * and denominator_aggregations fields must use the same alignment period
     * and produce time series that have the same periodicity and labels.This
     * field is similar to the one in the MetricService.ListTimeSeries request.
     * It is advisable to use the ListTimeSeries method when debugging this
     * field.
     */
    denominatorAggregations?: Schema$Aggregation[];
    /**
     * A filter that identifies a time series that should be used as the
     * denominator of a ratio that will be compared with the threshold. If a
     * denominator_filter is specified, the time series specified by the filter
     * field will be used as the numerator.The filter is similar to the one that
     * is specified in the MetricService.ListTimeSeries request (that call is
     * useful to verify the time series that will be retrieved / processed) and
     * must specify the metric type and optionally may contain restrictions on
     * resource type, resource labels, and metric labels. This field may not
     * exceed 2048 Unicode characters in length.
     */
    denominatorFilter?: string;
    /**
     * The amount of time that a time series must violate the threshold to be
     * considered failing. Currently, only values that are a multiple of a
     * minute--e.g., 0, 60, 120, or 300 seconds--are supported. If an invalid
     * value is given, an error will be returned. When choosing a duration, it
     * is useful to keep in mind the frequency of the underlying time series
     * data (which may also be affected by any alignments specified in the
     * aggregations field); a good duration is long enough so that a single
     * outlier does not generate spurious alerts, but short enough that
     * unhealthy states are detected and alerted on quickly.
     */
    duration?: string;
    /**
     * A filter that identifies which time series should be compared with the
     * threshold.The filter is similar to the one that is specified in the
     * MetricService.ListTimeSeries request (that call is useful to verify the
     * time series that will be retrieved / processed) and must specify the
     * metric type and optionally may contain restrictions on resource type,
     * resource labels, and metric labels. This field may not exceed 2048
     * Unicode characters in length.
     */
    filter?: string;
    /**
     * A value against which to compare the time series.
     */
    thresholdValue?: number;
    /**
     * The number/percent of time series for which the comparison must hold in
     * order for the condition to trigger. If unspecified, then the condition
     * will trigger if the comparison is true for any of the time series that
     * have been identified by filter and aggregations, or by the ratio, if
     * denominator_filter and denominator_aggregations are specified.
     */
    trigger?: Schema$Trigger;
  }
  /**
   * An object representing a resource that can be used for monitoring, logging,
   * billing, or other purposes. Examples include virtual machine instances,
   * databases, and storage devices such as disks. The type field identifies a
   * MonitoredResourceDescriptor object that describes the resource&#39;s
   * schema. Information in the labels field identifies the actual resource and
   * its attributes according to the schema. For example, a particular Compute
   * Engine VM instance could be represented by the following object, because
   * the MonitoredResourceDescriptor for &quot;gce_instance&quot; has labels
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
    labels?: any;
    /**
     * Required. The monitored resource type. This field must match the type
     * field of a MonitoredResourceDescriptor object. For example, the type of a
     * Compute Engine VM instance is gce_instance.
     */
    type?: string;
  }
  /**
   * An object that describes the schema of a MonitoredResource object using a
   * type name and a set of labels. For example, the monitored resource
   * descriptor for Google Compute Engine VM instances has a type of
   * &quot;gce_instance&quot; and specifies the use of the labels
   * &quot;instance_id&quot; and &quot;zone&quot; to identify particular VM
   * instances.Different APIs can support different monitored resource types.
   * APIs generally provide a list method that returns the monitored resource
   * descriptors used by the API.
   */
  export interface Schema$MonitoredResourceDescriptor {
    /**
     * Optional. A detailed description of the monitored resource type that
     * might be used in documentation.
     */
    description?: string;
    /**
     * Optional. A concise name for the monitored resource type that might be
     * displayed in user interfaces. It should be a Title Cased Noun Phrase,
     * without any article or other determiners. For example, &quot;Google Cloud
     * SQL Database&quot;.
     */
    displayName?: string;
    /**
     * Required. A set of labels used to describe instances of this monitored
     * resource type. For example, an individual Google Cloud SQL database is
     * identified by values for the labels &quot;database_id&quot; and
     * &quot;zone&quot;.
     */
    labels?: Schema$LabelDescriptor[];
    /**
     * Optional. The resource name of the monitored resource descriptor:
     * &quot;projects/{project_id}/monitoredResourceDescriptors/{type}&quot;
     * where {type} is the value of the type field in this object and
     * {project_id} is a project ID that provides API-specific context for
     * accessing the type. APIs that do not use project information can use the
     * resource name format &quot;monitoredResourceDescriptors/{type}&quot;.
     */
    name?: string;
    /**
     * Required. The monitored resource type. For example, the type
     * &quot;cloudsql_database&quot; represents databases in Google Cloud SQL.
     * The maximum length of this value is 256 characters.
     */
    type?: string;
  }
  /**
   * Auxiliary metadata for a MonitoredResource object. MonitoredResource
   * objects contain the minimum set of information to uniquely identify a
   * monitored resource instance. There is some other useful auxiliary metadata.
   * Google Stackdriver Monitoring &amp; Logging uses an ingestion pipeline to
   * extract metadata for cloud resources of all types , and stores the metadata
   * in this message.
   */
  export interface Schema$MonitoredResourceMetadata {
    /**
     * Output only. Values for predefined system metadata labels. System labels
     * are a kind of metadata extracted by Google Stackdriver. Stackdriver
     * determines what system labels are useful and how to obtain their values.
     * Some examples: &quot;machine_image&quot;, &quot;vpc&quot;,
     * &quot;subnet_id&quot;, &quot;security_group&quot;, &quot;name&quot;, etc.
     * System label values can be only strings, Boolean values, or a list of
     * strings. For example: { &quot;name&quot;: &quot;my-test-instance&quot;,
     * &quot;security_group&quot;: [&quot;a&quot;, &quot;b&quot;,
     * &quot;c&quot;],   &quot;spot_instance&quot;: false }
     */
    systemLabels?: any;
    /**
     * Output only. A map of user-defined metadata labels.
     */
    userLabels?: any;
  }
  /**
   * Describes a change made to a configuration.
   */
  export interface Schema$MutationRecord {
    /**
     * The email address of the user making the change.
     */
    mutatedBy?: string;
    /**
     * When the change occurred.
     */
    mutateTime?: string;
  }
  /**
   * A NotificationChannel is a medium through which an alert is delivered when
   * a policy violation is detected. Examples of channels include email, SMS,
   * and third-party messaging applications. Fields containing sensitive
   * information like authentication tokens or contact info are only partially
   * populated on retrieval.
   */
  export interface Schema$NotificationChannel {
    /**
     * An optional human-readable description of this notification channel. This
     * description may provide additional details, beyond the display name, for
     * the channel. This may not exceeed 1024 Unicode characters.
     */
    description?: string;
    /**
     * An optional human-readable name for this notification channel. It is
     * recommended that you specify a non-empty and unique name in order to make
     * it easier to identify the channels in your project, though this is not
     * enforced. The display name is limited to 512 Unicode characters.
     */
    displayName?: string;
    /**
     * Whether notifications are forwarded to the described channel. This makes
     * it possible to disable delivery of notifications to a particular channel
     * without removing the channel from all alerting policies that reference
     * the channel. This is a more convenient approach when the change is
     * temporary and you want to receive notifications from the same set of
     * alerting policies on the channel at some point in the future.
     */
    enabled?: boolean;
    /**
     * Configuration fields that define the channel and its behavior. The
     * permissible and required labels are specified in the
     * NotificationChannelDescriptor.labels of the NotificationChannelDescriptor
     * corresponding to the type field.
     */
    labels?: any;
    /**
     * The full REST resource name for this channel. The syntax is:
     * projects/[PROJECT_ID]/notificationChannels/[CHANNEL_ID] The [CHANNEL_ID]
     * is automatically assigned by the server on creation.
     */
    name?: string;
    /**
     * The type of the notification channel. This field matches the value of the
     * NotificationChannelDescriptor.type field.
     */
    type?: string;
    /**
     * User-supplied key/value data that does not need to conform to the
     * corresponding NotificationChannelDescriptor&#39;s schema, unlike the
     * labels field. This field is intended to be used for organizing and
     * identifying the NotificationChannel objects.The field can contain up to
     * 64 entries. Each key and value is limited to 63 Unicode characters or 128
     * bytes, whichever is smaller. Labels and values can contain only lowercase
     * letters, numerals, underscores, and dashes. Keys must begin with a
     * letter.
     */
    userLabels?: any;
    /**
     * Indicates whether this channel has been verified or not. On a
     * ListNotificationChannels or GetNotificationChannel operation, this field
     * is expected to be populated.If the value is UNVERIFIED, then it indicates
     * that the channel is non-functioning (it both requires verification and
     * lacks verification); otherwise, it is assumed that the channel works.If
     * the channel is neither VERIFIED nor UNVERIFIED, it implies that the
     * channel is of a type that does not require verification or that this
     * specific channel has been exempted from verification because it was
     * created prior to verification being required for channels of this
     * type.This field cannot be modified using a standard
     * UpdateNotificationChannel operation. To change the value of this field,
     * you must call VerifyNotificationChannel.
     */
    verificationStatus?: string;
  }
  /**
   * A description of a notification channel. The descriptor includes the
   * properties of the channel and the set of labels or fields that must be
   * specified to configure channels of a given type.
   */
  export interface Schema$NotificationChannelDescriptor {
    /**
     * A human-readable description of the notification channel type. The
     * description may include a description of the properties of the channel
     * and pointers to external documentation.
     */
    description?: string;
    /**
     * A human-readable name for the notification channel type. This form of the
     * name is suitable for a user interface.
     */
    displayName?: string;
    /**
     * The set of labels that must be defined to identify a particular channel
     * of the corresponding type. Each label includes a description for how that
     * field should be populated.
     */
    labels?: Schema$LabelDescriptor[];
    /**
     * The full REST resource name for this descriptor. The syntax is:
     * projects/[PROJECT_ID]/notificationChannelDescriptors/[TYPE] In the above,
     * [TYPE] is the value of the type field.
     */
    name?: string;
    /**
     * The tiers that support this notification channel; the project service
     * tier must be one of the supported_tiers.
     */
    supportedTiers?: string[];
    /**
     * The type of notification channel, such as &quot;email&quot;,
     * &quot;sms&quot;, etc. Notification channel types are globally unique.
     */
    type?: string;
  }
  /**
   * A protocol buffer option, which can be attached to a message, field,
   * enumeration, etc.
   */
  export interface Schema$Option {
    /**
     * The option&#39;s name. For protobuf built-in options (options defined in
     * descriptor.proto), this is the short name. For example,
     * &quot;map_entry&quot;. For custom options, it should be the
     * fully-qualified name. For example, &quot;google.api.http&quot;.
     */
    name?: string;
    /**
     * The option&#39;s value packed in an Any message. If the value is a
     * primitive, the corresponding wrapper type defined in
     * google/protobuf/wrappers.proto should be used. If the value is an enum,
     * it should be stored as an int32 value using the
     * google.protobuf.Int32Value type.
     */
    value?: any;
  }
  /**
   * A single data point in a time series.
   */
  export interface Schema$Point {
    /**
     * The time interval to which the data point applies. For GAUGE metrics,
     * only the end time of the interval is used. For DELTA metrics, the start
     * and end time should specify a non-zero interval, with subsequent points
     * specifying contiguous and non-overlapping intervals. For CUMULATIVE
     * metrics, the start and end time should specify a non-zero interval, with
     * subsequent points specifying the same start time and increasing end
     * times, until an event resets the cumulative value to zero and sets a new
     * start time for the following points.
     */
    interval?: Schema$TimeInterval;
    /**
     * The value of the data point.
     */
    value?: Schema$TypedValue;
  }
  /**
   * The range of the population values.
   */
  export interface Schema$Range {
    /**
     * The maximum of the population values.
     */
    max?: number;
    /**
     * The minimum of the population values.
     */
    min?: number;
  }
  /**
   * The resource submessage for group checks. It can be used instead of a
   * monitored resource, when multiple resources are being monitored.
   */
  export interface Schema$ResourceGroup {
    /**
     * The group of resources being monitored. Should be only the group_id, not
     * projects/&lt;project_id&gt;/groups/&lt;group_id&gt;.
     */
    groupId?: string;
    /**
     * The resource type of the group members.
     */
    resourceType?: string;
  }
  /**
   * The SendNotificationChannelVerificationCode request.
   */
  export interface Schema$SendNotificationChannelVerificationCodeRequest {}
  /**
   * SourceContext represents information about the source of a protobuf
   * element, like the file in which it is defined.
   */
  export interface Schema$SourceContext {
    /**
     * The path-qualified name of the .proto file that contained the associated
     * protobuf element. For example:
     * &quot;google/protobuf/source_context.proto&quot;.
     */
    fileName?: string;
  }
  /**
   * The Status type defines a logical error model that is suitable for
   * different programming environments, including REST APIs and RPC APIs. It is
   * used by gRPC (https://github.com/grpc). The error model is designed to be:
   * Simple to use and understand for most users Flexible enough to meet
   * unexpected needsOverviewThe Status message contains three pieces of data:
   * error code, error message, and error details. The error code should be an
   * enum value of google.rpc.Code, but it may accept additional error codes if
   * needed. The error message should be a developer-facing English message that
   * helps developers understand and resolve the error. If a localized
   * user-facing error message is needed, put the localized message in the error
   * details or localize it in the client. The optional error details may
   * contain arbitrary information about the error. There is a predefined set of
   * error detail types in the package google.rpc that can be used for common
   * error conditions.Language mappingThe Status message is the logical
   * representation of the error model, but it is not necessarily the actual
   * wire format. When the Status message is exposed in different client
   * libraries and different wire protocols, it can be mapped differently. For
   * example, it will likely be mapped to some exceptions in Java, but more
   * likely mapped to some error codes in C.Other usesThe error model and the
   * Status message can be used in a variety of environments, either with or
   * without APIs, to provide a consistent developer experience across different
   * environments.Example uses of this error model include: Partial errors. If a
   * service needs to return partial errors to the client, it may embed the
   * Status in the normal response to indicate the partial errors. Workflow
   * errors. A typical workflow has multiple steps. Each step may have a Status
   * message for error reporting. Batch operations. If a client uses batch
   * request and batch response, the Status message should be used directly
   * inside batch response, one for each error sub-response. Asynchronous
   * operations. If an API call embeds asynchronous operation results in its
   * response, the status of those operations should be represented directly
   * using the Status message. Logging. If some API errors are stored in logs,
   * the message Status could be used directly after any stripping needed for
   * security/privacy reasons.
   */
  export interface Schema$Status {
    /**
     * The status code, which should be an enum value of google.rpc.Code.
     */
    code?: number;
    /**
     * A list of messages that carry the error details. There is a common set of
     * message types for APIs to use.
     */
    details?: any[];
    /**
     * A developer-facing error message, which should be in English. Any
     * user-facing error message should be localized and sent in the
     * google.rpc.Status.details field, or localized by the client.
     */
    message?: string;
  }
  /**
   * Information required for a TCP uptime check request.
   */
  export interface Schema$TcpCheck {
    /**
     * The port to the page to run the check against. Will be combined with host
     * (specified within the MonitoredResource) to construct the full URL.
     * Required.
     */
    port?: number;
  }
  /**
   * A time interval extending just after a start time through an end time. If
   * the start time is the same as the end time, then the interval represents a
   * single point in time.
   */
  export interface Schema$TimeInterval {
    /**
     * Required. The end of the time interval.
     */
    endTime?: string;
    /**
     * Optional. The beginning of the time interval. The default value for the
     * start time is the end time. The start time must not be later than the end
     * time.
     */
    startTime?: string;
  }
  /**
   * A collection of data points that describes the time-varying values of a
   * metric. A time series is identified by a combination of a fully-specified
   * monitored resource and a fully-specified metric. This type is used for both
   * listing and creating time series.
   */
  export interface Schema$TimeSeries {
    /**
     * Output only. The associated monitored resource metadata. When reading a a
     * timeseries, this field will include metadata labels that are explicitly
     * named in the reduction. When creating a timeseries, this field is
     * ignored.
     */
    metadata?: Schema$MonitoredResourceMetadata;
    /**
     * The associated metric. A fully-specified metric used to identify the time
     * series.
     */
    metric?: Schema$Metric;
    /**
     * The metric kind of the time series. When listing time series, this metric
     * kind might be different from the metric kind of the associated metric if
     * this time series is an alignment or reduction of other time series.When
     * creating a time series, this field is optional. If present, it must be
     * the same as the metric kind of the associated metric. If the associated
     * metric&#39;s descriptor must be auto-created, then this field specifies
     * the metric kind of the new descriptor and must be either GAUGE (the
     * default) or CUMULATIVE.
     */
    metricKind?: string;
    /**
     * The data points of this time series. When listing time series, points are
     * returned in reverse time order.When creating a time series, this field
     * must contain exactly one point and the point&#39;s type must be the same
     * as the value type of the associated metric. If the associated
     * metric&#39;s descriptor must be auto-created, then the value type of the
     * descriptor is determined by the point&#39;s type, which must be BOOL,
     * INT64, DOUBLE, or DISTRIBUTION.
     */
    points?: Schema$Point[];
    /**
     * The associated monitored resource. Custom metrics can use only certain
     * monitored resource types in their time series data.
     */
    resource?: Schema$MonitoredResource;
    /**
     * The value type of the time series. When listing time series, this value
     * type might be different from the value type of the associated metric if
     * this time series is an alignment or reduction of other time series.When
     * creating a time series, this field is optional. If present, it must be
     * the same as the type of the data in the points field.
     */
    valueType?: string;
  }
  /**
   * Specifies how many time series must fail a predicate to trigger a
   * condition. If not specified, then a {count: 1} trigger is used.
   */
  export interface Schema$Trigger {
    /**
     * The absolute number of time series that must fail the predicate for the
     * condition to be triggered.
     */
    count?: number;
    /**
     * The percentage of time series that must fail the predicate for the
     * condition to be triggered.
     */
    percent?: number;
  }
  /**
   * A protocol buffer message type.
   */
  export interface Schema$Type {
    /**
     * The list of fields.
     */
    fields?: Schema$Field[];
    /**
     * The fully qualified message name.
     */
    name?: string;
    /**
     * The list of types appearing in oneof definitions in this type.
     */
    oneofs?: string[];
    /**
     * The protocol buffer options.
     */
    options?: Schema$Option[];
    /**
     * The source context.
     */
    sourceContext?: Schema$SourceContext;
    /**
     * The source syntax.
     */
    syntax?: string;
  }
  /**
   * A single strongly-typed value.
   */
  export interface Schema$TypedValue {
    /**
     * A Boolean value: true or false.
     */
    boolValue?: boolean;
    /**
     * A distribution value.
     */
    distributionValue?: Schema$Distribution;
    /**
     * A 64-bit double-precision floating-point number. Its magnitude is
     * approximately &amp;plusmn;10&lt;sup&gt;&amp;plusmn;300&lt;/sup&gt; and it
     * has 16 significant digits of precision.
     */
    doubleValue?: number;
    /**
     * A 64-bit integer. Its range is approximately
     * &amp;plusmn;9.2x10&lt;sup&gt;18&lt;/sup&gt;.
     */
    int64Value?: string;
    /**
     * A variable-length string value.
     */
    stringValue?: string;
  }
  /**
   * This message configures which resources and services to monitor for
   * availability.
   */
  export interface Schema$UptimeCheckConfig {
    /**
     * The expected content on the page the check is run against. Currently,
     * only the first entry in the list is supported, and other entries will be
     * ignored. The server will look for an exact match of the string in the
     * page response&#39;s content. This field is optional and should only be
     * specified if a content match is required.
     */
    contentMatchers?: Schema$ContentMatcher[];
    /**
     * A human-friendly name for the uptime check configuration. The display
     * name should be unique within a Stackdriver Account in order to make it
     * easier to identify; however, uniqueness is not enforced. Required.
     */
    displayName?: string;
    /**
     * Contains information needed to make an HTTP or HTTPS check.
     */
    httpCheck?: Schema$HttpCheck;
    /**
     * The internal checkers that this check will egress from. If is_internal is
     * true and this list is empty, the check will egress from all
     * InternalCheckers configured for the project that owns this CheckConfig.
     */
    internalCheckers?: Schema$InternalChecker[];
    /**
     * Denotes whether this is a check that egresses from InternalCheckers.
     */
    isInternal?: boolean;
    /**
     * The monitored resource
     * (https://cloud.google.com/monitoring/api/resources) associated with the
     * configuration. The following monitored resource types are supported for
     * uptime checks:  uptime_url  gce_instance  gae_app  aws_ec2_instance
     * aws_elb_load_balancer
     */
    monitoredResource?: Schema$MonitoredResource;
    /**
     * A unique resource name for this UptimeCheckConfig. The format
     * is:projects/[PROJECT_ID]/uptimeCheckConfigs/[UPTIME_CHECK_ID].This field
     * should be omitted when creating the uptime check configuration; on
     * create, the resource name is assigned by the server and included in the
     * response.
     */
    name?: string;
    /**
     * How often, in seconds, the uptime check is performed. Currently, the only
     * supported values are 60s (1 minute), 300s (5 minutes), 600s (10 minutes),
     * and 900s (15 minutes). Optional, defaults to 300s.
     */
    period?: string;
    /**
     * The group resource associated with the configuration.
     */
    resourceGroup?: Schema$ResourceGroup;
    /**
     * The list of regions from which the check will be run. If this field is
     * specified, enough regions to include a minimum of 3 locations must be
     * provided, or an error message is returned. Not specifying this field will
     * result in uptime checks running from all regions.
     */
    selectedRegions?: string[];
    /**
     * Contains information needed to make a TCP check.
     */
    tcpCheck?: Schema$TcpCheck;
    /**
     * The maximum amount of time to wait for the request to complete (must be
     * between 1 and 60 seconds). Required.
     */
    timeout?: string;
  }
  /**
   * Contains the region, location, and list of IP addresses where checkers in
   * the location run from.
   */
  export interface Schema$UptimeCheckIp {
    /**
     * The IP address from which the uptime check originates. This is a full IP
     * address (not an IP address range). Most IP addresses, as of this
     * publication, are in IPv4 format; however, one should not rely on the IP
     * addresses being in IPv4 format indefinitely and should support
     * interpreting this field in either IPv4 or IPv6 format.
     */
    ipAddress?: string;
    /**
     * A more specific location within the region that typically encodes a
     * particular city/town/metro (and its containing state/province or country)
     * within the broader umbrella region category.
     */
    location?: string;
    /**
     * A broad region category in which the IP address is located.
     */
    region?: string;
  }
  /**
   * The VerifyNotificationChannel request.
   */
  export interface Schema$VerifyNotificationChannelRequest {
    /**
     * The verification code that was delivered to the channel as a result of
     * invoking the SendNotificationChannelVerificationCode API method or that
     * was retrieved from a verified channel via
     * GetNotificationChannelVerificationCode. For example, one might have
     * &quot;G-123456&quot; or &quot;TKNZGhhd2EyN3I1MnRnMjRv&quot; (in general,
     * one is only guaranteed that the code is valid UTF-8; one should not make
     * any assumptions regarding the structure or format of the code).
     */
    code?: string;
  }


  export class Resource$Projects {
    root: Monitoring;
    alertPolicies: Resource$Projects$Alertpolicies;
    collectdTimeSeries: Resource$Projects$Collectdtimeseries;
    groups: Resource$Projects$Groups;
    metricDescriptors: Resource$Projects$Metricdescriptors;
    monitoredResourceDescriptors:
        Resource$Projects$Monitoredresourcedescriptors;
    notificationChannelDescriptors:
        Resource$Projects$Notificationchanneldescriptors;
    notificationChannels: Resource$Projects$Notificationchannels;
    timeSeries: Resource$Projects$Timeseries;
    uptimeCheckConfigs: Resource$Projects$Uptimecheckconfigs;
    constructor(root: Monitoring) {
      this.root = root;
      this.getRoot.bind(this);
      this.alertPolicies = new Resource$Projects$Alertpolicies(root);
      this.collectdTimeSeries = new Resource$Projects$Collectdtimeseries(root);
      this.groups = new Resource$Projects$Groups(root);
      this.metricDescriptors = new Resource$Projects$Metricdescriptors(root);
      this.monitoredResourceDescriptors =
          new Resource$Projects$Monitoredresourcedescriptors(root);
      this.notificationChannelDescriptors =
          new Resource$Projects$Notificationchanneldescriptors(root);
      this.notificationChannels =
          new Resource$Projects$Notificationchannels(root);
      this.timeSeries = new Resource$Projects$Timeseries(root);
      this.uptimeCheckConfigs = new Resource$Projects$Uptimecheckconfigs(root);
    }

    getRoot() {
      return this.root;
    }
  }


  export class Resource$Projects$Alertpolicies {
    root: Monitoring;
    constructor(root: Monitoring) {
      this.root = root;
      this.getRoot.bind(this);
    }

    getRoot() {
      return this.root;
    }


    /**
     * monitoring.projects.alertPolicies.create
     * @desc Creates a new alerting policy.
     * @alias monitoring.projects.alertPolicies.create
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.name The project in which to create the alerting policy. The format is projects/[PROJECT_ID].Note that this field names the parent container in which the alerting policy will be written, not the name of the created policy. The alerting policy that is returned will have a name that contains a normalized representation of this name as a prefix but adds a suffix of the form /alertPolicies/[POLICY_ID], identifying the policy in the container.
     * @param {().AlertPolicy} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    create(
        params?: Params$Resource$Projects$Alertpolicies$Create,
        options?: MethodOptions): AxiosPromise<Schema$AlertPolicy>;
    create(
        params: Params$Resource$Projects$Alertpolicies$Create,
        options: MethodOptions|BodyResponseCallback<Schema$AlertPolicy>,
        callback: BodyResponseCallback<Schema$AlertPolicy>): void;
    create(
        params: Params$Resource$Projects$Alertpolicies$Create,
        callback: BodyResponseCallback<Schema$AlertPolicy>): void;
    create(callback: BodyResponseCallback<Schema$AlertPolicy>): void;
    create(
        paramsOrCallback?: Params$Resource$Projects$Alertpolicies$Create|
        BodyResponseCallback<Schema$AlertPolicy>,
        optionsOrCallback?: MethodOptions|
        BodyResponseCallback<Schema$AlertPolicy>,
        callback?: BodyResponseCallback<Schema$AlertPolicy>):
        void|AxiosPromise<Schema$AlertPolicy> {
      let params = (paramsOrCallback || {}) as
          Params$Resource$Projects$Alertpolicies$Create;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Alertpolicies$Create;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://monitoring.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl + '/v3/{+name}/alertPolicies')
                       .replace(/([^:]\/)\/+/g, '$1'),
              method: 'POST'
            },
            options),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<Schema$AlertPolicy>(parameters, callback);
      } else {
        return createAPIRequest<Schema$AlertPolicy>(parameters);
      }
    }


    /**
     * monitoring.projects.alertPolicies.delete
     * @desc Deletes an alerting policy.
     * @alias monitoring.projects.alertPolicies.delete
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.name The alerting policy to delete. The format is: projects/[PROJECT_ID]/alertPolicies/[ALERT_POLICY_ID] For more information, see AlertPolicy.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    delete(
        params?: Params$Resource$Projects$Alertpolicies$Delete,
        options?: MethodOptions): AxiosPromise<Schema$Empty>;
    delete(
        params: Params$Resource$Projects$Alertpolicies$Delete,
        options: MethodOptions|BodyResponseCallback<Schema$Empty>,
        callback: BodyResponseCallback<Schema$Empty>): void;
    delete(
        params: Params$Resource$Projects$Alertpolicies$Delete,
        callback: BodyResponseCallback<Schema$Empty>): void;
    delete(callback: BodyResponseCallback<Schema$Empty>): void;
    delete(
        paramsOrCallback?: Params$Resource$Projects$Alertpolicies$Delete|
        BodyResponseCallback<Schema$Empty>,
        optionsOrCallback?: MethodOptions|BodyResponseCallback<Schema$Empty>,
        callback?: BodyResponseCallback<Schema$Empty>):
        void|AxiosPromise<Schema$Empty> {
      let params = (paramsOrCallback || {}) as
          Params$Resource$Projects$Alertpolicies$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Alertpolicies$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://monitoring.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl + '/v3/{+name}').replace(/([^:]\/)\/+/g, '$1'),
              method: 'DELETE'
            },
            options),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<Schema$Empty>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Empty>(parameters);
      }
    }


    /**
     * monitoring.projects.alertPolicies.get
     * @desc Gets a single alerting policy.
     * @alias monitoring.projects.alertPolicies.get
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.name The alerting policy to retrieve. The format is projects/[PROJECT_ID]/alertPolicies/[ALERT_POLICY_ID]
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    get(params?: Params$Resource$Projects$Alertpolicies$Get,
        options?: MethodOptions): AxiosPromise<Schema$AlertPolicy>;
    get(params: Params$Resource$Projects$Alertpolicies$Get,
        options: MethodOptions|BodyResponseCallback<Schema$AlertPolicy>,
        callback: BodyResponseCallback<Schema$AlertPolicy>): void;
    get(params: Params$Resource$Projects$Alertpolicies$Get,
        callback: BodyResponseCallback<Schema$AlertPolicy>): void;
    get(callback: BodyResponseCallback<Schema$AlertPolicy>): void;
    get(paramsOrCallback?: Params$Resource$Projects$Alertpolicies$Get|
        BodyResponseCallback<Schema$AlertPolicy>,
        optionsOrCallback?: MethodOptions|
        BodyResponseCallback<Schema$AlertPolicy>,
        callback?: BodyResponseCallback<Schema$AlertPolicy>):
        void|AxiosPromise<Schema$AlertPolicy> {
      let params = (paramsOrCallback || {}) as
          Params$Resource$Projects$Alertpolicies$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Alertpolicies$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://monitoring.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl + '/v3/{+name}').replace(/([^:]\/)\/+/g, '$1'),
              method: 'GET'
            },
            options),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<Schema$AlertPolicy>(parameters, callback);
      } else {
        return createAPIRequest<Schema$AlertPolicy>(parameters);
      }
    }


    /**
     * monitoring.projects.alertPolicies.list
     * @desc Lists the existing alerting policies for the project.
     * @alias monitoring.projects.alertPolicies.list
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string=} params.filter If provided, this field specifies the criteria that must be met by alert policies to be included in the response.For more details, see sorting and filtering.
     * @param {string} params.name The project whose alert policies are to be listed. The format is projects/[PROJECT_ID] Note that this field names the parent container in which the alerting policies to be listed are stored. To retrieve a single alerting policy by name, use the GetAlertPolicy operation, instead.
     * @param {string=} params.orderBy A comma-separated list of fields by which to sort the result. Supports the same set of field references as the filter field. Entries can be prefixed with a minus sign to sort by the field in descending order.For more details, see sorting and filtering.
     * @param {integer=} params.pageSize The maximum number of results to return in a single response.
     * @param {string=} params.pageToken If this field is not empty then it must contain the nextPageToken value returned by a previous call to this method. Using this field causes the method to return more results from the previous method call.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list(
        params?: Params$Resource$Projects$Alertpolicies$List,
        options?: MethodOptions):
        AxiosPromise<Schema$ListAlertPoliciesResponse>;
    list(
        params: Params$Resource$Projects$Alertpolicies$List,
        options: MethodOptions|
        BodyResponseCallback<Schema$ListAlertPoliciesResponse>,
        callback: BodyResponseCallback<Schema$ListAlertPoliciesResponse>): void;
    list(
        params: Params$Resource$Projects$Alertpolicies$List,
        callback: BodyResponseCallback<Schema$ListAlertPoliciesResponse>): void;
    list(callback: BodyResponseCallback<Schema$ListAlertPoliciesResponse>):
        void;
    list(
        paramsOrCallback?: Params$Resource$Projects$Alertpolicies$List|
        BodyResponseCallback<Schema$ListAlertPoliciesResponse>,
        optionsOrCallback?: MethodOptions|
        BodyResponseCallback<Schema$ListAlertPoliciesResponse>,
        callback?: BodyResponseCallback<Schema$ListAlertPoliciesResponse>):
        void|AxiosPromise<Schema$ListAlertPoliciesResponse> {
      let params = (paramsOrCallback || {}) as
          Params$Resource$Projects$Alertpolicies$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Alertpolicies$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://monitoring.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl + '/v3/{+name}/alertPolicies')
                       .replace(/([^:]\/)\/+/g, '$1'),
              method: 'GET'
            },
            options),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<Schema$ListAlertPoliciesResponse>(
            parameters, callback);
      } else {
        return createAPIRequest<Schema$ListAlertPoliciesResponse>(parameters);
      }
    }


    /**
     * monitoring.projects.alertPolicies.patch
     * @desc Updates an alerting policy. You can either replace the entire
     * policy with a new one or replace only certain fields in the current
     * alerting policy by specifying the fields to be updated via updateMask.
     * Returns the updated alerting policy.
     * @alias monitoring.projects.alertPolicies.patch
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.name Required if the policy exists. The resource name for this policy. The syntax is: projects/[PROJECT_ID]/alertPolicies/[ALERT_POLICY_ID] [ALERT_POLICY_ID] is assigned by Stackdriver Monitoring when the policy is created. When calling the alertPolicies.create method, do not include the name field in the alerting policy passed as part of the request.
     * @param {string=} params.updateMask Optional. A list of alerting policy field names. If this field is not empty, each listed field in the existing alerting policy is set to the value of the corresponding field in the supplied policy (alert_policy), or to the field's default value if the field is not in the supplied alerting policy. Fields not listed retain their previous value.Examples of valid field masks include display_name, documentation, documentation.content, documentation.mime_type, user_labels, user_label.nameofkey, enabled, conditions, combiner, etc.If this field is empty, then the supplied alerting policy replaces the existing policy. It is the same as deleting the existing policy and adding the supplied policy, except for the following: The new policy will have the same [ALERT_POLICY_ID] as the former policy. This gives you continuity with the former policy in your notifications and incidents. Conditions in the new policy will keep their former [CONDITION_ID] if the supplied condition includes the name field with that [CONDITION_ID]. If the supplied condition omits the name field, then a new [CONDITION_ID] is created.
     * @param {().AlertPolicy} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    patch(
        params?: Params$Resource$Projects$Alertpolicies$Patch,
        options?: MethodOptions): AxiosPromise<Schema$AlertPolicy>;
    patch(
        params: Params$Resource$Projects$Alertpolicies$Patch,
        options: MethodOptions|BodyResponseCallback<Schema$AlertPolicy>,
        callback: BodyResponseCallback<Schema$AlertPolicy>): void;
    patch(
        params: Params$Resource$Projects$Alertpolicies$Patch,
        callback: BodyResponseCallback<Schema$AlertPolicy>): void;
    patch(callback: BodyResponseCallback<Schema$AlertPolicy>): void;
    patch(
        paramsOrCallback?: Params$Resource$Projects$Alertpolicies$Patch|
        BodyResponseCallback<Schema$AlertPolicy>,
        optionsOrCallback?: MethodOptions|
        BodyResponseCallback<Schema$AlertPolicy>,
        callback?: BodyResponseCallback<Schema$AlertPolicy>):
        void|AxiosPromise<Schema$AlertPolicy> {
      let params = (paramsOrCallback || {}) as
          Params$Resource$Projects$Alertpolicies$Patch;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Alertpolicies$Patch;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://monitoring.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl + '/v3/{+name}').replace(/([^:]\/)\/+/g, '$1'),
              method: 'PATCH'
            },
            options),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<Schema$AlertPolicy>(parameters, callback);
      } else {
        return createAPIRequest<Schema$AlertPolicy>(parameters);
      }
    }
  }

  export interface Params$Resource$Projects$Alertpolicies$Create {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * The project in which to create the alerting policy. The format is
     * projects/[PROJECT_ID].Note that this field names the parent container in
     * which the alerting policy will be written, not the name of the created
     * policy. The alerting policy that is returned will have a name that
     * contains a normalized representation of this name as a prefix but adds a
     * suffix of the form /alertPolicies/[POLICY_ID], identifying the policy in
     * the container.
     */
    name?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$AlertPolicy;
  }
  export interface Params$Resource$Projects$Alertpolicies$Delete {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * The alerting policy to delete. The format is:
     * projects/[PROJECT_ID]/alertPolicies/[ALERT_POLICY_ID] For more
     * information, see AlertPolicy.
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Alertpolicies$Get {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * The alerting policy to retrieve. The format is
     * projects/[PROJECT_ID]/alertPolicies/[ALERT_POLICY_ID]
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Alertpolicies$List {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * If provided, this field specifies the criteria that must be met by alert
     * policies to be included in the response.For more details, see sorting and
     * filtering.
     */
    filter?: string;
    /**
     * The project whose alert policies are to be listed. The format is
     * projects/[PROJECT_ID] Note that this field names the parent container in
     * which the alerting policies to be listed are stored. To retrieve a single
     * alerting policy by name, use the GetAlertPolicy operation, instead.
     */
    name?: string;
    /**
     * A comma-separated list of fields by which to sort the result. Supports
     * the same set of field references as the filter field. Entries can be
     * prefixed with a minus sign to sort by the field in descending order.For
     * more details, see sorting and filtering.
     */
    orderBy?: string;
    /**
     * The maximum number of results to return in a single response.
     */
    pageSize?: number;
    /**
     * If this field is not empty then it must contain the nextPageToken value
     * returned by a previous call to this method. Using this field causes the
     * method to return more results from the previous method call.
     */
    pageToken?: string;
  }
  export interface Params$Resource$Projects$Alertpolicies$Patch {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * Required if the policy exists. The resource name for this policy. The
     * syntax is: projects/[PROJECT_ID]/alertPolicies/[ALERT_POLICY_ID]
     * [ALERT_POLICY_ID] is assigned by Stackdriver Monitoring when the policy
     * is created. When calling the alertPolicies.create method, do not include
     * the name field in the alerting policy passed as part of the request.
     */
    name?: string;
    /**
     * Optional. A list of alerting policy field names. If this field is not
     * empty, each listed field in the existing alerting policy is set to the
     * value of the corresponding field in the supplied policy (alert_policy),
     * or to the field's default value if the field is not in the supplied
     * alerting policy. Fields not listed retain their previous value.Examples
     * of valid field masks include display_name, documentation,
     * documentation.content, documentation.mime_type, user_labels,
     * user_label.nameofkey, enabled, conditions, combiner, etc.If this field is
     * empty, then the supplied alerting policy replaces the existing policy. It
     * is the same as deleting the existing policy and adding the supplied
     * policy, except for the following: The new policy will have the same
     * [ALERT_POLICY_ID] as the former policy. This gives you continuity with
     * the former policy in your notifications and incidents. Conditions in the
     * new policy will keep their former [CONDITION_ID] if the supplied
     * condition includes the name field with that [CONDITION_ID]. If the
     * supplied condition omits the name field, then a new [CONDITION_ID] is
     * created.
     */
    updateMask?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$AlertPolicy;
  }


  export class Resource$Projects$Collectdtimeseries {
    root: Monitoring;
    constructor(root: Monitoring) {
      this.root = root;
      this.getRoot.bind(this);
    }

    getRoot() {
      return this.root;
    }


    /**
     * monitoring.projects.collectdTimeSeries.create
     * @desc Stackdriver Monitoring Agent only: Creates a new time series.<aside
     * class="caution">This method is only for use by the Stackdriver Monitoring
     * Agent. Use projects.timeSeries.create instead.</aside>
     * @example
     * * // PRE-REQUISITES:
     * // ---------------
     * // 1. If not already done, enable the Google Monitoring API and check the
     * quota for your project at
     * //
     * https://console.developers.google.com/apis/api/monitoring_component/quotas
     * // 2. This sample uses Application Default Credentials for Auth. If not
     * already done, install the gcloud CLI from
     * //    https://cloud.google.com/sdk/ and run 'gcloud beta auth
     * application-default login'
     * // 3. To install the client library and Application Default Credentials
     * library, run:
     * //    'npm install googleapis --save'
     * var google = require('googleapis');
     * var monitoring = google.monitoring('v3');
     *
     * google.auth.getApplicationDefault(function(err, authClient) {
     *   if (err) {
     *     console.log('Authentication failed because of ', err);
     *     return;
     *   }
     *   if (authClient.createScopedRequired &&
     * authClient.createScopedRequired()) { var scopes =
     * ['https://www.googleapis.com/auth/cloud-platform']; authClient =
     * authClient.createScoped(scopes);
     *   }
     *
     *   var request = {
     *     // TODO: Change placeholders below to appropriate parameter values
     * for the 'create' method:
     *
     *     // The project in which to create the time series. The format is
     * `"projects/PROJECT_ID_OR_NUMBER"`. name: "projects/{MY-PROJECT}",
     *     resource: {},
     *     // Auth client
     *     auth: authClient
     *   };
     *
     *   monitoring.projects.collectdTimeSeries.create(request, function(err,
     * result) { if (err) { console.log(err); } else { console.log(result);
     *     }
     *   });
     * });
     * @alias monitoring.projects.collectdTimeSeries.create
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.name The project in which to create the time series. The format is "projects/PROJECT_ID_OR_NUMBER".
     * @param {().CreateCollectdTimeSeriesRequest} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    create(
        params?: Params$Resource$Projects$Collectdtimeseries$Create,
        options?: MethodOptions):
        AxiosPromise<Schema$CreateCollectdTimeSeriesResponse>;
    create(
        params: Params$Resource$Projects$Collectdtimeseries$Create,
        options: MethodOptions|
        BodyResponseCallback<Schema$CreateCollectdTimeSeriesResponse>,
        callback:
            BodyResponseCallback<Schema$CreateCollectdTimeSeriesResponse>):
        void;
    create(
        params: Params$Resource$Projects$Collectdtimeseries$Create,
        callback:
            BodyResponseCallback<Schema$CreateCollectdTimeSeriesResponse>):
        void;
    create(callback:
               BodyResponseCallback<Schema$CreateCollectdTimeSeriesResponse>):
        void;
    create(
        paramsOrCallback?: Params$Resource$Projects$Collectdtimeseries$Create|
        BodyResponseCallback<Schema$CreateCollectdTimeSeriesResponse>,
        optionsOrCallback?: MethodOptions|
        BodyResponseCallback<Schema$CreateCollectdTimeSeriesResponse>,
        callback?:
            BodyResponseCallback<Schema$CreateCollectdTimeSeriesResponse>):
        void|AxiosPromise<Schema$CreateCollectdTimeSeriesResponse> {
      let params = (paramsOrCallback || {}) as
          Params$Resource$Projects$Collectdtimeseries$Create;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Collectdtimeseries$Create;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://monitoring.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl + '/v3/{+name}/collectdTimeSeries')
                       .replace(/([^:]\/)\/+/g, '$1'),
              method: 'POST'
            },
            options),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<Schema$CreateCollectdTimeSeriesResponse>(
            parameters, callback);
      } else {
        return createAPIRequest<Schema$CreateCollectdTimeSeriesResponse>(
            parameters);
      }
    }
  }

  export interface Params$Resource$Projects$Collectdtimeseries$Create {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * The project in which to create the time series. The format is
     * "projects/PROJECT_ID_OR_NUMBER".
     */
    name?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$CreateCollectdTimeSeriesRequest;
  }


  export class Resource$Projects$Groups {
    root: Monitoring;
    members: Resource$Projects$Groups$Members;
    constructor(root: Monitoring) {
      this.root = root;
      this.getRoot.bind(this);
      this.members = new Resource$Projects$Groups$Members(root);
    }

    getRoot() {
      return this.root;
    }


    /**
     * monitoring.projects.groups.create
     * @desc Creates a new group.
     * @example
     * * // PRE-REQUISITES:
     * // ---------------
     * // 1. If not already done, enable the Google Monitoring API and check the
     * quota for your project at
     * //
     * https://console.developers.google.com/apis/api/monitoring_component/quotas
     * // 2. This sample uses Application Default Credentials for Auth. If not
     * already done, install the gcloud CLI from
     * //    https://cloud.google.com/sdk/ and run 'gcloud beta auth
     * application-default login'
     * // 3. To install the client library and Application Default Credentials
     * library, run:
     * //    'npm install googleapis --save'
     * var google = require('googleapis');
     * var monitoring = google.monitoring('v3');
     *
     * google.auth.getApplicationDefault(function(err, authClient) {
     *   if (err) {
     *     console.log('Authentication failed because of ', err);
     *     return;
     *   }
     *   if (authClient.createScopedRequired &&
     * authClient.createScopedRequired()) { var scopes =
     * ['https://www.googleapis.com/auth/cloud-platform']; authClient =
     * authClient.createScoped(scopes);
     *   }
     *
     *   var request = {
     *     // TODO: Change placeholders below to appropriate parameter values
     * for the 'create' method:
     *
     *     // The project in which to create the group. The format is
     * `"projects/{project_id_or_number}"`. name: "projects/{MY-PROJECT}",
     *     resource: {},
     *     // Auth client
     *     auth: authClient
     *   };
     *
     *   monitoring.projects.groups.create(request, function(err, result) {
     *     if (err) {
     *       console.log(err);
     *     } else {
     *       console.log(result);
     *     }
     *   });
     * });
     * @alias monitoring.projects.groups.create
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.name The project in which to create the group. The format is "projects/{project_id_or_number}".
     * @param {boolean=} params.validateOnly If true, validate this request but do not create the group.
     * @param {().Group} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    create(
        params?: Params$Resource$Projects$Groups$Create,
        options?: MethodOptions): AxiosPromise<Schema$Group>;
    create(
        params: Params$Resource$Projects$Groups$Create,
        options: MethodOptions|BodyResponseCallback<Schema$Group>,
        callback: BodyResponseCallback<Schema$Group>): void;
    create(
        params: Params$Resource$Projects$Groups$Create,
        callback: BodyResponseCallback<Schema$Group>): void;
    create(callback: BodyResponseCallback<Schema$Group>): void;
    create(
        paramsOrCallback?: Params$Resource$Projects$Groups$Create|
        BodyResponseCallback<Schema$Group>,
        optionsOrCallback?: MethodOptions|BodyResponseCallback<Schema$Group>,
        callback?: BodyResponseCallback<Schema$Group>):
        void|AxiosPromise<Schema$Group> {
      let params =
          (paramsOrCallback || {}) as Params$Resource$Projects$Groups$Create;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Groups$Create;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://monitoring.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl + '/v3/{+name}/groups')
                       .replace(/([^:]\/)\/+/g, '$1'),
              method: 'POST'
            },
            options),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<Schema$Group>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Group>(parameters);
      }
    }


    /**
     * monitoring.projects.groups.delete
     * @desc Deletes an existing group.
     * @example
     * * // PRE-REQUISITES:
     * // ---------------
     * // 1. If not already done, enable the Google Monitoring API and check the
     * quota for your project at
     * //
     * https://console.developers.google.com/apis/api/monitoring_component/quotas
     * // 2. This sample uses Application Default Credentials for Auth. If not
     * already done, install the gcloud CLI from
     * //    https://cloud.google.com/sdk/ and run 'gcloud beta auth
     * application-default login'
     * // 3. To install the client library and Application Default Credentials
     * library, run:
     * //    'npm install googleapis --save'
     * var google = require('googleapis');
     * var monitoring = google.monitoring('v3');
     *
     * google.auth.getApplicationDefault(function(err, authClient) {
     *   if (err) {
     *     console.log('Authentication failed because of ', err);
     *     return;
     *   }
     *   if (authClient.createScopedRequired &&
     * authClient.createScopedRequired()) { var scopes =
     * ['https://www.googleapis.com/auth/cloud-platform']; authClient =
     * authClient.createScoped(scopes);
     *   }
     *
     *   var request = {
     *     // TODO: Change placeholders below to appropriate parameter values
     * for the 'delete' method:
     *
     *     // The group to delete. The format is
     * `"projects/{project_id_or_number}/groups/{group_id}"`. name:
     * "projects/{MY-PROJECT}/groups/{MY-GROUP}",
     *     // Auth client
     *     auth: authClient
     *   };
     *
     *   monitoring.projects.groups.delete(request, function(err, result) {
     *     if (err) {
     *       console.log(err);
     *     } else {
     *       console.log(result);
     *     }
     *   });
     * });
     * @alias monitoring.projects.groups.delete
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.name The group to delete. The format is "projects/{project_id_or_number}/groups/{group_id}".
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    delete(
        params?: Params$Resource$Projects$Groups$Delete,
        options?: MethodOptions): AxiosPromise<Schema$Empty>;
    delete(
        params: Params$Resource$Projects$Groups$Delete,
        options: MethodOptions|BodyResponseCallback<Schema$Empty>,
        callback: BodyResponseCallback<Schema$Empty>): void;
    delete(
        params: Params$Resource$Projects$Groups$Delete,
        callback: BodyResponseCallback<Schema$Empty>): void;
    delete(callback: BodyResponseCallback<Schema$Empty>): void;
    delete(
        paramsOrCallback?: Params$Resource$Projects$Groups$Delete|
        BodyResponseCallback<Schema$Empty>,
        optionsOrCallback?: MethodOptions|BodyResponseCallback<Schema$Empty>,
        callback?: BodyResponseCallback<Schema$Empty>):
        void|AxiosPromise<Schema$Empty> {
      let params =
          (paramsOrCallback || {}) as Params$Resource$Projects$Groups$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Groups$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://monitoring.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl + '/v3/{+name}').replace(/([^:]\/)\/+/g, '$1'),
              method: 'DELETE'
            },
            options),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<Schema$Empty>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Empty>(parameters);
      }
    }


    /**
     * monitoring.projects.groups.get
     * @desc Gets a single group.
     * @example
     * * // PRE-REQUISITES:
     * // ---------------
     * // 1. If not already done, enable the Google Monitoring API and check the
     * quota for your project at
     * //
     * https://console.developers.google.com/apis/api/monitoring_component/quotas
     * // 2. This sample uses Application Default Credentials for Auth. If not
     * already done, install the gcloud CLI from
     * //    https://cloud.google.com/sdk/ and run 'gcloud beta auth
     * application-default login'
     * // 3. To install the client library and Application Default Credentials
     * library, run:
     * //    'npm install googleapis --save'
     * var google = require('googleapis');
     * var monitoring = google.monitoring('v3');
     *
     * google.auth.getApplicationDefault(function(err, authClient) {
     *   if (err) {
     *     console.log('Authentication failed because of ', err);
     *     return;
     *   }
     *   if (authClient.createScopedRequired &&
     * authClient.createScopedRequired()) { var scopes =
     * ['https://www.googleapis.com/auth/cloud-platform']; authClient =
     * authClient.createScoped(scopes);
     *   }
     *
     *   var request = {
     *     // TODO: Change placeholders below to appropriate parameter values
     * for the 'get' method:
     *
     *     // The group to retrieve. The format is
     * `"projects/{project_id_or_number}/groups/{group_id}"`. name:
     * "projects/{MY-PROJECT}/groups/{MY-GROUP}",
     *     // Auth client
     *     auth: authClient
     *   };
     *
     *   monitoring.projects.groups.get(request, function(err, result) {
     *     if (err) {
     *       console.log(err);
     *     } else {
     *       console.log(result);
     *     }
     *   });
     * });
     * @alias monitoring.projects.groups.get
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.name The group to retrieve. The format is "projects/{project_id_or_number}/groups/{group_id}".
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    get(params?: Params$Resource$Projects$Groups$Get,
        options?: MethodOptions): AxiosPromise<Schema$Group>;
    get(params: Params$Resource$Projects$Groups$Get,
        options: MethodOptions|BodyResponseCallback<Schema$Group>,
        callback: BodyResponseCallback<Schema$Group>): void;
    get(params: Params$Resource$Projects$Groups$Get,
        callback: BodyResponseCallback<Schema$Group>): void;
    get(callback: BodyResponseCallback<Schema$Group>): void;
    get(paramsOrCallback?: Params$Resource$Projects$Groups$Get|
        BodyResponseCallback<Schema$Group>,
        optionsOrCallback?: MethodOptions|BodyResponseCallback<Schema$Group>,
        callback?: BodyResponseCallback<Schema$Group>):
        void|AxiosPromise<Schema$Group> {
      let params =
          (paramsOrCallback || {}) as Params$Resource$Projects$Groups$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Groups$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://monitoring.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl + '/v3/{+name}').replace(/([^:]\/)\/+/g, '$1'),
              method: 'GET'
            },
            options),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<Schema$Group>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Group>(parameters);
      }
    }


    /**
     * monitoring.projects.groups.list
     * @desc Lists the existing groups.
     * @example
     * * // PRE-REQUISITES:
     * // ---------------
     * // 1. If not already done, enable the Google Monitoring API and check the
     * quota for your project at
     * //
     * https://console.developers.google.com/apis/api/monitoring_component/quotas
     * // 2. This sample uses Application Default Credentials for Auth. If not
     * already done, install the gcloud CLI from
     * //    https://cloud.google.com/sdk/ and run 'gcloud beta auth
     * application-default login'
     * // 3. To install the client library and Application Default Credentials
     * library, run:
     * //    'npm install googleapis --save'
     * var google = require('googleapis');
     * var monitoring = google.monitoring('v3');
     *
     * google.auth.getApplicationDefault(function(err, authClient) {
     *   if (err) {
     *     console.log('Authentication failed because of ', err);
     *     return;
     *   }
     *   if (authClient.createScopedRequired &&
     * authClient.createScopedRequired()) { var scopes =
     * ['https://www.googleapis.com/auth/cloud-platform']; authClient =
     * authClient.createScoped(scopes);
     *   }
     *
     *   var request = {
     *     // TODO: Change placeholders below to appropriate parameter values
     * for the 'list' method:
     *
     *     // The project whose groups are to be listed. The format is
     * `"projects/{project_id_or_number}"`. name: "projects/{MY-PROJECT}",
     *     // Auth client
     *     auth: authClient
     *   };
     *
     *
     *   var recur = function(err, result) {
     *     if (err) {
     *       console.log(err);
     *     } else {
     *       console.log(result);
     *       if (result.nextPageToken) {
     *         request.pageToken = result.nextPageToken;
     *         monitoring.projects.groups.list(request, recur);
     *       }
     *     }
     *   };
     *
     *   monitoring.projects.groups.list(request, recur);
     * });
     * @alias monitoring.projects.groups.list
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string=} params.ancestorsOfGroup A group name: "projects/{project_id_or_number}/groups/{group_id}". Returns groups that are ancestors of the specified group. The groups are returned in order, starting with the immediate parent and ending with the most distant ancestor. If the specified group has no immediate parent, the results are empty.
     * @param {string=} params.childrenOfGroup A group name: "projects/{project_id_or_number}/groups/{group_id}". Returns groups whose parentName field contains the group name. If no groups have this parent, the results are empty.
     * @param {string=} params.descendantsOfGroup A group name: "projects/{project_id_or_number}/groups/{group_id}". Returns the descendants of the specified group. This is a superset of the results returned by the childrenOfGroup filter, and includes children-of-children, and so forth.
     * @param {string} params.name The project whose groups are to be listed. The format is "projects/{project_id_or_number}".
     * @param {integer=} params.pageSize A positive number that is the maximum number of results to return.
     * @param {string=} params.pageToken If this field is not empty then it must contain the nextPageToken value returned by a previous call to this method. Using this field causes the method to return additional results from the previous method call.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list(
        params?: Params$Resource$Projects$Groups$List,
        options?: MethodOptions): AxiosPromise<Schema$ListGroupsResponse>;
    list(
        params: Params$Resource$Projects$Groups$List,
        options: MethodOptions|BodyResponseCallback<Schema$ListGroupsResponse>,
        callback: BodyResponseCallback<Schema$ListGroupsResponse>): void;
    list(
        params: Params$Resource$Projects$Groups$List,
        callback: BodyResponseCallback<Schema$ListGroupsResponse>): void;
    list(callback: BodyResponseCallback<Schema$ListGroupsResponse>): void;
    list(
        paramsOrCallback?: Params$Resource$Projects$Groups$List|
        BodyResponseCallback<Schema$ListGroupsResponse>,
        optionsOrCallback?: MethodOptions|
        BodyResponseCallback<Schema$ListGroupsResponse>,
        callback?: BodyResponseCallback<Schema$ListGroupsResponse>):
        void|AxiosPromise<Schema$ListGroupsResponse> {
      let params =
          (paramsOrCallback || {}) as Params$Resource$Projects$Groups$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Groups$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://monitoring.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl + '/v3/{+name}/groups')
                       .replace(/([^:]\/)\/+/g, '$1'),
              method: 'GET'
            },
            options),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<Schema$ListGroupsResponse>(parameters, callback);
      } else {
        return createAPIRequest<Schema$ListGroupsResponse>(parameters);
      }
    }


    /**
     * monitoring.projects.groups.update
     * @desc Updates an existing group. You can change any group attributes
     * except name.
     * @example
     * * // PRE-REQUISITES:
     * // ---------------
     * // 1. If not already done, enable the Google Monitoring API and check the
     * quota for your project at
     * //
     * https://console.developers.google.com/apis/api/monitoring_component/quotas
     * // 2. This sample uses Application Default Credentials for Auth. If not
     * already done, install the gcloud CLI from
     * //    https://cloud.google.com/sdk/ and run 'gcloud beta auth
     * application-default login'
     * // 3. To install the client library and Application Default Credentials
     * library, run:
     * //    'npm install googleapis --save'
     * var google = require('googleapis');
     * var monitoring = google.monitoring('v3');
     *
     * google.auth.getApplicationDefault(function(err, authClient) {
     *   if (err) {
     *     console.log('Authentication failed because of ', err);
     *     return;
     *   }
     *   if (authClient.createScopedRequired &&
     * authClient.createScopedRequired()) { var scopes =
     * ['https://www.googleapis.com/auth/cloud-platform']; authClient =
     * authClient.createScoped(scopes);
     *   }
     *
     *   var request = {
     *     // TODO: Change placeholders below to appropriate parameter values
     * for the 'update' method:
     *
     *     // The name of this group. The format is
     * `"projects/{project_id_or_number}/groups/{group_id}"`. When
     *     // creating a group, this field is ignored and a new name is created
     * consisting of the project
     *     // specified in the call to `CreateGroup` and a unique `{group_id}`
     * that is generated automatically.
     *     // @OutputOnly
     *     name: "projects/{MY-PROJECT}/groups/{MY-GROUP}",
     *     resource: {},
     *     // Auth client
     *     auth: authClient
     *   };
     *
     *   monitoring.projects.groups.update(request, function(err, result) {
     *     if (err) {
     *       console.log(err);
     *     } else {
     *       console.log(result);
     *     }
     *   });
     * });
     * @alias monitoring.projects.groups.update
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.name Output only. The name of this group. The format is "projects/{project_id_or_number}/groups/{group_id}". When creating a group, this field is ignored and a new name is created consisting of the project specified in the call to CreateGroup and a unique {group_id} that is generated automatically.
     * @param {boolean=} params.validateOnly If true, validate this request but do not update the existing group.
     * @param {().Group} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    update(
        params?: Params$Resource$Projects$Groups$Update,
        options?: MethodOptions): AxiosPromise<Schema$Group>;
    update(
        params: Params$Resource$Projects$Groups$Update,
        options: MethodOptions|BodyResponseCallback<Schema$Group>,
        callback: BodyResponseCallback<Schema$Group>): void;
    update(
        params: Params$Resource$Projects$Groups$Update,
        callback: BodyResponseCallback<Schema$Group>): void;
    update(callback: BodyResponseCallback<Schema$Group>): void;
    update(
        paramsOrCallback?: Params$Resource$Projects$Groups$Update|
        BodyResponseCallback<Schema$Group>,
        optionsOrCallback?: MethodOptions|BodyResponseCallback<Schema$Group>,
        callback?: BodyResponseCallback<Schema$Group>):
        void|AxiosPromise<Schema$Group> {
      let params =
          (paramsOrCallback || {}) as Params$Resource$Projects$Groups$Update;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Groups$Update;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://monitoring.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl + '/v3/{+name}').replace(/([^:]\/)\/+/g, '$1'),
              method: 'PUT'
            },
            options),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<Schema$Group>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Group>(parameters);
      }
    }
  }

  export interface Params$Resource$Projects$Groups$Create {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * The project in which to create the group. The format is
     * "projects/{project_id_or_number}".
     */
    name?: string;
    /**
     * If true, validate this request but do not create the group.
     */
    validateOnly?: boolean;

    /**
     * Request body metadata
     */
    requestBody?: Schema$Group;
  }
  export interface Params$Resource$Projects$Groups$Delete {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * The group to delete. The format is
     * "projects/{project_id_or_number}/groups/{group_id}".
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Groups$Get {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * The group to retrieve. The format is
     * "projects/{project_id_or_number}/groups/{group_id}".
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Groups$List {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * A group name: "projects/{project_id_or_number}/groups/{group_id}".
     * Returns groups that are ancestors of the specified group. The groups are
     * returned in order, starting with the immediate parent and ending with the
     * most distant ancestor. If the specified group has no immediate parent,
     * the results are empty.
     */
    ancestorsOfGroup?: string;
    /**
     * A group name: "projects/{project_id_or_number}/groups/{group_id}".
     * Returns groups whose parentName field contains the group name. If no
     * groups have this parent, the results are empty.
     */
    childrenOfGroup?: string;
    /**
     * A group name: "projects/{project_id_or_number}/groups/{group_id}".
     * Returns the descendants of the specified group. This is a superset of the
     * results returned by the childrenOfGroup filter, and includes
     * children-of-children, and so forth.
     */
    descendantsOfGroup?: string;
    /**
     * The project whose groups are to be listed. The format is
     * "projects/{project_id_or_number}".
     */
    name?: string;
    /**
     * A positive number that is the maximum number of results to return.
     */
    pageSize?: number;
    /**
     * If this field is not empty then it must contain the nextPageToken value
     * returned by a previous call to this method. Using this field causes the
     * method to return additional results from the previous method call.
     */
    pageToken?: string;
  }
  export interface Params$Resource$Projects$Groups$Update {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * Output only. The name of this group. The format is
     * "projects/{project_id_or_number}/groups/{group_id}". When creating a
     * group, this field is ignored and a new name is created consisting of the
     * project specified in the call to CreateGroup and a unique {group_id} that
     * is generated automatically.
     */
    name?: string;
    /**
     * If true, validate this request but do not update the existing group.
     */
    validateOnly?: boolean;

    /**
     * Request body metadata
     */
    requestBody?: Schema$Group;
  }

  export class Resource$Projects$Groups$Members {
    root: Monitoring;
    constructor(root: Monitoring) {
      this.root = root;
      this.getRoot.bind(this);
    }

    getRoot() {
      return this.root;
    }


    /**
     * monitoring.projects.groups.members.list
     * @desc Lists the monitored resources that are members of a group.
     * @example
     * * // PRE-REQUISITES:
     * // ---------------
     * // 1. If not already done, enable the Google Monitoring API and check the
     * quota for your project at
     * //
     * https://console.developers.google.com/apis/api/monitoring_component/quotas
     * // 2. This sample uses Application Default Credentials for Auth. If not
     * already done, install the gcloud CLI from
     * //    https://cloud.google.com/sdk/ and run 'gcloud beta auth
     * application-default login'
     * // 3. To install the client library and Application Default Credentials
     * library, run:
     * //    'npm install googleapis --save'
     * var google = require('googleapis');
     * var monitoring = google.monitoring('v3');
     *
     * google.auth.getApplicationDefault(function(err, authClient) {
     *   if (err) {
     *     console.log('Authentication failed because of ', err);
     *     return;
     *   }
     *   if (authClient.createScopedRequired &&
     * authClient.createScopedRequired()) { var scopes =
     * ['https://www.googleapis.com/auth/cloud-platform']; authClient =
     * authClient.createScoped(scopes);
     *   }
     *
     *   var request = {
     *     // TODO: Change placeholders below to appropriate parameter values
     * for the 'list' method:
     *
     *     // The group whose members are listed. The format is
     *     // `"projects/{project_id_or_number}/groups/{group_id}"`.
     *     name: "projects/{MY-PROJECT}/groups/{MY-GROUP}",
     *     // Auth client
     *     auth: authClient
     *   };
     *
     *
     *   var recur = function(err, result) {
     *     if (err) {
     *       console.log(err);
     *     } else {
     *       console.log(result);
     *       if (result.nextPageToken) {
     *         request.pageToken = result.nextPageToken;
     *         monitoring.projects.groups.members.list(request, recur);
     *       }
     *     }
     *   };
     *
     *   monitoring.projects.groups.members.list(request, recur);
     * });
     * @alias monitoring.projects.groups.members.list
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string=} params.filter An optional list filter describing the members to be returned. The filter may reference the type, labels, and metadata of monitored resources that comprise the group. For example, to return only resources representing Compute Engine VM instances, use this filter: resource.type = "gce_instance"
     * @param {string=} params.interval.endTime Required. The end of the time interval.
     * @param {string=} params.interval.startTime Optional. The beginning of the time interval. The default value for the start time is the end time. The start time must not be later than the end time.
     * @param {string} params.name The group whose members are listed. The format is "projects/{project_id_or_number}/groups/{group_id}".
     * @param {integer=} params.pageSize A positive number that is the maximum number of results to return.
     * @param {string=} params.pageToken If this field is not empty then it must contain the nextPageToken value returned by a previous call to this method. Using this field causes the method to return additional results from the previous method call.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list(
        params?: Params$Resource$Projects$Groups$Members$List,
        options?: MethodOptions): AxiosPromise<Schema$ListGroupMembersResponse>;
    list(
        params: Params$Resource$Projects$Groups$Members$List,
        options: MethodOptions|
        BodyResponseCallback<Schema$ListGroupMembersResponse>,
        callback: BodyResponseCallback<Schema$ListGroupMembersResponse>): void;
    list(
        params: Params$Resource$Projects$Groups$Members$List,
        callback: BodyResponseCallback<Schema$ListGroupMembersResponse>): void;
    list(callback: BodyResponseCallback<Schema$ListGroupMembersResponse>): void;
    list(
        paramsOrCallback?: Params$Resource$Projects$Groups$Members$List|
        BodyResponseCallback<Schema$ListGroupMembersResponse>,
        optionsOrCallback?: MethodOptions|
        BodyResponseCallback<Schema$ListGroupMembersResponse>,
        callback?: BodyResponseCallback<Schema$ListGroupMembersResponse>):
        void|AxiosPromise<Schema$ListGroupMembersResponse> {
      let params = (paramsOrCallback || {}) as
          Params$Resource$Projects$Groups$Members$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Groups$Members$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://monitoring.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl + '/v3/{+name}/members')
                       .replace(/([^:]\/)\/+/g, '$1'),
              method: 'GET'
            },
            options),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<Schema$ListGroupMembersResponse>(parameters, callback);
      } else {
        return createAPIRequest<Schema$ListGroupMembersResponse>(parameters);
      }
    }
  }

  export interface Params$Resource$Projects$Groups$Members$List {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * An optional list filter describing the members to be returned. The filter
     * may reference the type, labels, and metadata of monitored resources that
     * comprise the group. For example, to return only resources representing
     * Compute Engine VM instances, use this filter: resource.type =
     * "gce_instance"
     */
    filter?: string;
    /**
     * Required. The end of the time interval.
     */
    'interval.endTime'?: string;
    /**
     * Optional. The beginning of the time interval. The default value for the
     * start time is the end time. The start time must not be later than the end
     * time.
     */
    'interval.startTime'?: string;
    /**
     * The group whose members are listed. The format is
     * "projects/{project_id_or_number}/groups/{group_id}".
     */
    name?: string;
    /**
     * A positive number that is the maximum number of results to return.
     */
    pageSize?: number;
    /**
     * If this field is not empty then it must contain the nextPageToken value
     * returned by a previous call to this method. Using this field causes the
     * method to return additional results from the previous method call.
     */
    pageToken?: string;
  }



  export class Resource$Projects$Metricdescriptors {
    root: Monitoring;
    constructor(root: Monitoring) {
      this.root = root;
      this.getRoot.bind(this);
    }

    getRoot() {
      return this.root;
    }


    /**
     * monitoring.projects.metricDescriptors.create
     * @desc Creates a new metric descriptor. User-created metric descriptors
     * define custom metrics.
     * @example
     * * // PRE-REQUISITES:
     * // ---------------
     * // 1. If not already done, enable the Google Monitoring API and check the
     * quota for your project at
     * //
     * https://console.developers.google.com/apis/api/monitoring_component/quotas
     * // 2. This sample uses Application Default Credentials for Auth. If not
     * already done, install the gcloud CLI from
     * //    https://cloud.google.com/sdk/ and run 'gcloud beta auth
     * application-default login'
     * // 3. To install the client library and Application Default Credentials
     * library, run:
     * //    'npm install googleapis --save'
     * var google = require('googleapis');
     * var monitoring = google.monitoring('v3');
     *
     * google.auth.getApplicationDefault(function(err, authClient) {
     *   if (err) {
     *     console.log('Authentication failed because of ', err);
     *     return;
     *   }
     *   if (authClient.createScopedRequired &&
     * authClient.createScopedRequired()) { var scopes =
     * ['https://www.googleapis.com/auth/cloud-platform']; authClient =
     * authClient.createScoped(scopes);
     *   }
     *
     *   var request = {
     *     // TODO: Change placeholders below to appropriate parameter values
     * for the 'create' method:
     *
     *     // The project on which to execute the request. The format is
     * `"projects/{project_id_or_number}"`. name: "projects/{MY-PROJECT}",
     *     resource: {},
     *     // Auth client
     *     auth: authClient
     *   };
     *
     *   monitoring.projects.metricDescriptors.create(request, function(err,
     * result) { if (err) { console.log(err); } else { console.log(result);
     *     }
     *   });
     * });
     * @alias monitoring.projects.metricDescriptors.create
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.name The project on which to execute the request. The format is "projects/{project_id_or_number}".
     * @param {().MetricDescriptor} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    create(
        params?: Params$Resource$Projects$Metricdescriptors$Create,
        options?: MethodOptions): AxiosPromise<Schema$MetricDescriptor>;
    create(
        params: Params$Resource$Projects$Metricdescriptors$Create,
        options: MethodOptions|BodyResponseCallback<Schema$MetricDescriptor>,
        callback: BodyResponseCallback<Schema$MetricDescriptor>): void;
    create(
        params: Params$Resource$Projects$Metricdescriptors$Create,
        callback: BodyResponseCallback<Schema$MetricDescriptor>): void;
    create(callback: BodyResponseCallback<Schema$MetricDescriptor>): void;
    create(
        paramsOrCallback?: Params$Resource$Projects$Metricdescriptors$Create|
        BodyResponseCallback<Schema$MetricDescriptor>,
        optionsOrCallback?: MethodOptions|
        BodyResponseCallback<Schema$MetricDescriptor>,
        callback?: BodyResponseCallback<Schema$MetricDescriptor>):
        void|AxiosPromise<Schema$MetricDescriptor> {
      let params = (paramsOrCallback || {}) as
          Params$Resource$Projects$Metricdescriptors$Create;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Metricdescriptors$Create;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://monitoring.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl + '/v3/{+name}/metricDescriptors')
                       .replace(/([^:]\/)\/+/g, '$1'),
              method: 'POST'
            },
            options),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<Schema$MetricDescriptor>(parameters, callback);
      } else {
        return createAPIRequest<Schema$MetricDescriptor>(parameters);
      }
    }


    /**
     * monitoring.projects.metricDescriptors.delete
     * @desc Deletes a metric descriptor. Only user-created custom metrics can
     * be deleted.
     * @example
     * * // PRE-REQUISITES:
     * // ---------------
     * // 1. If not already done, enable the Google Monitoring API and check the
     * quota for your project at
     * //
     * https://console.developers.google.com/apis/api/monitoring_component/quotas
     * // 2. This sample uses Application Default Credentials for Auth. If not
     * already done, install the gcloud CLI from
     * //    https://cloud.google.com/sdk/ and run 'gcloud beta auth
     * application-default login'
     * // 3. To install the client library and Application Default Credentials
     * library, run:
     * //    'npm install googleapis --save'
     * var google = require('googleapis');
     * var monitoring = google.monitoring('v3');
     *
     * google.auth.getApplicationDefault(function(err, authClient) {
     *   if (err) {
     *     console.log('Authentication failed because of ', err);
     *     return;
     *   }
     *   if (authClient.createScopedRequired &&
     * authClient.createScopedRequired()) { var scopes =
     * ['https://www.googleapis.com/auth/cloud-platform']; authClient =
     * authClient.createScoped(scopes);
     *   }
     *
     *   var request = {
     *     // TODO: Change placeholders below to appropriate parameter values
     * for the 'delete' method:
     *
     *     // The metric descriptor on which to execute the request. The format
     * is
     *     // `"projects/{project_id_or_number}/metricDescriptors/{metric_id}"`.
     * An example of `{metric_id}` is:
     *     // `"custom.googleapis.com/my_test_metric"`.
     *     name: "",
     *     // Auth client
     *     auth: authClient
     *   };
     *
     *   monitoring.projects.metricDescriptors.delete(request, function(err,
     * result) { if (err) { console.log(err); } else { console.log(result);
     *     }
     *   });
     * });
     * @alias monitoring.projects.metricDescriptors.delete
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.name The metric descriptor on which to execute the request. The format is "projects/{project_id_or_number}/metricDescriptors/{metric_id}". An example of {metric_id} is: "custom.googleapis.com/my_test_metric".
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    delete(
        params?: Params$Resource$Projects$Metricdescriptors$Delete,
        options?: MethodOptions): AxiosPromise<Schema$Empty>;
    delete(
        params: Params$Resource$Projects$Metricdescriptors$Delete,
        options: MethodOptions|BodyResponseCallback<Schema$Empty>,
        callback: BodyResponseCallback<Schema$Empty>): void;
    delete(
        params: Params$Resource$Projects$Metricdescriptors$Delete,
        callback: BodyResponseCallback<Schema$Empty>): void;
    delete(callback: BodyResponseCallback<Schema$Empty>): void;
    delete(
        paramsOrCallback?: Params$Resource$Projects$Metricdescriptors$Delete|
        BodyResponseCallback<Schema$Empty>,
        optionsOrCallback?: MethodOptions|BodyResponseCallback<Schema$Empty>,
        callback?: BodyResponseCallback<Schema$Empty>):
        void|AxiosPromise<Schema$Empty> {
      let params = (paramsOrCallback || {}) as
          Params$Resource$Projects$Metricdescriptors$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Metricdescriptors$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://monitoring.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl + '/v3/{+name}').replace(/([^:]\/)\/+/g, '$1'),
              method: 'DELETE'
            },
            options),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<Schema$Empty>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Empty>(parameters);
      }
    }


    /**
     * monitoring.projects.metricDescriptors.get
     * @desc Gets a single metric descriptor. This method does not require a
     * Stackdriver account.
     * @example
     * * // PRE-REQUISITES:
     * // ---------------
     * // 1. If not already done, enable the Google Monitoring API and check the
     * quota for your project at
     * //
     * https://console.developers.google.com/apis/api/monitoring_component/quotas
     * // 2. This sample uses Application Default Credentials for Auth. If not
     * already done, install the gcloud CLI from
     * //    https://cloud.google.com/sdk/ and run 'gcloud beta auth
     * application-default login'
     * // 3. To install the client library and Application Default Credentials
     * library, run:
     * //    'npm install googleapis --save'
     * var google = require('googleapis');
     * var monitoring = google.monitoring('v3');
     *
     * google.auth.getApplicationDefault(function(err, authClient) {
     *   if (err) {
     *     console.log('Authentication failed because of ', err);
     *     return;
     *   }
     *   if (authClient.createScopedRequired &&
     * authClient.createScopedRequired()) { var scopes =
     * ['https://www.googleapis.com/auth/cloud-platform']; authClient =
     * authClient.createScoped(scopes);
     *   }
     *
     *   var request = {
     *     // TODO: Change placeholders below to appropriate parameter values
     * for the 'get' method:
     *
     *     // The metric descriptor on which to execute the request. The format
     * is
     *     // `"projects/{project_id_or_number}/metricDescriptors/{metric_id}"`.
     * An example value of `{metric_id}`
     *     // is `"compute.googleapis.com/instance/disk/read_bytes_count"`.
     *     name: "",
     *     // Auth client
     *     auth: authClient
     *   };
     *
     *   monitoring.projects.metricDescriptors.get(request, function(err,
     * result) { if (err) { console.log(err); } else { console.log(result);
     *     }
     *   });
     * });
     * @alias monitoring.projects.metricDescriptors.get
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.name The metric descriptor on which to execute the request. The format is "projects/{project_id_or_number}/metricDescriptors/{metric_id}". An example value of {metric_id} is "compute.googleapis.com/instance/disk/read_bytes_count".
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    get(params?: Params$Resource$Projects$Metricdescriptors$Get,
        options?: MethodOptions): AxiosPromise<Schema$MetricDescriptor>;
    get(params: Params$Resource$Projects$Metricdescriptors$Get,
        options: MethodOptions|BodyResponseCallback<Schema$MetricDescriptor>,
        callback: BodyResponseCallback<Schema$MetricDescriptor>): void;
    get(params: Params$Resource$Projects$Metricdescriptors$Get,
        callback: BodyResponseCallback<Schema$MetricDescriptor>): void;
    get(callback: BodyResponseCallback<Schema$MetricDescriptor>): void;
    get(paramsOrCallback?: Params$Resource$Projects$Metricdescriptors$Get|
        BodyResponseCallback<Schema$MetricDescriptor>,
        optionsOrCallback?: MethodOptions|
        BodyResponseCallback<Schema$MetricDescriptor>,
        callback?: BodyResponseCallback<Schema$MetricDescriptor>):
        void|AxiosPromise<Schema$MetricDescriptor> {
      let params = (paramsOrCallback || {}) as
          Params$Resource$Projects$Metricdescriptors$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Metricdescriptors$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://monitoring.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl + '/v3/{+name}').replace(/([^:]\/)\/+/g, '$1'),
              method: 'GET'
            },
            options),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<Schema$MetricDescriptor>(parameters, callback);
      } else {
        return createAPIRequest<Schema$MetricDescriptor>(parameters);
      }
    }


    /**
     * monitoring.projects.metricDescriptors.list
     * @desc Lists metric descriptors that match a filter. This method does not
     * require a Stackdriver account.
     * @example
     * * // PRE-REQUISITES:
     * // ---------------
     * // 1. If not already done, enable the Google Monitoring API and check the
     * quota for your project at
     * //
     * https://console.developers.google.com/apis/api/monitoring_component/quotas
     * // 2. This sample uses Application Default Credentials for Auth. If not
     * already done, install the gcloud CLI from
     * //    https://cloud.google.com/sdk/ and run 'gcloud beta auth
     * application-default login'
     * // 3. To install the client library and Application Default Credentials
     * library, run:
     * //    'npm install googleapis --save'
     * var google = require('googleapis');
     * var monitoring = google.monitoring('v3');
     *
     * google.auth.getApplicationDefault(function(err, authClient) {
     *   if (err) {
     *     console.log('Authentication failed because of ', err);
     *     return;
     *   }
     *   if (authClient.createScopedRequired &&
     * authClient.createScopedRequired()) { var scopes =
     * ['https://www.googleapis.com/auth/cloud-platform']; authClient =
     * authClient.createScoped(scopes);
     *   }
     *
     *   var request = {
     *     // TODO: Change placeholders below to appropriate parameter values
     * for the 'list' method:
     *
     *     // The project on which to execute the request. The format is
     * `"projects/{project_id_or_number}"`. name: "projects/{MY-PROJECT}",
     *     // Auth client
     *     auth: authClient
     *   };
     *
     *
     *   var recur = function(err, result) {
     *     if (err) {
     *       console.log(err);
     *     } else {
     *       console.log(result);
     *       if (result.nextPageToken) {
     *         request.pageToken = result.nextPageToken;
     *         monitoring.projects.metricDescriptors.list(request, recur);
     *       }
     *     }
     *   };
     *
     *   monitoring.projects.metricDescriptors.list(request, recur);
     * });
     * @alias monitoring.projects.metricDescriptors.list
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string=} params.filter If this field is empty, all custom and system-defined metric descriptors are returned. Otherwise, the filter specifies which metric descriptors are to be returned. For example, the following filter matches all custom metrics: metric.type = starts_with("custom.googleapis.com/")
     * @param {string} params.name The project on which to execute the request. The format is "projects/{project_id_or_number}".
     * @param {integer=} params.pageSize A positive number that is the maximum number of results to return.
     * @param {string=} params.pageToken If this field is not empty then it must contain the nextPageToken value returned by a previous call to this method. Using this field causes the method to return additional results from the previous method call.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list(
        params?: Params$Resource$Projects$Metricdescriptors$List,
        options?: MethodOptions):
        AxiosPromise<Schema$ListMetricDescriptorsResponse>;
    list(
        params: Params$Resource$Projects$Metricdescriptors$List,
        options: MethodOptions|
        BodyResponseCallback<Schema$ListMetricDescriptorsResponse>,
        callback: BodyResponseCallback<Schema$ListMetricDescriptorsResponse>):
        void;
    list(
        params: Params$Resource$Projects$Metricdescriptors$List,
        callback: BodyResponseCallback<Schema$ListMetricDescriptorsResponse>):
        void;
    list(callback: BodyResponseCallback<Schema$ListMetricDescriptorsResponse>):
        void;
    list(
        paramsOrCallback?: Params$Resource$Projects$Metricdescriptors$List|
        BodyResponseCallback<Schema$ListMetricDescriptorsResponse>,
        optionsOrCallback?: MethodOptions|
        BodyResponseCallback<Schema$ListMetricDescriptorsResponse>,
        callback?: BodyResponseCallback<Schema$ListMetricDescriptorsResponse>):
        void|AxiosPromise<Schema$ListMetricDescriptorsResponse> {
      let params = (paramsOrCallback || {}) as
          Params$Resource$Projects$Metricdescriptors$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Metricdescriptors$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://monitoring.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl + '/v3/{+name}/metricDescriptors')
                       .replace(/([^:]\/)\/+/g, '$1'),
              method: 'GET'
            },
            options),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<Schema$ListMetricDescriptorsResponse>(
            parameters, callback);
      } else {
        return createAPIRequest<Schema$ListMetricDescriptorsResponse>(
            parameters);
      }
    }
  }

  export interface Params$Resource$Projects$Metricdescriptors$Create {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * The project on which to execute the request. The format is
     * "projects/{project_id_or_number}".
     */
    name?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$MetricDescriptor;
  }
  export interface Params$Resource$Projects$Metricdescriptors$Delete {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * The metric descriptor on which to execute the request. The format is
     * "projects/{project_id_or_number}/metricDescriptors/{metric_id}". An
     * example of {metric_id} is: "custom.googleapis.com/my_test_metric".
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Metricdescriptors$Get {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * The metric descriptor on which to execute the request. The format is
     * "projects/{project_id_or_number}/metricDescriptors/{metric_id}". An
     * example value of {metric_id} is
     * "compute.googleapis.com/instance/disk/read_bytes_count".
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Metricdescriptors$List {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * If this field is empty, all custom and system-defined metric descriptors
     * are returned. Otherwise, the filter specifies which metric descriptors
     * are to be returned. For example, the following filter matches all custom
     * metrics: metric.type = starts_with("custom.googleapis.com/")
     */
    filter?: string;
    /**
     * The project on which to execute the request. The format is
     * "projects/{project_id_or_number}".
     */
    name?: string;
    /**
     * A positive number that is the maximum number of results to return.
     */
    pageSize?: number;
    /**
     * If this field is not empty then it must contain the nextPageToken value
     * returned by a previous call to this method. Using this field causes the
     * method to return additional results from the previous method call.
     */
    pageToken?: string;
  }


  export class Resource$Projects$Monitoredresourcedescriptors {
    root: Monitoring;
    constructor(root: Monitoring) {
      this.root = root;
      this.getRoot.bind(this);
    }

    getRoot() {
      return this.root;
    }


    /**
     * monitoring.projects.monitoredResourceDescriptors.get
     * @desc Gets a single monitored resource descriptor. This method does not
     * require a Stackdriver account.
     * @example
     * * // PRE-REQUISITES:
     * // ---------------
     * // 1. If not already done, enable the Google Monitoring API and check the
     * quota for your project at
     * //
     * https://console.developers.google.com/apis/api/monitoring_component/quotas
     * // 2. This sample uses Application Default Credentials for Auth. If not
     * already done, install the gcloud CLI from
     * //    https://cloud.google.com/sdk/ and run 'gcloud beta auth
     * application-default login'
     * // 3. To install the client library and Application Default Credentials
     * library, run:
     * //    'npm install googleapis --save'
     * var google = require('googleapis');
     * var monitoring = google.monitoring('v3');
     *
     * google.auth.getApplicationDefault(function(err, authClient) {
     *   if (err) {
     *     console.log('Authentication failed because of ', err);
     *     return;
     *   }
     *   if (authClient.createScopedRequired &&
     * authClient.createScopedRequired()) { var scopes =
     * ['https://www.googleapis.com/auth/cloud-platform']; authClient =
     * authClient.createScoped(scopes);
     *   }
     *
     *   var request = {
     *     // TODO: Change placeholders below to appropriate parameter values
     * for the 'get' method:
     *
     *     // The monitored resource descriptor to get. The format is
     *     //
     * `"projects/{project_id_or_number}/monitoredResourceDescriptors/{resource_type}"`.
     * The
     *     // `{resource_type}` is a predefined type, such as
     * `cloudsql_database`. name:
     * "projects/{MY-PROJECT}/monitoredResourceDescriptors/{MY-MONITOREDRESOURCEDESCRIPTOR}",
     *     // Auth client
     *     auth: authClient
     *   };
     *
     *   monitoring.projects.monitoredResourceDescriptors.get(request,
     * function(err, result) { if (err) { console.log(err); } else {
     *       console.log(result);
     *     }
     *   });
     * });
     * @alias monitoring.projects.monitoredResourceDescriptors.get
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.name The monitored resource descriptor to get. The format is "projects/{project_id_or_number}/monitoredResourceDescriptors/{resource_type}". The {resource_type} is a predefined type, such as cloudsql_database.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    get(params?: Params$Resource$Projects$Monitoredresourcedescriptors$Get,
        options?: MethodOptions):
        AxiosPromise<Schema$MonitoredResourceDescriptor>;
    get(params: Params$Resource$Projects$Monitoredresourcedescriptors$Get,
        options: MethodOptions|
        BodyResponseCallback<Schema$MonitoredResourceDescriptor>,
        callback: BodyResponseCallback<Schema$MonitoredResourceDescriptor>):
        void;
    get(params: Params$Resource$Projects$Monitoredresourcedescriptors$Get,
        callback: BodyResponseCallback<Schema$MonitoredResourceDescriptor>):
        void;
    get(callback: BodyResponseCallback<Schema$MonitoredResourceDescriptor>):
        void;
    get(paramsOrCallback?:
            Params$Resource$Projects$Monitoredresourcedescriptors$Get|
        BodyResponseCallback<Schema$MonitoredResourceDescriptor>,
        optionsOrCallback?: MethodOptions|
        BodyResponseCallback<Schema$MonitoredResourceDescriptor>,
        callback?: BodyResponseCallback<Schema$MonitoredResourceDescriptor>):
        void|AxiosPromise<Schema$MonitoredResourceDescriptor> {
      let params = (paramsOrCallback || {}) as
          Params$Resource$Projects$Monitoredresourcedescriptors$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as
            Params$Resource$Projects$Monitoredresourcedescriptors$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://monitoring.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl + '/v3/{+name}').replace(/([^:]\/)\/+/g, '$1'),
              method: 'GET'
            },
            options),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<Schema$MonitoredResourceDescriptor>(
            parameters, callback);
      } else {
        return createAPIRequest<Schema$MonitoredResourceDescriptor>(parameters);
      }
    }


    /**
     * monitoring.projects.monitoredResourceDescriptors.list
     * @desc Lists monitored resource descriptors that match a filter. This
     * method does not require a Stackdriver account.
     * @example
     * * // PRE-REQUISITES:
     * // ---------------
     * // 1. If not already done, enable the Google Monitoring API and check the
     * quota for your project at
     * //
     * https://console.developers.google.com/apis/api/monitoring_component/quotas
     * // 2. This sample uses Application Default Credentials for Auth. If not
     * already done, install the gcloud CLI from
     * //    https://cloud.google.com/sdk/ and run 'gcloud beta auth
     * application-default login'
     * // 3. To install the client library and Application Default Credentials
     * library, run:
     * //    'npm install googleapis --save'
     * var google = require('googleapis');
     * var monitoring = google.monitoring('v3');
     *
     * google.auth.getApplicationDefault(function(err, authClient) {
     *   if (err) {
     *     console.log('Authentication failed because of ', err);
     *     return;
     *   }
     *   if (authClient.createScopedRequired &&
     * authClient.createScopedRequired()) { var scopes =
     * ['https://www.googleapis.com/auth/cloud-platform']; authClient =
     * authClient.createScoped(scopes);
     *   }
     *
     *   var request = {
     *     // TODO: Change placeholders below to appropriate parameter values
     * for the 'list' method:
     *
     *     // The project on which to execute the request. The format is
     * `"projects/{project_id_or_number}"`. name: "projects/{MY-PROJECT}",
     *     // Auth client
     *     auth: authClient
     *   };
     *
     *
     *   var recur = function(err, result) {
     *     if (err) {
     *       console.log(err);
     *     } else {
     *       console.log(result);
     *       if (result.nextPageToken) {
     *         request.pageToken = result.nextPageToken;
     *         monitoring.projects.monitoredResourceDescriptors.list(request,
     * recur);
     *       }
     *     }
     *   };
     *
     *   monitoring.projects.monitoredResourceDescriptors.list(request, recur);
     * });
     * @alias monitoring.projects.monitoredResourceDescriptors.list
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string=} params.filter An optional filter describing the descriptors to be returned. The filter can reference the descriptor's type and labels. For example, the following filter returns only Google Compute Engine descriptors that have an id label: resource.type = starts_with("gce_") AND resource.label:id
     * @param {string} params.name The project on which to execute the request. The format is "projects/{project_id_or_number}".
     * @param {integer=} params.pageSize A positive number that is the maximum number of results to return.
     * @param {string=} params.pageToken If this field is not empty then it must contain the nextPageToken value returned by a previous call to this method. Using this field causes the method to return additional results from the previous method call.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list(
        params?: Params$Resource$Projects$Monitoredresourcedescriptors$List,
        options?: MethodOptions):
        AxiosPromise<Schema$ListMonitoredResourceDescriptorsResponse>;
    list(
        params: Params$Resource$Projects$Monitoredresourcedescriptors$List,
        options: MethodOptions|
        BodyResponseCallback<Schema$ListMonitoredResourceDescriptorsResponse>,
        callback: BodyResponseCallback<
            Schema$ListMonitoredResourceDescriptorsResponse>): void;
    list(
        params: Params$Resource$Projects$Monitoredresourcedescriptors$List,
        callback: BodyResponseCallback<
            Schema$ListMonitoredResourceDescriptorsResponse>): void;
    list(callback: BodyResponseCallback<
         Schema$ListMonitoredResourceDescriptorsResponse>): void;
    list(
        paramsOrCallback?:
            Params$Resource$Projects$Monitoredresourcedescriptors$List|
        BodyResponseCallback<Schema$ListMonitoredResourceDescriptorsResponse>,
        optionsOrCallback?: MethodOptions|
        BodyResponseCallback<Schema$ListMonitoredResourceDescriptorsResponse>,
        callback?: BodyResponseCallback<
            Schema$ListMonitoredResourceDescriptorsResponse>):
        void|AxiosPromise<Schema$ListMonitoredResourceDescriptorsResponse> {
      let params = (paramsOrCallback || {}) as
          Params$Resource$Projects$Monitoredresourcedescriptors$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as
            Params$Resource$Projects$Monitoredresourcedescriptors$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://monitoring.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl + '/v3/{+name}/monitoredResourceDescriptors')
                       .replace(/([^:]\/)\/+/g, '$1'),
              method: 'GET'
            },
            options),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<Schema$ListMonitoredResourceDescriptorsResponse>(
            parameters, callback);
      } else {
        return createAPIRequest<
            Schema$ListMonitoredResourceDescriptorsResponse>(parameters);
      }
    }
  }

  export interface Params$Resource$Projects$Monitoredresourcedescriptors$Get {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * The monitored resource descriptor to get. The format is
     * "projects/{project_id_or_number}/monitoredResourceDescriptors/{resource_type}".
     * The {resource_type} is a predefined type, such as cloudsql_database.
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Monitoredresourcedescriptors$List {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * An optional filter describing the descriptors to be returned. The filter
     * can reference the descriptor's type and labels. For example, the
     * following filter returns only Google Compute Engine descriptors that have
     * an id label: resource.type = starts_with("gce_") AND resource.label:id
     */
    filter?: string;
    /**
     * The project on which to execute the request. The format is
     * "projects/{project_id_or_number}".
     */
    name?: string;
    /**
     * A positive number that is the maximum number of results to return.
     */
    pageSize?: number;
    /**
     * If this field is not empty then it must contain the nextPageToken value
     * returned by a previous call to this method. Using this field causes the
     * method to return additional results from the previous method call.
     */
    pageToken?: string;
  }


  export class Resource$Projects$Notificationchanneldescriptors {
    root: Monitoring;
    constructor(root: Monitoring) {
      this.root = root;
      this.getRoot.bind(this);
    }

    getRoot() {
      return this.root;
    }


    /**
     * monitoring.projects.notificationChannelDescriptors.get
     * @desc Gets a single channel descriptor. The descriptor indicates which
     * fields are expected / permitted for a notification channel of the given
     * type.
     * @alias monitoring.projects.notificationChannelDescriptors.get
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.name The channel type for which to execute the request. The format is projects/[PROJECT_ID]/notificationChannelDescriptors/{channel_type}.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    get(params?: Params$Resource$Projects$Notificationchanneldescriptors$Get,
        options?: MethodOptions):
        AxiosPromise<Schema$NotificationChannelDescriptor>;
    get(params: Params$Resource$Projects$Notificationchanneldescriptors$Get,
        options: MethodOptions|
        BodyResponseCallback<Schema$NotificationChannelDescriptor>,
        callback: BodyResponseCallback<Schema$NotificationChannelDescriptor>):
        void;
    get(params: Params$Resource$Projects$Notificationchanneldescriptors$Get,
        callback: BodyResponseCallback<Schema$NotificationChannelDescriptor>):
        void;
    get(callback: BodyResponseCallback<Schema$NotificationChannelDescriptor>):
        void;
    get(paramsOrCallback?:
            Params$Resource$Projects$Notificationchanneldescriptors$Get|
        BodyResponseCallback<Schema$NotificationChannelDescriptor>,
        optionsOrCallback?: MethodOptions|
        BodyResponseCallback<Schema$NotificationChannelDescriptor>,
        callback?: BodyResponseCallback<Schema$NotificationChannelDescriptor>):
        void|AxiosPromise<Schema$NotificationChannelDescriptor> {
      let params = (paramsOrCallback || {}) as
          Params$Resource$Projects$Notificationchanneldescriptors$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as
            Params$Resource$Projects$Notificationchanneldescriptors$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://monitoring.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl + '/v3/{+name}').replace(/([^:]\/)\/+/g, '$1'),
              method: 'GET'
            },
            options),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<Schema$NotificationChannelDescriptor>(
            parameters, callback);
      } else {
        return createAPIRequest<Schema$NotificationChannelDescriptor>(
            parameters);
      }
    }


    /**
     * monitoring.projects.notificationChannelDescriptors.list
     * @desc Lists the descriptors for supported channel types. The use of
     * descriptors makes it possible for new channel types to be dynamically
     * added.
     * @alias monitoring.projects.notificationChannelDescriptors.list
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.name The REST resource name of the parent from which to retrieve the notification channel descriptors. The expected syntax is: projects/[PROJECT_ID] Note that this names the parent container in which to look for the descriptors; to retrieve a single descriptor by name, use the GetNotificationChannelDescriptor operation, instead.
     * @param {integer=} params.pageSize The maximum number of results to return in a single response. If not set to a positive number, a reasonable value will be chosen by the service.
     * @param {string=} params.pageToken If non-empty, page_token must contain a value returned as the next_page_token in a previous response to request the next set of results.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list(
        params?: Params$Resource$Projects$Notificationchanneldescriptors$List,
        options?: MethodOptions):
        AxiosPromise<Schema$ListNotificationChannelDescriptorsResponse>;
    list(
        params: Params$Resource$Projects$Notificationchanneldescriptors$List,
        options: MethodOptions|
        BodyResponseCallback<Schema$ListNotificationChannelDescriptorsResponse>,
        callback: BodyResponseCallback<
            Schema$ListNotificationChannelDescriptorsResponse>): void;
    list(
        params: Params$Resource$Projects$Notificationchanneldescriptors$List,
        callback: BodyResponseCallback<
            Schema$ListNotificationChannelDescriptorsResponse>): void;
    list(callback: BodyResponseCallback<
         Schema$ListNotificationChannelDescriptorsResponse>): void;
    list(
        paramsOrCallback?:
            Params$Resource$Projects$Notificationchanneldescriptors$List|
        BodyResponseCallback<Schema$ListNotificationChannelDescriptorsResponse>,
        optionsOrCallback?: MethodOptions|
        BodyResponseCallback<Schema$ListNotificationChannelDescriptorsResponse>,
        callback?: BodyResponseCallback<
            Schema$ListNotificationChannelDescriptorsResponse>):
        void|AxiosPromise<Schema$ListNotificationChannelDescriptorsResponse> {
      let params = (paramsOrCallback || {}) as
          Params$Resource$Projects$Notificationchanneldescriptors$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as
            Params$Resource$Projects$Notificationchanneldescriptors$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://monitoring.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl + '/v3/{+name}/notificationChannelDescriptors')
                       .replace(/([^:]\/)\/+/g, '$1'),
              method: 'GET'
            },
            options),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<Schema$ListNotificationChannelDescriptorsResponse>(
            parameters, callback);
      } else {
        return createAPIRequest<
            Schema$ListNotificationChannelDescriptorsResponse>(parameters);
      }
    }
  }

  export interface Params$Resource$Projects$Notificationchanneldescriptors$Get {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * The channel type for which to execute the request. The format is
     * projects/[PROJECT_ID]/notificationChannelDescriptors/{channel_type}.
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Notificationchanneldescriptors$List {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * The REST resource name of the parent from which to retrieve the
     * notification channel descriptors. The expected syntax is:
     * projects/[PROJECT_ID] Note that this names the parent container in which
     * to look for the descriptors; to retrieve a single descriptor by name, use
     * the GetNotificationChannelDescriptor operation, instead.
     */
    name?: string;
    /**
     * The maximum number of results to return in a single response. If not set
     * to a positive number, a reasonable value will be chosen by the service.
     */
    pageSize?: number;
    /**
     * If non-empty, page_token must contain a value returned as the
     * next_page_token in a previous response to request the next set of
     * results.
     */
    pageToken?: string;
  }


  export class Resource$Projects$Notificationchannels {
    root: Monitoring;
    constructor(root: Monitoring) {
      this.root = root;
      this.getRoot.bind(this);
    }

    getRoot() {
      return this.root;
    }


    /**
     * monitoring.projects.notificationChannels.create
     * @desc Creates a new notification channel, representing a single
     * notification endpoint such as an email address, SMS number, or pagerduty
     * service.
     * @alias monitoring.projects.notificationChannels.create
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.name The project on which to execute the request. The format is: projects/[PROJECT_ID] Note that this names the container into which the channel will be written. This does not name the newly created channel. The resulting channel's name will have a normalized version of this field as a prefix, but will add /notificationChannels/[CHANNEL_ID] to identify the channel.
     * @param {().NotificationChannel} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    create(
        params?: Params$Resource$Projects$Notificationchannels$Create,
        options?: MethodOptions): AxiosPromise<Schema$NotificationChannel>;
    create(
        params: Params$Resource$Projects$Notificationchannels$Create,
        options: MethodOptions|BodyResponseCallback<Schema$NotificationChannel>,
        callback: BodyResponseCallback<Schema$NotificationChannel>): void;
    create(
        params: Params$Resource$Projects$Notificationchannels$Create,
        callback: BodyResponseCallback<Schema$NotificationChannel>): void;
    create(callback: BodyResponseCallback<Schema$NotificationChannel>): void;
    create(
        paramsOrCallback?: Params$Resource$Projects$Notificationchannels$Create|
        BodyResponseCallback<Schema$NotificationChannel>,
        optionsOrCallback?: MethodOptions|
        BodyResponseCallback<Schema$NotificationChannel>,
        callback?: BodyResponseCallback<Schema$NotificationChannel>):
        void|AxiosPromise<Schema$NotificationChannel> {
      let params = (paramsOrCallback || {}) as
          Params$Resource$Projects$Notificationchannels$Create;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Notificationchannels$Create;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://monitoring.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl + '/v3/{+name}/notificationChannels')
                       .replace(/([^:]\/)\/+/g, '$1'),
              method: 'POST'
            },
            options),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<Schema$NotificationChannel>(parameters, callback);
      } else {
        return createAPIRequest<Schema$NotificationChannel>(parameters);
      }
    }


    /**
     * monitoring.projects.notificationChannels.delete
     * @desc Deletes a notification channel.
     * @alias monitoring.projects.notificationChannels.delete
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {boolean=} params.force If true, the notification channel will be deleted regardless of its use in alert policies (the policies will be updated to remove the channel). If false, channels that are still referenced by an existing alerting policy will fail to be deleted in a delete operation.
     * @param {string} params.name The channel for which to execute the request. The format is projects/[PROJECT_ID]/notificationChannels/[CHANNEL_ID].
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    delete(
        params?: Params$Resource$Projects$Notificationchannels$Delete,
        options?: MethodOptions): AxiosPromise<Schema$Empty>;
    delete(
        params: Params$Resource$Projects$Notificationchannels$Delete,
        options: MethodOptions|BodyResponseCallback<Schema$Empty>,
        callback: BodyResponseCallback<Schema$Empty>): void;
    delete(
        params: Params$Resource$Projects$Notificationchannels$Delete,
        callback: BodyResponseCallback<Schema$Empty>): void;
    delete(callback: BodyResponseCallback<Schema$Empty>): void;
    delete(
        paramsOrCallback?: Params$Resource$Projects$Notificationchannels$Delete|
        BodyResponseCallback<Schema$Empty>,
        optionsOrCallback?: MethodOptions|BodyResponseCallback<Schema$Empty>,
        callback?: BodyResponseCallback<Schema$Empty>):
        void|AxiosPromise<Schema$Empty> {
      let params = (paramsOrCallback || {}) as
          Params$Resource$Projects$Notificationchannels$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Notificationchannels$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://monitoring.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl + '/v3/{+name}').replace(/([^:]\/)\/+/g, '$1'),
              method: 'DELETE'
            },
            options),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<Schema$Empty>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Empty>(parameters);
      }
    }


    /**
     * monitoring.projects.notificationChannels.get
     * @desc Gets a single notification channel. The channel includes the
     * relevant configuration details with which the channel was created.
     * However, the response may truncate or omit passwords, API keys, or other
     * private key matter and thus the response may not be 100% identical to the
     * information that was supplied in the call to the create method.
     * @alias monitoring.projects.notificationChannels.get
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.name The channel for which to execute the request. The format is projects/[PROJECT_ID]/notificationChannels/[CHANNEL_ID].
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    get(params?: Params$Resource$Projects$Notificationchannels$Get,
        options?: MethodOptions): AxiosPromise<Schema$NotificationChannel>;
    get(params: Params$Resource$Projects$Notificationchannels$Get,
        options: MethodOptions|BodyResponseCallback<Schema$NotificationChannel>,
        callback: BodyResponseCallback<Schema$NotificationChannel>): void;
    get(params: Params$Resource$Projects$Notificationchannels$Get,
        callback: BodyResponseCallback<Schema$NotificationChannel>): void;
    get(callback: BodyResponseCallback<Schema$NotificationChannel>): void;
    get(paramsOrCallback?: Params$Resource$Projects$Notificationchannels$Get|
        BodyResponseCallback<Schema$NotificationChannel>,
        optionsOrCallback?: MethodOptions|
        BodyResponseCallback<Schema$NotificationChannel>,
        callback?: BodyResponseCallback<Schema$NotificationChannel>):
        void|AxiosPromise<Schema$NotificationChannel> {
      let params = (paramsOrCallback || {}) as
          Params$Resource$Projects$Notificationchannels$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Notificationchannels$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://monitoring.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl + '/v3/{+name}').replace(/([^:]\/)\/+/g, '$1'),
              method: 'GET'
            },
            options),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<Schema$NotificationChannel>(parameters, callback);
      } else {
        return createAPIRequest<Schema$NotificationChannel>(parameters);
      }
    }


    /**
     * monitoring.projects.notificationChannels.getVerificationCode
     * @desc Requests a verification code for an already verified channel that
     * can then be used in a call to VerifyNotificationChannel() on a different
     * channel with an equivalent identity in the same or in a different
     * project. This makes it possible to copy a channel between projects
     * without requiring manual reverification of the channel. If the channel is
     * not in the verified state, this method will fail (in other words, this
     * may only be used if the SendNotificationChannelVerificationCode and
     * VerifyNotificationChannel paths have already been used to put the given
     * channel into the verified state).There is no guarantee that the
     * verification codes returned by this method will be of a similar structure
     * or form as the ones that are delivered to the channel via
     * SendNotificationChannelVerificationCode; while
     * VerifyNotificationChannel() will recognize both the codes delivered via
     * SendNotificationChannelVerificationCode() and returned from
     * GetNotificationChannelVerificationCode(), it is typically the case that
     * the verification codes delivered via
     * SendNotificationChannelVerificationCode() will be shorter and also have a
     * shorter expiration (e.g. codes such as "G-123456") whereas
     * GetVerificationCode() will typically return a much longer, websafe base
     * 64 encoded string that has a longer expiration time.
     * @alias monitoring.projects.notificationChannels.getVerificationCode
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.name The notification channel for which a verification code is to be generated and retrieved. This must name a channel that is already verified; if the specified channel is not verified, the request will fail.
     * @param {().GetNotificationChannelVerificationCodeRequest} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    getVerificationCode(
        params?:
            Params$Resource$Projects$Notificationchannels$Getverificationcode,
        options?: MethodOptions):
        AxiosPromise<Schema$GetNotificationChannelVerificationCodeResponse>;
    getVerificationCode(
        params:
            Params$Resource$Projects$Notificationchannels$Getverificationcode,
        options: MethodOptions|BodyResponseCallback<
            Schema$GetNotificationChannelVerificationCodeResponse>,
        callback: BodyResponseCallback<
            Schema$GetNotificationChannelVerificationCodeResponse>): void;
    getVerificationCode(
        params:
            Params$Resource$Projects$Notificationchannels$Getverificationcode,
        callback: BodyResponseCallback<
            Schema$GetNotificationChannelVerificationCodeResponse>): void;
    getVerificationCode(callback: BodyResponseCallback<
                        Schema$GetNotificationChannelVerificationCodeResponse>):
        void;
    getVerificationCode(
        paramsOrCallback?:
            Params$Resource$Projects$Notificationchannels$Getverificationcode|
        BodyResponseCallback<
            Schema$GetNotificationChannelVerificationCodeResponse>,
        optionsOrCallback?: MethodOptions|BodyResponseCallback<
            Schema$GetNotificationChannelVerificationCodeResponse>,
        callback?: BodyResponseCallback<
            Schema$GetNotificationChannelVerificationCodeResponse>): void|
        AxiosPromise<Schema$GetNotificationChannelVerificationCodeResponse> {
      let params = (paramsOrCallback || {}) as
          Params$Resource$Projects$Notificationchannels$Getverificationcode;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as
            Params$Resource$Projects$Notificationchannels$Getverificationcode;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://monitoring.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl + '/v3/{+name}:getVerificationCode')
                       .replace(/([^:]\/)\/+/g, '$1'),
              method: 'POST'
            },
            options),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<Schema$GetNotificationChannelVerificationCodeResponse>(
            parameters, callback);
      } else {
        return createAPIRequest<
            Schema$GetNotificationChannelVerificationCodeResponse>(parameters);
      }
    }


    /**
     * monitoring.projects.notificationChannels.list
     * @desc Lists the notification channels that have been created for the
     * project.
     * @alias monitoring.projects.notificationChannels.list
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string=} params.filter If provided, this field specifies the criteria that must be met by notification channels to be included in the response.For more details, see sorting and filtering.
     * @param {string} params.name The project on which to execute the request. The format is projects/[PROJECT_ID]. That is, this names the container in which to look for the notification channels; it does not name a specific channel. To query a specific channel by REST resource name, use the GetNotificationChannel operation.
     * @param {string=} params.orderBy A comma-separated list of fields by which to sort the result. Supports the same set of fields as in filter. Entries can be prefixed with a minus sign to sort in descending rather than ascending order.For more details, see sorting and filtering.
     * @param {integer=} params.pageSize The maximum number of results to return in a single response. If not set to a positive number, a reasonable value will be chosen by the service.
     * @param {string=} params.pageToken If non-empty, page_token must contain a value returned as the next_page_token in a previous response to request the next set of results.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list(
        params?: Params$Resource$Projects$Notificationchannels$List,
        options?: MethodOptions):
        AxiosPromise<Schema$ListNotificationChannelsResponse>;
    list(
        params: Params$Resource$Projects$Notificationchannels$List,
        options: MethodOptions|
        BodyResponseCallback<Schema$ListNotificationChannelsResponse>,
        callback:
            BodyResponseCallback<Schema$ListNotificationChannelsResponse>):
        void;
    list(
        params: Params$Resource$Projects$Notificationchannels$List,
        callback:
            BodyResponseCallback<Schema$ListNotificationChannelsResponse>):
        void;
    list(callback:
             BodyResponseCallback<Schema$ListNotificationChannelsResponse>):
        void;
    list(
        paramsOrCallback?: Params$Resource$Projects$Notificationchannels$List|
        BodyResponseCallback<Schema$ListNotificationChannelsResponse>,
        optionsOrCallback?: MethodOptions|
        BodyResponseCallback<Schema$ListNotificationChannelsResponse>,
        callback?:
            BodyResponseCallback<Schema$ListNotificationChannelsResponse>):
        void|AxiosPromise<Schema$ListNotificationChannelsResponse> {
      let params = (paramsOrCallback || {}) as
          Params$Resource$Projects$Notificationchannels$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Notificationchannels$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://monitoring.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl + '/v3/{+name}/notificationChannels')
                       .replace(/([^:]\/)\/+/g, '$1'),
              method: 'GET'
            },
            options),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<Schema$ListNotificationChannelsResponse>(
            parameters, callback);
      } else {
        return createAPIRequest<Schema$ListNotificationChannelsResponse>(
            parameters);
      }
    }


    /**
     * monitoring.projects.notificationChannels.patch
     * @desc Updates a notification channel. Fields not specified in the field
     * mask remain unchanged.
     * @alias monitoring.projects.notificationChannels.patch
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.name The full REST resource name for this channel. The syntax is: projects/[PROJECT_ID]/notificationChannels/[CHANNEL_ID] The [CHANNEL_ID] is automatically assigned by the server on creation.
     * @param {string=} params.updateMask The fields to update.
     * @param {().NotificationChannel} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    patch(
        params?: Params$Resource$Projects$Notificationchannels$Patch,
        options?: MethodOptions): AxiosPromise<Schema$NotificationChannel>;
    patch(
        params: Params$Resource$Projects$Notificationchannels$Patch,
        options: MethodOptions|BodyResponseCallback<Schema$NotificationChannel>,
        callback: BodyResponseCallback<Schema$NotificationChannel>): void;
    patch(
        params: Params$Resource$Projects$Notificationchannels$Patch,
        callback: BodyResponseCallback<Schema$NotificationChannel>): void;
    patch(callback: BodyResponseCallback<Schema$NotificationChannel>): void;
    patch(
        paramsOrCallback?: Params$Resource$Projects$Notificationchannels$Patch|
        BodyResponseCallback<Schema$NotificationChannel>,
        optionsOrCallback?: MethodOptions|
        BodyResponseCallback<Schema$NotificationChannel>,
        callback?: BodyResponseCallback<Schema$NotificationChannel>):
        void|AxiosPromise<Schema$NotificationChannel> {
      let params = (paramsOrCallback || {}) as
          Params$Resource$Projects$Notificationchannels$Patch;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Notificationchannels$Patch;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://monitoring.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl + '/v3/{+name}').replace(/([^:]\/)\/+/g, '$1'),
              method: 'PATCH'
            },
            options),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<Schema$NotificationChannel>(parameters, callback);
      } else {
        return createAPIRequest<Schema$NotificationChannel>(parameters);
      }
    }


    /**
     * monitoring.projects.notificationChannels.sendVerificationCode
     * @desc Causes a verification code to be delivered to the channel. The code
     * can then be supplied in VerifyNotificationChannel to verify the channel.
     * @alias monitoring.projects.notificationChannels.sendVerificationCode
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.name The notification channel to which to send a verification code.
     * @param {().SendNotificationChannelVerificationCodeRequest} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    sendVerificationCode(
        params?:
            Params$Resource$Projects$Notificationchannels$Sendverificationcode,
        options?: MethodOptions): AxiosPromise<Schema$Empty>;
    sendVerificationCode(
        params:
            Params$Resource$Projects$Notificationchannels$Sendverificationcode,
        options: MethodOptions|BodyResponseCallback<Schema$Empty>,
        callback: BodyResponseCallback<Schema$Empty>): void;
    sendVerificationCode(
        params:
            Params$Resource$Projects$Notificationchannels$Sendverificationcode,
        callback: BodyResponseCallback<Schema$Empty>): void;
    sendVerificationCode(callback: BodyResponseCallback<Schema$Empty>): void;
    sendVerificationCode(
        paramsOrCallback?:
            Params$Resource$Projects$Notificationchannels$Sendverificationcode|
        BodyResponseCallback<Schema$Empty>,
        optionsOrCallback?: MethodOptions|BodyResponseCallback<Schema$Empty>,
        callback?: BodyResponseCallback<Schema$Empty>):
        void|AxiosPromise<Schema$Empty> {
      let params = (paramsOrCallback || {}) as
          Params$Resource$Projects$Notificationchannels$Sendverificationcode;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as
            Params$Resource$Projects$Notificationchannels$Sendverificationcode;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://monitoring.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl + '/v3/{+name}:sendVerificationCode')
                       .replace(/([^:]\/)\/+/g, '$1'),
              method: 'POST'
            },
            options),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<Schema$Empty>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Empty>(parameters);
      }
    }


    /**
     * monitoring.projects.notificationChannels.verify
     * @desc Verifies a NotificationChannel by proving receipt of the code
     * delivered to the channel as a result of calling
     * SendNotificationChannelVerificationCode.
     * @alias monitoring.projects.notificationChannels.verify
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.name The notification channel to verify.
     * @param {().VerifyNotificationChannelRequest} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    verify(
        params?: Params$Resource$Projects$Notificationchannels$Verify,
        options?: MethodOptions): AxiosPromise<Schema$NotificationChannel>;
    verify(
        params: Params$Resource$Projects$Notificationchannels$Verify,
        options: MethodOptions|BodyResponseCallback<Schema$NotificationChannel>,
        callback: BodyResponseCallback<Schema$NotificationChannel>): void;
    verify(
        params: Params$Resource$Projects$Notificationchannels$Verify,
        callback: BodyResponseCallback<Schema$NotificationChannel>): void;
    verify(callback: BodyResponseCallback<Schema$NotificationChannel>): void;
    verify(
        paramsOrCallback?: Params$Resource$Projects$Notificationchannels$Verify|
        BodyResponseCallback<Schema$NotificationChannel>,
        optionsOrCallback?: MethodOptions|
        BodyResponseCallback<Schema$NotificationChannel>,
        callback?: BodyResponseCallback<Schema$NotificationChannel>):
        void|AxiosPromise<Schema$NotificationChannel> {
      let params = (paramsOrCallback || {}) as
          Params$Resource$Projects$Notificationchannels$Verify;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Notificationchannels$Verify;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://monitoring.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl + '/v3/{+name}:verify')
                       .replace(/([^:]\/)\/+/g, '$1'),
              method: 'POST'
            },
            options),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<Schema$NotificationChannel>(parameters, callback);
      } else {
        return createAPIRequest<Schema$NotificationChannel>(parameters);
      }
    }
  }

  export interface Params$Resource$Projects$Notificationchannels$Create {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * The project on which to execute the request. The format is:
     * projects/[PROJECT_ID] Note that this names the container into which the
     * channel will be written. This does not name the newly created channel.
     * The resulting channel's name will have a normalized version of this field
     * as a prefix, but will add /notificationChannels/[CHANNEL_ID] to identify
     * the channel.
     */
    name?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$NotificationChannel;
  }
  export interface Params$Resource$Projects$Notificationchannels$Delete {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * If true, the notification channel will be deleted regardless of its use
     * in alert policies (the policies will be updated to remove the channel).
     * If false, channels that are still referenced by an existing alerting
     * policy will fail to be deleted in a delete operation.
     */
    force?: boolean;
    /**
     * The channel for which to execute the request. The format is
     * projects/[PROJECT_ID]/notificationChannels/[CHANNEL_ID].
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Notificationchannels$Get {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * The channel for which to execute the request. The format is
     * projects/[PROJECT_ID]/notificationChannels/[CHANNEL_ID].
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Notificationchannels$Getverificationcode {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * The notification channel for which a verification code is to be generated
     * and retrieved. This must name a channel that is already verified; if the
     * specified channel is not verified, the request will fail.
     */
    name?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GetNotificationChannelVerificationCodeRequest;
  }
  export interface Params$Resource$Projects$Notificationchannels$List {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * If provided, this field specifies the criteria that must be met by
     * notification channels to be included in the response.For more details,
     * see sorting and filtering.
     */
    filter?: string;
    /**
     * The project on which to execute the request. The format is
     * projects/[PROJECT_ID]. That is, this names the container in which to look
     * for the notification channels; it does not name a specific channel. To
     * query a specific channel by REST resource name, use the
     * GetNotificationChannel operation.
     */
    name?: string;
    /**
     * A comma-separated list of fields by which to sort the result. Supports
     * the same set of fields as in filter. Entries can be prefixed with a minus
     * sign to sort in descending rather than ascending order.For more details,
     * see sorting and filtering.
     */
    orderBy?: string;
    /**
     * The maximum number of results to return in a single response. If not set
     * to a positive number, a reasonable value will be chosen by the service.
     */
    pageSize?: number;
    /**
     * If non-empty, page_token must contain a value returned as the
     * next_page_token in a previous response to request the next set of
     * results.
     */
    pageToken?: string;
  }
  export interface Params$Resource$Projects$Notificationchannels$Patch {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * The full REST resource name for this channel. The syntax is:
     * projects/[PROJECT_ID]/notificationChannels/[CHANNEL_ID] The [CHANNEL_ID]
     * is automatically assigned by the server on creation.
     */
    name?: string;
    /**
     * The fields to update.
     */
    updateMask?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$NotificationChannel;
  }
  export interface Params$Resource$Projects$Notificationchannels$Sendverificationcode {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * The notification channel to which to send a verification code.
     */
    name?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$SendNotificationChannelVerificationCodeRequest;
  }
  export interface Params$Resource$Projects$Notificationchannels$Verify {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * The notification channel to verify.
     */
    name?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$VerifyNotificationChannelRequest;
  }


  export class Resource$Projects$Timeseries {
    root: Monitoring;
    constructor(root: Monitoring) {
      this.root = root;
      this.getRoot.bind(this);
    }

    getRoot() {
      return this.root;
    }


    /**
     * monitoring.projects.timeSeries.create
     * @desc Creates or adds data to one or more time series. The response is
     * empty if all time series in the request were written. If any time series
     * could not be written, a corresponding failure message is included in the
     * error response.
     * @example
     * * // PRE-REQUISITES:
     * // ---------------
     * // 1. If not already done, enable the Google Monitoring API and check the
     * quota for your project at
     * //
     * https://console.developers.google.com/apis/api/monitoring_component/quotas
     * // 2. This sample uses Application Default Credentials for Auth. If not
     * already done, install the gcloud CLI from
     * //    https://cloud.google.com/sdk/ and run 'gcloud beta auth
     * application-default login'
     * // 3. To install the client library and Application Default Credentials
     * library, run:
     * //    'npm install googleapis --save'
     * var google = require('googleapis');
     * var monitoring = google.monitoring('v3');
     *
     * google.auth.getApplicationDefault(function(err, authClient) {
     *   if (err) {
     *     console.log('Authentication failed because of ', err);
     *     return;
     *   }
     *   if (authClient.createScopedRequired &&
     * authClient.createScopedRequired()) { var scopes =
     * ['https://www.googleapis.com/auth/cloud-platform']; authClient =
     * authClient.createScoped(scopes);
     *   }
     *
     *   var request = {
     *     // TODO: Change placeholders below to appropriate parameter values
     * for the 'create' method:
     *
     *     // The project on which to execute the request. The format is
     * `"projects/{project_id_or_number}"`. name: "projects/{MY-PROJECT}",
     *     resource: {},
     *     // Auth client
     *     auth: authClient
     *   };
     *
     *   monitoring.projects.timeSeries.create(request, function(err, result) {
     *     if (err) {
     *       console.log(err);
     *     } else {
     *       console.log(result);
     *     }
     *   });
     * });
     * @alias monitoring.projects.timeSeries.create
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.name The project on which to execute the request. The format is "projects/{project_id_or_number}".
     * @param {().CreateTimeSeriesRequest} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    create(
        params?: Params$Resource$Projects$Timeseries$Create,
        options?: MethodOptions): AxiosPromise<Schema$Empty>;
    create(
        params: Params$Resource$Projects$Timeseries$Create,
        options: MethodOptions|BodyResponseCallback<Schema$Empty>,
        callback: BodyResponseCallback<Schema$Empty>): void;
    create(
        params: Params$Resource$Projects$Timeseries$Create,
        callback: BodyResponseCallback<Schema$Empty>): void;
    create(callback: BodyResponseCallback<Schema$Empty>): void;
    create(
        paramsOrCallback?: Params$Resource$Projects$Timeseries$Create|
        BodyResponseCallback<Schema$Empty>,
        optionsOrCallback?: MethodOptions|BodyResponseCallback<Schema$Empty>,
        callback?: BodyResponseCallback<Schema$Empty>):
        void|AxiosPromise<Schema$Empty> {
      let params = (paramsOrCallback || {}) as
          Params$Resource$Projects$Timeseries$Create;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Timeseries$Create;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://monitoring.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl + '/v3/{+name}/timeSeries')
                       .replace(/([^:]\/)\/+/g, '$1'),
              method: 'POST'
            },
            options),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<Schema$Empty>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Empty>(parameters);
      }
    }


    /**
     * monitoring.projects.timeSeries.list
     * @desc Lists time series that match a filter. This method does not require
     * a Stackdriver account.
     * @example
     * * // PRE-REQUISITES:
     * // ---------------
     * // 1. If not already done, enable the Google Monitoring API and check the
     * quota for your project at
     * //
     * https://console.developers.google.com/apis/api/monitoring_component/quotas
     * // 2. This sample uses Application Default Credentials for Auth. If not
     * already done, install the gcloud CLI from
     * //    https://cloud.google.com/sdk/ and run 'gcloud beta auth
     * application-default login'
     * // 3. To install the client library and Application Default Credentials
     * library, run:
     * //    'npm install googleapis --save'
     * var google = require('googleapis');
     * var monitoring = google.monitoring('v3');
     *
     * google.auth.getApplicationDefault(function(err, authClient) {
     *   if (err) {
     *     console.log('Authentication failed because of ', err);
     *     return;
     *   }
     *   if (authClient.createScopedRequired &&
     * authClient.createScopedRequired()) { var scopes =
     * ['https://www.googleapis.com/auth/cloud-platform']; authClient =
     * authClient.createScoped(scopes);
     *   }
     *
     *   var request = {
     *     // TODO: Change placeholders below to appropriate parameter values
     * for the 'list' method:
     *
     *     // The project on which to execute the request. The format is
     * "projects/{project_id_or_number}". name: "projects/{MY-PROJECT}",
     *     // Auth client
     *     auth: authClient
     *   };
     *
     *
     *   var recur = function(err, result) {
     *     if (err) {
     *       console.log(err);
     *     } else {
     *       console.log(result);
     *       if (result.nextPageToken) {
     *         request.pageToken = result.nextPageToken;
     *         monitoring.projects.timeSeries.list(request, recur);
     *       }
     *     }
     *   };
     *
     *   monitoring.projects.timeSeries.list(request, recur);
     * });
     * @alias monitoring.projects.timeSeries.list
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string=} params.aggregation.alignmentPeriod The alignment period for per-time series alignment. If present, alignmentPeriod must be at least 60 seconds. After per-time series alignment, each time series will contain data points only on the period boundaries. If perSeriesAligner is not specified or equals ALIGN_NONE, then this field is ignored. If perSeriesAligner is specified and does not equal ALIGN_NONE, then this field must be defined; otherwise an error is returned.
     * @param {string=} params.aggregation.crossSeriesReducer The approach to be used to combine time series. Not all reducer functions may be applied to all time series, depending on the metric type and the value type of the original time series. Reduction may change the metric type of value type of the time series.Time series data must be aligned in order to perform cross-time series reduction. If crossSeriesReducer is specified, then perSeriesAligner must be specified and not equal ALIGN_NONE and alignmentPeriod must be specified; otherwise, an error is returned.
     * @param {string=} params.aggregation.groupByFields The set of fields to preserve when crossSeriesReducer is specified. The groupByFields determine how the time series are partitioned into subsets prior to applying the aggregation function. Each subset contains time series that have the same value for each of the grouping fields. Each individual time series is a member of exactly one subset. The crossSeriesReducer is applied to each subset of time series. It is not possible to reduce across different resource types, so this field implicitly contains resource.type. Fields not specified in groupByFields are aggregated away. If groupByFields is not specified and all the time series have the same resource type, then the time series are aggregated into a single output time series. If crossSeriesReducer is not defined, this field is ignored.
     * @param {string=} params.aggregation.perSeriesAligner The approach to be used to align individual time series. Not all alignment functions may be applied to all time series, depending on the metric type and value type of the original time series. Alignment may change the metric type or the value type of the time series.Time series data must be aligned in order to perform cross-time series reduction. If crossSeriesReducer is specified, then perSeriesAligner must be specified and not equal ALIGN_NONE and alignmentPeriod must be specified; otherwise, an error is returned.
     * @param {string=} params.filter A monitoring filter that specifies which time series should be returned. The filter must specify a single metric type, and can additionally specify metric labels and other information. For example: metric.type = "compute.googleapis.com/instance/cpu/usage_time" AND     metric.label.instance_name = "my-instance-name"
     * @param {string=} params.interval.endTime Required. The end of the time interval.
     * @param {string=} params.interval.startTime Optional. The beginning of the time interval. The default value for the start time is the end time. The start time must not be later than the end time.
     * @param {string} params.name The project on which to execute the request. The format is "projects/{project_id_or_number}".
     * @param {string=} params.orderBy Unsupported: must be left blank. The points in each time series are returned in reverse time order.
     * @param {integer=} params.pageSize A positive number that is the maximum number of results to return. When view field sets to FULL, it limits the number of Points server will return; if view field is HEADERS, it limits the number of TimeSeries server will return.
     * @param {string=} params.pageToken If this field is not empty then it must contain the nextPageToken value returned by a previous call to this method. Using this field causes the method to return additional results from the previous method call.
     * @param {string=} params.view Specifies which information is returned about the time series.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list(
        params?: Params$Resource$Projects$Timeseries$List,
        options?: MethodOptions): AxiosPromise<Schema$ListTimeSeriesResponse>;
    list(
        params: Params$Resource$Projects$Timeseries$List,
        options: MethodOptions|
        BodyResponseCallback<Schema$ListTimeSeriesResponse>,
        callback: BodyResponseCallback<Schema$ListTimeSeriesResponse>): void;
    list(
        params: Params$Resource$Projects$Timeseries$List,
        callback: BodyResponseCallback<Schema$ListTimeSeriesResponse>): void;
    list(callback: BodyResponseCallback<Schema$ListTimeSeriesResponse>): void;
    list(
        paramsOrCallback?: Params$Resource$Projects$Timeseries$List|
        BodyResponseCallback<Schema$ListTimeSeriesResponse>,
        optionsOrCallback?: MethodOptions|
        BodyResponseCallback<Schema$ListTimeSeriesResponse>,
        callback?: BodyResponseCallback<Schema$ListTimeSeriesResponse>):
        void|AxiosPromise<Schema$ListTimeSeriesResponse> {
      let params =
          (paramsOrCallback || {}) as Params$Resource$Projects$Timeseries$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Timeseries$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://monitoring.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl + '/v3/{+name}/timeSeries')
                       .replace(/([^:]\/)\/+/g, '$1'),
              method: 'GET'
            },
            options),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<Schema$ListTimeSeriesResponse>(parameters, callback);
      } else {
        return createAPIRequest<Schema$ListTimeSeriesResponse>(parameters);
      }
    }
  }

  export interface Params$Resource$Projects$Timeseries$Create {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * The project on which to execute the request. The format is
     * "projects/{project_id_or_number}".
     */
    name?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$CreateTimeSeriesRequest;
  }
  export interface Params$Resource$Projects$Timeseries$List {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * The alignment period for per-time series alignment. If present,
     * alignmentPeriod must be at least 60 seconds. After per-time series
     * alignment, each time series will contain data points only on the period
     * boundaries. If perSeriesAligner is not specified or equals ALIGN_NONE,
     * then this field is ignored. If perSeriesAligner is specified and does not
     * equal ALIGN_NONE, then this field must be defined; otherwise an error is
     * returned.
     */
    'aggregation.alignmentPeriod'?: string;
    /**
     * The approach to be used to combine time series. Not all reducer functions
     * may be applied to all time series, depending on the metric type and the
     * value type of the original time series. Reduction may change the metric
     * type of value type of the time series.Time series data must be aligned in
     * order to perform cross-time series reduction. If crossSeriesReducer is
     * specified, then perSeriesAligner must be specified and not equal
     * ALIGN_NONE and alignmentPeriod must be specified; otherwise, an error is
     * returned.
     */
    'aggregation.crossSeriesReducer'?: string;
    /**
     * The set of fields to preserve when crossSeriesReducer is specified. The
     * groupByFields determine how the time series are partitioned into subsets
     * prior to applying the aggregation function. Each subset contains time
     * series that have the same value for each of the grouping fields. Each
     * individual time series is a member of exactly one subset. The
     * crossSeriesReducer is applied to each subset of time series. It is not
     * possible to reduce across different resource types, so this field
     * implicitly contains resource.type. Fields not specified in groupByFields
     * are aggregated away. If groupByFields is not specified and all the time
     * series have the same resource type, then the time series are aggregated
     * into a single output time series. If crossSeriesReducer is not defined,
     * this field is ignored.
     */
    'aggregation.groupByFields'?: string;
    /**
     * The approach to be used to align individual time series. Not all
     * alignment functions may be applied to all time series, depending on the
     * metric type and value type of the original time series. Alignment may
     * change the metric type or the value type of the time series.Time series
     * data must be aligned in order to perform cross-time series reduction. If
     * crossSeriesReducer is specified, then perSeriesAligner must be specified
     * and not equal ALIGN_NONE and alignmentPeriod must be specified;
     * otherwise, an error is returned.
     */
    'aggregation.perSeriesAligner'?: string;
    /**
     * A monitoring filter that specifies which time series should be returned.
     * The filter must specify a single metric type, and can additionally
     * specify metric labels and other information. For example: metric.type =
     * "compute.googleapis.com/instance/cpu/usage_time" AND
     * metric.label.instance_name = "my-instance-name"
     */
    filter?: string;
    /**
     * Required. The end of the time interval.
     */
    'interval.endTime'?: string;
    /**
     * Optional. The beginning of the time interval. The default value for the
     * start time is the end time. The start time must not be later than the end
     * time.
     */
    'interval.startTime'?: string;
    /**
     * The project on which to execute the request. The format is
     * "projects/{project_id_or_number}".
     */
    name?: string;
    /**
     * Unsupported: must be left blank. The points in each time series are
     * returned in reverse time order.
     */
    orderBy?: string;
    /**
     * A positive number that is the maximum number of results to return. When
     * view field sets to FULL, it limits the number of Points server will
     * return; if view field is HEADERS, it limits the number of TimeSeries
     * server will return.
     */
    pageSize?: number;
    /**
     * If this field is not empty then it must contain the nextPageToken value
     * returned by a previous call to this method. Using this field causes the
     * method to return additional results from the previous method call.
     */
    pageToken?: string;
    /**
     * Specifies which information is returned about the time series.
     */
    view?: string;
  }


  export class Resource$Projects$Uptimecheckconfigs {
    root: Monitoring;
    constructor(root: Monitoring) {
      this.root = root;
      this.getRoot.bind(this);
    }

    getRoot() {
      return this.root;
    }


    /**
     * monitoring.projects.uptimeCheckConfigs.create
     * @desc Creates a new uptime check configuration.
     * @alias monitoring.projects.uptimeCheckConfigs.create
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.parent The project in which to create the uptime check. The format  is projects/[PROJECT_ID].
     * @param {().UptimeCheckConfig} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    create(
        params?: Params$Resource$Projects$Uptimecheckconfigs$Create,
        options?: MethodOptions): AxiosPromise<Schema$UptimeCheckConfig>;
    create(
        params: Params$Resource$Projects$Uptimecheckconfigs$Create,
        options: MethodOptions|BodyResponseCallback<Schema$UptimeCheckConfig>,
        callback: BodyResponseCallback<Schema$UptimeCheckConfig>): void;
    create(
        params: Params$Resource$Projects$Uptimecheckconfigs$Create,
        callback: BodyResponseCallback<Schema$UptimeCheckConfig>): void;
    create(callback: BodyResponseCallback<Schema$UptimeCheckConfig>): void;
    create(
        paramsOrCallback?: Params$Resource$Projects$Uptimecheckconfigs$Create|
        BodyResponseCallback<Schema$UptimeCheckConfig>,
        optionsOrCallback?: MethodOptions|
        BodyResponseCallback<Schema$UptimeCheckConfig>,
        callback?: BodyResponseCallback<Schema$UptimeCheckConfig>):
        void|AxiosPromise<Schema$UptimeCheckConfig> {
      let params = (paramsOrCallback || {}) as
          Params$Resource$Projects$Uptimecheckconfigs$Create;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Uptimecheckconfigs$Create;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://monitoring.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl + '/v3/{+parent}/uptimeCheckConfigs')
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
        createAPIRequest<Schema$UptimeCheckConfig>(parameters, callback);
      } else {
        return createAPIRequest<Schema$UptimeCheckConfig>(parameters);
      }
    }


    /**
     * monitoring.projects.uptimeCheckConfigs.delete
     * @desc Deletes an uptime check configuration. Note that this method will
     * fail if the uptime check configuration is referenced by an alert policy
     * or other dependent configs that would be rendered invalid by the
     * deletion.
     * @alias monitoring.projects.uptimeCheckConfigs.delete
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.name The uptime check configuration to delete. The format  is projects/[PROJECT_ID]/uptimeCheckConfigs/[UPTIME_CHECK_ID].
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    delete(
        params?: Params$Resource$Projects$Uptimecheckconfigs$Delete,
        options?: MethodOptions): AxiosPromise<Schema$Empty>;
    delete(
        params: Params$Resource$Projects$Uptimecheckconfigs$Delete,
        options: MethodOptions|BodyResponseCallback<Schema$Empty>,
        callback: BodyResponseCallback<Schema$Empty>): void;
    delete(
        params: Params$Resource$Projects$Uptimecheckconfigs$Delete,
        callback: BodyResponseCallback<Schema$Empty>): void;
    delete(callback: BodyResponseCallback<Schema$Empty>): void;
    delete(
        paramsOrCallback?: Params$Resource$Projects$Uptimecheckconfigs$Delete|
        BodyResponseCallback<Schema$Empty>,
        optionsOrCallback?: MethodOptions|BodyResponseCallback<Schema$Empty>,
        callback?: BodyResponseCallback<Schema$Empty>):
        void|AxiosPromise<Schema$Empty> {
      let params = (paramsOrCallback || {}) as
          Params$Resource$Projects$Uptimecheckconfigs$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Uptimecheckconfigs$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://monitoring.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl + '/v3/{+name}').replace(/([^:]\/)\/+/g, '$1'),
              method: 'DELETE'
            },
            options),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<Schema$Empty>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Empty>(parameters);
      }
    }


    /**
     * monitoring.projects.uptimeCheckConfigs.get
     * @desc Gets a single uptime check configuration.
     * @alias monitoring.projects.uptimeCheckConfigs.get
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.name The uptime check configuration to retrieve. The format  is projects/[PROJECT_ID]/uptimeCheckConfigs/[UPTIME_CHECK_ID].
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    get(params?: Params$Resource$Projects$Uptimecheckconfigs$Get,
        options?: MethodOptions): AxiosPromise<Schema$UptimeCheckConfig>;
    get(params: Params$Resource$Projects$Uptimecheckconfigs$Get,
        options: MethodOptions|BodyResponseCallback<Schema$UptimeCheckConfig>,
        callback: BodyResponseCallback<Schema$UptimeCheckConfig>): void;
    get(params: Params$Resource$Projects$Uptimecheckconfigs$Get,
        callback: BodyResponseCallback<Schema$UptimeCheckConfig>): void;
    get(callback: BodyResponseCallback<Schema$UptimeCheckConfig>): void;
    get(paramsOrCallback?: Params$Resource$Projects$Uptimecheckconfigs$Get|
        BodyResponseCallback<Schema$UptimeCheckConfig>,
        optionsOrCallback?: MethodOptions|
        BodyResponseCallback<Schema$UptimeCheckConfig>,
        callback?: BodyResponseCallback<Schema$UptimeCheckConfig>):
        void|AxiosPromise<Schema$UptimeCheckConfig> {
      let params = (paramsOrCallback || {}) as
          Params$Resource$Projects$Uptimecheckconfigs$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Uptimecheckconfigs$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://monitoring.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl + '/v3/{+name}').replace(/([^:]\/)\/+/g, '$1'),
              method: 'GET'
            },
            options),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<Schema$UptimeCheckConfig>(parameters, callback);
      } else {
        return createAPIRequest<Schema$UptimeCheckConfig>(parameters);
      }
    }


    /**
     * monitoring.projects.uptimeCheckConfigs.list
     * @desc Lists the existing valid uptime check configurations for the
     * project, leaving out any invalid configurations.
     * @alias monitoring.projects.uptimeCheckConfigs.list
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {integer=} params.pageSize The maximum number of results to return in a single response. The server may further constrain the maximum number of results returned in a single page. If the page_size is <=0, the server will decide the number of results to be returned.
     * @param {string=} params.pageToken If this field is not empty then it must contain the nextPageToken value returned by a previous call to this method. Using this field causes the method to return more results from the previous method call.
     * @param {string} params.parent The project whose uptime check configurations are listed. The format  is projects/[PROJECT_ID].
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list(
        params?: Params$Resource$Projects$Uptimecheckconfigs$List,
        options?: MethodOptions):
        AxiosPromise<Schema$ListUptimeCheckConfigsResponse>;
    list(
        params: Params$Resource$Projects$Uptimecheckconfigs$List,
        options: MethodOptions|
        BodyResponseCallback<Schema$ListUptimeCheckConfigsResponse>,
        callback: BodyResponseCallback<Schema$ListUptimeCheckConfigsResponse>):
        void;
    list(
        params: Params$Resource$Projects$Uptimecheckconfigs$List,
        callback: BodyResponseCallback<Schema$ListUptimeCheckConfigsResponse>):
        void;
    list(callback: BodyResponseCallback<Schema$ListUptimeCheckConfigsResponse>):
        void;
    list(
        paramsOrCallback?: Params$Resource$Projects$Uptimecheckconfigs$List|
        BodyResponseCallback<Schema$ListUptimeCheckConfigsResponse>,
        optionsOrCallback?: MethodOptions|
        BodyResponseCallback<Schema$ListUptimeCheckConfigsResponse>,
        callback?: BodyResponseCallback<Schema$ListUptimeCheckConfigsResponse>):
        void|AxiosPromise<Schema$ListUptimeCheckConfigsResponse> {
      let params = (paramsOrCallback || {}) as
          Params$Resource$Projects$Uptimecheckconfigs$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Uptimecheckconfigs$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://monitoring.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl + '/v3/{+parent}/uptimeCheckConfigs')
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
        createAPIRequest<Schema$ListUptimeCheckConfigsResponse>(
            parameters, callback);
      } else {
        return createAPIRequest<Schema$ListUptimeCheckConfigsResponse>(
            parameters);
      }
    }


    /**
     * monitoring.projects.uptimeCheckConfigs.patch
     * @desc Updates an uptime check configuration. You can either replace the
     * entire configuration with a new one or replace only certain fields in the
     * current configuration by specifying the fields to be updated via
     * "updateMask". Returns the updated configuration.
     * @alias monitoring.projects.uptimeCheckConfigs.patch
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.name A unique resource name for this UptimeCheckConfig. The format is:projects/[PROJECT_ID]/uptimeCheckConfigs/[UPTIME_CHECK_ID].This field should be omitted when creating the uptime check configuration; on create, the resource name is assigned by the server and included in the response.
     * @param {string=} params.updateMask Optional. If present, only the listed fields in the current uptime check configuration are updated with values from the new configuration. If this field is empty, then the current configuration is completely replaced with the new configuration.
     * @param {().UptimeCheckConfig} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    patch(
        params?: Params$Resource$Projects$Uptimecheckconfigs$Patch,
        options?: MethodOptions): AxiosPromise<Schema$UptimeCheckConfig>;
    patch(
        params: Params$Resource$Projects$Uptimecheckconfigs$Patch,
        options: MethodOptions|BodyResponseCallback<Schema$UptimeCheckConfig>,
        callback: BodyResponseCallback<Schema$UptimeCheckConfig>): void;
    patch(
        params: Params$Resource$Projects$Uptimecheckconfigs$Patch,
        callback: BodyResponseCallback<Schema$UptimeCheckConfig>): void;
    patch(callback: BodyResponseCallback<Schema$UptimeCheckConfig>): void;
    patch(
        paramsOrCallback?: Params$Resource$Projects$Uptimecheckconfigs$Patch|
        BodyResponseCallback<Schema$UptimeCheckConfig>,
        optionsOrCallback?: MethodOptions|
        BodyResponseCallback<Schema$UptimeCheckConfig>,
        callback?: BodyResponseCallback<Schema$UptimeCheckConfig>):
        void|AxiosPromise<Schema$UptimeCheckConfig> {
      let params = (paramsOrCallback || {}) as
          Params$Resource$Projects$Uptimecheckconfigs$Patch;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Uptimecheckconfigs$Patch;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://monitoring.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl + '/v3/{+name}').replace(/([^:]\/)\/+/g, '$1'),
              method: 'PATCH'
            },
            options),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<Schema$UptimeCheckConfig>(parameters, callback);
      } else {
        return createAPIRequest<Schema$UptimeCheckConfig>(parameters);
      }
    }
  }

  export interface Params$Resource$Projects$Uptimecheckconfigs$Create {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * The project in which to create the uptime check. The format  is
     * projects/[PROJECT_ID].
     */
    parent?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$UptimeCheckConfig;
  }
  export interface Params$Resource$Projects$Uptimecheckconfigs$Delete {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * The uptime check configuration to delete. The format  is
     * projects/[PROJECT_ID]/uptimeCheckConfigs/[UPTIME_CHECK_ID].
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Uptimecheckconfigs$Get {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * The uptime check configuration to retrieve. The format  is
     * projects/[PROJECT_ID]/uptimeCheckConfigs/[UPTIME_CHECK_ID].
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Uptimecheckconfigs$List {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * The maximum number of results to return in a single response. The server
     * may further constrain the maximum number of results returned in a single
     * page. If the page_size is <=0, the server will decide the number of
     * results to be returned.
     */
    pageSize?: number;
    /**
     * If this field is not empty then it must contain the nextPageToken value
     * returned by a previous call to this method. Using this field causes the
     * method to return more results from the previous method call.
     */
    pageToken?: string;
    /**
     * The project whose uptime check configurations are listed. The format  is
     * projects/[PROJECT_ID].
     */
    parent?: string;
  }
  export interface Params$Resource$Projects$Uptimecheckconfigs$Patch {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * A unique resource name for this UptimeCheckConfig. The format
     * is:projects/[PROJECT_ID]/uptimeCheckConfigs/[UPTIME_CHECK_ID].This field
     * should be omitted when creating the uptime check configuration; on
     * create, the resource name is assigned by the server and included in the
     * response.
     */
    name?: string;
    /**
     * Optional. If present, only the listed fields in the current uptime check
     * configuration are updated with values from the new configuration. If this
     * field is empty, then the current configuration is completely replaced
     * with the new configuration.
     */
    updateMask?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$UptimeCheckConfig;
  }



  export class Resource$Uptimecheckips {
    root: Monitoring;
    constructor(root: Monitoring) {
      this.root = root;
      this.getRoot.bind(this);
    }

    getRoot() {
      return this.root;
    }


    /**
     * monitoring.uptimeCheckIps.list
     * @desc Returns the list of IPs that checkers run from
     * @alias monitoring.uptimeCheckIps.list
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {integer=} params.pageSize The maximum number of results to return in a single response. The server may further constrain the maximum number of results returned in a single page. If the page_size is <=0, the server will decide the number of results to be returned. NOTE: this field is not yet implemented
     * @param {string=} params.pageToken If this field is not empty then it must contain the nextPageToken value returned by a previous call to this method. Using this field causes the method to return more results from the previous method call. NOTE: this field is not yet implemented
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list(params?: Params$Resource$Uptimecheckips$List, options?: MethodOptions):
        AxiosPromise<Schema$ListUptimeCheckIpsResponse>;
    list(
        params: Params$Resource$Uptimecheckips$List,
        options: MethodOptions|
        BodyResponseCallback<Schema$ListUptimeCheckIpsResponse>,
        callback: BodyResponseCallback<Schema$ListUptimeCheckIpsResponse>):
        void;
    list(
        params: Params$Resource$Uptimecheckips$List,
        callback: BodyResponseCallback<Schema$ListUptimeCheckIpsResponse>):
        void;
    list(callback: BodyResponseCallback<Schema$ListUptimeCheckIpsResponse>):
        void;
    list(
        paramsOrCallback?: Params$Resource$Uptimecheckips$List|
        BodyResponseCallback<Schema$ListUptimeCheckIpsResponse>,
        optionsOrCallback?: MethodOptions|
        BodyResponseCallback<Schema$ListUptimeCheckIpsResponse>,
        callback?: BodyResponseCallback<Schema$ListUptimeCheckIpsResponse>):
        void|AxiosPromise<Schema$ListUptimeCheckIpsResponse> {
      let params =
          (paramsOrCallback || {}) as Params$Resource$Uptimecheckips$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Uptimecheckips$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://monitoring.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl + '/v3/uptimeCheckIps')
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
        createAPIRequest<Schema$ListUptimeCheckIpsResponse>(
            parameters, callback);
      } else {
        return createAPIRequest<Schema$ListUptimeCheckIpsResponse>(parameters);
      }
    }
  }

  export interface Params$Resource$Uptimecheckips$List {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * The maximum number of results to return in a single response. The server
     * may further constrain the maximum number of results returned in a single
     * page. If the page_size is <=0, the server will decide the number of
     * results to be returned. NOTE: this field is not yet implemented
     */
    pageSize?: number;
    /**
     * If this field is not empty then it must contain the nextPageToken value
     * returned by a previous call to this method. Using this field causes the
     * method to return more results from the previous method call. NOTE: this
     * field is not yet implemented
     */
    pageToken?: string;
  }
}
