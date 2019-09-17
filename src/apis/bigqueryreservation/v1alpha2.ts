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

export namespace bigqueryreservation_v1alpha2 {
  export interface Options extends GlobalOptions {
    version: 'v1alpha2';
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
   * BigQuery Reservation API
   *
   * A service to modify your BigQuery flat-rate reservations.
   *
   * @example
   * const {google} = require('googleapis');
   * const bigqueryreservation = google.bigqueryreservation('v1alpha2');
   *
   * @namespace bigqueryreservation
   * @type {Function}
   * @version v1alpha2
   * @variation v1alpha2
   * @param {object=} options Options for Bigqueryreservation
   */
  export class Bigqueryreservation {
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
   * The metadata for operation returned from ReservationService.CreateSlotPool.
   */
  export interface Schema$CreateSlotPoolMetadata {
    /**
     * Resource name of the slot pool that is being created. E.g., projects/myproject/locations/us-central1/reservations/foo/slotPools/123
     */
    slotPool?: string | null;
  }
  /**
   * A generic empty message that you can re-use to avoid defining duplicated empty messages in your APIs. A typical example is to use it as the request or the response type of an API method. For instance:      service Foo {       rpc Bar(google.protobuf.Empty) returns (google.protobuf.Empty);     }  The JSON representation for `Empty` is empty JSON object `{}`.
   */
  export interface Schema$Empty {}
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
   * The response for ReservationService.ListReservationGrants.
   */
  export interface Schema$ListReservationGrantsResponse {
    /**
     * Token to retrieve the next page of results, or empty if there are no more results in the list.
     */
    nextPageToken?: string | null;
    /**
     * List of reservation grants visible to the user.
     */
    reservationGrants?: Schema$ReservationGrant[];
  }
  /**
   * The response for ReservationService.ListReservations.
   */
  export interface Schema$ListReservationsResponse {
    /**
     * Token to retrieve the next page of results, or empty if there are no more results in the list.
     */
    nextPageToken?: string | null;
    /**
     * List of reservations visible to the user.
     */
    reservations?: Schema$Reservation[];
  }
  /**
   * The response for ReservationService.ListSlotPools.
   */
  export interface Schema$ListSlotPoolsResponse {
    /**
     * Token to retrieve the next page of results, or empty if there are no more results in the list.
     */
    nextPageToken?: string | null;
    /**
     * List of slot pools visible to the user.
     */
    slotPools?: Schema$SlotPool[];
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
     * The canonical id for this location. For example: `&quot;us-east1&quot;`.
     */
    locationId?: string | null;
    /**
     * Service-specific metadata. For example the available capacity at the given location.
     */
    metadata?: {[key: string]: any} | null;
    /**
     * Resource name for the location, which may vary between implementations. For example: `&quot;projects/example-project/locations/us-east1&quot;`
     */
    name?: string | null;
  }
  /**
   * BigQuery-specific metadata about a location. This will be set on google.cloud.location.Location.metadata in Cloud Location API responses.
   */
  export interface Schema$LocationMetadata {
    /**
     * The legacy BigQuery location ID, e.g. “EU” for the “europe” location. This is for any API consumers that need the legacy “US” and “EU” locations.
     */
    legacyLocationId?: string | null;
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
     * Service-specific metadata associated with the operation.  It typically contains progress information and common metadata such as create time. Some services might not provide such metadata.  Any method that returns a long-running operation should document the metadata type, if any.
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
   * A reservation is a mechanism used to guarantee slots to users.
   */
  export interface Schema$Reservation {
    /**
     * The resource name of the reservation, e.g., &quot;projects/x/locations/x/reservations/dev/team/product&quot;. Reservation names (e.g., &quot;dev/team/product&quot;) exceeding a depth of six will fail with `google.rpc.Code.INVALID_ARGUMENT`.
     */
    name?: string | null;
    /**
     * Maximum slots available to this reservation and its children. A slot is a unit of computational power in BigQuery, and serves as the unit of parallelism. In a scan of a multi-partitioned table, a single slot operates on a single partition of the table.  If the new reservation&#39;s slot capacity exceed the parent&#39;s slot capacity or if total slot capacity of the new reservation and its siblings exceeds the parent&#39;s slot capacity, the request will fail with `google.rpc.Code.RESOURCE_EXHAUSTED`.
     */
    slotCapacity?: string | null;
    /**
     * If true, any query using this reservation will also be submitted to the parent reservation. This allows the query to share the additional slot capacity of the parent with other queries in the parent reservation. If the parent also has this field set to true, then this process will continue until it encounters a reservation for which this is false. If false, a query using this reservation will execute with the maximum slot capacity as specified above. If not specified, default value is true. Ignored for top-level reservation.
     */
    useParentReservation?: boolean | null;
  }
  /**
   * A ReservationGrant allows a project to submit jobs of a certain type using slots from the specified reservation.
   */
  export interface Schema$ReservationGrant {
    /**
     * The resource which will use the reservation. E.g. projects/myproject, folders/123, organizations/456.
     */
    grantee?: string | null;
    /**
     * Which type of jobs will use the reservation.
     */
    jobType?: string | null;
    /**
     * Output only. Name of the resource. E.g.: projects/myproject/locations/eu/reservationGrants/123.
     */
    name?: string | null;
    /**
     * Resource name of the reservation. E.g., projects/myproject/locations/eu/reservations/my_reservation. This reservation must be in the same location as the grant. This reservation should belong to the same parent project.
     */
    reservation?: string | null;
  }
  /**
   * The response for ReservationService.SearchReservationGrants.
   */
  export interface Schema$SearchReservationGrantsResponse {
    /**
     * Token to retrieve the next page of results, or empty if there are no more results in the list.
     */
    nextPageToken?: string | null;
    /**
     * List of reservation grants visible to the user.
     */
    reservationGrants?: Schema$ReservationGrant[];
  }
  /**
   * Slot pool is a way to purchase slots with some minimum committed period of usage. Slot pool is immutable and cannot be deleted until the end of the commitment period. After the end of the commitment period, slots are still available but can be freely removed any time.  A slot pool resource exists as a child resource of a top-level reservation. Sum of all the ACTIVE pools slot_count is always equal to the reservation slot_capacity.
   */
  export interface Schema$SlotPool {
    /**
     * Output only. The end of the commitment period. Slot pool cannot be removed before commitment_end_time. It is applicable only for ACTIVE slot pools and is computed as a combination of the plan and the time when the slot pool became ACTIVE.
     */
    commitmentEndTime?: string | null;
    /**
     * Output only. The resource name of the slot pool, e.g.,    projects/myproject/locations/us-central1/reservations/myreservation/slotPools/123
     */
    name?: string | null;
    /**
     * Slot pool commitment plan.
     */
    plan?: string | null;
    /**
     * Number of slots in this pool.
     */
    slotCount?: string | null;
    /**
     * Output only.
     */
    state?: string | null;
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
    operations: Resource$Projects$Locations$Operations;
    reservationGrants: Resource$Projects$Locations$Reservationgrants;
    reservations: Resource$Projects$Locations$Reservations;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.operations = new Resource$Projects$Locations$Operations(
        this.context
      );
      this.reservationGrants = new Resource$Projects$Locations$Reservationgrants(
        this.context
      );
      this.reservations = new Resource$Projects$Locations$Reservations(
        this.context
      );
    }

    /**
     * bigqueryreservation.projects.locations.get
     * @desc Gets information about a location.
     * @alias bigqueryreservation.projects.locations.get
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

      const rootUrl =
        options.rootUrl || 'https://bigqueryreservation.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1alpha2/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
     * bigqueryreservation.projects.locations.list
     * @desc Lists information about the supported locations for this service.
     * @alias bigqueryreservation.projects.locations.list
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

      const rootUrl =
        options.rootUrl || 'https://bigqueryreservation.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1alpha2/{+name}/locations').replace(
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

    /**
     * bigqueryreservation.projects.locations.searchReservationGrants
     * @desc Look up grants for a specified resource for a particular region. If the request is about a project:   1) Grants created on the project will be returned if they exist.   2) Otherwise grants created on the closest ancestor will be returned.   3) Grants for different JobTypes will all be returned. Same logic applies if the request is about a folder. If the request is about an organization, then grants created on the organization will be returned (organization doesn't have ancestors). Comparing to ListReservationGrants, there are two behavior differences:   1) permission on the grantee will be verified in this API.   2) Hierarchy lookup (project->folder->organization) happens in this API.
     * @alias bigqueryreservation.projects.locations.searchReservationGrants
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {integer=} params.pageSize The maximum number of items to return.
     * @param {string=} params.pageToken The next_page_token value returned from a previous List request, if any.
     * @param {string} params.parent The parent resource name (containing project and location), which owns the grants. e.g.:   "projects/myproject/locations/us-central1".
     * @param {string=} params.query Please specify resource name as grantee in the query. e.g., "grantee=projects/myproject"       "grantee=folders/123"       "grantee=organizations/456"
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    searchReservationGrants(
      params?: Params$Resource$Projects$Locations$Searchreservationgrants,
      options?: MethodOptions
    ): GaxiosPromise<Schema$SearchReservationGrantsResponse>;
    searchReservationGrants(
      params: Params$Resource$Projects$Locations$Searchreservationgrants,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$SearchReservationGrantsResponse>,
      callback: BodyResponseCallback<Schema$SearchReservationGrantsResponse>
    ): void;
    searchReservationGrants(
      params: Params$Resource$Projects$Locations$Searchreservationgrants,
      callback: BodyResponseCallback<Schema$SearchReservationGrantsResponse>
    ): void;
    searchReservationGrants(
      callback: BodyResponseCallback<Schema$SearchReservationGrantsResponse>
    ): void;
    searchReservationGrants(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Searchreservationgrants
        | BodyResponseCallback<Schema$SearchReservationGrantsResponse>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$SearchReservationGrantsResponse>,
      callback?: BodyResponseCallback<Schema$SearchReservationGrantsResponse>
    ): void | GaxiosPromise<Schema$SearchReservationGrantsResponse> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Searchreservationgrants;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Searchreservationgrants;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://bigqueryreservation.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl + '/v1alpha2/{+parent}:SearchReservationGrants'
            ).replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$SearchReservationGrantsResponse>(
          parameters,
          callback
        );
      } else {
        return createAPIRequest<Schema$SearchReservationGrantsResponse>(
          parameters
        );
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
  export interface Params$Resource$Projects$Locations$Searchreservationgrants
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * The maximum number of items to return.
     */
    pageSize?: number;
    /**
     * The next_page_token value returned from a previous List request, if any.
     */
    pageToken?: string;
    /**
     * The parent resource name (containing project and location), which owns the grants. e.g.:   "projects/myproject/locations/us-central1".
     */
    parent?: string;
    /**
     * Please specify resource name as grantee in the query. e.g., "grantee=projects/myproject"       "grantee=folders/123"       "grantee=organizations/456"
     */
    query?: string;
  }

  export class Resource$Projects$Locations$Operations {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * bigqueryreservation.projects.locations.operations.cancel
     * @desc Starts asynchronous cancellation on a long-running operation.  The server makes a best effort to cancel the operation, but success is not guaranteed.  If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.  Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.
     * @alias bigqueryreservation.projects.locations.operations.cancel
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

      const rootUrl =
        options.rootUrl || 'https://bigqueryreservation.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1alpha2/{+name}:cancel').replace(
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
        createAPIRequest<Schema$Empty>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Empty>(parameters);
      }
    }

    /**
     * bigqueryreservation.projects.locations.operations.get
     * @desc Gets the latest state of a long-running operation.  Clients can use this method to poll the operation result at intervals as recommended by the API service.
     * @alias bigqueryreservation.projects.locations.operations.get
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

      const rootUrl =
        options.rootUrl || 'https://bigqueryreservation.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1alpha2/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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

  export class Resource$Projects$Locations$Reservationgrants {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * bigqueryreservation.projects.locations.reservationGrants.create
     * @desc Returns `google.rpc.Code.PERMISSION_DENIED` if user does not have 'bigquery.admin' permissions on the project using the reservation and the project that owns this reservation. Returns `google.rpc.Code.INVALID_ARGUMENT` when location of the grant does not match location of the reservation.
     * @alias bigqueryreservation.projects.locations.reservationGrants.create
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.parent The parent resource name of the reservation grant E.g.: projects/myproject/location/eu.
     * @param {().ReservationGrant} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    create(
      params?: Params$Resource$Projects$Locations$Reservationgrants$Create,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ReservationGrant>;
    create(
      params: Params$Resource$Projects$Locations$Reservationgrants$Create,
      options: MethodOptions | BodyResponseCallback<Schema$ReservationGrant>,
      callback: BodyResponseCallback<Schema$ReservationGrant>
    ): void;
    create(
      params: Params$Resource$Projects$Locations$Reservationgrants$Create,
      callback: BodyResponseCallback<Schema$ReservationGrant>
    ): void;
    create(callback: BodyResponseCallback<Schema$ReservationGrant>): void;
    create(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Reservationgrants$Create
        | BodyResponseCallback<Schema$ReservationGrant>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$ReservationGrant>,
      callback?: BodyResponseCallback<Schema$ReservationGrant>
    ): void | GaxiosPromise<Schema$ReservationGrant> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Reservationgrants$Create;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Reservationgrants$Create;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://bigqueryreservation.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1alpha2/{+parent}/reservationGrants').replace(
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
        createAPIRequest<Schema$ReservationGrant>(parameters, callback);
      } else {
        return createAPIRequest<Schema$ReservationGrant>(parameters);
      }
    }

    /**
     * bigqueryreservation.projects.locations.reservationGrants.delete
     * @desc Deletes a reservation grant. No expansion will happen. E.g: organizationA contains project1 and project2. Reservation res1 exists. CreateReservationGrant was invoked previously and following grants were created explicitly:   <organizationA, res1>   <project1, res1> Then deletion of <organizationA, res1> won't affect <project1, res1>. After deletion of <organizationA, res1>, queries from project1 will still use res1, while queries from project2 will use on-demand mode.
     * @alias bigqueryreservation.projects.locations.reservationGrants.delete
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.name Name of the resource, e.g.:   projects/myproject/locations/eu/reservationGrants/123
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    delete(
      params?: Params$Resource$Projects$Locations$Reservationgrants$Delete,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Empty>;
    delete(
      params: Params$Resource$Projects$Locations$Reservationgrants$Delete,
      options: MethodOptions | BodyResponseCallback<Schema$Empty>,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    delete(
      params: Params$Resource$Projects$Locations$Reservationgrants$Delete,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    delete(callback: BodyResponseCallback<Schema$Empty>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Reservationgrants$Delete
        | BodyResponseCallback<Schema$Empty>,
      optionsOrCallback?: MethodOptions | BodyResponseCallback<Schema$Empty>,
      callback?: BodyResponseCallback<Schema$Empty>
    ): void | GaxiosPromise<Schema$Empty> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Reservationgrants$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Reservationgrants$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://bigqueryreservation.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1alpha2/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
     * bigqueryreservation.projects.locations.reservationGrants.list
     * @desc Lists reservation grants. Only explicitly created grants will be returned. E.g: organizationA contains project1 and project2. Reservation res1 exists. CreateReservationGrant was invoked previously and following grants were created explicitly:   <organizationA, res1>   <project1, res1> Then this API will just return the above two grants for reservation res1, and no expansion/merge will happen.
     * @alias bigqueryreservation.projects.locations.reservationGrants.list
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {integer=} params.pageSize The maximum number of items to return.
     * @param {string=} params.pageToken The next_page_token value returned from a previous List request, if any.
     * @param {string} params.parent The parent resource name e.g.: projects/myproject/location/eu.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list(
      params?: Params$Resource$Projects$Locations$Reservationgrants$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ListReservationGrantsResponse>;
    list(
      params: Params$Resource$Projects$Locations$Reservationgrants$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ListReservationGrantsResponse>,
      callback: BodyResponseCallback<Schema$ListReservationGrantsResponse>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Reservationgrants$List,
      callback: BodyResponseCallback<Schema$ListReservationGrantsResponse>
    ): void;
    list(
      callback: BodyResponseCallback<Schema$ListReservationGrantsResponse>
    ): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Reservationgrants$List
        | BodyResponseCallback<Schema$ListReservationGrantsResponse>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$ListReservationGrantsResponse>,
      callback?: BodyResponseCallback<Schema$ListReservationGrantsResponse>
    ): void | GaxiosPromise<Schema$ListReservationGrantsResponse> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Reservationgrants$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Reservationgrants$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://bigqueryreservation.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1alpha2/{+parent}/reservationGrants').replace(
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
        createAPIRequest<Schema$ListReservationGrantsResponse>(
          parameters,
          callback
        );
      } else {
        return createAPIRequest<Schema$ListReservationGrantsResponse>(
          parameters
        );
      }
    }
  }

  export interface Params$Resource$Projects$Locations$Reservationgrants$Create
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * The parent resource name of the reservation grant E.g.: projects/myproject/location/eu.
     */
    parent?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$ReservationGrant;
  }
  export interface Params$Resource$Projects$Locations$Reservationgrants$Delete
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Name of the resource, e.g.:   projects/myproject/locations/eu/reservationGrants/123
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Locations$Reservationgrants$List
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * The maximum number of items to return.
     */
    pageSize?: number;
    /**
     * The next_page_token value returned from a previous List request, if any.
     */
    pageToken?: string;
    /**
     * The parent resource name e.g.: projects/myproject/location/eu.
     */
    parent?: string;
  }

  export class Resource$Projects$Locations$Reservations {
    context: APIRequestContext;
    slotPools: Resource$Projects$Locations$Reservations$Slotpools;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.slotPools = new Resource$Projects$Locations$Reservations$Slotpools(
        this.context
      );
    }

    /**
     * bigqueryreservation.projects.locations.reservations.create
     * @desc Creates a new reservation resource. Multiple reservations are created if the ancestor reservations do not exist.
     * @alias bigqueryreservation.projects.locations.reservations.create
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.parent Project, location, and (optionally) reservation name. E.g.,    projects/myproject/locations/us-central1/reservations/parent
     * @param {string=} params.reservationId The reservation ID relative to the parent, e.g., "dev". This field must only contain alphanumeric characters.
     * @param {().Reservation} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    create(
      params?: Params$Resource$Projects$Locations$Reservations$Create,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Reservation>;
    create(
      params: Params$Resource$Projects$Locations$Reservations$Create,
      options: MethodOptions | BodyResponseCallback<Schema$Reservation>,
      callback: BodyResponseCallback<Schema$Reservation>
    ): void;
    create(
      params: Params$Resource$Projects$Locations$Reservations$Create,
      callback: BodyResponseCallback<Schema$Reservation>
    ): void;
    create(callback: BodyResponseCallback<Schema$Reservation>): void;
    create(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Reservations$Create
        | BodyResponseCallback<Schema$Reservation>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$Reservation>,
      callback?: BodyResponseCallback<Schema$Reservation>
    ): void | GaxiosPromise<Schema$Reservation> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Reservations$Create;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Reservations$Create;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://bigqueryreservation.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1alpha2/{+parent}/reservations').replace(
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
        createAPIRequest<Schema$Reservation>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Reservation>(parameters);
      }
    }

    /**
     * bigqueryreservation.projects.locations.reservations.createReservation
     * @desc Creates a new reservation resource. Multiple reservations are created if the ancestor reservations do not exist.
     * @alias bigqueryreservation.projects.locations.reservations.createReservation
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.parent Project, location, and (optionally) reservation name. E.g.,    projects/myproject/locations/us-central1/reservations/parent
     * @param {string=} params.reservationId The reservation ID relative to the parent, e.g., "dev". This field must only contain alphanumeric characters.
     * @param {().Reservation} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    createReservation(
      params?: Params$Resource$Projects$Locations$Reservations$Createreservation,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Reservation>;
    createReservation(
      params: Params$Resource$Projects$Locations$Reservations$Createreservation,
      options: MethodOptions | BodyResponseCallback<Schema$Reservation>,
      callback: BodyResponseCallback<Schema$Reservation>
    ): void;
    createReservation(
      params: Params$Resource$Projects$Locations$Reservations$Createreservation,
      callback: BodyResponseCallback<Schema$Reservation>
    ): void;
    createReservation(callback: BodyResponseCallback<Schema$Reservation>): void;
    createReservation(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Reservations$Createreservation
        | BodyResponseCallback<Schema$Reservation>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$Reservation>,
      callback?: BodyResponseCallback<Schema$Reservation>
    ): void | GaxiosPromise<Schema$Reservation> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Reservations$Createreservation;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Reservations$Createreservation;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://bigqueryreservation.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1alpha2/{+parent}').replace(
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
        createAPIRequest<Schema$Reservation>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Reservation>(parameters);
      }
    }

    /**
     * bigqueryreservation.projects.locations.reservations.delete
     * @desc Deletes a reservation. Returns `google.rpc.Code.FAILED_PRECONDITION` in the following cases:   1. When reservation has child reservations. This check can be bypassed by      setting DeleteReservationRequest.force flag to true.   2. When top-level reservation with slot pools is being deleted.
     * @alias bigqueryreservation.projects.locations.reservations.delete
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {boolean=} params.force If true, deletes all the child reservations of the given reservation. Otherwise, attempting to delete a reservation that has child reservations will fail with error code `google.rpc.Code.FAILED_PRECONDITION`.
     * @param {string} params.name Resource name of the reservation to retrieve. E.g.,    projects/myproject/locations/us-central1/reservations/my_reservation
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    delete(
      params?: Params$Resource$Projects$Locations$Reservations$Delete,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Empty>;
    delete(
      params: Params$Resource$Projects$Locations$Reservations$Delete,
      options: MethodOptions | BodyResponseCallback<Schema$Empty>,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    delete(
      params: Params$Resource$Projects$Locations$Reservations$Delete,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    delete(callback: BodyResponseCallback<Schema$Empty>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Reservations$Delete
        | BodyResponseCallback<Schema$Empty>,
      optionsOrCallback?: MethodOptions | BodyResponseCallback<Schema$Empty>,
      callback?: BodyResponseCallback<Schema$Empty>
    ): void | GaxiosPromise<Schema$Empty> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Reservations$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Reservations$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://bigqueryreservation.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1alpha2/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
     * bigqueryreservation.projects.locations.reservations.get
     * @desc Returns information about the reservation.
     * @alias bigqueryreservation.projects.locations.reservations.get
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.name Resource name of the reservation to retrieve. E.g.,    projects/myproject/locations/us-central1/reservations/path/to/reserv
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    get(
      params?: Params$Resource$Projects$Locations$Reservations$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Reservation>;
    get(
      params: Params$Resource$Projects$Locations$Reservations$Get,
      options: MethodOptions | BodyResponseCallback<Schema$Reservation>,
      callback: BodyResponseCallback<Schema$Reservation>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Reservations$Get,
      callback: BodyResponseCallback<Schema$Reservation>
    ): void;
    get(callback: BodyResponseCallback<Schema$Reservation>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Reservations$Get
        | BodyResponseCallback<Schema$Reservation>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$Reservation>,
      callback?: BodyResponseCallback<Schema$Reservation>
    ): void | GaxiosPromise<Schema$Reservation> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Reservations$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Reservations$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://bigqueryreservation.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1alpha2/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$Reservation>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Reservation>(parameters);
      }
    }

    /**
     * bigqueryreservation.projects.locations.reservations.list
     * @desc Lists all the reservations for the project in the specified location.
     * @alias bigqueryreservation.projects.locations.reservations.list
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string=} params.filter Can be used to filter out reservations based on names, capacity, etc, e.g.: filter="reservation.slot_capacity > 200" filter="reservation.name = \"*dev/x\"" Advanced filtering syntax can be [here](https://cloud.google.com/logging/docs/view/advanced-filters).
     * @param {integer=} params.pageSize The maximum number of items to return.
     * @param {string=} params.pageToken The next_page_token value returned from a previous List request, if any.
     * @param {string} params.parent The parent resource name containing project and location, e.g.:   "projects/myproject/locations/us-central1"
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list(
      params?: Params$Resource$Projects$Locations$Reservations$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ListReservationsResponse>;
    list(
      params: Params$Resource$Projects$Locations$Reservations$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ListReservationsResponse>,
      callback: BodyResponseCallback<Schema$ListReservationsResponse>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Reservations$List,
      callback: BodyResponseCallback<Schema$ListReservationsResponse>
    ): void;
    list(callback: BodyResponseCallback<Schema$ListReservationsResponse>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Reservations$List
        | BodyResponseCallback<Schema$ListReservationsResponse>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$ListReservationsResponse>,
      callback?: BodyResponseCallback<Schema$ListReservationsResponse>
    ): void | GaxiosPromise<Schema$ListReservationsResponse> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Reservations$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Reservations$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://bigqueryreservation.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1alpha2/{+parent}/reservations').replace(
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
        createAPIRequest<Schema$ListReservationsResponse>(parameters, callback);
      } else {
        return createAPIRequest<Schema$ListReservationsResponse>(parameters);
      }
    }

    /**
     * bigqueryreservation.projects.locations.reservations.patch
     * @desc Updates an existing reservation resource. Applicable only for child reservations.
     * @alias bigqueryreservation.projects.locations.reservations.patch
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.name The resource name of the reservation, e.g., "projects/x/locations/x/reservations/dev/team/product". Reservation names (e.g., "dev/team/product") exceeding a depth of six will fail with `google.rpc.Code.INVALID_ARGUMENT`.
     * @param {string=} params.updateMask Standard field mask for the set of fields to be updated.
     * @param {().Reservation} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    patch(
      params?: Params$Resource$Projects$Locations$Reservations$Patch,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Reservation>;
    patch(
      params: Params$Resource$Projects$Locations$Reservations$Patch,
      options: MethodOptions | BodyResponseCallback<Schema$Reservation>,
      callback: BodyResponseCallback<Schema$Reservation>
    ): void;
    patch(
      params: Params$Resource$Projects$Locations$Reservations$Patch,
      callback: BodyResponseCallback<Schema$Reservation>
    ): void;
    patch(callback: BodyResponseCallback<Schema$Reservation>): void;
    patch(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Reservations$Patch
        | BodyResponseCallback<Schema$Reservation>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$Reservation>,
      callback?: BodyResponseCallback<Schema$Reservation>
    ): void | GaxiosPromise<Schema$Reservation> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Reservations$Patch;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Reservations$Patch;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://bigqueryreservation.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1alpha2/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$Reservation>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Reservation>(parameters);
      }
    }
  }

  export interface Params$Resource$Projects$Locations$Reservations$Create
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Project, location, and (optionally) reservation name. E.g.,    projects/myproject/locations/us-central1/reservations/parent
     */
    parent?: string;
    /**
     * The reservation ID relative to the parent, e.g., "dev". This field must only contain alphanumeric characters.
     */
    reservationId?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$Reservation;
  }
  export interface Params$Resource$Projects$Locations$Reservations$Createreservation
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Project, location, and (optionally) reservation name. E.g.,    projects/myproject/locations/us-central1/reservations/parent
     */
    parent?: string;
    /**
     * The reservation ID relative to the parent, e.g., "dev". This field must only contain alphanumeric characters.
     */
    reservationId?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$Reservation;
  }
  export interface Params$Resource$Projects$Locations$Reservations$Delete
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * If true, deletes all the child reservations of the given reservation. Otherwise, attempting to delete a reservation that has child reservations will fail with error code `google.rpc.Code.FAILED_PRECONDITION`.
     */
    force?: boolean;
    /**
     * Resource name of the reservation to retrieve. E.g.,    projects/myproject/locations/us-central1/reservations/my_reservation
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Locations$Reservations$Get
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Resource name of the reservation to retrieve. E.g.,    projects/myproject/locations/us-central1/reservations/path/to/reserv
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Locations$Reservations$List
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Can be used to filter out reservations based on names, capacity, etc, e.g.: filter="reservation.slot_capacity > 200" filter="reservation.name = \"*dev/x\"" Advanced filtering syntax can be [here](https://cloud.google.com/logging/docs/view/advanced-filters).
     */
    filter?: string;
    /**
     * The maximum number of items to return.
     */
    pageSize?: number;
    /**
     * The next_page_token value returned from a previous List request, if any.
     */
    pageToken?: string;
    /**
     * The parent resource name containing project and location, e.g.:   "projects/myproject/locations/us-central1"
     */
    parent?: string;
  }
  export interface Params$Resource$Projects$Locations$Reservations$Patch
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * The resource name of the reservation, e.g., "projects/x/locations/x/reservations/dev/team/product". Reservation names (e.g., "dev/team/product") exceeding a depth of six will fail with `google.rpc.Code.INVALID_ARGUMENT`.
     */
    name?: string;
    /**
     * Standard field mask for the set of fields to be updated.
     */
    updateMask?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$Reservation;
  }

  export class Resource$Projects$Locations$Reservations$Slotpools {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * bigqueryreservation.projects.locations.reservations.slotPools.delete
     * @desc Deletes a slot pool. Attempting to delete slot pool before its commitment_end_time will fail with the error code `google.rpc.Code.FAILED_PRECONDITION`.
     * @alias bigqueryreservation.projects.locations.reservations.slotPools.delete
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.name Resource name of the slot pool to delete. E.g.,    projects/myproject/locations/us-central1/reservations/my_reservation/slotPools/123
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    delete(
      params?: Params$Resource$Projects$Locations$Reservations$Slotpools$Delete,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Empty>;
    delete(
      params: Params$Resource$Projects$Locations$Reservations$Slotpools$Delete,
      options: MethodOptions | BodyResponseCallback<Schema$Empty>,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    delete(
      params: Params$Resource$Projects$Locations$Reservations$Slotpools$Delete,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    delete(callback: BodyResponseCallback<Schema$Empty>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Reservations$Slotpools$Delete
        | BodyResponseCallback<Schema$Empty>,
      optionsOrCallback?: MethodOptions | BodyResponseCallback<Schema$Empty>,
      callback?: BodyResponseCallback<Schema$Empty>
    ): void | GaxiosPromise<Schema$Empty> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Reservations$Slotpools$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Reservations$Slotpools$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://bigqueryreservation.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1alpha2/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
     * bigqueryreservation.projects.locations.reservations.slotPools.get
     * @desc Returns information about the slot pool.
     * @alias bigqueryreservation.projects.locations.reservations.slotPools.get
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.name Resource name of the slot pool to retrieve. E.g.,    projects/myproject/locations/us-central1/reservations/my_reservation/slotPools/123
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    get(
      params?: Params$Resource$Projects$Locations$Reservations$Slotpools$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$SlotPool>;
    get(
      params: Params$Resource$Projects$Locations$Reservations$Slotpools$Get,
      options: MethodOptions | BodyResponseCallback<Schema$SlotPool>,
      callback: BodyResponseCallback<Schema$SlotPool>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Reservations$Slotpools$Get,
      callback: BodyResponseCallback<Schema$SlotPool>
    ): void;
    get(callback: BodyResponseCallback<Schema$SlotPool>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Reservations$Slotpools$Get
        | BodyResponseCallback<Schema$SlotPool>,
      optionsOrCallback?: MethodOptions | BodyResponseCallback<Schema$SlotPool>,
      callback?: BodyResponseCallback<Schema$SlotPool>
    ): void | GaxiosPromise<Schema$SlotPool> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Reservations$Slotpools$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Reservations$Slotpools$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://bigqueryreservation.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1alpha2/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$SlotPool>(parameters, callback);
      } else {
        return createAPIRequest<Schema$SlotPool>(parameters);
      }
    }

    /**
     * bigqueryreservation.projects.locations.reservations.slotPools.list
     * @desc Lists all the slot pools for the reservation.
     * @alias bigqueryreservation.projects.locations.reservations.slotPools.list
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {integer=} params.pageSize The maximum number of items to return.
     * @param {string=} params.pageToken The next_page_token value returned from a previous List request, if any.
     * @param {string} params.parent Resource name of the parent reservation. Only top-level reservations can have slot pools. E.g.,    projects/myproject/locations/us-central1/reservations/my_reservation
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list(
      params?: Params$Resource$Projects$Locations$Reservations$Slotpools$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ListSlotPoolsResponse>;
    list(
      params: Params$Resource$Projects$Locations$Reservations$Slotpools$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ListSlotPoolsResponse>,
      callback: BodyResponseCallback<Schema$ListSlotPoolsResponse>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Reservations$Slotpools$List,
      callback: BodyResponseCallback<Schema$ListSlotPoolsResponse>
    ): void;
    list(callback: BodyResponseCallback<Schema$ListSlotPoolsResponse>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Reservations$Slotpools$List
        | BodyResponseCallback<Schema$ListSlotPoolsResponse>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$ListSlotPoolsResponse>,
      callback?: BodyResponseCallback<Schema$ListSlotPoolsResponse>
    ): void | GaxiosPromise<Schema$ListSlotPoolsResponse> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Reservations$Slotpools$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Reservations$Slotpools$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://bigqueryreservation.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1alpha2/{+parent}/slotPools').replace(
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
        createAPIRequest<Schema$ListSlotPoolsResponse>(parameters, callback);
      } else {
        return createAPIRequest<Schema$ListSlotPoolsResponse>(parameters);
      }
    }
  }

  export interface Params$Resource$Projects$Locations$Reservations$Slotpools$Delete
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Resource name of the slot pool to delete. E.g.,    projects/myproject/locations/us-central1/reservations/my_reservation/slotPools/123
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Locations$Reservations$Slotpools$Get
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Resource name of the slot pool to retrieve. E.g.,    projects/myproject/locations/us-central1/reservations/my_reservation/slotPools/123
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Locations$Reservations$Slotpools$List
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * The maximum number of items to return.
     */
    pageSize?: number;
    /**
     * The next_page_token value returned from a previous List request, if any.
     */
    pageToken?: string;
    /**
     * Resource name of the parent reservation. Only top-level reservations can have slot pools. E.g.,    projects/myproject/locations/us-central1/reservations/my_reservation
     */
    parent?: string;
  }
}
