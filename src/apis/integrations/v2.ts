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

export namespace integrations_v2 {
  export interface Options extends GlobalOptions {
    version: 'v2';
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
   * Application Integration API
   *
   *
   *
   * @example
   * ```js
   * const {google} = require('googleapis');
   * const integrations = google.integrations('v2');
   * ```
   */
  export class Integrations {
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

  export interface Schema$EnterpriseCrmEventbusAuthconfigAuthConfigTaskParam {
    /**
     * Defines the credential types to be supported as Task may restrict specific types to use, e.g. Cloud SQL Task will use username/password type only.
     */
    allowedCredentialTypes?: string[] | null;
    allowedServiceAccountInContext?: boolean | null;
    /**
     * UUID of the AuthConfig.
     */
    authConfigId?: string | null;
    /**
     * A space-delimited list of requested scope permissions.
     */
    scope?: string | null;
    useServiceAccountInContext?: boolean | null;
  }
  /**
   * Email address along with optional name and tokens. These tokens will be substituted for the variables in the form of [{var_name\}], where var_name could be any string of no more than 32 bytes.
   */
  export interface Schema$EnterpriseCrmEventbusProtoAddress {
    /**
     * Required.
     */
    email?: string | null;
    name?: string | null;
    tokens?: Schema$EnterpriseCrmEventbusProtoToken[];
  }
  export interface Schema$EnterpriseCrmEventbusProtoBaseFunction {
    functionName?: string | null;
  }
  export interface Schema$EnterpriseCrmEventbusProtoBaseValue {
    /**
     * Start with a function that does not build on existing values. Eg. CurrentTime, Min, Max, Exists, etc.
     */
    baseFunction?: Schema$EnterpriseCrmEventbusProtoFunction;
    /**
     * Start with a literal value.
     */
    literalValue?: Schema$EnterpriseCrmEventbusProtoParameterValueType;
    /**
     * Start with a reference value to dereference.
     */
    referenceValue?: string | null;
  }
  export interface Schema$EnterpriseCrmEventbusProtoBooleanArrayFunction {
    functionName?: string | null;
  }
  export interface Schema$EnterpriseCrmEventbusProtoBooleanFunction {
    functionName?: string | null;
  }
  export interface Schema$EnterpriseCrmEventbusProtoBooleanParameterArray {
    booleanValues?: boolean[] | null;
  }
  export interface Schema$EnterpriseCrmEventbusProtoBuganizerNotification {
    /**
     * Whom to assign the new bug. Optional.
     */
    assigneeEmailAddress?: string | null;
    /**
     * ID of the buganizer component within which to create a new issue. Required.
     */
    componentId?: string | null;
    /**
     * ID of the buganizer template to use. Optional.
     */
    templateId?: string | null;
    /**
     * Title of the issue to be created. Required.
     */
    title?: string | null;
  }
  export interface Schema$EnterpriseCrmEventbusProtoCloudKmsConfig {
    /**
     * Optional. The id of GCP project where the KMS key is stored. If not provided, assume the key is stored in the same GCP project defined in Client (tag 14).
     */
    gcpProjectId?: string | null;
    /**
     * A Cloud KMS key is a named object containing one or more key versions, along with metadata for the key. A key exists on exactly one key ring tied to a specific location.
     */
    keyName?: string | null;
    /**
     * A key ring organizes keys in a specific Google Cloud location and allows you to manage access control on groups of keys. A key ring's name does not need to be unique across a Google Cloud project, but must be unique within a given location.
     */
    keyRingName?: string | null;
    /**
     * Optional. Each version of a key contains key material used for encryption or signing. A key's version is represented by an integer, starting at 1. To decrypt data or verify a signature, you must use the same key version that was used to encrypt or sign the data.
     */
    keyVersionName?: string | null;
    /**
     * Location name of the key ring, e.g. "us-west1".
     */
    locationName?: string | null;
    /**
     * Optional. The service account used for authentication of this KMS key. If this is not provided, the service account in Client.clientSource will be used.
     */
    serviceAccount?: string | null;
  }
  export interface Schema$EnterpriseCrmEventbusProtoConnectorsConnection {
    /**
     * Connection name Format: projects/{project\}/locations/{location\}/connections/{connection\}
     */
    connectionName?: string | null;
    /**
     * Connector version Format: projects/{project\}/locations/{location\}/providers/{provider\}/connectors/{connector\}/versions/{version\}
     */
    connectorVersion?: string | null;
    /**
     * The name of the Hostname of the Service Directory service with TLS if used.
     */
    host?: string | null;
    /**
     * Service name Format: projects/{project\}/locations/{location\}/namespaces/{namespace\}/services/{service\}
     */
    serviceName?: string | null;
  }
  export interface Schema$EnterpriseCrmEventbusProtoConnectorsGenericConnectorTaskConfig {
    /**
     * User-selected connection.
     */
    connection?: Schema$EnterpriseCrmEventbusProtoConnectorsConnection;
    /**
     * Operation to perform using the configured connection.
     */
    operation?: string | null;
  }
  export interface Schema$EnterpriseCrmEventbusProtoCustomSuspensionRequest {
    /**
     * Request to fire an event containing the SuspensionInfo message.
     */
    postToQueueWithTriggerIdRequest?: Schema$GoogleInternalCloudCrmEventbusV3PostToQueueWithTriggerIdRequest;
    /**
     * In the fired event, set the SuspensionInfo message as the value for this key.
     */
    suspensionInfoEventParameterKey?: string | null;
  }
  export interface Schema$EnterpriseCrmEventbusProtoDoubleArrayFunction {
    functionName?: string | null;
  }
  export interface Schema$EnterpriseCrmEventbusProtoDoubleFunction {
    functionName?: string | null;
  }
  export interface Schema$EnterpriseCrmEventbusProtoDoubleParameterArray {
    doubleValues?: number[] | null;
  }
  /**
   * LINT.IfChange This message is used for processing and persisting (when applicable) key value pair parameters for each event in the event bus. Please see
   */
  export interface Schema$EnterpriseCrmEventbusProtoEventParameters {
    /**
     * Parameters are a part of Event and can be used to communicate between different tasks that are part of the same integration execution.
     */
    parameters?: Schema$EnterpriseCrmEventbusProtoParameterEntry[];
  }
  /**
   * Message that helps aggregate all sub-executions triggered by one execution and keeps track of child-parent relationships.
   */
  export interface Schema$EnterpriseCrmEventbusProtoExecutionTraceInfo {
    /**
     * Parent event execution info id that triggers the current execution through SubWorkflowExecutorTask.
     */
    parentEventExecutionInfoId?: string | null;
    /**
     * Used to aggregate ExecutionTraceInfo.
     */
    traceId?: string | null;
  }
  /**
   * Represents external traffic type and id.
   */
  export interface Schema$EnterpriseCrmEventbusProtoExternalTraffic {
    /**
     * Indicates the client enables internal IP feature, this is applicable for internal clients only.
     */
    enableInternalIp?: boolean | null;
    /**
     * User’s GCP project id the traffic is referring to.
     */
    gcpProjectId?: string | null;
    /**
     * User’s GCP project number the traffic is referring to.
     */
    gcpProjectNumber?: string | null;
    /**
     * Location for the user's request.
     */
    location?: string | null;
    /**
     * Enqueue the execution request due to quota issue
     */
    retryRequestForQuota?: boolean | null;
    source?: string | null;
  }
  /**
   * Information about the value and type of the field.
   */
  export interface Schema$EnterpriseCrmEventbusProtoField {
    /**
     * By default, if the cardinality is unspecified the field is considered required while mapping.
     */
    cardinality?: string | null;
    /**
     * This holds the default values for the fields. This value is supplied by user so may or may not contain PII or SPII data.
     */
    defaultValue?: Schema$EnterpriseCrmEventbusProtoParameterValueType;
    /**
     * Specifies the data type of the field.
     */
    fieldType?: string | null;
    /**
     * Optional. The fully qualified proto name (e.g. enterprise.crm.storage.Account). Required for output field of type PROTO_VALUE or PROTO_ARRAY. For e.g., if input field_type is BYTES and output field_type is PROTO_VALUE, then fully qualified proto type url should be provided to parse the input bytes. If field_type is *_ARRAY, then all the converted protos are of the same type.
     */
    protoDefPath?: string | null;
    /**
     * This holds the reference key of the workflow or task parameter. 1. Any workflow parameter, for e.g. $workflowParam1$. 2. Any task input or output parameter, for e.g. $task1_param1$. 3. Any workflow or task parameters with subfield references, for e.g., $task1_param1.employee.id$
     */
    referenceKey?: string | null;
    /**
     * This is the transform expression to fetch the input field value. for e.g. $param1$.CONCAT('test'). Keep points - 1. Only input field can have a transform expression. 2. If a transform expression is provided, reference_key will be ignored. 3. If no value is returned after evaluation of transform expression, default_value can be mapped if provided. 4. The field_type should be the type of the final object returned after the transform expression is evaluated. Scrubs the transform expression before logging as value provided by user so may or may not contain PII or SPII data.
     */
    transformExpression?: Schema$EnterpriseCrmEventbusProtoTransformExpression;
  }
  /**
   * Field Mapping Config to map multiple output fields values from input fields values.
   */
  export interface Schema$EnterpriseCrmEventbusProtoFieldMappingConfig {
    mappedFields?: Schema$EnterpriseCrmEventbusProtoMappedField[];
  }
  export interface Schema$EnterpriseCrmEventbusProtoFunction {
    /**
     * The name of the function to perform.
     */
    functionType?: Schema$EnterpriseCrmEventbusProtoFunctionType;
    /**
     * List of parameters required for the transformation.
     */
    parameters?: Schema$EnterpriseCrmEventbusProtoTransformExpression[];
  }
  export interface Schema$EnterpriseCrmEventbusProtoFunctionType {
    /**
     * LINT.IfChange
     */
    baseFunction?: Schema$EnterpriseCrmEventbusProtoBaseFunction;
    booleanArrayFunction?: Schema$EnterpriseCrmEventbusProtoBooleanArrayFunction;
    booleanFunction?: Schema$EnterpriseCrmEventbusProtoBooleanFunction;
    doubleArrayFunction?: Schema$EnterpriseCrmEventbusProtoDoubleArrayFunction;
    doubleFunction?: Schema$EnterpriseCrmEventbusProtoDoubleFunction;
    intArrayFunction?: Schema$EnterpriseCrmEventbusProtoIntArrayFunction;
    intFunction?: Schema$EnterpriseCrmEventbusProtoIntFunction;
    jsonFunction?: Schema$EnterpriseCrmEventbusProtoJsonFunction;
    protoArrayFunction?: Schema$EnterpriseCrmEventbusProtoProtoArrayFunction;
    protoFunction?: Schema$EnterpriseCrmEventbusProtoProtoFunction;
    stringArrayFunction?: Schema$EnterpriseCrmEventbusProtoStringArrayFunction;
    stringFunction?: Schema$EnterpriseCrmEventbusProtoStringFunction;
  }
  export interface Schema$EnterpriseCrmEventbusProtoIntArrayFunction {
    functionName?: string | null;
  }
  export interface Schema$EnterpriseCrmEventbusProtoIntFunction {
    functionName?: string | null;
  }
  export interface Schema$EnterpriseCrmEventbusProtoIntParameterArray {
    intValues?: string[] | null;
  }
  export interface Schema$EnterpriseCrmEventbusProtoJsonFunction {
    functionName?: string | null;
  }
  export interface Schema$EnterpriseCrmEventbusProtoLoopMetadata {
    /**
     * Starting from 1, not 0.
     */
    currentIterationCount?: string | null;
    /**
     * Needs to be set by the loop impl class before each iteration. The abstract loop class will append the request and response to it. Eg. The foreach Loop will clean up and set it as the current iteration element at the start of each loop. The post request and response will be appended to the value once they are available.
     */
    currentIterationDetail?: string | null;
    /**
     * Add the error message when loops fail.
     */
    errorMsg?: string | null;
    /**
     * Indicates where in the loop logic did it error out.
     */
    failureLocation?: string | null;
  }
  /**
   * Mapped field is a pair of input field and output field.
   */
  export interface Schema$EnterpriseCrmEventbusProtoMappedField {
    /**
     * The input field being mapped from.
     */
    inputField?: Schema$EnterpriseCrmEventbusProtoField;
    /**
     * The output field being mapped to.
     */
    outputField?: Schema$EnterpriseCrmEventbusProtoField;
  }
  export interface Schema$EnterpriseCrmEventbusProtoNotification {
    buganizerNotification?: Schema$EnterpriseCrmEventbusProtoBuganizerNotification;
    emailAddress?: Schema$EnterpriseCrmEventbusProtoAddress;
    escalatorQueue?: string | null;
    pubsubTopic?: string | null;
    /**
     * If the out-of-the-box email/pubsub notifications are not suitable and custom logic is required, fire a workflow containing all info needed to notify users to resume execution.
     */
    request?: Schema$EnterpriseCrmEventbusProtoCustomSuspensionRequest;
  }
  /**
   * Key-value pair of EventBus parameters.
   */
  export interface Schema$EnterpriseCrmEventbusProtoParameterEntry {
    /**
     * Key is used to retrieve the corresponding parameter value. This should be unique for a given fired event. These parameters must be predefined in the integration definition.
     */
    key?: string | null;
    /**
     * True if this parameter should be masked in the logs
     */
    masked?: boolean | null;
    /**
     * Values for the defined keys. Each value can either be string, int, double or any proto message.
     */
    value?: Schema$EnterpriseCrmEventbusProtoParameterValueType;
  }
  /**
   * A generic multi-map that holds key value pairs. They keys and values can be of any type, unless specified.
   */
  export interface Schema$EnterpriseCrmEventbusProtoParameterMap {
    entries?: Schema$EnterpriseCrmEventbusProtoParameterMapEntry[];
    /**
     * Option to specify key value type for all entries of the map. If provided then field types for all entries must conform to this.
     */
    keyType?: string | null;
    valueType?: string | null;
  }
  /**
   * Entry is a pair of key and value.
   */
  export interface Schema$EnterpriseCrmEventbusProtoParameterMapEntry {
    key?: Schema$EnterpriseCrmEventbusProtoParameterMapField;
    value?: Schema$EnterpriseCrmEventbusProtoParameterMapField;
  }
  /**
   * Field represents either the key or value in an entry.
   */
  export interface Schema$EnterpriseCrmEventbusProtoParameterMapField {
    /**
     * Passing a literal value.
     */
    literalValue?: Schema$EnterpriseCrmEventbusProtoParameterValueType;
    /**
     * Referencing one of the WF variables.
     */
    referenceKey?: string | null;
  }
  /**
   * LINT.IfChange To support various types of parameter values. Next available id: 14
   */
  export interface Schema$EnterpriseCrmEventbusProtoParameterValueType {
    booleanArray?: Schema$EnterpriseCrmEventbusProtoBooleanParameterArray;
    booleanValue?: boolean | null;
    doubleArray?: Schema$EnterpriseCrmEventbusProtoDoubleParameterArray;
    doubleValue?: number | null;
    intArray?: Schema$EnterpriseCrmEventbusProtoIntParameterArray;
    intValue?: string | null;
    protoArray?: Schema$EnterpriseCrmEventbusProtoProtoParameterArray;
    protoValue?: {[key: string]: any} | null;
    serializedObjectValue?: Schema$EnterpriseCrmEventbusProtoSerializedObjectParameter;
    stringArray?: Schema$EnterpriseCrmEventbusProtoStringParameterArray;
    stringValue?: string | null;
  }
  export interface Schema$EnterpriseCrmEventbusProtoProtoArrayFunction {
    functionName?: string | null;
  }
  export interface Schema$EnterpriseCrmEventbusProtoProtoFunction {
    functionName?: string | null;
  }
  export interface Schema$EnterpriseCrmEventbusProtoProtoParameterArray {
    protoValues?: Array<{[key: string]: any}> | null;
  }
  export interface Schema$EnterpriseCrmEventbusProtoScatterResponse {
    /**
     * The error message of the failure if applicable.
     */
    errorMsg?: string | null;
    /**
     * The execution ids of each Subworkflow fired by this scatter.
     */
    executionIds?: string[] | null;
    /**
     * If execution is sync, this is true if the execution passed and false if it failed. If the execution is async, this is true if the WF was fired off successfully, and false if it failed to execute. The success or failure of the subworkflows executed are not captured.
     */
    isSuccessful?: boolean | null;
    /**
     * A list of all the response parameters in the aggregtorMap stored with the remapped key.
     */
    responseParams?: Schema$EnterpriseCrmEventbusProtoParameterEntry[];
    /**
     * The element that was scattered for this execution.
     */
    scatterElement?: Schema$EnterpriseCrmEventbusProtoParameterValueType;
  }
  export interface Schema$EnterpriseCrmEventbusProtoSerializedObjectParameter {
    objectValue?: string | null;
  }
  export interface Schema$EnterpriseCrmEventbusProtoStringArrayFunction {
    functionName?: string | null;
  }
  export interface Schema$EnterpriseCrmEventbusProtoStringFunction {
    functionName?: string | null;
  }
  export interface Schema$EnterpriseCrmEventbusProtoStringParameterArray {
    stringValues?: string[] | null;
  }
  /**
   * LINT.IfChange
   */
  export interface Schema$EnterpriseCrmEventbusProtoSuspensionAuthPermissions {
    /**
     * Represents a Gaia identity for a person or service account.
     */
    gaiaIdentity?: Schema$EnterpriseCrmEventbusProtoSuspensionAuthPermissionsGaiaIdentity;
    googleGroup?: Schema$EnterpriseCrmEventbusProtoSuspensionAuthPermissionsGaiaIdentity;
    loasRole?: string | null;
    mdbGroup?: string | null;
  }
  export interface Schema$EnterpriseCrmEventbusProtoSuspensionAuthPermissionsGaiaIdentity {
    emailAddress?: string | null;
    gaiaId?: string | null;
  }
  export interface Schema$EnterpriseCrmEventbusProtoSuspensionConfig {
    /**
     * Optional information to provide recipients of the suspension in addition to the resolution URL, typically containing relevant parameter values from the originating workflow.
     */
    customMessage?: string | null;
    notifications?: Schema$EnterpriseCrmEventbusProtoNotification[];
    /**
     * Indicates the next steps when no external actions happen on the suspension.
     */
    suspensionExpiration?: Schema$EnterpriseCrmEventbusProtoSuspensionExpiration;
    /**
     * Identities able to resolve this suspension.
     */
    whoMayResolve?: Schema$EnterpriseCrmEventbusProtoSuspensionAuthPermissions[];
  }
  export interface Schema$EnterpriseCrmEventbusProtoSuspensionExpiration {
    /**
     * Milliseconds after which the suspension expires, if no action taken.
     */
    expireAfterMs?: number | null;
    /**
     * Whether the suspension will be REJECTED or LIFTED upon expiration. REJECTED is the default behavior.
     */
    liftWhenExpired?: boolean | null;
    /**
     * Milliseconds after which the previous suspension action reminder, if any, is sent using the selected notification option, for a suspension which is still PENDING_UNSPECIFIED.
     */
    remindAfterMs?: number | null;
  }
  export interface Schema$EnterpriseCrmEventbusProtoSuspensionResolutionInfo {
    audit?: Schema$EnterpriseCrmEventbusProtoSuspensionResolutionInfoAudit;
    /**
     * The event data user sends as request.
     */
    clientId?: string | null;
    /**
     * KMS info, used by cmek/gmek integration
     */
    cloudKmsConfig?: Schema$EnterpriseCrmEventbusProtoCloudKmsConfig;
    /**
     * Auto-generated.
     */
    createdTimestamp?: string | null;
    /**
     * Encrypted SuspensionResolutionInfo
     */
    encryptedSuspensionResolutionInfo?: string | null;
    /**
     * Required. ID of the associated execution.
     */
    eventExecutionInfoId?: string | null;
    /**
     * The origin of the suspension for periodic notifications.
     */
    externalTraffic?: Schema$EnterpriseCrmEventbusProtoExternalTraffic;
    /**
     * Auto-generated.
     */
    lastModifiedTimestamp?: string | null;
    /**
     * Which Google product the suspension belongs to. If not set, the suspension belongs to Integration Platform by default.
     */
    product?: string | null;
    status?: string | null;
    suspensionConfig?: Schema$EnterpriseCrmEventbusProtoSuspensionConfig;
    /**
     * Primary key for the SuspensionResolutionInfoTable.
     */
    suspensionId?: string | null;
    /**
     * Required. Task number of the associated SuspensionTask.
     */
    taskNumber?: string | null;
    /**
     * Required. The name of the originating workflow.
     */
    workflowName?: string | null;
    /**
     * Wrapped dek
     */
    wrappedDek?: string | null;
  }
  export interface Schema$EnterpriseCrmEventbusProtoSuspensionResolutionInfoAudit {
    resolvedBy?: string | null;
    resolvedByCpi?: string | null;
    timestamp?: string | null;
  }
  export interface Schema$EnterpriseCrmEventbusProtoToken {
    name?: string | null;
    value?: string | null;
  }
  export interface Schema$EnterpriseCrmEventbusProtoTransformExpression {
    /**
     * Initial value upon which to perform transformations.
     */
    initialValue?: Schema$EnterpriseCrmEventbusProtoBaseValue;
    /**
     * Transformations to be applied sequentially.
     */
    transformationFunctions?: Schema$EnterpriseCrmEventbusProtoFunction[];
  }
  export interface Schema$EnterpriseCrmFrontendsEventbusProtoBooleanParameterArray {
    booleanValues?: boolean[] | null;
  }
  export interface Schema$EnterpriseCrmFrontendsEventbusProtoDoubleParameterArray {
    doubleValues?: number[] | null;
  }
  export interface Schema$EnterpriseCrmFrontendsEventbusProtoIntParameterArray {
    intValues?: string[] | null;
  }
  /**
   * A generic multi-map that holds key value pairs. They keys and values can be of any type, unless specified.
   */
  export interface Schema$EnterpriseCrmFrontendsEventbusProtoParameterMap {
    entries?: Schema$EnterpriseCrmFrontendsEventbusProtoParameterMapEntry[];
    /**
     * Option to specify key value type for all entries of the map. If provided then field types for all entries must conform to this.
     */
    keyType?: string | null;
    valueType?: string | null;
  }
  /**
   * Entry is a pair of key and value.
   */
  export interface Schema$EnterpriseCrmFrontendsEventbusProtoParameterMapEntry {
    key?: Schema$EnterpriseCrmFrontendsEventbusProtoParameterMapField;
    value?: Schema$EnterpriseCrmFrontendsEventbusProtoParameterMapField;
  }
  /**
   * Field represents either the key or value in an entry.
   */
  export interface Schema$EnterpriseCrmFrontendsEventbusProtoParameterMapField {
    /**
     * Passing a literal value.
     */
    literalValue?: Schema$EnterpriseCrmFrontendsEventbusProtoParameterValueType;
    /**
     * Referencing one of the WF variables.
     */
    referenceKey?: string | null;
  }
  /**
   * To support various types of parameter values. Next available id: 14
   */
  export interface Schema$EnterpriseCrmFrontendsEventbusProtoParameterValueType {
    booleanArray?: Schema$EnterpriseCrmFrontendsEventbusProtoBooleanParameterArray;
    booleanValue?: boolean | null;
    doubleArray?: Schema$EnterpriseCrmFrontendsEventbusProtoDoubleParameterArray;
    doubleValue?: number | null;
    intArray?: Schema$EnterpriseCrmFrontendsEventbusProtoIntParameterArray;
    intValue?: string | null;
    jsonValue?: string | null;
    protoArray?: Schema$EnterpriseCrmFrontendsEventbusProtoProtoParameterArray;
    protoValue?: {[key: string]: any} | null;
    serializedObjectValue?: Schema$EnterpriseCrmFrontendsEventbusProtoSerializedObjectParameter;
    stringArray?: Schema$EnterpriseCrmFrontendsEventbusProtoStringParameterArray;
    stringValue?: string | null;
  }
  export interface Schema$EnterpriseCrmFrontendsEventbusProtoProtoParameterArray {
    protoValues?: Array<{[key: string]: any}> | null;
  }
  export interface Schema$EnterpriseCrmFrontendsEventbusProtoSerializedObjectParameter {
    objectValue?: string | null;
  }
  export interface Schema$EnterpriseCrmFrontendsEventbusProtoStringParameterArray {
    stringValues?: string[] | null;
  }
  /**
   * Message that represents an arbitrary HTTP body. It should only be used for payload formats that can't be represented as JSON, such as raw binary or an HTML page. This message can be used both in streaming and non-streaming API methods in the request as well as the response. It can be used as a top-level request field, which is convenient if one wants to extract parameters from either the URL or HTTP template into the request fields and also want access to the raw HTTP body. Example: message GetResourceRequest { // A unique request id. string request_id = 1; // The raw HTTP body is bound to this field. google.api.HttpBody http_body = 2; \} service ResourceService { rpc GetResource(GetResourceRequest) returns (google.api.HttpBody); rpc UpdateResource(google.api.HttpBody) returns (google.protobuf.Empty); \} Example with streaming methods: service CaldavService { rpc GetCalendar(stream google.api.HttpBody) returns (stream google.api.HttpBody); rpc UpdateCalendar(stream google.api.HttpBody) returns (stream google.api.HttpBody); \} Use of this type only changes how the request and response bodies are handled, all other features will continue to work unchanged.
   */
  export interface Schema$GoogleApiHttpBody {
    /**
     * The HTTP Content-Type header value specifying the content type of the body.
     */
    contentType?: string | null;
    /**
     * The HTTP request/response body as raw binary.
     */
    data?: string | null;
    /**
     * Application specific response metadata. Must be set in the first response for streaming APIs.
     */
    extensions?: Array<{[key: string]: any}> | null;
  }
  /**
   * Status for the execution attempt.
   */
  export interface Schema$GoogleCloudIntegrationsV2AttemptStats {
    /**
     * The end time of the execution for the current attempt.
     */
    endTime?: string | null;
    /**
     * The start time of the execution for the current attempt. This could be in the future if it's been scheduled.
     */
    startTime?: string | null;
  }
  /**
   * Cloud Logging details for execution info
   */
  export interface Schema$GoogleCloudIntegrationsV2CloudLoggingDetails {
    /**
     * Optional. Severity selected by the customer for the logs to be sent to Cloud Logging, for the integration version getting executed.
     */
    cloudLoggingSeverity?: string | null;
    /**
     * Optional. Status of whether Cloud Logging is enabled or not for the integration version getting executed.
     */
    enableCloudLogging?: boolean | null;
  }
  /**
   * This message only contains a field of boolean array.
   */
  export interface Schema$GoogleCloudIntegrationsV2DuetBooleanParameterArray {
    /**
     * Boolean array.
     */
    booleanValues?: boolean[] | null;
  }
  /**
   * Cloud Scheduler Trigger configuration
   */
  export interface Schema$GoogleCloudIntegrationsV2DuetCloudSchedulerConfig {
    /**
     * Required. The cron tab of cloud scheduler trigger.
     */
    cronTab?: string | null;
    /**
     * Optional. When the job was deleted from Pantheon UI, error_message will be populated when Get/List integrations
     */
    errorMessage?: string | null;
    /**
     * Required. The location where associated cloud scheduler job will be created
     */
    location?: string | null;
    /**
     * Required. Service account used by Cloud Scheduler to trigger the integration at scheduled time
     */
    serviceAccountEmail?: string | null;
  }
  /**
   * This message only contains a field of double number array.
   */
  export interface Schema$GoogleCloudIntegrationsV2DuetDoubleParameterArray {
    /**
     * Double number array.
     */
    doubleValues?: number[] | null;
  }
  /**
   * Configuration detail of a error catch task
   */
  export interface Schema$GoogleCloudIntegrationsV2DuetErrorCatcherConfig {
    /**
     * Optional. User-provided description intended to give more business context about the error catcher config.
     */
    description?: string | null;
    /**
     * Required. An error catcher id is string representation for the error catcher config. Within a workflow, error_catcher_id uniquely identifies an error catcher config among all error catcher configs for the workflow
     */
    errorCatcherId?: string | null;
    /**
     * Required. A number to uniquely identify each error catcher config within the workflow on UI.
     */
    errorCatcherNumber?: string | null;
    /**
     * Optional. The user created label for a particular error catcher. Optional.
     */
    label?: string | null;
    /**
     * Required. The set of start tasks that are to be executed for the error catch flow
     */
    startErrorTasks?: Schema$GoogleCloudIntegrationsV2DuetNextTask[];
  }
  /**
   * This message is used for processing and persisting (when applicable) key value pair parameters for each event in the event bus.
   */
  export interface Schema$GoogleCloudIntegrationsV2DuetEventParameter {
    /**
     * Key is used to retrieve the corresponding parameter value. This should be unique for a given fired event. These parameters must be predefined in the integration definition.
     */
    key?: string | null;
    /**
     * Values for the defined keys. Each value can either be string, int, double or any proto message.
     */
    value?: Schema$GoogleCloudIntegrationsV2DuetValueType;
  }
  /**
   * Request message for generating an integration branch containing tasks.
   */
  export interface Schema$GoogleCloudIntegrationsV2DuetGenerateIntegrationBranchRequest {
    /**
     * Required. The integration branch request payload.
     */
    integrationBranchRequest?: Schema$GoogleCloudIntegrationsV2DuetIntegrationBranchRequest;
    /**
     * Required. User prompt.
     */
    prompt?: string | null;
  }
  /**
   * Response message containing the generated integration branch data.
   */
  export interface Schema$GoogleCloudIntegrationsV2DuetGenerateIntegrationBranchResponse {
    /**
     * The integration branch returned by Duet
     */
    integrationBranch?: Schema$GoogleCloudIntegrationsV2DuetIntegrationBranch;
  }
  /**
   * Request message for generating documentation for an integration version.
   */
  export interface Schema$GoogleCloudIntegrationsV2DuetGenerateIntegrationDocumentRequest {
    /**
     * Required. The integration document request payload.
     */
    integrationDocumentRequest?: Schema$GoogleCloudIntegrationsV2DuetIntegrationDocumentRequest;
  }
  /**
   * Response message containing generated integration documentation text.
   */
  export interface Schema$GoogleCloudIntegrationsV2DuetGenerateIntegrationDocumentResponse {
    /**
     * The description of the integration returned by Duet AI.
     */
    document?: string | null;
  }
  /**
   * Request for generating an integration.
   */
  export interface Schema$GoogleCloudIntegrationsV2DuetGenerateIntegrationRequest {
    /**
     * Optional. Indicates if copilot is enabled. Copilot features may alter the generated integration structure.
     */
    copilotEnabled?: boolean | null;
    /**
     * Required. The natural language prompt based on which the integration will be generated.
     */
    prompt?: string | null;
  }
  /**
   * Response for generating an integration.
   */
  export interface Schema$GoogleCloudIntegrationsV2DuetGenerateIntegrationResponse {
    /**
     * The list of integration skeletons returned.
     */
    skeletonIntegrations?: Schema$GoogleCloudIntegrationsV2DuetIntegrationSkeleton[];
  }
  /**
   * Request message for generating data mapping Javascript.
   */
  export interface Schema$GoogleCloudIntegrationsV2DuetGenerateJavascriptRequest {
    /**
     * Required. The javascript request payload.
     */
    javascriptRequest?: Schema$GoogleCloudIntegrationsV2DuetJavascriptRequest;
    /**
     * Optional. User prompt.
     */
    prompt?: string | null;
  }
  /**
   * Response message containing generated Javascript code recommendations.
   */
  export interface Schema$GoogleCloudIntegrationsV2DuetGenerateJavascriptResponse {
    /**
     * List of the Javascript recommendations.
     */
    recommendations?: Schema$GoogleCloudIntegrationsV2DuetJavascriptRecommendation[];
  }
  /**
   * An integration branch skeleton containing basic fields which can be used to create an integration branch on the UI.
   */
  export interface Schema$GoogleCloudIntegrationsV2DuetIntegrationBranch {
    /**
     * The condition for the branch.
     */
    branchCondition?: string | null;
    /**
     * Explanation of why this integration branch was generated.
     */
    explanation?: string | null;
    /**
     * The newly generated workflow parameters.
     */
    integrationParameters?: Schema$GoogleCloudIntegrationsV2DuetIntegrationParameter[];
    /**
     * The newly generated tasks which can be branched into the current integration.
     */
    taskConfigs?: Schema$GoogleCloudIntegrationsV2DuetTaskConfig[];
  }
  /**
   * The request for generating an integration branch.
   */
  export interface Schema$GoogleCloudIntegrationsV2DuetIntegrationBranchRequest {
    /**
     * Optional. The condition for the particular branch which the user selected.
     */
    branchCondition?: string | null;
    /**
     * Optional. A list of all the workflow parameters of the current integration.
     */
    integrationParameters?: Schema$GoogleCloudIntegrationsV2DuetIntegrationParameter[];
    /**
     * Required. A list of all the tasks of the current integration.
     */
    taskConfigs?: Schema$GoogleCloudIntegrationsV2DuetTaskConfig[];
  }
  /**
   * Integration Config Parameter is defined in the integration config and are used to provide external configuration for integration. It provide information about data types of the expected parameters and provide any default values or value. They can also be used to add custom attributes.
   */
  export interface Schema$GoogleCloudIntegrationsV2DuetIntegrationConfigParameter {
    /**
     * Optional. Integration Parameter to provide the default value, data type and attributes required for the Integration config variables.
     */
    parameter?: Schema$GoogleCloudIntegrationsV2DuetIntegrationParameter;
    /**
     * Values for the defined keys. Each value can either be string, int, double or any proto message or a serialized object.
     */
    value?: Schema$GoogleCloudIntegrationsV2DuetValueType;
  }
  /**
   * The request for generating description of an integration.
   */
  export interface Schema$GoogleCloudIntegrationsV2DuetIntegrationDocumentRequest {
    /**
     * Required. The current integrtion on the canvas.
     */
    integrationVersion?: Schema$GoogleCloudIntegrationsV2DuetIntegrationVersion;
  }
  /**
   * Integration Parameter is defined in the integration config and are used to provide information about data types of the expected parameters and provide any default values if needed. They can also be used to add custom attributes. These are static in nature and should not be used for dynamic event definition.
   */
  export interface Schema$GoogleCloudIntegrationsV2DuetIntegrationParameter {
    /**
     * Type of the parameter.
     */
    dataType?: string | null;
    /**
     * Default values for the defined keys. Each value can either be string, int, double or any proto message or a serialized object.
     */
    defaultValue?: Schema$GoogleCloudIntegrationsV2DuetValueType;
    /**
     * Optional. Description of the parameter.
     */
    description?: string | null;
    /**
     * The name (without prefix) to be displayed in the UI for this parameter. E.g. if the key is "foo.bar.myName", then the name would be "myName".
     */
    displayName?: string | null;
    /**
     * Specifies the input/output type for the parameter.
     */
    inputOutputType?: string | null;
    /**
     * Whether this parameter is a transient parameter.
     */
    isTransient?: boolean | null;
    /**
     * This schema will be used to validate runtime JSON-typed values of this parameter.
     */
    jsonSchema?: string | null;
    /**
     * Key is used to retrieve the corresponding parameter value. This should be unique for a given fired event. These parameters must be predefined in the integration definition.
     */
    key?: string | null;
  }
  /**
   * An integration skeleton containing basic fields which can be used to create an integration on the UI.
   */
  export interface Schema$GoogleCloudIntegrationsV2DuetIntegrationSkeleton {
    /**
     * Explanation of why this integration was generated.
     */
    explanation?: string | null;
    /**
     * The integration version containing basic triggers and tasks.
     */
    integrationVersion?: Schema$GoogleCloudIntegrationsV2DuetIntegrationVersion;
    /**
     * The name of the integration.
     */
    name?: string | null;
    /**
     * Indicate the strategy/methodology used to generate the integration.
     */
    tag?: string | null;
  }
  /**
   * The integration version definition.
   */
  export interface Schema$GoogleCloudIntegrationsV2DuetIntegrationVersion {
    /**
     * Optional. The integration description.
     */
    description?: string | null;
    /**
     * Optional. Error Catch Task configuration for the integration. It's optional.
     */
    errorCatcherConfigs?: Schema$GoogleCloudIntegrationsV2DuetErrorCatcherConfig[];
    /**
     * Optional. Config Parameters that are expected to be passed to the integration when an integration is published. This consists of all the parameters that are expected to provide configuration in the integration execution. This gives the user the ability to provide default values, value, add information like connection url, project based configuration value and also provide data types of each parameter.
     */
    integrationConfigParameters?: Schema$GoogleCloudIntegrationsV2DuetIntegrationConfigParameter[];
    /**
     * Optional. Parameters that are expected to be passed to the integration when an event is triggered. This consists of all the parameters that are expected in the integration execution. This gives the user the ability to provide default values, add information like PII and also provide data types of each parameter.
     */
    integrationParameters?: Schema$GoogleCloudIntegrationsV2DuetIntegrationParameter[];
    /**
     * Optional. Auto-generated primary key.
     */
    name?: string | null;
    /**
     * Optional. An increasing sequence that is set when a new snapshot is created. The last created snapshot can be identified by [workflow_name, org_id latest(snapshot_number)]. However, last created snapshot need not be same as the HEAD. So users should always use "HEAD" tag to identify the head.
     */
    snapshotNumber?: string | null;
    /**
     * Output only. User should not set it as an input.
     */
    state?: string | null;
    /**
     * Optional. Task configuration for the integration. It's optional, but the integration doesn't do anything without task_configs.
     */
    taskConfigs?: Schema$GoogleCloudIntegrationsV2DuetTaskConfig[];
    /**
     * Optional. Trigger configurations.
     */
    triggerConfigs?: Schema$GoogleCloudIntegrationsV2DuetTriggerConfig[];
    /**
     * Optional. A user-defined label that annotates an integration version. Typically, this is only set when the integration version is created.
     */
    userLabel?: string | null;
  }
  /**
   * This message only contains a field of integer array.
   */
  export interface Schema$GoogleCloudIntegrationsV2DuetIntParameterArray {
    /**
     * Integer array.
     */
    intValues?: string[] | null;
  }
  /**
   * Individual Javascript recommendation containing the task config with the new code, integration parameters and the explanation.
   */
  export interface Schema$GoogleCloudIntegrationsV2DuetJavascriptRecommendation {
    /**
     * The explanation of the Javascript code.
     */
    explanation?: string | null;
    /**
     * Optional. The list of the new integration parameters.
     */
    integrationParameters?: Schema$GoogleCloudIntegrationsV2DuetIntegrationParameter[];
    /**
     * Optional. The task config of the Javascript task.
     */
    taskConfig?: Schema$GoogleCloudIntegrationsV2DuetTaskConfig;
  }
  /**
   * Request message for Javascript Task using Gemini.
   */
  export interface Schema$GoogleCloudIntegrationsV2DuetJavascriptRequest {
    /**
     * Optional. If this request is for copilot.
     */
    copilotEnabled?: boolean | null;
    /**
     * Required. The integration version which contains all the integration parameters, all triggers and tasks including the Javascript task.
     */
    integrationVersion?: Schema$GoogleCloudIntegrationsV2DuetIntegrationVersion;
    /**
     * Required. The task id of the Javascript task.
     */
    taskId?: string | null;
    /**
     * Optional. Whether to use the current javascript task config (JS code) to generate the Javascript code.
     */
    useCurrentScript?: boolean | null;
  }
  /**
   * The task that is next in line to be executed, if the condition specified evaluated to true.
   */
  export interface Schema$GoogleCloudIntegrationsV2DuetNextTask {
    /**
     * Standard filter expression for this task to become an eligible next task.
     */
    condition?: string | null;
    /**
     * User-provided description intended to give additional business context about the task.
     */
    description?: string | null;
    /**
     * User-provided label that is attached to this edge in the UI.
     */
    displayName?: string | null;
    /**
     * ID of the next task.
     */
    taskConfigId?: string | null;
    /**
     * Task number of the next task.
     */
    taskId?: string | null;
  }
  /**
   * Request message for recommending tasks to replace a selected task.
   */
  export interface Schema$GoogleCloudIntegrationsV2DuetRecommendTasksRequest {
    /**
     * Optional. User prompt.
     */
    prompt?: string | null;
    /**
     * Required. The current task to replace and options.
     */
    replaceTaskRequest?: Schema$GoogleCloudIntegrationsV2DuetReplaceTaskRequest;
  }
  /**
   * Response message containing recommended tasks for replacement.
   */
  export interface Schema$GoogleCloudIntegrationsV2DuetRecommendTasksResponse {
    /**
     * The list of recommended tasks.
     */
    taskConfigs?: Schema$GoogleCloudIntegrationsV2DuetTaskConfig[];
    /**
     * The list of task response status based on the task_types in the request.
     */
    taskResponseStatuses?: Schema$GoogleCloudIntegrationsV2DuetTaskResponseStatus[];
  }
  /**
   * Message for Replace Task Scenario.
   */
  export interface Schema$GoogleCloudIntegrationsV2DuetReplaceTaskRequest {
    /**
     * Optional. If this request is for copilot.
     */
    copilotEnabled?: boolean | null;
    /**
     * Required. The current task selected on the UI.
     */
    taskConfig?: Schema$GoogleCloudIntegrationsV2DuetTaskConfig;
    /**
     * The list of task types.
     */
    taskTypes?: string[] | null;
  }
  /**
   * This message only contains a field of string array.
   */
  export interface Schema$GoogleCloudIntegrationsV2DuetStringParameterArray {
    /**
     * String array.
     */
    stringValues?: string[] | null;
  }
  /**
   * The task configuration details. This is not the implementation of Task. There might be multiple TaskConfigs for the same Task.
   */
  export interface Schema$GoogleCloudIntegrationsV2DuetTaskConfig {
    /**
     * Optional. User-provided description intended to give additional business context about the task.
     */
    description?: string | null;
    /**
     * Optional. User-provided label that is attached to this TaskConfig in the UI.
     */
    displayName?: string | null;
    /**
     * Optional. Optional Error catcher id of the error catch flow which will be executed when execution error happens in the task
     */
    errorCatcherId?: string | null;
    /**
     * Optional. External task type of the task
     */
    externalTaskType?: string | null;
    /**
     * Optional. The set of tasks that are next in line to be executed as per the execution graph defined for the parent event, specified by `event_config_id`. Each of these next tasks are executed only if the condition associated with them evaluates to true.
     */
    nextTasks?: Schema$GoogleCloudIntegrationsV2DuetNextTask[];
    /**
     * Optional. The customized parameters the user can pass to this task.
     */
    parameters?: {
      [key: string]: Schema$GoogleCloudIntegrationsV2DuetEventParameter;
    } | null;
    /**
     * Optional. The name for the task.
     */
    task?: string | null;
    /**
     * Required. The identifier of this task within its parent event config, specified by the client. This should be unique among all the tasks belong to the same event config. We use this field as the identifier to find next tasks (via field `next_tasks.task_id`).
     */
    taskId?: string | null;
  }
  /**
   * Message for task response status.
   */
  export interface Schema$GoogleCloudIntegrationsV2DuetTaskResponseStatus {
    /**
     * The error message of the task response in case of failure.
     */
    errorMessage?: string | null;
    /**
     * The http code of the task response.
     */
    httpCode?: number | null;
    /**
     * The task type.
     */
    taskType?: string | null;
  }
  /**
   * Configuration detail of a trigger.
   */
  export interface Schema$GoogleCloudIntegrationsV2DuetTriggerConfig {
    /**
     * Optional. Cloud Scheduler Trigger related metadata
     */
    cloudSchedulerConfig?: Schema$GoogleCloudIntegrationsV2DuetCloudSchedulerConfig;
    /**
     * Optional. User-provided description intended to give additional business context about the task.
     */
    description?: string | null;
    /**
     * Optional. Optional Error catcher id of the error catch flow which will be executed when execution error happens in the task
     */
    errorCatcherId?: string | null;
    /**
     * Optional. List of input variables for the api trigger.
     */
    inputVariables?: Schema$GoogleCloudIntegrationsV2DuetTriggerConfigVariables;
    /**
     * Optional. The user created label for a particular trigger.
     */
    label?: string | null;
    /**
     * Optional. List of output variables for the api trigger.
     */
    outputVariables?: Schema$GoogleCloudIntegrationsV2DuetTriggerConfigVariables;
    /**
     * Optional. Configurable properties of the trigger, not to be confused with integration parameters. E.g. "name" is a property for API triggers and "subscription" is a property for Pub/sub triggers.
     */
    properties?: {[key: string]: string} | null;
    /**
     * Optional. Set of tasks numbers from where the integration execution is started by this trigger. If this is empty, then integration is executed with default start tasks. In the list of start tasks, none of two tasks can have direct ancestor-descendant relationships (i.e. in a same integration execution graph).
     */
    startTasks?: Schema$GoogleCloudIntegrationsV2DuetNextTask[];
    /**
     * Optional. Name of the trigger. Example: "API Trigger", "Cloud Pub Sub Trigger" When set will be sent out to monitoring dashabord for tracking purpose.
     */
    trigger?: string | null;
    /**
     * Optional. The backend trigger ID.
     */
    triggerId?: string | null;
    /**
     * Required. A number to uniquely identify each trigger config within the integration on UI.
     */
    triggerNumber?: string | null;
    /**
     * Optional. Type of trigger
     */
    triggerType?: string | null;
  }
  /**
   * Variables names mapped to api trigger.
   */
  export interface Schema$GoogleCloudIntegrationsV2DuetTriggerConfigVariables {
    /**
     * Optional. List of variable names.
     */
    names?: string[] | null;
  }
  /**
   * Response for troubleshooting an integration execution.
   */
  export interface Schema$GoogleCloudIntegrationsV2DuetTroubleshootExecutionResponse {
    /**
     * Detailed explanation of the root cause of the integration execution failure.
     */
    detailedExplanation?: string | null;
    /**
     * Display message to be shown to the user. Example - If integration execution succeeded, this field value can be "Integration execution succeeded. No troubleshooting needed.".
     */
    displayMessage?: string | null;
    /**
     * Error message of the integration execution, if the execution failed.
     */
    errorMessage?: string | null;
    /**
     * The execution id of the integration execution to be troubleshooted.
     */
    executionId?: string | null;
    /**
     * Root cause of the integration execution failure.
     */
    rootCause?: string | null;
  }
  /**
   * The type of the parameter.
   */
  export interface Schema$GoogleCloudIntegrationsV2DuetValueType {
    /**
     * Boolean Array.
     */
    booleanArray?: Schema$GoogleCloudIntegrationsV2DuetBooleanParameterArray;
    /**
     * Boolean.
     */
    booleanValue?: boolean | null;
    /**
     * Double Number Array.
     */
    doubleArray?: Schema$GoogleCloudIntegrationsV2DuetDoubleParameterArray;
    /**
     * Double Number.
     */
    doubleValue?: number | null;
    /**
     * Integer Array.
     */
    intArray?: Schema$GoogleCloudIntegrationsV2DuetIntParameterArray;
    /**
     * Integer.
     */
    intValue?: string | null;
    /**
     * Json.
     */
    jsonValue?: string | null;
    /**
     * String Array.
     */
    stringArray?: Schema$GoogleCloudIntegrationsV2DuetStringParameterArray;
    /**
     * String.
     */
    stringValue?: string | null;
  }
  /**
   * The Execution contains detailed information of an individual integration execution.
   */
  export interface Schema$GoogleCloudIntegrationsV2Execution {
    /**
     * Cloud Logging details for the integration version
     */
    cloudLoggingDetails?: Schema$GoogleCloudIntegrationsV2CloudLoggingDetails;
    /**
     * Indicates if the task execution contains variables.
     */
    containTaskVariables?: boolean | null;
    /**
     * Output only. Time the execution is created.
     */
    createTime?: string | null;
    /**
     * Start and end time of each execution attempt.
     */
    executionAttemptStats?: Schema$GoogleCloudIntegrationsV2AttemptStats[];
    /**
     * Indicates which snapshot of integration is used for this execution.
     */
    integrationVersionNumber?: string | null;
    /**
     * Optional. User-defined label that annotates the executed integration version.
     */
    integrationVersionUserLabel?: string | null;
    /**
     * Identifier. Execution resource name.
     */
    name?: string | null;
    /**
     * Output only. Replay info for the execution
     */
    replayInfo?: Schema$GoogleCloudIntegrationsV2ExecutionReplayInfo;
    /**
     * Optional. Variables provided in the request.
     */
    requestVariables?: {[key: string]: any} | null;
    /**
     * Optional. Variables returned as part of the response.
     */
    responseVariables?: {[key: string]: any} | null;
    /**
     * Output only. Status of the execution.
     */
    state?: string | null;
    /**
     * Optional. List of task executions.
     */
    taskExecutions?: Schema$GoogleCloudIntegrationsV2TaskExecution[];
    /**
     * The ID of the trigger invoked at the start of the execution.
     */
    triggerId?: string | null;
    /**
     * Output only. Time the execution is recently updated.
     */
    updateTime?: string | null;
  }
  /**
   * Contains the details of the execution info: this includes the replay reason and replay tree connecting executions in a parent-child relationship
   */
  export interface Schema$GoogleCloudIntegrationsV2ExecutionReplayInfo {
    /**
     * If this execution is a replay of another execution, then this field contains the original execution id.
     */
    originalExecutionId?: string | null;
    /**
     * If this execution has been replayed, then this field contains the execution ids of the replayed executions.
     */
    replayedExecutionIds?: string[] | null;
    /**
     * Replay mode for the execution
     */
    replayMode?: string | null;
    /**
     * reason for replay
     */
    replayReason?: string | null;
  }
  /**
   * Response for listing the Integration executions.
   */
  export interface Schema$GoogleCloudIntegrationsV2ListExecutionsResponse {
    /**
     * Required. The list of executions.
     */
    executions?: Schema$GoogleCloudIntegrationsV2Execution[];
    /**
     * The token for retrieving the next page of results.
     */
    nextPageToken?: string | null;
  }
  /**
   * Execution of a single task within an integration
   */
  export interface Schema$GoogleCloudIntegrationsV2TaskExecution {
    /**
     * Identifier. Task execution resource name.
     */
    name?: string | null;
    /**
     * Details of the task execution.
     */
    taskExecutionDetails?: Schema$GoogleCloudIntegrationsV2TaskExecutionDetails[];
    /**
     * Optional. Metadata of the task execution.
     */
    taskExecutionMetadata?: Schema$GoogleCloudIntegrationsV2TaskExecutionTaskExecutionMetadata;
    /**
     * Optional. Variables used during the execution.
     */
    variables?: {[key: string]: any} | null;
  }
  /**
   * Details of the task execution.
   */
  export interface Schema$GoogleCloudIntegrationsV2TaskExecutionDetails {
    /**
     * List for the current task execution attempts.
     */
    taskAttemptStats?: Schema$GoogleCloudIntegrationsV2AttemptStats[];
    /**
     * Output only. The execution state of this task.
     */
    taskExecutionState?: string | null;
    /**
     * Pointer to the task config it used for execution.
     */
    taskNumber?: string | null;
  }
  /**
   * Metadata of the task execution.
   */
  export interface Schema$GoogleCloudIntegrationsV2TaskExecutionTaskExecutionMetadata {
    /**
     * Optional. Ancestor iteration number for the task (it will only be non-empty if the task is under 'private integration').
     */
    ancestorIterationNumbers?: string[] | null;
    /**
     * Optional. Ancestor task number for the task (it will only be non-empty if the task is under 'private integration').
     */
    ancestorTaskNumbers?: string[] | null;
    /**
     * The execution attempt number this execution belongs to.
     */
    executionAttempt?: number | null;
    /**
     * Optional. The direct integration which the execution belongs to.
     */
    privateIntegrationName?: string | null;
    /**
     * The task name associated with this execution.
     */
    task?: string | null;
    /**
     * The task attempt number this execution belongs to.
     */
    taskAttempt?: number | null;
    /**
     * The task label associated with this execution.
     */
    taskLabel?: string | null;
    /**
     * The task number associated with this execution.
     */
    taskNumber?: string | null;
  }
  /**
   * LINT.IfChange Use this request to post all workflows associated with a given trigger id. Next available id: 14
   */
  export interface Schema$GoogleInternalCloudCrmEventbusV3PostToQueueWithTriggerIdRequest {
    /**
     * Optional. If the client id is provided, then the combination of trigger id and client id is matched across all the workflows. If the client id is not provided, then workflows with matching trigger id are executed for each client id in the {@link TriggerConfig\}. For Api Trigger, the client id is required and will be validated against the allowed clients.
     */
    clientId?: string | null;
    /**
     * Optional. Flag to determine whether clients would suppress a warning when no ACTIVE workflows are not found. If this flag is set to be true, an error will not be thrown if the requested trigger_id or client_id is not found in any ACTIVE workflow. Otherwise, the error is always thrown. The flag is set to be false by default.
     */
    ignoreErrorIfNoActiveWorkflow?: boolean | null;
    /**
     * Passed in as parameters to each workflow execution. Optional.
     */
    parameters?: Schema$EnterpriseCrmEventbusProtoEventParameters;
    /**
     * The request priority this request should be processed at. For internal users:
     */
    priority?: string | null;
    /**
     * Optional. This is a field to see the quota retry count for integration execution
     */
    quotaRetryCount?: number | null;
    /**
     * Optional. This is used to de-dup incoming request: if the duplicate request was detected, the response from the previous execution is returned. Must have no more than 36 characters and contain only alphanumeric characters and hyphens.
     */
    requestId?: string | null;
    /**
     * This field is only required when using Admin Access. The resource name of target, or the parent resource name. For example: "projects/x/locations/x/integrations/x"
     */
    resourceName?: string | null;
    /**
     * Optional. Time in milliseconds since epoch when the given event would be scheduled.
     */
    scheduledTime?: string | null;
    /**
     * Optional. Sets test mode in {@link enterprise/crm/eventbus/event_message.proto\}.
     */
    testMode?: boolean | null;
    /**
     * Matched against all {@link TriggerConfig\}s across all workflows. i.e. TriggerConfig.trigger_id.equals(trigger_id) Required.
     */
    triggerId?: string | null;
    /**
     * This is a unique id provided by the method caller. If provided this will be used as the execution_id when a new execution info is created. This is a string representation of a UUID. Must have no more than 36 characters and contain only alphanumeric characters and hyphens.
     */
    userGeneratedExecutionId?: string | null;
    /**
     * Optional. Pins the enqueue to this exact version rather than the ACTIVE one on the trigger, so an unpublished draft can be tested. Requires client_id, and the version is validated before it is enqueued; see integrationplatform/api/executionsservice/README.md.
     */
    workflowId?: string | null;
    /**
     * Optional. If provided, the workflow_name is used to filter all the matched workflows having same trigger_id+client_id. A combination of trigger_id, client_id and workflow_name identifies a unique workflow.
     */
    workflowName?: string | null;
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
    integrations: Resource$Projects$Locations$Integrations;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.integrations = new Resource$Projects$Locations$Integrations(
        this.context
      );
    }

    /**
     * Generates an integration skeleton based on a natural language prompt.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/integrations.googleapis.com
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
     * const integrations = google.integrations('v2');
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
     *   const res = await integrations.projects.locations.generateIntegration({
     *     // Required. The location in which the integration will be generated. Format: `projects/{project\}/locations/{location\}`
     *     parent: 'projects/my-project/locations/my-location',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "copilotEnabled": false,
     *       //   "prompt": "my_prompt"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "skeletonIntegrations": []
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
    generateIntegration(
      params: Params$Resource$Projects$Locations$Generateintegration,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    generateIntegration(
      params?: Params$Resource$Projects$Locations$Generateintegration,
      options?: MethodOptions
    ): Promise<
      GaxiosResponseWithHTTP2<Schema$GoogleCloudIntegrationsV2DuetGenerateIntegrationResponse>
    >;
    generateIntegration(
      params: Params$Resource$Projects$Locations$Generateintegration,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    generateIntegration(
      params: Params$Resource$Projects$Locations$Generateintegration,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleCloudIntegrationsV2DuetGenerateIntegrationResponse>,
      callback: BodyResponseCallback<Schema$GoogleCloudIntegrationsV2DuetGenerateIntegrationResponse>
    ): void;
    generateIntegration(
      params: Params$Resource$Projects$Locations$Generateintegration,
      callback: BodyResponseCallback<Schema$GoogleCloudIntegrationsV2DuetGenerateIntegrationResponse>
    ): void;
    generateIntegration(
      callback: BodyResponseCallback<Schema$GoogleCloudIntegrationsV2DuetGenerateIntegrationResponse>
    ): void;
    generateIntegration(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Generateintegration
        | BodyResponseCallback<Schema$GoogleCloudIntegrationsV2DuetGenerateIntegrationResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleCloudIntegrationsV2DuetGenerateIntegrationResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleCloudIntegrationsV2DuetGenerateIntegrationResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<
          GaxiosResponseWithHTTP2<Schema$GoogleCloudIntegrationsV2DuetGenerateIntegrationResponse>
        >
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Generateintegration;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Generateintegration;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://integrations.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v2/{+parent}:generateIntegration').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
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
        createAPIRequest<Schema$GoogleCloudIntegrationsV2DuetGenerateIntegrationResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleCloudIntegrationsV2DuetGenerateIntegrationResponse>(
          parameters
        );
      }
    }
  }

  export interface Params$Resource$Projects$Locations$Generateintegration extends StandardParameters {
    /**
     * Required. The location in which the integration will be generated. Format: `projects/{project\}/locations/{location\}`
     */
    parent?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleCloudIntegrationsV2DuetGenerateIntegrationRequest;
  }

  export class Resource$Projects$Locations$Integrations {
    context: APIRequestContext;
    executions: Resource$Projects$Locations$Integrations$Executions;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.executions = new Resource$Projects$Locations$Integrations$Executions(
        this.context
      );
    }

    /**
     * Executes integrations synchronously. The response is not returned until the requested execution is either fulfilled or experienced an error. Only one integration can be executed. Request format URL: https://integrations.googleapis.com/v2/projects/$PROJECT/locations/$LOCATION/integrations/$INTEGRATION_NAME:execute Request payload: (the entire payload is optional unless input variables need to be set.) {"variable1": "hello world", "variable2": 1, "variable3": {"my_json_key": "my json string value" \}
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/integrations.googleapis.com
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
     * const integrations = google.integrations('v2');
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
     *   const res = await integrations.projects.locations.integrations.execute({
     *     // Required. The integration resource name.
     *     parent:
     *       'projects/my-project/locations/my-location/integrations/my-integration',
     *     // Optional. This is used to de-dup incoming request: if the duplicate request was detected, the response from the previous execution is returned.
     *     requestId: 'placeholder-value',
     *     // Required. The API trigger id associated with the integration. An integration can have multiple trigger_id. This field is required to disambiguate which trigger should be invoked.
     *     triggerId: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       //
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "contentType": "my_contentType",
     *   //   "data": "my_data",
     *   //   "extensions": []
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
    execute(
      params: Params$Resource$Projects$Locations$Integrations$Execute,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    execute(
      params?: Params$Resource$Projects$Locations$Integrations$Execute,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$GoogleApiHttpBody>>;
    execute(
      params: Params$Resource$Projects$Locations$Integrations$Execute,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    execute(
      params: Params$Resource$Projects$Locations$Integrations$Execute,
      options: MethodOptions | BodyResponseCallback<Schema$GoogleApiHttpBody>,
      callback: BodyResponseCallback<Schema$GoogleApiHttpBody>
    ): void;
    execute(
      params: Params$Resource$Projects$Locations$Integrations$Execute,
      callback: BodyResponseCallback<Schema$GoogleApiHttpBody>
    ): void;
    execute(callback: BodyResponseCallback<Schema$GoogleApiHttpBody>): void;
    execute(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Integrations$Execute
        | BodyResponseCallback<Schema$GoogleApiHttpBody>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleApiHttpBody>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleApiHttpBody>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$GoogleApiHttpBody>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Integrations$Execute;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Integrations$Execute;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://integrations.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v2/{+parent}:execute').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
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
        createAPIRequest<Schema$GoogleApiHttpBody>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleApiHttpBody>(parameters);
      }
    }

    /**
     * Generates an integration branch.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/integrations.googleapis.com
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
     * const integrations = google.integrations('v2');
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
     *     await integrations.projects.locations.integrations.generateIntegrationBranch(
     *       {
     *         // Required. Format: `projects/{project\}/locations/{location\}/integrations/{integration\}`
     *         parent:
     *           'projects/my-project/locations/my-location/integrations/my-integration',
     *
     *         // Request body metadata
     *         requestBody: {
     *           // request body parameters
     *           // {
     *           //   "integrationBranchRequest": {},
     *           //   "prompt": "my_prompt"
     *           // }
     *         },
     *       },
     *     );
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "integrationBranch": {}
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
    generateIntegrationBranch(
      params: Params$Resource$Projects$Locations$Integrations$Generateintegrationbranch,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    generateIntegrationBranch(
      params?: Params$Resource$Projects$Locations$Integrations$Generateintegrationbranch,
      options?: MethodOptions
    ): Promise<
      GaxiosResponseWithHTTP2<Schema$GoogleCloudIntegrationsV2DuetGenerateIntegrationBranchResponse>
    >;
    generateIntegrationBranch(
      params: Params$Resource$Projects$Locations$Integrations$Generateintegrationbranch,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    generateIntegrationBranch(
      params: Params$Resource$Projects$Locations$Integrations$Generateintegrationbranch,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleCloudIntegrationsV2DuetGenerateIntegrationBranchResponse>,
      callback: BodyResponseCallback<Schema$GoogleCloudIntegrationsV2DuetGenerateIntegrationBranchResponse>
    ): void;
    generateIntegrationBranch(
      params: Params$Resource$Projects$Locations$Integrations$Generateintegrationbranch,
      callback: BodyResponseCallback<Schema$GoogleCloudIntegrationsV2DuetGenerateIntegrationBranchResponse>
    ): void;
    generateIntegrationBranch(
      callback: BodyResponseCallback<Schema$GoogleCloudIntegrationsV2DuetGenerateIntegrationBranchResponse>
    ): void;
    generateIntegrationBranch(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Integrations$Generateintegrationbranch
        | BodyResponseCallback<Schema$GoogleCloudIntegrationsV2DuetGenerateIntegrationBranchResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleCloudIntegrationsV2DuetGenerateIntegrationBranchResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleCloudIntegrationsV2DuetGenerateIntegrationBranchResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<
          GaxiosResponseWithHTTP2<Schema$GoogleCloudIntegrationsV2DuetGenerateIntegrationBranchResponse>
        >
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Integrations$Generateintegrationbranch;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Integrations$Generateintegrationbranch;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://integrations.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v2/{+parent}:generateIntegrationBranch').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
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
        createAPIRequest<Schema$GoogleCloudIntegrationsV2DuetGenerateIntegrationBranchResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleCloudIntegrationsV2DuetGenerateIntegrationBranchResponse>(
          parameters
        );
      }
    }

    /**
     * Generates documentation for an integration version.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/integrations.googleapis.com
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
     * const integrations = google.integrations('v2');
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
     *     await integrations.projects.locations.integrations.generateIntegrationDocument(
     *       {
     *         // Required. Format: `projects/{project\}/locations/{location\}/integrations/{integration\}`
     *         parent:
     *           'projects/my-project/locations/my-location/integrations/my-integration',
     *
     *         // Request body metadata
     *         requestBody: {
     *           // request body parameters
     *           // {
     *           //   "integrationDocumentRequest": {}
     *           // }
     *         },
     *       },
     *     );
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "document": "my_document"
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
    generateIntegrationDocument(
      params: Params$Resource$Projects$Locations$Integrations$Generateintegrationdocument,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    generateIntegrationDocument(
      params?: Params$Resource$Projects$Locations$Integrations$Generateintegrationdocument,
      options?: MethodOptions
    ): Promise<
      GaxiosResponseWithHTTP2<Schema$GoogleCloudIntegrationsV2DuetGenerateIntegrationDocumentResponse>
    >;
    generateIntegrationDocument(
      params: Params$Resource$Projects$Locations$Integrations$Generateintegrationdocument,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    generateIntegrationDocument(
      params: Params$Resource$Projects$Locations$Integrations$Generateintegrationdocument,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleCloudIntegrationsV2DuetGenerateIntegrationDocumentResponse>,
      callback: BodyResponseCallback<Schema$GoogleCloudIntegrationsV2DuetGenerateIntegrationDocumentResponse>
    ): void;
    generateIntegrationDocument(
      params: Params$Resource$Projects$Locations$Integrations$Generateintegrationdocument,
      callback: BodyResponseCallback<Schema$GoogleCloudIntegrationsV2DuetGenerateIntegrationDocumentResponse>
    ): void;
    generateIntegrationDocument(
      callback: BodyResponseCallback<Schema$GoogleCloudIntegrationsV2DuetGenerateIntegrationDocumentResponse>
    ): void;
    generateIntegrationDocument(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Integrations$Generateintegrationdocument
        | BodyResponseCallback<Schema$GoogleCloudIntegrationsV2DuetGenerateIntegrationDocumentResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleCloudIntegrationsV2DuetGenerateIntegrationDocumentResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleCloudIntegrationsV2DuetGenerateIntegrationDocumentResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<
          GaxiosResponseWithHTTP2<Schema$GoogleCloudIntegrationsV2DuetGenerateIntegrationDocumentResponse>
        >
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Integrations$Generateintegrationdocument;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Integrations$Generateintegrationdocument;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://integrations.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl + '/v2/{+parent}:generateIntegrationDocument'
            ).replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$GoogleCloudIntegrationsV2DuetGenerateIntegrationDocumentResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleCloudIntegrationsV2DuetGenerateIntegrationDocumentResponse>(
          parameters
        );
      }
    }

    /**
     * Generates Javascript code for data mapping.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/integrations.googleapis.com
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
     * const integrations = google.integrations('v2');
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
     *     await integrations.projects.locations.integrations.generateJavascript({
     *       // Required. Format: `projects/{project\}/locations/{location\}/integrations/{integration\}`
     *       parent:
     *         'projects/my-project/locations/my-location/integrations/my-integration',
     *
     *       // Request body metadata
     *       requestBody: {
     *         // request body parameters
     *         // {
     *         //   "javascriptRequest": {},
     *         //   "prompt": "my_prompt"
     *         // }
     *       },
     *     });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "recommendations": []
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
    generateJavascript(
      params: Params$Resource$Projects$Locations$Integrations$Generatejavascript,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    generateJavascript(
      params?: Params$Resource$Projects$Locations$Integrations$Generatejavascript,
      options?: MethodOptions
    ): Promise<
      GaxiosResponseWithHTTP2<Schema$GoogleCloudIntegrationsV2DuetGenerateJavascriptResponse>
    >;
    generateJavascript(
      params: Params$Resource$Projects$Locations$Integrations$Generatejavascript,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    generateJavascript(
      params: Params$Resource$Projects$Locations$Integrations$Generatejavascript,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleCloudIntegrationsV2DuetGenerateJavascriptResponse>,
      callback: BodyResponseCallback<Schema$GoogleCloudIntegrationsV2DuetGenerateJavascriptResponse>
    ): void;
    generateJavascript(
      params: Params$Resource$Projects$Locations$Integrations$Generatejavascript,
      callback: BodyResponseCallback<Schema$GoogleCloudIntegrationsV2DuetGenerateJavascriptResponse>
    ): void;
    generateJavascript(
      callback: BodyResponseCallback<Schema$GoogleCloudIntegrationsV2DuetGenerateJavascriptResponse>
    ): void;
    generateJavascript(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Integrations$Generatejavascript
        | BodyResponseCallback<Schema$GoogleCloudIntegrationsV2DuetGenerateJavascriptResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleCloudIntegrationsV2DuetGenerateJavascriptResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleCloudIntegrationsV2DuetGenerateJavascriptResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<
          GaxiosResponseWithHTTP2<Schema$GoogleCloudIntegrationsV2DuetGenerateJavascriptResponse>
        >
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Integrations$Generatejavascript;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Integrations$Generatejavascript;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://integrations.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v2/{+parent}:generateJavascript').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
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
        createAPIRequest<Schema$GoogleCloudIntegrationsV2DuetGenerateJavascriptResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleCloudIntegrationsV2DuetGenerateJavascriptResponse>(
          parameters
        );
      }
    }

    /**
     * Recommends tasks to replace a selected task.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/integrations.googleapis.com
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
     * const integrations = google.integrations('v2');
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
     *   const res = await integrations.projects.locations.integrations.recommendTasks(
     *     {
     *       // Required. Format: `projects/{project\}/locations/{location\}/integrations/{integration\}`
     *       parent:
     *         'projects/my-project/locations/my-location/integrations/my-integration',
     *
     *       // Request body metadata
     *       requestBody: {
     *         // request body parameters
     *         // {
     *         //   "prompt": "my_prompt",
     *         //   "replaceTaskRequest": {}
     *         // }
     *       },
     *     },
     *   );
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "taskConfigs": [],
     *   //   "taskResponseStatuses": []
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
    recommendTasks(
      params: Params$Resource$Projects$Locations$Integrations$Recommendtasks,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    recommendTasks(
      params?: Params$Resource$Projects$Locations$Integrations$Recommendtasks,
      options?: MethodOptions
    ): Promise<
      GaxiosResponseWithHTTP2<Schema$GoogleCloudIntegrationsV2DuetRecommendTasksResponse>
    >;
    recommendTasks(
      params: Params$Resource$Projects$Locations$Integrations$Recommendtasks,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    recommendTasks(
      params: Params$Resource$Projects$Locations$Integrations$Recommendtasks,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleCloudIntegrationsV2DuetRecommendTasksResponse>,
      callback: BodyResponseCallback<Schema$GoogleCloudIntegrationsV2DuetRecommendTasksResponse>
    ): void;
    recommendTasks(
      params: Params$Resource$Projects$Locations$Integrations$Recommendtasks,
      callback: BodyResponseCallback<Schema$GoogleCloudIntegrationsV2DuetRecommendTasksResponse>
    ): void;
    recommendTasks(
      callback: BodyResponseCallback<Schema$GoogleCloudIntegrationsV2DuetRecommendTasksResponse>
    ): void;
    recommendTasks(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Integrations$Recommendtasks
        | BodyResponseCallback<Schema$GoogleCloudIntegrationsV2DuetRecommendTasksResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleCloudIntegrationsV2DuetRecommendTasksResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleCloudIntegrationsV2DuetRecommendTasksResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<
          GaxiosResponseWithHTTP2<Schema$GoogleCloudIntegrationsV2DuetRecommendTasksResponse>
        >
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Integrations$Recommendtasks;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Integrations$Recommendtasks;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://integrations.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v2/{+parent}:recommendTasks').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
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
        createAPIRequest<Schema$GoogleCloudIntegrationsV2DuetRecommendTasksResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleCloudIntegrationsV2DuetRecommendTasksResponse>(
          parameters
        );
      }
    }

    /**
     * Schedules an integration for execution.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/integrations.googleapis.com
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
     * const integrations = google.integrations('v2');
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
     *   const res = await integrations.projects.locations.integrations.schedule({
     *     // Required. The integration resource name.
     *     parent:
     *       'projects/my-project/locations/my-location/integrations/my-integration',
     *     // Optional. This is used to de-dup incoming request: if the duplicate request was detected, the response from the previous execution is returned.
     *     requestId: 'placeholder-value',
     *     // Optional. The time that the integration should be executed. If the time is less or equal to the current time, the integration is executed immediately.
     *     scheduleTime: 'placeholder-value',
     *     // Required. The API trigger id associated with the integration. An integration can have multiple trigger_id. This field is required to disambiguate which trigger should be invoked
     *     triggerId: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       //
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "contentType": "my_contentType",
     *   //   "data": "my_data",
     *   //   "extensions": []
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
    schedule(
      params: Params$Resource$Projects$Locations$Integrations$Schedule,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    schedule(
      params?: Params$Resource$Projects$Locations$Integrations$Schedule,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$GoogleApiHttpBody>>;
    schedule(
      params: Params$Resource$Projects$Locations$Integrations$Schedule,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    schedule(
      params: Params$Resource$Projects$Locations$Integrations$Schedule,
      options: MethodOptions | BodyResponseCallback<Schema$GoogleApiHttpBody>,
      callback: BodyResponseCallback<Schema$GoogleApiHttpBody>
    ): void;
    schedule(
      params: Params$Resource$Projects$Locations$Integrations$Schedule,
      callback: BodyResponseCallback<Schema$GoogleApiHttpBody>
    ): void;
    schedule(callback: BodyResponseCallback<Schema$GoogleApiHttpBody>): void;
    schedule(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Integrations$Schedule
        | BodyResponseCallback<Schema$GoogleApiHttpBody>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleApiHttpBody>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleApiHttpBody>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$GoogleApiHttpBody>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Integrations$Schedule;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Integrations$Schedule;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://integrations.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v2/{+parent}:schedule').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
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
        createAPIRequest<Schema$GoogleApiHttpBody>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleApiHttpBody>(parameters);
      }
    }
  }

  export interface Params$Resource$Projects$Locations$Integrations$Execute extends StandardParameters {
    /**
     * Required. The integration resource name.
     */
    parent?: string;
    /**
     * Optional. This is used to de-dup incoming request: if the duplicate request was detected, the response from the previous execution is returned.
     */
    requestId?: string;
    /**
     * Required. The API trigger id associated with the integration. An integration can have multiple trigger_id. This field is required to disambiguate which trigger should be invoked.
     */
    triggerId?: string;

    /**
     * Request body metadata
     */
    requestBody?: {[key: string]: any};
  }
  export interface Params$Resource$Projects$Locations$Integrations$Generateintegrationbranch extends StandardParameters {
    /**
     * Required. Format: `projects/{project\}/locations/{location\}/integrations/{integration\}`
     */
    parent?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleCloudIntegrationsV2DuetGenerateIntegrationBranchRequest;
  }
  export interface Params$Resource$Projects$Locations$Integrations$Generateintegrationdocument extends StandardParameters {
    /**
     * Required. Format: `projects/{project\}/locations/{location\}/integrations/{integration\}`
     */
    parent?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleCloudIntegrationsV2DuetGenerateIntegrationDocumentRequest;
  }
  export interface Params$Resource$Projects$Locations$Integrations$Generatejavascript extends StandardParameters {
    /**
     * Required. Format: `projects/{project\}/locations/{location\}/integrations/{integration\}`
     */
    parent?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleCloudIntegrationsV2DuetGenerateJavascriptRequest;
  }
  export interface Params$Resource$Projects$Locations$Integrations$Recommendtasks extends StandardParameters {
    /**
     * Required. Format: `projects/{project\}/locations/{location\}/integrations/{integration\}`
     */
    parent?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleCloudIntegrationsV2DuetRecommendTasksRequest;
  }
  export interface Params$Resource$Projects$Locations$Integrations$Schedule extends StandardParameters {
    /**
     * Required. The integration resource name.
     */
    parent?: string;
    /**
     * Optional. This is used to de-dup incoming request: if the duplicate request was detected, the response from the previous execution is returned.
     */
    requestId?: string;
    /**
     * Optional. The time that the integration should be executed. If the time is less or equal to the current time, the integration is executed immediately.
     */
    scheduleTime?: string;
    /**
     * Required. The API trigger id associated with the integration. An integration can have multiple trigger_id. This field is required to disambiguate which trigger should be invoked
     */
    triggerId?: string;

    /**
     * Request body metadata
     */
    requestBody?: {[key: string]: any};
  }

  export class Resource$Projects$Locations$Integrations$Executions {
    context: APIRequestContext;
    taskExecutions: Resource$Projects$Locations$Integrations$Executions$Taskexecutions;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.taskExecutions =
        new Resource$Projects$Locations$Integrations$Executions$Taskexecutions(
          this.context
        );
    }

    /**
     * Lists the results of all the integration executions. The response includes the same information as the [execution log](https://cloud.google.com/application-integration/docs/viewing-logs) in the Integration UI.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/integrations.googleapis.com
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
     * const integrations = google.integrations('v2');
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
     *     await integrations.projects.locations.integrations.executions.list({
     *       // Optional. Standard filter field, we support filtering on following fields: integration_name: the name of the integration. create_time: the execution created time. update_time: the execution last update time. state: the state of the executions. execution_id: the id of the execution. trigger_id: the id of the trigger. All fields support for EQUALS, in additional: create_time and update_time support for LESS_THAN, GREATER_THAN Also supports operators like AND, OR, NOT For example: trigger_id=\"id1\" AND integration_name=\"testIntegration\"
     *       filter: 'placeholder-value',
     *       // Optional. The size of entries in the response.
     *       pageSize: 'placeholder-value',
     *       // Optional. The token returned in the previous response.
     *       pageToken: 'placeholder-value',
     *       // Required. parent resource name of integration execution.
     *       parent:
     *         'projects/my-project/locations/my-location/integrations/my-integration',
     *       // Optional. View mask for the response data. If set, only the field specified will be returned as part of the result. If not set, all fields in execution info will be filled and returned.
     *       readMask: 'placeholder-value',
     *     });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "executions": [],
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
      params: Params$Resource$Projects$Locations$Integrations$Executions$List,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    list(
      params?: Params$Resource$Projects$Locations$Integrations$Executions$List,
      options?: MethodOptions
    ): Promise<
      GaxiosResponseWithHTTP2<Schema$GoogleCloudIntegrationsV2ListExecutionsResponse>
    >;
    list(
      params: Params$Resource$Projects$Locations$Integrations$Executions$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Integrations$Executions$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleCloudIntegrationsV2ListExecutionsResponse>,
      callback: BodyResponseCallback<Schema$GoogleCloudIntegrationsV2ListExecutionsResponse>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Integrations$Executions$List,
      callback: BodyResponseCallback<Schema$GoogleCloudIntegrationsV2ListExecutionsResponse>
    ): void;
    list(
      callback: BodyResponseCallback<Schema$GoogleCloudIntegrationsV2ListExecutionsResponse>
    ): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Integrations$Executions$List
        | BodyResponseCallback<Schema$GoogleCloudIntegrationsV2ListExecutionsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleCloudIntegrationsV2ListExecutionsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleCloudIntegrationsV2ListExecutionsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<
          GaxiosResponseWithHTTP2<Schema$GoogleCloudIntegrationsV2ListExecutionsResponse>
        >
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Integrations$Executions$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Integrations$Executions$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://integrations.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v2/{+parent}/executions').replace(
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
        createAPIRequest<Schema$GoogleCloudIntegrationsV2ListExecutionsResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleCloudIntegrationsV2ListExecutionsResponse>(
          parameters
        );
      }
    }

    /**
     * View detailed explanation of why an integration execution failed, using LLM
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/integrations.googleapis.com
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
     * const integrations = google.integrations('v2');
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
     *     await integrations.projects.locations.integrations.executions.troubleshoot({
     *       // Required. Execution resource name. Format: `projects/{project\}/locations/{location\}/integrations/{integration\}/executions/{execution_id\}`
     *       name: 'projects/my-project/locations/my-location/integrations/my-integration/executions/my-execution',
     *     });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "detailedExplanation": "my_detailedExplanation",
     *   //   "displayMessage": "my_displayMessage",
     *   //   "errorMessage": "my_errorMessage",
     *   //   "executionId": "my_executionId",
     *   //   "rootCause": "my_rootCause"
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
    troubleshoot(
      params: Params$Resource$Projects$Locations$Integrations$Executions$Troubleshoot,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    troubleshoot(
      params?: Params$Resource$Projects$Locations$Integrations$Executions$Troubleshoot,
      options?: MethodOptions
    ): Promise<
      GaxiosResponseWithHTTP2<Schema$GoogleCloudIntegrationsV2DuetTroubleshootExecutionResponse>
    >;
    troubleshoot(
      params: Params$Resource$Projects$Locations$Integrations$Executions$Troubleshoot,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    troubleshoot(
      params: Params$Resource$Projects$Locations$Integrations$Executions$Troubleshoot,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleCloudIntegrationsV2DuetTroubleshootExecutionResponse>,
      callback: BodyResponseCallback<Schema$GoogleCloudIntegrationsV2DuetTroubleshootExecutionResponse>
    ): void;
    troubleshoot(
      params: Params$Resource$Projects$Locations$Integrations$Executions$Troubleshoot,
      callback: BodyResponseCallback<Schema$GoogleCloudIntegrationsV2DuetTroubleshootExecutionResponse>
    ): void;
    troubleshoot(
      callback: BodyResponseCallback<Schema$GoogleCloudIntegrationsV2DuetTroubleshootExecutionResponse>
    ): void;
    troubleshoot(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Integrations$Executions$Troubleshoot
        | BodyResponseCallback<Schema$GoogleCloudIntegrationsV2DuetTroubleshootExecutionResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleCloudIntegrationsV2DuetTroubleshootExecutionResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleCloudIntegrationsV2DuetTroubleshootExecutionResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<
          GaxiosResponseWithHTTP2<Schema$GoogleCloudIntegrationsV2DuetTroubleshootExecutionResponse>
        >
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Integrations$Executions$Troubleshoot;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Integrations$Executions$Troubleshoot;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://integrations.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v2/{+name}:troubleshoot').replace(
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
        createAPIRequest<Schema$GoogleCloudIntegrationsV2DuetTroubleshootExecutionResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleCloudIntegrationsV2DuetTroubleshootExecutionResponse>(
          parameters
        );
      }
    }
  }

  export interface Params$Resource$Projects$Locations$Integrations$Executions$List extends StandardParameters {
    /**
     * Optional. Standard filter field, we support filtering on following fields: integration_name: the name of the integration. create_time: the execution created time. update_time: the execution last update time. state: the state of the executions. execution_id: the id of the execution. trigger_id: the id of the trigger. All fields support for EQUALS, in additional: create_time and update_time support for LESS_THAN, GREATER_THAN Also supports operators like AND, OR, NOT For example: trigger_id=\"id1\" AND integration_name=\"testIntegration\"
     */
    filter?: string;
    /**
     * Optional. The size of entries in the response.
     */
    pageSize?: number;
    /**
     * Optional. The token returned in the previous response.
     */
    pageToken?: string;
    /**
     * Required. parent resource name of integration execution.
     */
    parent?: string;
    /**
     * Optional. View mask for the response data. If set, only the field specified will be returned as part of the result. If not set, all fields in execution info will be filled and returned.
     */
    readMask?: string;
  }
  export interface Params$Resource$Projects$Locations$Integrations$Executions$Troubleshoot extends StandardParameters {
    /**
     * Required. Execution resource name. Format: `projects/{project\}/locations/{location\}/integrations/{integration\}/executions/{execution_id\}`
     */
    name?: string;
  }

  export class Resource$Projects$Locations$Integrations$Executions$Taskexecutions {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Get a TaskExecution in the specified project.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/integrations.googleapis.com
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
     * const integrations = google.integrations('v2');
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
     *     await integrations.projects.locations.integrations.executions.taskExecutions.get(
     *       {
     *         // Required. The TaskExecution to retrieve. Format: projects/{project\}/locations/{location\}/integrations/{integration\}/executions/{execution\}/taskExecutions/{task_execution\}
     *         name: 'projects/my-project/locations/my-location/integrations/my-integration/executions/my-execution/taskExecutions/my-taskExecution',
     *       },
     *     );
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "name": "my_name",
     *   //   "taskExecutionDetails": [],
     *   //   "taskExecutionMetadata": {},
     *   //   "variables": {}
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
      params: Params$Resource$Projects$Locations$Integrations$Executions$Taskexecutions$Get,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    get(
      params?: Params$Resource$Projects$Locations$Integrations$Executions$Taskexecutions$Get,
      options?: MethodOptions
    ): Promise<
      GaxiosResponseWithHTTP2<Schema$GoogleCloudIntegrationsV2TaskExecution>
    >;
    get(
      params: Params$Resource$Projects$Locations$Integrations$Executions$Taskexecutions$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Integrations$Executions$Taskexecutions$Get,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleCloudIntegrationsV2TaskExecution>,
      callback: BodyResponseCallback<Schema$GoogleCloudIntegrationsV2TaskExecution>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Integrations$Executions$Taskexecutions$Get,
      callback: BodyResponseCallback<Schema$GoogleCloudIntegrationsV2TaskExecution>
    ): void;
    get(
      callback: BodyResponseCallback<Schema$GoogleCloudIntegrationsV2TaskExecution>
    ): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Integrations$Executions$Taskexecutions$Get
        | BodyResponseCallback<Schema$GoogleCloudIntegrationsV2TaskExecution>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleCloudIntegrationsV2TaskExecution>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleCloudIntegrationsV2TaskExecution>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<
          GaxiosResponseWithHTTP2<Schema$GoogleCloudIntegrationsV2TaskExecution>
        >
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Integrations$Executions$Taskexecutions$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Integrations$Executions$Taskexecutions$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://integrations.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v2/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$GoogleCloudIntegrationsV2TaskExecution>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleCloudIntegrationsV2TaskExecution>(
          parameters
        );
      }
    }
  }

  export interface Params$Resource$Projects$Locations$Integrations$Executions$Taskexecutions$Get extends StandardParameters {
    /**
     * Required. The TaskExecution to retrieve. Format: projects/{project\}/locations/{location\}/integrations/{integration\}/executions/{execution\}/taskExecutions/{task_execution\}
     */
    name?: string;
  }
}
