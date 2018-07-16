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

import {BodyResponseCallback, createAPIRequest, GlobalOptions, GoogleConfigurable, MethodOptions} from '../../shared/src';

// tslint:disable: no-any
// tslint:disable: class-name
// tslint:disable: variable-name
// tslint:disable: jsdoc-format
// tslint:disable: no-namespace

export namespace runtimeconfig_v1beta1 {
  export interface Options extends GlobalOptions {
    version: 'v1beta1';
  }

  /**
   * Cloud Runtime Configuration API
   *
   * The Runtime Configurator allows you to dynamically configure and expose
   * variables through Google Cloud Platform. In addition, you can also set
   * Watchers and Waiters that will watch for changes to your data and return
   * based on certain conditions.
   *
   * @example
   * const {google} = require('googleapis');
   * const runtimeconfig = google.runtimeconfig('v1beta1');
   *
   * @namespace runtimeconfig
   * @type {Function}
   * @version v1beta1
   * @variation v1beta1
   * @param {object=} options Options for Runtimeconfig
   */
  export class Runtimeconfig {
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
   * Associates `members` with a `role`.
   */
  export interface Schema$Binding {
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
     * `roles/editor`, or `roles/owner`. Required
     */
    role?: string;
  }
  /**
   * A Cardinality condition for the Waiter resource. A cardinality condition is
   * met when the number of variables under a specified path prefix reaches a
   * predefined number. For example, if you set a Cardinality condition where
   * the `path` is set to `/foo` and the number of paths is set to 2, the
   * following variables would meet the condition in a RuntimeConfig resource:
   * + `/foo/variable1 = &quot;value1&quot;` + `/foo/variable2 =
   * &quot;value2&quot;` + `/bar/variable3 = &quot;value3&quot;`  It would not
   * would not satisify the same condition with the `number` set to 3, however,
   * because there is only 2 paths that start with `/foo`. Cardinality
   * conditions are recursive; all subtrees under the specific path prefix are
   * counted.
   */
  export interface Schema$Cardinality {
    /**
     * The number variables under the `path` that must exist to meet this
     * condition. Defaults to 1 if not specified.
     */
    number?: number;
    /**
     * The root of the variable subtree to monitor. For example, `/foo`.
     */
    path?: string;
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
   * The condition that a Waiter resource is waiting for.
   */
  export interface Schema$EndCondition {
    /**
     * The cardinality of the `EndCondition`.
     */
    cardinality?: Schema$Cardinality;
  }
  /**
   * `ListConfigs()` returns the following response. The order of returned
   * objects is arbitrary; that is, it is not ordered in any particular way.
   */
  export interface Schema$ListConfigsResponse {
    /**
     * A list of the configurations in the project. The order of returned
     * objects is arbitrary; that is, it is not ordered in any particular way.
     */
    configs?: Schema$RuntimeConfig[];
    /**
     * This token allows you to get the next page of results for list requests.
     * If the number of results is larger than `pageSize`, use the
     * `nextPageToken` as a value for the query parameter `pageToken` in the
     * next list request. Subsequent list requests will have their own
     * `nextPageToken` to continue paging through the results
     */
    nextPageToken?: string;
  }
  /**
   * Response for the `ListVariables()` method.
   */
  export interface Schema$ListVariablesResponse {
    /**
     * This token allows you to get the next page of results for list requests.
     * If the number of results is larger than `pageSize`, use the
     * `nextPageToken` as a value for the query parameter `pageToken` in the
     * next list request. Subsequent list requests will have their own
     * `nextPageToken` to continue paging through the results
     */
    nextPageToken?: string;
    /**
     * A list of variables and their values. The order of returned variable
     * objects is arbitrary.
     */
    variables?: Schema$Variable[];
  }
  /**
   * Response for the `ListWaiters()` method. Order of returned waiter objects
   * is arbitrary.
   */
  export interface Schema$ListWaitersResponse {
    /**
     * This token allows you to get the next page of results for list requests.
     * If the number of results is larger than `pageSize`, use the
     * `nextPageToken` as a value for the query parameter `pageToken` in the
     * next list request. Subsequent list requests will have their own
     * `nextPageToken` to continue paging through the results
     */
    nextPageToken?: string;
    /**
     * Found waiters in the project.
     */
    waiters?: Schema$Waiter[];
  }
  /**
   * This resource represents a long-running operation that is the result of a
   * network API call.
   */
  export interface Schema$Operation {
    /**
     * If the value is `false`, it means the operation is still in progress. If
     * `true`, the operation is completed, and either `error` or `response` is
     * available.
     */
    done?: boolean;
    /**
     * The error result of the operation in case of failure or cancellation.
     */
    error?: Schema$Status;
    /**
     * Service-specific metadata associated with the operation.  It typically
     * contains progress information and common metadata such as create time.
     * Some services might not provide such metadata.  Any method that returns a
     * long-running operation should document the metadata type, if any.
     */
    metadata?: any;
    /**
     * The server-assigned name, which is only unique within the same service
     * that originally returns it. If you use the default HTTP mapping, the
     * `name` should have the format of `operations/some/unique/name`.
     */
    name?: string;
    /**
     * The normal response of the operation in case of success.  If the original
     * method returns no data on success, such as `Delete`, the response is
     * `google.protobuf.Empty`.  If the original method is standard
     * `Get`/`Create`/`Update`, the response should be the resource.  For other
     * methods, the response should have the type `XxxResponse`, where `Xxx` is
     * the original method name.  For example, if the original method name is
     * `TakeSnapshot()`, the inferred response type is `TakeSnapshotResponse`.
     */
    response?: any;
  }
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
   * A RuntimeConfig resource is the primary resource in the Cloud RuntimeConfig
   * service. A RuntimeConfig resource consists of metadata and a hierarchy of
   * variables.
   */
  export interface Schema$RuntimeConfig {
    /**
     * An optional description of the RuntimeConfig object.
     */
    description?: string;
    /**
     * The resource name of a runtime config. The name must have the format:
     * projects/[PROJECT_ID]/configs/[CONFIG_NAME]  The `[PROJECT_ID]` must be a
     * valid project ID, and `[CONFIG_NAME]` is an arbitrary name that matches
     * the `[0-9A-Za-z](?:[_.A-Za-z0-9-]{0,62}[_.A-Za-z0-9])?` regular
     * expression. The length of `[CONFIG_NAME]` must be less than 64
     * characters.  You pick the RuntimeConfig resource name, but the server
     * will validate that the name adheres to this format. After you create the
     * resource, you cannot change the resource&#39;s name.
     */
    name?: string;
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
    details?: any[];
    /**
     * A developer-facing error message, which should be in English. Any
     * user-facing error message should be localized and sent in the
     * google.rpc.Status.details field, or localized by the client.
     */
    message?: string;
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
  /**
   * Describes a single variable within a RuntimeConfig resource. The name
   * denotes the hierarchical variable name. For example, `ports/serving_port`
   * is a valid variable name. The variable value is an opaque string and only
   * leaf variables can have values (that is, variables that do not have any
   * child variables).
   */
  export interface Schema$Variable {
    /**
     * The name of the variable resource, in the format:
     * projects/[PROJECT_ID]/configs/[CONFIG_NAME]/variables/[VARIABLE_NAME] The
     * `[PROJECT_ID]` must be a valid project ID, `[CONFIG_NAME]` must be a
     * valid RuntimeConfig reource and `[VARIABLE_NAME]` follows Unix file
     * system file path naming.  The `[VARIABLE_NAME]` can contain ASCII
     * letters, numbers, slashes and dashes. Slashes are used as path element
     * separators and are not part of the `[VARIABLE_NAME]` itself, so
     * `[VARIABLE_NAME]` must contain at least one non-slash character. Multiple
     * slashes are coalesced into single slash character. Each path segment
     * should match [0-9A-Za-z](?:[_.A-Za-z0-9-]{0,62}[_.A-Za-z0-9])? regular
     * expression. The length of a `[VARIABLE_NAME]` must be less than 256
     * characters.  Once you create a variable, you cannot change the variable
     * name.
     */
    name?: string;
    /**
     * [Ouput only] The current state of the variable. The variable state
     * indicates the outcome of the `variables().watch` call and is visible
     * through the `get` and `list` calls.
     */
    state?: string;
    /**
     * The string value of the variable. The length of the value must be less
     * than 4096 bytes. Empty values are also accepted. For example, `text:
     * &quot;my text value&quot;`. The string must be valid UTF-8.
     */
    text?: string;
    /**
     * Output only. The time of the last variable update.
     */
    updateTime?: string;
    /**
     * The binary value of the variable. The length of the value must be less
     * than 4096 bytes. Empty values are also accepted. The value must be base64
     * encoded. Only one of `value` or `text` can be set.
     */
    value?: string;
  }
  /**
   * A Waiter resource waits for some end condition within a RuntimeConfig
   * resource to be met before it returns. For example, assume you have a
   * distributed system where each node writes to a Variable resource
   * indidicating the node&#39;s readiness as part of the startup process.  You
   * then configure a Waiter resource with the success condition set to wait
   * until some number of nodes have checked in. Afterwards, your application
   * runs some arbitrary code after the condition has been met and the waiter
   * returns successfully.  Once created, a Waiter resource is immutable.  To
   * learn more about using waiters, read the [Creating a
   * Waiter](/deployment-manager/runtime-configurator/creating-a-waiter)
   * documentation.
   */
  export interface Schema$Waiter {
    /**
     * Output only. The instant at which this Waiter resource was created.
     * Adding the value of `timeout` to this instant yields the timeout deadline
     * for the waiter.
     */
    createTime?: string;
    /**
     * Output only. If the value is `false`, it means the waiter is still
     * waiting for one of its conditions to be met.  If true, the waiter has
     * finished. If the waiter finished due to a timeout or failure, `error`
     * will be set.
     */
    done?: boolean;
    /**
     * Output only. If the waiter ended due to a failure or timeout, this value
     * will be set.
     */
    error?: Schema$Status;
    /**
     * [Optional] The failure condition of this waiter. If this condition is
     * met, `done` will be set to `true` and the `error` code will be set to
     * `ABORTED`. The failure condition takes precedence over the success
     * condition. If both conditions are met, a failure will be indicated. This
     * value is optional; if no failure condition is set, the only failure
     * scenario will be a timeout.
     */
    failure?: Schema$EndCondition;
    /**
     * The name of the Waiter resource, in the format:
     * projects/[PROJECT_ID]/configs/[CONFIG_NAME]/waiters/[WAITER_NAME]  The
     * `[PROJECT_ID]` must be a valid Google Cloud project ID, the
     * `[CONFIG_NAME]` must be a valid RuntimeConfig resource, the
     * `[WAITER_NAME]` must match RFC 1035 segment specification, and the length
     * of `[WAITER_NAME]` must be less than 64 bytes.  After you create a Waiter
     * resource, you cannot change the resource name.
     */
    name?: string;
    /**
     * [Required] The success condition. If this condition is met, `done` will
     * be set to `true` and the `error` value will remain unset. The failure
     * condition takes precedence over the success condition. If both conditions
     * are met, a failure will be indicated.
     */
    success?: Schema$EndCondition;
    /**
     * [Required] Specifies the timeout of the waiter in seconds, beginning from
     * the instant that `waiters().create` method is called. If this time
     * elapses before the success or failure conditions are met, the waiter
     * fails and sets the `error` code to `DEADLINE_EXCEEDED`.
     */
    timeout?: string;
  }
  /**
   * Request for the `WatchVariable()` method.
   */
  export interface Schema$WatchVariableRequest {
    /**
     * If specified, checks the current timestamp of the variable and if the
     * current timestamp is newer than `newerThan` timestamp, the method returns
     * immediately.  If not specified or the variable has an older timestamp,
     * the watcher waits for a the value to change before returning.
     */
    newerThan?: string;
  }


  export class Resource$Projects {
    root: Runtimeconfig;
    configs: Resource$Projects$Configs;
    constructor(root: Runtimeconfig) {
      this.root = root;
      this.getRoot.bind(this);
      this.configs = new Resource$Projects$Configs(root);
    }

    getRoot() {
      return this.root;
    }
  }


  export class Resource$Projects$Configs {
    root: Runtimeconfig;
    operations: Resource$Projects$Configs$Operations;
    variables: Resource$Projects$Configs$Variables;
    waiters: Resource$Projects$Configs$Waiters;
    constructor(root: Runtimeconfig) {
      this.root = root;
      this.getRoot.bind(this);
      this.operations = new Resource$Projects$Configs$Operations(root);
      this.variables = new Resource$Projects$Configs$Variables(root);
      this.waiters = new Resource$Projects$Configs$Waiters(root);
    }

    getRoot() {
      return this.root;
    }


    /**
     * runtimeconfig.projects.configs.create
     * @desc Creates a new RuntimeConfig resource. The configuration name must
     * be unique within project.
     * @alias runtimeconfig.projects.configs.create
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.parent The [project ID](https://support.google.com/cloud/answer/6158840?hl=en&ref_topic=6158848) for this request, in the format `projects/[PROJECT_ID]`.
     * @param {string=} params.requestId An optional but recommended unique `request_id`. If the server receives two `create()` requests  with the same `request_id`, then the second request will be ignored and the first resource created and stored in the backend is returned. Empty `request_id` fields are ignored.  It is responsibility of the client to ensure uniqueness of the `request_id` strings.  `request_id` strings are limited to 64 characters.
     * @param {().RuntimeConfig} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    create(
        params?: Params$Resource$Projects$Configs$Create,
        options?: MethodOptions): AxiosPromise<Schema$RuntimeConfig>;
    create(
        params: Params$Resource$Projects$Configs$Create,
        options: MethodOptions|BodyResponseCallback<Schema$RuntimeConfig>,
        callback: BodyResponseCallback<Schema$RuntimeConfig>): void;
    create(
        params: Params$Resource$Projects$Configs$Create,
        callback: BodyResponseCallback<Schema$RuntimeConfig>): void;
    create(callback: BodyResponseCallback<Schema$RuntimeConfig>): void;
    create(
        paramsOrCallback?: Params$Resource$Projects$Configs$Create|
        BodyResponseCallback<Schema$RuntimeConfig>,
        optionsOrCallback?: MethodOptions|
        BodyResponseCallback<Schema$RuntimeConfig>,
        callback?: BodyResponseCallback<Schema$RuntimeConfig>):
        void|AxiosPromise<Schema$RuntimeConfig> {
      let params =
          (paramsOrCallback || {}) as Params$Resource$Projects$Configs$Create;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Configs$Create;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
          options.rootUrl || 'https://runtimeconfig.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl + '/v1beta1/{+parent}/configs')
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
        createAPIRequest<Schema$RuntimeConfig>(parameters, callback);
      } else {
        return createAPIRequest<Schema$RuntimeConfig>(parameters);
      }
    }


    /**
     * runtimeconfig.projects.configs.delete
     * @desc Deletes a RuntimeConfig resource.
     * @alias runtimeconfig.projects.configs.delete
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.name The RuntimeConfig resource to delete, in the format:  `projects/[PROJECT_ID]/configs/[CONFIG_NAME]`
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    delete(
        params?: Params$Resource$Projects$Configs$Delete,
        options?: MethodOptions): AxiosPromise<Schema$Empty>;
    delete(
        params: Params$Resource$Projects$Configs$Delete,
        options: MethodOptions|BodyResponseCallback<Schema$Empty>,
        callback: BodyResponseCallback<Schema$Empty>): void;
    delete(
        params: Params$Resource$Projects$Configs$Delete,
        callback: BodyResponseCallback<Schema$Empty>): void;
    delete(callback: BodyResponseCallback<Schema$Empty>): void;
    delete(
        paramsOrCallback?: Params$Resource$Projects$Configs$Delete|
        BodyResponseCallback<Schema$Empty>,
        optionsOrCallback?: MethodOptions|BodyResponseCallback<Schema$Empty>,
        callback?: BodyResponseCallback<Schema$Empty>):
        void|AxiosPromise<Schema$Empty> {
      let params =
          (paramsOrCallback || {}) as Params$Resource$Projects$Configs$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Configs$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
          options.rootUrl || 'https://runtimeconfig.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl + '/v1beta1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
     * runtimeconfig.projects.configs.get
     * @desc Gets information about a RuntimeConfig resource.
     * @alias runtimeconfig.projects.configs.get
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.name The name of the RuntimeConfig resource to retrieve, in the format:  `projects/[PROJECT_ID]/configs/[CONFIG_NAME]`
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    get(params?: Params$Resource$Projects$Configs$Get,
        options?: MethodOptions): AxiosPromise<Schema$RuntimeConfig>;
    get(params: Params$Resource$Projects$Configs$Get,
        options: MethodOptions|BodyResponseCallback<Schema$RuntimeConfig>,
        callback: BodyResponseCallback<Schema$RuntimeConfig>): void;
    get(params: Params$Resource$Projects$Configs$Get,
        callback: BodyResponseCallback<Schema$RuntimeConfig>): void;
    get(callback: BodyResponseCallback<Schema$RuntimeConfig>): void;
    get(paramsOrCallback?: Params$Resource$Projects$Configs$Get|
        BodyResponseCallback<Schema$RuntimeConfig>,
        optionsOrCallback?: MethodOptions|
        BodyResponseCallback<Schema$RuntimeConfig>,
        callback?: BodyResponseCallback<Schema$RuntimeConfig>):
        void|AxiosPromise<Schema$RuntimeConfig> {
      let params =
          (paramsOrCallback || {}) as Params$Resource$Projects$Configs$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Configs$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
          options.rootUrl || 'https://runtimeconfig.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl + '/v1beta1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
              method: 'GET'
            },
            options),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<Schema$RuntimeConfig>(parameters, callback);
      } else {
        return createAPIRequest<Schema$RuntimeConfig>(parameters);
      }
    }


    /**
     * runtimeconfig.projects.configs.getIamPolicy
     * @desc Gets the access control policy for a resource. Returns an empty
     * policy if the resource exists and does not have a policy set.
     * @alias runtimeconfig.projects.configs.getIamPolicy
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.resource_ REQUIRED: The resource for which the policy is being requested. See the operation documentation for the appropriate value for this field.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    getIamPolicy(
        params?: Params$Resource$Projects$Configs$Getiampolicy,
        options?: MethodOptions): AxiosPromise<Schema$Policy>;
    getIamPolicy(
        params: Params$Resource$Projects$Configs$Getiampolicy,
        options: MethodOptions|BodyResponseCallback<Schema$Policy>,
        callback: BodyResponseCallback<Schema$Policy>): void;
    getIamPolicy(
        params: Params$Resource$Projects$Configs$Getiampolicy,
        callback: BodyResponseCallback<Schema$Policy>): void;
    getIamPolicy(callback: BodyResponseCallback<Schema$Policy>): void;
    getIamPolicy(
        paramsOrCallback?: Params$Resource$Projects$Configs$Getiampolicy|
        BodyResponseCallback<Schema$Policy>,
        optionsOrCallback?: MethodOptions|BodyResponseCallback<Schema$Policy>,
        callback?: BodyResponseCallback<Schema$Policy>):
        void|AxiosPromise<Schema$Policy> {
      let params = (paramsOrCallback || {}) as
          Params$Resource$Projects$Configs$Getiampolicy;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Configs$Getiampolicy;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
          options.rootUrl || 'https://runtimeconfig.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl + '/v1beta1/{+resource}:getIamPolicy')
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
     * runtimeconfig.projects.configs.list
     * @desc Lists all the RuntimeConfig resources within project.
     * @alias runtimeconfig.projects.configs.list
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {integer=} params.pageSize Specifies the number of results to return per page. If there are fewer elements than the specified number, returns all elements.
     * @param {string=} params.pageToken Specifies a page token to use. Set `pageToken` to a `nextPageToken` returned by a previous list request to get the next page of results.
     * @param {string} params.parent The [project ID](https://support.google.com/cloud/answer/6158840?hl=en&ref_topic=6158848) for this request, in the format `projects/[PROJECT_ID]`.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list(
        params?: Params$Resource$Projects$Configs$List,
        options?: MethodOptions): AxiosPromise<Schema$ListConfigsResponse>;
    list(
        params: Params$Resource$Projects$Configs$List,
        options: MethodOptions|BodyResponseCallback<Schema$ListConfigsResponse>,
        callback: BodyResponseCallback<Schema$ListConfigsResponse>): void;
    list(
        params: Params$Resource$Projects$Configs$List,
        callback: BodyResponseCallback<Schema$ListConfigsResponse>): void;
    list(callback: BodyResponseCallback<Schema$ListConfigsResponse>): void;
    list(
        paramsOrCallback?: Params$Resource$Projects$Configs$List|
        BodyResponseCallback<Schema$ListConfigsResponse>,
        optionsOrCallback?: MethodOptions|
        BodyResponseCallback<Schema$ListConfigsResponse>,
        callback?: BodyResponseCallback<Schema$ListConfigsResponse>):
        void|AxiosPromise<Schema$ListConfigsResponse> {
      let params =
          (paramsOrCallback || {}) as Params$Resource$Projects$Configs$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Configs$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
          options.rootUrl || 'https://runtimeconfig.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl + '/v1beta1/{+parent}/configs')
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
        createAPIRequest<Schema$ListConfigsResponse>(parameters, callback);
      } else {
        return createAPIRequest<Schema$ListConfigsResponse>(parameters);
      }
    }


    /**
     * runtimeconfig.projects.configs.setIamPolicy
     * @desc Sets the access control policy on the specified resource. Replaces
     * any existing policy.
     * @alias runtimeconfig.projects.configs.setIamPolicy
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
        params?: Params$Resource$Projects$Configs$Setiampolicy,
        options?: MethodOptions): AxiosPromise<Schema$Policy>;
    setIamPolicy(
        params: Params$Resource$Projects$Configs$Setiampolicy,
        options: MethodOptions|BodyResponseCallback<Schema$Policy>,
        callback: BodyResponseCallback<Schema$Policy>): void;
    setIamPolicy(
        params: Params$Resource$Projects$Configs$Setiampolicy,
        callback: BodyResponseCallback<Schema$Policy>): void;
    setIamPolicy(callback: BodyResponseCallback<Schema$Policy>): void;
    setIamPolicy(
        paramsOrCallback?: Params$Resource$Projects$Configs$Setiampolicy|
        BodyResponseCallback<Schema$Policy>,
        optionsOrCallback?: MethodOptions|BodyResponseCallback<Schema$Policy>,
        callback?: BodyResponseCallback<Schema$Policy>):
        void|AxiosPromise<Schema$Policy> {
      let params = (paramsOrCallback || {}) as
          Params$Resource$Projects$Configs$Setiampolicy;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Configs$Setiampolicy;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
          options.rootUrl || 'https://runtimeconfig.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl + '/v1beta1/{+resource}:setIamPolicy')
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
     * runtimeconfig.projects.configs.testIamPermissions
     * @desc Returns permissions that a caller has on the specified resource. If
     * the resource does not exist, this will return an empty set of
     * permissions, not a NOT_FOUND error.  Note: This operation is designed to
     * be used for building permission-aware UIs and command-line tools, not for
     * authorization checking. This operation may "fail open" without warning.
     * @alias runtimeconfig.projects.configs.testIamPermissions
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
        params?: Params$Resource$Projects$Configs$Testiampermissions,
        options?: MethodOptions):
        AxiosPromise<Schema$TestIamPermissionsResponse>;
    testIamPermissions(
        params: Params$Resource$Projects$Configs$Testiampermissions,
        options: MethodOptions|
        BodyResponseCallback<Schema$TestIamPermissionsResponse>,
        callback: BodyResponseCallback<Schema$TestIamPermissionsResponse>):
        void;
    testIamPermissions(
        params: Params$Resource$Projects$Configs$Testiampermissions,
        callback: BodyResponseCallback<Schema$TestIamPermissionsResponse>):
        void;
    testIamPermissions(
        callback: BodyResponseCallback<Schema$TestIamPermissionsResponse>):
        void;
    testIamPermissions(
        paramsOrCallback?: Params$Resource$Projects$Configs$Testiampermissions|
        BodyResponseCallback<Schema$TestIamPermissionsResponse>,
        optionsOrCallback?: MethodOptions|
        BodyResponseCallback<Schema$TestIamPermissionsResponse>,
        callback?: BodyResponseCallback<Schema$TestIamPermissionsResponse>):
        void|AxiosPromise<Schema$TestIamPermissionsResponse> {
      let params = (paramsOrCallback || {}) as
          Params$Resource$Projects$Configs$Testiampermissions;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Configs$Testiampermissions;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
          options.rootUrl || 'https://runtimeconfig.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl + '/v1beta1/{+resource}:testIamPermissions')
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


    /**
     * runtimeconfig.projects.configs.update
     * @desc Updates a RuntimeConfig resource. The configuration must exist
     * beforehand.
     * @alias runtimeconfig.projects.configs.update
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.name The name of the RuntimeConfig resource to update, in the format:  `projects/[PROJECT_ID]/configs/[CONFIG_NAME]`
     * @param {().RuntimeConfig} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    update(
        params?: Params$Resource$Projects$Configs$Update,
        options?: MethodOptions): AxiosPromise<Schema$RuntimeConfig>;
    update(
        params: Params$Resource$Projects$Configs$Update,
        options: MethodOptions|BodyResponseCallback<Schema$RuntimeConfig>,
        callback: BodyResponseCallback<Schema$RuntimeConfig>): void;
    update(
        params: Params$Resource$Projects$Configs$Update,
        callback: BodyResponseCallback<Schema$RuntimeConfig>): void;
    update(callback: BodyResponseCallback<Schema$RuntimeConfig>): void;
    update(
        paramsOrCallback?: Params$Resource$Projects$Configs$Update|
        BodyResponseCallback<Schema$RuntimeConfig>,
        optionsOrCallback?: MethodOptions|
        BodyResponseCallback<Schema$RuntimeConfig>,
        callback?: BodyResponseCallback<Schema$RuntimeConfig>):
        void|AxiosPromise<Schema$RuntimeConfig> {
      let params =
          (paramsOrCallback || {}) as Params$Resource$Projects$Configs$Update;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Configs$Update;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
          options.rootUrl || 'https://runtimeconfig.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl + '/v1beta1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
              method: 'PUT'
            },
            options),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<Schema$RuntimeConfig>(parameters, callback);
      } else {
        return createAPIRequest<Schema$RuntimeConfig>(parameters);
      }
    }
  }

  export interface Params$Resource$Projects$Configs$Create {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * The [project
     * ID](https://support.google.com/cloud/answer/6158840?hl=en&ref_topic=6158848)
     * for this request, in the format `projects/[PROJECT_ID]`.
     */
    parent?: string;
    /**
     * An optional but recommended unique `request_id`. If the server receives
     * two `create()` requests  with the same `request_id`, then the second
     * request will be ignored and the first resource created and stored in the
     * backend is returned. Empty `request_id` fields are ignored.  It is
     * responsibility of the client to ensure uniqueness of the `request_id`
     * strings.  `request_id` strings are limited to 64 characters.
     */
    requestId?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$RuntimeConfig;
  }
  export interface Params$Resource$Projects$Configs$Delete {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * The RuntimeConfig resource to delete, in the format:
     * `projects/[PROJECT_ID]/configs/[CONFIG_NAME]`
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Configs$Get {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * The name of the RuntimeConfig resource to retrieve, in the format:
     * `projects/[PROJECT_ID]/configs/[CONFIG_NAME]`
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Configs$Getiampolicy {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * REQUIRED: The resource for which the policy is being requested. See the
     * operation documentation for the appropriate value for this field.
     */
    resource?: string;
  }
  export interface Params$Resource$Projects$Configs$List {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * Specifies the number of results to return per page. If there are fewer
     * elements than the specified number, returns all elements.
     */
    pageSize?: number;
    /**
     * Specifies a page token to use. Set `pageToken` to a `nextPageToken`
     * returned by a previous list request to get the next page of results.
     */
    pageToken?: string;
    /**
     * The [project
     * ID](https://support.google.com/cloud/answer/6158840?hl=en&ref_topic=6158848)
     * for this request, in the format `projects/[PROJECT_ID]`.
     */
    parent?: string;
  }
  export interface Params$Resource$Projects$Configs$Setiampolicy {
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
  export interface Params$Resource$Projects$Configs$Testiampermissions {
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
  export interface Params$Resource$Projects$Configs$Update {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * The name of the RuntimeConfig resource to update, in the format:
     * `projects/[PROJECT_ID]/configs/[CONFIG_NAME]`
     */
    name?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$RuntimeConfig;
  }

  export class Resource$Projects$Configs$Operations {
    root: Runtimeconfig;
    constructor(root: Runtimeconfig) {
      this.root = root;
      this.getRoot.bind(this);
    }

    getRoot() {
      return this.root;
    }


    /**
     * runtimeconfig.projects.configs.operations.get
     * @desc Gets the latest state of a long-running operation.  Clients can use
     * this method to poll the operation result at intervals as recommended by
     * the API service.
     * @alias runtimeconfig.projects.configs.operations.get
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.name The name of the operation resource.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    get(params?: Params$Resource$Projects$Configs$Operations$Get,
        options?: MethodOptions): AxiosPromise<Schema$Operation>;
    get(params: Params$Resource$Projects$Configs$Operations$Get,
        options: MethodOptions|BodyResponseCallback<Schema$Operation>,
        callback: BodyResponseCallback<Schema$Operation>): void;
    get(params: Params$Resource$Projects$Configs$Operations$Get,
        callback: BodyResponseCallback<Schema$Operation>): void;
    get(callback: BodyResponseCallback<Schema$Operation>): void;
    get(paramsOrCallback?: Params$Resource$Projects$Configs$Operations$Get|
        BodyResponseCallback<Schema$Operation>,
        optionsOrCallback?: MethodOptions|
        BodyResponseCallback<Schema$Operation>,
        callback?: BodyResponseCallback<Schema$Operation>):
        void|AxiosPromise<Schema$Operation> {
      let params = (paramsOrCallback || {}) as
          Params$Resource$Projects$Configs$Operations$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Configs$Operations$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
          options.rootUrl || 'https://runtimeconfig.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl + '/v1beta1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
              method: 'GET'
            },
            options),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<Schema$Operation>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Operation>(parameters);
      }
    }


    /**
     * runtimeconfig.projects.configs.operations.testIamPermissions
     * @desc Returns permissions that a caller has on the specified resource. If
     * the resource does not exist, this will return an empty set of
     * permissions, not a NOT_FOUND error.  Note: This operation is designed to
     * be used for building permission-aware UIs and command-line tools, not for
     * authorization checking. This operation may "fail open" without warning.
     * @alias runtimeconfig.projects.configs.operations.testIamPermissions
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
        params?: Params$Resource$Projects$Configs$Operations$Testiampermissions,
        options?: MethodOptions):
        AxiosPromise<Schema$TestIamPermissionsResponse>;
    testIamPermissions(
        params: Params$Resource$Projects$Configs$Operations$Testiampermissions,
        options: MethodOptions|
        BodyResponseCallback<Schema$TestIamPermissionsResponse>,
        callback: BodyResponseCallback<Schema$TestIamPermissionsResponse>):
        void;
    testIamPermissions(
        params: Params$Resource$Projects$Configs$Operations$Testiampermissions,
        callback: BodyResponseCallback<Schema$TestIamPermissionsResponse>):
        void;
    testIamPermissions(
        callback: BodyResponseCallback<Schema$TestIamPermissionsResponse>):
        void;
    testIamPermissions(
        paramsOrCallback?:
            Params$Resource$Projects$Configs$Operations$Testiampermissions|
        BodyResponseCallback<Schema$TestIamPermissionsResponse>,
        optionsOrCallback?: MethodOptions|
        BodyResponseCallback<Schema$TestIamPermissionsResponse>,
        callback?: BodyResponseCallback<Schema$TestIamPermissionsResponse>):
        void|AxiosPromise<Schema$TestIamPermissionsResponse> {
      let params = (paramsOrCallback || {}) as
          Params$Resource$Projects$Configs$Operations$Testiampermissions;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as
            Params$Resource$Projects$Configs$Operations$Testiampermissions;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
          options.rootUrl || 'https://runtimeconfig.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl + '/v1beta1/{+resource}:testIamPermissions')
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

  export interface Params$Resource$Projects$Configs$Operations$Get {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * The name of the operation resource.
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Configs$Operations$Testiampermissions {
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


  export class Resource$Projects$Configs$Variables {
    root: Runtimeconfig;
    constructor(root: Runtimeconfig) {
      this.root = root;
      this.getRoot.bind(this);
    }

    getRoot() {
      return this.root;
    }


    /**
     * runtimeconfig.projects.configs.variables.create
     * @desc Creates a variable within the given configuration. You cannot
     * create a variable with a name that is a prefix of an existing variable
     * name, or a name that has an existing variable name as a prefix.  To learn
     * more about creating a variable, read the [Setting and Getting
     * Data](/deployment-manager/runtime-configurator/set-and-get-variables)
     * documentation.
     * @alias runtimeconfig.projects.configs.variables.create
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.parent The path to the RutimeConfig resource that this variable should belong to. The configuration must exist beforehand; the path must be in the format:  `projects/[PROJECT_ID]/configs/[CONFIG_NAME]`
     * @param {string=} params.requestId An optional but recommended unique `request_id`. If the server receives two `create()` requests  with the same `request_id`, then the second request will be ignored and the first resource created and stored in the backend is returned. Empty `request_id` fields are ignored.  It is responsibility of the client to ensure uniqueness of the `request_id` strings.  `request_id` strings are limited to 64 characters.
     * @param {().Variable} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    create(
        params?: Params$Resource$Projects$Configs$Variables$Create,
        options?: MethodOptions): AxiosPromise<Schema$Variable>;
    create(
        params: Params$Resource$Projects$Configs$Variables$Create,
        options: MethodOptions|BodyResponseCallback<Schema$Variable>,
        callback: BodyResponseCallback<Schema$Variable>): void;
    create(
        params: Params$Resource$Projects$Configs$Variables$Create,
        callback: BodyResponseCallback<Schema$Variable>): void;
    create(callback: BodyResponseCallback<Schema$Variable>): void;
    create(
        paramsOrCallback?: Params$Resource$Projects$Configs$Variables$Create|
        BodyResponseCallback<Schema$Variable>,
        optionsOrCallback?: MethodOptions|BodyResponseCallback<Schema$Variable>,
        callback?: BodyResponseCallback<Schema$Variable>):
        void|AxiosPromise<Schema$Variable> {
      let params = (paramsOrCallback || {}) as
          Params$Resource$Projects$Configs$Variables$Create;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Configs$Variables$Create;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
          options.rootUrl || 'https://runtimeconfig.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl + '/v1beta1/{+parent}/variables')
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
        createAPIRequest<Schema$Variable>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Variable>(parameters);
      }
    }


    /**
     * runtimeconfig.projects.configs.variables.delete
     * @desc Deletes a variable or multiple variables.  If you specify a
     * variable name, then that variable is deleted. If you specify a prefix and
     * `recursive` is true, then all variables with that prefix are deleted. You
     * must set a `recursive` to true if you delete variables by prefix.
     * @alias runtimeconfig.projects.configs.variables.delete
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.name The name of the variable to delete, in the format:  `projects/[PROJECT_ID]/configs/[CONFIG_NAME]/variables/[VARIABLE_NAME]`
     * @param {boolean=} params.recursive Set to `true` to recursively delete multiple variables with the same prefix.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    delete(
        params?: Params$Resource$Projects$Configs$Variables$Delete,
        options?: MethodOptions): AxiosPromise<Schema$Empty>;
    delete(
        params: Params$Resource$Projects$Configs$Variables$Delete,
        options: MethodOptions|BodyResponseCallback<Schema$Empty>,
        callback: BodyResponseCallback<Schema$Empty>): void;
    delete(
        params: Params$Resource$Projects$Configs$Variables$Delete,
        callback: BodyResponseCallback<Schema$Empty>): void;
    delete(callback: BodyResponseCallback<Schema$Empty>): void;
    delete(
        paramsOrCallback?: Params$Resource$Projects$Configs$Variables$Delete|
        BodyResponseCallback<Schema$Empty>,
        optionsOrCallback?: MethodOptions|BodyResponseCallback<Schema$Empty>,
        callback?: BodyResponseCallback<Schema$Empty>):
        void|AxiosPromise<Schema$Empty> {
      let params = (paramsOrCallback || {}) as
          Params$Resource$Projects$Configs$Variables$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Configs$Variables$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
          options.rootUrl || 'https://runtimeconfig.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl + '/v1beta1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
     * runtimeconfig.projects.configs.variables.get
     * @desc Gets information about a single variable.
     * @alias runtimeconfig.projects.configs.variables.get
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.name The name of the variable to return, in the format:  `projects/[PROJECT_ID]/configs/[CONFIG_NAME]/variables/[VARIBLE_NAME]`
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    get(params?: Params$Resource$Projects$Configs$Variables$Get,
        options?: MethodOptions): AxiosPromise<Schema$Variable>;
    get(params: Params$Resource$Projects$Configs$Variables$Get,
        options: MethodOptions|BodyResponseCallback<Schema$Variable>,
        callback: BodyResponseCallback<Schema$Variable>): void;
    get(params: Params$Resource$Projects$Configs$Variables$Get,
        callback: BodyResponseCallback<Schema$Variable>): void;
    get(callback: BodyResponseCallback<Schema$Variable>): void;
    get(paramsOrCallback?: Params$Resource$Projects$Configs$Variables$Get|
        BodyResponseCallback<Schema$Variable>,
        optionsOrCallback?: MethodOptions|BodyResponseCallback<Schema$Variable>,
        callback?: BodyResponseCallback<Schema$Variable>):
        void|AxiosPromise<Schema$Variable> {
      let params = (paramsOrCallback || {}) as
          Params$Resource$Projects$Configs$Variables$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Configs$Variables$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
          options.rootUrl || 'https://runtimeconfig.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl + '/v1beta1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
              method: 'GET'
            },
            options),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<Schema$Variable>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Variable>(parameters);
      }
    }


    /**
     * runtimeconfig.projects.configs.variables.list
     * @desc Lists variables within given a configuration, matching any provided
     * filters. This only lists variable names, not the values, unless
     * `return_values` is true, in which case only variables that user has IAM
     * permission to GetVariable will be returned.
     * @alias runtimeconfig.projects.configs.variables.list
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string=} params.filter Filters variables by matching the specified filter. For example:  `projects/example-project/config/[CONFIG_NAME]/variables/example-variable`.
     * @param {integer=} params.pageSize Specifies the number of results to return per page. If there are fewer elements than the specified number, returns all elements.
     * @param {string=} params.pageToken Specifies a page token to use. Set `pageToken` to a `nextPageToken` returned by a previous list request to get the next page of results.
     * @param {string} params.parent The path to the RuntimeConfig resource for which you want to list variables. The configuration must exist beforehand; the path must be in the format:  `projects/[PROJECT_ID]/configs/[CONFIG_NAME]`
     * @param {boolean=} params.returnValues The flag indicates whether the user wants to return values of variables. If true, then only those variables that user has IAM GetVariable permission will be returned along with their values.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list(
        params?: Params$Resource$Projects$Configs$Variables$List,
        options?: MethodOptions): AxiosPromise<Schema$ListVariablesResponse>;
    list(
        params: Params$Resource$Projects$Configs$Variables$List,
        options: MethodOptions|
        BodyResponseCallback<Schema$ListVariablesResponse>,
        callback: BodyResponseCallback<Schema$ListVariablesResponse>): void;
    list(
        params: Params$Resource$Projects$Configs$Variables$List,
        callback: BodyResponseCallback<Schema$ListVariablesResponse>): void;
    list(callback: BodyResponseCallback<Schema$ListVariablesResponse>): void;
    list(
        paramsOrCallback?: Params$Resource$Projects$Configs$Variables$List|
        BodyResponseCallback<Schema$ListVariablesResponse>,
        optionsOrCallback?: MethodOptions|
        BodyResponseCallback<Schema$ListVariablesResponse>,
        callback?: BodyResponseCallback<Schema$ListVariablesResponse>):
        void|AxiosPromise<Schema$ListVariablesResponse> {
      let params = (paramsOrCallback || {}) as
          Params$Resource$Projects$Configs$Variables$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Configs$Variables$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
          options.rootUrl || 'https://runtimeconfig.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl + '/v1beta1/{+parent}/variables')
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
        createAPIRequest<Schema$ListVariablesResponse>(parameters, callback);
      } else {
        return createAPIRequest<Schema$ListVariablesResponse>(parameters);
      }
    }


    /**
     * runtimeconfig.projects.configs.variables.testIamPermissions
     * @desc Returns permissions that a caller has on the specified resource. If
     * the resource does not exist, this will return an empty set of
     * permissions, not a NOT_FOUND error.  Note: This operation is designed to
     * be used for building permission-aware UIs and command-line tools, not for
     * authorization checking. This operation may "fail open" without warning.
     * @alias runtimeconfig.projects.configs.variables.testIamPermissions
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
        params?: Params$Resource$Projects$Configs$Variables$Testiampermissions,
        options?: MethodOptions):
        AxiosPromise<Schema$TestIamPermissionsResponse>;
    testIamPermissions(
        params: Params$Resource$Projects$Configs$Variables$Testiampermissions,
        options: MethodOptions|
        BodyResponseCallback<Schema$TestIamPermissionsResponse>,
        callback: BodyResponseCallback<Schema$TestIamPermissionsResponse>):
        void;
    testIamPermissions(
        params: Params$Resource$Projects$Configs$Variables$Testiampermissions,
        callback: BodyResponseCallback<Schema$TestIamPermissionsResponse>):
        void;
    testIamPermissions(
        callback: BodyResponseCallback<Schema$TestIamPermissionsResponse>):
        void;
    testIamPermissions(
        paramsOrCallback?:
            Params$Resource$Projects$Configs$Variables$Testiampermissions|
        BodyResponseCallback<Schema$TestIamPermissionsResponse>,
        optionsOrCallback?: MethodOptions|
        BodyResponseCallback<Schema$TestIamPermissionsResponse>,
        callback?: BodyResponseCallback<Schema$TestIamPermissionsResponse>):
        void|AxiosPromise<Schema$TestIamPermissionsResponse> {
      let params = (paramsOrCallback || {}) as
          Params$Resource$Projects$Configs$Variables$Testiampermissions;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as
            Params$Resource$Projects$Configs$Variables$Testiampermissions;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
          options.rootUrl || 'https://runtimeconfig.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl + '/v1beta1/{+resource}:testIamPermissions')
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


    /**
     * runtimeconfig.projects.configs.variables.update
     * @desc Updates an existing variable with a new value.
     * @alias runtimeconfig.projects.configs.variables.update
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.name The name of the variable to update, in the format:  `projects/[PROJECT_ID]/configs/[CONFIG_NAME]/variables/[VARIABLE_NAME]`
     * @param {().Variable} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    update(
        params?: Params$Resource$Projects$Configs$Variables$Update,
        options?: MethodOptions): AxiosPromise<Schema$Variable>;
    update(
        params: Params$Resource$Projects$Configs$Variables$Update,
        options: MethodOptions|BodyResponseCallback<Schema$Variable>,
        callback: BodyResponseCallback<Schema$Variable>): void;
    update(
        params: Params$Resource$Projects$Configs$Variables$Update,
        callback: BodyResponseCallback<Schema$Variable>): void;
    update(callback: BodyResponseCallback<Schema$Variable>): void;
    update(
        paramsOrCallback?: Params$Resource$Projects$Configs$Variables$Update|
        BodyResponseCallback<Schema$Variable>,
        optionsOrCallback?: MethodOptions|BodyResponseCallback<Schema$Variable>,
        callback?: BodyResponseCallback<Schema$Variable>):
        void|AxiosPromise<Schema$Variable> {
      let params = (paramsOrCallback || {}) as
          Params$Resource$Projects$Configs$Variables$Update;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Configs$Variables$Update;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
          options.rootUrl || 'https://runtimeconfig.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl + '/v1beta1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
              method: 'PUT'
            },
            options),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<Schema$Variable>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Variable>(parameters);
      }
    }


    /**
     * runtimeconfig.projects.configs.variables.watch
     * @desc Watches a specific variable and waits for a change in the
     * variable's value. When there is a change, this method returns the new
     * value or times out.  If a variable is deleted while being watched, the
     * `variableState` state is set to `DELETED` and the method returns the last
     * known variable `value`.  If you set the deadline for watching to a larger
     * value than internal timeout (60 seconds), the current variable value is
     * returned and the `variableState` will be `VARIABLE_STATE_UNSPECIFIED`. To
     * learn more about creating a watcher, read the [Watching a Variable for
     * Changes](/deployment-manager/runtime-configurator/watching-a-variable)
     * documentation.
     * @alias runtimeconfig.projects.configs.variables.watch
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.name The name of the variable to watch, in the format:  `projects/[PROJECT_ID]/configs/[CONFIG_NAME]`
     * @param {().WatchVariableRequest} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    watch(
        params?: Params$Resource$Projects$Configs$Variables$Watch,
        options?: MethodOptions): AxiosPromise<Schema$Variable>;
    watch(
        params: Params$Resource$Projects$Configs$Variables$Watch,
        options: MethodOptions|BodyResponseCallback<Schema$Variable>,
        callback: BodyResponseCallback<Schema$Variable>): void;
    watch(
        params: Params$Resource$Projects$Configs$Variables$Watch,
        callback: BodyResponseCallback<Schema$Variable>): void;
    watch(callback: BodyResponseCallback<Schema$Variable>): void;
    watch(
        paramsOrCallback?: Params$Resource$Projects$Configs$Variables$Watch|
        BodyResponseCallback<Schema$Variable>,
        optionsOrCallback?: MethodOptions|BodyResponseCallback<Schema$Variable>,
        callback?: BodyResponseCallback<Schema$Variable>):
        void|AxiosPromise<Schema$Variable> {
      let params = (paramsOrCallback || {}) as
          Params$Resource$Projects$Configs$Variables$Watch;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Configs$Variables$Watch;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
          options.rootUrl || 'https://runtimeconfig.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl + '/v1beta1/{+name}:watch')
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
        createAPIRequest<Schema$Variable>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Variable>(parameters);
      }
    }
  }

  export interface Params$Resource$Projects$Configs$Variables$Create {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * The path to the RutimeConfig resource that this variable should belong
     * to. The configuration must exist beforehand; the path must be in the
     * format:  `projects/[PROJECT_ID]/configs/[CONFIG_NAME]`
     */
    parent?: string;
    /**
     * An optional but recommended unique `request_id`. If the server receives
     * two `create()` requests  with the same `request_id`, then the second
     * request will be ignored and the first resource created and stored in the
     * backend is returned. Empty `request_id` fields are ignored.  It is
     * responsibility of the client to ensure uniqueness of the `request_id`
     * strings.  `request_id` strings are limited to 64 characters.
     */
    requestId?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$Variable;
  }
  export interface Params$Resource$Projects$Configs$Variables$Delete {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * The name of the variable to delete, in the format:
     * `projects/[PROJECT_ID]/configs/[CONFIG_NAME]/variables/[VARIABLE_NAME]`
     */
    name?: string;
    /**
     * Set to `true` to recursively delete multiple variables with the same
     * prefix.
     */
    recursive?: boolean;
  }
  export interface Params$Resource$Projects$Configs$Variables$Get {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * The name of the variable to return, in the format:
     * `projects/[PROJECT_ID]/configs/[CONFIG_NAME]/variables/[VARIBLE_NAME]`
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Configs$Variables$List {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * Filters variables by matching the specified filter. For example:
     * `projects/example-project/config/[CONFIG_NAME]/variables/example-variable`.
     */
    filter?: string;
    /**
     * Specifies the number of results to return per page. If there are fewer
     * elements than the specified number, returns all elements.
     */
    pageSize?: number;
    /**
     * Specifies a page token to use. Set `pageToken` to a `nextPageToken`
     * returned by a previous list request to get the next page of results.
     */
    pageToken?: string;
    /**
     * The path to the RuntimeConfig resource for which you want to list
     * variables. The configuration must exist beforehand; the path must be in
     * the format:  `projects/[PROJECT_ID]/configs/[CONFIG_NAME]`
     */
    parent?: string;
    /**
     * The flag indicates whether the user wants to return values of variables.
     * If true, then only those variables that user has IAM GetVariable
     * permission will be returned along with their values.
     */
    returnValues?: boolean;
  }
  export interface Params$Resource$Projects$Configs$Variables$Testiampermissions {
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
  export interface Params$Resource$Projects$Configs$Variables$Update {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * The name of the variable to update, in the format:
     * `projects/[PROJECT_ID]/configs/[CONFIG_NAME]/variables/[VARIABLE_NAME]`
     */
    name?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$Variable;
  }
  export interface Params$Resource$Projects$Configs$Variables$Watch {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * The name of the variable to watch, in the format:
     * `projects/[PROJECT_ID]/configs/[CONFIG_NAME]`
     */
    name?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$WatchVariableRequest;
  }


  export class Resource$Projects$Configs$Waiters {
    root: Runtimeconfig;
    constructor(root: Runtimeconfig) {
      this.root = root;
      this.getRoot.bind(this);
    }

    getRoot() {
      return this.root;
    }


    /**
     * runtimeconfig.projects.configs.waiters.create
     * @desc Creates a Waiter resource. This operation returns a long-running
     * Operation resource which can be polled for completion. However, a waiter
     * with the given name will exist (and can be retrieved) prior to the
     * operation completing. If the operation fails, the failed Waiter resource
     * will still exist and must be deleted prior to subsequent creation
     * attempts.
     * @alias runtimeconfig.projects.configs.waiters.create
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.parent The path to the configuration that will own the waiter. The configuration must exist beforehand; the path must be in the format:  `projects/[PROJECT_ID]/configs/[CONFIG_NAME]`.
     * @param {string=} params.requestId An optional but recommended unique `request_id`. If the server receives two `create()` requests  with the same `request_id`, then the second request will be ignored and the first resource created and stored in the backend is returned. Empty `request_id` fields are ignored.  It is responsibility of the client to ensure uniqueness of the `request_id` strings.  `request_id` strings are limited to 64 characters.
     * @param {().Waiter} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    create(
        params?: Params$Resource$Projects$Configs$Waiters$Create,
        options?: MethodOptions): AxiosPromise<Schema$Operation>;
    create(
        params: Params$Resource$Projects$Configs$Waiters$Create,
        options: MethodOptions|BodyResponseCallback<Schema$Operation>,
        callback: BodyResponseCallback<Schema$Operation>): void;
    create(
        params: Params$Resource$Projects$Configs$Waiters$Create,
        callback: BodyResponseCallback<Schema$Operation>): void;
    create(callback: BodyResponseCallback<Schema$Operation>): void;
    create(
        paramsOrCallback?: Params$Resource$Projects$Configs$Waiters$Create|
        BodyResponseCallback<Schema$Operation>,
        optionsOrCallback?: MethodOptions|
        BodyResponseCallback<Schema$Operation>,
        callback?: BodyResponseCallback<Schema$Operation>):
        void|AxiosPromise<Schema$Operation> {
      let params = (paramsOrCallback || {}) as
          Params$Resource$Projects$Configs$Waiters$Create;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Configs$Waiters$Create;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
          options.rootUrl || 'https://runtimeconfig.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl + '/v1beta1/{+parent}/waiters')
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
        createAPIRequest<Schema$Operation>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Operation>(parameters);
      }
    }


    /**
     * runtimeconfig.projects.configs.waiters.delete
     * @desc Deletes the waiter with the specified name.
     * @alias runtimeconfig.projects.configs.waiters.delete
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.name The Waiter resource to delete, in the format:   `projects/[PROJECT_ID]/configs/[CONFIG_NAME]/waiters/[WAITER_NAME]`
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    delete(
        params?: Params$Resource$Projects$Configs$Waiters$Delete,
        options?: MethodOptions): AxiosPromise<Schema$Empty>;
    delete(
        params: Params$Resource$Projects$Configs$Waiters$Delete,
        options: MethodOptions|BodyResponseCallback<Schema$Empty>,
        callback: BodyResponseCallback<Schema$Empty>): void;
    delete(
        params: Params$Resource$Projects$Configs$Waiters$Delete,
        callback: BodyResponseCallback<Schema$Empty>): void;
    delete(callback: BodyResponseCallback<Schema$Empty>): void;
    delete(
        paramsOrCallback?: Params$Resource$Projects$Configs$Waiters$Delete|
        BodyResponseCallback<Schema$Empty>,
        optionsOrCallback?: MethodOptions|BodyResponseCallback<Schema$Empty>,
        callback?: BodyResponseCallback<Schema$Empty>):
        void|AxiosPromise<Schema$Empty> {
      let params = (paramsOrCallback || {}) as
          Params$Resource$Projects$Configs$Waiters$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Configs$Waiters$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
          options.rootUrl || 'https://runtimeconfig.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl + '/v1beta1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
     * runtimeconfig.projects.configs.waiters.get
     * @desc Gets information about a single waiter.
     * @alias runtimeconfig.projects.configs.waiters.get
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.name The fully-qualified name of the Waiter resource object to retrieve, in the format:  `projects/[PROJECT_ID]/configs/[CONFIG_NAME]/waiters/[WAITER_NAME]`
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    get(params?: Params$Resource$Projects$Configs$Waiters$Get,
        options?: MethodOptions): AxiosPromise<Schema$Waiter>;
    get(params: Params$Resource$Projects$Configs$Waiters$Get,
        options: MethodOptions|BodyResponseCallback<Schema$Waiter>,
        callback: BodyResponseCallback<Schema$Waiter>): void;
    get(params: Params$Resource$Projects$Configs$Waiters$Get,
        callback: BodyResponseCallback<Schema$Waiter>): void;
    get(callback: BodyResponseCallback<Schema$Waiter>): void;
    get(paramsOrCallback?: Params$Resource$Projects$Configs$Waiters$Get|
        BodyResponseCallback<Schema$Waiter>,
        optionsOrCallback?: MethodOptions|BodyResponseCallback<Schema$Waiter>,
        callback?: BodyResponseCallback<Schema$Waiter>):
        void|AxiosPromise<Schema$Waiter> {
      let params = (paramsOrCallback || {}) as
          Params$Resource$Projects$Configs$Waiters$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Configs$Waiters$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
          options.rootUrl || 'https://runtimeconfig.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl + '/v1beta1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
              method: 'GET'
            },
            options),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<Schema$Waiter>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Waiter>(parameters);
      }
    }


    /**
     * runtimeconfig.projects.configs.waiters.list
     * @desc List waiters within the given configuration.
     * @alias runtimeconfig.projects.configs.waiters.list
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {integer=} params.pageSize Specifies the number of results to return per page. If there are fewer elements than the specified number, returns all elements.
     * @param {string=} params.pageToken Specifies a page token to use. Set `pageToken` to a `nextPageToken` returned by a previous list request to get the next page of results.
     * @param {string} params.parent The path to the configuration for which you want to get a list of waiters. The configuration must exist beforehand; the path must be in the format:  `projects/[PROJECT_ID]/configs/[CONFIG_NAME]`
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list(
        params?: Params$Resource$Projects$Configs$Waiters$List,
        options?: MethodOptions): AxiosPromise<Schema$ListWaitersResponse>;
    list(
        params: Params$Resource$Projects$Configs$Waiters$List,
        options: MethodOptions|BodyResponseCallback<Schema$ListWaitersResponse>,
        callback: BodyResponseCallback<Schema$ListWaitersResponse>): void;
    list(
        params: Params$Resource$Projects$Configs$Waiters$List,
        callback: BodyResponseCallback<Schema$ListWaitersResponse>): void;
    list(callback: BodyResponseCallback<Schema$ListWaitersResponse>): void;
    list(
        paramsOrCallback?: Params$Resource$Projects$Configs$Waiters$List|
        BodyResponseCallback<Schema$ListWaitersResponse>,
        optionsOrCallback?: MethodOptions|
        BodyResponseCallback<Schema$ListWaitersResponse>,
        callback?: BodyResponseCallback<Schema$ListWaitersResponse>):
        void|AxiosPromise<Schema$ListWaitersResponse> {
      let params = (paramsOrCallback || {}) as
          Params$Resource$Projects$Configs$Waiters$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Configs$Waiters$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
          options.rootUrl || 'https://runtimeconfig.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl + '/v1beta1/{+parent}/waiters')
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
        createAPIRequest<Schema$ListWaitersResponse>(parameters, callback);
      } else {
        return createAPIRequest<Schema$ListWaitersResponse>(parameters);
      }
    }


    /**
     * runtimeconfig.projects.configs.waiters.testIamPermissions
     * @desc Returns permissions that a caller has on the specified resource. If
     * the resource does not exist, this will return an empty set of
     * permissions, not a NOT_FOUND error.  Note: This operation is designed to
     * be used for building permission-aware UIs and command-line tools, not for
     * authorization checking. This operation may "fail open" without warning.
     * @alias runtimeconfig.projects.configs.waiters.testIamPermissions
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
        params?: Params$Resource$Projects$Configs$Waiters$Testiampermissions,
        options?: MethodOptions):
        AxiosPromise<Schema$TestIamPermissionsResponse>;
    testIamPermissions(
        params: Params$Resource$Projects$Configs$Waiters$Testiampermissions,
        options: MethodOptions|
        BodyResponseCallback<Schema$TestIamPermissionsResponse>,
        callback: BodyResponseCallback<Schema$TestIamPermissionsResponse>):
        void;
    testIamPermissions(
        params: Params$Resource$Projects$Configs$Waiters$Testiampermissions,
        callback: BodyResponseCallback<Schema$TestIamPermissionsResponse>):
        void;
    testIamPermissions(
        callback: BodyResponseCallback<Schema$TestIamPermissionsResponse>):
        void;
    testIamPermissions(
        paramsOrCallback?:
            Params$Resource$Projects$Configs$Waiters$Testiampermissions|
        BodyResponseCallback<Schema$TestIamPermissionsResponse>,
        optionsOrCallback?: MethodOptions|
        BodyResponseCallback<Schema$TestIamPermissionsResponse>,
        callback?: BodyResponseCallback<Schema$TestIamPermissionsResponse>):
        void|AxiosPromise<Schema$TestIamPermissionsResponse> {
      let params = (paramsOrCallback || {}) as
          Params$Resource$Projects$Configs$Waiters$Testiampermissions;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as
            Params$Resource$Projects$Configs$Waiters$Testiampermissions;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
          options.rootUrl || 'https://runtimeconfig.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl + '/v1beta1/{+resource}:testIamPermissions')
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

  export interface Params$Resource$Projects$Configs$Waiters$Create {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * The path to the configuration that will own the waiter. The configuration
     * must exist beforehand; the path must be in the format:
     * `projects/[PROJECT_ID]/configs/[CONFIG_NAME]`.
     */
    parent?: string;
    /**
     * An optional but recommended unique `request_id`. If the server receives
     * two `create()` requests  with the same `request_id`, then the second
     * request will be ignored and the first resource created and stored in the
     * backend is returned. Empty `request_id` fields are ignored.  It is
     * responsibility of the client to ensure uniqueness of the `request_id`
     * strings.  `request_id` strings are limited to 64 characters.
     */
    requestId?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$Waiter;
  }
  export interface Params$Resource$Projects$Configs$Waiters$Delete {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * The Waiter resource to delete, in the format:
     * `projects/[PROJECT_ID]/configs/[CONFIG_NAME]/waiters/[WAITER_NAME]`
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Configs$Waiters$Get {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * The fully-qualified name of the Waiter resource object to retrieve, in
     * the format:
     * `projects/[PROJECT_ID]/configs/[CONFIG_NAME]/waiters/[WAITER_NAME]`
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Configs$Waiters$List {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * Specifies the number of results to return per page. If there are fewer
     * elements than the specified number, returns all elements.
     */
    pageSize?: number;
    /**
     * Specifies a page token to use. Set `pageToken` to a `nextPageToken`
     * returned by a previous list request to get the next page of results.
     */
    pageToken?: string;
    /**
     * The path to the configuration for which you want to get a list of
     * waiters. The configuration must exist beforehand; the path must be in the
     * format:  `projects/[PROJECT_ID]/configs/[CONFIG_NAME]`
     */
    parent?: string;
  }
  export interface Params$Resource$Projects$Configs$Waiters$Testiampermissions {
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
}
