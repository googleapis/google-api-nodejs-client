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
 * Cloud TPU API
 *
 * TPU API provides customers with access to Google TPU technology.
 *
 * @example
 * const google = require('googleapis');
 * const tpu = google.tpu('v1alpha1');
 *
 * @namespace tpu
 * @type {Function}
 * @version v1alpha1
 * @variation v1alpha1
 * @param {object=} options Options for Tpu
 */
function Tpu(options) {
  const self = this;
  self._options = options || {};
  self.projects = {
    locations: {
      /**
       * tpu.projects.locations.get
       * @desc Get information about a location.
       * @alias tpu.projects.locations.get
       * @memberOf! tpu(v1alpha1)
       *
       * @param {object} params Parameters for request
       * @param {string} params.name Resource name for the location.
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
        const rootUrl = options.rootUrl || 'https://tpu.googleapis.com/';
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
          * tpu.projects.locations.list
          * @desc Lists information about the supported locations for this
          * service.
          * @alias tpu.projects.locations.list
          * @memberOf! tpu(v1alpha1)
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
      list(params, options, callback) {
        if (typeof options === 'function') {
          callback = options;
          options = {};
        }
        options = options || {};
        const rootUrl = options.rootUrl || 'https://tpu.googleapis.com/';
        const parameters = {
          options: Object.assign(
              {
                url: (rootUrl + '/v1alpha1/{name}/locations')
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
      },
      nodes: {
        /**
         * tpu.projects.locations.nodes.create
         * @desc Creates a node.
         * @alias tpu.projects.locations.nodes.create
         * @memberOf! tpu(v1alpha1)
         *
         * @param {object} params Parameters for request
         * @param {string=} params.nodeId The unqualified resource name.
         * @param {string} params.parent The parent resource name.
         * @param {tpu(v1alpha1).Node} params.resource Request body data
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
          const rootUrl = options.rootUrl || 'https://tpu.googleapis.com/';
          const parameters = {
            options: Object.assign(
                {
                  url: (rootUrl + '/v1alpha1/{parent}/nodes')
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
            * tpu.projects.locations.nodes.delete
            * @desc Deletes a node.
            * @alias tpu.projects.locations.nodes.delete
            * @memberOf! tpu(v1alpha1)
            *
            * @param {object} params Parameters for request
            * @param {string} params.name The resource name.
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
          const rootUrl = options.rootUrl || 'https://tpu.googleapis.com/';
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
        }, /**
            * tpu.projects.locations.nodes.get
            * @desc Gets the details of a node.
            * @alias tpu.projects.locations.nodes.get
            * @memberOf! tpu(v1alpha1)
            *
            * @param {object} params Parameters for request
            * @param {string} params.name The resource name.
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
          const rootUrl = options.rootUrl || 'https://tpu.googleapis.com/';
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
            * tpu.projects.locations.nodes.list
            * @desc Lists nodes.
            * @alias tpu.projects.locations.nodes.list
            * @memberOf! tpu(v1alpha1)
            *
            * @param {object} params Parameters for request
            * @param {integer=} params.pageSize The maximum number of items to return.
            * @param {string=} params.pageToken The next_page_token value returned from a previous List request, if any.
            * @param {string} params.parent The parent resource name.
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
          const rootUrl = options.rootUrl || 'https://tpu.googleapis.com/';
          const parameters = {
            options: Object.assign(
                {
                  url: (rootUrl + '/v1alpha1/{parent}/nodes')
                           .replace(/([^:]\/)\/+/g, '$1'),
                  method: 'GET'
                },
                options),
            params,
            requiredParams: ['parent'],
            pathParams: ['parent'],
            context: self
          };
          return createAPIRequest(parameters, callback);
        }, /**
            * tpu.projects.locations.nodes.reimage
            * @desc Reimage a node's OS.
            * @alias tpu.projects.locations.nodes.reimage
            * @memberOf! tpu(v1alpha1)
            *
            * @param {object} params Parameters for request
            * @param {string} params.name The resource name.
            * @param {tpu(v1alpha1).ReimageNodeRequest} params.resource Request body data
            * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
            * @param {callback} callback The callback that handles the response.
            * @return {object} Request object
            */
        reimage(params, options, callback) {
          if (typeof options === 'function') {
            callback = options;
            options = {};
          }
          options = options || {};
          const rootUrl = options.rootUrl || 'https://tpu.googleapis.com/';
          const parameters = {
            options: Object.assign(
                {
                  url: (rootUrl + '/v1alpha1/{name}:reimage')
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
        }, /**
            * tpu.projects.locations.nodes.reset
            * @desc Resets a node, which stops and starts the VM.
            * @alias tpu.projects.locations.nodes.reset
            * @memberOf! tpu(v1alpha1)
            *
            * @param {object} params Parameters for request
            * @param {string} params.name The resource name.
            * @param {tpu(v1alpha1).ResetNodeRequest} params.resource Request body data
            * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
            * @param {callback} callback The callback that handles the response.
            * @return {object} Request object
            */
        reset(params, options, callback) {
          if (typeof options === 'function') {
            callback = options;
            options = {};
          }
          options = options || {};
          const rootUrl = options.rootUrl || 'https://tpu.googleapis.com/';
          const parameters = {
            options: Object.assign(
                {
                  url: (rootUrl + '/v1alpha1/{name}:reset')
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
        }

      },
      operations: {
        /**
         * tpu.projects.locations.operations.cancel
         * @desc Starts asynchronous cancellation on a long-running operation.
         * The server makes a best effort to cancel the operation, but success
         * is not guaranteed.  If the server doesn't support this method, it
         * returns `google.rpc.Code.UNIMPLEMENTED`.  Clients can use
         * Operations.GetOperation or other methods to check whether the
         * cancellation succeeded or whether the operation completed despite
         * cancellation. On successful cancellation, the operation is not
         * deleted; instead, it becomes an operation with an Operation.error
         * value with a google.rpc.Status.code of 1, corresponding to
         * `Code.CANCELLED`.
         * @alias tpu.projects.locations.operations.cancel
         * @memberOf! tpu(v1alpha1)
         *
         * @param {object} params Parameters for request
         * @param {string} params.name The name of the operation resource to be cancelled.
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
          const rootUrl = options.rootUrl || 'https://tpu.googleapis.com/';
          const parameters = {
            options: Object.assign(
                {
                  url: (rootUrl + '/v1alpha1/{name}:cancel')
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
        }, /**
            * tpu.projects.locations.operations.delete
            * @desc Deletes a long-running operation. This method indicates that
            * the client is no longer interested in the operation result. It
            * does not cancel the operation. If the server doesn't support this
            * method, it returns `google.rpc.Code.UNIMPLEMENTED`.
            * @alias tpu.projects.locations.operations.delete
            * @memberOf! tpu(v1alpha1)
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
          const rootUrl = options.rootUrl || 'https://tpu.googleapis.com/';
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
        }, /**
            * tpu.projects.locations.operations.get
            * @desc Gets the latest state of a long-running operation.  Clients
            * can use this method to poll the operation result at intervals as
            * recommended by the API service.
            * @alias tpu.projects.locations.operations.get
            * @memberOf! tpu(v1alpha1)
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
          const rootUrl = options.rootUrl || 'https://tpu.googleapis.com/';
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
            * tpu.projects.locations.operations.list
            * @desc Lists operations that match the specified filter in the
            * request. If the server doesn't support this method, it returns
            * `UNIMPLEMENTED`.  NOTE: the `name` binding allows API services to
            * override the binding to use different resource name schemes, such
            * as `users/x/operations`. To override the binding, API services can
            * add a binding such as `"/v1/{name=users/x}/operations"` to their
            * service configuration. For backwards compatibility, the default
            * name includes the operations collection id, however overriding
            * users must ensure the name binding is the parent resource, without
            * the operations collection id.
            * @alias tpu.projects.locations.operations.list
            * @memberOf! tpu(v1alpha1)
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
          const rootUrl = options.rootUrl || 'https://tpu.googleapis.com/';
          const parameters = {
            options: Object.assign(
                {
                  url: (rootUrl + '/v1alpha1/{name}/operations')
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
        }

      }
    }
  };
}
/**
 * @typedef Empty
 * @memberOf! tpu(v1alpha1)
 * @type object
 */
/**
 * @typedef ListLocationsResponse
 * @memberOf! tpu(v1alpha1)
 * @type object
 * @property {tpu(v1alpha1).Location[]} locations A list of locations that matches the specified filter in the request.
 * @property {string} nextPageToken The standard List next-page token.
 */
/**
 * @typedef ListNodesResponse
 * @memberOf! tpu(v1alpha1)
 * @type object
 * @property {string} nextPageToken The next page token or empty if none.
 * @property {tpu(v1alpha1).Node[]} nodes The listed nodes.
 */
/**
 * @typedef ListOperationsResponse
 * @memberOf! tpu(v1alpha1)
 * @type object
 * @property {string} nextPageToken The standard List next-page token.
 * @property {tpu(v1alpha1).Operation[]} operations A list of operations that matches the specified filter in the request.
 */
/**
 * @typedef Location
 * @memberOf! tpu(v1alpha1)
 * @type object
 * @property {object} labels Cross-service attributes for the location. For example      {&quot;cloud.googleapis.com/region&quot;: &quot;us-east1&quot;}
 * @property {string} locationId The canonical id for this location. For example: `&quot;us-east1&quot;`.
 * @property {object} metadata Service-specific metadata. For example the available capacity at the given location.
 * @property {string} name Resource name for the location, which may vary between implementations. For example: `&quot;projects/example-project/locations/us-east1&quot;`
 */
/**
 * @typedef NetworkEndpoint
 * @memberOf! tpu(v1alpha1)
 * @type object
 * @property {string} ipAddress The IP address of this network endpoint.
 * @property {integer} port The port of this network endpoint.
 */
/**
 * @typedef Node
 * @memberOf! tpu(v1alpha1)
 * @type object
 * @property {string} acceleratorType The type of hardware accelerators associated with this node. Required.
 * @property {string} cidrBlock The CIDR block that the TPU node will use when selecting //an IP address. This CIDR block must be a /29 block; the GCE networks API forbids a smaller block, and using a larger block would be wasteful (a node can only consume one IP address). Errors will occur if the CIDR block has already been used for a currently existing TPU node, the CIDR block conflicts with any subnetworks in the user&#39;s provided network, or the provided network is peered with another network that is using that CIDR block. Required.
 * @property {string} createTime Output only. The time when the node was created.
 * @property {string} description The user-supplied description of the TPU. Maximum of 512 characters.
 * @property {string} health The health status of the TPU node.
 * @property {string} healthDescription Output only. If this field is populated, it contains a description of why the TPU Node is unhealthy.
 * @property {string} ipAddress Output only. DEPRECATED! Use network_endpoints instead. The network address for the TPU Node as visible to GCE instances.
 * @property {string} name Output only. The immutable name of the TPU
 * @property {string} network The name of a network they wish to peer the TPU node to. It must be a preexisting GCE network inside of the project on which this API has been activated. If none is provided, &quot;default&quot; will be used.
 * @property {tpu(v1alpha1).NetworkEndpoint[]} networkEndpoints Output only. The network endpoints where TPU workers can be accessed and sent work. It is recommended that Tensorflow clients of the node reach out to the 0th entry in this map first.
 * @property {string} port Output only. DEPRECATED! Use network_endpoints instead. The network port for the TPU Node as visible to GCE instances.
 * @property {string} serviceAccount Output only. The service account used to run the tensor flow services within the node. To share resources, including Google Cloud Storage data, with the Tensorflow job running in the Node, this account must have permissions to that data.
 * @property {string} state Output only. The current state for the TPU Node.
 * @property {string} tensorflowVersion The version of Tensorflow running in the Node. Required.
 */
/**
 * @typedef Operation
 * @memberOf! tpu(v1alpha1)
 * @type object
 * @property {boolean} done If the value is `false`, it means the operation is still in progress. If `true`, the operation is completed, and either `error` or `response` is available.
 * @property {tpu(v1alpha1).Status} error The error result of the operation in case of failure or cancellation.
 * @property {object} metadata Service-specific metadata associated with the operation.  It typically contains progress information and common metadata such as create time. Some services might not provide such metadata.  Any method that returns a long-running operation should document the metadata type, if any.
 * @property {string} name The server-assigned name, which is only unique within the same service that originally returns it. If you use the default HTTP mapping, the `name` should have the format of `operations/some/unique/name`.
 * @property {object} response The normal response of the operation in case of success.  If the original method returns no data on success, such as `Delete`, the response is `google.protobuf.Empty`.  If the original method is standard `Get`/`Create`/`Update`, the response should be the resource.  For other methods, the response should have the type `XxxResponse`, where `Xxx` is the original method name.  For example, if the original method name is `TakeSnapshot()`, the inferred response type is `TakeSnapshotResponse`.
 */
/**
 * @typedef OperationMetadata
 * @memberOf! tpu(v1alpha1)
 * @type object
 * @property {string} apiVersion [Output only] API version used to start the operation.
 * @property {boolean} cancelRequested [Output only] Identifies whether the user has requested cancellation of the operation. Operations that have successfully been cancelled have Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.
 * @property {string} createTime [Output only] The time the operation was created.
 * @property {string} endTime [Output only] The time the operation finished running.
 * @property {string} statusDetail [Output only] Human-readable status of the operation, if any.
 * @property {string} target [Output only] Server-defined resource path for the target of the operation.
 * @property {string} verb [Output only] Name of the verb executed by the operation.
 */
/**
 * @typedef ReimageNodeRequest
 * @memberOf! tpu(v1alpha1)
 * @type object
 * @property {string} tensorflowVersion The version for reimage to create.
 */
/**
 * @typedef ResetNodeRequest
 * @memberOf! tpu(v1alpha1)
 * @type object
 */
/**
 * @typedef Status
 * @memberOf! tpu(v1alpha1)
 * @type object
 * @property {integer} code The status code, which should be an enum value of google.rpc.Code.
 * @property {object[]} details A list of messages that carry the error details.  There is a common set of message types for APIs to use.
 * @property {string} message A developer-facing error message, which should be in English. Any user-facing error message should be localized and sent in the google.rpc.Status.details field, or localized by the client.
 */

export = Tpu;
