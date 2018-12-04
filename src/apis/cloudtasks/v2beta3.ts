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
import {Compute, JWT, OAuth2Client, UserRefreshClient} from 'google-auth-library';
import {BodyResponseCallback, createAPIRequest, GlobalOptions, GoogleConfigurable, MethodOptions} from 'googleapis-common';

// tslint:disable: no-any
// tslint:disable: class-name
// tslint:disable: variable-name
// tslint:disable: jsdoc-format
// tslint:disable: no-namespace

export namespace cloudtasks_v2beta3 {
  export interface Options extends GlobalOptions {
    version: 'v2beta3';
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
     * API key. Your API key identifies your project and provides you with API
     * access, quota, and reports. Required unless you provide an OAuth 2.0
     * token.
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
     * Available to use for quota purposes for server-side applications. Can be
     * any arbitrary string assigned to a user, but should not exceed 40
     * characters.
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
   * Cloud Tasks API
   *
   * Manages the execution of large numbers of distributed requests.
   *
   * @example
   * const {google} = require('googleapis');
   * const cloudtasks = google.cloudtasks('v2beta3');
   *
   * @namespace cloudtasks
   * @type {Function}
   * @version v2beta3
   * @variation v2beta3
   * @param {object=} options Options for Cloudtasks
   */
  export class Cloudtasks {
    _options: GlobalOptions;
    google?: GoogleConfigurable;
    root = this;

    projects: Resource$Projects;

    constructor(options: GlobalOptions, google?: GoogleConfigurable) {
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
   * App Engine HTTP queue.  The task will be delivered to the App Engine
   * application hostname specified by its AppEngineHttpQueue and
   * AppEngineHttpRequest. The documentation for AppEngineHttpRequest explains
   * how the task&#39;s host URL is constructed.  Using AppEngineHttpQueue
   * requires
   * [`appengine.applications.get`](https://cloud.google.com/appengine/docs/admin-api/access-control)
   * Google IAM permission for the project and the following scope:
   * `https://www.googleapis.com/auth/cloud-platform`
   */
  export interface Schema$AppEngineHttpQueue {
    /**
     * Overrides for the task-level app_engine_routing.  If set,
     * `app_engine_routing_override` is used for all tasks in the queue, no
     * matter what the setting is for the task-level app_engine_routing.
     */
    appEngineRoutingOverride?: Schema$AppEngineRouting;
  }
  /**
   * App Engine HTTP request.  The message defines the HTTP request that is sent
   * to an App Engine app when the task is dispatched.  This proto can only be
   * used for tasks in a queue which has app_engine_http_queue set.  Using
   * AppEngineHttpRequest requires
   * [`appengine.applications.get`](https://cloud.google.com/appengine/docs/admin-api/access-control)
   * Google IAM permission for the project and the following scope:
   * `https://www.googleapis.com/auth/cloud-platform`  The task will be
   * delivered to the App Engine app which belongs to the same project as the
   * queue. For more information, see [How Requests are
   * Routed](https://cloud.google.com/appengine/docs/standard/python/how-requests-are-routed)
   * and how routing is affected by [dispatch
   * files](https://cloud.google.com/appengine/docs/python/config/dispatchref).
   * Traffic is encrypted during transport and never leaves Google datacenters.
   * Because this traffic is carried over a communication mechanism internal to
   * Google, you cannot explicitly set the protocol (for example, HTTP or
   * HTTPS). The request to the handler, however, will appear to have used the
   * HTTP protocol.  The AppEngineRouting used to construct the URL that the
   * task is delivered to can be set at the queue-level or task-level:  * If
   * set,    app_engine_routing_override    is used for all tasks in the queue,
   * no matter what the setting    is for the    task-level app_engine_routing.
   * The `url` that the task will be sent to is:  * `url =` host `+`
   * relative_uri  Tasks can be dispatched to secure app handlers, unsecure app
   * handlers, and URIs restricted with [`login:
   * admin`](https://cloud.google.com/appengine/docs/standard/python/config/appref).
   * Because tasks are not run as any user, they cannot be dispatched to URIs
   * restricted with [`login:
   * required`](https://cloud.google.com/appengine/docs/standard/python/config/appref)
   * Task dispatches also do not follow redirects.  The task attempt has
   * succeeded if the app&#39;s request handler returns an HTTP response code in
   * the range [`200` - `299`]. `503` is considered an App Engine system error
   * instead of an application error. Requests returning error `503` will be
   * retried regardless of retry configuration and not counted against retry
   * counts. Any other response code or a failure to receive a response before
   * the deadline is a failed attempt.
   */
  export interface Schema$AppEngineHttpRequest {
    /**
     * Task-level setting for App Engine routing.  If set,
     * app_engine_routing_override is used for all tasks in the queue, no matter
     * what the setting is for the task-level app_engine_routing.
     */
    appEngineRouting?: Schema$AppEngineRouting;
    /**
     * HTTP request body.  A request body is allowed only if the HTTP method is
     * POST or PUT. It is an error to set a body on a task with an incompatible
     * HttpMethod.
     */
    body?: string;
    /**
     * HTTP request headers.  This map contains the header field names and
     * values. Headers can be set when the task is created. Repeated headers are
     * not supported but a header value can contain commas.  Cloud Tasks sets
     * some headers to default values:  * `User-Agent`: By default, this header
     * is   `&quot;AppEngine-Google; (+http://code.google.com/appengine)&quot;`.
     * This header can be modified, but Cloud Tasks will append
     * `&quot;AppEngine-Google; (+http://code.google.com/appengine)&quot;` to
     * the   modified `User-Agent`.  If the task has a body, Cloud Tasks sets
     * the following headers:  * `Content-Type`: By default, the `Content-Type`
     * header is set to   `&quot;application/octet-stream&quot;`. The default
     * can be overridden by explicitly   setting `Content-Type` to a particular
     * media type when the   task is created.   For example, `Content-Type` can
     * be set to `&quot;application/json&quot;`. * `Content-Length`: This is
     * computed by Cloud Tasks. This value is   output only.   It cannot be
     * changed.  The headers below cannot be set or overridden:  * `Host` *
     * `X-Google-*` * `X-AppEngine-*`  In addition, Cloud Tasks sets some
     * headers when the task is dispatched, such as headers containing
     * information about the task; see [request
     * headers](https://cloud.google.com/appengine/docs/python/taskqueue/push/creating-handlers#reading_request_headers).
     * These headers are set only when the task is dispatched, so they are not
     * visible when the task is returned in a Cloud Tasks response.  Although
     * there is no specific limit for the maximum number of headers or the size,
     * there is a limit on the maximum size of the Task. For more information,
     * see the CreateTask documentation.
     */
    headers?: {[key: string]: string;};
    /**
     * The HTTP method to use for the request. The default is POST.  The
     * app&#39;s request handler for the task&#39;s target URL must be able to
     * handle HTTP requests with this http_method, otherwise the task attempt
     * will fail with error code 405 (Method Not Allowed). See [Writing a push
     * task request
     * handler](https://cloud.google.com/appengine/docs/java/taskqueue/push/creating-handlers#writing_a_push_task_request_handler)
     * and the documentation for the request handlers in the language your app
     * is written in e.g. [Python Request
     * Handler](https://cloud.google.com/appengine/docs/python/tools/webapp/requesthandlerclass).
     */
    httpMethod?: string;
    /**
     * The relative URI.  The relative URI must begin with &quot;/&quot; and
     * must be a valid HTTP relative URI. It can contain a path and query string
     * arguments. If the relative URI is empty, then the root path &quot;/&quot;
     * will be used. No spaces are allowed, and the maximum length allowed is
     * 2083 characters.
     */
    relativeUri?: string;
  }
  /**
   * App Engine Routing.  Defines routing characteristics specific to App Engine
   * - service, version, and instance.  For more information about services,
   * versions, and instances see [An Overview of App
   * Engine](https://cloud.google.com/appengine/docs/python/an-overview-of-app-engine),
   * [Microservices Architecture on Google App
   * Engine](https://cloud.google.com/appengine/docs/python/microservices-on-app-engine),
   * [App Engine Standard request
   * routing](https://cloud.google.com/appengine/docs/standard/python/how-requests-are-routed),
   * and [App Engine Flex request
   * routing](https://cloud.google.com/appengine/docs/flexible/python/how-requests-are-routed).
   */
  export interface Schema$AppEngineRouting {
    /**
     * Output only. The host that the task is sent to.  The host is constructed
     * from the domain name of the app associated with the queue&#39;s project
     * ID (for example &lt;app-id&gt;.appspot.com), and the service, version,
     * and instance. Tasks which were created using the App Engine SDK might
     * have a custom domain name.  For more information, see [How Requests are
     * Routed](https://cloud.google.com/appengine/docs/standard/python/how-requests-are-routed).
     */
    host?: string;
    /**
     * App instance.  By default, the task is sent to an instance which is
     * available when the task is attempted.  Requests can only be sent to a
     * specific instance if [manual scaling is used in App Engine
     * Standard](https://cloud.google.com/appengine/docs/python/an-overview-of-app-engine?hl=en_US#scaling_types_and_instance_classes).
     * App Engine Flex does not support instances. For more information, see
     * [App Engine Standard request
     * routing](https://cloud.google.com/appengine/docs/standard/python/how-requests-are-routed)
     * and [App Engine Flex request
     * routing](https://cloud.google.com/appengine/docs/flexible/python/how-requests-are-routed).
     */
    instance?: string;
    /**
     * App service.  By default, the task is sent to the service which is the
     * default service when the task is attempted.  For some queues or tasks
     * which were created using the App Engine Task Queue API, host is not
     * parsable into service, version, and instance. For example, some tasks
     * which were created using the App Engine SDK use a custom domain name;
     * custom domains are not parsed by Cloud Tasks. If host is not parsable,
     * then service, version, and instance are the empty string.
     */
    service?: string;
    /**
     * App version.  By default, the task is sent to the version which is the
     * default version when the task is attempted.  For some queues or tasks
     * which were created using the App Engine Task Queue API, host is not
     * parsable into service, version, and instance. For example, some tasks
     * which were created using the App Engine SDK use a custom domain name;
     * custom domains are not parsed by Cloud Tasks. If host is not parsable,
     * then service, version, and instance are the empty string.
     */
    version?: string;
  }
  /**
   * The status of a task attempt.
   */
  export interface Schema$Attempt {
    /**
     * Output only. The time that this attempt was dispatched.  `dispatch_time`
     * will be truncated to the nearest microsecond.
     */
    dispatchTime?: string;
    /**
     * Output only. The response from the target for this attempt.  If
     * `response_time` is unset, then the task has not been attempted or is
     * currently running and the `response_status` field is meaningless.
     */
    responseStatus?: Schema$Status;
    /**
     * Output only. The time that this attempt response was received.
     * `response_time` will be truncated to the nearest microsecond.
     */
    responseTime?: string;
    /**
     * Output only. The time that this attempt was scheduled.  `schedule_time`
     * will be truncated to the nearest microsecond.
     */
    scheduleTime?: string;
  }
  /**
   * Associates `members` with a `role`.
   */
  export interface Schema$Binding {
    /**
     * Unimplemented. The condition that is associated with this binding. NOTE:
     * an unsatisfied condition will not allow user access via current binding.
     * Different bindings, including their conditions, are examined
     * independently.
     */
    condition?: Schema$Expr;
    /**
     * Specifies the identities requesting access for a Cloud Platform resource.
     * `members` can have the following values:  * `allUsers`: A special
     * identifier that represents anyone who is    on the internet; with or
     * without a Google account.  * `allAuthenticatedUsers`: A special
     * identifier that represents anyone    who is authenticated with a Google
     * account or a service account.  * `user:{emailid}`: An email address that
     * represents a specific Google    account. For example, `alice@gmail.com` .
     * * `serviceAccount:{emailid}`: An email address that represents a service
     * account. For example, `my-other-app@appspot.gserviceaccount.com`.  *
     * `group:{emailid}`: An email address that represents a Google group. For
     * example, `admins@example.com`.   * `domain:{domain}`: A Google Apps
     * domain name that represents all the    users of that domain. For example,
     * `google.com` or `example.com`.
     */
    members?: string[];
    /**
     * Role that is assigned to `members`. For example, `roles/viewer`,
     * `roles/editor`, or `roles/owner`.
     */
    role?: string;
  }
  /**
   * Request message for CreateTask.
   */
  export interface Schema$CreateTaskRequest {
    /**
     * The response_view specifies which subset of the Task will be returned. By
     * default response_view is BASIC; not all information is retrieved by
     * default because some data, such as payloads, might be desirable to return
     * only when needed because of its large size or because of the sensitivity
     * of data that it contains.  Authorization for FULL requires
     * `cloudtasks.tasks.fullView` [Google IAM](https://cloud.google.com/iam/)
     * permission on the Task resource.
     */
    responseView?: string;
    /**
     * Required.  The task to add.  Task names have the following format:
     * `projects/PROJECT_ID/locations/LOCATION_ID/queues/QUEUE_ID/tasks/TASK_ID`.
     * The user can optionally specify a task name. If a name is not specified
     * then the system will generate a random unique task id, which will be set
     * in the task returned in the response.  If schedule_time is not set or is
     * in the past then Cloud Tasks will set it to the current time.  Task
     * De-duplication:  Explicitly specifying a task ID enables task
     * de-duplication.  If a task&#39;s ID is identical to that of an existing
     * task or a task that was deleted or executed recently then the call will
     * fail with ALREADY_EXISTS. If the task&#39;s queue was created using Cloud
     * Tasks, then another task with the same name can&#39;t be created for
     * ~1hour after the original task was deleted or executed. If the task&#39;s
     * queue was created using queue.yaml or queue.xml, then another task with
     * the same name can&#39;t be created for ~9days after the original task was
     * deleted or executed.  Because there is an extra lookup cost to identify
     * duplicate task names, these CreateTask calls have significantly increased
     * latency. Using hashed strings for the task id or for the prefix of the
     * task id is recommended. Choosing task ids that are sequential or have
     * sequential prefixes, for example using a timestamp, causes an increase in
     * latency and error rates in all task commands. The infrastructure relies
     * on an approximately uniform distribution of task ids to store and serve
     * tasks efficiently.
     */
    task?: Schema$Task;
  }
  /**
   * A generic empty message that you can re-use to avoid defining duplicated
   * empty messages in your APIs. A typical example is to use it as the request
   * or the response type of an API method. For instance:      service Foo { rpc
   * Bar(google.protobuf.Empty) returns (google.protobuf.Empty);     }  The JSON
   * representation for `Empty` is empty JSON object `{}`.
   */
  export interface Schema$Empty {}
  /**
   * Represents an expression text. Example:      title: &quot;User account
   * presence&quot;     description: &quot;Determines whether the request has a
   * user account&quot;     expression: &quot;size(request.user) &gt; 0&quot;
   */
  export interface Schema$Expr {
    /**
     * An optional description of the expression. This is a longer text which
     * describes the expression, e.g. when hovered over it in a UI.
     */
    description?: string;
    /**
     * Textual representation of an expression in Common Expression Language
     * syntax.  The application context of the containing message determines
     * which well-known feature set of CEL is supported.
     */
    expression?: string;
    /**
     * An optional string indicating the location of the expression for error
     * reporting, e.g. a file name and a position in the file.
     */
    location?: string;
    /**
     * An optional title for the expression, i.e. a short string describing its
     * purpose. This can be used e.g. in UIs which allow to enter the
     * expression.
     */
    title?: string;
  }
  /**
   * Request message for `GetIamPolicy` method.
   */
  export interface Schema$GetIamPolicyRequest {}
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
    nextPageToken?: string;
  }
  /**
   * Response message for ListQueues.
   */
  export interface Schema$ListQueuesResponse {
    /**
     * A token to retrieve next page of results.  To return the next page of
     * results, call ListQueues with this value as the page_token.  If the
     * next_page_token is empty, there are no more results.  The page token is
     * valid for only 2 hours.
     */
    nextPageToken?: string;
    /**
     * The list of queues.
     */
    queues?: Schema$Queue[];
  }
  /**
   * Response message for listing tasks using ListTasks.
   */
  export interface Schema$ListTasksResponse {
    /**
     * A token to retrieve next page of results.  To return the next page of
     * results, call ListTasks with this value as the page_token.  If the
     * next_page_token is empty, there are no more results.
     */
    nextPageToken?: string;
    /**
     * The list of tasks.
     */
    tasks?: Schema$Task[];
  }
  /**
   * A resource that represents Google Cloud Platform location.
   */
  export interface Schema$Location {
    /**
     * The friendly name for this location, typically a nearby city name. For
     * example, &quot;Tokyo&quot;.
     */
    displayName?: string;
    /**
     * Cross-service attributes for the location. For example
     * {&quot;cloud.googleapis.com/region&quot;: &quot;us-east1&quot;}
     */
    labels?: {[key: string]: string;};
    /**
     * The canonical id for this location. For example: `&quot;us-east1&quot;`.
     */
    locationId?: string;
    /**
     * Service-specific metadata. For example the available capacity at the
     * given location.
     */
    metadata?: {[key: string]: any;};
    /**
     * Resource name for the location, which may vary between implementations.
     * For example: `&quot;projects/example-project/locations/us-east1&quot;`
     */
    name?: string;
  }
  /**
   * Request message for PauseQueue.
   */
  export interface Schema$PauseQueueRequest {}
  /**
   * Defines an Identity and Access Management (IAM) policy. It is used to
   * specify access control policies for Cloud Platform resources.   A `Policy`
   * consists of a list of `bindings`. A `binding` binds a list of `members` to
   * a `role`, where the members can be user accounts, Google groups, Google
   * domains, and service accounts. A `role` is a named list of permissions
   * defined by IAM.  **JSON Example**      {       &quot;bindings&quot;: [ {
   * &quot;role&quot;: &quot;roles/owner&quot;,           &quot;members&quot;: [
   * &quot;user:mike@example.com&quot;, &quot;group:admins@example.com&quot;,
   * &quot;domain:google.com&quot;,
   * &quot;serviceAccount:my-other-app@appspot.gserviceaccount.com&quot; ] }, {
   * &quot;role&quot;: &quot;roles/viewer&quot;,           &quot;members&quot;:
   * [&quot;user:sean@example.com&quot;]         }       ]     }  **YAML
   * Example**      bindings:     - members:       - user:mike@example.com -
   * group:admins@example.com       - domain:google.com       -
   * serviceAccount:my-other-app@appspot.gserviceaccount.com       role:
   * roles/owner     - members:       - user:sean@example.com       role:
   * roles/viewer   For a description of IAM and its features, see the [IAM
   * developer&#39;s guide](https://cloud.google.com/iam/docs).
   */
  export interface Schema$Policy {
    /**
     * Associates a list of `members` to a `role`. `bindings` with no members
     * will result in an error.
     */
    bindings?: Schema$Binding[];
    /**
     * `etag` is used for optimistic concurrency control as a way to help
     * prevent simultaneous updates of a policy from overwriting each other. It
     * is strongly suggested that systems make use of the `etag` in the
     * read-modify-write cycle to perform policy updates in order to avoid race
     * conditions: An `etag` is returned in the response to `getIamPolicy`, and
     * systems are expected to put that etag in the request to `setIamPolicy` to
     * ensure that their change will be applied to the same version of the
     * policy.  If no `etag` is provided in the call to `setIamPolicy`, then the
     * existing policy is overwritten blindly.
     */
    etag?: string;
    /**
     * Deprecated.
     */
    version?: number;
  }
  /**
   * Request message for PurgeQueue.
   */
  export interface Schema$PurgeQueueRequest {}
  /**
   * A queue is a container of related tasks. Queues are configured to manage
   * how those tasks are dispatched. Configurable properties include rate
   * limits, retry options, queue types, and others.
   */
  export interface Schema$Queue {
    /**
     * App Engine HTTP queue.  An App Engine queue is a queue that has an
     * AppEngineHttpQueue type.
     */
    appEngineHttpQueue?: Schema$AppEngineHttpQueue;
    /**
     * Caller-specified and required in CreateQueue, after which it becomes
     * output only.  The queue name.  The queue name must have the following
     * format: `projects/PROJECT_ID/locations/LOCATION_ID/queues/QUEUE_ID`  *
     * `PROJECT_ID` can contain letters ([A-Za-z]), numbers ([0-9]),    hyphens
     * (-), colons (:), or periods (.).    For more information, see
     * [Identifying
     * projects](https://cloud.google.com/resource-manager/docs/creating-managing-projects#identifying_projects)
     * * `LOCATION_ID` is the canonical ID for the queue&#39;s location.    The
     * list of available locations can be obtained by calling    ListLocations.
     * For more information, see https://cloud.google.com/about/locations/. *
     * `QUEUE_ID` can contain letters ([A-Za-z]), numbers ([0-9]), or   hyphens
     * (-). The maximum length is 100 characters.
     */
    name?: string;
    /**
     * Output only. The last time this queue was purged.  All tasks that were
     * created before this time were purged.  A queue can be purged using
     * PurgeQueue, the [App Engine Task Queue SDK, or the Cloud
     * Console](https://cloud.google.com/appengine/docs/standard/python/taskqueue/push/deleting-tasks-and-queues#purging_all_tasks_from_a_queue).
     * Purge time will be truncated to the nearest microsecond. Purge time will
     * be unset if the queue has never been purged.
     */
    purgeTime?: string;
    /**
     * Rate limits for task dispatches.  rate_limits and retry_config are
     * related because they both control task attempts however they control how
     * tasks are attempted in different ways:  * rate_limits controls the total
     * rate of   dispatches from a queue (i.e. all traffic dispatched from the
     * queue, regardless of whether the dispatch is from a first   attempt or a
     * retry). * retry_config controls what happens to   particular a task after
     * its first attempt fails. That is,   retry_config controls task retries
     * (the   second attempt, third attempt, etc).
     */
    rateLimits?: Schema$RateLimits;
    /**
     * Settings that determine the retry behavior.  * For tasks created using
     * Cloud Tasks: the queue-level retry settings   apply to all tasks in the
     * queue that were created using Cloud Tasks.   Retry settings cannot be set
     * on individual tasks. * For tasks created using the App Engine SDK: the
     * queue-level retry   settings apply to all tasks in the queue which do not
     * have retry settings   explicitly set on the task and were created by the
     * App Engine SDK. See   [App Engine
     * documentation](https://cloud.google.com/appengine/docs/standard/python/taskqueue/push/retrying-tasks).
     */
    retryConfig?: Schema$RetryConfig;
    /**
     * Output only. The state of the queue.  `state` can only be changed by
     * called PauseQueue, ResumeQueue, or uploading
     * [queue.yaml/xml](https://cloud.google.com/appengine/docs/python/config/queueref).
     * UpdateQueue cannot be used to change `state`.
     */
    state?: string;
  }
  /**
   * Rate limits.  This message determines the maximum rate that tasks can be
   * dispatched by a queue, regardless of whether the dispatch is a first task
   * attempt or a retry.  Note: The debugging command, RunTask, will run a task
   * even if the queue has reached its RateLimits.
   */
  export interface Schema$RateLimits {
    /**
     * Output only. The max burst size.  Max burst size limits how fast tasks in
     * queue are processed when many tasks are in the queue and the rate is
     * high. This field allows the queue to have a high rate so processing
     * starts shortly after a task is enqueued, but still limits resource usage
     * when many tasks are enqueued in a short period of time.  The [token
     * bucket](https://wikipedia.org/wiki/Token_Bucket) algorithm is used to
     * control the rate of task dispatches. Each queue has a token bucket that
     * holds tokens, up to the maximum specified by `max_burst_size`. Each time
     * a task is dispatched, a token is removed from the bucket. Tasks will be
     * dispatched until the queue&#39;s bucket runs out of tokens. The bucket
     * will be continuously refilled with new tokens based on
     * max_dispatches_per_second.  Cloud Tasks will pick the value of
     * `max_burst_size` based on the value of max_dispatches_per_second.  For
     * App Engine queues that were created or updated using `queue.yaml/xml`,
     * `max_burst_size` is equal to
     * [bucket_size](https://cloud.google.com/appengine/docs/standard/python/config/queueref#bucket_size).
     * Since `max_burst_size` is output only, if UpdateQueue is called on a
     * queue created by `queue.yaml/xml`, `max_burst_size` will be reset based
     * on the value of max_dispatches_per_second, regardless of whether
     * max_dispatches_per_second is updated.
     */
    maxBurstSize?: number;
    /**
     * The maximum number of concurrent tasks that Cloud Tasks allows to be
     * dispatched for this queue. After this threshold has been reached, Cloud
     * Tasks stops dispatching tasks until the number of concurrent requests
     * decreases.  If unspecified when the queue is created, Cloud Tasks will
     * pick the default.   The maximum allowed value is 5,000.   This field has
     * the same meaning as [max_concurrent_requests in
     * queue.yaml/xml](https://cloud.google.com/appengine/docs/standard/python/config/queueref#max_concurrent_requests).
     */
    maxConcurrentDispatches?: number;
    /**
     * The maximum rate at which tasks are dispatched from this queue.  If
     * unspecified when the queue is created, Cloud Tasks will pick the default.
     * * For App Engine queues, the maximum allowed value   is 500.   This field
     * has the same meaning as [rate in
     * queue.yaml/xml](https://cloud.google.com/appengine/docs/standard/python/config/queueref#rate).
     */
    maxDispatchesPerSecond?: number;
  }
  /**
   * Request message for ResumeQueue.
   */
  export interface Schema$ResumeQueueRequest {}
  /**
   * Retry config.  These settings determine when a failed task attempt is
   * retried.
   */
  export interface Schema$RetryConfig {
    /**
     * Number of attempts per task.  Cloud Tasks will attempt the task
     * `max_attempts` times (that is, if the first attempt fails, then there
     * will be `max_attempts - 1` retries). Must be &gt;= -1.  If unspecified
     * when the queue is created, Cloud Tasks will pick the default.  -1
     * indicates unlimited attempts.  This field has the same meaning as
     * [task_retry_limit in
     * queue.yaml/xml](https://cloud.google.com/appengine/docs/standard/python/config/queueref#retry_parameters).
     */
    maxAttempts?: number;
    /**
     * A task will be scheduled for retry between min_backoff and max_backoff
     * duration after it fails, if the queue&#39;s RetryConfig specifies that
     * the task should be retried.  If unspecified when the queue is created,
     * Cloud Tasks will pick the default.   `max_backoff` will be truncated to
     * the nearest second.  This field has the same meaning as
     * [max_backoff_seconds in
     * queue.yaml/xml](https://cloud.google.com/appengine/docs/standard/python/config/queueref#retry_parameters).
     */
    maxBackoff?: string;
    /**
     * The time between retries will double `max_doublings` times.  A task&#39;s
     * retry interval starts at min_backoff, then doubles `max_doublings` times,
     * then increases linearly, and finally retries retries at intervals of
     * max_backoff up to max_attempts times.  For example, if min_backoff is
     * 10s, max_backoff is 300s, and `max_doublings` is 3, then the a task will
     * first be retried in 10s. The retry interval will double three times, and
     * then increase linearly by 2^3 * 10s.  Finally, the task will retry at
     * intervals of max_backoff until the task has been attempted max_attempts
     * times. Thus, the requests will retry at 10s, 20s, 40s, 80s, 160s, 240s,
     * 300s, 300s, ....  If unspecified when the queue is created, Cloud Tasks
     * will pick the default.   This field has the same meaning as
     * [max_doublings in
     * queue.yaml/xml](https://cloud.google.com/appengine/docs/standard/python/config/queueref#retry_parameters).
     */
    maxDoublings?: number;
    /**
     * If positive, `max_retry_duration` specifies the time limit for retrying a
     * failed task, measured from when the task was first attempted. Once
     * `max_retry_duration` time has passed *and* the task has been attempted
     * max_attempts times, no further attempts will be made and the task will be
     * deleted.  If zero, then the task age is unlimited.  If unspecified when
     * the queue is created, Cloud Tasks will pick the default.
     * `max_retry_duration` will be truncated to the nearest second.  This field
     * has the same meaning as [task_age_limit in
     * queue.yaml/xml](https://cloud.google.com/appengine/docs/standard/python/config/queueref#retry_parameters).
     */
    maxRetryDuration?: string;
    /**
     * A task will be scheduled for retry between min_backoff and max_backoff
     * duration after it fails, if the queue&#39;s RetryConfig specifies that
     * the task should be retried.  If unspecified when the queue is created,
     * Cloud Tasks will pick the default.   `min_backoff` will be truncated to
     * the nearest second.  This field has the same meaning as
     * [min_backoff_seconds in
     * queue.yaml/xml](https://cloud.google.com/appengine/docs/standard/python/config/queueref#retry_parameters).
     */
    minBackoff?: string;
  }
  /**
   * Request message for forcing a task to run now using RunTask.
   */
  export interface Schema$RunTaskRequest {
    /**
     * The response_view specifies which subset of the Task will be returned. By
     * default response_view is BASIC; not all information is retrieved by
     * default because some data, such as payloads, might be desirable to return
     * only when needed because of its large size or because of the sensitivity
     * of data that it contains.  Authorization for FULL requires
     * `cloudtasks.tasks.fullView` [Google IAM](https://cloud.google.com/iam/)
     * permission on the Task resource.
     */
    responseView?: string;
  }
  /**
   * Request message for `SetIamPolicy` method.
   */
  export interface Schema$SetIamPolicyRequest {
    /**
     * REQUIRED: The complete policy to be applied to the `resource`. The size
     * of the policy is limited to a few 10s of KB. An empty policy is a valid
     * policy but certain Cloud Platform services (such as Projects) might
     * reject them.
     */
    policy?: Schema$Policy;
  }
  /**
   * The `Status` type defines a logical error model that is suitable for
   * different programming environments, including REST APIs and RPC APIs. It is
   * used by [gRPC](https://github.com/grpc). The error model is designed to be:
   * - Simple to use and understand for most users - Flexible enough to meet
   * unexpected needs  # Overview  The `Status` message contains three pieces of
   * data: error code, error message, and error details. The error code should
   * be an enum value of google.rpc.Code, but it may accept additional error
   * codes if needed.  The error message should be a developer-facing English
   * message that helps developers *understand* and *resolve* the error. If a
   * localized user-facing error message is needed, put the localized message in
   * the error details or localize it in the client. The optional error details
   * may contain arbitrary information about the error. There is a predefined
   * set of error detail types in the package `google.rpc` that can be used for
   * common error conditions.  # Language mapping  The `Status` message is the
   * logical representation of the error model, but it is not necessarily the
   * actual wire format. When the `Status` message is exposed in different
   * client libraries and different wire protocols, it can be mapped
   * differently. For example, it will likely be mapped to some exceptions in
   * Java, but more likely mapped to some error codes in C.  # Other uses  The
   * error model and the `Status` message can be used in a variety of
   * environments, either with or without APIs, to provide a consistent
   * developer experience across different environments.  Example uses of this
   * error model include:  - Partial errors. If a service needs to return
   * partial errors to the client,     it may embed the `Status` in the normal
   * response to indicate the partial     errors.  - Workflow errors. A typical
   * workflow has multiple steps. Each step may     have a `Status` message for
   * error reporting.  - Batch operations. If a client uses batch request and
   * batch response, the     `Status` message should be used directly inside
   * batch response, one for     each error sub-response.  - Asynchronous
   * operations. If an API call embeds asynchronous operation     results in its
   * response, the status of those operations should be     represented directly
   * using the `Status` message.  - Logging. If some API errors are stored in
   * logs, the message `Status` could     be used directly after any stripping
   * needed for security/privacy reasons.
   */
  export interface Schema$Status {
    /**
     * The status code, which should be an enum value of google.rpc.Code.
     */
    code?: number;
    /**
     * A list of messages that carry the error details.  There is a common set
     * of message types for APIs to use.
     */
    details?: Array<{[key: string]: any;}>;
    /**
     * A developer-facing error message, which should be in English. Any
     * user-facing error message should be localized and sent in the
     * google.rpc.Status.details field, or localized by the client.
     */
    message?: string;
  }
  /**
   * A unit of scheduled work.
   */
  export interface Schema$Task {
    /**
     * App Engine HTTP request that is sent to the task&#39;s target. Can be set
     * only if app_engine_http_queue is set on the queue.  An App Engine task is
     * a task that has AppEngineHttpRequest set.
     */
    appEngineHttpRequest?: Schema$AppEngineHttpRequest;
    /**
     * Output only. The time that the task was created.  `create_time` will be
     * truncated to the nearest second.
     */
    createTime?: string;
    /**
     * Output only. The number of attempts dispatched.  This count includes
     * tasks which have been dispatched but haven&#39;t received a response.
     */
    dispatchCount?: number;
    /**
     * Output only. The status of the task&#39;s first attempt.  Only
     * dispatch_time will be set. The other Attempt information is not retained
     * by Cloud Tasks.
     */
    firstAttempt?: Schema$Attempt;
    /**
     * Output only. The status of the task&#39;s last attempt.
     */
    lastAttempt?: Schema$Attempt;
    /**
     * Optionally caller-specified in CreateTask.  The task name.  The task name
     * must have the following format:
     * `projects/PROJECT_ID/locations/LOCATION_ID/queues/QUEUE_ID/tasks/TASK_ID`
     * * `PROJECT_ID` can contain letters ([A-Za-z]), numbers ([0-9]), hyphens
     * (-), colons (:), or periods (.).    For more information, see
     * [Identifying
     * projects](https://cloud.google.com/resource-manager/docs/creating-managing-projects#identifying_projects)
     * * `LOCATION_ID` is the canonical ID for the task&#39;s location.    The
     * list of available locations can be obtained by calling    ListLocations.
     * For more information, see https://cloud.google.com/about/locations/. *
     * `QUEUE_ID` can contain letters ([A-Za-z]), numbers ([0-9]), or   hyphens
     * (-). The maximum length is 100 characters. * `TASK_ID` can contain only
     * letters ([A-Za-z]), numbers ([0-9]),   hyphens (-), or underscores (_).
     * The maximum length is 500 characters.
     */
    name?: string;
    /**
     * Output only. The number of attempts which have received a response.
     */
    responseCount?: number;
    /**
     * The time when the task is scheduled to be attempted.  For App Engine
     * queues, this is when the task will be attempted or retried.
     * `schedule_time` will be truncated to the nearest microsecond.
     */
    scheduleTime?: string;
    /**
     * Output only. The view specifies which subset of the Task has been
     * returned.
     */
    view?: string;
  }
  /**
   * Request message for `TestIamPermissions` method.
   */
  export interface Schema$TestIamPermissionsRequest {
    /**
     * The set of permissions to check for the `resource`. Permissions with
     * wildcards (such as &#39;*&#39; or &#39;storage.*&#39;) are not allowed.
     * For more information see [IAM
     * Overview](https://cloud.google.com/iam/docs/overview#permissions).
     */
    permissions?: string[];
  }
  /**
   * Response message for `TestIamPermissions` method.
   */
  export interface Schema$TestIamPermissionsResponse {
    /**
     * A subset of `TestPermissionsRequest.permissions` that the caller is
     * allowed.
     */
    permissions?: string[];
  }


  export class Resource$Projects {
    root: Cloudtasks;
    locations: Resource$Projects$Locations;
    constructor(root: Cloudtasks) {
      this.root = root;
      this.getRoot.bind(this);
      this.locations = new Resource$Projects$Locations(root);
    }

    getRoot() {
      return this.root;
    }
  }


  export class Resource$Projects$Locations {
    root: Cloudtasks;
    queues: Resource$Projects$Locations$Queues;
    constructor(root: Cloudtasks) {
      this.root = root;
      this.getRoot.bind(this);
      this.queues = new Resource$Projects$Locations$Queues(root);
    }

    getRoot() {
      return this.root;
    }


    /**
     * cloudtasks.projects.locations.get
     * @desc Gets information about a location.
     * @alias cloudtasks.projects.locations.get
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.name Resource name for the location.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    get(params?: Params$Resource$Projects$Locations$Get,
        options?: MethodOptions): AxiosPromise<Schema$Location>;
    get(params: Params$Resource$Projects$Locations$Get,
        options: MethodOptions|BodyResponseCallback<Schema$Location>,
        callback: BodyResponseCallback<Schema$Location>): void;
    get(params: Params$Resource$Projects$Locations$Get,
        callback: BodyResponseCallback<Schema$Location>): void;
    get(callback: BodyResponseCallback<Schema$Location>): void;
    get(paramsOrCallback?: Params$Resource$Projects$Locations$Get|
        BodyResponseCallback<Schema$Location>,
        optionsOrCallback?: MethodOptions|BodyResponseCallback<Schema$Location>,
        callback?: BodyResponseCallback<Schema$Location>):
        void|AxiosPromise<Schema$Location> {
      let params =
          (paramsOrCallback || {}) as Params$Resource$Projects$Locations$Get;
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

      const rootUrl = options.rootUrl || 'https://cloudtasks.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl + '/v2beta3/{+name}').replace(/([^:]\/)\/+/g, '$1'),
              method: 'GET'
            },
            options),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<Schema$Location>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Location>(parameters);
      }
    }


    /**
     * cloudtasks.projects.locations.list
     * @desc Lists information about the supported locations for this service.
     * @alias cloudtasks.projects.locations.list
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string=} params.filter The standard list filter.
     * @param {string} params.name The resource that owns the locations collection, if applicable.
     * @param {integer=} params.pageSize The standard list page size.
     * @param {string=} params.pageToken The standard list page token.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list(
        params?: Params$Resource$Projects$Locations$List,
        options?: MethodOptions): AxiosPromise<Schema$ListLocationsResponse>;
    list(
        params: Params$Resource$Projects$Locations$List,
        options: MethodOptions|
        BodyResponseCallback<Schema$ListLocationsResponse>,
        callback: BodyResponseCallback<Schema$ListLocationsResponse>): void;
    list(
        params: Params$Resource$Projects$Locations$List,
        callback: BodyResponseCallback<Schema$ListLocationsResponse>): void;
    list(callback: BodyResponseCallback<Schema$ListLocationsResponse>): void;
    list(
        paramsOrCallback?: Params$Resource$Projects$Locations$List|
        BodyResponseCallback<Schema$ListLocationsResponse>,
        optionsOrCallback?: MethodOptions|
        BodyResponseCallback<Schema$ListLocationsResponse>,
        callback?: BodyResponseCallback<Schema$ListLocationsResponse>):
        void|AxiosPromise<Schema$ListLocationsResponse> {
      let params =
          (paramsOrCallback || {}) as Params$Resource$Projects$Locations$List;
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

      const rootUrl = options.rootUrl || 'https://cloudtasks.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl + '/v2beta3/{+name}/locations')
                       .replace(/([^:]\/)\/+/g, '$1'),
              method: 'GET'
            },
            options),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<Schema$ListLocationsResponse>(parameters, callback);
      } else {
        return createAPIRequest<Schema$ListLocationsResponse>(parameters);
      }
    }
  }

  export interface Params$Resource$Projects$Locations$Get extends
      StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * Resource name for the location.
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Locations$List extends
      StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * The standard list filter.
     */
    filter?: string;
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

  export class Resource$Projects$Locations$Queues {
    root: Cloudtasks;
    tasks: Resource$Projects$Locations$Queues$Tasks;
    constructor(root: Cloudtasks) {
      this.root = root;
      this.getRoot.bind(this);
      this.tasks = new Resource$Projects$Locations$Queues$Tasks(root);
    }

    getRoot() {
      return this.root;
    }


    /**
     * cloudtasks.projects.locations.queues.create
     * @desc Creates a queue.  Queues created with this method allow tasks to
     * live for a maximum of 31 days. After a task is 31 days old, the task will
     * be deleted regardless of whether it was dispatched or not.  WARNING:
     * Using this method may have unintended side effects if you are using an
     * App Engine `queue.yaml` or `queue.xml` file to manage your queues. Read
     * [Overview of Queue Management and
     * queue.yaml](https://cloud.google.com/tasks/docs/queue-yaml) before using
     * this method.
     * @alias cloudtasks.projects.locations.queues.create
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.parent Required.  The location name in which the queue will be created. For example: `projects/PROJECT_ID/locations/LOCATION_ID`  The list of allowed locations can be obtained by calling Cloud Tasks' implementation of ListLocations.
     * @param {().Queue} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    create(
        params?: Params$Resource$Projects$Locations$Queues$Create,
        options?: MethodOptions): AxiosPromise<Schema$Queue>;
    create(
        params: Params$Resource$Projects$Locations$Queues$Create,
        options: MethodOptions|BodyResponseCallback<Schema$Queue>,
        callback: BodyResponseCallback<Schema$Queue>): void;
    create(
        params: Params$Resource$Projects$Locations$Queues$Create,
        callback: BodyResponseCallback<Schema$Queue>): void;
    create(callback: BodyResponseCallback<Schema$Queue>): void;
    create(
        paramsOrCallback?: Params$Resource$Projects$Locations$Queues$Create|
        BodyResponseCallback<Schema$Queue>,
        optionsOrCallback?: MethodOptions|BodyResponseCallback<Schema$Queue>,
        callback?: BodyResponseCallback<Schema$Queue>):
        void|AxiosPromise<Schema$Queue> {
      let params = (paramsOrCallback || {}) as
          Params$Resource$Projects$Locations$Queues$Create;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Queues$Create;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://cloudtasks.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl + '/v2beta3/{+parent}/queues')
                       .replace(/([^:]\/)\/+/g, '$1'),
              method: 'POST'
            },
            options),
        params,
        requiredParams: ['parent'],
        pathParams: ['parent'],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<Schema$Queue>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Queue>(parameters);
      }
    }


    /**
     * cloudtasks.projects.locations.queues.delete
     * @desc Deletes a queue.  This command will delete the queue even if it has
     * tasks in it.  Note: If you delete a queue, a queue with the same name
     * can't be created for 7 days.  WARNING: Using this method may have
     * unintended side effects if you are using an App Engine `queue.yaml` or
     * `queue.xml` file to manage your queues. Read [Overview of Queue
     * Management and
     * queue.yaml](https://cloud.google.com/tasks/docs/queue-yaml) before using
     * this method.
     * @alias cloudtasks.projects.locations.queues.delete
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.name Required.  The queue name. For example: `projects/PROJECT_ID/locations/LOCATION_ID/queues/QUEUE_ID`
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    delete(
        params?: Params$Resource$Projects$Locations$Queues$Delete,
        options?: MethodOptions): AxiosPromise<Schema$Empty>;
    delete(
        params: Params$Resource$Projects$Locations$Queues$Delete,
        options: MethodOptions|BodyResponseCallback<Schema$Empty>,
        callback: BodyResponseCallback<Schema$Empty>): void;
    delete(
        params: Params$Resource$Projects$Locations$Queues$Delete,
        callback: BodyResponseCallback<Schema$Empty>): void;
    delete(callback: BodyResponseCallback<Schema$Empty>): void;
    delete(
        paramsOrCallback?: Params$Resource$Projects$Locations$Queues$Delete|
        BodyResponseCallback<Schema$Empty>,
        optionsOrCallback?: MethodOptions|BodyResponseCallback<Schema$Empty>,
        callback?: BodyResponseCallback<Schema$Empty>):
        void|AxiosPromise<Schema$Empty> {
      let params = (paramsOrCallback || {}) as
          Params$Resource$Projects$Locations$Queues$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Queues$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://cloudtasks.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl + '/v2beta3/{+name}').replace(/([^:]\/)\/+/g, '$1'),
              method: 'DELETE'
            },
            options),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<Schema$Empty>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Empty>(parameters);
      }
    }


    /**
     * cloudtasks.projects.locations.queues.get
     * @desc Gets a queue.
     * @alias cloudtasks.projects.locations.queues.get
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.name Required.  The resource name of the queue. For example: `projects/PROJECT_ID/locations/LOCATION_ID/queues/QUEUE_ID`
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    get(params?: Params$Resource$Projects$Locations$Queues$Get,
        options?: MethodOptions): AxiosPromise<Schema$Queue>;
    get(params: Params$Resource$Projects$Locations$Queues$Get,
        options: MethodOptions|BodyResponseCallback<Schema$Queue>,
        callback: BodyResponseCallback<Schema$Queue>): void;
    get(params: Params$Resource$Projects$Locations$Queues$Get,
        callback: BodyResponseCallback<Schema$Queue>): void;
    get(callback: BodyResponseCallback<Schema$Queue>): void;
    get(paramsOrCallback?: Params$Resource$Projects$Locations$Queues$Get|
        BodyResponseCallback<Schema$Queue>,
        optionsOrCallback?: MethodOptions|BodyResponseCallback<Schema$Queue>,
        callback?: BodyResponseCallback<Schema$Queue>):
        void|AxiosPromise<Schema$Queue> {
      let params = (paramsOrCallback || {}) as
          Params$Resource$Projects$Locations$Queues$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Queues$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://cloudtasks.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl + '/v2beta3/{+name}').replace(/([^:]\/)\/+/g, '$1'),
              method: 'GET'
            },
            options),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<Schema$Queue>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Queue>(parameters);
      }
    }


    /**
     * cloudtasks.projects.locations.queues.getIamPolicy
     * @desc Gets the access control policy for a Queue. Returns an empty policy
     * if the resource exists and does not have a policy set.  Authorization
     * requires the following [Google IAM](https://cloud.google.com/iam)
     * permission on the specified resource parent:  *
     * `cloudtasks.queues.getIamPolicy`
     * @alias cloudtasks.projects.locations.queues.getIamPolicy
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.resource_ REQUIRED: The resource for which the policy is being requested. See the operation documentation for the appropriate value for this field.
     * @param {().GetIamPolicyRequest} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    getIamPolicy(
        params?: Params$Resource$Projects$Locations$Queues$Getiampolicy,
        options?: MethodOptions): AxiosPromise<Schema$Policy>;
    getIamPolicy(
        params: Params$Resource$Projects$Locations$Queues$Getiampolicy,
        options: MethodOptions|BodyResponseCallback<Schema$Policy>,
        callback: BodyResponseCallback<Schema$Policy>): void;
    getIamPolicy(
        params: Params$Resource$Projects$Locations$Queues$Getiampolicy,
        callback: BodyResponseCallback<Schema$Policy>): void;
    getIamPolicy(callback: BodyResponseCallback<Schema$Policy>): void;
    getIamPolicy(
        paramsOrCallback?:
            Params$Resource$Projects$Locations$Queues$Getiampolicy|
        BodyResponseCallback<Schema$Policy>,
        optionsOrCallback?: MethodOptions|BodyResponseCallback<Schema$Policy>,
        callback?: BodyResponseCallback<Schema$Policy>):
        void|AxiosPromise<Schema$Policy> {
      let params = (paramsOrCallback || {}) as
          Params$Resource$Projects$Locations$Queues$Getiampolicy;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Queues$Getiampolicy;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://cloudtasks.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl + '/v2beta3/{+resource}:getIamPolicy')
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
     * cloudtasks.projects.locations.queues.list
     * @desc Lists queues.  Queues are returned in lexicographical order.
     * @alias cloudtasks.projects.locations.queues.list
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string=} params.filter `filter` can be used to specify a subset of queues. Any Queue field can be used as a filter and several operators as supported. For example: `<=, <, >=, >, !=, =, :`. The filter syntax is the same as described in [Stackdriver's Advanced Logs Filters](https://cloud.google.com/logging/docs/view/advanced_filters).  Sample filter "state: PAUSED".  Note that using filters might cause fewer queues than the requested page_size to be returned.
     * @param {integer=} params.pageSize Requested page size.  The maximum page size is 9800. If unspecified, the page size will be the maximum. Fewer queues than requested might be returned, even if more queues exist; use the next_page_token in the response to determine if more queues exist.
     * @param {string=} params.pageToken A token identifying the page of results to return.  To request the first page results, page_token must be empty. To request the next page of results, page_token must be the value of next_page_token returned from the previous call to ListQueues method. It is an error to switch the value of the filter while iterating through pages.
     * @param {string} params.parent Required.  The location name. For example: `projects/PROJECT_ID/locations/LOCATION_ID`
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list(
        params?: Params$Resource$Projects$Locations$Queues$List,
        options?: MethodOptions): AxiosPromise<Schema$ListQueuesResponse>;
    list(
        params: Params$Resource$Projects$Locations$Queues$List,
        options: MethodOptions|BodyResponseCallback<Schema$ListQueuesResponse>,
        callback: BodyResponseCallback<Schema$ListQueuesResponse>): void;
    list(
        params: Params$Resource$Projects$Locations$Queues$List,
        callback: BodyResponseCallback<Schema$ListQueuesResponse>): void;
    list(callback: BodyResponseCallback<Schema$ListQueuesResponse>): void;
    list(
        paramsOrCallback?: Params$Resource$Projects$Locations$Queues$List|
        BodyResponseCallback<Schema$ListQueuesResponse>,
        optionsOrCallback?: MethodOptions|
        BodyResponseCallback<Schema$ListQueuesResponse>,
        callback?: BodyResponseCallback<Schema$ListQueuesResponse>):
        void|AxiosPromise<Schema$ListQueuesResponse> {
      let params = (paramsOrCallback || {}) as
          Params$Resource$Projects$Locations$Queues$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Queues$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://cloudtasks.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl + '/v2beta3/{+parent}/queues')
                       .replace(/([^:]\/)\/+/g, '$1'),
              method: 'GET'
            },
            options),
        params,
        requiredParams: ['parent'],
        pathParams: ['parent'],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<Schema$ListQueuesResponse>(parameters, callback);
      } else {
        return createAPIRequest<Schema$ListQueuesResponse>(parameters);
      }
    }


    /**
     * cloudtasks.projects.locations.queues.patch
     * @desc Updates a queue.  This method creates the queue if it does not
     * exist and updates the queue if it does exist.  Queues created with this
     * method allow tasks to live for a maximum of 31 days. After a task is 31
     * days old, the task will be deleted regardless of whether it was
     * dispatched or not.  WARNING: Using this method may have unintended side
     * effects if you are using an App Engine `queue.yaml` or `queue.xml` file
     * to manage your queues. Read [Overview of Queue Management and
     * queue.yaml](https://cloud.google.com/tasks/docs/queue-yaml) before using
     * this method.
     * @alias cloudtasks.projects.locations.queues.patch
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.name Caller-specified and required in CreateQueue, after which it becomes output only.  The queue name.  The queue name must have the following format: `projects/PROJECT_ID/locations/LOCATION_ID/queues/QUEUE_ID`  * `PROJECT_ID` can contain letters ([A-Za-z]), numbers ([0-9]),    hyphens (-), colons (:), or periods (.).    For more information, see    [Identifying projects](https://cloud.google.com/resource-manager/docs/creating-managing-projects#identifying_projects) * `LOCATION_ID` is the canonical ID for the queue's location.    The list of available locations can be obtained by calling    ListLocations.    For more information, see https://cloud.google.com/about/locations/. * `QUEUE_ID` can contain letters ([A-Za-z]), numbers ([0-9]), or   hyphens (-). The maximum length is 100 characters.
     * @param {string=} params.updateMask A mask used to specify which fields of the queue are being updated.  If empty, then all fields will be updated.
     * @param {().Queue} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    patch(
        params?: Params$Resource$Projects$Locations$Queues$Patch,
        options?: MethodOptions): AxiosPromise<Schema$Queue>;
    patch(
        params: Params$Resource$Projects$Locations$Queues$Patch,
        options: MethodOptions|BodyResponseCallback<Schema$Queue>,
        callback: BodyResponseCallback<Schema$Queue>): void;
    patch(
        params: Params$Resource$Projects$Locations$Queues$Patch,
        callback: BodyResponseCallback<Schema$Queue>): void;
    patch(callback: BodyResponseCallback<Schema$Queue>): void;
    patch(
        paramsOrCallback?: Params$Resource$Projects$Locations$Queues$Patch|
        BodyResponseCallback<Schema$Queue>,
        optionsOrCallback?: MethodOptions|BodyResponseCallback<Schema$Queue>,
        callback?: BodyResponseCallback<Schema$Queue>):
        void|AxiosPromise<Schema$Queue> {
      let params = (paramsOrCallback || {}) as
          Params$Resource$Projects$Locations$Queues$Patch;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Queues$Patch;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://cloudtasks.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl + '/v2beta3/{+name}').replace(/([^:]\/)\/+/g, '$1'),
              method: 'PATCH'
            },
            options),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<Schema$Queue>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Queue>(parameters);
      }
    }


    /**
     * cloudtasks.projects.locations.queues.pause
     * @desc Pauses the queue.  If a queue is paused then the system will stop
     * dispatching tasks until the queue is resumed via ResumeQueue. Tasks can
     * still be added when the queue is paused. A queue is paused if its state
     * is PAUSED.
     * @alias cloudtasks.projects.locations.queues.pause
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.name Required.  The queue name. For example: `projects/PROJECT_ID/location/LOCATION_ID/queues/QUEUE_ID`
     * @param {().PauseQueueRequest} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    pause(
        params?: Params$Resource$Projects$Locations$Queues$Pause,
        options?: MethodOptions): AxiosPromise<Schema$Queue>;
    pause(
        params: Params$Resource$Projects$Locations$Queues$Pause,
        options: MethodOptions|BodyResponseCallback<Schema$Queue>,
        callback: BodyResponseCallback<Schema$Queue>): void;
    pause(
        params: Params$Resource$Projects$Locations$Queues$Pause,
        callback: BodyResponseCallback<Schema$Queue>): void;
    pause(callback: BodyResponseCallback<Schema$Queue>): void;
    pause(
        paramsOrCallback?: Params$Resource$Projects$Locations$Queues$Pause|
        BodyResponseCallback<Schema$Queue>,
        optionsOrCallback?: MethodOptions|BodyResponseCallback<Schema$Queue>,
        callback?: BodyResponseCallback<Schema$Queue>):
        void|AxiosPromise<Schema$Queue> {
      let params = (paramsOrCallback || {}) as
          Params$Resource$Projects$Locations$Queues$Pause;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Queues$Pause;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://cloudtasks.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl + '/v2beta3/{+name}:pause')
                       .replace(/([^:]\/)\/+/g, '$1'),
              method: 'POST'
            },
            options),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<Schema$Queue>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Queue>(parameters);
      }
    }


    /**
     * cloudtasks.projects.locations.queues.purge
     * @desc Purges a queue by deleting all of its tasks.  All tasks created
     * before this method is called are permanently deleted.  Purge operations
     * can take up to one minute to take effect. Tasks might be dispatched
     * before the purge takes effect. A purge is irreversible.
     * @alias cloudtasks.projects.locations.queues.purge
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.name Required.  The queue name. For example: `projects/PROJECT_ID/location/LOCATION_ID/queues/QUEUE_ID`
     * @param {().PurgeQueueRequest} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    purge(
        params?: Params$Resource$Projects$Locations$Queues$Purge,
        options?: MethodOptions): AxiosPromise<Schema$Queue>;
    purge(
        params: Params$Resource$Projects$Locations$Queues$Purge,
        options: MethodOptions|BodyResponseCallback<Schema$Queue>,
        callback: BodyResponseCallback<Schema$Queue>): void;
    purge(
        params: Params$Resource$Projects$Locations$Queues$Purge,
        callback: BodyResponseCallback<Schema$Queue>): void;
    purge(callback: BodyResponseCallback<Schema$Queue>): void;
    purge(
        paramsOrCallback?: Params$Resource$Projects$Locations$Queues$Purge|
        BodyResponseCallback<Schema$Queue>,
        optionsOrCallback?: MethodOptions|BodyResponseCallback<Schema$Queue>,
        callback?: BodyResponseCallback<Schema$Queue>):
        void|AxiosPromise<Schema$Queue> {
      let params = (paramsOrCallback || {}) as
          Params$Resource$Projects$Locations$Queues$Purge;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Queues$Purge;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://cloudtasks.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl + '/v2beta3/{+name}:purge')
                       .replace(/([^:]\/)\/+/g, '$1'),
              method: 'POST'
            },
            options),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<Schema$Queue>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Queue>(parameters);
      }
    }


    /**
     * cloudtasks.projects.locations.queues.resume
     * @desc Resume a queue.  This method resumes a queue after it has been
     * PAUSED or DISABLED. The state of a queue is stored in the queue's state;
     * after calling this method it will be set to RUNNING.  WARNING: Resuming
     * many high-QPS queues at the same time can lead to target overloading. If
     * you are resuming high-QPS queues, follow the 500/50/5 pattern described
     * in [Managing Cloud Tasks Scaling
     * Risks](https://cloud.google.com/tasks/docs/manage-cloud-task-scaling).
     * @alias cloudtasks.projects.locations.queues.resume
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.name Required.  The queue name. For example: `projects/PROJECT_ID/location/LOCATION_ID/queues/QUEUE_ID`
     * @param {().ResumeQueueRequest} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    resume(
        params?: Params$Resource$Projects$Locations$Queues$Resume,
        options?: MethodOptions): AxiosPromise<Schema$Queue>;
    resume(
        params: Params$Resource$Projects$Locations$Queues$Resume,
        options: MethodOptions|BodyResponseCallback<Schema$Queue>,
        callback: BodyResponseCallback<Schema$Queue>): void;
    resume(
        params: Params$Resource$Projects$Locations$Queues$Resume,
        callback: BodyResponseCallback<Schema$Queue>): void;
    resume(callback: BodyResponseCallback<Schema$Queue>): void;
    resume(
        paramsOrCallback?: Params$Resource$Projects$Locations$Queues$Resume|
        BodyResponseCallback<Schema$Queue>,
        optionsOrCallback?: MethodOptions|BodyResponseCallback<Schema$Queue>,
        callback?: BodyResponseCallback<Schema$Queue>):
        void|AxiosPromise<Schema$Queue> {
      let params = (paramsOrCallback || {}) as
          Params$Resource$Projects$Locations$Queues$Resume;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Queues$Resume;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://cloudtasks.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl + '/v2beta3/{+name}:resume')
                       .replace(/([^:]\/)\/+/g, '$1'),
              method: 'POST'
            },
            options),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<Schema$Queue>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Queue>(parameters);
      }
    }


    /**
     * cloudtasks.projects.locations.queues.setIamPolicy
     * @desc Sets the access control policy for a Queue. Replaces any existing
     * policy.  Note: The Cloud Console does not check queue-level IAM
     * permissions yet. Project-level permissions are required to use the Cloud
     * Console.  Authorization requires the following [Google
     * IAM](https://cloud.google.com/iam) permission on the specified resource
     * parent:  * `cloudtasks.queues.setIamPolicy`
     * @alias cloudtasks.projects.locations.queues.setIamPolicy
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
        params?: Params$Resource$Projects$Locations$Queues$Setiampolicy,
        options?: MethodOptions): AxiosPromise<Schema$Policy>;
    setIamPolicy(
        params: Params$Resource$Projects$Locations$Queues$Setiampolicy,
        options: MethodOptions|BodyResponseCallback<Schema$Policy>,
        callback: BodyResponseCallback<Schema$Policy>): void;
    setIamPolicy(
        params: Params$Resource$Projects$Locations$Queues$Setiampolicy,
        callback: BodyResponseCallback<Schema$Policy>): void;
    setIamPolicy(callback: BodyResponseCallback<Schema$Policy>): void;
    setIamPolicy(
        paramsOrCallback?:
            Params$Resource$Projects$Locations$Queues$Setiampolicy|
        BodyResponseCallback<Schema$Policy>,
        optionsOrCallback?: MethodOptions|BodyResponseCallback<Schema$Policy>,
        callback?: BodyResponseCallback<Schema$Policy>):
        void|AxiosPromise<Schema$Policy> {
      let params = (paramsOrCallback || {}) as
          Params$Resource$Projects$Locations$Queues$Setiampolicy;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Queues$Setiampolicy;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://cloudtasks.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl + '/v2beta3/{+resource}:setIamPolicy')
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
     * cloudtasks.projects.locations.queues.testIamPermissions
     * @desc Returns permissions that a caller has on a Queue. If the resource
     * does not exist, this will return an empty set of permissions, not a
     * NOT_FOUND error.  Note: This operation is designed to be used for
     * building permission-aware UIs and command-line tools, not for
     * authorization checking. This operation may "fail open" without warning.
     * @alias cloudtasks.projects.locations.queues.testIamPermissions
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
        params?: Params$Resource$Projects$Locations$Queues$Testiampermissions,
        options?: MethodOptions):
        AxiosPromise<Schema$TestIamPermissionsResponse>;
    testIamPermissions(
        params: Params$Resource$Projects$Locations$Queues$Testiampermissions,
        options: MethodOptions|
        BodyResponseCallback<Schema$TestIamPermissionsResponse>,
        callback: BodyResponseCallback<Schema$TestIamPermissionsResponse>):
        void;
    testIamPermissions(
        params: Params$Resource$Projects$Locations$Queues$Testiampermissions,
        callback: BodyResponseCallback<Schema$TestIamPermissionsResponse>):
        void;
    testIamPermissions(
        callback: BodyResponseCallback<Schema$TestIamPermissionsResponse>):
        void;
    testIamPermissions(
        paramsOrCallback?:
            Params$Resource$Projects$Locations$Queues$Testiampermissions|
        BodyResponseCallback<Schema$TestIamPermissionsResponse>,
        optionsOrCallback?: MethodOptions|
        BodyResponseCallback<Schema$TestIamPermissionsResponse>,
        callback?: BodyResponseCallback<Schema$TestIamPermissionsResponse>):
        void|AxiosPromise<Schema$TestIamPermissionsResponse> {
      let params = (paramsOrCallback || {}) as
          Params$Resource$Projects$Locations$Queues$Testiampermissions;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as
            Params$Resource$Projects$Locations$Queues$Testiampermissions;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://cloudtasks.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl + '/v2beta3/{+resource}:testIamPermissions')
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
        createAPIRequest<Schema$TestIamPermissionsResponse>(
            parameters, callback);
      } else {
        return createAPIRequest<Schema$TestIamPermissionsResponse>(parameters);
      }
    }
  }

  export interface Params$Resource$Projects$Locations$Queues$Create extends
      StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * Required.  The location name in which the queue will be created. For
     * example: `projects/PROJECT_ID/locations/LOCATION_ID`  The list of allowed
     * locations can be obtained by calling Cloud Tasks' implementation of
     * ListLocations.
     */
    parent?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$Queue;
  }
  export interface Params$Resource$Projects$Locations$Queues$Delete extends
      StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * Required.  The queue name. For example:
     * `projects/PROJECT_ID/locations/LOCATION_ID/queues/QUEUE_ID`
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Locations$Queues$Get extends
      StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * Required.  The resource name of the queue. For example:
     * `projects/PROJECT_ID/locations/LOCATION_ID/queues/QUEUE_ID`
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Locations$Queues$Getiampolicy
      extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * REQUIRED: The resource for which the policy is being requested. See the
     * operation documentation for the appropriate value for this field.
     */
    resource?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GetIamPolicyRequest;
  }
  export interface Params$Resource$Projects$Locations$Queues$List extends
      StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * `filter` can be used to specify a subset of queues. Any Queue field can
     * be used as a filter and several operators as supported. For example: `<=,
     * <, >=, >, !=, =, :`. The filter syntax is the same as described in
     * [Stackdriver's Advanced Logs
     * Filters](https://cloud.google.com/logging/docs/view/advanced_filters).
     * Sample filter "state: PAUSED".  Note that using filters might cause fewer
     * queues than the requested page_size to be returned.
     */
    filter?: string;
    /**
     * Requested page size.  The maximum page size is 9800. If unspecified, the
     * page size will be the maximum. Fewer queues than requested might be
     * returned, even if more queues exist; use the next_page_token in the
     * response to determine if more queues exist.
     */
    pageSize?: number;
    /**
     * A token identifying the page of results to return.  To request the first
     * page results, page_token must be empty. To request the next page of
     * results, page_token must be the value of next_page_token returned from
     * the previous call to ListQueues method. It is an error to switch the
     * value of the filter while iterating through pages.
     */
    pageToken?: string;
    /**
     * Required.  The location name. For example:
     * `projects/PROJECT_ID/locations/LOCATION_ID`
     */
    parent?: string;
  }
  export interface Params$Resource$Projects$Locations$Queues$Patch extends
      StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * Caller-specified and required in CreateQueue, after which it becomes
     * output only.  The queue name.  The queue name must have the following
     * format: `projects/PROJECT_ID/locations/LOCATION_ID/queues/QUEUE_ID`  *
     * `PROJECT_ID` can contain letters ([A-Za-z]), numbers ([0-9]),    hyphens
     * (-), colons (:), or periods (.).    For more information, see
     * [Identifying
     * projects](https://cloud.google.com/resource-manager/docs/creating-managing-projects#identifying_projects)
     * * `LOCATION_ID` is the canonical ID for the queue's location.    The list
     * of available locations can be obtained by calling    ListLocations. For
     * more information, see https://cloud.google.com/about/locations/. *
     * `QUEUE_ID` can contain letters ([A-Za-z]), numbers ([0-9]), or   hyphens
     * (-). The maximum length is 100 characters.
     */
    name?: string;
    /**
     * A mask used to specify which fields of the queue are being updated.  If
     * empty, then all fields will be updated.
     */
    updateMask?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$Queue;
  }
  export interface Params$Resource$Projects$Locations$Queues$Pause extends
      StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * Required.  The queue name. For example:
     * `projects/PROJECT_ID/location/LOCATION_ID/queues/QUEUE_ID`
     */
    name?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$PauseQueueRequest;
  }
  export interface Params$Resource$Projects$Locations$Queues$Purge extends
      StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * Required.  The queue name. For example:
     * `projects/PROJECT_ID/location/LOCATION_ID/queues/QUEUE_ID`
     */
    name?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$PurgeQueueRequest;
  }
  export interface Params$Resource$Projects$Locations$Queues$Resume extends
      StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * Required.  The queue name. For example:
     * `projects/PROJECT_ID/location/LOCATION_ID/queues/QUEUE_ID`
     */
    name?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$ResumeQueueRequest;
  }
  export interface Params$Resource$Projects$Locations$Queues$Setiampolicy
      extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * REQUIRED: The resource for which the policy is being specified. See the
     * operation documentation for the appropriate value for this field.
     */
    resource?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$SetIamPolicyRequest;
  }
  export interface Params$Resource$Projects$Locations$Queues$Testiampermissions
      extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * REQUIRED: The resource for which the policy detail is being requested.
     * See the operation documentation for the appropriate value for this field.
     */
    resource?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$TestIamPermissionsRequest;
  }

  export class Resource$Projects$Locations$Queues$Tasks {
    root: Cloudtasks;
    constructor(root: Cloudtasks) {
      this.root = root;
      this.getRoot.bind(this);
    }

    getRoot() {
      return this.root;
    }


    /**
     * cloudtasks.projects.locations.queues.tasks.create
     * @desc Creates a task and adds it to a queue.  Tasks cannot be updated
     * after creation; there is no UpdateTask command.  * For App Engine queues,
     * the maximum task size is   100KB.
     * @alias cloudtasks.projects.locations.queues.tasks.create
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.parent Required.  The queue name. For example: `projects/PROJECT_ID/locations/LOCATION_ID/queues/QUEUE_ID`  The queue must already exist.
     * @param {().CreateTaskRequest} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    create(
        params?: Params$Resource$Projects$Locations$Queues$Tasks$Create,
        options?: MethodOptions): AxiosPromise<Schema$Task>;
    create(
        params: Params$Resource$Projects$Locations$Queues$Tasks$Create,
        options: MethodOptions|BodyResponseCallback<Schema$Task>,
        callback: BodyResponseCallback<Schema$Task>): void;
    create(
        params: Params$Resource$Projects$Locations$Queues$Tasks$Create,
        callback: BodyResponseCallback<Schema$Task>): void;
    create(callback: BodyResponseCallback<Schema$Task>): void;
    create(
        paramsOrCallback?:
            Params$Resource$Projects$Locations$Queues$Tasks$Create|
        BodyResponseCallback<Schema$Task>,
        optionsOrCallback?: MethodOptions|BodyResponseCallback<Schema$Task>,
        callback?: BodyResponseCallback<Schema$Task>):
        void|AxiosPromise<Schema$Task> {
      let params = (paramsOrCallback || {}) as
          Params$Resource$Projects$Locations$Queues$Tasks$Create;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Queues$Tasks$Create;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://cloudtasks.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl + '/v2beta3/{+parent}/tasks')
                       .replace(/([^:]\/)\/+/g, '$1'),
              method: 'POST'
            },
            options),
        params,
        requiredParams: ['parent'],
        pathParams: ['parent'],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<Schema$Task>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Task>(parameters);
      }
    }


    /**
     * cloudtasks.projects.locations.queues.tasks.delete
     * @desc Deletes a task.  A task can be deleted if it is scheduled or
     * dispatched. A task cannot be deleted if it has executed successfully or
     * permanently failed.
     * @alias cloudtasks.projects.locations.queues.tasks.delete
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.name Required.  The task name. For example: `projects/PROJECT_ID/locations/LOCATION_ID/queues/QUEUE_ID/tasks/TASK_ID`
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    delete(
        params?: Params$Resource$Projects$Locations$Queues$Tasks$Delete,
        options?: MethodOptions): AxiosPromise<Schema$Empty>;
    delete(
        params: Params$Resource$Projects$Locations$Queues$Tasks$Delete,
        options: MethodOptions|BodyResponseCallback<Schema$Empty>,
        callback: BodyResponseCallback<Schema$Empty>): void;
    delete(
        params: Params$Resource$Projects$Locations$Queues$Tasks$Delete,
        callback: BodyResponseCallback<Schema$Empty>): void;
    delete(callback: BodyResponseCallback<Schema$Empty>): void;
    delete(
        paramsOrCallback?:
            Params$Resource$Projects$Locations$Queues$Tasks$Delete|
        BodyResponseCallback<Schema$Empty>,
        optionsOrCallback?: MethodOptions|BodyResponseCallback<Schema$Empty>,
        callback?: BodyResponseCallback<Schema$Empty>):
        void|AxiosPromise<Schema$Empty> {
      let params = (paramsOrCallback || {}) as
          Params$Resource$Projects$Locations$Queues$Tasks$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Queues$Tasks$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://cloudtasks.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl + '/v2beta3/{+name}').replace(/([^:]\/)\/+/g, '$1'),
              method: 'DELETE'
            },
            options),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<Schema$Empty>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Empty>(parameters);
      }
    }


    /**
     * cloudtasks.projects.locations.queues.tasks.get
     * @desc Gets a task.
     * @alias cloudtasks.projects.locations.queues.tasks.get
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.name Required.  The task name. For example: `projects/PROJECT_ID/locations/LOCATION_ID/queues/QUEUE_ID/tasks/TASK_ID`
     * @param {string=} params.responseView The response_view specifies which subset of the Task will be returned.  By default response_view is BASIC; not all information is retrieved by default because some data, such as payloads, might be desirable to return only when needed because of its large size or because of the sensitivity of data that it contains.  Authorization for FULL requires `cloudtasks.tasks.fullView` [Google IAM](https://cloud.google.com/iam/) permission on the Task resource.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    get(params?: Params$Resource$Projects$Locations$Queues$Tasks$Get,
        options?: MethodOptions): AxiosPromise<Schema$Task>;
    get(params: Params$Resource$Projects$Locations$Queues$Tasks$Get,
        options: MethodOptions|BodyResponseCallback<Schema$Task>,
        callback: BodyResponseCallback<Schema$Task>): void;
    get(params: Params$Resource$Projects$Locations$Queues$Tasks$Get,
        callback: BodyResponseCallback<Schema$Task>): void;
    get(callback: BodyResponseCallback<Schema$Task>): void;
    get(paramsOrCallback?: Params$Resource$Projects$Locations$Queues$Tasks$Get|
        BodyResponseCallback<Schema$Task>,
        optionsOrCallback?: MethodOptions|BodyResponseCallback<Schema$Task>,
        callback?: BodyResponseCallback<Schema$Task>):
        void|AxiosPromise<Schema$Task> {
      let params = (paramsOrCallback || {}) as
          Params$Resource$Projects$Locations$Queues$Tasks$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Queues$Tasks$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://cloudtasks.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl + '/v2beta3/{+name}').replace(/([^:]\/)\/+/g, '$1'),
              method: 'GET'
            },
            options),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<Schema$Task>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Task>(parameters);
      }
    }


    /**
     * cloudtasks.projects.locations.queues.tasks.list
     * @desc Lists the tasks in a queue.  By default, only the BASIC view is
     * retrieved due to performance considerations; response_view controls the
     * subset of information which is returned.  The tasks may be returned in
     * any order. The ordering may change at any time.
     * @alias cloudtasks.projects.locations.queues.tasks.list
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {integer=} params.pageSize Requested page size. Fewer tasks than requested might be returned.  The maximum page size is 1000. If unspecified, the page size will be the maximum. Fewer tasks than requested might be returned, even if more tasks exist; use next_page_token in the response to determine if more tasks exist.
     * @param {string=} params.pageToken A token identifying the page of results to return.  To request the first page results, page_token must be empty. To request the next page of results, page_token must be the value of next_page_token returned from the previous call to ListTasks method.  The page token is valid for only 2 hours.
     * @param {string} params.parent Required.  The queue name. For example: `projects/PROJECT_ID/locations/LOCATION_ID/queues/QUEUE_ID`
     * @param {string=} params.responseView The response_view specifies which subset of the Task will be returned.  By default response_view is BASIC; not all information is retrieved by default because some data, such as payloads, might be desirable to return only when needed because of its large size or because of the sensitivity of data that it contains.  Authorization for FULL requires `cloudtasks.tasks.fullView` [Google IAM](https://cloud.google.com/iam/) permission on the Task resource.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list(
        params?: Params$Resource$Projects$Locations$Queues$Tasks$List,
        options?: MethodOptions): AxiosPromise<Schema$ListTasksResponse>;
    list(
        params: Params$Resource$Projects$Locations$Queues$Tasks$List,
        options: MethodOptions|BodyResponseCallback<Schema$ListTasksResponse>,
        callback: BodyResponseCallback<Schema$ListTasksResponse>): void;
    list(
        params: Params$Resource$Projects$Locations$Queues$Tasks$List,
        callback: BodyResponseCallback<Schema$ListTasksResponse>): void;
    list(callback: BodyResponseCallback<Schema$ListTasksResponse>): void;
    list(
        paramsOrCallback?: Params$Resource$Projects$Locations$Queues$Tasks$List|
        BodyResponseCallback<Schema$ListTasksResponse>,
        optionsOrCallback?: MethodOptions|
        BodyResponseCallback<Schema$ListTasksResponse>,
        callback?: BodyResponseCallback<Schema$ListTasksResponse>):
        void|AxiosPromise<Schema$ListTasksResponse> {
      let params = (paramsOrCallback || {}) as
          Params$Resource$Projects$Locations$Queues$Tasks$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Queues$Tasks$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://cloudtasks.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl + '/v2beta3/{+parent}/tasks')
                       .replace(/([^:]\/)\/+/g, '$1'),
              method: 'GET'
            },
            options),
        params,
        requiredParams: ['parent'],
        pathParams: ['parent'],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<Schema$ListTasksResponse>(parameters, callback);
      } else {
        return createAPIRequest<Schema$ListTasksResponse>(parameters);
      }
    }


    /**
     * cloudtasks.projects.locations.queues.tasks.run
     * @desc Forces a task to run now.  When this method is called, Cloud Tasks
     * will dispatch the task, even if the task is already running, the queue
     * has reached its RateLimits or is PAUSED.  This command is meant to be
     * used for manual debugging. For example, RunTask can be used to retry a
     * failed task after a fix has been made or to manually force a task to be
     * dispatched now.  The dispatched task is returned. That is, the task that
     * is returned contains the status after the task is dispatched but before
     * the task is received by its target.  If Cloud Tasks receives a successful
     * response from the task's target, then the task will be deleted; otherwise
     * the task's schedule_time will be reset to the time that RunTask was
     * called plus the retry delay specified in the queue's RetryConfig. RunTask
     * returns NOT_FOUND when it is called on a task that has already succeeded
     * or permanently failed.
     * @alias cloudtasks.projects.locations.queues.tasks.run
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.name Required.  The task name. For example: `projects/PROJECT_ID/locations/LOCATION_ID/queues/QUEUE_ID/tasks/TASK_ID`
     * @param {().RunTaskRequest} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    run(params?: Params$Resource$Projects$Locations$Queues$Tasks$Run,
        options?: MethodOptions): AxiosPromise<Schema$Task>;
    run(params: Params$Resource$Projects$Locations$Queues$Tasks$Run,
        options: MethodOptions|BodyResponseCallback<Schema$Task>,
        callback: BodyResponseCallback<Schema$Task>): void;
    run(params: Params$Resource$Projects$Locations$Queues$Tasks$Run,
        callback: BodyResponseCallback<Schema$Task>): void;
    run(callback: BodyResponseCallback<Schema$Task>): void;
    run(paramsOrCallback?: Params$Resource$Projects$Locations$Queues$Tasks$Run|
        BodyResponseCallback<Schema$Task>,
        optionsOrCallback?: MethodOptions|BodyResponseCallback<Schema$Task>,
        callback?: BodyResponseCallback<Schema$Task>):
        void|AxiosPromise<Schema$Task> {
      let params = (paramsOrCallback || {}) as
          Params$Resource$Projects$Locations$Queues$Tasks$Run;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Queues$Tasks$Run;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://cloudtasks.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl + '/v2beta3/{+name}:run')
                       .replace(/([^:]\/)\/+/g, '$1'),
              method: 'POST'
            },
            options),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<Schema$Task>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Task>(parameters);
      }
    }
  }

  export interface Params$Resource$Projects$Locations$Queues$Tasks$Create
      extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * Required.  The queue name. For example:
     * `projects/PROJECT_ID/locations/LOCATION_ID/queues/QUEUE_ID`  The queue
     * must already exist.
     */
    parent?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$CreateTaskRequest;
  }
  export interface Params$Resource$Projects$Locations$Queues$Tasks$Delete
      extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * Required.  The task name. For example:
     * `projects/PROJECT_ID/locations/LOCATION_ID/queues/QUEUE_ID/tasks/TASK_ID`
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Locations$Queues$Tasks$Get extends
      StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * Required.  The task name. For example:
     * `projects/PROJECT_ID/locations/LOCATION_ID/queues/QUEUE_ID/tasks/TASK_ID`
     */
    name?: string;
    /**
     * The response_view specifies which subset of the Task will be returned. By
     * default response_view is BASIC; not all information is retrieved by
     * default because some data, such as payloads, might be desirable to return
     * only when needed because of its large size or because of the sensitivity
     * of data that it contains.  Authorization for FULL requires
     * `cloudtasks.tasks.fullView` [Google IAM](https://cloud.google.com/iam/)
     * permission on the Task resource.
     */
    responseView?: string;
  }
  export interface Params$Resource$Projects$Locations$Queues$Tasks$List extends
      StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * Requested page size. Fewer tasks than requested might be returned.  The
     * maximum page size is 1000. If unspecified, the page size will be the
     * maximum. Fewer tasks than requested might be returned, even if more tasks
     * exist; use next_page_token in the response to determine if more tasks
     * exist.
     */
    pageSize?: number;
    /**
     * A token identifying the page of results to return.  To request the first
     * page results, page_token must be empty. To request the next page of
     * results, page_token must be the value of next_page_token returned from
     * the previous call to ListTasks method.  The page token is valid for only
     * 2 hours.
     */
    pageToken?: string;
    /**
     * Required.  The queue name. For example:
     * `projects/PROJECT_ID/locations/LOCATION_ID/queues/QUEUE_ID`
     */
    parent?: string;
    /**
     * The response_view specifies which subset of the Task will be returned. By
     * default response_view is BASIC; not all information is retrieved by
     * default because some data, such as payloads, might be desirable to return
     * only when needed because of its large size or because of the sensitivity
     * of data that it contains.  Authorization for FULL requires
     * `cloudtasks.tasks.fullView` [Google IAM](https://cloud.google.com/iam/)
     * permission on the Task resource.
     */
    responseView?: string;
  }
  export interface Params$Resource$Projects$Locations$Queues$Tasks$Run extends
      StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * Required.  The task name. For example:
     * `projects/PROJECT_ID/locations/LOCATION_ID/queues/QUEUE_ID/tasks/TASK_ID`
     */
    name?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$RunTaskRequest;
  }
}
