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

export namespace redis_v1beta1 {
  export interface Options extends GlobalOptions {
    version: 'v1beta1';
  }

  /**
   * Cloud Memorystore for Redis API
   *
   * The Google Cloud Memorystore for Redis API is used for creating and
   * managing Redis instances on the Google Cloud Platform.
   *
   * @example
   * const {google} = require('googleapis');
   * const redis = google.redis('v1beta1');
   *
   * @namespace redis
   * @type {Function}
   * @version v1beta1
   * @variation v1beta1
   * @param {object=} options Options for Redis
   */
  export class Redis {
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
   * Represents the metadata of the long-running operation.
   */
  export interface Schema$GoogleCloudCommonOperationMetadata {
    /**
     * [Output only] API version used to start the operation.
     */
    apiVersion?: string;
    /**
     * [Output only] Identifies whether the user has requested cancellation of
     * the operation. Operations that have successfully been cancelled have
     * Operation.error value with a google.rpc.Status.code of 1, corresponding
     * to `Code.CANCELLED`.
     */
    cancelRequested?: boolean;
    /**
     * [Output only] The time the operation was created.
     */
    createTime?: string;
    /**
     * [Output only] The time the operation finished running.
     */
    endTime?: string;
    /**
     * [Output only] Human-readable status of the operation, if any.
     */
    statusDetail?: string;
    /**
     * [Output only] Server-defined resource path for the target of the
     * operation.
     */
    target?: string;
    /**
     * [Output only] Name of the verb executed by the operation.
     */
    verb?: string;
  }
  /**
   * This location metadata represents additional configuration options for a
   * given location where a Redis instance may be created. All fields are output
   * only. It is returned as content of the
   * `google.cloud.location.Location.metadata` field.
   */
  export interface Schema$GoogleCloudRedisV1beta1LocationMetadata {
    /**
     * Output only. The set of available zones in the location. The map is keyed
     * by the lowercase ID of each zone, as defined by GCE. These keys can be
     * specified in `location_id` or `alternative_location_id` fields when
     * creating a Redis instance.
     */
    availableZones?: any;
  }
  /**
   * Defines specific information for a particular zone. Currently empty and
   * reserved for future use only.
   */
  export interface Schema$GoogleCloudRedisV1beta1ZoneMetadata {}
  /**
   * A Google Cloud Redis instance.
   */
  export interface Schema$Instance {
    /**
     * Optional. Only applicable to STANDARD_HA tier which protects the instance
     * against zonal failures by provisioning it across two zones. If provided,
     * it must be a different zone from the one provided in [location_id].
     */
    alternativeLocationId?: string;
    /**
     * Optional. The full name of the Google Compute Engine
     * [network](/compute/docs/networks-and-firewalls#networks) to which the
     * instance is connected. If left unspecified, the `default` network will be
     * used.
     */
    authorizedNetwork?: string;
    /**
     * Output only. The time the instance was created.
     */
    createTime?: string;
    /**
     * Output only. The current zone where the Redis endpoint is placed. For
     * Basic Tier instances, this will always be the same as the [location_id]
     * provided by the user at creation time. For Standard Tier instances, this
     * can be either [location_id] or [alternative_location_id] and can change
     * after a failover event.
     */
    currentLocationId?: string;
    /**
     * An arbitrary and optional user-provided name for the instance.
     */
    displayName?: string;
    /**
     * Output only. Hostname or IP address of the exposed Redis endpoint used by
     * clients to connect to the service.
     */
    host?: string;
    /**
     * Resource labels to represent user provided metadata
     */
    labels?: any;
    /**
     * Optional. The zone where the instance will be provisioned. If not
     * provided, the service will choose a zone for the instance. For
     * STANDARD_HA tier, instances will be created across two zones for
     * protection against zonal failures. If [alternative_location_id] is also
     * provided, it must be different from [location_id].
     */
    locationId?: string;
    /**
     * Required. Redis memory size in GiB.
     */
    memorySizeGb?: number;
    /**
     * Required. Unique name of the resource in this scope including project and
     * location using the form:
     * `projects/{project_id}/locations/{location_id}/instances/{instance_id}`
     * Note: Redis instances are managed and addressed at regional level so
     * location_id here refers to a GCP region; however, users may choose which
     * specific zone (or collection of zones for cross-zone instances) an
     * instance should be provisioned in. Refer to [location_id] and
     * [alternative_location_id] fields for more details.
     */
    name?: string;
    /**
     * Output only. The port number of the exposed Redis endpoint.
     */
    port?: number;
    /**
     * Optional. Redis configuration parameters, according to
     * http://redis.io/topics/config. Currently, the only supported parameters
     * are:   *   maxmemory-policy  *   notify-keyspace-events
     */
    redisConfigs?: any;
    /**
     * Optional. The version of Redis software. If not provided, latest
     * supported version will be used. Updating the version will perform an
     * upgrade/downgrade to the new version. Currently, the supported values are
     * `REDIS_3_2` for Redis 3.2.
     */
    redisVersion?: string;
    /**
     * Optional. The CIDR range of internal addresses that are reserved for this
     * instance. If not provided, the service will choose an unused /29 block,
     * for example, 10.0.0.0/29 or 192.168.0.0/29. Ranges must be unique and
     * non-overlapping with existing subnets in an authorized network.
     */
    reservedIpRange?: string;
    /**
     * Output only. The current state of this instance.
     */
    state?: string;
    /**
     * Output only. Additional information about the current status of this
     * instance, if available.
     */
    statusMessage?: string;
    /**
     * Required. The service tier of the instance.
     */
    tier?: string;
  }
  /**
   * Response for ListInstances.
   */
  export interface Schema$ListInstancesResponse {
    /**
     * A list of Redis instances in the project in the specified location, or
     * across all locations.  If the `location_id` in the parent field of the
     * request is &quot;-&quot;, all regions available to the project are
     * queried, and the results aggregated. If in such an aggregated query a
     * location is unavailable, a dummy Redis entry is included in the response
     * with the &quot;name&quot; field set to a value of the form
     * projects/{project_id}/locations/{location_id}/instances/- and the
     * &quot;status&quot; field set to ERROR and &quot;status_message&quot;
     * field set to &quot;location not available for ListInstances&quot;.
     */
    instances?: Schema$Instance[];
    /**
     * Token to retrieve the next page of results, or empty if there are no more
     * results in the list.
     */
    nextPageToken?: string;
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
    nextPageToken?: string;
  }
  /**
   * The response message for Operations.ListOperations.
   */
  export interface Schema$ListOperationsResponse {
    /**
     * The standard List next-page token.
     */
    nextPageToken?: string;
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
     * The friendly name for this location, typically a nearby city name. For
     * example, &quot;Tokyo&quot;.
     */
    displayName?: string;
    /**
     * Cross-service attributes for the location. For example
     * {&quot;cloud.googleapis.com/region&quot;: &quot;us-east1&quot;}
     */
    labels?: any;
    /**
     * The canonical id for this location. For example: `&quot;us-east1&quot;`.
     */
    locationId?: string;
    /**
     * Service-specific metadata. For example the available capacity at the
     * given location.
     */
    metadata?: any;
    /**
     * Resource name for the location, which may vary between implementations.
     * For example: `&quot;projects/example-project/locations/us-east1&quot;`
     */
    name?: string;
  }
  /**
   * This location metadata represents additional configuration options for a
   * given location where a Redis instance may be created. All fields are output
   * only. It is returned as content of the
   * `google.cloud.location.Location.metadata` field.
   */
  export interface Schema$LocationMetadata {
    /**
     * Output only. The set of available zones in the location. The map is keyed
     * by the lowercase ID of each zone, as defined by GCE. These keys can be
     * specified in `location_id` or `alternative_location_id` fields when
     * creating a Redis instance.
     */
    availableZones?: any;
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
   * This operation metadata represents the state of operations that may have
   * happened or are happening on the instance. All fields are output only. It
   * is returned as content of the `google.longrunning.Operation.metadata`
   * field. The `google.longrunning.Operation.name` field will be of the form
   * `projects/{project_id}/locations/{location_id}/operations/{operation_id}`
   * and the name for a `ListOperations` request will be of the form
   * `projects/{project_id}/locations/{location_id}`  On a ListOperations
   * request where {location_id} is &quot;-&quot;, all regions available to the
   * {project_id} are queried and the results aggregated. If a location is not
   * available, a dummy `google.longrunning.Operation` entry will be included in
   * the `operations` field of the response, with the `name` field set to a
   * value of the form
   * `projects/{project_id}/locations/{location_id}/operations/-` and the `done`
   * field will be set and the `result.error` field set with the `code` field
   * set to `google.rpc.Code.DEADLINE_EXCEEDED` and the `message` field set to
   * `location unavailable for ListOperations`. The Operation metadata` field
   * will not be set for such a dummy operation.
   */
  export interface Schema$OperationMetadata {
    /**
     * Output only. The time the operation was created.
     */
    createTime?: string;
    /**
     * Output only. Detailed operation progress, if available.
     */
    detail?: string;
    /**
     * Output only. The time the operation was completed.
     */
    endTime?: string;
    /**
     * Output only. The operation type.
     */
    operationType?: string;
    /**
     * Output only. The time the operation was started.
     */
    startTime?: string;
    /**
     * Output only. The current state of the operation.
     */
    state?: string;
    /**
     * Output only. Server-defined resource path for the target of the
     * operation.
     */
    target?: string;
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
   * Defines specific information for a particular zone. Currently empty and
   * reserved for future use only.
   */
  export interface Schema$ZoneMetadata {}


  export class Resource$Projects {
    root: Redis;
    locations: Resource$Projects$Locations;
    constructor(root: Redis) {
      this.root = root;
      this.getRoot.bind(this);
      this.locations = new Resource$Projects$Locations(root);
    }

    getRoot() {
      return this.root;
    }
  }


  export class Resource$Projects$Locations {
    root: Redis;
    instances: Resource$Projects$Locations$Instances;
    operations: Resource$Projects$Locations$Operations;
    constructor(root: Redis) {
      this.root = root;
      this.getRoot.bind(this);
      this.instances = new Resource$Projects$Locations$Instances(root);
      this.operations = new Resource$Projects$Locations$Operations(root);
    }

    getRoot() {
      return this.root;
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
    get(params?: Params$Resource$Projects$Locations$Get,
        options?: MethodOptions): AxiosPromise<Schema$Location>;
    get(params: Params$Resource$Projects$Locations$Get,
        options: MethodOptions|BodyResponseCallback<Schema$Location>,
        callback: BodyResponseCallback<Schema$Location>): void;
    get(params: Params$Resource$Projects$Locations$Get,
        callback: BodyResponseCallback<Schema$Location>): void;
    get(callback: BodyResponseCallback<Schema$Location>): void;
    get(paramsOrCallback?: Params$Resource$Projects$Locations$Get|
        BodyResponseCallback<Schema$Location>,
        optionsOrCallback?: MethodOptions|BodyResponseCallback<Schema$Location>,
        callback?: BodyResponseCallback<Schema$Location>):
        void|AxiosPromise<Schema$Location> {
      let params =
          (paramsOrCallback || {}) as Params$Resource$Projects$Locations$Get;
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
        options?: MethodOptions): AxiosPromise<Schema$ListLocationsResponse>;
    list(
        params: Params$Resource$Projects$Locations$List,
        options: MethodOptions|
        BodyResponseCallback<Schema$ListLocationsResponse>,
        callback: BodyResponseCallback<Schema$ListLocationsResponse>): void;
    list(
        params: Params$Resource$Projects$Locations$List,
        callback: BodyResponseCallback<Schema$ListLocationsResponse>): void;
    list(callback: BodyResponseCallback<Schema$ListLocationsResponse>): void;
    list(
        paramsOrCallback?: Params$Resource$Projects$Locations$List|
        BodyResponseCallback<Schema$ListLocationsResponse>,
        optionsOrCallback?: MethodOptions|
        BodyResponseCallback<Schema$ListLocationsResponse>,
        callback?: BodyResponseCallback<Schema$ListLocationsResponse>):
        void|AxiosPromise<Schema$ListLocationsResponse> {
      let params =
          (paramsOrCallback || {}) as Params$Resource$Projects$Locations$List;
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
              url: (rootUrl + '/v1beta1/{+name}/locations')
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

  export interface Params$Resource$Projects$Locations$Get {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * Resource name for the location.
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Locations$List {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

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
    root: Redis;
    constructor(root: Redis) {
      this.root = root;
      this.getRoot.bind(this);
    }

    getRoot() {
      return this.root;
    }


    /**
     * redis.projects.locations.instances.create
     * @desc Creates a Redis instance based on the specified tier and memory
     * size.  By default, the instance is accessible from the project's [default
     * network](/compute/docs/networks-and-firewalls#networks).  The creation is
     * executed asynchronously and callers may check the returned operation to
     * track its progress. Once the operation is completed the Redis instance
     * will be fully functional. Completed longrunning.Operation will contain
     * the new instance object in the response field.  The returned operation is
     * automatically deleted after a few hours, so there is no need to call
     * DeleteOperation.
     * @alias redis.projects.locations.instances.create
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string=} params.instanceId Required. The logical name of the Redis instance in the customer project with the following restrictions:  * Must contain only lowercase letters, numbers, and hyphens. * Must start with a letter. * Must be between 1-40 characters. * Must end with a number or a letter. * Must be unique within the customer project / location
     * @param {string} params.parent Required. The resource name of the instance location using the form:     `projects/{project_id}/locations/{location_id}` where `location_id` refers to a GCP region
     * @param {().Instance} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    create(
        params?: Params$Resource$Projects$Locations$Instances$Create,
        options?: MethodOptions): AxiosPromise<Schema$Operation>;
    create(
        params: Params$Resource$Projects$Locations$Instances$Create,
        options: MethodOptions|BodyResponseCallback<Schema$Operation>,
        callback: BodyResponseCallback<Schema$Operation>): void;
    create(
        params: Params$Resource$Projects$Locations$Instances$Create,
        callback: BodyResponseCallback<Schema$Operation>): void;
    create(callback: BodyResponseCallback<Schema$Operation>): void;
    create(
        paramsOrCallback?: Params$Resource$Projects$Locations$Instances$Create|
        BodyResponseCallback<Schema$Operation>,
        optionsOrCallback?: MethodOptions|
        BodyResponseCallback<Schema$Operation>,
        callback?: BodyResponseCallback<Schema$Operation>):
        void|AxiosPromise<Schema$Operation> {
      let params = (paramsOrCallback || {}) as
          Params$Resource$Projects$Locations$Instances$Create;
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
              url: (rootUrl + '/v1beta1/{+parent}/instances')
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
     * redis.projects.locations.instances.delete
     * @desc Deletes a specific Redis instance.  Instance stops serving and data
     * is deleted.
     * @alias redis.projects.locations.instances.delete
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.name Required. Redis instance resource name using the form:     `projects/{project_id}/locations/{location_id}/instances/{instance_id}` where `location_id` refers to a GCP region
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    delete(
        params?: Params$Resource$Projects$Locations$Instances$Delete,
        options?: MethodOptions): AxiosPromise<Schema$Operation>;
    delete(
        params: Params$Resource$Projects$Locations$Instances$Delete,
        options: MethodOptions|BodyResponseCallback<Schema$Operation>,
        callback: BodyResponseCallback<Schema$Operation>): void;
    delete(
        params: Params$Resource$Projects$Locations$Instances$Delete,
        callback: BodyResponseCallback<Schema$Operation>): void;
    delete(callback: BodyResponseCallback<Schema$Operation>): void;
    delete(
        paramsOrCallback?: Params$Resource$Projects$Locations$Instances$Delete|
        BodyResponseCallback<Schema$Operation>,
        optionsOrCallback?: MethodOptions|
        BodyResponseCallback<Schema$Operation>,
        callback?: BodyResponseCallback<Schema$Operation>):
        void|AxiosPromise<Schema$Operation> {
      let params = (paramsOrCallback || {}) as
          Params$Resource$Projects$Locations$Instances$Delete;
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
     * @param {string} params.name Required. Redis instance resource name using the form:     `projects/{project_id}/locations/{location_id}/instances/{instance_id}` where `location_id` refers to a GCP region
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    get(params?: Params$Resource$Projects$Locations$Instances$Get,
        options?: MethodOptions): AxiosPromise<Schema$Instance>;
    get(params: Params$Resource$Projects$Locations$Instances$Get,
        options: MethodOptions|BodyResponseCallback<Schema$Instance>,
        callback: BodyResponseCallback<Schema$Instance>): void;
    get(params: Params$Resource$Projects$Locations$Instances$Get,
        callback: BodyResponseCallback<Schema$Instance>): void;
    get(callback: BodyResponseCallback<Schema$Instance>): void;
    get(paramsOrCallback?: Params$Resource$Projects$Locations$Instances$Get|
        BodyResponseCallback<Schema$Instance>,
        optionsOrCallback?: MethodOptions|BodyResponseCallback<Schema$Instance>,
        callback?: BodyResponseCallback<Schema$Instance>):
        void|AxiosPromise<Schema$Instance> {
      let params = (paramsOrCallback || {}) as
          Params$Resource$Projects$Locations$Instances$Get;
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
        createAPIRequest<Schema$Instance>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Instance>(parameters);
      }
    }


    /**
     * redis.projects.locations.instances.list
     * @desc Lists all Redis instances owned by a project in either the
     * specified location (region) or all locations.  The location should have
     * the following format: * `projects/{project_id}/locations/{location_id}`
     * If `location_id` is specified as `-` (wildcard), then all regions
     * available to the project are queried, and the results are aggregated.
     * @alias redis.projects.locations.instances.list
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {integer=} params.pageSize The maximum number of items to return.  If not specified, a default value of 1000 will be used by the service. Regardless of the page_size value, the response may include a partial list and a caller should only rely on response's next_page_token to determine if there are more instances left to be queried.
     * @param {string=} params.pageToken The next_page_token value returned from a previous List request, if any.
     * @param {string} params.parent Required. The resource name of the instance location using the form:     `projects/{project_id}/locations/{location_id}` where `location_id` refers to a GCP region
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list(
        params?: Params$Resource$Projects$Locations$Instances$List,
        options?: MethodOptions): AxiosPromise<Schema$ListInstancesResponse>;
    list(
        params: Params$Resource$Projects$Locations$Instances$List,
        options: MethodOptions|
        BodyResponseCallback<Schema$ListInstancesResponse>,
        callback: BodyResponseCallback<Schema$ListInstancesResponse>): void;
    list(
        params: Params$Resource$Projects$Locations$Instances$List,
        callback: BodyResponseCallback<Schema$ListInstancesResponse>): void;
    list(callback: BodyResponseCallback<Schema$ListInstancesResponse>): void;
    list(
        paramsOrCallback?: Params$Resource$Projects$Locations$Instances$List|
        BodyResponseCallback<Schema$ListInstancesResponse>,
        optionsOrCallback?: MethodOptions|
        BodyResponseCallback<Schema$ListInstancesResponse>,
        callback?: BodyResponseCallback<Schema$ListInstancesResponse>):
        void|AxiosPromise<Schema$ListInstancesResponse> {
      let params = (paramsOrCallback || {}) as
          Params$Resource$Projects$Locations$Instances$List;
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
              url: (rootUrl + '/v1beta1/{+parent}/instances')
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
        createAPIRequest<Schema$ListInstancesResponse>(parameters, callback);
      } else {
        return createAPIRequest<Schema$ListInstancesResponse>(parameters);
      }
    }


    /**
     * redis.projects.locations.instances.patch
     * @desc Updates the metadata and configuration of a specific Redis
     * instance.  Completed longrunning.Operation will contain the new instance
     * object in the response field. The returned operation is automatically
     * deleted after a few hours, so there is no need to call DeleteOperation.
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
        options?: MethodOptions): AxiosPromise<Schema$Operation>;
    patch(
        params: Params$Resource$Projects$Locations$Instances$Patch,
        options: MethodOptions|BodyResponseCallback<Schema$Operation>,
        callback: BodyResponseCallback<Schema$Operation>): void;
    patch(
        params: Params$Resource$Projects$Locations$Instances$Patch,
        callback: BodyResponseCallback<Schema$Operation>): void;
    patch(callback: BodyResponseCallback<Schema$Operation>): void;
    patch(
        paramsOrCallback?: Params$Resource$Projects$Locations$Instances$Patch|
        BodyResponseCallback<Schema$Operation>,
        optionsOrCallback?: MethodOptions|
        BodyResponseCallback<Schema$Operation>,
        callback?: BodyResponseCallback<Schema$Operation>):
        void|AxiosPromise<Schema$Operation> {
      let params = (paramsOrCallback || {}) as
          Params$Resource$Projects$Locations$Instances$Patch;
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
              url: (rootUrl + '/v1beta1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
              method: 'PATCH'
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
  }

  export interface Params$Resource$Projects$Locations$Instances$Create {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * Required. The logical name of the Redis instance in the customer project
     * with the following restrictions:  * Must contain only lowercase letters,
     * numbers, and hyphens. * Must start with a letter. * Must be between 1-40
     * characters. * Must end with a number or a letter. * Must be unique within
     * the customer project / location
     */
    instanceId?: string;
    /**
     * Required. The resource name of the instance location using the form:
     * `projects/{project_id}/locations/{location_id}` where `location_id`
     * refers to a GCP region
     */
    parent?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$Instance;
  }
  export interface Params$Resource$Projects$Locations$Instances$Delete {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * Required. Redis instance resource name using the form:
     * `projects/{project_id}/locations/{location_id}/instances/{instance_id}`
     * where `location_id` refers to a GCP region
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Locations$Instances$Get {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * Required. Redis instance resource name using the form:
     * `projects/{project_id}/locations/{location_id}/instances/{instance_id}`
     * where `location_id` refers to a GCP region
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Locations$Instances$List {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * The maximum number of items to return.  If not specified, a default value
     * of 1000 will be used by the service. Regardless of the page_size value,
     * the response may include a partial list and a caller should only rely on
     * response's next_page_token to determine if there are more instances left
     * to be queried.
     */
    pageSize?: number;
    /**
     * The next_page_token value returned from a previous List request, if any.
     */
    pageToken?: string;
    /**
     * Required. The resource name of the instance location using the form:
     * `projects/{project_id}/locations/{location_id}` where `location_id`
     * refers to a GCP region
     */
    parent?: string;
  }
  export interface Params$Resource$Projects$Locations$Instances$Patch {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * Required. Unique name of the resource in this scope including project and
     * location using the form:
     * `projects/{project_id}/locations/{location_id}/instances/{instance_id}`
     * Note: Redis instances are managed and addressed at regional level so
     * location_id here refers to a GCP region; however, users may choose which
     * specific zone (or collection of zones for cross-zone instances) an
     * instance should be provisioned in. Refer to [location_id] and
     * [alternative_location_id] fields for more details.
     */
    name?: string;
    /**
     * Required. Mask of fields to update. At least one path must be supplied in
     * this field. The elements of the repeated paths field may only include
     * these fields from Instance:   *   `displayName`  *   `labels`  *
     * `memorySizeGb`  *   `redisConfig`
     */
    updateMask?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$Instance;
  }


  export class Resource$Projects$Locations$Operations {
    root: Redis;
    constructor(root: Redis) {
      this.root = root;
      this.getRoot.bind(this);
    }

    getRoot() {
      return this.root;
    }


    /**
     * redis.projects.locations.operations.get
     * @desc Gets the latest state of a long-running operation.  Clients can use
     * this method to poll the operation result at intervals as recommended by
     * the API service.
     * @alias redis.projects.locations.operations.get
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.name The name of the operation resource.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    get(params?: Params$Resource$Projects$Locations$Operations$Get,
        options?: MethodOptions): AxiosPromise<Schema$Operation>;
    get(params: Params$Resource$Projects$Locations$Operations$Get,
        options: MethodOptions|BodyResponseCallback<Schema$Operation>,
        callback: BodyResponseCallback<Schema$Operation>): void;
    get(params: Params$Resource$Projects$Locations$Operations$Get,
        callback: BodyResponseCallback<Schema$Operation>): void;
    get(callback: BodyResponseCallback<Schema$Operation>): void;
    get(paramsOrCallback?: Params$Resource$Projects$Locations$Operations$Get|
        BodyResponseCallback<Schema$Operation>,
        optionsOrCallback?: MethodOptions|
        BodyResponseCallback<Schema$Operation>,
        callback?: BodyResponseCallback<Schema$Operation>):
        void|AxiosPromise<Schema$Operation> {
      let params = (paramsOrCallback || {}) as
          Params$Resource$Projects$Locations$Operations$Get;
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
     * redis.projects.locations.operations.list
     * @desc Lists operations that match the specified filter in the request. If
     * the server doesn't support this method, it returns `UNIMPLEMENTED`. NOTE:
     * the `name` binding allows API services to override the binding to use
     * different resource name schemes, such as `users/x/operations`. To
     * override the binding, API services can add a binding such as
     * `"/v1/{name=users/x}/operations"` to their service configuration. For
     * backwards compatibility, the default name includes the operations
     * collection id, however overriding users must ensure the name binding is
     * the parent resource, without the operations collection id.
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
        options?: MethodOptions): AxiosPromise<Schema$ListOperationsResponse>;
    list(
        params: Params$Resource$Projects$Locations$Operations$List,
        options: MethodOptions|
        BodyResponseCallback<Schema$ListOperationsResponse>,
        callback: BodyResponseCallback<Schema$ListOperationsResponse>): void;
    list(
        params: Params$Resource$Projects$Locations$Operations$List,
        callback: BodyResponseCallback<Schema$ListOperationsResponse>): void;
    list(callback: BodyResponseCallback<Schema$ListOperationsResponse>): void;
    list(
        paramsOrCallback?: Params$Resource$Projects$Locations$Operations$List|
        BodyResponseCallback<Schema$ListOperationsResponse>,
        optionsOrCallback?: MethodOptions|
        BodyResponseCallback<Schema$ListOperationsResponse>,
        callback?: BodyResponseCallback<Schema$ListOperationsResponse>):
        void|AxiosPromise<Schema$ListOperationsResponse> {
      let params = (paramsOrCallback || {}) as
          Params$Resource$Projects$Locations$Operations$List;
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
              url: (rootUrl + '/v1beta1/{+name}/operations')
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
        createAPIRequest<Schema$ListOperationsResponse>(parameters, callback);
      } else {
        return createAPIRequest<Schema$ListOperationsResponse>(parameters);
      }
    }
  }

  export interface Params$Resource$Projects$Locations$Operations$Get {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * The name of the operation resource.
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Locations$Operations$List {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

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
