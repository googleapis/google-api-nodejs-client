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

export namespace workflowexecutions_v1 {
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
   * Workflow Executions API
   *
   * Execute workflows created with Workflows API.
   *
   * @example
   * ```js
   * const {google} = require('googleapis');
   * const workflowexecutions = google.workflowexecutions('v1');
   * ```
   */
  export class Workflowexecutions {
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
   * An instance of a Callback created by an execution.
   */
  export interface Schema$Callback {
    /**
     * Output only. The payloads received by the callback that have not been processed by a waiting execution step.
     */
    availablePayloads?: string[] | null;
    /**
     * Output only. The method accepted by the callback. For example: GET, POST, PUT.
     */
    method?: string | null;
    /**
     * Output only. The resource name of the callback. Format: projects/{project\}/locations/{location\}/workflows/{workflow\}/executions/{execution\}/callback/{callback\}
     */
    name?: string | null;
    /**
     * Output only. Number of execution steps waiting on this callback.
     */
    waiters?: string | null;
  }
  /**
   * Request for the CancelExecution method.
   */
  export interface Schema$CancelExecutionRequest {}
  /**
   * Request for the DeleteExecutionHistory method.
   */
  export interface Schema$DeleteExecutionHistoryRequest {}
  /**
   * A generic empty message that you can re-use to avoid defining duplicated empty messages in your APIs. A typical example is to use it as the request or the response type of an API method. For instance: service Foo { rpc Bar(google.protobuf.Empty) returns (google.protobuf.Empty); \}
   */
  export interface Schema$Empty {}
  /**
   * Error describes why the execution was abnormally terminated.
   */
  export interface Schema$Error {
    /**
     * Human-readable stack trace string.
     */
    context?: string | null;
    /**
     * Error message and data returned represented as a JSON string.
     */
    payload?: string | null;
    /**
     * Stack trace with detailed information of where error was generated.
     */
    stackTrace?: Schema$StackTrace;
  }
  /**
   * Exception describes why the step entry failed.
   */
  export interface Schema$Exception {
    /**
     * Error message represented as a JSON string.
     */
    payload?: string | null;
  }
  /**
   * A running instance of a [Workflow](/workflows/docs/reference/rest/v1/projects.locations.workflows).
   */
  export interface Schema$Execution {
    /**
     * Input parameters of the execution represented as a JSON string. The size limit is 32KB. *Note*: If you are using the REST API directly to run your workflow, you must escape any JSON string value of `argument`. Example: `'{"argument":"{\"firstName\":\"FIRST\",\"lastName\":\"LAST\"\}"\}'`
     */
    argument?: string | null;
    /**
     * The call logging level associated to this execution.
     */
    callLogLevel?: string | null;
    /**
     * Output only. Marks the creation of the execution.
     */
    createTime?: string | null;
    /**
     * Optional. If set to true, the execution will not be backlogged when the concurrency quota is exhausted. The backlog execution starts when the concurrency quota becomes available.
     */
    disableConcurrencyQuotaOverflowBuffering?: boolean | null;
    /**
     * Output only. Measures the duration of the execution.
     */
    duration?: string | null;
    /**
     * Output only. Marks the end of execution, successful or not.
     */
    endTime?: string | null;
    /**
     * Output only. The error which caused the execution to finish prematurely. The value is only present if the execution's state is `FAILED` or `CANCELLED`.
     */
    error?: Schema$Error;
    /**
     * Optional. Describes the execution history level to apply to this execution. If not specified, the execution history level is determined by its workflow's execution history level. If the levels are different, the executionHistoryLevel overrides the workflow's execution history level for this execution.
     */
    executionHistoryLevel?: string | null;
    /**
     * Labels associated with this execution. Labels can contain at most 64 entries. Keys and values can be no longer than 63 characters and can only contain lowercase letters, numeric characters, underscores, and dashes. Label keys must start with a letter. International characters are allowed. By default, labels are inherited from the workflow but are overridden by any labels associated with the execution.
     */
    labels?: {[key: string]: string} | null;
    /**
     * Output only. The resource name of the execution. Format: projects/{project\}/locations/{location\}/workflows/{workflow\}/executions/{execution\}
     */
    name?: string | null;
    /**
     * Output only. Output of the execution represented as a JSON string. The value can only be present if the execution's state is `SUCCEEDED`.
     */
    result?: string | null;
    /**
     * Output only. Marks the beginning of execution. Note that this will be the same as `createTime` for executions that start immediately.
     */
    startTime?: string | null;
    /**
     * Output only. Current state of the execution.
     */
    state?: string | null;
    /**
     * Output only. Error regarding the state of the Execution resource. For example, this field will have error details if the execution data is unavailable due to revoked KMS key permissions.
     */
    stateError?: Schema$StateError;
    /**
     * Output only. Status tracks the current steps and progress data of this execution.
     */
    status?: Schema$Status;
    /**
     * Output only. Revision of the workflow this execution is using.
     */
    workflowRevisionId?: string | null;
  }
  /**
   * Response for the ExportData method.
   */
  export interface Schema$ExportDataResponse {
    /**
     * The JSON string with customer data and metadata for an execution with the given name
     */
    data?: string | null;
  }
  /**
   * RPC response object for the ListCallbacks method.
   */
  export interface Schema$ListCallbacksResponse {
    /**
     * The callbacks which match the request.
     */
    callbacks?: Schema$Callback[];
    /**
     * A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages.
     */
    nextPageToken?: string | null;
  }
  /**
   * Response for the ListExecutions method.
   */
  export interface Schema$ListExecutionsResponse {
    /**
     * The executions which match the request.
     */
    executions?: Schema$Execution[];
    /**
     * A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages.
     */
    nextPageToken?: string | null;
  }
  /**
   * Response message for ExecutionHistory.ListStepEntries.
   */
  export interface Schema$ListStepEntriesResponse {
    /**
     * A token to retrieve next page of results. Pass this value in the ListStepEntriesRequest.page_token field in the subsequent call to `ListStepEntries` method to retrieve the next page of results.
     */
    nextPageToken?: string | null;
    /**
     * The list of entries.
     */
    stepEntries?: Schema$StepEntry[];
    /**
     * Indicates the total number of StepEntries that matched the request filter. For running executions, this number shows the number of StepEntries that are executed thus far.
     */
    totalSize?: number | null;
  }
  /**
   * NavigationInfo describes what steps if any come before or after this step, or what steps are parents or children of this step.
   */
  export interface Schema$NavigationInfo {
    /**
     * Step entries that can be reached by "stepping into" e.g. a subworkflow call.
     */
    children?: string[] | null;
    /**
     * The index of the next step in the current workflow, if any.
     */
    next?: string | null;
    /**
     * The step entry, if any, that can be reached by "stepping out" of the current workflow being executed.
     */
    parent?: string | null;
    /**
     * The index of the previous step in the current workflow, if any.
     */
    previous?: string | null;
  }
  /**
   * Position contains source position information about the stack trace element such as line number, column number and length of the code block in bytes.
   */
  export interface Schema$Position {
    /**
     * The source code column position (of the line) the current instruction was generated from.
     */
    column?: string | null;
    /**
     * The number of bytes of source code making up this stack trace element.
     */
    length?: string | null;
    /**
     * The source code line number the current instruction was generated from.
     */
    line?: string | null;
  }
  /**
   * A message that is published by publishers and consumed by subscribers. The message must contain either a non-empty data field or at least one attribute. Note that client libraries represent this object differently depending on the language. See the corresponding [client library documentation](https://cloud.google.com/pubsub/docs/reference/libraries) for more information. See [quotas and limits] (https://cloud.google.com/pubsub/quotas) for more information about message limits.
   */
  export interface Schema$PubsubMessage {
    /**
     * Optional. Attributes for this message. If this field is empty, the message must contain non-empty data. This can be used to filter messages on the subscription.
     */
    attributes?: {[key: string]: string} | null;
    /**
     * Optional. The message data field. If this field is empty, the message must contain at least one attribute.
     */
    data?: string | null;
    /**
     * ID of this message, assigned by the server when the message is published. Guaranteed to be unique within the topic. This value may be read by a subscriber that receives a `PubsubMessage` via a `Pull` call or a push delivery. It must not be populated by the publisher in a `Publish` call.
     */
    messageId?: string | null;
    /**
     * Optional. If non-empty, identifies related messages for which publish order should be respected. If a `Subscription` has `enable_message_ordering` set to `true`, messages published with the same non-empty `ordering_key` value will be delivered to subscribers in the order in which they are received by the Pub/Sub system. All `PubsubMessage`s published in a given `PublishRequest` must specify the same `ordering_key` value. For more information, see [ordering messages](https://cloud.google.com/pubsub/docs/ordering).
     */
    orderingKey?: string | null;
    /**
     * The time at which the message was published, populated by the server when it receives the `Publish` call. It must not be populated by the publisher in a `Publish` call.
     */
    publishTime?: string | null;
  }
  /**
   * A collection of stack elements (frames) where an error occurred.
   */
  export interface Schema$StackTrace {
    /**
     * An array of stack elements.
     */
    elements?: Schema$StackTraceElement[];
  }
  /**
   * A single stack element (frame) where an error occurred.
   */
  export interface Schema$StackTraceElement {
    /**
     * The source position information of the stack trace element.
     */
    position?: Schema$Position;
    /**
     * The routine where the error occurred.
     */
    routine?: string | null;
    /**
     * The step the error occurred at.
     */
    step?: string | null;
  }
  /**
   * Describes an error related to the current state of the Execution resource.
   */
  export interface Schema$StateError {
    /**
     * Provides specifics about the error.
     */
    details?: string | null;
    /**
     * The type of this state error.
     */
    type?: string | null;
  }
  /**
   * Represents the current status of this execution.
   */
  export interface Schema$Status {
    /**
     * A list of currently executing or last executed step names for the workflow execution currently running. If the workflow has succeeded or failed, this is the last attempted or executed step. Presently, if the current step is inside a subworkflow, the list only includes that step. In the future, the list will contain items for each step in the call stack, starting with the outermost step in the `main` subworkflow, and ending with the most deeply nested step.
     */
    currentSteps?: Schema$Step[];
  }
  /**
   * Represents a step of the workflow this execution is running.
   */
  export interface Schema$Step {
    /**
     * Name of a routine within the workflow.
     */
    routine?: string | null;
    /**
     * Name of a step within the routine.
     */
    step?: string | null;
  }
  /**
   * An StepEntry contains debugging information for a step transition in a workflow execution.
   */
  export interface Schema$StepEntry {
    /**
     * Output only. The creation time of the step entry.
     */
    createTime?: string | null;
    /**
     * Output only. The numeric ID of this step entry, used for navigation.
     */
    entryId?: string | null;
    /**
     * Output only. The exception thrown by the step entry.
     */
    exception?: Schema$Exception;
    /**
     * Output only. The full resource name of the step entry. Each step entry has a unique entry ID, which is a monotonically increasing counter. Step entry names have the format: `projects/{project\}/locations/{location\}/workflows/{workflow\}/executions/{execution\}/stepEntries/{step_entry\}`.
     */
    name?: string | null;
    /**
     * Output only. The NavigationInfo associated with this step.
     */
    navigationInfo?: Schema$NavigationInfo;
    /**
     * Output only. The name of the routine this step entry belongs to. A routine name is the subworkflow name defined in the YAML source code. The top level routine name is `main`.
     */
    routine?: string | null;
    /**
     * Output only. The state of the step entry.
     */
    state?: string | null;
    /**
     * Output only. The name of the step this step entry belongs to.
     */
    step?: string | null;
    /**
     * Output only. The StepEntryMetadata associated with this step.
     */
    stepEntryMetadata?: Schema$StepEntryMetadata;
    /**
     * Output only. The type of the step this step entry belongs to.
     */
    stepType?: string | null;
    /**
     * Output only. The most recently updated time of the step entry.
     */
    updateTime?: string | null;
    /**
     * Output only. The VariableData associated with this step.
     */
    variableData?: Schema$VariableData;
  }
  /**
   * StepEntryMetadata contains metadata information about this step.
   */
  export interface Schema$StepEntryMetadata {
    /**
     * Expected iteration represents the expected number of iterations in the step's progress.
     */
    expectedIteration?: string | null;
    /**
     * Progress number represents the current state of the current progress. eg: A step entry represents the 4th iteration in a progress of PROGRESS_TYPE_FOR. Note: This field is only populated when an iteration exists and the starting value is 1.
     */
    progressNumber?: string | null;
    /**
     * Progress type of this step entry.
     */
    progressType?: string | null;
    /**
     * Child thread id that this step entry belongs to.
     */
    threadId?: string | null;
  }
  /**
   * Request for the TriggerPubsubExecution method.
   */
  export interface Schema$TriggerPubsubExecutionRequest {
    /**
     * The number of attempts that have been made to deliver this message. This is set by Pub/Sub for subscriptions that have the "dead letter" feature enabled, and hence provided here for compatibility, but is ignored by Workflows.
     */
    deliveryAttempt?: number | null;
    /**
     * Required. LINT: LEGACY_NAMES The query parameter value for __GCP_CloudEventsMode, set by the Eventarc service when configuring triggers.
     */
    GCPCloudEventsMode?: string | null;
    /**
     * Required. The message of the Pub/Sub push notification.
     */
    message?: Schema$PubsubMessage;
    /**
     * Required. The subscription of the Pub/Sub push notification. Format: projects/{project\}/subscriptions/{sub\}
     */
    subscription?: string | null;
  }
  /**
   * VariableData contains the variable data for this step.
   */
  export interface Schema$VariableData {
    /**
     * Variables that are associated with this step.
     */
    variables?: {[key: string]: any} | null;
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
    workflows: Resource$Projects$Locations$Workflows;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.workflows = new Resource$Projects$Locations$Workflows(this.context);
    }
  }

  export class Resource$Projects$Locations$Workflows {
    context: APIRequestContext;
    executions: Resource$Projects$Locations$Workflows$Executions;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.executions = new Resource$Projects$Locations$Workflows$Executions(
        this.context
      );
    }

    /**
     * Triggers a new execution using the latest revision of the given workflow by a Pub/Sub push notification.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/workflowexecutions.googleapis.com
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
     * const workflowexecutions = google.workflowexecutions('v1');
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
     *     await workflowexecutions.projects.locations.workflows.triggerPubsubExecution(
     *       {
     *         // Required. Name of the workflow for which an execution should be created. Format: projects/{project\}/locations/{location\}/workflows/{workflow\}
     *         workflow:
     *           'projects/my-project/locations/my-location/workflows/my-workflow',
     *
     *         // Request body metadata
     *         requestBody: {
     *           // request body parameters
     *           // {
     *           //   "GCPCloudEventsMode": "my_GCPCloudEventsMode",
     *           //   "deliveryAttempt": 0,
     *           //   "message": {},
     *           //   "subscription": "my_subscription"
     *           // }
     *         },
     *       },
     *     );
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "argument": "my_argument",
     *   //   "callLogLevel": "my_callLogLevel",
     *   //   "createTime": "my_createTime",
     *   //   "disableConcurrencyQuotaOverflowBuffering": false,
     *   //   "duration": "my_duration",
     *   //   "endTime": "my_endTime",
     *   //   "error": {},
     *   //   "executionHistoryLevel": "my_executionHistoryLevel",
     *   //   "labels": {},
     *   //   "name": "my_name",
     *   //   "result": "my_result",
     *   //   "startTime": "my_startTime",
     *   //   "state": "my_state",
     *   //   "stateError": {},
     *   //   "status": {},
     *   //   "workflowRevisionId": "my_workflowRevisionId"
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
    triggerPubsubExecution(
      params: Params$Resource$Projects$Locations$Workflows$Triggerpubsubexecution,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    triggerPubsubExecution(
      params?: Params$Resource$Projects$Locations$Workflows$Triggerpubsubexecution,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Execution>>;
    triggerPubsubExecution(
      params: Params$Resource$Projects$Locations$Workflows$Triggerpubsubexecution,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    triggerPubsubExecution(
      params: Params$Resource$Projects$Locations$Workflows$Triggerpubsubexecution,
      options: MethodOptions | BodyResponseCallback<Schema$Execution>,
      callback: BodyResponseCallback<Schema$Execution>
    ): void;
    triggerPubsubExecution(
      params: Params$Resource$Projects$Locations$Workflows$Triggerpubsubexecution,
      callback: BodyResponseCallback<Schema$Execution>
    ): void;
    triggerPubsubExecution(
      callback: BodyResponseCallback<Schema$Execution>
    ): void;
    triggerPubsubExecution(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Workflows$Triggerpubsubexecution
        | BodyResponseCallback<Schema$Execution>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Execution>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Execution>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$Execution>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Workflows$Triggerpubsubexecution;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Workflows$Triggerpubsubexecution;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://workflowexecutions.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+workflow}:triggerPubsubExecution').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['workflow'],
        pathParams: ['workflow'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Execution>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Execution>(parameters);
      }
    }
  }

  export interface Params$Resource$Projects$Locations$Workflows$Triggerpubsubexecution
    extends StandardParameters {
    /**
     * Required. Name of the workflow for which an execution should be created. Format: projects/{project\}/locations/{location\}/workflows/{workflow\}
     */
    workflow?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$TriggerPubsubExecutionRequest;
  }

  export class Resource$Projects$Locations$Workflows$Executions {
    context: APIRequestContext;
    callbacks: Resource$Projects$Locations$Workflows$Executions$Callbacks;
    stepEntries: Resource$Projects$Locations$Workflows$Executions$Stepentries;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.callbacks =
        new Resource$Projects$Locations$Workflows$Executions$Callbacks(
          this.context
        );
      this.stepEntries =
        new Resource$Projects$Locations$Workflows$Executions$Stepentries(
          this.context
        );
    }

    /**
     * Cancels an execution of the given name.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/workflowexecutions.googleapis.com
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
     * const workflowexecutions = google.workflowexecutions('v1');
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
     *     await workflowexecutions.projects.locations.workflows.executions.cancel({
     *       // Required. Name of the execution to be cancelled. Format: projects/{project\}/locations/{location\}/workflows/{workflow\}/executions/{execution\}
     *       name: 'projects/my-project/locations/my-location/workflows/my-workflow/executions/my-execution',
     *
     *       // Request body metadata
     *       requestBody: {
     *         // request body parameters
     *         // {}
     *       },
     *     });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "argument": "my_argument",
     *   //   "callLogLevel": "my_callLogLevel",
     *   //   "createTime": "my_createTime",
     *   //   "disableConcurrencyQuotaOverflowBuffering": false,
     *   //   "duration": "my_duration",
     *   //   "endTime": "my_endTime",
     *   //   "error": {},
     *   //   "executionHistoryLevel": "my_executionHistoryLevel",
     *   //   "labels": {},
     *   //   "name": "my_name",
     *   //   "result": "my_result",
     *   //   "startTime": "my_startTime",
     *   //   "state": "my_state",
     *   //   "stateError": {},
     *   //   "status": {},
     *   //   "workflowRevisionId": "my_workflowRevisionId"
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
    cancel(
      params: Params$Resource$Projects$Locations$Workflows$Executions$Cancel,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    cancel(
      params?: Params$Resource$Projects$Locations$Workflows$Executions$Cancel,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Execution>>;
    cancel(
      params: Params$Resource$Projects$Locations$Workflows$Executions$Cancel,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    cancel(
      params: Params$Resource$Projects$Locations$Workflows$Executions$Cancel,
      options: MethodOptions | BodyResponseCallback<Schema$Execution>,
      callback: BodyResponseCallback<Schema$Execution>
    ): void;
    cancel(
      params: Params$Resource$Projects$Locations$Workflows$Executions$Cancel,
      callback: BodyResponseCallback<Schema$Execution>
    ): void;
    cancel(callback: BodyResponseCallback<Schema$Execution>): void;
    cancel(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Workflows$Executions$Cancel
        | BodyResponseCallback<Schema$Execution>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Execution>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Execution>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$Execution>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Workflows$Executions$Cancel;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Workflows$Executions$Cancel;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://workflowexecutions.googleapis.com/';
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
        createAPIRequest<Schema$Execution>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Execution>(parameters);
      }
    }

    /**
     * Creates a new execution using the latest revision of the given workflow. For more information, see Execute a workflow.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/workflowexecutions.googleapis.com
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
     * const workflowexecutions = google.workflowexecutions('v1');
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
     *     await workflowexecutions.projects.locations.workflows.executions.create({
     *       // Required. Name of the workflow for which an execution should be created. Format: projects/{project\}/locations/{location\}/workflows/{workflow\} The latest revision of the workflow will be used.
     *       parent: 'projects/my-project/locations/my-location/workflows/my-workflow',
     *
     *       // Request body metadata
     *       requestBody: {
     *         // request body parameters
     *         // {
     *         //   "argument": "my_argument",
     *         //   "callLogLevel": "my_callLogLevel",
     *         //   "createTime": "my_createTime",
     *         //   "disableConcurrencyQuotaOverflowBuffering": false,
     *         //   "duration": "my_duration",
     *         //   "endTime": "my_endTime",
     *         //   "error": {},
     *         //   "executionHistoryLevel": "my_executionHistoryLevel",
     *         //   "labels": {},
     *         //   "name": "my_name",
     *         //   "result": "my_result",
     *         //   "startTime": "my_startTime",
     *         //   "state": "my_state",
     *         //   "stateError": {},
     *         //   "status": {},
     *         //   "workflowRevisionId": "my_workflowRevisionId"
     *         // }
     *       },
     *     });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "argument": "my_argument",
     *   //   "callLogLevel": "my_callLogLevel",
     *   //   "createTime": "my_createTime",
     *   //   "disableConcurrencyQuotaOverflowBuffering": false,
     *   //   "duration": "my_duration",
     *   //   "endTime": "my_endTime",
     *   //   "error": {},
     *   //   "executionHistoryLevel": "my_executionHistoryLevel",
     *   //   "labels": {},
     *   //   "name": "my_name",
     *   //   "result": "my_result",
     *   //   "startTime": "my_startTime",
     *   //   "state": "my_state",
     *   //   "stateError": {},
     *   //   "status": {},
     *   //   "workflowRevisionId": "my_workflowRevisionId"
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
      params: Params$Resource$Projects$Locations$Workflows$Executions$Create,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    create(
      params?: Params$Resource$Projects$Locations$Workflows$Executions$Create,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Execution>>;
    create(
      params: Params$Resource$Projects$Locations$Workflows$Executions$Create,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    create(
      params: Params$Resource$Projects$Locations$Workflows$Executions$Create,
      options: MethodOptions | BodyResponseCallback<Schema$Execution>,
      callback: BodyResponseCallback<Schema$Execution>
    ): void;
    create(
      params: Params$Resource$Projects$Locations$Workflows$Executions$Create,
      callback: BodyResponseCallback<Schema$Execution>
    ): void;
    create(callback: BodyResponseCallback<Schema$Execution>): void;
    create(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Workflows$Executions$Create
        | BodyResponseCallback<Schema$Execution>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Execution>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Execution>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$Execution>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Workflows$Executions$Create;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Workflows$Executions$Create;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://workflowexecutions.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}/executions').replace(
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
        createAPIRequest<Schema$Execution>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Execution>(parameters);
      }
    }

    /**
     * Deletes all step entries for an execution.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/workflowexecutions.googleapis.com
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
     * const workflowexecutions = google.workflowexecutions('v1');
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
     *     await workflowexecutions.projects.locations.workflows.executions.deleteExecutionHistory(
     *       {
     *         // Required. Name of the execution for which step entries should be deleted. Format: projects/{project\}/locations/{location\}/workflows/{workflow\}/executions/{execution\}
     *         name: 'projects/my-project/locations/my-location/workflows/my-workflow/executions/my-execution',
     *
     *         // Request body metadata
     *         requestBody: {
     *           // request body parameters
     *           // {}
     *         },
     *       },
     *     );
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
    deleteExecutionHistory(
      params: Params$Resource$Projects$Locations$Workflows$Executions$Deleteexecutionhistory,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    deleteExecutionHistory(
      params?: Params$Resource$Projects$Locations$Workflows$Executions$Deleteexecutionhistory,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Empty>>;
    deleteExecutionHistory(
      params: Params$Resource$Projects$Locations$Workflows$Executions$Deleteexecutionhistory,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    deleteExecutionHistory(
      params: Params$Resource$Projects$Locations$Workflows$Executions$Deleteexecutionhistory,
      options: MethodOptions | BodyResponseCallback<Schema$Empty>,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    deleteExecutionHistory(
      params: Params$Resource$Projects$Locations$Workflows$Executions$Deleteexecutionhistory,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    deleteExecutionHistory(callback: BodyResponseCallback<Schema$Empty>): void;
    deleteExecutionHistory(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Workflows$Executions$Deleteexecutionhistory
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
        {}) as Params$Resource$Projects$Locations$Workflows$Executions$Deleteexecutionhistory;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Workflows$Executions$Deleteexecutionhistory;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://workflowexecutions.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}:deleteExecutionHistory').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
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
     * Returns all metadata stored about an execution, excluding most data that is already accessible using other API methods.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/workflowexecutions.googleapis.com
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
     * const workflowexecutions = google.workflowexecutions('v1');
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
     *     await workflowexecutions.projects.locations.workflows.executions.exportData(
     *       {
     *         // Required. Name of the execution for which data is to be exported. Format: projects/{project\}/locations/{location\}/workflows/{workflow\}/executions/{execution\}
     *         name: 'projects/my-project/locations/my-location/workflows/my-workflow/executions/my-execution',
     *       },
     *     );
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "data": "my_data"
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
    exportData(
      params: Params$Resource$Projects$Locations$Workflows$Executions$Exportdata,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    exportData(
      params?: Params$Resource$Projects$Locations$Workflows$Executions$Exportdata,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$ExportDataResponse>>;
    exportData(
      params: Params$Resource$Projects$Locations$Workflows$Executions$Exportdata,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    exportData(
      params: Params$Resource$Projects$Locations$Workflows$Executions$Exportdata,
      options: MethodOptions | BodyResponseCallback<Schema$ExportDataResponse>,
      callback: BodyResponseCallback<Schema$ExportDataResponse>
    ): void;
    exportData(
      params: Params$Resource$Projects$Locations$Workflows$Executions$Exportdata,
      callback: BodyResponseCallback<Schema$ExportDataResponse>
    ): void;
    exportData(callback: BodyResponseCallback<Schema$ExportDataResponse>): void;
    exportData(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Workflows$Executions$Exportdata
        | BodyResponseCallback<Schema$ExportDataResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ExportDataResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ExportDataResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$ExportDataResponse>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Workflows$Executions$Exportdata;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Workflows$Executions$Exportdata;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://workflowexecutions.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}:exportData').replace(
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
        createAPIRequest<Schema$ExportDataResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ExportDataResponse>(parameters);
      }
    }

    /**
     * Returns an execution of the given name.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/workflowexecutions.googleapis.com
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
     * const workflowexecutions = google.workflowexecutions('v1');
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
     *     await workflowexecutions.projects.locations.workflows.executions.get({
     *       // Required. Name of the execution to be retrieved. Format: projects/{project\}/locations/{location\}/workflows/{workflow\}/executions/{execution\}
     *       name: 'projects/my-project/locations/my-location/workflows/my-workflow/executions/my-execution',
     *       // Optional. A view defining which fields should be filled in the returned execution. The API will default to the FULL view.
     *       view: 'placeholder-value',
     *     });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "argument": "my_argument",
     *   //   "callLogLevel": "my_callLogLevel",
     *   //   "createTime": "my_createTime",
     *   //   "disableConcurrencyQuotaOverflowBuffering": false,
     *   //   "duration": "my_duration",
     *   //   "endTime": "my_endTime",
     *   //   "error": {},
     *   //   "executionHistoryLevel": "my_executionHistoryLevel",
     *   //   "labels": {},
     *   //   "name": "my_name",
     *   //   "result": "my_result",
     *   //   "startTime": "my_startTime",
     *   //   "state": "my_state",
     *   //   "stateError": {},
     *   //   "status": {},
     *   //   "workflowRevisionId": "my_workflowRevisionId"
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
      params: Params$Resource$Projects$Locations$Workflows$Executions$Get,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    get(
      params?: Params$Resource$Projects$Locations$Workflows$Executions$Get,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Execution>>;
    get(
      params: Params$Resource$Projects$Locations$Workflows$Executions$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Workflows$Executions$Get,
      options: MethodOptions | BodyResponseCallback<Schema$Execution>,
      callback: BodyResponseCallback<Schema$Execution>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Workflows$Executions$Get,
      callback: BodyResponseCallback<Schema$Execution>
    ): void;
    get(callback: BodyResponseCallback<Schema$Execution>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Workflows$Executions$Get
        | BodyResponseCallback<Schema$Execution>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Execution>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Execution>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$Execution>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Workflows$Executions$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Workflows$Executions$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://workflowexecutions.googleapis.com/';
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
        createAPIRequest<Schema$Execution>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Execution>(parameters);
      }
    }

    /**
     * Returns a list of executions which belong to the workflow with the given name. The method returns executions of all workflow revisions. Returned executions are ordered by their start time (newest first).
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/workflowexecutions.googleapis.com
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
     * const workflowexecutions = google.workflowexecutions('v1');
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
     *     await workflowexecutions.projects.locations.workflows.executions.list({
     *       // Optional. Filters applied to the `[Executions.ListExecutions]` results. The following fields are supported for filtering: `executionId`, `state`, `createTime`, `startTime`, `endTime`, `duration`, `workflowRevisionId`, `stepName`, `label`, and `disableConcurrencyQuotaOverflowBuffering`. For details, see AIP-160. For more information, see Filter executions. For example, if you are using the Google APIs Explorer: `state="SUCCEEDED"` or `startTime\>"2023-08-01" AND state="FAILED"`
     *       filter: 'placeholder-value',
     *       // Optional. Comma-separated list of fields that specify the ordering applied to the `[Executions.ListExecutions]` results. By default the ordering is based on descending `createTime`. The following fields are supported for ordering: `executionId`, `state`, `createTime`, `startTime`, `endTime`, `duration`, and `workflowRevisionId`. For details, see AIP-132.
     *       orderBy: 'placeholder-value',
     *       // Maximum number of executions to return per call. Max supported value depends on the selected Execution view: it's 1000 for BASIC and 100 for FULL. The default value used if the field is not specified is 100, regardless of the selected view. Values greater than the max value will be coerced down to it.
     *       pageSize: 'placeholder-value',
     *       // A page token, received from a previous `ListExecutions` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListExecutions` must match the call that provided the page token. Note that pagination is applied to dynamic data. The list of executions returned can change between page requests.
     *       pageToken: 'placeholder-value',
     *       // Required. Name of the workflow for which the executions should be listed. Format: projects/{project\}/locations/{location\}/workflows/{workflow\}
     *       parent: 'projects/my-project/locations/my-location/workflows/my-workflow',
     *       // Optional. A view defining which fields should be filled in the returned executions. The API will default to the BASIC view.
     *       view: 'placeholder-value',
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
      params: Params$Resource$Projects$Locations$Workflows$Executions$List,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    list(
      params?: Params$Resource$Projects$Locations$Workflows$Executions$List,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$ListExecutionsResponse>>;
    list(
      params: Params$Resource$Projects$Locations$Workflows$Executions$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Workflows$Executions$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ListExecutionsResponse>,
      callback: BodyResponseCallback<Schema$ListExecutionsResponse>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Workflows$Executions$List,
      callback: BodyResponseCallback<Schema$ListExecutionsResponse>
    ): void;
    list(callback: BodyResponseCallback<Schema$ListExecutionsResponse>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Workflows$Executions$List
        | BodyResponseCallback<Schema$ListExecutionsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ListExecutionsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ListExecutionsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$ListExecutionsResponse>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Workflows$Executions$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Workflows$Executions$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://workflowexecutions.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}/executions').replace(
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
        createAPIRequest<Schema$ListExecutionsResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ListExecutionsResponse>(parameters);
      }
    }
  }

  export interface Params$Resource$Projects$Locations$Workflows$Executions$Cancel
    extends StandardParameters {
    /**
     * Required. Name of the execution to be cancelled. Format: projects/{project\}/locations/{location\}/workflows/{workflow\}/executions/{execution\}
     */
    name?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$CancelExecutionRequest;
  }
  export interface Params$Resource$Projects$Locations$Workflows$Executions$Create
    extends StandardParameters {
    /**
     * Required. Name of the workflow for which an execution should be created. Format: projects/{project\}/locations/{location\}/workflows/{workflow\} The latest revision of the workflow will be used.
     */
    parent?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$Execution;
  }
  export interface Params$Resource$Projects$Locations$Workflows$Executions$Deleteexecutionhistory
    extends StandardParameters {
    /**
     * Required. Name of the execution for which step entries should be deleted. Format: projects/{project\}/locations/{location\}/workflows/{workflow\}/executions/{execution\}
     */
    name?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$DeleteExecutionHistoryRequest;
  }
  export interface Params$Resource$Projects$Locations$Workflows$Executions$Exportdata
    extends StandardParameters {
    /**
     * Required. Name of the execution for which data is to be exported. Format: projects/{project\}/locations/{location\}/workflows/{workflow\}/executions/{execution\}
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Locations$Workflows$Executions$Get
    extends StandardParameters {
    /**
     * Required. Name of the execution to be retrieved. Format: projects/{project\}/locations/{location\}/workflows/{workflow\}/executions/{execution\}
     */
    name?: string;
    /**
     * Optional. A view defining which fields should be filled in the returned execution. The API will default to the FULL view.
     */
    view?: string;
  }
  export interface Params$Resource$Projects$Locations$Workflows$Executions$List
    extends StandardParameters {
    /**
     * Optional. Filters applied to the `[Executions.ListExecutions]` results. The following fields are supported for filtering: `executionId`, `state`, `createTime`, `startTime`, `endTime`, `duration`, `workflowRevisionId`, `stepName`, `label`, and `disableConcurrencyQuotaOverflowBuffering`. For details, see AIP-160. For more information, see Filter executions. For example, if you are using the Google APIs Explorer: `state="SUCCEEDED"` or `startTime\>"2023-08-01" AND state="FAILED"`
     */
    filter?: string;
    /**
     * Optional. Comma-separated list of fields that specify the ordering applied to the `[Executions.ListExecutions]` results. By default the ordering is based on descending `createTime`. The following fields are supported for ordering: `executionId`, `state`, `createTime`, `startTime`, `endTime`, `duration`, and `workflowRevisionId`. For details, see AIP-132.
     */
    orderBy?: string;
    /**
     * Maximum number of executions to return per call. Max supported value depends on the selected Execution view: it's 1000 for BASIC and 100 for FULL. The default value used if the field is not specified is 100, regardless of the selected view. Values greater than the max value will be coerced down to it.
     */
    pageSize?: number;
    /**
     * A page token, received from a previous `ListExecutions` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListExecutions` must match the call that provided the page token. Note that pagination is applied to dynamic data. The list of executions returned can change between page requests.
     */
    pageToken?: string;
    /**
     * Required. Name of the workflow for which the executions should be listed. Format: projects/{project\}/locations/{location\}/workflows/{workflow\}
     */
    parent?: string;
    /**
     * Optional. A view defining which fields should be filled in the returned executions. The API will default to the BASIC view.
     */
    view?: string;
  }

  export class Resource$Projects$Locations$Workflows$Executions$Callbacks {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Returns a list of active callbacks that belong to the execution with the given name. The returned callbacks are ordered by callback ID.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/workflowexecutions.googleapis.com
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
     * const workflowexecutions = google.workflowexecutions('v1');
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
     *     await workflowexecutions.projects.locations.workflows.executions.callbacks.list(
     *       {
     *         // Maximum number of callbacks to return per call. The default value is 100 and is also the maximum value.
     *         pageSize: 'placeholder-value',
     *         // A page token, received from a previous `ListCallbacks` call. Provide this to retrieve the subsequent page. Note that pagination is applied to dynamic data. The list of callbacks returned can change between page requests if callbacks are created or deleted.
     *         pageToken: 'placeholder-value',
     *         // Required. Name of the execution for which the callbacks should be listed. Format: projects/{project\}/locations/{location\}/workflows/{workflow\}/executions/{execution\}
     *         parent:
     *           'projects/my-project/locations/my-location/workflows/my-workflow/executions/my-execution',
     *       },
     *     );
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "callbacks": [],
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
      params: Params$Resource$Projects$Locations$Workflows$Executions$Callbacks$List,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    list(
      params?: Params$Resource$Projects$Locations$Workflows$Executions$Callbacks$List,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$ListCallbacksResponse>>;
    list(
      params: Params$Resource$Projects$Locations$Workflows$Executions$Callbacks$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Workflows$Executions$Callbacks$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ListCallbacksResponse>,
      callback: BodyResponseCallback<Schema$ListCallbacksResponse>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Workflows$Executions$Callbacks$List,
      callback: BodyResponseCallback<Schema$ListCallbacksResponse>
    ): void;
    list(callback: BodyResponseCallback<Schema$ListCallbacksResponse>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Workflows$Executions$Callbacks$List
        | BodyResponseCallback<Schema$ListCallbacksResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ListCallbacksResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ListCallbacksResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$ListCallbacksResponse>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Workflows$Executions$Callbacks$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Workflows$Executions$Callbacks$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://workflowexecutions.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}/callbacks').replace(
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
        createAPIRequest<Schema$ListCallbacksResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ListCallbacksResponse>(parameters);
      }
    }
  }

  export interface Params$Resource$Projects$Locations$Workflows$Executions$Callbacks$List
    extends StandardParameters {
    /**
     * Maximum number of callbacks to return per call. The default value is 100 and is also the maximum value.
     */
    pageSize?: number;
    /**
     * A page token, received from a previous `ListCallbacks` call. Provide this to retrieve the subsequent page. Note that pagination is applied to dynamic data. The list of callbacks returned can change between page requests if callbacks are created or deleted.
     */
    pageToken?: string;
    /**
     * Required. Name of the execution for which the callbacks should be listed. Format: projects/{project\}/locations/{location\}/workflows/{workflow\}/executions/{execution\}
     */
    parent?: string;
  }

  export class Resource$Projects$Locations$Workflows$Executions$Stepentries {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Gets a step entry.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/workflowexecutions.googleapis.com
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
     * const workflowexecutions = google.workflowexecutions('v1');
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
     *     await workflowexecutions.projects.locations.workflows.executions.stepEntries.get(
     *       {
     *         // Required. The name of the step entry to retrieve. Format: projects/{project\}/locations/{location\}/workflows/{workflow\}/executions/{execution\}/stepEntries/{step_entry\}
     *         name: 'projects/my-project/locations/my-location/workflows/my-workflow/executions/my-execution/stepEntries/my-stepEntrie',
     *         // Deprecated field.
     *         view: 'placeholder-value',
     *       },
     *     );
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "createTime": "my_createTime",
     *   //   "entryId": "my_entryId",
     *   //   "exception": {},
     *   //   "name": "my_name",
     *   //   "navigationInfo": {},
     *   //   "routine": "my_routine",
     *   //   "state": "my_state",
     *   //   "step": "my_step",
     *   //   "stepEntryMetadata": {},
     *   //   "stepType": "my_stepType",
     *   //   "updateTime": "my_updateTime",
     *   //   "variableData": {}
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
      params: Params$Resource$Projects$Locations$Workflows$Executions$Stepentries$Get,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    get(
      params?: Params$Resource$Projects$Locations$Workflows$Executions$Stepentries$Get,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$StepEntry>>;
    get(
      params: Params$Resource$Projects$Locations$Workflows$Executions$Stepentries$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Workflows$Executions$Stepentries$Get,
      options: MethodOptions | BodyResponseCallback<Schema$StepEntry>,
      callback: BodyResponseCallback<Schema$StepEntry>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Workflows$Executions$Stepentries$Get,
      callback: BodyResponseCallback<Schema$StepEntry>
    ): void;
    get(callback: BodyResponseCallback<Schema$StepEntry>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Workflows$Executions$Stepentries$Get
        | BodyResponseCallback<Schema$StepEntry>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$StepEntry>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$StepEntry>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$StepEntry>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Workflows$Executions$Stepentries$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Workflows$Executions$Stepentries$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://workflowexecutions.googleapis.com/';
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
        createAPIRequest<Schema$StepEntry>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$StepEntry>(parameters);
      }
    }

    /**
     * Lists step entries for the corresponding workflow execution. Returned entries are ordered by their create_time.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/workflowexecutions.googleapis.com
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
     * const workflowexecutions = google.workflowexecutions('v1');
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
     *     await workflowexecutions.projects.locations.workflows.executions.stepEntries.list(
     *       {
     *         // Optional. Filters applied to the `[StepEntries.ListStepEntries]` results. The following fields are supported for filtering: `entryId`, `createTime`, `updateTime`, `routine`, `step`, `stepType`, `parent`, `state`. For details, see AIP-160. For example, if you are using the Google APIs Explorer: `state="SUCCEEDED"` or `createTime\>"2023-08-01" AND state="FAILED"`
     *         filter: 'placeholder-value',
     *         // Optional. Comma-separated list of fields that specify the ordering applied to the `[StepEntries.ListStepEntries]` results. By default the ordering is based on ascending `entryId`. The following fields are supported for ordering: `entryId`, `createTime`, `updateTime`, `routine`, `step`, `stepType`, `state`. For details, see AIP-132.
     *         orderBy: 'placeholder-value',
     *         // Optional. Number of step entries to return per call. The default max is 1000.
     *         pageSize: 'placeholder-value',
     *         // Optional. A page token, received from a previous `ListStepEntries` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListStepEntries` must match the call that provided the page token.
     *         pageToken: 'placeholder-value',
     *         // Required. Name of the workflow execution to list entries for. Format: projects/{project\}/locations/{location\}/workflows/{workflow\}/executions/{execution\}
     *         parent:
     *           'projects/my-project/locations/my-location/workflows/my-workflow/executions/my-execution',
     *         // Optional. The number of step entries to skip. It can be used with or without a pageToken. If used with a pageToken, then it indicates the number of step entries to skip starting from the requested page.
     *         skip: 'placeholder-value',
     *         // Deprecated field.
     *         view: 'placeholder-value',
     *       },
     *     );
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "nextPageToken": "my_nextPageToken",
     *   //   "stepEntries": [],
     *   //   "totalSize": 0
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
      params: Params$Resource$Projects$Locations$Workflows$Executions$Stepentries$List,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    list(
      params?: Params$Resource$Projects$Locations$Workflows$Executions$Stepentries$List,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$ListStepEntriesResponse>>;
    list(
      params: Params$Resource$Projects$Locations$Workflows$Executions$Stepentries$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Workflows$Executions$Stepentries$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ListStepEntriesResponse>,
      callback: BodyResponseCallback<Schema$ListStepEntriesResponse>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Workflows$Executions$Stepentries$List,
      callback: BodyResponseCallback<Schema$ListStepEntriesResponse>
    ): void;
    list(callback: BodyResponseCallback<Schema$ListStepEntriesResponse>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Workflows$Executions$Stepentries$List
        | BodyResponseCallback<Schema$ListStepEntriesResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ListStepEntriesResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ListStepEntriesResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$ListStepEntriesResponse>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Workflows$Executions$Stepentries$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Workflows$Executions$Stepentries$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://workflowexecutions.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}/stepEntries').replace(
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
        createAPIRequest<Schema$ListStepEntriesResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ListStepEntriesResponse>(parameters);
      }
    }
  }

  export interface Params$Resource$Projects$Locations$Workflows$Executions$Stepentries$Get
    extends StandardParameters {
    /**
     * Required. The name of the step entry to retrieve. Format: projects/{project\}/locations/{location\}/workflows/{workflow\}/executions/{execution\}/stepEntries/{step_entry\}
     */
    name?: string;
    /**
     * Deprecated field.
     */
    view?: string;
  }
  export interface Params$Resource$Projects$Locations$Workflows$Executions$Stepentries$List
    extends StandardParameters {
    /**
     * Optional. Filters applied to the `[StepEntries.ListStepEntries]` results. The following fields are supported for filtering: `entryId`, `createTime`, `updateTime`, `routine`, `step`, `stepType`, `parent`, `state`. For details, see AIP-160. For example, if you are using the Google APIs Explorer: `state="SUCCEEDED"` or `createTime\>"2023-08-01" AND state="FAILED"`
     */
    filter?: string;
    /**
     * Optional. Comma-separated list of fields that specify the ordering applied to the `[StepEntries.ListStepEntries]` results. By default the ordering is based on ascending `entryId`. The following fields are supported for ordering: `entryId`, `createTime`, `updateTime`, `routine`, `step`, `stepType`, `state`. For details, see AIP-132.
     */
    orderBy?: string;
    /**
     * Optional. Number of step entries to return per call. The default max is 1000.
     */
    pageSize?: number;
    /**
     * Optional. A page token, received from a previous `ListStepEntries` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListStepEntries` must match the call that provided the page token.
     */
    pageToken?: string;
    /**
     * Required. Name of the workflow execution to list entries for. Format: projects/{project\}/locations/{location\}/workflows/{workflow\}/executions/{execution\}
     */
    parent?: string;
    /**
     * Optional. The number of step entries to skip. It can be used with or without a pageToken. If used with a pageToken, then it indicates the number of step entries to skip starting from the requested page.
     */
    skip?: number;
    /**
     * Deprecated field.
     */
    view?: string;
  }
}
