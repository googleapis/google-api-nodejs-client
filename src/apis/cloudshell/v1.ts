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

import {createAPIRequest} from '../../lib/apirequest';

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
function Cloudshell(options) {
  const self = this;
  self._options = options || {};
  self.operations = {
    /**
     * cloudshell.operations.cancel
     * @desc Starts asynchronous cancellation on a long-running operation.  The
     * server makes a best effort to cancel the operation, but success is not
     * guaranteed.  If the server doesn't support this method, it returns
     * `google.rpc.Code.UNIMPLEMENTED`.  Clients can use Operations.GetOperation
     * or other methods to check whether the cancellation succeeded or whether
     * the operation completed despite cancellation. On successful cancellation,
     * the operation is not deleted; instead, it becomes an operation with an
     * Operation.error value with a google.rpc.Status.code of 1, corresponding
     * to `Code.CANCELLED`.
     * @alias cloudshell.operations.cancel
     * @memberOf! cloudshell(v1)
     *
     * @param {object} params Parameters for request
     * @param {string} params.name The name of the operation resource to be cancelled.
     * @param {cloudshell(v1).CancelOperationRequest} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    cancel(params, options, callback) {
      if (typeof options === 'function') {
        callback = options;
        options = {};
      }
      options = options || {};
      const rootUrl = options.rootUrl || 'https://cloudshell.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url:
                  (rootUrl + '/v1/{name}:cancel').replace(/([^:]\/)\/+/g, '$1'),
              method: 'POST'
            },
            options),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: self
      };
      return createAPIRequest(parameters, callback);
    }, /**
        * cloudshell.operations.delete
        * @desc Deletes a long-running operation. This method indicates that the
        * client is no longer interested in the operation result. It does not
        * cancel the operation. If the server doesn't support this method, it
        * returns `google.rpc.Code.UNIMPLEMENTED`.
        * @alias cloudshell.operations.delete
        * @memberOf! cloudshell(v1)
        *
        * @param {object} params Parameters for request
        * @param {string} params.name The name of the operation resource to be deleted.
        * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
        * @param {callback} callback The callback that handles the response.
        * @return {object} Request object
        */
    delete (params, options, callback) {
      if (typeof options === 'function') {
        callback = options;
        options = {};
      }
      options = options || {};
      const rootUrl = options.rootUrl || 'https://cloudshell.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl + '/v1/{name}').replace(/([^:]\/)\/+/g, '$1'),
              method: 'DELETE'
            },
            options),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: self
      };
      return createAPIRequest(parameters, callback);
    }, /**
        * cloudshell.operations.get
        * @desc Gets the latest state of a long-running operation.  Clients can
        * use this method to poll the operation result at intervals as
        * recommended by the API service.
        * @alias cloudshell.operations.get
        * @memberOf! cloudshell(v1)
        *
        * @param {object} params Parameters for request
        * @param {string} params.name The name of the operation resource.
        * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
        * @param {callback} callback The callback that handles the response.
        * @return {object} Request object
        */
    get(params, options, callback) {
      if (typeof options === 'function') {
        callback = options;
        options = {};
      }
      options = options || {};
      const rootUrl = options.rootUrl || 'https://cloudshell.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl + '/v1/{name}').replace(/([^:]\/)\/+/g, '$1'),
              method: 'GET'
            },
            options),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: self
      };
      return createAPIRequest(parameters, callback);
    }, /**
        * cloudshell.operations.list
        * @desc Lists operations that match the specified filter in the request.
        * If the server doesn't support this method, it returns `UNIMPLEMENTED`.
        * NOTE: the `name` binding allows API services to override the binding
        * to use different resource name schemes, such as `users/x/operations`.
        * To override the binding, API services can add a binding such as
        * `"/v1/{name=users/x}/operations"` to their service configuration. For
        * backwards compatibility, the default name includes the operations
        * collection id, however overriding users must ensure the name binding
        * is the parent resource, without the operations collection id.
        * @alias cloudshell.operations.list
        * @memberOf! cloudshell(v1)
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
    list(params, options, callback) {
      if (typeof options === 'function') {
        callback = options;
        options = {};
      }
      options = options || {};
      const rootUrl = options.rootUrl || 'https://cloudshell.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl + '/v1/{name}').replace(/([^:]\/)\/+/g, '$1'),
              method: 'GET'
            },
            options),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: self
      };
      return createAPIRequest(parameters, callback);
    }

  };
}
/**
 * @typedef CancelOperationRequest
 * @memberOf! cloudshell(v1)
 * @type object
 */
/**
 * @typedef Empty
 * @memberOf! cloudshell(v1)
 * @type object
 */
/**
 * @typedef Environment
 * @memberOf! cloudshell(v1)
 * @type object
 * @property {string} dockerImage Required. Full path to the Docker image used to run this environment, e.g. &quot;gcr.io/dev-con/cloud-devshell:latest&quot;.
 * @property {string} id Output only. The environment&#39;s identifier, which is always &quot;default&quot;.
 * @property {string} name Output only. Full name of this resource, in the format `users/{owner_email}/environments/{environment_id}`. `{owner_email}` is the email address of the user to whom this environment belongs, and `{environment_id}` is the identifier of this environment. For example, `users/someone@example.com/environments/default`.
 * @property {cloudshell(v1).PublicKey[]} publicKeys Output only. Public keys associated with the environment. Clients can connect to this environment via SSH only if they possess a private key corresponding to at least one of these public keys. Keys can be added to or removed from the environment using the CreatePublicKey and DeletePublicKey methods.
 * @property {string} sshHost Output only. Host to which clients can connect to initiate SSH sessions with the environment.
 * @property {integer} sshPort Output only. Port to which clients can connect to initiate SSH sessions with the environment.
 * @property {string} sshUsername Output only. Username that clients should use when initiating SSH sessions with the environment.
 * @property {string} state Output only. Current execution state of this environment.
 */
/**
 * @typedef ListOperationsResponse
 * @memberOf! cloudshell(v1)
 * @type object
 * @property {string} nextPageToken The standard List next-page token.
 * @property {cloudshell(v1).Operation[]} operations A list of operations that matches the specified filter in the request.
 */
/**
 * @typedef Operation
 * @memberOf! cloudshell(v1)
 * @type object
 * @property {boolean} done If the value is `false`, it means the operation is still in progress. If `true`, the operation is completed, and either `error` or `response` is available.
 * @property {cloudshell(v1).Status} error The error result of the operation in case of failure or cancellation.
 * @property {object} metadata Service-specific metadata associated with the operation.  It typically contains progress information and common metadata such as create time. Some services might not provide such metadata.  Any method that returns a long-running operation should document the metadata type, if any.
 * @property {string} name The server-assigned name, which is only unique within the same service that originally returns it. If you use the default HTTP mapping, the `name` should have the format of `operations/some/unique/name`.
 * @property {object} response The normal response of the operation in case of success.  If the original method returns no data on success, such as `Delete`, the response is `google.protobuf.Empty`.  If the original method is standard `Get`/`Create`/`Update`, the response should be the resource.  For other methods, the response should have the type `XxxResponse`, where `Xxx` is the original method name.  For example, if the original method name is `TakeSnapshot()`, the inferred response type is `TakeSnapshotResponse`.
 */
/**
 * @typedef PublicKey
 * @memberOf! cloudshell(v1)
 * @type object
 * @property {string} format Required. Format of this key&#39;s content.
 * @property {string} key Required. Content of this key.
 * @property {string} name Output only. Full name of this resource, in the format `users/{owner_email}/environments/{environment_id}/publicKeys/{key_id}`. `{owner_email}` is the email address of the user to whom the key belongs. `{environment_id}` is the identifier of the environment to which the key grants access. `{key_id}` is the unique identifier of the key. For example, `users/someone@example.com/environments/default/publicKeys/myKey`.
 */
/**
 * @typedef StartEnvironmentMetadata
 * @memberOf! cloudshell(v1)
 * @type object
 * @property {string} state Current state of the environment being started.
 */
/**
 * @typedef StartEnvironmentResponse
 * @memberOf! cloudshell(v1)
 * @type object
 * @property {cloudshell(v1).Environment} environment Environment that was started.
 */
/**
 * @typedef Status
 * @memberOf! cloudshell(v1)
 * @type object
 * @property {integer} code The status code, which should be an enum value of google.rpc.Code.
 * @property {object[]} details A list of messages that carry the error details.  There is a common set of message types for APIs to use.
 * @property {string} message A developer-facing error message, which should be in English. Any user-facing error message should be localized and sent in the google.rpc.Status.details field, or localized by the client.
 */

export = Cloudshell;
