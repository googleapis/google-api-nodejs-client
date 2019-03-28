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

import {GaxiosPromise} from 'gaxios';
import {Compute, JWT, OAuth2Client, UserRefreshClient} from 'google-auth-library';
import {APIRequestContext, BodyResponseCallback, createAPIRequest, GlobalOptions, GoogleConfigurable, MethodOptions} from 'googleapis-common';

// tslint:disable: no-any
// tslint:disable: class-name
// tslint:disable: variable-name
// tslint:disable: jsdoc-format
// tslint:disable: no-namespace

export namespace cloudshell_v1alpha1 {
  export interface Options extends GlobalOptions {
    version: 'v1alpha1';
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
   * Cloud Shell API
   *
   * Allows users to start, configure, and connect to interactive shell sessions
   * running in the cloud.
   *
   * @example
   * const {google} = require('googleapis');
   * const cloudshell = google.cloudshell('v1alpha1');
   *
   * @namespace cloudshell
   * @type {Function}
   * @version v1alpha1
   * @variation v1alpha1
   * @param {object=} options Options for Cloudshell
   */
  export class Cloudshell {
    context: APIRequestContext;
    users: Resource$Users;

    constructor(options: GlobalOptions, google?: GoogleConfigurable) {
      this.context = {_options: options || {}, google};

      this.users = new Resource$Users(this.context);
    }
  }

  /**
   * Request message for AuthorizeEnvironment.
   */
  export interface Schema$AuthorizeEnvironmentRequest {
    /**
     * The OAuth access token that should be sent to the environment.
     */
    accessToken?: string;
    /**
     * The time when the credentials expire. If not set, defaults to one hour
     * from when the server received the request.
     */
    expireTime?: string;
    /**
     * The OAuth ID token that should be sent to the environment.
     */
    idToken?: string;
  }
  /**
   * Request message for CreatePublicKey.
   */
  export interface Schema$CreatePublicKeyRequest {
    /**
     * Key that should be added to the environment.
     */
    key?: Schema$PublicKey;
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
   * A Cloud Shell environment, which is defined as the combination of a Docker
   * image specifying what is installed on the environment and a home directory
   * containing the user&#39;s data that will remain across sessions. Each user
   * has a single environment with the ID &quot;default&quot;.
   */
  export interface Schema$Environment {
    /**
     * Required. Full path to the Docker image used to run this environment,
     * e.g. &quot;gcr.io/dev-con/cloud-devshell:latest&quot;.
     */
    dockerImage?: string;
    /**
     * Output only. The environment&#39;s identifier, which is always
     * &quot;default&quot;.
     */
    id?: string;
    /**
     * Output only. Full name of this resource, in the format
     * `users/{owner_email}/environments/{environment_id}`. `{owner_email}` is
     * the email address of the user to whom this environment belongs, and
     * `{environment_id}` is the identifier of this environment. For example,
     * `users/someone@example.com/environments/default`.
     */
    name?: string;
    /**
     * Output only. Public keys associated with the environment. Clients can
     * connect to this environment via SSH only if they possess a private key
     * corresponding to at least one of these public keys. Keys can be added to
     * or removed from the environment using the CreatePublicKey and
     * DeletePublicKey methods.
     */
    publicKeys?: Schema$PublicKey[];
    /**
     * Output only. Host to which clients can connect to initiate SSH sessions
     * with the environment.
     */
    sshHost?: string;
    /**
     * Output only. Port to which clients can connect to initiate SSH sessions
     * with the environment.
     */
    sshPort?: number;
    /**
     * Output only. Username that clients should use when initiating SSH
     * sessions with the environment.
     */
    sshUsername?: string;
    /**
     * Output only. Current execution state of this environment.
     */
    state?: string;
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
    metadata?: {[key: string]: any;};
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
    response?: {[key: string]: any;};
  }
  /**
   * A public SSH key, corresponding to a private SSH key held by the client.
   */
  export interface Schema$PublicKey {
    /**
     * Required. Format of this key&#39;s content.
     */
    format?: string;
    /**
     * Required. Content of this key.
     */
    key?: string;
    /**
     * Output only. Full name of this resource, in the format
     * `users/{owner_email}/environments/{environment_id}/publicKeys/{key_id}`.
     * `{owner_email}` is the email address of the user to whom the key belongs.
     * `{environment_id}` is the identifier of the environment to which the key
     * grants access. `{key_id}` is the unique identifier of the key. For
     * example,
     * `users/someone@example.com/environments/default/publicKeys/myKey`.
     */
    name?: string;
  }
  /**
   * Message included in the metadata field of operations returned from
   * StartEnvironment.
   */
  export interface Schema$StartEnvironmentMetadata {
    /**
     * Current state of the environment being started.
     */
    state?: string;
  }
  /**
   * Request message for StartEnvironment.
   */
  export interface Schema$StartEnvironmentRequest {
    /**
     * The initial access token passed to the environment. If this is present
     * and valid, the environment will be pre-authenticated with gcloud so that
     * the user can run gcloud commands in Cloud Shell without having to log in.
     * This code can be updated later by calling AuthorizeEnvironment.
     */
    accessToken?: string;
  }
  /**
   * Message included in the response field of operations returned from
   * StartEnvironment once the operation is complete.
   */
  export interface Schema$StartEnvironmentResponse {
    /**
     * Environment that was started.
     */
    environment?: Schema$Environment;
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


  export class Resource$Users {
    context: APIRequestContext;
    environments: Resource$Users$Environments;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.environments = new Resource$Users$Environments(this.context);
    }
  }


  export class Resource$Users$Environments {
    context: APIRequestContext;
    publicKeys: Resource$Users$Environments$Publickeys;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.publicKeys =
          new Resource$Users$Environments$Publickeys(this.context);
    }


    /**
     * cloudshell.users.environments.authorize
     * @desc Sends OAuth credentials to a running environment on behalf of a
     * user. When this completes, the environment will be authorized to run
     * various Google Cloud command line tools without requiring the user to
     * manually authenticate.
     * @alias cloudshell.users.environments.authorize
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.name Name of the resource that should receive the credentials, for example `users/me/environments/default` or `users/someone@example.com/environments/default`.
     * @param {().AuthorizeEnvironmentRequest} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    authorize(
        params?: Params$Resource$Users$Environments$Authorize,
        options?: MethodOptions): GaxiosPromise<Schema$Empty>;
    authorize(
        params: Params$Resource$Users$Environments$Authorize,
        options: MethodOptions|BodyResponseCallback<Schema$Empty>,
        callback: BodyResponseCallback<Schema$Empty>): void;
    authorize(
        params: Params$Resource$Users$Environments$Authorize,
        callback: BodyResponseCallback<Schema$Empty>): void;
    authorize(callback: BodyResponseCallback<Schema$Empty>): void;
    authorize(
        paramsOrCallback?: Params$Resource$Users$Environments$Authorize|
        BodyResponseCallback<Schema$Empty>,
        optionsOrCallback?: MethodOptions|BodyResponseCallback<Schema$Empty>,
        callback?: BodyResponseCallback<Schema$Empty>):
        void|GaxiosPromise<Schema$Empty> {
      let params = (paramsOrCallback || {}) as
          Params$Resource$Users$Environments$Authorize;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Users$Environments$Authorize;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://cloudshell.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl + '/v1alpha1/{+name}:authorize')
                       .replace(/([^:]\/)\/+/g, '$1'),
              method: 'POST'
            },
            options),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.context
      };
      if (callback) {
        createAPIRequest<Schema$Empty>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Empty>(parameters);
      }
    }


    /**
     * cloudshell.users.environments.get
     * @desc Gets an environment. Returns NOT_FOUND if the environment does not
     * exist.
     * @alias cloudshell.users.environments.get
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.name Name of the requested resource, for example `users/me/environments/default` or `users/someone@example.com/environments/default`.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    get(params?: Params$Resource$Users$Environments$Get,
        options?: MethodOptions): GaxiosPromise<Schema$Environment>;
    get(params: Params$Resource$Users$Environments$Get,
        options: MethodOptions|BodyResponseCallback<Schema$Environment>,
        callback: BodyResponseCallback<Schema$Environment>): void;
    get(params: Params$Resource$Users$Environments$Get,
        callback: BodyResponseCallback<Schema$Environment>): void;
    get(callback: BodyResponseCallback<Schema$Environment>): void;
    get(paramsOrCallback?: Params$Resource$Users$Environments$Get|
        BodyResponseCallback<Schema$Environment>,
        optionsOrCallback?: MethodOptions|
        BodyResponseCallback<Schema$Environment>,
        callback?: BodyResponseCallback<Schema$Environment>):
        void|GaxiosPromise<Schema$Environment> {
      let params =
          (paramsOrCallback || {}) as Params$Resource$Users$Environments$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Users$Environments$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://cloudshell.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url:
                  (rootUrl + '/v1alpha1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
              method: 'GET'
            },
            options),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.context
      };
      if (callback) {
        createAPIRequest<Schema$Environment>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Environment>(parameters);
      }
    }


    /**
     * cloudshell.users.environments.patch
     * @desc Updates an existing environment.
     * @alias cloudshell.users.environments.patch
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.name Name of the resource to be updated, for example `users/me/environments/default` or `users/someone@example.com/environments/default`.
     * @param {string=} params.updateMask Mask specifying which fields in the environment should be updated.
     * @param {().Environment} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    patch(
        params?: Params$Resource$Users$Environments$Patch,
        options?: MethodOptions): GaxiosPromise<Schema$Environment>;
    patch(
        params: Params$Resource$Users$Environments$Patch,
        options: MethodOptions|BodyResponseCallback<Schema$Environment>,
        callback: BodyResponseCallback<Schema$Environment>): void;
    patch(
        params: Params$Resource$Users$Environments$Patch,
        callback: BodyResponseCallback<Schema$Environment>): void;
    patch(callback: BodyResponseCallback<Schema$Environment>): void;
    patch(
        paramsOrCallback?: Params$Resource$Users$Environments$Patch|
        BodyResponseCallback<Schema$Environment>,
        optionsOrCallback?: MethodOptions|
        BodyResponseCallback<Schema$Environment>,
        callback?: BodyResponseCallback<Schema$Environment>):
        void|GaxiosPromise<Schema$Environment> {
      let params =
          (paramsOrCallback || {}) as Params$Resource$Users$Environments$Patch;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Users$Environments$Patch;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://cloudshell.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url:
                  (rootUrl + '/v1alpha1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
              method: 'PATCH'
            },
            options),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.context
      };
      if (callback) {
        createAPIRequest<Schema$Environment>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Environment>(parameters);
      }
    }


    /**
     * cloudshell.users.environments.start
     * @desc Starts an existing environment, allowing clients to connect to it.
     * The returned operation will contain an instance of
     * StartEnvironmentMetadata in its metadata field. Users can wait for the
     * environment to start by polling this operation via GetOperation. Once the
     * environment has finished starting and is ready to accept connections, the
     * operation will contain a StartEnvironmentResponse in its response field.
     * @alias cloudshell.users.environments.start
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.name Name of the resource that should be started, for example `users/me/environments/default` or `users/someone@example.com/environments/default`.
     * @param {().StartEnvironmentRequest} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    start(
        params?: Params$Resource$Users$Environments$Start,
        options?: MethodOptions): GaxiosPromise<Schema$Operation>;
    start(
        params: Params$Resource$Users$Environments$Start,
        options: MethodOptions|BodyResponseCallback<Schema$Operation>,
        callback: BodyResponseCallback<Schema$Operation>): void;
    start(
        params: Params$Resource$Users$Environments$Start,
        callback: BodyResponseCallback<Schema$Operation>): void;
    start(callback: BodyResponseCallback<Schema$Operation>): void;
    start(
        paramsOrCallback?: Params$Resource$Users$Environments$Start|
        BodyResponseCallback<Schema$Operation>,
        optionsOrCallback?: MethodOptions|
        BodyResponseCallback<Schema$Operation>,
        callback?: BodyResponseCallback<Schema$Operation>):
        void|GaxiosPromise<Schema$Operation> {
      let params =
          (paramsOrCallback || {}) as Params$Resource$Users$Environments$Start;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Users$Environments$Start;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://cloudshell.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl + '/v1alpha1/{+name}:start')
                       .replace(/([^:]\/)\/+/g, '$1'),
              method: 'POST'
            },
            options),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.context
      };
      if (callback) {
        createAPIRequest<Schema$Operation>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Operation>(parameters);
      }
    }
  }

  export interface Params$Resource$Users$Environments$Authorize extends
      StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * Name of the resource that should receive the credentials, for example
     * `users/me/environments/default` or
     * `users/someone@example.com/environments/default`.
     */
    name?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$AuthorizeEnvironmentRequest;
  }
  export interface Params$Resource$Users$Environments$Get extends
      StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * Name of the requested resource, for example
     * `users/me/environments/default` or
     * `users/someone@example.com/environments/default`.
     */
    name?: string;
  }
  export interface Params$Resource$Users$Environments$Patch extends
      StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * Name of the resource to be updated, for example
     * `users/me/environments/default` or
     * `users/someone@example.com/environments/default`.
     */
    name?: string;
    /**
     * Mask specifying which fields in the environment should be updated.
     */
    updateMask?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$Environment;
  }
  export interface Params$Resource$Users$Environments$Start extends
      StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * Name of the resource that should be started, for example
     * `users/me/environments/default` or
     * `users/someone@example.com/environments/default`.
     */
    name?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$StartEnvironmentRequest;
  }

  export class Resource$Users$Environments$Publickeys {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }


    /**
     * cloudshell.users.environments.publicKeys.create
     * @desc Adds a public SSH key to an environment, allowing clients with the
     * corresponding private key to connect to that environment via SSH. If a
     * key with the same format and content already exists, this will return the
     * existing key.
     * @alias cloudshell.users.environments.publicKeys.create
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.parent Parent resource name, e.g. `users/me/environments/default`.
     * @param {().CreatePublicKeyRequest} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    create(
        params?: Params$Resource$Users$Environments$Publickeys$Create,
        options?: MethodOptions): GaxiosPromise<Schema$PublicKey>;
    create(
        params: Params$Resource$Users$Environments$Publickeys$Create,
        options: MethodOptions|BodyResponseCallback<Schema$PublicKey>,
        callback: BodyResponseCallback<Schema$PublicKey>): void;
    create(
        params: Params$Resource$Users$Environments$Publickeys$Create,
        callback: BodyResponseCallback<Schema$PublicKey>): void;
    create(callback: BodyResponseCallback<Schema$PublicKey>): void;
    create(
        paramsOrCallback?: Params$Resource$Users$Environments$Publickeys$Create|
        BodyResponseCallback<Schema$PublicKey>,
        optionsOrCallback?: MethodOptions|
        BodyResponseCallback<Schema$PublicKey>,
        callback?: BodyResponseCallback<Schema$PublicKey>):
        void|GaxiosPromise<Schema$PublicKey> {
      let params = (paramsOrCallback || {}) as
          Params$Resource$Users$Environments$Publickeys$Create;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Users$Environments$Publickeys$Create;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://cloudshell.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl + '/v1alpha1/{+parent}/publicKeys')
                       .replace(/([^:]\/)\/+/g, '$1'),
              method: 'POST'
            },
            options),
        params,
        requiredParams: ['parent'],
        pathParams: ['parent'],
        context: this.context
      };
      if (callback) {
        createAPIRequest<Schema$PublicKey>(parameters, callback);
      } else {
        return createAPIRequest<Schema$PublicKey>(parameters);
      }
    }


    /**
     * cloudshell.users.environments.publicKeys.delete
     * @desc Removes a public SSH key from an environment. Clients will no
     * longer be able to connect to the environment using the corresponding
     * private key.
     * @alias cloudshell.users.environments.publicKeys.delete
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.name Name of the resource to be deleted, e.g. `users/me/environments/default/publicKeys/my-key`.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    delete(
        params?: Params$Resource$Users$Environments$Publickeys$Delete,
        options?: MethodOptions): GaxiosPromise<Schema$Empty>;
    delete(
        params: Params$Resource$Users$Environments$Publickeys$Delete,
        options: MethodOptions|BodyResponseCallback<Schema$Empty>,
        callback: BodyResponseCallback<Schema$Empty>): void;
    delete(
        params: Params$Resource$Users$Environments$Publickeys$Delete,
        callback: BodyResponseCallback<Schema$Empty>): void;
    delete(callback: BodyResponseCallback<Schema$Empty>): void;
    delete(
        paramsOrCallback?: Params$Resource$Users$Environments$Publickeys$Delete|
        BodyResponseCallback<Schema$Empty>,
        optionsOrCallback?: MethodOptions|BodyResponseCallback<Schema$Empty>,
        callback?: BodyResponseCallback<Schema$Empty>):
        void|GaxiosPromise<Schema$Empty> {
      let params = (paramsOrCallback || {}) as
          Params$Resource$Users$Environments$Publickeys$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Users$Environments$Publickeys$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://cloudshell.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url:
                  (rootUrl + '/v1alpha1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
              method: 'DELETE'
            },
            options),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.context
      };
      if (callback) {
        createAPIRequest<Schema$Empty>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Empty>(parameters);
      }
    }
  }

  export interface Params$Resource$Users$Environments$Publickeys$Create extends
      StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * Parent resource name, e.g. `users/me/environments/default`.
     */
    parent?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$CreatePublicKeyRequest;
  }
  export interface Params$Resource$Users$Environments$Publickeys$Delete extends
      StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * Name of the resource to be deleted, e.g.
     * `users/me/environments/default/publicKeys/my-key`.
     */
    name?: string;
  }
}
