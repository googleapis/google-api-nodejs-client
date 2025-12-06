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

export namespace workspaceevents_v1 {
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
   * Google Workspace Events API
   *
   * The Google Workspace Events API lets you subscribe to events and manage change notifications across Google Workspace applications.
   *
   * @example
   * ```js
   * const {google} = require('googleapis');
   * const workspaceevents = google.workspaceevents('v1');
   * ```
   */
  export class Workspaceevents {
    context: APIRequestContext;
    message: Resource$Message;
    operations: Resource$Operations;
    subscriptions: Resource$Subscriptions;
    tasks: Resource$Tasks;

    constructor(options: GlobalOptions, google?: GoogleConfigurable) {
      this.context = {
        _options: options || {},
        google,
      };

      this.message = new Resource$Message(this.context);
      this.operations = new Resource$Operations(this.context);
      this.subscriptions = new Resource$Subscriptions(this.context);
      this.tasks = new Resource$Tasks(this.context);
    }
  }

  /**
   * Artifacts are the container for task completed results. These are similar to Messages but are intended to be the product of a task, as opposed to point-to-point communication.
   */
  export interface Schema$Artifact {
    /**
     * Unique identifier (e.g. UUID) for the artifact. It must be at least unique within a task.
     */
    artifactId?: string | null;
    /**
     * A human readable description of the artifact, optional.
     */
    description?: string | null;
    /**
     * The URIs of extensions that are present or contributed to this Artifact.
     */
    extensions?: string[] | null;
    /**
     * Optional metadata included with the artifact.
     */
    metadata?: {[key: string]: any} | null;
    /**
     * A human readable name for the artifact.
     */
    name?: string | null;
    /**
     * The content of the artifact.
     */
    parts?: Schema$Part[];
  }
  /**
   * Defines authentication details, used for push notifications.
   */
  export interface Schema$AuthenticationInfo {
    /**
     * Optional credentials
     */
    credentials?: string | null;
    /**
     * Supported authentication schemes - e.g. Basic, Bearer, etc
     */
    schemes?: string[] | null;
  }
  export interface Schema$CancelTaskRequest {}
  /**
   * DataPart represents a structured blob. This is most commonly a JSON payload.
   */
  export interface Schema$DataPart {
    data?: {[key: string]: any} | null;
  }
  /**
   * A generic empty message that you can re-use to avoid defining duplicated empty messages in your APIs. A typical example is to use it as the request or the response type of an API method. For instance: service Foo { rpc Bar(google.protobuf.Empty) returns (google.protobuf.Empty); \}
   */
  export interface Schema$Empty {}
  /**
   * FilePart represents the different ways files can be provided. If files are small, directly feeding the bytes is supported via file_with_bytes. If the file is large, the agent should read the content as appropriate directly from the file_with_uri source.
   */
  export interface Schema$FilePart {
    fileWithBytes?: string | null;
    fileWithUri?: string | null;
    mimeType?: string | null;
    name?: string | null;
  }
  /**
   * The response message for SubscriptionsService.ListSubscriptions.
   */
  export interface Schema$ListSubscriptionsResponse {
    /**
     * A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages.
     */
    nextPageToken?: string | null;
    /**
     * List of subscriptions.
     */
    subscriptions?: Schema$Subscription[];
  }
  export interface Schema$ListTaskPushNotificationConfigResponse {
    /**
     * The list of push notification configurations.
     */
    configs?: Schema$TaskPushNotificationConfig[];
    /**
     * A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages.
     */
    nextPageToken?: string | null;
  }
  /**
   * Message is one unit of communication between client and server. It is associated with a context and optionally a task. Since the server is responsible for the context definition, it must always provide a context_id in its messages. The client can optionally provide the context_id if it knows the context to associate the message to. Similarly for task_id, except the server decides if a task is created and whether to include the task_id.
   */
  export interface Schema$Message {
    /**
     * protolint:disable REPEATED_FIELD_NAMES_PLURALIZED Content is the container of the message content.
     */
    content?: Schema$Part[];
    /**
     * The context id of the message. This is optional and if set, the message will be associated with the given context.
     */
    contextId?: string | null;
    /**
     * The URIs of extensions that are present or contributed to this Message.
     */
    extensions?: string[] | null;
    /**
     * The unique identifier (e.g. UUID)of the message. This is required and created by the message creator.
     */
    messageId?: string | null;
    /**
     * protolint:enable REPEATED_FIELD_NAMES_PLURALIZED Any optional metadata to provide along with the message.
     */
    metadata?: {[key: string]: any} | null;
    /**
     * A role for the message.
     */
    role?: string | null;
    /**
     * The task id of the message. This is optional and if set, the message will be associated with the given task.
     */
    taskId?: string | null;
  }
  /**
   * The endpoint where the subscription delivers events.
   */
  export interface Schema$NotificationEndpoint {
    /**
     * Immutable. The Pub/Sub topic that receives events for the subscription. Format: `projects/{project\}/topics/{topic\}` You must create the topic in the same Google Cloud project where you create this subscription. Note: The Google Workspace Events API uses [ordering keys](https://cloud.google.com/pubsub/docs/ordering) for the benefit of sequential events. If the Cloud Pub/Sub topic has a [message storage policy](https://cloud.google.com/pubsub/docs/resource-location-restriction#exceptions) configured to exclude the nearest Google Cloud region, publishing events with ordering keys will fail. When the topic receives events, the events are encoded as Pub/Sub messages. For details, see the [Google Cloud Pub/Sub Protocol Binding for CloudEvents](https://github.com/googleapis/google-cloudevents/blob/main/docs/spec/pubsub.md).
     */
    pubsubTopic?: string | null;
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
     * Service-specific metadata associated with the operation. It typically contains progress information and common metadata such as create time. Some services might not provide such metadata. Any method that returns a long-running operation should document the metadata type, if any.
     */
    metadata?: {[key: string]: any} | null;
    /**
     * The server-assigned name, which is only unique within the same service that originally returns it. If you use the default HTTP mapping, the `name` should be a resource name ending with `operations/{unique_id\}`.
     */
    name?: string | null;
    /**
     * The normal, successful response of the operation. If the original method returns no data on success, such as `Delete`, the response is `google.protobuf.Empty`. If the original method is standard `Get`/`Create`/`Update`, the response should be the resource. For other methods, the response should have the type `XxxResponse`, where `Xxx` is the original method name. For example, if the original method name is `TakeSnapshot()`, the inferred response type is `TakeSnapshotResponse`.
     */
    response?: {[key: string]: any} | null;
  }
  /**
   * Part represents a container for a section of communication content. Parts can be purely textual, some sort of file (image, video, etc) or a structured data blob (i.e. JSON).
   */
  export interface Schema$Part {
    data?: Schema$DataPart;
    file?: Schema$FilePart;
    /**
     * Optional metadata associated with this part.
     */
    metadata?: {[key: string]: any} | null;
    text?: string | null;
  }
  /**
   * Options about what data to include in the event payload. Only supported for Google Chat and Google Drive events.
   */
  export interface Schema$PayloadOptions {
    /**
     * Optional. If `include_resource` is set to `true`, the list of fields to include in the event payload. Separate fields with a comma. For example, to include a Google Chat message's sender and create time, enter `message.sender,message.createTime`. If omitted, the payload includes all fields for the resource. If you specify a field that doesn't exist for the resource, the system ignores the field.
     */
    fieldMask?: string | null;
    /**
     * Optional. Whether the event payload includes data about the resource that changed. For example, for an event where a Google Chat message was created, whether the payload contains data about the [`Message`](https://developers.google.com/chat/api/reference/rest/v1/spaces.messages) resource. If false, the event payload only includes the name of the changed resource.
     */
    includeResource?: boolean | null;
  }
  /**
   * Configuration for setting up push notifications for task updates.
   */
  export interface Schema$PushNotificationConfig {
    /**
     * Information about the authentication to sent with the notification
     */
    authentication?: Schema$AuthenticationInfo;
    /**
     * A unique identifier (e.g. UUID) for this push notification.
     */
    id?: string | null;
    /**
     * Token unique for this task/session
     */
    token?: string | null;
    /**
     * Url to send the notification too
     */
    url?: string | null;
  }
  /**
   * The request message for SubscriptionsService.ReactivateSubscription.
   */
  export interface Schema$ReactivateSubscriptionRequest {}
  /**
   * Configuration of a send message request.
   */
  export interface Schema$SendMessageConfiguration {
    /**
     * The output modes that the agent is expected to respond with.
     */
    acceptedOutputModes?: string[] | null;
    /**
     * If true, the message will be blocking until the task is completed. If false, the message will be non-blocking and the task will be returned immediately. It is the caller's responsibility to check for any task updates.
     */
    blocking?: boolean | null;
    /**
     * The maximum number of messages to include in the history. if 0, the history will be unlimited.
     */
    historyLength?: number | null;
    /**
     * A configuration of a webhook that can be used to receive updates
     */
    pushNotification?: Schema$PushNotificationConfig;
  }
  /**
   * /////////// Request Messages ///////////
   */
  export interface Schema$SendMessageRequest {
    /**
     * Configuration for the send request.
     */
    configuration?: Schema$SendMessageConfiguration;
    /**
     * Required. The message to send to the agent.
     */
    message?: Schema$Message;
    /**
     * Optional metadata for the request.
     */
    metadata?: {[key: string]: any} | null;
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
   * The stream response for a message. The stream should be one of the following sequences: If the response is a message, the stream should contain one, and only one, message and then close If the response is a task lifecycle, the first response should be a Task object followed by zero or more TaskStatusUpdateEvents and TaskArtifactUpdateEvents. The stream should complete when the Task if in an interrupted or terminal state. A stream that ends before these conditions are met are
   */
  export interface Schema$StreamResponse {
    artifactUpdate?: Schema$TaskArtifactUpdateEvent;
    message?: Schema$Message;
    statusUpdate?: Schema$TaskStatusUpdateEvent;
    task?: Schema$Task;
  }
  /**
   * A subscription to receive events about a Google Workspace resource. To learn more about subscriptions, see the [Google Workspace Events API overview](https://developers.google.com/workspace/events).
   */
  export interface Schema$Subscription {
    /**
     * Output only. The user who authorized the creation of the subscription. When a user authorizes the subscription, this field and the `user_authority` field have the same value and the format is: Format: `users/{user\}` For Google Workspace users, the `{user\}` value is the [`user.id`](https://developers.google.com/admin-sdk/directory/reference/rest/v1/users#User.FIELDS.ids) field from the Directory API. When a Chat app authorizes the subscription, only `service_account_authority` field populates and this field is empty.
     */
    authority?: string | null;
    /**
     * Output only. The time when the subscription is created.
     */
    createTime?: string | null;
    /**
     * Optional. This checksum is computed by the server based on the value of other fields, and might be sent on update requests to ensure the client has an up-to-date value before proceeding.
     */
    etag?: string | null;
    /**
     * Required. Unordered list. Input for creating a subscription. Otherwise, output only. One or more types of events to receive about the target resource. Formatted according to the CloudEvents specification. The supported event types depend on the target resource of your subscription. For details, see [Supported Google Workspace events](https://developers.google.com/workspace/events/guides#supported-events). By default, you also receive events about the [lifecycle of your subscription](https://developers.google.com/workspace/events/guides/events-lifecycle). You don't need to specify lifecycle events for this field. If you specify an event type that doesn't exist for the target resource, the request returns an HTTP `400 Bad Request` status code.
     */
    eventTypes?: string[] | null;
    /**
     * Non-empty default. The timestamp in UTC when the subscription expires. Always displayed on output, regardless of what was used on input.
     */
    expireTime?: string | null;
    /**
     * Identifier. Resource name of the subscription. Format: `subscriptions/{subscription\}`
     */
    name?: string | null;
    /**
     * Required. Immutable. The endpoint where the subscription delivers events, such as a Pub/Sub topic.
     */
    notificationEndpoint?: Schema$NotificationEndpoint;
    /**
     * Optional. Options about what data to include in the event payload. Only supported for Google Chat and Google Drive events.
     */
    payloadOptions?: Schema$PayloadOptions;
    /**
     * Output only. If `true`, the subscription is in the process of being updated.
     */
    reconciling?: boolean | null;
    /**
     * Output only. The state of the subscription. Determines whether the subscription can receive events and deliver them to the notification endpoint.
     */
    state?: string | null;
    /**
     * Output only. The error that suspended the subscription. To reactivate the subscription, resolve the error and call the `ReactivateSubscription` method.
     */
    suspensionReason?: string | null;
    /**
     * Required. Immutable. The Google Workspace resource that's monitored for events, formatted as the [full resource name](https://google.aip.dev/122#full-resource-names). To learn about target resources and the events that they support, see [Supported Google Workspace events](https://developers.google.com/workspace/events#supported-events). A user can only authorize your app to create one subscription for a given target resource. If your app tries to create another subscription with the same user credentials, the request returns an `ALREADY_EXISTS` error.
     */
    targetResource?: string | null;
    /**
     * Input only. The time-to-live (TTL) or duration for the subscription. If unspecified or set to `0`, uses the maximum possible duration.
     */
    ttl?: string | null;
    /**
     * Output only. System-assigned unique identifier for the subscription.
     */
    uid?: string | null;
    /**
     * Output only. The last time that the subscription is updated.
     */
    updateTime?: string | null;
  }
  /**
   * Task is the core unit of action for A2A. It has a current status and when results are created for the task they are stored in the artifact. If there are multiple turns for a task, these are stored in history.
   */
  export interface Schema$Task {
    /**
     * A set of output artifacts for a Task.
     */
    artifacts?: Schema$Artifact[];
    /**
     * Unique identifier (e.g. UUID) for the contextual collection of interactions (tasks and messages). Created by the A2A server.
     */
    contextId?: string | null;
    /**
     * protolint:disable REPEATED_FIELD_NAMES_PLURALIZED The history of interactions from a task.
     */
    history?: Schema$Message[];
    /**
     * Unique identifier (e.g. UUID) for the task, generated by the server for a new task.
     */
    id?: string | null;
    /**
     * protolint:enable REPEATED_FIELD_NAMES_PLURALIZED A key/value object to store custom metadata about a task.
     */
    metadata?: {[key: string]: any} | null;
    /**
     * The current status of a Task, including state and a message.
     */
    status?: Schema$TaskStatus;
  }
  /**
   * TaskArtifactUpdateEvent represents a task delta where an artifact has been generated.
   */
  export interface Schema$TaskArtifactUpdateEvent {
    /**
     * Whether this should be appended to a prior one produced
     */
    append?: boolean | null;
    /**
     * The artifact itself
     */
    artifact?: Schema$Artifact;
    /**
     * The id of the context that this task belongs too
     */
    contextId?: string | null;
    /**
     * Whether this represents the last part of an artifact
     */
    lastChunk?: boolean | null;
    /**
     * Optional metadata associated with the artifact update.
     */
    metadata?: {[key: string]: any} | null;
    /**
     * The id of the task for this artifact
     */
    taskId?: string | null;
  }
  export interface Schema$TaskPushNotificationConfig {
    /**
     * The resource name of the config. Format: tasks/{task_id\}/pushNotificationConfigs/{config_id\}
     */
    name?: string | null;
    /**
     * The push notification configuration details.
     */
    pushNotificationConfig?: Schema$PushNotificationConfig;
  }
  /**
   * A container for the status of a task
   */
  export interface Schema$TaskStatus {
    /**
     * A message associated with the status.
     */
    message?: Schema$Message;
    /**
     * The current state of this task
     */
    state?: string | null;
    /**
     * Timestamp when the status was recorded. Example: "2023-10-27T10:00:00Z"
     */
    timestamp?: string | null;
  }
  /**
   * TaskStatusUpdateEvent is a delta even on a task indicating that a task has changed.
   */
  export interface Schema$TaskStatusUpdateEvent {
    /**
     * The id of the context that the task belongs to
     */
    contextId?: string | null;
    /**
     * Whether this is the last status update expected for this task.
     */
    final?: boolean | null;
    /**
     * Optional metadata to associate with the task update.
     */
    metadata?: {[key: string]: any} | null;
    /**
     * The new status of the task.
     */
    status?: Schema$TaskStatus;
    /**
     * The id of the task that is changed
     */
    taskId?: string | null;
  }

  export class Resource$Message {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * SendStreamingMessage is a streaming call that will return a stream of task update events until the Task is in an interrupted or terminal state.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/workspaceevents.googleapis.com
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
     * const workspaceevents = google.workspaceevents('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await workspaceevents.message.stream({
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "configuration": {},
     *       //   "message": {},
     *       //   "metadata": {}
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "artifactUpdate": {},
     *   //   "message": {},
     *   //   "statusUpdate": {},
     *   //   "task": {}
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
    stream(
      params: Params$Resource$Message$Stream,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    stream(
      params?: Params$Resource$Message$Stream,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$StreamResponse>>;
    stream(
      params: Params$Resource$Message$Stream,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    stream(
      params: Params$Resource$Message$Stream,
      options: MethodOptions | BodyResponseCallback<Schema$StreamResponse>,
      callback: BodyResponseCallback<Schema$StreamResponse>
    ): void;
    stream(
      params: Params$Resource$Message$Stream,
      callback: BodyResponseCallback<Schema$StreamResponse>
    ): void;
    stream(callback: BodyResponseCallback<Schema$StreamResponse>): void;
    stream(
      paramsOrCallback?:
        | Params$Resource$Message$Stream
        | BodyResponseCallback<Schema$StreamResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$StreamResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$StreamResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$StreamResponse>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback || {}) as Params$Resource$Message$Stream;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Message$Stream;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://workspaceevents.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/message:stream').replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: [],
        pathParams: [],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$StreamResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$StreamResponse>(parameters);
      }
    }
  }

  export interface Params$Resource$Message$Stream extends StandardParameters {
    /**
     * Request body metadata
     */
    requestBody?: Schema$SendMessageRequest;
  }

  export class Resource$Operations {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/workspaceevents.googleapis.com
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
     * const workspaceevents = google.workspaceevents('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/chat.bot',
     *       'https://www.googleapis.com/auth/chat.memberships',
     *       'https://www.googleapis.com/auth/chat.memberships.readonly',
     *       'https://www.googleapis.com/auth/chat.messages',
     *       'https://www.googleapis.com/auth/chat.messages.reactions',
     *       'https://www.googleapis.com/auth/chat.messages.reactions.readonly',
     *       'https://www.googleapis.com/auth/chat.messages.readonly',
     *       'https://www.googleapis.com/auth/chat.spaces',
     *       'https://www.googleapis.com/auth/chat.spaces.readonly',
     *       'https://www.googleapis.com/auth/drive',
     *       'https://www.googleapis.com/auth/drive.file',
     *       'https://www.googleapis.com/auth/drive.metadata',
     *       'https://www.googleapis.com/auth/drive.metadata.readonly',
     *       'https://www.googleapis.com/auth/drive.readonly',
     *       'https://www.googleapis.com/auth/meetings.space.created',
     *       'https://www.googleapis.com/auth/meetings.space.readonly',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await workspaceevents.operations.get({
     *     // The name of the operation resource.
     *     name: 'operations/.*',
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
     * ```
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    get(
      params: Params$Resource$Operations$Get,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    get(
      params?: Params$Resource$Operations$Get,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Operation>>;
    get(
      params: Params$Resource$Operations$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Operations$Get,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    get(
      params: Params$Resource$Operations$Get,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    get(callback: BodyResponseCallback<Schema$Operation>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Operations$Get
        | BodyResponseCallback<Schema$Operation>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Operation>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Operation>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$Operation>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback || {}) as Params$Resource$Operations$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Operations$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://workspaceevents.googleapis.com/';
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
        createAPIRequest<Schema$Operation>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Operation>(parameters);
      }
    }
  }

  export interface Params$Resource$Operations$Get extends StandardParameters {
    /**
     * The name of the operation resource.
     */
    name?: string;
  }

  export class Resource$Subscriptions {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Creates a Google Workspace subscription. To learn how to use this method, see [Create a Google Workspace subscription](https://developers.google.com/workspace/events/guides/create-subscription). For a subscription on a [Chat target resource](https://developers.google.com/workspace/events/guides/events-chat), you can create a subscription as: - A Chat app by specifying an authorization scope that begins with `chat.app` and getting one-time administrator approval ([Developer Preview](https://developers.google.com/workspace/preview)). To learn more, see [Authorize as a Chat app with administrator approval](https://developers.google.com/workspace/chat/authenticate-authorize-chat-app). - A user by specifying an authorization scope that doesn't include `app` in its name. To learn more, see [Authorize as a Chat user](https://developers.google.com/workspace/chat/authenticate-authorize-chat-user).
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/workspaceevents.googleapis.com
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
     * const workspaceevents = google.workspaceevents('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/chat.app.memberships',
     *       'https://www.googleapis.com/auth/chat.app.messages.readonly',
     *       'https://www.googleapis.com/auth/chat.app.spaces',
     *       'https://www.googleapis.com/auth/chat.memberships',
     *       'https://www.googleapis.com/auth/chat.memberships.readonly',
     *       'https://www.googleapis.com/auth/chat.messages',
     *       'https://www.googleapis.com/auth/chat.messages.reactions',
     *       'https://www.googleapis.com/auth/chat.messages.reactions.readonly',
     *       'https://www.googleapis.com/auth/chat.messages.readonly',
     *       'https://www.googleapis.com/auth/chat.spaces',
     *       'https://www.googleapis.com/auth/chat.spaces.readonly',
     *       'https://www.googleapis.com/auth/drive',
     *       'https://www.googleapis.com/auth/drive.file',
     *       'https://www.googleapis.com/auth/drive.metadata',
     *       'https://www.googleapis.com/auth/drive.metadata.readonly',
     *       'https://www.googleapis.com/auth/drive.readonly',
     *       'https://www.googleapis.com/auth/meetings.space.created',
     *       'https://www.googleapis.com/auth/meetings.space.readonly',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await workspaceevents.subscriptions.create({
     *     // Optional. If set to `true`, validates and previews the request, but doesn't create the subscription.
     *     validateOnly: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "authority": "my_authority",
     *       //   "createTime": "my_createTime",
     *       //   "etag": "my_etag",
     *       //   "eventTypes": [],
     *       //   "expireTime": "my_expireTime",
     *       //   "name": "my_name",
     *       //   "notificationEndpoint": {},
     *       //   "payloadOptions": {},
     *       //   "reconciling": false,
     *       //   "state": "my_state",
     *       //   "suspensionReason": "my_suspensionReason",
     *       //   "targetResource": "my_targetResource",
     *       //   "ttl": "my_ttl",
     *       //   "uid": "my_uid",
     *       //   "updateTime": "my_updateTime"
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
     * ```
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    create(
      params: Params$Resource$Subscriptions$Create,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    create(
      params?: Params$Resource$Subscriptions$Create,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Operation>>;
    create(
      params: Params$Resource$Subscriptions$Create,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    create(
      params: Params$Resource$Subscriptions$Create,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    create(
      params: Params$Resource$Subscriptions$Create,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    create(callback: BodyResponseCallback<Schema$Operation>): void;
    create(
      paramsOrCallback?:
        | Params$Resource$Subscriptions$Create
        | BodyResponseCallback<Schema$Operation>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Operation>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Operation>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$Operation>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Subscriptions$Create;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Subscriptions$Create;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://workspaceevents.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/subscriptions').replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: [],
        pathParams: [],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Operation>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Operation>(parameters);
      }
    }

    /**
     * Deletes a Google Workspace subscription. To learn how to use this method, see [Delete a Google Workspace subscription](https://developers.google.com/workspace/events/guides/delete-subscription).
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/workspaceevents.googleapis.com
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
     * const workspaceevents = google.workspaceevents('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/chat.bot',
     *       'https://www.googleapis.com/auth/chat.memberships',
     *       'https://www.googleapis.com/auth/chat.memberships.readonly',
     *       'https://www.googleapis.com/auth/chat.messages',
     *       'https://www.googleapis.com/auth/chat.messages.reactions',
     *       'https://www.googleapis.com/auth/chat.messages.reactions.readonly',
     *       'https://www.googleapis.com/auth/chat.messages.readonly',
     *       'https://www.googleapis.com/auth/chat.spaces',
     *       'https://www.googleapis.com/auth/chat.spaces.readonly',
     *       'https://www.googleapis.com/auth/drive',
     *       'https://www.googleapis.com/auth/drive.file',
     *       'https://www.googleapis.com/auth/drive.metadata',
     *       'https://www.googleapis.com/auth/drive.metadata.readonly',
     *       'https://www.googleapis.com/auth/drive.readonly',
     *       'https://www.googleapis.com/auth/meetings.space.created',
     *       'https://www.googleapis.com/auth/meetings.space.readonly',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await workspaceevents.subscriptions.delete({
     *     // Optional. If set to `true` and the subscription isn't found, the request succeeds but doesn't delete the subscription.
     *     allowMissing: 'placeholder-value',
     *     // Optional. Etag of the subscription. If present, it must match with the server's etag. Otherwise, request fails with the status `ABORTED`.
     *     etag: 'placeholder-value',
     *     // Required. Resource name of the subscription to delete. Format: `subscriptions/{subscription\}`
     *     name: 'subscriptions/my-subscription',
     *     // Optional. If set to `true`, validates and previews the request, but doesn't delete the subscription.
     *     validateOnly: 'placeholder-value',
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
     * ```
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    delete(
      params: Params$Resource$Subscriptions$Delete,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    delete(
      params?: Params$Resource$Subscriptions$Delete,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Operation>>;
    delete(
      params: Params$Resource$Subscriptions$Delete,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    delete(
      params: Params$Resource$Subscriptions$Delete,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    delete(
      params: Params$Resource$Subscriptions$Delete,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    delete(callback: BodyResponseCallback<Schema$Operation>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Subscriptions$Delete
        | BodyResponseCallback<Schema$Operation>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Operation>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Operation>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$Operation>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Subscriptions$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Subscriptions$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://workspaceevents.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
            method: 'DELETE',
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
        createAPIRequest<Schema$Operation>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Operation>(parameters);
      }
    }

    /**
     * Gets details about a Google Workspace subscription. To learn how to use this method, see [Get details about a Google Workspace subscription](https://developers.google.com/workspace/events/guides/get-subscription).
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/workspaceevents.googleapis.com
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
     * const workspaceevents = google.workspaceevents('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/chat.bot',
     *       'https://www.googleapis.com/auth/chat.memberships',
     *       'https://www.googleapis.com/auth/chat.memberships.readonly',
     *       'https://www.googleapis.com/auth/chat.messages',
     *       'https://www.googleapis.com/auth/chat.messages.reactions',
     *       'https://www.googleapis.com/auth/chat.messages.reactions.readonly',
     *       'https://www.googleapis.com/auth/chat.messages.readonly',
     *       'https://www.googleapis.com/auth/chat.spaces',
     *       'https://www.googleapis.com/auth/chat.spaces.readonly',
     *       'https://www.googleapis.com/auth/drive',
     *       'https://www.googleapis.com/auth/drive.file',
     *       'https://www.googleapis.com/auth/drive.metadata',
     *       'https://www.googleapis.com/auth/drive.metadata.readonly',
     *       'https://www.googleapis.com/auth/drive.readonly',
     *       'https://www.googleapis.com/auth/meetings.space.created',
     *       'https://www.googleapis.com/auth/meetings.space.readonly',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await workspaceevents.subscriptions.get({
     *     // Required. Resource name of the subscription. Format: `subscriptions/{subscription\}`
     *     name: 'subscriptions/my-subscription',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "authority": "my_authority",
     *   //   "createTime": "my_createTime",
     *   //   "etag": "my_etag",
     *   //   "eventTypes": [],
     *   //   "expireTime": "my_expireTime",
     *   //   "name": "my_name",
     *   //   "notificationEndpoint": {},
     *   //   "payloadOptions": {},
     *   //   "reconciling": false,
     *   //   "state": "my_state",
     *   //   "suspensionReason": "my_suspensionReason",
     *   //   "targetResource": "my_targetResource",
     *   //   "ttl": "my_ttl",
     *   //   "uid": "my_uid",
     *   //   "updateTime": "my_updateTime"
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
      params: Params$Resource$Subscriptions$Get,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    get(
      params?: Params$Resource$Subscriptions$Get,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Subscription>>;
    get(
      params: Params$Resource$Subscriptions$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Subscriptions$Get,
      options: MethodOptions | BodyResponseCallback<Schema$Subscription>,
      callback: BodyResponseCallback<Schema$Subscription>
    ): void;
    get(
      params: Params$Resource$Subscriptions$Get,
      callback: BodyResponseCallback<Schema$Subscription>
    ): void;
    get(callback: BodyResponseCallback<Schema$Subscription>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Subscriptions$Get
        | BodyResponseCallback<Schema$Subscription>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Subscription>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Subscription>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$Subscription>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Subscriptions$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Subscriptions$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://workspaceevents.googleapis.com/';
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
        createAPIRequest<Schema$Subscription>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Subscription>(parameters);
      }
    }

    /**
     * Lists Google Workspace subscriptions. To learn how to use this method, see [List Google Workspace subscriptions](https://developers.google.com/workspace/events/guides/list-subscriptions).
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/workspaceevents.googleapis.com
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
     * const workspaceevents = google.workspaceevents('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/chat.bot',
     *       'https://www.googleapis.com/auth/chat.memberships',
     *       'https://www.googleapis.com/auth/chat.memberships.readonly',
     *       'https://www.googleapis.com/auth/chat.messages',
     *       'https://www.googleapis.com/auth/chat.messages.reactions',
     *       'https://www.googleapis.com/auth/chat.messages.reactions.readonly',
     *       'https://www.googleapis.com/auth/chat.messages.readonly',
     *       'https://www.googleapis.com/auth/chat.spaces',
     *       'https://www.googleapis.com/auth/chat.spaces.readonly',
     *       'https://www.googleapis.com/auth/drive',
     *       'https://www.googleapis.com/auth/drive.file',
     *       'https://www.googleapis.com/auth/drive.metadata',
     *       'https://www.googleapis.com/auth/drive.metadata.readonly',
     *       'https://www.googleapis.com/auth/drive.readonly',
     *       'https://www.googleapis.com/auth/meetings.space.created',
     *       'https://www.googleapis.com/auth/meetings.space.readonly',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await workspaceevents.subscriptions.list({
     *     // Required. A query filter. You can filter subscriptions by event type (`event_types`) and target resource (`target_resource`). You must specify at least one event type in your query. To filter for multiple event types, use the `OR` operator. To filter by both event type and target resource, use the `AND` operator and specify the full resource name, such as `//chat.googleapis.com/spaces/{space\}`. For example, the following queries are valid: ``` event_types:"google.workspace.chat.membership.v1.updated" OR event_types:"google.workspace.chat.message.v1.created" event_types:"google.workspace.chat.message.v1.created" AND target_resource="//chat.googleapis.com/spaces/{space\}" ( event_types:"google.workspace.chat.membership.v1.updated" OR event_types:"google.workspace.chat.message.v1.created" ) AND target_resource="//chat.googleapis.com/spaces/{space\}" ``` The server rejects invalid queries with an `INVALID_ARGUMENT` error.
     *     filter: 'placeholder-value',
     *     // Optional. The maximum number of subscriptions to return. The service might return fewer than this value. If unspecified or set to `0`, up to 50 subscriptions are returned. The maximum value is 100. If you specify a value more than 100, the system only returns 100 subscriptions.
     *     pageSize: 'placeholder-value',
     *     // Optional. A page token, received from a previous list subscriptions call. Provide this parameter to retrieve the subsequent page. When paginating, the filter value should match the call that provided the page token. Passing a different value might lead to unexpected results.
     *     pageToken: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "nextPageToken": "my_nextPageToken",
     *   //   "subscriptions": []
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
      params: Params$Resource$Subscriptions$List,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    list(
      params?: Params$Resource$Subscriptions$List,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$ListSubscriptionsResponse>>;
    list(
      params: Params$Resource$Subscriptions$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Subscriptions$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ListSubscriptionsResponse>,
      callback: BodyResponseCallback<Schema$ListSubscriptionsResponse>
    ): void;
    list(
      params: Params$Resource$Subscriptions$List,
      callback: BodyResponseCallback<Schema$ListSubscriptionsResponse>
    ): void;
    list(
      callback: BodyResponseCallback<Schema$ListSubscriptionsResponse>
    ): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Subscriptions$List
        | BodyResponseCallback<Schema$ListSubscriptionsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ListSubscriptionsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ListSubscriptionsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$ListSubscriptionsResponse>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Subscriptions$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Subscriptions$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://workspaceevents.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/subscriptions').replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: [],
        pathParams: [],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$ListSubscriptionsResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ListSubscriptionsResponse>(parameters);
      }
    }

    /**
     * Updates or renews a Google Workspace subscription. To learn how to use this method, see [Update or renew a Google Workspace subscription](https://developers.google.com/workspace/events/guides/update-subscription). For a subscription on a [Chat target resource](https://developers.google.com/workspace/events/guides/events-chat), you can update a subscription as: - A Chat app by specifying an authorization scope that begins with `chat.app` andgetting one-time administrator approval ([Developer Preview](https://developers.google.com/workspace/preview)). To learn more, see [Authorize as a Chat app with administrator approval](https://developers.google.com/workspace/chat/authenticate-authorize-chat-app). - A user by specifying an authorization scope that doesn't include `app` in its name. To learn more, see [Authorize as a Chat user](https://developers.google.com/workspace/chat/authenticate-authorize-chat-user).
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/workspaceevents.googleapis.com
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
     * const workspaceevents = google.workspaceevents('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/chat.app.memberships',
     *       'https://www.googleapis.com/auth/chat.app.messages.readonly',
     *       'https://www.googleapis.com/auth/chat.app.spaces',
     *       'https://www.googleapis.com/auth/chat.memberships',
     *       'https://www.googleapis.com/auth/chat.memberships.readonly',
     *       'https://www.googleapis.com/auth/chat.messages',
     *       'https://www.googleapis.com/auth/chat.messages.reactions',
     *       'https://www.googleapis.com/auth/chat.messages.reactions.readonly',
     *       'https://www.googleapis.com/auth/chat.messages.readonly',
     *       'https://www.googleapis.com/auth/chat.spaces',
     *       'https://www.googleapis.com/auth/chat.spaces.readonly',
     *       'https://www.googleapis.com/auth/drive',
     *       'https://www.googleapis.com/auth/drive.file',
     *       'https://www.googleapis.com/auth/drive.metadata',
     *       'https://www.googleapis.com/auth/drive.metadata.readonly',
     *       'https://www.googleapis.com/auth/drive.readonly',
     *       'https://www.googleapis.com/auth/meetings.space.created',
     *       'https://www.googleapis.com/auth/meetings.space.readonly',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await workspaceevents.subscriptions.patch({
     *     // Identifier. Resource name of the subscription. Format: `subscriptions/{subscription\}`
     *     name: 'subscriptions/my-subscription',
     *     // Optional. The field to update. If omitted, updates any fields included in the request. You can update one of the following fields in a subscription: * `expire_time`: The timestamp when the subscription expires. * `ttl`: The time-to-live (TTL) or duration of the subscription. * `event_types`: The list of event types to receive about the target resource. When using the `*` wildcard (equivalent to `PUT`), omitted fields are set to empty values and rejected if they're invalid.
     *     updateMask: 'placeholder-value',
     *     // Optional. If set to `true`, validates and previews the request, but doesn't update the subscription.
     *     validateOnly: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "authority": "my_authority",
     *       //   "createTime": "my_createTime",
     *       //   "etag": "my_etag",
     *       //   "eventTypes": [],
     *       //   "expireTime": "my_expireTime",
     *       //   "name": "my_name",
     *       //   "notificationEndpoint": {},
     *       //   "payloadOptions": {},
     *       //   "reconciling": false,
     *       //   "state": "my_state",
     *       //   "suspensionReason": "my_suspensionReason",
     *       //   "targetResource": "my_targetResource",
     *       //   "ttl": "my_ttl",
     *       //   "uid": "my_uid",
     *       //   "updateTime": "my_updateTime"
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
     * ```
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    patch(
      params: Params$Resource$Subscriptions$Patch,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    patch(
      params?: Params$Resource$Subscriptions$Patch,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Operation>>;
    patch(
      params: Params$Resource$Subscriptions$Patch,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    patch(
      params: Params$Resource$Subscriptions$Patch,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    patch(
      params: Params$Resource$Subscriptions$Patch,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    patch(callback: BodyResponseCallback<Schema$Operation>): void;
    patch(
      paramsOrCallback?:
        | Params$Resource$Subscriptions$Patch
        | BodyResponseCallback<Schema$Operation>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Operation>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Operation>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$Operation>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Subscriptions$Patch;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Subscriptions$Patch;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://workspaceevents.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
            method: 'PATCH',
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
        createAPIRequest<Schema$Operation>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Operation>(parameters);
      }
    }

    /**
     * Reactivates a suspended Google Workspace subscription. This method resets your subscription's `State` field to `ACTIVE`. Before you use this method, you must fix the error that suspended the subscription. This method will ignore or reject any subscription that isn't currently in a suspended state. To learn how to use this method, see [Reactivate a Google Workspace subscription](https://developers.google.com/workspace/events/guides/reactivate-subscription). For a subscription on a [Chat target resource](https://developers.google.com/workspace/events/guides/events-chat), you can reactivate a subscription as: - A Chat app by specifying an authorization scope that begins with `chat.app` andgetting one-time administrator approval ([Developer Preview](https://developers.google.com/workspace/preview)). To learn more, see [Authorize as a Chat app with administrator approval](https://developers.google.com/workspace/chat/authenticate-authorize-chat-app). - A user by specifying an authorization scope that doesn't include `app` in its name. To learn more, see [Authorize as a Chat user](https://developers.google.com/workspace/chat/authenticate-authorize-chat-user).
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/workspaceevents.googleapis.com
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
     * const workspaceevents = google.workspaceevents('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/chat.app.memberships',
     *       'https://www.googleapis.com/auth/chat.app.messages.readonly',
     *       'https://www.googleapis.com/auth/chat.app.spaces',
     *       'https://www.googleapis.com/auth/chat.memberships',
     *       'https://www.googleapis.com/auth/chat.memberships.readonly',
     *       'https://www.googleapis.com/auth/chat.messages',
     *       'https://www.googleapis.com/auth/chat.messages.reactions',
     *       'https://www.googleapis.com/auth/chat.messages.reactions.readonly',
     *       'https://www.googleapis.com/auth/chat.messages.readonly',
     *       'https://www.googleapis.com/auth/chat.spaces',
     *       'https://www.googleapis.com/auth/chat.spaces.readonly',
     *       'https://www.googleapis.com/auth/drive',
     *       'https://www.googleapis.com/auth/drive.file',
     *       'https://www.googleapis.com/auth/drive.metadata',
     *       'https://www.googleapis.com/auth/drive.metadata.readonly',
     *       'https://www.googleapis.com/auth/drive.readonly',
     *       'https://www.googleapis.com/auth/meetings.space.created',
     *       'https://www.googleapis.com/auth/meetings.space.readonly',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await workspaceevents.subscriptions.reactivate({
     *     // Required. Resource name of the subscription. Format: `subscriptions/{subscription\}`
     *     name: 'subscriptions/my-subscription',
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
     * ```
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    reactivate(
      params: Params$Resource$Subscriptions$Reactivate,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    reactivate(
      params?: Params$Resource$Subscriptions$Reactivate,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Operation>>;
    reactivate(
      params: Params$Resource$Subscriptions$Reactivate,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    reactivate(
      params: Params$Resource$Subscriptions$Reactivate,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    reactivate(
      params: Params$Resource$Subscriptions$Reactivate,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    reactivate(callback: BodyResponseCallback<Schema$Operation>): void;
    reactivate(
      paramsOrCallback?:
        | Params$Resource$Subscriptions$Reactivate
        | BodyResponseCallback<Schema$Operation>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Operation>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Operation>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$Operation>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Subscriptions$Reactivate;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Subscriptions$Reactivate;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://workspaceevents.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}:reactivate').replace(
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
        createAPIRequest<Schema$Operation>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Operation>(parameters);
      }
    }
  }

  export interface Params$Resource$Subscriptions$Create extends StandardParameters {
    /**
     * Optional. If set to `true`, validates and previews the request, but doesn't create the subscription.
     */
    validateOnly?: boolean;

    /**
     * Request body metadata
     */
    requestBody?: Schema$Subscription;
  }
  export interface Params$Resource$Subscriptions$Delete extends StandardParameters {
    /**
     * Optional. If set to `true` and the subscription isn't found, the request succeeds but doesn't delete the subscription.
     */
    allowMissing?: boolean;
    /**
     * Optional. Etag of the subscription. If present, it must match with the server's etag. Otherwise, request fails with the status `ABORTED`.
     */
    etag?: string;
    /**
     * Required. Resource name of the subscription to delete. Format: `subscriptions/{subscription\}`
     */
    name?: string;
    /**
     * Optional. If set to `true`, validates and previews the request, but doesn't delete the subscription.
     */
    validateOnly?: boolean;
  }
  export interface Params$Resource$Subscriptions$Get extends StandardParameters {
    /**
     * Required. Resource name of the subscription. Format: `subscriptions/{subscription\}`
     */
    name?: string;
  }
  export interface Params$Resource$Subscriptions$List extends StandardParameters {
    /**
     * Required. A query filter. You can filter subscriptions by event type (`event_types`) and target resource (`target_resource`). You must specify at least one event type in your query. To filter for multiple event types, use the `OR` operator. To filter by both event type and target resource, use the `AND` operator and specify the full resource name, such as `//chat.googleapis.com/spaces/{space\}`. For example, the following queries are valid: ``` event_types:"google.workspace.chat.membership.v1.updated" OR event_types:"google.workspace.chat.message.v1.created" event_types:"google.workspace.chat.message.v1.created" AND target_resource="//chat.googleapis.com/spaces/{space\}" ( event_types:"google.workspace.chat.membership.v1.updated" OR event_types:"google.workspace.chat.message.v1.created" ) AND target_resource="//chat.googleapis.com/spaces/{space\}" ``` The server rejects invalid queries with an `INVALID_ARGUMENT` error.
     */
    filter?: string;
    /**
     * Optional. The maximum number of subscriptions to return. The service might return fewer than this value. If unspecified or set to `0`, up to 50 subscriptions are returned. The maximum value is 100. If you specify a value more than 100, the system only returns 100 subscriptions.
     */
    pageSize?: number;
    /**
     * Optional. A page token, received from a previous list subscriptions call. Provide this parameter to retrieve the subsequent page. When paginating, the filter value should match the call that provided the page token. Passing a different value might lead to unexpected results.
     */
    pageToken?: string;
  }
  export interface Params$Resource$Subscriptions$Patch extends StandardParameters {
    /**
     * Identifier. Resource name of the subscription. Format: `subscriptions/{subscription\}`
     */
    name?: string;
    /**
     * Optional. The field to update. If omitted, updates any fields included in the request. You can update one of the following fields in a subscription: * `expire_time`: The timestamp when the subscription expires. * `ttl`: The time-to-live (TTL) or duration of the subscription. * `event_types`: The list of event types to receive about the target resource. When using the `*` wildcard (equivalent to `PUT`), omitted fields are set to empty values and rejected if they're invalid.
     */
    updateMask?: string;
    /**
     * Optional. If set to `true`, validates and previews the request, but doesn't update the subscription.
     */
    validateOnly?: boolean;

    /**
     * Request body metadata
     */
    requestBody?: Schema$Subscription;
  }
  export interface Params$Resource$Subscriptions$Reactivate extends StandardParameters {
    /**
     * Required. Resource name of the subscription. Format: `subscriptions/{subscription\}`
     */
    name?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$ReactivateSubscriptionRequest;
  }

  export class Resource$Tasks {
    context: APIRequestContext;
    pushNotificationConfigs: Resource$Tasks$Pushnotificationconfigs;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.pushNotificationConfigs = new Resource$Tasks$Pushnotificationconfigs(
        this.context
      );
    }

    /**
     * Cancel a task from the agent. If supported one should expect no more task updates for the task.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/workspaceevents.googleapis.com
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
     * const workspaceevents = google.workspaceevents('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await workspaceevents.tasks.cancel({
     *     // The resource name of the task to cancel. Format: tasks/{task_id\}
     *     name: 'tasks/my-task',
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
     *   // {
     *   //   "artifacts": [],
     *   //   "contextId": "my_contextId",
     *   //   "history": [],
     *   //   "id": "my_id",
     *   //   "metadata": {},
     *   //   "status": {}
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
      params: Params$Resource$Tasks$Cancel,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    cancel(
      params?: Params$Resource$Tasks$Cancel,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Task>>;
    cancel(
      params: Params$Resource$Tasks$Cancel,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    cancel(
      params: Params$Resource$Tasks$Cancel,
      options: MethodOptions | BodyResponseCallback<Schema$Task>,
      callback: BodyResponseCallback<Schema$Task>
    ): void;
    cancel(
      params: Params$Resource$Tasks$Cancel,
      callback: BodyResponseCallback<Schema$Task>
    ): void;
    cancel(callback: BodyResponseCallback<Schema$Task>): void;
    cancel(
      paramsOrCallback?:
        | Params$Resource$Tasks$Cancel
        | BodyResponseCallback<Schema$Task>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Task>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Task>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$Task>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback || {}) as Params$Resource$Tasks$Cancel;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Tasks$Cancel;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://workspaceevents.googleapis.com/';
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
        createAPIRequest<Schema$Task>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Task>(parameters);
      }
    }

    /**
     * Get the current state of a task from the agent.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/workspaceevents.googleapis.com
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
     * const workspaceevents = google.workspaceevents('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await workspaceevents.tasks.get({
     *     // The number of most recent messages from the task's history to retrieve.
     *     historyLength: 'placeholder-value',
     *     // Required. The resource name of the task. Format: tasks/{task_id\}
     *     name: 'tasks/my-task',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "artifacts": [],
     *   //   "contextId": "my_contextId",
     *   //   "history": [],
     *   //   "id": "my_id",
     *   //   "metadata": {},
     *   //   "status": {}
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
      params: Params$Resource$Tasks$Get,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    get(
      params?: Params$Resource$Tasks$Get,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Task>>;
    get(
      params: Params$Resource$Tasks$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Tasks$Get,
      options: MethodOptions | BodyResponseCallback<Schema$Task>,
      callback: BodyResponseCallback<Schema$Task>
    ): void;
    get(
      params: Params$Resource$Tasks$Get,
      callback: BodyResponseCallback<Schema$Task>
    ): void;
    get(callback: BodyResponseCallback<Schema$Task>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Tasks$Get
        | BodyResponseCallback<Schema$Task>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Task>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Task>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$Task>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback || {}) as Params$Resource$Tasks$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Tasks$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://workspaceevents.googleapis.com/';
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
        createAPIRequest<Schema$Task>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Task>(parameters);
      }
    }

    /**
     * TaskSubscription is a streaming call that will return a stream of task update events. This attaches the stream to an existing in process task. If the task is complete the stream will return the completed task (like GetTask) and close the stream.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/workspaceevents.googleapis.com
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
     * const workspaceevents = google.workspaceevents('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await workspaceevents.tasks.subscribe({
     *     // The resource name of the task to subscribe to. Format: tasks/{task_id\}
     *     name: 'tasks/my-task',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "artifactUpdate": {},
     *   //   "message": {},
     *   //   "statusUpdate": {},
     *   //   "task": {}
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
    subscribe(
      params: Params$Resource$Tasks$Subscribe,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    subscribe(
      params?: Params$Resource$Tasks$Subscribe,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$StreamResponse>>;
    subscribe(
      params: Params$Resource$Tasks$Subscribe,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    subscribe(
      params: Params$Resource$Tasks$Subscribe,
      options: MethodOptions | BodyResponseCallback<Schema$StreamResponse>,
      callback: BodyResponseCallback<Schema$StreamResponse>
    ): void;
    subscribe(
      params: Params$Resource$Tasks$Subscribe,
      callback: BodyResponseCallback<Schema$StreamResponse>
    ): void;
    subscribe(callback: BodyResponseCallback<Schema$StreamResponse>): void;
    subscribe(
      paramsOrCallback?:
        | Params$Resource$Tasks$Subscribe
        | BodyResponseCallback<Schema$StreamResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$StreamResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$StreamResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$StreamResponse>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback || {}) as Params$Resource$Tasks$Subscribe;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Tasks$Subscribe;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://workspaceevents.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}:subscribe').replace(
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
        createAPIRequest<Schema$StreamResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$StreamResponse>(parameters);
      }
    }
  }

  export interface Params$Resource$Tasks$Cancel extends StandardParameters {
    /**
     * The resource name of the task to cancel. Format: tasks/{task_id\}
     */
    name?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$CancelTaskRequest;
  }
  export interface Params$Resource$Tasks$Get extends StandardParameters {
    /**
     * The number of most recent messages from the task's history to retrieve.
     */
    historyLength?: number;
    /**
     * Required. The resource name of the task. Format: tasks/{task_id\}
     */
    name?: string;
  }
  export interface Params$Resource$Tasks$Subscribe extends StandardParameters {
    /**
     * The resource name of the task to subscribe to. Format: tasks/{task_id\}
     */
    name?: string;
  }

  export class Resource$Tasks$Pushnotificationconfigs {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Set a push notification config for a task.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/workspaceevents.googleapis.com
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
     * const workspaceevents = google.workspaceevents('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await workspaceevents.tasks.pushNotificationConfigs.create({
     *     // Required. The ID for the new config.
     *     configId: 'placeholder-value',
     *     // Required. The parent task resource for this config. Format: tasks/{task_id\}
     *     parent: 'tasks/my-task/pushNotificationConfigs',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "name": "my_name",
     *       //   "pushNotificationConfig": {}
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "name": "my_name",
     *   //   "pushNotificationConfig": {}
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
      params: Params$Resource$Tasks$Pushnotificationconfigs$Create,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    create(
      params?: Params$Resource$Tasks$Pushnotificationconfigs$Create,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$TaskPushNotificationConfig>>;
    create(
      params: Params$Resource$Tasks$Pushnotificationconfigs$Create,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    create(
      params: Params$Resource$Tasks$Pushnotificationconfigs$Create,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$TaskPushNotificationConfig>,
      callback: BodyResponseCallback<Schema$TaskPushNotificationConfig>
    ): void;
    create(
      params: Params$Resource$Tasks$Pushnotificationconfigs$Create,
      callback: BodyResponseCallback<Schema$TaskPushNotificationConfig>
    ): void;
    create(
      callback: BodyResponseCallback<Schema$TaskPushNotificationConfig>
    ): void;
    create(
      paramsOrCallback?:
        | Params$Resource$Tasks$Pushnotificationconfigs$Create
        | BodyResponseCallback<Schema$TaskPushNotificationConfig>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$TaskPushNotificationConfig>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$TaskPushNotificationConfig>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$TaskPushNotificationConfig>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Tasks$Pushnotificationconfigs$Create;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Tasks$Pushnotificationconfigs$Create;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://workspaceevents.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$TaskPushNotificationConfig>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$TaskPushNotificationConfig>(parameters);
      }
    }

    /**
     * Delete a push notification config for a task.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/workspaceevents.googleapis.com
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
     * const workspaceevents = google.workspaceevents('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await workspaceevents.tasks.pushNotificationConfigs.delete({
     *     // The resource name of the config to delete. Format: tasks/{task_id\}/pushNotificationConfigs/{config_id\}
     *     name: 'tasks/my-task/pushNotificationConfigs/my-pushNotificationConfig',
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
     * ```
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    delete(
      params: Params$Resource$Tasks$Pushnotificationconfigs$Delete,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    delete(
      params?: Params$Resource$Tasks$Pushnotificationconfigs$Delete,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Empty>>;
    delete(
      params: Params$Resource$Tasks$Pushnotificationconfigs$Delete,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    delete(
      params: Params$Resource$Tasks$Pushnotificationconfigs$Delete,
      options: MethodOptions | BodyResponseCallback<Schema$Empty>,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    delete(
      params: Params$Resource$Tasks$Pushnotificationconfigs$Delete,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    delete(callback: BodyResponseCallback<Schema$Empty>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Tasks$Pushnotificationconfigs$Delete
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
        {}) as Params$Resource$Tasks$Pushnotificationconfigs$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Tasks$Pushnotificationconfigs$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://workspaceevents.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
            method: 'DELETE',
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
     * Get a push notification config for a task.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/workspaceevents.googleapis.com
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
     * const workspaceevents = google.workspaceevents('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await workspaceevents.tasks.pushNotificationConfigs.get({
     *     // The resource name of the config to retrieve. Format: tasks/{task_id\}/pushNotificationConfigs/{config_id\}
     *     name: 'tasks/my-task/pushNotificationConfigs/my-pushNotificationConfig',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "name": "my_name",
     *   //   "pushNotificationConfig": {}
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
      params: Params$Resource$Tasks$Pushnotificationconfigs$Get,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    get(
      params?: Params$Resource$Tasks$Pushnotificationconfigs$Get,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$TaskPushNotificationConfig>>;
    get(
      params: Params$Resource$Tasks$Pushnotificationconfigs$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Tasks$Pushnotificationconfigs$Get,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$TaskPushNotificationConfig>,
      callback: BodyResponseCallback<Schema$TaskPushNotificationConfig>
    ): void;
    get(
      params: Params$Resource$Tasks$Pushnotificationconfigs$Get,
      callback: BodyResponseCallback<Schema$TaskPushNotificationConfig>
    ): void;
    get(
      callback: BodyResponseCallback<Schema$TaskPushNotificationConfig>
    ): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Tasks$Pushnotificationconfigs$Get
        | BodyResponseCallback<Schema$TaskPushNotificationConfig>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$TaskPushNotificationConfig>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$TaskPushNotificationConfig>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$TaskPushNotificationConfig>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Tasks$Pushnotificationconfigs$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Tasks$Pushnotificationconfigs$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://workspaceevents.googleapis.com/';
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
        createAPIRequest<Schema$TaskPushNotificationConfig>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$TaskPushNotificationConfig>(parameters);
      }
    }

    /**
     * Get a list of push notifications configured for a task.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/workspaceevents.googleapis.com
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
     * const workspaceevents = google.workspaceevents('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await workspaceevents.tasks.pushNotificationConfigs.list({
     *     // For AIP-158 these fields are present. Usually not used/needed. The maximum number of configurations to return. If unspecified, all configs will be returned.
     *     pageSize: 'placeholder-value',
     *     // A page token received from a previous ListTaskPushNotificationConfigRequest call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListTaskPushNotificationConfigRequest` must match the call that provided the page token.
     *     pageToken: 'placeholder-value',
     *     // The parent task resource. Format: tasks/{task_id\}
     *     parent: 'tasks/my-task',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "configs": [],
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
      params: Params$Resource$Tasks$Pushnotificationconfigs$List,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    list(
      params?: Params$Resource$Tasks$Pushnotificationconfigs$List,
      options?: MethodOptions
    ): Promise<
      GaxiosResponseWithHTTP2<Schema$ListTaskPushNotificationConfigResponse>
    >;
    list(
      params: Params$Resource$Tasks$Pushnotificationconfigs$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Tasks$Pushnotificationconfigs$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ListTaskPushNotificationConfigResponse>,
      callback: BodyResponseCallback<Schema$ListTaskPushNotificationConfigResponse>
    ): void;
    list(
      params: Params$Resource$Tasks$Pushnotificationconfigs$List,
      callback: BodyResponseCallback<Schema$ListTaskPushNotificationConfigResponse>
    ): void;
    list(
      callback: BodyResponseCallback<Schema$ListTaskPushNotificationConfigResponse>
    ): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Tasks$Pushnotificationconfigs$List
        | BodyResponseCallback<Schema$ListTaskPushNotificationConfigResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ListTaskPushNotificationConfigResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ListTaskPushNotificationConfigResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<
          GaxiosResponseWithHTTP2<Schema$ListTaskPushNotificationConfigResponse>
        >
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Tasks$Pushnotificationconfigs$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Tasks$Pushnotificationconfigs$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://workspaceevents.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}/pushNotificationConfigs').replace(
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
        createAPIRequest<Schema$ListTaskPushNotificationConfigResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ListTaskPushNotificationConfigResponse>(
          parameters
        );
      }
    }
  }

  export interface Params$Resource$Tasks$Pushnotificationconfigs$Create extends StandardParameters {
    /**
     * Required. The ID for the new config.
     */
    configId?: string;
    /**
     * Required. The parent task resource for this config. Format: tasks/{task_id\}
     */
    parent?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$TaskPushNotificationConfig;
  }
  export interface Params$Resource$Tasks$Pushnotificationconfigs$Delete extends StandardParameters {
    /**
     * The resource name of the config to delete. Format: tasks/{task_id\}/pushNotificationConfigs/{config_id\}
     */
    name?: string;
  }
  export interface Params$Resource$Tasks$Pushnotificationconfigs$Get extends StandardParameters {
    /**
     * The resource name of the config to retrieve. Format: tasks/{task_id\}/pushNotificationConfigs/{config_id\}
     */
    name?: string;
  }
  export interface Params$Resource$Tasks$Pushnotificationconfigs$List extends StandardParameters {
    /**
     * For AIP-158 these fields are present. Usually not used/needed. The maximum number of configurations to return. If unspecified, all configs will be returned.
     */
    pageSize?: number;
    /**
     * A page token received from a previous ListTaskPushNotificationConfigRequest call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListTaskPushNotificationConfigRequest` must match the call that provided the page token.
     */
    pageToken?: string;
    /**
     * The parent task resource. Format: tasks/{task_id\}
     */
    parent?: string;
  }
}
