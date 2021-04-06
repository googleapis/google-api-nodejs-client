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

export namespace assuredworkloads_v1 {
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
   * Assured Workloads API
   *
   *
   *
   * @example
   * ```js
   * const {google} = require('googleapis');
   * const assuredworkloads = google.assuredworkloads('v1');
   * ```
   */
  export class Assuredworkloads {
    context: APIRequestContext;
    organizations: Resource$Organizations;

    constructor(options: GlobalOptions, google?: GoogleConfigurable) {
      this.context = {
        _options: options || {},
        google,
      };

      this.organizations = new Resource$Organizations(this.context);
    }
  }

  /**
   * Operation metadata to give request details of CreateWorkload.
   */
  export interface Schema$GoogleCloudAssuredworkloadsV1beta1CreateWorkloadOperationMetadata {
    /**
     * Optional. Compliance controls that should be applied to the resources managed by the workload.
     */
    complianceRegime?: string | null;
    /**
     * Optional. Time when the operation was created.
     */
    createTime?: string | null;
    /**
     * Optional. The display name of the workload.
     */
    displayName?: string | null;
    /**
     * Optional. The parent of the workload.
     */
    parent?: string | null;
  }
  /**
   * An Workload object for managing highly regulated workloads of cloud customers.
   */
  export interface Schema$GoogleCloudAssuredworkloadsV1beta1Workload {
    /**
     * Required. Input only. The billing account used for the resources which are direct children of workload. This billing account is initially associated with the resources created as part of Workload creation. After the initial creation of these resources, the customer can change the assigned billing account. The resource name has the form `billingAccounts/{billing_account_id\}`. For example, `billingAccounts/012345-567890-ABCDEF`.
     */
    billingAccount?: string | null;
    /**
     * Required. Input only. Immutable. Settings specific to resources needed for CJIS.
     */
    cjisSettings?: Schema$GoogleCloudAssuredworkloadsV1beta1WorkloadCJISSettings;
    /**
     * Required. Immutable. Compliance Regime associated with this workload.
     */
    complianceRegime?: string | null;
    /**
     * Output only. Immutable. The Workload creation timestamp.
     */
    createTime?: string | null;
    /**
     * Required. The user-assigned display name of the Workload. When present it must be between 4 to 30 characters. Allowed characters are: lowercase and uppercase letters, numbers, hyphen, and spaces. Example: My Workload
     */
    displayName?: string | null;
    /**
     * Optional. ETag of the workload, it is calculated on the basis of the Workload contents. It will be used in Update & Delete operations.
     */
    etag?: string | null;
    /**
     * Required. Input only. Immutable. Settings specific to resources needed for FedRAMP High.
     */
    fedrampHighSettings?: Schema$GoogleCloudAssuredworkloadsV1beta1WorkloadFedrampHighSettings;
    /**
     * Required. Input only. Immutable. Settings specific to resources needed for FedRAMP Moderate.
     */
    fedrampModerateSettings?: Schema$GoogleCloudAssuredworkloadsV1beta1WorkloadFedrampModerateSettings;
    /**
     * Required. Input only. Immutable. Settings specific to resources needed for IL4.
     */
    il4Settings?: Schema$GoogleCloudAssuredworkloadsV1beta1WorkloadIL4Settings;
    /**
     * Input only. Settings used to create a CMEK crypto key. When set a project with a KMS CMEK key is provisioned. This field is mandatory for a subset of Compliance Regimes.
     */
    kmsSettings?: Schema$GoogleCloudAssuredworkloadsV1beta1WorkloadKMSSettings;
    /**
     * Optional. Labels applied to the workload.
     */
    labels?: {[key: string]: string} | null;
    /**
     * Optional. The resource name of the workload. Format: organizations/{organization\}/locations/{location\}/workloads/{workload\} Read-only.
     */
    name?: string | null;
    /**
     * Input only. The parent resource for the resources managed by this Assured Workload. May be either an organization or a folder. Must be the same or a child of the Workload parent. If not specified all resources are created under the Workload parent. Formats: folders/{folder_id\} organizations/{organization_id\}
     */
    provisionedResourcesParent?: string | null;
    /**
     * Output only. The resources associated with this workload. These resources will be created when creating the workload. If any of the projects already exist, the workload creation will fail. Always read only.
     */
    resources?: Schema$GoogleCloudAssuredworkloadsV1beta1WorkloadResourceInfo[];
    /**
     * Input only. Resource properties that are used to customize workload resources. These properties (such as custom project id) will be used to create workload resources if possible. This field is optional.
     */
    resourceSettings?: Schema$GoogleCloudAssuredworkloadsV1beta1WorkloadResourceSettings[];
  }
  /**
   * Settings specific to resources needed for CJIS.
   */
  export interface Schema$GoogleCloudAssuredworkloadsV1beta1WorkloadCJISSettings {
    /**
     * Required. Input only. Immutable. Settings used to create a CMEK crypto key.
     */
    kmsSettings?: Schema$GoogleCloudAssuredworkloadsV1beta1WorkloadKMSSettings;
  }
  /**
   * Settings specific to resources needed for FedRAMP High.
   */
  export interface Schema$GoogleCloudAssuredworkloadsV1beta1WorkloadFedrampHighSettings {
    /**
     * Required. Input only. Immutable. Settings used to create a CMEK crypto key.
     */
    kmsSettings?: Schema$GoogleCloudAssuredworkloadsV1beta1WorkloadKMSSettings;
  }
  /**
   * Settings specific to resources needed for FedRAMP Moderate.
   */
  export interface Schema$GoogleCloudAssuredworkloadsV1beta1WorkloadFedrampModerateSettings {
    /**
     * Required. Input only. Immutable. Settings used to create a CMEK crypto key.
     */
    kmsSettings?: Schema$GoogleCloudAssuredworkloadsV1beta1WorkloadKMSSettings;
  }
  /**
   * Settings specific to resources needed for IL4.
   */
  export interface Schema$GoogleCloudAssuredworkloadsV1beta1WorkloadIL4Settings {
    /**
     * Required. Input only. Immutable. Settings used to create a CMEK crypto key.
     */
    kmsSettings?: Schema$GoogleCloudAssuredworkloadsV1beta1WorkloadKMSSettings;
  }
  /**
   * Settings specific to the Key Management Service.
   */
  export interface Schema$GoogleCloudAssuredworkloadsV1beta1WorkloadKMSSettings {
    /**
     * Required. Input only. Immutable. The time at which the Key Management Service will automatically create a new version of the crypto key and mark it as the primary.
     */
    nextRotationTime?: string | null;
    /**
     * Required. Input only. Immutable. [next_rotation_time] will be advanced by this period when the Key Management Service automatically rotates a key. Must be at least 24 hours and at most 876,000 hours.
     */
    rotationPeriod?: string | null;
  }
  /**
   * Represent the resources that are children of this Workload.
   */
  export interface Schema$GoogleCloudAssuredworkloadsV1beta1WorkloadResourceInfo {
    /**
     * Resource identifier. For a project this represents project_number.
     */
    resourceId?: string | null;
    /**
     * Indicates the type of resource.
     */
    resourceType?: string | null;
  }
  /**
   * Represent the custom settings for the resources to be created.
   */
  export interface Schema$GoogleCloudAssuredworkloadsV1beta1WorkloadResourceSettings {
    /**
     * Resource identifier. For a project this represents project_id. If the project is already taken, the workload creation will fail.
     */
    resourceId?: string | null;
    /**
     * Indicates the type of resource. This field should be specified to correspond the id to the right project type (CONSUMER_PROJECT or ENCRYPTION_KEYS_PROJECT)
     */
    resourceType?: string | null;
  }
  /**
   * Operation metadata to give request details of CreateWorkload.
   */
  export interface Schema$GoogleCloudAssuredworkloadsV1CreateWorkloadOperationMetadata {
    /**
     * Optional. Compliance controls that should be applied to the resources managed by the workload.
     */
    complianceRegime?: string | null;
    /**
     * Optional. Time when the operation was created.
     */
    createTime?: string | null;
    /**
     * Optional. The display name of the workload.
     */
    displayName?: string | null;
    /**
     * Optional. The parent of the workload.
     */
    parent?: string | null;
  }
  /**
   * Response of ListWorkloads endpoint.
   */
  export interface Schema$GoogleCloudAssuredworkloadsV1ListWorkloadsResponse {
    /**
     * The next page token. Return empty if reached the last page.
     */
    nextPageToken?: string | null;
    /**
     * List of Workloads under a given parent.
     */
    workloads?: Schema$GoogleCloudAssuredworkloadsV1Workload[];
  }
  /**
   * An Workload object for managing highly regulated workloads of cloud customers.
   */
  export interface Schema$GoogleCloudAssuredworkloadsV1Workload {
    /**
     * Required. Input only. The billing account used for the resources which are direct children of workload. This billing account is initially associated with the resources created as part of Workload creation. After the initial creation of these resources, the customer can change the assigned billing account. The resource name has the form `billingAccounts/{billing_account_id\}`. For example, `billingAccounts/012345-567890-ABCDEF`.
     */
    billingAccount?: string | null;
    /**
     * Required. Immutable. Compliance Regime associated with this workload.
     */
    complianceRegime?: string | null;
    /**
     * Output only. Immutable. The Workload creation timestamp.
     */
    createTime?: string | null;
    /**
     * Required. The user-assigned display name of the Workload. When present it must be between 4 to 30 characters. Allowed characters are: lowercase and uppercase letters, numbers, hyphen, and spaces. Example: My Workload
     */
    displayName?: string | null;
    /**
     * Optional. ETag of the workload, it is calculated on the basis of the Workload contents. It will be used in Update & Delete operations.
     */
    etag?: string | null;
    /**
     * Input only. Settings used to create a CMEK crypto key. When set a project with a KMS CMEK key is provisioned. This field is mandatory for a subset of Compliance Regimes.
     */
    kmsSettings?: Schema$GoogleCloudAssuredworkloadsV1WorkloadKMSSettings;
    /**
     * Optional. Labels applied to the workload.
     */
    labels?: {[key: string]: string} | null;
    /**
     * Optional. The resource name of the workload. Format: organizations/{organization\}/locations/{location\}/workloads/{workload\} Read-only.
     */
    name?: string | null;
    /**
     * Input only. The parent resource for the resources managed by this Assured Workload. May be either an organization or a folder. Must be the same or a child of the Workload parent. If not specified all resources are created under the Workload parent. Formats: folders/{folder_id\} organizations/{organization_id\}
     */
    provisionedResourcesParent?: string | null;
    /**
     * Output only. The resources associated with this workload. These resources will be created when creating the workload. If any of the projects already exist, the workload creation will fail. Always read only.
     */
    resources?: Schema$GoogleCloudAssuredworkloadsV1WorkloadResourceInfo[];
  }
  /**
   * Settings specific to the Key Management Service.
   */
  export interface Schema$GoogleCloudAssuredworkloadsV1WorkloadKMSSettings {
    /**
     * Required. Input only. Immutable. The time at which the Key Management Service will automatically create a new version of the crypto key and mark it as the primary.
     */
    nextRotationTime?: string | null;
    /**
     * Required. Input only. Immutable. [next_rotation_time] will be advanced by this period when the Key Management Service automatically rotates a key. Must be at least 24 hours and at most 876,000 hours.
     */
    rotationPeriod?: string | null;
  }
  /**
   * Represent the resources that are children of this Workload.
   */
  export interface Schema$GoogleCloudAssuredworkloadsV1WorkloadResourceInfo {
    /**
     * Resource identifier. For a project this represents project_number.
     */
    resourceId?: string | null;
    /**
     * Indicates the type of resource.
     */
    resourceType?: string | null;
  }
  /**
   * The response message for Operations.ListOperations.
   */
  export interface Schema$GoogleLongrunningListOperationsResponse {
    /**
     * The standard List next-page token.
     */
    nextPageToken?: string | null;
    /**
     * A list of operations that matches the specified filter in the request.
     */
    operations?: Schema$GoogleLongrunningOperation[];
  }
  /**
   * This resource represents a long-running operation that is the result of a network API call.
   */
  export interface Schema$GoogleLongrunningOperation {
    /**
     * If the value is `false`, it means the operation is still in progress. If `true`, the operation is completed, and either `error` or `response` is available.
     */
    done?: boolean | null;
    /**
     * The error result of the operation in case of failure or cancellation.
     */
    error?: Schema$GoogleRpcStatus;
    /**
     * Service-specific metadata associated with the operation. It typically contains progress information and common metadata such as create time. Some services might not provide such metadata. Any method that returns a long-running operation should document the metadata type, if any.
     */
    metadata?: {[key: string]: any} | null;
    /**
     * The server-assigned name, which is only unique within the same service that originally returns it. If you use the default HTTP mapping, the `name` should be a resource name ending with `operations/{unique_id\}`.
     */
    name?: string | null;
    /**
     * The normal response of the operation in case of success. If the original method returns no data on success, such as `Delete`, the response is `google.protobuf.Empty`. If the original method is standard `Get`/`Create`/`Update`, the response should be the resource. For other methods, the response should have the type `XxxResponse`, where `Xxx` is the original method name. For example, if the original method name is `TakeSnapshot()`, the inferred response type is `TakeSnapshotResponse`.
     */
    response?: {[key: string]: any} | null;
  }
  /**
   * A generic empty message that you can re-use to avoid defining duplicated empty messages in your APIs. A typical example is to use it as the request or the response type of an API method. For instance: service Foo { rpc Bar(google.protobuf.Empty) returns (google.protobuf.Empty); \} The JSON representation for `Empty` is empty JSON object `{\}`.
   */
  export interface Schema$GoogleProtobufEmpty {}
  /**
   * The `Status` type defines a logical error model that is suitable for different programming environments, including REST APIs and RPC APIs. It is used by [gRPC](https://github.com/grpc). Each `Status` message contains three pieces of data: error code, error message, and error details. You can find out more about this error model and how to work with it in the [API Design Guide](https://cloud.google.com/apis/design/errors).
   */
  export interface Schema$GoogleRpcStatus {
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

  export class Resource$Organizations {
    context: APIRequestContext;
    locations: Resource$Organizations$Locations;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.locations = new Resource$Organizations$Locations(this.context);
    }
  }

  export class Resource$Organizations$Locations {
    context: APIRequestContext;
    operations: Resource$Organizations$Locations$Operations;
    workloads: Resource$Organizations$Locations$Workloads;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.operations = new Resource$Organizations$Locations$Operations(
        this.context
      );
      this.workloads = new Resource$Organizations$Locations$Workloads(
        this.context
      );
    }
  }

  export class Resource$Organizations$Locations$Operations {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/assuredworkloads.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const assuredworkloads = google.assuredworkloads('v1');
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
     *   const res = await assuredworkloads.organizations.locations.operations.get({
     *     // The name of the operation resource.
     *     name:
     *       'organizations/my-organization/locations/my-location/operations/my-operation',
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
    get(
      params: Params$Resource$Organizations$Locations$Operations$Get,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    get(
      params?: Params$Resource$Organizations$Locations$Operations$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleLongrunningOperation>;
    get(
      params: Params$Resource$Organizations$Locations$Operations$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Organizations$Locations$Operations$Get,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>,
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    get(
      params: Params$Resource$Organizations$Locations$Operations$Get,
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    get(
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Organizations$Locations$Operations$Get
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleLongrunningOperation>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Organizations$Locations$Operations$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Organizations$Locations$Operations$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://assuredworkloads.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$GoogleLongrunningOperation>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleLongrunningOperation>(parameters);
      }
    }

    /**
     * Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`. NOTE: the `name` binding allows API services to override the binding to use different resource name schemes, such as `users/x/operations`. To override the binding, API services can add a binding such as `"/v1/{name=users/x\}/operations"` to their service configuration. For backwards compatibility, the default name includes the operations collection id, however overriding users must ensure the name binding is the parent resource, without the operations collection id.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/assuredworkloads.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const assuredworkloads = google.assuredworkloads('v1');
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
     *   const res = await assuredworkloads.organizations.locations.operations.list({
     *     // The standard list filter.
     *     filter: 'placeholder-value',
     *     // The name of the operation's parent resource.
     *     name: 'organizations/my-organization/locations/my-location',
     *     // The standard list page size.
     *     pageSize: 'placeholder-value',
     *     // The standard list page token.
     *     pageToken: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "nextPageToken": "my_nextPageToken",
     *   //   "operations": []
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
      params: Params$Resource$Organizations$Locations$Operations$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Organizations$Locations$Operations$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleLongrunningListOperationsResponse>;
    list(
      params: Params$Resource$Organizations$Locations$Operations$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Organizations$Locations$Operations$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleLongrunningListOperationsResponse>,
      callback: BodyResponseCallback<Schema$GoogleLongrunningListOperationsResponse>
    ): void;
    list(
      params: Params$Resource$Organizations$Locations$Operations$List,
      callback: BodyResponseCallback<Schema$GoogleLongrunningListOperationsResponse>
    ): void;
    list(
      callback: BodyResponseCallback<Schema$GoogleLongrunningListOperationsResponse>
    ): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Organizations$Locations$Operations$List
        | BodyResponseCallback<Schema$GoogleLongrunningListOperationsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleLongrunningListOperationsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleLongrunningListOperationsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleLongrunningListOperationsResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Organizations$Locations$Operations$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Organizations$Locations$Operations$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://assuredworkloads.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}/operations').replace(
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
        createAPIRequest<Schema$GoogleLongrunningListOperationsResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleLongrunningListOperationsResponse>(
          parameters
        );
      }
    }
  }

  export interface Params$Resource$Organizations$Locations$Operations$Get
    extends StandardParameters {
    /**
     * The name of the operation resource.
     */
    name?: string;
  }
  export interface Params$Resource$Organizations$Locations$Operations$List
    extends StandardParameters {
    /**
     * The standard list filter.
     */
    filter?: string;
    /**
     * The name of the operation's parent resource.
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

  export class Resource$Organizations$Locations$Workloads {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Creates Assured Workload.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/assuredworkloads.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const assuredworkloads = google.assuredworkloads('v1');
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
     *   const res = await assuredworkloads.organizations.locations.workloads.create({
     *     // Optional. A identifier associated with the workload and underlying projects which allows for the break down of billing costs for a workload. The value provided for the identifier will add a label to the workload and contained projects with the identifier as the value.
     *     externalId: 'placeholder-value',
     *     // Required. The resource name of the new Workload's parent. Must be of the form `organizations/{org_id\}/locations/{location_id\}`.
     *     parent: 'organizations/my-organization/locations/my-location',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "billingAccount": "my_billingAccount",
     *       //   "complianceRegime": "my_complianceRegime",
     *       //   "createTime": "my_createTime",
     *       //   "displayName": "my_displayName",
     *       //   "etag": "my_etag",
     *       //   "kmsSettings": {},
     *       //   "labels": {},
     *       //   "name": "my_name",
     *       //   "provisionedResourcesParent": "my_provisionedResourcesParent",
     *       //   "resources": []
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
      params: Params$Resource$Organizations$Locations$Workloads$Create,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    create(
      params?: Params$Resource$Organizations$Locations$Workloads$Create,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleLongrunningOperation>;
    create(
      params: Params$Resource$Organizations$Locations$Workloads$Create,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    create(
      params: Params$Resource$Organizations$Locations$Workloads$Create,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>,
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    create(
      params: Params$Resource$Organizations$Locations$Workloads$Create,
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    create(
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    create(
      paramsOrCallback?:
        | Params$Resource$Organizations$Locations$Workloads$Create
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleLongrunningOperation>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Organizations$Locations$Workloads$Create;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Organizations$Locations$Workloads$Create;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://assuredworkloads.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}/workloads').replace(
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
        createAPIRequest<Schema$GoogleLongrunningOperation>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleLongrunningOperation>(parameters);
      }
    }

    /**
     * Deletes the workload. Make sure that workload's direct children are already in a deleted state, otherwise the request will fail with a FAILED_PRECONDITION error.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/assuredworkloads.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const assuredworkloads = google.assuredworkloads('v1');
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
     *   const res = await assuredworkloads.organizations.locations.workloads.delete({
     *     // Optional. The etag of the workload. If this is provided, it must match the server's etag.
     *     etag: 'placeholder-value',
     *     // Required. The `name` field is used to identify the workload. Format: organizations/{org_id\}/locations/{location_id\}/workloads/{workload_id\}
     *     name:
     *       'organizations/my-organization/locations/my-location/workloads/my-workload',
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
      params: Params$Resource$Organizations$Locations$Workloads$Delete,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    delete(
      params?: Params$Resource$Organizations$Locations$Workloads$Delete,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleProtobufEmpty>;
    delete(
      params: Params$Resource$Organizations$Locations$Workloads$Delete,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    delete(
      params: Params$Resource$Organizations$Locations$Workloads$Delete,
      options: MethodOptions | BodyResponseCallback<Schema$GoogleProtobufEmpty>,
      callback: BodyResponseCallback<Schema$GoogleProtobufEmpty>
    ): void;
    delete(
      params: Params$Resource$Organizations$Locations$Workloads$Delete,
      callback: BodyResponseCallback<Schema$GoogleProtobufEmpty>
    ): void;
    delete(callback: BodyResponseCallback<Schema$GoogleProtobufEmpty>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Organizations$Locations$Workloads$Delete
        | BodyResponseCallback<Schema$GoogleProtobufEmpty>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleProtobufEmpty>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleProtobufEmpty>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleProtobufEmpty>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Organizations$Locations$Workloads$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Organizations$Locations$Workloads$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://assuredworkloads.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$GoogleProtobufEmpty>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleProtobufEmpty>(parameters);
      }
    }

    /**
     * Gets Assured Workload associated with a CRM Node
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/assuredworkloads.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const assuredworkloads = google.assuredworkloads('v1');
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
     *   const res = await assuredworkloads.organizations.locations.workloads.get({
     *     // Required. The resource name of the Workload to fetch. This is the workloads's relative path in the API, formatted as "organizations/{organization_id\}/locations/{location_id\}/workloads/{workload_id\}". For example, "organizations/123/locations/us-east1/workloads/assured-workload-1".
     *     name:
     *       'organizations/my-organization/locations/my-location/workloads/my-workload',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "billingAccount": "my_billingAccount",
     *   //   "complianceRegime": "my_complianceRegime",
     *   //   "createTime": "my_createTime",
     *   //   "displayName": "my_displayName",
     *   //   "etag": "my_etag",
     *   //   "kmsSettings": {},
     *   //   "labels": {},
     *   //   "name": "my_name",
     *   //   "provisionedResourcesParent": "my_provisionedResourcesParent",
     *   //   "resources": []
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
      params: Params$Resource$Organizations$Locations$Workloads$Get,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    get(
      params?: Params$Resource$Organizations$Locations$Workloads$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleCloudAssuredworkloadsV1Workload>;
    get(
      params: Params$Resource$Organizations$Locations$Workloads$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Organizations$Locations$Workloads$Get,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleCloudAssuredworkloadsV1Workload>,
      callback: BodyResponseCallback<Schema$GoogleCloudAssuredworkloadsV1Workload>
    ): void;
    get(
      params: Params$Resource$Organizations$Locations$Workloads$Get,
      callback: BodyResponseCallback<Schema$GoogleCloudAssuredworkloadsV1Workload>
    ): void;
    get(
      callback: BodyResponseCallback<Schema$GoogleCloudAssuredworkloadsV1Workload>
    ): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Organizations$Locations$Workloads$Get
        | BodyResponseCallback<Schema$GoogleCloudAssuredworkloadsV1Workload>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleCloudAssuredworkloadsV1Workload>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleCloudAssuredworkloadsV1Workload>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleCloudAssuredworkloadsV1Workload>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Organizations$Locations$Workloads$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Organizations$Locations$Workloads$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://assuredworkloads.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$GoogleCloudAssuredworkloadsV1Workload>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleCloudAssuredworkloadsV1Workload>(
          parameters
        );
      }
    }

    /**
     * Lists Assured Workloads under a CRM Node.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/assuredworkloads.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const assuredworkloads = google.assuredworkloads('v1');
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
     *   const res = await assuredworkloads.organizations.locations.workloads.list({
     *     // A custom filter for filtering by properties of a workload. At this time, only filtering by labels is supported.
     *     filter: 'placeholder-value',
     *     // Page size.
     *     pageSize: 'placeholder-value',
     *     // Page token returned from previous request. Page token contains context from previous request. Page token needs to be passed in the second and following requests.
     *     pageToken: 'placeholder-value',
     *     // Required. Parent Resource to list workloads from. Must be of the form `organizations/{org_id\}/locations/{location\}`.
     *     parent: 'organizations/my-organization/locations/my-location',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "nextPageToken": "my_nextPageToken",
     *   //   "workloads": []
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
      params: Params$Resource$Organizations$Locations$Workloads$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Organizations$Locations$Workloads$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleCloudAssuredworkloadsV1ListWorkloadsResponse>;
    list(
      params: Params$Resource$Organizations$Locations$Workloads$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Organizations$Locations$Workloads$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleCloudAssuredworkloadsV1ListWorkloadsResponse>,
      callback: BodyResponseCallback<Schema$GoogleCloudAssuredworkloadsV1ListWorkloadsResponse>
    ): void;
    list(
      params: Params$Resource$Organizations$Locations$Workloads$List,
      callback: BodyResponseCallback<Schema$GoogleCloudAssuredworkloadsV1ListWorkloadsResponse>
    ): void;
    list(
      callback: BodyResponseCallback<Schema$GoogleCloudAssuredworkloadsV1ListWorkloadsResponse>
    ): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Organizations$Locations$Workloads$List
        | BodyResponseCallback<Schema$GoogleCloudAssuredworkloadsV1ListWorkloadsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleCloudAssuredworkloadsV1ListWorkloadsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleCloudAssuredworkloadsV1ListWorkloadsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleCloudAssuredworkloadsV1ListWorkloadsResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Organizations$Locations$Workloads$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Organizations$Locations$Workloads$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://assuredworkloads.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}/workloads').replace(
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
        createAPIRequest<Schema$GoogleCloudAssuredworkloadsV1ListWorkloadsResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleCloudAssuredworkloadsV1ListWorkloadsResponse>(
          parameters
        );
      }
    }

    /**
     * Updates an existing workload. Currently allows updating of workload display_name and labels. For force updates don't set etag field in the Workload. Only one update operation per workload can be in progress.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/assuredworkloads.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const assuredworkloads = google.assuredworkloads('v1');
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
     *   const res = await assuredworkloads.organizations.locations.workloads.patch({
     *     // Optional. The resource name of the workload. Format: organizations/{organization\}/locations/{location\}/workloads/{workload\} Read-only.
     *     name:
     *       'organizations/my-organization/locations/my-location/workloads/my-workload',
     *     // Required. The list of fields to be updated.
     *     updateMask: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "billingAccount": "my_billingAccount",
     *       //   "complianceRegime": "my_complianceRegime",
     *       //   "createTime": "my_createTime",
     *       //   "displayName": "my_displayName",
     *       //   "etag": "my_etag",
     *       //   "kmsSettings": {},
     *       //   "labels": {},
     *       //   "name": "my_name",
     *       //   "provisionedResourcesParent": "my_provisionedResourcesParent",
     *       //   "resources": []
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "billingAccount": "my_billingAccount",
     *   //   "complianceRegime": "my_complianceRegime",
     *   //   "createTime": "my_createTime",
     *   //   "displayName": "my_displayName",
     *   //   "etag": "my_etag",
     *   //   "kmsSettings": {},
     *   //   "labels": {},
     *   //   "name": "my_name",
     *   //   "provisionedResourcesParent": "my_provisionedResourcesParent",
     *   //   "resources": []
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
      params: Params$Resource$Organizations$Locations$Workloads$Patch,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    patch(
      params?: Params$Resource$Organizations$Locations$Workloads$Patch,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleCloudAssuredworkloadsV1Workload>;
    patch(
      params: Params$Resource$Organizations$Locations$Workloads$Patch,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    patch(
      params: Params$Resource$Organizations$Locations$Workloads$Patch,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleCloudAssuredworkloadsV1Workload>,
      callback: BodyResponseCallback<Schema$GoogleCloudAssuredworkloadsV1Workload>
    ): void;
    patch(
      params: Params$Resource$Organizations$Locations$Workloads$Patch,
      callback: BodyResponseCallback<Schema$GoogleCloudAssuredworkloadsV1Workload>
    ): void;
    patch(
      callback: BodyResponseCallback<Schema$GoogleCloudAssuredworkloadsV1Workload>
    ): void;
    patch(
      paramsOrCallback?:
        | Params$Resource$Organizations$Locations$Workloads$Patch
        | BodyResponseCallback<Schema$GoogleCloudAssuredworkloadsV1Workload>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleCloudAssuredworkloadsV1Workload>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleCloudAssuredworkloadsV1Workload>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleCloudAssuredworkloadsV1Workload>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Organizations$Locations$Workloads$Patch;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Organizations$Locations$Workloads$Patch;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://assuredworkloads.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$GoogleCloudAssuredworkloadsV1Workload>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleCloudAssuredworkloadsV1Workload>(
          parameters
        );
      }
    }
  }

  export interface Params$Resource$Organizations$Locations$Workloads$Create
    extends StandardParameters {
    /**
     * Optional. A identifier associated with the workload and underlying projects which allows for the break down of billing costs for a workload. The value provided for the identifier will add a label to the workload and contained projects with the identifier as the value.
     */
    externalId?: string;
    /**
     * Required. The resource name of the new Workload's parent. Must be of the form `organizations/{org_id\}/locations/{location_id\}`.
     */
    parent?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleCloudAssuredworkloadsV1Workload;
  }
  export interface Params$Resource$Organizations$Locations$Workloads$Delete
    extends StandardParameters {
    /**
     * Optional. The etag of the workload. If this is provided, it must match the server's etag.
     */
    etag?: string;
    /**
     * Required. The `name` field is used to identify the workload. Format: organizations/{org_id\}/locations/{location_id\}/workloads/{workload_id\}
     */
    name?: string;
  }
  export interface Params$Resource$Organizations$Locations$Workloads$Get
    extends StandardParameters {
    /**
     * Required. The resource name of the Workload to fetch. This is the workloads's relative path in the API, formatted as "organizations/{organization_id\}/locations/{location_id\}/workloads/{workload_id\}". For example, "organizations/123/locations/us-east1/workloads/assured-workload-1".
     */
    name?: string;
  }
  export interface Params$Resource$Organizations$Locations$Workloads$List
    extends StandardParameters {
    /**
     * A custom filter for filtering by properties of a workload. At this time, only filtering by labels is supported.
     */
    filter?: string;
    /**
     * Page size.
     */
    pageSize?: number;
    /**
     * Page token returned from previous request. Page token contains context from previous request. Page token needs to be passed in the second and following requests.
     */
    pageToken?: string;
    /**
     * Required. Parent Resource to list workloads from. Must be of the form `organizations/{org_id\}/locations/{location\}`.
     */
    parent?: string;
  }
  export interface Params$Resource$Organizations$Locations$Workloads$Patch
    extends StandardParameters {
    /**
     * Optional. The resource name of the workload. Format: organizations/{organization\}/locations/{location\}/workloads/{workload\} Read-only.
     */
    name?: string;
    /**
     * Required. The list of fields to be updated.
     */
    updateMask?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleCloudAssuredworkloadsV1Workload;
  }
}
