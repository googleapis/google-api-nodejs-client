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
 * Google Service Control API
 *
 * Google Service Control provides control plane functionality to managed
 * services, such as logging, monitoring, and status checks.
 *
 * @example
 * const google = require('googleapis');
 * const servicecontrol = google.servicecontrol('v1');
 *
 * @namespace servicecontrol
 * @type {Function}
 * @version v1
 * @variation v1
 * @param {object=} options Options for Servicecontrol
 */
export class Servicecontrol {
  _options: GlobalOptions;
  google: GoogleApis;
  root = this;

  services: Resource$Services;

  constructor(options: GlobalOptions, google: GoogleApis) {
    this._options = options || {};
    this.google = google;
    this.getRoot.bind(this);

    this.services = new Resource$Services(this);
  }

  getRoot() {
    return this.root;
  }
}

export interface Schema$AllocateInfo {
  /**
   * A list of label keys that were unused by the server in processing the
   * request. Thus, for similar requests repeated in a certain future time
   * window, the caller can choose to ignore these labels in the requests to
   * achieve better client-side cache hits and quota aggregation.
   */
  unusedArguments: string[];
}
/**
 * Request message for the AllocateQuota method.
 */
export interface Schema$AllocateQuotaRequest {
  /**
   * Operation that describes the quota allocation.
   */
  allocateOperation: Schema$QuotaOperation;
  /**
   * Specifies which version of service configuration should be used to process
   * the request. If unspecified or no matching version can be found, the latest
   * one will be used.
   */
  serviceConfigId: string;
}
/**
 * Response message for the AllocateQuota method.
 */
export interface Schema$AllocateQuotaResponse {
  /**
   * Indicates the decision of the allocate.
   */
  allocateErrors: Schema$QuotaError[];
  /**
   * WARNING: DO NOT use this field until this warning message is removed.
   */
  allocateInfo: Schema$AllocateInfo;
  /**
   * The same operation_id value used in the AllocateQuotaRequest. Used for
   * logging and diagnostics purposes.
   */
  operationId: string;
  /**
   * Quota metrics to indicate the result of allocation. Depending on the
   * request, one or more of the following metrics will be included:  1. Per
   * quota group or per quota metric incremental usage will be specified using
   * the following delta metric :
   * &quot;serviceruntime.googleapis.com/api/consumer/quota_used_count&quot;  2.
   * The quota limit reached condition will be specified using the following
   * boolean metric :   &quot;serviceruntime.googleapis.com/quota/exceeded&quot;
   */
  quotaMetrics: Schema$MetricValueSet[];
  /**
   * ID of the actual config used to process the request.
   */
  serviceConfigId: string;
}
/**
 * Common audit log format for Google Cloud Platform API operations.
 */
export interface Schema$AuditLog {
  /**
   * Authentication information.
   */
  authenticationInfo: Schema$AuthenticationInfo;
  /**
   * Authorization information. If there are multiple resources or permissions
   * involved, then there is one AuthorizationInfo element for each {resource,
   * permission} tuple.
   */
  authorizationInfo: Schema$AuthorizationInfo[];
  /**
   * Other service-specific data about the request, response, and other
   * information associated with the current audited event.
   */
  metadata: any;
  /**
   * The name of the service method or operation. For API calls, this should be
   * the name of the API method. For example,
   * &quot;google.datastore.v1.Datastore.RunQuery&quot;
   * &quot;google.logging.v1.LoggingService.DeleteLog&quot;
   */
  methodName: string;
  /**
   * The number of items returned from a List or Query API method, if
   * applicable.
   */
  numResponseItems: string;
  /**
   * The operation request. This may not include all request parameters, such as
   * those that are too large, privacy-sensitive, or duplicated elsewhere in the
   * log record. It should never include user-generated data, such as file
   * contents. When the JSON object represented here has a proto equivalent, the
   * proto name will be indicated in the `@type` property.
   */
  request: any;
  /**
   * Metadata about the operation.
   */
  requestMetadata: Schema$RequestMetadata;
  /**
   * The resource or collection that is the target of the operation. The name is
   * a scheme-less URI, not including the API service name. For example:
   * &quot;shelves/SHELF_ID/books&quot;
   * &quot;shelves/SHELF_ID/books/BOOK_ID&quot;
   */
  resourceName: string;
  /**
   * The operation response. This may not include all response elements, such as
   * those that are too large, privacy-sensitive, or duplicated elsewhere in the
   * log record. It should never include user-generated data, such as file
   * contents. When the JSON object represented here has a proto equivalent, the
   * proto name will be indicated in the `@type` property.
   */
  response: any;
  /**
   * Deprecated, use `metadata` field instead. Other service-specific data about
   * the request, response, and other activities.
   */
  serviceData: any;
  /**
   * The name of the API service performing the operation. For example,
   * `&quot;datastore.googleapis.com&quot;`.
   */
  serviceName: string;
  /**
   * The status of the overall operation.
   */
  status: Schema$Status;
}
/**
 * Authentication information for the operation.
 */
export interface Schema$AuthenticationInfo {
  /**
   * The authority selector specified by the requestor, if any. It is not
   * guaranteed that the principal was allowed to use this authority.
   */
  authoritySelector: string;
  /**
   * The email address of the authenticated user (or service account on behalf
   * of third party principal) making the request. For privacy reasons, the
   * principal email address is redacted for all read-only operations that fail
   * with a &quot;permission denied&quot; error.
   */
  principalEmail: string;
  /**
   * The third party identification (if any) of the authenticated user making
   * the request. When the JSON object represented here has a proto equivalent,
   * the proto name will be indicated in the `@type` property.
   */
  thirdPartyPrincipal: any;
}
/**
 * Authorization information for the operation.
 */
export interface Schema$AuthorizationInfo {
  /**
   * Whether or not authorization for `resource` and `permission` was granted.
   */
  granted: boolean;
  /**
   * The required IAM permission.
   */
  permission: string;
  /**
   * The resource being accessed, as a REST-style string. For example:
   * bigquery.googleapis.com/projects/PROJECTID/datasets/DATASETID
   */
  resource: string;
}
/**
 * Defines the errors to be returned in
 * google.api.servicecontrol.v1.CheckResponse.check_errors.
 */
export interface Schema$CheckError {
  /**
   * The error code.
   */
  code: string;
  /**
   * Free-form text providing details on the error cause of the error.
   */
  detail: string;
  /**
   * Subject to whom this error applies. See the specific code enum for more
   * details on this field. For example:     - “project:&lt;project-id or
   * project-number&gt;”     - “folder:&lt;folder-id&gt;”     -
   * “organization:&lt;organization-id&gt;”
   */
  subject: string;
}
/**
 * Contains additional information about the check operation.
 */
export interface Schema$CheckInfo {
  /**
   * Consumer info of this check.
   */
  consumerInfo: Schema$ConsumerInfo;
  /**
   * A list of fields and label keys that are ignored by the server. The client
   * doesn&#39;t need to send them for following requests to improve performance
   * and allow better aggregation.
   */
  unusedArguments: string[];
}
/**
 * Request message for the Check method.
 */
export interface Schema$CheckRequest {
  /**
   * The operation to be checked.
   */
  operation: Schema$Operation;
  /**
   * Requests the project settings to be returned as part of the check response.
   */
  requestProjectSettings: boolean;
  /**
   * Specifies which version of service configuration should be used to process
   * the request.  If unspecified or no matching version can be found, the
   * latest one will be used.
   */
  serviceConfigId: string;
  /**
   * Indicates if service activation check should be skipped for this request.
   * Default behavior is to perform the check and apply relevant quota.
   */
  skipActivationCheck: boolean;
}
/**
 * Response message for the Check method.
 */
export interface Schema$CheckResponse {
  /**
   * Indicate the decision of the check.  If no check errors are present, the
   * service should process the operation. Otherwise the service should use the
   * list of errors to determine the appropriate action.
   */
  checkErrors: Schema$CheckError[];
  /**
   * Feedback data returned from the server during processing a Check request.
   */
  checkInfo: Schema$CheckInfo;
  /**
   * The same operation_id value used in the CheckRequest. Used for logging and
   * diagnostics purposes.
   */
  operationId: string;
  /**
   * Quota information for the check request associated with this response.
   */
  quotaInfo: Schema$QuotaInfo;
  /**
   * The actual config id used to process the request.
   */
  serviceConfigId: string;
}
/**
 * `ConsumerInfo` provides information about the consumer project.
 */
export interface Schema$ConsumerInfo {
  /**
   * The Google cloud project number, e.g. 1234567890. A value of 0 indicates no
   * project number is found.
   */
  projectNumber: string;
}
/**
 * Distribution represents a frequency distribution of double-valued sample
 * points. It contains the size of the population of sample points plus
 * additional optional information:    - the arithmetic mean of the samples   -
 * the minimum and maximum of the samples   - the sum-squared-deviation of the
 * samples, used to compute variance   - a histogram of the values of the sample
 * points
 */
export interface Schema$Distribution {
  /**
   * The number of samples in each histogram bucket. `bucket_counts` are
   * optional. If present, they must sum to the `count` value.  The buckets are
   * defined below in `bucket_option`. There are N buckets. `bucket_counts[0]`
   * is the number of samples in the underflow bucket. `bucket_counts[1]` to
   * `bucket_counts[N-1]` are the numbers of samples in each of the finite
   * buckets. And `bucket_counts[N] is the number of samples in the overflow
   * bucket. See the comments of `bucket_option` below for more details.  Any
   * suffix of trailing zeros may be omitted.
   */
  bucketCounts: string[];
  /**
   * The total number of samples in the distribution. Must be &gt;= 0.
   */
  count: string;
  /**
   * Buckets with arbitrary user-provided width.
   */
  explicitBuckets: Schema$ExplicitBuckets;
  /**
   * Buckets with exponentially growing width.
   */
  exponentialBuckets: Schema$ExponentialBuckets;
  /**
   * Buckets with constant width.
   */
  linearBuckets: Schema$LinearBuckets;
  /**
   * The maximum of the population of values. Ignored if `count` is zero.
   */
  maximum: number;
  /**
   * The arithmetic mean of the samples in the distribution. If `count` is zero
   * then this field must be zero.
   */
  mean: number;
  /**
   * The minimum of the population of values. Ignored if `count` is zero.
   */
  minimum: number;
  /**
   * The sum of squared deviations from the mean:   Sum[i=1..count]((x_i -
   * mean)^2) where each x_i is a sample values. If `count` is zero then this
   * field must be zero, otherwise validation of the request fails.
   */
  sumOfSquaredDeviation: number;
}
/**
 * Request message for QuotaController.EndReconciliation.
 */
export interface Schema$EndReconciliationRequest {
  /**
   * Operation that describes the quota reconciliation.
   */
  reconciliationOperation: Schema$QuotaOperation;
  /**
   * Specifies which version of service configuration should be used to process
   * the request. If unspecified or no matching version can be found, the latest
   * one will be used.
   */
  serviceConfigId: string;
}
/**
 * Response message for QuotaController.EndReconciliation.
 */
export interface Schema$EndReconciliationResponse {
  /**
   * The same operation_id value used in the EndReconciliationRequest. Used for
   * logging and diagnostics purposes.
   */
  operationId: string;
  /**
   * Metric values as tracked by One Platform before the adjustment was made.
   * The following metrics will be included:  1. Per quota metric total usage
   * will be specified using the following gauge metric:
   * &quot;serviceruntime.googleapis.com/allocation/consumer/quota_used_count&quot;
   * 2. Value for each quota limit associated with the metrics will be specified
   * using the following gauge metric:
   * &quot;serviceruntime.googleapis.com/quota/limit&quot;  3. Delta value of
   * the usage after the reconciliation for limits associated with the metrics
   * will be specified using the following metric:
   * &quot;serviceruntime.googleapis.com/allocation/reconciliation_delta&quot;
   * The delta value is defined as:   new_usage_from_client -
   * existing_value_in_spanner. This metric is not defined in
   * serviceruntime.yaml or in Cloud Monarch. This metric is meant for
   * callers&#39; use only. Since this metric is not defined in the monitoring
   * backend, reporting on this metric will result in an error.
   */
  quotaMetrics: Schema$MetricValueSet[];
  /**
   * Indicates the decision of the reconciliation end.
   */
  reconciliationErrors: Schema$QuotaError[];
  /**
   * ID of the actual config used to process the request.
   */
  serviceConfigId: string;
}
/**
 * Describing buckets with arbitrary user-provided width.
 */
export interface Schema$ExplicitBuckets {
  /**
   * &#39;bound&#39; is a list of strictly increasing boundaries between
   * buckets. Note that a list of length N-1 defines N buckets because of
   * fenceposting. See comments on `bucket_options` for details.  The i&#39;th
   * finite bucket covers the interval   [bound[i-1], bound[i]) where i ranges
   * from 1 to bound_size() - 1. Note that there are no finite buckets at all if
   * &#39;bound&#39; only contains a single element; in that special case the
   * single bound defines the boundary between the underflow and overflow
   * buckets.  bucket number                   lower bound    upper bound  i ==
   * 0 (underflow)              -inf           bound[i]  0 &lt; i &lt;
   * bound_size()            bound[i-1]     bound[i]  i == bound_size()
   * (overflow)    bound[i-1]     +inf
   */
  bounds: number[];
}
/**
 * Describing buckets with exponentially growing width.
 */
export interface Schema$ExponentialBuckets {
  /**
   * The i&#39;th exponential bucket covers the interval   [scale *
   * growth_factor^(i-1), scale * growth_factor^i) where i ranges from 1 to
   * num_finite_buckets inclusive. Must be larger than 1.0.
   */
  growthFactor: number;
  /**
   * The number of finite buckets. With the underflow and overflow buckets, the
   * total number of buckets is `num_finite_buckets` + 2. See comments on
   * `bucket_options` for details.
   */
  numFiniteBuckets: number;
  /**
   * The i&#39;th exponential bucket covers the interval   [scale *
   * growth_factor^(i-1), scale * growth_factor^i) where i ranges from 1 to
   * num_finite_buckets inclusive. Must be &gt; 0.
   */
  scale: number;
}
/**
 * Describing buckets with constant width.
 */
export interface Schema$LinearBuckets {
  /**
   * The number of finite buckets. With the underflow and overflow buckets, the
   * total number of buckets is `num_finite_buckets` + 2. See comments on
   * `bucket_options` for details.
   */
  numFiniteBuckets: number;
  /**
   * The i&#39;th linear bucket covers the interval   [offset + (i-1) * width,
   * offset + i * width) where i ranges from 1 to num_finite_buckets, inclusive.
   */
  offset: number;
  /**
   * The i&#39;th linear bucket covers the interval   [offset + (i-1) * width,
   * offset + i * width) where i ranges from 1 to num_finite_buckets, inclusive.
   * Must be strictly positive.
   */
  width: number;
}
/**
 * An individual log entry.
 */
export interface Schema$LogEntry {
  /**
   * A unique ID for the log entry used for deduplication. If omitted, the
   * implementation will generate one based on operation_id.
   */
  insertId: string;
  /**
   * A set of user-defined (key, value) data that provides additional
   * information about the log entry.
   */
  labels: any;
  /**
   * Required. The log to which this log entry belongs. Examples:
   * `&quot;syslog&quot;`, `&quot;book_log&quot;`.
   */
  name: string;
  /**
   * The log entry payload, represented as a protocol buffer that is expressed
   * as a JSON object. The only accepted type currently is AuditLog.
   */
  protoPayload: any;
  /**
   * The severity of the log entry. The default value is `LogSeverity.DEFAULT`.
   */
  severity: string;
  /**
   * The log entry payload, represented as a structure that is expressed as a
   * JSON object.
   */
  structPayload: any;
  /**
   * The log entry payload, represented as a Unicode string (UTF-8).
   */
  textPayload: string;
  /**
   * The time the event described by the log entry occurred. If omitted,
   * defaults to operation start time.
   */
  timestamp: string;
}
/**
 * Represents a single metric value.
 */
export interface Schema$MetricValue {
  /**
   * A boolean value.
   */
  boolValue: boolean;
  /**
   * A distribution value.
   */
  distributionValue: Schema$Distribution;
  /**
   * A double precision floating point value.
   */
  doubleValue: number;
  /**
   * The end of the time period over which this metric value&#39;s measurement
   * applies.
   */
  endTime: string;
  /**
   * A signed 64-bit integer value.
   */
  int64Value: string;
  /**
   * The labels describing the metric value. See comments on
   * google.api.servicecontrol.v1.Operation.labels for the overriding
   * relationship.
   */
  labels: any;
  /**
   * A money value.
   */
  moneyValue: Schema$Money;
  /**
   * The start of the time period over which this metric value&#39;s measurement
   * applies. The time period has different semantics for different metric types
   * (cumulative, delta, and gauge). See the metric definition documentation in
   * the service configuration for details.
   */
  startTime: string;
  /**
   * A text string value.
   */
  stringValue: string;
}
/**
 * Represents a set of metric values in the same metric. Each metric value in
 * the set should have a unique combination of start time, end time, and label
 * values.
 */
export interface Schema$MetricValueSet {
  /**
   * The metric name defined in the service configuration.
   */
  metricName: string;
  /**
   * The values in this metric.
   */
  metricValues: Schema$MetricValue[];
}
/**
 * Represents an amount of money with its currency type.
 */
export interface Schema$Money {
  /**
   * The 3-letter currency code defined in ISO 4217.
   */
  currencyCode: string;
  /**
   * Number of nano (10^-9) units of the amount. The value must be between
   * -999,999,999 and +999,999,999 inclusive. If `units` is positive, `nanos`
   * must be positive or zero. If `units` is zero, `nanos` can be positive,
   * zero, or negative. If `units` is negative, `nanos` must be negative or
   * zero. For example $-1.75 is represented as `units`=-1 and
   * `nanos`=-750,000,000.
   */
  nanos: number;
  /**
   * The whole units of the amount. For example if `currencyCode` is
   * `&quot;USD&quot;`, then 1 unit is one US dollar.
   */
  units: string;
}
/**
 * Represents information regarding an operation.
 */
export interface Schema$Operation {
  /**
   * Identity of the consumer who is using the service. This field should be
   * filled in for the operations initiated by a consumer, but not for
   * service-initiated operations that are not related to a specific consumer.
   * This can be in one of the following formats:   project:&lt;project_id&gt;,
   * project_number:&lt;project_number&gt;,   api_key:&lt;api_key&gt;.
   */
  consumerId: string;
  /**
   * End time of the operation. Required when the operation is used in
   * ServiceController.Report, but optional when the operation is used in
   * ServiceController.Check.
   */
  endTime: string;
  /**
   * DO NOT USE. This is an experimental field.
   */
  importance: string;
  /**
   * Labels describing the operation. Only the following labels are allowed:  -
   * Labels describing monitored resources as defined in   the service
   * configuration. - Default labels of metric values. When specified, labels
   * defined in the   metric value override these default. - The following
   * labels defined by Google Cloud Platform:     -
   * `cloud.googleapis.com/location` describing the location where the operation
   * happened,     - `servicecontrol.googleapis.com/user_agent` describing the
   * user agent        of the API request,     -
   * `servicecontrol.googleapis.com/service_agent` describing the service used
   * to handle the API request (e.g. ESP),     -
   * `servicecontrol.googleapis.com/platform` describing the platform where the
   * API is served, such as App Engine, Compute Engine, or        Kubernetes
   * Engine.
   */
  labels: any;
  /**
   * Represents information to be logged.
   */
  logEntries: Schema$LogEntry[];
  /**
   * Represents information about this operation. Each MetricValueSet
   * corresponds to a metric defined in the service configuration. The data type
   * used in the MetricValueSet must agree with the data type specified in the
   * metric definition.  Within a single operation, it is not allowed to have
   * more than one MetricValue instances that have the same metric names and
   * identical label value combinations. If a request has such duplicated
   * MetricValue instances, the entire request is rejected with an invalid
   * argument error.
   */
  metricValueSets: Schema$MetricValueSet[];
  /**
   * Identity of the operation. This must be unique within the scope of the
   * service that generated the operation. If the service calls Check() and
   * Report() on the same operation, the two calls should carry the same id.
   * UUID version 4 is recommended, though not required. In scenarios where an
   * operation is computed from existing information and an idempotent id is
   * desirable for deduplication purpose, UUID version 5 is recommended. See RFC
   * 4122 for details.
   */
  operationId: string;
  /**
   * Fully qualified name of the operation. Reserved for future use.
   */
  operationName: string;
  /**
   * Represents the properties needed for quota check. Applicable only if this
   * operation is for a quota check request. If this is not specified, no quota
   * check will be performed.
   */
  quotaProperties: Schema$QuotaProperties;
  /**
   * DO NOT USE. This field is deprecated, use &quot;resources&quot; field
   * instead. The resource name of the parent of a resource in the resource
   * hierarchy.  This can be in one of the following formats:     -
   * “projects/&lt;project-id or project-number&gt;”     -
   * “folders/&lt;folder-id&gt;”     - “organizations/&lt;organization-id&gt;”
   */
  resourceContainer: string;
  /**
   * The resources that are involved in the operation.
   */
  resources: Schema$ResourceInfo[];
  /**
   * Required. Start time of the operation.
   */
  startTime: string;
  /**
   * User defined labels for the resource that this operation is associated
   * with. Only a combination of 1000 user labels per consumer project are
   * allowed.
   */
  userLabels: any;
}
/**
 * Represents error information for QuotaOperation.
 */
export interface Schema$QuotaError {
  /**
   * Error code.
   */
  code: string;
  /**
   * Free-form text that provides details on the cause of the error.
   */
  description: string;
  /**
   * Subject to whom this error applies. See the specific enum for more details
   * on this field. For example, &quot;clientip:&lt;ip address of
   * client&gt;&quot; or &quot;project:&lt;Google developer project
   * id&gt;&quot;.
   */
  subject: string;
}
/**
 * Contains the quota information for a quota check response.
 */
export interface Schema$QuotaInfo {
  /**
   * Quota Metrics that have exceeded quota limits. For QuotaGroup-based quota,
   * this is QuotaGroup.name For QuotaLimit-based quota, this is QuotaLimit.name
   * See: google.api.Quota Deprecated: Use quota_metrics to get per quota group
   * limit exceeded status.
   */
  limitExceeded: string[];
  /**
   * Map of quota group name to the actual number of tokens consumed. If the
   * quota check was not successful, then this will not be populated due to no
   * quota consumption.  We are not merging this field with
   * &#39;quota_metrics&#39; field because of the complexity of scaling in
   * Chemist client code base. For simplicity, we will keep this field for
   * Castor (that scales quota usage) and &#39;quota_metrics&#39; for SuperQuota
   * (that doesn&#39;t scale quota usage).
   */
  quotaConsumed: any;
  /**
   * Quota metrics to indicate the usage. Depending on the check request, one or
   * more of the following metrics will be included:  1. For rate quota, per
   * quota group or per quota metric incremental usage will be specified using
   * the following delta metric:
   * &quot;serviceruntime.googleapis.com/api/consumer/quota_used_count&quot;  2.
   * For allocation quota, per quota metric total usage will be specified using
   * the following gauge metric:
   * &quot;serviceruntime.googleapis.com/allocation/consumer/quota_used_count&quot;
   * 3. For both rate quota and allocation quota, the quota limit reached
   * condition will be specified using the following boolean metric:
   * &quot;serviceruntime.googleapis.com/quota/exceeded&quot;
   */
  quotaMetrics: Schema$MetricValueSet[];
}
/**
 * Represents information regarding a quota operation.
 */
export interface Schema$QuotaOperation {
  /**
   * Identity of the consumer for whom this quota operation is being performed.
   * This can be in one of the following formats:   project:&lt;project_id&gt;,
   * project_number:&lt;project_number&gt;,   api_key:&lt;api_key&gt;.
   */
  consumerId: string;
  /**
   * Labels describing the operation.
   */
  labels: any;
  /**
   * Fully qualified name of the API method for which this quota operation is
   * requested. This name is used for matching quota rules or metric rules and
   * billing status rules defined in service configuration.  This field should
   * not be set if any of the following is true: (1) the quota operation is
   * performed on non-API resources. (2) quota_metrics is set because the caller
   * is doing quota override.  Example of an RPC method name:
   * google.example.library.v1.LibraryService.CreateShelf
   */
  methodName: string;
  /**
   * Identity of the operation. This is expected to be unique within the scope
   * of the service that generated the operation, and guarantees idempotency in
   * case of retries.  UUID version 4 is recommended, though not required. In
   * scenarios where an operation is computed from existing information and an
   * idempotent id is desirable for deduplication purpose, UUID version 5 is
   * recommended. See RFC 4122 for details.
   */
  operationId: string;
  /**
   * Represents information about this operation. Each MetricValueSet
   * corresponds to a metric defined in the service configuration. The data type
   * used in the MetricValueSet must agree with the data type specified in the
   * metric definition.  Within a single operation, it is not allowed to have
   * more than one MetricValue instances that have the same metric names and
   * identical label value combinations. If a request has such duplicated
   * MetricValue instances, the entire request is rejected with an invalid
   * argument error.  This field is mutually exclusive with method_name.
   */
  quotaMetrics: Schema$MetricValueSet[];
  /**
   * Quota mode for this operation.
   */
  quotaMode: string;
}
/**
 * Represents the properties needed for quota operations.
 */
export interface Schema$QuotaProperties {
  /**
   * Quota mode for this operation.
   */
  quotaMode: string;
}
/**
 * Request message for the ReleaseQuota method.
 */
export interface Schema$ReleaseQuotaRequest {
  /**
   * Operation that describes the quota release.
   */
  releaseOperation: Schema$QuotaOperation;
  /**
   * Specifies which version of service configuration should be used to process
   * the request. If unspecified or no matching version can be found, the latest
   * one will be used.
   */
  serviceConfigId: string;
}
/**
 * Response message for the ReleaseQuota method.
 */
export interface Schema$ReleaseQuotaResponse {
  /**
   * The same operation_id value used in the ReleaseQuotaRequest. Used for
   * logging and diagnostics purposes.
   */
  operationId: string;
  /**
   * Quota metrics to indicate the result of release. Depending on the request,
   * one or more of the following metrics will be included:  1. For rate quota,
   * per quota group or per quota metric released amount will be specified using
   * the following delta metric:
   * &quot;serviceruntime.googleapis.com/api/consumer/quota_refund_count&quot;
   * 2. For allocation quota, per quota metric total usage will be specified
   * using the following gauge metric:
   * &quot;serviceruntime.googleapis.com/allocation/consumer/quota_used_count&quot;
   * 3. For allocation quota, value for each quota limit associated with the
   * metrics will be specified using the following gauge metric:
   * &quot;serviceruntime.googleapis.com/quota/limit&quot;
   */
  quotaMetrics: Schema$MetricValueSet[];
  /**
   * Indicates the decision of the release.
   */
  releaseErrors: Schema$QuotaError[];
  /**
   * ID of the actual config used to process the request.
   */
  serviceConfigId: string;
}
/**
 * Represents the processing error of one Operation in the request.
 */
export interface Schema$ReportError {
  /**
   * The Operation.operation_id value from the request.
   */
  operationId: string;
  /**
   * Details of the error when processing the Operation.
   */
  status: Schema$Status;
}
/**
 * Contains additional info about the report operation.
 */
export interface Schema$ReportInfo {
  /**
   * The Operation.operation_id value from the request.
   */
  operationId: string;
  /**
   * Quota usage info when processing the `Operation`.
   */
  quotaInfo: Schema$QuotaInfo;
}
/**
 * Request message for the Report method.
 */
export interface Schema$ReportRequest {
  /**
   * Operations to be reported.  Typically the service should report one
   * operation per request. Putting multiple operations into a single request is
   * allowed, but should be used only when multiple operations are natually
   * available at the time of the report.  If multiple operations are in a
   * single request, the total request size should be no larger than 1MB. See
   * ReportResponse.report_errors for partial failure behavior.
   */
  operations: Schema$Operation[];
  /**
   * Specifies which version of service config should be used to process the
   * request.  If unspecified or no matching version can be found, the latest
   * one will be used.
   */
  serviceConfigId: string;
}
/**
 * Response message for the Report method.
 */
export interface Schema$ReportResponse {
  /**
   * Partial failures, one for each `Operation` in the request that failed
   * processing. There are three possible combinations of the RPC status:  1.
   * The combination of a successful RPC status and an empty `report_errors`
   * list indicates a complete success where all `Operations` in the    request
   * are processed successfully. 2. The combination of a successful RPC status
   * and a non-empty    `report_errors` list indicates a partial success where
   * some    `Operations` in the request succeeded. Each    `Operation` that
   * failed processing has a corresponding item    in this list. 3. A failed RPC
   * status indicates a general non-deterministic failure.    When this happens,
   * it&#39;s impossible to know which of the    &#39;Operations&#39; in the
   * request succeeded or failed.
   */
  reportErrors: Schema$ReportError[];
  /**
   * Quota usage for each quota release `Operation` request.  Fully or partially
   * failed quota release request may or may not be present in
   * `report_quota_info`. For example, a failed quota release request will have
   * the current quota usage info when precise quota library returns the info. A
   * deadline exceeded quota request will not have quota usage info.  If there
   * is no quota release request, report_quota_info will be empty.
   */
  reportInfos: Schema$ReportInfo[];
  /**
   * The actual config id used to process the request.
   */
  serviceConfigId: string;
}
/**
 * Metadata about the request.
 */
export interface Schema$RequestMetadata {
  /**
   * The IP address of the caller. For caller from internet, this will be public
   * IPv4 or IPv6 address. For caller from a Compute Engine VM with external IP
   * address, this will be the VM&#39;s external IP address. For caller from a
   * Compute Engine VM without external IP address, if the VM is in the same
   * organization (or project) as the accessed resource, `caller_ip` will be the
   * VM&#39;s internal IPv4 address, otherwise the `caller_ip` will be redacted
   * to &quot;gce-internal-ip&quot;. See
   * https://cloud.google.com/compute/docs/vpc/ for more information.
   */
  callerIp: string;
  /**
   * The network of the caller. Set only if the network host project is part of
   * the same GCP organization (or project) as the accessed resource. See
   * https://cloud.google.com/compute/docs/vpc/ for more information. This is a
   * scheme-less URI full resource name. For example:
   * &quot;//compute.googleapis.com/projects/PROJECT_ID/global/networks/NETWORK_ID&quot;
   */
  callerNetwork: string;
  /**
   * The user agent of the caller. This information is not authenticated and
   * should be treated accordingly. For example:  +
   * `google-api-python-client/1.4.0`:     The request was made by the Google
   * API client for Python. +   `Cloud SDK Command Line Tool apitools-client/1.0
   * gcloud/0.9.62`:     The request was made by the Google Cloud SDK CLI
   * (gcloud). +   `AppEngine-Google; (+http://code.google.com/appengine; appid:
   * s~my-project`:     The request was made from the `my-project` App Engine
   * app. NOLINT
   */
  callerSuppliedUserAgent: string;
}
/**
 * Describes a resource associated with this operation.
 */
export interface Schema$ResourceInfo {
  /**
   * The identifier of the parent of this resource instance. Must be in one of
   * the following formats:     - “projects/&lt;project-id or
   * project-number&gt;”     - “folders/&lt;folder-id&gt;”     -
   * “organizations/&lt;organization-id&gt;”
   */
  resourceContainer: string;
  /**
   * Name of the resource. This is used for auditing purposes.
   */
  resourceName: string;
}
/**
 * Request message for QuotaController.StartReconciliation.
 */
export interface Schema$StartReconciliationRequest {
  /**
   * Operation that describes the quota reconciliation.
   */
  reconciliationOperation: Schema$QuotaOperation;
  /**
   * Specifies which version of service configuration should be used to process
   * the request. If unspecified or no matching version can be found, the latest
   * one will be used.
   */
  serviceConfigId: string;
}
/**
 * Response message for QuotaController.StartReconciliation.
 */
export interface Schema$StartReconciliationResponse {
  /**
   * The same operation_id value used in the StartReconciliationRequest. Used
   * for logging and diagnostics purposes.
   */
  operationId: string;
  /**
   * Metric values as tracked by One Platform before the start of
   * reconciliation. The following metrics will be included:  1. Per quota
   * metric total usage will be specified using the following gauge metric:
   * &quot;serviceruntime.googleapis.com/allocation/consumer/quota_used_count&quot;
   * 2. Value for each quota limit associated with the metrics will be specified
   * using the following gauge metric:
   * &quot;serviceruntime.googleapis.com/quota/limit&quot;
   */
  quotaMetrics: Schema$MetricValueSet[];
  /**
   * Indicates the decision of the reconciliation start.
   */
  reconciliationErrors: Schema$QuotaError[];
  /**
   * ID of the actual config used to process the request.
   */
  serviceConfigId: string;
}
/**
 * The `Status` type defines a logical error model that is suitable for
 * different programming environments, including REST APIs and RPC APIs. It is
 * used by [gRPC](https://github.com/grpc). The error model is designed to be:
 * - Simple to use and understand for most users - Flexible enough to meet
 * unexpected needs  # Overview  The `Status` message contains three pieces of
 * data: error code, error message, and error details. The error code should be
 * an enum value of google.rpc.Code, but it may accept additional error codes if
 * needed.  The error message should be a developer-facing English message that
 * helps developers *understand* and *resolve* the error. If a localized
 * user-facing error message is needed, put the localized message in the error
 * details or localize it in the client. The optional error details may contain
 * arbitrary information about the error. There is a predefined set of error
 * detail types in the package `google.rpc` that can be used for common error
 * conditions.  # Language mapping  The `Status` message is the logical
 * representation of the error model, but it is not necessarily the actual wire
 * format. When the `Status` message is exposed in different client libraries
 * and different wire protocols, it can be mapped differently. For example, it
 * will likely be mapped to some exceptions in Java, but more likely mapped to
 * some error codes in C.  # Other uses  The error model and the `Status`
 * message can be used in a variety of environments, either with or without
 * APIs, to provide a consistent developer experience across different
 * environments.  Example uses of this error model include:  - Partial errors.
 * If a service needs to return partial errors to the client,     it may embed
 * the `Status` in the normal response to indicate the partial     errors.  -
 * Workflow errors. A typical workflow has multiple steps. Each step may have a
 * `Status` message for error reporting.  - Batch operations. If a client uses
 * batch request and batch response, the     `Status` message should be used
 * directly inside batch response, one for     each error sub-response.  -
 * Asynchronous operations. If an API call embeds asynchronous operation results
 * in its response, the status of those operations should be     represented
 * directly using the `Status` message.  - Logging. If some API errors are
 * stored in logs, the message `Status` could     be used directly after any
 * stripping needed for security/privacy reasons.
 */
export interface Schema$Status {
  /**
   * The status code, which should be an enum value of google.rpc.Code.
   */
  code: number;
  /**
   * A list of messages that carry the error details.  There is a common set of
   * message types for APIs to use.
   */
  details: any[];
  /**
   * A developer-facing error message, which should be in English. Any
   * user-facing error message should be localized and sent in the
   * google.rpc.Status.details field, or localized by the client.
   */
  message: string;
}

export class Resource$Services {
  root: Servicecontrol;
  constructor(root: Servicecontrol) {
    this.root = root;
    this.getRoot.bind(this);
  }

  getRoot() {
    return this.root;
  }


  /**
   * servicecontrol.services.allocateQuota
   * @desc Attempts to allocate quota for the specified consumer. It should be
   * called before the operation is executed.  This method requires the
   * `servicemanagement.services.quota` permission on the specified service. For
   * more information, see [Cloud IAM](https://cloud.google.com/iam).  **NOTE:**
   * The client **must** fail-open on server errors `INTERNAL`, `UNKNOWN`,
   * `DEADLINE_EXCEEDED`, and `UNAVAILABLE`. To ensure system reliability, the
   * server may inject these errors to prohibit any hard dependency on the quota
   * functionality.
   * @alias servicecontrol.services.allocateQuota
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.serviceName Name of the service as specified in the service configuration. For example, `"pubsub.googleapis.com"`.  See google.api.Service for the definition of a service name.
   * @param {().AllocateQuotaRequest} params.resource Request body data
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  allocateQuota(params?: any, options?: MethodOptions):
      AxiosPromise<Schema$AllocateQuotaResponse>;
  allocateQuota(
      params?: any,
      options?: MethodOptions|
      BodyResponseCallback<Schema$AllocateQuotaResponse>,
      callback?: BodyResponseCallback<Schema$AllocateQuotaResponse>): void;
  allocateQuota(
      params?: any,
      options?: MethodOptions|
      BodyResponseCallback<Schema$AllocateQuotaResponse>,
      callback?: BodyResponseCallback<Schema$AllocateQuotaResponse>):
      void|AxiosPromise<Schema$AllocateQuotaResponse> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://servicecontrol.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url: (rootUrl + '/v1/services/{serviceName}:allocateQuota')
                     .replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST'
          },
          options),
      params,
      requiredParams: ['serviceName'],
      pathParams: ['serviceName'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$AllocateQuotaResponse>(parameters, callback);
    } else {
      return createAPIRequest<Schema$AllocateQuotaResponse>(parameters);
    }
  }


  /**
   * servicecontrol.services.check
   * @desc Checks whether an operation on a service should be allowed to proceed
   * based on the configuration of the service and related policies. It must be
   * called before the operation is executed.  If feasible, the client should
   * cache the check results and reuse them for 60 seconds. In case of any
   * server errors, the client should rely on the cached results for much longer
   * time to avoid outage. WARNING: There is general 60s delay for the
   * configuration and policy propagation, therefore callers MUST NOT depend on
   * the `Check` method having the latest policy information.  NOTE: the
   * CheckRequest has the size limit of 64KB.  This method requires the
   * `servicemanagement.services.check` permission on the specified service. For
   * more information, see [Cloud IAM](https://cloud.google.com/iam).
   * @alias servicecontrol.services.check
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.serviceName The service name as specified in its service configuration. For example, `"pubsub.googleapis.com"`.  See [google.api.Service](https://cloud.google.com/service-management/reference/rpc/google.api#google.api.Service) for the definition of a service name.
   * @param {().CheckRequest} params.resource Request body data
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  check(params?: any, options?: MethodOptions):
      AxiosPromise<Schema$CheckResponse>;
  check(
      params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$CheckResponse>,
      callback?: BodyResponseCallback<Schema$CheckResponse>): void;
  check(
      params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$CheckResponse>,
      callback?: BodyResponseCallback<Schema$CheckResponse>):
      void|AxiosPromise<Schema$CheckResponse> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://servicecontrol.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url: (rootUrl + '/v1/services/{serviceName}:check')
                     .replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST'
          },
          options),
      params,
      requiredParams: ['serviceName'],
      pathParams: ['serviceName'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$CheckResponse>(parameters, callback);
    } else {
      return createAPIRequest<Schema$CheckResponse>(parameters);
    }
  }


  /**
   * servicecontrol.services.endReconciliation
   * @desc Signals the quota controller that service ends the ongoing usage
   * reconciliation.  This method requires the
   * `servicemanagement.services.quota` permission on the specified service. For
   * more information, see [Google Cloud IAM](https://cloud.google.com/iam).
   * @alias servicecontrol.services.endReconciliation
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.serviceName Name of the service as specified in the service configuration. For example, `"pubsub.googleapis.com"`.  See google.api.Service for the definition of a service name.
   * @param {().EndReconciliationRequest} params.resource Request body data
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  endReconciliation(params?: any, options?: MethodOptions):
      AxiosPromise<Schema$EndReconciliationResponse>;
  endReconciliation(
      params?: any,
      options?: MethodOptions|
      BodyResponseCallback<Schema$EndReconciliationResponse>,
      callback?: BodyResponseCallback<Schema$EndReconciliationResponse>): void;
  endReconciliation(
      params?: any,
      options?: MethodOptions|
      BodyResponseCallback<Schema$EndReconciliationResponse>,
      callback?: BodyResponseCallback<Schema$EndReconciliationResponse>):
      void|AxiosPromise<Schema$EndReconciliationResponse> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://servicecontrol.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url: (rootUrl + '/v1/services/{serviceName}:endReconciliation')
                     .replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST'
          },
          options),
      params,
      requiredParams: ['serviceName'],
      pathParams: ['serviceName'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$EndReconciliationResponse>(parameters, callback);
    } else {
      return createAPIRequest<Schema$EndReconciliationResponse>(parameters);
    }
  }


  /**
   * servicecontrol.services.releaseQuota
   * @desc Releases previously allocated quota done through AllocateQuota
   * method.  This method requires the `servicemanagement.services.quota`
   * permission on the specified service. For more information, see [Cloud
   * IAM](https://cloud.google.com/iam).   **NOTE:** The client **must**
   * fail-open on server errors `INTERNAL`, `UNKNOWN`, `DEADLINE_EXCEEDED`, and
   * `UNAVAILABLE`. To ensure system reliability, the server may inject these
   * errors to prohibit any hard dependency on the quota functionality.
   * @alias servicecontrol.services.releaseQuota
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.serviceName Name of the service as specified in the service configuration. For example, `"pubsub.googleapis.com"`.  See google.api.Service for the definition of a service name.
   * @param {().ReleaseQuotaRequest} params.resource Request body data
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  releaseQuota(params?: any, options?: MethodOptions):
      AxiosPromise<Schema$ReleaseQuotaResponse>;
  releaseQuota(
      params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$ReleaseQuotaResponse>,
      callback?: BodyResponseCallback<Schema$ReleaseQuotaResponse>): void;
  releaseQuota(
      params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$ReleaseQuotaResponse>,
      callback?: BodyResponseCallback<Schema$ReleaseQuotaResponse>):
      void|AxiosPromise<Schema$ReleaseQuotaResponse> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://servicecontrol.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url: (rootUrl + '/v1/services/{serviceName}:releaseQuota')
                     .replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST'
          },
          options),
      params,
      requiredParams: ['serviceName'],
      pathParams: ['serviceName'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$ReleaseQuotaResponse>(parameters, callback);
    } else {
      return createAPIRequest<Schema$ReleaseQuotaResponse>(parameters);
    }
  }


  /**
   * servicecontrol.services.report
   * @desc Reports operation results to Google Service Control, such as logs and
   * metrics. It should be called after an operation is completed.  If feasible,
   * the client should aggregate reporting data for up to 5 seconds to reduce
   * API traffic. Limiting aggregation to 5 seconds is to reduce data loss
   * during client crashes. Clients should carefully choose the aggregation time
   * window to avoid data loss risk more than 0.01% for business and compliance
   * reasons.  NOTE: the ReportRequest has the size limit of 1MB.  This method
   * requires the `servicemanagement.services.report` permission on the
   * specified service. For more information, see [Google Cloud
   * IAM](https://cloud.google.com/iam).
   * @alias servicecontrol.services.report
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.serviceName The service name as specified in its service configuration. For example, `"pubsub.googleapis.com"`.  See [google.api.Service](https://cloud.google.com/service-management/reference/rpc/google.api#google.api.Service) for the definition of a service name.
   * @param {().ReportRequest} params.resource Request body data
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  report(params?: any, options?: MethodOptions):
      AxiosPromise<Schema$ReportResponse>;
  report(
      params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$ReportResponse>,
      callback?: BodyResponseCallback<Schema$ReportResponse>): void;
  report(
      params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$ReportResponse>,
      callback?: BodyResponseCallback<Schema$ReportResponse>):
      void|AxiosPromise<Schema$ReportResponse> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://servicecontrol.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url: (rootUrl + '/v1/services/{serviceName}:report')
                     .replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST'
          },
          options),
      params,
      requiredParams: ['serviceName'],
      pathParams: ['serviceName'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$ReportResponse>(parameters, callback);
    } else {
      return createAPIRequest<Schema$ReportResponse>(parameters);
    }
  }


  /**
   * servicecontrol.services.startReconciliation
   * @desc Unlike rate quota, allocation quota does not get refilled
   * periodically. So, it is possible that the quota usage as seen by the
   * service differs from what the One Platform considers the usage is. This is
   * expected to happen only rarely, but over time this can accumulate. Services
   * can invoke StartReconciliation and EndReconciliation to correct this usage
   * drift, as described below: 1. Service sends StartReconciliation with a
   * timestamp in future for each    metric that needs to be reconciled. The
   * timestamp being in future allows    to account for in-flight AllocateQuota
   * and ReleaseQuota requests for the    same metric. 2. One Platform records
   * this timestamp and starts tracking subsequent    AllocateQuota and
   * ReleaseQuota requests until EndReconciliation is    called. 3. At or after
   * the time specified in the StartReconciliation, service    sends
   * EndReconciliation with the usage that needs to be reconciled to. 4. One
   * Platform adjusts its own record of usage for that metric to the    value
   * specified in EndReconciliation by taking in to account any    allocation or
   * release between StartReconciliation and EndReconciliation.  Signals the
   * quota controller that the service wants to perform a usage reconciliation
   * as specified in the request.  This method requires the
   * `servicemanagement.services.quota` permission on the specified service. For
   * more information, see [Google Cloud IAM](https://cloud.google.com/iam).
   * @alias servicecontrol.services.startReconciliation
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.serviceName Name of the service as specified in the service configuration. For example, `"pubsub.googleapis.com"`.  See google.api.Service for the definition of a service name.
   * @param {().StartReconciliationRequest} params.resource Request body data
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  startReconciliation(params?: any, options?: MethodOptions):
      AxiosPromise<Schema$StartReconciliationResponse>;
  startReconciliation(
      params?: any,
      options?: MethodOptions|
      BodyResponseCallback<Schema$StartReconciliationResponse>,
      callback?: BodyResponseCallback<Schema$StartReconciliationResponse>):
      void;
  startReconciliation(
      params?: any,
      options?: MethodOptions|
      BodyResponseCallback<Schema$StartReconciliationResponse>,
      callback?: BodyResponseCallback<Schema$StartReconciliationResponse>):
      void|AxiosPromise<Schema$StartReconciliationResponse> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://servicecontrol.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url: (rootUrl + '/v1/services/{serviceName}:startReconciliation')
                     .replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST'
          },
          options),
      params,
      requiredParams: ['serviceName'],
      pathParams: ['serviceName'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$StartReconciliationResponse>(
          parameters, callback);
    } else {
      return createAPIRequest<Schema$StartReconciliationResponse>(parameters);
    }
  }
}
