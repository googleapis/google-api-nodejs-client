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

/* jshint maxlen: false */

import createAPIRequest from '../../lib/apirequest';

/**
 * Google Service Control API
 *
 * Google Service Control provides control plane functionality to managed services, such as logging, monitoring, and status checks.
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
function Servicecontrol(options) { // eslint-disable-line
  const self = this;
  self._options = options || {};

  self.services = {

    /**
     * servicecontrol.services.allocateQuota
     *
     * @desc Attempts to allocate quota for the specified consumer. It should be called before the operation is executed.  This method requires the `servicemanagement.services.quota` permission on the specified service. For more information, see [Google Cloud IAM](https://cloud.google.com/iam).  **NOTE:** the client code **must** fail-open if the server returns one of the following quota errors: -   `PROJECT_STATUS_UNAVAILABLE` -   `SERVICE_STATUS_UNAVAILABLE` -   `BILLING_STATUS_UNAVAILABLE` -   `QUOTA_SYSTEM_UNAVAILABLE`  The server may inject above errors to prohibit any hard dependency on the quota system.
     *
     * @alias servicecontrol.services.allocateQuota
     * @memberOf! servicecontrol(v1)
     *
     * @param {object} params Parameters for request
     * @param {string} params.serviceName Name of the service as specified in the service configuration. For example, `"pubsub.googleapis.com"`.  See google.api.Service for the definition of a service name.
     * @param {servicecontrol(v1).AllocateQuotaRequest} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    allocateQuota: function (params, options, callback) {
      if (typeof options === 'function') {
        callback = options;
        options = {};
      }
      options || (options = {});

      const rootUrl = options.rootUrl || 'https://servicecontrol.googleapis.com/';

      const parameters = {
        options: Object.assign({
          url: (rootUrl + '/v1/services/{serviceName}:allocateQuota').replace(/([^:]\/)\/+/g, '$1'),
          method: 'POST'
        }, options),
        params: params,
        requiredParams: ['serviceName'],
        pathParams: ['serviceName'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * servicecontrol.services.check
     *
     * @desc Checks an operation with Google Service Control to decide whether the given operation should proceed. It should be called before the operation is executed.  If feasible, the client should cache the check results and reuse them for 60 seconds. In case of server errors, the client can rely on the cached results for longer time.  NOTE: the CheckRequest has the size limit of 64KB.  This method requires the `servicemanagement.services.check` permission on the specified service. For more information, see [Google Cloud IAM](https://cloud.google.com/iam).
     *
     * @alias servicecontrol.services.check
     * @memberOf! servicecontrol(v1)
     *
     * @param {object} params Parameters for request
     * @param {string} params.serviceName The service name as specified in its service configuration. For example, `"pubsub.googleapis.com"`.  See [google.api.Service](https://cloud.google.com/service-management/reference/rpc/google.api#google.api.Service) for the definition of a service name.
     * @param {servicecontrol(v1).CheckRequest} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    check: function (params, options, callback) {
      if (typeof options === 'function') {
        callback = options;
        options = {};
      }
      options || (options = {});

      const rootUrl = options.rootUrl || 'https://servicecontrol.googleapis.com/';

      const parameters = {
        options: Object.assign({
          url: (rootUrl + '/v1/services/{serviceName}:check').replace(/([^:]\/)\/+/g, '$1'),
          method: 'POST'
        }, options),
        params: params,
        requiredParams: ['serviceName'],
        pathParams: ['serviceName'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * servicecontrol.services.endReconciliation
     *
     * @desc Signals the quota controller that service ends the ongoing usage reconciliation.  This method requires the `servicemanagement.services.quota` permission on the specified service. For more information, see [Google Cloud IAM](https://cloud.google.com/iam).
     *
     * @alias servicecontrol.services.endReconciliation
     * @memberOf! servicecontrol(v1)
     *
     * @param {object} params Parameters for request
     * @param {string} params.serviceName Name of the service as specified in the service configuration. For example, `"pubsub.googleapis.com"`.  See google.api.Service for the definition of a service name.
     * @param {servicecontrol(v1).EndReconciliationRequest} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    endReconciliation: function (params, options, callback) {
      if (typeof options === 'function') {
        callback = options;
        options = {};
      }
      options || (options = {});

      const rootUrl = options.rootUrl || 'https://servicecontrol.googleapis.com/';

      const parameters = {
        options: Object.assign({
          url: (rootUrl + '/v1/services/{serviceName}:endReconciliation').replace(/([^:]\/)\/+/g, '$1'),
          method: 'POST'
        }, options),
        params: params,
        requiredParams: ['serviceName'],
        pathParams: ['serviceName'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * servicecontrol.services.releaseQuota
     *
     * @desc Releases previously allocated quota done through AllocateQuota method.  This method requires the `servicemanagement.services.quota` permission on the specified service. For more information, see [Google Cloud IAM](https://cloud.google.com/iam).  **NOTE:** the client code **must** fail-open if the server returns one of the following quota errors: -   `PROJECT_STATUS_UNAVAILABLE` -   `SERVICE_STATUS_UNAVAILABLE` -   `BILLING_STATUS_UNAVAILABLE` -   `QUOTA_SYSTEM_UNAVAILABLE`  The server may inject above errors to prohibit any hard dependency on the quota system.
     *
     * @alias servicecontrol.services.releaseQuota
     * @memberOf! servicecontrol(v1)
     *
     * @param {object} params Parameters for request
     * @param {string} params.serviceName Name of the service as specified in the service configuration. For example, `"pubsub.googleapis.com"`.  See google.api.Service for the definition of a service name.
     * @param {servicecontrol(v1).ReleaseQuotaRequest} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    releaseQuota: function (params, options, callback) {
      if (typeof options === 'function') {
        callback = options;
        options = {};
      }
      options || (options = {});

      const rootUrl = options.rootUrl || 'https://servicecontrol.googleapis.com/';

      const parameters = {
        options: Object.assign({
          url: (rootUrl + '/v1/services/{serviceName}:releaseQuota').replace(/([^:]\/)\/+/g, '$1'),
          method: 'POST'
        }, options),
        params: params,
        requiredParams: ['serviceName'],
        pathParams: ['serviceName'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * servicecontrol.services.report
     *
     * @desc Reports operation results to Google Service Control, such as logs and metrics. It should be called after an operation is completed.  If feasible, the client should aggregate reporting data for up to 5 seconds to reduce API traffic. Limiting aggregation to 5 seconds is to reduce data loss during client crashes. Clients should carefully choose the aggregation time window to avoid data loss risk more than 0.01% for business and compliance reasons.  NOTE: the ReportRequest has the size limit of 1MB.  This method requires the `servicemanagement.services.report` permission on the specified service. For more information, see [Google Cloud IAM](https://cloud.google.com/iam).
     *
     * @alias servicecontrol.services.report
     * @memberOf! servicecontrol(v1)
     *
     * @param {object} params Parameters for request
     * @param {string} params.serviceName The service name as specified in its service configuration. For example, `"pubsub.googleapis.com"`.  See [google.api.Service](https://cloud.google.com/service-management/reference/rpc/google.api#google.api.Service) for the definition of a service name.
     * @param {servicecontrol(v1).ReportRequest} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    report: function (params, options, callback) {
      if (typeof options === 'function') {
        callback = options;
        options = {};
      }
      options || (options = {});

      const rootUrl = options.rootUrl || 'https://servicecontrol.googleapis.com/';

      const parameters = {
        options: Object.assign({
          url: (rootUrl + '/v1/services/{serviceName}:report').replace(/([^:]\/)\/+/g, '$1'),
          method: 'POST'
        }, options),
        params: params,
        requiredParams: ['serviceName'],
        pathParams: ['serviceName'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * servicecontrol.services.startReconciliation
     *
     * @desc Unlike rate quota, allocation quota does not get refilled periodically. So, it is possible that the quota usage as seen by the service differs from what the One Platform considers the usage is. This is expected to happen only rarely, but over time this can accumulate. Services can invoke StartReconciliation and EndReconciliation to correct this usage drift, as described below: 1. Service sends StartReconciliation with a timestamp in future for each    metric that needs to be reconciled. The timestamp being in future allows    to account for in-flight AllocateQuota and ReleaseQuota requests for the    same metric. 2. One Platform records this timestamp and starts tracking subsequent    AllocateQuota and ReleaseQuota requests until EndReconciliation is    called. 3. At or after the time specified in the StartReconciliation, service    sends EndReconciliation with the usage that needs to be reconciled to. 4. One Platform adjusts its own record of usage for that metric to the    value specified in EndReconciliation by taking in to account any    allocation or release between StartReconciliation and EndReconciliation.  Signals the quota controller that the service wants to perform a usage reconciliation as specified in the request.  This method requires the `servicemanagement.services.quota` permission on the specified service. For more information, see [Google Cloud IAM](https://cloud.google.com/iam).
     *
     * @alias servicecontrol.services.startReconciliation
     * @memberOf! servicecontrol(v1)
     *
     * @param {object} params Parameters for request
     * @param {string} params.serviceName Name of the service as specified in the service configuration. For example, `"pubsub.googleapis.com"`.  See google.api.Service for the definition of a service name.
     * @param {servicecontrol(v1).StartReconciliationRequest} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    startReconciliation: function (params, options, callback) {
      if (typeof options === 'function') {
        callback = options;
        options = {};
      }
      options || (options = {});

      const rootUrl = options.rootUrl || 'https://servicecontrol.googleapis.com/';

      const parameters = {
        options: Object.assign({
          url: (rootUrl + '/v1/services/{serviceName}:startReconciliation').replace(/([^:]\/)\/+/g, '$1'),
          method: 'POST'
        }, options),
        params: params,
        requiredParams: ['serviceName'],
        pathParams: ['serviceName'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    }

  };
}

/**
 * @typedef AllocateQuotaRequest
 * @memberOf! servicecontrol(v1)
 * @type object
* @property {servicecontrol(v1).QuotaOperation} allocateOperation Operation that describes the quota allocation.
* @property {string} allocationMode Allocation mode for this operation.
Deprecated: use QuotaMode inside the QuotaOperation.
* @property {string} serviceConfigId Specifies which version of service configuration should be used to process
the request. If unspecified or no matching version can be found, the latest
one will be used.
*/

/**
 * @typedef AllocateQuotaResponse
 * @memberOf! servicecontrol(v1)
 * @type object
* @property {servicecontrol(v1).QuotaError[]} allocateErrors Indicates the decision of the allocate.
* @property {string} operationId The same operation_id value used in the AllocateQuotaRequest. Used for
logging and diagnostics purposes.
* @property {servicecontrol(v1).MetricValueSet[]} quotaMetrics Quota metrics to indicate the result of allocation. Depending on the
request, one or more of the following metrics will be included:

1. For rate quota, per quota group or per quota metric incremental usage
will be specified using the following delta metric:
  &quot;serviceruntime.googleapis.com/api/consumer/quota_used_count&quot;

2. For allocation quota, per quota metric total usage will be specified
using the following gauge metric:
  &quot;serviceruntime.googleapis.com/allocation/consumer/quota_used_count&quot;

3. For both rate quota and allocation quota, the quota limit reached
condition will be specified using the following boolean metric:
  &quot;serviceruntime.googleapis.com/quota/exceeded&quot;

4. For allocation quota, value for each quota limit associated with
the metrics will be specified using the following gauge metric:
  &quot;serviceruntime.googleapis.com/quota/limit&quot;
* @property {string} serviceConfigId ID of the actual config used to process the request.
*/

/**
 * @typedef AuditLog
 * @memberOf! servicecontrol(v1)
 * @type object
* @property {servicecontrol(v1).AuthenticationInfo} authenticationInfo Authentication information.
* @property {servicecontrol(v1).AuthorizationInfo[]} authorizationInfo Authorization information. If there are multiple
resources or permissions involved, then there is
one AuthorizationInfo element for each {resource, permission} tuple.
* @property {string} methodName The name of the service method or operation.
For API calls, this should be the name of the API method.
For example,

    &quot;google.datastore.v1.Datastore.RunQuery&quot;
    &quot;google.logging.v1.LoggingService.DeleteLog&quot;
* @property {string} numResponseItems The number of items returned from a List or Query API method,
if applicable.
* @property {object} request The operation request. This may not include all request parameters,
such as those that are too large, privacy-sensitive, or duplicated
elsewhere in the log record.
It should never include user-generated data, such as file contents.
When the JSON object represented here has a proto equivalent, the proto
name will be indicated in the `@type` property.
* @property {servicecontrol(v1).RequestMetadata} requestMetadata Metadata about the operation.
* @property {string} resourceName The resource or collection that is the target of the operation.
The name is a scheme-less URI, not including the API service name.
For example:

    &quot;shelves/SHELF_ID/books&quot;
    &quot;shelves/SHELF_ID/books/BOOK_ID&quot;
* @property {object} response The operation response. This may not include all response elements,
such as those that are too large, privacy-sensitive, or duplicated
elsewhere in the log record.
It should never include user-generated data, such as file contents.
When the JSON object represented here has a proto equivalent, the proto
name will be indicated in the `@type` property.
* @property {object} serviceData Other service-specific data about the request, response, and other
activities.
* @property {string} serviceName The name of the API service performing the operation. For example,
`&quot;datastore.googleapis.com&quot;`.
* @property {servicecontrol(v1).Status} status The status of the overall operation.
*/

/**
 * @typedef AuthenticationInfo
 * @memberOf! servicecontrol(v1)
 * @type object
* @property {string} authoritySelector The authority selector specified by the requestor, if any.
It is not guaranteed that the principal was allowed to use this authority.
* @property {string} principalEmail The email address of the authenticated user making the request.
For privacy reasons, the principal email address is redacted for all
read-only operations that fail with a &quot;permission denied&quot; error.
*/

/**
 * @typedef AuthorizationInfo
 * @memberOf! servicecontrol(v1)
 * @type object
* @property {boolean} granted Whether or not authorization for `resource` and `permission`
was granted.
* @property {string} permission The required IAM permission.
* @property {string} resource The resource being accessed, as a REST-style string. For example:

    bigquery.googleapis.com/projects/PROJECTID/datasets/DATASETID
*/

/**
 * @typedef CheckError
 * @memberOf! servicecontrol(v1)
 * @type object
 * @property {string} code The error code.
 * @property {string} detail Free-form text providing details on the error cause of the error.
 */

/**
 * @typedef CheckInfo
 * @memberOf! servicecontrol(v1)
 * @type object
* @property {servicecontrol(v1).ConsumerInfo} consumerInfo Consumer info of this check.
* @property {string[]} unusedArguments A list of fields and label keys that are ignored by the server.
The client doesn&#39;t need to send them for following requests to improve
performance and allow better aggregation.
*/

/**
 * @typedef CheckRequest
 * @memberOf! servicecontrol(v1)
 * @type object
* @property {servicecontrol(v1).Operation} operation The operation to be checked.
* @property {boolean} requestProjectSettings Requests the project settings to be returned as part of the check response.
* @property {string} serviceConfigId Specifies which version of service configuration should be used to process
the request.

If unspecified or no matching version can be found, the
latest one will be used.
* @property {boolean} skipActivationCheck Indicates if service activation check should be skipped for this request.
Default behavior is to perform the check and apply relevant quota.
*/

/**
 * @typedef CheckResponse
 * @memberOf! servicecontrol(v1)
 * @type object
* @property {servicecontrol(v1).CheckError[]} checkErrors Indicate the decision of the check.

If no check errors are present, the service should process the operation.
Otherwise the service should use the list of errors to determine the
appropriate action.
* @property {servicecontrol(v1).CheckInfo} checkInfo Feedback data returned from the server during processing a Check request.
* @property {string} operationId The same operation_id value used in the CheckRequest.
Used for logging and diagnostics purposes.
* @property {servicecontrol(v1).QuotaInfo} quotaInfo Quota information for the check request associated with this response.

* @property {string} serviceConfigId The actual config id used to process the request.
*/

/**
 * @typedef ConsumerInfo
 * @memberOf! servicecontrol(v1)
 * @type object
* @property {string} projectNumber The Google cloud project number, e.g. 1234567890. A value of 0 indicates
no project number is found.
*/

/**
 * @typedef Distribution
 * @memberOf! servicecontrol(v1)
 * @type object
* @property {string[]} bucketCounts The number of samples in each histogram bucket. `bucket_counts` are
optional. If present, they must sum to the `count` value.

The buckets are defined below in `bucket_option`. There are N buckets.
`bucket_counts[0]` is the number of samples in the underflow bucket.
`bucket_counts[1]` to `bucket_counts[N-1]` are the numbers of samples
in each of the finite buckets. And `bucket_counts[N] is the number
of samples in the overflow bucket. See the comments of `bucket_option`
below for more details.

Any suffix of trailing zeros may be omitted.
* @property {string} count The total number of samples in the distribution. Must be &gt;= 0.
* @property {servicecontrol(v1).ExplicitBuckets} explicitBuckets Buckets with arbitrary user-provided width.
* @property {servicecontrol(v1).ExponentialBuckets} exponentialBuckets Buckets with exponentially growing width.
* @property {servicecontrol(v1).LinearBuckets} linearBuckets Buckets with constant width.
* @property {number} maximum The maximum of the population of values. Ignored if `count` is zero.
* @property {number} mean The arithmetic mean of the samples in the distribution. If `count` is
zero then this field must be zero.
* @property {number} minimum The minimum of the population of values. Ignored if `count` is zero.
* @property {number} sumOfSquaredDeviation The sum of squared deviations from the mean:
  Sum[i=1..count]((x_i - mean)^2)
where each x_i is a sample values. If `count` is zero then this field
must be zero, otherwise validation of the request fails.
*/

/**
 * @typedef EndReconciliationRequest
 * @memberOf! servicecontrol(v1)
 * @type object
* @property {servicecontrol(v1).QuotaOperation} reconciliationOperation Operation that describes the quota reconciliation.
* @property {string} serviceConfigId Specifies which version of service configuration should be used to process
the request. If unspecified or no matching version can be found, the latest
one will be used.
*/

/**
 * @typedef EndReconciliationResponse
 * @memberOf! servicecontrol(v1)
 * @type object
* @property {string} operationId The same operation_id value used in the EndReconciliationRequest. Used for
logging and diagnostics purposes.
* @property {servicecontrol(v1).MetricValueSet[]} quotaMetrics Metric values as tracked by One Platform before the adjustment was made.
The following metrics will be included:

1. Per quota metric total usage will be specified using the following gauge
metric:
  &quot;serviceruntime.googleapis.com/allocation/consumer/quota_used_count&quot;

2. Value for each quota limit associated with the metrics will be specified
using the following gauge metric:
  &quot;serviceruntime.googleapis.com/quota/limit&quot;

3. Delta value of the usage after the reconciliation for limits associated
with the metrics will be specified using the following metric:
  &quot;serviceruntime.googleapis.com/allocation/reconciliation_delta&quot;
The delta value is defined as:
  new_usage_from_client - existing_value_in_spanner.
This metric is not defined in serviceruntime.yaml or in Cloud Monarch.
This metric is meant for callers&#39; use only. Since this metric is not
defined in the monitoring backend, reporting on this metric will result in
an error.
* @property {servicecontrol(v1).QuotaError[]} reconciliationErrors Indicates the decision of the reconciliation end.
* @property {string} serviceConfigId ID of the actual config used to process the request.
*/

/**
 * @typedef ExplicitBuckets
 * @memberOf! servicecontrol(v1)
 * @type object
* @property {number[]} bounds &#39;bound&#39; is a list of strictly increasing boundaries between
buckets. Note that a list of length N-1 defines N buckets because
of fenceposting. See comments on `bucket_options` for details.

The i&#39;th finite bucket covers the interval
  [bound[i-1], bound[i])
where i ranges from 1 to bound_size() - 1. Note that there are no
finite buckets at all if &#39;bound&#39; only contains a single element; in
that special case the single bound defines the boundary between the
underflow and overflow buckets.

bucket number                   lower bound    upper bound
 i == 0 (underflow)              -inf           bound[i]
 0 &lt; i &lt; bound_size()            bound[i-1]     bound[i]
 i == bound_size() (overflow)    bound[i-1]     +inf
*/

/**
 * @typedef ExponentialBuckets
 * @memberOf! servicecontrol(v1)
 * @type object
* @property {number} growthFactor The i&#39;th exponential bucket covers the interval
  [scale * growth_factor^(i-1), scale * growth_factor^i)
where i ranges from 1 to num_finite_buckets inclusive.
Must be larger than 1.0.
* @property {integer} numFiniteBuckets The number of finite buckets. With the underflow and overflow buckets,
the total number of buckets is `num_finite_buckets` + 2.
See comments on `bucket_options` for details.
* @property {number} scale The i&#39;th exponential bucket covers the interval
  [scale * growth_factor^(i-1), scale * growth_factor^i)
where i ranges from 1 to num_finite_buckets inclusive.
Must be &gt; 0.
*/

/**
 * @typedef LinearBuckets
 * @memberOf! servicecontrol(v1)
 * @type object
* @property {integer} numFiniteBuckets The number of finite buckets. With the underflow and overflow buckets,
the total number of buckets is `num_finite_buckets` + 2.
See comments on `bucket_options` for details.
* @property {number} offset The i&#39;th linear bucket covers the interval
  [offset + (i-1) * width, offset + i * width)
where i ranges from 1 to num_finite_buckets, inclusive.
* @property {number} width The i&#39;th linear bucket covers the interval
  [offset + (i-1) * width, offset + i * width)
where i ranges from 1 to num_finite_buckets, inclusive.
Must be strictly positive.
*/

/**
 * @typedef LogEntry
 * @memberOf! servicecontrol(v1)
 * @type object
* @property {string} insertId A unique ID for the log entry used for deduplication. If omitted,
the implementation will generate one based on operation_id.
* @property {object} labels A set of user-defined (key, value) data that provides additional
information about the log entry.
* @property {string} name Required. The log to which this log entry belongs. Examples: `&quot;syslog&quot;`,
`&quot;book_log&quot;`.
* @property {object} protoPayload The log entry payload, represented as a protocol buffer that is
expressed as a JSON object. The only accepted type currently is
AuditLog.
* @property {string} severity The severity of the log entry. The default value is
`LogSeverity.DEFAULT`.
* @property {object} structPayload The log entry payload, represented as a structure that
is expressed as a JSON object.
* @property {string} textPayload The log entry payload, represented as a Unicode string (UTF-8).
* @property {string} timestamp The time the event described by the log entry occurred. If
omitted, defaults to operation start time.
*/

/**
 * @typedef MetricValue
 * @memberOf! servicecontrol(v1)
 * @type object
* @property {boolean} boolValue A boolean value.
* @property {servicecontrol(v1).Distribution} distributionValue A distribution value.
* @property {number} doubleValue A double precision floating point value.
* @property {string} endTime The end of the time period over which this metric value&#39;s measurement
applies.
* @property {string} int64Value A signed 64-bit integer value.
* @property {object} labels The labels describing the metric value.
See comments on google.api.servicecontrol.v1.Operation.labels for
the overriding relationship.
* @property {servicecontrol(v1).Money} moneyValue A money value.
* @property {string} startTime The start of the time period over which this metric value&#39;s measurement
applies. The time period has different semantics for different metric
types (cumulative, delta, and gauge). See the metric definition
documentation in the service configuration for details.
* @property {string} stringValue A text string value.
*/

/**
 * @typedef MetricValueSet
 * @memberOf! servicecontrol(v1)
 * @type object
 * @property {string} metricName The metric name defined in the service configuration.
 * @property {servicecontrol(v1).MetricValue[]} metricValues The values in this metric.
 */

/**
 * @typedef Money
 * @memberOf! servicecontrol(v1)
 * @type object
* @property {string} currencyCode The 3-letter currency code defined in ISO 4217.
* @property {integer} nanos Number of nano (10^-9) units of the amount.
The value must be between -999,999,999 and +999,999,999 inclusive.
If `units` is positive, `nanos` must be positive or zero.
If `units` is zero, `nanos` can be positive, zero, or negative.
If `units` is negative, `nanos` must be negative or zero.
For example $-1.75 is represented as `units`=-1 and `nanos`=-750,000,000.
* @property {string} units The whole units of the amount.
For example if `currencyCode` is `&quot;USD&quot;`, then 1 unit is one US dollar.
*/

/**
 * @typedef Operation
 * @memberOf! servicecontrol(v1)
 * @type object
* @property {string} consumerId Identity of the consumer who is using the service.
This field should be filled in for the operations initiated by a
consumer, but not for service-initiated operations that are
not related to a specific consumer.

This can be in one of the following formats:
  project:&lt;project_id&gt;,
  project_number:&lt;project_number&gt;,
  api_key:&lt;api_key&gt;.
* @property {string} endTime End time of the operation.
Required when the operation is used in ServiceController.Report,
but optional when the operation is used in ServiceController.Check.
* @property {string} importance DO NOT USE. This is an experimental field.
* @property {object} labels Labels describing the operation. Only the following labels are allowed:

- Labels describing monitored resources as defined in
  the service configuration.
- Default labels of metric values. When specified, labels defined in the
  metric value override these default.
- The following labels defined by Google Cloud Platform:
    - `cloud.googleapis.com/location` describing the location where the
       operation happened,
    - `servicecontrol.googleapis.com/user_agent` describing the user agent
       of the API request,
    - `servicecontrol.googleapis.com/service_agent` describing the service
       used to handle the API request (e.g. ESP),
    - `servicecontrol.googleapis.com/platform` describing the platform
       where the API is served (e.g. GAE, GCE, GKE).
* @property {servicecontrol(v1).LogEntry[]} logEntries Represents information to be logged.
* @property {servicecontrol(v1).MetricValueSet[]} metricValueSets Represents information about this operation. Each MetricValueSet
corresponds to a metric defined in the service configuration.
The data type used in the MetricValueSet must agree with
the data type specified in the metric definition.

Within a single operation, it is not allowed to have more than one
MetricValue instances that have the same metric names and identical
label value combinations. If a request has such duplicated MetricValue
instances, the entire request is rejected with
an invalid argument error.
* @property {string} operationId Identity of the operation. This must be unique within the scope of the
service that generated the operation. If the service calls
Check() and Report() on the same operation, the two calls should carry
the same id.

UUID version 4 is recommended, though not required.
In scenarios where an operation is computed from existing information
and an idempotent id is desirable for deduplication purpose, UUID version 5
is recommended. See RFC 4122 for details.
* @property {string} operationName Fully qualified name of the operation. Reserved for future use.
* @property {servicecontrol(v1).QuotaProperties} quotaProperties Represents the properties needed for quota check. Applicable only if this
operation is for a quota check request.
* @property {string} resourceContainer The resource name of the parent of a resource in the resource hierarchy.

This can be in one of the following formats:
    - “projects/&lt;project-id or project-number&gt;”
    - “folders/&lt;folder-id&gt;”
    - “organizations/&lt;organization-id&gt;”
* @property {string[]} resourceContainers DO NOT USE.
This field is not ready for use yet.
* @property {string} startTime Required. Start time of the operation.
* @property {object} userLabels User defined labels for the resource that this operation is associated
with.
*/

/**
 * @typedef QuotaError
 * @memberOf! servicecontrol(v1)
 * @type object
* @property {string} code Error code.
* @property {string} description Free-form text that provides details on the cause of the error.
* @property {string} subject Subject to whom this error applies. See the specific enum for more details
on this field. For example, &quot;clientip:&lt;ip address of client&gt;&quot; or
&quot;project:&lt;Google developer project id&gt;&quot;.
*/

/**
 * @typedef QuotaInfo
 * @memberOf! servicecontrol(v1)
 * @type object
* @property {string[]} limitExceeded Quota Metrics that have exceeded quota limits.
For QuotaGroup-based quota, this is QuotaGroup.name
For QuotaLimit-based quota, this is QuotaLimit.name
See: google.api.Quota
Deprecated: Use quota_metrics to get per quota group limit exceeded status.
* @property {object} quotaConsumed Map of quota group name to the actual number of tokens consumed. If the
quota check was not successful, then this will not be populated due to no
quota consumption.

We are not merging this field with &#39;quota_metrics&#39; field because of the
complexity of scaling in Chemist client code base. For simplicity, we will
keep this field for Castor (that scales quota usage) and &#39;quota_metrics&#39;
for SuperQuota (that doesn&#39;t scale quota usage).

* @property {servicecontrol(v1).MetricValueSet[]} quotaMetrics Quota metrics to indicate the usage. Depending on the check request, one or
more of the following metrics will be included:

1. For rate quota, per quota group or per quota metric incremental usage
will be specified using the following delta metric:
  &quot;serviceruntime.googleapis.com/api/consumer/quota_used_count&quot;

2. For allocation quota, per quota metric total usage will be specified
using the following gauge metric:
  &quot;serviceruntime.googleapis.com/allocation/consumer/quota_used_count&quot;

3. For both rate quota and allocation quota, the quota limit reached
condition will be specified using the following boolean metric:
  &quot;serviceruntime.googleapis.com/quota/exceeded&quot;
*/

/**
 * @typedef QuotaOperation
 * @memberOf! servicecontrol(v1)
 * @type object
* @property {string} consumerId Identity of the consumer for whom this quota operation is being performed.

This can be in one of the following formats:
  project:&lt;project_id&gt;,
  project_number:&lt;project_number&gt;,
  api_key:&lt;api_key&gt;.
* @property {object} labels Labels describing the operation.
* @property {string} methodName Fully qualified name of the API method for which this quota operation is
requested. This name is used for matching quota rules or metric rules and
billing status rules defined in service configuration. This field is not
required if the quota operation is performed on non-API resources.

Example of an RPC method name:
    google.example.library.v1.LibraryService.CreateShelf
* @property {string} operationId Identity of the operation. This is expected to be unique within the scope
of the service that generated the operation, and guarantees idempotency in
case of retries.

UUID version 4 is recommended, though not required. In scenarios where an
operation is computed from existing information and an idempotent id is
desirable for deduplication purpose, UUID version 5 is recommended. See
RFC 4122 for details.
* @property {servicecontrol(v1).MetricValueSet[]} quotaMetrics Represents information about this operation. Each MetricValueSet
corresponds to a metric defined in the service configuration.
The data type used in the MetricValueSet must agree with
the data type specified in the metric definition.

Within a single operation, it is not allowed to have more than one
MetricValue instances that have the same metric names and identical
label value combinations. If a request has such duplicated MetricValue
instances, the entire request is rejected with
an invalid argument error.
* @property {string} quotaMode Quota mode for this operation.
*/

/**
 * @typedef QuotaProperties
 * @memberOf! servicecontrol(v1)
 * @type object
* @property {object} limitByIds LimitType IDs that should be used for checking quota. Key in this map
should be a valid LimitType string, and the value is the ID to be used. For
example, an entry &lt;USER, 123&gt; will cause all user quota limits to use 123
as the user ID. See google/api/quota.proto for the definition of LimitType.
CLIENT_PROJECT: Not supported.
USER: Value of this entry will be used for enforcing user-level quota
      limits. If none specified, caller IP passed in the
      servicecontrol.googleapis.com/caller_ip label will be used instead.
      If the server cannot resolve a value for this LimitType, an error
      will be thrown. No validation will be performed on this ID.
Deprecated: use servicecontrol.googleapis.com/user label to send user ID.
* @property {string} quotaMode Quota mode for this operation.
*/

/**
 * @typedef ReleaseQuotaRequest
 * @memberOf! servicecontrol(v1)
 * @type object
* @property {servicecontrol(v1).QuotaOperation} releaseOperation Operation that describes the quota release.
* @property {string} serviceConfigId Specifies which version of service configuration should be used to process
the request. If unspecified or no matching version can be found, the latest
one will be used.
*/

/**
 * @typedef ReleaseQuotaResponse
 * @memberOf! servicecontrol(v1)
 * @type object
* @property {string} operationId The same operation_id value used in the ReleaseQuotaRequest. Used for
logging and diagnostics purposes.
* @property {servicecontrol(v1).MetricValueSet[]} quotaMetrics Quota metrics to indicate the result of release. Depending on the
request, one or more of the following metrics will be included:

1. For rate quota, per quota group or per quota metric released amount
will be specified using the following delta metric:
  &quot;serviceruntime.googleapis.com/api/consumer/quota_refund_count&quot;

2. For allocation quota, per quota metric total usage will be specified
using the following gauge metric:
  &quot;serviceruntime.googleapis.com/allocation/consumer/quota_used_count&quot;

3. For allocation quota, value for each quota limit associated with
the metrics will be specified using the following gauge metric:
  &quot;serviceruntime.googleapis.com/quota/limit&quot;
* @property {servicecontrol(v1).QuotaError[]} releaseErrors Indicates the decision of the release.
* @property {string} serviceConfigId ID of the actual config used to process the request.
*/

/**
 * @typedef ReportError
 * @memberOf! servicecontrol(v1)
 * @type object
 * @property {string} operationId The Operation.operation_id value from the request.
 * @property {servicecontrol(v1).Status} status Details of the error when processing the Operation.
 */

/**
 * @typedef ReportInfo
 * @memberOf! servicecontrol(v1)
 * @type object
 * @property {string} operationId The Operation.operation_id value from the request.
 * @property {servicecontrol(v1).QuotaInfo} quotaInfo Quota usage info when processing the `Operation`.
 */

/**
 * @typedef ReportRequest
 * @memberOf! servicecontrol(v1)
 * @type object
* @property {servicecontrol(v1).Operation[]} operations Operations to be reported.

Typically the service should report one operation per request.
Putting multiple operations into a single request is allowed, but should
be used only when multiple operations are natually available at the time
of the report.

If multiple operations are in a single request, the total request size
should be no larger than 1MB. See ReportResponse.report_errors for
partial failure behavior.
* @property {string} serviceConfigId Specifies which version of service config should be used to process the
request.

If unspecified or no matching version can be found, the
latest one will be used.
*/

/**
 * @typedef ReportResponse
 * @memberOf! servicecontrol(v1)
 * @type object
* @property {servicecontrol(v1).ReportError[]} reportErrors Partial failures, one for each `Operation` in the request that failed
processing. There are three possible combinations of the RPC status:

1. The combination of a successful RPC status and an empty `report_errors`
   list indicates a complete success where all `Operations` in the
   request are processed successfully.
2. The combination of a successful RPC status and a non-empty
   `report_errors` list indicates a partial success where some
   `Operations` in the request succeeded. Each
   `Operation` that failed processing has a corresponding item
   in this list.
3. A failed RPC status indicates a general non-deterministic failure.
   When this happens, it&#39;s impossible to know which of the
   &#39;Operations&#39; in the request succeeded or failed.
* @property {servicecontrol(v1).ReportInfo[]} reportInfos Quota usage for each quota release `Operation` request.

Fully or partially failed quota release request may or may not be present
in `report_quota_info`. For example, a failed quota release request will
have the current quota usage info when precise quota library returns the
info. A deadline exceeded quota request will not have quota usage info.

If there is no quota release request, report_quota_info will be empty.

* @property {string} serviceConfigId The actual config id used to process the request.
*/

/**
 * @typedef RequestMetadata
 * @memberOf! servicecontrol(v1)
 * @type object
* @property {string} callerIp The IP address of the caller.
For caller from internet, this will be public IPv4 or IPv6 address.
For caller from GCE VM with external IP address, this will be the VM&#39;s
external IP address. For caller from GCE VM without external IP address, if
the VM is in the same GCP organization (or project) as the accessed
resource, `caller_ip` will be the GCE VM&#39;s internal IPv4 address, otherwise
it will be redacted to &quot;gce-internal-ip&quot;.
See https://cloud.google.com/compute/docs/vpc/ for more information.
* @property {string} callerSuppliedUserAgent The user agent of the caller.
This information is not authenticated and should be treated accordingly.
For example:

+   `google-api-python-client/1.4.0`:
    The request was made by the Google API client for Python.
+   `Cloud SDK Command Line Tool apitools-client/1.0 gcloud/0.9.62`:
    The request was made by the Google Cloud SDK CLI (gcloud).
+   `AppEngine-Google; (+http://code.google.com/appengine; appid: s~my-project`:
    The request was made from the `my-project` App Engine app.
NOLINT
*/

/**
 * @typedef StartReconciliationRequest
 * @memberOf! servicecontrol(v1)
 * @type object
* @property {servicecontrol(v1).QuotaOperation} reconciliationOperation Operation that describes the quota reconciliation.
* @property {string} serviceConfigId Specifies which version of service configuration should be used to process
the request. If unspecified or no matching version can be found, the latest
one will be used.
*/

/**
 * @typedef StartReconciliationResponse
 * @memberOf! servicecontrol(v1)
 * @type object
* @property {string} operationId The same operation_id value used in the StartReconciliationRequest. Used
for logging and diagnostics purposes.
* @property {servicecontrol(v1).MetricValueSet[]} quotaMetrics Metric values as tracked by One Platform before the start of
reconciliation. The following metrics will be included:

1. Per quota metric total usage will be specified using the following gauge
metric:
  &quot;serviceruntime.googleapis.com/allocation/consumer/quota_used_count&quot;

2. Value for each quota limit associated with the metrics will be specified
using the following gauge metric:
  &quot;serviceruntime.googleapis.com/quota/limit&quot;
* @property {servicecontrol(v1).QuotaError[]} reconciliationErrors Indicates the decision of the reconciliation start.
* @property {string} serviceConfigId ID of the actual config used to process the request.
*/

/**
 * @typedef Status
 * @memberOf! servicecontrol(v1)
 * @type object
* @property {integer} code The status code, which should be an enum value of google.rpc.Code.
* @property {object[]} details A list of messages that carry the error details.  There is a common set of
message types for APIs to use.
* @property {string} message A developer-facing error message, which should be in English. Any
user-facing error message should be localized and sent in the
google.rpc.Status.details field, or localized by the client.
*/
export = Servicecontrol;
