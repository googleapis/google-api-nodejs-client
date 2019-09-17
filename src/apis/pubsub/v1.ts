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

export namespace pubsub_v1 {
  export interface Options extends GlobalOptions {
    version: 'v1';
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
   * Cloud Pub/Sub API
   *
   * Provides reliable, many-to-many, asynchronous messaging between applications.
   *
   * @example
   * const {google} = require('googleapis');
   * const pubsub = google.pubsub('v1');
   *
   * @namespace pubsub
   * @type {Function}
   * @version v1
   * @variation v1
   * @param {object=} options Options for Pubsub
   */
  export class Pubsub {
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
   * Request for the Acknowledge method.
   */
  export interface Schema$AcknowledgeRequest {
    /**
     * The acknowledgment ID for the messages being acknowledged that was returned by the Pub/Sub system in the `Pull` response. Must not be empty.
     */
    ackIds?: string[] | null;
  }
  /**
   * Associates `members` with a `role`.
   */
  export interface Schema$Binding {
    /**
     * The condition that is associated with this binding. NOTE: An unsatisfied condition will not allow user access via current binding. Different bindings, including their conditions, are examined independently.
     */
    condition?: Schema$Expr;
    /**
     * Specifies the identities requesting access for a Cloud Platform resource. `members` can have the following values:  * `allUsers`: A special identifier that represents anyone who is    on the internet; with or without a Google account.  * `allAuthenticatedUsers`: A special identifier that represents anyone    who is authenticated with a Google account or a service account.  * `user:{emailid}`: An email address that represents a specific Google    account. For example, `alice@example.com` .   * `serviceAccount:{emailid}`: An email address that represents a service    account. For example, `my-other-app@appspot.gserviceaccount.com`.  * `group:{emailid}`: An email address that represents a Google group.    For example, `admins@example.com`.   * `domain:{domain}`: The G Suite domain (primary) that represents all the    users of that domain. For example, `google.com` or `example.com`.
     */
    members?: string[] | null;
    /**
     * Role that is assigned to `members`. For example, `roles/viewer`, `roles/editor`, or `roles/owner`.
     */
    role?: string | null;
  }
  /**
   * Request for the `CreateSnapshot` method.
   */
  export interface Schema$CreateSnapshotRequest {
    /**
     * See &lt;a href=&quot;https://cloud.google.com/pubsub/docs/labels&quot;&gt; Creating and managing labels&lt;/a&gt;.
     */
    labels?: {[key: string]: string} | null;
    /**
     * The subscription whose backlog the snapshot retains. Specifically, the created snapshot is guaranteed to retain:  (a) The existing backlog on the subscription. More precisely, this is      defined as the messages in the subscription&#39;s backlog that are      unacknowledged upon the successful completion of the      `CreateSnapshot` request; as well as:  (b) Any messages published to the subscription&#39;s topic following the      successful completion of the CreateSnapshot request. Format is `projects/{project}/subscriptions/{sub}`.
     */
    subscription?: string | null;
  }
  /**
   * A generic empty message that you can re-use to avoid defining duplicated empty messages in your APIs. A typical example is to use it as the request or the response type of an API method. For instance:      service Foo {       rpc Bar(google.protobuf.Empty) returns (google.protobuf.Empty);     }  The JSON representation for `Empty` is empty JSON object `{}`.
   */
  export interface Schema$Empty {}
  /**
   * A policy that specifies the conditions for resource expiration (i.e., automatic resource deletion).
   */
  export interface Schema$ExpirationPolicy {
    /**
     * Specifies the &quot;time-to-live&quot; duration for an associated resource. The resource expires if it is not active for a period of `ttl`. The definition of &quot;activity&quot; depends on the type of the associated resource. The minimum and maximum allowed values for `ttl` depend on the type of the associated resource, as well. If `ttl` is not set, the associated resource never expires.
     */
    ttl?: string | null;
  }
  /**
   * Represents an expression text. Example:      title: &quot;User account presence&quot;     description: &quot;Determines whether the request has a user account&quot;     expression: &quot;size(request.user) &gt; 0&quot;
   */
  export interface Schema$Expr {
    /**
     * An optional description of the expression. This is a longer text which describes the expression, e.g. when hovered over it in a UI.
     */
    description?: string | null;
    /**
     * Textual representation of an expression in Common Expression Language syntax.  The application context of the containing message determines which well-known feature set of CEL is supported.
     */
    expression?: string | null;
    /**
     * An optional string indicating the location of the expression for error reporting, e.g. a file name and a position in the file.
     */
    location?: string | null;
    /**
     * An optional title for the expression, i.e. a short string describing its purpose. This can be used e.g. in UIs which allow to enter the expression.
     */
    title?: string | null;
  }
  /**
   * Response for the `ListSnapshots` method.
   */
  export interface Schema$ListSnapshotsResponse {
    /**
     * If not empty, indicates that there may be more snapshot that match the request; this value should be passed in a new `ListSnapshotsRequest`.
     */
    nextPageToken?: string | null;
    /**
     * The resulting snapshots.
     */
    snapshots?: Schema$Snapshot[];
  }
  /**
   * Response for the `ListSubscriptions` method.
   */
  export interface Schema$ListSubscriptionsResponse {
    /**
     * If not empty, indicates that there may be more subscriptions that match the request; this value should be passed in a new `ListSubscriptionsRequest` to get more subscriptions.
     */
    nextPageToken?: string | null;
    /**
     * The subscriptions that match the request.
     */
    subscriptions?: Schema$Subscription[];
  }
  /**
   * Response for the `ListTopicSnapshots` method.
   */
  export interface Schema$ListTopicSnapshotsResponse {
    /**
     * If not empty, indicates that there may be more snapshots that match the request; this value should be passed in a new `ListTopicSnapshotsRequest` to get more snapshots.
     */
    nextPageToken?: string | null;
    /**
     * The names of the snapshots that match the request.
     */
    snapshots?: string[] | null;
  }
  /**
   * Response for the `ListTopics` method.
   */
  export interface Schema$ListTopicsResponse {
    /**
     * If not empty, indicates that there may be more topics that match the request; this value should be passed in a new `ListTopicsRequest`.
     */
    nextPageToken?: string | null;
    /**
     * The resulting topics.
     */
    topics?: Schema$Topic[];
  }
  /**
   * Response for the `ListTopicSubscriptions` method.
   */
  export interface Schema$ListTopicSubscriptionsResponse {
    /**
     * If not empty, indicates that there may be more subscriptions that match the request; this value should be passed in a new `ListTopicSubscriptionsRequest` to get more subscriptions.
     */
    nextPageToken?: string | null;
    /**
     * The names of the subscriptions that match the request.
     */
    subscriptions?: string[] | null;
  }
  export interface Schema$MessageStoragePolicy {
    /**
     * A list of IDs of GCP regions where messages that are published to the topic may be persisted in storage. Messages published by publishers running in non-allowed GCP regions (or running outside of GCP altogether) will be routed for storage in one of the allowed regions. An empty list means that no regions are allowed, and is not a valid configuration.
     */
    allowedPersistenceRegions?: string[] | null;
  }
  /**
   * Request for the ModifyAckDeadline method.
   */
  export interface Schema$ModifyAckDeadlineRequest {
    /**
     * The new ack deadline with respect to the time this request was sent to the Pub/Sub system. For example, if the value is 10, the new ack deadline will expire 10 seconds after the `ModifyAckDeadline` call was made. Specifying zero might immediately make the message available for delivery to another subscriber client. This typically results in an increase in the rate of message redeliveries (that is, duplicates). The minimum deadline you can specify is 0 seconds. The maximum deadline you can specify is 600 seconds (10 minutes).
     */
    ackDeadlineSeconds?: number | null;
    /**
     * List of acknowledgment IDs.
     */
    ackIds?: string[] | null;
  }
  /**
   * Request for the ModifyPushConfig method.
   */
  export interface Schema$ModifyPushConfigRequest {
    /**
     * The push configuration for future deliveries.  An empty `pushConfig` indicates that the Pub/Sub system should stop pushing messages from the given subscription and allow messages to be pulled and acknowledged - effectively pausing the subscription if `Pull` or `StreamingPull` is not called.
     */
    pushConfig?: Schema$PushConfig;
  }
  /**
   * Contains information needed for generating an [OpenID Connect token](https://developers.google.com/identity/protocols/OpenIDConnect).
   */
  export interface Schema$OidcToken {
    /**
     * Audience to be used when generating OIDC token. The audience claim identifies the recipients that the JWT is intended for. The audience value is a single case-sensitive string. Having multiple values (array) for the audience field is not supported. More info about the OIDC JWT token audience here: https://tools.ietf.org/html/rfc7519#section-4.1.3 Note: if not specified, the Push endpoint URL will be used.
     */
    audience?: string | null;
    /**
     * [Service account email](https://cloud.google.com/iam/docs/service-accounts) to be used for generating the OIDC token. The caller (for CreateSubscription, UpdateSubscription, and ModifyPushConfig RPCs) must have the iam.serviceAccounts.actAs permission for the service account.
     */
    serviceAccountEmail?: string | null;
  }
  /**
   * Defines an Identity and Access Management (IAM) policy. It is used to specify access control policies for Cloud Platform resources.   A `Policy` consists of a list of `bindings`. A `binding` binds a list of `members` to a `role`, where the members can be user accounts, Google groups, Google domains, and service accounts. A `role` is a named list of permissions defined by IAM.  **JSON Example**      {       &quot;bindings&quot;: [         {           &quot;role&quot;: &quot;roles/owner&quot;,           &quot;members&quot;: [             &quot;user:mike@example.com&quot;,             &quot;group:admins@example.com&quot;,             &quot;domain:google.com&quot;,             &quot;serviceAccount:my-other-app@appspot.gserviceaccount.com&quot;           ]         },         {           &quot;role&quot;: &quot;roles/viewer&quot;,           &quot;members&quot;: [&quot;user:sean@example.com&quot;]         }       ]     }  **YAML Example**      bindings:     - members:       - user:mike@example.com       - group:admins@example.com       - domain:google.com       - serviceAccount:my-other-app@appspot.gserviceaccount.com       role: roles/owner     - members:       - user:sean@example.com       role: roles/viewer   For a description of IAM and its features, see the [IAM developer&#39;s guide](https://cloud.google.com/iam/docs).
   */
  export interface Schema$Policy {
    /**
     * Associates a list of `members` to a `role`. `bindings` with no members will result in an error.
     */
    bindings?: Schema$Binding[];
    /**
     * `etag` is used for optimistic concurrency control as a way to help prevent simultaneous updates of a policy from overwriting each other. It is strongly suggested that systems make use of the `etag` in the read-modify-write cycle to perform policy updates in order to avoid race conditions: An `etag` is returned in the response to `getIamPolicy`, and systems are expected to put that etag in the request to `setIamPolicy` to ensure that their change will be applied to the same version of the policy.  If no `etag` is provided in the call to `setIamPolicy`, then the existing policy is overwritten.
     */
    etag?: string | null;
    /**
     * Specifies the format of the policy.  Valid values are 0, 1, and 3. Requests specifying an invalid value will be rejected.  Policies with any conditional bindings must specify version 3. Policies without any conditional bindings may specify any valid value or leave the field unset.
     */
    version?: number | null;
  }
  /**
   * Request for the Publish method.
   */
  export interface Schema$PublishRequest {
    /**
     * The messages to publish.
     */
    messages?: Schema$PubsubMessage[];
  }
  /**
   * Response for the `Publish` method.
   */
  export interface Schema$PublishResponse {
    /**
     * The server-assigned ID of each published message, in the same order as the messages in the request. IDs are guaranteed to be unique within the topic.
     */
    messageIds?: string[] | null;
  }
  /**
   * A message that is published by publishers and consumed by subscribers. The message must contain either a non-empty data field or at least one attribute. Note that client libraries represent this object differently depending on the language. See the corresponding &lt;a href=&quot;https://cloud.google.com/pubsub/docs/reference/libraries&quot;&gt;client library documentation&lt;/a&gt; for more information. See &lt;a href=&quot;https://cloud.google.com/pubsub/quotas&quot;&gt;Quotas and limits&lt;/a&gt; for more information about message limits.
   */
  export interface Schema$PubsubMessage {
    /**
     * Optional attributes for this message.
     */
    attributes?: {[key: string]: string} | null;
    /**
     * The message data field. If this field is empty, the message must contain at least one attribute.
     */
    data?: string | null;
    /**
     * ID of this message, assigned by the server when the message is published. Guaranteed to be unique within the topic. This value may be read by a subscriber that receives a `PubsubMessage` via a `Pull` call or a push delivery. It must not be populated by the publisher in a `Publish` call.
     */
    messageId?: string | null;
    /**
     * The time at which the message was published, populated by the server when it receives the `Publish` call. It must not be populated by the publisher in a `Publish` call.
     */
    publishTime?: string | null;
  }
  /**
   * Request for the `Pull` method.
   */
  export interface Schema$PullRequest {
    /**
     * The maximum number of messages to return for this request. Must be a positive integer. The Pub/Sub system may return fewer than the number specified.
     */
    maxMessages?: number | null;
    /**
     * If this field set to true, the system will respond immediately even if it there are no messages available to return in the `Pull` response. Otherwise, the system may wait (for a bounded amount of time) until at least one message is available, rather than returning no messages.
     */
    returnImmediately?: boolean | null;
  }
  /**
   * Response for the `Pull` method.
   */
  export interface Schema$PullResponse {
    /**
     * Received Pub/Sub messages. The list will be empty if there are no more messages available in the backlog. For JSON, the response can be entirely empty. The Pub/Sub system may return fewer than the `maxMessages` requested even if there are more messages available in the backlog.
     */
    receivedMessages?: Schema$ReceivedMessage[];
  }
  /**
   * Configuration for a push delivery endpoint.
   */
  export interface Schema$PushConfig {
    /**
     * Endpoint configuration attributes that can be used to control different aspects of the message delivery.  The only currently supported attribute is `x-goog-version`, which you can use to change the format of the pushed message. This attribute indicates the version of the data expected by the endpoint. This controls the shape of the pushed message (i.e., its fields and metadata).  If not present during the `CreateSubscription` call, it will default to the version of the Pub/Sub API used to make such call. If not present in a `ModifyPushConfig` call, its value will not be changed. `GetSubscription` calls will always return a valid version, even if the subscription was created without this attribute.  The only supported values for the `x-goog-version` attribute are:  * `v1beta1`: uses the push format defined in the v1beta1 Pub/Sub API. * `v1` or `v1beta2`: uses the push format defined in the v1 Pub/Sub API.  For example: &lt;pre&gt;&lt;code&gt;attributes { &quot;x-goog-version&quot;: &quot;v1&quot; } &lt;/code&gt;&lt;/pre&gt;
     */
    attributes?: {[key: string]: string} | null;
    /**
     * If specified, Pub/Sub will generate and attach an OIDC JWT token as an `Authorization` header in the HTTP request for every pushed message.
     */
    oidcToken?: Schema$OidcToken;
    /**
     * A URL locating the endpoint to which messages should be pushed. For example, a Webhook endpoint might use &quot;https://example.com/push&quot;.
     */
    pushEndpoint?: string | null;
  }
  /**
   * A message and its corresponding acknowledgment ID.
   */
  export interface Schema$ReceivedMessage {
    /**
     * This ID can be used to acknowledge the received message.
     */
    ackId?: string | null;
    /**
     * The message.
     */
    message?: Schema$PubsubMessage;
  }
  /**
   * Request for the `Seek` method.
   */
  export interface Schema$SeekRequest {
    /**
     * The snapshot to seek to. The snapshot&#39;s topic must be the same as that of the provided subscription. Format is `projects/{project}/snapshots/{snap}`.
     */
    snapshot?: string | null;
    /**
     * The time to seek to. Messages retained in the subscription that were published before this time are marked as acknowledged, and messages retained in the subscription that were published after this time are marked as unacknowledged. Note that this operation affects only those messages retained in the subscription (configured by the combination of `message_retention_duration` and `retain_acked_messages`). For example, if `time` corresponds to a point before the message retention window (or to a point before the system&#39;s notion of the subscription creation time), only retained messages will be marked as unacknowledged, and already-expunged messages will not be restored.
     */
    time?: string | null;
  }
  /**
   * Response for the `Seek` method (this response is empty).
   */
  export interface Schema$SeekResponse {}
  /**
   * Request message for `SetIamPolicy` method.
   */
  export interface Schema$SetIamPolicyRequest {
    /**
     * REQUIRED: The complete policy to be applied to the `resource`. The size of the policy is limited to a few 10s of KB. An empty policy is a valid policy but certain Cloud Platform services (such as Projects) might reject them.
     */
    policy?: Schema$Policy;
  }
  /**
   * A snapshot resource. Snapshots are used in &lt;a href=&quot;https://cloud.google.com/pubsub/docs/replay-overview&quot;&gt;Seek&lt;/a&gt; operations, which allow you to manage message acknowledgments in bulk. That is, you can set the acknowledgment state of messages in an existing subscription to the state captured by a snapshot.
   */
  export interface Schema$Snapshot {
    /**
     * The snapshot is guaranteed to exist up until this time. A newly-created snapshot expires no later than 7 days from the time of its creation. Its exact lifetime is determined at creation by the existing backlog in the source subscription. Specifically, the lifetime of the snapshot is `7 days - (age of oldest unacked message in the subscription)`. For example, consider a subscription whose oldest unacked message is 3 days old. If a snapshot is created from this subscription, the snapshot -- which will always capture this 3-day-old backlog as long as the snapshot exists -- will expire in 4 days. The service will refuse to create a snapshot that would expire in less than 1 hour after creation.
     */
    expireTime?: string | null;
    /**
     * See &lt;a href=&quot;https://cloud.google.com/pubsub/docs/labels&quot;&gt; Creating and managing labels&lt;/a&gt;.
     */
    labels?: {[key: string]: string} | null;
    /**
     * The name of the snapshot.
     */
    name?: string | null;
    /**
     * The name of the topic from which this snapshot is retaining messages.
     */
    topic?: string | null;
  }
  /**
   * A subscription resource.
   */
  export interface Schema$Subscription {
    /**
     * The approximate amount of time (on a best-effort basis) Pub/Sub waits for the subscriber to acknowledge receipt before resending the message. In the interval after the message is delivered and before it is acknowledged, it is considered to be &lt;i&gt;outstanding&lt;/i&gt;. During that time period, the message will not be redelivered (on a best-effort basis).  For pull subscriptions, this value is used as the initial value for the ack deadline. To override this value for a given message, call `ModifyAckDeadline` with the corresponding `ack_id` if using non-streaming pull or send the `ack_id` in a `StreamingModifyAckDeadlineRequest` if using streaming pull. The minimum custom deadline you can specify is 10 seconds. The maximum custom deadline you can specify is 600 seconds (10 minutes). If this parameter is 0, a default value of 10 seconds is used.  For push delivery, this value is also used to set the request timeout for the call to the push endpoint.  If the subscriber never acknowledges the message, the Pub/Sub system will eventually redeliver the message.
     */
    ackDeadlineSeconds?: number | null;
    /**
     * A policy that specifies the conditions for this subscription&#39;s expiration. A subscription is considered active as long as any connected subscriber is successfully consuming messages from the subscription or is issuing operations on the subscription. If `expiration_policy` is not set, a *default policy* with `ttl` of 31 days will be used. The minimum allowed value for `expiration_policy.ttl` is 1 day.
     */
    expirationPolicy?: Schema$ExpirationPolicy;
    /**
     * See &lt;a href=&quot;https://cloud.google.com/pubsub/docs/labels&quot;&gt; Creating and managing labels&lt;/a&gt;.
     */
    labels?: {[key: string]: string} | null;
    /**
     * How long to retain unacknowledged messages in the subscription&#39;s backlog, from the moment a message is published. If `retain_acked_messages` is true, then this also configures the retention of acknowledged messages, and thus configures how far back in time a `Seek` can be done. Defaults to 7 days. Cannot be more than 7 days or less than 10 minutes.
     */
    messageRetentionDuration?: string | null;
    /**
     * The name of the subscription. It must have the format `&quot;projects/{project}/subscriptions/{subscription}&quot;`. `{subscription}` must start with a letter, and contain only letters (`[A-Za-z]`), numbers (`[0-9]`), dashes (`-`), underscores (`_`), periods (`.`), tildes (`~`), plus (`+`) or percent signs (`%`). It must be between 3 and 255 characters in length, and it must not start with `&quot;goog&quot;`.
     */
    name?: string | null;
    /**
     * If push delivery is used with this subscription, this field is used to configure it. An empty `pushConfig` signifies that the subscriber will pull and ack messages using API methods.
     */
    pushConfig?: Schema$PushConfig;
    /**
     * Indicates whether to retain acknowledged messages. If true, then messages are not expunged from the subscription&#39;s backlog, even if they are acknowledged, until they fall out of the `message_retention_duration` window. This must be true if you would like to &lt;a href=&quot;https://cloud.google.com/pubsub/docs/replay-overview#seek_to_a_time&quot;&gt; Seek to a timestamp&lt;/a&gt;.
     */
    retainAckedMessages?: boolean | null;
    /**
     * The name of the topic from which this subscription is receiving messages. Format is `projects/{project}/topics/{topic}`. The value of this field will be `_deleted-topic_` if the topic has been deleted.
     */
    topic?: string | null;
  }
  /**
   * Request message for `TestIamPermissions` method.
   */
  export interface Schema$TestIamPermissionsRequest {
    /**
     * The set of permissions to check for the `resource`. Permissions with wildcards (such as &#39;*&#39; or &#39;storage.*&#39;) are not allowed. For more information see [IAM Overview](https://cloud.google.com/iam/docs/overview#permissions).
     */
    permissions?: string[] | null;
  }
  /**
   * Response message for `TestIamPermissions` method.
   */
  export interface Schema$TestIamPermissionsResponse {
    /**
     * A subset of `TestPermissionsRequest.permissions` that the caller is allowed.
     */
    permissions?: string[] | null;
  }
  /**
   * A topic resource.
   */
  export interface Schema$Topic {
    /**
     * The resource name of the Cloud KMS CryptoKey to be used to protect access to messages published on this topic.  The expected format is `projects/x/locations/x/keyRings/x/cryptoKeys/x.
     */
    kmsKeyName?: string | null;
    /**
     * See &lt;a href=&quot;https://cloud.google.com/pubsub/docs/labels&quot;&gt; Creating and managing labels&lt;/a&gt;.
     */
    labels?: {[key: string]: string} | null;
    /**
     * Policy constraining the set of Google Cloud Platform regions where messages published to the topic may be stored. If not present, then no constraints are in effect.
     */
    messageStoragePolicy?: Schema$MessageStoragePolicy;
    /**
     * The name of the topic. It must have the format `&quot;projects/{project}/topics/{topic}&quot;`. `{topic}` must start with a letter, and contain only letters (`[A-Za-z]`), numbers (`[0-9]`), dashes (`-`), underscores (`_`), periods (`.`), tildes (`~`), plus (`+`) or percent signs (`%`). It must be between 3 and 255 characters in length, and it must not start with `&quot;goog&quot;`.
     */
    name?: string | null;
  }
  /**
   * Request for the UpdateSnapshot method.
   */
  export interface Schema$UpdateSnapshotRequest {
    /**
     * The updated snapshot object.
     */
    snapshot?: Schema$Snapshot;
    /**
     * Indicates which fields in the provided snapshot to update. Must be specified and non-empty.
     */
    updateMask?: string | null;
  }
  /**
   * Request for the UpdateSubscription method.
   */
  export interface Schema$UpdateSubscriptionRequest {
    /**
     * The updated subscription object.
     */
    subscription?: Schema$Subscription;
    /**
     * Indicates which fields in the provided subscription to update. Must be specified and non-empty.
     */
    updateMask?: string | null;
  }
  /**
   * Request for the UpdateTopic method.
   */
  export interface Schema$UpdateTopicRequest {
    /**
     * The updated topic object.
     */
    topic?: Schema$Topic;
    /**
     * Indicates which fields in the provided topic to update. Must be specified and non-empty. Note that if `update_mask` contains &quot;message_storage_policy&quot; then the new value will be determined based on the policy configured at the project or organization level. The `message_storage_policy` must not be set in the `topic` provided above.
     */
    updateMask?: string | null;
  }

  export class Resource$Projects {
    context: APIRequestContext;
    snapshots: Resource$Projects$Snapshots;
    subscriptions: Resource$Projects$Subscriptions;
    topics: Resource$Projects$Topics;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.snapshots = new Resource$Projects$Snapshots(this.context);
      this.subscriptions = new Resource$Projects$Subscriptions(this.context);
      this.topics = new Resource$Projects$Topics(this.context);
    }
  }

  export class Resource$Projects$Snapshots {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * pubsub.projects.snapshots.create
     * @desc Creates a snapshot from the requested subscription. Snapshots are used in <a href="https://cloud.google.com/pubsub/docs/replay-overview">Seek</a> operations, which allow you to manage message acknowledgments in bulk. That is, you can set the acknowledgment state of messages in an existing subscription to the state captured by a snapshot. <br><br>If the snapshot already exists, returns `ALREADY_EXISTS`. If the requested subscription doesn't exist, returns `NOT_FOUND`. If the backlog in the subscription is too old -- and the resulting snapshot would expire in less than 1 hour -- then `FAILED_PRECONDITION` is returned. See also the `Snapshot.expire_time` field. If the name is not provided in the request, the server will assign a random name for this snapshot on the same project as the subscription, conforming to the [resource name format](https://cloud.google.com/pubsub/docs/admin#resource_names). The generated name is populated in the returned Snapshot object. Note that for REST API requests, you must specify a name in the request.
     * @example
     * * // BEFORE RUNNING:
     * // ---------------
     * // 1. If not already done, enable the Cloud Pub/Sub API
     * //    and check the quota for your project at
     * //    https://console.developers.google.com/apis/api/pubsub
     * // 2. This sample uses Application Default Credentials for authentication.
     * //    If not already done, install the gcloud CLI from
     * //    https://cloud.google.com/sdk and run
     * //    `gcloud beta auth application-default login`.
     * //    For more information, see
     * //    https://developers.google.com/identity/protocols/application-default-credentials
     * // 3. Install the Node.js client library by running
     * //    `npm install googleapis --save`
     *
     * const {google} = require('googleapis');
     * var pubsub = google.pubsub('v1');
     *
     * authorize(function(authClient) {
     *   var request = {
     *     // Optional user-provided name for this snapshot.
     *     // If the name is not provided in the request, the server will assign a random
     *     // name for this snapshot on the same project as the subscription.
     *     // Note that for REST API requests, you must specify a name.  See the
     *     // <a href="https://cloud.google.com/pubsub/docs/admin#resource_names">
     *     // resource name rules</a>.
     *     // Format is `projects/{project}/snapshots/{snap}`.
     *     name: 'projects/my-project/snapshots/my-snapshot',  // TODO: Update placeholder value.
     *
     *     resource: {
     *       // TODO: Add desired properties to the request body. All existing properties
     *       // will be replaced.
     *     },
     *
     *     auth: authClient,
     *   };
     *
     *   pubsub.projects.snapshots.create(request, function(err, response) {
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
     *   google.auth.getClient({
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform']
     *   }).then(client => {
     *     callback(client);
     *   }).catch(err => {
     *     console.error('authentication failed: ', err);
     *   });
     * }
     * @alias pubsub.projects.snapshots.create
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.name Optional user-provided name for this snapshot. If the name is not provided in the request, the server will assign a random name for this snapshot on the same project as the subscription. Note that for REST API requests, you must specify a name.  See the <a href="https://cloud.google.com/pubsub/docs/admin#resource_names"> resource name rules</a>. Format is `projects/{project}/snapshots/{snap}`.
     * @param {().CreateSnapshotRequest} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    create(
      params?: Params$Resource$Projects$Snapshots$Create,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Snapshot>;
    create(
      params: Params$Resource$Projects$Snapshots$Create,
      options: MethodOptions | BodyResponseCallback<Schema$Snapshot>,
      callback: BodyResponseCallback<Schema$Snapshot>
    ): void;
    create(
      params: Params$Resource$Projects$Snapshots$Create,
      callback: BodyResponseCallback<Schema$Snapshot>
    ): void;
    create(callback: BodyResponseCallback<Schema$Snapshot>): void;
    create(
      paramsOrCallback?:
        | Params$Resource$Projects$Snapshots$Create
        | BodyResponseCallback<Schema$Snapshot>,
      optionsOrCallback?: MethodOptions | BodyResponseCallback<Schema$Snapshot>,
      callback?: BodyResponseCallback<Schema$Snapshot>
    ): void | GaxiosPromise<Schema$Snapshot> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Snapshots$Create;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Snapshots$Create;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://pubsub.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
            method: 'PUT',
          },
          options
        ),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Snapshot>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Snapshot>(parameters);
      }
    }

    /**
     * pubsub.projects.snapshots.delete
     * @desc Removes an existing snapshot. Snapshots are used in <a href="https://cloud.google.com/pubsub/docs/replay-overview">Seek</a> operations, which allow you to manage message acknowledgments in bulk. That is, you can set the acknowledgment state of messages in an existing subscription to the state captured by a snapshot.<br><br> When the snapshot is deleted, all messages retained in the snapshot are immediately dropped. After a snapshot is deleted, a new one may be created with the same name, but the new one has no association with the old snapshot or its subscription, unless the same subscription is specified.
     * @example
     * * // BEFORE RUNNING:
     * // ---------------
     * // 1. If not already done, enable the Cloud Pub/Sub API
     * //    and check the quota for your project at
     * //    https://console.developers.google.com/apis/api/pubsub
     * // 2. This sample uses Application Default Credentials for authentication.
     * //    If not already done, install the gcloud CLI from
     * //    https://cloud.google.com/sdk and run
     * //    `gcloud beta auth application-default login`.
     * //    For more information, see
     * //    https://developers.google.com/identity/protocols/application-default-credentials
     * // 3. Install the Node.js client library by running
     * //    `npm install googleapis --save`
     *
     * const {google} = require('googleapis');
     * var pubsub = google.pubsub('v1');
     *
     * authorize(function(authClient) {
     *   var request = {
     *     // The name of the snapshot to delete.
     *     // Format is `projects/{project}/snapshots/{snap}`.
     *     snapshot: 'projects/my-project/snapshots/my-snapshot',  // TODO: Update placeholder value.
     *
     *     auth: authClient,
     *   };
     *
     *   pubsub.projects.snapshots.delete(request, function(err) {
     *     if (err) {
     *       console.error(err);
     *       return;
     *     }
     *   });
     * });
     *
     * function authorize(callback) {
     *   google.auth.getClient({
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform']
     *   }).then(client => {
     *     callback(client);
     *   }).catch(err => {
     *     console.error('authentication failed: ', err);
     *   });
     * }
     * @alias pubsub.projects.snapshots.delete
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.snapshot The name of the snapshot to delete. Format is `projects/{project}/snapshots/{snap}`.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    delete(
      params?: Params$Resource$Projects$Snapshots$Delete,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Empty>;
    delete(
      params: Params$Resource$Projects$Snapshots$Delete,
      options: MethodOptions | BodyResponseCallback<Schema$Empty>,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    delete(
      params: Params$Resource$Projects$Snapshots$Delete,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    delete(callback: BodyResponseCallback<Schema$Empty>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Projects$Snapshots$Delete
        | BodyResponseCallback<Schema$Empty>,
      optionsOrCallback?: MethodOptions | BodyResponseCallback<Schema$Empty>,
      callback?: BodyResponseCallback<Schema$Empty>
    ): void | GaxiosPromise<Schema$Empty> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Snapshots$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Snapshots$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://pubsub.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+snapshot}').replace(/([^:]\/)\/+/g, '$1'),
            method: 'DELETE',
          },
          options
        ),
        params,
        requiredParams: ['snapshot'],
        pathParams: ['snapshot'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Empty>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Empty>(parameters);
      }
    }

    /**
     * pubsub.projects.snapshots.get
     * @desc Gets the configuration details of a snapshot. Snapshots are used in <a href="https://cloud.google.com/pubsub/docs/replay-overview">Seek</a> operations, which allow you to manage message acknowledgments in bulk. That is, you can set the acknowledgment state of messages in an existing subscription to the state captured by a snapshot.
     * @example
     * * // BEFORE RUNNING:
     * // ---------------
     * // 1. If not already done, enable the Cloud Pub/Sub API
     * //    and check the quota for your project at
     * //    https://console.developers.google.com/apis/api/pubsub
     * // 2. This sample uses Application Default Credentials for authentication.
     * //    If not already done, install the gcloud CLI from
     * //    https://cloud.google.com/sdk and run
     * //    `gcloud beta auth application-default login`.
     * //    For more information, see
     * //    https://developers.google.com/identity/protocols/application-default-credentials
     * // 3. Install the Node.js client library by running
     * //    `npm install googleapis --save`
     *
     * const {google} = require('googleapis');
     * var pubsub = google.pubsub('v1');
     *
     * authorize(function(authClient) {
     *   var request = {
     *     // The name of the snapshot to get.
     *     // Format is `projects/{project}/snapshots/{snap}`.
     *     snapshot: 'projects/my-project/snapshots/my-snapshot',  // TODO: Update placeholder value.
     *
     *     auth: authClient,
     *   };
     *
     *   pubsub.projects.snapshots.get(request, function(err, response) {
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
     *   google.auth.getClient({
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform']
     *   }).then(client => {
     *     callback(client);
     *   }).catch(err => {
     *     console.error('authentication failed: ', err);
     *   });
     * }
     * @alias pubsub.projects.snapshots.get
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.snapshot The name of the snapshot to get. Format is `projects/{project}/snapshots/{snap}`.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    get(
      params?: Params$Resource$Projects$Snapshots$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Snapshot>;
    get(
      params: Params$Resource$Projects$Snapshots$Get,
      options: MethodOptions | BodyResponseCallback<Schema$Snapshot>,
      callback: BodyResponseCallback<Schema$Snapshot>
    ): void;
    get(
      params: Params$Resource$Projects$Snapshots$Get,
      callback: BodyResponseCallback<Schema$Snapshot>
    ): void;
    get(callback: BodyResponseCallback<Schema$Snapshot>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Projects$Snapshots$Get
        | BodyResponseCallback<Schema$Snapshot>,
      optionsOrCallback?: MethodOptions | BodyResponseCallback<Schema$Snapshot>,
      callback?: BodyResponseCallback<Schema$Snapshot>
    ): void | GaxiosPromise<Schema$Snapshot> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Snapshots$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Snapshots$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://pubsub.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+snapshot}').replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['snapshot'],
        pathParams: ['snapshot'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Snapshot>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Snapshot>(parameters);
      }
    }

    /**
     * pubsub.projects.snapshots.getIamPolicy
     * @desc Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
     * @example
     * * // BEFORE RUNNING:
     * // ---------------
     * // 1. If not already done, enable the Cloud Pub/Sub API
     * //    and check the quota for your project at
     * //    https://console.developers.google.com/apis/api/pubsub
     * // 2. This sample uses Application Default Credentials for authentication.
     * //    If not already done, install the gcloud CLI from
     * //    https://cloud.google.com/sdk and run
     * //    `gcloud beta auth application-default login`.
     * //    For more information, see
     * //    https://developers.google.com/identity/protocols/application-default-credentials
     * // 3. Install the Node.js client library by running
     * //    `npm install googleapis --save`
     *
     * const {google} = require('googleapis');
     * var pubsub = google.pubsub('v1');
     *
     * authorize(function(authClient) {
     *   var request = {
     *     // REQUIRED: The resource for which the policy is being requested.
     *     // See the operation documentation for the appropriate value for this field.
     *     resource_: 'projects/my-project/snapshots/my-snapshot',  // TODO: Update placeholder value.
     *
     *     auth: authClient,
     *   };
     *
     *   pubsub.projects.snapshots.getIamPolicy(request, function(err, response) {
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
     *   google.auth.getClient({
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform']
     *   }).then(client => {
     *     callback(client);
     *   }).catch(err => {
     *     console.error('authentication failed: ', err);
     *   });
     * }
     * @alias pubsub.projects.snapshots.getIamPolicy
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {integer=} params.options.requestedPolicyVersion Optional. The policy format version to be returned.  Valid values are 0, 1, and 3. Requests specifying an invalid value will be rejected.  Requests for policies with any conditional bindings must specify version 3. Policies without any conditional bindings may specify any valid value or leave the field unset.
     * @param {string} params.resource_ REQUIRED: The resource for which the policy is being requested. See the operation documentation for the appropriate value for this field.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    getIamPolicy(
      params?: Params$Resource$Projects$Snapshots$Getiampolicy,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Policy>;
    getIamPolicy(
      params: Params$Resource$Projects$Snapshots$Getiampolicy,
      options: MethodOptions | BodyResponseCallback<Schema$Policy>,
      callback: BodyResponseCallback<Schema$Policy>
    ): void;
    getIamPolicy(
      params: Params$Resource$Projects$Snapshots$Getiampolicy,
      callback: BodyResponseCallback<Schema$Policy>
    ): void;
    getIamPolicy(callback: BodyResponseCallback<Schema$Policy>): void;
    getIamPolicy(
      paramsOrCallback?:
        | Params$Resource$Projects$Snapshots$Getiampolicy
        | BodyResponseCallback<Schema$Policy>,
      optionsOrCallback?: MethodOptions | BodyResponseCallback<Schema$Policy>,
      callback?: BodyResponseCallback<Schema$Policy>
    ): void | GaxiosPromise<Schema$Policy> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Snapshots$Getiampolicy;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Snapshots$Getiampolicy;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://pubsub.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+resource}:getIamPolicy').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['resource'],
        pathParams: ['resource'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Policy>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Policy>(parameters);
      }
    }

    /**
     * pubsub.projects.snapshots.list
     * @desc Lists the existing snapshots. Snapshots are used in <a href="https://cloud.google.com/pubsub/docs/replay-overview">Seek</a> operations, which allow you to manage message acknowledgments in bulk. That is, you can set the acknowledgment state of messages in an existing subscription to the state captured by a snapshot.
     * @example
     * * // BEFORE RUNNING:
     * // ---------------
     * // 1. If not already done, enable the Cloud Pub/Sub API
     * //    and check the quota for your project at
     * //    https://console.developers.google.com/apis/api/pubsub
     * // 2. This sample uses Application Default Credentials for authentication.
     * //    If not already done, install the gcloud CLI from
     * //    https://cloud.google.com/sdk and run
     * //    `gcloud beta auth application-default login`.
     * //    For more information, see
     * //    https://developers.google.com/identity/protocols/application-default-credentials
     * // 3. Install the Node.js client library by running
     * //    `npm install googleapis --save`
     *
     * const {google} = require('googleapis');
     * var pubsub = google.pubsub('v1');
     *
     * authorize(function(authClient) {
     *   var request = {
     *     // The name of the project in which to list snapshots.
     *     // Format is `projects/{project-id}`.
     *     project: 'projects/my-project',  // TODO: Update placeholder value.
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
     *     var snapshotsPage = response['snapshots'];
     *     if (!snapshotsPage) {
     *       return;
     *     }
     *     for (var i = 0; i < snapshotsPage.length; i++) {
     *       // TODO: Change code below to process each resource in `snapshotsPage`:
     *       console.log(JSON.stringify(snapshotsPage[i], null, 2));
     *     }
     *
     *     if (response.nextPageToken) {
     *       request.pageToken = response.nextPageToken;
     *       pubsub.projects.snapshots.list(request, handlePage);
     *     }
     *   };
     *
     *   pubsub.projects.snapshots.list(request, handlePage);
     * });
     *
     * function authorize(callback) {
     *   google.auth.getClient({
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform']
     *   }).then(client => {
     *     callback(client);
     *   }).catch(err => {
     *     console.error('authentication failed: ', err);
     *   });
     * }
     * @alias pubsub.projects.snapshots.list
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {integer=} params.pageSize Maximum number of snapshots to return.
     * @param {string=} params.pageToken The value returned by the last `ListSnapshotsResponse`; indicates that this is a continuation of a prior `ListSnapshots` call, and that the system should return the next page of data.
     * @param {string} params.project The name of the project in which to list snapshots. Format is `projects/{project-id}`.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list(
      params?: Params$Resource$Projects$Snapshots$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ListSnapshotsResponse>;
    list(
      params: Params$Resource$Projects$Snapshots$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ListSnapshotsResponse>,
      callback: BodyResponseCallback<Schema$ListSnapshotsResponse>
    ): void;
    list(
      params: Params$Resource$Projects$Snapshots$List,
      callback: BodyResponseCallback<Schema$ListSnapshotsResponse>
    ): void;
    list(callback: BodyResponseCallback<Schema$ListSnapshotsResponse>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Projects$Snapshots$List
        | BodyResponseCallback<Schema$ListSnapshotsResponse>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$ListSnapshotsResponse>,
      callback?: BodyResponseCallback<Schema$ListSnapshotsResponse>
    ): void | GaxiosPromise<Schema$ListSnapshotsResponse> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Snapshots$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Snapshots$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://pubsub.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+project}/snapshots').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['project'],
        pathParams: ['project'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$ListSnapshotsResponse>(parameters, callback);
      } else {
        return createAPIRequest<Schema$ListSnapshotsResponse>(parameters);
      }
    }

    /**
     * pubsub.projects.snapshots.patch
     * @desc Updates an existing snapshot. Snapshots are used in <a href="https://cloud.google.com/pubsub/docs/replay-overview">Seek</a> operations, which allow you to manage message acknowledgments in bulk. That is, you can set the acknowledgment state of messages in an existing subscription to the state captured by a snapshot.
     * @example
     * * // BEFORE RUNNING:
     * // ---------------
     * // 1. If not already done, enable the Cloud Pub/Sub API
     * //    and check the quota for your project at
     * //    https://console.developers.google.com/apis/api/pubsub
     * // 2. This sample uses Application Default Credentials for authentication.
     * //    If not already done, install the gcloud CLI from
     * //    https://cloud.google.com/sdk and run
     * //    `gcloud beta auth application-default login`.
     * //    For more information, see
     * //    https://developers.google.com/identity/protocols/application-default-credentials
     * // 3. Install the Node.js client library by running
     * //    `npm install googleapis --save`
     *
     * const {google} = require('googleapis');
     * var pubsub = google.pubsub('v1');
     *
     * authorize(function(authClient) {
     *   var request = {
     *     // The name of the snapshot.
     *     name: 'projects/my-project/snapshots/my-snapshot',  // TODO: Update placeholder value.
     *
     *     resource: {
     *       // TODO: Add desired properties to the request body. Only these properties
     *       // will be changed.
     *     },
     *
     *     auth: authClient,
     *   };
     *
     *   pubsub.projects.snapshots.patch(request, function(err, response) {
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
     *   google.auth.getClient({
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform']
     *   }).then(client => {
     *     callback(client);
     *   }).catch(err => {
     *     console.error('authentication failed: ', err);
     *   });
     * }
     * @alias pubsub.projects.snapshots.patch
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.name The name of the snapshot.
     * @param {().UpdateSnapshotRequest} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    patch(
      params?: Params$Resource$Projects$Snapshots$Patch,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Snapshot>;
    patch(
      params: Params$Resource$Projects$Snapshots$Patch,
      options: MethodOptions | BodyResponseCallback<Schema$Snapshot>,
      callback: BodyResponseCallback<Schema$Snapshot>
    ): void;
    patch(
      params: Params$Resource$Projects$Snapshots$Patch,
      callback: BodyResponseCallback<Schema$Snapshot>
    ): void;
    patch(callback: BodyResponseCallback<Schema$Snapshot>): void;
    patch(
      paramsOrCallback?:
        | Params$Resource$Projects$Snapshots$Patch
        | BodyResponseCallback<Schema$Snapshot>,
      optionsOrCallback?: MethodOptions | BodyResponseCallback<Schema$Snapshot>,
      callback?: BodyResponseCallback<Schema$Snapshot>
    ): void | GaxiosPromise<Schema$Snapshot> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Snapshots$Patch;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Snapshots$Patch;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://pubsub.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$Snapshot>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Snapshot>(parameters);
      }
    }

    /**
     * pubsub.projects.snapshots.setIamPolicy
     * @desc Sets the access control policy on the specified resource. Replaces any existing policy.
     * @example
     * * // BEFORE RUNNING:
     * // ---------------
     * // 1. If not already done, enable the Cloud Pub/Sub API
     * //    and check the quota for your project at
     * //    https://console.developers.google.com/apis/api/pubsub
     * // 2. This sample uses Application Default Credentials for authentication.
     * //    If not already done, install the gcloud CLI from
     * //    https://cloud.google.com/sdk and run
     * //    `gcloud beta auth application-default login`.
     * //    For more information, see
     * //    https://developers.google.com/identity/protocols/application-default-credentials
     * // 3. Install the Node.js client library by running
     * //    `npm install googleapis --save`
     *
     * const {google} = require('googleapis');
     * var pubsub = google.pubsub('v1');
     *
     * authorize(function(authClient) {
     *   var request = {
     *     // REQUIRED: The resource for which the policy is being specified.
     *     // See the operation documentation for the appropriate value for this field.
     *     resource_: 'projects/my-project/snapshots/my-snapshot',  // TODO: Update placeholder value.
     *
     *     resource: {
     *       // TODO: Add desired properties to the request body.
     *     },
     *
     *     auth: authClient,
     *   };
     *
     *   pubsub.projects.snapshots.setIamPolicy(request, function(err, response) {
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
     *   google.auth.getClient({
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform']
     *   }).then(client => {
     *     callback(client);
     *   }).catch(err => {
     *     console.error('authentication failed: ', err);
     *   });
     * }
     * @alias pubsub.projects.snapshots.setIamPolicy
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.resource_ REQUIRED: The resource for which the policy is being specified. See the operation documentation for the appropriate value for this field.
     * @param {().SetIamPolicyRequest} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    setIamPolicy(
      params?: Params$Resource$Projects$Snapshots$Setiampolicy,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Policy>;
    setIamPolicy(
      params: Params$Resource$Projects$Snapshots$Setiampolicy,
      options: MethodOptions | BodyResponseCallback<Schema$Policy>,
      callback: BodyResponseCallback<Schema$Policy>
    ): void;
    setIamPolicy(
      params: Params$Resource$Projects$Snapshots$Setiampolicy,
      callback: BodyResponseCallback<Schema$Policy>
    ): void;
    setIamPolicy(callback: BodyResponseCallback<Schema$Policy>): void;
    setIamPolicy(
      paramsOrCallback?:
        | Params$Resource$Projects$Snapshots$Setiampolicy
        | BodyResponseCallback<Schema$Policy>,
      optionsOrCallback?: MethodOptions | BodyResponseCallback<Schema$Policy>,
      callback?: BodyResponseCallback<Schema$Policy>
    ): void | GaxiosPromise<Schema$Policy> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Snapshots$Setiampolicy;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Snapshots$Setiampolicy;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://pubsub.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+resource}:setIamPolicy').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['resource'],
        pathParams: ['resource'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Policy>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Policy>(parameters);
      }
    }

    /**
     * pubsub.projects.snapshots.testIamPermissions
     * @desc Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a NOT_FOUND error.  Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.
     * @example
     * * // BEFORE RUNNING:
     * // ---------------
     * // 1. If not already done, enable the Cloud Pub/Sub API
     * //    and check the quota for your project at
     * //    https://console.developers.google.com/apis/api/pubsub
     * // 2. This sample uses Application Default Credentials for authentication.
     * //    If not already done, install the gcloud CLI from
     * //    https://cloud.google.com/sdk and run
     * //    `gcloud beta auth application-default login`.
     * //    For more information, see
     * //    https://developers.google.com/identity/protocols/application-default-credentials
     * // 3. Install the Node.js client library by running
     * //    `npm install googleapis --save`
     *
     * const {google} = require('googleapis');
     * var pubsub = google.pubsub('v1');
     *
     * authorize(function(authClient) {
     *   var request = {
     *     // REQUIRED: The resource for which the policy detail is being requested.
     *     // See the operation documentation for the appropriate value for this field.
     *     resource_: 'projects/my-project/snapshots/my-snapshot',  // TODO: Update placeholder value.
     *
     *     resource: {
     *       // TODO: Add desired properties to the request body.
     *     },
     *
     *     auth: authClient,
     *   };
     *
     *   pubsub.projects.snapshots.testIamPermissions(request, function(err, response) {
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
     *   google.auth.getClient({
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform']
     *   }).then(client => {
     *     callback(client);
     *   }).catch(err => {
     *     console.error('authentication failed: ', err);
     *   });
     * }
     * @alias pubsub.projects.snapshots.testIamPermissions
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.resource_ REQUIRED: The resource for which the policy detail is being requested. See the operation documentation for the appropriate value for this field.
     * @param {().TestIamPermissionsRequest} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    testIamPermissions(
      params?: Params$Resource$Projects$Snapshots$Testiampermissions,
      options?: MethodOptions
    ): GaxiosPromise<Schema$TestIamPermissionsResponse>;
    testIamPermissions(
      params: Params$Resource$Projects$Snapshots$Testiampermissions,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$TestIamPermissionsResponse>,
      callback: BodyResponseCallback<Schema$TestIamPermissionsResponse>
    ): void;
    testIamPermissions(
      params: Params$Resource$Projects$Snapshots$Testiampermissions,
      callback: BodyResponseCallback<Schema$TestIamPermissionsResponse>
    ): void;
    testIamPermissions(
      callback: BodyResponseCallback<Schema$TestIamPermissionsResponse>
    ): void;
    testIamPermissions(
      paramsOrCallback?:
        | Params$Resource$Projects$Snapshots$Testiampermissions
        | BodyResponseCallback<Schema$TestIamPermissionsResponse>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$TestIamPermissionsResponse>,
      callback?: BodyResponseCallback<Schema$TestIamPermissionsResponse>
    ): void | GaxiosPromise<Schema$TestIamPermissionsResponse> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Snapshots$Testiampermissions;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Snapshots$Testiampermissions;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://pubsub.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+resource}:testIamPermissions').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['resource'],
        pathParams: ['resource'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$TestIamPermissionsResponse>(
          parameters,
          callback
        );
      } else {
        return createAPIRequest<Schema$TestIamPermissionsResponse>(parameters);
      }
    }
  }

  export interface Params$Resource$Projects$Snapshots$Create
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Optional user-provided name for this snapshot. If the name is not provided in the request, the server will assign a random name for this snapshot on the same project as the subscription. Note that for REST API requests, you must specify a name.  See the <a href="https://cloud.google.com/pubsub/docs/admin#resource_names"> resource name rules</a>. Format is `projects/{project}/snapshots/{snap}`.
     */
    name?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$CreateSnapshotRequest;
  }
  export interface Params$Resource$Projects$Snapshots$Delete
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * The name of the snapshot to delete. Format is `projects/{project}/snapshots/{snap}`.
     */
    snapshot?: string;
  }
  export interface Params$Resource$Projects$Snapshots$Get
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * The name of the snapshot to get. Format is `projects/{project}/snapshots/{snap}`.
     */
    snapshot?: string;
  }
  export interface Params$Resource$Projects$Snapshots$Getiampolicy
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Optional. The policy format version to be returned.  Valid values are 0, 1, and 3. Requests specifying an invalid value will be rejected.  Requests for policies with any conditional bindings must specify version 3. Policies without any conditional bindings may specify any valid value or leave the field unset.
     */
    'options.requestedPolicyVersion'?: number;
    /**
     * REQUIRED: The resource for which the policy is being requested. See the operation documentation for the appropriate value for this field.
     */
    resource?: string;
  }
  export interface Params$Resource$Projects$Snapshots$List
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Maximum number of snapshots to return.
     */
    pageSize?: number;
    /**
     * The value returned by the last `ListSnapshotsResponse`; indicates that this is a continuation of a prior `ListSnapshots` call, and that the system should return the next page of data.
     */
    pageToken?: string;
    /**
     * The name of the project in which to list snapshots. Format is `projects/{project-id}`.
     */
    project?: string;
  }
  export interface Params$Resource$Projects$Snapshots$Patch
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * The name of the snapshot.
     */
    name?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$UpdateSnapshotRequest;
  }
  export interface Params$Resource$Projects$Snapshots$Setiampolicy
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * REQUIRED: The resource for which the policy is being specified. See the operation documentation for the appropriate value for this field.
     */
    resource?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$SetIamPolicyRequest;
  }
  export interface Params$Resource$Projects$Snapshots$Testiampermissions
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * REQUIRED: The resource for which the policy detail is being requested. See the operation documentation for the appropriate value for this field.
     */
    resource?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$TestIamPermissionsRequest;
  }

  export class Resource$Projects$Subscriptions {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * pubsub.projects.subscriptions.acknowledge
     * @desc Acknowledges the messages associated with the `ack_ids` in the `AcknowledgeRequest`. The Pub/Sub system can remove the relevant messages from the subscription.  Acknowledging a message whose ack deadline has expired may succeed, but such a message may be redelivered later. Acknowledging a message more than once will not result in an error.
     * @example
     * * // BEFORE RUNNING:
     * // ---------------
     * // 1. If not already done, enable the Cloud Pub/Sub API
     * //    and check the quota for your project at
     * //    https://console.developers.google.com/apis/api/pubsub
     * // 2. This sample uses Application Default Credentials for authentication.
     * //    If not already done, install the gcloud CLI from
     * //    https://cloud.google.com/sdk and run
     * //    `gcloud beta auth application-default login`.
     * //    For more information, see
     * //    https://developers.google.com/identity/protocols/application-default-credentials
     * // 3. Install the Node.js client library by running
     * //    `npm install googleapis --save`
     *
     * const {google} = require('googleapis');
     * var pubsub = google.pubsub('v1');
     *
     * authorize(function(authClient) {
     *   var request = {
     *     // The subscription whose message is being acknowledged.
     *     // Format is `projects/{project}/subscriptions/{sub}`.
     *     subscription: 'projects/my-project/subscriptions/my-subscription',  // TODO: Update placeholder value.
     *
     *     resource: {
     *       // TODO: Add desired properties to the request body.
     *     },
     *
     *     auth: authClient,
     *   };
     *
     *   pubsub.projects.subscriptions.acknowledge(request, function(err) {
     *     if (err) {
     *       console.error(err);
     *       return;
     *     }
     *   });
     * });
     *
     * function authorize(callback) {
     *   google.auth.getClient({
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform']
     *   }).then(client => {
     *     callback(client);
     *   }).catch(err => {
     *     console.error('authentication failed: ', err);
     *   });
     * }
     * @alias pubsub.projects.subscriptions.acknowledge
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.subscription The subscription whose message is being acknowledged. Format is `projects/{project}/subscriptions/{sub}`.
     * @param {().AcknowledgeRequest} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    acknowledge(
      params?: Params$Resource$Projects$Subscriptions$Acknowledge,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Empty>;
    acknowledge(
      params: Params$Resource$Projects$Subscriptions$Acknowledge,
      options: MethodOptions | BodyResponseCallback<Schema$Empty>,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    acknowledge(
      params: Params$Resource$Projects$Subscriptions$Acknowledge,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    acknowledge(callback: BodyResponseCallback<Schema$Empty>): void;
    acknowledge(
      paramsOrCallback?:
        | Params$Resource$Projects$Subscriptions$Acknowledge
        | BodyResponseCallback<Schema$Empty>,
      optionsOrCallback?: MethodOptions | BodyResponseCallback<Schema$Empty>,
      callback?: BodyResponseCallback<Schema$Empty>
    ): void | GaxiosPromise<Schema$Empty> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Subscriptions$Acknowledge;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Subscriptions$Acknowledge;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://pubsub.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+subscription}:acknowledge').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['subscription'],
        pathParams: ['subscription'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Empty>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Empty>(parameters);
      }
    }

    /**
     * pubsub.projects.subscriptions.create
     * @desc Creates a subscription to a given topic. See the <a href="https://cloud.google.com/pubsub/docs/admin#resource_names"> resource name rules</a>. If the subscription already exists, returns `ALREADY_EXISTS`. If the corresponding topic doesn't exist, returns `NOT_FOUND`.  If the name is not provided in the request, the server will assign a random name for this subscription on the same project as the topic, conforming to the [resource name format](https://cloud.google.com/pubsub/docs/admin#resource_names). The generated name is populated in the returned Subscription object. Note that for REST API requests, you must specify a name in the request.
     * @example
     * * // BEFORE RUNNING:
     * // ---------------
     * // 1. If not already done, enable the Cloud Pub/Sub API
     * //    and check the quota for your project at
     * //    https://console.developers.google.com/apis/api/pubsub
     * // 2. This sample uses Application Default Credentials for authentication.
     * //    If not already done, install the gcloud CLI from
     * //    https://cloud.google.com/sdk and run
     * //    `gcloud beta auth application-default login`.
     * //    For more information, see
     * //    https://developers.google.com/identity/protocols/application-default-credentials
     * // 3. Install the Node.js client library by running
     * //    `npm install googleapis --save`
     *
     * const {google} = require('googleapis');
     * var pubsub = google.pubsub('v1');
     *
     * authorize(function(authClient) {
     *   var request = {
     *     // The name of the subscription. It must have the format
     *     // `"projects/{project}/subscriptions/{subscription}"`. `{subscription}` must
     *     // start with a letter, and contain only letters (`[A-Za-z]`), numbers
     *     // (`[0-9]`), dashes (`-`), underscores (`_`), periods (`.`), tildes (`~`),
     *     // plus (`+`) or percent signs (`%`). It must be between 3 and 255 characters
     *     // in length, and it must not start with `"goog"`.
     *     name: 'projects/my-project/subscriptions/my-subscription',  // TODO: Update placeholder value.
     *
     *     resource: {
     *       // TODO: Add desired properties to the request body. All existing properties
     *       // will be replaced.
     *     },
     *
     *     auth: authClient,
     *   };
     *
     *   pubsub.projects.subscriptions.create(request, function(err, response) {
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
     *   google.auth.getClient({
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform']
     *   }).then(client => {
     *     callback(client);
     *   }).catch(err => {
     *     console.error('authentication failed: ', err);
     *   });
     * }
     * @alias pubsub.projects.subscriptions.create
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.name The name of the subscription. It must have the format `"projects/{project}/subscriptions/{subscription}"`. `{subscription}` must start with a letter, and contain only letters (`[A-Za-z]`), numbers (`[0-9]`), dashes (`-`), underscores (`_`), periods (`.`), tildes (`~`), plus (`+`) or percent signs (`%`). It must be between 3 and 255 characters in length, and it must not start with `"goog"`.
     * @param {().Subscription} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    create(
      params?: Params$Resource$Projects$Subscriptions$Create,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Subscription>;
    create(
      params: Params$Resource$Projects$Subscriptions$Create,
      options: MethodOptions | BodyResponseCallback<Schema$Subscription>,
      callback: BodyResponseCallback<Schema$Subscription>
    ): void;
    create(
      params: Params$Resource$Projects$Subscriptions$Create,
      callback: BodyResponseCallback<Schema$Subscription>
    ): void;
    create(callback: BodyResponseCallback<Schema$Subscription>): void;
    create(
      paramsOrCallback?:
        | Params$Resource$Projects$Subscriptions$Create
        | BodyResponseCallback<Schema$Subscription>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$Subscription>,
      callback?: BodyResponseCallback<Schema$Subscription>
    ): void | GaxiosPromise<Schema$Subscription> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Subscriptions$Create;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Subscriptions$Create;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://pubsub.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
            method: 'PUT',
          },
          options
        ),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Subscription>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Subscription>(parameters);
      }
    }

    /**
     * pubsub.projects.subscriptions.delete
     * @desc Deletes an existing subscription. All messages retained in the subscription are immediately dropped. Calls to `Pull` after deletion will return `NOT_FOUND`. After a subscription is deleted, a new one may be created with the same name, but the new one has no association with the old subscription or its topic unless the same topic is specified.
     * @example
     * * // BEFORE RUNNING:
     * // ---------------
     * // 1. If not already done, enable the Cloud Pub/Sub API
     * //    and check the quota for your project at
     * //    https://console.developers.google.com/apis/api/pubsub
     * // 2. This sample uses Application Default Credentials for authentication.
     * //    If not already done, install the gcloud CLI from
     * //    https://cloud.google.com/sdk and run
     * //    `gcloud beta auth application-default login`.
     * //    For more information, see
     * //    https://developers.google.com/identity/protocols/application-default-credentials
     * // 3. Install the Node.js client library by running
     * //    `npm install googleapis --save`
     *
     * const {google} = require('googleapis');
     * var pubsub = google.pubsub('v1');
     *
     * authorize(function(authClient) {
     *   var request = {
     *     // The subscription to delete.
     *     // Format is `projects/{project}/subscriptions/{sub}`.
     *     subscription: 'projects/my-project/subscriptions/my-subscription',  // TODO: Update placeholder value.
     *
     *     auth: authClient,
     *   };
     *
     *   pubsub.projects.subscriptions.delete(request, function(err) {
     *     if (err) {
     *       console.error(err);
     *       return;
     *     }
     *   });
     * });
     *
     * function authorize(callback) {
     *   google.auth.getClient({
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform']
     *   }).then(client => {
     *     callback(client);
     *   }).catch(err => {
     *     console.error('authentication failed: ', err);
     *   });
     * }
     * @alias pubsub.projects.subscriptions.delete
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.subscription The subscription to delete. Format is `projects/{project}/subscriptions/{sub}`.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    delete(
      params?: Params$Resource$Projects$Subscriptions$Delete,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Empty>;
    delete(
      params: Params$Resource$Projects$Subscriptions$Delete,
      options: MethodOptions | BodyResponseCallback<Schema$Empty>,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    delete(
      params: Params$Resource$Projects$Subscriptions$Delete,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    delete(callback: BodyResponseCallback<Schema$Empty>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Projects$Subscriptions$Delete
        | BodyResponseCallback<Schema$Empty>,
      optionsOrCallback?: MethodOptions | BodyResponseCallback<Schema$Empty>,
      callback?: BodyResponseCallback<Schema$Empty>
    ): void | GaxiosPromise<Schema$Empty> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Subscriptions$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Subscriptions$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://pubsub.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+subscription}').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'DELETE',
          },
          options
        ),
        params,
        requiredParams: ['subscription'],
        pathParams: ['subscription'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Empty>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Empty>(parameters);
      }
    }

    /**
     * pubsub.projects.subscriptions.get
     * @desc Gets the configuration details of a subscription.
     * @example
     * * // BEFORE RUNNING:
     * // ---------------
     * // 1. If not already done, enable the Cloud Pub/Sub API
     * //    and check the quota for your project at
     * //    https://console.developers.google.com/apis/api/pubsub
     * // 2. This sample uses Application Default Credentials for authentication.
     * //    If not already done, install the gcloud CLI from
     * //    https://cloud.google.com/sdk and run
     * //    `gcloud beta auth application-default login`.
     * //    For more information, see
     * //    https://developers.google.com/identity/protocols/application-default-credentials
     * // 3. Install the Node.js client library by running
     * //    `npm install googleapis --save`
     *
     * const {google} = require('googleapis');
     * var pubsub = google.pubsub('v1');
     *
     * authorize(function(authClient) {
     *   var request = {
     *     // The name of the subscription to get.
     *     // Format is `projects/{project}/subscriptions/{sub}`.
     *     subscription: 'projects/my-project/subscriptions/my-subscription',  // TODO: Update placeholder value.
     *
     *     auth: authClient,
     *   };
     *
     *   pubsub.projects.subscriptions.get(request, function(err, response) {
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
     *   google.auth.getClient({
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform']
     *   }).then(client => {
     *     callback(client);
     *   }).catch(err => {
     *     console.error('authentication failed: ', err);
     *   });
     * }
     * @alias pubsub.projects.subscriptions.get
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.subscription The name of the subscription to get. Format is `projects/{project}/subscriptions/{sub}`.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    get(
      params?: Params$Resource$Projects$Subscriptions$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Subscription>;
    get(
      params: Params$Resource$Projects$Subscriptions$Get,
      options: MethodOptions | BodyResponseCallback<Schema$Subscription>,
      callback: BodyResponseCallback<Schema$Subscription>
    ): void;
    get(
      params: Params$Resource$Projects$Subscriptions$Get,
      callback: BodyResponseCallback<Schema$Subscription>
    ): void;
    get(callback: BodyResponseCallback<Schema$Subscription>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Projects$Subscriptions$Get
        | BodyResponseCallback<Schema$Subscription>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$Subscription>,
      callback?: BodyResponseCallback<Schema$Subscription>
    ): void | GaxiosPromise<Schema$Subscription> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Subscriptions$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Subscriptions$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://pubsub.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+subscription}').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['subscription'],
        pathParams: ['subscription'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Subscription>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Subscription>(parameters);
      }
    }

    /**
     * pubsub.projects.subscriptions.getIamPolicy
     * @desc Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
     * @example
     * * // BEFORE RUNNING:
     * // ---------------
     * // 1. If not already done, enable the Cloud Pub/Sub API
     * //    and check the quota for your project at
     * //    https://console.developers.google.com/apis/api/pubsub
     * // 2. This sample uses Application Default Credentials for authentication.
     * //    If not already done, install the gcloud CLI from
     * //    https://cloud.google.com/sdk and run
     * //    `gcloud beta auth application-default login`.
     * //    For more information, see
     * //    https://developers.google.com/identity/protocols/application-default-credentials
     * // 3. Install the Node.js client library by running
     * //    `npm install googleapis --save`
     *
     * const {google} = require('googleapis');
     * var pubsub = google.pubsub('v1');
     *
     * authorize(function(authClient) {
     *   var request = {
     *     // REQUIRED: The resource for which the policy is being requested.
     *     // See the operation documentation for the appropriate value for this field.
     *     resource_: 'projects/my-project/subscriptions/my-subscription',  // TODO: Update placeholder value.
     *
     *     auth: authClient,
     *   };
     *
     *   pubsub.projects.subscriptions.getIamPolicy(request, function(err, response) {
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
     *   google.auth.getClient({
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform']
     *   }).then(client => {
     *     callback(client);
     *   }).catch(err => {
     *     console.error('authentication failed: ', err);
     *   });
     * }
     * @alias pubsub.projects.subscriptions.getIamPolicy
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {integer=} params.options.requestedPolicyVersion Optional. The policy format version to be returned.  Valid values are 0, 1, and 3. Requests specifying an invalid value will be rejected.  Requests for policies with any conditional bindings must specify version 3. Policies without any conditional bindings may specify any valid value or leave the field unset.
     * @param {string} params.resource_ REQUIRED: The resource for which the policy is being requested. See the operation documentation for the appropriate value for this field.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    getIamPolicy(
      params?: Params$Resource$Projects$Subscriptions$Getiampolicy,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Policy>;
    getIamPolicy(
      params: Params$Resource$Projects$Subscriptions$Getiampolicy,
      options: MethodOptions | BodyResponseCallback<Schema$Policy>,
      callback: BodyResponseCallback<Schema$Policy>
    ): void;
    getIamPolicy(
      params: Params$Resource$Projects$Subscriptions$Getiampolicy,
      callback: BodyResponseCallback<Schema$Policy>
    ): void;
    getIamPolicy(callback: BodyResponseCallback<Schema$Policy>): void;
    getIamPolicy(
      paramsOrCallback?:
        | Params$Resource$Projects$Subscriptions$Getiampolicy
        | BodyResponseCallback<Schema$Policy>,
      optionsOrCallback?: MethodOptions | BodyResponseCallback<Schema$Policy>,
      callback?: BodyResponseCallback<Schema$Policy>
    ): void | GaxiosPromise<Schema$Policy> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Subscriptions$Getiampolicy;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Subscriptions$Getiampolicy;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://pubsub.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+resource}:getIamPolicy').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['resource'],
        pathParams: ['resource'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Policy>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Policy>(parameters);
      }
    }

    /**
     * pubsub.projects.subscriptions.list
     * @desc Lists matching subscriptions.
     * @example
     * * // BEFORE RUNNING:
     * // ---------------
     * // 1. If not already done, enable the Cloud Pub/Sub API
     * //    and check the quota for your project at
     * //    https://console.developers.google.com/apis/api/pubsub
     * // 2. This sample uses Application Default Credentials for authentication.
     * //    If not already done, install the gcloud CLI from
     * //    https://cloud.google.com/sdk and run
     * //    `gcloud beta auth application-default login`.
     * //    For more information, see
     * //    https://developers.google.com/identity/protocols/application-default-credentials
     * // 3. Install the Node.js client library by running
     * //    `npm install googleapis --save`
     *
     * const {google} = require('googleapis');
     * var pubsub = google.pubsub('v1');
     *
     * authorize(function(authClient) {
     *   var request = {
     *     // The name of the project in which to list subscriptions.
     *     // Format is `projects/{project-id}`.
     *     project: 'projects/my-project',  // TODO: Update placeholder value.
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
     *     var subscriptionsPage = response['subscriptions'];
     *     if (!subscriptionsPage) {
     *       return;
     *     }
     *     for (var i = 0; i < subscriptionsPage.length; i++) {
     *       // TODO: Change code below to process each resource in `subscriptionsPage`:
     *       console.log(JSON.stringify(subscriptionsPage[i], null, 2));
     *     }
     *
     *     if (response.nextPageToken) {
     *       request.pageToken = response.nextPageToken;
     *       pubsub.projects.subscriptions.list(request, handlePage);
     *     }
     *   };
     *
     *   pubsub.projects.subscriptions.list(request, handlePage);
     * });
     *
     * function authorize(callback) {
     *   google.auth.getClient({
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform']
     *   }).then(client => {
     *     callback(client);
     *   }).catch(err => {
     *     console.error('authentication failed: ', err);
     *   });
     * }
     * @alias pubsub.projects.subscriptions.list
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {integer=} params.pageSize Maximum number of subscriptions to return.
     * @param {string=} params.pageToken The value returned by the last `ListSubscriptionsResponse`; indicates that this is a continuation of a prior `ListSubscriptions` call, and that the system should return the next page of data.
     * @param {string} params.project The name of the project in which to list subscriptions. Format is `projects/{project-id}`.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list(
      params?: Params$Resource$Projects$Subscriptions$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ListSubscriptionsResponse>;
    list(
      params: Params$Resource$Projects$Subscriptions$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ListSubscriptionsResponse>,
      callback: BodyResponseCallback<Schema$ListSubscriptionsResponse>
    ): void;
    list(
      params: Params$Resource$Projects$Subscriptions$List,
      callback: BodyResponseCallback<Schema$ListSubscriptionsResponse>
    ): void;
    list(
      callback: BodyResponseCallback<Schema$ListSubscriptionsResponse>
    ): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Projects$Subscriptions$List
        | BodyResponseCallback<Schema$ListSubscriptionsResponse>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$ListSubscriptionsResponse>,
      callback?: BodyResponseCallback<Schema$ListSubscriptionsResponse>
    ): void | GaxiosPromise<Schema$ListSubscriptionsResponse> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Subscriptions$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Subscriptions$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://pubsub.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+project}/subscriptions').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['project'],
        pathParams: ['project'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$ListSubscriptionsResponse>(
          parameters,
          callback
        );
      } else {
        return createAPIRequest<Schema$ListSubscriptionsResponse>(parameters);
      }
    }

    /**
     * pubsub.projects.subscriptions.modifyAckDeadline
     * @desc Modifies the ack deadline for a specific message. This method is useful to indicate that more time is needed to process a message by the subscriber, or to make the message available for redelivery if the processing was interrupted. Note that this does not modify the subscription-level `ackDeadlineSeconds` used for subsequent messages.
     * @example
     * * // BEFORE RUNNING:
     * // ---------------
     * // 1. If not already done, enable the Cloud Pub/Sub API
     * //    and check the quota for your project at
     * //    https://console.developers.google.com/apis/api/pubsub
     * // 2. This sample uses Application Default Credentials for authentication.
     * //    If not already done, install the gcloud CLI from
     * //    https://cloud.google.com/sdk and run
     * //    `gcloud beta auth application-default login`.
     * //    For more information, see
     * //    https://developers.google.com/identity/protocols/application-default-credentials
     * // 3. Install the Node.js client library by running
     * //    `npm install googleapis --save`
     *
     * const {google} = require('googleapis');
     * var pubsub = google.pubsub('v1');
     *
     * authorize(function(authClient) {
     *   var request = {
     *     // The name of the subscription.
     *     // Format is `projects/{project}/subscriptions/{sub}`.
     *     subscription: 'projects/my-project/subscriptions/my-subscription',  // TODO: Update placeholder value.
     *
     *     resource: {
     *       // TODO: Add desired properties to the request body.
     *     },
     *
     *     auth: authClient,
     *   };
     *
     *   pubsub.projects.subscriptions.modifyAckDeadline(request, function(err) {
     *     if (err) {
     *       console.error(err);
     *       return;
     *     }
     *   });
     * });
     *
     * function authorize(callback) {
     *   google.auth.getClient({
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform']
     *   }).then(client => {
     *     callback(client);
     *   }).catch(err => {
     *     console.error('authentication failed: ', err);
     *   });
     * }
     * @alias pubsub.projects.subscriptions.modifyAckDeadline
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.subscription The name of the subscription. Format is `projects/{project}/subscriptions/{sub}`.
     * @param {().ModifyAckDeadlineRequest} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    modifyAckDeadline(
      params?: Params$Resource$Projects$Subscriptions$Modifyackdeadline,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Empty>;
    modifyAckDeadline(
      params: Params$Resource$Projects$Subscriptions$Modifyackdeadline,
      options: MethodOptions | BodyResponseCallback<Schema$Empty>,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    modifyAckDeadline(
      params: Params$Resource$Projects$Subscriptions$Modifyackdeadline,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    modifyAckDeadline(callback: BodyResponseCallback<Schema$Empty>): void;
    modifyAckDeadline(
      paramsOrCallback?:
        | Params$Resource$Projects$Subscriptions$Modifyackdeadline
        | BodyResponseCallback<Schema$Empty>,
      optionsOrCallback?: MethodOptions | BodyResponseCallback<Schema$Empty>,
      callback?: BodyResponseCallback<Schema$Empty>
    ): void | GaxiosPromise<Schema$Empty> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Subscriptions$Modifyackdeadline;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Subscriptions$Modifyackdeadline;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://pubsub.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+subscription}:modifyAckDeadline').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['subscription'],
        pathParams: ['subscription'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Empty>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Empty>(parameters);
      }
    }

    /**
     * pubsub.projects.subscriptions.modifyPushConfig
     * @desc Modifies the `PushConfig` for a specified subscription.  This may be used to change a push subscription to a pull one (signified by an empty `PushConfig`) or vice versa, or change the endpoint URL and other attributes of a push subscription. Messages will accumulate for delivery continuously through the call regardless of changes to the `PushConfig`.
     * @example
     * * // BEFORE RUNNING:
     * // ---------------
     * // 1. If not already done, enable the Cloud Pub/Sub API
     * //    and check the quota for your project at
     * //    https://console.developers.google.com/apis/api/pubsub
     * // 2. This sample uses Application Default Credentials for authentication.
     * //    If not already done, install the gcloud CLI from
     * //    https://cloud.google.com/sdk and run
     * //    `gcloud beta auth application-default login`.
     * //    For more information, see
     * //    https://developers.google.com/identity/protocols/application-default-credentials
     * // 3. Install the Node.js client library by running
     * //    `npm install googleapis --save`
     *
     * const {google} = require('googleapis');
     * var pubsub = google.pubsub('v1');
     *
     * authorize(function(authClient) {
     *   var request = {
     *     // The name of the subscription.
     *     // Format is `projects/{project}/subscriptions/{sub}`.
     *     subscription: 'projects/my-project/subscriptions/my-subscription',  // TODO: Update placeholder value.
     *
     *     resource: {
     *       // TODO: Add desired properties to the request body.
     *     },
     *
     *     auth: authClient,
     *   };
     *
     *   pubsub.projects.subscriptions.modifyPushConfig(request, function(err) {
     *     if (err) {
     *       console.error(err);
     *       return;
     *     }
     *   });
     * });
     *
     * function authorize(callback) {
     *   google.auth.getClient({
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform']
     *   }).then(client => {
     *     callback(client);
     *   }).catch(err => {
     *     console.error('authentication failed: ', err);
     *   });
     * }
     * @alias pubsub.projects.subscriptions.modifyPushConfig
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.subscription The name of the subscription. Format is `projects/{project}/subscriptions/{sub}`.
     * @param {().ModifyPushConfigRequest} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    modifyPushConfig(
      params?: Params$Resource$Projects$Subscriptions$Modifypushconfig,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Empty>;
    modifyPushConfig(
      params: Params$Resource$Projects$Subscriptions$Modifypushconfig,
      options: MethodOptions | BodyResponseCallback<Schema$Empty>,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    modifyPushConfig(
      params: Params$Resource$Projects$Subscriptions$Modifypushconfig,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    modifyPushConfig(callback: BodyResponseCallback<Schema$Empty>): void;
    modifyPushConfig(
      paramsOrCallback?:
        | Params$Resource$Projects$Subscriptions$Modifypushconfig
        | BodyResponseCallback<Schema$Empty>,
      optionsOrCallback?: MethodOptions | BodyResponseCallback<Schema$Empty>,
      callback?: BodyResponseCallback<Schema$Empty>
    ): void | GaxiosPromise<Schema$Empty> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Subscriptions$Modifypushconfig;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Subscriptions$Modifypushconfig;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://pubsub.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+subscription}:modifyPushConfig').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['subscription'],
        pathParams: ['subscription'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Empty>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Empty>(parameters);
      }
    }

    /**
     * pubsub.projects.subscriptions.patch
     * @desc Updates an existing subscription. Note that certain properties of a subscription, such as its topic, are not modifiable.
     * @example
     * * // BEFORE RUNNING:
     * // ---------------
     * // 1. If not already done, enable the Cloud Pub/Sub API
     * //    and check the quota for your project at
     * //    https://console.developers.google.com/apis/api/pubsub
     * // 2. This sample uses Application Default Credentials for authentication.
     * //    If not already done, install the gcloud CLI from
     * //    https://cloud.google.com/sdk and run
     * //    `gcloud beta auth application-default login`.
     * //    For more information, see
     * //    https://developers.google.com/identity/protocols/application-default-credentials
     * // 3. Install the Node.js client library by running
     * //    `npm install googleapis --save`
     *
     * const {google} = require('googleapis');
     * var pubsub = google.pubsub('v1');
     *
     * authorize(function(authClient) {
     *   var request = {
     *     // The name of the subscription. It must have the format
     *     // `"projects/{project}/subscriptions/{subscription}"`. `{subscription}` must
     *     // start with a letter, and contain only letters (`[A-Za-z]`), numbers
     *     // (`[0-9]`), dashes (`-`), underscores (`_`), periods (`.`), tildes (`~`),
     *     // plus (`+`) or percent signs (`%`). It must be between 3 and 255 characters
     *     // in length, and it must not start with `"goog"`.
     *     name: 'projects/my-project/subscriptions/my-subscription',  // TODO: Update placeholder value.
     *
     *     resource: {
     *       // TODO: Add desired properties to the request body. Only these properties
     *       // will be changed.
     *     },
     *
     *     auth: authClient,
     *   };
     *
     *   pubsub.projects.subscriptions.patch(request, function(err, response) {
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
     *   google.auth.getClient({
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform']
     *   }).then(client => {
     *     callback(client);
     *   }).catch(err => {
     *     console.error('authentication failed: ', err);
     *   });
     * }
     * @alias pubsub.projects.subscriptions.patch
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.name The name of the subscription. It must have the format `"projects/{project}/subscriptions/{subscription}"`. `{subscription}` must start with a letter, and contain only letters (`[A-Za-z]`), numbers (`[0-9]`), dashes (`-`), underscores (`_`), periods (`.`), tildes (`~`), plus (`+`) or percent signs (`%`). It must be between 3 and 255 characters in length, and it must not start with `"goog"`.
     * @param {().UpdateSubscriptionRequest} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    patch(
      params?: Params$Resource$Projects$Subscriptions$Patch,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Subscription>;
    patch(
      params: Params$Resource$Projects$Subscriptions$Patch,
      options: MethodOptions | BodyResponseCallback<Schema$Subscription>,
      callback: BodyResponseCallback<Schema$Subscription>
    ): void;
    patch(
      params: Params$Resource$Projects$Subscriptions$Patch,
      callback: BodyResponseCallback<Schema$Subscription>
    ): void;
    patch(callback: BodyResponseCallback<Schema$Subscription>): void;
    patch(
      paramsOrCallback?:
        | Params$Resource$Projects$Subscriptions$Patch
        | BodyResponseCallback<Schema$Subscription>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$Subscription>,
      callback?: BodyResponseCallback<Schema$Subscription>
    ): void | GaxiosPromise<Schema$Subscription> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Subscriptions$Patch;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Subscriptions$Patch;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://pubsub.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$Subscription>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Subscription>(parameters);
      }
    }

    /**
     * pubsub.projects.subscriptions.pull
     * @desc Pulls messages from the server. The server may return `UNAVAILABLE` if there are too many concurrent pull requests pending for the given subscription.
     * @example
     * * // BEFORE RUNNING:
     * // ---------------
     * // 1. If not already done, enable the Cloud Pub/Sub API
     * //    and check the quota for your project at
     * //    https://console.developers.google.com/apis/api/pubsub
     * // 2. This sample uses Application Default Credentials for authentication.
     * //    If not already done, install the gcloud CLI from
     * //    https://cloud.google.com/sdk and run
     * //    `gcloud beta auth application-default login`.
     * //    For more information, see
     * //    https://developers.google.com/identity/protocols/application-default-credentials
     * // 3. Install the Node.js client library by running
     * //    `npm install googleapis --save`
     *
     * const {google} = require('googleapis');
     * var pubsub = google.pubsub('v1');
     *
     * authorize(function(authClient) {
     *   var request = {
     *     // The subscription from which messages should be pulled.
     *     // Format is `projects/{project}/subscriptions/{sub}`.
     *     subscription: 'projects/my-project/subscriptions/my-subscription',  // TODO: Update placeholder value.
     *
     *     resource: {
     *       // TODO: Add desired properties to the request body.
     *     },
     *
     *     auth: authClient,
     *   };
     *
     *   pubsub.projects.subscriptions.pull(request, function(err, response) {
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
     *   google.auth.getClient({
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform']
     *   }).then(client => {
     *     callback(client);
     *   }).catch(err => {
     *     console.error('authentication failed: ', err);
     *   });
     * }
     * @alias pubsub.projects.subscriptions.pull
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.subscription The subscription from which messages should be pulled. Format is `projects/{project}/subscriptions/{sub}`.
     * @param {().PullRequest} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    pull(
      params?: Params$Resource$Projects$Subscriptions$Pull,
      options?: MethodOptions
    ): GaxiosPromise<Schema$PullResponse>;
    pull(
      params: Params$Resource$Projects$Subscriptions$Pull,
      options: MethodOptions | BodyResponseCallback<Schema$PullResponse>,
      callback: BodyResponseCallback<Schema$PullResponse>
    ): void;
    pull(
      params: Params$Resource$Projects$Subscriptions$Pull,
      callback: BodyResponseCallback<Schema$PullResponse>
    ): void;
    pull(callback: BodyResponseCallback<Schema$PullResponse>): void;
    pull(
      paramsOrCallback?:
        | Params$Resource$Projects$Subscriptions$Pull
        | BodyResponseCallback<Schema$PullResponse>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$PullResponse>,
      callback?: BodyResponseCallback<Schema$PullResponse>
    ): void | GaxiosPromise<Schema$PullResponse> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Subscriptions$Pull;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Subscriptions$Pull;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://pubsub.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+subscription}:pull').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['subscription'],
        pathParams: ['subscription'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$PullResponse>(parameters, callback);
      } else {
        return createAPIRequest<Schema$PullResponse>(parameters);
      }
    }

    /**
     * pubsub.projects.subscriptions.seek
     * @desc Seeks an existing subscription to a point in time or to a given snapshot, whichever is provided in the request. Snapshots are used in <a href="https://cloud.google.com/pubsub/docs/replay-overview">Seek</a> operations, which allow you to manage message acknowledgments in bulk. That is, you can set the acknowledgment state of messages in an existing subscription to the state captured by a snapshot. Note that both the subscription and the snapshot must be on the same topic.
     * @example
     * * // BEFORE RUNNING:
     * // ---------------
     * // 1. If not already done, enable the Cloud Pub/Sub API
     * //    and check the quota for your project at
     * //    https://console.developers.google.com/apis/api/pubsub
     * // 2. This sample uses Application Default Credentials for authentication.
     * //    If not already done, install the gcloud CLI from
     * //    https://cloud.google.com/sdk and run
     * //    `gcloud beta auth application-default login`.
     * //    For more information, see
     * //    https://developers.google.com/identity/protocols/application-default-credentials
     * // 3. Install the Node.js client library by running
     * //    `npm install googleapis --save`
     *
     * const {google} = require('googleapis');
     * var pubsub = google.pubsub('v1');
     *
     * authorize(function(authClient) {
     *   var request = {
     *     // The subscription to affect.
     *     subscription: 'projects/my-project/subscriptions/my-subscription',  // TODO: Update placeholder value.
     *
     *     resource: {
     *       // TODO: Add desired properties to the request body.
     *     },
     *
     *     auth: authClient,
     *   };
     *
     *   pubsub.projects.subscriptions.seek(request, function(err, response) {
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
     *   google.auth.getClient({
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform']
     *   }).then(client => {
     *     callback(client);
     *   }).catch(err => {
     *     console.error('authentication failed: ', err);
     *   });
     * }
     * @alias pubsub.projects.subscriptions.seek
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.subscription The subscription to affect.
     * @param {().SeekRequest} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    seek(
      params?: Params$Resource$Projects$Subscriptions$Seek,
      options?: MethodOptions
    ): GaxiosPromise<Schema$SeekResponse>;
    seek(
      params: Params$Resource$Projects$Subscriptions$Seek,
      options: MethodOptions | BodyResponseCallback<Schema$SeekResponse>,
      callback: BodyResponseCallback<Schema$SeekResponse>
    ): void;
    seek(
      params: Params$Resource$Projects$Subscriptions$Seek,
      callback: BodyResponseCallback<Schema$SeekResponse>
    ): void;
    seek(callback: BodyResponseCallback<Schema$SeekResponse>): void;
    seek(
      paramsOrCallback?:
        | Params$Resource$Projects$Subscriptions$Seek
        | BodyResponseCallback<Schema$SeekResponse>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$SeekResponse>,
      callback?: BodyResponseCallback<Schema$SeekResponse>
    ): void | GaxiosPromise<Schema$SeekResponse> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Subscriptions$Seek;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Subscriptions$Seek;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://pubsub.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+subscription}:seek').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['subscription'],
        pathParams: ['subscription'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$SeekResponse>(parameters, callback);
      } else {
        return createAPIRequest<Schema$SeekResponse>(parameters);
      }
    }

    /**
     * pubsub.projects.subscriptions.setIamPolicy
     * @desc Sets the access control policy on the specified resource. Replaces any existing policy.
     * @example
     * * // BEFORE RUNNING:
     * // ---------------
     * // 1. If not already done, enable the Cloud Pub/Sub API
     * //    and check the quota for your project at
     * //    https://console.developers.google.com/apis/api/pubsub
     * // 2. This sample uses Application Default Credentials for authentication.
     * //    If not already done, install the gcloud CLI from
     * //    https://cloud.google.com/sdk and run
     * //    `gcloud beta auth application-default login`.
     * //    For more information, see
     * //    https://developers.google.com/identity/protocols/application-default-credentials
     * // 3. Install the Node.js client library by running
     * //    `npm install googleapis --save`
     *
     * const {google} = require('googleapis');
     * var pubsub = google.pubsub('v1');
     *
     * authorize(function(authClient) {
     *   var request = {
     *     // REQUIRED: The resource for which the policy is being specified.
     *     // See the operation documentation for the appropriate value for this field.
     *     resource_: 'projects/my-project/subscriptions/my-subscription',  // TODO: Update placeholder value.
     *
     *     resource: {
     *       // TODO: Add desired properties to the request body.
     *     },
     *
     *     auth: authClient,
     *   };
     *
     *   pubsub.projects.subscriptions.setIamPolicy(request, function(err, response) {
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
     *   google.auth.getClient({
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform']
     *   }).then(client => {
     *     callback(client);
     *   }).catch(err => {
     *     console.error('authentication failed: ', err);
     *   });
     * }
     * @alias pubsub.projects.subscriptions.setIamPolicy
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.resource_ REQUIRED: The resource for which the policy is being specified. See the operation documentation for the appropriate value for this field.
     * @param {().SetIamPolicyRequest} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    setIamPolicy(
      params?: Params$Resource$Projects$Subscriptions$Setiampolicy,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Policy>;
    setIamPolicy(
      params: Params$Resource$Projects$Subscriptions$Setiampolicy,
      options: MethodOptions | BodyResponseCallback<Schema$Policy>,
      callback: BodyResponseCallback<Schema$Policy>
    ): void;
    setIamPolicy(
      params: Params$Resource$Projects$Subscriptions$Setiampolicy,
      callback: BodyResponseCallback<Schema$Policy>
    ): void;
    setIamPolicy(callback: BodyResponseCallback<Schema$Policy>): void;
    setIamPolicy(
      paramsOrCallback?:
        | Params$Resource$Projects$Subscriptions$Setiampolicy
        | BodyResponseCallback<Schema$Policy>,
      optionsOrCallback?: MethodOptions | BodyResponseCallback<Schema$Policy>,
      callback?: BodyResponseCallback<Schema$Policy>
    ): void | GaxiosPromise<Schema$Policy> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Subscriptions$Setiampolicy;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Subscriptions$Setiampolicy;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://pubsub.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+resource}:setIamPolicy').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['resource'],
        pathParams: ['resource'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Policy>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Policy>(parameters);
      }
    }

    /**
     * pubsub.projects.subscriptions.testIamPermissions
     * @desc Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a NOT_FOUND error.  Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.
     * @example
     * * // BEFORE RUNNING:
     * // ---------------
     * // 1. If not already done, enable the Cloud Pub/Sub API
     * //    and check the quota for your project at
     * //    https://console.developers.google.com/apis/api/pubsub
     * // 2. This sample uses Application Default Credentials for authentication.
     * //    If not already done, install the gcloud CLI from
     * //    https://cloud.google.com/sdk and run
     * //    `gcloud beta auth application-default login`.
     * //    For more information, see
     * //    https://developers.google.com/identity/protocols/application-default-credentials
     * // 3. Install the Node.js client library by running
     * //    `npm install googleapis --save`
     *
     * const {google} = require('googleapis');
     * var pubsub = google.pubsub('v1');
     *
     * authorize(function(authClient) {
     *   var request = {
     *     // REQUIRED: The resource for which the policy detail is being requested.
     *     // See the operation documentation for the appropriate value for this field.
     *     resource_: 'projects/my-project/subscriptions/my-subscription',  // TODO: Update placeholder value.
     *
     *     resource: {
     *       // TODO: Add desired properties to the request body.
     *     },
     *
     *     auth: authClient,
     *   };
     *
     *   pubsub.projects.subscriptions.testIamPermissions(request, function(err, response) {
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
     *   google.auth.getClient({
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform']
     *   }).then(client => {
     *     callback(client);
     *   }).catch(err => {
     *     console.error('authentication failed: ', err);
     *   });
     * }
     * @alias pubsub.projects.subscriptions.testIamPermissions
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.resource_ REQUIRED: The resource for which the policy detail is being requested. See the operation documentation for the appropriate value for this field.
     * @param {().TestIamPermissionsRequest} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    testIamPermissions(
      params?: Params$Resource$Projects$Subscriptions$Testiampermissions,
      options?: MethodOptions
    ): GaxiosPromise<Schema$TestIamPermissionsResponse>;
    testIamPermissions(
      params: Params$Resource$Projects$Subscriptions$Testiampermissions,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$TestIamPermissionsResponse>,
      callback: BodyResponseCallback<Schema$TestIamPermissionsResponse>
    ): void;
    testIamPermissions(
      params: Params$Resource$Projects$Subscriptions$Testiampermissions,
      callback: BodyResponseCallback<Schema$TestIamPermissionsResponse>
    ): void;
    testIamPermissions(
      callback: BodyResponseCallback<Schema$TestIamPermissionsResponse>
    ): void;
    testIamPermissions(
      paramsOrCallback?:
        | Params$Resource$Projects$Subscriptions$Testiampermissions
        | BodyResponseCallback<Schema$TestIamPermissionsResponse>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$TestIamPermissionsResponse>,
      callback?: BodyResponseCallback<Schema$TestIamPermissionsResponse>
    ): void | GaxiosPromise<Schema$TestIamPermissionsResponse> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Subscriptions$Testiampermissions;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Subscriptions$Testiampermissions;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://pubsub.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+resource}:testIamPermissions').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['resource'],
        pathParams: ['resource'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$TestIamPermissionsResponse>(
          parameters,
          callback
        );
      } else {
        return createAPIRequest<Schema$TestIamPermissionsResponse>(parameters);
      }
    }
  }

  export interface Params$Resource$Projects$Subscriptions$Acknowledge
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * The subscription whose message is being acknowledged. Format is `projects/{project}/subscriptions/{sub}`.
     */
    subscription?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$AcknowledgeRequest;
  }
  export interface Params$Resource$Projects$Subscriptions$Create
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * The name of the subscription. It must have the format `"projects/{project}/subscriptions/{subscription}"`. `{subscription}` must start with a letter, and contain only letters (`[A-Za-z]`), numbers (`[0-9]`), dashes (`-`), underscores (`_`), periods (`.`), tildes (`~`), plus (`+`) or percent signs (`%`). It must be between 3 and 255 characters in length, and it must not start with `"goog"`.
     */
    name?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$Subscription;
  }
  export interface Params$Resource$Projects$Subscriptions$Delete
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * The subscription to delete. Format is `projects/{project}/subscriptions/{sub}`.
     */
    subscription?: string;
  }
  export interface Params$Resource$Projects$Subscriptions$Get
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * The name of the subscription to get. Format is `projects/{project}/subscriptions/{sub}`.
     */
    subscription?: string;
  }
  export interface Params$Resource$Projects$Subscriptions$Getiampolicy
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Optional. The policy format version to be returned.  Valid values are 0, 1, and 3. Requests specifying an invalid value will be rejected.  Requests for policies with any conditional bindings must specify version 3. Policies without any conditional bindings may specify any valid value or leave the field unset.
     */
    'options.requestedPolicyVersion'?: number;
    /**
     * REQUIRED: The resource for which the policy is being requested. See the operation documentation for the appropriate value for this field.
     */
    resource?: string;
  }
  export interface Params$Resource$Projects$Subscriptions$List
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Maximum number of subscriptions to return.
     */
    pageSize?: number;
    /**
     * The value returned by the last `ListSubscriptionsResponse`; indicates that this is a continuation of a prior `ListSubscriptions` call, and that the system should return the next page of data.
     */
    pageToken?: string;
    /**
     * The name of the project in which to list subscriptions. Format is `projects/{project-id}`.
     */
    project?: string;
  }
  export interface Params$Resource$Projects$Subscriptions$Modifyackdeadline
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * The name of the subscription. Format is `projects/{project}/subscriptions/{sub}`.
     */
    subscription?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$ModifyAckDeadlineRequest;
  }
  export interface Params$Resource$Projects$Subscriptions$Modifypushconfig
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * The name of the subscription. Format is `projects/{project}/subscriptions/{sub}`.
     */
    subscription?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$ModifyPushConfigRequest;
  }
  export interface Params$Resource$Projects$Subscriptions$Patch
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * The name of the subscription. It must have the format `"projects/{project}/subscriptions/{subscription}"`. `{subscription}` must start with a letter, and contain only letters (`[A-Za-z]`), numbers (`[0-9]`), dashes (`-`), underscores (`_`), periods (`.`), tildes (`~`), plus (`+`) or percent signs (`%`). It must be between 3 and 255 characters in length, and it must not start with `"goog"`.
     */
    name?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$UpdateSubscriptionRequest;
  }
  export interface Params$Resource$Projects$Subscriptions$Pull
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * The subscription from which messages should be pulled. Format is `projects/{project}/subscriptions/{sub}`.
     */
    subscription?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$PullRequest;
  }
  export interface Params$Resource$Projects$Subscriptions$Seek
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * The subscription to affect.
     */
    subscription?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$SeekRequest;
  }
  export interface Params$Resource$Projects$Subscriptions$Setiampolicy
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * REQUIRED: The resource for which the policy is being specified. See the operation documentation for the appropriate value for this field.
     */
    resource?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$SetIamPolicyRequest;
  }
  export interface Params$Resource$Projects$Subscriptions$Testiampermissions
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * REQUIRED: The resource for which the policy detail is being requested. See the operation documentation for the appropriate value for this field.
     */
    resource?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$TestIamPermissionsRequest;
  }

  export class Resource$Projects$Topics {
    context: APIRequestContext;
    snapshots: Resource$Projects$Topics$Snapshots;
    subscriptions: Resource$Projects$Topics$Subscriptions;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.snapshots = new Resource$Projects$Topics$Snapshots(this.context);
      this.subscriptions = new Resource$Projects$Topics$Subscriptions(
        this.context
      );
    }

    /**
     * pubsub.projects.topics.create
     * @desc Creates the given topic with the given name. See the <a href="https://cloud.google.com/pubsub/docs/admin#resource_names"> resource name rules</a>.
     * @example
     * * // BEFORE RUNNING:
     * // ---------------
     * // 1. If not already done, enable the Cloud Pub/Sub API
     * //    and check the quota for your project at
     * //    https://console.developers.google.com/apis/api/pubsub
     * // 2. This sample uses Application Default Credentials for authentication.
     * //    If not already done, install the gcloud CLI from
     * //    https://cloud.google.com/sdk and run
     * //    `gcloud beta auth application-default login`.
     * //    For more information, see
     * //    https://developers.google.com/identity/protocols/application-default-credentials
     * // 3. Install the Node.js client library by running
     * //    `npm install googleapis --save`
     *
     * const {google} = require('googleapis');
     * var pubsub = google.pubsub('v1');
     *
     * authorize(function(authClient) {
     *   var request = {
     *     // The name of the topic. It must have the format
     *     // `"projects/{project}/topics/{topic}"`. `{topic}` must start with a letter,
     *     // and contain only letters (`[A-Za-z]`), numbers (`[0-9]`), dashes (`-`),
     *     // underscores (`_`), periods (`.`), tildes (`~`), plus (`+`) or percent
     *     // signs (`%`). It must be between 3 and 255 characters in length, and it
     *     // must not start with `"goog"`.
     *     name: 'projects/my-project/topics/my-topic',  // TODO: Update placeholder value.
     *
     *     resource: {
     *       // TODO: Add desired properties to the request body. All existing properties
     *       // will be replaced.
     *     },
     *
     *     auth: authClient,
     *   };
     *
     *   pubsub.projects.topics.create(request, function(err, response) {
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
     *   google.auth.getClient({
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform']
     *   }).then(client => {
     *     callback(client);
     *   }).catch(err => {
     *     console.error('authentication failed: ', err);
     *   });
     * }
     * @alias pubsub.projects.topics.create
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.name The name of the topic. It must have the format `"projects/{project}/topics/{topic}"`. `{topic}` must start with a letter, and contain only letters (`[A-Za-z]`), numbers (`[0-9]`), dashes (`-`), underscores (`_`), periods (`.`), tildes (`~`), plus (`+`) or percent signs (`%`). It must be between 3 and 255 characters in length, and it must not start with `"goog"`.
     * @param {().Topic} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    create(
      params?: Params$Resource$Projects$Topics$Create,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Topic>;
    create(
      params: Params$Resource$Projects$Topics$Create,
      options: MethodOptions | BodyResponseCallback<Schema$Topic>,
      callback: BodyResponseCallback<Schema$Topic>
    ): void;
    create(
      params: Params$Resource$Projects$Topics$Create,
      callback: BodyResponseCallback<Schema$Topic>
    ): void;
    create(callback: BodyResponseCallback<Schema$Topic>): void;
    create(
      paramsOrCallback?:
        | Params$Resource$Projects$Topics$Create
        | BodyResponseCallback<Schema$Topic>,
      optionsOrCallback?: MethodOptions | BodyResponseCallback<Schema$Topic>,
      callback?: BodyResponseCallback<Schema$Topic>
    ): void | GaxiosPromise<Schema$Topic> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Topics$Create;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Topics$Create;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://pubsub.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
            method: 'PUT',
          },
          options
        ),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Topic>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Topic>(parameters);
      }
    }

    /**
     * pubsub.projects.topics.delete
     * @desc Deletes the topic with the given name. Returns `NOT_FOUND` if the topic does not exist. After a topic is deleted, a new topic may be created with the same name; this is an entirely new topic with none of the old configuration or subscriptions. Existing subscriptions to this topic are not deleted, but their `topic` field is set to `_deleted-topic_`.
     * @example
     * * // BEFORE RUNNING:
     * // ---------------
     * // 1. If not already done, enable the Cloud Pub/Sub API
     * //    and check the quota for your project at
     * //    https://console.developers.google.com/apis/api/pubsub
     * // 2. This sample uses Application Default Credentials for authentication.
     * //    If not already done, install the gcloud CLI from
     * //    https://cloud.google.com/sdk and run
     * //    `gcloud beta auth application-default login`.
     * //    For more information, see
     * //    https://developers.google.com/identity/protocols/application-default-credentials
     * // 3. Install the Node.js client library by running
     * //    `npm install googleapis --save`
     *
     * const {google} = require('googleapis');
     * var pubsub = google.pubsub('v1');
     *
     * authorize(function(authClient) {
     *   var request = {
     *     // Name of the topic to delete.
     *     // Format is `projects/{project}/topics/{topic}`.
     *     topic: 'projects/my-project/topics/my-topic',  // TODO: Update placeholder value.
     *
     *     auth: authClient,
     *   };
     *
     *   pubsub.projects.topics.delete(request, function(err) {
     *     if (err) {
     *       console.error(err);
     *       return;
     *     }
     *   });
     * });
     *
     * function authorize(callback) {
     *   google.auth.getClient({
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform']
     *   }).then(client => {
     *     callback(client);
     *   }).catch(err => {
     *     console.error('authentication failed: ', err);
     *   });
     * }
     * @alias pubsub.projects.topics.delete
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.topic Name of the topic to delete. Format is `projects/{project}/topics/{topic}`.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    delete(
      params?: Params$Resource$Projects$Topics$Delete,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Empty>;
    delete(
      params: Params$Resource$Projects$Topics$Delete,
      options: MethodOptions | BodyResponseCallback<Schema$Empty>,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    delete(
      params: Params$Resource$Projects$Topics$Delete,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    delete(callback: BodyResponseCallback<Schema$Empty>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Projects$Topics$Delete
        | BodyResponseCallback<Schema$Empty>,
      optionsOrCallback?: MethodOptions | BodyResponseCallback<Schema$Empty>,
      callback?: BodyResponseCallback<Schema$Empty>
    ): void | GaxiosPromise<Schema$Empty> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Topics$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Topics$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://pubsub.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+topic}').replace(/([^:]\/)\/+/g, '$1'),
            method: 'DELETE',
          },
          options
        ),
        params,
        requiredParams: ['topic'],
        pathParams: ['topic'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Empty>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Empty>(parameters);
      }
    }

    /**
     * pubsub.projects.topics.get
     * @desc Gets the configuration of a topic.
     * @example
     * * // BEFORE RUNNING:
     * // ---------------
     * // 1. If not already done, enable the Cloud Pub/Sub API
     * //    and check the quota for your project at
     * //    https://console.developers.google.com/apis/api/pubsub
     * // 2. This sample uses Application Default Credentials for authentication.
     * //    If not already done, install the gcloud CLI from
     * //    https://cloud.google.com/sdk and run
     * //    `gcloud beta auth application-default login`.
     * //    For more information, see
     * //    https://developers.google.com/identity/protocols/application-default-credentials
     * // 3. Install the Node.js client library by running
     * //    `npm install googleapis --save`
     *
     * const {google} = require('googleapis');
     * var pubsub = google.pubsub('v1');
     *
     * authorize(function(authClient) {
     *   var request = {
     *     // The name of the topic to get.
     *     // Format is `projects/{project}/topics/{topic}`.
     *     topic: 'projects/my-project/topics/my-topic',  // TODO: Update placeholder value.
     *
     *     auth: authClient,
     *   };
     *
     *   pubsub.projects.topics.get(request, function(err, response) {
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
     *   google.auth.getClient({
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform']
     *   }).then(client => {
     *     callback(client);
     *   }).catch(err => {
     *     console.error('authentication failed: ', err);
     *   });
     * }
     * @alias pubsub.projects.topics.get
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.topic The name of the topic to get. Format is `projects/{project}/topics/{topic}`.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    get(
      params?: Params$Resource$Projects$Topics$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Topic>;
    get(
      params: Params$Resource$Projects$Topics$Get,
      options: MethodOptions | BodyResponseCallback<Schema$Topic>,
      callback: BodyResponseCallback<Schema$Topic>
    ): void;
    get(
      params: Params$Resource$Projects$Topics$Get,
      callback: BodyResponseCallback<Schema$Topic>
    ): void;
    get(callback: BodyResponseCallback<Schema$Topic>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Projects$Topics$Get
        | BodyResponseCallback<Schema$Topic>,
      optionsOrCallback?: MethodOptions | BodyResponseCallback<Schema$Topic>,
      callback?: BodyResponseCallback<Schema$Topic>
    ): void | GaxiosPromise<Schema$Topic> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Topics$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Topics$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://pubsub.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+topic}').replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['topic'],
        pathParams: ['topic'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Topic>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Topic>(parameters);
      }
    }

    /**
     * pubsub.projects.topics.getIamPolicy
     * @desc Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
     * @example
     * * // BEFORE RUNNING:
     * // ---------------
     * // 1. If not already done, enable the Cloud Pub/Sub API
     * //    and check the quota for your project at
     * //    https://console.developers.google.com/apis/api/pubsub
     * // 2. This sample uses Application Default Credentials for authentication.
     * //    If not already done, install the gcloud CLI from
     * //    https://cloud.google.com/sdk and run
     * //    `gcloud beta auth application-default login`.
     * //    For more information, see
     * //    https://developers.google.com/identity/protocols/application-default-credentials
     * // 3. Install the Node.js client library by running
     * //    `npm install googleapis --save`
     *
     * const {google} = require('googleapis');
     * var pubsub = google.pubsub('v1');
     *
     * authorize(function(authClient) {
     *   var request = {
     *     // REQUIRED: The resource for which the policy is being requested.
     *     // See the operation documentation for the appropriate value for this field.
     *     resource_: 'projects/my-project/topics/my-topic',  // TODO: Update placeholder value.
     *
     *     auth: authClient,
     *   };
     *
     *   pubsub.projects.topics.getIamPolicy(request, function(err, response) {
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
     *   google.auth.getClient({
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform']
     *   }).then(client => {
     *     callback(client);
     *   }).catch(err => {
     *     console.error('authentication failed: ', err);
     *   });
     * }
     * @alias pubsub.projects.topics.getIamPolicy
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {integer=} params.options.requestedPolicyVersion Optional. The policy format version to be returned.  Valid values are 0, 1, and 3. Requests specifying an invalid value will be rejected.  Requests for policies with any conditional bindings must specify version 3. Policies without any conditional bindings may specify any valid value or leave the field unset.
     * @param {string} params.resource_ REQUIRED: The resource for which the policy is being requested. See the operation documentation for the appropriate value for this field.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    getIamPolicy(
      params?: Params$Resource$Projects$Topics$Getiampolicy,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Policy>;
    getIamPolicy(
      params: Params$Resource$Projects$Topics$Getiampolicy,
      options: MethodOptions | BodyResponseCallback<Schema$Policy>,
      callback: BodyResponseCallback<Schema$Policy>
    ): void;
    getIamPolicy(
      params: Params$Resource$Projects$Topics$Getiampolicy,
      callback: BodyResponseCallback<Schema$Policy>
    ): void;
    getIamPolicy(callback: BodyResponseCallback<Schema$Policy>): void;
    getIamPolicy(
      paramsOrCallback?:
        | Params$Resource$Projects$Topics$Getiampolicy
        | BodyResponseCallback<Schema$Policy>,
      optionsOrCallback?: MethodOptions | BodyResponseCallback<Schema$Policy>,
      callback?: BodyResponseCallback<Schema$Policy>
    ): void | GaxiosPromise<Schema$Policy> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Topics$Getiampolicy;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Topics$Getiampolicy;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://pubsub.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+resource}:getIamPolicy').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['resource'],
        pathParams: ['resource'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Policy>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Policy>(parameters);
      }
    }

    /**
     * pubsub.projects.topics.list
     * @desc Lists matching topics.
     * @example
     * * // BEFORE RUNNING:
     * // ---------------
     * // 1. If not already done, enable the Cloud Pub/Sub API
     * //    and check the quota for your project at
     * //    https://console.developers.google.com/apis/api/pubsub
     * // 2. This sample uses Application Default Credentials for authentication.
     * //    If not already done, install the gcloud CLI from
     * //    https://cloud.google.com/sdk and run
     * //    `gcloud beta auth application-default login`.
     * //    For more information, see
     * //    https://developers.google.com/identity/protocols/application-default-credentials
     * // 3. Install the Node.js client library by running
     * //    `npm install googleapis --save`
     *
     * const {google} = require('googleapis');
     * var pubsub = google.pubsub('v1');
     *
     * authorize(function(authClient) {
     *   var request = {
     *     // The name of the project in which to list topics.
     *     // Format is `projects/{project-id}`.
     *     project: 'projects/my-project',  // TODO: Update placeholder value.
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
     *     var topicsPage = response['topics'];
     *     if (!topicsPage) {
     *       return;
     *     }
     *     for (var i = 0; i < topicsPage.length; i++) {
     *       // TODO: Change code below to process each resource in `topicsPage`:
     *       console.log(JSON.stringify(topicsPage[i], null, 2));
     *     }
     *
     *     if (response.nextPageToken) {
     *       request.pageToken = response.nextPageToken;
     *       pubsub.projects.topics.list(request, handlePage);
     *     }
     *   };
     *
     *   pubsub.projects.topics.list(request, handlePage);
     * });
     *
     * function authorize(callback) {
     *   google.auth.getClient({
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform']
     *   }).then(client => {
     *     callback(client);
     *   }).catch(err => {
     *     console.error('authentication failed: ', err);
     *   });
     * }
     * @alias pubsub.projects.topics.list
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {integer=} params.pageSize Maximum number of topics to return.
     * @param {string=} params.pageToken The value returned by the last `ListTopicsResponse`; indicates that this is a continuation of a prior `ListTopics` call, and that the system should return the next page of data.
     * @param {string} params.project The name of the project in which to list topics. Format is `projects/{project-id}`.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list(
      params?: Params$Resource$Projects$Topics$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ListTopicsResponse>;
    list(
      params: Params$Resource$Projects$Topics$List,
      options: MethodOptions | BodyResponseCallback<Schema$ListTopicsResponse>,
      callback: BodyResponseCallback<Schema$ListTopicsResponse>
    ): void;
    list(
      params: Params$Resource$Projects$Topics$List,
      callback: BodyResponseCallback<Schema$ListTopicsResponse>
    ): void;
    list(callback: BodyResponseCallback<Schema$ListTopicsResponse>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Projects$Topics$List
        | BodyResponseCallback<Schema$ListTopicsResponse>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$ListTopicsResponse>,
      callback?: BodyResponseCallback<Schema$ListTopicsResponse>
    ): void | GaxiosPromise<Schema$ListTopicsResponse> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Topics$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Topics$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://pubsub.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+project}/topics').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['project'],
        pathParams: ['project'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$ListTopicsResponse>(parameters, callback);
      } else {
        return createAPIRequest<Schema$ListTopicsResponse>(parameters);
      }
    }

    /**
     * pubsub.projects.topics.patch
     * @desc Updates an existing topic. Note that certain properties of a topic are not modifiable.
     * @example
     * * // BEFORE RUNNING:
     * // ---------------
     * // 1. If not already done, enable the Cloud Pub/Sub API
     * //    and check the quota for your project at
     * //    https://console.developers.google.com/apis/api/pubsub
     * // 2. This sample uses Application Default Credentials for authentication.
     * //    If not already done, install the gcloud CLI from
     * //    https://cloud.google.com/sdk and run
     * //    `gcloud beta auth application-default login`.
     * //    For more information, see
     * //    https://developers.google.com/identity/protocols/application-default-credentials
     * // 3. Install the Node.js client library by running
     * //    `npm install googleapis --save`
     *
     * const {google} = require('googleapis');
     * var pubsub = google.pubsub('v1');
     *
     * authorize(function(authClient) {
     *   var request = {
     *     // The name of the topic. It must have the format
     *     // `"projects/{project}/topics/{topic}"`. `{topic}` must start with a letter,
     *     // and contain only letters (`[A-Za-z]`), numbers (`[0-9]`), dashes (`-`),
     *     // underscores (`_`), periods (`.`), tildes (`~`), plus (`+`) or percent
     *     // signs (`%`). It must be between 3 and 255 characters in length, and it
     *     // must not start with `"goog"`.
     *     name: 'projects/my-project/topics/my-topic',  // TODO: Update placeholder value.
     *
     *     resource: {
     *       // TODO: Add desired properties to the request body. Only these properties
     *       // will be changed.
     *     },
     *
     *     auth: authClient,
     *   };
     *
     *   pubsub.projects.topics.patch(request, function(err, response) {
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
     *   google.auth.getClient({
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform']
     *   }).then(client => {
     *     callback(client);
     *   }).catch(err => {
     *     console.error('authentication failed: ', err);
     *   });
     * }
     * @alias pubsub.projects.topics.patch
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.name The name of the topic. It must have the format `"projects/{project}/topics/{topic}"`. `{topic}` must start with a letter, and contain only letters (`[A-Za-z]`), numbers (`[0-9]`), dashes (`-`), underscores (`_`), periods (`.`), tildes (`~`), plus (`+`) or percent signs (`%`). It must be between 3 and 255 characters in length, and it must not start with `"goog"`.
     * @param {().UpdateTopicRequest} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    patch(
      params?: Params$Resource$Projects$Topics$Patch,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Topic>;
    patch(
      params: Params$Resource$Projects$Topics$Patch,
      options: MethodOptions | BodyResponseCallback<Schema$Topic>,
      callback: BodyResponseCallback<Schema$Topic>
    ): void;
    patch(
      params: Params$Resource$Projects$Topics$Patch,
      callback: BodyResponseCallback<Schema$Topic>
    ): void;
    patch(callback: BodyResponseCallback<Schema$Topic>): void;
    patch(
      paramsOrCallback?:
        | Params$Resource$Projects$Topics$Patch
        | BodyResponseCallback<Schema$Topic>,
      optionsOrCallback?: MethodOptions | BodyResponseCallback<Schema$Topic>,
      callback?: BodyResponseCallback<Schema$Topic>
    ): void | GaxiosPromise<Schema$Topic> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Topics$Patch;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Topics$Patch;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://pubsub.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$Topic>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Topic>(parameters);
      }
    }

    /**
     * pubsub.projects.topics.publish
     * @desc Adds one or more messages to the topic. Returns `NOT_FOUND` if the topic does not exist.
     * @example
     * * // BEFORE RUNNING:
     * // ---------------
     * // 1. If not already done, enable the Cloud Pub/Sub API
     * //    and check the quota for your project at
     * //    https://console.developers.google.com/apis/api/pubsub
     * // 2. This sample uses Application Default Credentials for authentication.
     * //    If not already done, install the gcloud CLI from
     * //    https://cloud.google.com/sdk and run
     * //    `gcloud beta auth application-default login`.
     * //    For more information, see
     * //    https://developers.google.com/identity/protocols/application-default-credentials
     * // 3. Install the Node.js client library by running
     * //    `npm install googleapis --save`
     *
     * const {google} = require('googleapis');
     * var pubsub = google.pubsub('v1');
     *
     * authorize(function(authClient) {
     *   var request = {
     *     // The messages in the request will be published on this topic.
     *     // Format is `projects/{project}/topics/{topic}`.
     *     topic: 'projects/my-project/topics/my-topic',  // TODO: Update placeholder value.
     *
     *     resource: {
     *       // TODO: Add desired properties to the request body.
     *     },
     *
     *     auth: authClient,
     *   };
     *
     *   pubsub.projects.topics.publish(request, function(err, response) {
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
     *   google.auth.getClient({
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform']
     *   }).then(client => {
     *     callback(client);
     *   }).catch(err => {
     *     console.error('authentication failed: ', err);
     *   });
     * }
     * @alias pubsub.projects.topics.publish
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.topic The messages in the request will be published on this topic. Format is `projects/{project}/topics/{topic}`.
     * @param {().PublishRequest} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    publish(
      params?: Params$Resource$Projects$Topics$Publish,
      options?: MethodOptions
    ): GaxiosPromise<Schema$PublishResponse>;
    publish(
      params: Params$Resource$Projects$Topics$Publish,
      options: MethodOptions | BodyResponseCallback<Schema$PublishResponse>,
      callback: BodyResponseCallback<Schema$PublishResponse>
    ): void;
    publish(
      params: Params$Resource$Projects$Topics$Publish,
      callback: BodyResponseCallback<Schema$PublishResponse>
    ): void;
    publish(callback: BodyResponseCallback<Schema$PublishResponse>): void;
    publish(
      paramsOrCallback?:
        | Params$Resource$Projects$Topics$Publish
        | BodyResponseCallback<Schema$PublishResponse>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$PublishResponse>,
      callback?: BodyResponseCallback<Schema$PublishResponse>
    ): void | GaxiosPromise<Schema$PublishResponse> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Topics$Publish;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Topics$Publish;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://pubsub.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+topic}:publish').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['topic'],
        pathParams: ['topic'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$PublishResponse>(parameters, callback);
      } else {
        return createAPIRequest<Schema$PublishResponse>(parameters);
      }
    }

    /**
     * pubsub.projects.topics.setIamPolicy
     * @desc Sets the access control policy on the specified resource. Replaces any existing policy.
     * @example
     * * // BEFORE RUNNING:
     * // ---------------
     * // 1. If not already done, enable the Cloud Pub/Sub API
     * //    and check the quota for your project at
     * //    https://console.developers.google.com/apis/api/pubsub
     * // 2. This sample uses Application Default Credentials for authentication.
     * //    If not already done, install the gcloud CLI from
     * //    https://cloud.google.com/sdk and run
     * //    `gcloud beta auth application-default login`.
     * //    For more information, see
     * //    https://developers.google.com/identity/protocols/application-default-credentials
     * // 3. Install the Node.js client library by running
     * //    `npm install googleapis --save`
     *
     * const {google} = require('googleapis');
     * var pubsub = google.pubsub('v1');
     *
     * authorize(function(authClient) {
     *   var request = {
     *     // REQUIRED: The resource for which the policy is being specified.
     *     // See the operation documentation for the appropriate value for this field.
     *     resource_: 'projects/my-project/topics/my-topic',  // TODO: Update placeholder value.
     *
     *     resource: {
     *       // TODO: Add desired properties to the request body.
     *     },
     *
     *     auth: authClient,
     *   };
     *
     *   pubsub.projects.topics.setIamPolicy(request, function(err, response) {
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
     *   google.auth.getClient({
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform']
     *   }).then(client => {
     *     callback(client);
     *   }).catch(err => {
     *     console.error('authentication failed: ', err);
     *   });
     * }
     * @alias pubsub.projects.topics.setIamPolicy
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.resource_ REQUIRED: The resource for which the policy is being specified. See the operation documentation for the appropriate value for this field.
     * @param {().SetIamPolicyRequest} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    setIamPolicy(
      params?: Params$Resource$Projects$Topics$Setiampolicy,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Policy>;
    setIamPolicy(
      params: Params$Resource$Projects$Topics$Setiampolicy,
      options: MethodOptions | BodyResponseCallback<Schema$Policy>,
      callback: BodyResponseCallback<Schema$Policy>
    ): void;
    setIamPolicy(
      params: Params$Resource$Projects$Topics$Setiampolicy,
      callback: BodyResponseCallback<Schema$Policy>
    ): void;
    setIamPolicy(callback: BodyResponseCallback<Schema$Policy>): void;
    setIamPolicy(
      paramsOrCallback?:
        | Params$Resource$Projects$Topics$Setiampolicy
        | BodyResponseCallback<Schema$Policy>,
      optionsOrCallback?: MethodOptions | BodyResponseCallback<Schema$Policy>,
      callback?: BodyResponseCallback<Schema$Policy>
    ): void | GaxiosPromise<Schema$Policy> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Topics$Setiampolicy;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Topics$Setiampolicy;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://pubsub.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+resource}:setIamPolicy').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['resource'],
        pathParams: ['resource'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Policy>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Policy>(parameters);
      }
    }

    /**
     * pubsub.projects.topics.testIamPermissions
     * @desc Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a NOT_FOUND error.  Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.
     * @example
     * * // BEFORE RUNNING:
     * // ---------------
     * // 1. If not already done, enable the Cloud Pub/Sub API
     * //    and check the quota for your project at
     * //    https://console.developers.google.com/apis/api/pubsub
     * // 2. This sample uses Application Default Credentials for authentication.
     * //    If not already done, install the gcloud CLI from
     * //    https://cloud.google.com/sdk and run
     * //    `gcloud beta auth application-default login`.
     * //    For more information, see
     * //    https://developers.google.com/identity/protocols/application-default-credentials
     * // 3. Install the Node.js client library by running
     * //    `npm install googleapis --save`
     *
     * const {google} = require('googleapis');
     * var pubsub = google.pubsub('v1');
     *
     * authorize(function(authClient) {
     *   var request = {
     *     // REQUIRED: The resource for which the policy detail is being requested.
     *     // See the operation documentation for the appropriate value for this field.
     *     resource_: 'projects/my-project/topics/my-topic',  // TODO: Update placeholder value.
     *
     *     resource: {
     *       // TODO: Add desired properties to the request body.
     *     },
     *
     *     auth: authClient,
     *   };
     *
     *   pubsub.projects.topics.testIamPermissions(request, function(err, response) {
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
     *   google.auth.getClient({
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform']
     *   }).then(client => {
     *     callback(client);
     *   }).catch(err => {
     *     console.error('authentication failed: ', err);
     *   });
     * }
     * @alias pubsub.projects.topics.testIamPermissions
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.resource_ REQUIRED: The resource for which the policy detail is being requested. See the operation documentation for the appropriate value for this field.
     * @param {().TestIamPermissionsRequest} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    testIamPermissions(
      params?: Params$Resource$Projects$Topics$Testiampermissions,
      options?: MethodOptions
    ): GaxiosPromise<Schema$TestIamPermissionsResponse>;
    testIamPermissions(
      params: Params$Resource$Projects$Topics$Testiampermissions,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$TestIamPermissionsResponse>,
      callback: BodyResponseCallback<Schema$TestIamPermissionsResponse>
    ): void;
    testIamPermissions(
      params: Params$Resource$Projects$Topics$Testiampermissions,
      callback: BodyResponseCallback<Schema$TestIamPermissionsResponse>
    ): void;
    testIamPermissions(
      callback: BodyResponseCallback<Schema$TestIamPermissionsResponse>
    ): void;
    testIamPermissions(
      paramsOrCallback?:
        | Params$Resource$Projects$Topics$Testiampermissions
        | BodyResponseCallback<Schema$TestIamPermissionsResponse>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$TestIamPermissionsResponse>,
      callback?: BodyResponseCallback<Schema$TestIamPermissionsResponse>
    ): void | GaxiosPromise<Schema$TestIamPermissionsResponse> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Topics$Testiampermissions;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Topics$Testiampermissions;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://pubsub.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+resource}:testIamPermissions').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['resource'],
        pathParams: ['resource'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$TestIamPermissionsResponse>(
          parameters,
          callback
        );
      } else {
        return createAPIRequest<Schema$TestIamPermissionsResponse>(parameters);
      }
    }
  }

  export interface Params$Resource$Projects$Topics$Create
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * The name of the topic. It must have the format `"projects/{project}/topics/{topic}"`. `{topic}` must start with a letter, and contain only letters (`[A-Za-z]`), numbers (`[0-9]`), dashes (`-`), underscores (`_`), periods (`.`), tildes (`~`), plus (`+`) or percent signs (`%`). It must be between 3 and 255 characters in length, and it must not start with `"goog"`.
     */
    name?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$Topic;
  }
  export interface Params$Resource$Projects$Topics$Delete
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Name of the topic to delete. Format is `projects/{project}/topics/{topic}`.
     */
    topic?: string;
  }
  export interface Params$Resource$Projects$Topics$Get
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * The name of the topic to get. Format is `projects/{project}/topics/{topic}`.
     */
    topic?: string;
  }
  export interface Params$Resource$Projects$Topics$Getiampolicy
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Optional. The policy format version to be returned.  Valid values are 0, 1, and 3. Requests specifying an invalid value will be rejected.  Requests for policies with any conditional bindings must specify version 3. Policies without any conditional bindings may specify any valid value or leave the field unset.
     */
    'options.requestedPolicyVersion'?: number;
    /**
     * REQUIRED: The resource for which the policy is being requested. See the operation documentation for the appropriate value for this field.
     */
    resource?: string;
  }
  export interface Params$Resource$Projects$Topics$List
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Maximum number of topics to return.
     */
    pageSize?: number;
    /**
     * The value returned by the last `ListTopicsResponse`; indicates that this is a continuation of a prior `ListTopics` call, and that the system should return the next page of data.
     */
    pageToken?: string;
    /**
     * The name of the project in which to list topics. Format is `projects/{project-id}`.
     */
    project?: string;
  }
  export interface Params$Resource$Projects$Topics$Patch
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * The name of the topic. It must have the format `"projects/{project}/topics/{topic}"`. `{topic}` must start with a letter, and contain only letters (`[A-Za-z]`), numbers (`[0-9]`), dashes (`-`), underscores (`_`), periods (`.`), tildes (`~`), plus (`+`) or percent signs (`%`). It must be between 3 and 255 characters in length, and it must not start with `"goog"`.
     */
    name?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$UpdateTopicRequest;
  }
  export interface Params$Resource$Projects$Topics$Publish
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * The messages in the request will be published on this topic. Format is `projects/{project}/topics/{topic}`.
     */
    topic?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$PublishRequest;
  }
  export interface Params$Resource$Projects$Topics$Setiampolicy
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * REQUIRED: The resource for which the policy is being specified. See the operation documentation for the appropriate value for this field.
     */
    resource?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$SetIamPolicyRequest;
  }
  export interface Params$Resource$Projects$Topics$Testiampermissions
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * REQUIRED: The resource for which the policy detail is being requested. See the operation documentation for the appropriate value for this field.
     */
    resource?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$TestIamPermissionsRequest;
  }

  export class Resource$Projects$Topics$Snapshots {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * pubsub.projects.topics.snapshots.list
     * @desc Lists the names of the snapshots on this topic. Snapshots are used in <a href="https://cloud.google.com/pubsub/docs/replay-overview">Seek</a> operations, which allow you to manage message acknowledgments in bulk. That is, you can set the acknowledgment state of messages in an existing subscription to the state captured by a snapshot.
     * @example
     * * // BEFORE RUNNING:
     * // ---------------
     * // 1. If not already done, enable the Cloud Pub/Sub API
     * //    and check the quota for your project at
     * //    https://console.developers.google.com/apis/api/pubsub
     * // 2. This sample uses Application Default Credentials for authentication.
     * //    If not already done, install the gcloud CLI from
     * //    https://cloud.google.com/sdk and run
     * //    `gcloud beta auth application-default login`.
     * //    For more information, see
     * //    https://developers.google.com/identity/protocols/application-default-credentials
     * // 3. Install the Node.js client library by running
     * //    `npm install googleapis --save`
     *
     * const {google} = require('googleapis');
     * var pubsub = google.pubsub('v1');
     *
     * authorize(function(authClient) {
     *   var request = {
     *     // The name of the topic that snapshots are attached to.
     *     // Format is `projects/{project}/topics/{topic}`.
     *     topic: 'projects/my-project/topics/my-topic',  // TODO: Update placeholder value.
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
     *     var snapshotsPage = response['snapshots'];
     *     if (!snapshotsPage) {
     *       return;
     *     }
     *     for (var i = 0; i < snapshotsPage.length; i++) {
     *       // TODO: Change code below to process each resource in `snapshotsPage`:
     *       console.log(JSON.stringify(snapshotsPage[i], null, 2));
     *     }
     *
     *     if (response.nextPageToken) {
     *       request.pageToken = response.nextPageToken;
     *       pubsub.projects.topics.snapshots.list(request, handlePage);
     *     }
     *   };
     *
     *   pubsub.projects.topics.snapshots.list(request, handlePage);
     * });
     *
     * function authorize(callback) {
     *   google.auth.getClient({
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform']
     *   }).then(client => {
     *     callback(client);
     *   }).catch(err => {
     *     console.error('authentication failed: ', err);
     *   });
     * }
     * @alias pubsub.projects.topics.snapshots.list
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {integer=} params.pageSize Maximum number of snapshot names to return.
     * @param {string=} params.pageToken The value returned by the last `ListTopicSnapshotsResponse`; indicates that this is a continuation of a prior `ListTopicSnapshots` call, and that the system should return the next page of data.
     * @param {string} params.topic The name of the topic that snapshots are attached to. Format is `projects/{project}/topics/{topic}`.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list(
      params?: Params$Resource$Projects$Topics$Snapshots$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ListTopicSnapshotsResponse>;
    list(
      params: Params$Resource$Projects$Topics$Snapshots$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ListTopicSnapshotsResponse>,
      callback: BodyResponseCallback<Schema$ListTopicSnapshotsResponse>
    ): void;
    list(
      params: Params$Resource$Projects$Topics$Snapshots$List,
      callback: BodyResponseCallback<Schema$ListTopicSnapshotsResponse>
    ): void;
    list(
      callback: BodyResponseCallback<Schema$ListTopicSnapshotsResponse>
    ): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Projects$Topics$Snapshots$List
        | BodyResponseCallback<Schema$ListTopicSnapshotsResponse>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$ListTopicSnapshotsResponse>,
      callback?: BodyResponseCallback<Schema$ListTopicSnapshotsResponse>
    ): void | GaxiosPromise<Schema$ListTopicSnapshotsResponse> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Topics$Snapshots$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Topics$Snapshots$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://pubsub.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+topic}/snapshots').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['topic'],
        pathParams: ['topic'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$ListTopicSnapshotsResponse>(
          parameters,
          callback
        );
      } else {
        return createAPIRequest<Schema$ListTopicSnapshotsResponse>(parameters);
      }
    }
  }

  export interface Params$Resource$Projects$Topics$Snapshots$List
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Maximum number of snapshot names to return.
     */
    pageSize?: number;
    /**
     * The value returned by the last `ListTopicSnapshotsResponse`; indicates that this is a continuation of a prior `ListTopicSnapshots` call, and that the system should return the next page of data.
     */
    pageToken?: string;
    /**
     * The name of the topic that snapshots are attached to. Format is `projects/{project}/topics/{topic}`.
     */
    topic?: string;
  }

  export class Resource$Projects$Topics$Subscriptions {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * pubsub.projects.topics.subscriptions.list
     * @desc Lists the names of the subscriptions on this topic.
     * @example
     * * // BEFORE RUNNING:
     * // ---------------
     * // 1. If not already done, enable the Cloud Pub/Sub API
     * //    and check the quota for your project at
     * //    https://console.developers.google.com/apis/api/pubsub
     * // 2. This sample uses Application Default Credentials for authentication.
     * //    If not already done, install the gcloud CLI from
     * //    https://cloud.google.com/sdk and run
     * //    `gcloud beta auth application-default login`.
     * //    For more information, see
     * //    https://developers.google.com/identity/protocols/application-default-credentials
     * // 3. Install the Node.js client library by running
     * //    `npm install googleapis --save`
     *
     * const {google} = require('googleapis');
     * var pubsub = google.pubsub('v1');
     *
     * authorize(function(authClient) {
     *   var request = {
     *     // The name of the topic that subscriptions are attached to.
     *     // Format is `projects/{project}/topics/{topic}`.
     *     topic: 'projects/my-project/topics/my-topic',  // TODO: Update placeholder value.
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
     *     var subscriptionsPage = response['subscriptions'];
     *     if (!subscriptionsPage) {
     *       return;
     *     }
     *     for (var i = 0; i < subscriptionsPage.length; i++) {
     *       // TODO: Change code below to process each resource in `subscriptionsPage`:
     *       console.log(JSON.stringify(subscriptionsPage[i], null, 2));
     *     }
     *
     *     if (response.nextPageToken) {
     *       request.pageToken = response.nextPageToken;
     *       pubsub.projects.topics.subscriptions.list(request, handlePage);
     *     }
     *   };
     *
     *   pubsub.projects.topics.subscriptions.list(request, handlePage);
     * });
     *
     * function authorize(callback) {
     *   google.auth.getClient({
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform']
     *   }).then(client => {
     *     callback(client);
     *   }).catch(err => {
     *     console.error('authentication failed: ', err);
     *   });
     * }
     * @alias pubsub.projects.topics.subscriptions.list
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {integer=} params.pageSize Maximum number of subscription names to return.
     * @param {string=} params.pageToken The value returned by the last `ListTopicSubscriptionsResponse`; indicates that this is a continuation of a prior `ListTopicSubscriptions` call, and that the system should return the next page of data.
     * @param {string} params.topic The name of the topic that subscriptions are attached to. Format is `projects/{project}/topics/{topic}`.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list(
      params?: Params$Resource$Projects$Topics$Subscriptions$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ListTopicSubscriptionsResponse>;
    list(
      params: Params$Resource$Projects$Topics$Subscriptions$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ListTopicSubscriptionsResponse>,
      callback: BodyResponseCallback<Schema$ListTopicSubscriptionsResponse>
    ): void;
    list(
      params: Params$Resource$Projects$Topics$Subscriptions$List,
      callback: BodyResponseCallback<Schema$ListTopicSubscriptionsResponse>
    ): void;
    list(
      callback: BodyResponseCallback<Schema$ListTopicSubscriptionsResponse>
    ): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Projects$Topics$Subscriptions$List
        | BodyResponseCallback<Schema$ListTopicSubscriptionsResponse>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$ListTopicSubscriptionsResponse>,
      callback?: BodyResponseCallback<Schema$ListTopicSubscriptionsResponse>
    ): void | GaxiosPromise<Schema$ListTopicSubscriptionsResponse> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Topics$Subscriptions$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Topics$Subscriptions$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://pubsub.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+topic}/subscriptions').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['topic'],
        pathParams: ['topic'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$ListTopicSubscriptionsResponse>(
          parameters,
          callback
        );
      } else {
        return createAPIRequest<Schema$ListTopicSubscriptionsResponse>(
          parameters
        );
      }
    }
  }

  export interface Params$Resource$Projects$Topics$Subscriptions$List
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Maximum number of subscription names to return.
     */
    pageSize?: number;
    /**
     * The value returned by the last `ListTopicSubscriptionsResponse`; indicates that this is a continuation of a prior `ListTopicSubscriptions` call, and that the system should return the next page of data.
     */
    pageToken?: string;
    /**
     * The name of the topic that subscriptions are attached to. Format is `projects/{project}/topics/{topic}`.
     */
    topic?: string;
  }
}
