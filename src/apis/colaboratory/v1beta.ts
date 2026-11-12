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
  GaxiosResponseWithHTTP2,
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

export namespace colaboratory_v1beta {
  export interface Options extends GlobalOptions {
    version: 'v1beta';
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
   * Colab API
   *
   * The Colab API lets you programmatically manage Colab runtimes.
   *
   * @example
   * ```js
   * const {google} = require('googleapis');
   * const colaboratory = google.colaboratory('v1beta');
   * ```
   */
  export class Colaboratory {
    context: APIRequestContext;
    runtimes: Resource$Runtimes;
    runtimespecs: Resource$Runtimespecs;
    v1beta: Resource$V1beta;

    constructor(options: GlobalOptions, google?: GoogleConfigurable) {
      this.context = {
        _options: options || {},
        google,
      };

      this.runtimes = new Resource$Runtimes(this.context);
      this.runtimespecs = new Resource$Runtimespecs(this.context);
      this.v1beta = new Resource$V1beta(this.context);
    }
  }

  /**
   * Connection info used to authenticate to the runtime.
   */
  export interface Schema$ConnectionInfo {
    /**
     * Required. Output only. The expiration time of the runtime proxy token.
     */
    expireTime?: string | null;
    /**
     * Required. Output only. The runtime proxy token. This is a short-lived credential used to authenticate to the runtime. Clients should set this token as the value of the `X-Colab-Runtime-Proxy-Token` HTTP header when connecting to the runtime, and call the GetRuntime API to refresh this token when approaching `expire_time`.
     */
    token?: string | null;
    /**
     * Required. Output only. The authenticated URL that can be used to connect to the runtime.
     */
    url?: string | null;
  }
  /**
   * A generic empty message that you can re-use to avoid defining duplicated empty messages in your APIs. A typical example is to use it as the request or the response type of an API method. For instance: service Foo { rpc Bar(google.protobuf.Empty) returns (google.protobuf.Empty); \}
   */
  export interface Schema$Empty {}
  /**
   * Describes the cause of the error with structured details. Example of an error when contacting the "pubsub.googleapis.com" API when it is not enabled: { "reason": "API_DISABLED" "domain": "googleapis.com" "metadata": { "resource": "projects/123", "service": "pubsub.googleapis.com" \} \} This response indicates that the pubsub.googleapis.com API is not enabled. Example of an error that is returned when attempting to create a Spanner instance in a region that is out of stock: { "reason": "STOCKOUT" "domain": "spanner.googleapis.com", "metadata": { "availableRegions": "us-central1,us-east2" \} \}
   */
  export interface Schema$ErrorInfo {
    /**
     * The logical grouping to which the "reason" belongs. The error domain is typically the registered service name of the tool or product that generates the error. Example: "pubsub.googleapis.com". If the error is generated by some common infrastructure, the error domain must be a globally unique value that identifies the infrastructure. For Google API infrastructure, the error domain is "googleapis.com".
     */
    domain?: string | null;
    /**
     * Additional structured details about this error. Keys must match a regular expression of `a-z+` but should ideally be lowerCamelCase. Also, they must be limited to 64 characters in length. When identifying the current value of an exceeded limit, the units should be contained in the key, not the value. For example, rather than `{"instanceLimit": "100/request"\}`, should be returned as, `{"instanceLimitPerRequest": "100"\}`, if the client exceeds the number of instances that can be created in a single (batch) request.
     */
    metadata?: {[key: string]: string} | null;
    /**
     * The reason for the error. This is a constant value that identifies the proximate cause of the error. Error reasons are unique within a particular domain of errors. This should be at most 63 characters and match a regular expression of `A-Z+[A-Z0-9]`, which represents UPPER_SNAKE_CASE.
     */
    reason?: string | null;
  }
  /**
   * Key fields that uniquely identify a runtime spec.
   */
  export interface Schema$Key {
    /**
     * Required. Runtime accelerator model name (e.g., "T4", "L4", "A100"). For CPU runtime specs, this field will be "NONE".
     */
    accelerator?: string | null;
    /**
     * Required. Runtime shape.
     */
    shape?: string | null;
    /**
     * Required. Runtime variant.
     */
    variant?: string | null;
  }
  /**
   * Response message for `ListRuntimeSpecs`.
   */
  export interface Schema$ListRuntimeSpecsResponse {
    /**
     * The list of runtime specs available to the requesting user.
     */
    runtimeSpecs?: Schema$RuntimeSpec[];
  }
  /**
   * Response message for `ListRuntimes`.
   */
  export interface Schema$ListRuntimesResponse {
    /**
     * The list of runtimes assigned to the requesting user.
     */
    runtimes?: Schema$Runtime[];
  }
  /**
   * This resource represents a long-running operation that is the result of a network API call.
   */
  export interface Schema$Operation {
    /**
     * If the value is `false`, it means the operation is still in progress. If `true`, the operation is completed, and either `error` or `response` is available.
     */
    done?: boolean | null;
    /**
     * The error result of the operation in case of failure or cancellation.
     */
    error?: Schema$Status;
    /**
     * Service-specific metadata associated with the operation. It typically contains progress information and common metadata such as create time. Some services might not provide such metadata. Any method that returns a long-running operation should document the metadata type, if any.
     */
    metadata?: {[key: string]: any} | null;
    /**
     * The server-assigned name, which is only unique within the same service that originally returns it. If you use the default HTTP mapping, the `name` should be a resource name ending with `operations/{unique_id\}`.
     */
    name?: string | null;
    /**
     * The normal, successful response of the operation. If the original method returns no data on success, such as `Delete`, the response is `google.protobuf.Empty`. If the original method is standard `Get`/`Create`/`Update`, the response should be the resource. For other methods, the response should have the type `XxxResponse`, where `Xxx` is the original method name. For example, if the original method name is `TakeSnapshot()`, the inferred response type is `TakeSnapshotResponse`.
     */
    response?: {[key: string]: any} | null;
  }
  /**
   * A Colab managed runtime. This is essentially a Jupyter server that runs on Google infrastructure. Clients should use the connection_info provided to connect to the runtime, and leverage the standard Jupyter [REST API](https://jupyter-server.readthedocs.io/en/stable/developers/rest-api.html) and/or [client library](https://jupyter-client.readthedocs.io/en/stable/api/jupyter_client.html) to interact with the runtime.
   */
  export interface Schema$Runtime {
    /**
     * Output only. The connection info used to authenticate to the runtime.
     */
    connectionInfo?: Schema$ConnectionInfo;
    /**
     * Identifier. The name of the runtime in the format `runtimes/{runtime_id\}`, where `runtime_id` is either the value supplied via CreateRuntimeRequest.runtime_id or, if none was supplied, a random ID generated by the backend.
     */
    name?: string | null;
    /**
     * Required. The specification of the runtime. When calling `CreateRuntime`, this field should be set to an eligible runtime spec obtained from the ListRuntimeSpecsResponse.
     */
    runtimeSpec?: Schema$Key;
    /**
     * Optional. The version of the runtime image. See [Colab Runtime Version FAQ](https://research.google.com/colaboratory/runtime-version-faq.html) for supported runtime versions. If omitted (empty), the latest runtime image is used.
     */
    version?: string | null;
  }
  /**
   * A specification of a runtime.
   */
  export interface Schema$RuntimeSpec {
    /**
     * Output only. Whether the requesting user is eligible for the runtime spec.
     */
    eligible?: boolean | null;
    /**
     * Required. The key of the runtime spec.
     */
    key?: Schema$Key;
  }
  /**
   * The `Status` type defines a logical error model that is suitable for different programming environments, including REST APIs and RPC APIs. It is used by [gRPC](https://github.com/grpc). Each `Status` message contains three pieces of data: error code, error message, and error details. You can find out more about this error model and how to work with it in the [API Design Guide](https://cloud.google.com/apis/design/errors).
   */
  export interface Schema$Status {
    /**
     * The status code, which should be an enum value of google.rpc.Code.
     */
    code?: number | null;
    /**
     * A list of messages that carry the error details. There is a common set of message types for APIs to use.
     */
    details?: Array<{[key: string]: any}> | null;
    /**
     * A developer-facing error message, which should be in English. Any user-facing error message should be localized and sent in the google.rpc.Status.details field, or localized by the client.
     */
    message?: string | null;
  }
  /**
   * Colab user subscription information.
   */
  export interface Schema$Subscription {
    /**
     * Identifier. Name of the subscription. This will always be "subscription".
     */
    name?: string | null;
    /**
     * Required. User's Colab subscription tier.
     */
    tier?: string | null;
  }

  export class Resource$Runtimes {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Creates a Colab runtime assignment. When runtime creation is refused with a [`FAILED_PRECONDITION` (code: 9)](https://github.com/googleapis/googleapis/blob/437254f595a380cd9323111700ce0fcf9d6d2c21/google/rpc/code.proto#L128) error, a more specific error reason will be returned in the details of the Operation error wrapped in google.rpc.ErrorInfo. A requests-per-minute-per-project and a requests-per-minute-per-user quota are enforced on this API. To see the exact limit your project is subject to, after you enable the Colab API, view it in your project's [Quotas & System Limits](https://console.cloud.google.com/apis/api/colaboratory.googleapis.com/quotas) page. Note that there is no usage reporting on the per-user limit and it is not overridable at the individual user level.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/colaboratory.googleapis.com
     * // - Login into gcloud by running:
     * //   ```sh
     * //   $ gcloud auth application-default login
     * //   ```
     * // - Install the npm module by running:
     * //   ```sh
     * //   $ npm install googleapis
     * //   ```
     *
     * const {google} = require('googleapis');
     * const colaboratory = google.colaboratory('v1beta');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/colaboratory'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await colaboratory.runtimes.create({
     *     // Optional. A unique identifier for this request. This request is only idempotent if a `request_id` is provided. See [AIP-155](https://google.aip.dev/155) for more details. If provided, the request ID must be in UUID4 format per https://linter.aip.dev/155/request-id-format.
     *     requestId: 'placeholder-value',
     *     // Optional. A unique identifier for the runtime. If not supplied, a random ID will be generated. If a runtime with the given ID owned by the requesting user already exists, a completed Operation with an [`ALREADY_EXISTS` (code: 6)](https://github.com/googleapis/googleapis/blob/437254f595a380cd9323111700ce0fcf9d6d2c21/google/rpc/code.proto#L84) error will be returned. See [AIP-133](https://google.aip.dev/133#user-specified-ids) for more details. The ID must conform to [RFC-1034](https://datatracker.ietf.org/doc/html/rfc1034), specifically: - 1 to 63 characters - Lower-case letters, digits, and hyphens - Start with a letter - End with a letter or digit
     *     runtimeId: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "connectionInfo": {},
     *       //   "name": "my_name",
     *       //   "runtimeSpec": {},
     *       //   "version": "my_version"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "done": false,
     *   //   "error": {},
     *   //   "metadata": {},
     *   //   "name": "my_name",
     *   //   "response": {}
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
      params: Params$Resource$Runtimes$Create,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    create(
      params?: Params$Resource$Runtimes$Create,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Operation>>;
    create(
      params: Params$Resource$Runtimes$Create,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    create(
      params: Params$Resource$Runtimes$Create,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    create(
      params: Params$Resource$Runtimes$Create,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    create(callback: BodyResponseCallback<Schema$Operation>): void;
    create(
      paramsOrCallback?:
        | Params$Resource$Runtimes$Create
        | BodyResponseCallback<Schema$Operation>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Operation>
        | BodyResponseCallback<Readable>,
      callback?:
        BodyResponseCallback<Schema$Operation> | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$Operation>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback || {}) as Params$Resource$Runtimes$Create;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Runtimes$Create;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://colaboratory.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta/runtimes').replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: [],
        pathParams: [],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Operation>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Operation>(parameters);
      }
    }

    /**
     * Deletes a Colab runtime assignment. **Best Practices:** - Avoid deleting runtimes unless necessary. Reuse runtimes for efficiency. - Open a new Jupyter session on an existing runtime for state isolation.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/colaboratory.googleapis.com
     * // - Login into gcloud by running:
     * //   ```sh
     * //   $ gcloud auth application-default login
     * //   ```
     * // - Install the npm module by running:
     * //   ```sh
     * //   $ npm install googleapis
     * //   ```
     *
     * const {google} = require('googleapis');
     * const colaboratory = google.colaboratory('v1beta');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/colaboratory'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await colaboratory.runtimes.delete({
     *     // Optional. If set to `true`, and the runtime is not found, the request will succeed but no action will be taken on the server.
     *     allowMissing: 'placeholder-value',
     *     // Required. The name of the runtime to unassign. Format: `runtimes/{runtime_id\}`.
     *     name: 'runtimes/my-runtime',
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
      params: Params$Resource$Runtimes$Delete,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    delete(
      params?: Params$Resource$Runtimes$Delete,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Empty>>;
    delete(
      params: Params$Resource$Runtimes$Delete,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    delete(
      params: Params$Resource$Runtimes$Delete,
      options: MethodOptions | BodyResponseCallback<Schema$Empty>,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    delete(
      params: Params$Resource$Runtimes$Delete,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    delete(callback: BodyResponseCallback<Schema$Empty>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Runtimes$Delete
        | BodyResponseCallback<Schema$Empty>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Empty>
        | BodyResponseCallback<Readable>,
      callback?:
        BodyResponseCallback<Schema$Empty> | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$Empty>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback || {}) as Params$Resource$Runtimes$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Runtimes$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://colaboratory.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta/{+name}').replace(/([^:]\/)\/+/g, '$1'),
            method: 'DELETE',
            apiVersion: '',
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
     * Gets a Colab runtime assigned to the requesting user.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/colaboratory.googleapis.com
     * // - Login into gcloud by running:
     * //   ```sh
     * //   $ gcloud auth application-default login
     * //   ```
     * // - Install the npm module by running:
     * //   ```sh
     * //   $ npm install googleapis
     * //   ```
     *
     * const {google} = require('googleapis');
     * const colaboratory = google.colaboratory('v1beta');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/colaboratory',
     *       'https://www.googleapis.com/auth/colaboratory.readonly',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await colaboratory.runtimes.get({
     *     // Required. The name of the runtime to retrieve. Format: `runtimes/{runtime_id\}`.
     *     name: 'runtimes/my-runtime',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "connectionInfo": {},
     *   //   "name": "my_name",
     *   //   "runtimeSpec": {},
     *   //   "version": "my_version"
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
      params: Params$Resource$Runtimes$Get,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    get(
      params?: Params$Resource$Runtimes$Get,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Runtime>>;
    get(
      params: Params$Resource$Runtimes$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Runtimes$Get,
      options: MethodOptions | BodyResponseCallback<Schema$Runtime>,
      callback: BodyResponseCallback<Schema$Runtime>
    ): void;
    get(
      params: Params$Resource$Runtimes$Get,
      callback: BodyResponseCallback<Schema$Runtime>
    ): void;
    get(callback: BodyResponseCallback<Schema$Runtime>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Runtimes$Get
        | BodyResponseCallback<Schema$Runtime>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Runtime>
        | BodyResponseCallback<Readable>,
      callback?:
        BodyResponseCallback<Schema$Runtime> | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$Runtime>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback || {}) as Params$Resource$Runtimes$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Runtimes$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://colaboratory.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta/{+name}').replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Runtime>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Runtime>(parameters);
      }
    }

    /**
     * Lists Colab runtimes assigned to the requesting user.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/colaboratory.googleapis.com
     * // - Login into gcloud by running:
     * //   ```sh
     * //   $ gcloud auth application-default login
     * //   ```
     * // - Install the npm module by running:
     * //   ```sh
     * //   $ npm install googleapis
     * //   ```
     *
     * const {google} = require('googleapis');
     * const colaboratory = google.colaboratory('v1beta');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/colaboratory',
     *       'https://www.googleapis.com/auth/colaboratory.readonly',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await colaboratory.runtimes.list({});
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "runtimes": []
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
      params: Params$Resource$Runtimes$List,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    list(
      params?: Params$Resource$Runtimes$List,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$ListRuntimesResponse>>;
    list(
      params: Params$Resource$Runtimes$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Runtimes$List,
      options:
        MethodOptions | BodyResponseCallback<Schema$ListRuntimesResponse>,
      callback: BodyResponseCallback<Schema$ListRuntimesResponse>
    ): void;
    list(
      params: Params$Resource$Runtimes$List,
      callback: BodyResponseCallback<Schema$ListRuntimesResponse>
    ): void;
    list(callback: BodyResponseCallback<Schema$ListRuntimesResponse>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Runtimes$List
        | BodyResponseCallback<Schema$ListRuntimesResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ListRuntimesResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ListRuntimesResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$ListRuntimesResponse>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback || {}) as Params$Resource$Runtimes$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Runtimes$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://colaboratory.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta/runtimes').replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: [],
        pathParams: [],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$ListRuntimesResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ListRuntimesResponse>(parameters);
      }
    }
  }

  export interface Params$Resource$Runtimes$Create extends StandardParameters {
    /**
     * Optional. A unique identifier for this request. This request is only idempotent if a `request_id` is provided. See [AIP-155](https://google.aip.dev/155) for more details. If provided, the request ID must be in UUID4 format per https://linter.aip.dev/155/request-id-format.
     */
    requestId?: string;
    /**
     * Optional. A unique identifier for the runtime. If not supplied, a random ID will be generated. If a runtime with the given ID owned by the requesting user already exists, a completed Operation with an [`ALREADY_EXISTS` (code: 6)](https://github.com/googleapis/googleapis/blob/437254f595a380cd9323111700ce0fcf9d6d2c21/google/rpc/code.proto#L84) error will be returned. See [AIP-133](https://google.aip.dev/133#user-specified-ids) for more details. The ID must conform to [RFC-1034](https://datatracker.ietf.org/doc/html/rfc1034), specifically: - 1 to 63 characters - Lower-case letters, digits, and hyphens - Start with a letter - End with a letter or digit
     */
    runtimeId?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$Runtime;
  }
  export interface Params$Resource$Runtimes$Delete extends StandardParameters {
    /**
     * Optional. If set to `true`, and the runtime is not found, the request will succeed but no action will be taken on the server.
     */
    allowMissing?: boolean;
    /**
     * Required. The name of the runtime to unassign. Format: `runtimes/{runtime_id\}`.
     */
    name?: string;
  }
  export interface Params$Resource$Runtimes$Get extends StandardParameters {
    /**
     * Required. The name of the runtime to retrieve. Format: `runtimes/{runtime_id\}`.
     */
    name?: string;
  }
  export interface Params$Resource$Runtimes$List extends StandardParameters {}

  export class Resource$Runtimespecs {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Lists available Colab runtime specs and their eligibility to the requesting user.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/colaboratory.googleapis.com
     * // - Login into gcloud by running:
     * //   ```sh
     * //   $ gcloud auth application-default login
     * //   ```
     * // - Install the npm module by running:
     * //   ```sh
     * //   $ npm install googleapis
     * //   ```
     *
     * const {google} = require('googleapis');
     * const colaboratory = google.colaboratory('v1beta');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/colaboratory',
     *       'https://www.googleapis.com/auth/colaboratory.readonly',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await colaboratory.runtimespecs.list({});
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "runtimeSpecs": []
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
      params: Params$Resource$Runtimespecs$List,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    list(
      params?: Params$Resource$Runtimespecs$List,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$ListRuntimeSpecsResponse>>;
    list(
      params: Params$Resource$Runtimespecs$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Runtimespecs$List,
      options:
        MethodOptions | BodyResponseCallback<Schema$ListRuntimeSpecsResponse>,
      callback: BodyResponseCallback<Schema$ListRuntimeSpecsResponse>
    ): void;
    list(
      params: Params$Resource$Runtimespecs$List,
      callback: BodyResponseCallback<Schema$ListRuntimeSpecsResponse>
    ): void;
    list(callback: BodyResponseCallback<Schema$ListRuntimeSpecsResponse>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Runtimespecs$List
        | BodyResponseCallback<Schema$ListRuntimeSpecsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ListRuntimeSpecsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ListRuntimeSpecsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$ListRuntimeSpecsResponse>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Runtimespecs$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Runtimespecs$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://colaboratory.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta/runtimespecs').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'GET',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: [],
        pathParams: [],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$ListRuntimeSpecsResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ListRuntimeSpecsResponse>(parameters);
      }
    }
  }

  export interface Params$Resource$Runtimespecs$List extends StandardParameters {}

  export class Resource$V1beta {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Gets the subscription of the requesting user.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/colaboratory.googleapis.com
     * // - Login into gcloud by running:
     * //   ```sh
     * //   $ gcloud auth application-default login
     * //   ```
     * // - Install the npm module by running:
     * //   ```sh
     * //   $ npm install googleapis
     * //   ```
     *
     * const {google} = require('googleapis');
     * const colaboratory = google.colaboratory('v1beta');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/colaboratory',
     *       'https://www.googleapis.com/auth/colaboratory.readonly',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await colaboratory.getSubscription({
     *     // Required. The name of the subscription to retrieve. The only valid value is "subscription".
     *     name: 'subscription',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "name": "my_name",
     *   //   "tier": "my_tier"
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
    getSubscription(
      params: Params$Resource$V1beta$Getsubscription,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    getSubscription(
      params?: Params$Resource$V1beta$Getsubscription,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Subscription>>;
    getSubscription(
      params: Params$Resource$V1beta$Getsubscription,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    getSubscription(
      params: Params$Resource$V1beta$Getsubscription,
      options: MethodOptions | BodyResponseCallback<Schema$Subscription>,
      callback: BodyResponseCallback<Schema$Subscription>
    ): void;
    getSubscription(
      params: Params$Resource$V1beta$Getsubscription,
      callback: BodyResponseCallback<Schema$Subscription>
    ): void;
    getSubscription(callback: BodyResponseCallback<Schema$Subscription>): void;
    getSubscription(
      paramsOrCallback?:
        | Params$Resource$V1beta$Getsubscription
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
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$Subscription>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$V1beta$Getsubscription;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$V1beta$Getsubscription;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://colaboratory.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta/{+name}').replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
            apiVersion: '',
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

  export interface Params$Resource$V1beta$Getsubscription extends StandardParameters {
    /**
     * Required. The name of the subscription to retrieve. The only valid value is "subscription".
     */
    name?: string;
  }
}
