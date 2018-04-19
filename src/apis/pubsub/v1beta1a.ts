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
 * const pubsub = google.pubsub('v1beta1a');
 *
 * @namespace pubsub
 * @type {Function}
 * @version v1beta1a
 * @variation v1beta1a
 * @param {object=} options Options for Pubsub
 */
export class Pubsub {
  _options: GlobalOptions;
  google: GoogleApis;
  root = this;

  subscriptions: Resource$Subscriptions;
  topics: Resource$Topics;

  constructor(options: GlobalOptions, google: GoogleApis) {
    this._options = options || {};
    this.google = google;
    this.getRoot.bind(this);

    this.subscriptions = new Resource$Subscriptions(this);
    this.topics = new Resource$Topics(this);
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
   * The acknowledgment ID for the message being acknowledged. This was returned
   * by the Pub/Sub system in the Pull response.
   */
  ackId: string[];
  /**
   * The subscription whose message is being acknowledged.
   */
  subscription: string;
}
/**
 * An empty message that you can re-use to avoid defining duplicated empty
 * messages in your project. A typical example is to use it as argument or the
 * return value of a service API. For instance:    service Foo {     rpc Bar
 * (proto2.Empty) returns (proto2.Empty) { };   };  BEGIN GOOGLE-INTERNAL The
 * difference between this one and net/rpc/empty-message.proto is that 1) The
 * generated message here is in proto2 C++ API. 2) The proto2.Empty has minimum
 * dependencies    (no message_set or net/rpc dependencies) END GOOGLE-INTERNAL
 */
export interface Schema$Empty {}
/**
 * A key-value pair applied to a given object.
 */
export interface Schema$Label {
  /**
   * The key of a label is a syntactically valid URL (as per RFC 1738) with the
   * &quot;scheme&quot; and initial slashes omitted and with the additional
   * restrictions noted below.  Each key should be globally unique.  The
   * &quot;host&quot; portion is called the &quot;namespace&quot; and is not
   * necessarily resolvable to a network endpoint.  Instead, the namespace
   * indicates what system or entity defines the semantics of the label.
   * Namespaces do not restrict the set of objects to which a label may be
   * associated.  Keys are defined by the following grammar:    key          =
   * hostname &quot;/&quot; kpath   kpath        = ksegment *[ &quot;/&quot;
   * ksegment ]   ksegment     = alphadigit | *[ alphadigit | &quot;-&quot; |
   * &quot;_&quot; | &quot;.&quot; ]  where &quot;hostname&quot; and
   * &quot;alphadigit&quot; are defined as in RFC 1738.  Example key:
   * spanner.google.com/universe
   */
  key: string;
  /**
   * An integer value.
   */
  numValue: string;
  /**
   * A string value.
   */
  strValue: string;
}
/**
 * Response for the ListSubscriptions method.
 */
export interface Schema$ListSubscriptionsResponse {
  /**
   * If not empty, indicates that there are more subscriptions that match the
   * request and this value should be passed to the next
   * &lt;code&gt;ListSubscriptionsRequest&lt;/code&gt; to continue.
   */
  nextPageToken: string;
  /**
   * The subscriptions that match the request.
   */
  subscription: Schema$Subscription[];
}
/**
 * Response for the ListTopics method.
 */
export interface Schema$ListTopicsResponse {
  /**
   * If not empty, indicates that there are more topics that match the request,
   * and this value should be passed to the next
   * &lt;code&gt;ListTopicsRequest&lt;/code&gt; to continue.
   */
  nextPageToken: string;
  /**
   * The resulting topics.
   */
  topic: Schema$Topic[];
}
/**
 * Request for the ModifyAckDeadline method.
 */
export interface Schema$ModifyAckDeadlineRequest {
  /**
   * The new ack deadline with respect to the time this request was sent to the
   * Pub/Sub system. Must be &gt;= 0. For example, if the value is 10, the new
   * ack deadline will expire 10 seconds after the ModifyAckDeadline call was
   * made. Specifying zero may immediately make the message available for
   * another pull request.
   */
  ackDeadlineSeconds: number;
  /**
   * The acknowledgment ID. Either this or ack_ids must be populated, not both.
   */
  ackId: string;
  /**
   * List of acknowledgment IDs. Either this field or ack_id should be
   * populated, not both.
   */
  ackIds: string[];
  /**
   * Next Index: 5 The name of the subscription from which messages are being
   * pulled.
   */
  subscription: string;
}
/**
 * Request for the ModifyPushConfig method.
 */
export interface Schema$ModifyPushConfigRequest {
  /**
   * An empty &lt;code&gt;push_config&lt;/code&gt; indicates that the Pub/Sub
   * system should pause pushing messages from the given subscription.
   */
  pushConfig: Schema$PushConfig;
  /**
   * The name of the subscription.
   */
  subscription: string;
}
/**
 * Request for the PublishBatch method.
 */
export interface Schema$PublishBatchRequest {
  /**
   * The messages to publish.
   */
  messages: Schema$PubsubMessage[];
  /**
   * The messages in the request will be published on this topic.
   */
  topic: string;
}
/**
 * Response for the PublishBatch method.
 */
export interface Schema$PublishBatchResponse {
  /**
   * The server-assigned ID of each published message, in the same order as the
   * messages in the request. IDs are guaranteed to be unique within the topic.
   */
  messageIds: string[];
}
/**
 * Request for the Publish method.
 */
export interface Schema$PublishRequest {
  /**
   * The message to publish.
   */
  message: Schema$PubsubMessage;
  /**
   * The message in the request will be published on this topic.
   */
  topic: string;
}
/**
 * An event indicating a received message or truncation event.
 */
export interface Schema$PubsubEvent {
  /**
   * Indicates that this subscription has been deleted. (Note that pull
   * subscribers will always receive NOT_FOUND in response in their pull request
   * on the subscription, rather than seeing this boolean.)
   */
  deleted: boolean;
  /**
   * A received message.
   */
  message: Schema$PubsubMessage;
  /**
   * The subscription that received the event.
   */
  subscription: string;
  /**
   * Indicates that this subscription has been truncated.
   */
  truncated: boolean;
}
/**
 * A message data and its labels.
 */
export interface Schema$PubsubMessage {
  /**
   * The message payload.
   */
  data: string;
  /**
   * Optional list of labels for this message. Keys in this collection must be
   * unique.
   */
  label: Schema$Label[];
  /**
   * ID of this message assigned by the server at publication time. Guaranteed
   * to be unique within the topic. This value may be read by a subscriber that
   * receives a PubsubMessage via a Pull call or a push delivery. It must not be
   * populated by a publisher in a Publish call.
   */
  messageId: string;
  /**
   * The time at which the message was published. The time is milliseconds since
   * the UNIX epoch.
   */
  publishTime: string;
}
/**
 * Request for the PullBatch method.
 */
export interface Schema$PullBatchRequest {
  /**
   * The maximum number of PubsubEvents returned for this request. The Pub/Sub
   * system may return fewer than the number of events specified.
   */
  maxEvents: number;
  /**
   * If this is specified as true the system will respond immediately even if it
   * is not able to return a message in the Pull response. Otherwise the system
   * is allowed to wait until at least one message is available rather than
   * returning no messages. The client may cancel the request if it does not
   * wish to wait any longer for the response.
   */
  returnImmediately: boolean;
  /**
   * The subscription from which messages should be pulled.
   */
  subscription: string;
}
/**
 * Response for the PullBatch method.
 */
export interface Schema$PullBatchResponse {
  /**
   * Received Pub/Sub messages or status events. The Pub/Sub system will return
   * zero messages if there are no more messages available in the backlog. The
   * Pub/Sub system may return fewer than the max_events requested even if there
   * are more messages available in the backlog.
   */
  pullResponses: Schema$PullResponse[];
}
/**
 * Request for the Pull method.
 */
export interface Schema$PullRequest {
  /**
   * If this is specified as true the system will respond immediately even if it
   * is not able to return a message in the Pull response. Otherwise the system
   * is allowed to wait until at least one message is available rather than
   * returning FAILED_PRECONDITION. The client may cancel the request if it does
   * not wish to wait any longer for the response.
   */
  returnImmediately: boolean;
  /**
   * The subscription from which a message should be pulled.
   */
  subscription: string;
}
/**
 * Either a &lt;code&gt;PubsubMessage&lt;/code&gt; or a truncation event. One of
 * these two must be populated.
 */
export interface Schema$PullResponse {
  /**
   * This ID must be used to acknowledge the received event or message.
   */
  ackId: string;
  /**
   * A pubsub message or truncation event.
   */
  pubsubEvent: Schema$PubsubEvent;
}
/**
 * Configuration for a push delivery endpoint.
 */
export interface Schema$PushConfig {
  /**
   * A URL locating the endpoint to which messages should be pushed. For
   * example, a Webhook endpoint might use &quot;https://example.com/push&quot;.
   */
  pushEndpoint: string;
}
/**
 * A subscription resource.
 */
export interface Schema$Subscription {
  /**
   * For either push or pull delivery, the value is the maximum time after a
   * subscriber receives a message before the subscriber should acknowledge or
   * Nack the message. If the Ack deadline for a message passes without an Ack
   * or a Nack, the Pub/Sub system will eventually redeliver the message. If a
   * subscriber acknowledges after the deadline, the Pub/Sub system may accept
   * the Ack, but it is possible that the message has been already delivered
   * again. Multiple Acks to the message are allowed and will succeed.  For push
   * delivery, this value is used to set the request timeout for the call to the
   * push endpoint.  For pull delivery, this value is used as the initial value
   * for the Ack deadline. It may be overridden for each message using its
   * corresponding ack_id with &lt;code&gt;ModifyAckDeadline&lt;/code&gt;. While
   * a message is outstanding (i.e. it has been delivered to a pull subscriber
   * and the subscriber has not yet Acked or Nacked), the Pub/Sub system will
   * not deliver that message to another pull subscriber (on a best-effort
   * basis).
   */
  ackDeadlineSeconds: number;
  /**
   * Name of the subscription.
   */
  name: string;
  /**
   * If push delivery is used with this subscription, this field is used to
   * configure it.
   */
  pushConfig: Schema$PushConfig;
  /**
   * The name of the topic from which this subscription is receiving messages.
   */
  topic: string;
}
/**
 * A topic resource.
 */
export interface Schema$Topic {
  /**
   * Name of the topic.
   */
  name: string;
}

export class Resource$Subscriptions {
  root: Pubsub;
  constructor(root: Pubsub) {
    this.root = root;
    this.getRoot.bind(this);
  }

  getRoot() {
    return this.root;
  }


  /**
   * pubsub.subscriptions.acknowledge
   * @desc Acknowledges a particular received message: the Pub/Sub system can
   * remove the given message from the subscription. Acknowledging a message
   * whose Ack deadline has expired may succeed, but the message could have been
   * already redelivered. Acknowledging a message more than once will not result
   * in an error. This is only used for messages received via pull.
   * @alias pubsub.subscriptions.acknowledge
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
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
            url: (rootUrl + '/v1beta1a/subscriptions/acknowledge')
                     .replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST'
          },
          options),
      params,
      requiredParams: [],
      pathParams: [],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$Empty>(parameters, callback);
    } else {
      return createAPIRequest<Schema$Empty>(parameters);
    }
  }


  /**
   * pubsub.subscriptions.create
   * @desc Creates a subscription on a given topic for a given subscriber. If
   * the subscription already exists, returns ALREADY_EXISTS. If the
   * corresponding topic doesn't exist, returns NOT_FOUND.  If the name is not
   * provided in the request, the server will assign a random name for this
   * subscription on the same project as the topic.
   * @alias pubsub.subscriptions.create
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
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
            url: (rootUrl + '/v1beta1a/subscriptions')
                     .replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST'
          },
          options),
      params,
      requiredParams: [],
      pathParams: [],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$Subscription>(parameters, callback);
    } else {
      return createAPIRequest<Schema$Subscription>(parameters);
    }
  }


  /**
   * pubsub.subscriptions.delete
   * @desc Deletes an existing subscription. All pending messages in the
   * subscription are immediately dropped. Calls to Pull after deletion will
   * return NOT_FOUND.
   * @alias pubsub.subscriptions.delete
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.subscription The subscription to delete.
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
            url: (rootUrl + '/v1beta1a/subscriptions/{+subscription}')
                     .replace(/([^:]\/)\/+/g, '$1'),
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
   * pubsub.subscriptions.get
   * @desc Gets the configuration details of a subscription.
   * @alias pubsub.subscriptions.get
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.subscription The name of the subscription to get.
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
            url: (rootUrl + '/v1beta1a/subscriptions/{+subscription}')
                     .replace(/([^:]\/)\/+/g, '$1'),
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
   * pubsub.subscriptions.list
   * @desc Lists matching subscriptions.
   * @alias pubsub.subscriptions.list
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {integer=} params.maxResults Maximum number of subscriptions to return.
   * @param {string=} params.pageToken The value obtained in the last <code>ListSubscriptionsResponse</code> for continuation.
   * @param {string=} params.query A valid label query expression.
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
            url: (rootUrl + '/v1beta1a/subscriptions')
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
      createAPIRequest<Schema$ListSubscriptionsResponse>(parameters, callback);
    } else {
      return createAPIRequest<Schema$ListSubscriptionsResponse>(parameters);
    }
  }


  /**
   * pubsub.subscriptions.modifyAckDeadline
   * @desc Modifies the Ack deadline for a message received from a pull request.
   * @alias pubsub.subscriptions.modifyAckDeadline
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
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
            url: (rootUrl + '/v1beta1a/subscriptions/modifyAckDeadline')
                     .replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST'
          },
          options),
      params,
      requiredParams: [],
      pathParams: [],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$Empty>(parameters, callback);
    } else {
      return createAPIRequest<Schema$Empty>(parameters);
    }
  }


  /**
   * pubsub.subscriptions.modifyPushConfig
   * @desc Modifies the <code>PushConfig</code> for a specified subscription.
   * This method can be used to suspend the flow of messages to an endpoint by
   * clearing the <code>PushConfig</code> field in the request. Messages will be
   * accumulated for delivery even if no push configuration is defined or while
   * the configuration is modified.
   * @alias pubsub.subscriptions.modifyPushConfig
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
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
            url: (rootUrl + '/v1beta1a/subscriptions/modifyPushConfig')
                     .replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST'
          },
          options),
      params,
      requiredParams: [],
      pathParams: [],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$Empty>(parameters, callback);
    } else {
      return createAPIRequest<Schema$Empty>(parameters);
    }
  }


  /**
   * pubsub.subscriptions.pull
   * @desc Pulls a single message from the server. If return_immediately is
   * true, and no messages are available in the subscription, this method
   * returns FAILED_PRECONDITION. The system is free to return an UNAVAILABLE
   * error if no messages are available in a reasonable amount of time (to
   * reduce system load).
   * @alias pubsub.subscriptions.pull
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
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
            url: (rootUrl + '/v1beta1a/subscriptions/pull')
                     .replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST'
          },
          options),
      params,
      requiredParams: [],
      pathParams: [],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$PullResponse>(parameters, callback);
    } else {
      return createAPIRequest<Schema$PullResponse>(parameters);
    }
  }


  /**
   * pubsub.subscriptions.pullBatch
   * @desc Pulls messages from the server. Returns an empty list if there are no
   * messages available in the backlog. The system is free to return UNAVAILABLE
   * if there are too many pull requests outstanding for the given subscription.
   * @alias pubsub.subscriptions.pullBatch
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {().PullBatchRequest} params.resource Request body data
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  pullBatch(params?: any, options?: MethodOptions):
      AxiosPromise<Schema$PullBatchResponse>;
  pullBatch(
      params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$PullBatchResponse>,
      callback?: BodyResponseCallback<Schema$PullBatchResponse>): void;
  pullBatch(
      params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$PullBatchResponse>,
      callback?: BodyResponseCallback<Schema$PullBatchResponse>):
      void|AxiosPromise<Schema$PullBatchResponse> {
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
            url: (rootUrl + '/v1beta1a/subscriptions/pullBatch')
                     .replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST'
          },
          options),
      params,
      requiredParams: [],
      pathParams: [],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$PullBatchResponse>(parameters, callback);
    } else {
      return createAPIRequest<Schema$PullBatchResponse>(parameters);
    }
  }
}

export class Resource$Topics {
  root: Pubsub;
  constructor(root: Pubsub) {
    this.root = root;
    this.getRoot.bind(this);
  }

  getRoot() {
    return this.root;
  }


  /**
   * pubsub.topics.create
   * @desc Creates the given topic with the given name.
   * @alias pubsub.topics.create
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
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
            url: (rootUrl + '/v1beta1a/topics').replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST'
          },
          options),
      params,
      requiredParams: [],
      pathParams: [],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$Topic>(parameters, callback);
    } else {
      return createAPIRequest<Schema$Topic>(parameters);
    }
  }


  /**
   * pubsub.topics.delete
   * @desc Deletes the topic with the given name. Returns NOT_FOUND if the topic
   * does not exist. After a topic is deleted, a new topic may be created with
   * the same name.
   * @alias pubsub.topics.delete
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.topic Name of the topic to delete.
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
            url: (rootUrl + '/v1beta1a/topics/{+topic}')
                     .replace(/([^:]\/)\/+/g, '$1'),
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
   * pubsub.topics.get
   * @desc Gets the configuration of a topic. Since the topic only has the name
   * attribute, this method is only useful to check the existence of a topic. If
   * other attributes are added in the future, they will be returned here.
   * @alias pubsub.topics.get
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.topic The name of the topic to get.
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
            url: (rootUrl + '/v1beta1a/topics/{+topic}')
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
      createAPIRequest<Schema$Topic>(parameters, callback);
    } else {
      return createAPIRequest<Schema$Topic>(parameters);
    }
  }


  /**
   * pubsub.topics.list
   * @desc Lists matching topics.
   * @alias pubsub.topics.list
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {integer=} params.maxResults Maximum number of topics to return.
   * @param {string=} params.pageToken The value obtained in the last <code>ListTopicsResponse</code> for continuation.
   * @param {string=} params.query A valid label query expression.
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
            url: (rootUrl + '/v1beta1a/topics').replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET'
          },
          options),
      params,
      requiredParams: [],
      pathParams: [],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$ListTopicsResponse>(parameters, callback);
    } else {
      return createAPIRequest<Schema$ListTopicsResponse>(parameters);
    }
  }


  /**
   * pubsub.topics.publish
   * @desc Adds a message to the topic.  Returns NOT_FOUND if the topic does not
   * exist.
   * @alias pubsub.topics.publish
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {().PublishRequest} params.resource Request body data
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  publish(params?: any, options?: MethodOptions): AxiosPromise<Schema$Empty>;
  publish(
      params?: any, options?: MethodOptions|BodyResponseCallback<Schema$Empty>,
      callback?: BodyResponseCallback<Schema$Empty>): void;
  publish(
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
            url: (rootUrl + '/v1beta1a/topics/publish')
                     .replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST'
          },
          options),
      params,
      requiredParams: [],
      pathParams: [],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$Empty>(parameters, callback);
    } else {
      return createAPIRequest<Schema$Empty>(parameters);
    }
  }


  /**
   * pubsub.topics.publishBatch
   * @desc Adds one or more messages to the topic. Returns NOT_FOUND if the
   * topic does not exist.
   * @alias pubsub.topics.publishBatch
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {().PublishBatchRequest} params.resource Request body data
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  publishBatch(params?: any, options?: MethodOptions):
      AxiosPromise<Schema$PublishBatchResponse>;
  publishBatch(
      params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$PublishBatchResponse>,
      callback?: BodyResponseCallback<Schema$PublishBatchResponse>): void;
  publishBatch(
      params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$PublishBatchResponse>,
      callback?: BodyResponseCallback<Schema$PublishBatchResponse>):
      void|AxiosPromise<Schema$PublishBatchResponse> {
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
            url: (rootUrl + '/v1beta1a/topics/publishBatch')
                     .replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST'
          },
          options),
      params,
      requiredParams: [],
      pathParams: [],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$PublishBatchResponse>(parameters, callback);
    } else {
      return createAPIRequest<Schema$PublishBatchResponse>(parameters);
    }
  }
}
