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

import {
  OAuth2Client,
  JWT,
  Compute,
  UserRefreshClient,
} from 'google-auth-library';
import {
  GoogleConfigurable,
  createAPIRequest,
  MethodOptions,
  GlobalOptions,
  BodyResponseCallback,
  APIRequestContext,
} from 'googleapis-common';
import {GaxiosPromise} from 'gaxios';

// tslint:disable: no-any
// tslint:disable: class-name
// tslint:disable: variable-name
// tslint:disable: jsdoc-format
// tslint:disable: no-namespace

export namespace redis_v1 {
  export interface Options extends GlobalOptions {
    version: 'v1';
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
   * Google Cloud Memorystore for Redis API
   *
   * Creates and manages Redis instances on the Google Cloud Platform.
   *
   * @example
   * const {google} = require('googleapis');
   * const redis = google.redis('v1');
   *
   * @namespace redis
   * @type {Function}
   * @version v1
   * @variation v1
   * @param {object=} options Options for Redis
   */
  export class Redis {
    context: APIRequestContext;
    projects: Resource$Projects;

    constructor(options: GlobalOptions, google?: GoogleConfigurable) {
      this.context = {
        _options: options || {},
        google,
      };

      this.projects = new Resource$Projects(this.context);
    }
  }

  /**
   * A generic empty message that you can re-use to avoid defining duplicated empty messages in your APIs. A typical example is to use it as the request or the response type of an API method. For instance:      service Foo {       rpc Bar(google.protobuf.Empty) returns (google.protobuf.Empty);     }  The JSON representation for `Empty` is empty JSON object `{}`.
   */
  export interface Schema$Empty {}
  /**
   * Request for Export.
   */
  export interface Schema$ExportInstanceRequest {
    /**
     * Required. Specify data to be exported.
     */
    outputConfig?: Schema$OutputConfig;
  }
  /**
   * Request for Failover.
   */
  export interface Schema$FailoverInstanceRequest {
    /**
     * Optional. Available data protection modes that the user can choose. If it&#39;s unspecified, data protection mode will be LIMITED_DATA_LOSS by default.
     */
    dataProtectionMode?: string | null;
  }
  /**
   * The Cloud Storage location for the output content
   */
  export interface Schema$GcsDestination {
    /**
     * Required. Data destination URI (e.g. &#39;gs://my_bucket/my_object&#39;). Existing files will be overwritten.
     */
    uri?: string | null;
  }
  /**
   * The Cloud Storage location for the input content
   */
  export interface Schema$GcsSource {
    /**
     * Required. Source data URI. (e.g. &#39;gs://my_bucket/my_object&#39;).
     */
    uri?: string | null;
  }
  /**
   * This location metadata represents additional configuration options for a given location where a Redis instance may be created. All fields are output only. It is returned as content of the `google.cloud.location.Location.metadata` field.
   */
  export interface Schema$GoogleCloudRedisV1LocationMetadata {
    /**
     * Output only. The set of available zones in the location. The map is keyed by the lowercase ID of each zone, as defined by GCE. These keys can be specified in `location_id` or `alternative_location_id` fields when creating a Redis instance.
     */
    availableZones?: {
      [key: string]: Schema$GoogleCloudRedisV1ZoneMetadata;
    } | null;
  }
  /**
   * Represents the v1 metadata of the long-running operation.
   */
  export interface Schema$GoogleCloudRedisV1OperationMetadata {
    /**
     * API version.
     */
    apiVersion?: string | null;
    /**
     * Specifies if cancellation was requested for the operation.
     */
    cancelRequested?: boolean | null;
    /**
     * Creation timestamp.
     */
    createTime?: string | null;
    /**
     * End timestamp.
     */
    endTime?: string | null;
    /**
     * Operation status details.
     */
    statusDetail?: string | null;
    /**
     * Operation target.
     */
    target?: string | null;
    /**
     * Operation verb.
     */
    verb?: string | null;
  }
  /**
   * Defines specific information for a particular zone. Currently empty and reserved for future use only.
   */
  export interface Schema$GoogleCloudRedisV1ZoneMetadata {}
  /**
   * Request for Import.
   */
  export interface Schema$ImportInstanceRequest {
    /**
     * Required. Specify data to be imported.
     */
    inputConfig?: Schema$InputConfig;
  }
  /**
   * The input content
   */
  export interface Schema$InputConfig {
    /**
     * Google Cloud Storage location where input content is located.
     */
    gcsSource?: Schema$GcsSource;
  }
  /**
   * A Google Cloud Redis instance.
   */
  export interface Schema$Instance {
    /**
     * Optional. Only applicable to STANDARD_HA tier which protects the instance against zonal failures by provisioning it across two zones. If provided, it must be a different zone from the one provided in [location_id].
     */
    alternativeLocationId?: string | null;
    /**
     * Optional. The full name of the Google Compute Engine [network](/compute/docs/networks-and-firewalls#networks) to which the instance is connected. If left unspecified, the `default` network will be used.
     */
    authorizedNetwork?: string | null;
    /**
     * Output only. The time the instance was created.
     */
    createTime?: string | null;
    /**
     * Output only. The current zone where the Redis endpoint is placed. For Basic Tier instances, this will always be the same as the [location_id] provided by the user at creation time. For Standard Tier instances, this can be either [location_id] or [alternative_location_id] and can change after a failover event.
     */
    currentLocationId?: string | null;
    /**
     * An arbitrary and optional user-provided name for the instance.
     */
    displayName?: string | null;
    /**
     * Output only. Hostname or IP address of the exposed Redis endpoint used by clients to connect to the service.
     */
    host?: string | null;
    /**
     * Resource labels to represent user provided metadata
     */
    labels?: {[key: string]: string} | null;
    /**
     * Optional. The zone where the instance will be provisioned. If not provided, the service will choose a zone for the instance. For STANDARD_HA tier, instances will be created across two zones for protection against zonal failures. If [alternative_location_id] is also provided, it must be different from [location_id].
     */
    locationId?: string | null;
    /**
     * Required. Redis memory size in GiB.
     */
    memorySizeGb?: number | null;
    /**
     * Required. Unique name of the resource in this scope including project and location using the form:     `projects/{project_id}/locations/{location_id}/instances/{instance_id}`  Note: Redis instances are managed and addressed at regional level so location_id here refers to a GCP region; however, users may choose which specific zone (or collection of zones for cross-zone instances) an instance should be provisioned in. Refer to [location_id] and [alternative_location_id] fields for more details.
     */
    name?: string | null;
    /**
     * Output only. Cloud IAM identity used by import / export operations to transfer data to/from Cloud Storage. Format is &quot;serviceAccount:&lt;service_account_email&gt;&quot;. The value may change over time for a given instance so should be checked before each import/export operation.
     */
    persistenceIamIdentity?: string | null;
    /**
     * Output only. The port number of the exposed Redis endpoint.
     */
    port?: number | null;
    /**
     * Optional. Redis configuration parameters, according to http://redis.io/topics/config. Currently, the only supported parameters are:   Redis 3.2 and above:   *   maxmemory-policy  *   notify-keyspace-events   Redis 4.0 and above:   *   activedefrag  *   lfu-log-factor  *   lfu-decay-time
     */
    redisConfigs?: {[key: string]: string} | null;
    /**
     * Optional. The version of Redis software. If not provided, latest supported version will be used. Updating the version will perform an upgrade/downgrade to the new version. Currently, the supported values are:   *   `REDIS_4_0` for Redis 4.0 compatibility (default)  *   `REDIS_3_2` for Redis 3.2 compatibility
     */
    redisVersion?: string | null;
    /**
     * Optional. The CIDR range of internal addresses that are reserved for this instance. If not provided, the service will choose an unused /29 block, for example, 10.0.0.0/29 or 192.168.0.0/29. Ranges must be unique and non-overlapping with existing subnets in an authorized network.
     */
    reservedIpRange?: string | null;
    /**
     * Output only. The current state of this instance.
     */
    state?: string | null;
    /**
     * Output only. Additional information about the current status of this instance, if available.
     */
    statusMessage?: string | null;
    /**
     * Required. The service tier of the instance.
     */
    tier?: string | null;
  }
  /**
   * Response for ListInstances.
   */
  export interface Schema$ListInstancesResponse {
    /**
     * A list of Redis instances in the project in the specified location, or across all locations.  If the `location_id` in the parent field of the request is &quot;-&quot;, all regions available to the project are queried, and the results aggregated. If in such an aggregated query a location is unavailable, a dummy Redis entry is included in the response with the &quot;name&quot; field set to a value of the form projects/{project_id}/locations/{location_id}/instances/- and the &quot;status&quot; field set to ERROR and &quot;status_message&quot; field set to &quot;location not available for ListInstances&quot;.
     */
    instances?: Schema$Instance[];
    /**
     * Token to retrieve the next page of results, or empty if there are no more results in the list.
     */
    nextPageToken?: string | null;
    /**
     * Locations that could not be reached.
     */
    unreachable?: string[] | null;
  }
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
    nextPageToken?: string | null;
  }
  /**
   * The response message for Operations.ListOperations.
   */
  export interface Schema$ListOperationsResponse {
    /**
     * The standard List next-page token.
     */
    nextPageToken?: string | null;
    /**
     * A list of operations that matches the specified filter in the request.
     */
    operations?: Schema$Operation[];
  }
  /**
   * A resource that represents Google Cloud Platform location.
   */
  export interface Schema$Location {
    /**
     * The friendly name for this location, typically a nearby city name. For example, &quot;Tokyo&quot;.
     */
    displayName?: string | null;
    /**
     * Cross-service attributes for the location. For example      {&quot;cloud.googleapis.com/region&quot;: &quot;us-east1&quot;}
     */
    labels?: {[key: string]: string} | null;
    /**
     * Resource ID for the region. For example: &quot;us-east1&quot;.
     */
    locationId?: string | null;
    /**
     * Output only. The set of available zones in the location. The map is keyed by the lowercase ID of each zone, as defined by Compute Engine. These keys can be specified in `location_id` or `alternative_location_id` fields when creating a Redis instance.
     */
    metadata?: {[key: string]: any} | null;
    /**
     * Full resource name for the region. For example: &quot;projects/example-project/locations/us-east1&quot;.
     */
    name?: string | null;
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
     * {  `createTime`: The time the operation was created.  `endTime`: The time the operation finished running.  `target`: Server-defined resource path for the target of the operation.  `verb`: Name of the verb executed by the operation.  `statusDetail`: Human-readable status of the operation, if any.  `cancelRequested`: Identifies whether the user has requested cancellation of the operation. Operations that have successfully been cancelled have Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.  `apiVersion`: API version used to start the operation.  }
     */
    metadata?: {[key: string]: any} | null;
    /**
     * The server-assigned name, which is only unique within the same service that originally returns it. If you use the default HTTP mapping, the `name` should be a resource name ending with `operations/{unique_id}`.
     */
    name?: string | null;
    /**
     * The normal response of the operation in case of success.  If the original method returns no data on success, such as `Delete`, the response is `google.protobuf.Empty`.  If the original method is standard `Get`/`Create`/`Update`, the response should be the resource.  For other methods, the response should have the type `XxxResponse`, where `Xxx` is the original method name.  For example, if the original method name is `TakeSnapshot()`, the inferred response type is `TakeSnapshotResponse`.
     */
    response?: {[key: string]: any} | null;
  }
  /**
   * The output content
   */
  export interface Schema$OutputConfig {
    /**
     * Google Cloud Storage destination for output content.
     */
    gcsDestination?: Schema$GcsDestination;
  }
  /**
   * The `Status` type defines a logical error model that is suitable for different programming environments, including REST APIs and RPC APIs. It is used by [gRPC](https://github.com/grpc). Each `Status` message contains three pieces of data: error code, error message, and error details.  You can find out more about this error model and how to work with it in the [API Design Guide](https://cloud.google.com/apis/design/errors).
   */
  export interface Schema$Status {
    /**
     * The status code, which should be an enum value of google.rpc.Code.
     */
    code?: number | null;
    /**
     * A list of messages that carry the error details.  There is a common set of message types for APIs to use.
     */
    details?: Array<{[key: string]: any}> | null;
    /**
     * A developer-facing error message, which should be in English. Any user-facing error message should be localized and sent in the google.rpc.Status.details field, or localized by the client.
     */
    message?: string | null;
  }

  export class Resource$Projects {
    context: APIRequestContext;
    locations: Resource$Projects$Locations;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.locations = new Resource$Projects$Locations(this.context);
    }
  }

  export class Resource$Projects$Locations {
    context: APIRequestContext;
    instances: Resource$Projects$Locations$Instances;
    operations: Resource$Projects$Locations$Operations;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.instances = new Resource$Projects$Locations$Instances(this.context);
      this.operations = new Resource$Projects$Locations$Operations(
        this.context
      );
    }

    /**
     * redis.projects.locations.get
     * @desc Gets information about a location.
     * @alias redis.projects.locations.get
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.name Resource name for the location.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    get(
      params?: Params$Resource$Projects$Locations$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Location>;
    get(
      params: Params$Resource$Projects$Locations$Get,
      options: MethodOptions | BodyResponseCallback<Schema$Location>,
      callback: BodyResponseCallback<Schema$Location>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Get,
      callback: BodyResponseCallback<Schema$Location>
    ): void;
    get(callback: BodyResponseCallback<Schema$Location>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Get
        | BodyResponseCallback<Schema$Location>,
      optionsOrCallback?: MethodOptions | BodyResponseCallback<Schema$Location>,
      callback?: BodyResponseCallback<Schema$Location>
    ): void | GaxiosPromise<Schema$Location> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Get;
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

      const rootUrl = options.rootUrl || 'https://redis.googleapis.com/';
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
        createAPIRequest<Schema$Location>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Location>(parameters);
      }
    }

    /**
     * redis.projects.locations.list
     * @desc Lists information about the supported locations for this service.
     * @alias redis.projects.locations.list
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
      options?: MethodOptions
    ): GaxiosPromise<Schema$ListLocationsResponse>;
    list(
      params: Params$Resource$Projects$Locations$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ListLocationsResponse>,
      callback: BodyResponseCallback<Schema$ListLocationsResponse>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$List,
      callback: BodyResponseCallback<Schema$ListLocationsResponse>
    ): void;
    list(callback: BodyResponseCallback<Schema$ListLocationsResponse>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$List
        | BodyResponseCallback<Schema$ListLocationsResponse>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$ListLocationsResponse>,
      callback?: BodyResponseCallback<Schema$ListLocationsResponse>
    ): void | GaxiosPromise<Schema$ListLocationsResponse> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$List;
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

      const rootUrl = options.rootUrl || 'https://redis.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}/locations').replace(
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
        createAPIRequest<Schema$ListLocationsResponse>(parameters, callback);
      } else {
        return createAPIRequest<Schema$ListLocationsResponse>(parameters);
      }
    }
  }

  export interface Params$Resource$Projects$Locations$Get
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Resource name for the location.
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Locations$List
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

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

  export class Resource$Projects$Locations$Instances {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * redis.projects.locations.instances.create
     * @desc Creates a Redis instance based on the specified tier and memory size.  By default, the instance is accessible from the project's [default network](/compute/docs/networks-and-firewalls#networks).  The creation is executed asynchronously and callers may check the returned operation to track its progress. Once the operation is completed the Redis instance will be fully functional. Completed longrunning.Operation will contain the new instance object in the response field.  The returned operation is automatically deleted after a few hours, so there is no need to call DeleteOperation.
     * @alias redis.projects.locations.instances.create
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string=} params.instanceId Required. The logical name of the Redis instance in the customer project with the following restrictions:  * Must contain only lowercase letters, numbers, and hyphens. * Must start with a letter. * Must be between 1-40 characters. * Must end with a number or a letter. * Must be unique within the customer project / location
     * @param {string} params.parent Required. The resource name of the instance location using the form:     `projects/{project_id}/locations/{location_id}` where `location_id` refers to a GCP region.
     * @param {().Instance} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    create(
      params?: Params$Resource$Projects$Locations$Instances$Create,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Operation>;
    create(
      params: Params$Resource$Projects$Locations$Instances$Create,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    create(
      params: Params$Resource$Projects$Locations$Instances$Create,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    create(callback: BodyResponseCallback<Schema$Operation>): void;
    create(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Instances$Create
        | BodyResponseCallback<Schema$Operation>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$Operation>,
      callback?: BodyResponseCallback<Schema$Operation>
    ): void | GaxiosPromise<Schema$Operation> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Instances$Create;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Instances$Create;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://redis.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}/instances').replace(
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
        createAPIRequest<Schema$Operation>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Operation>(parameters);
      }
    }

    /**
     * redis.projects.locations.instances.delete
     * @desc Deletes a specific Redis instance.  Instance stops serving and data is deleted.
     * @alias redis.projects.locations.instances.delete
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.name Required. Redis instance resource name using the form:     `projects/{project_id}/locations/{location_id}/instances/{instance_id}` where `location_id` refers to a GCP region.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    delete(
      params?: Params$Resource$Projects$Locations$Instances$Delete,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Operation>;
    delete(
      params: Params$Resource$Projects$Locations$Instances$Delete,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    delete(
      params: Params$Resource$Projects$Locations$Instances$Delete,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    delete(callback: BodyResponseCallback<Schema$Operation>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Instances$Delete
        | BodyResponseCallback<Schema$Operation>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$Operation>,
      callback?: BodyResponseCallback<Schema$Operation>
    ): void | GaxiosPromise<Schema$Operation> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Instances$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Instances$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://redis.googleapis.com/';
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
        createAPIRequest<Schema$Operation>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Operation>(parameters);
      }
    }

    /**
     * redis.projects.locations.instances.export
     * @desc Export Redis instance data into a Redis RDB format file in Cloud Storage.  Redis will continue serving during this operation.  The returned operation is automatically deleted after a few hours, so there is no need to call DeleteOperation.
     * @alias redis.projects.locations.instances.export
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.name Required. Redis instance resource name using the form:     `projects/{project_id}/locations/{location_id}/instances/{instance_id}` where `location_id` refers to a GCP region.
     * @param {().ExportInstanceRequest} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    export(
      params?: Params$Resource$Projects$Locations$Instances$Export,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Operation>;
    export(
      params: Params$Resource$Projects$Locations$Instances$Export,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    export(
      params: Params$Resource$Projects$Locations$Instances$Export,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    export(callback: BodyResponseCallback<Schema$Operation>): void;
    export(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Instances$Export
        | BodyResponseCallback<Schema$Operation>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$Operation>,
      callback?: BodyResponseCallback<Schema$Operation>
    ): void | GaxiosPromise<Schema$Operation> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Instances$Export;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Instances$Export;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://redis.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}:export').replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Operation>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Operation>(parameters);
      }
    }

    /**
     * redis.projects.locations.instances.failover
     * @desc Initiates a failover of the master node to current replica node for a specific STANDARD tier Cloud Memorystore for Redis instance.
     * @alias redis.projects.locations.instances.failover
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.name Required. Redis instance resource name using the form:     `projects/{project_id}/locations/{location_id}/instances/{instance_id}` where `location_id` refers to a GCP region.
     * @param {().FailoverInstanceRequest} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    failover(
      params?: Params$Resource$Projects$Locations$Instances$Failover,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Operation>;
    failover(
      params: Params$Resource$Projects$Locations$Instances$Failover,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    failover(
      params: Params$Resource$Projects$Locations$Instances$Failover,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    failover(callback: BodyResponseCallback<Schema$Operation>): void;
    failover(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Instances$Failover
        | BodyResponseCallback<Schema$Operation>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$Operation>,
      callback?: BodyResponseCallback<Schema$Operation>
    ): void | GaxiosPromise<Schema$Operation> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Instances$Failover;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Instances$Failover;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://redis.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}:failover').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Operation>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Operation>(parameters);
      }
    }

    /**
     * redis.projects.locations.instances.get
     * @desc Gets the details of a specific Redis instance.
     * @alias redis.projects.locations.instances.get
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.name Required. Redis instance resource name using the form:     `projects/{project_id}/locations/{location_id}/instances/{instance_id}` where `location_id` refers to a GCP region.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    get(
      params?: Params$Resource$Projects$Locations$Instances$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Instance>;
    get(
      params: Params$Resource$Projects$Locations$Instances$Get,
      options: MethodOptions | BodyResponseCallback<Schema$Instance>,
      callback: BodyResponseCallback<Schema$Instance>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Instances$Get,
      callback: BodyResponseCallback<Schema$Instance>
    ): void;
    get(callback: BodyResponseCallback<Schema$Instance>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Instances$Get
        | BodyResponseCallback<Schema$Instance>,
      optionsOrCallback?: MethodOptions | BodyResponseCallback<Schema$Instance>,
      callback?: BodyResponseCallback<Schema$Instance>
    ): void | GaxiosPromise<Schema$Instance> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Instances$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Instances$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://redis.googleapis.com/';
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
        createAPIRequest<Schema$Instance>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Instance>(parameters);
      }
    }

    /**
     * redis.projects.locations.instances.import
     * @desc Import a Redis RDB snapshot file from Cloud Storage into a Redis instance.  Redis may stop serving during this operation. Instance state will be IMPORTING for entire operation. When complete, the instance will contain only data from the imported file.  The returned operation is automatically deleted after a few hours, so there is no need to call DeleteOperation.
     * @alias redis.projects.locations.instances.import
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.name Required. Redis instance resource name using the form:     `projects/{project_id}/locations/{location_id}/instances/{instance_id}` where `location_id` refers to a GCP region.
     * @param {().ImportInstanceRequest} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    import(
      params?: Params$Resource$Projects$Locations$Instances$Import,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Operation>;
    import(
      params: Params$Resource$Projects$Locations$Instances$Import,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    import(
      params: Params$Resource$Projects$Locations$Instances$Import,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    import(callback: BodyResponseCallback<Schema$Operation>): void;
    import(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Instances$Import
        | BodyResponseCallback<Schema$Operation>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$Operation>,
      callback?: BodyResponseCallback<Schema$Operation>
    ): void | GaxiosPromise<Schema$Operation> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Instances$Import;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Instances$Import;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://redis.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}:import').replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Operation>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Operation>(parameters);
      }
    }

    /**
     * redis.projects.locations.instances.list
     * @desc Lists all Redis instances owned by a project in either the specified location (region) or all locations.  The location should have the following format: * `projects/{project_id}/locations/{location_id}`  If `location_id` is specified as `-` (wildcard), then all regions available to the project are queried, and the results are aggregated.
     * @alias redis.projects.locations.instances.list
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {integer=} params.pageSize The maximum number of items to return.  If not specified, a default value of 1000 will be used by the service. Regardless of the page_size value, the response may include a partial list and a caller should only rely on response's next_page_token to determine if there are more instances left to be queried.
     * @param {string=} params.pageToken The next_page_token value returned from a previous List request, if any.
     * @param {string} params.parent Required. The resource name of the instance location using the form:     `projects/{project_id}/locations/{location_id}` where `location_id` refers to a GCP region.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list(
      params?: Params$Resource$Projects$Locations$Instances$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ListInstancesResponse>;
    list(
      params: Params$Resource$Projects$Locations$Instances$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ListInstancesResponse>,
      callback: BodyResponseCallback<Schema$ListInstancesResponse>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Instances$List,
      callback: BodyResponseCallback<Schema$ListInstancesResponse>
    ): void;
    list(callback: BodyResponseCallback<Schema$ListInstancesResponse>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Instances$List
        | BodyResponseCallback<Schema$ListInstancesResponse>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$ListInstancesResponse>,
      callback?: BodyResponseCallback<Schema$ListInstancesResponse>
    ): void | GaxiosPromise<Schema$ListInstancesResponse> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Instances$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Instances$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://redis.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}/instances').replace(
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
        createAPIRequest<Schema$ListInstancesResponse>(parameters, callback);
      } else {
        return createAPIRequest<Schema$ListInstancesResponse>(parameters);
      }
    }

    /**
     * redis.projects.locations.instances.patch
     * @desc Updates the metadata and configuration of a specific Redis instance.  Completed longrunning.Operation will contain the new instance object in the response field. The returned operation is automatically deleted after a few hours, so there is no need to call DeleteOperation.
     * @alias redis.projects.locations.instances.patch
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.name Required. Unique name of the resource in this scope including project and location using the form:     `projects/{project_id}/locations/{location_id}/instances/{instance_id}`  Note: Redis instances are managed and addressed at regional level so location_id here refers to a GCP region; however, users may choose which specific zone (or collection of zones for cross-zone instances) an instance should be provisioned in. Refer to [location_id] and [alternative_location_id] fields for more details.
     * @param {string=} params.updateMask Required. Mask of fields to update. At least one path must be supplied in this field. The elements of the repeated paths field may only include these fields from Instance:   *   `displayName`  *   `labels`  *   `memorySizeGb`  *   `redisConfig`
     * @param {().Instance} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    patch(
      params?: Params$Resource$Projects$Locations$Instances$Patch,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Operation>;
    patch(
      params: Params$Resource$Projects$Locations$Instances$Patch,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    patch(
      params: Params$Resource$Projects$Locations$Instances$Patch,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    patch(callback: BodyResponseCallback<Schema$Operation>): void;
    patch(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Instances$Patch
        | BodyResponseCallback<Schema$Operation>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$Operation>,
      callback?: BodyResponseCallback<Schema$Operation>
    ): void | GaxiosPromise<Schema$Operation> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Instances$Patch;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Instances$Patch;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://redis.googleapis.com/';
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
        createAPIRequest<Schema$Operation>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Operation>(parameters);
      }
    }
  }

  export interface Params$Resource$Projects$Locations$Instances$Create
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Required. The logical name of the Redis instance in the customer project with the following restrictions:  * Must contain only lowercase letters, numbers, and hyphens. * Must start with a letter. * Must be between 1-40 characters. * Must end with a number or a letter. * Must be unique within the customer project / location
     */
    instanceId?: string;
    /**
     * Required. The resource name of the instance location using the form:     `projects/{project_id}/locations/{location_id}` where `location_id` refers to a GCP region.
     */
    parent?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$Instance;
  }
  export interface Params$Resource$Projects$Locations$Instances$Delete
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Required. Redis instance resource name using the form:     `projects/{project_id}/locations/{location_id}/instances/{instance_id}` where `location_id` refers to a GCP region.
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Locations$Instances$Export
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Required. Redis instance resource name using the form:     `projects/{project_id}/locations/{location_id}/instances/{instance_id}` where `location_id` refers to a GCP region.
     */
    name?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$ExportInstanceRequest;
  }
  export interface Params$Resource$Projects$Locations$Instances$Failover
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Required. Redis instance resource name using the form:     `projects/{project_id}/locations/{location_id}/instances/{instance_id}` where `location_id` refers to a GCP region.
     */
    name?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$FailoverInstanceRequest;
  }
  export interface Params$Resource$Projects$Locations$Instances$Get
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Required. Redis instance resource name using the form:     `projects/{project_id}/locations/{location_id}/instances/{instance_id}` where `location_id` refers to a GCP region.
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Locations$Instances$Import
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Required. Redis instance resource name using the form:     `projects/{project_id}/locations/{location_id}/instances/{instance_id}` where `location_id` refers to a GCP region.
     */
    name?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$ImportInstanceRequest;
  }
  export interface Params$Resource$Projects$Locations$Instances$List
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * The maximum number of items to return.  If not specified, a default value of 1000 will be used by the service. Regardless of the page_size value, the response may include a partial list and a caller should only rely on response's next_page_token to determine if there are more instances left to be queried.
     */
    pageSize?: number;
    /**
     * The next_page_token value returned from a previous List request, if any.
     */
    pageToken?: string;
    /**
     * Required. The resource name of the instance location using the form:     `projects/{project_id}/locations/{location_id}` where `location_id` refers to a GCP region.
     */
    parent?: string;
  }
  export interface Params$Resource$Projects$Locations$Instances$Patch
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Required. Unique name of the resource in this scope including project and location using the form:     `projects/{project_id}/locations/{location_id}/instances/{instance_id}`  Note: Redis instances are managed and addressed at regional level so location_id here refers to a GCP region; however, users may choose which specific zone (or collection of zones for cross-zone instances) an instance should be provisioned in. Refer to [location_id] and [alternative_location_id] fields for more details.
     */
    name?: string;
    /**
     * Required. Mask of fields to update. At least one path must be supplied in this field. The elements of the repeated paths field may only include these fields from Instance:   *   `displayName`  *   `labels`  *   `memorySizeGb`  *   `redisConfig`
     */
    updateMask?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$Instance;
  }

  export class Resource$Projects$Locations$Operations {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * redis.projects.locations.operations.cancel
     * @desc Starts asynchronous cancellation on a long-running operation.  The server makes a best effort to cancel the operation, but success is not guaranteed.  If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.  Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.
     * @alias redis.projects.locations.operations.cancel
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.name The name of the operation resource to be cancelled.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    cancel(
      params?: Params$Resource$Projects$Locations$Operations$Cancel,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Empty>;
    cancel(
      params: Params$Resource$Projects$Locations$Operations$Cancel,
      options: MethodOptions | BodyResponseCallback<Schema$Empty>,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    cancel(
      params: Params$Resource$Projects$Locations$Operations$Cancel,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    cancel(callback: BodyResponseCallback<Schema$Empty>): void;
    cancel(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Operations$Cancel
        | BodyResponseCallback<Schema$Empty>,
      optionsOrCallback?: MethodOptions | BodyResponseCallback<Schema$Empty>,
      callback?: BodyResponseCallback<Schema$Empty>
    ): void | GaxiosPromise<Schema$Empty> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Operations$Cancel;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Operations$Cancel;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://redis.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}:cancel').replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Empty>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Empty>(parameters);
      }
    }

    /**
     * redis.projects.locations.operations.delete
     * @desc Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.
     * @alias redis.projects.locations.operations.delete
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.name The name of the operation resource to be deleted.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    delete(
      params?: Params$Resource$Projects$Locations$Operations$Delete,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Empty>;
    delete(
      params: Params$Resource$Projects$Locations$Operations$Delete,
      options: MethodOptions | BodyResponseCallback<Schema$Empty>,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    delete(
      params: Params$Resource$Projects$Locations$Operations$Delete,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    delete(callback: BodyResponseCallback<Schema$Empty>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Operations$Delete
        | BodyResponseCallback<Schema$Empty>,
      optionsOrCallback?: MethodOptions | BodyResponseCallback<Schema$Empty>,
      callback?: BodyResponseCallback<Schema$Empty>
    ): void | GaxiosPromise<Schema$Empty> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Operations$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Operations$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://redis.googleapis.com/';
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
        createAPIRequest<Schema$Empty>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Empty>(parameters);
      }
    }

    /**
     * redis.projects.locations.operations.get
     * @desc Gets the latest state of a long-running operation.  Clients can use this method to poll the operation result at intervals as recommended by the API service.
     * @alias redis.projects.locations.operations.get
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.name The name of the operation resource.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    get(
      params?: Params$Resource$Projects$Locations$Operations$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Operation>;
    get(
      params: Params$Resource$Projects$Locations$Operations$Get,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Operations$Get,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    get(callback: BodyResponseCallback<Schema$Operation>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Operations$Get
        | BodyResponseCallback<Schema$Operation>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$Operation>,
      callback?: BodyResponseCallback<Schema$Operation>
    ): void | GaxiosPromise<Schema$Operation> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Operations$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Operations$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://redis.googleapis.com/';
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
        createAPIRequest<Schema$Operation>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Operation>(parameters);
      }
    }

    /**
     * redis.projects.locations.operations.list
     * @desc Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.  NOTE: the `name` binding allows API services to override the binding to use different resource name schemes, such as `users/x/operations`. To override the binding, API services can add a binding such as `"/v1/{name=users/x}/operations"` to their service configuration. For backwards compatibility, the default name includes the operations collection id, however overriding users must ensure the name binding is the parent resource, without the operations collection id.
     * @alias redis.projects.locations.operations.list
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
    list(
      params?: Params$Resource$Projects$Locations$Operations$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ListOperationsResponse>;
    list(
      params: Params$Resource$Projects$Locations$Operations$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ListOperationsResponse>,
      callback: BodyResponseCallback<Schema$ListOperationsResponse>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Operations$List,
      callback: BodyResponseCallback<Schema$ListOperationsResponse>
    ): void;
    list(callback: BodyResponseCallback<Schema$ListOperationsResponse>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Operations$List
        | BodyResponseCallback<Schema$ListOperationsResponse>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$ListOperationsResponse>,
      callback?: BodyResponseCallback<Schema$ListOperationsResponse>
    ): void | GaxiosPromise<Schema$ListOperationsResponse> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Operations$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Operations$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://redis.googleapis.com/';
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
        createAPIRequest<Schema$ListOperationsResponse>(parameters, callback);
      } else {
        return createAPIRequest<Schema$ListOperationsResponse>(parameters);
      }
    }
  }

  export interface Params$Resource$Projects$Locations$Operations$Cancel
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * The name of the operation resource to be cancelled.
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Locations$Operations$Delete
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * The name of the operation resource to be deleted.
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Locations$Operations$Get
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * The name of the operation resource.
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Locations$Operations$List
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

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
}
