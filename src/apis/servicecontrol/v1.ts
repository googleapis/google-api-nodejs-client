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

export namespace servicecontrol_v1 {
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
   * Service Control API
   *
   * Provides admission control and telemetry reporting for services integrated with Service Infrastructure.
   *
   * @example
   * ```js
   * const {google} = require('googleapis');
   * const servicecontrol = google.servicecontrol('v1');
   * ```
   */
  export class Servicecontrol {
    context: APIRequestContext;
    services: Resource$Services;

    constructor(options: GlobalOptions, google?: GoogleConfigurable) {
      this.context = {
        _options: options || {},
        google,
      };

      this.services = new Resource$Services(this.context);
    }
  }

  export interface Schema$AllocateInfo {
    /**
     * A list of label keys that were unused by the server in processing the request. Thus, for similar requests repeated in a certain future time window, the caller can choose to ignore these labels in the requests to achieve better client-side cache hits and quota aggregation for rate quota. This field is not populated for allocation quota checks.
     */
    unusedArguments?: string[] | null;
  }
  /**
   * Request message for the AllocateQuota method.
   */
  export interface Schema$AllocateQuotaRequest {
    /**
     * Operation that describes the quota allocation.
     */
    allocateOperation?: Schema$QuotaOperation;
    /**
     * Specifies which version of service configuration should be used to process the request. If unspecified or no matching version can be found, the latest one will be used.
     */
    serviceConfigId?: string | null;
  }
  /**
   * Response message for the AllocateQuota method.
   */
  export interface Schema$AllocateQuotaResponse {
    /**
     * Indicates the decision of the allocate.
     */
    allocateErrors?: Schema$QuotaError[];
    /**
     * WARNING: DO NOT use this field until this warning message is removed.
     */
    allocateInfo?: Schema$AllocateInfo;
    /**
     * The same operation_id value used in the AllocateQuotaRequest. Used for logging and diagnostics purposes.
     */
    operationId?: string | null;
    /**
     * Quota metrics to indicate the result of allocation. Depending on the request, one or more of the following metrics will be included: 1. Per quota group or per quota metric incremental usage will be specified using the following delta metric : "serviceruntime.googleapis.com/api/consumer/quota_used_count" 2. The quota limit reached condition will be specified using the following boolean metric : "serviceruntime.googleapis.com/quota/exceeded"
     */
    quotaMetrics?: Schema$MetricValueSet[];
    /**
     * ID of the actual config used to process the request.
     */
    serviceConfigId?: string | null;
  }
  /**
   * A set of attributes, each in the format `[KEY]:[VALUE]`.
   */
  export interface Schema$Attributes {
    /**
     * The set of attributes. Each attribute's key can be up to 128 bytes long. The value can be a string up to 256 bytes, a signed 64-bit integer, or the Boolean values `true` and `false`. For example: "/instance_id": "my-instance" "/http/user_agent": "" "/http/request_bytes": 300 "example.com/myattribute": true
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
   * Common audit log format for Google Cloud Platform API operations.
   */
  export interface Schema$AuditLog {
    /**
     * Authentication information.
     */
    authenticationInfo?: Schema$AuthenticationInfo;
    /**
     * Authorization information. If there are multiple resources or permissions involved, then there is one AuthorizationInfo element for each {resource, permission\} tuple.
     */
    authorizationInfo?: Schema$AuthorizationInfo[];
    /**
     * Other service-specific data about the request, response, and other information associated with the current audited event.
     */
    metadata?: {[key: string]: any} | null;
    /**
     * The name of the service method or operation. For API calls, this should be the name of the API method. For example, "google.cloud.bigquery.v2.TableService.InsertTable" "google.logging.v2.ConfigServiceV2.CreateSink"
     */
    methodName?: string | null;
    /**
     * The number of items returned from a List or Query API method, if applicable.
     */
    numResponseItems?: string | null;
    /**
     * Indicates the policy violations for this request. If the request is denied by the policy, violation information will be logged here.
     */
    policyViolationInfo?: Schema$PolicyViolationInfo;
    /**
     * The operation request. This may not include all request parameters, such as those that are too large, privacy-sensitive, or duplicated elsewhere in the log record. It should never include user-generated data, such as file contents. When the JSON object represented here has a proto equivalent, the proto name will be indicated in the `@type` property.
     */
    request?: {[key: string]: any} | null;
    /**
     * Metadata about the operation.
     */
    requestMetadata?: Schema$RequestMetadata;
    /**
     * The resource location information.
     */
    resourceLocation?: Schema$ResourceLocation;
    /**
     * The resource or collection that is the target of the operation. The name is a scheme-less URI, not including the API service name. For example: "projects/PROJECT_ID/zones/us-central1-a/instances" "projects/PROJECT_ID/datasets/DATASET_ID"
     */
    resourceName?: string | null;
    /**
     * The resource's original state before mutation. Present only for operations which have successfully modified the targeted resource(s). In general, this field should contain all changed fields, except those that are already been included in `request`, `response`, `metadata` or `service_data` fields. When the JSON object represented here has a proto equivalent, the proto name will be indicated in the `@type` property.
     */
    resourceOriginalState?: {[key: string]: any} | null;
    /**
     * The operation response. This may not include all response elements, such as those that are too large, privacy-sensitive, or duplicated elsewhere in the log record. It should never include user-generated data, such as file contents. When the JSON object represented here has a proto equivalent, the proto name will be indicated in the `@type` property.
     */
    response?: {[key: string]: any} | null;
    /**
     * Deprecated. Use the `metadata` field instead. Other service-specific data about the request, response, and other activities.
     */
    serviceData?: {[key: string]: any} | null;
    /**
     * The name of the API service performing the operation. For example, `"compute.googleapis.com"`.
     */
    serviceName?: string | null;
    /**
     * The status of the overall operation.
     */
    status?: Schema$Status;
  }
  /**
   * This message defines request authentication attributes. Terminology is based on the JSON Web Token (JWT) standard, but the terms also correlate to concepts in other standards.
   */
  export interface Schema$Auth {
    /**
     * A list of access level resource names that allow resources to be accessed by authenticated requester. It is part of Secure GCP processing for the incoming request. An access level string has the format: "//{api_service_name\}/accessPolicies/{policy_id\}/accessLevels/{short_name\}" Example: "//accesscontextmanager.googleapis.com/accessPolicies/MY_POLICY_ID/accessLevels/MY_LEVEL"
     */
    accessLevels?: string[] | null;
    /**
     * The intended audience(s) for this authentication information. Reflects the audience (`aud`) claim within a JWT. The audience value(s) depends on the `issuer`, but typically include one or more of the following pieces of information: * The services intended to receive the credential. For example, ["https://pubsub.googleapis.com/", "https://storage.googleapis.com/"]. * A set of service-based scopes. For example, ["https://www.googleapis.com/auth/cloud-platform"]. * The client id of an app, such as the Firebase project id for JWTs from Firebase Auth. Consult the documentation for the credential issuer to determine the information provided.
     */
    audiences?: string[] | null;
    /**
     * Structured claims presented with the credential. JWTs include `{key: value\}` pairs for standard and private claims. The following is a subset of the standard required and optional claims that would typically be presented for a Google-based JWT: {'iss': 'accounts.google.com', 'sub': '113289723416554971153', 'aud': ['123456789012', 'pubsub.googleapis.com'], 'azp': '123456789012.apps.googleusercontent.com', 'email': 'jsmith@example.com', 'iat': 1353601026, 'exp': 1353604926\} SAML assertions are similarly specified, but with an identity provider dependent structure.
     */
    claims?: {[key: string]: any} | null;
    /**
     * The authorized presenter of the credential. Reflects the optional Authorized Presenter (`azp`) claim within a JWT or the OAuth client id. For example, a Google Cloud Platform client id looks as follows: "123456789012.apps.googleusercontent.com".
     */
    presenter?: string | null;
    /**
     * The authenticated principal. Reflects the issuer (`iss`) and subject (`sub`) claims within a JWT. The issuer and subject should be `/` delimited, with `/` percent-encoded within the subject fragment. For Google accounts, the principal format is: "https://accounts.google.com/{id\}"
     */
    principal?: string | null;
  }
  /**
   * Authentication information for the operation.
   */
  export interface Schema$AuthenticationInfo {
    /**
     * The authority selector specified by the requestor, if any. It is not guaranteed that the principal was allowed to use this authority.
     */
    authoritySelector?: string | null;
    /**
     * The email address of the authenticated user (or service account on behalf of third party principal) making the request. For third party identity callers, the `principal_subject` field is populated instead of this field. For privacy reasons, the principal email address is sometimes redacted. For more information, see [Caller identities in audit logs](https://cloud.google.com/logging/docs/audit#user-id).
     */
    principalEmail?: string | null;
    /**
     * String representation of identity of requesting party. Populated for both first and third party identities.
     */
    principalSubject?: string | null;
    /**
     * Identity delegation history of an authenticated service account that makes the request. It contains information on the real authorities that try to access GCP resources by delegating on a service account. When multiple authorities present, they are guaranteed to be sorted based on the original ordering of the identity delegation events.
     */
    serviceAccountDelegationInfo?: Schema$ServiceAccountDelegationInfo[];
    /**
     * The name of the service account key used to create or exchange credentials for authenticating the service account making the request. This is a scheme-less URI full resource name. For example: "//iam.googleapis.com/projects/{PROJECT_ID\}/serviceAccounts/{ACCOUNT\}/keys/{key\}"
     */
    serviceAccountKeyName?: string | null;
    /**
     * Records the history of delegated resource access across Google services.
     */
    serviceDelegationHistory?: Schema$ServiceDelegationHistory;
    /**
     * The third party identification (if any) of the authenticated user making the request. When the JSON object represented here has a proto equivalent, the proto name will be indicated in the `@type` property.
     */
    thirdPartyPrincipal?: {[key: string]: any} | null;
  }
  /**
   * Authorization information for the operation.
   */
  export interface Schema$AuthorizationInfo {
    /**
     * Whether or not authorization for `resource` and `permission` was granted.
     */
    granted?: boolean | null;
    /**
     * The required IAM permission.
     */
    permission?: string | null;
    /**
     * The type of the permission that was checked. For data access audit logs this corresponds with the permission type that must be enabled in the project/folder/organization IAM policy in order for the log to be written.
     */
    permissionType?: string | null;
    /**
     * The resource being accessed, as a REST-style or cloud resource string. For example: bigquery.googleapis.com/projects/PROJECTID/datasets/DATASETID or projects/PROJECTID/datasets/DATASETID
     */
    resource?: string | null;
    /**
     * Resource attributes used in IAM condition evaluation. This field contains resource attributes like resource type and resource name. To get the whole view of the attributes used in IAM condition evaluation, the user must also look into `AuditLog.request_metadata.request_attributes`.
     */
    resourceAttributes?: Schema$Resource;
  }
  /**
   * Defines the errors to be returned in google.api.servicecontrol.v1.CheckResponse.check_errors.
   */
  export interface Schema$CheckError {
    /**
     * The error code.
     */
    code?: string | null;
    /**
     * Free-form text providing details on the error cause of the error.
     */
    detail?: string | null;
    /**
     * Contains public information about the check error. If available, `status.code` will be non zero and client can propagate it out as public error.
     */
    status?: Schema$Status;
    /**
     * Subject to whom this error applies. See the specific code enum for more details on this field. For example: - "project:" - "folder:" - "organization:"
     */
    subject?: string | null;
  }
  /**
   * Contains additional information about the check operation.
   */
  export interface Schema$CheckInfo {
    /**
     * The unique id of the api key in the format of "apikey:". This field will be populated when the consumer passed to Chemist is an API key and all the API key related validations are successful.
     */
    apiKeyUid?: string | null;
    /**
     * Consumer info of this check.
     */
    consumerInfo?: Schema$ConsumerInfo;
    /**
     * A list of fields and label keys that are ignored by the server. The client doesn't need to send them for following requests to improve performance and allow better aggregation.
     */
    unusedArguments?: string[] | null;
  }
  /**
   * Request message for the Check method.
   */
  export interface Schema$CheckRequest {
    /**
     * The operation to be checked.
     */
    operation?: Schema$Operation;
    /**
     * Requests the project settings to be returned as part of the check response.
     */
    requestProjectSettings?: boolean | null;
    /**
     * Specifies which version of service configuration should be used to process the request. If unspecified or no matching version can be found, the latest one will be used.
     */
    serviceConfigId?: string | null;
    /**
     * Indicates if service activation check should be skipped for this request. Default behavior is to perform the check and apply relevant quota. WARNING: Setting this flag to "true" will disable quota enforcement.
     */
    skipActivationCheck?: boolean | null;
  }
  /**
   * Response message for the Check method.
   */
  export interface Schema$CheckResponse {
    /**
     * Indicate the decision of the check. If no check errors are present, the service should process the operation. Otherwise the service should use the list of errors to determine the appropriate action.
     */
    checkErrors?: Schema$CheckError[];
    /**
     * Feedback data returned from the server during processing a Check request.
     */
    checkInfo?: Schema$CheckInfo;
    /**
     * The same operation_id value used in the CheckRequest. Used for logging and diagnostics purposes.
     */
    operationId?: string | null;
    /**
     * Quota information for the check request associated with this response.
     */
    quotaInfo?: Schema$QuotaInfo;
    /**
     * The actual config id used to process the request.
     */
    serviceConfigId?: string | null;
    /**
     * The current service rollout id used to process the request.
     */
    serviceRolloutId?: string | null;
  }
  /**
   * `ConsumerInfo` provides information about the consumer.
   */
  export interface Schema$ConsumerInfo {
    /**
     * The consumer identity number, can be Google cloud project number, folder number or organization number e.g. 1234567890. A value of 0 indicates no consumer number is found.
     */
    consumerNumber?: string | null;
    /**
     * The Google cloud project number, e.g. 1234567890. A value of 0 indicates no project number is found. NOTE: This field is deprecated after Chemist support flexible consumer id. New code should not depend on this field anymore.
     */
    projectNumber?: string | null;
    /**
     * The type of the consumer which should have been defined in [Google Resource Manager](https://cloud.google.com/resource-manager/).
     */
    type?: string | null;
  }
  /**
   * Distribution represents a frequency distribution of double-valued sample points. It contains the size of the population of sample points plus additional optional information: * the arithmetic mean of the samples * the minimum and maximum of the samples * the sum-squared-deviation of the samples, used to compute variance * a histogram of the values of the sample points
   */
  export interface Schema$Distribution {
    /**
     * The number of samples in each histogram bucket. `bucket_counts` are optional. If present, they must sum to the `count` value. The buckets are defined below in `bucket_option`. There are N buckets. `bucket_counts[0]` is the number of samples in the underflow bucket. `bucket_counts[1]` to `bucket_counts[N-1]` are the numbers of samples in each of the finite buckets. And `bucket_counts[N]` is the number of samples in the overflow bucket. See the comments of `bucket_option` below for more details. Any suffix of trailing zeros may be omitted.
     */
    bucketCounts?: string[] | null;
    /**
     * The total number of samples in the distribution. Must be \>= 0.
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
     * The sum of squared deviations from the mean: Sum[i=1..count]((x_i - mean)^2) where each x_i is a sample values. If `count` is zero then this field must be zero, otherwise validation of the request fails.
     */
    sumOfSquaredDeviation?: number | null;
  }
  /**
   * Exemplars are example points that may be used to annotate aggregated distribution values. They are metadata that gives information about a particular value added to a Distribution bucket, such as a trace ID that was active when a value was added. They may contain further information, such as a example values and timestamps, origin, etc.
   */
  export interface Schema$Exemplar {
    /**
     * Contextual information about the example value. Examples are: Trace: type.googleapis.com/google.monitoring.v3.SpanContext Literal string: type.googleapis.com/google.protobuf.StringValue Labels dropped during aggregation: type.googleapis.com/google.monitoring.v3.DroppedLabels There may be only a single attachment of any given message type in a single exemplar, and this is enforced by the system.
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
     * 'bound' is a list of strictly increasing boundaries between buckets. Note that a list of length N-1 defines N buckets because of fenceposting. See comments on `bucket_options` for details. The i'th finite bucket covers the interval [bound[i-1], bound[i]) where i ranges from 1 to bound_size() - 1. Note that there are no finite buckets at all if 'bound' only contains a single element; in that special case the single bound defines the boundary between the underflow and overflow buckets. bucket number lower bound upper bound i == 0 (underflow) -inf bound[i] 0 < i < bound_size() bound[i-1] bound[i] i == bound_size() (overflow) bound[i-1] +inf
     */
    bounds?: number[] | null;
  }
  /**
   * Describing buckets with exponentially growing width.
   */
  export interface Schema$ExponentialBuckets {
    /**
     * The i'th exponential bucket covers the interval [scale * growth_factor^(i-1), scale * growth_factor^i) where i ranges from 1 to num_finite_buckets inclusive. Must be larger than 1.0.
     */
    growthFactor?: number | null;
    /**
     * The number of finite buckets. With the underflow and overflow buckets, the total number of buckets is `num_finite_buckets` + 2. See comments on `bucket_options` for details.
     */
    numFiniteBuckets?: number | null;
    /**
     * The i'th exponential bucket covers the interval [scale * growth_factor^(i-1), scale * growth_factor^i) where i ranges from 1 to num_finite_buckets inclusive. Must be \> 0.
     */
    scale?: number | null;
  }
  /**
   * First party identity principal.
   */
  export interface Schema$FirstPartyPrincipal {
    /**
     * The email address of a Google account. .
     */
    principalEmail?: string | null;
    /**
     * Metadata about the service that uses the service account. .
     */
    serviceMetadata?: {[key: string]: any} | null;
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
     * Protocol used for the request. Examples: "HTTP/1.1", "HTTP/2", "websocket"
     */
    protocol?: string | null;
    /**
     * The referer URL of the request, as defined in [HTTP/1.1 Header Field Definitions](https://www.w3.org/Protocols/rfc2616/rfc2616-sec14.html).
     */
    referer?: string | null;
    /**
     * The IP address (IPv4 or IPv6) of the client that issued the HTTP request. Examples: `"192.168.1.1"`, `"FE80::0202:B3FF:FE1E:8329"`.
     */
    remoteIp?: string | null;
    /**
     * The request method. Examples: `"GET"`, `"HEAD"`, `"PUT"`, `"POST"`.
     */
    requestMethod?: string | null;
    /**
     * The size of the HTTP request message in bytes, including the request headers and the request body.
     */
    requestSize?: string | null;
    /**
     * The scheme (http, https), the host name, the path, and the query portion of the URL that was requested. Example: `"http://example.com/some/info?color=red"`.
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
     * The user agent sent by the client. Example: `"Mozilla/4.0 (compatible; MSIE 6.0; Windows 98; Q312461; .NET CLR 1.0.3705)"`.
     */
    userAgent?: string | null;
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
     * The i'th linear bucket covers the interval [offset + (i-1) * width, offset + i * width) where i ranges from 1 to num_finite_buckets, inclusive.
     */
    offset?: number | null;
    /**
     * The i'th linear bucket covers the interval [offset + (i-1) * width, offset + i * width) where i ranges from 1 to num_finite_buckets, inclusive. Must be strictly positive.
     */
    width?: number | null;
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
     * Required. The log to which this log entry belongs. Examples: `"syslog"`, `"book_log"`.
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
     * Optional. An arbitrary producer identifier. The combination of `id` and `producer` must be globally unique. Examples for `producer`: `"MyDivision.MyBigCompany.com"`, `"github.com/MyProject/MyApplication"`.
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
     * The end of the time period over which this metric value's measurement applies. If not specified, google.api.servicecontrol.v1.Operation.end_time will be used.
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
     * The start of the time period over which this metric value's measurement applies. The time period has different semantics for different metric types (cumulative, delta, and gauge). See the metric definition documentation in the service configuration for details. If not specified, google.api.servicecontrol.v1.Operation.start_time will be used.
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
     * The three-letter currency code defined in ISO 4217.
     */
    currencyCode?: string | null;
    /**
     * Number of nano (10^-9) units of the amount. The value must be between -999,999,999 and +999,999,999 inclusive. If `units` is positive, `nanos` must be positive or zero. If `units` is zero, `nanos` can be positive, zero, or negative. If `units` is negative, `nanos` must be negative or zero. For example $-1.75 is represented as `units`=-1 and `nanos`=-750,000,000.
     */
    nanos?: number | null;
    /**
     * The whole units of the amount. For example if `currencyCode` is `"USD"`, then 1 unit is one US dollar.
     */
    units?: string | null;
  }
  /**
   * Represents information regarding an operation.
   */
  export interface Schema$Operation {
    /**
     * Identity of the consumer who is using the service. This field should be filled in for the operations initiated by a consumer, but not for service-initiated operations that are not related to a specific consumer. - This can be in one of the following formats: - project:PROJECT_ID, - project`_`number:PROJECT_NUMBER, - projects/PROJECT_ID or PROJECT_NUMBER, - folders/FOLDER_NUMBER, - organizations/ORGANIZATION_NUMBER, - api`_`key:API_KEY.
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
     * Labels describing the operation. Only the following labels are allowed: - Labels describing monitored resources as defined in the service configuration. - Default labels of metric values. When specified, labels defined in the metric value override these default. - The following labels defined by Google Cloud Platform: - `cloud.googleapis.com/location` describing the location where the operation happened, - `servicecontrol.googleapis.com/user_agent` describing the user agent of the API request, - `servicecontrol.googleapis.com/service_agent` describing the service used to handle the API request (e.g. ESP), - `servicecontrol.googleapis.com/platform` describing the platform where the API is served, such as App Engine, Compute Engine, or Kubernetes Engine.
     */
    labels?: {[key: string]: string} | null;
    /**
     * Represents information to be logged.
     */
    logEntries?: Schema$LogEntry[];
    /**
     * Represents information about this operation. Each MetricValueSet corresponds to a metric defined in the service configuration. The data type used in the MetricValueSet must agree with the data type specified in the metric definition. Within a single operation, it is not allowed to have more than one MetricValue instances that have the same metric names and identical label value combinations. If a request has such duplicated MetricValue instances, the entire request is rejected with an invalid argument error.
     */
    metricValueSets?: Schema$MetricValueSet[];
    /**
     * Identity of the operation. This must be unique within the scope of the service that generated the operation. If the service calls Check() and Report() on the same operation, the two calls should carry the same id. UUID version 4 is recommended, though not required. In scenarios where an operation is computed from existing information and an idempotent id is desirable for deduplication purpose, UUID version 5 is recommended. See RFC 4122 for details.
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
     * Private Preview. This feature is only available for approved services. User defined labels for the resource that this operation is associated with.
     */
    userLabels?: {[key: string]: string} | null;
  }
  /**
   * Represents OrgPolicy Violation information.
   */
  export interface Schema$OrgPolicyViolationInfo {
    /**
     * Optional. Deprecated. Resource payload that is currently in scope and is subjected to orgpolicy conditions. This payload may be the subset of the actual Resource that may come in the request.
     */
    payload?: {[key: string]: any} | null;
    /**
     * Optional. Deprecated. Tags referenced on the resource at the time of evaluation.
     */
    resourceTags?: {[key: string]: string} | null;
    /**
     * Optional. Resource type that the orgpolicy is checked against. Example: compute.googleapis.com/Instance, store.googleapis.com/bucket
     */
    resourceType?: string | null;
    /**
     * Optional. Policy violations
     */
    violationInfo?: Schema$ViolationInfo[];
  }
  /**
   * This message defines attributes for a node that handles a network request. The node can be either a service or an application that sends, forwards, or receives the request. Service peers should fill in `principal` and `labels` as appropriate.
   */
  export interface Schema$Peer {
    /**
     * The IP address of the peer.
     */
    ip?: string | null;
    /**
     * The labels associated with the peer.
     */
    labels?: {[key: string]: string} | null;
    /**
     * The network port of the peer.
     */
    port?: string | null;
    /**
     * The identity of this peer. Similar to `Request.auth.principal`, but relative to the peer instead of the request. For example, the identity associated with a load balancer that forwarded the request.
     */
    principal?: string | null;
    /**
     * The CLDR country/region code associated with the above IP address. If the IP address is private, the `region_code` should reflect the physical location where this peer is running.
     */
    regionCode?: string | null;
  }
  /**
   * Information related to policy violations for this request.
   */
  export interface Schema$PolicyViolationInfo {
    /**
     * Indicates the orgpolicy violations for this resource.
     */
    orgPolicyViolationInfo?: Schema$OrgPolicyViolationInfo;
  }
  /**
   * Represents error information for QuotaOperation.
   */
  export interface Schema$QuotaError {
    /**
     * Error code.
     */
    code?: string | null;
    /**
     * Free-form text that provides details on the cause of the error.
     */
    description?: string | null;
    /**
     * Contains additional information about the quota error. If available, `status.code` will be non zero.
     */
    status?: Schema$Status;
    /**
     * Subject to whom this error applies. See the specific enum for more details on this field. For example, "clientip:" or "project:".
     */
    subject?: string | null;
  }
  /**
   * Contains the quota information for a quota check response.
   */
  export interface Schema$QuotaInfo {
    /**
     * Quota Metrics that have exceeded quota limits. For QuotaGroup-based quota, this is QuotaGroup.name For QuotaLimit-based quota, this is QuotaLimit.name See: google.api.Quota Deprecated: Use quota_metrics to get per quota group limit exceeded status.
     */
    limitExceeded?: string[] | null;
    /**
     * Map of quota group name to the actual number of tokens consumed. If the quota check was not successful, then this will not be populated due to no quota consumption. We are not merging this field with 'quota_metrics' field because of the complexity of scaling in Chemist client code base. For simplicity, we will keep this field for Castor (that scales quota usage) and 'quota_metrics' for SuperQuota (that doesn't scale quota usage).
     */
    quotaConsumed?: {[key: string]: number} | null;
    /**
     * Quota metrics to indicate the usage. Depending on the check request, one or more of the following metrics will be included: 1. For rate quota, per quota group or per quota metric incremental usage will be specified using the following delta metric: "serviceruntime.googleapis.com/api/consumer/quota_used_count" 2. For allocation quota, per quota metric total usage will be specified using the following gauge metric: "serviceruntime.googleapis.com/allocation/consumer/quota_used_count" 3. For both rate quota and allocation quota, the quota limit reached condition will be specified using the following boolean metric: "serviceruntime.googleapis.com/quota/exceeded"
     */
    quotaMetrics?: Schema$MetricValueSet[];
  }
  /**
   * Represents information regarding a quota operation.
   */
  export interface Schema$QuotaOperation {
    /**
     * Identity of the consumer for whom this quota operation is being performed. This can be in one of the following formats: project:, project_number:, api_key:.
     */
    consumerId?: string | null;
    /**
     * Labels describing the operation.
     */
    labels?: {[key: string]: string} | null;
    /**
     * Fully qualified name of the API method for which this quota operation is requested. This name is used for matching quota rules or metric rules and billing status rules defined in service configuration. This field should not be set if any of the following is true: (1) the quota operation is performed on non-API resources. (2) quota_metrics is set because the caller is doing quota override. Example of an RPC method name: google.example.library.v1.LibraryService.CreateShelf
     */
    methodName?: string | null;
    /**
     * Identity of the operation. For Allocation Quota, this is expected to be unique within the scope of the service that generated the operation, and guarantees idempotency in case of retries. In order to ensure best performance and latency in the Quota backends, operation_ids are optimally associated with time, so that related operations can be accessed fast in storage. For this reason, the recommended token for services that intend to operate at a high QPS is Unix time in nanos + UUID
     */
    operationId?: string | null;
    /**
     * Represents information about this operation. Each MetricValueSet corresponds to a metric defined in the service configuration. The data type used in the MetricValueSet must agree with the data type specified in the metric definition. Within a single operation, it is not allowed to have more than one MetricValue instances that have the same metric names and identical label value combinations. If a request has such duplicated MetricValue instances, the entire request is rejected with an invalid argument error. This field is mutually exclusive with method_name.
     */
    quotaMetrics?: Schema$MetricValueSet[];
    /**
     * Quota mode for this operation.
     */
    quotaMode?: string | null;
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
   * Represents the processing error of one Operation in the request.
   */
  export interface Schema$ReportError {
    /**
     * The Operation.operation_id value from the request.
     */
    operationId?: string | null;
    /**
     * Details of the error when processing the Operation.
     */
    status?: Schema$Status;
  }
  /**
   * Request message for the Report method.
   */
  export interface Schema$ReportRequest {
    /**
     * Operations to be reported. Typically the service should report one operation per request. Putting multiple operations into a single request is allowed, but should be used only when multiple operations are natually available at the time of the report. There is no limit on the number of operations in the same ReportRequest, however the ReportRequest size should be no larger than 1MB. See ReportResponse.report_errors for partial failure behavior.
     */
    operations?: Schema$Operation[];
    /**
     * Specifies which version of service config should be used to process the request. If unspecified or no matching version can be found, the latest one will be used.
     */
    serviceConfigId?: string | null;
  }
  /**
   * Response message for the Report method.
   */
  export interface Schema$ReportResponse {
    /**
     * Partial failures, one for each `Operation` in the request that failed processing. There are three possible combinations of the RPC status: 1. The combination of a successful RPC status and an empty `report_errors` list indicates a complete success where all `Operations` in the request are processed successfully. 2. The combination of a successful RPC status and a non-empty `report_errors` list indicates a partial success where some `Operations` in the request succeeded. Each `Operation` that failed processing has a corresponding item in this list. 3. A failed RPC status indicates a general non-deterministic failure. When this happens, it's impossible to know which of the 'Operations' in the request succeeded or failed.
     */
    reportErrors?: Schema$ReportError[];
    /**
     * The actual config id used to process the request.
     */
    serviceConfigId?: string | null;
    /**
     * The current service rollout id used to process the request.
     */
    serviceRolloutId?: string | null;
  }
  /**
   * This message defines attributes for an HTTP request. If the actual request is not an HTTP request, the runtime system should try to map the actual request to an equivalent HTTP request.
   */
  export interface Schema$Request {
    /**
     * The request authentication. May be absent for unauthenticated requests. Derived from the HTTP request `Authorization` header or equivalent.
     */
    auth?: Schema$Auth;
    /**
     * The HTTP request headers. If multiple headers share the same key, they must be merged according to the HTTP spec. All header keys must be lowercased, because HTTP header keys are case-insensitive.
     */
    headers?: {[key: string]: string} | null;
    /**
     * The HTTP request `Host` header value.
     */
    host?: string | null;
    /**
     * The unique ID for a request, which can be propagated to downstream systems. The ID should have low probability of collision within a single day for a specific service.
     */
    id?: string | null;
    /**
     * The HTTP request method, such as `GET`, `POST`.
     */
    method?: string | null;
    /**
     * The values from Origin header from the HTTP request, such as "https://console.cloud.google.com". Modern browsers can only have one origin. Special browsers and/or HTTP clients may require multiple origins.
     */
    origin?: string | null;
    /**
     * The HTTP URL path, excluding the query parameters.
     */
    path?: string | null;
    /**
     * The network protocol used with the request, such as "http/1.1", "spdy/3", "h2", "h2c", "webrtc", "tcp", "udp", "quic". See https://www.iana.org/assignments/tls-extensiontype-values/tls-extensiontype-values.xhtml#alpn-protocol-ids for details.
     */
    protocol?: string | null;
    /**
     * The HTTP URL query in the format of `name1=value1&name2=value2`, as it appears in the first line of the HTTP request. No decoding is performed.
     */
    query?: string | null;
    /**
     * A special parameter for request reason. It is used by security systems to associate auditing information with a request.
     */
    reason?: string | null;
    /**
     * The HTTP URL scheme, such as `http` and `https`.
     */
    scheme?: string | null;
    /**
     * The HTTP request size in bytes. If unknown, it must be -1.
     */
    size?: string | null;
    /**
     * The timestamp when the `destination` service receives the last byte of the request.
     */
    time?: string | null;
  }
  /**
   * Metadata about the request.
   */
  export interface Schema$RequestMetadata {
    /**
     * The IP address of the caller. For a caller from the internet, this will be the public IPv4 or IPv6 address. For calls made from inside Google's internal production network from one GCP service to another, `caller_ip` will be redacted to "private". For a caller from a Compute Engine VM with a external IP address, `caller_ip` will be the VM's external IP address. For a caller from a Compute Engine VM without a external IP address, if the VM is in the same organization (or project) as the accessed resource, `caller_ip` will be the VM's internal IPv4 address, otherwise `caller_ip` will be redacted to "gce-internal-ip". See https://cloud.google.com/compute/docs/vpc/ for more information.
     */
    callerIp?: string | null;
    /**
     * The network of the caller. Set only if the network host project is part of the same GCP organization (or project) as the accessed resource. See https://cloud.google.com/compute/docs/vpc/ for more information. This is a scheme-less URI full resource name. For example: "//compute.googleapis.com/projects/PROJECT_ID/global/networks/NETWORK_ID"
     */
    callerNetwork?: string | null;
    /**
     * The user agent of the caller. This information is not authenticated and should be treated accordingly. For example: + `google-api-python-client/1.4.0`: The request was made by the Google API client for Python. + `Cloud SDK Command Line Tool apitools-client/1.0 gcloud/0.9.62`: The request was made by the Google Cloud SDK CLI (gcloud). + `AppEngine-Google; (+http://code.google.com/appengine; appid: s~my-project`: The request was made from the `my-project` App Engine app.
     */
    callerSuppliedUserAgent?: string | null;
    /**
     * The destination of a network activity, such as accepting a TCP connection. In a multi hop network activity, the destination represents the receiver of the last hop. Only two fields are used in this message, Peer.port and Peer.ip. These fields are optionally populated by those services utilizing the IAM condition feature.
     */
    destinationAttributes?: Schema$Peer;
    /**
     * Request attributes used in IAM condition evaluation. This field contains request attributes like request time and access levels associated with the request. To get the whole view of the attributes used in IAM condition evaluation, the user must also look into `AuditLog.authentication_info.resource_attributes`.
     */
    requestAttributes?: Schema$Request;
  }
  /**
   * This message defines core attributes for a resource. A resource is an addressable (named) entity provided by the destination service. For example, a file stored on a network storage service.
   */
  export interface Schema$Resource {
    /**
     * Annotations is an unstructured key-value map stored with a resource that may be set by external tools to store and retrieve arbitrary metadata. They are not queryable and should be preserved when modifying objects. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/
     */
    annotations?: {[key: string]: string} | null;
    /**
     * Output only. The timestamp when the resource was created. This may be either the time creation was initiated or when it was completed.
     */
    createTime?: string | null;
    /**
     * Output only. The timestamp when the resource was deleted. If the resource is not deleted, this must be empty.
     */
    deleteTime?: string | null;
    /**
     * Mutable. The display name set by clients. Must be <= 63 characters.
     */
    displayName?: string | null;
    /**
     * Output only. An opaque value that uniquely identifies a version or generation of a resource. It can be used to confirm that the client and server agree on the ordering of a resource being written.
     */
    etag?: string | null;
    /**
     * The labels or tags on the resource, such as AWS resource tags and Kubernetes resource labels.
     */
    labels?: {[key: string]: string} | null;
    /**
     * Immutable. The location of the resource. The location encoding is specific to the service provider, and new encoding may be introduced as the service evolves. For Google Cloud products, the encoding is what is used by Google Cloud APIs, such as `us-east1`, `aws-us-east-1`, and `azure-eastus2`. The semantics of `location` is identical to the `cloud.googleapis.com/location` label used by some Google Cloud APIs.
     */
    location?: string | null;
    /**
     * The stable identifier (name) of a resource on the `service`. A resource can be logically identified as "//{resource.service\}/{resource.name\}". The differences between a resource name and a URI are: * Resource name is a logical identifier, independent of network protocol and API version. For example, `//pubsub.googleapis.com/projects/123/topics/news-feed`. * URI often includes protocol and version information, so it can be used directly by applications. For example, `https://pubsub.googleapis.com/v1/projects/123/topics/news-feed`. See https://cloud.google.com/apis/design/resource_names for details.
     */
    name?: string | null;
    /**
     * The name of the service that this resource belongs to, such as `pubsub.googleapis.com`. The service may be different from the DNS hostname that actually serves the request.
     */
    service?: string | null;
    /**
     * The type of the resource. The syntax is platform-specific because different platforms define their resources differently. For Google APIs, the type format must be "{service\}/{kind\}", such as "pubsub.googleapis.com/Topic".
     */
    type?: string | null;
    /**
     * The unique identifier of the resource. UID is unique in the time and space for this resource within the scope of the service. It is typically generated by the server on successful creation of a resource and must not be changed. UID is used to uniquely identify resources with resource name reuses. This should be a UUID4.
     */
    uid?: string | null;
    /**
     * Output only. The timestamp when the resource was last updated. Any change to the resource made by users must refresh this value. Changes to a resource made by the service should refresh this value.
     */
    updateTime?: string | null;
  }
  /**
   * Describes a resource associated with this operation.
   */
  export interface Schema$ResourceInfo {
    /**
     * The resource permission required for this request.
     */
    permission?: string | null;
    /**
     * The identifier of the parent of this resource instance. Must be in one of the following formats: - `projects/` - `folders/` - `organizations/`
     */
    resourceContainer?: string | null;
    /**
     * The location of the resource. If not empty, the resource will be checked against location policy. The value must be a valid zone, region or multiregion. For example: "europe-west4" or "northamerica-northeast1-a"
     */
    resourceLocation?: string | null;
    /**
     * Name of the resource. This is used for auditing purposes.
     */
    resourceName?: string | null;
  }
  /**
   * Location information about a resource.
   */
  export interface Schema$ResourceLocation {
    /**
     * The locations of a resource after the execution of the operation. Requests to create or delete a location based resource must populate the 'current_locations' field and not the 'original_locations' field. For example: "europe-west1-a" "us-east1" "nam3"
     */
    currentLocations?: string[] | null;
    /**
     * The locations of a resource prior to the execution of the operation. Requests that mutate the resource's location must populate both the 'original_locations' as well as the 'current_locations' fields. For example: "europe-west1-a" "us-east1" "nam3"
     */
    originalLocations?: string[] | null;
  }
  /**
   * Identity delegation history of an authenticated service account.
   */
  export interface Schema$ServiceAccountDelegationInfo {
    /**
     * First party (Google) identity as the real authority.
     */
    firstPartyPrincipal?: Schema$FirstPartyPrincipal;
    /**
     * A string representing the principal_subject associated with the identity. For most identities, the format will be `principal://iam.googleapis.com/{identity pool name\}/subject/{subject)` except for some GKE identities (GKE_WORKLOAD, FREEFORM, GKE_HUB_WORKLOAD) that are still in the legacy format `serviceAccount:{identity pool name\}[{subject\}]`
     */
    principalSubject?: string | null;
    /**
     * Third party identity as the real authority.
     */
    thirdPartyPrincipal?: Schema$ThirdPartyPrincipal;
  }
  /**
   * The history of delegation across multiple services as the result of the original user's action. Such as "service A uses its own account to do something for user B". This differs from ServiceAccountDelegationInfo, which only tracks the history of direct token exchanges (impersonation).
   */
  export interface Schema$ServiceDelegationHistory {
    /**
     * The original end user who initiated the request to GCP.
     */
    originalPrincipal?: string | null;
    /**
     * Data identifying the service specific jobs or units of work that were involved in a chain of service calls.
     */
    serviceMetadata?: Schema$ServiceMetadata[];
  }
  /**
   * Metadata describing the service and additional service specific information used to identify the job or unit of work at hand.
   */
  export interface Schema$ServiceMetadata {
    /**
     * Additional metadata provided by service teams to describe service specific job information that was triggered by the original principal.
     */
    jobMetadata?: {[key: string]: any} | null;
    /**
     * A string representing the principal_subject associated with the identity. For most identities, the format will be `principal://iam.googleapis.com/{identity pool name\}/subject/{subject)` except for some GKE identities (GKE_WORKLOAD, FREEFORM, GKE_HUB_WORKLOAD) that are still in the legacy format `serviceAccount:{identity pool name\}[{subject\}]` If the identity is a Google account (e.g. workspace user account or service account), this will be the email of the prefixed by `serviceAccount:`. For example: `serviceAccount:my-service-account@project-1.iam.gserviceaccount.com`. If the identity is an individual user, the identity will be formatted as: `user:user_ABC@email.com`.
     */
    principalSubject?: string | null;
    /**
     * The service's fully qualified domain name, e.g. "dataproc.googleapis.com".
     */
    serviceDomain?: string | null;
  }
  /**
   * The context of a span. This is attached to an Exemplar in Distribution values during aggregation. It contains the name of a span with format: projects/[PROJECT_ID_OR_NUMBER]/traces/[TRACE_ID]/spans/[SPAN_ID]
   */
  export interface Schema$SpanContext {
    /**
     * The resource name of the span. The format is: projects/[PROJECT_ID_OR_NUMBER]/traces/[TRACE_ID]/spans/[SPAN_ID] `[TRACE_ID]` is a unique identifier for a trace within a project; it is a 32-character hexadecimal encoding of a 16-byte array. `[SPAN_ID]` is a unique identifier for a span within a trace; it is a 16-character hexadecimal encoding of an 8-byte array.
     */
    spanName?: string | null;
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
   * Third party identity principal.
   */
  export interface Schema$ThirdPartyPrincipal {
    /**
     * Metadata about third party identity.
     */
    thirdPartyClaims?: {[key: string]: any} | null;
  }
  /**
   * A span represents a single operation within a trace. Spans can be nested to form a trace tree. Often, a trace contains a root span that describes the end-to-end latency, and one or more subspans for its sub-operations. A trace can also contain multiple root spans, or none at all. Spans do not need to be contiguous—there may be gaps or overlaps between spans in a trace.
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
     * A description of the span's operation (up to 128 bytes). Stackdriver Trace displays the description in the Google Cloud Platform Console. For example, the display name can be a qualified method name or a file name and a line number where the operation is called. A best practice is to use the same display name within an application and at the same call point. This makes it easier to correlate spans in different traces.
     */
    displayName?: Schema$TruncatableString;
    /**
     * The end time of the span. On the client side, this is the time kept by the local machine where the span execution ends. On the server side, this is the time when the server application handler stops running.
     */
    endTime?: string | null;
    /**
     * The resource name of the span in the following format: projects/[PROJECT_ID]/traces/[TRACE_ID]/spans/SPAN_ID is a unique identifier for a trace within a project; it is a 32-character hexadecimal encoding of a 16-byte array. [SPAN_ID] is a unique identifier for a span within a trace; it is a 16-character hexadecimal encoding of an 8-byte array.
     */
    name?: string | null;
    /**
     * The [SPAN_ID] of this span's parent span. If this is a root span, then this field must be empty.
     */
    parentSpanId?: string | null;
    /**
     * (Optional) Set this parameter to indicate whether this span is in the same process as its parent. If you do not set this parameter, Stackdriver Trace is unable to take advantage of this helpful information.
     */
    sameProcessAsParentSpan?: boolean | null;
    /**
     * The [SPAN_ID] portion of the span's resource name.
     */
    spanId?: string | null;
    /**
     * Distinguishes between spans generated in a particular context. For example, two spans with the same name may be distinguished using `CLIENT` (caller) and `SERVER` (callee) to identify an RPC call.
     */
    spanKind?: string | null;
    /**
     * The start time of the span. On the client side, this is the time kept by the local machine where the span execution starts. On the server side, this is the time when the server's application handler starts running.
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
     * The shortened string. For example, if the original string is 500 bytes long and the limit of the string is 128 bytes, then `value` contains the first 128 bytes of the 500-byte string. Truncation always happens on a UTF8 character boundary. If there are multi-byte characters in the string, then the length of the shortened string might be less than the size limit.
     */
    value?: string | null;
  }
  /**
   * A common proto for logging HTTP requests. Only contains semantics defined by the HTTP specification. Product-specific logging information MUST be defined in a separate message.
   */
  export interface Schema$V1HttpRequest {
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
     * Protocol used for the request. Examples: "HTTP/1.1", "HTTP/2", "websocket"
     */
    protocol?: string | null;
    /**
     * The referer URL of the request, as defined in [HTTP/1.1 Header Field Definitions](https://www.w3.org/Protocols/rfc2616/rfc2616-sec14.html).
     */
    referer?: string | null;
    /**
     * The IP address (IPv4 or IPv6) of the client that issued the HTTP request. Examples: `"192.168.1.1"`, `"FE80::0202:B3FF:FE1E:8329"`.
     */
    remoteIp?: string | null;
    /**
     * The request method. Examples: `"GET"`, `"HEAD"`, `"PUT"`, `"POST"`.
     */
    requestMethod?: string | null;
    /**
     * The size of the HTTP request message in bytes, including the request headers and the request body.
     */
    requestSize?: string | null;
    /**
     * The scheme (http, https), the host name, the path, and the query portion of the URL that was requested. Example: `"http://example.com/some/info?color=red"`.
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
     * The user agent sent by the client. Example: `"Mozilla/4.0 (compatible; MSIE 6.0; Windows 98; Q312461; .NET CLR 1.0.3705)"`.
     */
    userAgent?: string | null;
  }
  /**
   * An individual log entry.
   */
  export interface Schema$V1LogEntry {
    /**
     * Optional. Information about the HTTP request associated with this log entry, if applicable.
     */
    httpRequest?: Schema$V1HttpRequest;
    /**
     * A unique ID for the log entry used for deduplication. If omitted, the implementation will generate one based on operation_id.
     */
    insertId?: string | null;
    /**
     * A set of user-defined (key, value) data that provides additional information about the log entry.
     */
    labels?: {[key: string]: string} | null;
    /**
     * A set of user-defined (key, value) data that provides additional information about the moniotored resource that the log entry belongs to.
     */
    monitoredResourceLabels?: {[key: string]: string} | null;
    /**
     * Required. The log to which this log entry belongs. Examples: `"syslog"`, `"book_log"`.
     */
    name?: string | null;
    /**
     * Optional. Information about an operation associated with the log entry, if applicable.
     */
    operation?: Schema$V1LogEntryOperation;
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
    sourceLocation?: Schema$V1LogEntrySourceLocation;
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
  export interface Schema$V1LogEntryOperation {
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
     * Optional. An arbitrary producer identifier. The combination of `id` and `producer` must be globally unique. Examples for `producer`: `"MyDivision.MyBigCompany.com"`, `"github.com/MyProject/MyApplication"`.
     */
    producer?: string | null;
  }
  /**
   * Additional information about the source code location that produced the log entry.
   */
  export interface Schema$V1LogEntrySourceLocation {
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
   * Report v2 extension proto for passing the resource metadata associated with a resource create/update/delete/undelete event from ESF to Chemist. ResourceEvent proto should be serialized into the ReportRequest.operations.extensions.
   */
  export interface Schema$V1ResourceEvent {
    /**
     * The ESF unique context id of the api request, from which this resource event originated. This field is only needed for CAIS integration via api annotation. See go/cais-lro-delete for more details.
     */
    contextId?: string | null;
    /**
     * The destinations field determines which backend services should handle the event. This should be specified as a comma-delimited string.
     */
    destinations?: string | null;
    /**
     * The parent resource for the resource.
     */
    parent?: Schema$Resource;
    /**
     * The api path the resource event was created in. This should match the source of the `payload` field. For direct integrations with Chemist, this should generally be the RESPONSE. go/resource-event-pipeline-type
     */
    path?: string | null;
    /**
     * The payload contains metadata associated with the resource event. A ResourceEventPayloadStatus is provided instead if the original payload cannot be returned due to a limitation (e.g. size limit).
     */
    payload?: {[key: string]: any} | null;
    /**
     * The resource associated with the event.
     */
    resource?: Schema$Resource;
    /**
     * The resource event type determines how the backend service should process the event.
     */
    type?: string | null;
  }
  /**
   * Provides information about the Policy violation info for this request.
   */
  export interface Schema$ViolationInfo {
    /**
     * Optional. Value that is being checked for the policy. This could be in encrypted form (if pii sensitive). This field will only be emitted in LIST_POLICY types
     */
    checkedValue?: string | null;
    /**
     * Optional. Constraint name
     */
    constraint?: string | null;
    /**
     * Optional. Error message that policy is indicating.
     */
    errorMessage?: string | null;
    /**
     * Optional. Indicates the type of the policy.
     */
    policyType?: string | null;
  }

  export class Resource$Services {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Attempts to allocate quota for the specified consumer. It should be called before the operation is executed. This method requires the `servicemanagement.services.quota` permission on the specified service. For more information, see [Cloud IAM](https://cloud.google.com/iam). **NOTE:** The client **must** fail-open on server errors `INTERNAL`, `UNKNOWN`, `DEADLINE_EXCEEDED`, and `UNAVAILABLE`. To ensure system reliability, the server may inject these errors to prohibit any hard dependency on the quota functionality.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/servicecontrol.googleapis.com
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
     * const servicecontrol = google.servicecontrol('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/cloud-platform',
     *       'https://www.googleapis.com/auth/servicecontrol',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await servicecontrol.services.allocateQuota({
     *     // Name of the service as specified in the service configuration. For example, `"pubsub.googleapis.com"`. See google.api.Service for the definition of a service name.
     *     serviceName: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "allocateOperation": {},
     *       //   "serviceConfigId": "my_serviceConfigId"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "allocateErrors": [],
     *   //   "allocateInfo": {},
     *   //   "operationId": "my_operationId",
     *   //   "quotaMetrics": [],
     *   //   "serviceConfigId": "my_serviceConfigId"
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
    allocateQuota(
      params: Params$Resource$Services$Allocatequota,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    allocateQuota(
      params?: Params$Resource$Services$Allocatequota,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$AllocateQuotaResponse>>;
    allocateQuota(
      params: Params$Resource$Services$Allocatequota,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    allocateQuota(
      params: Params$Resource$Services$Allocatequota,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$AllocateQuotaResponse>,
      callback: BodyResponseCallback<Schema$AllocateQuotaResponse>
    ): void;
    allocateQuota(
      params: Params$Resource$Services$Allocatequota,
      callback: BodyResponseCallback<Schema$AllocateQuotaResponse>
    ): void;
    allocateQuota(
      callback: BodyResponseCallback<Schema$AllocateQuotaResponse>
    ): void;
    allocateQuota(
      paramsOrCallback?:
        | Params$Resource$Services$Allocatequota
        | BodyResponseCallback<Schema$AllocateQuotaResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$AllocateQuotaResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$AllocateQuotaResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$AllocateQuotaResponse>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Services$Allocatequota;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Services$Allocatequota;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://servicecontrol.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/services/{serviceName}:allocateQuota').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['serviceName'],
        pathParams: ['serviceName'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$AllocateQuotaResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$AllocateQuotaResponse>(parameters);
      }
    }

    /**
     * Checks whether an operation on a service should be allowed to proceed based on the configuration of the service and related policies. It must be called before the operation is executed. If feasible, the client should cache the check results and reuse them for 60 seconds. In case of any server errors, the client should rely on the cached results for much longer time to avoid outage. WARNING: There is general 60s delay for the configuration and policy propagation, therefore callers MUST NOT depend on the `Check` method having the latest policy information. NOTE: the CheckRequest has the size limit (wire-format byte size) of 1MB. This method requires the `servicemanagement.services.check` permission on the specified service. For more information, see [Cloud IAM](https://cloud.google.com/iam).
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/servicecontrol.googleapis.com
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
     * const servicecontrol = google.servicecontrol('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/cloud-platform',
     *       'https://www.googleapis.com/auth/servicecontrol',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await servicecontrol.services.check({
     *     // The service name as specified in its service configuration. For example, `"pubsub.googleapis.com"`. See [google.api.Service](https://cloud.google.com/service-management/reference/rpc/google.api#google.api.Service) for the definition of a service name.
     *     serviceName: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "operation": {},
     *       //   "requestProjectSettings": false,
     *       //   "serviceConfigId": "my_serviceConfigId",
     *       //   "skipActivationCheck": false
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "checkErrors": [],
     *   //   "checkInfo": {},
     *   //   "operationId": "my_operationId",
     *   //   "quotaInfo": {},
     *   //   "serviceConfigId": "my_serviceConfigId",
     *   //   "serviceRolloutId": "my_serviceRolloutId"
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
    check(
      params: Params$Resource$Services$Check,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    check(
      params?: Params$Resource$Services$Check,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$CheckResponse>>;
    check(
      params: Params$Resource$Services$Check,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    check(
      params: Params$Resource$Services$Check,
      options: MethodOptions | BodyResponseCallback<Schema$CheckResponse>,
      callback: BodyResponseCallback<Schema$CheckResponse>
    ): void;
    check(
      params: Params$Resource$Services$Check,
      callback: BodyResponseCallback<Schema$CheckResponse>
    ): void;
    check(callback: BodyResponseCallback<Schema$CheckResponse>): void;
    check(
      paramsOrCallback?:
        | Params$Resource$Services$Check
        | BodyResponseCallback<Schema$CheckResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$CheckResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$CheckResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$CheckResponse>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback || {}) as Params$Resource$Services$Check;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Services$Check;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://servicecontrol.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/services/{serviceName}:check').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['serviceName'],
        pathParams: ['serviceName'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$CheckResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$CheckResponse>(parameters);
      }
    }

    /**
     * Reports operation results to Google Service Control, such as logs and metrics. It should be called after an operation is completed. If feasible, the client should aggregate reporting data for up to 5 seconds to reduce API traffic. Limiting aggregation to 5 seconds is to reduce data loss during client crashes. Clients should carefully choose the aggregation time window to avoid data loss risk more than 0.01% for business and compliance reasons. NOTE: the ReportRequest has the size limit (wire-format byte size) of 1MB. This method requires the `servicemanagement.services.report` permission on the specified service. For more information, see [Google Cloud IAM](https://cloud.google.com/iam).
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/servicecontrol.googleapis.com
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
     * const servicecontrol = google.servicecontrol('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/cloud-platform',
     *       'https://www.googleapis.com/auth/servicecontrol',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await servicecontrol.services.report({
     *     // The service name as specified in its service configuration. For example, `"pubsub.googleapis.com"`. See [google.api.Service](https://cloud.google.com/service-management/reference/rpc/google.api#google.api.Service) for the definition of a service name.
     *     serviceName: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "operations": [],
     *       //   "serviceConfigId": "my_serviceConfigId"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "reportErrors": [],
     *   //   "serviceConfigId": "my_serviceConfigId",
     *   //   "serviceRolloutId": "my_serviceRolloutId"
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
    report(
      params: Params$Resource$Services$Report,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    report(
      params?: Params$Resource$Services$Report,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$ReportResponse>>;
    report(
      params: Params$Resource$Services$Report,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    report(
      params: Params$Resource$Services$Report,
      options: MethodOptions | BodyResponseCallback<Schema$ReportResponse>,
      callback: BodyResponseCallback<Schema$ReportResponse>
    ): void;
    report(
      params: Params$Resource$Services$Report,
      callback: BodyResponseCallback<Schema$ReportResponse>
    ): void;
    report(callback: BodyResponseCallback<Schema$ReportResponse>): void;
    report(
      paramsOrCallback?:
        | Params$Resource$Services$Report
        | BodyResponseCallback<Schema$ReportResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ReportResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ReportResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$ReportResponse>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback || {}) as Params$Resource$Services$Report;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Services$Report;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://servicecontrol.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/services/{serviceName}:report').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['serviceName'],
        pathParams: ['serviceName'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$ReportResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ReportResponse>(parameters);
      }
    }
  }

  export interface Params$Resource$Services$Allocatequota
    extends StandardParameters {
    /**
     * Name of the service as specified in the service configuration. For example, `"pubsub.googleapis.com"`. See google.api.Service for the definition of a service name.
     */
    serviceName?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$AllocateQuotaRequest;
  }
  export interface Params$Resource$Services$Check extends StandardParameters {
    /**
     * The service name as specified in its service configuration. For example, `"pubsub.googleapis.com"`. See [google.api.Service](https://cloud.google.com/service-management/reference/rpc/google.api#google.api.Service) for the definition of a service name.
     */
    serviceName?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$CheckRequest;
  }
  export interface Params$Resource$Services$Report extends StandardParameters {
    /**
     * The service name as specified in its service configuration. For example, `"pubsub.googleapis.com"`. See [google.api.Service](https://cloud.google.com/service-management/reference/rpc/google.api#google.api.Service) for the definition of a service name.
     */
    serviceName?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$ReportRequest;
  }
}
