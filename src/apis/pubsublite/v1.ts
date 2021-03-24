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
  BaseExternalAccountClient,
  GaxiosPromise,
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

export namespace pubsublite_v1 {
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
   * Pub/Sub Lite API
   *
   *
   *
   * @example
   * ```js
   * const {google} = require('googleapis');
   * const pubsublite = google.pubsublite('v1');
   * ```
   */
  export class Pubsublite {
    context: APIRequestContext;
    admin: Resource$Admin;
    cursor: Resource$Cursor;
    topicStats: Resource$Topicstats;

    constructor(options: GlobalOptions, google?: GoogleConfigurable) {
      this.context = {
        _options: options || {},
        google,
      };

      this.admin = new Resource$Admin(this.context);
      this.cursor = new Resource$Cursor(this.context);
      this.topicStats = new Resource$Topicstats(this.context);
    }
  }

  /**
   * The throughput capacity configuration for each partition.
   */
  export interface Schema$Capacity {
    /**
     * Publish throughput capacity per partition in MiB/s. Must be \>= 4 and <= 16.
     */
    publishMibPerSec?: number | null;
    /**
     * Subscribe throughput capacity per partition in MiB/s. Must be \>= 4 and <= 32.
     */
    subscribeMibPerSec?: number | null;
  }
  /**
   * Compute the current head cursor for a partition.
   */
  export interface Schema$ComputeHeadCursorRequest {
    /**
     * Required. The partition for which we should compute the head cursor.
     */
    partition?: string | null;
  }
  /**
   * Response containing the head cursor for the requested topic and partition.
   */
  export interface Schema$ComputeHeadCursorResponse {
    /**
     * The head cursor.
     */
    headCursor?: Schema$Cursor;
  }
  /**
   * Compute statistics about a range of messages in a given topic and partition.
   */
  export interface Schema$ComputeMessageStatsRequest {
    /**
     * The exclusive end of the range. The range is empty if end_cursor <= start_cursor. Specifying a start_cursor before the first message and an end_cursor after the last message will retrieve all messages.
     */
    endCursor?: Schema$Cursor;
    /**
     * Required. The partition for which we should compute message stats.
     */
    partition?: string | null;
    /**
     * The inclusive start of the range.
     */
    startCursor?: Schema$Cursor;
  }
  /**
   * Response containing stats for messages in the requested topic and partition.
   */
  export interface Schema$ComputeMessageStatsResponse {
    /**
     * The number of quota bytes accounted to these messages.
     */
    messageBytes?: string | null;
    /**
     * The count of messages.
     */
    messageCount?: string | null;
    /**
     * The minimum event timestamp across these messages. For the purposes of this computation, if a message does not have an event time, we use the publish time. The timestamp will be unset if there are no messages.
     */
    minimumEventTime?: string | null;
    /**
     * The minimum publish timestamp across these messages. Note that publish timestamps within a partition are not guaranteed to be non-decreasing. The timestamp will be unset if there are no messages.
     */
    minimumPublishTime?: string | null;
  }
  /**
   * A cursor that describes the position of a message within a topic partition.
   */
  export interface Schema$Cursor {
    /**
     * The offset of a message within a topic partition. Must be greater than or equal 0.
     */
    offset?: string | null;
  }
  /**
   * The settings for a subscription's message delivery.
   */
  export interface Schema$DeliveryConfig {
    /**
     * The DeliveryRequirement for this subscription.
     */
    deliveryRequirement?: string | null;
  }
  /**
   * A generic empty message that you can re-use to avoid defining duplicated empty messages in your APIs. A typical example is to use it as the request or the response type of an API method. For instance: service Foo { rpc Bar(google.protobuf.Empty) returns (google.protobuf.Empty); \} The JSON representation for `Empty` is empty JSON object `{\}`.
   */
  export interface Schema$Empty {}
  /**
   * Response for ListPartitionCursors
   */
  export interface Schema$ListPartitionCursorsResponse {
    /**
     * A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages.
     */
    nextPageToken?: string | null;
    /**
     * The partition cursors from this request.
     */
    partitionCursors?: Schema$PartitionCursor[];
  }
  /**
   * Response for ListSubscriptions.
   */
  export interface Schema$ListSubscriptionsResponse {
    /**
     * A token that can be sent as `page_token` to retrieve the next page of results. If this field is omitted, there are no more results.
     */
    nextPageToken?: string | null;
    /**
     * The list of subscriptions in the requested parent. The order of the subscriptions is unspecified.
     */
    subscriptions?: Schema$Subscription[];
  }
  /**
   * Response for ListTopics.
   */
  export interface Schema$ListTopicsResponse {
    /**
     * A token that can be sent as `page_token` to retrieve the next page of results. If this field is omitted, there are no more results.
     */
    nextPageToken?: string | null;
    /**
     * The list of topic in the requested parent. The order of the topics is unspecified.
     */
    topics?: Schema$Topic[];
  }
  /**
   * Response for ListTopicSubscriptions.
   */
  export interface Schema$ListTopicSubscriptionsResponse {
    /**
     * A token that can be sent as `page_token` to retrieve the next page of results. If this field is omitted, there are no more results.
     */
    nextPageToken?: string | null;
    /**
     * The names of subscriptions attached to the topic. The order of the subscriptions is unspecified.
     */
    subscriptions?: string[] | null;
  }
  /**
   * The settings for a topic's partitions.
   */
  export interface Schema$PartitionConfig {
    /**
     * The capacity configuration.
     */
    capacity?: Schema$Capacity;
    /**
     * The number of partitions in the topic. Must be at least 1. Once a topic has been created the number of partitions can be increased but not decreased. Message ordering is not guaranteed across a topic resize. For more information see https://cloud.google.com/pubsub/lite/docs/topics#scaling_capacity
     */
    count?: string | null;
    /**
     * DEPRECATED: Use capacity instead which can express a superset of configurations. Every partition in the topic is allocated throughput equivalent to `scale` times the standard partition throughput (4 MiB/s). This is also reflected in the cost of this topic; a topic with `scale` of 2 and count of 10 is charged for 20 partitions. This value must be in the range [1,4].
     */
    scale?: number | null;
  }
  /**
   * A pair of a Cursor and the partition it is for.
   */
  export interface Schema$PartitionCursor {
    /**
     * The value of the cursor.
     */
    cursor?: Schema$Cursor;
    /**
     * The partition this is for.
     */
    partition?: string | null;
  }
  /**
   * The settings for a topic's message retention.
   */
  export interface Schema$RetentionConfig {
    /**
     * How long a published message is retained. If unset, messages will be retained as long as the bytes retained for each partition is below `per_partition_bytes`.
     */
    period?: string | null;
    /**
     * The provisioned storage, in bytes, per partition. If the number of bytes stored in any of the topic's partitions grows beyond this value, older messages will be dropped to make room for newer ones, regardless of the value of `period`.
     */
    perPartitionBytes?: string | null;
  }
  /**
   * Metadata about a subscription resource.
   */
  export interface Schema$Subscription {
    /**
     * The settings for this subscription's message delivery.
     */
    deliveryConfig?: Schema$DeliveryConfig;
    /**
     * The name of the subscription. Structured like: projects/{project_number\}/locations/{location\}/subscriptions/{subscription_id\}
     */
    name?: string | null;
    /**
     * The name of the topic this subscription is attached to. Structured like: projects/{project_number\}/locations/{location\}/topics/{topic_id\}
     */
    topic?: string | null;
  }
  /**
   * Metadata about a topic resource.
   */
  export interface Schema$Topic {
    /**
     * The name of the topic. Structured like: projects/{project_number\}/locations/{location\}/topics/{topic_id\}
     */
    name?: string | null;
    /**
     * The settings for this topic's partitions.
     */
    partitionConfig?: Schema$PartitionConfig;
    /**
     * The settings for this topic's message retention.
     */
    retentionConfig?: Schema$RetentionConfig;
  }
  /**
   * Response for GetTopicPartitions.
   */
  export interface Schema$TopicPartitions {
    /**
     * The number of partitions in the topic.
     */
    partitionCount?: string | null;
  }

  export class Resource$Admin {
    context: APIRequestContext;
    projects: Resource$Admin$Projects;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.projects = new Resource$Admin$Projects(this.context);
    }
  }

  export class Resource$Admin$Projects {
    context: APIRequestContext;
    locations: Resource$Admin$Projects$Locations;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.locations = new Resource$Admin$Projects$Locations(this.context);
    }
  }

  export class Resource$Admin$Projects$Locations {
    context: APIRequestContext;
    subscriptions: Resource$Admin$Projects$Locations$Subscriptions;
    topics: Resource$Admin$Projects$Locations$Topics;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.subscriptions = new Resource$Admin$Projects$Locations$Subscriptions(
        this.context
      );
      this.topics = new Resource$Admin$Projects$Locations$Topics(this.context);
    }
  }

  export class Resource$Admin$Projects$Locations$Subscriptions {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Creates a new subscription.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/pubsublite.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const pubsublite = google.pubsublite('v1');
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
     *   const res = await pubsublite.admin.projects.locations.subscriptions.create({
     *     // Required. The parent location in which to create the subscription. Structured like `projects/{project_number\}/locations/{location\}`.
     *     parent: 'projects/my-project/locations/my-location',
     *     // If true, the newly created subscription will only receive messages published after the subscription was created. Otherwise, the entire message backlog will be received on the subscription. Defaults to false.
     *     skipBacklog: 'placeholder-value',
     *     // Required. The ID to use for the subscription, which will become the final component of the subscription's name. This value is structured like: `my-sub-name`.
     *     subscriptionId: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "deliveryConfig": {},
     *       //   "name": "my_name",
     *       //   "topic": "my_topic"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "deliveryConfig": {},
     *   //   "name": "my_name",
     *   //   "topic": "my_topic"
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
      params: Params$Resource$Admin$Projects$Locations$Subscriptions$Create,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    create(
      params?: Params$Resource$Admin$Projects$Locations$Subscriptions$Create,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Subscription>;
    create(
      params: Params$Resource$Admin$Projects$Locations$Subscriptions$Create,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    create(
      params: Params$Resource$Admin$Projects$Locations$Subscriptions$Create,
      options: MethodOptions | BodyResponseCallback<Schema$Subscription>,
      callback: BodyResponseCallback<Schema$Subscription>
    ): void;
    create(
      params: Params$Resource$Admin$Projects$Locations$Subscriptions$Create,
      callback: BodyResponseCallback<Schema$Subscription>
    ): void;
    create(callback: BodyResponseCallback<Schema$Subscription>): void;
    create(
      paramsOrCallback?:
        | Params$Resource$Admin$Projects$Locations$Subscriptions$Create
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
    ): void | GaxiosPromise<Schema$Subscription> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Admin$Projects$Locations$Subscriptions$Create;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Admin$Projects$Locations$Subscriptions$Create;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://pubsublite.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/admin/{+parent}/subscriptions').replace(
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
        createAPIRequest<Schema$Subscription>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Subscription>(parameters);
      }
    }

    /**
     * Deletes the specified subscription.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/pubsublite.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const pubsublite = google.pubsublite('v1');
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
     *   const res = await pubsublite.admin.projects.locations.subscriptions.delete({
     *     // Required. The name of the subscription to delete.
     *     name:
     *       'projects/my-project/locations/my-location/subscriptions/my-subscription',
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
      params: Params$Resource$Admin$Projects$Locations$Subscriptions$Delete,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    delete(
      params?: Params$Resource$Admin$Projects$Locations$Subscriptions$Delete,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Empty>;
    delete(
      params: Params$Resource$Admin$Projects$Locations$Subscriptions$Delete,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    delete(
      params: Params$Resource$Admin$Projects$Locations$Subscriptions$Delete,
      options: MethodOptions | BodyResponseCallback<Schema$Empty>,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    delete(
      params: Params$Resource$Admin$Projects$Locations$Subscriptions$Delete,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    delete(callback: BodyResponseCallback<Schema$Empty>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Admin$Projects$Locations$Subscriptions$Delete
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
    ): void | GaxiosPromise<Schema$Empty> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Admin$Projects$Locations$Subscriptions$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Admin$Projects$Locations$Subscriptions$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://pubsublite.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/admin/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$Empty>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Empty>(parameters);
      }
    }

    /**
     * Returns the subscription configuration.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/pubsublite.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const pubsublite = google.pubsublite('v1');
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
     *   const res = await pubsublite.admin.projects.locations.subscriptions.get({
     *     // Required. The name of the subscription whose configuration to return.
     *     name:
     *       'projects/my-project/locations/my-location/subscriptions/my-subscription',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "deliveryConfig": {},
     *   //   "name": "my_name",
     *   //   "topic": "my_topic"
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
      params: Params$Resource$Admin$Projects$Locations$Subscriptions$Get,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    get(
      params?: Params$Resource$Admin$Projects$Locations$Subscriptions$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Subscription>;
    get(
      params: Params$Resource$Admin$Projects$Locations$Subscriptions$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Admin$Projects$Locations$Subscriptions$Get,
      options: MethodOptions | BodyResponseCallback<Schema$Subscription>,
      callback: BodyResponseCallback<Schema$Subscription>
    ): void;
    get(
      params: Params$Resource$Admin$Projects$Locations$Subscriptions$Get,
      callback: BodyResponseCallback<Schema$Subscription>
    ): void;
    get(callback: BodyResponseCallback<Schema$Subscription>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Admin$Projects$Locations$Subscriptions$Get
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
    ): void | GaxiosPromise<Schema$Subscription> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Admin$Projects$Locations$Subscriptions$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Admin$Projects$Locations$Subscriptions$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://pubsublite.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/admin/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$Subscription>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Subscription>(parameters);
      }
    }

    /**
     * Returns the list of subscriptions for the given project.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/pubsublite.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const pubsublite = google.pubsublite('v1');
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
     *   const res = await pubsublite.admin.projects.locations.subscriptions.list({
     *     // The maximum number of subscriptions to return. The service may return fewer than this value. If unset or zero, all subscriptions for the parent will be returned.
     *     pageSize: 'placeholder-value',
     *     // A page token, received from a previous `ListSubscriptions` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListSubscriptions` must match the call that provided the page token.
     *     pageToken: 'placeholder-value',
     *     // Required. The parent whose subscriptions are to be listed. Structured like `projects/{project_number\}/locations/{location\}`.
     *     parent: 'projects/my-project/locations/my-location',
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
      params: Params$Resource$Admin$Projects$Locations$Subscriptions$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Admin$Projects$Locations$Subscriptions$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ListSubscriptionsResponse>;
    list(
      params: Params$Resource$Admin$Projects$Locations$Subscriptions$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Admin$Projects$Locations$Subscriptions$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ListSubscriptionsResponse>,
      callback: BodyResponseCallback<Schema$ListSubscriptionsResponse>
    ): void;
    list(
      params: Params$Resource$Admin$Projects$Locations$Subscriptions$List,
      callback: BodyResponseCallback<Schema$ListSubscriptionsResponse>
    ): void;
    list(
      callback: BodyResponseCallback<Schema$ListSubscriptionsResponse>
    ): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Admin$Projects$Locations$Subscriptions$List
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
      | GaxiosPromise<Schema$ListSubscriptionsResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Admin$Projects$Locations$Subscriptions$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Admin$Projects$Locations$Subscriptions$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://pubsublite.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/admin/{+parent}/subscriptions').replace(
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
        createAPIRequest<Schema$ListSubscriptionsResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ListSubscriptionsResponse>(parameters);
      }
    }

    /**
     * Updates properties of the specified subscription.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/pubsublite.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const pubsublite = google.pubsublite('v1');
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
     *   const res = await pubsublite.admin.projects.locations.subscriptions.patch({
     *     // The name of the subscription. Structured like: projects/{project_number\}/locations/{location\}/subscriptions/{subscription_id\}
     *     name:
     *       'projects/my-project/locations/my-location/subscriptions/my-subscription',
     *     // Required. A mask specifying the subscription fields to change.
     *     updateMask: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "deliveryConfig": {},
     *       //   "name": "my_name",
     *       //   "topic": "my_topic"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "deliveryConfig": {},
     *   //   "name": "my_name",
     *   //   "topic": "my_topic"
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
      params: Params$Resource$Admin$Projects$Locations$Subscriptions$Patch,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    patch(
      params?: Params$Resource$Admin$Projects$Locations$Subscriptions$Patch,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Subscription>;
    patch(
      params: Params$Resource$Admin$Projects$Locations$Subscriptions$Patch,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    patch(
      params: Params$Resource$Admin$Projects$Locations$Subscriptions$Patch,
      options: MethodOptions | BodyResponseCallback<Schema$Subscription>,
      callback: BodyResponseCallback<Schema$Subscription>
    ): void;
    patch(
      params: Params$Resource$Admin$Projects$Locations$Subscriptions$Patch,
      callback: BodyResponseCallback<Schema$Subscription>
    ): void;
    patch(callback: BodyResponseCallback<Schema$Subscription>): void;
    patch(
      paramsOrCallback?:
        | Params$Resource$Admin$Projects$Locations$Subscriptions$Patch
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
    ): void | GaxiosPromise<Schema$Subscription> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Admin$Projects$Locations$Subscriptions$Patch;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Admin$Projects$Locations$Subscriptions$Patch;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://pubsublite.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/admin/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$Subscription>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Subscription>(parameters);
      }
    }
  }

  export interface Params$Resource$Admin$Projects$Locations$Subscriptions$Create
    extends StandardParameters {
    /**
     * Required. The parent location in which to create the subscription. Structured like `projects/{project_number\}/locations/{location\}`.
     */
    parent?: string;
    /**
     * If true, the newly created subscription will only receive messages published after the subscription was created. Otherwise, the entire message backlog will be received on the subscription. Defaults to false.
     */
    skipBacklog?: boolean;
    /**
     * Required. The ID to use for the subscription, which will become the final component of the subscription's name. This value is structured like: `my-sub-name`.
     */
    subscriptionId?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$Subscription;
  }
  export interface Params$Resource$Admin$Projects$Locations$Subscriptions$Delete
    extends StandardParameters {
    /**
     * Required. The name of the subscription to delete.
     */
    name?: string;
  }
  export interface Params$Resource$Admin$Projects$Locations$Subscriptions$Get
    extends StandardParameters {
    /**
     * Required. The name of the subscription whose configuration to return.
     */
    name?: string;
  }
  export interface Params$Resource$Admin$Projects$Locations$Subscriptions$List
    extends StandardParameters {
    /**
     * The maximum number of subscriptions to return. The service may return fewer than this value. If unset or zero, all subscriptions for the parent will be returned.
     */
    pageSize?: number;
    /**
     * A page token, received from a previous `ListSubscriptions` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListSubscriptions` must match the call that provided the page token.
     */
    pageToken?: string;
    /**
     * Required. The parent whose subscriptions are to be listed. Structured like `projects/{project_number\}/locations/{location\}`.
     */
    parent?: string;
  }
  export interface Params$Resource$Admin$Projects$Locations$Subscriptions$Patch
    extends StandardParameters {
    /**
     * The name of the subscription. Structured like: projects/{project_number\}/locations/{location\}/subscriptions/{subscription_id\}
     */
    name?: string;
    /**
     * Required. A mask specifying the subscription fields to change.
     */
    updateMask?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$Subscription;
  }

  export class Resource$Admin$Projects$Locations$Topics {
    context: APIRequestContext;
    subscriptions: Resource$Admin$Projects$Locations$Topics$Subscriptions;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.subscriptions = new Resource$Admin$Projects$Locations$Topics$Subscriptions(
        this.context
      );
    }

    /**
     * Creates a new topic.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/pubsublite.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const pubsublite = google.pubsublite('v1');
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
     *   const res = await pubsublite.admin.projects.locations.topics.create({
     *     // Required. The parent location in which to create the topic. Structured like `projects/{project_number\}/locations/{location\}`.
     *     parent: 'projects/my-project/locations/my-location',
     *     // Required. The ID to use for the topic, which will become the final component of the topic's name. This value is structured like: `my-topic-name`.
     *     topicId: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "name": "my_name",
     *       //   "partitionConfig": {},
     *       //   "retentionConfig": {}
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "name": "my_name",
     *   //   "partitionConfig": {},
     *   //   "retentionConfig": {}
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
      params: Params$Resource$Admin$Projects$Locations$Topics$Create,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    create(
      params?: Params$Resource$Admin$Projects$Locations$Topics$Create,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Topic>;
    create(
      params: Params$Resource$Admin$Projects$Locations$Topics$Create,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    create(
      params: Params$Resource$Admin$Projects$Locations$Topics$Create,
      options: MethodOptions | BodyResponseCallback<Schema$Topic>,
      callback: BodyResponseCallback<Schema$Topic>
    ): void;
    create(
      params: Params$Resource$Admin$Projects$Locations$Topics$Create,
      callback: BodyResponseCallback<Schema$Topic>
    ): void;
    create(callback: BodyResponseCallback<Schema$Topic>): void;
    create(
      paramsOrCallback?:
        | Params$Resource$Admin$Projects$Locations$Topics$Create
        | BodyResponseCallback<Schema$Topic>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Topic>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Topic>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$Topic> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Admin$Projects$Locations$Topics$Create;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Admin$Projects$Locations$Topics$Create;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://pubsublite.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/admin/{+parent}/topics').replace(
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
        createAPIRequest<Schema$Topic>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Topic>(parameters);
      }
    }

    /**
     * Deletes the specified topic.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/pubsublite.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const pubsublite = google.pubsublite('v1');
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
     *   const res = await pubsublite.admin.projects.locations.topics.delete({
     *     // Required. The name of the topic to delete.
     *     name: 'projects/my-project/locations/my-location/topics/my-topic',
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
      params: Params$Resource$Admin$Projects$Locations$Topics$Delete,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    delete(
      params?: Params$Resource$Admin$Projects$Locations$Topics$Delete,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Empty>;
    delete(
      params: Params$Resource$Admin$Projects$Locations$Topics$Delete,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    delete(
      params: Params$Resource$Admin$Projects$Locations$Topics$Delete,
      options: MethodOptions | BodyResponseCallback<Schema$Empty>,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    delete(
      params: Params$Resource$Admin$Projects$Locations$Topics$Delete,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    delete(callback: BodyResponseCallback<Schema$Empty>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Admin$Projects$Locations$Topics$Delete
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
    ): void | GaxiosPromise<Schema$Empty> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Admin$Projects$Locations$Topics$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Admin$Projects$Locations$Topics$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://pubsublite.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/admin/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$Empty>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Empty>(parameters);
      }
    }

    /**
     * Returns the topic configuration.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/pubsublite.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const pubsublite = google.pubsublite('v1');
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
     *   const res = await pubsublite.admin.projects.locations.topics.get({
     *     // Required. The name of the topic whose configuration to return.
     *     name: 'projects/my-project/locations/my-location/topics/my-topic',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "name": "my_name",
     *   //   "partitionConfig": {},
     *   //   "retentionConfig": {}
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
      params: Params$Resource$Admin$Projects$Locations$Topics$Get,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    get(
      params?: Params$Resource$Admin$Projects$Locations$Topics$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Topic>;
    get(
      params: Params$Resource$Admin$Projects$Locations$Topics$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Admin$Projects$Locations$Topics$Get,
      options: MethodOptions | BodyResponseCallback<Schema$Topic>,
      callback: BodyResponseCallback<Schema$Topic>
    ): void;
    get(
      params: Params$Resource$Admin$Projects$Locations$Topics$Get,
      callback: BodyResponseCallback<Schema$Topic>
    ): void;
    get(callback: BodyResponseCallback<Schema$Topic>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Admin$Projects$Locations$Topics$Get
        | BodyResponseCallback<Schema$Topic>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Topic>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Topic>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$Topic> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Admin$Projects$Locations$Topics$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Admin$Projects$Locations$Topics$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://pubsublite.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/admin/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$Topic>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Topic>(parameters);
      }
    }

    /**
     * Returns the partition information for the requested topic.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/pubsublite.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const pubsublite = google.pubsublite('v1');
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
     *   const res = await pubsublite.admin.projects.locations.topics.getPartitions({
     *     // Required. The topic whose partition information to return.
     *     name: 'projects/my-project/locations/my-location/topics/my-topic',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "partitionCount": "my_partitionCount"
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
    getPartitions(
      params: Params$Resource$Admin$Projects$Locations$Topics$Getpartitions,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    getPartitions(
      params?: Params$Resource$Admin$Projects$Locations$Topics$Getpartitions,
      options?: MethodOptions
    ): GaxiosPromise<Schema$TopicPartitions>;
    getPartitions(
      params: Params$Resource$Admin$Projects$Locations$Topics$Getpartitions,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    getPartitions(
      params: Params$Resource$Admin$Projects$Locations$Topics$Getpartitions,
      options: MethodOptions | BodyResponseCallback<Schema$TopicPartitions>,
      callback: BodyResponseCallback<Schema$TopicPartitions>
    ): void;
    getPartitions(
      params: Params$Resource$Admin$Projects$Locations$Topics$Getpartitions,
      callback: BodyResponseCallback<Schema$TopicPartitions>
    ): void;
    getPartitions(callback: BodyResponseCallback<Schema$TopicPartitions>): void;
    getPartitions(
      paramsOrCallback?:
        | Params$Resource$Admin$Projects$Locations$Topics$Getpartitions
        | BodyResponseCallback<Schema$TopicPartitions>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$TopicPartitions>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$TopicPartitions>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$TopicPartitions> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Admin$Projects$Locations$Topics$Getpartitions;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Admin$Projects$Locations$Topics$Getpartitions;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://pubsublite.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/admin/{+name}/partitions').replace(
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
        createAPIRequest<Schema$TopicPartitions>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$TopicPartitions>(parameters);
      }
    }

    /**
     * Returns the list of topics for the given project.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/pubsublite.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const pubsublite = google.pubsublite('v1');
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
     *   const res = await pubsublite.admin.projects.locations.topics.list({
     *     // The maximum number of topics to return. The service may return fewer than this value. If unset or zero, all topics for the parent will be returned.
     *     pageSize: 'placeholder-value',
     *     // A page token, received from a previous `ListTopics` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListTopics` must match the call that provided the page token.
     *     pageToken: 'placeholder-value',
     *     // Required. The parent whose topics are to be listed. Structured like `projects/{project_number\}/locations/{location\}`.
     *     parent: 'projects/my-project/locations/my-location',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "nextPageToken": "my_nextPageToken",
     *   //   "topics": []
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
      params: Params$Resource$Admin$Projects$Locations$Topics$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Admin$Projects$Locations$Topics$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ListTopicsResponse>;
    list(
      params: Params$Resource$Admin$Projects$Locations$Topics$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Admin$Projects$Locations$Topics$List,
      options: MethodOptions | BodyResponseCallback<Schema$ListTopicsResponse>,
      callback: BodyResponseCallback<Schema$ListTopicsResponse>
    ): void;
    list(
      params: Params$Resource$Admin$Projects$Locations$Topics$List,
      callback: BodyResponseCallback<Schema$ListTopicsResponse>
    ): void;
    list(callback: BodyResponseCallback<Schema$ListTopicsResponse>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Admin$Projects$Locations$Topics$List
        | BodyResponseCallback<Schema$ListTopicsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ListTopicsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ListTopicsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$ListTopicsResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Admin$Projects$Locations$Topics$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Admin$Projects$Locations$Topics$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://pubsublite.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/admin/{+parent}/topics').replace(
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
        createAPIRequest<Schema$ListTopicsResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ListTopicsResponse>(parameters);
      }
    }

    /**
     * Updates properties of the specified topic.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/pubsublite.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const pubsublite = google.pubsublite('v1');
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
     *   const res = await pubsublite.admin.projects.locations.topics.patch({
     *     // The name of the topic. Structured like: projects/{project_number\}/locations/{location\}/topics/{topic_id\}
     *     name: 'projects/my-project/locations/my-location/topics/my-topic',
     *     // Required. A mask specifying the topic fields to change.
     *     updateMask: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "name": "my_name",
     *       //   "partitionConfig": {},
     *       //   "retentionConfig": {}
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "name": "my_name",
     *   //   "partitionConfig": {},
     *   //   "retentionConfig": {}
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
      params: Params$Resource$Admin$Projects$Locations$Topics$Patch,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    patch(
      params?: Params$Resource$Admin$Projects$Locations$Topics$Patch,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Topic>;
    patch(
      params: Params$Resource$Admin$Projects$Locations$Topics$Patch,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    patch(
      params: Params$Resource$Admin$Projects$Locations$Topics$Patch,
      options: MethodOptions | BodyResponseCallback<Schema$Topic>,
      callback: BodyResponseCallback<Schema$Topic>
    ): void;
    patch(
      params: Params$Resource$Admin$Projects$Locations$Topics$Patch,
      callback: BodyResponseCallback<Schema$Topic>
    ): void;
    patch(callback: BodyResponseCallback<Schema$Topic>): void;
    patch(
      paramsOrCallback?:
        | Params$Resource$Admin$Projects$Locations$Topics$Patch
        | BodyResponseCallback<Schema$Topic>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Topic>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Topic>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$Topic> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Admin$Projects$Locations$Topics$Patch;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Admin$Projects$Locations$Topics$Patch;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://pubsublite.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/admin/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$Topic>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Topic>(parameters);
      }
    }
  }

  export interface Params$Resource$Admin$Projects$Locations$Topics$Create
    extends StandardParameters {
    /**
     * Required. The parent location in which to create the topic. Structured like `projects/{project_number\}/locations/{location\}`.
     */
    parent?: string;
    /**
     * Required. The ID to use for the topic, which will become the final component of the topic's name. This value is structured like: `my-topic-name`.
     */
    topicId?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$Topic;
  }
  export interface Params$Resource$Admin$Projects$Locations$Topics$Delete
    extends StandardParameters {
    /**
     * Required. The name of the topic to delete.
     */
    name?: string;
  }
  export interface Params$Resource$Admin$Projects$Locations$Topics$Get
    extends StandardParameters {
    /**
     * Required. The name of the topic whose configuration to return.
     */
    name?: string;
  }
  export interface Params$Resource$Admin$Projects$Locations$Topics$Getpartitions
    extends StandardParameters {
    /**
     * Required. The topic whose partition information to return.
     */
    name?: string;
  }
  export interface Params$Resource$Admin$Projects$Locations$Topics$List
    extends StandardParameters {
    /**
     * The maximum number of topics to return. The service may return fewer than this value. If unset or zero, all topics for the parent will be returned.
     */
    pageSize?: number;
    /**
     * A page token, received from a previous `ListTopics` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListTopics` must match the call that provided the page token.
     */
    pageToken?: string;
    /**
     * Required. The parent whose topics are to be listed. Structured like `projects/{project_number\}/locations/{location\}`.
     */
    parent?: string;
  }
  export interface Params$Resource$Admin$Projects$Locations$Topics$Patch
    extends StandardParameters {
    /**
     * The name of the topic. Structured like: projects/{project_number\}/locations/{location\}/topics/{topic_id\}
     */
    name?: string;
    /**
     * Required. A mask specifying the topic fields to change.
     */
    updateMask?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$Topic;
  }

  export class Resource$Admin$Projects$Locations$Topics$Subscriptions {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Lists the subscriptions attached to the specified topic.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/pubsublite.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const pubsublite = google.pubsublite('v1');
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
     *   const res = await pubsublite.admin.projects.locations.topics.subscriptions.list(
     *     {
     *       // Required. The name of the topic whose subscriptions to list.
     *       name: 'projects/my-project/locations/my-location/topics/my-topic',
     *       // The maximum number of subscriptions to return. The service may return fewer than this value. If unset or zero, all subscriptions for the given topic will be returned.
     *       pageSize: 'placeholder-value',
     *       // A page token, received from a previous `ListTopicSubscriptions` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListTopicSubscriptions` must match the call that provided the page token.
     *       pageToken: 'placeholder-value',
     *     }
     *   );
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
      params: Params$Resource$Admin$Projects$Locations$Topics$Subscriptions$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Admin$Projects$Locations$Topics$Subscriptions$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ListTopicSubscriptionsResponse>;
    list(
      params: Params$Resource$Admin$Projects$Locations$Topics$Subscriptions$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Admin$Projects$Locations$Topics$Subscriptions$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ListTopicSubscriptionsResponse>,
      callback: BodyResponseCallback<Schema$ListTopicSubscriptionsResponse>
    ): void;
    list(
      params: Params$Resource$Admin$Projects$Locations$Topics$Subscriptions$List,
      callback: BodyResponseCallback<Schema$ListTopicSubscriptionsResponse>
    ): void;
    list(
      callback: BodyResponseCallback<Schema$ListTopicSubscriptionsResponse>
    ): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Admin$Projects$Locations$Topics$Subscriptions$List
        | BodyResponseCallback<Schema$ListTopicSubscriptionsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ListTopicSubscriptionsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ListTopicSubscriptionsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$ListTopicSubscriptionsResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Admin$Projects$Locations$Topics$Subscriptions$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Admin$Projects$Locations$Topics$Subscriptions$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://pubsublite.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/admin/{+name}/subscriptions').replace(
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
        createAPIRequest<Schema$ListTopicSubscriptionsResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ListTopicSubscriptionsResponse>(
          parameters
        );
      }
    }
  }

  export interface Params$Resource$Admin$Projects$Locations$Topics$Subscriptions$List
    extends StandardParameters {
    /**
     * Required. The name of the topic whose subscriptions to list.
     */
    name?: string;
    /**
     * The maximum number of subscriptions to return. The service may return fewer than this value. If unset or zero, all subscriptions for the given topic will be returned.
     */
    pageSize?: number;
    /**
     * A page token, received from a previous `ListTopicSubscriptions` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListTopicSubscriptions` must match the call that provided the page token.
     */
    pageToken?: string;
  }

  export class Resource$Cursor {
    context: APIRequestContext;
    projects: Resource$Cursor$Projects;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.projects = new Resource$Cursor$Projects(this.context);
    }
  }

  export class Resource$Cursor$Projects {
    context: APIRequestContext;
    locations: Resource$Cursor$Projects$Locations;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.locations = new Resource$Cursor$Projects$Locations(this.context);
    }
  }

  export class Resource$Cursor$Projects$Locations {
    context: APIRequestContext;
    subscriptions: Resource$Cursor$Projects$Locations$Subscriptions;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.subscriptions = new Resource$Cursor$Projects$Locations$Subscriptions(
        this.context
      );
    }
  }

  export class Resource$Cursor$Projects$Locations$Subscriptions {
    context: APIRequestContext;
    cursors: Resource$Cursor$Projects$Locations$Subscriptions$Cursors;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.cursors = new Resource$Cursor$Projects$Locations$Subscriptions$Cursors(
        this.context
      );
    }
  }

  export class Resource$Cursor$Projects$Locations$Subscriptions$Cursors {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Returns all committed cursor information for a subscription.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/pubsublite.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const pubsublite = google.pubsublite('v1');
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
     *   const res = await pubsublite.cursor.projects.locations.subscriptions.cursors.list(
     *     {
     *       // The maximum number of cursors to return. The service may return fewer than this value. If unset or zero, all cursors for the parent will be returned.
     *       pageSize: 'placeholder-value',
     *       // A page token, received from a previous `ListPartitionCursors` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListPartitionCursors` must match the call that provided the page token.
     *       pageToken: 'placeholder-value',
     *       // Required. The subscription for which to retrieve cursors. Structured like `projects/{project_number\}/locations/{location\}/subscriptions/{subscription_id\}`.
     *       parent:
     *         'projects/my-project/locations/my-location/subscriptions/my-subscription',
     *     }
     *   );
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "nextPageToken": "my_nextPageToken",
     *   //   "partitionCursors": []
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
      params: Params$Resource$Cursor$Projects$Locations$Subscriptions$Cursors$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Cursor$Projects$Locations$Subscriptions$Cursors$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ListPartitionCursorsResponse>;
    list(
      params: Params$Resource$Cursor$Projects$Locations$Subscriptions$Cursors$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Cursor$Projects$Locations$Subscriptions$Cursors$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ListPartitionCursorsResponse>,
      callback: BodyResponseCallback<Schema$ListPartitionCursorsResponse>
    ): void;
    list(
      params: Params$Resource$Cursor$Projects$Locations$Subscriptions$Cursors$List,
      callback: BodyResponseCallback<Schema$ListPartitionCursorsResponse>
    ): void;
    list(
      callback: BodyResponseCallback<Schema$ListPartitionCursorsResponse>
    ): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Cursor$Projects$Locations$Subscriptions$Cursors$List
        | BodyResponseCallback<Schema$ListPartitionCursorsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ListPartitionCursorsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ListPartitionCursorsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$ListPartitionCursorsResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Cursor$Projects$Locations$Subscriptions$Cursors$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Cursor$Projects$Locations$Subscriptions$Cursors$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://pubsublite.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/cursor/{+parent}/cursors').replace(
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
        createAPIRequest<Schema$ListPartitionCursorsResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ListPartitionCursorsResponse>(
          parameters
        );
      }
    }
  }

  export interface Params$Resource$Cursor$Projects$Locations$Subscriptions$Cursors$List
    extends StandardParameters {
    /**
     * The maximum number of cursors to return. The service may return fewer than this value. If unset or zero, all cursors for the parent will be returned.
     */
    pageSize?: number;
    /**
     * A page token, received from a previous `ListPartitionCursors` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListPartitionCursors` must match the call that provided the page token.
     */
    pageToken?: string;
    /**
     * Required. The subscription for which to retrieve cursors. Structured like `projects/{project_number\}/locations/{location\}/subscriptions/{subscription_id\}`.
     */
    parent?: string;
  }

  export class Resource$Topicstats {
    context: APIRequestContext;
    projects: Resource$Topicstats$Projects;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.projects = new Resource$Topicstats$Projects(this.context);
    }
  }

  export class Resource$Topicstats$Projects {
    context: APIRequestContext;
    locations: Resource$Topicstats$Projects$Locations;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.locations = new Resource$Topicstats$Projects$Locations(this.context);
    }
  }

  export class Resource$Topicstats$Projects$Locations {
    context: APIRequestContext;
    topics: Resource$Topicstats$Projects$Locations$Topics;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.topics = new Resource$Topicstats$Projects$Locations$Topics(
        this.context
      );
    }
  }

  export class Resource$Topicstats$Projects$Locations$Topics {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Compute the head cursor for the partition. The head cursor's offset is guaranteed to be less than or equal to all messages which have not yet been acknowledged as published, and greater than the offset of any message whose publish has already been acknowledged. It is zero if there have never been messages in the partition.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/pubsublite.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const pubsublite = google.pubsublite('v1');
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
     *   const res = await pubsublite.topicStats.projects.locations.topics.computeHeadCursor(
     *     {
     *       // Required. The topic for which we should compute the head cursor.
     *       topic: 'projects/my-project/locations/my-location/topics/my-topic',
     *
     *       // Request body metadata
     *       requestBody: {
     *         // request body parameters
     *         // {
     *         //   "partition": "my_partition"
     *         // }
     *       },
     *     }
     *   );
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "headCursor": {}
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
    computeHeadCursor(
      params: Params$Resource$Topicstats$Projects$Locations$Topics$Computeheadcursor,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    computeHeadCursor(
      params?: Params$Resource$Topicstats$Projects$Locations$Topics$Computeheadcursor,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ComputeHeadCursorResponse>;
    computeHeadCursor(
      params: Params$Resource$Topicstats$Projects$Locations$Topics$Computeheadcursor,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    computeHeadCursor(
      params: Params$Resource$Topicstats$Projects$Locations$Topics$Computeheadcursor,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ComputeHeadCursorResponse>,
      callback: BodyResponseCallback<Schema$ComputeHeadCursorResponse>
    ): void;
    computeHeadCursor(
      params: Params$Resource$Topicstats$Projects$Locations$Topics$Computeheadcursor,
      callback: BodyResponseCallback<Schema$ComputeHeadCursorResponse>
    ): void;
    computeHeadCursor(
      callback: BodyResponseCallback<Schema$ComputeHeadCursorResponse>
    ): void;
    computeHeadCursor(
      paramsOrCallback?:
        | Params$Resource$Topicstats$Projects$Locations$Topics$Computeheadcursor
        | BodyResponseCallback<Schema$ComputeHeadCursorResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ComputeHeadCursorResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ComputeHeadCursorResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$ComputeHeadCursorResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Topicstats$Projects$Locations$Topics$Computeheadcursor;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Topicstats$Projects$Locations$Topics$Computeheadcursor;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://pubsublite.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl + '/v1/topicStats/{+topic}:computeHeadCursor'
            ).replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$ComputeHeadCursorResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ComputeHeadCursorResponse>(parameters);
      }
    }

    /**
     * Compute statistics about a range of messages in a given topic and partition.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/pubsublite.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const pubsublite = google.pubsublite('v1');
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
     *   const res = await pubsublite.topicStats.projects.locations.topics.computeMessageStats(
     *     {
     *       // Required. The topic for which we should compute message stats.
     *       topic: 'projects/my-project/locations/my-location/topics/my-topic',
     *
     *       // Request body metadata
     *       requestBody: {
     *         // request body parameters
     *         // {
     *         //   "endCursor": {},
     *         //   "partition": "my_partition",
     *         //   "startCursor": {}
     *         // }
     *       },
     *     }
     *   );
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "messageBytes": "my_messageBytes",
     *   //   "messageCount": "my_messageCount",
     *   //   "minimumEventTime": "my_minimumEventTime",
     *   //   "minimumPublishTime": "my_minimumPublishTime"
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
    computeMessageStats(
      params: Params$Resource$Topicstats$Projects$Locations$Topics$Computemessagestats,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    computeMessageStats(
      params?: Params$Resource$Topicstats$Projects$Locations$Topics$Computemessagestats,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ComputeMessageStatsResponse>;
    computeMessageStats(
      params: Params$Resource$Topicstats$Projects$Locations$Topics$Computemessagestats,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    computeMessageStats(
      params: Params$Resource$Topicstats$Projects$Locations$Topics$Computemessagestats,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ComputeMessageStatsResponse>,
      callback: BodyResponseCallback<Schema$ComputeMessageStatsResponse>
    ): void;
    computeMessageStats(
      params: Params$Resource$Topicstats$Projects$Locations$Topics$Computemessagestats,
      callback: BodyResponseCallback<Schema$ComputeMessageStatsResponse>
    ): void;
    computeMessageStats(
      callback: BodyResponseCallback<Schema$ComputeMessageStatsResponse>
    ): void;
    computeMessageStats(
      paramsOrCallback?:
        | Params$Resource$Topicstats$Projects$Locations$Topics$Computemessagestats
        | BodyResponseCallback<Schema$ComputeMessageStatsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ComputeMessageStatsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ComputeMessageStatsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$ComputeMessageStatsResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Topicstats$Projects$Locations$Topics$Computemessagestats;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Topicstats$Projects$Locations$Topics$Computemessagestats;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://pubsublite.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl + '/v1/topicStats/{+topic}:computeMessageStats'
            ).replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$ComputeMessageStatsResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ComputeMessageStatsResponse>(parameters);
      }
    }
  }

  export interface Params$Resource$Topicstats$Projects$Locations$Topics$Computeheadcursor
    extends StandardParameters {
    /**
     * Required. The topic for which we should compute the head cursor.
     */
    topic?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$ComputeHeadCursorRequest;
  }
  export interface Params$Resource$Topicstats$Projects$Locations$Topics$Computemessagestats
    extends StandardParameters {
    /**
     * Required. The topic for which we should compute message stats.
     */
    topic?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$ComputeMessageStatsRequest;
  }
}
