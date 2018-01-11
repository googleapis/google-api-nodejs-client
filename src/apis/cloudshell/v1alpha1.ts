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
 * const cloudshell = google.cloudshell('v1alpha1');
 *
 * @namespace cloudshell
 * @type {Function}
 * @version v1alpha1
 * @variation v1alpha1
 * @param {object=} options Options for Cloudshell
 */
function Cloudshell(options) {
  const self = this;
  self._options = options || {};
  self.users = {
    environments: {
      /**
       * cloudshell.users.environments.get
       * @desc Gets an environment. Returns NOT_FOUND if the environment does
       * not exist.
       * @alias cloudshell.users.environments.get
       * @memberOf! cloudshell(v1alpha1)
       *
       * @param {object} params Parameters for request
       * @param {string} params.name Name of the requested resource, for example `users/me/environments/default` or `users/someone@example.com/environments/default`.
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
                url: (rootUrl + '/v1alpha1/{name}')
                         .replace(/([^:]\/)\/+/g, '$1'),
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
          * cloudshell.users.environments.patch
          * @desc Updates an existing environment.
          * @alias cloudshell.users.environments.patch
          * @memberOf! cloudshell(v1alpha1)
          *
          * @param {object} params Parameters for request
          * @param {string} params.name Name of the resource to be updated, for example `users/me/environments/default` or `users/someone@example.com/environments/default`.
          * @param {string=} params.updateMask Mask specifying which fields in the environment should be updated.
          * @param {cloudshell(v1alpha1).Environment} params.resource Request body data
          * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
          * @param {callback} callback The callback that handles the response.
          * @return {object} Request object
          */
      patch(params, options, callback) {
        if (typeof options === 'function') {
          callback = options;
          options = {};
        }
        options = options || {};
        const rootUrl = options.rootUrl || 'https://cloudshell.googleapis.com/';
        const parameters = {
          options: Object.assign(
              {
                url: (rootUrl + '/v1alpha1/{name}')
                         .replace(/([^:]\/)\/+/g, '$1'),
                method: 'PATCH'
              },
              options),
          params,
          requiredParams: ['name'],
          pathParams: ['name'],
          context: self
        };
        return createAPIRequest(parameters, callback);
      }, /**
          * cloudshell.users.environments.start
          * @desc Starts an existing environment, allowing clients to connect to
          * it. The returned operation will contain an instance of
          * StartEnvironmentMetadata in its metadata field. Users can wait for
          * the environment to start by polling this operation via GetOperation.
          * Once the environment has finished starting and is ready to accept
          * connections, the operation will contain a StartEnvironmentResponse
          * in its response field.
          * @alias cloudshell.users.environments.start
          * @memberOf! cloudshell(v1alpha1)
          *
          * @param {object} params Parameters for request
          * @param {string} params.name Name of the resource that should be started, for example `users/me/environments/default` or `users/someone@example.com/environments/default`.
          * @param {cloudshell(v1alpha1).StartEnvironmentRequest} params.resource Request body data
          * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
          * @param {callback} callback The callback that handles the response.
          * @return {object} Request object
          */
      start(params, options, callback) {
        if (typeof options === 'function') {
          callback = options;
          options = {};
        }
        options = options || {};
        const rootUrl = options.rootUrl || 'https://cloudshell.googleapis.com/';
        const parameters = {
          options: Object.assign(
              {
                url: (rootUrl + '/v1alpha1/{name}:start')
                         .replace(/([^:]\/)\/+/g, '$1'),
                method: 'POST'
              },
              options),
          params,
          requiredParams: ['name'],
          pathParams: ['name'],
          context: self
        };
        return createAPIRequest(parameters, callback);
      },
      publicKeys: {
        /**
         * cloudshell.users.environments.publicKeys.create
         * @desc Adds a public SSH key to an environment, allowing clients with
         * the corresponding private key to connect to that environment via SSH.
         * If a key with the same format and content already exists, this will
         * return the existing key.
         * @alias cloudshell.users.environments.publicKeys.create
         * @memberOf! cloudshell(v1alpha1)
         *
         * @param {object} params Parameters for request
         * @param {string} params.parent Parent resource name, e.g. `users/me/environments/default`.
         * @param {cloudshell(v1alpha1).CreatePublicKeyRequest} params.resource Request body data
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        create(params, options, callback) {
          if (typeof options === 'function') {
            callback = options;
            options = {};
          }
          options = options || {};
          const rootUrl =
              options.rootUrl || 'https://cloudshell.googleapis.com/';
          const parameters = {
            options: Object.assign(
                {
                  url: (rootUrl + '/v1alpha1/{parent}/publicKeys')
                           .replace(/([^:]\/)\/+/g, '$1'),
                  method: 'POST'
                },
                options),
            params,
            requiredParams: ['parent'],
            pathParams: ['parent'],
            context: self
          };
          return createAPIRequest(parameters, callback);
        }, /**
            * cloudshell.users.environments.publicKeys.delete
            * @desc Removes a public SSH key from an environment. Clients will
            * no longer be able to connect to the environment using the
            * corresponding private key.
            * @alias cloudshell.users.environments.publicKeys.delete
            * @memberOf! cloudshell(v1alpha1)
            *
            * @param {object} params Parameters for request
            * @param {string} params.name Name of the resource to be deleted, e.g. `users/me/environments/default/publicKeys/my-key`.
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
          const rootUrl =
              options.rootUrl || 'https://cloudshell.googleapis.com/';
          const parameters = {
            options: Object.assign(
                {
                  url: (rootUrl + '/v1alpha1/{name}')
                           .replace(/([^:]\/)\/+/g, '$1'),
                  method: 'DELETE'
                },
                options),
            params,
            requiredParams: ['name'],
            pathParams: ['name'],
            context: self
          };
          return createAPIRequest(parameters, callback);
        }

      }
    }
  };
}
/**
 * @typedef CreatePublicKeyRequest
 * @memberOf! cloudshell(v1alpha1)
 * @type object
 * @property {cloudshell(v1alpha1).PublicKey} key Key that should be added to the environment.
 */
/**
 * @typedef Empty
 * @memberOf! cloudshell(v1alpha1)
 * @type object
 */
/**
 * @typedef Environment
 * @memberOf! cloudshell(v1alpha1)
 * @type object
 * @property {string} dockerImage Required. Full path to the Docker image used to run this environment, e.g. &quot;gcr.io/dev-con/cloud-devshell:latest&quot;.
 * @property {string} id Output only. The environment&#39;s identifier, which is always &quot;default&quot;.
 * @property {string} name Output only. Full name of this resource, in the format `users/{owner_email}/environments/{environment_id}`. `{owner_email}` is the email address of the user to whom this environment belongs, and `{environment_id}` is the identifier of this environment. For example, `users/someone@example.com/environments/default`.
 * @property {cloudshell(v1alpha1).PublicKey[]} publicKeys Output only. Public keys associated with the environment. Clients can connect to this environment via SSH only if they possess a private key corresponding to at least one of these public keys. Keys can be added to or removed from the environment using the CreatePublicKey and DeletePublicKey methods.
 * @property {string} sshHost Output only. Host to which clients can connect to initiate SSH sessions with the environment.
 * @property {integer} sshPort Output only. Port to which clients can connect to initiate SSH sessions with the environment.
 * @property {string} sshUsername Output only. Username that clients should use when initiating SSH sessions with the environment.
 * @property {string} state Output only. Current execution state of this environment.
 */
/**
 * @typedef Operation
 * @memberOf! cloudshell(v1alpha1)
 * @type object
 * @property {boolean} done If the value is `false`, it means the operation is still in progress. If `true`, the operation is completed, and either `error` or `response` is available.
 * @property {cloudshell(v1alpha1).Status} error The error result of the operation in case of failure or cancellation.
 * @property {object} metadata Service-specific metadata associated with the operation.  It typically contains progress information and common metadata such as create time. Some services might not provide such metadata.  Any method that returns a long-running operation should document the metadata type, if any.
 * @property {string} name The server-assigned name, which is only unique within the same service that originally returns it. If you use the default HTTP mapping, the `name` should have the format of `operations/some/unique/name`.
 * @property {object} response The normal response of the operation in case of success.  If the original method returns no data on success, such as `Delete`, the response is `google.protobuf.Empty`.  If the original method is standard `Get`/`Create`/`Update`, the response should be the resource.  For other methods, the response should have the type `XxxResponse`, where `Xxx` is the original method name.  For example, if the original method name is `TakeSnapshot()`, the inferred response type is `TakeSnapshotResponse`.
 */
/**
 * @typedef PublicKey
 * @memberOf! cloudshell(v1alpha1)
 * @type object
 * @property {string} format Required. Format of this key&#39;s content.
 * @property {string} key Required. Content of this key.
 * @property {string} name Output only. Full name of this resource, in the format `users/{owner_email}/environments/{environment_id}/publicKeys/{key_id}`. `{owner_email}` is the email address of the user to whom the key belongs. `{environment_id}` is the identifier of the environment to which the key grants access. `{key_id}` is the unique identifier of the key. For example, `users/someone@example.com/environments/default/publicKeys/myKey`.
 */
/**
 * @typedef StartEnvironmentMetadata
 * @memberOf! cloudshell(v1alpha1)
 * @type object
 * @property {string} state Current state of the environment being started.
 */
/**
 * @typedef StartEnvironmentRequest
 * @memberOf! cloudshell(v1alpha1)
 * @type object
 */
/**
 * @typedef StartEnvironmentResponse
 * @memberOf! cloudshell(v1alpha1)
 * @type object
 * @property {cloudshell(v1alpha1).Environment} environment Environment that was started.
 */
/**
 * @typedef Status
 * @memberOf! cloudshell(v1alpha1)
 * @type object
 * @property {integer} code The status code, which should be an enum value of google.rpc.Code.
 * @property {object[]} details A list of messages that carry the error details.  There is a common set of message types for APIs to use.
 * @property {string} message A developer-facing error message, which should be in English. Any user-facing error message should be localized and sent in the google.rpc.Status.details field, or localized by the client.
 */

export = Cloudshell;
