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
 * Cloud Shell API
 *
 * Allows users to start, configure, and connect to interactive shell sessions
 * running in the cloud.
 *
 * @example
 * const google = require('googleapis');
 * const cloudshell = google.cloudshell('v1');
 *
 * @namespace cloudshell
 * @type {Function}
 * @version v1
 * @variation v1
 * @param {object=} options Options for Cloudshell
 */
export class Cloudshell {
  _options: GlobalOptions;
  google: GoogleApis;
  root = this;

  operations: Resource$Operations;

  constructor(options: GlobalOptions, google: GoogleApis) {
    this._options = options || {};
    this.google = google;
    this.getRoot.bind(this);

    this.operations = new Resource$Operations(this);
  }

  getRoot() {
    return this.root;
  }
}

/**
 * The request message for Operations.CancelOperation.
 */
export interface Schema$CancelOperationRequest {}
/**
 * A generic empty message that you can re-use to avoid defining duplicated
 * empty messages in your APIs. A typical example is to use it as the request or
 * the response type of an API method. For instance:      service Foo { rpc
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
   * Required. Full path to the Docker image used to run this environment, e.g.
   * &quot;gcr.io/dev-con/cloud-devshell:latest&quot;.
   */
  dockerImage: string;
  /**
   * Output only. The environment&#39;s identifier, which is always
   * &quot;default&quot;.
   */
  id: string;
  /**
   * Output only. Full name of this resource, in the format
   * `users/{owner_email}/environments/{environment_id}`. `{owner_email}` is the
   * email address of the user to whom this environment belongs, and
   * `{environment_id}` is the identifier of this environment. For example,
   * `users/someone@example.com/environments/default`.
   */
  name: string;
  /**
   * Output only. Public keys associated with the environment. Clients can
   * connect to this environment via SSH only if they possess a private key
   * corresponding to at least one of these public keys. Keys can be added to or
   * removed from the environment using the CreatePublicKey and DeletePublicKey
   * methods.
   */
  publicKeys: Schema$PublicKey[];
  /**
   * Output only. Host to which clients can connect to initiate SSH sessions
   * with the environment.
   */
  sshHost: string;
  /**
   * Output only. Port to which clients can connect to initiate SSH sessions
   * with the environment.
   */
  sshPort: number;
  /**
   * Output only. Username that clients should use when initiating SSH sessions
   * with the environment.
   */
  sshUsername: string;
  /**
   * Output only. Current execution state of this environment.
   */
  state: string;
}
/**
 * The response message for Operations.ListOperations.
 */
export interface Schema$ListOperationsResponse {
  /**
   * The standard List next-page token.
   */
  nextPageToken: string;
  /**
   * A list of operations that matches the specified filter in the request.
   */
  operations: Schema$Operation[];
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
  done: boolean;
  /**
   * The error result of the operation in case of failure or cancellation.
   */
  error: Schema$Status;
  /**
   * Service-specific metadata associated with the operation.  It typically
   * contains progress information and common metadata such as create time. Some
   * services might not provide such metadata.  Any method that returns a
   * long-running operation should document the metadata type, if any.
   */
  metadata: any;
  /**
   * The server-assigned name, which is only unique within the same service that
   * originally returns it. If you use the default HTTP mapping, the `name`
   * should have the format of `operations/some/unique/name`.
   */
  name: string;
  /**
   * The normal response of the operation in case of success.  If the original
   * method returns no data on success, such as `Delete`, the response is
   * `google.protobuf.Empty`.  If the original method is standard
   * `Get`/`Create`/`Update`, the response should be the resource.  For other
   * methods, the response should have the type `XxxResponse`, where `Xxx` is
   * the original method name.  For example, if the original method name is
   * `TakeSnapshot()`, the inferred response type is `TakeSnapshotResponse`.
   */
  response: any;
}
/**
 * A public SSH key, corresponding to a private SSH key held by the client.
 */
export interface Schema$PublicKey {
  /**
   * Required. Format of this key&#39;s content.
   */
  format: string;
  /**
   * Required. Content of this key.
   */
  key: string;
  /**
   * Output only. Full name of this resource, in the format
   * `users/{owner_email}/environments/{environment_id}/publicKeys/{key_id}`.
   * `{owner_email}` is the email address of the user to whom the key belongs.
   * `{environment_id}` is the identifier of the environment to which the key
   * grants access. `{key_id}` is the unique identifier of the key. For example,
   * `users/someone@example.com/environments/default/publicKeys/myKey`.
   */
  name: string;
}
/**
 * Message included in the metadata field of operations returned from
 * StartEnvironment.
 */
export interface Schema$StartEnvironmentMetadata {
  /**
   * Current state of the environment being started.
   */
  state: string;
}
/**
 * Message included in the response field of operations returned from
 * StartEnvironment once the operation is complete.
 */
export interface Schema$StartEnvironmentResponse {
  /**
   * Environment that was started.
   */
  environment: Schema$Environment;
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

export class Resource$Operations {
  root: Cloudshell;
  constructor(root: Cloudshell) {
    this.root = root;
    this.getRoot.bind(this);
  }

  getRoot() {
    return this.root;
  }


  /**
   * cloudshell.operations.cancel
   * @desc Starts asynchronous cancellation on a long-running operation.  The
   * server makes a best effort to cancel the operation, but success is not
   * guaranteed.  If the server doesn't support this method, it returns
   * `google.rpc.Code.UNIMPLEMENTED`.  Clients can use Operations.GetOperation
   * or other methods to check whether the cancellation succeeded or whether the
   * operation completed despite cancellation. On successful cancellation, the
   * operation is not deleted; instead, it becomes an operation with an
   * Operation.error value with a google.rpc.Status.code of 1, corresponding to
   * `Code.CANCELLED`.
   * @alias cloudshell.operations.cancel
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.name The name of the operation resource to be cancelled.
   * @param {().CancelOperationRequest} params.resource Request body data
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  cancel(params?: any, options?: MethodOptions): AxiosPromise<Schema$Empty>;
  cancel(
      params?: any, options?: MethodOptions|BodyResponseCallback<Schema$Empty>,
      callback?: BodyResponseCallback<Schema$Empty>): void;
  cancel(
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
    const rootUrl = options.rootUrl || 'https://cloudshell.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}:cancel').replace(/([^:]\/)\/+/g, '$1'),
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
   * cloudshell.operations.delete
   * @desc Deletes a long-running operation. This method indicates that the
   * client is no longer interested in the operation result. It does not cancel
   * the operation. If the server doesn't support this method, it returns
   * `google.rpc.Code.UNIMPLEMENTED`.
   * @alias cloudshell.operations.delete
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.name The name of the operation resource to be deleted.
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
    const rootUrl = options.rootUrl || 'https://cloudshell.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
   * cloudshell.operations.get
   * @desc Gets the latest state of a long-running operation.  Clients can use
   * this method to poll the operation result at intervals as recommended by the
   * API service.
   * @alias cloudshell.operations.get
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.name The name of the operation resource.
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  get(params?: any, options?: MethodOptions): AxiosPromise<Schema$Operation>;
  get(params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$Operation>,
      callback?: BodyResponseCallback<Schema$Operation>): void;
  get(params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$Operation>,
      callback?: BodyResponseCallback<Schema$Operation>):
      void|AxiosPromise<Schema$Operation> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://cloudshell.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
   * cloudshell.operations.list
   * @desc Lists operations that match the specified filter in the request. If
   * the server doesn't support this method, it returns `UNIMPLEMENTED`.  NOTE:
   * the `name` binding allows API services to override the binding to use
   * different resource name schemes, such as `users/x/operations`. To override
   * the binding, API services can add a binding such as
   * `"/v1/{name=users/x}/operations"` to their service configuration. For
   * backwards compatibility, the default name includes the operations
   * collection id, however overriding users must ensure the name binding is the
   * parent resource, without the operations collection id.
   * @alias cloudshell.operations.list
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string=} params.filter The standard list filter.
   * @param {string} params.name The name of the operation's parent resource.
   * @param {integer=} params.pageSize The standard list page size.
   * @param {string=} params.pageToken The standard list page token.
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  list(params?: any, options?: MethodOptions):
      AxiosPromise<Schema$ListOperationsResponse>;
  list(
      params?: any,
      options?: MethodOptions|
      BodyResponseCallback<Schema$ListOperationsResponse>,
      callback?: BodyResponseCallback<Schema$ListOperationsResponse>): void;
  list(
      params?: any,
      options?: MethodOptions|
      BodyResponseCallback<Schema$ListOperationsResponse>,
      callback?: BodyResponseCallback<Schema$ListOperationsResponse>):
      void|AxiosPromise<Schema$ListOperationsResponse> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://cloudshell.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET'
          },
          options),
      params,
      requiredParams: ['name'],
      pathParams: ['name'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$ListOperationsResponse>(parameters, callback);
    } else {
      return createAPIRequest<Schema$ListOperationsResponse>(parameters);
    }
  }
}
