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
 * Google Cloud Pub/Sub API
 *
 * Provides reliable, many-to-many, asynchronous messaging between applications.
 *
 * @example
 * const google = require('googleapis');
 * const pubsub = google.pubsub('v1');
 *
 * @namespace pubsub
 * @type {Function}
 * @version v1
 * @variation v1
 * @param {object=} options Options for Pubsub
 */
export class Pubsub {
  _options: GlobalOptions;
  google: GoogleApis;
  root = this;

  projects: Resource$Projects;

  constructor(options: GlobalOptions, google: GoogleApis) {
    this._options = options || {};
    this.google = google;
    this.getRoot.bind(this);

    this.projects = new Resource$Projects(this);
  }

  getRoot() {
    return this.root;
  }
}

/**
 * Request for the Acknowledge method.
 */
export interface Schema$AcknowledgeRequest {
  /**
   * The acknowledgment ID for the messages being acknowledged that was returned
   * by the Pub/Sub system in the `Pull` response. Must not be empty.
   */
  ackIds: string[];
}
/**
 * Associates `members` with a `role`.
 */
export interface Schema$Binding {
  /**
   * Specifies the identities requesting access for a Cloud Platform resource.
   * `members` can have the following values:  * `allUsers`: A special
   * identifier that represents anyone who is    on the internet; with or
   * without a Google account.  * `allAuthenticatedUsers`: A special identifier
   * that represents anyone    who is authenticated with a Google account or a
   * service account.  * `user:{emailid}`: An email address that represents a
   * specific Google    account. For example, `alice@gmail.com` or
   * `joe@example.com`.   * `serviceAccount:{emailid}`: An email address that
   * represents a service    account. For example,
   * `my-other-app@appspot.gserviceaccount.com`.  * `group:{emailid}`: An email
   * address that represents a Google group.    For example,
   * `admins@example.com`.   * `domain:{domain}`: A Google Apps domain name that
   * represents all the    users of that domain. For example, `google.com` or
   * `example.com`.
   */
  members: string[];
  /**
   * Role that is assigned to `members`. For example, `roles/viewer`,
   * `roles/editor`, or `roles/owner`. Required
   */
  role: string;
}
/**
 * Request for the `CreateSnapshot` method.
 */
export interface Schema$CreateSnapshotRequest {
  /**
   * The subscription whose backlog the snapshot retains. Specifically, the
   * created snapshot is guaranteed to retain:  (a) The existing backlog on the
   * subscription. More precisely, this is      defined as the messages in the
   * subscription&#39;s backlog that are      unacknowledged upon the successful
   * completion of the      `CreateSnapshot` request; as well as:  (b) Any
   * messages published to the subscription&#39;s topic following the successful
   * completion of the CreateSnapshot request. Format is
   * `projects/{project}/subscriptions/{sub}`.
   */
  subscription: string;
}
/**
 * A generic empty message that you can re-use to avoid defining duplicated
 * empty messages in your APIs. A typical example is to use it as the request or
 * the response type of an API method. For instance:      service Foo { rpc
 * Bar(google.protobuf.Empty) returns (google.protobuf.Empty);     }  The JSON
 * representation for `Empty` is empty JSON object `{}`.
 */
export interface Schema$Empty {}
/**
 * Response for the `ListSnapshots` method.
 */
export interface Schema$ListSnapshotsResponse {
  /**
   * If not empty, indicates that there may be more snapshot that match the
   * request; this value should be passed in a new `ListSnapshotsRequest`.
   */
  nextPageToken: string;
  /**
   * The resulting snapshots.
   */
  snapshots: Schema$Snapshot[];
}
/**
 * Response for the `ListSubscriptions` method.
 */
export interface Schema$ListSubscriptionsResponse {
  /**
   * If not empty, indicates that there may be more subscriptions that match the
   * request; this value should be passed in a new `ListSubscriptionsRequest` to
   * get more subscriptions.
   */
  nextPageToken: string;
  /**
   * The subscriptions that match the request.
   */
  subscriptions: Schema$Subscription[];
}
/**
 * Response for the `ListTopicSnapshots` method. [ALPHA] This method is a part
 * of a closed Alpha API.
 */
export interface Schema$ListTopicSnapshotsResponse {
  /**
   * If not empty, indicates that there may be more snapshots that match the
   * request; this value should be passed in a new `ListTopicSnapshotsRequest`
   * to get more snapshots.
   */
  nextPageToken: string;
  /**
   * The names of the snapshots that match the request.
   */
  snapshots: string[];
}
/**
 * Response for the `ListTopics` method.
 */
export interface Schema$ListTopicsResponse {
  /**
   * If not empty, indicates that there may be more topics that match the
   * request; this value should be passed in a new `ListTopicsRequest`.
   */
  nextPageToken: string;
  /**
   * The resulting topics.
   */
  topics: Schema$Topic[];
}
/**
 * Response for the `ListTopicSubscriptions` method.
 */
export interface Schema$ListTopicSubscriptionsResponse {
  /**
   * If not empty, indicates that there may be more subscriptions that match the
   * request; this value should be passed in a new
   * `ListTopicSubscriptionsRequest` to get more subscriptions.
   */
  nextPageToken: string;
  /**
   * The names of the subscriptions that match the request.
   */
  subscriptions: string[];
}
/**
 * Request for the ModifyAckDeadline method.
 */
export interface Schema$ModifyAckDeadlineRequest {
  /**
   * The new ack deadline with respect to the time this request was sent to the
   * Pub/Sub system. For example, if the value is 10, the new ack deadline will
   * expire 10 seconds after the `ModifyAckDeadline` call was made. Specifying
   * zero may immediately make the message available for another pull request.
   * The minimum deadline you can specify is 0 seconds. The maximum deadline you
   * can specify is 600 seconds (10 minutes).
   */
  ackDeadlineSeconds: number;
  /**
   * List of acknowledgment IDs.
   */
  ackIds: string[];
}
/**
 * Request for the ModifyPushConfig method.
 */
export interface Schema$ModifyPushConfigRequest {
  /**
   * The push configuration for future deliveries.  An empty `pushConfig`
   * indicates that the Pub/Sub system should stop pushing messages from the
   * given subscription and allow messages to be pulled and acknowledged -
   * effectively pausing the subscription if `Pull` or `StreamingPull` is not
   * called.
   */
  pushConfig: Schema$PushConfig;
}
/**
 * Defines an Identity and Access Management (IAM) policy. It is used to specify
 * access control policies for Cloud Platform resources.   A `Policy` consists
 * of a list of `bindings`. A `Binding` binds a list of `members` to a `role`,
 * where the members can be user accounts, Google groups, Google domains, and
 * service accounts. A `role` is a named list of permissions defined by IAM.
 * **Example**      {       &quot;bindings&quot;: [         { &quot;role&quot;:
 * &quot;roles/owner&quot;,           &quot;members&quot;: [
 * &quot;user:mike@example.com&quot;, &quot;group:admins@example.com&quot;,
 * &quot;domain:google.com&quot;,
 * &quot;serviceAccount:my-other-app@appspot.gserviceaccount.com&quot;, ] }, {
 * &quot;role&quot;: &quot;roles/viewer&quot;,           &quot;members&quot;:
 * [&quot;user:sean@example.com&quot;]         }       ]     }  For a
 * description of IAM and its features, see the [IAM developer&#39;s
 * guide](https://cloud.google.com/iam/docs).
 */
export interface Schema$Policy {
  /**
   * Associates a list of `members` to a `role`. `bindings` with no members will
   * result in an error.
   */
  bindings: Schema$Binding[];
  /**
   * `etag` is used for optimistic concurrency control as a way to help prevent
   * simultaneous updates of a policy from overwriting each other. It is
   * strongly suggested that systems make use of the `etag` in the
   * read-modify-write cycle to perform policy updates in order to avoid race
   * conditions: An `etag` is returned in the response to `getIamPolicy`, and
   * systems are expected to put that etag in the request to `setIamPolicy` to
   * ensure that their change will be applied to the same version of the policy.
   * If no `etag` is provided in the call to `setIamPolicy`, then the existing
   * policy is overwritten blindly.
   */
  etag: string;
  /**
   * Deprecated.
   */
  version: number;
}
/**
 * Request for the Publish method.
 */
export interface Schema$PublishRequest {
  /**
   * The messages to publish.
   */
  messages: Schema$PubsubMessage[];
}
/**
 * Response for the `Publish` method.
 */
export interface Schema$PublishResponse {
  /**
   * The server-assigned ID of each published message, in the same order as the
   * messages in the request. IDs are guaranteed to be unique within the topic.
   */
  messageIds: string[];
}
/**
 * A message data and its attributes. The message payload must not be empty; it
 * must contain either a non-empty data field, or at least one attribute.
 */
export interface Schema$PubsubMessage {
  /**
   * Optional attributes for this message.
   */
  attributes: any;
  /**
   * The message payload.
   */
  data: string;
  /**
   * ID of this message, assigned by the server when the message is published.
   * Guaranteed to be unique within the topic. This value may be read by a
   * subscriber that receives a `PubsubMessage` via a `Pull` call or a push
   * delivery. It must not be populated by the publisher in a `Publish` call.
   */
  messageId: string;
  /**
   * The time at which the message was published, populated by the server when
   * it receives the `Publish` call. It must not be populated by the publisher
   * in a `Publish` call.
   */
  publishTime: string;
}
/**
 * Request for the `Pull` method.
 */
export interface Schema$PullRequest {
  /**
   * The maximum number of messages returned for this request. The Pub/Sub
   * system may return fewer than the number specified.
   */
  maxMessages: number;
  /**
   * If this field set to true, the system will respond immediately even if it
   * there are no messages available to return in the `Pull` response.
   * Otherwise, the system may wait (for a bounded amount of time) until at
   * least one message is available, rather than returning no messages. The
   * client may cancel the request if it does not wish to wait any longer for
   * the response.
   */
  returnImmediately: boolean;
}
/**
 * Response for the `Pull` method.
 */
export interface Schema$PullResponse {
  /**
   * Received Pub/Sub messages. The Pub/Sub system will return zero messages if
   * there are no more available in the backlog. The Pub/Sub system may return
   * fewer than the `maxMessages` requested even if there are more messages
   * available in the backlog.
   */
  receivedMessages: Schema$ReceivedMessage[];
}
/**
 * Configuration for a push delivery endpoint.
 */
export interface Schema$PushConfig {
  /**
   * Endpoint configuration attributes.  Every endpoint has a set of API
   * supported attributes that can be used to control different aspects of the
   * message delivery.  The currently supported attribute is `x-goog-version`,
   * which you can use to change the format of the pushed message. This
   * attribute indicates the version of the data expected by the endpoint. This
   * controls the shape of the pushed message (i.e., its fields and metadata).
   * The endpoint version is based on the version of the Pub/Sub API.  If not
   * present during the `CreateSubscription` call, it will default to the
   * version of the API used to make such call. If not present during a
   * `ModifyPushConfig` call, its value will not be changed. `GetSubscription`
   * calls will always return a valid version, even if the subscription was
   * created without this attribute.  The possible values for this attribute
   * are:  * `v1beta1`: uses the push format defined in the v1beta1 Pub/Sub API.
   * * `v1` or `v1beta2`: uses the push format defined in the v1 Pub/Sub API.
   */
  attributes: any;
  /**
   * A URL locating the endpoint to which messages should be pushed. For
   * example, a Webhook endpoint might use &quot;https://example.com/push&quot;.
   */
  pushEndpoint: string;
}
/**
 * A message and its corresponding acknowledgment ID.
 */
export interface Schema$ReceivedMessage {
  /**
   * This ID can be used to acknowledge the received message.
   */
  ackId: string;
  /**
   * The message.
   */
  message: Schema$PubsubMessage;
}
/**
 * Request for the `Seek` method.
 */
export interface Schema$SeekRequest {
  /**
   * The snapshot to seek to. The snapshot&#39;s topic must be the same as that
   * of the provided subscription. Format is
   * `projects/{project}/snapshots/{snap}`.
   */
  snapshot: string;
  /**
   * The time to seek to. Messages retained in the subscription that were
   * published before this time are marked as acknowledged, and messages
   * retained in the subscription that were published after this time are marked
   * as unacknowledged. Note that this operation affects only those messages
   * retained in the subscription (configured by the combination of
   * `message_retention_duration` and `retain_acked_messages`). For example, if
   * `time` corresponds to a point before the message retention window (or to a
   * point before the system&#39;s notion of the subscription creation time),
   * only retained messages will be marked as unacknowledged, and
   * already-expunged messages will not be restored.
   */
  time: string;
}
export interface Schema$SeekResponse {}
/**
 * Request message for `SetIamPolicy` method.
 */
export interface Schema$SetIamPolicyRequest {
  /**
   * REQUIRED: The complete policy to be applied to the `resource`. The size of
   * the policy is limited to a few 10s of KB. An empty policy is a valid policy
   * but certain Cloud Platform services (such as Projects) might reject them.
   */
  policy: Schema$Policy;
}
/**
 * A snapshot resource.
 */
export interface Schema$Snapshot {
  /**
   * The snapshot is guaranteed to exist up until this time. A newly-created
   * snapshot expires no later than 7 days from the time of its creation. Its
   * exact lifetime is determined at creation by the existing backlog in the
   * source subscription. Specifically, the lifetime of the snapshot is `7 days
   * - (age of oldest unacked message in the subscription)`. For example,
   * consider a subscription whose oldest unacked message is 3 days old. If a
   * snapshot is created from this subscription, the snapshot -- which will
   * always capture this 3-day-old backlog as long as the snapshot exists --
   * will expire in 4 days. The service will refuse to create a snapshot that
   * would expire in less than 1 hour after creation.
   */
  expireTime: string;
  /**
   * The name of the snapshot.
   */
  name: string;
  /**
   * The name of the topic from which this snapshot is retaining messages.
   */
  topic: string;
}
/**
 * A subscription resource.
 */
export interface Schema$Subscription {
  /**
   * This value is the maximum time after a subscriber receives a message before
   * the subscriber should acknowledge the message. After message delivery but
   * before the ack deadline expires and before the message is acknowledged, it
   * is an outstanding message and will not be delivered again during that time
   * (on a best-effort basis).  For pull subscriptions, this value is used as
   * the initial value for the ack deadline. To override this value for a given
   * message, call `ModifyAckDeadline` with the corresponding `ack_id` if using
   * non-streaming pull or send the `ack_id` in a
   * `StreamingModifyAckDeadlineRequest` if using streaming pull. The minimum
   * custom deadline you can specify is 10 seconds. The maximum custom deadline
   * you can specify is 600 seconds (10 minutes). If this parameter is 0, a
   * default value of 10 seconds is used.  For push delivery, this value is also
   * used to set the request timeout for the call to the push endpoint.  If the
   * subscriber never acknowledges the message, the Pub/Sub system will
   * eventually redeliver the message.
   */
  ackDeadlineSeconds: number;
  /**
   * How long to retain unacknowledged messages in the subscription&#39;s
   * backlog, from the moment a message is published. If `retain_acked_messages`
   * is true, then this also configures the retention of acknowledged messages,
   * and thus configures how far back in time a `Seek` can be done. Defaults to
   * 7 days. Cannot be more than 7 days or less than 10 minutes. [ALPHA] This
   * field is a part of a closed Alpha API.
   */
  messageRetentionDuration: string;
  /**
   * The name of the subscription. It must have the format
   * `&quot;projects/{project}/subscriptions/{subscription}&quot;`.
   * `{subscription}` must start with a letter, and contain only letters
   * (`[A-Za-z]`), numbers (`[0-9]`), dashes (`-`), underscores (`_`), periods
   * (`.`), tildes (`~`), plus (`+`) or percent signs (`%`). It must be between
   * 3 and 255 characters in length, and it must not start with
   * `&quot;goog&quot;`.
   */
  name: string;
  /**
   * If push delivery is used with this subscription, this field is used to
   * configure it. An empty `pushConfig` signifies that the subscriber will pull
   * and ack messages using API methods.
   */
  pushConfig: Schema$PushConfig;
  /**
   * Indicates whether to retain acknowledged messages. If true, then messages
   * are not expunged from the subscription&#39;s backlog, even if they are
   * acknowledged, until they fall out of the `message_retention_duration`
   * window. [ALPHA] This field is a part of a closed Alpha API.
   */
  retainAckedMessages: boolean;
  /**
   * The name of the topic from which this subscription is receiving messages.
   * Format is `projects/{project}/topics/{topic}`. The value of this field will
   * be `_deleted-topic_` if the topic has been deleted.
   */
  topic: string;
}
/**
 * Request message for `TestIamPermissions` method.
 */
export interface Schema$TestIamPermissionsRequest {
  /**
   * The set of permissions to check for the `resource`. Permissions with
   * wildcards (such as &#39;*&#39; or &#39;storage.*&#39;) are not allowed. For
   * more information see [IAM
   * Overview](https://cloud.google.com/iam/docs/overview#permissions).
   */
  permissions: string[];
}
/**
 * Response message for `TestIamPermissions` method.
 */
export interface Schema$TestIamPermissionsResponse {
  /**
   * A subset of `TestPermissionsRequest.permissions` that the caller is
   * allowed.
   */
  permissions: string[];
}
/**
 * A topic resource.
 */
export interface Schema$Topic {
  /**
   * The name of the topic. It must have the format
   * `&quot;projects/{project}/topics/{topic}&quot;`. `{topic}` must start with
   * a letter, and contain only letters (`[A-Za-z]`), numbers (`[0-9]`), dashes
   * (`-`), underscores (`_`), periods (`.`), tildes (`~`), plus (`+`) or
   * percent signs (`%`). It must be between 3 and 255 characters in length, and
   * it must not start with `&quot;goog&quot;`.
   */
  name: string;
}
/**
 * Request for the UpdateSnapshot method.
 */
export interface Schema$UpdateSnapshotRequest {
  /**
   * The updated snpashot object.
   */
  snapshot: Schema$Snapshot;
  /**
   * Indicates which fields in the provided snapshot to update. Must be
   * specified and non-empty.
   */
  updateMask: string;
}
/**
 * Request for the UpdateSubscription method.
 */
export interface Schema$UpdateSubscriptionRequest {
  /**
   * The updated subscription object.
   */
  subscription: Schema$Subscription;
  /**
   * Indicates which fields in the provided subscription to update. Must be
   * specified and non-empty.
   */
  updateMask: string;
}

export class Resource$Projects {
  root: Pubsub;
  snapshots: Resource$Projects$Snapshots;
  subscriptions: Resource$Projects$Subscriptions;
  topics: Resource$Projects$Topics;
  constructor(root: Pubsub) {
    this.root = root;
    this.getRoot.bind(this);
    this.snapshots = new Resource$Projects$Snapshots(root);
    this.subscriptions = new Resource$Projects$Subscriptions(root);
    this.topics = new Resource$Projects$Topics(root);
  }

  getRoot() {
    return this.root;
  }
}
export class Resource$Projects$Snapshots {
  root: Pubsub;
  constructor(root: Pubsub) {
    this.root = root;
    this.getRoot.bind(this);
  }

  getRoot() {
    return this.root;
  }


  /**
   * pubsub.projects.snapshots.create
   * @desc [ALPHA] This method is a part of a closed Alpha API. Creates a
   * snapshot from the requested subscription. If the snapshot already exists,
   * returns `ALREADY_EXISTS`. If the requested subscription doesn't exist,
   * returns `NOT_FOUND`. If the backlog in the subscription is too old -- and
   * the resulting snapshot would expire in less than 1 hour -- then
   * `FAILED_PRECONDITION` is returned. See also the `Snapshot.expire_time`
   * field.  If the name is not provided in the request, the server will assign
   * a random name for this snapshot on the same project as the subscription,
   * conforming to the [resource name
   * format](https://cloud.google.com/pubsub/docs/overview#names). The generated
   * name is populated in the returned Snapshot object. Note that for REST API
   * requests, you must specify a name in the request.
   * @alias pubsub.projects.snapshots.create
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.name Optional user-provided name for this snapshot. If the name is not provided in the request, the server will assign a random name for this snapshot on the same project as the subscription. Note that for REST API requests, you must specify a name. Format is `projects/{project}/snapshots/{snap}`.
   * @param {().CreateSnapshotRequest} params.resource Request body data
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  create(params?: any, options?: MethodOptions): AxiosPromise<Schema$Snapshot>;
  create(
      params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$Snapshot>,
      callback?: BodyResponseCallback<Schema$Snapshot>): void;
  create(
      params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$Snapshot>,
      callback?: BodyResponseCallback<Schema$Snapshot>):
      void|AxiosPromise<Schema$Snapshot> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://pubsub.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
            method: 'PUT'
          },
          options),
      params,
      requiredParams: ['name'],
      pathParams: ['name'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$Snapshot>(parameters, callback);
    } else {
      return createAPIRequest<Schema$Snapshot>(parameters);
    }
  }


  /**
   * pubsub.projects.snapshots.delete
   * @desc Removes an existing snapshot. All messages retained in the snapshot
   * are immediately dropped. After a snapshot is deleted, a new one may be
   * created with the same name, but the new one has no association with the old
   * snapshot or its subscription, unless the same subscription is specified.
   * [ALPHA] This method is a part of a closed Alpha API.
   * @alias pubsub.projects.snapshots.delete
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.snapshot The name of the snapshot to delete. Format is `projects/{project}/snapshots/{snap}`.
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
    const rootUrl = options.rootUrl || 'https://pubsub.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url: (rootUrl + '/v1/{+snapshot}').replace(/([^:]\/)\/+/g, '$1'),
            method: 'DELETE'
          },
          options),
      params,
      requiredParams: ['snapshot'],
      pathParams: ['snapshot'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$Empty>(parameters, callback);
    } else {
      return createAPIRequest<Schema$Empty>(parameters);
    }
  }


  /**
   * pubsub.projects.snapshots.get
   * @desc Gets the configuration details of a snapshot. [ALPHA] This method is
   * a part of a closed Alpha API.
   * @alias pubsub.projects.snapshots.get
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.snapshot The name of the snapshot to get. Format is `projects/{project}/snapshots/{snap}`.
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  get(params?: any, options?: MethodOptions): AxiosPromise<Schema$Snapshot>;
  get(params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$Snapshot>,
      callback?: BodyResponseCallback<Schema$Snapshot>): void;
  get(params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$Snapshot>,
      callback?: BodyResponseCallback<Schema$Snapshot>):
      void|AxiosPromise<Schema$Snapshot> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://pubsub.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url: (rootUrl + '/v1/{+snapshot}').replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET'
          },
          options),
      params,
      requiredParams: ['snapshot'],
      pathParams: ['snapshot'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$Snapshot>(parameters, callback);
    } else {
      return createAPIRequest<Schema$Snapshot>(parameters);
    }
  }


  /**
   * pubsub.projects.snapshots.getIamPolicy
   * @desc Gets the access control policy for a resource. Returns an empty
   * policy if the resource exists and does not have a policy set.
   * @example
   * * // BEFORE RUNNING:
   * // ---------------
   * // 1. If not already done, enable the Google Cloud Pub/Sub API
   * //    and check the quota for your project at
   * //    https://console.developers.google.com/apis/api/pubsub
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
   * var pubsub = google.pubsub('v1');
   *
   * authorize(function(authClient) {
   *   var request = {
   *     // REQUIRED: The resource for which the policy is being requested.
   *     // See the operation documentation for the appropriate value for this
   * field. resource_: 'projects/my-project/snapshots/my-snapshot',  // TODO:
   * Update placeholder value.
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
   * @alias pubsub.projects.snapshots.getIamPolicy
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.resource_ REQUIRED: The resource for which the policy is being requested. See the operation documentation for the appropriate value for this field.
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  getIamPolicy(params?: any, options?: MethodOptions):
      AxiosPromise<Schema$Policy>;
  getIamPolicy(
      params?: any, options?: MethodOptions|BodyResponseCallback<Schema$Policy>,
      callback?: BodyResponseCallback<Schema$Policy>): void;
  getIamPolicy(
      params?: any, options?: MethodOptions|BodyResponseCallback<Schema$Policy>,
      callback?: BodyResponseCallback<Schema$Policy>):
      void|AxiosPromise<Schema$Policy> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://pubsub.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url: (rootUrl + '/v1/{+resource}:getIamPolicy')
                     .replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET'
          },
          options),
      params,
      requiredParams: ['resource'],
      pathParams: ['resource'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$Policy>(parameters, callback);
    } else {
      return createAPIRequest<Schema$Policy>(parameters);
    }
  }


  /**
   * pubsub.projects.snapshots.list
   * @desc Lists the existing snapshots. [ALPHA] This method is a part of a
   * closed Alpha API.
   * @alias pubsub.projects.snapshots.list
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {integer=} params.pageSize Maximum number of snapshots to return.
   * @param {string=} params.pageToken The value returned by the last `ListSnapshotsResponse`; indicates that this is a continuation of a prior `ListSnapshots` call, and that the system should return the next page of data.
   * @param {string} params.project The name of the cloud project that snapshots belong to. Format is `projects/{project}`.
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  list(params?: any, options?: MethodOptions):
      AxiosPromise<Schema$ListSnapshotsResponse>;
  list(
      params?: any,
      options?: MethodOptions|
      BodyResponseCallback<Schema$ListSnapshotsResponse>,
      callback?: BodyResponseCallback<Schema$ListSnapshotsResponse>): void;
  list(
      params?: any,
      options?: MethodOptions|
      BodyResponseCallback<Schema$ListSnapshotsResponse>,
      callback?: BodyResponseCallback<Schema$ListSnapshotsResponse>):
      void|AxiosPromise<Schema$ListSnapshotsResponse> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://pubsub.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url: (rootUrl + '/v1/{+project}/snapshots')
                     .replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET'
          },
          options),
      params,
      requiredParams: ['project'],
      pathParams: ['project'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$ListSnapshotsResponse>(parameters, callback);
    } else {
      return createAPIRequest<Schema$ListSnapshotsResponse>(parameters);
    }
  }


  /**
   * pubsub.projects.snapshots.patch
   * @desc Updates an existing snapshot. Note that certain properties of a
   * snapshot are not modifiable. [ALPHA] This method is a part of a closed
   * Alpha API.
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
  patch(params?: any, options?: MethodOptions): AxiosPromise<Schema$Snapshot>;
  patch(
      params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$Snapshot>,
      callback?: BodyResponseCallback<Schema$Snapshot>): void;
  patch(
      params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$Snapshot>,
      callback?: BodyResponseCallback<Schema$Snapshot>):
      void|AxiosPromise<Schema$Snapshot> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://pubsub.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
            method: 'PATCH'
          },
          options),
      params,
      requiredParams: ['name'],
      pathParams: ['name'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$Snapshot>(parameters, callback);
    } else {
      return createAPIRequest<Schema$Snapshot>(parameters);
    }
  }


  /**
   * pubsub.projects.snapshots.setIamPolicy
   * @desc Sets the access control policy on the specified resource. Replaces
   * any existing policy.
   * @example
   * * // BEFORE RUNNING:
   * // ---------------
   * // 1. If not already done, enable the Google Cloud Pub/Sub API
   * //    and check the quota for your project at
   * //    https://console.developers.google.com/apis/api/pubsub
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
   * var pubsub = google.pubsub('v1');
   *
   * authorize(function(authClient) {
   *   var request = {
   *     // REQUIRED: The resource for which the policy is being specified.
   *     // See the operation documentation for the appropriate value for this
   * field. resource_: 'projects/my-project/snapshots/my-snapshot',  // TODO:
   * Update placeholder value.
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
  setIamPolicy(params?: any, options?: MethodOptions):
      AxiosPromise<Schema$Policy>;
  setIamPolicy(
      params?: any, options?: MethodOptions|BodyResponseCallback<Schema$Policy>,
      callback?: BodyResponseCallback<Schema$Policy>): void;
  setIamPolicy(
      params?: any, options?: MethodOptions|BodyResponseCallback<Schema$Policy>,
      callback?: BodyResponseCallback<Schema$Policy>):
      void|AxiosPromise<Schema$Policy> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://pubsub.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url: (rootUrl + '/v1/{+resource}:setIamPolicy')
                     .replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST'
          },
          options),
      params,
      requiredParams: ['resource'],
      pathParams: ['resource'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$Policy>(parameters, callback);
    } else {
      return createAPIRequest<Schema$Policy>(parameters);
    }
  }


  /**
   * pubsub.projects.snapshots.testIamPermissions
   * @desc Returns permissions that a caller has on the specified resource. If
   * the resource does not exist, this will return an empty set of permissions,
   * not a NOT_FOUND error.  Note: This operation is designed to be used for
   * building permission-aware UIs and command-line tools, not for authorization
   * checking. This operation may "fail open" without warning.
   * @example
   * * // BEFORE RUNNING:
   * // ---------------
   * // 1. If not already done, enable the Google Cloud Pub/Sub API
   * //    and check the quota for your project at
   * //    https://console.developers.google.com/apis/api/pubsub
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
   * var pubsub = google.pubsub('v1');
   *
   * authorize(function(authClient) {
   *   var request = {
   *     // REQUIRED: The resource for which the policy detail is being
   * requested.
   *     // See the operation documentation for the appropriate value for this
   * field. resource_: 'projects/my-project/snapshots/my-snapshot',  // TODO:
   * Update placeholder value.
   *
   *     resource: {
   *       // TODO: Add desired properties to the request body.
   *     },
   *
   *     auth: authClient,
   *   };
   *
   *   pubsub.projects.snapshots.testIamPermissions(request, function(err,
   * response) { if (err) { console.error(err); return;
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
  testIamPermissions(params?: any, options?: MethodOptions):
      AxiosPromise<Schema$TestIamPermissionsResponse>;
  testIamPermissions(
      params?: any,
      options?: MethodOptions|
      BodyResponseCallback<Schema$TestIamPermissionsResponse>,
      callback?: BodyResponseCallback<Schema$TestIamPermissionsResponse>): void;
  testIamPermissions(
      params?: any,
      options?: MethodOptions|
      BodyResponseCallback<Schema$TestIamPermissionsResponse>,
      callback?: BodyResponseCallback<Schema$TestIamPermissionsResponse>):
      void|AxiosPromise<Schema$TestIamPermissionsResponse> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://pubsub.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url: (rootUrl + '/v1/{+resource}:testIamPermissions')
                     .replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST'
          },
          options),
      params,
      requiredParams: ['resource'],
      pathParams: ['resource'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$TestIamPermissionsResponse>(parameters, callback);
    } else {
      return createAPIRequest<Schema$TestIamPermissionsResponse>(parameters);
    }
  }
}

export class Resource$Projects$Subscriptions {
  root: Pubsub;
  constructor(root: Pubsub) {
    this.root = root;
    this.getRoot.bind(this);
  }

  getRoot() {
    return this.root;
  }


  /**
   * pubsub.projects.subscriptions.acknowledge
   * @desc Acknowledges the messages associated with the `ack_ids` in the
   * `AcknowledgeRequest`. The Pub/Sub system can remove the relevant messages
   * from the subscription.  Acknowledging a message whose ack deadline has
   * expired may succeed, but such a message may be redelivered later.
   * Acknowledging a message more than once will not result in an error.
   * @example
   * * // BEFORE RUNNING:
   * // ---------------
   * // 1. If not already done, enable the Google Cloud Pub/Sub API
   * //    and check the quota for your project at
   * //    https://console.developers.google.com/apis/api/pubsub
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
   * var pubsub = google.pubsub('v1');
   *
   * authorize(function(authClient) {
   *   var request = {
   *     // The subscription whose message is being acknowledged.
   *     // Format is `projects/{project}/subscriptions/{sub}`.
   *     subscription: 'projects/my-project/subscriptions/my-subscription',  //
   * TODO: Update placeholder value.
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
  acknowledge(params?: any, options?: MethodOptions):
      AxiosPromise<Schema$Empty>;
  acknowledge(
      params?: any, options?: MethodOptions|BodyResponseCallback<Schema$Empty>,
      callback?: BodyResponseCallback<Schema$Empty>): void;
  acknowledge(
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
    const rootUrl = options.rootUrl || 'https://pubsub.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url: (rootUrl + '/v1/{+subscription}:acknowledge')
                     .replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST'
          },
          options),
      params,
      requiredParams: ['subscription'],
      pathParams: ['subscription'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$Empty>(parameters, callback);
    } else {
      return createAPIRequest<Schema$Empty>(parameters);
    }
  }


  /**
   * pubsub.projects.subscriptions.create
   * @desc Creates a subscription to a given topic. If the subscription already
   * exists, returns `ALREADY_EXISTS`. If the corresponding topic doesn't exist,
   * returns `NOT_FOUND`.  If the name is not provided in the request, the
   * server will assign a random name for this subscription on the same project
   * as the topic, conforming to the [resource name
   * format](https://cloud.google.com/pubsub/docs/overview#names). The generated
   * name is populated in the returned Subscription object. Note that for REST
   * API requests, you must specify a name in the request.
   * @example
   * * // BEFORE RUNNING:
   * // ---------------
   * // 1. If not already done, enable the Google Cloud Pub/Sub API
   * //    and check the quota for your project at
   * //    https://console.developers.google.com/apis/api/pubsub
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
   * var pubsub = google.pubsub('v1');
   *
   * authorize(function(authClient) {
   *   var request = {
   *     // The name of the subscription. It must have the format
   *     // `"projects/{project}/subscriptions/{subscription}"`.
   * `{subscription}` must
   *     // start with a letter, and contain only letters (`[A-Za-z]`), numbers
   *     // (`[0-9]`), dashes (`-`), underscores (`_`), periods (`.`), tildes
   * (`~`),
   *     // plus (`+`) or percent signs (`%`). It must be between 3 and 255
   * characters
   *     // in length, and it must not start with `"goog"`.
   *     name: 'projects/my-project/subscriptions/my-subscription',  // TODO:
   * Update placeholder value.
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
  create(params?: any, options?: MethodOptions):
      AxiosPromise<Schema$Subscription>;
  create(
      params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$Subscription>,
      callback?: BodyResponseCallback<Schema$Subscription>): void;
  create(
      params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$Subscription>,
      callback?: BodyResponseCallback<Schema$Subscription>):
      void|AxiosPromise<Schema$Subscription> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://pubsub.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
            method: 'PUT'
          },
          options),
      params,
      requiredParams: ['name'],
      pathParams: ['name'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$Subscription>(parameters, callback);
    } else {
      return createAPIRequest<Schema$Subscription>(parameters);
    }
  }


  /**
   * pubsub.projects.subscriptions.delete
   * @desc Deletes an existing subscription. All messages retained in the
   * subscription are immediately dropped. Calls to `Pull` after deletion will
   * return `NOT_FOUND`. After a subscription is deleted, a new one may be
   * created with the same name, but the new one has no association with the old
   * subscription or its topic unless the same topic is specified.
   * @example
   * * // BEFORE RUNNING:
   * // ---------------
   * // 1. If not already done, enable the Google Cloud Pub/Sub API
   * //    and check the quota for your project at
   * //    https://console.developers.google.com/apis/api/pubsub
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
   * var pubsub = google.pubsub('v1');
   *
   * authorize(function(authClient) {
   *   var request = {
   *     // The subscription to delete.
   *     // Format is `projects/{project}/subscriptions/{sub}`.
   *     subscription: 'projects/my-project/subscriptions/my-subscription',  //
   * TODO: Update placeholder value.
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
   * @alias pubsub.projects.subscriptions.delete
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.subscription The subscription to delete. Format is `projects/{project}/subscriptions/{sub}`.
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
    const rootUrl = options.rootUrl || 'https://pubsub.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url:
                (rootUrl + '/v1/{+subscription}').replace(/([^:]\/)\/+/g, '$1'),
            method: 'DELETE'
          },
          options),
      params,
      requiredParams: ['subscription'],
      pathParams: ['subscription'],
      context: this.getRoot()
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
   * // 1. If not already done, enable the Google Cloud Pub/Sub API
   * //    and check the quota for your project at
   * //    https://console.developers.google.com/apis/api/pubsub
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
   * var pubsub = google.pubsub('v1');
   *
   * authorize(function(authClient) {
   *   var request = {
   *     // The name of the subscription to get.
   *     // Format is `projects/{project}/subscriptions/{sub}`.
   *     subscription: 'projects/my-project/subscriptions/my-subscription',  //
   * TODO: Update placeholder value.
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
   * @alias pubsub.projects.subscriptions.get
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.subscription The name of the subscription to get. Format is `projects/{project}/subscriptions/{sub}`.
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  get(params?: any, options?: MethodOptions): AxiosPromise<Schema$Subscription>;
  get(params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$Subscription>,
      callback?: BodyResponseCallback<Schema$Subscription>): void;
  get(params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$Subscription>,
      callback?: BodyResponseCallback<Schema$Subscription>):
      void|AxiosPromise<Schema$Subscription> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://pubsub.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url:
                (rootUrl + '/v1/{+subscription}').replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET'
          },
          options),
      params,
      requiredParams: ['subscription'],
      pathParams: ['subscription'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$Subscription>(parameters, callback);
    } else {
      return createAPIRequest<Schema$Subscription>(parameters);
    }
  }


  /**
   * pubsub.projects.subscriptions.getIamPolicy
   * @desc Gets the access control policy for a resource. Returns an empty
   * policy if the resource exists and does not have a policy set.
   * @example
   * * // BEFORE RUNNING:
   * // ---------------
   * // 1. If not already done, enable the Google Cloud Pub/Sub API
   * //    and check the quota for your project at
   * //    https://console.developers.google.com/apis/api/pubsub
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
   * var pubsub = google.pubsub('v1');
   *
   * authorize(function(authClient) {
   *   var request = {
   *     // REQUIRED: The resource for which the policy is being requested.
   *     // See the operation documentation for the appropriate value for this
   * field. resource_: 'projects/my-project/subscriptions/my-subscription',  //
   * TODO: Update placeholder value.
   *
   *     auth: authClient,
   *   };
   *
   *   pubsub.projects.subscriptions.getIamPolicy(request, function(err,
   * response) { if (err) { console.error(err); return;
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
   * @alias pubsub.projects.subscriptions.getIamPolicy
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.resource_ REQUIRED: The resource for which the policy is being requested. See the operation documentation for the appropriate value for this field.
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  getIamPolicy(params?: any, options?: MethodOptions):
      AxiosPromise<Schema$Policy>;
  getIamPolicy(
      params?: any, options?: MethodOptions|BodyResponseCallback<Schema$Policy>,
      callback?: BodyResponseCallback<Schema$Policy>): void;
  getIamPolicy(
      params?: any, options?: MethodOptions|BodyResponseCallback<Schema$Policy>,
      callback?: BodyResponseCallback<Schema$Policy>):
      void|AxiosPromise<Schema$Policy> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://pubsub.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url: (rootUrl + '/v1/{+resource}:getIamPolicy')
                     .replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET'
          },
          options),
      params,
      requiredParams: ['resource'],
      pathParams: ['resource'],
      context: this.getRoot()
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
   * // 1. If not already done, enable the Google Cloud Pub/Sub API
   * //    and check the quota for your project at
   * //    https://console.developers.google.com/apis/api/pubsub
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
   * var pubsub = google.pubsub('v1');
   *
   * authorize(function(authClient) {
   *   var request = {
   *     // The name of the cloud project that subscriptions belong to.
   *     // Format is `projects/{project}`.
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
   *       // TODO: Change code below to process each resource in
   * `subscriptionsPage`: console.log(JSON.stringify(subscriptionsPage[i], null,
   * 2));
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
   * @alias pubsub.projects.subscriptions.list
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {integer=} params.pageSize Maximum number of subscriptions to return.
   * @param {string=} params.pageToken The value returned by the last `ListSubscriptionsResponse`; indicates that this is a continuation of a prior `ListSubscriptions` call, and that the system should return the next page of data.
   * @param {string} params.project The name of the cloud project that subscriptions belong to. Format is `projects/{project}`.
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  list(params?: any, options?: MethodOptions):
      AxiosPromise<Schema$ListSubscriptionsResponse>;
  list(
      params?: any,
      options?: MethodOptions|
      BodyResponseCallback<Schema$ListSubscriptionsResponse>,
      callback?: BodyResponseCallback<Schema$ListSubscriptionsResponse>): void;
  list(
      params?: any,
      options?: MethodOptions|
      BodyResponseCallback<Schema$ListSubscriptionsResponse>,
      callback?: BodyResponseCallback<Schema$ListSubscriptionsResponse>):
      void|AxiosPromise<Schema$ListSubscriptionsResponse> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://pubsub.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url: (rootUrl + '/v1/{+project}/subscriptions')
                     .replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET'
          },
          options),
      params,
      requiredParams: ['project'],
      pathParams: ['project'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$ListSubscriptionsResponse>(parameters, callback);
    } else {
      return createAPIRequest<Schema$ListSubscriptionsResponse>(parameters);
    }
  }


  /**
   * pubsub.projects.subscriptions.modifyAckDeadline
   * @desc Modifies the ack deadline for a specific message. This method is
   * useful to indicate that more time is needed to process a message by the
   * subscriber, or to make the message available for redelivery if the
   * processing was interrupted. Note that this does not modify the
   * subscription-level `ackDeadlineSeconds` used for subsequent messages.
   * @example
   * * // BEFORE RUNNING:
   * // ---------------
   * // 1. If not already done, enable the Google Cloud Pub/Sub API
   * //    and check the quota for your project at
   * //    https://console.developers.google.com/apis/api/pubsub
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
   * var pubsub = google.pubsub('v1');
   *
   * authorize(function(authClient) {
   *   var request = {
   *     // The name of the subscription.
   *     // Format is `projects/{project}/subscriptions/{sub}`.
   *     subscription: 'projects/my-project/subscriptions/my-subscription',  //
   * TODO: Update placeholder value.
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
  modifyAckDeadline(params?: any, options?: MethodOptions):
      AxiosPromise<Schema$Empty>;
  modifyAckDeadline(
      params?: any, options?: MethodOptions|BodyResponseCallback<Schema$Empty>,
      callback?: BodyResponseCallback<Schema$Empty>): void;
  modifyAckDeadline(
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
    const rootUrl = options.rootUrl || 'https://pubsub.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url: (rootUrl + '/v1/{+subscription}:modifyAckDeadline')
                     .replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST'
          },
          options),
      params,
      requiredParams: ['subscription'],
      pathParams: ['subscription'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$Empty>(parameters, callback);
    } else {
      return createAPIRequest<Schema$Empty>(parameters);
    }
  }


  /**
   * pubsub.projects.subscriptions.modifyPushConfig
   * @desc Modifies the `PushConfig` for a specified subscription.  This may be
   * used to change a push subscription to a pull one (signified by an empty
   * `PushConfig`) or vice versa, or change the endpoint URL and other
   * attributes of a push subscription. Messages will accumulate for delivery
   * continuously through the call regardless of changes to the `PushConfig`.
   * @example
   * * // BEFORE RUNNING:
   * // ---------------
   * // 1. If not already done, enable the Google Cloud Pub/Sub API
   * //    and check the quota for your project at
   * //    https://console.developers.google.com/apis/api/pubsub
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
   * var pubsub = google.pubsub('v1');
   *
   * authorize(function(authClient) {
   *   var request = {
   *     // The name of the subscription.
   *     // Format is `projects/{project}/subscriptions/{sub}`.
   *     subscription: 'projects/my-project/subscriptions/my-subscription',  //
   * TODO: Update placeholder value.
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
  modifyPushConfig(params?: any, options?: MethodOptions):
      AxiosPromise<Schema$Empty>;
  modifyPushConfig(
      params?: any, options?: MethodOptions|BodyResponseCallback<Schema$Empty>,
      callback?: BodyResponseCallback<Schema$Empty>): void;
  modifyPushConfig(
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
    const rootUrl = options.rootUrl || 'https://pubsub.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url: (rootUrl + '/v1/{+subscription}:modifyPushConfig')
                     .replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST'
          },
          options),
      params,
      requiredParams: ['subscription'],
      pathParams: ['subscription'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$Empty>(parameters, callback);
    } else {
      return createAPIRequest<Schema$Empty>(parameters);
    }
  }


  /**
   * pubsub.projects.subscriptions.patch
   * @desc Updates an existing subscription. Note that certain properties of a
   * subscription, such as its topic, are not modifiable.
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
  patch(params?: any, options?: MethodOptions):
      AxiosPromise<Schema$Subscription>;
  patch(
      params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$Subscription>,
      callback?: BodyResponseCallback<Schema$Subscription>): void;
  patch(
      params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$Subscription>,
      callback?: BodyResponseCallback<Schema$Subscription>):
      void|AxiosPromise<Schema$Subscription> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://pubsub.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
            method: 'PATCH'
          },
          options),
      params,
      requiredParams: ['name'],
      pathParams: ['name'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$Subscription>(parameters, callback);
    } else {
      return createAPIRequest<Schema$Subscription>(parameters);
    }
  }


  /**
   * pubsub.projects.subscriptions.pull
   * @desc Pulls messages from the server. Returns an empty list if there are no
   * messages available in the backlog. The server may return `UNAVAILABLE` if
   * there are too many concurrent pull requests pending for the given
   * subscription.
   * @example
   * * // BEFORE RUNNING:
   * // ---------------
   * // 1. If not already done, enable the Google Cloud Pub/Sub API
   * //    and check the quota for your project at
   * //    https://console.developers.google.com/apis/api/pubsub
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
   * var pubsub = google.pubsub('v1');
   *
   * authorize(function(authClient) {
   *   var request = {
   *     // The subscription from which messages should be pulled.
   *     // Format is `projects/{project}/subscriptions/{sub}`.
   *     subscription: 'projects/my-project/subscriptions/my-subscription',  //
   * TODO: Update placeholder value.
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
  pull(params?: any, options?: MethodOptions):
      AxiosPromise<Schema$PullResponse>;
  pull(
      params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$PullResponse>,
      callback?: BodyResponseCallback<Schema$PullResponse>): void;
  pull(
      params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$PullResponse>,
      callback?: BodyResponseCallback<Schema$PullResponse>):
      void|AxiosPromise<Schema$PullResponse> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://pubsub.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url: (rootUrl + '/v1/{+subscription}:pull')
                     .replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST'
          },
          options),
      params,
      requiredParams: ['subscription'],
      pathParams: ['subscription'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$PullResponse>(parameters, callback);
    } else {
      return createAPIRequest<Schema$PullResponse>(parameters);
    }
  }


  /**
   * pubsub.projects.subscriptions.seek
   * @desc Seeks an existing subscription to a point in time or to a given
   * snapshot, whichever is provided in the request. [ALPHA] This method is a
   * part of a closed Alpha API.
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
  seek(params?: any, options?: MethodOptions):
      AxiosPromise<Schema$SeekResponse>;
  seek(
      params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$SeekResponse>,
      callback?: BodyResponseCallback<Schema$SeekResponse>): void;
  seek(
      params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$SeekResponse>,
      callback?: BodyResponseCallback<Schema$SeekResponse>):
      void|AxiosPromise<Schema$SeekResponse> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://pubsub.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url: (rootUrl + '/v1/{+subscription}:seek')
                     .replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST'
          },
          options),
      params,
      requiredParams: ['subscription'],
      pathParams: ['subscription'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$SeekResponse>(parameters, callback);
    } else {
      return createAPIRequest<Schema$SeekResponse>(parameters);
    }
  }


  /**
   * pubsub.projects.subscriptions.setIamPolicy
   * @desc Sets the access control policy on the specified resource. Replaces
   * any existing policy.
   * @example
   * * // BEFORE RUNNING:
   * // ---------------
   * // 1. If not already done, enable the Google Cloud Pub/Sub API
   * //    and check the quota for your project at
   * //    https://console.developers.google.com/apis/api/pubsub
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
   * var pubsub = google.pubsub('v1');
   *
   * authorize(function(authClient) {
   *   var request = {
   *     // REQUIRED: The resource for which the policy is being specified.
   *     // See the operation documentation for the appropriate value for this
   * field. resource_: 'projects/my-project/subscriptions/my-subscription',  //
   * TODO: Update placeholder value.
   *
   *     resource: {
   *       // TODO: Add desired properties to the request body.
   *     },
   *
   *     auth: authClient,
   *   };
   *
   *   pubsub.projects.subscriptions.setIamPolicy(request, function(err,
   * response) { if (err) { console.error(err); return;
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
  setIamPolicy(params?: any, options?: MethodOptions):
      AxiosPromise<Schema$Policy>;
  setIamPolicy(
      params?: any, options?: MethodOptions|BodyResponseCallback<Schema$Policy>,
      callback?: BodyResponseCallback<Schema$Policy>): void;
  setIamPolicy(
      params?: any, options?: MethodOptions|BodyResponseCallback<Schema$Policy>,
      callback?: BodyResponseCallback<Schema$Policy>):
      void|AxiosPromise<Schema$Policy> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://pubsub.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url: (rootUrl + '/v1/{+resource}:setIamPolicy')
                     .replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST'
          },
          options),
      params,
      requiredParams: ['resource'],
      pathParams: ['resource'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$Policy>(parameters, callback);
    } else {
      return createAPIRequest<Schema$Policy>(parameters);
    }
  }


  /**
   * pubsub.projects.subscriptions.testIamPermissions
   * @desc Returns permissions that a caller has on the specified resource. If
   * the resource does not exist, this will return an empty set of permissions,
   * not a NOT_FOUND error.  Note: This operation is designed to be used for
   * building permission-aware UIs and command-line tools, not for authorization
   * checking. This operation may "fail open" without warning.
   * @example
   * * // BEFORE RUNNING:
   * // ---------------
   * // 1. If not already done, enable the Google Cloud Pub/Sub API
   * //    and check the quota for your project at
   * //    https://console.developers.google.com/apis/api/pubsub
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
   * var pubsub = google.pubsub('v1');
   *
   * authorize(function(authClient) {
   *   var request = {
   *     // REQUIRED: The resource for which the policy detail is being
   * requested.
   *     // See the operation documentation for the appropriate value for this
   * field. resource_: 'projects/my-project/subscriptions/my-subscription',  //
   * TODO: Update placeholder value.
   *
   *     resource: {
   *       // TODO: Add desired properties to the request body.
   *     },
   *
   *     auth: authClient,
   *   };
   *
   *   pubsub.projects.subscriptions.testIamPermissions(request, function(err,
   * response) { if (err) { console.error(err); return;
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
  testIamPermissions(params?: any, options?: MethodOptions):
      AxiosPromise<Schema$TestIamPermissionsResponse>;
  testIamPermissions(
      params?: any,
      options?: MethodOptions|
      BodyResponseCallback<Schema$TestIamPermissionsResponse>,
      callback?: BodyResponseCallback<Schema$TestIamPermissionsResponse>): void;
  testIamPermissions(
      params?: any,
      options?: MethodOptions|
      BodyResponseCallback<Schema$TestIamPermissionsResponse>,
      callback?: BodyResponseCallback<Schema$TestIamPermissionsResponse>):
      void|AxiosPromise<Schema$TestIamPermissionsResponse> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://pubsub.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url: (rootUrl + '/v1/{+resource}:testIamPermissions')
                     .replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST'
          },
          options),
      params,
      requiredParams: ['resource'],
      pathParams: ['resource'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$TestIamPermissionsResponse>(parameters, callback);
    } else {
      return createAPIRequest<Schema$TestIamPermissionsResponse>(parameters);
    }
  }
}

export class Resource$Projects$Topics {
  root: Pubsub;
  snapshots: Resource$Projects$Topics$Snapshots;
  subscriptions: Resource$Projects$Topics$Subscriptions;
  constructor(root: Pubsub) {
    this.root = root;
    this.getRoot.bind(this);
    this.snapshots = new Resource$Projects$Topics$Snapshots(root);
    this.subscriptions = new Resource$Projects$Topics$Subscriptions(root);
  }

  getRoot() {
    return this.root;
  }


  /**
   * pubsub.projects.topics.create
   * @desc Creates the given topic with the given name.
   * @example
   * * // BEFORE RUNNING:
   * // ---------------
   * // 1. If not already done, enable the Google Cloud Pub/Sub API
   * //    and check the quota for your project at
   * //    https://console.developers.google.com/apis/api/pubsub
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
   * var pubsub = google.pubsub('v1');
   *
   * authorize(function(authClient) {
   *   var request = {
   *     // The name of the topic. It must have the format
   *     // `"projects/{project}/topics/{topic}"`. `{topic}` must start with a
   * letter,
   *     // and contain only letters (`[A-Za-z]`), numbers (`[0-9]`), dashes
   * (`-`),
   *     // underscores (`_`), periods (`.`), tildes (`~`), plus (`+`) or
   * percent
   *     // signs (`%`). It must be between 3 and 255 characters in length, and
   * it
   *     // must not start with `"goog"`.
   *     name: 'projects/my-project/topics/my-topic',  // TODO: Update
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
  create(params?: any, options?: MethodOptions): AxiosPromise<Schema$Topic>;
  create(
      params?: any, options?: MethodOptions|BodyResponseCallback<Schema$Topic>,
      callback?: BodyResponseCallback<Schema$Topic>): void;
  create(
      params?: any, options?: MethodOptions|BodyResponseCallback<Schema$Topic>,
      callback?: BodyResponseCallback<Schema$Topic>):
      void|AxiosPromise<Schema$Topic> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://pubsub.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
            method: 'PUT'
          },
          options),
      params,
      requiredParams: ['name'],
      pathParams: ['name'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$Topic>(parameters, callback);
    } else {
      return createAPIRequest<Schema$Topic>(parameters);
    }
  }


  /**
   * pubsub.projects.topics.delete
   * @desc Deletes the topic with the given name. Returns `NOT_FOUND` if the
   * topic does not exist. After a topic is deleted, a new topic may be created
   * with the same name; this is an entirely new topic with none of the old
   * configuration or subscriptions. Existing subscriptions to this topic are
   * not deleted, but their `topic` field is set to `_deleted-topic_`.
   * @example
   * * // BEFORE RUNNING:
   * // ---------------
   * // 1. If not already done, enable the Google Cloud Pub/Sub API
   * //    and check the quota for your project at
   * //    https://console.developers.google.com/apis/api/pubsub
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
   * var pubsub = google.pubsub('v1');
   *
   * authorize(function(authClient) {
   *   var request = {
   *     // Name of the topic to delete.
   *     // Format is `projects/{project}/topics/{topic}`.
   *     topic: 'projects/my-project/topics/my-topic',  // TODO: Update
   * placeholder value.
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
   * @alias pubsub.projects.topics.delete
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.topic Name of the topic to delete. Format is `projects/{project}/topics/{topic}`.
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
    const rootUrl = options.rootUrl || 'https://pubsub.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url: (rootUrl + '/v1/{+topic}').replace(/([^:]\/)\/+/g, '$1'),
            method: 'DELETE'
          },
          options),
      params,
      requiredParams: ['topic'],
      pathParams: ['topic'],
      context: this.getRoot()
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
   * // 1. If not already done, enable the Google Cloud Pub/Sub API
   * //    and check the quota for your project at
   * //    https://console.developers.google.com/apis/api/pubsub
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
   * var pubsub = google.pubsub('v1');
   *
   * authorize(function(authClient) {
   *   var request = {
   *     // The name of the topic to get.
   *     // Format is `projects/{project}/topics/{topic}`.
   *     topic: 'projects/my-project/topics/my-topic',  // TODO: Update
   * placeholder value.
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
   * @alias pubsub.projects.topics.get
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.topic The name of the topic to get. Format is `projects/{project}/topics/{topic}`.
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  get(params?: any, options?: MethodOptions): AxiosPromise<Schema$Topic>;
  get(params?: any, options?: MethodOptions|BodyResponseCallback<Schema$Topic>,
      callback?: BodyResponseCallback<Schema$Topic>): void;
  get(params?: any, options?: MethodOptions|BodyResponseCallback<Schema$Topic>,
      callback?: BodyResponseCallback<Schema$Topic>):
      void|AxiosPromise<Schema$Topic> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://pubsub.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url: (rootUrl + '/v1/{+topic}').replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET'
          },
          options),
      params,
      requiredParams: ['topic'],
      pathParams: ['topic'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$Topic>(parameters, callback);
    } else {
      return createAPIRequest<Schema$Topic>(parameters);
    }
  }


  /**
   * pubsub.projects.topics.getIamPolicy
   * @desc Gets the access control policy for a resource. Returns an empty
   * policy if the resource exists and does not have a policy set.
   * @example
   * * // BEFORE RUNNING:
   * // ---------------
   * // 1. If not already done, enable the Google Cloud Pub/Sub API
   * //    and check the quota for your project at
   * //    https://console.developers.google.com/apis/api/pubsub
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
   * var pubsub = google.pubsub('v1');
   *
   * authorize(function(authClient) {
   *   var request = {
   *     // REQUIRED: The resource for which the policy is being requested.
   *     // See the operation documentation for the appropriate value for this
   * field. resource_: 'projects/my-project/topics/my-topic',  // TODO: Update
   * placeholder value.
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
   * @alias pubsub.projects.topics.getIamPolicy
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.resource_ REQUIRED: The resource for which the policy is being requested. See the operation documentation for the appropriate value for this field.
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  getIamPolicy(params?: any, options?: MethodOptions):
      AxiosPromise<Schema$Policy>;
  getIamPolicy(
      params?: any, options?: MethodOptions|BodyResponseCallback<Schema$Policy>,
      callback?: BodyResponseCallback<Schema$Policy>): void;
  getIamPolicy(
      params?: any, options?: MethodOptions|BodyResponseCallback<Schema$Policy>,
      callback?: BodyResponseCallback<Schema$Policy>):
      void|AxiosPromise<Schema$Policy> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://pubsub.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url: (rootUrl + '/v1/{+resource}:getIamPolicy')
                     .replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET'
          },
          options),
      params,
      requiredParams: ['resource'],
      pathParams: ['resource'],
      context: this.getRoot()
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
   * // 1. If not already done, enable the Google Cloud Pub/Sub API
   * //    and check the quota for your project at
   * //    https://console.developers.google.com/apis/api/pubsub
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
   * var pubsub = google.pubsub('v1');
   *
   * authorize(function(authClient) {
   *   var request = {
   *     // The name of the cloud project that topics belong to.
   *     // Format is `projects/{project}`.
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
   * @alias pubsub.projects.topics.list
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {integer=} params.pageSize Maximum number of topics to return.
   * @param {string=} params.pageToken The value returned by the last `ListTopicsResponse`; indicates that this is a continuation of a prior `ListTopics` call, and that the system should return the next page of data.
   * @param {string} params.project The name of the cloud project that topics belong to. Format is `projects/{project}`.
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  list(params?: any, options?: MethodOptions):
      AxiosPromise<Schema$ListTopicsResponse>;
  list(
      params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$ListTopicsResponse>,
      callback?: BodyResponseCallback<Schema$ListTopicsResponse>): void;
  list(
      params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$ListTopicsResponse>,
      callback?: BodyResponseCallback<Schema$ListTopicsResponse>):
      void|AxiosPromise<Schema$ListTopicsResponse> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://pubsub.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url: (rootUrl + '/v1/{+project}/topics')
                     .replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET'
          },
          options),
      params,
      requiredParams: ['project'],
      pathParams: ['project'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$ListTopicsResponse>(parameters, callback);
    } else {
      return createAPIRequest<Schema$ListTopicsResponse>(parameters);
    }
  }


  /**
   * pubsub.projects.topics.publish
   * @desc Adds one or more messages to the topic. Returns `NOT_FOUND` if the
   * topic does not exist. The message payload must not be empty; it must
   * contain  either a non-empty data field, or at least one attribute.
   * @example
   * * // BEFORE RUNNING:
   * // ---------------
   * // 1. If not already done, enable the Google Cloud Pub/Sub API
   * //    and check the quota for your project at
   * //    https://console.developers.google.com/apis/api/pubsub
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
   * var pubsub = google.pubsub('v1');
   *
   * authorize(function(authClient) {
   *   var request = {
   *     // The messages in the request will be published on this topic.
   *     // Format is `projects/{project}/topics/{topic}`.
   *     topic: 'projects/my-project/topics/my-topic',  // TODO: Update
   * placeholder value.
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
  publish(params?: any, options?: MethodOptions):
      AxiosPromise<Schema$PublishResponse>;
  publish(
      params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$PublishResponse>,
      callback?: BodyResponseCallback<Schema$PublishResponse>): void;
  publish(
      params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$PublishResponse>,
      callback?: BodyResponseCallback<Schema$PublishResponse>):
      void|AxiosPromise<Schema$PublishResponse> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://pubsub.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url: (rootUrl + '/v1/{+topic}:publish')
                     .replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST'
          },
          options),
      params,
      requiredParams: ['topic'],
      pathParams: ['topic'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$PublishResponse>(parameters, callback);
    } else {
      return createAPIRequest<Schema$PublishResponse>(parameters);
    }
  }


  /**
   * pubsub.projects.topics.setIamPolicy
   * @desc Sets the access control policy on the specified resource. Replaces
   * any existing policy.
   * @example
   * * // BEFORE RUNNING:
   * // ---------------
   * // 1. If not already done, enable the Google Cloud Pub/Sub API
   * //    and check the quota for your project at
   * //    https://console.developers.google.com/apis/api/pubsub
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
   * var pubsub = google.pubsub('v1');
   *
   * authorize(function(authClient) {
   *   var request = {
   *     // REQUIRED: The resource for which the policy is being specified.
   *     // See the operation documentation for the appropriate value for this
   * field. resource_: 'projects/my-project/topics/my-topic',  // TODO: Update
   * placeholder value.
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
  setIamPolicy(params?: any, options?: MethodOptions):
      AxiosPromise<Schema$Policy>;
  setIamPolicy(
      params?: any, options?: MethodOptions|BodyResponseCallback<Schema$Policy>,
      callback?: BodyResponseCallback<Schema$Policy>): void;
  setIamPolicy(
      params?: any, options?: MethodOptions|BodyResponseCallback<Schema$Policy>,
      callback?: BodyResponseCallback<Schema$Policy>):
      void|AxiosPromise<Schema$Policy> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://pubsub.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url: (rootUrl + '/v1/{+resource}:setIamPolicy')
                     .replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST'
          },
          options),
      params,
      requiredParams: ['resource'],
      pathParams: ['resource'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$Policy>(parameters, callback);
    } else {
      return createAPIRequest<Schema$Policy>(parameters);
    }
  }


  /**
   * pubsub.projects.topics.testIamPermissions
   * @desc Returns permissions that a caller has on the specified resource. If
   * the resource does not exist, this will return an empty set of permissions,
   * not a NOT_FOUND error.  Note: This operation is designed to be used for
   * building permission-aware UIs and command-line tools, not for authorization
   * checking. This operation may "fail open" without warning.
   * @example
   * * // BEFORE RUNNING:
   * // ---------------
   * // 1. If not already done, enable the Google Cloud Pub/Sub API
   * //    and check the quota for your project at
   * //    https://console.developers.google.com/apis/api/pubsub
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
   * var pubsub = google.pubsub('v1');
   *
   * authorize(function(authClient) {
   *   var request = {
   *     // REQUIRED: The resource for which the policy detail is being
   * requested.
   *     // See the operation documentation for the appropriate value for this
   * field. resource_: 'projects/my-project/topics/my-topic',  // TODO: Update
   * placeholder value.
   *
   *     resource: {
   *       // TODO: Add desired properties to the request body.
   *     },
   *
   *     auth: authClient,
   *   };
   *
   *   pubsub.projects.topics.testIamPermissions(request, function(err,
   * response) { if (err) { console.error(err); return;
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
  testIamPermissions(params?: any, options?: MethodOptions):
      AxiosPromise<Schema$TestIamPermissionsResponse>;
  testIamPermissions(
      params?: any,
      options?: MethodOptions|
      BodyResponseCallback<Schema$TestIamPermissionsResponse>,
      callback?: BodyResponseCallback<Schema$TestIamPermissionsResponse>): void;
  testIamPermissions(
      params?: any,
      options?: MethodOptions|
      BodyResponseCallback<Schema$TestIamPermissionsResponse>,
      callback?: BodyResponseCallback<Schema$TestIamPermissionsResponse>):
      void|AxiosPromise<Schema$TestIamPermissionsResponse> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://pubsub.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url: (rootUrl + '/v1/{+resource}:testIamPermissions')
                     .replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST'
          },
          options),
      params,
      requiredParams: ['resource'],
      pathParams: ['resource'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$TestIamPermissionsResponse>(parameters, callback);
    } else {
      return createAPIRequest<Schema$TestIamPermissionsResponse>(parameters);
    }
  }
}
export class Resource$Projects$Topics$Snapshots {
  root: Pubsub;
  constructor(root: Pubsub) {
    this.root = root;
    this.getRoot.bind(this);
  }

  getRoot() {
    return this.root;
  }


  /**
   * pubsub.projects.topics.snapshots.list
   * @desc Lists the names of the snapshots on this topic. [ALPHA] This method
   * is a part of a closed Alpha API.
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
  list(params?: any, options?: MethodOptions):
      AxiosPromise<Schema$ListTopicSnapshotsResponse>;
  list(
      params?: any,
      options?: MethodOptions|
      BodyResponseCallback<Schema$ListTopicSnapshotsResponse>,
      callback?: BodyResponseCallback<Schema$ListTopicSnapshotsResponse>): void;
  list(
      params?: any,
      options?: MethodOptions|
      BodyResponseCallback<Schema$ListTopicSnapshotsResponse>,
      callback?: BodyResponseCallback<Schema$ListTopicSnapshotsResponse>):
      void|AxiosPromise<Schema$ListTopicSnapshotsResponse> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://pubsub.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url: (rootUrl + '/v1/{+topic}/snapshots')
                     .replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET'
          },
          options),
      params,
      requiredParams: ['topic'],
      pathParams: ['topic'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$ListTopicSnapshotsResponse>(parameters, callback);
    } else {
      return createAPIRequest<Schema$ListTopicSnapshotsResponse>(parameters);
    }
  }
}

export class Resource$Projects$Topics$Subscriptions {
  root: Pubsub;
  constructor(root: Pubsub) {
    this.root = root;
    this.getRoot.bind(this);
  }

  getRoot() {
    return this.root;
  }


  /**
   * pubsub.projects.topics.subscriptions.list
   * @desc Lists the names of the subscriptions on this topic.
   * @example
   * * // BEFORE RUNNING:
   * // ---------------
   * // 1. If not already done, enable the Google Cloud Pub/Sub API
   * //    and check the quota for your project at
   * //    https://console.developers.google.com/apis/api/pubsub
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
   * var pubsub = google.pubsub('v1');
   *
   * authorize(function(authClient) {
   *   var request = {
   *     // The name of the topic that subscriptions are attached to.
   *     // Format is `projects/{project}/topics/{topic}`.
   *     topic: 'projects/my-project/topics/my-topic',  // TODO: Update
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
   *     var subscriptionsPage = response['subscriptions'];
   *     if (!subscriptionsPage) {
   *       return;
   *     }
   *     for (var i = 0; i < subscriptionsPage.length; i++) {
   *       // TODO: Change code below to process each resource in
   * `subscriptionsPage`: console.log(JSON.stringify(subscriptionsPage[i], null,
   * 2));
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
  list(params?: any, options?: MethodOptions):
      AxiosPromise<Schema$ListTopicSubscriptionsResponse>;
  list(
      params?: any,
      options?: MethodOptions|
      BodyResponseCallback<Schema$ListTopicSubscriptionsResponse>,
      callback?: BodyResponseCallback<Schema$ListTopicSubscriptionsResponse>):
      void;
  list(
      params?: any,
      options?: MethodOptions|
      BodyResponseCallback<Schema$ListTopicSubscriptionsResponse>,
      callback?: BodyResponseCallback<Schema$ListTopicSubscriptionsResponse>):
      void|AxiosPromise<Schema$ListTopicSubscriptionsResponse> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://pubsub.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url: (rootUrl + '/v1/{+topic}/subscriptions')
                     .replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET'
          },
          options),
      params,
      requiredParams: ['topic'],
      pathParams: ['topic'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$ListTopicSubscriptionsResponse>(
          parameters, callback);
    } else {
      return createAPIRequest<Schema$ListTopicSubscriptionsResponse>(
          parameters);
    }
  }
}
