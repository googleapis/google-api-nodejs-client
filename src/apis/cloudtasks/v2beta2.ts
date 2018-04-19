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
 * Cloud Tasks API
 *
 * Manages the execution of large numbers of distributed requests. Cloud Tasks
 * is in Alpha.
 *
 * @example
 * const google = require('googleapis');
 * const cloudtasks = google.cloudtasks('v2beta2');
 *
 * @namespace cloudtasks
 * @type {Function}
 * @version v2beta2
 * @variation v2beta2
 * @param {object=} options Options for Cloudtasks
 */
export class Cloudtasks {
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
 * Request message for acknowledging a task using AcknowledgeTask.
 */
export interface Schema$AcknowledgeTaskRequest {
  /**
   * Required.  The task&#39;s current schedule time, available in the
   * schedule_time returned by LeaseTasks response or RenewLease response. This
   * restriction is to ensure that your worker currently holds the lease.
   */
  scheduleTime: string;
}
/**
 * App Engine HTTP request.  The message defines the HTTP request that is sent
 * to an App Engine app when the task is dispatched.  This proto can only be
 * used for tasks in a queue which has app_engine_http_target set.  Using
 * AppEngineHttpRequest requires
 * [`appengine.applications.get`](/appengine/docs/admin-api/access-control)
 * Google IAM permission for the project and the following scope:
 * `https://www.googleapis.com/auth/cloud-platform`  The task will be delivered
 * to the App Engine app which belongs to the same project as the queue. For
 * more information, see [How Requests are
 * Routed](/appengine/docs/standard/python/how-requests-are-routed) and how
 * routing is affected by [dispatch
 * files](/appengine/docs/python/config/dispatchref).  The AppEngineRouting used
 * to construct the URL that the task is delivered to can be set at the
 * queue-level or task-level:  * If set,    app_engine_routing_override    is
 * used for all tasks in the queue, no matter what the setting    is for the
 * task-level app_engine_routing.   The `url` that the task will be sent to is:
 * * `url =` host `+`   relative_url  The task attempt has succeeded if the
 * app&#39;s request handler returns an HTTP response code in the range [`200` -
 * `299`]. `503` is considered an App Engine system error instead of an
 * application error. Requests returning error `503` will be retried regardless
 * of retry configuration and not counted against retry counts. Any other
 * response code or a failure to receive a response before the deadline is a
 * failed attempt.
 */
export interface Schema$AppEngineHttpRequest {
  /**
   * Task-level setting for App Engine routing.  If set,
   * app_engine_routing_override is used for all tasks in the queue, no matter
   * what the setting is for the task-level app_engine_routing.
   */
  appEngineRouting: Schema$AppEngineRouting;
  /**
   * HTTP request headers.  This map contains the header field names and values.
   * Headers can be set when the [task is
   * created](google.cloud.tasks.v2beta2.CloudTasks.CreateTask). Repeated
   * headers are not supported but a header value can contain commas.  Cloud
   * Tasks sets some headers to default values:  * `User-Agent`: By default,
   * this header is   `&quot;AppEngine-Google;
   * (+http://code.google.com/appengine)&quot;`.   This header can be modified,
   * but Cloud Tasks will append   `&quot;AppEngine-Google;
   * (+http://code.google.com/appengine)&quot;` to the   modified `User-Agent`.
   * If the task has a payload, Cloud Tasks sets the following headers:  *
   * `Content-Type`: By default, the `Content-Type` header is set to
   * `&quot;application/octet-stream&quot;`. The default can be overridden by
   * explicitly   setting `Content-Type` to a particular media type when the
   * [task is created](google.cloud.tasks.v2beta2.CloudTasks.CreateTask).   For
   * example, `Content-Type` can be set to `&quot;application/json&quot;`. *
   * `Content-Length`: This is computed by Cloud Tasks. This value is   output
   * only.   It cannot be changed.  The headers below cannot be set or
   * overridden:  * `Host` * `X-Google-*` * `X-AppEngine-*`  In addition, Cloud
   * Tasks sets some headers when the task is dispatched, such as headers
   * containing information about the task; see [request
   * headers](/appengine/docs/python/taskqueue/push/creating-handlers#reading_request_headers).
   * These headers are set only when the task is dispatched, so they are not
   * visible when the task is returned in a Cloud Tasks response.  Although
   * there is no specific limit for the maximum number of headers or the size,
   * there is a limit on the maximum size of the Task. For more information, see
   * the CreateTask documentation.
   */
  headers: any;
  /**
   * The HTTP method to use for the request. The default is POST.  The app&#39;s
   * request handler for the task&#39;s target URL must be able to handle HTTP
   * requests with this http_method, otherwise the task attempt will fail with
   * error code 405 (Method Not Allowed). See [Writing a push task request
   * handler](/appengine/docs/java/taskqueue/push/creating-handlers#writing_a_push_task_request_handler)
   * and the documentation for the request handlers in the language your app is
   * written in e.g. [Python Request
   * Handler](/appengine/docs/python/tools/webapp/requesthandlerclass).
   */
  httpMethod: string;
  /**
   * Payload.  The payload will be sent as the HTTP message body. A message
   * body, and thus a payload, is allowed only if the HTTP method is POST or
   * PUT. It is an error to set a data payload on a task with an incompatible
   * HttpMethod.
   */
  payload: string;
  /**
   * The relative URL.  The relative URL must begin with &quot;/&quot; and must
   * be a valid HTTP relative URL. It can contain a path and query string
   * arguments. If the relative URL is empty, then the root path &quot;/&quot;
   * will be used. No spaces are allowed, and the maximum length allowed is 2083
   * characters.
   */
  relativeUrl: string;
}
/**
 * App Engine HTTP target.  The task will be delivered to the App Engine
 * application hostname specified by its AppEngineHttpTarget and
 * AppEngineHttpRequest. The documentation for AppEngineHttpRequest explains how
 * the task&#39;s host URL is constructed.  Using AppEngineHttpTarget requires
 * [`appengine.applications.get`](/appengine/docs/admin-api/access-control)
 * Google IAM permission for the project and the following scope:
 * `https://www.googleapis.com/auth/cloud-platform`
 */
export interface Schema$AppEngineHttpTarget {
  /**
   * Overrides for the task-level app_engine_routing.  If set,
   * `app_engine_routing_override` is used for all tasks in the queue, no matter
   * what the setting is for the task-level app_engine_routing.
   */
  appEngineRoutingOverride: Schema$AppEngineRouting;
}
/**
 * App Engine Routing.  For more information about services, versions, and
 * instances see [An Overview of App
 * Engine](/appengine/docs/python/an-overview-of-app-engine), [Microservices
 * Architecture on Google App
 * Engine](/appengine/docs/python/microservices-on-app-engine), [App Engine
 * Standard request
 * routing](/appengine/docs/standard/python/how-requests-are-routed), and [App
 * Engine Flex request
 * routing](/appengine/docs/flexible/python/how-requests-are-routed).
 */
export interface Schema$AppEngineRouting {
  /**
   * Output only. The host that the task is sent to.  For more information, see
   * [How Requests are
   * Routed](/appengine/docs/standard/python/how-requests-are-routed).  The host
   * is constructed as:   * `host = [application_domain_name]`&lt;/br&gt;   `|
   * [service] + &#39;.&#39; + [application_domain_name]`&lt;/br&gt;   `|
   * [version] + &#39;.&#39; + [application_domain_name]`&lt;/br&gt;   `|
   * [version_dot_service]+ &#39;.&#39; + [application_domain_name]`&lt;/br&gt;
   * `| [instance] + &#39;.&#39; + [application_domain_name]`&lt;/br&gt;   `|
   * [instance_dot_service] + &#39;.&#39; +
   * [application_domain_name]`&lt;/br&gt;   `| [instance_dot_version] +
   * &#39;.&#39; + [application_domain_name]`&lt;/br&gt;   `|
   * [instance_dot_version_dot_service] + &#39;.&#39; +
   * [application_domain_name]`  * `application_domain_name` = The domain name
   * of the app, for   example &lt;app-id&gt;.appspot.com, which is associated
   * with the   queue&#39;s project ID. Some tasks which were created using the
   * App Engine   SDK use a custom domain name.  * `service =` service  *
   * `version =` version  * `version_dot_service =`   version `+ &#39;.&#39; +`
   * service  * `instance =` instance  * `instance_dot_service =`   instance `+
   * &#39;.&#39; +`   service  * `instance_dot_version =`   instance `+
   * &#39;.&#39; +`   version  * `instance_dot_version_dot_service =`   instance
   * `+ &#39;.&#39; +`   version `+ &#39;.&#39; +`   service  If service is
   * empty, then the task will be sent to the service which is the default
   * service when the task is attempted.  If version is empty, then the task
   * will be sent to the version which is the default version when the task is
   * attempted.  If instance is empty, then the task will be sent to an instance
   * which is available when the task is attempted.  When service is
   * &quot;default&quot;, version is &quot;default&quot;, and instance is empty,
   * host is shortened to just the `application_domain_name`.  If service,
   * version, or instance is invalid, then the task will be sent to the default
   * version of the default service when the task is attempted.
   */
  host: string;
  /**
   * App instance.  By default, the task is sent to an instance which is
   * available when the task is attempted.  Requests can only be sent to a
   * specific instance if [manual scaling is used in App Engine
   * Standard](/appengine/docs/python/an-overview-of-app-engine?hl=en_US#scaling_types_and_instance_classes).
   * App Engine Flex does not support instances. For more information, see [App
   * Engine Standard request
   * routing](/appengine/docs/standard/python/how-requests-are-routed) and [App
   * Engine Flex request
   * routing](/appengine/docs/flexible/python/how-requests-are-routed).
   */
  instance: string;
  /**
   * App service.  By default, the task is sent to the service which is the
   * default service when the task is attempted (&quot;default&quot;).  For some
   * queues or tasks which were created using the App Engine Task Queue API,
   * host is not parsable into service, version, and instance. For example, some
   * tasks which were created using the App Engine SDK use a custom domain name;
   * custom domains are not parsed by Cloud Tasks. If host is not parsable, then
   * service, version, and instance are the empty string.
   */
  service: string;
  /**
   * App version.  By default, the task is sent to the version which is the
   * default version when the task is attempted (&quot;default&quot;).  For some
   * queues or tasks which were created using the App Engine Task Queue API,
   * host is not parsable into service, version, and instance. For example, some
   * tasks which were created using the App Engine SDK use a custom domain name;
   * custom domains are not parsed by Cloud Tasks. If host is not parsable, then
   * service, version, and instance are the empty string.
   */
  version: string;
}
/**
 * The status of a task attempt.
 */
export interface Schema$AttemptStatus {
  /**
   * Output only. The time that this attempt was dispatched.  `dispatch_time`
   * will be truncated to the nearest microsecond.
   */
  dispatchTime: string;
  /**
   * Output only. The response from the target for this attempt.  If the task
   * has not been attempted or the task is currently running then the response
   * status is unset.
   */
  responseStatus: Schema$Status;
  /**
   * Output only. The time that this attempt response was received.
   * `response_time` will be truncated to the nearest microsecond.
   */
  responseTime: string;
  /**
   * Output only. The time that this attempt was scheduled.  `schedule_time`
   * will be truncated to the nearest microsecond.
   */
  scheduleTime: string;
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
 * Request message for canceling a lease using CancelLease.
 */
export interface Schema$CancelLeaseRequest {
  /**
   * The response_view specifies which subset of the Task will be returned.  By
   * default response_view is BASIC; not all information is retrieved by default
   * because some data, such as payloads, might be desirable to return only when
   * needed because of its large size or because of the sensitivity of data that
   * it contains.  Authorization for FULL requires `cloudtasks.tasks.fullView`
   * [Google IAM](/iam/) permission on the Task resource.
   */
  responseView: string;
  /**
   * Required.  The task&#39;s current schedule time, available in the
   * schedule_time returned by LeaseTasks response or RenewLease response. This
   * restriction is to ensure that your worker currently holds the lease.
   */
  scheduleTime: string;
}
/**
 * Request message for CreateTask.
 */
export interface Schema$CreateTaskRequest {
  /**
   * The response_view specifies which subset of the Task will be returned.  By
   * default response_view is BASIC; not all information is retrieved by default
   * because some data, such as payloads, might be desirable to return only when
   * needed because of its large size or because of the sensitivity of data that
   * it contains.  Authorization for FULL requires `cloudtasks.tasks.fullView`
   * [Google IAM](/iam/) permission on the Task resource.
   */
  responseView: string;
  /**
   * Required.  The task to add.  Task names have the following format:
   * `projects/PROJECT_ID/locations/LOCATION_ID/queues/QUEUE_ID/tasks/TASK_ID`.
   * The user can optionally specify a task name. If a name is not specified
   * then the system will generate a random unique task id, which will be set in
   * the task returned in the response.  If schedule_time is not set or is in
   * the past then Cloud Tasks will set it to the current time.  Task
   * De-duplication:  Explicitly specifying a task ID enables task
   * de-duplication.  If a task&#39;s ID is identical to that of an existing
   * task or a task that was deleted or completed recently then the call will
   * fail with ALREADY_EXISTS. If the task&#39;s queue was created using Cloud
   * Tasks, then another task with the same name can&#39;t be created for ~1hour
   * after the original task was deleted or completed. If the task&#39;s queue
   * was created using queue.yaml or queue.xml, then another task with the same
   * name can&#39;t be created for ~9days after the original task was deleted or
   * completed.  Because there is an extra lookup cost to identify duplicate
   * task names, these CreateTask calls have significantly increased latency.
   * Using hashed strings for the task id or for the prefix of the task id is
   * recommended. Choosing task ids that are sequential or have sequential
   * prefixes, for example using a timestamp, causes an increase in latency and
   * error rates in all task commands. The infrastructure relies on an
   * approximately uniform distribution of task ids to store and serve tasks
   * efficiently.
   */
  task: Schema$Task;
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
 * Request message for `GetIamPolicy` method.
 */
export interface Schema$GetIamPolicyRequest {}
/**
 * Request message for leasing tasks using LeaseTasks.
 */
export interface Schema$LeaseTasksRequest {
  /**
   * `filter` can be used to specify a subset of tasks to lease.  When `filter`
   * is set to `tag=&lt;my-tag&gt;` then the response will contain only tasks
   * whose tag is equal to `&lt;my-tag&gt;`. `&lt;my-tag&gt;` must be less than
   * 500 characters.  When `filter` is set to `tag_function=oldest_tag()`, only
   * tasks which have the same tag as the task with the oldest schedule_time
   * will be returned.  Grammar Syntax:  * `filter = &quot;tag=&quot; tag |
   * &quot;tag_function=&quot; function`  * `tag = string`  * `function =
   * &quot;oldest_tag()&quot;`  The `oldest_tag()` function returns tasks which
   * have the same tag as the oldest task (ordered by schedule time).  SDK
   * compatibility: Although the SDK allows tags to be either string or
   * [bytes](/appengine/docs/standard/java/javadoc/com/google/appengine/api/taskqueue/TaskOptions.html#tag-byte:A-),
   * only UTF-8 encoded tags can be used in Cloud Tasks. Tag which aren&#39;t
   * UTF-8 encoded can&#39;t be used in the filter and the task&#39;s tag will
   * be displayed as empty in Cloud Tasks.
   */
  filter: string;
  /**
   *  After the worker has successfully finished the work associated with the
   * task, the worker must call via AcknowledgeTask before the schedule_time.
   * Otherwise the task will be returned to a later LeaseTasks call so that
   * another worker can retry it.  The maximum lease duration is 1 week.
   * `lease_duration` will be truncated to the nearest second.
   */
  leaseDuration: string;
  /**
   * The maximum number of tasks to lease. The maximum that can be requested is
   * 1000.
   */
  maxTasks: number;
  /**
   * The response_view specifies which subset of the Task will be returned.  By
   * default response_view is BASIC; not all information is retrieved by default
   * because some data, such as payloads, might be desirable to return only when
   * needed because of its large size or because of the sensitivity of data that
   * it contains.  Authorization for FULL requires `cloudtasks.tasks.fullView`
   * [Google IAM](/iam/) permission on the Task resource.
   */
  responseView: string;
}
/**
 * Response message for leasing tasks using LeaseTasks.
 */
export interface Schema$LeaseTasksResponse {
  /**
   * The leased tasks.
   */
  tasks: Schema$Task[];
}
/**
 * The response message for Locations.ListLocations.
 */
export interface Schema$ListLocationsResponse {
  /**
   * A list of locations that matches the specified filter in the request.
   */
  locations: Schema$Location[];
  /**
   * The standard List next-page token.
   */
  nextPageToken: string;
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
  nextPageToken: string;
  /**
   * The list of queues.
   */
  queues: Schema$Queue[];
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
  nextPageToken: string;
  /**
   * The list of tasks.
   */
  tasks: Schema$Task[];
}
/**
 * A resource that represents Google Cloud Platform location.
 */
export interface Schema$Location {
  /**
   * The friendly name for this location, typically a nearby city name. For
   * example, &quot;Tokyo&quot;.
   */
  displayName: string;
  /**
   * Cross-service attributes for the location. For example
   * {&quot;cloud.googleapis.com/region&quot;: &quot;us-east1&quot;}
   */
  labels: any;
  /**
   * The canonical id for this location. For example: `&quot;us-east1&quot;`.
   */
  locationId: string;
  /**
   * Service-specific metadata. For example the available capacity at the given
   * location.
   */
  metadata: any;
  /**
   * Resource name for the location, which may vary between implementations. For
   * example: `&quot;projects/example-project/locations/us-east1&quot;`
   */
  name: string;
}
/**
 * Request message for PauseQueue.
 */
export interface Schema$PauseQueueRequest {}
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
 * The pull message contains data that can be used by the caller of LeaseTasks
 * to process the task.  This proto can only be used for tasks in a queue which
 * has pull_target set.
 */
export interface Schema$PullMessage {
  /**
   * A data payload consumed by the worker to execute the task.
   */
  payload: string;
  /**
   * The task&#39;s tag.  Tags allow similar tasks to be processed in a batch.
   * If you label tasks with a tag, your worker can lease tasks with the same
   * tag using filter. For example, if you want to aggregate the events
   * associated with a specific user once a day, you could tag tasks with the
   * user ID.  The task&#39;s tag can only be set when the task is created.  The
   * tag must be less than 500 characters.  SDK compatibility: Although the SDK
   * allows tags to be either string or
   * [bytes](/appengine/docs/standard/java/javadoc/com/google/appengine/api/taskqueue/TaskOptions.html#tag-byte:A-),
   * only UTF-8 encoded tags can be used in Cloud Tasks. If a tag isn&#39;t
   * UTF-8 encoded, the tag will be empty when the task is returned by Cloud
   * Tasks.
   */
  tag: string;
}
/**
 * Pull target.
 */
export interface Schema$PullTarget {}
/**
 * Request message for PurgeQueue.
 */
export interface Schema$PurgeQueueRequest {}
/**
 * A queue is a container of related tasks. Queues are configured to manage how
 * those tasks are dispatched. Configurable properties include rate limits,
 * retry options, target types, and others.
 */
export interface Schema$Queue {
  /**
   * App Engine HTTP target.  An App Engine queue is a queue that has an
   * AppEngineHttpTarget.
   */
  appEngineHttpTarget: Schema$AppEngineHttpTarget;
  /**
   * The queue name.  The queue name must have the following format:
   * `projects/PROJECT_ID/locations/LOCATION_ID/queues/QUEUE_ID`  * `PROJECT_ID`
   * can contain letters ([A-Za-z]), numbers ([0-9]),    hyphens (-), colons
   * (:), or periods (.).    For more information, see    [Identifying
   * projects](/resource-manager/docs/creating-managing-projects#identifying_projects)
   * * `LOCATION_ID` is the canonical ID for the queue&#39;s location.    The
   * list of available locations can be obtained by calling    ListLocations.
   * For more information, see https://cloud.google.com/about/locations/. *
   * `QUEUE_ID` can contain letters ([A-Za-z]), numbers ([0-9]), or   hyphens
   * (-). The maximum length is 100 characters.  Caller-specified and required
   * in CreateQueue, after which it becomes output only.
   */
  name: string;
  /**
   * Pull target.  A pull queue is a queue that has a PullTarget.
   */
  pullTarget: Schema$PullTarget;
  /**
   * Output only. The last time this queue was purged.  All tasks that were
   * created before this time were purged.  A queue can be purged using
   * PurgeQueue, the [App Engine Task Queue SDK, or the Cloud
   * Console](/appengine/docs/standard/python/taskqueue/push/deleting-tasks-and-queues#purging_all_tasks_from_a_queue).
   * Purge time will be truncated to the nearest microsecond. Purge time will be
   * unset if the queue has never been purged.
   */
  purgeTime: string;
  /**
   * Rate limits for task dispatches.  rate_limits and retry_config are related
   * because they both control task attempts however they control how tasks are
   * attempted in different ways:  * rate_limits controls the total rate of
   * dispatches from a queue (i.e. all traffic dispatched from the   queue,
   * regardless of whether the dispatch is from a first   attempt or a retry). *
   * retry_config controls what happens to   particular a task after its first
   * attempt fails. That is,   retry_config controls task retries (the   second
   * attempt, third attempt, etc).
   */
  rateLimits: Schema$RateLimits;
  /**
   * Settings that determine the retry behavior.  * For tasks created using
   * Cloud Tasks: the queue-level retry settings   apply to all tasks in the
   * queue that were created using Cloud Tasks.   Retry settings cannot be set
   * on individual tasks. * For tasks created using the App Engine SDK: the
   * queue-level retry   settings apply to all tasks in the queue which do not
   * have retry settings   explicitly set on the task and were created by the
   * App Engine SDK. See   [App Engine
   * documentation](/appengine/docs/standard/python/taskqueue/push/retrying-tasks).
   */
  retryConfig: Schema$RetryConfig;
  /**
   * Output only. The state of the queue.  `state` can only be changed by called
   * PauseQueue, ResumeQueue, or uploading
   * [queue.yaml/xml](/appengine/docs/python/config/queueref). UpdateQueue
   * cannot be used to change `state`.
   */
  state: string;
}
/**
 * Rate limits.  This message determines the maximum rate that tasks can be
 * dispatched by a queue, regardless of whether the dispatch is a first task
 * attempt or a retry.
 */
export interface Schema$RateLimits {
  /**
   * Output only. The max burst size.  Max burst size limits how fast tasks in
   * queue are processed when many tasks are in the queue and the rate is high.
   * This field allows the queue to have a high rate so processing starts
   * shortly after a task is enqueued, but still limits resource usage when many
   * tasks are enqueued in a short period of time.  The [token
   * bucket](https://wikipedia.org/wiki/Token_Bucket) algorithm is used to
   * control the rate of task dispatches. Each queue has a token bucket that
   * holds tokens, up to the maximum specified by `max_burst_size`. Each time a
   * task is dispatched, a token is removed from the bucket. Tasks will be
   * dispatched until the queue&#39;s bucket runs out of tokens. The bucket will
   * be continuously refilled with new tokens based on
   * max_tasks_dispatched_per_second.  Cloud Tasks will pick the value of
   * `max_burst_size` based on the value of max_tasks_dispatched_per_second. For
   * App Engine queues that were created or updated using `queue.yaml/xml`,
   * `max_burst_size` is equal to
   * [bucket_size](/appengine/docs/standard/python/config/queueref#bucket_size).
   * Since `max_burst_size` is output only, if UpdateQueue is called on a queue
   * created by `queue.yaml/xml`, `max_burst_size` will be reset based on the
   * value of max_tasks_dispatched_per_second, regardless of whether
   * max_tasks_dispatched_per_second is updated.
   */
  maxBurstSize: number;
  /**
   * The maximum number of concurrent tasks that Cloud Tasks allows to be
   * dispatched for this queue. After this threshold has been reached, Cloud
   * Tasks stops dispatching tasks until the number of concurrent requests
   * decreases.  If unspecified when the queue is created, Cloud Tasks will pick
   * the default.   The maximum allowed value is 5,000. -1 indicates no limit.
   * This field is output only for [pull
   * queues](google.cloud.tasks.v2beta2.PullTarget).   This field has the same
   * meaning as [max_concurrent_requests in
   * queue.yaml/xml](/appengine/docs/standard/python/config/queueref#max_concurrent_requests).
   */
  maxConcurrentTasks: number;
  /**
   * The maximum rate at which tasks are dispatched from this queue.  If
   * unspecified when the queue is created, Cloud Tasks will pick the default.
   * * For App Engine queues, the maximum allowed value is 500. * This field is
   * output only   for [pull queues](google.cloud.tasks.v2beta2.PullTarget). In
   * addition to the `max_tasks_dispatched_per_second` limit, a   maximum of 10
   * QPS of LeaseTasks   requests are allowed per pull queue.   This field has
   * the same meaning as [rate in
   * queue.yaml/xml](/appengine/docs/standard/python/config/queueref#rate).
   */
  maxTasksDispatchedPerSecond: number;
}
/**
 * Request message for renewing a lease using RenewLease.
 */
export interface Schema$RenewLeaseRequest {
  /**
   * Required.  The desired new lease duration, starting from now.   The maximum
   * lease duration is 1 week. `lease_duration` will be truncated to the nearest
   * second.
   */
  leaseDuration: string;
  /**
   * The response_view specifies which subset of the Task will be returned.  By
   * default response_view is BASIC; not all information is retrieved by default
   * because some data, such as payloads, might be desirable to return only when
   * needed because of its large size or because of the sensitivity of data that
   * it contains.  Authorization for FULL requires `cloudtasks.tasks.fullView`
   * [Google IAM](/iam/) permission on the Task resource.
   */
  responseView: string;
  /**
   * Required.  The task&#39;s current schedule time, available in the
   * schedule_time returned by LeaseTasks response or RenewLease response. This
   * restriction is to ensure that your worker currently holds the lease.
   */
  scheduleTime: string;
}
/**
 * Request message for ResumeQueue.
 */
export interface Schema$ResumeQueueRequest {}
/**
 * Retry config.  These settings determine how a failed task attempt is retried.
 */
export interface Schema$RetryConfig {
  /**
   * The maximum number of attempts for a task.  Cloud Tasks will attempt the
   * task `max_attempts` times (that is, if the first attempt fails, then there
   * will be `max_attempts - 1` retries).  Must be &gt; 0.
   */
  maxAttempts: number;
  /**
   * A task will be [scheduled](Task.schedule_time) for retry between
   * min_backoff and max_backoff duration after it fails, if the queue&#39;s
   * RetryConfig specifies that the task should be retried.  If unspecified when
   * the queue is created, Cloud Tasks will pick the default.  This field is
   * output only for [pull queues](google.cloud.tasks.v2beta2.PullTarget).
   * `max_backoff` will be truncated to the nearest second.  This field has the
   * same meaning as [max_backoff_seconds in
   * queue.yaml/xml](/appengine/docs/standard/python/config/queueref#retry_parameters).
   */
  maxBackoff: string;
  /**
   * The time between retries will double `max_doublings` times.  A task&#39;s
   * retry interval starts at min_backoff, then doubles `max_doublings` times,
   * then increases linearly, and finally retries retries at intervals of
   * max_backoff up to max_attempts times.  For example, if min_backoff is 10s,
   * max_backoff is 300s, and `max_doublings` is 3, then the a task will first
   * be retried in 10s. The retry interval will double three times, and then
   * increase linearly by 2^3 * 10s.  Finally, the task will retry at intervals
   * of max_backoff until the task has been attempted max_attempts times. Thus,
   * the requests will retry at 10s, 20s, 40s, 80s, 160s, 240s, 300s, 300s, ....
   * If unspecified when the queue is created, Cloud Tasks will pick the
   * default.  This field is output only for [pull
   * queues](google.cloud.tasks.v2beta2.PullTarget).   This field has the same
   * meaning as [max_doublings in
   * queue.yaml/xml](/appengine/docs/standard/python/config/queueref#retry_parameters).
   */
  maxDoublings: number;
  /**
   * If positive, `max_retry_duration` specifies the time limit for retrying a
   * failed task, measured from when the task was first attempted. Once
   * `max_retry_duration` time has passed *and* the task has been attempted
   * max_attempts times, no further attempts will be made and the task will be
   * deleted.  If zero, then the task age is unlimited.  If unspecified when the
   * queue is created, Cloud Tasks will pick the default.  This field is output
   * only for [pull queues](google.cloud.tasks.v2beta2.PullTarget).
   * `max_retry_duration` will be truncated to the nearest second.  This field
   * has the same meaning as [task_age_limit in
   * queue.yaml/xml](/appengine/docs/standard/python/config/queueref#retry_parameters).
   */
  maxRetryDuration: string;
  /**
   * A task will be [scheduled](Task.schedule_time) for retry between
   * min_backoff and max_backoff duration after it fails, if the queue&#39;s
   * RetryConfig specifies that the task should be retried.  If unspecified when
   * the queue is created, Cloud Tasks will pick the default.  This field is
   * output only for [pull queues](google.cloud.tasks.v2beta2.PullTarget).
   * `min_backoff` will be truncated to the nearest second.  This field has the
   * same meaning as [min_backoff_seconds in
   * queue.yaml/xml](/appengine/docs/standard/python/config/queueref#retry_parameters).
   */
  minBackoff: string;
  /**
   * If true, then the number of attempts is unlimited.
   */
  unlimitedAttempts: boolean;
}
/**
 * Request message for forcing a task to run now using RunTask.
 */
export interface Schema$RunTaskRequest {
  /**
   * The response_view specifies which subset of the Task will be returned.  By
   * default response_view is BASIC; not all information is retrieved by default
   * because some data, such as payloads, might be desirable to return only when
   * needed because of its large size or because of the sensitivity of data that
   * it contains.  Authorization for FULL requires `cloudtasks.tasks.fullView`
   * [Google IAM](/iam/) permission on the Task resource.
   */
  responseView: string;
}
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
 * The `Status` type defines a logical error model that is suitable for
 * different programming environments, including REST APIs and RPC APIs. It is
 * used by [gRPC](https://github.com/grpc). The error model is designed to be:
 * - Simple to use and understand for most users - Flexible enough to meet
 * unexpected needs  # Overview  The `Status` message contains three pieces of
 * data: error code, error message, and error details. The error code should be
 * an enum value of google.rpc.Code, but it may accept additional error codes if
 * needed.  The error message should be a developer-facing English message that
 * helps developers *understand* and *resolve* the error. If a localized
 * user-facing error message is needed, put the localized message in the error
 * details or localize it in the client. The optional error details may contain
 * arbitrary information about the error. There is a predefined set of error
 * detail types in the package `google.rpc` that can be used for common error
 * conditions.  # Language mapping  The `Status` message is the logical
 * representation of the error model, but it is not necessarily the actual wire
 * format. When the `Status` message is exposed in different client libraries
 * and different wire protocols, it can be mapped differently. For example, it
 * will likely be mapped to some exceptions in Java, but more likely mapped to
 * some error codes in C.  # Other uses  The error model and the `Status`
 * message can be used in a variety of environments, either with or without
 * APIs, to provide a consistent developer experience across different
 * environments.  Example uses of this error model include:  - Partial errors.
 * If a service needs to return partial errors to the client,     it may embed
 * the `Status` in the normal response to indicate the partial     errors.  -
 * Workflow errors. A typical workflow has multiple steps. Each step may have a
 * `Status` message for error reporting.  - Batch operations. If a client uses
 * batch request and batch response, the     `Status` message should be used
 * directly inside batch response, one for     each error sub-response.  -
 * Asynchronous operations. If an API call embeds asynchronous operation results
 * in its response, the status of those operations should be     represented
 * directly using the `Status` message.  - Logging. If some API errors are
 * stored in logs, the message `Status` could     be used directly after any
 * stripping needed for security/privacy reasons.
 */
export interface Schema$Status {
  /**
   * The status code, which should be an enum value of google.rpc.Code.
   */
  code: number;
  /**
   * A list of messages that carry the error details.  There is a common set of
   * message types for APIs to use.
   */
  details: any[];
  /**
   * A developer-facing error message, which should be in English. Any
   * user-facing error message should be localized and sent in the
   * google.rpc.Status.details field, or localized by the client.
   */
  message: string;
}
/**
 * A unit of scheduled work.
 */
export interface Schema$Task {
  /**
   * App Engine HTTP request that is sent to the task&#39;s target. Can be set
   * only if app_engine_http_target is set on the queue.  An App Engine task is
   * a task that has AppEngineHttpRequest set.
   */
  appEngineHttpRequest: Schema$AppEngineHttpRequest;
  /**
   * Output only. The time that the task was created.  `create_time` will be
   * truncated to the nearest second.
   */
  createTime: string;
  /**
   * The task name.  The task name must have the following format:
   * `projects/PROJECT_ID/locations/LOCATION_ID/queues/QUEUE_ID/tasks/TASK_ID`
   * * `PROJECT_ID` can contain letters ([A-Za-z]), numbers ([0-9]),    hyphens
   * (-), colons (:), or periods (.).    For more information, see [Identifying
   * projects](/resource-manager/docs/creating-managing-projects#identifying_projects)
   * * `LOCATION_ID` is the canonical ID for the task&#39;s location.    The
   * list of available locations can be obtained by calling    ListLocations.
   * For more information, see https://cloud.google.com/about/locations/. *
   * `QUEUE_ID` can contain letters ([A-Za-z]), numbers ([0-9]), or   hyphens
   * (-). The maximum length is 100 characters. * `TASK_ID` can contain only
   * letters ([A-Za-z]), numbers ([0-9]),   hyphens (-), or underscores (_). The
   * maximum length is 500 characters.  Optionally caller-specified in
   * CreateTask.
   */
  name: string;
  /**
   * LeaseTasks to process the task. Can be set only if pull_target is set on
   * the queue.  A pull task is a task that has PullMessage set.
   */
  pullMessage: Schema$PullMessage;
  /**
   * The time when the task is scheduled to be attempted.  For App Engine
   * queues, this is when the task will be attempted or retried.  For pull
   * queues, this is the time when the task is available to be leased; if a task
   * is currently leased, this is the time when the current lease expires, that
   * is, the time that the task was leased plus the lease_duration.
   * `schedule_time` will be truncated to the nearest microsecond.
   */
  scheduleTime: string;
  /**
   * Output only. The task status.
   */
  status: Schema$TaskStatus;
  /**
   * Output only. The view specifies which subset of the Task has been returned.
   */
  view: string;
}
/**
 * Status of the task.
 */
export interface Schema$TaskStatus {
  /**
   * Output only. The number of attempts dispatched.  This count includes tasks
   * which have been dispatched but haven&#39;t received a response.
   */
  attemptDispatchCount: number;
  /**
   * Output only. The number of attempts which have received a response.  This
   * field is not calculated for [pull
   * tasks](google.cloud.tasks.v2beta2.PullTaskTarget).
   */
  attemptResponseCount: number;
  /**
   * Output only. The status of the task&#39;s first attempt.  Only
   * dispatch_time will be set. The other AttemptStatus information is not
   * retained by Cloud Tasks.  This field is not calculated for [pull
   * tasks](google.cloud.tasks.v2beta2.PullTaskTarget).
   */
  firstAttemptStatus: Schema$AttemptStatus;
  /**
   * Output only. The status of the task&#39;s last attempt.  This field is not
   * calculated for [pull tasks](google.cloud.tasks.v2beta2.PullTaskTarget).
   */
  lastAttemptStatus: Schema$AttemptStatus;
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
   * @desc Get information about a location.
   * @example
   * * // BEFORE RUNNING:
   * // ---------------
   * // 1. If not already done, enable the Cloud Tasks API
   * //    and check the quota for your project at
   * //    https://console.developers.google.com/apis/api/cloudtasks
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
   * var cloudTasks = google.cloudtasks('v2beta2');
   *
   * authorize(function(authClient) {
   *   var request = {
   *     // Resource name for the location.
   *     name: 'projects/my-project/locations/my-location',  // TODO: Update
   * placeholder value.
   *
   *     auth: authClient,
   *   };
   *
   *   cloudTasks.projects.locations.get(request, function(err, response) {
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
   * @alias cloudtasks.projects.locations.get
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.name Resource name for the location.
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  get(params?: any, options?: MethodOptions): AxiosPromise<Schema$Location>;
  get(params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$Location>,
      callback?: BodyResponseCallback<Schema$Location>): void;
  get(params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$Location>,
      callback?: BodyResponseCallback<Schema$Location>):
      void|AxiosPromise<Schema$Location> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://cloudtasks.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url: (rootUrl + '/v2beta2/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
   * @example
   * * // BEFORE RUNNING:
   * // ---------------
   * // 1. If not already done, enable the Cloud Tasks API
   * //    and check the quota for your project at
   * //    https://console.developers.google.com/apis/api/cloudtasks
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
   * var cloudTasks = google.cloudtasks('v2beta2');
   *
   * authorize(function(authClient) {
   *   var request = {
   *     // The resource that owns the locations collection, if applicable.
   *     name: 'projects/my-project',  // TODO: Update placeholder value.
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
   *     var locationsPage = response['locations'];
   *     if (!locationsPage) {
   *       return;
   *     }
   *     for (var i = 0; i < locationsPage.length; i++) {
   *       // TODO: Change code below to process each resource in
   * `locationsPage`: console.log(JSON.stringify(locationsPage[i], null, 2));
   *     }
   *
   *     if (response.nextPageToken) {
   *       request.pageToken = response.nextPageToken;
   *       cloudTasks.projects.locations.list(request, handlePage);
   *     }
   *   };
   *
   *   cloudTasks.projects.locations.list(request, handlePage);
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
  list(params?: any, options?: MethodOptions):
      AxiosPromise<Schema$ListLocationsResponse>;
  list(
      params?: any,
      options?: MethodOptions|
      BodyResponseCallback<Schema$ListLocationsResponse>,
      callback?: BodyResponseCallback<Schema$ListLocationsResponse>): void;
  list(
      params?: any,
      options?: MethodOptions|
      BodyResponseCallback<Schema$ListLocationsResponse>,
      callback?: BodyResponseCallback<Schema$ListLocationsResponse>):
      void|AxiosPromise<Schema$ListLocationsResponse> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://cloudtasks.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url: (rootUrl + '/v2beta2/{+name}/locations')
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
   * @desc Creates a queue.  Queues created with this method allow tasks to live
   * for a maximum of 31 days. After a task is 31 days old, the task will be
   * deleted regardless of whether it was dispatched or not.  WARNING: Using
   * this method may have unintended side effects if you are using an App Engine
   * `queue.yaml` or `queue.xml` file to manage your queues. Read [Overview of
   * Queue Management and queue.yaml](/cloud-tasks/docs/queue-yaml) before using
   * this method.
   * @example
   * * // BEFORE RUNNING:
   * // ---------------
   * // 1. If not already done, enable the Cloud Tasks API
   * //    and check the quota for your project at
   * //    https://console.developers.google.com/apis/api/cloudtasks
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
   * var cloudTasks = google.cloudtasks('v2beta2');
   *
   * authorize(function(authClient) {
   *   var request = {
   *     // Required.
   *     // The location name in which the queue will be created.
   *     // For example: `projects/PROJECT_ID/locations/LOCATION_ID`
   *     // The list of allowed locations can be obtained by calling Cloud
   *     // Tasks' implementation of
   *     // google.cloud.location.Locations.ListLocations.
   *     parent: 'projects/my-project/locations/my-location',  // TODO: Update
   * placeholder value.
   *
   *     resource: {
   *       // TODO: Add desired properties to the request body.
   *     },
   *
   *     auth: authClient,
   *   };
   *
   *   cloudTasks.projects.locations.queues.create(request, function(err,
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
  create(params?: any, options?: MethodOptions): AxiosPromise<Schema$Queue>;
  create(
      params?: any, options?: MethodOptions|BodyResponseCallback<Schema$Queue>,
      callback?: BodyResponseCallback<Schema$Queue>): void;
  create(
      params?: any, options?: MethodOptions|BodyResponseCallback<Schema$Queue>,
      callback?: BodyResponseCallback<Schema$Queue>):
      void|AxiosPromise<Schema$Queue> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://cloudtasks.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url: (rootUrl + '/v2beta2/{+parent}/queues')
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
   * tasks in it.  Note: If you delete a queue, a queue with the same name can't
   * be created for 7 days.  WARNING: Using this method may have unintended side
   * effects if you are using an App Engine `queue.yaml` or `queue.xml` file to
   * manage your queues. Read [Overview of Queue Management and
   * queue.yaml](/cloud-tasks/docs/queue-yaml) before using this method.
   * @example
   * * // BEFORE RUNNING:
   * // ---------------
   * // 1. If not already done, enable the Cloud Tasks API
   * //    and check the quota for your project at
   * //    https://console.developers.google.com/apis/api/cloudtasks
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
   * var cloudTasks = google.cloudtasks('v2beta2');
   *
   * authorize(function(authClient) {
   *   var request = {
   *     // Required.
   *     // The queue name. For example:
   *     // `projects/PROJECT_ID/locations/LOCATION_ID/queues/QUEUE_ID`
   *     name: 'projects/my-project/locations/my-location/queues/my-queue',  //
   * TODO: Update placeholder value.
   *
   *     auth: authClient,
   *   };
   *
   *   cloudTasks.projects.locations.queues.delete(request, function(err) {
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
   * @alias cloudtasks.projects.locations.queues.delete
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.name Required.  The queue name. For example: `projects/PROJECT_ID/locations/LOCATION_ID/queues/QUEUE_ID`
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
    const rootUrl = options.rootUrl || 'https://cloudtasks.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url: (rootUrl + '/v2beta2/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
   * @example
   * * // BEFORE RUNNING:
   * // ---------------
   * // 1. If not already done, enable the Cloud Tasks API
   * //    and check the quota for your project at
   * //    https://console.developers.google.com/apis/api/cloudtasks
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
   * var cloudTasks = google.cloudtasks('v2beta2');
   *
   * authorize(function(authClient) {
   *   var request = {
   *     // Required.
   *     // The resource name of the queue. For example:
   *     // `projects/PROJECT_ID/locations/LOCATION_ID/queues/QUEUE_ID`
   *     name: 'projects/my-project/locations/my-location/queues/my-queue',  //
   * TODO: Update placeholder value.
   *
   *     auth: authClient,
   *   };
   *
   *   cloudTasks.projects.locations.queues.get(request, function(err, response)
   * { if (err) { console.error(err); return;
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
   * @alias cloudtasks.projects.locations.queues.get
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.name Required.  The resource name of the queue. For example: `projects/PROJECT_ID/locations/LOCATION_ID/queues/QUEUE_ID`
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  get(params?: any, options?: MethodOptions): AxiosPromise<Schema$Queue>;
  get(params?: any, options?: MethodOptions|BodyResponseCallback<Schema$Queue>,
      callback?: BodyResponseCallback<Schema$Queue>): void;
  get(params?: any, options?: MethodOptions|BodyResponseCallback<Schema$Queue>,
      callback?: BodyResponseCallback<Schema$Queue>):
      void|AxiosPromise<Schema$Queue> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://cloudtasks.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url: (rootUrl + '/v2beta2/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
   * requires the following [Google IAM](/iam) permission on the specified
   * resource parent:  * `cloudtasks.queues.getIamPolicy`
   * @example
   * * // BEFORE RUNNING:
   * // ---------------
   * // 1. If not already done, enable the Cloud Tasks API
   * //    and check the quota for your project at
   * //    https://console.developers.google.com/apis/api/cloudtasks
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
   * var cloudTasks = google.cloudtasks('v2beta2');
   *
   * authorize(function(authClient) {
   *   var request = {
   *     // REQUIRED: The resource for which the policy is being requested.
   *     // See the operation documentation for the appropriate value for this
   * field. resource_:
   * 'projects/my-project/locations/my-location/queues/my-queue',  // TODO:
   * Update placeholder value.
   *
   *     resource: {
   *       // TODO: Add desired properties to the request body.
   *     },
   *
   *     auth: authClient,
   *   };
   *
   *   cloudTasks.projects.locations.queues.getIamPolicy(request, function(err,
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
    const rootUrl = options.rootUrl || 'https://cloudtasks.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url: (rootUrl + '/v2beta2/{+resource}:getIamPolicy')
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
   * @example
   * * // BEFORE RUNNING:
   * // ---------------
   * // 1. If not already done, enable the Cloud Tasks API
   * //    and check the quota for your project at
   * //    https://console.developers.google.com/apis/api/cloudtasks
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
   * var cloudTasks = google.cloudtasks('v2beta2');
   *
   * authorize(function(authClient) {
   *   var request = {
   *     // Required.
   *     // The location name.
   *     // For example: `projects/PROJECT_ID/locations/LOCATION_ID`
   *     parent: 'projects/my-project/locations/my-location',  // TODO: Update
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
   *     var queuesPage = response['queues'];
   *     if (!queuesPage) {
   *       return;
   *     }
   *     for (var i = 0; i < queuesPage.length; i++) {
   *       // TODO: Change code below to process each resource in `queuesPage`:
   *       console.log(JSON.stringify(queuesPage[i], null, 2));
   *     }
   *
   *     if (response.nextPageToken) {
   *       request.pageToken = response.nextPageToken;
   *       cloudTasks.projects.locations.queues.list(request, handlePage);
   *     }
   *   };
   *
   *   cloudTasks.projects.locations.queues.list(request, handlePage);
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
   * @alias cloudtasks.projects.locations.queues.list
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string=} params.filter `filter` can be used to specify a subset of queues. Any Queue field can be used as a filter and several operators as supported. For example: `<=, <, >=, >, !=, =, :`. The filter syntax is the same as described in [Stackdriver's Advanced Logs Filters](/logging/docs/view/advanced_filters).  Sample filter "app_engine_http_target: *".  Note that using filters might cause fewer queues than the requested_page size to be returned.
   * @param {integer=} params.pageSize Requested page size.  The maximum page size is 9800. If unspecified, the page size will be the maximum. Fewer queues than requested might be returned, even if more queues exist; use the next_page_token in the response to determine if more queues exist.
   * @param {string=} params.pageToken A token identifying the page of results to return.  To request the first page results, page_token must be empty. To request the next page of results, page_token must be the value of next_page_token returned from the previous call to ListQueues method. It is an error to switch the value of the filter while iterating through pages.
   * @param {string} params.parent Required.  The location name. For example: `projects/PROJECT_ID/locations/LOCATION_ID`
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  list(params?: any, options?: MethodOptions):
      AxiosPromise<Schema$ListQueuesResponse>;
  list(
      params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$ListQueuesResponse>,
      callback?: BodyResponseCallback<Schema$ListQueuesResponse>): void;
  list(
      params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$ListQueuesResponse>,
      callback?: BodyResponseCallback<Schema$ListQueuesResponse>):
      void|AxiosPromise<Schema$ListQueuesResponse> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://cloudtasks.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url: (rootUrl + '/v2beta2/{+parent}/queues')
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
   * @desc Updates a queue.  This method creates the queue if it does not exist
   * and updates the queue if it does exist.  Queues created with this method
   * allow tasks to live for a maximum of 31 days. After a task is 31 days old,
   * the task will be deleted regardless of whether it was dispatched or not.
   * WARNING: Using this method may have unintended side effects if you are
   * using an App Engine `queue.yaml` or `queue.xml` file to manage your queues.
   * Read [Overview of Queue Management and
   * queue.yaml](/cloud-tasks/docs/queue-yaml) before using this method.
   * @example
   * * // BEFORE RUNNING:
   * // ---------------
   * // 1. If not already done, enable the Cloud Tasks API
   * //    and check the quota for your project at
   * //    https://console.developers.google.com/apis/api/cloudtasks
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
   * var cloudTasks = google.cloudtasks('v2beta2');
   *
   * authorize(function(authClient) {
   *   var request = {
   *     // The queue name.
   *     // The queue name must have the following format:
   *     // `projects/PROJECT_ID/locations/LOCATION_ID/queues/QUEUE_ID`
   *     // * `PROJECT_ID` can contain uppercase and lowercase letters,
   *     // numbers, hyphens, colons, and periods; that is, it must match
   *     // the regular expression: `[a-zA-Z\\d-:\\.]+`.
   *     // * `QUEUE_ID` can contain uppercase and lowercase letters,
   *     // numbers, and hyphens; that is, it must match the regular
   *     // expression: `[a-zA-Z\\d-]+`. The maximum length is 100
   *     // characters.
   *     // Caller-specified and required in CreateQueueRequest, after which
   *     // it becomes output only.
   *     name: 'projects/my-project/locations/my-location/queues/my-queue',  //
   * TODO: Update placeholder value.
   *
   *     resource: {
   *       // TODO: Add desired properties to the request body. Only these
   * properties
   *       // will be changed.
   *     },
   *
   *     auth: authClient,
   *   };
   *
   *   cloudTasks.projects.locations.queues.patch(request, function(err,
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
   * @alias cloudtasks.projects.locations.queues.patch
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.name The queue name.  The queue name must have the following format: `projects/PROJECT_ID/locations/LOCATION_ID/queues/QUEUE_ID`  * `PROJECT_ID` can contain letters ([A-Za-z]), numbers ([0-9]),    hyphens (-), colons (:), or periods (.).    For more information, see    [Identifying projects](/resource-manager/docs/creating-managing-projects#identifying_projects) * `LOCATION_ID` is the canonical ID for the queue's location.    The list of available locations can be obtained by calling    ListLocations.    For more information, see https://cloud.google.com/about/locations/. * `QUEUE_ID` can contain letters ([A-Za-z]), numbers ([0-9]), or   hyphens (-). The maximum length is 100 characters.  Caller-specified and required in CreateQueue, after which it becomes output only.
   * @param {string=} params.updateMask A mask used to specify which fields of the queue are being updated.  If empty, then all fields will be updated.
   * @param {().Queue} params.resource Request body data
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  patch(params?: any, options?: MethodOptions): AxiosPromise<Schema$Queue>;
  patch(
      params?: any, options?: MethodOptions|BodyResponseCallback<Schema$Queue>,
      callback?: BodyResponseCallback<Schema$Queue>): void;
  patch(
      params?: any, options?: MethodOptions|BodyResponseCallback<Schema$Queue>,
      callback?: BodyResponseCallback<Schema$Queue>):
      void|AxiosPromise<Schema$Queue> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://cloudtasks.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url: (rootUrl + '/v2beta2/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
   * still be added when the queue is paused. A queue is paused if its state is
   * PAUSED.
   * @example
   * * // BEFORE RUNNING:
   * // ---------------
   * // 1. If not already done, enable the Cloud Tasks API
   * //    and check the quota for your project at
   * //    https://console.developers.google.com/apis/api/cloudtasks
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
   * var cloudTasks = google.cloudtasks('v2beta2');
   *
   * authorize(function(authClient) {
   *   var request = {
   *     // Required.
   *     // The queue name. For example:
   *     // `projects/PROJECT_ID/location/LOCATION_ID/queues/QUEUE_ID`
   *     name: 'projects/my-project/locations/my-location/queues/my-queue',  //
   * TODO: Update placeholder value.
   *
   *     resource: {
   *       // TODO: Add desired properties to the request body.
   *     },
   *
   *     auth: authClient,
   *   };
   *
   *   cloudTasks.projects.locations.queues.pause(request, function(err,
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
  pause(params?: any, options?: MethodOptions): AxiosPromise<Schema$Queue>;
  pause(
      params?: any, options?: MethodOptions|BodyResponseCallback<Schema$Queue>,
      callback?: BodyResponseCallback<Schema$Queue>): void;
  pause(
      params?: any, options?: MethodOptions|BodyResponseCallback<Schema$Queue>,
      callback?: BodyResponseCallback<Schema$Queue>):
      void|AxiosPromise<Schema$Queue> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://cloudtasks.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url: (rootUrl + '/v2beta2/{+name}:pause')
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
   * before this method is called are permanently deleted.  Purge operations can
   * take up to one minute to take effect. Tasks might be dispatched before the
   * purge takes effect. A purge is irreversible.
   * @example
   * * // BEFORE RUNNING:
   * // ---------------
   * // 1. If not already done, enable the Cloud Tasks API
   * //    and check the quota for your project at
   * //    https://console.developers.google.com/apis/api/cloudtasks
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
   * var cloudTasks = google.cloudtasks('v2beta2');
   *
   * authorize(function(authClient) {
   *   var request = {
   *     // Required.
   *     // The queue name. For example:
   *     // `projects/PROJECT_ID/location/LOCATION_ID/queues/QUEUE_ID`
   *     name: 'projects/my-project/locations/my-location/queues/my-queue',  //
   * TODO: Update placeholder value.
   *
   *     resource: {
   *       // TODO: Add desired properties to the request body.
   *     },
   *
   *     auth: authClient,
   *   };
   *
   *   cloudTasks.projects.locations.queues.purge(request, function(err,
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
  purge(params?: any, options?: MethodOptions): AxiosPromise<Schema$Queue>;
  purge(
      params?: any, options?: MethodOptions|BodyResponseCallback<Schema$Queue>,
      callback?: BodyResponseCallback<Schema$Queue>): void;
  purge(
      params?: any, options?: MethodOptions|BodyResponseCallback<Schema$Queue>,
      callback?: BodyResponseCallback<Schema$Queue>):
      void|AxiosPromise<Schema$Queue> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://cloudtasks.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url: (rootUrl + '/v2beta2/{+name}:purge')
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
   * @desc Resume a queue.  This method resumes a queue after it has been PAUSED
   * or DISABLED. The state of a queue is stored in the queue's state; after
   * calling this method it will be set to RUNNING.  WARNING: Resuming many
   * high-QPS queues at the same time can lead to target overloading. If you are
   * resuming high-QPS queues, follow the 500/50/5 pattern described in
   * [Managing Cloud Tasks Scaling
   * Risks](/cloud-tasks/pdfs/managing-cloud-tasks-scaling-risks-2017-06-05.pdf).
   * @example
   * * // BEFORE RUNNING:
   * // ---------------
   * // 1. If not already done, enable the Cloud Tasks API
   * //    and check the quota for your project at
   * //    https://console.developers.google.com/apis/api/cloudtasks
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
   * var cloudTasks = google.cloudtasks('v2beta2');
   *
   * authorize(function(authClient) {
   *   var request = {
   *     // Required.
   *     // The queue name. For example:
   *     // `projects/PROJECT_ID/location/LOCATION_ID/queues/QUEUE_ID`
   *     name: 'projects/my-project/locations/my-location/queues/my-queue',  //
   * TODO: Update placeholder value.
   *
   *     resource: {
   *       // TODO: Add desired properties to the request body.
   *     },
   *
   *     auth: authClient,
   *   };
   *
   *   cloudTasks.projects.locations.queues.resume(request, function(err,
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
  resume(params?: any, options?: MethodOptions): AxiosPromise<Schema$Queue>;
  resume(
      params?: any, options?: MethodOptions|BodyResponseCallback<Schema$Queue>,
      callback?: BodyResponseCallback<Schema$Queue>): void;
  resume(
      params?: any, options?: MethodOptions|BodyResponseCallback<Schema$Queue>,
      callback?: BodyResponseCallback<Schema$Queue>):
      void|AxiosPromise<Schema$Queue> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://cloudtasks.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url: (rootUrl + '/v2beta2/{+name}:resume')
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
   * policy.  Note: The Cloud Console does not check queue-level IAM permissions
   * yet. Project-level permissions are required to use the Cloud Console.
   * Authorization requires the following [Google IAM](/iam) permission on the
   * specified resource parent:  * `cloudtasks.queues.setIamPolicy`
   * @example
   * * // BEFORE RUNNING:
   * // ---------------
   * // 1. If not already done, enable the Cloud Tasks API
   * //    and check the quota for your project at
   * //    https://console.developers.google.com/apis/api/cloudtasks
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
   * var cloudTasks = google.cloudtasks('v2beta2');
   *
   * authorize(function(authClient) {
   *   var request = {
   *     // REQUIRED: The resource for which the policy is being specified.
   *     // See the operation documentation for the appropriate value for this
   * field. resource_:
   * 'projects/my-project/locations/my-location/queues/my-queue',  // TODO:
   * Update placeholder value.
   *
   *     resource: {
   *       // TODO: Add desired properties to the request body.
   *     },
   *
   *     auth: authClient,
   *   };
   *
   *   cloudTasks.projects.locations.queues.setIamPolicy(request, function(err,
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
    const rootUrl = options.rootUrl || 'https://cloudtasks.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url: (rootUrl + '/v2beta2/{+resource}:setIamPolicy')
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
   * NOT_FOUND error.  Note: This operation is designed to be used for building
   * permission-aware UIs and command-line tools, not for authorization
   * checking. This operation may "fail open" without warning.
   * @example
   * * // BEFORE RUNNING:
   * // ---------------
   * // 1. If not already done, enable the Cloud Tasks API
   * //    and check the quota for your project at
   * //    https://console.developers.google.com/apis/api/cloudtasks
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
   * var cloudTasks = google.cloudtasks('v2beta2');
   *
   * authorize(function(authClient) {
   *   var request = {
   *     // REQUIRED: The resource for which the policy detail is being
   * requested.
   *     // See the operation documentation for the appropriate value for this
   * field. resource_:
   * 'projects/my-project/locations/my-location/queues/my-queue',  // TODO:
   * Update placeholder value.
   *
   *     resource: {
   *       // TODO: Add desired properties to the request body.
   *     },
   *
   *     auth: authClient,
   *   };
   *
   *   cloudTasks.projects.locations.queues.testIamPermissions(request,
   * function(err, response) { if (err) { console.error(err); return;
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
    const rootUrl = options.rootUrl || 'https://cloudtasks.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url: (rootUrl + '/v2beta2/{+resource}:testIamPermissions')
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
   * cloudtasks.projects.locations.queues.tasks.acknowledge
   * @desc Acknowledges a pull task.  The worker, that is, the entity that
   * leased this task must call this method to indicate that the work associated
   * with the task has finished.  The worker must acknowledge a task within the
   * lease_duration or the lease will expire and the task will become available
   * to be leased again. After the task is acknowledged, it will not be returned
   * by a later LeaseTasks, GetTask, or ListTasks.  To acknowledge multiple
   * tasks at the same time, use [HTTP
   * batching](/storage/docs/json_api/v1/how-tos/batch) or the batching
   * documentation for your client library, for example
   * https://developers.google.com/api-client-library/python/guide/batch.
   * @example
   * * // BEFORE RUNNING:
   * // ---------------
   * // 1. If not already done, enable the Cloud Tasks API
   * //    and check the quota for your project at
   * //    https://console.developers.google.com/apis/api/cloudtasks
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
   * var cloudTasks = google.cloudtasks('v2beta2');
   *
   * authorize(function(authClient) {
   *   var request = {
   *     // Required.
   *     // The task name. For example:
   *     //
   * `projects/PROJECT_ID/locations/LOCATION_ID/queues/QUEUE_ID/tasks/TASK_ID`
   *     name:
   * 'projects/my-project/locations/my-location/queues/my-queue/tasks/my-task',
   * // TODO: Update placeholder value.
   *
   *     resource: {
   *       // TODO: Add desired properties to the request body.
   *     },
   *
   *     auth: authClient,
   *   };
   *
   *   cloudTasks.projects.locations.queues.tasks.acknowledge(request,
   * function(err) { if (err) { console.error(err); return;
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
   * @alias cloudtasks.projects.locations.queues.tasks.acknowledge
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.name Required.  The task name. For example: `projects/PROJECT_ID/locations/LOCATION_ID/queues/QUEUE_ID/tasks/TASK_ID`
   * @param {().AcknowledgeTaskRequest} params.resource Request body data
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
    const rootUrl = options.rootUrl || 'https://cloudtasks.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url: (rootUrl + '/v2beta2/{+name}:acknowledge')
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
      createAPIRequest<Schema$Empty>(parameters, callback);
    } else {
      return createAPIRequest<Schema$Empty>(parameters);
    }
  }


  /**
   * cloudtasks.projects.locations.queues.tasks.cancelLease
   * @desc Cancel a pull task's lease.  The worker can use this method to cancel
   * a task's lease by setting its schedule_time to now. This will make the task
   * available to be leased to the next caller of LeaseTasks.
   * @example
   * * // BEFORE RUNNING:
   * // ---------------
   * // 1. If not already done, enable the Cloud Tasks API
   * //    and check the quota for your project at
   * //    https://console.developers.google.com/apis/api/cloudtasks
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
   * var cloudTasks = google.cloudtasks('v2beta2');
   *
   * authorize(function(authClient) {
   *   var request = {
   *     // Required.
   *     // The task name. For example:
   *     //
   * `projects/PROJECT_ID/locations/LOCATION_ID/queues/QUEUE_ID/tasks/TASK_ID`
   *     name:
   * 'projects/my-project/locations/my-location/queues/my-queue/tasks/my-task',
   * // TODO: Update placeholder value.
   *
   *     resource: {
   *       // TODO: Add desired properties to the request body.
   *     },
   *
   *     auth: authClient,
   *   };
   *
   *   cloudTasks.projects.locations.queues.tasks.cancelLease(request,
   * function(err, response) { if (err) { console.error(err); return;
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
   * @alias cloudtasks.projects.locations.queues.tasks.cancelLease
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.name Required.  The task name. For example: `projects/PROJECT_ID/locations/LOCATION_ID/queues/QUEUE_ID/tasks/TASK_ID`
   * @param {().CancelLeaseRequest} params.resource Request body data
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  cancelLease(params?: any, options?: MethodOptions): AxiosPromise<Schema$Task>;
  cancelLease(
      params?: any, options?: MethodOptions|BodyResponseCallback<Schema$Task>,
      callback?: BodyResponseCallback<Schema$Task>): void;
  cancelLease(
      params?: any, options?: MethodOptions|BodyResponseCallback<Schema$Task>,
      callback?: BodyResponseCallback<Schema$Task>):
      void|AxiosPromise<Schema$Task> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://cloudtasks.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url: (rootUrl + '/v2beta2/{+name}:cancelLease')
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


  /**
   * cloudtasks.projects.locations.queues.tasks.create
   * @desc Creates a task and adds it to a queue.  To add multiple tasks at the
   * same time, use [HTTP batching](/storage/docs/json_api/v1/how-tos/batch) or
   * the batching documentation for your client library, for example
   * https://developers.google.com/api-client-library/python/guide/batch.  Tasks
   * cannot be updated after creation; there is no UpdateTask command.  * For
   * [App Engine queues](google.cloud.tasks.v2beta2.AppEngineHttpTarget),   the
   * maximum task size is 100KB. * For [pull
   * queues](google.cloud.tasks.v2beta2.PullTarget), this   the maximum task
   * size is 1MB.
   * @example
   * * // BEFORE RUNNING:
   * // ---------------
   * // 1. If not already done, enable the Cloud Tasks API
   * //    and check the quota for your project at
   * //    https://console.developers.google.com/apis/api/cloudtasks
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
   * var cloudTasks = google.cloudtasks('v2beta2');
   *
   * authorize(function(authClient) {
   *   var request = {
   *     // Required.
   *     // The queue name. For example:
   *     // `projects/PROJECT_ID/locations/LOCATION_ID/queues/QUEUE_ID`
   *     // The queue must already exist.
   *     parent: 'projects/my-project/locations/my-location/queues/my-queue', //
   * TODO: Update placeholder value.
   *
   *     resource: {
   *       // TODO: Add desired properties to the request body.
   *     },
   *
   *     auth: authClient,
   *   };
   *
   *   cloudTasks.projects.locations.queues.tasks.create(request, function(err,
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
  create(params?: any, options?: MethodOptions): AxiosPromise<Schema$Task>;
  create(
      params?: any, options?: MethodOptions|BodyResponseCallback<Schema$Task>,
      callback?: BodyResponseCallback<Schema$Task>): void;
  create(
      params?: any, options?: MethodOptions|BodyResponseCallback<Schema$Task>,
      callback?: BodyResponseCallback<Schema$Task>):
      void|AxiosPromise<Schema$Task> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://cloudtasks.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url: (rootUrl + '/v2beta2/{+parent}/tasks')
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
   * dispatched. A task cannot be deleted if it has completed successfully or
   * permanently failed.
   * @example
   * * // BEFORE RUNNING:
   * // ---------------
   * // 1. If not already done, enable the Cloud Tasks API
   * //    and check the quota for your project at
   * //    https://console.developers.google.com/apis/api/cloudtasks
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
   * var cloudTasks = google.cloudtasks('v2beta2');
   *
   * authorize(function(authClient) {
   *   var request = {
   *     // Required.
   *     // The task name. For example:
   *     //
   * `projects/PROJECT_ID/locations/LOCATION_ID/queues/QUEUE_ID/tasks/TASK_ID`
   *     name:
   * 'projects/my-project/locations/my-location/queues/my-queue/tasks/my-task',
   * // TODO: Update placeholder value.
   *
   *     auth: authClient,
   *   };
   *
   *   cloudTasks.projects.locations.queues.tasks.delete(request, function(err)
   * { if (err) { console.error(err); return;
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
   * @alias cloudtasks.projects.locations.queues.tasks.delete
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.name Required.  The task name. For example: `projects/PROJECT_ID/locations/LOCATION_ID/queues/QUEUE_ID/tasks/TASK_ID`
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
    const rootUrl = options.rootUrl || 'https://cloudtasks.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url: (rootUrl + '/v2beta2/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
   * @example
   * * // BEFORE RUNNING:
   * // ---------------
   * // 1. If not already done, enable the Cloud Tasks API
   * //    and check the quota for your project at
   * //    https://console.developers.google.com/apis/api/cloudtasks
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
   * var cloudTasks = google.cloudtasks('v2beta2');
   *
   * authorize(function(authClient) {
   *   var request = {
   *     // Required.
   *     // The task name. For example:
   *     //
   * `projects/PROJECT_ID/locations/LOCATION_ID/queues/QUEUE_ID/tasks/TASK_ID`
   *     name:
   * 'projects/my-project/locations/my-location/queues/my-queue/tasks/my-task',
   * // TODO: Update placeholder value.
   *
   *     auth: authClient,
   *   };
   *
   *   cloudTasks.projects.locations.queues.tasks.get(request, function(err,
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
   * @alias cloudtasks.projects.locations.queues.tasks.get
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.name Required.  The task name. For example: `projects/PROJECT_ID/locations/LOCATION_ID/queues/QUEUE_ID/tasks/TASK_ID`
   * @param {string=} params.responseView The response_view specifies which subset of the Task will be returned.  By default response_view is BASIC; not all information is retrieved by default because some data, such as payloads, might be desirable to return only when needed because of its large size or because of the sensitivity of data that it contains.  Authorization for FULL requires `cloudtasks.tasks.fullView` [Google IAM](/iam/) permission on the Task resource.
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  get(params?: any, options?: MethodOptions): AxiosPromise<Schema$Task>;
  get(params?: any, options?: MethodOptions|BodyResponseCallback<Schema$Task>,
      callback?: BodyResponseCallback<Schema$Task>): void;
  get(params?: any, options?: MethodOptions|BodyResponseCallback<Schema$Task>,
      callback?: BodyResponseCallback<Schema$Task>):
      void|AxiosPromise<Schema$Task> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://cloudtasks.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url: (rootUrl + '/v2beta2/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
   * cloudtasks.projects.locations.queues.tasks.lease
   * @desc Leases tasks from a pull queue for lease_duration.  This method is
   * invoked by the worker to obtain a lease. The worker must acknowledge the
   * task via AcknowledgeTask after they have performed the work associated with
   * the task.  The payload is intended to store data that the worker needs to
   * perform the work associated with the task. To return the payloads in the
   * response, set response_view to FULL.  A maximum of 10 qps of LeaseTasks
   * requests are allowed per queue. RESOURCE_EXHAUSTED is returned when this
   * limit is exceeded. RESOURCE_EXHAUSTED is also returned when
   * max_tasks_dispatched_per_second is exceeded.
   * @alias cloudtasks.projects.locations.queues.tasks.lease
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.parent Required.  The queue name. For example: `projects/PROJECT_ID/locations/LOCATION_ID/queues/QUEUE_ID`
   * @param {().LeaseTasksRequest} params.resource Request body data
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  lease(params?: any, options?: MethodOptions):
      AxiosPromise<Schema$LeaseTasksResponse>;
  lease(
      params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$LeaseTasksResponse>,
      callback?: BodyResponseCallback<Schema$LeaseTasksResponse>): void;
  lease(
      params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$LeaseTasksResponse>,
      callback?: BodyResponseCallback<Schema$LeaseTasksResponse>):
      void|AxiosPromise<Schema$LeaseTasksResponse> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://cloudtasks.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url: (rootUrl + '/v2beta2/{+parent}/tasks:lease')
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
      createAPIRequest<Schema$LeaseTasksResponse>(parameters, callback);
    } else {
      return createAPIRequest<Schema$LeaseTasksResponse>(parameters);
    }
  }


  /**
   * cloudtasks.projects.locations.queues.tasks.list
   * @desc Lists the tasks in a queue.  By default, only the BASIC view is
   * retrieved due to performance considerations; response_view controls the
   * subset of information which is returned.
   * @example
   * * // BEFORE RUNNING:
   * // ---------------
   * // 1. If not already done, enable the Cloud Tasks API
   * //    and check the quota for your project at
   * //    https://console.developers.google.com/apis/api/cloudtasks
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
   * var cloudTasks = google.cloudtasks('v2beta2');
   *
   * authorize(function(authClient) {
   *   var request = {
   *     // Required.
   *     // The queue name. For example:
   *     // `projects/PROJECT_ID/locations/LOCATION_ID/queues/QUEUE_ID`
   *     parent: 'projects/my-project/locations/my-location/queues/my-queue', //
   * TODO: Update placeholder value.
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
   *     var tasksPage = response['tasks'];
   *     if (!tasksPage) {
   *       return;
   *     }
   *     for (var i = 0; i < tasksPage.length; i++) {
   *       // TODO: Change code below to process each resource in `tasksPage`:
   *       console.log(JSON.stringify(tasksPage[i], null, 2));
   *     }
   *
   *     if (response.nextPageToken) {
   *       request.pageToken = response.nextPageToken;
   *       cloudTasks.projects.locations.queues.tasks.list(request, handlePage);
   *     }
   *   };
   *
   *   cloudTasks.projects.locations.queues.tasks.list(request, handlePage);
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
   * @alias cloudtasks.projects.locations.queues.tasks.list
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string=} params.orderBy Sort order used for the query. The only fields supported for sorting are `schedule_time` and `pull_message.tag`. All results will be returned in approximately ascending order. The default ordering is by `schedule_time`.
   * @param {integer=} params.pageSize Requested page size. Fewer tasks than requested might be returned.  The maximum page size is 1000. If unspecified, the page size will be the maximum. Fewer tasks than requested might be returned, even if more tasks exist; use next_page_token in the response to determine if more tasks exist.
   * @param {string=} params.pageToken A token identifying the page of results to return.  To request the first page results, page_token must be empty. To request the next page of results, page_token must be the value of next_page_token returned from the previous call to ListTasks method.  The page token is valid for only 2 hours.
   * @param {string} params.parent Required.  The queue name. For example: `projects/PROJECT_ID/locations/LOCATION_ID/queues/QUEUE_ID`
   * @param {string=} params.responseView The response_view specifies which subset of the Task will be returned.  By default response_view is BASIC; not all information is retrieved by default because some data, such as payloads, might be desirable to return only when needed because of its large size or because of the sensitivity of data that it contains.  Authorization for FULL requires `cloudtasks.tasks.fullView` [Google IAM](/iam/) permission on the Task resource.
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  list(params?: any, options?: MethodOptions):
      AxiosPromise<Schema$ListTasksResponse>;
  list(
      params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$ListTasksResponse>,
      callback?: BodyResponseCallback<Schema$ListTasksResponse>): void;
  list(
      params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$ListTasksResponse>,
      callback?: BodyResponseCallback<Schema$ListTasksResponse>):
      void|AxiosPromise<Schema$ListTasksResponse> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://cloudtasks.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url: (rootUrl + '/v2beta2/{+parent}/tasks')
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
   * cloudtasks.projects.locations.queues.tasks.renewLease
   * @desc Renew the current lease of a pull task.  The worker can use this
   * method to extend the lease by a new duration, starting from now. The new
   * task lease will be returned in the task's schedule_time.
   * @example
   * * // BEFORE RUNNING:
   * // ---------------
   * // 1. If not already done, enable the Cloud Tasks API
   * //    and check the quota for your project at
   * //    https://console.developers.google.com/apis/api/cloudtasks
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
   * var cloudTasks = google.cloudtasks('v2beta2');
   *
   * authorize(function(authClient) {
   *   var request = {
   *     // Required.
   *     // The task name. For example:
   *     //
   * `projects/PROJECT_ID/locations/LOCATION_ID/queues/QUEUE_ID/tasks/TASK_ID`
   *     name:
   * 'projects/my-project/locations/my-location/queues/my-queue/tasks/my-task',
   * // TODO: Update placeholder value.
   *
   *     resource: {
   *       // TODO: Add desired properties to the request body.
   *     },
   *
   *     auth: authClient,
   *   };
   *
   *   cloudTasks.projects.locations.queues.tasks.renewLease(request,
   * function(err, response) { if (err) { console.error(err); return;
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
   * @alias cloudtasks.projects.locations.queues.tasks.renewLease
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.name Required.  The task name. For example: `projects/PROJECT_ID/locations/LOCATION_ID/queues/QUEUE_ID/tasks/TASK_ID`
   * @param {().RenewLeaseRequest} params.resource Request body data
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  renewLease(params?: any, options?: MethodOptions): AxiosPromise<Schema$Task>;
  renewLease(
      params?: any, options?: MethodOptions|BodyResponseCallback<Schema$Task>,
      callback?: BodyResponseCallback<Schema$Task>): void;
  renewLease(
      params?: any, options?: MethodOptions|BodyResponseCallback<Schema$Task>,
      callback?: BodyResponseCallback<Schema$Task>):
      void|AxiosPromise<Schema$Task> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://cloudtasks.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url: (rootUrl + '/v2beta2/{+name}:renewLease')
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


  /**
   * cloudtasks.projects.locations.queues.tasks.run
   * @desc Forces a task to run now.  This command is meant to be used for
   * manual debugging. For example, RunTask can be used to retry a failed task
   * after a fix has been made or to manually force a task to be dispatched now.
   * When this method is called, Cloud Tasks will dispatch the task to its
   * target, even if the queue is PAUSED.  The dispatched task is returned. That
   * is, the task that is returned contains the status after the task is
   * dispatched but before the task is received by its target.  If Cloud Tasks
   * receives a successful response from the task's handler, then the task will
   * be deleted; otherwise the task's schedule_time will be reset to the time
   * that RunTask was called plus the retry delay specified in the queue and
   * task's RetryConfig.  RunTask returns NOT_FOUND when it is called on a task
   * that has already succeeded or permanently failed. FAILED_PRECONDITION is
   * returned when RunTask is called on task that is dispatched or already
   * running.  RunTask cannot be called on pull tasks.
   * @example
   * * // BEFORE RUNNING:
   * // ---------------
   * // 1. If not already done, enable the Cloud Tasks API
   * //    and check the quota for your project at
   * //    https://console.developers.google.com/apis/api/cloudtasks
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
   * var cloudTasks = google.cloudtasks('v2beta2');
   *
   * authorize(function(authClient) {
   *   var request = {
   *     // Required.
   *     // The task name. For example:
   *     //
   * `projects/PROJECT_ID/locations/LOCATION_ID/queues/QUEUE_ID/tasks/TASK_ID`
   *     name:
   * 'projects/my-project/locations/my-location/queues/my-queue/tasks/my-task',
   * // TODO: Update placeholder value.
   *
   *     resource: {
   *       // TODO: Add desired properties to the request body.
   *     },
   *
   *     auth: authClient,
   *   };
   *
   *   cloudTasks.projects.locations.queues.tasks.run(request, function(err,
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
  run(params?: any, options?: MethodOptions): AxiosPromise<Schema$Task>;
  run(params?: any, options?: MethodOptions|BodyResponseCallback<Schema$Task>,
      callback?: BodyResponseCallback<Schema$Task>): void;
  run(params?: any, options?: MethodOptions|BodyResponseCallback<Schema$Task>,
      callback?: BodyResponseCallback<Schema$Task>):
      void|AxiosPromise<Schema$Task> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://cloudtasks.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url: (rootUrl + '/v2beta2/{+name}:run')
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
