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
  GlobalOptions,
  BodyResponseCallback,
  APIRequestContext,
} from 'googleapis-common';

export namespace file_v1beta1 {
  export interface Options extends GlobalOptions {
    version: 'v1beta1';
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
   * Cloud Filestore API
   *
   * The Cloud Filestore API is used for creating and managing cloud file servers.
   *
   * @example
   * const {google} = require('googleapis');
   * const file = google.file('v1beta1');
   *
   * @namespace file
   * @type {Function}
   * @version v1beta1
   * @variation v1beta1
   * @param {object=} options Options for File
   */
  export class File {
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
   * A set of attributes, each in the format `[KEY]:[VALUE]`.
   */
  export interface Schema$Attributes {
    /**
     * The set of attributes. Each attribute&#39;s key can be up to 128 bytes long. The value can be a string up to 256 bytes, a signed 64-bit integer, or the Boolean values `true` and `false`. For example:      &quot;/instance_id&quot;: &quot;my-instance&quot;     &quot;/http/user_agent&quot;: &quot;&quot;     &quot;/http/request_bytes&quot;: 300     &quot;abc.com/myattribute&quot;: true
     */
    attributeMap?: {[key: string]: Schema$AttributeValue} | null;
    /**
     * The number of attributes that were discarded. Attributes can be discarded because their keys are too long or because there are too many attributes. If this value is 0 then all attributes are valid.
     */
    droppedAttributesCount?: number | null;
  }
  /**
   * The allowed types for [VALUE] in a `[KEY]:[VALUE]` attribute.
   */
  export interface Schema$AttributeValue {
    /**
     * A Boolean value represented by `true` or `false`.
     */
    boolValue?: boolean | null;
    /**
     * A 64-bit signed integer.
     */
    intValue?: string | null;
    /**
     * A string up to 256 bytes long.
     */
    stringValue?: Schema$TruncatableString;
  }
  /**
   * Message for reporting billing requests through Eventstream.
   */
  export interface Schema$BillingView {
    /**
     * Billing requests to be reported for an [Eventstream resource](http://google3/cloud/eventstream/v2/resource_event.proto).  Each request contains billing operations to be reported under a service name. See go/billing-view-construction for documentation on constructing billing view report requests.
     */
    reportRequests?: Schema$ReportRequest[];
  }
  /**
   * The request message for Operations.CancelOperation.
   */
  export interface Schema$CancelOperationRequest {}
  /**
   * Distribution represents a frequency distribution of double-valued sample points. It contains the size of the population of sample points plus additional optional information:    - the arithmetic mean of the samples   - the minimum and maximum of the samples   - the sum-squared-deviation of the samples, used to compute variance   - a histogram of the values of the sample points
   */
  export interface Schema$Distribution {
    /**
     * The number of samples in each histogram bucket. `bucket_counts` are optional. If present, they must sum to the `count` value.  The buckets are defined below in `bucket_option`. There are N buckets. `bucket_counts[0]` is the number of samples in the underflow bucket. `bucket_counts[1]` to `bucket_counts[N-1]` are the numbers of samples in each of the finite buckets. And `bucket_counts[N] is the number of samples in the overflow bucket. See the comments of `bucket_option` below for more details.  Any suffix of trailing zeros may be omitted.
     */
    bucketCounts?: string[] | null;
    /**
     * The total number of samples in the distribution. Must be &gt;= 0.
     */
    count?: string | null;
    /**
     * Example points. Must be in increasing order of `value` field.
     */
    exemplars?: Schema$Exemplar[];
    /**
     * Buckets with arbitrary user-provided width.
     */
    explicitBuckets?: Schema$ExplicitBuckets;
    /**
     * Buckets with exponentially growing width.
     */
    exponentialBuckets?: Schema$ExponentialBuckets;
    /**
     * Buckets with constant width.
     */
    linearBuckets?: Schema$LinearBuckets;
    /**
     * The maximum of the population of values. Ignored if `count` is zero.
     */
    maximum?: number | null;
    /**
     * The arithmetic mean of the samples in the distribution. If `count` is zero then this field must be zero.
     */
    mean?: number | null;
    /**
     * The minimum of the population of values. Ignored if `count` is zero.
     */
    minimum?: number | null;
    /**
     * The sum of squared deviations from the mean:   Sum[i=1..count]((x_i - mean)^2) where each x_i is a sample values. If `count` is zero then this field must be zero, otherwise validation of the request fails.
     */
    sumOfSquaredDeviation?: number | null;
  }
  /**
   * A generic empty message that you can re-use to avoid defining duplicated empty messages in your APIs. A typical example is to use it as the request or the response type of an API method. For instance:      service Foo {       rpc Bar(google.protobuf.Empty) returns (google.protobuf.Empty);     }  The JSON representation for `Empty` is empty JSON object `{}`.
   */
  export interface Schema$Empty {}
  /**
   * Exemplars are example points that may be used to annotate aggregated distribution values. They are metadata that gives information about a particular value added to a Distribution bucket, such as a trace ID that was active when a value was added. They may contain further information, such as a example values and timestamps, origin, etc.
   */
  export interface Schema$Exemplar {
    /**
     * Contextual information about the example value. Examples are:    Trace: type.googleapis.com/google.monitoring.v3.SpanContext    Literal string: type.googleapis.com/google.protobuf.StringValue    Labels dropped during aggregation:     type.googleapis.com/google.monitoring.v3.DroppedLabels  There may be only a single attachment of any given message type in a single exemplar, and this is enforced by the system.
     */
    attachments?: Array<{[key: string]: any}> | null;
    /**
     * The observation (sampling) time of the above value.
     */
    timestamp?: string | null;
    /**
     * Value of the exemplar point. This value determines to which bucket the exemplar belongs.
     */
    value?: number | null;
  }
  /**
   * Describing buckets with arbitrary user-provided width.
   */
  export interface Schema$ExplicitBuckets {
    /**
     * &#39;bound&#39; is a list of strictly increasing boundaries between buckets. Note that a list of length N-1 defines N buckets because of fenceposting. See comments on `bucket_options` for details.  The i&#39;th finite bucket covers the interval   [bound[i-1], bound[i]) where i ranges from 1 to bound_size() - 1. Note that there are no finite buckets at all if &#39;bound&#39; only contains a single element; in that special case the single bound defines the boundary between the underflow and overflow buckets.  bucket number                   lower bound    upper bound  i == 0 (underflow)              -inf           bound[i]  0 &lt; i &lt; bound_size()            bound[i-1]     bound[i]  i == bound_size() (overflow)    bound[i-1]     +inf
     */
    bounds?: number[] | null;
  }
  /**
   * Describing buckets with exponentially growing width.
   */
  export interface Schema$ExponentialBuckets {
    /**
     * The i&#39;th exponential bucket covers the interval   [scale * growth_factor^(i-1), scale * growth_factor^i) where i ranges from 1 to num_finite_buckets inclusive. Must be larger than 1.0.
     */
    growthFactor?: number | null;
    /**
     * The number of finite buckets. With the underflow and overflow buckets, the total number of buckets is `num_finite_buckets` + 2. See comments on `bucket_options` for details.
     */
    numFiniteBuckets?: number | null;
    /**
     * The i&#39;th exponential bucket covers the interval   [scale * growth_factor^(i-1), scale * growth_factor^i) where i ranges from 1 to num_finite_buckets inclusive. Must be &gt; 0.
     */
    scale?: number | null;
  }
  /**
   * File share configuration for the instance.
   */
  export interface Schema$FileShareConfig {
    /**
     * File share capacity in gigabytes (GB). Cloud Filestore defines 1 GB as 1024^3 bytes.
     */
    capacityGb?: string | null;
    /**
     * The name of the file share (must be 16 characters or less).
     */
    name?: string | null;
  }
  /**
   * Represents information regarding an operation.
   */
  export interface Schema$GoogleApiServicecontrolV1Operation {
    /**
     * Identity of the consumer who is using the service. This field should be filled in for the operations initiated by a consumer, but not for service-initiated operations that are not related to a specific consumer.  - This can be in one of the following formats:     - project:PROJECT_ID,     - project`_`number:PROJECT_NUMBER,     - projects/PROJECT_ID or PROJECT_NUMBER,     - folders/FOLDER_NUMBER,     - organizations/ORGANIZATION_NUMBER,     - api`_`key:API_KEY.
     */
    consumerId?: string | null;
    /**
     * End time of the operation. Required when the operation is used in ServiceController.Report, but optional when the operation is used in ServiceController.Check.
     */
    endTime?: string | null;
    /**
     * DO NOT USE. This is an experimental field.
     */
    importance?: string | null;
    /**
     * Labels describing the operation. Only the following labels are allowed:  - Labels describing monitored resources as defined in   the service configuration. - Default labels of metric values. When specified, labels defined in the   metric value override these default. - The following labels defined by Google Cloud Platform:     - `cloud.googleapis.com/location` describing the location where the        operation happened,     - `servicecontrol.googleapis.com/user_agent` describing the user agent        of the API request,     - `servicecontrol.googleapis.com/service_agent` describing the service        used to handle the API request (e.g. ESP),     - `servicecontrol.googleapis.com/platform` describing the platform        where the API is served, such as App Engine, Compute Engine, or        Kubernetes Engine.
     */
    labels?: {[key: string]: string} | null;
    /**
     * Represents information to be logged.
     */
    logEntries?: Schema$LogEntry[];
    /**
     * Represents information about this operation. Each MetricValueSet corresponds to a metric defined in the service configuration. The data type used in the MetricValueSet must agree with the data type specified in the metric definition.  Within a single operation, it is not allowed to have more than one MetricValue instances that have the same metric names and identical label value combinations. If a request has such duplicated MetricValue instances, the entire request is rejected with an invalid argument error.
     */
    metricValueSets?: Schema$MetricValueSet[];
    /**
     * Identity of the operation. This must be unique within the scope of the service that generated the operation. If the service calls Check() and Report() on the same operation, the two calls should carry the same id.  UUID version 4 is recommended, though not required. In scenarios where an operation is computed from existing information and an idempotent id is desirable for deduplication purpose, UUID version 5 is recommended. See RFC 4122 for details.
     */
    operationId?: string | null;
    /**
     * Fully qualified name of the operation. Reserved for future use.
     */
    operationName?: string | null;
    /**
     * Represents the properties needed for quota check. Applicable only if this operation is for a quota check request. If this is not specified, no quota check will be performed.
     */
    quotaProperties?: Schema$QuotaProperties;
    /**
     * The resources that are involved in the operation. The maximum supported number of entries in this field is 100.
     */
    resources?: Schema$ResourceInfo[];
    /**
     * Required. Start time of the operation.
     */
    startTime?: string | null;
    /**
     * Unimplemented. A list of Cloud Trace spans. The span names shall contain the id of the destination project which can be either the produce or the consumer project.
     */
    traceSpans?: Schema$TraceSpan[];
    /**
     * User defined labels for the resource that this operation is associated with. Only a combination of 1000 user labels per consumer project are allowed.
     */
    userLabels?: {[key: string]: string} | null;
  }
  export interface Schema$GoogleCloudSaasacceleratorManagementProvidersV1Instance {
    /**
     * consumer_defined_name is the name that is set by the consumer. On the other hand Name field represents system-assigned id of an instance so consumers are not necessarily aware of it. consumer_defined_name is used for notification/UI purposes for consumer to recognize their instances.
     */
    consumerDefinedName?: string | null;
    /**
     * Output only. Timestamp when the resource was created.
     */
    createTime?: string | null;
    /**
     * Optional. Resource labels to represent user provided metadata. Each label is a key-value pair, where both the key and the value are arbitrary strings provided by the user.
     */
    labels?: {[key: string]: string} | null;
    /**
     * The MaintenancePolicies that have been attached to the instance. The key must be of the type name of the oneof policy name defined in MaintenancePolicy, and the referenced policy must define the same policy type. For complete details of MaintenancePolicy, please refer to go/cloud-saas-mw-ug.
     */
    maintenancePolicyNames?: {[key: string]: string} | null;
    /**
     * The MaintenanceSchedule contains the scheduling information of published maintenance schedule.
     */
    maintenanceSchedules?: {
      [
        key: string
      ]: Schema$GoogleCloudSaasacceleratorManagementProvidersV1MaintenanceSchedule;
    } | null;
    /**
     * Unique name of the resource. It uses the form:  `projects/{project_id}/locations/{location_id}/instances/{instance_id}`
     */
    name?: string | null;
    /**
     * Output only. Custom string attributes used primarily to expose producer-specific information in monitoring dashboards. See go/get-instance-metadata.
     */
    producerMetadata?: {[key: string]: string} | null;
    /**
     * Output only. The list of data plane resources provisioned for this instance, e.g. compute VMs. See go/get-instance-metadata.
     */
    provisionedResources?: Schema$GoogleCloudSaasacceleratorManagementProvidersV1ProvisionedResource[];
    /**
     * Link to the SLM instance template. Only populated when updating SLM instances via SSA&#39;s Actuation service adaptor. Service producers with custom control plane (e.g. Cloud SQL) doesn&#39;t need to populate this field. Instead they should use software_versions.
     */
    slmInstanceTemplate?: string | null;
    /**
     * Output only. SLO metadata for instance classification in the Standardized dataplane SLO platform. See go/cloud-ssa-standard-slo for feature description.
     */
    sloMetadata?: Schema$GoogleCloudSaasacceleratorManagementProvidersV1SloMetadata;
    /**
     * Software versions that are used to deploy this instance. This can be mutated by rollout services.
     */
    softwareVersions?: {[key: string]: string} | null;
    /**
     * Output only. Current lifecycle state of the resource (e.g. if it&#39;s being created or ready to use).
     */
    state?: string | null;
    /**
     * Output only. ID of the associated GCP tenant project. See go/get-instance-metadata.
     */
    tenantProjectId?: string | null;
    /**
     * Output only. Timestamp when the resource was last modified.
     */
    updateTime?: string | null;
  }
  /**
   * Maintenance schedule which is exposed to customer and potentially end user, indicating published upcoming future maintenance schedule
   */
  export interface Schema$GoogleCloudSaasacceleratorManagementProvidersV1MaintenanceSchedule {
    /**
     * Can this scheduled update be rescheduled? By default, it&#39;s true and API needs to do explicitly check whether it&#39;s set, if it&#39;s set as false explicitly, it&#39;s false
     */
    canReschedule?: boolean | null;
    /**
     * The scheduled end time for the maintenance.
     */
    endTime?: string | null;
    /**
     * The rollout management policy this maintenance schedule is associated with. When doing reschedule update request, the reschedule should be against this given policy.
     */
    rolloutManagementPolicy?: string | null;
    /**
     * The scheduled start time for the maintenance.
     */
    startTime?: string | null;
  }
  /**
   * Node information for custom per-node SLO implementations. SSA does not support per-node SLO, but producers can populate per-node information in SloMetadata for custom precomputations. SSA Eligibility Exporter will emit per-node metric based on this information.
   */
  export interface Schema$GoogleCloudSaasacceleratorManagementProvidersV1NodeSloMetadata {
    /**
     * By default node is eligible if instance is eligible. But individual node might be excluded from SLO by adding entry here. For semantic see SloMetadata.exclusions. If both instance and node level exclusions are present for time period, the node level&#39;s reason will be reported by Eligibility Exporter.
     */
    exclusions?: Schema$GoogleCloudSaasacceleratorManagementProvidersV1SloExclusion[];
    /**
     * The location of the node, if different from instance location.
     */
    location?: string | null;
    /**
     * The id of the node. This should be equal to SaasInstanceNode.node_id.
     */
    nodeId?: string | null;
  }
  /**
   * Describes provisioned dataplane resources.
   */
  export interface Schema$GoogleCloudSaasacceleratorManagementProvidersV1ProvisionedResource {
    /**
     * Type of the resource. This can be either a GCP resource or a custom one (e.g. another cloud provider&#39;s VM). For GCP compute resources use singular form of the names listed in GCP compute API documentation (https://cloud.google.com/compute/docs/reference/rest/v1/), prefixed with &#39;compute-&#39;, for example: &#39;compute-instance&#39;, &#39;compute-disk&#39;, &#39;compute-autoscaler&#39;.
     */
    resourceType?: string | null;
    /**
     * URL identifying the resource, e.g. &quot;https://www.googleapis.com/compute/v1/projects/...)&quot;.
     */
    resourceUrl?: string | null;
  }
  /**
   * SloEligibility is a tuple containing eligibility value: true if an instance is eligible for SLO calculation or false if it should be excluded from all SLO-related calculations along with a user-defined reason.
   */
  export interface Schema$GoogleCloudSaasacceleratorManagementProvidersV1SloEligibility {
    /**
     * Whether an instance is eligible or ineligible.
     */
    eligible?: boolean | null;
    /**
     * User-defined reason for the current value of instance eligibility. Usually, this can be directly mapped to the internal state. An empty reason is allowed.
     */
    reason?: string | null;
  }
  /**
   * SloExclusion represents an exclusion in SLI calculation applies to all SLOs.
   */
  export interface Schema$GoogleCloudSaasacceleratorManagementProvidersV1SloExclusion {
    /**
     * Exclusion duration. No restrictions on the possible values.  When an ongoing operation is taking longer than initially expected, an existing entry in the exclusion list can be updated by extending the duration. This is supported by the subsystem exporting eligibility data as long as such extension is committed at least 10 minutes before the original exclusion expiration - otherwise it is possible that there will be &quot;gaps&quot; in the exclusion application in the exported timeseries.
     */
    duration?: string | null;
    /**
     * Human-readable reason for the exclusion. This should be a static string (e.g. &quot;Disruptive update in progress&quot;) and should not contain dynamically generated data (e.g. instance name). Can be left empty.
     */
    reason?: string | null;
    /**
     * Name of an SLI that this exclusion applies to. Can be left empty, signaling that the instance should be excluded from all SLIs defined in the service SLO configuration.
     */
    sliName?: string | null;
    /**
     * Start time of the exclusion. No alignment (e.g. to a full minute) needed.
     */
    startTime?: string | null;
  }
  /**
   * SloMetadata contains resources required for proper SLO classification of the instance.
   */
  export interface Schema$GoogleCloudSaasacceleratorManagementProvidersV1SloMetadata {
    /**
     * Optional. User-defined instance eligibility.
     */
    eligibility?: Schema$GoogleCloudSaasacceleratorManagementProvidersV1SloEligibility;
    /**
     * List of SLO exclusion windows. When multiple entries in the list match (matching the exclusion time-window against current time point) the exclusion reason used in the first matching entry will be published.  It is not needed to include expired exclusion in this list, as only the currently applicable exclusions are taken into account by the eligibility exporting subsystem (the historical state of exclusions will be reflected in the historically produced timeseries regardless of the current state).  This field can be used to mark the instance as temporary ineligible for the purpose of SLO calculation. For permanent instance SLO exclusion, use of custom instance eligibility is recommended. See &#39;eligibility&#39; field below.
     */
    exclusions?: Schema$GoogleCloudSaasacceleratorManagementProvidersV1SloExclusion[];
    /**
     * Optional. List of nodes. Some producers need to use per-node metadata to calculate SLO. This field allows such producers to publish per-node SLO meta data, which will be consumed by SSA Eligibility Exporter and published in the form of per node metric to Monarch.
     */
    nodes?: Schema$GoogleCloudSaasacceleratorManagementProvidersV1NodeSloMetadata[];
    /**
     * Name of the SLO tier the Instance belongs to. This name will be expected to match the tiers specified in the service SLO configuration.  Field is mandatory and must not be empty.
     */
    tier?: string | null;
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
     * Whether or not the response was validated with the origin server before being served from cache. This field is only meaningful if `cache_hit` is True.
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
     * The referer URL of the request, as defined in [HTTP/1.1 Header Field Definitions](http://www.w3.org/Protocols/rfc2616/rfc2616-sec14.html).
     */
    referer?: string | null;
    /**
     * The IP address (IPv4 or IPv6) of the client that issued the HTTP request. Examples: `&quot;192.168.1.1&quot;`, `&quot;FE80::0202:B3FF:FE1E:8329&quot;`.
     */
    remoteIp?: string | null;
    /**
     * The request method. Examples: `&quot;GET&quot;`, `&quot;HEAD&quot;`, `&quot;PUT&quot;`, `&quot;POST&quot;`.
     */
    requestMethod?: string | null;
    /**
     * The size of the HTTP request message in bytes, including the request headers and the request body.
     */
    requestSize?: string | null;
    /**
     * The scheme (http, https), the host name, the path, and the query portion of the URL that was requested. Example: `&quot;http://example.com/some/info?color=red&quot;`.
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
     * The response code indicating the status of the response. Examples: 200, 404.
     */
    status?: number | null;
    /**
     * The user agent sent by the client. Example: `&quot;Mozilla/4.0 (compatible; MSIE 6.0; Windows 98; Q312461; .NET CLR 1.0.3705)&quot;`.
     */
    userAgent?: string | null;
  }
  /**
   * A Cloud Filestore instance.
   */
  export interface Schema$Instance {
    /**
     * Output only. The time when the instance was created.
     */
    createTime?: string | null;
    /**
     * The description of the instance (2048 characters or less).
     */
    description?: string | null;
    /**
     * Server-specified ETag for the instance resource to prevent simultaneous updates from overwriting each other.
     */
    etag?: string | null;
    /**
     * File system shares on the instance. For this version, only a single file share is supported.
     */
    fileShares?: Schema$FileShareConfig[];
    /**
     * Resource labels to represent user provided metadata.
     */
    labels?: {[key: string]: string} | null;
    /**
     * Output only. The resource name of the instance, in the format projects/{project_id}/locations/{location_id}/instances/{instance_id}.
     */
    name?: string | null;
    /**
     * VPC networks to which the instance is connected. For this version, only a single network is supported.
     */
    networks?: Schema$NetworkConfig[];
    /**
     * Output only. The instance state.
     */
    state?: string | null;
    /**
     * Output only. Additional information about the instance state, if available.
     */
    statusMessage?: string | null;
    /**
     * The service tier of the instance.
     */
    tier?: string | null;
  }
  /**
   * Describing buckets with constant width.
   */
  export interface Schema$LinearBuckets {
    /**
     * The number of finite buckets. With the underflow and overflow buckets, the total number of buckets is `num_finite_buckets` + 2. See comments on `bucket_options` for details.
     */
    numFiniteBuckets?: number | null;
    /**
     * The i&#39;th linear bucket covers the interval   [offset + (i-1) * width, offset + i * width) where i ranges from 1 to num_finite_buckets, inclusive.
     */
    offset?: number | null;
    /**
     * The i&#39;th linear bucket covers the interval   [offset + (i-1) * width, offset + i * width) where i ranges from 1 to num_finite_buckets, inclusive. Must be strictly positive.
     */
    width?: number | null;
  }
  /**
   * ListInstancesResponse is the result of ListInstancesRequest.
   */
  export interface Schema$ListInstancesResponse {
    /**
     * A list of instances in the project for the specified location.  If the {location} value in the request is &quot;-&quot;, the response contains a list of instances from all locations. If any location is unreachable, the response will only return instances in reachable locations and the &quot;unreachable&quot; field will be populated with a list of unreachable locations.
     */
    instances?: Schema$Instance[];
    /**
     * The token you can use to retrieve the next page of results. Not returned if there are no more results in the list.
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
  }
  /**
   * A resource that represents Google Cloud Platform location.
   */
  export interface Schema$Location {
    /**
     * The friendly name for this location, typically a nearby city name. For example, &quot;Tokyo&quot;.
     */
    displayName?: string | null;
    /**
     * Cross-service attributes for the location. For example      {&quot;cloud.googleapis.com/region&quot;: &quot;us-east1&quot;}
     */
    labels?: {[key: string]: string} | null;
    /**
     * The canonical id for this location. For example: `&quot;us-east1&quot;`.
     */
    locationId?: string | null;
    /**
     * Service-specific metadata. For example the available capacity at the given location.
     */
    metadata?: {[key: string]: any} | null;
    /**
     * Resource name for the location, which may vary between implementations. For example: `&quot;projects/example-project/locations/us-east1&quot;`
     */
    name?: string | null;
  }
  /**
   * An individual log entry.
   */
  export interface Schema$LogEntry {
    /**
     * Optional. Information about the HTTP request associated with this log entry, if applicable.
     */
    httpRequest?: Schema$HttpRequest;
    /**
     * A unique ID for the log entry used for deduplication. If omitted, the implementation will generate one based on operation_id.
     */
    insertId?: string | null;
    /**
     * A set of user-defined (key, value) data that provides additional information about the log entry.
     */
    labels?: {[key: string]: string} | null;
    /**
     * Required. The log to which this log entry belongs. Examples: `&quot;syslog&quot;`, `&quot;book_log&quot;`.
     */
    name?: string | null;
    /**
     * Optional. Information about an operation associated with the log entry, if applicable.
     */
    operation?: Schema$LogEntryOperation;
    /**
     * The log entry payload, represented as a protocol buffer that is expressed as a JSON object. The only accepted type currently is AuditLog.
     */
    protoPayload?: {[key: string]: any} | null;
    /**
     * The severity of the log entry. The default value is `LogSeverity.DEFAULT`.
     */
    severity?: string | null;
    /**
     * Optional. Source code location information associated with the log entry, if any.
     */
    sourceLocation?: Schema$LogEntrySourceLocation;
    /**
     * The log entry payload, represented as a structure that is expressed as a JSON object.
     */
    structPayload?: {[key: string]: any} | null;
    /**
     * The log entry payload, represented as a Unicode string (UTF-8).
     */
    textPayload?: string | null;
    /**
     * The time the event described by the log entry occurred. If omitted, defaults to operation start time.
     */
    timestamp?: string | null;
    /**
     * Optional. Resource name of the trace associated with the log entry, if any. If this field contains a relative resource name, you can assume the name is relative to `//tracing.googleapis.com`. Example: `projects/my-projectid/traces/06796866738c859f2f19b7cfb3214824`
     */
    trace?: string | null;
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
     * Optional. An arbitrary producer identifier. The combination of `id` and `producer` must be globally unique.  Examples for `producer`: `&quot;MyDivision.MyBigCompany.com&quot;`, `&quot;github.com/MyProject/MyApplication&quot;`.
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
     * Optional. Human-readable name of the function or method being invoked, with optional context such as the class or package name. This information may be used in contexts such as the logs viewer, where a file and line number are less meaningful. The format can vary by language. For example: `qual.if.ied.Class.method` (Java), `dir/package.func` (Go), `function` (Python).
     */
    function?: string | null;
    /**
     * Optional. Line within the source file. 1-based; 0 indicates no line number available.
     */
    line?: string | null;
  }
  /**
   * Represents a single metric value.
   */
  export interface Schema$MetricValue {
    /**
     * A boolean value.
     */
    boolValue?: boolean | null;
    /**
     * A distribution value.
     */
    distributionValue?: Schema$Distribution;
    /**
     * A double precision floating point value.
     */
    doubleValue?: number | null;
    /**
     * The end of the time period over which this metric value&#39;s measurement applies.
     */
    endTime?: string | null;
    /**
     * A signed 64-bit integer value.
     */
    int64Value?: string | null;
    /**
     * The labels describing the metric value. See comments on google.api.servicecontrol.v1.Operation.labels for the overriding relationship. Note that this map must not contain monitored resource labels.
     */
    labels?: {[key: string]: string} | null;
    /**
     * A money value.
     */
    moneyValue?: Schema$Money;
    /**
     * The start of the time period over which this metric value&#39;s measurement applies. The time period has different semantics for different metric types (cumulative, delta, and gauge). See the metric definition documentation in the service configuration for details.
     */
    startTime?: string | null;
    /**
     * A text string value.
     */
    stringValue?: string | null;
  }
  /**
   * Represents a set of metric values in the same metric. Each metric value in the set should have a unique combination of start time, end time, and label values.
   */
  export interface Schema$MetricValueSet {
    /**
     * The metric name defined in the service configuration.
     */
    metricName?: string | null;
    /**
     * The values in this metric.
     */
    metricValues?: Schema$MetricValue[];
  }
  /**
   * Represents an amount of money with its currency type.
   */
  export interface Schema$Money {
    /**
     * The 3-letter currency code defined in ISO 4217.
     */
    currencyCode?: string | null;
    /**
     * Number of nano (10^-9) units of the amount. The value must be between -999,999,999 and +999,999,999 inclusive. If `units` is positive, `nanos` must be positive or zero. If `units` is zero, `nanos` can be positive, zero, or negative. If `units` is negative, `nanos` must be negative or zero. For example $-1.75 is represented as `units`=-1 and `nanos`=-750,000,000.
     */
    nanos?: number | null;
    /**
     * The whole units of the amount. For example if `currencyCode` is `&quot;USD&quot;`, then 1 unit is one US dollar.
     */
    units?: string | null;
  }
  /**
   * Network configuration for the instance.
   */
  export interface Schema$NetworkConfig {
    /**
     * Output only. IPv4 addresses in the format {octet 1}.{octet 2}.{octet 3}.{octet 4} or IPv6 addresses in the format {block 1}:{block 2}:{block 3}:{block 4}:{block 5}:{block 6}:{block 7}:{block 8}.
     */
    ipAddresses?: string[] | null;
    /**
     * Internet protocol versions for which the instance has IP addresses assigned. For this version, only MODE_IPV4 is supported.
     */
    modes?: string[] | null;
    /**
     * The name of the Google Compute Engine [VPC network](/compute/docs/networks-and-firewalls#networks) to which the instance is connected.
     */
    network?: string | null;
    /**
     * A /29 CIDR block for Basic or a /23 CIDR block for High Scale in one of the [internal IP address ranges](https://www.arin.net/knowledge/address_filters.html) that identifies the range of IP addresses reserved for this instance. For example, 10.0.0.0/29 or 192.168.0.0/23. The range you specify can&#39;t overlap with either existing subnets or assigned IP address ranges for other Cloud Filestore instances in the selected VPC network.
     */
    reservedIpRange?: string | null;
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
     * Service-specific metadata associated with the operation.  It typically contains progress information and common metadata such as create time. Some services might not provide such metadata.  Any method that returns a long-running operation should document the metadata type, if any.
     */
    metadata?: {[key: string]: any} | null;
    /**
     * The server-assigned name, which is only unique within the same service that originally returns it. If you use the default HTTP mapping, the `name` should be a resource name ending with `operations/{unique_id}`.
     */
    name?: string | null;
    /**
     * The normal response of the operation in case of success.  If the original method returns no data on success, such as `Delete`, the response is `google.protobuf.Empty`.  If the original method is standard `Get`/`Create`/`Update`, the response should be the resource.  For other methods, the response should have the type `XxxResponse`, where `Xxx` is the original method name.  For example, if the original method name is `TakeSnapshot()`, the inferred response type is `TakeSnapshotResponse`.
     */
    response?: {[key: string]: any} | null;
  }
  /**
   * Represents the metadata of the long-running operation.
   */
  export interface Schema$OperationMetadata {
    /**
     * [Output only] API version used to start the operation.
     */
    apiVersion?: string | null;
    /**
     * [Output only] Identifies whether the user has requested cancellation of the operation. Operations that have successfully been cancelled have Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.
     */
    cancelRequested?: boolean | null;
    /**
     * [Output only] The time the operation was created.
     */
    createTime?: string | null;
    /**
     * [Output only] The time the operation finished running.
     */
    endTime?: string | null;
    /**
     * [Output only] Human-readable status of the operation, if any.
     */
    statusDetail?: string | null;
    /**
     * [Output only] Server-defined resource path for the target of the operation.
     */
    target?: string | null;
    /**
     * [Output only] Name of the verb executed by the operation.
     */
    verb?: string | null;
  }
  /**
   * Represents the properties needed for quota operations.
   */
  export interface Schema$QuotaProperties {
    /**
     * Quota mode for this operation.
     */
    quotaMode?: string | null;
  }
  /**
   * Request message for the Report method.
   */
  export interface Schema$ReportRequest {
    /**
     * Operations to be reported.  Typically the service should report one operation per request. Putting multiple operations into a single request is allowed, but should be used only when multiple operations are natually available at the time of the report.  There is no limit on the number of operations in the same ReportRequest, however the ReportRequest size should be no larger than 1MB. See ReportResponse.report_errors for partial failure behavior.
     */
    operations?: Schema$GoogleApiServicecontrolV1Operation[];
    /**
     * Specifies which version of service config should be used to process the request.  If unspecified or no matching version can be found, the latest one will be used.
     */
    serviceConfigId?: string | null;
    /**
     * The service name as specified in its service configuration. For example, `&quot;pubsub.googleapis.com&quot;`.  See [google.api.Service](https://cloud.google.com/service-management/reference/rpc/google.api#google.api.Service) for the definition of a service name.
     */
    serviceName?: string | null;
  }
  /**
   * Describes a resource associated with this operation.
   */
  export interface Schema$ResourceInfo {
    /**
     * The identifier of the parent of this resource instance. Must be in one of the following formats:     - “projects/&lt;project-id or project-number&gt;”     - “folders/&lt;folder-id&gt;”     - “organizations/&lt;organization-id&gt;”
     */
    resourceContainer?: string | null;
    /**
     * The location of the resource. If not empty, the resource will be checked against location policy. The value must be a valid zone, region or multiregion. For example: &quot;europe-west4&quot; or &quot;northamerica-northeast1-a&quot;
     */
    resourceLocation?: string | null;
    /**
     * Name of the resource. This is used for auditing purposes.
     */
    resourceName?: string | null;
  }
  /**
   * The `Status` type defines a logical error model that is suitable for different programming environments, including REST APIs and RPC APIs. It is used by [gRPC](https://github.com/grpc). Each `Status` message contains three pieces of data: error code, error message, and error details.  You can find out more about this error model and how to work with it in the [API Design Guide](https://cloud.google.com/apis/design/errors).
   */
  export interface Schema$Status {
    /**
     * The status code, which should be an enum value of google.rpc.Code.
     */
    code?: number | null;
    /**
     * A list of messages that carry the error details.  There is a common set of message types for APIs to use.
     */
    details?: Array<{[key: string]: any}> | null;
    /**
     * A developer-facing error message, which should be in English. Any user-facing error message should be localized and sent in the google.rpc.Status.details field, or localized by the client.
     */
    message?: string | null;
  }
  /**
   * A span represents a single operation within a trace. Spans can be nested to form a trace tree. Often, a trace contains a root span that describes the end-to-end latency, and one or more subspans for its sub-operations. A trace can also contain multiple root spans, or none at all. Spans do not need to be contiguous&amp;mdash;there may be gaps or overlaps between spans in a trace.
   */
  export interface Schema$TraceSpan {
    /**
     * A set of attributes on the span. You can have up to 32 attributes per span.
     */
    attributes?: Schema$Attributes;
    /**
     * An optional number of child spans that were generated while this span was active. If set, allows implementation to detect missing child spans.
     */
    childSpanCount?: number | null;
    /**
     * A description of the span&#39;s operation (up to 128 bytes). Stackdriver Trace displays the description in the Google Cloud Platform Console. For example, the display name can be a qualified method name or a file name and a line number where the operation is called. A best practice is to use the same display name within an application and at the same call point. This makes it easier to correlate spans in different traces.
     */
    displayName?: Schema$TruncatableString;
    /**
     * The end time of the span. On the client side, this is the time kept by the local machine where the span execution ends. On the server side, this is the time when the server application handler stops running.
     */
    endTime?: string | null;
    /**
     * The resource name of the span in the following format:      projects/[PROJECT_ID]/traces/[TRACE_ID]/spans/SPAN_ID is a unique identifier for a trace within a project; it is a 32-character hexadecimal encoding of a 16-byte array.  [SPAN_ID] is a unique identifier for a span within a trace; it is a 16-character hexadecimal encoding of an 8-byte array.
     */
    name?: string | null;
    /**
     * The [SPAN_ID] of this span&#39;s parent span. If this is a root span, then this field must be empty.
     */
    parentSpanId?: string | null;
    /**
     * (Optional) Set this parameter to indicate whether this span is in the same process as its parent. If you do not set this parameter, Stackdriver Trace is unable to take advantage of this helpful information.
     */
    sameProcessAsParentSpan?: boolean | null;
    /**
     * The [SPAN_ID] portion of the span&#39;s resource name.
     */
    spanId?: string | null;
    /**
     * Distinguishes between spans generated in a particular context. For example, two spans with the same name may be distinguished using `CLIENT` (caller) and `SERVER` (callee) to identify an RPC call.
     */
    spanKind?: string | null;
    /**
     * The start time of the span. On the client side, this is the time kept by the local machine where the span execution starts. On the server side, this is the time when the server&#39;s application handler starts running.
     */
    startTime?: string | null;
    /**
     * An optional final status for this span.
     */
    status?: Schema$Status;
  }
  /**
   * Represents a string that might be shortened to a specified length.
   */
  export interface Schema$TruncatableString {
    /**
     * The number of bytes removed from the original string. If this value is 0, then the string was not shortened.
     */
    truncatedByteCount?: number | null;
    /**
     * The shortened string. For example, if the original string is 500 bytes long and the limit of the string is 128 bytes, then `value` contains the first 128 bytes of the 500-byte string.  Truncation always happens on a UTF8 character boundary. If there are multi-byte characters in the string, then the length of the shortened string might be less than the size limit.
     */
    value?: string | null;
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
    instances: Resource$Projects$Locations$Instances;
    operations: Resource$Projects$Locations$Operations;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.instances = new Resource$Projects$Locations$Instances(this.context);
      this.operations = new Resource$Projects$Locations$Operations(
        this.context
      );
    }

    /**
     * file.projects.locations.get
     * @desc Gets information about a location.
     * @example
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/file.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const file = google.file('v1beta1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options('auth', authClient);
     *
     *   // Do the magic
     *   const res = await file.projects.locations.get({
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
     * @alias file.projects.locations.get
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.name Resource name for the location.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    get(
      params?: Params$Resource$Projects$Locations$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Location>;
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
        | BodyResponseCallback<Schema$Location>,
      optionsOrCallback?: MethodOptions | BodyResponseCallback<Schema$Location>,
      callback?: BodyResponseCallback<Schema$Location>
    ): void | GaxiosPromise<Schema$Location> {
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

      const rootUrl = options.rootUrl || 'https://file.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$Location>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Location>(parameters);
      }
    }

    /**
     * file.projects.locations.list
     * @desc Lists information about the supported locations for this service.
     * @example
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/file.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const file = google.file('v1beta1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options('auth', authClient);
     *
     *   // Do the magic
     *   const res = await file.projects.locations.list({
     *     // The standard list filter.
     *     filter: 'placeholder-value',
     *     // If true, the returned list will include locations which are not yet
     *     // revealed.
     *     includeUnrevealedLocations: 'placeholder-value',
     *     // The resource that owns the locations collection, if applicable.
     *     name: 'projects/my-project',
     *     // The standard list page size.
     *     pageSize: 'placeholder-value',
     *     // The standard list page token.
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
     * @alias file.projects.locations.list
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string=} params.filter The standard list filter.
     * @param {boolean=} params.includeUnrevealedLocations If true, the returned list will include locations which are not yet revealed.
     * @param {string} params.name The resource that owns the locations collection, if applicable.
     * @param {integer=} params.pageSize The standard list page size.
     * @param {string=} params.pageToken The standard list page token.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list(
      params?: Params$Resource$Projects$Locations$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ListLocationsResponse>;
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
        | BodyResponseCallback<Schema$ListLocationsResponse>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$ListLocationsResponse>,
      callback?: BodyResponseCallback<Schema$ListLocationsResponse>
    ): void | GaxiosPromise<Schema$ListLocationsResponse> {
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

      const rootUrl = options.rootUrl || 'https://file.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta1/{+name}/locations').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
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
        createAPIRequest<Schema$ListLocationsResponse>(parameters, callback);
      } else {
        return createAPIRequest<Schema$ListLocationsResponse>(parameters);
      }
    }
  }

  export interface Params$Resource$Projects$Locations$Get
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Resource name for the location.
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Locations$List
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * The standard list filter.
     */
    filter?: string;
    /**
     * If true, the returned list will include locations which are not yet revealed.
     */
    includeUnrevealedLocations?: boolean;
    /**
     * The resource that owns the locations collection, if applicable.
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
  }

  export class Resource$Projects$Locations$Instances {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * file.projects.locations.instances.create
     * @desc Creates an instance.
     * @example
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/file.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const file = google.file('v1beta1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options('auth', authClient);
     *
     *   // Do the magic
     *   const res = await file.projects.locations.instances.create({
     *     // Required. The ID of the instance to create.
     *     // The ID must be unique within the specified project and location.
     *     //
     *     // This value must start with a lowercase letter followed by up to 62
     *     // lowercase letters, numbers, or hyphens, and cannot end with a hyphen.
     *     instanceId: 'placeholder-value',
     *     // Required. The instance's project and location, in the format
     *     // projects/{project_id}/locations/{location}. In Cloud Filestore,
     *     // locations map to GCP zones, for example **us-west1-b**.
     *     parent: 'projects/my-project/locations/my-location',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "createTime": "my_createTime",
     *       //   "description": "my_description",
     *       //   "etag": "my_etag",
     *       //   "fileShares": [],
     *       //   "labels": {},
     *       //   "name": "my_name",
     *       //   "networks": [],
     *       //   "state": "my_state",
     *       //   "statusMessage": "my_statusMessage",
     *       //   "tier": "my_tier"
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
     * @alias file.projects.locations.instances.create
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string=} params.instanceId Required. The ID of the instance to create. The ID must be unique within the specified project and location.  This value must start with a lowercase letter followed by up to 62 lowercase letters, numbers, or hyphens, and cannot end with a hyphen.
     * @param {string} params.parent Required. The instance's project and location, in the format projects/{project_id}/locations/{location}. In Cloud Filestore, locations map to GCP zones, for example **us-west1-b**.
     * @param {().Instance} params.requestBody Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    create(
      params?: Params$Resource$Projects$Locations$Instances$Create,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Operation>;
    create(
      params: Params$Resource$Projects$Locations$Instances$Create,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    create(
      params: Params$Resource$Projects$Locations$Instances$Create,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    create(callback: BodyResponseCallback<Schema$Operation>): void;
    create(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Instances$Create
        | BodyResponseCallback<Schema$Operation>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$Operation>,
      callback?: BodyResponseCallback<Schema$Operation>
    ): void | GaxiosPromise<Schema$Operation> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Instances$Create;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Instances$Create;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://file.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta1/{+parent}/instances').replace(
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
        createAPIRequest<Schema$Operation>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Operation>(parameters);
      }
    }

    /**
     * file.projects.locations.instances.delete
     * @desc Deletes an instance.
     * @example
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/file.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const file = google.file('v1beta1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options('auth', authClient);
     *
     *   // Do the magic
     *   const res = await file.projects.locations.instances.delete({
     *     // Required. The instance resource name, in the format
     *     // projects/{project_id}/locations/{location}/instances/{instance_id}
     *     name: 'projects/my-project/locations/my-location/instances/my-instance',
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
     * @alias file.projects.locations.instances.delete
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.name Required. The instance resource name, in the format projects/{project_id}/locations/{location}/instances/{instance_id}
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    delete(
      params?: Params$Resource$Projects$Locations$Instances$Delete,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Operation>;
    delete(
      params: Params$Resource$Projects$Locations$Instances$Delete,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    delete(
      params: Params$Resource$Projects$Locations$Instances$Delete,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    delete(callback: BodyResponseCallback<Schema$Operation>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Instances$Delete
        | BodyResponseCallback<Schema$Operation>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$Operation>,
      callback?: BodyResponseCallback<Schema$Operation>
    ): void | GaxiosPromise<Schema$Operation> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Instances$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Instances$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://file.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$Operation>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Operation>(parameters);
      }
    }

    /**
     * file.projects.locations.instances.get
     * @desc Gets the details of a specific instance.
     * @example
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/file.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const file = google.file('v1beta1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options('auth', authClient);
     *
     *   // Do the magic
     *   const res = await file.projects.locations.instances.get({
     *     // Required. The instance resource name, in the format
     *     // projects/{project_id}/locations/{location}/instances/{instance_id}.
     *     name: 'projects/my-project/locations/my-location/instances/my-instance',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "createTime": "my_createTime",
     *   //   "description": "my_description",
     *   //   "etag": "my_etag",
     *   //   "fileShares": [],
     *   //   "labels": {},
     *   //   "name": "my_name",
     *   //   "networks": [],
     *   //   "state": "my_state",
     *   //   "statusMessage": "my_statusMessage",
     *   //   "tier": "my_tier"
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * @alias file.projects.locations.instances.get
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.name Required. The instance resource name, in the format projects/{project_id}/locations/{location}/instances/{instance_id}.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    get(
      params?: Params$Resource$Projects$Locations$Instances$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Instance>;
    get(
      params: Params$Resource$Projects$Locations$Instances$Get,
      options: MethodOptions | BodyResponseCallback<Schema$Instance>,
      callback: BodyResponseCallback<Schema$Instance>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Instances$Get,
      callback: BodyResponseCallback<Schema$Instance>
    ): void;
    get(callback: BodyResponseCallback<Schema$Instance>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Instances$Get
        | BodyResponseCallback<Schema$Instance>,
      optionsOrCallback?: MethodOptions | BodyResponseCallback<Schema$Instance>,
      callback?: BodyResponseCallback<Schema$Instance>
    ): void | GaxiosPromise<Schema$Instance> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Instances$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Instances$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://file.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$Instance>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Instance>(parameters);
      }
    }

    /**
     * file.projects.locations.instances.list
     * @desc Lists all instances in a project for either a specified location or for all locations.
     * @example
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/file.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const file = google.file('v1beta1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options('auth', authClient);
     *
     *   // Do the magic
     *   const res = await file.projects.locations.instances.list({
     *     // List filter.
     *     filter: 'placeholder-value',
     *     // Sort results. Supported values are "name", "name desc" or "" (unsorted).
     *     orderBy: 'placeholder-value',
     *     // The maximum number of items to return.
     *     pageSize: 'placeholder-value',
     *     // The next_page_token value to use if there are additional
     *     // results to retrieve for this list request.
     *     pageToken: 'placeholder-value',
     *     // Required. The project and location for which to retrieve instance information,
     *     // in the format projects/{project_id}/locations/{location}. In Cloud
     *     // Filestore, locations map to GCP zones, for example **us-west1-b**. To
     *     // retrieve instance information for all locations, use "-" for the {location}
     *     // value.
     *     parent: 'projects/my-project/locations/my-location',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "instances": [],
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
     * @alias file.projects.locations.instances.list
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string=} params.filter List filter.
     * @param {string=} params.orderBy Sort results. Supported values are "name", "name desc" or "" (unsorted).
     * @param {integer=} params.pageSize The maximum number of items to return.
     * @param {string=} params.pageToken The next_page_token value to use if there are additional results to retrieve for this list request.
     * @param {string} params.parent Required. The project and location for which to retrieve instance information, in the format projects/{project_id}/locations/{location}. In Cloud Filestore, locations map to GCP zones, for example **us-west1-b**. To retrieve instance information for all locations, use "-" for the {location} value.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list(
      params?: Params$Resource$Projects$Locations$Instances$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ListInstancesResponse>;
    list(
      params: Params$Resource$Projects$Locations$Instances$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ListInstancesResponse>,
      callback: BodyResponseCallback<Schema$ListInstancesResponse>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Instances$List,
      callback: BodyResponseCallback<Schema$ListInstancesResponse>
    ): void;
    list(callback: BodyResponseCallback<Schema$ListInstancesResponse>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Instances$List
        | BodyResponseCallback<Schema$ListInstancesResponse>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$ListInstancesResponse>,
      callback?: BodyResponseCallback<Schema$ListInstancesResponse>
    ): void | GaxiosPromise<Schema$ListInstancesResponse> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Instances$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Instances$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://file.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta1/{+parent}/instances').replace(
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
        createAPIRequest<Schema$ListInstancesResponse>(parameters, callback);
      } else {
        return createAPIRequest<Schema$ListInstancesResponse>(parameters);
      }
    }

    /**
     * file.projects.locations.instances.patch
     * @desc Updates the settings of a specific instance.
     * @example
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/file.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const file = google.file('v1beta1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options('auth', authClient);
     *
     *   // Do the magic
     *   const res = await file.projects.locations.instances.patch({
     *     // Output only. The resource name of the instance, in the format
     *     // projects/{project_id}/locations/{location_id}/instances/{instance_id}.
     *     name: 'projects/my-project/locations/my-location/instances/my-instance',
     *     // Required. Mask of fields to update.  At least one path must be supplied in this
     *     // field.  The elements of the repeated paths field may only include these
     *     // fields:
     *     //
     *     // * "description"
     *     // * "file_shares"
     *     // * "labels"
     *     updateMask: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "createTime": "my_createTime",
     *       //   "description": "my_description",
     *       //   "etag": "my_etag",
     *       //   "fileShares": [],
     *       //   "labels": {},
     *       //   "name": "my_name",
     *       //   "networks": [],
     *       //   "state": "my_state",
     *       //   "statusMessage": "my_statusMessage",
     *       //   "tier": "my_tier"
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
     * @alias file.projects.locations.instances.patch
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.name Output only. The resource name of the instance, in the format projects/{project_id}/locations/{location_id}/instances/{instance_id}.
     * @param {string=} params.updateMask Required. Mask of fields to update.  At least one path must be supplied in this field.  The elements of the repeated paths field may only include these fields:  * "description" * "file_shares" * "labels"
     * @param {().Instance} params.requestBody Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    patch(
      params?: Params$Resource$Projects$Locations$Instances$Patch,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Operation>;
    patch(
      params: Params$Resource$Projects$Locations$Instances$Patch,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    patch(
      params: Params$Resource$Projects$Locations$Instances$Patch,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    patch(callback: BodyResponseCallback<Schema$Operation>): void;
    patch(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Instances$Patch
        | BodyResponseCallback<Schema$Operation>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$Operation>,
      callback?: BodyResponseCallback<Schema$Operation>
    ): void | GaxiosPromise<Schema$Operation> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Instances$Patch;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Instances$Patch;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://file.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$Operation>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Operation>(parameters);
      }
    }
  }

  export interface Params$Resource$Projects$Locations$Instances$Create
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Required. The ID of the instance to create. The ID must be unique within the specified project and location.  This value must start with a lowercase letter followed by up to 62 lowercase letters, numbers, or hyphens, and cannot end with a hyphen.
     */
    instanceId?: string;
    /**
     * Required. The instance's project and location, in the format projects/{project_id}/locations/{location}. In Cloud Filestore, locations map to GCP zones, for example **us-west1-b**.
     */
    parent?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$Instance;
  }
  export interface Params$Resource$Projects$Locations$Instances$Delete
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Required. The instance resource name, in the format projects/{project_id}/locations/{location}/instances/{instance_id}
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Locations$Instances$Get
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Required. The instance resource name, in the format projects/{project_id}/locations/{location}/instances/{instance_id}.
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Locations$Instances$List
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * List filter.
     */
    filter?: string;
    /**
     * Sort results. Supported values are "name", "name desc" or "" (unsorted).
     */
    orderBy?: string;
    /**
     * The maximum number of items to return.
     */
    pageSize?: number;
    /**
     * The next_page_token value to use if there are additional results to retrieve for this list request.
     */
    pageToken?: string;
    /**
     * Required. The project and location for which to retrieve instance information, in the format projects/{project_id}/locations/{location}. In Cloud Filestore, locations map to GCP zones, for example **us-west1-b**. To retrieve instance information for all locations, use "-" for the {location} value.
     */
    parent?: string;
  }
  export interface Params$Resource$Projects$Locations$Instances$Patch
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Output only. The resource name of the instance, in the format projects/{project_id}/locations/{location_id}/instances/{instance_id}.
     */
    name?: string;
    /**
     * Required. Mask of fields to update.  At least one path must be supplied in this field.  The elements of the repeated paths field may only include these fields:  * "description" * "file_shares" * "labels"
     */
    updateMask?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$Instance;
  }

  export class Resource$Projects$Locations$Operations {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * file.projects.locations.operations.cancel
     * @desc Starts asynchronous cancellation on a long-running operation.  The server makes a best effort to cancel the operation, but success is not guaranteed.  If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.  Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.
     * @example
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/file.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const file = google.file('v1beta1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options('auth', authClient);
     *
     *   // Do the magic
     *   const res = await file.projects.locations.operations.cancel({
     *     // The name of the operation resource to be cancelled.
     *     name: 'projects/my-project/locations/my-location/operations/my-operation',
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
     * @alias file.projects.locations.operations.cancel
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.name The name of the operation resource to be cancelled.
     * @param {().CancelOperationRequest} params.requestBody Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    cancel(
      params?: Params$Resource$Projects$Locations$Operations$Cancel,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Empty>;
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
        | BodyResponseCallback<Schema$Empty>,
      optionsOrCallback?: MethodOptions | BodyResponseCallback<Schema$Empty>,
      callback?: BodyResponseCallback<Schema$Empty>
    ): void | GaxiosPromise<Schema$Empty> {
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

      const rootUrl = options.rootUrl || 'https://file.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta1/{+name}:cancel').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
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
        createAPIRequest<Schema$Empty>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Empty>(parameters);
      }
    }

    /**
     * file.projects.locations.operations.delete
     * @desc Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.
     * @example
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/file.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const file = google.file('v1beta1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options('auth', authClient);
     *
     *   // Do the magic
     *   const res = await file.projects.locations.operations.delete({
     *     // The name of the operation resource to be deleted.
     *     name: 'projects/my-project/locations/my-location/operations/my-operation',
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
     * @alias file.projects.locations.operations.delete
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.name The name of the operation resource to be deleted.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    delete(
      params?: Params$Resource$Projects$Locations$Operations$Delete,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Empty>;
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
        | BodyResponseCallback<Schema$Empty>,
      optionsOrCallback?: MethodOptions | BodyResponseCallback<Schema$Empty>,
      callback?: BodyResponseCallback<Schema$Empty>
    ): void | GaxiosPromise<Schema$Empty> {
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

      const rootUrl = options.rootUrl || 'https://file.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
     * file.projects.locations.operations.get
     * @desc Gets the latest state of a long-running operation.  Clients can use this method to poll the operation result at intervals as recommended by the API service.
     * @example
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/file.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const file = google.file('v1beta1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options('auth', authClient);
     *
     *   // Do the magic
     *   const res = await file.projects.locations.operations.get({
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
     * @alias file.projects.locations.operations.get
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.name The name of the operation resource.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    get(
      params?: Params$Resource$Projects$Locations$Operations$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Operation>;
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
        | BodyResponseCallback<Schema$Operation>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$Operation>,
      callback?: BodyResponseCallback<Schema$Operation>
    ): void | GaxiosPromise<Schema$Operation> {
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

      const rootUrl = options.rootUrl || 'https://file.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$Operation>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Operation>(parameters);
      }
    }

    /**
     * file.projects.locations.operations.list
     * @desc Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.  NOTE: the `name` binding allows API services to override the binding to use different resource name schemes, such as `users/x/operations`. To override the binding, API services can add a binding such as `"/v1/{name=users/x}/operations"` to their service configuration. For backwards compatibility, the default name includes the operations collection id, however overriding users must ensure the name binding is the parent resource, without the operations collection id.
     * @example
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/file.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const file = google.file('v1beta1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options('auth', authClient);
     *
     *   // Do the magic
     *   const res = await file.projects.locations.operations.list({
     *     // The standard list filter.
     *     filter: 'placeholder-value',
     *     // The name of the operation's parent resource.
     *     name: 'projects/my-project/locations/my-location',
     *     // The standard list page size.
     *     pageSize: 'placeholder-value',
     *     // The standard list page token.
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
     * @alias file.projects.locations.operations.list
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string=} params.filter The standard list filter.
     * @param {string} params.name The name of the operation's parent resource.
     * @param {integer=} params.pageSize The standard list page size.
     * @param {string=} params.pageToken The standard list page token.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list(
      params?: Params$Resource$Projects$Locations$Operations$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ListOperationsResponse>;
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
        | BodyResponseCallback<Schema$ListOperationsResponse>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$ListOperationsResponse>,
      callback?: BodyResponseCallback<Schema$ListOperationsResponse>
    ): void | GaxiosPromise<Schema$ListOperationsResponse> {
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

      const rootUrl = options.rootUrl || 'https://file.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta1/{+name}/operations').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
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
        createAPIRequest<Schema$ListOperationsResponse>(parameters, callback);
      } else {
        return createAPIRequest<Schema$ListOperationsResponse>(parameters);
      }
    }
  }

  export interface Params$Resource$Projects$Locations$Operations$Cancel
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * The name of the operation resource to be cancelled.
     */
    name?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$CancelOperationRequest;
  }
  export interface Params$Resource$Projects$Locations$Operations$Delete
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * The name of the operation resource to be deleted.
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Locations$Operations$Get
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * The name of the operation resource.
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Locations$Operations$List
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

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
  }
}
